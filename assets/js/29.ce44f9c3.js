(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{385:function(s,a,t){"use strict";t.r(a);var n=t(45),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"go安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#go安装"}},[s._v("#")]),s._v(" go安装")]),s._v(" "),t("p",[s._v("linux下的go安装脚本")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/sh")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" -e\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("VERSION")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.15")]),s._v(".7\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("OS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("linux\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ARCH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("amd64\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -L https://studygolang.com/dl/golang/go"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$VERSION")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$OS")]),s._v("-"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ARCH")]),s._v(".tar.gz -o go"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$VERSION")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$OS")]),s._v("-"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ARCH")]),s._v(".tar.gz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -C /usr/local -xzf go"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$VERSION")]),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$OS")]),s._v("-"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ARCH")]),s._v(".tar.gz\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"export PATH='),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(':/usr/local/go/bin"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v("/etc/profile\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Please reboot or run this command: export PATH=\\'),t("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(':/usr/local/go/bin"')]),s._v("\n")])])]),t("p",[s._v("CentOS一键安装(涉及环境变量配置,建议安装后重启)")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -O install-golang.sh https://gcslaoli.gitee.io/script/install-golang.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" install-golang.sh\n")])])]),t("p",[s._v("判断安装是否成功")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("go version\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);