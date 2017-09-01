webpackJsonp([8],{"./src/components/GuideSidebar.js":function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.constructTree=t.fixPath=t.sidebarFragment=void 0;var o,a,l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=n("./node_modules/react/react.js"),s=(r(c),n("./src/components/Link.js")),u=r(s),d=n("./src/utils/typography.js"),h=n("./src/utils/colors.js"),m=function(t){var n=(t.props,t.current),r=t.root,i=t.search;return e.createElement("div",{css:g.container},e.createElement("div",{css:g.contents},e.createElement(u.default,{css:g.link,to:i},e.createElement("svg",{css:g.searchIcon,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 15 15"},e.createElement("path",{fill:h.text,d:"M6.213 12.548C2.783 12.548 0 9.738 0 6.274 0 2.81 2.782 0 6.213 0c3.432 0 6.214 2.81 6.214 6.274 0 1.358-.428 2.616-1.154 3.643L15 13.482 13.576 15l-3.77-3.606c-1.015.727-2.254 1.154-3.593 1.154zm0-2.09c2.288 0 4.143-1.874 4.143-4.184S8.5 2.09 6.213 2.09c-2.287 0-4.142 1.874-4.142 4.184s1.856 4.183 4.143 4.183z"})),"Search"),e.createElement(p,{current:n,item:r,root:!0,depth:0})))},p=function t(n){var r=n.current,i=n.root,o=n.item,a=o.title,l=o.relativePath,c=o.children,s=n.depth,d=[g.link,g["link"+s],l===r&&g.currentLink];return c.length?e.createElement("div",{css:[g.node,i&&g.rootNode]},i?null:e.createElement(u.default,{to:l,css:d},a),e.createElement("ul",{css:[g.children,i&&g.rootChildren]},c.map(function(n){return e.createElement("li",{style:g.li,key:n.relativePath},e.createElement(t,{current:r,item:n,depth:s+1}))}))):e.createElement(u.default,{css:[g.node,d],to:l},a)};t.default=m;var f=(t.sidebarFragment="** extracted graphql fragment **","@media(max-width: 800px)"),g={container:(o={width:(0,d.rhythm)(8),padding:"20px"},i(o,f,l({},(0,d.scale)(0),{width:"auto"})),i(o,"fontFamily",(0,d.headerFontFamily)()),o),contents:{padding:(0,d.rhythm)(1/3)+" "+(0,d.rhythm)(.5)},node:{},li:{margin:0,padding:0},link:(a={textDecoration:"none",color:"currentColor"},i(a,f,{padding:""+(0,d.rhythm)(.25)}),i(a,"display","block"),i(a,":hover",{color:h.accent}),a),currentLink:{textDecoration:"underline",textDecorationColor:h.accent,color:h.accent},link1:l({fontWeight:"bold"},(0,d.scale)(0),{marginTop:"6px",marginBottom:"6px"}),children:l({},(0,d.scale)(-.2),{listStyle:"none",margin:0,padding:0,paddingLeft:(0,d.rhythm)(.5),marginLeft:0,borderLeft:"1px solid "+h.dividerLine}),rootChildren:{borderLeft:"none",marginLeft:0,paddingLeft:0},searchIcon:{width:"15px",height:"15px",marginRight:"5px"}},b=t.fixPath=function(e){return e.match(/\/index\.md$/)?"/"+e.slice(0,-"/index.md".length):"/"+e.slice(0,-".md".length)},v=function(e){return e.map(function(e){var t=e.relativePath,n=e.childMarkdownRemark.frontmatter,r=n.title,i=n.order;return{relativePath:b(t),title:r,order:i}})},x=function(e){return Object.keys(e).map(function(t){return e[t]})},y=function e(t){return l({},t,{children:x(t.children).sort(function(e,t){return e.order-t.order}).map(e)})};t.constructTree=function(e,t){var n={children:{}};return v(t).forEach(function(e){var t=e.relativePath,r=e.title,i=e.order,o=t.split(/\//g).slice(1),a=o.pop(),c=n;o.forEach(function(e){c.children[e]||(c.children[e]={children:{}}),c=c.children[e]}),c.children[a]=l({children:{}},c.children[a],{relativePath:t,title:r,order:i})}),y(n.children[e])}}).call(t,n("./node_modules/glamor-react/lib/index.js"))},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/chenglou/Github/reasonml.github.io/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","add-module-exports","add-module-exports","transform-object-assign",["transform-react-jsx",{"pragma":"Glamor.createElement"}],"babel-plugin-glamor"],"presets":["/Users/chenglou/Github/reasonml.github.io/node_modules/babel-preset-env/lib/index.js","/Users/chenglou/Github/reasonml.github.io/node_modules/babel-preset-stage-0/lib/index.js","/Users/chenglou/Github/reasonml.github.io/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/templates/Search.js':function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.pageQuery=void 0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n("./node_modules/react/react.js"),s=r(c),u=n("./node_modules/react-helmet/lib/Helmet.js"),d=r(u),h=n("./src/components/Section.js"),m=r(h),p=n("./src/components/GuideSidebar.js"),f=r(p),g=n("./src/utils/colors.js"),b=n("./src/utils/typography.js"),v=n("./src/components/Link.js"),x=r(v),y=n("./src/components/Header.js"),E=r(y),j=function e(t,n){[].forEach.call(t.childNodes,function(r){var i=n(r);i?t.replaceChild(i,r):e(r,n)})},w=function(e,t){j(e,function(e){if("#text"===e.nodeName&&e.nodeValue.match(t)){var n=document.createElement("span");return n.innerHTML=e.nodeValue.replace(t,function(e){return'<span class="search-highlighted-result">'+e+"</span>"}),n}})},k=function(e,t){var n=document.createElement("div");n.innerHTML=e;var r=[null];return[].forEach.call(n.childNodes,function(e){e.textContent.match(t)?(w(e,t),r.push(e.outerHTML)):null!==r[r.length-1]&&r.push(null)}),null===r[0]&&r.shift(),null===r[r.length-1]&&r.pop(),r.map(function(e){return null===e?'<p class="search-elided-section">...</p>':e}).join("\n")},_=function(e,t){var n=new RegExp(t,"ig");return e.filter(function(e){var t=e.node.childMarkdownRemark,r=t.html,i=t.frontmatter.title;if(i.match(n)||r.match(n))return!0}).map(function(e){var n=e.node,r=n.relativePath,i=n.childMarkdownRemark,o=i.html,a=i.frontmatter.title;return{relativePath:r,html:k(o,t),title:a}})},L=function(t){function n(e){i(this,n);var t=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));P.call(t);var r=decodeURIComponent(e.location.search.slice(1));return t.state={results:r.trim().length>2?_(e.data.allFile.edges,r.toLowerCase()):[],searchText:r},t}return a(n,t),l(n,[{key:"componentDidMount",value:function(){this.input.focus()}},{key:"renderMain",value:function(){var t=this;return e.createElement("div",{css:T.container},e.createElement("div",{css:T.searchBar},"Search",e.createElement("input",{ref:function(e){return t.input=e},css:T.searchInput,onChange:function(e){return t.setText(e.target.value)},value:this.state.searchText,type:"text"})),e.createElement("div",{css:T.results},this.state.results.slice(0,10).map(function(t){return e.createElement("div",{key:t.relativePath,css:T.result},e.createElement("h4",{css:T.resultTitleWrapper},e.createElement(x.default,{css:T.resultTitle,to:(0,p.fixPath)(t.relativePath)},"‣ ",t.title)),e.createElement("div",{css:T.resultBody,dangerouslySetInnerHTML:{__html:t.html}}))})))}},{key:"render",value:function(){var t=this.props.pathContext,n=t.section,r=t.sectionTitle,i=this.props.data.allFile;return e.createElement("div",null,e.createElement(d.default,{title:r+" Search"}),e.createElement(m.default,{backgroundColor:g.accent,css:{color:"white"}},e.createElement(E.default,{inverted:!0}),e.createElement("div",{css:{alignItems:"center"}},e.createElement("h1",null,e.createElement(x.default,{css:T.topLink,to:"/"+n},r)))),e.createElement(m.default,{css:T.contentSection},e.createElement("div",{css:T.sidebar},e.createElement(f.default,{current:n+"/search",search:"/"+n+"/search",root:(0,p.constructTree)(n,i.edges.map(function(e){return e.node}))})),this.renderMain()))}}]),n}(s.default.Component),P=function(){var e=this;this.setText=function(t){window.history.replaceState({},document.title,window.location.pathname+"?"+t),e.setState({searchText:t,results:t.trim().length>2?_(e.props.data.allFile.edges,t.toLowerCase()):[]})}};t.default=L;var T={container:{flex:1,flexShrink:1},editLink:{fontSize:"14px",fontWeight:"normal",lineHeight:"25px"},title:{borderBottom:"1px solid "+g.dividerLine,display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"flex-end"},contentSection:{flexDirection:"row","@media(max-width: 800px)":{flexDirection:"column-reverse"}},sidebar:{},main:{position:"relative",flex:1,padding:"2em",minWidth:0},searchBar:{flexDirection:"row",alignItems:"center",padding:10},searchInput:{flex:1,padding:"5px 10px",fontSize:18,marginLeft:10},results:{padding:10},result:{},resultTitle:{fontWeight:"bold"},resultTitleWrapper:{marginBottom:(0,b.rhythm)(.5)},resultBody:{fontSize:12,paddingLeft:20,"& .search-highlighted-result":{backgroundColor:"gold",fontWeight:"bold"},"& p":{marginBottom:10},"& .search-elided-section":{color:"#aaa",height:5,marginBottom:15,marginTop:-10},"& ul":{marginBottom:5},"& code":{fontSize:"inherit"}}};t.pageQuery="** extracted graphql fragment **"}).call(t,n("./node_modules/glamor-react/lib/index.js"))}});
//# sourceMappingURL=page-component---src-templates-search-js-c0511f99a36b18eb1e05.js.map