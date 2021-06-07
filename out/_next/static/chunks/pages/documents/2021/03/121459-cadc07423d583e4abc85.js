_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[103],{X1al:function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return m}));var t=a("rePB"),r=a("Ff2n"),o=(a("q1tI"),a("7ljp")),l=a("3wrV");function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function c(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){Object(t.a)(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}var s={};function m(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",c(c(c({},s),a),{},{components:n,mdxType:"MDXLayout"}),Object(o.a)("h1",null,"\u6570\u636e\u5e93"),Object(o.a)("h2",null,"\u73af\u5883"),Object(o.a)("p",null,"\u8bf7\u786e\u4fdd\u4f60\u5b89\u88c5\u4e86docker\u548cdocker-compose\uff0c\u5b89\u88c5\u6559\u7a0b\u53c2\u89c1\u524d\u9762\u7684\u6559\u7a0b,",Object(o.a)("a",c({parentName:"p"},{href:"../02/281652"}),"\u4f20\u9001\u95e8")),Object(o.a)("h2",null,"\u914d\u7f6e\u6587\u4ef6"),Object(o.a)("h3",null,"postgresql"),Object(o.a)("p",null,"\u914d\u7f6e\u6587\u4ef6",Object(o.a)("inlineCode",{parentName:"p"},"docker.yml"),",\u5185\u5bb9\u5982\u4e0b\uff1a"),Object(o.a)(l.a,{lan:"yaml",code:"\nversion: '3.7'\nservices:\n  postgres:\n    image: postgres:latest\n    container_name: postgres\n    volumes:\n      - /home/data/postgre:/var/lib/postgresql/data\n    restart: always\n    environment:\n      POSTGRES_DB: mmstudio\n      POSTGRES_USER: mmstudio\n      POSTGRES_PASSWORD: Mmstudio123\n    ports:\n      - 5432:5432\n\n  adminer:\n    container_name: adminer\n    image: adminer:latest\n    restart: always\n    ports:\n      - 8080:8080\n    links:\n      - postgres:db\n",mdxType:"CodeEditor"}),Object(o.a)("h3",null,"mysql"),Object(o.a)(l.a,{lan:"yaml",code:"\nversion: '3.7'\nservices:\n  mysql:\n    image: mysql:latest\n    command: --default-authentication-plugin=mysql_native_password\n    restart: always\n    volumes:\n      - /home/data/mysql:/var/lib/mysql\n    environment:\n      MYSQL_DATABASE: 01factory\n      MYSQL_USER: 01factory\n      MYSQL_PASSWORD: 01factory\n      MYSQL_ROOT_PASSWORD: 01factory\n    ports:\n      - 3306:3306\n\n  adminer:\n    image: adminer:latest\n    restart: always\n    ports:\n      - 8080:8080\n    links:\n      - mysql:db\n",mdxType:"CodeEditor"}),Object(o.a)("h3",null,"mssql"),Object(o.a)(l.a,{lan:"yaml",code:"\nversion: '3.7'\nservices:\n  mssql:\n    image: mcr.microsoft.com/mssql/server:latest\n    user: root\n    volumes:\n      - /home/data/mssql:/var/opt/mssql/data\n    restart: always\n    environment:\n      ACCEPT_EULA: Y\n      MSSQL_PID: Express\n      SA_PASSWORD: 01factory\n    ports:\n      - 1433:1433\n\n  adminer:\n    image: adminer:latest\n    restart: always\n    ports:\n      - 8080:8080\n    links:\n      - mssql:db\n",mdxType:"CodeEditor"}),Object(o.a)("h2",null,"\u542f\u52a8\u547d\u4ee4"),Object(o.a)(l.a,{lan:"shell",code:"\nsudo docker-compose -f ./docker.yml up\n",mdxType:"CodeEditor"}),Object(o.a)("h2",null,"\u67e5\u770b\u6570\u636e\u5e93"),Object(o.a)("h3",null,"\u67e5\u770bpostgresql"),Object(o.a)("ol",null,Object(o.a)("li",{parentName:"ol"},"\u6253\u5f00\u6d4f\u89c8\u5668",Object(o.a)("a",c({parentName:"li"},{href:"http://127.0.0.1:8080/?pgsql=postgres&username=dfactory&db=dfactory"}),"http://127.0.0.1:8080/?pgsql=postgres&username=dfactory&db=dfactory"),",\u8fdb\u5165\u767b\u9646\u9875"),Object(o.a)("li",{parentName:"ol"},Object(o.a)("inlineCode",{parentName:"li"},"System"),"\u9009\u62e9",Object(o.a)("inlineCode",{parentName:"li"},"PostgreSQL")),Object(o.a)("li",{parentName:"ol"},Object(o.a)("inlineCode",{parentName:"li"},"Server"),"\u586b\u5199\u5b9e\u4f8b\u540d\u79f0",Object(o.a)("inlineCode",{parentName:"li"},"postgres")),Object(o.a)("li",{parentName:"ol"},Object(o.a)("inlineCode",{parentName:"li"},"UserName"),"\u586b\u5199",Object(o.a)("inlineCode",{parentName:"li"},"dfactory")),Object(o.a)("li",{parentName:"ol"},Object(o.a)("inlineCode",{parentName:"li"},"Password"),"\u586b\u5199",Object(o.a)("inlineCode",{parentName:"li"},"01factory")),Object(o.a)("li",{parentName:"ol"},Object(o.a)("inlineCode",{parentName:"li"},"Database"),"\u586b\u5199",Object(o.a)("inlineCode",{parentName:"li"},"dfactory")),Object(o.a)("li",{parentName:"ol"},"\u52fe\u9009",Object(o.a)("inlineCode",{parentName:"li"},"Permanent login")),Object(o.a)("li",{parentName:"ol"},"\u70b9\u51fb",Object(o.a)("inlineCode",{parentName:"li"},"Login"),"\u6309\u94ae")),Object(o.a)("h3",null,"\u67e5\u770bmysql"),Object(o.a)("ol",null,Object(o.a)("li",{parentName:"ol"},"\u6253\u5f00\u6d4f\u89c8\u5668",Object(o.a)("a",c({parentName:"li"},{href:"http://127.0.0.1:8080/?pgsql=mysql&username=dfactory&db=dfactory"}),"http://127.0.0.1:8080/?pgsql=mysql&username=dfactory&db=dfactory"),",\u8fdb\u5165\u767b\u9646\u9875"),Object(o.a)("li",{parentName:"ol"},Object(o.a)("inlineCode",{parentName:"li"},"System"),"\u9009\u62e9",Object(o.a)("inlineCode",{parentName:"li"},"MySQL")),Object(o.a)("li",{parentName:"ol"},Object(o.a)("inlineCode",{parentName:"li"},"Server"),"\u586b\u5199\u5b9e\u4f8b\u540d\u79f0",Object(o.a)("inlineCode",{parentName:"li"},"postgres")),Object(o.a)("li",{parentName:"ol"},Object(o.a)("inlineCode",{parentName:"li"},"UserName"),"\u586b\u5199",Object(o.a)("inlineCode",{parentName:"li"},"dfactory")),Object(o.a)("li",{parentName:"ol"},Object(o.a)("inlineCode",{parentName:"li"},"Password"),"\u586b\u5199",Object(o.a)("inlineCode",{parentName:"li"},"01factory")),Object(o.a)("li",{parentName:"ol"},Object(o.a)("inlineCode",{parentName:"li"},"Database"),"\u586b\u5199",Object(o.a)("inlineCode",{parentName:"li"},"dfactory")),Object(o.a)("li",{parentName:"ol"},"\u52fe\u9009",Object(o.a)("inlineCode",{parentName:"li"},"Permanent login")),Object(o.a)("li",{parentName:"ol"},"\u70b9\u51fb",Object(o.a)("inlineCode",{parentName:"li"},"Login"),"\u6309\u94ae")),Object(o.a)("h2",null,"\u5173\u95ed\u5168\u90e8docker\u5b9e\u4f8b"),Object(o.a)(l.a,{lan:"shell",code:"\nsudo docker stop $(sudo docker ps -aq) && sudo docker rm $(sudo docker ps -aq)\n",mdxType:"CodeEditor"}))}m.isMDXComponent=!0},"pr/6":function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/documents/2021/03/121459",function(){return a("X1al")}])}},[["pr/6",0,1,2,4,3,5]]]);