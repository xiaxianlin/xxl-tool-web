import{r as m,j as s,ab as D,ac as b,ad as f,ae as j,e as U,af as V,ag as k,a9 as C,ah as F}from"./index-CYeMvKJj.js";import{g as I,E as A,D as B,A as T,F as L}from"./table-C9gpqBPG.js";import{F as d,u as E,I as w}from"./index-BCg4P2IL.js";import{k as P}from"./util-BmWk2NXg.js";import"./useBreakpoint-D7duzmMZ.js";const R=({parent:e,visible:n,initialValues:t,onHide:l,onSubmit:a})=>{const[o]=d.useForm(),[u,r]=m.useState(!1),[p,{setTrue:c,setFalse:y}]=E(!1),N=!t,i=()=>{o.resetFields(),l==null||l()},g=h=>{c(),a==null||a(h).then(()=>i()).finally(()=>y())};return m.useEffect(()=>{n&&t&&o.setFieldsValue(t)},[n,t]),s.jsxDEV(D,{centered:!0,title:N?"编辑菜单":"添加菜单",open:n,onCancel:i,onOk:()=>o.submit(),confirmLoading:p,okButtonProps:{disabled:!u},children:s.jsxDEV(d,{form:o,autoComplete:"off",labelCol:{span:4},wrapperCol:{span:20},style:{marginTop:24},onFinish:g,onValuesChange:()=>!u&&r(!0),children:[s.jsxDEV(d.Item,{name:"key",label:"Key",rules:P,children:s.jsxDEV(w,{placeholder:"请输入",maxLength:20,showCount:!0},void 0,!1,{fileName:"/Users/bytedance/projects/xxl-tool-web/src/pages/system/menu/form.tsx",lineNumber:56,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/bytedance/projects/xxl-tool-web/src/pages/system/menu/form.tsx",lineNumber:55,columnNumber:9},void 0),s.jsxDEV(d.Item,{name:"name",label:"名称",rules:[{required:!0}],children:s.jsxDEV(w,{placeholder:"请输入",maxLength:20,showCount:!0},void 0,!1,{fileName:"/Users/bytedance/projects/xxl-tool-web/src/pages/system/menu/form.tsx",lineNumber:59,columnNumber:11},void 0)},void 0,!1,{fileName:"/Users/bytedance/projects/xxl-tool-web/src/pages/system/menu/form.tsx",lineNumber:58,columnNumber:9},void 0),s.jsxDEV(d.Item,{label:"父级菜单",children:e||"-"},void 0,!1,{fileName:"/Users/bytedance/projects/xxl-tool-web/src/pages/system/menu/form.tsx",lineNumber:61,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/bytedance/projects/xxl-tool-web/src/pages/system/menu/form.tsx",lineNumber:46,columnNumber:7},void 0)},void 0,!1,{fileName:"/Users/bytedance/projects/xxl-tool-web/src/pages/system/menu/form.tsx",lineNumber:37,columnNumber:5},void 0)},S=async()=>{const{data:e}=await b.get("/menu");return e},q=async e=>{const{data:n}=await b.post("/menu",e);return n},z=async e=>{const{data:n}=await b.put("/menu",e);return n},K=async e=>{const{data:n}=await b.delete(`/menu/${e}`);return n},O=()=>{const[e,n]=m.useState(),[t,l]=m.useState(""),[a,{setTrue:o,setFalse:u}]=E(!1),{loading:r,data:p,refresh:c}=f(S),{runAsync:y}=f(q,{manual:!0,onSuccess:c}),{runAsync:N}=f(z,{manual:!0,onSuccess:c}),{runAsync:i}=f(K,{manual:!0,onSuccess:c}),g=m.useMemo(()=>e?{key:e==null?void 0:e.key,name:e==null?void 0:e.name}:void 0,[e]),h=j((x,v)=>{o(),n(v),l(x)}),M=j(async x=>e?N(x):y({...x,parent:t}));return{table:{loading:r,data:p||[]},form:{visible:a,parent:t,initialValues:g,onHide:u,onSubmit:M},showForm:h,handleDeleteMenu:i}},W=()=>{const{table:e,form:n,showForm:t,handleDeleteMenu:l}=O(),a=j(u=>{D.confirm({centered:!0,title:"删除菜单",content:"你确定要删除此菜单吗？",onOk:()=>l(u)})}),o=m.useMemo(()=>[{title:"名称",dataIndex:"name",width:200},{title:"Key",dataIndex:"key",width:200},...I(),{title:"操作",key:"action",width:180,render:(u,r)=>s.jsxDEV(U,{children:[s.jsxDEV(A,{onClick:()=>t("",r)},void 0,!1,{fileName:"/Users/bytedance/projects/xxl-tool-web/src/pages/system/menu/index.tsx",lineNumber:35,columnNumber:15},void 0),s.jsxDEV(B,{onClick:()=>a(r.key)},void 0,!1,{fileName:"/Users/bytedance/projects/xxl-tool-web/src/pages/system/menu/index.tsx",lineNumber:36,columnNumber:15},void 0),!r.parent&&s.jsxDEV(T,{onClick:()=>t(r.key)},void 0,!1,{fileName:"/Users/bytedance/projects/xxl-tool-web/src/pages/system/menu/index.tsx",lineNumber:37,columnNumber:32},void 0)]},void 0,!0,{fileName:"/Users/bytedance/projects/xxl-tool-web/src/pages/system/menu/index.tsx",lineNumber:34,columnNumber:13},void 0)}],[t,a]);return s.jsxDEV(V,{size:"large",title:"菜单管理",children:[s.jsxDEV(k,{bordered:!1,className:"with-table",title:s.jsxDEV(C,{type:"primary",icon:s.jsxDEV(F,{},void 0,!1,{fileName:"/Users/bytedance/projects/xxl-tool-web/src/pages/system/menu/index.tsx",lineNumber:52,columnNumber:40},void 0),onClick:()=>t(""),children:"添加一级菜单"},void 0,!1,{fileName:"/Users/bytedance/projects/xxl-tool-web/src/pages/system/menu/index.tsx",lineNumber:52,columnNumber:11},void 0),children:s.jsxDEV(L,{columns:o,loading:e.loading,dataSource:e.data,scroll:{y:55*8},pagination:!1},void 0,!1,{fileName:"/Users/bytedance/projects/xxl-tool-web/src/pages/system/menu/index.tsx",lineNumber:57,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/bytedance/projects/xxl-tool-web/src/pages/system/menu/index.tsx",lineNumber:48,columnNumber:7},void 0),s.jsxDEV(R,{...n},void 0,!1,{fileName:"/Users/bytedance/projects/xxl-tool-web/src/pages/system/menu/index.tsx",lineNumber:65,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/bytedance/projects/xxl-tool-web/src/pages/system/menu/index.tsx",lineNumber:47,columnNumber:5},void 0)};export{W as default};