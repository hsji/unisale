(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AH_QuestionListPopup");
            this.set_titletext("문의 상세팝업");
            this.set_cssclass("frm_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmm_CategoryCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"string\" size=\"30\"/><Column id=\"CAPTION\" type=\"string\" size=\"255\"/><Column id=\"VAL1\" type=\"string\" size=\"100\"/><Column id=\"VAL2\" type=\"string\" size=\"100\"/><Column id=\"VAL3\" type=\"string\" size=\"100\"/><Column id=\"VAL4\" type=\"string\" size=\"100\"/><Column id=\"REMARK\" type=\"string\" size=\"1073741823\"/><Column id=\"ORD\" type=\"string\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_InflowPathCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"string\" size=\"30\"/><Column id=\"CAPTION\" type=\"string\" size=\"255\"/><Column id=\"VAL1\" type=\"string\" size=\"100\"/><Column id=\"VAL2\" type=\"string\" size=\"100\"/><Column id=\"VAL3\" type=\"string\" size=\"100\"/><Column id=\"VAL4\" type=\"string\" size=\"100\"/><Column id=\"REMARK\" type=\"string\" size=\"1073741823\"/><Column id=\"ORD\" type=\"string\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Question", this);
            obj._setContents("<ColumnInfo><Column id=\"QL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TEL_HP\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"INFLOW_PATH_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENTS\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"MARKETING_AGREED\" type=\"STRING\" size=\"256\"/><Column id=\"USE_PRODUCT_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DATE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_BottomFrame","0",null,null,"46","1","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_BtnBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"10","15","15","8",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_POP_Cls");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Static("st_Title","10","0","186","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("문의 상세");
            obj.set_cssclass("sta_POP_Title");
            this.addChild(obj.name, obj);

            obj = new Static("stc_BasicInfo","8","43",null,"31","8",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_POP_GroupBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_Question","8","stc_BasicInfo:0",null,null,"8","stc_BottomFrame:8",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_detailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_CategoryCode","8","8","88","22",null,null,null,null,null,null,this.div_Question.form);
            obj.set_taborder("0");
            obj.set_text("질문유형");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_Question.addChild(obj.name, obj);

            obj = new Combo("cmb_CategoryCode","stc_CategoryCode:8","8","187","22",null,null,null,null,null,null,this.div_Question.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_cmm_CategoryCode");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_readonly("true");
            this.div_Question.addChild(obj.name, obj);

            obj = new Static("stc_CustomerName","cmb_CategoryCode:8","8","68","22",null,null,null,null,null,null,this.div_Question.form);
            obj.set_taborder("2");
            obj.set_text("문의자");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_Question.addChild(obj.name, obj);

            obj = new Static("stc_CompanyName","8","38","88","22",null,null,null,null,null,null,this.div_Question.form);
            obj.set_taborder("3");
            obj.set_text("기업/기관명");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_Question.addChild(obj.name, obj);

            obj = new Static("stc_TelHp","299","38","68","22",null,null,null,null,null,null,this.div_Question.form);
            obj.set_taborder("4");
            obj.set_text("연락처");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_Question.addChild(obj.name, obj);

            obj = new Static("stc_Contents","8","128","88",null,null,"8",null,null,null,null,this.div_Question.form);
            obj.set_taborder("5");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_Question.addChild(obj.name, obj);

            obj = new Edit("edt_CustomerName","stc_CustomerName:8","8","187","22",null,null,null,null,null,null,this.div_Question.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.div_Question.addChild(obj.name, obj);

            obj = new Static("stc_Email","edt_CustomerName:8","8","68","22",null,null,null,null,null,null,this.div_Question.form);
            obj.set_taborder("6");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_Question.addChild(obj.name, obj);

            obj = new Edit("edt_CompanyName","104","38","187","22",null,null,null,null,null,null,this.div_Question.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.div_Question.addChild(obj.name, obj);

            obj = new Edit("edt_TelHp","375","38","187","22",null,null,null,null,null,null,this.div_Question.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            this.div_Question.addChild(obj.name, obj);

            obj = new Edit("edt_Email","stc_Email:8","8",null,"22","8",null,null,null,null,null,this.div_Question.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            this.div_Question.addChild(obj.name, obj);

            obj = new Static("stc_InflowPathCode","8","68","88","22",null,null,null,null,null,null,this.div_Question.form);
            obj.set_taborder("11");
            obj.set_text("유입경로");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_Question.addChild(obj.name, obj);

            obj = new Combo("cmb_InflowPathCode","104","67","187","22",null,null,null,null,null,null,this.div_Question.form);
            obj.set_taborder("12");
            obj.set_innerdataset("ds_cmm_InflowPathCode");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_readonly("true");
            this.div_Question.addChild(obj.name, obj);

            obj = new Static("stc_ManagerEmail","299","67","68","22",null,null,null,null,null,null,this.div_Question.form);
            obj.set_taborder("13");
            obj.set_text("담당자메일");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_Question.addChild(obj.name, obj);

            obj = new Edit("edt_ManagerEmail","375","68",null,"22","8",null,null,null,null,null,this.div_Question.form);
            obj.set_taborder("14");
            obj.set_readonly("true");
            this.div_Question.addChild(obj.name, obj);

            obj = new Static("stc_InsertDate","570","37","68","22",null,null,null,null,null,null,this.div_Question.form);
            obj.set_taborder("15");
            obj.set_text("등록일자");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_Question.addChild(obj.name, obj);

            obj = new Calendar("cal_InsertDate","646","37",null,"22","8",null,null,null,null,null,this.div_Question.form);
            obj.set_taborder("16");
            obj.set_readonly("true");
            this.div_Question.addChild(obj.name, obj);

            obj = new Static("stc_MarketingAgreed","8","98","88","22",null,null,null,null,null,null,this.div_Question.form);
            obj.set_taborder("17");
            obj.set_text("마켓팅수신동의");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_Question.addChild(obj.name, obj);

            obj = new Combo("cmb_MarketingAgreed","104","98","187","22",null,null,null,null,null,null,this.div_Question.form);
            obj.set_taborder("18");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("true");
            var div_Question_form_cmb_MarketingAgreed_innerdataset = new nexacro.NormalDataset("div_Question_form_cmb_MarketingAgreed_innerdataset", obj);
            div_Question_form_cmb_MarketingAgreed_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">동의</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">미동의</Col></Row></Rows>");
            obj.set_innerdataset(div_Question_form_cmb_MarketingAgreed_innerdataset);
            this.div_Question.addChild(obj.name, obj);

            obj = new Static("stc_UseProductFlag","299","98","68","22",null,null,null,null,null,null,this.div_Question.form);
            obj.set_taborder("19");
            obj.set_text("SW 사용");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_Question.addChild(obj.name, obj);

            obj = new Combo("cmb_UseProductFlag","375","98","187","22",null,null,null,null,null,null,this.div_Question.form);
            obj.set_taborder("20");
            obj.set_readonly("true");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_Question_form_cmb_UseProductFlag_innerdataset = new nexacro.NormalDataset("div_Question_form_cmb_UseProductFlag_innerdataset", obj);
            div_Question_form_cmb_UseProductFlag_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(div_Question_form_cmb_UseProductFlag_innerdataset);
            this.div_Question.addChild(obj.name, obj);

            obj = new TextArea("ta_Contents","104","128",null,null,"8","8",null,null,null,null,this.div_Question.form);
            obj.set_taborder("21");
            obj.set_readonly("true");
            obj.set_wordWrap("char");
            this.div_Question.addChild(obj.name, obj);

            obj = new Static("stc_BasicInfoTitle","16","51","122","15",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("정보");
            obj.set_cssclass("sta_POP_GroupTit");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Cancel",null,null,"60","22","6","12",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_cancel");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_Question.form
            obj = new Layout("default","",0,0,this.div_Question.form,function(p){});
            this.div_Question.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",800,500,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_Question.form.cmb_CategoryCode","value","ds_Question","CATEGORY_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_Question.form.edt_CustomerName","value","ds_Question","CUSTOMER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_Question.form.edt_CompanyName","value","ds_Question","COMPANY_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_Question.form.edt_TelHp","value","ds_Question","TEL_HP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_Question.form.edt_Email","value","ds_Question","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_Question.form.cmb_InflowPathCode","value","ds_Question","INFLOW_PATH_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_Question.form.edt_ManagerEmail","value","ds_Question","MANAGER_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_Question.form.cal_InsertDate","value","ds_Question","INSERT_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_Question.form.cmb_MarketingAgreed","value","ds_Question","MARKETING_AGREED");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_Question.form.cmb_UseProductFlag","value","ds_Question","USE_PRODUCT_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_Question.form.ta_Contents","value","ds_Question","CONTENTS");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("AH_QuestionListPopup.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("AH_QuestionListPopup.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("AH_QuestionListPopup.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("AH_QuestionListPopup.xfdl","Script::CommGrid.xjs");
        this.addIncludeScript("AH_QuestionListPopup.xfdl","Script::ext_WebEditor.xjs");
        this.registerScript("AH_QuestionListPopup.xfdl", function() {
        /************************************************************************************************
         * 01. 업무구분 : 홈페이지관리
         * 02. 화면명   : 문의관리 상세팝업(AH_QuestionListPopup)
         * 03. 화면설명 : 문의관리 상세
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
        this.FV_QL_SEQ;
        /************************************************************************************************
        * FORM 영역 EVENT 영역
        ************************************************************************************************/
        this.AH_QuestionListPopup_onload = function(obj,e)
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
        	this.FV_QL_SEQ = this.parent.pvQlSeq;
        };

        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        // 공통코드 조회
        this.fnGetCode = function()
        {
        	this.gfnAddCodeDataset("ds_cmm_CategoryCode",	"CATEGORY_CODE"); 		// 질문유형
        	this.gfnAddCodeDataset("ds_cmm_InflowPathCode",	"INFLOW_PATH_CODE"); 	// 유입경로

        	this.gfnCodeTransaction();
        };

        // 조회
        this.fnQueryData = function()
        {
        	this.gfnAddSendParameter("QL_SEQ", this.FV_QL_SEQ);
        	this.gfnAddOutputDataset("ds_Question",  "dsOutput");
        	this.gfnCommonTransaction("Search", "AH_QuestionList_S01");
        };

         // 화면 콜백
        this.fnCallBack = function (strSvcID, nErrorCode, strErrorMag)
        {
        	switch (strSvcID)
        	{
        		case "gfnGetCode" :
        			this.fnQueryData();
        			break;
        		case "Search" :
        			break;
        	}
        };

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.common_onclick = function(obj,e)
        {
        	switch(obj.name) {
        		case "btn_close": case "btn_Cancel":
        			//this.close();
        			this.commUtil.popupClose("OK");
        			break;
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.AH_QuestionListPopup_onload,this);
            this.btn_close.addEventHandler("onclick",this.common_onclick,this);
            this.btn_Cancel.addEventHandler("onclick",this.common_onclick,this);
        };
        this.loadIncludeScript("AH_QuestionListPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
