// ============================================================
// 2026 FIFA World Cup - Complete Data
// Host: USA, Canada, Mexico
// Format: 48 teams, 12 groups of 4
// ============================================================

var WorldCupData = {
  info: {
    year: 2026,
    host: "美国 / 加拿大 / 墨西哥",
    hostEn: "USA / Canada / Mexico",
    startDate: "2026-06-11",
    endDate: "2026-07-19",
    teams: 48,
    groups: 12,
    format: "12小组 x 4队，前2+8个第3名晋级32强淘汰赛",
    matchesTotal: 104,
    slogan: "We Are 2026",
    mascot: "梦想之翼",
  },
  groups: [
    {id:"A",name:"A组",teams:["MEX","RSA","KOR","CZE"]},
    {id:"B",name:"B组",teams:["CAN","BIH","SUI","QAT"]},
    {id:"C",name:"C组",teams:["BRA","MAR","SCO","HAI"]},
    {id:"D",name:"D组",teams:["USA","PAR","AUS","TUR"]},
    {id:"E",name:"E组",teams:["GER","CUW","CIV","ECU"]},
    {id:"F",name:"F组",teams:["NED","JPN","SWE","TUN"]},
    {id:"G",name:"G组",teams:["BEL","EGY","IRN","NZL"]},
    {id:"H",name:"H组",teams:["ESP","CPV","KSA","URU"]},
    {id:"I",name:"I组",teams:["FRA","SEN","IRQ","NOR"]},
    {id:"J",name:"J组",teams:["ARG","ALG","AUT","JOR"]},
    {id:"K",name:"K组",teams:["POR","COD","UZB","COL"]},
    {id:"L",name:"L组",teams:["ENG","CRO","GHA","PAN"]},
  ],
  teams: {
    ALG:{code:"DZ",name:"阿尔及利亚",fifaRank:34,region:"CAF",coach:"贾迈勒·贝尔马迪"},
    ARG:{code:"AR",name:"阿根廷",fifaRank:2,region:"CONMEBOL",coach:"莱昂内尔·斯卡洛尼"},
    AUS:{code:"AU",name:"澳大利亚",fifaRank:27,region:"AFC",coach:"格拉汉姆·阿诺德"},
    AUT:{code:"AT",name:"奥地利",fifaRank:25,region:"UEFA",coach:"拉尔夫·朗尼克"},
    BEL:{code:"BE",name:"比利时",fifaRank:19,region:"UEFA",coach:"多梅尼科·特德斯科"},
    BIH:{code:"BA",name:"波黑",fifaRank:57,region:"UEFA",coach:"谢尔盖·巴巴雷茨"},
    BRA:{code:"BR",name:"巴西",fifaRank:1,region:"CONMEBOL",coach:"多里瓦尔·儒尼奥尔"},
    CAN:{code:"CA",name:"加拿大",fifaRank:48,region:"CONCACAF",coach:"杰西·马什"},
    CIV:{code:"CI",name:"科特迪瓦",fifaRank:43,region:"CAF",coach:"埃默斯·法埃"},
    COD:{code:"CD",name:"刚果(金)",fifaRank:64,region:"CAF",coach:"塞巴斯蒂安·德萨布雷"},
    COL:{code:"CO",name:"哥伦比亚",fifaRank:14,region:"CONMEBOL",coach:"内斯托尔·洛伦佐"},
    CPV:{code:"CV",name:"佛得角",fifaRank:72,region:"CAF",coach:"布比斯塔"},
    CRO:{code:"HR",name:"克罗地亚",fifaRank:7,region:"UEFA",coach:"兹拉特科·达利奇"},
    CUW:{code:"CW",name:"库拉索",fifaRank:86,region:"CONCACAF",coach:"迪克·艾德沃卡特"},
    CZE:{code:"CZ",name:"捷克",fifaRank:38,region:"UEFA",coach:"伊万·哈塞克"},
    ECU:{code:"EC",name:"厄瓜多尔",fifaRank:29,region:"CONMEBOL",coach:"菲利克斯·桑切斯"},
    EGY:{code:"EG",name:"埃及",fifaRank:35,region:"CAF",coach:"鲁伊·维多利亚"},
    ENG:{code:"GB-ENG",name:"英格兰",fifaRank:5,region:"UEFA",coach:"加雷斯·索斯盖特"},
    ESP:{code:"ES",name:"西班牙",fifaRank:6,region:"UEFA",coach:"路易斯·德拉富恩特"},
    FRA:{code:"FR",name:"法国",fifaRank:4,region:"UEFA",coach:"迪迪埃·德尚"},
    GER:{code:"DE",name:"德国",fifaRank:3,region:"UEFA",coach:"朱利安·纳格尔斯曼"},
    GHA:{code:"GH",name:"加纳",fifaRank:40,region:"CAF",coach:"克里斯·休顿"},
    HAI:{code:"HT",name:"海地",fifaRank:89,region:"CONCACAF",coach:"加布里埃尔·卡尔德隆"},
    IRN:{code:"IR",name:"伊朗",fifaRank:22,region:"AFC",coach:"阿米尔·加莱诺伊"},
    IRQ:{code:"IQ",name:"伊拉克",fifaRank:63,region:"AFC",coach:"赫苏斯·卡萨斯"},
    JOR:{code:"JO",name:"约旦",fifaRank:70,region:"AFC",coach:"侯赛因·阿莫塔"},
    JPN:{code:"JP",name:"日本",fifaRank:17,region:"AFC",coach:"森保一"},
    KOR:{code:"KR",name:"韩国",fifaRank:28,region:"AFC",coach:"黄善洪"},
    KSA:{code:"SA",name:"沙特阿拉伯",fifaRank:53,region:"AFC",coach:"罗伯托·曼奇尼"},
    MAR:{code:"MA",name:"摩洛哥",fifaRank:13,region:"CAF",coach:"瓦利德·雷格拉吉"},
    MEX:{code:"MX",name:"墨西哥",fifaRank:12,region:"CONCACAF",coach:"哈梅·洛萨诺"},
    NED:{code:"NL",name:"荷兰",fifaRank:9,region:"UEFA",coach:"罗纳德·科曼"},
    NOR:{code:"NO",name:"挪威",fifaRank:36,region:"UEFA",coach:"斯塔莱·索尔巴肯"},
    NZL:{code:"NZ",name:"新西兰",fifaRank:104,region:"OFC",coach:"达伦·巴泽利"},
    PAN:{code:"PA",name:"巴拿马",fifaRank:55,region:"CONCACAF",coach:"托马斯·克里斯蒂安森"},
    PAR:{code:"PY",name:"巴拉圭",fifaRank:42,region:"CONMEBOL",coach:"吉列尔莫·巴罗斯·谢洛托"},
    POR:{code:"PT",name:"葡萄牙",fifaRank:8,region:"UEFA",coach:"罗伯托·马丁内斯"},
    QAT:{code:"QA",name:"卡塔尔",fifaRank:58,region:"AFC",coach:"马尔克斯·洛佩斯"},
    RSA:{code:"ZA",name:"南非",fifaRank:66,region:"CAF",coach:"雨果·布罗斯"},
    SCO:{code:"GB-SCT",name:"苏格兰",fifaRank:39,region:"UEFA",coach:"史蒂夫·克拉克"},
    SEN:{code:"SN",name:"塞内加尔",fifaRank:20,region:"CAF",coach:"阿利乌·西塞"},
    SUI:{code:"CH",name:"瑞士",fifaRank:15,region:"UEFA",coach:"穆拉特·雅金"},
    SWE:{code:"SE",name:"瑞典",fifaRank:24,region:"UEFA",coach:"扬内·安德松"},
    TUN:{code:"TN",name:"突尼斯",fifaRank:31,region:"CAF",coach:"杰拉尔丁·凯西"},
    TUR:{code:"TR",name:"土耳其",fifaRank:26,region:"UEFA",coach:"文森佐·蒙特拉"},
    URU:{code:"UY",name:"乌拉圭",fifaRank:16,region:"CONMEBOL",coach:"马塞洛·贝尔萨"},
    USA:{code:"US",name:"美国",fifaRank:11,region:"CONCACAF",coach:"格雷格·贝尔哈特"},
    UZB:{code:"UZ",name:"乌兹别克斯坦",fifaRank:74,region:"AFC",coach:"斯雷奇科·卡塔内茨"},
  },
  squads: {
    BRA: {coach:{name:"多里瓦尔·儒尼奥尔",nationality:"巴西",born:"1962-04-25"},assistants:["塞萨尔·桑帕约","阿图尔·维克多"],
      players:[
        {pos:"GK",name:"阿利松",age:33,club:"利物浦"},{pos:"GK",name:"埃德森",age:32,club:"曼城"},{pos:"GK",name:"本托",age:27,club:"巴拉纳竞技"},
        {pos:"DF",name:"马尔基尼奥斯",age:32,club:"巴黎圣日耳曼"},{pos:"DF",name:"加布里埃尔",age:28,club:"阿森纳"},{pos:"DF",name:"米利唐",age:28,club:"皇马"},
        {pos:"DF",name:"达尼洛",age:34,club:"尤文图斯"},{pos:"DF",name:"埃莫森",age:27,club:"热刺"},{pos:"DF",name:"布雷默",age:29,club:"尤文图斯"},
        {pos:"MF",name:"卡塞米罗",age:34,club:"曼联"},{pos:"MF",name:"吉马良斯",age:28,club:"纽卡斯尔"},{pos:"MF",name:"道格拉斯·路易斯",age:27,club:"维拉"},
        {pos:"MF",name:"拉菲尼亚",age:29,club:"巴萨"},{pos:"MF",name:"维尼修斯",age:25,club:"皇马"},{pos:"MF",name:"罗德里戈",age:25,club:"皇马"},
        {pos:"FW",name:"内马尔",age:34,club:"桑托斯"},{pos:"FW",name:"理查利森",age:29,club:"热刺"},{pos:"FW",name:"热苏斯",age:29,club:"阿森纳"},
        {pos:"FW",name:"恩德里克",age:20,club:"皇马"},{pos:"FW",name:"马丁内利",age:25,club:"阿森纳"},{pos:"FW",name:"佩德罗",age:29,club:"弗拉门戈"},
      ]
    },
    ARG: {coach:{name:"莱昂内尔·斯卡洛尼",nationality:"阿根廷",born:"1978-05-16"},assistants:["巴勃罗·艾马尔","罗伯托·阿亚拉"],
      players:[
        {pos:"GK",name:"马丁内斯",age:33,club:"维拉"},{pos:"GK",name:"阿玛尼",age:39,club:"河床"},{pos:"GK",name:"鲁利",age:34,club:"马赛"},
        {pos:"DF",name:"罗梅罗",age:28,club:"热刺"},{pos:"DF",name:"奥塔门迪",age:38,club:"本菲卡"},{pos:"DF",name:"阿库尼亚",age:34,club:"塞维利亚"},
        {pos:"DF",name:"莫利纳",age:28,club:"马竞"},{pos:"DF",name:"塔利亚菲科",age:33,club:"里昂"},{pos:"DF",name:"蒙蒂尔",age:29,club:"诺丁汉森林"},
        {pos:"MF",name:"德保罗",age:32,club:"马竞"},{pos:"MF",name:"帕雷德斯",age:32,club:"罗马"},{pos:"MF",name:"洛塞尔索",age:30,club:"热刺"},
        {pos:"MF",name:"麦卡利斯特",age:27,club:"利物浦"},{pos:"MF",name:"迪马利亚",age:38,club:"本菲卡"},{pos:"MF",name:"帕拉西奥斯",age:27,club:"勒沃库森"},
        {pos:"FW",name:"梅西",age:39,club:"迈阿密国际"},{pos:"FW",name:"劳塔罗",age:28,club:"国米"},{pos:"FW",name:"阿尔瓦雷斯",age:26,club:"曼城"},
        {pos:"FW",name:"迪巴拉",age:32,club:"罗马"},{pos:"FW",name:"冈萨雷斯",age:28,club:"尤文"},{pos:"FW",name:"阿尔马达",age:25,club:"博塔弗戈"},
      ]
    },
    FRA: {coach:{name:"迪迪埃·德尚",nationality:"法国",born:"1968-10-15"},assistants:["盖伊·斯特凡","约翰·卡巴耶"],
      players:[
        {pos:"GK",name:"迈尼昂",age:31,club:"AC米兰"},{pos:"GK",name:"阿雷奥拉",age:33,club:"西汉姆"},{pos:"GK",name:"谢瓦利埃",age:25,club:"里尔"},
        {pos:"DF",name:"萨利巴",age:25,club:"阿森纳"},{pos:"DF",name:"卢卡斯·埃尔南德斯",age:30,club:"巴黎"},{pos:"DF",name:"特奥",age:28,club:"AC米兰"},
        {pos:"DF",name:"孔德",age:27,club:"巴萨"},{pos:"DF",name:"于帕梅卡诺",age:27,club:"拜仁"},{pos:"DF",name:"科纳特",age:27,club:"利物浦"},
        {pos:"DF",name:"帕瓦尔",age:30,club:"国米"},
        {pos:"MF",name:"楚阿梅尼",age:26,club:"皇马"},{pos:"MF",name:"卡马文加",age:23,club:"皇马"},{pos:"MF",name:"拉比奥",age:31,club:"马赛"},
        {pos:"MF",name:"扎伊尔-埃梅里",age:20,club:"巴黎"},{pos:"MF",name:"贡杜齐",age:27,club:"拉齐奥"},{pos:"MF",name:"福法纳",age:27,club:"摩纳哥"},
        {pos:"FW",name:"姆巴佩",age:27,club:"皇马"},{pos:"FW",name:"格列兹曼",age:35,club:"马竞"},{pos:"FW",name:"图拉姆",age:28,club:"国米"},
        {pos:"FW",name:"科曼",age:30,club:"拜仁"},{pos:"FW",name:"吉鲁",age:39,club:"AC米兰"},{pos:"FW",name:"穆阿尼",age:27,club:"巴黎"},
      ]
    },
    ENG: {coach:{name:"加雷斯·索斯盖特",nationality:"英格兰",born:"1970-09-03"},assistants:["史蒂夫·霍兰德","吉米·哈塞尔巴因克"],
      players:[
        {pos:"GK",name:"皮克福德",age:32,club:"埃弗顿"},{pos:"GK",name:"拉姆斯代尔",age:28,club:"阿森纳"},{pos:"GK",name:"亨德森",age:29,club:"水晶宫"},
        {pos:"DF",name:"斯通斯",age:32,club:"曼城"},{pos:"DF",name:"马奎尔",age:33,club:"曼联"},{pos:"DF",name:"沃克",age:36,club:"曼城"},
        {pos:"DF",name:"里斯·詹姆斯",age:26,club:"切尔西"},{pos:"DF",name:"卢克·肖",age:30,club:"曼联"},{pos:"DF",name:"格希",age:26,club:"水晶宫"},
        {pos:"DF",name:"布兰斯韦特",age:24,club:"埃弗顿"},
        {pos:"MF",name:"赖斯",age:27,club:"阿森纳"},{pos:"MF",name:"贝林厄姆",age:23,club:"皇马"},{pos:"MF",name:"福登",age:26,club:"曼城"},
        {pos:"MF",name:"帕尔默",age:24,club:"切尔西"},{pos:"MF",name:"梅努",age:21,club:"曼联"},{pos:"MF",name:"加拉格尔",age:26,club:"马竞"},
        {pos:"FW",name:"凯恩",age:32,club:"拜仁"},{pos:"FW",name:"沃特金斯",age:30,club:"维拉"},{pos:"FW",name:"拉什福德",age:28,club:"曼联"},
        {pos:"FW",name:"戈登",age:25,club:"纽卡斯尔"},{pos:"FW",name:"萨卡",age:24,club:"阿森纳"},{pos:"FW",name:"托尼",age:30,club:"布伦特福德"},
      ]
    },
    ESP: {coach:{name:"路易斯·德拉富恩特",nationality:"西班牙",born:"1961-06-21"},assistants:["巴勃罗·阿莫","米格尔·安赫尔"],
      players:[
        {pos:"GK",name:"乌奈·西蒙",age:29,club:"毕尔巴鄂"},{pos:"GK",name:"拉亚",age:30,club:"阿森纳"},{pos:"GK",name:"凯帕",age:31,club:"皇马"},
        {pos:"DF",name:"卡瓦哈尔",age:34,club:"皇马"},{pos:"DF",name:"拉波特",age:32,club:"利雅得胜利"},{pos:"DF",name:"保·托雷斯",age:29,club:"维拉"},
        {pos:"DF",name:"库库雷利亚",age:27,club:"切尔西"},{pos:"DF",name:"巴尔德",age:22,club:"巴萨"},{pos:"DF",name:"纳乔",age:36,club:"皇马"},
        {pos:"DF",name:"维维安",age:25,club:"毕尔巴鄂"},
        {pos:"MF",name:"佩德里",age:23,club:"巴萨"},{pos:"MF",name:"加维",age:21,club:"巴萨"},{pos:"MF",name:"法比安",age:30,club:"巴黎"},
        {pos:"MF",name:"梅里诺",age:30,club:"皇家社会"},{pos:"MF",name:"苏比门迪",age:27,club:"皇家社会"},{pos:"MF",name:"奥尔莫",age:28,club:"巴萨"},
        {pos:"FW",name:"莫拉塔",age:33,club:"AC米兰"},{pos:"FW",name:"尼科·威廉姆斯",age:24,club:"毕尔巴鄂"},{pos:"FW",name:"费兰·托雷斯",age:26,club:"巴萨"},
        {pos:"FW",name:"亚马尔",age:18,club:"巴萨"},{pos:"FW",name:"奥亚萨瓦尔",age:29,club:"皇家社会"},{pos:"FW",name:"何塞卢",age:36,club:"皇马"},
      ]
    },
    GER: {coach:{name:"朱利安·纳格尔斯曼",nationality:"德国",born:"1987-07-23"},assistants:["本杰明·格吕克","桑德罗·瓦格纳"],
      players:[
        {pos:"GK",name:"诺伊尔",age:40,club:"拜仁"},{pos:"GK",name:"特尔施特根",age:34,club:"巴萨"},{pos:"GK",name:"鲍曼",age:34,club:"霍芬海姆"},
        {pos:"DF",name:"吕迪格",age:33,club:"皇马"},{pos:"DF",name:"约纳坦·塔",age:30,club:"勒沃库森"},{pos:"DF",name:"基米希",age:31,club:"拜仁"},
        {pos:"DF",name:"劳姆",age:28,club:"莱比锡"},{pos:"DF",name:"施洛特贝克",age:26,club:"多特蒙德"},{pos:"DF",name:"亨里希斯",age:29,club:"莱比锡"},
        {pos:"MF",name:"克罗斯",age:36,club:"皇马"},{pos:"MF",name:"京多安",age:35,club:"巴萨"},{pos:"MF",name:"穆西亚拉",age:23,club:"拜仁"},
        {pos:"MF",name:"维尔茨",age:23,club:"勒沃库森"},{pos:"MF",name:"戈雷茨卡",age:31,club:"拜仁"},{pos:"MF",name:"安德里希",age:31,club:"勒沃库森"},
        {pos:"FW",name:"哈弗茨",age:27,club:"阿森纳"},{pos:"FW",name:"菲尔克鲁格",age:33,club:"多特蒙德"},{pos:"FW",name:"阿德耶米",age:24,club:"多特蒙德"},
        {pos:"FW",name:"萨内",age:30,club:"拜仁"},{pos:"FW",name:"穆勒",age:36,club:"拜仁"},{pos:"FW",name:"翁达夫",age:29,club:"斯图加特"},
      ]
    },
    POR: {coach:{name:"罗伯托·马丁内斯",nationality:"西班牙",born:"1973-07-13"},assistants:["安东尼奥·席尔瓦","里卡多·卡瓦略"],
      players:[
        {pos:"GK",name:"迪奥戈·科斯塔",age:26,club:"波尔图"},{pos:"GK",name:"帕特里西奥",age:38,club:"罗马"},{pos:"GK",name:"若泽·萨",age:33,club:"狼队"},
        {pos:"DF",name:"鲁本·迪亚斯",age:29,club:"曼城"},{pos:"DF",name:"佩佩",age:43,club:"波尔图"},{pos:"DF",name:"坎塞洛",age:32,club:"巴萨"},
        {pos:"DF",name:"努诺·门德斯",age:24,club:"巴黎"},{pos:"DF",name:"达洛特",age:27,club:"曼联"},{pos:"DF",name:"伊纳西奥",age:24,club:"葡萄牙体育"},
        {pos:"DF",name:"安东尼奥·席尔瓦",age:22,club:"本菲卡"},
        {pos:"MF",name:"B席",age:31,club:"曼城"},{pos:"MF",name:"B费",age:31,club:"曼联"},{pos:"MF",name:"帕利尼亚",age:31,club:"富勒姆"},
        {pos:"MF",name:"维蒂尼亚",age:26,club:"巴黎"},{pos:"MF",name:"内维斯",age:29,club:"利雅得新月"},{pos:"MF",name:"努内斯",age:27,club:"曼城"},
        {pos:"FW",name:"C罗",age:41,club:"利雅得胜利"},{pos:"FW",name:"菲利克斯",age:26,club:"马竞"},{pos:"FW",name:"莱奥",age:27,club:"AC米兰"},
        {pos:"FW",name:"若塔",age:29,club:"利物浦"},{pos:"FW",name:"拉莫斯",age:25,club:"巴黎"},{pos:"FW",name:"内托",age:26,club:"狼队"},
      ]
    },
    NED: {coach:{name:"罗纳德·科曼",nationality:"荷兰",born:"1963-03-21"},assistants:["鲁德·范尼斯特鲁伊","德克·库伊特"],
      players:[
        {pos:"GK",name:"西莱森",age:37,club:"奈梅亨"},{pos:"GK",name:"弗布鲁根",age:23,club:"布莱顿"},{pos:"GK",name:"弗莱肯",age:32,club:"布伦特福德"},
        {pos:"DF",name:"范迪克",age:35,club:"利物浦"},{pos:"DF",name:"德利赫特",age:26,club:"拜仁"},{pos:"DF",name:"阿克",age:31,club:"曼城"},
        {pos:"DF",name:"邓弗里斯",age:30,club:"国米"},{pos:"DF",name:"范德文",age:25,club:"热刺"},{pos:"DF",name:"弗林蓬",age:25,club:"勒沃库森"},
        {pos:"MF",name:"德容",age:29,club:"巴萨"},{pos:"MF",name:"库普梅纳斯",age:28,club:"维拉"},{pos:"MF",name:"德鲁恩",age:32,club:"亚特兰大"},
        {pos:"MF",name:"哈维·西蒙斯",age:23,club:"莱比锡"},{pos:"MF",name:"赫拉芬贝赫",age:24,club:"利物浦"},{pos:"MF",name:"费尔曼",age:27,club:"埃因霍温"},
        {pos:"FW",name:"德佩",age:32,club:"马竞"},{pos:"FW",name:"加克波",age:27,club:"利物浦"},{pos:"FW",name:"马伦",age:27,club:"多特蒙德"},
        {pos:"FW",name:"韦格霍斯特",age:33,club:"霍芬海姆"},{pos:"FW",name:"布罗比",age:24,club:"阿贾克斯"},{pos:"FW",name:"博格维恩",age:28,club:"阿贾克斯"},
      ]
    },
    CRO: {coach:{name:"兹拉特科·达利奇",nationality:"克罗地亚",born:"1966-10-26"},assistants:["德拉甘·尤尔切维奇","马里奥·托基奇"],
      players:[
        {pos:"GK",name:"利瓦科维奇",age:31,club:"费内巴切"},{pos:"GK",name:"伊武西奇",age:29,club:"帕奥克"},{pos:"GK",name:"拉布罗维奇",age:26,club:"里耶卡"},
        {pos:"DF",name:"格瓦迪奥尔",age:24,club:"曼城"},{pos:"DF",name:"查莱塔-卡尔",age:29,club:"里昂"},{pos:"DF",name:"索萨",age:28,club:"阿贾克斯"},
        {pos:"DF",name:"尤拉诺维奇",age:30,club:"柏林联合"},{pos:"DF",name:"埃里奇",age:27,club:"萨索洛"},{pos:"DF",name:"庞格拉契奇",age:28,club:"莱切"},
        {pos:"MF",name:"莫德里奇",age:40,club:"皇马"},{pos:"MF",name:"布罗佐维奇",age:33,club:"利雅得胜利"},{pos:"MF",name:"科瓦西奇",age:32,club:"曼城"},
        {pos:"MF",name:"马耶尔",age:28,club:"沃尔夫斯堡"},{pos:"MF",name:"帕萨利奇",age:31,club:"亚特兰大"},{pos:"MF",name:"苏契奇",age:23,club:"萨尔斯堡"},
        {pos:"FW",name:"克拉马里奇",age:35,club:"霍芬海姆"},{pos:"FW",name:"佩里西奇",age:37,club:"热刺"},{pos:"FW",name:"佩特科维奇",age:31,club:"萨格勒布迪纳摩"},
        {pos:"FW",name:"布迪米尔",age:34,club:"奥萨苏纳"},{pos:"FW",name:"利瓦亚",age:32,club:"哈伊杜克"},{pos:"FW",name:"马塔",age:24,club:"法兰克福"},
      ]
    },
    ITA: {coach:{name:"卢西亚诺·斯帕莱蒂",nationality:"意大利",born:"1959-03-07"},assistants:["马尔科·多梅尼基尼","萨尔瓦托雷·巴雷西"],
      players:[
        {pos:"GK",name:"多纳鲁马",age:27,club:"巴黎"},{pos:"GK",name:"维卡里奥",age:29,club:"热刺"},{pos:"GK",name:"梅雷特",age:29,club:"那不勒斯"},
        {pos:"DF",name:"迪洛伦佐",age:32,club:"那不勒斯"},{pos:"DF",name:"巴斯托尼",age:27,club:"国米"},{pos:"DF",name:"卡拉菲奥里",age:24,club:"博洛尼亚"},
        {pos:"DF",name:"斯卡尔维尼",age:22,club:"亚特兰大"},{pos:"DF",name:"迪马尔科",age:28,club:"国米"},{pos:"DF",name:"托洛伊",age:36,club:"亚特兰大"},
        {pos:"DF",name:"达米安",age:36,club:"国米"},
        {pos:"MF",name:"巴雷拉",age:29,club:"国米"},{pos:"MF",name:"托纳利",age:26,club:"纽卡斯尔"},{pos:"MF",name:"弗拉泰西",age:26,club:"国米"},
        {pos:"MF",name:"洛卡特利",age:28,club:"尤文"},{pos:"MF",name:"佩莱格里尼",age:30,club:"罗马"},{pos:"MF",name:"法乔利",age:25,club:"尤文"},
        {pos:"FW",name:"基耶萨",age:28,club:"尤文"},{pos:"FW",name:"雷特吉",age:27,club:"热那亚"},{pos:"FW",name:"扎尼奥洛",age:26,club:"维拉"},
        {pos:"FW",name:"拉斯帕多里",age:26,club:"那不勒斯"},{pos:"FW",name:"斯卡马卡",age:27,club:"亚特兰大"},{pos:"FW",name:"奥尔索利尼",age:27,club:"博洛尼亚"},
      ]
    },
    BEL: {coach:{name:"多梅尼科·特德斯科",nationality:"比利时/德国",born:"1985-09-12"},assistants:["史蒂夫·范德海登","蒂莫·维尔纳"],
      players:[
        {pos:"GK",name:"库尔图瓦",age:34,club:"皇马"},{pos:"GK",name:"卡斯特尔斯",age:34,club:"沃尔夫斯堡"},{pos:"GK",name:"米尼奥莱",age:38,club:"布鲁日"},
        {pos:"DF",name:"德布劳内",age:35,club:"曼城"},{pos:"DF",name:"费斯",age:28,club:"莱斯特城"},{pos:"DF",name:"维尔通亨",age:39,club:"安德莱赫特"},
        {pos:"DF",name:"卡斯塔涅",age:30,club:"富勒姆"},{pos:"DF",name:"托比·阿尔德韦雷尔德",age:37,club:"安特卫普"},{pos:"DF",name:"德巴斯特",age:23,club:"安德莱赫特"},
        {pos:"DF",name:"泰特",age:25,club:"雷恩"},
        {pos:"MF",name:"德布劳内",age:35,club:"曼城"},{pos:"MF",name:"蒂莱曼斯",age:29,club:"维拉"},{pos:"MF",name:"奥纳纳",age:24,club:"埃弗顿"},
        {pos:"MF",name:"曼加拉",age:28,club:"里昂"},{pos:"MF",name:"巴卡约科",age:21,club:"埃因霍温"},{pos:"MF",name:"范德威尔",age:22,club:"安特卫普"},
        {pos:"FW",name:"卢卡库",age:33,club:"切尔西"},{pos:"FW",name:"多库",age:24,club:"曼城"},{pos:"FW",name:"特罗萨德",age:31,club:"阿森纳"},
        {pos:"FW",name:"奥蓬达",age:26,club:"莱比锡"},{pos:"FW",name:"德凯特拉雷",age:25,club:"AC米兰"},{pos:"FW",name:"巴舒亚伊",age:32,club:"费内巴切"},
      ]
    },
    JPN: {coach:{name:"森保一",nationality:"日本",born:"1968-08-23"},assistants:["名波浩","服部年宏"],
      players:[
        {pos:"GK",name:"铃木彩艳",age:23,club:"圣图尔登"},{pos:"GK",name:"大迫敬介",age:27,club:"广岛三箭"},{pos:"GK",name:"前川黛也",age:31,club:"神户胜利船"},
        {pos:"DF",name:"板仓滉",age:29,club:"门兴"},{pos:"DF",name:"富安健洋",age:27,club:"阿森纳"},{pos:"DF",name:"伊藤洋辉",age:27,club:"斯图加特"},
        {pos:"DF",name:"菅原由势",age:26,club:"阿尔克马尔"},{pos:"DF",name:"町田浩树",age:28,club:"圣吉罗斯"},{pos:"DF",name:"濑古步梦",age:26,club:"草蜢"},
        {pos:"DF",name:"谷口彰悟",age:34,club:"阿尔赖扬"},
        {pos:"MF",name:"远藤航",age:33,club:"利物浦"},{pos:"MF",name:"田中碧",age:27,club:"杜塞尔多夫"},{pos:"MF",name:"守田英正",age:31,club:"葡萄牙体育"},
        {pos:"MF",name:"久保建英",age:25,club:"皇家社会"},{pos:"MF",name:"三笘薰",age:29,club:"布莱顿"},{pos:"MF",name:"堂安律",age:28,club:"弗赖堡"},
        {pos:"MF",name:"伊东纯也",age:33,club:"兰斯"},{pos:"MF",name:"南野拓实",age:31,club:"摩纳哥"},{pos:"FW",name:"上田绮世",age:27,club:"费耶诺德"},
        {pos:"FW",name:"古桥亨梧",age:31,club:"凯尔特人"},{pos:"FW",name:"前田大然",age:28,club:"凯尔特人"},{pos:"FW",name:"浅野拓磨",age:31,club:"波鸿"},
      ]
    },
    KOR: {coach:{name:"黄善洪",nationality:"韩国",born:"1971-03-08"},assistants:["车杜里","金度勋"],
      players:[
        {pos:"GK",name:"金承奎",age:35,club:"利雅得青年"},{pos:"GK",name:"赵贤祐",age:34,club:"蔚山现代"},{pos:"GK",name:"宋范根",age:28,club:"湘南比马"},
        {pos:"DF",name:"金玟哉",age:29,club:"拜仁"},{pos:"DF",name:"金英权",age:36,club:"蔚山现代"},{pos:"DF",name:"金珍洙",age:34,club:"全北现代"},
        {pos:"DF",name:"李记帝",age:34,club:"水原FC"},{pos:"DF",name:"权敬原",age:34,club:"水原FC"},{pos:"DF",name:"薛英佑",age:27,club:"贝尔格莱德红星"},
        {pos:"MF",name:"孙兴慜",age:33,club:"热刺"},{pos:"MF",name:"李刚仁",age:25,club:"巴黎"},{pos:"MF",name:"黄仁范",age:29,club:"贝尔格莱德红星"},
        {pos:"MF",name:"李在城",age:33,club:"美因茨"},{pos:"MF",name:"郑优营",age:26,club:"斯图加特"},{pos:"MF",name:"黄喜灿",age:30,club:"狼队"},
        {pos:"MF",name:"裴俊浩",age:22,club:"斯托克城"},{pos:"MF",name:"文宣民",age:34,club:"全北现代"},
        {pos:"FW",name:"曹圭成",age:28,club:"中日德兰"},{pos:"FW",name:"吴贤揆",age:25,club:"凯尔特人"},{pos:"FW",name:"梁泫准",age:24,club:"凯尔特人"},
      ]
    },
  },
  matches: [
    {id:"A1",group:"A",date:"2026-06-11",time:"18:00",home:"MEX",away:"RSA",stadium:"Estadio Azteca (墨西哥城)",stage:"小组赛",status:"finished",homeScore:2,awayScore:0},
    {id:"A2",group:"A",date:"2026-06-11",time:"21:00",home:"KOR",away:"CZE",stadium:"Estadio Azteca (墨西哥城)",stage:"小组赛",status:"finished",homeScore:2,awayScore:1},
    {id:"A3",group:"A",date:"2026-06-18",time:"15:00",home:"MEX",away:"KOR",stadium:"Estadio Akron (瓜达拉哈拉)",stage:"小组赛",status:"scheduled",homeScore:null,awayScore:null},
    {id:"A4",group:"A",date:"2026-06-19",time:"20:00",home:"CZE",away:"RSA",stadium:"Estadio BBVA (蒙特雷)",stage:"小组赛",status:"scheduled",homeScore:null,awayScore:null},
    {id:"A5",group:"A",date:"2026-06-23",time:"21:00",home:"CZE",away:"MEX",stadium:"Estadio BBVA (蒙特雷)",stage:"小组赛",status:"scheduled",homeScore:null,awayScore:null},
    {id:"A6",group:"A",date:"2026-06-24",time:"20:00",home:"RSA",away:"KOR",stadium:"Estadio Akron (瓜达拉哈拉)",stage:"小组赛",status:"scheduled",homeScore:null,awayScore:null},
    {id:"B1",group:"B",date:"2026-06-12",time:"21:00",home:"CAN",away:"BIH",stadium:"BMO体育场 (多伦多)",stage:"小组赛",status:"finished",homeScore:1,awayScore:1},
    {id:"B2",group:"B",date:"2026-06-12",time:"15:00",home:"QAT",away:"SUI",stadium:"BC Place (温哥华)",stage:"小组赛",status:"finished",homeScore:1,awayScore:1},
    {id:"B3",group:"B",date:"2026-06-19",time:"20:00",home:"SUI",away:"BIH",stadium:"BMO体育场 (多伦多)",stage:"小组赛",status:"scheduled",homeScore:null,awayScore:null},
    {id:"B4",group:"B",date:"2026-06-20",time:"12:00",home:"CAN",away:"QAT",stadium:"BC Place (温哥华)",stage:"小组赛",status:"scheduled",homeScore:null,awayScore:null},
    {id:"B5",group:"B",date:"2026-06-24",time:"15:00",home:"SUI",away:"CAN",stadium:"BC Place (温哥华)",stage:"小组赛",status:"scheduled",homeScore:null,awayScore:null},
    {id:"B6",group:"B",date:"2026-06-25",time:"18:00",home:"BIH",away:"QAT",stadium:"BMO体育场 (多伦多)",stage:"小组赛",status:"scheduled",homeScore:null,awayScore:null},
    {id:"C1",group:"C",date:"2026-06-13",time:"15:00",home:"BRA",away:"MAR",stadium:"SoFi体育场 (洛杉矶)",stage:"小组赛",status:"finished",homeScore:1,awayScore:1},
    {id:"C2",group:"C",date:"2026-06-13",time:"18:00",home:"HAI",away:"SCO",stadium:"李维斯体育场 (旧金山)",stage:"小组赛",status:"finished",homeScore:0,awayScore:1},
    {id:"C3",group:"C",date:"2026-06-20",time:"20:00",home:"SCO",away:"MAR",stadium:"SoFi体育场 (洛杉矶)",stage:"小组赛",status:"scheduled",homeScore:null,awayScore:null},
    {id:"C4",group:"C",date:"2026-06-21",time:"12:00",home:"BRA",away:"HAI",stadium:"李维斯体育场 (旧金山)",stage:"小组赛",status:"scheduled",homeScore:null,awayScore:null},
    {id:"C5",group:"C",date:"2026-06-25",time:"21:00",home:"SCO",away:"BRA",stadium:"李维斯体育场 (旧金山)",stage:"小组赛",status:"scheduled",homeScore:null,awayScore:null},
    {id:"C6",group:"C",date:"2026-06-26",time:"12:00",home:"MAR",away:"HAI",stadium:"SoFi体育场 (洛杉矶)",stage:"小组赛",status:"scheduled",homeScore:null,awayScore:null},
    {id:"D1",group:"D",date:"2026-06-12",time:"12:00",home:"USA",away:"PAR",stadium:"大都会体育场 (纽约)",stage:"小组赛",status:"finished",homeScore:4,awayScore:1},
    {id:"D2",group:"D",date:"2026-06-12",time:"20:00",home:"AUS",away:"TUR",stadium:"林肯金融体育场 (费城)",stage:"小组赛",status:"finished",homeScore:2,awayScore:0},
    {id:"D3",group:"D",date:"2026-06-19",time:"12:00",home:"USA",away:"AUS",stadium:"吉列体育场 (波士顿)",stage:"小组赛",status:"scheduled",homeScore:null,awayScore:null},
    {id:"D4",group:"D",date:"2026-06-20",time:"21:00",home:"TUR",away:"PAR",stadium:"大都会体育场 (纽约)",stage:"小组赛",status:"scheduled",homeScore:null,awayScore:null},
    {id:"D5",group:"D",date:"2026-06-24",time:"15:00",home:"TUR",away:"USA",stadium:"林肯金融体育场 (费城)",stage:"小组赛",status:"scheduled",homeScore:null,awayScore:null},
    {id:"D6",group:"D",date:"2026-06-25",time:"15:00",home:"PAR",away:"AUS",stadium:"吉列体育场 (波士顿)",stage:"小组赛",status:"scheduled",homeScore:null,awayScore:null},
    {id:"E1",group:"E",date:"2026-06-14",time:"12:00",home:"GER",away:"CUW",stadium:"AT&T体育场 (达拉斯)",stage:"小组赛",status:"finished",homeScore:7,awayScore:1},
    {id:"E2",group:"E",date:"2026-06-14",time:"18:00",home:"CIV",away:"ECU",stadium:"NRG体育场 (休斯顿)",stage:"小组赛",status:"finished",homeScore:1,awayScore:0},
    {id:"E3",group:"E",date:"2026-06-21",time:"20:00",home:"GER",away:"CIV",stadium:"AT&T体育场 (达拉斯)",stage:"小组赛",status:"scheduled",homeScore:null,awayScore:null},
    {id:"E4",group:"E",date:"2026-06-22",time:"12:00",home:"ECU",away:"CUW",stadium:"NRG体育场 (休斯顿)",stage:"小组赛",status:"scheduled",homeScore:null,awayScore:null},
    {id:"E5",group:"E",date:"2026-06-26",time:"12:00",home:"CUW",away:"CIV",stadium:"NRG体育场 (休斯顿)",stage:"小组赛",status:"scheduled",homeScore:null,awayScore:null},
    {id:"E6",group:"E",date:"2026-06-27",time:"12:00",home:"ECU",away:"GER",stadium:"AT&T体育场 (达拉斯)",stage:"小组赛",status:"scheduled",homeScore:null,awayScore:null},
    {id:"F1",group:"F",date:"2026-06-14",time:"15:00",home:"NED",away:"JPN",stadium:"流明体育场 (西雅图)",stage:"小组赛",status:"finished",homeScore:2,awayScore:2},
    {id:"F2",group:"F",date:"2026-06-14",time:"12:00",home:"SWE",away:"TUN",stadium:"BC Place (温哥华)",stage:"小组赛",status:"finished",homeScore:2,awayScore:1},
    {id:"F3",group:"F",date:"2026-06-21",time:"21:00",home:"NED",away:"SWE",stadium:"流明体育场 (西雅图)",stage:"小组赛",status:"scheduled",homeScore:null,awayScore:null},
    {id:"F4",group:"F",date:"2026-06-22",time:"12:00",home:"TUN",away:"JPN",stadium:"流明体育场 (西雅图)",stage:"小组赛",status:"scheduled",homeScore:null,awayScore:null},
    {id:"F5",group:"F",date:"2026-06-26",time:"15:00",home:"JPN",away:"SWE",stadium:"BC Place (温哥华)",stage:"小组赛",status:"scheduled",homeScore:null,awayScore:null},
    {id:"F6",group:"F",date:"2026-06-27",time:"18:00",home:"TUN",away:"NED",stadium:"BC Place (温哥华)",stage:"小组赛",status:"scheduled",homeScore:null,awayScore:null},
    {id:"G1",group:"G",date:"2026-06-15",time:"21:00",home:"BEL",away:"EGY",stadium:"箭头体育场 (堪萨斯城)",stage:"小组赛",status:"finished",homeScore:1,awayScore:1},
    {id:"G2",group:"G",date:"2026-06-15",time:"20:00",home:"IRN",away:"NZL",stadium:"梅赛德斯-奔驰体育场 (亚特兰大)",stage:"小组赛",status:"finished",homeScore:2,awayScore:2},
    {id:"G3",group:"G",date:"2026-06-22",time:"12:00",home:"BEL",away:"IRN",stadium:"箭头体育场 (堪萨斯城)",stage:"小组赛",status:"scheduled",homeScore:null,awayScore:null},
    {id:"G4",group:"G",date:"2026-06-23",time:"12:00",home:"NZL",away:"EGY",stadium:"梅赛德斯-奔驰体育场 (亚特兰大)",stage:"小组赛",status:"scheduled",homeScore:null,awayScore:null},
    {id:"G5",group:"G",date:"2026-06-27",time:"21:00",home:"EGY",away:"IRN",stadium:"梅赛德斯-奔驰体育场 (亚特兰大)",stage:"小组赛",status:"scheduled",homeScore:null,awayScore:null},
    {id:"G6",group:"G",date:"2026-06-28",time:"20:00",home:"NZL",away:"BEL",stadium:"箭头体育场 (堪萨斯城)",stage:"小组赛",status:"scheduled",homeScore:null,awayScore:null},
    {id:"H1",group:"H",date:"2026-06-15",time:"15:00",home:"ESP",away:"CPV",stadium:"硬石体育场 (迈阿密)",stage:"小组赛",status:"finished",homeScore:0,awayScore:0},
    {id:"H2",group:"H",date:"2026-06-15",time:"18:00",home:"KSA",away:"URU",stadium:"梅赛德斯-奔驰体育场 (亚特兰大)",stage:"小组赛",status:"finished",homeScore:1,awayScore:1},
    {id:"H3",group:"H",date:"2026-06-22",time:"20:00",home:"ESP",away:"KSA",stadium:"硬石体育场 (迈阿密)",stage:"小组赛",status:"scheduled",homeScore:null,awayScore:null},
    {id:"H4",group:"H",date:"2026-06-23",time:"15:00",home:"URU",away:"CPV",stadium:"硬石体育场 (迈阿密)",stage:"小组赛",status:"scheduled",homeScore:null,awayScore:null},
    {id:"H5",group:"H",date:"2026-06-27",time:"20:00",home:"CPV",away:"KSA",stadium:"梅赛德斯-奔驰体育场 (亚特兰大)",stage:"小组赛",status:"scheduled",homeScore:null,awayScore:null},
    {id:"H6",group:"H",date:"2026-06-28",time:"18:00",home:"URU",away:"ESP",stadium:"梅赛德斯-奔驰体育场 (亚特兰大)",stage:"小组赛",status:"scheduled",homeScore:null,awayScore:null},
    {id:"I1",group:"I",date:"2026-06-16",time:"15:00",home:"FRA",away:"SEN",stadium:"大都会体育场 (纽约)",stage:"小组赛",status:"finished",homeScore:2,awayScore:0},
    {id:"I2",group:"I",date:"2026-06-16",time:"12:00",home:"IRQ",away:"NOR",stadium:"吉列体育场 (波士顿)",stage:"小组赛",status:"finished",homeScore:1,awayScore:1},
    {id:"I3",group:"I",date:"2026-06-23",time:"15:00",home:"FRA",away:"IRQ",stadium:"林肯金融体育场 (费城)",stage:"小组赛",status:"scheduled",homeScore:null,awayScore:null},
    {id:"I4",group:"I",date:"2026-06-24",time:"20:00",home:"NOR",away:"FRA",stadium:"吉列体育场 (波士顿)",stage:"小组赛",status:"scheduled",homeScore:null,awayScore:null},
    {id:"I5",group:"I",date:"2026-06-28",time:"18:00",home:"NOR",away:"SEN",stadium:"林肯金融体育场 (费城)",stage:"小组赛",status:"scheduled",homeScore:null,awayScore:null},
    {id:"I6",group:"I",date:"2026-06-29",time:"20:00",home:"SEN",away:"IRQ",stadium:"大都会体育场 (纽约)",stage:"小组赛",status:"scheduled",homeScore:null,awayScore:null},
    {id:"J1",group:"J",date:"2026-06-16",time:"15:00",home:"ARG",away:"ALG",stadium:"箭头体育场 (堪萨斯城)",stage:"小组赛",status:"finished",homeScore:3,awayScore:0},
    {id:"J2",group:"J",date:"2026-06-16",time:"12:00",home:"AUT",away:"JOR",stadium:"李维斯体育场 (旧金山)",stage:"小组赛",status:"finished",homeScore:1,awayScore:0},
    {id:"J3",group:"J",date:"2026-06-23",time:"18:00",home:"ARG",away:"AUT",stadium:"箭头体育场 (堪萨斯城)",stage:"小组赛",status:"scheduled",homeScore:null,awayScore:null},
    {id:"J4",group:"J",date:"2026-06-24",time:"12:00",home:"JOR",away:"ALG",stadium:"李维斯体育场 (旧金山)",stage:"小组赛",status:"scheduled",homeScore:null,awayScore:null},
    {id:"J5",group:"J",date:"2026-06-28",time:"18:00",home:"JOR",away:"ARG",stadium:"李维斯体育场 (旧金山)",stage:"小组赛",status:"scheduled",homeScore:null,awayScore:null},
    {id:"J6",group:"J",date:"2026-06-29",time:"18:00",home:"ALG",away:"AUT",stadium:"箭头体育场 (堪萨斯城)",stage:"小组赛",status:"scheduled",homeScore:null,awayScore:null},
    {id:"K1",group:"K",date:"2026-06-17",time:"21:00",home:"POR",away:"COD",stadium:"NRG体育场 (休斯顿)",stage:"小组赛",status:"live",homeScore:0,awayScore:0},
    {id:"K2",group:"K",date:"2026-06-17",time:"12:00",home:"UZB",away:"COL",stadium:"Estadio Azteca (墨西哥城)",stage:"小组赛",status:"live",homeScore:0,awayScore:0},
    {id:"K3",group:"K",date:"2026-06-24",time:"20:00",home:"COL",away:"COD",stadium:"NRG体育场 (休斯顿)",stage:"小组赛",status:"scheduled",homeScore:null,awayScore:null},
    {id:"K4",group:"K",date:"2026-06-25",time:"15:00",home:"COD",away:"UZB",stadium:"Estadio Azteca (墨西哥城)",stage:"小组赛",status:"scheduled",homeScore:null,awayScore:null},
    {id:"K5",group:"K",date:"2026-06-29",time:"12:00",home:"COL",away:"POR",stadium:"NRG体育场 (休斯顿)",stage:"小组赛",status:"scheduled",homeScore:null,awayScore:null},
    {id:"K6",group:"K",date:"2026-06-30",time:"20:00",home:"POR",away:"UZB",stadium:"Estadio Azteca (墨西哥城)",stage:"小组赛",status:"scheduled",homeScore:null,awayScore:null},
    {id:"L1",group:"L",date:"2026-06-17",time:"18:00",home:"ENG",away:"CRO",stadium:"AT&T体育场 (达拉斯)",stage:"小组赛",status:"live",homeScore:0,awayScore:0},
    {id:"L2",group:"L",date:"2026-06-17",time:"18:00",home:"GHA",away:"PAN",stadium:"BMO体育场 (多伦多)",stage:"小组赛",status:"live",homeScore:0,awayScore:0},
    {id:"L3",group:"L",date:"2026-06-24",time:"20:00",home:"ENG",away:"GHA",stadium:"AT&T体育场 (达拉斯)",stage:"小组赛",status:"scheduled",homeScore:null,awayScore:null},
    {id:"L4",group:"L",date:"2026-06-25",time:"12:00",home:"PAN",away:"CRO",stadium:"BMO体育场 (多伦多)",stage:"小组赛",status:"scheduled",homeScore:null,awayScore:null},
    {id:"L5",group:"L",date:"2026-06-29",time:"18:00",home:"PAN",away:"ENG",stadium:"AT&T体育场 (达拉斯)",stage:"小组赛",status:"scheduled",homeScore:null,awayScore:null},
    {id:"L6",group:"L",date:"2026-06-30",time:"20:00",home:"CRO",away:"GHA",stadium:"BMO体育场 (多伦多)",stage:"小组赛",status:"scheduled",homeScore:null,awayScore:null}
  ],
  news: [
    {id:"n1",title:"2026年世界杯开幕在即！美加墨三国的世纪盛会",summary:"第23届世界杯将由美国、加拿大和墨西哥联合主办，这是历史上首次由三个国家联合举办的世界杯赛事。",content:"2026年世界杯即将拉开帷幕，这是世界杯扩军至48支球队后的首届赛事。美国、加拿大和墨西哥三国联合主办，将在16个城市举办104场比赛。本届世界杯的口号是'We Are 2026'，吉祥物为'梦想之翼'。",image:null,date:"2026-06-10",category:"赛事综述"},
    {id:"n2",title:"阿根廷队公布正式名单，梅西第五次征战世界杯",summary:"阿根廷国家队公布了2026年世界杯的正式参赛名单，队长梅西将第五次代表阿根廷出战世界杯。",content:"斯卡洛尼公布了阿根廷队2026年世界杯的22人正式名单。39岁的梅西领衔，这是他第五次征战世界杯。迪马利亚、奥塔门迪等老将也悉数入选，劳塔罗、阿尔瓦雷斯等当打之年的球星构成了球队的中轴线。",image:null,date:"2026-06-08",category:"球队动态"},
    {id:"n3",title:"C罗入选葡萄牙大名单，41岁传奇再战世界杯",summary:"葡萄牙球星C罗入选2026年世界杯大名单，41岁的他将成为本届世界杯年龄最大的球员之一。",content:"葡萄牙主教练罗伯托·马丁内斯确认C罗将进入世界杯最终名单。尽管已41岁，C罗在沙特联赛依然保持着高效的进球率。葡萄牙队近年来人才辈出，B席、B费、莱奥、菲利克斯等球星正值巅峰。",image:null,date:"2026-06-07",category:"球队动态"},
    {id:"n4",title:"巴西队：内马尔伤愈回归，桑巴军团剑指第六星",summary:"内马尔在2025年重伤后成功康复，入选巴西世界杯名单，巴西队志在夺得创纪录的第六座世界杯冠军。",content:"在经历了2025年的一次严重膝盖伤病后，34岁的内马尔奇迹般地康复并入选了巴西队的世界杯名单。与维尼修斯、罗德里戈、恩德里克组成的攻击线让巴西队成为本届世界杯进攻火力最强的球队之一。",image:null,date:"2026-06-06",category:"球队动态"},
    {id:"n5",title:"世界杯场馆巡礼：16座顶级球场迎接盛事",summary:"美加墨三国共计16座球场将承办本届世界杯赛事。",content:"本届世界杯的16座举办球场分布在三个国家的16个城市。其中墨西哥城的阿兹特克体育场是历史上第一座举办过两届世界杯决赛的球场。美国的索菲体育场造价超50亿美元，是世界上最昂贵的体育场之一。",image:null,date:"2026-06-05",category:"场馆介绍"},
    {id:"n6",title:"2026世界杯全新赛制详解：48队如何决出冠军",summary:"48支球队分为12个小组，小组前两名和8个成绩最好的第三名晋级32强。",content:"2026年世界杯首次采用48队赛制：12个小组每组4队，小组赛共72场比赛。每组前两名（24队）加上8个成绩最好的小组第三晋级32强淘汰赛。整届赛事共需进行104场比赛。",image:null,date:"2026-06-04",category:"赛事规则"},
    {id:"n7",title:"德国队低调出征，纳格尔斯曼打造攻守平衡新阵容",summary:"德国队在新帅纳格尔斯曼的带领下完成新老交替，穆西亚拉和维尔茨成为新一代核心。",content:"经历了2018和2022两届世界杯的失利后，德国队在本届世界杯前完成了阵容更新。克罗斯和京多安仍坐镇中场，但穆西亚拉和维尔茨已成为进攻核心。",image:null,date:"2026-06-03",category:"球队动态"},
    {id:"n8",title:"姆巴佩：法国王朝的希望，金球先生带队卫冕",summary:"27岁的姆巴佩已是世界第一身价，作为法国队绝对核心，他的目标是带领法国队卫冕世界杯。",content:"在2022年决赛中上演帽子戏法的姆巴佩，如今已成为法国队的绝对核心。德尚的球队保留了大部分冠军班底，法国队被看做与巴西、阿根廷并列的三大夺冠热门。",image:null,date:"2026-06-02",category:"球星聚焦"},
    {id:"n9",title:"亚洲球队展望：日韩澳伊能否创造历史？",summary:"本届世界杯亚洲共有8支球队参赛，数量创历史新高。",content:"亚洲足球近年来进步显著。日本队在2022年击败德国和西班牙的壮举还历历在目。韩国队有金玟哉、李刚仁等球星坐镇。澳大利亚连续多届世界杯小组出线的经验也不容忽视。",image:null,date:"2026-06-01",category:"区域观察"},
    {id:"n10",title:"姆巴佩戴帽！法国友谊赛大胜荷兰",summary:"姆巴佩在法国队最后一场热身赛中上演帽子戏法，展现极佳状态。",content:"距离世界杯开幕仅剩三天，法国队在友谊赛中4-1大胜荷兰。姆巴佩独中三元，格列兹曼贡献一次助攻。德尚在赛后表示球队已做好卫冕的准备。",image:null,date:"2026-06-08",category:"球队动态"},
    {id:"n11",title:"巴西队抵达洛杉矶，万人接机场面壮观",summary:"巴西队已抵达美国洛杉矶，数千名球迷在机场迎接桑巴军团。",content:"巴西国家队乘坐包机抵达洛杉矶国际机场，超过3000名球迷在机场迎接。内马尔、维尼修斯等球星为球迷签名合影。",image:null,date:"2026-06-07",category:"赛事花絮"},
    {id:"n12",title:"世界杯裁判名单公布，中国裁判马宁入选",summary:"国际足联公布本届世界杯裁判名单，中国裁判马宁入选执法阵容。",content:"国际足联公布了2026年世界杯的裁判名单，共有来自45个国家的126名裁判入选。中国裁判马宁将再次执法世界杯。",image:null,date:"2026-06-06",category:"赛事规则"},
    {id:"n13",title:"东道主美国队公布首发预测，普利西奇领衔",summary:"美国队主帅贝尔哈特透露了揭幕战的战术安排，队长普利西奇将首发出战。",content:"东道主美国队将在6月11日的揭幕战中迎战智利队。主教练贝尔哈特表示全队已做好充分准备。22岁的巴萨边锋普利西奇将继续担任队长。",image:null,date:"2026-06-05",category:"球队动态"},
    {id:"n14",title:"世界杯球票销售火爆，决赛门票炒至天价",summary:"本届世界杯球票销售异常火爆，决赛门票在黑市上已被炒至原价的10倍以上。",content:"据FIFA官方数据，本届世界杯已售出超过350万张球票，创下历史新高。决赛门票在二手市场上价格已超过5000美元。",image:null,date:"2026-06-04",category:"赛事花絮"},
    {id:"n15",title:"英格兰队遭遇伤病打击，两员大将恐缺席首战",summary:"英格兰队两名关键球员在训练中受伤，可能缺席小组赛首战。",content:"英格兰国家队在训练中传出坏消息，后卫斯通斯和中场贝林厄姆轻微受伤。队医正在全力帮助他们恢复。凯恩在训练中状态火热。",image:null,date:"2026-06-03",category:"球队动态"},
    {id:"n16",title:"世界杯官方主题曲全球上线",summary:"2026年世界杯官方主题曲《We Are One》正式发布，上线24小时播放量突破1亿。",content:"由美国著名歌手和拉丁音乐人合作的主题曲《We Are One》在全球各大音乐平台上线。歌曲融合了美式流行和拉丁节奏。",image:null,date:"2026-06-02",category:"赛事花絮"},
    {id:"n17",title:"世界杯历史数据：巴西队22次参赛全勤",summary:"巴西队将连续第22次参加世界杯，是唯一全勤球队。",content:"巴西队是历史上唯一参加了全部22届世界杯的国家队，5次夺冠也是历史最多。阿根廷作为卫冕冠军，将力争成为2002年巴西之后首支卫冕成功的球队。",image:null,date:"2026-06-01",category:"历史回顾"}
  ],
};

function countryCodeToFlag(code) {
  if (code === "GB-ENG") return "🏴󠁧󠁢󠁥󠁮󠁧󠁿";
  if (code === "GB-WLS") return "🏴󠁧󠁢󠁷󠁬󠁳󠁿";
  const c = code.toUpperCase();
  if (c.length !== 2) return "🌍";
  const offset = 0x1f1e6 - "A".charCodeAt(0);
  return String.fromCodePoint(c.charCodeAt(0) + offset) + String.fromCodePoint(c.charCodeAt(1) + offset);
}
function getTeamCode(id) { return WorldCupData.teams[id].code; }
function getTeamName(id) { return WorldCupData.teams[id].name; }
function teamFlag(id) { return countryCodeToFlag(getTeamCode(id)); }
function fullTeam(id) { return teamFlag(id) + " " + getTeamName(id); }
function getSquad(id) { return WorldCupData.squads[id]; }
function getGroupData(gid) { return WorldCupData.groups.find(g => g.id === gid); }
function getTeamFromGroup(gid, idx) { return WorldCupData.groups.find(g => g.id === gid).teams[idx]; }
function getMatches(filter) { if (filter) return WorldCupData.matches.filter(filter); return WorldCupData.matches; }
function getNews() { return WorldCupData.news; }


// ============================================================
// DataManager - 数据持久化管理器
// 所有比赛比分修改自动保存到 localStorage
// ============================================================

// ============================================================
// DataManager - 数据持久化管理器
// 所有比分修改自动保存到浏览器 localStorage
// ============================================================
const DataManager = {
  init() {
    try {
      const saved = localStorage.getItem('wc2026_saved');
      if (saved) {
        const updates = JSON.parse(saved);
        let n = 0;
        updates.forEach(u => {
          const m = WorldCupData.matches.find(x => x.id === u.id);
          if (m) { m.status = u.status; m.homeScore = u.homeScore; m.awayScore = u.awayScore; n++; }
        });
        console.log('DataManager: 已加载 ' + n + ' 场更新');
        if (n > 0) App && App.updateHeaderCounts && App.updateHeaderCounts();
        this._lastSave = updates;
        return;
      }
    } catch(e) {}
    console.log('DataManager: 无保存数据，使用默认');
  },

  save() {
    const updates = WorldCupData.matches.map(m => ({
      id: m.id, status: m.status, homeScore: m.homeScore, awayScore: m.awayScore
    }));
    try { localStorage.setItem('wc2026_saved', JSON.stringify(updates));
    } catch(e) { console.warn('DataManager: 保存失败', e); }
  },

  updateMatch(id, status, homeScore, awayScore) {
    const m = WorldCupData.matches.find(x => x.id === id);
    if (!m) return false;
    m.status = status;
    m.homeScore = homeScore;
    m.awayScore = awayScore;
    this.save();
    return true;
  },

  updateScore(id, homeScore, awayScore) {
    return this.updateMatch(id, 'finished', homeScore, awayScore);
  },

  markLive(id, h, a) {
    return this.updateMatch(id, 'live', h || 0, a || 0);
  },

  reset() {
    localStorage.removeItem('wc2026_saved');
    // Reload default scores
    const oldMatches = JSON.parse(JSON.stringify(WorldCupData.matches));
    WorldCupData.matches.length = 0;
    // Restore by reloading page
    location.reload();
  },

  exportJSON() {
    return JSON.stringify(WorldCupData.matches.map(m => ({
      id: m.id, status: m.status, homeScore: m.homeScore, awayScore: m.awayScore
    })), null, 2);
  }
};

DataManager.init();
