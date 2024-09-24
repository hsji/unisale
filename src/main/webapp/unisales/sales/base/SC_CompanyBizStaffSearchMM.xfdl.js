(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SC_CompanyBizStaffSearchMM");
            this.set_titletext("New Form");
            this.set_cssclass("frm_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(968,608);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOutput", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NAME\" type=\"STRING\" size=\"255\"/><Column id=\"HOLD_OFFICE_FLAG\" type=\"STRING\" size=\"255\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput2", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NAME\" type=\"STRING\" size=\"255\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"255\"/><Column id=\"HOLD_OFFICE_FLAG\" type=\"STRING\" size=\"255\"/><Column id=\"CLIENT_FLAG\" type=\"STRING\" size=\"255\"/><Column id=\"COMPANY_FLAG\" type=\"STRING\" size=\"255\"/><Column id=\"CONTRACT_NO\" type=\"STRING\" size=\"255\"/><Column id=\"CONTRACT_NAME\" type=\"STRING\" size=\"255\"/><Column id=\"CONTRACT_DATE\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_BottomFrame","1",null,null,"38","2","2",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_BtnBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exit","899","576","60","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_tran");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close",null,"9","15","15","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_POP_Cls");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_CompanyBizStaffSearch01","5","40","245","524",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_binddataset("dsOutput");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"186\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"담당영업\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:EMP_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_CompanyBizStaffSearch02","257","40","706","524",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_autofittype("col");
            obj.set_binddataset("dsOutput2");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"81\"/><Column size=\"81\"/><Column size=\"102\"/><Column size=\"185\"/><Column size=\"93\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"고객사\"/><Cell col=\"1\" text=\"계약처\"/><Cell col=\"2\" text=\"계약번호\"/><Cell col=\"3\" text=\"계약명\"/><Cell col=\"4\" text=\"계약일\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CLIENT_FLAG\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:COMPANY_FLAG\"/><Cell col=\"2\" text=\"bind:CONTRACT_NO\"/><Cell col=\"3\" text=\"bind:CONTRACT_NAME\"/><Cell col=\"4\" text=\"bind:CONTRACT_DATE\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"####-##-##\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","8","5","120","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("담당영업사원");
            obj.set_color("white");
            obj.set_cssclass("sta_POP_Title ");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",968,608,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SC_CompanyBizStaffSearchMM.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("SC_CompanyBizStaffSearchMM.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("SC_CompanyBizStaffSearchMM.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("SC_CompanyBizStaffSearchMM.xfdl","Script::CommGrid.xjs");
        this.registerScript("SC_CompanyBizStaffSearchMM.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 : 공통 - 공통
        * 02. 화면명   : 담당영업사원등록 (SC_CompanyBizStaffSearchMM_S01,
        									 SC_CompanyBizStaffSearchMM_R01)
        * 03. 화면설명 :
        * 04. 작성일   : 2018.08.20
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
        this.SC_CompanyBizStaffSearchMM_onload = function(obj,e)
        {
        	this.gfnCompInit(obj); //헤더클릭 이벤트 없을 시 사용
        	this.fnSearch();
        	this.fnSearch2();
        };

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/


        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fnSearch = function()
        {
        	//조건값 셋팅
        	this.gfnAddSendParameter("COMPANY_CODE", this.parent.COMPANY_CODE);

        	//조회용 Output Dataset 세팅
        	this.gfnAddOutputDataset("dsOutput", "dsOutput3");
        	this.gfnCommonTransaction("Select", "SC_CompanyReg_S01", this.grd_CompanyBizStaffSearch01);
        };

        this.fnSearch2 = function()
        {
        	//조건값 셋팅
        	this.gfnAddSendParameter("COMPANY_CODE", this.parent.COMPANY_CODE);

        	//조회용 Output Dataset 세팅
        	this.gfnAddOutputDataset("dsOutput2", "dsOutput");
        	this.gfnCommonTransaction("Select2", "SC_CompanyBizStaffSearchReg_S01", this.grd_CompanyBizStaffSearch02);
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
        		if(strSvcID == "Select")
        		{
        			var strFilter = this.dsOutput.getColumn(0, "EMP_NO");
        			this.dsOutput2.filter("EMP_NO == '" + strFilter + "'");
        		}
        		else if(strSvcID == "Select2")
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
        			this.close();
        			break;
        		case "btn_Exit" :
        			this.close();
        			break;
        	}
        };

        this.dsOutput_onrowposchanged = function(obj, e)
        {
        	this.dsOutput2.filter("");
        	var strFilter = this.dsOutput.getColumn(this.dsOutput.rowposition, "EMP_NO");
        	this.dsOutput2.filter("EMP_NO == '" + strFilter + "'");
        };

        this.grd_CompanyBizStaffSearch02_oncelldblclick = function(obj,e)
        {
        	var sArgument = {"COMPANY_CODE" : this.parent.COMPANY_CODE};
        	this.commUtil.popup(this, "ProjectMM", "Sales::SP_ProjectMM.xfdl", -1, -1, null, null, true, true, false, sArgument, "fnPopupCallBack");
        };

        this.fnPopupCallBack = function (popupId, popupArg)
        {
        	switch(popupId)
        	{
        		case "ProjectMM" :
        			break;
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SC_CompanyBizStaffSearchMM_onload,this);
            this.btn_Exit.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Close.addEventHandler("onclick",this.comm_Click,this);
            this.grd_CompanyBizStaffSearch01.addEventHandler("oncellclick",this.grd_CompanyBizStaffSearch01_oncellclick,this);
            this.grd_CompanyBizStaffSearch02.addEventHandler("oncelldblclick",this.grd_CompanyBizStaffSearch02_oncelldblclick,this);
            this.dsOutput.addEventHandler("onrowposchanged",this.dsOutput_onrowposchanged,this);
        };
        this.loadIncludeScript("SC_CompanyBizStaffSearchMM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
