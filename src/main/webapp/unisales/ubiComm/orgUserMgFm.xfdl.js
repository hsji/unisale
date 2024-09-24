(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("orgUserMgFm");
            this.set_titletext("사용자 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"HOOF_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_FLAG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PASSWORD\" type=\"STRING\" size=\"256\"/><Column id=\"KORN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ENGL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_FLAG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WKGD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WKDT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OCCU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHAG_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"JOIN_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"RETR_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"HOOF_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REGI_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"BIR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CELL_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE1\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE2\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE3\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"BASC_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DTL_ADDR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCheckUserId", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCheckResult", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTerm",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W20");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","0","53",null,null,"20","10",null,null,"250",null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.getSetter("uFunction").set("filter,sort,!colfix,!initial,find");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"119\"/><Column size=\"149\"/><Column size=\"191\"/><Column size=\"235\"/><Column size=\"199\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"사용자 ID\"/><Cell col=\"1\" text=\"사용자명\"/><Cell col=\"2\" text=\"부서\"/><Cell col=\"3\" text=\"이메일\"/><Cell col=\"4\" text=\"연락처\"/></Band><Band id=\"body\"><Cell text=\"bind:USER_ID\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:KORN_NM\" displaytype=\"normal\" edittype=\"normal\" editinputtype=\"digit\"/><Cell col=\"2\" text=\"bind:DEPT_NM\" edittype=\"none\" combodataset=\"dsDept\" combodatacol=\"DEPT_KORN_NM\" combocodecol=\"DEPT_CD\"/><Cell col=\"3\" text=\"bind:EMAIL\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:CELL_NUMB\" edittype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","0",null,"47","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("사용자 정보 변경 - 테스트");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"15","70","29","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CrudSave");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1050,736,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("orgUserMgFm.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	orgUserMgFm.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/06/16
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/06/16			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.fnTranSearch();
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //사용자 목록 조회
        this.fnTranSearch = function ()
        {
        	var strSvcId    = "searchUserInfo";
        	var strSvcUrl   = "searchUserInfo.do";
        	var inData      = "dsCond=dsCond";
        	var outData     = "dsList=dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        //사용자 정보 저장
        this.fnTranSave = function ()
        {
        	var strSvcId    = "saveUserInfo2";
        	var strSvcUrl   = "saveUserInfo2.do";
        	var inData      = "dsList=dsList:U";
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
        		case "searchUserInfo":
        			break;
        		case "saveUserInfo2":
        			this.fnTranSearch();
        			break;
        		default: break;
        	}
        };


        this.btnSave_onclick = function(obj,e)
        {
        	this.fnTranSave();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grdList.addEventHandler("oncelldblclick",this.grdList_oncelldblclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.dsList.addEventHandler("canrowposchange",this.dsList_canrowposchange,this);
            this.dsList.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
        };
        this.loadIncludeScript("orgUserMgFm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
