(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SC_CompanyTypeSelect");
            this.set_titletext("계약구분 선택");
            this.set_cssclass("frm_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(168,176);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_CompanyType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION_JAP\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION_ENG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CAPTION\">고객사</Col><Col id=\"CODE\">CLIENT</Col><Col id=\"CAPTION_JAP\">パートナ社</Col></Row><Row><Col id=\"CAPTION\">계약처</Col><Col id=\"CODE\">COMPANY</Col><Col id=\"CAPTION_JAP\">契約先</Col></Row><Row><Col id=\"CAPTION\">직접검색</Col><Col id=\"CODE\">ETC</Col><Col id=\"CAPTION_JAP\">直接検索</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_BottomFrame","1",null,null,"37","1","1",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_POP_BtnBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close",null,"10","15","15","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_POP_Cls");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exit",null,null,"60","22","8","8",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_tran");
            obj.getSetter("TL_SEQ").set("59");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Confirm",null,null,"60","22","76","8",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_tran");
            obj.set_defaultbutton("true");
            obj.getSetter("TL_SEQ").set("113");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_CompanyType","16","44",null,null,"16","55",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_CompanyType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_columncount("1");
            obj.getSetter("TL_FLAG").set("1");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","8","5","117","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("회사선택");
            obj.set_color("white");
            obj.set_cssclass("sta_POP_Title");
            obj.getSetter("TL_SEQ").set("135");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",168,176,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SC_CompanyTypeSelect.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("SC_CompanyTypeSelect.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("SC_CompanyTypeSelect.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("SC_CompanyTypeSelect.xfdl","Script::CommGrid.xjs");
        this.registerScript("SC_CompanyTypeSelect.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분	 	: xxx
        * 02. 화면명		: xxx
        * 03. 화면설명 		: xxx
        * 04. 작성일   	: 2018.xx.xx
        * 05. 작성자   	: xxx
        * 06. 수정이력 	:
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
        * FORM 영역 EVENT 영역
        ************************************************************************************************/

        this.SC_CompanyTypeSelect_onload = function(obj,e)
        {
        	this.gfnCompInit(obj);  	// Grid 공통함수 호출
        	this.fnInitForm();
        };

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.btn_Exit_onclick = function(obj,e)
        {
        	this.commUtil.popupClose("cancel");
        };

        this.btn_Close_onclick = function(obj,e)
        {
        	this.commUtil.popupClose("cancel");
        };

        this.btn_Confirm_onclick = function(obj,e)
        {
        	switch (this.rdo_CompanyType.value)
        	{
        		case "CLIENT":
        			var sArgument = {COMPANY_CODE:this.parent.CLIENT_CODE, TAB_INDEX:3, MODE:"E"};
        			this.commUtil.popup(this, "CompanyReg", "Sales::SC_CompanyReg.xfdl", -1, -1, null, null, true, true, false, sArgument, "fnPopupCallBack");

        			break;
        		case "COMPANY":
        			var sArgument = {COMPANY_CODE:this.parent.COMPANY_CODE, TAB_INDEX:3, MODE:"E"};
        			this.commUtil.popup(this, "CompanyReg", "Sales::SC_CompanyReg.xfdl", -1, -1, null, null, true, true, false, sArgument, "fnPopupCallBack");

        			break;
        		case "ETC":
        			this.commUtil.popupCompanySearch(this, "CompanySearch", "fnPopupCallBack", sArgument);
        			break;
        	}
        };

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.fnInitForm = function()
        {
        	if(this.parent.hasOwnProperty("TAB_INDEX")) {
        		if(!this.gfnIsEmpty(this.parent.TAB_INDEX)){
        			this.tab_Info.set_tabindex(this.parent.TAB_INDEX);
        		}
        	}
        }

        this.fnPopupCallBack = function (popupId, popupArg)
        {
        	popupArg = this.commUtil.popupReturn();
        	if(this.gfnIsEmpty(popupArg) || popupArg=="cancel" || popupArg=="close") {
        		this.commUtil.popupClose("cancel");
        	}

        	switch(popupId)
        	{
        		case "CompanyReg":		// 담당자
        			this.commUtil.popupClose(popupArg);
        			break;
        		case "CompanySearch":	//회사선택
        			var ds = new nexacro.Dataset();
        			ds.loadXML(popupArg);
        			var sArgument = {COMPANY_CODE:ds.getColumn(0, "COMPANY_CODE"), TAB_INDEX:3, MODE:"E"};
        			this.commUtil.popup(this, "CompanyReg", "Sales::SC_CompanyReg.xfdl", -1, -1, null, null, true, true, false, sArgument, "fnPopupCallBack");
        		default:
        			break;
        	}
        }
        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fnGetCode = function()
        {
        // 	this.gfnAddCodeDataset("ds_CD_CONTRACT_TYPE", "CONTRACT_TYPE");
        // 	this.gfnCodeTransaction();
        }


        this.fnCallBack = function(strSvcID, nErrorCode, strErrorMag)
        {
        	// 에러 예외처리
        	if(nErrorCode != 0)
        	{
        		return;
        	}
        	else
        	{
        // 		if(strSvcID=="gfnGetCode")
        // 		{
        // 			if(this.parent.hasOwnProperty("sFilterExpr"))
        // 			{
        // 				this.ds_CD_CONTRACT_TYPE.set_enableevent(false);
        // 				var sExpr = this.parent.sFilterExpr;
        // 				this.ds_CD_CONTRACT_TYPE.filter(sExpr);
        // 				this.ds_CD_CONTRACT_TYPE.set_enableevent(true);
        // 			}
        //
        //
        // 			if(this.ds_CD_CONTRACT_TYPE.getRowCount() > 0)
        // 			{
        // 				this.rdo_CompanyType.set_index(0);
        // 			}
        // 			this.rdo_CompanyType.setFocus();
        // 		}
        	}
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SC_CompanyTypeSelect_onload,this);
            this.btn_Close.addEventHandler("onclick",this.btn_Close_onclick,this);
            this.btn_Exit.addEventHandler("onclick",this.btn_Exit_onclick,this);
            this.btn_Confirm.addEventHandler("onclick",this.btn_Confirm_onclick,this);
        };
        this.loadIncludeScript("SC_CompanyTypeSelect.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
