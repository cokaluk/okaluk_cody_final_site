import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{d as l}from"./styled-components.browser.esm-Dxl9SFvD.js";const a=l.td`
color: ${({disabled:e,color:t})=>e?"gray":t||"black"};
font-size: ${({fontSize:e})=>e||"16px"};
font-weight: bold;
padding: 10px;
text-align: left;
opacity: ${({disabled:e})=>e?.5:1};
user-select: ${({disabled:e})=>e?"none":"auto"};
cursor: ${({disabled:e})=>e?"not-allowed":"auto"};
border: 1px solid black;
`,i=({disabled:e=!1,color:t,fontSize:o,text:r})=>s.jsx(a,{color:t,fontSize:o,disabled:e,children:r});i.__docgenInfo={description:"",methods:[],displayName:"TableCell",props:{disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"string"},description:""},fontSize:{required:!1,tsType:{name:"string"},description:""},text:{required:!0,tsType:{name:"string"},description:""}}};export{i as T};
