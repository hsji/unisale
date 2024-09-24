/**
*  devPack Library
*  @FileName 	Popup.js 
*  @Creator 	TOBESOFT
*  @CreateDate 	2020.11.24
*  @Desction   
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
* 2020.11.24			TOBESOFT				Popup Library
*******************************************************************************
*/

var pForm = nexacro.Form.prototype;


/*******************************************************************************************
	FUNCTION	: popupClose(objForm, objReturn)
	DESCRIPTION	: 팝업화면 Close
	PARAMETERS	: 
		- objReturn
	RETURN		: 	
*******************************************************************************************/
pForm.popupClose = function(objReturn)
{
	if(objReturn && nexacro._isArray(objReturn)) {
		objReturn = objReturn.join("|");
	}
	this.close(objReturn);
};
		
/**
* @class 팝업오픈
* @param {String} sPopupId	- 팝업ID
* @param {String} sUrl	 - 팝업URL
* @param {String} [oArg] - 전달값
* @param {String} [sPopupCallback] - 팝업콜백
* @param {Object} [oOption] - 팝업옵션 <br>
*	oOption.top 		: 상단 좌표 <br>
*	oOption.left 		: 좌측 좌표 <br>
*	oOption.width 		: 넓이 		 <br>
*	oOption.height 		: 높이 		 <br>
*	oOption.popuptype 	: 팝업종류(modal:showModal, 			 <br>
								modeless:application.open,   <br>
								modalsync:showModalSync,	 <br>
								modalwindow:showModalWindow) <br>
*	oOption.layered 	: 투명 윈도우  <br>
*	oOption.opacity 	: 투명도		<br>
*	oOption.autosize 	: autosize 		<br>
*	oOption.dual 		: 듀얼모니터에 생성. Only form modeless	<br>
* @return N/A
* @example this.gfnOpenPopup(this);
*/
pForm.gfnOpenPopup = function (sPopupId, sUrl, oArg, sPopupCallback, oOption)
{
	if (this.gfnIsNull(sPopupId)) 
	{
		alert("팝업 호출 시 팝업ID sPopupId를 지정하세요.");
		return;
	}
	var objApp	 	= nexacro.getApplication();
	var nLeft 		= -1;
	var nTop 		= -1;
	var nWidth 		= -1;
	var nHeight 	= -1;
	var bShowTitle 	= false;	
	var bShowStatus = false;	
	var sPopupType 	= "modal";
	var bLayered 	= false;
	var nOpacity 	= 100;
	var bAutoSize 	= false;
	var bResizable 	= false;
	var sDragmovetype = "all";
	var sModalType = "";

	//callback함수(명)을 전달하지 않아도 기본명이 선언되어 있다면 기본명을 사용하도록 기본셋팅
	var sPopupCallback = (this.gfnIsNull(sPopupCallback) && this["fnPopupCallback"]) ? "fnPopupCallback" : sPopupCallback;
				
	var sTitleText = "";
	for (var key in oOption) 
	{
       if (oOption.hasOwnProperty(key)) 
	   {
            switch (key) 
			{
				case "popuptype":
					sPopupType = oOption[key];
					break;
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
				case "layered":
					bLayered = oOption[key];
					break;
				case "opacity":
					nOpacity =oOption[key];
					break;
				case "autosize":
					bAutoSize = oOption[key];
					break;
				case "resize":
					if (""+oOption[key] == "true")	bResizable = true;		
					break;
				case "titlebar":
					if (""+oOption[key] == "true")	bShowTitle = true;
					break;
				case "title":					
					sTitleText = oOption[key];	
					break;			
				case "dragmovetype":					
					sDragmovetype = oOption[key];	
					break;						
			}	
        }
    }
	var sOpenalign = "";
	if (nLeft == -1 && nTop == -1) 
	{
		sOpenalign = "center middle";
		sModalType = "center";
		
		if (system.navigatorname == "nexacro") 
		{
			var curX = objApp.mainframe.left;
			var curY = objApp.mainframe.top;
		}
		else 
		{
			var curX = window.screenLeft;
			var curY = window.screenTop;
		}
		
        nLeft = curX + (objApp.mainframe.width / 2) - Math.round(nWidth / 2);
	    nTop  = curY + (objApp.mainframe.height / 2) - Math.round(nHeight / 2);
	}
	else 
	{
		if (nexacro.getEnvironmentVariable("evQuickView") == "Y") 
		{
			if (system.navigatorname == "nexacro") 
			{
				nTop = nTop + 30;
			}
		}
		else 
		{
			// Left는 LeftFrame 넓이 + WorkFrame의 divWork Left + form 내 위치 값
			nLeft = objApp.gvFrmLeft.form.width + 10 + nLeft;
			
			// Top은 TopFrmae의 높이 + WorkFrame의 divWork Top + form 내 위치 값
			if (system.navigatorname == "nexacro") 
			{
				nTop = objApp.gvFrmTop.form.height + 36 + nTop + 30;
			}
			else 
			{
				nTop = objApp.gvFrmTop.form.height + 36 + nTop;
			}		
		}
	}

	if (nWidth == -1 || nHeight == -1) 
	{
	    bAutoSize = true;
	}
	
	// modeless를 위해 팝업 Type 및 callBack함수 지정
	if (this.gfnIsNull(oArg)) oArg = {};
	
	oArg["popupType"] = sPopupType;
	oArg["popupId"]   = sPopupId;
	oArg["callback"]  = sPopupCallback;
	oArg["titleText"] = sTitleText;
	
	var objParentFrame = this.getOwnerFrame();

    if (sPopupType == "modeless")
    {
        var sOpenStyle  = "";
		if (sTitleText.indexOf(" ") > -1) 
		{
			sOpenStyle  = "showtitlebar=" + bShowTitle + " showstatusbar=false showontaskbar=true showcascadetitletext=false resizable="+bResizable+" location=no autosize="+bAutoSize+" titletext=\'"+sTitleText+"\'";
		}
		else 
		{
			sOpenStyle  = "showtitlebar=" + bShowTitle + " showstatusbar=false showontaskbar=true showcascadetitletext=false resizable="+bResizable+" location=no autosize="+bAutoSize+" titletext="+sTitleText;
		}

		if (oOption["dual"])	//듀얼 모니터 옵션을 사용한 경우 위치를 조정함. width, height 값 필수여서 1 설정
		{
			if (system.navigatorname == "nexacro") 
			{	
				if (this.gfnIsNull(system.getScreenRect(2)))
				{
					this._gfnOpenModeless(sPopupId, sUrl, objParentFrame, oArg, sOpenStyle, nLeft, nTop, nWidth, nHeight);
					return;
				}								

				var nMoniterIndex  = system.getMonitorIndex(system.getCursorX(), system.getCursorY());
				nLeft = system.getScreenRect(nMoniterIndex).left;
				var nCnt = 1;
				var objRect  =  system.getScreenRect(nCnt);			
				do {				
					if (nLeft != objRect.left) 
					{
						nLeft = objRect.left;
						if (bAutoSize)
						{
							nTop = 0;
							nWidth = 1;
							nHeight = 1;							
						}
						this._gfnOpenModeless(sPopupId, sUrl, objParentFrame, oArg, sOpenStyle, nLeft, nTop, nWidth, nHeight);
						break;
					}	
					objRect  =  system.getScreenRect(nCnt++);
				} while (!this.gfnIsNull(objRect));
			}	
			else
			{
				var objTargetForm = this;				
				//크롬>설정>개인정보 보호 및 보안>사이트별 권한 중 창관리 권한 획득 후 사용가능
				// Multi-Screen Window Placement API를 사용하기 위하여 사용자에게 권한을 요청 (필수)
				navigator.permissions.query({name:'window-placement'}).then(function(result) {
					//granted , prompt
					// window.getScreenDetails()를 사용하여 두 번째 화면에 대한 자세한 정보 획득
					window.getScreenDetails().then(function(result) {
						var objScreens = result.screens;					
						if (objScreens.length == 1)
						{
							objTargetForm._gfnOpenModeless(sPopupId, sUrl, objParentFrame, oArg, sOpenStyle, nLeft, nTop, nWidth, nHeight);
							return;
						}
						
						nLeft = result.currentScreen.left; // 현재 화면 ScreenDetailed을 설명하는 객체 반환 (left 값)
						for (var i = 0; i < objScreens.length; i++)
						{
							if (nLeft != objScreens[i].availLeft) 
							{
								nLeft = objScreens[i].availLeft;
								if (bAutoSize)
								{
									nTop = 0;
									nWidth = 1;
									nHeight = 1;							
								}							
								objTargetForm._gfnOpenModeless(sPopupId, sUrl, objParentFrame, oArg, sOpenStyle, nLeft, nTop, nWidth, nHeight);
								break;
							}
						}			
					});
				});					
			}
		}
		else
		{
			this._gfnOpenModeless(sPopupId, sUrl, objParentFrame, oArg, sOpenStyle, nLeft, nTop, nWidth, nHeight);
		}
    }
	else 
	{
		var newChild = new nexacro.ChildFrame;
		newChild.init(sPopupId, nLeft, nTop, nWidth, nHeight, null, null, sUrl);
		newChild._modaltype = sModalType;
		newChild.set_dragmovetype(sDragmovetype);
		newChild.set_showcascadetitletext(false);
		newChild.set_showtitlebar(bShowTitle);      //titlebar는 안보임
		newChild.set_autosize(bAutoSize);
		newChild.set_resizable(bResizable);         //resizable 안됨
		if(!this.gfnIsNull(sTitleText)) newChild.set_titletext(sTitleText);
		newChild.set_showstatusbar(bShowStatus);    //statusbar는 안보임
		newChild.set_openalign(sOpenalign);
		newChild.set_layered(bLayered);
		newChild.set_titlebarheight(40);
		//newChild.set_overlaycolor("RGBA(0, 0, 0, 0.4)");
		//newChild.set_border("1px solid #2c85bf");
		
		//newChild.set_titlebarheight(30);
		//newChild.titlebar.closebutton.set_visible(false);	//close버튼 visible false 처리
		//newChild.style.set_bordertype("round 10 10");
		//newChild.style.set_background("white");    
		//newChild.style.set_opacity(nOpacity);
			
		if (sPopupType == "modalsync") 
		{			
			// modalsync 팝업은 return이 없어 gfnClosePopup 함수에서 셋팅한 값으로 리턴처리
			system.showModalSync(newChild, objParentFrame, oArg);
			var rtn = objParentFrame.form["rtnVal"];
			return rtn;
		}
		else if(sPopupType == "modalwindow") 
		{			
			var rtn = system.showModalWindow(newChild, sPopupId, objParentFrame, oArg);		
			return rtn;
		}		
		else 
		{	// modal
			newChild.showModal(objParentFrame, oArg, this, sPopupCallback);
		}
	}
};

/**
* @class 모덜리스 팝업 오픈 내부함수
* @param {String} sPopupId - 팝업ID
* @param {String} sUrl - 팝업 url
* @param {Object} objParentFrame - 부모 Frame 
* @param {Object} oArg - 팝업으로 보내는 파라미터
* @param {String} sOpenStyle - 팝업에 적용할 속성
* @param {Number} nLeft - Left
* @param {Number} nTop - Top
* @param {Number} nWidth - Width
* @param {Number} nHeight - Height
* @return N/A	
* @example this._gfnOpenModeless(sPopupId, sUrl, objParentFrame, oArg, sOpenStyle, nLeft, nTop, nWidth, nHeight);
*/
pForm._gfnOpenModeless = function(sPopupId, sUrl, objParentFrame, oArg, sOpenStyle, nLeft, nTop, nWidth, nHeight)
{
	var arrPopFrame = nexacro.getPopupFrames(this.getOwnerFrame());
	if (arrPopFrame[sPopupId]) 
	{	
		if (system.navigatorname == "nexacro") 
		{		
			arrPopFrame[sPopupId].setFocus();
		} 
		else 
		{	// 팝업이 완전히 뜨지 않았을 때 창을 닫아버리는 경우 팝업 가비지 제거
			try 
			{
				arrPopFrame[sPopupId]._getWindowHandle().focus();
			}
			catch(e) 
			{
				arrPopFrame[sPopupId] = null;
				nexacro.open(sPopupId, sUrl, objParentFrame, oArg, sOpenStyle, nLeft, nTop, nWidth, nHeight, this);
			}
		}
	}
	else 
	{
		nexacro.open(sPopupId, sUrl, objParentFrame, oArg, sOpenStyle, nLeft, nTop, nWidth, nHeight, this);
	}
}

/**
* @class 팝업화면에서 창 닫기
* @param {String} sReturn - return value	 
* @return N/A	
* @example this.gfnClosePopup("OK");
*/
pForm.gfnClosePopup = function(objRtn)
{	
	var objChild = this.getOwnerFrame();
	var objForm  = objChild.form;
	
	// modalsync 팝업일때 리턴값 전달 시 사용
	objForm.opener["rtnVal"] = objRtn;

	// 팝업이 modeless 일때
	if (objChild.popupType == "modeless") 
	{
		var sPopupId  = objChild.popupId;
		var sCallBack = objChild.callback;

		// callBack 함수가 있을 때
		if (this.gfnIsNull(sCallBack) == false) 
		{			
			// callback 함수object로 파라미터 전달시 바로 호출
			if (typeof(sCallBack) == "function") 
			{
				sCallBack.call(objForm.opener, sPopupId, objRtn);
			}
			else 
			{
				objForm.opener.lookupFunc(sCallBack).call(sPopupId, objRtn);
			}
		}
	}
	if(objRtn && nexacro._isArray(objRtn)) {
		objRtn = objRtn.join("|");
	}
	// 팝업창 닫기
	objForm.close(objRtn);
};

/**
* @class mdi 화면분리 모달리스 팝업
* @param {String} sPopId - 팝업아이디
* @param {String} sPopupCallback - 콜백
* @param {Object} arg - 파라미터 
* @return N/A	
* @example this.gfnSetOpenPopup(sPopId, sPopupCallback, arg);
*/
pForm.gfnSetOpenPopup = function (sPopupId, sPopupCallBack, arg)
{
	var objApp = nexacro.getApplication();
	if (system.navigatorname == "nexacro") 
	{
		var curX = objApp.mainframe.left;
		var curY = objApp.mainframe.top;
	}
	else 
	{
		var curX = window.screenLeft;
		var curY = window.screenTop;
	}
	var nLeft = curX + (objApp.mainframe.width / 2) - Math.round(nWidth / 2);
	var nTop  = curY + (objApp.mainframe.height / 2) - Math.round(nHeight / 2);			
	var nWidth 		= 1101;
	var nHeight 	= 808;			
	var sOpenStyle 	= "showtitlebar=false showstatusbar=false showontaskbar=true showcascadetitletext=false resizable=true location=no autosize=false titletext='DevPack'";

	nexacro.open(sPopupId, "frame::frmWorkPu.xfdl", this.getOwnerFrame()
			, {"arguments" : arg, popupType : "modeless", callback : sPopupCallBack, popupId : sPopupId}
			, sOpenStyle, nLeft, nTop, nWidth, nHeight, this);

};


/**
* @class 매뉴얼 열려 있는 팝업 닫기
* @param {String} sId - 팝업아이디
* @return N/A	
* @example this.gfnCloseToOpenPopup(sId);
*/
pForm.gfnCloseToOpenPopup = function(sId)
{
	if (nexacro.getPopupFrames().length > 0)
   {
      var objframes = nexacro.getPopupFrames();
      for(var i=0; i< objframes.length; i++)
      {
		if(objframes[i].id == sId)
			objframes[i].form.gfnClosePopup("close");
			break;
      }
   }
};

pForm = null;