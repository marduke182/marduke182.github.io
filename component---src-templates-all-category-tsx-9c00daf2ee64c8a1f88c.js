"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[650],{487:function(e,t){t.__esModule=!0,t.default=void 0;t.default=function(e){var t,n=e.red/255,r=e.green/255,a=e.blue/255,o=Math.max(n,r,a),u=Math.min(n,r,a),l=(o+u)/2;if(o===u)return void 0!==e.alpha?{hue:0,saturation:0,lightness:l,alpha:e.alpha}:{hue:0,saturation:0,lightness:l};var i=o-u,f=l>.5?i/(2-o-u):i/(o+u);switch(o){case n:t=(r-a)/i+(r<a?6:0);break;case r:t=(a-n)/i+2;break;default:t=(n-r)/i+4}return t*=60,void 0!==e.alpha?{hue:t,saturation:f,lightness:l,alpha:e.alpha}:{hue:t,saturation:f,lightness:l}};e.exports=t.default},657:function(e,t){t.__esModule=!0,t.default=void 0;t.default=function(e,t,n){return Math.max(e,Math.min(t,n))};e.exports=t.default},1521:function(e,t,n){t.__esModule=!0,t.default=void 0;var r=u(n(6231)),a=u(n(8058)),o=u(n(5041));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){return(0,o.default)(Math.round(255*e))}function i(e,t,n){return(0,a.default)("#"+l(e)+l(t)+l(n))}t.default=function(e,t,n){return(0,r.default)(e,t,n,i)};e.exports=t.default},2871:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(701),a=n(4041),o=n(6691),u=n(750),l=n.n(u),i=n(5844),f=n(9084),s=n(4918),d=n(9928),c=n(3588),p=n(3681),m=n(8127);let h=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.A)(t,e),t.prototype.render=function(){const{categories:e}=this.props.pageContext;if(e)return a.createElement(f.A,null,a.createElement(i.A,{title:"Categories"}),a.createElement(s.A,null,a.createElement(d.A,null,"Categories")),a.createElement(c.A,null,a.createElement(p.Iu,null,e.map((e,t)=>a.createElement(m.A,{key:t},a.createElement(o.N_,{to:`/categories/${l()(e)}`},e))))))},t}(a.PureComponent)},3681:function(e,t,n){n.d(t,{Iu:function(){return d}});var r=n(4041),a=n(6691),o=n(6440),u=n(6436),l=n(1751),i=n(6543),f=n.n(i);const s=o.Ay.div`
  text-align: center;
  margin: 2rem;
`,d=o.Ay.div`
  display: inline-block;
  padding: 0 2.5rem;
  border-radius: 3.5rem;
  background-color: #eee;

  @media ${u.$.phone} {
    padding: 0 1rem;
  }

  .page-numbers {
    display: block;
    float: left;
    transition: 400ms ease;
    color: ${l.A.colors.grey.light};
    letter-spacing: 0.1em;
    padding: 1rem;

    &:hover,
    &.current {
      background-color: ${f()(.2,l.A.colors.primary)};
      color: ${l.A.colors.white};
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
      color: ${f()(.2,l.A.colors.primary)};
    }


    @media ${u.$.tablet} {
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
`;t.Ay=e=>{const{currentPage:t,totalPages:n,url:o}=e,u=1===t,l=t===n,i=t-1==1?`/${o}/`:`/${o}/${(t-1).toString()}`,f=`/${o}/${(t+1).toString()}`;return n>1?r.createElement(s,null,r.createElement(d,null,!u&&r.createElement(a.N_,{className:"prev page-numbers",to:i,rel:"prev"},"← Prev"),Array.from({length:n},(e,n)=>r.createElement(a.N_,{className:t===n+1?"page-numbers current":"page-numbers",key:`pagination-number${n+1}`,to:`/${o}/${0===n?"":n+1}`},n+1)),!l&&r.createElement(a.N_,{className:"next page-numbers",to:f,rel:"next"},"Next →"))):null}},4066:function(e,t,n){t.__esModule=!0,t.default=function(e,t,n,u){if("number"==typeof e&&"number"==typeof t&&"number"==typeof n&&"number"==typeof u)return u>=1?(0,r.default)(e,t,n):"rgba("+(0,a.default)(e,t,n)+","+u+")";if("object"==typeof e&&void 0===t&&void 0===n&&void 0===u)return e.alpha>=1?(0,r.default)(e.hue,e.saturation,e.lightness):"rgba("+(0,a.default)(e.hue,e.saturation,e.lightness)+","+e.alpha+")";throw new o.default(2)};var r=u(n(1521)),a=u(n(6231)),o=u(n(9065));function u(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},4918:function(e,t,n){var r=n(4041),a=n(6440),o=n(6326),u=n(6691),l=n(9974);const i=a.Ay.header`
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
`,s=a.Ay.span`
  font-size: 1.8rem;
  font-family: ${e=>e.theme.fontFamily.heading};
  font-weight: 900;
`;t.A=e=>r.createElement(i,{banner:e.banner||o.A.defaultBg,className:"no-print"},r.createElement(f,{justify:"space-between"},r.createElement("div",null,r.createElement(s,null,"Jesús Quintana"),r.createElement("br",null),r.createElement(u.N_,{to:"/"},o.A.siteTitle)),r.createElement(l.A,null)),r.createElement("br",null),e.children&&r.createElement(f,{direction:"column"},e.children))},5229:function(e,t,n){t.__esModule=!0,t.default=function(e,t,n){if("number"==typeof e&&"number"==typeof t&&"number"==typeof n)return(0,r.default)(e,t,n);if("object"==typeof e&&void 0===t&&void 0===n)return(0,r.default)(e.hue,e.saturation,e.lightness);throw new a.default(1)};var r=o(n(1521)),a=o(n(9065));function o(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},5844:function(e,t,n){var r=n(4041),a=n(6326);t.A=e=>{const{title:t=a.A.siteTitle}=e;return r.createElement("div",{style:{display:"none"}},t)}},6543:function(e,t,n){t.__esModule=!0,t.default=void 0;var r=l(n(7107)),a=l(n(657)),o=l(n(8677)),u=l(n(9783));function l(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}var f=(0,r.default)(function(e,t){if("transparent"===t)return t;var n=(0,o.default)(t);return(0,u.default)(i({},n,{lightness:(0,a.default)(0,1,n.lightness-parseFloat(e))}))});t.default=f;e.exports=t.default},7107:function(e,t){function n(e,t,r){return function(){var a=r.concat(Array.prototype.slice.call(arguments));return a.length>=t?e.apply(this,a):n(e,t,a)}}t.__esModule=!0,t.default=function(e){return n(e,e.length,[])},e.exports=t.default},8127:function(e,t,n){const r=n(6440).Ay.h3`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.75rem;
`;t.A=r},8677:function(e,t,n){t.__esModule=!0,t.default=function(e){return(0,a.default)((0,r.default)(e))};var r=o(n(2937)),a=o(n(487));function o(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default},9783:function(e,t,n){t.__esModule=!0,t.default=function(e){if("object"!=typeof e)throw new l.default(8);if(s(e))return(0,u.default)(e);if(f(e))return(0,o.default)(e);if(c(e))return(0,a.default)(e);if(d(e))return(0,r.default)(e);throw new l.default(8)};var r=i(n(5229)),a=i(n(4066)),o=i(n(8625)),u=i(n(4894)),l=i(n(9065));function i(e){return e&&e.__esModule?e:{default:e}}var f=function(e){return"number"==typeof e.red&&"number"==typeof e.green&&"number"==typeof e.blue&&("number"!=typeof e.alpha||void 0===e.alpha)},s=function(e){return"number"==typeof e.red&&"number"==typeof e.green&&"number"==typeof e.blue&&"number"==typeof e.alpha},d=function(e){return"number"==typeof e.hue&&"number"==typeof e.saturation&&"number"==typeof e.lightness&&("number"!=typeof e.alpha||void 0===e.alpha)},c=function(e){return"number"==typeof e.hue&&"number"==typeof e.saturation&&"number"==typeof e.lightness&&"number"==typeof e.alpha};e.exports=t.default},9928:function(e,t,n){const r=n(6440).Ay.div`
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
//# sourceMappingURL=component---src-templates-all-category-tsx-9c00daf2ee64c8a1f88c.js.map