import{at as vt}from"./vendor.8ecd296d.js";var Qe={exports:{}};(function(Ze){(function(N){var Ce=":not(:disabled):not(.ajs-reset)",L={ENTER:13,ESC:27,F1:112,F12:123,LEFT:37,RIGHT:39,TAB:9},X={autoReset:!0,basic:!1,closable:!0,closableByDimmer:!0,invokeOnCloseOff:!1,frameless:!1,defaultFocusOff:!1,maintainFocus:!0,maximizable:!0,modal:!0,movable:!0,moveBounded:!1,overflow:!0,padding:!0,pinnable:!0,pinned:!0,preventBodyShift:!1,resizable:!0,startMaximized:!1,transition:"pulse",transitionOff:!1,tabbable:["button","[href]","input","select","textarea",'[tabindex]:not([tabindex^="-"])'+Ce].join(Ce+","),notifier:{delay:5,position:"bottom-right",closeButton:!1,classes:{base:"alertify-notifier",prefix:"ajs-",message:"ajs-message",top:"ajs-top",right:"ajs-right",bottom:"ajs-bottom",left:"ajs-left",center:"ajs-center",visible:"ajs-visible",hidden:"ajs-hidden",close:"ajs-close"}},glossary:{title:"AlertifyJS",ok:"OK",cancel:"Cancel",acccpt:"Accept",deny:"Deny",confirm:"Confirm",decline:"Decline",close:"Close",maximize:"Maximize",restore:"Restore"},theme:{input:"ajs-input",ok:"ajs-ok",cancel:"ajs-cancel"},hooks:{preinit:function(){},postinit:function(){}}},O=[];function b(n,d){n.className+=" "+d}function k(n,d){for(var a=n.className.split(" "),l=d.split(" "),i=0;i<l.length;i+=1){var f=a.indexOf(l[i]);f>-1&&a.splice(f,1)}n.className=a.join(" ")}function Te(){return N.getComputedStyle(document.body).direction==="rtl"}function ue(){return document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop}function me(){return document.documentElement&&document.documentElement.scrollLeft||document.body.scrollLeft}function R(n){for(;n.lastChild;)n.removeChild(n.lastChild)}function Z(n){if(n===null)return n;var d;if(Array.isArray(n)){d=[];for(var a=0;a<n.length;a+=1)d.push(Z(n[a]));return d}if(n instanceof Date)return new Date(n.getTime());if(n instanceof RegExp)return d=new RegExp(n.source),d.global=n.global,d.ignoreCase=n.ignoreCase,d.multiline=n.multiline,d.lastIndex=n.lastIndex,d;if(typeof n=="object"){d={};for(var l in n)n.hasOwnProperty(l)&&(d[l]=Z(n[l]));return d}return n}function ze(n,d){if(n.elements){var a=n.elements.root;a.parentNode.removeChild(a),delete n.elements,n.settings=Z(n.__settings),n.__init=d,delete n.__internal}}var he=!1;try{var $=Object.defineProperty({},"passive",{get:function(){he=!0}});N.addEventListener("test",$,$),N.removeEventListener("test",$,$)}catch{}var C=function(n,d,a,l,i){n.addEventListener(d,a,he?{capture:l,passive:i}:l===!0)},T=function(n,d,a,l,i){n.removeEventListener(d,a,he?{capture:l,passive:i}:l===!0)},W=function(){var n,d,a=!1,l={animation:"animationend",OAnimation:"oAnimationEnd oanimationend",msAnimation:"MSAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(n in l)if(document.documentElement.style[n]!==void 0){d=l[n],a=!0;break}return{type:d,supported:a}}();function A(n,d){return function(){if(arguments.length>0){for(var a=[],l=0;l<arguments.length;l+=1)a.push(arguments[l]);return a.push(n),d.apply(n,a)}return d.apply(n,[null,n])}}function Me(n,d){return{index:n,button:d,cancel:!1}}function z(n,d){if(typeof d.get(n)=="function")return d.get(n).call(d)}var Ee=function(){var n=[],d=!1,a=N.navigator.userAgent.indexOf("Safari")>-1&&N.navigator.userAgent.indexOf("Chrome")<0,l={dimmer:'<div class="ajs-dimmer"></div>',modal:'<div class="ajs-modal" tabindex="0"></div>',dialog:'<div class="ajs-dialog" tabindex="0"></div>',reset:'<button class="ajs-reset"></button>',commands:'<div class="ajs-commands"><button class="ajs-pin"></button><button class="ajs-maximize"></button><button class="ajs-close"></button></div>',header:'<div class="ajs-header"></div>',body:'<div class="ajs-body"></div>',content:'<div class="ajs-content"></div>',footer:'<div class="ajs-footer"></div>',buttons:{primary:'<div class="ajs-primary ajs-buttons"></div>',auxiliary:'<div class="ajs-auxiliary ajs-buttons"></div>'},button:'<button class="ajs-button"></button>',resizeHandle:'<div class="ajs-handle"></div>'},i={animationIn:"ajs-in",animationOut:"ajs-out",base:"alertify",basic:"ajs-basic",capture:"ajs-capture",closable:"ajs-closable",fixed:"ajs-fixed",frameless:"ajs-frameless",hidden:"ajs-hidden",maximize:"ajs-maximize",maximized:"ajs-maximized",maximizable:"ajs-maximizable",modeless:"ajs-modeless",movable:"ajs-movable",noSelection:"ajs-no-selection",noOverflow:"ajs-no-overflow",noPadding:"ajs-no-padding",pin:"ajs-pin",pinnable:"ajs-pinnable",prefix:"ajs-",resizable:"ajs-resizable",restore:"ajs-restore",shake:"ajs-shake",unpinned:"ajs-unpinned",noTransition:"ajs-no-transition"};function f(e){if(!e.__internal){x.defaults.hooks.preinit(e),delete e.__init,e.__settings||(e.__settings=Z(e.settings));var t;typeof e.setup=="function"?(t=e.setup(),t.options=t.options||{},t.focus=t.focus||{}):t={buttons:[],focus:{element:null,select:!1},options:{}},typeof e.hooks!="object"&&(e.hooks={});var s=[];if(Array.isArray(t.buttons))for(var o=0;o<t.buttons.length;o+=1){var m=t.buttons[o],h={};for(var _ in m)m.hasOwnProperty(_)&&(h[_]=m[_]);s.push(h)}var p=e.__internal={isOpen:!1,activeElement:document.body,timerIn:void 0,timerOut:void 0,buttons:s,focus:t.focus,options:{title:void 0,modal:void 0,basic:void 0,frameless:void 0,defaultFocusOff:void 0,pinned:void 0,movable:void 0,moveBounded:void 0,resizable:void 0,autoReset:void 0,closable:void 0,closableByDimmer:void 0,invokeOnCloseOff:void 0,maximizable:void 0,startMaximized:void 0,pinnable:void 0,transition:void 0,transitionOff:void 0,padding:void 0,overflow:void 0,onshow:void 0,onclosing:void 0,onclose:void 0,onfocus:void 0,onmove:void 0,onmoved:void 0,onresize:void 0,onresized:void 0,onmaximize:void 0,onmaximized:void 0,onrestore:void 0,onrestored:void 0},resetHandler:void 0,beginMoveHandler:void 0,beginResizeHandler:void 0,bringToFrontHandler:void 0,modalClickHandler:void 0,buttonsClickHandler:void 0,commandsClickHandler:void 0,transitionInHandler:void 0,transitionOutHandler:void 0,destroy:void 0},r={};r.root=document.createElement("div"),r.root.style.display="none",r.root.className=i.base+" "+i.hidden+" ",r.root.innerHTML=l.dimmer+l.modal,r.dimmer=r.root.firstChild,r.modal=r.root.lastChild,r.modal.innerHTML=l.dialog,r.dialog=r.modal.firstChild,r.dialog.innerHTML=l.reset+l.commands+l.header+l.body+l.footer+l.resizeHandle+l.reset,r.reset=[],r.reset.push(r.dialog.firstChild),r.reset.push(r.dialog.lastChild),r.commands={},r.commands.container=r.reset[0].nextSibling,r.commands.pin=r.commands.container.firstChild,r.commands.maximize=r.commands.pin.nextSibling,r.commands.close=r.commands.maximize.nextSibling,r.header=r.commands.container.nextSibling,r.body=r.header.nextSibling,r.body.innerHTML=l.content,r.content=r.body.firstChild,r.footer=r.body.nextSibling,r.footer.innerHTML=l.buttons.auxiliary+l.buttons.primary,r.resizeHandle=r.footer.nextSibling,r.buttons={},r.buttons.auxiliary=r.footer.firstChild,r.buttons.primary=r.buttons.auxiliary.nextSibling,r.buttons.primary.innerHTML=l.button,r.buttonTemplate=r.buttons.primary.firstChild,r.buttons.primary.removeChild(r.buttonTemplate);for(var I=0;I<e.__internal.buttons.length;I+=1){var M=e.__internal.buttons[I];n.indexOf(M.key)<0&&n.push(M.key),M.element=r.buttonTemplate.cloneNode(),M.element.innerHTML=M.text,typeof M.className=="string"&&M.className!==""&&b(M.element,M.className);for(var de in M.attrs)de!=="className"&&M.attrs.hasOwnProperty(de)&&M.element.setAttribute(de,M.attrs[de]);M.scope==="auxiliary"?r.buttons.auxiliary.appendChild(M.element):r.buttons.primary.appendChild(M.element)}e.elements=r,p.resetHandler=A(e,ve),p.beginMoveHandler=A(e,dt),p.beginResizeHandler=A(e,ht),p.bringToFrontHandler=A(e,je),p.modalClickHandler=A(e,ot),p.buttonsClickHandler=A(e,st),p.commandsClickHandler=A(e,Ve),p.transitionInHandler=A(e,lt),p.transitionOutHandler=A(e,rt);for(var S in p.options)t.options[S]!==void 0?e.set(S,t.options[S]):x.defaults.hasOwnProperty(S)?e.set(S,x.defaults[S]):S==="title"&&e.set(S,x.defaults.glossary[S]);typeof e.build=="function"&&e.build(),x.defaults.hooks.postinit(e)}document.body.appendChild(e.elements.root)}var c,H;function g(){c=me(),H=ue()}function u(){N.scrollTo(c,H)}function v(){for(var e=0,t=0;t<O.length;t+=1){var s=O[t];(s.isModal()||s.isMaximized())&&(e+=1)}e===0&&document.body.className.indexOf(i.noOverflow)>=0?(k(document.body,i.noOverflow),K(!1)):e>0&&document.body.className.indexOf(i.noOverflow)<0&&(K(!0),b(document.body,i.noOverflow))}var E="",B=0;function K(e){x.defaults.preventBodyShift&&(e&&document.documentElement.scrollHeight>document.documentElement.clientHeight?(B=H,E=N.getComputedStyle(document.body).top,b(document.body,i.fixed),document.body.style.top=-H+"px"):e||(H=B,document.body.style.top=E,k(document.body,i.fixed),u()))}function q(e,t,s){typeof s=="string"&&k(e.elements.root,i.prefix+s),b(e.elements.root,i.prefix+t),e.elements.root.offsetWidth}function y(e){e.get("transitionOff")?b(e.elements.root,i.noTransition):k(e.elements.root,i.noTransition)}function j(e){e.get("modal")?(k(e.elements.root,i.modeless),e.isOpen()&&(Xe(e),be(e),v())):(b(e.elements.root,i.modeless),e.isOpen()&&(Ue(e),be(e),v()))}function Y(e){e.get("basic")?b(e.elements.root,i.basic):k(e.elements.root,i.basic)}function D(e){e.get("frameless")?b(e.elements.root,i.frameless):k(e.elements.root,i.frameless)}function je(e,t){for(var s=O.indexOf(t),o=s+1;o<O.length;o+=1)if(O[o].isModal())return;return document.body.lastChild!==t.elements.root&&(document.body.appendChild(t.elements.root),O.splice(O.indexOf(t),1),O.push(t),ye(t)),!1}function Ke(e,t,s,o){switch(t){case"title":e.setHeader(o);break;case"modal":j(e);break;case"basic":Y(e);break;case"frameless":D(e);break;case"pinned":tt(e);break;case"closable":nt(e);break;case"maximizable":it(e);break;case"pinnable":et(e);break;case"movable":ut(e);break;case"resizable":ct(e);break;case"padding":o?k(e.elements.root,i.noPadding):e.elements.root.className.indexOf(i.noPadding)<0&&b(e.elements.root,i.noPadding);break;case"overflow":o?k(e.elements.root,i.noOverflow):e.elements.root.className.indexOf(i.noOverflow)<0&&b(e.elements.root,i.noOverflow);break;case"transition":q(e,o,s);break;case"transitionOff":y(e);break}typeof e.hooks.onupdate=="function"&&e.hooks.onupdate.call(e,t,s,o)}function ce(e,t,s,o,m){var h={op:void 0,items:[]};if(typeof m=="undefined"&&typeof o=="string")h.op="get",t.hasOwnProperty(o)?(h.found=!0,h.value=t[o]):(h.found=!1,h.value=void 0);else{var _;if(h.op="set",typeof o=="object"){var p=o;for(var r in p)t.hasOwnProperty(r)?(t[r]!==p[r]&&(_=t[r],t[r]=p[r],s.call(e,r,_,p[r])),h.items.push({key:r,value:p[r],found:!0})):h.items.push({key:r,value:p[r],found:!1})}else if(typeof o=="string")t.hasOwnProperty(o)?(t[o]!==m&&(_=t[o],t[o]=m,s.call(e,o,_,m)),h.items.push({key:o,value:m,found:!0})):h.items.push({key:o,value:m,found:!1});else throw new Error("args must be a string or object")}return h}function pe(e){var t;ee(e,function(s){return t=e.get("invokeOnCloseOff")!==!0&&s.invokeOnClose===!0}),!t&&e.isOpen()&&e.close()}function Ve(e,t){var s=e.srcElement||e.target;switch(s){case t.elements.commands.pin:t.isPinned()?Le(t):Ne(t);break;case t.elements.commands.maximize:t.isMaximized()?V(t):Ae(t);break;case t.elements.commands.close:pe(t);break}return!1}function Ne(e){e.set("pinned",!0)}function Le(e){e.set("pinned",!1)}function Ae(e){z("onmaximize",e),b(e.elements.root,i.maximized),e.isOpen()&&v(),z("onmaximized",e)}function V(e){z("onrestore",e),k(e.elements.root,i.maximized),e.isOpen()&&v(),z("onrestored",e)}function et(e){e.get("pinnable")?b(e.elements.root,i.pinnable):k(e.elements.root,i.pinnable)}function Pe(e){var t=me();e.elements.modal.style.marginTop=ue()+"px",e.elements.modal.style.marginLeft=t+"px",e.elements.modal.style.marginRight=-t+"px"}function we(e){var t=parseInt(e.elements.modal.style.marginTop,10),s=parseInt(e.elements.modal.style.marginLeft,10);if(e.elements.modal.style.marginTop="",e.elements.modal.style.marginLeft="",e.elements.modal.style.marginRight="",e.isOpen()){var o=0,m=0;e.elements.dialog.style.top!==""&&(o=parseInt(e.elements.dialog.style.top,10)),e.elements.dialog.style.top=o+(t-ue())+"px",e.elements.dialog.style.left!==""&&(m=parseInt(e.elements.dialog.style.left,10)),e.elements.dialog.style.left=m+(s-me())+"px"}}function be(e){!e.get("modal")&&!e.get("pinned")?Pe(e):we(e)}function tt(e){e.get("pinned")?(k(e.elements.root,i.unpinned),e.isOpen()&&we(e)):(b(e.elements.root,i.unpinned),e.isOpen()&&!e.isModal()&&Pe(e))}function it(e){e.get("maximizable")?b(e.elements.root,i.maximizable):k(e.elements.root,i.maximizable)}function nt(e){e.get("closable")?(b(e.elements.root,i.closable),gt(e)):(k(e.elements.root,i.closable),yt(e))}var ge=!1,Ie=0;function ot(e,t){if(e.timeStamp-Ie>200&&(Ie=e.timeStamp)&&!ge){var s=e.srcElement||e.target;t.get("closableByDimmer")===!0&&s===t.elements.modal&&pe(t)}ge=!1}var Se=0,J=!1;function ee(e,t){if(Date.now()-Se>200&&(Se=Date.now()))for(var s=0;s<e.__internal.buttons.length;s+=1){var o=e.__internal.buttons[s];if(!o.element.disabled&&t(o)){var m=Me(s,o);typeof e.callback=="function"&&e.callback.apply(e,[m]),m.cancel===!1&&e.close();break}}}function st(e,t){var s=e.srcElement||e.target;ee(t,function(o){return o.element===s&&(J=!0)})}function Re(e){if(J){J=!1;return}var t=O[O.length-1],s=e.keyCode;if(t.__internal.buttons.length===0&&s===L.ESC&&t.get("closable")===!0)return pe(t),!1;if(n.indexOf(s)>-1)return ee(t,function(o){return o.key===s}),!1}function We(e){var t=O[O.length-1],s=e.keyCode;if(s===L.LEFT||s===L.RIGHT){for(var o=t.__internal.buttons,m=0;m<o.length;m+=1)if(document.activeElement===o[m].element)switch(s){case L.LEFT:o[(m||o.length)-1].element.focus();return;case L.RIGHT:o[(m+1)%o.length].element.focus();return}}else if(s<L.F12+1&&s>L.F1-1&&n.indexOf(s)>-1)return e.preventDefault(),e.stopPropagation(),ee(t,function(h){return h.key===s}),!1}function ye(e,t){if(t)t.focus();else{var s=e.__internal.focus,o=s.element;switch(typeof s.element){case"number":e.__internal.buttons.length>s.element&&(e.get("basic")===!0?o=e.elements.reset[0]:o=e.__internal.buttons[s.element].element);break;case"string":o=e.elements.body.querySelector(s.element);break;case"function":o=s.element.call(e);break}(e.get("defaultFocusOff")===!0||(typeof o=="undefined"||o===null)&&e.__internal.buttons.length===0)&&(o=e.elements.reset[0]),o&&o.focus&&(o.focus(),s.select&&o.select&&o.select())}}function ve(e,t){if(!t){for(var s=O.length-1;s>-1;s-=1)if(O[s].isModal()){t=O[s];break}}if(t&&t.isModal()){var o=t.elements.reset[0],m=t.elements.reset[1],h=e.relatedTarget,_=t.elements.root.contains(h),p=e.srcElement||e.target,r;if(p===o&&!_||p===m&&h===o)return;p===m||p===document.body?r=o:p===o&&h===m?r=Be(t):p===o&&_&&(r=Be(t,!0)),ye(t,r)}}function Be(e,t){var s=[].slice.call(e.elements.dialog.querySelectorAll(X.tabbable));t&&s.reverse();for(var o=0;o<s.length;o+=1){var m=s[o];if(m.offsetParent||m.offsetWidth||m.offsetHeight||m.getClientRects().length)return m}}function Fe(e){var t=O[O.length-1];t&&e.shiftKey&&e.keyCode===L.TAB&&t.elements.reset[1].focus()}function lt(e,t){clearTimeout(t.__internal.timerIn),ye(t),J=!1,z("onfocus",t),T(t.elements.dialog,W.type,t.__internal.transitionInHandler),k(t.elements.root,i.animationIn)}function rt(e,t){clearTimeout(t.__internal.timerOut),T(t.elements.dialog,W.type,t.__internal.transitionOutHandler),se(t),fe(t),t.isMaximized()&&!t.get("startMaximized")&&V(t),typeof t.__internal.destroy=="function"&&t.__internal.destroy.apply(t)}var U=null,_e=0,Q=0,te="pageX",ie="pageY",F=null,ne=!1,oe=null;function at(e,t){var s=e[te]-_e,o=e[ie]-Q;ne&&(o-=document.body.scrollTop),t.style.left=s+"px",t.style.top=o+"px"}function ft(e,t){var s=e[te]-_e,o=e[ie]-Q;ne&&(o-=document.body.scrollTop),t.style.left=Math.min(F.maxLeft,Math.max(F.minLeft,s))+"px",ne?t.style.top=Math.min(F.maxTop,Math.max(F.minTop,o))+"px":t.style.top=Math.max(F.minTop,o)+"px"}function dt(e,t){if(w===null&&!t.isMaximized()&&t.get("movable")){var s,o=0,m=0;if(e.type==="touchstart"?(e.preventDefault(),s=e.targetTouches[0],te="clientX",ie="clientY"):e.button===0&&(s=e),s){var h=t.elements.dialog;if(b(h,i.capture),h.style.left&&(o=parseInt(h.style.left,10)),h.style.top&&(m=parseInt(h.style.top,10)),_e=s[te]-o,Q=s[ie]-m,t.isModal()?Q+=t.elements.modal.scrollTop:t.isPinned()&&(Q-=document.body.scrollTop),t.get("moveBounded")){var _=h,p=-o,r=-m;do p+=_.offsetLeft,r+=_.offsetTop;while(_=_.offsetParent);F={maxLeft:p,minLeft:-p,maxTop:document.documentElement.clientHeight-h.clientHeight-r,minTop:-r},oe=ft}else F=null,oe=at;return z("onmove",t),ne=!t.isModal()&&t.isPinned(),U=t,oe(s,h),b(document.body,i.noSelection),!1}}}function ke(e){if(U){var t;e.type==="touchmove"?(e.preventDefault(),t=e.targetTouches[0]):e.button===0&&(t=e),t&&oe(t,U.elements.dialog)}}function xe(){if(U){var e=U;U=F=null,k(document.body,i.noSelection),k(e.elements.dialog,i.capture),z("onmoved",e)}}function se(e){U=null;var t=e.elements.dialog;t.style.left=t.style.top=""}function ut(e){e.get("movable")?(b(e.elements.root,i.movable),e.isOpen()&&Ye(e)):(se(e),k(e.elements.root,i.movable),e.isOpen()&&Ge(e))}var w=null,G=Number.Nan,le=0,re=0,ae=0;function mt(e,t,s){var o=t,m=0,h=0;do m+=o.offsetLeft,h+=o.offsetTop;while(o=o.offsetParent);var _,p;s===!0?(_=e.pageX,p=e.pageY):(_=e.clientX,p=e.clientY);var r=Te();if(r&&(_=document.body.offsetWidth-_,isNaN(G)||(m=document.body.offsetWidth-m-t.offsetWidth)),t.style.height=p-h+ae+"px",t.style.width=_-m+ae+"px",!isNaN(G)){var I=Math.abs(t.offsetWidth-le)*.5;r&&(I*=-1),t.offsetWidth>le?t.style.left=G+I+"px":t.offsetWidth>=re&&(t.style.left=G-I+"px")}}function ht(e,t){if(!t.isMaximized()){var s;if(e.type==="touchstart"?(e.preventDefault(),s=e.targetTouches[0]):e.button===0&&(s=e),s){z("onresize",t),w=t,ae=t.elements.resizeHandle.offsetHeight/2;var o=t.elements.dialog;return b(o,i.capture),G=parseInt(o.style.left,10),o.style.height=o.offsetHeight+"px",o.style.minHeight=t.elements.header.offsetHeight+t.elements.footer.offsetHeight+"px",o.style.width=(le=o.offsetWidth)+"px",o.style.maxWidth!=="none"&&(o.style.minWidth=(re=o.offsetWidth)+"px"),o.style.maxWidth="none",b(document.body,i.noSelection),!1}}}function He(e){if(w){var t;e.type==="touchmove"?(e.preventDefault(),t=e.targetTouches[0]):e.button===0&&(t=e),t&&mt(t,w.elements.dialog,!w.get("modal")&&!w.get("pinned"))}}function Oe(){if(w){var e=w;w=null,k(document.body,i.noSelection),k(e.elements.dialog,i.capture),ge=!0,z("onresized",e)}}function fe(e){w=null;var t=e.elements.dialog;t.style.maxWidth==="none"&&(t.style.maxWidth=t.style.minWidth=t.style.width=t.style.height=t.style.minHeight=t.style.left="",G=Number.Nan,le=re=ae=0)}function ct(e){e.get("resizable")?(b(e.elements.root,i.resizable),e.isOpen()&&qe(e)):(fe(e),k(e.elements.root,i.resizable),e.isOpen()&&Je(e))}function De(){for(var e=0;e<O.length;e+=1){var t=O[e];t.get("autoReset")&&(se(t),fe(t))}}function pt(e){O.length===1&&(C(N,"resize",De),C(document.body,"keyup",Re),C(document.body,"keydown",We),C(document.body,"focus",ve),C(document.documentElement,"mousemove",ke),C(document.documentElement,"touchmove",ke,!1,!1),C(document.documentElement,"mouseup",xe),C(document.documentElement,"touchend",xe),C(document.documentElement,"mousemove",He),C(document.documentElement,"touchmove",He,!1,!1),C(document.documentElement,"mouseup",Oe),C(document.documentElement,"touchend",Oe)),C(e.elements.commands.container,"click",e.__internal.commandsClickHandler),C(e.elements.footer,"click",e.__internal.buttonsClickHandler),C(e.elements.reset[0],"focusin",e.__internal.resetHandler),C(e.elements.reset[0],"keydown",Fe),C(e.elements.reset[1],"focusin",e.__internal.resetHandler),J=!0,C(e.elements.dialog,W.type,e.__internal.transitionInHandler),e.get("modal")||Ue(e),e.get("resizable")&&qe(e),e.get("movable")&&Ye(e)}function bt(e){O.length===1&&(T(N,"resize",De),T(document.body,"keyup",Re),T(document.body,"keydown",We),T(document.body,"focus",ve),T(document.documentElement,"mousemove",ke),T(document.documentElement,"mouseup",xe),T(document.documentElement,"mousemove",He),T(document.documentElement,"mouseup",Oe)),T(e.elements.commands.container,"click",e.__internal.commandsClickHandler),T(e.elements.footer,"click",e.__internal.buttonsClickHandler),T(e.elements.reset[0],"focusin",e.__internal.resetHandler),T(e.elements.reset[0],"keydown",Fe),T(e.elements.reset[1],"focusin",e.__internal.resetHandler),C(e.elements.dialog,W.type,e.__internal.transitionOutHandler),e.get("modal")||Xe(e),e.get("movable")&&Ge(e),e.get("resizable")&&Je(e)}function Ue(e){C(e.elements.dialog,"focus",e.__internal.bringToFrontHandler,!0)}function Xe(e){T(e.elements.dialog,"focus",e.__internal.bringToFrontHandler,!0)}function Ye(e){C(e.elements.header,"mousedown",e.__internal.beginMoveHandler),C(e.elements.header,"touchstart",e.__internal.beginMoveHandler,!1,!1)}function Ge(e){T(e.elements.header,"mousedown",e.__internal.beginMoveHandler),T(e.elements.header,"touchstart",e.__internal.beginMoveHandler,!1,!1)}function qe(e){C(e.elements.resizeHandle,"mousedown",e.__internal.beginResizeHandler),C(e.elements.resizeHandle,"touchstart",e.__internal.beginResizeHandler,!1,!1)}function Je(e){T(e.elements.resizeHandle,"mousedown",e.__internal.beginResizeHandler),T(e.elements.resizeHandle,"touchstart",e.__internal.beginResizeHandler,!1,!1)}function gt(e){C(e.elements.modal,"click",e.__internal.modalClickHandler)}function yt(e){T(e.elements.modal,"click",e.__internal.modalClickHandler)}return{__init:f,isOpen:function(){return this.__internal.isOpen},isModal:function(){return this.elements.root.className.indexOf(i.modeless)<0},isMaximized:function(){return this.elements.root.className.indexOf(i.maximized)>-1},isPinned:function(){return this.elements.root.className.indexOf(i.unpinned)<0},maximize:function(){return this.isMaximized()||Ae(this),this},restore:function(){return this.isMaximized()&&V(this),this},pin:function(){return this.isPinned()||Ne(this),this},unpin:function(){return this.isPinned()&&Le(this),this},bringToFront:function(){return je(null,this),this},moveTo:function(e,t){if(!isNaN(e)&&!isNaN(t)){z("onmove",this);var s=this.elements.dialog,o=s,m=0,h=0;s.style.left&&(m-=parseInt(s.style.left,10)),s.style.top&&(h-=parseInt(s.style.top,10));do m+=o.offsetLeft,h+=o.offsetTop;while(o=o.offsetParent);var _=e-m,p=t-h;Te()&&(_*=-1),s.style.left=_+"px",s.style.top=p+"px",z("onmoved",this)}return this},resizeTo:function(e,t){var s=parseFloat(e),o=parseFloat(t),m=/(\d*\.\d+|\d+)%/;if(!isNaN(s)&&!isNaN(o)&&this.get("resizable")===!0){z("onresize",this),(""+e).match(m)&&(s=s/100*document.documentElement.clientWidth),(""+t).match(m)&&(o=o/100*document.documentElement.clientHeight);var h=this.elements.dialog;h.style.maxWidth!=="none"&&(h.style.minWidth=(re=h.offsetWidth)+"px"),h.style.maxWidth="none",h.style.minHeight=this.elements.header.offsetHeight+this.elements.footer.offsetHeight+"px",h.style.width=s+"px",h.style.height=o+"px",z("onresized",this)}return this},setting:function(e,t){var s=this,o=ce(this,this.__internal.options,function(p,r,I){Ke(s,p,r,I)},e,t);if(o.op==="get")return o.found?o.value:typeof this.settings!="undefined"?ce(this,this.settings,this.settingUpdated||function(){},e,t).value:void 0;if(o.op==="set"){if(o.items.length>0)for(var m=this.settingUpdated||function(){},h=0;h<o.items.length;h+=1){var _=o.items[h];!_.found&&typeof this.settings!="undefined"&&ce(this,this.settings,m,_.key,_.value)}return this}},set:function(e,t){return this.setting(e,t),this},get:function(e){return this.setting(e)},setHeader:function(e){return typeof e=="string"?(R(this.elements.header),this.elements.header.innerHTML=e):e instanceof N.HTMLElement&&this.elements.header.firstChild!==e&&(R(this.elements.header),this.elements.header.appendChild(e)),this},setContent:function(e){return typeof e=="string"?(R(this.elements.content),this.elements.content.innerHTML=e):e instanceof N.HTMLElement&&this.elements.content.firstChild!==e&&(R(this.elements.content),this.elements.content.appendChild(e)),this},showModal:function(e){return this.show(!0,e)},show:function(e,t){if(f(this),this.__internal.isOpen){se(this),fe(this),b(this.elements.dialog,i.shake);var o=this;setTimeout(function(){k(o.elements.dialog,i.shake)},200)}else{if(this.__internal.isOpen=!0,O.push(this),x.defaults.maintainFocus&&(this.__internal.activeElement=document.activeElement),document.body.hasAttribute("tabindex")||document.body.setAttribute("tabindex",d="0"),typeof this.prepare=="function"&&this.prepare(),pt(this),e!==void 0&&this.set("modal",e),g(),v(),typeof t=="string"&&t!==""&&(this.__internal.className=t,b(this.elements.root,t)),this.get("startMaximized")?this.maximize():this.isMaximized()&&V(this),be(this),this.elements.root.removeAttribute("style"),k(this.elements.root,i.animationOut),b(this.elements.root,i.animationIn),clearTimeout(this.__internal.timerIn),this.__internal.timerIn=setTimeout(this.__internal.transitionInHandler,W.supported?1e3:100),a){var s=this.elements.root;s.style.display="none",setTimeout(function(){s.style.display="block"},0)}this.elements.root.offsetWidth,k(this.elements.root,i.hidden),u(),typeof this.hooks.onshow=="function"&&this.hooks.onshow.call(this),z("onshow",this)}return this},close:function(){return this.__internal.isOpen&&z("onclosing",this)!==!1&&(bt(this),k(this.elements.root,i.animationIn),b(this.elements.root,i.animationOut),clearTimeout(this.__internal.timerOut),this.__internal.timerOut=setTimeout(this.__internal.transitionOutHandler,W.supported?1e3:100),b(this.elements.root,i.hidden),this.elements.modal.offsetWidth,x.defaults.maintainFocus&&this.__internal.activeElement&&(this.__internal.activeElement.focus(),this.__internal.activeElement=null),typeof this.__internal.className!="undefined"&&this.__internal.className!==""&&k(this.elements.root,this.__internal.className),typeof this.hooks.onclose=="function"&&this.hooks.onclose.call(this),z("onclose",this),O.splice(O.indexOf(this),1),this.__internal.isOpen=!1,v()),!O.length&&d==="0"&&document.body.removeAttribute("tabindex"),this},closeOthers:function(){return x.closeAll(this),this},destroy:function(){return this.__internal&&(this.__internal.isOpen?(this.__internal.destroy=function(){ze(this,f)},this.close()):this.__internal.destroy||ze(this,f)),this}}}(),P=function(){var n,d=[],a=X.notifier.classes,l=a.base;function i(u){if(!u.__internal){u.__internal={position:x.defaults.notifier.position,delay:x.defaults.notifier.delay},n=document.createElement("DIV");var v="transitionOff"in X.notifier?X.notifier.transitionOff:X.transitionOff;v&&(l=a.base+" ajs-no-transition"),H(u)}n.parentNode!==document.body&&document.body.appendChild(n)}function f(u){u.__internal.pushed=!0,d.push(u)}function c(u){d.splice(d.indexOf(u),1),u.__internal.pushed=!1}function H(u){switch(n.className=l,u.__internal.position){case"top-right":b(n,a.top+" "+a.right);break;case"top-left":b(n,a.top+" "+a.left);break;case"top-center":b(n,a.top+" "+a.center);break;case"bottom-left":b(n,a.bottom+" "+a.left);break;case"bottom-center":b(n,a.bottom+" "+a.center);break;default:case"bottom-right":b(n,a.bottom+" "+a.right);break}}function g(u,v){function E(y,j){(!j.__internal.closeButton||y.target.getAttribute("data-close")==="true")&&j.dismiss(!0)}function B(y,j){T(j.element,W.type,B),n.removeChild(j.element)}function K(y){return y.__internal||(y.__internal={pushed:!1,delay:void 0,timer:void 0,clickHandler:void 0,transitionEndHandler:void 0,transitionTimeout:void 0},y.__internal.clickHandler=A(y,E),y.__internal.transitionEndHandler=A(y,B)),y}function q(y){clearTimeout(y.__internal.timer),clearTimeout(y.__internal.transitionTimeout)}return K({element:u,push:function(y,j){if(!this.__internal.pushed){f(this),q(this);var Y,D;switch(arguments.length){case 0:D=this.__internal.delay;break;case 1:typeof y=="number"?D=y:(Y=y,D=this.__internal.delay);break;case 2:Y=y,D=j;break}return this.__internal.closeButton=x.defaults.notifier.closeButton,typeof Y!="undefined"&&this.setContent(Y),P.__internal.position.indexOf("top")<0?n.appendChild(this.element):n.insertBefore(this.element,n.firstChild),this.element.offsetWidth,b(this.element,a.visible),C(this.element,"click",this.__internal.clickHandler),this.delay(D)}return this},ondismiss:function(){},callback:v,dismiss:function(y){return this.__internal.pushed&&(q(this),typeof this.ondismiss=="function"&&this.ondismiss.call(this)===!1||(T(this.element,"click",this.__internal.clickHandler),typeof this.element!="undefined"&&this.element.parentNode===n&&(this.__internal.transitionTimeout=setTimeout(this.__internal.transitionEndHandler,W.supported?1e3:100),k(this.element,a.visible),typeof this.callback=="function"&&this.callback.call(this,y)),c(this))),this},delay:function(y){if(q(this),this.__internal.delay=typeof y!="undefined"&&!isNaN(+y)?+y:P.__internal.delay,this.__internal.delay>0){var j=this;this.__internal.timer=setTimeout(function(){j.dismiss()},this.__internal.delay*1e3)}return this},setContent:function(y){if(typeof y=="string"?(R(this.element),this.element.innerHTML=y):y instanceof N.HTMLElement&&this.element.firstChild!==y&&(R(this.element),this.element.appendChild(y)),this.__internal.closeButton){var j=document.createElement("span");b(j,a.close),j.setAttribute("data-close",!0),this.element.appendChild(j)}return this},dismissOthers:function(){return P.dismissAll(this),this}})}return{setting:function(u,v){if(i(this),typeof v=="undefined")return this.__internal[u];switch(u){case"position":this.__internal.position=v,H(this);break;case"delay":this.__internal.delay=v;break}return this},set:function(u,v){return this.setting(u,v),this},get:function(u){return this.setting(u)},create:function(u,v){i(this);var E=document.createElement("div");return E.className=a.message+(typeof u=="string"&&u!==""?" "+a.prefix+u:""),g(E,v)},dismissAll:function(u){for(var v=d.slice(0),E=0;E<v.length;E+=1){var B=v[E];(u===void 0||u!==B)&&B.dismiss()}}}}();function $e(){var n={};function d(i,f){for(var c in f)f.hasOwnProperty(c)&&(i[c]=f[c]);return i}function a(i){var f=n[i].dialog;return f&&typeof f.__init=="function"&&f.__init(f),f}function l(i,f,c,H){var g={dialog:null,factory:f};return H!==void 0&&(g.factory=function(){return d(new n[H].factory,new f)}),c||(g.dialog=d(new g.factory,Ee)),n[i]=g}return{defaults:X,dialog:function(i,f,c,H){if(typeof f!="function")return a(i);if(this.hasOwnProperty(i))throw new Error("alertify.dialog: name already exists");var g=l(i,f,c,H);c?this[i]=function(){if(arguments.length===0)return g.dialog;var u=d(new g.factory,Ee);return u&&typeof u.__init=="function"&&u.__init(u),u.main.apply(u,arguments),u.show.apply(u)}:this[i]=function(){if(g.dialog&&typeof g.dialog.__init=="function"&&g.dialog.__init(g.dialog),arguments.length===0)return g.dialog;var u=g.dialog;return u.main.apply(g.dialog,arguments),u.show.apply(g.dialog)}},closeAll:function(i){for(var f=O.slice(0),c=0;c<f.length;c+=1){var H=f[c];(i===void 0||i!==H)&&H.close()}},setting:function(i,f,c){if(i==="notifier")return P.setting(f,c);var H=a(i);if(H)return H.setting(f,c)},set:function(i,f,c){return this.setting(i,f,c)},get:function(i,f){return this.setting(i,f)},notify:function(i,f,c,H){return P.create(f,H).push(i,c)},message:function(i,f,c){return P.create(null,c).push(i,f)},success:function(i,f,c){return P.create("success",c).push(i,f)},error:function(i,f,c){return P.create("error",c).push(i,f)},warning:function(i,f,c){return P.create("warning",c).push(i,f)},dismissAll:function(){P.dismissAll()}}}var x=new $e;x.dialog("alert",function(){return{main:function(n,d,a){var l,i,f;switch(arguments.length){case 1:i=n;break;case 2:typeof d=="function"?(i=n,f=d):(l=n,i=d);break;case 3:l=n,i=d,f=a;break}return this.set("title",l),this.set("message",i),this.set("onok",f),this},setup:function(){return{buttons:[{text:x.defaults.glossary.ok,key:L.ESC,invokeOnClose:!0,className:x.defaults.theme.ok}],focus:{element:0,select:!1},options:{maximizable:!1,resizable:!1}}},build:function(){},prepare:function(){},setMessage:function(n){this.setContent(n)},settings:{message:void 0,onok:void 0,label:void 0},settingUpdated:function(n,d,a){switch(n){case"message":this.setMessage(a);break;case"label":this.__internal.buttons[0].element&&(this.__internal.buttons[0].element.innerHTML=a);break}},callback:function(n){if(typeof this.get("onok")=="function"){var d=this.get("onok").call(this,n);typeof d!="undefined"&&(n.cancel=!d)}}}}),x.dialog("confirm",function(){var n={timer:null,index:null,text:null,duration:null,task:function(l,i){if(i.isOpen()){if(i.__internal.buttons[n.index].element.innerHTML=n.text+" (&#8207;"+n.duration+"&#8207;) ",n.duration-=1,n.duration===-1){d(i);var f=i.__internal.buttons[n.index],c=Me(n.index,f);typeof i.callback=="function"&&i.callback.apply(i,[c]),c.close!==!1&&i.close()}}else d(i)}};function d(l){n.timer!==null&&(clearInterval(n.timer),n.timer=null,l.__internal.buttons[n.index].element.innerHTML=n.text)}function a(l,i,f){d(l),n.duration=f,n.index=i,n.text=l.__internal.buttons[i].element.innerHTML,n.timer=setInterval(A(l,n.task),1e3),n.task(null,l)}return{main:function(l,i,f,c){var H,g,u,v;switch(arguments.length){case 1:g=l;break;case 2:g=l,u=i;break;case 3:g=l,u=i,v=f;break;case 4:H=l,g=i,u=f,v=c;break}return this.set("title",H),this.set("message",g),this.set("onok",u),this.set("oncancel",v),this},setup:function(){return{buttons:[{text:x.defaults.glossary.ok,key:L.ENTER,className:x.defaults.theme.ok},{text:x.defaults.glossary.cancel,key:L.ESC,invokeOnClose:!0,className:x.defaults.theme.cancel}],focus:{element:0,select:!1},options:{maximizable:!1,resizable:!1}}},build:function(){},prepare:function(){},setMessage:function(l){this.setContent(l)},settings:{message:null,labels:null,onok:null,oncancel:null,defaultFocus:null,reverseButtons:null},settingUpdated:function(l,i,f){switch(l){case"message":this.setMessage(f);break;case"labels":"ok"in f&&this.__internal.buttons[0].element&&(this.__internal.buttons[0].text=f.ok,this.__internal.buttons[0].element.innerHTML=f.ok),"cancel"in f&&this.__internal.buttons[1].element&&(this.__internal.buttons[1].text=f.cancel,this.__internal.buttons[1].element.innerHTML=f.cancel);break;case"reverseButtons":f===!0?this.elements.buttons.primary.appendChild(this.__internal.buttons[0].element):this.elements.buttons.primary.appendChild(this.__internal.buttons[1].element);break;case"defaultFocus":this.__internal.focus.element=f==="ok"?0:1;break}},callback:function(l){d(this);var i;switch(l.index){case 0:typeof this.get("onok")=="function"&&(i=this.get("onok").call(this,l),typeof i!="undefined"&&(l.cancel=!i));break;case 1:typeof this.get("oncancel")=="function"&&(i=this.get("oncancel").call(this,l),typeof i!="undefined"&&(l.cancel=!i));break}},autoOk:function(l){return a(this,0,l),this},autoCancel:function(l){return a(this,1,l),this}}}),x.dialog("prompt",function(){var n=document.createElement("INPUT"),d=document.createElement("P");return{main:function(a,l,i,f,c){var H,g,u,v,E;switch(arguments.length){case 1:g=a;break;case 2:g=a,u=l;break;case 3:g=a,u=l,v=i;break;case 4:g=a,u=l,v=i,E=f;break;case 5:H=a,g=l,u=i,v=f,E=c;break}return this.set("title",H),this.set("message",g),this.set("value",u),this.set("onok",v),this.set("oncancel",E),this},setup:function(){return{buttons:[{text:x.defaults.glossary.ok,key:L.ENTER,className:x.defaults.theme.ok},{text:x.defaults.glossary.cancel,key:L.ESC,invokeOnClose:!0,className:x.defaults.theme.cancel}],focus:{element:n,select:!0},options:{maximizable:!1,resizable:!1}}},build:function(){n.className=x.defaults.theme.input,n.setAttribute("type","text"),n.value=this.get("value"),this.elements.content.appendChild(d),this.elements.content.appendChild(n)},prepare:function(){},setMessage:function(a){typeof a=="string"?(R(d),d.innerHTML=a):a instanceof N.HTMLElement&&d.firstChild!==a&&(R(d),d.appendChild(a))},settings:{message:void 0,labels:void 0,onok:void 0,oncancel:void 0,value:"",type:"text",reverseButtons:void 0},settingUpdated:function(a,l,i){switch(a){case"message":this.setMessage(i);break;case"value":n.value=i;break;case"type":switch(i){case"text":case"color":case"date":case"datetime-local":case"email":case"month":case"number":case"password":case"search":case"tel":case"time":case"week":n.type=i;break;default:n.type="text";break}break;case"labels":i.ok&&this.__internal.buttons[0].element&&(this.__internal.buttons[0].element.innerHTML=i.ok),i.cancel&&this.__internal.buttons[1].element&&(this.__internal.buttons[1].element.innerHTML=i.cancel);break;case"reverseButtons":i===!0?this.elements.buttons.primary.appendChild(this.__internal.buttons[0].element):this.elements.buttons.primary.appendChild(this.__internal.buttons[1].element);break}},callback:function(a){var l;switch(a.index){case 0:this.settings.value=n.value,typeof this.get("onok")=="function"&&(l=this.get("onok").call(this,a,this.settings.value),typeof l!="undefined"&&(a.cancel=!l));break;case 1:typeof this.get("oncancel")=="function"&&(l=this.get("oncancel").call(this,a),typeof l!="undefined"&&(a.cancel=!l)),a.cancel||(n.value=this.settings.value);break}}}}),Ze.exports=x})(typeof window!="undefined"?window:vt)})(Qe);var kt=Qe.exports;export{kt as A};
