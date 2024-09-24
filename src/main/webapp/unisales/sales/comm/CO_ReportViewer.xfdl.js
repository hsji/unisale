(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CO_ReportViewer");
            this.set_titletext("미리보기");
            this.set_cssclass("frm_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(690,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn_close",null,"10","15","15","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_POP_Cls");
            this.addChild(obj.name, obj);

            obj = new UbiReport("UbiReport","8","43",null,null,"8","45",null,null,null,null,this);
            obj.getSetter("taborder").set("1");
            obj.getSetter("scale").set("100");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","0","356","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("미리보기");
            obj.set_cssclass("sta_POP_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0",null,null,"38","0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_POP_BtnBg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close",null,null,"60","24","8","7",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_tran");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",690,750,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("미리보기");
                p.set_cssclass("frm_popBg");

                p.btn_close.set_taborder("0");
                p.btn_close.set_cssclass("btn_POP_Cls");
                p.btn_close.move(null,"10","15","15","10",null);

                p.UbiReport.getSetter("taborder").set("1");
                p.UbiReport.getSetter("scale").set("100");
                p.UbiReport.move("8","43",null,null,"8","45");

                p.Static03.set_taborder("2");
                p.Static03.set_text("미리보기");
                p.Static03.set_cssclass("sta_POP_Title");
                p.Static03.move("10","0","356","35",null,null);

                p.Static00.set_taborder("3");
                p.Static00.set_cssclass("sta_POP_BtnBg");
                p.Static00.move("0",null,null,"38","0","0");

                p.btn_Close.set_taborder("4");
                p.btn_Close.set_text("닫기");
                p.btn_Close.set_cssclass("btn_WF_tran");
                p.btn_Close.move(null,null,"60","24","8","7");
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("portrait","Mobile_screen",480,768,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btn_Close.move(null,null,"70","30","4","4");
            	}
            );
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CO_ReportViewer.xfdl","Script::ext_Report.xjs");
        this.registerScript("CO_ReportViewer.xfdl", function() {
        /************************************************************************************************
         * 01. 업무구분	: 공통 - 공통
         * 02. 화면명		: Report 미리보기 (CO_ReportViewer)
         * 03. 화면설명 	: Report 미리보기 한다.
         * 04. 작성일   	: 2018.07.30
         * 05. 작성자   	: 채종한
         * 06. 수정이력 	:
         ***********************************************************************************************
         *     수정일          이  름    사유
         ***********************************************************************************************
         *
         ************************************************************************************************/

        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
         ************************************************************************************************/
        this.executeIncludeScript("Script::ext_Report.xjs"); /*include "Script::ext_Report.xjs"*/

        /************************************************************************************************
         * 전역 변수 영역
         ************************************************************************************************/
        this.fv_arrInDataSet = new Array();
        this.fv_arrParamData = new Array();
        this.fv_rptFileNm = "";
        this.fv_saveFileNm = "";

        /************************************************************************************************
         * FORM 영역
         ************************************************************************************************/
        this.CO_ReportViewer_onload = function(obj,e)
        {
        	fv_rptFileNm = this.parent.pv_rptFileNm;
        	fv_saveFileNm = this.parent.pv_saveFileNm;
        	fv_arrInDataSet = this.parent.pv_inDs;
        	fv_arrParamData = this.parent.pv_paramDt;

        	this.arrInDataSet = fv_arrInDataSet;
        	this.arrParamData = fv_arrParamData;
        	if(!this.gfnIsEmpty(fv_saveFileNm))
        		this.UbiReport.reporttitle = fv_saveFileNm;
        	var scale = "-9998";
        	if(fv_rptFileNm=="ASSET_QR_PRINT.jrf")
        	{
        		this.UbiReport.useplugin = true;// 바코드 출력 시 설정
        		scale = "120";
        	}
        	else if(fv_rptFileNm!="PRINT_REGULARVISIT.jrf" && this.getCurrentLayoutID()=="portrait")
        		scale = "120";
        	this.UbiReport.set_scale(scale);
        	this.gfnOpenReportViewer(this.UbiReport, fv_rptFileNm);

        };
        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
         ************************************************************************************************/
        this.fnRptCallBack = function()
        {
        	// trace("Report Callback !!");
        }




        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
         ************************************************************************************************/





         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
         this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };
        this.btn_Close_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CO_ReportViewer_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_Close.addEventHandler("onclick",this.btn_Close_onclick,this);
        };
        this.loadIncludeScript("CO_ReportViewer.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
