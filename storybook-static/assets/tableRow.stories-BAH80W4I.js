import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{R as C}from"./index-DmM0KDA7.js";import{d as R}from"./styled-components.browser.esm-Dxl9SFvD.js";import{T as a}from"./tableCell-DpJwDz4v.js";const w=R.tr`
background-color: ${({backgroundColor:e})=>e||"transparent"};
border-bottom: 1px solid black;
opacity: ${({disabled:e})=>e?.5:1};
user-select: ${({disabled:e})=>e?"none":"auto"};
cursor: ${({disabled:e})=>e?"not-allowed":"auto"};
`,i=({disabled:e=!1,backgroundColor:m,cells:p})=>{const u=p.map(x=>C.cloneElement(x,{disabled:e}));return l.jsx(w,{disabled:e,backgroundColor:m,children:u})};i.__docgenInfo={description:"",methods:[],displayName:"TableRow",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:""},cells:{required:!0,tsType:{name:"Array",elements:[{name:"ReactReactElement",raw:"React.ReactElement<TableCellProps>",elements:[{name:"TableCellProps"}]}],raw:"React.ReactElement<TableCellProps>[]"},description:""}}};const g={title:"Example/TableRow",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}}},o={args:{disabled:!0,cells:[l.jsx(a,{text:"Disabled Row 1, Col 1"},1),l.jsx(a,{text:"Disabled Row 1, Col 2"},1),l.jsx(a,{text:"Disabled Row 1, Col 3"},1)]}},t={args:{disabled:!1,cells:[l.jsx(a,{text:"Enabled Row 1, Col 1"},1),l.jsx(a,{text:"Enabled Row 1, Col 2"},1),l.jsx(a,{text:"Enabled Row 1, Col 3"},1)]}};var s,r,n;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    disabled: true,
    cells: [<TableCell key={1} text="Disabled Row 1, Col 1" />, <TableCell key={1} text="Disabled Row 1, Col 2" />, <TableCell key={1} text="Disabled Row 1, Col 3" />]
  }
}`,...(n=(r=o.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};var d,c,b;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    disabled: false,
    cells: [<TableCell key={1} text="Enabled Row 1, Col 1" />, <TableCell key={1} text="Enabled Row 1, Col 2" />, <TableCell key={1} text="Enabled Row 1, Col 3" />]
  }
}`,...(b=(c=t.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};const k=["Disabled","Enabled"];export{o as Disabled,t as Enabled,k as __namedExportsOrder,g as default};
