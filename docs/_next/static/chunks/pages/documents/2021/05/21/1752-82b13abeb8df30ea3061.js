_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[175],{"/KKJ":function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/documents/2021/05/21/1752",function(){return n("8DvN")}])},"8DvN":function(e,o,n){"use strict";n.r(o),n.d(o,"default",(function(){return u}));var t=n("rePB"),c=n("Ff2n"),r=(n("q1tI"),n("7ljp")),d=n("3wrV");function s(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?s(Object(n),!0).forEach((function(o){Object(t.a)(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}var l={};function u(e){var o=e.components,n=Object(c.a)(e,["components"]);return Object(r.a)("wrapper",a(a(a({},l),n),{},{components:o,mdxType:"MDXLayout"}),Object(r.a)("h1",null,"Fedora"),Object(r.a)("h2",null,"\u8bbe\u7f6eroot\u5bc6\u7801"),Object(r.a)(d.a,{lan:"shell",code:"\nsudo passwd root\n",mdxType:"CodeEditor"}),Object(r.a)("h2",null,"\u4fee\u6539\u8f6f\u4ef6\u6e90"),Object(r.a)(d.a,{lan:"shell",code:"\nsudo sed -e 's|^metalink=|#metalink=|g'          -e 's|^#baseurl=http://download.example/pub/fedora/linux|baseurl=https://mirrors.ustc.edu.cn/fedora|g'          -i.bak          /etc/yum.repos.d/fedora.repo          /etc/yum.repos.d/fedora-modular.repo          /etc/yum.repos.d/fedora-updates.repo          /etc/yum.repos.d/fedora-updates-modular.repo\nsudo dnf makecache \n",mdxType:"CodeEditor"}),Object(r.a)("h2",null,"\u5b89\u88c5\u5fc5\u8981\u8f6f\u4ef6"),Object(r.a)(d.a,{lan:"shell",code:"\nsudo dnf remove firefox*\nsudo dnf install chromium vim tilda zsh\n",mdxType:"CodeEditor"}),Object(r.a)("h2",null,"\u5b89\u88c5\u8f93\u5165\u6cd5\u65e0\u6cd5\u5207\u6362"),Object(r.a)("p",null,"\u6ce8\u610f\uff1a\u8f93\u5165\u6cd5\u6700\u540e\u4e00\u4e2a\u4f1a\u662f\u9ed8\u8ba4\u8f93\u5165\u6cd5"),Object(r.a)(d.a,{lan:"shell",code:"\nsudo dnf install fcitx5 fcitx5-configtool fcitx5-chinese-addons fcitx5-qt fcitx5-table-extra fcitx5-table-other\ngsettings set   org.gnome.settings-daemon.plugins.xsettings overrides   \"{'Gtk/IMModule':<'fcitx'>}\"\n",mdxType:"CodeEditor"}),Object(r.a)("h2",null,"\u5b89\u88c5chrome"),Object(r.a)(d.a,{lan:"shell",code:'\necho "[google-chrome]\nname=google-chrome\nbaseurl=http://dl.google.com/linux/chrome/rpm/stable/x86_64\nenabled=1\ngpgcheck=1\ngpgkey=https://dl.google.com/linux/linux_signing_key.pub\n" > /etc/yum.repos.d/google-chrome.repo\nsudo dnf install google-chrome-stable -y\n',mdxType:"CodeEditor"}),Object(r.a)("h2",null,"\u5b89\u88c5vscode"),Object(r.a)(d.a,{lan:"shell",code:"\nsudo sh -c 'echo -e \"[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc\" > /etc/yum.repos.d/vscode.repo'\nsudo dnf check-update\nsudo dnf install code\n",mdxType:"CodeEditor"}),Object(r.a)("h2",null,"docker"),Object(r.a)(d.a,{lan:"shell",code:'\nsudo dnf remove docker docker-client docker-client-latest docker-common docker-latest docker-latest-logrotate docker-logrotate docker-selinux docker-engine-selinux docker-engine\nsudo dnf -y install dnf-plugins-core\nsudo dnf config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo\nsudo sed \'s/download.docker.com/mirrors.ustc.edu.cn/docker-ce/g\' -i.bak /etc/yum.repos.d/docker-ce.repo\nsudo dnf install docker-ce docker-ce-cli containerd.io\nsudo systemctl enable docker.service\nsudo groupadd docker\nsudo usermod -aG docker $USER\nnewgrp docker\nsudo systemstl start docker.service \necho -e "{\n  "registry-mirrors": ["https://docker.mirrors.ustc.edu.cn/"],\n  "data-root": "/home/taoqf/docker/"\n}" | sudo tee /etc/docker/daemon.json\nsudo systemctl daemon-reload \nsudo systemctl restart docker.service\n',mdxType:"CodeEditor"}),Object(r.a)("h2",null,"docker-compose"),Object(r.a)(d.a,{lan:"shell",code:"\nsudo curl -L https://get.daocloud.io/docker/compose/releases/download/1.28.5/docker-compose-`uname -s`-`uname -m` --output /usr/local/bin/docker-compose\nsudo chmod +x /usr/local/bin/docker-compose\n",mdxType:"CodeEditor"}),Object(r.a)("h2",null,"\u89e3\u51b3\u5173\u673a\u592a\u6162\u95ee\u9898"),Object(r.a)(d.a,{lan:"shell",code:"\nsudo dnf remove PackageKit\n",mdxType:"CodeEditor"}))}u.isMDXComponent=!0}},[["/KKJ",0,1,2,4,3,5]]]);