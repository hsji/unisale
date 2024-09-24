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
                this._setFormPosition(1200,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_CD_E_ROLE_EVAL", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsExcelImport", this);
            obj._setContents("<ColumnInfo><Column id=\"EPC_SEQ\" type=\"bigdecimal\" size=\"18\"/><Column id=\"EMP_NO\" type=\"string\" size=\"60\"/><Column id=\"PROJECT_NAME\" type=\"string\" size=\"100\"/><Column id=\"START_DATE\" type=\"datetime\" size=\"23\"/><Column id=\"END_DATE\" type=\"datetime\" size=\"23\"/><Column id=\"CLIENT_NAME\" type=\"string\" size=\"100\"/><Column id=\"COMPANY_NAME\" type=\"string\" size=\"100\"/><Column id=\"DOMAIN_INDUSTRY\" type=\"string\" size=\"1\"/><Column id=\"DOMAIN_APPLICATION\" type=\"string\" size=\"1\"/><Column id=\"ROLE_NAME\" type=\"string\" size=\"100\"/><Column id=\"MACHINE\" type=\"string\" size=\"100\"/><Column id=\"OS\" type=\"string\" size=\"100\"/><Column id=\"LANGUAGE\" type=\"string\" size=\"100\"/><Column id=\"DBMS\" type=\"string\" size=\"100\"/><Column id=\"TOOL\" type=\"string\" size=\"100\"/><Column id=\"COMMUNICATION\" type=\"string\" size=\"100\"/><Column id=\"REMARKS\" type=\"string\" size=\"32767\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_PROJECT_ROLE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_PROJECT_LANG", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_PROJECT_DB", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new ExcelImportObject("ExcelImportObject", this);
            obj.getSetter("onerror").set("ExcelImportObject_onerror");
            obj.getSetter("onsuccess").set("ExcelImportObject_onsuccess");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_GbProjectCareer","0","7",null,"32","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_GroupBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ProjectCareer","10","10","134","23",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("프로젝트경력사항");
            obj.set_visible("true");
            obj.set_cssclass("sta_POP_GroupTit");
            obj.getSetter("TL_SEQ").set("2232");
            this.addChild(obj.name, obj);

            obj = new Button("btn_SpecialSkillMinus",null,null,"72","28","10","190",null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Delete");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_ProjectCareer","10","40",null,null,"10","224",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsOutput4");
            obj.getSetter("scrollbars").set("alwaysvert");
            obj.set_autoenter("select");
            obj.getSetter("useinputpanel").set("false");
            obj.set_cellsizingtype("col");
            obj.set_visible("true");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"217\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"266\"/><Column size=\"106\"/><Column size=\"93\"/><Column size=\"300\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"26\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"프로젝트명\" displaytype=\"text\" edittype=\"text\" TL_SEQ=\"2233\"/><Cell col=\"1\" colspan=\"2\" displaytype=\"text\" edittype=\"text\" text=\"참여기간\" TL_SEQ=\"2234\"/><Cell col=\"3\" rowspan=\"2\" text=\"고객사\" TL_SEQ=\"32\"/><Cell col=\"4\" rowspan=\"2\" text=\"근무회사\" TL_SEQ=\"2235\"/><Cell col=\"5\" rowspan=\"2\" text=\"역할\" TL_SEQ=\"75\"/><Cell col=\"6\" colspan=\"4\" text=\"개발환경\" TL_SEQ=\"2237\"/><Cell row=\"1\" col=\"1\" text=\"시작일\" TL_SEQ=\"38\"/><Cell row=\"1\" col=\"2\" text=\"종료일\" TL_SEQ=\"39\"/><Cell row=\"1\" col=\"6\" text=\"환경요약\" TL_SEQ=\"2240\"/><Cell row=\"1\" col=\"7\" text=\"언어\" TL_SEQ=\"2241\"/><Cell row=\"1\" col=\"8\" text=\"DBMS\"/><Cell row=\"1\" col=\"9\" text=\"기타\" TL_SEQ=\"406\"/></Band><Band id=\"body\"><Cell edittype=\"text\" editautoselect=\"true\" text=\"bind:PROJECT_NAME\" textAlign=\"left\"/><Cell col=\"1\" edittype=\"date\" editautoselect=\"true\" editdisplay=\"edit\" text=\"bind:START_DATE\" calendardateformat=\"yyyy-MM-dd \" maskedittype=\"string\" maskeditformat=\"####-##-##\" displaytype=\"date\"/><Cell col=\"2\" text=\"bind:END_DATE\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd \" maskedittype=\"string\" maskeditformat=\"####-##-##\" displaytype=\"date\"/><Cell col=\"3\" text=\"bind:CLIENT_NAME\" edittype=\"text\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:COMPANY_NAME\" edittype=\"text\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:ROLE_CODE\" edittype=\"combo\" textAlign=\"left\" displaytype=\"combotext\" combodataset=\"ds_PROJECT_ROLE\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/><Cell col=\"6\" text=\"bind:ENV\" edittype=\"text\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:PRLANGUAGE\" edittype=\"combo\" textAlign=\"left\" displaytype=\"combotext\" combodataset=\"ds_PROJECT_LANG\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/><Cell col=\"8\" text=\"bind:DBMS\" edittype=\"combo\" textAlign=\"left\" combodatacol=\"CAPTION\" combodataset=\"ds_PROJECT_DB\" combocodecol=\"CODE\" displaytype=\"combotext\"/><Cell col=\"9\" text=\"bind:REMARKS\" edittype=\"text\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Education","10",null,"134","23",null,"192",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("교육");
            obj.set_visible("true");
            obj.set_cssclass("sta_POP_GroupTit");
            obj.getSetter("TL_SEQ").set("2060");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ExcelExport",null,"11","76","24","515",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Excel ↓");
            obj.set_cssclass("btn_WF_Excel");
            obj.set_tooltiptext("Excel Export");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ExcelImport",null,"11","76","24","435",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Excel ↑");
            obj.set_cssclass("btn_WF_Excel");
            obj.set_tooltiptext("Excel Import");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Reset",null,"11","76","24","267",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("ReSet");
            obj.set_cssclass("btn_WF_tran");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Ext","10",null,"178","23",null,"53",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("특이사항");
            obj.set_cssclass("sta_POP_GroupTit");
            obj.getSetter("TL_SEQ").set("245");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_Ext","10",null,null,"43","10","5",null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_SpecialSkill",null,null,"560","107","10","80",null,null,null,null,this);
            obj.set_taborder("10");
            obj.getSetter("scrollbars").set("alwaysvert");
            obj.set_autoenter("select");
            obj.getSetter("useinputpanel").set("false");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_visible("true");
            obj.set_cellmovingtype("col");
            obj.set_binddataset("dsOutput5");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"424\"/><Column size=\"134\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"특수기술\" displaytype=\"text\" edittype=\"text\" TL_SEQ=\"2246\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" text=\"숙련도\" TL_SEQ=\"2247\"/></Band><Band id=\"body\"><Cell edittype=\"normal\" editautoselect=\"true\" text=\"bind:SKILL_NAME\"/><Cell col=\"1\" edittype=\"combo\" editautoselect=\"true\" editdisplay=\"edit\" text=\"bind:SKILL\" combodataset=\"ds_CD_LEVEL_CODE\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" displaytype=\"combotext\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Education","10",null,null,"107","grd_SpecialSkill:10","80",null,null,null,null,this);
            obj.set_taborder("9");
            obj.getSetter("scrollbars").set("alwaysvert");
            obj.set_autoenter("select");
            obj.getSetter("useinputpanel").set("false");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_visible("true");
            obj.set_cellmovingtype("col");
            obj.set_binddataset("dsOutput6");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"224\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"223\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"교육명\" displaytype=\"text\" edittype=\"text\" TL_SEQ=\"2244\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" text=\"시작일\" TL_SEQ=\"38\"/><Cell col=\"2\" text=\"종료일\" TL_SEQ=\"39\"/><Cell col=\"3\" text=\"기관\" TL_SEQ=\"2245\"/></Band><Band id=\"body\"><Cell edittype=\"text\" editautoselect=\"true\" text=\"bind:EDU_NAME\"/><Cell col=\"1\" edittype=\"date\" editautoselect=\"true\" editdisplay=\"edit\" text=\"bind:START_DATE\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\"/><Cell col=\"2\" text=\"bind:END_DATE\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\"/><Cell col=\"3\" text=\"bind:INSTITUTION_NAME\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_SpecialSkill",null,null,"178","23","392","192",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("특수기술");
            obj.set_visible("true");
            obj.set_cssclass("sta_POP_GroupTit");
            obj.getSetter("TL_SEQ").set("2246");
            this.addChild(obj.name, obj);

            obj = new Static("stc_GbProjectCareer01","466","4","157","32",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_POP_GroupBg");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_EmpNo","-4","0","0","0",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("수정불가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ExcelTemplate",null,"11","84","24","347",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Template");
            obj.set_cssclass("btn_WF_Excel");
            obj.set_tooltiptext("Excel Template");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_EducationMinus",null,null,"72","28","grd_SpecialSkill:10","190",null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Delete");
            this.addChild(obj.name, obj);

            obj = new Button("btn_EducationPlus",null,null,"72","28","btn_EducationMinus:5","190",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Add");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ProjectCareerMinus",null,"9","72","28","10",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Delete");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ProjectCareerPlus",null,"9","72","28","btn_ProjectCareerMinus:5",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Add");
            this.addChild(obj.name, obj);

            obj = new Button("btn_SpecialSkillPlus",null,null,"72","28","btn_SpecialSkillMinus:5","190",null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Add");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1200,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","txt_Ext","value","dsOutput","REMARKS");
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
        this.addIncludeScript("TS_StaffTechnicalReg.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("TS_StaffTechnicalReg.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("TS_StaffTechnicalReg.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("TS_StaffTechnicalReg.xfdl","Script::CommGrid.xjs");
        this.registerScript("TS_StaffTechnicalReg.xfdl", function() {
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
        this.dsOutput = null;
        this.dsOutput4 = null;
        this.dsOutput5 = null;
        this.dsOutput6 = null;
        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/
        this.TS_StaffTechnicalReg_onload = function(obj,e)
        {
        	this.gfnCompInit(obj); //헤더클릭 이벤트 없을 시 사용
        	this.fnFormInit();
        	this.fnGetCode();

        	this.dsOutput = this.parent.parent.parent.dsOutput;
        	this.dsOutput4 = this.parent.parent.parent.dsOutput4;
        	this.dsOutput5 = this.parent.parent.parent.dsOutput5;
        	this.dsOutput6 = this.parent.parent.parent.dsOutput6;
        };


        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.fnFormInit = function()
        {

        }

        this.fnGetCode = function()
        {
        	this.gfnAddCodeDataset("ds_PROJECT_ROLE"			,"PROJECTROLE");	// 역할
        	this.gfnAddCodeDataset("ds_PROJECT_LANG"			,"PROJECTLANG");
        	this.gfnAddCodeDataset("ds_PROJECT_DB"				,"PROJECTDB");


        	// 공통코드 조회
        	this.gfnCodeTransaction();
        };

        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/


        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        // 프로젝트경력추가
        this.btn_ProjectCareerPlus_onclick = function(obj,e)
        {
        	var nRow = this.dsOutput4.addRow();
        	this.dsOutput4.setColumn(nRow, "COMPANY_CD", this.dsOutput.getColumn(0, "COMPANY_CD"));
        	this.dsOutput4.setColumn(nRow, "EMP_NO", this.dsOutput.getColumn(0, "EMP_NO"));
        };
        // 프로젝트경력삭제
        this.btn_ProjectCareerMinus_onclick = function(obj,e)
        {
        	if(this.dsOutput4.rowposition < 0) return;
        	this.dsOutput4.deleteRow(this.dsOutput4.rowposition);
        };
        // 교육추가
        this.btn_EducationPlus_onclick = function(obj,e)
        {
        	var nRow = this.dsOutput6.addRow();
        	this.dsOutput6.setColumn(nRow, "COMPANY_CD", this.dsOutput.getColumn(0, "COMPANY_CD"));
        	this.dsOutput6.setColumn(nRow, "EMP_NO", this.dsOutput.getColumn(0, "EMP_NO"));
        };
        // 교육삭제
        this.btn_EducationMinus_onclick = function(obj,e)
        {
        	if(this.dsOutput6.rowposition < 0) return;
        	this.dsOutput6.deleteRow(this.dsOutput6.rowposition);
        };
        //특수기술추가
        this.btn_SpecialSkillPlus_onclick = function(obj,e)
        {
        	var nRow = this.dsOutput5.addRow();
        	this.dsOutput5.setColumn(nRow, "COMPANY_CD", this.dsOutput.getColumn(0, "COMPANY_CD"));
        	this.dsOutput5.setColumn(nRow, "EMP_NO", this.dsOutput.getColumn(0, "EMP_NO"));
        };
        //특수기술삭제
        this.btn_SpecialSkillMinus_onclick = function(obj,e)
        {
        	if(this.dsOutput5.rowposition < 0) return;
        	this.dsOutput5.deleteRow(this.dsOutput5.rowposition);
        };

        // 저장 validation
        this.fnValid = function ()
        {
        	for(var i=0,len=this.dsOutput4.rowcount;i<len;i++) {
        		if(this.dsOutput4.getRowType(i) == 2) {
        			if(this.gfnIsNull(this.dsOutput4.getColumn(i, "COMPANY_CD"))) {
        				this.dsOutput4.setColumn(nRow, "COMPANY_CD", this.dsOutput.getColumn(0, "COMPANY_CD"));
        			}
        			if(this.gfnIsNull(this.dsOutput4.getColumn(i, "EMP_NO"))) {
        				this.dsOutput4.setColumn(nRow, "EMP_NO", this.dsOutput.getColumn(0, "EMP_NO"));
        			}
        		}
        	}
        	for(var i=0,len=this.dsOutput5.rowcount;i<len;i++) {
        		if(this.dsOutput5.getRowType(i) == 2) {
        			if(this.gfnIsNull(this.dsOutput5.getColumn(i, "COMPANY_CD"))) {
        				this.dsOutput5.setColumn(nRow, "COMPANY_CD", this.dsOutput.getColumn(0, "COMPANY_CD"));
        			}
        			if(this.gfnIsNull(this.dsOutput5.getColumn(i, "EMP_NO"))) {
        				this.dsOutput5.setColumn(nRow, "EMP_NO", this.dsOutput.getColumn(0, "EMP_NO"));
        			}
        		}
        	}
        	for(var i=0,len=this.dsOutput6.rowcount;i<len;i++) {
        		if(this.dsOutput6.getRowType(i) == 2) {
        			if(this.gfnIsNull(this.dsOutput6.getColumn(i, "COMPANY_CD"))) {
        				this.dsOutput6.setColumn(nRow, "COMPANY_CD", this.dsOutput.getColumn(0, "COMPANY_CD"));
        			}
        			if(this.gfnIsNull(this.dsOutput6.getColumn(i, "EMP_NO"))) {
        				this.dsOutput6.setColumn(nRow, "EMP_NO", this.dsOutput.getColumn(0, "EMP_NO"));
        			}
        		}
        	}
        	// 정합성 체크
        	this.gfnClearValidation(this.dsOutput4);
        	this.gfnSetValidation(this.dsOutput4, "PROJECT_NAME", "프로젝트명"	, "required");
        	this.gfnSetValidation(this.dsOutput4, "START_DATE", "프로젝트 시작일"	, "required");
        	this.gfnSetValidation(this.dsOutput4, "END_DATE", "프로젝트 종료일"	, "required");
        	this.gfnSetValidation(this.dsOutput4, "CLIENT_NAME", "고객명"	, "required");
        	this.gfnSetValidation(this.dsOutput4, "COMPANY_NAME", "근무회사"	, "required");
        	this.gfnSetValidation(this.dsOutput4, "ROLE_CODE", "역할"	, "required");
        	this.gfnSetValidation(this.dsOutput4, "ENV", "환경요약"	, "required");

        	// Dataset의 변경된 Row Validation check
        	if (this.gfnValidation(this.dsOutput4, "U") == false) return false;

        	this.gfnClearValidation(this.dsOutput5);
        	this.gfnSetValidation(this.dsOutput5, "SKILL_NAME", "특수기술명"	, "required");
        	this.gfnSetValidation(this.dsOutput5, "SKILL", "기술수준"	, "required");

        	// Dataset의 변경된 Row Validation check
        	if (this.gfnValidation(this.dsOutput5, "U") == false) return false;

        	this.gfnClearValidation(this.dsOutput6);
        	this.gfnSetValidation(this.dsOutput6, "EDU_NAME", "교육명"	, "required");
        	this.gfnSetValidation(this.dsOutput6, "START_DATE", "교육시작일"	, "required");
        	this.gfnSetValidation(this.dsOutput6, "END_DATE", "교육종료일"	, "required");
        	this.gfnSetValidation(this.dsOutput6, "INSTITUTION_NAME", "교육기관"	, "required");

        	// Dataset의 변경된 Row Validation check
        	if (this.gfnValidation(this.dsOutput6, "U") == false) return false;

        	else return true;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TS_StaffTechnicalReg_onload,this);
            this.btn_SpecialSkillMinus.addEventHandler("onclick",this.btn_SpecialSkillMinus_onclick,this);
            this.btn_ExcelExport.addEventHandler("onclick",this.comm_Click,this);
            this.btn_ExcelImport.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Reset.addEventHandler("onclick",this.comm_Click,this);
            this.edt_EmpNo.addEventHandler("onkeydown",this.div_ClientList_edt_ClientName_onkeydown,this);
            this.btn_ExcelTemplate.addEventHandler("onclick",this.comm_Click,this);
            this.btn_EducationMinus.addEventHandler("onclick",this.btn_EducationMinus_onclick,this);
            this.btn_EducationPlus.addEventHandler("onclick",this.btn_EducationPlus_onclick,this);
            this.btn_ProjectCareerMinus.addEventHandler("onclick",this.btn_ProjectCareerMinus_onclick,this);
            this.btn_ProjectCareerPlus.addEventHandler("onclick",this.btn_ProjectCareerPlus_onclick,this);
            this.btn_SpecialSkillPlus.addEventHandler("onclick",this.btn_SpecialSkillPlus_onclick,this);
        };
        this.loadIncludeScript("TS_StaffTechnicalReg.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
