(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AH_BoardList");
            this.set_titletext("게시판관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmm_LanguageCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"string\" size=\"30\"/><Column id=\"CAPTION\" type=\"string\" size=\"255\"/><Column id=\"VAL1\" type=\"string\" size=\"100\"/><Column id=\"VAL2\" type=\"string\" size=\"100\"/><Column id=\"VAL3\" type=\"string\" size=\"100\"/><Column id=\"VAL4\" type=\"string\" size=\"100\"/><Column id=\"REMARK\" type=\"string\" size=\"1073741823\"/><Column id=\"ORD\" type=\"string\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_BoardCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"string\" size=\"30\"/><Column id=\"CAPTION\" type=\"string\" size=\"255\"/><Column id=\"VAL1\" type=\"string\" size=\"100\"/><Column id=\"VAL2\" type=\"string\" size=\"100\"/><Column id=\"VAL3\" type=\"string\" size=\"100\"/><Column id=\"VAL4\" type=\"string\" size=\"100\"/><Column id=\"REMARK\" type=\"string\" size=\"1073741823\"/><Column id=\"ORD\" type=\"string\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_TopFiedFlag", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"CAPTION\">미사용</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CAPTION\">사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_PopupFlag", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"CAPTION\">미사용</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CAPTION\">사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_BoardList", this);
            obj._setContents("<ColumnInfo><Column id=\"RN\" type=\"STRING\" size=\"256\"/><Column id=\"BL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT\" type=\"STRING\" size=\"256\"/><Column id=\"TOP_FIXED_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EXPRESSION_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENTS\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_MODEL\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_MODEL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_BoardListCnt", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_BoardExcelList", this);
            obj._setContents("<ColumnInfo><Column id=\"RN\" type=\"STRING\" size=\"256\"/><Column id=\"BL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT\" type=\"STRING\" size=\"256\"/><Column id=\"TOP_FIXED_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EXPRESSION_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENTS\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_MODEL\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_MODEL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_Search","8","8",null,"40","24",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SchList");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_LanguageCode","8","9","58","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("3");
            obj.set_text("언어구분");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_Search.addChild(obj.name, obj);

            obj = new Combo("cmb_LanguageCode","stc_LanguageCode:8","9","150","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_cmm_LanguageCode");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("stc_BoardCode","cmb_LanguageCode:8","9","58","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("0");
            obj.set_text("게시판");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_Excel",null,"9","68","22","8",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("4");
            obj.set_text("Excel");
            obj.set_cssclass("btn_WF_Excel");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_Search",null,"9","58","22","btn_Excel:8",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_SchText");
            this.div_Search.addChild(obj.name, obj);

            obj = new Combo("cmb_BoardCode","stc_BoardCode:8","9","150","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_cmm_BoardCode");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_text("");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("stc_Subject","cmb_BoardCode:8","9","58","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("6");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_Search.addChild(obj.name, obj);

            obj = new Edit("edt_Subject","stc_Subject:8","9","360","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("7");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_Insert",null,"9","59","23","btn_Search:8",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("8");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_tran");
            this.div_Search.addChild(obj.name, obj);

            obj = new Div("div_paging","8",null,null,"24","24","10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_url("Common::COM_Paging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_BoardList","8","56",null,null,"24","div_paging:8",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_BoardList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"120\"/><Column size=\"450\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"상단고정\"/><Cell col=\"2\" text=\"제목\"/><Cell col=\"3\" text=\"작성자\"/><Cell col=\"4\" text=\"작성일\"/><Cell col=\"5\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:TOP_FIXED_FLAG\" displaytype=\"combotext\" combodataset=\"ds_cmm_TopFiedFlag\" combodatacol=\"CAPTION\" combocodecol=\"CODE\"/><Cell col=\"2\" text=\"bind:SUBJECT\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:INSERT_EMP_NM\"/><Cell col=\"4\" text=\"bind:INSERT_DATE\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\"/><Cell col=\"5\" displaytype=\"date\" text=\"bind:UPDATE_DATE\" calendardateformat=\"yyyy-MM-dd\" calendardisplayinvalidtype=\"default\" calendardisplaynulltype=\"none\"/></Band></Format><Format id=\"NOTICE\"><Columns><Column size=\"48\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"450\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"상단고정\"/><Cell col=\"2\" text=\"팝업사용\"/><Cell col=\"3\" text=\"제목\"/><Cell col=\"4\" text=\"작성자\"/><Cell col=\"5\" text=\"작성일\"/><Cell col=\"6\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:TOP_FIXED_FLAG\" displaytype=\"combotext\" combodataset=\"ds_cmm_TopFiedFlag\" combodatacol=\"CAPTION\" combocodecol=\"CODE\"/><Cell col=\"2\" text=\"bind:POPUP_FLAG\" displaytype=\"combotext\" combodataset=\"ds_cmm_PopupFlag\" combodatacol=\"CAPTION\" combocodecol=\"CODE\"/><Cell col=\"3\" text=\"bind:SUBJECT\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:INSERT_EMP_NM\"/><Cell col=\"5\" text=\"bind:INSERT_DATE\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\"/><Cell col=\"6\" displaytype=\"date\" text=\"bind:UPDATE_DATE\" calendardateformat=\"yyyy-MM-dd\" calendardisplayinvalidtype=\"default\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_BoardExcelList","1320","56",null,null,"-1288","42",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_BoardExcelList");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"120\"/><Column size=\"450\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"상단고정\"/><Cell col=\"2\" text=\"제목\"/><Cell col=\"3\" text=\"작성자\"/><Cell col=\"4\" text=\"작성일\"/><Cell col=\"5\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:TOP_FIXED_FLAG\" displaytype=\"combotext\" combodataset=\"ds_cmm_TopFiedFlag\" combodatacol=\"CAPTION\" combocodecol=\"CODE\"/><Cell col=\"2\" text=\"bind:SUBJECT\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:INSERT_EMP_NM\"/><Cell col=\"4\" text=\"bind:INSERT_DATE\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\"/><Cell col=\"5\" displaytype=\"date\" text=\"bind:UPDATE_DATE\" calendardateformat=\"yyyy-MM-dd\" calendardisplayinvalidtype=\"default\" calendardisplaynulltype=\"none\"/></Band></Format><Format id=\"NOTICE\"><Columns><Column size=\"48\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"450\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"상단고정\"/><Cell col=\"2\" text=\"팝업사용\"/><Cell col=\"3\" text=\"제목\"/><Cell col=\"4\" text=\"작성자\"/><Cell col=\"5\" text=\"작성일\"/><Cell col=\"6\" text=\"수정일\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:TOP_FIXED_FLAG\" displaytype=\"combotext\" combodataset=\"ds_cmm_TopFiedFlag\" combodatacol=\"CAPTION\" combocodecol=\"CODE\"/><Cell col=\"2\" text=\"bind:POPUP_FLAG\" displaytype=\"combotext\" combodataset=\"ds_cmm_PopupFlag\" combodatacol=\"CAPTION\" combocodecol=\"CODE\"/><Cell col=\"3\" text=\"bind:SUBJECT\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:INSERT_EMP_NM\"/><Cell col=\"5\" text=\"bind:INSERT_DATE\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\"/><Cell col=\"6\" displaytype=\"date\" text=\"bind:UPDATE_DATE\" calendardateformat=\"yyyy-MM-dd\" calendardisplayinvalidtype=\"default\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_Search.form
            obj = new Layout("default","",0,0,this.div_Search.form,function(p){});
            this.div_Search.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_paging
            obj = new Layout("default","",0,0,this.div_paging.form,function(p){});
            this.div_paging.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Common::COM_Paging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("AH_BoardList.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("AH_BoardList.xfdl","Script::CommGrid.xjs");
        this.addIncludeScript("AH_BoardList.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("AH_BoardList.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("AH_BoardList.xfdl","Script::ext_CommEco.xjs");
        this.registerScript("AH_BoardList.xfdl", function() {
        /************************************************************************************************
         * 01. 업무구분 : 홈페이지관리
         * 02. 화면명   : 게시판 탭페이지(AH_BoardList)
         * 03. 화면설명 : 게시판 탭페이지
         * 04. 작성일   : 2022.09.01
         * 05. 작성자   : 박종언
         * 06. 수정이력 :
         ***********************************************************************************************
         *     수정일          이  름    사유
         ***********************************************************************************************
         *
         ***********************************************************************************************/


        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
         ************************************************************************************************/
        this.executeIncludeScript("Script::CommTrans.xjs"); /*include "Script::CommTrans.xjs"*/
        this.executeIncludeScript("Script::CommGrid.xjs"); /*include "Script::CommGrid.xjs"*/
        this.executeIncludeScript("Script::CommUtil.xjs"); /*include "Script::CommUtil.xjs"*/
        this.executeIncludeScript("Script::CommSystem.xjs"); /*include "Script::CommSystem.xjs"*/
        this.executeIncludeScript("Script::ext_CommEco.xjs"); /*include "Script::ext_CommEco.xjs"*/

        /************************************************************************************************
         * 전역 변수 영역
         ************************************************************************************************/
        this.gUseAuth = "ALL";
        this.bFirst = true;		// 페이징공통 컴포넌트 초기화 처리 Flag
        this.curStartNum = 1;	// 현재 게시글 시작 번호
        this.curEndNum;			// 현재 게시글 마지막 번호
         /************************************************************************************************
         * FORM 영역
         ************************************************************************************************/
        this.AH_BoardList_onload = function(obj,e)
        {
        	this.gfnCompInit(obj);  	// Grid 공통함수 호출
        	this.fnGetCode();
        };

        // 권한 처리
        this.fnAuthConfig = function()
        {
        	this.gUseAuth = this.parent.parent.parent.FV_AUTH;

        	if(this.gUseAuth != "ALL")
        	{
        		this.ds_cmm_BoardCode.filter("VAL1.indexOf('"+ this.gUseAuth +"') > -1 ");
        	}

        	this.div_Search.form.cmb_BoardCode.set_index(0);
        	this.fnSetGrdFormat(this.div_Search.form.cmb_BoardCode.value);

        	// 기본 display 페이지 설정
        	this.div_paging.form.div_goPage.form.cbo_pageListCnt.set_value(30);
        	this.div_paging.form.fn_loadInit(0, 10, true, this);

        	this.fnSearchCnt();
        };

        // 그리드 포맷 설정
        this.fnSetGrdFormat = function(value)
        {
        	if(value == "NOTICE") this.grd_BoardList.set_formatid("NOTICE");
        	else this.grd_BoardList.set_formatid("default");
        };
         /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
         ************************************************************************************************/
        // 공통코드 조회
        this.fnGetCode = function()
        {
        	this.gfnAddCodeDataset("ds_cmm_LanguageCode",	"LANGUAGE_CODE"); 		// 언어구분
        	this.gfnAddCodeDataset("ds_cmm_BoardCode",		"BOARD_CODE"); 			// 게시판구분

        	this.gfnCodeTransaction();
        };

        // [필수공통함수] 페이징공통화면에서 초기화 검색시 호출하는 함수
        this.fnPagingInit = function()
        {
        	this.fnSearchCnt();
        };

        // [필수공통함수] 공통 페이징화면에서 호출하는 함수
        this.fnPagingSearch = function(nStartNum, nEndNum)
        {
        	this.fnSearch(nStartNum, nEndNum);
        };

        // 조회 Reset
        this.fnResetSearch = function()
        {
        	this.bFirst = true;
        	this.div_paging.form.fn_goFirst();
        };

        // 조회 CNT
        this.fnSearchCnt = function()
        {
        	var sLanuageCd = this.div_Search.form.cmb_LanguageCode.value;
        	var sBoardCd = this.div_Search.form.cmb_BoardCode.value;
        	var sSubject = this.div_Search.form.edt_Subject.value;

        	this.gfnAddSendParameter("LANGUAGE_CODE", sLanuageCd);
        	this.gfnAddSendParameter("BOARD_CODE"	, sBoardCd);
        	this.gfnAddSendParameter("SUBJECT"		, sSubject);

        	this.gfnAddOutputDataset("ds_BoardListCnt", "dsOutput");
        	this.gfnCommonTransaction("Search_BoardList_Cnt", "AH_BoardList_S01_Cnt");
        };

        // 조회
        this.fnSearch = function(nStartNum, nEndNum)
        {
        	var sLanuageCd = this.div_Search.form.cmb_LanguageCode.value;
        	var sBoardCd = this.div_Search.form.cmb_BoardCode.value;
        	var sSubject = this.div_Search.form.edt_Subject.value;

        	// 상세 화면에서 저장 후 리 로딩시 필요
        	this.curStartNum = nStartNum;
        	this.curEndNum = nEndNum;

        	this.gfnAddSendParameter("START_NO", nStartNum);
        	this.gfnAddSendParameter("END_NO", nEndNum);
        	this.gfnAddSendParameter("LANGUAGE_CODE", sLanuageCd);
        	this.gfnAddSendParameter("BOARD_CODE"	, sBoardCd);
        	this.gfnAddSendParameter("SUBJECT"		, sSubject);

        	this.gfnAddOutputDataset("ds_BoardList", "dsOutput");
        	this.gfnCommonTransaction("Search_BoardList", "AH_BoardList_S01", this.grd_BoardList);
        };

        // 상세
        this.fnBoardDet = function(vMode)
        {
        	var sBlSeq;
        	if(vMode == "U") sBlSeq = this.ds_BoardList.getColumn(this.ds_BoardList.rowposition, "BL_SEQ");

        	var Argument = {pvBlSeq:sBlSeq, pvMode:vMode, pvUseAuth:this.gUseAuth};
        	this.commUtil.popup(this, "popupBoardPopup", "Admin::AH_BoardListPopup.xfdl", -1, -1, 900, 800, true, false, false, Argument, "fnPopupCallBack");
        };

        // 엑셀 데이터 조회
        this.fnExcelData = function()
        {
        	var sLanuageCd = this.div_Search.form.cmb_LanguageCode.value;
        	var sBoardCd = this.div_Search.form.cmb_BoardCode.value;
        	var sSubject = this.div_Search.form.edt_Subject.value;

        	this.gfnAddSendParameter("LANGUAGE_CODE", sLanuageCd);
        	this.gfnAddSendParameter("BOARD_CODE"	, sBoardCd);
        	this.gfnAddSendParameter("SUBJECT"		, sSubject);

        	this.gfnAddOutputDataset("ds_BoardExcelList", "dsOutput");
        	this.gfnCommonTransaction("Search_BoardExcelList", "AH_BoardList_S02", this.grd_BoardExcelList);
        };

        // 엑셀
        this.fnExcel = function()
        {
        	var objGrd = this.grd_BoardExcelList;

        	var sFileNm = "게시판 목록";
        	var sSBoardNm = this.div_Search.form.cmb_BoardCode.text;
        	sFileNm += "(" + sSBoardNm + ")";

        	if(nexacro.getApplication().id=="ACEp")
        	{
        		this.parent.parent.parent.parent.parent.fn_excelExport(this, objGrd, sFileNm);
        	}
        	else
        	{
        		this.gfn_excelExport(this, objGrd, sFileNm);
        	}
        };

        // 화면 콜백
        this.fnCallBack = function (strSvcID, nErrorCode, strErrorMag)
        {
        	if (nErrorCode<0) {
        		this.alert("["+strSvcID+":"+nErrorCode+"] "+strErrorMag);
        		return;
        	} else {
        		switch (strSvcID)
        		{
        			case "gfnGetCode" :
        				this.div_Search.form.cmb_LanguageCode.set_index(0);

        				// 권한 처리
        				this.fnAuthConfig();
        				break;
        			case "Search_BoardList_Cnt" :
        				this.fnSearch(1, this.div_paging.form.fv_pageListCnt);
        				break;
        			case "Search_BoardList" :
        				if(this.bFirst) {
        					// [필수] 전체건수 설정
        					this.div_paging.form.fn_init(this.ds_BoardListCnt.getColumn(0, "TOTAL_COUNT"), 10, true, this);
        					this.bFirst = false;
        				}
        				break;
        			case "Search_BoardExcelList" :
        				this.fnExcel();
        				break;
        		}
        	}
        };

        // 팝업 콜백
        this.fnPopupCallBack = function(sPopupId, Variant)
        {
        	Variant = this.commUtil.popupReturn();
        	if(this.gfnIsEmpty(Variant))
        	{
        		return;
        	}
        	else
        	{
        		this.recentVariant = Variant;
        		switch(sPopupId)
        		{
        			case "popupBoardPopup" : // 게시글 상세
        				this.fnSearch(this.curStartNum, this.curEndNum);
        			break;
        		}
        	}
        };

         /************************************************************************************************
         * FORM 공통 FUNCTION 영역
         ************************************************************************************************/

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        this.common_onclick = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_Search":	// 조회
        			this.fnResetSearch();
        			//this.fnSearchCnt();
        			break;
        		case "btn_Excel":	// 엑셀
        			this.fnExcelData();
        			break;
        		case "btn_Insert":	// 등록
        			this.fnBoardDet("I");
        			break;
        	}
        };

        // 상세 팝업 이벤트
        this.grd_BoardList_oncelldblclick = function(obj,e)
        {
        	this.fnBoardDet("U");
        };

        // 게시판 변경 이벤트
        this.div_Search_cmb_BoardCode_onitemchanged = function(obj,e)
        {
        	this.fnSetGrdFormat(e.postvalue);
        	this.fnResetSearch();
        };

        // 언어구분 변경 이벤트
        this.div_Search_cmb_LanguageCode_onitemchanged = function(obj,e)
        {
        	this.fnResetSearch();
        };

        // 엔터 쳤을 경우 이벤트
        this.div_Search_edt_Subject_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.fnResetSearch();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.AH_BoardList_onload,this);
            this.div_Search.form.cmb_LanguageCode.addEventHandler("onitemchanged",this.div_Search_cmb_LanguageCode_onitemchanged,this);
            this.div_Search.form.btn_Excel.addEventHandler("onclick",this.common_onclick,this);
            this.div_Search.form.btn_Search.addEventHandler("onclick",this.common_onclick,this);
            this.div_Search.form.cmb_BoardCode.addEventHandler("onitemchanged",this.div_Search_cmb_BoardCode_onitemchanged,this);
            this.div_Search.form.edt_Subject.addEventHandler("onkeydown",this.div_Search_edt_Subject_onkeydown,this);
            this.div_Search.form.btn_Insert.addEventHandler("onclick",this.common_onclick,this);
            this.grd_BoardList.addEventHandler("oncelldblclick",this.grd_BoardList_oncelldblclick,this);
            this.grd_BoardExcelList.addEventHandler("oncelldblclick",this.grd_BoardList_oncelldblclick,this);
        };
        this.loadIncludeScript("AH_BoardList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
