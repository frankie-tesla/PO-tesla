"use strict";(self.webpackChunkpolaris_weboffice=self.webpackChunkpolaris_weboffice||[]).push([[153953],{832804:function(e,n,t){t.d(n,{NI:function(){return b},PT:function(){return m},R3:function(){return g},bD:function(){return f},mU:function(){return P}});var i=t(426373),a=t(135323),r=t(101922),o=t(371266),u=t(588567),c=t(981142),l=t(625477),d=t(726091),s={isFindDisabled:!1,isReplaceDisabled:!1,findString:"",replaceString:"",direction:void 0,eFindReplaceResultType:void 0,highlightedCount:void 0},Z=(0,i.oM)({name:"findReplace",initialState:s,reducers:{setFindString:function(e,n){e.findString=n.payload},setReplaceString:function(e,n){e.replaceString=n.payload},setHighlightedCount:function(e,n){e.highlightedCount=n.payload},setDirection:function(e,n){e.direction=n.payload}},extraReducers:function(e){e.addCase(r.He,(function(e){e.isFindDisabled=d.Z.isDisable(o.p$9),e.isReplaceDisabled=d.Z.isDisable(o.dYl)})),e.addCase(r.DZ,(function(e,n){e.eFindReplaceResultType=n.payload.nResult}))}}),p=Z.actions,f=p.setFindString,g=(p.setReplaceString,p.setHighlightedCount),P=p.setDirection;n.ZP=Z.reducer;var b=(0,a.P1)((function(e){return e.command.edit.findReplace}),(function(e){return e})),m=((0,a.P1)(b,(function(e){return{isDisabled:e.isFindDisabled}})),(0,a.P1)(b,(function(e){return{isDisabled:e.isReplaceDisabled}})),function(e){return(0,l.RU)("startFindRepeatInvertThunk",(function(n,t){var i=t().command.edit.findReplace.direction===u.mk_.BR_FIND_DIR_NEXT||t().command.edit.findReplace.direction===u.mk_.BR_FIND_DIR_GLOBAL?u.mk_.BR_FIND_DIR_PREV:u.mk_.BR_FIND_DIR_NEXT;e.Direction=i,c.o.searchStart(e),n(P(i))}))})},153953:function(e,n,t){t.r(n),t.d(n,{default:function(){return ke}});var i=t(939646),a=t(409038),r=t(726861),o=t(963243),u=t(618909),c=t(510176),l=t(140138),d=t(740318),s=t(844970),Z=t(298261),p=t(19004),f=t(685772),g=t(82411),P=(0,a.UY)({color:r.ZP,size:o.ZP,name:u.ZP,bold:c.Z,italic:l.Z,strikeline:d.Z,underline:s.Z,backcolor:Z.ZP,subscript:p.Z,superscript:f.Z,style:g.ZP}),b=t(905868),m=t(143850),h=(0,a.UY)({pictureCrop:b.ZP,pictureReset:m.Z}),R=t(72130),S=t(840217),D=t(633250),C=t(117435),I=t(823833),y=t(590605),v=t(8809),w=t(35864),_=t(872635),k=(0,a.UY)({alignment:R.Z,indent:S.Z,outdent:D.Z,bullet:C.Z,bulletPalette:I.Z,numbering:y.ZP,numberingPalette:v.Z,paragraphSpaceNarrow:w.Z,paragraphSpaceWide:_.Z}),N=t(277641),T=t(317483),F=t(441679),U=t(919695),B=t(742914),Y=t(284965),z=t(107073),M=t(269823),H=(0,a.UY)({pageDirection:N.ZP,pageColumn:T.ZP,headerMenu:F.Z,footerMenu:U.Z,pageSize:B.Z,pageBreak:Y.Z,pageNumbering:z.Z,pageSettingPage:M.Z}),L=t(987670),E=t(952256),q=t(832804),x=(0,a.UY)({undo:L.Z,redo:E.Z,findReplace:q.ZP}),X=t(992002),A=t(629376),G=t(568390),W=t(606031),K=t(781058),O=t(607211),V=t(221494),$=t(941151),j=t(983256),J=t(740693),Q=t(538973),ee=t(768874),ne=t(520065),te=t(375384),ie=t(400398),ae=t(8573),re=t(316860),oe=(0,a.UY)({insertTable:X.Z,insertCaption:A.Z,tableCellGroup:G.ZP,tablePenColor:W.ZP,tableBorderTypeList:K.ZP,tablePenWidth:O.ZP,tablePenStyle:V.ZP,tableBorderCopy:$.ZP,tableDraw:j.ZP,tableDrawErase:J.ZP,tableSelect:Q.Z,tableRepeatHeader:ee.Z,tableFormula:ne.ZP,tableComma:te.Z,tableProperty:ie.Z,cellSize:ae.ZP,borderAndBackground:re.Z}),ue=t(105189),ce=t(63464),le=t(258553),de=(0,a.UY)({paste:ue.Z,cut:ce.Z,copy:le.Z}),se=t(862504),Ze=t(849086),pe=t(121162),fe=t(436069),ge=t(893841),Pe=t(110450),be=t(649922),me=t(897359),he=(0,a.UY)({viewMode:se.Z,gridline:Ze.ZP,symbolicParagraph:pe.ZP,symbolicHwpTypeSet:fe.ZP,symbolicTransparentLine:ge.ZP,zoom:Pe.ZP,showMemo:be.ZP,memo:me.ZP}),Re=t(710181),Se=t(523496),De=t(328808),Ce=(0,a.UY)({size:Re.ZP,arrangement:Se.Z,insertCaption:De.Z}),Ie=t(721846),ye=(0,a.UY)({hyperlink:Ie.Z}),ve=(0,a.UY)({font:P,picture:h,paragraph:k,page:H,edit:x,table:oe,clipboard:de,view:he,frame:Ce,hyperlink:ye}),we=t(321859),_e=t(491440),ke={scrollBar:i.Z,command:ve,pageInfo:we.ZP,activeLink:_e.ZP}},321859:function(e,n,t){t.d(n,{Dp:function(){return Z}});var i=t(426373),a=t(135323),r=t(101922),o=t(981142),u=t(53110),c=t(625477),l=t(416031),d=(0,i.oM)({name:"pageInfoStatus",initialState:{currentPageNumber:0,TotalPageNumber:0,isShowingPageInfo:!1},reducers:{setIsShowingPageInfo:function(e,n){e.isShowingPageInfo=n.payload}},extraReducers:function(e){e.addCase(r.qp,(function(e){e.isShowingPageInfo=!u.tq})),e.addCase(r.zv,(function(e){var n=o.o.getConfig();u.tq?(e.currentPageNumber===n.nCurCenterPage&&e.TotalPageNumber===n.nTotalPages||(e.isShowingPageInfo=!0),p()):e.isShowingPageInfo=!0,e.currentPageNumber=n.nCurCenterPage,e.TotalPageNumber=n.nTotalPages}))}}),s=d.actions.setIsShowingPageInfo;n.ZP=d.reducer;var Z=(0,a.P1)((function(e){return e.pageInfo}),(function(e){return e})),p=(0,l.debounce)((function(){(0,c.Ce)(s(!1))}),2e3)},939646:function(e,n,t){t.d(n,{p:function(){return d}});var i=t(601413),a=t(426373),r=t(135323),o=t(101922),u=t(588567),c=t(981142),l=(0,a.oM)({name:"scrollBar",initialState:(0,u.KXh)(),reducers:{},extraReducers:function(e){e.addCase(o.zv,(function(e){var n=c.o.getDefaultScrollInfo();return(0,i.Z)({},n)}))}});n.Z=l.reducer;var d=(0,r.P1)((function(e){return e.scrollBar}),(function(e){return e}))}}]);