(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("salesScheduleMgFm");
            this.set_titletext("공통코드관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(470,150);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDetailCond", this);
            obj.getSetter("firefirstcount").set("0");
            obj._setContents("<ColumnInfo><Column id=\"CLIENT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CLIENT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRJT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRJT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SCHD_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMailContents", this);
            obj.getSetter("firefirstcount").set("0");
            obj._setContents("<ColumnInfo><Column id=\"MAIL_SUBJECT\" type=\"string\" size=\"32\"/><Column id=\"USER_ID\" type=\"string\" size=\"32\"/><Column id=\"MAIL_CONTENTS\" type=\"string\" size=\"32\"/><Column id=\"USER_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","25","5",null,"43","284",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("메일 정보");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00","7","58","189","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("이메일 PASSWORD");
            obj.set_cssclass("sta_WF_LabelnoLine");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPassword","206","58","251","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_imemode("alpha");
            obj.set_password("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"100","68","28","69",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_CrudSave");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"100","50","28","15",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("닫기");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",470,150,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtPassword","value","dsMailContents","MAIL_SUBJECT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("salaryMaiIInfoPuFm.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	salaryMailContentsPuFm.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/06/08
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/06/08			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvRowPositionMain = -1;
        this.fvRowPositionSub  = -1;
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	var sPwd = nexacro.getPrivateProfile("salaryEmailPassword");
        	if(sPwd){
        		this.edtPassword.set_value(sPwd);
        	}
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	//this.fnTranSearch();
        };

        //저장
        this.cfnSave = function ()
        {

        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //저장

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //transaction
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {

        };

        //popup
        this.fnPopupCallback = function (sPopupId, sRtn)
        {

        };

        //message
        this.fnMsgCallback = function (sMsgId, sRtn)
        {

        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        //조회
        this.divSearch_btnSearch_onclick = function(obj,e)
        {

        };

        this.divButton_btnSave_onclick = function(obj,e)
        {
        	nexacro.setPrivateProfile("salaryEmailPassword",this.edtPassword.value);
        	this.close();
        };

        this.divButton_btnClose_onclick = function(obj,e)
        {
        	this.close();
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSave.addEventHandler("onclick",this.divButton_btnSave_onclick,this);
            this.btnClose.addEventHandler("onclick",this.divButton_btnClose_onclick,this);
        };
        this.loadIncludeScript("salaryMaiIInfoPuFm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
