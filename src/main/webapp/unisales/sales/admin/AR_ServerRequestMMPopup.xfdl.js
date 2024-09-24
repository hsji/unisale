(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AR_ServerRequestMMPopup");
            this.set_titletext("서버 생성 신청서 관리 ");
            this.set_cssclass("frm_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(360,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmm_RequestStatus", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_Platform", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_Os", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_Disk", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ServerRequest", this);
            obj._setContents("<ColumnInfo><Column id=\"SRL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SERVER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SERVER_NAME_ALIAS\" type=\"STRING\" size=\"256\"/><Column id=\"PLATFORM_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"OS\" type=\"STRING\" size=\"256\"/><Column id=\"CPU\" type=\"STRING\" size=\"256\"/><Column id=\"RAM\" type=\"STRING\" size=\"256\"/><Column id=\"DISK_TYPE_1\" type=\"STRING\" size=\"256\"/><Column id=\"DISK_VOLUME_1\" type=\"STRING\" size=\"256\"/><Column id=\"DISK_TYPE_2\" type=\"STRING\" size=\"256\"/><Column id=\"DISK_VOLUME_2\" type=\"STRING\" size=\"256\"/><Column id=\"DISK_TYPE_3\" type=\"STRING\" size=\"256\"/><Column id=\"DISK_VOLUME_3\" type=\"STRING\" size=\"256\"/><Column id=\"MONTHLY_PAYMENT\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_DOC\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGE_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGE_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQUEST_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INSER_DATE\" type=\"DATE\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_PopupBottom","0",null,null,"43","0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_BtnBg");
            this.addChild(obj.name, obj);

            obj = new Div("div_ServerRequest","4","38",null,null,"8","stc_PopupBottom:4",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_detailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_OS","10","98","74","20",null,null,null,null,null,null,this.div_ServerRequest.form);
            obj.set_taborder("17");
            obj.set_text("운영체제");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_ServerRequest.addChild(obj.name, obj);

            obj = new Static("stc_ServerName","10","8","74","20",null,null,null,null,null,null,this.div_ServerRequest.form);
            obj.set_taborder("18");
            obj.set_text("서버명");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_ServerRequest.addChild(obj.name, obj);

            obj = new Static("stc_ServerAlias","10","38","74","20",null,null,null,null,null,null,this.div_ServerRequest.form);
            obj.set_taborder("19");
            obj.set_text("서버 ALIAS");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_ServerRequest.addChild(obj.name, obj);

            obj = new Static("stc_Platform","10","68","74","20",null,null,null,null,null,null,this.div_ServerRequest.form);
            obj.set_taborder("20");
            obj.set_text("플랫폼");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_ServerRequest.addChild(obj.name, obj);

            obj = new Static("stc_CPU","10","128","74","20",null,null,null,null,null,null,this.div_ServerRequest.form);
            obj.set_taborder("21");
            obj.set_text("CPU");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_ServerRequest.addChild(obj.name, obj);

            obj = new Static("stc_RAM","10","158","74","20",null,null,null,null,null,null,this.div_ServerRequest.form);
            obj.set_taborder("22");
            obj.set_text("RAM");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_ServerRequest.addChild(obj.name, obj);

            obj = new Static("stc_Disk_Type_1","10","188","74","20",null,null,null,null,null,null,this.div_ServerRequest.form);
            obj.set_taborder("23");
            obj.set_text("디스크 1");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_ServerRequest.addChild(obj.name, obj);

            obj = new Static("stc_Disk_Type_2","10","218","74","20",null,null,null,null,null,null,this.div_ServerRequest.form);
            obj.set_taborder("24");
            obj.set_text("디스크 2");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_ServerRequest.addChild(obj.name, obj);

            obj = new Edit("edt_ServerName","stc_ServerName:8","8",null,"20","8",null,null,null,null,null,this.div_ServerRequest.form);
            obj.set_taborder("0");
            this.div_ServerRequest.addChild(obj.name, obj);

            obj = new Static("stc_Manage_Dept","10","338","74","20",null,null,null,null,null,null,this.div_ServerRequest.form);
            obj.set_taborder("25");
            obj.set_text("관리부서");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_ServerRequest.addChild(obj.name, obj);

            obj = new Edit("edt_ServerAlias","stc_ServerAlias:8","38",null,"20","8",null,null,null,null,null,this.div_ServerRequest.form);
            obj.set_taborder("1");
            this.div_ServerRequest.addChild(obj.name, obj);

            obj = new Combo("cmb_Platform","stc_Platform:8","68",null,"20","8",null,null,null,null,null,this.div_ServerRequest.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_cmm_Platform");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            this.div_ServerRequest.addChild(obj.name, obj);

            obj = new Combo("cmb_OS","stc_OS:8","98",null,"20","8",null,null,null,null,null,this.div_ServerRequest.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_cmm_Os");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            this.div_ServerRequest.addChild(obj.name, obj);

            obj = new MaskEdit("medt_CPU","stc_CPU:8","128",null,"20","8",null,null,null,null,null,this.div_ServerRequest.form);
            obj.set_taborder("4");
            obj.set_postfixtext(" Core");
            obj.set_displaynulltext("단위 : Core");
            this.div_ServerRequest.addChild(obj.name, obj);

            obj = new MaskEdit("medt_Ram","stc_RAM:8","158",null,"20","8",null,null,null,null,null,this.div_ServerRequest.form);
            obj.set_taborder("5");
            obj.set_displaynulltext("단위 : GB");
            obj.set_postfixtext(" GB");
            this.div_ServerRequest.addChild(obj.name, obj);

            obj = new Combo("cmb_Disk_Type_1","stc_Disk_Type_1:8","188","119","20",null,null,null,null,null,null,this.div_ServerRequest.form);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_cmm_Disk");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            this.div_ServerRequest.addChild(obj.name, obj);

            obj = new Combo("cmb_Disk_Type_2","stc_Disk_Type_2:8","218","119","20",null,null,null,null,null,null,this.div_ServerRequest.form);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_cmm_Disk");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            this.div_ServerRequest.addChild(obj.name, obj);

            obj = new MaskEdit("medt_Disk_Volume_1","cmb_Disk_Type_1:8","188","119","20",null,null,null,null,null,null,this.div_ServerRequest.form);
            obj.set_taborder("7");
            obj.set_displaynulltext("단위 : GB");
            obj.set_postfixtext(" GB");
            this.div_ServerRequest.addChild(obj.name, obj);

            obj = new MaskEdit("medt_Disk_Volume_2","cmb_Disk_Type_2:8","218","119","20",null,null,null,null,null,null,this.div_ServerRequest.form);
            obj.set_taborder("9");
            obj.set_postfixtext(" GB");
            obj.set_displaynulltext("단위 : GB");
            this.div_ServerRequest.addChild(obj.name, obj);

            obj = new Static("stc_MonthlyPayment","10","278","74","20",null,null,null,null,null,null,this.div_ServerRequest.form);
            obj.set_taborder("26");
            obj.set_text("월 납입금");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_ServerRequest.addChild(obj.name, obj);

            obj = new MaskEdit("medt_MonthlyPayment","stc_MonthlyPayment:8","278","246","20",null,null,null,null,null,null,this.div_ServerRequest.form);
            obj.set_taborder("12");
            obj.set_displaynulltext("단위 : 원");
            this.div_ServerRequest.addChild(obj.name, obj);

            obj = new Static("stc_ApprovalDoc","10","308","74","20",null,null,null,null,null,null,this.div_ServerRequest.form);
            obj.set_taborder("27");
            obj.set_text("전자결재");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_ServerRequest.addChild(obj.name, obj);

            obj = new Button("btn_ApprovalDoc","stc_ApprovalDoc:8","308","40","20",null,null,null,null,null,null,this.div_ServerRequest.form);
            obj.set_taborder("13");
            obj.set_text("보기");
            this.div_ServerRequest.addChild(obj.name, obj);

            obj = new Static("stc_Remarks","10","398","74","20",null,null,null,null,null,null,this.div_ServerRequest.form);
            obj.set_taborder("28");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_ServerRequest.addChild(obj.name, obj);

            obj = new TextArea("txt_Remarks","92","398","246","110",null,null,null,null,null,null,this.div_ServerRequest.form);
            obj.set_taborder("16");
            this.div_ServerRequest.addChild(obj.name, obj);

            obj = new Static("stc_Disk_Type_3","10","248","74","20",null,null,null,null,null,null,this.div_ServerRequest.form);
            obj.set_taborder("29");
            obj.set_text("디스크 3");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_ServerRequest.addChild(obj.name, obj);

            obj = new Combo("cmb_Disk_Type_3","stc_Disk_Type_3:8","248","119","20",null,null,null,null,null,null,this.div_ServerRequest.form);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_cmm_Disk");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            this.div_ServerRequest.addChild(obj.name, obj);

            obj = new MaskEdit("medt_Disk_Volume_3","cmb_Disk_Type_3:8","248","119","20",null,null,null,null,null,null,this.div_ServerRequest.form);
            obj.set_taborder("11");
            obj.set_postfixtext(" GB");
            obj.set_displaynulltext("단위 : GB");
            this.div_ServerRequest.addChild(obj.name, obj);

            obj = new Button("btn_ManageDept","stc_Manage_Dept:8","338","40","20",null,null,null,null,null,null,this.div_ServerRequest.form);
            obj.set_taborder("14");
            obj.set_text("선택");
            this.div_ServerRequest.addChild(obj.name, obj);

            obj = new Static("stc_ManageDept","btn_ManageDept:8","338",null,"20","4",null,null,null,null,null,this.div_ServerRequest.form);
            obj.set_taborder("30");
            obj.set_text("선택 필요");
            this.div_ServerRequest.addChild(obj.name, obj);

            obj = new Static("stc_RequestStatus","10","367","74","20",null,null,null,null,null,null,this.div_ServerRequest.form);
            obj.set_taborder("31");
            obj.set_text("신청현황");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_ServerRequest.addChild(obj.name, obj);

            obj = new Combo("cmb_RequestStatus","93","367",null,"20","8",null,null,null,null,null,this.div_ServerRequest.form);
            obj.set_taborder("15");
            obj.set_innerdataset("ds_cmm_RequestStatus");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            this.div_ServerRequest.addChild(obj.name, obj);

            obj = new Static("stc_PopupTop","8","8","141","20",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("서버 생성 신청서 관리");
            obj.set_cssclass("sta_POP_Title");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ClosePopup",null,null,"55","22","8","8",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Save",null,null,"55","22","72","8",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_tran");
            obj.set_tabstop("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close",null,"10","15","15","8",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_POP_Cls");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_ServerRequest.form
            obj = new Layout("default","",0,0,this.div_ServerRequest.form,function(p){});
            this.div_ServerRequest.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",360,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_ServerRequest.form.edt_ServerName","value","ds_ServerRequest","SERVER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_ServerRequest.form.edt_ServerAlias","value","ds_ServerRequest","SERVER_NAME_ALIAS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_ServerRequest.form.cmb_Platform","value","ds_ServerRequest","PLATFORM_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_ServerRequest.form.cmb_OS","value","ds_ServerRequest","OS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_ServerRequest.form.medt_CPU","value","ds_ServerRequest","CPU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_ServerRequest.form.medt_Ram","value","ds_ServerRequest","RAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_ServerRequest.form.cmb_Disk_Type_1","value","ds_ServerRequest","DISK_TYPE_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_ServerRequest.form.medt_Disk_Volume_1","value","ds_ServerRequest","DISK_VOLUME_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_ServerRequest.form.cmb_Disk_Type_2","value","ds_ServerRequest","DISK_TYPE_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_ServerRequest.form.medt_Disk_Volume_2","value","ds_ServerRequest","DISK_VOLUME_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_ServerRequest.form.cmb_Disk_Type_3","value","ds_ServerRequest","DISK_TYPE_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_ServerRequest.form.medt_Disk_Volume_3","value","ds_ServerRequest","DISK_VOLUME_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_ServerRequest.form.cmb_RequestStatus","value","ds_ServerRequest","REQUEST_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_ServerRequest.form.txt_Remarks","value","ds_ServerRequest","REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_ServerRequest.form.medt_MonthlyPayment","value","ds_ServerRequest","MONTHLY_PAYMENT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("AR_ServerRequestMMPopup.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("AR_ServerRequestMMPopup.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("AR_ServerRequestMMPopup.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("AR_ServerRequestMMPopup.xfdl","Script::CommGrid.xjs");
        this.registerScript("AR_ServerRequestMMPopup.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 :
        * 02. 화면명   : 서버 생성 신청서 관리(AR_ServerRequestMMPopup)
        * 03. 화면설명 :
        * 04. 작성일   : 2023/12/26
        * 05. 작성자   : 이상원
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
        this.AR_ServerRequestMMPopup_onload = function(obj,e)
        {
        	this.gfnAddCodeDataset("ds_cmm_Platform", "SERVER_PLATFORM_TYPE");
        	this.gfnAddCodeDataset("ds_cmm_Os", "SERVER_OS_TYPE");
        	this.gfnAddCodeDataset("ds_cmm_Disk", "SERVER_DISK_TYPE");
        	this.gfnAddCodeDataset("ds_cmm_RequestStatus", "SERVER_REQUEST_STATUS");

        	this.gfnCodeTransaction();
        	this.gfnCompInit(obj);	//사용자 Grid
        };
        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fnFormInit = function ()
        {
        	this.ds_cmm_Platform.filter("VAL1 == '1'");
        	this.ds_cmm_RequestStatus.filter("VAL1 == '1'");
        	if(this.gfnIsEmpty(this.parent.SRL_SEQ) == true) {
        		this.ds_ServerRequest.clearData();
        		this.ds_ServerRequest.addRow();
        		this.div_ServerRequest.form.cmb_Platform.set_index(0);
        		this.div_ServerRequest.form.cmb_OS.set_index(0);
        		this.div_ServerRequest.form.cmb_Disk_Type_1.set_index(0);
        		this.div_ServerRequest.form.cmb_Disk_Type_2.set_index(0);
        		this.div_ServerRequest.form.cmb_Disk_Type_3.set_index(0);
        	} else {
        		this.fnSearchServerRequest();
        	}
        };

        this.fnSearchServerRequest = function () {
        	this.gfnAddSendParameter("SRL_SEQ",this.parent.SRL_SEQ);

        	this.gfnAddOutputDataset("ds_ServerRequest","ds_ServerRequest");

        	this.gfnCommonTransaction("fnSearchServerRequest", "AR_ServerRequest_S01");
        }

        this.fnSaveServerRequest = function ()
        {
        	if(this.fnValidation() == false) {
        		return;
        	}
        	if(this.gfnIsEmpty(this.parent.SRL_SEQ) == true) {
        		this.ds_ServerRequest.setColumn(0,"REQUEST_STATUS","001");
        	}

        	this.gfnAddInputDataset("ds_ServerRequest","ds_ServerRequest","U");

        	this.gfnCommonTransaction("fnSaveServerRequest", "AR_ServerRequest_R01");
        };

        this.fnValidation = function ()
        {
        	var sServerName = this.ds_ServerRequest.getColumn(0,"SERVER_NAME");
        	var sServerNameAlias = this.ds_ServerRequest.getColumn(0,"SERVER_NAME_ALIAS");
        	var nPlatformType = this.ds_ServerRequest.getColumn(0,"PLATFORM_TYPE");
        	var nOs = this.ds_ServerRequest.getColumn(0,"OS");
        	var nCpu = this.ds_ServerRequest.getColumn(0,"CPU");
        	var nRam = this.ds_ServerRequest.getColumn(0,"RAM");
        	var nDisk_Type_1 = this.ds_ServerRequest.getColumn(0,"DISK_TYPE_1");
        	var nDisk_Volume_1 = this.ds_ServerRequest.getColumn(0,"DISK_VOLUME_1");
        	var nDisk_Type_2 = this.ds_ServerRequest.getColumn(0,"DISK_TYPE_2");
        	var nDisk_Volume_2 = this.ds_ServerRequest.getColumn(0,"DISK_VOLUME_2");
        	var nDisk_Type_3 = this.ds_ServerRequest.getColumn(0,"DISK_TYPE_3");
        	var nDisk_Volume_3 = this.ds_ServerRequest.getColumn(0,"DISK_VOLUME_3");
        	var nMonthlyPayment = this.ds_ServerRequest.getColumn(0,"MONTHLY_PAYMENT");
        	var sApprovalDoc = this.ds_ServerRequest.getColumn(0,"APPROVAL_DOC");
        	var sManageDeptCd = this.ds_ServerRequest.getColumn(0,"MANAGE_DEPT_CD");
        	var sManageDeptNm = this.ds_ServerRequest.getColumn(0,"MANAGE_DEPT_NM");
        	var nRequestStatus = this.ds_ServerRequest.getColumn(0,"REQUEST_STATUS");
        	var sRemark = this.ds_ServerRequest.getColumn(0,"REMARK");

        	if(this.gfnIsEmpty(sServerName) == true) {
        		this.alert("서버명을 입력해주세요.");
        		return false;
        	} else if(this.gfnIsEmpty(sServerNameAlias) == true) {
        		this.alert("서버 ALIAS을 입력해주세요.");
        		return false;
        	} else if(this.gfnIsEmpty(nPlatformType) == true) {
        		this.alert("플랫폼을 선택해주세요.");
        		return false;
        	} else if(this.gfnIsEmpty(nOs) == true) {
        		this.alert("OS를 선택해주세요.");
        		return false;
        	} else if(this.gfnIsEmpty(nCpu) == true) {
        		this.alert("CPU를 입력해주세요.");
        		return false;
        	} else if(this.gfnIsEmpty(nRam) == true) {
        		this.alert("RAM을 입력해주세요.");
        		return false;
        	} else if(this.gfnIsEmpty(nDisk_Type_1) == true) {
        		this.alert("디스크1의 종류를 선택해주세요.");
        		return false;
        	} else if(this.gfnIsEmpty(nDisk_Volume_1) == true) {
        		this.alert("디스크1의 용량을 입력해주세요.");
        		return false;
        	} else if(this.gfnIsEmpty(sManageDeptCd) == true || this.gfnIsEmpty(sManageDeptNm) == true) {
        		this.alert("관리부서를 선택해주세요.");
        		return false;
        	}

        	if(this.gfnIsEmpty(nDisk_Type_2) == true) {
        		this.ds_ServerRequest.setColumn(0,"DISK_TYPE_2","003");
        	}
        	if(this.gfnIsEmpty(nDisk_Volume_2) == true) {
        		this.ds_ServerRequest.setColumn(0,"DISK_VOLUME_2","0");
        	}
        	if(this.gfnIsEmpty(nDisk_Type_3) == true) {
        		this.ds_ServerRequest.setColumn(0,"DISK_TYPE_3","003");
        	}
        	if(this.gfnIsEmpty(nDisk_Volume_3) == true) {
        		this.ds_ServerRequest.setColumn(0,"DISK_VOLUME_3","0");
        	}
        	if(this.gfnIsEmpty(nMonthlyPayment) == true) {
        		this.ds_ServerRequest.setColumn(0,"MONTHLY_PAYMENT","0");
        	}
        	if(this.gfnIsEmpty(sApprovalDoc) == true) {
        		this.ds_ServerRequest.setColumn(0,"APPROVAL_DOC","");
        	}
        	if(this.gfnIsEmpty(nRequestStatus) == true) {
        		this.ds_ServerRequest.setColumn(0,"REQUEST_STATUS","001");
        	}
        	if(this.gfnIsEmpty(sRemark) == true) {
        		this.ds_ServerRequest.setColumn(0,"REMARK","");
        	}
        	return true;
        };

        this.fnCallBack = function(strSvcID, nErrorCode, strErrorMag)
        {
        	switch(strSvcID) {
        	case "gfnGetCode" :
        		this.fnFormInit();
        		break;
        	case "fnSearchServerRequest":
        			var sDeptNm = this.ds_ServerRequest.getColumn(0,"MANAGE_DEPT_NM");
        			this.div_ServerRequest.form.stc_ManageDept.set_text(sDeptNm);
        		break;
        	case "fnSaveServerRequest" :
        		this.commUtil.popupClose("Save");
        		break;
        	default:
        		break;
        	}
        };

        this.fnPopupCallBack = function (popupId, popupArg)
        {
        	popupArg = this.commUtil.popupReturn();
        	trace(popupArg);
        	switch(popupId)
        	{
        		case "ManageDept_Popup":
        			var ds = new Dataset();
        			ds.loadXML(popupArg.toString(), true);
        			if(ds.rowcount > 0)
        			{
        				var nDeptCd = ds.getColumn(0,"DEPT_CD");
        				var nDeptName = ds.getColumn(0,"DEPT_NM");
        				this.div_ServerRequest.form.stc_ManageDept.set_text(nDeptName);
        				this.ds_ServerRequest.setColumn(0,"MANAGE_DEPT_CD",nDeptCd);
        				this.ds_ServerRequest.setColumn(0,"MANAGE_DEPT_NM",nDeptName);
        			}
        			break;
        		default :
        			break;
        	}
        }
        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.btn_Close_onclick = function(obj,e)
        {
        	this.commUtil.popupClose("cancel");
        };

        this.btn_Save_onclick = function(obj,e)
        {
        	this.fnSaveServerRequest();

        };

        this.div_ServerRequest_btn_ManageDept_onclick = function(obj,e)
        {
        	this.commUtil.popupOrganization(this, "ManageDept_Popup", "fnPopupCallBack", "DEPT", null, "1");
        };
        /************************************************************************************************
        * 팝업 TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/

        /************************************************************************************************
        * 팝업 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/











        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.AR_ServerRequestMMPopup_onload,this);
            this.stc_PopupBottom.addEventHandler("onclick",this.stc_PopupBottom_onclick,this);
            this.div_ServerRequest.form.btn_ManageDept.addEventHandler("onclick",this.div_ServerRequest_btn_ManageDept_onclick,this);
            this.btn_ClosePopup.addEventHandler("onclick",this.btn_Close_onclick,this);
            this.btn_Save.addEventHandler("onclick",this.btn_Save_onclick,this);
            this.btn_Close.addEventHandler("onclick",this.btn_Close_onclick,this);
        };
        this.loadIncludeScript("AR_ServerRequestMMPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
