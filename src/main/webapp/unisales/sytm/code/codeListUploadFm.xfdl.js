(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("codeListUploadFm");
            this.set_titletext("공통코드관리(엑셀업로드용)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCodeGubun", this);
            obj._setContents("<ColumnInfo><Column id=\"HCL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HCL_CD_KORN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HCL_CD_ENGL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REMK\" type=\"STRING\" size=\"256\"/><Column id=\"BEFO_HCL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HIPO_HCL_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCode", this);
            obj._setContents("<ColumnInfo><Column id=\"SSC_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"SSC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HCL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SSC_CD_KORN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SSC_CD_ENGL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ABBR_KORN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ABBR_ENGL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CD_1\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CD_2\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CD_3\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CD_4\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CD_5\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CD_6\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CD_7\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CD_8\" type=\"STRING\" size=\"256\"/><Column id=\"GRP_CD_9\" type=\"STRING\" size=\"256\"/><Column id=\"BEFO_SSC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"REMK\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10","48","28","25",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCompany","98","12","150","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("gdsCompany");
            obj.set_codecolumn("SSC_CD");
            obj.set_datacolumn("SSC_CD_KORN_NM");
            obj.set_text("알림");
            obj.set_value("INF");
            obj.set_index("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","12","98","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("회사구분");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","50","96","43",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("대분류코드");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdCodeGubun","0","staTitle00:0","44%",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsCodeGubun");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"회사코드\" cssclass=\"essential\"/><Cell col=\"1\" text=\"대분류코드\" cssclass=\"essential\"/><Cell col=\"2\" text=\"한글명\" cssclass=\"essential\"/><Cell col=\"3\" text=\"영문명\"/><Cell col=\"4\" text=\"사용여부\"/><Cell col=\"5\" text=\"비고\"/><Cell col=\"6\" text=\"과거대분류코드\"/><Cell col=\"7\" text=\"상위대분류코드\"/></Band><Band id=\"body\"><Cell text=\"bind:COMPANY_CD\" displaytype=\"expr:dataset.getRowType(currow)==2?&apos;editcontrol&apos;:&apos;normal&apos;\" edittype=\"expr:dataset.getRowType(currow)==2?&apos;text&apos;:&apos;none&apos;\" editmaxlength=\"4\" editimemode=\"alpha\" editinputtype=\"alpha,digit\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:HCL_CD\" displaytype=\"expr:dataset.getRowType(currow)==2?&apos;editcontrol&apos;:&apos;normal&apos;\" edittype=\"expr:dataset.getRowType(currow)==2?&apos;text&apos;:&apos;none&apos;\" editmaxlength=\"4\" editimemode=\"alpha\" editinputtype=\"alpha,digit\"/><Cell col=\"2\" text=\"bind:HCL_CD_KORN_NM\" displaytype=\"editcontrol\" edittype=\"text\" editimemode=\"hangul\" editmaxlength=\"50\"/><Cell col=\"3\" text=\"bind:HCL_CD_ENGL_NM\" displaytype=\"editcontrol\" edittype=\"text\" editmaxlength=\"50\" editimemode=\"alpha\"/><Cell col=\"4\" text=\"bind:USED_YN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" editmaxlength=\"1\"/><Cell col=\"5\" text=\"bind:REMK\" displaytype=\"editcontrol\" edittype=\"text\" editmaxlength=\"1000\"/><Cell col=\"6\" text=\"bind:BEFO_HCL_CD\" displaytype=\"editcontrol\" edittype=\"text\" editmaxlength=\"4\" editimemode=\"alpha\" editinputtype=\"alpha,digit\"/><Cell col=\"7\" text=\"bind:HIPO_HCL_CD\" displaytype=\"editcontrol\" edittype=\"text\" editmaxlength=\"4\" editimemode=\"alpha\" editinputtype=\"alpha,digit\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","grdCodeGubun:20","50","96","43",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("소분류코드");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdCode","grdCodeGubun:20","staTitle01:0",null,null,"20","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsCode");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"180\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"200\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"회사코드\" cssclass=\"essential\"/><Cell col=\"1\" text=\"공통코드번호\" cssclass=\"essential\"/><Cell col=\"2\" text=\"공통코드\" cssclass=\"essential\"/><Cell col=\"3\" text=\"대분류코드\" cssclass=\"essential\"/><Cell col=\"4\" text=\"한글명\" cssclass=\"essential\"/><Cell col=\"5\" text=\"영문명\"/><Cell col=\"6\" text=\"약어한글명\"/><Cell col=\"7\" text=\"약어영문명\"/><Cell col=\"8\" text=\"그룹코드1\"/><Cell col=\"9\" text=\"그룹코드2\"/><Cell col=\"10\" text=\"그룹코드3\"/><Cell col=\"11\" text=\"그룹코드4\"/><Cell col=\"12\" text=\"그룹코드5\"/><Cell col=\"13\" text=\"그룹코드6\"/><Cell col=\"14\" text=\"그룹코드7\"/><Cell col=\"15\" text=\"그룹코드8\"/><Cell col=\"16\" text=\"그룹코드9\"/><Cell col=\"17\" text=\"과거공통코드\"/><Cell col=\"18\" text=\"사용여부\"/><Cell col=\"19\" text=\"정렬순서\"/><Cell col=\"20\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:COMPANY_CD\" suppress=\"1\"/><Cell col=\"1\" expr=\"expr:dataset.getRowType(currow)==2?&apos;자동생성&apos;:SSC_NUMB\"/><Cell col=\"2\" text=\"bind:SSC_CD\" editmaxlength=\"8\" editinputtype=\"alpha,digit\" editimemode=\"alpha\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:HCL_CD\" editmaxlength=\"4\" editinputtype=\"alpha,digit\" editimemode=\"alpha\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:SSC_CD_KORN_NM\" editimemode=\"hangul\" editmaxlength=\"50\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"5\" text=\"bind:SSC_CD_ENGL_NM\" editimemode=\"alpha\" editmaxlength=\"50\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"6\" text=\"bind:ABBR_KORN_NM\" editimemode=\"alpha\" editmaxlength=\"30\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"7\" text=\"bind:ABBR_ENGL_NM\" editimemode=\"alpha\" editmaxlength=\"30\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"8\" text=\"bind:GRP_CD_1\" editmaxlength=\"8\" editinputtype=\"alpha,digit\" editimemode=\"alpha\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"9\" text=\"bind:GRP_CD_2\" editmaxlength=\"8\" editinputtype=\"alpha,digit\" editimemode=\"alpha\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"10\" text=\"bind:GRP_CD_3\" editmaxlength=\"8\" editinputtype=\"alpha,digit\" editimemode=\"alpha\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"11\" text=\"bind:GRP_CD_4\" editmaxlength=\"8\" editinputtype=\"alpha,digit\" editimemode=\"alpha\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"12\" text=\"bind:GRP_CD_5\" editmaxlength=\"8\" editinputtype=\"alpha,digit\" editimemode=\"alpha\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"13\" text=\"bind:GRP_CD_6\" editmaxlength=\"8\" editinputtype=\"alpha,digit\" editimemode=\"alpha\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"14\" text=\"bind:GRP_CD_7\" editmaxlength=\"8\" editinputtype=\"alpha,digit\" editimemode=\"alpha\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"15\" text=\"bind:GRP_CD_8\" editmaxlength=\"8\" editinputtype=\"alpha,digit\" editimemode=\"alpha\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"16\" text=\"bind:GRP_CD_9\" editmaxlength=\"8\" editinputtype=\"alpha,digit\" editimemode=\"alpha\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"17\" text=\"bind:BEFO_SSC_CD\" editmaxlength=\"8\" editinputtype=\"alpha,digit\" editimemode=\"alpha\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"18\" text=\"bind:USED_YN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"19\" text=\"bind:SORT_ORDR\" editmaxlength=\"5\" editinputtype=\"digit\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"20\" text=\"bind:REMK\" editmaxlength=\"1000\" displaytype=\"editcontrol\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divCmmnBtnCode","staTitle01:0","60",null,"33","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelDown",null,"0","95","28","0",null,null,null,null,null,this.divCmmnBtnCode.form);
            obj.set_taborder("0");
            obj.set_text("엑셀다운");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelSave");
            this.divCmmnBtnCode.addChild(obj.name, obj);

            obj = new Button("btnExcelTemplate",null,"0","143","28","btnExcelDown:3",null,null,null,null,null,this.divCmmnBtnCode.form);
            obj.set_taborder("1");
            obj.set_text("업로드템플릿다운");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_TempSave");
            this.divCmmnBtnCode.addChild(obj.name, obj);

            obj = new Button("btnExcelUpload",null,"0","107","28","btnExcelTemplate:3",null,null,null,null,null,this.divCmmnBtnCode.form);
            obj.set_taborder("2");
            obj.set_text("엑셀업로드");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelUp");
            this.divCmmnBtnCode.addChild(obj.name, obj);

            obj = new Div("divCmmnBtnCodeGubun","staTitle00:0","60",null,"33","staTitle01:20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelDown",null,"0","95","28","0",null,null,null,null,null,this.divCmmnBtnCodeGubun.form);
            obj.set_taborder("0");
            obj.set_text("엑셀다운");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelSave");
            this.divCmmnBtnCodeGubun.addChild(obj.name, obj);

            obj = new Button("btnExcelTemplate",null,"0","143","28","btnExcelDown:3",null,null,null,null,null,this.divCmmnBtnCodeGubun.form);
            obj.set_taborder("1");
            obj.set_text("업로드템플릿다운");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_TempSave");
            this.divCmmnBtnCodeGubun.addChild(obj.name, obj);

            obj = new Button("btnExcelUpload",null,"0","107","28","btnExcelTemplate:3",null,null,null,null,null,this.divCmmnBtnCodeGubun.form);
            obj.set_taborder("2");
            obj.set_text("엑셀업로드");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelUp");
            this.divCmmnBtnCodeGubun.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCmmnBtnCode.form
            obj = new Layout("default","",0,0,this.divCmmnBtnCode.form,function(p){});
            this.divCmmnBtnCode.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCmmnBtnCodeGubun.form
            obj = new Layout("default","",0,0,this.divCmmnBtnCodeGubun.form,function(p){});
            this.divCmmnBtnCodeGubun.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1050,736,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cboCompany","value","dsCond","COMPANY_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("codeListUploadFm.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	codeListUploadFm.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/07/05
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/07/05			TOBESOFT					최초생성
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

        	// 버튼 권한 제어
        	this.gfnSetCommBtn(this.divCmmnBtnCodeGubun, this.divCmmnBtnCode);

        	var arrComp = [this.divSearch.form.cboCompany];
        	this.gfnSetAuthorityCompany(arrComp);
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	if (this.gfnDsIsUpdated(this.dsCodeGubun)||this.gfnDsIsUpdated(this.dsCode)) {
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

        //저장
        this.cfnSave = function ()
        {
        	// 변경된 정보없으면 리턴
        	if (this.gfnDsIsUpdated(this.dsCodeGubun) == false && this.gfnDsIsUpdated(this.dsCode) == false) {
        		// 저장할 데이터가 없습니다.
        		this.gfnAlert("msg.save.nochange");
        		return;
        	}

        	// validation 체크 후
        	if (this.fnFormValidation()) {
        		// 서버 중복 체크
        		this.fnTranSave();
        	}
        };

        //추가
        this.cfnAdd = function ()
        {
        	//TODO..
        };

        //삭제
        this.cfnDel = function ()
        {
        	//TODO..
        };
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //조회
        this.fnTranSearch = function ()
        {
        	// 조회-대분류
        	this.dsCodeGubun.clearData();
        	this.dsCode.clearData();

        	var strSvcId    = "selectCommonCodeAll";
        	var strSvcUrl   = "selectCommonCodeAll.do";
        	var inData      = "dsCond=dsCond";
        	var outData     = "dsCodeGubun=dsCodeGubun dsCode=dsCode";
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
        	var strSvcId    = "saveCommonCodeAll";
        	var strSvcUrl   = "saveCommonCodeAll.do";
        	var inData      = "dsCodeGubun=dsCodeGubun dsCode=dsCode";
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
        		case "selectCommonCodeAll":
        			break;
        		case "saveCommonCodeAll":
        			this.fnTranSearch();
        			break;
        	}
        };

        //message
        this.fnMsgCallback = function (sMsgId, sRtn)
        {
        	switch(sMsgId) {
        		case "search":
        			if (this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false) {
        				return;
        			}
        			this.fnTranSearch();
        			break;
        	}
        };

        //엑셀임포트
        this.fnExcelImportCallback = function (sImportId, e)
        {
        	switch(sImportId) {
        		case "codeGubun":
        		case "commonCode":
        			break;
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        //정합성체크 (필수값만)
        this.fnFormValidation = function ()
        {
        	if(this.gfnDsIsUpdated(this.dsCodeGubun)){
        		// 정합성 체크
        		this.gfnClearValidation(this.dsCodeGubun);

        		this.gfnSetValidation(this.dsCodeGubun, "HCL_CD", "대분류코드"	, "required");
        		this.gfnSetValidation(this.dsCodeGubun, "HCL_CD_KORN_NM", "한글명"	, "required");

        		// Dataset의 변경된 Row Validation check
        		if (this.gfnValidation(this.grdCodeGubun, "U") == false) return false;
        	}

        	if(this.gfnDsIsUpdated(this.dsCode)){
        		// 정합성 체크
        		this.gfnClearValidation(this.dsCode);

        		this.gfnSetValidation(this.dsCode, "SSC_CD", "공통코드"	, "required");
        		this.gfnSetValidation(this.dsCode, "HCL_CD", "대분류코드"	, "required");
        		this.gfnSetValidation(this.dsCode, "SSC_CD_KORN_NM", "한글명"	, "required");

        		// Dataset의 변경된 Row Validation check
        		if (this.gfnValidation(this.grdCode, "U") == false) return false;
        	}

        	return true;
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        //조회
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.cfnSearch();
        };
        //대분류 엑셀업로드
        this.divCmmnBtnCodeGubun_btnExcelUpload_onclick = function(obj,e)
        {
        	this.gfnExcelImport("dsCodeGubun", "공통코드 대분류 리스트", "A4:G", "fnExcelImportCallback", "codeGubun", "", "A3:G3", this.grdCodeGubun);
        };
        //대분류 엑셀템플릿다운로드
        this.divCmmnBtnCodeGubun_btnExcelTemplate_onclick = function(obj,e)
        {
        	var fileId = "공통시스템_Template.xlsx";
        	this.gfnDownTempate(fileId);
        };
        //대분류 엑셀다운
        this.divCmmnBtnCodeGubun_btnExcelDown_onclick = function(obj,e)
        {
        	// 엑셀 상단 타이틀 텍스트 설정
        	var sSubTitle = this.staTitle00.text;

        	// Excel Export 공통함수 호출
        	this.gfnExcelExport(this.grdCodeGubun, sSubTitle, sSubTitle, "EXCEL2007","",sSubTitle, true, "");
        };
        //소분류 엑셀업로드
        this.divCmmnBtnCode_btnExcelUpload_onclick = function(obj,e)
        {
        	this.gfnExcelImport("dsCode", "공통코드 소분류 리스트", "A4:T", "fnExcelImportCallback", "commonCode", "", "A3:T3", this.grdCode);
        };
        //소분류 엑셀템플릿 다운로드
        this.divCmmnBtnCode_btnExcelTemplate_onclick = function(obj,e)
        {
        	var fileId = "공통시스템_Template.xlsx";
        	this.gfnDownTempate(fileId);
        };
        //소분류 엑셀다운
        this.divCmmnBtnCode_btnExcelDown_onclick = function(obj,e)
        {
        	// 엑셀 상단 타이틀 텍스트 설정
        	var sSubTitle = this.staTitle01.text;

        	// Excel Export 공통함수 호출
        	this.gfnExcelExport(this.grdCode, sSubTitle, sSubTitle, "EXCEL2007","",sSubTitle, true, "");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.divCmmnBtnCode.form.btnExcelDown.addEventHandler("onclick",this.divCmmnBtnCode_btnExcelDown_onclick,this);
            this.divCmmnBtnCode.form.btnExcelTemplate.addEventHandler("onclick",this.divCmmnBtnCode_btnExcelTemplate_onclick,this);
            this.divCmmnBtnCode.form.btnExcelUpload.addEventHandler("onclick",this.divCmmnBtnCode_btnExcelUpload_onclick,this);
            this.divCmmnBtnCodeGubun.form.btnExcelDown.addEventHandler("onclick",this.divCmmnBtnCodeGubun_btnExcelDown_onclick,this);
            this.divCmmnBtnCodeGubun.form.btnExcelTemplate.addEventHandler("onclick",this.divCmmnBtnCodeGubun_btnExcelTemplate_onclick,this);
            this.divCmmnBtnCodeGubun.form.btnExcelUpload.addEventHandler("onclick",this.divCmmnBtnCodeGubun_btnExcelUpload_onclick,this);
        };
        this.loadIncludeScript("codeListUploadFm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
