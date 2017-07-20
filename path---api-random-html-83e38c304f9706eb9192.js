webpackJsonp([205],{"./node_modules/json-loader/index.js!./.cache/json/api-random-html.json":function(e,n){e.exports={data:{file:{relativePath:"api/Random.html",childRawHtml:{content:'<div class="ocamldoc">\n<div class="navbar"><a class="pre" href="Queue.html" title="Queue">Previous</a>\n&#xA0;<a class="up" href="index.html" title="Index">Up</a>\n&#xA0;<a class="post" href="Scanf.html" title="Scanf">Next</a>\n</div>\n<h1>Module <a href="type_Random.html">Random</a></h1>\n\n<pre><span class="keyword">module</span> Random: sig .. end</pre><div class="info module top">\nPseudo-random number generators (PRNG).<br>\n</div>\n<hr width="100%">\n<br>\n<h6 id="6_Basicfunctions">Basic functions</h6><br>\n\n<pre><span class="keyword">let</span> init: int =&gt; unit;\n</pre><div class="info ">\nInitialize the generator, using the argument as a seed.\n     The same seed will always yield the same sequence of numbers.<br>\n</div>\n\n<pre><span class="keyword">let</span> full_init: array int =&gt; unit;\n</pre><div class="info ">\nSame as <a href="Random.html#VALinit"><code class="code">Random.init</code></a> but takes more data as seed.<br>\n</div>\n\n<pre><span class="keyword">let</span> self_init: unit =&gt; unit;\n</pre><div class="info ">\nInitialize the generator with a random seed chosen\n   in a system-dependent way.  If <code class="code">/dev/urandom</code> is available on\n   the host machine, it is used to provide a highly random initial\n   seed.  Otherwise, a less random seed is computed from system\n   parameters (current time, process IDs).<br>\n</div>\n\n<pre><span class="keyword">let</span> bits: unit =&gt; int;\n</pre><div class="info ">\nReturn 30 random bits in a nonnegative integer.<br>\n<b>Before 3.12.0 </b> used a different algorithm (affects all the following\n                   functions)<br>\n</div>\n\n<pre><span class="keyword">let</span> int: int =&gt; int;\n</pre><div class="info ">\n<code class="code">Random.int bound</code> returns a random integer between 0 (inclusive)\n     and <code class="code">bound</code> (exclusive).  <code class="code">bound</code> must be greater than 0 and less\n     than 2<sup class="superscript">30</sup>.<br>\n</div>\n\n<pre><span class="keyword">let</span> int32: Int32.t =&gt; Int32.t;\n</pre><div class="info ">\n<code class="code">Random.int32 bound</code> returns a random integer between 0 (inclusive)\n     and <code class="code">bound</code> (exclusive).  <code class="code">bound</code> must be greater than 0.<br>\n</div>\n\n<pre><span class="keyword">let</span> nativeint: Nativeint.t =&gt; Nativeint.t;\n</pre><div class="info ">\n<code class="code">Random.nativeint bound</code> returns a random integer between 0 (inclusive)\n     and <code class="code">bound</code> (exclusive).  <code class="code">bound</code> must be greater than 0.<br>\n</div>\n\n<pre><span class="keyword">let</span> int64: Int64.t =&gt; Int64.t;\n</pre><div class="info ">\n<code class="code">Random.int64 bound</code> returns a random integer between 0 (inclusive)\n     and <code class="code">bound</code> (exclusive).  <code class="code">bound</code> must be greater than 0.<br>\n</div>\n\n<pre><span class="keyword">let</span> float: float =&gt; float;\n</pre><div class="info ">\n<code class="code">Random.float bound</code> returns a random floating-point number\n   between 0 and <code class="code">bound</code> (inclusive).  If <code class="code">bound</code> is\n   negative, the result is negative or zero.  If <code class="code">bound</code> is 0,\n   the result is 0.<br>\n</div>\n\n<pre><span class="keyword">let</span> bool: unit =&gt; bool;\n</pre><div class="info ">\n<code class="code">Random.bool ()</code> returns <code class="code">true</code> or <code class="code">false</code> with probability 0.5 each.<br>\n</div>\n<br>\n<h6 id="6_Advancedfunctions">Advanced functions</h6><br>\n<br>\n<h6 id="6_Advancedfunctions">Advanced functions</h6><br>\n<br>\nThe functions from module <code class="code">State</code> manipulate the current state\n    of the random generator explicitly.\n    This allows using one or several deterministic PRNGs,\n    even in a multi-threaded program, without interference from\n    other parts of the program.<br>\n\n<pre><span class="keyword">module</span> State: sig .. end</pre>\n<pre><span class="keyword">let</span> get_state: unit =&gt; State.t;\n</pre><div class="info ">\nReturn the current state of the generator used by the basic functions.<br>\n</div>\n\n<pre><span class="keyword">let</span> set_state: State.t =&gt; unit;\n</pre><div class="info ">\nSet the state of the generator used by the basic functions.<br>\n</div>\n</div>'}}},pathContext:{relativePath:"api/Random.html"}}}});
//# sourceMappingURL=path---api-random-html-83e38c304f9706eb9192.js.map