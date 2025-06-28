"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[192],{742:function(e,t,n){const r=n(6440).Ay.div`
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
`;t.A=r},4312:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var r=n(701),i=n(4041),l=n(6691),a=n(750),o=n.n(a),c=n(5844),m=n(9084),s=n(4918),u=n(9928),p=n(5305),d=n(3588),f=n(742),g=n(6123);let h=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.A)(t,e),t.prototype.render=function(){const{posts:e,categoryName:t}=this.props.pageContext,n=e?e.length:0,r=`${n} post${1===n?"":"s"} tagged with "${t}"`;return i.createElement(m.A,null,i.createElement(c.A,{title:t}),i.createElement(s.A,null,i.createElement(u.A,null,"Category – ",t),i.createElement(p.A,{sectionTitle:!0,light:!0},r," (See ",i.createElement(l.N_,{to:"/categories"},"all categories"),")")),i.createElement(d.A,null,i.createElement(f.A,null,e?e.map((e,t)=>i.createElement(g.A,{title:e.frontmatter.title,date:e.frontmatter.date,excerpt:e.excerpt,slug:o()(e.frontmatter.title),timeToRead:e.timeToRead,category:e.frontmatter.category,key:t})):null)))},t}(i.PureComponent)},4918:function(e,t,n){var r=n(4041),i=n(6440),l=n(6326),a=n(6691),o=n(9974);const c=i.Ay.header`
  padding: 2rem 1rem 0.5rem;
  text-align: left;
`,m=i.Ay.div`
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
`,s=i.Ay.span`
  font-size: 1.8rem;
  font-family: ${e=>e.theme.fontFamily.heading};
  font-weight: 900;
`;t.A=e=>r.createElement(c,{banner:e.banner||l.A.defaultBg,className:"no-print"},r.createElement(m,{justify:"space-between"},r.createElement("div",null,r.createElement(s,null,"Jesús Quintana"),r.createElement("br",null),r.createElement(a.N_,{to:"/"},l.A.siteTitle)),r.createElement(o.A,null)),r.createElement("br",null),e.children&&r.createElement(m,{direction:"column"},e.children))},5844:function(e,t,n){var r=n(4041),i=n(6326);t.A=e=>{const{title:t=i.A.siteTitle}=e;return r.createElement("div",{style:{display:"none"}},t)}},6123:function(e,t,n){var r=n(4041),i=n(6440),l=n(6691),a=n(750),o=n.n(a),c=n(5305),m=n(6232);const s=i.Ay.article`
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;
`,u=i.Ay.h2`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.75rem;
`,p=i.Ay.span`
  position: absolute;
  font-size: 7rem;
  transform: translate(-50%, -50%);
  opacity: 0.08;
  user-select: none;
  z-index: -1;
`,d=i.Ay.p`
  grid-column: -1 / 1;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;t.A=e=>{const{title:t,date:n,excerpt:i,slug:a,timeToRead:f,category:g}=e,h=t.charAt(0);return r.createElement(s,null,r.createElement(u,null,r.createElement(p,null,h),r.createElement(l.N_,{to:`/blog/${a}`},t)),r.createElement(c.A,null,r.createElement(m.n,{date:n})," — ",f," Min Read — In",r.createElement(l.N_,{to:`/categories/${o()(g)}`}," ",g)),r.createElement(d,null,i))}},9928:function(e,t,n){const r=n(6440).Ay.div`
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
//# sourceMappingURL=component---src-templates-category-tsx-ce6911582e0331c223cd.js.map