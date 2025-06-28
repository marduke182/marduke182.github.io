"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[453],{742:function(e,t,n){const i=n(6440).Ay.div`
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
`;t.A=i},3436:function(e,t,n){n.d(t,{A:function(){return c}});var i=n(4041),l=n(3373),r=n.n(l),a="SectionTitle-module--uppercase--eefec";var c=e=>{let{theme:t,uppercase:n,children:l}=e;const c={"--section-title-font-size":null==t?void 0:t.fontSize.big,"--section-title-font-family":null==t?void 0:t.fontFamily.heading,"--section-title-after-bg":null==t?void 0:t.colors.white};return i.createElement("div",{className:r()("SectionTitle-module--sectionTitle--440a1",{[a]:n}),style:c},l)}},3939:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var i=n(701),l=n(4041),r=n(9084),a=n(4918),c=n(3436),o=n(4525),u=n(742);let s=function(e){function t(){return e.apply(this,arguments)||this}return(0,i.A)(t,e),t.prototype.render=function(){return l.createElement(r.A,null,l.createElement(a.A,null,l.createElement(c.A,null,"NOT FOUND")),l.createElement(o.A,null,l.createElement(u.A,null,l.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))))},t}(l.Component)},4918:function(e,t,n){var i=n(4041),l=n(6440),r=n(6326),a=n(6691),c=n(4262);const o=l.Ay.header`
  padding: 2rem 1rem 0.5rem;
  text-align: left;
`,u=l.Ay.div`
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
`,s=l.Ay.span`
  font-size: 1.8rem;
  font-family: ${e=>e.theme.fontFamily.heading};
  font-weight: 900;
`;t.A=e=>i.createElement(o,{banner:e.banner||r.A.defaultBg,className:"no-print"},i.createElement(u,{justify:"space-between"},i.createElement("div",null,i.createElement(s,null,"Jesús Quintana"),i.createElement("br",null),i.createElement(a.N_,{to:"/"},r.A.siteTitle)),i.createElement(c.A,null)),i.createElement("br",null),e.children&&i.createElement(u,{direction:"column"},e.children))}}]);
//# sourceMappingURL=component---src-pages-404-tsx-4e522f681ad0feea84fe.js.map