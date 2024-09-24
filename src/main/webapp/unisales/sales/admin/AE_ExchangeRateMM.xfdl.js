(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AE_ExchangeRateMM");
            this.set_titletext("환율관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCurrencyList", this);
            obj._setContents("<ColumnInfo><Column id=\"CURRENCY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENCY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENCY_ABBREVIATION\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENCY_FULL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENCY_SIGN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExchangeRate", this);
            obj._setContents("<ColumnInfo><Column id=\"ER_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"YYYYMM\" type=\"STRING\" size=\"256\"/><Column id=\"BASE_CURRENCY\" type=\"STRING\" size=\"256\"/><Column id=\"COUNTER_CURRENCY\" type=\"STRING\" size=\"256\"/><Column id=\"EXCHAGE_RATE\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"CONFIRM_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REMARKS\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCurrencyCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"CURRENCY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENCY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENCY_ABBREVIATION\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENCY_FULL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENCY_SIGN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_Currency", this);
            obj._setContents("<ColumnInfo><Column id=\"CURRENCY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENCY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENCY_ABBREVIATION\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENCY_FULL_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCurrency", this);
            obj._setContents("<ColumnInfo><Column id=\"CURRENCY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENCY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENCY_ABBREVIATION\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENCY_FULL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENCY_SIGN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_ConfirmFlag", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION_JAP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"CAPTION\">확정</Col><Col id=\"CAPTION_JAP\">確定</Col></Row><Row><Col id=\"CODE\">0</Col><Col id=\"CAPTION\">미확정</Col><Col id=\"CAPTION_JAP\">未指定</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCounterCurrency", this);
            obj._setContents("<ColumnInfo><Column id=\"CURRENCY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENCY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENCY_ABBREVIATION\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENCY_FULL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CURRENCY_SIGN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_Search","8","8",null,"40","8",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SchList");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Excel",null,"9","68","22","8",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("1");
            obj.set_text("Excel");
            obj.set_cssclass("btn_WF_Excel");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_Search",null,"9","58","22","btn_Excel:8",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_SchText");
            obj.getSetter("TL_SEQ").set("118");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_Save",null,"9","58","22","btn_Search:8",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_tran");
            obj.getSetter("TL_SEQ").set("115");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("stc_Currency","8","9","69","18",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("3");
            obj.set_text("통화");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("12472");
            this.div_Search.addChild(obj.name, obj);

            obj = new Combo("cmb_Currency","stc_Currency:8","9","183","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_cmm_Currency");
            obj.set_codecolumn("CURRENCY_CODE");
            obj.set_datacolumn("CURRENCY_FULL_NAME");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("stc_YYYYMM","cmb_Currency:8","9","69","18",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("5");
            obj.set_text("조회년월");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("962");
            this.div_Search.addChild(obj.name, obj);

            obj = new Calendar("cal_Year","stc_YYYYMM:8","9","65","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("7");
            obj.set_dateformat("yyyy");
            obj.set_editformat("yyyy");
            obj.set_type("spin");
            obj.set_headformat("yyyy");
            this.div_Search.addChild(obj.name, obj);

            obj = new CheckBox("chk_NoneDate","cal_Year:8","9","74","20",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("6");
            obj.set_text("기간무시");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.getSetter("TL_SEQ").set("122");
            obj.set_value("0");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("stc_Intro",null,"9","376","22","btn_Save:8",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("8");
            obj.set_text("為替レート確定時に「基準日付」を選択した後、確定可否を選択保存");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("stc_ServerInfo","8","56","362","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_POP_GroupBg");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_CurrencyList","8","stc_ServerInfo:0","362",null,null,"8",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsCurrencyList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"통화코드\" TL_SEQ=\"12474\"/><Cell col=\"1\" text=\"기준통화명\" TL_SEQ=\"12475\"/><Cell col=\"2\" text=\"통화약어\" TL_SEQ=\"12476\"/><Cell col=\"3\" text=\"통화기호\" TL_SEQ=\"22687\"/></Band><Band id=\"body\"><Cell text=\"bind:CURRENCY_CODE\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:CURRENCY_NAME\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:CURRENCY_ABBREVIATION\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:CURRENCY_SIGN\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ServerInfo00","378","56",null,"30","8",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_POP_GroupBg");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_ExchangeRate","grd_CurrencyList:8","stc_ServerInfo00:0",null,null,"8","8",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("dsExchangeRate");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"350\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"년월\" TL_SEQ=\"12478\"/><Cell col=\"1\" text=\"기준통화\" TL_SEQ=\"12479\"/><Cell col=\"2\" text=\"상대통화\" TL_SEQ=\"12480\"/><Cell col=\"3\" text=\"환율\" TL_SEQ=\"12520\"/><Cell col=\"4\" text=\"적용일자\" TL_SEQ=\"12481\"/><Cell col=\"5\" text=\"확정여부\" TL_SEQ=\"22557\"/><Cell col=\"6\" text=\"비고\" TL_SEQ=\"45\"/></Band><Band id=\"body\"><Cell text=\"bind:YYYYMM\" edittype=\"mask\" calendardateformat=\"yyyy-MM-dd\" calendareditformat=\"yyyy-MM-dd\" maskeditformat=\"####-##\" displaytype=\"mask\" maskedittype=\"string\"/><Cell col=\"1\" text=\"bind:BASE_CURRENCY\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsCurrencyList\" combodatacol=\"CURRENCY_FULL_NAME\" combocodecol=\"CURRENCY_CODE\"/><Cell col=\"2\" text=\"bind:COUNTER_CURRENCY\" displaytype=\"expr:CONFIRM_FLAG == &apos;1&apos; ? &apos;combotext&apos; : &apos;combocontrol&apos;\" edittype=\"expr:CONFIRM_FLAG == &apos;1&apos; ? &apos;none&apos; : &apos;combo&apos;\" combodataset=\"dsCurrencyCopy\" combodatacol=\"CURRENCY_FULL_NAME\" combocodecol=\"CURRENCY_CODE\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:EXCHAGE_RATE\" edittype=\"expr:CONFIRM_FLAG == &apos;1&apos; ? &apos;none&apos; : &apos;mask&apos;\" maskeditformat=\"##0.0000\" displaytype=\"mask\" textAlign=\"right\"/><Cell col=\"4\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" text=\"bind:INSERT_DATE\"/><Cell col=\"5\" text=\"bind:CONFIRM_FLAG\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"6\" text=\"bind:REMARKS\" edittype=\"text\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_CurrencyTit","16","63","95","16",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("통화정보");
            obj.set_cssclass("sta_POP_GroupTit");
            obj.getSetter("TL_SEQ").set("12473");
            this.addChild(obj.name, obj);

            obj = new Button("btn_CurrencyDel","303","61","58","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("삭제");
            obj.getSetter("TL_SEQ").set("117");
            this.addChild(obj.name, obj);

            obj = new Button("btn_CurrencyAdd",null,"61","58","22","btn_CurrencyDel:8",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("추가");
            obj.getSetter("TL_SEQ").set("528");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ExchangeRateTit","386","63","59","16",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("환율정보");
            obj.set_cssclass("sta_POP_GroupTit");
            obj.getSetter("TL_SEQ").set("12477");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ConfirmDate","stc_ExchangeRateTit:8","62","69","18",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("기준일자 :");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("504");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ExchangeRateAdd",null,"61","58","22","82",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("추가");
            obj.getSetter("TL_SEQ").set("528");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ExchangeRateDel","btn_ExchangeRateAdd:8","61","58","22",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("삭제");
            obj.getSetter("TL_SEQ").set("117");
            this.addChild(obj.name, obj);

            obj = new Button("btn_BatchRate",null,"61","98","22","btn_ExchangeRateAdd:8",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("일괄데이터 생성");
            obj.getSetter("TL_SEQ").set("12526");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_ConfirmDate","stc_ConfirmDate:8","60","98","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Static("stc_CounterCurrency","cal_ConfirmDate:8","62","69","18",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("상대통화 :");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("12480");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_CounterCurrency","stc_CounterCurrency:8","60","98","22",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_innerdataset("dsCounterCurrency");
            obj.set_codecolumn("CURRENCY_CODE");
            obj.set_datacolumn("CURRENCY_FULL_NAME");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_Search.form
            obj = new Layout("default","",0,0,this.div_Search.form,function(p){});
            this.div_Search.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("AE_ExchangeRateMM.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("AE_ExchangeRateMM.xfdl","Script::CommGrid.xjs");
        this.addIncludeScript("AE_ExchangeRateMM.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("AE_ExchangeRateMM.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("AE_ExchangeRateMM.xfdl","Script::ext_CommEco.xjs");
        this.registerScript("AE_ExchangeRateMM.xfdl", function() {
        /************************************************************************************************
         * 01. 업무구분 : 환율관리
         * 02. 화면명   : 환율관리(AE_ExchangeRateMM)
         * 03. 화면설명 : 환율관리
         * 04. 작성일   : 2023.08.14
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
        this.SAVE_CURROW; // 저장 시 현재 위치
        this.fvCounter_CurCode; // 상대통화 저장용 변수
         /************************************************************************************************
         * FORM 영역
         ************************************************************************************************/
        this.AE_ExchangeRateMM_onload = function(obj,e)
        {
        	this.gfnCompInit(obj);  	// Grid 공통함수 호출

        	this.fnFormInit();
        	this.fnCurrencyList();
        	this.fnSearchCurrencyList();
        };

         /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
         ************************************************************************************************/
        this.fnCurrencyList = function()
        {
        	this.gfnAddOutputDataset("ds_cmm_Currency", "dsOutput");
        	this.gfnCommonTransaction("currencyList", "AE_ExchangeRateMM_S01");
        };

        // 통화 조회
        this.fnSearchCurrencyList = function()
        {
        	this.dsCurrencyList.set_enableevent(false);
        	var sCurrency = this.div_Search.form.cmb_Currency.value;

        	this.gfnAddSendParameter("CURRENCY_CODE", sCurrency);
        	this.gfnAddOutputDataset("dsCurrencyList", "dsOutput");
        	this.gfnCommonTransaction("SearchCurrencyList", "AE_ExchangeRateMM_S01");
        };

         // 환율 조회
        this.fnSearchExchageRate = function()
        {
        	var curRow = this.dsCurrencyList.rowposition;
        	var sBaseCurrency = this.dsCurrencyList.getColumn(curRow, "CURRENCY_CODE");
        	var sYYYY = this.div_Search.form.cal_Year.value;
        	var sNoneDate = this.div_Search.form.chk_NoneDate.value;

        	this.gfnAddSendParameter("BASE_CURRENCY", sBaseCurrency);
        	this.gfnAddSendParameter("YYYY", sYYYY);
        	this.gfnAddSendParameter("NONE_DATE", sNoneDate);
        	this.gfnAddOutputDataset("dsExchangeRate", "dsOutput");
        	this.gfnCommonTransaction("SearchExchageRate", "AE_ExchangeRateMM_S02", this.grd_ExchangeRate);
        };

        // 환율 추가
        this.fnExchangeRateAdd = function(sCurrencyCode)
        {
        	var nRow = this.dsExchangeRate.addRow();
        	this.dsExchangeRate.setColumn(nRow, "BASE_CURRENCY", sCurrencyCode);
        	this.dsExchangeRate.setColumn(nRow, "CONFIRM_FLAG", "0");

        	this.fnSetCurrencyDelBtn();
        };

        // 저장
        this.fnSave = function()
        {
        	this.SAVE_CURROW = this.dsCurrencyList.rowposition;

        	this.gfnAddInputDataset("dsCurrencyList",  "dsCurrencyList");
        	this.gfnAddInputDataset("dsExchangeRate",  "dsExchangeRate");
        	this.gfnCommonTransaction("Save", "AE_ExchangeRateMM_R01");
        };

        // 엑셀
        this.fnExcel = function()
        {
        	var objGrd = this.grd_QuestionExcelList;

        	var sFileNm = this.gfnGetTransTxt(22686,"문의 목록");
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

        // 화면 콜백
        this.fnCallBack = function (strSvcID, nErrorCode, strErrorMag)
        {
        	if (nErrorCode<0) {
        		this.alert("["+strSvcID+":"+nErrorCode+"] "+strErrorMag);
        		return;
        	} else {
        		switch (strSvcID)
        		{
        			case "currencyList" :
        				this.dsCurrency.copyData(this.ds_cmm_Currency);
        				var nRow = this.ds_cmm_Currency.insertRow(0);
        				this.ds_cmm_Currency.setColumn(nRow, "CURRENCY_NAME", "全体");
        				this.ds_cmm_Currency.setColumn(nRow, "CURRENCY_FULL_NAME", "全体");
        				break;
        			case "SearchCurrencyList" :
        				if(!this.gfnIsEmpty(this.SAVE_CURROW)) {
        					this.dsCurrencyList.set_rowposition(this.SAVE_CURROW);
        					this.SAVE_CURROW = ""; // 초기화
        				}

        				this.dsCurrencyList.set_enableevent(true);
        				this.fnSearchExchageRate();
        				break;
        			case "SearchExchageRate" :
        				this.dsCurrencyCopy.clearData();

        				var curRow = this.dsCurrencyList.rowposition;
        				var sBaseCurrency = this.dsCurrencyList.getColumn(curRow, "CURRENCY_CODE");

        				this.dsCurrencyCopy.copyData(this.dsCurrency);

        				this.dsCurrencyCopy.filter("CURRENCY_CODE!='"+sBaseCurrency+"'");

        				//상대통화 복사
        				this.dsCounterCurrency.clearData();
        				this.dsCounterCurrency.copyData(this.dsCurrencyCopy,true);

        				var nRow = this.dsCounterCurrency.insertRow(0);
        				this.dsCounterCurrency.setColumn(nRow, "CURRENCY_CODE", "ALL");
        				this.dsCounterCurrency.setColumn(nRow, "CURRENCY_NAME", "全体");
        				this.dsCounterCurrency.setColumn(nRow, "CURRENCY_FULL_NAME", "全体");

        				//기존에 선택된 상대통화가 있다면 해당 통화로 상대통화 설정
        				var nCounterCurRow = this.dsCounterCurrency.findRow("CURRENCY_CODE",this.fvCounter_CurCode);
        				if(nCounterCurRow >= 0) {
        					this.cmb_CounterCurrency.set_index(nCounterCurRow);
        					this.fnSetCounterCurrency(this.fvCounter_CurCode);
        				} else {	//없다면 전체로 설정
        					this.cmb_CounterCurrency.set_index(nRow);
        					this.fnSetCounterCurrency("ALL");
        				}

        				this.fnSetCurrencyDelBtn();
        				break;
        			case "Save" :
        				alert(this.gfnGetTransTxt(1170,"저장 되었습니다."));
        				this.fnCurrencyList();
        				this.fnSearchCurrencyList();
        				break;
        		}
        	}
        };

        this.fnSetCurrencyDelBtn = function()
        {
        	if(this.dsExchangeRate.rowcount > 0) this.btn_CurrencyDel.set_enable(false);
        	else this.btn_CurrencyDel.set_enable(true);
        };

        // 데이터 체크
        this.fnDataCheck = function(sOldrow)
        {
        	var bResult = false;

        	if (this.gfnIsUpdateDs(this.dsExchangeRate))
        	{
        		if (this.confirm(this.gfnGetTransTxt(12530, "변경된 환율정보 데이터가 존재 합니다 계속 진행 하시겠습니까?")))	{
        			this.dsExchangeRate.reset();
        			bResult = true;
        		} else {
        			this.dsCurrencyList.set_enableevent(false);
        			if(this.gfnIsEmpty(sOldrow)) this.dsCurrencyList.set_rowposition(this.dsCurrencyList.rowposition);
        			else this.dsCurrencyList.set_rowposition(sOldrow);
        			this.dsCurrencyList.set_enableevent(true);
        		}
        	}
        	else
        	{
        		bResult = true;
        	}

        	return bResult;
        };

        // 엑셀 다운로드
        this.fnExcel = function()
        {
        	var sCurrencyName = this.dsCurrencyList.getColumn(this.dsCurrencyList.rowposition, "CURRENCY_NAME");
        	var objGrd = this.grd_ExchangeRate;
        	var sFileNm = sCurrencyName + this.gfnGetTransTxt(12477, " 환율정보");

        	this.gfn_excelExport(this, objGrd, sFileNm);
        };

        // Validation
        this.fnValidation = function()
        {
        	/*
        		체크 데이터
        		dsCurrencyList : CURRENCY_NAME, CURRENCY_ABBREVIATION
        		dsExchangeRate : YYYYMM, COUNTER_CURRENCY, EXCHAGE_RATE
        	*/
        	var bResult = this.gfnIsUpdateDs(this.dsCurrencyList);

        	if(bResult) {
        		for(var i = 0; i < this.dsCurrencyList.rowcount; i++) {
        			if(this.gfnIsEmpty(this.dsCurrencyList.getColumn(i, "CURRENCY_NAME"))) { this.alert(this.gfnGetTransTxt(12482, "기준통화명은 필수 입력 항목입니다.")); return false;}
        			else if(this.gfnIsEmpty(this.dsCurrencyList.getColumn(i, "CURRENCY_ABBREVIATION"))) { this.alert(this.gfnGetTransTxt(12527, "통화약어는 필수 입력 항목입니다.")); return false;}
        		}
        	}

        	bResult = this.gfnIsUpdateDs(this.dsExchangeRate);

        	if(bResult) {
        		for(var i = 0; i < this.dsExchangeRate.rowcount; i++) {
        			if(this.gfnIsEmpty(this.dsExchangeRate.getColumn(i, "YYYYMM"))) { this.alert(this.gfnGetTransTxt(12484, "년월은 필수 입력 항목입니다.")); return false;}
        			else if(this.gfnIsEmpty(this.dsExchangeRate.getColumn(i, "COUNTER_CURRENCY"))) { this.alert(this.gfnGetTransTxt(12528, "상대통화는 필수 입력 항목입니다.")); return false;}
        			else if(this.gfnIsEmpty(this.dsExchangeRate.getColumn(i, "EXCHAGE_RATE"))) { this.alert(this.gfnGetTransTxt(12486, "환율은 필수 입력 항목입니다.")); return false;}
        		}
        	}

        	return true;
        };
         /************************************************************************************************
         * FORM 공통 FUNCTION 영역
         ************************************************************************************************/
         this.fnFormInit = function()
         {
        	var objDate = new Date();
        	var nYear = objDate.getFullYear();
        	this.div_Search.form.cal_Year.set_value(String(nYear));

        	this.div_Search.form.chk_NoneDate.set_value("1");

        	var sToday = this.gfnToday();
        	this.cal_ConfirmDate.set_value(sToday);
         };
         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        this.common_onclick = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_Search":	// 조회
        			this.fnSearchCurrencyList();
        			break;

        		case "btn_CurrencyAdd" : // 통화 추가
        			this.dsCurrencyList.addRow();
        			break;

        		case "btn_CurrencyDel" : // 통화 삭제
        			if(this.confirm(this.gfnGetTransTxt(12531, "선택하신 통화를 삭제 하시겠습니까? 확인 클릭 후 저장버튼 클릭 시 삭제가 됩니다.")))
        			{
        				var curRow = this.dsCurrencyList.rowposition;
        				this.dsCurrencyList.deleteRow(curRow);
        			}
        			break;

        		case "btn_ExchangeRateAdd" : // 환율정보 추가
        			var currencyCode = this.dsCurrencyList.getColumn(this.dsCurrencyList.rowposition, "CURRENCY_CODE");
        			if(this.gfnIsEmpty(currencyCode)) {
        				alert(this.gfnGetTransTxt(12487, "통화코드를 먼저 저장 해주세요."));
        				return;
        			} else {
        				this.fnExchangeRateAdd(currencyCode);
        			}
        			break;

        		case "btn_ExchangeRateDel" : // 환율정보 삭제
        			if(this.confirm(this.gfnGetTransTxt(12488, "선택하신 환율정보를 삭제 하시겠습니까?")))
        			{
        				var curRow = this.dsExchangeRate.rowposition;
        				this.dsExchangeRate.deleteRow(curRow);
        			}
        			break;

        		case "btn_Save" : // 저장
        			if(this.fnValidation()) {
        				if(!this.fnDuplicateCheck()) this.fnSave();
        				else alert(this.gfnGetTransTxt(1631, "중복 데이터가 존재 합니다.")); return;
        			}
        			break;

        		case "btn_Excel":	// 엑셀
        			this.fnExcel();
        			break;

        		case "btn_BatchRate":	// 일괄 데이터 생성
        			this.fnBatchRate();
        			break;
        	}
        };

        this.dsCurrencyList_onrowposchanged = function(obj,e)
        {
        	if(this.fnDataCheck(e.oldrow)) this.fnSearchExchageRate();
        };

        this.div_Search_cmb_Currency_onitemchanged = function(obj,e)
        {
        	this.fnSearchCurrencyList();
        };

        this.div_Search_chk_NoneDate_onchanged = function(obj,e)
        {
        	this.fnSearchExchageRate();
        };

        this.div_Search_cal_Year_onchanged = function(obj,e)
        {
        	this.fnSearchExchageRate();
        };

        // 일괄 환율 데이터 생성
        this.fnBatchRate = function()
        {
        	var sCurrencyCode = this.dsCurrencyList.getColumn(this.dsCurrencyList.rowposition, "CURRENCY_CODE");
        	var sCurrencyAbbreviation = this.dsCurrencyList.getColumn(this.dsCurrencyList.rowposition, "CURRENCY_ABBREVIATION");
        	var sYear = this.div_Search.form.cal_Year.value;
        	var sCounterCurrency = this.cmb_CounterCurrency.value;
        	var sCounterCurrencyNm = this.cmb_CounterCurrency.text;
        	sYear = sYear.substr(0, 4);

        	if(this.gfnIsEmpty(sCounterCurrency)) {
        		alert(this.gfnGetTransTxt(12532, "상대통화를 선택 후 일괄 생성 해주세요."));
        		return;
        	} else {
        		if(this.confirm(sYear + this.gfnGetTransTxt(12529, "년도 데이터를 일괄 생성 시 해당 년도 기존에 있는 데이터는 삭제 후 생성이 됩니다. 진행 하시겠습니까?"))) {
        			this.dsExchangeRate.filter("YYYYMM.toString().toUpperCase().indexOf('" + sYear + "') >=0 && COUNTER_CURRENCY=='" + sCounterCurrency +"'");
        			this.dsExchangeRate.deleteAll();

        			for(var i = 1; i <= 12; i++) {
        				var sMonth = this.lpad(i, 2, "0");
        				var nRow = this.dsExchangeRate.addRow();

        				this.dsExchangeRate.setColumn(nRow, "BASE_CURRENCY", sCurrencyCode);
        				this.dsExchangeRate.setColumn(nRow, "CONFIRM_FLAG", "0");
        				this.dsExchangeRate.setColumn(nRow, "YYYYMM", sYear + sMonth);
        				this.dsExchangeRate.setColumn(nRow, "COUNTER_CURRENCY", sCounterCurrency);

        				// 기준통화가 "엔"이고 상대통화가 "원화"인 경우
        				if(sCurrencyAbbreviation == "JPY" && sCounterCurrency == "003") this.dsExchangeRate.setColumn(nRow, "EXCHAGE_RATE", 10.0000);
        			}
        		}
        		this.dsExchangeRate.filter("");
        		this.fnSetCurrencyDelBtn();
        	}
        };

        /**
         * 좌측문자열채우기
         * @params
         *  - str : 원 문자열
         *  - padLen : 최대 채우고자 하는 길이
         *  - padStr : 채우고자하는 문자(char)
         */
        this.lpad = function(str, padLen, padStr) {
            if (padStr.length > padLen) {
                return str;
            }
            str += ""; // 문자로
            padStr += ""; // 문자로
            while (str.length < padLen)
                str = padStr + str;
            str = str.length >= padLen ? str.substring(0, padLen) : str;
            return str;
        };

        this.dsExchangeRate_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "CONFIRM_FLAG") {
        		var str = ""
        		if(e.newvalue == "1") {
        			var sToday = this.gfnToday();
        			var sConfirmDate = this.cal_ConfirmDate.value;
        			var sExchageRate = this.dsExchangeRate.getColumn(this.dsExchangeRate.rowposition, "EXCHAGE_RATE");
        			var sCounterCurrency = this.dsExchangeRate.getColumn(this.dsExchangeRate.rowposition, "COUNTER_CURRENCY");
        			var sCounterCurrencyIdx = this.ds_cmm_Currency.findRow("CURRENCY_CODE", sCounterCurrency);
        			var sCounterCurrencyNm = this.ds_cmm_Currency.getColumn(sCounterCurrencyIdx, "CURRENCY_NAME");

        			str = sToday + ' 서울외국환중개 ' + sConfirmDate.substr(4, 2) + "月" +  sConfirmDate.substr(6, 2) + "日付の "+ sCounterCurrencyNm + "基準て為替レート " + sExchageRate.toFixed(4);
        		}
        		this.dsExchangeRate.setColumn(this.dsExchangeRate.rowposition, "REMARKS", str);
        	}
        };

        // 중복 체크
        this.fnDuplicateCheck = function()
        {
        	var sDuplicateFlag = false;
        	var sameCnt = 0;

        	for(var i = 0; i < this.dsCurrencyList.getRowCount(); i++) {
        		var sCurrencyName = this.dsCurrencyList.getColumn(i, "CURRENCY_NAME");
        		var sCurrencyAbbrevition = this.dsCurrencyList.getColumn(i, "CURRENCY_ABBREVIATION");

        		for(var j = 0; j < this.dsCurrencyList.getRowCount(); j++) {
        			if(i != j) {
        				var sCompareCurrencyName = this.dsCurrencyList.getColumn(j, "CURRENCY_NAME");
        				var sCompareCurrencyAbbrevition = this.dsCurrencyList.getColumn(j, "CURRENCY_ABBREVIATION");

        				if(sCurrencyName.trim() == sCompareCurrencyName.trim()) {
        					sameCnt++;
        					sDuplicateFlag = true;
        				} else if(sCurrencyAbbrevition.trim() == sCompareCurrencyAbbrevition.trim()) {
        					sameCnt++;
        					sDuplicateFlag = true;
        				}
        			}
        		}
        	}

        	return sDuplicateFlag;
        };
        this.cmb_CounterCurrency_onitemchanged = function(obj,e)
        {
        	this.fnSetCounterCurrency(e.postvalue);
        };

        //환율정보 필터
        this.fnSetCounterCurrency = function(nCurrencyCode) {
        	if(nCurrencyCode== "ALL" || (this.gfnIsEmpty(nCurrencyCode) == true)) {
        		this.dsExchangeRate.filter("");
        	} else {
        		this.dsExchangeRate.filter("COUNTER_CURRENCY == '" + nCurrencyCode +"'");
        	}
        	this.fvCounter_CurCode = nCurrencyCode;
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.AE_ExchangeRateMM_onload,this);
            this.div_Search.form.btn_Excel.addEventHandler("onclick",this.common_onclick,this);
            this.div_Search.form.btn_Search.addEventHandler("onclick",this.common_onclick,this);
            this.div_Search.form.btn_Save.addEventHandler("onclick",this.common_onclick,this);
            this.div_Search.form.cmb_Currency.addEventHandler("onitemchanged",this.div_Search_cmb_Currency_onitemchanged,this);
            this.div_Search.form.cal_Year.addEventHandler("onchanged",this.div_Search_cal_Year_onchanged,this);
            this.div_Search.form.chk_NoneDate.addEventHandler("onchanged",this.div_Search_chk_NoneDate_onchanged,this);
            this.btn_CurrencyDel.addEventHandler("onclick",this.common_onclick,this);
            this.btn_CurrencyAdd.addEventHandler("onclick",this.common_onclick,this);
            this.btn_ExchangeRateAdd.addEventHandler("onclick",this.common_onclick,this);
            this.btn_ExchangeRateDel.addEventHandler("onclick",this.common_onclick,this);
            this.btn_BatchRate.addEventHandler("onclick",this.common_onclick,this);
            this.cmb_CounterCurrency.addEventHandler("onitemchanged",this.cmb_CounterCurrency_onitemchanged,this);
            this.dsCurrencyList.addEventHandler("onrowposchanged",this.dsCurrencyList_onrowposchanged,this);
            this.dsExchangeRate.addEventHandler("oncolumnchanged",this.dsExchangeRate_oncolumnchanged,this);
            this.dsCurrencyCopy.addEventHandler("onrowposchanged",this.dsCurrencyCopy_onrowposchanged,this);
        };
        this.loadIncludeScript("AE_ExchangeRateMM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
