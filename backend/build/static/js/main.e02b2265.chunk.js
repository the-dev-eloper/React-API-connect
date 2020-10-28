(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{14:function(e,t,n){e.exports=n(23)},19:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(9),o=n.n(s),c=(n(19),n(7)),i=n.n(c),u=n(8),l=n(3),p=n(4),d=n(6),h=n(5),m=n(13),f=n(1),v=new function e(){Object(l.a)(this,e),Object(f.h)(this,{loading:!0,isloggedIn:!1,userName:""})},b=n(12),g=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"inputField"},r.a.createElement("input",{className:"input",type:this.props.type,placeholder:this.props.placeholder,value:this.props.value,onChange:function(t){return e.props.onChange(t.target.value)}}))}}]),n}(r.a.Component),j=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"submitButton"},r.a.createElement("button",{className:"btn",disabled:this.props.disabled,onClick:function(){return e.props.onClick()}},this.props.text))}}]),n}(r.a.Component),w=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={username:"",password:"",buttonDisabled:!1},a}return Object(p.a)(n,[{key:"setInputValue",value:function(e,t){(t=t.trim()).length>12||this.setState(Object(b.a)({},e,t))}},{key:"resetform",value:function(){this.setState({username:"",password:"",buttonDisabled:!1})}},{key:"doLogin",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.username){e.next=2;break}return e.abrupt("return");case 2:if(this.state.password){e.next=4;break}return e.abrupt("return");case 4:return this.setState({buttonDisabled:!0}),e.prev=5,e.next=8,fetch("/login",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({username:this.state.username,password:this.state.password})});case 8:return t=e.sent,e.next=11,t.json();case 11:(n=e.sent)&&n.success?(v.isLoggedIn=!0,v.username=n.username):n&&!1===n.success&&(this.resetform(),alert(n.msg)),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(5),console.log(e.t0),this.resetform();case 19:case"end":return e.stop()}}),e,this,[[5,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"loginForm"},"Log In",r.a.createElement(g,{type:"text",placeholder:"Username",value:this.state.username?this.state.username:"",onChange:function(t){return e.setInputValue("username",t)}}),r.a.createElement(g,{type:"password",placeholder:"password",value:this.state.password?this.state.password:"",onChange:function(t){return e.setInputValue("password",t)}}),r.a.createElement(j,{text:"Login",disabled:this.state.buttonDisabled,onClick:function(){return e.doLogin()}}))}}]),n}(r.a.Component),y=(n(22),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/isLoggedIn",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:(n=e.sent)&&n.success?(v.loading=!1,v.isLoggedIn=!0,v.username=n.username):(v.loading=!1,v.isLoggedIn=!0),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),v.loading=!1,v.isLoggedIn=!1;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"doLogout",value:function(){var e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/logout",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:(n=e.sent)&&n.success&&(v.isLoggedIn=!1,v.username=""),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return v.loading?r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"container"},"Loading, Please wait...")):v.isLoggedIn?r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"container"},"Welcome ",v.username,r.a.createElement(j,{text:"Log out",disabled:!1,onClick:function(){return e.doLogout()}}))):r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"container"},r.a.createElement(w,null)))}}]),n}(r.a.Component)),k=Object(m.a)(y);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.e02b2265.chunk.js.map