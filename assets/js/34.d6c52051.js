(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{389:function(s,t,a){"use strict";a.r(t);var e=a(45),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"使用-vscode-remote-ssh-连接-openeuler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-vscode-remote-ssh-连接-openeuler"}},[s._v("#")]),s._v(" 使用 vscode remote-ssh 连接 openEuler")]),s._v(" "),a("p",[s._v("直接连接失败，查看日志发现")]),s._v(" "),a("div",{staticClass:"language-shel extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("vscode-scp-done.flag                            0%    0     0.0KB/s   --:-- ETA\nvscode-scp-done.flag                          100%    9     5.0KB/s   00:00    \"\n[18:21:35.685] \"Copy server to host\" terminal command done\n[18:21:36.787] > Found flag and server on host\n[18:21:36.805] > f85a30ca0d5d%%2%%\n> tar --version:\n[18:21:36.805] stderr> main:行405: tar：未找到命令\n[18:21:36.808] stderr> main:行406: tar：未找到命令\n[18:21:36.815] stderr> mv: 无法获取'vscode-server*/*' 的文件状态(stat): 没有那个文件或目录\n[18:21:36.816] > ERROR: /root/.vscode-server/bin/ea3859d4ba2f3e577a159bc91e3074c5d85c0523/node or /root/.vscode-server/bin/ea3859d4ba2f3e577a159bc91e3074c5d85c0523/server.sh don't exist\n> Already attempted local download, failing\n")])])]),a("p",[s._v("分析应该是没有 tar 解压工具，使用 ssh 连接到 openEuler")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tar")]),s._v("\n-bash: tar：未找到命令\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n")])])]),a("p",[s._v("安装 tar 工具")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# dnf install tar")]),s._v("\n上次元数据过期检查：0:31:57 前，执行于 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("年01月02日 星期六 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v("时53分08秒。\n依赖关系解决。\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n Package                               Architecture                             Version                                           Repository                            Size\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n安装:\n "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v("                                   x86_64                                   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(":1.32-1.oe1                                      OS                                   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("772")]),s._v(" k\n\n事务概要\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n安装  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 软件包\n\n总下载：772 k\n安装大小：3.2 M\n确定吗？"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("y/N"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("： y\n下载软件包：\ntar-1.32-1.oe1.x86_64.rpm                                                                                                                    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("887")]),s._v(" kB/s "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("772")]),s._v(" kB     00:00\n-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n总计                                                                                                                                         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("883")]),s._v(" kB/s "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("772")]),s._v(" kB     00:00\n警告：/var/cache/dnf/OS-fcb43ce6e8cef091/packages/tar-1.32-1.oe1.x86_64.rpm: 头V3 RSA/SHA1 Signature, 密钥 ID b25e7f66: NOKEY\nOS                                                                                                                                            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" kB/s "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.1")]),s._v(" kB     00:00\n导入 GPG 公钥 0xB25E7F66:\n Userid: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"private OBS (key without passphrase) <defaultkey@localobs>"')]),s._v("\n 指纹: 12EA 74AC 9DF4 8D46 C69C A0BE D557 065E B25E 7F66\n 来自: http://repo.openeuler.org/openEuler-20.03-LTS-SP1/OS/x86_64/RPM-GPG-KEY-openEuler\n确定吗？"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("y/N"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("： y\n导入公钥成功\n运行事务检查\n事务检查成功。\n运行事务测试\n事务测试成功。\n运行事务\n  准备中  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v("                                                                                                                                                              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1\n  运行脚本: tar-2:1.32-1.oe1.x86_64                                                                                                                                      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1\n  安装    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" tar-2:1.32-1.oe1.x86_64                                                                                                                                      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1\n  运行脚本: tar-2:1.32-1.oe1.x86_64                                                                                                                                      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1\n  验证    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" tar-2:1.32-1.oe1.x86_64                                                                                                                                      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("/1\n\n已安装:\n  tar-2:1.32-1.oe1.x86_64\n\n完毕！\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@localhost ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n")])])]),a("p",[s._v("再次连接，继续报错")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[18:26:33.567] Failed to set up socket for dynamic port forward to remote port 45319: Socket closed. Is the remote port correct?\n[18:26:33.626] [Forwarding server 51275] Got connection 1\n[18:26:33.626] [Forwarding server 51275] Got connection 2\n[18:26:33.629] Failed to set up socket for dynamic port forward to remote port 45319: Socket closed. Is the remote port correct?\n[18:26:33.631] Failed to set up socket for dynamic port forward to remote port 45319: Socket closed. Is the remote port correct?\n")])])]),a("p",[s._v("分析是端口转发未开启,查看 sshd 服务配置文件")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("[root@localhost ~]# cat /etc/ssh/sshd_config\n#       $OpenBSD: sshd_config,v 1.103 2018/04/09 20:41:22 tj Exp $\n\n# This is the sshd server system-wide configuration file.  See\n# sshd_config(5) for more information.\n\n# This sshd was compiled with PATH=/usr/local/bin:/usr/bin:/usr/local/sbin:/usr/sbin\n\n# The strategy used for options in the default sshd_config shipped with\n# OpenSSH is to specify options with their default value where\n# possible, but leave them commented.  Uncommented options override the\n# default value.\n\n# If you want to change the port on a SELinux system, you have to tell\n# SELinux about this change.\n# semanage port -a -t ssh_port_t -p tcp #PORTNUMBER\n#\n#Port 22\n#AddressFamily any\n#ListenAddress 0.0.0.0\n#ListenAddress ::\n\nHostKey /etc/ssh/ssh_host_rsa_key\nHostKey /etc/ssh/ssh_host_ecdsa_key\nHostKey /etc/ssh/ssh_host_ed25519_key\n\n# Ciphers and keying\n#RekeyLimit default none\n\n# Logging\n#SyslogFacility AUTH\nSyslogFacility AUTH\n#LogLevel INFO\n\n# Authentication:\n\n#LoginGraceTime 2m\nPermitRootLogin yes\n#StrictModes yes\n#MaxAuthTries 6\n#MaxSessions 10\n\n#PubkeyAuthentication yes\n\n# The default is to check both .ssh/authorized_keys and .ssh/authorized_keys2\n# but this is overridden so installations will only check .ssh/authorized_keys\nAuthorizedKeysFile      .ssh/authorized_keys\n\n#AuthorizedPrincipalsFile none\n\n#AuthorizedKeysCommand none\n#AuthorizedKeysCommandUser nobody\n\n# For this to work you will also need host keys in /etc/ssh/ssh_known_hosts\n#HostbasedAuthentication no\n# Change to yes if you don't trust ~/.ssh/known_hosts for\n# HostbasedAuthentication\n#IgnoreUserKnownHosts no\n# Don't read the user's ~/.rhosts and ~/.shosts files\n#IgnoreRhosts yes\n\n# To disable tunneled clear text passwords, change to no here!\n#PasswordAuthentication yes\n#PermitEmptyPasswords no\nPasswordAuthentication yes\n\n# Change to no to disable s/key passwords\n#ChallengeResponseAuthentication yes\nChallengeResponseAuthentication no\n\n# Kerberos options\n#KerberosAuthentication no\n#KerberosOrLocalPasswd yes\n#KerberosTicketCleanup yes\n#KerberosGetAFSToken no\n#KerberosUseKuserok yes\n\n# GSSAPI options\nGSSAPIAuthentication yes\nGSSAPICleanupCredentials no\n#GSSAPIStrictAcceptorCheck yes\n#GSSAPIKeyExchange no\n#GSSAPIEnablek5users no\n\n# Set this to 'yes' to enable PAM authentication, account processing,\n# and session processing. If this is enabled, PAM authentication will\n# be allowed through the ChallengeResponseAuthentication and\n# PasswordAuthentication.  Depending on your PAM configuration,\n# PAM authentication via ChallengeResponseAuthentication may bypass\n# the setting of \"PermitRootLogin without-password\".\n# If you just want the PAM account and session checks to run without\n# PAM authentication, then enable this but set PasswordAuthentication\n# and ChallengeResponseAuthentication to 'no'.\n# WARNING: 'UsePAM no' is not supported in openEuler and may cause several\n# problems.\nUsePAM yes\n\n#AllowAgentForwarding yes\n#AllowTcpForwarding yes\n#GatewayPorts no\nX11Forwarding no\n#X11DisplayOffset 10\n#X11UseLocalhost yes\n#PermitTTY yes\nPrintMotd no\n#PrintLastLog yes\n#TCPKeepAlive yes\n#PermitUserEnvironment no\n#Compression delayed\n#ClientAliveInterval 0\n#ClientAliveCountMax 3\n#UseDNS no\n#PidFile /var/run/sshd.pid\n#MaxStartups 10:30:100\n#PermitTunnel no\n#ChrootDirectory none\n#VersionAddendum none\n\n# no default banner path\n#Banner none\n\nAcceptEnv LANG LC_CTYPE LC_NUMERIC LC_TIME LC_COLLATE LC_MONETARY LC_MESSAGES\nAcceptEnv LC_PAPER LC_NAME LC_ADDRESS LC_TELEPHONE LC_MEASUREMENT\nAcceptEnv LC_IDENTIFICATION LC_ALL LANGUAGE\nAcceptEnv XMODIFIERS\n\n# override default of no subsystems\nSubsystem sftp /usr/libexec/openssh/sftp-server -l INFO -f AUTH\n\n# Example of overriding settings on a per-user basis\n#Match User anoncvs\n#       X11Forwarding no\n#       AllowTcpForwarding no\n#       PermitTTY no\n#       ForceCommand cvs server\n\n#CheckUserSplash yes\n\n# To modify the system-wide ssh configuration, create a  *.conf  file under\n#  /etc/ssh/sshd_config.d/  which will be automatically included below\n#Include /etc/ssh/sshd_config.d/*.conf\nProtocol 2\nLogLevel VERBOSE\nPubkeyAuthentication yes\nRSAAuthentication yes\nIgnoreRhosts yes\nRhostsRSAAuthentication no\nHostbasedAuthentication no\nPermitEmptyPasswords no\nPermitUserEnvironment no\nCiphers aes128-ctr,aes192-ctr,aes256-ctr,aes128-gcm@openssh.com,aes256-gcm@openssh.com,chacha20-poly1305@openssh.com\nClientAliveCountMax 0\nBanner /etc/issue.net\nMACs hmac-sha2-512,hmac-sha2-512-etm@openssh.com,hmac-sha2-256,hmac-sha2-256-etm@openssh.com\nStrictModes yes\nAllowTcpForwarding no\nAllowAgentForwarding no\nGatewayPorts no\nPermitTunnel no\nKexAlgorithms curve25519-sha256,curve25519-sha256@libssh.org,diffie-hellman-group-exchange-sha256\n")])])]),a("p",[s._v("修改以下配置为"),a("code",[s._v("yes")]),s._v(",最小安装下有 vi 没有 vim，不过 vi 也够用了。")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("AllowTcpForwarding yes\nAllowAgentForwarding yes\n")])])]),a("p",[s._v("重启 sshd 服务")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("systemctl restart sshd.service\n")])])]),a("p",[s._v("再次使用remote-ssh连接。。成功了。")])])}),[],!1,null,null,null);t.default=r.exports}}]);