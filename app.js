// === 功能详情数据 ===
var featureData = {
  'login-client': {
    title: '客户端登录',
    category: '账号登录功能',
    desc: '<strong>使用场景</strong><br>客户端登录页面是美团标准的<strong>App内原生登录能力</strong>，适用于所有需要在公司App内完成美团C端账号登录的业务。如果业务主要在App内运行，强烈建议优先使用客户端原生登录，相比H5登录具有更好的用户体验、更高的安全性和更完善的风控能力。<br><br><strong>使用功能</strong><br>客户端登录页面支持手机一键登录、手机验证码登录、密码登录、微信登录、QQ登录、Apple登录（仅iOS）、网证登录等多种方式。登录方式由账号SDK统一管理，业务方无需单独配置登录方式。接入方式分为Android和iOS两端，分别通过Gradle/Podfile引入Passport SDK，在Application/AppDelegate中初始化并配置joinkey。<br><br><strong>可配置能力</strong><br>客户端登录页面支持以下UI元素定制：自定义登录页标题和副标题文案、用户协议文案及跳转链接、登录按钮背景色与文字颜色及按钮文案、屏蔽不需要的登录方式入口（如隐藏QQ登录图标）、修改登录方式入口显示名称、自定义登录成功后跳转的落地页。Android验证码页面仅支持返回按钮颜色定制。',
    images: [
      { url: 'https://km.sankuai.com/api/file/cdn/2722534277/191043166735?contentType=1', caption: '客户端登录页 - 手机一键登录' },
      { url: 'https://km.sankuai.com/api/file/cdn/2722534277/191054950799?contentType=1', caption: '客户端登录页 - 手机验证码登录' },
      { url: 'assets/client_login_password.png', caption: '客户端登录页 - 密码登录' }
    ],
    configImages: [
      { url: 'https://km.sankuai.com/api/file/cdn/2722534277/190608038433?contentType=1', caption: '客户端可配置内容1' },
      { url: 'https://km.sankuai.com/api/file/cdn/2722534277/191044238250?contentType=1', caption: '客户端可配置内容2' },
      { url: 'assets/client_config_android_sms.png', caption: 'Android验证码页面可配置内容' }
    ],
    configurable: [
      '自定义文案：支持修改登录页面标题、副标题等文案内容',
      '用户协议文案及跳链：可配置《用户协议》《隐私政策》等协议名称和跳转链接',
      '按钮颜色及文案：支持修改登录按钮的背景色、文字颜色和按钮文案',
      '入口屏蔽：允许屏蔽不需要的登录方式入口（如隐藏QQ登录图标）',
      '入口名称修改：修改登录方式入口的显示名称',
      '落地页修改：自定义登录成功后跳转的落地页',
      'Android验证码页面：仅返回按钮颜色可定制，其他元素暂不支持'
    ],
    accessMethods: [
      { platform: '客户端Native接入', desc: '支持全部登录方式：手机一键登录、手机验证码登录、密码登录、微信登录、QQ登录、Apple登录（仅iOS）、网证登录' }
    ],
    access: '客户端Native接入，支持全部登录方式。',
    flowGroups: [
      {
        title: 'Android 接入流程',
        steps: ['申请joinkey', '确认基建依赖就绪（Guard/UUID/灵犀/ServiceLoader等）', '在build.gradle添加Passport SDK依赖', '在Application中初始化SDK并配置joinkey', '实现必要接口（网络/指纹/位置等）', '联调测试', '上线发布'],
        docs: [
          { title: 'Android接入指南', url: 'https://km.sankuai.com/collabpage/2727326413' },
          { title: 'SDK joinkey申请接入流程', url: 'https://km.sankuai.com/page/129939492' },
          { title: 'Android版本迭代记录', url: 'https://km.sankuai.com/collabpage/2727108366' },
          { title: 'UI定制配置', url: 'https://km.sankuai.com/collabpage/2727297869' }
        ]
      },
      {
        title: 'iOS 接入流程',
        steps: ['申请joinkey', '确认基建依赖就绪（SAKGuard/SAKPortal/灵犀/Horn等）', '在Podfile中添加SAKAccount依赖', '在AppDelegate中配置joinkey和环境变量', '配置风控错误码处理（401-405）', '联调测试', '上线发布'],
        docs: [
          { title: 'iOS接入指南', url: 'https://km.sankuai.com/collabpage/2727366204' },
          { title: 'SDK joinkey申请接入流程', url: 'https://km.sankuai.com/page/129939492' },
          { title: 'iOS版本变更记录', url: 'https://km.sankuai.com/collabpage/2726807435' },
          { title: '风控401-405错误码处理', url: 'https://km.sankuai.com/collabpage/2727075420' }
        ]
      }
    ],
    flow: ['申请joinkey', '确认基建依赖', '添加SDK依赖', '初始化配置', '联调测试', '上线发布'],
    docs: [
      { title: 'SDK joinkey申请接入流程', url: 'https://km.sankuai.com/page/129939492' },
      { title: 'Android接入指南', url: 'https://km.sankuai.com/collabpage/2727326413' },
      { title: 'iOS接入指南', url: 'https://km.sankuai.com/collabpage/2727366204' },
      { title: 'H5-i版登录页', url: 'https://km.sankuai.com/collabpage/2726928774' },
      { title: 'H5-扫码登录页', url: 'https://km.sankuai.com/collabpage/2727018221' },
      { title: '查询账号登录态', url: 'https://km.sankuai.com/collabpage/2702762982' }
    ]
  },
  'login-h5': {
    title: 'H5-i版登录',
    category: '账号登录功能',
    desc: '<strong>使用场景</strong><br>i版登录页主要面向<strong>站外业务移动端登录场景</strong>，适用于业务H5页面需要让用户完成美团C端账号登录的情况。如果业务主要在公司App内运行，强烈建议使用客户端原生登录能力；如果业务需要在PC端接入登录，建议使用<a href="https://km.sankuai.com/collabpage/2727018221" target="_blank">扫码登录页</a>。未正确接入登录能力，业务流量可能存在传递多端参数的情况，进而可能导致被误判为跨端风险、引发风控。<br><br><strong>使用功能</strong><br>i版登录页是一个带有账号密码登录、手机号验证码登录、以及微信浏览器环境下三方登录功能以及完整风控流程的C端美团账号登录页。在微信浏览器环境下打开默认展示微信快捷登录，其他浏览器环境下展示手机验证码登录。<br>体验链接：<a href="https://passport.meituan.com/useraccount/ilogin" target="_blank">https://passport.meituan.com/useraccount/ilogin</a><br><br><strong>可配置能力</strong><br>i版登录页支持以下UI元素定制：LOGO定制、地区选择（支持只选某个地区）、按钮底色、文案内容、协议文案内容及颜色、法务链接及颜色。如需高度定制登录样式，可使用<a href="https://km.sankuai.com/collabpage/2726956604" target="_blank">H5登录组件</a>（以JS形式提供，样式完全自定义，但接入成本较高）。',
    images: [
      { url: 'assets/h5i_wechat_login.png', caption: 'H5-i版 - 微信快捷登录' },
      { url: 'assets/h5i_sms_login.png', caption: 'H5-i版 - 手机验证码登录' },
      { url: 'assets/h5i_password_login.png', caption: 'H5-i版 - 密码登录' }
    ],
    configImages: [
      { url: 'assets/h5i_config.png', caption: 'H5-i版可配置内容标注' }
    ],
    configurable: [
      'LOGO定制：支持替换登录页顶部的品牌LOGO',
      '地区选择：支持只选某个地区，可定制地区选择器',
      '按钮底色：支持自定义登录按钮的背景颜色',
      '文案内容：支持修改登录页面上的提示文案',
      '协议文案内容及颜色：支持自定义用户协议、隐私政策等协议名称及文字颜色',
      '法务链接及颜色：支持配置法务相关链接地址及其显示颜色'
    ],
    accessMethods: [
      { platform: 'i版登录', desc: '支持手机验证码登录、密码登录、微信登录、QQ登录。通过URL跳转方式接入，微信浏览器环境下默认展示三方快捷登录，其他环境展示手机验证码登录。' }
    ],
    access: 'H5通过i版登录页URL接入，即标准H5登录页面，通过URL跳转方式接入。',
    flowGroups: [
      {
        title: 'H5-i版登录 接入流程',
        steps: ['申请joinkey', '配置登录页URL参数（service、continue、风控参数等）', '对接登录回调（获取token和userid）', '按需定制UI样式（LOGO/按钮/文案等）', '联调测试（test环境验证）', '上线发布'],
        docs: [
          { title: 'H5-i版登录页接入文档', url: 'https://km.sankuai.com/collabpage/2726928774' }
        ]
      }
    ],
    flow: ['申请joinkey', '配置URL参数', '定制UI样式', '联调测试', '上线发布'],
    docs: [
      { title: 'H5-i版登录页接入文档', url: 'https://km.sankuai.com/collabpage/2726928774' },
      { title: 'H5登录组件（高度定制）', url: 'https://km.sankuai.com/collabpage/2726956604' }
    ]
  },
  'login-pc': {
    title: 'PC扫码登录',
    category: '账号登录功能',
    desc: '<strong>使用场景</strong><br>扫码登录页面面向<strong>PC端C端美团账号登录场景</strong>，适用于业务Web页面需要让用户通过扫码方式完成美团账号登录的情况。如果业务需要在移动端H5接入登录，建议使用<a href="https://km.sankuai.com/collabpage/2726928774" target="_blank">H5-i版登录页</a>；如果业务在App内运行，建议使用客户端原生登录能力。旧版PC统一登注页正在推进全业务下线，新接入业务请直接使用扫码登录页。<br><br><strong>使用功能</strong><br>扫码登录页是一个带有手机号密码登录、扫码登录（微信、美团App）、短信验证码登录的PC端登录页，支持部分样式定制。同时提供支持车机扫码登录的车机扫码登录页。当前仅支持.meituan域名，非.meituan域名需业务自行实现setToken接口并联系账号后端加白联调。<br>体验链接：<a href="https://passport.meituan.com/useraccount/login" target="_blank">https://passport.meituan.com/useraccount/login</a><br><br><strong>可配置能力</strong><br>扫码登录页当前支持通过URL参数（service）读取样式配置，实现品牌化定制（如NoCode接入示例通过CSS覆盖隐藏美团Logo、替换主色调、自定义背景）。以下9项配置能力<strong>开发中，预计6月上线</strong>：默认登录方式配置（扫码/手机验证码）、顶部标题文案配置或删除、二维码下方说明文案配置或删除、扫码页用户协议文案及链接配置、账号登录入口文案配置或隐藏、底部导航栏各项显隐/文案/跳转链接配置、快捷登录页底部用户协议配置、密码登录页底部用户协议配置、整体页面样式自定义（CSS注入/主题配置）。',
    images: [
      { url: 'assets/pc_scan_login.png', caption: 'PC扫码登录页' }
    ],
    configImages: [
      { url: 'assets/pc_scan_config_annotated.png', caption: 'PC扫码登录页配置项标注（开发中）' }
    ],
    configurable: [
      '① 默认登录方式：支持配置默认展示扫码登录或手机验证码登录（开发中，预计6月上线）',
      '② 顶部标题文案：支持配置或隐藏顶部标题区域（开发中，预计6月上线）',
      '③ 二维码下方说明文案：支持配置或隐藏二维码下方提示文案（开发中，预计6月上线）',
      '④ 扫码页用户协议：支持自定义协议名称和链接，或隐藏协议区域（开发中，预计6月上线）',
      '⑤ 账号登录入口文案：支持配置或隐藏「账号登录」入口按钮（开发中，预计6月上线）',
      '⑥ 底部导航栏：支持配置各项显隐、文案、跳转链接（开发中，预计6月上线）',
      '⑦ 快捷登录页用户协议：支持自定义底部协议文案及链接（开发中，预计6月上线）',
      '⑧ 密码登录页用户协议：支持自定义底部协议文案及链接（开发中，预计6月上线）',
      '⑨ 整体页面样式自定义：支持CSS注入/主题配置，可覆盖背景色、Logo、主色调等（开发中，预计6月上线）'
    ],
    accessMethods: [
      { platform: 'PC扫码登录页接入', desc: '支持扫码登录（微信/美团App）、手机验证码登录、密码登录。通过URL跳转方式接入，在query中配置风控参数和continue回调地址即可。当前仅支持.meituan域名，非.meituan域名需自行实现setToken接口并联系账号后端加白。' }
    ],
    access: 'PC通过扫码登录页URL接入，在query中配置4个必填参数（risk_partner、risk_app、risk_platform、continue）即可完成接入。',
    flowGroups: [
      {
        title: 'PC扫码登录页 接入流程',
        steps: ['联系账号PM值班组确认接入需求，填写接入需求池', '申请joinkey及风控参数（risk_app、risk_platform、risk_partner）', '业务RD参考接入文档配置URL参数（4个必填参数+可选参数）', '如需样式定制，联系账号前端获取service并提供CSS样式', '业务回归各投放场景样式和策略，参考测试指南进行测试', '上线前联系风控同学在线下验证参数是否正确', '上线发布'],
        docs: [
          { title: '扫码登录页接入文档', url: 'https://km.sankuai.com/collabpage/2727741606' },
          { title: 'SDK joinkey申请接入流程', url: 'https://km.sankuai.com/page/129939492' },
          { title: '扫码登录页介绍', url: 'https://km.sankuai.com/collabpage/2727018221' },
          { title: 'F&Q 常见问题', url: 'https://km.sankuai.com/collabpage/2727465075' }
        ]
      }
    ],
    flow: ['确认接入需求', '申请joinkey及风控参数', '配置URL参数接入', '样式定制（可选）', '联调测试', '风控验收', '上线发布'],
    docs: [
      { title: '扫码登录页接入文档', url: 'https://km.sankuai.com/collabpage/2727741606' },
      { title: 'SDK joinkey申请接入流程', url: 'https://km.sankuai.com/page/129939492' },
      { title: '扫码登录页介绍', url: 'https://km.sankuai.com/collabpage/2727018221' },
      { title: 'F&Q 常见问题', url: 'https://km.sankuai.com/collabpage/2727465075' },
      { title: '配置能力完善PRD', url: 'https://km.sankuai.com/collabpage/2759905892' },
      { title: '登陆态cookie取值及退登能力', url: 'https://km.sankuai.com/collabpage/2740221955' }
    ]
  },
  'custom-login': {
    title: '定制登录页面',
    category: '账号登录功能',
    desc: '<strong>使用场景</strong><br>定制登录页面适用于<strong>对登录页样式有较高定制需求</strong>的业务场景。主要有两类：一是客户端外投页面，用于外投拉新场景，通过顶部利益点图片（红包、优惠券等）吸引用户登录；二是H5登录组件，适用于业务需要在站外H5页面内嵌登录能力且对样式有完全自定义需求的场景。注意：H5登录功能主要面向C端美团业务页面在站外登录的场景，如果业务主要在公司App内运行，强烈建议使用客户端原生登录能力。<br><br><strong>使用功能</strong><br>外投页面提供带有利益点图片的定制登录页，吸引新用户注册登录。H5登录组件是一个带有手机号验证码登录功能及完整风控流程的JS组件：在浏览器环境下支持手机号验证码登录，在微信/QQ环境下同时支持第三方登录和手机号验证码登录。<br>H5组件Demo：<a href="http://portal-portm.sankuai.com/passport/mt-login-component" target="_blank">http://portal-portm.sankuai.com/passport/mt-login-component</a><br><br><strong>可配置能力</strong><br>外投页面支持顶部利益点图片配置（红包、优惠券等营销素材）。H5登录组件以JS形式提供，只包含基本UI用于开发使用，最终样式由业务方完全自行定制，因此有一定接入成本（主要是样式覆盖和兼容）。如果对样式定制要求不高想快速接入，推荐使用<a href="https://km.sankuai.com/collabpage/2726928774" target="_blank">i版登录页</a>。',
    images: [
      { url: 'https://km.sankuai.com/api/file/cdn/2722534277/190614953969?contentType=1', caption: '外投页面 - 新用户专享' },
      { url: 'https://km.sankuai.com/api/file/cdn/2722534277/190622246556?contentType=1', caption: 'H5登录组件1' },
      { url: 'https://km.sankuai.com/api/file/cdn/2722534277/195219752674?contentType=1&isNewContent=false', caption: 'H5登录组件2' }
    ],
    configurable: [],
    accessMethods: [
      { platform: '客户端Native接入 - 外投登录页', desc: '支持全部登录方式，需要提需开发。仅支持Android，其他端暂不支持。' },
      { platform: 'H5接入 - 登录组件', desc: '支持手机验证码登录、微信登录、QQ登录。以JS组件形式提供，业务方引入后自行定制样式。' }
    ],
    access: 'H5登录组件以JS形式提供，业务方引入后自行定制样式。',
    flowGroups: [
      {
        title: 'H5登录组件 接入流程',
        steps: ['联系账号PM值班组确认接入需求', '与风控侧确认风控参数（risk_app/risk_platform/risk_partner）', '引入登录组件JS文件并添加div容器', '配置组件参数（风控参数、env环境、UI配置等）', '注册组件事件监听（loginComplete/loginFailed等）', '按业务需求定制UI样式', '回归各投放场景风控策略', '上线前联系风控在线下验证参数', '上线发布'],
        docs: [
          { title: 'H5登录组件接入文档', url: 'https://km.sankuai.com/collabpage/2726976999' },
          { title: 'H5登录组件概述', url: 'https://km.sankuai.com/collabpage/2726956604' },
          { title: 'SDK joinkey申请接入流程', url: 'https://km.sankuai.com/page/129939492' },
          { title: 'F&Q 常见问题', url: 'https://km.sankuai.com/collabpage/2727465075' }
        ]
      }
    ],
    flow: ['确认场景', '引入JS组件', '样式定制', '接口对接', '测试上线'],
    docs: [
      { title: 'H5登录组件接入文档', url: 'https://km.sankuai.com/collabpage/2726976999' },
      { title: 'H5登录组件概述', url: 'https://km.sankuai.com/collabpage/2726956604' }
    ]
  },
  'union-login': {
    title: '联合登录',
    category: '账号登录功能',
    desc: '<strong>使用场景</strong><br>联合登录组件适用于<strong>公司内业务与第三方App/小程序之间的联合登录场景</strong>，即用户在第三方页面完成授权后，在公司业务页面完成美团C端账号登录。典型场景如美团外卖H5与联通手机营业厅的联合登录。注意：H5联合登录组件只能由公司内业务集成，不可由外部第三方集成。<br><br><strong>使用功能</strong><br>H5联合登录组件是一个供公司内业务与第三方之间联合登录的C端美团账号登录组件，通过业务应用传过来的用户手机号查询或创建美团账号，实现美团账号登录。组件提供了完整的风控流程、默认样式以及页面UI自定义配置项，以JS形式提供，业务方可按需引入。提供两种接入方式：code方式（推荐，符合标准OAuth2.0授权码模式）和access_token方式（已有token直接登录）。<br>线上实例：美团外卖H5 x 联通手机营业厅联合登录。<br>预览地址（微信环境）：<a href="http://portal-portm.sankuai.com/passport/mt-h5authlogin-component?debugcode=test" target="_blank">H5联合登录组件预览</a>',
    images: [
      { url: 'assets/union_login.mp4', caption: '联合登录演示' }
    ],
    accessMethods: [
      { platform: 'code方式接入（推荐）', desc: '符合标准OAuth2.0授权码模式。用户点击登录后，跳转到第三方页面完成授权操作，授权后重定向URL拼接code参数，账号侧通过解析此参数调用后端接口完成联合登录。推荐业务优先以此方式接入。' },
      { platform: 'access_token方式接入', desc: '适用于业务方已通过其他方式获取到第三方access_token，希望直接完成登录、无需跳转的场景。业务方将access_token传递给联合登录组件，组件调用后端接口完成联合登录。' }
    ],
    access: '提供两种接入方式：code方式接入（推荐，标准OAuth2.0授权码模式）和access_token方式接入（已有token直接登录）。',
    flowGroups: [
      {
        title: 'H5联合登录 接入流程',
        steps: ['确认是否满足配置化接入条件', '准备接入材料（Postman文件、授权码说明、appid/secret等）', '向用户中心PM提交需求TT', '申请joinkey及风控参数', '账号后端完成联合登录配置', 'test环境联调及风控验证', '账号风控验收（上线前1周）', 'prod环境配置及验证', '上线发布'],
        docs: [
          { title: 'H5联合登录组件', url: 'https://km.sankuai.com/collabpage/2727395140' },
          { title: 'H5三方联合登录接入说明', url: 'https://km.sankuai.com/collabpage/2738838371' },
          { title: '三方登录简介', url: 'https://km.sankuai.com/collabpage/1593021847' },
          { title: 'SDK joinkey申请接入流程', url: 'https://km.sankuai.com/page/129939492' }
        ]
      }
    ],
    flow: ['确认接入条件', '准备接入材料', '提交需求评审', '申请风控参数', '配置联合登录', '联调测试', '风控验收', '上线发布'],
    docs: [
      { title: 'H5联合登录组件', url: 'https://km.sankuai.com/collabpage/2727395140' },
      { title: 'H5三方联合登录接入说明', url: 'https://km.sankuai.com/collabpage/2738838371' },
      { title: '三方登录简介', url: 'https://km.sankuai.com/collabpage/1593021847' },
      { title: 'SDK joinkey申请接入流程', url: 'https://km.sankuai.com/page/129939492' }
    ]
  },
  'shared-session': {
    title: '共享登录态 SDK',
    category: '账号登录功能',
    desc: '<strong>使用场景</strong><br>共享登录态SDK适用于<strong>微信小程序环境下H5页面需要共享美团小程序登录态</strong>的场景。当用户在美团微信小程序内打开嵌套的H5页面时，通过该SDK可实现H5页面自动获取小程序登录态，无需用户重复登录。<br><br><strong>使用功能</strong><br>共享登录态SDK是一个在微信小程序环境下，美团小程序内H5页面共享小程序登录态的SDK。微信小程序使用passport登录以后，内嵌的H5页面可以做到完全静默登录，不会出现授权弹窗，实现H5页面间的登录态无缝共享。<br><br><strong>可配置能力</strong><br>SDK以标准JS形式提供集成，主要配置为微信小程序环境下的SDK初始化参数。集成后H5页面间的登录态共享为自动完成，无需业务方额外配置。',
    images: [],
    configurable: [],
    accessMethods: [
      { platform: '微信小程序H5接入', desc: '在微信小程序内嵌的H5页面中引入共享登录态SDK，小程序使用passport登录后，H5页面自动实现静默登录，无需用户二次授权或弹窗确认。' }
    ],
    access: '接入共享登录态SDK，在微信小程序环境下使用。',
    flowGroups: [
      {
        title: '共享登录态SDK 接入流程',
        steps: ['确认业务在微信小程序内嵌H5场景', '联系账号PM确认接入需求', '在H5页面引入共享登录态SDK的JS文件', '配置SDK初始化参数', '验证静默登录态获取是否正常', '上线发布'],
        docs: [
          { title: '共享登录态SDK接入文档', url: 'https://km.sankuai.com/collabpage/2727116592' }
        ]
      }
    ],
    flow: ['申请接入', '集成SDK', '环境配置', '测试验证'],
    docs: [
      { title: '共享登录态SDK接入文档', url: 'https://km.sankuai.com/collabpage/2727116592' }
    ]
  },
  'login-problem': {
    title: '遇到问题',
    category: '账号登录功能',
    desc: '<strong>使用场景</strong><br>遇到问题页面适用于<strong>用户在登录过程中遇到困难</strong>的场景，如忘记上次登录的账号、登录时被风控拦截、账号被冻结等情况。该页面为用户提供统一的自助解决入口，内置于登录流程中。<br><br><strong>使用功能</strong><br>遇到问题页面包含多个自助解决功能入口：找回密码、手机号换绑、找回账号、常见问题、账号被连续冻结等，底部提供在线客服联系方式。页面通过KNB桥获取用户手机号、区号、joinKey等信息，为后续找回密码等操作提供参数。<br>线上地址：<a href="https://mtaccount.meituan.com/user/problem" target="_blank">https://mtaccount.meituan.com/user/problem</a><br><br><strong>可配置能力</strong><br>页面依赖KNB桥能力（getStorage获取手机号/区号/joinKey/AppKey、getUA/getAppInfo获取系统信息等）。业务方接入时需确保App已支持相关KNB桥，iOS的Titans版本需 >= 11.21.35。页面内各功能入口的跳转链接由账号侧统一管理。',
    images: [
      { url: 'https://km.sankuai.com/api/file/cdn/199365276/51915011991?contentType=1&isNewContent=false', caption: '遇到问题页面' }
    ],
    configurable: [],
    accessMethods: [
      { platform: 'App内URL跳转接入', desc: '通过URL跳转方式在App内打开遇到问题页面。线上地址：https://mtaccount.meituan.com/user/problem。页面依赖KNB桥能力（getStorage/getUA/getAppInfo等），iOS Titans版本需 >= 11.21.35。' }
    ],
    access: '内置于登录流程，通过URL跳转方式接入。',
    flowGroups: [
      {
        title: '遇到问题页 接入流程',
        steps: ['确认App已支持KNB桥能力（getStorage/getUA/getAppInfo等）', '确认iOS Titans版本 >= 11.21.35', '在登录流程中配置跳转URL', '验证各功能入口跳转正常', '上线发布'],
        docs: [
          { title: '遇到问题页接入文档', url: 'https://km.sankuai.com/collabpage/199365276' }
        ]
      }
    ],
    flow: ['确认接入环境', '配置KNB桥', 'URL跳转集成', '测试验证'],
    docs: [
      { title: '遇到问题页接入文档', url: 'https://km.sankuai.com/collabpage/199365276' }
    ]
  },
  'reset-password': {
    title: '找回密码',
    category: '账号登录功能',
    desc: '<strong>使用场景</strong><br>找回密码页面适用于<strong>用户忘记登录密码，需要重新设置密码</strong>的场景。支持在未登录状态下，通过手机号+验证的方式完成密码重置。同时提供PC端找回密码页面。<br><br><strong>使用功能</strong><br>找回密码流程包括：手机号输入（支持传入区号countryCode和手机号phoneNumber自动填充）→环境检测→风控验证（支持短信验证、人脸验证、支付密码验证、三方验证、客服验证等多种方式）→重置密码。<br>线上地址：<a href="https://mtaccount.meituan.com/user/retrieve-password" target="_blank">https://mtaccount.meituan.com/user/retrieve-password</a><br><br><strong>可配置能力</strong><br>支持通过URL参数传入countryCode（区号，默认86）和phoneNumber（手机号）自动填充输入框。依赖KNB桥能力（setLLButton设置标题栏、getStorage获取手机号加密公钥/密码公钥、openPage打开新页面等）。支持通过meituan.getUIConfig桥读取配置颜色实现按钮样式自定义。',
    images: [
      { url: 'assets/reset_password.png', caption: '找回密码页面' }
    ],
    configurable: [],
    accessMethods: [
      { platform: '移动端H5接入', desc: '通过URL跳转方式在App内打开找回密码页面。线上地址：https://mtaccount.meituan.com/user/retrieve-password，支持传入countryCode和phoneNumber参数自动填充。依赖KNB桥能力。' },
      { platform: 'PC端接入', desc: 'PC端找回密码页面通过URL跳转接入，适用于PC端用户忘记密码的场景。' }
    ],
    access: '通过URL跳转方式接入，支持移动端H5和PC端。',
    flowGroups: [
      {
        title: '找回密码 接入流程',
        steps: ['确认App已支持KNB桥（setLLButton/getStorage/openPage等）', '配置跳转URL及参数（countryCode/phoneNumber）', '确认风控验证方式可正常展示（短信/人脸/支付密码等）', '验证密码重置完整流程', '上线发布'],
        docs: [
          { title: '未登录找回密码接入文档', url: 'https://km.sankuai.com/collabpage/1802765208' },
          { title: 'PC找回密码页接入文档', url: 'https://km.sankuai.com/collabpage/2727049937' }
        ]
      }
    ],
    flow: ['配置URL参数', '集成KNB桥', '对接验证流程', '测试'],
    docs: [
      { title: '未登录找回密码接入文档', url: 'https://km.sankuai.com/collabpage/1802765208' },
      { title: 'PC找回密码页接入文档', url: 'https://km.sankuai.com/collabpage/2727049937' }
    ]
  },
  'find-account': {
    title: '找回账号',
    category: '账号登录功能',
    desc: '<strong>使用场景</strong><br>找回账号功能适用于<strong>用户忘记之前使用的账号，需要通过身份验证找回账号</strong>的场景。通常发生在用户久未登录、更换手机号后无法确认原账号等情况。<br><br><strong>使用功能</strong><br>找回账号流程包括：用户通过手机号定位账号，经过人脸验证确认身份后即可自动登录到对应账号。该功能内置于登录流程，用户可通过"遇到问题"页面进入。<br><br><strong>可配置能力</strong><br>该功能内置于登录流程，通过URL跳转方式接入，主要配置为验证方式（人脸验证）和跳转参数。业务方接入时无需额外开发，只需在登录流程中正确配置跳转URL即可。',
    images: [
      { url: 'assets/find_account.png', caption: '找回账号页面' }
    ],
    configurable: [],
    accessMethods: [
      { platform: 'App内URL跳转接入', desc: '内置于登录流程中，用户通过"遇到问题"页面进入找回账号功能。业务方通过URL跳转方式接入，无需额外开发，页面自动完成手机号定位和人脸验证流程。' }
    ],
    access: '内置于登录流程，通过URL跳转方式接入。',
    flowGroups: [
      {
        title: '找回账号 接入流程',
        steps: ['确认登录流程已接入"遇到问题"页面', '配置找回账号跳转URL', '验证人脸识别流程正常', '验证找回后自动登录正常', '上线发布'],
        docs: [
          { title: '找回账号页', url: 'https://passport.meituan.com/account-fusion/index.html' }
        ]
      }
    ],
    flow: ['URL跳转接入', '配置参数', '测试验证'],
    docs: [
      { title: '找回账号页', url: 'https://passport.meituan.com/account-fusion/index.html' }
    ]
  },
  'switch-account': {
    title: '切换账号',
    category: '账号登录功能',
    desc: '<strong>使用场景</strong><br>切换账号功能适用于<strong>用户在已登录状态下需要切换到其他账号</strong>的场景。支持用户在已登录的账号列表中快速切换，无需先退出再重新登录，提升多账号用户的使用体验。<br><br><strong>使用功能</strong><br>换登页面展示用户在该设备上登录过的所有账号列表，支持切换登录、新账号登录、移除指定账号等操作。切换成功后等待0.5秒自动跳转到指定页面。页面只有桥交互，不涉及后端接口，因此test和prod环境都可以登录线上账号和测试账号。<br>线上地址：<a href="https://passport.meituan.com/useraccount/switchuser" target="_blank">https://passport.meituan.com/useraccount/switchuser</a><br><br><strong>可配置能力</strong><br>必须传入success_url参数（encode后的换登成功回跳地址，支持native地址和http/https地址）。需要客户端支持KNB通用桥并接入账号SDK（iOS SDK >= 5.35.2，Android SDK >= 5.49.20）。若回跳地址属于Tab类地址，需提前至少1周联系账号侧进行配置。',
    images: [
      { url: 'assets/switch_account.png', caption: '切换账号页面' }
    ],
    configurable: [],
    accessMethods: [
      { platform: 'App内URL跳转接入', desc: '通过URL跳转方式打开换登页面。必须传入success_url参数（encode后的回跳地址）。需要客户端支持KNB通用桥并接入账号SDK（iOS >= 5.35.2，Android >= 5.49.20）。页面仅桥交互，不涉及后端接口。' }
    ],
    access: '内置于登录流程，通过URL跳转方式接入。',
    flowGroups: [
      {
        title: '切换账号 接入流程',
        steps: ['确认客户端已接入账号SDK（iOS >= 5.35.2，Android >= 5.49.20）', '确认客户端支持KNB通用桥', '配置跳转URL并传入success_url参数', '如回跳地址属于Tab类，提前1周联系账号侧配置', '验证切换登录和回跳流程正常', '上线发布'],
        docs: [
          { title: '账号换登页接入文档', url: 'https://km.sankuai.com/collabpage/1302733338' }
        ]
      }
    ],
    flow: ['URL跳转接入', '测试验证'],
    docs: [
      { title: '账号换登页接入文档', url: 'https://km.sankuai.com/collabpage/1302733338' }
    ]
  },
  'personal-info': {
    title: '个人信息',
    category: '账号管理功能',
    desc: '<strong>使用场景</strong><br>个人信息页面适用于<strong>用户查看和编辑个人资料信息</strong>的场景，包括昵称、头像、性别、生日、简介、收货地址等基本身份资料。需要在已登录且App环境内打开。接入前需联系账号PM确认接入需求，并同步联系后端进行joinkey配置，否则会存在审核问题。<br><br><strong>使用功能</strong><br>个人信息页提供用户资料的查看和编辑能力，包括昵称、头像、性别、生日、简介、收货地址等。头像和昵称的修改存在"先审后发"和"回删"机制，修改后会轮询3秒，若未完成审核则需用户重新触发获取时才生效。收货地址在美团App 12.3.400及以上使用MSC版本，其他版本使用H5版本。<br>线上地址：<a href="https://mtaccount.meituan.com/user/person-info?source=group" target="_blank">https://mtaccount.meituan.com/user/person-info?source=group</a><br><br><strong>可配置能力</strong><br>支持配置展示哪些条目（生日、收货地址、头像、昵称、简介是否展示）。必须传入source参数（业务方自行定义key后联系账号侧配置），可选传入channel（业务渠道参数）和cid（入口页面cid）。需要客户端支持KNB通用桥并接入账号SDK（iOS >= 5.39.4，Android >= 5.56.10）。头像和昵称的修改存在"先审后发"和"回删"机制，因此不是实时生效且存在被删除的可能性。',
    images: [
      { url: 'assets/personal_info.png', caption: '个人信息页面' }
    ],
    configurable: [],
    accessMethods: [
      { platform: 'App内URL跳转接入', desc: '通过URL跳转方式在App内打开个人信息页。线上地址：https://mtaccount.meituan.com/user/person-info?source=xxx。必须传入source参数，可选channel和cid。需在已登录状态且App环境内打开，依赖KNB通用桥和账号SDK（iOS >= 5.39.4，Android >= 5.56.10）。' }
    ],
    access: '通过URL跳转方式接入，需在已登录且APP环境内打开。',
    flowGroups: [
      {
        title: '个人信息页 接入流程',
        steps: ['联系账号PM确认接入需求', '同步联系后端进行joinkey配置', '定义source参数key并联系账号侧配置', '确认客户端已接入账号SDK（iOS >= 5.39.4，Android >= 5.56.10）', '确认客户端支持KNB通用桥', '配置展示条目（生日/收货地址/头像/昵称/简介）', '联调测试（注意先审后发机制）', '上线发布'],
        docs: [
          { title: '个人信息页接入文档', url: 'https://km.sankuai.com/collabpage/1802880710' }
        ]
      }
    ],
    flow: ['联系账号PM', '申请source参数', '接入账号SDK', '配置KNB桥', '联调上线'],
    docs: [
      { title: '个人信息页接入文档', url: 'https://km.sankuai.com/collabpage/1802880710' }
    ]
  },
  'account-security': {
    title: '账号安全',
    category: '账号管理功能',
    desc: '<strong>使用场景</strong><br>安全中心页面适用于<strong>用户需要管理账号安全设置</strong>的场景，包括修改密码、管理三方绑定、设备管理、注销账号等。业务App接入后，用户可在App内直接访问账号安全管理功能，无需跳转到外部页面。<br><br><strong>使用功能</strong><br>安全中心页面提供以下账号安全管理能力：手机号管理（换绑手机号）、修改登录密码、管理三方绑定（微信/QQ等社交账号绑定）、设备管理、注销账号入口。页面内置人脸识别模块和用户协议页面。跳链上需传入service参数，否则只能走默认配置。<br>线上地址：<a href="https://mtaccount.meituan.com/user/safety-center" target="_blank">https://mtaccount.meituan.com/user/safety-center</a><br><br><strong>可配置能力</strong><br>安全中心页面通过service参数区分不同业务方配置。业务方需确认是否支持yoda://协议（用于打开原生页面）。密码安全等级规则可配置，不同业务方的用户协议链接可单独配置。依赖KNB桥能力（包括uaInfo、subscribe、getStorage、getUserInfo、getAppInfo、getDeviceInfo、openPage、Semver等）。',
    images: [
      { url: 'assets/account_security.png', caption: '账号安全页面' }
    ],
    configurable: [],
    accessMethods: [
      { platform: 'App内URL跳转接入', desc: '通过URL跳转方式在App内打开安全中心页面。线上地址：https://mtaccount.meituan.com/user/safety-center?service=xxx。必须传入service参数区分业务方配置，依赖KNB桥能力，需确认App是否支持yoda://协议。' }
    ],
    access: '通过URL跳转方式接入，需传入service参数。',
    flowGroups: [
      {
        title: '安全中心页 接入流程',
        steps: ['联系账号PM确认接入需求', '申请service参数并联系账号侧配置', '确认客户端支持KNB桥（uaInfo/getStorage/getUserInfo/openPage等）', '确认是否支持yoda://协议（用于打开原生页面）', '按需配置密码安全等级规则和用户协议链接', '联调测试（验证手机号管理/密码修改/三方绑定等功能）', '上线发布'],
        docs: [
          { title: '安全中心页接入文档', url: 'https://km.sankuai.com/collabpage/211091051' }
        ]
      }
    ],
    flow: ['申请service参数', '配置KNB桥', '确认yoda协议', '集成测试', '上线'],
    docs: [
      { title: '安全中心页接入文档', url: 'https://km.sankuai.com/collabpage/211091051' }
    ]
  },
  'account-cancel': {
    title: '账号注销',
    category: '账号管理功能',
    desc: '<strong>使用场景</strong><br>账号注销页面适用于<strong>业务App需要提供账号注销入口以满足合规要求</strong>的场景。分为全APP注销（仅美团APP）和单APP注销（其他所有App），接入前必须联系账号PM确认接入需求，并与风控侧确认相关风控参数。<br><br><strong>使用功能</strong><br>账号注销页面提供完整的注销流程：注销首页提示→资产确认→资产阻塞检查→注销原因填写→注销确认。支持通过KNB.publish发送注销成功广播（局部广播和全局广播），业务方可监听注销结果并执行对应业务逻辑。已支持鸿蒙系统适配（标准化KNB容器）。注意：注销后token已失效，不可用于获取用户信息。<br><br><strong>可配置能力</strong><br>前端配置：通过URL query参数配置appName、cancelAll、cancelChannel、风控参数（risk_app/risk_platform/risk_partner）、注销成功回跳地址（succ_url）等。通过Lion配置支持自定义注销首页和资产阻塞页的文案内容（appText、tipsText、warningTextList、agreementLink、bottomText等）。后端配置：支持配置资产确认页和阻塞页的资产项、注销原因列表。按钮和选择框色值可通过meituan.getUIConfig桥配置。',
    images: [
      { url: 'assets/account_cancel.png', caption: '账号注销页面' }
    ],
    configurable: [],
    accessMethods: [
      { platform: '全APP注销（仅美团APP）', desc: '注销美团APP下全部账号数据。通过URL跳转接入，配置cancelAll=true。仅限美团APP使用。' },
      { platform: '单APP注销（其他App）', desc: '仅注销当前App下的账号数据。通过URL跳转接入，配置cancelAll=false及cancelChannel参数标识当前App。适用于除美团APP外的所有业务App。' }
    ],
    access: '通过URL跳转方式接入，需配置query参数。',
    flowGroups: [
      {
        title: '账号注销 接入流程',
        steps: ['联系账号PM确认接入需求（全APP/单APP注销）', '与风控侧确认风控参数（risk_app/risk_platform/risk_partner）', '配置URL query参数（appName/cancelAll/cancelChannel/风控参数/succ_url等）', '联系账号侧通过Lion配置注销页文案内容', '对接KNB.publish注销结果广播监听', '联调测试（验证注销完整流程和广播回调）', '上线发布'],
        docs: [
          { title: '账号注销页接入文档', url: 'https://km.sankuai.com/collabpage/2727427245' }
        ]
      }
    ],
    flow: ['联系账号PM', '获取风控参数', '配置query参数', 'Lion文案配置', '广播监听对接', '测试上线'],
    docs: [
      { title: '账号注销页接入文档', url: 'https://km.sankuai.com/collabpage/2727427245' }
    ]
  },
  'info-view': {
    title: '个人信息查阅',
    category: '账号管理功能',
    desc: '<strong>使用场景</strong><br>个人信息查阅页面是<strong>为满足《个人信息保护法》合规要求</strong>而提供的功能，业务App接入后可让用户查阅当前账号关联的个人信息，满足用户个人信息查阅权。<br><br><strong>使用功能</strong><br>个人信息查阅页面支持用户查看当前账号的个人信息，包括账号信息（用户ID、注册时间等）、设备信息（登录设备等）、应用相关信息。通过URL跳转方式接入。<br><br><strong>可配置能力</strong><br>个人信息查阅页面主要为合规标准功能，配置项较少。业务方通过URL跳转接入后即可使用，展示内容由账号侧统一控制。',
    images: [
      { url: 'assets/info_view.png', caption: '个人信息查阅页面' }
    ],
    configurable: [],
    accessMethods: [
      { platform: 'App内URL跳转接入', desc: '通过URL跳转方式在App内打开个人信息查阅页面。为合规标准功能，展示内容由账号侧统一控制，业务方接入后即可使用。需确保用户已登录。' }
    ],
    access: '通过URL跳转方式接入，为合规标准功能。',
    flowGroups: [
      {
        title: '个人信息查阅 接入流程',
        steps: ['联系账号PM确认接入需求', '确认用户已登录（未登录无法使用）', '配置URL跳转接入', '验证个人信息展示正常', '上线发布'],
        docs: [
          { title: '个人信息查阅与管理页接入文档', url: 'https://km.sankuai.com/page/1211079638' }
        ]
      }
    ],
    flow: ['申请权限', 'URL跳转接入', '测试验证'],
    docs: [
      { title: '个人信息查阅与管理页接入文档', url: 'https://km.sankuai.com/page/1211079638' }
    ]
  },
  'info-download': {
    title: '个人信息下载',
    category: '账号管理功能',
    desc: '<strong>使用场景</strong><br>个人信息下载页面是<strong>为满足合规要求，支持用户将账号个人信息导出</strong>的功能。用户可通过该页面将账号信息以邮件方式发送给自己。可单独接入个人信息下载页面，也可接入包含个人信息下载的隐私管理页面。<br><br><strong>使用功能</strong><br>个人信息下载页面支持用户通过短信验证后，将账号信息以邮件形式发送到用户邮箱。导出信息包括用户名、头像、手机号、账号注册时间等。接入前需确保用户已登录，未登录情况下页面功能无法使用。<br>单独接入地址：<a href="https://passport.meituan.com/useraccount/messagedownload" target="_blank">https://passport.meituan.com/useraccount/messagedownload</a><br><br><strong>可配置能力</strong><br>支持自定义发件人和发件邮箱（默认发件人为"美团"，默认邮箱为it_meituan@meituan.com）。支持自定义邮件模板（可完全使用美团模板、部分替换图标/来源/按钮颜色、或提供完全自定义的HTML模板）。必传参数：joinkey和packageName，可选配置短信模板、页面颜色等。依赖KNB桥能力。',
    images: [
      { url: 'assets/info_download.png', caption: '个人信息下载页面' }
    ],
    configurable: [],
    accessMethods: [
      { platform: '单独接入个人信息下载页', desc: '通过URL跳转方式单独接入个人信息下载页。地址：https://passport.meituan.com/useraccount/messagedownload。必传joinkey和packageName参数，需确保用户已登录。依赖KNB桥能力。' },
      { platform: '接入隐私管理页面', desc: '接入包含个人信息下载的隐私管理页面，同时提供个人信息查阅和下载功能。适用于需要一站式合规管理的场景。' }
    ],
    access: '通过URL跳转方式接入，支持单独接入或通过隐私管理页面接入。',
    flowGroups: [
      {
        title: '个人信息下载 接入流程',
        steps: ['联系账号前端确认接入参数', '申请joinkey（必传）', '配置packageName参数（必传）', '按需配置发件人、发件邮箱和邮件模板', '确认客户端支持KNB桥', '联调测试（验证短信验证和邮件发送流程）', '上线发布'],
        docs: [
          { title: '个人信息下载接入文档', url: 'https://km.sankuai.com/collabpage/1214627438' }
        ]
      }
    ],
    flow: ['联系前端确认参数', '申请yoda接入', '配置发件信息', 'KNB桥对接', '测试上线'],
    docs: [
      { title: '个人信息下载接入文档', url: 'https://km.sankuai.com/collabpage/1214627438' }
    ]
  },
  'user-query': {
    title: '账号信息查询',
    category: '后端接口能力',
    desc: '提供用户信息查询服务，包括基础身份信息（用户ID、用户名、美团号等）、个人档案信息（昵称、邮箱、性别等）、联系方式信息（手机号码、邮箱地址等）、行为统计信息（登录次数、最后登录时间等）。支持单个用户查询和批量查询。',
    images: [],
    configurable: [
      '基础身份信息（用户ID、用户名、美团号、账户状态、注册信息等）',
      '个人档案信息（昵称、邮箱、性别、生日、城市、头像等）',
      '联系方式信息（手机号码、邮箱地址、地址信息等）',
      '行为统计信息（登录次数、最后登录时间、注册时间等）',
      '支持单个和批量查询'
    ],
    access: '后端接口调用，基于有效登录态（Token）获取用户详细信息。',
    flow: ['申请接口权限', '获取Token', '调用查询接口', '处理返回数据'],
    docs: [
      { title: '用户信息查询', url: 'https://km.sankuai.com/collabpage/2726682601' },
      { title: '用户信息查询接口', url: 'https://km.sankuai.com/collabpage/2726751951' },
      { title: '用户信息批量查询接口', url: 'https://km.sankuai.com/collabpage/2726593091' }
    ]
  },
  'third-query': {
    title: '三方信息查询服务',
    category: '后端接口能力',
    desc: '提供查询三方信息的接口，管理用户与外部平台账号绑定关系。支持获取身份标识（UniqueID、OpenID等）、用户资料（昵称、头像等）、授权范围、绑定状态等信息。',
    images: [],
    configurable: [
      '身份标识（UniqueID、OpenID等）',
      '用户资料（昵称、头像等）',
      '授权范围信息',
      '绑定状态（时间、来源等元数据）'
    ],
    access: '后端接口调用。',
    flow: ['申请接口权限', '确认查询字段', '接口调用开发', '测试验证'],
    docs: [
      { title: '第三方信息', url: 'https://km.sankuai.com/collabpage/2726912042' },
      { title: '接口文档', url: 'https://km.sankuai.com/collabpage/2726559032' },
      { title: '详细说明', url: 'https://km.sankuai.com/collabpage/2726766899' }
    ]
  },
  'token-verify': {
    title: '用户登录态校验',
    category: '后端接口能力',
    desc: '校验Token有效性，确认用户登录状态。采用双层验证架构：强校验和弱校验。Token有效期：美团和点评token有效期为180天，点评侧除APP端外token有效期都是31天。',
    images: [],
    configurable: [
      '强校验（核心身份验证，常规业务推荐）',
      '弱校验（轻量级，高并发非敏感场景）',
      'Token有效期：美团180天，点评非APP端31天',
      '支持自动续期',
      '主动失效（修改密码/状态异常/解换绑/踢蹬）'
    ],
    access: '后端接口调用。',
    flow: ['确认校验级别', '申请接口权限', '集成校验接口', '处理校验结果'],
    docs: [
      { title: '用户登录态校验', url: 'https://km.sankuai.com/collabpage/2726562261' },
      { title: '用户登录态强校验', url: 'https://km.sankuai.com/collabpage/2726074083' },
      { title: '用户登录态弱校验', url: 'https://km.sankuai.com/collabpage/2726323672' },
      { title: '接口文档', url: 'https://km.sankuai.com/collabpage/2726651991' }
    ]
  },
  'fusion-query': {
    title: '融合关系查询',
    category: '后端接口能力',
    desc: '查询用户在美团生态内的跨平台账号绑定关系。虚绑定：为跨平台业务访问提供ID映射，虚ID不能登录，关系固定不变。实绑定：基于手机号建立真正的账号绑定关系，统一登录/密码同步/状态同步，会随手机号换绑而变化。',
    images: [],
    configurable: [
      '虚绑定（ID映射，不可登录，关系固定）',
      '实绑定（手机号绑定，可登录，随换绑变化）',
      '美团账号ID查询',
      '关联业务账号ID查询'
    ],
    access: '后端接口调用。',
    flow: ['确认查询类型', '申请接口权限', '接口集成', '测试验证'],
    docs: [
      { title: '账号融合', url: 'https://km.sankuai.com/collabpage/2726865727' },
      { title: '接口文档', url: 'https://km.sankuai.com/collabpage/2727332633' },
      { title: '详细说明', url: 'https://km.sankuai.com/collabpage/2727104547' }
    ]
  },
  'cancel-asset': {
    title: '注销资产校验服务',
    category: '后端接口能力',
    desc: '用户发起账号注销流程时，账号服务对账号关联的各类资产进行核查与处理，确保用户注销前相关资产已妥善处理。',
    images: [],
    configurable: [
      '资产核查',
      '关联业务检查',
      '注销前置校验'
    ],
    access: '后端接口调用。',
    flow: ['接入资产校验接口', '配置校验规则', '处理校验结果', '测试验证'],
    docs: [
      { title: '资产校验', url: 'https://km.sankuai.com/collabpage/2726858377' },
      { title: '详细说明和接入文档', url: 'https://km.sankuai.com/collabpage/2727514425' }
    ]
  },
  'msg-notify': {
    title: '账号消息变动通知',
    category: '后端接口能力',
    desc: '提供账号变动的消息通知服务，当用户信息发生变化时通过Mafka消息队列主动推送。支持的消息类型包括：SOURCE（注册渠道）、MOBILE（手机号变化）、BIRTHDAY（生日变化）、THIRD（三方绑定关系变化）。',
    images: [],
    configurable: [
      'SOURCE（用户注册渠道标记）',
      'MOBILE（手机号变化）',
      'BIRTHDAY（生日变化）',
      'THIRD（三方绑定关系变化）',
      '其他账号消息监听'
    ],
    access: '消息订阅，通过Mafka消息队列接入。目前处于从历史消息服务到新SDK过渡阶段。',
    flow: ['确认订阅消息类型', '申请Mafka Topic', '消费者开发', '消息处理逻辑', '上线监控'],
    docs: [
      { title: '消息同步服务', url: 'https://km.sankuai.com/collabpage/2726830899' }
    ]
  },
  'admin-tool': {
    title: '用户信息管理和查询工具',
    category: '后端接口能力',
    desc: '用户管理中心后台，提供查看用户信息、注销、恢复注销（高危操作）功能。申请用户离线表，查询相关用户信息需进行权限申请。',
    images: [],
    configurable: [],
    access: '业务方申请相关权限后登录管理中心页面，申请离线表数据权限。',
    flow: ['确认查询需求', '申请管理中心权限', '申请离线表权限', '登录后台操作'],
    docs: [
      { title: '账号管理与运维', url: 'https://km.sankuai.com/collabpage/2727446178' },
      { title: '用户信息管理后台', url: 'https://km.sankuai.com/collabpage/2727680177' },
      { title: '用户中心离线表接入文档', url: 'https://km.sankuai.com/collabpage/2727585039' }
    ]
  },
  'risk-control': {
    title: '账号风控',
    category: '安全风控',
    desc: '保障公司内所有业务线用户账号安全基线，防护用户数据安全，降低集团资损。',
    images: [],
    configurable: [],
    access: '业务不直接与风控交互，由账号代完成；业务（分端）需要接入底层依赖。',
    flow: ['确认业务场景', '联系账号PM', '接入底层依赖', '风控策略配置', '联调测试'],
    docs: [
      { title: '用户账户安全介绍', url: 'https://km.sankuai.com/collabpage/1310688486' },
      { title: '账户风控接入SOP', url: 'https://km.sankuai.com/collabpage/1025460767' }
    ]
  },
  'guard': {
    title: 'Guard（终端防御）',
    category: '安全风控',
    desc: '确保各端安全。主要具备验签、设备指纹采集、设备唯一ID生成三种能力，移动端安全防护的第一环。',
    images: [],
    configurable: [
      '验签能力',
      '设备指纹采集',
      '设备唯一ID生成',
      '支持Android/iOS/小程序/H5'
    ],
    access: '客户端、小程序均需要接入并初始化。',
    flow: ['确认接入端', '引入对应SDK', '初始化配置', '验签集成', '设备指纹采集'],
    docs: [
      { title: '终端防御产品总览', url: 'https://km.sankuai.com/collabpage/702756443' },
      { title: 'MTGuard - Android', url: 'https://km.sankuai.com/collabpage/542244767' },
      { title: 'SAKGuard - iOS', url: 'https://km.sankuai.com/collabpage/1200099990' },
      { title: 'JSGuard - 小程序', url: 'https://km.sankuai.com/collabpage/542162073' },
      { title: 'H5Guard', url: 'https://km.sankuai.com/collabpage/1142500639' }
    ]
  },
  'yoda': {
    title: 'Yoda（验证服务）',
    category: '安全风控',
    desc: '当账号出现风险，需要根据不同的风险等级提供进一步的验证服务。Yoda提供的验证能力涵盖短信验证、人脸验证、人机验证、身份验证等几类验证方式，避免各业务线重复开发验证功能。',
    images: [],
    configurable: [
      '短信验证',
      '人脸验证',
      '人机验证',
      '身份验证',
      '客户端/小程序集成Yoda SDK',
      'H5端无需单独接入'
    ],
    access: '客户端、小程序需要集成Yoda SDK；H5端无需单独接入。',
    flow: ['确认验证场景', '选择验证方式', '集成Yoda SDK', '配置风控策略', '联调测试'],
    docs: [
      { title: 'Yoda Native接入', url: 'https://km.sankuai.com/collabpage/1969377983' },
      { title: 'Yoda 小程序接入', url: 'https://km.sankuai.com/collabpage/1212428694' }
    ]
  },
  'joinkey': {
    title: 'joinkey（业务准入配置）',
    category: '接入参数配置',
    desc: 'joinkey是用户中心登录鉴权系统的核心参数，用于保证用户中心清晰了解业务调用来源以及业务调用安全。所有接入账号SDK的业务必须申请joinkey。申请后会同时获得riskApp、riskPlatform、partner三个风控参数。',
    images: [],
    configurable: [],
    access: '在用户中心后台申请接入。国内线上地址：http://admin-user.sankuai.com/service/normal/sdk-join/apply/new-apply。提交申请后风控同学会审核并分配参数，通常3小时内完成。线下申请的joinkey只能访问线下环境，线上申请的可访问线上和线下。',
    flow: ['登录用户中心后台', '填写申请信息', '提交审核', '风控审核（约3小时）', '获取joinkey及风控参数'],
    docs: [
      { title: 'SDK joinkey申请接入流程', url: 'https://km.sankuai.com/page/129939492' }
    ]
  },
  'tokenid': {
    title: 'tokenid（登录准入配置）',
    category: '接入参数配置',
    desc: 'tokenid是用户中心登录准入配置参数，用于Token管理和登录态控制。业务接入登录SDK时必须申请。',
    images: [],
    configurable: [],
    access: '通过Token管理系统申请接入。',
    flow: ['确认接入需求', '登录Token管理系统', '填写申请', '审批通过', '获取tokenid'],
    docs: [
      { title: 'Token管理接入', url: 'https://km.sankuai.com/collabpage/228050169' }
    ]
  },
  'third-auth': {
    title: '第三方授权参数',
    category: '接入参数配置',
    desc: '接入三方登录（微信、QQ等）时需要申请的授权参数，用于实现第三方平台的OAuth授权登录。',
    images: [],
    configurable: [],
    access: '接入三方登录时向对应平台申请授权参数。',
    flow: ['确认三方平台', '向平台申请授权', '获取授权参数', '配置到业务系统', '联调测试'],
    docs: [
      { title: 'H5三方联合登录接入说明', url: 'https://km.sankuai.com/collabpage/1436347241' }
    ]
  },
  'risk-params': {
    title: '风控参数',
    category: '接入参数配置',
    desc: 'risk_app / risk_platform / risk_partner 三个参数是账号安全风控体系的核心配置，用于标识业务来源和风控策略。申请joinkey时会一并分配，无需单独申请。',
    images: [],
    configurable: [],
    access: '随joinkey申请自动分配，无需单独申请。',
    flow: ['申请joinkey', '自动获得风控参数', '配置到业务系统'],
    docs: []
  }
};

// ============ 路由管理 ============
var currentPage = 'home';
var currentDetail = null;

function navigate(page, detailId) {
  // 隐藏所有页面
  var pages = document.querySelectorAll('.page');
  for (var i = 0; i < pages.length; i++) {
    pages[i].classList.remove('active');
  }
  
  // 更新导航状态
  var links = document.querySelectorAll('.nav-link');
  for (var i = 0; i < links.length; i++) {
    links[i].classList.remove('active');
  }
  
  if (page === 'home') {
    document.getElementById('page-home').classList.add('active');
    var homeLink = document.querySelector('[data-page="home"]');
    if (homeLink) homeLink.classList.add('active');
    currentPage = 'home';
  } else if (page === 'mrd') {
    document.getElementById('page-mrd').classList.add('active');
    var mrdLink = document.querySelector('[data-page="mrd"]');
    if (mrdLink) mrdLink.classList.add('active');
    currentPage = 'mrd';
  } else if (page === 'detail') {
    renderDetail(detailId);
    document.getElementById('page-detail').classList.add('active');
    currentPage = 'detail';
    currentDetail = detailId;
  }
  
  // 滚动到顶部
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 锚点滚动：先确保在首页，再滚动到对应section
function scrollToSection(sectionId) {
  // 先切到首页
  var pages = document.querySelectorAll('.page');
  for (var i = 0; i < pages.length; i++) {
    pages[i].classList.remove('active');
  }
  document.getElementById('page-home').classList.add('active');
  currentPage = 'home';

  // 更新导航高亮
  var links = document.querySelectorAll('.nav-link');
  for (var i = 0; i < links.length; i++) {
    links[i].classList.remove('active');
  }
  var targetLink = document.querySelector('[data-page="' + sectionId + '"]');
  if (targetLink) targetLink.classList.add('active');

  // 滚动到目标section，留出header高度
  var target = document.getElementById(sectionId);
  if (target) {
    var headerH = document.querySelector('.header').offsetHeight || 64;
    var top = target.getBoundingClientRect().top + window.pageYOffset - headerH - 16;
    window.scrollTo({ top: top, behavior: 'smooth' });
  }
}

function renderDetail(id) {
  var data = featureData[id];
  if (!data) return;
  
  // 功能截图 + 功能介绍：左图右文（支持视频）
  var introSectionHtml = '';
  var imgItems = '';
  if (data.images && data.images.length > 0) {
    for (var i = 0; i < data.images.length; i++) {
      var fileUrl = data.images[i].url;
      var isVideo = fileUrl.indexOf('.mp4') !== -1 || fileUrl.indexOf('.webm') !== -1;
      if (isVideo) {
        imgItems += '<div class="img-item"><video src="' + fileUrl + '" controls preload="metadata" style="width:100%;border-radius:8px;"></video><div class="img-caption">' + data.images[i].caption + '</div></div>';
      } else {
        imgItems += '<div class="img-item"><img src="' + fileUrl + '" alt="' + data.images[i].caption + '" loading="lazy"><div class="img-caption">' + data.images[i].caption + '</div></div>';
      }
    }
  }
  var imgGridClass = 'detail-images';
  var introLayoutClass = 'detail-lr-layout';
  if (data.images && data.images.length === 1) {
    imgGridClass += ' detail-images--single';
    introLayoutClass += ' detail-lr-layout--single';
  }
  if (data.images && data.images.length > 0) {
    introSectionHtml = '<div class="detail-section"><h3>功能介绍</h3><div class="' + introLayoutClass + '"><div class="detail-lr-left"><div class="' + imgGridClass + '">' + imgItems + '</div></div><div class="detail-lr-right"><p class="lr-intro">' + data.desc + '</p></div></div></div>';
  } else {
    introSectionHtml = '<div class="detail-section"><h3>功能介绍</h3><p class="lr-intro">' + data.desc + '</p></div>';
  }
  
  // 可配置内容：左图右文
  var configHtml = '';
  if (data.configurable && data.configurable.length > 0) {
    var configItems = '';
    for (var i = 0; i < data.configurable.length; i++) {
      configItems += '<li>' + data.configurable[i] + '</li>';
    }
    var configImgHtml = '';
    if (data.configImages && data.configImages.length > 0) {
      var configImgClass = 'detail-images--config';
      if (data.configImages.length === 1) {
        configImgClass += ' detail-images--config-single';
      }
      configImgHtml = '<div class="' + configImgClass + '">';
      for (var i = 0; i < data.configImages.length; i++) {
        configImgHtml += '<div class="img-item"><img src="' + data.configImages[i].url + '" alt="' + data.configImages[i].caption + '" loading="lazy"><div class="img-caption">' + data.configImages[i].caption + '</div></div>';
      }
      configImgHtml += '</div>';
    }
    configHtml = '<div class="detail-section"><h3>可配置内容</h3><div class="detail-lr-layout"><div class="detail-lr-left">' + configImgHtml + '</div><div class="detail-lr-right"><h4 style="font-size:15px;font-weight:600;color:#EDEDEF;margin-bottom:16px;">支持配置项</h4><div class="detail-config"><ul>' + configItems + '</ul></div></div></div></div>';
  }
  
  // 接入方式（结构化）
  var accessHtml = '';
  if (data.accessMethods && data.accessMethods.length > 0) {
    var methodItems = '';
    for (var i = 0; i < data.accessMethods.length; i++) {
      methodItems += '<div class="access-method-item"><div class="access-platform">' + data.accessMethods[i].platform + '</div><div class="access-desc">' + data.accessMethods[i].desc + '</div></div>';
    }
    accessHtml = '<div class="detail-section"><h3>接入方式</h3><div class="access-methods">' + methodItems + '</div></div>';
  } else {
    accessHtml = '<div class="detail-section"><h3>接入方式</h3><p>' + data.access + '</p></div>';
  }
  
  // 接入流程（分组：Android/iOS）
  var flowHtml = '';
  if (data.flowGroups && data.flowGroups.length > 0) {
    var groupsHtml = '';
    for (var g = 0; g < data.flowGroups.length; g++) {
      var group = data.flowGroups[g];
      var stepsHtml = '';
      for (var i = 0; i < group.steps.length; i++) {
        stepsHtml += '<div class="flow-step"><div class="flow-num">' + (i + 1) + '</div><div class="flow-text">' + group.steps[i] + '</div></div>';
      }
      var groupDocsHtml = '';
      if (group.docs && group.docs.length > 0) {
        groupDocsHtml = '<div class="detail-docs" style="margin-top:12px;">';
        for (var d = 0; d < group.docs.length; d++) {
          groupDocsHtml += '<a href="' + group.docs[d].url + '" target="_blank">' + group.docs[d].title + '</a>';
        }
        groupDocsHtml += '</div>';
      }
      groupsHtml += '<div class="flow-group"><h4 class="flow-group-title">' + group.title + '</h4><div class="detail-flow">' + stepsHtml + '</div>' + groupDocsHtml + '</div>';
    }
    flowHtml = '<div class="detail-section"><h3>接入流程</h3>' + groupsHtml + '</div>';
  } else if (data.flow && data.flow.length > 0) {
    var flowSteps = '';
    for (var i = 0; i < data.flow.length; i++) {
      flowSteps += '<div class="flow-step"><div class="flow-num">' + (i + 1) + '</div><div class="flow-text">' + data.flow[i] + '</div></div>';
    }
    flowHtml = '<div class="detail-section"><h3>接入流程</h3><div class="detail-flow">' + flowSteps + '</div></div>';
  }
  
  // 接入文档（仅flowGroups不存在时单独显示）
  var docsHtml = '';
  if (!data.flowGroups && data.docs && data.docs.length > 0) {
    var docLinks = '';
    for (var i = 0; i < data.docs.length; i++) {
      docLinks += '<a href="' + data.docs[i].url + '" target="_blank">' + data.docs[i].title + '</a>';
    }
    docsHtml = '<div class="detail-section"><h3>接入文档</h3><div class="detail-docs">' + docLinks + '</div></div>';
  }
  
  var html = '<div class="detail-top-bar"><button class="btn-back" onclick="navigate(\'home\')"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> \u8fd4\u56de</button><div class="detail-breadcrumb"><a onclick="navigate(\'home\')">\u9996\u9875</a> / <span>' + data.category + '</span> / <span>' + data.title + '</span></div></div>';
  html += '<h1 class="detail-title">' + data.title + '</h1>';
  html += '<p class="detail-subtitle">' + data.category + '</p>';
  html += introSectionHtml;
  html += configHtml;
  html += accessHtml;
  html += flowHtml;
  html += docsHtml;
  html += '<div class="detail-cta"><button class="btn-primary" onclick="navigate(\'mrd\')">去接入</button><a href="https://tt.sankuai.com/ticket/custom/create/11889/2617" target="_blank" class="btn-secondary">了解功能详情提TT</a></div>';
  
  document.getElementById('detailContent').innerHTML = html;
}

// 横向滚动控制
function scrollCards(btn, direction) {
  var wrapper = btn.parentElement;
  var scroll = wrapper.querySelector('.card-scroll');
  var cardWidth = scroll.querySelector('.feature-card').offsetWidth + 16;
  scroll.scrollBy({ left: direction * cardWidth * 3, behavior: 'smooth' });
}

// === Lightbox 图片预览 ===
function openLightbox(imgSrc) {
  var overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = '<img src="' + imgSrc + '">';
  document.body.appendChild(overlay);
  // 触发动画
  requestAnimationFrame(function() {
    overlay.classList.add('active');
  });
  overlay.addEventListener('click', function() {
    overlay.classList.remove('active');
    setTimeout(function() {
      overlay.remove();
    }, 250);
  });
}

// 事件委托：详情页所有图片点击查看大图
document.addEventListener('click', function(e) {
  var img = e.target;
  if (img.tagName !== 'IMG') return;
  var parent = img.closest('.detail-images') || img.closest('.detail-images--config');
  if (parent) {
    openLightbox(img.src);
  }
});

// 找人地图 tab 切换
function switchContactTab(btn, tabId) {
  var tabs = document.querySelectorAll('.contact-tab');
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('active');
  }
  btn.classList.add('active');
  var contents = document.querySelectorAll('.contact-tab-content');
  for (var i = 0; i < contents.length; i++) {
    contents[i].classList.remove('active');
  }
  var target = document.getElementById(tabId);
  if (target) target.classList.add('active');
}

// 初始化
document.addEventListener('DOMContentLoaded', function() {
  navigate('home');
});
