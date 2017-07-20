webpackJsonp([234],{"./node_modules/json-loader/index.js!./.cache/json/api-more-labels-hashtbl-s-html.json":function(a,e){a.exports={data:{file:{relativePath:"api/MoreLabels.Hashtbl.S.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="MoreLabels.Hashtbl.SeededHashedType.html" title="MoreLabels.Hashtbl.SeededHashedType">Previous</a>\n&#xA0;<a class="up" href="MoreLabels.Hashtbl.html" title="MoreLabels.Hashtbl">Up</a>\n&#xA0;<a class="post" href="MoreLabels.Hashtbl.SeededS.html" title="MoreLabels.Hashtbl.SeededS">Next</a>\n</div>\n<h1>Module type <a href="type_MoreLabels.Hashtbl.S.html">MoreLabels.Hashtbl.S</a></h1>\n\n<pre><span class="keyword">module</span> type S = sig .. end</pre><hr width="100%">\n\n<pre><span class="keyword">type</span> key;\n</pre>\n\n\n<pre><span class="keyword">type</span> t &apos;a;\n</pre>\n\n\n<pre><span class="keyword">let</span> create: int =&gt; t &apos;a;\n</pre>\n<pre><span class="keyword">let</span> clear: t &apos;a =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> reset: t &apos;a =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> copy: t &apos;a =&gt; t &apos;a;\n</pre>\n<pre><span class="keyword">let</span> add: t &apos;a =&gt; key::key =&gt; data::&apos;a =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> remove: t &apos;a =&gt; key =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> find: t &apos;a =&gt; key =&gt; &apos;a;\n</pre>\n<pre><span class="keyword">let</span> find_all: t &apos;a =&gt; key =&gt; list &apos;a;\n</pre>\n<pre><span class="keyword">let</span> replace: t &apos;a =&gt; key::key =&gt; data::&apos;a =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> mem: t &apos;a =&gt; key =&gt; bool;\n</pre>\n<pre><span class="keyword">let</span> iter: f::(key::key =&gt; data::&apos;a =&gt; unit) =&gt; t &apos;a =&gt; unit;\n</pre>\n<pre><span class="keyword">let</span> fold: f::(key::key =&gt; data::&apos;a =&gt; &apos;b =&gt; &apos;b) =&gt; t &apos;a =&gt; init::&apos;b =&gt; &apos;b;\n</pre>\n<pre><span class="keyword">let</span> length: t &apos;a =&gt; int;\n</pre>\n<pre><span class="keyword">let</span> stats: t &apos;a =&gt; MoreLabels.Hashtbl.statistics;\n</pre></div>'}}},pathContext:{relativePath:"api/MoreLabels.Hashtbl.S.html"}}}});
//# sourceMappingURL=path---api-more-labels-hashtbl-s-html-a23664d0cf74cce1495e.js.map