const itinerary = [
  {
    label: "抵达",
    date: "9.30",
    weekday: "周三",
    title: "广州 → 成都",
    subtitle: "今晚的目标只有两个：顺利落地、把车况检查清楚。不要连夜进山。",
    distance: "机场转场",
    drive: "0.5–1.5h",
    sleep: "成都西 / 双流",
    mapDay: 0,
    navigation: "https://uri.amap.com/search?keyword=%E6%88%90%E9%83%BD%E5%8F%8C%E6%B5%81%E5%9B%BD%E9%99%85%E6%9C%BA%E5%9C%BA",
    schedule: [
      ["17:00", "广州白云机场集合", "优先选择 17:00–20:00 起飞、22:30 前落地的航班。五人提前分配行李额度，驾驶员不要在飞机上饮酒。"],
      ["21:30", "成都取车", "同机场取还。拍摄车身、轮毂、玻璃、油表和里程；核对第二驾驶员、保险、道路救援和防滑链规格。"],
      ["23:00", "入住成都西侧", "双流机场落地住双流/武侯西；天府机场落地可住机场附近，但次日要再早 40–60 分钟出发。"],
      ["23:30", "团队碰头 10 分钟", "确认次日 05:30 起床、司机轮换、导航收藏和应急联系人，不安排夜宵局。"]
    ],
    notes: [
      ["航班", "优先双流 CTU", "去川西方向更近；若天府 TFU 的航班价格或时间明显更好，也可接受。"],
      ["住宿", "停车方便优先", "不必住春熙路。选择可停车、早餐可打包、靠近成雅高速方向的酒店。"],
      ["底线", "禁止夜间进山", "即使航班提前，也不要赶去雅安或康定。第一晚睡够比省一小时更值。"]
    ]
  },
  {
    label: "D1",
    date: "10.1",
    weekday: "周四",
    title: "成都 → 康定",
    subtitle: "国庆最容易堵的一天，按“纯转场日”管理。抵达康定后只散步和吃饭。",
    distance: "约 300 km",
    drive: "6–9h",
    sleep: "康定 2,560m",
    mapDay: 1,
    navigation: "https://uri.amap.com/navigation?from=103.947,30.574&to=101.957,30.050&mode=car&policy=1",
    schedule: [
      ["05:30", "退房出发", "早餐提前打包。油箱加满，避开 08:00 后成都出城车流。"],
      ["08:00", "雅安服务区短休", "驾驶员轮换，停留控制在 20 分钟。不要在服务区排长队吃正餐。"],
      ["11:30", "泸定午餐 / 机动点", "若堵车严重，直接在高速服务区解决；若通畅，可在泸定下高速吃简餐并补油。"],
      ["15:00", "抵达康定办理入住", "最迟目标 18:00。下午只沿折多河慢走，不去木格措，不翻折多山追日落。"],
      ["18:00", "牦牛肉汤锅", "少油少辣、不要饮酒。饭后确认次日 S434 与 G318 路况。"]
    ],
    notes: [
      ["住宿", "康定新城优先", "停车和进出城更方便；老城氛围好，但国庆停车更困难。"],
      ["加油", "泸定或康定加满", "第二天走 S434 前保持满油，不在高海拔小站等低油量报警。"],
      ["备选", "堵到下午就删散步", "如果 18:00 后才到康定，直接吃饭休息，第二天仍按原计划出发。"]
    ]
  },
  {
    label: "D2",
    date: "10.2",
    weekday: "周五",
    title: "康定 → 新都桥",
    subtitle: "今天是贡嘎与雅拉的双雪山日：上午走 S434 等贡嘎开云，下午在塔公固定机位看雅拉。",
    distance: "约 145 km",
    drive: "4–6h",
    sleep: "新都桥 3,460m",
    mapDay: 2,
    navigation: "https://uri.amap.com/navigation?from=101.957,30.050&to=101.494,30.036&mode=car&policy=1",
    schedule: [
      ["07:00", "康定出发走 S434", "先看交警通告、低云和路面情况。结冰、浓雾或临时管制时改走 G318，不为贡嘎窗口强走景观线。"],
      ["08:20", "S434 / 红海子看贡嘎", "在红海子或机场路正规停车区等待 20–30 分钟。能见度差就离开，不在弯道、路肩或牧民通道临停。"],
      ["11:30", "塔公镇午餐", "先吃热食并检查全员状态。海拔反应明显者留在镇上休息，不参加草原长距离步行。"],
      ["13:00", "塔公看雅拉雪山", "塔公草原与木雅金塔二选一，停车稳定优先，停留 60–90 分钟。晴天这是当天核心，不再加墨石公园。"],
      ["15:30", "沿 G248 前往新都桥", "沿途只进正规观景区，不去鱼子西、八郎生都等非铺装支线；确保天黑前入住。"],
      ["16:30", "入住供氧条件较好的酒店", "检查所有人状态。晚餐后不洗长时间热水澡，不熬夜拍星空。"]
    ],
    notes: [
      ["看点", "贡嘎 + 雅拉", "一天只抓两个雪山窗口。10 月初日落参考约 19:00，具体以当天应用为准，不为日照金山安排夜间山路。"],
      ["住宿", "有电梯、有供暖", "供氧是加分项，不是继续上升的理由。房间不要离停车场太远。"],
      ["下撤", "不适就回康定", "多人持续头痛、恶心或失眠时，取消新都桥住宿，原路下撤康定。"]
    ]
  },
  {
    label: "D3",
    date: "10.3",
    weekday: "周六",
    title: "新都桥 → 丹巴",
    subtitle: "清晨在新都桥再等一次贡嘎，随后经八美和牦牛谷下撤丹巴；墨石只作为阴天替补。",
    distance: "约 210 km",
    drive: "5–7h",
    sleep: "丹巴 1,800m",
    mapDay: 3,
    navigation: "https://uri.amap.com/navigation?from=101.494,30.036&to=101.8905,30.8786&mode=car&policy=1",
    schedule: [
      ["06:40", "起床判断贡嘎窗口", "先从酒店院内观察云层；酒店看不到山时，再去瓦泽、G318 或 G248 沿线的正规观景点，不进村道追机位。"],
      ["07:10", "新都桥 / 瓦泽看贡嘎", "日出时间仅作参考。云层有变化可等到 07:40；云层厚且无变化，立即离开，把白天留给丹巴方向。"],
      ["08:00", "早餐后前往八美", "昨天已看过塔公与雅拉，今天不重复购票或长停。前一晚睡眠差者直接走主线下撤。"],
      ["10:00", "晴天直走，阴天才进墨石", "晴天不进入墨石公园；只有雪山完全被云遮、停车等待不超过 30 分钟、全员状态良好时才安排约 2 小时。"],
      ["12:30", "八美午餐并加油", "国庆餐厅出餐慢，优先面食或炒饭。保持至少半箱油，最晚 14:00 离开八美。"],
      ["17:00", "丹巴入住", "建议住县城或中路藏寨入口附近。晚餐后充分休息，低海拔夜晚用来恢复。"]
    ],
    notes: [
      ["取舍", "墨石是阴天替补", "晴天优先贡嘎并尽早下撤；阴天且车流可控才进墨石，停车排队超过 30 分钟直接跳过。"],
      ["住宿", "县城比山上稳定", "县城吃饭、停车和补给方便；想住藏寨要提前确认最后一段路和停车位。"],
      ["摄影", "日落留在住处", "不在不熟悉的村道追机位，藏寨晨景安排在次日。"]
    ]
  },
  {
    label: "D4",
    date: "10.4",
    weekday: "周日",
    title: "丹巴 → 四姑娘山",
    subtitle: "藏寨只做短停，下午提前抵达猫鼻梁，把四姑娘山完整轮廓作为当天核心。",
    distance: "约 125 km",
    drive: "3.5–5h",
    sleep: "四姑娘山镇 3,200m",
    mapDay: 4,
    navigation: "https://uri.amap.com/navigation?from=101.8905,30.8786&to=102.838,31.002&mode=car&policy=1",
    schedule: [
      ["07:30", "甲居或中路藏寨二选一", "只选一个正规开放区域，游览压缩到 1–1.5 小时。若停车排队，拍完主视角就走。"],
      ["10:00", "离开丹巴", "在县城补齐饮用水、零食和第二天早餐，确认双桥沟订单与身份证；10:30 是最晚离开时间。"],
      ["12:30", "小金县午餐", "以热食为主，控制在 45 分钟内。出发前再次看猫鼻梁方向云量和 G350 通行情况。"],
      ["16:30", "猫鼻梁看四姑娘山", "目标 16:30 前抵达正规停车区。停车已满或山体被云遮时直接回酒店，不在路边排队等待。"],
      ["17:20", "入住四姑娘山镇", "不进入长坪沟或海子沟。办理入住后休息，检查次日入园时间与天气。"],
      ["18:00", "提前晚餐", "准备次日分层穿衣、雨具、充电宝、身份证和热水，22:00 前休息。"]
    ],
    notes: [
      ["门票", "再次核对实名信息", "官方渠道为阿坝旅游网/小程序及景区公众号，勿依赖现场余票。"],
      ["住宿", "双桥沟口或镇上", "沟口第二天省时间；镇上餐饮更多。必须确认停车位、供暖和热水。"],
      ["备选", "藏寨为雪山让路", "晴天优先猫鼻梁；藏寨拥堵、出发延误或下午云量快速上升时，立即结束停留并前往四姑娘山镇。"]
    ]
  },
  {
    label: "D5",
    date: "10.5",
    weekday: "周一",
    title: "双桥沟完整一日",
    subtitle: "全程唯一不可替代的雪山主场。先到最高点，再按雪峰、公路、倒影三类画面向下游览。",
    distance: "景区内 40km+",
    drive: "观光车为主",
    sleep: "四姑娘山镇 3,200m",
    mapDay: 4,
    navigation: "https://uri.amap.com/search?keyword=%E5%9B%9B%E5%A7%91%E5%B1%B1%E5%8F%8C%E6%A1%A5%E6%B2%9F%E6%99%AF%E5%8C%BA",
    schedule: [
      ["06:30", "起床与早餐", "国庆入园时间可能提前到 07:30，以 9 月底官方通告为准。提前到入口排队。"],
      ["07:30", "刷身份证入园", "门票 ¥80 + 观光车 ¥70/人。先乘车到红杉林，不在前段站点急着下车。"],
      ["09:00", "红杉林：先看近距离雪峰", "高海拔慢走，先完成雪峰主画面。身体不适者不要硬走，直接乘观光车下行。"],
      ["10:30", "布达拉峰：拍雪山公路", "在观景区域完成公路与雪峰构图，严禁进入车道；人多时先观察车辆节奏再拍。"],
      ["12:00", "景区内简餐", "自带热水、巧克力和轻便午餐，垃圾全部带走。不要边走边大口进食。"],
      ["13:00", "四姑娜措：等雪峰倒影", "风小、湖面平静时优先拍倒影；云量增加或风大时不久等，继续向下。"],
      ["14:30", "隆珠措 / 撵鱼坝择一", "根据体力、光线和观光车队伍择一，不追求每站都下。排队变长时提前结束。"],
      ["16:30", "离开景区", "回酒店休息和整理行李。晚餐后确认次日卧龙、映秀和都江堰方向路况，不再安排夜景或酒局。"]
    ],
    notes: [
      ["游览", "红杉林 → 布达拉峰 → 四姑娜措", "依次完成近景雪峰、雪山公路和湖面倒影；隆珠措或撵鱼坝只按体力加一个。"],
      ["装备", "羽绒/抓绒 + 冲锋衣", "另带墨镜、防晒、帽子、手套、保温杯和小容量充电宝。"],
      ["下雨", "景区仍可玩但缩短", "连续雨雪或能见度差时减少下车站点，任何临时关闭以景区广播为准。"]
    ]
  },
  {
    label: "D6",
    date: "10.6",
    weekday: "周二",
    title: "四姑娘山 → 卧龙 → 映秀 → 都江堰",
    subtitle: "从高原回到低海拔，用熊猫、峡谷和地震遗址换换节奏，晚上在都江堰收尾。",
    distance: "约 175 km",
    drive: "4–6h",
    sleep: "都江堰约 700m",
    mapDay: 0,
    navigation: "https://uri.amap.com/navigation?from=102.838,31.002&to=103.647,30.989&mode=car&policy=1",
    schedule: [
      ["06:30", "退房前判断猫鼻梁窗口", "只有晴朗、停车容易且全员状态良好时，才用 15–20 分钟补拍四姑娘山晨景；07:10 必须离开。"],
      ["07:15", "沿 G350 下撤卧龙", "早餐提前打包。长下坡使用发动机制动，途中只在正规停车区轮换司机，不追路边临时机位。"],
      ["10:00", "卧龙中华大熊猫苑", "提前核验国庆开放、实名预约和停车规则，游览约 2 小时。若无票或排队过长，直接跳过，不购买非官方加价票。"],
      ["12:20", "卧龙 / 耿达午餐", "以热食为主并控制在 45 分钟。离开前再次检查都汶高速和映秀道路状态。"],
      ["14:00", "映秀地震遗址短停", "安排 45–60 分钟，以纪念和了解灾后重建为主，保持安静，不做娱乐化摆拍。"],
      ["16:30", "抵达都江堰并入住", "优先选择有停车位、次日去机场方便的酒店。到店后先加满油并整理行李。"],
      ["19:00", "南桥 / 灌县古城散步", "步行吃晚餐和看夜景，不再开车找机位。若白天堵车导致晚到，直接取消夜游并休息。"]
    ],
    notes: [
      ["取舍", "熊猫苑与映秀都可删", "二者是沿途体验，不是必须打卡。路况、预约和全员状态任何一项不合适，就优先回都江堰。"],
      ["恢复", "今晚回到低海拔", "从 3,200 米下降到约 700 米，有利于恢复睡眠，也把次日航班从山区道路风险中拆开。"],
      ["住宿", "都江堰城区停车优先", "不必追求景区正门。选择能停车、早餐方便、去双流或天府方向顺畅的酒店。"]
    ]
  },
  {
    label: "返程",
    date: "10.7",
    weekday: "周三",
    title: "都江堰 → 成都机场 → 广州",
    subtitle: "返程日按航班时间分流：晚班机可游都江堰水利工程，早班机则直接还车和值机。",
    distance: "至双流约 75 km / 天府约 130 km",
    drive: "正常 1.5–2.5h / 国庆按 3–4h",
    sleep: "回家",
    mapDay: 0,
    navigation: "https://uri.amap.com/navigation?from=103.647,30.989&to=103.947,30.574&mode=car&policy=1",
    schedule: [
      ["07:30", "按航班时间做最终分流", "双流 18:00 后或天府 20:00 后起飞，才考虑上午进入都江堰景区；航班更早则早餐后直接去机场。"],
      ["08:00", "都江堰水利工程可选半日", "只走离堆公园、宝瓶口、飞沙堰等核心区域，控制在 3 小时内。国庆排队明显时压缩路线。"],
      ["11:00", "离开景区并简餐", "最迟 11:30 发车。已经在 10 月 6 日看过南桥，不再绕灌县古城或熊猫谷。"],
      ["12:30", "前往机场还车", "按实际机场导航并预留国庆拥堵。途中不进入成都市区，不临时增加宽窄巷子、春熙路等项目。"],
      ["航班前 4h", "抵达租车门店", "在机场外围油站补满油，预留 45–60 分钟验车和接驳。双流与天府不能临时混还。"],
      ["航班前 3h", "进入航站楼", "国庆返程高峰按 3 小时值机安检余量。未使用氧气瓶按当地和机场规定处理，不得带上飞机。"],
      ["抵达后", "费用结算", "保存租车验车单和加油票，待违章查询窗口结束后再退团队机动金。"]
    ],
    notes: [
      ["航班", "双流 18:00 后 / 天府 20:00 后更合适", "这个时间允许上午游都江堰；若航班较早，直接删除景区，不影响主行程。"],
      ["行李", "高原氧气不能乘机", "未使用的氧气瓶按机场与当地规定处置，不放进托运行李。"],
      ["优势", "航班不再绑定山区道路", "10 月 6 日已经完成下撤，即使 10 月 7 日都江堰景区拥堵，也可以直接去机场。"]
    ]
  }
];

const planOptions = [
  {
    id: "balanced",
    tab: "A · 传统逆时针",
    badge: "当前推荐",
    title: "传统小环线骨架，景观最完整、方向最顺",
    summary: "成都经都江堰方向进入四姑娘山，再走丹巴、八美、墨石、塔公、新都桥、康定和雅安。雪山、藏寨、草原、石林与城市都有。",
    stats: [["方向", "逆时针"], ["雪山窗口", "4–5 次"], ["体验类型", "最均衡"], ["航班风险", "低"]],
    timeline: [
      ["9.30", "成都", "落地取车"], ["10.1", "四姑娘山", "卧龙方向进山"], ["10.2", "四姑娘山", "双桥沟"], ["10.3", "丹巴", "小金 / 藏寨"],
      ["10.4", "塔公", "八美 / 墨石"], ["10.5", "新都桥", "姑弄村 / 草原"], ["10.6", "雅安", "红海子 / 康定"], ["10.7", "广州", "成都机场返航"]
    ],
    verdict: "最适合第一次走川西小环线。缺点是 10 月 1 日直接升到四姑娘山镇约 3,200 米，需要全员慢走并严格观察高反。"
  },
  {
    id: "clockwise",
    tab: "B · 顺时针渐进",
    badge: "高反友好",
    title: "先住康定，再逐步进入新都桥和四姑娘山",
    summary: "从康定、S434、塔公和新都桥进入环线，随后经八美、丹巴到四姑娘山，最后从卧龙、映秀方向下撤都江堰。",
    stats: [["方向", "顺时针"], ["首晚海拔", "2,560m"], ["体验类型", "稳健"], ["回头路", "约 70 km"]],
    timeline: [
      ["9.30", "成都", "落地取车"], ["10.1", "康定", "低一级适应"], ["10.2", "新都桥", "S434 / 塔公"], ["10.3", "丹巴", "八美 / 墨石"],
      ["10.4", "四姑娘山", "藏寨 / 小金"], ["10.5", "四姑娘山", "双桥沟"], ["10.6", "都江堰", "卧龙 / 映秀"], ["10.7", "广州", "都江堰 / 返航"]
    ],
    verdict: "海拔适应更温和，但塔公—新都桥路段会有少量折返。适合更担心高反、可以接受少走一点经典顺序的人。"
  },
  {
    id: "snow",
    tab: "C · 雪山加量",
    badge: "高强度备选",
    title: "增加长坪沟，把 10 月 7 日变成山区直奔机场",
    summary: "在顺时针线路上增加四姑娘山第 3 天，用长坪沟获得第 6 次雪山窗口，但连续高海拔住宿和返航压力明显增加。",
    stats: [["方向", "顺时针"], ["雪山窗口", "6 次"], ["连续高海拔", "3 晚"], ["航班风险", "中高"]],
    timeline: [
      ["9.30", "成都", "落地取车"], ["10.1", "康定", "低一级适应"], ["10.2", "新都桥", "S434 / 塔公"], ["10.3", "丹巴", "八美 / 墨石"],
      ["10.4", "四姑娘山", "藏寨 / 小金"], ["10.5", "四姑娘山", "双桥沟"], ["10.6", "四姑娘山", "长坪沟"], ["10.7", "广州", "凌晨出山返航"]
    ],
    verdict: "只适合双流 20:00 后或天府 21:30 后航班，并且两位司机都有连续山路经验。默认不执行。"
  }
];

const roadSegments = [
  ["9.30", "机场 → 成都西 / 双流", "25–70 km", "城市快速路，500m", "机场加满油、酒店停车场", "晚航班、门店关门", "落地晚于 22:30 就在机场店附近住，不横穿市区"],
  ["10.1", "成都西 → 雅安", "约 140 km", "成雅高速，缓慢爬升", "蒲江 / 名山服务区", "出城拥堵、服务区排队", "05:30 前出发，早餐打包，服务区只停 20 分钟"],
  ["10.1", "雅安 → 泸定", "约 110 km", "雅康高速，长隧道群", "天全服务区、泸定出口", "隧道限速、事故拥堵", "保持车距，不在隧道内变道抢行"],
  ["10.1", "泸定 → 康定", "约 50 km", "G318 / 高速末段，升至 2,560m", "泸定午餐、康定正规油站", "进城车流、海拔上升", "16:00 仍在雅安则删掉泸定停留"],
  ["10.2", "康定 → 红海子", "约 40 km", "S434 盘山，最高约 4,200m", "正规观景停车区", "暗冰、浓雾、临停车辆", "雨雪或管制直接取消全部拍照点"],
  ["10.2", "红海子 → 塔公", "约 65 km", "高原铺装路，海拔 3,700m 左右", "塔公镇厕所、午餐、加油", "横风、牦牛、疲劳", "不鸣笛驱赶牲畜，不在弯道停车"],
  ["10.2", "塔公 → 新都桥", "约 35 km", "G248 / G318，下降至 3,460m", "新都桥大型加油站", "傍晚逆光、车流汇合", "17:30 前入住，不追鱼子西日落"],
  ["10.3", "新都桥 → 塔公", "约 35 km", "原路返回，铺装路", "塔公镇补给", "重复路段拖延时间", "昨天已游塔公，今天不再停超过 20 分钟"],
  ["10.3", "塔公 → 八美 / 墨石", "约 30 km", "G248 草原路，约 3,500m", "墨石停车场、八美镇", "景区排队、午前车流", "停车等待超过 30 分钟就放弃入园"],
  ["10.3", "八美 → 丹巴", "约 115 km", "G350 河谷长下坡", "牦牛谷停车区、丹巴油站", "落石、连续弯道、大车", "使用发动机制动，不长时间踩刹车"],
  ["10.4", "丹巴 → 小金", "约 60 km", "G350 河谷道路", "丹巴县城补给、小金午餐", "村镇行人、临时施工", "离开丹巴前补齐两天公共物资"],
  ["10.4", "小金 → 四姑娘山镇", "约 55 km", "G350 持续爬升至 3,200m", "沃日官寨、猫鼻梁正规停车区", "下午云雾、景区车流", "15:30 后不再增加沿途景点"],
  ["10.6", "四姑娘山 → 卧龙 / 映秀", "约 145 km", "G350 / 巴朗山方向，长下坡", "卧龙、耿达、映秀服务点", "返程拥堵、刹车热衰减、景区排队", "07:15 出发，熊猫苑和映秀均可删，不跟随导航抄小路"],
  ["10.6", "映秀 → 都江堰", "约 35 km", "都汶高速 / 城市道路", "映秀、都江堰城区油站", "高速回堵、古城停车困难", "先入住停车，再步行去南桥"],
  ["10.7", "都江堰 → 双流 / 天府机场", "约 75 / 130 km", "高速 + 城市快速路", "机场外围正规油站", "返程车流、还车排队、跨机场时间差", "航班前 4 小时到还车门店，早班机删除都江堰景区"]
];

const stays = [
  { date: "9.30", city: "成都西 / 双流", alt: "约 500m", target: "¥450–750 / 间", rooms: "2 间，停车优先", area: "双流机场、武侯西或成雅高速入口方向", must: "24 小时前台、免费停车、早餐可打包", avoid: "春熙路核心区、无停车老楼", link: "https://uri.amap.com/search?keyword=%E6%88%90%E9%83%BD%E5%8F%8C%E6%B5%81%E6%9C%BA%E5%9C%BA%E9%85%92%E5%BA%97" },
  { date: "10.1", city: "康定", alt: "约 2,560m", target: "¥600–1,000 / 间", rooms: "2 间，可免费取消", area: "康定新城、榆林新区或有独立停车场的老城边缘", must: "供暖、热水稳定、停车位、低楼层/电梯", avoid: "步梯高楼、酒吧楼上、只能路边停车", link: "https://uri.amap.com/search?keyword=%E5%BA%B7%E5%AE%9A%E6%96%B0%E5%9F%8E%E9%85%92%E5%BA%97" },
  { date: "10.2", city: "新都桥", alt: "约 3,460m", target: "¥650–1,100 / 间", rooms: "2 间，供暖优先", area: "镇中心或 G318 主路旁，步行可吃饭", must: "弥散供氧可选、地暖、正规停车场", avoid: "偏远山坡网红民宿、最后一段土路", link: "https://uri.amap.com/search?keyword=%E6%96%B0%E9%83%BD%E6%A1%A5%E9%95%87%E4%BE%9B%E6%B0%A7%E9%85%92%E5%BA%97" },
  { date: "10.3", city: "丹巴", alt: "约 1,800m", target: "¥450–750 / 间", rooms: "2 间，恢复睡眠", area: "丹巴县城优先；想看晨景可住中路入口", must: "安静、停车、附近有早餐和药店", avoid: "狭窄藏寨深处、需要夜开村道", link: "https://uri.amap.com/search?keyword=%E4%B8%B9%E5%B7%B4%E5%8E%BF%E5%81%9C%E8%BD%A6%E9%85%92%E5%BA%97" },
  { date: "10.4", city: "四姑娘山镇", alt: "约 3,200m", target: "¥800–1,400 / 间", rooms: "连住 2 晚", area: "双桥沟口节省排队时间；镇中心餐饮更方便", must: "连续两晚同房、供暖、停车、可早起退房", avoid: "每天换酒店、无供暖低价房", link: "https://uri.amap.com/search?keyword=%E5%9B%9B%E5%A7%91%E5%A8%98%E5%B1%B1%E5%8F%8C%E6%A1%A5%E6%B2%9F%E9%85%92%E5%BA%97" },
  { date: "10.5", city: "四姑娘山镇", alt: "约 3,200m", target: "沿用前一晚", rooms: "不换房", area: "双桥沟游玩后直接回原酒店", must: "可寄存行李、可提供早餐/热水", avoid: "为省几十元临时换房", link: "https://uri.amap.com/search?keyword=%E5%9B%9B%E5%A7%91%E5%A8%98%E5%B1%B1%E9%95%87" },
  { date: "10.6", city: "都江堰", alt: "约 700m", target: "¥500–900 / 间", rooms: "2 间，停车优先", area: "灌县古城外围或去高速方便的城区", must: "独立停车位、早餐方便、次日可快速上高速", avoid: "南桥核心步行区内无停车民宿", link: "https://uri.amap.com/search?keyword=%E9%83%BD%E6%B1%9F%E5%A0%B0%E5%81%9C%E8%BD%A6%E9%85%92%E5%BA%97" }
];

const balancedItinerary = [
  itinerary[0],
  {
    label: "D1", date: "10.1", weekday: "周四", title: "成都 → 四姑娘山", subtitle: "传统逆时针第一天直接进四姑娘山，重点是早出发、慢升海拔，不在都江堰和卧龙增加长停。", distance: "约 220 km", drive: "6–9h", sleep: "四姑娘山镇 3,200m", mapDay: 4,
    navigation: "https://uri.amap.com/navigation?from=103.947,30.574&to=102.838,31.002&mode=car&policy=1",
    schedule: [
      ["05:30", "成都西侧出发", "早餐打包、油箱加满，避开国庆都江堰方向车流。天府机场附近住宿需再提前约 40 分钟。"],
      ["08:00", "映秀 / 耿达短休", "只停车 15–20 分钟轮换司机，不进入景区。导航若已严重拥堵，午餐改在卧龙解决。"],
      ["11:30", "卧龙或巴朗山沿线午餐", "控制在 45 分钟，开始明显升高后减少剧烈活动。任何人持续头痛或恶心，立即评估是否留宿卧龙。"],
      ["15:30", "抵达四姑娘山镇", "办理入住后只休息和取票，不进入长坪沟、海子沟。目标最迟 18:00 到店。"],
      ["16:40", "猫鼻梁奖励窗口", "仅在道路通畅、天气晴朗、停车位明确时短停 20 分钟；否则直接回酒店。"],
      ["18:00", "早晚餐与适应", "少油少辣、不饮酒，22:00 前休息。确认双桥沟实名预约和次日入园时间。"]
    ],
    notes: [["高反", "首晚直接到 3,200 米", "这是传统逆时针的主要代价。首晚不洗长时间热水澡，不靠吸氧掩盖持续加重症状。"], ["取舍", "映秀和卧龙不游览", "第一天的白天余量全部留给国庆拥堵和海拔适应。"], ["住宿", "双桥沟口或镇中心", "必须有供暖、停车位和稳定热水，步梯高楼直接排除。"]]
  },
  {
    label: "D2", date: "10.2", weekday: "周五", title: "双桥沟完整一日", subtitle: "用观光车降低体力消耗，完成雪峰、公路和倒影三类画面。", distance: "景区内 40km+", drive: "观光车为主", sleep: "四姑娘山镇 3,200m", mapDay: 4,
    navigation: "https://uri.amap.com/search?keyword=%E5%9B%9B%E5%A7%91%E5%B1%B1%E5%8F%8C%E6%A1%A5%E6%B2%9F%E6%99%AF%E5%8C%BA",
    schedule: itinerary[5].schedule,
    notes: itinerary[5].notes
  },
  {
    label: "D3", date: "10.3", weekday: "周六", title: "四姑娘山 → 小金 → 丹巴藏寨", subtitle: "从雪山下撤到嘉绒藏寨，下午只选甲居或中路一个区域。", distance: "约 125 km", drive: "4–6h", sleep: "丹巴 1,800m", mapDay: 3,
    navigation: "https://uri.amap.com/navigation?from=102.838,31.002&to=101.8905,30.8786&mode=car&policy=1",
    schedule: [
      ["07:30", "四姑娘山镇出发", "早餐后沿 G350 前往小金，连续下坡保持车距，不为补拍猫鼻梁折返。"],
      ["09:30", "小金县补给", "加油、采购饮用水和简餐，停留控制在 30–45 分钟。"],
      ["12:30", "丹巴县城午餐并入住", "优先先放行李再进入藏寨，避免车内长期放贵重物品。"],
      ["14:30", "甲居或中路藏寨二选一", "只走一个正规开放区域，完成观景台、碉楼和村落层次即可。"],
      ["17:30", "返回住宿", "不在狭窄村道追日落。今晚低海拔恢复睡眠，为次日八美方向长路做准备。"]
    ],
    notes: [["选择", "甲居成熟 / 中路生活感", "甲居设施和主视角稳定；中路游客相对少，但停车与村道要提前问住宿方。"], ["节奏", "藏寨不超过 2.5 小时", "次日还有墨石和塔公，今天不要在民宿写真上消耗半天。"], ["住宿", "丹巴县城最稳定", "吃饭、加油和药店齐全；住藏寨必须确认停车和次日出村时间。"]]
  },
  {
    label: "D4", date: "10.4", weekday: "周日", title: "丹巴 → 八美 → 墨石公园 → 塔公", subtitle: "从河谷回到高原，把墨石地貌和塔公草原放在同一天，晴天优先保证雅拉窗口。", distance: "约 150 km", drive: "5–7h", sleep: "塔公 / 八美 3,500m+", mapDay: 3,
    navigation: "https://uri.amap.com/navigation?from=101.8905,30.8786&to=101.524,30.318&mode=car&policy=1",
    schedule: [
      ["07:00", "丹巴出发走 G350", "离开前加满油。牦牛谷只在正规停车区短停，不频繁急刹找机位。"],
      ["10:30", "八美午餐 / 墨石排队判断", "停车等待超过 30 分钟、景区人流明显失控或雅拉方向天气转好时，直接放弃墨石。"],
      ["11:30", "墨石公园", "控制在 2–2.5 小时，以观光车和核心石林为主，不走完整边缘路线。"],
      ["15:00", "前往塔公草原或木雅金塔", "二选一看雅拉雪山。晴天这是当天第一优先级，墨石可以删，雅拉窗口不删。"],
      ["17:30", "入住塔公或八美", "不临时上八郎生都，不在日落后走陌生支线。晚餐后确认姑弄村道路与停车。"]
    ],
    notes: [["晴天", "雅拉优先于墨石", "墨石阴天也有质感，雅拉雪山则依赖能见度。"], ["住宿", "塔公看山更方便", "担心高反可退住八美，第二天再去塔公；全员状态决定。"], ["道路", "只走铺装主路", "不因短视频机位进入未确认牧道或非铺装岔路。"]]
  },
  {
    label: "D5", date: "10.5", weekday: "周一", title: "塔公 / 姑弄村 → 新都桥", subtitle: "上午看雅拉与草原人文，下午进入新都桥；鱼子西只作为天气、道路和预约都合适时的可删项。", distance: "约 65–110 km", drive: "2–4h", sleep: "新都桥 3,460m", mapDay: 2,
    navigation: "https://uri.amap.com/navigation?from=101.524,30.318&to=101.494,30.036&mode=car&policy=1",
    schedule: [
      ["07:00", "塔公 / 姑弄村雅拉窗口", "优先使用正规停车区或住宿附近视野，不把车辆开进牧民草场。云层厚时 08:00 前离开。"],
      ["09:30", "塔公寺或木雅金塔补充人文", "昨天已经完成的点不重复购票，控制在 45 分钟。"],
      ["11:30", "前往新都桥并午餐", "下午拍河谷、杨林和藏式民居，停车必须完全离开行车道。"],
      ["15:30", "鱼子西执行判断", "仅官方确认开放、道路干燥、往返时间可控且全员无明显高反时考虑；任一条件不满足就留在新都桥。"],
      ["18:00", "入住新都桥", "鱼子西即使执行也必须在天黑前回到主路。晚餐后确认次日 S434 / G318 路况。"]
    ],
    notes: [["鱼子西", "默认不去", "国庆支线车流、海拔和日落后返程叠加，不能因为网络热度把它当必去点。"], ["摄影", "姑弄村 + 新都桥已足够", "雅拉、草原、民居和河谷画面已经完整，不需要每个网红机位都复制。"], ["住宿", "供暖和停车优先", "选择主路旁正规酒店，不住最后一段需要走土路的山坡民宿。"]]
  },
  {
    label: "D6", date: "10.6", weekday: "周二", title: "新都桥 → 红海子 / 康定 → 泸定 → 雅安", subtitle: "完成最后一次高原窗口后持续下撤，木格措只作为替换方案，不能和红海子、雅安全部叠加。", distance: "约 300 km", drive: "7–10h", sleep: "雅安约 600m", mapDay: 1,
    navigation: "https://uri.amap.com/navigation?from=101.494,30.036&to=103.013,29.980&mode=car&policy=1",
    schedule: [
      ["06:40", "新都桥贡嘎窗口", "在酒店院内或主路正规观景点等待至 07:30，云层稳定无变化就离开。"],
      ["08:00", "按路况选择 S434 或 G318", "道路干燥、官方允许时走 S434 并短停红海子；雨雪、浓雾或管制时直接走 G318。"],
      ["11:30", "康定午餐", "木格措需要完整半天，只能在取消红海子并改住康定或泸定时替换，默认不进入。"],
      ["14:00", "康定继续下撤泸定", "不在折多山和城区追加景点。泸定桥只有停车方便且总进度正常时短停。"],
      ["18:30", "抵达雅安", "目标最迟 20:00 入住。完成加油、还车资料整理和次日机场路线确认。"]
    ],
    notes: [["取舍", "红海子与木格措不叠加", "前者是短停景观线，后者是完整景区，两者同时安排会导致夜间赶往雅安。"], ["住宿", "雅安换航班安全", "10 月 7 日只剩高速和机场还车，不再承担高原道路风险。"], ["泸定", "只作为机动停靠", "堵车或停车困难时直接通过，不为单个景点破坏雅安住宿。"]]
  },
  {
    label: "返程", date: "10.7", weekday: "周三", title: "雅安 → 成都机场 → 广州", subtitle: "只做高速转场、加油、还车和值机；航班越晚越从容。", distance: "至双流约 140 km / 天府约 180 km", drive: "正常 2–3h / 国庆按 4–5h", sleep: "回家", mapDay: 0,
    navigation: "https://uri.amap.com/navigation?from=103.013,29.980&to=103.947,30.574&mode=car&policy=1",
    schedule: [
      ["07:30", "早餐后检查高速状态", "根据航班倒推离店时间，双流和天府分别计算，不使用同一套时间。"],
      ["航班前 6h", "雅安出发", "国庆返程按 4–5 小时道路余量准备，中途只在服务区短休。"],
      ["航班前 4h", "机场外围加油并还车", "五人分工检查行李、证件、充电宝、车损记录和租车合同。"],
      ["航班前 3h", "进入航站楼", "完成值机与托运，未使用氧气瓶不得携带上飞机。"],
      ["抵达后", "团队结算", "保留租车验车单，待违章查询期结束后再退团队机动金。"]
    ],
    notes: [["航班", "建议双流 17:00 后 / 天府 18:30 后", "留出雅安高速拥堵、还车和安检余量。"], ["景点", "当天不进成都游览", "宽窄巷子、春熙路和熊猫基地都不应放在返程日。"], ["安全", "高速也要轮换司机", "山区行程结束不代表疲劳消失，主副驾驶仍按两小时轮换。"]]
  }
];

const balancedRoadSegments = [
  ["10.1", "成都 → 映秀 / 卧龙", "约 130 km", "高速转 G350，缓慢升高", "都江堰服务区、映秀", "出城拥堵、事故分流", "05:30 出发，沿官方主路，不抄村道"],
  ["10.1", "卧龙 → 四姑娘山镇", "约 90 km", "山路升至 3,200m", "卧龙、巴朗山正规停车区", "高反、落石、雾", "多人不适时留宿卧龙，不强行上升"],
  ["10.3", "四姑娘山 → 丹巴", "约 125 km", "G350 河谷下坡", "小金县、丹巴油站", "连续弯道、村镇行人", "使用发动机制动，藏寨只选一个"],
  ["10.4", "丹巴 → 八美 / 塔公", "约 150 km", "G350 高原河谷", "牦牛谷、八美镇", "落石、景区车流", "墨石排队超 30 分钟直接跳过"],
  ["10.5", "塔公 → 新都桥", "约 65 km", "G248 / G318", "塔公镇、新都桥油站", "牛群、临停车", "姑弄村和鱼子西只走确认开放道路"],
  ["10.6", "新都桥 → 康定", "约 80–120 km", "S434 或 G318", "红海子正规停车区", "暗冰、浓雾、管制", "道路异常立即切 G318，木格措不叠加"],
  ["10.6", "康定 → 雅安", "约 200 km", "雅康高速长隧道群", "泸定、天全服务区", "返程拥堵、疲劳", "目标 20:00 前到雅安"],
  ["10.7", "雅安 → 成都机场", "约 140–180 km", "成雅高速 + 城市快速路", "蒲江服务区、机场油站", "返程车流、还车排队", "航班前 4 小时到门店"]
];

const balancedStays = [
  stays[0],
  { ...stays[4], date: "10.1", rooms: "连住 2 晚" },
  { ...stays[5], date: "10.2" },
  { ...stays[3], date: "10.3" },
  { date: "10.4", city: "塔公 / 八美", alt: "约 3,500–3,730m", target: "¥600–1,000 / 间", rooms: "2 间，可免费取消", area: "塔公镇看雅拉方便；担心高反可住八美", must: "供暖、停车、热水、可提供早餐", avoid: "草原深处无铺装路民宿", link: "https://uri.amap.com/search?keyword=%E5%A1%94%E5%85%AC%E9%95%87%E5%81%9C%E8%BD%A6%E9%85%92%E5%BA%97" },
  { ...stays[2], date: "10.5" },
  { date: "10.6", city: "雅安", alt: "约 600m", target: "¥400–700 / 间", rooms: "2 间，机场转场优先", area: "成雅高速入口附近或停车方便城区", must: "停车、早餐、可早退房", avoid: "古城步行区内无停车酒店", link: "https://uri.amap.com/search?keyword=%E9%9B%85%E5%AE%89%E9%AB%98%E9%80%9F%E5%85%A5%E5%8F%A3%E9%85%92%E5%BA%97" }
];

const snowItinerary = [
  ...itinerary.slice(0, 6),
  {
    label: "D6", date: "10.6", weekday: "周二", title: "长坪沟轻徒步 + 四姑娘山补拍", subtitle: "增加第六次雪山窗口，但必须早收队、早睡觉，为次日凌晨出山保存体力。", distance: "徒步 6–12 km", drive: "观光车 + 徒步", sleep: "四姑娘山镇 3,200m", mapDay: 4,
    navigation: "https://uri.amap.com/search?keyword=%E5%9B%9B%E5%A7%91%E5%B1%B1%E9%95%BF%E5%9D%AA%E6%B2%9F%E6%99%AF%E5%8C%BA",
    schedule: [["06:40", "确认天气和次日道路", "雨雪、结冰或明确管制时取消长坪沟，直接下撤都江堰。"], ["07:30", "长坪沟入园", "乘观光车后步行，只走枯树滩、下干海子一带轻量路线。"], ["10:30", "森林与雪峰窗口", "每 40–50 分钟统一休息，不允许成员单独冲前。"], ["12:00", "自带简餐", "快速补充热量，任何明显高反都立即返程。"], ["14:00", "硬性折返点", "无论走到哪里都返回，15:30 前离园。"], ["16:00", "加油、装车和早餐采购", "提前结清房费，确认车辆凌晨可出库。"], ["18:00", "晚餐并于 20:30 前休息", "两位司机都必须保证睡眠，不安排夜景和饮酒。"]],
    notes: [["航班", "双流 20:00 后 / 天府 21:30 后", "早于红线不要选择本线路。"], ["体力", "不以木骡子为目标", "连续高海拔第 3 天只走轻量版。"], ["退路", "天气异常当天就下撤", "不要把道路风险留到航班日。"]]
  },
  {
    label: "返程", date: "10.7", weekday: "周三", title: "四姑娘山 → 成都机场 → 广州", subtitle: "凌晨出山，只返程、加油、还车和值机。", distance: "约 220–285 km", drive: "国庆按 8–10h", sleep: "回家", mapDay: 0,
    navigation: "https://uri.amap.com/navigation?from=102.838,31.002&to=103.947,30.574&mode=car&policy=1",
    schedule: [["04:20", "起床检查驾驶员状态", "两位司机任一疲劳都要调整分工，两人都不合格时不能硬开。"], ["04:50", "四姑娘山镇出发", "早餐装车，不等猫鼻梁日出。"], ["07:00", "卧龙 / 耿达轮换司机", "停车 15 分钟并检查轮胎、刹车气味。"], ["09:30", "映秀进度检查", "仍未到映秀时立即重算机场时间并通知租车门店。"], ["航班前 4h", "机场外围加油还车", "预留 45–60 分钟验车和接驳。"], ["航班前 3h", "进入航站楼", "完成值机、托运和安检。"]],
    notes: [["风险", "航班与山区道路绑定", "这是本线路不作为默认推荐的核心原因。"], ["机场", "双流比天府更适合", "天府多约 70 公里城市转场。"], ["止损", "10.6 可提前下撤", "天气或路况不理想就改住都江堰。"]]
  }
];

const snowRoadSegments = [
  ...roadSegments.filter(row => row[0] !== "10.6" && row[0] !== "10.7"),
  ["10.7", "四姑娘山 → 映秀", "约 145 km", "G350 长下坡", "卧龙、耿达", "凌晨山路、刹车热衰减", "04:50 出发，每 90 分钟检查车辆"],
  ["10.7", "映秀 → 双流 / 天府机场", "约 95 / 165 km", "高速 + 城市快速路", "机场外围油站", "高速回堵、还车排队", "航班前 4 小时到门店"]
];

const snowStays = [
  ...stays.slice(0, 6),
  { ...stays[4], date: "10.6", target: "沿用前两晚", rooms: "第 3 晚，不换房", must: "提前结账、早餐打包、车辆凌晨可出库" }
];

const routeData = {
  balanced: { itinerary: balancedItinerary, roadSegments: balancedRoadSegments, stays: balancedStays, summary: "传统逆时针均衡线：成都—四姑娘山—丹巴—八美/墨石—塔公/姑弄村—新都桥—红海子/康定—雅安—成都机场。" },
  clockwise: { itinerary, roadSegments, stays, summary: "顺时针渐进海拔线：成都—康定—S434/塔公—新都桥—丹巴—四姑娘山—卧龙/映秀—都江堰—成都机场。" },
  snow: { itinerary: snowItinerary, roadSegments: snowRoadSegments, stays: snowStays, summary: "雪山加量线：顺时针主线基础上增加长坪沟，10 月 7 日凌晨从四姑娘山直奔成都机场。" }
};

const spots = [
  { name: "康定折多河老城", region: "康定", level: "core", tag: "核心", time: "1–2h", cost: "免费", altitude: "2,560m", rule: "D1 到得早才散步，晚到直接休息", note: "第一晚适应海拔，餐饮和补给最完整。" },
  { name: "S434 红海子", region: "康定—塔公", level: "core", tag: "核心", time: "20–30min", cost: "可能有清洁费", altitude: "约 4,000m", rule: "只在正规停车区，雨雪立即取消", note: "高山湖泊与雪山公路场景，停留必须短。" },
  { name: "塔公草原 / 塔公寺", region: "塔公", level: "core", tag: "核心", time: "1.5–2h", cost: "寺院票价现场核验", altitude: "约 3,730m", rule: "草原和寺院择一深度游", note: "雅拉雪山、人文和草原在同一停留点完成。" },
  { name: "甲居或中路藏寨", region: "丹巴", level: "core", tag: "核心", time: "1–1.5h", cost: "甲居约 ¥50", altitude: "约 2,000m", rule: "两者只选一个，10:00 左右离开", note: "作为丹巴短停保留；晴天不延长写真和排队时间，下午优先猫鼻梁。" },
  { name: "四姑娘山双桥沟", region: "四姑娘山", level: "core", tag: "核心", time: "7–8h", cost: "¥150 / 人", altitude: "3,200–3,800m", rule: "提前 14 天实名预约", note: "首个四姑娘山完整景区日，以观光车串联雪峰、公路和湖泊。" },
  { name: "泸定桥 / 泸定县城", region: "泸定", level: "along", tag: "顺路", time: "30–60min", cost: "现场核验", altitude: "约 1,330m", rule: "D1 通畅且停车容易才去", note: "适合午餐和低海拔休息，不值得为排队拖延。" },
  { name: "康定机场路观景段", region: "S434", level: "along", tag: "顺路", time: "15min", cost: "免费", altitude: "4,000m+", rule: "不在车道和弯道拍照", note: "公路视野开阔，但停车条件决定能否停留。" },
  { name: "木雅金塔", region: "塔公", level: "along", tag: "顺路", time: "30min", cost: "现场核验", altitude: "约 3,700m", rule: "塔公寺拥堵时替换", note: "建筑与雪山同框，时间成本低。" },
  { name: "新都桥 / 瓦泽贡嘎观景窗口", region: "新都桥", level: "core", tag: "必看", time: "30–60min", cost: "免费", altitude: "约 3,460m", rule: "只停正规观景点，07:40 无开云就走", note: "本次贡嘎概率最高的清晨窗口，前一晚先向酒店确认可见方向。" },
  { name: "墨石公园", region: "八美", level: "backup", tag: "备选", time: "2–3h", cost: "约 ¥80 含车", altitude: "约 3,500m", rule: "仅阴天进入，停车等待超 30 分钟放弃", note: "地貌独特但会压缩白天车程，晴天时间优先留给贡嘎和雅拉。" },
  { name: "牦牛谷", region: "八美—丹巴", level: "along", tag: "顺路", time: "15–30min", cost: "免费", altitude: "持续下降", rule: "仅使用官方停车区", note: "河谷、彩林和溪流是这段道路本身的看点。" },
  { name: "小金县城", region: "小金", level: "along", tag: "顺路", time: "1h", cost: "餐饮自理", altitude: "约 2,360m", rule: "安排午餐和补给", note: "进入四姑娘山前最后一个稳定补给节点。" },
  { name: "猫鼻梁观景台", region: "四姑娘山镇", level: "core", tag: "必看", time: "20–40min", cost: "免费", altitude: "约 3,500m", rule: "晴天且 16:30 前抵达，停车满就回酒店", note: "小环线中观看四姑娘山完整四峰轮廓的核心窗口，阴天不专程等待。" },
  { name: "康定木格措", region: "康定", level: "backup", tag: "备选", time: "5–7h", cost: "约 ¥195 套票", altitude: "2,600–3,700m", rule: "增加 1 天才加入", note: "不是 D1 到康定后的顺手景点，需要完整半天以上。" },
  { name: "中路藏寨", region: "丹巴", level: "backup", tag: "备选", time: "2–3h", cost: "通常免费", altitude: "约 2,100m", rule: "替换甲居，不叠加", note: "生活感强、游客相对少，村道停车需提前问住宿方。" },
  { name: "沃日官寨", region: "小金", level: "backup", tag: "备选", time: "1–2h", cost: "现场核验", altitude: "约 2,500m", rule: "双桥沟无票时的低强度替换", note: "人文与建筑为主，不提供同等雪山景观。" },
  { name: "四姑娘山长坪沟", region: "四姑娘山", level: "backup", tag: "备选", time: "6–8h", cost: "票价现场核验", altitude: "3,200m+", rule: "只用于雪山加量版", note: "徒步比双桥沟更重，还会把 10 月 7 日变成山区直奔机场的高风险返程。" },
  { name: "都江堰", region: "返程", level: "core", tag: "核心", time: "3h", cost: "约 ¥80", altitude: "约 700m", rule: "仅晚班机安排，11:30 前离开", note: "均衡版的低海拔收尾，水利工程、人文历史和城市休息兼顾。" },
  { name: "鱼子西空中花园", region: "新都桥", level: "skip", tag: "下次", time: "3–5h", cost: "清洁费另计", altitude: "4,000m+", rule: "本次取消", note: "非铺装支线、国庆排队和日落后夜路不适合本队。" },
  { name: "八郎生都", region: "塔公", level: "skip", tag: "下次", time: "3–4h", cost: "约 ¥30", altitude: "约 4,200m", rule: "本次取消", note: "高海拔机位与主路线重复，天气不确定性高。" },
  { name: "冷噶措", region: "贡嘎西坡", level: "skip", tag: "下次", time: "完整 1 天", cost: "接驳另计", altitude: "4,500m 左右", rule: "单独做贡嘎线", note: "距离、路况和体力需求均超出本次小环线。" },
  { name: "党岭 / 葫芦海", region: "丹巴北线", level: "skip", tag: "下次", time: "增加 2 天", cost: "马帮 / 住宿另计", altitude: "4,000m+", rule: "单独留夜", note: "不能把党岭当作丹巴顺路半日景点。" },
  { name: "海子沟", region: "四姑娘山", level: "skip", tag: "下次", time: "完整 1 天", cost: "票价现场核验", altitude: "高海拔徒步", rule: "本次取消", note: "体力要求最高，不适合首次高原团队临时加入。" },
  { name: "卧龙中华大熊猫苑", region: "卧龙", level: "core", tag: "推荐", time: "约 2h", cost: "票价现场核验", altitude: "约 1,700m", rule: "提前核验预约，排队过长直接跳过", note: "从四姑娘山下撤都江堰的顺路体验，让全程不只围绕雪山和观景台。" }
];

const spotDetails = {
  "康定折多河老城": { image: "assets/spots/01-kangding.jpg", imageLabel: "康定实景", credit: "File:Kangding, Garze, Sichuan, China - panoramio.jpg", xhs: "康定老城 国庆 停车 夜景", photo: "傍晚沿折多河拍河岸灯光与山城层次；只带一支轻便镜头。", access: "车停酒店后步行。国庆不要开进老城核心找车位，也不为夜景延长到太晚。" },
  "S434 红海子": { image: "assets/spots/02-honghaizi.jpg", imageLabel: "贡嘎方向参考", credit: "File:Minya Konka Northwest Ridge.JPG", xhs: "S434 红海子 贡嘎 停车 路况", photo: "优先拍湖面、道路与远处雪峰的关系；风大无倒影就不等待。", access: "只进现有正规停车区，停留 20–30 分钟；结冰、浓雾和横风任一出现就取消。" },
  "塔公草原 / 塔公寺": { image: "assets/spots/03-tagong.jpg", imageLabel: "塔公草原实景", credit: "File:Grasslands in Tagong county, Sichuan, China (41077322430).jpg", xhs: "塔公草原 雅拉雪山 国庆 停车", photo: "草原低机位拍经幡、寺院与雅拉同框；下午侧光通常比正午更有层次。", access: "草原与寺院只选一个主入口，预计 60–90 分钟；先问清骑马与停车收费。" },
  "甲居或中路藏寨": { image: "assets/spots/04-jiaju.jpg", imageLabel: "甲居藏寨实景", credit: "File:四川 丹巴-甲居-藏寨 - panoramio.jpg", xhs: "甲居藏寨 中路藏寨 国庆 自驾 停车", photo: "观景台拍山坡村落全景，不在民居门口长时间摆拍。", access: "二选一并压缩至 1–1.5 小时；村道堵车或停车排队时，完成主视角后立即离开。" },
  "四姑娘山双桥沟": { image: "assets/spots/05-shuangqiao.jpg", imageLabel: "双桥沟实景", credit: "File:四姑娘山双桥沟.jpg", xhs: "双桥沟 国庆 游览顺序 红杉林 布达拉峰", photo: "红杉林拍近景雪峰，布达拉峰拍公路，四姑娜措拍倒影；三类画面完成即可。", access: "先乘观光车到红杉林再向下游览。排队明显变长时少下一站，16:30 前离园。" },
  "泸定桥 / 泸定县城": { image: "assets/spots/06-luding.jpg", imageLabel: "泸定桥实景", credit: "File:Luding bridge.jpg", xhs: "泸定桥 国庆 停车 排队", photo: "桥头拍铁索纵深即可，不在桥面人流中停下拍长曝光。", access: "导航显示通畅且县城停车容易才进入；总停留控制在 30–60 分钟。" },
  "康定机场路观景段": { image: "assets/spots/07-airport-road.jpg", imageLabel: "康定高原区域实景", credit: "File:Kangding, Garze, Sichuan, China - panoramio - Weiguang Teng (12).jpg", xhs: "康定机场路 S434 观景台 停车", photo: "拍铺装公路、山脊和云层，不让人员站到行车道中央。", access: "停车条件决定是否下车；找不到正规停车区就直接通过，不掉头追机位。" },
  "木雅金塔": { image: "assets/spots/08-muya.jpg", imageLabel: "木雅金塔实景", credit: "File:Muya Golden Pagoda, Tagong (76325).jpg", xhs: "木雅金塔 雅拉雪山 拍照 停车", photo: "用金塔作为前景拍雅拉，优先中长焦压缩山体，不进入宗教活动区域摆拍。", access: "作为塔公草原拥堵时的替换点，停留约 30 分钟；现场收费与开放状态再确认。" },
  "新都桥 / 瓦泽贡嘎观景窗口": { image: "assets/spots/09-xinduqiao.jpg", imageLabel: "新都桥实景", credit: "File:新都桥 2016 刘祖赛 稻城亚丁 - panoramio (1).jpg", xhs: "新都桥 瓦泽 贡嘎 日出 正规观景台", photo: "清晨先拍贡嘎方向，再补河谷、杨林和藏式民居；云厚时不要在村道间反复换点。", access: "前一晚问酒店可见方向。07:10 到点，07:40 仍无开云迹象就离开。" },
  "墨石公园": { image: "assets/spots/10-moshi.jpg", imageLabel: "八美区域实景参考", credit: "File:Yalamountain.jpg", xhs: "墨石公园 国庆 排队 观光车", photo: "阴天可强化黑灰石林质感；晴天不要为了拍照牺牲贡嘎、雅拉窗口。", access: "仅阴天且停车等待不超过 30 分钟时进入，完整游览至少需要 2 小时。" },
  "牦牛谷": { image: "assets/spots/11-yak-valley.jpg", imageLabel: "丹巴河谷区域实景", credit: "File:Danba, Garze, Sichuan, China - panoramio (6).jpg", xhs: "牦牛谷 丹巴 G350 停车 彩林", photo: "以河谷、公路和彩林为主，停车点光线不好就留在车上看。", access: "只使用明确停车区，短停 15–30 分钟；连续下坡段不要频繁急刹找位置。" },
  "小金县城": { image: "assets/spots/12-xiaojin.jpg", imageLabel: "小金县区域实景", credit: "File:Xiaojin, Aba, Sichuan, China - panoramio - Leeshan Chung (9).jpg", xhs: "小金县 国庆 吃饭 加油 停车", photo: "这里不是摄影主场，重点是热食、厕所、加油和采购。", access: "餐饮控制在 45–60 分钟，离开前补齐双桥沟早餐和饮用水。" },
  "猫鼻梁观景台": { image: "assets/spots/13-maobiliang.jpg", imageLabel: "四姑娘山峰群实景", credit: "File:Mount Siguniang.jpg", xhs: "猫鼻梁 四姑娘山 日落 停车 国庆", photo: "中长焦拍完整四峰轮廓，广角保留山谷环境；日照金山只当奖励。", access: "目标 16:30 前到正规停车区。停车满、云遮山或道路拥堵时直接回酒店。" },
  "康定木格措": { image: "assets/spots/14-mugecuo.jpg", imageLabel: "木格措实景", credit: "File:四川 康定县 木格措 - panoramio.jpg", xhs: "木格措 国庆 排队 游览时间", photo: "湖岸、雪山和森林适合完整半日拍摄，不适合到康定后临时塞入。", access: "需要 5–7 小时并单独占一天；本线路只作为天气或道路大改后的替换方案。" },
  "中路藏寨": { image: "assets/spots/15-zhonglu.jpg", imageLabel: "丹巴藏寨区域实景", credit: "File:Danba, Garze, Sichuan, China - panoramio (11).jpg", xhs: "中路藏寨 日出 民宿 停车", photo: "清晨拍碉楼、田地和村落生活，不闯入院落，也不未经同意拍近距离人物。", access: "只有前一晚住入口附近才顺路；提前向住宿方确认最后一段村道与停车位置。" },
  "沃日官寨": { image: "assets/spots/16-wori.jpg", imageLabel: "嘉绒藏寨区域实景参考", credit: "File:Danba, Garze, Sichuan, China - panoramio (1).jpg", xhs: "沃日官寨 小金 游览 停车", photo: "以官寨建筑和河谷环境为主，阴天也能完成，不需要等待雪山开云。", access: "只在双桥沟无票或当天提前结束时替换，现场开放、讲解和停车条件需复核。" },
  "四姑娘山长坪沟": { image: "assets/spots/17-changping.jpg", imageLabel: "四姑娘山景区实景", credit: "File:四姑娘山景区 Mount Siguniang Scenic Area 17.jpg", xhs: "长坪沟 国庆 枯树滩 下干海子 徒步", photo: "用森林、枯木和河谷作为前景拍幺妹峰方向；与双桥沟的公路和湖泊画面形成区别。", access: "只在主动选择雪山加量版时进入；14:00 无条件折返，连续高反或雨雪时整日取消。" },
  "都江堰": { image: "assets/spots/18-dujiangyan.jpg", imageLabel: "都江堰实景", credit: "File:Dujiangyan, Sichuan (20240906) P1.jpg", xhs: "都江堰 国庆 半日游 离堆公园 停车", photo: "宝瓶口、飞沙堰和安澜索桥按人流选择两处，不追求全景区走完。", access: "仅双流 18:00 后或天府 20:00 后航班安排，08:00 入园、11:30 前发车去机场。" },
  "鱼子西空中花园": { image: "assets/spots/19-yuzixi.jpg", imageLabel: "贡嘎雪山参考", credit: "File:Minya Konka, from the west..jpg", xhs: "鱼子西 国庆 堵车 路况 日落", photo: "优势是贡嘎日落，但机位价值建立在晴天、道路和返程余量同时满足。", access: "本次取消：非铺装支线、国庆排队、日落后下山和 4,000 米海拔叠加。" },
  "八郎生都": { image: "assets/spots/20-balangshengdu.jpg", imageLabel: "雅拉雪山参考", credit: "File:Yalamountain.jpg", xhs: "八郎生都 国庆 路况 雅拉 日落", photo: "可看雅拉和草原，但与塔公当天画面重复，不值得再增加高海拔停留。", access: "本次取消；需要单独评估支线路况、预约/收费和日落后返程问题。" },
  "冷噶措": { image: "assets/spots/21-lenggacuo.jpg", imageLabel: "贡嘎雪山参考", credit: "File:Gongga (3to4-1).JPG", xhs: "冷噶措 贡嘎 徒步 接驳 路况", photo: "经典价值是湖面与贡嘎倒影，但天气、徒步和接驳不确定性都很高。", access: "应单独做贡嘎西坡线路并留宿；不能作为新都桥附近临时加点。" },
  "党岭 / 葫芦海": { image: "assets/spots/22-dangling.jpg", imageLabel: "丹巴区域实景参考", credit: "File:Danba, Garze, Sichuan, China - panoramio (16).jpg", xhs: "党岭 葫芦海 国庆 徒步 住宿", photo: "真正核心是高山湖泊和彩林，需要徒步或马帮，和丹巴藏寨不是同一强度。", access: "至少增加两天并在党岭留宿；本次小环线不进入丹巴北线。" },
  "海子沟": { image: "assets/spots/23-haizi.jpg", imageLabel: "四姑娘山谷地参考", credit: "File:Shuangqiaogou overlook.jpg", xhs: "四姑娘山 海子沟 徒步 国庆", photo: "开阔山谷和高山海子依赖长距离徒步，需按户外线路准备而非普通景区游。", access: "本次取消；体力要求高，首次高原团队不应在双桥沟之后临时加入。" },
  "卧龙中华大熊猫苑": { image: "assets/spots/24-panda.jpg", imageLabel: "卧龙大熊猫实景", credit: "File:Pandas!! (GIANT PANDA-WOLONG-SICHUAN-CHINA) (2150600169).jpg", xhs: "卧龙中华大熊猫苑 国庆 预约 停车", photo: "优先观察熊猫活动，不敲玻璃、不投喂，也不为了合影阻塞通道。", access: "提前核验国庆开放、实名预约和停车规则；排队过长或无票时直接前往映秀。" }
};

spots.forEach(spot => Object.assign(spot, spotDetails[spot.name]));

const packingGroups = [
  ["证件与订单", ["5 人身份证原件", "2 位驾驶员驾驶证", "机票 / 酒店 / 租车订单截图", "双桥沟实名门票", "保险与道路救援电话"]],
  ["车辆与导航", ["手机支架与双口车充", "高德四川离线地图", "适配车型的防滑链", "胎压计 / 手电", "垃圾袋与湿巾"]],
  ["高原与保暖", ["羽绒或抓绒中层", "防水冲锋衣", "帽子 / 手套 / 保暖袜", "墨镜与 SPF50 防晒", "保温杯和电解质饮料"]],
  ["健康与应急", ["个人常用处方药", "创可贴与消毒用品", "晕车用品", "便携氧气（成都正规渠道购买）", "紧急联系人纸质备份"]],
  ["公共电子设备", ["2 个大容量充电宝", "一拖多充电线", "车载逆变器（确认功率）", "相机电池与存储卡", "对讲机（可选）"]],
  ["行李规则", ["每人 20 寸箱或软包", "鞋子最多两双", "公共用品只带一份", "车内留一袋随手保暖衣", "最后一排不堆高遮挡后窗"]]
];

const budgetConfig = [
  { key: "flight", label: "往返机票", hint: "每人", min: 1600, max: 3600, step: 100, value: 2400, unit: "¥", multiply: 5 },
  { key: "hotel", label: "酒店均价", hint: "每间 / 晚，2 间 × 7 晚", min: 450, max: 1400, step: 50, value: 850, unit: "¥", multiply: 14 },
  { key: "car", label: "租车与保险", hint: "团队总价", min: 6000, max: 14000, step: 500, value: 8500, unit: "¥", multiply: 1 },
  { key: "food", label: "餐饮标准", hint: "每人 / 天", min: 100, max: 350, step: 10, value: 180, unit: "¥", multiply: 35 }
];

const fixedBudget = [
  ["油费 / 路桥 / 停车", 2100],
  ["景区门票", 1750],
  ["公共物资 / 杂费", 1600]
];

let activeDay = 0;
const routeFromUrl = new URLSearchParams(window.location.search).get("route");
const savedRoute = localStorage.getItem("chuanxi-route");
let activePlan = routeData[routeFromUrl] ? routeFromUrl : (routeData[savedRoute] ? savedRoute : "balanced");
let activeSpotLevel = "all";

function currentRoute() {
  return routeData[activePlan];
}

function money(value) {
  return new Intl.NumberFormat("zh-CN").format(Math.round(value));
}

function icon(name) {
  return `<i data-lucide="${name}"></i>`;
}

function commonsFileUrl(title) {
  return `https://commons.wikimedia.org/wiki/${encodeURIComponent(title).replace("%3A", ":")}`;
}

function xiaohongshuSearchUrl(query) {
  return `https://www.xiaohongshu.com/search_result?keyword=${encodeURIComponent(query)}&type=51`;
}

function renderPlans() {
  const controls = document.querySelector("[data-plan-controls]");
  const content = document.querySelector("[data-plan-content]");
  controls.innerHTML = planOptions.map(plan => `<button type="button" role="tab" aria-selected="${plan.id === activePlan}" class="plan-tab ${plan.id === activePlan ? "active" : ""}" data-plan="${plan.id}">${plan.tab}</button>`).join("");
  const plan = planOptions.find(item => item.id === activePlan);
  content.innerHTML = `
    <div class="plan-intro">
      <span class="plan-badge ${plan.id === "snow" ? "warning" : ""}">${plan.badge}</span>
      <div><h3>${plan.title}</h3><p>${plan.summary}</p></div>
    </div>
    <div class="plan-stats">${plan.stats.map(item => `<div><span>${item[0]}</span><strong>${item[1]}</strong></div>`).join("")}</div>
    <div class="plan-timeline">${plan.timeline.map((item, index) => `<div><span>${item[0]}</span><strong>${item[1]}</strong><small>${item[2]}</small>${index < plan.timeline.length - 1 ? icon("arrow-right") : ""}</div>`).join("")}</div>
    <p class="plan-verdict"><strong>结论：</strong>${plan.verdict}</p>`;
  controls.querySelectorAll("[data-plan]").forEach(button => button.addEventListener("click", () => {
    activePlan = button.dataset.plan;
    activeDay = 0;
    localStorage.setItem("chuanxi-route", activePlan);
    const url = new URL(window.location.href);
    url.searchParams.set("route", activePlan);
    window.history.replaceState({}, "", url);
    renderPlans();
    renderTabs();
    renderDay();
    renderRoadbook();
    renderStays();
    if (window.lucide) window.lucide.createIcons();
  }));
}

function renderRoadbook() {
  document.querySelector("[data-road-table]").innerHTML = currentRoute().roadSegments.map(row => `
    <tr>
      <td><span>${row[0]}</span><strong>${row[1]}</strong></td>
      <td>${row[2]}</td><td>${row[3]}</td><td>${row[4]}</td><td>${row[5]}</td><td>${row[6]}</td>
    </tr>`).join("");
}

function renderStays() {
  document.querySelector("[data-stay-list]").innerHTML = currentRoute().stays.map((stay, index) => `
    <article class="stay-row">
      <div class="stay-index"><span>N${index + 1}</span><strong>${stay.date}</strong></div>
      <div class="stay-place"><h3>${stay.city}</h3><p>${stay.alt}</p></div>
      <div><span>国庆目标价</span><strong>${stay.target}</strong><small>${stay.rooms}</small></div>
      <div><span>优先区域</span><strong>${stay.area}</strong><small>必须：${stay.must}</small></div>
      <div><span>避免</span><p>${stay.avoid}</p><a href="${stay.link}" target="_blank" rel="noreferrer">高德搜索 ${icon("external-link")}</a></div>
    </article>`).join("");
}

function renderSpotFilters() {
  const filterOptions = [["all", "全部"], ["core", "核心"], ["along", "顺路"], ["backup", "备选"], ["skip", "下次"]];
  const controls = document.querySelector("[data-spot-filters]");
  controls.innerHTML = filterOptions.map(option => {
    const count = option[0] === "all" ? spots.length : spots.filter(spot => spot.level === option[0]).length;
    return `<button type="button" role="tab" aria-selected="${option[0] === activeSpotLevel}" class="spot-filter ${option[0] === activeSpotLevel ? "active" : ""}" data-spot-level="${option[0]}">${option[1]} <span>${count}</span></button>`;
  }).join("");
  controls.querySelectorAll("[data-spot-level]").forEach(button => button.addEventListener("click", () => {
    activeSpotLevel = button.dataset.spotLevel;
    renderSpotFilters();
    renderSpots();
  }));
}

function renderSpots() {
  const visible = activeSpotLevel === "all" ? spots : spots.filter(spot => spot.level === activeSpotLevel);
  const labels = { all: "全部沿线点", core: "必须保留", along: "有余量再停", backup: "替换使用", skip: "本次明确放弃" };
  document.querySelector("[data-spot-summary]").innerHTML = `<strong>${labels[activeSpotLevel]}</strong><span>共 ${visible.length} 个</span><p>页面中的费用和时间用于取舍，现场开放状态与票价仍以当天官方信息为准。</p>`;
  document.querySelector("[data-spot-grid]").innerHTML = visible.map((spot, index) => `
    <article class="spot-item level-${spot.level}">
      <figure class="spot-media">
        <img src="${spot.image}" alt="${spot.name}相关实景" loading="lazy" width="960" height="640" />
        <figcaption>${spot.imageLabel}</figcaption>
      </figure>
      <div class="spot-body">
        <div class="spot-top"><span>${String(index + 1).padStart(2, "0")}</span><em>${spot.tag}</em></div>
        <p class="spot-region">${spot.region}</p>
        <h3>${spot.name}</h3>
        <div class="spot-metrics"><span>${icon("clock-3")}${spot.time}</span><span>${icon("ticket")}${spot.cost}</span><span>${icon("mountain")}${spot.altitude}</span></div>
        <p>${spot.note}</p>
        <div class="spot-field"><span>怎么拍</span><p>${spot.photo}</p></div>
        <div class="spot-field"><span>怎么停 / 怎么进</span><p>${spot.access}</p></div>
        <strong class="spot-rule">${spot.rule}</strong>
        <div class="spot-links">
          <a href="${xiaohongshuSearchUrl(spot.xhs)}" target="_blank" rel="noreferrer">小红书：${spot.xhs} ${icon("search")}</a>
          <a href="${commonsFileUrl(spot.credit)}" target="_blank" rel="noreferrer">图片来源 ${icon("external-link")}</a>
        </div>
      </div>
    </article>`).join("");
  if (window.lucide) window.lucide.createIcons();
}

function renderTabs() {
  const selectedItinerary = currentRoute().itinerary;
  const root = document.querySelector("[data-day-tabs]");
  root.innerHTML = selectedItinerary.map((day, index) => `
    <button class="day-tab ${index === activeDay ? "active" : ""}" type="button" role="tab" aria-selected="${index === activeDay}" data-day="${index}">
      <span>${day.label}</span><strong>${day.date}</strong><small>${day.weekday}</small>
    </button>`).join("");
  root.querySelectorAll("[data-day]").forEach(button => button.addEventListener("click", () => {
    activeDay = Number(button.dataset.day);
    renderTabs();
    renderDay();
  }));
}

function renderDay() {
  const day = currentRoute().itinerary[activeDay];
  const root = document.querySelector("[data-day-detail]");
  root.innerHTML = `
    <div class="day-overview">
      <div class="day-title">
        <span class="day-number">${day.label} · ${day.date} ${day.weekday}</span>
        <h3>${day.title}</h3>
        <p>${day.subtitle}</p>
        <div class="day-metrics">
          <div><span>里程</span><strong>${day.distance}</strong></div>
          <div><span>驾驶</span><strong>${day.drive}</strong></div>
          <div><span>住宿</span><strong>${day.sleep}</strong></div>
        </div>
        <div class="day-actions">
          <a href="${day.navigation}" target="_blank" rel="noreferrer">${icon("navigation")}高德打开</a>
          <a href="#safety">${icon("shield-alert")}查看风险</a>
        </div>
      </div>
      <div class="day-schedule">
        ${day.schedule.map(item => `<div class="schedule-row"><div class="schedule-time">${item[0]}</div><div class="schedule-content"><h4>${item[1]}</h4><p>${item[2]}</p></div></div>`).join("")}
      </div>
    </div>
    <div class="day-notes">
      ${day.notes.map((item, index) => `<div><span>NOTE 0${index + 1}</span><strong>${item[0]} · ${item[1]}</strong><p>${item[2]}</p></div>`).join("")}
    </div>`;
  document.querySelectorAll("[data-map-day]").forEach(node => node.classList.toggle("active", Number(node.dataset.mapDay) === day.mapDay));
  if (window.lucide) window.lucide.createIcons();
}

function renderBudget() {
  const controls = document.querySelector("[data-budget-controls]");
  controls.innerHTML = budgetConfig.map(item => `
    <div class="budget-control">
      <label for="budget-${item.key}">${item.label}<small>${item.hint}</small></label>
      <input id="budget-${item.key}" type="range" min="${item.min}" max="${item.max}" step="${item.step}" value="${item.value}" data-budget="${item.key}" />
      <output for="budget-${item.key}" data-output="${item.key}">${item.unit}${money(item.value)}</output>
    </div>`).join("");
  controls.querySelectorAll("[data-budget]").forEach(input => input.addEventListener("input", event => {
    const item = budgetConfig.find(config => config.key === event.target.dataset.budget);
    item.value = Number(event.target.value);
    document.querySelector(`[data-output="${item.key}"]`).textContent = `${item.unit}${money(item.value)}`;
    updateBudget();
  }));
  updateBudget();
}

function updateBudget() {
  const variable = budgetConfig.map(item => [item.label, item.value * item.multiply]);
  const rows = [...variable, ...fixedBudget];
  const total = rows.reduce((sum, row) => sum + row[1], 0);
  document.querySelector("[data-budget-total]").textContent = money(total);
  document.querySelector("[data-budget-person]").textContent = `¥${money(total / 5)}`;
  document.querySelector("[data-budget-breakdown]").innerHTML = rows.map(row => `<div><span>${row[0]}</span><strong>¥${money(row[1])}</strong></div>`).join("");
}

function renderPacking() {
  const saved = JSON.parse(localStorage.getItem("chuanxi-packing") || "{}");
  const root = document.querySelector("[data-packing-grid]");
  root.innerHTML = packingGroups.map((group, groupIndex) => `
    <section class="packing-group"><h3>${group[0]}</h3>
      ${group[1].map((item, itemIndex) => {
        const id = `${groupIndex}-${itemIndex}`;
        return `<label class="check-item"><input type="checkbox" data-check-id="${id}" ${saved[id] ? "checked" : ""} /><span class="fake-check"></span><span>${item}</span></label>`;
      }).join("")}
    </section>`).join("");
  root.querySelectorAll("[data-check-id]").forEach(input => input.addEventListener("change", savePacking));
  updatePackingProgress();
}

function savePacking() {
  const state = {};
  document.querySelectorAll("[data-check-id]").forEach(input => { state[input.dataset.checkId] = input.checked; });
  localStorage.setItem("chuanxi-packing", JSON.stringify(state));
  updatePackingProgress();
}

function updatePackingProgress() {
  const inputs = [...document.querySelectorAll("[data-check-id]")];
  const checked = inputs.filter(input => input.checked).length;
  const percent = inputs.length ? checked / inputs.length * 100 : 0;
  document.querySelector("[data-progress-label]").textContent = `${checked} / ${inputs.length}`;
  document.querySelector("[data-progress-bar]").style.width = `${percent}%`;
}

function showToast(message) {
  const toast = document.querySelector("[data-toast]");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function setupActions() {
  document.querySelectorAll("[data-print]").forEach(button => button.addEventListener("click", () => window.print()));
  document.querySelector("[data-copy-plan]").addEventListener("click", async () => {
    const summary = `2026 国庆 5 人川西小环线｜${currentRoute().summary} 9 月 30 日晚成都取车，10 月 7 日返回广州。国庆交通、景区开放和管制信息需在 9 月底再次核验。`;
    try { await navigator.clipboard.writeText(summary); showToast("行程摘要已复制"); }
    catch { showToast("浏览器未允许复制，请手动选择文字"); }
  });
  document.querySelector("[data-reset-checklist]").addEventListener("click", () => {
    localStorage.removeItem("chuanxi-packing");
    renderPacking();
    showToast("装车清单已重置");
  });
  window.addEventListener("scroll", () => document.querySelector("[data-header]").classList.toggle("scrolled", window.scrollY > 80), { passive: true });
}

document.addEventListener("DOMContentLoaded", () => {
  renderPlans();
  renderTabs();
  renderDay();
  renderRoadbook();
  renderStays();
  renderSpotFilters();
  renderSpots();
  renderBudget();
  renderPacking();
  setupActions();
  if (window.lucide) window.lucide.createIcons();
});
