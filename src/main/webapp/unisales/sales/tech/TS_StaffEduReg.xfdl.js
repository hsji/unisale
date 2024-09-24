(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TS_StaffInfoReg");
            this.set_titletext("인력기본정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,530);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_CD_LAST_SCHOOL_CAREER", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_LEVEL_CODE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_LICENSE_TYPE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_ResultGrade","0","21","99","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("최종학력");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.getSetter("TL_SEQ").set("2200");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_ResultGrade","stc_ResultGrade:10","21","128","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_CD_LAST_SCHOOL_CAREER");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_GBAttachment00",null,null,"506","29","0","24",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_POP_GroupBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_GbEducationInfo","30","48",null,"32","480",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_POP_GroupBg");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_EducationInfo","20.00","64",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsOutput2");
            obj.getSetter("scrollbars").set("alwaysvert");
            obj.set_autoenter("select");
            obj.getSetter("useinputpanel").set("false");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_visible("true");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"20\"/><Column size=\"80\"/><Column size=\"165\"/><Column size=\"212\"/><Column size=\"80\"/><Column size=\"250\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell colspan=\"3\" text=\"기간\" displaytype=\"text\" edittype=\"text\" TL_SEQ=\"28\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" text=\"학교명\" TL_SEQ=\"2222\"/><Cell col=\"4\" text=\"과명\" TL_SEQ=\"2223\"/><Cell col=\"5\" text=\"졸업,수료\" TL_SEQ=\"2224\"/><Cell col=\"6\" text=\"소재지\" TL_SEQ=\"2225\"/></Band><Band id=\"body\"><Cell edittype=\"date\" editautoselect=\"true\" text=\"bind:START_DATE\" displaytype=\"date\" maskedittype=\"string\" maskeditformat=\"####-##-##\"/><Cell col=\"1\" text=\"~\"/><Cell col=\"2\" text=\"bind:END_DATE\" displaytype=\"date\" edittype=\"date\" maskedittype=\"string\" maskeditformat=\"####-##-##\"/><Cell col=\"3\" edittype=\"text\" editautoselect=\"true\" editdisplay=\"edit\" text=\"bind:SCHOOL_NAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:SUBJECT_NAME\" edittype=\"text\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:GRADUATE_FLAG\" displaytype=\"combotext\" combodataset=\"ds_CD_GRADUATION_FLAG\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" edittype=\"combo\" TL_FLAG=\"1\"/><Cell col=\"6\" text=\"bind:PLACE_NAME\" edittype=\"text\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ResultGrade00","cmb_ResultGrade:10","21","103","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("졸업증명서");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.getSetter("TL_SEQ").set("2200");
            this.addChild(obj.name, obj);

            obj = new Div("div_Attachment00_00","stc_ResultGrade00:10.00","21","440","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_async("false");
            obj.getSetter("SOURCE_CD").set("EI");
            obj.getSetter("SOURCE_SEQ").set("EMP_NO");
            obj.getSetter("USE_NEXT_FILE_TYPE").set("false");
            obj.getSetter("USE_LINK_TYPE").set("false");
            obj.getSetter("USE_MULTI_FILE").set("false");
            obj.getSetter("USE_OPEN_ADD_DIALOG").set("false");
            obj.getSetter("USE_DELETE_ALL").set("false");
            obj.getSetter("USE_BUTTON_ONLY").set("false");
            obj.getSetter("STATUS_CD").set("GRADUATION");
            obj.getSetter("BINDDATASET").set("dsOutput");
            obj.set_url("sales::comm/COM_Attachment.xfdl");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_EducationMinus",null,"20","72","28","20",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Delete");
            this.addChild(obj.name, obj);

            obj = new Button("btn_EducationPlus",null,"20","72","28","btn_EducationMinus:5",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Add");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_Attachment00_00
            obj = new Layout("default","",0,0,this.div_Attachment00_00.form,function(p){});
            this.div_Attachment00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1200,530,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item19","cmb_ResultGrade","value","dsOutput","EDU_LEVEL_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edt_Address2","value","dsOutput","DETAIL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divDetail.form.edtUserNmEng","value","dsList","ENGL_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","sales::comm/COM_Attachment.xfdl");
        };
        
        // User Script
        this.addIncludeScript("TS_StaffEduReg.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("TS_StaffEduReg.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("TS_StaffEduReg.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("TS_StaffEduReg.xfdl","Script::CommGrid.xjs");
        this.registerScript("TS_StaffEduReg.xfdl", function() {
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
        this.arrCompanyExceptList = ["TOBE"];	//선택되면 안되는 회사 목록 추려야함 ingyu 20181015
        this.dsOutput = null;
        this.dsOutput2 = null;

        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/
        this.TS_StaffInfoReg_onload = function(obj,e)
        {
        	this.gfnCompInit(obj); //헤더클릭 이벤트 없을 시 사용
        	this.fnGetCode();

        	this.dsOutput = this.parent.parent.parent.dsOutput;
        	this.dsOutput2 = this.parent.parent.parent.dsOutput2;
        };

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.fnGetCode = function()
        {
        // 	this.gfnAddCodeDataset("ds_CD_GRADE_CODE"			,"CM0002");
        // 	this.gfnAddCodeDataset("ds_CD_DUTY_CODE"			,"CM0003");
        // 	this.gfnAddCodeDataset("ds_CD_HOLD_OFFICE"			,"CM0009");
        	this.gfnAddCodeDataset("ds_CD_LEVEL_CODE" 			,"LEVEL_CODE");
        	this.gfnAddCodeDataset("ds_CD_LAST_SCHOOL_CAREER"	,"SCOOLCAREER");
        	this.gfnAddCodeDataset("ds_CD_LICENSE_TYPE" 		,"FILE_EL");

        	// 공통코드 조회
        	this.gfnCodeTransaction();
        };

        this.fnsetEditReadonly = function(bRead)
        {
        	this.gfnCompDisable(this.div_EmpInfo.form, bRead);
        };

        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/

        this.fnGetEmpCode = function()
        {
        // 	var dsOutput = this._getDatasetObject("dsOutput"); //parent의 Dataset에 접근하기 위해 사용한다.
        //
        // 	this.gfnAddSendParameter("CO_CD", dsOutput.getColumn(0, "CO_CD"));
        //
        // 	this.gfnAddOutputDataset("dsEmpNo", "dsNewEmpNo");
        // 	this.gfnCommonTransaction("fnGetEmpCode", "TS_StaffInfoSearch_S04");
        };

        // 화면 콜백
        this.fnCallBack = function(strSvcID, nErrorCode, strErrorMag)
        {
        	// 에러 예외처리
        	if(nErrorCode != 0)
        	{
        		//alert("strSvcID : " + strSvcID + "\n" + "nErrorCode : " + nErrorCode + "\n" + "strErrorMag : " + strErrorMag);
        		return;
        	}
        	else
        	{
        		if(strSvcID == "gfnGetCode")
        		{

        		}
        		else if(strSvcID == "fnGetEmpCode")
        		{
        		}
        	}
        };

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.comm_Click = function(obj,e)
        {
        };

        // 추가
        this.btn_EducationPlus_onclick = function(obj,e)
        {
        	var nRow = this.dsOutput2.addRow();
        	this.dsOutput2.setColumn(nRow, "COMPANY_CD", this.dsOutput.getColumn(0, "COMPANY_CD"));
        	this.dsOutput2.setColumn(nRow, "EMP_NO", this.dsOutput.getColumn(0, "EMP_NO"));
        };

        // 삭제
        this.btn_EducationMinus_onclick = function(obj,e)
        {
        	if(this.dsOutput2.rowposition < 0) return;
        	this.dsOutput2.deleteRow(this.dsOutput2.rowposition);
        };
        // 저장 validation
        this.fnValid = function ()
        {
        	for(var i=0,len=this.dsOutput2.rowcount;i<len;i++) {
        		if(this.dsOutput2.getRowType(i) == 2) {
        			if(this.gfnIsNull(this.dsOutput2.getColumn(i, "COMPANY_CD"))) {
        				this.dsOutput2.setColumn(nRow, "COMPANY_CD", this.dsOutput.getColumn(0, "COMPANY_CD"));
        			}
        			if(this.gfnIsNull(this.dsOutput2.getColumn(i, "EMP_NO"))) {
        				this.dsOutput2.setColumn(nRow, "EMP_NO", this.dsOutput.getColumn(0, "EMP_NO"));
        			}
        		}
        	}

        	// 정합성 체크
        	this.gfnClearValidation(this.dsOutput2);
        	this.gfnSetValidation(this.dsOutput2, "START_DATE", "입학일자"	, "required");
        	this.gfnSetValidation(this.dsOutput2, "END_DATE", "졸업(수료)일자"	, "required");
        	this.gfnSetValidation(this.dsOutput2, "SCHOOL_NAME", "학교명"	, "required");
        	this.gfnSetValidation(this.dsOutput2, "SUBJECT_NAME", "과명"	, "required");
        	this.gfnSetValidation(this.dsOutput2, "GRADUATE_FLAG", "졸업여부"	, "required");

        	// Dataset의 변경된 Row Validation check
        	if (this.gfnValidation(this.dsOutput2, "U") == false) return false;
        	else return true;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TS_StaffInfoReg_onload,this);
            this.btn_EducationMinus.addEventHandler("onclick",this.btn_EducationMinus_onclick,this);
            this.btn_EducationPlus.addEventHandler("onclick",this.btn_EducationPlus_onclick,this);
        };
        this.loadIncludeScript("TS_StaffEduReg.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
