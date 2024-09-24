(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AR_ServerDomainMM");
            this.set_titletext("서버 자원 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_DomainMMheader","8","8",null,"40","8",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SchList");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search",null,"8","60","22","8",null,null,null,null,null,this.div_DomainMMheader.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_SchText");
            this.div_DomainMMheader.addChild(obj.name, obj);

            obj = new Button("btn_Save",null,"8","55","22","btn_Search:8",null,null,null,null,null,this.div_DomainMMheader.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_tran");
            this.div_DomainMMheader.addChild(obj.name, obj);

            obj = new CheckBox("chk_useOnly","8","8","150","20",null,null,null,null,null,null,this.div_DomainMMheader.form);
            obj.set_taborder("2");
            obj.set_text("사용중인 데이터만 보기");
            obj.set_visible("false");
            this.div_DomainMMheader.addChild(obj.name, obj);

            obj = new Button("btn_ServerListExcel",null,"8","60","22","btn_Save:8",null,null,null,null,null,this.div_DomainMMheader.form);
            obj.set_taborder("3");
            obj.set_text("Excel");
            obj.set_cssclass("btn_WF_Excel");
            this.div_DomainMMheader.addChild(obj.name, obj);

            obj = new Tab("tab_serverDomain","8","div_DomainMMheader:8",null,null,"8","8",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tpg_Server",this.tab_serverDomain);
            obj.set_text("서버 관리");
            obj.set_url("Admin::AR_ServerListMM.xfdl");
            this.tab_serverDomain.addChild(obj.name, obj);

            obj = new Tabpage("tpg_Domain",this.tab_serverDomain);
            obj.set_text("도메인 관리");
            obj.set_url("Admin::AR_DomainListMM.xfdl");
            this.tab_serverDomain.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_DomainMMheader.form
            obj = new Layout("default","",0,0,this.div_DomainMMheader.form,function(p){});
            this.div_DomainMMheader.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_serverDomain.tpg_Server
            obj = new Layout("default","",0,0,this.tab_serverDomain.tpg_Server.form,function(p){});
            this.tab_serverDomain.tpg_Server.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_serverDomain.tpg_Domain
            obj = new Layout("default","",0,0,this.tab_serverDomain.tpg_Domain.form,function(p){});
            this.tab_serverDomain.tpg_Domain.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Admin::AR_ServerListMM.xfdl");
            this._addPreloadList("fdl","Admin::AR_DomainListMM.xfdl");
        };
        
        // User Script
        this.addIncludeScript("AR_ServerDomainMM.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("AR_ServerDomainMM.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("AR_ServerDomainMM.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("AR_ServerDomainMM.xfdl","Script::CommGrid.xjs");
        this.registerScript("AR_ServerDomainMM.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 :
        * 02. 화면명   : 서버 자원 관리(AR_ServerDomainMM)
        * 03. 화면설명 :
        * 04. 작성일   : 2023/12/28
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


        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.comm_select_onclick = function(obj,e)
        {
        	var nTabIndex = this.tab_serverDomain.tabindex;

        	if(nTabIndex == 0) {
        		this.tab_serverDomain.tpg_Server.form.fnSearch();
        	} else if(nTabIndex == 1) {
        		this.tab_serverDomain.tpg_Domain.form.fnSearch();
        	}
        };

        this.comm_save_onclick = function(obj,e)
        {
        	var nTabIndex = this.tab_serverDomain.tabindex;

        	if(nTabIndex == 0) {
        		this.tab_serverDomain.tpg_Server.form.fnServerInfoValidation();
        	} else if(nTabIndex == 1) {
        		this.tab_serverDomain.tpg_Domain.form.fnDomainValidation();
        	}
        };
        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.tab_serverDomain_onchanged = function(obj,e)
        {
        	var nTabIndex = this.tab_serverDomain.tabindex;

        	if(nTabIndex == 0) {
        		if(this.gfnIsEmpty(this.tab_serverDomain.tpg_Server.form.div_ServerList) == false) {
        			this.tab_serverDomain.tpg_Server.form.fnSearch();
        		}
        	} else if(nTabIndex == 1) {
        		if(this.gfnIsEmpty(this.tab_serverDomain.tpg_Domain.form.div_SSL_List) == false) {
        			this.tab_serverDomain.tpg_Domain.form.fnSearch();
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
            this.div_DomainMMheader.form.btn_Search.addEventHandler("onclick",this.comm_select_onclick,this);
            this.div_DomainMMheader.form.btn_Save.addEventHandler("onclick",this.comm_save_onclick,this);
            this.tab_serverDomain.addEventHandler("onchanged",this.tab_serverDomain_onchanged,this);
        };
        this.loadIncludeScript("AR_ServerDomainMM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
