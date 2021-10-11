(this["webpackJsonpreact-practice"]=this["webpackJsonpreact-practice"]||[]).push([[0],{56:function(e,t,r){},78:function(e,t,r){},79:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r.n(n),a=r(15),o=r.n(a),s=r(45),l=r(44),i={count:0},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i;return e},d=(r(55),r(56),r(81)),j=r(21),p=r(22),h=r(28),b=r(25),f=r(84),x=r(85),O=r(1),m=function(e){Object(h.a)(r,e);var t=Object(b.a)(r);function r(){return Object(j.a)(this,r),t.apply(this,arguments)}return Object(p.a)(r,[{key:"render",value:function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(f.a,{bg:"dark",variant:"dark",expand:"lg",children:Object(O.jsxs)(d.a,{children:[Object(O.jsx)(f.a.Brand,{href:"#home",children:"React-Bootstrap"}),Object(O.jsx)(f.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(O.jsx)(f.a.Collapse,{id:"basic-navbar-nav",children:Object(O.jsxs)(x.a,{className:"ms-auto",children:[Object(O.jsx)(x.a.Link,{href:"home",children:"Home"}),Object(O.jsx)(x.a.Link,{href:"link",children:"Link"})]})})]})})})}}]),r}(n.Component),y=m,v=r(27),g=r(6),w=r.n(g),k=r(9),C=r(82),H=r(42),S=r(87);var N=function(e){var t,r;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(C.a,{className:"my-4",children:(t=e.products,r="type",Object(v.a)(new Map(t.map((function(e){return[e[r],e]}))).values())).map((function(t,r){return Object(O.jsx)(H.a,{children:Object(O.jsx)(S.a,{style:{width:"10rem",cursor:"pointer",textAlign:"center"},onClick:Object(k.a)(w.a.mark((function r(){return w.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.categoryHandler(t);case 2:e.filterHandler();case 3:case"end":return r.stop()}}),r)}))),children:Object(O.jsx)(S.a.Body,{children:Object(O.jsx)(S.a.Title,{children:t.type})})})},r)}))})})},L=r(86);var T=function(e){return Object(O.jsxs)(L.a,{className:"my-5",id:"color",children:[Object(O.jsx)(L.a.Check,{"aria-label":"option 1",label:"color k",value:"color K",onClick:function(){var t=Object(k.a)(w.a.mark((function t(r){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.colorHandler(r);case 2:e.filterHandler();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}),Object(O.jsx)(L.a.Check,{"aria-label":"option 1",label:"color X",value:"color X",onClick:function(){var t=Object(k.a)(w.a.mark((function t(r){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.colorHandler(r);case 2:e.filterHandler();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}),Object(O.jsx)(L.a.Check,{"aria-label":"option 1",label:"color Y",value:"color Y",onClick:function(){var t=Object(k.a)(w.a.mark((function t(r){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.colorHandler(r);case 2:e.filterHandler();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}),Object(O.jsx)(L.a.Check,{"aria-label":"option 1",label:"color L",value:"color L",onClick:function(){var t=Object(k.a)(w.a.mark((function t(r){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.colorHandler(r);case 2:e.filterHandler();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}),Object(O.jsx)(L.a.Check,{"aria-label":"option 1",label:"color Z",value:"color Z",onClick:function(){var t=Object(k.a)(w.a.mark((function t(r){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.colorHandler(r);case 2:e.filterHandler();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}),Object(O.jsx)("br",{}),Object(O.jsx)("button",{type:"reset",className:"btn btn-danger",onClick:e.resetColorsHandler,children:"Reset Colors"})]})},P=r(43),F=r.n(P);r(77);var X=function(e){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("br",{}),Object(O.jsx)("label",{htmlFor:"price",children:"Price filter"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("div",{className:"px-3",children:Object(O.jsx)(F.a,{step:5,maxValue:55,minValue:10,formatLabel:function(e){return"".concat(e," $")},value:e.value,onChange:function(){var t=Object(k.a)(w.a.mark((function t(r){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.priceHandler(r);case 2:e.filterHandler();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()})})]})},Y=r(83);var Z=function(e){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(C.a,{className:"d-flex justify-content-center mt-5",children:[!e.products.length&&Object(O.jsx)(H.a,{xs:6,children:Object(O.jsx)("h2",{children:"No Items to show"})}),e.products.map((function(e,t){return Object(O.jsx)(H.a,{xs:6,className:"mt-4",children:Object(O.jsxs)(S.a,{style:{width:"18rem"},children:[Object(O.jsx)(S.a.Img,{variant:"top",src:"holder.js/100px180"}),Object(O.jsxs)(S.a.Body,{children:[Object(O.jsx)(S.a.Title,{children:e.name}),Object(O.jsxs)(S.a.Text,{children:["Color: ",e.color]}),Object(O.jsxs)(Y.a,{variant:"secondary",size:"lg",children:[e.price," $"]})]})]})},t)}))]})})},B=function(e){Object(h.a)(r,e);var t=Object(b.a)(r);function r(){var e;Object(j.a)(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).products=[{name:"product-K1",price:10,type:"category K",color:"color K"},{name:"product-K2",price:15,type:"category K",color:"color Y"},{name:"product-L1",price:20,type:"category L",color:"color X"},{name:"product-L2",price:25,type:"category L",color:"color L"},{name:"product-X1",price:30,type:"category X",color:"color Z"},{name:"product-X2",price:35,type:"category X",color:"color X"},{name:"product-Y1",price:40,type:"category Y",color:"color Y"},{name:"product-Y2",price:45,type:"category Y",color:"color K"},{name:"product-Z1",price:50,type:"category Z",color:"color L"},{name:"product-Z2",price:55,type:"category Z",color:"color Z"}],e.colors=[],e.newProducts=[],e.state={productsToShow:[],choosenCategory:"",value:{min:10,max:55},choosenColors:""},e.categoryHandler=function(t){e.setState({choosenCategory:t.type}),console.log(e.state.choosenCategory)},e.priceHandler=function(t){e.setState({value:t})},e.colorHandler=function(){var t=Object(k.a)(w.a.mark((function t(r){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r.currentTarget.checked){t.next=5;break}return t.next=3,e.setState({choosenColors:r.currentTarget.value});case 3:t.next=8;break;case 5:if(r.currentTarget.checked){t.next=8;break}return t.next=8,e.setState({choosenColors:""});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getUniqueListBy=function(e,t){return Object(v.a)(new Map(e.map((function(e){return[e[t],e]}))).values())},e.filterHandler=Object(k.a)(w.a.mark((function t(){var r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("before ",e.newProducts),r=JSON.parse(JSON.stringify(e.products)),e.state.choosenCategory&&(e.newProducts=r.filter((function(t){return t.type===e.state.choosenCategory}))),(e.state.value.min>10||e.state.value.max<55)&&(e.newProducts=(e.newProducts.length>0?e.newProducts:r).filter((function(t){return t.price>=e.state.value.min&&t.price<=e.state.value.max?t:null}))),e.state.choosenColors&&(e.newProducts=(e.newProducts.length>0?e.newProducts:r).filter((function(t){return t.color===e.state.choosenColors}))),t.next=7,e.setState({productsToShow:e.getUniqueListBy(e.newProducts,"name")});case 7:case"end":return t.stop()}}),t)}))),e.resetHandler=Object(k.a)(w.a.mark((function t(){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({productsToShow:[],choosenCategory:"",value:{min:10,max:55},choosenColors:[]});case 2:document.querySelector("#color").reset();case 3:case"end":return t.stop()}}),t)}))),e.resetColorsHandler=Object(k.a)(w.a.mark((function t(){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.colors.length=0,t.next=3,e.setState({choosenColors:JSON.parse(JSON.stringify(e.colors))});case 3:e.filterHandler();case 4:case"end":return t.stop()}}),t)}))),e}return Object(p.a)(r,[{key:"render",value:function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h3",{className:"text-center lead mb-5",children:"Choose one from our categories below"}),Object(O.jsx)(N,{products:this.products,categoryHandler:this.categoryHandler,filterHandler:this.filterHandler}),Object(O.jsxs)(C.a,{className:"my-4",children:[Object(O.jsxs)(H.a,{xs:4,children:[Object(O.jsx)("h3",{className:"text-center",children:"Filters"}),Object(O.jsx)(X,{priceValue:this.state.priceValue,priceHandler:this.priceHandler,filterHandler:this.filterHandler,value:this.state.value}),Object(O.jsx)(T,{colorHandler:this.colorHandler,filterHandler:this.filterHandler,resetColorsHandler:this.resetColorsHandler}),Object(O.jsx)("button",{className:"btn btn-outline-dark",onClick:this.resetHandler,children:"Reset All"})]}),Object(O.jsx)(H.a,{xs:8,children:Object(O.jsx)(Z,{products:this.state.productsToShow.length||this.state.choosenCategory?this.state.productsToShow:this.products})})]})]})}}]),r}(n.Component),K=B,J=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(y,{}),Object(O.jsx)("h1",{className:"text-center my-4",children:"Our E-Commerce store"}),Object(O.jsx)(d.a,{children:Object(O.jsx)(K,{})})]})},V=(r(78),Object(s.a)(u));o.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(l.a,{store:V,children:Object(O.jsx)(J,{})})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.120d2530.chunk.js.map