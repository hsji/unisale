(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AR_RelatedSubDomainListPopup");
            this.set_titletext("관련 서브도메인 목록");
            this.set_cssclass("frm_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(360,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_SubDomain", this);
            obj._setContents("<ColumnInfo><Column id=\"SUB_DOMAIN\" type=\"STRING\" size=\"256\"/><Column id=\"DOMAIN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USE_DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_PopupTop","8","8","136","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("관련 서브도메인 목록");
            obj.set_cssclass("sta_POP_Title");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close",null,"8","15","15","8",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_POP_Cls");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_PopupBottom","0",null,null,"40","0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_POP_BtnBg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ClosePopup",null,null,"55","22","8","8",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Div("div_RelatedSubDomainList","4","stc_PopupTop:12",null,null,"4","stc_PopupBottom:4",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_detailBg");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_RelatedSubDomainList","8","8",null,null,"8","8",null,null,null,null,this.div_RelatedSubDomainList.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_SubDomain");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"서브 도메인\"/><Cell col=\"1\" text=\"도메인\"/><Cell col=\"2\" text=\"사용부서\"/></Band><Band id=\"body\"><Cell text=\"bind:SUB_DOMAIN\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:DOMAIN_NAME\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:USE_DEPT_NM\" displaytype=\"normal\" edittype=\"none\"/></Band></Format></Formats>");
            this.div_RelatedSubDomainList.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_RelatedSubDomainList.form
            obj = new Layout("default","",0,0,this.div_RelatedSubDomainList.form,function(p){});
            this.div_RelatedSubDomainList.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",360,480,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_RelatedSubDomainList.form.edt_ServerName","value","ds_ServerRequest","SERVER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_RelatedSubDomainList.form.edt_ServerAlias","value","ds_ServerRequest","SERVER_NAME_ALIAS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_RelatedSubDomainList.form.cmb_Platform","value","ds_ServerRequest","PLATFORM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_RelatedSubDomainList.form.cmb_OS","value","ds_ServerRequest","OS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_RelatedSubDomainList.form.medt_CPU","value","ds_ServerRequest","CPU");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_RelatedSubDomainList.form.medt_Ram","value","ds_ServerRequest","RAM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_RelatedSubDomainList.form.cmb_Disk_Type_1","value","ds_ServerRequest","DISK_TYPE_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_RelatedSubDomainList.form.medt_Disk_Volume_1","value","ds_ServerRequest","DISK_VOLUME_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_RelatedSubDomainList.form.cmb_Disk_Type_2","value","ds_ServerRequest","DISK_TYPE_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_RelatedSubDomainList.form.medt_Disk_Volume_2","value","ds_ServerRequest","DISK_VOLUME_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_RelatedSubDomainList.form.cmb_Manage_Dept","value","ds_ServerRequest","MANAGE_DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("AR_RelatedSubDomainListPopup.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("AR_RelatedSubDomainListPopup.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("AR_RelatedSubDomainListPopup.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("AR_RelatedSubDomainListPopup.xfdl","Script::CommGrid.xjs");
        this.registerScript("AR_RelatedSubDomainListPopup.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 :
        * 02. 화면명   : 관련 서브도메인 목록(AR_RelatedSubDomainListPopup)
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
        this.AR_RelatedSubDomainListPopup_onload = function(obj,e)
        {
        	this.fnSearchRelatedSubDomain();
        };

        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        //관련 서브도메인 조회
        this.fnSearchRelatedSubDomain = function () {
        	this.gfnAddSendParameter("SIL_SEQ",this.parent.SIL_SEQ);

        	this.gfnAddOutputDataset("ds_SubDomain","ds_SubDomain");

        	this.gfnCommonTransaction("fnSearchRelatedSubDomain", "AR_ServerListMM_S03");
        }

        this.fnCallBack = function(strSvcID, nErrorCode, strErrorMag)
        {
        	{
        		switch(strSvcID)
        		{
        			case "fnSearchRelatedSubDomain":
        				break;
        			default:
        				break;
        		}
        	}
        }
        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.btn_Close_onclick = function(obj,e)
        {
        	this.commUtil.popupClose("cancel");
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
            this.addEventHandler("onload",this.AR_RelatedSubDomainListPopup_onload,this);
            this.btn_Close.addEventHandler("onclick",this.btn_Close_onclick,this);
            this.stc_PopupBottom.addEventHandler("onclick",this.stc_PopupBottom_onclick,this);
            this.btn_ClosePopup.addEventHandler("onclick",this.btn_Close_onclick,this);
        };
        this.loadIncludeScript("AR_RelatedSubDomainListPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
