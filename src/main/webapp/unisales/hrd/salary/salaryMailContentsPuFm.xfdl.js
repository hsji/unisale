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
                this._setFormPosition(870,490);
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
            obj.set_text("메일 Contents 저장");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00","30","58","106","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("SUBJECT");
            obj.set_cssclass("sta_WF_LabelnoLine");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSubject","149","58",null,"24","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_imemode("alpha");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("webEditor","150","124",null,"311","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_border("1px solid #cccccc");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa00","92","370","28","40",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_01_01","30","124","106","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("BODY");
            obj.set_cssclass("sta_WF_LabelnoLine");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"446","68","28","74",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("저장");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_CrudSave");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"446","50","28","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("닫기");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00_00","30","90","106","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("발송자");
            obj.set_cssclass("sta_WF_LabelnoLine");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","149","90",null,"24","565",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_imemode("alpha");
            obj.set_maxlength("30");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00_00_00","320","90","106","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("발송자 EMAIL");
            obj.set_cssclass("sta_WF_LabelnoLine");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUserEmail","439","90",null,"24","160",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_imemode("alpha");
            obj.set_maxlength("30");
            obj.set_enable("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",870,490,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtSubject","value","dsMailContents","MAIL_SUBJECT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtUserNm","value","dsMailContents","USER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtUserEmail","value","dsMailContents","USER_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("salaryMailContentsPuFm.xfdl", function() {
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

        	var oWeb = this.webEditor;
        	this.gfnCreateWebEditor(oWeb);

        	this.dsMailContents.copyData(this.opener.dsMailContents);
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
        	// 변경된 정보없으면 리턴
        	if (this.gfnDsIsUpdated(this.dsList) == false && this.gfnDsIsUpdated(this.dsList) == false) {
        		// 저장할 데이터가 없습니다.
        		this.gfnAlert("msg.save.nochange");
        		return;
        	}

        	if(this.fnValid()){
        		this.gfnAlert("confirm.save", [""], "save", "fnMsgCallback");
        	}
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //저장
        this.fnTranSave = function ()
        {
        	var strSvcId    = "saveMailContents";
        	var strSvcUrl   = "saveMailContents.do";
        	var inData      = "dsMailContents=dsMailContents:U";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //transaction
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "saveMailContents":
        			this.opener.dsMailContents.copyData(this.dsMailContents);
        			this.close();
        			break;
        		default: break;
        	}
        };

        //popup
        this.fnPopupCallback = function (sPopupId, sRtn)
        {

        };

        //message
        this.fnMsgCallback = function (sMsgId, sRtn)
        {
        	switch(sMsgId) {
        		case "save":
        			if (this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false) {
        				return;
        			}
        			this.fnTranSave();
        			break;
        		default: break;
        	}
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
        	this.cfnSearch(); //조회
        };

        this.divButton_btnSave_onclick = function(obj,e)
        {
        	var sCont = "";
        	sCont = this.webEditor.callMethod("getData");
        	this.dsMailContents.setColumn(0, "MAIL_CONTENTS", sCont);

        	// 정합성 체크
        	this.gfnClearValidation(this.dsMailContents);

        	this.gfnSetValidation(this.dsMailContents, "MAIL_SUBJECT" , "SUBJECT"	, "required");
        	this.gfnSetValidation(this.dsMailContents, "USER_ID" , "사용자"	, "required");
        	this.gfnSetValidation(this.dsMailContents, "MAIL_CONTENTS" , "BODY"	, "required");

        	// Dataset의 변경된 Row Validation check
        	if (this.gfnValidation(this.dsMailContents, "U") == false) return false;

        	if(!this.gfnDsIsUpdated(this.dsMailContents)){
        		// 저장할 데이터가 없습니다.
        		this.gfnAlert("msg.save.nochange");
        		return;
        	}else{
        		this.fnTranSave();
        	}
        };

        this.divButton_btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        this.webEditor_onusernotify = function(obj,e)
        {
        	if (e.userdata=="instanceReady" && !this.isLoad){
        		obj.callMethod("init", obj.getOffsetHeight()-20);
        		this.isLoad=true;
        		var sCntn = this.dsMailContents.getColumn(0, "MAIL_CONTENTS");
        		if(!this.gfnIsNull(sCntn)){
        			this.webEditor.callMethod("setData", sCntn);
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.webEditor.addEventHandler("onusernotify",this.webEditor_onusernotify,this);
            this.btnSave.addEventHandler("onclick",this.divButton_btnSave_onclick,this);
            this.btnClose.addEventHandler("onclick",this.divButton_btnClose_onclick,this);
        };
        this.loadIncludeScript("salaryMailContentsPuFm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
