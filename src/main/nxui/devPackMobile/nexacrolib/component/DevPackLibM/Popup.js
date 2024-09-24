/**
*  컨설팅 표준화 작업
*  @FileName 	Popup.js 
*  @Creator 	consulting
*  @CreateDate 	2017.03.08
*  @Desction   		
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
*  2017.03.08     	consulting 	           	    최초 생성 
*  2017.10.17     	consulting  	           	주석 정비
*  2018.01.16		consulting					gfnGetApplication 공통함수 변경
*******************************************************************************
*/

var pForm = nexacro.Form.prototype;


/**
* @class 팝업오픈
* @param {String} sPopupId	- 팝업ID
* @param {String} sUrl	 - 팝업URL
* @param {String} [oArg] - 전달값
* @param {String} [sPopupCallback] - 팝업콜백
* @param {Object} [oOption] - 팝업옵션 <br>
*	oOption.top : 상단 좌표 <br>
*	oOption.left : 좌측 좌표 <br>
*	oOption.width : 넓이 <br>
*	oOption.height : 높이 <br>
*	oOption.popuptype : 팝업종류(modal:showModal, modeless:application.open, modalsync:showModalSync, modalwindow:showModalWinddow) <br>
*	oOption.layered : 투명 윈도우 <br>
*	oOption.opacity : 투명도 <br>
*	oOption.autosize : autosize <br>
*  oOption.bIsDetail : 상세화면여부(true:상세조회, false:수정및등록)
* @return N/A
* @example this.gfnOpenPopupM(this);
*/ 
pForm.gfnOpenPopupM = function ( sPopupId, sUrl, oArg, sPopupCallback, oOption)
{
	if (this.gfnIsNull(oArg))     oArg = {};
    var objApp = nexacro.getApplication();
	var nLeft = -1;
	var nTop = -1;
	var nWidth = -1;
	var nHeight = -1;
	var bShowTitle = false;	
	var bShowStatus = false;	
	var sPopupType = "modal";
	var bLayered = false;

	var bAutoSize = false;
	var bResizable = false;
	//var sPopupCallback = (this.gfn_isNull(sPopupCallback)) ? "fn_popupAfter" : sPopupCallback;
	var sTitleText = "";
	var sModalSize = "";	// "", full, center //가로 세로 onsize 발생시 사이즈 및 위치 변경을 위해 추가함.
	var bIsDetail;	//2022.04.04 추가. frmPopup의 title Div 링크 분기처리에 사용.
	
	for (var key in oOption) {
       if (oOption.hasOwnProperty(key)) {
            switch (key) 
			{
				case "top":				
					nTop = parseInt(oOption[key]);
					break;
				case "left":
					nLeft = parseInt(oOption[key]);
					break;
				case "width":
					nWidth = parseInt(oOption[key]);
					break;
				case "height":
					nHeight = parseInt(oOption[key]);
					break;
				case "popuptype":
					sPopupType = oOption[key];
					break;
				case "layered":
					bLayered = oOption[key];
					break;
				case "opacity":
					nOpacity =oOption[key];
					break;
				case "autosize":
					bAutoSize = oOption[key];
					break;
				case "titlebar":
					if (""+oOption[key] == "true")	bShowTitle = true;		
					break;
				case "title":					
					sTitleText = oOption[key];	
					break;		
				case "isDetail":
					bIsDetail = oOption[key];
					
			}	
        }
    }

	var sOpenalign = "";
	if(nLeft == -1 && nTop == -1) 
	{		
		sOpenalign = "center middle";
		if (system.navigatorname == "nexacro") {
			var curX = objApp.mainframe.left;
			var curY = objApp.mainframe.top;
		}else{
			var curX = window.screenLeft;
			var curY = window.screenTop;
		}
		
        nLeft   =  curX + (objApp.mainframe.width / 2) - Math.round(nWidth / 2);
	    nTop    = curY + (objApp.mainframe.height / 2) - Math.round(nHeight / 2) ;		
		
	}else{
		nLeft   =  this.getOffsetLeft() + nLeft;
		nTop   =  this.getOffsetTop() + nTop;
	}
		
	if(nWidth == -1 || nHeight == -1)
	{	    
		if (nWidth == -1 && nHeight == -1) 	//l,t,w,h 모두 기입하지 않으면 full
		{
			sModalSize = "full";
            if (nWidth == -1 || nWidth > nexacro.getApplication().mainframe.width)
            {	
                nWidth = nexacro.getApplication().mainframe.width;
            }
            
            if (nHeight == -1 || nHeight > nexacro.getApplication().mainframe.height)
            {
                nHeight = nexacro.getApplication().mainframe.height;
            }            
		}
		else 
		{
			bAutoSize = true;
			sModalSize = "center";
		}		
	}
	
	//2022.04.04 추가. sUrl = frame::frmPopup.xfdl, 기존의 sUrl은 divWork에 set_url
	if(!this.gfnIsNull(bIsDetail)){
		oArg.oCFInfo = { bIsDetail : bIsDetail, sUrl : sUrl, sTitleText : sTitleText };
		sUrl = "frame::frmPopup.xfdl";
	}
	
	var objParentFrame = this.getOwnerFrame();

    if(sPopupType == "modeless")
    {
        var sOpenStyle= "showtitlebar=true showstatusbar=false showontaskbar=true showcascadetitletext=false resizable=true autosize="+bAutoSize+" titletext="+sTitleText;
		var arrPopFrame = nexacro.getPopupFrames();

		if (arrPopFrame[sPopupId]) {	
			if (system.navigatorname == "nexacro") {
				arrPopFrame[sPopupId].setFocus();
			} else {	
				arrPopFrame[sPopupId]._getWindowHandle().focus();
			}
		}
		else {		
			nexacro.open(sPopupId,sUrl,objParentFrame,oArg,sOpenStyle,nLeft, nTop, nWidth, nHeight, this);
		}
    }
    else
    {
		if(bShowTitle == true) nHeight += 50;
		var newChild = new nexacro.ChildFrame;		
		newChild.init(sPopupId, nLeft, nTop, nWidth, nHeight, null, null, sUrl);
		
		newChild._modaltype = sModalSize;
		
		newChild.set_dragmovetype("none");
//		newChild.set_showcascadetitletext(false);
		newChild.set_showtitlebar(bShowTitle);    //titlebar는 안보임
		newChild.set_autosize(bAutoSize);	
		newChild.set_resizable(bResizable);    //resizable 안됨
		if(!this.gfnIsNull(sTitleText)) newChild.set_titletext(sTitleText);
		newChild.set_showstatusbar(bShowStatus);    //statusbar는 안보임
		newChild.set_openalign(sOpenalign);
//		newChild.set_layered(bLayered);
//		newChild.set_overlaycolor("RGBA(0, 0, 0, 0.2)");

		newChild.showModal(objParentFrame, oArg, this, this[sPopupCallback]);
        
//         newChild.showModal(objParentFrame, oArg, this, function(svcid, variant) {
//             if(!this.gfnIsNull(sPopupCallback))	
//             {
//                 var p_variant = this.gfnIsNull(this._variant) ? variant : this._variant;
//                 this._variant = "";
//                 
//                 if(typeof sPopupCallback == "function" )
//                 {
//                     sPopupCallback.call(this, sPopupId, p_variant);
//                 }
//                 else if(typeof sPopupCallback == "string")
//                 {
//                     if(!this.gfnIsFunction(this[sPopupCallback]))return;
//                     this[sPopupCallback].call(this, sPopupId, p_variant);
//                 }
//             }
//         });	
        
		//newChild.titlebar.closebutton.set_visible(false);	//close버튼 visible false 처리
		//newChild.style.set_border("2 solid #24322b");
		//newChild.style.set_bordertype("round 10 10");
		//newChild.style.set_background("white");    
		//newChild.style.set_opacity(nOpacity);
    }
	
};

/**
* @class	팝업 닫기 close()는 string만 리턴 되므로 공통함수로 처리함
* @param	{object} variant : 부모 창으로 리턴되는 object
* @return	N/A
* @example  this.gfnClosePopup("OK");
*/
pForm.gfnClose = function(variant)
{
	if(this.opener && typeof variant !="string")
	{
		variant = this.gfnIsNull(variant) ? "" : variant;
		this.opener._variant = variant;
		this.close();
	}
	else
	{
		this.close(variant);
	}
};
