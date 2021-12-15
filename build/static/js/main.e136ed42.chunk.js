(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{19:function(e,t){e.exports={parserForm:function(e){return{type:e.type.value,gender:e.gender.value,name:{title:e.title.value,first:e.fname.value,last:e.lname.value},address:e.address.value,email:e.email.value,phone:e.phone.value,cell:e.cell.value,id:{type:e.document_type.value,value:e.document.value},picture:{thumbnail:"https://via.placeholder.com/500x500?text=".concat(e.fname.value)}}}}},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},4:function(e,t,n){var c=n(28),a="http://localhost:8000/api",o={mode:"no-cors",headers:{Accept:"*/*","Access-Control-Allow-Origin":"*/*","Content-Type":"application/json"}};e.exports={getTeachers:function(){return c.get("".concat(a,"/teachers"),o)},getTutors:function(){return c.get("".concat(a,"/tutors"),o)},getStudents:function(){return c.get("".concat(a,"/students"),o)},postTeachers:function(e){return c.post("".concat(a,"/teachers"),e,o)},postTutors:function(e){return c.post("".concat(a,"/tutors"),e,o)},postStudents:function(e){return c.post("".concat(a,"/students"),e,o)},putTeacher:function(e,t){return c.put("".concat(a,"/teachers/").concat(e),t,o)},putTutor:function(e,t){return c.put("".concat(a,"/tutors/").concat(e),t,o)},putStudent:function(e,t){return c.put("".concat(a,"/students/").concat(e),t,o)},delTeacher:function(e,t){return c.delete("".concat(a,"/teachers/").concat(e),t,o)},delTutor:function(e,t){return c.delete("".concat(a,"/tutors/").concat(e),t,o)},delStudent:function(e,t){return c.delete("".concat(a,"/students/").concat(e),t,o)}}},47:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),o=n(18),s=n.n(o),r=n(7),l=n(9),u=n(3),i=(n(24),n(25),n(26),n(0)),j=function(e){var t=Object(c.useState)(0),n=Object(u.a)(t,2),a=n[0],o=n[1];return Object(i.jsx)("li",{onClick:function(e){},children:Object(i.jsxs)("div",{className:"list-item",children:[Object(i.jsx)("div",{className:"list-item-logo",children:Object(i.jsx)("img",{alt:"avatar",src:e.item.picture.thumbnail})}),Object(i.jsxs)("div",{className:"list-item-body",children:[Object(i.jsx)("p",{className:"name",children:"".concat(e.item.name.title," ").concat(e.item.name.first," ").concat(e.item.name.last)}),Object(i.jsx)("p",{className:"time",children:e.item.address}),Object(i.jsx)("p",{className:"prhone",children:e.item.phone}),Object(i.jsx)("p",{className:"email",children:e.item.email}),Object(i.jsx)("p",{children:Object(i.jsxs)("button",{className:"btn",onClick:function(){o(a+1)},children:["+ ",a]})})]})]})})},d=function(e){return Object(i.jsx)("ul",{className:"ul",children:e.list.map((function(e){return Object(i.jsx)(j,{item:e},e.id.value)}))})},p=n(19),b=n(4),m=function(){var e=Object(c.useState)("Bienvenidos"),t=Object(u.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)([]),s=Object(u.a)(o,2),j=s[0],m=s[1],h=Object(c.useState)(!0),O=Object(u.a)(h,2),f=O[0],x=O[1],v=Object(c.useState)({document_type:"",document:"",title:"",fname:"",lname:"",gender:"",email:"",address:"",phone:"",cell:"",type:""}),g=Object(u.a)(v,2),C=g[0],y=g[1];Object(c.useEffect)((function(){document.title="".concat(n)}));var T=function(e){var t=e.target.value;y(Object(l.a)(Object(l.a)({},C),{},Object(r.a)({},e.target.name,t)))};return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsxs)("header",{className:"App-header",children:[Object(i.jsx)("br",{}),Object(i.jsx)("h1",{children:"MISION TIC 2022!!"}),Object(i.jsx)("h3",{children:n}),Object(i.jsx)("br",{})]}),Object(i.jsxs)("div",{className:"App-buttons",children:[Object(i.jsx)("button",{onClick:function(){a("Bienvenidos"),x(!0),m([])},children:" Formulario "}),Object(i.jsx)("button",{onClick:function(){a("Lista de Tripulantes"),Object(b.getStudents)().then((function(e){var t=e.data;m(t.filter((function(e){return"students"===e.type})))})),x(!1)},children:" Tripulantes "}),Object(i.jsx)("button",{onClick:function(){a("Lista de Formadores"),Object(b.getTeachers)().then((function(e){var t=e.data;m(t.filter((function(e){return"teachers"===e.type})))})),x(!1)},children:" Formadores "}),Object(i.jsx)("button",{onClick:function(){a("Lista de Tutores"),Object(b.getTutors)().then((function(e){var t=e.data;m(t.filter((function(e){return"tutors"===e.type})))})),x(!1)},children:" Tutores "})]}),f&&Object(i.jsxs)("form",{onSubmit:function(e){var t=e.target,n=Object.assign({},Object(p.parserForm)(t));"teachers"===n.type?Object(b.postTeachers)(n):"students"===n.type?Object(b.postStudents)(n):Object(b.postTutors)(n),e.preventDefault()},children:[Object(i.jsxs)("select",{name:"document_type",value:C.document_type,onChange:T,children:[Object(i.jsx)("option",{value:"CC",children:"CC"}),Object(i.jsx)("option",{value:"TI",children:"TI"}),Object(i.jsx)("option",{value:"OT",children:"OT"})]}),Object(i.jsx)("input",{name:"document",type:"text",autoComplete:"off",placeholder:"Identificaci\xf3n",value:C.document,onChange:T}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{name:"title",type:"text",autoComplete:"off",placeholder:"T\xedtulo",value:C.title,onChange:T}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{name:"fname",type:"text",autoComplete:"off",placeholder:"Nombre",value:C.fname,onChange:T}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{name:"lname",type:"text",autoComplete:"off",placeholder:"Apellidos",value:C.lname,onChange:T}),Object(i.jsx)("br",{}),Object(i.jsxs)("select",{name:"gender",value:C.gender,onChange:T,children:[Object(i.jsx)("option",{value:"M",children:"Masculino"}),Object(i.jsx)("option",{value:"F",children:"Femenino"})]}),Object(i.jsx)("input",{name:"email",type:"email",autoComplete:"off",placeholder:"Email",value:C.email,onChange:T}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{name:"address",type:"text",autoComplete:"off",placeholder:"Direcci\xf3n",value:C.address,onChange:T}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{name:"phone",type:"text",autoComplete:"off",placeholder:"Tel\xe9fono",value:C.phone,onChange:T}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{name:"cell",type:"text",autoComplete:"off",placeholder:"Celular",value:C.cell,onChange:T}),Object(i.jsx)("br",{}),Object(i.jsxs)("select",{name:"type",value:C.type,onChange:T,children:[Object(i.jsx)("option",{value:"teachers",children:"Formadores"}),Object(i.jsx)("option",{value:"students",children:"Tripulantes"}),Object(i.jsx)("option",{value:"tutors",children:"Tutores"})]}),Object(i.jsxs)("div",{className:"btn-group",children:[Object(i.jsx)("button",{onClick:function(e){y({document_type:"",document:"",title:"",fname:"",lname:"",gender:"",email:"",address:"",phone:"",cell:"",type:""}),e.preventDefault()},children:"Borrar"}),Object(i.jsx)("button",{type:"submit",children:"Enviar"})]})]}),Object(i.jsx)(d,{list:j})]})};s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(m,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.e136ed42.chunk.js.map