(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AR_ServerDomainRequest");
            this.set_titletext("서버 자원 신청");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_ResourceRequest","8","8",null,"40","8",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SchList");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search",null,"8","60","22","8",null,null,null,null,null,this.div_ResourceRequest.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_SchText");
            this.div_ResourceRequest.addChild(obj.name, obj);

            obj = new Button("btn_Add",null,"8","55","22","btn_Search:8",null,null,null,null,null,this.div_ResourceRequest.form);
            obj.set_taborder("1");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_tran");
            this.div_ResourceRequest.addChild(obj.name, obj);

            obj = new Tab("tab_ResourceRequest","8","div_ResourceRequest:8",null,null,"8","8",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tpg_Server",this.tab_ResourceRequest);
            obj.set_text("서버");
            obj.set_url("Admin::AR_ServerRequest.xfdl");
            this.tab_ResourceRequest.addChild(obj.name, obj);

            obj = new Tabpage("tpg_SubDomain",this.tab_ResourceRequest);
            obj.set_text("서브도메인");
            obj.set_url("Admin::AR_SubDomainRequest.xfdl");
            this.tab_ResourceRequest.addChild(obj.name, obj);

            obj = new Tabpage("tpg_SSL",this.tab_ResourceRequest);
            obj.set_text("SSL 인증서");
            obj.set_url("Admin::AR_SslCertList.xfdl");
            this.tab_ResourceRequest.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_ResourceRequest.form
            obj = new Layout("default","",0,0,this.div_ResourceRequest.form,function(p){});
            this.div_ResourceRequest.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_ResourceRequest.tpg_Server
            obj = new Layout("default","",0,0,this.tab_ResourceRequest.tpg_Server.form,function(p){});
            this.tab_ResourceRequest.tpg_Server.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_ResourceRequest.tpg_SubDomain
            obj = new Layout("default","",0,0,this.tab_ResourceRequest.tpg_SubDomain.form,function(p){});
            this.tab_ResourceRequest.tpg_SubDomain.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_ResourceRequest.tpg_SSL
            obj = new Layout("default","",0,0,this.tab_ResourceRequest.tpg_SSL.form,function(p){});
            this.tab_ResourceRequest.tpg_SSL.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","div_ResourceRequest.form.cmb_RequestStatus","value","ds_Search","REQUEST_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Admin::AR_ServerRequest.xfdl");
            this._addPreloadList("fdl","Admin::AR_SubDomainRequest.xfdl");
            this._addPreloadList("fdl","Admin::AR_SslCertList.xfdl");
        };
        
        // User Script
        this.addIncludeScript("AR_ServerDomainRequest.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("AR_ServerDomainRequest.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("AR_ServerDomainRequest.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("AR_ServerDomainRequest.xfdl","Script::CommGrid.xjs");
        this.registerScript("AR_ServerDomainRequest.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 :
        * 02. 화면명   : 서버 자원 요청(AR_ServerResourceRequest)
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
        this.AR_ServerResourceRequest_onload = function(obj,e)
        {

        };
        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fnCallBack = function(strSvcID, nErrorCode, strErrorMag)
        {
        	{
        		switch(strSvcID)
        		{
        			case "gfnGetCode":
        				break;
        			default:
        				break;
        		}
        	}
        }

        this.fnAuth = function(nTabIndex)
        {
        	if(nTabIndex == 2) {
        		this.div_ResourceRequest.form.btn_Add.set_visible(false);
        	} else {
        		this.div_ResourceRequest.form.btn_Add.set_visible(true);
        	}
        }
        // (팝업화면명) 에서 정보 받은것을 가공할 때 사용.
        this.fnPopupCallBack = function (popupId, popupArg)
        {
        	popupArg = this.commUtil.popupReturn();

        	switch(popupArg)
        	{
        		case "save" :
        			var nTabIndex = this.tab_ResourceRequest.tabindex;
        			if(nTabIndex == 0) {
        				this.tab_ResourceRequest.tpg_Server.form.fnSearch();
        			} else if(nTabIndex == 1) {
        				this.tab_ResourceRequest.tpg_SubDomain.form.fnSearch();
        			}
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
        //탭페이지별 신규 등록
        this.div_ResourceRequestMM_btn_Add_onclick = function(obj,e)
        {
        	var nTabIndex = this.tab_ResourceRequest.tabindex;
        	var sArgument = {};
        	if (nTabIndex == 0) {
        		this.commUtil.popup(this, "AR_ServerEstimateRequestPopup", "Admin::AR_ServerEstimateRequestPopup.xfdl", -1, -1, 360, 480, true, false, false, sArgument, "fnPopupCallBack");
        	} else if(nTabIndex == 1) {
        		this.commUtil.popup(this, "AR_SubDomainRequestPopup", "Admin::AR_SubDomainRequestPopup.xfdl", -1, -1, 360, 520, true, false, false, sArgument, "fnPopupCallBack");
        	}
        };
        //탭페이지별 조회
        this.comm_select_onclick = function(obj,e)
        {
        	var nTabIndex = this.tab_ResourceRequest.tabindex;
        	if(nTabIndex == 0) {
        		this.tab_ResourceRequest.tpg_Server.form.fnSearch();
        	} else if(nTabIndex == 1) {
        		this.tab_ResourceRequest.tpg_SubDomain.form.fnSearch();
        	} else if(nTabIndex == 2) {
        		this.tab_ResourceRequest.tpg_SSL.form.fnSearch();
        	}
        };
        //탭페이지별 조회
        //onload 이후에만 작동하도록 컴포넌트 생성여부 체크
        this.tab_ResourceRequest_onchanged = function(obj,e)
        {
        	var nTabIndex = this.tab_ResourceRequest.tabindex;
        	this.fnAuth(nTabIndex);
        	if(nTabIndex == 0) {
        		if(this.gfnIsEmpty(this.tab_ResourceRequest.tpg_Server.form.div_ActivateServer) == false) {
        			this.tab_ResourceRequest.tpg_Server.form.fnSearch();
        		}
        	} else if(nTabIndex == 1) {
        		if(this.gfnIsEmpty(this.tab_ResourceRequest.tpg_SubDomain.form.div_SubDomain) == false) {
        			this.tab_ResourceRequest.tpg_SubDomain.form.fnSearch();
        		}
        	} else if(nTabIndex == 2) {
        		if(this.gfnIsEmpty(this.tab_ResourceRequest.tpg_SSL.form.div_SslCertList) == false) {
        			this.tab_ResourceRequest.tpg_SSL.form.fnSearch();
        		}
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
            this.addEventHandler("onload",this.AR_ServerResourceRequest_onload,this);
            this.div_ResourceRequest.form.btn_Search.addEventHandler("onclick",this.comm_select_onclick,this);
            this.div_ResourceRequest.form.btn_Add.addEventHandler("onclick",this.div_ResourceRequestMM_btn_Add_onclick,this);
            this.tab_ResourceRequest.addEventHandler("onchanged",this.tab_ResourceRequest_onchanged,this);
        };
        this.loadIncludeScript("AR_ServerDomainRequest.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
