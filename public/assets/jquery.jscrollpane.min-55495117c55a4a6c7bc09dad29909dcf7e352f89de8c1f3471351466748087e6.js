!function(t,e,n){t.fn.jScrollPane=function(o){function i(o,i){function s(e){var i,a,l,u,d,f,g=!1,v=!1;if(O=e,V===n)d=o.scrollTop(),f=o.scrollLeft(),o.css({overflow:"hidden",padding:0}),G=o.innerWidth()+bt,N=o.innerHeight(),o.width(G),V=t('<div class="jspPane" />').css("padding",mt).append(o.children()),q=t('<div class="jspContainer" />').css({width:G+"px",height:N+"px"}).append(V).appendTo(o);else{if(o.css("width",""),g=O.stickToBottom&&H(),v=O.stickToRight&&S(),u=o.innerWidth()+bt!=G||o.outerHeight()!=N,u&&(G=o.innerWidth()+bt,N=o.innerHeight(),q.css({width:G+"px",height:N+"px"})),!u&&wt==E&&V.outerHeight()==K)return void o.width(G);wt=E,V.css("width",""),o.width(G),q.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()}V.css("overflow","auto"),E=e.contentWidth?e.contentWidth:V[0].scrollWidth,K=V[0].scrollHeight,V.css("overflow",""),Q=E/G,U=K/N,$=U>1,J=Q>1,J||$?(o.addClass("jspScrollable"),i=O.maintainPosition&&(tt||ot),i&&(a=D(),l=x()),r(),c(),p(),i&&(T(v?E-G:a,!1),C(g?K-N:l,!1)),Y(),P(),F(),O.enableKeyboardNavigation&&M(),O.clickOnTrack&&h(),R(),O.hijackInternalLinks&&I()):(o.removeClass("jspScrollable"),V.css({top:0,left:0,width:q.width()-bt}),A(),z(),X(),j()),O.autoReinitialise&&!vt?vt=setInterval(function(){s(O)},O.autoReinitialiseDelay):!O.autoReinitialise&&vt&&clearInterval(vt),d&&o.scrollTop(0)&&C(d,!1),f&&o.scrollLeft(0)&&T(f,!1),o.trigger("jsp-initialised",[J||$])}function r(){$&&(q.append(t('<div class="jspVerticalBar" />').append(t('<div class="jspCap jspCapTop" />'),t('<div class="jspTrack" />').append(t('<div class="jspDrag" />').append(t('<div class="jspDragTop" />'),t('<div class="jspDragBottom" />'))),t('<div class="jspCap jspCapBottom" />'))),it=q.find(">.jspVerticalBar"),st=it.find(">.jspTrack"),Z=st.find(">.jspDrag"),O.showArrows&&(lt=t('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp",d(0,-1)).bind("click.jsp",W),pt=t('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp",d(0,1)).bind("click.jsp",W),O.arrowScrollOnHover&&(lt.bind("mouseover.jsp",d(0,-1,lt)),pt.bind("mouseover.jsp",d(0,1,pt))),u(st,O.verticalArrowPositions,lt,pt)),at=N,q.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function(){at-=t(this).outerHeight()}),Z.hover(function(){Z.addClass("jspHover")},function(){Z.removeClass("jspHover")}).bind("mousedown.jsp",function(e){t("html").bind("dragstart.jsp selectstart.jsp",W),Z.addClass("jspActive");var n=e.pageY-Z.position().top;return t("html").bind("mousemove.jsp",function(t){v(t.pageY-n,!1)}).bind("mouseup.jsp mouseleave.jsp",g),!1}),a())}function a(){st.height(at+"px"),tt=0,rt=O.verticalGutter+st.outerWidth(),V.width(G-rt-bt);try{0===it.position().left&&V.css("margin-left",rt+"px")}catch(t){}}function c(){J&&(q.append(t('<div class="jspHorizontalBar" />').append(t('<div class="jspCap jspCapLeft" />'),t('<div class="jspTrack" />').append(t('<div class="jspDrag" />').append(t('<div class="jspDragLeft" />'),t('<div class="jspDragRight" />'))),t('<div class="jspCap jspCapRight" />'))),ut=q.find(">.jspHorizontalBar"),dt=ut.find(">.jspTrack"),et=dt.find(">.jspDrag"),O.showArrows&&(jt=t('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp",d(-1,0)).bind("click.jsp",W),gt=t('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp",d(1,0)).bind("click.jsp",W),O.arrowScrollOnHover&&(jt.bind("mouseover.jsp",d(-1,0,jt)),gt.bind("mouseover.jsp",d(1,0,gt))),u(dt,O.horizontalArrowPositions,jt,gt)),et.hover(function(){et.addClass("jspHover")},function(){et.removeClass("jspHover")}).bind("mousedown.jsp",function(e){t("html").bind("dragstart.jsp selectstart.jsp",W),et.addClass("jspActive");var n=e.pageX-et.position().left;return t("html").bind("mousemove.jsp",function(t){b(t.pageX-n,!1)}).bind("mouseup.jsp mouseleave.jsp",g),!1}),ft=q.innerWidth(),l())}function l(){q.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function(){ft-=t(this).outerWidth()}),dt.width(ft+"px"),ot=0}function p(){if(J&&$){var e=dt.outerHeight(),n=st.outerWidth();at-=e,t(ut).find(">.jspCap:visible,>.jspArrow").each(function(){ft+=t(this).outerWidth()}),ft-=n,N-=n,G-=e,dt.parent().append(t('<div class="jspCorner" />').css("width",e+"px")),a(),l()}J&&V.width(q.outerWidth()-bt+"px"),K=V.outerHeight(),U=K/N,J&&(ht=Math.ceil(1/Q*ft),ht>O.horizontalDragMaxWidth?ht=O.horizontalDragMaxWidth:ht<O.horizontalDragMinWidth&&(ht=O.horizontalDragMinWidth),et.width(ht+"px"),nt=ft-ht,w(ot)),$&&(ct=Math.ceil(1/U*at),ct>O.verticalDragMaxHeight?ct=O.verticalDragMaxHeight:ct<O.verticalDragMinHeight&&(ct=O.verticalDragMinHeight),Z.height(ct+"px"),_=at-ct,m(tt))}function u(t,e,n,o){var i,s="before",r="after";"os"==e&&(e=/Mac/.test(navigator.platform)?"after":"split"),e==s?r=e:e==r&&(s=e,i=n,n=o,o=i),t[s](n)[r](o)}function d(t,e,n){return function(){return f(t,e,this,n),this.blur(),!1}}function f(e,n,o,i){o=t(o).addClass("jspActive");var s,r,a=!0,c=function(){0!==e&&kt.scrollByX(e*O.arrowButtonSpeed),0!==n&&kt.scrollByY(n*O.arrowButtonSpeed),r=setTimeout(c,a?O.initialDelay:O.arrowRepeatFreq),a=!1};c(),s=i?"mouseout.jsp":"mouseup.jsp",i=i||t("html"),i.bind(s,function(){o.removeClass("jspActive"),r&&clearTimeout(r),r=null,i.unbind(s)})}function h(){j(),$&&st.bind("mousedown.jsp",function(e){if(e.originalTarget===n||e.originalTarget==e.currentTarget){var o,i=t(this),s=i.offset(),r=e.pageY-s.top-tt,a=!0,c=function(){var t=i.offset(),n=e.pageY-t.top-ct/2,s=N*O.scrollPagePercent,p=_*s/(K-N);if(0>r)tt-p>n?kt.scrollByY(-s):v(n);else{if(!(r>0))return void l();n>tt+p?kt.scrollByY(s):v(n)}o=setTimeout(c,a?O.initialDelay:O.trackClickRepeatFreq),a=!1},l=function(){o&&clearTimeout(o),o=null,t(document).unbind("mouseup.jsp",l)};return c(),t(document).bind("mouseup.jsp",l),!1}}),J&&dt.bind("mousedown.jsp",function(e){if(e.originalTarget===n||e.originalTarget==e.currentTarget){var o,i=t(this),s=i.offset(),r=e.pageX-s.left-ot,a=!0,c=function(){var t=i.offset(),n=e.pageX-t.left-ht/2,s=G*O.scrollPagePercent,p=nt*s/(E-G);if(0>r)ot-p>n?kt.scrollByX(-s):b(n);else{if(!(r>0))return void l();n>ot+p?kt.scrollByX(s):b(n)}o=setTimeout(c,a?O.initialDelay:O.trackClickRepeatFreq),a=!1},l=function(){o&&clearTimeout(o),o=null,t(document).unbind("mouseup.jsp",l)};return c(),t(document).bind("mouseup.jsp",l),!1}})}function j(){dt&&dt.unbind("mousedown.jsp"),st&&st.unbind("mousedown.jsp")}function g(){t("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"),Z&&Z.removeClass("jspActive"),et&&et.removeClass("jspActive")}function v(t,e){$&&(0>t?t=0:t>_&&(t=_),e===n&&(e=O.animateScroll),e?kt.animate(Z,"top",t,m):(Z.css("top",t),m(t)))}function m(t){t===n&&(t=Z.position().top),q.scrollTop(0),tt=t;var e=0===tt,i=tt==_,s=t/_,r=-s*(K-N);(yt!=e||Tt!=i)&&(yt=e,Tt=i,o.trigger("jsp-arrow-change",[yt,Tt,Ct,Bt])),k(e,i),V.css("top",r),o.trigger("jsp-scroll-y",[-r,e,i]).trigger("scroll")}function b(t,e){J&&(0>t?t=0:t>nt&&(t=nt),e===n&&(e=O.animateScroll),e?kt.animate(et,"left",t,w):(et.css("left",t),w(t)))}function w(t){t===n&&(t=et.position().left),q.scrollTop(0),ot=t;var e=0===ot,i=ot==nt,s=t/nt,r=-s*(E-G);(Ct!=e||Bt!=i)&&(Ct=e,Bt=i,o.trigger("jsp-arrow-change",[yt,Tt,Ct,Bt])),y(e,i),V.css("left",r),o.trigger("jsp-scroll-x",[-r,e,i]).trigger("scroll")}function k(t,e){O.showArrows&&(lt[t?"addClass":"removeClass"]("jspDisabled"),pt[e?"addClass":"removeClass"]("jspDisabled"))}function y(t,e){O.showArrows&&(jt[t?"addClass":"removeClass"]("jspDisabled"),gt[e?"addClass":"removeClass"]("jspDisabled"))}function C(t,e){v(t/(K-N)*_,e)}function T(t,e){b(t/(E-G)*nt,e)}function B(e,n,o){var i,s,r,a,c,l,p,u,d,f=0,h=0;try{i=t(e)}catch(t){return}for(s=i.outerHeight(),r=i.outerWidth(),q.scrollTop(0),q.scrollLeft(0);!i.is(".jspPane");)if(f+=i.position().top,h+=i.position().left,i=i.offsetParent(),/^body|html$/i.test(i[0].nodeName))return;a=x(),l=a+N,a>f||n?u=f-O.horizontalGutter:f+s>l&&(u=f-N+s+O.horizontalGutter),isNaN(u)||C(u,o),c=D(),p=c+G,c>h||n?d=h-O.horizontalGutter:h+r>p&&(d=h-G+r+O.horizontalGutter),isNaN(d)||T(d,o)}function D(){return-V.position().left}function x(){return-V.position().top}function H(){var t=K-N;return t>20&&t-x()<10}function S(){var t=E-G;return t>20&&t-D()<10}function P(){q.unbind(xt).bind(xt,function(t,e,n,o){var i=ot,s=tt,r=t.deltaFactor||O.mouseWheelSpeed;return kt.scrollBy(n*r,-o*r,!1),i==ot&&s==tt})}function A(){q.unbind(xt)}function W(){return!1}function Y(){V.find(":input,a").unbind("focus.jsp").bind("focus.jsp",function(t){B(t.target,!1)})}function z(){V.find(":input,a").unbind("focus.jsp")}function M(){function e(){var t=ot,e=tt;switch(n){case 40:kt.scrollByY(O.keyboardSpeed,!1);break;case 38:kt.scrollByY(-O.keyboardSpeed,!1);break;case 34:case 32:kt.scrollByY(N*O.scrollPagePercent,!1);break;case 33:kt.scrollByY(-N*O.scrollPagePercent,!1);break;case 39:kt.scrollByX(O.keyboardSpeed,!1);break;case 37:kt.scrollByX(-O.keyboardSpeed,!1)}return i=t!=ot||e!=tt}var n,i,s=[];J&&s.push(ut[0]),$&&s.push(it[0]),V.focus(function(){o.focus()}),o.attr("tabindex",0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp",function(o){if(o.target===this||s.length&&t(o.target).closest(s).length){var r=ot,a=tt;switch(o.keyCode){case 40:case 38:case 34:case 32:case 33:case 39:case 37:n=o.keyCode,e();break;case 35:C(K-N),n=null;break;case 36:C(0),n=null}return!(i=o.keyCode==n&&r!=ot||a!=tt)}}).bind("keypress.jsp",function(t){return t.keyCode==n&&e(),!i}),O.hideFocus?(o.css("outline","none"),"hideFocus"in q[0]&&o.attr("hideFocus",!0)):(o.css("outline",""),"hideFocus"in q[0]&&o.attr("hideFocus",!1))}function X(){o.attr("tabindex","-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp")}function R(){if(location.hash&&location.hash.length>1){var e,n,o=escape(location.hash.substr(1));try{e=t("#"+o+', a[name="'+o+'"]')}catch(t){return}e.length&&V.find(o)&&(0===q.scrollTop()?n=setInterval(function(){q.scrollTop()>0&&(B(e,!0),t(document).scrollTop(q.position().top),clearInterval(n))},50):(B(e,!0),t(document).scrollTop(q.position().top)))}}function I(){t(document.body).data("jspHijack")||(t(document.body).data("jspHijack",!0),t(document.body).delegate("a[href*=#]","click",function(n){var o,i,s,r,a,c,l=this.href.substr(0,this.href.indexOf("#")),p=location.href;if(-1!==location.href.indexOf("#")&&(p=location.href.substr(0,location.href.indexOf("#"))),l===p){o=escape(this.href.substr(this.href.indexOf("#")+1));try{i=t("#"+o+', a[name="'+o+'"]')}catch(t){return}i.length&&(s=i.closest(".jspScrollable"),r=s.data("jsp"),r.scrollToElement(i,!0),s[0].scrollIntoView&&(a=t(e).scrollTop(),c=i.offset().top,(a>c||c>a+t(e).height())&&s[0].scrollIntoView()),n.preventDefault())}}))}function F(){var t,e,n,o,i,s=!1;q.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp",function(r){var a=r.originalEvent.touches[0];t=D(),e=x(),n=a.pageX,o=a.pageY,i=!1,s=!0}).bind("touchmove.jsp",function(r){if(s){var a=r.originalEvent.touches[0],c=ot,l=tt;return kt.scrollTo(t+n-a.pageX,e+o-a.pageY),i=i||Math.abs(n-a.pageX)>5||Math.abs(o-a.pageY)>5,c==ot&&l==tt}}).bind("touchend.jsp",function(){s=!1}).bind("click.jsp-touchclick",function(){return i?(i=!1,!1):void 0})}function L(){var t=x(),e=D();o.removeClass("jspScrollable").unbind(".jsp"),o.replaceWith(Dt.append(V.children())),Dt.scrollTop(t),Dt.scrollLeft(e),vt&&clearInterval(vt)}var O,V,G,N,q,E,K,Q,U,$,J,Z,_,tt,et,nt,ot,it,st,rt,at,ct,lt,pt,ut,dt,ft,ht,jt,gt,vt,mt,bt,wt,kt=this,yt=!0,Ct=!0,Tt=!1,Bt=!1,Dt=o.clone(!1,!1).empty(),xt=t.fn.mwheelIntent?"mwheelIntent.jsp":"mousewheel.jsp";"border-box"===o.css("box-sizing")?(mt=0,bt=0):(mt=o.css("paddingTop")+" "+o.css("paddingRight")+" "+o.css("paddingBottom")+" "+o.css("paddingLeft"),bt=(parseInt(o.css("paddingLeft"),10)||0)+(parseInt(o.css("paddingRight"),10)||0)),t.extend(kt,{reinitialise:function(e){e=t.extend({},O,e),s(e)},scrollToElement:function(t,e,n){B(t,e,n)},scrollTo:function(t,e,n){T(t,n),C(e,n)},scrollToX:function(t,e){T(t,e)},scrollToY:function(t,e){C(t,e)},scrollToPercentX:function(t,e){T(t*(E-G),e)},scrollToPercentY:function(t,e){C(t*(K-N),e)},scrollBy:function(t,e,n){kt.scrollByX(t,n),kt.scrollByY(e,n)},scrollByX:function(t,e){b((D()+Math[0>t?"floor":"ceil"](t))/(E-G)*nt,e)},scrollByY:function(t,e){v((x()+Math[0>t?"floor":"ceil"](t))/(K-N)*_,e)},positionDragX:function(t,e){b(t,e)},positionDragY:function(t,e){v(t,e)},animate:function(t,e,n,o){var i={};i[e]=n,t.animate(i,{duration:O.animateDuration,easing:O.animateEase,queue:!1,step:o})},getContentPositionX:function(){return D()},getContentPositionY:function(){return x()},getContentWidth:function(){return E},getContentHeight:function(){return K},getPercentScrolledX:function(){return D()/(E-G)},getPercentScrolledY:function(){return x()/(K-N)},getIsScrollableH:function(){return J},getIsScrollableV:function(){return $},getContentPane:function(){return V},scrollToBottom:function(t){v(_,t)},hijackInternalLinks:t.noop,destroy:function(){L()}}),s(i)}return o=t.extend({},t.fn.jScrollPane.defaults,o),t.each(["arrowButtonSpeed","trackClickSpeed","keyboardSpeed"],function(){o[this]=o[this]||o.speed}),this.each(function(){var e=t(this),n=e.data("jsp");n?n.reinitialise(o):(t("script",e).filter('[type="text/javascript"],:not([type])').remove(),n=new i(e,o),e.data("jsp",n))})},t.fn.jScrollPane.defaults={showArrows:!1,maintainPosition:!0,stickToBottom:!1,stickToRight:!1,clickOnTrack:!0,autoReinitialise:!1,autoReinitialiseDelay:500,verticalDragMinHeight:0,verticalDragMaxHeight:99999,horizontalDragMinWidth:0,horizontalDragMaxWidth:99999,contentWidth:n,animateScroll:!1,animateDuration:300,animateEase:"linear",hijackInternalLinks:!1,verticalGutter:4,horizontalGutter:4,mouseWheelSpeed:3,arrowButtonSpeed:0,arrowRepeatFreq:50,arrowScrollOnHover:!1,trackClickSpeed:0,trackClickRepeatFreq:70,verticalArrowPositions:"split",horizontalArrowPositions:"split",enableKeyboardNavigation:!0,hideFocus:!1,keyboardSpeed:0,initialDelay:300,speed:30,scrollPagePercent:.8}}(jQuery,this);