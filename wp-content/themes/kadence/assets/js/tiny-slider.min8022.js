var tns=function(){var t=window,e=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(t){return setTimeout(t,16)},n=window,i=n.cancelAnimationFrame||n.mozCancelAnimationFrame||function(t){clearTimeout(t)};function a(){for(var t,e,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(t=arguments[a]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function r(t){return["true","false"].indexOf(t)>=0?JSON.parse(t):t}function o(t,e,n,i){if(i)try{t.setItem(e,n)}catch(a){}return n}function u(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var l=document.documentElement;function s(t){var e="";return t.fake&&(e=l.style.overflow,t.style.background="",t.style.overflow=l.style.overflow="hidden",l.appendChild(t)),e}function c(t,e){t.fake&&(t.remove(),l.style.overflow=e,l.offsetHeight)}function f(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function d(t){return("insertRule"in t?t.cssRules:t.rules).length}function v(t,e,n){for(var i=0,a=t.length;i<a;i++)e.call(n,t[i],i)}var p="classList"in document.createElement("_"),h=p?function(t,e){return t.classList.contains(e)}:function(t,e){return t.className.indexOf(e)>=0},m=p?function(t,e){h(t,e)||t.classList.add(e)}:function(t,e){h(t,e)||(t.className+=" "+e)},g=p?function(t,e){h(t,e)&&t.classList.remove(e)}:function(t,e){h(t,e)&&(t.className=t.className.replace(e,""))};function y(t,e){return t.hasAttribute(e)}function b(t,e){return t.getAttribute(e)}function x(t){return void 0!==t.item}function C(t,e){if(t=x(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function w(t,e){if(t=x(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i=t[n].getElementsByTagName("a"),a=i.length;a--;)for(var r in e)i[a].setAttribute(r,e[r])}function M(t,e){t=x(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function T(t,e){t=x(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var a=t[i].getElementsByTagName("a"),r=a.length;r--;)for(var o=n;o--;)a[r].removeAttribute(e[o])}function E(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function A(t,e){t&&"none"!==t.style.display&&(t.style.display="none")}function L(t,e){"none"===t.style.display&&(t.style.display="")}function N(t){return"none"!==window.getComputedStyle(t).display}function B(t){if("string"==typeof t){var e=[t],n=t.charAt(0).toUpperCase()+t.substr(1);["Webkit","Moz","ms","O"].forEach((function(i){"ms"===i&&"transform"!==t||e.push(i+n)})),t=e}for(var i=document.createElement("fakeelement"),a=(t.length,0);a<t.length;a++){var r=t[a];if(void 0!==i.style[r])return r}return!1}function S(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var D=!1;try{var H=Object.defineProperty({},"passive",{get:function(){D=!0}});window.addEventListener("test",null,H)}catch(z){}var O=!!D&&{passive:!0};function R(t,e,n){for(var i in e){var a=["touchstart","touchmove"].indexOf(i)>=0&&!n&&O;t.addEventListener(i,e[i],a)}}function k(t,e){for(var n in e){var i=["touchstart","touchmove"].indexOf(n)>=0&&O;t.removeEventListener(n,e[n],i)}}function I(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){e.type=t,this.topics[t]&&this.topics[t].forEach((function(n){n(e,t)}))}}}"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var P=function(t){t=a({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],slideLabel:"Slide",ofLabel:"of",toLabel:"to",controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0,textDirection:"ltr"},t||{});var n=document,l=window,p={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},x={},D=t.useLocalStorage;if(D){var H=navigator.userAgent,O=new Date;try{(x=l.localStorage)?(x.setItem(O,O),D=x.getItem(O)==O,x.removeItem(O)):D=!1,D||(x={})}catch(z){D=!1}D&&(x.tnsApp&&x.tnsApp!==H&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach((function(t){x.removeItem(t)})),localStorage.tnsApp=H)}var W=x.tC?r(x.tC):o(x,"tC",function(){var t=document,e=u(),n=s(e),i=t.createElement("div"),a=!1;e.appendChild(i);try{for(var r,o="(10px * 10)",l=["calc"+o,"-moz-calc"+o,"-webkit-calc"+o],f=0;f<3;f++)if(r=l[f],i.style.width=r,100===i.offsetWidth){a=r.replace(o,"");break}}catch(z){}return e.fake?c(e,n):i.remove(),a}(),D),q=x.tPL?r(x.tPL):o(x,"tPL",function(){var t,e=document,n=u(),i=s(n),a=e.createElement("div"),r=e.createElement("div"),o="";a.className="tns-t-subp2",r.className="tns-t-ct";for(var l=0;l<70;l++)o+="<div></div>";return r.innerHTML=o,a.appendChild(r),n.appendChild(a),t=Math.abs(a.getBoundingClientRect().left-r.children[67].getBoundingClientRect().left)<2,n.fake?c(n,i):a.remove(),t}(),D),F=x.tMQ?r(x.tMQ):o(x,"tMQ",function(){var t,e=document,n=u(),i=s(n),a=e.createElement("div"),r=e.createElement("style"),o="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return r.type="text/css",a.className="tns-mq-test",n.appendChild(r),n.appendChild(a),r.styleSheet?r.styleSheet.cssText=o:r.appendChild(e.createTextNode(o)),t=window.getComputedStyle?window.getComputedStyle(a).position:a.currentStyle.position,n.fake?c(n,i):a.remove(),"absolute"===t}(),D),j=x.tTf?r(x.tTf):o(x,"tTf",B("transform"),D),V=x.t3D?r(x.t3D):o(x,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=u(),a=s(i),r=n.createElement("p"),o=t.length>9?"-"+t.slice(0,-9).toLowerCase()+"-":"";return o+="transform",i.insertBefore(r,null),r.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(r).getPropertyValue(o),i.fake?c(i,a):r.remove(),void 0!==e&&e.length>0&&"none"!==e}(j),D),G=x.tTDu?r(x.tTDu):o(x,"tTDu",B("transitionDuration"),D),Q=x.tTDe?r(x.tTDe):o(x,"tTDe",B("transitionDelay"),D),X=x.tADu?r(x.tADu):o(x,"tADu",B("animationDuration"),D),Y=x.tADe?r(x.tADe):o(x,"tADe",B("animationDelay"),D),K=x.tTE?r(x.tTE):o(x,"tTE",S(G,"Transition"),D),J=x.tAE?r(x.tAE):o(x,"tAE",S(X,"Animation"),D),U=l.console&&"function"==typeof l.console.warn,_=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],Z={};if(_.forEach((function(e){if("string"==typeof t[e]){var i=t[e],a=n.querySelector(i);if(Z[e]=i,!a||!a.nodeName)return void(U&&console.warn("Can't find",t[e]));t[e]=a}})),!(t.container.children.length<1)){var tt=t.responsive,et=t.nested,nt="carousel"===t.mode;if(tt){0 in tt&&(t=a(t,tt[0]),delete tt[0]);var it={};for(var at in tt){var rt=tt[at];rt="number"==typeof rt?{items:rt}:rt,it[at]=rt}tt=it,it=null}if(nt||function t(e){for(var n in e)nt||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"responsive"===n&&t(e[n])}(t),!nt){t.axis="horizontal",t.slideBy="page",t.edgePadding=!1;var ot=t.animateIn,ut=t.animateOut,lt=t.animateDelay,st=t.animateNormal}var ct,ft,dt="horizontal"===t.axis,vt=n.createElement("div"),pt=n.createElement("div"),ht=t.container,mt=ht.parentNode,gt=ht.outerHTML,yt=ht.children,bt=yt.length,xt=In(),Ct=!1;tt&&ii(),nt&&(ht.className+=" tns-vpfix");var wt,Mt,Tt,Et,At,Lt,Nt,Bt,St=t.autoWidth,Dt=Fn("fixedWidth"),Ht=Fn("edgePadding"),Ot=Fn("gutter"),Rt=Wn(),kt=Fn("center"),It=St?1:Math.floor(Fn("items")),Pt=Fn("slideBy"),zt=t.viewportMax||t.fixedWidthViewportWidth,Wt=Fn("arrowKeys"),qt=Fn("speed"),Ft=t.rewind,jt=!Ft&&t.loop,Vt=Fn("autoHeight"),Gt=Fn("controls"),Qt=Fn("controlsText"),Xt=Fn("textDirection"),Yt=Fn("nav"),Kt=Fn("touch"),Jt=Fn("mouseDrag"),Ut=Fn("autoplay"),_t=Fn("autoplayTimeout"),Zt=Fn("autoplayText"),$t=Fn("autoplayHoverPause"),te=Fn("autoplayResetOnVisibility"),ee=(Bt=document.createElement("style"),Nt&&Bt.setAttribute("media",Nt),document.querySelector("head").appendChild(Bt),Bt.sheet?Bt.sheet:Bt.styleSheet),ne=t.lazyload,ie=t.lazyloadSelector,ae=[],re=jt?(At=function(){if(St||Dt&&!zt)return bt-1;var e=Dt?"fixedWidth":"items",n=[];if((Dt||t[e]<bt)&&n.push(t[e]),tt)for(var i in tt){var a=tt[i][e];a&&(Dt||a<bt)&&n.push(a)}return n.length||n.push(0),Math.ceil(Dt?zt/Math.min.apply(null,n):Math.max.apply(null,n))}(),Lt=nt?Math.ceil((5*At-bt)/2):4*At-bt,Lt=Math.max(At,Lt),qn("edgePadding")?Lt+1:Lt):0,oe=nt?bt+2*re:bt+re,ue=!(!Dt&&!St||jt),le=Dt?Bi():null,se=!nt||!jt,ce=dt?"left":"top",fe="",de="",ve=Dt?function(){return kt&&!jt?bt-1:Math.ceil(-le/(Dt+Ot))}:St?function(){for(var t=oe;t--;)if(wt[t]>=-le)return t}:function(){return kt&&nt&&!jt?bt-1:jt||nt?Math.max(0,oe-Math.ceil(It)):oe-1},pe=On(Fn("startIndex")),he=pe,me=(Hn(),0),ge=St?null:ve(),ye=t.preventActionWhenRunning,be=t.swipeAngle,xe=!be||"?",Ce=!1,we=t.onInit,Me=new I,Te=" tns-slider tns-"+t.mode,Ee=ht.id||(Et=window.tnsId,window.tnsId=Et?Et+1:1,"tns"+window.tnsId),Ae=Fn("disable"),Le=!1,Ne=t.freezable,Be=!(!Ne||St)&&ni(),Se=!1,De={click:zi,keydown:function(t){t=Xi(t);var e=[p.LEFT,p.RIGHT].indexOf(t.keyCode);e>=0&&(0===e?Ze.disabled||zi(t,-1):$e.disabled||zi(t,1))}},He={click:function(t){if(Ce){if(ye)return;Ii()}var e=Yi(t=Xi(t));for(;e!==an&&!y(e,"data-nav");)e=e.parentNode;if(y(e,"data-nav")){var n=ln=Number(b(e,"data-nav")),i=Dt||St?n*bt/on:n*It;Pi(qe?n:Math.min(Math.ceil(i),bt-1),t),sn===n&&(hn&&Vi(),ln=-1)}},keydown:function(t){t=Xi(t);var e=n.activeElement;if(!y(e,"data-nav"))return;var i=[p.LEFT,p.RIGHT,p.ENTER,p.SPACE].indexOf(t.keyCode),a=Number(b(e,"data-nav"));i>=0&&(0===i?a>0&&Qi(nn[a-1]):1===i?a<on-1&&Qi(nn[a+1]):(ln=a,Pi(a,t)))}},Oe={mouseover:function(){hn&&(qi(),mn=!0)},mouseout:function(){mn&&(Wi(),mn=!1)}},Re={visibilitychange:function(){n.hidden?hn&&(qi(),yn=!0):yn&&(Wi(),yn=!1)}},ke={keydown:function(t){t=Xi(t);var e=[p.LEFT,p.RIGHT].indexOf(t.keyCode);e>=0&&zi(t,0===e?-1:1)}},Ie={touchstart:_i,touchmove:Zi,touchend:ta,touchcancel:ta},Pe={mousedown:_i,mousemove:Zi,mouseup:ta,mouseleave:ta},ze=qn("controls"),We=qn("nav"),qe=!!St||t.navAsThumbnails,Fe=qn("autoplay"),je=qn("touch"),Ve=qn("mouseDrag"),Ge="tns-slide-active",Qe="tns-complete",Xe={load:function(t){di(Yi(t))},error:function(t){e=Yi(t),m(e,"failed"),vi(e);var e}},Ye="force"===t.preventScrollOnTouch;if(ze)var Ke,Je,Ue=t.controlsContainer,_e=t.controlsContainer?t.controlsContainer.outerHTML:"",Ze=t.prevButton,$e=t.nextButton,tn=t.prevButton?t.prevButton.outerHTML:"",en=t.nextButton?t.nextButton.outerHTML:"";if(We)var nn,an=t.navContainer,rn=t.navContainer?t.navContainer.outerHTML:"",on=St?bt:na(),un=0,ln=-1,sn=kn(),cn=sn,fn="tns-nav-active",dn="Carousel Page ",vn=" (Current Slide)";if(Fe)var pn,hn,mn,gn,yn,bn="forward"===t.autoplayDirection?1:-1,xn=t.autoplayButton,Cn=t.autoplayButton?t.autoplayButton.outerHTML:"",wn=["<span class='tns-visually-hidden'>"," animation</span>"];if(je||Ve)var Mn,Tn,En={},An={},Ln=!1,Nn=dt?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};St||Dn(Ae||Be),j&&(ce=j,fe="translate",V?(fe+=dt?"3d(":"3d(0px, ",de=dt?", 0px, 0px)":", 0px)"):(fe+=dt?"X(":"Y(",de=")")),nt&&(ht.className=ht.className.replace("tns-vpfix","")),function(){qn("gutter");vt.className="tns-outer",pt.className="tns-inner",vt.id=Ee+"-ow",pt.id=Ee+"-iw",""===ht.id&&(ht.id=Ee);Te+=q||St?" tns-subpixel":" tns-no-subpixel",Te+=W?" tns-calc":" tns-no-calc",St&&(Te+=" tns-autowidth");Te+=" tns-"+t.axis,ht.className+=Te,nt?((ct=n.createElement("div")).id=Ee+"-mw",ct.className="tns-ovh",vt.appendChild(ct),ct.appendChild(pt)):vt.appendChild(pt);if(Vt){(ct||pt).className+=" tns-ah"}if(mt.insertBefore(vt,ht),pt.appendChild(ht),v(yt,(function(t,e){m(t,"tns-item"),t.id||(t.id=Ee+"-item"+e),!nt&&st&&m(t,st),C(t,{"aria-hidden":"true",tabindex:"-1"}),w(t,{tabindex:"-1"})})),re){for(var e=n.createDocumentFragment(),i=n.createDocumentFragment(),a=re;a--;){var r=a%bt,o=yt[r].cloneNode(!0);if(M(o,"id"),i.insertBefore(o,i.firstChild),nt){var u=yt[bt-1-r].cloneNode(!0);M(u,"id"),e.appendChild(u)}}ht.insertBefore(e,ht.firstChild),ht.appendChild(i),yt=ht.children}}(),function(){if(!nt)for(var e=pe,n=pe+Math.min(bt,It);e<n;e++){var i=yt[e];i.style.left=100*(e-pe)/It+"%",m(i,ot),g(i,st)}dt&&(q||St?(f(ee,"#"+Ee+" > .tns-item","font-size:"+l.getComputedStyle(yt[0]).fontSize+";",d(ee)),f(ee,"#"+Ee,"font-size:0;",d(ee))):nt&&v(yt,(function(t,e){t.style.marginLeft=function(t){return W?W+"("+100*t+"% / "+oe+")":100*t/oe+"%"}(e)})));if(F){if(G){var a=ct&&t.autoHeight?Yn(t.speed):"";f(ee,"#"+Ee+"-mw",a,d(ee))}a=jn(t.edgePadding,t.gutter,t.fixedWidth,t.speed,t.autoHeight),f(ee,"#"+Ee+"-iw",a,d(ee)),nt&&(a=dt&&!St?"width:"+Vn(t.fixedWidth,t.gutter,t.items)+";":"",G&&(a+=Yn(qt)),f(ee,"#"+Ee,a,d(ee))),a=dt&&!St?Gn(t.fixedWidth,t.gutter,t.items):"",t.gutter&&(a+=Qn(t.gutter)),nt||(G&&(a+=Yn(qt)),X&&(a+=Kn(qt))),a&&f(ee,"#"+Ee+" > .tns-item",a,d(ee))}else{nt&&Vt&&(ct.style[G]=qt/1e3+"s"),pt.style.cssText=jn(Ht,Ot,Dt,Vt),nt&&dt&&!St&&(ht.style.width=Vn(Dt,Ot,It));a=dt&&!St?Gn(Dt,Ot,It):"";Ot&&(a+=Qn(Ot)),a&&f(ee,"#"+Ee+" > .tns-item",a,d(ee))}if(tt&&F)for(var r in tt){r=parseInt(r);var o=tt[r],u=(a="",""),s="",c="",p="",h=St?null:Fn("items",r),y=Fn("fixedWidth",r),b=Fn("speed",r),x=Fn("edgePadding",r),C=Fn("autoHeight",r),w=Fn("gutter",r);G&&ct&&Fn("autoHeight",r)&&"speed"in o&&(u="#"+Ee+"-mw{"+Yn(b)+"}"),("edgePadding"in o||"gutter"in o)&&(s="#"+Ee+"-iw{"+jn(x,w,y,b,C)+"}"),nt&&dt&&!St&&("fixedWidth"in o||"items"in o||Dt&&"gutter"in o)&&(c="width:"+Vn(y,w,h)+";"),G&&"speed"in o&&(c+=Yn(b)),c&&(c="#"+Ee+"{"+c+"}"),("fixedWidth"in o||Dt&&"gutter"in o||!nt&&"items"in o)&&(p+=Gn(y,w,h)),"gutter"in o&&(p+=Qn(w)),!nt&&"speed"in o&&(G&&(p+=Yn(b)),X&&(p+=Kn(b))),p&&(p="#"+Ee+" > .tns-item{"+p+"}"),(a=u+s+c+p)&&ee.insertRule("@media (min-width: "+r/16+"em) {"+a+"}",ee.cssRules.length)}}(),Jn();var Bn=jt?nt?function(){var t=me,e=ge;t+=Pt,e-=Pt,Ht?(t+=1,e-=1):Dt&&(Rt+Ot)%(Dt+Ot)&&(e-=1),re&&(pe>e?pe-=bt:pe<t&&(pe+=bt))}:function(){if(pe>ge)for(;pe>=me+bt;)pe-=bt;else if(pe<me)for(;pe<=ge-bt;)pe+=bt}:function(){pe=Math.max(me,Math.min(ge,pe))},Sn=nt?function(){var t,e,n,i,a,r,o,u,l,s,c;Li(ht,""),G||!qt?(Hi(),qt&&N(ht)||Ii()):(t=ht,e=ce,n=fe,i=de,a=Si(),r=qt,o=Ii,u=Math.min(r,10),l=a.indexOf("%")>=0?"%":"px",a=a.replace(l,""),s=Number(t.style[e].replace(n,"").replace(i,"").replace(l,"")),c=(a-s)/r*u,setTimeout((function a(){r-=u,s+=c,t.style[e]=n+s+l+i,r>0?setTimeout(a,u):o()}),u)),dt||ea()}:function(){ae=[];var t={};t[K]=t[J]=Ii,k(yt[he],t),R(yt[pe],t),Oi(he,ot,ut,!0),Oi(pe,st,ot),K&&J&&qt&&N(ht)||Ii()};return{version:"2.9.2",getInfo:aa,events:Me,goTo:Pi,play:function(){Ut&&!hn&&(ji(),gn=!1)},pause:function(){hn&&(Vi(),gn=!0)},isOn:Ct,updateSliderHeight:bi,refresh:Jn,destroy:function(){if(ee.disabled=!0,ee.ownerNode&&ee.ownerNode.remove(),k(l,{resize:ti}),Wt&&k(n,ke),Ue&&k(Ue,De),an&&k(an,He),k(ht,Oe),k(ht,Re),xn&&k(xn,{click:Gi}),Ut&&clearInterval(pn),nt&&K){var e={};e[K]=Ii,k(ht,e)}Kt&&k(ht,Ie),Jt&&k(ht,Pe);var i=[gt,_e,tn,en,rn,Cn];for(var a in _.forEach((function(e,n){var a="container"===e?vt:t[e];if("object"==typeof a&&a){var r=!!a.previousElementSibling&&a.previousElementSibling,o=a.parentNode;a.outerHTML=i[n],t[e]=r?r.nextElementSibling:o.firstElementChild}})),_=ot=ut=lt=st=dt=vt=pt=ht=mt=gt=yt=bt=ft=xt=St=Dt=Ht=Ot=Rt=It=Pt=zt=Wt=qt=Ft=jt=Vt=ee=ne=wt=ae=re=oe=ue=le=se=ce=fe=de=ve=pe=he=me=ge=be=xe=Ce=we=Me=Te=Ee=Ae=Le=Ne=Be=Se=De=He=Oe=Re=ke=Ie=Pe=ze=We=qe=Fe=je=Ve=Ge=Qe=Xe=Mt=Gt=Qt=Ue=_e=Ze=$e=Ke=Je=Yt=an=rn=nn=on=un=ln=sn=cn=fn=dn=vn=Ut=_t=bn=Zt=$t=xn=Cn=te=wn=pn=hn=mn=gn=yn=En=An=Mn=Ln=Tn=Nn=Kt=Jt=null,this)"rebuild"!==a&&(this[a]=null);Ct=!1},rebuild:function(){return P(a(t,Z))}}}function Dn(t){t&&(Gt=Yt=Kt=Jt=Wt=Ut=$t=te=!1)}function Hn(){for(var t=nt?pe-re:pe;t<0;)t+=bt;return t%bt+1}function On(t){return t=t?Math.max(0,Math.min(jt?bt-1:bt-It,t)):0,nt?t+re:t}function Rn(t){for(null==t&&(t=pe),nt&&(t-=re);t<0;)t+=bt;return Math.floor(t%bt)}function kn(){var t,e=Rn();return t=qe?e:Dt||St?Math.ceil((e+1)*on/bt-1):Math.floor(e/It),!jt&&nt&&pe===ge&&(t=on-1),t}function In(){return l.innerWidth||n.documentElement.clientWidth||n.body.clientWidth}function Pn(t){return"top"===t?"afterbegin":"beforeend"}function zn(t){if(null!=t){var e,i,a=n.createElement("div");return t.appendChild(a),i=(e=a.getBoundingClientRect()).right-e.left,a.remove(),i||zn(t.parentNode)}}function Wn(){var t=Ht?2*Ht-Ot:0;return zn(mt)-t}function qn(e){if(t[e])return!0;if(tt)for(var n in tt)if(tt[n][e])return!0;return!1}function Fn(e,n){if(null==n&&(n=xt),"items"===e&&Dt)return Math.floor((Rt+Ot)/(Dt+Ot))||1;var i=t[e];if(tt)for(var a in tt)n>=parseInt(a)&&e in tt[a]&&(i=tt[a][e]);return"slideBy"===e&&"page"===i&&(i=Fn("items")),nt||"slideBy"!==e&&"items"!==e||(i=Math.floor(i)),i}function jn(t,e,n,i,a){var r="";if(void 0!==t){var o=t;e&&(o-=e),r=dt?"margin: 0 "+o+"px 0 "+t+"px;":"margin: "+t+"px 0 "+o+"px 0;"}else if(e&&!n){var u="-"+e+"px";r="margin: 0 "+(dt?u+" 0 0":"0 "+u+" 0")+";"}return!nt&&a&&G&&i&&(r+=Yn(i)),r}function Vn(t,e,n){return t?(t+e)*oe+"px":W?W+"("+100*oe+"% / "+n+")":100*oe/n+"%"}function Gn(t,e,n){var i;if(t)i=t+e+"px";else{nt||(n=Math.floor(n));var a=nt?oe:n;i=W?W+"(100% / "+a+")":100/a+"%"}return i="width:"+i,"inner"!==et?i+";":i+" !important;"}function Qn(t){var e="";!1!==t&&(e=(dt?"padding-":"margin-")+(dt?"right":"bottom")+": "+t+"px;");return e}function Xn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function Yn(t){return Xn(G,18)+"transition-duration:"+t/1e3+"s;"}function Kn(t){return Xn(X,17)+"animation-duration:"+t/1e3+"s;"}function Jn(){if(qn("autoHeight")||St||!dt){var t=ht.querySelectorAll("img");v(t,(function(t){var e=t.src;ne||(e&&e.indexOf("data:image")<0?(t.src="",R(t,Xe),m(t,"loading"),t.src=e):di(t))})),e((function(){mi(E(t),(function(){Mt=!0}))})),qn("autoHeight")&&(t=pi(pe,Math.min(pe+It-1,oe-1))),ne?Un():e((function(){mi(E(t),Un)}))}else nt&&Di(),Zn(),$n()}function Un(){if(St){var t=jt?pe:bt-1;!function e(){var n=yt[t].getBoundingClientRect().left,i=yt[t-1].getBoundingClientRect().right;Math.abs(n-i)<=1?_n():setTimeout((function(){e()}),16)}()}else _n()}function _n(){dt&&!St||(xi(),St?(le=Bi(),Ne&&(Be=ni()),ge=ve(),Dn(Ae||Be)):ea()),nt&&Di(),Zn(),$n()}function Zn(){if(Ci(),vt.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">'+t.slideLabel+' <span class="current">'+si()+"</span>  "+t.ofLabel+" "+bt+"</div>"),Tt=vt.querySelector(".tns-liveregion .current"),Fe){var e=Ut?"stop":"start";xn?C(xn,{"data-action":e}):t.autoplayButtonOutput&&(vt.insertAdjacentHTML(Pn(t.autoplayPosition),'<button type="button" data-action="'+e+'">'+wn[0]+e+wn[1]+Zt[0]+"</button>"),xn=vt.querySelector("[data-action]")),xn&&R(xn,{click:Gi}),Ut&&(ji(),$t&&R(ht,Oe),te&&R(ht,Re))}if(We){if(an)C(an,{"aria-label":"Carousel Pagination"}),v(nn=an.children,(function(t,e){C(t,{"data-nav":e,tabindex:"-1","aria-label":dn+(e+1),"aria-controls":Ee})}));else{for(var n="",i=qe?"":'style="display:none"',a=0;a<bt;a++)n+='<button type="button" data-nav="'+a+'" tabindex="-1" aria-controls="'+Ee+'" '+i+' aria-label="'+dn+(a+1)+'"></button>';n='<div class="tns-nav" role="tablist" aria-label="Carousel Pagination">'+n+"</div>",vt.insertAdjacentHTML(Pn(t.navPosition),n),an=vt.querySelector(".tns-nav"),nn=an.children}if(ia(),G){var r=G.substring(0,G.length-18).toLowerCase(),o="transition: all "+qt/1e3+"s";r&&(o="-"+r+"-"+o),f(ee,"[aria-controls^="+Ee+"-item]",o,d(ee))}C(nn[sn],{"aria-label":dn+(sn+1)+vn}),M(nn[sn],"tabindex"),m(nn[sn],fn),R(an,He)}ze&&(Ue||Ze&&$e||(vt.insertAdjacentHTML(Pn(t.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation"><button type="button" data-controls="prev" aria-controls="'+Ee+'">'+Qt[0]+'</button><button type="button" data-controls="next" aria-controls="'+Ee+'">'+Qt[1]+"</button></div>"),Ue=vt.querySelector(".tns-controls")),Ze&&$e||(Ze=Ue.children[0],$e=Ue.children[1]),t.controlsContainer&&C(Ue,{"aria-label":"Carousel Navigation"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&C([Ze,$e],{"aria-controls":Ee}),(t.controlsContainer||t.prevButton&&t.nextButton)&&(C(Ze,{"data-controls":"prev"}),C($e,{"data-controls":"next"})),Ke=Mi(Ze),Je=Mi($e),Ai(),Ue?R(Ue,De):(R(Ze,De),R($e,De))),ai()}function $n(){if(nt&&K){var e={};e[K]=Ii,R(ht,e)}Kt&&R(ht,Ie,t.preventScrollOnTouch),Jt&&R(ht,Pe),Wt&&R(n,ke),"inner"===et?Me.on("outerResized",(function(){ei(),Me.emit("innerLoaded",aa())})):(tt||Dt||St||Vt||!dt)&&R(l,{resize:ti}),Vt&&("outer"===et?Me.on("innerLoaded",hi):Ae||hi()),fi(),Ae?ui():Be&&oi(),Me.on("indexChanged",gi),"inner"===et&&Me.emit("innerLoaded",aa()),"function"==typeof we&&we(aa()),Ct=!0}function ti(t){e((function(){ei(Xi(t))}))}function ei(e){if(Ct){"outer"===et&&Me.emit("outerResized",aa(e)),xt=In();var i,a=ft,r=!1;tt&&(ii(),(i=a!==ft)&&Me.emit("newBreakpointStart",aa(e)));var o,u,l=It,s=Ae,c=Be,p=Wt,h=Gt,y=Yt,b=Kt,x=Jt,C=Ut,w=$t,M=te,T=pe;if(i){var E=Dt,N=Vt,B=Qt,S=kt,D=Zt;if(!F)var H=Ot,O=Ht}if(Wt=Fn("arrowKeys"),Gt=Fn("controls"),Yt=Fn("nav"),Kt=Fn("touch"),kt=Fn("center"),Jt=Fn("mouseDrag"),Ut=Fn("autoplay"),$t=Fn("autoplayHoverPause"),te=Fn("autoplayResetOnVisibility"),i&&(Ae=Fn("disable"),Dt=Fn("fixedWidth"),qt=Fn("speed"),Vt=Fn("autoHeight"),Qt=Fn("controlsText"),Zt=Fn("autoplayText"),_t=Fn("autoplayTimeout"),F||(Ht=Fn("edgePadding"),Ot=Fn("gutter"))),Dn(Ae),Rt=Wn(),dt&&!St||Ae||(xi(),dt||(ea(),r=!0)),(Dt||St)&&(le=Bi(),ge=ve()),(i||Dt)&&(It=Fn("items"),Pt=Fn("slideBy"),(u=It!==l)&&(Dt||St||(ge=ve()),Bn())),i&&Ae!==s&&(Ae?ui():function(){if(!Le)return;if(ee.disabled=!1,ht.className+=Te,Di(),jt)for(var t=re;t--;)nt&&L(yt[t]),L(yt[oe-t-1]);if(!nt)for(var e=pe,n=pe+bt;e<n;e++){var i=yt[e],a=e<pe+It?ot:st;i.style.left=100*(e-pe)/It+"%",m(i,a)}ri(),Le=!1}()),Ne&&(i||Dt||St)&&(Be=ni())!==c&&(Be?(Hi(Si(On(0))),oi()):(!function(){if(!Se)return;Ht&&F&&(pt.style.margin="");if(re)for(var t="tns-transparent",e=re;e--;)nt&&g(yt[e],t),g(yt[oe-e-1],t);ri(),Se=!1}(),r=!0)),Dn(Ae||Be),Ut||($t=te=!1),Wt!==p&&(Wt?R(n,ke):k(n,ke)),Gt!==h&&(Gt?Ue?L(Ue):(Ze&&L(Ze),$e&&L($e)):Ue?A(Ue):(Ze&&A(Ze),$e&&A($e))),Yt!==y&&(Yt?L(an):A(an)),Kt!==b&&(Kt?R(ht,Ie,t.preventScrollOnTouch):k(ht,Ie)),Jt!==x&&(Jt?R(ht,Pe):k(ht,Pe)),Ut!==C&&(Ut?(xn&&L(xn),hn||gn||ji()):(xn&&A(xn),hn&&Vi())),$t!==w&&($t?R(ht,Oe):k(ht,Oe)),te!==M&&(te?R(n,Re):k(n,Re)),i){if(Dt===E&&kt===S||(r=!0),Vt!==N&&(Vt||(pt.style.height="")),Gt&&Qt!==B&&(Ze.innerHTML=Qt[0],$e.innerHTML=Qt[1]),xn&&Zt!==D){var I=Ut?1:0,P=xn.innerHTML,z=P.length-D[I].length;P.substring(z)===D[I]&&(xn.innerHTML=P.substring(0,z)+Zt[I])}}else kt&&(Dt||St)&&(r=!0);if((u||Dt&&!St)&&(on=na(),ia()),(o=pe!==T)?(Me.emit("indexChanged",aa()),r=!0):u?o||gi():(Dt||St)&&(fi(),Ci(),li()),u&&!nt&&function(){for(var t=pe+Math.min(bt,It),e=oe;e--;){var n=yt[e];e>=pe&&e<t?(m(n,"tns-moving"),n.style.left=100*(e-pe)/It+"%",m(n,ot),g(n,st)):n.style.left&&(n.style.left="",m(n,st),g(n,ot)),g(n,ut)}setTimeout((function(){v(yt,(function(t){g(t,"tns-moving")}))}),300)}(),!Ae&&!Be){if(i&&!F&&(Ht===O&&Ot===H||(pt.style.cssText=jn(Ht,Ot,Dt,qt,Vt)),dt)){nt&&(ht.style.width=Vn(Dt,Ot,It));var W=Gn(Dt,Ot,It)+Qn(Ot);!function(t,e){"deleteRule"in t?t.deleteRule(e):t.removeRule(e)}(ee,d(ee)-1),f(ee,"#"+Ee+" > .tns-item",W,d(ee))}Vt&&hi(),r&&(Di(),he=pe)}i&&Me.emit("newBreakpointEnd",aa(e))}}function ni(){if(!Dt&&!St)return bt<=(kt?It-(It-1)/2:It);var t=Dt?(Dt+Ot)*bt:wt[bt],e=Ht?Rt+2*Ht:Rt+Ot;return kt&&(e-=Dt?(Rt-Dt)/2:(Rt-(wt[pe+1]-wt[pe]-Ot))/2),t<=e}function ii(){for(var t in ft=0,tt)t=parseInt(t),xt>=t&&(ft=t)}function ai(){!Ut&&xn&&A(xn),!Yt&&an&&A(an),Gt||(Ue?A(Ue):(Ze&&A(Ze),$e&&A($e)))}function ri(){Ut&&xn&&L(xn),Yt&&an&&L(an),Gt&&(Ue?L(Ue):(Ze&&L(Ze),$e&&L($e)))}function oi(){if(!Se){if(Ht&&(pt.style.margin="0px"),re)for(var t="tns-transparent",e=re;e--;)nt&&m(yt[e],t),m(yt[oe-e-1],t);ai(),Se=!0}}function ui(){if(!Le){if(ee.disabled=!0,ht.className=ht.className.replace(Te.substring(1),""),M(ht,["style"]),jt)for(var t=re;t--;)nt&&A(yt[t]),A(yt[oe-t-1]);if(dt&&nt||M(pt,["style"]),!nt)for(var e=pe,n=pe+bt;e<n;e++){var i=yt[e];M(i,["style"]),g(i,ot),g(i,st)}ai(),Le=!0}}function li(){var t=si();Tt.innerHTML!==t&&(Tt.innerHTML=t)}function si(){var e=ci(),n=e[0]+1,i=e[1]+1;return nt&&jt&&(n+1>bt&&(n-=bt),i+1>bt&&(i-=bt),n+1>bt&&(n-=bt),i+1>bt&&(i-=bt),n+=1,i+=1),n===i?n+"":n+" "+t.toLabel+" "+i}function ci(t){null==t&&(t=Si());var e,n,i,a=pe;if(kt||Ht?(St||Dt)&&(n=-(parseFloat(t)+Ht),i=n+Rt+2*Ht):St&&(n=wt[pe],i=n+Rt),St)wt.forEach((function(t,r){r<oe&&((kt||Ht)&&t<=n+.5&&(a=r),i-t>=.5&&(e=r))}));else{if(Dt){var r=Dt+Ot;kt||Ht?(a=Math.floor(n/r),e=Math.ceil(i/r-1)):e=a+Math.ceil(Rt/r)-1}else if(kt||Ht){var o=It-1;if(kt?(a-=o/2,e=pe+o/2):e=pe+o,Ht){var u=Ht*It/Rt;a-=u,e+=u}a=Math.floor(a),e=Math.ceil(e)}else e=a+It-1;a=Math.max(a,0),e=Math.min(e,oe-1)}return console.log([a,e]),[a,e]}function fi(){if(ne&&!Ae){var t=ci();t.push(ie),pi.apply(null,t).forEach((function(t){if(!h(t,Qe)){var e={};e[K]=function(t){t.stopPropagation()},R(t,e),R(t,Xe),t.src=b(t,"data-src");var n=b(t,"data-srcset");n&&(t.srcset=n),m(t,"loading")}}))}}function di(t){m(t,"loaded"),vi(t)}function vi(t){m(t,Qe),g(t,"loading"),k(t,Xe)}function pi(t,e,n){var i=[];for(n||(n="img");t<=e;)v(yt[t].querySelectorAll(n),(function(t){i.push(t)})),t++;return i}function hi(){var t=pi.apply(null,ci());e((function(){mi(t,bi)}))}function mi(t,n){return Mt?n():(t.forEach((function(e,n){!ne&&e.complete&&vi(e),h(e,Qe)&&t.splice(n,1)})),t.length?void e((function(){mi(t,n)})):n())}function gi(){fi(),Ci(),li(),Ai(),function(){if(Yt&&(sn=ln>=0?ln:kn(),ln=-1,sn!==cn)){var t=nn[cn],e=nn[sn];C(t,{tabindex:"-1","aria-label":dn+(cn+1)}),w(t,{tabindex:"-1"}),g(t,fn),C(e,{"aria-label":dn+(sn+1)+vn}),M(e,"tabindex"),T(e,"tabindex"),m(e,fn),cn=sn}}()}function yi(t,e){for(var n=[],i=t,a=Math.min(t+e,oe);i<a;i++)n.push(yt[i].offsetHeight);return Math.max.apply(null,n)}function bi(){var t=Vt?yi(pe,It):yi(re,bt),e=ct||pt;e.style.height!==t&&(e.style.height=t+"px")}function xi(){wt=[0];var t=dt?"left":"top",e=dt?"right":"bottom",n=yt[0].getBoundingClientRect()[t];v(yt,(function(i,a){a&&wt.push(i.getBoundingClientRect()[t]-n),a===oe-1&&wt.push(i.getBoundingClientRect()[e]-n)}))}function Ci(){var t=ci(),e=t[0],n=t[1];v(yt,(function(t,i){i>=e&&i<=n?y(t,"aria-hidden")&&(M(t,["aria-hidden","tabindex"]),m(t,Ge),T(t,["tabindex"])):y(t,"aria-hidden")||(C(t,{"aria-hidden":"true",tabindex:"-1"}),w(t,{tabindex:"-1"}),g(t,Ge))}))}function wi(t){return t.nodeName.toLowerCase()}function Mi(t){return"button"===wi(t)}function Ti(t){return"true"===t.getAttribute("aria-disabled")}function Ei(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function Ai(){if(Gt&&!Ft&&!jt){var t=Ke?Ze.disabled:Ti(Ze),e=Je?$e.disabled:Ti($e),n=pe<=me,i=!Ft&&pe>=ge;n&&!t&&Ei(Ke,Ze,!0),!n&&t&&Ei(Ke,Ze,!1),i&&!e&&Ei(Je,$e,!0),!i&&e&&Ei(Je,$e,!1)}}function Li(t,e){G&&(t.style[G]=e)}function Ni(t){return null==t&&(t=pe),St?(Rt-(Ht?Ot:0)-(wt[t+1]-wt[t]-Ot))/2:Dt?(Rt-Dt)/2:(It-1)/2}function Bi(){var t=Rt+(Ht?Ot:0)-(Dt?(Dt+Ot)*oe:wt[oe]);return kt&&!jt&&(t=Dt?-(Dt+Ot)*(oe-1)-Ni():Ni(oe-1)-wt[oe-1]),t>0&&(t=0),t}function Si(t){var e;if(null==t&&(t=pe),dt&&!St)if(Dt)e=-(Dt+Ot)*t,kt&&(e+=Ni());else{var n=j?oe:It;kt&&(t-=Ni()),e=100*-t/n}else e=-wt[t],kt&&St&&(e+=Ni());return ue&&(e=Math.max(e,le)),e+=!dt||St||Dt?"px":"%"}function Di(t){Li(ht,"0s"),Hi(t)}function Hi(t){null==t&&(t=Si()),"rtl"===Xt&&"-"===t.charAt(0)&&(t=t.substr(1)),ht.style[ce]=fe+t+de}function Oi(t,e,n,i){var a=t+It;jt||(a=Math.min(a,oe));for(var r=t;r<a;r++){var o=yt[r];i||(o.style.left=100*(r-pe)/It+"%"),lt&&Q&&(o.style[Q]=o.style[Y]=lt*(r-t)/1e3+"s"),g(o,e),m(o,n),i&&ae.push(o)}}function Ri(t,e){se&&Bn(),(pe!==he||e)&&(Me.emit("indexChanged",aa()),Me.emit("transitionStart",aa()),Vt&&hi(),hn&&t&&["click","keydown"].indexOf(t.type)>=0&&Vi(),Ce=!0,Sn())}function ki(t){return t.toLowerCase().replace(/-/g,"")}function Ii(t){if(nt||Ce){if(Me.emit("transitionEnd",aa(t)),!nt&&ae.length>0)for(var e=0;e<ae.length;e++){var n=ae[e];n.style.left="",Y&&Q&&(n.style[Y]="",n.style[Q]=""),g(n,ut),m(n,st)}if(!t||!nt&&t.target.parentNode===ht||t.target===ht&&ki(t.propertyName)===ki(ce)){if(!se){var i=pe;Bn(),pe!==i&&(Me.emit("indexChanged",aa()),Di())}"inner"===et&&Me.emit("innerLoaded",aa()),Ce=!1,he=pe}}}function Pi(t,e){if(!Be)if("prev"===t)zi(e,-1);else if("next"===t)zi(e,1);else{if(Ce){if(ye)return;Ii()}var n=Rn(),i=0;if("first"===t?i=-n:"last"===t?i=nt?bt-It-n:bt-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(bt-1,t))),i=t-n)),!nt&&i&&Math.abs(i)<It){var a=i>0?1:-1;i+=pe+i-bt>=me?bt*a:2*bt*a*-1}pe+=i,nt&&jt&&(pe<me&&(pe+=bt),pe>ge&&(pe-=bt)),Rn(pe)!==Rn(he)&&Ri(e)}}function zi(t,e){if(Ce){if(ye)return;Ii()}var n;if(!e){for(var i=Yi(t=Xi(t));i!==Ue&&[Ze,$e].indexOf(i)<0;)i=i.parentNode;var a=[Ze,$e].indexOf(i);a>=0&&(n=!0,e=0===a?-1:1)}if(Ft){if(pe===me&&-1===e)return void Pi("last",t);if(pe===ge&&1===e)return void Pi("first",t)}e&&(pe+=Pt*e,St&&(pe=Math.floor(pe)),Ri(n||t&&"keydown"===t.type?t:null))}function Wi(){pn=setInterval((function(){zi(null,bn)}),_t),hn=!0}function qi(){clearInterval(pn),hn=!1}function Fi(t,e){C(xn,{"data-action":t}),xn.innerHTML=wn[0]+t+wn[1]+e}function ji(){Wi(),xn&&Fi("stop",Zt[1])}function Vi(){qi(),xn&&Fi("start",Zt[0])}function Gi(){hn?(Vi(),gn=!0):(ji(),gn=!1)}function Qi(t){t.focus()}function Xi(t){return Ki(t=t||l.event)?t.changedTouches[0]:t}function Yi(t){return t.target||l.event.srcElement}function Ki(t){return t.type.indexOf("touch")>=0}function Ji(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Ui(){return r=An.y-En.y,o=An.x-En.x,e=Math.atan2(r,o)*(180/Math.PI),n=be,i=!1,(a=Math.abs(90-Math.abs(e)))>=90-n?i="horizontal":a<=n&&(i="vertical"),i===t.axis;var e,n,i,a,r,o}function _i(t){if(Ce){if(ye)return;Ii()}Ut&&hn&&qi(),Ln=!0,Tn&&(i(Tn),Tn=null);var $=Xi(t);Me.emit(Ki(t)?"touchStart":"dragStart",aa(t)),!Ki(t)&&["img","a"].indexOf(wi(Yi(t)))>=0&&Ji(t),An.x=En.x=$.clientX,An.y=En.y=$.clientY,nt&&(Mn=parseFloat(ht.style[ce].replace(fe,"")),Li(ht,"0s"))}function Zi(t){if(Ln){var $=Xi(t);An.x=$.clientX,An.y=$.clientY,nt?Tn||(Tn=e((function(){$i(t)}))):("?"===xe&&(xe=Ui()),xe&&(Ye=!0)),("boolean"!=typeof t.cancelable||t.cancelable)&&Ye&&t.preventDefault()}}function $i(t){if(xe){if(i(Tn),Ln&&(Tn=e((function(){$i(t)}))),"?"===xe&&(xe=Ui()),xe){!Ye&&Ki(t)&&(Ye=!0);try{t.type&&Me.emit(Ki(t)?"touchMove":"dragMove",aa(t))}catch(r){}var n=Mn,a=Nn(An,En);if(!dt||Dt||St)n+=a,n+="px";else n+=j?a*It*100/((Rt+Ot)*oe):100*a/(Rt+Ot),n+="%";ht.style[ce]=fe+n+de}}else Ln=!1}function ta(n){if(Ln){Tn&&(i(Tn),Tn=null),nt&&Li(ht,""),Ln=!1;var $=Xi(n);An.x=$.clientX,An.y=$.clientY;var a=Nn(An,En);if(Math.abs(a)){if(!Ki(n)){var r=Yi(n);R(r,{click:function t(e){Ji(e),k(r,{click:t})}})}nt?Tn=e((function(){if(dt&&!St){var t=-a*It/(Rt+Ot);t=a>0?Math.floor(t):Math.ceil(t),pe+=t,pe+="rtl"===Xt?-1*t:t}else{var e=-(Mn+a);if(e<=0)pe=me;else if(e>=wt[oe-1])pe=ge;else for(var i=0;i<oe&&e>=wt[i];)pe=i,e>wt[i]&&a<0&&(pe+=1),i++}Ri(n,a),Me.emit(Ki(n)?"touchEnd":"dragEnd",aa(n))})):xe&&zi(n,a>0?-1:1)}}
"auto"===t.preventScrollOnTouch&&(Ye=!1),be&&(xe="?"),Ut&&!hn&&Wi()}function ea(){(ct||pt).style.height=wt[pe+It]-wt[pe]+"px"}function na(){var t=Dt?(Dt+Ot)*bt/Rt:bt/It;return Math.min(Math.ceil(t),bt)}function ia(){if(Yt&&!qe&&on!==un){var t=un,e=on,n=L;for(un>on&&(t=on,e=un,n=A);t<e;)n(nn[t]),t++;un=on}}function aa(t){return{container:ht,slideItems:yt,navContainer:an,navItems:nn,controlsContainer:Ue,hasControls:ze,prevButton:Ze,nextButton:$e,items:It,slideBy:Pt,cloneCount:re,slideCount:bt,slideCountNew:oe,index:pe,indexCached:he,displayIndex:Hn(),navCurrentIndex:sn,navCurrentIndexCached:cn,pages:on,pagesCached:un,sheet:ee,isOn:Ct,event:t||{}}}U&&console.warn("No slides found in",t.container)};return P}();