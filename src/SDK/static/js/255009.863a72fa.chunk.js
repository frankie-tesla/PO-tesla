(self.webpackChunkpolaris_weboffice=self.webpackChunkpolaris_weboffice||[]).push([[255009],{944333:function(e,t,n){"use strict";n.d(t,{BN:function(){return u},DA:function(){return m},ZP:function(){return d}});var u,r=n(747313),o=n(180252),s=n(837490),a=n(652928),c=n(981142),i=n(588567),l=n(459551),v=n(178001),f=n(346417);function d(){var e=(0,o.v9)(l.hz).docType,t=(0,r.useMemo)((function(){return r.lazy((function(){return n(42734)("./".concat(e,"/components/status/PageInfoStatus"))}))}),[e]),c=(0,v.Z)((0,r.useMemo)((function(){return r.lazy((function(){return n(500967)("./".concat(e,"/components/status/PageNavigationButton"))}))}),[e]),(function(e){return[a.Yi.pc,a.Yi.tablet].includes(e)}));return(0,f.jsxs)("div",{className:s.Z.page_navigation,children:[(0,f.jsx)(c,{navigationType:u.first}),(0,f.jsx)(c,{navigationType:u.prev}),(0,f.jsx)(r.Suspense,{fallback:null,children:(0,f.jsx)("div",{className:s.Z.page_info_status,children:(0,f.jsx)(t,{})})}),(0,f.jsx)(c,{navigationType:u.next}),(0,f.jsx)(c,{navigationType:u.last})]})}!function(e){e.first="first",e.last="last",e.prev="prev",e.next="next"}(u||(u={}));var m=function(e){switch(e){case u.first:c.o.movePage(i.ZbX.eEV_MOVE_FIRSTPAGE);break;case u.prev:c.o.movePage(i.ZbX.eEV_MOVE_PREVPAGE);break;case u.next:c.o.movePage(i.ZbX.eEV_MOVE_NEXTPAGE);break;case u.last:c.o.movePage(i.ZbX.eEV_MOVE_LASTPAGE)}}},689417:function(e,t,n){"use strict";n.d(t,{Z:function(){return x}});var u=n(601413),r=n(870885),o=n(944925),s=n(747313),a=n(180252),c=n(837490),i=n(100457),l=n(981142),v=n(511173),f=n(432898),d=n(53110),m=n(628264),p=n(652928),M=n(625477),Z=n(769071),h=n(346417),g=["current","minRatio","maxRatio","setZoom"];function x(e){var t=e.onZoomClick,n=(0,a.v9)(i.Op),u=n.currentZoom,r=n.minZoom,o=n.maxZoom,l=(0,a.v9)(m.p_).viewMode,v=(0,s.useCallback)((function(e){0===e.button&&(d.tq&&l!==p.wO.edit||(t(e),e.stopPropagation()))}),[t,l]);return(0,h.jsxs)("div",{className:c.Z.zoom_status,children:[(0,h.jsxs)("button",{className:c.Z.zoom_current,onClick:v,children:[u,"%"]}),(0,h.jsx)("div",{className:c.Z.zoom_slider,children:(0,h.jsx)(b,{current:u,min:r,max:o})})]})}var S=10;function b(e){var t=e.current,n=e.min,u=e.max,r=(0,s.useMemo)((function(){return 50/(100-n)}),[n]),o=(0,s.useMemo)((function(){return 50/(u-100)}),[u]),a=(0,s.useMemo)((function(){return t<100?"".concat(Math.max(t-n,0)*r,"%"):t>100?"".concat((t-100)*o+50,"%"):"50%"}),[t,n,r,o]),v=(0,s.useCallback)((function(e){var t=e;t<n?t=n:t>u&&(t=u),l.o.setZoom(100*t),(0,M.Ce)((0,i.t5)(t)),Z.Z.focus("DocInputField")}),[n,u]),f=(0,s.useCallback)((function(e){if(0===e.button){if("out"===e.currentTarget.dataset.zoomType){var n=10*Math.floor(.1*(t-S));v(n)}else if("in"===e.currentTarget.dataset.zoomType){var u=10*Math.floor(.1*(t+S));v(u)}e.stopPropagation()}}),[v,t]);return d.tq?null:(0,h.jsxs)(s.Fragment,{children:[(0,h.jsx)("button",{className:c.Z.zoom_out,onMouseUp:f,"data-zoom-type":"out"}),(0,h.jsxs)(O,{current:t,minRatio:r,maxRatio:o,setZoom:v,children:[(0,h.jsx)("div",{className:c.Z.slider_track}),(0,h.jsx)("div",{className:c.Z.slider_tick}),(0,h.jsx)("div",{className:c.Z.slider_thumb,style:{left:a}})]}),(0,h.jsx)("button",{className:c.Z.zoom_in,onMouseUp:f,"data-zoom-type":"in"})]})}function O(e){e.current;var t=e.minRatio,n=e.maxRatio,a=e.setZoom,i=(0,o.Z)(e,g),d=(0,s.useRef)(null),m=(0,f.Q)();(0,s.useEffect)((function(){var e=d.current;if(e){var t=function(e){m((function(){var t=e.ctrlKey,n=e.altKey,u=e.shiftKey,r=e.deltaY,o=Math.sign(r)>0;t||n||u||(o?l.o.zoomOut():l.o.zoomIn())})),e.preventDefault(),e.stopPropagation()};return e.addEventListener("wheel",t,{passive:!1}),function(){e.removeEventListener("wheel",t)}}}),[m]);var p=(0,s.useCallback)((function(e){return function(){if(d.current){var u=d.current.getBoundingClientRect().left,r=Math.max(e-u,0),o=100;r<50?o=r/t+10:r>50&&(o=100+(r-50)/n),a(o)}}}),[t,n,a]),M=(0,s.useMemo)((function(){return{onMouseDown:function(e){m(p(e.clientX))},onMouseDrag:function(e){m(p(e.clientX))}}}),[m,p]),Z=(0,v.Ek)(M),x=(0,r.Z)(Z,2)[1];return(0,h.jsx)("div",(0,u.Z)((0,u.Z)({className:c.Z.slider,ref:d},x),{},{children:i.children}))}},790752:function(e,t,n){"use strict";var u=n(747313),r=n(180252),o=n(837490),s=n(307360),a=n(808643),c=n(652928),i=n(628264),l=n(246775),v=n(178001),f=n(346417);t.Z=(0,v.Z)((0,l.Z)((0,a.Z)((function(){var e=(0,r.I0)(),t=(0,u.useCallback)((function(){e((0,i.nk)(c.wO.presentation))}),[e]);return(0,f.jsx)("div",{className:"".concat(o.Z.btn_wrap," ").concat(o.Z.vertical),children:(0,f.jsx)("button",{className:"".concat(o.Z.btn),style:{padding:"0 5px",height:"20px"},onClick:t,children:(0,f.jsx)("span",{children:(0,f.jsx)(s.Z,{label:"SWITCH_FULL_SCREEN"})})})})}),(function(e){return[c.wO.read,c.wO.readWithMenu].includes(e)})),(function(e){return e===c.n_.slide})),(function(e){return[c.Yi.pc,c.Yi.tablet].includes(e)}))},201212:function(e,t,n){"use strict";var u=n(747313),r=n(180252),o=n(837490),s=n(851574),a=n(307360),c=n(808643),i=n(652928),l=n(178001),v=n(346417);t.Z=(0,l.Z)((0,c.Z)((function(){var e=(0,r.I0)(),t=(0,r.v9)(s.te),n=t.isDisabledShowInk,c=t.isCheckedShowInk?"HIDE_PEN_ANINATIONS":"SHOW_PEN_ANINATIONS",i=(0,u.useCallback)((function(){n||e((0,s.vZ)())}),[e,n]);return(0,v.jsx)("div",{className:"".concat(o.Z.btn_wrap," ").concat(o.Z.vertical),children:(0,v.jsx)("button",{className:"".concat(o.Z.btn," ").concat(n?o.Z.disabled:""),style:{padding:"0 5px",height:"20px"},onClick:i,children:(0,v.jsx)("span",{children:(0,v.jsx)(a.Z,{label:c})})})})}),(function(e){return[i.wO.read,i.wO.readWithMenu].includes(e)})),(function(e){return[i.Yi.pc,i.Yi.tablet].includes(e)}))},511173:function(e,t,n){"use strict";n.d(t,{Ek:function(){return i},_b:function(){return l},nV:function(){return u}});var u,r,o,s=n(215671),a=n(143144),c=n(747313);!function(e){e[e.Down=0]="Down",e[e.Move=1]="Move",e[e.Up=2]="Up",e[e.Drag=3]="Drag",e[e.Drop=4]="Drop"}(u||(u={})),function(e){e[e.Enter=0]="Enter",e[e.Leave=1]="Leave"}(r||(r={})),function(e){e[e.Over=0]="Over",e[e.Out=1]="Out"}(o||(o={}));var i=function(e){var t=(0,c.useRef)(),n=(0,c.useRef)(),s=(0,c.useRef)(),a=(0,c.useRef)({});(0,c.useEffect)((function(){a.current=e}),[e]);var i=(0,c.useCallback)((function(e){n.current===r.Leave&&(l.onMouseMove(),t.current=u.Drag,a.current.onMouseDrag&&a.current.onMouseDrag(e,{mouseStatus:t.current,mouseEnterLeaveStatus:n.current,mouseOverOutStatus:s.current}))}),[]),v=(0,c.useCallback)((function(e){document.removeEventListener("mousemove",i,!0),document.removeEventListener("mouseup",v,!0),s.current===o.Out&&t.current===u.Drag&&(l.onMouseUp(),t.current=u.Drop,a.current.onMouseDrop&&a.current.onMouseDrop(e,{mouseStatus:t.current,mouseEnterLeaveStatus:n.current,mouseOverOutStatus:s.current}))}),[i]),f=(0,c.useMemo)((function(){return{onMouseDown:function(r){l.onMouseDown(),t.current=u.Down,e.onMouseDown&&e.onMouseDown(r,{mouseStatus:t.current,mouseEnterLeaveStatus:n.current,mouseOverOutStatus:s.current}),document.addEventListener("mousemove",i,!0),document.addEventListener("mouseup",v,!0)},onMouseMove:function(r){l.onMouseMove(),t.current===u.Down||t.current===u.Drag?t.current=u.Drag:t.current=u.Move,t.current===u.Drag&&e.onMouseDrag?e.onMouseDrag(r,{mouseStatus:t.current,mouseEnterLeaveStatus:n.current,mouseOverOutStatus:s.current}):e.onMouseMove&&e.onMouseMove(r,{mouseStatus:t.current,mouseEnterLeaveStatus:n.current,mouseOverOutStatus:s.current})},onMouseUp:function(r){l.onMouseUp(),t.current===u.Drag?t.current=u.Drop:t.current=u.Up,t.current===u.Drop&&e.onMouseDrop?e.onMouseDrop(r,{mouseStatus:t.current,mouseEnterLeaveStatus:n.current,mouseOverOutStatus:s.current}):e.onMouseUp&&e.onMouseUp(r,{mouseStatus:t.current,mouseEnterLeaveStatus:n.current,mouseOverOutStatus:s.current})},onMouseEnter:function(u){n.current=r.Enter,e.onMouseEnter&&e.onMouseEnter(u,{mouseStatus:t.current,mouseEnterLeaveStatus:n.current,mouseOverOutStatus:s.current})},onMouseLeave:function(u){n.current=r.Leave,e.onMouseLeave&&e.onMouseLeave(u,{mouseStatus:t.current,mouseEnterLeaveStatus:n.current,mouseOverOutStatus:s.current})},onMouseOver:function(u){s.current=o.Over,e.onMouseOver&&e.onMouseOver(u,{mouseStatus:t.current,mouseEnterLeaveStatus:n.current,mouseOverOutStatus:s.current})},onMouseOut:function(u){s.current=o.Out,e.onMouseOut&&e.onMouseOut(u,{mouseStatus:t.current,mouseEnterLeaveStatus:n.current,mouseOverOutStatus:s.current})}}}),[e,i,v]);return[t,f]},l=new(function(){function e(){(0,s.Z)(this,e),this.status=void 0}return(0,a.Z)(e,[{key:"current",get:function(){return this.status}},{key:"onMouseDown",value:function(){this.status=u.Down}},{key:"onMouseMove",value:function(){this.status===u.Down||this.status===u.Drag?this.status=u.Drag:this.status=u.Move}},{key:"onMouseUp",value:function(){this.status===u.Drag?this.status=u.Drop:this.status=u.Up}}]),e}())},432898:function(e,t,n){"use strict";n.d(t,{Q:function(){return r}});var u=n(747313),r=function(){var e=(0,u.useRef)();return function(t){e.current&&window.cancelAnimationFrame(e.current),e.current=window.requestAnimationFrame((function(n){t(n),e.current=void 0}))}}},255009:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k}});var u=n(747313),r=n(180252),o=n(689417),s=n(995124),a=n(407604),c=n(870885),i=n(601413),l=n(837490),v=n(815e3),f=n(652928),d=n(748738),m=n(53110),p=n(628264),M=n(227906),Z=n(346417),h=[{iconName:"ribbon_ico_slideview_default.png",value:f.wO.edit},{iconName:"ribbon_ico_readmode.png",value:f.wO.read},{iconName:"ribbon_ico_presentationword.png",value:f.wO.presentation}];function g(){var e=(0,r.v9)(M.v).selectedValue;return v.ZP.get("hideViewModeMenu")||v.ZP.get("viewMode")!==f.wO.edit?null:(0,Z.jsx)("div",{className:l.Z.viewmode_status,children:h.map((function(t){var n=t.value===e;return(0,Z.jsx)(x,(0,i.Z)((0,i.Z)({},t),{},{isChecked:n}),t.value)}))})}function x(e){var t=e.iconName,o=e.value,s=e.isChecked,a=(0,r.I0)(),i=(0,d.XM)(),v=(0,u.useState)(""),f=(0,c.Z)(v,2),M=f[0],h=f[1],g=(0,u.useState)(""),x=(0,c.Z)(g,2),S=x[0],b=x[1];(0,u.useEffect)((function(){n(624099)("./".concat(t)).then((function(e){!0===i.current&&h(e.default)}));var e=(0,m.AN)(t);n(624099)("./".concat(e)).then((function(e){!0===i.current&&b(e.default)}))}),[t,i]);var O=(0,u.useCallback)((function(){s||a((0,p.nk)(o))}),[s,a,o]),w={backgroundImage:"-webkit-image-set(url(".concat(M,") 1x, url(").concat(S,") 2x)"),backgroundSize:"16px 16px"},E="".concat(l.Z.buttonIcon);return s&&(E="".concat(E," ").concat(l.Z.active)),(0,Z.jsx)("button",{className:E,onClick:O,children:(0,Z.jsx)("i",{style:w})})}var S=n(944333),b=n(201212),O=n(790752),w=n(307360),E=n(808643),N=n(537997),D=(0,n(178001).Z)((0,E.Z)((function(){var e=(0,r.I0)(),t=(0,r.v9)(N.W0).isShow,n=t?"HIDE_SLIDE_NOTES":"SHOW_SLIDE_NOTES",o=(0,u.useCallback)((function(){e((0,N.Lf)(!t))}),[e,t]);return(0,Z.jsx)("div",{className:"".concat(l.Z.btn_wrap," ").concat(l.Z.vertical),children:(0,Z.jsx)("button",{className:"".concat(l.Z.btn),style:{padding:"0 5px",height:"20px"},onClick:o,children:(0,Z.jsx)("span",{children:(0,Z.jsx)(w.Z,{label:n})})})})}),(function(e){return[f.wO.read,f.wO.readWithMenu].includes(e)})),(function(e){return[f.Yi.pc,f.Yi.tablet].includes(e)}));function k(){var e=(0,r.I0)(),t=(0,u.useCallback)((function(){e((0,a.vC)({dialogId:s.O.ZOOM,bModal:!0,currentTabIndex:0}))}),[e]);return(0,Z.jsxs)(u.Fragment,{children:[(0,Z.jsx)(S.ZP,{}),(0,Z.jsx)(b.Z,{}),(0,Z.jsx)(D,{}),(0,Z.jsx)(O.Z,{}),(0,Z.jsx)(g,{}),(0,Z.jsx)(o.Z,{onZoomClick:t})]})}},227906:function(e,t,n){"use strict";n.d(t,{v:function(){return f}});var u=n(426373),r=n(135323),o=n(628264),s=n(652928),a=n(101922),c=n(360008),i=n(371266),l={selectedValue:s.wO.edit,unitEnableList:[]},v=(0,u.oM)({name:"viewMode",initialState:l,reducers:{},extraReducers:function(e){e.addCase(o.hm,(function(e,t){e.selectedValue=t.payload})),e.addCase(a.He,(function(e){var t=[c.Z.isDisable(i.Che),c.Z.isDisable(i.tWF),c.Z.isDisable(i.ZIo)];e.unitEnableList=t}))}});t.Z=v.reducer;var f=(0,r.P1)((function(e){return e.command.view.viewMode}),(function(e){return e}))},537997:function(e,t,n){"use strict";n.d(t,{CG:function(){return d},Lf:function(){return v},V5:function(){return l},W0:function(){return f}});var u=n(426373),r=n(135323),o=n(625477),s=n(981142),a=n(101922),c=(0,u.oM)({name:"slideNote",initialState:{isShow:!1,note:""},reducers:{setSlideNote:function(e,t){e.note=t.payload},setIsSlideNoteShow:function(e,t){e.isShow=t.payload}},extraReducers:function(e){e.addCase(a.w4,(function(e,t){var n=t.payload.nCurrentPage;e.note=s.o.getSlideNoteString(n)}))}}),i=c.actions,l=i.setSlideNote,v=i.setIsSlideNoteShow;t.ZP=c.reducer;var f=(0,r.P1)((function(e){return e.slideNote}),(function(e){return e})),d=function(){return(0,o.RU)("updateSlideNoteThunk",(function(e,t){var n=t().page.currentPage,u=s.o.getSlideNoteString(n);e(l(u))}))}},500967:function(e,t,n){var u={"./hwp/components/status/PageNavigationButton":[799807,799807],"./slide/components/status/PageNavigationButton":[137594,137594],"./word/components/status/PageNavigationButton":[576254,576254]};function r(e){if(!n.o(u,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=u[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(u)},r.id=500967,e.exports=r}}]);