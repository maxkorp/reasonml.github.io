webpackJsonp([36],{"./node_modules/json-loader/index.js!./.cache/json/guide-language-function.json":function(e,a){e.exports={data:{allFile:{edges:[{node:{relativePath:"guide/examples.md",childMarkdownRemark:{frontmatter:{title:"Examples",order:60}}}},{node:{relativePath:"guide/index.md",childMarkdownRemark:{frontmatter:{title:"The Reason Guide",order:0}}}},{node:{relativePath:"guide/ocaml.md",childMarkdownRemark:{frontmatter:{title:"Comparison to OCaml",order:50}}}},{node:{relativePath:"guide/what-and-why.md",childMarkdownRemark:{frontmatter:{title:"What & Why",order:0}}}},{node:{relativePath:"guide/editor-tools/editors-plugins.md",childMarkdownRemark:{frontmatter:{title:"Editors Plugins",order:20}}}},{node:{relativePath:"guide/editor-tools/global-installation.md",childMarkdownRemark:{frontmatter:{title:"Global Installation",order:10}}}},{node:{relativePath:"guide/editor-tools/extra-goodies.md",childMarkdownRemark:{frontmatter:{title:"Extra Goodies",order:30}}}},{node:{relativePath:"guide/editor-tools/index.md",childMarkdownRemark:{frontmatter:{title:"Editor Setup",order:10}}}},{node:{relativePath:"guide/javascript/converting.md",childMarkdownRemark:{frontmatter:{title:"Converting from JS",order:5}}}},{node:{relativePath:"guide/javascript/libraries.md",childMarkdownRemark:{frontmatter:{title:"Libraries",order:2}}}},{node:{relativePath:"guide/javascript/index.md",childMarkdownRemark:{frontmatter:{title:"JavaScript",order:30}}}},{node:{relativePath:"guide/javascript/interop.md",childMarkdownRemark:{frontmatter:{title:"Interop",order:1}}}},{node:{relativePath:"guide/javascript/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/javascript/syntax-cheatsheet.md",childMarkdownRemark:{frontmatter:{title:"Syntax Cheatsheet",order:1}}}},{node:{relativePath:"guide/language/boolean.md",childMarkdownRemark:{frontmatter:{title:"Boolean",order:30}}}},{node:{relativePath:"guide/language/destructuring.md",childMarkdownRemark:{frontmatter:{title:"Destructuring",order:130}}}},{node:{relativePath:"guide/language/exception.md",childMarkdownRemark:{frontmatter:{title:"Exception",order:175}}}},{node:{relativePath:"guide/language/function.md",childMarkdownRemark:{frontmatter:{title:"Function",order:100}}}},{node:{relativePath:"guide/language/if-else.md",childMarkdownRemark:{frontmatter:{title:"If-Else",order:110}}}},{node:{relativePath:"guide/language/imperative-loops.md",childMarkdownRemark:{frontmatter:{title:"Imperative Loops",order:150}}}},{node:{relativePath:"guide/language/index.md",childMarkdownRemark:{frontmatter:{title:"Language basics",order:20}}}},{node:{relativePath:"guide/language/external.md",childMarkdownRemark:{frontmatter:{title:"External",order:170}}}},{node:{relativePath:"guide/language/integer-and-float.md",childMarkdownRemark:{frontmatter:{title:"Integer & Float",order:40}}}},{node:{relativePath:"guide/language/jsx.md",childMarkdownRemark:{frontmatter:{title:"JSX",order:160}}}},{node:{relativePath:"guide/language/let-binding.md",childMarkdownRemark:{frontmatter:{title:"Let Binding",order:10}}}},{node:{relativePath:"guide/language/module.md",childMarkdownRemark:{frontmatter:{title:"Module",order:180}}}},{node:{relativePath:"guide/language/list-and-array.md",childMarkdownRemark:{frontmatter:{title:"List & Array",order:80}}}},{node:{relativePath:"guide/language/more-on-type.md",childMarkdownRemark:{frontmatter:{title:"More on Type",order:120}}}},{node:{relativePath:"guide/language/mutation.md",childMarkdownRemark:{frontmatter:{title:"Mutation",order:140}}}},{node:{relativePath:"guide/language/overview.md",childMarkdownRemark:{frontmatter:{title:"Overview",order:0}}}},{node:{relativePath:"guide/language/object.md",childMarkdownRemark:{frontmatter:{title:"Object",order:175}}}},{node:{relativePath:"guide/language/pattern-matching.md",childMarkdownRemark:{frontmatter:{title:"Pattern Matching!",order:135}}}},{node:{relativePath:"guide/language/string-and-char.md",childMarkdownRemark:{frontmatter:{title:"String & Char",order:20}}}},{node:{relativePath:"guide/language/record.md",childMarkdownRemark:{frontmatter:{title:"Record",order:60}}}},{node:{relativePath:"guide/language/tuple.md",childMarkdownRemark:{frontmatter:{title:"Tuple",order:50}}}},{node:{relativePath:"guide/language/type.md",childMarkdownRemark:{frontmatter:{title:"Type!",order:15}}}},{node:{relativePath:"guide/native/index.md",childMarkdownRemark:{frontmatter:{title:"Native",order:40}}}},{node:{relativePath:"guide/native/convert-from-ocaml.md",childMarkdownRemark:{frontmatter:{title:"Converting from OCaml",order:4}}}},{node:{relativePath:"guide/language/variant.md",childMarkdownRemark:{frontmatter:{title:"Variant!",order:70}}}},{node:{relativePath:"guide/native/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}}]},file:{relativePath:"guide/language/function.md",childMarkdownRemark:{html:'<p>Can you believe we haven\'t covered function until now?</p>\n<p>Functions are declared with <code>fun</code> and return the expression.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> greet = <span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> name<span class="hljs-params"> </span></span></span>=&gt; <span class="hljs-string">"Hello "</span> ^ name;</code></pre>\n      </div>\n<p>This declares a function and assigns to it the name <code>greet</code>, which you can call like so:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code>greet <span class="hljs-string">"world!"</span>; <span class="hljs-comment">/* "Hello world!" */</span></code></pre>\n      </div>\n<p>Multi-arguments functions have arguments separated by space:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> add = <span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> x<span class="hljs-params"> y<span class="hljs-params"> z<span class="hljs-params"> </span></span></span></span></span>=&gt; x + y + z;\nadd <span class="hljs-number">1</span> <span class="hljs-number">2</span> <span class="hljs-number">3</span>; <span class="hljs-comment">/* 6 */</span></code></pre>\n      </div>\n<p>For longer functions, you\'d surround the body with a block:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> greetMore = <span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> name<span class="hljs-params"> </span></span></span>=&gt; {\n  <span class="hljs-keyword">let</span> part1 = <span class="hljs-string">"Hello"</span>;\n  part1 ^ <span class="hljs-string">" "</span> ^ name\n};</code></pre>\n      </div>\n<p><strong>Since function definitions occur often</strong>, we gave <code>let + fun</code> a shorthand:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> add x y z =&gt; x + y + z;\n<span class="hljs-comment">/* same as: let add = fun x y z =&gt; x + y + z; */</span></code></pre>\n      </div>\n<p><strong>Be mindful of function\'s precedence</strong>! You need to wrap the call with parentheses in some situations:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> increment x =&gt; x + <span class="hljs-number">1</span>;\n<span class="hljs-keyword">let</span> double x =&gt; x + x;\n\n<span class="hljs-keyword">let</span> eleven = increment (double <span class="hljs-number">5</span>);</code></pre>\n      </div>\n<p>If you forget to wrap <code>double 5</code> in parentheses, you\'d get <code>increment double 5</code>, as if the <code>increment</code> function wrongly takes two arguments.</p>\n<h3 id="no-argument"><a href="#no-argument" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>No Argument</h3>\n<p>A function always takes an argument; but sometimes, we\'d use it for e.g. side-effects, and don\'t have anything to pass to it. In other languages, we\'d conceptually pass "no argument". In Reason, every function takes an argument; here we\'d conventionally pass it the value <code>()</code>, called "unit".</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-comment">/* receive &amp; destructure the unit argument */</span>\n<span class="hljs-keyword">let</span> logSomething () =&gt; {\n  print_endline <span class="hljs-string">"hello"</span>;\n  print_endline <span class="hljs-string">"world"</span>;\n};\n\n<span class="hljs-comment">/* call the function with the value of type unit */</span>\nlogSomething ();</code></pre>\n      </div>\n<p><code>()</code> is a totally normal value, the single possible value in <code>unit</code>. Reason gave it a special syntax out of convenience.</p>\n<h3 id="labeled-arguments"><a href="#labeled-arguments" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Labeled Arguments</h3>\n<p>Multi-arguments functions, especially those whose arguments are of the same type, can be confusing to call.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> addCoordinates x y =&gt; {\n  <span class="hljs-comment">/* use x and y here */</span>\n};\n...\naddCoordinates <span class="hljs-number">5</span> <span class="hljs-number">6</span>; <span class="hljs-comment">/* which is x, which is y? */</span></code></pre>\n      </div>\n<p>In OCaml/Reason, you can attach labels to an argument:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> addCoordinates x::x y::y =&gt; {\n  <span class="hljs-comment">/* use x and y here */</span>\n};\n...\naddCoordinates x::<span class="hljs-number">5</span> y::<span class="hljs-number">6</span>;</code></pre>\n      </div>\n<p>Since we have currying (more on that below), we can provide the arguments in any order:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code>addCoordinates y::<span class="hljs-number">6</span> x::<span class="hljs-number">5</span>;</code></pre>\n      </div>\n<p>The <code>x::x</code> part during declaration means the function accepts an argument labeled <code>x</code> and can refer to it in the function body as the variable <code>x</code>. This is so that we can have the following pattern, where labeled arguments are renamed inside the function for conciseness:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> drawCircle radius::r color::<span class="hljs-built_in">c</span> =&gt; {\n  setColor <span class="hljs-built_in">c</span>;\n  startAt r r;\n  ...\n};\n\ndrawCircle radius::<span class="hljs-number">10</span> color::<span class="hljs-string">"red"</span>;</code></pre>\n      </div>\n<p>For the common case of <code>radius::radius</code> (where the label is the same as the local variable name), we have the syntax shorthand <code>::x</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> drawCircle ::radius ::color =&gt; {\n  setColor color;\n  startAt radius radius;\n  ...\n}</code></pre>\n      </div>\n<p>Here\'s the syntax for typing the arguments:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> drawCircle radius::(r: int) color::(<span class="hljs-built_in">c</span>: string) =&gt; ...;</code></pre>\n      </div>\n<h3 id="optional-labeled-arguments"><a href="#optional-labeled-arguments" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Optional Labeled Arguments</h3>\n<p>Labeled function arguments can be made optional during declaration. You can then omit them when calling the function.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-comment">/* radius can be omitted */</span>\n<span class="hljs-keyword">let</span> drawCircle ::color ::radius=? () =&gt; {\n  setColor color;\n  <span class="hljs-keyword">switch</span> radius {\n  | <span class="hljs-type">None</span> =&gt; startAt <span class="hljs-number">1</span> <span class="hljs-number">1</span>;\n  | <span class="hljs-type">Some</span> r_ =&gt; startAt r_ r_;\n  }\n};</code></pre>\n      </div>\n<p>If omitted, <code>radius</code> is <strong>wrapped</strong> in the standard library\'s <code>option</code> type, defaulting to <code>None</code>. If provided, it\'ll be wrapped with a <code>Some</code>. So <code>radius</code>\'s type value is either <code>None</code> or <code>Some int</code> here.</p>\n<p><strong>Note</strong>: <code>None | Some foo</code> is a data structure type called variant, described <a href="/guide/language/variant">below</a>. This particular variant type is provided by the standard library. It\'s called <code>option</code>. Its definition: <code>type option \'a = None | Some \'a</code>.</p>\n<p><strong>Note</strong> the unit <code>()</code> at the end of <code>drawCircle</code>. Without it, since <code>radius</code> and <code>color</code> are both labeled, can be curried, and can be applied out-of-order, it\'s unclear what the following mean:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> whatIsThis = drawCircle ::color;</code></pre>\n      </div>\n<p>Is <code>whatIsThis</code> a curried <code>drawCircle</code> function, waiting for the optional <code>radius</code> to be applied? Or did it finish applying? To address this confusion, append a positional (aka non-labeled) argument to <code>drawCircle</code> (conventionally <code>()</code>), and OCaml will, as a rule of thumb, presume the optional labeled argument is omitted when the positional argument is provided.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> curriedFunction = drawCircle ::color;\n<span class="hljs-keyword">let</span> actualResultWithoutProvidingRadius = drawCircle ::color ();</code></pre>\n      </div>\n<h4 id="explicitly-passed-optional"><a href="#explicitly-passed-optional" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Explicitly Passed Optional</h4>\n<p>Sometimes, you might want to forward a value to a function without knowing whether the value is <code>None</code> or <code>Some a</code>. Naively, you\'d do:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> result = <span class="hljs-keyword">switch</span> payloadRadius {\n| <span class="hljs-type">None</span> =&gt; drawCircle ::color ()\n| <span class="hljs-type">Some</span> r =&gt; drawCircle ::color radius::r ()\n};</code></pre>\n      </div>\n<p>This quickly gets tedious. We provide a shortcut:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> result = drawCircle ::color radius::?payloadRadius ();</code></pre>\n      </div>\n<p>This means "I understand <code>radius</code> is optional, and that when I pass it a value it needs to be an <code>int</code>, but I don\'t know whether the value I\'m passing is <code>None</code> or <code>Some val</code>, so I\'ll pass you the whole <code>option</code> wrapper".</p>\n<h4 id="optional-with-default-value"><a href="#optional-with-default-value" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Optional with Default Value</h4>\n<p>Optional labeled arguments can also be provided a default value. They aren\'t wrapped in an <code>option</code> type.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> drawCircle ::radius=<span class="hljs-number">1</span> ::color () =&gt; {\n  setColor color;\n  startAt r r;\n};</code></pre>\n      </div>\n<h4 id="recursive-functions"><a href="#recursive-functions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Recursive Functions</h4>\n<p>By default, values can\'t see a binding that points to it, but including the\n<code>rec</code> keyword in a <code>let</code> binding makes this possible. This allows functions\nto see and call themselves, giving us the power of recursion.</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> <span class="hljs-keyword">rec</span> neverTerminate = <span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> ()<span class="hljs-params"> </span></span></span>=&gt; neverTerminate ();</code></pre>\n      </div>\n<h4 id="mutually-recursive-functions"><a href="#mutually-recursive-functions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Mutually Recursive Functions</h4>\n<p>Mutually recursive functions start like a single recursive function using the\n<code>rec</code> keyword, and then are chained together with <code>and</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> <span class="hljs-keyword">rec</span> callSecond = <span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> ()<span class="hljs-params"> </span></span></span>=&gt; callFirst ()\nand callFirst = <span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> ()<span class="hljs-params"> </span></span></span>=&gt; callSecond ();</code></pre>\n      </div>\n<p><strong>Note</strong> that there\'s no semicolon ending the first line and no <code>let</code> on the second line.</p>\n<h4 id="currying"><a href="#currying" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Currying</h4>\n<p>Reason functions can automatically be <strong>partially</strong> called:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> add = <span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> x<span class="hljs-params"> y<span class="hljs-params"> </span></span></span></span>=&gt; x + y;\n<span class="hljs-keyword">let</span> addFive = add <span class="hljs-number">5</span>;\n<span class="hljs-keyword">let</span> eleven = addFive <span class="hljs-number">6</span>;\n<span class="hljs-keyword">let</span> twelve = addFive <span class="hljs-number">7</span>;</code></pre>\n      </div>\n<p>Actually, the above <code>add</code> is nothing but syntactic sugar for this:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> add = <span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> x<span class="hljs-params"> </span></span></span>=&gt; <span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> y<span class="hljs-params"> </span></span></span>=&gt; x + y;</code></pre>\n      </div>\n<p>OCaml optimizes this to avoid the unnecessary function allocation (2 functions here, naively speaking) whenever it can! This way, we get</p>\n<ul>\n<li>Nice syntax</li>\n<li>Currying for free (every function takes a single argument, actually!)</li>\n<li>No performance cost</li>\n</ul>',frontmatter:{title:"Function"}}}},pathContext:{section:"guide",sectionTitle:"Guide",relativePath:"guide/language/function.md",relatedFiles:"/^guide\\/.*\\.md$/"}}}});
//# sourceMappingURL=path---guide-language-function-6477f2708ecf99055f4c.js.map