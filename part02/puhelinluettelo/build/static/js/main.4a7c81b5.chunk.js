(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,t,n){e.exports=n(38)},20:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),u=n.n(c),o=(n(20),n(14)),l=n(2),i=function(e){var t=e.handler,n=e.title,a=e.type,c=void 0===a?"button":a;return r.a.createElement("button",{onClick:t,type:c},n)},s=function(e){var t=e.label,n=e.handler,a=e.value;return r.a.createElement("div",null,t,":"," ",r.a.createElement("input",{onChange:n,type:"text",value:a}))},m=function(e){var t=e.fields,n=e.submit;return r.a.createElement("form",null,t.map((function(e){return r.a.createElement(s,Object.assign({},e,{key:e.label}))})),r.a.createElement(i,Object.assign({},n,{type:"submit"})))},f=function(e){var t=e.message,n=e.state;return r.a.createElement("div",{className:"notification ".concat(n)},t)},d=function(e){var t=e.data,n=e.deleteNumber,a=function(e,t){return function(){return n(e,t)}};return r.a.createElement("ul",null,t.map((function(e){var t=e.id,n=e.name,c=e.number;return r.a.createElement("li",{key:n},n," ",c," ",r.a.createElement(i,{handler:a(t,n),title:"Delete"}))})))},b=n(3),h=n.n(b),v="/api/persons",p=function(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(""),i=Object(l.a)(u,2),b=i[0],p=i[1],E=Object(a.useState)(""),g=Object(l.a)(E,2),j=g[0],O=g[1],w=Object(a.useState)(""),k=Object(l.a)(w,2),y=k[0],C=k[1],N=Object(a.useState)(null),S=Object(l.a)(N,2),A=S[0],D=S[1];Object(a.useEffect)((function(){h.a.get(v).then((function(e){return e.data})).then((function(e){c(e)}))}),[]),Object(a.useEffect)((function(){if(A){var e=setTimeout((function(){return D(null)}),5e3);return function(){return clearTimeout(e)}}}),[A,D]);var L={fields:[{handler:function(e){var t=e.target;return p(t.value)},label:"Name",value:b},{handler:function(e){var t=e.target;return O(t.value)},label:"Number",value:j}],submit:{handler:function(e){e.preventDefault();var t,a=n.find((function(e){return e.name===b}));a?window.confirm("".concat(b," is already added to phonebook, replace the old number with a new one?"))&&(t=Object(o.a)({},a,{number:j}),h.a.put("".concat(v,"/").concat(t.id),t).then((function(e){return e.data}))).then((function(e){c((function(t){return t.map((function(t){return t.id===e.id?e:t}))})),D({message:"Updated ".concat(b,"'s number on the phonebook."),state:"success"})})).catch((function(e){console.log(e.message),D({message:"An error occured",state:"error"})})):function(e){return h.a.post(v,e).then((function(e){return e.data}))}({name:b,number:j}).then((function(e){c((function(t){return t.concat(e)})),D({message:"Added ".concat(b," to phonebook."),state:"success"})})).catch((function(e){console.log(e.message),D({message:"An error occured",state:"error"})}))},title:"Add"}},x=""===y?n:n.filter((function(e){var t=e.name,n=e.number;return t.toLowerCase().match(y.toLowerCase())||n.toLowerCase().match(y.toLowerCase())}));return r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),A&&r.a.createElement(f,A),r.a.createElement(s,{label:"Search person or number",handler:function(e){var t=e.target;return C(t.value)},value:y}),r.a.createElement("h2",null,"Add a new"),r.a.createElement(m,L),x&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Numbers"),r.a.createElement(d,{data:x,deleteNumber:function(e,t){window.confirm("Delete ".concat(t,"?"))&&function(e){return h.a.delete("".concat(v,"/").concat(e))}(e).then((function(){c((function(t){return t.filter((function(t){return t.id!==e}))})),D({message:"Deleted ".concat(t," from the phonebook."),state:"success"})})).catch((function(e){console.log(e.message),D({message:"".concat(t," has already been removed from server."),state:"error"})}))}})))};u.a.render(r.a.createElement(p,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.4a7c81b5.chunk.js.map