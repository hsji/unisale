(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmUserSetting");
            this.set_titletext("사용자설정 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(320,230);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTheme", this);
            obj._setContents("<ColumnInfo><Column id=\"PASSWORD\" type=\"STRING\" size=\"256\"/><Column id=\"THEME_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CUR_PASSWORD\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PASSWORD\" type=\"STRING\" size=\"256\"/><Column id=\"CONFIRM_PASSWORD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CONFIRM_PASSWORD\"/><Col id=\"NEW_PASSWORD\"/><Col id=\"CUR_PASSWORD\"/><Col id=\"USER_ID\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUser", this);
            obj._setContents("<ColumnInfo><Column id=\"PASSWORD\" type=\"STRING\" size=\"256\"/><Column id=\"THEME_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTheme","30","62","260","100",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Div("divPassword","30","67","260","100",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staCur01","0","0",null,"34","0",null,null,null,null,null,this.divPassword.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divPassword.addChild(obj.name, obj);

            obj = new Edit("edtCurPassword","125","5",null,"24","5",null,null,null,null,null,this.divPassword.form);
            obj.set_taborder("1");
            obj.set_password("true");
            this.divPassword.addChild(obj.name, obj);

            obj = new Static("staNew01","0","staCur01:-1",null,"34","0",null,null,null,null,null,this.divPassword.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divPassword.addChild(obj.name, obj);

            obj = new Static("staCur","-4","0","125","34",null,null,null,null,null,null,this.divPassword.form);
            obj.set_taborder("8");
            obj.set_text("현재 비밀번호");
            obj.set_cssclass("sta_WF_Label");
            this.divPassword.addChild(obj.name, obj);

            obj = new Edit("edtNewPassword","125","staCur01:4",null,"24","5",null,null,null,null,null,this.divPassword.form);
            obj.set_taborder("4");
            obj.set_password("true");
            this.divPassword.addChild(obj.name, obj);

            obj = new Static("staNew","-4","staCur:-1",null,"34","139",null,null,null,null,null,this.divPassword.form);
            obj.set_taborder("3");
            obj.set_text("새 비밀번호");
            obj.set_cssclass("sta_WF_Label");
            this.divPassword.addChild(obj.name, obj);

            obj = new Static("staConfirm01","0","staNew01:-1",null,"34","0",null,null,null,null,null,this.divPassword.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divPassword.addChild(obj.name, obj);

            obj = new Static("staConfirm","-4","staNew:-1","125","34",null,null,null,null,null,null,this.divPassword.form);
            obj.set_taborder("6");
            obj.set_text("새 비밀번호 확인");
            obj.set_cssclass("sta_WF_Label");
            this.divPassword.addChild(obj.name, obj);

            obj = new Edit("edtConfirmPassword","125","staNew01:4",null,"24","5",null,null,null,null,null,this.divPassword.form);
            obj.set_taborder("7");
            obj.set_password("true");
            this.divPassword.addChild(obj.name, obj);

            obj = new Button("btnConfirm",null,null,"50","28","25","20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"50","28","78","20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnTheme","30","20","265","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("비밀번호 변경");
            obj.set_cssclass("btn_WF_TabS");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTheme.form
            obj = new Layout("default","",0,0,this.divTheme.form,function(p){});
            this.divTheme.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPassword.form
            obj = new Layout("default","",0,0,this.divPassword.form,function(p){});
            this.divPassword.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",320,230,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmUserSetting.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	frmUserSetting.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/01/05
        *  @Desction    팝업연결용 화면
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/01/05			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	//로그인 프레임에서 로그인 시 사이즈 함수 호출
        	if(this.parent.parent.name == "frmLogin")
        	{
        		this.fnSize();
        	}
        	// 초기화
        	this.fnInit();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역

        /**
         * @description 비밀번호 저장
        */
        this.fnSavePassword = function()
        {
        	this.dsCond.setColumn(0, "USER_ID"		, "");
        	var pswd = this.divPassword.form.edtCurPassword.value;	// CURR
        	var shaObj = new jsSHA("SHA-256", "TEXT");
        	shaObj.update(pswd);
        	var hash = shaObj.getHash("HEX");
        	this.dsCond.setColumn(0, "CUR_PASSWORD", this.gfnEncData(hash));

        	pswd = this.divPassword.form.edtNewPassword.value;	// CURR
        	var shaObj2 = new jsSHA("SHA-256", "TEXT");
        	shaObj2.update(pswd);
        	var hash2 = shaObj2.getHash("HEX");
        	this.dsCond.setColumn(0, "NEW_PASSWORD", this.gfnEncData(hash2));

        	var strSvcId    = "saveUserPassword";
        	var strSvcUrl   = "saveUserPassword.do";
        	var inData      = "dsCond=dsCond";
        	var outData     = "dsUser=dsUser";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]
        }

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //transaction
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "saveUserPassword":
        			if(this.dsUser.rowcount == 1) {
        			// 로그인 페이지 일 때 정합성 조건을 만족하게 비밀번호 변경 시 메인페이지로 이동
        				if(this.parent.parent.name == "frmLogin")
        				{
        					this.gfnAlert("msg.save.success", "", "successLogin", "fnMsgCallback");
        				}
        				else
        				{
        					this.gfnAlert("msg.save.success", "", "saveUserPassword", "fnMsgCallback");
        				}
        			} else {
        				this.gfnAlert("msg.err.validator.password.check", "", "", "fnMsgCallback");
        			}
        			break;
        		default: break;
        	}
        };

        /**
         * @description 메세지 콜백
        */
        this.fnMsgCallback = function (sMsgId, sVal)
        {
        	switch (sMsgId)
        	{
        		case "confirm.general" :
        			if (sVal == true)
        			{
        				// 마이메뉴 저장 트랜잭션 호출
        				this.fnSaveUserSetting();
        			}
        			break;
        		case "successLogin" :
        			this.gfnClosePopup("OK");
        			break;
        		case "saveUserPassword" :
        			this.gfnClosePopup();
        			break;
        		default:
        			break;
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        /**
         * @description 초기화
        */
        this.fnInit = function()
        {
        	this.dsCond.setColumn(0, "USER_ID"		, this.objApp.gdsUser.getColumn(0, "USER_ID"));
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        /**
         * @description 취소 버튼 클릭 이벤트
        */
        this.btnClose_onclick = function(obj,e)
        {
        	this.gfnClosePopup();
        };

        /**
         * @description 확인 버튼 클릭 이벤트
        */
        this.btnConfirm_onclick = function(obj,e)
        {
        	if(this.gfnValidationField(this.divPassword.form.edtCurPassword, "현재 비밀번호", "required", "", true, true) == false) {
        		return;
        	}
        	if(this.gfnValidationField(this.divPassword.form.edtNewPassword, "변경 비밀번호", "required", "", true, true) == false) {
        		return;
        	}
        	if(this.gfnValidationField(this.divPassword.form.edtNewPassword, "변경 비밀번호", "minlength", 6, true, true) == false) {
        		return;
        	}
        	// 새 비밀번호 != 새 비밀번호 확인이 다르면
        	if (this.divPassword.form.edtNewPassword.value != this.divPassword.form.edtConfirmPassword.value) {
        		// 변경하고자 하는 비밀번호가 다릅니다.\n다시 입력해 주세요.
        		this.gfnAlert("msg.err.validator.password.chnge.dfrnt");
        		this.divPassword.form.edtConfirmPassword.setFocus();
        		return;
        	}

        	this.fnSavePassword();
        };

        this.btnPassword_onclick = function(obj,e)
        {
        	this.btnTheme.set_cssclass("btn_WF_Tab");
        	this.btnPassword.set_cssclass("btn_WF_TabS");
        };

        //로그인 페이지 시 사이즈 고정값 지정
        this.fnSize = function ()
        {
        	this.btnTheme.set_visible(false);
        	this.parent.form.set_height(180);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divPassword.form.staConfirm01.addEventHandler("onclick",this.divPassword_sta03_00_00_onclick,this);
            this.btnConfirm.addEventHandler("onclick",this.btnConfirm_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnTheme.addEventHandler("onclick",this.btnTheme_onclick,this);
            this.dsTheme.addEventHandler("canrowposchange",this.dsList_canrowposchange,this);
            this.dsTheme.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
            this.dsUser.addEventHandler("canrowposchange",this.dsList_canrowposchange,this);
            this.dsUser.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
        };
        this.loadIncludeScript("frmUserSetting.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
