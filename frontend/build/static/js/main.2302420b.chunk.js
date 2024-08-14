(this["webpackJsonpmern-employee-management"]=this["webpackJsonpmern-employee-management"]||[]).push([[0],{23:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(9),o=a.n(n),l=a(4),s=a(3),r=(a(23),a(1));var i=e=>{let{onLogout:t}=e;return Object(r.jsxs)("nav",{className:"navbar",children:[Object(r.jsx)(l.b,{to:"/dashboard",children:"Home"}),Object(r.jsx)(l.b,{to:"/employee-list",children:"Employee List"}),Object(r.jsx)("button",{onClick:t,children:"Logout"})]})},j=a(5),d=a.n(j);a(43);var h=e=>{let{onLogin:t}=e;const[a,n]=Object(c.useState)(""),[o,l]=Object(c.useState)(""),i=Object(s.o)();return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Login"}),Object(r.jsx)("input",{type:"text",value:a,onChange:e=>n(e.target.value),placeholder:"Username"}),Object(r.jsx)("input",{type:"password",value:o,onChange:e=>l(e.target.value),placeholder:"Password"}),Object(r.jsx)("button",{onClick:async()=>{try{const e=await d.a.post("".concat("http://localhost:5005","/auth/login"),{userName:a,password:o});localStorage.setItem("token",e.data.token),t(),i("/create-employee")}catch(e){console.error("Login error:",e)}},children:"Login"})]})};a(44);var b=()=>{const[e,t]=Object(c.useState)(""),[a,n]=Object(c.useState)("");return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Register"}),Object(r.jsx)("input",{type:"text",placeholder:"User Name",value:e,onChange:e=>t(e.target.value)}),Object(r.jsx)("input",{type:"password",placeholder:"Password",value:a,onChange:e=>n(e.target.value)}),Object(r.jsx)("button",{onClick:async()=>{try{await d.a.post("http://localhost:5000/register",{userName:e,password:a}),alert("Registration successful"),window.location.href="/login"}catch(t){alert("Registration failed")}},children:"Register"})]})};a(45);var u=()=>{const e=localStorage.getItem("user"),t=Object(s.o)();return Object(r.jsxs)("div",{className:"dashboard",children:[Object(r.jsxs)("div",{className:"header",children:[Object(r.jsxs)("div",{className:"nav",children:[Object(r.jsx)(l.b,{to:"/dashboard",children:"Home"}),Object(r.jsx)(l.b,{to:"/employee-list",children:"EmployeeList"})]}),Object(r.jsxs)("div",{className:"user-info",children:[e," ",Object(r.jsx)("button",{onClick:()=>{localStorage.removeItem("user"),t("/")},children:"Logout"})]})]}),Object(r.jsx)("div",{className:"content",children:Object(r.jsx)("h2",{children:"Welcome to Admin Panel"})})]})};a(46);var m=()=>{const[e,t]=Object(c.useState)([]);Object(c.useEffect)((()=>{(async()=>{try{const e=await d.a.get("http://localhost:5005/employees",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});t(e.data)}catch(e){console.error("Error fetching employees:",e)}})()}),[]);return Object(r.jsxs)("div",{className:"employee-list-container",children:[Object(r.jsx)("h2",{children:"Employee List"}),Object(r.jsx)(l.b,{to:"/create-employee",className:"employee-list-button",children:"Create Employee"}),Object(r.jsx)("ul",{children:e.map((a=>Object(r.jsxs)("li",{children:[Object(r.jsxs)("span",{children:[a.name," - ",a.email]}),Object(r.jsx)("button",{onClick:()=>(async a=>{try{await d.a.delete("http://localhost:5005/employees/".concat(a),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}),t(e.filter((e=>e._id!==a)))}catch(c){console.error("Error deleting employee:",c)}})(a._id),children:"Delete"}),Object(r.jsx)(l.b,{to:"/edit-employee/".concat(a._id),children:"Edit"})]},a._id)))})]})};a(47);var p=()=>{const[e,t]=Object(c.useState)({name:"",email:"",mobile:"",designation:"HR",gender:"M",course:[],image:null}),a=Object(s.o)(),n=e=>{const{value:a,checked:c}=e.target;t(c?e=>({...e,course:[...e.course,a]}):e=>({...e,course:e.course.filter((e=>e!==a))}))};return Object(r.jsxs)("div",{className:"create-employee",children:[Object(r.jsxs)("div",{className:"header",children:[Object(r.jsxs)("div",{className:"nav",children:[Object(r.jsx)(l.b,{to:"/dashboard",children:"Home"}),Object(r.jsx)(l.b,{to:"/employee-list",children:"EmployeeList"})]}),Object(r.jsxs)("div",{className:"user-info",children:["Suruchi Sharma ",Object(r.jsx)("button",{onClick:()=>a("/"),children:"Logout"})]})]}),Object(r.jsxs)("form",{onSubmit:t=>{t.preventDefault(),console.log("Employee data:",e),a("/employee-list")},children:[Object(r.jsx)("h2",{children:"Create Employee"}),Object(r.jsx)("div",{children:Object(r.jsx)("input",{type:"text",value:e.name,onChange:a=>t({...e,name:a.target.value}),placeholder:"Name",required:!0})}),Object(r.jsx)("div",{children:Object(r.jsx)("input",{type:"email",value:e.email,onChange:a=>t({...e,email:a.target.value}),placeholder:"Email",required:!0})}),Object(r.jsx)("div",{children:Object(r.jsx)("input",{type:"text",value:e.mobile,onChange:a=>t({...e,mobile:a.target.value}),placeholder:"Mobile No",required:!0})}),Object(r.jsx)("div",{children:Object(r.jsxs)("select",{value:e.designation,onChange:a=>t({...e,designation:a.target.value}),required:!0,children:[Object(r.jsx)("option",{value:"HR",children:"HR"}),Object(r.jsx)("option",{value:"Manager",children:"Manager"}),Object(r.jsx)("option",{value:"Sales",children:"Sales"}),Object(r.jsx)("option",{value:"Developer",children:"Developer"})]})}),Object(r.jsxs)("div",{children:[Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{type:"radio",name:"gender",value:"M",checked:"M"===e.gender,onChange:a=>t({...e,gender:a.target.value})}),"Male"]}),Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{type:"radio",name:"gender",value:"F",checked:"F"===e.gender,onChange:a=>t({...e,gender:a.target.value})}),"Female"]})]}),Object(r.jsxs)("div",{children:[Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{type:"checkbox",value:"MCA",checked:e.course.includes("MCA"),onChange:n}),"MCA"]}),Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{type:"checkbox",value:"BCA",checked:e.course.includes("BCA"),onChange:n}),"BCA"]}),Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{type:"checkbox",value:"BE",checked:e.course.includes("BE"),onChange:n}),"BE"]}),Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{type:"checkbox",value:"B-Tech",checked:e.course.includes("B-Tech"),onChange:n}),"B-Tech"]})]}),Object(r.jsx)("div",{children:Object(r.jsx)("input",{type:"file",onChange:a=>t({...e,image:a.target.files[0]}),required:!0})}),Object(r.jsx)("button",{type:"submit",children:"Submit"})]})]})};a(48);var O=()=>{const[e,t]=Object(c.useState)({name:"Prabhat Kumar",email:"hcgupta@cstech.in",mobile:"954010044",designation:"HR",gender:"M",course:["MCA"],image:null}),a=Object(s.o)();return Object(r.jsxs)("div",{className:"edit-employee",children:[Object(r.jsxs)("div",{className:"header",children:[Object(r.jsxs)("div",{className:"nav",children:[Object(r.jsx)(l.b,{to:"/dashboard",children:"Home"}),Object(r.jsx)(l.b,{to:"/employee-list",children:"EmployeeList"})]}),Object(r.jsxs)("div",{className:"user-info",children:["Suruchi Sharma ",Object(r.jsx)("button",{onClick:()=>a("/"),children:"Logout"})]})]}),Object(r.jsxs)("form",{onSubmit:t=>{t.preventDefault(),console.log("Updated Employee data:",e),a("/employee-list")},children:[Object(r.jsx)("h2",{children:"Edit Employee"}),Object(r.jsx)("div",{children:Object(r.jsx)("input",{type:"text",value:e.name,onChange:a=>t({...e,name:a.target.value}),placeholder:"Name",required:!0})}),Object(r.jsx)("div",{children:Object(r.jsx)("input",{type:"email",value:e.email,onChange:a=>t({...e,email:a.target.value}),placeholder:"Email",required:!0})}),Object(r.jsx)("div",{children:Object(r.jsx)("input",{type:"text",value:e.mobile,onChange:a=>t({...e,mobile:a.target.value}),placeholder:"Mobile No",required:!0})}),Object(r.jsx)("div",{children:Object(r.jsxs)("select",{value:e.designation,onChange:a=>t({...e,designation:a.target.value}),required:!0,children:[Object(r.jsx)("option",{value:"HR",children:"HR"}),Object(r.jsx)("option",{value:"Manager",children:"Manager"}),Object(r.jsx)("option",{value:"Sales",children:"Sales"}),Object(r.jsx)("option",{value:"Developer",children:"Developer"})]})}),Object(r.jsxs)("div",{children:[Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{type:"radio",name:"gender",value:"M",checked:"M"===e.gender,onChange:a=>t({...e,gender:a.target.value})}),"Male"]}),Object(r.jsxs)("label",{children:[Object(r.jsx)("input",{type:"radio",name:"gender",value:"F",checked:"F"===e.gender,onChange:a=>t({...e,gender:a.target.value})}),"Female"]})]}),Object(r.jsx)("div",{children:Object(r.jsx)("input",{type:"file",onChange:a=>t({...e,image:a.target.files[0]}),required:!0})}),Object(r.jsx)("button",{type:"submit",children:"Update"})]})]})};var g=()=>Object(r.jsx)("div",{children:Object(r.jsx)("h1",{children:"Test Component"})});a(49);const x="http://localhost:5005";var v=()=>{const[e,t]=Object(c.useState)([]),[a,n]=Object(c.useState)({name:"",email:"",mobile:"",designation:"",gender:"",course:"",image:null}),[o,j]=Object(c.useState)(null),[v,y]=Object(c.useState)(!!localStorage.getItem("token"));Object(c.useEffect)((()=>{if(v){(async()=>{try{const e=await d.a.get("".concat(x,"/employees"),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});t(e.data)}catch(e){console.error("Error fetching employees:",e)}})()}}),[v]);const C=e=>{n(e),j(e)},f=()=>{y(!0)};return Object(r.jsxs)(l.a,{children:[v&&Object(r.jsx)(i,{onLogout:()=>{localStorage.removeItem("token"),y(!1)}}),Object(r.jsxs)(s.c,{children:[Object(r.jsx)(s.a,{path:"/",element:v?Object(r.jsx)(u,{}):Object(r.jsx)(b,{onLogin:f})}),Object(r.jsx)(s.a,{path:"/login",element:Object(r.jsx)(h,{onLogin:f})}),Object(r.jsx)(s.a,{path:"/register",element:Object(r.jsx)(b,{onLogin:f})}),Object(r.jsx)(s.a,{path:"/dashboard",element:v?Object(r.jsx)(u,{}):Object(r.jsx)(h,{onLogin:f})}),Object(r.jsx)(s.a,{path:"/employee-list",element:v?Object(r.jsx)(m,{employees:e,onUpdateEmployee:C,onDeleteEmployee:async e=>{try{await d.a.delete("".concat(x,"/employees/").concat(e),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});const a=await d.a.get("".concat(x,"/employees"),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});t(a.data)}catch(a){console.error("Error deleting employee:",a)}}}):Object(r.jsx)(h,{onLogin:f})}),Object(r.jsx)(s.a,{path:"/create-employee",element:v?Object(r.jsx)(p,{newEmployee:a,setNewEmployee:n,handleCreateEmployee:async()=>{const e=new FormData;Object.keys(a).forEach((t=>{e.append(t,a[t])}));try{o?await d.a.put("".concat(x,"/employees/").concat(o._id),e,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(localStorage.getItem("token"))}}):await d.a.post("".concat(x,"/employees"),e,{headers:{"Content-Type":"multipart/form-data",Authorization:"Bearer ".concat(localStorage.getItem("token"))}});const a=await d.a.get("".concat(x,"/employees"),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}});t(a.data),n({name:"",email:"",mobile:"",designation:"",gender:"",course:"",image:null}),j(null)}catch(c){console.error("Error saving employee:",c)}}}):Object(r.jsx)(h,{onLogin:f})}),Object(r.jsx)(s.a,{path:"/edit-employee/:id",element:v?Object(r.jsx)(O,{handleUpdateEmployee:C}):Object(r.jsx)(h,{onLogin:f})}),Object(r.jsx)(s.a,{path:"/test",element:Object(r.jsx)(g,{})})]})]})};o.a.render(Object(r.jsx)(l.a,{children:Object(r.jsx)(v,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.2302420b.chunk.js.map