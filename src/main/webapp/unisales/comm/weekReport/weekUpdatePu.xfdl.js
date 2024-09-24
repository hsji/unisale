(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("boardUpdatePu");
            this.set_titletext("게시판 수정 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(950,758);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"RPT_MONTH\" type=\"string\" size=\"32\"/><Column id=\"KORN_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_CNT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"RPT_NO\" type=\"int\" size=\"4\"/><Column id=\"RPT_YEAR\" type=\"string\" size=\"32\"/><Column id=\"REG_DATE\" type=\"undefined\" size=\"0\"/><Column id=\"TITLE\" type=\"string\" size=\"32\"/><Column id=\"FILE_ID\" type=\"undefined\" size=\"0\"/><Column id=\"INPT_DTTM\" type=\"undefined\" size=\"0\"/><Column id=\"DEPT_CD\" type=\"string\" size=\"32\"/><Column id=\"RPT_CNT\" type=\"INT\" size=\"0\"/><Column id=\"CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUpload", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OTXT_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTeam", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"RPT_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"RPT_NO\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fdgFile", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("futFile", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fdtFile", this);
            obj.set_url("svcUrl::fileDownload.do");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staBoardTitle","25","0","265","43",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("주간보고");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Div("divContents","25","staBoardTitle:10",null,"617","25",null,null,null,"589",null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Static("staBg00","0","0",null,"34","0",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("0");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staBg01","0","staBg00:-1",null,"34","0",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("1");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","0","83","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("2");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_Label");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staTitle02","0","staTitle00:-1","83","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("3");
            obj.set_text("년월");
            obj.set_cssclass("sta_WF_Label");
            this.divContents.addChild(obj.name, obj);

            obj = new Edit("edtInpId","staTitle00:4","4","188","26",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divFile","0","99",null,"149","0",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("5");
            obj.set_text("div00");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staBg03","0","0",null,null,"0","0",null,null,null,null,this.divContents.form.divFile.form);
            obj.set_taborder("0");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divContents.form.divFile.addChild(obj.name, obj);

            obj = new Static("staTitle04","0","0","83",null,null,"0",null,null,null,null,this.divContents.form.divFile.form);
            obj.set_taborder("1");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_Label");
            this.divContents.form.divFile.addChild(obj.name, obj);

            obj = new Button("btnFileDel",null,"5","62","22","5",null,null,null,null,null,this.divContents.form.divFile.form);
            obj.set_taborder("2");
            obj.set_text("전체삭제");
            obj.set_cssclass("btn_WF_Detail");
            this.divContents.form.divFile.addChild(obj.name, obj);

            obj = new Button("btnFile",null,"5","62","22","btnFileDel:5",null,null,null,null,null,this.divContents.form.divFile.form);
            obj.set_taborder("3");
            obj.set_text("파일찾기");
            obj.set_cssclass("btn_WF_Detail");
            this.divContents.form.divFile.addChild(obj.name, obj);

            obj = new Grid("grdFile","staTitle04:4","btnFile:5",null,null,"5","5",null,null,null,null,this.divContents.form.divFile.form);
            obj.set_taborder("4");
            obj.set_binddataset("dsUpload");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"545\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell text=\"bind:OTXT_FILE_NM\" textAlign=\"left\"/><Cell col=\"1\" text=\"삭제\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band></Format></Formats>");
            this.divContents.form.divFile.addChild(obj.name, obj);

            obj = new Static("sta00","90","6","655","17",null,null,null,null,null,null,this.divContents.form.divFile.form);
            obj.set_taborder("5");
            obj.set_text("★ 주간보고 문서는 첫번째 파일로 등록하도록 합니다. (MS Word)");
            this.divContents.form.divFile.addChild(obj.name, obj);

            obj = new Static("staBg01_00","0","66",null,"34","0",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("6");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staTitle02_00","0","66","83","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("7");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_Label");
            this.divContents.addChild(obj.name, obj);

            obj = new Edit("edtTitle00","87","70",null,"26","5",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("8");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staTitle02_01","360","0","83","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("9");
            obj.set_text("팀");
            obj.set_cssclass("sta_WF_Label");
            this.divContents.addChild(obj.name, obj);

            obj = new WeekByMonthCalendar("WeekByMonthCalendar00","87","37","140","26",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("10");
            this.divContents.addChild(obj.name, obj);

            obj = new Combo("cboTeam","453","4","232","26",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("11");
            obj.set_innerdataset("dsTeam");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_enable("false");
            obj.set_text("cbo00");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staBg00_00","0","247",null,"364","0",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("12");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staTitle03","0","247","83","364",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("14");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_Label");
            this.divContents.addChild(obj.name, obj);

            obj = new WebBrowser("webEditor","157","265",null,"339","103",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("13");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("sta00_00","275","42","52","19",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("15");
            obj.set_text("주차");
            this.divContents.addChild(obj.name, obj);

            obj = new Edit("edt00","238","39","27","23",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("16");
            obj.set_enable("false");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divButton",null,"divContents:20","265","28","25",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"0","50","28","0",null,null,null,null,null,this.divButton.form);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_fittocontents("width");
            this.divButton.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"0","68","28","btnClose:4",null,null,null,null,null,this.divButton.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_CrudSave");
            this.divButton.addChild(obj.name, obj);

            obj = new Static("staBottom","0","divButton:0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divContents.form.divFile.form
            obj = new Layout("default","",0,0,this.divContents.form.divFile.form,function(p){});
            this.divContents.form.divFile.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form
            obj = new Layout("default","",0,0,this.divContents.form,function(p){});
            this.divContents.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divButton.form
            obj = new Layout("default","",0,0,this.divButton.form,function(p){});
            this.divButton.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",950,758,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item6","divContents.form.edtInpId","value","dsList","USER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divContents.form.cboTeam","value","dsList","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divContents.form.edtTitle00","value","dsList","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divContents.form.edt00","value","dsList","RPT_CNT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("weekUpdatePu.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	boardUpdatePu.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/03/09
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/03/09			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvApndYn    = ""; //첨부파일유무
        this.fvTitle  	 = ""; //게시판 타이틀
        this.fvFile      = null; //file Dataset
        this.fvList      = null; //board Dataset
        this.fvLoginUser = ""; //로그인유저ID
        this.fvLoginUserEmpNo = ""; //로그인유저EMP_NO
        this.fvOpenType  = "";
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	if(this.opener) {
        		this.dsTeam.copyData(this.opener.dsTeam);
        	}

        	var t = "";
        	if(this.getOwnerFrame().pvOpenType == "read") {
        		t = "조회";
        	} else if(this.getOwnerFrame().pvOpenType == "add") {
        		t = "등록";
        	} else if(this.getOwnerFrame().pvOpenType == "edit") {
        		t = "수정";
        	}
        	this.staBoardTitle.set_text(this.staBoardTitle.text + t);

        	//받아온값 세팅
        	this.fvNo = this.getOwnerFrame().pvNo;
        	if(this.fvNo) {
        		if(this.getOwnerFrame().pvOpenType == "read") {
        			this.fnReadOnly();
        			var oWeb = this.divContents.form.webEditor;
        			this.gfnCreateHtmlViewer(oWeb);
        		} else {
        			var oWeb = this.divContents.form.webEditor;
        			this.gfnCreateWebEditor(oWeb);
        		}
        		this.dsCond.setColumn(0, "RPT_NO", this.getOwnerFrame().pvNo);
        		this.fnSearch();
        	} else {
        		this.dsList.addRow();
        		this.dsList.setColumn(0, "DEPT_CD", this.gfnGetUserInfo("DEPT_CD"));
        		this.dsList.setColumn(0, "USER_NAME", this.gfnGetUserInfo("USER_NAME"));
        		var oWeb = this.divContents.form.webEditor;
        		this.gfnCreateWebEditor(oWeb);
        	}

        	//formSize조정
        	this.fnSetFormInit();


        	var pThis = this;
        	this.divContents.form.WeekByMonthCalendar00.selectCallBack = function(a, b) {
        		var t = a.substr(0,4) + "년 " + a.substr(4,2) + "월 ";
        		t = t + b + "주차 ";
        		t = t + pThis.divContents.form.cboTeam.text + " 주간보고";
        		//pThis.divContents.form.edt00.set_value(parseInt(b));
        		pThis.dsList.setColumn(0, "RPT_CNT", b);
        		pThis.divContents.form.edtTitle00.set_value(t);
        	};

        };

        this.fnReadOnly = function() {
        	this.fvOpenType = "read";
        	this.divContents.form.WeekByMonthCalendar00.set_enable(false);
        	this.divContents.form.edtTitle00.set_enable(false);
        	this.divContents.form.divFile.form.btnFile.set_visible(false);
        	this.divContents.form.divFile.form.btnFileDel.set_visible(false);
        	this.divButton.form.btnSave.set_visible(false);
        	this.divContents.form.divFile.form.grdFile.setFormatColProperty(1,"size",0);
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        this.fnSearch = function ()
        {
        	this.gfnSetMap("board", "WeekReport");

        	var strSvcId    = "selectWeekReport";
        	var strSvcUrl   = "searchCommonBaseService.do";
        	var inData      = "dsCond=dsCond dsMap=dsMap";
        	var outData     = "dsList=dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]

        	this.gfnSetMap("board", "WeekReportFile");

        	var strSvcId    = "selectWeekReportFile";
        	var strSvcUrl   = "searchCommonBaseService.do";
        	var inData      = "dsCond=dsCond dsMap=dsMap";
        	var outData     = "dsUpload=dsList";
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
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //파일업로드
        this.fnFileUploadTran = function ()
        {
        	var sBoardId = this.dsList.getColumn(0,"BLBD_CD");
        	var sFileId = this.dsList.getColumn(0, "FILE_ID");
        	if(this.gfnIsNull(sFileId)) sFileId = "";

        	this.futFile.setPostData("FILE_ID" , sFileId);

        	this.futFile.upload("svcUrl::weekReportFileUpload.do");
        };

        //내용저장
        this.fnTranSave = function ()
        {
        	this.gfnSetMap("board", "WeekReport");

        	var strSvcId    = "saveBoardContents";
        	var strSvcUrl   = "saveCommonBaseService.do";
        	var inData      = "dsList=dsList:A dsMap=dsMap";
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

        this.fnTranDeleteFile = function ()
        {
        	var strSvcId    = "deleteweekReportFile";
        	var strSvcUrl   = "deleteweekReportFile.do";
        	var inData      = "dsList=dsUpload:U";
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
        //transaction callback
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "selectWeekReport" :
        			var date = this.dsList.getColumn(0, "RPT_YEAR");
        			date = date + this.dsList.getColumn(0, "RPT_MONTH") + "01";
        			this.divContents.form.WeekByMonthCalendar00.setDate(date);
        			this.setTimer(0,300);
        			break;
        		case "saveBoardContents":
        			//저장
        			this.gfnAlert("msg.save.success", [], "saveAfter", "fnMsgCallback");
        			break;
        		case "deleteweekReportFile":
        			this.gfnAlert("msg.delete.success", [], "deleteAfter", "fnMsgCallback");
        			break;
        		default:break;
        	}
        };

        //message callback
        this.fnMsgCallback = function (sMsgId, sRtn)
        {
        	switch(sMsgId) {
        		case "deleteFileUpdate":
        			if(this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false){
        				return;
        			}
        			var nRow 	 = this.dsUpload.rowposition;
        			var nRowType = this.dsUpload.getRowType(nRow);
        			var sFileNm  = this.dsUpload.getColumn(nRow, "OTXT_FILE_NM");

        			this.dsUpload.deleteRow(nRow);
        			this.fnTranDeleteFile();
        			break;
        		case "deleteFileAllUpdate":
        			//입력모드일경우 지금 첨부된 파일이므로 그냥 삭제
        			var nCount = this.dsUpload.getCaseCount('dataset.getRowType(rowidx)==2');
        			var nTotalCnt = this.dsUpload.getRowCount();
        			if ( nCount > 0 ){
        				this.futFile.clearFileList();
        			}
        			this.dsUpload.deleteAll();
        			if( nCount == nTotalCnt){
        				this.fnFileInit();
        			}else{
        				this.fnTranDeleteFile();
        			}
        			break;
        		case "saveAfter":
        			if (sRtn)
        			{
        				this.opener.cfnSearch();
        				this.close();
        			}
        			break;
        		case "deleteAfter":
        			if (sRtn)
        			{
        				this.fnFileInit();
        			}
        			break;
        		default:
        			break;
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        //초기 폼 세팅
        this.fnSetFormInit = function ()
        {
        	//게시판 제목설정
        	//this.staBoardTitle.set_text(this.fvTitle+" ");
        	this.resetScroll();

        	if(this.fvApndYn=="0"){
        		//첨부파일 사용하지 않는 게시판 가리기
        		this.divContents.form.divFile.set_height(0);
        		this.divContents.form.divCont.set_bottom(0);
        		this.divContents.form.resetScroll();
        	}else{
        		//첨부파일영역 사이즈 조절
        		this.fnFileInit();
        	}
        };

        //div사이즈 조절
        this.fnFileInit = function ()
        {
        // 	var nRowCnt = this.dsUpload.getRowCount();
        // 	if(nRowCnt == 0 ) nRowCnt = 1;
        // 	var nHeigth = ( 32 * nRowCnt ) + 39;
        //
        // 	this.divContents.form.divFile.set_height(nHeigth);
        // 	this.divContents.form.resetScroll();
        //
        // 	var nDivMainHeight = this.divContents.form.divFile.getOffsetBottom()+5;
        // 	this.divContents.set_height(nDivMainHeight);
        // 	this.resetScroll();
        };


        //파일세팅
        this.fnSetFile = function (aVFiles)
        {
        	var nLen = aVFiles.length;

        	var sFileId = "";
        	var oFile = null;

        	for(var i=0; i<nLen; i++){
        		sFileId = aVFiles[i].filename;
        		oFile   = aVFiles[i];

        		//중복확인
        		if(this.futFile.existFile(oFile)){
        			sFileId += "_" + this.dsUpload.getRowCount();
        		}
        		this.futFile.addFile(sFileId, oFile);
        		var nRow = this.dsUpload.addRow();
        		this.dsUpload.setColumn(nRow, "OTXT_FILE_NM", sFileId);
        	}

        	this.fnFileInit();
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        //웹브라우저 온로드 컴플리트
        this.divContents_divCont_webEditor_onloadcompleted = function(obj,e)
        {
        	if(this.fvOpenType == "read") {
        		//내용세팅
        		var sContents = this.dsList.getColumn(0, "CNTN");
        		var oWeb = this.divContents.form.webEditor;
        		this.gfnSetHtmlView(oWeb, sContents);
        	}
        };

        this.isLoad=false;
        //웹브라우저 유저노티
        this.divContents_divCont_webEditor_onusernotify = function(obj,e)
        {
        	if (e.userdata=="instanceReady" && !this.isLoad){
        		obj.callMethod("init", obj.getOffsetHeight()-40);
        		this.isLoad=true;
        		this.setTimer(0,300);
        	}
        };

        //저장버튼클릭
        this.divButton_btnSave_onclick = function(obj,e)
        {
        	var date = this.divContents.form.WeekByMonthCalendar00.getDate();
        	if(this.gfnIsNull(date) == false) {
        		this.dsList.setColumn(0, "RPT_YEAR", date.substr(0,4));
        		this.dsList.setColumn(0, "RPT_MONTH", date.substr(4,2));
        		//this.dsList.setColumn(0, "RPT_CNT", parseInt(this.divContents.form.edt00.value));
        	} else {
        		this.dsList.setColumn(0, "RPT_YEAR", "");
        		this.dsList.setColumn(0, "RPT_MONTH", "");
        		this.dsList.setColumn(0, "RPT_CNT", 1);
        	}

        	var sCont = "";
        	sCont = this.divContents.form.webEditor.callMethod("getData");

        	this.dsList.setColumn(0, "CNTN", sCont);

        	// 정합성 체크
        	this.gfnClearValidation(this.dsList);

        	this.gfnSetValidation(this.dsList, "RPT_YEAR", "년월"	, "required");
        	this.gfnSetValidation(this.dsList, "RPT_MONTH", "년월"	, "required");
        	//this.gfnSetValidation(this.dsList, "DEPT_CD", "팀"	, "required");
        	this.gfnSetValidation(this.dsList, "TITLE", "제목"	, "required");

        	// Dataset의 변경된 Row Validation check
        	if (this.gfnValidation(this.dsList, "U") == false) return;

        	if(this.dsUpload.rowcount == 0) {
        		this.gfnAlert("msg.err.nofile", []);
        		return;
        	}

        	if(!this.gfnDsIsUpdated(this.dsUpload)&&!this.gfnDsIsUpdated(this.dsList)){
        			// 저장할 데이터가 없습니다.
        			this.gfnAlert("msg.save.nochange");
        			return;
        	}else{
        		if(this.gfnDsIsUpdated(this.dsUpload) && this.gfnDsIsUpdated(this.dsList)){
        			//file변경
        			if(this.futFile.filelist.length > 0){
        				this.fnFileUploadTran();
        			}
        		} else {
        			if(this.gfnDsIsUpdated(this.dsList)){
        				//내용변경
        				this.fnTranSave();
        			}
        		}
        	}
        };

        //닫기버튼클릭
        this.divButton_btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        //첨부파일 삭제 버튼 클릭
        this.divContents_divFile_grdFile_oncellclick = function(obj,e)
        {
        	var nRow = e.row;
        	if(e.cell == 1){
        		var nStatus = this.dsUpload.getRowType(nRow);
        		if( nStatus == 2){
        			//새로추가된 파일은 그냥 삭제
        			var sFileNm = this.dsUpload.getColumn(nRow, "OTXT_FILE_NM");
        			this.futFile.removeFile(sFileNm);
        			this.dsUpload.deleteRow(nRow);
        			this.fnFileInit();
        		}else{
        			//이미 서버에 저장된 파일은 파일 삭제 진행
        			this.gfnAlert("confirm.before.filedelete",[],"deleteFileUpdate", "fnMsgCallback");
        		}
        	} else {
        		var fileId = this.dsUpload.getColumn(this.dsUpload.rowposition, "FILE_ID");
        		if(this.gfnIsNull(fileId) == false) {
        			var sFileNm 	= this.dsUpload.getColumn(e.row, "OTXT_FILE_NM");
        			var sSaveFileNm = this.dsUpload.getColumn(e.row, "SAVE_FILE_NM");
        			this.fdtFile.setPostData("saveFileName"	, "weekreport/" + sSaveFileNm);
        			this.fdtFile.setPostData("orgFileName"	, sFileNm);

        			this.fdtFile.set_downloadfilename(sFileNm)
        			this.fdtFile.download("svcUrl::fileDownload.do");
        		}
        	}
        };


        //첨부파일 전체 삭제
        this.divContents_divFile_btnFileDel_onclick = function(obj,e)
        {
        	this.gfnAlert("confirm.before.filedeleteall",[],"deleteFileAllUpdate", "fnMsgCallback");
        };

        //파일 드래그 앤 드랍
        this.divContents_divFile_grdFile_ondrop = function(obj,e)
        {
        	this.fnSetFile(e.filelist);
        };

        //첨부파일 선택
        this.divContents_divFile_btnFile_onclick = function(obj,e)
        {
        	this.fdgFile.open("file upload..", FileDialog.MULTILOAD);
        };

        //파일다이얼로그 클로즈
        this.fdgFile_onclose = function(obj,e)
        {
        	if( e.reason == 3 ){
        		//멀티업로드일경우
        		this.fnSetFile(e.virtualfiles);
        	}
        };

        //파일업로드트랜스퍼 온 에러
        this.futFile_onerror = function(obj,e)
        {
        	this.gfnAlert("msg.server.error.msg" ,[e.errormsg]);
        };

        //파일업로드트랜스퍼 온 서세스
        this.futFile_onsuccess = function(obj,e)
        {
        	this.futFile.clearFileList();
        	this.dsList.setColumn(0, "FILE_ID", e.datasets[0].getColumn(0,"FILE_ID"));
        	this.fnTranSave();
        };

        this.bizBoardInputPopup_ontimer = function(obj,e)
        {
        	if(e.timerid == 0){
        		this.killTimer(0);

        		// 로딩 후 처리
        		var sCntn = this.dsList.getColumn(0, "CNTN");
        		if(!this.gfnIsNull(sCntn)){
        			this.divContents.form.webEditor.callMethod("setData", sCntn);
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ontimer",this.bizBoardInputPopup_ontimer,this);
            this.divContents.form.divFile.form.btnFileDel.addEventHandler("onclick",this.divContents_divFile_btnFileDel_onclick,this);
            this.divContents.form.divFile.form.btnFile.addEventHandler("onclick",this.divContents_divFile_btnFile_onclick,this);
            this.divContents.form.divFile.form.grdFile.addEventHandler("oncellclick",this.divContents_divFile_grdFile_oncellclick,this);
            this.divContents.form.divFile.form.grdFile.addEventHandler("ondrop",this.divContents_divFile_grdFile_ondrop,this);
            this.divContents.form.webEditor.addEventHandler("onloadcompleted",this.divContents_divCont_webEditor_onloadcompleted,this);
            this.divContents.form.webEditor.addEventHandler("onusernotify",this.divContents_divCont_webEditor_onusernotify,this);
            this.divButton.form.btnClose.addEventHandler("onclick",this.divButton_btnClose_onclick,this);
            this.divButton.form.btnSave.addEventHandler("onclick",this.divButton_btnSave_onclick,this);
            this.fdgFile.addEventHandler("onclose",this.fdgFile_onclose,this);
            this.futFile.addEventHandler("onsuccess",this.futFile_onsuccess,this);
            this.futFile.addEventHandler("onerror",this.futFile_onerror,this);
            this.fdtFile.addEventHandler("onerror",this.fdtFile_onerror,this);
            this.fdtFile.addEventHandler("onsuccess",this.fdtFile_onsuccess,this);
        };
        this.loadIncludeScript("weekUpdatePu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
