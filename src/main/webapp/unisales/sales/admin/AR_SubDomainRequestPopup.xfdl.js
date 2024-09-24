(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AR_SubDomainRequestPopup");
            this.set_titletext("서브 도메인 신청서 작성");
            this.set_cssclass("frm_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(360,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_ServerList", this);
            obj._setContents("<ColumnInfo><Column id=\"SIL_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SERVER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SERVER_NAME_ALIAS\" type=\"STRING\" size=\"256\"/><Column id=\"PUBLIC_IP\" type=\"STRING\" size=\"256\"/><Column id=\"PRIVATE_IP\" type=\"STRING\" size=\"256\"/><Column id=\"USE_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"FILE_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"PLATFORM_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGE_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAINTENANCE_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"SERVER_INFO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Domain", this);
            obj._setContents("<ColumnInfo><Column id=\"DL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DOMAIN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGE_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SubDomain", this);
            obj._setContents("<ColumnInfo><Column id=\"SDL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SIL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_DOMAIN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SERVER_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUEST_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_Dept", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"20\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"255\"/><Column id=\"VAL1\" type=\"STRING\" size=\"100\"/><Column id=\"VAL2\" type=\"STRING\" size=\"100\"/><Column id=\"VAL3\" type=\"STRING\" size=\"100\"/><Column id=\"VAL4\" type=\"STRING\" size=\"100\"/><Column id=\"REMARK\" type=\"STRING\" size=\"1073741823\"/><Column id=\"ORD\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">001</Col><Col id=\"CAPTION\">정보관리팀</Col></Row><Row><Col id=\"CODE\">002</Col><Col id=\"CAPTION\">클라우드환경팀</Col></Row><Row><Col id=\"CODE\">003</Col><Col id=\"CAPTION\">프리세일즈팀</Col></Row><Row><Col id=\"CODE\">004</Col><Col id=\"CAPTION\">교육팀</Col></Row><Row><Col id=\"CODE\">005</Col><Col id=\"CAPTION\">일본지원팀</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_ServerType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"20\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"255\"/><Column id=\"VAL1\" type=\"STRING\" size=\"100\"/><Column id=\"VAL2\" type=\"STRING\" size=\"100\"/><Column id=\"VAL3\" type=\"STRING\" size=\"100\"/><Column id=\"VAL4\" type=\"STRING\" size=\"100\"/><Column id=\"REMARK\" type=\"STRING\" size=\"1073741823\"/><Column id=\"ORD\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Port", this);
            obj._setContents("<ColumnInfo><Column id=\"SPL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SDL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PORT_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"PROTOCOL\" type=\"STRING\" size=\"256\"/><Column id=\"LB_FLAG\" type=\"INT\" size=\"1\"/><Column id=\"REQUEST_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_RequestStatus", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"20\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"255\"/><Column id=\"VAL1\" type=\"STRING\" size=\"100\"/><Column id=\"VAL2\" type=\"STRING\" size=\"100\"/><Column id=\"VAL3\" type=\"STRING\" size=\"100\"/><Column id=\"VAL4\" type=\"STRING\" size=\"100\"/><Column id=\"REMARK\" type=\"STRING\" size=\"1073741823\"/><Column id=\"ORD\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_Close",null,"10","15","15","8",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_POP_Cls");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_PopupBottom","0",null,null,"43","0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_BtnBg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Save",null,null,"55","22","72","8",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_tran");
            obj.set_tabstop("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ClosePopup",null,null,"55","22","8","8",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Static("stc_PopupTop","8","8","122","20",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("서브 도메인 신청서");
            obj.set_cssclass("sta_POP_Title");
            this.addChild(obj.name, obj);

            obj = new Div("div_SubDomain","4","38",null,"435","4",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_detailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_SubDomain","10","8","74","20",null,null,null,null,null,null,this.div_SubDomain.form);
            obj.set_taborder("0");
            obj.set_text("서브 도메인");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_SubDomain.addChild(obj.name, obj);

            obj = new Static("stc_Domain","10","40","74","20",null,null,null,null,null,null,this.div_SubDomain.form);
            obj.set_taborder("1");
            obj.set_text("도메인");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_SubDomain.addChild(obj.name, obj);

            obj = new Edit("edt_SubDomain","stc_SubDomain:8","8",null,"20","8",null,null,null,null,null,this.div_SubDomain.form);
            obj.set_taborder("2");
            this.div_SubDomain.addChild(obj.name, obj);

            obj = new Combo("cmb_Domain","stc_Domain:8","40",null,"20","8",null,null,null,null,null,this.div_SubDomain.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_Domain");
            obj.set_codecolumn("DL_SEQ");
            obj.set_datacolumn("DOMAIN_NAME");
            this.div_SubDomain.addChild(obj.name, obj);

            obj = new Static("stc_ServerIp","10","72","74","20",null,null,null,null,null,null,this.div_SubDomain.form);
            obj.set_taborder("4");
            obj.set_text("서버(IP)");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_SubDomain.addChild(obj.name, obj);

            obj = new Combo("cmb_ServerIp","stc_ServerIp:8","72",null,"20","8",null,null,null,null,null,this.div_SubDomain.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_ServerList");
            obj.set_codecolumn("SIL_SEQ");
            obj.set_datacolumn("SERVER_INFO");
            this.div_SubDomain.addChild(obj.name, obj);

            obj = new Static("stc_ServerType","10","104","74","20",null,null,null,null,null,null,this.div_SubDomain.form);
            obj.set_taborder("6");
            obj.set_text("서버 종류");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_SubDomain.addChild(obj.name, obj);

            obj = new Combo("cmb_ServerType","stc_ServerType:8","104",null,"20","8",null,null,null,null,null,this.div_SubDomain.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_cmm_ServerType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            this.div_SubDomain.addChild(obj.name, obj);

            obj = new Static("stc_Remarks","10","168","74","20",null,null,null,null,null,null,this.div_SubDomain.form);
            obj.set_taborder("8");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_SubDomain.addChild(obj.name, obj);

            obj = new Grid("grd_PortList","8",null,null,"100","8","8",null,null,null,null,this.div_SubDomain.form);
            obj.set_taborder("11");
            obj.set_binddataset("ds_Port");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"105\"/><Column size=\"75\"/><Column size=\"90\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"포트 번호\"/><Cell col=\"1\" text=\"프로토콜\"/><Cell col=\"2\" text=\"포트포워딩\"/><Cell col=\"3\" text=\"신청상태\"/></Band><Band id=\"body\"><Cell text=\"bind:PORT_NUMBER\" edittype=\"normal\"/><Cell col=\"1\" text=\"bind:PROTOCOL\" edittype=\"normal\"/><Cell col=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:LB_FLAG\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"3\" text=\"bind:REQUEST_STATUS\" displaytype=\"combotext\" edittype=\"readonly\" combodataset=\"ds_cmm_RequestStatus\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/></Band></Format></Formats>");
            this.div_SubDomain.addChild(obj.name, obj);

            obj = new Static("stc_PortListHeader","8",null,null,"30","8","grd_PortList:0",null,null,null,null,this.div_SubDomain.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_POP_GroupBg");
            this.div_SubDomain.addChild(obj.name, obj);

            obj = new Static("stc_PortList","13","300","120","20",null,null,null,null,null,null,this.div_SubDomain.form);
            obj.set_taborder("10");
            obj.set_text("포트");
            obj.set_cssclass("sta_POP_GroupTit");
            this.div_SubDomain.addChild(obj.name, obj);

            obj = new Button("btn_PortDel",null,"303","30","16","15",null,null,null,null,null,this.div_SubDomain.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_POP_Del");
            obj.set_text("");
            this.div_SubDomain.addChild(obj.name, obj);

            obj = new Button("btn_PortAdd",null,"303","30","16","50",null,null,null,null,null,this.div_SubDomain.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_POP_Add");
            this.div_SubDomain.addChild(obj.name, obj);

            obj = new Static("stc_MDept","10","136","74","20",null,null,null,null,null,null,this.div_SubDomain.form);
            obj.set_taborder("14");
            obj.set_text("사용부서");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_SubDomain.addChild(obj.name, obj);

            obj = new Button("btn_ManageDept","stc_MDept:8","136","40","20",null,null,null,null,null,null,this.div_SubDomain.form);
            obj.set_taborder("15");
            obj.set_text("선택");
            this.div_SubDomain.addChild(obj.name, obj);

            obj = new Static("stc_ManageDept","btn_ManageDept:8","136",null,"20","8",null,null,null,null,null,this.div_SubDomain.form);
            obj.set_taborder("16");
            obj.set_text("선택 필요");
            this.div_SubDomain.addChild(obj.name, obj);

            obj = new TextArea("txt_Remark","stc_Remarks:8","168",null,"79","8",null,null,null,null,null,this.div_SubDomain.form);
            obj.set_taborder("17");
            this.div_SubDomain.addChild(obj.name, obj);

            obj = new Static("stc_RequestStatus","10","258","74","20",null,null,null,null,null,null,this.div_SubDomain.form);
            obj.set_taborder("18");
            obj.set_text("신청 현황");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_visible("false");
            this.div_SubDomain.addChild(obj.name, obj);

            obj = new Combo("cmb_RequestStatus","stc_RequestStatus:8","258","250","20",null,null,null,null,null,null,this.div_SubDomain.form);
            obj.set_taborder("19");
            obj.set_innerdataset("ds_cmm_RequestStatus");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_visible("false");
            this.div_SubDomain.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_SubDomain.form
            obj = new Layout("default","",0,0,this.div_SubDomain.form,function(p){});
            this.div_SubDomain.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",360,520,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_SubDomain.form.edt_SubDomain","value","ds_SubDomain","SUB_DOMAIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_SubDomain.form.cmb_Domain","value","ds_SubDomain","DL_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_SubDomain.form.cmb_ServerIp","value","ds_SubDomain","SIL_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_SubDomain.form.cmb_ServerType","value","ds_SubDomain","SERVER_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_SubDomain.form.txt_Remark","value","ds_SubDomain","REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_SubDomain.form.cmb_RequestStatus","value","ds_SubDomain","REQUEST_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("AR_SubDomainRequestPopup.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("AR_SubDomainRequestPopup.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("AR_SubDomainRequestPopup.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("AR_SubDomainRequestPopup.xfdl","Script::CommGrid.xjs");
        this.registerScript("AR_SubDomainRequestPopup.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 :
        * 02. 화면명   : 서브 도메인 신청서 작성(AR_SubDomainRequestPopup)
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
        this.AR_SubDomainRequestPopup_onload = function(obj,e)
        {
        	this.gfnAddCodeDataset("ds_cmm_ServerType", "SERVER_TYPE");
        	this.gfnAddCodeDataset("ds_cmm_RequestStatus", "SERVER_REQUEST_STATUS");

        	this.gfnCodeTransaction();

        	this.fnSearchServerList();
        	this.fnSearchDomainList();
        	this.gfnCompInit(obj);	//사용자 Grid

        };

        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fnSearchServerList = function ()
        {
        	this.gfnAddOutputDataset("ds_ServerList","ds_ServerList");

        	this.gfnCommonTransaction("fnSearchServerList", "AR_ServerListMM_S01");
        };

        this.fnSearchDomainList = function ()
        {
        	this.gfnAddOutputDataset("ds_Domain","ds_Domain");

        	this.gfnCommonTransaction("fnSearchDomainList", "AR_DomainMM_S01");
        }

        this.fnSearchSubDomain = function ()
        {
        	this.gfnAddSendParameter("SDL_SEQ",this.parent.SDL_SEQ);

        	this.gfnAddOutputDataset("ds_SubDomain","ds_SubDomain");
        	this.gfnAddOutputDataset("ds_Port","ds_Port");
        	this.gfnCommonTransaction("fnSearchSubDomain", "AR_SubDomainRequestPopup_S02");
        }

        this.fnSaveSubDomain = function ()
        {

        	this.gfnAddInputDataset("ds_SubDomain","ds_SubDomain","A");
        	this.gfnAddInputDataset("ds_Port","ds_Port","A");

        	this.gfnCommonTransaction("fnSaveSubDomain", "AR_SubDomainRequestPopup_R01");
        };

        this.portAddRow = function ()
        {
        	var nRow = this.ds_Port.addRow();
        	var nSDL_SEQ = this.ds_SubDomain.getColumn(0,"SDL_SEQ");
        	if(this.gfnIsEmpty(nSDL_SEQ) == false) {
        		this.ds_Port.setColumn(nRow,"SDL_SEQ",nSDL_SEQ);
        	}
        	this.ds_Port.setColumn(nRow,"LB_FLAG","0");
        	this.ds_Port.setColumn(nRow,"REQUEST_STATUS","002");
        	this.ds_Port.setColumn(nRow,"REMARK","");
        };

        this.checkAuth = function() {
        	if(this.commUtil.getFormAuthority(343,1) == true) {
        		if(this.gfnIsEmpty(this.parent.SDL_SEQ)){
        			this.stc_PopupTop.set_text("서브 도메인 생성");
        		} else {
        			this.stc_PopupTop.set_text("서브 도메인 관리");
        		}
        		this.div_SubDomain.form.stc_RequestStatus.set_visible(true);
        		this.div_SubDomain.form.cmb_RequestStatus.set_visible(true);

        		this.div_SubDomain.form.grd_PortList.setCellProperty( "body", 3, "edittype", "combo");
        	} else {
        		this.div_SubDomain.form.txt_Remark.set_height("119px");

        	}
        }

        this.fnValidation = function ()
        {
        	var sSubDomain = this.ds_SubDomain.getColumn(0,"SUB_DOMAIN");
        	var sDlSeq = this.ds_SubDomain.getColumn(0,"DL_SEQ");
        	var sSilSeq = this.ds_SubDomain.getColumn(0,"SIL_SEQ");
        	var sDeptCd = this.ds_SubDomain.getColumn(0,"USE_DEPT_CD");
        	var sDeptNm = this.ds_SubDomain.getColumn(0,"USE_DEPT_NM");
        	var nServerType = this.ds_SubDomain.getColumn(0,"SERVER_TYPE");
        	var nRequestStatus = this.ds_SubDomain.getColumn(0,"REQUEST_STATUS");
        	var sRemark = this.ds_SubDomain.getColumn(0,"REMARK");

        	if(this.gfnIsEmpty(sSubDomain) == true) {
        		this.alert("서브도메인은 필수 입력 항목입니다.");
        		return false;
        	} else if(this.gfnIsEmpty(sDlSeq) == true) {
        		this.alert("도메인은 필수 입력 항목입니다.");
        		return false;
        	} else if(this.gfnIsEmpty(sSilSeq) == true) {
        		this.alert("서버(IP)는 필수 입력 항목입니다.");
        		return false;
        	} else if(this.gfnIsEmpty(nServerType) == true) {
        		this.alert("서버종류는 필수 입력 항목입니다.");
        		return false;
        	} else if(this.gfnIsEmpty(sDeptCd) == true || this.gfnIsEmpty(sDeptNm) == true) {
        		this.alert("사용부서는 필수 입력 항목입니다.");
        		return false;
        	} else if(this.gfnIsEmpty(nServerType) == true) {
        		this.alert("서버종류는 필수 입력 항목입니다.");
        		return false;
        	}

        	if(this.gfnIsEmpty(nRequestStatus) == true) {
        		this.ds_SubDomain.setColumn(0,"REQUEST_STATUS","002");
        	}

        	if(this.gfnIsEmpty(sRemark) == true) {
        		this.ds_SubDomain.setColumn(0,"REMARK","");
        	}

        	for(var i = 0; i < this.ds_Port.rowcount; i++) {
        		var nPortNumber = this.ds_Port.getColumn(i, "PORT_NUMBER");
        		var sProtocol = this.ds_Port.getColumn(i, "PROTOCOL");
        		if(this.gfnIsEmpty(nPortNumber) == true) {
        			this.alert("포트번호는 필수 입력 항목입니다.");
        			return false;
        		} else if(this.gfnIsEmpty(sProtocol) == true) {
        			this.alert("프로토콜은 필수 입력 항목입니다.");
        			return false;
        		}

        	}
        	this.fnSaveSubDomain();
        };

        this.fnCallBack = function(strSvcID, nErrorCode, strErrorMag)
        {
        	switch(strSvcID) {
        	case "gfnGetCode" :
        		this.ds_cmm_RequestStatus.filter("VAL2 == 1");
        		//서버자원관리 화면 권환
        		this.checkAuth();

        		if(this.gfnIsEmpty(this.parent.SDL_SEQ) == true ) {
        			this.ds_SubDomain.clearData();
        			this.ds_SubDomain.addRow();
        			this.ds_Port.clearData();
        			this.ds_SubDomain.setColumn(0,"REQUEST_STATUS","002");
        		} else {
        			this.fnSearchSubDomain();
        		}
        		break;
        	case "fnSearchServerList" :

        		break;
        	case "fnSearchDomainList" :
        		break;
        	case "fnSearchSubDomain" :
        		var nDeptName = this.ds_SubDomain.getColumn(0,"USE_DEPT_NM");
        		this.div_SubDomain.form.stc_ManageDept.set_text(nDeptName);
        		break;
        	case "fnSaveSubDomain" :
        			this.commUtil.popupClose("save");
        		break;

        	default:
        		break;
        	}

        }

        this.fnPopupCallBack = function (popupId, popupArg)
        {
        	popupArg = this.commUtil.popupReturn();
        	switch(popupId)
        	{
        		case "UseDept_Popup":
        			var ds = new Dataset();
        			ds.loadXML(popupArg.toString(), true);
        			if(ds.rowcount > 0)
        			{
        				var nDeptName = ds.getColumn(0,"DEPT_NM");
        				var nDeptCd = ds.getColumn(0,"DEPT_CD");
        				this.div_SubDomain.form.stc_ManageDept.set_text(nDeptName);

        				this.ds_SubDomain.setColumn(0,"USE_DEPT_CD",nDeptCd);
        				this.ds_SubDomain.setColumn(0,"USE_DEPT_NM",nDeptName);
        			}
        			break;
        		default :
        			break;
        	}
        }


        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.div_ServerRequest_btn_ManageDept_onclick = function(obj,e)
        {
        	this.commUtil.popupOrganization(this, "UseDept_Popup", "fnPopupCallBack", "DEPT", null, "1");
        };
        this.btn_Close_onclick = function(obj,e)
        {
        	this.commUtil.popupClose("cancel");
        };

        this.btn_Save_onclick = function(obj,e)
        {
        	this.fnValidation();
        };
        this.div_SubDomain_btn_PortAdd_onclick = function(obj,e)
        {
        	this.portAddRow();
        };

        this.div_SubDomain_btn_PortDel_onclick = function(obj,e)
        {
        	this.ds_Port.deleteRow(this.ds_Port.rowposition);
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
            this.addEventHandler("onload",this.AR_SubDomainRequestPopup_onload,this);
            this.btn_Close.addEventHandler("onclick",this.btn_Close_onclick,this);
            this.stc_PopupBottom.addEventHandler("onclick",this.stc_PopupBottom_onclick,this);
            this.btn_Save.addEventHandler("onclick",this.btn_Save_onclick,this);
            this.btn_ClosePopup.addEventHandler("onclick",this.btn_Close_onclick,this);
            this.div_SubDomain.form.btn_PortDel.addEventHandler("onclick",this.div_SubDomain_btn_PortDel_onclick,this);
            this.div_SubDomain.form.btn_PortAdd.addEventHandler("onclick",this.div_SubDomain_btn_PortAdd_onclick,this);
            this.div_SubDomain.form.btn_ManageDept.addEventHandler("onclick",this.div_ServerRequest_btn_ManageDept_onclick,this);
        };
        this.loadIncludeScript("AR_SubDomainRequestPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
