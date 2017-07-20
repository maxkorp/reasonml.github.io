webpackJsonp([1,4],{"./src/components/GuideSidebar.js":function(e,t,r){(function(e){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0}),t.constructTree=t.fixPath=t.sidebarFragment=void 0;var s,l,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=r("./node_modules/react/react.js"),c=(n(i),r("./src/components/Link.js")),u=n(c),d=r("./src/utils/typography.js"),h=r("./src/utils/colors.js"),m=function(t){var r=(t.props,t.current),n=t.root,o=t.search;return e.createElement("div",{css:f.container},e.createElement("div",{css:f.contents},e.createElement(u.default,{to:o},"Search"),e.createElement(p,{current:r,item:n,root:!0,depth:0})))},p=function t(r){var n=r.current,o=r.root,s=r.item,l=s.title,a=s.relativePath,i=s.children,c=r.depth,d=[f.link,f["link"+c],a===n&&f.currentLink];return i.length?e.createElement("div",{css:[f.node,o&&f.rootNode]},o?null:e.createElement(u.default,{to:a,css:d},l),e.createElement("ul",{css:[f.children,o&&f.rootChildren]},i.map(function(r){return e.createElement("li",{style:f.li,key:r.relativePath},e.createElement(t,{current:n,item:r,depth:c+1}))}))):e.createElement(u.default,{css:[f.node,d],to:a},l)};t.default=m;var g=(t.sidebarFragment="** extracted graphql fragment **","@media(max-width: 800px)"),f={container:(s={width:(0,d.rhythm)(8)},o(s,g,a({},(0,d.scale)(0),{width:"auto"})),o(s,"fontFamily",(0,d.headerFontFamily)()),s),contents:{padding:(0,d.rhythm)(1/3)+" "+(0,d.rhythm)(.5)},node:{},li:{margin:0,padding:0},link:(l={textDecoration:"none",color:"currentColor"},o(l,g,{padding:""+(0,d.rhythm)(.25)}),o(l,"display","block"),o(l,":hover",{color:h.accent}),l),currentLink:{textDecoration:"underline",textDecorationColor:h.accent,color:h.accent},link1:a({fontWeight:"bold"},(0,d.scale)(0)),children:a({},(0,d.scale)(-.2),{listStyle:"none",margin:0,padding:0,paddingLeft:(0,d.rhythm)(.5),marginLeft:0,borderLeft:"1px solid #aaa"}),rootChildren:{borderLeft:"none",marginLeft:0,paddingLeft:0}},b=t.fixPath=function(e){return e.match(/\/index\.md$/)?"/"+e.slice(0,-"/index.md".length):"/"+e.slice(0,-".md".length)},j=function(e){return e.map(function(e){var t=e.relativePath,r=e.childMarkdownRemark.frontmatter,n=r.title,o=r.order;return{relativePath:b(t),title:n,order:o}})},x=function(e){return Object.keys(e).map(function(t){return e[t]})},y=function e(t){return a({},t,{children:x(t.children).sort(function(e,t){return e.order-t.order}).map(e)})};t.constructTree=function(e,t){var r={children:{}};return j(t).forEach(function(e){var t=e.relativePath,n=e.title,o=e.order,s=t.split(/\//g).slice(1),l=s.pop(),i=r;s.forEach(function(e){i.children[e]||(i.children[e]={children:{}}),i=i.children[e]}),i.children[l]=a({children:{}},i.children[l],{relativePath:t,title:n,order:o})}),y(r.children[e])}}).call(t,r("./node_modules/glamor-react/lib/index.js"))},"./src/pages/community/example-screenshots/hacker-news.png":function(e,t,r){e.exports=r.p+"static/hacker-news.df4de52a.png"},"./src/pages/community/example-screenshots/llama-snake.png":function(e,t,r){e.exports=r.p+"static/llama-snake.58b4c039.png"},"./src/pages/community/example-screenshots/mareo.png":function(e,t,r){e.exports=r.p+"static/mareo.926d7c31.png"},"./src/pages/community/example-screenshots/reason-maze.png":function(e,t,r){e.exports=r.p+"static/reason-maze.0fee349e.png"},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/chenglou/github/reasonml.github.io/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","add-module-exports","add-module-exports","transform-object-assign",["transform-react-jsx",{"pragma":"Glamor.createElement"}],"babel-plugin-glamor"],"presets":["/Users/chenglou/github/reasonml.github.io/node_modules/babel-preset-env/lib/index.js","/Users/chenglou/github/reasonml.github.io/node_modules/babel-preset-stage-0/lib/index.js","/Users/chenglou/github/reasonml.github.io/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/community/examples.js':function(e,t,r){(function(n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r("./node_modules/react/react.js"),u=o(c),d=[{title:"Reason Maze",url:"https://github.com/jaredly/reason-maze",img:r("./src/pages/community/example-screenshots/reason-maze.png")},{title:"Mareo: Mario + Reason",url:"https://github.com/chenglou/Mareo",img:r("./src/pages/community/example-screenshots/mareo.png")},{title:"ReasonReact Hacker News",url:"https://github.com/jsdf/reason-react-hacker-news",img:r("./src/pages/community/example-screenshots/hacker-news.png")},{title:"Reason snake",url:"https://github.com/rdavison/llama-snake/tree/master/websnake",img:r("./src/pages/community/example-screenshots/llama-snake.png")}],h=function(e){function t(){return s(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),i(t,[{key:"render",value:function(){return n.createElement("div",{css:m.container},d.map(function(e,t){var r=e.title,o=e.url,s=e.img;return n.createElement("a",{key:t,href:o,css:m.link},n.createElement("img",{src:s,css:m.img}),n.createElement("span",{css:m.title},r))}))}}]),t}(u.default.Component);t.default=h;var m={container:{display:"flex",flexDirection:"row",flexWrap:"wrap"},link:{display:"flex",alignItems:"center",margin:10,flexDirection:"column",textDecoration:"none",color:"currentColor",":hover":{textDecoration:"underline"}},img:{width:250,height:250,marginBottom:.5},title:{}};e.exports=t.default}).call(t,r("./node_modules/glamor-react/lib/index.js"))},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/chenglou/github/reasonml.github.io/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","add-module-exports","add-module-exports","transform-object-assign",["transform-react-jsx",{"pragma":"Glamor.createElement"}],"babel-plugin-glamor"],"presets":["/Users/chenglou/github/reasonml.github.io/node_modules/babel-preset-env/lib/index.js","/Users/chenglou/github/reasonml.github.io/node_modules/babel-preset-stage-0/lib/index.js","/Users/chenglou/github/reasonml.github.io/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/templates/Guide.js':function(e,t,r){(function(e){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function i(e){var t;return(t=[e.relativePath]).concat.apply(t,a(e.children.map(function(e){return i(e)})))}Object.defineProperty(t,"__esModule",{value:!0}),t.pageQuery=void 0;var c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r("./node_modules/react/react.js"),d=n(u),h=r("./node_modules/react-helmet/lib/Helmet.js"),m=n(h),p=r("./src/components/Section.js"),g=n(p),f=r("./src/components/GuideSidebar.js"),b=n(f),j=r("./src/utils/colors.js"),x=r("./static/edit-icon.svg"),y=n(x),v=r("./src/components/Link.js"),k=n(v),w=r("./src/components/Header.js"),_=n(w);r("./syntax-highlighting/xcode.css"),r("./src/templates/guide.css");var E=function(e){return"https://github.com/reasonml/reasonml.github.io/edit/source/src/pages/"+e},M=function(t){function n(){return o(this,n),s(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return l(n,t),c(n,[{key:"renderSequenceLinks",value:function(){var t=this.props.data,r=t.allFile,n=t.file.relativePath;if(!n.startsWith("guide"))return null;for(var o=(0,f.fixPath)(n),s=this.props.pathContext.section,l=(0,f.constructTree)(s,r.edges.map(function(e){return e.node})),a=i(l),c=null,u=null,d=0;d<a.length;d++)if(a[d]===o){c=a[d-1],u=a[d+1];break}return e.createElement("div",{css:I.sequenceLinks},e.createElement("div",null,c&&e.createElement(k.default,{to:c},e.createElement("span",null,"← Previous"))),e.createElement("div",null,u&&e.createElement(k.default,{to:u},e.createElement("span",null,"Next →"))))}},{key:"renderMain",value:function(){var t=this.props.data.file,n=t.relativePath,o=t.childMarkdownRemark,s=o.frontmatter.title,l=o.html,a=void 0,i=void 0;if("community/examples.md"===n){var c=r('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/chenglou/github/reasonml.github.io/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","add-module-exports","add-module-exports","transform-object-assign",["transform-react-jsx",{"pragma":"Glamor.createElement"}],"babel-plugin-glamor"],"presets":["/Users/chenglou/github/reasonml.github.io/node_modules/babel-preset-env/lib/index.js","/Users/chenglou/github/reasonml.github.io/node_modules/babel-preset-stage-0/lib/index.js","/Users/chenglou/github/reasonml.github.io/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/community/examples.js');i=e.createElement(c,null),a=E("community/examples.js")}else i=e.createElement("div",{className:"markdown-content",dangerouslySetInnerHTML:{__html:l}}),a=E(n);return e.createElement("div",{css:I.main},e.createElement("h2",{css:I.title},s,e.createElement(k.default,{css:I.editLink,to:a},e.createElement("img",{css:I.editIcon,src:y.default}),e.createElement("span",{css:I.editText},"Suggest an edit"))),i,this.renderSequenceLinks())}},{key:"render",value:function(){var t=this.props.pathContext,r=t.section,n=t.sectionTitle,o=this.props.data,s=o.allFile,l=o.file,a=l.relativePath,i=l.childMarkdownRemark,c=i.frontmatter.title;i.html;return e.createElement("div",null,e.createElement(m.default,{title:c}),e.createElement(g.default,{backgroundColor:j.accent,css:{color:"white"}},e.createElement(_.default,{inverted:!0}),e.createElement("div",{css:{alignItems:"center"}},e.createElement("h1",null,e.createElement(k.default,{css:I.topLink,to:"/"+r},n)))),e.createElement(g.default,{css:I.contentSection},e.createElement("div",{css:I.sidebar},e.createElement(b.default,{current:(0,f.fixPath)(a),search:"/"+r+"/search",root:(0,f.constructTree)(r,s.edges.map(function(e){return e.node}))})),this.renderMain()))}}]),n}(d.default.Component);t.default=M;var I={editLink:{fontSize:"14px",fontWeight:"normal",lineHeight:"25px"},title:{borderBottom:"1px solid #aaa",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"flex-end"},contentSection:{flexDirection:"row","@media(max-width: 800px)":{flexDirection:"column-reverse"}},sidebar:{},main:{position:"relative",flex:1,padding:"2em",minWidth:0},editIcon:{marginBottom:0,"@media(min-width: 800px)":{display:"none"}},editText:{"@media(max-width: 800px)":{display:"none"}},sequenceLinks:{flexDirection:"row",justifyContent:"space-between",paddingTop:32}};t.pageQuery="** extracted graphql fragment **"}).call(t,r("./node_modules/glamor-react/lib/index.js"))},"./src/templates/guide.css":function(e,t,r){t=e.exports=r("./node_modules/css-loader/lib/css-base.js")(),t.push([e.id,".hljs{background:#fbfafa;border:1px solid #eee;display:block;padding:10px;-webkit-border-radius:1px;border-radius:1px;overflow:auto}td>pre{padding:5px 15px;margin:0}.markdown-content a{color:#db4d3f;text-decoration:none}.markdown-content a:hover{text-decoration:underline}.markdown-content a:visited{color:#b13c2e}",""])},"./static/edit-icon.svg":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0zIDE3LjI1VjIxaDMuNzVMMTcuODEgOS45NGwtMy43NS0zLjc1TDMgMTcuMjV6TTIwLjcxIDcuMDRjLjM5LS4zOS4zOS0xLjAyIDAtMS40MWwtMi4zNC0yLjM0Yy0uMzktLjM5LTEuMDItLjM5LTEuNDEgMGwtMS44MyAxLjgzIDMuNzUgMy43NSAxLjgzLTEuODN6Ii8+CiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+Cjwvc3ZnPg=="},"./syntax-highlighting/xcode.css":function(e,t,r){t=e.exports=r("./node_modules/css-loader/lib/css-base.js")(),t.push([e.id,".hljs{display:block;overflow-x:auto;padding:.5em;background:#fff;color:#000;-webkit-text-size-adjust:none}.hljs-comment{color:#006a00}.hljs-keyword,.hljs-literal,.nginx .hljs-title{color:#aa1094}.hljs-list .hljs-title,.hljs-name,.hljs-request,.hljs-status,.hljs-tag .hljs-title,.hljs-winutils,.http .hljs-title,.method,.setting .hljs-value,.tex .hljs-command{color:#008}.hljs-envvar,.tex .hljs-special{color:#660}.hljs-string{color:#c41a16}.apache .hljs-cbracket,.hljs-attr_selector,.hljs-cdata,.hljs-date,.hljs-filter .hljs-argument,.hljs-regexp,.hljs-tag .hljs-value{color:#080}.coffeescript .hljs-attribute,.css .hljs-function,.hljs-decorator,.hljs-function .hljs-title,.hljs-hexcolor,.hljs-number,.hljs-pi,.hljs-prompt,.hljs-rule .hljs-value,.hljs-shebang,.hljs-sub .hljs-identifier,.hljs-symbol,.hljs-symbol .hljs-string,.hljs-tag,.hljs-tag .hljs-keyword,.ini .hljs-title{color:#1c00cf}.clojure .hljs-attribute,.hljs-built_in,.hljs-class .hljs-id,.hljs-class .hljs-title,.hljs-doctype,.hljs-tag .hljs-attribute,.hljs-type,.hljs-typename,.setting,.smalltalk .hljs-class{color:#5b2f8e}.hljs-params,.hljs-variable{color:#3f6e74}.css .hljs-tag,.hljs-pseudo,.hljs-rule .hljs-property,.hljs-subst{color:#000}.css .hljs-class,.css .hljs-id{color:#9b703f}.hljs-value .hljs-important{color:#f70;font-weight:700}.hljs-rule .hljs-keyword{color:#c5af75}.apache .hljs-sqbracket,.hljs-annotation,.nginx .hljs-built_in{color:#9b859d}.hljs-pragma,.hljs-preprocessor,.hljs-preprocessor *{color:#643820}.tex .hljs-formula{background-color:#eee;font-style:italic}.diff .hljs-header,.hljs-chunk{color:gray;font-weight:700}.diff .hljs-change{background-color:#bccff9}.hljs-addition{background-color:#baeeba}.hljs-deletion{background-color:#ffc8bd}.hljs-comment .hljs-doctag{font-weight:700}.method .hljs-id{color:#000}",""])}});
//# sourceMappingURL=page-component---src-templates-guide-js-e477393f8e5122bd6e81.js.map