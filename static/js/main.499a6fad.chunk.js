(this.webpackJsonpannmlfarm=this.webpackJsonpannmlfarm||[]).push([[0],{261:function(e,t,a){e.exports=a.p+"static/media/farm.982daf69.png"},262:function(e,t,a){e.exports=a.p+"static/media/conversation.fe271cf6.png"},267:function(e,t,a){e.exports=a.p+"static/media/Logo.e962ae3a.png"},286:function(e,t,a){e.exports=a(495)},495:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),c=a.n(l),i=a(12),o=a(16),m=a(19),s=a(34),u=a(35),d=a(39),p=a(37),h=a(21),E=a.n(h);a(49),a(46);E.a.initializeApp({apiKey:"AIzaSyA8CE6cmO3e84VpfChKyM44KDe28bn5OMk",authDomain:"parangelmata.firebaseapp.com",databaseURL:"https://parangelmata.firebaseio.com",projectId:"parangelmata",storageBucket:"parangelmata.appspot.com",messagingSenderId:"824823048409",appId:"1:824823048409:web:b667f9d23208d7003576c8",measurementId:"G-9JB6YF1SYF"});var f=E.a,g=a(523),b={backgroundColor:"#7FB986",color:"white"},v=function(e){return r.a.createElement(g.a,{variant:"contained",color:"secondary",onClick:e.onClick,style:b},e.children)},y=(E.a.auth(),E.a.firestore(),function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.signInWithGoogle=function(){var t=new E.a.auth.GoogleAuthProvider;e.props.auth.signInWithPopup(t).then((function(){}))},e.handleChange=function(t){e.setState(Object(m.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),console.log(e.state),e.signInWithGoogle()},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(v,{onClick:this.signInWithGoogle},"Sign In"))}}]),a}(n.Component)),C=a(89),j=a(57),O=(a(248),E.a.auth(),E.a.firestore(),n.Component,a(11)),N=a(268),x=a(260),w=a.n(x),F=a(525),S=a(36),k=a(532),R=a(537),I=a(533),A=a(126),D=a(536),L=a(261),M=a.n(L),U=function(e){var t=e.style,a=e.homeURL,n=void 0===a?"/farms":a,l=e.className;return r.a.createElement(o.c,{to:n},r.a.createElement("img",{className:l,src:M.a,style:t}))},z=a(262),B=a.n(z),T=function(e){var t=e.style,a=e.homeURL,n=void 0===a?"/community":a,l=e.className;return r.a.createElement(o.c,{to:n},r.a.createElement("img",{className:l,src:B.a,style:t}))},q=a(45),G=a(3),J=a(539),W=a(529),_=a(530),P=a(540),K=a(527),Y=a(528),$=a(264),V=a.n($),H=a(122),Q=a.n(H),X=a(265),Z=a.n(X),ee=a(538),te=a(526),ae=a(497),ne=a(263),re=a.n(ne),le={width:1280,height:720,facingMode:{exact:"environment"}};var ce=Object(O.f)((function(e){var t=this,a=Object(n.useState)(null),l=Object(i.a)(a,2),c=l[0],o=l[1],m=Object(n.useState)(""),s=Object(i.a)(m,2),u=s[0],d=s[1],p=Object(n.useState)(!1),h=Object(i.a)(p,2),E=h[0],f=h[1],g=Object(n.useState)(null),b=Object(i.a)(g,2),v=b[0],y=b[1],C=function(e){e.persist(),d(e.target.value)};return r.a.createElement("div",null,r.a.createElement(re.a,{audio:!1,width:350,height:350,ref:function(e){e&&y(e)},screenshotFormat:"image/jpeg",videoConstraints:le}),r.a.createElement("div",{className:"button-container"},r.a.createElement("button",{onClick:function(){var e=v.getScreenshot();o(e)}},"Save Image")),c?r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("img",{src:c,alt:u})),r.a.createElement("span",null,r.a.createElement("button",{onClick:function(e){e.persist();var t=v.getScreenshot();o(t)}},"Retake")),r.a.createElement("span",null,r.a.createElement("button",{onClick:function(e){e.persist(),f(!E)}},"Save")),E?r.a.createElement("div",null,r.a.createElement("form",{onSubmit:t.handleSaveSubmit},r.a.createElement("p",null,r.a.createElement("label",null,"Image Name:"),r.a.createElement("input",{type:"text",name:"image_name",value:u,onChange:C}),r.a.createElement("input",{type:"submit",value:"Save"})))):null):null)})),ie=Object(F.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),oe=function(e){var t=ie(),a=r.a.useState(!1),n=Object(i.a)(a,2),l=n[0],c=n[1];return r.a.createElement("div",null,r.a.createElement(P.a,{button:!0,key:"Details",onClick:function(){c(!0)}},r.a.createElement(K.a,null,r.a.createElement(Q.a,null)),r.a.createElement(Y.a,{primary:"Capture Details"})),r.a.createElement(ee.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:t.modal,open:l,onClose:function(){c(!1)},BackdropComponent:te.a,BackdropProps:{timeout:500}},r.a.createElement(ae.a,{in:l},r.a.createElement(ce,null))))},me=Object(F.a)({list:{width:"auto"},fullList:{width:"auto"}});function se(){var e=me(),t=r.a.useState({top:!1,left:!1,bottom:!1,right:!1}),a=Object(i.a)(t,2),n=a[0],l=a[1],c=r.a.useState(!1),s=Object(i.a)(c,2),u=(s[0],s[1],function(e,t){return function(a){(!a||"keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&l(Object(q.a)(Object(q.a)({},n),{},Object(m.a)({},e,t)))}});return r.a.createElement("div",null,["bottom"].map((function(t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(g.a,{onClick:u(t,!0)},t),r.a.createElement(J.a,{anchor:t,open:n[t],onClose:u(t,!1),onOpen:u(t,!0)},function(t){return r.a.createElement("div",{className:Object(G.a)(e.list,Object(m.a)({},e.fullList,"top"===t||"bottom"===t)),role:"presentation"},r.a.createElement(W.a,null,r.a.createElement(o.b,{to:"/capture"},r.a.createElement(P.a,{button:!0,onClick:function(){console.log("click")},key:"capture"},r.a.createElement(K.a,null,r.a.createElement(Q.a,null)),r.a.createElement(Y.a,{primary:"Capture Details"}))),r.a.createElement(oe,null)),r.a.createElement(_.a,null),r.a.createElement(W.a,null,r.a.createElement(P.a,{button:!0,key:"inbox"},r.a.createElement(K.a,null,r.a.createElement(V.a,null)),r.a.createElement(Y.a,{primary:"Inbox"})),r.a.createElement(P.a,{button:!0,key:"settings"},r.a.createElement(K.a,null,r.a.createElement(Z.a,null)),r.a.createElement(Y.a,{primary:"Settings"}))))}(t)))})))}var ue=Object(F.a)((function(e){return{root:{background:"linear-gradient(180deg, #3C4142 0%, #5F6769 100%)",justifyContent:"center"},icon:{width:150,height:150},paper:{width:"100%",color:"white",background:"#3C4142"}}})),de=function(e){var t=ue();return r.a.createElement("div",{className:t.root})},pe=a(270),he=a(531),Ee=Object(F.a)((function(e){return{root:{background:"linear-gradient(180deg, #3C4142 0%, #5F6769 100%)",justifyContent:"center"},icon:{width:150,height:150},paper:{width:"100%",color:"white",background:"#3C4142"}}})),fe=function(e){var t=Ee();return r.a.createElement("div",{className:t.root},r.a.createElement(he.a,{container:!0,spacing:1},r.a.createElement(he.a,{item:!0,xs:12}),r.a.createElement(he.a,{item:!0,xs:6},r.a.createElement(pe.a,{className:t.paper},"xs=6")),r.a.createElement(he.a,{item:!0,xs:6},r.a.createElement(pe.a,{className:t.paper},"xs=6")),r.a.createElement(he.a,{item:!0,xs:3},r.a.createElement(pe.a,{className:t.paper},"xs=3")),r.a.createElement(he.a,{item:!0,xs:3},r.a.createElement(pe.a,{className:t.paper},"xs=3")),r.a.createElement(he.a,{item:!0,xs:3},r.a.createElement(pe.a,{className:t.paper},"xs=3")),r.a.createElement(he.a,{item:!0,xs:3},r.a.createElement(pe.a,{className:t.paper},"xs=3"))))};function ge(e){var t=e.children,a=e.value,n=e.index,l=Object(N.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},l),a===n&&r.a.createElement(D.a,{p:3},e.image?r.a.createElement(e.image,null):null,r.a.createElement(A.a,null,t)))}function be(e){return{id:"full-width-tab-".concat(e),"aria-controls":"full-width-tabpanel-".concat(e)}}var ve=Object(F.a)((function(e){return{root:{background:"linear-gradient(180deg, #3C4142 0%, #5F6769 100%)",justifyContent:"center"},icon:{width:100,height:100},paper:{width:"100%",color:"white",background:"#3C4142"}}}));function ye(e){var t=ve(),a=Object(S.a)(),n=r.a.useState(0),l=Object(i.a)(n,2),c=l[0],o=l[1];return r.a.createElement("div",{className:t.root},r.a.createElement(k.a,{position:"static",color:"default",height:"100%"},r.a.createElement(R.a,{value:c,onChange:function(e,t){o(t)},className:t.paper},r.a.createElement(I.a,Object.assign({icon:r.a.createElement(U,{className:t.icon,homeURL:"#"}),label:"//Farming"},be(0))),r.a.createElement(I.a,Object.assign({icon:r.a.createElement(T,{className:t.icon,homeURL:"#"}),label:"//Community"},be(1))))),r.a.createElement(w.a,{axis:"rtl"===a.direction?"x-reverse":"x",index:c,onChangeIndex:function(e){o(e)}},r.a.createElement(ge,{value:c,index:0,dir:a.direction},r.a.createElement(de,{auth:e.auth,store:e.store})),r.a.createElement(ge,{value:c,index:1,dir:a.direction},r.a.createElement(fe,{auth:e.auth,store:e.store}))),r.a.createElement(se,null))}var Ce=function(e){return console.log(e),console.log(e.match.params.id),r.a.createElement("div",{className:"container section farm-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},"Farm ",e.match.params.id),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum")),r.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",null,"Owned by $owner"),r.a.createElement("div",null,"24 Sept, 5pm"))))},je=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:"",firstname:"",lastname:""},e.handleChange=function(t){e.setState(Object(m.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),console.log(e.state)},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstname"},"First Name"),r.a.createElement("input",{type:"text",id:"firstname",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastname"},"Last Name"),r.a.createElement("input",{type:"text",id:"lastname",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Sign Up"))))}}]),a}(n.Component),Oe=a(124),Ne=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={title:"",description:"",geolocation:"",company:""},e.handleChange=function(t){e.setState(Object(m.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.createFarm(e.state)},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"New Farm"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"description"},"Description"),r.a.createElement("textarea",{className:"materialize-textarea",id:"description",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"geolocation"},"Geolocation"),r.a.createElement("input",{type:"text",id:"geolocation",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"company"},"Company"),r.a.createElement("input",{type:"text",id:"company",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Create"))))}}]),a}(n.Component),xe=Object(Oe.b)(null,(function(e){return{createFarm:function(t){return e(function(e){return function(t,a,n){var r=n.firebase;n.getFirestore;r.fireStore.collection("farms").add(Object(q.a)(Object(q.a)({},e),{},{farmFounderFirstName:"Jean",farmFounderLastName:"Louw",farmFoundedOn:new Date})).then((function(){t({type:"CREATE_FARM",farmData:e})})).catch((function(e){t({type:"CREATE_FARM_ERROR",errorData:e})}))}}(t))}}}))(Ne),we=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={identifier:"",animaltype:"",additional:"",farm:""},e.handleChange=function(t){e.setState(Object(m.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),console.log(e.state)},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"New Camp"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"identifier"},"Identifier"),r.a.createElement("input",{type:"text",id:"identifier",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"animaltype"},"Animal Type"),r.a.createElement("input",{type:"text",id:"animaltype",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"additional"},"Additional"),r.a.createElement("textarea",{className:"materialize-textarea",id:"additional",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"farm"},"Farm"),r.a.createElement("input",{type:"text",id:"farm",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Create"))))}}]),a}(n.Component),Fe=a(534),Se=a(535),ke={background:"linear-gradient(180deg, #3C4142 0%, #5F6769 100%)",justifyContent:"center"},Re=a(267),Ie=a.n(Re),Ae=function(e){var t=e.style,a=e.homeURL,n=void 0===a?"/":a;return r.a.createElement(o.c,{to:n},r.a.createElement("img",Object(m.a)({src:Ie.a,style:{alignment:"center"}},"style",t)))},De=function(e){var t=Object(n.useState)(),a=Object(i.a)(t,2),l=a[0],c=a[1],o=function(){l||c(ke);return console.log(l),l};return r.a.createElement(r.a.Fragment,null,r.a.createElement(Fe.a,null),r.a.createElement(D.a,{textAlign:"center",width:"100%",height:"100%",style:Object(q.a)({},o())},r.a.createElement(Se.a,{style:Object(q.a)({},o())},r.a.createElement(Ae,null),r.a.createElement(y,{auth:e.auth}))))},Le=function(e){var t=Object(j.a)(e.auth),a=Object(i.a)(t,1)[0];return r.a.createElement(O.c,null,r.a.createElement(O.a,{exact:!0,path:"/"},a?r.a.createElement(ye,{auth:e.auth,store:e.store}):r.a.createElement(De,{auth:e.auth,store:e.store})),r.a.createElement(O.a,{exact:!0,path:"/annml-farm"},r.a.createElement(ye,{auth:e.auth,store:e.store})),r.a.createElement(O.a,{path:"/farm/:id",component:Ce}),r.a.createElement(O.a,{path:"/signin",component:y}),r.a.createElement(O.a,{path:"/signup",component:je}),r.a.createElement(O.a,{path:"/newfarm",component:xe}),r.a.createElement(O.a,{path:"/newcamp",component:we}),r.a.createElement(O.a,{path:"/capture",component:ce,auth:e.auth,store:e.store}))},Me=E.a.auth(),Ue=E.a.firestore();var ze=function(){var e=Object(j.a)(Me);return Object(i.a)(e,1)[0],r.a.createElement(o.a,{auth:Me},r.a.createElement("div",{className:"App"},r.a.createElement(Le,{auth:Me,firestore:Ue})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Be=a(58),Te={},qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te;return e},Ge={farms:[{id:"1",title:"Sunny Farm",description:"It's too damn sunny!",geolocation:"0,0",company:"Solar Farms"},{id:"2",title:"Shady Farm",description:"It's too damn shady!",geolocation:"1,1",company:"Solar Farms"},{id:"3",title:"Money Farm",description:"It's too damn rich!",geolocation:"2,2",company:"Solar Farms"},{id:"4",title:"Jacques Farm",description:"Yo yo!",geolocation:"2,2",company:"Jamesons"}]},Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_FARM":return console.log("Created farm:"),e;case"CREATE_FARMERROR":return console.log("Created project error:",t.errorData),e;default:return e}},We=a(123),_e=Object(Be.b)({firebase:C.firebaseReducer,firestore:We.firestoreReducer,authRedux:qe,farmRedux:Je}),Pe=Object(Be.c)(_e,{}),Ke={firebase:E.a,config:f,dispatch:Pe.dispatch,createFirestoreInstance:We.createFirestoreInstance};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Oe.a,{store:Pe},r.a.createElement(C.ReactReduxFirebaseProvider,Ke,r.a.createElement(ze,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[286,1,2]]]);
//# sourceMappingURL=main.499a6fad.chunk.js.map