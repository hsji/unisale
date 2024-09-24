(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SC_CompanyMMPopup");
            this.set_titletext("프로젝트 상세조회");
            this.set_cssclass("frm_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,496);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsProject", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRealContract", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CODE\" type=\"STRING\" size=\"255\"/><Column id=\"PROJECT_NAME\" type=\"STRING\" size=\"255\"/><Column id=\"CLIENT_NAME\" type=\"STRING\" size=\"255\"/><Column id=\"CONTRACT_MAIN_NAME\" type=\"STRING\" size=\"255\"/><Column id=\"CONTRACT_NAME\" type=\"STRING\" size=\"255\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFakeContract", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CODE\" type=\"STRING\" size=\"255\"/><Column id=\"PROJECT_NAME\" type=\"STRING\" size=\"255\"/><Column id=\"CLIENT_NAME\" type=\"STRING\" size=\"255\"/><Column id=\"CONTRACT_MAIN_NAME\" type=\"STRING\" size=\"255\"/><Column id=\"CONTRACT_NAME\" type=\"STRING\" size=\"255\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRealPurchase", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CODE\" type=\"STRING\" size=\"255\"/><Column id=\"PROJECT_NAME\" type=\"STRING\" size=\"255\"/><Column id=\"CLIENT_NAME\" type=\"STRING\" size=\"255\"/><Column id=\"CONTRACT_MAIN_NAME\" type=\"STRING\" size=\"255\"/><Column id=\"CONTRACT_NAME\" type=\"STRING\" size=\"255\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_ContractList","8","44",null,"408","8",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"300\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"프로젝트코드\" TL_SEQ=\"2275\"/><Cell col=\"2\" text=\"프로젝트명\" TL_SEQ=\"114\"/><Cell col=\"3\" text=\"고객사\" TL_SEQ=\"32\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PROJECT_CODE\"/><Cell col=\"2\" text=\"bind:PROJECT_NAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:COMPANY_NAME\" textAlign=\"left\"/></Band></Format><Format id=\"format00\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"300\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"프로젝트코드\" TL_SEQ=\"2275\"/><Cell col=\"2\" text=\"프로젝트명\" TL_SEQ=\"114\"/><Cell col=\"3\" text=\"고객사\" TL_SEQ=\"32\"/><Cell col=\"4\" text=\"계약처\" TL_SEQ=\"34\"/><Cell col=\"5\" text=\"계약명\" TL_SEQ=\"33\"/><Cell col=\"6\" text=\"영업대표\" TL_SEQ=\"55\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:PROJECT_CODE\"/><Cell col=\"2\" text=\"bind:PROJECT_NAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:CLIENT_NAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:CONTRACT_MAIN_NAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:CONTRACT_NAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:EMP_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close",null,"8","15","15","11",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_POP_Cls");
            obj.set_text("");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_BottomFrame","2",null,null,"35","1","1",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_POP_BtnBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","8","5","164","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("프로젝트 상세조회");
            obj.set_color("white");
            obj.set_cssclass("sta_POP_Title ");
            obj.getSetter("TL_SEQ").set("2276");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,496,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SC_CompanyMMPopup.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("SC_CompanyMMPopup.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("SC_CompanyMMPopup.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("SC_CompanyMMPopup.xfdl","Script::CommGrid.xjs");
        this.registerScript("SC_CompanyMMPopup.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 : 공통 - 공통
        * 02. 화면명   : 회사정보팝업(프로젝트, 매출(진), 매출(가), 매입)
        * 03. 화면설명 :
        * 04. 작성일   : 2019.01.22
        * 05. 작성자   : 안주환
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
        this.SC_CompanyMMPopup_onload = function(obj,e)
        {
        	this.gfnCompInit(obj); //헤더클릭 이벤트 없을 시 사용
        	this.fnFormInit();
        };

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.fnFormInit = function()
        {
        	this.dsProject.assign(this.parent.dsProject);
        	this.dsRealContract.assign(this.parent.dsRealContract);
        	this.dsFakeContract.assign(this.parent.dsFakeContract);
        	this.dsRealPurchase.assign(this.parent.dsRealPurchase);

        	if(this.parent.hasOwnProperty("pType"))
        	{
        		if(this.parent.pType == "PROJECT_CNT")
        		{
        			this.fnSearch_Sub(this.dsProject, "default", "dsProject", "SC_CompanyMMPopUp_S01");
        		}
        		else if(this.parent.pType == "PRE_PROJECT_CNT")
        		{
        			this.fnSearch_Sub(this.dsFakeContract, "default", "dsFakeContract", "SC_CompanyMMPopUp_S02");
        		}
        		else if(this.parent.pType == "CONTRACT_CNT")
        		{
        			this.fnSearch_Sub(this.dsRealContract, "format00", "dsRealContract", "SC_CompanyMMPopUp_S03");
        		}
        		else if(this.parent.pType == "PURCHASE_CNT")
        		{
        			this.fnSearch_Sub(this.dsRealPurchase, "format00", "dsRealPurchase", "SC_CompanyMMPopUp_S04");
        		}
        	}
        };

        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fnSearch_Sub = function(dsTarget, strFormatId, dsTargetName, strModelId) {

        	this.grd_ContractList.set_binddataset(dsTarget);
        	this.grd_ContractList.set_formatid(strFormatId);

        	// 조건값 셋팅
        	this.gfnAddSendParameter("COMPANY_CODE", this.parent.COMPANY_CODE);

        	// 조회용 Output dataset 세팅
        	this.gfnAddOutputDataset(dsTargetName, "dsOutput");
        	this.gfnCommonTransaction("Select", strModelId, this.grd_ContractList);
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
        		if(strSvcID=="Select")
        		{

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
        			this.commUtil.popupClose("");
        			break;
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SC_CompanyMMPopup_onload,this);
            this.btn_Close.addEventHandler("onclick",this.comm_Click,this);
        };
        this.loadIncludeScript("SC_CompanyMMPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
