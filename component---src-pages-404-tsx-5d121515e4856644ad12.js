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
`;t.A=i},3939:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var i=n(701),l=n(4041),r=n(9084),a=n(4918),o=n(9928),c=n(4525),m=n(742);let u=function(e){function t(){return e.apply(this,arguments)||this}return(0,i.A)(t,e),t.prototype.render=function(){return l.createElement(r.A,null,l.createElement(a.A,null,l.createElement(o.A,null,"NOT FOUND")),l.createElement(c.A,null,l.createElement(m.A,null,l.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))))},t}(l.Component)},4918:function(e,t,n){var i=n(4041),l=n(6440),r=n(6326),a=n(6691),o=n(9974);const c=l.Ay.header`
  padding: 2rem 1rem 0.5rem;
  text-align: left;
`,m=l.Ay.div`
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
`,u=l.Ay.span`
  font-size: 1.8rem;
  font-family: ${e=>e.theme.fontFamily.heading};
  font-weight: 900;
`;t.A=e=>i.createElement(c,{banner:e.banner||r.A.defaultBg,className:"no-print"},i.createElement(m,{justify:"space-between"},i.createElement("div",null,i.createElement(u,null,"Jesús Quintana"),i.createElement("br",null),i.createElement(a.N_,{to:"/"},r.A.siteTitle)),i.createElement(o.A,null)),i.createElement("br",null),e.children&&i.createElement(m,{direction:"column"},e.children))},9928:function(e,t,n){const i=n(6440).Ay.div`
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
`;t.A=i}}]);
//# sourceMappingURL=component---src-pages-404-tsx-5d121515e4856644ad12.js.map