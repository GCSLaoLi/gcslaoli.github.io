(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{375:function(r,t,a){"use strict";a.r(t);var e=a(45),s=Object(e.a)({},(function(){var r=this,t=r.$createElement,a=r._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[a("h1",{attrs:{id:"三分钟学不会的-docker-教程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三分钟学不会的-docker-教程"}},[r._v("#")]),r._v(" 三分钟学不会的 Docker 教程")]),r._v(" "),a("p",[r._v("现在有太多三分钟学会 XXX 的教程了，思来想去，实在没能力三分钟教会大家 Docker,所以这个系列教程的名字就改成了“三分钟学不会的 Docker 教程”。")]),r._v(" "),a("h2",{attrs:{id:"docker-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-是什么"}},[r._v("#")]),r._v(" Docker 是什么？")]),r._v(" "),a("p",[r._v("container(容器)是一个包含代码及其依赖的标准单元,可以快速且可靠地在不同系统环境中运行。一个容器镜像是一个轻量、独立的可运行软件包，其中包含了程序运行时所需要的代码、运行时、系统工具、系统库以及相关配置。")]),r._v(" "),a("p",[r._v("Docker 引擎就是一套使容器可以在不同操作系统上运行的解决方案。通过使用 Docker,打包成容器的应用可以忽略运行环境的差异而始终保持统一的运行效果。")]),r._v(" "),a("h2",{attrs:{id:"docker-的特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-的特点"}},[r._v("#")]),r._v(" Docker 的特点")]),r._v(" "),a("ul",[a("li",[r._v("标准化:Docker 可以创建生产环境可用的标准化容器，这就使得应用可以在任意支持 Docker 的环境中运行。")]),r._v(" "),a("li",[r._v("轻量化：Docker 容器间共享系统内核，不需要为每一个容器分配并启动单独的系统内核，相比虚拟机这将极大地降低资源的占用。")]),r._v(" "),a("li",[r._v("安全性：应用在容器中运行更加安全，Docker 提供了业界最强的默认隔离功能。")])]),r._v(" "),a("h2",{attrs:{id:"docker-解决什么问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-解决什么问题"}},[r._v("#")]),r._v(" Docker 解决什么问题？")]),r._v(" "),a("p",[r._v("应用开发及部署中最常碰到的问题便是环境与依赖的问题。我们经常会遇到在开发环境中正常运行，但放到线上生产环境时因为依赖软件不同或依赖版本不同，甚至仅仅因为环境变量配置不同而引起的运行异常。这类问题排查困难且对运维工程师及开发工程师均有极高的要求。特别是当应用分发给不同的客户并由客户独立运维时，因环境问题而引起的系统故障将占据大量的售后支持时间及精力。")]),r._v(" "),a("p",[r._v("当应用大批量部署时，逐一进行环境配置同样将消耗运维大量的精力，效率低下且容易出错。")]),r._v(" "),a("p",[r._v("当同一台服务器运行多个不同的应用时，不同应用所需的环境及依赖可能是冲突的，如无法解决冲突只能分多台服务器部署。")]),r._v(" "),a("p",[r._v("如果能够将应用所需要的运行环境、依赖等也做为应用的一部分一同发布，同时隔离不同应用的环境，上述问题将迎刃而解。Docker 正是实现这一需求的解决方案。")]),r._v(" "),a("h2",{attrs:{id:"docker-与虚拟机的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-与虚拟机的区别"}},[r._v("#")]),r._v(" Docker 与虚拟机的区别")]),r._v(" "),a("p",[r._v("容器和虚拟机有相似的资源隔离和分配优势，但功能不同，因为容器虚拟化了操作系统而不是硬件。相对而言，容器占用资源更少且效率更高。")]),r._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/GCSLaoLi/imgData/PicGo/20210228202016.png",alt:""}})]),r._v(" "),a("h3",{attrs:{id:"容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容器"}},[r._v("#")]),r._v(" 容器")]),r._v(" "),a("p",[r._v("容器是应用层的抽象，它将代码和依赖项打包在一起。多个容器可以在同一台机器上运行，并与其他容器共享操作系统内核，每个容器在用户空间中作为独立进程运行。容器比虚拟机占用更少的空间（容器映像的大小通常为几十 MB），可以处理更多的应用程序，并且需要更少的虚拟机和操作系统。")]),r._v(" "),a("h3",{attrs:{id:"虚拟机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#虚拟机"}},[r._v("#")]),r._v(" 虚拟机")]),r._v(" "),a("p",[r._v("虚拟机（virtualmachines，VMs）是将一台服务器转换为多台服务器的物理硬件的抽象。hypervisor允许多个vm在一台机器上运行。每个虚拟机都包含一个操作系统、应用程序、必要的二进制文件和库的完整副本（占用数十GB）。虚拟机一般启动也比较缓慢。")])])}),[],!1,null,null,null);t.default=s.exports}}]);