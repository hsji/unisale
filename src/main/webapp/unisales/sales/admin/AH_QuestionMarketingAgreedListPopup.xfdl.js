(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AH_QuestionMarketingAgreedListPopup");
            this.set_titletext("월별 마켓팅동의 선택");
            this.set_cssclass("frm_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_YYYYMM", this);
            obj._setContents("<ColumnInfo><Column id=\"YYYYMM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_QuestionExcelList", this);
            obj._setContents("<ColumnInfo><Column id=\"QL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_HP\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"INFLOW_PATH_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENTS\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"MARKETING_AGREED\" type=\"STRING\" size=\"256\"/><Column id=\"USE_PRODUCT_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("st_Title","10","0","186","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("월별 마켓팅동의 선택");
            obj.set_cssclass("sta_POP_Title");
            this.addChild(obj.name, obj);

            obj = new Static("stc_BottomFrame","0",null,null,"40","0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_BtnBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Cancel",null,null,"60","22","8","9",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_cancel");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Excel",null,null,"90","22","btn_Cancel:8","9",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("다운로드");
            obj.set_cssclass("btn_WF_Excel");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"10","15","15","8",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_POP_Cls");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_QuestionExcelList","630","8",null,null,"-1278","-230",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_autofittype("none");
            obj.set_autosizingtype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_QuestionExcelList");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"250\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"질문유형\"/><Cell col=\"2\" text=\"문의자\"/><Cell col=\"3\" text=\"기업/기관명\"/><Cell col=\"4\" text=\"유입경로\"/><Cell col=\"5\" text=\"문의자 연락처\"/><Cell col=\"6\" text=\"문의자 이메일\"/><Cell col=\"7\" text=\"담당자 이메일\"/><Cell col=\"8\" text=\"등록일자\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:CATEGORY_CODE\" combodataset=\"ds_cmm_CategoryCode\" combodatacol=\"CAPTION\" combocodecol=\"CODE\" displaytype=\"combotext\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:CUSTOMER_NAME\"/><Cell col=\"3\" text=\"bind:COMPANY_NAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:INFLOW_PATH_CODE\" displaytype=\"combotext\" combodataset=\"ds_cmm_InflowPathCode\" combodatacol=\"CAPTION\" combocodecol=\"CODE\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:TEL_HP\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:EMAIL\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:MANAGER_EMAIL\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:INSERT_DATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_QuestionMarketAgreed","8","40",null,null,"8","stc_BottomFrame:8",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("div_WF_detailBg");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_YYYYMM","0","33",null,null,"0","0",null,null,null,null,this.div_QuestionMarketAgreed.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_YYYYMM");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"년월\"/></Band><Band id=\"body\"><Cell text=\"bind:YYYYMM\" displaytype=\"date\" calendardateformat=\"yyyy-MM\" calendareditformat=\"yyyy-MM\"/></Band></Format></Formats>");
            this.div_QuestionMarketAgreed.addChild(obj.name, obj);

            obj = new Static("stc_YYYYMM","0","8","82","17",null,null,null,null,null,null,this.div_QuestionMarketAgreed.form);
            obj.set_taborder("1");
            obj.set_text("년월 검색");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_QuestionMarketAgreed.addChild(obj.name, obj);

            obj = new MaskEdit("msk_YYYYMM","stc_YYYYMM:8","8","115","19",null,null,null,null,null,null,this.div_QuestionMarketAgreed.form);
            obj.set_taborder("2");
            obj.set_format("####-##");
            obj.set_type("string");
            this.div_QuestionMarketAgreed.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_QuestionMarketAgreed.form
            obj = new Layout("default","",0,0,this.div_QuestionMarketAgreed.form,function(p){});
            this.div_QuestionMarketAgreed.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",400,400,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("AH_QuestionMarketingAgreedListPopup.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("AH_QuestionMarketingAgreedListPopup.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("AH_QuestionMarketingAgreedListPopup.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("AH_QuestionMarketingAgreedListPopup.xfdl","Script::CommGrid.xjs");
        this.addIncludeScript("AH_QuestionMarketingAgreedListPopup.xfdl","Script::ext_WebEditor.xjs");
        this.registerScript("AH_QuestionMarketingAgreedListPopup.xfdl", function() {
        /************************************************************************************************
         * 01. 업무구분 : 홈페이지관리
         * 02. 화면명   : 마켓팅동의 (AH_QuestionManagerListPopup)
         * 03. 화면설명 : 문의담당자 상세
         * 04. 작성일   : 2022.09.13
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
        this.executeIncludeScript("Script::CommSystem.xjs"); /*include "Script::CommSystem.xjs"*/;
        this.executeIncludeScript("Script::CommTrans.xjs"); /*include "Script::CommTrans.xjs"*/;
        this.executeIncludeScript("Script::CommUtil.xjs"); /*include "Script::CommUtil.xjs"*/;
        this.executeIncludeScript("Script::CommGrid.xjs"); /*include "Script::CommGrid.xjs"*/;
        this.executeIncludeScript("Script::ext_WebEditor.xjs"); /*include "Script::ext_WebEditor.xjs"*/;

        /************************************************************************************************
        * 전역 변수 영역
        ************************************************************************************************/
        this.FV_QML_SEQ;
        this.FV_MODE;
        /************************************************************************************************
        * FORM 영역 EVENT 영역
        ************************************************************************************************/
        this.AH_QuestionMarketingAgreedListPopup_onload = function(obj,e)
        {
        	this.gfnCompInit(obj);	// 사용자 Grid
        	this.fnQueryData();		// 월별 문의 조회
        };
        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/

        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        // 년월 검색
        this.fnSearchData = function()
        {
        	var sYYYYMM = this.div_QuestionMarketAgreed.form.msk_YYYYMM.value;
        	var sFindRow = this.ds_YYYYMM.findRow("YYYYMM", sYYYYMM);
        	if(sFindRow == -1) {
        		alert("해당 년월 데이터가 없습니다.");
        		this.div_QuestionMarketAgreed.form.msk_YYYYMM.set_value('');
        	} else {
        		this.ds_YYYYMM.set_rowposition(sFindRow);
        	}
        };

        // 조회
        this.fnQueryData = function()
        {
        	this.gfnAddOutputDataset("ds_YYYYMM", "dsOutput");
        	this.gfnCommonTransaction("Search", "AH_QuestionMarketingAgreedList_S01", this.div_QuestionMarketAgreed.form.grd_YYYYMM);
        };

        // 선택 년월 마켓팅 동의 문의 데이터 조회
        this.fnExcelData = function()
        {
        	var curRow = this.ds_YYYYMM.rowposition;
        	var sYYYYMM = this.ds_YYYYMM.getColumn(curRow, "YYYYMM");

        	this.gfnAddSendParameter("YYYYMM", sYYYYMM);

        	this.gfnAddOutputDataset("ds_QuestionExcelList", "dsOutput");
        	this.gfnCommonTransaction("Search_QuestionExcelList", "AH_QuestionList_S02", this.grd_QuestionExcelList);
        };

        // 엑셀
        this.fnExcel = function()
        {
        	var curRow = this.ds_YYYYMM.rowposition;
        	var sYYYYMM = this.ds_YYYYMM.getColumn(curRow, "YYYYMM");

        	var objGrd = this.grd_QuestionExcelList;
        	var sFileNm = "마켓팅 동의 문의 목록";
        	sFileNm += "(" + sYYYYMM + ")";

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
        			case "Search" :

        				break;
        			case "Search_QuestionExcelList" :
        				this.fnExcel();
        				break;
        		}
        	}
        };
        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.common_onclick = function(obj,e)
        {
        	switch(obj.name) {
        		case "btn_Excel" : // Excel
        			this.fnExcelData();
        			break;

        		case "btn_close": case "btn_Cancel":
        			//this.close();
        			this.commUtil.popupClose("close");
        			break;
        	}
        };

        // grid 셀 더블 클릭
        this.div_QuestionMarketAgreed_grd_YYYYMM_oncelldblclick = function(obj,e)
        {
        	this.fnExcelData();
        };

        this.div_QuestionMarketAgreed_msk_YYYYMM_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		var sYYYYMM = this.div_QuestionMarketAgreed.form.msk_YYYYMM.value;
        		if(this.gfnIsEmpty(sYYYYMM)) alert("검색어를 입력해 주세요.");
        		else this.fnSearchData();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.AH_QuestionMarketingAgreedListPopup_onload,this);
            this.btn_Cancel.addEventHandler("onclick",this.common_onclick,this);
            this.btn_Excel.addEventHandler("onclick",this.common_onclick,this);
            this.btn_close.addEventHandler("onclick",this.common_onclick,this);
            this.grd_QuestionExcelList.addEventHandler("onheadclick",this.grd_CheckServerList_onheadclick,this);
            this.grd_QuestionExcelList.addEventHandler("oncelldblclick",this.grd_QuestionList_oncelldblclick,this);
            this.div_QuestionMarketAgreed.form.grd_YYYYMM.addEventHandler("oncelldblclick",this.div_QuestionMarketAgreed_grd_YYYYMM_oncelldblclick,this);
            this.div_QuestionMarketAgreed.form.msk_YYYYMM.addEventHandler("onkeyup",this.div_QuestionMarketAgreed_msk_YYYYMM_onkeyup,this);
        };
        this.loadIncludeScript("AH_QuestionMarketingAgreedListPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
