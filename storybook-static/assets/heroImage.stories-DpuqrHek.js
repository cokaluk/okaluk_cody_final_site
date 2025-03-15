import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{d as o}from"./styled-components.browser.esm-Dxl9SFvD.js";import"./index-DmM0KDA7.js";const f=o.section.attrs({role:"banner"})`
width: 100vw;
overflow: hidden;
height: ${({height:e})=>e||"500px"};
background-image: url(${({backgroundImage:e})=>e});
background-size: cover;
background-position: center;
display: flex;
justify-content: center;
align-items: center;
color: white
position: relative;
cursor: ${({disabled:e})=>e?"not-allowed":"default"};
opacity: ${({disabled:e})=>e?.5:1};
`,x=o.div`
  background-color: rgba(0, 0, 0, 0.4);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`,y=o.h1`
  font-size: 3rem;
  margin: 0;
`,k=o.p`
font-size: 1.5rem;
`,m=({backgroundImage:e,height:u,heading:b,subheading:t,disabled:h=!1})=>r.jsx(f,{backgroundImage:e,height:u,disabled:h,children:r.jsxs(x,{children:[r.jsx(y,{children:b}),t&&r.jsx(k,{children:t})]})});m.__docgenInfo={description:"",methods:[],displayName:"HeroImage",props:{backgroundImage:{required:!0,tsType:{name:"string"},description:""},height:{required:!1,tsType:{name:"string"},description:""},heading:{required:!0,tsType:{name:"string"},description:""},subheading:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const p=""+new URL("heroimg-CCmncEN9.jpg",import.meta.url).href,v={title:"Example/HeroImage",component:m,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{disabled:{control:"boolean"},heading:{control:"text"},height:{control:"text"},subheading:{control:"text"}}},a={args:{disabled:!0,backgroundImage:p,heading:"Disabled"}},n={args:{disabled:!1,backgroundImage:p,heading:"Enabled"}};var s,i,d;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    disabled: true,
    backgroundImage: heroimg,
    heading: 'Disabled'
  }
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var c,l,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    disabled: false,
    backgroundImage: heroimg,
    heading: 'Enabled'
  }
}`,...(g=(l=n.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};const T=["Disabled","Enabled"];export{a as Disabled,n as Enabled,T as __namedExportsOrder,v as default};
