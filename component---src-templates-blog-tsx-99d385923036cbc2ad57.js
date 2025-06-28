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
`;t.A=r},3681:function(e,t,n){n.d(t,{Iu:function(){return d}});var r=n(4041),a=n(6691),l=n(6440),o=n(6436),i=n(1751),c=n(6543),m=n.n(c);const s=l.Ay.div`
  text-align: center;
  margin: 2rem;
`,d=l.Ay.div`
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
    color: ${i.A.colors.grey.light};
    letter-spacing: 0.1em;
    padding: 1rem;

    &:hover,
    &.current {
      background-color: ${m()(.2,i.A.colors.primary)};
      color: ${i.A.colors.white};
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
      color: ${m()(.2,i.A.colors.primary)};
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
`;t.Ay=e=>{const{currentPage:t,totalPages:n,url:l}=e,o=1===t,i=t===n,c=t-1==1?`/${l}/`:`/${l}/${(t-1).toString()}`,m=`/${l}/${(t+1).toString()}`;return n>1?r.createElement(s,null,r.createElement(d,null,!o&&r.createElement(a.N_,{className:"prev page-numbers",to:c,rel:"prev"},"← Prev"),Array.from({length:n},(e,n)=>r.createElement(a.N_,{className:t===n+1?"page-numbers current":"page-numbers",key:`pagination-number${n+1}`,to:`/${l}/${0===n?"":n+1}`},n+1)),!i&&r.createElement(a.N_,{className:"next page-numbers",to:m,rel:"next"},"Next →"))):null}},4918:function(e,t,n){var r=n(4041),a=n(6440),l=n(6326),o=n(6691),i=n(9974);const c=a.Ay.header`
  padding: 2rem 1rem 0.5rem;
  text-align: left;
`,m=a.Ay.div`
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
`;t.A=e=>r.createElement(c,{banner:e.banner||l.A.defaultBg,className:"no-print"},r.createElement(m,{justify:"space-between"},r.createElement("div",null,r.createElement(s,null,"Jesús Quintana"),r.createElement("br",null),r.createElement(o.N_,{to:"/"},l.A.siteTitle)),r.createElement(i.A,null)),r.createElement("br",null),e.children&&r.createElement(m,{direction:"column"},e.children))},5464:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(701),a=n(4041),l=n(5844),o=n(9084),i=n(4918),c=n(9928),m=n(3588),s=n(742),d=n(6123),u=n(3681);let p=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.A)(t,e),t.prototype.render=function(){const{currentPage:e,totalPages:t}=this.props.pageContext,{data:n}=this.props,{edges:r}=n.allMarkdownRemark;return a.createElement(o.A,null,a.createElement(l.A,{title:"Blog"}),a.createElement(i.A,null,a.createElement(c.A,{uppercase:!0},"All the posts")),a.createElement(m.A,null,a.createElement(s.A,null,r.map(e=>a.createElement(d.A,{title:e.node.frontmatter.title,date:e.node.frontmatter.date,excerpt:e.node.excerpt,timeToRead:e.node.timeToRead,slug:e.node.fields.slug,category:e.node.frontmatter.category,key:e.node.fields.slug})),a.createElement(u.Ay,{currentPage:e,totalPages:t,url:"blog"}))))},t}(a.Component)},5844:function(e,t,n){var r=n(4041),a=n(6326);t.A=e=>{const{title:t=a.A.siteTitle}=e;return r.createElement("div",{style:{display:"none"}},t)}},6123:function(e,t,n){var r=n(4041),a=n(6440),l=n(6691),o=n(750),i=n.n(o),c=n(3286),m=n(6232);const s=a.Ay.article`
  display: flex;
  flex-direction: column;
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;
`,d=a.Ay.h2`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.75rem;
`,u=a.Ay.span`
  position: absolute;
  font-size: 7rem;
  transform: translate(-50%, -50%);
  opacity: 0.08;
  user-select: none;
  z-index: -1;
`,p=a.Ay.p`
  grid-column: -1 / 1;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;t.A=e=>{const{title:t,date:n,excerpt:a,slug:o,timeToRead:g,category:f}=e,h=t.charAt(0);return r.createElement(s,null,r.createElement(d,null,r.createElement(u,null,h),r.createElement(l.N_,{to:`/blog/${o}`},t)),r.createElement(c.A,null,r.createElement(m.n,{date:n})," — ",g," Min Read — In",r.createElement(l.N_,{to:`/categories/${i()(f)}`}," ",f)),r.createElement(p,null,a))}},9928:function(e,t,n){const r=n(6440).Ay.div`
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
//# sourceMappingURL=component---src-templates-blog-tsx-99d385923036cbc2ad57.js.map