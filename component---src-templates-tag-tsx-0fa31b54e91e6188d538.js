"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[264],{742:function(e,t,n){const l=n(6440).Ay.div`
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
`;t.A=l},1998:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var l=n(701),r=n(4041),i=n(6691),a=n(6123),o=n(750),m=n.n(o),c=n(5844),s=n(9084),u=n(4918),p=n(9928),d=n(3286),f=n(4525),g=n(742);let h=function(e){function t(){return e.apply(this,arguments)||this}return(0,l.A)(t,e),t.prototype.render=function(){console.log(this.props);const{posts:e,tagName:t}=this.props.pageContext,n=e?e.length:0,l=`${n} post${1===n?"":"s"} tagged with "${t}"`;return r.createElement(s.A,null,r.createElement(c.A,{title:"Tags"}),r.createElement(u.A,null,r.createElement(p.A,null,"Tag – ",t),r.createElement(d.A,{sectionTitle:!0,light:!0},l," (See ",r.createElement(i.N_,{to:"/tags"},"all tags"),")")),r.createElement(f.A,null,r.createElement(g.A,null,e?e.map((e,t)=>r.createElement(a.A,{title:e.frontmatter.title,date:e.frontmatter.date,excerpt:e.excerpt,slug:m()(e.frontmatter.title),timeToRead:e.timeToRead,category:e.frontmatter.category,key:t})):null)))},t}(r.PureComponent)},4918:function(e,t,n){var l=n(4041),r=n(6440),i=n(6326),a=n(6691),o=n(9974);const m=r.Ay.header`
  padding: 2rem 1rem 0.5rem;
  text-align: left;
`,c=r.Ay.div`
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
`,s=r.Ay.span`
  font-size: 1.8rem;
  font-family: ${e=>e.theme.fontFamily.heading};
  font-weight: 900;
`;t.A=e=>l.createElement(m,{banner:e.banner||i.A.defaultBg,className:"no-print"},l.createElement(c,{justify:"space-between"},l.createElement("div",null,l.createElement(s,null,"Jesús Quintana"),l.createElement("br",null),l.createElement(a.N_,{to:"/"},i.A.siteTitle)),l.createElement(o.A,null)),l.createElement("br",null),e.children&&l.createElement(c,{direction:"column"},e.children))},5844:function(e,t,n){var l=n(4041),r=n(6326);t.A=e=>{const{title:t=r.A.siteTitle}=e;return l.createElement("div",{style:{display:"none"}},t)}},6123:function(e,t,n){var l=n(4041),r=n(6440),i=n(6691),a=n(750),o=n.n(a),m=n(3286),c=n(6232);const s=r.Ay.article`
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;
`,u=r.Ay.h2`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.75rem;
`,p=r.Ay.span`
  position: absolute;
  font-size: 7rem;
  transform: translate(-50%, -50%);
  opacity: 0.08;
  user-select: none;
  z-index: -1;
`,d=r.Ay.p`
  grid-column: -1 / 1;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;t.A=e=>{const{title:t,date:n,excerpt:r,slug:a,timeToRead:f,category:g}=e,h=t.charAt(0);return l.createElement(s,null,l.createElement(u,null,l.createElement(p,null,h),l.createElement(i.N_,{to:`/blog/${a}`},t)),l.createElement(m.A,null,l.createElement(c.n,{date:n})," — ",f," Min Read — In",l.createElement(i.N_,{to:`/categories/${o()(g)}`}," ",g)),l.createElement(d,null,r))}},9928:function(e,t,n){const l=n(6440).Ay.div`
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
`;t.A=l}}]);
//# sourceMappingURL=component---src-templates-tag-tsx-0fa31b54e91e6188d538.js.map