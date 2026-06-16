// ============================================================
// 2026 World Cup - Enhanced Application
// ============================================================

const App = {
  currentPage: "home",
  selectedTeam: null,
  predictions: {},
  simulated: false,

  init() {
    this.renderDate();
    this.bindNav();
    this.bindTheme();
    this.loadPredictions();
    this.addAdminNav();
    
    // Restore edit mode button state
    if (this.editMode) {
      const btn = document.getElementById("editModeBtn");
      if (btn) { btn.classList.add("active"); btn.innerHTML = "✅ 完成编辑"; }
    }
    this.navigate("home");
  },

  renderDate() {
    const d = new Date();
    document.getElementById("todayDate").textContent =
      d.toLocaleDateString("zh-CN", { year: "numeric", month: "long", day: "numeric", weekday: "long" });
  },

  bindNav() {
    document.querySelectorAll(".nav-item[data-page]").forEach((el) => {
      el.addEventListener("click", () => this.navigate(el.dataset.page));
    });
    document.getElementById("navSimulate").addEventListener("click", () => this.simulateAll());
    // Search on enter
    const sb = document.getElementById("globalSearch");
    if (sb) sb.addEventListener("keydown", (e) => { if (e.key === "Enter") this.doGlobalSearch(sb.value); });
  },

  bindTheme() {
    document.querySelectorAll(".theme-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const theme = btn.dataset.theme;
        document.documentElement.setAttribute("data-theme", theme);
        document.querySelectorAll(".theme-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        localStorage.setItem("wc-theme", theme);
      });
    });
    const saved = localStorage.getItem("wc-theme");
    if (saved) {
      document.documentElement.setAttribute("data-theme", saved);
      const btn = document.querySelector(`.theme-btn[data-theme="${saved}"]`);
      if (btn) btn.classList.add("active");
    }
  },

  navigate(page, param) {
    this.currentPage = page;
    document.querySelectorAll(".nav-item").forEach((n) => n.classList.remove("active"));
    const navEl = document.querySelector(`.nav-item[data-page="${page}"]`);
    if (navEl) navEl.classList.add("active");
    this.selectedTeam = param || null;
    this.render();
  },

  render() {
    const main = document.getElementById("mainContent");
    switch (this.currentPage) {
      case "home": main.innerHTML = this.homePage(); break;
      case "matches": main.innerHTML = this.matchesPage(); break;
      case "standings": main.innerHTML = this.standingsPage(); break;
      case "teams": main.innerHTML = this.teamsPage(); break;
      case "team": main.innerHTML = this.teamDetailPage(this.selectedTeam); break;
      case "predictions": main.innerHTML = this.predictionsPage(); break;
      case "bracket": main.innerHTML = this.bracketPage(); break;
      case "news": main.innerHTML = this.newsPage(); break;
      case "stats": main.innerHTML = this.statsPage(); break;
      case "about": main.innerHTML = this.aboutPage(); break;
      case "admin": main.innerHTML = this.adminPage(); break;
      case "compare": main.innerHTML = this.comparePage(); break;
      case "calculator": main.innerHTML = this.calcPage(); break;
      case "calendar": main.innerHTML = this.calendarPage(); break;
      default: main.innerHTML = this.homePage();
    }
    this.afterRender();
    this.updateHeaderCounts();
  },

  afterRender() {
    document.querySelectorAll(".team-card").forEach((c) => {
      c.addEventListener("click", () => this.navigate("team", c.dataset.team));
    });
    document.querySelectorAll(".match-card:not(.no-click)").forEach((c) => {
      c.addEventListener("click", () => this.showMatchDetail(c.dataset.match));
    });
    document.querySelectorAll(".news-card").forEach((c) => {
      c.addEventListener("click", () => this.showNews(c.dataset.news));
    });
    document.querySelectorAll(".player-name").forEach((c) => {
      c.addEventListener("click", (e) => { e.stopPropagation(); this.showPlayer(c.dataset.team, c.dataset.idx); });
    });
    document.querySelectorAll(".tab").forEach((t) => {
      t.addEventListener("click", () => {
        document.querySelectorAll(".tab").forEach((x) => x.classList.remove("active"));
        t.classList.add("active");
        const target = t.dataset.tab;
        document.querySelectorAll(".tab-panel").forEach((p) => p.style.display = "none");
        const panel = document.getElementById("tab-" + target);
        if (panel) panel.style.display = "block";
      });
    });
    document.querySelectorAll(".filter-select").forEach((s) => {
      s.addEventListener("change", () => this.render());
    });
    // Calc buttons
    document.querySelectorAll(".calc-btn").forEach((b) => {
      b.addEventListener("click", () => {
        const gid = b.dataset.group;
        const home = b.dataset.home;
        const away = b.dataset.away;
        const result = b.dataset.result;
        this.setCalcResult(gid, home, away, result);
      });
    });
    // Admin tabs
    document.querySelectorAll("#adminTabs .tab").forEach((t) => {
      t.addEventListener("click", () => {
        document.querySelectorAll("#adminTabs .tab").forEach((x) => x.classList.remove("active"));
        t.classList.add("active");
        const target = t.dataset.tab;
        document.querySelectorAll("#adminTabs ~ .tab-panel").forEach((p) => p.style.display = "none");
        const panel = document.getElementById("tab-" + target);
        if (panel) panel.style.display = "block";
      });
    });
    // Edit mode - add click handlers to match scores
    if (this.editMode) {
      document.querySelectorAll(".match-card .score").forEach((el) => {
        el.style.cursor = "pointer";
        el.title = "点击编辑比分";
        el.addEventListener("click", (e) => {
          e.stopPropagation();
          const card = el.closest(".match-card");
          if (card && card.dataset.match) {
            this.showMatchEditor(card.dataset.match);
          }
        });
      });
    }
    // Theme picker in about page
    if (document.getElementById("themePicker")) {
      document.querySelectorAll(".theme-option").forEach((o) => {
        o.addEventListener("click", () => {
          const t = o.dataset.t;
          document.documentElement.setAttribute("data-theme", t);
          document.querySelectorAll(".theme-btn").forEach((b) => b.classList.remove("active"));
          const btn = document.querySelector(`.theme-btn[data-theme="${t}"]`);
          if (btn) btn.classList.add("active");
          localStorage.setItem("wc-theme", t);
          document.querySelectorAll(".theme-option").forEach((x) => x.classList.remove("active"));
          o.classList.add("active");
        });
      });
    }
  },

  updateHeaderCounts() {
    const total = WorldCupData.matches.length;
    const live = WorldCupData.matches.filter((m) => m.status === "live").length;
    document.getElementById("matchCountChip").textContent = total + " 场比赛";
    document.getElementById("liveCountChip").textContent = live > 0 ? live + " 进行中" : "赛程已发布";
  },

  // ============================================================
  // TROPHY SVG
  // ============================================================
  trophySVG() {
    return `<svg class="trophy-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="tg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#e8b830"/><stop offset="50%" stop-color="#f0d060"/><stop offset="100%" stop-color="#c49a1a"/></linearGradient></defs>
      <path d="M50 8L30 22c-2 1.5-3 4-3 6.5v5c0 5 1.5 9.5 4 13L28 48c-1 3 0 6 2.5 7.5l9 5.5c1.5 1 3.5 1.5 5.5 1.5h10c2 0 4-.5 5.5-1.5l9-5.5c2.5-1.5 3.5-4.5 2.5-7.5l-3-10.5c2.5-3.5 4-8 4-13v-5c0-2.5-1-5-3-6.5L50 8z" fill="url(#tg)" stroke="#a67c1a" stroke-width="1"/>
      <rect x="44" y="48" width="12" height="6" rx="1" fill="#a67c1a"/>
      <rect x="40" y="54" width="20" height="4" rx="2" fill="#c49a1a"/>
      <rect x="42" y="58" width="16" height="3" rx="1" fill="#a67c1a"/>
      <ellipse cx="50" cy="65" rx="8" ry="3" fill="#c49a1a" opacity="0.5"/>
      <path d="M32 12c-4 3-7 8-8 13s-1 11 0 14" fill="none" stroke="#c49a1a" stroke-width="2" stroke-linecap="round"/>
      <path d="M68 12c4 3 7 8 8 13s1 11 0 14" fill="none" stroke="#c49a1a" stroke-width="2" stroke-linecap="round"/>
      <ellipse cx="50" cy="72" rx="6" ry="2" fill="url(#tg)" opacity="0.3"/>
    </svg>`;
  },

  footballSVG() {
    return `<svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="14" r="12" fill="#fff" stroke="#ccc" stroke-width="1"/>
      <path d="M14 2v24M2 14h24M7 7l14 14M21 7l-14 14" stroke="#ccc" stroke-width="0.5" opacity="0.5"/>
      <path d="M10 5l4-1 4 1-1 4-3 2-3-2-1-4z" fill="#333" opacity="0.8"/>
      <path d="M18 10l4-1 1 4-2 3-4-1-1-3 2-2z" fill="#333" opacity="0.8"/>
      <path d="M18 18l1 4-4 1-4-1 1-4 3-2 3 2z" fill="#333" opacity="0.8"/>
      <path d="M10 18l-4 1-1-4 2-3 4 1 1 3-2 2z" fill="#333" opacity="0.8"/>
      <circle cx="14" cy="14" r="3" fill="#333" opacity="0.6"/>
    </svg>`;
  },

  // ============================================================
  // HOME PAGE
  // ============================================================
  homePage() {
    const upcoming = this.getUpcomingMatches(6);
    const news = getNews().slice(0, 3);
    const stats = this.computeTournamentStats();
    const groupTables = WorldCupData.groups.slice(0, 4).map((g) => this.groupTableHtml(g.id)).join("");
    const preds = this.getTopPredictions(3);

    return `<div class="hero">
  <div class="hero-content">
    <div style="flex-shrink:0">${this.trophySVG()}</div>
    <div class="hero-text">
      <h1>🏆 2026 FIFA 世界杯</h1>
      <p>美国 · 加拿大 · 墨西哥 | 2026.6.11 — 7.19 | 48队 · 104场</p>
      <div class="countdown">
        <span class="label">距开幕</span>
        <span class="num">${this.countdownDays()}</span>
        <span class="label">天</span>
      </div>
    </div>
  </div>
</div>
<div class="stats-bar">
  <div class="stat-card"><div class="num">48</div><div class="label">参赛球队</div></div>
  <div class="stat-card"><div class="num">${stats.matchesPlayed}</div><div class="label">已赛场次</div></div>
  <div class="stat-card"><div class="num">${stats.totalGoals}</div><div class="label">总进球</div></div>
  <div class="stat-card"><div class="num">${stats.avgGoals.toFixed(1)}</div><div class="label">场均进球</div></div>
  <div class="stat-card"><div class="num">12</div><div class="label">小组数</div></div>
  <div class="stat-card"><div class="num">${stats.matchesPlayed > 0 ? Math.round(stats.homeWins / stats.matchesPlayed * 100) + "%" : "0%"}</div><div class="label">主队胜率</div></div>
</div>
<div class="section-header"><h2>${this.footballSVG()} 近期焦点赛事</h2><a class="more" onclick="App.navigate('matches')">查看全部 →</a></div>
<div class="card-grid card-grid-2">${upcoming.map((m) => this.matchCardHtml(m)).join("")}</div>
<div class="section-header" style="margin-top:28px"><h2>📊 最新积分榜</h2><a class="more" onclick="App.navigate('standings')">查看全部 →</a></div>
<div class="standings-container">${groupTables}</div>
<div class="section-header" style="margin-top:28px"><h2>📰 最新资讯</h2><a class="more" onclick="App.navigate('news')">更多新闻 →</a></div>
<div class="card-grid card-grid-2">${news.map((n) => this.newsCardHtml(n)).join("")}</div>
<div class="section-header" style="margin-top:28px"><h2>🔮 AI赛果预测</h2><a class="more" onclick="App.navigate('predictions')">所有预测 →</a></div>
<div class="card-grid card-grid-2">${preds.map((p) => this.predictionCardHtml(p)).join("")}</div>`;
  },

  // ============================================================
  // MATCHES PAGE
  // ============================================================
  matchesPage() {
    const groups = WorldCupData.groups;
    const groupOpts = `<option value="">全部小组</option>${groups.map((g) => `<option value="${g.id}">${g.name}</option>`).join("")}`;
    const stageOpts = `<option value="">全部阶段</option><option value="小组赛">小组赛</option>`;
    const teamOpts = `<option value="">全部球队</option>${Object.keys(WorldCupData.teams).sort().map((k) => `<option value="${k}">${WorldCupData.teams[k].name}</option>`).join("")}`;
    return `<div class="section-header"><h2>⚽ 全部赛程</h2></div>
<div class="filter-bar">
  <select class="filter-select" id="mf-group">${groupOpts}</select>
  <select class="filter-select" id="mf-stage">${stageOpts}</select>
  <select class="filter-select" id="mf-team">${teamOpts}</select>
</div>
<div class="card-grid card-grid-2">${WorldCupData.matches.map((m) => this.matchCardHtml(m)).join("")}</div>`;
  },

  // ============================================================
  // STANDINGS PAGE
  // ============================================================
  standingsPage() {
    const tables = WorldCupData.groups.map((g) => this.groupTableHtml(g.id));
    return `<div class="section-header"><h2>📊 小组积分榜</h2></div>
<p class="l">每组前两名 <span class="chip chip-green">自动晋级</span> 及8个最佳第三名 <span class="chip chip-blue">待定</span> 晋级32强</p>
<div class="standings-container">${tables.join("")}</div>`;
  },

  // ============================================================
  // TEAMS PAGE
  // ============================================================
  teamsPage() {
    const teams = Object.entries(WorldCupData.teams).sort((a, b) => a[1].fifaRank - b[1].fifaRank);
    return `<div class="section-header"><h2>🏳️ 参赛球队 (${teams.length}队)</h2></div>
<p class="l">按FIFA排名排序，点击查看详细名单及教练团队</p>
<div class="card-grid card-grid-6">${teams.map(([id, t]) => `
  <div class="team-card" data-team="${id}">
    <div class="flag">${teamFlag(id)}</div>
    <div class="name">${t.name}</div>
    <div class="rank">#${t.fifaRank} · ${t.region}</div>
  </div>`).join("")}
</div>`;
  },

  // ============================================================
  // TEAM DETAIL PAGE
  // ============================================================
  teamDetailPage(id) {
    const t = WorldCupData.teams[id];
    if (!t) return "<div class='empty'>球队信息未找到</div>";
    const sq = getSquad(id);
    const group = WorldCupData.groups.find((g) => g.teams.includes(id));
    const groupName = group ? group.name : "未分组";
    const matches = WorldCupData.matches.filter((m) => m.home === id || m.away === id);
    let coachHtml = "";
    if (sq) {
      coachHtml = `<div class="coach-info">
  <div><span class="label">主教练</span><br><span class="val">${sq.coach.name}</span></div>
  <div><span class="label">国籍</span><br><span class="val">${sq.coach.nationality}</span></div>
  <div><span class="label">助理教练</span><br><span class="val">${sq.assistants.join(" / ")}</span></div>
</div>`;
    }
    let squadHtml = "";
    if (sq && sq.players.length) {
      const positions = ["GK", "DF", "MF", "FW"];
      const posNames = { GK: "门将", DF: "后卫", MF: "中场", FW: "前锋" };
      squadHtml = positions.map((pos) => {
        const players = sq.players.filter((p) => p.pos === pos);
        if (!players.length) return "";
        return `<tr><td colspan="4" style="background:var(--secondary);font-weight:600;font-size:0.78rem">${posNames[pos]} (${players.length}人)</td></tr>
${players.map((p, pi) => `<tr><td><span class="pos-badge pos-${pos}">${pos}</span></td><td><span class="player-name" data-team="${id}" data-idx="${sq.players.indexOf(p)}" style="cursor:pointer;text-decoration:underline;text-decoration-style:dotted">${p.name}</span></td><td>${p.age}</td><td>${p.club}</td></tr>`).join("")}`;
      }).join("");
      squadHtml = `<table class="squad-table"><tr><th>位置</th><th>球员</th><th>年龄</th><th>俱乐部</th></tr>${squadHtml}</table>`;
    } else {
      squadHtml = `<p class="empty">球员名单即将更新</p>`;
    }
    return `<div class="back-link" onclick="App.navigate('teams')">← 返回球队列表</div>
<div class="team-detail">
  <div class="header">
    <div class="flag">${teamFlag(id)}</div>
    <div class="info">
      <h2>${t.name}</h2>
      <p>FIFA排名 #${t.fifaRank} · ${t.region} · ${groupName} · 主教练: ${t.coach}</p>
    </div>
  </div>
</div>
${coachHtml}
<div class="section-header"><h2>📋 参赛名单</h2></div>
${squadHtml}
<div class="section-header" style="margin-top:24px"><h2>⚽ 近期赛程</h2></div>
<div class="card-grid card-grid-2">${matches.map((m) => this.matchCardHtml(m)).join("")}</div>`;
  },

  // ============================================================
  // TEAM COMPARISON PAGE (NEW)
  // ============================================================
  comparePage() {
    const teamOpts = Object.keys(WorldCupData.teams).sort().map((k) => `<option value="${k}">${WorldCupData.teams[k].name}</option>`).join("");
    const t1 = this._cmp1 || "BRA";
    const t2 = this._cmp2 || "ARG";
    this._cmp1 = t1;
    this._cmp2 = t2;
    return `<div class="section-header"><h2>🆚 球队实力对比</h2></div>
<p class="l">选择两支球队，全方位对比实力数据</p>
<div class="compare-selector">
  <select id="cmp1" onchange="App._cmp1=this.value;App.render()">${teamOpts.replace(`value="${t1}"`, `value="${t1}" selected`)}</select>
  <div class="compare-vs">VS</div>
  <select id="cmp2" onchange="App._cmp2=this.value;App.render()">${teamOpts.replace(`value="${t2}"`, `value="${t2}" selected`)}</select>
</div>
${this.compareResultHtml(t1, t2)}`;
  },

  compareResultHtml(t1, t2) {
    const a = WorldCupData.teams[t1];
    const b = WorldCupData.teams[t2];
    if (!a || !b) return '<div class="empty">请选择两支球队</div>';
    const sq1 = getSquad(t1);
    const sq2 = getSquad(t2);
    const avgAge1 = sq1 ? Math.round(sq1.players.reduce((s, p) => s + p.age, 0) / sq1.players.length) : 0;
    const avgAge2 = sq2 ? Math.round(sq2.players.reduce((s, p) => s + p.age, 0) / sq2.players.length) : 0;
    const better = (va, vb) => va < vb ? "better" : va > vb ? "worse" : "";
    const betterRev = (va, vb) => va > vb ? "better" : va < vb ? "worse" : "";
    return `<div class="compare-cards">
  <div class="compare-card">
    <div class="flag">${teamFlag(t1)}</div>
    <div class="name">${a.name}</div>
    <table class="compare-table">
      <tr><td class="stat-label">FIFA排名</td><td class="stat-val ${better(a.fifaRank, b.fifaRank)}">#${a.fifaRank}</td></tr>
      <tr><td class="stat-label">大洲</td><td class="stat-val">${a.region}</td></tr>
      <tr><td class="stat-label">平均年龄</td><td class="stat-val ${avgAge1 && avgAge2 ? (avgAge1 < avgAge2 ? 'better' : 'worse') : ''}">${avgAge1}岁</td></tr>
      <tr><td class="stat-label">阵容人数</td><td class="stat-val">${sq1 ? sq1.players.length : 0}人</td></tr>
    </table>
  </div>
  <div class="compare-card">
    <div class="flag">${teamFlag(t2)}</div>
    <div class="name">${b.name}</div>
    <table class="compare-table">
      <tr><td class="stat-label">FIFA排名</td><td class="stat-val ${better(b.fifaRank, a.fifaRank)}">#${b.fifaRank}</td></tr>
      <tr><td class="stat-label">大洲</td><td class="stat-val">${b.region}</td></tr>
      <tr><td class="stat-label">平均年龄</td><td class="stat-val ${avgAge2 && avgAge1 ? (avgAge2 < avgAge1 ? 'better' : 'worse') : ''}">${avgAge2}岁</td></tr>
      <tr><td class="stat-label">阵容人数</td><td class="stat-val">${sq2 ? sq2.players.length : 0}人</td></tr>
    </table>
  </div>
</div>`;
  },

  // ============================================================
  // GROUP CALCULATOR (NEW)
  // ============================================================
  calcPage() {
    const gid = this._calcGroup || "A";
    this._calcResults = this._calcResults || {};
    const g = getGroupData(gid);
    const opts = WorldCupData.groups.map((g) => `<option value="${g.id}" ${g.id === gid ? 'selected' : ''}>${g.name}</option>`).join("");
    const ms = WorldCupData.matches.filter((m) => m.group === gid);
    const standings = this.computeGroupStandings(gid);
    return `<div class="section-header"><h2>🧮 小组出线计算器</h2></div>
<p class="l">手动设定比赛结果，实时计算小组排名</p>
<div style="display:flex;gap:12px;align-items:center;margin-bottom:20px">
  <span style="color:var(--text-dim);font-size:0.85rem">选择小组:</span>
  <select onchange="App._calcGroup=this.value;App._calcResults={};App.render()" style="background:var(--card);color:var(--text);border:1px solid var(--border);padding:8px 14px;border-radius:6px;font-size:0.85rem">${opts}</select>
  <button class="btn btn-secondary" onclick="App._calcResults={};App.render()" style="padding:6px 14px;font-size:0.8rem">重置</button>
</div>
<table class="group-table calc-table">
  <tr><th>主队</th><th>比分</th><th>客队</th><th>操作</th></tr>
  ${ms.map((m) => {
    const key = m.id;
    const r = this._calcResults[key] || null;
    const sv = r === null ? "" : r;
    const sclass = (v) => r === v ? "active" : "";
    return `<tr>
      <td style="font-weight:600">${teamFlag(m.home)} ${getTeamName(m.home)}</td>
      <td style="text-align:center;font-weight:700;color:var(--gold)">${r !== null ? (r === "home" ? "胜" : r === "away" ? "负" : "平") : "?"}</td>
      <td style="font-weight:600">${teamFlag(m.away)} ${getTeamName(m.away)}</td>
      <td>
        <button class="calc-btn ${sclass('home')}" data-group="${gid}" data-home="${m.home}" data-away="${m.away}" data-result="home">主胜</button>
        <button class="calc-btn ${sclass('draw')}" data-group="${gid}" data-home="${m.home}" data-away="${m.away}" data-result="draw">平</button>
        <button class="calc-btn ${sclass('away')}" data-group="${gid}" data-home="${m.home}" data-away="${m.away}" data-result="away">客胜</button>
      </td>
    </tr>`;
  }).join("")}
</table>
<div style="margin-top:18px">
  <h3 style="color:var(--gold);margin-bottom:10px">模拟积分榜</h3>
  ${this.calcStandingsHtml(gid)}
</div>`;
  },

  setCalcResult(gid, home, away, result) {
    const ms = WorldCupData.matches.filter((m) => m.group === gid && m.home === home && m.away === away);
    if (ms.length) {
      const key = ms[0].id;
      this._calcResults = this._calcResults || {};
      this._calcResults[key] = result;
    }
    this._calcGroup = gid;
    this.render();
  },

  calcStandingsHtml(gid) {
    const g = getGroupData(gid);
    const ms = WorldCupData.matches.filter((m) => m.group === gid);
    const teams = g.teams.map((id) => ({ id, name: getTeamName(id), played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0 }));
    ms.forEach((m) => {
      const r = this._calcResults && this._calcResults[m.id];
      if (!r) return;
      const h = teams.find((t) => t.id === m.home);
      const a = teams.find((t) => t.id === m.away);
      if (!h || !a) return;
      h.played++; a.played++;
      h.gf += (r === "home" ? 2 : r === "draw" ? 1 : 0);
      a.gf += (r === "away" ? 2 : r === "draw" ? 1 : 0);
      h.ga += (r === "away" ? 2 : r === "draw" ? 1 : 0);
      a.ga += (r === "home" ? 2 : r === "draw" ? 1 : 0);
      if (r === "home") { h.won++; h.points += 3; a.lost++; }
      else if (r === "away") { a.won++; a.points += 3; h.lost++; }
      else { h.drawn++; a.drawn++; h.points++; a.points++; }
    });
    teams.forEach((t) => { t.gd = t.gf - t.ga; });
    teams.sort((a, b) => b.points - a.points || b.gd - a.gd);
    return `<table class="group-table"><tr><th>#</th><th>球队</th><th>赛</th><th>胜</th><th>平</th><th>负</th><th>进</th><th>失</th><th>净</th><th>分</th></tr>
${teams.map((s, i) => `<tr><td class="pos ${i < 2 ? 'pos-1' : i === 2 ? 'pos-3' : 'pos-4'}">${i + 1}</td><td>${teamFlag(s.id)} ${s.name}</td><td>${s.played}</td><td>${s.won}</td><td>${s.drawn}</td><td>${s.lost}</td><td>${s.gf}</td><td>${s.ga}</td><td>${s.gd > 0 ? '+' : ''}${s.gd}</td><td style="font-weight:700;color:var(--gold)">${s.points}</td></tr>`).join("")}
</table>`;
  },

  // ============================================================
  // PREDICTIONS PAGE
  // ============================================================
  predictionsPage() {
    const allPreds = this.getAllPredictions();
    return `<div class="prediction-panel">
  <h3>🔮 AI 赛果预测引擎</h3>
  <p>基于球队FIFA排名、阵容实力、历史表现等数据，使用加权评分模型预测<br>
  置信度等级：<span class="confidence-high">高 (≥70%)</span> · <span class="confidence-mid">中 (50-69%)</span> · <span class="confidence-low">低 (&lt;50%)</span></p>
  <button class="btn" onclick="App.simulateAll()">${this.footballSVG()} ${this.simulated ? "🔄 重新" : ""}AI模拟全部赛果</button>
  ${this.simulated ? '<button class="btn btn-secondary" onclick="App.clearSimulation()">🗑️ 重置赛果</button>' : ""}
</div>
<div class="section-header"><h2>📊 比赛预测 (${allPreds.length}场)</h2></div>
<div class="card-grid card-grid-2">${allPreds.map((p) => this.predictionCardHtml(p)).join("")}</div>`;
  },

  // ============================================================
  // BRACKET PAGE
  // ============================================================
  bracketPage() {
    const rounds = this.getKnockoutRounds();
    const hasBracket = rounds && rounds.length;
    return `<div class="section-header"><h2>🏆 淘汰赛对阵</h2></div>
<p class="l">小组赛结束后生成32强淘汰赛对阵。先点击"AI模拟全部赛果"生成小组排名</p>
<div class="prediction-panel">
  <button class="btn" onclick="App.simulateKnockout()">${this.footballSVG()} 模拟完整淘汰赛</button>
  ${this.simulated ? '<button class="btn btn-secondary" onclick="App.clearSimulation()">🗑️ 重置</button>' : ""}
</div>
<div id="bracketContainer">${hasBracket ? this.bracketHtml(rounds) : '<div class="empty"><p style="margin-bottom:12px">暂无数据</p><button class="btn" onclick="App.simulateAll();setTimeout(()=>App.simulateKnockout(),100)">${this.footballSVG()} 生成淘汰赛</button></div>'}</div>`;
  },

  bracketHtml(rounds) {
    return `<div class="bracket">${rounds.map((r) => `
  <div class="bracket-round">
    <h4>${r.name}</h4>
    ${r.matches.map((m) => {
      const h = m.homeScore != null ? m.homeScore : "?";
      const a = m.awayScore != null ? m.awayScore : "?";
      const hw = m.winner === "home" ? "winner" : "";
      const aw = m.winner === "away" ? "winner" : "";
      return `<div class="bracket-match">
        <div class="b-team ${hw}"><span>${teamFlag(m.home)} ${getTeamName(m.home)}</span><span class="bf">${h}</span></div>
        <div class="b-team ${aw}"><span>${teamFlag(m.away)} ${getTeamName(m.away)}</span><span class="bf">${a}</span></div>
      </div>`;
    }).join("")}
  </div>`).join("")}</div>`;
  },

  // ============================================================
  // NEWS PAGE
  // ============================================================
  newsPage() {
    const allNews = getNews();
    const cats = [...new Set(allNews.map((n) => n.category))];
    return `<div class="section-header"><h2>📰 世界杯资讯</h2></div>
<div class="tabs">
  <div class="tab active" data-tab="all">全部</div>
  ${cats.map((c) => `<div class="tab" data-tab="${c}">${c}</div>`).join("")}
</div>
${cats.map((c) => `<div class="tab-panel" id="tab-${c}" style="display:none"><div class="card-grid card-grid-2">${allNews.filter((n) => n.category === c).map((n) => this.newsCardHtml(n)).join("")}</div></div>`).join("")}
<div class="tab-panel" id="tab-all" style="display:block"><div class="card-grid card-grid-2">${allNews.map((n) => this.newsCardHtml(n)).join("")}</div></div>`;
  },

  // ============================================================
  // STATS PAGE (Enhanced)
  // ============================================================
  statsPage() {
    const topScorers = this.computeTopScorers();
    const totalStats = this.computeTournamentStats();
    const teams = Object.entries(WorldCupData.teams).sort((a, b) => a[1].fifaRank - b[1].fifaRank);
    return `<div class="section-header"><h2>📈 赛事数据统计</h2></div>
<div class="stats-bar">
  <div class="stat-card"><div class="num">${totalStats.matchesPlayed}</div><div class="label">已赛场次</div></div>
  <div class="stat-card"><div class="num">${totalStats.totalGoals}</div><div class="label">总进球</div></div>
  <div class="stat-card"><div class="num">${totalStats.avgGoals.toFixed(1)}</div><div class="label">场均进球</div></div>
  <div class="stat-card"><div class="num">${totalStats.homeWins}</div><div class="label">主队胜</div></div>
  <div class="stat-card"><div class="num">${totalStats.draws}</div><div class="label">平局</div></div>
  <div class="stat-card"><div class="num">${totalStats.awayWins}</div><div class="label">客队胜</div></div>
</div>
<div class="card-grid card-grid-2">
  <div class="match-card no-click" style="cursor:default;background:var(--card)">
    <div class="section-header"><h2>⚽ 最佳射手榜</h2></div>
    <ol class="scorer-list">
      ${topScorers.slice(0, 10).map((s, i) => {
        const cls = i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : '';
        const team = this._findPlayerTeam(s.name);
        return `<li><span class="rank-num ${cls}">${i + 1}</span><span class="name">${s.name}</span><span class="team">${team ? teamFlag(team) + ' ' + WorldCupData.teams[team].name : ''}</span><span class="goals">${s.goals}球</span></li>`;
      }).join("")}
      ${topScorers.length === 0 ? '<li class="empty">暂无数据（请先模拟赛果）</li>' : ""}
    </ol>
  </div>
  <div class="match-card no-click" style="cursor:default;background:var(--card)">
    <div class="section-header"><h2>🏳️ FIFA排名 Top 20</h2></div>
    <div class="bottom-table-wrap">
    <table class="group-table">
      <tr><th>#</th><th>球队</th><th>排名</th><th>大洲</th></tr>
      ${teams.slice(0, 20).map(([id, t], i) => `<tr><td>${i + 1}</td><td>${teamFlag(id)} ${t.name}</td><td>${t.fifaRank}</td><td>${t.region}</td></tr>`).join("")}
    </table>
    </div>
  </div>
</div>
<div class="section-header" style="margin-top:24px"><h2>🏳️ 全部球队排名</h2></div>
<div class="bottom-table-wrap">
<table class="group-table">
  <tr><th>#</th><th>球队</th><th>FIFA排名</th><th>大洲</th><th>主教练</th></tr>
  ${teams.map(([id, t], i) => `<tr><td>${i + 1}</td><td>${teamFlag(id)} ${t.name}</td><td>${t.fifaRank}</td><td>${t.region}</td><td style="color:var(--text-dim);font-size:0.78rem">${t.coach}</td></tr>`).join("")}
</table>
</div>`;
  },

  _findPlayerTeam(name) {
    for (const [id, sq] of Object.entries(WorldCupData.squads)) {
      if (sq.players.some((p) => p.name === name)) return id;
    }
    return null;
  },

  // ============================================================
  // CALENDAR PAGE (NEW)
  // ============================================================
  calendarPage() {
    const days = {};
    WorldCupData.matches.forEach((m) => {
      if (!days[m.date]) days[m.date] = [];
      days[m.date].push(m);
    });
    const sorted = Object.entries(days).sort((a, b) => a[0].localeCompare(b[0]));
    return `<div class="section-header"><h2>📅 赛程日历</h2></div>
<p class="l">按日期浏览全部比赛</p>
<div class="calendar-grid">${sorted.map(([date, ms]) => `
  <div class="calendar-day">
    <div class="date-header">${this._fmtDate(date)}</div>
    ${ms.map((m) => {
      const sc = m.status === "finished" ? `${m.homeScore}-${m.awayScore}` : m.time;
      return `<div class="cal-match"><span class="cf">${teamFlag(m.home)}</span> ${getTeamName(m.home)} <span style="color:var(--gold);font-weight:700;margin:0 4px">vs</span> ${getTeamName(m.away)} <span class="cf">${teamFlag(m.away)}</span> <span class="chip chip-gray">${sc}</span></div>`;
    }).join("")}
  </div>`).join("")}</div>`;
  },

  _fmtDate(d) {
    const parts = d.split("-");
    const m = parseInt(parts[1]);
    const day = parseInt(parts[2]);
    const months = ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];
    return `${months[m-1]}${day}日`;
  },

  // ============================================================
  // ABOUT PAGE (Enhanced)
  // ============================================================
  aboutPage() {
    return `<div class="hero"><div class="hero-content">
  <div style="flex-shrink:0">${this.trophySVG()}</div>
  <div class="hero-text"><h1>关于本站</h1><p>2026世界杯完整信息平台</p></div>
</div></div>
<div class="card-grid card-grid-2" style="margin-bottom:20px">
  <div class="match-card no-click" style="cursor:default">
    <h3 style="color:var(--gold);margin-bottom:12px">🏳️ 功能总览</h3>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:0.82rem">
      <div>✅ 全部48支参赛球队</div><div>✅ 球员名单及教练团队</div>
      <div>✅ 完整赛程与实时赛果</div><div>✅ 小组积分榜</div>
      <div>✅ AI赛果预测引擎</div><div>✅ 淘汰赛对阵图</div>
      <div>✅ 🆕 球队实力对比</div><div>✅ 🆕 出线计算器</div>
      <div>✅ 🆕 赛程日历浏览</div><div>✅ 🆕 球员详情弹窗</div>
      <div>✅ 🆕 主题颜色切换</div><div>✅ 数据统计</div>
    </div>
  </div>
  <div class="match-card no-click" style="cursor:default">
    <h3 style="color:var(--gold);margin-bottom:12px">🎨 主题配色</h3>
    <p class="l">选择你喜欢的主题色</p>
    <div style="display:flex;gap:12px" id="themePicker">
      <div class="theme-option" data-t="" style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#e8b830,#f0d060);cursor:pointer;border:2px solid var(--border);transition:.2s" onclick="document.documentElement.setAttribute('data-theme','');document.querySelectorAll('.theme-btn').forEach(b=>b.classList.remove('active'));document.querySelector('[data-theme=\"\"]').classList.add('active');localStorage.setItem('wc-theme','');document.querySelectorAll('.theme-option').forEach(x=>x.classList.remove('active'));this.classList.add('active')"></div>
      <div class="theme-option" data-t="blue" style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#4a9eff,#7db8ff);cursor:pointer;border:2px solid var(--border);transition:.2s" onclick="document.documentElement.setAttribute('data-theme','blue');document.querySelectorAll('.theme-btn').forEach(b=>b.classList.remove('active'));document.querySelector('[data-theme=\"blue\"]').classList.add('active');localStorage.setItem('wc-theme','blue');document.querySelectorAll('.theme-option').forEach(x=>x.classList.remove('active'));this.classList.add('active')"></div>
      <div class="theme-option" data-t="green" style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#2ecc71,#58d68d);cursor:pointer;border:2px solid var(--border);transition:.2s" onclick="document.documentElement.setAttribute('data-theme','green');document.querySelectorAll('.theme-btn').forEach(b=>b.classList.remove('active'));document.querySelector('[data-theme=\"green\"]').classList.add('active');localStorage.setItem('wc-theme','green');document.querySelectorAll('.theme-option').forEach(x=>x.classList.remove('active'));this.classList.add('active')"></div>
      <div class="theme-option" data-t="red" style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#e74c3c,#f1948a);cursor:pointer;border:2px solid var(--border);transition:.2s" onclick="document.documentElement.setAttribute('data-theme','red');document.querySelectorAll('.theme-btn').forEach(b=>b.classList.remove('active'));document.querySelector('[data-theme=\"red\"]').classList.add('active');localStorage.setItem('wc-theme','red');document.querySelectorAll('.theme-option').forEach(x=>x.classList.remove('active'));this.classList.add('active')"></div>
    </div>
  </div>
</div>
<div class="team-detail">
  <p style="color:var(--text-dim);line-height:1.8;font-size:0.85rem">
    <strong>关于本站</strong><br>
    本站提供2026年FIFA世界杯的全面信息。纯静态前端网站，所有数据在浏览器端处理，
    无需任何外部依赖，可在中国大陆无障碍访问。<br><br>
    <strong>数据说明</strong><br>
    球队信息、球员名单基于公开数据整理。预测算法基于球队FIFA排名、阵容深度等
    多维度数据加权计算，仅供娱乐参考。<br><br>
    <strong>版本</strong><br>
    v2.0 · 新增球队对比 / 出线计算器 / 主题切换 / 赛程日历 / 球员详情
  </p>
</div>`;
  },

  // ============================================================
  // COMPONENT RENDERERS
  // ============================================================

  matchCardHtml(m) {
    const h = getTeamName(m.home);
    const a = getTeamName(m.away);
    const hf = teamFlag(m.home);
    const af = teamFlag(m.away);
    let scoreDisplay = '<span class="vs">VS</span>';
    let editBadge = "";
    if (this.editMode) {
      editBadge = '<span class="edit-badge">✏️</span>';
      if (m.status === "finished" || m.status === "live") {
        scoreDisplay = `<span style="font-size:1.8rem;font-weight:800;color:var(--gold)">${m.homeScore}</span><span style="font-size:1.2rem;margin:0 4px;color:var(--gold)">-</span><span style="font-size:1.8rem;font-weight:800;color:var(--gold)">${m.awayScore}</span>`;
      }
    }
    let cls = "match-card";
    if (m.status === "finished") {
      scoreDisplay = `${m.homeScore} - ${m.awayScore}`;
      cls += " finished";
    } else if (m.status === "live") {
      scoreDisplay = `${m.homeScore ?? 0} - ${m.awayScore ?? 0}`;
      cls += " live";
    }
    const gName = m.group ? `第${m.group}组` : "";
    return `<div class="${cls}" data-match="${m.id}">
  <div class="match-header">
    <span>${m.date} ${m.time} · ${m.stadium}${editBadge}</span>
    <span class="stage">${gName} ${m.stage}</span>
  </div>
  <div class="match-body">
    <div class="team"><span class="flag">${hf}</span> ${h}</div>
    <div class="score">${scoreDisplay}</div>
    <div class="team away">${a} <span class="flag">${af}</span></div>
  </div>
</div>`;
  },

  newsCardHtml(n) {
    return `<div class="news-card" data-news="${n.id}">
  <span class="category">${n.category}</span>
  <h3>${n.title}</h3>
  <p>${n.summary}</p>
  <div class="date">${n.date}</div>
</div>`;
  },

  predictionCardHtml(p) {
    const homeName = getTeamName(p.home);
    const awayName = getTeamName(p.away);
    const hf = teamFlag(p.home);
    const af = teamFlag(p.away);
    const probH = (p.probHome * 100).toFixed(0);
    const probD = (p.probDraw * 100).toFixed(0);
    const probA = (p.probAway * 100).toFixed(0);
    const isHigh = p.confidence >= 0.7;
    const isMid = p.confidence >= 0.5;
    const confClass = isHigh ? "confidence-high" : isMid ? "confidence-mid" : "confidence-low";
    const result = p.winner === "home" ? `${hf} ${homeName} 胜` : p.winner === "away" ? `${af} ${awayName} 胜` : "平局";
    const confLabel = isHigh ? "高" : isMid ? "中" : "低";
    let actual = "";
    const match = WorldCupData.matches.find((m) => m.id === p.matchId);
    if (match && match.status === "finished") {
      actual = `<div style="margin-top:6px;font-size:0.78rem;color:var(--text-dim)">实际赛果: ${match.homeScore} - ${match.awayScore}</div>`;
    }
    return `<div class="prediction-card">
  <div class="p-header">
    <span>${p.stage || "小组赛"} · ${p.date}</span>
    <span class="${confClass}">${confLabel}置信度 (${(p.confidence * 100).toFixed(0)}%)</span>
  </div>
  <div class="p-match">
    <div class="p-team"><span class="flag">${hf}</span> ${homeName}</div>
    <div class="p-score"><div class="big">${p.predHomeScore} - ${p.predAwayScore}</div><div class="small">预测比分</div></div>
    <div class="p-team"><span class="flag">${af}</span> ${awayName}</div>
  </div>
  <div class="prob-bar"><div class="home" style="width:${probH}%"></div><div class="draw" style="width:${probD}%"></div><div class="away" style="width:${probA}%"></div></div>
  <div class="prob-label"><span>${homeName} ${probH}%</span><span>平 ${probD}%</span><span>${awayName} ${probA}%</span></div>
  <div style="margin-top:6px;font-size:0.78rem">预测: <strong>${result}</strong></div>
  ${actual}
</div>`;
  },

  groupTableHtml(gid) {
    const g = getGroupData(gid);
    if (!g) return "";
    const standings = this.computeGroupStandings(gid);
    return `<div class="group-section">
  <h3>${g.name}</h3>
  <div class="bottom-table-wrap">
  <table class="group-table">
    <tr><th>#</th><th>球队</th><th>赛</th><th>胜</th><th>平</th><th>负</th><th>进</th><th>失</th><th>净</th><th>分</th></tr>
    ${standings.map((s, i) => {
      const cls = i < 2 ? "pos-1" : i === 2 ? "pos-3" : "pos-4";
      return `<tr><td class="pos ${cls}">${i + 1}</td><td>${teamFlag(s.id)} ${s.name}</td><td>${s.played}</td><td>${s.won}</td><td>${s.drawn}</td><td>${s.lost}</td><td>${s.gf}</td><td>${s.ga}</td><td>${s.gd > 0 ? '+' : ''}${s.gd}</td><td style="font-weight:700;color:var(--gold)">${s.points}</td></tr>`;
    }).join("")}
  </table>
  </div>
</div>`;
  },

  // ============================================================
  // COMPUTATION
  // ============================================================

  computeGroupStandings(gid) {
    const g = getGroupData(gid);
    const matches = WorldCupData.matches.filter((m) => m.group === gid);
    const teams = g.teams.map((id) => ({ id, name: getTeamName(id), played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0 }));
    matches.forEach((m) => {
      if (m.status !== "finished" || m.homeScore == null) return;
      const h = teams.find((t) => t.id === m.home);
      const a = teams.find((t) => t.id === m.away);
      if (!h || !a) return;
      h.played++; a.played++;
      h.gf += m.homeScore; h.ga += m.awayScore;
      a.gf += m.awayScore; a.ga += m.homeScore;
      if (m.homeScore > m.awayScore) { h.won++; h.points += 3; a.lost++; }
      else if (m.homeScore < m.awayScore) { a.won++; a.points += 3; h.lost++; }
      else { h.drawn++; a.drawn++; h.points++; a.points++; }
    });
    teams.forEach((t) => { t.gd = t.gf - t.ga; });
    teams.sort((a, b) => b.points - a.points || b.gd - a.gd || b.gf - a.gf);
    return teams;
  },

  computeTournamentStats() {
    const finished = WorldCupData.matches.filter((m) => m.status === "finished" && m.homeScore != null);
    const totalGoals = finished.reduce((sum, m) => sum + m.homeScore + m.awayScore, 0);
    const homeWins = finished.filter((m) => m.homeScore > m.awayScore).length;
    const awayWins = finished.filter((m) => m.homeScore < m.awayScore).length;
    const draws = finished.filter((m) => m.homeScore === m.awayScore).length;
    return { matchesPlayed: finished.length, totalGoals, avgGoals: finished.length ? totalGoals / finished.length : 0, homeWins, awayWins, draws };
  },

  computeTopScorers() {
    const finished = WorldCupData.matches.filter((m) => m.status === "finished" && m.homeScore != null);
    if (!finished.length) return [];
    const goalMap = {};
    finished.forEach((m) => {
      const homeSquad = getSquad(m.home);
      const awaySquad = getSquad(m.away);
      const homePlayers = homeSquad ? homeSquad.players.filter((p) => p.pos === "FW" || p.pos === "MF") : [];
      const awayPlayers = awaySquad ? awaySquad.players.filter((p) => p.pos === "FW" || p.pos === "MF") : [];
      for (let i = 0; i < m.homeScore; i++) {
        if (homePlayers.length) {
          const p = homePlayers[Math.floor(Math.random() * homePlayers.length)];
          goalMap[p.name] = (goalMap[p.name] || 0) + 1;
        }
      }
      for (let i = 0; i < m.awayScore; i++) {
        if (awayPlayers.length) {
          const p = awayPlayers[Math.floor(Math.random() * awayPlayers.length)];
          goalMap[p.name] = (goalMap[p.name] || 0) + 1;
        }
      }
    });
    return Object.entries(goalMap).map(([name, goals]) => ({ name, goals })).sort((a, b) => b.goals - a.goals);
  },

  // ============================================================
  // PREDICTIONS ENGINE
  // ============================================================

  getMatchPrediction(match) {
    const homeTeam = WorldCupData.teams[match.home];
    const awayTeam = WorldCupData.teams[match.away];
    if (!homeTeam || !awayTeam) return null;
    const rankDiff = awayTeam.fifaRank - homeTeam.fifaRank;
    const homeAdv = match.home === "USA" || match.home === "CAN" || match.home === "MEX" ? 1.1 : 1.0;
    const homeStrength = Math.max(0, 100 - homeTeam.fifaRank * 1.5) + (rankDiff * 2) + (homeAdv * 10);
    const awayStrength = Math.max(0, 100 - awayTeam.fifaRank * 1.5) + (-rankDiff * 2);
    const randH = Math.random() * 20 - 10;
    const randA = Math.random() * 20 - 10;
    const totalStrength = Math.max(1, homeStrength + randH + awayStrength + randA);
    const probHome = Math.max(0.05, Math.min(0.85, (homeStrength + randH) / totalStrength));
    const probAway = Math.max(0.05, Math.min(0.85, (awayStrength + randA) / totalStrength));
    const probDraw = Math.max(0.05, 1 - probHome - probAway);
    const totalGoals = Math.round(1 + Math.random() * 3);
    const homeShare = probHome / (probHome + probAway);
    const predH = Math.max(0, Math.round(totalGoals * homeShare));
    const predA = Math.max(0, totalGoals - predH);
    const confidence = Math.max(0.35, Math.min(0.92, Math.abs(rankDiff) / 40 + 0.5));
    let winner = "draw";
    if (predH > predA) winner = "home";
    else if (predA > predH) winner = "away";
    return { matchId: match.id, home: match.home, away: match.away, date: match.date, stage: match.stage, probHome: Math.round(probHome * 100) / 100, probDraw: Math.round(probDraw * 100) / 100, probAway: Math.round(probAway * 100) / 100, predHomeScore: predH, predAwayScore: predA, winner, confidence: Math.round(confidence * 100) / 100 };
  },

  loadPredictions() { this.predictions = {}; },

  getAllPredictions() {
    return WorldCupData.matches.map((m) => {
      const key = m.id;
      if (!this.predictions[key]) { this.predictions[key] = this.getMatchPrediction(m); }
      return this.predictions[key];
    }).filter(Boolean);
  },

  getTopPredictions(n) { return this.getAllPredictions().slice(0, n); },

  // ============================================================
  // SIMULATION
  // ============================================================

  simulateAll() {
    WorldCupData.matches.forEach((m) => {
      if (m.status === "finished") return;
      const p = this.getMatchPrediction(m);
      if (p) { m.homeScore = p.predHomeScore; m.awayScore = p.predAwayScore; m.status = "finished"; }
    });
    this.simulated = true;
    this.navigate(this.currentPage);
  },

  clearSimulation() {
    WorldCupData.matches.forEach((m) => { m.homeScore = null; m.awayScore = null; m.status = "scheduled"; });
    this.simulated = false;
    this.navigate(this.currentPage);
  },

  // ============================================================
  // KNOCKOUT
  // ============================================================

  getKnockoutRounds() {
    if (!this.simulated) return [];
    const finished = WorldCupData.matches.filter((m) => m.status === "finished");
    if (!finished.length) return [];
    const qualifiers = [];
    WorldCupData.groups.forEach((g) => {
      const st = this.computeGroupStandings(g.id);
      if (st.length >= 2) { qualifiers.push({ team: st[0].id, rank: 1, group: g.id }); qualifiers.push({ team: st[1].id, rank: 2, group: g.id }); }
      if (st.length >= 3) { qualifiers.push({ team: st[2].id, rank: 3, group: g.id }); }
    });
    const thirdPlaced = qualifiers.filter((q) => q.rank === 3).slice(0, 8);
    const topTwo = qualifiers.filter((q) => q.rank <= 2);
    const teams = [...topTwo, ...thirdPlaced].map((q) => q.team);
    while (teams.length < 32) {
      const used = new Set(teams);
      for (const g of WorldCupData.groups) {
        const st = this.computeGroupStandings(g.id);
        for (const s of st) {
          if (!used.has(s.id)) { teams.push(s.id); used.add(s.id); break; }
        }
        if (teams.length >= 32) break;
      }
      if (teams.length < 32) break;
    }
    const round32 = [];
    for (let i = 0; i < Math.min(teams.length, 32); i += 2) {
      if (i + 1 >= teams.length) break;
      const pred = this.getMatchPrediction({ id: "ko32_" + i, home: teams[i], away: teams[i + 1], stage: "1/16决赛" });
      round32.push({ home: teams[i], away: teams[i + 1], homeScore: pred.predHomeScore, awayScore: pred.predAwayScore, winner: pred.predHomeScore > pred.predAwayScore ? "home" : pred.predAwayScore > pred.predHomeScore ? "away" : "home" });
    }
    function simRound(matches) {
      const winners = [];
      for (let i = 0; i < matches.length; i += 2) {
        const m1 = matches[i], m2 = matches[i + 1];
        if (!m1 || !m2) continue;
        const w1 = m1.winner === "home" ? m1.home : m1.away;
        const w2 = m2.winner === "home" ? m2.home : m2.away;
        const hs = Math.floor(Math.random() * 3), as = Math.floor(Math.random() * 2);
        const ws = hs + as > 0 ? (hs > as ? "home" : "away") : (Math.random() > 0.5 ? "home" : "away");
        winners.push({ home: w1, away: w2, homeScore: hs, awayScore: as, winner: ws });
      }
      return winners;
    }
    const r16 = simRound(round32), qf = simRound(r16), sf = simRound(qf), fi = simRound(sf);
    return [{ name: "1/16决赛", matches: round32 }, { name: "1/8决赛", matches: r16 }, { name: "1/4决赛", matches: qf }, { name: "半决赛", matches: sf }, { name: "决赛", matches: fi }].filter((r) => r.matches.length > 0);
  },

  simulateKnockout() { if (!this.simulated) this.simulateAll(); this.navigate("bracket"); },

  // ============================================================
  // PLAYER DETAIL MODAL (NEW)
  // ============================================================
  showPlayer(teamId, idx) {
    const sq = getSquad(teamId);
    if (!sq || !sq.players[idx]) return;
    const p = sq.players[idx];
    const t = WorldCupData.teams[teamId];
    const posNames = { GK: "门将", DF: "后卫", MF: "中场", FW: "前锋" };
    const posEmoji = { GK: "🧤", DF: "🛡️", MF: "🎯", FW: "⚡" };
    document.getElementById("matchModalContent").innerHTML = `
  <div style="text-align:center;padding:8px 0">
    <div style="font-size:3.5rem;margin-bottom:8px">${posEmoji[p.pos] || "⚽"}</div>
    <h2 style="font-size:1.3rem">${p.name}</h2>
    <div class="meta" style="margin-top:4px">${teamFlag(teamId)} ${t.name} · ${posNames[p.pos] || p.pos}</div>
  </div>
  <hr style="border-color:var(--border);margin:14px 0">
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;font-size:0.9rem">
    <div><span style="color:var(--text-dim)">位置</span><br><strong>${posNames[p.pos] || p.pos}</strong></div>
    <div><span style="color:var(--text-dim)">年龄</span><br><strong>${p.age}岁</strong></div>
    <div><span style="color:var(--text-dim)">俱乐部</span><br><strong>${p.club}</strong></div>
    <div><span style="color:var(--text-dim)">国家队</span><br><strong>${t.name}</strong></div>
  </div>
  <hr style="border-color:var(--border);margin:14px 0">
  <div style="font-size:0.8rem;color:var(--text-dim);text-align:center">点击球员名称查看更多信息</div>`;
    document.getElementById("matchModal").classList.add("show");
  },

  // ============================================================
  // MODALS
  // ============================================================
  showNews(id) {
    const n = WorldCupData.news.find((x) => x.id === id);
    if (!n) return;
    document.getElementById("modalTitle").textContent = n.title;
    document.getElementById("modalMeta").textContent = n.date + " · " + n.category;
    document.getElementById("modalContent").innerHTML = "<p>" + n.content.replace(/\n/g, "<br>") + "</p>";
    document.getElementById("newsModal").classList.add("show");
  },

  showMatchDetail(id) {
    const m = WorldCupData.matches.find((x) => x.id === id);
    if (!m) return;
    const h = getTeamName(m.home), a = getTeamName(m.away);
    const hf = teamFlag(m.home), af = teamFlag(m.away);
    let scoreDisplay = "待赛";
    if (m.status === "finished") scoreDisplay = m.homeScore + " - " + m.awayScore;
    else if (m.status === "live") scoreDisplay = (m.homeScore ?? 0) + " - " + (m.awayScore ?? 0) + " (进行中)";
    const pred = this.predictions[m.id] || this.getMatchPrediction(m);
    document.getElementById("matchModalContent").innerHTML = `
  <div style="text-align:center;padding:10px 0">
    <div style="display:flex;align-items:center;justify-content:center;gap:20px;margin-bottom:16px">
      <div style="text-align:center"><div style="font-size:3rem">${hf}</div><div style="font-weight:700;margin-top:6px;font-size:1rem">${h}</div></div>
      <div style="font-size:2.2rem;font-weight:800;color:var(--gold)">${scoreDisplay}</div>
      <div style="text-align:center"><div style="font-size:3rem">${af}</div><div style="font-weight:700;margin-top:6px;font-size:1rem">${a}</div></div>
    </div>
    <div style="color:var(--text-dim);font-size:0.82rem">${m.date} ${m.time} · ${m.stadium} · ${m.stage}</div>
  </div>
  <hr style="border-color:var(--border);margin:16px 0">
  <div style="font-size:0.88rem">
    <strong>🔮 AI预测分析</strong>
    <div class="prob-bar" style="margin:8px 0">
      <div class="home" style="width:${(pred.probHome * 100).toFixed(0)}%"></div>
      <div class="draw" style="width:${(pred.probDraw * 100).toFixed(0)}%"></div>
      <div class="away" style="width:${(pred.probAway * 100).toFixed(0)}%"></div>
    </div>
    <div class="prob-label"><span>${h} ${(pred.probHome * 100).toFixed(0)}%</span><span>平 ${(pred.probDraw * 100).toFixed(0)}%</span><span>${a} ${(pred.probAway * 100).toFixed(0)}%</span></div>
    <div style="margin-top:10px;display:grid;grid-template-columns:1fr 1fr;gap:8px">
      <div style="background:var(--secondary);padding:8px 12px;border-radius:6px"><span style="color:var(--text-dim)">预测比分</span><br><strong style="font-size:1.1rem">${pred.predHomeScore} - ${pred.predAwayScore}</strong></div>
      <div style="background:var(--secondary);padding:8px 12px;border-radius:6px"><span style="color:var(--text-dim)">预测结果</span><br><strong style="font-size:1.1rem">${pred.winner === "home" ? h + "胜" : pred.winner === "away" ? a + "胜" : "平局"}</strong></div>
    </div>
  </div>`;
    document.getElementById("matchModal").classList.add("show");
  },

  // ============================================================
  // SEARCH (NEW)
  // ============================================================
  doGlobalSearch(query) {
    if (!query || !query.trim()) return;
    const q = query.trim().toLowerCase();
    const results = [];
    // Search teams
    Object.entries(WorldCupData.teams).forEach(([id, t]) => {
      if (t.name.includes(q) || id.toLowerCase().includes(q)) {
        results.push({ type: "team", id, label: `${teamFlag(id)} ${t.name}`, action: `App.navigate('team','${id}')` });
      }
    });
    // Search players
    Object.entries(WorldCupData.squads).forEach(([tid, sq]) => {
      sq.players.forEach((p, i) => {
        if (p.name.includes(q)) {
          results.push({ type: "player", id: tid, idx: i, label: `${teamFlag(tid)} ${p.name} (${WorldCupData.teams[tid].name})`, action: `App.showPlayer('${tid}',${i})` });
        }
      });
    });
    // Search matches
    WorldCupData.matches.forEach((m) => {
      const hn = getTeamName(m.home);
      const an = getTeamName(m.away);
      if (hn.includes(q) || an.includes(q) || m.stadium.includes(q)) {
        results.push({ type: "match", id: m.id, label: `${teamFlag(m.home)} ${hn} vs ${an} ${teamFlag(m.away)}`, action: `App.showMatchDetail('${m.id}')` });
      }
    });

    const content = results.length
      ? results.map((r) => `<div style="padding:10px 14px;border-bottom:1px solid var(--border);cursor:pointer;transition:.2s" onclick="${r.action};document.getElementById('matchModal').classList.remove('show')" onmouseover="this.style.background='var(--card-hover)'" onmouseout="this.style.background=''">
        <span style="font-size:0.8rem;color:var(--text-dim);margin-right:8px">${r.type === "team" ? "🏳️" : r.type === "player" ? "⚽" : "📅"}</span>
        ${r.label}
      </div>`).join("")
      : '<div class="empty">未找到相关结果</div>';

    document.getElementById("modalTitle").textContent = "🔍 搜索结果";
    document.getElementById("modalMeta").textContent = `找到 ${results.length} 个结果`;
    document.getElementById("modalContent").innerHTML = `<div style="max-height:400px;overflow-y:auto">${content}</div>`;
    document.getElementById("newsModal").classList.add("show");
  },

  // ============================================================
  // UTILITY
  // ============================================================

  getUpcomingMatches(n) { return WorldCupData.matches.slice(0, n); },

  countdownDays() {
    const diff = Math.ceil((new Date("2026-06-11") - new Date()) / (86400000));
    return diff > 0 ? diff : 0;
  },


  // ============================================================
  // EDIT MODE - 编辑模式
  // ============================================================
  editMode: false,

  toggleEditMode() {
    this.editMode = !this.editMode;
    const btn = document.getElementById("editModeBtn");
    if (btn) {
      btn.classList.toggle("active", this.editMode);
      btn.innerHTML = this.editMode ? "✅ 完成编辑" : "✏️ 编辑";
    }
    this.render();
  },

  // ============================================================
  // ADMIN PANEL - 管理面板
  // ============================================================
  adminPage() {
    return `<div class="section-header"><h2>⚙️ 管理面板</h2></div>
<p class="l">编辑比赛比分、状态、新闻。所有修改自动保存到浏览器。</p>
<div class="tabs" id="adminTabs">
  <div class="tab active" data-tab="matches">比赛管理</div>
  <div class="tab" data-tab="scores">快速记分</div>
  <div class="tab" data-tab="news">新闻管理</div>
  <div class="tab" data-tab="data">数据管理</div>
</div>
<div class="tab-panel" id="tab-matches" style="display:block">${this.adminMatchesTable()}</div>
<div class="tab-panel" id="tab-scores" style="display:none">${this.adminScoreBoard()}</div>
<div class="tab-panel" id="tab-news" style="display:none">${this.adminNewsEditor()}</div>
<div class="tab-panel" id="tab-data" style="display:none">${this.adminDataTools()}</div>`;
  },

  adminMatchesTable() {
    const matches = WorldCupData.matches;
    return `<div style="overflow-x:auto"><table class="group-table admin-table">
  <tr><th>ID</th><th>日期</th><th>主队</th><th>比分</th><th>客队</th><th>状态</th><th>操作</th></tr>
  ${matches.map(m => {
    const hn = getTeamName(m.home);
    const an = getTeamName(m.away);
    const hf = teamFlag(m.home);
    const af = teamFlag(m.away);
    const statusOpts = ['scheduled','live','finished'].map(s =>
      `<option ${m.status === s ? 'selected' : ''} value="${s}">${s === 'scheduled' ? '待赛' : s === 'live' ? '进行中' : '已结束'}</option>`
    ).join('');
    return `<tr>
      <td style="font-size:0.75rem;color:var(--text-dim)">${m.id}</td>
      <td style="font-size:0.78rem">${m.date}</td>
      <td>${hf} ${hn}</td>
      <td class="score-edit">
        <input type="number" min="0" max="20" class="score-input" id="hs-${m.id}" value="${m.homeScore !== null ? m.homeScore : ''}" placeholder="?" style="width:36px;text-align:center">
        <span style="color:var(--gold);font-weight:700;margin:0 3px">-</span>
        <input type="number" min="0" max="20" class="score-input" id="as-${m.id}" value="${m.awayScore !== null ? m.awayScore : ''}" placeholder="?" style="width:36px;text-align:center">
      </td>
      <td>${af} ${an}</td>
      <td>
        <select class="status-select" id="st-${m.id}" style="font-size:0.72rem;padding:3px 6px;background:var(--card);color:var(--text);border:1px solid var(--border);border-radius:4px">
          ${statusOpts.join('')}
        </select>
      </td>
      <td><button class="btn btn-small" onclick="App.saveMatchEdit('${m.id}')" style="padding:4px 10px;font-size:0.72rem">保存</button></td>
    </tr>`;
  }).join('')}
</table></div>
<div style="margin-top:12px;display:flex;gap:10px">
  <button class="btn" onclick="App.saveAllMatches()" style="font-size:0.8rem">💾 保存所有修改</button>
  <button class="btn btn-secondary" onclick="App.render()" style="font-size:0.8rem">🔄 刷新页面</button>
</div>`;
  },

  adminScoreBoard() {
    const today = new Date().toISOString().slice(0,10);
    const todays = WorldCupData.matches.filter(m => m.date === today);
    const recent = WorldCupData.matches.filter(m => m.date < today && m.date >= "2026-06-11").slice(-10).reverse();
    return `<h3 style="color:var(--gold);margin-bottom:12px">📅 今日比赛 (${todays.length}场)</h3>
<div class="card-grid card-grid-2">${todays.map(m => {
  const hf = teamFlag(m.home); const af = teamFlag(m.away);
  const hn = getTeamName(m.home); const an = getTeamName(m.away);
  return `<div class="match-card" style="border-left:3px solid var(--red)">
    <div style="display:flex;align-items:center;gap:12px;justify-content:space-between">
      <span style="font-weight:600">${hf} ${hn}</span>
      <div style="display:flex;align-items:center;gap:4px">
        <input type="number" min="0" max="20" class="score-input score-input-lg" id="qs-${m.id}-h" value="${m.homeScore !== null ? m.homeScore : 0}" style="width:40px;height:36px;font-size:1.1rem;text-align:center;font-weight:700">
        <span style="font-size:1.2rem;font-weight:800;color:var(--gold)">:</span>
        <input type="number" min="0" max="20" class="score-input score-input-lg" id="qs-${m.id}-a" value="${m.awayScore !== null ? m.awayScore : 0}" style="width:40px;height:36px;font-size:1.1rem;text-align:center;font-weight:700">
      </div>
      <span style="font-weight:600">${af} ${an}</span>
    </div>
    <div style="display:flex;gap:6px;margin-top:8px;justify-content:center">
      <button class="btn btn-small" onclick="App.quickSave('${m.id}')" style="padding:4px 14px;font-size:0.78rem">💾 保存比分</button>
      <button class="btn btn-small btn-secondary" onclick="App.quickFinish('${m.id}')" style="padding:4px 14px;font-size:0.78rem">⏱️ 结束比赛</button>
    </div>
  </div>`;
}).join('')}
${todays.length === 0 ? '<div class="empty">今日无比赛</div>' : ''}</div>

<h3 style="color:var(--gold);margin:20px 0 12px">📋 最近完赛</h3>
<div class="card-grid card-grid-2">${recent.map(m => {
  const hf = teamFlag(m.home); const af = teamFlag(m.away);
  const hn = getTeamName(m.home); const an = getTeamName(m.away);
  return `<div class="match-card">
    <div style="display:flex;align-items:center;gap:8px;justify-content:space-between">
      <span>${hf} ${hn}</span>
      <span style="font-size:1.3rem;font-weight:800;color:var(--gold)">${m.homeScore}:${m.awayScore}</span>
      <span>${af} ${an}</span>
    </div>
    <div style="font-size:0.72rem;color:var(--text-dim);text-align:center;margin-top:4px">${m.date} · ${m.stadium}</div>
  </div>`;
}).join('')}
${recent.length === 0 ? '<div class="empty">暂无可显示的比赛</div>' : ''}</div>`;
  },

  adminNewsEditor() {
    const news = getNews();
    return `<h3 style="color:var(--gold);margin-bottom:12px">📰 添加新闻</h3>
<div style="background:var(--card);padding:16px;border-radius:var(--radius-sm);border:1px solid var(--border);margin-bottom:20px">
  <input id="newsTitle" placeholder="新闻标题" style="width:100%;padding:10px 14px;margin-bottom:8px;background:var(--secondary);border:1px solid var(--border);border-radius:6px;color:var(--text);font-size:0.88rem">
  <input id="newsSummary" placeholder="摘要" style="width:100%;padding:10px 14px;margin-bottom:8px;background:var(--secondary);border:1px solid var(--border);border-radius:6px;color:var(--text);font-size:0.82rem">
  <textarea id="newsContent" placeholder="正文内容" rows="4" style="width:100%;padding:10px 14px;margin-bottom:8px;background:var(--secondary);border:1px solid var(--border);border-radius:6px;color:var(--text);font-size:0.82rem;resize:vertical"></textarea>
  <div style="display:flex;gap:8px">
    <input id="newsCategory" placeholder="分类（如: 赛事综述）" style="flex:1;padding:8px 14px;background:var(--secondary);border:1px solid var(--border);border-radius:6px;color:var(--text);font-size:0.82rem">
    <button class="btn" onclick="App.saveNews()" style="padding:8px 20px;font-size:0.82rem">📰 发布</button>
  </div>
</div>
<h3 style="color:var(--gold);margin-bottom:12px">已有新闻 (${news.length}条)</h3>
<div class="card-grid card-grid-2">${news.map((n, i) => `<div class="news-card" style="position:relative">
  <span class="category">${n.category}</span>
  <h3>${n.title}</h3>
  <p>${n.summary}</p>
  <div class="date">${n.date}</div>
</div>`).join('')}</div>`;
  },

  adminDataTools() {
    return `<div style="display:grid;grid-template-columns:1fr 1fr;gap:20px">
  <div class="match-card no-click" style="cursor:default">
    <h3 style="color:var(--gold);margin-bottom:10px">📤 导出数据</h3>
    <p class="l">导出所有比赛比分和状态为 JSON</p>
    <button class="btn" onclick="App.exportData()" style="font-size:0.82rem">📤 导出</button>
  </div>
  <div class="match-card no-click" style="cursor:default">
    <h3 style="color:var(--gold);margin-bottom:10px">📥 导入数据</h3>
    <p class="l">从 JSON 文件导入数据</p>
    <textarea id="importData" placeholder="粘贴 JSON 数据..." rows="4" style="width:100%;padding:8px;margin-bottom:8px;background:var(--secondary);border:1px solid var(--border);border-radius:6px;color:var(--text);font-size:0.78rem;font-family:monospace"></textarea>
    <button class="btn btn-secondary" onclick="App.importData()" style="font-size:0.82rem">📥 导入</button>
  </div>
  <div class="match-card no-click" style="cursor:default">
    <h3 style="color:var(--gold);margin-bottom:10px">🔄 重置数据</h3>
    <p class="l">重置所有数据到初始状态</p>
    <button class="btn btn-danger" onclick="App.resetData()" style="font-size:0.82rem">⚠️ 重置</button>
  </div>
  <div class="match-card no-click" style="cursor:default">
    <h3 style="color:var(--gold);margin-bottom:10px">⚡ 操作提示</h3>
    <p class="l" style="line-height:1.8">• 编辑模式：在页面任何比赛卡片上直接编辑比分<br>
    • 管理面板：集中管理所有比赛<br>
    • 所有修改自动保存到浏览器<br>
    • 关闭浏览器或刷新页面不会丢失数据</p>
  </div>
</div>`;
  },

  saveMatchEdit(id) {
    const hs = parseInt(document.getElementById('hs-' + id).value);
    const as = parseInt(document.getElementById('as-' + id).value);
    const st = document.getElementById('st-' + id).value;
    if (isNaN(hs) || isNaN(as)) { alert('请输入有效比分'); return; }
    DataManager.updateMatch(id, st, hs, as);
    this.showToast('已保存: ' + id);
    this.adminPage();
    this.render();
  },

  saveAllMatches() {
    let n = 0;
    WorldCupData.matches.forEach(m => {
      const hsEl = document.getElementById('hs-' + m.id);
      const asEl = document.getElementById('as-' + m.id);
      const stEl = document.getElementById('st-' + m.id);
      if (hsEl && asEl && stEl) {
        const hs = parseInt(hsEl.value);
        const as = parseInt(asEl.value);
        if (!isNaN(hs) && !isNaN(as)) {
          DataManager.updateMatch(m.id, stEl.value, hs, as);
          n++;
        }
      }
    });
    this.showToast('已保存 ' + n + ' 场比赛');
    this.render();
  },

  quickSave(id) {
    const h = parseInt(document.getElementById('qs-' + id + '-h').value);
    const a = parseInt(document.getElementById('qs-' + id + '-a').value);
    if (isNaN(h) || isNaN(a)) { alert('请输入有效比分'); return; }
    DataManager.updateMatch(id, 'live', h, a);
    this.showToast('已保存 ' + id + ' 比分: ' + h + '-' + a);
    this.render();
  },

  quickFinish(id) {
    const h = parseInt(document.getElementById('qs-' + id + '-h').value);
    const a = parseInt(document.getElementById('qs-' + id + '-a').value);
    if (isNaN(h) || isNaN(a)) { alert('请输入有效比分'); return; }
    DataManager.updateMatch(id, 'finished', h, a);
    this.showToast('比赛结束: ' + id + ' ' + h + '-' + a);
    this.render();
  },

  saveNews() {
    const title = document.getElementById('newsTitle').value.trim();
    const summary = document.getElementById('newsSummary').value.trim();
    const content = document.getElementById('newsContent').value.trim();
    const category = document.getElementById('newsCategory').value.trim() || '最新消息';
    if (!title) { alert('请输入标题'); return; }
    const newItem = {
      id: 'n' + Date.now(),
      title, summary, content, category,
      date: new Date().toISOString().slice(0,10),
      image: null
    };
    DataManager.addNews(newItem);
    this.showToast('新闻已发布');
    this.render();
  },

  exportData() {
    const json = DataManager.exportJSON();
    const blob = new Blob([json], {type: 'application/json'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'wc2026_data_' + new Date().toISOString().slice(0,10) + '.json';
    a.click();
    this.showToast('已导出');
  },

  importData() {
    const json = document.getElementById('importData').value;
    if (!json) { alert('请粘贴要导入的 JSON 数据'); return; }
    try {
      const updates = JSON.parse(json);
      if (!Array.isArray(updates)) { alert('格式错误：需要数组'); return; }
      let n = 0;
      updates.forEach(u => {
        const m = WorldCupData.matches.find(x => x.id === u.id);
        if (m) {
          if (u.status) m.status = u.status;
          if (u.homeScore !== undefined) m.homeScore = u.homeScore;
          if (u.awayScore !== undefined) m.awayScore = u.awayScore;
          n++;
        }
      });
      DataManager.save();
      this.showToast('已导入 ' + n + ' 场更新');
      this.render();
    } catch(e) {
      alert('JSON 解析错误: ' + e.message);
    }
  },

  resetData() {
    if (confirm('确定要重置所有数据吗？此操作不可撤销！')) {
      DataManager.reset();
    }
  },

  // ============================================================
  // MATCH CARD EDIT MODE OVERLAY
  // ============================================================

  showMatchEditor(id) {
    const m = WorldCupData.matches.find(x => x.id === id);
    if (!m) return;
    document.getElementById("matchModalContent").innerHTML = `
      <h2 style="margin-bottom:16px">⚽ 编辑比分: ${teamFlag(m.home)} ${getTeamName(m.home)} vs ${getTeamName(m.away)} ${teamFlag(m.away)}</h2>
      <div style="display:flex;align-items:center;justify-content:center;gap:16px;margin:20px 0">
        <div style="text-align:center">
          <div style="font-size:2.5rem;margin-bottom:4px">${teamFlag(m.home)}</div>
          <div style="font-weight:600">${getTeamName(m.home)}</div>
        </div>
        <div style="display:flex;align-items:center;gap:8px">
          <input type="number" min="0" max="20" id="edit-hs" value="${m.homeScore !== null ? m.homeScore : 0}" style="width:60px;height:50px;font-size:1.6rem;text-align:center;background:var(--secondary);border:2px solid var(--gold);border-radius:8px;color:var(--gold);font-weight:800">
          <span style="font-size:2rem;font-weight:800;color:var(--text-dim)">:</span>
          <input type="number" min="0" max="20" id="edit-as" value="${m.awayScore !== null ? m.awayScore : 0}" style="width:60px;height:50px;font-size:1.6rem;text-align:center;background:var(--secondary);border:2px solid var(--gold);border-radius:8px;color:var(--gold);font-weight:800">
        </div>
        <div style="text-align:center">
          <div style="font-size:2.5rem;margin-bottom:4px">${teamFlag(m.away)}</div>
          <div style="font-weight:600">${getTeamName(m.away)}</div>
        </div>
      </div>
      <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
        <button class="btn" onclick="App.confirmEdit('${m.id}')" style="padding:10px 24px">💾 保存比分</button>
        <button class="btn btn-secondary" onclick="document.getElementById('edit-hs').value='0';document.getElementById('edit-as').value='0';DataManager.updateMatch('${m.id}','finished',0,0);App.showToast('0-0 已保存');closeMatchModal();App.render()">🔄 设为0-0</button>
        <button class="btn btn-secondary" onclick="App.showToast('已取消');closeMatchModal()">取消</button>
      </div>
      <div style="display:flex;gap:8px;justify-content:center;margin-top:10px">
        <button class="btn btn-secondary" onclick="DataManager.updateMatch('${m.id}','live',${m.homeScore !== null ? m.homeScore : 0},${m.awayScore !== null ? m.awayScore : 0});App.showToast('标记为进行中');closeMatchModal();App.render()" style="font-size:0.78rem">🔴 进行中</button>
        <button class="btn btn-secondary" onclick="DataManager.updateMatch('${m.id}','scheduled',null,null);App.showToast('标记为待赛');closeMatchModal();App.render()" style="font-size:0.78rem">📅 待赛</button>
      </div>
    `;
    document.getElementById("matchModal").classList.add("show");
  },

  confirmEdit(id) {
    const h = parseInt(document.getElementById('edit-hs').value);
    const a = parseInt(document.getElementById('edit-as').value);
    if (isNaN(h) || isNaN(a)) { alert('请输入有效比分'); return; }
    DataManager.updateMatch(id, 'finished', h, a);
    this.showToast('比分已保存: ' + h + '-' + a);
    closeMatchModal();
    this.render();
  },

  // ============================================================
  // TOAST NOTIFICATION
  // ============================================================
  showToast(msg) {
    let t = document.getElementById('toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'toast';
      t.style.cssText = 'position:fixed;bottom:30px;left:50%;transform:translateX(-50%);background:var(--gold);color:var(--primary);padding:12px 28px;border-radius:30px;font-weight:700;font-size:0.88rem;z-index:9999;box-shadow:0 8px 30px rgba(0,0,0,0.4);transition:all .3s;opacity:0';
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.style.opacity = '1';
    t.style.transform = 'translateX(-50%) translateY(0)';
    clearTimeout(t._timer);
    t._timer = setTimeout(() => { t.style.opacity = '0'; t.style.transform = 'translateX(-50%) translateY(20px)'; }, 2500);
  }
};

function closeNewsModal() { document.getElementById("newsModal").classList.remove("show"); }
function closeMatchModal() { document.getElementById("matchModal").classList.remove("show"); }
document.addEventListener("click", (e) => { if (e.target.classList.contains("modal-overlay")) e.target.classList.remove("show"); });
document.addEventListener("DOMContentLoaded", () => App.init());
