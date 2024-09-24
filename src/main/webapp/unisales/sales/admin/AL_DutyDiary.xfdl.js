(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AL_DutyDiary");
            this.set_titletext("당직일지");
            if (Form == this.constructor)
            {
                this._setFormPosition(1360,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMain", this);
            obj._setContents("<ColumnInfo><Column id=\"QL_SEQ\" type=\"int\" size=\"20\"/><Column id=\"INSERT_DATE\" type=\"string\" size=\"255\"/><Column id=\"INSERT_USER_NAME\" type=\"string\" size=\"255\"/><Column id=\"TEL_HP\" type=\"string\" size=\"255\"/><Column id=\"EMAIL\" type=\"string\" size=\"255\"/><Column id=\"TITLE\" type=\"string\" size=\"255\"/><Column id=\"MEMO\" type=\"string\" size=\"255\"/><Column id=\"REQ_CONTENTS_TEXT\" type=\"string\" size=\"255\"/><Column id=\"REQ_CONTENTS\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_CODE\" type=\"string\" size=\"255\"/><Column id=\"CLIENT_NAME\" type=\"string\" size=\"255\"/><Column id=\"PROJECT_NAME\" type=\"string\" size=\"255\"/><Column id=\"RES_CONTENTS_TEXT\" type=\"string\" size=\"255\"/><Column id=\"RES_CONTENTS\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS_CODE\" type=\"string\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProduct", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"255\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"255\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"CAPTION\">ALL</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CAPTION\">MIPLATFORM</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"CAPTION\">XPLATFORM</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"CAPTION\">Nexacro 14</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"CAPTION\">Nexacro 17</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"CAPTION\">Nexacro N</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Splitter("spt_Vertical","8","243",null,"10","8",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_min("200");
            obj.set_max("400");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Main","8","52",null,null,"8","spt_Vertical:4",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsMain");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"90\"/><Column size=\"380\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"60\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"번호\"/><Cell col=\"2\" text=\"고객사\"/><Cell col=\"3\" text=\"프로젝트\"/><Cell col=\"4\" text=\"고객명\"/><Cell col=\"5\" text=\"제목\"/><Cell col=\"6\" text=\"처리일자\"/><Cell col=\"7\" text=\"제품\"/><Cell col=\"8\" text=\"상태\"/><Cell col=\"9\" text=\"처리자\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:QL_SEQ\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:CLIENT_NAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PROJECT_NAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:INSERT_USER_NAME\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:SUBJECT\" textAlign=\"left\"/><Cell col=\"6\" displaytype=\"date\" text=\"bind:RESULT_DATE\" calendardateformat=\"yyyy-MM-dd ddd\" suppress=\"0\"/><Cell col=\"7\" text=\"bind:PRODUCT_NAME\" displaytype=\"normal\"/><Cell col=\"8\" text=\"bind:STATUS_NAME\" displaytype=\"normal\"/><Cell col=\"9\" text=\"bind:EMP_NAME\" textAlign=\"center\" suppress=\"0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("stc_Sales_List","8","spt_Vertical:0",null,null,"8","8",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_detailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_InsretUserName00","8","8","50","20",null,null,null,null,null,null,this.stc_Sales_List.form);
            obj.set_taborder("18");
            obj.set_text("번호");
            obj.set_textAlign("right");
            this.stc_Sales_List.addChild(obj.name, obj);

            obj = new Static("stc_ClientName","8","36","50","20",null,null,null,null,null,null,this.stc_Sales_List.form);
            obj.set_taborder("0");
            obj.set_text("고객사");
            obj.set_textAlign("right");
            this.stc_Sales_List.addChild(obj.name, obj);

            obj = new Edit("Edit00","stc_ClientName:8","36","306","20",null,null,null,null,null,null,this.stc_Sales_List.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.stc_Sales_List.addChild(obj.name, obj);

            obj = new Static("stc_ProjectName","Edit00:8","36","50","20",null,null,null,null,null,null,this.stc_Sales_List.form);
            obj.set_taborder("2");
            obj.set_text("프로젝트");
            obj.set_textAlign("right");
            this.stc_Sales_List.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","stc_ProjectName:8","36","306","20",null,null,null,null,null,null,this.stc_Sales_List.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.stc_Sales_List.addChild(obj.name, obj);

            obj = new Edit("edt_QL_SEQ","stc_InsretUserName00:8","8","120","20",null,null,null,null,null,null,this.stc_Sales_List.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            this.stc_Sales_List.addChild(obj.name, obj);

            obj = new Static("stc_InsretUserName00_00","edt_QL_SEQ:8","8","50","20",null,null,null,null,null,null,this.stc_Sales_List.form);
            obj.set_taborder("20");
            obj.set_text("처리자");
            obj.set_textAlign("right");
            this.stc_Sales_List.addChild(obj.name, obj);

            obj = new Edit("edt_EMP_NAME","stc_InsretUserName00_00:8","8","120","20",null,null,null,null,null,null,this.stc_Sales_List.form);
            obj.set_taborder("21");
            obj.set_readonly("true");
            this.stc_Sales_List.addChild(obj.name, obj);

            obj = new Static("stc_InsretUserName","edt_EMP_NAME:8","8","50","20",null,null,null,null,null,null,this.stc_Sales_List.form);
            obj.set_taborder("4");
            obj.set_text("고객명");
            obj.set_textAlign("right");
            this.stc_Sales_List.addChild(obj.name, obj);

            obj = new Edit("edt_INSERT_USER_NAME","stc_InsretUserName:8","8","120","20",null,null,null,null,null,null,this.stc_Sales_List.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.stc_Sales_List.addChild(obj.name, obj);

            obj = new Static("stc_Tel","edt_INSERT_USER_NAME:8","8","50","20",null,null,null,null,null,null,this.stc_Sales_List.form);
            obj.set_taborder("6");
            obj.set_text("연락처");
            obj.set_textAlign("right");
            this.stc_Sales_List.addChild(obj.name, obj);

            obj = new Edit("edt_TEL_HP","stc_Tel:8","8","120","20",null,null,null,null,null,null,this.stc_Sales_List.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.stc_Sales_List.addChild(obj.name, obj);

            obj = new Static("stc_Email","edt_TEL_HP:8","8","50","20",null,null,null,null,null,null,this.stc_Sales_List.form);
            obj.set_taborder("8");
            obj.set_text("이메일");
            obj.set_textAlign("right");
            this.stc_Sales_List.addChild(obj.name, obj);

            obj = new Edit("edt_EMAIL","stc_Email:8","8","200","20",null,null,null,null,null,null,this.stc_Sales_List.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            this.stc_Sales_List.addChild(obj.name, obj);

            obj = new Static("stc_Subject","8","64","50","20",null,null,null,null,null,null,this.stc_Sales_List.form);
            obj.set_taborder("10");
            obj.set_text("제목");
            obj.set_textAlign("right");
            this.stc_Sales_List.addChild(obj.name, obj);

            obj = new Edit("edt_SUBJECT","66","64",null,"20","50%",null,null,null,null,null,this.stc_Sales_List.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.stc_Sales_List.addChild(obj.name, obj);

            obj = new Static("stc_ReqContents","8","92","50","200",null,null,null,null,null,null,this.stc_Sales_List.form);
            obj.set_taborder("12");
            obj.set_text("내용");
            obj.set_textAlign("right");
            this.stc_Sales_List.addChild(obj.name, obj);

            obj = new WebBrowser("wb_REQ_CONTENTS","stc_ReqContents:8","92",null,null,"50.00%","16",null,null,null,null,this.stc_Sales_List.form);
            obj.set_taborder("22");
            this.stc_Sales_List.addChild(obj.name, obj);

            obj = new Static("stc_ResContents","wb_REQ_CONTENTS:8","141","50","152",null,null,null,null,null,null,this.stc_Sales_List.form);
            obj.set_taborder("13");
            obj.set_text("처리내용");
            obj.set_textAlign("right");
            this.stc_Sales_List.addChild(obj.name, obj);

            obj = new Static("stc_Product","Edit00_00:8","36","50","20",null,null,null,null,null,null,this.stc_Sales_List.form);
            obj.set_taborder("14");
            obj.set_text("제품");
            obj.set_textAlign("right");
            this.stc_Sales_List.addChild(obj.name, obj);

            obj = new Static("stc_Memo","wb_REQ_CONTENTS:8","64","50","69",null,null,null,null,null,null,this.stc_Sales_List.form);
            obj.set_taborder("15");
            obj.set_text("메모");
            obj.set_textAlign("right");
            this.stc_Sales_List.addChild(obj.name, obj);

            obj = new TextArea("txt_MEMO","stc_Memo:8","64",null,"69","8",null,null,null,null,null,this.stc_Sales_List.form);
            obj.set_taborder("16");
            obj.set_readonly("true");
            obj.set_wordWrap("char");
            this.stc_Sales_List.addChild(obj.name, obj);

            obj = new Edit("edt_PRODUCT_NAME","stc_Product:8","36","200","20",null,null,null,null,null,null,this.stc_Sales_List.form);
            obj.set_taborder("17");
            obj.getSetter("innerdataset").set("Ds_Product");
            obj.set_readonly("true");
            this.stc_Sales_List.addChild(obj.name, obj);

            obj = new WebBrowser("wb_ResContents","stc_ResContents:8","141",null,null,"8","16",null,null,null,null,this.stc_Sales_List.form);
            obj.set_taborder("23");
            this.stc_Sales_List.addChild(obj.name, obj);

            obj = new TextArea("txt_ResContents","stc_ResContents:8","141",null,null,"8","16",null,null,null,null,this.stc_Sales_List.form);
            obj.set_taborder("24");
            obj.set_visible("false");
            obj.set_readonly("true");
            obj.set_wordWrap("char");
            this.stc_Sales_List.addChild(obj.name, obj);

            obj = new TextArea("txt_REQ_CONTENTS","stc_ReqContents:8","92",null,null,"50.00%","16",null,null,null,null,this.stc_Sales_List.form);
            obj.set_taborder("25");
            obj.set_readonly("true");
            obj.set_visible("false");
            obj.set_wordWrap("char");
            this.stc_Sales_List.addChild(obj.name, obj);

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

            obj = new Static("stc_Year00","div_Search_yyyyMM:16","8","58","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("5");
            obj.set_text("제품");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.div_Search.addChild(obj.name, obj);

            obj = new Combo("cb_Product","stc_Year00:8","8","150","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("4");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_innerdataset("dsProduct");
            obj.set_text("ALL");
            obj.set_value("0");
            obj.set_index("0");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("stc_Count",null,"8","150","22","82",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("5");
            obj.set_textAlign("right");
            this.div_Search.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.spt_Vertical
            obj = new Layout("default","",0,0,this.spt_Vertical.form,function(p){});
            this.spt_Vertical.form.addLayout(obj.name, obj);

            //-- Default Layout : this.stc_Sales_List.form
            obj = new Layout("default","",0,0,this.stc_Sales_List.form,function(p){});
            this.stc_Sales_List.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_Search.form.div_Search_yyyyMM
            obj = new Layout("default","",0,0,this.div_Search.form.div_Search_yyyyMM.form,function(p){});
            this.div_Search.form.div_Search_yyyyMM.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_Search.form
            obj = new Layout("default","",0,0,this.div_Search.form,function(p){});
            this.div_Search.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1360,560,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","stc_Sales_List.form.Edit00","value","dsMain","CLIENT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Edit00_00","value","dsMain","PROJECT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Edit00_01","value","dsMain","INSERT_USER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Edit00_00_00","value","dsMain","TEL_HP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Edit00_00_01","value","dsMain","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Edit00_00_01_00","value","dsMain","SUBJECT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Edit00_01_00","value","dsMain","QL_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Edit00_01_00_00","value","dsMain","EMP_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","stc_Sales_List.form.Edit00_00","value","dsMain","PROJECT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","stc_Sales_List.form.edt_INSERT_USER_NAME","value","dsMain","INSERT_USER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","stc_Sales_List.form.edt_TEL_HP","value","dsMain","TEL_HP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","stc_Sales_List.form.edt_EMAIL","value","dsMain","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","stc_Sales_List.form.edt_SUBJECT","value","dsMain","SUBJECT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","stc_Sales_List.form.txt_MEMO","value","dsMain","MEMO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","stc_Sales_List.form.edt_PRODUCT_NAME","value","dsMain","PRODUCT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","stc_Sales_List.form.edt_QL_SEQ","value","dsMain","QL_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","stc_Sales_List.form.edt_EMP_NAME","value","dsMain","EMP_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","stc_Sales_List.form.txt_ResContents","value","dsMain","RES_CONTENTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","stc_Sales_List.form.txt_REQ_CONTENTS","value","dsMain","REQ_CONTENTS");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Common::COM_yyyyMM.xfdl");
        };
        
        // User Script
        this.addIncludeScript("AL_DutyDiary.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("AL_DutyDiary.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("AL_DutyDiary.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("AL_DutyDiary.xfdl","Script::CommGrid.xjs");
        this.addIncludeScript("AL_DutyDiary.xfdl","Script::ext_WebEditor.xjs");
        this.registerScript("AL_DutyDiary.xfdl", function() {
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
        this.executeIncludeScript("Script::ext_WebEditor.xjs"); /*include "Script::ext_WebEditor.xjs"*/
        /************************************************************************************************
        * 전역 변수 영역
        ************************************************************************************************/
        this.formLoadYn = true;	// load 여부
        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/
        this.AL_DutyDiary_onload = function(obj,e)
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

        	if(!this.commUtil.getFormAuthority(319,1))
        	{
        		this.stc_Sales_List.form.stc_Tel.set_visible(false);
        		this.stc_Sales_List.form.edt_TEL_HP.set_visible(false);
        		this.stc_Sales_List.form.stc_Email.set_visible(false);
        		this.stc_Sales_List.form.edt_EMAIL.set_visible(false);
        	}

        	var date = new Date();
        	var strMonth = this.gfnGetDateMaskFormatString(date, "yyyyMM");
        	this.div_Search.form.div_Search_yyyyMM.setYYYYMM(strMonth);

        	commWebEditor.gfnCreateWebEditor(this.stc_Sales_List.form.wb_REQ_CONTENTS, "reqContents", "V");
        	this.stc_Sales_List.form.wb_REQ_CONTENTS.show();

        	commWebEditor.gfnCreateWebEditor(this.stc_Sales_List.form.wb_ResContents, "resContents", "V");
        	this.stc_Sales_List.form.wb_ResContents.show();

        	//스플리터 초기화 함수 호출
        	this.spt_Vertical.set_type("vertical");

        	this.fnInitSpliter(this.spt_Vertical, this.spt_Vertical.type, this.spt_Vertical.min, this.spt_Vertical.max);

        	this.fnSearch();
        };

        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/

        this.fnSearch = function()
        {
        	this.gfnAddSendParameter("YYYYMM", this.div_Search.form.div_Search_yyyyMM.getYYYYMM());
        	this.gfnAddOutputDataset("dsMain", "dsOutput");
        	this.gfnCommonTransaction("Select", "AL_DutyDiary_S01", this.grd_Main, false);
        };

        this.fnTxtControl = function(sCurRow)
        {
        	if(sCurRow == -1)
        	{
        		this.stc_Sales_List.form.txt_REQ_CONTENTS.set_value("");
        		this.stc_Sales_List.form.txt_REQ_CONTENTS.set_visible(true);
        		this.stc_Sales_List.form.txt_ResContents.set_value("");
        		this.stc_Sales_List.form.txt_ResContents.set_visible(true);
        	}
        	else
        	{
        		strReqCont = this.dsMain.getColumn(sCurRow, "REQ_CONTENTS");
        		strReqContTxt = this.dsMain.getColumn(sCurRow, "REQ_CONTENTS_TEXT");
        		strResCont = this.dsMain.getColumn(sCurRow, "RES_CONTENTS");
        		strResContTxt = this.dsMain.getColumn(sCurRow, "RES_CONTENTS_TEXT");

        		if(strReqCont.trim() == strReqContTxt.trim())
        		{
        			this.stc_Sales_List.form.txt_REQ_CONTENTS.set_visible(true);
        		}
        		else
        		{
        			this.stc_Sales_List.form.txt_REQ_CONTENTS.set_visible(false);
        		}

        		if(strResCont.trim() == strResContTxt.trim())
        		{
        			this.stc_Sales_List.form.txt_ResContents.set_visible(true);
        		}
        		else
        		{
        			this.stc_Sales_List.form.txt_ResContents.set_visible(false);
        		}
        	}
        };

        this.fnSetContents = function(sCurRow, sContKind)
        {
        	var objReqWB = this.stc_Sales_List.form.wb_REQ_CONTENTS;
        	var objResWB = this.stc_Sales_List.form.wb_ResContents;

        	var sReqContents = "";
        	var sResContents = "";

        	if(sCurRow > -1) {
        		if(sContKind == "reqContents") {
        			sReqContents = this.dsMain.getColumn(sCurRow, "REQ_CONTENTS");
        			commWebEditor.gfnSetContents(objReqWB, sReqContents);
        		} else if(sContKind == "resContents") {
        			sResContents = this.dsMain.getColumn(sCurRow, "RES_CONTENTS");
        			commWebEditor.gfnSetContents(objResWB, sResContents);
        		}
        	}
        };

        this.fnCallBack = function (strSvcId, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode<0) {
        		this.alert("["+nErrorCode+"] "+strErrorMsg);
        		return
        	}
        	switch (strSvcId)
        	{
        		case "Select":
        			this.div_Search.form.stc_Count.set_text(this.dsMain.rowcount+" 건");
        			if(this.dsMain.rowcount == 0)
        			{
        				this.fnTxtControl(-1);
        			}

        			this.formLoadYn = false;
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

        this.div_Search_cb_Product_onitemchanged = function(obj,e)
        {
        	if( e.postindex == 0 ){
        		this.dsMain.filter("");
        	} else if( e.postindex == 1 ){
        		this.dsMain.filter("PRODUCT_CODE=='001'||PRODUCT_CODE=='002'||PRODUCT_CODE=='003'||PRODUCT_CODE=='004'||PRODUCT_CODE=='005'||PRODUCT_CODE=='006'||PRODUCT_CODE=='007'||PRODUCT_CODE=='008'||PRODUCT_CODE=='009'||PRODUCT_CODE=='017'||PRODUCT_CODE=='018'||PRODUCT_CODE=='028'||PRODUCT_CODE=='029'||PRODUCT_CODE=='030'||PRODUCT_CODE==null||PRODUCT_CODE==''||PRODUCT_CODE==' '");
        	} else if( e.postindex == 2 ){
        		this.dsMain.filter("PRODUCT_CODE=='010'||PRODUCT_CODE=='011'||PRODUCT_CODE=='012'||PRODUCT_CODE=='019'||PRODUCT_CODE=='020'||PRODUCT_CODE=='021'||PRODUCT_CODE=='022'||PRODUCT_CODE=='023'||PRODUCT_CODE=='031'||PRODUCT_CODE=='032'||PRODUCT_CODE=='033'");
        	} else if( e.postindex == 3 ){
        		this.dsMain.filter("PRODUCT_CODE=='024'||PRODUCT_CODE=='025'||PRODUCT_CODE=='026'||PRODUCT_CODE=='027'||PRODUCT_CODE=='034'");
        	} else if( e.postindex == 4 ){
        		this.dsMain.filter("PRODUCT_CODE=='039'");
        	} else if( e.postindex == 5 ){
        		this.dsMain.filter("PRODUCT_CODE=='043'");
        	}
        	this.dsMain.set_rowposition(0);
        	this.div_Search.form.stc_Count.set_text(this.dsMain.rowcount+" 건");
        };

        this.dsMain_onrowposchanged = function(obj,e)
        {
        	this.fnTxtControl(e.newrow);

        	var objReqWB = this.stc_Sales_List.form.wb_REQ_CONTENTS;
        	var objResWB = this.stc_Sales_List.form.wb_ResContents;

        	if(!this.formLoadYn) {
        		this.fnSetContents(e.newrow, "reqContents");
        		this.fnSetContents(e.newrow, "resContents");
        	}
        };

        this.fnInitSpliter = function(objSplitter, sDirection, nMin, nMax)
        {
        	//방향설정 정보 저장
        	objSplitter.direction = sDirection;

        	//최소값 저장
        	objSplitter.min = nMin;

        	//최대값 저장
        	objSplitter.max = nMax;

        	//방향설정에 따라 Cursor 형태 변경
        	if(sDirection=="horizontal")
        	{
        		objSplitter.set_cursor("e-resize");
        	}else
        	{
        		objSplitter.set_cursor("s-resize");
        	}

        	////Drag 이벤트 발생시 전달할 정보 오브젝트로 만들기
        	this.objSplitterDargChecker = 	{
        							"x" : 0, "y" : 0,
        							"dragFlag" : false,
        							"targetObj" : null,
        							"left" : 0,
        							"top" : 0
        						};

        	//마우스 왼쪽 버튼 클릭 이벤트 추가
        	objSplitter.addEventHandler("onlbuttondown", this.Splitter_onlbuttondown, this);

        	//마우스 왼쪽 버튼 클릭 해제 이벤트 추가
        	objSplitter.addEventHandler("onlbuttonup", this.Splitter_onlbuttonup, this);

        	//마우스 이동 이벤트 추가
        	this.addEventHandler("onmousemove", this.Splitter_onmousemove, this);
        };

         /**
         * @description 스플리터 onlbuttondown 처리내역
        */
        this.Splitter_onlbuttondown = function(obj,e)
        {
        	var objDrag = this.objSplitterDargChecker;

        	//Drag 여부값 설정(드래그 시작)
        	objDrag.dragFlag = true;

        	//클릭된 좌표값 설정
        	objDrag.x = e.screenx;
        	objDrag.y = e.screeny;

        	//현재 Splitter의 위치값 설정
        	objDrag.left = obj.getOffsetLeft();
        	objDrag.top = obj.getOffsetTop();

        	//클릭된 컴포넌트 설정
        	objDrag.targetObj = obj;
        };

         /**
         * @description 스플리터 onlbuttonup 처리내역
        */
        this.Splitter_onlbuttonup = function(obj,e)
        {
        	//Drag 여부값 설정(드래그 종료)
        	this.objSplitterDargChecker.dragFlag = false;
        };

         /**
         * @description 화면 onmoucemove시 처리내역
        */
        this.Splitter_onmousemove = function(obj,e)
        {
        	var nX, nX1, nX2;
        	var nY, nY1, nY2;
        	var nLeft, nTop;
        	var nMin, nMax;

        	//Drag 정보 오브젝트 가져오기
        	var objDrag = this.objSplitterDargChecker;

        	//현재 선택된 Splitter 컴포넌트 가져오기
        	var objDragComp = objDrag.targetObj;

        	//Drag 여부값이 시작 상태일 경우
        	if(objDrag.dragFlag==true)
        	{
        		//최소 위치값 가져오기
        		nMin = objDragComp.min;

        		//최대 위치값 가져오기
        		nMax = objDragComp.max;

        		//현재 Splitter 위치 값 가져오기
        		nLeft = objDrag.left;
        		nTop = objDrag.top;

        		//Drag 시작 X/Y좌표
        		nX1 = objDrag.x;
        		nY1 = objDrag.y;

        		//현재 X/Y좌표
        		nX2 = e.screenx;
        		nY2 = e.screeny;

        		//Splitter 방향 설정이 horizontal일 경우
        		if(objDragComp.direction=="horizontal")
        		{
        			//이동할 X좌표값  구하기
        			nX = nLeft + (nX2 - nX1);

        			//최소값보다 작을 경우 최소값으로 좌표 설정
        			if(nMin!=-1&&nX<nMin)nX = nMin;

        			//최대값보다 클 경우 최대값으로 좌표 설정
        			if(nMax!=-1&&nX>nMax)nX = nMax;


        			//Splitter Left 좌표값 변경
        			objDragComp.setOffsetLeft(nX);
        		}
        		//Splitter 방향 설정이 vertical일 경우
        		else
        		{
        			//이동할 Y좌표값  구하기
        			nY = nTop + (nY2 - nY1);

        			//최소값보다 작을 경우 최소값으로 좌표 설정
        			if(nMin!=-1&&nY<nMin)nY = nMin;

        			//최대값보다 클 경우 최대값으로 좌표 설정
        			if(nMax!=-1&&nY>nMax)nY = nMax;

        			//Splitter Top 좌표값 변경
        			objDragComp.setOffsetTop(nY);
        		}

        		//컴포넌트 위치 갱신을 위해 resetScroll 호출
        		this.resetScroll();
        	}
        };

        this.wb_onusernotify = function(obj,e)
        {
        	var curRow = this.dsMain.rowposition;

        	if(curRow > -1) {
        		if(e.userdata == "reqContents") {
        			this.fnSetContents(curRow, "reqContents");
        		} else if(e.userdata == "resContents") {
        			this.fnSetContents(curRow, "resContents");
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.AL_DutyDiary_onload,this);
            this.stc_Sales_List.form.wb_REQ_CONTENTS.addEventHandler("onusernotify",this.wb_onusernotify,this);
            this.stc_Sales_List.form.wb_ResContents.addEventHandler("onusernotify",this.wb_onusernotify,this);
            this.div_Search.form.btn_Search.addEventHandler("onclick",this.div_Search_btn_Search_onclick,this);
            this.div_Search.form.cb_Product.addEventHandler("onitemchanged",this.div_Search_cb_Product_onitemchanged,this);
            this.dsMain.addEventHandler("onrowposchanged",this.dsMain_onrowposchanged,this);
        };
        this.loadIncludeScript("AL_DutyDiary.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
