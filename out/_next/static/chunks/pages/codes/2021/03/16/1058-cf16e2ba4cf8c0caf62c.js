_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{JwOi:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/codes/2021/03/16/1058",function(){return e("l9dg")}])},l9dg:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return i}));var a=e("rePB"),o=e("Ff2n"),r=(e("q1tI"),e("7ljp")),c=e("3wrV");function l(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,a)}return e}function s(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?l(Object(e),!0).forEach((function(t){Object(a.a)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var d={};function i(n){var t=n.components,e=Object(o.a)(n,["components"]);return Object(r.a)("wrapper",s(s(s({},d),e),{},{components:t,mdxType:"MDXLayout"}),Object(r.a)("h1",null,"mysql\u914d\u7f6e"),Object(r.a)("h2",null,"docker-compose.yml"),Object(r.a)("h3",null,Object(r.a)("a",s({parentName:"h3"},{href:"https://mariadb.org/"}),"mariadb")),Object(r.a)(c.a,{lan:"yaml",code:"\nversion: '3.7'\nservices:\n  mariadb:\n    image: mariadb\n    container_name: mariadb\n    restart: always\n    volumes:\n      - /data/mysql:/var/lib/mysql\n    environment:\n      MYSQL_DATABASE: 01factory\n      MYSQL_USER: 01factory\n      MYSQL_PASSWORD: 01factory\n      MYSQL_ROOT_PASSWORD: 01factory\n    ports:\n      - 3306:3306\n  adminer:\n    container_name: adminer\n    image: adminer:latest\n    restart: always\n    ports:\n      - 8080:8080\n",mdxType:"CodeEditor"}),Object(r.a)("h3",null,"mysql"),Object(r.a)(c.a,{lan:"yaml",code:"\nversion: '3.7'\nservices:\n  mysql:\n    image: mysql\n    container_name: mysql\n    command: --default-authentication-plugin=mysql_native_password\n    restart: always\n    volumes:\n      - /data/mysql:/var/lib/mysql\n    environment:\n      MYSQL_DATABASE: 01factory\n      MYSQL_USER: 01factory\n      MYSQL_PASSWORD: 01factory\n      MYSQL_ROOT_PASSWORD: 01factory\n    ports:\n      - 3306:3306\n  adminer:\n    container_name: adminer\n    image: adminer:latest\n    restart: always\n    ports:\n      - 8080:8080\n",mdxType:"CodeEditor"}),Object(r.a)("h2",null,"\u542f\u52a8\u547d\u4ee4"),Object(r.a)("h3",null,"\u9996\u6b21\u542f\u52a8"),Object(r.a)(c.a,{lan:"shell",code:"\nsudo docker-compose up -d\n",mdxType:"CodeEditor"}),Object(r.a)("h3",null,"\u975e\u9996\u6b21\u542f\u52a8"),Object(r.a)(c.a,{lan:"shell",code:"\nsudo docker-compose start\n",mdxType:"CodeEditor"}),Object(r.a)("h2",null,"\u505c\u6b62\u670d\u52a1"),Object(r.a)("h3",null,"\u901a\u7528\u65b9\u6cd5"),Object(r.a)(c.a,{lan:"shell",code:"\nsudo docker-compose stop\n",mdxType:"CodeEditor"}),Object(r.a)("h3",null,"\u9488\u5bf9mysql\u7684\u65b9\u6cd5"),Object(r.a)(c.a,{lan:"shell",code:"\nsudo docker stop mysql adminer\n",mdxType:"CodeEditor"}),Object(r.a)("h2",null,Object(r.a)("a",s({parentName:"h2"},{href:"http://127.0.0.1:8080/?pgsql=mysql&username=dfactory&db=dfactory"}),"adminer")),Object(r.a)("h2",null,"mm.json"),Object(r.a)(c.a,{lan:"json",code:'\n{\n\t"dbconfig": {\n\t\t"client": "mysql2",\n\t\t"connection": "postgres://01factory:01factory@127.0.0.1:3306/01factory",\n\t\t"pool": {\n\t\t\t"min": 0,\n\t\t\t"max": 7\n\t\t}\n\t}\n}\n',mdxType:"CodeEditor"}),Object(r.a)("p",null,"\u6216"),Object(r.a)(c.a,{lan:"json",code:'\n{\n\t"dbconfig": {\n\t\t"client": "mysql",\n\t\t"connection": "postgres://01factory:01factory@127.0.0.1:3306/01factory",\n\t\t"pool": {\n\t\t\t"min": 0,\n\t\t\t"max": 7\n\t\t}\n\t}\n}\n',mdxType:"CodeEditor"}))}i.isMDXComponent=!0}},[["JwOi",0,1,2,4,3,5]]]);