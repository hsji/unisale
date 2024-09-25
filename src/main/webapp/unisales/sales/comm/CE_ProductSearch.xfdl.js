(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CE_ProductSearch");
            this.set_titletext("영업제품 검색");
            this.set_cssclass("frm_popBg");
            this.set_font("normal bold 10pt/normal \"Arial\"");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,575);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_CD_CONTRACT_TYPE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Product", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCT_CODE\" type=\"string\" size=\"20\"/><Column id=\"PRODUCT_CODE_LEVEL\" type=\"int\" size=\"11\"/><Column id=\"P_PRODUCT_CODE\" type=\"string\" size=\"20\"/><Column id=\"PRODUCT_NAME\" type=\"string\" size=\"100\"/><Column id=\"UP_PRODUCT_NAME\" type=\"string\" size=\"100\"/><Column id=\"PRODUCT_NAME_SHORT\" type=\"string\" size=\"100\"/><Column id=\"MAIN_PRODUCT_FLAG\" type=\"string\" size=\"1\"/><Column id=\"SELECT_FLAG\" type=\"string\" size=\"1\"/><Column id=\"MA_FLAG\" type=\"string\" size=\"1\"/><Column id=\"GOODS_FLAG\" type=\"string\" size=\"1\"/><Column id=\"UNIT_COST\" type=\"bigdecimal\" size=\"20\"/><Column id=\"REMARKS\" type=\"string\" size=\"1073741823\"/><Column id=\"DELETE_FLAG\" type=\"string\" size=\"1\"/><Column id=\"ORD\" type=\"int\" size=\"11\"/><Column id=\"RELATED_COMPANY_CODE\" type=\"string\" size=\"20\"/><Column id=\"RELATED_COMPANY_NAME\" type=\"string\" size=\"100\"/><Column id=\"INSERT_DATE\" type=\"string\" size=\"8\"/><Column id=\"INSERT_EMP_NO\" type=\"string\" size=\"60\"/><Column id=\"INSERT_EMP_NM\" type=\"string\" size=\"255\"/><Column id=\"INSERT_DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"INSERT_DEPT_NM\" type=\"string\" size=\"100\"/><Column id=\"INSERT_MODEL\" type=\"string\" size=\"100\"/><Column id=\"UPDATE_DATE\" type=\"datetime\" size=\"23\"/><Column id=\"UPDATE_EMP_NO\" type=\"string\" size=\"60\"/><Column id=\"UPDATE_DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"UPDATE_DEPT_NM\" type=\"string\" size=\"100\"/><Column id=\"UPDATE_MODEL\" type=\"string\" size=\"100\"/><Column id=\"LICENSE_KIND\" type=\"string\" size=\"20\"/><Column id=\"PRODUCT_CODE_HEXA\" type=\"string\" size=\"20\"/><Column id=\"PRODUCT_VERSION\" type=\"string\" size=\"10\"/><Column id=\"PLATFORM_LIST\" type=\"string\" size=\"100\"/><Column id=\"FUNCTION_LIST\" type=\"string\" size=\"100\"/><Column id=\"PRODUCT_LIST\" type=\"string\" size=\"100\"/><Column id=\"CHK\" type=\"string\" size=\"1\"/><Column id=\"RELATED_COMPANY_CODE_JAP\" type=\"STRING\" size=\"256\"/><Column id=\"RELATED_COMPANY_NAME_JAP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_PrdVersion", this);
            obj.getSetter("desc").set("제품 버전 055");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_PLATFORM_LIST", this);
            obj.getSetter("desc").set("제품 종류 053");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCT_CODE\" type=\"string\" size=\"20\"/><Column id=\"PRODUCT_NAME\" type=\"string\" size=\"100\"/><Column id=\"PLATFORM_LIST\" type=\"string\" size=\"100\"/><Column id=\"CD_CODE\" type=\"string\" size=\"20\"/><Column id=\"CAPTION\" type=\"string\" size=\"100\"/><Column id=\"VAL1\" type=\"string\" size=\"100\"/><Column id=\"VAL2\" type=\"string\" size=\"100\"/><Column id=\"ORD\" type=\"string\" size=\"10\"/><Column id=\"ISCHECKED\" type=\"string\" size=\"1\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_FUNCTION_LIST", this);
            obj.getSetter("desc").set("지원 OS 052");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCT_CODE\" type=\"string\" size=\"20\"/><Column id=\"PRODUCT_NAME\" type=\"string\" size=\"100\"/><Column id=\"FUNCTION_LIST\" type=\"string\" size=\"100\"/><Column id=\"CD_CODE\" type=\"string\" size=\"20\"/><Column id=\"CAPTION\" type=\"string\" size=\"100\"/><Column id=\"VAL1\" type=\"string\" size=\"100\"/><Column id=\"VAL2\" type=\"string\" size=\"100\"/><Column id=\"ORD\" type=\"string\" size=\"10\"/><Column id=\"ISCHECKED\" type=\"string\" size=\"1\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_PRODUCT_LIST", this);
            obj.getSetter("desc").set("제품 라이선스 056");
            obj._setContents("<ColumnInfo><Column id=\"PRODUCT_CODE\" type=\"string\" size=\"20\"/><Column id=\"PRODUCT_NAME\" type=\"string\" size=\"100\"/><Column id=\"PRODUCT_LIST\" type=\"string\" size=\"100\"/><Column id=\"CD_CODE\" type=\"string\" size=\"20\"/><Column id=\"CAPTION\" type=\"string\" size=\"100\"/><Column id=\"VAL1\" type=\"string\" size=\"100\"/><Column id=\"VAL2\" type=\"string\" size=\"100\"/><Column id=\"ORD\" type=\"string\" size=\"10\"/><Column id=\"ISCHECKED\" type=\"string\" size=\"1\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSelected", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ProductRelated", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_Prod","4","87","1192","442",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_List","0","31",null,null,"0","0",null,null,null,null,this.div_Prod.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_Product");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseexpandkey("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"60\"/><Column size=\"600\"/><Column size=\"160\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"No.\"/><Cell col=\"2\" text=\"제품명\" TL_SEQ=\"187\"/><Cell col=\"3\" text=\"제품코드\" TL_SEQ=\"263\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:currow == comp.currentrow ? &quot;imagecontrol&quot; : &quot;none&quot;\" text=\"expr:currow == comp.currentrow ? &quot;theme://images/img_check_N.png&quot; : &quot;&quot;\"/><Cell col=\"1\" expr=\"currow+1\"/><Cell col=\"2\" treelevel=\"bind:PRODUCT_CODE_LEVEL\" edittype=\"tree\" displaytype=\"treeitemcontrol\" text=\"bind:PRODUCT_NAME\" textAlign=\"left\" expr=\"SELECT_FLAG == &quot;1&quot; ? PRODUCT_NAME : &quot;[&quot;+PRODUCT_NAME+&quot;]&quot;\" treecheck=\"bind:CHK\"/><Cell col=\"3\" text=\"bind:PRODUCT_CODE\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_Prod.addChild(obj.name, obj);

            obj = new Static("Static06","0","0",null,"31","0",null,null,null,null,null,this.div_Prod.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_POP_GroupBg");
            this.div_Prod.addChild(obj.name, obj);

            obj = new Static("Static07","10","9","120","15",null,null,null,null,null,null,this.div_Prod.form);
            obj.set_taborder("1");
            obj.set_text("제품 목록");
            obj.set_cssclass("sta_POP_GroupTit");
            obj.getSetter("TL_SEQ").set("264");
            this.div_Prod.addChild(obj.name, obj);

            obj = new Static("Static00","0",null,null,"38","0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_BtnBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Cancel",null,null,"80","22","8","8",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_cancel");
            obj.getSetter("TL_SEQ").set("59");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Confirm",null,null,"60","22","btn_Cancel:7","8",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_tran");
            obj.getSetter("TL_SEQ").set("113");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close",null,"10","15","15","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_POP_Cls");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_Search","4","39",null,"40","4",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_cssclass("div_WF_SchList");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ProductNm","4","8","44","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("0");
            obj.set_text("제품명");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("187");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("st_ContractType","508","8","60","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("2");
            obj.set_text("계약구분");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_visible("false");
            obj.getSetter("TL_SEQ").set("123");
            this.div_Search.addChild(obj.name, obj);

            obj = new Combo("cmb_ContractType","572","8","118","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_CD_CONTRACT_TYPE");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_visible("false");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_Search",null,"7","60","24","8",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_SchText");
            obj.getSetter("TL_SEQ").set("118");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("stc_ProductNm2","247","8","70","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("5");
            obj.set_text("연관제품명");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("265");
            this.div_Search.addChild(obj.name, obj);

            obj = new Edit("edt_Name2","320","8","190","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("6");
            obj.getSetter("product_cd").set("");
            this.div_Search.addChild(obj.name, obj);

            obj = new Edit("edt_Name","52","8","460","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("1");
            obj.getSetter("product_cd").set("");
            this.div_Search.addChild(obj.name, obj);

            obj = new Div("div_ProdRelated","4","239","1192","290",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_List","0","31",null,null,"0","0",null,null,null,null,this.div_ProdRelated.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_ProductRelated");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseexpandkey("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"60\"/><Column size=\"600\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"No.\"/><Cell col=\"2\" text=\"제품명\" TL_SEQ=\"187\"/><Cell col=\"3\" text=\"제품코드\" TL_SEQ=\"263\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:currow == comp.currentrow ? &quot;imagecontrol&quot; : &quot;none&quot;\" text=\"expr:currow == comp.currentrow ? &quot;theme://images/img_check_N.png&quot; : &quot;&quot;\"/><Cell col=\"1\" expr=\"currow+1\"/><Cell col=\"2\" treelevel=\"bind:PRODUCT_CODE_LEVEL\" edittype=\"tree\" displaytype=\"treeitemcontrol\" text=\"bind:PRODUCT_NAME\" textAlign=\"left\" expr=\"SELECT_FLAG == &quot;1&quot; ? PRODUCT_NAME : &quot;[&quot;+PRODUCT_NAME+&quot;]&quot;\" treecheck=\"bind:CHK\"/><Cell col=\"3\" text=\"bind:PRODUCT_CODE\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_ProdRelated.addChild(obj.name, obj);

            obj = new Static("Static06","0","0",null,"31","0",null,null,null,null,null,this.div_ProdRelated.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_POP_GroupBg");
            this.div_ProdRelated.addChild(obj.name, obj);

            obj = new Static("Static07","10","9","120","15",null,null,null,null,null,null,this.div_ProdRelated.form);
            obj.set_taborder("1");
            obj.set_text("연관제품 목록");
            obj.set_cssclass("sta_POP_GroupTit");
            obj.getSetter("TL_SEQ").set("266");
            this.div_ProdRelated.addChild(obj.name, obj);

            obj = new Div("div_LicenseInfo","947","div_Search:8","248",null,null,"46",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","0","279",null,"31","0",null,null,null,null,null,this.div_LicenseInfo.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_POP_GroupBg");
            this.div_LicenseInfo.addChild(obj.name, obj);

            obj = new Static("Static04","10","288","120","15",null,null,null,null,null,null,this.div_LicenseInfo.form);
            obj.set_taborder("4");
            obj.set_text("지원 OS");
            obj.set_cssclass("sta_POP_GroupTit");
            obj.getSetter("TL_SEQ").set("267");
            this.div_LicenseInfo.addChild(obj.name, obj);

            obj = new Grid("grd_PlatformList","0","183",null,"98","0",null,null,null,null,null,this.div_LicenseInfo.form);
            obj.set_taborder("7");
            obj.set_autofittype("col");
            obj.set_scrolltype("vertical");
            obj.set_binddataset("ds_CD_PLATFORM_LIST");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:ISCHECKED\" border=\"0px none\"/><Cell col=\"1\" text=\"bind:CAPTION\" border=\"0px none\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_LicenseInfo.addChild(obj.name, obj);

            obj = new Grid("grd_FunctionList","0","309",null,null,"0","0",null,null,null,null,this.div_LicenseInfo.form);
            obj.set_taborder("8");
            obj.set_autofittype("col");
            obj.set_scrolltype("vertical");
            obj.set_binddataset("ds_CD_FUNCTION_LIST");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:ISCHECKED\" border=\"0px none\"/><Cell col=\"1\" text=\"bind:CAPTION\" border=\"0px none\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_LicenseInfo.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,"31","0",null,null,null,null,null,this.div_LicenseInfo.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_GroupBg");
            this.div_LicenseInfo.addChild(obj.name, obj);

            obj = new Static("Static02","10","9","120","15",null,null,null,null,null,null,this.div_LicenseInfo.form);
            obj.set_taborder("0");
            obj.set_text("제품 라이선스");
            obj.set_cssclass("sta_POP_GroupTit");
            obj.getSetter("TL_SEQ").set("268");
            this.div_LicenseInfo.addChild(obj.name, obj);

            obj = new Grid("grd_ProductList","0","31",null,"123","0",null,null,null,null,null,this.div_LicenseInfo.form);
            obj.set_taborder("6");
            obj.set_autofittype("col");
            obj.set_scrolltype("vertical");
            obj.set_autoenter("key");
            obj.set_binddataset("ds_CD_PRODUCT_LIST");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:ISCHECKED\" border=\"0px none\"/><Cell col=\"1\" text=\"bind:CAPTION\" border=\"0px none\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_LicenseInfo.addChild(obj.name, obj);

            obj = new Static("Static03","0","152",null,"31","0",null,null,null,null,null,this.div_LicenseInfo.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_POP_GroupBg");
            this.div_LicenseInfo.addChild(obj.name, obj);

            obj = new Static("Static00","10","161","120","15",null,null,null,null,null,null,this.div_LicenseInfo.form);
            obj.set_taborder("2");
            obj.set_text("제품 종류");
            obj.set_cssclass("sta_POP_GroupTit");
            obj.getSetter("TL_SEQ").set("269");
            this.div_LicenseInfo.addChild(obj.name, obj);

            obj = new Static("st_Title","10","0","356","35",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("영업제품 검색");
            obj.set_cssclass("sta_POP_Title");
            obj.getSetter("TL_SEQ").set("270");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Infor","19","545","944","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("NP17.1、X-UP、TOBEMALL、V-PASSは製品カテゴリーから選択してください。");
            obj.set_color("blue");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_Prod.form
            obj = new Layout("default","",0,0,this.div_Prod.form,function(p){});
            this.div_Prod.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_Search.form
            obj = new Layout("default","",0,0,this.div_Search.form,function(p){});
            this.div_Search.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_ProdRelated.form
            obj = new Layout("default","",0,0,this.div_ProdRelated.form,function(p){});
            this.div_ProdRelated.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_LicenseInfo.form
            obj = new Layout("default","",0,0,this.div_LicenseInfo.form,function(p){});
            this.div_LicenseInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1200,575,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CE_ProductSearch.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("CE_ProductSearch.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("CE_ProductSearch.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("CE_ProductSearch.xfdl","Script::CommGrid.xjs");
        this.registerScript("CE_ProductSearch.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분	 	: xxx
        * 02. 화면명		: xxx
        * 03. 화면설명 		: xxx
        * 04. 작성일   	: 2018.xx.xx
        * 05. 작성자   	: xxx
        * 06. 수정이력 	:
        ***********************************************************************************************
        *     수정일          이  름    사유
        ***********************************************************************************************
        *
        ************************************************************************************************/

        /************************************************************************************************
        * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        this.executeIncludeScript("Script::CommSystem.xjs"); /*include "Script::CommSystem.xjs"*/;
        this.executeIncludeScript("Script::CommTrans.xjs"); /*include "Script::CommTrans.xjs"*/;
        this.executeIncludeScript("Script::CommUtil.xjs"); /*include "Script::CommUtil.xjs"*/;
        this.executeIncludeScript("Script::CommGrid.xjs"); /*include "Script::CommGrid.xjs"*/;


        /************************************************************************************************
        * 전역 변수 영역
        ************************************************************************************************/

        this.arrDsLicCd = [	 this.ds_CD_PRODUCT_LIST
        					,this.ds_CD_PLATFORM_LIST
        					,this.ds_CD_FUNCTION_LIST	];
        this.bUseRelatedProduct		= false;		//연관제품 선택 사용여부
        this.bUseLicenseInfo		= false;		//라이선스 정보 선택 사용여부
        this.bUseOnlyMainProduct	= false;		//메인제품만 보여줄지 여부
        this.bUseMaProduct			= false;		//유지보수 제품 선택 사용 여부

        this.sProductCd = "";
        this.sProductCd2 = "";
        this.sProductlist ="";
        this.sPlatformlist ="";
        this.sFunctionlist ="";
        this.sComboContractType = "";
        this.FV_CO_CD = nexacro.getApplication().gdsUserInfo.getColumn(0, "CO_CD");
        /************************************************************************************************
        * FORM 영역 EVENT 영역
        ************************************************************************************************/
        this.CE_ProductSearch_onload = function(obj,e)
        {
        	this.gfnCompInit(obj);  	// Grid 공통함수 호출
        	this.fnInitForm();
        };


        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.div_Search_btn_Search_onclick = function(obj,e)
        {
        	this.fnSearch();
        };

        this.btn_Close_onclick = function(obj,e)
        {
        	this.commUtil.popupClose();
        };

        this.btn_Cancel_onclick = function(obj,e)
        {
        	this.commUtil.popupClose();
        };

        this.btn_Confirm_onclick = function(obj,e)
        {
        	this.fnReturnOne(this.ds_Product.rowposition);
        };

        this.grd_List_oncelldblclick = function(obj,e)
        {
        	this.fnReturnOne(this.ds_Product.rowposition);
        };

        this.div_Search_edt_Name_onkeydown = function(obj,e)
        {

        	if(e.keycode == 13)
        	{
        		if (obj.name == "edt_Name") {
        			this.setProductFilter();
        		} else if (obj.name == "edt_Name2"){
        			this.setRelatedProductFilter();
        		}
        	}
        };





        this.div_Search_cmb_ContractType_onitemchanged = function(obj,e)
        {
        	this.setProductFilter();
        	this.setRelatedProductFilter();
        };

        this.grd_List_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.fnReturnOne(this.ds_Product.rowposition);
        	}
        };



        this.ds_Product_onrowposchanged = function(obj,e)
        {
        	if(this.bUseLicenseInfo && e.newrow > -1)
        	{
        		// 라이선스 정보 Dataset 초기화 처리
        		for(var i = 0, iL = this.arrDsLicCd.length; i < iL; i++)
        		{
        			this.arrDsLicCd[i].filter("");
        			this.arrDsLicCd[i].reset();
        		}


        		var licenseKind = obj.getColumn(e.newrow, "LICENSE_KIND");
        		var mainProdFlag = obj.getColumn(e.newrow, "MAIN_PRODUCT_FLAG");
        		var bLicenseInfoView = true;
        		if (licenseKind == "CRTF")		bLicenseInfoView = false;
        		else if (licenseKind == "MP")	bLicenseInfoView = false;
        		else if ((licenseKind == "XP" || licenseKind == "NP" || licenseKind == "NexacroN")
        				&& mainProdFlag == "1") bLicenseInfoView = false;


        		// 라이선스 관련 선택정보가 1개라도 존재
        		if (bLicenseInfoView) {
        			// 라이선스 정보 Dataset Filter 처리

        			var sFilter = "PRODUCT_CODE=='"+obj.getColumn(e.newrow, "PRODUCT_CODE")+"'";
        			for(var i = 0, iL = this.arrDsLicCd.length; i < iL; i++)
        			{
        				this.arrDsLicCd[i].filter(sFilter);
        			}

        			//라이선스정보 선택창 표시
        			this.div_Prod.set_right(260);
        			this.div_ProdRelated.set_right(260);
        			this.div_LicenseInfo.bringToFront();
        			this.div_LicenseInfo.set_visible(true);
        		} else {
        			//라이선스정보 선택창 숨김
        			this.div_Prod.set_right(4);
        			this.div_ProdRelated.set_right(4);
        			this.div_LicenseInfo.set_visible(false);
        		}
        	}
        };

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.fnInitForm = function()
        {
        	if(this.parent.sContractType == "G" && this.FV_CO_CD == "J02") this.stc_Infor.set_visible(true);

        	if(this.parent.hasOwnProperty("sSubject"))
        	{
        		this.div_Search.form.edt_Name.set_value(this.parent.sSubject);
        	}
        	this.div_Search.form.cmb_ContractType.set_value("P");
        	if(this.parent.hasOwnProperty("sContractType"))
        	{

        		if(this.parent.sContractType == "ALL")
        		{
        			this.div_Search.form.st_ContractType.set_visible(true);
        			this.div_Search.form.cmb_ContractType.set_visible(true);
        		} else {
        			/*매입구분이 OEM일경우는 상품을 조회한다*/
        			if(this.parent.sContractType=="O")
        				this.sComboContractType = "G";
        			else
        			this.sComboContractType = this.parent.sContractType;
        		}

        		if (this.parent.hasOwnProperty("sComboContractType")) {
        			this.sComboContractType = this.parent.sComboContractType;
        		}

        		this.div_Search.form.cmb_ContractType.set_value(this.sComboContractType);

        	}
        	if(this.parent.hasOwnProperty("userelatedproduct"))
        	{
        		this.bUseRelatedProduct = this.parent.userelatedproduct;
        	}
        	if(this.parent.hasOwnProperty("uselicenseinfo"))
        	{
        		this.bUseLicenseInfo = this.parent.uselicenseinfo;
        	}
        	if(this.parent.hasOwnProperty("useonlymainproduct"))
        	{
        		this.bUseOnlyMainProduct = this.parent.useonlymainproduct;
        	}
        	if(this.parent.hasOwnProperty("usemaproduct"))
        	{
        		this.bUseMaProduct = this.parent.usemaproduct;
        	}
        	if(this.parent.hasOwnProperty("sProductCd"))
        	{
        		this.sProductCd = this.parent.sProductCd;
        		this.div_Search.form.edt_Name.product_cd = this.parent.sProductCd;
        		//유지보수 계약에서 팝업시 기본 유지보수로 선택되게 처리
        		if(this.gfnIsEmpty(this.sProductCd) && this.sComboContractType=="M")
        		{
        			this.sProductCd ="M01";
        			this.div_Search.form.edt_Name.product_cd = this.sProductCd;
        		}
        	}
        	if(this.parent.hasOwnProperty("sProductCd2"))
        	{
        		this.sProductCd2 = this.parent.sProductCd2;
        	}
        	if (this.parent.hasOwnProperty("productlist"))
        	{
        		this.sProductlist = this.parent.productlist;
        	}
        	if (this.parent.hasOwnProperty("platformlist"))
        	{
        		this.sPlatformlist = this.parent.platformlist;
        	}
        	if (this.parent.hasOwnProperty("functionlist"))
        	{
        		this.sFunctionlist = this.parent.functionlist;
        	}

        	if(this.bUseRelatedProduct)
        	{
        		//상품의경우 연관제품그리드와 사이즈 조절
        		if(this.parent.sContractType.indexOf("G")==0)
        		{
        			this.div_Prod.set_height(220);
        			this.div_ProdRelated.set_top(311);
        			this.div_ProdRelated.set_height(220);
        		} else {
        			this.div_Prod.set_height(148);
        		}

        		this.div_Search.form.edt_Name.set_width(190);
        		this.div_Search.form.stc_ProductNm2.set_visible(true);
        		this.div_Search.form.edt_Name2.set_visible(true);
        		this.div_ProdRelated.set_visible(true);
        	}

        	this.fnGetCode();


        	if (this.bUseLicenseInfo) {
        		this.fnLicenseInfoSearch();
        	}
        }





        this.fnReturnOne = function(row)
        {
        	var ds 					= this.ds_Product;
        	var bIsSelectableRow 	= ds.getColumn(row, "SELECT_FLAG") == "1" ? true : false;

        	if(row > -1 && bIsSelectableRow )
        	{
        		var bIncludeLicInfo = this.div_LicenseInfo.visible;
        		var productList, platformList, functionList;
        		if(bIncludeLicInfo)
        		{
        			var bIsChecked;
        			var arrCheckedValue = [];
        			for(var i = 0, iL = this.arrDsLicCd.length; i < iL; i++)
        			{
        				arrCheckedValue.push([]);
        				for(var d = 0, dL = this.arrDsLicCd[i].getRowCount(); d < dL; d++)
        				{
        					bIsChecked = this.arrDsLicCd[i].getColumn(d, "ISCHECKED");
        					if(bIsChecked == "1")
        					{
        						arrCheckedValue[i].push(this.arrDsLicCd[i].getColumn(d, "VAL1"));
        					}
        				}
        			}
        			productList = arrCheckedValue[0].join(",");
        			platformList = arrCheckedValue[1].join(",");
        			functionList = arrCheckedValue[2].join(",");
        		}

        		var sRpProductCode, sRpProductName;
        		if(this.bUseRelatedProduct)
        		{
        			var dsR 				= this.ds_ProductRelated;
        			var nRpRow 				= dsR.rowposition;
        			var bIsSelectableRowR 	= dsR.getColumn(nRpRow, "SELECT_FLAG") == "1" ? true : false;

        			// 유지보수 연관제품인 경우 MA_FLAG 사용
        			if (this.bUseMaProduct) {
        				bIsSelectableRowR 	= dsR.getColumn(nRpRow, "MA_FLAG") == "1" ? true : false;
        			}

        			if(nRpRow > -1 && bIsSelectableRowR)
        			{
        				sRpProductCode = dsR.getColumn(nRpRow, "PRODUCT_CODE");
        				sRpProductName = dsR.getColumn(nRpRow, "PRODUCT_NAME");
        			}
        			/*
        			else{
        				alert("연관제품을 선택하십시오.");
        				return false;
        			}
        			*/
        		}

        		var dsReturn = new nexacro.Dataset();
        		dsReturn.assign(ds);
        		dsReturn.clearData();

        		var newrow = dsReturn.addRow();
        		dsReturn.copyRow(newrow, ds, row);
        		if(bIncludeLicInfo)
        		{
        			dsReturn.setColumnExt(newrow, "PRODUCT_LIST"	, productList);
        			dsReturn.setColumnExt(newrow, "PLATFORM_LIST"	, platformList);
        			dsReturn.setColumnExt(newrow, "FUNCTION_LIST"	, functionList);
        		}
        		if(this.bUseRelatedProduct)
        		{
        			dsReturn.setColumnExt(newrow, "RELATED_PRODUCT_CODE"	, sRpProductCode);
        			dsReturn.setColumnExt(newrow, "RELATED_PRODUCT_NAME"	, sRpProductName);
        		}
        		//trace("=====================	POPUP START	=====================");
        		//trace(dsReturn.saveXML());
        		//trace("=====================	POPUP END	=====================");
        		this.commUtil.popupClose(dsReturn);
        	}else{
        		this.alert(this.gfnGetTransTxt(1213, "제품을 선택하십시오."));
        	}
        }

        this.setProductFilter = function()
        {
        	var sContractType = this.div_Search.form.cmb_ContractType.value;
        	var sContractTypeLen = sContractType.length;
        	var sProductName = this.div_Search.form.edt_Name.text.toUpperCase();
        	var sFilter = "";
        	sFilter += "( PRODUCT_CODE.substring(0,"+sContractTypeLen+") == '" + sContractType + "'";
        	if(	sContractType == "G" )
        	{
        		sFilter += " || GOODS_FLAG == 1 ";
        	}
        	sFilter += " ) ";
        	sFilter += " && UP_PRODUCT_NAME.indexOf('" + sProductName + "') != -1";


        	if(this.bUseOnlyMainProduct)
        	{
        		sFilter += " && MAIN_PRODUCT_FLAG == '1'";
        	}
        	this.ds_Product.filter(sFilter);

        	if(this.bUseRelatedProduct)
        	{
        		if(sContractType== "M")
        		{
        			//this.ds_ProductRelated.filter("['G', 'P'].indexOf(PRODUCT_CODE.substring(0,1)) != -1");
        			this.ds_ProductRelated.filter("PRODUCT_CODE.length == 1 || MA_FLAG == '1'");
        		} else if (sContractType== "G") {
        			this.ds_ProductRelated.filter("PRODUCT_CODE.substring(0, 1) == 'P'");
        		}
        	}

        	if( !this.gfnIsEmpty(this.div_Search.form.edt_Name.value) )
        	{
        		this.div_Prod.form.grd_List.setCellProperty("body", 2, "displaytype", "normal");
        	}else{
        		this.div_Prod.form.grd_List.setCellProperty("body", 2, "displaytype", "treeitemcontrol");
        	}

        	if(this.hasOwnProperty("opener") && !this.gfnIsEmpty(this.opener))
        	{
        		if(this.opener.name == "COM_Search")
        		{
        			if(this.ds_Product.getCaseCount("SELECT_FLAG=='1'") == 1)
        			{
        				var frow = this.ds_Product.findRow("SELECT_FLAG", "1");
        				if(this.bUseRelatedProduct)
        				{
        					if(this.ds_ProductRelated.getCaseCount("SELECT_FLAG=='1'") == 1)
        					{
        						var fRrow = this.ds_ProductRelated.findRow("SELECT_FLAG", "1");
        						this.ds_ProductRelated.set_rowposition(fRrow);
        						this.fnReturnOne(frow);
        					}
        				}else{
        					this.fnReturnOne(frow);
        				}
        			}
        		}
        	}

        	if(this.ds_Product.getRowCount() > 0)
        	{
        		this.div_Prod.form.grd_List.setFocus();
        	}else{
        		this.div_Search.form.edt_Name.setFocus();
        	}

        	// 선택된 제품으로 Position 변경 처리
        	if (!this.gfnIsEmpty(this.div_Search.form.edt_Name.product_cd)) {
        		this.div_Search.form.edt_Name.product_cd = "";

        		var nRowIdx = this.ds_Product.findRow("PRODUCT_CODE", this.sProductCd);
        		this.ds_Product.set_rowposition(nRowIdx);

        		nRowIdx = this.ds_ProductRelated.findRow("PRODUCT_CODE", this.sProductCd2);
        		this.ds_ProductRelated.set_rowposition(nRowIdx);


        		// 라이선스 정보 사용시 처리
        		if (this.bUseLicenseInfo) {
        			this.fnSetLicenseInfo();
        		}
        	}
        }

        this.setRelatedProductFilter = function()
        {
        	var sFilter = "";
        	var sProductName = this.div_Search.form.edt_Name2.text.toUpperCase();

        	if (!this.gfnIsEmpty(sProductName)) {
        		sFilter = "UP_PRODUCT_NAME.indexOf('" + sProductName + "') != -1";
        		this.ds_ProductRelated.filter(sFilter);
        	}
        }

        // License 정보 Set
        this.fnSetLicenseInfo = function ()
        {
        	var arrProdList = this.sProductlist.split(",");
        	var arrPltfList = this.sPlatformlist.split(",");
        	var arrFuncList = this.sFunctionlist.split(",");

        	var objDs;
        	var arrLicenseInfo;


        	// License 정보 세팅 처리
        	for(var i = 0; i < this.arrDsLicCd.length; i++)
        	{
        		objDs = this.arrDsLicCd[i];

        		if (i == 0) {
        			arrLicenseInfo = arrProdList;	// PRODUCT_LIST
        		} else if (i == 1) {
        			arrLicenseInfo = arrPltfList;	// PLATFORM_LIST
        		} else {
        			arrLicenseInfo = arrFuncList;	// FUNCTION_LIST
        		}

        		for ( var j = 0; j < arrLicenseInfo.length; j++ ) {
        			var nFindRow = objDs.findRow("VAL1", arrLicenseInfo[j]);

        			if (nFindRow >= 0) {
        				objDs.setColumn(nFindRow, "ISCHECKED", "1");
        			}
        		}
        	}
        }

        // 제품종류, 지원OS All 체크 처리
        this.fnSetAllCheck = function (obj)
        {
        	var nRowCnt = obj.rowcount;
        	// All만 있는 경우는 All 체크처리 이외 세부 항목 All처리
        	if (nRowCnt > 1) {
        		obj.set_enableevent(false);
        		for (var i=0; i<nRowCnt; i++)
        		{
        			if (obj.getColumn(i, "CD_CODE") != "001") {
        				obj.setColumn(i, "ISCHECKED", 1);
        			} else {
        				obj.setColumn(i, "ISCHECKED", 0);
        			}
        		}
        		obj.set_enableevent(true);
        	}
        }

        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fnGetCode = function()
        {
        	this.gfnAddCodeDataset("ds_CD_CONTRACT_TYPE", "CONTRACT_TYPE"					);
        	// this.gfnAddCodeDataset("ds_CD_PRODUCT_LIST"	, "PRODUCT_LIST"	, false, true	);
        	// this.gfnAddCodeDataset("ds_CD_PLATFORM_LIST", "PLATFORM_LIST"	, false, true	);
        	// this.gfnAddCodeDataset("ds_CD_FUNCTION_LIST", "FUNCTION_LIST"	, false, true	);

        	this.gfnCodeTransaction();
        }

        // 라이선스 생성 정보 조회
        this.fnLicenseInfoSearch = function()
        {
        	this.gfnAddOutputDataset("ds_CD_FUNCTION_LIST",	"dsFunOutput");
        	this.gfnAddOutputDataset("ds_CD_PLATFORM_LIST",	"dsPlfOutput");
        	this.gfnAddOutputDataset("ds_CD_PRODUCT_LIST",	"dsPrdtOutput");

        	this.gfnCommonTransaction("LicenseInfo",	"AP_SalesProductMM_S03");
        }



        this.fnSearch = function()
        {
         	this.gfnAddSendParameter("CONTRACT_TYPE", "");
        /*	SQL WHERE절이 아닌 setProductFilter()함수에서 필터 하도록 처리 : 연관제품 선택 시 필요
        	this.gfnAddSendParameter("CONTRACT_TYPE", this.div_Search.form.cmb_ContractType.value);
        	this.gfnAddSendParameter("PRODUCT_NAME"	, this.div_Search.form.edt_Name.value);
        	if(this.bUseOnlyMainProduct)
        	{
        		this.gfnAddSendParameter("MAIN_PRODUCT_FLAG"	, "1");
        	}
        */
        	this.gfnAddOutputDataset("ds_Product"	, "dsOutput");
        	this.gfnCommonTransaction("Select"		, "AP_SalesProductMM_S01");
        }

        this.fnCallBack = function(strSvcID, nErrorCode, strErrorMag)
        {
        	// 에러 예외처리
        	if(nErrorCode != 0)
        	{
        		return;
        	} else {
        		if(strSvcID=="gfnGetCode")
        		{
        			if(this.parent.hasOwnProperty("sFilterExpr"))
        			{
        				var sExpr = this.parent.sFilterExpr;
        				this.ds_CD_CONTRACT_TYPE.filter(sExpr);
        			}

        			var nFindRow = this.ds_CD_CONTRACT_TYPE.findRow("CODE", this.sComboContractType);
        			if (nFindRow >= 0) {
        				this.div_Search.form.cmb_ContractType.set_value(this.sComboContractType);
        			} else {
        				this.div_Search.form.cmb_ContractType.set_index(0);
        			}

        			this.fnSearch();
        		} else if(strSvcID=="Select") {

        			if(this.bUseRelatedProduct)
        			{
        				this.ds_ProductRelated.assign(this.ds_Product);
        			}
        			this.setProductFilter();
        			this.setRelatedProductFilter();
        		} else if (strSvcID=="LicenseInfo")	{
        			//
        		}
        	}
        }

        this.ds_CD_PLATFORM_LIST_oncolumnchanged = function(obj,e)
        {
        	var sCode = obj.getColumn(e.row, "CD_CODE");
        	if (e.columnid == "ISCHECKED") {
        		if ((e.newvalue) && sCode == "001") {
        			this.fnSetAllCheck(obj);
        		}
        	}
        };

        this.ds_CD_FUNCTION_LIST_oncolumnchanged = function(obj,e)
        {
        	var sCode = obj.getColumn(e.row, "CD_CODE");
        	if (e.columnid == "ISCHECKED") {
        		if ((e.newvalue) && sCode == "001") {
        			this.fnSetAllCheck(obj);
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CE_ProductSearch_onload,this);
            this.div_Prod.form.grd_List.addEventHandler("oncelldblclick",this.grd_List_oncelldblclick,this);
            this.div_Prod.form.grd_List.addEventHandler("onkeydown",this.grd_List_onkeydown,this);
            this.btn_Cancel.addEventHandler("onclick",this.btn_Cancel_onclick,this);
            this.btn_Confirm.addEventHandler("onclick",this.btn_Confirm_onclick,this);
            this.btn_Close.addEventHandler("onclick",this.btn_Close_onclick,this);
            this.div_Search.form.cmb_ContractType.addEventHandler("onitemchanged",this.div_Search_cmb_ContractType_onitemchanged,this);
            this.div_Search.form.btn_Search.addEventHandler("onclick",this.div_Search_btn_Search_onclick,this);
            this.div_Search.form.edt_Name2.addEventHandler("onkeydown",this.div_Search_edt_Name_onkeydown,this);
            this.div_Search.form.edt_Name.addEventHandler("onkeydown",this.div_Search_edt_Name_onkeydown,this);
            this.div_ProdRelated.form.grd_List.addEventHandler("onkeydown",this.grd_List_onkeydown,this);
            this.div_ProdRelated.form.grd_List.addEventHandler("oncelldblclick",this.grd_List_oncelldblclick,this);
            this.ds_Product.addEventHandler("onrowposchanged",this.ds_Product_onrowposchanged,this);
            this.ds_CD_PLATFORM_LIST.addEventHandler("oncolumnchanged",this.ds_CD_PLATFORM_LIST_oncolumnchanged,this);
            this.ds_CD_FUNCTION_LIST.addEventHandler("oncolumnchanged",this.ds_CD_FUNCTION_LIST_oncolumnchanged,this);
        };
        this.loadIncludeScript("CE_ProductSearch.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
