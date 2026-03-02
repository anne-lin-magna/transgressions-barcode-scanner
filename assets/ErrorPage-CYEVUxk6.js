import{u as T,a as i,j as r,d as f,B as l,aO as h,p as j}from"./mui-Q5P_rhZz.js";import{h as C,j as E,x as y,y as v,z as P,T as s,c}from"./index-BpVB_2GP.js";import{u as $}from"./i18n-DymJ2Wuz.js";import"./react-Cgg2GOmP.js";import"./redux-xsAQR9OR.js";import"./ui-jQy5eLda.js";function M(){const{t:a}=$(),p=T(),d=C(),g=E(y),e=v();console.error(e);let o,t="*** DEVELOPMENT DETAILS ***";P(e)?(o=e?.error?.message||e?.statusText,t+=`
            ${e?.status}: ${e?.statusText}
            ${e?.data}
            ${e?.error?e?.error.message+`
`+e?.error.stack:""}
            `):e instanceof Error?(o=e.message,t+=`
            ${e.name}
            ${e.stack}
            ${e.cause}
            `):typeof e=="string"?(o=e,t+="N/A"):(o="Unknown Error",t+=JSON.stringify(e,void 0,2));const[n,x]=i.useState(!1),m=i.useCallback(()=>{const u=`${o}

${t}`;navigator.clipboard.writeText(u).then(()=>{x(!0)})},[o,t]);return r.jsx(f,{children:r.jsxs(l,{marginTop:10,textAlign:"center",children:[r.jsx(h,{color:"error",fontSize:"large"}),r.jsx(s,{testid:"errorPageTitle",variant:"h4",color:"error",textAlign:"center",marginBottom:5,children:a("error")}),r.jsx(s,{testid:"errorPageMessage",variant:"body1",color:"error",textAlign:"center",children:o}),r.jsx(c,{testid:"ErrorHandlingBackToHomePage",size:"large",variant:"outlined",onClick:()=>d("/"),sx:{marginTop:10},children:a("backToHomePage")}),g&&r.jsxs(r.Fragment,{children:[r.jsx(s,{testid:"errorPageDetails",textAlign:"left",children:r.jsx("pre",{children:t})}),r.jsxs(l,{display:"flex",marginTop:"15px",alignItems:"center",children:[r.jsx(c,{testid:"errorPageCopyButton",type:"submit",variant:"outlined",color:n?"warning":"info",size:"large",startIcon:r.jsx(j,{}),onClick:m,children:"Copy error to clipboard"}),n?r.jsx(s,{testid:"errorPageErrorCopied",color:p.palette.info.main,ml:"10px",children:"Copied!"}):null]})]})]})})}export{M as default};
