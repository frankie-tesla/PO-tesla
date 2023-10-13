"use strict";(self.webpackChunkpolaris_weboffice=self.webpackChunkpolaris_weboffice||[]).push([[237958,463779],{827611:function(e,t,n){n.d(t,{Z:function(){return l}});n(747313);var a=n(837490),r=n(307360),i=n(346417);function l(e){var t=e.buttonLabels,n=e.onClick,l=e.buttonDisableStates;return(0,i.jsx)("div",{className:a.Z.popup_btn_wrap,children:t.map((function(e,t){var u=!!l&&l[t];return(0,i.jsx)("button",{className:"".concat(a.Z.p_btn," ").concat(a.Z.normal),onClick:function(){return n(t)},disabled:u,children:(0,i.jsx)(r.Z,{label:e})},t)}))})}},237958:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var a=n(601413),r=n(747313),i=n(837490),l=n(827611),u=n(735622),s=n(307360),c=n(416031),o=n(995124),h=n(180252),d=n(930581),f=n(53110),b=n(981142),m=n(815e3),p=n(791406),x=n(977917),A=n(346417);function w(e){var t=e.dialogId,n=e.tabs[0].buttons,w=(0,h.I0)(),g=(0,r.useRef)(null),v=(0,r.useRef)(null),y=!(0,c.isEmpty)(m.ZP.get("youtubeSearchAPIKey")),Z=(0,r.useCallback)((function(){var e=g.current&&g.current.value;(0,c.isEmpty)(e)?u.Z.showDialog({dialogId:o.O.COMMON_ALERT,bModal:!0,alertMsg:{label:"IDS_MSG_ERROR_EMPTY_INPUT"},currentTabIndex:0}):(w((0,d.FD)(e||"")),u.Z.showDialog({dialogId:o.O.SLIDE_INSERT_ONLINE_VIDEO,bModal:!0,currentTabIndex:0}))}),[w]),T=(0,r.useCallback)((function(){Z()}),[Z]),I=(0,r.useCallback)((function(e){"Enter"===e.key&&Z()}),[Z]),j=(0,r.useCallback)((function(){var e=v.current,n=e&&e.value,a="";if(n){var r=document.createElement("div");r.innerHTML=n;var i=r.firstElementChild;a=i&&i.getAttribute("src")||""}e&&!(0,c.isEmpty)(e.value)&&(0,f.jv)(a)?(0,p.LS)("",480,360).then((function(e){b.o.mediaInsert(e,480,360,!1,a,!1,!1),u.Z.hideDialog(t)})).catch((function(e){x.ZP.error("createYoutubeThumbnailImage error = ".concat(e))})):u.Z.showDialog({dialogId:o.O.COMMON_ALERT,bModal:!0,alertMsg:{label:"IDS_MSG_HWP_HYPERLINK_WEB_ADDRESS_INVAID"},currentTabIndex:0})}),[t]),M=(0,r.useCallback)((function(e){n.length-1===e&&(u.Z.clickButton(t,e),u.Z.hideDialog(t))}),[n,t]),S={buttonLabels:n,onClick:M};return(0,A.jsxs)(r.Fragment,{children:[(0,A.jsx)("div",{className:i.Z.popup_contents,children:(0,A.jsxs)("table",{className:i.Z.form_table,children:[(0,A.jsxs)("colgroup",{children:[(0,A.jsx)("col",{style:{width:"120px"}}),(0,A.jsx)("col",{style:{width:"auto"}}),(0,A.jsx)("col",{style:{width:"100px"}})]}),(0,A.jsxs)("tbody",{children:[y?(0,A.jsxs)("tr",{children:[(0,A.jsx)("th",{className:i.Z.fs13,children:(0,A.jsx)(s.Z,{label:"DLG_VIDEO_SEARCH_YOUTUBE"})}),(0,A.jsx)("td",{children:(0,A.jsx)("input",{type:"text",className:i.Z.f_txt,ref:g,onKeyDown:I})}),(0,A.jsx)("td",{children:(0,A.jsx)("div",{className:"".concat(i.Z.btn_wrap),children:(0,A.jsx)("button",{className:i.Z.btn,onClick:T,children:(0,A.jsx)("span",{children:(0,A.jsx)(s.Z,{label:"SEARCH"})})})})})]}):null,(0,A.jsxs)("tr",{children:[(0,A.jsx)("th",{className:i.Z.fs13,children:(0,A.jsx)(s.Z,{label:"DLG_VIDEO_EMBED_TAG"})}),(0,A.jsx)("td",{children:(0,A.jsx)("input",{type:"text",className:i.Z.f_txt,placeholder:"<iframe...</iframe>",ref:v})}),(0,A.jsx)("td",{children:(0,A.jsx)("div",{className:"".concat(i.Z.btn_wrap),children:(0,A.jsx)("button",{className:i.Z.btn,onClick:j,children:(0,A.jsx)("span",{children:(0,A.jsx)(s.Z,{label:"SEARCH"})})})})})]})]})]})}),(0,A.jsx)(l.Z,(0,a.Z)({},S))]})}},791406:function(e,t,n){n.d(t,{$Q:function(){return x},LS:function(){return A},Tg:function(){return m},iv:function(){return p}});var a=n(974165),r=n(115861),i=n(231881),l=n.n(i),u=n(977917),s=n(416031),c=n(815e3),o=n(53110),h=n(735622),d=n(995124),f=n(442113),b=n(463779),m="https://www.youtube.com/watch?v=",p="https://www.youtube.com/embed",x=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t,n){var r,i,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,(r=new URLSearchParams).append("q",t),r.append("part","snippet"),r.append("maxResults","50"),r.append("type","video"),r.append("key",c.ZP.get("youtubeSearchAPIKey")||""),(0,s.isEmpty)(n)||r.append("pageToken",n),e.next=10,l().get("https://www.googleapis.com/youtube/v3/search",{params:r});case 10:return e.abrupt("return",e.sent);case 13:return e.prev=13,e.t0=e.catch(0),u.ZP.error("requestYoutubeVideo error = ".concat(e.t0)),i=f.localeIntl.formatMessage,o="".concat(i({id:"DLG_VIDEO_ERROR_MSG"}),"\n").concat(e.t0.response.data.error.message),h.Z.showDialog({dialogId:d.O.COMMON_ALERT,bModal:!0,alertMsg:{label:o}}),e.abrupt("return","");case 20:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t,n){return e.apply(this,arguments)}}(),A=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t,n,i){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=(0,r.Z)((0,a.Z)().mark((function e(r,l){var u,s,c,h,d,f,m,p,x,A,w,g,v;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,(u=document.createElement("canvas")).width=n,u.height=i,s=u.getContext("2d")){e.next=7;break}return e.abrupt("return");case 7:return s.fillStyle="black",s.fillRect(0,0,n,i),e.next=11,(0,o.po)("".concat(b));case 11:for(c=e.sent,h=c.width,d=c.height,s.drawImage(c,n/2-h/2,i/2-d/2,h,d),0,f=12,12,m=(t||"").split(" "),p="",s.fillStyle="white",s.font="12px Noto Sans KR",x=0;x<m.length;x+=1)A="".concat(p+m[x]," "),w=s.measureText(A),w.width>n&&x>0?(s.fillText(p,0,f),p="".concat(m[x]," "),f+=12):p=A;return s.fillText(p,0,f),e.next=27,(0,o.G)(u);case 27:return g=e.sent,e.next=30,(0,o.Cq)(g);case 30:v=e.sent,r(v),e.next=37;break;case 34:e.prev=34,e.t0=e.catch(0),l(e.t0);case 37:case"end":return e.stop()}}),e,null,[[0,34]])})));return function(t,n){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}()},930581:function(e,t,n){n.d(t,{FD:function(){return h},Kb:function(){return f},ZX:function(){return p},lp:function(){return b},zq:function(){return m}});var a=n(426373),r=n(135323),i=n(625477),l=n(416031),u=n(791406),s={searchText:"",selectedIndex:void 0,nextPageToken:"",thumbnailItems:[]},c=(0,a.oM)({name:"onlineVideoThumbnail",initialState:s,reducers:{setSearchText:function(e,t){e.searchText=t.payload},setThumbnailItems:function(e,t){var n=t.payload,a=n.nextPageToken,r=n.thumbnailItems;e.nextPageToken=a,r.forEach((function(t){e.thumbnailItems.push(t)}))},clearSearchedItems:function(e){e.nextPageToken="",e.selectedIndex=0,e.thumbnailItems=[]},clearOnlineVideoThumbnail:function(){return s}}}),o=c.actions,h=o.setSearchText,d=o.setThumbnailItems,f=o.clearSearchedItems,b=o.clearOnlineVideoThumbnail;t.ZP=c.reducer;var m=(0,r.P1)((function(e){return e.onlineVideoThumbnail}),(function(e){return e})),p=function(){return(0,i.RU)("requestYoutubeVideoThunk",(function(e){var t=(0,i.qm)(m),n=t.searchText,a=t.nextPageToken;(0,u.$Q)(n,a).then((function(t){if(t){var n=[];t.data.items.forEach((function(e){var t=e.snippet;n.push({title:t.title,channelTitle:t.channelTitle,videoId:e.id.videoId,defaultThumbnailUrl:t.thumbnails.default?t.thumbnails.default.url:"",defaultThumbnailWidth:t.thumbnails.default?t.thumbnails.default.width:120,defaultThumbnailHeight:t.thumbnails.default?t.thumbnails.default.height:90,highThumbnailUrl:t.thumbnails.high?t.thumbnails.high.url:"",highThumbnailWidth:t.thumbnails.high?t.thumbnails.high.width:480,highThumbnailHeight:t.thumbnails.high?t.thumbnails.high.height:360})})),e(d({nextPageToken:(0,l.isEmpty)(t.data.nextPageToken)?"":t.data.nextPageToken,thumbnailItems:n}))}}))}))}},463779:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAAByCAMAAAC4A3VPAAAAxlBMVEUvLy8AAABAQEAvLy8vLy8xMTEvLy8wMDAwMDA2NjY6OjovLy9JSUkwMDAvLy8wMDAvLy8wMDAvLy8uLi4wMDAvLy8vLy8vLy8wMDAvLy8wMDAwMDAwMDAvLy8vLy8wMDAwMDAwMDAwMDAuLi41NTUuLi7Y2Ng6OjrS0tLBwcGTk5N+fn5eXl42NjbOzs6srKx4eHgxMTHZ2dm8vLypqakyMjLIyMi0tLSDg4NxcXFmZmZTU1M/Pz8vLy+hoaGOjo6Kiorc3NyOsBvnAAAAQXRSTlPmAATJsx26gEcTC+Lp4d/W1dHPy8a/vqqmo4uGdXFoZlVLRTciIf7n/fv08ezn/PfwXv769yn7+fHv7evoXfbz8t5Wy84AAAMVSURBVGje1ZsHVttAFEUfM6NqXHDv3YbgGDAJBBIg0f43FVGCIBhLX39GiLuBe47e0Wh+EfZIiPl02G2rpqwUixXZVO3ucDoXeyQISm/SaxSwhUKjN/H0K2eOjZ3YzkynctGXSIDsL/QoxVghMWos2EpxK0FC3gqW0h9VQaY68tMr3RpSUXNTKq0OUtOxUijFoAQGpYGgKi0FJsqiKd0y2JRdglI40IIjkir9FjTR8pMpPRvasL0kSqsOjdSteOXFAbRycBGntEKjZqe1W+nVoZ26t0vp2zCA7b+vFC0YoSXeVTowhPOe0oUx3O1KqwxjlK1tSqFgECW2KAcwyuCt0irBKCXrjbIDw3T+V7owjvta6ddgnJr/SjlCBoxeKkUVGVAVL5QbZMImUgqJeNar1SF4SPGsHCMBp0FwtCqAxfhZqZCA8yDky09wUP+UCyQheOR0HwwWT8o+RRmcHzMi7T8pJUl5HynSIh+VMxCVYaRfkZLZg9IhKZmROg9Km6RkRmrfKz3QlFGkZ0iBFyonNCU30kmo7NGVEd/JkfZCZYOjDJbUSBt7EAWOMuSEFmlBYA6akh3pHFOikh3pFEOikh3pEF2ikh1pF22mMuJbskjbUEQlO1KFJl8Zsfy9RhxNSKKSHalERa8yjDTm6VZQ1KwMndhJ0YDyMk5Z0a68jnuwUrPyxy/sRmp8SRJerZsaj4KEBYSiHnj8o71NPdb5H7Au6ePFP9NDhno+0SfXlE/0nK9c/lmTLiKiwFXe3dCuW4xLZfTqU2hwr86X5Kq6xysQjlZrUJlwyqDz4xvQ8YjFHr/CtKklLb+OdtIW7idnnMKd3p6I7nF0ZKomTHC3z2/CLCjK8NVnsCA11JZByOU1OCh62/BqDRZjWnP08Orqht0czbwFfPsRje7s2/nZDy2yH818/AAqgzFbHoaJxkem+RgMmx1/52fIb3CVIU8LG6bWUvK2fGNixSiPi1S618XyuhSnc/UvzwuOmtY487+syl7J/SyLx9muV0eIjQQJuRGfb1We+EPAZ/7twfDPHeZ/YfkLpBE+dIx46wMAAAAASUVORK5CYII="}}]);