(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmLogin");
            this.set_titletext("LoginFrame");
            this.set_cssclass("frm_login");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PASSWORD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PWD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLoginResult", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFcmIn", this);
            obj._setContents("<ColumnInfo><Column id=\"TOKEN\" type=\"STRING\" size=\"256\"/><Column id=\"MSG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFcmInOut", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divLogin","198.00","115","863","450",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            obj.set_cssclass("div_login");
            this.addChild(obj.name, obj);

            obj = new Static("staUserId","480.00","120","340","50",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_LOGIN_Id");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("staPassword","480.00","190","340","50",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_LOGIN_Pw");
            this.divLogin.addChild(obj.name, obj);

            obj = new Edit("edtUserId","603.00","130","210","30",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("2");
            obj.set_cssclass("edt_LOGIN_Input");
            obj.set_inputtype("alpha,digit,english,number,sign,symbol,numberandenglish");
            obj.set_text("");
            this.divLogin.addChild(obj.name, obj);

            obj = new Edit("edtPassword","603.00","200","210","30",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("3");
            obj.set_password("true");
            obj.set_cssclass("edt_LOGIN_Input");
            obj.set_visible("true");
            obj.set_inputtype("alpha,digit,english,number,symbol,numberandenglish");
            obj.set_text("");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("staTitle","469.00","26","366","60",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_login_title");
            this.divLogin.addChild(obj.name, obj);

            obj = new CheckBox("chkSaveId","484.00","273","150","28",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("5");
            obj.set_text("Remember me");
            obj.set_cssclass("chk_login_save");
            obj.set_value("false");
            this.divLogin.addChild(obj.name, obj);

            obj = new CheckBox("chkView","790.00","204","26","26",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("6");
            obj.set_cssclass("chk_login");
            obj.set_value("false");
            this.divLogin.addChild(obj.name, obj);

            obj = new Button("btnLogin","484.00","334","344","40",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("7");
            obj.set_text("LOGIN");
            obj.set_cssclass("btn_login_login");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("sta01","484.00",null,"344","20",null,"19",null,null,null,null,this.divLogin.form);
            obj.set_taborder("8");
            obj.set_text("COPYRIGHT(C) 2024 UNIDIA. ALL RIGHTS RESERVED");
            obj.set_cssclass("sta_login_copyright");
            this.divLogin.addChild(obj.name, obj);

            obj = new Static("sta_log","0","0","450",null,null,"0",null,null,null,null,this.divLogin.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_LOGIN_Logobg");
            this.divLogin.addChild(obj.name, obj);

            obj = new Combo("cboCompany","603.00","97","210","28",null,null,null,null,null,null,this.divLogin.form);
            obj.set_taborder("10");
            obj.set_innerdataset("gdsCompany");
            obj.set_codecolumn("SSC_CD");
            obj.set_datacolumn("SSC_CD_KORN_NM");
            obj.set_cssclass("cbo_WF_Cal");
            obj.set_visible("false");
            obj.set_value("");
            obj.set_index("-1");
            this.divLogin.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divLogin.form
            obj = new Layout("default","",0,0,this.divLogin.form,function(p){});
            this.divLogin.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divLogin.form.edtUserId","value","dsCond","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divLogin.form.cboCompany","value","dsCond","COMPANY_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmLogin.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	frmLogin.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2020/11/24
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2020/11/24			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        /**
         * @description 화면 오픈
         */
        this.form_onload = function(obj,e)
        {
        	// form size 변경시 divLogin size 변경
        	this.fnDivLoginResize();

        	this.getKey();

        	this.fnGetId();
        };

        /**
         * @description 화면 리사이징
         */
        this.frmLogin_onsize = function(obj,e)
        {
        	// form size 변경시 divLogin size 변경
        	this.fnDivLoginResize();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/

        /**
         * @description RSA Key 획득 및 자동로그인.
         */
        this.getKey = function()
        {
        	this.setWaitCursor(true);
        	// form size 변경시 divLogin size 변경
        	//공통코드
        	var strSvcId    = "LoginSession";
        	var strSvcUrl   = "LoginSession.do";
        	var inData      = "";
        	var outData     = "gdsKey=dsKey gdsMessage=dsMessage gdsUser=dsLoginUser gdsCommCode=dsComboData gdsMessage=dsMessage gdsMyMenu=dsMyMenu gdsMenu=dsMenu gdsAddBtn=dsAddBtn gdsCompany=dsCompany";
        	var strArg      = "sSytmFlagCd="+nexacro.getApplication().gvSytmFlagName;
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]
        };

        this.fnGetBaseInfo = function ()
        {
        	//공통코드
        	var strSvcId    = "SearchBaseInfo";
        	var strSvcUrl   = "SearchBaseInfo.do";
        	var inData      = "";
        	var outData     = "gdsCommCode=dsComboData gdsMessage=dsMessage gdsMyMenu=dsMyMenu gdsMenu=dsMenu gdsAddBtn=dsAddBtn";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]
        };

        this.fnLogin = function ()
        {
        	this.divLogin.form.edtPassword.updateToDataset();
        	// 정합성 체크
        	this.gfnClearValidation(this.dsCond);
        	this.gfnSetValidation(this.dsCond, "USER_ID", "사용자ID"	, "required");
        	if (this.gfnValidation(this.dsCond, "U") == false) return;

        	// 바인딩되지 않은 필드
        	if(this.gfnValidationField(this.divLogin.form.edtPassword, "Password", "required", null, true, true) == false) return;


        	//데이터셋 세팅
        	this.gfnSetLoginLogDataset();

        	// PASSWORD SHA256 DECRYPT
        	var pswd = this.divLogin.form.edtPassword.value;
        	var shaObj = new jsSHA("SHA-256", "TEXT");
        	shaObj.update(pswd);
        	var hash = shaObj.getHash("HEX");

        	this.dsCond.setColumn(0, "USER_PWD", this.gfnEncData(hash));

        	// SECURITY TYPE : 무조건 1
        	this.dsCond.setColumn(0, "S_KEY", "");
        	this.dsCond.setColumn(0, "LOGFLAG", nexacro.getApplication().gvSytmLogFlag);


        	//로그인
        	var strSvcId    = "Login";
        	var strSvcUrl   = "Login.do";
        	var inData      = "dsCond=dsCond gdsLoginLog=gdsLoginLog";
        	var outData     = "gdsUser=dsLoginUser gdsCommCode=dsComboData gdsMessage=dsMessage gdsMyMenu=dsMyMenu gdsMenu=dsMenu gdsAddBtn=dsAddBtn";
        	var strArg      = "sSytmFlagCd="+nexacro.getApplication().gvSytmFlagCd;
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]
        };
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //transaction
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "SearchBaseInfo":
        			break;
        		case "Login" :
        			this.fnSetLoginResult(nErrCd,sErrMsg);
        			break;
        		case "LoginSession":
        			this.setWaitCursor(false);
        			// 세션인증사용자

        			if(nexacro.getApplication().gdsUser.rowcount>0) {
        				this.fnSetLoginResult(nErrCd, sErrMsg);
        			} else {
        				if(nexacro.getApplication().gdsKey.rowcount > 0) {
        					this.divLogin.form.cboCompany.value = nexacro.getApplication().gvCompany;
        // 					var sLoginCompany = nexacro.getPrivateProfile("loginCompany");
        // 					if(sLoginCompany) {
        // 						this.divLogin.form.cboCompany.value = sLoginCompany;
        // 					} else {
        // 						this.divLogin.form.cboCompany.index = 0;
        // 					}
        				} else {
        					this.gfnAlert("msg.keyfail", "", "logout", "fnMsgCallback");
        				}
        			}
        			break;
        		default :
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        /**
         * @description 비밀번호 변경 팝업 콜백함수
         */
        this.fnUserSettingCallback = function (sPopupId, sRtn)
        {
        	switch (sPopupId)
        	{
        		case "frmUserSetting" :
        			if (!this.gfnIsNull(sRtn))
        			{
        				this.fnGoMain();
        			}
        			break;
        		default:
        			break;
        	}
        };

        /**
         * @description 로그인 결과 세팅
         */
        this.fnSetLoginResult = function (nErrCd,sErrMsg)
        {
        	if(nErrCd == -200){
        		this.gfnAlert("msg.err.tran", [sErrMsg]);
        		return;
        	}else if(nErrCd == 0){
        		var sThemeId = this.objApp.gdsUser.getColumn(0,"THEME_ID");
        		if(!this.gfnIsNull(sThemeId)){
        			if(sThemeId == "02")
        				nexacro.loadStyle("xcssrc::darkMode.xcss");
        			else
        			    nexacro.loadStyle("xcssrc::lightMode.xcss");
        		}

        		this.fnSaveId();
        		this.fnGoMain();
        	}
        };

        /**
         * @description form size 변경시 divLogin size 변경
         */
        this.fnDivLoginResize = function()
        {
          	var nLeft = (nexacro.getApplication().mainframe.width / 2) - Math.round((this.divLogin.getOffsetWidth()) / 2);
          	var nTop = (nexacro.getApplication().mainframe.height / 2) - Math.round((this.divLogin.getOffsetHeight()) / 2);

        	nTop = nTop - 20;
        	if(nLeft <= 0){
        		nLeft = 0;
        	}
        	if(nTop <= 0){
        		nTop = 0;
        	}
           	this.divLogin.setOffsetLeft(nLeft);
        	this.divLogin.setOffsetTop(nTop);
        }

        /**
         * @description 메인 화면으로 이동
         */
        this.fnGoMain = function()
        {
        	// 로그인 후처리 & 메인화면으로 이동
        	this.gfnSetLogin();
        };

        /**
         * @description 패스워드가져오기 (저장값)
         */
        this.fnGetId = function ()
        {
        	var sIdSaveCheck = nexacro.getPrivateProfile("idSaveCheck");
        	this.divLogin.form.chkSaveId.set_value(sIdSaveCheck);
        	if(sIdSaveCheck=="1"){
        		this.divLogin.form.edtUserId.set_value(nexacro.getPrivateProfile("idSave"));
        		this.divLogin.form.edtPassword.setFocus();
        	}else{
        		this.divLogin.form.edtUserId.set_value("");
        		this.divLogin.form.edtUserId.setFocus();
        	}
        };

        /**
         * @description 패스워드세팅
         */
        this.fnSaveId = function ()
        {
        	nexacro.setPrivateProfile("idSaveCheck",(this.divLogin.form.chkSaveId.value==true?"1":"0"));

        	if(this.divLogin.form.chkSaveId.value==true){
        		nexacro.setPrivateProfile("idSave",this.divLogin.form.edtUserId.value);
        	}
        	nexacro.setPrivateProfile("loginCompany", this.divLogin.form.cboCompany.value);
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        /**
         * @description 로그인 버튼 클릭 이벤트
         */
        this.divLogin_btnLogin_onclick = function(obj,e)
        {
        	this.fnLogin();
        };

        this.edt_keyup = function(obj,e)
        {
        	if( e.keycode == 13){
        		this.fnLogin();
        	}
        };

        this.btn00_onclick = function(obj,e)
        {

        	var strSvcId    = "fcmProvider";
        	var strSvcUrl   = "fcmProvider.do";
        	var inData 		= "inDs=dsFcmIn";	//메시지, 토큰
        	var outData 	= "dsFcmInOut=outDs";
        	var strArg 		= "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]
        };

        this.btn01_onclick = function(obj,e)
        {
        	var strSvcId    = "apnsProvider";
        	var strSvcUrl   = "apnsProvider.do";
        	var inData 		= "inDs=dsFcmIn";	//메시지, 토큰
        	var outData 	= "dsFcmInOut=outDs";
        	var strArg 		= "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]
        };

        this.divLogin_chkView_onchanged = function(obj,e)
        {
        	if(e.postvalue == true) {
        		this.divLogin.form.edtPassword.set_password(false);
        	} else {
        		this.divLogin.form.edtPassword.set_password(true);
        	}
        };

        this.btnLogIn_onkeyup = function(obj,e)
        {
        	if( e.keycode == 13){
        		this.fnLogin();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.frmLogin_onsize,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.divLogin.form.edtUserId.addEventHandler("onkeyup",this.edt_keyup,this);
            this.divLogin.form.edtPassword.addEventHandler("onkeyup",this.edt_keyup,this);
            this.divLogin.form.chkView.addEventHandler("onchanged",this.divLogin_chkView_onchanged,this);
            this.divLogin.form.btnLogin.addEventHandler("onclick",this.divLogin_btnLogin_onclick,this);
            this.divLogin.form.btnLogin.addEventHandler("onkeyup",this.btnLogIn_onkeyup,this);
        };
        this.loadIncludeScript("frmLogin.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
