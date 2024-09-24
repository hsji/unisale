(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TS_StaffTechnicalReg");
            this.set_titletext("기술사항");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_CD_E_ROLE_EVAL", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcelImport", this);
            obj._setContents("<ColumnInfo><Column id=\"EPC_SEQ\" type=\"bigdecimal\" size=\"18\"/><Column id=\"EMP_NO\" type=\"string\" size=\"60\"/><Column id=\"PROJECT_NAME\" type=\"string\" size=\"100\"/><Column id=\"START_DATE\" type=\"datetime\" size=\"23\"/><Column id=\"END_DATE\" type=\"datetime\" size=\"23\"/><Column id=\"CLIENT_NAME\" type=\"string\" size=\"100\"/><Column id=\"COMPANY_NAME\" type=\"string\" size=\"100\"/><Column id=\"DOMAIN_INDUSTRY\" type=\"string\" size=\"1\"/><Column id=\"DOMAIN_APPLICATION\" type=\"string\" size=\"1\"/><Column id=\"ROLE_NAME\" type=\"string\" size=\"100\"/><Column id=\"MACHINE\" type=\"string\" size=\"100\"/><Column id=\"OS\" type=\"string\" size=\"100\"/><Column id=\"LANGUAGE\" type=\"string\" size=\"100\"/><Column id=\"DBMS\" type=\"string\" size=\"100\"/><Column id=\"TOOL\" type=\"string\" size=\"100\"/><Column id=\"COMMUNICATION\" type=\"string\" size=\"100\"/><Column id=\"REMARKS\" type=\"string\" size=\"32767\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new ExcelImportObject("ExcelImportObject", this);
            obj.getSetter("onerror").set("ExcelImportObject_onerror");
            obj.getSetter("onsuccess").set("ExcelImportObject_onsuccess");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_GbProjectCareer","0","163",null,"32","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_GroupBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ProjectCareer","0.00","171","134","23",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("프로젝트경력사항");
            obj.set_visible("true");
            obj.set_cssclass("sta_POP_GroupTit");
            obj.getSetter("TL_SEQ").set("2232");
            this.addChild(obj.name, obj);

            obj = new Button("btn_SpecialSkillMinus","528",null,"72","28",null,"109",null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Delete");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_ProjectCareer","0","196",null,null,"10","btn_SpecialSkillMinus:7",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsOutput4");
            obj.getSetter("scrollbars").set("alwaysvert");
            obj.set_autoenter("select");
            obj.getSetter("useinputpanel").set("false");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_visible("true");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"170\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"업무명\" displaytype=\"text\" edittype=\"text\" TL_SEQ=\"2233\"/><Cell col=\"1\" colspan=\"2\" displaytype=\"text\" edittype=\"text\" text=\"참여기간\" TL_SEQ=\"2234\"/><Cell col=\"3\" rowspan=\"2\" text=\"고객사\" TL_SEQ=\"32\"/><Cell col=\"4\" rowspan=\"2\" text=\"근무회사\" TL_SEQ=\"2235\"/><Cell col=\"5\" colspan=\"2\" text=\"개발분야\" TL_SEQ=\"2236\"/><Cell col=\"7\" rowspan=\"2\" text=\"역할\" TL_SEQ=\"75\"/><Cell col=\"8\" colspan=\"7\" text=\"개발환경\" TL_SEQ=\"2237\"/><Cell row=\"1\" col=\"1\" text=\"시작일\" TL_SEQ=\"38\"/><Cell row=\"1\" col=\"2\" text=\"종료일\" TL_SEQ=\"39\"/><Cell row=\"1\" col=\"5\" text=\"산업\" TL_SEQ=\"2238\"/><Cell row=\"1\" col=\"6\" text=\"응용\" TL_SEQ=\"2239\"/><Cell row=\"1\" col=\"8\" text=\"기종\" TL_SEQ=\"2240\"/><Cell row=\"1\" col=\"9\" text=\"OS\"/><Cell row=\"1\" col=\"10\" text=\"언어\" TL_SEQ=\"2241\"/><Cell row=\"1\" col=\"11\" text=\"DBMS\"/><Cell row=\"1\" col=\"12\" text=\"TOOL\"/><Cell row=\"1\" col=\"13\" text=\"통신\" TL_SEQ=\"2242\"/><Cell row=\"1\" col=\"14\" text=\"기타\" TL_SEQ=\"406\"/></Band><Band id=\"body\"><Cell edittype=\"text\" editautoselect=\"true\" text=\"bind:PROJECT_NAME\" textAlign=\"left\"/><Cell col=\"1\" edittype=\"date\" editautoselect=\"true\" editdisplay=\"edit\" text=\"bind:START_DATE\" calendardateformat=\"yyyy-MM-dd \" maskedittype=\"string\" maskeditformat=\"####-##-##\" displaytype=\"mask\"/><Cell col=\"2\" text=\"bind:END_DATE\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd \" maskedittype=\"string\" maskeditformat=\"####-##-##\" displaytype=\"mask\"/><Cell col=\"3\" text=\"bind:CLIENT_NAME\" edittype=\"text\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:COMPANY_NAME\" edittype=\"text\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:DOMAIN_INDUSTRY\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"6\" text=\"bind:DOMAIN_APPLICATION\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\" combodataset=\"ds_CD_OX\" combocodecol=\"CODE\" combodatacol=\"CODE\"/><Cell col=\"7\" text=\"bind:ROLE_NAME\" edittype=\"text\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:MACHINE\" edittype=\"text\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:OS\" edittype=\"text\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:LANGUAGE\" edittype=\"text\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:DBMS\" edittype=\"text\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:TOOL\" edittype=\"text\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:COMMUNICATION\" edittype=\"text\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:REMARKS\" edittype=\"text\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_StaffTechnicalReg1","466","35","157","124",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_detailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_GbEducation","627.00","4",null,"32","370",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_POP_GroupBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Education","627.00","12","134","23",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("교육");
            obj.set_visible("true");
            obj.set_cssclass("sta_POP_GroupTit");
            obj.getSetter("TL_SEQ").set("2060");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Role2","124","37","338","122",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsOutput7");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:CHK_SEL\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:PRODUCT_NAME\"/><Cell col=\"2\" text=\"bind:ROLE_EVAL\" displaytype=\"combocontrol\" combodataset=\"ds_CD_E_ROLE_EVAL\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" edittype=\"combo\"/><Cell col=\"3\" text=\"bind:ROLE_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chb_UnableToInput","475.00","133","83","18",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("투입불가");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.getSetter("TL_SEQ").set("2243");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ExcelExport",null,"167","76","24","515",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Excel ↓");
            obj.set_cssclass("btn_WF_Excel");
            obj.set_tooltiptext("Excel Export");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ExcelImport",null,"167","76","24","435",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Excel ↑");
            obj.set_cssclass("btn_WF_Excel");
            obj.set_tooltiptext("Excel Import");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Reset",null,"167","76","24","267",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("ReSet");
            obj.set_cssclass("btn_WF_tran");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Ext","610.00",null,"178","23",null,"107",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("특이사항");
            obj.set_cssclass("sta_POP_GroupTit");
            obj.getSetter("TL_SEQ").set("245");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_Ext","610",null,null,"93","10","13",null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Education","627","37",null,"122","10",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.getSetter("scrollbars").set("alwaysvert");
            obj.set_autoenter("select");
            obj.getSetter("useinputpanel").set("false");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_visible("true");
            obj.set_cellmovingtype("col");
            obj.set_binddataset("dsOutput6");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"200\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"교육명\" displaytype=\"text\" edittype=\"text\" TL_SEQ=\"2244\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" text=\"시작일\" TL_SEQ=\"38\"/><Cell col=\"2\" text=\"종료일\" TL_SEQ=\"39\"/><Cell col=\"3\" text=\"기관\" TL_SEQ=\"2245\"/></Band><Band id=\"body\"><Cell edittype=\"text\" editautoselect=\"true\" text=\"bind:EDU_NAME\"/><Cell col=\"1\" edittype=\"date\" editautoselect=\"true\" editdisplay=\"edit\" text=\"bind:START_DATE\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\"/><Cell col=\"2\" text=\"bind:END_DATE\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\"/><Cell col=\"3\" text=\"bind:INSTITUTION_NAME\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_SpecialSkill","0.00",null,"600","93",null,"13",null,null,null,null,this);
            obj.set_taborder("14");
            obj.getSetter("scrollbars").set("alwaysvert");
            obj.set_autoenter("select");
            obj.getSetter("useinputpanel").set("false");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_visible("true");
            obj.set_cellmovingtype("col");
            obj.set_binddataset("dsOutput5");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"116\"/><Column size=\"116\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"특수기술\" displaytype=\"text\" edittype=\"text\" TL_SEQ=\"2246\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" text=\"숙련도\" TL_SEQ=\"2247\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" editautoselect=\"true\" text=\"bind:SKILL_NAME\"/><Cell col=\"1\" edittype=\"text\" editautoselect=\"true\" editdisplay=\"edit\" text=\"bind:SKILL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_SpecialSkill","0.00",null,"178","23",null,"108",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("특수기술");
            obj.set_visible("true");
            obj.set_cssclass("sta_POP_GroupTit");
            obj.getSetter("TL_SEQ").set("2246");
            this.addChild(obj.name, obj);

            obj = new Static("stc_GbProjectCareer00","0","4","462","32",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_POP_GroupBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ProjectCareer00","0.00","12","111","23",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("역할 및 수준");
            obj.set_visible("true");
            obj.set_cssclass("sta_POP_GroupTit");
            obj.getSetter("TL_SEQ").set("2248");
            this.addChild(obj.name, obj);

            obj = new Static("stc_GbProjectCareer01","466","4","157","32",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_cssclass("sta_POP_GroupBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ProjectCareer01","474.00","12","62","23",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("선호지역");
            obj.set_visible("true");
            obj.set_cssclass("sta_POP_GroupTit");
            obj.getSetter("TL_SEQ").set("2249");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chb_type1","475","41","60","22",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("서울");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.getSetter("TL_SEQ").set("2250");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chb_type2","475","65","60","22",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("경기");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.getSetter("TL_SEQ").set("2251");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chb_type3","475","89","60","22",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("충청");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.getSetter("TL_SEQ").set("2252");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chb_type5","553.00","65","52","22",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("경상");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.getSetter("TL_SEQ").set("2253");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chb_type6","553.00","89","52","22",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("강원");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.getSetter("TL_SEQ").set("2254");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chb_type4","553.00","41","52","22",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("전라");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.getSetter("TL_SEQ").set("2255");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_EmpNo","-4","0","0","0",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("수정불가");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Role1","0","37","125","122",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_autofittype("col");
            obj.set_binddataset("dsOutput");
            obj.set_autoenter("select");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:ROLE_COMM_FLAG\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell col=\"1\" text=\"공통\" TL_SEQ=\"2256\"/><Cell row=\"1\" text=\"bind:ROLE_DEV_FLAG\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell row=\"1\" col=\"1\" text=\"개발\" TL_SEQ=\"700\"/><Cell row=\"2\" text=\"bind:ROLE_DESIGN_FLAG\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell row=\"2\" col=\"1\" text=\"디자인\" TL_SEQ=\"2257\"/><Cell row=\"3\" text=\"bind:ROLE_UIUX_FLAG\" edittype=\"checkbox\" displaytype=\"checkboxcontrol\"/><Cell row=\"3\" col=\"1\" text=\"UX\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ExcelTemplate",null,"167","84","24","347",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("Template");
            obj.set_cssclass("btn_WF_Excel");
            obj.set_tooltiptext("Excel Template");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_EducationMinus",null,"7","72","28","10",null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Delete");
            this.addChild(obj.name, obj);

            obj = new Button("btn_EducationPlus",null,"7","72","28","btn_EducationMinus:5",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Add");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ProjectCareerMinus",null,"165","72","28","10",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Delete");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ProjectCareerPlus",null,"165","72","28","btn_ProjectCareerMinus:5",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Add");
            this.addChild(obj.name, obj);

            obj = new Button("btn_SpecialSkillPlus",null,null,"72","28","btn_SpecialSkillMinus:5","109",null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Add");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1200,520,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","txt_Ext","value","dsOutput","REMARKS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","chb_type1","value","dsOutput","AREA_SE_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","chb_type2","value","dsOutput","AREA_GG_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","chb_type3","value","dsOutput","AREA_CC_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","chb_type4","value","dsOutput","AREA_JL_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","chb_type5","value","dsOutput","AREA_GS_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","chb_type6","value","dsOutput","AREA_GW_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","chb_UnableToInput","value","dsOutput","NON_INPUT_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edt_EmpNo","value","dsOutput","EMP_NO");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("TS_StaffTechnicalReg_copy1.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("TS_StaffTechnicalReg_copy1.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("TS_StaffTechnicalReg_copy1.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("TS_StaffTechnicalReg_copy1.xfdl","Script::CommGrid.xjs");
        this.registerScript("TS_StaffTechnicalReg_copy1.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 : 공통 - 공통
        * 02. 화면명   : 인력정보등록 (TS_StaffInfoSearch_S01,
        								TS_StaffInfoSearch_S02,
        								TS_StaffInfoSearch_S04,
        								TS_StaffInfoSearch_R01,
        								TS_StaffInfoSearch_R02)
        * 03. 화면설명 :
        * 04. 작성일   : 2018.09.17
        * 05. 작성자   : 안주환
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
        this.TS_StaffTechnicalReg_onload = function(obj,e)
        {
        	this.gfnCompInit(obj); //헤더클릭 이벤트 없을 시 사용
        	this.fnFormInit();
        	this.fnGetCode();
        };


        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.fnFormInit = function()
        {

        }

        this.fnGetCode = function()
        {
        	this.gfnAddCodeDataset("ds_CD_E_ROLE_EVAL"			,"E_ROLE_EVAL");

        	// 공통코드 조회
        	this.gfnCodeTransaction();
        };

        //Excel Export
        this.fn_export = function()
        {
        	var dsOutput = this._getDatasetObject("dsOutput");
        	var empname = dsOutput.getColumn(0, "EMP_NAME");
        	this.gfn_excelExport(this, this.grd_ProjectCareer, empname + "_프로젝트경력사항.xlsx");
        }

        //Excel Import
        this.fn_importExcel = function ()
        {
        	//alert("제공하는 Template을 이용하여 Excel Import 하세요");
        	this.dsExcelImport.clearData();
        	var strServiceURL = nexacro.getEnvironment().services["ServiceURL"].url;
        	this.ExcelImportObject.set_importurl(strServiceURL+"/xeni/XImport");
        	this.ExcelImportObject.importData("", "[command=getsheetdata;output=outDs;head=Sheet1!A1:Z1;body=Sheet1!A3]", "[dsExcelImport=outDs]");
        };

        //Excel Template
        this.fn_Template = function ()
        {
        	var strServiceURL = nexacro.getEnvironment().services["ServiceURL"].url;
        	this.wb_PostalSearch.set_url(strServiceURL+"NEXTp/Template/프로젝트경력사항_Template.xlsx");
        };


        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/


        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        this.comm_Click = function(obj, e)
        {
        	var dsOutput = this._getDatasetObject("dsOutput");
        	var empNo = dsOutput.getColumn(0, "EMP_NO");

        	switch(obj.name)
        	{
        		case "btn_EducationPlus" :
        			var ds = this.grd_Education.getBindDataset();
        			ds.setColumn(ds.addRow(), "EMP_NO", empNo);
        			break;
        		case "btn_EducationMinus" :
        			var ds = this.grd_Education.getBindDataset();
        			ds.deleteRow(ds.rowposition);
        			break;
        		case "btn_SpecialSkillPlus" :
        			var ds = this.grd_SpecialSkill.getBindDataset();
        			ds.setColumn(ds.addRow(), "EMP_NO", empNo);
        			break;
        		case "btn_SpecialSkillMinus" :
        			var ds = this.grd_SpecialSkill.getBindDataset();
        			ds.deleteRow(ds.rowposition);
        			break;
        		case "btn_ProjectCareerPlus" :
        			var ds = this.grd_ProjectCareer.getBindDataset();
        			var nRow = ds.insertRow(0);
        			ds.setColumn(nRow, "EMP_NO", empNo);
        			ds.setColumn(nRow, "DOMAIN_INDUSTRY", "0");
        			ds.setColumn(nRow, "DOMAIN_APPLICATION", "0");
        			break;
        		case "btn_ProjectCareerMinus" :
        			var ds = this.grd_ProjectCareer.getBindDataset();
        			ds.deleteRow(ds.rowposition);
        			break;
        		case "btn_Reset" :
        			var ds = this.grd_ProjectCareer.getBindDataset();
        			ds.deleteAll();
        			break;
        		case "btn_ExcelImport" :
        			this.fn_importExcel();
        			break;
        		case "btn_ExcelTemplate" :
        			this.fn_Template();
        			break;
        		case "btn_ExcelExport" :
        			this.fn_export();
        			break;btn_ExcelTemplate
         	}
        };

        this.grd_Role1_oncellclick = function(obj,e)
        {
        	var strValue;
        	var strColumn;
        	var ds1 = this.grd_Role1.getBindDataset();
        	var ds2 = this.grd_Role2.getBindDataset();

        	switch(e.subrow)
        	{
        		case 0:
        			strValue = "001";
        			strColumn = "ROLE_COMM_FLAG"
        			break;
        		case 1:
        			strValue = "002";
        			strColumn = "ROLE_DEV_FLAG"
        			break;
        		case 2:
        			strValue = "003";
        			strColumn = "ROLE_DESIGN_FLAG"
        			break;
        		case 3:
        			strValue = "004";
        			strColumn = "ROLE_UIUX_FLAG"
        			break;
        	}
        	ds2.filter("ROLE_CODE == '"+strValue+"'");

        	if(ds1.getColumn(0, strColumn)=="0" && obj.getCurEditType()=="checkbox")
        	{
        		if(this.confirm(this.gfnGetTransTxt(1754,"역할을 삭제 하시겠습니까?", "인력정보등록")))
        		{
        			for(var i = 0; i<ds2.rowcount; i++)
        			{
        				ds2.setColumn(i, "CHK_SEL", "0");
        				ds2.setColumn(i, "ROLE_EVAL", "");
        			}
        		}
        	}
        };

        this.ExcelImportObject_onerror = function(obj,e)
        {
        	this.alert( "Excel Import Error Type:["+ e.errortype + "] Error Msg:["+e.errormsg+"]");
        };

        this.ExcelImportObject_onsuccess = function(obj,e)
        {
        	var ObjDS = this.grd_ProjectCareer.getBindDataset();
        	var dsOutput = this._getDatasetObject("dsOutput");
        	var empNo = dsOutput.getColumn(0, "EMP_NO");

        	for(var i = 0; i<this.dsExcelImport.rowcount; i++)
        	{
        		var nToRow = ObjDS.addRow();
        		var strStartDate = this.regExp(this.dsExcelImport.getColumn(i,"START_DATE"));
        		var strEndDate = this.regExp(this.dsExcelImport.getColumn(i,"END_DATE"));
        		strStartDate = strStartDate.length==6 ? strStartDate+'01' : strStartDate;
        		strEndDate = strEndDate.length==6 ? strEndDate+'01' : strEndDate;
        		this.dsExcelImport.setColumn(i,"START_DATE",strStartDate);
        		this.dsExcelImport.setColumn(i,"END_DATE",strEndDate);

        		if(this.gfnIsEmpty(this.dsExcelImport.getColumn(i,"DOMAIN_INDUSTRY")))
        			this.dsExcelImport.setColumn(i,"DOMAIN_INDUSTRY",'0');
        		if(this.gfnIsEmpty(this.dsExcelImport.getColumn(i,"DOMAIN_APPLICATION")))
        			this.dsExcelImport.setColumn(i,"DOMAIN_APPLICATION",'0');
        		ObjDS.copyRow(nToRow, this.dsExcelImport, i);
        		var ret = ObjDS.setColumn(nToRow, "EMP_NO", empNo);
        	}
        	this.alert(this.gfnGetTransTxt(1586,"Excel Import Success !!\n 데이터 확인후 저장하세요."));
        };

        this.regExp = function(value){
        	var str = value;
        	var regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi
	if(regExp.test(str)){
        		var t = str.replace(regExp, "")
        		return t;
        	}else{
        		return str;
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TS_StaffTechnicalReg_onload,this);
            this.btn_SpecialSkillMinus.addEventHandler("onclick",this.divCmmnBtn_btnDel_onclick,this);
            this.btn_ExcelExport.addEventHandler("onclick",this.comm_Click,this);
            this.btn_ExcelImport.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Reset.addEventHandler("onclick",this.comm_Click,this);
            this.edt_EmpNo.addEventHandler("onkeydown",this.div_ClientList_edt_ClientName_onkeydown,this);
            this.grd_Role1.addEventHandler("oncellclick",this.grd_Role1_oncellclick,this);
            this.btn_ExcelTemplate.addEventHandler("onclick",this.comm_Click,this);
            this.btn_EducationMinus.addEventHandler("onclick",this.divCmmnBtn_btnDel_onclick,this);
            this.btn_EducationPlus.addEventHandler("onclick",this.divCmmnBtn_btnAdd_onclick,this);
            this.btn_ProjectCareerMinus.addEventHandler("onclick",this.divCmmnBtn_btnDel_onclick,this);
            this.btn_ProjectCareerPlus.addEventHandler("onclick",this.divCmmnBtn_btnAdd_onclick,this);
            this.btn_SpecialSkillPlus.addEventHandler("onclick",this.divCmmnBtn_btnAdd_onclick,this);
        };
        this.loadIncludeScript("TS_StaffTechnicalReg_copy1.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
