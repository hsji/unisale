(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AL_DevLicenseMM");
            this.set_titletext("개발라이선스");
            if (Form == this.constructor)
            {
                this._setFormPosition(1360,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMain", this);
            obj._setContents("<ColumnInfo><Column id=\"DLI_SEQ\" type=\"bigdecimal\" size=\"20\"/><Column id=\"YYYYMM\" type=\"string\" size=\"8\"/><Column id=\"PRODUCT_CODE\" type=\"string\" size=\"40\"/><Column id=\"DEV_LICENSE_KEY\" type=\"string\" size=\"255\"/><Column id=\"LANGUAGE_CODE\" type=\"string\" size=\"80\"/><Column id=\"CONTENTS\" type=\"string\" size=\"1073741823\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLanguage", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"string\" size=\"30\"/><Column id=\"CAPTION\" type=\"string\" size=\"255\"/></ColumnInfo><Rows><Row><Col id=\"CAPTION\">전체</Col></Row><Row><Col id=\"CAPTION\">국내용</Col><Col id=\"CODE\">KOR</Col></Row><Row><Col id=\"CAPTION\">해외용</Col><Col id=\"CODE\">ENG</Col></Row><Row><Col id=\"CODE\">CNM</Col><Col id=\"CAPTION\">중국용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProduct", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"string\" size=\"30\"/><Column id=\"CAPTION\" type=\"string\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSub", this);
            obj._setContents("<ColumnInfo><Column id=\"DLL_SEQ\" type=\"bigdecimal\" size=\"20\"/><Column id=\"CONNECT_TYPE_NAME\" type=\"string\" size=\"100\"/><Column id=\"REG_KIND_NAME\" type=\"string\" size=\"100\"/><Column id=\"PRODUCT_NAME\" type=\"string\" size=\"100\"/><Column id=\"LANGUAGE\" type=\"string\" size=\"100\"/><Column id=\"EMAIL\" type=\"string\" size=\"50\"/><Column id=\"CUSTOMER_NM\" type=\"string\" size=\"200\"/><Column id=\"COMPANY_NM\" type=\"string\" size=\"200\"/><Column id=\"CONNECT_CNT\" type=\"int\" size=\"11\"/><Column id=\"REQUEST_DATE\" type=\"datetime\" size=\"23\"/><Column id=\"CONNECT_TYPE\" type=\"string\" size=\"40\"/><Column id=\"PRODUCT_CODE\" type=\"string\" size=\"40\"/><Column id=\"LANGUAGE_CODE\" type=\"string\" size=\"40\"/><Column id=\"USER_ID\" type=\"string\" size=\"50\"/><Column id=\"REG_KIND\" type=\"string\" size=\"40\"/><Column id=\"DEPARTMENT_AGREED\" type=\"int\" size=\"11\"/><Column id=\"NAME_EMAIL_AGREED\" type=\"int\" size=\"11\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaxMonth", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_Search","8","8",null,"40","8",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_WF_SchList");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Year","18","8","58","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("0");
            obj.set_text("조회년월");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.div_Search.addChild(obj.name, obj);

            obj = new Div("div_Search_yyyyMM","stc_Year:8","8","145","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("1");
            obj.set_url("Common::COM_yyyyMM.xfdl");
            obj.getSetter("user_onchanged").set("fnSearch");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_Search",null,"8","60","22","8",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_SchText");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_Save",null,"8","120","22","btn_Search:4",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("3");
            obj.set_text("개발라이선스 생성");
            obj.set_cssclass("btn_WF_tran");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("stc_Year00","div_Search_yyyyMM:16","8","58","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("6");
            obj.set_text("제품");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.div_Search.addChild(obj.name, obj);

            obj = new Combo("cb_Product","stc_Year00:8","8","150","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsProduct");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_text("Combo00");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("stc_Year00_00","cb_Product:16","8","58","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("7");
            obj.set_text("언어");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.div_Search.addChild(obj.name, obj);

            obj = new Combo("cb_Lnaguge","stc_Year00_00:8","8","150","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsLanguage");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_text("Combo01");
            this.div_Search.addChild(obj.name, obj);

            obj = new Grid("grd_Main","8","div_Search:4","300","266",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMain");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"년월\"/><Cell col=\"2\" text=\"언어\"/><Cell col=\"3\" text=\"제품\"/></Band><Band id=\"body\"><Cell text=\"bind:DLI_SEQ\"/><Cell col=\"1\" text=\"bind:YYYYMM\" displaytype=\"mask\" maskeditformat=\"####/##\" maskedittype=\"string\"/><Cell col=\"2\" text=\"bind:LANGUAGE_CODE\" combodataset=\"dsLanguage\" combodatacol=\"CAPTION\" combocodecol=\"CODE\" displaytype=\"combotext\"/><Cell col=\"3\" text=\"bind:PRODUCT_CODE\" displaytype=\"combotext\" combodataset=\"dsProduct\" combodatacol=\"CAPTION\" combocodecol=\"CODE\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Sub","8","grd_Main:4",null,null,"8","8",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsSub");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"52\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"DLL_SEQ\"/><Cell col=\"1\" text=\"접속매체\"/><Cell col=\"2\" text=\"제품\"/><Cell col=\"3\" text=\"언어\"/><Cell col=\"4\" text=\"등록종류\"/><Cell col=\"5\" text=\"성명\"/><Cell col=\"6\" text=\"Email\"/><Cell col=\"7\" text=\"회사\"/><Cell col=\"8\" text=\"발급횟수\"/><Cell col=\"9\" text=\"발급일\"/><Cell col=\"10\" text=\"Email동의\"/><Cell col=\"11\" text=\"회사정보동의\"/></Band><Band id=\"body\"><Cell text=\"bind:DLL_SEQ\"/><Cell col=\"1\" text=\"bind:CONNECT_TYPE_NAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:PRODUCT_NAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:LANGUAGE\"/><Cell col=\"4\" text=\"bind:REG_KIND_NAME\"/><Cell col=\"5\" text=\"bind:CUSTOMER_NM\"/><Cell col=\"6\" text=\"bind:EMAIL\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:COMPANY_NM\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:CONNECT_CNT\"/><Cell col=\"9\" text=\"bind:REQUEST_DATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"10\" text=\"bind:NAME_EMAIL_AGREED\" displaytype=\"checkboxcontrol\"/><Cell col=\"11\" text=\"bind:DEPARTMENT_AGREED\" displaytype=\"checkboxcontrol\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_SalesProd1","grd_Main:4","div_Search:4","150","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("개발라이선스키(TOOL)");
            obj.set_visible("true");
            obj.set_cssclass("sta_POP_GroupTit");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_LicKey","stc_SalesProd1:4","div_Search:4",null,"22","262",null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Div("div_Attachment",null,"div_Search:4","280","266","8",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_async("false");
            obj.set_url("Common::COM_Attachment.xfdl");
            obj.getSetter("SOURCE_CD").set("LIC_DLI");
            obj.getSetter("SOURCE_SEQ").set("DLI_SEQ");
            obj.getSetter("USE_NEXT_FILE_TYPE").set("false");
            obj.getSetter("USE_LINK_TYPE").set("false");
            obj.getSetter("USE_MULTI_FILE").set("true");
            obj.getSetter("OPEN_ADD_DIALOG").set("false");
            obj.getSetter("DELETE_ALL").set("false");
            obj.getSetter("BINDDATASET").set("dsMain");
            obj.getSetter("USE_READONLY").set("true");
            this.addChild(obj.name, obj);

            obj = new TextArea("ta_Contents","grd_Main:4","edt_LicKey:4",null,"240","div_Attachment:4",null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_Search.form.div_Search_yyyyMM
            obj = new Layout("default","",0,0,this.div_Search.form.div_Search_yyyyMM.form,function(p){});
            this.div_Search.form.div_Search_yyyyMM.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_Search.form
            obj = new Layout("default","",0,0,this.div_Search.form,function(p){});
            this.div_Search.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_Attachment
            obj = new Layout("default","",0,0,this.div_Attachment.form,function(p){});
            this.div_Attachment.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1360,560,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","edt_LicKey","value","dsMain","DEV_LICENSE_KEY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","ta_Contents","value","dsMain","CONTENTS");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Common::COM_yyyyMM.xfdl");
            this._addPreloadList("fdl","Common::COM_Attachment.xfdl");
        };
        
        // User Script
        this.addIncludeScript("AL_DevLicenseMM.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("AL_DevLicenseMM.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("AL_DevLicenseMM.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("AL_DevLicenseMM.xfdl","Script::CommGrid.xjs");
        this.registerScript("AL_DevLicenseMM.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 : 공통 - 공통
        * 02. 화면명   :
        * 03. 화면설명 :
        * 04. 작성일   :
        * 05. 작성자   :
        * 06. 수정이력 :
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

        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/
        this.AL_DevLicenseMM_onload = function(obj,e)
        {
        	this.gfnCompInit(obj); //Grid 공통함수 호출
        	this.fnFormInit();
        };
        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.fnFormInit = function()
        {
        	if(nexacro.getApplication().id=="ACEp")
        		this.parent.parent.stc_FormTitle.set_text(this.titletext);

        	if (!this.commUtil.getAuthority(80))
        	{
        		this.grd_Main.set_bottom(8);
        		this.ta_Contents.set_bottom(8);
        		this.div_Attachment.set_bottom(8);
        		this.grd_Sub.set_visible(false);
        		this.div_Search.form.btn_Save.set_visible(false);
        	}

        	var date = new Date();
        	var strMonth = this.gfnGetDateMaskFormatString(date, "yyyyMM");
        	this.div_Search.form.div_Search_yyyyMM.setYYYYMM(strMonth);
        	this.fnGetCode();			// 공통코드
        };

        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
         // 공통코드 조회
        this.fnGetCode = function()
        {
        	this.gfnAddOutputDataset("dsProduct",	"dsOutput1");
        	this.gfnAddOutputDataset("dsMaxMonth",	"dsOutput2");
        	this.gfnCommonTransaction("gfnGetCode",	"AL_DevLicenseMM_S03");//, this.grd_Main);
        }

        this.fnSearch = function()
        {
        	if(this.div_Search.form.div_Search_yyyyMM.getYYYYMM()<'202101')
        	{
        		alert("2021년 이후만 조회 가능합니다.");
        		this.div_Search.form.div_Search_yyyyMM.setYYYYMM('202101');
        		return;
        	}
        	if(!this.commUtil.getAuthority(80) && this.div_Search.form.div_Search_yyyyMM.getYYYYMM()>this.dsMaxMonth.getColumn(0,"YYYYMM"))
        	{
        		alert("데이터가 존재하지 않습니다.");
        		this.div_Search.form.div_Search_yyyyMM.setYYYYMM(this.dsMaxMonth.getColumn(0,"YYYYMM"));
        		return;
        	}

        	this.gfnAddSendParameter("YYYYMM", this.div_Search.form.div_Search_yyyyMM.getYYYYMM());
        	this.gfnAddSendParameter("PRODUCT_CODE", this.div_Search.form.cb_Product.value);
        	this.gfnAddSendParameter("LANGUAGE_CODE", this.div_Search.form.cb_Lnaguge.value);
        	this.gfnAddOutputDataset("dsMain", "dsOutput");
        	var objGrid = new Array();
        	objGrid[0] = this.grd_Main;
        	objGrid[1] = this.grd_Sub;

        	this.gfnCommonTransaction("Select", "AL_DevLicenseMM_S01", objGrid);
        };

        this.fnSearchSub = function(strYYYYMM, strProductCode, strLang)
        {
        	if(this.commUtil.getAuthority(80))
        	{
        		this.gfnAddSendParameter("YYYYMM", strYYYYMM);
        		this.gfnAddSendParameter("PRODUCT_CODE", strProductCode);
        		this.gfnAddSendParameter("LANGUAGE_CODE", strLang);
        		this.gfnAddOutputDataset("dsSub", "dsOutput");
        		this.gfnCommonTransaction("SelectSub", "AL_DevLicenseMM_S02", this.grd_Sub);
        	}
        };

        this.fnSave = function()
        {
        	this.gfnAddSendParameter("YYYYMM", this.div_Search.form.div_Search_yyyyMM.getYYYYMM());
         	this.gfnCommonTransaction("Save",	"AL_DevLicenseMM_R01");
        };

        this.fnCallBack = function (strSvcId, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode<0) {
        		this.alert("["+nErrorCode+"] "+strErrorMsg);
        		return;
        	}
        	switch (strSvcId)
        	{
        		case "gfnGetCode":
        			this.div_Search.form.cb_Product.set_index(0);
        			this.div_Search.form.cb_Lnaguge.set_index(1);
        			this.fnSearch();
        			break;
        		case "Select":
        			if(this.dsMain.getRowCount()>0)
        				this.div_Search.form.btn_Save.set_enable(false);
        			else
        				this.div_Search.form.btn_Save.set_enable(true);
        			break;
        		case "Save":
        			this.fnSearch();
        			break;
        	}
        };

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.div_Search_btn_Search_onclick = function(obj,e)
        {
        	this.fnSearch();
        };

        this.dsMain_onrowposchanged = function(obj,e)
        {
        	var strYYYYMM = obj.getColumn(e.newrow, "YYYYMM");
        	var strProductCode = obj.getColumn(e.newrow, "PRODUCT_CODE");
        	var strLang = obj.getColumn(e.newrow, "LANGUAGE_CODE");
        	this.fnSearchSub(strYYYYMM, strProductCode, strLang)
        };

        this.div_Search_btn_Save_onclick = function(obj,e)
        {
        	this.fnSave();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.AL_DevLicenseMM_onload,this);
            this.div_Search.form.btn_Search.addEventHandler("onclick",this.div_Search_btn_Search_onclick,this);
            this.div_Search.form.btn_Save.addEventHandler("onclick",this.div_Search_btn_Save_onclick,this);
            this.div_Search.form.cb_Product.addEventHandler("onitemchanged",this.fnSearch,this);
            this.div_Search.form.cb_Lnaguge.addEventHandler("onitemchanged",this.fnSearch,this);
            this.dsMain.addEventHandler("onrowposchanged",this.dsMain_onrowposchanged,this);
        };
        this.loadIncludeScript("AL_DevLicenseMM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
