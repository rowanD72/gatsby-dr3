"use strict";(self.webpackChunkdr3_web_dev=self.webpackChunkdr3_web_dev||[]).push([[661],{6594:function(e,t,a){var n=a(4942),r=a(885),c=a(5987),o=a(5900),i=a.n(o),l=a(7294),s=a(1118),m=a(9541),u=a(5893),p=["as","bsPrefix","variant","size","active","className"];function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var b=l.forwardRef((function(e,t){var a=e.as,n=e.bsPrefix,o=e.variant,l=e.size,d=e.active,b=e.className,v=(0,c.Z)(e,p),g=(0,m.vE)(n,"btn"),y=(0,s.FT)(f({tagName:a},v)),h=(0,r.Z)(y,2),E=h[0],w=h[1].tagName;return(0,u.jsx)(w,f(f(f({},E),v),{},{ref:t,className:i()(b,g,d&&"active",o&&"".concat(g,"-").concat(o),l&&"".concat(g,"-").concat(l),v.href&&v.disabled&&"disabled")}))}));b.displayName="Button",b.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=b},9357:function(e,t,a){var n=a(7294),r=a(5414),c=a(1597);function o(e){var t=e.description,a=e.lang,o=e.meta,i=e.title,l=(0,c.useStaticQuery)("63159454").site,s=t||l.siteMetadata.description;return n.createElement(r.Z,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:i},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:s}].concat(o)})}o.defaultProps={lang:"en",meta:[],description:""},t.Z=o},1298:function(e,t,a){a.r(t),a.d(t,{default:function(){return s}});var n=a(7294),r=a(8037),c=a(1170),o=a(9357),i=a(6594),l=a.p+"static/tablet-logo1-05344b45013cbc3dd4989d715ca220e1.png";var s=function(){var e=(0,n.useState)({name:"",email:"",textarea:""}),t=e[0],a=e[1],s=function(e){var n;a(Object.assign({},t,((n={})[e.target.name]=e.target.value,n)))};return n.createElement(c.Z,null,n.createElement(o.Z,{title:"Contact"}),n.createElement("div",{className:"row"},n.createElement("div",{className:"col-12"},n.createElement("h1",null,"Contact Us"),n.createElement("p",null,"Is your company in need of a web or mobile app? If so, please fill out the form below and let us know your company needs. We're more than glad to assist you."),n.createElement("form",{method:"post","data-netlify-honeypot":"bot-field","data-netlify":"true",action:"/Success",name:"contact",onSubmit:function(e){e.preventDefault();var a,n=e.target;fetch("/Contact",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:(a=Object.assign({"form-name":n.getAttribute("name")},t),Object.keys(a).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(a[e])})).join("&"))}).then((function(){return(0,r.navigate)(n.getAttribute("action"))})).catch((function(e){return console.log(e)}))}},n.createElement("input",{type:"hidden",name:"form-name",value:"contact"}),n.createElement("input",{type:"hidden",name:"bot-field"}),n.createElement("div",{className:"contact-section"},n.createElement("div",{className:"contact-wrapper"},n.createElement("div",{className:"form-group"},n.createElement("input",{type:"text",id:"name",value:t.name,onChange:s,placeholder:"Your Name",name:"name",className:"name",required:!0})),n.createElement("div",{className:"form-group"},n.createElement("input",{type:"text",id:"email",value:t.email,onChange:s,placeholder:"Email",name:"email",className:"email",required:!0})),n.createElement("div",{className:"form-group"},n.createElement("textarea",{name:"textarea",id:"message",value:t.textarea,onChange:s,rows:"1",placeholder:"Message",className:"message",required:!0})),n.createElement("div",null,n.createElement(i.Z,{type:"submit"},"Submit"))),n.createElement("div",{className:"contact-logo"},n.createElement("img",{src:l,alt:"tablet logo"})))))))}}}]);
//# sourceMappingURL=component---src-pages-contact-jsx-1a38705cb9d7ba285a4b.js.map