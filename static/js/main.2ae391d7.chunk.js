(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={app:"App_app__3Fhgc"}},20:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(11),o=n.n(r),i=n(13),s=n(2),l=n(3),u=n(5),h=n(4),d=n(7),b=n(6),m=n.n(b),p=n(22),j=n(0),f=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number,r=t.props.onAdd;if((0,t.props.onCheckUnique)(t.state.name)){var o=Object(p.a)();t.setState({id:o}),r({id:o,name:a,number:c}),t.reset()}},t.reset=function(){t.setState({id:"",name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{className:m.a.form_contact,onSubmit:this.handleSubmit,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"name",className:m.a.label_contact,children:"Name"}),Object(j.jsx)("input",{type:"text",className:m.a.input_contact,name:"name",value:this.state.name,placeholder:"Enter name",onChange:this.handleChange,required:!0})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"phone",className:m.a.label_contact,children:"Phone"}),Object(j.jsx)("input",{type:"tel",className:m.a.input_contact,name:"number",value:this.state.number,placeholder:"Enter phone XXX-XX-XX",pattern:"^(\\d{3})-\\d{2}-\\d{2}$",onChange:this.handleChange,required:!0})]}),Object(j.jsx)("button",{type:"submit",className:m.a.btn_add,onSubmit:this.handleSubmit,children:"Add contact"})]})}}]),n}(a.Component),_=n(8),O=n.n(_),v=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={filter:""},t.handleChange=function(e){var n=t.props.onSearch,a=t.state.filter,c=e.currentTarget,r=c.name,o=c.value;t.setState(Object(d.a)({},r,o)),n(a)},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{className:O.a.form_search,children:[Object(j.jsx)("label",{htmlFor:"filter",className:O.a.label_search,children:"Find contacts by name"}),Object(j.jsx)("input",{type:"text",name:"filter",className:O.a.input_search,placeholder:"Enter the name",onChange:this.handleChange})]})}}]),n}(a.Component),C=n(9),x=n.n(C),g=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props.contacts,e=this.props.onDelete;return 0===t.length?Object(j.jsx)("div",{children:"Nothing found"}):Object(j.jsx)("ul",{className:x.a.contact_list,children:t.map((function(t){return Object(j.jsx)(y,{id:t.id,name:t.name,number:t.number,onDelete:e},t.id)}))})}}]),n}(a.Component),y=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).handleDelete=function(e){(0,t.props.onDelete)(e.target.parentNode.id)},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props,e=t.id,n=t.name,a=t.number;return Object(j.jsxs)("li",{className:x.a.contact_item,id:e,children:[" ",n," : ",a,Object(j.jsx)("button",{type:"button",className:x.a.btn_delete,onClick:this.handleDelete,children:"Delete"})]})}}]),n}(a.Component),S=g,k=n(12),N=n.n(k),F=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){t.setState((function(t){var n=t.contacts;return{contacts:[e].concat(Object(i.a)(n))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.filterContact=function(e){t.setState({filter:e})},t.getContactsListToShow=function(){var e=t.state,n=e.contacts,a=e.filter;return""===a?n:n.filter((function(t){return t.name.toUpperCase().includes(a.toUpperCase())}))},t.checkUnique=function(e){if(console.log("check unique"),!t.state.contacts.find((function(t){return t.name.toUpperCase()===e.toUpperCase()})))return!0;alert("".concat(e," is already in contacts!"))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.getContactsListToShow();return Object(j.jsxs)("div",{className:N.a.app,children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(f,{onAdd:this.addContact,onCheckUnique:this.checkUnique}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(v,{filter:this.state.filter,onSearch:this.filterContact,contactsListToShow:t}),Object(j.jsx)(S,{contacts:t,onDelete:this.deleteContact})]})}}]),n}(a.Component);F.defaultProps={contacts:[],filter:""};var w=F;n(19);o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root"))},6:function(t,e,n){t.exports={label_contact:"ContactForm_label_contact__b9DQh",input_contact:"ContactForm_input_contact__1x4Gn",form_contact:"ContactForm_form_contact__1zlva",btn_add:"ContactForm_btn_add__3VKhj"}},8:function(t,e,n){t.exports={form_search:"Filter_form_search__dfDir",label_search:"Filter_label_search__3fhCi",input_search:"Filter_input_search__2Talq"}},9:function(t,e,n){t.exports={contact_list:"ContactList_contact_list__1KFue",contact_item:"ContactList_contact_item__pMDgM",btn_delete:"ContactList_btn_delete__3bKw_"}}},[[20,1,2]]]);
//# sourceMappingURL=main.2ae391d7.chunk.js.map