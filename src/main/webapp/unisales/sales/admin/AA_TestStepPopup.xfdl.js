(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AA_TestStepPopup");
            this.set_titletext("테스트 절차 검토문서/평가방법");
            this.set_cssclass("frm_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(590,290);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn_Close",null,"8","15","15","8",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_POP_Cls");
            obj.set_text("");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","8","5","232","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_color("white");
            obj.set_cssclass("sta_POP_Title ");
            obj.set_text("테스트 절차 검토문서/평가방법");
            this.addChild(obj.name, obj);

            obj = new Div("div_TestStep","4","38",null,"212","4",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_enable("true");
            obj.set_cssclass("div_WF_detailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Title04","8","38","50","22",null,null,null,null,null,null,this.div_TestStep.form);
            obj.set_taborder("0");
            obj.set_text("검토문서");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_TestStep.addChild(obj.name, obj);

            obj = new Static("stc_Title04_00","7","141","50","22",null,null,null,null,null,null,this.div_TestStep.form);
            obj.set_taborder("1");
            obj.set_text("평가방법");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_TestStep.addChild(obj.name, obj);

            obj = new TextArea("ta_TestMethod","66","108",null,"90","8",null,null,null,null,null,this.div_TestStep.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            this.div_TestStep.addChild(obj.name, obj);

            obj = new TextArea("ta_ReviewDoc","stc_Title04:8","6","506","90",null,null,null,null,null,null,this.div_TestStep.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_wordWrap("char");
            this.div_TestStep.addChild(obj.name, obj);

            obj = new Static("Static01","1","252",null,"38","1",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_POP_BtnBg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Cancel","507","260","65","22",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_cancel");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_TestStep.form
            obj = new Layout("default","",0,0,this.div_TestStep.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.stc_Title04.set_taborder("0");
                p.stc_Title04.set_text("검토문서");
                p.stc_Title04.set_textAlign("right");
                p.stc_Title04.set_cssclass("sta_WF_DetailTit");
                p.stc_Title04.move("8","38","50","22",null,null);

                p.stc_Title04_00.set_taborder("1");
                p.stc_Title04_00.set_text("평가방법");
                p.stc_Title04_00.set_textAlign("right");
                p.stc_Title04_00.set_cssclass("sta_WF_DetailTit");
                p.stc_Title04_00.move("7","141","50","22",null,null);

                p.ta_TestMethod.set_taborder("2");
                p.ta_TestMethod.set_readonly("true");
                p.ta_TestMethod.move("66","108",null,"90","8",null);

                p.ta_ReviewDoc.set_taborder("3");
                p.ta_ReviewDoc.set_readonly("true");
                p.ta_ReviewDoc.set_wordWrap("char");
                p.ta_ReviewDoc.move("stc_Title04:8","6","506","90",null,null);
            	}
            );
            this.div_TestStep.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div_TestStep.form
            obj = new Layout("portrait","",0,0,this.div_TestStep.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.stc_Title02.move("8","72","64","30",null,null);

                p.div_Contract.move("80","72",null,"30","4",null);

                p.stc_Title03.move("8","38","64","30",null,null);

                p.edt_ProjectName.move("80","38",null,"30","4",null);

                p.edt_SmNm.move("80","4",null,"30","4",null);

                p.stc_Title01.move("8","4","64","30",null,null);
            	}
            );
            this.div_TestStep.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","",590,290,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("AA_TestStepPopup.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("AA_TestStepPopup.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("AA_TestStepPopup.xfdl","Script::CommGrid.xjs");
        this.registerScript("AA_TestStepPopup.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 : 내부회계관리제도 - 테스트 절차 검토문서/평가방법
        * 02. 화면명   : 테스트 절차 검토문서/평가방법(AA_TestStepPopup)
        * 03. 화면설명 : 테스트 절차 검토문서/평가방법
        * 04. 작성일   : 2021.06.09
        * 05. 작성자   : 박종언
        * 06. 수정이력 :
        ***********************************************************************************************
        *     수정일          이  름    사유
        ***********************************************************************************************
        *
        ************************************************************************************************/

        /************************************************************************************************
        * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        this.executeIncludeScript("Script::CommTrans.xjs"); /*include "Script::CommTrans.xjs"*/;
        this.executeIncludeScript("Script::CommUtil.xjs"); /*include "Script::CommUtil.xjs"*/;
        this.executeIncludeScript("Script::CommGrid.xjs"); /*include "Script::CommGrid.xjs"*/;
        /************************************************************************************************
        * 전역 변수 영역
        ************************************************************************************************/
        var strReviewDoc = "";
        var strTestMethod = "";
        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/
        this.AA_TestStepPopup_onload = function(obj,e)
        {
        	strReviewDoc = this.parent.strReviewDoc;
        	strTestMethod = this.parent.strTestMethod;

        	this.div_TestStep.form.ta_ReviewDoc.insertText(strReviewDoc);
        	this.div_TestStep.form.ta_TestMethod.insertText(strTestMethod);
        };
        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/

        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/

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
        		case "btn_Cancel" :
        			this.commUtil.popupClose("");
        			break;
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.AA_TestStepPopup_onload,this);
            this.btn_Close.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Cancel.addEventHandler("onclick",this.comm_Click,this);
        };
        this.loadIncludeScript("AA_TestStepPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
