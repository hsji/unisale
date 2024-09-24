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
                this._setFormPosition(1200,506);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new FileDownTransfer("fdtFile", this);
            obj.set_url("svcUrl::fileDownload.do");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_HireDate","0","20","103","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("경력시작일");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.getSetter("TL_SEQ").set("2199");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_HireDate","stc_HireDate:0","20","108","22",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy-MM-dd ");
            this.addChild(obj.name, obj);

            obj = new Static("stc_HireDateCount","cal_HireDate:10.00","20","90","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("경력일수");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.getSetter("TL_SEQ").set("2201");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_HireDateCount","stc_HireDateCount:10","20","108","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Div("divCareerInfo","14","44","57.833333333333336%",null,null,"10",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","0","179","43",null,null,null,null,null,null,this.divCareerInfo.form);
            obj.set_taborder("0");
            obj.set_text("경력사항");
            obj.set_cssclass("sta_WF_Title");
            this.divCareerInfo.addChild(obj.name, obj);

            obj = new Grid("grd_CareerInfo","3","staTitle01:0",null,null,"0","0",null,null,null,null,this.divCareerInfo.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsOutput3");
            obj.getSetter("scrollbars").set("alwaysvert");
            obj.set_autoenter("select");
            obj.getSetter("useinputpanel").set("false");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_visible("true");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"20\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"200\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell colspan=\"3\" text=\"재직기간\" displaytype=\"text\" edittype=\"text\" TL_SEQ=\"2227\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" text=\"재직회사\" TL_SEQ=\"2228\"/><Cell col=\"4\" text=\"직위\" TL_SEQ=\"2229\"/><Cell col=\"5\" text=\"담당업무\" TL_SEQ=\"2230\"/></Band><Band id=\"body\"><Cell edittype=\"date\" editautoselect=\"true\" text=\"bind:START_DATE\" displaytype=\"date\" maskedittype=\"string\" maskeditformat=\"####-##-##\"/><Cell col=\"1\" text=\"~\"/><Cell col=\"2\" text=\"bind:END_DATE\" edittype=\"date\" displaytype=\"date\" maskedittype=\"string\" maskeditformat=\"####-##-##\"/><Cell col=\"3\" edittype=\"text\" editautoselect=\"true\" editdisplay=\"edit\" text=\"bind:COMPANY_NAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:GRADE_NAME\" edittype=\"combo\" displaytype=\"combotext\" combodataset=\"ds_CD_GRADE_CODE\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/><Cell col=\"5\" text=\"bind:WORK_PART\" edittype=\"text\" textAlign=\"left\"/></Band></Format></Formats>");
            this.divCareerInfo.addChild(obj.name, obj);

            obj = new Button("btn_CareerMinus",null,"10","72","28","0",null,null,null,null,null,this.divCareerInfo.form);
            obj.set_taborder("3");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Delete");
            this.divCareerInfo.addChild(obj.name, obj);

            obj = new Button("btn_CareerPlus",null,"10","72","28","btn_CareerMinus:5",null,null,null,null,null,this.divCareerInfo.form);
            obj.set_taborder("2");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Add");
            this.divCareerInfo.addChild(obj.name, obj);

            obj = new Div("divCert","divCareerInfo:10","44",null,null,"20","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01_00","0","0","179","43",null,null,null,null,null,null,this.divCert.form);
            obj.set_taborder("0");
            obj.set_text("자격사항");
            obj.set_cssclass("sta_WF_Title");
            this.divCert.addChild(obj.name, obj);

            obj = new Grid("grd_CertificateInfo","0","staTitle01_00:0",null,null,"0","66",null,null,null,null,this.divCert.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsOutput8");
            obj.getSetter("scrollbars").set("alwaysvert");
            obj.set_autoenter("select");
            obj.getSetter("useinputpanel").set("false");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_visible("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"113\"/><Column size=\"113\"/><Column size=\"192\"/><Column size=\"48\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"취득년월\" TL_SEQ=\"2205\"/><Cell col=\"1\" text=\"종류\" TL_SEQ=\"728\"/><Cell col=\"2\" text=\"발행처\" TL_SEQ=\"2206\"/><Cell col=\"3\" colspan=\"2\" text=\"파일\" TL_SEQ=\"718\"/></Band><Band id=\"body\"><Cell text=\"bind:LICENSE_DATE\" maskedittype=\"string\" maskeditformat=\"####-##-##\" displaytype=\"date\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"1\" text=\"bind:LICENSE_CODE\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_CD_LICENSE_TYPE\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/><Cell col=\"2\" text=\"bind:LICENSE_CODE\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"ds_CD_LICENSE_TYPE\" combocodecol=\"CODE\" combodatacol=\"GRP_CD_1\"/><Cell col=\"3\" text=\"bind:FILE_NAME\" cursor=\"pointer\"/><Cell col=\"4\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"등록\" TL_SEQ=\"585\"/></Band></Format></Formats>");
            this.divCert.addChild(obj.name, obj);

            obj = new Button("btn_CertificateMinus",null,"7","72","28","0",null,null,null,null,null,this.divCert.form);
            obj.set_taborder("3");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Delete");
            this.divCert.addChild(obj.name, obj);

            obj = new Button("btn_CertificatePlus",null,"7","72","28","btn_CertificateMinus:5",null,null,null,null,null,this.divCert.form);
            obj.set_taborder("2");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Add");
            this.divCert.addChild(obj.name, obj);

            obj = new Div("div_Attachment01","0",null,null,"26","0","16",null,null,null,null,this.divCert.form);
            obj.set_taborder("4");
            obj.set_async("false");
            obj.getSetter("SOURCE_CD").set("EI");
            obj.getSetter("SOURCE_SEQ").set("EMP_NO");
            obj.getSetter("USE_NEXT_FILE_TYPE").set("false");
            obj.getSetter("USE_LINK_TYPE").set("false");
            obj.getSetter("USE_MULTI_FILE").set("false");
            obj.getSetter("USE_OPEN_ADD_DIALOG").set("false");
            obj.getSetter("USE_DELETE_ALL").set("false");
            obj.getSetter("USE_BUTTON_ONLY").set("false");
            obj.getSetter("BINDDATASET").set("dsOutput");
            obj.set_url("sales::comm/COM_Attachment.xfdl");
            obj.set_text("");
            obj.getSetter("STATUS_CD").set("CERTIFICATE");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            this.divCert.addChild(obj.name, obj);

            obj = new Static("stc_Attachment00","0",null,"181","16",null,"46",null,null,null,null,this.divCert.form);
            obj.set_taborder("5");
            obj.set_text("소프트웨어 기술자 자격증");
            obj.set_visible("true");
            obj.set_cssclass("sta_POP_GroupTit");
            obj.getSetter("TL_SEQ").set("2203");
            this.divCert.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divCareerInfo.form
            obj = new Layout("default","",0,0,this.divCareerInfo.form,function(p){});
            this.divCareerInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCert.form.div_Attachment01
            obj = new Layout("default","",0,0,this.divCert.form.div_Attachment01.form,function(p){});
            this.divCert.form.div_Attachment01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCert.form
            obj = new Layout("default","",0,0,this.divCert.form,function(p){});
            this.divCert.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1200,506,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item20","cal_HireDate","value","dsOutput","WORK_STARTDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","edt_HireDateCount","value","dsOutput","CAREER_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edt_Address2","value","dsOutput","DETAIL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","sales::comm/COM_Attachment.xfdl");
        };
        
        // User Script
        this.addIncludeScript("TS_StaffCareerReg.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("TS_StaffCareerReg.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("TS_StaffCareerReg.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("TS_StaffCareerReg.xfdl","Script::CommGrid.xjs");
        this.registerScript("TS_StaffCareerReg.xfdl", function() {
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

        this.dsOutput = null;
        this.dsOutput3 = null;
        this.dsOutput8 = null;
        /************************************************************************************************
        * 전역 변수 영역
        ************************************************************************************************/
        this.arrCompanyExceptList = ["TOBE"];	//선택되면 안되는 회사 목록 추려야함 ingyu 20181015

        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/
        this.TS_StaffInfoReg_onload = function(obj,e)
        {
        	this.gfnCompInit(obj); //헤더클릭 이벤트 없을 시 사용
        	this.fnGetCode();

        	this.dsOutput = this.parent.parent.parent.dsOutput;
        	this.dsOutput3 = this.parent.parent.parent.dsOutput3;
        	this.dsOutput8 = this.parent.parent.parent.dsOutput8;
        };

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.fnGetCode = function()
        {


        	// 공통코드 조회
        	//this.gfnCodeTransaction();
        };

        this.fnsetEditReadonly = function(bRead)
        {
        	this.gfnCompDisable(this.div_EmpInfo.form, bRead);
        };

        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        // 화면 콜백
        this.fnCallBack = function(strSvcID, nErrorCode, strErrorMag)
        {
        	// 에러 예외처리
        	if(nErrorCode != 0)
        	{
        		alert("strSvcID : " + strSvcID + "\n" + "nErrorCode : " + nErrorCode + "\n" + "strErrorMag : " + strErrorMag);
        		return;
        	}
        	else
        	{
        		if(strSvcID == "gfnGetCode")
        		{

        		}
        		else if(strSvcID == "fnGetEmpCode")
        		{
        			var dsOutput = this._getDatasetObject("dsOutput");
        			var form = dsOutput.parent;
        			form.fnSearchSub("SubSelect_Copy", this.dsEmpNo.getColumn(0, "EMP_NO")); //재조회 작업
        		}
        	}
        };

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.comm_Click = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_EducationPlus" :
        			var ds = this.grd_EducationInfo.getBindDataset();
        			var nRow = ds.addRow();
        			ds.setColumn(nRow, "EMP_NO", this.div_EmpInfo.form.edt_EmpNo.value);
        			ds.setColumn(nRow, "GRADUATE_FLAG", "1");
        			break;
        		case "btn_EducationMinus" :
        			var ds = this.grd_EducationInfo.getBindDataset();
        			ds.deleteRow(ds.rowposition);
        			break;
        		case "btn_CertificatePlus" :
        			var ds = this.grd_CertificateInfo.getBindDataset();
        			ds.setColumn(ds.addRow(), "EMP_NO", this.div_EmpInfo.form.edt_EmpNo.value);
        			break;
        		case "btn_CertificateMinus" :
        			var ds = this.grd_CertificateInfo.getBindDataset();
        			ds.deleteRow(ds.rowposition);
        			break;
        		case "btn_CareerPlus" :
        			var ds = this.grd_CareerInfo.getBindDataset();
        			ds.setColumn(ds.addRow(), "EMP_NO", this.div_EmpInfo.form.edt_EmpNo.value);
        			break;
        		case "btn_CareerMinus" :
        			var ds = this.grd_CareerInfo.getBindDataset();
        			ds.deleteRow(ds.rowposition);
        			break;
        		case "btn_EmpNoIssuer" :
        			this.fnGetEmpCode();
        			break;
        		case "btn_PostalNumber" :
        			var objEnv = nexacro.getEnvironment();
        			var svc = objEnv.services["ServiceURL"];
        			this.wb_PostalSearch.set_url(svc.url+"/Service/zip.html");
        			break;

        	}
        };


        //SC_CompanyReg에서 정보 받은것을 가공할 때 사용.
        this.fnPopupCallBack = function (popupId, popupArg)
        {
        	if(this.gfnIsNull(popupArg) || popupArg == false || popupArg == "false") return;
        	console.log("this.fnPopupCallBack", popupId, popupArg);
        	switch(popupId)
        	{
        		case "TS_StaffInfoMM" :
        			if(!this.gfnIsEmpty(popupArg))
        			{
        				popupArg = popupArg.split("|");
        				console.log(popupArg);
        				this.fnSearchSub("SubSelect", popupArg[0], popupArg[2], popupArg[3], popupArg[4], popupArg[5]);
        				this.div_Search.form.edt_CompanyName.set_value(popupArg[1]);
        			}
        			break;
        		case "CE_CompanySearch_Copy" :
        			var ds = new nexacro.Dataset();
        			ds.loadXML(popupArg);

        			this.G_CompanyName = ds.getColumn(0, "COMPANY_NAME"); //회사명
        			this.G_CompanyCode = ds.getColumn(0, "COMPANY_CODE"); //회사코드

        			this.tab_TechInfo.tpg_SiInfo.form.comm_Click({name:"btn_EmpNoIssuer"}); //사번발급 Logic 수행.
        			break;
        		case "CE_CompanySearch_New" :

        			var ds = new nexacro.Dataset();
        			ds.loadXML(popupArg);

        			this.G_CompanyName = ds.getColumn(0, "COMPANY_NAME"); //회사명
        			this.G_CompanyCode = ds.getColumn(0, "COMPANY_CODE"); //회사코드

        			this.dsOutput.addRow();
        			//회사명
        			this.dsOutput.setColumn(0, "CO_NAME", this.G_CompanyName);
        			//회사코드
        			this.dsOutput.setColumn(0, "CO_CD", this.G_CompanyCode);
        			//FIRE_DATE (default : 공백)
        			this.dsOutput.setColumn(0, "FIRE_DATE", null);
        			//재직여부 (default : 재직)
        			this.dsOutput.setColumn(0, "HOLD_OFFICE", "1");

        			this.tab_TechInfo.tpg_SiInfo.form.comm_Click({name:"btn_EmpNoIssuer"}); //사번발급 Logic 수행.
        			this.div_Search.form.btn_Save.set_enable(true);			//저장

        			break;
        	}
        }

        this.grd_CertificateInfo_oncellclick = function(obj,e)
        {
        	if(obj.getCellProperty("body",e.cell,"displaytype")=="buttoncontrol")
        	{
        		var ds 	= obj.getBindDataset();
        		var sStatusCd	= ds.getColumn( obj.getDatasetRow(e.row), "LICENSE_CODE");
        		var sEmpNo		= ds.getColumn( obj.getDatasetRow(e.row), "EMP_NO" 		);
        		var nFindrow 	= ds.findRow("LICENSE_CODE", sStatusCd);

        		if(this.gfnIsEmpty(sStatusCd))
        		{
        			this.gfnAlert('msg.check.row',["자격증 종류"]);
        			return;
        		}
        		else if(nFindrow>=0 && nFindrow!=e.row)
        		{
        			this.gfnAlert('msg.exist.code',["자격증 종류"]);
        			return;
        		}
        		else if(!this.gfnIsEmpty(sEmpNo))
        		{
        			var args = {
        							SOURCE_CD:"EL"
        							,SOURCE_SEQ:sEmpNo
        							,STATUS_CD:sStatusCd
        							,USE_MULTI_FILE:false
        						}
        			this.commUtil.popupFileMaster(this, args, "fnPopupCallBack");
        		}
        	}
        };

        this.grd_CertificateInfo_oncelldblclick = function(obj,e)
        {
        	if(obj.getBindCellIndex("body", "FILE_NAME") == e.cell)
        	{
        		var ds 	= obj.getBindDataset();
        		var sFMSEQ = ds.getColumn(e.row, "FM_SEQ");
        		if(!this.gfnIsEmpty(sFMSEQ))
        			this.gfnFileDownload(sFMSEQ);
        	}
        };

        this.btn_ImageReg_onclick = function(obj,e)
        {
        	var dsOutput = this._getDatasetObject("dsOutput");
        	var strEMP_NO = dsOutput.getColumn(0, "EMP_NO")
        	var args = {
        					SOURCE_CD:"EI"
        				   ,SOURCE_SEQ:strEMP_NO
        				   ,STATUS_CD:"EMP_PHOTO"
        				   ,USE_MULTI_FILE:false
        			   }
        	this.commUtil.popupFileMaster(this, args, "fnPopupCallBack");
        };

        this.wb_PostalSearch_onloadcompleted = function(obj,e)
        {
        	this.wb_PostalSearch.callMethod("sample4_execDaumPostcode", "");
        };

        this.wb_PostalSearch_onusernotify = function(obj,e)
        {
        	var strRtn = e.userdata
        	if(!this.gfnIsEmpty(strRtn))
        	{
        		//초기화
        		this.div_EmpInfo.form.edt_Address2.set_value("");
        		//값지정
        		this.div_EmpInfo.form.edt_PostNo.set_value(strRtn[0]);
        		this.div_EmpInfo.form.edt_Address.set_value(strRtn[1]);
        	}
        };

        // 경력추가
        this.divCareerInfo_btn_CareerPlus_onclick = function(obj,e)
        {
        	var nRow = this.dsOutput3.addRow();
        	this.dsOutput3.setColumn(nRow, "COMPANY_CD", this.dsOutput.getColumn(0, "COMPANY_CD"));
        	this.dsOutput3.setColumn(nRow, "EMP_NO", this.dsOutput.getColumn(0, "EMP_NO"));
        };
        // 경력삭제
        this.divCareerInfo_btn_CareerMinus_onclick = function(obj,e)
        {
        	if(this.dsOutput3.rowposition < 0) return;
        	this.dsOutput3.deleteRow(this.dsOutput3.rowposition);
        };
        // 자격추가
        this.divCert_btn_CertificatePlus_onclick = function(obj,e)
        {
        	var nRow = this.dsOutput8.addRow();
        	this.dsOutput8.setColumn(nRow, "COMPANY_CD", this.dsOutput.getColumn(0, "COMPANY_CD"));
        	this.dsOutput8.setColumn(nRow, "EMP_NO", this.dsOutput.getColumn(0, "EMP_NO"));
        };
        // 자격삭제
        this.divCert_btn_CertificateMinus_onclick = function(obj,e)
        {
        	if(this.dsOutput8.rowposition < 0) return;
        	this.dsOutput8.deleteRow(this.dsOutput8.rowposition);
        };
        // 저장 validation
        this.fnValid = function ()
        {
        	for(var i=0,len=this.dsOutput3.rowcount;i<len;i++) {
        		if(this.dsOutput3.getRowType(i) == 2) {
        			if(this.gfnIsNull(this.dsOutput3.getColumn(i, "COMPANY_CD"))) {
        				this.dsOutput3.setColumn(nRow, "COMPANY_CD", this.dsOutput.getColumn(0, "COMPANY_CD"));
        			}
        			if(this.gfnIsNull(this.dsOutput3.getColumn(i, "EMP_NO"))) {
        				this.dsOutput3.setColumn(nRow, "EMP_NO", this.dsOutput.getColumn(0, "EMP_NO"));
        			}
        		}
        	}

        	for(var i=0,len=this.dsOutput8.rowcount;i<len;i++) {
        		if(this.dsOutput8.getRowType(i) == 2) {
        			if(this.gfnIsNull(this.dsOutput8.getColumn(i, "COMPANY_CD"))) {
        				this.dsOutput8.setColumn(nRow, "COMPANY_CD", this.dsOutput.getColumn(0, "COMPANY_CD"));
        			}
        			if(this.gfnIsNull(this.dsOutput8.getColumn(i, "EMP_NO"))) {
        				this.dsOutput8.setColumn(nRow, "EMP_NO", this.dsOutput.getColumn(0, "EMP_NO"));
        			}
        		}
        	}

        	// 정합성 체크
        	this.gfnClearValidation(this.dsOutput3);
        	this.gfnSetValidation(this.dsOutput3, "START_DATE", "입사일자"	, "required");
        	this.gfnSetValidation(this.dsOutput3, "END_DATE", "퇴사일자"	, "required");
        	this.gfnSetValidation(this.dsOutput3, "COMPANY_NAME", "회사명"	, "required");
        	this.gfnSetValidation(this.dsOutput3, "GRADE_NAME", "직급명"	, "required");
        	this.gfnSetValidation(this.dsOutput3, "WORK_PART", "담당업무"	, "required");

        	// Dataset의 변경된 Row Validation check
        	if (this.gfnValidation(this.dsOutput3, "U") == false) return false;

        	// 정합성 체크
        	this.gfnClearValidation(this.dsOutput8);
        	this.gfnSetValidation(this.dsOutput8, "LICENSE_DATE", "자격증 취득일"	, "required");
        	this.gfnSetValidation(this.dsOutput8, "LICENSE_CODE", "자격증 종류"	, "required");
        	this.gfnSetValidation(this.dsOutput8, "LICENSE_DATE", "퇴사일자"	, "required");

        	// Dataset의 변경된 Row Validation check
        	if (this.gfnValidation(this.dsOutput8, "U") == false) return false;

        	else return true;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TS_StaffInfoReg_onload,this);
            this.divCareerInfo.form.btn_CareerMinus.addEventHandler("onclick",this.divCareerInfo_btn_CareerMinus_onclick,this);
            this.divCareerInfo.form.btn_CareerPlus.addEventHandler("onclick",this.divCareerInfo_btn_CareerPlus_onclick,this);
            this.divCert.form.grd_CertificateInfo.addEventHandler("oncellclick",this.grd_CertificateInfo_oncellclick,this);
            this.divCert.form.grd_CertificateInfo.addEventHandler("oncelldblclick",this.grd_CertificateInfo_oncelldblclick,this);
            this.divCert.form.btn_CertificateMinus.addEventHandler("onclick",this.divCert_btn_CertificateMinus_onclick,this);
            this.divCert.form.btn_CertificatePlus.addEventHandler("onclick",this.divCert_btn_CertificatePlus_onclick,this);
            this.fdtFile.addEventHandler("onerror",this.fdtFile_onerror,this);
            this.fdtFile.addEventHandler("onsuccess",this.fdtFile_onsuccess,this);
        };
        this.loadIncludeScript("TS_StaffCareerReg.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
