(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[650],{482:function(e){var t="\\ud800-\\udfff",n="\\u2700-\\u27bf",r="a-z\\xdf-\\xf6\\xf8-\\xff",u="A-Z\\xc0-\\xd6\\xd8-\\xde",i="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",o="["+i+"]",a="\\d+",l="["+n+"]",c="["+r+"]",f="[^"+t+i+a+n+r+u+"]",s="(?:\\ud83c[\\udde6-\\uddff]){2}",d="[\\ud800-\\udbff][\\udc00-\\udfff]",m="["+u+"]",p="(?:"+c+"|"+f+")",x="(?:"+m+"|"+f+")",g="(?:['’](?:d|ll|m|re|s|t|ve))?",h="(?:['’](?:D|LL|M|RE|S|T|VE))?",A="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",v="[\\ufe0e\\ufe0f]?",E=v+A+("(?:\\u200d(?:"+["[^"+t+"]",s,d].join("|")+")"+v+A+")*"),b="(?:"+[l,s,d].join("|")+")"+E,y=RegExp([m+"?"+c+"+"+g+"(?="+[o,m,"$"].join("|")+")",x+"+"+h+"(?="+[o,m+p,"$"].join("|")+")",m+"?"+p+"+"+g,m+"+"+h,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",a,b].join("|"),"g");e.exports=function(e){return e.match(y)||[]}},750:function(e,t,n){var r=n(3640)(function(e,t,n){return e+(n?"-":"")+t.toLowerCase()});e.exports=r},1035:function(e){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},1169:function(e,t,n){"use strict";n.d(t,{A:function(){return u}});var r=n(4041);var u=e=>{let{children:t}=e;return r.createElement("h3",{className:"Title-module--title--4d5ee"},t)}},2871:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(701),u=n(4041),i=n(6691),o=n(750),a=n.n(o),l=n(5844),c=n(9084),f=n(4918),s=n(3436),d=n(4525),m=n(3681),p=n(1169);let x=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.A)(t,e),t.prototype.render=function(){const{categories:e}=this.props.pageContext;if(e)return u.createElement(c.A,null,u.createElement(l.A,{title:"Categories"}),u.createElement(f.A,null,u.createElement(s.A,null,"Categories")),u.createElement(d.A,null,u.createElement(m.Iu,null,e.map((e,t)=>u.createElement(p.A,{key:t},u.createElement(i.N_,{to:`/categories/${a()(e)}`},e))))))},t}(u.PureComponent)},3436:function(e,t,n){"use strict";n.d(t,{A:function(){return a}});var r=n(4041),u=n(3373),i=n.n(u),o="SectionTitle-module--uppercase--eefec";var a=e=>{let{theme:t,uppercase:n,children:u}=e;const a={"--section-title-font-size":null==t?void 0:t.fontSize.big,"--section-title-font-family":null==t?void 0:t.fontFamily.heading,"--section-title-after-bg":null==t?void 0:t.colors.white};return r.createElement("div",{className:i()("SectionTitle-module--sectionTitle--440a1",{[o]:n}),style:a},u)}},3640:function(e,t,n){var r=n(4187),u=n(5881),i=n(9850),o=RegExp("['’]","g");e.exports=function(e){return function(t){return r(i(u(t).replace(o,"")),e,"")}}},3681:function(e,t,n){"use strict";n.d(t,{Iu:function(){return s}});var r=n(4041),u=n(6691),i=n(6440),o=n(6436),a=n(1751),l=n(6543),c=n.n(l);const f=i.Ay.div`
  text-align: center;
  margin: 2rem;
`,s=i.Ay.div`
  display: inline-block;
  padding: 0 2.5rem;
  border-radius: 3.5rem;
  background-color: #eee;

  @media ${o.$.phone} {
    padding: 0 1rem;
  }

  .page-numbers {
    display: block;
    float: left;
    transition: 400ms ease;
    color: ${a.A.colors.grey.light};
    letter-spacing: 0.1em;
    padding: 1rem;

    &:hover,
    &.current {
      background-color: ${c()(.2,a.A.colors.primary)};
      color: ${a.A.colors.white};
    }

    &.prev {
      margin-left: -1.5rem;
    }

    &.next {
      margin-right: -1.5rem;
    }

    &.prev:hover,
    &.next:hover {
      background-color: transparent;
      color: ${c()(.2,a.A.colors.primary)};
    }


    @media ${o.$.tablet} {
      padding: 0 1.4rem;
      display: none;

      &:nth-of-type(2) {
        position: relative;
        padding-right: 5rem;

        &::after {
          content: '...';
          position: absolute;
          top: 0;
          left: 4.5rem;
        }
      }

      &:nth-child(-n + 3),
      &:nth-last-child(-n + 3) {
        display: block;
      }

      &:nth-last-child(-n + 4) {
        padding-right: 1.4rem;

        &::after {
          content: none;
        }
      }
    }
`;t.Ay=e=>{const{currentPage:t,totalPages:n,url:i}=e,o=1===t,a=t===n,l=t-1==1?`/${i}/`:`/${i}/${(t-1).toString()}`,c=`/${i}/${(t+1).toString()}`;return n>1?r.createElement(f,null,r.createElement(s,null,!o&&r.createElement(u.N_,{className:"prev page-numbers",to:l,rel:"prev"},"← Prev"),Array.from({length:n},(e,n)=>r.createElement(u.N_,{className:t===n+1?"page-numbers current":"page-numbers",key:`pagination-number${n+1}`,to:`/${i}/${0===n?"":n+1}`},n+1)),!a&&r.createElement(u.N_,{className:"next page-numbers",to:c,rel:"next"},"Next →"))):null}},4187:function(e){e.exports=function(e,t,n,r){var u=-1,i=null==e?0:e.length;for(r&&i&&(n=e[++u]);++u<i;)n=t(n,e[u],u,e);return n}},4918:function(e,t,n){"use strict";var r=n(4041),u=n(6440),i=n(6326),o=n(6691),a=n(4262);const l=u.Ay.header`
  padding: 2rem 1rem 0.5rem;
  text-align: left;
`,c=u.Ay.div`
  z-index: 999;
  max-width: 40rem;
  margin: 0 auto;
  display: flex;
  flex-direction: ${e=>e.direction?e.direction:"row"};
  justify-content: ${e=>e.justify};

  a {
    &:hover {
      opacity: 0.85;
    }
  }
`,f=u.Ay.span`
  font-size: 1.8rem;
  font-family: ${e=>e.theme.fontFamily.heading};
  font-weight: 900;
`;t.A=e=>r.createElement(l,{banner:e.banner||i.A.defaultBg,className:"no-print"},r.createElement(c,{justify:"space-between"},r.createElement("div",null,r.createElement(f,null,"Jesús Quintana"),r.createElement("br",null),r.createElement(o.N_,{to:"/"},i.A.siteTitle)),r.createElement(a.A,null)),r.createElement("br",null),e.children&&r.createElement(c,{direction:"column"},e.children))},5813:function(e){var t=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return t.test(e)}},5844:function(e,t,n){"use strict";var r=n(4041),u=n(6326);t.A=e=>{const{title:t=u.A.siteTitle}=e;return r.createElement("div",{style:{display:"none"}},t)}},5881:function(e,t,n){var r=n(9968),u=n(5243),i=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,o=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=u(e))&&e.replace(i,r).replace(o,"")}},9546:function(e){var t=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(t)||[]}},9850:function(e,t,n){var r=n(9546),u=n(5813),i=n(5243),o=n(482);e.exports=function(e,t,n){return e=i(e),void 0===(t=n?void 0:t)?u(e)?o(e):r(e):e.match(t)||[]}},9968:function(e,t,n){var r=n(1035)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=r}}]);
//# sourceMappingURL=component---src-templates-all-category-tsx-12698a22566f87a71e13.js.map