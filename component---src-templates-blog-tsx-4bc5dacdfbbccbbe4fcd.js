"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[256],{487:function(e,t){t.__esModule=!0,t.default=void 0;t.default=function(e){var t,n=e.red/255,r=e.green/255,a=e.blue/255,o=Math.max(n,r,a),l=Math.min(n,r,a),u=(o+l)/2;if(o===l)return void 0!==e.alpha?{hue:0,saturation:0,lightness:u,alpha:e.alpha}:{hue:0,saturation:0,lightness:u};var i=o-l,f=u>.5?i/(2-o-l):i/(o+l);switch(o){case n:t=(r-a)/i+(r<a?6:0);break;case r:t=(a-n)/i+2;break;default:t=(n-r)/i+4}return t*=60,void 0!==e.alpha?{hue:t,saturation:f,lightness:u,alpha:e.alpha}:{hue:t,saturation:f,lightness:u}};e.exports=t.default},657:function(e,t){t.__esModule=!0,t.default=void 0;t.default=function(e,t,n){return Math.max(e,Math.min(t,n))};e.exports=t.default},742:function(e,t,n){const r=n(6440).Ay.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 9000;
  max-width: 40rem;

  form {
    p {
      label,
      input {
        display: block;
      }

      input {
        min-width: 275px;
      }

      textarea {
        resize: vertical;
        min-height: 150px;
        width: 100%;
      }
    }
  }
`;t.A=r},1521:function(e,t,n){t.__esModule=!0,t.default=void 0;var r=l(n(6231)),a=l(n(8058)),o=l(n(5041));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){return(0,o.default)(Math.round(255*e))}function i(e,t,n){return(0,a.default)("#"+u(e)+u(t)+u(n))}t.default=function(e,t,n){return(0,r.default)(e,t,n,i)};e.exports=t.default},3681:function(e,t,n){n.d(t,{Iu:function(){return s}});var r=n(4041),a=n(6691),o=n(6440),l=n(6436),u=n(1751),i=n(6543),f=n.n(i);const d=o.Ay.div`
  text-align: center;
  margin: 2rem;
`,s=o.Ay.div`
  display: inline-block;
  padding: 0 2.5rem;
  border-radius: 3.5rem;
  background-color: #eee;

  @media ${l.$.phone} {
    padding: 0 1rem;
  }

  .page-numbers {
    display: block;
    float: left;
    transition: 400ms ease;
    color: ${u.A.colors.grey.light};
    letter-spacing: 0.1em;
    padding: 1rem;

    &:hover,
    &.current {
      background-color: ${f()(.2,u.A.colors.primary)};
      color: ${u.A.colors.white};
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
      color: ${f()(.2,u.A.colors.primary)};
    }


    @media ${l.$.tablet} {
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
`;t.Ay=e=>{const{currentPage:t,totalPages:n,url:o}=e,l=1===t,u=t===n,i=t-1==1?`/${o}/`:`/${o}/${(t-1).toString()}`,f=`/${o}/${(t+1).toString()}`;return n>1?r.createElement(d,null,r.createElement(s,null,!l&&r.createElement(a.N_,{className:"prev page-numbers",to:i,rel:"prev"},"← Prev"),Array.from({length:n},(e,n)=>r.createElement(a.N_,{className:t===n+1?"page-numbers current":"page-numbers",key:`pagination-number${n+1}`,to:`/${o}/${0===n?"":n+1}`},n+1)),!u&&r.createElement(a.N_,{className:"next page-numbers",to:f,rel:"next"},"Next →"))):null}},4066:function(e,t,n){t.__esModule=!0,t.default=function(e,t,n,l){if("number"==typeof e&&"number"==typeof t&&"number"==typeof n&&"number"==typeof l)return l>=1?(0,r.default)(e,t,n):"rgba("+(0,a.default)(e,t,n)+","+l+")";if("object"==typeof e&&void 0===t&&void 0===n&&void 0===l)return e.alpha>=1?(0,r.default)(e.hue,e.saturation,e.lightness):"rgba("+(0,a.default)(e.hue,e.saturation,e.lightness)+","+e.alpha+")";throw new o.default(2)};var r=l(n(1521)),a=l(n(6231)),o=l(n(9065));function l(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},4918:function(e,t,n){var r=n(4041),a=n(6440),o=n(6326),l=n(6691),u=n(9974);const i=a.Ay.header`
  padding: 2rem 1rem 0.5rem;
  text-align: left;
`,f=a.Ay.div`
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
`,d=a.Ay.span`
  font-size: 1.8rem;
  font-family: ${e=>e.theme.fontFamily.heading};
  font-weight: 900;
`;t.A=e=>r.createElement(i,{banner:e.banner||o.A.defaultBg,className:"no-print"},r.createElement(f,{justify:"space-between"},r.createElement("div",null,r.createElement(d,null,"Jesús Quintana"),r.createElement("br",null),r.createElement(l.N_,{to:"/"},o.A.siteTitle)),r.createElement(u.A,null)),r.createElement("br",null),e.children&&r.createElement(f,{direction:"column"},e.children))},5229:function(e,t,n){t.__esModule=!0,t.default=function(e,t,n){if("number"==typeof e&&"number"==typeof t&&"number"==typeof n)return(0,r.default)(e,t,n);if("object"==typeof e&&void 0===t&&void 0===n)return(0,r.default)(e.hue,e.saturation,e.lightness);throw new a.default(1)};var r=o(n(1521)),a=o(n(9065));function o(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},5464:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(701),a=n(4041),o=n(5844),l=n(9084),u=n(4918),i=n(9928),f=n(3588),d=n(742),s=n(6123),c=n(3681);let m=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.A)(t,e),t.prototype.render=function(){const{currentPage:e,totalPages:t}=this.props.pageContext,{data:n}=this.props,{edges:r}=n.allMarkdownRemark;return a.createElement(l.A,null,a.createElement(o.A,{title:"Blog"}),a.createElement(u.A,null,a.createElement(i.A,{uppercase:!0},"All the posts")),a.createElement(f.A,null,a.createElement(d.A,null,r.map(e=>a.createElement(s.A,{title:e.node.frontmatter.title,date:e.node.frontmatter.date,excerpt:e.node.excerpt,timeToRead:e.node.timeToRead,slug:e.node.fields.slug,category:e.node.frontmatter.category,key:e.node.fields.slug})),a.createElement(c.Ay,{currentPage:e,totalPages:t,url:"blog"}))))},t}(a.Component)},5844:function(e,t,n){var r=n(4041),a=n(6326);t.A=e=>{const{title:t=a.A.siteTitle}=e;return r.createElement("div",{style:{display:"none"}},t)}},6123:function(e,t,n){var r=n(4041),a=n(6440),o=n(6691),l=n(750),u=n.n(l),i=n(5305),f=n(6232);const d=a.Ay.article`
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;
`,s=a.Ay.h2`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.75rem;
`,c=a.Ay.span`
  position: absolute;
  font-size: 7rem;
  transform: translate(-50%, -50%);
  opacity: 0.08;
  user-select: none;
  z-index: -1;
`,m=a.Ay.p`
  grid-column: -1 / 1;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;t.A=e=>{const{title:t,date:n,excerpt:a,slug:l,timeToRead:p,category:h}=e,g=t.charAt(0);return r.createElement(d,null,r.createElement(s,null,r.createElement(c,null,g),r.createElement(o.N_,{to:`/blog/${l}`},t)),r.createElement(i.A,null,r.createElement(f.n,{date:n})," — ",p," Min Read — In",r.createElement(o.N_,{to:`/categories/${u()(h)}`}," ",h)),r.createElement(m,null,a))}},6543:function(e,t,n){t.__esModule=!0,t.default=void 0;var r=u(n(7107)),a=u(n(657)),o=u(n(8677)),l=u(n(9783));function u(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}var f=(0,r.default)(function(e,t){if("transparent"===t)return t;var n=(0,o.default)(t);return(0,l.default)(i({},n,{lightness:(0,a.default)(0,1,n.lightness-parseFloat(e))}))});t.default=f;e.exports=t.default},7107:function(e,t){function n(e,t,r){return function(){var a=r.concat(Array.prototype.slice.call(arguments));return a.length>=t?e.apply(this,a):n(e,t,a)}}t.__esModule=!0,t.default=function(e){return n(e,e.length,[])},e.exports=t.default},8677:function(e,t,n){t.__esModule=!0,t.default=function(e){return(0,a.default)((0,r.default)(e))};var r=o(n(2937)),a=o(n(487));function o(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},9783:function(e,t,n){t.__esModule=!0,t.default=function(e){if("object"!=typeof e)throw new u.default(8);if(d(e))return(0,l.default)(e);if(f(e))return(0,o.default)(e);if(c(e))return(0,a.default)(e);if(s(e))return(0,r.default)(e);throw new u.default(8)};var r=i(n(5229)),a=i(n(4066)),o=i(n(8625)),l=i(n(4894)),u=i(n(9065));function i(e){return e&&e.__esModule?e:{default:e}}var f=function(e){return"number"==typeof e.red&&"number"==typeof e.green&&"number"==typeof e.blue&&("number"!=typeof e.alpha||void 0===e.alpha)},d=function(e){return"number"==typeof e.red&&"number"==typeof e.green&&"number"==typeof e.blue&&"number"==typeof e.alpha},s=function(e){return"number"==typeof e.hue&&"number"==typeof e.saturation&&"number"==typeof e.lightness&&("number"!=typeof e.alpha||void 0===e.alpha)},c=function(e){return"number"==typeof e.hue&&"number"==typeof e.saturation&&"number"==typeof e.lightness&&"number"==typeof e.alpha};e.exports=t.default},9928:function(e,t,n){const r=n(6440).Ay.div`
  font-size: ${e=>e.theme.fontSize.big};
  font-family: ${e=>e.theme.fontFamily.heading};
  font-weight: 600;
  text-transform: ${e=>e.uppercase?"uppercase":"normal"};
  text-align: left;
  position: relative;
  line-height: 1.25;
  padding: 1rem 0 0;
  margin-bottom: 1rem;

  &:after {
    content: '';
    height: 1px;
    width: 50px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -25px;
    background: ${e=>e.theme.colors.white};
  }
`;t.A=r}}]);
//# sourceMappingURL=component---src-templates-blog-tsx-4bc5dacdfbbccbbe4fcd.js.map