"use strict";(self.webpackChunkpolaris_weboffice=self.webpackChunkpolaris_weboffice||[]).push([[161308],{161308:function(e,n,t){t.r(n),t.d(n,{default:function(){return C}});var o=t(215671),r=t(143144),u=t(237683),c=t(977917),a=t(625477),i=t(361688),l=t(459551),f=t(981142),s=t(588567),v=t(628264),m=t(769071),d=t(735622),g=t(995124),b=t(815e3),k=t(780386),w=t(159366),p=t(305054),y=t(382800),C=function(){function e(){(0,o.Z)(this,e)}return(0,r.Z)(e,[{key:"saveDocument",value:function(){return I().catch((function(e){return c.ZP.api.reject("The document could not be saved.","[".concat(e.message,"]"))}))}},{key:"isModified",value:function(){return S()}},{key:"getDocContentRect",value:function(){return h()}},{key:"getTitleBarRect",value:function(){return D()}},{key:"getRibbonTabMenuRect",value:function(){return T()}},{key:"getRibbonBarRect",value:function(){return R()}},{key:"getViewMode",value:function(){return L()}},{key:"activeInput",value:function(){M()}},{key:"isProtectedDocument",value:function(){return k.Z.isPasswordDocument}},{key:"insertImage",value:function(e,n){}},{key:"insertHtmlData",value:function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];f.o.insertHtmlData(n?s.vlz.CLIPDATA_HTML:s.vlz.CLIPDATA_STR,e),m.Z.focus("DocInputField"),y.Z.updateDrawCaret()}},{key:"insertString",value:function(e){f.o.insertString(e,s.v$l.BR_IME_COMPOSITING_RESULT)}},{key:"getMarkString",value:function(){return f.o.getMarkString()}},{key:"getCaretInfo",value:function(){var e=f.o.getCaretInfoFromJson().nCaretStatus;return{status:(s.Bn1[e]||"").replaceAll("BR_","").toLowerCase(),objectType:p.Z.getObjectType(),objectCount:p.Z.getObjectCount()}}},{key:"getFrameToImageBlob",value:function(e){return Z(e)}},{key:"downloadSelectFrame",value:function(e,n){_(e,n)}},{key:"getHtmlTextContent",value:function(e){return E(e)}}]),e}(),I=function(){return new Promise((function(e,n){var t=(0,a.qm)(l.hz),o=t.extension,r=t.docName;if(u.Z.setListener("onSaveDocument",(function(t,c){if(t===s.WbN.kPoProcessSucess&&c)if("hwpx"===o){var a="".concat(r.replace(new RegExp(".".concat(o,"$")),".hwp"));e({name:a,blob:c})}else e({name:r,blob:c});else n(new Error("Error ".concat(t)));u.Z.removeListener("onSaveDocument")})),o&&"csv"===o.toLowerCase()&&!0===b.ZP.get("isShowAlertDialogForCSVSaving"))d.Z.showDialog({dialogId:g.O.CONFIRM_ALERT,bModal:!0,alertMsg:{label:"IDS_MSG_CSV_SAVE_INFO"},currentTabIndex:0},(function(e){0===e?f.o.saveDocument(o):n(new Error("Canceled by user."))}));else{var c=o;"hwpx"===o&&(c="hwp"),f.o.saveDocument(c)}}))},S=function(){return f.o.isDocumentModified()},h=function(){return(0,a.qm)(i.SV)},D=function(){return(0,a.qm)(i.IU)},T=function(){return(0,a.qm)(i.ms)},R=function(){return(0,a.qm)(i.qr)},L=function(){return(0,a.qm)(v.p_).viewMode},M=function(){m.Z.focus("DocInputField")},Z=function(e){if(p.Z.isImageObject()&&1===p.Z.getObjectCount()){var n=(0,w.km)(e);return f.o.frameToImageBuffer(n)}return null},_=function(e,n){var t=(0,w.km)(n),o=f.o.frameToImageBuffer(t),r=document.createElement("a");r.style.display="none",document.body.appendChild(r);var u=window.URL.createObjectURL(o);r.href=u,r.download="".concat(e,".").concat(n),r.click(),window.URL.revokeObjectURL(u),document.body.removeChild(r)},E=function(e){var n=document.createElement("div");n.innerHTML=e;for(var t=n.children,o="",r=0;r<t.length;r+=1){var u;"STYLE"!==t[r].tagName&&(o+=null===(u=t[r].textContent)||void 0===u?void 0:u.replace(/\s\s+/g,"\n"))}return o}}}]);