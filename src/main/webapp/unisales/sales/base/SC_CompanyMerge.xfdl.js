(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SC_CompanyMerge");
            this.set_titletext("회사 병합");
            this.set_cssclass("frm_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,475);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsInput", this);
            obj._setContents("<ColumnInfo><Column id=\"SOURCE_COMPANY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"TARGET_COMPANY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"TARGET_COMPANY_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"SOURCE_COMPANY_CODE\" type=\"string\" size=\"20\"/><Column id=\"SOURCE_COMPANY_NAME\" type=\"string\" size=\"100\"/><Column id=\"TARGET_COMPANY_CODE\" type=\"string\" size=\"20\"/><Column id=\"TARGET_COMPANY_NAME\" type=\"string\" size=\"100\"/><Column id=\"INSERT_DATE\" type=\"datetime\" size=\"23\"/><Column id=\"INSERT_EMP_NO\" type=\"string\" size=\"60\"/><Column id=\"INSERT_EMP_NAME\" type=\"string\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_Close",null,"8","15","15","11",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_POP_Cls");
            obj.set_text("");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_BottomFrame","2",null,null,"35","1","1",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_BtnBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","8","5","164","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("회사 병합");
            obj.set_color("white");
            obj.set_cssclass("sta_POP_Title ");
            obj.getSetter("TL_SEQ").set("2272");
            this.addChild(obj.name, obj);

            obj = new Static("stc_CompanyReg1","4","39",null,null,"4","467",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_detailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_SourceCompany","12","50","104","22",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Source Company");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_detailLbl01");
            this.addChild(obj.name, obj);

            obj = new Static("stc_TargetCompany","12","100","104","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Target Company");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_detailLbl01");
            this.addChild(obj.name, obj);

            obj = new Div("div_SourceCompany","200","50",null,"22","12",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.getSetter("kind").set("COMPANY");
            obj.set_async("false");
            obj.getSetter("mode").set("");
            obj.set_url("Common::COM_Search.xfdl");
            obj.getSetter("user_onchanged").set("fn_SetCompanyCode");
            this.addChild(obj.name, obj);

            obj = new Static("stc_SourceCompany00","322","div_SourceCompany:8","44","12",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_detailLbl01");
            obj.set_background("url(\'theme://images/btn_WF_SchOpen2.png\') no-repeat center center");
            this.addChild(obj.name, obj);

            obj = new Div("div_TargetCompany","200","stc_SourceCompany00:8",null,"22","12",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.getSetter("kind").set("COMPANY");
            obj.set_async("false");
            obj.getSetter("mode").set("");
            obj.set_url("Common::COM_Search.xfdl");
            obj.getSetter("user_onchanged").set("fn_SetCompanyCode");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Cancel",null,null,"60","22","8","8",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_cancel");
            obj.getSetter("TL_SEQ").set("59");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Save",null,null,"60","22","btn_Cancel:8","8",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_tran");
            obj.getSetter("TL_SEQ").set("115");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_SourceCompany","120","50","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_TargetCompany","120","100","80","22",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_GbSalesProd1","4","137",null,"32","4",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_POP_GroupBg");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_ContractList","4","stc_GbSalesProd1:0",null,null,"4","40",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_autofittype("col");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"170\"/><Column size=\"170\"/><Column size=\"70\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"원본\" TL_SEQ=\"2277\"/><Cell col=\"1\" text=\"변경\" TL_SEQ=\"1953\"/><Cell col=\"2\" text=\"병합일자\" TL_SEQ=\"2278\"/><Cell col=\"3\" text=\"작업자\" TL_SEQ=\"254\"/></Band><Band id=\"body\"><Cell text=\"bind:SOURCE_COMPANY_NAME\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:TARGET_COMPANY_NAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:INSERT_DATE\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\"/><Cell col=\"3\" text=\"bind:INSERT_EMP_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_SalesProd1","10","145","134","16",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("[회사 병합 이력]");
            obj.set_visible("true");
            obj.set_cssclass("sta_POP_GroupTit");
            obj.getSetter("TL_SEQ").set("2279");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_SourceCompany
            obj = new Layout("default","",0,0,this.div_SourceCompany.form,function(p){});
            this.div_SourceCompany.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_TargetCompany
            obj = new Layout("default","",0,0,this.div_TargetCompany.form,function(p){});
            this.div_TargetCompany.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",500,475,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Common::COM_Search.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SC_CompanyMerge.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("SC_CompanyMerge.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("SC_CompanyMerge.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("SC_CompanyMerge.xfdl","Script::CommGrid.xjs");
        this.registerScript("SC_CompanyMerge.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 :
        * 02. 화면명   :
        * 03. 화면설명 :
        * 04. 작성일   :
        * 05. 작성자   :
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
        this.SC_CompanyMerge_onload = function(obj,e)
        {
        	this.gfnCompInit(obj); //헤더클릭 이벤트 없을 시 사용
        	this.fnFormInit();
        };

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.fnFormInit = function()
        {
        	this.fnSearch();
        };

        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fnSearch = function()
        {
        	// 조회용 Output dataset 세팅
        	this.gfnAddOutputDataset("dsList", "dsOutput");

        	this.gfnCommonTransaction("Select", "SC_CompanyMerge_S01");
        };

        this.fnSave = function()
        {
        	this.dsInput.clearData();
        	this.dsInput.addRow();
        	this.dsInput.setColumn(0, "SOURCE_COMPANY_CODE", this.div_SourceCompany.getCode());
        	this.dsInput.setColumn(0, "TARGET_COMPANY_CODE", this.div_TargetCompany.getCode());
        	this.dsInput.setColumn(0, "TARGET_COMPANY_NAME", this.div_TargetCompany.getData());

        	this.gfnAddInputDataset("dsInput", "dsInput");

        	this.gfnCommonTransaction("Save", "SC_CompanyMerge_R01");
        };

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
        		if(strSvcID=="Save")
        		{
        			alert(this.gfnGetTransTxt(2280,"회사병합이 완료되었습니다.\n@1@ ▶ @2@",[this.div_SourceCompany.getData(), this.div_TargetCompany.getData()]));
        			this.fnSearch();
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
        		case "btn_Close" :
        		case "btn_Cancel" :
        			this.commUtil.popupClose("");
        			break;
        		case "btn_Save" :
        			this.fnSave();
        			break;
        	}
        };

        this.fn_SetCompanyCode = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "div_SourceCompany" :
        			this.edt_SourceCompany.set_value(this.div_SourceCompany.getCode());
        			break;
        		case "div_TargetCompany" :
        			this.edt_TargetCompany.set_value(this.div_TargetCompany.getCode());
        			break;
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SC_CompanyMerge_onload,this);
            this.btn_Close.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Cancel.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Save.addEventHandler("onclick",this.comm_Click,this);
            this.grd_ContractList.addEventHandler("oncelldblclick",this.tab_Info_tpg_Contract_grd_ContractList_oncelldblclick,this);
        };
        this.loadIncludeScript("SC_CompanyMerge.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
