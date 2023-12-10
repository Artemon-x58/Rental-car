import{s as e,L as r,j as t,h as n}from"./index-p9M4Os9P.js";import{c as a,C as i}from"./CarsList--4AWHhIx.js";import"./index-Bl--K8Rd.js";const c=e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`,l=e.h2`
  font-size: 24px;
  margin-bottom: 16px;
`,s=e.p`
  font-size: 18px;
  margin-bottom: 24px;
`,x=e(r)`
  font-size: 18px;
  text-decoration: underline;
  color: #007bff;

  &:hover {
    color: #0056b3;
  }
`,d=()=>t.jsxs(c,{children:[t.jsx(l,{children:"No Favorite Cars"}),t.jsx(s,{children:"It seems you haven't added any cars to your favorites yet."}),t.jsxs(s,{children:["Visit our ",t.jsx(x,{to:"/catalog",children:"catalog"})," to add cars to your favorites."]})]}),p=()=>{const o=n(a);return t.jsx(t.Fragment,{children:o.length!==0?t.jsx(i,{cars:o}):t.jsx(d,{})})};export{p as default};
