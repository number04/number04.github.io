webpackJsonp([3],{Y5Gu:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("xssz"),s=r("i6+5"),n=r("VU/8")(a.a,s.a,!1,null,null,null);n.options.__file="pages/register.vue",t.default=n.exports},"i6+5":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login"},[r("form",{attrs:{role:"form"},on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],attrs:{type:"text",placeholder:"Email",name:"email"},domProps:{value:e.form.email},on:{input:function(t){t.target.composing||e.$set(e.form,"email",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.name,expression:"form.name"}],attrs:{type:"text",placeholder:"Full Name",name:"name"},domProps:{value:e.form.name},on:{input:function(t){t.target.composing||e.$set(e.form,"name",t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],attrs:{type:"password",placeholder:"Password",name:"password"},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}}),e._m(0)])])};a._withStripped=!0;var s={render:a,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("button",{attrs:{type:"submit"}},[t("span",[this._v("register")])])}]};t.a=s},xssz:function(e,t,r){"use strict";var a=r("Xxa5"),s=r.n(a),n=r("exGp"),o=r.n(n);t.a={auth:!1,asyncData:function(e){return e.store.dispatch("setStore")},data:function(){return{form:{email:"",name:"",password:""}}},methods:{submit:function(){var e=o()(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$axios.post("register",this.form);case 2:return e.next=4,this.$auth.loginWith("local",{data:{email:this.form.email,password:this.form.password}});case 4:this.$router.replace({name:"index"});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}}}});