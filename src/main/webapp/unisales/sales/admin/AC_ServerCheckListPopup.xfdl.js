(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AC_ServerCheckListPopup");
            this.set_titletext("복사할 데이터 설정");
            this.set_cssclass("frm_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(390,200);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCopyData", this);
            obj._setContents("<ColumnInfo><Column id=\"YYYYMM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("st_Title","10","0","356","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("복사 할 데이터 설정");
            obj.set_cssclass("sta_POP_Title");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close",null,"10","15","15","8",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_POP_Cls");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0",null,null,"29","0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_POP_BtnBg");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_CopyYYYYMM","0","35",null,null,"0","Static01:0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("dsCopyData");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"복사 대상 데이터 년월\"/></Band><Band id=\"body\"><Cell text=\"bind:YYYYMM\" displaytype=\"date\" calendardateformat=\"yyyy-MM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Cancel",null,null,"65","22","8","3",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_cancel");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_OK",null,null,"65","22","80","3",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_tran");
            obj.set_text("확인");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",390,200,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("AC_ServerCheckListPopup.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("AC_ServerCheckListPopup.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("AC_ServerCheckListPopup.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("AC_ServerCheckListPopup.xfdl","Script::CommGrid.xjs");
        this.addIncludeScript("AC_ServerCheckListPopup.xfdl","Script::ext_Report.xjs");
        this.registerScript("AC_ServerCheckListPopup.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분	 	: 서버점검관리
        * 02. 화면명		: 서버점검 체크리스트 데이터 복사 설정 팝업
        * 03. 화면설명 	: 서버점검 체크리스트 데이터 복사 설정 팝업

        * 04. 작성일   	: 2022.04.27
        * 05. 작성자   	: 박종언
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
        this.executeIncludeScript("Script::ext_Report.xjs"); /*include "Script::ext_Report.xjs"*/

        /************************************************************************************************
        * 전역 변수 영역
        ************************************************************************************************/
        var curYYYYMM = "";
        /************************************************************************************************
        * FORM 영역 EVENT 영역
        ************************************************************************************************/
        this.AC_ServerCheckListPopup_onload = function(obj,e)
        {
        	this.dsCopyData.copyData(this.parent.dsCopyData);
        	curYYYYMM		= this.parent.curYYYYMM;
        };
        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.btn_Cancel_onclick = function(obj,e)
        {
        	this.commUtil.popupClose("");
        };

        this.btn_Close_onclick = function(obj,e)
        {
        	this.commUtil.popupClose("");
        };

        this.btn_OK_onclick = function(obj,e)
        {
        	this.fnCopy();
        };

        this.grd_CopyYYYYMM_oncellclick = function(obj,e)
        {
        	this.fnCopy();
        };

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/

        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        // 이전 데이터 복사
        this.fnCopy = function()
        {
        	var sCurRow = this.dsCopyData.rowposition;
        	var sYYYYMM = this.dsCopyData.getColumn(sCurRow, "YYYYMM");
        	this.gfnAddSendParameter("TARGET_YYYYMM", sYYYYMM);
        	this.gfnAddSendParameter("CUR_YYYYMM", curYYYYMM);
        	this.gfnCommonTransaction("CopyData", "AC_ServerCheckList_R02");
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
        		if(strSvcID == "CopyData")
        		{
        			alert(curYYYYMM + " 년월 데이터 복사 완료 되었습니다. \n암호변경 대상 계정 목록은 복사한 년월 패스워드 목록 생성 시 보입니다.");
        			this.commUtil.popupClose("copy");
        		}
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.AC_ServerCheckListPopup_onload,this);
            this.btn_Close.addEventHandler("onclick",this.btn_Close_onclick,this);
            this.grd_CopyYYYYMM.addEventHandler("oncellclick",this.grd_CopyYYYYMM_oncellclick,this);
            this.btn_Cancel.addEventHandler("onclick",this.btn_Cancel_onclick,this);
            this.btn_OK.addEventHandler("onclick",this.btn_OK_onclick,this);
        };
        this.loadIncludeScript("AC_ServerCheckListPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
