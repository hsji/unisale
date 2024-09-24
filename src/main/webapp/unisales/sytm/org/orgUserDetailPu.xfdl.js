(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("orgUserDetailPu");
            this.set_titletext("사용자 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(750,473);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PASSWORD\" type=\"STRING\" size=\"256\"/><Column id=\"KORN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ENGL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_FLAG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WKGD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WKDT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OCCU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHAG_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"JOIN_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"RETR_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"HOOF_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REGI_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"BIR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CELL_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE1\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE2\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE3\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"BASC_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DTL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PIC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Static("staTitle00","0","6",null,"47","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("사용자 상세");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","210","staTitle00:0","519","367",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Static("staBg05_00_00_00_00","0","264","518","93",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg05_00_00_00","0","231","518","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg05_00_00","0","198","518","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg05_00","0","165","518","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg01","0","0","518","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg02","0","staBg01:-1","518","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg03","0","staBg02:-1","518","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg04","0","staBg03:-1","518","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg05","0","staBg04:-1","518","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","0","110","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("15");
            obj.set_text("사용자 ID");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtUserId","114","5","130","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_cssclass("essential");
            obj.set_readonly("true");
            obj.set_imemode("alpha");
            obj.set_maxlength("20");
            obj.set_inputtype("digit,english");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle03","0","33","110","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("16");
            obj.set_text("사용자명");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","114","38","130","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_imemode("hangul");
            obj.set_maxlength("30");
            obj.set_cssclass("essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle06","0","132","110","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("17");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle07","258","165","110","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("18");
            obj.set_text("직원구분");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboUserFlagCd","372","170","130","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle08","0","66","110","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("19");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboWkgdCd","114","71","130","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle09","0","165","110","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("20");
            obj.set_text("직종");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboOccuCd","114","170","130","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle14","258","198","110","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("21");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Calendar("calBirDt","staTitle14:4","203","130","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle16","0","231","110","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("22");
            obj.set_text("E-Mail");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle15","0","99","110","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("23");
            obj.set_text("핸드폰번호");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle09_00","258","66","110","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("24");
            obj.set_text("직책");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboWkdtCd","372","71","130","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("divDept","114","137","281","28",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_text("div00");
            obj.set_url("common::cmmDeptSearch.xfdl");
            obj.getSetter("uEssential").set("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle04","258","33","110","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("25");
            obj.set_text("영문명");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtUserNmEng","372","37","130","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_imemode("alpha");
            obj.set_maxlength("30");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle05","258","0","110","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("26");
            obj.set_text("사번/ID");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtEmpNo","372","5","130","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_maxlength("10");
            obj.set_inputtype("digit,alpha");
            obj.set_cssclass("essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle16_00","0","198","110","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("30");
            obj.set_text("주민등록번호");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtEmail01","114","236",null,"24","119",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("31");
            obj.set_imemode("alpha");
            this.divDetail.addChild(obj.name, obj);

            obj = new MaskEdit("mskRsnNo","114","203","130","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("32");
            obj.set_type("string");
            obj.set_format("######-#######");
            this.divDetail.addChild(obj.name, obj);

            obj = new MaskEdit("msk00","114","104","130","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("33");
            obj.set_type("string");
            obj.set_format("###-####-####");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle16_01","0","264","110","93",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("34");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtSculZip","114","268","92","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("36");
            obj.set_displaynulltext("우편번호");
            obj.set_readonly("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnSearchPost","210","268","26","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("37");
            obj.set_cssclass("btn_WF_SearchSmall");
            obj.set_background("url(\'theme://images/btn_WF_Search.png\') no-repeat center center");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtBasAddr","114","298",null,"24","10",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("38");
            obj.set_readonly("true");
            obj.set_maxlength("200");
            obj.set_cssclass("readonly");
            obj.set_displaynulltext("도로명주소");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtDetailAddr","114","328",null,"24","80",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("39");
            obj.set_maxlength("200");
            obj.set_displaynulltext("상세주소");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"50","28","22","19",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("취소");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm",null,null,"50","28","btnClose:3","19",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img00","12","54","191","256",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_border("1px solid #dddddd");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new FileUpload("fud00","60","323","80","33",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_itemheight("32");
            obj.set_buttonsize("80");
            obj.set_buttontext("사진등록");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divDetail.form.divDept
            obj = new Layout("default","",0,0,this.divDetail.form.divDept.form,function(p){});
            this.divDetail.form.divDept.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",750,473,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","divDetail.form.edtUserId","value","dsList","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divDetail.form.edtUserNm","value","dsList","KORN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divDetail.form.cboUserFlagCd","value","dsList","USER_FLAG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divDetail.form.cboWkgdCd","value","dsList","WKGD_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divDetail.form.cboWkdtCd","value","dsList","WKDT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divDetail.form.cboOccuCd","value","dsList","OCCU_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divDetail.form.calRetrDate","value","dsList","RETR_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divDetail.form.cboHoofStatCd","value","dsList","HOOF_STAT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divDetail.form.calBirDt","value","dsList","BIR_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divDetail.form.divDept.form.edtCode","value","dsList","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divDetail.form.divDept.form.edtName","value","dsList","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divDetail.form.edtUserNmEng","value","dsList","ENGL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divDetail.form.edtEmpNo","value","dsList","EMP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divDetail.form.cboThemId","value","dsList","THEME_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divDetail.form.edtEmail01","value","dsList","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divDetail.form.mskRsnNo","value","dsList","REGI_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","img00","image","dsList","USER_PIC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divDetail.form.msk00","value","dsList","CELL_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divDetail.form.edtSculZip","value","dsList","ZIP_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divDetail.form.edtBasAddr","value","dsList","BASC_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divDetail.form.edtDetailAddr","value","dsList","DTL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::cmmDeptSearch.xfdl");
        };
        
        // User Script
        this.registerScript("orgUserDetailPu.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	orgUserDetailPu.xfdl
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
        	this.gfnFormOnload(obj,e); //필수함수

        	//공통코드
        	var param = [
        			  {biztype : "Combo", code : "SM04", objid : this.divDetail.form.cboUserFlagCd}							// 직원구분
        			, {biztype : "Combo", code : "SM05", objid : this.divDetail.form.cboWkgdCd}								// 직급코드
        			, {biztype : "Combo", code : "SM06", objid : this.divDetail.form.cboWkdtCd}								// 직책구분
        			, {biztype : "Combo", code : "SM07", objid : this.divDetail.form.cboOccuCd}								// 직종
        	];
        	this.gfnGetCommonCode(param);

        	this.dsCond.setColumn(0, "COMPANY_CD", this.getOwnerFrame().pvCompanyCd);
        	this.dsCond.setColumn(0, "EMP_NO", this.getOwnerFrame().pvEmpNo);

        	this.fnTranSearch();
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //저장
        this.cfnSave = function ()
        {
        	// 변경된 정보없으면 리턴
        	if (this.gfnDsIsUpdated(this.dsList) == false) {
        		// 저장할 데이터가 없습니다.
        		this.gfnAlert("msg.save.nochange");
        		return;
        	}

        	// 저장 하시겠습니까?
        	this.gfnAlert("confirm.save", [""], "save", "fnMsgCallback");
        	return;
        };
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //사용자 목록 조회
        this.fnTranSearch = function ()
        {
        	var strSvcId    = "searchUserOneInfo";
        	var strSvcUrl   = "searchUserOneInfo.do";
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
        	var strSvcId    = "saveUserInfo";
        	var strSvcUrl   = "saveUserInfo.do";
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
        		case "searchUserOneInfo":
        			break;
        		case "saveUserInfo":
        			this.close();
        			break;
        		default: break;
        	}
        };

        //message
        this.fnMsgCallback = function (sMsgId, sRtn)
        {
        	switch(sMsgId) {
        		case "search":
        			if(this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false){
        				return;
        			}
        			this.fnTranSearch();
        			break;
        		case "save":
        			if(this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false){
        				return;
        			}
        			this.fnTranSave();
        			break;
        		case "valiEmpNo":
        			this.dsList.setColumn(this.dsList.rowposition, "EMP_NO", "");
        			this.divDetail.form.edtEmpNo.setFocus();
        			break;
        		default:break;
        	}
        };

        //엑셀임포트콜백
        this.fnExcelImportCallback = function (sImportId, e)
        {
        	//TODO..
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        //정합성체큰
        this.fnFormValidation = function ()
        {
        	// 정합성 체크
        	this.gfnClearValidation(this.dsList);

        	this.gfnSetValidation(this.dsList, "COMPANY_CD", "회사"	, "required");
        	this.gfnSetValidation(this.dsList, "USER_ID", "사용자ID"	, "required");
        	this.gfnSetValidation(this.dsList, "EMP_NO",  "사번"	    , "required");
        	this.gfnSetValidation(this.dsList, "KORN_NM", "사용자이름(한글)"	, "required");
        	this.gfnSetValidation(this.dsList, "DEPT_CD", "부서"	, "required");

        	this.gfnSetValidation(this.dsList, "BIR_DT"   , "생년월일", "date");
        	this.gfnSetValidation(this.dsList, "REGI_NUMB"   , "주민번호", "isssn");

        	this.gfnSetValidation(this.dsList, "EMAL", "EMail"	, "isemail");

        	// Dataset의 변경된 Row Validation check
        	if (this.gfnValidation(this.dsList, "U") == false) return false;
        	else return true;
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        //조회버튼
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.cfnSearch();
        };

        //사용자아이디
        this.dsList_canrowposchange = function(obj,e)
        {
        	var nStatus = this.dsList.getRowType(e.newrow);
        	if( nStatus == 2 ){
        		this.divDetail.form.edtUserId.set_readonly(false);
        	}else{
        		this.divDetail.form.edtUserId.set_readonly(true);
        	}
        };

        //엑셀업로드
        this.divCmmnBtn_btnExcelUpload_onclick = function(obj,e)
        {
        	this.gfnExcelImport("dsList", "사용자 리스트", "A4:W", "fnExcelImportCallback", "message", "", "A3:W3", this.grdList);
        };

        //엑셀템플릿 다운로드
        this.divCmmnBtn_btnExcelTemplate_onclick = function(obj,e)
        {
        	var fileId = "공통시스템_Template.xlsx";
        	this.gfnDownTempate(fileId);
        };

        //엑셀다운로드
        this.divCmmnBtn_btnExcelDown_onclick = function(obj,e)
        {
        	// 엑셀 상단 타이틀 텍스트 설정
        	var sSubTitle = this.staTitle01.text;

        	// Excel Export 공통함수 호출
        	this.gfnExcelExport(this.grdList, sSubTitle, sSubTitle, "EXCEL2007","",sSubTitle, true, "");
        };

        //EMP_NO 중복체크
        this.dsList_cancolumnchange = function(obj,e)
        {
        	if( e.columnid=="EMP_NO"){
        		if(this.gfnIsNull(e.newvalue)) return;

        		var nRow = obj.findRow("EMP_NO", e.newvalue);
        		if( nRow > -1){
        			this.gfnAlert("msg.exist", ["입력하신 사번"],"valiEmpNo","fnMsgCallback");
        			return;
        		}
        	}
        };

        // 사진등록
        this.fud00_onitemchanged = function(obj,e)
        {
        	var items = obj._items;
        	var ds = this.dsList;
        	if(items[0] && items[0]._files && items[0]._files[0]) {
        		var reader = new FileReader();
        		reader.readAsDataURL(items[0]._files[0]);
        		reader.onload = function(e) {
        			ds.setColumn(0, "USER_PIC", e.target.result);
        		};
        	}

        };
        // 저장
        this.btnConfirm_onclick = function(obj,e)
        {
        	this.cfnSave();
        };

        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        // 주소
        this.btn_searchPost_onclick = function(obj,e)
        {
        	this.gfnPostSearch(obj);
        };

        /**
         * @description 우편번호 CallBack 함수(선택)
        */
        this.fnPostCallback = function(sName, aAddr)
        {
        	if (sName == "btnSearchPost") {
        		trace("onusernotify ----------------------------");
        		trace("array[1]=>주소1          ==> " +	aAddr[1] );
        		trace("array[2]=>주소2          ==> " +	aAddr[2] );
        		trace("array[3]=>상세주소      ==> " + aAddr[3] );
        		trace("array[4]=>우편번호      ==> " +	aAddr[4] );
        		trace("-----------------------------------------");

        		this.divDetail.form.edtSculZip.set_value(aAddr[4]);	        // 우편번호
        		this.divDetail.form.edtBasAddr.set_value(aAddr[1]+aAddr[2]);	// 주소
        		this.divDetail.form.edtDetailAddr.set_value(aAddr[3]);	    	// 상세 주소
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divDetail.form.cboUserFlagCd.addEventHandler("onitemchanged",this.cbo_onitemchange,this);
            this.divDetail.form.cboWkgdCd.addEventHandler("onitemchanged",this.cbo_onitemchange,this);
            this.divDetail.form.cboOccuCd.addEventHandler("onitemchanged",this.cbo_onitemchange,this);
            this.divDetail.form.cboWkdtCd.addEventHandler("onitemchanged",this.cbo_onitemchange,this);
            this.divDetail.form.btnSearchPost.addEventHandler("onclick",this.btn_searchPost_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnConfirm.addEventHandler("onclick",this.btnConfirm_onclick,this);
            this.fud00.addEventHandler("onitemchanged",this.fud00_onitemchanged,this);
            this.dsList.addEventHandler("canrowposchange",this.dsList_canrowposchange,this);
            this.dsList.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
        };
        this.loadIncludeScript("orgUserDetailPu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
