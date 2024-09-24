(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AC_ServerCheckDetPopup");
            this.set_titletext("복사할 데이터 설정");
            this.set_cssclass("frm_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,250);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsServerCheckDet", this);
            obj._setContents("<ColumnInfo><Column id=\"SCD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SCL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SAL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PW\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_PW\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAccountList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SAL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SERVER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PW\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_PW\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsConfirmData", this);
            obj._setContents("<ColumnInfo><Column id=\"SCL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SAL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PW\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_PW\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("st_Title","10","0","356","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("계정목록");
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

            obj = new Grid("grd_AccountList","0","35",null,null,"0","Static01:0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("dsAccountList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"0\"/><Cell col=\"1\" text=\"서버명\"/><Cell col=\"2\" text=\"계정\"/><Cell col=\"3\" text=\"적용 패스워드\"/><Cell col=\"4\" text=\"이전 패스워드\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:SERVER_NAME\" tooltiptext=\"bind:SERVER_NAME\"/><Cell col=\"2\" text=\"bind:ACCOUNT\"/><Cell col=\"3\" text=\"bind:NEW_PW\"/><Cell col=\"4\" text=\"bind:OLD_PW\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Cancel",null,null,"65","22","8","3",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_cancel");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btn_OK",null,null,"65","22","80","3",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_tran");
            obj.set_text("적용");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,250,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("AC_ServerCheckDetPopup.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("AC_ServerCheckDetPopup.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("AC_ServerCheckDetPopup.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("AC_ServerCheckDetPopup.xfdl","Script::CommGrid.xjs");
        this.addIncludeScript("AC_ServerCheckDetPopup.xfdl","Script::ext_Report.xjs");
        this.registerScript("AC_ServerCheckDetPopup.xfdl", function() {
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
        var curYYYYMM = ""; // 조회 년월
        var sSclSeq = ""; // 체크리스트 일련번호
        /************************************************************************************************
        * FORM 영역 EVENT 영역
        ************************************************************************************************/
        this.AC_ServerCheckDetPopup_onload = function(obj,e)
        {
        	this.dsAccountList.copyData(this.parent.dsAccountList);
        	this.dsServerCheckDet.copyData(this.parent.dsServerCheckDet);
        	curYYYYMM = this.parent.curYYYYMM;
        	sSclSeq = this.parent.sSclSeq;
        	this.fnCompareList();
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

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/

        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        // 기존에 등록 된 계정과 계정 목록 비교
        this.fnCompareList = function()
        {
        	var sAccountCnt = this.dsAccountList.rowcount;
        	for(var i = 0; i < sAccountCnt; i++)
        	{
        		var sSalSeq = this.dsServerCheckDet.getColumn(i, "SAL_SEQ");
        		var findRow = this.dsAccountList.findRow("SAL_SEQ", sSalSeq);
        		if(findRow > -1) this.dsAccountList.setColumn(findRow, "CHK", "1");
        	}
        }

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
        			alert(curYYYYMM + " 년월 데이터 복사 완료 되었습니다.");
        			this.commUtil.popupClose("copy");
        		}
        	}
        };

        this.btn_OK_onclick = function(obj,e)
        {
        	var sAccountCnt = this.dsAccountList.rowcount;
        	for(var i = 0; i < sAccountCnt; i++)
        	{
        		var sChked = this.dsAccountList.getColumn(i, "CHK");
        		if(sChked == "1")
        		{
        			var nRow = this.dsConfirmData.addRow();
        			this.dsConfirmData.copyRow(nRow, this.dsAccountList, i);
        			if(!this.gfnIsEmpty(sSclSeq)) this.dsConfirmData.setColumn(nRow, "SCL_SEQ", sSclSeq);
        		}
        	}

        	this.commUtil.popupClose(this.dsConfirmData);
        };

        this.grd_AccountList_onheadclick = function(obj,e)
        {
        	if (e.col == 0) {
        		var sHeadChk = obj.getCellText( -1, e.cell);
        		if (sHeadChk == "0")	sHeadChk = "1";
        		else					sHeadChk = "0";

        		obj.setCellProperty( "head", e.cell, "text", sHeadChk);
        		this.dsAccountList.set_enableevent(false);
        		for (var i=0; i<this.dsAccountList.rowcount; i++) {
        			this.dsAccountList.setColumn(i, "CHK", sHeadChk);
        		}
        		this.dsAccountList.set_enableevent(true);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.AC_ServerCheckDetPopup_onload,this);
            this.btn_Close.addEventHandler("onclick",this.btn_Close_onclick,this);
            this.grd_AccountList.addEventHandler("onheadclick",this.grd_AccountList_onheadclick,this);
            this.btn_Cancel.addEventHandler("onclick",this.btn_Cancel_onclick,this);
            this.btn_OK.addEventHandler("onclick",this.btn_OK_onclick,this);
        };
        this.loadIncludeScript("AC_ServerCheckDetPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
