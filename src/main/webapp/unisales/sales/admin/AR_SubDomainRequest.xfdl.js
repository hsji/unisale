(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AR_SubDomainRequest");
            this.set_titletext("서브 도메인 신청");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,620);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Domain", this);
            obj._setContents("<ColumnInfo><Column id=\"DL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DOMAIN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGE_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGE_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"USE_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SubDomain", this);
            obj._setContents("<ColumnInfo><Column id=\"SDL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SERVER_INFO\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_DOMAIN\" type=\"STRING\" size=\"256\"/><Column id=\"SERVER_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQUEST_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"1073741823\"/><Column id=\"INSERT_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PORT_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"PORT_REQUEST_STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_RequestStatus", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_ServerType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_Domain","0","36","500",null,null,"5",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_Domain");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"200\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"일련번호\"/><Cell col=\"1\" text=\"도메인\"/><Cell col=\"2\" text=\"관리부서\"/></Band><Band id=\"body\"><Cell text=\"bind:DL_SEQ\"/><Cell col=\"1\" text=\"bind:DOMAIN_NAME\"/><Cell col=\"2\" text=\"bind:MANAGE_DEPT_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_Domain","0","0","500","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("linear-gradient(to bottom,#f3f3f3,#d9d9d9)");
            obj.set_border("1px solid #c8c8c8");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Domain","8","8","60","20",null,null,null,null,null,null,this.div_Domain.form);
            obj.set_taborder("0");
            obj.set_text("도메인");
            obj.set_cssclass("sta_POP_GroupTit");
            this.div_Domain.addChild(obj.name, obj);

            obj = new Grid("grd_SubDomain","grd_Domain:8","36",null,null,"0","5",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_SubDomain");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"서브도메인\"/><Cell col=\"1\" text=\"서버(IP)\"/><Cell col=\"2\" text=\"서버종류\"/><Cell col=\"3\" text=\"사용부서\"/><Cell col=\"4\" text=\"도메인 신청현황\"/><Cell col=\"5\" text=\"비고\"/><Cell col=\"6\" text=\"포트 번호\"/><Cell col=\"7\" text=\"포트 신청현황\"/></Band><Band id=\"body\"><Cell text=\"bind:SUB_DOMAIN\" suppress=\"1\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:SERVER_INFO\" suppress=\"2\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:SERVER_TYPE\" combodataset=\"ds_cmm_ServerType\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" displaytype=\"combotext\" suppress=\"3\"/><Cell col=\"3\" text=\"bind:USE_DEPT_NM\" suppress=\"4\"/><Cell col=\"4\" text=\"bind:REQUEST_STATUS\" combodataset=\"ds_cmm_RequestStatus\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" displaytype=\"combotext\" suppress=\"5\"/><Cell col=\"5\" text=\"bind:REMARK\" suppress=\"6\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:PORT_NUMBER\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:PORT_REQUEST_STATUS\" combodataset=\"ds_cmm_RequestStatus\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" displaytype=\"combotext\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_SubDomain","div_Domain:8","0",null,null,"0","grd_SubDomain:0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("linear-gradient(to bottom,#f3f3f3,#d9d9d9)");
            obj.set_border("1px solid #c8c8c8");
            this.addChild(obj.name, obj);

            obj = new Static("stc_subDomain","8","8","80","20",null,null,null,null,null,null,this.div_SubDomain.form);
            obj.set_taborder("0");
            obj.set_text("서브도메인");
            obj.set_cssclass("sta_POP_GroupTit");
            this.div_SubDomain.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_Domain.form
            obj = new Layout("default","",0,0,this.div_Domain.form,function(p){});
            this.div_Domain.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_SubDomain.form
            obj = new Layout("default","",0,0,this.div_SubDomain.form,function(p){});
            this.div_SubDomain.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,620,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_Domain.form.cmb_ServerRequestStatus","value","ds_ServerRequestListSearch","REQUEST_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_Domain.form.cmb_ServerRequestDept","value","ds_ServerRequestListSearch","REQUEST_DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_SubDomain.form.cmb_ServerRequestStatus","value","ds_ServerRequestListSearch","REQUEST_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_SubDomain.form.cmb_ServerRequestDept","value","ds_ServerRequestListSearch","REQUEST_DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("AR_SubDomainRequest.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("AR_SubDomainRequest.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("AR_SubDomainRequest.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("AR_SubDomainRequest.xfdl","Script::CommGrid.xjs");
        this.registerScript("AR_SubDomainRequest.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 :
        * 02. 화면명   : 서브 도메인 신청(AR_SubDomainRequest)
        * 03. 화면설명 :
        * 04. 작성일   : 2024/01/19
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
        this.AR_SubDomainRequest_onload = function(obj,e)
        {
        	this.gfnAddCodeDataset("ds_cmm_ServerType", "SERVER_TYPE");
        	this.gfnAddCodeDataset("ds_cmm_RequestStatus", "SERVER_REQUEST_STATUS");

        	this.gfnCodeTransaction();
        	this.gfnCompInit(obj);	//사용자 Grid
        };

        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fnSearch = function ()
        {
        	this.fnSearchDomainList();
        };

        //도메인 목록 조회
        this.fnSearchDomainList = function ()
        {
        	this.gfnAddSendParameter("useYN","1");
        	this.gfnAddOutputDataset("ds_Domain","ds_Domain");

        	this.gfnCommonTransaction("fnSearchDomainList", "AR_DomainListMM_S01");
        }

        //서브 도메인 목록 조회
        this.fnSearchSubDomainList = function ()
        {
        	this.gfnAddOutputDataset("ds_SubDomain","ds_SubDomain");

        	this.gfnCommonTransaction("fnSearchSubDomainList", "AR_SubDomainRequestPopup_S03");
        }

        this.fnCallBack = function(strSvcID, nErrorCode, strErrorMag)
        {
        	{
        		switch(strSvcID)
        		{
        			case "gfnGetCode":
        				this.fnSearchDomainList();
        				break;
        			case "fnSearchDomainList" :
        				this.fnSearchSubDomainList();
        				break;
        			case "fnSearchSubDomainList" :
        				break;
        			default:
        				break;
        		}
        	}
        }

        this.fnPopupCallBack = function (popupId, popupArg)
        {
        	popupArg = this.commUtil.popupReturn();

        	switch(popupArg)
        	{
        		case "save" :
        			this.fnSearchDomainList();
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
        //서브도메인 신청
        //작성 부서 = 유저의 부서일 경우에만 팝업 오픈
        this.tab_ResourceRequest_tpg_Domain_grd_SubDomain_oncelldblclick = function(obj,e)
        {
        	var sInsertDeptCd = this.ds_SubDomain.getColumn(e.row,"INSERT_DEPT_CD");
        	var sLoginUserDeptCd = nexacro.getApplication().gdsUserInfo.getColumn(0,"DEPT_CD");

        	if (sInsertDeptCd == sLoginUserDeptCd) {
        		var nSDL_SEQ = this.ds_SubDomain.getColumn(e.row,"SDL_SEQ");
        		var bManageFlag = false;
        		var sArgument = {SDL_SEQ : nSDL_SEQ,
        						Manage_Flag : bManageFlag};
        		this.commUtil.popup(this, "AR_SubDomainRequestPopup", "Admin::AR_SubDomainRequestPopup.xfdl", -1, -1, 360, 520, true, false, false, sArgument, "fnPopupCallBack");
        	}
        };

        this.ds_Domain_onrowposchanged = function(obj,e)
        {
        	var nDlSeq = this.ds_Domain.getColumn(e.newrow,"DL_SEQ");
        	this.ds_SubDomain.filter("DL_SEQ == '" + nDlSeq+"'");
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
            this.addEventHandler("onload",this.AR_SubDomainRequest_onload,this);
            this.grd_SubDomain.addEventHandler("oncelldblclick",this.tab_ResourceRequest_tpg_Domain_grd_SubDomain_oncelldblclick,this);
            this.ds_Domain.addEventHandler("onrowposchanged",this.ds_Domain_onrowposchanged,this);
        };
        this.loadIncludeScript("AR_SubDomainRequest.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
