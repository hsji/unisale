(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CR_RemarkHistoryMM");
            this.set_titletext("New Form");
            this.set_cssclass("frm_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_List", this);
            obj._setContents("<ColumnInfo><Column id=\"RH_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SOURCE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SOURCE_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"REMARKS\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"CREATE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CREATE_EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CREATE_EMP_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("st_bottom","0",null,null,"38","0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_POP_BtnBg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"10","15","15","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_POP_Cls");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("st_Title","10","0","356","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("비고 이력");
            obj.set_cssclass("sta_POP_Title");
            obj.getSetter("TL_SEQ").set("2092");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close00",null,null,"70","24","8","7",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_tran");
            obj.getSetter("TL_SEQ").set("59");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save",null,null,"60","24","btn_close00:4","7",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_tran");
            obj.getSetter("TL_SEQ").set("115");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_List","10","44","579","324",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_List");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"365\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\" TL_SEQ=\"167\"/><Cell col=\"1\" text=\"작성일\" TL_SEQ=\"2157\"/><Cell col=\"2\" text=\"작성자\" TL_SEQ=\"207\"/><Cell col=\"3\" text=\"비고\" TL_SEQ=\"45\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CREATE_DATE\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\"/><Cell col=\"2\" text=\"bind:CREATE_EMP_NAME\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:REMARKS\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new TextArea("ta_Remarks","10","371","579","82",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Add",null,"469","60","24","btn_save:4",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_tran");
            obj.set_text("추가");
            obj.getSetter("TL_SEQ").set("528");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,500,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","ta_Remarks","value","ds_List","REMARKS");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CR_RemarkHistoryMM.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("CR_RemarkHistoryMM.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("CR_RemarkHistoryMM.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("CR_RemarkHistoryMM.xfdl","Script::CommGrid.xjs");
        this.registerScript("CR_RemarkHistoryMM.xfdl", function() {
        /************************************************************************************************
         * 01. 업무구분 : 공통
         * 02. 화면명   : CR_RemarkHistoryMM
         * 03. 화면설명 : 비고 이력 등록 및 조회
         * 04. 작성일   : 2020.01.9
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
        this.executeIncludeScript("Script::CommSystem.xjs"); /*include "Script::CommSystem.xjs"*/;
        this.executeIncludeScript("Script::CommTrans.xjs"); /*include "Script::CommTrans.xjs"*/;
        this.executeIncludeScript("Script::CommUtil.xjs"); /*include "Script::CommUtil.xjs"*/;
        this.executeIncludeScript("Script::CommGrid.xjs"); /*include "Script::CommGrid.xjs"*/;


        /************************************************************************************************
        * 전역 변수 영역
        ************************************************************************************************/
        this.FV_TITLE = "";
        this.FV_SOURCE_CD = "";
        this.FV_SOURCE_SEQ = "";


        /************************************************************************************************
         * FORM 영역
        ************************************************************************************************/
        this.CR_RemarkHistoryMM_onload = function(obj,e)
        {

        	if (!this.gfnIsEmpty(this.parent.pvTitle)) {
        		this.FV_TITLE = this.parent.pvTitle;
        		this.st_Title.set_text(this.FV_TITLE +" "+this.st_Title.text);
        	}

        	this.FV_SOURCE_CD = this.parent.pvSourceCd;
        	this.FV_SOURCE_SEQ = this.parent.pvSourceSeq;
        	this.gfnCompInit(obj);  	// Grid 공통함수 호출

        	this.fnSearch();
        };


        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/



        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fnSearch = function()
        {
        	// trace("SOURCE_CD:["+this.FV_SOURCE_CD+"]  SOURCE_SEQ:["+this.FV_SOURCE_SEQ+"]");
        	this.gfnAddSendParameter("SOURCE_CD",		this.FV_SOURCE_CD);
        	this.gfnAddSendParameter("SOURCE_SEQ",		this.FV_SOURCE_SEQ);

        	this.gfnAddOutputDataset("ds_List", "ds_output");
        	this.gfnCommonTransaction("Search", "CR_RemarkHistoryMM_S01");
        };


        this.fnSaveData = function()
        {
        	this.gfnAddInputDataset("ds_List", "ds_list");
        	this.gfnCommonTransaction("Save", "CR_RemarkHistoryMM_R01");
        }

        this.fnCallBack = function(strSvcID, nErrorCode, strErrorMag)
        {
        	// 에러 예외처리
        	if(nErrorCode != 0)
        	{
        		this.alert("[" + nErrorCode + "] " + strErrorMag);
        		return;
        	}

        	switch(strSvcID)
        	{
        		case "Save":
        			this.fnSearch();
        		break;
        	}
        };
        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.btn_close_onclick = function(obj,e)
        {
        	var sRtnVal = "";
        	if (this.ds_List.rowcount > 0)
        	{
        		for (var i=0; i<this.ds_List.rowcount; i++)
        		{
        			if (this.ds_List.getRowType(i) == Dataset.ROWTYPE_NORMAL)
        			{
        				var sRemarks = this.ds_List.getColumn(i, "REMARKS");
        				if (!this.gfnIsEmpty(sRemarks))
        				{
        					var sEmpNm = this.ds_List.getColumn(i, "CREATE_EMP_NAME");
        					var sDate = this.ds_List.getColumn(i, "CREATE_DATE");
        					var sYear = sDate.substr(0, 4);
        					var sMon = sDate.substr(4, 2);
        					var sDay = sDate.substr(6);
        					sRtnVal = sYear+"-"+sMon+"-"+sDay+" ("+sEmpNm+")"+": "+sRemarks;
        					break;
        				}
        			}
        		}
        	}
        	this.commUtil.popupClose(sRtnVal);

        };

        this.btn_Add_onclick = function(obj,e)
        {
        	var nAddRow = this.ds_List.insertRow(0);
        	this.ds_List.setColumn(nAddRow, "SOURCE_CD", this.FV_SOURCE_CD);
        	this.ds_List.setColumn(nAddRow, "SOURCE_SEQ", this.FV_SOURCE_SEQ);
        };

        this.btn_save_onclick = function(obj,e)
        {
        	this.fnSaveData();
        };

        this.ds_List_onrowposchanged = function(obj,e)
        {
        	if(this.ds_List.getRowType(e.newrow)==Dataset.ROWTYPE_INSERT)
        		this.ta_Remarks.set_readonly(false);
        	else
        		this.ta_Remarks.set_readonly(true);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CR_RemarkHistoryMM_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_close00.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_save.addEventHandler("onclick",this.btn_save_onclick,this);
            this.grd_List.addEventHandler("onexpandup",this.grd_List_onexpandup,this);
            this.btn_Add.addEventHandler("onclick",this.btn_Add_onclick,this);
            this.ds_List.addEventHandler("onrowposchanged",this.ds_List_onrowposchanged,this);
        };
        this.loadIncludeScript("CR_RemarkHistoryMM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
