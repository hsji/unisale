(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CF_LinkFileSearch");
            this.set_titletext("링크파일검색");
            this.set_cssclass("frm_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,400);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_NextFileType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"30\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"255\"/><Column id=\"VAL1\" type=\"STRING\" size=\"100\"/><Column id=\"VAL2\" type=\"STRING\" size=\"100\"/><Column id=\"VAL3\" type=\"STRING\" size=\"100\"/><Column id=\"VAL4\" type=\"STRING\" size=\"100\"/><Column id=\"REMARK\" type=\"STRING\" size=\"1073741823\"/><Column id=\"ORD\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_FileList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"255\"/><Column id=\"SOURCE_CD\" type=\"string\" size=\"255\"/><Column id=\"SOURCE_SEQ\" type=\"string\" size=\"255\"/><Column id=\"STATUS_CD\" type=\"string\" size=\"255\"/><Column id=\"FM_SEQ\" type=\"string\" size=\"255\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"255\"/><Column id=\"FILE_NAME\" type=\"string\" size=\"255\"/><Column id=\"SAVE_FILE_NAME\" type=\"string\" size=\"255\"/><Column id=\"SAVE_PATH\" type=\"string\" size=\"255\"/><Column id=\"DEL_FLAG\" type=\"string\" size=\"255\"/><Column id=\"STATUS\" type=\"string\" size=\"255\"/><Column id=\"INSERT_EMP_NAME\" type=\"string\" size=\"255\"/><Column id=\"INSERT_DATE\" type=\"string\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdFileKind","4","39","180","320",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_NextFileType");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"142\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"파일종류\" TL_SEQ=\"168\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CAPTION\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_FileList","grdFileKind:4","39",null,"320","4",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_FileList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"60\"/><Column size=\"394\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"링크선택\" TL_SEQ=\"1907\"/><Cell col=\"2\" text=\"파일명\" TL_SEQ=\"330\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"2\" textAlign=\"left\" text=\"bind:FILE_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","10","99","15",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("링크파일 검색");
            obj.set_cssclass("sta_POP_Title");
            obj.getSetter("TL_SEQ").set("1906");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Destroy",null,"10","15","15","14",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_POP_Cls");
            obj.set_hotkey("ESCAPE");
            obj.set_tooltiptext("ESC");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","1",null,null,"36","0","1",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_POP_BtnBg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close",null,null,"80","22","10","7",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_cancel");
            obj.set_tooltiptext("ESC");
            obj.getSetter("TL_SEQ").set("59");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Confirm",null,null,"60","22","btn_Close:7","7",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_tran");
            obj.getSetter("TL_SEQ").set("113");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",700,400,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CF_LinkFileSearch.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("CF_LinkFileSearch.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("CF_LinkFileSearch.xfdl","Script::ExtFileUpDownload.xjs");
        this.addIncludeScript("CF_LinkFileSearch.xfdl","Script::ext_CommEco.xjs");
        this.addIncludeScript("CF_LinkFileSearch.xfdl","Script::CommGrid.xjs");
        this.registerScript("CF_LinkFileSearch.xfdl", function() {
        /************************************************************************************************
         * 01. 업무구분 : 공통 - 파일관리
         * 02. 화면명   : 파일관리(CM_FileMM)
         * 03. 화면설명 : 파일관리를 위한 공통 팝업화면
         * 04. 작성일   : 2018.08.13
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
        this.executeIncludeScript("Script::CommUtil.xjs"); /*include "Script::CommUtil.xjs"*/
        this.executeIncludeScript("Script::ExtFileUpDownload.xjs"); /*include "Script::ExtFileUpDownload.xjs"*/
        this.executeIncludeScript("Script::ext_CommEco.xjs"); /*include "Script::ext_CommEco.xjs"*/
        this.executeIncludeScript("Script::CommGrid.xjs"); /*include "Script::CommGrid.xjs"*/;

        /************************************************************************************************
         * 전역 변수 영역
         ************************************************************************************************/
         this.FV_SOURCE_CD;
         this.FV_SOURCE_SEQ;

         /************************************************************************************************
         * FORM 영역
         ************************************************************************************************/
         this.CF_LinkFileSearch_onload = function(obj,e)
        {
        	this.FV_SOURCE_CD = this.parent.pv_SourceCd;
        	this.FV_SOURCE_SEQ = this.parent.pv_SourceSeq;
        	this.gfnCompInit(obj);  	// Grid 공통함수 호출
        	this.fnGetCode();
        };


         /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
         ************************************************************************************************/
          this.fnGetCode = function()
        {
        	this.gfnAddCodeDataset("ds_NextFileType", "FILE_" + this.FV_SOURCE_CD, true);
        	this.gfnCodeTransaction();
        }

         // 조회
         this.fn_QueryData = function()
         {
         	// 조건값 셋팅
        	this.gfnAddSendParameter("SOURCE_CD",	this.FV_SOURCE_CD);
        	this.gfnAddSendParameter("SOURCE_SEQ",	this.FV_SOURCE_SEQ);


        	// 조회용 Output dataset 세팅
        	this.gfnAddOutputDataset("ds_FileList", "ds_File");
        	this.gfnCommonTransaction("Select", "CF_NFileMM_S02", this.grd_ContractList);
         }

         // 화면 콜백
         this.fnCallBack = function (strSvcID, nErrorCode, strErrorMag)
         {
        	if (nErrorCode<0) {
        		this.alert("["+strSvcID+":"+nErrorCode+"] "+strErrorMag);
        		return;
        	} else {
        		switch (strSvcID)
        		{
        			case "gfnGetCode" :
        				this.ds_NextFileType.set_enableevent(false);
        				//this.ds_NextFileType.insertRow(0);
        				//this.ds_NextFileType.setColumn(0, "CAPTION", "전체");
        				this.ds_NextFileType.set_enableevent(true);
        				this.ds_NextFileType.set_rowposition(0);
        				this.fn_QueryData();
        				break;
        			case "Select" :
        				this.ds_FileList.filter("");
        				break;
        		}
        	}
         };
         /************************************************************************************************
         * FORM 공통 FUNCTION 영역
         ************************************************************************************************/

        this.fnSetReturn = function()
        {
        	this.ds_FileList.filter("CHK=='1'");
        	var ds = this.ds_FileList;

        	var dsReturn = new nexacro.Dataset();
        	dsReturn.assign(ds);
        	dsReturn.clearData();

        	for (var i=0; i<ds.rowcount; i++) {
        		var newrow = dsReturn.addRow();
        		dsReturn.copyRow(newrow, ds, i);
        	}

        	this.commUtil.popupClose(dsReturn);
        }




         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        this.btn_Close_onclick = function(obj,e)
        {
        	this.commUtil.popupClose();
        };


        this.ds_NextFileType_onrowposchanged = function(obj,e)
        {
        	var sStatusCd = obj.getColumn(e.newrow, "CODE");
        	if (this.gfnIsEmpty(sStatusCd)) {
        		this.ds_FileList.filter("");
        	} else {
        		this.ds_FileList.filter("STATUS_CD=='"+sStatusCd+"'");
        	}
        };

        this.btn_Confirm_onclick = function(obj,e)
        {

        	var nFindRow = this.ds_FileList.findRow("CHK", "1");
        	if (nFindRow < 0) {
        		this.alert(this.gfnGetTransTxt(1221, "링크할 파일을 선택해 주세요"));
        		return;
        	}

        	this.fnSetReturn();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CF_LinkFileSearch_onload,this);
            this.btn_Destroy.addEventHandler("onclick",this.btn_Close_onclick,this);
            this.btn_Close.addEventHandler("onclick",this.btn_Close_onclick,this);
            this.btn_Confirm.addEventHandler("onclick",this.btn_Confirm_onclick,this);
            this.ds_NextFileType.addEventHandler("onrowposchanged",this.ds_NextFileType_onrowposchanged,this);
        };
        this.loadIncludeScript("CF_LinkFileSearch.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
