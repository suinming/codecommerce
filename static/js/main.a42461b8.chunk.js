(this.webpackJsonpcodecommerce=this.webpackJsonpcodecommerce||[]).push([[0],Array(22).concat([function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(2),n=a.n(r),s=a(17),c=a.n(s),i=(a(22),a(23),a(3)),o=a(4),l=a(6),u=a(5),d=(a(24),a(7)),j=a(1),p=(a(25),a(9)),h=a(10),b=a(0),m=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",Object(j.a)(Object(j.a)({className:"input-root"},this.props),{},{onClick:this.props.onClick})),("password"===this.props.name||"confirmPassword"===this.props.name)&&Object(b.jsx)(p.a,{icon:h.a,className:"eyeIcon",onClick:this.props.passWordToggler}),this.props.errorM&&Object(b.jsx)("div",{className:"errorInputBase",children:this.props.errorM})]})}}]),a}(n.a.Component),O=m,v=(a(32),function(e){return-1===e.search(/^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/)?"Enter the valid email address":void 0}),f=function(e){return-1===e.search(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/)?"Please enter the valid password":void 0},x=function(e){return-1===e.search(/^[A-Z]+$/i)?"Enter the valid name":void 0},g=function(e){return-1===e.search(/^[0-9]+$/)?"Enter number only":void 0},N=function(e){return e.length?void 0:"Required"},y=function(e){var t=e.userData,a=e.error,r={};return Object.keys(t).forEach((function(e){var n=e+"Error";t[e].length&&!a[n]||(r=t[e].length?Object(j.a)(Object(j.a)({},r),{},Object(d.a)({},"".concat(e,"Error"),a["".concat(e,"Error")])):Object(j.a)(Object(j.a)({},r),{},Object(d.a)({},"".concat(e,"Error"),"Required")))})),r},P={email:"",password:""},C=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).togglePasswordVisibility=function(){r.setState({isPasswordShown:!r.state.isPasswordShown})},r.handleInputData=function(e){var t=e.target,a=t.name,n=t.value;r.setState((function(e){return{userData:Object(j.a)(Object(j.a)({},e.userData),{},Object(d.a)({},a,n))}}))},r.handleValidation=function(e,t){var a;switch(e){case"email":a=v(t),r.setState((function(e){return{error:Object(j.a)(Object(j.a)({},e.error),{},{emailError:a})}}));break;case"password":a=f(t),r.setState((function(e){return{error:Object(j.a)(Object(j.a)({},e.error),{},{passwordError:a})}}))}},r.handleBlur=function(e){var t=e.target,a=t.name,n=t.value;return r.handleValidation(a,n)},r.handleSubmit=function(e){var t=y(r.state);0===Object.keys(t).length?r.setState({userData:P},r.props.handleSubmit):r.setState({error:t})},r.state={userData:P,isPasswordShown:!1,error:{}},r}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=[{label:"E-Mail",name:"email",type:"email",error:"emailError"},{label:"password",name:"password",type:"password",error:"passwordError"}];return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("form",{onSubmit:this.handleSubmit,children:[t.map((function(a){return Object(b.jsx)(O,{placeHolder:a.label,type:"password"===a.type||"confirmPassword"===a.type?e.state.isPasswordShown?"text":"password":a.type,value:t&&t[a.name],onChange:e.handleInputData,onBlur:e.handleBlur,autoComplete:"off",name:a.name,passWordToggler:e.togglePasswordVisibility,errorM:e.state.error&&e.state.error[a.error]&&e.state.error[a.error].length>1?e.state.error[a.error]:null})})),Object(b.jsx)(O,{name:"login",type:"submit",value:"Login"}),Object(b.jsx)("div",{className:"btn-wrapper fbSignIn",children:Object(b.jsx)(O,{type:"submit",value:"Sign up with FACEBOOK"})})]})})}}]),a}(n.a.Component),S=(a(33),{email:"",password:"",confirmPassword:"",firstName:"",surName:"",postcode:""}),D=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).togglePasswordVisibility=function(){e.setState({isPasswordShown:!e.state.isPasswordShown})},e.handleInputData=function(t){var a=t.target,r=a.name,n=a.value;e.setState((function(e){return{userData:Object(j.a)(Object(j.a)({},e.userData),{},Object(d.a)({},r,n))}}))},e.handleValidation=function(t,a){var r,n;switch(t){case"email":r=v(a),e.setState((function(e){return{error:Object(j.a)(Object(j.a)({},e.error),{},{emailError:r})}}));break;case"password":r=f(a),e.setState((function(e){return{error:Object(j.a)(Object(j.a)({},e.error),{},{passwordError:r})}}));break;case"confirmPassword":n=e.state.userData.password,r=n!==a?"Please enter the same password":n?void 0:"Please enter the password before confirm",e.setState((function(e){return{error:Object(j.a)(Object(j.a)({},e.error),{},{confirmPasswordError:r})}}));break;case"firstName":r=x(a),e.setState((function(e){return{error:Object(j.a)(Object(j.a)({},e.error),{},{firstNameError:r})}}));break;case"surName":r=x(a),e.setState((function(e){return{error:Object(j.a)(Object(j.a)({},e.error),{},{surNameError:r})}}));break;case"postcode":r=-1===a.search(/^[0-9]{5}(?:-[0-9]{4})?$/)?"Enter the valid postcode":void 0,e.setState((function(e){return{error:Object(j.a)(Object(j.a)({},e.error),{},{postcodeError:r})}}))}},e.handleBlur=function(t){var a=t.target,r=a.name,n=a.value;return e.handleValidation(r,n)},e.handleSubmit=function(t){var a=y(e.state);0===Object.keys(a).length?e.setState({userData:S},e.props.handleSubmit):e.setState({error:a})},e.state={isPasswordShown:!1,userData:S,error:{}},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=[{label:"E-Mail",name:"email",type:"email",error:"emailError"},{label:"password",name:"password",type:"password",error:"passwordError"},{label:"confirm password",name:"confirmPassword",type:"password",error:"confirmPasswordError"},{label:"first name",name:"firstName",type:"text",error:"firstNameError"},{label:"surname",name:"surName",type:"text",error:"surNameError"},{label:"postcode",name:"postcode",type:"text",error:"postcodeError"}];return Object(b.jsxs)("form",{onSubmit:this.handleSubmit,children:[t.map((function(a){return Object(b.jsx)(O,{placeHolder:a.label,type:"password"===a.type||"confirmPassword"===a.type?e.state.isPasswordShown?"text":"password":a.type,value:t&&t[a.name],onChange:e.handleInputData,onBlur:e.handleBlur,autoComplete:"off",name:a.name,passWordToggler:e.togglePasswordVisibility,errorM:e.state.error&&e.state.error[a.error]&&e.state.error[a.error].length>1?e.state.error[a.error]:null})})),Object(b.jsx)(O,{name:"submit",type:"submit",value:"Submit"}),Object(b.jsx)("div",{className:"btn-wrapper fbSignIn",children:Object(b.jsx)(O,{type:"submit",value:"Sign up with FACEBOOK"})})]})}}]),a}(n.a.Component),k=a(13),E=(a(34),a(35),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).handleItemDelete=function(){var e=r.state.itemDisplay;r.setState({itemDisplay:!e},(function(){r.props.pushElementToArr(0,r.props.index)}))},r.handleSelect=function(e){r.setState({quantity:Number(e.target.value),totalPrice:(Number(e.target.value)*r.props.itemInfo.price).toFixed(2)},(function(){r.props.pushElementToArr(r.state.totalPrice,r.state.quantity,r.props.index)}))},r.state={quantity:null,totalPrice:null,itemDisplay:!0},r}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.itemInfo,t="/codecommerce/img/".concat(e.categories,"/").concat(e.name,".jpg");return this.state.itemDisplay&&Object(b.jsxs)("div",{className:"CartItemWrapper",children:[Object(b.jsxs)("div",{className:"product",children:[Object(b.jsx)("div",{className:"imgWrapper",children:Object(b.jsx)("img",{src:t,alt:"product"})}),Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("h6",{children:e.name}),Object(b.jsxs)("div",{children:[" ",Object(b.jsx)("span",{className:"boldTitle",children:"CATEGORIES "}),Object(b.jsx)("br",{})," ",e.categories]}),Object(b.jsxs)("div",{children:[" ",Object(b.jsx)("span",{className:"boldTitle",children:"INVENTORY  "}),Object(b.jsx)("br",{})," ",e.inventory]})]})]}),Object(b.jsx)("div",{className:"price",children:e.price}),Object(b.jsx)("div",{className:"quantity",children:Object(b.jsxs)("select",{name:"quantity",id:"",onChange:this.handleSelect,children:[Object(b.jsx)("option",{}),Object(b.jsx)("option",{value:"1",children:"1"}),Object(b.jsx)("option",{value:"2",children:"2"}),Object(b.jsx)("option",{value:"3",children:"3"}),Object(b.jsx)("option",{value:"4",children:"4"}),Object(b.jsx)("option",{value:"5",children:"5"})]})}),Object(b.jsx)("div",{className:"totalPrice",children:this.state.totalPrice}),Object(b.jsx)(p.a,{icon:h.b,className:"timesIcon",onClick:this.handleItemDelete})]})}}]),a}(n.a.Component)),w=(a(36),a(37),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){switch(this.props.status){case 1:return Object(b.jsxs)("div",{className:"flowChart",children:[Object(b.jsx)("div",{className:"circle",children:"Cart"}),Object(b.jsx)("div",{className:"line"}),Object(b.jsx)("div",{className:"circle",children:"Delivery"}),Object(b.jsx)("div",{className:"lineGray"}),Object(b.jsx)("div",{className:"circleGray",children:"Payment"}),Object(b.jsx)("div",{className:"lineGray"}),Object(b.jsx)("div",{className:"circleGray",children:"Confirmation"})]});case 2:return Object(b.jsxs)("div",{className:"flowChart",children:[Object(b.jsx)("div",{className:"circle",children:"Cart"}),Object(b.jsx)("div",{className:"line"}),Object(b.jsx)("div",{className:"circle",children:"Delivery"}),Object(b.jsx)("div",{className:"line"}),Object(b.jsx)("div",{className:"circle",children:"Payment"}),Object(b.jsx)("div",{className:"lineGray"}),Object(b.jsx)("div",{className:"circleGray",children:"Confirmation"})]});case 3:return Object(b.jsxs)("div",{className:"flowChart",children:[Object(b.jsx)("div",{className:"circle",children:"Cart"}),Object(b.jsx)("div",{className:"line"}),Object(b.jsx)("div",{className:"circle",children:"Delivery"}),Object(b.jsx)("div",{className:"line"}),Object(b.jsx)("div",{className:"circle",children:"Payment"}),Object(b.jsx)("div",{className:"line"}),Object(b.jsx)("div",{className:"circle",children:"Confirmation"})]})}}}]),a}(n.a.Component)),A=w,T=(a(38),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.selectTitle,a=e.onChange,r=e.onBlur,n=e.errorM,s=e.option;return Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("span",{className:"inlineSpan",children:t}),Object(b.jsxs)("select",{name:t,onChange:a,onBlur:r,children:[Object(b.jsx)("option",{},"null"),s.map((function(e){return Object(b.jsx)("option",{value:e,children:e},e)}))]}),n&&Object(b.jsx)("div",{className:"errorSelect",children:n})]})}}]),a}(n.a.Component)),I=T,F=(a(39),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return"base"===this.props.format?Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("span",{children:this.props.title}),Object(b.jsxs)("div",{className:"relativeForError",children:[Object(b.jsx)("input",Object(j.a)({},this.props)),this.props.errorM&&Object(b.jsx)("div",{className:"error",children:this.props.errorM})]})]}):this.props.title.map((function(t,a){return Object(b.jsx)(I,{selectTitle:t.selectTitle,option:t.option,onBlur:e.props.onBlur,onChange:e.props.onChange,errorM:e.props.errorM},e.props.title[a].selectTitle)}))}}]),a}(n.a.Component)),B=F,M=(a(40),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.product,a=e.index,r="/codecommerce/img/".concat(t.item.categories,"/").concat(t.item.name,".jpg");return Object(b.jsxs)("div",{className:"summaryItem",children:[Object(b.jsx)("div",{className:"imgWrapper",children:Object(b.jsx)("img",{src:r,alt:"product"})}),Object(b.jsxs)("div",{className:"itemInfo",children:[Object(b.jsx)("h6",{children:t.name}),Object(b.jsxs)("div",{children:[" ",Object(b.jsxs)("span",{className:"boldTitle",children:["QUANTITY ",Object(b.jsx)("br",{})," "]}),t.quantity]}),Object(b.jsxs)("div",{children:[" ",Object(b.jsxs)("span",{className:"boldTitle",children:["PRICE ",Object(b.jsx)("br",{})," "]}),t.price]})]})]},"item-"+a)}}]),a}(n.a.Component)),q=M,R=(a(41),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).cardNumDisplay=function(e){var t=e.length;return Object(k.a)(e).map((function(e,a){return" "!==e&&a<t-4&&(e="*"),e})).join("")},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.totalPrice,a=e.discount,r=e.itemData,n=e.userData,s=e.cardData,c=e.status,i=e.shippingMethod,o=e.handlePageFinished,l=[{status:0,title:"Car Subtotal",price:t},{status:0,title:"Discount",price:a},{status:0,title:"Cart Total",price:t-a}],u="PAY $ "+(t-a);return Object(b.jsxs)("div",{className:"summary",children:[Object(b.jsx)("h5",{children:"SUMMARY"}),l.map((function(e){return Object(b.jsxs)("div",{className:"summaryPrice",children:[Object(b.jsx)("div",{className:"subtitle",children:e.title}),Object(b.jsxs)("div",{className:"price",children:["$",e.price]})]},e.title)})),c>=1&&r&&Object(b.jsx)("div",{className:"summaryItemWrapper",children:r.map((function(e,t){return Object(b.jsx)(q,{product:e,index:t})}))}),c>=2&&n&&Object(b.jsxs)("div",{className:"itemInfo",children:[Object(b.jsx)("div",{className:"subtitle",children:"Shipping Information"}),Object(b.jsx)("span",{className:"boldTitle",children:"NAME : "}),n.nameSurname,Object(b.jsx)("br",{}),Object(b.jsx)("span",{className:"boldTitle",children:"ADDRESS : "}),Object(b.jsx)("br",{}),n.zipCode,Object(b.jsx)("br",{}),n.yourAddress,n.addressTitle,Object(b.jsx)("br",{}),n.city,n.state,n.country,Object(b.jsx)("br",{}),Object(b.jsx)("span",{className:"boldTitle",children:"CELLPHONE : "}),n.cellphone,Object(b.jsx)("br",{})]}),i&&Object(b.jsxs)("div",{className:"itemInfo",children:[Object(b.jsx)("div",{className:"subtitle",children:"Shipping Method"}),i.toUpperCase()]}),s&&Object(b.jsxs)("div",{className:"itemInfo",children:[Object(b.jsx)("div",{className:"subtitle",children:"Card Information"}),Object(b.jsx)("span",{className:"boldTitle",children:"CARDHOLDER NAME : "}),this.props.cardData.cardHolderName,Object(b.jsx)("br",{}),Object(b.jsx)("span",{className:"boldTitle",children:"CARD NUMBER : "}),Object(b.jsx)("br",{}),this.cardNumDisplay(this.props.cardData.cardNumber),Object(b.jsx)("br",{}),Object(b.jsx)("span",{className:"boldTitle",children:"EXPIRE DATE : "}),this.props.cardData.expireMonth,"/",this.props.cardData.expireYear,Object(b.jsx)("br",{})]}),2===c?Object(b.jsx)("button",{className:"checkoutBtn",value:"pay",onClick:o,children:u}):Object(b.jsx)("button",{className:"checkoutBtn",value:"checkout",onClick:o,children:"CHECKOUT"})]})}}]),a}(n.a.Component)),V=R,L=(a(42),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.type,a=e.value,r=e.onClick,n=e.selectedOption,s=e.info;return Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:t,value:a,className:"radioOption",onClick:r,checked:n===a}),Object(b.jsx)("span",{className:"radioText",children:s})]})}}]),a}(n.a.Component)),H=L,Y=(a(43),a(44),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleBtnBack=function(){var t=e.state.toPrevPage;e.setState({toPrevPage:!t})},e.handlePageFinished=function(){var t=e.state.toNextPage;e.setState({toNextPage:!t})},e.state={status:3,toPrevPage:!1,toNextPage:!1},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.toPrevPage,a=e.toNextPage,r=e.status,n=this.props,s=n.itemData,c=n.userData,i=n.cardData,o=n.totalPrice,l=n.shippingMethod,u=n.discount;return t?Object(b.jsx)(W,{itemData:s,userData:c,totalPrice:o,discount:u}):a?Object(b.jsx)(ue,{}):Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"confirmation",children:[Object(b.jsx)(A,{status:this.state.status},"process"),Object(b.jsx)("h2",{className:"shippingInfoTitle",children:"Confirmation"}),Object(b.jsxs)("div",{className:"confirmationInfo",children:[Object(b.jsxs)("div",{className:"confirmationTitle",children:["Congratulation !!",Object(b.jsx)("br",{}),"Your Order Is Accepted"]}),Object(b.jsxs)("div",{className:"confirmationContent",children:["Lorem ipsum dolor sit amet consectetur, adipisicing elit.",Object(b.jsx)("br",{}),"Atque qui facilis, vel totam omnis deserunt maiores est",Object(b.jsx)("br",{}),"voluptas voluptate blanditiis fuga sit mollitia necessitatibus",Object(b.jsx)("br",{}),"culpa sapiente, quaerat velit dolores error."]})]}),Object(b.jsx)("button",{className:"backBtn",onClick:this.handleBtnBack,children:"Back To PaymentInfo"})]}),Object(b.jsx)(V,{status:r,isPageFinished:this.state.isPageFinished,handlePageFinished:this.handlePageFinished,itemData:s,userData:c,cardData:i,totalPrice:o,discount:u,shippingMethod:l},"summary")]})}}]),a}(n.a.Component)),$=[/[1-9]/,/\d/,/\d/,/\d/,/\d/," ",/\d/,/\d/,/\d/,/\d/," ",/\d/,/\d/,/\d/,/\d/," ",/\d/,/\d/,/\d/,/\d/],z={cardNumber:"",cardHolderName:"",expireMonth:"",expireYear:"",ccv:""},W=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).numberSeq=function(e,t){return Array(t-e+1).fill().map((function(t,a){return a+e}))},r.handleInputData=function(e){var t=e.target,a=t.name,n=t.value;if("cardNumber"===a){var s=n.split(" ").join("");s.length?(s=s.match(new RegExp(".{1,4}","g")).join(" "),r.setState((function(e){return{cardData:Object(j.a)(Object(j.a)({},e.cardData),{},Object(d.a)({},a,s))}}))):r.setState((function(e){return{cardData:Object(j.a)(Object(j.a)({},e.cardData),{},Object(d.a)({},a,n))}}))}else r.setState((function(e){return{cardData:Object(j.a)(Object(j.a)({},e.cardData),{},Object(d.a)({},a,n))}}))},r.handleBtnBack=function(){var e=r.state.toPrevPage;r.setState({toPrevPage:!e})},r.handleValidation=function(e,t){var a,n=e+"Error";switch(e){case"cardNumber":a=function(e){var t={MASTERCARD:/^5[1-5][0-9]{1,}|^2[2-7][0-9]{1,}$/,VISA:/^4[0-9]{2,}$/,AMERICANEXPRESS:/^3[47][0-9]{5,}$/,DISCOVER:/^6(?:011|5[0-9]{2})[0-9]{3,}$/};for(var a in t)if(e.replace(/[^\d]/g,"").match(t[a])&&e)return e&&/^[1-6]{1}[0-9]{14,15}$/i.test(e.replace(/[^\d]/g,"").trim())?"":"Enter the valid card number";return"Enter the valid card number"}(t),r.setState((function(e){return{error:Object(j.a)(Object(j.a)({},e.error),{},Object(d.a)({},n,a))}}));break;case"cardHolderName":a=x(t),r.setState((function(e){return{error:Object(j.a)(Object(j.a)({},e.error),{},Object(d.a)({},n,a))}}));break;case"ccv":a=g(t),r.setState((function(e){return{error:Object(j.a)(Object(j.a)({},e.error),{},Object(d.a)({},n,a))}}));break;case"expireMonth":case"expireYear":a=N(t),r.setState((function(e){return{error:Object(j.a)(Object(j.a)({},e.error),{},Object(d.a)({},n,a))}}))}},r.handleBlur=function(e){var t=e.target,a=t.name,n=t.value;return r.handleValidation(a,n)},r.checkErrorBeforeSave=function(){var e=r.state,t=e.cardData,a=e.error,n={},s=!1;return Object.keys(t).forEach((function(e){var r=e+"Error";t[e].length&&!a[r]||(n=t[e].length?Object(j.a)(Object(j.a)({},n),{},Object(d.a)({},"".concat(e,"Error"),a["".concat(e,"Error")])):Object(j.a)(Object(j.a)({},n),{},Object(d.a)({},"".concat(e,"Error"),"Required")),s=!0)})),r.setState({error:n}),s},r.handlePageFinished=function(){var e=r.checkErrorBeforeSave(),t=r.state,a=t.isPageFinished,n=t.toNextPage;e||r.setState({isPageFinished:!a,toNextPage:!n})},r.state={status:2,toPrevPage:!1,toNextPage:!1,isPageFinished:!1,cardData:z,maxLength:$.length,error:{}},r}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.state.maxLength,a=this.props,r=a.itemData,n=a.totalPrice,s=a.discount,c=a.userData,i=a.shippingMethod,o=[{format:"base",title:"CardHolder Name",type:"text",name:"cardHolderName",error:"cardHolderNameError"},{format:"base",title:"Card Number",type:"text",name:"cardNumber",error:"cardNumberError"},{format:"select",title:[{name:"expireMonth",selectTitle:"expireMonth",option:this.numberSeq(1,12)},{name:"expireYear",selectTitle:"expireYear",option:this.numberSeq(2010,2030)}],type:"select",name:"select",error:["expireMonthError","expireYearError"]},{format:"base",title:"CCV",type:"text",name:"ccv",error:"ccvError"}];return this.state.toPrevPage?Object(b.jsx)(U,{itemData:r,totalPrice:n,discount:s}):this.state.toNextPage?Object(b.jsx)(Y,{cardData:this.state.cardData,userData:c,shippingMethod:i,itemData:r,totalPrice:n,discount:s}):Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"paymentForm",children:[Object(b.jsx)(A,{status:this.state.status},"process"),Object(b.jsx)("h2",{className:"shippingInfoTitle",children:"Payment Information"}),o.map((function(a){return Object(b.jsx)(B,{value:e.state.cardData&&e.state.cardData[a.name],maxLength:t,format:a.format,title:a.title,type:a.type,name:a.name,onChange:e.handleInputData,onBlur:e.handleBlur,autoComplete:"off",errorM:e.state.error&&e.state.error[a.error]&&e.state.error[a.error].length>1?e.state.error[a.error]:null},a.name)})),Object(b.jsx)("button",{className:"backBtn",onClick:this.handleBtnBack,children:"Back To Shipping"})]}),Object(b.jsx)(V,{status:this.state.status,isPageFinished:this.state.isPageFinished,handlePageFinished:this.handlePageFinished,itemData:r,totalPrice:n,discount:s,userData:c,shippingMethod:i},"summary")]})}}]),a}(n.a.Component),G={addressTitle:"",nameSurname:"",yourAddress:"",zipCode:"",cellphone:"",telephone:"",country:"",city:"",state:""},U=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).handleInputData=function(e){var t=e.target,a=t.name,n=t.value;r.setState((function(e){return{userData:Object(j.a)(Object(j.a)({},e.userData),{},Object(d.a)({},a,n))}}))},r.handleOptionChange=function(e){var t=e.target.value;r.setState({selectedOption:t})},r.handleBtnBack=function(){var e=r.state.toPrevPage;r.setState({toPrevPage:!e})},r.handleValidation=function(e,t){var a,n=e+"Error";switch(e){case"nameSurname":case"yourAddress":case"addressTitle":a=x(t),r.setState((function(e){return{error:Object(j.a)(Object(j.a)({},e.error),{},Object(d.a)({},n,a))}}));break;case"cellphone":case"telephone":case"zipCode":a=g(t),r.setState((function(e){return{error:Object(j.a)(Object(j.a)({},e.error),{},Object(d.a)({},n,a))}}));break;case"country":case"city":case"state":a=N(t),r.setState((function(e){return{error:Object(j.a)(Object(j.a)({},e.error),{},Object(d.a)({},n,a))}}))}},r.handleBlur=function(e){var t=e.target,a=t.name,n=t.value;return r.handleValidation(a,n)},r.checkErrorBeforeSave=function(){var e=r.state,t=e.userData,a=e.error,n={},s=!1;return Object.keys(t).forEach((function(e){var r=e+"Error";t[e].length&&!a[r]||(n=t[e].length?Object(j.a)(Object(j.a)({},n),{},Object(d.a)({},"".concat(e,"Error"),a["".concat(e,"Error")])):Object(j.a)(Object(j.a)({},n),{},Object(d.a)({},"".concat(e,"Error"),"Required")),s=!0)})),r.setState({error:n}),s},r.handlePageFinished=function(){var e=r.checkErrorBeforeSave(),t=r.state,a=t.isPageFinished,n=t.toNextPage;e||r.setState({isPageFinished:!a,toNextPage:!n})},r.state={status:1,userData:G,toPrevPage:!1,toNextPage:!1,isPageFinished:!1,selectedOption:"standard",error:{}},r}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.homepageData,r=t.itemData,n=t.totalPrice,s=t.discount;return this.state.toPrevPage?Object(b.jsx)(Z,{itemData:a}):this.state.toNextPage?Object(b.jsx)(W,{userData:this.state.userData,shippingMethod:this.state.selectedOption,itemData:r,totalPrice:n,discount:s}):Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"shippingForm",children:[Object(b.jsx)(A,{status:this.state.status},"process"),Object(b.jsx)("h2",{className:"shippingInfoTitle",children:"Shipping Information"}),[{format:"base",title:"Address Title",type:"text",name:"addressTitle",error:"addressTitleError"},{format:"base",title:"Name-Surname",type:"text",name:"nameSurname",error:"nameSurnameError"},{format:"base",title:"Your Address",type:"text",name:"yourAddress",error:"yourAddressError"},{format:"base",title:"Zip Code",type:"text",name:"zipCode",error:"zipCodeError"},{format:"select",title:[{name:"country",selectTitle:"country",option:["us","uk"]},{name:"city",selectTitle:"city",option:["new york","london"]},{name:"state",selectTitle:"state",option:["new york","london"]}],type:"select",name:"select",error:["countryError","cityError","stateError"]},{format:"base",title:"Cellphone",type:"text",name:"cellphone",error:"cellphoneError"},{format:"base",title:"Telephone",type:"text",name:"telephone",error:"telephoneError"}].map((function(t){return Object(b.jsx)(B,{format:t.format,title:t.title,type:t.type,name:t.name,onChange:e.handleInputData,onBlur:e.handleBlur,autoComplete:"off",errorM:e.state.error&&e.state.error[t.error]&&e.state.error[t.error].length>1?e.state.error[t.error]:null},t.name)})),Object(b.jsx)("h2",{className:"shippingMethod",children:"Shipping Method"}),[{type:"radio",value:"standard",info:"Standard Delivery in 4-6 business Days - Free "},{type:"radio",value:"express",info:"Express - Delivery in 2-3 business Days - $ 5.00"}].map((function(t){return Object(b.jsx)(H,{type:t.type,value:t.value,info:t.info,onClick:e.handleOptionChange,selectedOption:e.state.selectedOption},t.value)})),Object(b.jsx)("button",{className:"backBtn",onClick:this.handleBtnBack,children:"Back To Cart"})]}),Object(b.jsx)(V,{itemData:r,totalPrice:n,discount:s,userData:this.state.userData,shippingMethod:this.state.shippingMethod,status:this.state.status,isPageFinished:this.state.isPageFinished,handlePageFinished:this.handlePageFinished},"summary")]})}}]),a}(n.a.Component),Z=(a(45),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).setInitialPriceArr=function(e){var t=[];e.map((function(e){return t.push(e.price)})),r.setState({priceArr:t})},r.sumPriceArr=function(e){r.setState({totalPrice:e.reduce((function(e,t){return(Number(e)+Number(t)).toFixed(2)}),0)})},r.pushElementToArr=function(e,t,a){r.setState((function(r){var n=r.priceArr,s=r.quantityArr;return n[a]=e,s[a]=t,{priceArr:n,quantityArr:s}}),(function(){r.sumPriceArr(r.state.priceArr)}))},r.handlePageFinished=function(){var e,t,a,n,s=[],c=r.state,i=c.priceArr,o=c.quantityArr;e=i.map((function(e,t){return null===e?null:t})).filter((function(e){return null!==e})),t=r.props.itemData.map((function(t,a){return e.includes(a)?t:null})).filter((function(e){return null!==e})),a=i.filter((function(e){return null!==e})),n=o.filter((function(e){return null!==e}));for(var l=0;l<n.length;l++){var u={item:null,price:null,quantity:null};u.item=t[l],u.price=a[l],u.quantity=n[l],s.push(u)}0!==r.state.totalPrice&&r.setState({isPageFinished:!0,toNextPage:!0,data:s})},r.state={priceArr:[],quantityArr:[],totalPrice:0,discount:0,status:0,isPageFinished:!1,toNextPage:!1},r}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.totalPrice,r=t.discount,n=t.status,s=t.isPageFinished,c=t.toNextPage,i=t.quantityArr,o=t.data,l=this.props.itemData;return c?Object(b.jsx)(U,{homepageData:l,itemData:o,totalPrice:a,discount:r}):Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"cart",children:[Object(b.jsxs)("div",{className:"colName",children:[Object(b.jsx)("div",{children:"Product"}),Object(b.jsx)("div",{children:"Price"}),Object(b.jsx)("div",{children:"Quantity"}),Object(b.jsx)("div",{children:"Total Price"})]}),l.map((function(t,a){return Object(b.jsx)(E,{itemInfo:t,index:a,pushElementToArr:e.pushElementToArr})}))]}),Object(b.jsx)(V,{itemData:null,totalPrice:a,discount:r,quantityArr:i,status:n,isPageFinished:s,handlePageFinished:this.handlePageFinished})]})}}]),a}(n.a.Component)),K=a(12),X=a.n(K),J=a(16),Q=function(){function e(){Object(i.a)(this,e)}return Object(o.a)(e,[{key:"fetchCommerceAPI",value:function(){var e=Object(J.a)(X.a.mark((function e(t){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(J.a)(X.a.mark((function e(a,r){var n,s,c,i,o,l;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=new URL("https://api.chec.io/v1/products"),s={limit:t},Object.keys(s).forEach((function(e){return n.searchParams.append(e,s[e])})),c={"X-Authorization":"sk_389592ac3a3af33195735a06f2b1fef19c997a822a404",Accept:"application/json","Content-Type":"application/json"},e.next=7,fetch(n,{method:"GET",headers:c});case 7:if(!(i=e.sent)){e.next=16;break}return e.next=11,i.json();case 11:o=e.sent,l=o.data.map((function(e){return{name:e.name,categories:e.categories[0].name,description:e.description,inventory:e.inventory.available,price:e.price.raw}})),a(l),e.next=17;break;case 16:r({error:"Invalid http request"});case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),r(e.t0);case 22:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(t,a){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),_=Q,ee=(a(47),a(48),a(49),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).state={popup:!1},r}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.itemInfo,a=e.index,r="/codecommerce/img/".concat(t.categories,"/").concat(t.name,".jpg");return Object(b.jsxs)("div",{className:"card","data-index":a,onClick:this.props.popupClick,children:[Object(b.jsx)("div",{className:"imgWrapper",children:Object(b.jsx)("img",{src:r,alt:"product"})}),Object(b.jsxs)("div",{className:"name",children:[Object(b.jsx)("span",{className:"subTitle",children:"Name : "}),Object(b.jsx)("span",{children:t.name})]}),Object(b.jsxs)("div",{className:"categories",children:[Object(b.jsx)("span",{className:"subTitle",children:"Categories : "}),Object(b.jsx)("span",{children:t.categories})]}),Object(b.jsxs)("div",{className:"inventory",children:[Object(b.jsx)("span",{className:"subTitle",children:"Inventory : "}),Object(b.jsx)("span",{children:t.inventory})]}),Object(b.jsxs)("div",{className:"price",children:[Object(b.jsx)("span",{className:"subTitle",children:"Price : "}),Object(b.jsx)("span",{children:t.price})]})]})}}]),a}(r.Component)),te=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).search=function(e,t){var a=t.filter((function(t){return t.name.includes(e)||t.categories.includes(e)}));return null===e&&(a=t),a},r.state={},r}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.input,r=t.data,n=this.search(a,r);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"colName",children:"Product"}),Object(b.jsx)("div",{className:"searchResultContainer",children:n.map((function(t,a){return Object(b.jsx)(ee,{itemInfo:t,index:a,popupClick:e.props.popupClick},t.name)}))})]})}}]),a}(r.Component),ae=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleInputData=function(t){var a=t.target.value;e.setState((function(){return{inputData:a}}))},e.state={inputData:null},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"inputWrapper",children:Object(b.jsx)("input",{type:"text",className:"searchInput",onChange:this.handleInputData,placeholder:"Search for the product or categories"})}),Object(b.jsx)(te,{input:this.state.inputData,data:this.props.data,popupClick:this.props.popupClick})]})}}]),a}(n.a.Component),re=(a(50),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var r;return Object(i.a)(this,a),(r=t.call(this,e)).removeHTMLtag=function(e){return e.replace(/(<([^>]+)>)/gi,"")},r.state={},r}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.popupClose,r=e.addToCart,n=e.index,s="/codecommerce/img/".concat(t.categories,"/").concat(t.name,".jpg");return t.description=this.removeHTMLtag(t.description),Object(b.jsxs)("div",{className:"popup",children:[Object(b.jsx)(p.a,{icon:h.b,className:"timesIcon",onClick:a}),Object(b.jsx)("div",{className:"leftSection",children:Object(b.jsx)("img",{src:s,alt:"product"})}),Object(b.jsxs)("div",{className:"rightSection",children:[Object(b.jsx)("div",{className:"name",children:Object(b.jsx)("span",{className:"value",children:t.name})}),Object(b.jsxs)("div",{className:"price",children:[Object(b.jsx)("span",{className:"title",children:"Price"}),Object(b.jsx)("span",{className:"value",children:t.price})]}),Object(b.jsxs)("div",{className:"inventory",children:[Object(b.jsx)("span",{className:"title",children:"Inventory"}),Object(b.jsx)("span",{className:"value",children:t.inventory})]}),Object(b.jsxs)("div",{className:"categories",children:[Object(b.jsx)("span",{className:"title",children:"Categories"}),Object(b.jsx)("span",{className:"value",children:t.categories})]}),Object(b.jsxs)("div",{className:"description",children:[Object(b.jsx)("span",{className:"title",children:"Description"}),Object(b.jsx)("p",{className:"value",children:t.description})]}),Object(b.jsx)("div",{className:"addToCartBtn",onClick:r,"data-index":n,children:"Add To Cart"})]})]})}}]),a}(r.Component)),ne=(a(51),a(52),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.item,t="/codecommerce/img/".concat(e.categories,"/").concat(e.name,".jpg");return Object(b.jsxs)("div",{className:"itemWrapper",children:[Object(b.jsx)("div",{className:"StatusleftSection",children:Object(b.jsx)("img",{src:t,alt:"product"})}),Object(b.jsxs)("div",{className:"StatusrightSection",children:[Object(b.jsx)("div",{className:"name",children:Object(b.jsx)("span",{className:"value",children:e.name})}),Object(b.jsxs)("div",{className:"price",children:[Object(b.jsx)("span",{className:"title",children:"Price"}),Object(b.jsx)("span",{className:"value",children:e.price})]}),Object(b.jsxs)("div",{className:"inventory",children:[Object(b.jsx)("span",{className:"title",children:"Inventory"}),Object(b.jsx)("span",{className:"value",children:e.inventory})]})]})]},e.name)}}]),a}(r.Component)),se=ne,ce=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.handlePageFinished;return Object(b.jsxs)("div",{className:"cartStatus",children:[Object(b.jsxs)("h3",{children:["YOUR CART : ",t.length," "]}),t.map((function(e){return Object(b.jsx)(se,{item:e})})),Object(b.jsx)("div",{className:"goToCart",onClick:a,children:"GO TO CART"})]})}}]),a}(r.Component),ie=ce,oe=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={data:[],loading:!1,error:!1,isPageFinished:!1,popup:!1,popupItemIndex:null,cartItem:[]},e.pushElementToArr=function(t,a,r){e.setState((function(e){var n=e.priceArr,s=e.quantityArr;return n[r]=t,s[r]=a,{priceArr:n,quantityArr:s}}),(function(){e.sumPriceArr(e.state.priceArr)}))},e.handlePopupClick=function(t){var a=e.state.popup,r=t.currentTarget.dataset.index;e.setState({popup:!a,popupItemIndex:r})},e.popupClose=function(){var t=e.state.popup;e.setState({popup:!t})},e.addToCart=function(t){var a=t.currentTarget.dataset.index,r=e.state,n=r.cartItem,s=r.data;n.includes(s[a])||e.setState({cartItem:[].concat(Object(k.a)(n),[s[a]])})},e.handlePageFinished=function(){var t=e.state,a=t.cartItem,r=t.isPageFinished;a.length>=1&&e.setState({isPageFinished:!r})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),(new _).fetchCommerceAPI(25).then((function(t){t?e.setState({data:t,loading:!1}):e.setState({loading:!1})}),(function(t){console.log(t),e.setState({loading:!1,error:!0})}))}},{key:"render",value:function(){var e=this.state,t=e.data,a=e.loading,r=e.isPageFinished,n=e.popup,s=e.popupItemIndex,c=e.cartItem;return a?Object(b.jsx)("div",{class:"loader"}):n?Object(b.jsx)(re,{data:t[s],index:s,popupClose:this.popupClose,addToCart:this.addToCart}):r?Object(b.jsx)(Z,{itemData:c}):Object(b.jsxs)("div",{className:"homepageContainer",children:[Object(b.jsx)("div",{className:"result",children:Object(b.jsx)(ae,{data:t,popupClick:this.handlePopupClick})}),Object(b.jsx)(ie,{data:c,handlePageFinished:this.handlePageFinished})]})}}]),a}(r.Component),le=oe,ue=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleOptionChange=function(t){e.setState({selectedOption:t.target.value})},e.switchToNextPage=function(){var t=e.state.toNextPage;e.setState({toNextPage:!t})},e.handleSubmit=function(t){var a=e.state.toNextPage;e.setState({toNextPage:!a})},e.state={selectedOption:"login",toNextPage:!1},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.selectedOption;return e.toNextPage?Object(b.jsx)(le,{}):Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsxs)("div",{className:"formSelection",children:[Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"radio",name:"login",value:"login",checked:"login"===t,onChange:this.handleOptionChange}),"Login"]}),Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"radio",name:"createAccount",value:"createAccount",checked:"createAccount"===t,onChange:this.handleOptionChange}),"Create Account"]})]}),"login"===t?Object(b.jsx)(C,{handleSubmit:this.handleSubmit}):Object(b.jsx)(D,{handleSubmit:this.handleSubmit})]})}}]),a}(n.a.Component);var de=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)("header",{className:"App-header",children:Object(b.jsx)(ue,{})})})},je=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,54)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),r(e),n(e),s(e),c(e)}))};c.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(de,{})}),document.getElementById("root")),je()}]),[[53,1,2]]]);
//# sourceMappingURL=main.a42461b8.chunk.js.map