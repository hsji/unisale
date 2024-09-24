(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AR_ServerRequest");
            this.set_titletext("서버 생성 신청");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,620);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_ServerEstimate", this);
            obj._setContents("<ColumnInfo><Column id=\"SRL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SERVER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SERVER_NAME_ALIAS\" type=\"STRING\" size=\"256\"/><Column id=\"PLATFORM_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"OS\" type=\"STRING\" size=\"256\"/><Column id=\"CPU\" type=\"STRING\" size=\"256\"/><Column id=\"RAM\" type=\"STRING\" size=\"256\"/><Column id=\"DISK_TYPE_1\" type=\"STRING\" size=\"256\"/><Column id=\"DISK_VOLUME_1\" type=\"STRING\" size=\"256\"/><Column id=\"DISK_TYPE_2\" type=\"STRING\" size=\"256\"/><Column id=\"DISK_VOLUME_2\" type=\"STRING\" size=\"256\"/><Column id=\"DISK_TYPE_3\" type=\"STRING\" size=\"256\"/><Column id=\"DISK_VOLUME_3\" type=\"STRING\" size=\"256\"/><Column id=\"MONTHLY_PAYMENT\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_DOC\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGE_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGE_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQUEST_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("ds_ServerApproval", this);
            obj._setContents("<ColumnInfo><Column id=\"SRL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SERVER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SERVER_NAME_ALIAS\" type=\"STRING\" size=\"256\"/><Column id=\"PLATFORM_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"OS\" type=\"STRING\" size=\"256\"/><Column id=\"CPU\" type=\"STRING\" size=\"256\"/><Column id=\"RAM\" type=\"STRING\" size=\"256\"/><Column id=\"DISK_TYPE_1\" type=\"STRING\" size=\"256\"/><Column id=\"DISK_VOLUME_1\" type=\"STRING\" size=\"256\"/><Column id=\"DISK_TYPE_2\" type=\"STRING\" size=\"256\"/><Column id=\"DISK_VOLUME_2\" type=\"STRING\" size=\"256\"/><Column id=\"DISK_TYPE_3\" type=\"STRING\" size=\"256\"/><Column id=\"DISK_VOLUME_3\" type=\"STRING\" size=\"256\"/><Column id=\"MONTHLY_PAYMENT\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_DOC\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGE_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGE_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQUEST_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ServerList", this);
            obj._setContents("<ColumnInfo><Column id=\"SIL_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SERVER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SERVER_NAME_ALIAS\" type=\"STRING\" size=\"256\"/><Column id=\"PUBLIC_IP\" type=\"STRING\" size=\"256\"/><Column id=\"PRIVATE_IP\" type=\"STRING\" size=\"256\"/><Column id=\"USE_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"FILE_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"PLATFORM_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGE_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGE_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MAINTENANCE_FLAG\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_EstimateRequest","0","0",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("linear-gradient(to bottom,#f3f3f3,#d9d9d9)");
            obj.set_border("1px solid #c8c8c8");
            this.addChild(obj.name, obj);

            obj = new Static("stc_EstimateRequest","8","8","126","22",null,null,null,null,null,null,this.div_EstimateRequest.form);
            obj.set_taborder("0");
            obj.set_text("견적 대기 ");
            obj.set_cssclass("sta_POP_GroupTit");
            this.div_EstimateRequest.addChild(obj.name, obj);

            obj = new Grid("grd_EstimateRequest","0","div_EstimateRequest:0",null,"145","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_ServerEstimate");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"일련번호\"/><Cell col=\"1\" text=\"서버명\"/><Cell col=\"2\" text=\"서버 ALIAS\"/><Cell col=\"3\" text=\"플랫폼\"/><Cell col=\"4\" text=\"OS\"/><Cell col=\"5\" text=\"CPU\"/><Cell col=\"6\" text=\"RAM\"/><Cell col=\"7\" text=\"디스크1\"/><Cell col=\"8\" text=\"디스크2\"/><Cell col=\"9\" text=\"디스크3\"/><Cell col=\"10\" text=\"관리부서\"/><Cell col=\"11\" text=\"비고\"/><Cell col=\"12\"/></Band><Band id=\"body\"><Cell text=\"bind:SRL_SEQ\"/><Cell col=\"1\" text=\"bind:SERVER_NAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:SERVER_NAME_ALIAS\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PLATFORM_TYPE\" displaytype=\"combotext\" combodataset=\"ds_cmm_Platform\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/><Cell col=\"4\" text=\"bind:OS\" displaytype=\"combotext\" combodataset=\"ds_cmm_Os\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/><Cell col=\"5\" text=\"expr:dataset.getColumn(currow,&apos;CPU&apos;) + &apos; Core&apos;\" maskedittype=\"string\"/><Cell col=\"6\" text=\"expr:dataset.getColumn(currow,&apos;RAM&apos;) + &apos; GB&apos;\"/><Cell col=\"7\" text=\"expr:dataset.getColumn(currow,&apos;DISK_VOLUME_1&apos;) + &apos; GB&apos;\"/><Cell col=\"8\" text=\"expr:dataset.getColumn(currow,&apos;DISK_VOLUME_2&apos;) + &apos; GB&apos;\"/><Cell col=\"9\" text=\"expr:dataset.getColumn(currow,&apos;DISK_VOLUME_3&apos;) + &apos; GB&apos;\"/><Cell col=\"10\" text=\"bind:MANAGE_DEPT_NM\"/><Cell col=\"11\" text=\"bind:REMARK\"/><Cell col=\"12\" text=\"수정\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_ApprovalRequest","0","grd_EstimateRequest:8",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_background("linear-gradient(to bottom,#f3f3f3,#d9d9d9)");
            obj.set_border("1px solid #c8c8c8");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ApprovalRequest","8","8","126","22",null,null,null,null,null,null,this.div_ApprovalRequest.form);
            obj.set_taborder("0");
            obj.set_text("결재 대기");
            obj.set_cssclass("sta_POP_GroupTit");
            this.div_ApprovalRequest.addChild(obj.name, obj);

            obj = new Grid("grd_ApprovalRequest","0","div_ApprovalRequest:0",null,"145","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_ServerApproval");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"205\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"190\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"일련번호\"/><Cell col=\"1\" text=\"서버명\"/><Cell col=\"2\" text=\"서버 ALIAS\"/><Cell col=\"3\" text=\"플랫폼\"/><Cell col=\"4\" text=\"OS\"/><Cell col=\"5\" text=\"CPU\"/><Cell col=\"6\" text=\"RAM\"/><Cell col=\"7\" text=\"월 납입금\"/><Cell col=\"8\" text=\"관리부서\"/><Cell col=\"9\" text=\"비고\"/><Cell col=\"10\"/></Band><Band id=\"body\"><Cell text=\"bind:SRL_SEQ\"/><Cell col=\"1\" text=\"bind:SERVER_NAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:SERVER_NAME_ALIAS\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PLATFORM_TYPE\" displaytype=\"combotext\" combodataset=\"ds_cmm_Platform\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/><Cell col=\"4\" text=\"bind:OS\" combodataset=\"ds_cmm_Os\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/><Cell col=\"5\" text=\"expr:dataset.getColumn(currow,&apos;CPU&apos;) + &apos; Core&apos;\"/><Cell col=\"6\" text=\"expr:dataset.getColumn(currow,&apos;RAM&apos;) + &apos; GB&apos;\"/><Cell col=\"7\" text=\"bind:MONTHLY_PAYMENT\" maskeditpostfixtext=\"원\"/><Cell col=\"8\" text=\"bind:MANAGE_DEPT_NM\"/><Cell col=\"9\" text=\"bind:REMARK\"/><Cell col=\"10\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"결재문서 작성\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_ActivateServer","0","grd_ApprovalRequest:8",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("linear-gradient(to bottom,#f3f3f3,#d9d9d9)");
            obj.set_border("1px solid #c8c8c8");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ActivateServer","8","8","121","20",null,null,null,null,null,null,this.div_ActivateServer.form);
            obj.set_taborder("0");
            obj.set_text("사용중인 서버 목록");
            obj.set_cssclass("sta_POP_GroupTit");
            this.div_ActivateServer.addChild(obj.name, obj);

            obj = new Grid("grd_ActivateServer","0","div_ActivateServer:0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_ServerList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"205\"/><Column size=\"200\"/><Column size=\"140\"/><Column size=\"140\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"일련번호\"/><Cell col=\"1\" text=\"서버 명\"/><Cell col=\"2\" text=\"서버 ALIAS \"/><Cell col=\"3\" text=\"공인 IP\"/><Cell col=\"4\" text=\"내부 IP\"/><Cell col=\"5\" text=\"플랫폼\"/><Cell col=\"6\" text=\"관리부서\"/><Cell col=\"7\" text=\"관련 서브도메인\"/></Band><Band id=\"body\"><Cell text=\"bind:SIL_SEQ\"/><Cell col=\"1\" text=\"bind:SERVER_NAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:SERVER_NAME_ALIAS\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PUBLIC_IP\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:PRIVATE_IP\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:PLATFORM_TYPE\" displaytype=\"combotext\" combodataset=\"ds_cmm_Platform\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/><Cell col=\"6\" text=\"bind:MANAGE_DEPT_NM\"/><Cell col=\"7\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"보기\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_EstimateRequest.form
            obj = new Layout("default","",0,0,this.div_EstimateRequest.form,function(p){});
            this.div_EstimateRequest.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_ApprovalRequest.form
            obj = new Layout("default","",0,0,this.div_ApprovalRequest.form,function(p){});
            this.div_ApprovalRequest.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_ActivateServer.form
            obj = new Layout("default","",0,0,this.div_ActivateServer.form,function(p){});
            this.div_ActivateServer.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,620,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_EstimateRequest.form.cmb_ServerRequestStatus","value","ds_ServerRequestListSearch","REQUEST_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_EstimateRequest.form.cmb_ServerRequestDept","value","ds_ServerRequestListSearch","REQUEST_DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_ActivateServer.form.cmb_ServerListUse","value","ds_ServerListSearch","USE_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_ActivateServer.form.cmb_ServerListManageDept","value","ds_ServerListSearch","MANAGE_DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_ActivateServer.form.cmb_ServerListPlatform","value","ds_ServerListSearch","PLATFORM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_ApprovalRequest.form.cmb_ServerRequestStatus","value","ds_ServerRequestListSearch","REQUEST_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_ApprovalRequest.form.cmb_ServerRequestDept","value","ds_ServerRequestListSearch","REQUEST_DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("AR_ServerRequest.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("AR_ServerRequest.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("AR_ServerRequest.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("AR_ServerRequest.xfdl","Script::CommGrid.xjs");
        this.registerScript("AR_ServerRequest.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 :
        * 02. 화면명   : 서버 생성 신청(AR_ServerRequest)
        * 03. 화면설명 :
        * 04. 작성일   : 2024/01/18
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
        this.fvLoginUserDeptCd = nexacro.getApplication().gdsGlobal.getColumn(0,"DEPT_CD");
        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/
        this.AR_ServerRequest_onload = function(obj,e)
        {
        	this.gfnAddCodeDataset("ds_cmm_Platform", "SERVER_PLATFORM_TYPE");
        	this.gfnAddCodeDataset("ds_cmm_Os", "SERVER_OS_TYPE");
        	this.gfnAddCodeDataset("ds_cmm_Disk", "SERVER_DISK_TYPE");

        	this.gfnCodeTransaction();
        	this.gfnCompInit(obj);	//사용자 Grid
        	this.fnSearch();
        };
        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fnSearch = function () {
        	this.fnSearchEstimateRequest();
        	this.fnSearchApprovalRequest();
        	this.fnSearchServerList();
        }

        //견적 대기 조회(유저의 부서에서 올린 견적서만)
        this.fnSearchEstimateRequest = function () {
        	this.gfnAddSendParameter("LOGIN_USER_DEPT", this.fvLoginUserDeptCd);
        	this.gfnAddSendParameter("REQUEST_STATUS","001");

        	this.gfnAddOutputDataset("ds_ServerEstimate","ds_ServerRequest");

        	this.gfnCommonTransaction("fnSearchEstimateRequest", "AR_ServerRequest_S01");
        }

        //결재 대기 조회(유저의 부서에서 올린 견적서만)
        this.fnSearchApprovalRequest = function () {
        	this.gfnAddSendParameter("LOGIN_USER_DEPT", this.fvLoginUserDeptCd);
        	this.gfnAddSendParameter("REQUEST_STATUS","003");

        	this.gfnAddOutputDataset("ds_ServerApproval","ds_ServerRequest");

        	this.gfnCommonTransaction("fnSearchApprovalRequest", "AR_ServerRequest_S01");
        }

        //유저의 부서가 사용중인 서버 조회
        this.fnSearchServerList = function ()
        {
        	var sLoginUserDeptCd = nexacro.getApplication().gdsUserInfo.getColumn(0,"DEPT_CD");
        	this.gfnAddSendParameter("useYN", "1");
        	this.gfnAddSendParameter("manageDept", sLoginUserDeptCd);

        	this.gfnAddOutputDataset("ds_ServerList","ds_ServerList");

        	this.gfnCommonTransaction("fnSearchServerList", "AR_ServerListMM_S01");
        };

        this.fnCallBack = function(strSvcID, nErrorCode, strErrorMag)
        {
        	{
        		switch(strSvcID)
        		{
        			case "gfnGetCode" :
        				break;
        			case "fnSearchEstimateRequest" :
        				break;
        			case "fnSearchApprovalRequest" :
        				break;
        			case "fnSearchServerList" :
        				break;
        			default:
        				break;
        		}
        	}
        }

        // (팝업화면명) 에서 정보 받은것을 가공할 때 사용.
        this.fnPopupCallBack = function (popupId, popupArg)
        {
        	popupArg = this.commUtil.popupReturn();

        	switch(popupArg)
        	{
        		case "save" :
        			this.fnSearch();
        			break;
        		case "close" :
        			break;
        		default:
        			break;
        	}
        }
        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        //견적서 수정
        this.grd_ServerRequest_oncellclick = function(obj,e)
        {
        	if(e.cell == 12)
        	{
        		var nSRL_SEQ = this.ds_ServerEstimate.getColumn(e.row,"SRL_SEQ");
        		var sArgument = {SRL_SEQ : nSRL_SEQ};
        		this.commUtil.popup(this, "AR_ServerEstimateRequestPopup", "Admin::AR_ServerEstimateRequestPopup.xfdl", -1, -1, 360, 480, true, false, false, sArgument, "fnPopupCallBack");
        	}
        };

        //관련 서브도메인 보기
        this.grd_ServerList_oncellclick = function(obj,e)
        {
        	if(e.cell == 7)
        	{
        		var nSIL_SEQ = this.ds_ServerList.getColumn(e.row,"SIL_SEQ");
        		if(this.gfnIsEmpty(nSIL_SEQ) == true) {
        			return;
        		}
        		var sArgument = {SIL_SEQ : nSIL_SEQ};
        		this.commUtil.popup(this, "AR_RelatedSubDomainListPopup", "Admin::AR_RelatedSubDomainListPopup.xfdl", -1, -1, 360, 480, true, false, false, sArgument, "fnPopupCallBack");
        	}
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
            this.addEventHandler("onload",this.AR_ServerRequest_onload,this);
            this.grd_EstimateRequest.addEventHandler("oncellclick",this.grd_ServerRequest_oncellclick,this);
            this.div_ActivateServer.form.stc_ActivateServer.addEventHandler("onclick",this.div_ServerList_stc_ServerServerList_onclick,this);
            this.grd_ActivateServer.addEventHandler("oncellclick",this.grd_ServerList_oncellclick,this);
        };
        this.loadIncludeScript("AR_ServerRequest.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
