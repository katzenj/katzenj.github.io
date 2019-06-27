(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{150:function(e,a,t){"use strict";t.r(a);var n=t(183),r=t(0),l=t.n(r),i=t(159),c=t(154),o=t(157),s=t(184),d=t.n(s),m=function(e){var a=1,t=e.bullets.map(function(e){return l.a.createElement("li",{key:a++},e)});return l.a.createElement("div",{className:d.a.section},l.a.createElement("div",{className:d.a.columnMedium},l.a.createElement("h3",null,e.company),l.a.createElement("p",null,e.title," | ",l.a.createElement("em",null,e.location)),l.a.createElement("p",null,e.dates)),l.a.createElement("div",{className:d.a.columnLarge},l.a.createElement("ul",null,t)))},u=t(185),p=t.n(u),f=function(e){var a="beertender"===e.proj.image.class?l.a.createElement("h3",null,l.a.createElement("a",{href:"https://itunes.apple.com/us/app/beertenderatx/id1457719717",target:"_blank",rel:"noopener noreferrer"},e.proj.title)):l.a.createElement("h3",null,e.proj.title),t="beertender"===e.proj.image.class?e.imgData.beertenderImg:e.imgData.todoImg;return l.a.createElement("div",{className:p.a.project},a,l.a.createElement("img",{className:e.proj.image.class,srcSet:t.childImageSharp.sizes.srcSet,alt:e.proj.image.alt}),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.proj.details}}))},h=[{id:1,title:"Software Engineering Intern",company:"Tableau",location:"Palo Alto, CA",dates:"May 2018 - August 2018",bullets:["Developed the Synonyms feature for Tableau's new NLP product, Ask Data, which allows users to tailor their experiences through the use of synonyms in queries","Implemented data persistence, API, and front-end, writing code in Go, C++, and Typescript"]},{id:2,title:"Software Engineering Intern",company:"Google",location:"Mountain View, CA",dates:"January 2018 - April 2018",bullets:["Developed the Ad Group Shift Card for Google Adwords which, with A/B testing, launched to 50% in my last week and then fully to 100% in June","Owned the project completely, writing the back-end and front-end code in Java and Angular2/Dart"]},{id:3,title:"Software Engineering Intern",company:"Unbound Medicine",location:"Media, PA",dates:"June 2017 - August 2017",bullets:["Worked with the lead designer to completely redo the receipt and activation emails with HTML using XSL/XSLT, and added Google Email markup","Utilized Apache Spark/Cassandra to develop a modified shortest paths algorithm written in Scala to compute the path between research articles"]}],g=[{id:1,title:"Beertender 🍺",image:{alt:"Beertender app image",class:"beertender"},details:'<p>iOS app developed in Swift using Firebase for data storage for a cross-disciplinary class. A content-heavy app, Beertender provides users with craft beer recommendations from Austin breweries. Developed by myself and another developer. Check it out on the<b><a href="https://itunes.apple.com/us/app/beertenderatx/id1457719717" target="_blank" rel="noopener noreferrer">app store!</a></b></p>'},{id:2,title:"ToDo ✔",image:{alt:"ToDo app image",class:"todo"},details:'<a href="https://github.com/katzenj/ToDo-iOS" target="_blank" rel="noopener noreferrer">Source Code</a><li>A work-in-progress developed in Swift that expands on the basic concept behind reminders and Apple’s own tutorial</li><li>Allows users to create to-do’s with different features based on inspiration from my favorite productivity apps</li>'}],b=t(186),E=t.n(b);a.default=function(){var e=n.data,a=h.map(function(e){return l.a.createElement(m,{key:e.id,title:e.title,company:e.company,location:e.location,dates:e.dates,bullets:e.bullets})}),t=g.map(function(a){return l.a.createElement(f,{key:a.id,proj:a,imgData:e})});return l.a.createElement("div",null,l.a.createElement(o.a,null,l.a.createElement(c.a,{title:"Experience"}),l.a.createElement("h1",null,"Experience"," ",l.a.createElement("a",{href:e.resume.file.url,target:"_blank",download:!0},l.a.createElement(i.a,{icon:["fas","download"],size:"sm"}))),l.a.createElement("div",{className:E.a.resumeWrapper},a),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("h1",null,"Projects ",l.a.createElement("span",{role:"img","aria-label":"computer"},"💻")),l.a.createElement("div",{className:E.a.projects},t)))}},151:function(e){e.exports={data:{site:{siteMetadata:{title:"Jordan Katzen"}}}}},152:function(e,a,t){var n;e.exports=(n=t(156))&&n.default||n},153:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(4),i=t.n(l),c=t(33),o=t.n(c);t.d(a,"a",function(){return o.a});t(152),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},154:function(e,a,t){"use strict";var n=t(151),r=t(0),l=t.n(r),i=t(160);a.a=function(e){var a=e.title,t=n.data;return l.a.createElement(i.Helmet,{title:a+" | "+t.site.siteMetadata.title})}},155:function(e){e.exports={data:{site:{siteMetadata:{author:"Jordan Katzen"}}}}},156:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),r=t.n(n),l=t(4),i=t.n(l),c=t(55),o=t(2),s=function(e){var a=e.location,t=o.default.getResourcesForPathnameSync(a.pathname);return t?r.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=s},157:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(158),i=t(161),c=t(162),o=t(155),s=t(159),d=t(163),m=t.n(d),u=function(){var e=o.data;return r.a.createElement("footer",{className:m.a.footer},r.a.createElement("a",{href:"https://www.linkedin.com/in/jordankatzen/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(s.a,{icon:["fab","linkedin"],size:"lg"})),r.a.createElement("a",{href:"https://github.com/katzenj/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(s.a,{icon:["fab","github"],size:"lg"})),r.a.createElement("a",{href:"mailto:jkatzen8@gmail.com"},r.a.createElement(s.a,{icon:["fas","paper-plane"],size:"lg"})),r.a.createElement("p",null,e.site.siteMetadata.author," © 2019"))},p=t(151),f=t(153),h=t(164),g=t.n(h),b=function(){var e=p.data;return r.a.createElement("header",{className:g.a.header},r.a.createElement("h1",null,r.a.createElement(f.a,{className:g.a.title,to:"/"},e.site.siteMetadata.title)),r.a.createElement("nav",null,r.a.createElement("ul",{className:g.a.navList},r.a.createElement("li",null,r.a.createElement(f.a,{className:g.a.navItem,activeClassName:g.a.activeNavItem,to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(f.a,{className:g.a.navItem,activeClassName:g.a.activeNavItem,to:"/blog"},"Blog")),r.a.createElement("li",null,r.a.createElement(f.a,{className:g.a.navItem,activeClassName:g.a.activeNavItem,to:"/about"},"About")),r.a.createElement("li",null,r.a.createElement(f.a,{className:g.a.navItem,activeClassName:g.a.activeNavItem,to:"/experience"},"Experience")))))},E=(t(165),t(166)),v=t.n(E);a.a=function(e){return l.b.add(i.b,i.a,c.b,c.a),r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement("div",{className:v.a.container},r.a.createElement("div",{className:v.a.content},e.children)),r.a.createElement(u,null))}},183:function(e){e.exports={data:{beertenderImg:{childImageSharp:{sizes:{srcSet:"/static/4cd5c2c4d02d172adad2b1e246f1fbd2/b1628/Beertender.png 188w,\n/static/4cd5c2c4d02d172adad2b1e246f1fbd2/ae0e1/Beertender.png 375w,\n/static/4cd5c2c4d02d172adad2b1e246f1fbd2/5a67f/Beertender.png 750w,\n/static/4cd5c2c4d02d172adad2b1e246f1fbd2/50def/Beertender.png 1125w,\n/static/4cd5c2c4d02d172adad2b1e246f1fbd2/263a9/Beertender.png 1242w"}}},todoImg:{childImageSharp:{sizes:{srcSet:"/static/73af0f1c021b3f7f0051c9c5f9bff735/60a63/ToDo_Home.jpg 188w,\n/static/73af0f1c021b3f7f0051c9c5f9bff735/4cd1e/ToDo_Home.jpg 375w,\n/static/73af0f1c021b3f7f0051c9c5f9bff735/9f583/ToDo_Home.jpg 750w,\n/static/73af0f1c021b3f7f0051c9c5f9bff735/3ca1c/ToDo_Home.jpg 784w"}}},resume:{title:"KatzenResume",file:{url:"//assets.ctfassets.net/69rukuf02u9h/nnbKqVNAiIjEpZeZgTlTX/3a7d4d9234788fa8ed4b83069aa63572/KatzenResume.pdf"}}}}}}]);
//# sourceMappingURL=component---src-pages-experience-js-5c50636e437a057235cd.js.map