(this["webpackJsonpfront-app"]=this["webpackJsonpfront-app"]||[]).push([[0],{43:function(e,t,a){},44:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),s=a(33),r=a.n(s),i=(a(43),a(10)),o=a(3),l=a(4),u=a(5),d=a(7),h=a(6),j=(a(44),Object(c.createContext)()),m=a(2),b=a.p+"static/media/logo_principal.c2e71c26.png",p=a.p+"static/media/login.04e89ed3.png",x=function(e){var t,a=e.user,c=e.logout;return Object(n.jsx)("header",{children:Object(n.jsxs)("nav",{className:"uk-navbar-container","uk-navbar":"true",children:[Object(n.jsx)("div",{className:"uk-navbar-left",children:Object(n.jsxs)("ul",{className:"uk-navbar-nav",children:[Object(n.jsx)("li",{className:"uk-active",children:Object(n.jsx)(m.b,{to:"/",children:Object(n.jsx)("img",{src:b,width:"50",height:"50","uk-img":!0})})}),Object(n.jsx)("li",{className:"uk-active",children:Object(n.jsx)(m.b,{to:"/About",children:"Sobre nosotros"})}),Object(n.jsx)("li",{children:"admin"===a.role?Object(n.jsx)(m.b,{to:"/producto/new",children:"Nuevo producto"}):""})]})}),Object(n.jsx)("div",(t={className:"uk-navbar-item"},Object(i.a)(t,"className","uk-navbar-center"),Object(i.a)(t,"children",Object(n.jsxs)("form",{class:"uk-search uk-search-default",children:[Object(n.jsx)("span",{"uk-search-icon":!0}),Object(n.jsx)("input",{class:"uk-search-input",type:"search",placeholder:"Buscar producto"})]})),t)),Object(n.jsx)("div",{className:"uk-navbar-right",children:Object(n.jsx)("ul",{className:"uk-navbar-nav",children:a._id?Object(n.jsxs)("li",{children:[Object(n.jsx)(m.b,{to:"/profile",children:Object(n.jsxs)("div",{className:"uk-grid-small uk-flex-middle","uk-grid":"true",children:[Object(n.jsx)("div",{className:"uk-width-auto",children:Object(n.jsx)("img",{className:"uk-border-circle",width:"40",height:"40",alt:a.name,src:p})}),Object(n.jsx)("div",{className:"uk-width-expand",children:Object(n.jsx)("div",{className:"uk-margin-remove-bottom",children:a.name})})]})}),Object(n.jsx)("div",{className:"uk-navbar-dropdown",children:Object(n.jsx)("ul",{className:"uk-nav uk-navbar-dropdown-nav",children:Object(n.jsx)("li",{onClick:c,children:"Logout"})})})]}):Object(n.jsx)("li",{children:Object(n.jsxs)(m.b,{to:"/login",children:[Object(n.jsx)("span",{"uk-icon":"icon: sign-in"}),"Login"]})})})})]})})},v=a(8),O=a(23),k=a.n(O);k.a.defaults.withCredentials=!0;var g=k.a.create({baseURL:"https://robert-caro-back.herokuapp.com/api",timeout:1e4}),f=function(e){return g.post("/user/login",e)},N=function(e){return g.post("/user/signup",e)},y=function(){return g.post("/user/logout")},C=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={data:{}},e.handleChange=function(t){var a=t.target,n=a.value,c=a.name,s=e.state.data;s[c]=n,e.setState({data:s})},e.onSubmit=function(t){t.preventDefault(),console.log("Voy a enviar datos"),f(e.state.data).then((function(t){e.setState({data:{}}),localStorage.setItem("user",JSON.stringify(t.data.user)),e.context.setUser(t.data.user),e.props.history.push("/")})).catch((function(e){console.log("hay un error",e)}))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.handleChange,t=this.onSubmit,a=this.state.data;return Object(n.jsx)("section",{className:"uk-section",children:Object(n.jsx)("div",{className:"uk-container uk-flex uk-flex-center",children:Object(n.jsxs)("div",{className:"uk-width-1-4",children:[Object(n.jsx)("h3",{children:"Inicia sesi\xf3n"}),Object(n.jsxs)("form",{onSubmit:t,className:"uk-width-1-1 uk-form-stacked uk-flex uk-flex-center uk-flex-column",children:[Object(n.jsx)("div",{className:"uk-margin",children:Object(n.jsxs)("div",{className:"uk-inline",children:[Object(n.jsx)("span",{className:"uk-form-icon","uk-icon":"icon: user"}),Object(n.jsx)("input",{className:"uk-input",type:"email",name:"email",onChange:e,required:!0,value:a.email?a.email:""})]})}),Object(n.jsx)("div",{className:"uk-margin",children:Object(n.jsxs)("div",{className:"uk-inline",children:[Object(n.jsx)("span",{className:"uk-form-icon uk-form-icon-flip","uk-icon":"icon: lock"}),Object(n.jsx)("input",{className:"uk-input",type:"password",required:!0,name:"password",onChange:e,value:a.password?a.password:""})]})}),Object(n.jsxs)("div",{className:"uk-text-meta",children:["\xbfA\xfan no tienes cuenta?"," ",Object(n.jsx)(m.b,{className:"uk-text-primary",to:"/signup",children:"Registrate"})]}),Object(n.jsx)("div",{className:"uk-margin-small",children:Object(n.jsx)("button",{className:"uk-button uk-button-danger",children:"Entrar"})})]})]})})})}}]),a}(c.Component);C.contextType=j;var w=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={data:{}},e.handleChange=function(t){var a=t.target,n=a.value,c=a.name,s=e.state.data;s[c]=n,e.setState({data:s})},e.onSubmit=function(t){t.preventDefault(),console.log("Voy a enviar datos");var a=e.props.history;N(e.state.data).then((function(t){e.setState({data:{}}),console.log("Registro exitoso",t),a.push("/login")})).catch((function(e){console.log("hay un error",e.response)}))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.handleChange,t=this.onSubmit,a=this.state.data;return Object(n.jsx)("section",{className:"uk-section",children:Object(n.jsx)("div",{className:"uk-container uk-flex uk-flex-center",children:Object(n.jsxs)("div",{className:"uk-width-1-4",children:[Object(n.jsx)("h3",{children:"Registrate "}),Object(n.jsxs)("form",{onSubmit:t,className:"uk-card uk-card-default uk-card-body",children:[Object(n.jsx)("div",{className:"uk-margin",children:Object(n.jsxs)("div",{className:"uk-inline",children:[Object(n.jsx)("span",{className:"uk-form-icon","uk-icon":"icon: user"}),Object(n.jsx)("input",{className:"uk-input",type:"text",name:"name",placeholder:"Nombre",onChange:e,required:!0,value:a.name?a.name:""})]})}),Object(n.jsx)("div",{className:"uk-margin",children:Object(n.jsxs)("div",{className:"uk-inline",children:[Object(n.jsx)("span",{className:"uk-form-icon","uk-icon":"icon: user"}),Object(n.jsx)("input",{className:"uk-input",type:"text",name:"lastname",placeholder:"Apellido",onChange:e,required:!0,value:a.lastname?a.lastname:""})]})}),Object(n.jsx)("div",{className:"uk-margin",children:Object(n.jsxs)("div",{className:"uk-inline",children:[Object(n.jsx)("span",{className:"uk-form-icon","uk-icon":"icon: receiver"}),Object(n.jsx)("input",{className:"uk-input",type:"number",name:"phone",placeholder:"Celular",onChange:e,required:!0,value:a.phone?a.phone:""})]})}),Object(n.jsx)("div",{className:"uk-margin",children:Object(n.jsxs)("div",{className:"uk-inline",children:[Object(n.jsx)("span",{className:"uk-form-icon","uk-icon":"icon: mail"}),Object(n.jsx)("input",{className:"uk-input",type:"email",name:"email",placeholder:"e-mail",onChange:e,required:!0,value:a.email?a.email:""})]})}),Object(n.jsx)("div",{className:"uk-margin",children:Object(n.jsxs)("div",{className:"uk-inline",children:[Object(n.jsx)("span",{className:"uk-form-icon","uk-icon":"icon: unlock"}),Object(n.jsx)("input",{className:"uk-input",type:"password",required:!0,name:"password",placeholder:"Contrase\xf1a",onChange:e,value:a.password?a.password:""})]})}),Object(n.jsx)("div",{className:"uk-margin",children:Object(n.jsxs)("div",{className:"uk-inline",children:[Object(n.jsx)("span",{className:"uk-form-icon","uk-icon":"icon: lock"}),Object(n.jsx)("input",{className:"uk-input",type:"password",name:"confirmPassword",placeholder:"Confirmar contrase\xf1a",onChange:e,required:!0,value:a.confirmPassword?a.confirmPassword:""})]})}),Object(n.jsxs)("div",{className:"uk-text-meta",children:["\xbfYa tienes cuenta?"," ",Object(n.jsx)(m.b,{className:"uk-text-primary",to:"/login",children:"Ingresa"})]}),Object(n.jsx)("button",{type:"submit",className:"uk-button uk-button-primary",children:"Registrate"})]})]})})})}}]),a}(c.Component),S=a.p+"static/media/hogar.4b512276.jpg",P=a.p+"static/media/mascotas.d8c6892b.jpg",_=a.p+"static/media/deporte.9fd24f8d.jpg",A=function(){return Object(n.jsxs)("div",{class:"uk-position-relative uk-visible-toggle uk-light",tabindex:"-1","uk-slider":"center: true",children:[Object(n.jsxs)("ul",{class:"uk-slider-items uk-grid",children:[Object(n.jsx)("li",{class:"uk-width-3-4",children:Object(n.jsx)("div",{class:"uk-panel",children:Object(n.jsxs)(m.b,{to:"/allproducts",children:[Object(n.jsx)("img",{src:P,alt:""}),Object(n.jsx)("div",{class:"uk-position-center uk-panel",children:Object(n.jsx)("h1",{children:"Mascotas"})})]})})}),Object(n.jsx)("li",{class:"uk-width-3-4",children:Object(n.jsx)("div",{class:"uk-panel",children:Object(n.jsxs)(m.b,{to:"/allproducts",children:[Object(n.jsx)("img",{src:S,alt:""}),Object(n.jsx)("div",{class:"uk-position-center uk-panel",children:Object(n.jsx)("h1",{children:"Hogar"})})]})})}),Object(n.jsx)("li",{class:"uk-width-3-4",children:Object(n.jsx)("div",{class:"uk-panel",children:Object(n.jsxs)(m.b,{to:"/allproducts",children:[Object(n.jsx)("img",{src:_,alt:""}),Object(n.jsx)("div",{class:"uk-position-center uk-panel",children:Object(n.jsx)("h1",{children:"Deporte"})})]})})})]}),Object(n.jsx)("a",{class:"uk-position-center-left uk-position-small uk-hidden-hover",href:"#","uk-slidenav-previous":"true","uk-slider-item":"previous"}),Object(n.jsx)("a",{class:"uk-position-center-right uk-position-small uk-hidden-hover",href:"#","uk-slidenav-next":"true","uk-slider-item":"next"})]})},I=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(n.jsx)("section",{children:Object(n.jsx)("div",{children:Object(n.jsx)(A,{})})})}}]),a}(c.Component),T=a(37),D=function(e){var t=e.name,a=e.type,c=e.handleChange,s=e.placeholder,r=e.value,i=void 0===r?"":r,l=Object(T.a)(e,["name","type","handleChange","placeholder","value"]);return Object(n.jsxs)("div",{className:"uk-margin",children:[Object(n.jsxs)("label",{className:"uk-form-label uk-text-capitalize",htmlFor:t,children:[t,":"]}),Object(n.jsx)("div",{className:"uk-form-controls",children:Object(n.jsx)("input",Object(o.a)({onChange:c,name:t,className:"uk-input",id:t,type:a,value:i,placeholder:s},l))})]})},E=function(e){var t=e.images;return Object(n.jsxs)("div",{className:"uk-position-relative uk-visible-toggle uk-light","uk-slideshow":"animation: fade;ratio: 2:2;max-height: 500",children:[Object(n.jsx)("ul",{className:"uk-slideshow-items",children:void 0!=t?t.map((function(e,t){return Object(n.jsx)("li",{children:Object(n.jsx)("img",{src:e,alt:"","uk-cover":"true"})},t)})):null}),Object(n.jsx)("a",{className:"uk-position-center-left uk-position-small uk-hidden-hover",href:"#","uk-slidenav-previous":"true","uk-slideshow-item":"previous"}),Object(n.jsx)("a",{className:"uk-position-center-right uk-position-small uk-hidden-hover",href:"#","uk-slidenav-next":"true","uk-slideshow-item":"next"}),Object(n.jsx)("div",{className:"uk-position-bottom-center uk-position-small",children:Object(n.jsx)("ul",{className:"uk-dotnav",children:void 0!=t?t.map((function(e,t){return Object(n.jsx)("li",{"uk-slideshow-item":t,children:Object(n.jsx)("a",{href:"#",children:"Item 1"})},t)})):null})})]})},U=a(15),q=a.n(U),M=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"check",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"top-right";q.a.notification({message:"<span uk-icon='icon: ".concat(a,"'></span> ").concat(e),status:t,pos:n})},R=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).handleAdd=function(t){t.preventDefault();var a=e.props,n=a._id,c=(a.images,a.title,a.description,a.price,a._owner),s=(a.userId,null===c||void 0===c||c._id,e.context.state.cart),r=e.context.handleSaveProduct;!function(e){return!!s.find((function(t){return t._id===e}))}?M("El producto ya est\xe0 en el carrito","error"):r(n).then((function(){M("El producto se agreg\xf3 al carrito","success")})).catch((function(e){M("Sucedi\xf3 un error, el producto no se pudo agregar al carrito","error"),console.log(e.response)}))},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props,t=e._id,a=e.images,c=e.title,s=e.description,r=e.price,i=e._owner,o=e.userId,l=e.index,u=e.onDelete,d=void 0===u?function(){}:u,h=o===(null===i||void 0===i?void 0:i._id);return console.log(h),Object(n.jsx)("div",{className:"uk-margin-small-bottom",children:Object(n.jsxs)("div",{className:"uk-card uk-card-default",children:[Object(n.jsx)("div",{className:"uk-card-header uk-padding-small",children:Object(n.jsxs)("div",{className:"uk-grid-small uk-flex-middle","uk-grid":"true",children:[Object(n.jsx)("div",{className:"uk-width-auto",children:Object(n.jsx)("img",{className:"uk-border-circle",width:"40",height:"40",alt:null===i||void 0===i?void 0:i.name,src:null===i||void 0===i?void 0:i.profile_picture})}),Object(n.jsxs)("div",{className:"uk-width-expand",children:[Object(n.jsx)("h3",{className:"uk-card-title uk-margin-remove-bottom",children:null===i||void 0===i?void 0:i.name}),Object(n.jsx)("p",{className:"uk-text-meta uk-margin-remove-top",children:"Vendedor"})]}),Object(n.jsx)("div",{children:h?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(m.b,{to:"/product/".concat(t),className:"uk-button uk-button-text",children:"Editar"}),Object(n.jsx)("span",{className:"uk-button uk-button-text",onClick:function(){return d(t,l)},children:"Eliminar"})]}):null})]})}),Object(n.jsx)("div",{className:"uk-card-media-top",children:Object(n.jsx)(E,{images:a})}),Object(n.jsxs)("div",{className:"uk-card-body uk-padding-small",children:[Object(n.jsx)("h3",{className:"uk-card-title uk-text-center",children:Object(n.jsx)(m.b,{to:"/product/".concat(t),className:"uk-button uk-button-text uk-text-lead",children:c})}),Object(n.jsxs)("div",{children:["Precio: ",r]}),Object(n.jsx)("p",{className:"uk-text-break",children:s}),Object(n.jsx)("div",{className:"uk-text-center",children:h?null:Object(n.jsxs)(m.b,{to:"/cart",className:"uk-button uk-button-primary",children:[Object(n.jsx)("span",{children:Object(n.jsx)("span",{onClick:this.handleAdd,className:"btn btn-outline-primary btn-sm"})}),"Agregar"]})})]})]})})}}]),a}(c.Component);R.contextType=j;var F=R,L=a(18),z=a.n(L),B=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).handleAdd=function(t){t.preventDefault();var a=e.props._id,n=e.context.state.cart,c=e.context.handleSaveProduct;!function(e){return!!n.find((function(t){return t._id===e}))}?M("El producto ya est\xe0 en el carrito","error"):c(a).then((function(){M("El producto se agreg\xf3 al carrito","success")})).catch((function(e){M("Sucedi\xf3 un error, el producto no se pudo agregar al carrito","error"),console.log(e.response)}))},e}return Object(u.a)(a,[{key:"render",value:function(){return console.log(this.cart),Object(n.jsx)("div",{children:Object(n.jsx)("span",{onClick:this.handleAdd})})}}]),a}(c.Component);B.contextType=j;var J=function(e){var t=e.name,a=e.handleChange,c=e.hint,s=e.value;return Object(n.jsxs)("div",{className:"uk-margin",children:[Object(n.jsxs)("label",{className:"uk-form-label uk-text-capitalize",htmlFor:t,children:[t," ",c&&"(".concat(c,")"),":"]}),Object(n.jsx)("div",{className:"uk-form-controls",children:Object(n.jsx)("textarea",{onChange:a,className:"uk-textarea",name:t,id:t,cols:"30",rows:"5",value:s})})]})},V=function(e){var t=e._id,a=e.store_name,c=e.store_picture,s=void 0===c?[]:c,r=e.description,i=e._owner;e.userId,null===i||void 0===i||i._id;return console.log(i),Object(n.jsx)("div",{className:"uk-margin-small-bottom",children:Object(n.jsxs)("div",{className:"uk-card uk-card-default",children:[Object(n.jsx)("div",{className:"uk-card-header uk-padding-small",children:Object(n.jsxs)("div",{className:"uk-grid-small uk-flex-middle","uk-grid":"true",children:[Object(n.jsx)("div",{className:"uk-width-auto",children:Object(n.jsx)("img",{className:"uk-border-circle",width:"40",height:"40",alt:null===i||void 0===i?void 0:i.name,src:null===i||void 0===i?void 0:i.profile_picture})}),Object(n.jsxs)("div",{className:"uk-width-expand",children:[Object(n.jsx)("h3",{className:"uk-card-title uk-margin-remove-bottom",children:null===i||void 0===i?void 0:i.name}),Object(n.jsx)("p",{className:"uk-text-meta uk-margin-remove-top",children:"Tienda"})]}),Object(n.jsx)("div",{children:Object(n.jsx)(m.b,{to:"/store/".concat(t),className:"uk-button uk-button-text",children:"Editar"})})]})}),Object(n.jsx)("div",{className:"uk-card-media-top",children:Object(n.jsx)(E,{images:s})}),Object(n.jsxs)("div",{className:"uk-card-body uk-padding-small",children:[Object(n.jsx)("h3",{className:"uk-card-title uk-text-center",children:Object(n.jsx)(m.b,{to:"/store/".concat(t),className:"uk-button uk-button-text uk-text-lead",children:a})}),Object(n.jsx)("div",{children:" "}),Object(n.jsx)("p",{className:"uk-text-break",children:r})]})]})})},H=function(e){return g.post("/product",e.product)},W=function(e){return g.patch("/product/".concat(e.id),e.product)},Y=function(e){return g.delete("/product/".concat(e))},G=function(e){var t,a=e.handleSubmit,c=e.handleChange,s=e.handleImagesChange,r=e.product,i=r.description&&r.description.length||0;return Object(n.jsxs)("div",{children:[console.log(r._id),Object(n.jsxs)("form",{className:"uk-width-1-1",onSubmit:a,children:[Object(n.jsx)(D,{name:"title",type:"text",value:r.title,placeholder:"Nombre de producto",handleChange:c}),Object(n.jsx)(D,{name:"price",type:"number",value:r.price,placeholder:"Precio",handleChange:c}),Object(n.jsx)(J,{name:"description",type:"text",value:r.description,hint:"".concat(i,"/50"),handleChange:c}),Object(n.jsx)(J,{name:"images",value:null===(t=r.images)||void 0===t?void 0:t.join(","),handleChange:s,hint:"Separar im\xe1genes por comas"}),Object(n.jsx)(D,{name:"inventory",type:"number",value:r.inventory,placeholder:"Inventario",handleChange:c}),void 0!==r._id?Object(n.jsx)("button",{onClick:a,type:"submit",className:"uk-button uk-button-primary",children:"Confirmar Cambios"}):Object(n.jsx)("button",{onClick:a,type:"submit",className:"uk-button uk-button-primary",children:"Crear producto"})]})]})},K=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={product:{}},e.handleChange=function(t){var a=e.state.product;a=Object(o.a)(Object(o.a)({},a),{},Object(i.a)({},t.target.name,t.target.value)),e.setState({product:a})},e.handleImageChange=function(t){var a=e.state.product;a=Object(o.a)(Object(o.a)({},a),{},Object(i.a)({},t.target.name,t.target.value.split(","))),e.setState({product:a})},e.handleSubmit=function(t){t.preventDefault();var a=e.state.product,n=e.context.addProduct,c=e.props.history,s=e.props.match.params.id;(s?W:H)(s?{product:a,id:s}:{product:a}).then((function(e){var t=e.data.result;n(t),c.push("/")})).catch((function(e){M("No tienes permisos para editar este producto","error"),console.log("error",e.response)}))},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.context.state,a=this.props.history;if(!Object.keys(t.user).length)return a.push("/login"),!1;var n=this.props.match.params.id;n&&function(e){return g.get("/product/id/".concat(e))}(n).then((function(t){console.log(n);var a=t.data.result;e.setState({product:a})})),console.log(this.state.product)}},{key:"render",value:function(){var e=this.state,t=e.product;e.user;return console.log(t),Object(n.jsx)("section",{className:"uk-section",children:Object(n.jsxs)("div",{className:"uk-container",children:[void 0!==t._id?Object(n.jsx)("h3",{children:"Editar producto"}):Object(n.jsx)("h3",{children:"Crear producto"}),Object(n.jsxs)("div",{className:"uk-grid uk-child-width-1-2",children:[Object(n.jsx)(G,{product:t,handleChange:this.handleChange,handleSubmit:this.handleSubmit,handleImagesChange:this.handleImageChange}),Object(n.jsx)("div",{children:Object(n.jsx)(F,Object(o.a)({},t))})]})]})})}}]),a}(c.Component);K.contextType=j;var Q=function(e){return g.delete("/cart/".concat(e))},X=function(e){return e.reduce((function(e,t){return Object(o.a)(Object(o.a)({},e),{},Object(i.a)({},t._id,t))}),{})},Z=function(e){return Object.values(e)},$=function(e,t){return delete e[t],e},ee=a(35),te=a.n(ee);z.a.extend(te.a);var ae=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).removeProduct=function(t){var a=e.context.state,n=a.products,c=a.userProducts,s=e.context,r=s.setProducts,i=s.setUserProducts;Y(t).then((function(e){var t=e.data.result,a=$(n,t._id),s=$(c,t._id);r(a),i(s),q.a.modal("#remove-".concat(t._id)).hide()}))},e.removeCart=function(t){var a=e.context.state.userCart,n=e.context.setUserCart;Q(t).then((function(e){var t=e.data.result,c=$(a,t._id);n(c),q.a.modal("#remove-".concat(t._id)).hide()}))},e}return Object(u.a)(a,[{key:"componentWillMount",value:function(){var e=this.context.state,t=e.user._id,a=(e.userProducts,this.props.history);if(null===t||void 0===t)return a.push("/login"),!1}},{key:"render",value:function(){var e=this.context.state,t=e.user,a=(e.userProducts,e.userCart);return console.log("user",a),Object(n.jsxs)("div",{className:"uk-card uk-card-default uk-width-1-4@m uk-align-center",children:[Object(n.jsx)("div",{className:"uk-card-header",children:Object(n.jsxs)("div",{className:"uk-grid-small uk-flex-middle","uk-grid":!0,children:[Object(n.jsx)("div",{className:"uk-width-auto",children:Object(n.jsx)("img",{src:p,className:"uk-border-circle",width:"40",height:"40"})}),Object(n.jsxs)("div",{className:"uk-width-expand",children:[Object(n.jsx)("h3",{className:"uk-card-title uk-margin-remove-bottom",children:" Mi perfil "}),Object(n.jsxs)("p",{className:"uk-text-meta uk-margin-remove-top",children:[t.name," ",t.lastname," "]})]})]})}),Object(n.jsx)("div",{className:"uk-card-body",children:Object(n.jsxs)("p",{children:["Miembro desde el"," ",z()(t.createdAt).locale("es").format("LL"),Object(n.jsx)("br",{}),t.phone,Object(n.jsx)("br",{}),t.email]})}),Object(n.jsx)("div",{className:"uk-card-footer",children:Object(n.jsx)(m.b,{className:"uk-button uk-button-text",to:"/store/new",children:"Crear tienda"})})]})}}]),a}(c.Component);ae.contextType=j;var ne=ae,ce=function(e){return g.post("/store",e.store)},se=function(e){return g.patch("/store/".concat(e.id),e.store)},re=function(e){var t=e.handleSubmit,a=e.handleChange,c=e.store;return Object(n.jsx)("div",{children:Object(n.jsxs)("form",{className:"uk-width-1-1",onSubmit:t,children:[Object(n.jsx)(D,{name:"store_name",type:"text",value:c.store_name,placeholder:"Nombre de la Tienda",onChange:a}),Object(n.jsx)(J,{name:"store_picture",value:c.store_picture,onChange:a,hint:"solo una imagen para la tienda"}),Object(n.jsx)(D,{name:"street",type:"text",value:c.street,placeholder:"calle",onChange:a}),Object(n.jsx)(D,{name:"ext_number",type:"text",value:c.ext_number,placeholder:"n\xfamero exterior",onChange:a}),Object(n.jsx)(D,{name:"int_number",type:"text",value:c.int_number,placeholder:"n\xfamero interior",onChange:a}),Object(n.jsx)(D,{name:"neighborhood",type:"text",value:c.neighborhood,placeholder:"colonia o asentamiento",onChange:a}),Object(n.jsx)(D,{name:"municipality",type:"text",value:c.municipality,placeholder:"municipio",onChange:a}),Object(n.jsx)(D,{name:"state",type:"text",value:c.state,placeholder:"estado",onChange:a}),Object(n.jsx)(D,{name:"country",type:"text",value:c.country,placeholder:"pa\xeds",onChange:a}),Object(n.jsx)(D,{name:"zipcode",type:"text",value:c.zipcode,placeholder:"c\xf3digo postal",onChange:a}),Object(n.jsx)(D,{name:"clabe",type:"number",value:c.clabe,placeholder:"cuenta clabe",onChange:a}),Object(n.jsx)(D,{name:"bank",type:"text",value:c.bank,placeholder:"banco",onChange:a}),Object(n.jsx)(D,{name:"account_holder_name",type:"text",value:c.account_holder_name,placeholder:"Nombre del titular de la cuenta",onChange:a}),Object(n.jsx)(D,{name:"phone",type:"number",value:c.phone,placeholder:"Tel\xe9fono",onChange:a}),Object(n.jsx)(D,{name:"mobile",type:"number",value:c.mobile,placeholder:"celular",onChange:a}),Object(n.jsx)(D,{name:"email",type:"email",value:c.email,placeholder:"correo electr\xf3nico",onChange:a}),Object(n.jsx)("button",{type:"submit",className:"uk-button uk-button-primary",children:"Crear Tienda"})]})})},ie=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={store:{},user:{}},e.handleChange=function(t){var a=e.state.store;a=Object(o.a)(Object(o.a)({},a),{},Object(i.a)({},t.target.name,t.target.value)),e.setState({store:a})},e.handleSubmit=function(t){t.preventDefault();var a=e.state.store,n=e.props.history,c=e.props.match.params.id,s=c?{store:a,id:c}:{store:a};(c?se:ce)(s).then((function(e){e.data.result;n.push("/")})).catch((function(e){console.log(e),console.log(s)}))},e}return Object(u.a)(a,[{key:"componentWillMount",value:function(){var e=this,t=this.context.state,a=this.props.history;if(!Object.keys(t.user).length)return a.push("/login"),!1;var n=this.props.match.params.id;n&&function(e){return g.get("/store/".concat(e))}(n).then((function(t){var a=t.data.result;e.setState({store:a})}))}},{key:"render",value:function(){var e=this.state.store;return Object(n.jsx)("section",{className:"uk-section",children:Object(n.jsxs)("div",{className:"uk-container",children:[Object(n.jsx)("h3",{children:"Crear Tienda"}),Object(n.jsxs)("div",{className:"uk-grid uk-child-width-1-2",children:[Object(n.jsx)(re,{store:e,handleChange:this.handleChange,handleSubmit:this.handleSubmit,handleImagesChange:this.handleImageChange}),Object(n.jsx)("div",{children:Object(n.jsx)(V,Object(o.a)(Object(o.a)({},e),{},{isDemo:!0}))})]})]})})}}]),a}(c.Component);ie.contextType=j;var oe=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).onDeleteProduct=function(t,a){var n=e.context.state.products;Y(t).then((function(a){console.log("done"),delete n[t],e.setState({products:n})})).catch((function(e){console.log("error")}))},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e,t=this.context.state,a=t.products,n=t.user,c=this.context.setProducts,s=this.props.history;Z(a).length<1&&(e="".concat(n._id),g.get("/product?_owner=".concat(e))).then((function(e){var t=e.data.result,a=X(t);console.log(s),c(a)}))}},{key:"render",value:function(){var e=this,t=this.context.state,a=t.products,c=t.user;return Object(n.jsxs)("div",{className:"uk-section",children:[Object(n.jsx)("div",{className:"uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top",style:{backgroundImage:"url('https://www.construyehogar.com/wp-content/uploads/2016/10/Hermosa-casa-de-%C3%A1rbol.jpg')"},children:Object(n.jsxs)("div",{className:"uk-width-1-2@m uk-text-center uk-margin-auto uk-margin-auto-vertical",children:[Object(n.jsx)("h1",{"uk-parallax":"opacity: 0,1; y: -100,0; scale: 2,1; viewport: 0.5;",children:"IronrbnB"}),Object(n.jsx)("p",{"uk-parallax":"opacity: 0,1; y: 100,0; scale: 0.5,1; viewport: 0.5;",children:"App demo para frontent modulo 2"})]})}),Object(n.jsx)("div",{className:"uk-container",children:Object(n.jsx)("div",{className:"uk-grid uk-grid-small uk-grid-match uk-child-width-1-3@l  uk-child-width-1-3@m uk-child-width-1-1@s",children:Z(a).map((function(t,a){return Object(n.jsx)(F,Object(o.a)(Object(o.a)({},t),{},{index:a,userId:c._id,onDelete:e.onDeleteProduct}),a)}))})})]})}}]),a}(c.Component);oe.contextType=j;var le=oe,ue=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this.context.state.products,t=this.context.setProducts;Z(e).length<1&&g.get("/product/allproducts").then((function(e){var a=e.data.result,n=X(a);t(n),console.log(e)}))}},{key:"render",value:function(){var e=this.context.state.products;return console.log(e),Object(n.jsx)("div",{className:"uk-section",children:Object(n.jsx)("div",{className:"uk-container",children:Object(n.jsx)("div",{className:"uk-grid uk-grid-small uk-grid-match uk-child-width-1-3@l  uk-child-width-1-3@m uk-child-width-1-1@s",children:Z(e).map((function(e,t){return Object(n.jsx)(F,Object(o.a)(Object(o.a)({},e),{},{index:t}),t)}))})})})}}]),a}(c.Component);ue.contextType=j;var de=ue,he=function(){return Object(n.jsxs)(v.c,{children:[Object(n.jsx)(v.a,{exact:!0,path:"/",component:I}),Object(n.jsx)(v.a,{exact:!0,path:"/login",component:C}),Object(n.jsx)(v.a,{exact:!0,path:"/signup",component:w}),Object(n.jsx)(v.a,{exact:!0,path:"/product/new",component:K}),Object(n.jsx)(v.a,{exact:!0,path:"/product/:id",component:K}),Object(n.jsx)(v.a,{exact:!0,path:"/profile",component:ne}),Object(n.jsx)(v.a,{exact:!0,path:"/store/new",component:ie}),Object(n.jsx)(v.a,{exact:!0,path:"/store/profile",component:le}),Object(n.jsx)(v.a,{exact:!0,path:"/product/delete",component:K}),Object(n.jsx)(v.a,{exact:!0,path:"/allproducts",component:de})]})},je=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={user:JSON.parse(localStorage.getItem("user"))||{},products:{},userproducts:{},cart:[],sum:0,total:0},e.logout=function(){var t=e.props.history;y().then((function(){localStorage.removeItem("user"),e.setState({user:{}}),t.push("/login")}))},e.setUser=function(t){e.setState({user:t})},e.setProducts=function(t){e.setState({products:t})},e.setUserProducts=function(t){e.setState({userProducts:t})},e.setUserCart=function(t){e.setState({userCart:t})},e.addProduct=function(t){e.state.products;Object(o.a)(Object(i.a)({},t._id,t),t)},e}return Object(u.a)(a,[{key:"handlerClearCart",value:function(){this.setState({cart:[],sum:0,total:0})}},{key:"sumProducts",value:function(e){var t=0;e.forEach((function(e){return t+=e.order})),this.setState({total:t})}},{key:"sumTotal",value:function(e){var t=0;e.forEach((function(e){return t+=e.total})),this.setState({sum:t})}},{key:"handlerAddProduct",value:function(e,t){var a=Object.assign({},this.state);0!==a.products[t].status?(a.cart[e].total+=a.cart[e].price,a.cart[e].order+=1,a.products[t].status-=1,this.setState(a),this.sumProducts(a.cart),this.sumTotal(a.cart)):alert("Producto inexistente")}},{key:"handlerRemoveProduct",value:function(e){var t=this.state.products.find((function(t){return t.id===e})),a=this.state.products.findIndex((function(e){return e.id===t.id})),n=this.state.cart.find((function(t){return t.id===e})),c=this.state.cart.findIndex((function(e){return e.id===n.id})),s=Object.assign({},this.state);s.cart[c].total===s.cart[c].price?(-1!==c&&s.cart.splice(c,1),this.setState(s),alert("El producto fue eliminado del carrito de compras")):(s.cart[c].total-=s.cart[c].price,s.products[a].status+=1,s.cart[c].order-=1,s.total-=1,s.sum-=s.cart[c].price,this.setState(s))}},{key:"handleSaveProduct",value:function(e){var t=this.state.products.find((function(t){return t.id===e})),a=this.state.products.findIndex((function(e){return e.id===t.id})),n={_id:t._id,name:t.name,img:t.picture,price:t.price,order:1,total:t.price},c=this.state.cart.find((function(t){return t.id===e}));if(void 0!==c&&null!==c){var s=this.state.cart.findIndex((function(e){return e.id===c.id}));this.handlerAddProduct(s,a)}else{var r=Object.assign({},this.state);r.products[a].status-=1,this.sumProducts(r.cart),this.sumTotal(r.cart),this.setState({cart:this.state.cart.concat([n]),statusCopy:r})}}},{key:"handlerOpenOrder",value:function(e){e.preventDefault(),this.setState({openOrder:!0})}},{key:"render",value:function(){var e=this.state,t=this.logout,a=this.setUser,c=this.setProducts,s=this.setUserProducts,r=this.setUserCart,i=this.addProduct,o=this.handlerClearCart,l=this.sumProducts,u=this.sumTotal,d=this.handlerAddProduct,h=this.handlerRemoveProduct,m=this.handleSaveProduct;return Object(n.jsx)(j.Provider,{value:{state:e,logout:t,setUser:a,setProducts:c,setUserProducts:s,setUserCart:r,addProduct:i,handlerClearCart:o,sumProducts:l,sumTotal:u,handlerAddProduct:d,handlerRemoveProduct:h,handleSaveProduct:m},children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(x,{user:this.state.user,logout:t}),Object(n.jsx)(he,{})]})})}}]),a}(c.Component),me=Object(v.f)(je),be=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,71)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))},pe=a(36),xe=a.n(pe);a(68),a(69);q.a.use(xe.a);var ve=function(){return Object(n.jsx)(m.a,{children:Object(n.jsx)(me,{})})};r.a.render(Object(n.jsx)(ve,{}),document.getElementById("root")),be()}},[[70,1,2]]]);
//# sourceMappingURL=main.efa81951.chunk.js.map