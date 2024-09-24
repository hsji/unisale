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
                this._setFormPosition(870,610);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj.getSetter("firefirstcount").set("0");
            obj._setContents("<ColumnInfo><Column id=\"CLIENT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CLIENT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.getSetter("firefirstcount").set("0");
            obj._setContents("<ColumnInfo><Column id=\"PRJT_CODE\" type=\"string\" size=\"32\"/><Column id=\"SALES_USER\" type=\"string\" size=\"32\"/><Column id=\"CLIENT_NAME\" type=\"string\" size=\"32\"/><Column id=\"USER_EMAIL\" type=\"string\" size=\"32\"/><Column id=\"REF_URL\" type=\"string\" size=\"32\"/><Column id=\"USER_NAME\" type=\"string\" size=\"32\"/><Column id=\"USER_TEL\" type=\"string\" size=\"32\"/><Column id=\"KORN_NM\" type=\"string\" size=\"32\"/><Column id=\"CLIENT_CODE\" type=\"string\" size=\"32\"/><Column id=\"SALES_TYPE_CODE\" type=\"string\" size=\"32\"/><Column id=\"REMK\" type=\"string\" size=\"32\"/><Column id=\"PRJT_NAME\" type=\"string\" size=\"32\"/><Column id=\"USER_CELL\" type=\"string\" size=\"32\"/><Column id=\"SALES_STATUS\" type=\"string\" size=\"32\"/><Column id=\"SALES_USER_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("edtCustomer","149","60","161","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("essential");
            obj.getSetter("uUse").set("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","25","5",null,"43","284",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("프로젝트");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","30","60","106","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("고객명");
            obj.set_cssclass("sta_WF_LabelnoLine");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearchCustomer","281","60","28","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_EdiSch");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","313","58","106","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("프로젝트명");
            obj.set_cssclass("sta_WF_LabelnoLine");
            this.addChild(obj.name, obj);

            obj = new Edit("edtProject","433","60",null,"24","25",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("essential");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01","30","92","106","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("담당자명");
            obj.set_cssclass("sta_WF_LabelnoLine");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUserNmEng","149","92","161","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_imemode("alpha");
            obj.set_maxlength("30");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00","313","92","106","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_LabelnoLine");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk00","433","92","130","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_type("string");
            obj.set_format("###-####-####");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00","593","92","106","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("휴대전화번호");
            obj.set_cssclass("sta_WF_LabelnoLine");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk00_00","713","92",null,"25","25",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_type("string");
            obj.set_format("###-####-####");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01","30","125","106","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_LabelnoLine");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUserNmEng00","149","125","270","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_imemode("alpha");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00","30","158","106","24",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("URL");
            obj.set_cssclass("sta_WF_LabelnoLine");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUserNmEng00_00","149","158","414","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_imemode("alpha");
            this.addChild(obj.name, obj);

            obj = new Div("divUser2","149","192","242","24",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_url("common::cmmUserSearch.xfdl");
            obj.getSetter("uEssential").set("true");
            obj.set_cssclass("essential");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_01","30","191","106","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("담당영업");
            obj.set_cssclass("sta_WF_LabelnoLine");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_01_00","593","155","106","24",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("프로젝트구분");
            obj.set_cssclass("sta_WF_LabelnoLine");
            this.addChild(obj.name, obj);

            obj = new Combo("cboProjectCd","713","155",null,"24","25",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("essential");
            obj.set_text("cbo00");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_01_00_00","593","188","106","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("활동상태");
            obj.set_cssclass("sta_WF_LabelnoLine");
            this.addChild(obj.name, obj);

            obj = new Combo("cboStatus","713","188",null,"24","25",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("essential");
            obj.set_text("cbo00");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("webEditor","150","226",null,null,"25","50",null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_border("1px solid #cccccc");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa00","92","320","28","40",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_01_01","30","226","106","24",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_LabelnoLine");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"570","68","28","74",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("저장");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_CrudSave");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"570","50","28","20",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("닫기");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divUser2
            obj = new Layout("default","",0,0,this.divUser2.form,function(p){});
            this.divUser2.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",870,610,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtCustomer","value","dsList","CLIENT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtProject","value","dsList","PRJT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtUserNmEng","value","dsList","USER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","msk00","value","dsList","USER_TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","msk00_00","value","dsList","USER_CELL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","edtUserNmEng00","value","dsList","USER_EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edtUserNmEng00_00","value","dsList","REF_URL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","cboProjectCd","value","dsList","SALES_TYPE_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","cboStatus","value","dsList","SALES_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divUser2.form.edtCode","value","dsList","SALES_USER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divUser2.form.edtName","value","dsList","SALES_USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::cmmUserSearch.xfdl");
        };
        
        // User Script
        this.registerScript("salesScheduleMasterPuFm.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	salesScheduleMgFm.xfdl
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
        this.pType;
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	//공통코드
        	var param = [
        			  {biztype : "Combo", code : "SM28", objid : this.cboProjectCd}							// 프로젝트구분
        			 , {biztype : "Combo", code : "SM29", objid : this.cboStatus}							// 활동상태
        	];
        	this.pType = this.getOwnerFrame().pType;

        	if(this.pType == "add") {
        		this.dsList.addRow();

        		this.dsList.setColumn(0, "SALES_USER",	this.gfnGetUserInfo("EMP_NO"));
        		this.dsList.setColumn(0, "SALES_USER_NM",	this.gfnGetUserInfo("KORN_NM"));
        	} else if(this.pType == "update") {
        		this.dsList.addRow();
        		this.dsList.copyRow(0, this.opener.dsList, this.getOwnerFrame().pRow);
        		this.btnSearchCustomer.set_enable(false);
        		this.edtCustomer.set_enable(false);
        		this.fnSetTelMask();
        		this.dsList.applyChange();
        	} else {
        		alert("error================");
        		this.close();
        	}
        	this.gfnGetCommonCode(param);


        	var oWeb = this.webEditor;
        	this.gfnCreateWebEditor(oWeb);

        };

        this.afterCommCodeLoad = function() {
        	if(this.pType == "add") {
        		this.cboStatus.set_value("100");	// 푸로젝트인지
        		this.cboStatus.set_enable(false);
        	}
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	if (this.gfnDsIsUpdated(this.dsList)) {
        		// 검색을 진행하면 변경된 데이터가 사라집니다. \n계속 진행 하시겠습니까?
        		var sMsgId = "confirm.before.search";		//메세지ID
        		var arrArg = [""];							//메세지취환될값 배열[생략가능]
        		var sPopId = "search";						//메세지팝업ID[생략가능]	*해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
        		var sMsgCallback = "fnMsgCallback";			//메세지콜백[생략가능] 		* confirm성 메시지를 사용 시 반드시 필요

        		this.gfnAlert(sMsgId, arrArg, sPopId, sMsgCallback);
        	}else{
        		this.fnTranSearch();
        	}
        };

        //추가
        this.cfnAdd = function ()
        {
        	var nRow = this.dsList.addRow();
        };

        //삭제
        this.cfnDel = function ()
        {
        	if (this.dsList.rowcount == 0) {
        		return;
        	}
        	this.dsList.deleteRow(this.dsList.rowposition);
        };

        //저장
        this.cfnSave = function ()
        {
        	// 변경된 정보없으면 리턴
        	if (this.gfnDsIsUpdated(this.dsList) == false) {
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
        //master 조회
        this.fnTranSearch = function ()
        {
        	// 조회-대분류
        	this.dsList.clearData();

        	var strSvcId    = "searchCustomerList";
        	var strSvcUrl   = "searchCustomerList.do";
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

        //저장
        this.fnTranSave = function ()
        {
        	var sCont = "";
        	if(this.webEditor.visible){
        		sCont = this.webEditor.callMethod("getData");
        	}
        	this.dsList.setColumn(0, "REMK", sCont);

        	var strSvcId    = "saveProjectInfo";
        	var strSvcUrl   = "saveProjectInfo.do";
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
        		case "searchCustomerList":
        			break;
        		case "saveProjectInfo":
        			this.opener.fnTranSearch();
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
        //디테일 - validation
        this.fnValid = function ()
        {
        	// 정합성 체크
        	this.gfnClearValidation(this.dsList);

        	this.gfnSetValidation(this.dsList, "CLIENT_CODE", "고객 코드"	, "required");
        	this.gfnSetValidation(this.dsList, "CLIENT_NAME", "고객명"	, "required");
        	this.gfnSetValidation(this.dsList, "PRJT_NAME", "프로젝트명"	, "required");
        	this.gfnSetValidation(this.dsList, "SALES_TYPE_CODE", "프로젝트 구분"	, "required");
        	this.gfnSetValidation(this.dsList, "SALES_STATUS", "활동상태"	, "required");

        	// Dataset의 변경된 Row Validation check
        	if (this.gfnValidation(this.dsList, "U") == false) return false;
        	else return true;
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        //조회
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.cfnSearch(); //조회
        };

        this.fnSetTelMask = function(flag) {
        	var tel = this.dsList.getColumn(this.dsList.rowposition, "USER_TEL");
        	var mask = "###-####-####";
        	if(tel) {
        		tel = nexacro.replaceAll(tel," ","");
        		if(tel && tel.length > 0) {
        			if(tel.length == 9) {
        				mask = "##-###-####";
        			} else if(tel.length == 10) {
        				if(tel.substr(0,2) == "02") {
        					mask = "##-###-####";
        				} else {
        					mask = "###-###-####";
        				}
        			}
        		}
        	}

        	this.msk00.set_format(mask);

        	if(flag) {
        		this.dsList.setColumn(this.dsList.rowposition, "USER_TEL", tel);
        	}
        };

        this.msk00_oninput = function(obj,e)
        {
        	obj.set_format("###-####-####");
        };

        this.dsList_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "USER_TEL") {
        		this.fnSetTelMask(true);
        	}
        };

        this.dsList_onrowposchanged = function(obj,e)
        {
        	if(this.dsList.getRowType(e.newrow) == Dataset.ROWTYPE_INSERT){
        		this.msk00.set_format("###-####-####");
        	}else{
        		this.fnSetTelMask();
        	}
        };

        // 고객조회
        this.btnSearchCustomer_onclick = function(obj,e)
        {
        	var sTitle  = "고객선택";
        	var oArg    = {};
        	var oOption = {title:sTitle
        				,titlebar:true};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("orgUserListPu", "sales::cust/customerMgPu.xfdl", oArg, sPopupCallBack, oOption);

        };

        this.fnCallBackCustomer = function(custCode, custNm)
        {
        	this.dsList.setColumn(0, "CLIENT_CODE", custCode);
        	this.dsList.setColumn(0, "CLIENT_NAME", custNm);
        };

        this.divContents_divCont_webEditor_onloadcompleted = function(obj,e)
        {

        };

        this.divContents_divCont_webEditor_onusernotify = function(obj,e)
        {
        	if (e.userdata=="instanceReady" && !this.isLoad){
        		obj.callMethod("init", obj.getOffsetHeight()-20);
        		this.isLoad=true;
        		var sCntn = this.dsList.getColumn(0, "REMK");
        		if(!this.gfnIsNull(sCntn)){
        			this.webEditor.callMethod("setData", sCntn);
        		}
        	}
        };

        this.divButton_btnSave_onclick = function(obj,e)
        {
        	if(this.fnValid() == false) return;

        	this.fnTranSave();
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
            this.edtCustomer.addEventHandler("onkeyup",this.edtCode_onkeyup,this);
            this.btnSearchCustomer.addEventHandler("onclick",this.btnSearchCustomer_onclick,this);
            this.msk00.addEventHandler("oninput",this.msk00_oninput,this);
            this.webEditor.addEventHandler("onloadcompleted",this.divContents_divCont_webEditor_onloadcompleted,this);
            this.webEditor.addEventHandler("onusernotify",this.divContents_divCont_webEditor_onusernotify,this);
            this.btnSave.addEventHandler("onclick",this.divButton_btnSave_onclick,this);
            this.btnClose.addEventHandler("onclick",this.divButton_btnClose_onclick,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
        };
        this.loadIncludeScript("salesScheduleMasterPuFm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
