(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AH_QuestionList");
            this.set_titletext("문의관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmm_CategoryCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"string\" size=\"30\"/><Column id=\"CAPTION\" type=\"string\" size=\"255\"/><Column id=\"VAL1\" type=\"string\" size=\"100\"/><Column id=\"VAL2\" type=\"string\" size=\"100\"/><Column id=\"VAL3\" type=\"string\" size=\"100\"/><Column id=\"VAL4\" type=\"string\" size=\"100\"/><Column id=\"REMARK\" type=\"string\" size=\"1073741823\"/><Column id=\"ORD\" type=\"string\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_InflowPathCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"string\" size=\"30\"/><Column id=\"CAPTION\" type=\"string\" size=\"255\"/><Column id=\"VAL1\" type=\"string\" size=\"100\"/><Column id=\"VAL2\" type=\"string\" size=\"100\"/><Column id=\"VAL3\" type=\"string\" size=\"100\"/><Column id=\"VAL4\" type=\"string\" size=\"100\"/><Column id=\"REMARK\" type=\"string\" size=\"1073741823\"/><Column id=\"ORD\" type=\"string\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_QuestionList", this);
            obj._setContents("<ColumnInfo><Column id=\"QL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_HP\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"INFLOW_PATH_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENTS\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"MARKETING_AGREED\" type=\"STRING\" size=\"256\"/><Column id=\"USE_PRODUCT_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_QuestionListCnt", this);
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


            obj = new Dataset("ds_QuestionExcelList", this);
            obj._setContents("<ColumnInfo><Column id=\"QL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_HP\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"INFLOW_PATH_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENTS\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"MARKETING_AGREED\" type=\"STRING\" size=\"256\"/><Column id=\"USE_PRODUCT_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_Search","8","8",null,"40","24",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SchList");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_CategoryCode","8","9","58","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("2");
            obj.set_text("질문유형");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_Search.addChild(obj.name, obj);

            obj = new Combo("cmb_CategoryCode","stc_CategoryCode:8","9","150","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("0");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_innerdataset("ds_cmm_CategoryCode");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_Excel",null,"9","68","22","157",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("3");
            obj.set_text("Excel");
            obj.set_cssclass("btn_WF_Excel");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_Search",null,"9","58","22","btn_Excel:8",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_SchText");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_MarketExcel","btn_Excel:8","9","141","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("4");
            obj.set_text("마켓팅 동의 데이터");
            obj.set_cssclass("btn_WF_Excel");
            this.div_Search.addChild(obj.name, obj);

            obj = new Div("div_paging","8",null,null,"24","24","10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_url("Common::COM_Paging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_QuestionList","8","56",null,null,"24","div_paging:8",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_QuestionList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"질문유형\"/><Cell col=\"2\" text=\"문의자\"/><Cell col=\"3\" text=\"기업/기관명\"/><Cell col=\"4\" text=\"유입경로\"/><Cell col=\"5\" text=\"담당자 이메일\"/><Cell col=\"6\" text=\"등록일자\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:CATEGORY_CODE\" combodataset=\"ds_cmm_CategoryCode\" combodatacol=\"CAPTION\" combocodecol=\"CODE\" displaytype=\"combotext\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:CUSTOMER_NAME\"/><Cell col=\"3\" text=\"bind:COMPANY_NAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:INFLOW_PATH_CODE\" displaytype=\"combotext\" combodataset=\"ds_cmm_InflowPathCode\" combodatacol=\"CAPTION\" combocodecol=\"CODE\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:MANAGER_EMAIL\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:INSERT_DATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_QuestionExcelList","1316","60",null,null,"-1284","38",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("none");
            obj.set_autosizingtype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_QuestionExcelList");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"250\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"질문유형\"/><Cell col=\"2\" text=\"문의자\"/><Cell col=\"3\" text=\"기업/기관명\"/><Cell col=\"4\" text=\"유입경로\"/><Cell col=\"5\" text=\"문의 연락처\"/><Cell col=\"6\" text=\"문의 이메일\"/><Cell col=\"7\" text=\"담당자 이메일\"/><Cell col=\"8\" text=\"등록일자\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:CATEGORY_CODE\" combodataset=\"ds_cmm_CategoryCode\" combodatacol=\"CAPTION\" combocodecol=\"CODE\" displaytype=\"combotext\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:CUSTOMER_NAME\"/><Cell col=\"3\" text=\"bind:COMPANY_NAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:INFLOW_PATH_CODE\" displaytype=\"combotext\" combodataset=\"ds_cmm_InflowPathCode\" combodatacol=\"CAPTION\" combocodecol=\"CODE\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:TEL_HP\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:EMAIL\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:MANAGER_EMAIL\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:INSERT_DATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
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
        this.addIncludeScript("AH_QuestionList.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("AH_QuestionList.xfdl","Script::CommGrid.xjs");
        this.addIncludeScript("AH_QuestionList.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("AH_QuestionList.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("AH_QuestionList.xfdl","Script::ext_CommEco.xjs");
        this.registerScript("AH_QuestionList.xfdl", function() {
        /************************************************************************************************
         * 01. 업무구분 : 홈페이지관리
         * 02. 화면명   : 문의 탭페이지(AH_QuestionList)
         * 03. 화면설명 : 문의 탭페이지
         * 04. 작성일   : 2022.09.01
         * 05. 작성자   : 박종언
         * 06. 수정이력 :
         ***********************************************************************************************
         *     수정일          이  름    사유
         ***********************************************************************************************
         *
         *
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
        this.bFirst = true;		// 페이징공통 컴포넌트 초기화 처리 Flag
         /************************************************************************************************
         * FORM 영역
         ************************************************************************************************/
        this.AH_QuestionList_onload = function(obj,e)
        {
        	this.gfnCompInit(obj);  	// Grid 공통함수 호출
        	this.fnGetCode();
        };

         /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
         ************************************************************************************************/
        // 공통코드 조회
        this.fnGetCode = function()
        {
        	this.gfnAddCodeDataset("ds_cmm_CategoryCode",	"CATEGORY_CODE"); 		// 질문유형
        	this.gfnAddCodeDataset("ds_cmm_InflowPathCode",	"INFLOW_PATH_CODE"); 	// 유입경로

        	this.gfnCodeTransaction();
        };

        // 화면 로딩 시 페이징 초기
        this.fnSetPaging = function()
        {
        	// 기본 display 페이지 설정
        	this.div_paging.form.div_goPage.form.cbo_pageListCnt.set_value(30)
        	this.div_paging.form.fn_loadInit(0, 10, true, this);

        	this.fnSearchCnt();
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
        	var sCategoryCode = this.div_Search.form.cmb_CategoryCode.value;

        	this.gfnAddSendParameter("CATEGORY_CODE", sCategoryCode);

        	this.gfnAddOutputDataset("ds_QuestionListCnt", "dsOutput");
        	this.gfnCommonTransaction("Search_QuestionList_Cnt", "AH_QuestionList_S01_Cnt");
        };

        // 조회
        this.fnSearch = function(nStartNum, nEndNum)
        {
        	var sCategoryCode = this.div_Search.form.cmb_CategoryCode.value;

        	this.gfnAddSendParameter("START_NO", nStartNum);
        	this.gfnAddSendParameter("END_NO", nEndNum);
        	this.gfnAddSendParameter("CATEGORY_CODE", sCategoryCode);

        	this.gfnAddOutputDataset("ds_QuestionList", "dsOutput");
        	this.gfnCommonTransaction("Search_QuestionList", "AH_QuestionList_S01", this.grd_QuestionList);
        };

        // 상세
        this.fnQuestionDet = function(vMode)
        {
        	var sQlSeq = this.ds_QuestionList.getColumn(this.ds_QuestionList.rowposition, "QL_SEQ");
        	var Argument = {pvQlSeq:sQlSeq, pvMode:vMode};
        	this.commUtil.popup(this, "popupQuestionPopup", "Admin::AH_QuestionListPopup.xfdl", -1, -1, 900, 600, true, false, false, Argument, "fnPopupCallBack");
        };

        // 엑셀 조회
        this.fnExcelData = function()
        {
        	var sCategoryCode = this.div_Search.form.cmb_CategoryCode.value;

        	this.gfnAddSendParameter("CATEGORY_CODE", sCategoryCode);

        	this.gfnAddOutputDataset("ds_QuestionExcelList", "dsOutput");
        	this.gfnCommonTransaction("Search_QuestionExcelList", "AH_QuestionList_S02", this.grd_QuestionExcelList);
        };

        // 엑셀
        this.fnExcel = function()
        {
        	var objGrd = this.grd_QuestionExcelList;

        	var sFileNm = "문의 목록";
        	var sQuestionNm = this.div_Search.form.cmb_CategoryCode.text;
        	sFileNm += "(" + sQuestionNm + ")";

        	if(nexacro.getApplication().id=="ACEp")
        	{
        		this.parent.parent.parent.parent.parent.fn_excelExport(this, objGrd, sFileNm);
        	}
        	else
        	{
        		this.gfn_excelExport(this, objGrd, sFileNm);
        	}
        };

        // 마켓팅 동의 엑셀 팝업
        this.fnMarketingAgreedExcel = function()
        {
        	this.commUtil.popup(this, "popupQuestionMarketingAgreedPopup", "Admin::AH_QuestionMarketingAgreedListPopup.xfdl", -1, -1, 400, 300, true, false, false, null, "fnPopupCallBack");
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
        				// QNA 상품들만 필터링
        				this.ds_cmm_CategoryCode.filter("VAL1 != 'NO_QNA'");
        				this.div_Search.form.cmb_CategoryCode.set_index(0);

        				this.fnSetPaging();
        				//this.fnSearch();
        				break;
        			case "Search_QuestionList_Cnt" :
        				this.fnSearch(1, this.div_paging.form.fv_pageListCnt);
        				break;

        			case "Search_QuestionList" :
        				if(this.bFirst) {
        					// [필수] 전체건수 설정
        					this.div_paging.form.fn_init(this.ds_QuestionListCnt.getColumn(0, "TOTAL_COUNT"), 10, true, this);
        					this.bFirst = false;
        				}
        				break;
        			case "Search_QuestionExcelList" :
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
        			case "popupQuestionPopup" : // 문의 상세
        				//this.fnSearch();
        			break;
        			case "popupQuestionMarketingAgreedPopup" : // 마켓팅 동의 팝업
        			break;
        		}
        	}
        }

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
        			break;
        		case "btn_Excel":	// 엑셀
        			this.fnExcelData();
        			break;
        		case "btn_MarketExcel":	// 마켓팅 동의 팝업
        			this.fnMarketingAgreedExcel();
        			break;
        	}
        };

        // 상세 팝업 이벤트
        this.grd_QuestionList_oncelldblclick = function(obj,e)
        {
        	this.fnQuestionDet("U");
        };

        // 질문유형 변경 이벤트
        this.div_Search_cmb_CategoryCode_onitemchanged = function(obj,e)
        {
        	this.fnResetSearch();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.AH_QuestionList_onload,this);
            this.div_Search.form.cmb_CategoryCode.addEventHandler("onitemchanged",this.div_Search_cmb_CategoryCode_onitemchanged,this);
            this.div_Search.form.btn_Excel.addEventHandler("onclick",this.common_onclick,this);
            this.div_Search.form.btn_Search.addEventHandler("onclick",this.common_onclick,this);
            this.div_Search.form.btn_MarketExcel.addEventHandler("onclick",this.common_onclick,this);
            this.grd_QuestionList.addEventHandler("onheadclick",this.grd_CheckServerList_onheadclick,this);
            this.grd_QuestionList.addEventHandler("oncelldblclick",this.grd_QuestionList_oncelldblclick,this);
            this.grd_QuestionExcelList.addEventHandler("onheadclick",this.grd_CheckServerList_onheadclick,this);
            this.grd_QuestionExcelList.addEventHandler("oncelldblclick",this.grd_QuestionList_oncelldblclick,this);
        };
        this.loadIncludeScript("AH_QuestionList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
