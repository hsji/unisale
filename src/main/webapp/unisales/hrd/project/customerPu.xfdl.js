(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("customerPu");
            this.set_titletext("사용자전체조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(620,630);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"ASSET_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HOOF_STAT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.getSetter("firefirstcount").set("0");
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CODE\" type=\"string\" size=\"20\"/><Column id=\"COMPANY_NAME\" type=\"string\" size=\"100\"/><Column id=\"TAG\" type=\"string\" size=\"200\"/><Column id=\"CLIENT_FLAG\" type=\"string\" size=\"1\"/><Column id=\"COMPANY_FLAG\" type=\"string\" size=\"1\"/><Column id=\"TMP_FLAG\" type=\"string\" size=\"1\"/><Column id=\"BLACKLIST_FLAG\" type=\"string\" size=\"1\"/><Column id=\"NATION_CODE\" type=\"string\" size=\"20\"/><Column id=\"BUSINESS_SCALE\" type=\"string\" size=\"20\"/><Column id=\"L_CATEGORY\" type=\"string\" size=\"20\"/><Column id=\"M_CATEGORY\" type=\"string\" size=\"20\"/><Column id=\"COMPANY_REG_NO\" type=\"string\" size=\"20\"/><Column id=\"CORPORATE_REG_NO\" type=\"string\" size=\"30\"/><Column id=\"INCORPORATION_DATE\" type=\"datetime\" size=\"23\"/><Column id=\"CEO_NAME\" type=\"string\" size=\"30\"/><Column id=\"CEO_PHONE\" type=\"string\" size=\"20\"/><Column id=\"POST_NO\" type=\"string\" size=\"8\"/><Column id=\"POST_ADDR\" type=\"string\" size=\"100\"/><Column id=\"DETAIL_ADDR\" type=\"string\" size=\"100\"/><Column id=\"PHONE_NO\" type=\"string\" size=\"20\"/><Column id=\"FAX_NO\" type=\"string\" size=\"20\"/><Column id=\"BUSINESS_FORM\" type=\"string\" size=\"20\"/><Column id=\"BUSINESS_KIND\" type=\"string\" size=\"20\"/><Column id=\"PURCHASE_COMPANY_CODE\" type=\"string\" size=\"4\"/><Column id=\"PRODUCT_FLAG\" type=\"string\" size=\"1\"/><Column id=\"SI_FLAG\" type=\"string\" size=\"1\"/><Column id=\"SOLUTION_FLAG\" type=\"string\" size=\"1\"/><Column id=\"GOODS_FLAG\" type=\"string\" size=\"1\"/><Column id=\"PARTNER_FLAG\" type=\"string\" size=\"1\"/><Column id=\"PARTNER_KIND\" type=\"string\" size=\"20\"/><Column id=\"COMPANY_STATE\" type=\"string\" size=\"20\"/><Column id=\"COMPANY_KIND\" type=\"string\" size=\"20\"/><Column id=\"BANK_CODE\" type=\"string\" size=\"20\"/><Column id=\"ACCOUNT_NO\" type=\"string\" size=\"30\"/><Column id=\"ACCOUNT_NAME\" type=\"string\" size=\"50\"/><Column id=\"SI_VIEW_FLAG\" type=\"string\" size=\"1\"/><Column id=\"COLLECTION_BOND_FLAG\" type=\"string\" size=\"1\"/><Column id=\"CL_APPROVAL_EMP_NO\" type=\"string\" size=\"60\"/><Column id=\"CL_ASSET\" type=\"bigdecimal\" size=\"20\"/><Column id=\"CL_EMP_NUMBER\" type=\"int\" size=\"11\"/><Column id=\"CL_APPROVAL_DATE\" type=\"datetime\" size=\"23\"/><Column id=\"CL_CAPITAL\" type=\"bigdecimal\" size=\"20\"/><Column id=\"CL_OPINION\" type=\"string\" size=\"20\"/><Column id=\"CL_PS\" type=\"bigdecimal\" size=\"20\"/><Column id=\"CL_ANNUAL_SALES\" type=\"bigdecimal\" size=\"20\"/><Column id=\"CL_SI\" type=\"bigdecimal\" size=\"20\"/><Column id=\"CL_NET_INCOME\" type=\"bigdecimal\" size=\"20\"/><Column id=\"CL_EVALUATION\" type=\"int\" size=\"11\"/><Column id=\"CL_LISTED_FLAG\" type=\"string\" size=\"1\"/><Column id=\"CL_EXCEPTION_CODE\" type=\"string\" size=\"20\"/><Column id=\"CL_CURRENT_ASSETS\" type=\"bigdecimal\" size=\"20\"/><Column id=\"CL_PROFITABILITY\" type=\"bigdecimal\" size=\"20\"/><Column id=\"CL_SAFETY\" type=\"bigdecimal\" size=\"20\"/><Column id=\"CL_ADD_SCORE1\" type=\"string\" size=\"20\"/><Column id=\"CL_ADD_SCORE2\" type=\"string\" size=\"20\"/><Column id=\"CL_ADD_SCORE3\" type=\"string\" size=\"20\"/><Column id=\"REMARKS\" type=\"string\" size=\"1073741823\"/><Column id=\"CONTRACT_REMARKS\" type=\"string\" size=\"1073741823\"/><Column id=\"PURCHASE_REMARKS\" type=\"string\" size=\"1073741823\"/><Column id=\"DELETE_FLAG\" type=\"string\" size=\"1\"/><Column id=\"INSERT_DATE\" type=\"datetime\" size=\"23\"/><Column id=\"INSERT_EMP_NO\" type=\"string\" size=\"60\"/><Column id=\"INSERT_DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"INSERT_DEPT_NM\" type=\"string\" size=\"100\"/><Column id=\"INSERT_MODEL\" type=\"string\" size=\"100\"/><Column id=\"UPDATE_DATE\" type=\"datetime\" size=\"23\"/><Column id=\"UPDATE_EMP_NO\" type=\"string\" size=\"60\"/><Column id=\"UPDATE_DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"UPDATE_DEPT_NM\" type=\"string\" size=\"100\"/><Column id=\"UPDATE_MODEL\" type=\"string\" size=\"100\"/><Column id=\"TAX_PRICE\" type=\"bigdecimal\" size=\"20\"/><Column id=\"BILL_PRICE\" type=\"bigdecimal\" size=\"20\"/><Column id=\"VAT_PRICE\" type=\"bigdecimal\" size=\"20\"/><Column id=\"REST\" type=\"bigdecimal\" size=\"20\"/><Column id=\"YEAR\" type=\"string\" size=\"255\"/><Column id=\"COMPANY_ABBREVIATION\" type=\"string\" size=\"100\"/><Column id=\"MERGR_COMPANY_CODE\" type=\"string\" size=\"20\"/><Column id=\"TURNKEY_FLAG\" type=\"string\" size=\"1\"/><Column id=\"TRANS_TARGET\" type=\"string\" size=\"20\"/><Column id=\"SUBSIDIARY_COMPANY_FLAG\" type=\"string\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsParam1", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_TYPE\" type=\"string\" size=\"256\"/><Column id=\"COMPANY_NAME\" type=\"string\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COMPANY_TYPE\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGlobal", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"string\" size=\"60\"/><Column id=\"EMP_NM\" type=\"string\" size=\"100\"/><Column id=\"DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"DEPT_NM\" type=\"string\" size=\"100\"/><Column id=\"EMAIL\" type=\"string\" size=\"268\"/><Column id=\"MOBILE\" type=\"string\" size=\"44\"/><Column id=\"OFFICE\" type=\"string\" size=\"20\"/><Column id=\"GRADE_CD\" type=\"string\" size=\"30\"/><Column id=\"GRADE_NM\" type=\"string\" size=\"100\"/><Column id=\"DUTY_CD\" type=\"string\" size=\"30\"/><Column id=\"DUTY_NM\" type=\"string\" size=\"100\"/><Column id=\"EMP_KIND\" type=\"string\" size=\"255\"/><Column id=\"CO_CD\" type=\"string\" size=\"30\"/><Column id=\"CO_NM\" type=\"string\" size=\"100\"/><Column id=\"LOGIN_SYS\" type=\"string\" size=\"10\"/><Column id=\"LANGUAGE\" type=\"string\" size=\"10\"/><Column id=\"MODEL_ID\" type=\"string\" size=\"50\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","25","20",null,"50","25",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10","48","28","25",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCd","0","12","98","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("고객사명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCustomer","101","12","174","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00","25","70",null,"43","25",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("자산목록");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm",null,null,"50","28","78","20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"50","28","25","20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("취소");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","165","70","30","43",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("H43");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01","0","0","25",null,null,"0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W 25");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_00",null,"0","25",null,"0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W 25");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","166","0","30","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("H20");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","25","113",null,null,"25","68",null,null,"250",null,this);
            obj.set_taborder("8");
            obj.set_binddataset("dsList");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.getSetter("uFunction").set("filter,sort,!colfix,!initial,find");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"92\"/><Column size=\"227\"/><Column size=\"318\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"회사명\"/><Cell col=\"2\" text=\"주소\"/></Band><Band id=\"body\"><Cell text=\"bind:COMPANY_CODE\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:COMPANY_NAME\"/><Cell col=\"2\" text=\"bind:POST_ADDR\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",620,630,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtEmpNo","value","dsCond","EMP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtUserNm","value","dsCond","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboHoofStat","value","dsCond","HOOF_STAT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboAssetGrp","value","dsCond","ASSET_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("customerPu.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	customerPu.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/06/28
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/06/28			TOBESOFT					최초생성
        * 2022/10/18			TOBESOFT					재직상태추가
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvType = "";
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	this.fvType = this.getOwnerFrame().pvType;
        	this.dsParam1.setColumn(0, "COMPANY_TYPE", this.fvType);
        	var customer = this.getOwnerFrame().pvCustomer;
        	if(this.gfnIsNull(customer) == false) {
        		this.divSearch.form.edtCustomer.set_value(customer);
        		this.cfnSearch(); //자동조회
        	}
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *****************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	if(this.gfnIsNull(this.divSearch.form.edtCustomer.value)) {
        		this.gfnAlert("msg.err.validator.required",["고객사명"],"");
        		return;
        	}

        	this.gfnInitNextGlobalDataset(this.dsGlobal);

        	// http://172.10.10.20:7070/FrontControllerServlet.do?service=xupservice&domain=NEXTp&model=CE_CompanySearch_S01&format=xml&version=xplatform&compress=false HTTP/1.1

        	this.dsParam1.setColumn(0, "COMPANY_NAME", this.divSearch.form.edtCustomer.value);

        	var strSvcId 	= "customer";
        	var strSvcUrl 	= "nextService.do";
        	var inData 		= "dsGlobal=dsGlobal:A dsParam=dsParam1:A";
        	var outData 	= "dsList=dsOutput";
        	var strArg 		= "jobCode=" + nexacro.wrapQuote("next");
        	strArg 			+= " trxCode=" + nexacro.wrapQuote("customer");
        	strArg 			+= " trxUrl=" + nexacro.wrapQuote("FrontControllerServlet.do?service=xupservice&domain=NEXTp&model=CE_CompanySearch_S01&format=xml&version=xplatform&compress=false");
        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, "fnCallback");
        };
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //transaction
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "customer":
        			break;
        		default:break;
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnClose = function (nRow)
        {
        	var sCd = this.dsList.getColumn(nRow, "COMPANY_TYPE");
        	var sName = this.dsList.getColumn(nRow, "COMPANY_NAME");

        	var rtn = sCd +"|" + sName + "|" + this.fvType;

        	this.close(rtn);
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.btnConfirm_onclick = function(obj,e)
        {
        	this.fnClose(this.dsList.rowposition);
        };

        this.btnClose_onclick = function(obj,e)
        {
        	this.close("");
        };

        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.cfnSearch();
        };

        this.grdMaster_oncelldblclick = function(obj,e)
        {
        	this.fnClose(e.row);
        };

        this.divSearch_edtCustomer_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13) {
        		this.cfnSearch();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.divSearch.form.edtCustomer.addEventHandler("onkeyup",this.divSearch_edtCustomer_onkeyup,this);
            this.btnConfirm.addEventHandler("onclick",this.btnConfirm_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.grdMaster.addEventHandler("oncelldblclick",this.grdMaster_oncelldblclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
        };
        this.loadIncludeScript("customerPu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
