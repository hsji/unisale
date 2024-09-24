(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AR_ServerListMM");
            this.set_titletext("관리 서버 목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_ServerRequestList", this);
            obj._setContents("<ColumnInfo><Column id=\"SRL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SERVER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SERVER_NAME_ALIAS\" type=\"STRING\" size=\"256\"/><Column id=\"PLATFORM_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"OS\" type=\"STRING\" size=\"256\"/><Column id=\"CPU\" type=\"STRING\" size=\"256\"/><Column id=\"RAM\" type=\"STRING\" size=\"256\"/><Column id=\"DISK_TYPE_1\" type=\"STRING\" size=\"256\"/><Column id=\"DISK_VOLUME_1\" type=\"STRING\" size=\"256\"/><Column id=\"DISK_TYPE_2\" type=\"STRING\" size=\"256\"/><Column id=\"DISK_VOLUME_2\" type=\"STRING\" size=\"256\"/><Column id=\"DISK_TYPE_3\" type=\"STRING\" size=\"256\"/><Column id=\"DISK_VOLUME_3\" type=\"STRING\" size=\"256\"/><Column id=\"MONTHLY_PAYMENT\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_DOC\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGE_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGE_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQUEST_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INSER_DATE\" type=\"DATE\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_RequestStatus", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_Platform", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"20\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"255\"/><Column id=\"VAL1\" type=\"STRING\" size=\"100\"/><Column id=\"VAL2\" type=\"STRING\" size=\"100\"/><Column id=\"VAL3\" type=\"STRING\" size=\"100\"/><Column id=\"VAL4\" type=\"STRING\" size=\"100\"/><Column id=\"REMARK\" type=\"STRING\" size=\"1073741823\"/><Column id=\"ORD\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_Os", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_ServerType", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_CertType", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ServerList", this);
            obj._setContents("<ColumnInfo><Column id=\"SIL_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SERVER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SERVER_NAME_ALIAS\" type=\"STRING\" size=\"256\"/><Column id=\"PUBLIC_IP\" type=\"STRING\" size=\"256\"/><Column id=\"PRIVATE_IP\" type=\"STRING\" size=\"256\"/><Column id=\"USE_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"FILE_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"PLATFORM_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGE_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGE_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MAINTENANCE_FLAG\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Platform", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"20\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"255\"/><Column id=\"VAL1\" type=\"STRING\" size=\"100\"/><Column id=\"VAL2\" type=\"STRING\" size=\"100\"/><Column id=\"VAL3\" type=\"STRING\" size=\"100\"/><Column id=\"VAL4\" type=\"STRING\" size=\"100\"/><Column id=\"REMARK\" type=\"STRING\" size=\"1073741823\"/><Column id=\"ORD\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ManageDept", this);
            obj._setContents("<ColumnInfo><Column id=\"MANAGE_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGE_DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_InsertDept", this);
            obj._setContents("<ColumnInfo><Column id=\"INSERT_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_ServerRequest","0","0",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("linear-gradient(to bottom,#f3f3f3,#d9d9d9)");
            obj.set_border("1px solid #c8c8c8");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ServerRequest","8","8","120","20",null,null,null,null,null,null,this.div_ServerRequest.form);
            obj.set_taborder("0");
            obj.set_text("서버 신청 현황");
            obj.set_cssclass("sta_POP_GroupTit");
            this.div_ServerRequest.addChild(obj.name, obj);

            obj = new Static("stc_ServerRequestStatus","stc_ServerRequest:20","8","48","20",null,null,null,null,null,null,this.div_ServerRequest.form);
            obj.set_taborder("1");
            obj.set_text("신청현황");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_ServerRequest.addChild(obj.name, obj);

            obj = new Combo("cmb_ServerRequestStatus","stc_ServerRequestStatus:8","8","150","20",null,null,null,null,null,null,this.div_ServerRequest.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_cmm_RequestStatus");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_text("전체");
            obj.set_value("000");
            obj.set_index("0");
            this.div_ServerRequest.addChild(obj.name, obj);

            obj = new Static("stc_ServerRequestDept","cmb_ServerRequestStatus:8","8","48","20",null,null,null,null,null,null,this.div_ServerRequest.form);
            obj.set_taborder("3");
            obj.set_text("신청부서");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_ServerRequest.addChild(obj.name, obj);

            obj = new Combo("cmb_ServerRequestDept","stc_ServerRequestDept:8","8","150","20",null,null,null,null,null,null,this.div_ServerRequest.form);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_InsertDept");
            obj.set_codecolumn("INSERT_DEPT_CD");
            obj.set_datacolumn("INSERT_DEPT_NM");
            obj.set_text("정보관리팀");
            obj.set_value("001");
            obj.set_index("0");
            this.div_ServerRequest.addChild(obj.name, obj);

            obj = new Grid("grd_ServerRequest","0","div_ServerRequest:0",null,"265","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_ServerRequestList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"240\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"일련번호\"/><Cell col=\"1\" text=\"서버명\"/><Cell col=\"2\" text=\"서버 ALIAS\"/><Cell col=\"3\" text=\"플랫폼\"/><Cell col=\"4\" text=\"OS\"/><Cell col=\"5\" text=\"CPU\"/><Cell col=\"6\" text=\"RAM\"/><Cell col=\"7\" text=\"신청현황\"/><Cell col=\"8\" text=\"신청자\"/><Cell col=\"9\" text=\"신청부서\"/><Cell col=\"10\" text=\"신청일\"/><Cell col=\"11\" text=\"비고\"/><Cell col=\"12\" text=\"상세정보\"/></Band><Band id=\"body\"><Cell text=\"bind:SRL_SEQ\" textAlign=\"left\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:SERVER_NAME\" textAlign=\"left\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:SERVER_NAME_ALIAS\" textAlign=\"left\" edittype=\"none\"/><Cell col=\"3\" text=\"bind:PLATFORM_TYPE\" combodataset=\"ds_Platform\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" textAlign=\"center\" displaytype=\"combotext\" edittype=\"none\"/><Cell col=\"4\" text=\"bind:OS\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"ds_cmm_Os\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" textAlign=\"center\"/><Cell col=\"5\" text=\"expr:dataset.getColumn(currow,&apos;CPU&apos;) + &apos; Core&apos;\"/><Cell col=\"6\" text=\"expr:dataset.getColumn(currow,&apos;RAM&apos;) + &apos; GB&apos;\"/><Cell col=\"7\" text=\"bind:REQUEST_STATUS\" combodataset=\"ds_cmm_RequestStatus\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" displaytype=\"combotext\" edittype=\"none\" textAlign=\"center\"/><Cell col=\"8\" text=\"bind:INSERT_EMP_NM\" textAlign=\"left\" edittype=\"none\"/><Cell col=\"9\" text=\"bind:INSERT_DEPT_NM\" textAlign=\"left\" edittype=\"none\"/><Cell col=\"10\" displaytype=\"date\" edittype=\"none\" text=\"bind:INSER_DATE\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"11\" text=\"bind:REMARK\" textAlign=\"left\"/><Cell col=\"12\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"상세정보\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_ServerList","0","grd_ServerRequest:8",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("linear-gradient(to bottom,#f3f3f3,#d9d9d9)");
            obj.set_border("1px solid #c8c8c8");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ServerList","8","8","121","20",null,null,null,null,null,null,this.div_ServerList.form);
            obj.set_taborder("0");
            obj.set_text("서버 목록");
            obj.set_cssclass("sta_POP_GroupTit");
            this.div_ServerList.addChild(obj.name, obj);

            obj = new Static("stc_ServerListUse","stc_ServerList:8","8","52","20",null,null,null,null,null,null,this.div_ServerList.form);
            obj.set_taborder("1");
            obj.set_text("사용 여부");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_ServerList.addChild(obj.name, obj);

            obj = new Combo("cmb_ServerListUse","stc_ServerListUse:8","8","150","20",null,null,null,null,null,null,this.div_ServerList.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_ServerList_form_cmb_ServerListUse_innerdataset = new nexacro.NormalDataset("div_ServerList_form_cmb_ServerListUse_innerdataset", obj);
            div_ServerList_form_cmb_ServerListUse_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(div_ServerList_form_cmb_ServerListUse_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.div_ServerList.addChild(obj.name, obj);

            obj = new Static("stc_ServerListManageDept","cmb_ServerListUse:8","8","48","20",null,null,null,null,null,null,this.div_ServerList.form);
            obj.set_taborder("3");
            obj.set_text("관리부서");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_ServerList.addChild(obj.name, obj);

            obj = new Combo("cmb_ServerListManageDept","stc_ServerListManageDept:8","8","150","20",null,null,null,null,null,null,this.div_ServerList.form);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_ManageDept");
            obj.set_codecolumn("MANAGE_DEPT_CD");
            obj.set_datacolumn("MANAGE_DEPT_NM");
            obj.set_text("정보관리팀");
            obj.set_value("001");
            obj.set_index("0");
            this.div_ServerList.addChild(obj.name, obj);

            obj = new Static("stc_ServerListPlatform","cmb_ServerListManageDept:8","8","36","20",null,null,null,null,null,null,this.div_ServerList.form);
            obj.set_taborder("5");
            obj.set_text("플랫폼");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_ServerList.addChild(obj.name, obj);

            obj = new Combo("cmb_ServerListPlatform","stc_ServerListPlatform:8","8","150","20",null,null,null,null,null,null,this.div_ServerList.form);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_cmm_Platform");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_text("전체");
            obj.set_value("000");
            obj.set_index("0");
            this.div_ServerList.addChild(obj.name, obj);

            obj = new Button("btn_ServerListAdd",null,"8","60","22","8",null,null,null,null,null,this.div_ServerList.form);
            obj.set_taborder("7");
            obj.set_text("추가");
            this.div_ServerList.addChild(obj.name, obj);

            obj = new Grid("grd_ServerList","0","div_ServerList:0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_ServerList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"일련번호\"/><Cell col=\"1\" text=\"서버명\"/><Cell col=\"2\" text=\"서버 ALIAS\"/><Cell col=\"3\" text=\"공인 IP\"/><Cell col=\"4\" text=\"내부 IP\"/><Cell col=\"5\" text=\"사용 여부\"/><Cell col=\"6\" text=\"플랫폼\"/><Cell col=\"7\" text=\"관리부서\"/><Cell col=\"8\" text=\"서버정기점검\"/><Cell col=\"9\" text=\"파일생성\"/><Cell col=\"10\" text=\"관련 서브도메인\"/></Band><Band id=\"body\"><Cell text=\"bind:SIL_SEQ\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:SERVER_NAME\" textAlign=\"left\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:SERVER_NAME_ALIAS\" textAlign=\"left\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:PUBLIC_IP\" textAlign=\"left\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:PRIVATE_IP\" textAlign=\"left\" edittype=\"text\"/><Cell col=\"5\" text=\"bind:USE_FLAG\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"6\" text=\"bind:PLATFORM_TYPE\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_Platform\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:MANAGE_DEPT_NM\" textAlign=\"left\" expandshow=\"show\" expandimage=\"url(&apos;theme://images/btn_WF_Grdexpand.png&apos;)\" expandsize=\"25\"/><Cell col=\"8\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:MAINTENANCE_FLAG\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"9\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" text=\"bind:FILE_FLAG\"/><Cell col=\"10\" text=\"expr:dataset.parent.gfnIsEmpty(dataset.getColumn(currow,&quot;SIL_SEQ&quot;)) == false ? &apos;보기&apos;:&apos;&apos;\" displaytype=\"expr:dataset.parent.gfnIsEmpty(dataset.getColumn(currow,&quot;SIL_SEQ&quot;)) == false ? &apos;buttoncontrol&apos;:&apos;normal&apos;\" edittype=\"expr:dataset.parent.gfnIsEmpty(dataset.getColumn(currow,&quot;SIL_SEQ&quot;)) == false ? &apos;button&apos;:&apos;none&apos;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_ServerRequest.form
            obj = new Layout("default","",0,0,this.div_ServerRequest.form,function(p){});
            this.div_ServerRequest.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_ServerList.form
            obj = new Layout("default","",0,0,this.div_ServerList.form,function(p){});
            this.div_ServerList.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,560,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_ServerRequest.form.cmb_ServerRequestStatus","value","ds_ServerRequestListSearch","REQUEST_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_ServerRequest.form.cmb_ServerRequestDept","value","ds_ServerRequestListSearch","REQUEST_DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_ServerList.form.cmb_ServerListUse","value","ds_ServerListSearch","USE_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_ServerList.form.cmb_ServerListManageDept","value","ds_ServerListSearch","MANAGE_DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_ServerList.form.cmb_ServerListPlatform","value","ds_ServerListSearch","PLATFORM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("AR_ServerListMM.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("AR_ServerListMM.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("AR_ServerListMM.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("AR_ServerListMM.xfdl","Script::CommGrid.xjs");
        this.registerScript("AR_ServerListMM.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 :
        * 02. 화면명   : 관리 서버 목록(AR_ServerListMM)
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
        this.AR_ServerListMM_onload = function(obj,e)
        {
        	this.gfnAddCodeDataset("ds_cmm_Platform", "SERVER_PLATFORM_TYPE");
        	this.gfnAddCodeDataset("ds_cmm_Os", "SERVER_OS_TYPE");
        	this.gfnAddCodeDataset("ds_cmm_CertType", "SERVER_CERT_TYPE");
        	this.gfnAddCodeDataset("ds_cmm_RequestStatus", "SERVER_REQUEST_STATUS");

        	this.gfnCodeTransaction();
        	this.gfnCompInit(obj);	//사용자 Grid
        };
        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fnSearch = function ()
        {
        	this.fnSearchRequestList();
        	this.fnSearchServerList();
        };
        //신청부서 조회
        this.fnSearchInsertDeptList = function ()
        {
        	this.gfnAddOutputDataset("ds_InsertDept","ds_Dept");

        	this.gfnCommonTransaction("fnSearchInsertDeptList", "AR_ServerRequest_S02");
        }
        //서버신청현황 조회
        this.fnSearchRequestList = function ()
        {
        	this.gfnAddSendParameter("REQUEST_STATUS", this.div_ServerRequest.form.cmb_ServerRequestStatus.value);
        	this.gfnAddSendParameter("INSERT_DEPT_CD", this.div_ServerRequest.form.cmb_ServerRequestDept.value);
        	this.gfnAddOutputDataset("ds_ServerRequestList","ds_ServerRequest");

        	this.gfnCommonTransaction("fnSearchRequestList", "AR_ServerRequest_S01");
        };
        //관리부서 조회
        this.fnSearchManageDeptList = function() {
        	this.gfnAddOutputDataset("ds_ManageDept","ds_Dept");

        	this.gfnCommonTransaction("fnSearchManageDeptList", "AR_ServerListMM_S02");
        }
        //서버 목록 조회
        this.fnSearchServerList = function ()
        {
        	this.gfnAddSendParameter("useYN", this.div_ServerList.form.cmb_ServerListUse.value);
        	this.gfnAddSendParameter("manageDept", this.div_ServerList.form.cmb_ServerListManageDept.value);
        	this.gfnAddSendParameter("platform", this.div_ServerList.form.cmb_ServerListPlatform.value);

        	this.gfnAddOutputDataset("ds_ServerList","ds_ServerList");

        	this.gfnCommonTransaction("fnSearchServerList", "AR_ServerListMM_S01");
        };
        //서버 목록 저장
        this.fnSaveServerList = function() {
        	this.gfnAddInputDataset("ds_ServerList","ds_ServerList","U");

        	this.gfnCommonTransaction("fnSaveServerList", "AR_ServerListMM_R01");
        }

        this.fnServerInfoValidation = function() {
        	for(var i = 0; i < this.ds_ServerList.rowcount; i++) {
        		var sServerName = this.ds_ServerList.getColumn(i,"SERVER_NAME");
        		var sServerNameAlias = this.ds_ServerList.getColumn(i,"SERVER_NAME_ALIAS");
        		var sPublicIp = this.ds_ServerList.getColumn(i,"PUBLIC_IP");
        		var sPrivateIp = this.ds_ServerList.getColumn(i,"PRIVATE_IP");
        		var nUseFlag = this.ds_ServerList.getColumn(i,"USE_FLAG");
        		var nFileFlag = this.ds_ServerList.getColumn(i,"FILE_FLAG");

        		if(this.gfnIsEmpty(sServerName) == true) {
        			this.alert("서버명을 입력해주세요");
        			return;
        		} else if(this.gfnIsEmpty(sServerNameAlias) == true) {
        			this.alert("서버 ALIAS를 입력해주세요");
        			return;
        		} else if(this.gfnIsEmpty(sPublicIp) == true) {
        			this.alert("공용 IP를 입력해주세요.");
        			return;
        		} else if(this.gfnIsEmpty(sPrivateIp) == true) {
        			this.alert("내부 IP를 입력해주세요.");
        			return;
        		}
        	}

        	this.fnSaveServerList();
        }
        //기본 조회조건 세팅
        this.fnFormInit = function() {

        	//서버 현황
        	this.ds_cmm_Platform.filter("VAL1 == '1'");
        	this.ds_Platform.copyData(this.ds_cmm_Platform, true);
        	this.ds_cmm_Platform.filter("");


        	this.div_ServerList.form.cmb_ServerListUse.set_index(0);
        	this.div_ServerList.form.cmb_ServerListPlatform.set_index(0);
        	this.fnSearchManageDeptList();
        	this.fnSearchInsertDeptList();
        }

        this.fnCallBack = function(strSvcID, nErrorCode, strErrorMag)
        {
        	switch(strSvcID) {
        	case "gfnGetCode" :
        		this.fnFormInit();
        		break;
        	case "fnSearchManageDeptList" :			//서버 목록 조회
        		this.div_ServerList.form.cmb_ServerListManageDept.set_index(0);
        		this.fnSearchServerList();
        		break;
        	case "fnSearchInsertDeptList" : 		//서버 신청 현황 조회
        		this.ds_cmm_RequestStatus.filter("VAL1 == '1' || VAL3 == '1'");

        		this.div_ServerRequest.form.cmb_ServerRequestStatus.set_index(0);
        		this.div_ServerRequest.form.cmb_ServerRequestDept.set_index(0);
        		this.fnSearchRequestList();
        		break;
        	case "fnSearchServerList" :
        		break;
        	case "fnSaveServerList" :
        		this.fnSearchServerList();
        		break;
        	case "fnSearchRequestList" :
        		break;
        	default :
        		break;
        	}
        }

        this.fnPopupCallBack = function (popupId, popupArg)
        {
        	popupArg = this.commUtil.popupReturn();

        	switch(popupId)
        	{
        		case "AR_ServerRequestMMPopup" :
        			this.fnSearchRequestList();
        			break;
        		case "AR_RelatedSubDomainListPopup" :
        			break;
        		case "ManageDept_Popup":
        			var nRow = this.ds_ServerList.rowposition;
        			var ds = new Dataset();
        			ds.loadXML(popupArg.toString(), true);
        			if(ds.rowcount > 0)
        			{
        				var nDeptCd = ds.getColumn(0,"DEPT_CD");
        				var nDeptName = ds.getColumn(0,"DEPT_NM");

        				this.ds_ServerList.setColumn(nRow,"MANAGE_DEPT_CD",nDeptCd);
        				this.ds_ServerList.setColumn(nRow,"MANAGE_DEPT_NM",nDeptName);
        			}
        		break;
        		default :
        			break;
        	}
        }

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        //서버 신청 현황 상세정보
        this.grd_ServerRequest_oncellclick = function(obj,e)
        {
        	if(e.cell == 12)
        	{
        		var nSRL_SEQ = this.ds_ServerRequestList.getColumn(e.row,"SRL_SEQ");
        		var sArgument = {SRL_SEQ : nSRL_SEQ};
        		this.commUtil.popup(this, "AR_ServerRequestMMPopup", "Admin::AR_ServerRequestMMPopup.xfdl", -1, -1, 360, 600, true, false, false, sArgument, "fnPopupCallBack");
        	}
        };
        //관련 서브도메인 보기
        this.grd_ServerList_oncellclick = function(obj,e)
        {
        	if(e.cell == 7)
        	{
        		this.commUtil.popupOrganization(this, "ManageDept_Popup", "fnPopupCallBack", "DEPT", null, "1");
        	} else if(e.cell == 10)
        	{
        		var nSIL_SEQ = this.ds_ServerList.getColumn(e.row,"SIL_SEQ");
        		if(this.gfnIsEmpty(nSIL_SEQ) == true) {
        			return;
        		}
        		var sArgument = {SIL_SEQ : nSIL_SEQ};
        		this.commUtil.popup(this, "AR_RelatedSubDomainListPopup", "Admin::AR_RelatedSubDomainListPopup.xfdl", -1, -1, 360, 480, true, false, false, sArgument, "fnPopupCallBack");
        	}
        };
        //서버 목록 추가
        this.div_ServerList_btn_ServerListAdd_onclick = function(obj,e)
        {
        	var nRow = this.ds_ServerList.addRow();
        	this.ds_ServerList.setColumn(nRow, "USE_FLAG", 0);
        	this.ds_ServerList.setColumn(nRow, "FILE_FLAG", 0);
        	this.ds_ServerList.setColumn(nRow, "MAINTENANCE_FLAG", 0);
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
            this.addEventHandler("onload",this.AR_ServerListMM_onload,this);
            this.grd_ServerRequest.addEventHandler("oncellclick",this.grd_ServerRequest_oncellclick,this);
            this.div_ServerList.form.stc_ServerList.addEventHandler("onclick",this.div_ServerList_stc_ServerServerList_onclick,this);
            this.div_ServerList.form.cmb_ServerListPlatform.addEventHandler("onitemchanged",this.div_ServerList_cmb_ServerListPlatform_onitemchanged,this);
            this.div_ServerList.form.btn_ServerListAdd.addEventHandler("onclick",this.div_ServerList_btn_ServerListAdd_onclick,this);
            this.grd_ServerList.addEventHandler("oncellclick",this.grd_ServerList_oncellclick,this);
        };
        this.loadIncludeScript("AR_ServerListMM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
