(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{399:function(t,s,a){"use strict";a.r(s);var e=a(45),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ubuntu-常用操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-常用操作"}},[t._v("#")]),t._v(" Ubuntu 常用操作")]),t._v(" "),a("h2",{attrs:{id:"修改时区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改时区"}},[t._v("#")]),t._v(" 修改时区")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("timedatectl set-timezone Asia/Shanghai\n")])])]),a("h2",{attrs:{id:"替换软件源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#替换软件源"}},[t._v("#")]),t._v(" 替换软件源")]),t._v(" "),a("p",[t._v("华为源")]),t._v(" "),a("p",[t._v("1、备份配置文件：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" -a /etc/apt/sources.list /etc/apt/sources.list.bak\n")])])]),a("p",[t._v("2、修改 sources.list 文件，将http://archive.ubuntu.com和http://security.ubuntu.com替换成http://repo.huaweicloud.com，可以参考如下命令：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" -i "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"s@http://.*archive.ubuntu.com@http://repo.huaweicloud.com@g"')]),t._v(" /etc/apt/sources.list\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sed")]),t._v(" -i "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"s@http://.*security.ubuntu.com@http://repo.huaweicloud.com@g"')]),t._v(" /etc/apt/sources.list\n")])])]),a("p",[t._v("3、执行"),a("code",[t._v("sudo apt-get update")]),t._v("更新索引")]),t._v(" "),a("h2",{attrs:{id:"更新软件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新软件"}},[t._v("#")]),t._v(" 更新软件")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" upgrade\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);