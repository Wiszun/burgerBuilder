webpackJsonp([1],{171:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(0),l=n.n(u),c=n(8),s=n(172),p=n(47),d=n(184),A=n.n(d),b=n(12),h=n(7),f=n(48),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),m=function(e){function t(){var e,n,i,u;o(this,t);for(var l=arguments.length,c=Array(l),s=0;s<l;s++)c[s]=arguments[s];return n=i=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),i.state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Mail Address"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},isSignup:!1},i.inputChangedHandler=function(e,t){var n=Object.assign({},i.state.controls,r({},t,Object.assign({},i.state.controls[t],{value:e.target.value,valid:i.checkValidity(e.target.value,i.state.controls[t].validation),touched:!0})));i.setState({controls:n})},i.submitHandler=function(e){e.preventDefault(),i.props.onAuth(i.state.controls.email.value,i.state.controls.password.value,i.state.isSignup)},i.switchAuthModeHandler=function(){i.setState(function(e){return{isSignup:!e.isSignup}})},u=n,a(i,u)}return i(t,e),g(t,[{key:"componentDidMount",value:function(){this.props.buildingBurger||"/"===this.props.authRedirectPath||this.onSetAuthRedirectPath()}},{key:"checkValidity",value:function(e,t){var n=!0;return!t||(t.required&&(n=""!==e.trim()),n)}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.controls)t.push({id:n,config:this.state.controls[n]});var r=t.map(function(t){return l.a.createElement(s.a,{key:t.id,invalid:!t.config.valid,shouldValidate:t.config.validation,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}})});this.props.loading&&(r=l.a.createElement(f.a,null));var o=null;this.props.error&&(o=l.a.createElement("p",null,this.props.error.message));var a=null;return this.props.isAuthenticated&&(a=l.a.createElement(c.c,{to:this.props.authRedirectPath})),l.a.createElement("div",{className:A.a.Auth},a,o,l.a.createElement("form",{onSubmit:this.submitHandler},r,l.a.createElement(p.a,{btnType:"Success"},"SUBMIT")),l.a.createElement(p.a,{clicked:this.switchAuthModeHandler,btnType:"Danger"},"SWITCH TO ",this.state.isSignup?"SIGNUP":"SIGNIN"," "))}}]),t}(u.Component),C=function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!==e.auth.token,buildingBurger:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}},v=function(e){return{onAuth:function(t,n,r){return e(b.b(t,n,r))},onSetAuthRedirectPath:function(){return e(b.j("/"))}}};t.default=Object(h.b)(C,v)(m)},172:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(173),i=n.n(a),u=function(e){var t=void 0,n=[i.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&n.push(i.a.Invalid),e.elementType){case"input":t=o.a.createElement("input",Object.assign({onChange:e.changed,className:n.join(" ")},e.elementConfig,{value:e.value}));break;case"textarea":t=o.a.createElement("textarea",Object.assign({onChange:e.changed,className:n.join(" ")},e.elementConfig,{value:e.value}));break;case"select":t=o.a.createElement("select",Object.assign({onChange:e.changed,className:n.join(" ")},e.elementConfig,{value:e.value}),e.elementConfig.options.map(function(e){return o.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:t=o.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value}))}return o.a.createElement("div",{className:i.a.Input},o.a.createElement("label",{className:i.a.Label},e.label),t)};t.a=u},173:function(e,t,n){var r=n(174);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(168)(r,o);r.locals&&(e.exports=r.locals)},174:function(e,t,n){t=e.exports=n(167)(!0),t.push([e.i,".Input__Input__1VROp{width:100%;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}.Input__Label__1tOSX{font-weight:700;display:block;margin-bottom:8px}.Input__InputElement__3TB0k{outline:none;border:1px solid #ccc;background-color:#fff;font:inherit;display:block;width:100%;padding:6px 10px;-webkit-box-sizing:border-box;box-sizing:border-box}.Input__InputElement__3TB0k:focus{outline:none;background-color:#ccc}.Input__Invalid__38X2d{border:1px solid red;background-color:#fda49a}","",{version:3,sources:["C:/xampp/htdocs/webdemo/burger_portfolio/src/components/UI/Input/Input.css"],names:[],mappings:"AAAA,qBACE,WAAY,AACZ,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAChC,AAED,qBACE,gBAAkB,AAClB,cAAe,AACf,iBAAmB,CACpB,AAED,4BACE,aAAc,AACd,sBAAuB,AACvB,sBAAwB,AACxB,aAAc,AACd,cAAe,AACf,WAAY,AACZ,iBAAkB,AAClB,8BAA+B,AACvB,qBAAuB,CAChC,AAED,kCACE,aAAc,AACd,qBAAuB,CACxB,AAED,uBACE,qBAAsB,AACtB,wBAA0B,CAC3B",file:"Input.css",sourcesContent:[".Input {\r\n  width: 100%;\r\n  padding: 10px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\n.Label {\r\n  font-weight: bold;\r\n  display: block;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.InputElement {\r\n  outline: none;\r\n  border: 1px solid #ccc;\r\n  background-color: white;\r\n  font: inherit;\r\n  display: block;\r\n  width: 100%;\r\n  padding: 6px 10px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\n.InputElement:focus {\r\n  outline: none;\r\n  background-color: #ccc;\r\n}\r\n\r\n.Invalid {\r\n  border: 1px solid red;\r\n  background-color: #FDA49A;\r\n}\r\n"],sourceRoot:""}]),t.locals={Input:"Input__Input__1VROp",Label:"Input__Label__1tOSX",InputElement:"Input__InputElement__3TB0k",Invalid:"Input__Invalid__38X2d"}},184:function(e,t,n){var r=n(185);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(168)(r,o);r.locals&&(e.exports=r.locals)},185:function(e,t,n){t=e.exports=n(167)(!0),t.push([e.i,".Auth__Auth__1TInt{margin:20px auto;width:80%;text-align:center;-webkit-box-shadow:0 2px 3px #ccc;box-shadow:0 2px 3px #ccc;border:1px solid #eee;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}@media (min-width:600px){.Auth__ContactData__2_pdI{width:500px}}","",{version:3,sources:["C:/xampp/htdocs/webdemo/burger_portfolio/src/containers/Auth/Auth.css"],names:[],mappings:"AAAA,mBACE,iBAAkB,AAClB,UAAW,AACX,kBAAmB,AACnB,kCAAmC,AAC3B,0BAA2B,AACnC,sBAAuB,AACvB,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAChC,AAGD,yBACE,0BACE,WAAa,CACd,CACF",file:"Auth.css",sourcesContent:[".Auth {\r\n  margin: 20px auto;\r\n  width: 80%;\r\n  text-align: center;\r\n  -webkit-box-shadow: 0 2px 3px #ccc;\r\n          box-shadow: 0 2px 3px #ccc;\r\n  border: 1px solid #eee;\r\n  padding: 10px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\n\r\n@media (min-width: 600px) {\r\n  .ContactData {\r\n    width: 500px;\r\n  }\r\n}\r\n"],sourceRoot:""}]),t.locals={Auth:"Auth__Auth__1TInt",ContactData:"Auth__ContactData__2_pdI"}}});
//# sourceMappingURL=1.cb5194b2.chunk.js.map