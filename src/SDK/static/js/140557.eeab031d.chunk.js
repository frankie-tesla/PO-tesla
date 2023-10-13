"use strict";(self.webpackChunkpolaris_weboffice=self.webpackChunkpolaris_weboffice||[]).push([[140557,169040,456850,463923,226465,236708,713070,954362,111781,649127,337846,797859,355935,716333,427402,803547,291911],{827611:function(e,A,n){n.d(A,{Z:function(){return a}});n(747313);var t=n(837490),l=n(307360),c=n(346417);function a(e){var A=e.buttonLabels,n=e.onClick,a=e.buttonDisableStates;return(0,c.jsx)("div",{className:t.Z.popup_btn_wrap,children:A.map((function(e,A){var s=!!a&&a[A];return(0,c.jsx)("button",{className:"".concat(t.Z.p_btn," ").concat(t.Z.normal),onClick:function(){return n(A)},disabled:s,children:(0,c.jsx)(l.Z,{label:e})},A)}))})}},96001:function(e,A,n){n.d(A,{Z:function(){return a}});n(747313);var t=n(837490),l=n(307360),c=n(346417);function a(e){var A=e.tabs,n=e.onTabChange,a=e.tabIndex;return(0,c.jsx)("div",{className:t.Z.popup_tab,children:(0,c.jsx)("ul",{children:A.map((function(e,A){return(0,c.jsx)("li",{children:(0,c.jsx)("button",{className:a===A?t.Z.on:"",onClick:function(){return n(A)},children:(0,c.jsx)(l.Z,{label:e.label})})},A)}))})})}},772217:function(e,A,n){n.d(A,{P:function(){return o}});var t=n(870885),l=n(416031),c=n(747313),a=n(837490),s=n(53110),i=n(346417),r=function(e,A,n,t){var c=isNaN(parseFloat(e))?0:parseFloat(e),a=e.replace(/[^0-9|.|-]/g,"").trim(),s="";return n||0!==c?(s=a,t&&c<0&&(s=Math.abs(parseFloat(s)).toString()),s+=(0,l.isEmpty)(A)?"":" ".concat(A)):s="",s},o=(0,c.forwardRef)((function(e,A){var n=e.min,l=e.max,o=e.changeUnit,u=e.isDisable,d=e.suffix,x=void 0===d?"":d,h=e.isDisplayZero,g=void 0===h||h,j=e.isDisplayAbs,E=void 0!==j&&j,b=e.isFontSpacingEvnet,f=void 0!==b&&b,p=(0,c.useRef)(null),T=(0,c.useState)(0),R=(0,t.Z)(T,2),C=R[0],m=R[1],B=(0,c.useState)(!1),Z=(0,t.Z)(B,2),_=Z[0],S=Z[1];(0,c.useEffect)((function(){var n=A&&A.current,t=p.current;if(n&&t){if(e.inputWidth){var l=window.getComputedStyle(n),c=window.getComputedStyle(t),a=parseInt(l.paddingLeft),s=parseInt(l.paddingRight),i=parseInt(c.borderLeft)||0,o=parseInt(c.borderRight)||0;m(e.inputWidth-a-s-i-o)}"".concat(e.value," ").concat(x)===n.value||0===e.value&&n.value.trim()===x||(n.value=r("".concat(e.value),x,g,E),f&&S(e.value<0))}}),[E,g,e.inputWidth,e.value,A,x,f]);var P=(0,c.useCallback)((function(e){var t=A.current;if(!t)return 0;var c=(0,s.il)(o),a=Math.min(l,Math.max(n,isNaN(parseFloat(t.value))?0:parseFloat(t.value))),i=Math.floor(parseFloat((a/o).toFixed(1))),r=s.fb.round(i*o,c);return r=(0,s.wI)(a,n,l)?_?e?r-o:r+o:e?r+o:r-o:e?o+o:o,c>0?s.fb.round(r,c):r}),[o,l,n,A,_]),v=(0,c.useCallback)((function(n){var t=A.current;if(t){var l=t.selectionStart||0,c=t.value.charAt(l-1),a=isNaN(parseFloat(t.value))?0:parseFloat(t.value);e.onChange&&e.onChange(a),t.value=r(t.value,x,g,E);var s=c.length>0&&!1===["."].includes(c)&&isNaN(parseInt(c))?l-1:l;t.selectionStart=s,t.selectionEnd=s}}),[E,g,e,A,x]),N=(0,c.useCallback)((function(e){var n=A.current;if(n&&!(x.length<1)){var t=n.selectionStart||0,l=n.value.length,c=x.length+1;"Backspace"===e.key?t>l-c&&e.preventDefault():"Delete"===e.key?t+1>l-c&&e.preventDefault():/[0-9]/.test(e.key)&&l>=c&&t>l-c&&e.preventDefault()}}),[A,x.length]),M=(0,c.useCallback)((function(){var t=A.current;if(t){var c=P(!0);(0,s.wI)(c,n,l)&&(e.onChange&&e.onChange(c,!0),t.value=r("".concat(c),x,g,E))}}),[P,E,g,l,n,e,A,x]),L=(0,c.useCallback)((function(){var t=A.current;if(t){var c=P(!1);(0,s.wI)(c,n,l)&&(e.onChange&&e.onChange(c,!1),t.value=r("".concat(c),x,g,E))}}),[P,E,g,l,n,e,A,x]),U="".concat(a.Z.spinner_select," ").concat(a.Z.medium," ").concat(a.Z.horizontal," ").concat(u?"".concat(a.Z.disabled):""),I={width:C?"".concat(C,"px"):""};return(0,i.jsx)("div",{className:U,children:(0,i.jsxs)("div",{className:a.Z.i_txt,ref:p,children:[(0,i.jsx)("input",{type:"text",ref:A,style:I,onChange:v,onKeyDown:N}),(0,i.jsx)("button",{className:"".concat(a.Z.toggle," ").concat(a.Z.up),onClick:M,children:(0,i.jsx)("span",{children:"toggle up"})}),(0,i.jsx)("button",{className:"".concat(a.Z.toggle," ").concat(a.Z.down),onClick:L,children:(0,i.jsx)("span",{children:"toggle down"})})]})})}))},140557:function(e,A,n){n.r(A),n.d(A,{default:function(){return Q}});var t=n(601413),l=n(870885),c=n(747313),a=n(180252),s=n(837490),i=n(448439),r=n(96001),o=n(827611),u=n(735622),d=n(307360),x=n(59127),h=n(772217),g=n(649127),j=n(954362),E=n(797859),b=n(716333),f=n(803547),p=n(236708),T=n(463923),R=n(169040),C=n(337846),m=n(111781),B=n(355935),Z=n(427402),_=n(291911),S=n(713070),P=n(226465),v=n(456850),N=n(981142),M=n(530624),L=n(305054),U=n(995124),I=n(53110),y=n(407604),O=n(346417),k=55.87,D=0,G=2.14,w=0;function Q(e){var A=e.dialogIndex,n=e.dialogId,Q=e.tabs,Y=e.commandName,V=(0,a.v9)((0,y.R1)(A)).currentTabIndex,F=(0,c.useState)(V||0),W=(0,l.Z)(F,2),X=W[0],K=W[1],J=(0,c.useState)(!1),q=(0,l.Z)(J,2),H=q[0],z=q[1],$=(0,c.useState)(!1),ee=(0,l.Z)($,2),Ae=ee[0],ne=ee[1],te=(0,c.useState)(!1),le=(0,l.Z)(te,2),ce=le[0],ae=le[1],se=(0,c.useState)(!1),ie=(0,l.Z)(se,2),re=ie[0],oe=ie[1],ue=Q[0].buttons,de=i.Z.getCommandInstance(Y),xe=(0,c.useState)(!1),he=(0,l.Z)(xe,2),ge=he[0],je=he[1],Ee=(0,c.useState)(0),be=(0,l.Z)(Ee,2),fe=be[0],pe=be[1],Te=(0,c.useState)(0),Re=(0,l.Z)(Te,2),Ce=Re[0],me=Re[1],Be=(0,c.useState)(0),Ze=(0,l.Z)(Be,2),_e=Ze[0],Se=Ze[1],Pe=(0,c.useState)(0),ve=(0,l.Z)(Pe,2),Ne=ve[0],Me=ve[1],Le=(0,c.useState)(0),Ue=(0,l.Z)(Le,2),Ie=Ue[0],ye=Ue[1],Oe=(0,c.useState)(0),ke=(0,l.Z)(Oe,2),De=ke[0],Ge=ke[1],we=(0,c.useState)(0),Qe=(0,l.Z)(we,2),Ye=Qe[0],Ve=Qe[1],Fe=(0,c.useState)(0),We=(0,l.Z)(Fe,2),Xe=We[0],Ke=We[1],Je=(0,c.useState)(!1),qe=(0,l.Z)(Je,2),He=qe[0],ze=qe[1],$e=(0,c.useState)(!1),eA=(0,l.Z)($e,2),AA=eA[0],nA=eA[1],tA=(0,c.useState)(0),lA=(0,l.Z)(tA,2),cA=lA[0],aA=lA[1],sA=(0,c.useState)(!1),iA=(0,l.Z)(sA,2),rA=iA[0],oA=iA[1],uA=(0,c.useState)(!1),dA=(0,l.Z)(uA,2),xA=dA[0],hA=dA[1],gA=(0,c.useState)(!1),jA=(0,l.Z)(gA,2),EA=jA[0],bA=jA[1],fA=(0,c.useState)(0),pA=(0,l.Z)(fA,2),TA=pA[0],RA=pA[1],CA=(0,c.useState)(!1),mA=(0,l.Z)(CA,2),BA=mA[0],ZA=mA[1],_A=(0,c.useState)(0),SA=(0,l.Z)(_A,2),PA=SA[0],vA=SA[1],NA=(0,c.useState)(0),MA=(0,l.Z)(NA,2),LA=MA[0],UA=MA[1],IA=(0,c.useState)(0),yA=(0,l.Z)(IA,2),OA=yA[0],kA=yA[1],DA=(0,c.useState)(0),GA=(0,l.Z)(DA,2),wA=GA[0],QA=GA[1],YA=(0,c.useState)(0),VA=(0,l.Z)(YA,2),FA=VA[0],WA=VA[1],XA=(0,c.useState)(0),KA=(0,l.Z)(XA,2),JA=KA[0],qA=KA[1],HA=(0,c.useState)(""),zA=(0,l.Z)(HA,2),$A=zA[0],en=zA[1],An=(0,c.useState)(""),nn=(0,l.Z)(An,2),tn=nn[0],ln=nn[1],cn=(0,c.createRef)(),an=(0,c.createRef)(),sn=(0,c.createRef)(),rn=(0,c.createRef)(),on=(0,c.createRef)(),un=(0,c.createRef)(),dn=(0,c.createRef)(),xn=(0,c.createRef)(),hn=(0,c.createRef)(),gn=(0,c.createRef)(),jn=(0,c.createRef)(),En=(0,c.createRef)(),bn=(0,c.createRef)(),fn=(0,c.useRef)(null),pn=(0,c.useRef)(null),Tn=(0,c.useCallback)((function(e){0===e&&z(!0),1===e&&ne(!0),2===e&&ae(!0),3===e&&oe(!0)}),[]);(0,c.useEffect)((function(){var e=N.o.getTableAtt();switch(je(0!==e.nWidth),pe(I.fb.round(.001*e.nWidth,2)),e.bAlign){case 0:me(0);break;case 1:me(2);break;case 2:me(1)}if(Se(e.bTextArround),Me(I.fb.round(.001*e.nLeftMargin,2)),ye(I.fb.round(.001*e.nCellTopMargin,2)),Ge(I.fb.round(.001*e.nCellLeftMargin,2)),Ve(I.fb.round(.001*e.nCellRightMargin,2)),Ke(I.fb.round(.001*e.nCellBottomMargin,2)),ze(L.Z.getObjectControlType()===M.uq.eObjCtrHWPTableSelect),nA(0!==e.nRowHeight),aA(I.fb.round(.001*e.nRowHeight,2)),L.Z.isTableObjectType()&&L.Z.getObjectControlType()!==M.uq.eObjCtrHWPTableSelect)switch(N.o.getCanSetRowHeading().result){case 0:oA(!1),hA(!0);break;case 1:oA(!0),hA(!1);break;case 2:oA(!1),hA(!1)}else oA(!1),hA(!0);bA(0!==e.nColumnWidth),RA(I.fb.round(.001*e.nColumnWidth,2)),ZA(0!==e.nCellWidth),vA(I.fb.round(.001*e.nCellWidth,2)),UA(e.bVerticalAlign),kA(I.fb.round(.001*e.nCellTopMarginExt,2)),QA(I.fb.round(.001*e.nCellLeftMarginExt,2)),WA(I.fb.round(.001*e.nCellRightMarginExt,2)),qA(I.fb.round(.001*e.nCellBottomMarginExt,2)),Tn(X)}),[Tn,X]);var Rn=(0,c.useCallback)((function(e,A,n,t){return!!(0,I.wI)(e,A,n)||(u.Z.showDialog({dialogId:U.O.COMMON_ALERT,bModal:!0,alertMsg:{label:"IDS_MSG_ERROR_OUT_OF_RANGE",values:{arg1:"".concat(A),arg2:"".concat(n)}},currentTabIndex:0},t),!1)}),[]),Cn=(0,c.useCallback)((function(){return!H||!!Rn(fe,D,k,(function(){setTimeout((function(){var e;null===(e=cn.current)||void 0===e||e.select()}),100)}))&&(!!Rn(Ne,w,G,(function(){setTimeout((function(){var e;null===(e=an.current)||void 0===e||e.select()}),100)}))&&(!!Rn(Ie,w,G,(function(){setTimeout((function(){var e;null===(e=sn.current)||void 0===e||e.select()}),100)}))&&(!!Rn(De,w,G,(function(){setTimeout((function(){var e;null===(e=rn.current)||void 0===e||e.select()}),100)}))&&(!!Rn(Ye,w,G,(function(){setTimeout((function(){var e;null===(e=on.current)||void 0===e||e.select()}),100)}))&&!!Rn(Xe,w,G,(function(){setTimeout((function(){var e;null===(e=un.current)||void 0===e||e.select()}),100)}))))))}),[Xe,un,De,rn,Ye,on,Ie,sn,Rn,Ne,an,H,fe,cn]),mn=(0,c.useCallback)((function(e){en(e.target.value)}),[]),Bn=(0,c.useCallback)((function(e){ln(e.target.value)}),[]),Zn=(0,c.useCallback)((function(){return!Ae||!!Rn(cA,D,k,(function(){setTimeout((function(){var e;null===(e=dn.current)||void 0===e||e.select()}),100)}))&&!!Rn(TA,D,k,(function(){setTimeout((function(){var e;null===(e=xn.current)||void 0===e||e.select()}),100)}))}),[Rn,TA,xn,Ae,cA,dn]),_n=(0,c.useCallback)((function(){return!ce||!!Rn(PA,D,k,(function(){setTimeout((function(){var e;null===(e=hn.current)||void 0===e||e.select()}),100)}))&&(!!Rn(OA,w,G,(function(){setTimeout((function(){var e;null===(e=gn.current)||void 0===e||e.select()}),100)}))&&(!!Rn(wA,w,G,(function(){setTimeout((function(){var e;null===(e=jn.current)||void 0===e||e.select()}),100)}))&&(!!Rn(FA,w,G,(function(){setTimeout((function(){var e;null===(e=En.current)||void 0===e||e.select()}),100)}))&&!!Rn(JA,w,G,(function(){setTimeout((function(){var e;null===(e=bn.current)||void 0===e||e.select()}),100)})))))}),[JA,bn,OA,wA,jn,FA,En,gn,PA,hn,Rn,ce]),Sn=(0,c.useCallback)((function(){if(Cn()&&Zn()&&_n()){var e=H?{tableWidthType:ge?1:0,tableWidth:ge?fe:-1,alignmentIndex:Ce,textWrappingIndex:_e,indentFromLeft:Ne,cellMarginTop:Ie,cellMarginLeft:De,cellMarginRight:Ye,cellMarginBottom:Xe}:null,A=Ae?{rowHeightType:AA?1:0,rowHeight:AA?cA:-1,columnWidthType:EA?1:0,columnWidth:EA?TA:-1,isRepeatRowHeader:rA}:null,t=ce?{cellWidthType:BA?1:0,cellWidth:BA?PA:-1,verticalAlign:LA,cellMarginTopExt:OA,cellMarginLeftExt:wA,cellMarginRightExt:FA,cellMarginBottomExt:JA}:null,l=re?{subjectInputValue:$A,descriptionInputValue:tn}:null;de.invoke({tableProperty:e,rowColumnProperty:A,cellProperty:t,alertnativeText:l}),u.Z.hideDialog(n)}}),[Cn,Zn,_n,H,ge,fe,Ce,_e,Ne,Ie,De,Ye,Xe,Ae,AA,cA,EA,TA,ce,BA,PA,LA,OA,wA,FA,JA,re,$A,tn,de,n,rA]),Pn={tabIndex:X,tabs:Q,onTabChange:(0,c.useCallback)((function(e){K(e),Tn(e)}),[Tn])},vn=(0,c.useCallback)((function(e){ue.length-1===e?(u.Z.clickButton(n,e),u.Z.hideDialog(n)):Sn()}),[ue.length,n,Sn]),Nn={buttonLabels:ue,onClick:vn},Mn=(0,c.useCallback)((function(e){e.keyCode===x.S.Enter&&Sn()}),[Sn]),Ln=(0,c.useCallback)((function(e){je(e.currentTarget.checked)}),[]),Un=(0,c.useMemo)((function(){return{value:fe,isDisable:!ge,min:D,max:k,changeUnit:.1,onChange:function(e){pe(e)},inputWidth:116,suffix:"cm"}}),[ge,fe]),In=(0,c.useCallback)((function(e){e!==Ce&&me(e)}),[Ce]),yn=(0,c.useCallback)((function(e){e!==_e&&Se(e)}),[_e]),On=(0,c.useMemo)((function(){return{value:Ne,min:w,max:G,changeUnit:.1,onChange:function(e){Me(e)},inputWidth:160,suffix:"cm"}}),[Ne]),kn=(0,c.useMemo)((function(){return{value:Ie,min:w,max:G,changeUnit:.05,onChange:function(e){ye(e)},inputWidth:108,suffix:"cm"}}),[Ie]),Dn=(0,c.useMemo)((function(){return{value:De,min:w,max:G,changeUnit:.05,onChange:function(e){Ge(e)},inputWidth:108,suffix:"cm"}}),[De]),Gn=(0,c.useMemo)((function(){return{value:Xe,min:w,max:G,changeUnit:.05,onChange:function(e){Ke(e)},inputWidth:108,suffix:"cm"}}),[Xe]),wn=(0,c.useMemo)((function(){return{value:Ye,min:w,max:G,changeUnit:.05,onChange:function(e){Ve(e)},inputWidth:108,suffix:"cm"}}),[Ye]),Qn=(0,c.useCallback)((function(){u.Z.showDialog({dialogId:U.O.COMMON_ALERT,bModal:!0,alertMsg:{label:"",values:void 0},currentTabIndex:0})}),[]),Yn=(0,c.useCallback)((function(e){nA(e.currentTarget.checked)}),[]),Vn=(0,c.useMemo)((function(){return{value:cA,isDisable:!AA,min:D,max:k,changeUnit:.1,onChange:function(e){aA(e)},inputWidth:116,suffix:"cm"}}),[AA,cA]),Fn=(0,c.useCallback)((function(e){oA(e.currentTarget.checked)}),[]),Wn=(0,c.useCallback)((function(e){bA(e.currentTarget.checked)}),[]),Xn=(0,c.useCallback)((function(e){ZA(e.currentTarget.checked)}),[]),Kn=(0,c.useMemo)((function(){return{value:TA,isDisable:!EA,min:D,max:k,changeUnit:.1,onChange:function(e){RA(e)},inputWidth:116,suffix:"cm"}}),[TA,EA]),Jn=(0,c.useCallback)((function(e){e!==LA&&UA(e)}),[LA]),qn=(0,c.useCallback)((function(){u.Z.showDialog({dialogId:U.O.WORD_TABLE_POSITION,bModal:!0,currentTabIndex:0})}),[]),Hn=(0,c.useMemo)((function(){return{value:PA,isDisable:!BA,min:D,max:k,changeUnit:.1,onChange:function(e){vA(e)},inputWidth:116,suffix:"cm"}}),[PA,BA]),zn=(0,c.useMemo)((function(){return{value:OA,min:w,max:G,changeUnit:.05,onChange:function(e){kA(e)},inputWidth:108,suffix:"cm"}}),[OA]),$n=(0,c.useMemo)((function(){return{value:wA,min:w,max:G,changeUnit:.05,onChange:function(e){QA(e)},inputWidth:108,suffix:"cm"}}),[wA]),et=(0,c.useMemo)((function(){return{value:JA,min:w,max:G,changeUnit:.05,onChange:function(e){qA(e)},inputWidth:108,suffix:"cm"}}),[JA]),At=(0,c.useMemo)((function(){return{value:FA,min:w,max:G,changeUnit:.05,onChange:function(e){WA(e)},inputWidth:108,suffix:"cm"}}),[FA]);return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(r.Z,(0,t.Z)({},Pn)),(0,O.jsxs)("div",{className:s.Z.popup_contents,onKeyDown:Mn,children:[(0,O.jsxs)("div",{style:{display:0===X?"":"none"},children:[(0,O.jsxs)("table",{className:"".concat(s.Z.form_table),children:[(0,O.jsxs)("colgroup",{children:[(0,O.jsx)("col",{style:{width:"130px"}}),(0,O.jsx)("col",{style:{width:"auto"}})]}),(0,O.jsxs)("tbody",{children:[(0,O.jsx)("tr",{children:(0,O.jsx)("th",{colSpan:2,children:(0,O.jsx)(d.Z,{label:"DLG_TABLE_PROPERTY_SIZE"})})}),(0,O.jsxs)("tr",{children:[(0,O.jsx)("th",{children:(0,O.jsx)("div",{children:(0,O.jsxs)("label",{className:"".concat(s.Z.chk_label),children:[(0,O.jsx)("input",{type:"checkbox",checked:ge,onChange:Ln}),(0,O.jsx)("span",{children:(0,O.jsx)(d.Z,{label:"DLG_TABLE_PROPERTY_PREFERRED_WIDTH"})})]})})}),(0,O.jsx)("td",{children:(0,O.jsx)(h.P,(0,t.Z)({ref:cn},Un))})]})]})]}),(0,O.jsxs)("table",{className:"".concat(s.Z.form_table," ").concat(s.Z.line),children:[(0,O.jsxs)("colgroup",{children:[(0,O.jsx)("col",{style:{width:"auto"}}),(0,O.jsx)("col",{style:{width:"160px"}})]}),(0,O.jsxs)("tbody",{children:[(0,O.jsx)("tr",{children:(0,O.jsx)("th",{colSpan:2,children:(0,O.jsx)(d.Z,{label:"DLG_TABLE_PROPERTY_ALIGNMENT"})})}),(0,O.jsxs)("tr",{children:[(0,O.jsx)("td",{style:{paddingLeft:"12px"},children:(0,O.jsx)("div",{className:"".concat(s.Z.direction_layout," ").concat(s.Z.cell_form),children:(0,O.jsxs)("ul",{children:[(0,O.jsx)("li",{children:(0,O.jsx)("button",{className:"".concat(0===Ce?s.Z.active:""),style:{backgroundImage:"-webkit-image-set(url(".concat(g,") 1x, url(").concat(C,") 2x)"),backgroundSize:"30px 30px"},onClick:function(){return In(0)},children:(0,O.jsx)(d.Z,{label:"DLG_TABLE_PROPERTY_ALIGNMENT_LEFT"})})}),(0,O.jsx)("li",{children:(0,O.jsx)("button",{className:"".concat(1===Ce?s.Z.active:""),style:{backgroundImage:"-webkit-image-set(url(".concat(j,") 1x, url(").concat(m,") 2x)"),backgroundSize:"30px 30px"},onClick:function(){return In(1)},children:(0,O.jsx)(d.Z,{label:"DLG_TABLE_PROPERTY_ALIGNMENT_CENTER"})})}),(0,O.jsx)("li",{children:(0,O.jsx)("button",{className:"".concat(2===Ce?s.Z.active:""),style:{backgroundImage:"-webkit-image-set(url(".concat(E,") 1x, url(").concat(B,") 2x)"),backgroundSize:"30px 30px"},onClick:function(){return In(2)},children:(0,O.jsx)(d.Z,{label:"DLG_TABLE_PROPERTY_ALIGNMENT_RIGHT"})})})]})})}),(0,O.jsxs)("td",{style:{padding:"0"},className:"".concat(0===_e&&0===Ce?"":s.Z.disabled),children:[(0,O.jsx)(d.Z,{label:"DLG_TABLE_PROPERTY_INDENT_FROM_LEFT"}),(0,O.jsx)("div",{style:{marginTop:"5px"},children:(0,O.jsx)(h.P,(0,t.Z)({ref:an},On))})]})]})]})]}),(0,O.jsxs)("table",{className:"".concat(s.Z.form_table," ").concat(s.Z.line),children:[(0,O.jsxs)("colgroup",{children:[(0,O.jsx)("col",{style:{width:"auto"}}),(0,O.jsx)("col",{style:{width:"160px"}})]}),(0,O.jsxs)("tbody",{children:[(0,O.jsx)("tr",{children:(0,O.jsx)("th",{colSpan:2,children:(0,O.jsx)(d.Z,{label:"DLG_TABLE_PROPERTY_TEXT_WRAPPING"})})}),(0,O.jsxs)("tr",{children:[(0,O.jsx)("td",{style:{paddingLeft:"12px"},children:(0,O.jsx)("div",{className:"".concat(s.Z.direction_layout," ").concat(s.Z.cell_form," ").concat(s.Z.type02),children:(0,O.jsxs)("ul",{children:[(0,O.jsx)("li",{children:(0,O.jsx)("button",{className:"".concat(0===_e?s.Z.active:""),style:{backgroundImage:"-webkit-image-set(url(".concat(b,") 1x, url(").concat(Z,") 2x)"),backgroundSize:"30px 30px"},onClick:function(){return yn(0)},children:(0,O.jsx)(d.Z,{label:"DLG_TABLE_PROPERTY_TEXT_WRAPPING_NONE"})})}),(0,O.jsx)("li",{children:(0,O.jsx)("button",{className:"".concat(1===_e?s.Z.active:""),style:{backgroundImage:"-webkit-image-set(url(".concat(f,") 1x, url(").concat(_,") 2x)"),backgroundSize:"30px 30px"},onClick:function(){return yn(1)},children:(0,O.jsx)(d.Z,{label:"DLG_TABLE_PROPERTY_TEXT_WRAPPING_ARROUND"})})})]})})}),(0,O.jsx)("td",{className:s.Z.alr,children:(0,O.jsx)("div",{className:"".concat(s.Z.btn_wrap," ").concat(s.Z.vertical," ").concat(1===_e?"":s.Z.disabled),style:{width:"125px",display:"inline-block"},children:(0,O.jsx)("button",{className:s.Z.btn,onClick:qn,children:(0,O.jsx)(d.Z,{label:"DLG_TABLE_PROPERTY_TEXT_WRAPPING_POSITION"})})})})]})]})]}),(0,O.jsxs)("table",{className:"".concat(s.Z.form_table," ").concat(s.Z.line),children:[(0,O.jsxs)("colgroup",{children:[(0,O.jsx)("col",{style:{width:"100px"}}),(0,O.jsx)("col",{style:{width:"130px"}}),(0,O.jsx)("col",{style:{width:"100px"}}),(0,O.jsx)("col",{style:{width:"auto"}})]}),(0,O.jsxs)("tbody",{children:[(0,O.jsx)("tr",{children:(0,O.jsx)("th",{colSpan:4,children:(0,O.jsx)(d.Z,{label:"DLG_TABLE_OPTION_DIALOG_DEFAULT_MARGIN_LABEL"})})}),(0,O.jsxs)("tr",{children:[(0,O.jsx)("th",{children:(0,O.jsx)(d.Z,{label:"DLG_TABLE_PROPERTY_MARGINS_TOP"})}),(0,O.jsx)("td",{children:(0,O.jsx)(h.P,(0,t.Z)({ref:sn},kn))}),(0,O.jsx)("th",{children:(0,O.jsx)(d.Z,{label:"DLG_TABLE_PROPERTY_MARGINS_LEFT"})}),(0,O.jsx)("td",{children:(0,O.jsx)(h.P,(0,t.Z)({ref:rn},Dn))})]}),(0,O.jsxs)("tr",{children:[(0,O.jsx)("th",{children:(0,O.jsx)(d.Z,{label:"DLG_TABLE_PROPERTY_MARGINS_BOTTOM"})}),(0,O.jsx)("td",{children:(0,O.jsx)(h.P,(0,t.Z)({ref:un},Gn))}),(0,O.jsx)("th",{children:(0,O.jsx)(d.Z,{label:"DLG_TABLE_PROPERTY_MARGINS_RIGHT"})}),(0,O.jsx)("td",{children:(0,O.jsx)(h.P,(0,t.Z)({ref:on},wn))})]})]})]}),(0,O.jsx)("div",{className:"".concat(s.Z.btn_wrap," ").concat(s.Z.right),style:{margin:"10px 0 20px 0",display:"none"},children:(0,O.jsx)("button",{className:"".concat(s.Z.btn," ").concat(He?s.Z.disabled:""),onClick:Qn,children:(0,O.jsx)("span",{children:(0,O.jsx)(d.Z,{label:"DLG_TABLE_PROPERTY_BORDERS_SHADING"})})})})]}),(0,O.jsxs)("div",{style:{display:1===X?"":"none"},children:[(0,O.jsxs)("table",{className:"".concat(s.Z.form_table),children:[(0,O.jsxs)("colgroup",{children:[(0,O.jsx)("col",{style:{width:"140px"}}),(0,O.jsx)("col",{style:{width:"auto"}})]}),(0,O.jsxs)("tbody",{children:[(0,O.jsx)("tr",{children:(0,O.jsx)("th",{colSpan:2,children:(0,O.jsx)(d.Z,{label:"DLG_TABLE_PROPERTY_ROW_WORD"})})}),(0,O.jsx)("tr",{children:(0,O.jsx)("th",{colSpan:2,children:(0,O.jsx)(d.Z,{label:"DLG_TABLE_PROPERTY_SIZE"})})}),(0,O.jsxs)("tr",{children:[(0,O.jsx)("th",{children:(0,O.jsx)("div",{children:(0,O.jsxs)("label",{className:"".concat(s.Z.chk_label),children:[(0,O.jsx)("input",{type:"checkbox",checked:AA,onChange:Yn}),(0,O.jsx)("span",{children:(0,O.jsx)(d.Z,{label:"DLG_TABLE_PROPERTY_PREFERRED_HEIGHT"})})]})})}),(0,O.jsx)("td",{children:(0,O.jsx)(h.P,(0,t.Z)({ref:dn},Vn))})]}),(0,O.jsx)("tr",{children:(0,O.jsx)("th",{colSpan:2,children:(0,O.jsx)(d.Z,{label:"DLG_TABLE_PROPERTY_OPTIONS"})})}),(0,O.jsx)("tr",{children:(0,O.jsx)("th",{colSpan:2,children:(0,O.jsx)("div",{children:(0,O.jsxs)("label",{className:"".concat(s.Z.chk_label),children:[(0,O.jsx)("input",{type:"checkbox",disabled:xA,checked:rA,onChange:Fn}),(0,O.jsx)("span",{children:(0,O.jsx)(d.Z,{label:"DLG_TABLE_PROPERTY_HEADING_ROWS_REPEAT"})})]})})})})]})]}),(0,O.jsxs)("table",{className:"".concat(s.Z.form_table," ").concat(s.Z.line),children:[(0,O.jsxs)("colgroup",{children:[(0,O.jsx)("col",{style:{width:"140px"}}),(0,O.jsx)("col",{style:{width:"auto"}})]}),(0,O.jsxs)("tbody",{children:[(0,O.jsx)("tr",{children:(0,O.jsx)("th",{colSpan:2,children:(0,O.jsx)(d.Z,{label:"DLG_TABLE_PROPERTY_COLUMN_WORD"})})}),(0,O.jsx)("tr",{children:(0,O.jsx)("th",{colSpan:2,children:(0,O.jsx)(d.Z,{label:"DLG_TABLE_PROPERTY_SIZE"})})}),(0,O.jsxs)("tr",{children:[(0,O.jsx)("th",{children:(0,O.jsx)("div",{children:(0,O.jsxs)("label",{className:"".concat(s.Z.chk_label),children:[(0,O.jsx)("input",{type:"checkbox",checked:EA,onChange:Wn}),(0,O.jsx)("span",{children:(0,O.jsx)(d.Z,{label:"DLG_TABLE_PROPERTY_PREFERRED_WIDTH"})})]})})}),(0,O.jsx)("td",{children:(0,O.jsx)(h.P,(0,t.Z)({ref:xn},Kn))})]})]})]})]}),(0,O.jsxs)("div",{style:{display:2===X?"":"none"},children:[(0,O.jsxs)("table",{className:"".concat(s.Z.form_table),children:[(0,O.jsxs)("colgroup",{children:[(0,O.jsx)("col",{style:{width:"130px"}}),(0,O.jsx)("col",{style:{width:"auto"}})]}),(0,O.jsxs)("tbody",{children:[(0,O.jsx)("tr",{children:(0,O.jsx)("th",{colSpan:2,children:(0,O.jsx)(d.Z,{label:"DLG_TABLE_PROPERTY_SIZE"})})}),(0,O.jsxs)("tr",{children:[(0,O.jsx)("th",{children:(0,O.jsx)("div",{children:(0,O.jsxs)("label",{className:"".concat(s.Z.chk_label),children:[(0,O.jsx)("input",{type:"checkbox",checked:BA,onChange:Xn}),(0,O.jsx)("span",{children:(0,O.jsx)(d.Z,{label:"DLG_TABLE_PROPERTY_PREFERRED_WIDTH"})})]})})}),(0,O.jsx)("td",{children:(0,O.jsx)(h.P,(0,t.Z)({ref:hn},Hn))})]})]})]}),(0,O.jsxs)("table",{className:"".concat(s.Z.form_table," ").concat(s.Z.line),children:[(0,O.jsx)("colgroup",{children:(0,O.jsx)("col",{style:{width:"auto"}})}),(0,O.jsxs)("tbody",{children:[(0,O.jsx)("tr",{children:(0,O.jsx)("th",{children:(0,O.jsx)(d.Z,{label:"DLG_TABLE_PROPERTY_VERTICAL_ALIGNMENT"})})}),(0,O.jsx)("tr",{children:(0,O.jsx)("td",{children:(0,O.jsx)("div",{className:"".concat(s.Z.direction_layout," ").concat(s.Z.cell_form),style:{marginLeft:"15px"},children:(0,O.jsxs)("ul",{children:[(0,O.jsx)("li",{children:(0,O.jsx)("button",{className:"".concat(0===LA?s.Z.active:""),style:{backgroundImage:"-webkit-image-set(url(".concat(p,") 1x, url(").concat(S,") 2x)"),backgroundSize:"30px 30px"},onClick:function(){return Jn(0)},children:(0,O.jsx)(d.Z,{label:"DLG_TABLE_PROPERTY_TOP"})})}),(0,O.jsx)("li",{children:(0,O.jsx)("button",{className:"".concat(1===LA?s.Z.active:""),style:{backgroundImage:"-webkit-image-set(url(".concat(T,") 1x, url(").concat(P,") 2x)"),backgroundSize:"30px 30px"},onClick:function(){return Jn(1)},children:(0,O.jsx)(d.Z,{label:"DLG_TABLE_PROPERTY_CENTER"})})}),(0,O.jsx)("li",{children:(0,O.jsx)("button",{className:"".concat(2===LA?s.Z.active:""),style:{backgroundImage:"-webkit-image-set(url(".concat(R,") 1x, url(").concat(v,") 2x)"),backgroundSize:"30px 30px"},onClick:function(){return Jn(2)},children:(0,O.jsx)(d.Z,{label:"DLG_TABLE_PROPERTY_BOTTOM"})})})]})})})})]})]}),(0,O.jsxs)("table",{className:"".concat(s.Z.form_table," ").concat(s.Z.line),children:[(0,O.jsxs)("colgroup",{children:[(0,O.jsx)("col",{style:{width:"100px"}}),(0,O.jsx)("col",{style:{width:"130px"}}),(0,O.jsx)("col",{style:{width:"100px"}}),(0,O.jsx)("col",{style:{width:"auto"}})]}),(0,O.jsxs)("tbody",{children:[(0,O.jsx)("tr",{children:(0,O.jsx)("th",{colSpan:4,children:(0,O.jsx)(d.Z,{label:"DLG_TABLE_PROPERTY_CELL_MARGINS"})})}),(0,O.jsxs)("tr",{children:[(0,O.jsx)("th",{children:(0,O.jsx)(d.Z,{label:"DLG_TABLE_PROPERTY_MARGINS_TOP"})}),(0,O.jsx)("td",{children:(0,O.jsx)(h.P,(0,t.Z)({ref:gn},zn))}),(0,O.jsx)("th",{children:(0,O.jsx)(d.Z,{label:"DLG_TABLE_PROPERTY_MARGINS_LEFT"})}),(0,O.jsx)("td",{children:(0,O.jsx)(h.P,(0,t.Z)({ref:jn},$n))})]}),(0,O.jsxs)("tr",{children:[(0,O.jsx)("th",{children:(0,O.jsx)(d.Z,{label:"DLG_TABLE_PROPERTY_MARGINS_BOTTOM"})}),(0,O.jsx)("td",{children:(0,O.jsx)(h.P,(0,t.Z)({ref:bn},et))}),(0,O.jsx)("th",{children:(0,O.jsx)(d.Z,{label:"DLG_TABLE_PROPERTY_MARGINS_RIGHT"})}),(0,O.jsx)("td",{children:(0,O.jsx)(h.P,(0,t.Z)({ref:En},At))})]})]})]})]}),(0,O.jsx)("div",{style:{display:3===X?"":"none"},children:(0,O.jsxs)("table",{className:"".concat(s.Z.form_table),children:[(0,O.jsx)("colgroup",{children:(0,O.jsx)("col",{style:{width:"auto"}})}),(0,O.jsxs)("tbody",{children:[(0,O.jsx)("tr",{children:(0,O.jsx)("td",{children:(0,O.jsx)(d.Z,{label:"DLG_TABLE_PROPERTY_ALTERNATIVE_TEXT_SUBJECT"})})}),(0,O.jsx)("tr",{children:(0,O.jsx)("td",{children:(0,O.jsx)("div",{className:"".concat(s.Z.multi_select),children:(0,O.jsx)("div",{className:s.Z.i_txt,children:(0,O.jsx)("input",{type:"text",ref:fn,onChange:mn,spellCheck:!1})})})})}),(0,O.jsx)("tr",{children:(0,O.jsx)("td",{children:(0,O.jsx)(d.Z,{label:"DLG_TABLE_PROPERTY_ALTERNATIVE_TEXT_DESCRIPTION"})})}),(0,O.jsx)("tr",{children:(0,O.jsx)("td",{children:(0,O.jsx)("textarea",{className:s.Z.f_textarea,style:{height:"200px"},ref:pn,onChange:Bn,spellCheck:!1})})}),(0,O.jsx)("tr",{children:(0,O.jsx)("td",{children:(0,O.jsx)(d.Z,{label:"DLG_TABLE_PROPERTY_ALTERNATIVE_TEXT"})})}),(0,O.jsx)("tr",{children:(0,O.jsx)("td",{children:(0,O.jsx)(d.Z,{label:"IDC_MSG_TABLEPROPERTY_TEXT_ALTERNATIVE_DESCR"})})})]})]})})]}),(0,O.jsx)(o.Z,(0,t.Z)({},Nn))]})}},169040:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeAgMAAABGXkYxAAAACVBMVEUAAAA8PDygoqsqusXjAAAAAXRSTlMAQObYZgAAACRJREFUGNNjwAJCQSAAyHAA8QQGiuG0atWqFeRI4TcZ4UFMAABzfRIZXKC+QAAAAABJRU5ErkJggg=="},456850:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAgMAAADXB5lNAAAACVBMVEUAAAA8PDygoqsqusXjAAAAAXRSTlMAQObYZgAAACpJREFUOMtjoBdgDYWDABwCCMWjAsNfYBUUYAgMUVsWYAjQMAgJ5yg6AQA4nzpdkhGpjgAAAABJRU5ErkJggg=="},463923:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeAgMAAABGXkYxAAAACVBMVEUAAAA8PDygoqsqusXjAAAAAXRSTlMAQObYZgAAACVJREFUGNNjwAJCQSAAyHAA8QQoZzitWrVqBTlScBEqMhAexAQA2pASGSEj6RQAAAAASUVORK5CYII="},226465:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAgMAAADXB5lNAAAACVBMVEUAAAA8PDygoqsqusXjAAAAAXRSTlMAQObYZgAAAC1JREFUOMtjoBdgDYWDABwCCMWjAtgFVkEBhsAQtWUBhsAgCOQhI4A3R9EJAABjqTpdCez72AAAAABJRU5ErkJggg=="},236708:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeAgMAAABGXkYxAAAACVBMVEUAAAA8PDygoqsqusXjAAAAAXRSTlMAQObYZgAAACZJREFUGNNjwAJCQSAAyHAA8QSQGU6rVq1aIUCGFFxkMDCgHsQEAEGyEhkf3mZUAAAAAElFTkSuQmCC"},713070:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAAgMAAADXB5lNAAAACVBMVEUAAAA8PDygoqsqusXjAAAAAXRSTlMAQObYZgAAACtJREFUOMtjoBdgDYWDABwCCMXUFFgFBRgCQ9SWBXgFwGBUYEQI4M1RdAIAjrM6XXgU6jIAAAAASUVORK5CYII="},954362:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeAgMAAABGXkYxAAAADFBMVEUAAABAQEA9bslAQEDlcXyDAAAAAnRSTlMA2hCV9vIAAAAiSURBVBjTYyANMK0CAjADBPEwyFSMFzD+B4G/ZEg5EOk9AOyWF18Y4ja+AAAAAElFTkSuQmCC"},111781:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAPKADAAQAAAABAAAAPAAAAACL3+lcAAABAUlEQVRoBe2ZMQ7DIAxFQ5U7derA2tylh+ld2pWhU05FJyQiFQniFEx4WUISjO33LbCUaeKCAAQgAAEIQAACEPgPAbN32dtj9Xttj7T7PK9FOVyOdN7DWrM0yFLCwV+oEKl9WC/3PpzCJJxbGr3OQ+FelcuNG4VzSfU6r6hLiZMM52j8rsW49BwfrqTptFqUZU2fw5U0Cdcsrxa+ULgF9Zo+h1OYTqtmeeELAhCAAAQgsCWQPIettS/v/X07va8nY8zbObfEUZ+901Lxwy8GzhgCEJARYJeW8VNnzS6tThICgoCMgIpd+lfPK0srba2ll2Y3TWvEFwhAAAIQgMBpCHwBA4E3NHP5v5gAAAAASUVORK5CYII="},649127:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeAgMAAABGXkYxAAAADFBMVEUAAABAQEA9bslAQEDlcXyDAAAAAnRSTlMA2hCV9vIAAAAiSURBVBjTYyAJMK0CAjADBPEwyFSMHzD+B4G/ZEg5EOk/APTEF1+4LNGlAAAAAElFTkSuQmCC"},337846:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAPKADAAQAAAABAAAAPAAAAACL3+lcAAAA/UlEQVRoBe2ZMQ7CMAxFG8SdmBiywl04DHeBNQNTTxXEEImBryqJgNh5XdomcfX9vpVY6rJwQQACEIAABCAAAQh8h0BQnz1e1qzmfjn+uB6kxhYdu5YgyzH7LfGthEuF9MZv6audn85hEq4tEWvrcdiaY7V6cbiWmLX1sosp5+i/E2o9x5Xu6UqaTkuVgpfx6UqahL2UrsoDhxUZL+PTOUyn5aV0yQMCEIAABCwSkOdwjPGWcz5ZTKpoDiHcU0rn8v66e++0hvgh+A6cZwhAoI8Au3Qfv+Gi2aWHswRBEOgjMMQu/ann7UtLR4/SS7Obao+YgQAEIAABCLgh8ASDrjc0bBidhAAAAABJRU5ErkJggg=="},797859:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeAgMAAABGXkYxAAAADFBMVEUAAABAQEA9bslAQEDlcXyDAAAAAnRSTlMA2hCV9vIAAAAlSURBVBjTYyARcK1atWoFiMEBgngYZCrGBxj/g8BfMqQciPQdAFNxGAE0FaSeAAAAAElFTkSuQmCC"},355935:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAPKADAAQAAAABAAAAPAAAAACL3+lcAAAA+ElEQVRoBe2ZMQ6DMAxFCeJOTB2ytnfhML0LXTMw9VTphMQQqxI2knEeEwqyY79v2ZYYBh4IQAACEIAABCAAgWsIJGu3j+VbrX2e8be952Zu4xlnd7aZrgpeIvzvvr1CtPbSPd0pTMJSKUQ5R+EoSkp5oLBEJsp5cxvRJLfPUY0PC1tpjndX0mxaFuXk2Ud3JU3CnsvRIjYUtqDo2Ud3CrNpeS5HYoMABCAAgegExDmcc15rrc87A0gpfUopr2MO0TctFz/2jsB5hwAEdATo0jp+7qzp0u4kISAI6Ai46NKtnVeXlmztZZemm8oa8QUCEIAABCAQhsAPY1Q3NEkwQ6AAAAAASUVORK5CYII="},716333:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeAgMAAABGXkYxAAAADFBMVEUAAABAQEA9bslAQEDlcXyDAAAAAnRSTlMA2hCV9vIAAAAiSURBVBjTYyANMK0CAjADBPEwyFSMFzD+B4G/ZEg5EOk9AOyWF18Y4ja+AAAAAElFTkSuQmCC"},427402:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAPKADAAQAAAABAAAAPAAAAACL3+lcAAABAUlEQVRoBe2ZMQ7DIAxFQ5U7derA2tylh+ld2pWhU05FJyQiFQniFEx4WUISjO33LbCUaeKCAAQgAAEIQAACEPgPAbN32dtj9Xttj7T7PK9FOVyOdN7DWrM0yFLCwV+oEKl9WC/3PpzCJJxbGr3OQ+FelcuNG4VzSfU6r6hLiZMM52j8rsW49BwfrqTptFqUZU2fw5U0Cdcsrxa+ULgF9Zo+h1OYTqtmeeELAhCAAAQgsCWQPIettS/v/X07va8nY8zbObfEUZ+901Lxwy8GzhgCEJARYJeW8VNnzS6tThICgoCMgIpd+lfPK0srba2ll2Y3TWvEFwhAAAIQgMBpCHwBA4E3NHP5v5gAAAAASUVORK5CYII="},803547:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeAgMAAABGXkYxAAAADFBMVEUAAABAQEA9bslAQEDlcXyDAAAAAnRSTlMA2hCV9vIAAAAySURBVBjTYyAJMF5aBQSyQBYTGMIYYCkQA1UKpBguhVcXQjHCrv8g8BfGJUHKgYFcAACinhsX/nW2TwAAAABJRU5ErkJggg=="},291911:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAPKADAAQAAAABAAAAPAAAAACL3+lcAAABXUlEQVRoBe2YOw7CMBBECeJOVBRp4S4chrtAm4KKUwUFaVEke5VdnM9aPBpHduzMvnEmFrsdPwhAAAIQgAAEIACBZQg02rJt2977vj+Px5umeXRddxn6TtdXPx7b6vp5O35qmNIr+vZyYWxDFGnUOtw2n97B4RKXt5rvddgBN+atFBzTl/lUHbSlrKmnzV+736rXu6XnS711iCR6VYfle7uOrvKnWPV6HS5XtvEK6klrSlfJN3hqbc+4nLSsc/7OYfUdtqael7A4ITukdL6sZ9XrdThJPXlg0DbRqzpsTb0ohVr1eh2OUt/POij4Z3SVTFTfYWvqRanTqte7pZPUi1KwoiPRy0lLIUU3BCohoL7DudSrpKavzPH/6NLpTWmZV0ubpHQtwtEJAQjkCZDSeS7V9pLS1VqHcAjkCYRI6dyZNy+3vDfKWZo0LfeSFSAAAQhAAAIQgAAEILAogTdxoZAC5T5fBwAAAABJRU5ErkJggg=="}}]);