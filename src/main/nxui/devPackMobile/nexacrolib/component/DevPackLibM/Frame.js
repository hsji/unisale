/**
*  컨설팅 표준화 작업
*  @FileName 	Frame.js 
*  @Creator 	mobile_consulting
*  @CreateDate 	2017.03.08
*  @Desction   		
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
*  2017.03.08     	mobile_consulting 	                최초 생성 	   
*******************************************************************************
*/

var pForm  = nexacro.Form.prototype;
pForm.FRAME_SYSVER				= "nexacro17";	// 넥사크로 제품구분 nexacro14/nexacro17

/**
* @class frame open <br>
* @param {Object} obj - 화면
* @return N/A
* @example this.gfnFormOnLoadM(this);
*/
pForm.gfnFormOnLoadM = function(objForm)
{
	var objApp = nexacro.getApplication();
	// QuikView 일때 처리
	if (nexacro.getEnvironmentVariable("evQuikView") == "Y") 
	{		
		objApp.mainframe.set_titletext("로컬(Studio) - " + objForm.name);
		objApp.mainframe.set_showtitlebar(true);     
		objApp.mainframe.set_border("1px solid black");
	}

	// Component 초기화 처리
	this.gfnInitCompM(objForm);
	
	//화면 초기화 함수호출
	if (this.gfnExistFunction("fnInit"))
	{
		this.fnInit();
	}
	//등록버튼 세팅
	this.gfnSetCommonBtnM();

	
	var xadl = nexacro.getApplication().xadl;   //17에서 xadl은 미지원 속성값. 임시로 사용중
		
	if (xadl.indexOf("quickview") == -1) { 
		//화면 리사이즈 처리
		//arrangement 방식
		this.gfnResizeComp(this, true);
	}
};


/**
* @class form open 시 Component 초기화 처리 <br>
* @param {Object} obj - 화면
* @return N/A
* @example 
* this.gfnInitComp(this);
*/
pForm.gfnInitCompM = function(objForm)
{
	var arrComp = objForm.components;
	var nLength = arrComp.length;

	for (var i=0; i<nLength; i++)
	{
		if (arrComp[i] instanceof nexacro.Div)
		{
			// URL로 링크된 경우에는 존재하는 경우에는 해당 링크된 Form Onload에서 처리하도록 한다.
			if (this.gfnIsNull(arrComp[i].url)) this.gfnInitCompM(arrComp[i].form);
		}
		else if (arrComp[i] instanceof nexacro.Tab)
		{
			var nPages = arrComp[i].tabpages.length;
			
			for (var j=0; j<nPages;j++)
			{	
				// URL로 링크된 경우에는 존재하는 경우에는 해당 링크된 Form Onload에서 처리하도록 한다.
				if (this.gfnIsNull(arrComp[i].tabpages[j].url)) this.gfnInitCompM(arrComp[i].tabpages[j].form);
			}
		}
		else
		{
			if (arrComp[i] instanceof nexacro.Grid) {
				this.gfnSetGrid(arrComp[i]);
			}
			
			if (arrComp[i] instanceof nexacro.Edit)	{

				// _ms_clear user property가 true 일때만
				if (arrComp[i]._ms_clear == "true") {
					this._gfnSetEditMsClear(arrComp[i]);
				}                
                
			}
			
			if (arrComp[i] instanceof nexacro.Calendar)
			{
				// 월달력 Popup Div 호출 이벤트 추가
				if (arrComp[i].uCalType == "MM") {
                    if (this.gfnIsNull(arrComp[i].popuptype))
                    {   //Mobile에서 popuptype 값이 없을때 디폴트값이 system 이여서 변경
                        arrComp[i].set_popuptype("normal");
						arrComp[i].set_dateformat("yyyy-MM");
						arrComp[i].set_editformat("yyyy-MM");
						arrComp[i].set_usesoftkeyboard(false);	//안드로이드만 지원
                    }                    
					arrComp[i].addEventHandler("ondropdown", this.gfnCalMMOndropdownM, this);
				}
			}
		}
	}   
};

/**
* @class left메뉴 클릭시 해당화면 호출함수 <br>
* @param {Object} oObj 
* @return N/A
* @example this.gfnCallM(oObj);
*/
pForm.gfnCallM = function(oObj)
{	
	if(!this.gfnIsNull(oObj) && typeof(oObj) !=  "object") return;	
	
	var objApp  = nexacro.getApplication();
	
	var ds      = oObj.ds;							//넘어온 dataset
	var nRow    = oObj.nRow;						//선택된 현재 row
	var sMenuId;
	
 	//oObj.aArgs세팅
 	var objArg ={}
	
// 	objArg[this.FRAME_MENUCOLUMNS.menuId]		 =  ds.getColumn(nRow, this.FRAME_MENUCOLUMNS.menuId);
// 	objArg[this.FRAME_MENUCOLUMNS.menuUrl]		 =  ds.getColumn(nRow, this.FRAME_MENUCOLUMNS.menuUrl);
// 	objArg[this.FRAME_MENUCOLUMNS.groupId]		 =  ds.getColumn(nRow, this.FRAME_MENUCOLUMNS.groupId);
// 	objArg[this.FRAME_MENUCOLUMNS.prgmId]		 =  ds.getColumn(nRow, this.FRAME_MENUCOLUMNS.prgmId);
// 	objArg[this.FRAME_MENUCOLUMNS.menuNm]		 =  ds.getColumn(nRow, this.FRAME_MENUCOLUMNS.menuNm);
// 	objArg[this.FRAME_MENUCOLUMNS.displayPath]	 =  ds.getColumn(nRow, this.FRAME_MENUCOLUMNS.displayPath);
// 	objArg[this.FRAME_MENUCOLUMNS.param]		 =  ds.getColumn(nRow, this.FRAME_MENUCOLUMNS.param);
// 	oObj.oArgs = objArg;
	//메뉴 데이터셋의 각 칼럼 값 objArg에 담기
	for(var i=0; i<ds.getColCount(); i++)
	{
		var sColId = ds.getColID(i);
		objArg[sColId] = ds.getColumn(nRow, sColId);
	}
	oObj.oArgs = objArg;
	
	if (!this.gfnIsNull( oObj.sMenuId)){
		sMenuId = oObj.sMenuId;
	}else{
		sMenuId = ds.getColumn(nRow, objApp.gvMenuColumns.menuId);
		oObj.sMenuId = sMenuId;
	}

    var pThis = objApp.mainframe.baseChild.form;

    if (!this.gfnIsNull(pThis.divCenter.form.divWork.url))
    {
        //close 체크
        pThis.fnWorkFrameClose(sMenuId, oObj);
    } 
    else
    {
        this._gfnCallM(sMenuId, oObj);
    } 
};

/**
* @class 화면호출 내부용 <br>
* @param {Object} oObj 
* @return N/A
* @example this._gfnCallM(oObj);
*/
pForm._gfnCallM = function(sMenuId, oObj)
{	
    var objApp  = nexacro.getApplication();
    var gdsMenu = objApp.gdsMenu;
    var pThis   = objApp.mainframe.baseChild.form;	

    var aArgs 	= this.gfnIsNull(oObj.oArgs) ? "" : oObj.oArgs ;   //넘어온 arguments

// 	// 화면 loading 시간 측정
// 	var objDate = new Date();
// 	objApp.nStartTime = objDate.getTime();
// 	// 다국어 처리
// 	var sColumn  = objApp.gvMenuColumns.menuNm;
// 	var sNowLang = nexacro.getEnvironmentVariable("evLanguage");
// 	if (sNowLang != "KO") {
// 		sColumn = sColumn+sNowLang;
// 	}
    
	var sPageUrl = gdsMenu.lookupAs(objApp.gvMenuColumns.menuId, sMenuId, objApp.gvMenuColumns.pageUrl);
	var sGroupId = gdsMenu.lookupAs(objApp.gvMenuColumns.menuId, sMenuId, objApp.gvMenuColumns.groupId);	

	if(this.gfnIsNull(sPageUrl)) return;		//pageURl 이 없으면 return
    
	//각 form 및 컴포넌트 visible 처리 및 setUrl
    pThis.divMain.set_visible(false);
    pThis.divCenter.set_visible(true);
	pThis.divIosPadding.set_visible(true);
	pThis.divTop.form.btnBack.set_visible(true);
    pThis.divCenter.form.vscrollbar.set_pos(0);
	pThis.divCenter.form.divWork.set_url("");
    pThis.divCenter.form.divWork.set_url(sPageUrl);
	pThis.divTop.form.sta00.set_text(aArgs[this.FRAME_MENUCOLUMNS.menuNm]);
    pThis.fnAction("MENU", false);

    pThis.fnAction("History", oObj);

    pThis.arguments = [];
	//gfnGetArgument 에 맞게 변경
//   (기존) pThis.arguments["aArgs"] = aArgs;
	pThis.arguments[this.FRAME_MENUCOLUMNS.winId] 			= aArgs[this.FRAME_MENUCOLUMNS.winId];
	pThis.arguments[this.FRAME_MENUCOLUMNS.menuId] 			= aArgs[this.FRAME_MENUCOLUMNS.menuId];
	pThis.arguments[this.FRAME_MENUCOLUMNS.menuNm] 			= aArgs[this.FRAME_MENUCOLUMNS.menuNm];
	pThis.arguments[this.FRAME_MENUCOLUMNS.menuUrl] 		= aArgs[this.FRAME_MENUCOLUMNS.menuUrl];
	pThis.arguments[this.FRAME_MENUCOLUMNS.groupId] 		= aArgs[this.FRAME_MENUCOLUMNS.groupId];
	pThis.arguments[this.FRAME_MENUCOLUMNS.prgmId] 			= aArgs[this.FRAME_MENUCOLUMNS.prgmId];
	pThis.arguments[this.FRAME_MENUCOLUMNS.param] 			= aArgs[this.FRAME_MENUCOLUMNS.param];	
	pThis.arguments[this.FRAME_MENUCOLUMNS.displayPath]		= aArgs[this.FRAME_MENUCOLUMNS.displayPath];

	//동일한 메뉴 클릭시 중복된 menu open log transaction 실행되는 것 방지.
	if(objApp.gdsLog.getColumn(0, "MENU_ID") == sMenuId) return;
 	if(nexacro._quickview_formurl) return;
	
	//history 동작시에도 log tran 방지
	if(oObj.sMenu != "Y") return;
	this.gfnSaveMenuOpenLogM("MENU", gdsMenu.lookupAs(objApp.gvMenuColumns.menuId, sMenuId, this.FRAME_MENUCOLUMNS.prgmId), sMenuId);
};

/**
* @class 화면간 파라미터 반환 함수
* @param  none
* @return {Object} 
* @example this.gfnComfGetParamsM();
*/
pForm.gfnComfGetParamsM = function()
{
	var oRtn = "";
    var objApp  = nexacro.getApplication();
	try 
    {	
        if (this.parent instanceof nexacro.ChildFrame)
        {
            oRtn = this.getOwnerFrame(); 
        }
        else
        {
            oRtn = objApp.mainframe.baseChild.form.arguments["aArgs"]; 
        }

	}
	catch(e)
    {
    
		trace(" 파라미터가 선언되지 않았습니다.");
	}
	
	return oRtn;
}

/**
* @class 월력용 Calendar에 월력 Popup Div을 자동생성하고 해당 Popup Div을 호출
* @param {Object} obj - 월력용 Calendar
* @return N/A
* @example this.gfnCalMMOndropdownM(obj); 
*/
pForm.gfnCalMMOndropdownM = function (obj)
{
	var pdvName = this.gfnGetCompId(obj);
	var nWidth = 315;   //Mobile
    var nHeight = 270;  //Mobile
    
	// Creating pdv
	if (this.gfnIsNull(this.components[pdvName])) {		
		var objCalPopupDiv = new PopupDiv();
		objCalPopupDiv.init(pdvName, obj.getOffsetLeft(), obj.getOffsetBottom(), nWidth, nHeight, null, null);		
		this.addChild(pdvName, objCalPopupDiv);
		objCalPopupDiv.show();
		objCalPopupDiv.set_url("common::cmmCalMMPdv.xfdl");
		objCalPopupDiv.calObj = obj;
	}
	else {
		var objCalPopupDiv = this.components[pdvName];
		
		// Calendar에서 수정한 년도를 Popup Div에 반영
		var sDate = obj.value;
		objCalPopupDiv.form.staYYYY.set_text(sDate.substr(0,4));
	}
	//trace("pdvName : " + pdvName);
/*
	var nLeft = 0; 	
	// Compoent가 오른쪽에 있을 경우 Component와 우측 정렬하여 팝업Div 표시
	if (this.getOffsetWidth() < (obj.getOffsetRight() + nWidth) ) {
		nLeft = obj.getOffsetWidth() - nWidth;
	}
	else {
		nLeft = 0; 
	}
	
	var nTop = 0;	
	// Compoent가 아래쪽에 있을 경우 Component 위로 팝업Div 표시
	if (this.getOffsetHeight() < (obj.getOffsetBottom() + nHeight)) {
		nTop = -nHeight;
	}
	else {
		nTop = obj.getOffsetHeight(); 
	}
	objCalPopupDiv.trackPopupByComponent(obj, nLeft, nTop);
	*/
	
	//센터 띄우기
    var nLeft   =  (nexacro.getApplication().mainframe.width / 2) - Math.round(objCalPopupDiv.getOffsetWidth() / 2);
    var nTop    = (nexacro.getApplication().mainframe.height / 2) - Math.round(objCalPopupDiv.getOffsetHeight() / 2) ;				
	objCalPopupDiv.trackPopup(nLeft, nTop);	
	
	return false;
};

/**
* @class 화면에 설정된 파라미터객체 반환
* @param {String} sName - 파라미터ID
* @return {String} 파라미터값
* @example this.gfnGetArgumentM("param"); 
*/
pForm.gfnGetArgumentM = function(sName)
{
	var ret;
//	if(this.gfnIsNull(this.getOwnerFrame().form.arguments)) return;
	if (this.gfnIsNull(sName))
	{
		ret = this.getOwnerFrame().form.arguments["menuParam"];
	} else 
	{
		ret = this.getOwnerFrame().form.arguments[sName];
	}
	
	return ret;
};


/**
* @class 메뉴오픈로그저장(Transaction)
* @param {String} sType	- 로그저장타입
* @param {String} sProg	- 프로그램아이디
* @param {String} sMenu	- 메뉴아이디
* @return N/A
* @example this.gfnSaveMenuOpenLog("MENU", sProg, sMenu);
*/
pForm.gfnSaveMenuOpenLogM = function (sType, sProg, sMenu)	
{
	var oDs = nexacro.getApplication().gdsLog;
	oDs.clearData();

	var nRow = oDs.addRow();
	
	oDs.setColumn(nRow, "LOG_TYPE", sType);
	oDs.setColumn(nRow, "PRGM_ID", sProg);
	oDs.setColumn(nRow, "MENU_ID", sMenu);
	
	var strSvcId    = "saveLog";
	var strSvcUrl   = "saveLog.do";
	var inData      = "dsList=gdsLog:U";
	var outData     = "";
	var strArg      = "";	// System별 접속차단자 체크
	var callBackFnc = "gfnStopCallback";
	
	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
						strSvcUrl , 	// trabsaction을 요청할 주소
						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
						callBackFnc)  ; // 통신방법 정의 [생략가능]
};

/**
* @class 메인화면 추가(+)버튼 노출 여부
* @param  none
* @return N/A
* @example this.gfnSetCommonBtnM();
*/
pForm.gfnSetCommonBtnM = function()
{
	if (nexacro.getEnvironmentVariable("evQuikView") == "Y") return;
	var objApp = nexacro.getApplication();
	var objFrame = objApp.mainframe.baseChild;
	var bDivCenterVisible = objFrame.form.divCenter.visible;
	var bDivMainVisible = objFrame.form.divMain.visible;
	if(bDivCenterVisible)
	{
		var nBtnVisibleType = objFrame.form.divCenter.form.divWork.form.fvAdd;
		if(nBtnVisibleType == '1')
		{
			objFrame.form.btnAdd.set_visible(true);
		}else if(this.gfnIsNull(nBtnVisibleType) || nBtnVisibleType != '1'){
			objFrame.form.btnAdd.set_visible(false);
		}
	}else if(bDivMainVisible){
		objFrame.form.btnAdd.set_visible(true);
	}
}

/**
* @class 현재 실행된 어플리케이션의 Application 오브젝트를 반환하는 메소드 <br>
* @param  none
* @return Object
* @example this.gfnGetApplication();
*/
pForm.gfnGetApplication = function()
{
	// nexacro 14/17 구분하여 Application object를 사용한다.
	var objApp = (pForm.FRAME_SYSVER == "nexacro17" ? nexacro.getApplication() : application);
	
	return objApp;
};