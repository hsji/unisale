(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SS_SalesMM");
            this.set_titletext("영업관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1290,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cond_SalesStatus", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"string\" size=\"30\"/><Column id=\"CAPTION\" type=\"string\" size=\"255\"/><Column id=\"VAL1\" type=\"string\" size=\"100\"/><Column id=\"VAL2\" type=\"string\" size=\"100\"/><Column id=\"VAL3\" type=\"string\" size=\"100\"/><Column id=\"VAL4\" type=\"string\" size=\"100\"/><Column id=\"REMARK\" type=\"string\" size=\"1073741823\"/><Column id=\"ORD\" type=\"string\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cond_sales_emp", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"string\" size=\"60\"/><Column id=\"EMP_NAME\" type=\"string\" size=\"262\"/><Column id=\"CO_CD\" type=\"string\" size=\"60\"/><Column id=\"DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"DEPT_NAME\" type=\"string\" size=\"100\"/><Column id=\"BUSINESS_TYPE\" type=\"string\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_ContractStatus", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"string\" size=\"30\"/><Column id=\"CAPTION\" type=\"string\" size=\"255\"/><Column id=\"VAL1\" type=\"string\" size=\"100\"/><Column id=\"VAL2\" type=\"string\" size=\"100\"/><Column id=\"VAL3\" type=\"string\" size=\"100\"/><Column id=\"VAL4\" type=\"string\" size=\"100\"/><Column id=\"REMARK\" type=\"string\" size=\"1073741823\"/><Column id=\"ORD\" type=\"string\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SalesStatus", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"256\" type=\"STRING\"/><Column id=\"DATA\" size=\"256\" type=\"STRING\"/><Column id=\"DATA_JAP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DATA\">영업실패 제외</Col><Col id=\"CODE\">0</Col><Col id=\"DATA_JAP\">営業失敗除外</Col></Row><Row><Col id=\"DATA\">장기홀딩 제외</Col><Col id=\"CODE\">1</Col><Col id=\"DATA_JAP\">長期ホールディング除外</Col></Row><Row><Col id=\"DATA\">영실/장홀 제외</Col><Col id=\"CODE\">2</Col><Col id=\"DATA_JAP\">営業失敗/長期ホールディング除外</Col></Row><Row><Col id=\"DATA\">삭제상태 보기</Col><Col id=\"CODE\">3</Col><Col id=\"DATA_JAP\">削除状態を見る</Col></Row><Row><Col id=\"DATA\">모두보기</Col><Col id=\"CODE\">4</Col><Col id=\"DATA_JAP\">全て見る</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_EmpKind", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"256\" type=\"STRING\"/><Column id=\"DATA\" size=\"256\" type=\"STRING\"/><Column id=\"DATA_JAP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DATA\">영업대표</Col><Col id=\"CODE\">E</Col><Col id=\"DATA_JAP\">営業代表</Col></Row><Row><Col id=\"DATA\">팀</Col><Col id=\"CODE\">D</Col><Col id=\"DATA_JAP\">チーム</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ContractType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"256\" type=\"STRING\"/><Column id=\"DATA\" size=\"256\" type=\"STRING\"/><Column id=\"DATA_JAP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DATA\">전체</Col><Col id=\"DATA_JAP\">全体</Col></Row><Row><Col id=\"DATA\">유지보수 제외</Col><Col id=\"CODE\">M</Col><Col id=\"DATA_JAP\">保守除外</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","0","0",null,"79","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_WF_Search");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ClientCode","0","12","89","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("10");
            obj.set_text(" 고객사");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.getSetter("TL_SEQ").set("32");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_SalesRepresent","0","stc_ClientCode:5","89","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("14");
            obj.set_text("영업대표");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.getSetter("TL_SEQ").set("55");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_SalesRepresent","stc_SalesRepresent:0.00","41","209","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_cond_sales_emp");
            obj.set_codecolumn("EMP_NO");
            obj.set_datacolumn("EMP_NAME");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_SalesStatus","cmb_SalesRepresent:0.00","41","89","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("15");
            obj.set_text("영업상태");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.getSetter("TL_SEQ").set("84");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_SalesStatus","stc_SalesStatus:0","41","127","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_SalesStatus");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            obj.getSetter("TL_FLAG").set("1");
            obj.set_text("영업실패 제외");
            obj.set_value("0");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_Save",null,"8","60","22","8",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_tran");
            obj.getSetter("TL_SEQ").set("115");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_Add",null,"8","60","22","136",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("신규");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_tran");
            obj.getSetter("TL_SEQ").set("116");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_Excel",null,"8","60","22","btn_Add:4",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("Excel");
            obj.set_cssclass("btn_WF_Excel");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_Delete",null,"8","60","22","btn_Save:4",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("삭제");
            obj.set_enable("false");
            obj.set_cssclass("btn_WF_tran");
            obj.getSetter("TL_SEQ").set("117");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_ClientName","stc_ClientCode:0","12","209","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("8");
            obj.set_text("Div00");
            obj.set_url("sales::comm/COM_Search.xfdl");
            obj.getSetter("kind").set("CLIENT");
            obj.getSetter("param").set("");
            obj.getSetter("enable_keydownevent").set("false");
            obj.getSetter("user_onchanged").set("");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_Project","div_ClientName:0.00","12","89","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("11");
            obj.set_text("프로젝트");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.getSetter("TL_SEQ").set("119");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_ProjectName","stc_Project:0","12","241","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("7");
            obj.set_text("Div00");
            obj.set_url("sales::comm/COM_Search.xfdl");
            obj.getSetter("kind").set("PROJECT");
            obj.getSetter("param").set("");
            obj.getSetter("enable_keydownevent").set("false");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_Search",null,"39","48","28","8",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("9");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            obj.getSetter("TL_SEQ").set("118");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_DueDate","cmb_SalesStatus:114.00","41","89","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("12");
            obj.set_text("계약기간");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.getSetter("TL_SEQ").set("120");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_ContractStatus","div_ProjectName:0.00","12","89","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("13");
            obj.set_text("계약상태");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.getSetter("TL_SEQ").set("121");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_ContractStatus","stc_ContractStatus:0","12","127","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_cmm_ContractStatus");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Div("div_Search_yyyyMM_FromTo","stc_DueDate:0","41","221","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("16");
            obj.set_url("sales::comm/COM_yyyyMM_FromTo2.xfdl");
            this.div_search.addChild(obj.name, obj);

            obj = new CheckBox("chk_NoneDate","div_Search_yyyyMM_FromTo:10","41","74","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("17");
            obj.set_text("기간무시");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.getSetter("TL_SEQ").set("122");
            this.div_search.addChild(obj.name, obj);

            obj = new Radio("rd_EmpKind","chk_NoneDate:19.00","41","154","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("18");
            obj.set_innerdataset("ds_EmpKind");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            obj.set_columncount("2");
            obj.set_rowcount("1");
            obj.set_visible("false");
            obj.getSetter("TL_FLAG").set("1");
            obj.set_text("영업대표");
            obj.set_value("E");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_ContractType","cmb_ContractStatus:0.00","12","89","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("19");
            obj.set_text("계약구분");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.getSetter("TL_SEQ").set("123");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_ContractType","stc_ContractType:0","12","127","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("20");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            obj.set_innerdataset("ds_ContractType");
            obj.getSetter("TL_FLAG").set("1");
            obj.set_text("");
            this.div_search.addChild(obj.name, obj);

            obj = new Tab("tab_Sales","0","div_search:8",null,null,"8","8",null,null,null,null,this);
            obj.set_tabindex("1");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tpg_sales",this.tab_Sales);
            obj.set_text("영업현황");
            obj.set_url("sales::sales/SS_SalesList.xfdl");
            obj.getSetter("TL_SEQ").set("124");
            this.tab_Sales.addChild(obj.name, obj);

            obj = new Tabpage("tpg_Presales",this.tab_Sales);
            obj.set_text("Presales");
            obj.getSetter("mode").set("");
            obj.set_url("sales::sales/SS_Presales.xfdl");
            this.tab_Sales.addChild(obj.name, obj);

            obj = new Tabpage("tpg_Contract",this.tab_Sales);
            obj.set_text("계약");
            obj.set_url("sales::sales/SS_Contract.xfdl");
            obj.getSetter("TL_SEQ").set("126");
            this.tab_Sales.addChild(obj.name, obj);

            obj = new Button("btn_ContractReport",null,"89","84","28","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("매출현황보고");
            obj.set_enable("false");
            obj.getSetter("TL_SEQ").set("127");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Order_Confirm",null,"89","84","28","btn_ContractReport:8",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("계약확정");
            obj.set_enable("false");
            obj.getSetter("TL_SEQ").set("128");
            this.addChild(obj.name, obj);

            obj = new Button("btn_CostSheet",null,"89","84","28","btn_Order_Confirm:8",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("매출원가표");
            obj.set_enable("false");
            obj.getSetter("TL_SEQ").set("129");
            this.addChild(obj.name, obj);

            obj = new Button("btn_RequestLicense",null,"89","0","22","btn_CostSheet:8",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("라이선스요청");
            obj.set_enable("false");
            obj.getSetter("TL_SEQ").set("130");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Affirmation",null,"89","84","28","btn_RequestLicense:8",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("확약서");
            obj.set_enable("false");
            obj.getSetter("TL_SEQ").set("131");
            this.addChild(obj.name, obj);

            obj = new Div("div_Attachment",null,"89","110","22","btn_Affirmation:8",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_async("false");
            obj.getSetter("SOURCE_CD").set("P");
            obj.getSetter("USE_NEXT_FILE_TYPE").set("true");
            obj.getSetter("USE_LINK_TYPE").set("true");
            obj.getSetter("USE_MULTI_FILE").set("true");
            obj.getSetter("USE_OPEN_ADD_DIALOG").set("false");
            obj.getSetter("USE_DELETE_ALL").set("false");
            obj.getSetter("USE_BUTTON_ONLY").set("true");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Estimate",null,"89","84","28","btn_CostSheet:8",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("견적서");
            obj.set_enable("false");
            obj.set_visible("false");
            obj.getSetter("TL_SEQ").set("12430");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_search.form.div_ClientName
            obj = new Layout("default","",0,0,this.div_search.form.div_ClientName.form,function(p){});
            this.div_search.form.div_ClientName.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_search.form.div_ProjectName
            obj = new Layout("default","",0,0,this.div_search.form.div_ProjectName.form,function(p){});
            this.div_search.form.div_ProjectName.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_search.form.div_Search_yyyyMM_FromTo
            obj = new Layout("default","",0,0,this.div_search.form.div_Search_yyyyMM_FromTo.form,function(p){});
            this.div_search.form.div_Search_yyyyMM_FromTo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_search.form
            obj = new Layout("default","",0,0,this.div_search.form,function(p){});
            this.div_search.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_Sales.tpg_sales
            obj = new Layout("default","",0,0,this.tab_Sales.tpg_sales.form,function(p){});
            this.tab_Sales.tpg_sales.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_Sales.tpg_Presales
            obj = new Layout("default","",0,0,this.tab_Sales.tpg_Presales.form,function(p){});
            this.tab_Sales.tpg_Presales.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_Sales.tpg_Contract
            obj = new Layout("default","",0,0,this.tab_Sales.tpg_Contract.form,function(p){});
            this.tab_Sales.tpg_Contract.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_Attachment
            obj = new Layout("default","",0,0,this.div_Attachment.form,function(p){});
            this.div_Attachment.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1290,570,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","sales::comm/COM_Search.xfdl");
            this._addPreloadList("fdl","sales::comm/COM_yyyyMM_FromTo2.xfdl");
            this._addPreloadList("fdl","sales::sales/SS_SalesList.xfdl");
            this._addPreloadList("fdl","sales::sales/SS_Presales.xfdl");
            this._addPreloadList("fdl","sales::sales/SS_Contract.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SS_SalesMM.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("SS_SalesMM.xfdl","Script::CommGrid.xjs");
        this.addIncludeScript("SS_SalesMM.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("SS_SalesMM.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("SS_SalesMM.xfdl","Script::ext_CommEco.xjs");
        this.registerScript("SS_SalesMM.xfdl", function() {
        /************************************************************************************************
         * 01. 업무구분 : 영업관리 - 영업관리
         * 02. 화면명   : 영업관리(SS_SalesMM)
         * 03. 화면설명 : 영업관리
         * 04. 작성일   : 2018.08.19
         * 05. 작성자   : 채종한
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



         /************************************************************************************************
         * FORM 영역
         ************************************************************************************************/
         this.SS_SalesMM_onload = function(obj,e)
        {
        	this.gfnCompInit(obj);  	// Grid 공통함수 호출
        	this.fnSetComCmbConfig();	// 공통 코드찾기 설정 처리
        	this.fnAuthConfig(1);		// 화면 권한 처리

        	this.fnGetCode();

        	var sToday = this.gfnToday();
        	var sStartDt = this.gfnAddMonth(sToday, -12);
        	this.div_search.form.div_Search_yyyyMM_FromTo.setFromYYYYMM(sStartDt.substr(0, 6));	// 계약기간 시작
        	this.div_search.form.div_Search_yyyyMM_FromTo.setToYYYYMM(sToday.substr(0, 6));		// 계약기간 종료
        	this.div_search.form.chk_NoneDate.set_value("1");			// 기간무시 체크

        	this.fnsetInit();
        };

        this.fnsetInit = function ()
        {
        	var sCocd = this.gfnGetCompanyCode();

        	this.btn_RequestLicense.set_enable(true);
        	this.tab_Sales.tpg_Presales.form.fnAuthConfig();

        	this.div_search.form.cmb_ContractStatus.set_visible(false);	// 계약 상태
        	this.div_search.form.stc_ContractStatus.set_visible(false);
        	this.div_search.form.stc_ContractType.set_visible(false);
        	this.div_search.form.cmb_ContractType.set_visible(false);
        	this.div_Attachment.set_enable(true);
        	this.btn_Order_Confirm.set_text(this.gfnGetTransTxt (128, "계약확정"));

        	// 프로젝트 검색 팝업 가계약만 조회 처리
        	this.div_search.form.div_ProjectName.param = "searchtype:P,contractstatus:0";

        // 	if(sCocd == "J02") {
        // 		var sRight = this.btn_Affirmation.right;
        //
        // 		// 견적서
        // 		this.btn_Estimate.set_visible(true);
        // 		this.div_Attachment.set_right(sRight);
        //
        // 		// 확약서
        // 		this.btn_Affirmation.set_visible(false);
        // 		// 라이선스 요청
        // 		this.btn_RequestLicense.set_visible(false);
        // 	}

        }

        //조회
        this.cfnSearch = function ()
        {
        	if (this.gfnDsIsUpdated(this.dsList)) {
        		// 검색을 진행하면 변경된 데이터가 사라집니다. \n계속 진행 하시겠습니까?
        		var sMsgId = "confirm.before.search";					//메세지ID
        		var arrArg = [""];										//메세지취환될값 배열[생략가능]
        		var sPopId = "search";									//메세지팝업ID[생략가능]	*해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
        		var sMsgCallback = "fnMsgCallback";						//메세지콜백[생략가능] 		* confirm성 메시지를 사용 시 반드시 필요

        		// 변경된 정보가 있습니다.\n저장 하시겠습니까?
        		this.gfnAlert(sMsgId, arrArg, sPopId, sMsgCallback);
        	}
        	else {
        		this.fnTranSearch();
        	}
        };


        //신규
        this.cfnAdd = function ()
        {
        	var nTabIdx = this.tab_Sales.tabindex;
        	if (nTabIdx == 1) {
        		 this.tab_Sales.tpg_Presales.form.fnAddContract();
        	}
        };

        //삭제
        this.cfnDel = function ()
        {
        	var nTabIdx = this.tab_Sales.tabindex;
        	if (nTabIdx == 1) {
        		this.tab_Sales.tpg_Presales.form.fnDeleteData();
        	}
        };

        //저장
        this.cfnSave = function ()
        {
        	// 변경된 정보없으면 리턴
        	if (this.gfnDsIsUpdated(this.dsList) == false) {
        		// 저장할 데이터가 없습니다.
        		this.gfnAlert("msg.save.nochange");
        		return;
        	}

        	var nTabIdx = this.tab_Sales.tabindex;
        	if (nTabIdx == 1) {
        		this.tab_Sales.tpg_Presales.form.fnSaveData();
        	}
        };
         /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
         ************************************************************************************************/

         // 공통코드 조회
         this.fnGetCode = function()
         {
        	this.gfnAddCodeDataset("ds_cmm_ContractStatus", "CONTRACTSTATUS", true);	// 계약상태 코드
        	//this.gfnAddCodeDataset("ds_SalesStatus", "SALESSTATUS", true);	// 영업상태 코드
        	this.gfnCodeTransaction();	// 공통코드 조회

        	// 조회용 Output dataset 세팅
        	//this.gfnAddOutputDataset("ds_cond_sales_emp", 	"ds_output");
        	this.gfnAddSendParameter("COMPANY_CODE", this.gfnGetCompanyCode());
        	this.gfnSetMap("salesManagerMapper", "SalesmanCombo", "ds_cond_sales_emp");
        	this.gfnCommonTransaction("SalesEmp", 	"selectNextList.do"/*		"CO_SalesEmp_S01"*/);
         }

         // 화면 콜백
        this.fnCallBack = function (strSvcID, nErrorCode, strErrorMag)
        {
        	switch (strSvcID)
        	{
        		case "gfnGetCode" :
        			this.div_search.form.cmb_ContractStatus.set_index(0);
        		break;
        		case "SalesEmp" :
        			var nAddRow = this.ds_cond_sales_emp.insertRow(0);
        			this.ds_cond_sales_emp.setColumn(nAddRow, "EMP_NAME",	this.gfnGetTransTxt(350,"전체"));
        			this.ds_cond_sales_emp.setColumn(nAddRow, "EMP_NO",		"");
        			this.ds_cond_sales_emp.setColumn(nAddRow, "DEPT_CD",	"");

        			// 일반영업(팀장이상x)인 경우
        			var sLoginEmpNo = this.gfnGetUserInfo("EMP_NO");
        			if (this.commUtil.getFormAuthority(235,1)) {
        				var nFindRow = this.ds_cond_sales_emp.findRow("EMP_NO", sLoginEmpNo);
        				if (nFindRow<0) nFindRow = 0;
        				this.div_search.form.cmb_SalesRepresent.set_index(nFindRow);
        			} else {
        				this.div_search.form.cmb_SalesRepresent.set_index(0);
        			}

        			this.div_search.form.cmb_SalesStatus.set_index(0);

        			this.div_search.form.btn_Search.click();
        			break;
        		case "SS_SalesMM_S02" :
        			break;
        		case "SearchEstimateCnt" :
        			break;
        	}
        };


        // 팝업 콜백
         this.fnPopupCallBack = function(sPopupId, Variant)
        {
        	Variant = this.commUtil.popupReturn();
        	if(this.gfnIsEmpty(Variant)) {

        		return;
        	} else {
        		this.recentVariant = Variant;
        		switch(sPopupId)
        		{
        			case "popupCostSheet" : // 제품
        				//사전원가표 상신이후 계약확정 버튼 상태확인
        				this.tab_Sales.tpg_Presales.form.fnCheckOrderConfirm(-1, Variant);
        			break;

        			case "popupEstimateConfirm" : // 견적서 선택
        				if(Variant != "close") this.fnEstimateRegPopup(Variant);
        			break;
        		}
        	}
        }
         /************************************************************************************************
         * FORM 공통 FUNCTION 영역
         ************************************************************************************************/
        // 공통 검색 Popup 설정 처리
        this.fnSetComCmbConfig = function ()
        {
        	this.div_search.form.div_ClientName.param = "pvMode:1";
        	this.div_search.form.div_ProjectName.param = "searchtype:P";
        }

        // 화면 권한 설정 처리
        this.fnAuthConfig = function(nTabIndx)
        {
        	if( (this.commUtil.getFormAuthority(235,1) == true)
        		|| (this.commUtil.getFormAuthority(235,2) == true))	//저장권한
        	{
        		if (nTabIndx == 0) {
        			this.div_search.form.btn_Add.set_enable(false);
        			this.div_search.form.btn_Delete.set_enable(false);
        			this.div_search.form.btn_Save.set_enable(false);

        			//this.btn_File_Upload.set_enable(false);
        			this.btn_CostSheet.set_enable(false);
        			this.btn_ContractReport.set_enable(false);
        			this.btn_Order_Confirm.set_enable(false);
        			this.div_search.form.rd_EmpKind.set_visible(false);
        		} else if (nTabIndx == 1) {
        			this.div_search.form.btn_Add.set_enable(true);
        			this.div_search.form.btn_Delete.set_enable(true);
        			this.div_search.form.btn_Save.set_enable(true);

        			//this.btn_File_Upload.set_enable(true);
        			this.btn_CostSheet.set_enable(true);
        			this.btn_ContractReport.set_enable(false);
        			this.btn_Order_Confirm.set_enable(true);
        			this.div_search.form.rd_EmpKind.set_visible(false);
        		} else if (nTabIndx == 2) {
        			this.div_search.form.btn_Add.set_enable(false);
        			this.div_search.form.btn_Delete.set_enable(false);
        			this.div_search.form.btn_Save.set_enable(false);

        			//this.btn_File_Upload.set_enable(false);
        			this.btn_CostSheet.set_enable(false);
        			this.btn_ContractReport.set_enable(true);
        			this.btn_Order_Confirm.set_enable(false);
        			this.div_search.form.rd_EmpKind.set_visible(true);
        		}
        	}
        }


         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        // 조회 버튼 클릭
        this.div_search_btn_Search_onclick = function(obj,e)
        {
        	var nTabIdx = this.tab_Sales.tabindex;
        	if (nTabIdx == 0) {
        		this.tab_Sales.tpg_sales.form.fnQueryData();	// 영업현황탭 조회 버튼 이벤트
        	} else if (nTabIdx == 1) {
        		this.tab_Sales.tpg_Presales.form.fnQueryData();	// Presales탭 조회 버튼 이벤트
        	} else if (nTabIdx == 2) {
        		this.tab_Sales.tpg_Contract.form.fnQueryData();	// 계약탭 조회 버튼 이벤트
        	}
        };

        // 저장 버튼 클릭
        this.div_search_btn_Save_onclick = function(obj,e)
        {
        	var nTabIdx = this.tab_Sales.tabindex;
        	if (nTabIdx == 1) {
        		this.tab_Sales.tpg_Presales.form.fnSaveData();
        	}
        };

        // 신규 버튼 클릭
        this.div_search_btn_Add_onclick = function(obj,e)
        {
        	var nTabIdx = this.tab_Sales.tabindex;
        	if (nTabIdx == 1) {
        		 this.tab_Sales.tpg_Presales.form.fnAddContract();
        	}
        };

        // 삭제 버튼 클릭
        this.div_search_btn_Delete_onclick = function(obj,e)
        {
        	var nTabIdx = this.tab_Sales.tabindex;
        	if (nTabIdx == 1) {
        		this.tab_Sales.tpg_Presales.form.fnDeleteData();
        	}
        };

        // 엑셀 Export
        this.div_search_btn_Excel_onclick = function(obj,e)
        {
        	var objGrd;
        	var sFileNm;
        	var nTabIdx = this.tab_Sales.tabindex;
        	if (nTabIdx == 0) {
        		objGrd = this.tab_Sales.tpg_sales.form.grd_SalesList;
        		sFileNm = "ExcelSales";
        	} else if (nTabIdx == 1) {
        		objGrd = this.tab_Sales.tpg_Presales.form.grd_Presales;
        		sFileNm = "ExcelPresles";
        	} else if (nTabIdx == 2) {
        		objGrd = this.tab_Sales.tpg_Contract.form.grd_ContractList;
        		sFileNm = "ExcelContract";
        	}

        	this.gfn_excelExport(this, objGrd, sFileNm);
        };

        // 매출원가표(사전)
        this.btn_CostSheet_onclick = function(obj,e)
        {
        	var nCurrow =  this.tab_Sales.tpg_Presales.form.dsList.rowposition;
        	var sProjectCd = this.tab_Sales.tpg_Presales.form.dsList.getColumn(nCurrow, "PROJECT_CODE");
        	var sContractMain = this.tab_Sales.tpg_Presales.form.dsList.getColumn(nCurrow, "CONTRACT_MAIN");

        	var ObjDs = this.tab_Sales.tpg_Presales.form.dsPurchaseList;

        	for (var i=0; i<ObjDs.rowcount; i++)
        	{

        		// 매입계약중 매출연결 되지 않을 경우 안내 처리 (판매수수료 예외처리)
        		var sContractType = ObjDs.getColumn(i, "CONTRACT_TYPE");
        		if (sContractType != "C") {
        			if ( this.gfnIsEmpty(ObjDs.getColumn(i, "CRD_SEQ")))
        			{
        				if (!this.confirm(this.gfnGetTransTxt (1856,"연결되지 않은 상품 매출(또는 매입)이 있습니다.\n진행 하시겠습니까?"))) {
        					this.tab_Sales.tpg_Presales.form.divDet.form.divDet2.form.divPur.form.btn_ContractLink.click();
        					return;
        				} else {
        					break;
        				}
        			}
        		}
        	}

        	if (this.gfnIsEmpty(sProjectCd)) {
        		this.alert(this.gfnGetTransTxt (1508, "선택된 프로젝트가 없습니다."));
        		return;
        	}

        	if (this.gfnIsEmpty(sContractMain) || sContractMain == "Z02371") {
        		this.alert(this.gfnGetTransTxt (1509, "계약처 선택 후 진행 바랍니다."));
        		return;
        	}

        	var objSiDs = this.tab_Sales.tpg_Presales.form.dsContractSi;
        	var sSiContractNo = "";
        	if (objSiDs.rowcount > 0) {
        		sSiContractNo = objSiDs.getColumn(0, "CONTRACT_NO");
        	}

        	if (this.tab_Sales.tpg_Presales.form.fnContractMainInfoSearch(obj.name) == "1") {
        		var Argument = {pv_project_cd:sProjectCd, pv_costsheet_type:"1", PV_si_contract_no:sSiContractNo};
        		this.commUtil.popup(this, "popupCostSheet", "Sales::SP_CostSheet.xfdl", -1, -1, 1350, 665, true, true, false, Argument, "fnPopupCallBack");
        	}

        };

        // 수주확정(Presales 탭), 계약확정취소(계약 탭)
        this.btn_Order_Confirm_onclick = function(obj,e)
        {
        	if (obj.text == this.gfnGetTransTxt (128, "계약확정")) {
        		if (this.tab_Sales.tpg_Presales.form.fnContractMainInfoSearch(obj.name) == "1") {
        			this.tab_Sales.tpg_Presales.form.fnContractOk();	// Presales탭 수주확정(계약확정) 처리
        		}
        	} else if (obj.text == this.gfnGetTransTxt (660, "계약확정취소")) {
        		this.tab_Sales.tpg_Contract.form.fnContractCancel();	// 계약탭 계약확정취소 처리
        	}
        };


        // 탭 변경시
        this.tab_Sales_onchanged = function(obj,e)
        {
        	this.fnAuthConfig(e.postindex);	// 권한 처리

        	if (e.postindex == 0) {
        	// 영업현황
        		this.div_search.form.cmb_ContractStatus.set_visible(true);	// 계약 상태
        		this.div_search.form.stc_ContractStatus.set_visible(true);
        		this.div_search.form.stc_ContractType.set_visible(true);
        		this.div_search.form.cmb_ContractType.set_visible(true);
        		this.ds_cmm_ContractStatus.filter("");
        		this.div_search.form.cmb_ContractStatus.set_index(0);

        		this.div_Attachment.set_enable(false);
        		this.div_Attachment.set_url("");
        		this.btn_RequestLicense.set_enable(false);	// 라이선스요청
        		this.btn_Affirmation.set_enable(true);		// 확약서
        		this.btn_Estimate.set_enable(false); // 견적서

        		// 영업현황탭 조회
        		if(this.tab_Sales.tpg_sales.form.all.length>0)
        			this.tab_Sales.tpg_sales.form.fnQueryData();
        		this.div_search.form.div_ProjectName.param = "searchtype:P";

        	} else if (e.postindex == 1) {
        	// Presales
        		// 권한 처리
        		this.btn_Affirmation.set_enable(false);	// 확약서
        		this.btn_RequestLicense.set_enable(true);	// 라이선스요청
        		this.tab_Sales.tpg_Presales.form.fnAuthConfig();

        		this.div_search.form.cmb_ContractStatus.set_visible(false);	// 계약 상태
        		this.div_search.form.stc_ContractStatus.set_visible(false);
        		this.div_search.form.stc_ContractType.set_visible(false);
        		this.div_search.form.cmb_ContractType.set_visible(false);
        		this.div_Attachment.set_enable(true);

        		// this.btn_Order_Confirm.set_width(70);
        		this.btn_Order_Confirm.set_text(this.gfnGetTransTxt (128, "계약확정"));

        		// Presales탭 조회
        		this.tab_Sales.tpg_Presales.form.fnQueryData();
        		this.div_search.form.div_ProjectName.param = "searchtype:P,contractstatus:0";
        	} else {
        	// 계약
        		this.div_search.form.cmb_ContractStatus.set_visible(true);	// 계약 상태
        		this.div_search.form.stc_ContractStatus.set_visible(true);
        		this.div_search.form.stc_ContractType.set_visible(true);
        		this.div_search.form.cmb_ContractType.set_visible(true);

        		this.ds_cmm_ContractStatus.filter("CODE==''||CODE=='2'||CODE=='3'");
        		this.div_search.form.cmb_ContractStatus.set_index(0);

        		this.div_Attachment.set_enable(false);
        		this.div_Attachment.set_url("");

        		this.btn_Order_Confirm.set_text(this.gfnGetTransTxt (660, "계약확정취소"));
        		this.btn_RequestLicense.set_enable(false);	// 라이선스요청
        		this.btn_Affirmation.set_enable(false);	// 확약서
        		this.btn_Estimate.set_enable(false); // 견적서

        		// 계약탭 조회
        		if(this.tab_Sales.tpg_Contract.form.all.length>0)
        			this.tab_Sales.tpg_Contract.form.fnQueryData();
        		this.div_search.form.div_ProjectName.param = "searchtype:P";
        	}
        };

        this.div_search_div_ClientName_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.div_search.form.btn_Search.click();
        	}
        };

        this.div_search_div_ProjectName_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.div_search.form.btn_Search.click();
        	}
        };



        // 라이선스 요청
        this.btn_RequestLicense_onclick = function(obj,e)
        {
        	this.tab_Sales.tpg_Presales.form.fnRequestLicense();
        };


        // 확약서 Popup
        this.btn_Affirmation_onclick = function(obj,e)
        {
        	var nCurrow = this.tab_Sales.tpg_sales.form.ds_list.rowposition;
        	var objDs = this.tab_Sales.tpg_sales.form.ds_list;
        	var sContractNo = "";
        	if (objDs.rowcount > 0) {
        		sContractNo = objDs.getColumn(nCurrow, "CONTRACT_NO");
        	}

        	var Argument = {pvContractNo:sContractNo};
        	this.commUtil.popup(this, "popupAffirmation", "Sales::SS_AffirmationReport.xfdl", -1, -1, 1300, 830, true, false, false, Argument, "fnPopupCallBack");
        };

        this.btn_ContractReport_onclick = function(obj,e)
        {
        	this.tab_Sales.tpg_Contract.form.fnPopupContractReport();
        };

        // 견적서 Popup
        this.fnEstimateRegPopup = function()
        {
        	var nCurrow =  this.tab_Sales.tpg_Presales.form.dsList.rowposition;
        	var sProjectCd = this.tab_Sales.tpg_Presales.form.dsList.getColumn(nCurrow, "PROJECT_CODE");
        	var sSalesEmpNo = this.tab_Sales.tpg_Presales.form.dsList.getColumn(nCurrow, "SALES_EMP_NO");
        	var sSalesEmpName = this.tab_Sales.tpg_Presales.form.dsList.getColumn(nCurrow, "SALES_EMP_NAME");

        	if (this.gfnIsEmpty(sProjectCd)) {
        		this.alert(this.gfnGetTransTxt (1508, "선택된 프로젝트가 없습니다."));
        		return;
        	}

        	var Argument =  {
        						pvProjectCode:sProjectCd
        					   ,pvSalesEmpNo:sSalesEmpNo
        					   ,pvsSalesEmpName:sSalesEmpName
        					   ,pvSalesDocType:"ESTIMATE"
        					   ,pvEstimateType:"NEW_ESTIMATE"
        					   ,pvEstimateKind:"PRODUCT"
        					   ,pvAutoSearch : true
        					};
        	this.commUtil.popup(this, "popupEstimate", "Sales::SS_EstimateReg.xfdl", -1, -1, 1400, 916, true, true, true, Argument, "fnPopupCallBack");
        };

        this.btn_Estimate_onclick = function(obj,e)
        {
        	this.fnEstimateRegPopup();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SS_SalesMM_onload,this);
            this.div_search.form.btn_Save.addEventHandler("onclick",this.div_search_btn_Save_onclick,this);
            this.div_search.form.btn_Add.addEventHandler("onclick",this.div_search_btn_Add_onclick,this);
            this.div_search.form.btn_Excel.addEventHandler("onclick",this.div_search_btn_Excel_onclick,this);
            this.div_search.form.btn_Delete.addEventHandler("onclick",this.div_search_btn_Delete_onclick,this);
            this.div_search.form.div_ClientName.addEventHandler("onkeyup",this.div_search_div_ClientName_onkeyup,this);
            this.div_search.form.div_ProjectName.addEventHandler("onkeyup",this.div_search_div_ProjectName_onkeyup,this);
            this.div_search.form.btn_Search.addEventHandler("onclick",this.div_search_btn_Search_onclick,this);
            this.tab_Sales.addEventHandler("onchanged",this.tab_Sales_onchanged,this);
            this.btn_ContractReport.addEventHandler("onclick",this.btn_ContractReport_onclick,this);
            this.btn_Order_Confirm.addEventHandler("onclick",this.btn_Order_Confirm_onclick,this);
            this.btn_CostSheet.addEventHandler("onclick",this.btn_CostSheet_onclick,this);
            this.btn_RequestLicense.addEventHandler("onclick",this.btn_RequestLicense_onclick,this);
            this.btn_Affirmation.addEventHandler("onclick",this.btn_Affirmation_onclick,this);
            this.btn_Estimate.addEventHandler("onclick",this.btn_Estimate_onclick,this);
        };
        this.loadIncludeScript("SS_SalesMM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
