(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{17:function(t,e,n){},26:function(t,e,n){},27:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),i=n(9),o=n.n(i),s=(n(17),n(11)),u=n(3),l=n(4),h=n(7),b=n(6),d=n(5),j=n.n(d),f=(n(26),n(10)),m=function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).loginInputId=j.a.generate(),t.state={contacts:[],name:"",number:""},t.handleNameChange=function(e){t.setState(Object(f.a)({},e.currentTarget.name,e.currentTarget.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.onAddContact(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsx)("label",{htmlFor:this.loginInputId,children:"Name"}),Object(a.jsx)("input",{type:"text",name:"name",id:this.loginInputId,value:this.state.name,onChange:this.handleNameChange}),Object(a.jsx)("label",{htmlFor:this.loginInputId,children:"Number"}),Object(a.jsx)("input",{type:"text",name:"number",id:this.loginInputId,value:this.state.number,onChange:this.handleNameChange}),Object(a.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(c.Component),g=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(a.jsx)("ul",{children:e.map((function(t){var e=t.id,c=t.name,r=t.number;return Object(a.jsxs)("li",{children:[" ",c,": ",r,Object(a.jsx)("button",{type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})};function p(t){var e=t.value,n=t.onChangeFilter;return Object(a.jsx)("div",{children:Object(a.jsx)("input",{type:"name",value:e,onChange:function(t){return n(t.target.value)}})})}var O=function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addContact=function(e){var n=e.name,a=e.number,c={id:j.a.generate(),name:n,number:a};t.setState((function(e){if(!t.state.contacts.find((function(t){return t.name===n})))return{contacts:[].concat(Object(s.a)(e.contacts),[c])};alert("".concat(c.name," is already in contacts."))}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Phonebook"}),Object(a.jsx)(m,{onAddContact:this.addContact}),e.length>1&&Object(a.jsx)(p,{value:t,onChangeFilter:this.changeFilter}),e.length>0&&Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(g,{contacts:e,onDeleteContact:this.deleteContact})]})]})}}]),n}(c.Component),v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root")),v()}},[[27,1,2]]]);
//# sourceMappingURL=main.3d5417cf.chunk.js.map