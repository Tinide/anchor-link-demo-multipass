(this["webpackJsonpanchor-link-demo-multipass"]=this["webpackJsonpanchor-link-demo-multipass"]||[]).push([[51,81],{576:function(e,n,a){"use strict";function t(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(a,t,o,s){if(a.language===t){var i=a.tokenStack=[];a.code=a.code.replace(o,(function(e){if("function"===typeof s&&!s(e))return e;for(var o,r=i.length;-1!==a.code.indexOf(o=n(t,r));)++r;return i[r]=e,o})),a.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(a,t){if(a.language===t&&a.tokenStack){a.grammar=e.languages[t];var o=0,s=Object.keys(a.tokenStack);!function i(r){for(var l=0;l<r.length&&!(o>=s.length);l++){var u=r[l];if("string"===typeof u||u.content&&"string"===typeof u.content){var c=s[o],p=a.tokenStack[c],g="string"===typeof u?u:u.content,d=n(t,c),f=g.indexOf(d);if(f>-1){++o;var k=g.substring(0,f),b=new e.Token(t,e.tokenize(p,a.grammar),"language-"+t,p),m=g.substring(f+d.length),h=[];k&&h.push.apply(h,i([k])),h.push(b),m&&h.push.apply(h,i([m])),"string"===typeof u?r.splice.apply(r,[l,1].concat(h)):u.content=h}}else u.content&&i(u.content)}return r}(a.tokens)}}}})}(e)}e.exports=t,t.displayName="markupTemplating",t.aliases=[]},668:function(e,n,a){"use strict";var t=a(576);function o(e){e.register(t),function(e){e.languages.handlebars={comment:/\{\{![\s\S]*?\}\}/,delimiter:{pattern:/^\{\{\{?|\}\}\}?$/i,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,boolean:/\b(?:true|false)\b/,block:{pattern:/^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i,lookbehind:!0,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\s\S]+/}},punctuation:/[!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~\s]+/},e.hooks.add("before-tokenize",(function(n){e.languages["markup-templating"].buildPlaceholders(n,"handlebars",/\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g)})),e.hooks.add("after-tokenize",(function(n){e.languages["markup-templating"].tokenizePlaceholders(n,"handlebars")}))}(e)}e.exports=o,o.displayName="handlebars",o.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_handlebars.000d56ce.chunk.js.map