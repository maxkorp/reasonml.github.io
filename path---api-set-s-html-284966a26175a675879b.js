webpackJsonp([198],{"./node_modules/json-loader/index.js!./.cache/json/api-set-s-html.json":function(e,s){e.exports={data:{file:{relativePath:"api/Set.S.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="Set.OrderedType.html" title="Set.OrderedType">Previous</a>\n&#xA0;<a class="up" href="Set.html" title="Set">Up</a>\n&#xA0;</div>\n<h1>Module type <a href="type_Set.S.html">Set.S</a></h1>\n\n<pre><span class="keyword">module</span> type S = sig .. end</pre><div class="info modtype top">\nOutput signature of the functor <a href="Set.Make.html"><code class="code">Set.Make</code></a>.<br>\n</div>\n<hr width="100%">\n\n<pre><span class="keyword">type</span> elt;\n</pre>\n<div class="info ">\nThe type of the set elements.<br>\n</div>\n\n\n<pre><span class="keyword">type</span> t;\n</pre>\n<div class="info ">\nThe type of sets.<br>\n</div>\n\n\n<pre><span class="keyword">let</span> empty: t;\n</pre><div class="info ">\nThe empty set.<br>\n</div>\n\n<pre><span class="keyword">let</span> is_empty: t =&gt; bool;\n</pre><div class="info ">\nTest whether a set is empty or not.<br>\n</div>\n\n<pre><span class="keyword">let</span> mem: elt =&gt; t =&gt; bool;\n</pre><div class="info ">\n<code class="code">mem x s</code> tests whether <code class="code">x</code> belongs to the set <code class="code">s</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> add: elt =&gt; t =&gt; t;\n</pre><div class="info ">\n<code class="code">add x s</code> returns a set containing all elements of <code class="code">s</code>,\n       plus <code class="code">x</code>. If <code class="code">x</code> was already in <code class="code">s</code>, <code class="code">s</code> is returned unchanged.<br>\n</div>\n\n<pre><span class="keyword">let</span> singleton: elt =&gt; t;\n</pre><div class="info ">\n<code class="code">singleton x</code> returns the one-element set containing only <code class="code">x</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> remove: elt =&gt; t =&gt; t;\n</pre><div class="info ">\n<code class="code">remove x s</code> returns a set containing all elements of <code class="code">s</code>,\n       except <code class="code">x</code>. If <code class="code">x</code> was not in <code class="code">s</code>, <code class="code">s</code> is returned unchanged.<br>\n</div>\n\n<pre><span class="keyword">let</span> union: t =&gt; t =&gt; t;\n</pre><div class="info ">\nSet union.<br>\n</div>\n\n<pre><span class="keyword">let</span> inter: t =&gt; t =&gt; t;\n</pre><div class="info ">\nSet intersection.<br>\n</div>\n\n<pre><span class="keyword">let</span> diff: t =&gt; t =&gt; t;\n</pre><div class="info ">\nSet difference.<br>\n</div>\n\n<pre><span class="keyword">let</span> compare: t =&gt; t =&gt; int;\n</pre><div class="info ">\nTotal ordering between sets. Can be used as the ordering function\n       for doing sets of sets.<br>\n</div>\n\n<pre><span class="keyword">let</span> equal: t =&gt; t =&gt; bool;\n</pre><div class="info ">\n<code class="code">equal s1 s2</code> tests whether the sets <code class="code">s1</code> and <code class="code">s2</code> are\n       equal, that is, contain equal elements.<br>\n</div>\n\n<pre><span class="keyword">let</span> subset: t =&gt; t =&gt; bool;\n</pre><div class="info ">\n<code class="code">subset s1 s2</code> tests whether the set <code class="code">s1</code> is a subset of\n       the set <code class="code">s2</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> iter: (elt =&gt; unit) =&gt; t =&gt; unit;\n</pre><div class="info ">\n<code class="code">iter f s</code> applies <code class="code">f</code> in turn to all elements of <code class="code">s</code>.\n       The elements of <code class="code">s</code> are presented to <code class="code">f</code> in increasing order\n       with respect to the ordering over the type of the elements.<br>\n</div>\n\n<pre><span class="keyword">let</span> fold: (elt =&gt; &apos;a =&gt; &apos;a) =&gt; t =&gt; &apos;a =&gt; &apos;a;\n</pre><div class="info ">\n<code class="code">fold f s a</code> computes <code class="code">(f xN ... (f x2 (f x1 a))...)</code>,\n       where <code class="code">x1 ... xN</code> are the elements of <code class="code">s</code>, in increasing order.<br>\n</div>\n\n<pre><span class="keyword">let</span> for_all: (elt =&gt; bool) =&gt; t =&gt; bool;\n</pre><div class="info ">\n<code class="code">for_all p s</code> checks if all elements of the set\n       satisfy the predicate <code class="code">p</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> exists: (elt =&gt; bool) =&gt; t =&gt; bool;\n</pre><div class="info ">\n<code class="code">exists p s</code> checks if at least one element of\n       the set satisfies the predicate <code class="code">p</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> filter: (elt =&gt; bool) =&gt; t =&gt; t;\n</pre><div class="info ">\n<code class="code">filter p s</code> returns the set of all elements in <code class="code">s</code>\n       that satisfy predicate <code class="code">p</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> partition: (elt =&gt; bool) =&gt; t =&gt; (t, t);\n</pre><div class="info ">\n<code class="code">partition p s</code> returns a pair of sets <code class="code">(s1, s2)</code>, where\n       <code class="code">s1</code> is the set of all the elements of <code class="code">s</code> that satisfy the\n       predicate <code class="code">p</code>, and <code class="code">s2</code> is the set of all the elements of\n       <code class="code">s</code> that do not satisfy <code class="code">p</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> cardinal: t =&gt; int;\n</pre><div class="info ">\nReturn the number of elements of a set.<br>\n</div>\n\n<pre><span class="keyword">let</span> elements: t =&gt; list elt;\n</pre><div class="info ">\nReturn the list of all elements of the given set.\n       The returned list is sorted in increasing order with respect\n       to the ordering <code class="code">Ord.compare</code>, where <code class="code">Ord</code> is the argument\n       given to <a href="Set.Make.html"><code class="code">Set.Make</code></a>.<br>\n</div>\n\n<pre><span class="keyword">let</span> min_elt: t =&gt; elt;\n</pre><div class="info ">\nReturn the smallest element of the given set\n       (with respect to the <code class="code">Ord.compare</code> ordering), or raise\n       <code class="code">Not_found</code> if the set is empty.<br>\n</div>\n\n<pre><span class="keyword">let</span> max_elt: t =&gt; elt;\n</pre><div class="info ">\nSame as <a href="Set.S.html#VALmin_elt"><code class="code">Set.S.min_elt</code></a>, but returns the largest element of the\n       given set.<br>\n</div>\n\n<pre><span class="keyword">let</span> choose: t =&gt; elt;\n</pre><div class="info ">\nReturn one element of the given set, or raise <code class="code">Not_found</code> if\n       the set is empty. Which element is chosen is unspecified,\n       but equal elements will be chosen for equal sets.<br>\n</div>\n\n<pre><span class="keyword">let</span> split: elt =&gt; t =&gt; (t, bool, t);\n</pre><div class="info ">\n<code class="code">split x s</code> returns a triple <code class="code">(l, present, r)</code>, where\n          <code class="code">l</code> is the set of elements of <code class="code">s</code> that are\n          strictly less than <code class="code">x</code>;\n          <code class="code">r</code> is the set of elements of <code class="code">s</code> that are\n          strictly greater than <code class="code">x</code>;\n          <code class="code">present</code> is <code class="code">false</code> if <code class="code">s</code> contains no element equal to <code class="code">x</code>,\n          or <code class="code">true</code> if <code class="code">s</code> contains an element equal to <code class="code">x</code>.<br>\n</div>\n\n<pre><span class="keyword">let</span> find: elt =&gt; t =&gt; elt;\n</pre><div class="info ">\n<code class="code">find x s</code> returns the element of <code class="code">s</code> equal to <code class="code">x</code> (according\n        to <code class="code">Ord.compare</code>), or raise <code class="code">Not_found</code> if no such element\n        exists.<br>\n<b>Since</b> 4.01.0<br>\n</div>\n\n<pre><span class="keyword">let</span> of_list: list elt =&gt; t;\n</pre><div class="info ">\n<code class="code">of_list l</code> creates a set from a list of elements.\n        This is usually more efficient than folding <code class="code">add</code> over the list,\n        except perhaps for lists with many duplicated elements.<br>\n<b>Since</b> 4.02.0<br>\n</div>\n</div>'}}},pathContext:{relativePath:"api/Set.S.html"}}}});
//# sourceMappingURL=path---api-set-s-html-284966a26175a675879b.js.map