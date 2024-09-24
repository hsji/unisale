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
                this._setFormPosition(1274,506);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_APPOINT_TYPE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_GbProjectCareer","0","333",null,"32","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_GroupBg");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail",null,"48","450","330","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Static("staBg01","0","0",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","0","141","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("발령구분");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg02","0","66",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle02","0","66","141","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_text("발령그룹(본부)");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg03","0","99",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg04","0","132",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg05","0","165",null,"133","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg13","0","33",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle03","0","99","141","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_text("발령부서(팀)");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtDeptKorNm","145.00","104",null,"24","10",null,"300",null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_cssclass("essential");
            obj.set_maxlength("66");
            obj.set_imemode("hangul");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle04","0","132","141","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle05","0","165","141","133",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle13","0","33","141","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_text("발령일자");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Calendar("calDeptFrdt","145.00","38","141","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboDeptFlagCd00","145.00","5","141","24",null,null,null,"141",null,null,this.divDetail.form);
            obj.set_taborder("14");
            obj.set_cssclass("essential");
            obj.set_innerdataset("ds_APPOINT_TYPE");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_text("cbo00");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtDeptKorNm00","145.00","71",null,"24","10",null,"300",null,null,null,this.divDetail.form);
            obj.set_taborder("15");
            obj.set_cssclass("essential");
            obj.set_maxlength("66");
            obj.set_imemode("hangul");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboDeptFlagCd00_00","145.00","137","141","24",null,null,null,"141",null,null,this.divDetail.form);
            obj.set_taborder("16");
            obj.set_cssclass("essential");
            obj.set_innerdataset("ds_CD_GRADE_CODE");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_text("cbo00");
            this.divDetail.addChild(obj.name, obj);

            obj = new TextArea("txa00","145","171","300","121",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("17");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btn_Minus",null,"10","72","28","divDetail:10",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Delete");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Plus",null,"10","72","28","btn_Minus:5",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Add");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_ProjectCareer","10","btn_Plus:10",null,null,"divDetail:10","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsOutput9");
            obj.getSetter("scrollbars").set("alwaysvert");
            obj.set_autoenter("select");
            obj.getSetter("useinputpanel").set("false");
            obj.set_cellsizingtype("col");
            obj.set_visible("true");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj.set_autoupdatetype("comboselect");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"67\"/><Column size=\"105\"/><Column size=\"105\"/><Column size=\"203\"/><Column size=\"176\"/><Column size=\"122\"/><Column size=\"200\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No.\" displaytype=\"text\" edittype=\"text\" TL_SEQ=\"2233\"/><Cell col=\"1\" rowspan=\"2\" text=\"발령구분\" displaytype=\"text\" edittype=\"text\" TL_SEQ=\"2233\"/><Cell col=\"2\" rowspan=\"2\" text=\"발령일자\" displaytype=\"text\" edittype=\"text\" TL_SEQ=\"2233\"/><Cell col=\"3\" colspan=\"3\" displaytype=\"text\" edittype=\"text\" text=\"발령내용\" TL_SEQ=\"2234\"/><Cell col=\"6\" rowspan=\"2\" text=\"비고\" TL_SEQ=\"32\"/><Cell row=\"1\" col=\"3\" displaytype=\"text\" edittype=\"text\" text=\"본부\" TL_SEQ=\"2234\"/><Cell row=\"1\" col=\"4\" text=\"부서\"/><Cell row=\"1\" col=\"5\" text=\"직급\"/></Band><Band id=\"body\"><Cell edittype=\"text\" editautoselect=\"true\" textAlign=\"left\" expr=\"currow+1\"/><Cell col=\"1\" edittype=\"combo\" editautoselect=\"true\" textAlign=\"left\" text=\"bind:APPOINT_CD\" displaytype=\"combotext\" combodataset=\"ds_APPOINT_TYPE\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/><Cell col=\"2\" edittype=\"date\" editautoselect=\"true\" textAlign=\"left\" text=\"bind:APPOINT_DATE\" displaytype=\"date\"/><Cell col=\"3\" edittype=\"text\" editautoselect=\"true\" editdisplay=\"edit\" text=\"bind:GROUP_NAME\" calendardateformat=\"yyyy-MM-dd \" maskedittype=\"string\" maskeditformat=\"####-##-##\" displaytype=\"normal\"/><Cell col=\"4\" text=\"bind:TEAM_NAME\" edittype=\"text\" calendardateformat=\"yyyy-MM-dd \" maskedittype=\"string\" maskeditformat=\"####-##-##\" displaytype=\"normal\"/><Cell col=\"5\" text=\"bind:WKDT_CD\" edittype=\"combo\" calendardateformat=\"yyyy-MM-dd \" maskedittype=\"string\" maskeditformat=\"####-##-##\" displaytype=\"combotext\" combodataset=\"ds_CD_GRADE_CODE\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/><Cell col=\"6\" text=\"bind:REMARKS\" edittype=\"text\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1274,506,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divDetail.form.edtDeptCd","value","dsList","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divDetail.form.edtDeptKorNm","value","dsOutput9","TEAM_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divDetail.form.edtDeptEngNm","value","dsList","DEPT_ENGL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divDetail.form.edtDeptAbbrNm","value","dsList","DEPT_ABBR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divDetail.form.edtDeptEngAbbrNm","value","dsList","DEPT_ENGL_ABBR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divDetail.form.edtDeptShowNm","value","dsList","DEPT_SHOW_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divDetail.form.edtDeptSort","value","dsList","DEPT_ORDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divDetail.form.chkCyberYn","value","dsList","DEPT_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divDetail.form.cboDeptFlagCd","value","dsList","DEPT_FLAG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divDetail.form.edtDeptLvl","value","dsList","DEPT_LVL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divDetail.form.edtBefoDeptCd","value","dsList","BEFO_DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divDetail.form.calDeptFrdt","value","dsOutput9","APPOINT_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divDetail.form.calDeeptTodt","value","dsList","DEPT_TODT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divDetail.form.divDept.form.edtCode","value","dsList","HIPO_DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divDetail.form.divDept.form.edtName","value","dsList","HIPO_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divDetail.form.cboDeptFlagCd00","value","dsOutput9","APPOINT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divDetail.form.edtDeptKorNm00","value","dsOutput9","GROUP_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divDetail.form.cboDeptFlagCd00_00","value","dsOutput9","WKDT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divDetail.form.txa00","value","dsOutput9","REMARKS");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("TS_StaffAppointmentReg.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("TS_StaffAppointmentReg.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("TS_StaffAppointmentReg.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("TS_StaffAppointmentReg.xfdl","Script::CommGrid.xjs");
        this.registerScript("TS_StaffAppointmentReg.xfdl", function() {
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
        this.dsOutput9 = null;
        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/
        this.TS_StaffTechnicalReg_onload = function(obj,e)
        {
        	this.gfnCompInit(obj); //헤더클릭 이벤트 없을 시 사용
        	this.fnFormInit();
        	this.fnGetCode();

        	this.dsOutput = this.parent.parent.parent.dsOutput;
        	this.dsOutput9 = this.parent.parent.parent.dsOutput9;
        };


        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.fnFormInit = function()
        {

        }

        this.fnGetCode = function()
        {
        	this.gfnAddCodeDataset("ds_APPOINT_TYPE" 		,"APPOINT");

        	// 공통코드 조회
        	this.gfnCodeTransaction();
        };


        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/


        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        this.comm_Click = function(obj, e)
        {

        };

        this.btn_Plus_onclick = function(obj,e)
        {
        	var nRow = this.dsOutput9.addRow();
        	this.dsOutput9.setColumn(nRow, "COMPANY_CD", this.dsOutput.getColumn(0, "COMPANY_CD"));
        	this.dsOutput9.setColumn(nRow, "EMP_NO", this.dsOutput.getColumn(0, "EMP_NO"));
        };

        this.btn_Minus_onclick = function(obj,e)
        {
        	if(this.dsOutput9.rowposition < 0) return;
        	this.dsOutput9.deleteRow(this.dsOutput9.rowposition);
        };
        // 저장 validation
        this.fnValid = function ()
        {
        	for(var i=0,len=this.dsOutput9.rowcount;i<len;i++) {
        		if(this.dsOutput9.getRowType(i) == 2) {
        			if(this.gfnIsNull(this.dsOutput9.getColumn(i, "COMPANY_CD"))) {
        				this.dsOutput9.setColumn(nRow, "COMPANY_CD", this.dsOutput.getColumn(0, "COMPANY_CD"));
        			}
        			if(this.gfnIsNull(this.dsOutput9.getColumn(i, "EMP_NO"))) {
        				this.dsOutput9.setColumn(nRow, "EMP_NO", this.dsOutput.getColumn(0, "EMP_NO"));
        			}
        		}
        	}

        	// 정합성 체크
        	this.gfnClearValidation(this.dsOutput9);
        	this.gfnSetValidation(this.dsOutput9, "APPOINT_CD", "발령구분"	, "required");
        	this.gfnSetValidation(this.dsOutput9, "APPOINT_DATE", "발령일자"	, "required");
        	this.gfnSetValidation(this.dsOutput9, "GROUP_NAME", "발령본부(그룹)"	, "required");
        	this.gfnSetValidation(this.dsOutput9, "TEAM_NAME", "발령부서(팀)"	, "required");
        	this.gfnSetValidation(this.dsOutput9, "WKDT_CD", "직급"	, "required");

        	// Dataset의 변경된 Row Validation check
        	if (this.gfnValidation(this.dsOutput9, "U") == false) return false;

        	else return true;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TS_StaffTechnicalReg_onload,this);
            this.btn_Minus.addEventHandler("onclick",this.btn_Minus_onclick,this);
            this.btn_Plus.addEventHandler("onclick",this.btn_Plus_onclick,this);
        };
        this.loadIncludeScript("TS_StaffAppointmentReg.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
