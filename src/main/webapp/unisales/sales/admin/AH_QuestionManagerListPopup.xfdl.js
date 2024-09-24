(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AH_QuestionManagerListPopup");
            this.set_titletext("문의담당자 상세");
            this.set_cssclass("frm_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,250);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmm_CategoryCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"string\" size=\"30\"/><Column id=\"CAPTION\" type=\"string\" size=\"255\"/><Column id=\"VAL1\" type=\"string\" size=\"100\"/><Column id=\"VAL2\" type=\"string\" size=\"100\"/><Column id=\"VAL3\" type=\"string\" size=\"100\"/><Column id=\"VAL4\" type=\"string\" size=\"100\"/><Column id=\"REMARK\" type=\"string\" size=\"1073741823\"/><Column id=\"ORD\" type=\"string\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_QuestionManager", this);
            obj._setContents("<ColumnInfo><Column id=\"QML_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_EMP_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Rtn", this);
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_close",null,"10","15","15","8",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_POP_Cls");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Static("st_Title","10","0","186","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("문의담당자 상세");
            obj.set_cssclass("sta_POP_Title");
            this.addChild(obj.name, obj);

            obj = new Static("stc_BottomFrame","0",null,null,"46","0","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_POP_BtnBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_QuestionManager","8","74",null,null,"8","stc_BottomFrame:8",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_detailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_CategoryCode","8","18","78","22",null,null,null,null,null,null,this.div_QuestionManager.form);
            obj.set_taborder("0");
            obj.set_text("질문유형");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_QuestionManager.addChild(obj.name, obj);

            obj = new Combo("cmb_CategoryCode","94","18",null,"22","8",null,null,null,null,null,this.div_QuestionManager.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_cmm_CategoryCode");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_readonly("false");
            this.div_QuestionManager.addChild(obj.name, obj);

            obj = new Static("stc_ManagerEmail","8","48","78","22",null,null,null,null,null,null,this.div_QuestionManager.form);
            obj.set_taborder("2");
            obj.set_text("담당자이메일");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_QuestionManager.addChild(obj.name, obj);

            obj = new Edit("edt_ManagerEmail","94","48",null,"22","8",null,null,null,null,null,this.div_QuestionManager.form);
            obj.set_taborder("3");
            obj.set_readonly("false");
            this.div_QuestionManager.addChild(obj.name, obj);

            obj = new Static("stc_EmpNo","8","78","78","22",null,null,null,null,null,null,this.div_QuestionManager.form);
            obj.set_taborder("4");
            obj.set_text("문의담당자");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_QuestionManager.addChild(obj.name, obj);

            obj = new Edit("edt_EmpNo","94","78","358","22",null,null,null,null,null,null,this.div_QuestionManager.form);
            obj.set_taborder("5");
            obj.set_visible("true");
            obj.set_readonly("true");
            this.div_QuestionManager.addChild(obj.name, obj);

            obj = new Button("btn_EmpPopup","edt_EmpNo:0","78","22","22",null,null,null,null,null,null,this.div_QuestionManager.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_Sch");
            obj.set_visible("true");
            this.div_QuestionManager.addChild(obj.name, obj);

            obj = new Button("btn_DeleteEmp","434","79","18","18",null,null,null,null,null,null,this.div_QuestionManager.form);
            obj.set_taborder("7");
            obj.set_cssclass("tab_MDI_MdiTabCls");
            this.div_QuestionManager.addChild(obj.name, obj);

            obj = new Static("stc_BasicInfo","8","43",null,"31","8",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_POP_GroupBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_BasicInfoTitle","16","51","122","15",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("정보");
            obj.set_cssclass("sta_POP_GroupTit");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Cancel",null,null,"60","22","8","12",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_cancel");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Save",null,null,"60","22","77","12",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_tran");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Del",null,null,"60","22","145","12",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_tran");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_QuestionManager.form
            obj = new Layout("default","",0,0,this.div_QuestionManager.form,function(p){});
            this.div_QuestionManager.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",500,250,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_QuestionManager.form.cmb_CategoryCode","value","ds_QuestionManager","CATEGORY_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_QuestionManager.form.edt_ManagerEmail","value","ds_QuestionManager","MANAGER_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_QuestionManager.form.edt_EmpNo","value","ds_QuestionManager","EMP_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("AH_QuestionManagerListPopup.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("AH_QuestionManagerListPopup.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("AH_QuestionManagerListPopup.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("AH_QuestionManagerListPopup.xfdl","Script::CommGrid.xjs");
        this.addIncludeScript("AH_QuestionManagerListPopup.xfdl","Script::ext_WebEditor.xjs");
        this.registerScript("AH_QuestionManagerListPopup.xfdl", function() {
        /************************************************************************************************
         * 01. 업무구분 : 홈페이지관리
         * 02. 화면명   : 문의담당자 상세팝업(AH_QuestionManagerListPopup)
         * 03. 화면설명 : 문의담당자 상세
         * 04. 작성일   : 2022.09.13
         * 05. 작성자   : 박종언
         * 06. 수정이력 :
         ***********************************************************************************************
         *     수정일          이  름    사유
         ***********************************************************************************************
         *
         ***********************************************************************************************/
        /************************************************************************************************
        * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        this.executeIncludeScript("Script::CommSystem.xjs"); /*include "Script::CommSystem.xjs"*/;
        this.executeIncludeScript("Script::CommTrans.xjs"); /*include "Script::CommTrans.xjs"*/;
        this.executeIncludeScript("Script::CommUtil.xjs"); /*include "Script::CommUtil.xjs"*/;
        this.executeIncludeScript("Script::CommGrid.xjs"); /*include "Script::CommGrid.xjs"*/;
        this.executeIncludeScript("Script::ext_WebEditor.xjs"); /*include "Script::ext_WebEditor.xjs"*/;

        /************************************************************************************************
        * 전역 변수 영역
        ************************************************************************************************/
        this.FV_QML_SEQ;
        this.FV_MODE;
        /************************************************************************************************
        * FORM 영역 EVENT 영역
        ************************************************************************************************/
        this.AH_QuestionManagerListPopup_onload = function(obj,e)
        {
        	this.gfnCompInit(obj);	//	사용자 Grid
        	this.fnFormInit();
        	this.fnGetCode();
        };

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.fnFormInit = function()
        {
        	var sTitle = this.st_Title.text;
        	this.FV_QML_SEQ =  this.parent.pvQmlSeq;
        	this.FV_MODE =  this.parent.pvMode;

        	if (this.FV_MODE == "I") {
        		sTitle = "문의담당자 등록";
        	}
        	this.st_Title.set_text(sTitle);
        };

        this.fnSetButtonControl = function()
        {
        	var curRow = this.ds_QuestionManager.rowposition;
        	var sEmpNo = this.ds_QuestionManager.getColumn(curRow, "EMP_NO");

        	if(!this.gfnIsEmpty(sEmpNo)) this.div_QuestionManager.form.btn_DeleteEmp.set_visible(true);
        	else this.div_QuestionManager.form.btn_DeleteEmp.set_visible(false);
        };
        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        // 공통코드 조회
        this.fnGetCode = function()
        {
        	this.gfnAddCodeDataset("ds_cmm_CategoryCode",	"CATEGORY_CODE");		// 질문유형
        	this.gfnCodeTransaction();
        };

        // 조회
        this.fnQueryData = function()
        {
        	this.gfnAddSendParameter("QML_SEQ", this.FV_QML_SEQ);
        	this.gfnAddOutputDataset("ds_QuestionManager", "dsOutput");
        	this.gfnCommonTransaction("Search", "AH_QuestionManagerList_S01");
        };

        this.fnEmpPopup = function()
        {
        	this.commUtil.popupOrganization(this, "popOrganization", "fnPopupCallBack", "EMP");
        };

        // 문의 담당자 삭제
        this.fnClearEmp = function(bEmail)
        {
        	var curRow = this.ds_QuestionManager.rowposition;
        	this.ds_QuestionManager.setColumn(curRow, "EMP_NO", null);
        	this.ds_QuestionManager.setColumn(curRow, "EMP_NM", null);
        	if(bEmail) this.ds_QuestionManager.setColumn(curRow, "MANAGER_EMAIL", null);

        	this.fnSetButtonControl();
        };

        // 체크 사항
        this.fnValidation = function()
        {
        	var curRow = this.ds_QuestionManager.rowposition;

        	/*
        		공통 체크 항목 : 담당자 이메일( 질문유형은 default 값으로 지정 되어서 체크 X )
        	*/
        	if(this.gfnIsEmpty(this.ds_QuestionManager.getColumn(curRow, "MANAGER_EMAIL"))) { alert("담당자 이메일은 필수 입력 항목입니다."); this.div_QuestionManager.form.edt_ManagerEmail.setFocus(); return false;}
        	return true;
        };

        // 기존 문의담당자 존재 여부 확인
        this.fnDuplicateCheckData = function()
        {
        	var curRow = this.ds_QuestionManager.rowposition;
        	var sCategoryCode =  this.ds_QuestionManager.getColumn(curRow, "CATEGORY_CODE");
        	var sManagerEmail =  this.ds_QuestionManager.getColumn(curRow, "MANAGER_EMAIL");

        	this.gfnAddSendParameter("CATEGORY_CODE", sCategoryCode);
        	this.gfnAddSendParameter("MANAGER_EMAIL", sManagerEmail);
        	this.gfnAddOutputDataset("ds_Rtn", "dsOutput");
        	this.gfnCommonTransaction("DuplicateCheckData", "AH_QuestionManagerList_S02");
        };

        // 저장
        this.fnSaveData = function(sMode)
        {
        	var strSvcID = "SaveData";
        	if(sMode == "Delete")
        	{
        		this.ds_QuestionManager.deleteRow(this.ds_QuestionManager.rowposition);
        		strSvcID = "Delete";
        	}
        	this.gfnAddInputDataset ("ds_QuestionManager",	"ds_QuestionManager");
        	this.gfnCommonTransaction(strSvcID, "AH_QuestionManagerList_R01");
        };

         // 화면 콜백
        this.fnCallBack = function (strSvcID, nErrorCode, strErrorMag)
        {
        	switch (strSvcID)
        	{
        		case "gfnGetCode" :
        			if (this.FV_MODE == "I") {
        				var nRow = this.ds_QuestionManager.addRow();
        				this.div_QuestionManager.form.cmb_CategoryCode.set_index(0);
        				this.fnSetButtonControl();
        			} else {
        				this.fnQueryData();
        			}
        			break;
        		case "Search" :
        			this.fnSetButtonControl();
        			break;

        		case "Delete" :
        			alert("삭제 되었습니다.");
        			this.commUtil.popupClose("Delete");
        			break;

        		case "SaveData" :
        			alert("저장 되었습니다.");
        			break;

        		case "DuplicateCheckData" :
        			var sCnt = this.ds_Rtn.getColumn(0, "CNT");
        			if(sCnt == 0)
        			{
        				this.fnSaveData("Save");
        			}
        			else
        			{
        				alert("이미 문의 담당자가 존재 합니다.");
        			}
        			break;
        	}
        };

        // 팝업 콜백
        this.fnPopupCallBack = function(sPopupId, Variant)
        {
        	Variant = this.commUtil.popupReturn();
        	if(this.gfnIsEmpty(Variant))
        	{
        		return;
        	}
        	else
        	{
        		switch(sPopupId)
        		{
        			case "popupSearchEmp" : // 문의담당자 선택(btn_EmpPopupTmp 팝업 나중에 삭제)
        				var ds = new nexacro.Dataset();
        				ds.loadXML(Variant);

        				if(ds.rowcount > 0)
        				{
        					var curRow = this.ds_QuestionManager.rowposition;
        					this.ds_QuestionManager.setColumn(curRow, "EMP_NO", ds.getColumn(0, "EMP_NO"));
        					this.ds_QuestionManager.setColumn(curRow, "EMP_NM", ds.getColumn(0, "EMP_NM"));
        					this.ds_QuestionManager.setColumn(curRow, "MANAGER_EMAIL", ds.getColumn(0, "EMAIL"));

        					this.fnSetButtonControl();
        				}
        			break;

        			case "popOrganization" : // 문의담당자 선택
        				var ds = new nexacro.Dataset();
        				ds.loadXML(Variant);

        				if(ds.rowcount > 0)
        				{
        					var curRow = this.ds_QuestionManager.rowposition;
        					this.ds_QuestionManager.setColumn(curRow, "EMP_NO", ds.getColumn(0, "EMP_NO"));
        					this.ds_QuestionManager.setColumn(curRow, "EMP_NM", ds.getColumn(0, "EMP_NM"));
        					this.ds_QuestionManager.setColumn(curRow, "MANAGER_EMAIL", ds.getColumn(0, "EMAIL"));

        					this.fnSetButtonControl();
        				}
        			break;
        		}
        	}
        };
        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.common_onclick = function(obj,e)
        {
        	switch(obj.name) {
        		case "btn_Save" : // 저장
        			if(this.fnValidation()) this.fnDuplicateCheckData();
        			break;

        		case "btn_close": case "btn_Cancel":
        			//this.close();
        			this.commUtil.popupClose("close");
        			break;

        		case "btn_Del":
        			if(this.confirm("해당 문의 담당자를 삭제 하시겠습니까?")) this.fnSaveData("Delete");
        			break;

        		case "btn_EmpPopup":
        			this.fnEmpPopup();
        			break;

        		case "btn_DeleteEmp":
        			var sEmpNo = this.ds_QuestionManager.getColumn(this.ds_QuestionManager.rowposition, "EMP_NO");
        			if(!this.gfnIsEmpty(sEmpNo))
        			{
        				var bEmail = this.confirm("담당자이메일도 삭제 하시겠습니까?");
        				this.fnClearEmp(bEmail);
        			}
        			break;
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.AH_QuestionManagerListPopup_onload,this);
            this.btn_close.addEventHandler("onclick",this.common_onclick,this);
            this.div_QuestionManager.form.btn_EmpPopup.addEventHandler("onclick",this.common_onclick,this);
            this.div_QuestionManager.form.btn_DeleteEmp.addEventHandler("onclick",this.common_onclick,this);
            this.btn_Cancel.addEventHandler("onclick",this.common_onclick,this);
            this.btn_Save.addEventHandler("onclick",this.common_onclick,this);
            this.btn_Del.addEventHandler("onclick",this.common_onclick,this);
        };
        this.loadIncludeScript("AH_QuestionManagerListPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
