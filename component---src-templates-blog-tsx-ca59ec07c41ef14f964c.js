"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[256],{742:function(e,t,n){const r=n(6440).Ay.div`
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
`;t.A=r},3436:function(e,t,n){n.d(t,{A:function(){return o}});var r=n(4041),l=n(3373),a=n.n(l),i="SectionTitle-module--uppercase--eefec";var o=e=>{let{theme:t,uppercase:n,children:l}=e;const o={"--section-title-font-size":null==t?void 0:t.fontSize.big,"--section-title-font-family":null==t?void 0:t.fontFamily.heading,"--section-title-after-bg":null==t?void 0:t.colors.white};return r.createElement("div",{className:a()("SectionTitle-module--sectionTitle--440a1",{[i]:n}),style:o},l)}},3681:function(e,t,n){n.d(t,{Iu:function(){return d}});var r=n(4041),l=n(6691),a=n(6440),i=n(6436),o=n(1751),c=n(6543),m=n.n(c);const s=a.Ay.div`
  text-align: center;
  margin: 2rem;
`,d=a.Ay.div`
  display: inline-block;
  padding: 0 2.5rem;
  border-radius: 3.5rem;
  background-color: #eee;

  @media ${i.$.phone} {
    padding: 0 1rem;
  }

  .page-numbers {
    display: block;
    float: left;
    transition: 400ms ease;
    color: ${o.A.colors.grey.light};
    letter-spacing: 0.1em;
    padding: 1rem;

    &:hover,
    &.current {
      background-color: ${m()(.2,o.A.colors.primary)};
      color: ${o.A.colors.white};
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
      color: ${m()(.2,o.A.colors.primary)};
    }


    @media ${i.$.tablet} {
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
`;t.Ay=e=>{const{currentPage:t,totalPages:n,url:a}=e,i=1===t,o=t===n,c=t-1==1?`/${a}/`:`/${a}/${(t-1).toString()}`,m=`/${a}/${(t+1).toString()}`;return n>1?r.createElement(s,null,r.createElement(d,null,!i&&r.createElement(l.N_,{className:"prev page-numbers",to:c,rel:"prev"},"← Prev"),Array.from({length:n},(e,n)=>r.createElement(l.N_,{className:t===n+1?"page-numbers current":"page-numbers",key:`pagination-number${n+1}`,to:`/${a}/${0===n?"":n+1}`},n+1)),!o&&r.createElement(l.N_,{className:"next page-numbers",to:m,rel:"next"},"Next →"))):null}},4918:function(e,t,n){var r=n(4041),l=n(6440),a=n(6326),i=n(6691),o=n(4262);const c=l.Ay.header`
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
`,s=l.Ay.span`
  font-size: 1.8rem;
  font-family: ${e=>e.theme.fontFamily.heading};
  font-weight: 900;
`;t.A=e=>r.createElement(c,{banner:e.banner||a.A.defaultBg,className:"no-print"},r.createElement(m,{justify:"space-between"},r.createElement("div",null,r.createElement(s,null,"Jesús Quintana"),r.createElement("br",null),r.createElement(i.N_,{to:"/"},a.A.siteTitle)),r.createElement(o.A,null)),r.createElement("br",null),e.children&&r.createElement(m,{direction:"column"},e.children))},5464:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(701),l=n(4041),a=n(5844),i=n(9084),o=n(4918),c=n(3436),m=n(4525),s=n(742),d=n(6123),u=n(3681);let p=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.A)(t,e),t.prototype.render=function(){const{currentPage:e,totalPages:t}=this.props.pageContext,{data:n}=this.props,{edges:r}=n.allMarkdownRemark;return l.createElement(i.A,null,l.createElement(a.A,{title:"Blog"}),l.createElement(o.A,null,l.createElement(c.A,{uppercase:!0},"All the posts")),l.createElement(m.A,null,l.createElement(s.A,null,r.map(e=>l.createElement(d.A,{title:e.node.frontmatter.title,date:e.node.frontmatter.date,excerpt:e.node.excerpt,timeToRead:e.node.timeToRead,slug:e.node.fields.slug,category:e.node.frontmatter.category,key:e.node.fields.slug})),l.createElement(u.Ay,{currentPage:e,totalPages:t,url:"blog"}))))},t}(l.Component)},5844:function(e,t,n){var r=n(4041),l=n(6326);t.A=e=>{const{title:t=l.A.siteTitle}=e;return r.createElement("div",{style:{display:"none"}},t)}},6123:function(e,t,n){var r=n(4041),l=n(6440),a=n(6691),i=n(750),o=n.n(i),c=n(3286),m=n(6232);const s=l.Ay.article`
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;
`,d=l.Ay.h2`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.75rem;
`,u=l.Ay.span`
  position: absolute;
  font-size: 7rem;
  transform: translate(-50%, -50%);
  opacity: 0.08;
  user-select: none;
  z-index: -1;
`,p=l.Ay.p`
  grid-column: -1 / 1;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;t.A=e=>{const{title:t,date:n,excerpt:l,slug:i,timeToRead:g,category:f}=e,h=t.charAt(0);return r.createElement(s,null,r.createElement(d,null,r.createElement(u,null,h),r.createElement(a.N_,{to:`/blog/${i}`},t)),r.createElement(c.A,null,r.createElement(m.n,{date:n})," — ",g," Min Read — In",r.createElement(a.N_,{to:`/categories/${o()(f)}`}," ",f)),r.createElement(p,null,l))}}}]);
//# sourceMappingURL=component---src-templates-blog-tsx-ca59ec07c41ef14f964c.js.map