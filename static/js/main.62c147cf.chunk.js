(this["webpackJsonpe-commerce"]=this["webpackJsonpe-commerce"]||[]).push([[0],{104:function(e,t,n){},144:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),r=n.n(c),i=n(11),o=n.n(i),s=n(8),j=n.n(s),d=n(17),l=n(19),u=(n(104),n(187)),h=n(177),b=n(180),x=n(185),m=n(183),p=n(182),O=n(184),f=n(83),v=n.n(f),C=n(186),g=Object(h.a)({root:{maxWidth:"100%",height:"auto"},media:{paddingTop:"90%"},cardActions:{display:"flex",justifyContent:"flex-end",height:"20px"},content:{display:"flex",justifyContent:"space-between",height:"0px",flex:1}}),A=function(e){var t=e.product,n=e.onAddToCart,c=g();return Object(a.jsx)("div",{children:Object(a.jsxs)(b.a,{className:c.root,children:[Object(a.jsx)(p.a,{className:c.media,image:t.media.source}),Object(a.jsxs)(m.a,{className:c.content,children:[Object(a.jsx)(O.a,{gutterBottom:!0,variant:"h6",component:"h2",children:t.name}),Object(a.jsxs)(O.a,{gutterBottom:!0,variant:"h6",component:"h2",children:["$",t.price.formatted]})]}),Object(a.jsx)(m.a,{children:Object(a.jsx)(O.a,{dangerouslySetInnerHTML:{__html:t.description},variant:"body2",color:"textSecondary",component:"p"})}),Object(a.jsx)(x.a,{className:c.cardActions,onClick:function(){return n(t.id,1)},children:Object(a.jsx)(C.a,{children:Object(a.jsx)(v.a,{})})})]})})},y=Object(h.a)((function(e){return{root:{marginTop:"65px",backgroundColor:e.palette.background.default,padding:"50px"}}})),w=function(e){var t=e.products,n=e.onAddToCart,c=y();return Object(a.jsx)("main",{children:Object(a.jsxs)(u.a,{className:c.root,container:!0,justify:"center",spacing:5,children:[Object(a.jsx)("div",{className:""}),t.map((function(e){return Object(a.jsx)(u.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(a.jsx)(A,{product:e,onAddToCart:n})},e.id)}))]})})},N=n(188),k=n(189),E=n(190),F=n(191),S=n(192),T=n(34),M=Object(h.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),U=function(e){var t=e.cart,n=M();return Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:n.root,children:Object(a.jsx)(N.a,{position:"fixed",color:"inherit",children:Object(a.jsxs)(k.a,{children:[Object(a.jsx)(E.a,{component:T.b,to:"/",children:Object(a.jsx)("img",{src:"data:image/png;base64,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",alt:"logo",height:"40px"})}),Object(a.jsx)(O.a,{variant:"h6",className:n.title,children:"OnlineShop"}),Object(a.jsx)(C.a,{component:T.b,to:"/cart","aria-label":"show cart items",color:"inherit",children:Object(a.jsx)(F.a,{color:"secondary",badgeContent:t.total_items,children:Object(a.jsx)(S.a,{})})})]})})})})},D=n(193),G=Object(h.a)({root:{maxWidth:345},content:{display:"flex",justifyContent:"space-between",flex:"1"},button:{backgroundColor:"#424242",color:"white"},h6:{justifySelf:"flex-end"}}),I=function(e){var t=e.item,n=e.handleUpdateCart,c=e.handleRemoveFromCart,r=G();return Object(a.jsx)("div",{children:Object(a.jsxs)(b.a,{className:r.root,children:[Object(a.jsx)(p.a,{component:"img",height:"140",image:t.media.source,alt:t.name}),Object(a.jsxs)(m.a,{className:r.content,children:[Object(a.jsx)(O.a,{variant:"h6",children:t.product_name}),Object(a.jsx)(O.a,{variant:"h6",children:t.line_total.formatted_with_symbol})]}),Object(a.jsxs)(x.a,{children:[Object(a.jsx)(E.a,{size:"small",color:"primary",onClick:function(){return n(t.id,t.quantity-1)},children:"-"}),Object(a.jsx)(O.a,{children:t.quantity}),Object(a.jsx)(E.a,{size:"small",color:"primary",onClick:function(){return n(t.id,t.quantity+1)},children:"+"}),Object(a.jsx)(E.a,{className:r.button,size:"small",type:"button",color:"dark",variant:"contained",onClick:function(){return c(t.id)},children:"Remove"})]})]})})},R=Object(h.a)((function(e){return{root:{marginTop:"65px",padding:"50px"},bottom:{paddingTop:"50px",display:"flex",flexDirection:"column",justifyContent:"flex-end",alignItems:"flex-end"},button:{margin:"10px"},h5:{marginBottom:"20px"}}})),z=function(e){var t=e.cart,n=e.handleUpdateCart,c=e.handleRemoveFromCart,r=e.handleEmptyCart,i=R(),o=!t.line_items.length,s=function(){return Object(a.jsx)(O.a,{variant:"subtitle1",children:"You have no items in your shopping cart"})},j=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(u.a,{container:!0,spacing:4,children:t.line_items.map((function(e){return Object(a.jsx)(u.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(a.jsx)(I,{item:e,handleUpdateCart:n,handleRemoveFromCart:c})})}))}),Object(a.jsxs)("div",{className:i.bottom,children:[Object(a.jsxs)(O.a,{variant:"h5",children:["Subtotal : ",t.subtotal.formatted_with_symbol]}),Object(a.jsxs)("div",{children:[Object(a.jsx)(E.a,{className:i.button,size:"small",type:"button",variant:"contained",color:"secondary",onClick:r,children:"Clear Cart"}),Object(a.jsx)(E.a,{component:T.b,to:"/checkout",className:i.button,size:"small",type:"button",variant:"contained",color:"primary",children:"Check Out"})]})]})]})};return Object(a.jsx)("div",{children:Object(a.jsxs)(D.a,{className:i.root,children:[Object(a.jsx)(O.a,{className:i.h5,variant:"h5",children:"Your Shopping Cart"}),o?Object(a.jsx)(s,{}):t&&Object(a.jsx)(j,{})]})})},Q=n(84),J=new(n.n(Q).a)("pk_226150cac7ce54fdf4b53935cdd6101002a9658b09c55",!0),B=n(12),L=n(20),P=n(86),V=n(203),X=n(196),H=n(198),q=function(){return Object(a.jsx)("div",{children:"Confirmation"})},Y=n(64),W=n(201),K=n(197),Z=n(202),_=n(48),$=n(199),ee=function(e){var t=e.name,n=e.label,c=e.required,r=Object(_.d)().control;return Object(a.jsx)(u.a,{item:!0,xs:12,sm:6,children:Object(a.jsx)(_.a,{as:$.a,control:r,fullWidth:!0,name:t,label:n,required:c})})},te=function(){var e=Object(_.c)(),t=Object(c.useState)(""),n=Object(l.a)(t,2),r=n[0];n[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(O.a,{variant:"h6",gutterBottom:!0,children:"Shipping Address"}),Object(a.jsx)(_.b,Object(Y.a)(Object(Y.a)({},e),{},{children:Object(a.jsx)("form",{onSubmit:"",children:Object(a.jsxs)(u.a,{container:!0,spacing:3,children:[Object(a.jsx)(ee,{required:!0,name:"firstName",label:"First name"}),Object(a.jsx)(ee,{required:!0,name:"lastName",label:"Last name"}),Object(a.jsx)(ee,{required:!0,name:"address",label:"Address"}),Object(a.jsx)(ee,{required:!0,name:"email",label:"Email"}),Object(a.jsx)(ee,{required:!0,name:"city",label:"City"}),Object(a.jsx)(ee,{required:!0,name:"zip",label:"ZIP/ Postal Code"}),Object(a.jsxs)(u.a,{item:!0,xs:12,sm:6,children:[Object(a.jsx)(W.a,{children:"Shipping Country"}),Object(a.jsx)(K.a,{fullWidth:!0,value:r,children:["United State","Singapore","Taiwan","Poland","Austria"].map((function(e){return Object(a.jsx)(Z.a,{children:e})}))})]})]})})}))]})},ne=function(){return Object(a.jsx)("div",{children:"PaymentForm"})},ae=Object(h.a)((function(e){var t;return{root:{marginTop:"100px",display:"flex",justifyContent:"center"},paper:(t={padding:"20px",width:"50%"},Object(L.a)(t,e.breakpoints.down("xs"),{width:"100%"}),Object(L.a)(t,e.breakpoints.up(600),{width:"600px"}),t)}})),ce=["Shipping address","Payment Details"],re=function(e){e.cart;var t=Object(c.useState)(null),n=Object(l.a)(t,2),r=(n[0],n[1],ae()),i=Object(c.useState)(0),o=Object(l.a)(i,2),s=o[0],j=(o[1],function(){return 0===s?Object(a.jsx)(te,{}):Object(a.jsx)(ne,{})});return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("main",{class:r.root,children:Object(a.jsxs)(P.a,{className:r.paper,elevation:3,children:[Object(a.jsx)(O.a,{variant:"h4",aligin:"center",children:"Checkout"}),Object(a.jsx)(V.a,{activeStep:s,children:ce.map((function(e){return Object(a.jsx)(X.a,{children:Object(a.jsx)(H.a,{children:e})},e)}))}),s===ce.length?Object(a.jsx)(q,{}):Object(a.jsx)(j,{})]})})})};var ie=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)({}),o=Object(l.a)(i,2),s=o[0],u=o[1],h=function(){var e=Object(d.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.products.list();case 2:t=e.sent,n=t.data,r(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,J.cart.retrieve();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(d.a)(j.a.mark((function e(t,n){var a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.cart.add(t,n);case 2:a=e.sent,c=a.cart,u(c);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),m=function(){var e=Object(d.a)(j.a.mark((function e(t,n){var a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.cart.update(t,{quantity:n});case 2:a=e.sent,c=a.cart,u(c);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),p=function(){var e=Object(d.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.cart.remove(t);case 2:n=e.sent,a=n.cart,u(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(d.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,J.cart.empty();case 2:n=e.sent,a=n.cart,u(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){h(),b()}),[]),console.log(s),console.log(n),Object(a.jsx)(T.a,{children:Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(U,{cart:s}),Object(a.jsxs)(B.c,{children:[Object(a.jsx)(B.a,{exact:!0,path:"/",children:Object(a.jsx)(w,{products:n,onAddToCart:x})}),Object(a.jsx)(B.a,{exact:!0,path:"/cart",children:Object(a.jsx)(z,{cart:s,handleUpdateCart:m,handleRemoveFromCart:p,handleEmptyCart:O})}),Object(a.jsx)(B.a,{exact:!0,path:"/checkout",children:Object(a.jsx)(re,{cart:s})})]})]})})},oe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,204)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(ie,{})}),document.getElementById("root")),oe()}},[[144,1,2]]]);
//# sourceMappingURL=main.62c147cf.chunk.js.map