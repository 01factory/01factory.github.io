_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[47],{aPlZ:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/codes/2021/05/09/0902",function(){return n("fNYq")}])},fNYq:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return g}));var r=n("rePB"),a=n("Ff2n"),i=(n("q1tI"),n("7ljp")),o=n("3wrV"),p=n("XLUx"),s=n("xqva"),c=n("Ndxo"),d=n("bTu8"),l=n("0Xqd"),w=n("h2/A"),m=n("fMrl"),u=n("Xchd"),y=n("g0Ox");n("4l1m");function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var S={};function g(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(i.a)("wrapper",b(b(b({},S),n),{},{components:e,mdxType:"MDXLayout"}),Object(i.a)("h1",null,"\u8f6e\u64ad\u61d2\u52a0\u8f7d\u56fe\u7247"),Object(i.a)("h2",null,"\u6548\u679c"),Object(i.a)(p.a,{scope:{Swiper:s.a,SwiperSlide:c.a,SwiperCore:d.a,Autoplay:l.a,Keyboard:w.a,Lazy:m.a,Pagination:u.a,Navigation:y.a},code:'\n()=>{\n\tSwiperCore.use([Autoplay, Keyboard, Lazy, Pagination, Navigation]);\n\treturn <Swiper\n\t\tslidesPerView={1}\n\t\tautoplay\n\t\tkeyboard\n\t\tloop\n\t\tlazy\n\t\tpreloadImages\n\t>\n\t\t<SwiperSlide>\n\t\t\t<img data-src="http://up.iosdesk.com/pic/5d/6e/ac/5d6eacd528a758336f7c9518654aec5f.jpg" className=\'swiper-lazy\' />\n\t\t\t<div className="swiper-lazy-preloader"></div>\n\t\t</SwiperSlide>\n\t\t<SwiperSlide>\n\t\t\t<img data-src="http://up.iosdesk.com/pic/f2/9e/22/f29e227b64e6b96f5d5248eec606dff0.jpg" className=\'swiper-lazy\' />\n\t\t\t<div className="swiper-lazy-preloader"></div>\n\t\t</SwiperSlide>\n\t\t<SwiperSlide>\n\t\t\t<img data-src="http://5b0988e595225.cdn.sohucs.com/images/20171201/bf69d781d16f4da6bc3d5aa9941c7cd1.jpeg" className=\'swiper-lazy\' />\n\t\t\t<div className="swiper-lazy-preloader"></div>\n\t\t</SwiperSlide>\n\t</Swiper>;\n}\n',mdxType:"PlayGround"}),Object(i.a)("h2",null,"\u793a\u4f8b\u4ee3\u7801"),Object(i.a)(o.a,{lan:"ts",code:"\nimport { GetStaticProps, NextPage, PageConfig } from 'next';\nimport Head from 'next/head';\n// Import Swiper React components\nimport { Swiper, SwiperSlide } from 'swiper/react';\nimport SwiperCore, { Autoplay, Keyboard, Lazy } from 'swiper/core';\n// Import Swiper styles\nimport 'swiper/swiper.min.css';\n\n// or\nimport 'swiper/swiper-bundle.min.css';\n\ninterface IProps {\n}\n\n/**\n * \u5f15\u7528\u8f6e\u64ad\u56fe\u793a\u4f8b\u9875\u9762\n */\nconst page: NextPage<IProps> = () => {\n\treturn (\n\t\t<>\n\t\t\t<Head>\n\t\t\t\t<title>\u793a\u4f8b\u9875\u9762</title>\n\t\t\t</Head>\n\t\t\t<C001></C001>\n\t\t</>\n\t);\n};\n\nexport const config: PageConfig = {\n\tamp: false\n};\n\nexport default page;\n\nexport const getStaticProps: GetStaticProps<IProps> = async () => {\n\treturn Promise.resolve({\n\t\tprops: {}\n\t});\n};\n\nfunction C001() {\n\treturn <>\n\t\t<Swiper\n\t\t\tslidesPerView={1}\n\t\t\tautoplay\n\t\t\tnavigation\n\t\t\tpagination={{\n\t\t\t\tclickable: true,\n\t\t\t}}\n\t\t\tkeyboard\n\t\t\tloop\n\t\t\tlazy\n\t\t\tpreloadImages\n\t\t>\n\t\t\t{data.map((it, key) => {\n\t\t\t\treturn <SwiperSlide key={key}>\n\t\t\t\t\t<img data-src={it.adress} className='swiper-lazy' />\n\t\t\t\t\t<div className=\"swiper-lazy-preloader\"></div>\n\t\t\t\t</SwiperSlide>;\n\t\t\t})}\n\t\t</Swiper>\n\t</>;\n}\n",mdxType:"CodeEditor"}))}g.isMDXComponent=!0}},[["aPlZ",0,1,8,2,4,3,5,6,7,11]]]);