(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{371:function(t,a,s){"use strict";s.r(a);var n=s(45),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"drone-安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#drone-安装"}},[t._v("#")]),t._v(" Drone 安装")]),t._v(" "),s("p",[t._v("Drone 是一个高效灵活的 CI/CD 工具。")]),t._v(" "),s("p",[t._v("官方网站"),s("a",{attrs:{href:"https://www.drone.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.drone.io/"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.bilibili.com/video/BV1cy4y1D7ci/",target:"_blank",rel:"noopener noreferrer"}},[t._v("安装视频地址"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"创建-docker-compose-yml-文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建-docker-compose-yml-文件"}},[t._v("#")]),t._v(" 创建 "),s("code",[t._v("docker-compose.yml")]),t._v(" 文件")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("services")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("drone-server")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" drone/drone"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10003:80"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./data/drone/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/lib/drone/\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" ./data/data/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/data/\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" DRONE_GITEA_SERVER=https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//gitea服务器地址\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" DRONE_GITEA_CLIENT_ID=gitea生成的OAuth2客户端ID\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" DRONE_GITEA_CLIENT_SECRET=gitea生成的OAuth2客户端密钥\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" DRONE_SERVER_HOST=drone服务器地址\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" DRONE_SERVER_PROTO=https\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" DRONE_RPC_SECRET=自定义的Drone与runner通信密钥\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("drone-runner-docker")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("restart")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" always\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" drone/drone"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("runner"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("docker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("volumes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" /var/run/docker.sock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("/var/run/docker.sock\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("environment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" DRONE_RPC_PROTO=http\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" DRONE_RPC_HOST=drone"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("server\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" DRONE_RPC_SECRET=自定义的Drone与runner通信密钥\n")])])]),s("h2",{attrs:{id:"生成随机密码命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成随机密码命令"}},[t._v("#")]),t._v(" 生成随机密码命令")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("openssl rand -hex "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("\n")])])]),s("h2",{attrs:{id:"使用示例库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用示例库"}},[t._v("#")]),t._v(" 使用示例库")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://git.lidong.xin/drone-example",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://git.lidong.xin/drone-example"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);