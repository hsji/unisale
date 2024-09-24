(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CO_Project");
            this.set_titletext("프로젝트 관리");
            this.set_cssclass("frm_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(1362,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_List", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_view","0","35",null,null,"0","33",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_url("Sales::SP_ProjectMM.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("stc_BottomFrame","0",null,null,"38","0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_BtnBg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Cancel","1298",null,null,"22","4","9",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_cancel");
            obj.getSetter("TL_SEQ").set("59");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close",null,"8","15","15","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_POP_Cls");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("st_Title","10","0","356","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("프로젝트 관리");
            obj.set_cssclass("sta_POP_Title");
            obj.getSetter("TL_SEQ").set("1941");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_view
            obj = new Layout("default","",0,0,this.div_view.form,function(p){});
            this.div_view.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1362,650,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Sales::SP_ProjectMM.xfdl");
        };
        
        // User Script
        this.addIncludeScript("CO_Project.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("CO_Project.xfdl","Script::CommGrid.xjs");
        this.addIncludeScript("CO_Project.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("CO_Project.xfdl","Script::ext_CommEco.xjs");
        this.registerScript("CO_Project.xfdl", function() {
        /************************************************************************************************
         * 01. 업무구분 : 프로젝트관리
         * 02. 화면명   : 프로젝트관리(SP_ProjectMM)
         * 03. 화면설명 : 프로젝트관리
         * 04. 작성일   : 2018.09.24
         * 05. 작성자   : 채종한
         * 06. 수정이력 :
         ***********************************************************************************************
         *     수정일          이  름    사유
         ***********************************************************************************************
         *
         *
         *
         ***********************************************************************************************/


        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
         ************************************************************************************************/
        this.executeIncludeScript("Script::CommTrans.xjs"); /*include "Script::CommTrans.xjs"*/
        this.executeIncludeScript("Script::CommGrid.xjs"); /*include "Script::CommGrid.xjs"*/;
        this.executeIncludeScript("Script::CommUtil.xjs"); /*include "Script::CommUtil.xjs"*/
        this.executeIncludeScript("Script::ext_CommEco.xjs"); /*include "Script::ext_CommEco.xjs"*/

        /************************************************************************************************
         * 전역 변수 영역
         ************************************************************************************************/
          this.FV_PROJECT_CD;
          this.FV_PROJECT_NAME;
          this.FV_TABINDEX;



         /************************************************************************************************
         * FORM 영역
         ************************************************************************************************/
         this.CO_Project_onload = function(obj,e)
        {
        	this.FV_PROJECT_CD = this.parent.pvProjectCd;
        	this.FV_PROJECT_NAME = this.parent.pvProjectNm;
        	this.FV_TABINDEX = this.parent.pvTabindex;
        	this.FV_POP_AUTHT_TYPE = this.parent.pvAuthType;

        	this.gfnCompInit(obj);  	// Grid 공통함수 호출
        	this.fn_QueryData();
        };



         /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
         ************************************************************************************************/
          this.fn_QueryData = function()
          {
         	// 조건값 셋팅
        	this.gfnAddSendParameter("PROJECT_CODE",	this.FV_PROJECT_CD);

        	// 조회용 Output dataset 세팅
        	this.gfnAddOutputDataset("ds_List", "ds_output");
        	this.gfnCommonTransaction("select", "CO_Project_S01");
          }


          // 화면 콜백
         this.fnCallBack = function (strSvcID, nErrorCode, strErrorMag)
         {
        	switch (strSvcID)
        	{
        		case "select" :
        			var sClientCd = this.ds_List.getColumn(0, "CLIENT_CODE");
        			var sClientNm = this.ds_List.getColumn(0, "CLIENT_NAME");

        			this.div_view.form.fn_PopupDisplay(this.FV_PROJECT_CD, this.FV_PROJECT_NAME, sClientCd, sClientNm, this.FV_TABINDEX);
        			break;
        	}
         };


         /************************************************************************************************
         * FORM 공통 FUNCTION 영역
         ************************************************************************************************/

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/

        this.common_onclick = function(obj,e)
        {
        	switch(obj.name) {
        		case "btn_Cancel": //취소버튼
        			this.commUtil.popupClose();
        			break;

        		case "btn_Close": // X버튼
        			this.commUtil.popupClose();
        			break;
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CO_Project_onload,this);
            this.btn_Cancel.addEventHandler("onclick",this.common_onclick,this);
            this.btn_Close.addEventHandler("onclick",this.common_onclick,this);
        };
        this.loadIncludeScript("CO_Project.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
