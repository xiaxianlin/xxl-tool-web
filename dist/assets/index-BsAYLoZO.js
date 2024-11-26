import{E as k,r as a,F as E,G as i,a as v,H as K,j as f,d as $,M as I,I as U,L as A}from"./index-DDII5y11.js";import{U as x}from"./user-D3zZ9K6P.js";const D=()=>{const{user:n}=k();return{admin:(n==null?void 0:n.role)===x.Admin,manager:(n==null?void 0:n.role)===x.Manager,user:(n==null?void 0:n.role)===x.User,guest:(n==null?void 0:n.role)===x.Guest}},S=(n,t)=>(n||[]).filter(e=>!e.hideInMenu&&(!e.access||(t==null?void 0:t.includes(e.access)))).map(e=>{const o={...i.pick(e,["type","key"]),path:e.fullPath||e.path,label:e==null?void 0:e.name};return i.isArray(e.children)&&e.children.length&&(o.children=S(e.children,t),o.children.length||delete o.children),o}),j=n=>i.flatMap(n,t=>t.children&&i.isArray(t.children)?[i.omit(t,["children"]),...j(t.children)]:t),O=(n,t)=>{const e=a.useRef(new Map),{pathname:o}=E(),[m,y]=a.useState([]),[g,h]=a.useState([]),b=a.useMemo(()=>S(n,t),[n,t]);a.useEffect(()=>{j(b).forEach(r=>{if(r.path){const l=e.current.get(r.path);l?l.add(r.key):e.current.set(r.path,new Set([r.key]))}})},[b]);function M(){const r=o.split("/");let l=[],d=[...g];for(;r.length;){const s=r.join("/"),c=e.current.get(s);if(c){const u=Array.from(c);l=i.union(l,u),d=i.union(d,u)}r.pop()}y(l),h(d)}return a.useEffect(()=>{M()},[o]),{menus:b,selectedKeys:m,setSelectedKeys:y,openKeys:g,setOpenKeys:h}},R=v(({css:n,token:t,prefixCls:e})=>({root:n`
      &.${e}-layout-sider {
        position: fixed;
        left: 0;
        top: 64px;
        bottom: 0;
        z-index: ${t.zIndexPopupBase};
      }
    `,ghost:n`
      visibility: hidden;
    `,menu:n`
      &.${e}-menu-light.${e}-menu-root {
        &.${e}-menu-inline,&.${e}-menu-vertical {
          border-inline-end: 0;
          max-height: 100%;
          overflow: auto;
          padding: ${t.paddingXS}px 0;
          &::-webkit-scrollbar {
            width: 4px;
            height: 4px;
          }
          &::-webkit-scrollbar-track {
            background: transparent;
          }
          &::-webkit-scrollbar-thumb {
            background: ${t.colorFill};
            border-radius: 4px;
          }
        }
      }

      // 推荐通过样式隐藏分组标题
      &.${e}-menu-inline-collapsed {
        .${e}-menu-item-group-title {
          display: none;
        }
      }
      .${e}-menu-submenu-arrow {
        &:before,
        &:after {
          height: 1px;
          border-radius: 0;
        }
      }
    `})),{Sider:N}=A,L=()=>{var d;const{themeMode:n}=k(),[t,e]=a.useState(!1),{styles:o}=R(),m=D();function y(s){function c(u){return u.map(p=>{const w=i.pick(p,["path","key","type","label"]);return i.isArray(p.children)&&p.children.length&&(w.children=c(p.children)),w})}return c(s)}const g=a.useMemo(()=>Object.keys(m).filter(s=>m[s]),[JSON.stringify(m)]),{menus:h,selectedKeys:b,openKeys:M,setOpenKeys:r}=O((d=K.find(s=>s.path==="/"))==null?void 0:d.children,g),l=a.useMemo(()=>y(h),[h]);return f.jsxDEV($,{theme:{components:{Menu:{iconSize:18,itemBorderRadius:0,itemMarginBlock:0,itemMarginInline:0,collapsedIconSize:18,itemHeight:46,iconMarginInlineEnd:12,groupTitleFontSize:12,padding:24}}},themeMode:n,children:[f.jsxDEV(N,{collapsed:t,className:o.ghost,breakpoint:"lg",width:240,collapsedWidth:64},void 0,!1,{fileName:"/Users/bytedance/projects/xxl-tool-web/src/layouts/page/components/sidebar/index.tsx",lineNumber:76,columnNumber:7},void 0),f.jsxDEV(N,{collapsed:t,theme:"light",className:o.root,breakpoint:"lg",width:240,collapsedWidth:64,onCollapse:s=>e(s),children:f.jsxDEV(I,{className:o.menu,selectedKeys:b,openKeys:M,theme:"light",mode:"inline",inlineIndent:28,items:l,_internalRenderMenuItem:(s,c)=>{const{elementRef:u,...p}=s.props;return f.jsxDEV(U,{to:c.path,ref:u,...p},void 0,!1,{fileName:"/Users/bytedance/projects/xxl-tool-web/src/layouts/page/components/sidebar/index.tsx",lineNumber:96,columnNumber:20},void 0)},onOpenChange:s=>r(s)},void 0,!1,{fileName:"/Users/bytedance/projects/xxl-tool-web/src/layouts/page/components/sidebar/index.tsx",lineNumber:86,columnNumber:9},void 0)},void 0,!1,{fileName:"/Users/bytedance/projects/xxl-tool-web/src/layouts/page/components/sidebar/index.tsx",lineNumber:77,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/bytedance/projects/xxl-tool-web/src/layouts/page/components/sidebar/index.tsx",lineNumber:58,columnNumber:5},void 0)};export{L as default};
