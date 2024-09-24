(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CM_RemarkMM");
            this.set_titletext("내용확인");
            this.set_cssclass("frm_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(886,564);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn_close",null,"10","15","15","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_POP_Cls");
            this.addChild(obj.name, obj);

            obj = new Static("st_Title","10","0","356","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("비고");
            obj.set_cssclass("sta_POP_Title");
            obj.getSetter("TL_SEQ").set("45");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_remark","8","43",null,null,"8","47",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("st_bottom","0",null,null,"38","0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_POP_BtnBg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_confirm",null,null,"60","24","76","7",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("적용");
            obj.set_cssclass("btn_WF_tran");
            obj.set_visible("false");
            obj.getSetter("TL_SEQ").set("684");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close00",null,null,"60","24","8","7",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_tran");
            obj.getSetter("TL_SEQ").set("59");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",886,564,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CM_RemarkMM.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("CM_RemarkMM.xfdl","Script::ext_CommEco.xjs");
        this.addIncludeScript("CM_RemarkMM.xfdl","Script::CommGrid.xjs");
        this.registerScript("CM_RemarkMM.xfdl", function() {
        /************************************************************************************************
         * 01. 업무구분 : 공통
         * 02. 화면명   : 비고 확인 CM_RemarkMM
         * 03. 화면설명 : 비고내용 확인 view 처리
         * 04. 작성일   : 2019.03.12
         * 05. 작성자   : 채종한
         * 06. 수정이력 :
         ***********************************************************************************************
         *     수정일          이  름    사유
         ***********************************************************************************************
         *
        ************************************************************************************************/

        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        this.executeIncludeScript("Script::CommUtil.xjs"); /*include "Script::CommUtil.xjs"*/;
        this.executeIncludeScript("Script::ext_CommEco.xjs"); /*include "Script::ext_CommEco.xjs"*/;
        this.executeIncludeScript("Script::CommGrid.xjs"); /*include "Script::CommGrid.xjs"*/

        /************************************************************************************************
         * 전역 변수 영역
        ************************************************************************************************/
        this.FV_TITLE;
        this.FV_CONTENTS;
        this.FV_USE_ENABLE;


        /************************************************************************************************
         * FORM 영역
        ************************************************************************************************/
        this.CM_RemarkMM_onload = function(obj,e)
        {
        	//호출한 부모영역의 내용...
        	if (!this.gfnIsEmpty(this.parent.pvTitle)) {
        		this.FV_TITLE = this.parent.pvTitle;
        	}
        	this.FV_CONTENTS = this.parent.pvContents;
        	this.FV_USE_ENABLE = this.parent.pv_UseEnable;


        	if (this.FV_USE_ENABLE) {
        		this.txt_remark.set_readonly(false);
        		this.btn_confirm.set_visible(true);
        	}

        	this.set_titletext(this.FV_TITLE);
        	this.st_Title.set_text(this.FV_TITLE);
        	this.txt_remark.set_value(this.FV_CONTENTS);

        	this.gfnCompInit(obj);  	// Grid 공통함수 호출
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
        // 취소, 닫기버튼
        this.btn_close_onclick = function(obj,e)
        {
        	this.commUtil.popupClose("");
        }


        this.btn_confirm_onclick = function(obj,e)
        {
        	var sReturnVal=this.txt_remark.value;
        	if(this.gfnIsEmpty(sReturnVal))
        	{
        		sReturnVal = " ";
        	}

        	this.commUtil.popupClose(sReturnVal);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CM_RemarkMM_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_confirm.addEventHandler("onclick",this.btn_confirm_onclick,this);
            this.btn_close00.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("CM_RemarkMM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
