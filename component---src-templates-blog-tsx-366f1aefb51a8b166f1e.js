"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[256],{2348:function(e,t,n){n.d(t,{A:function(){return s}});var r=n(4041),l=n(6691),a=n(750),o=n.n(a),i=n(3286),c=n(6232);var s=e=>{const{title:t,date:n,excerpt:a,slug:s,timeToRead:m,category:d}=e,u=t.charAt(0);return r.createElement("article",{className:"Article-module--post--0c771"},r.createElement("h2",{className:"Article-module--title--d3c82"},r.createElement("span",{className:"Article-module--initiale--b9b01"},u),r.createElement(l.N_,{to:`/blog/${s}`},t)),r.createElement(i.A,null,r.createElement(c.n,{date:n})," — ",m," Min Read — In",r.createElement(l.N_,{to:`/categories/${o()(d)}`}," ",d)),r.createElement("p",{className:"Article-module--excerpt--7fbc1"},a))}},3436:function(e,t,n){n.d(t,{A:function(){return i}});var r=n(4041),l=n(3373),a=n.n(l),o="SectionTitle-module--uppercase--eefec";var i=e=>{let{theme:t,uppercase:n,children:l}=e;const i={"--section-title-font-size":null==t?void 0:t.fontSize.big,"--section-title-font-family":null==t?void 0:t.fontFamily.heading,"--section-title-after-bg":null==t?void 0:t.colors.white};return r.createElement("div",{className:a()("SectionTitle-module--sectionTitle--440a1",{[o]:n}),style:i},l)}},3681:function(e,t,n){n.d(t,{Iu:function(){return d}});var r=n(4041),l=n(6691),a=n(6440),o=n(6436),i=n(1751),c=n(6543),s=n.n(c);const m=a.Ay.div`
  text-align: center;
  margin: 2rem;
`,d=a.Ay.div`
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
      background-color: ${s()(.2,i.A.colors.primary)};
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
      color: ${s()(.2,i.A.colors.primary)};
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
`;t.Ay=e=>{const{currentPage:t,totalPages:n,url:a}=e,o=1===t,i=t===n,c=t-1==1?`/${a}/`:`/${a}/${(t-1).toString()}`,s=`/${a}/${(t+1).toString()}`;return n>1?r.createElement(m,null,r.createElement(d,null,!o&&r.createElement(l.N_,{className:"prev page-numbers",to:c,rel:"prev"},"← Prev"),Array.from({length:n},(e,n)=>r.createElement(l.N_,{className:t===n+1?"page-numbers current":"page-numbers",key:`pagination-number${n+1}`,to:`/${a}/${0===n?"":n+1}`},n+1)),!i&&r.createElement(l.N_,{className:"next page-numbers",to:s,rel:"next"},"Next →"))):null}},4918:function(e,t,n){var r=n(4041),l=n(6440),a=n(6326),o=n(6691),i=n(4262);const c=l.Ay.header`
  padding: 2rem 1rem 0.5rem;
  text-align: left;
`,s=l.Ay.div`
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
`,m=l.Ay.span`
  font-size: 1.8rem;
  font-family: ${e=>e.theme.fontFamily.heading};
  font-weight: 900;
`;t.A=e=>r.createElement(c,{banner:e.banner||a.A.defaultBg,className:"no-print"},r.createElement(s,{justify:"space-between"},r.createElement("div",null,r.createElement(m,null,"Jesús Quintana"),r.createElement("br",null),r.createElement(o.N_,{to:"/"},a.A.siteTitle)),r.createElement(i.A,null)),r.createElement("br",null),e.children&&r.createElement(s,{direction:"column"},e.children))},5414:function(e,t,n){n.d(t,{A:function(){return l}});var r=n(4041);var l=e=>{let{children:t}=e;return r.createElement("div",{className:"Content-module--content--ea159"},t)}},5464:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(701),l=n(4041),a=n(5844),o=n(9084),i=n(4918),c=n(3436),s=n(4525),m=n(5414),d=n(2348),u=n(3681);let p=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.A)(t,e),t.prototype.render=function(){const{currentPage:e,totalPages:t}=this.props.pageContext,{data:n}=this.props,{edges:r}=n.allMarkdownRemark;return l.createElement(o.A,null,l.createElement(a.A,{title:"Blog"}),l.createElement(i.A,null,l.createElement(c.A,{uppercase:!0},"All the posts")),l.createElement(s.A,null,l.createElement(m.A,null,r.map(e=>l.createElement(d.A,{title:e.node.frontmatter.title,date:e.node.frontmatter.date,excerpt:e.node.excerpt,timeToRead:e.node.timeToRead,slug:e.node.fields.slug,category:e.node.frontmatter.category,key:e.node.fields.slug})),l.createElement(u.Ay,{currentPage:e,totalPages:t,url:"blog"}))))},t}(l.Component)},5844:function(e,t,n){var r=n(4041),l=n(6326);t.A=e=>{const{title:t=l.A.siteTitle}=e;return r.createElement("div",{style:{display:"none"}},t)}}}]);
//# sourceMappingURL=component---src-templates-blog-tsx-366f1aefb51a8b166f1e.js.map