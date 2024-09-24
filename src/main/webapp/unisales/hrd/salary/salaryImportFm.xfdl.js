(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("salaryImportFm");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds00", this);
            obj._setContents("<ColumnInfo><Column id=\"COL000\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"COL001\" type=\"STRING\" size=\"255\"/><Column id=\"COL002\" type=\"STRING\" size=\"255\"/><Column id=\"COL003\" type=\"STRING\" size=\"255\"/><Column id=\"COL004\" type=\"STRING\" size=\"255\"/><Column id=\"COL005\" type=\"STRING\" size=\"255\"/><Column id=\"COL006\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"COL007\" type=\"DATETIME\" size=\"255\"/><Column id=\"COL008\" type=\"STRING\" size=\"255\"/><Column id=\"COL009\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"COL010\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"COL011\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"COL012\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"COL013\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"COL014\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"COL015\" type=\"STRING\" size=\"255\"/><Column id=\"COL016\" type=\"STRING\" size=\"255\"/><Column id=\"COL017\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"COL018\" type=\"STRING\" size=\"255\"/><Column id=\"COL019\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"COL020\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"COL021\" type=\"STRING\" size=\"255\"/><Column id=\"COL022\" type=\"STRING\" size=\"255\"/><Column id=\"COL023\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"COL024\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"COL025\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"COL026\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"COL027\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"COL028\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"COL029\" type=\"STRING\" size=\"255\"/><Column id=\"COL030\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"COL031\" type=\"STRING\" size=\"255\"/><Column id=\"COL032\" type=\"STRING\" size=\"255\"/><Column id=\"COL033\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"COL034\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"COL035\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"COL036\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"COL037\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"COL038\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"COL039\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"COL040\" type=\"STRING\" size=\"255\"/><Column id=\"COL041\" type=\"STRING\" size=\"255\"/><Column id=\"COL042\" type=\"STRING\" size=\"255\"/><Column id=\"COL043\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"COL044\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"COL045\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"COL046\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"COL047\" type=\"BIGDECIMAL\" size=\"255\"/><Column id=\"COL048\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsIn", this);
            obj._setContents("<ColumnInfo><Column id=\"html\" type=\"STRING\" size=\"256\"/><Column id=\"fname\" type=\"STRING\" size=\"256\"/><Column id=\"dpath\" type=\"STRING\" size=\"256\"/><Column id=\"enc\" type=\"STRING\" size=\"256\"/><Column id=\"resno\" type=\"STRING\" size=\"256\"/><Column id=\"fromemail\" type=\"STRING\" size=\"256\"/><Column id=\"fromname\" type=\"STRING\" size=\"256\"/><Column id=\"subject\" type=\"STRING\" size=\"256\"/><Column id=\"toemail\" type=\"STRING\" size=\"256\"/><Column id=\"fromemailpassword\" type=\"STRING\" size=\"256\"/><Column id=\"contents\" type=\"STRING\" size=\"256\"/><Column id=\"toname\" type=\"STRING\" size=\"256\"/><Column id=\"YYYYMM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"enc\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMailContents", this);
            obj.getSetter("firefirstcount").set("0");
            obj._setContents("<ColumnInfo><Column id=\"MAIL_SUBJECT\" type=\"string\" size=\"32\"/><Column id=\"USER_ID\" type=\"string\" size=\"32\"/><Column id=\"MAIL_CONTENTS\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fdtFile", this);
            obj.set_url("svcUrl::fileDownload.do");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnAdd","0","50","130","28",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("엑셀파일 선택");
            obj.set_cssclass("btn_WFSA_Search");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","0","91",null,null,"20","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds00");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"44\" band=\"left\"/><Column size=\"48\" band=\"left\"/><Column size=\"80\" band=\"left\"/><Column size=\"124\"/><Column size=\"175\"/><Column size=\"134\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" rowspan=\"2\" text=\"No.\"/><Cell col=\"2\" rowspan=\"2\" text=\"사원명\" font=\"bold 12px/normal &quot;noto&quot;,&quot;Malgun Gothic&quot;,&quot;Arial&quot;\"/><Cell col=\"3\" rowspan=\"2\" text=\"주민번호\" font=\"bold 12px/normal &quot;noto&quot;,&quot;Malgun Gothic&quot;,&quot;Arial&quot;\"/><Cell col=\"4\" rowspan=\"2\" text=\"이메일주소\" font=\"bold 12px/normal &quot;noto&quot;,&quot;Malgun Gothic&quot;,&quot;Arial&quot;\"/><Cell col=\"5\" rowspan=\"2\" text=\"부서\" font=\"bold 12px/normal &quot;noto&quot;,&quot;Malgun Gothic&quot;,&quot;Arial&quot;\"/><Cell col=\"6\" rowspan=\"2\" text=\"직급\" border=\"1px solid #e1e1e1,1px solid #000000,1px solid #e1e1e1,1px solid #e1e1e1\" font=\"bold 12px/normal &quot;noto&quot;,&quot;Malgun Gothic&quot;,&quot;Arial&quot;\"/><Cell col=\"7\" colspan=\"6\" text=\"지급(고정)\" border=\"1px solid #e1e1e1,1px solid #000000,1px solid #e1e1e1,1px solid #e1e1e1\" font=\"bold 12px/normal &quot;noto&quot;,&quot;Malgun Gothic&quot;,&quot;Arial&quot;\"/><Cell col=\"13\" colspan=\"4\" text=\"지급(변동)\" border=\"1px solid #e1e1e1,1px solid #000000,1px solid #e1e1e1,1px solid #e1e1e1\" font=\"bold 12px/normal &quot;noto&quot;,&quot;Malgun Gothic&quot;,&quot;Arial&quot;\"/><Cell col=\"17\" rowspan=\"2\" text=\"지급액계\" border=\"1px solid #e1e1e1,1px solid #000000,1px solid #e1e1e1,1px solid #e1e1e1\" font=\"bold 12px/normal &quot;noto&quot;,&quot;Malgun Gothic&quot;,&quot;Arial&quot;\"/><Cell col=\"18\" colspan=\"14\" text=\"공제\" border=\"1px solid #e1e1e1,1px solid #000000,1px solid #e1e1e1,1px solid #e1e1e1\" font=\"bold 12px/normal &quot;noto&quot;,&quot;Malgun Gothic&quot;,&quot;Arial&quot;\"/><Cell col=\"32\" rowspan=\"2\" text=\"차인지급액\" font=\"bold 12px/normal &quot;noto&quot;,&quot;Malgun Gothic&quot;,&quot;Arial&quot;\"/><Cell row=\"1\" col=\"7\" text=\"기본급\" font=\"bold 12px/normal &quot;noto&quot;,&quot;Malgun Gothic&quot;,&quot;Arial&quot;\"/><Cell row=\"1\" col=\"8\" text=\"연장(고정)\" font=\"bold 12px/normal &quot;noto&quot;,&quot;Malgun Gothic&quot;,&quot;Arial&quot;\"/><Cell row=\"1\" col=\"9\" text=\"직책수당\" font=\"bold 12px/normal &quot;noto&quot;,&quot;Malgun Gothic&quot;,&quot;Arial&quot;\"/><Cell row=\"1\" col=\"10\" text=\"연구수당\" font=\"bold 12px/normal &quot;noto&quot;,&quot;Malgun Gothic&quot;,&quot;Arial&quot;\"/><Cell row=\"1\" col=\"11\" text=\"식대\" font=\"bold 12px/normal &quot;noto&quot;,&quot;Malgun Gothic&quot;,&quot;Arial&quot;\"/><Cell row=\"1\" col=\"12\" text=\"보육비\" border=\"1px solid #e1e1e1,1px solid #000000,1px solid #e1e1e1,1px solid #e1e1e1\" font=\"bold 12px/normal &quot;noto&quot;,&quot;Malgun Gothic&quot;,&quot;Arial&quot;\"/><Cell row=\"1\" col=\"13\" text=\"출장비\" font=\"bold 12px/normal &quot;noto&quot;,&quot;Malgun Gothic&quot;,&quot;Arial&quot;\"/><Cell row=\"1\" col=\"14\" text=\"휴가지원비\" font=\"bold 12px/normal &quot;noto&quot;,&quot;Malgun Gothic&quot;,&quot;Arial&quot;\"/><Cell row=\"1\" col=\"15\" text=\"체련단련비\" font=\"bold 12px/normal &quot;noto&quot;,&quot;Malgun Gothic&quot;,&quot;Arial&quot;\"/><Cell row=\"1\" col=\"16\" text=\"자회사지급\" border=\"1px solid #e1e1e1,1px solid #000000,1px solid #e1e1e1,1px solid #e1e1e1\" font=\"bold 12px/normal &quot;noto&quot;,&quot;Malgun Gothic&quot;,&quot;Arial&quot;\"/><Cell row=\"1\" col=\"18\" text=\"소득세\" font=\"bold 12px/normal &quot;noto&quot;,&quot;Malgun Gothic&quot;,&quot;Arial&quot;\"/><Cell row=\"1\" col=\"19\" text=\"지방소득세\" font=\"bold 12px/normal &quot;noto&quot;,&quot;Malgun Gothic&quot;,&quot;Arial&quot;\"/><Cell row=\"1\" col=\"20\" text=\"국민연금\" font=\"bold 12px/normal &quot;noto&quot;,&quot;Malgun Gothic&quot;,&quot;Arial&quot;\"/><Cell row=\"1\" col=\"21\" text=\"건강보험\" font=\"bold 12px/normal &quot;noto&quot;,&quot;Malgun Gothic&quot;,&quot;Arial&quot;\"/><Cell row=\"1\" col=\"22\" text=\"장기요양보험료\" font=\"bold 12px/normal &quot;noto&quot;,&quot;Malgun Gothic&quot;,&quot;Arial&quot;\"/><Cell row=\"1\" col=\"23\" text=\"고용보험\" font=\"bold 12px/normal &quot;noto&quot;,&quot;Malgun Gothic&quot;,&quot;Arial&quot;\"/><Cell row=\"1\" col=\"24\" text=\"기타공제\" font=\"bold 12px/normal &quot;noto&quot;,&quot;Malgun Gothic&quot;,&quot;Arial&quot;\"/><Cell row=\"1\" col=\"25\" text=\"소득세(연말)\" font=\"bold 12px/normal &quot;noto&quot;,&quot;Malgun Gothic&quot;,&quot;Arial&quot;\"/><Cell row=\"1\" col=\"26\" text=\"주민세(연말)\" font=\"bold 12px/normal &quot;noto&quot;,&quot;Malgun Gothic&quot;,&quot;Arial&quot;\"/><Cell row=\"1\" col=\"27\" text=\"건강(연말)\" font=\"bold 12px/normal &quot;noto&quot;,&quot;Malgun Gothic&quot;,&quot;Arial&quot;\"/><Cell row=\"1\" col=\"28\" text=\"장기요양&#13;&#10;(연말)\" font=\"bold 12px/normal &quot;noto&quot;,&quot;Malgun Gothic&quot;,&quot;Arial&quot;\"/><Cell row=\"1\" col=\"29\" text=\"학자금원천공제\"/><Cell row=\"1\" col=\"30\" text=\"선지급\" font=\"bold 12px/normal &quot;noto&quot;,&quot;Malgun Gothic&quot;,&quot;Arial&quot;\"/><Cell row=\"1\" col=\"31\" text=\"공제액계\" border=\"1px solid #e1e1e1,1px solid #000000,1px solid #e1e1e1,1px solid #e1e1e1\" font=\"bold 12px/normal &quot;noto&quot;,&quot;Malgun Gothic&quot;,&quot;Arial&quot;\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" expr=\"currow+1\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:COL001\" font=\"bold 14px/normal &quot;noto&quot;,&quot;Malgun Gothic&quot;,&quot;Arial&quot;\"/><Cell col=\"3\" text=\"bind:COL002\"/><Cell col=\"4\" text=\"bind:COL003\"/><Cell col=\"5\" text=\"bind:COL004\"/><Cell col=\"6\" text=\"bind:COL005\" border=\"1px solid #e1e1e1,1px solid #000000,1px solid #e1e1e1,1px solid #e1e1e1\"/><Cell col=\"7\" text=\"bind:COL023\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:COL024\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"9\" text=\"bind:COL025\"/><Cell col=\"10\" text=\"bind:COL026\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:COL027\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"12\" text=\"bind:COL028\" displaytype=\"number\" textAlign=\"right\" border=\"1px solid #e1e1e1,1px solid #000000,1px solid #e1e1e1,1px solid #e1e1e1\"/><Cell col=\"13\" text=\"bind:COL029\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"14\" text=\"bind:COL030\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"15\" text=\"bind:COL031\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"16\" text=\"bind:COL032\" displaytype=\"number\" textAlign=\"right\" border=\"1px solid #e1e1e1,1px solid #000000,1px solid #e1e1e1,1px solid #e1e1e1\"/><Cell col=\"17\" text=\"bind:COL033\" displaytype=\"number\" textAlign=\"right\" border=\"1px solid #e1e1e1,1px solid #000000,1px solid #e1e1e1,1px solid #e1e1e1\"/><Cell col=\"18\" text=\"bind:COL034\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"19\" text=\"bind:COL035\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"20\" text=\"bind:COL036\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"21\" text=\"bind:COL037\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"22\" text=\"bind:COL038\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"23\" text=\"bind:COL039\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"24\" text=\"bind:COL040\"/><Cell col=\"25\" text=\"bind:COL041\"/><Cell col=\"26\" text=\"bind:COL042\"/><Cell col=\"27\" text=\"bind:COL043\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"28\" text=\"bind:COL044\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"29\" text=\"bind:COL045\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"30\" text=\"bind:COL046\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"31\" text=\"bind:COL047\" displaytype=\"number\" textAlign=\"right\" border=\"1px solid #e1e1e1,1px solid #000000,1px solid #e1e1e1,1px solid #e1e1e1\"/><Cell col=\"32\" text=\"bind:COL048\" displaytype=\"number\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd00","160","50","155","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("선택항목 엑셀저장");
            obj.set_cssclass("btn_TF_Xls");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd00_00","320","50","155","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("선택항목 PDF 저장");
            obj.set_cssclass("btn_TF_Pdf");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chk00","679","49","211","27",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Password 설정");
            obj.set_value("true");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","2","300","43",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("급여대장 Import");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Button("btnEmail","480","50","184","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("선택항목 E-MAIL발송");
            obj.set_cssclass("btn_TF_Mail");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnContents",null,"53","120","28","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("메일컨텐츠 수정");
            obj.set_cssclass("btn_TF_Download");
            this.addChild(obj.name, obj);

            obj = new Button("btnEmailInfo",null,"53","120","28","148",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("메일비번 설정");
            obj.set_cssclass("btn_TF_Download");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnDeleteFiles",null,"53","120","28","btnContents:10",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("서버파일삭제");
            obj.set_cssclass("btn_TF_Download");
            obj.set_background("#000000");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("salaryImportFm.xfdl", function() {

        this.fvPDFindex = -1;


        this.salaryImportFm_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	this.fnTranSearch();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	this.fnTranSearch();
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //master 조회
        this.fnTranSearch = function ()
        {
        	var strSvcId    = "searchSalaryUserList";
        	var strSvcUrl   = "searchSalaryUserList.do";
        	var inData      = "";
        	var outData     = "dsUserList=dsUserList dsMailContents=dsMailContents";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        //메일전송
        this.fnTranSendMail = function ()
        {
        	var strSvcId    = "salarySendMail";
        	var strSvcUrl   = "salarySendMail.do";
        	var inData      = "dsIn=dsIn";
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

        //서버작업파일 삭제
        this.fnTranDeletePdf = function ()
        {
        	var strSvcId    = "deletePdfList";
        	var strSvcUrl   = "deletePdfList.do";
        	var inData      = "dsIn=dsIn";
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
        		case "searchSalaryUserList":
        			this.dsMailContents.addColumn("USER_EMAIL");
        			this.dsMailContents.addColumn("USER_NAME");

        			if(this.dsMailContents.rowcount == 0) {
        				this.dsMailContents.addColumn("SEQ");
        				this.dsMailContents.addColumn("MAIL_SUBJECT");
        				this.dsMailContents.addColumn("USER_ID");
        				this.dsMailContents.addColumn("MAIL_CONTENTS");
        				this.dsMailContents.addRow();
        				this.dsMailContents.setColumn(0, "SEQ", "1");
        			}
        			this.dsMailContents.setColumn(0, "USER_EMAIL", this.gfnGetUserInfo("EMAIL"));
        			this.dsMailContents.setColumn(0, "USER_ID", this.gfnGetUserInfo("USER_ID"));
        			this.dsMailContents.setColumn(0, "USER_NAME", this.gfnGetUserInfo("USER_NAME"));
        // 			this.dsMailContents.setColumn(0, "USER_EMAIL", "ylk@dxtobe.com");
        // 			this.dsMailContents.setColumn(0, "USER_ID", "ylk");
        // 			this.dsMailContents.setColumn(0, "USER_NAME", "김예림");
        			break;
        		case "salarySendMail":
        			this.gfnAlert("msg.mail.success");
        			break;
        		case "deletePdfList":
        			this.gfnAlert("msg.delete.success");
        			break;
        		default: break;
        	}
        };

        this.btnAdd_onclick = function(obj,e)
        {
        	this.importObj = new nexacro.ExcelImportObjectJS();
        	this.importObj.addEventHandler("onsuccess", this.ExcelImport_onsuccess, this);
        	this.importObj.addEventHandler("onerror", this.ExcelImport_onerror, this);

        	this.fvPDFindex = 0;
        	//----------------------------------------------------------------------------
        	// param
        	// 	1. getsheetlist or etc
        	// 	2. sheetname / sheetindex
        	// 	3. range	ex) "C3:I8", "C3", ""
        	// 	4. dataset
        	// 	5. client column 사용유무
        	// 	6. 최초 row skip시 갯수 (range가 있는 경우 무시)
        	//     - 예) 1 : 첫번째 row를 읽는 처리를 하지 않음
        	//----------------------------------------------------------------------------
        	this.importObj.importData("", "급여대장", "A7", this.ds00, false, true);
        };

        this.ExcelImport_onsuccess = function(obj,e)
        {
        	trace("------ExcelExportObject00_onsuccess---------");
         	trace(e.url);
        	this._tempdata = obj._tempdata;
        	this.salaryTitle1 = JSON.parse(JSON.stringify(obj._salaryTitle1));
        	this.salaryTitle2 = JSON.parse(JSON.stringify(obj._salaryTitle2));

        	if(this.ds00.rowcount>0) {
        		this.btnAdd00.set_enable(true);
        		this.btnAdd00_00.set_enable(true);
        		this.btnEmail.set_enable(true);
        	} else {
        		this.btnAdd00.set_enable(false);
        		this.btnAdd00_00.set_enable(false);
        		this.btnEmail.set_enable(false);
        	}

        	// 동적으로 생성하고 재사용하지 않는 경우 반드시 파기 처리
        	this.importObj.destroy();
        	this.importObj = null;

        	this.fnGridFormat();
        	this.fnProc();
        	//this.grd00.createFormat();
        };

        this.fnGridFormat = function() {
        	this.grd00.set_binddataset("");
        	var h1 = this.salaryTitle1;
        	var h2 = this.salaryTitle2;

        	var f = '<Formats>\n';
        	f += '\t<Format id="default">\n';

        	// columns
        	f += '\t\t<Columns>\n';
        	f += '\t\t\t<Column size="44" band="left"/>\n';	// 체크
        	f += '\t\t\t<Column size="48" band="left"/>\n';	// 번호
        	f += '\t\t\t<Column size="80" band="left"/>\n';	// 사원명
        	f += '\t\t\t<Column size="125"/>\n';	// 주민번호
        	f += '\t\t\t<Column size="180"/>\n';	// 이메일주소
        	f += '\t\t\t<Column size="130"/>\n';	// 부서
        	f += '\t\t\t<Column size="80"/>\n';	// 직급

        	var objTitle = {
        		"in1" : {},
        		"in2" : {},
        		"intotal" : {},
        		"out" : {},
        		"outtotal" : {},
        		"total" : {}
        	};

        	for(var i=23;i<h1.length;i++) {
        		if(h1[i] && h1[i].t == "s") {
        			if(h1[i].v == "지급(고정)") {
        				objTitle.in1.s = i;
        			} else if(h1[i].v == "지급(변동)") {
        				objTitle.in1.e = i-1;
        				objTitle.in2.s = i;
        			} else if(h1[i].v == "공제") {
        				objTitle.in2.e = i-2;
        				objTitle.intotal.s = i-1;
        				objTitle.intotal.e = i-1;
        				objTitle.out.s = i;
        			} else if(h1[i].v == "차인지급액") {
        				objTitle.out.e = i-2;
        				objTitle.outtotal.s = i-1;
        				objTitle.outtotal.e = i-1;
        				objTitle.total.s = i;
        				objTitle.total.e = i;
        				break;
        			}
        		}
        	}


        	for(var i=23;i<=objTitle.total.s;i++) {
        		if( (h1[i] && h1[i].t == "s" && h1[i].v.indexOf("차인지급")>=0) ||
        			(h2[i] && h2[i].t == "s" && h2[i].v.indexOf("액계")>=0)) {
        			f += '\t\t\t<Column size="120"/>\n';
        		} else {
        			f += '\t\t\t<Column size="80"/>\n';
        		}
        	}

        	f += '\t\t</Columns>\n';

        	// rows
        	f += '\t\t<Rows>\n';
        	f += '\t\t\t<Row size="30" band="head"/>\n';
        	f += '\t\t\t<Row size="32" band="head"/>\n';
        	f += '\t\t\t<Row size="30" band="body"/>\n';
        	f += '\t\t</Rows>\n';

        	// header
        	f += '\t\t<Band id="head">\n';
        	f += '\t\t\t<Cell rowspan="2" displaytype="checkboxcontrol" edittype="checkbox"/>\n';
        	f += '\t\t\t<Cell col="1" rowspan="2" text="No."/>\n';
        	f += '\t\t\t<Cell col="2" rowspan="2" text="사원명"/>\n';
        	f += '\t\t\t<Cell col="3" rowspan="2" text="주민번호"/>\n';
        	f += '\t\t\t<Cell col="4" rowspan="2" text="이메일주소"/>\n';
        	f += '\t\t\t<Cell col="5" rowspan="2" text="부서"/>\n';
        	f += '\t\t\t<Cell col="6" rowspan="2" text="직급" border="1px solid #e1e1e1,1px solid #000000,1px solid #e1e1e1,1px solid #e1e1e1"/>\n';

        	var cnt = ((objTitle.in1.e - objTitle.in1.s) + 1);
        	f += '\t\t\t<Cell col="7" colspan="' + cnt + '" text="지급(고정)" border="1px solid #e1e1e1,1px solid #000000,1px solid #e1e1e1,1px solid #e1e1e1"/>\n';
        	var col = 7 + cnt;
        	cnt = ((objTitle.in2.e - objTitle.in2.s) + 1);
        	f += '\t\t\t<Cell col="' + col + '" colspan="' + cnt + '" text="지급(변동)" border="1px solid #e1e1e1,1px solid #000000,1px solid #e1e1e1,1px solid #e1e1e1"/>\n';
        	col = col + cnt;
        	f += '\t\t\t<Cell col="' + col + '" rowspan="2" text="지급액계" border="1px solid #e1e1e1,1px solid #000000,1px solid #e1e1e1,1px solid #e1e1e1"/>\n';
        	col++;
        	cnt = ((objTitle.outtotal.e - objTitle.out.s) + 1);	// 공제액계 포함해서 outtotal..
        	f += '\t\t\t<Cell col="' + col + '" colspan="' + cnt + '" text="공제" border="1px solid #e1e1e1,1px solid #000000,1px solid #e1e1e1,1px solid #e1e1e1"/>\n';

        	f += '\t\t\t<Cell col="' + (col+cnt) + '" rowspan="2" text="차인지급액" border="1px solid #e1e1e1,1px solid #000000,1px solid #e1e1e1,1px solid #e1e1e1"/>\n';

        	col = 6;
        	for(var i=23;i<=objTitle.total.s;i++) {
        		col++;
        		if(h2[i] && h2[i].t == "s") {
        			if(h2[i].v == "지급액계" || /*h2[i].v == "공제액계" || i == objTitle.outtotal.s || */i == objTitle.total.s) {
        				continue;
        			}
        			f += '\t\t\t<Cell row="1" col="' + col + '" text="' + h2[i].v + '"';
        			if(i == objTitle.in1.e || i == objTitle.in2.e || i == objTitle.out.e || i == objTitle.outtotal.e) {
        				f += '  border="1px solid #e1e1e1,1px solid #000000,1px solid #e1e1e1,1px solid #e1e1e1"';
        			}
        			f += "/>\n";
        		}
        	}
        	f += '\t\t</Band>\n';
        	f += '\t\t<Band id="body">\n';
        	f += '\t\t\t<Cell displaytype="checkboxcontrol" edittype="checkbox" text="bind:CHK"/>\n';
        	f += '\t\t\t<Cell col="1" expr="currow+1" textAlign="center"/>\n';
        	f += '\t\t\t<Cell col="2" text="bind:COL001"/>\n';	// 사원명
        	f += '\t\t\t<Cell col="3" text="bind:COL002"/>\n';
        	f += '\t\t\t<Cell col="4" text="bind:COL003"/>\n';
        	f += '\t\t\t<Cell col="5" text="bind:COL004"/>\n';
        	f += '\t\t\t<Cell col="6" text="bind:COL005" border="1px solid #e1e1e1,1px solid #000000,1px solid #e1e1e1,1px solid #e1e1e1"/>\n';

        	col = 7;
        	var snm = "COL";

        	this.objTitle = objTitle;
        	this.salaryObj = {
        		indata : [],
        		intotal : [],
        		outdata : [],
        		outtotal : [],
        		total : []
        	};

        	// body
        	for(var i=23;i<=objTitle.total.s;i++) {

        		snm = "COL" + (i+"").padLeft(3,"0");

        		// 데이터 저장
        		// 지급
        		if(i >= objTitle.in1.s && i <= objTitle.in2.e) {
        			var o = { colname : snm, idx : i, txt : h2[i].v };
        			this.salaryObj.indata[i] = o;
        		} else if(i == objTitle.intotal.s) {
        			var o = { colname : snm, idx : i, txt : "지급액계" };
        			this.salaryObj.intotal[i] = o;
        		} else if(i >= objTitle.out.s && i <= objTitle.out.e) {
        			var o = { colname : snm, idx : i, txt : h2[i].v };
        			this.salaryObj.outdata[i] = o;
        		} else if(i == objTitle.outtotal.s) {
        			var o = { colname : snm, idx : i, txt : "공제액계" };
        			this.salaryObj.outtotal[i] = o;
        		} else if(i == objTitle.total.s) {
        			var o = { colname : snm, idx : i, txt : "차인지급액" };
        			this.salaryObj.total[i] = o;
        		}

        		f += '\t\t\t<Cell col="' + col + '" text="bind:' + snm + '" displaytype="number" textAlign="right"';

        		if(i == objTitle.in1.e || i == objTitle.in2.e || i == (objTitle.in2.e+1) || i == objTitle.out.e || i == objTitle.outtotal.e) {
        			f += '  border="1px solid #e1e1e1,1px solid #000000,1px solid #e1e1e1,1px solid #e1e1e1"';
        		}
        		f += "/>\n";
        		col++;
        	}
        	f += '\t\t</Band>\n';
        	f += '\t</Format>\n';
        	f += '\t</Formats>';
        	this.grd00.set_formats(f);
        	this.grd00.set_binddataset("ds00");
        };

        this.fnProc = function() {
        	this.ds00.set_enableevent(false);
        	this.ds00.addColumn("CHK", "string", 1);
        	for(var i=this.ds00.rowcount-1;i>=0;i--) {
        		if(	this.ds00.getColumn(i, "COL001") == "" ||
        			!this.ds00.getColumn(i, "COL001")) {
        				this.ds00.deleteRow(i);
        		}
        	}
        	this.ds00.set_rowposition(0);
        	this.ds00.set_enableevent(true);
        }

        this.grd00_oncellclick = function(obj,e)
        {

        };

        this.grd00_onheadclick = function(obj,e)
        {
        	if(e.cell != 0) return;
        	var v = obj.getCellPropertyValue(e.row, e.cell, "text");
        	var r;
        	if(!v || v == "" || v == "0") {
        		obj.setCellProperty("head", e.cell, "text", "1");
        		r = "1";
        	} else {
        		obj.setCellProperty("head", e.cell, "text", "0");
        		r = "0";
        	}
        	this.fnAllCheck(r);
        };

        this.fnAllCheck = function(v) {
        	this.ds00.set_enableevent(false);
        	for(var i=0,nLen=this.ds00.rowcount;i<nLen;i++) {
        		this.ds00.setColumn(i, "CHK", v);
        	}
        	this.ds00.set_enableevent(true);
        }

        // excel export
        this.btnAdd00_onclick = function(obj,e)
        {
        	var dt = this._tempdata.substr(0,7);	// "2023.08 주식회사 투비소프트씨앤에스 급여대장"
        	dt = dt.split(".");
        	var y = nexacro.toNumber(dt[0]);
        	var m = nexacro.toNumber(dt[1]);
        	var fname = y+"년"+dt[1]+"월_급여명세서_";

        	this.ds00.set_enableevent(false);
        	//for(var i=this.ds00.rowcount-1;i>=0;i--) {
        	for(var i=0;i<this.ds00.rowcount;i++) {
        		if(	this.ds00.getColumn(i, "CHK") == "1" ) {
        			this.gfnWriteExcelLocal(y, m, this.ds00, i, fname);
        			this.ds00.setColumn(i, "CHK", "0");
        		}
        	}
        	this.ds00.set_enableevent(true);
        };

        // pdf download
        this.btnAdd00_00_onclick = function(obj,e)
        {
        	var dt = this._tempdata.substr(0,7);	// "2023.08 주식회사 투비소프트씨앤에스 급여대장"
        	dt = dt.split(".");
        	var y = nexacro.toNumber(dt[0]);
        	var m = nexacro.toNumber(dt[1]);

        	this.dsIn.clearData();
        	this.dsIn.addRow();
        	if(this.chk00.value == true) {
        		this.dsIn.setColumn(0, "enc", "Y");
        	} else {
        		this.dsIn.setColumn(0, "enc", "N");
        	}

        	this.dsIn.setColumn(0, "dpath", "M" + y + dt[1]);

        	//for(var i=this.ds00.rowcount-1;i>=0;i--) {
        	for(var i=this.fvPDFindex;i<this.ds00.rowcount;i++) {
        		if(	this.ds00.getColumn(i, "CHK") == "1" ) {
        			this.ds00.set_enableevent(false);
        			var fname = y+"년"+dt[1]+"월_급여명세서_" + this.ds00.getColumn(i,"COL001");
        			this.dsIn.setColumn(0, "fname", fname);
        			this.dsIn.setColumn(0, "resno", this.ds00.getColumn(i,"COL002").replace("-",""));
        			this.gfnWritePDFLocal(y, m, this.ds00, i, fname);
        			this.ds00.setColumn(i, "CHK", "0");
        			this.ds00.set_rowposition(i);
        			this.ds00.set_enableevent(true);
        			break;
        		}
        	}

        // 	var strSvcId    = "deletePdf";
        // 	var strSvcUrl   = "fileDeleteSalaryPDF.do";
        // 	var inData      = "";
        // 	var outData     = "";
        // 	var strArg      = "";
        // 	var callBackFnc = "fnCallback";
        //
        // 	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 						strSvcUrl , 	// trabsaction을 요청할 주소
        // 						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        // 						callBackFnc); 	// 통신방법 정의 [생략가능]

        };

        this.fn_SetEmailData = function(idx, nRow, y, m, pwd)
        {
        	var name = this.ds00.getColumn(idx, "COL001");
        	var nFindRow = this.dsUserList.findRow("KORN_NM", name);
        	console.log(name, nFindRow);
        	if(nFindRow < 0) {
        		this.gfnAlert("msg.nodata.userid");
        		return false;
        	}

        // 	if(this.dsUserList.getColumn(nFindRow, "EMAIL") != "jihs@dxtobe.com") {
        // 	if(this.dsUserList.getColumn(nFindRow, "EMAIL") == this.dsMailContents.getColumn(0, "USER_EMAIL")) {
        // 		this.gfnAlert("msg.mail.same");
        // 		return false;
        // 	}
        // 	}

        	var uname = this.dsUserList.getColumn(nFindRow, "KORN_NM");
        	this.dsIn.setColumn(nRow, "toemail", this.dsUserList.getColumn(nFindRow, "EMAIL"));
        	this.dsIn.setColumn(nRow, "toname", uname);

        	this.dsIn.setColumn(nRow, "fromemail", this.dsMailContents.getColumn(0, "USER_EMAIL"));
        	this.dsIn.setColumn(nRow, "fromname", this.dsMailContents.getColumn(0, "USER_NAME"));

        	var subject = this.dsMailContents.getColumn(0, "MAIL_SUBJECT");
        	subject = subject.replace("@YYYY",y);
        	subject = subject.replace("@MM",m);
        	subject = subject.replace("@NAME", uname);
        	this.dsIn.setColumn(nRow, "subject", subject);

        	var contents = this.dsMailContents.getColumn(0, "MAIL_CONTENTS");
        	contents = contents.replace("@YYYY",y);
        	contents = contents.replace("@MM",m);
        	contents = contents.replace("@NAME", uname);
        	this.dsIn.setColumn(nRow, "contents", contents);

        	this.dsIn.setColumn(nRow, "fromemailpassword", pwd);

        	this.dsIn.setColumn(nRow, "YYYYMM", y+m);
        	this.dsIn.setColumn(nRow, "USER_ID", this.dsUserList.getColumn(nFindRow, "USER_ID"));

        	return true;
        };

        // 이메일발송
        this.btnAdd00_00_00_onclick = function(obj,e)
        {
        // 	var sPwd = nexacro.getPrivateProfile("salaryEmailPassword");
        // 	if(!sPwd) {
        // 		this.btnEmailInfo.click();
        // 		return;
        // 	}

        	var dt = this._tempdata.substr(0,7);	// "2023.08 주식회사 투비소프트씨앤에스 급여대장"
        	dt = dt.split(".");
        	var y = nexacro.toNumber(dt[0]);
        	var m = nexacro.toNumber(dt[1]);

        	this.dsIn.clearData();

        	this.ds00.set_enableevent(false);
        	for(var i=0;i<this.ds00.rowcount;i++) {
        		if(	this.ds00.getColumn(i, "CHK") == "1" ) {
        			var fname = y+"년"+dt[1]+"월_급여명세서_" + this.ds00.getColumn(i,"COL001");

        			var nRow = this.dsIn.addRow();
        			this.dsIn.setColumn(nRow, "fname", fname);
        			this.dsIn.setColumn(nRow, "resno", this.ds00.getColumn(i,"COL002").replace("-",""));
        			this.dsIn.setColumn(nRow, "html", this.gfnWritePDFLocal(y, m, this.ds00, i, fname, true));

        			var rtn = this.fn_SetEmailData(i, nRow, y, dt[1], "");
        			if(rtn == false) return;	//this.dsIn.deleteRow(nRow);

        			this.ds00.setColumn(i, "CHK", "0");
        			this.ds00.set_rowposition(i);
        			break;
        		}
        	}
        	this.ds00.set_enableevent(true);

        	if(this.dsIn.rowcount > 0) {
        		this.fnTranSendMail();
        	} else {
        		this.gfnAlert("msg.save.nochange");
        		return;
        	}
        };

        this.gfnWritePDFLocal = function(y, m, ds, idx, fname, bSave) {
        	//var s = "";
        	var s = '<html><body>';

        s += ' <table border="0" cellspacing="0" cellpadding="0" style="table-layout:fixed; border-collapse:collapse; width:700px;">';
        s += ' 	<tbody>';
        s += ' 		<tr style="line-height:30px;">';
        s += ' 			<td style="white-space:nowrap; border:none; width:95px">';
        s += ' 			<td style="white-space:nowrap; border:none; width:45px">';
        s += ' 			<td style="white-space:nowrap; border:none; width:124px">';
        s += ' 			<td style="white-space:nowrap; border:none; width:91px">';
        s += ' 			<td style="white-space:nowrap; border:none; width:89px">';
        s += ' 			<td style="white-space:nowrap; border:none; width:31px">';
        s += ' 			<td style="white-space:nowrap; border:none; width:12px">';
        s += ' 			<td style="white-space:nowrap; border:none; width:89px">';
        s += ' 			<td style="white-space:nowrap; border:none; width:124px">';
        s += ' 		</tr>	';
        s += ' 		<tr style="line-height:48px;">';
        s += ' 			<td colspan="9" style="text-align:center; border-bottom:none; border-left:none; border-right:none; border-top:none; vertical-align:middle;font-size:26.0pt; font-family:GulimChe; color:#000000; ">';

        var txt = y + "년 " + m + "월 급여명세서";
        s += '<strong>' + txt + '</strong>';
        s += '</td>';
        s += ' 		</tr>';
        s += ' 		<tr style="line-height:30px;">';
        s += ' 			<td colspan="9" style="border-bottom:none; border-left:none; border-right:none; border-top:none; vertical-align:middle;font-size:9pt;font-family:\'Malgun Gothic\';color:#000000">&nbsp;</td>';
        s += ' 		</tr>		';
        s += ' 		<tr style="line-height:30px;">';
        s += ' 			<td style="text-align:center; background-color:#dae3f3; border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px dotted #a0a0a0; border-top:1px solid #000000; vertical-align:bottom;font-size:9pt;font-family:\'Malgun Gothic\';color:#000000">';
        s += '부 서';
        s += '</td>';
        s += ' 			<td colspan="2" style="padding:0px 10px;border-bottom:1px solid #000000; border-left:1px dotted #a0a0a0; border-right:1px dotted #a0a0a0; border-top:1px solid #000000; vertical-align:middle;margin-left:5px; font-size:9pt;font-family:\'Malgun Gothic\';color:#000000">';
        s += '' + ds.getColumn(idx, "COL004") + '';
        s += '</td>';
        s += ' 			<td style="text-align:center; background-color:#dae3f3; border-bottom:1px solid #000000; border-left:1px dotted #a0a0a0; border-right:1px dotted #a0a0a0; border-top:1px solid #000000; vertical-align:middle;font-size:9pt;font-family:\'Malgun Gothic\';color:#000000"">';
        s += '직 책';
        s += '</td>';
        s += ' 			<td colspan="2" style="padding:0px 10px;border-bottom:1px solid #000000; border-left:1px dotted #a0a0a0; border-right:1px dotted #a0a0a0; border-top:1px solid #000000; vertical-align:middle;margin-left:5px; font-size:9pt;font-family:\'Malgun Gothic\';color:#000000">';
        s += '' + ds.getColumn(idx, "COL005") + '';
        s += '</td>';
        s += ' 			<td colspan="2" style="text-align:center; background-color:#dae3f3; border-bottom:1px solid #000000; border-left:1px dotted #a0a0a0; border-right:1px dotted #a0a0a0; border-top:1px solid #000000; vertical-align:middle;font-size:9pt;font-family:\'Malgun Gothic\';color:#000000">';
        s += '성 명';
        s += '</td>';
        s += ' 			<td style="padding:0px 10px;border-bottom:1px solid #000000; border-left:1px dotted #a0a0a0; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:middle;margin-left:5px; font-size:9pt;font-family:\'Malgun Gothic\';color:#000000"">';
        s += '' + ds.getColumn(idx, "COL001") + '';
        s += '</td>';
        s += ' 		</tr>';
        s += ' 		<tr style="line-height:24px;">';
        s += ' 			<td colspan="9" style="border-bottom:none; border-left:none; border-right:none; border-top:none; vertical-align:middle;font-size:9pt;font-family:\'Malgun Gothic\';color:#000000">';
        s += '&nbsp;';
        s += '</td>';
        s += ' 		</tr>';
        s += ' 		<tr style="line-height:24px;">';
        s += ' 			<td colspan="9" style="border-bottom:none; border-left:none; border-right:none; border-top:none; vertical-align:middle;font-size:9pt; font-family:\'Malgun Gothic\'; color:#000000;">';
        s += '<strong>○ 지급 및 공제내역</strong>';
        s += '</td>';
        s += ' 		</tr>';
        s += ' 		<tr style="line-height:30px;">';
        s += ' 			<td colspan="4" style="text-align:center; background-color:#dae3f3; border-bottom:1px dotted #a0a0a0; border-left:1px solid #000000; border-right:1px dotted #a0a0a0; border-top:1px solid #000000; vertical-align:middle;font-size:9pt;font-family:\'Malgun Gothic\';color:#000000">';
        s += '지 급 항 목';
        s += '</td>';
        s += ' 			<td colspan="5" style="text-align:center; background-color:#dae3f3; border-bottom:1px dotted #a0a0a0; border-left:1px dotted #a0a0a0; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:middle;font-size:9pt;font-family:\'Malgun Gothic\';color:#000000">';
        s += '공 제 항 목';
        s += '</td>';
        s += '</tr>';

        		s += this.gfnWritePDFContents(y, m, ds, idx, fname);

        s += ' 		<tr style="line-height:30px;">';
        s += ' 			<td colspan="2" style="text-align:center; background-color:#dae3f3; border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px dotted #a0a0a0; border-top:1px solid #a0a0a0; vertical-align:middle;font-size:9pt;font-family:\'Malgun Gothic\';color:#000000">';
        s += '지급합계';
        s += '</td>';
        s += ' 			<td colspan="2" style="padding:0px 10px;text-align:right; border-bottom:1px solid #000000; border-left:1px dotted #a0a0a0; border-right:1px dotted #a0a0a0; border-top:1px solid #a0a0a0; vertical-align:middle;margin-right:5px; font-size:9pt;font-family:\'Malgun Gothic\';color:#000000">';

        		var colid = this.salaryObj.intotal[this.objTitle.intotal.s].colname;
        		var sumin = ds.getColumn(idx, colid);
        		sumin = (nexacro.toNumber(sumin)).toLocaleString();

        s += '' + sumin + '';
        s += '</td>';
        s += ' 			<td colspan="3" style="text-align:center; background-color:#dae3f3; border-bottom:1px solid #000000; border-left:1px dotted #a0a0a0; border-right:1px dotted #a0a0a0; border-top:1px solid #a0a0a0; vertical-align:middle;font-size:9pt;font-family:\'Malgun Gothic\';color:#000000">';
        s += '공제합계';
        s += '</td>';
        s += ' 			<td colspan="2" style="padding:0px 10px;margin-right:5px; font-size:9pt;font-family:\'Malgun Gothic\';color:#000000;text-align:right; border-bottom:1px solid #000000; border-left:1px dotted #a0a0a0; border-right:1px solid #000000; border-top:1px solid #a0a0a0; vertical-align:middle;">';
        		colid = this.salaryObj.outtotal[this.objTitle.outtotal.s].colname;
        		var sumout = ds.getColumn(idx, colid);
        		sumout = (nexacro.toNumber(sumout)).toLocaleString();
        s += '' + sumout + '';
        s += '</td>';
        s += ' 		</tr>';
        s += ' 		<tr style="line-height:24px;">';
        s += ' 			<td colspan="9" style="padding:0px 10px;font-size:9pt;font-family:\'Malgun Gothic\';color:#000000;border-bottom:none; border-left:none; border-right:none; border-top:none; vertical-align:middle;">';
        s += '&nbsp;';
        s += '</td>';
        s += ' 		</tr>';
        s += ' 		<tr style="line-height:24px;">';
        s += ' 			<td colspan="9" style="font-size:9pt;font-family:\'Malgun Gothic\';color:#000000;border-bottom:none; border-left:none; border-right:none; border-top:none; vertical-align:middle;">';
        s += '<strong>○ 종합내역</strong>';
        s += '</td>';
        s += ' 		</tr>';
        s += ' 		<tr style="line-height:30px;">';
        s += ' 			<td colspan="2" style="font-size:9pt;font-family:\'Malgun Gothic\';color:#000000;text-align:center; background-color:#dae3f3; border-bottom:1px dotted #a0a0a0; border-left:1px solid #000000; border-right:1px dotted #a0a0a0; border-top:1px solid #000000; vertical-align:middle;">';
        s += '총 액';
        s += '</td>';
        s += ' 			<td colspan="2" style="padding:0px 10px; font-size:9pt;font-family:\'Malgun Gothic\';color:#000000;text-align:right; border-bottom:1px dotted #a0a0a0; border-left:1px dotted #a0a0a0; border-right:1px dotted #a0a0a0; border-top:1px solid #000000; vertical-align:middle;">';
        s += '' + sumin + '';
        s += '</td>';
        s += ' 			<td colspan="5" style="font-size:9pt;font-family:\'Malgun Gothic\';color:#000000;border-bottom:1px dotted #a0a0a0; border-left:1px dotted #a0a0a0; border-right:1px solid #000000; border-top:1px solid #000000; vertical-align:middle; width:345px">';
        s += '원';
        s += '</td>';
        s += ' 		</tr>';
        s += ' 		<tr style="line-height:30px;">';
        s += ' 			<td colspan="2" style="font-size:9pt;font-family:\'Malgun Gothic\';color:#000000;text-align:center; background-color:#dae3f3; border-bottom:1px dotted #a0a0a0; border-left:1px solid #000000; border-right:1px dotted #a0a0a0; border-top:1px dotted #a0a0a0; vertical-align:middle;">';
        s += '공제총액';
        s += '</td>';
        s += ' 			<td colspan="2" style="padding:0px 10px;font-size:9pt;font-family:\'Malgun Gothic\';color:#000000;text-align:right; border-bottom:1px dotted #a0a0a0; border-left:1px dotted #a0a0a0; border-right:1px dotted #a0a0a0; border-top:1px dotted #a0a0a0; vertical-align:middle;">';
        s += '' + sumout + '';
        s += ' 			</td>';
        s += ' 			<td colspan="5" style="font-size:9pt;font-family:\'Malgun Gothic\';color:#000000;border-bottom:1px dotted #000000; border-left:1px dotted #a0a0a0; border-right:1px solid #000000; border-top:1px dotted #a0a0a0; vertical-align:middle; width:345px">';
        s += '원';
        s += '</td>';
        s += ' 		</tr>';
        s += ' 		<tr style="line-height:30px;">';
        s += ' 			<td colspan="2" style="font-size:9pt;font-family:\'Malgun Gothic\';color:#000000;text-align:center; background-color:#dae3f3; border-bottom:1px solid #000000; border-left:1px solid #000000; border-right:1px dotted #a0a0a0; border-top:1px dotted #a0a0a0; vertical-align:middle;">';
        s += '실수령액';
        s += '</td>';
        s += ' 			<td colspan="2" style="padding:0px 10px;font-size:9pt;font-family:\'Malgun Gothic\';color:#000000;text-align:right; border-bottom:1px solid #000000; border-left:1px dotted #a0a0a0; border-right:1px dotted #a0a0a0; border-top:1px dotted #a0a0a0; vertical-align:middle;">';
        		colid = this.salaryObj.total[this.objTitle.total.s].colname;
        		var sumtot = ds.getColumn(idx, colid);
        		sumtot = (nexacro.toNumber(sumtot)).toLocaleString();
        s += ''+sumtot + '';
        s += '</td>';
        s += ' 			<td colspan="5" style="font-size:9pt;font-family:\'Malgun Gothic\';color:#000000;border-bottom:1px solid #000000; border-left:1px dotted #a0a0a0; border-right:1px solid #000000; border-top:1px dotted #a0a0a0; vertical-align:middle; width:345px">';

        s += '원';
        s += '</td>';
        s += ' 		</tr>';
        s += ' 		<tr style="line-height:30px;">';
        s += ' 			<td colspan="9" style="font-size:9pt;font-family:\'Malgun Gothic\';color:#000000;border-bottom:none; border-left:none; border-right:none; border-top:none; vertical-align:middle;">';
        s += '&nbsp;';
        s += '</td>';
        s += ' 		</tr>';
        s += ' 		<tr style="line-height:19px;">';
        s += ' 			<td colspan="9" style="font-size:9pt;font-family:\'Malgun Gothic\';color:#000000;border-bottom:none; border-left:none; border-right:none; border-top:none; vertical-align:middle;">';
        s += '&nbsp;';
        s += '</td>';
        s += ' 		</tr>';
        s += ' 		<tr style="line-height:19px;">';
        s += ' 			<td colspan="9" style="font-size:9pt;font-family:\'Malgun Gothic\';color:#000000;text-align:center; border-bottom:none; border-left:none; border-right:none; border-top:none; vertical-align:middle;">';
        s += '귀하의 노고에 감사 드립니다.';
        s += '</td>';
        s += ' 		</tr>';
        s += ' 		<tr style="line-height:19px;">';
        s += ' 			<td colspan="9" style="font-size:9pt;font-family:\'Malgun Gothic\';color:#000000;border-bottom:none; border-left:none; border-right:none; border-top:none; vertical-align:middle;">';
        s += '&nbsp;';
        s += '</td>';
        s += ' 		</tr>';
        s += ' 		<tr style="line-height:19px;">';
        s += ' 			<td colspan="9" style="font-size:9pt;font-family:\'Malgun Gothic\';color:#000000;border-bottom:none; border-left:none; border-right:none; border-top:none; vertical-align:middle;">';
        s += '&nbsp;';
        s += '</td>';
        s += ' 		</tr>';
        s += ' 		<tr style="line-height:19px;">';
        s += ' 			<td colspan="9" style="font-size:9pt;font-family:\'Malgun Gothic\';color:#000000;text-align:center; border-bottom:none; border-left:none; border-right:none; border-top:none; vertical-align:middle;">';
        	var dt = new Date();
        	var y1 = dt.getFullYear()+"";
        	var m1 = (dt.getMonth()+1)+"";
        	var d1 = dt.getDate()+"";
        	var vvv = y1 + "년 " + m1 + "월 " + d1 + "일" ;
        s += ''+vvv+'';
        s += '</td>';
        s += ' 		</tr>';
        s += ' 		<tr style="line-height:19px;">';
        s += ' 			<td colspan="9" style="font-size:9pt;font-family:\'Malgun Gothic\';color:#000000;border-bottom:none; border-left:none; border-right:none; border-top:none; vertical-align:middle;">';
        s += '&nbsp;';
        s += '</td>';
        s += ' 		</tr>';
        s += ' 		<tr style="line-height:19px;">';
        s += ' 			<td colspan="9" style="font-size:9pt;font-family:\'Malgun Gothic\';color:#000000;border-bottom:none; border-left:none; border-right:none; border-top:none; vertical-align:middle;">';
        s += '&nbsp;';
        s += '</td>';
        s += ' 		</tr>';
        s += ' 		<tr style="line-height:29px;">';
        s += ' 			<td colspan="9" style="font-size:14.0pt;font-family:\'Malgun Gothic\';color:#000000;text-align:center; border-bottom:none; border-left:none; border-right:none; border-top:none; vertical-align:middle;">';
        s += '<strong>주식회사 디엑스투비</strong>';
        s += '</td>';
        s += ' 		</tr>';
        s += ' 	</tbody>';
        s += ' </table>';
        s += ' ';

        s += '</body></html>';

        	if(bSave) return s;

        	this.dsIn.setColumn(0, "html", s);

        	this.fdtFile.clearPostDataList();
        	this.fdtFile.setPostData("html"	, this.dsIn.getColumn(0, "html"));
        	this.fdtFile.setPostData("fname", this.dsIn.getColumn(0, "fname"));
        	this.fdtFile.setPostData("dpath", this.dsIn.getColumn(0, "dpath"));
        	this.fdtFile.setPostData("enc", this.dsIn.getColumn(0, "enc"));
        	this.fdtFile.setPostData("resno", this.dsIn.getColumn(0, "resno"));

        	this.fdtFile.set_downloadfilename(fname+".pdf");
        	this.fdtFile.download("svcUrl::pdfSalaryDownload.do");

        	this.fvPDFindex++;
        	this.btnAdd00_00.click();

        	return;


        	//this.transaction("aaa", "svcUrl::makePdf.jsp","dsIn=dsIn", "","","cb", false);
        	return;
        	window.jsPDF = window.jspdf.jsPDF;

        	var a4 = [595.28, 841.89]; // for a4 size paper width and height
        	this.sta01.set_width(720);
        	var div = this.sta01._control_element.handle;
        	div.innerHTML = s;


        	var pThis = this;

            function getCanvas(form) {
        		form.style.width = 720;	//(a4[0] * 1.33333) - 80;
                //form.width((a4[0] * 1.33333) - 80).css('max-width', 'none');
                return html2canvas(form, {
                    imageTimeout: 2000,
                    removeContainer: true
                });
            }

        	getCanvas(div).then(function (canvas) {
        		var img = canvas.toDataURL("image/jpeg"),
        		 doc = new jsPDF({
        			 unit: 'px',
        			 format: 'a4'
        		 });

        		doc.addFileToVFS('malgun.ttf', pThis.PDF_fonts);  //_fonts 변수는 Base64 형태로 변환된 내용입니다.
        		doc.addFont('malgun.ttf','malgun', 'normal');
        		doc.setFont('malgun');
        		doc.addImage(img, 'JPEG', 20, 20);
        		doc.save('tech-html-to-pdf.pdf');
        	});
        	return;

        	window.jsPDF = window.jspdf.jsPDF;
        console.log(div);
        	var doc = new jsPDF("p", "mm", "a4");


        	doc.html(div, {
        		callback: function(doc) {
        			console.log(">>>>>>>>>>>>>>>");
        			doc.save('sample-document.pdf');
        		},
        		x: 15,
        		y: 15,
        		width: 100, //target width in the PDF document
        		windowWidth: 300 //window width in CSS pixels
        	});
        };

        this.gfnWritePDFContents = function(y, m, ds, idx, fname) {
        	var arrInData = [];
        	var s = "";
        	var arrCnt = -1;
        	for(var i=23;i<=this.objTitle.in2.e;i++) {
        		arrCnt++;
        		var colid = this.salaryObj.indata[i].colname;
        		var val = ds.getColumn(idx, colid);
        		if(!val || val == "") continue;
        		val = nexacro.toNumber(val);
        		val = nexacro.toNumber(val.toFixed(0));
        		if(val == 0) continue;
        		arrInData.push({"t" : this.salaryObj.indata[i].txt, "v" : val});
        	}

        	var arrOutData = [];
        	arrCnt = -1;
        	for(var i=this.objTitle.out.s;i<=this.objTitle.out.e;i++) {
        		arrCnt++;
        		var colid = this.salaryObj.outdata[i].colname;
        		var val = ds.getColumn(idx, colid);
        		if(!val || val == "") continue;
        		val = nexacro.toNumber(val);
        		val = nexacro.toNumber(val.toFixed(0));
        		if(val == 0) continue;
        		arrOutData.push({"t" : this.salaryObj.outdata[i].txt, "v" : val});
        	}

        	for(var i=0;i<12;i++) {
        		var inData = "&nbsp;", outData = "&nbsp;", inCon = "&nbsp;", outCon = "&nbsp;";
        		if(arrInData[i]) {
        			inCon = arrInData[i].t;
        			inData = (arrInData[i].v).toLocaleString();
        		}
        		if(arrOutData[i]) {
        			outCon = arrOutData[i].t;
        			outData = (arrOutData[i].v).toLocaleString();
        		}
        		if(i==0) {
        			s += ' 		<tr style="line-height:30px;">';
        			s += ' 			<td colspan="2" style="font-size:9pt;font-family:\'Malgun Gothic\';color:#000000;text-align:center; background-color:#dae3f3; border-bottom:1px dotted #a0a0a0; border-left:1px solid #000000; border-right:1px dotted #a0a0a0; border-top:1px dotted #a0a0a0; vertical-align:middle;">';
        			s += '' + inCon + '';
        			s += '</td>';
        			s += ' 			<td colspan="2" style="padding:0px 10px; margin-right:5px; font-size:9pt;font-family:\'Malgun Gothic\';color:#000000;text-align:right; border-bottom:1px dotted #a0a0a0; border-left:1px dotted #a0a0a0; border-right:1px dotted #a0a0a0; border-top:1px dotted #a0a0a0; vertical-align:middle;">';
        			s += '' + inData + '';
        			s += '</td>';
        			s += ' 			<td colspan="3" style="font-size:9pt;font-family:\'Malgun Gothic\';color:#000000; text-align:center; background-color:#dae3f3; border-bottom:1px dotted #a0a0a0; border-left:1px solid #a0a0a0; border-right:1px dotted #a0a0a0; border-top:1px dotted #a0a0a0; vertical-align:middle;">';
        			s += '' + outCon + '';
        			s += '</td>';
        			s += ' 			<td colspan="2" style="padding:0px 10px; margin-right:5px; font-size:9pt;font-family:\'Malgun Gothic\';color:#000000; text-align:right; border-bottom:1px dotted #a0a0a0; border-left:1px dotted #a0a0a0; border-right:1px solid #000000; border-top:1px dotted #a0a0a0; vertical-align:middle;">';
        			s += '' + outData + '';
        			s += '</td>';
        			s += ' 		</tr>';
        		} else if(i==11) {
        			s += ' 		<tr style="line-height:30px;">';
        			s += ' 			<td colspan="2" style="font-size:9pt;font-family:\'Malgun Gothic\';color:#000000; text-align:center; background-color:#dae3f3; border-bottom:1px dotted #a0a0a0; border-left:1px solid #000000; border-right:1px dotted #a0a0a0; border-top:1px dotted #a0a0a0; vertical-align:middle;">';
        			s += '' + inCon + '';
        			s += '</td>';
        			s += ' 			<td colspan="2" style="padding:0px 10px; font-size:9pt;font-family:\'Malgun Gothic\';color:#000000; text-align:right; border-bottom:1px dotted #a0a0a0; border-left:1px dotted #a0a0a0; border-right:1px dotted #a0a0a0; border-top:1px dotted #a0a0a0; vertical-align:middle;">';
        			s += '' + inData + '';
        			s += '</td>';
        			s += ' 			<td colspan="3" style="font-size:9pt;font-family:\'Malgun Gothic\';color:#000000; text-align:center; background-color:#dae3f3; border-bottom:1px dotted #a0a0a0; border-left:1px solid #a0a0a0; border-right:1px dotted #a0a0a0; border-top:1px dotted #a0a0a0; vertical-align:middle;">';
        			s += '' + outCon + '';
        			s += '</td>';
        			s += ' 			<td colspan="2" style="padding:0px 10px; font-size:9pt;font-family:\'Malgun Gothic\';color:#000000; text-align:right; border-bottom:1px dotted #a0a0a0; border-left:1px dotted #a0a0a0; border-right:1px solid #000000; border-top:1px dotted #a0a0a0; vertical-align:middle;">';
        			s += '' + outData + '';
        			s += '</td>';
        			s += ' 		</tr>';
        		} else {
        			s += ' 		<tr style="line-height:30px;">';
        			s += ' 			<td colspan="2" style="font-size:9pt;font-family:\'Malgun Gothic\';color:#000000; text-align:center; background-color:#dae3f3; border-bottom:1px dotted #a0a0a0; border-left:1px solid #000000; border-right:1px dotted #a0a0a0; border-top:1px dotted #a0a0a0; vertical-align:middle;">';
        			s += '' + inCon + '';
        			s += '</td>';
        			s += ' 			<td colspan="2" style="padding:0px 10px; font-size:9pt;font-family:\'Malgun Gothic\';color:#000000; text-align:right; border-bottom:1px dotted #a0a0a0; border-left:1px dotted #a0a0a0; border-right:1px dotted #a0a0a0; border-top:1px dotted #a0a0a0; vertical-align:middle;">';
        			s += '' + inData + '';
        			s += '</td>';
        			s += ' 			<td colspan="3" style="font-size:9pt;font-family:\'Malgun Gothic\';color:#000000; text-align:center; background-color:#dae3f3; border-bottom:1px dotted #a0a0a0; border-left:1px solid #a0a0a0; border-right:1px dotted #a0a0a0; border-top:1px dotted #a0a0a0; vertical-align:middle;">';
        			s += '' + outCon + '';
        			s += '</td>';
        			s += ' 			<td colspan="2" style="padding:0px 10px; font-size:9pt;font-family:\'Malgun Gothic\';color:#000000; text-align:right; border-bottom:1px dotted #a0a0a0; border-left:1px dotted #a0a0a0; border-right:1px solid #000000; border-top:1px dotted #a0a0a0; vertical-align:middle;">';
        			s += '' + outData + '';
        			s += '</td>';
        			s += ' 		</tr>';
        		}
        	}

        	return s;

        }

        this.gfnWriteExcelLocal = function(y, m, ds, idx, fname) {

        	var ws = {};
        	var wInfo= [];
        	var mo = 0.75;
        	// https://github.com/gitbrent/xlsx-js-style/blob/master/README.md
        	// https://github.com/arnaud-lb/js-xlsx
        	//https://gitbrent.github.io/xlsx-js-style/
        	var range = {	s: {c:0, r:0 },
        					e: {c:9, r:34 }
        				};
        				// wpx wch
        	wInfo[0] = { wpx : Math.round(29*mo) };
        	wInfo[1] = { wpx : Math.round(89*mo) };
        	wInfo[2] = { wpx : Math.round(45*mo) };
        	wInfo[3] = { wpx : Math.round(124*mo) };
        	wInfo[4] = { wpx : Math.round(91*mo) };
        	wInfo[5] = { wpx : Math.round(89*mo) };
        	wInfo[6] = { wpx : Math.round(31*mo) };
        	wInfo[7] = { wpx : Math.round(12*mo) };
        	wInfo[8] = { wpx : Math.round(89*mo) };
        	wInfo[9] = { wpx : Math.round(124*mo) };

        	var hInfo = [];
        	hInfo[0] = { hpx : Math.round(24*mo) };
        	hInfo[1] = { hpx : Math.round(24*mo) };
        	hInfo[2] = { hpx : Math.round(24*mo) };
        	hInfo[3] = { hpx : Math.round(24*mo) };
        	// 부서
        	hInfo[4] = { hpx : Math.round(30*mo) };
        	// 지급 및 공제내역
        	hInfo[5] = { hpx : Math.round(24*mo) };
        	hInfo[6] = { hpx : Math.round(24*mo) };
        	// 지급 내용
        	hInfo[7] = { hpx : Math.round(30*mo) };
        	hInfo[8] = { hpx : Math.round(30*mo) };
        	hInfo[9] = { hpx : Math.round(30*mo) };
        	hInfo[10] = { hpx : Math.round(30*mo) };
        	hInfo[11] = { hpx : Math.round(30*mo) };
        	hInfo[12] = { hpx : Math.round(30*mo) };
        	hInfo[13] = { hpx : Math.round(30*mo) };
        	hInfo[14] = { hpx : Math.round(30*mo) };
        	hInfo[15] = { hpx : Math.round(30*mo) };
        	hInfo[16] = { hpx : Math.round(30*mo) };
        	hInfo[17] = { hpx : Math.round(30*mo) };
        	hInfo[18] = { hpx : Math.round(30*mo) };
        	hInfo[19] = { hpx : Math.round(30*mo) };
        	hInfo[20] = { hpx : Math.round(30*mo) };
        	// 종합
        	hInfo[21] = { hpx : Math.round(24*mo) };
        	hInfo[22] = { hpx : Math.round(24*mo) };

        	// 종합내역
        	hInfo[23] = { hpx : Math.round(30*mo) };
        	hInfo[24] = { hpx : Math.round(30*mo) };
        	hInfo[25] = { hpx : Math.round(30*mo) };
        	//
        	hInfo[26] = { hpx : Math.round(30*mo) };
        	hInfo[27] = { hpx : Math.round(19*mo) };
        	hInfo[28] = { hpx : Math.round(19*mo) };

        	//
        	hInfo[29] = { hpx : Math.round(19*mo) };
        	hInfo[30] = { hpx : Math.round(19*mo) };
        	// 날짜
        	hInfo[31] = { hpx : Math.round(19*mo) };

        	hInfo[32] = { hpx : Math.round(19*mo) };
        	hInfo[33] = { hpx : Math.round(19*mo) };

        	hInfo[34] = { hpx : Math.round(30*mo) };

        	var mInfo = [];
        	mInfo.push({s: {c: 1, r: 1}, e: {c: 9, r: 2}});
        	//---------------------------------------------------
        	// title
        	//---------------------------------------------------
        	var cell_ref = XLSX.utils.encode_cell(	{	c : 1,
        												r : 1});
        	var fs = 26;
        	var oStyle = {};
        	oStyle.alignment = {};
        	oStyle.alignment.horizontal = "center";
        	oStyle.alignment.vertical = "center";

        	oStyle.fill = {};
        	oStyle.fill.patternType = "solid";
        	oStyle.fill.fgColor = {};
        	oStyle.fill.fgColor.rgb = "ffffff";

        	oStyle.font = {};
        	oStyle.font.color = {};
        	oStyle.font.color.rgb = "000000";
        	oStyle.font.name = "GulimChe";	//"Malgun Gothic";
        	oStyle.font.sz = fs;	//parseInt(fs * 72 / 96);
        	oStyle.font.bold = true;

        	oStyle.border = {};
        	oStyle.border.left = { style: null, color: { rgb: "ffffff" } };
        	oStyle.border.right = oStyle.border.bottom = oStyle.border.top = oStyle.border.left;

        	var txt = y + "년 " + m + "월 급여명세서";
        	ws[cell_ref] = 	{
        						v : txt ,
        						t : "s" ,
        						s : oStyle,
        					};

        	//---------------------------------------------------
        	// 부서
        	//---------------------------------------------------
        	var cell_ref = XLSX.utils.encode_cell(	{	c : 1,
        												r : 4});
        	fs = 9;
        	var oStyle = {};
        	oStyle.alignment = {};
        	oStyle.alignment.horizontal = "center";
        	oStyle.alignment.vertical = "center";

        	oStyle.fill = {};
        	oStyle.fill.patternType = "solid";
        	oStyle.fill.fgColor = {};
        	oStyle.fill.fgColor.rgb = "dae3f3";

        	oStyle.font = {};
        	oStyle.font.color = {};
        	oStyle.font.color.rgb = "000000";
        	oStyle.font.name = "Malgun Gothic";
        	oStyle.font.sz = fs;	//parseInt(fs * 72 / 96);
        	oStyle.font.bold = false;

        	oStyle.border = {};
        	oStyle.border.left = { style: "thin", color: { rgb: "000000" } };
        	oStyle.border.bottom = oStyle.border.top = oStyle.border.left;
        	oStyle.border.right = { style: "dotted", color: { rgb: "cccccc" } };
        	ws[cell_ref] = 	{
        						v : "부    서" ,
        						t : "s" ,
        						s : oStyle,
        					};
        	//---------------------------------------------------
        	// 부서데이터
        	//---------------------------------------------------
        	mInfo.push({s: {c: 2, r: 4}, e: {c: 3, r: 4}});
        	var cell_ref = XLSX.utils.encode_cell(	{	c : 2,
        												r : 4});
        	fs = 9;
        	var oStyle = {};
        	oStyle.alignment = {};
        	oStyle.alignment.horizontal = "left";
        	oStyle.alignment.vertical = "center";

        	oStyle.fill = {};
        	oStyle.fill.patternType = "none";
        	oStyle.fill.fgColor = {};
        	oStyle.fill.fgColor.rgb = "ffffff";

        	oStyle.font = {};
        	oStyle.font.color = {};
        	oStyle.font.color.rgb = "000000";
        	oStyle.font.name = "Malgun Gothic";
        	oStyle.font.sz = fs;	//parseInt(fs * 72 / 96);
        	oStyle.font.bold = false;

        	oStyle.border = {};
        	oStyle.border.bottom = oStyle.border.top = { style: "thin", color: { rgb: "000000" } };
        	oStyle.border.left = oStyle.border.right = { style: "dotted", color: { rgb: "cccccc" } };
        	ws[cell_ref] = 	{
        						v : ds.getColumn(idx, "COL004") ,
        						t : "s" ,
        						s : oStyle,
        					};
        	var cell_ref = XLSX.utils.encode_cell(	{	c : 3,
        												r : 4});
        	ws[cell_ref] = 	{
        						v : "" ,
        						t : "s" ,
        						s : oStyle,
        					};
        	//---------------------------------------------------
        	// 직책
        	//---------------------------------------------------
        	var cell_ref = XLSX.utils.encode_cell(	{	c : 4,
        												r : 4});
        	fs = 9;
        	var oStyle = {};
        	oStyle.alignment = {};
        	oStyle.alignment.horizontal = "center";
        	oStyle.alignment.vertical = "center";

        	oStyle.fill = {};
        	oStyle.fill.patternType = "solid";
        	oStyle.fill.fgColor = {};
        	oStyle.fill.fgColor.rgb = "dae3f3";

        	oStyle.font = {};
        	oStyle.font.color = {};
        	oStyle.font.color.rgb = "000000";
        	oStyle.font.name = "Malgun Gothic";
        	oStyle.font.sz = fs;	//parseInt(fs * 72 / 96);
        	oStyle.font.bold = false;

        	oStyle.border = {};
        	oStyle.border.top = oStyle.border.bottom = { style: "thin", color: { rgb: "000000" } };
        	oStyle.border.left = oStyle.border.right = { style: "dotted", color: { rgb: "cccccc" } };
        	ws[cell_ref] = 	{
        						v : "직    책" ,
        						t : "s" ,
        						s : oStyle,
        					};
        	//---------------------------------------------------
        	// 직책데이터
        	//---------------------------------------------------
        	mInfo.push({s: {c: 5, r: 4}, e: {c: 6, r: 4}});
        	var cell_ref = XLSX.utils.encode_cell(	{	c : 5,
        												r : 4});
        	fs = 9;
        	var oStyle = {};
        	oStyle.alignment = {};
        	oStyle.alignment.horizontal = "left";
        	oStyle.alignment.vertical = "center";

        	oStyle.fill = {};
        	oStyle.fill.patternType = "none";
        	oStyle.fill.fgColor = {};
        	oStyle.fill.fgColor.rgb = "ffffff";

        	oStyle.font = {};
        	oStyle.font.color = {};
        	oStyle.font.color.rgb = "000000";
        	oStyle.font.name = "Malgun Gothic";
        	oStyle.font.sz = fs;	//parseInt(fs * 72 / 96);
        	oStyle.font.bold = false;

        	oStyle.border = {};
        	oStyle.border.bottom = oStyle.border.top = { style: "thin", color: { rgb: "000000" } };
        	oStyle.border.left = oStyle.border.right = { style: "dotted", color: { rgb: "cccccc" } };
        	ws[cell_ref] = 	{
        						v : ds.getColumn(idx, "COL005") ,
        						t : "s" ,
        						s : oStyle,
        					};
        	var cell_ref = XLSX.utils.encode_cell(	{	c : 6,
        												r : 4});
        	ws[cell_ref] = 	{
        						v : "" ,
        						t : "s" ,
        						s : oStyle,
        					};
        	//---------------------------------------------------
        	// 성명
        	//---------------------------------------------------
        	mInfo.push({s: {c: 7, r: 4}, e: {c: 8, r: 4}});
        	var cell_ref = XLSX.utils.encode_cell(	{	c : 7,
        												r : 4});
        	fs = 9;
        	var oStyle = {};
        	oStyle.alignment = {};
        	oStyle.alignment.horizontal = "center";
        	oStyle.alignment.vertical = "center";

        	oStyle.fill = {};
        	oStyle.fill.patternType = "solid";
        	oStyle.fill.fgColor = {};
        	oStyle.fill.fgColor.rgb = "dae3f3";

        	oStyle.font = {};
        	oStyle.font.color = {};
        	oStyle.font.color.rgb = "000000";
        	oStyle.font.name = "Malgun Gothic";
        	oStyle.font.sz = fs;	//parseInt(fs * 72 / 96);
        	oStyle.font.bold = false;

        	oStyle.border = {};
        	oStyle.border.top = oStyle.border.bottom = { style: "thin", color: { rgb: "000000" } };
        	oStyle.border.left = oStyle.border.right = { style: "dotted", color: { rgb: "cccccc" } };
        	ws[cell_ref] = 	{
        						v : "성    명" ,
        						t : "s" ,
        						s : oStyle,
        					};
        	var cell_ref = XLSX.utils.encode_cell(	{	c : 8,
        												r : 4});
        	ws[cell_ref] = 	{
        						v : "" ,
        						t : "s" ,
        						s : oStyle,
        					};
        	//---------------------------------------------------
        	// 성명데이터
        	//---------------------------------------------------
        	var cell_ref = XLSX.utils.encode_cell(	{	c : 9,
        												r : 4});
        	fs = 9;
        	var oStyle = {};
        	oStyle.alignment = {};
        	oStyle.alignment.horizontal = "left";
        	oStyle.alignment.vertical = "center";

        	oStyle.fill = {};
        	oStyle.fill.patternType = "none";
        	oStyle.fill.fgColor = {};
        	oStyle.fill.fgColor.rgb = "ffffff";

        	oStyle.font = {};
        	oStyle.font.color = {};
        	oStyle.font.color.rgb = "000000";
        	oStyle.font.name = "Malgun Gothic";
        	oStyle.font.sz = fs;	//parseInt(fs * 72 / 96);
        	oStyle.font.bold = false;

        	oStyle.border = {};
        	oStyle.border.right = oStyle.border.bottom = oStyle.border.top = { style: "thin", color: { rgb: "000000" } };
        	oStyle.border.left = { style: "dotted", color: { rgb: "cccccc" } };
        	ws[cell_ref] = 	{
        						v : ds.getColumn(idx, "COL001") ,
        						t : "s" ,
        						s : oStyle,
        					};



        	//---------------------------------------------------
        	// ○ 지급 및 공제내역
        	//---------------------------------------------------
        	mInfo.push({s: {c: 1, r: 6}, e: {c: 9, r: 6}});
        	var cell_ref = XLSX.utils.encode_cell(	{	c : 1,
        												r : 6});
        	fs = 9;
        	var oStyle = {};
        	oStyle.alignment = {};
        	oStyle.alignment.horizontal = "left";
        	oStyle.alignment.vertical = "center";

        	oStyle.fill = {};
        	oStyle.fill.patternType = "none";
        	oStyle.fill.fgColor = {};
        	oStyle.fill.fgColor.rgb = "ffffff";

        	oStyle.font = {};
        	oStyle.font.color = {};
        	oStyle.font.color.rgb = "000000";
        	oStyle.font.name = "Malgun Gothic";
        	oStyle.font.sz = fs;	//parseInt(fs * 72 / 96);
        	oStyle.font.bold = true;

        	oStyle.border = {};
        	ws[cell_ref] = 	{
        						v : "○ 지급 및 공제내역" ,
        						t : "s" ,
        						s : oStyle,
        					};

        	//---------------------------------------------------
        	// 지급 및 공제내역 타이틀
        	//---------------------------------------------------
        	mInfo.push({s: {c: 1, r: 7}, e: {c: 4, r: 7}});
        	var cell_ref = XLSX.utils.encode_cell(	{	c : 1,
        												r : 7});
        	fs = 9;
        	var oStyle = {};
        	oStyle.alignment = {};
        	oStyle.alignment.horizontal = "center";
        	oStyle.alignment.vertical = "center";

        	oStyle.fill = {};
        	oStyle.fill.patternType = "solid";
        	oStyle.fill.fgColor = {};
        	oStyle.fill.fgColor.rgb = "dae3f3";

        	oStyle.font = {};
        	oStyle.font.color = {};
        	oStyle.font.color.rgb = "000000";
        	oStyle.font.name = "Malgun Gothic";
        	oStyle.font.sz = fs;	//parseInt(fs * 72 / 96);
        	oStyle.font.bold = false;

        	oStyle.border = {};
        	oStyle.border.top = oStyle.border.left = { style: "thin", color: { rgb: "000000" } };
        	oStyle.border.bottom = oStyle.border.right = { style: "dotted", color: { rgb: "cccccc" } };

        	ws[cell_ref] = 	{
        						v : "지 급 항 목" ,
        						t : "s" ,
        						s : oStyle,
        					};
        	var cell_ref = XLSX.utils.encode_cell(	{	c : 2,
        												r : 7});
        	ws[cell_ref] = 	{
        						v : "" ,
        						t : "s" ,
        						s : oStyle,
        					};
        	var cell_ref = XLSX.utils.encode_cell(	{	c : 3,
        												r : 7});
        	ws[cell_ref] = 	{
        						v : "" ,
        						t : "s" ,
        						s : oStyle,
        					};
        	var cell_ref = XLSX.utils.encode_cell(	{	c : 4,
        												r : 7});
        	ws[cell_ref] = 	{
        						v : "" ,
        						t : "s" ,
        						s : oStyle,
        					};

        	//---------------------------------------------------
        	// 지급 및 공제내역 타이틀
        	//---------------------------------------------------
        	mInfo.push({s: {c: 5, r: 7}, e: {c: 9, r: 7}});
        	var cell_ref = XLSX.utils.encode_cell(	{	c : 5,
        												r : 7});
        	fs = 9;
        	var oStyle = {};
        	oStyle.alignment = {};
        	oStyle.alignment.horizontal = "center";
        	oStyle.alignment.vertical = "center";

        	oStyle.fill = {};
        	oStyle.fill.patternType = "solid";
        	oStyle.fill.fgColor = {};
        	oStyle.fill.fgColor.rgb = "dae3f3";

        	oStyle.font = {};
        	oStyle.font.color = {};
        	oStyle.font.color.rgb = "000000";
        	oStyle.font.name = "Malgun Gothic";
        	oStyle.font.sz = fs;	//parseInt(fs * 72 / 96);
        	oStyle.font.bold = false;

        	oStyle.border = {};
        	oStyle.border.top = oStyle.border.right = { style: "thin", color: { rgb: "000000" } };
        	oStyle.border.bottom = oStyle.border.left = { style: "dotted", color: { rgb: "cccccc" } };

        	ws[cell_ref] = 	{
        						v : "공 제 항 목" ,
        						t : "s" ,
        						s : oStyle,
        					};
        	var cell_ref = XLSX.utils.encode_cell(	{	c : 6,
        												r : 7});
        	ws[cell_ref] = 	{
        						v : "" ,
        						t : "s" ,
        						s : oStyle,
        					};
        	var cell_ref = XLSX.utils.encode_cell(	{	c : 7,
        												r : 7});
        	ws[cell_ref] = 	{
        						v : "" ,
        						t : "s" ,
        						s : oStyle,
        					};
        	var cell_ref = XLSX.utils.encode_cell(	{	c : 8,
        												r : 7});
        	ws[cell_ref] = 	{
        						v : "" ,
        						t : "s" ,
        						s : oStyle,
        					};
        	var cell_ref = XLSX.utils.encode_cell(	{	c : 9,
        												r : 7});
        	ws[cell_ref] = 	{
        						v : "" ,
        						t : "s" ,
        						s : oStyle,
        					};

        	// data
        	ws = this.gfnWriteExcelInData(mInfo, ws, ds, idx);
        	ws = this.gfnWriteExcelOutData(mInfo, ws, ds, idx);
        	ws = this.gfnWriteTotalData(mInfo, ws, ds, idx);
        	ws = this.gfnWriteFooter(mInfo, ws, ds, idx);

        	ws['!cols'] = wInfo;
        	ws['!rows'] = hInfo;
        	ws['!merges'] = mInfo;
        	//ws["!margins"]={left:0.7, right:0.7, top:0.75,bottom:0.75,header:0.3,footer:0.3};

        	ws['!ref'] = XLSX.utils.encode_range(range);

        	var Workbook = {
        						SheetNames: [],
        						Sheets: {}
        					};
        	console.log(ws);
        	Workbook.SheetNames[0] = "Sheet0";
        	Workbook.Sheets["Sheet0"] = ws;
        	var extentionname = "xlsx";
        	var xlsfilename = fname + ds.getColumn(idx, "COL001");
        	var wbout = XLSX.write(Workbook, {bookType:extentionname, bookSST:false, cellNF:true, cellStyles:true, type: 'binary', compression : true });
        	var FilUtil = nexacro.FileUtil;

        	FilUtil.save(wbout, extentionname, xlsfilename);

        };

        this.gfnWriteFooter = function(mInfo, ws) {
        	//---------------------------------------------------
        	// 감사
        	//---------------------------------------------------
        	var nRow = 28;
        	mInfo.push({s: {c: 1, r: nRow}, e: {c: 9, r: nRow}});
        	var cell_ref = XLSX.utils.encode_cell(	{	c : 1,
        												r : nRow});
        	var fs = 10;
        	var oStyle = {};
        	oStyle.alignment = {};
        	oStyle.alignment.horizontal = "center";
        	oStyle.alignment.vertical = "center";

        	oStyle.fill = {};
        	oStyle.fill.patternType = "none";
        	oStyle.fill.fgColor = {};
        	oStyle.fill.fgColor.rgb = "ffffff";

        	oStyle.font = {};
        	oStyle.font.color = {};
        	oStyle.font.color.rgb = "000000";
        	oStyle.font.name = "Malgun Gothic";
        	oStyle.font.sz = fs;	//parseInt(fs * 72 / 96);
        	oStyle.font.bold = false;

        	oStyle.border = {};
        	oStyle.border.left = { style: null, color: { rgb: "ffffff" } };
        	oStyle.border.right = oStyle.border.bottom = oStyle.border.top = oStyle.border.left;
        	ws[cell_ref] = 	{
        						v : "귀하의 노고에 감사 드립니다." ,
        						t : "s" ,
        						s : oStyle,
        					};
        	//---------------------------------------------------
        	// 날짜
        	//---------------------------------------------------
        	nRow = 31;
        	mInfo.push({s: {c: 1, r: nRow}, e: {c: 9, r: nRow}});
        	var cell_ref = XLSX.utils.encode_cell(	{	c : 1,
        												r : nRow});
        	var fs = 10
        	;
        	var oStyle = {};
        	oStyle.alignment = {};
        	oStyle.alignment.horizontal = "center";
        	oStyle.alignment.vertical = "center";

        	oStyle.fill = {};
        	oStyle.fill.patternType = "none";
        	oStyle.fill.fgColor = {};
        	oStyle.fill.fgColor.rgb = "ffffff";

        	oStyle.font = {};
        	oStyle.font.color = {};
        	oStyle.font.color.rgb = "000000";
        	oStyle.font.name = "Malgun Gothic";
        	oStyle.font.sz = fs;	//parseInt(fs * 72 / 96);
        	oStyle.font.bold = false;

        	oStyle.border = {};
        	oStyle.border.left = { style: null, color: { rgb: "ffffff" } };
        	oStyle.border.right = oStyle.border.bottom = oStyle.border.top = oStyle.border.left;
        	var dt = new Date();
        	var y = dt.getFullYear()+"";
        	var m = (dt.getMonth()+1)+"";
        	var d = dt.getDate()+"";
        	ws[cell_ref] = 	{
        						v : y + "년 " + m + "월 " + d + "일" ,
        						t : "s" ,
        						s : oStyle,
        					};

        	//---------------------------------------------------
        	// 끝
        	//---------------------------------------------------
        	nRow = 34;
        	mInfo.push({s: {c: 1, r: nRow}, e: {c: 9, r: nRow}});
        	var cell_ref = XLSX.utils.encode_cell(	{	c : 1,
        												r : nRow});
        	var fs = 14;
        	var oStyle = {};
        	oStyle.alignment = {};
        	oStyle.alignment.horizontal = "center";
        	oStyle.alignment.vertical = "center";

        	oStyle.fill = {};
        	oStyle.fill.patternType = "none";
        	oStyle.fill.fgColor = {};
        	oStyle.fill.fgColor.rgb = "ffffff";

        	oStyle.font = {};
        	oStyle.font.color = {};
        	oStyle.font.color.rgb = "000000";
        	oStyle.font.name = "Malgun Gothic";
        	oStyle.font.sz = fs;	//parseInt(fs * 72 / 96);
        	oStyle.font.bold = true;

        	oStyle.border = {};
        	oStyle.border.left = { style: null, color: { rgb: "ffffff" } };
        	oStyle.border.right = oStyle.border.bottom = oStyle.border.top = oStyle.border.left;
        	ws[cell_ref] = 	{
        						v : "주식회사 디엑스투비" ,
        						t : "s" ,
        						s : oStyle,
        					};
        	return ws;
        };

        this.gfnWriteTotalData = function(mInfo, ws) {
        	//---------------------------------------------------
        	// ○ 종합내역
        	//---------------------------------------------------
        	mInfo.push({s: {c: 1, r: 22}, e: {c: 9, r: 22}});
        	var cell_ref = XLSX.utils.encode_cell(	{	c : 1,
        												r : 22});
        	var fs = 9;
        	var oStyle = {};
        	oStyle.alignment = {};
        	oStyle.alignment.horizontal = "left";
        	oStyle.alignment.vertical = "center";

        	oStyle.fill = {};
        	oStyle.fill.patternType = "none";
        	oStyle.fill.fgColor = {};
        	oStyle.fill.fgColor.rgb = "ffffff";

        	oStyle.font = {};
        	oStyle.font.color = {};
        	oStyle.font.color.rgb = "000000";
        	oStyle.font.name = "Malgun Gothic";
        	oStyle.font.sz = fs;	//parseInt(fs * 72 / 96);
        	oStyle.font.bold = true;

        	oStyle.border = {};
        	ws[cell_ref] = 	{
        						v : "○ 종합내역" ,
        						t : "s" ,
        						s : oStyle,
        					};

        	var arrData = [];
        	arrData[0] = {"t" : "총    액", "v" : "=D21"};
        	arrData[1] = {"t" : "공제총액", "v" : "=I21"};
        	arrData[2] = {"t" : "실수령액", "v" : "=D24-D25"};

        	var nRow = 23;
        	for(var i=0;i<3;i++) {
        		//---------------------------------------------------
        		// text
        		//---------------------------------------------------
        		mInfo.push({s: {c: 1, r: nRow}, e: {c: 2, r: nRow}});
        		var cell_ref = XLSX.utils.encode_cell(	{	c : 1,
        													r : nRow});
        		fs = 9;
        		var oStyle = {};
        		oStyle.alignment = {};
        		oStyle.alignment.horizontal = "center";
        		oStyle.alignment.vertical = "center";

        		oStyle.fill = {};
        		oStyle.fill.patternType = "solid";
        		oStyle.fill.fgColor = {};
        		oStyle.fill.fgColor.rgb = "dae3f3";

        		oStyle.font = {};
        		oStyle.font.color = {};
        		oStyle.font.color.rgb = "000000";
        		oStyle.font.name = "Malgun Gothic";
        		oStyle.font.sz = fs;	//parseInt(fs * 72 / 96);
        		oStyle.font.bold = false;

        		oStyle.border = {};
        		if(i==0) {
        			oStyle.border.left = oStyle.border.top = { style: "thin", color: { rgb: "000000" } };
        			oStyle.border.bottom = oStyle.border.right = { style: "dotted", color: { rgb: "cccccc" } };
        		} else if(i==1) {
        			oStyle.border.left = { style: "thin", color: { rgb: "000000" } };
        			oStyle.border.top = oStyle.border.bottom = oStyle.border.right = { style: "dotted", color: { rgb: "cccccc" } };
        		} else {
        			oStyle.border.left = oStyle.border.bottom = { style: "thin", color: { rgb: "000000" } };
        			oStyle.border.top = oStyle.border.right = { style: "dotted", color: { rgb: "cccccc" } };
        		}
        		ws[cell_ref] = 	{
        							v : arrData[i]?arrData[i].t:"" ,
        							t : "s" ,
        							s : oStyle,
        						};
        		var cell_ref = XLSX.utils.encode_cell(	{	c : 2,
        													r : nRow});
        		ws[cell_ref] = 	{
        							v : "" ,
        							t : "s" ,
        							s : oStyle,
        						};
        		//---------------------------------------------------
        		// data
        		//---------------------------------------------------
        		mInfo.push({s: {c: 3, r: nRow}, e: {c: 4, r: nRow}});
        		var cell_ref = XLSX.utils.encode_cell(	{	c : 3,
        													r : nRow});
        		fs = 9;
        		var oStyle = {};
        		oStyle.alignment = {};
        		oStyle.alignment.horizontal = "right";
        		oStyle.alignment.vertical = "center";

        		oStyle.fill = {};
        		oStyle.fill.patternType = "none";
        		oStyle.fill.fgColor = {};
        		oStyle.fill.fgColor.rgb = "ffffff";

        		oStyle.font = {};
        		oStyle.font.color = {};
        		oStyle.font.color.rgb = "000000";
        		oStyle.font.name = "Malgun Gothic";
        		oStyle.font.sz = fs;	//parseInt(fs * 72 / 96);
        		oStyle.font.bold = false;

        		oStyle.border = {};
        		if(i==0) {
        			oStyle.border.top = { style: "thin", color: { rgb: "000000" } };
        			oStyle.border.left = oStyle.border.bottom = oStyle.border.right = { style: "dotted", color: { rgb: "cccccc" } };
        		} else if(i==1) {
        			oStyle.border.left = oStyle.border.top = oStyle.border.bottom = oStyle.border.right = { style: "dotted", color: { rgb: "cccccc" } };
        		} else {
        			oStyle.border.bottom = { style: "thin", color: { rgb: "000000" } };
        			oStyle.border.left = oStyle.border.top = oStyle.border.right = { style: "dotted", color: { rgb: "cccccc" } };
        		}

        		ws[cell_ref] = 	{
        							f : arrData[i]?arrData[i].v:"" ,
        							t : "n" ,
        							z : "#,###" ,
        							s : oStyle,
        						};

        		var cell_ref = XLSX.utils.encode_cell(	{	c : 4,
        													r : nRow});
        		ws[cell_ref] = 	{
        							v : "" ,
        							t : "s" ,
        							s : oStyle,
        						};

        		// 원
        		//---------------------------------------------------
        		// text
        		//---------------------------------------------------
        		mInfo.push({s: {c: 5, r: nRow}, e: {c: 9, r: nRow}});
        		var cell_ref = XLSX.utils.encode_cell(	{	c : 5,
        													r : nRow});
        		fs = 9;
        		var oStyle = {};
        		oStyle.alignment = {};
        		oStyle.alignment.horizontal = "left";
        		oStyle.alignment.vertical = "center";

        		oStyle.fill = {};
        		oStyle.fill.patternType = "none";
        		oStyle.fill.fgColor = {};
        		oStyle.fill.fgColor.rgb = "ffffff";

        		oStyle.font = {};
        		oStyle.font.color = {};
        		oStyle.font.color.rgb = "000000";
        		oStyle.font.name = "Malgun Gothic";
        		oStyle.font.sz = fs;	//parseInt(fs * 72 / 96);
        		oStyle.font.bold = false;

        		oStyle.border = {};
        		if(i==0) {
        			oStyle.border.right = oStyle.border.top = { style: "thin", color: { rgb: "000000" } };
        			oStyle.border.left = oStyle.border.bottom = { style: "dotted", color: { rgb: "cccccc" } };
        		} else if(i==1) {
        			oStyle.border.right = { style: "thin", color: { rgb: "000000" } };
        			oStyle.border.left = oStyle.border.top = oStyle.border.bottom = { style: "dotted", color: { rgb: "cccccc" } };
        		} else {
        			oStyle.border.right = oStyle.border.bottom = { style: "thin", color: { rgb: "000000" } };
        			oStyle.border.left = oStyle.border.top = { style: "dotted", color: { rgb: "cccccc" } };
        		}
        		ws[cell_ref] = 	{
        							v : "원" ,
        							t : "s" ,
        							s : oStyle,
        						};
        		var cell_ref = XLSX.utils.encode_cell(	{	c : 6,
        													r : nRow});
        		ws[cell_ref] = 	{
        							v : "" ,
        							t : "s" ,
        							s : oStyle,
        						};
        		var cell_ref = XLSX.utils.encode_cell(	{	c : 8,
        													r : nRow});
        		ws[cell_ref] = 	{
        							v : "" ,
        							t : "s" ,
        							s : oStyle,
        						};
        		var cell_ref = XLSX.utils.encode_cell(	{	c : 9,
        													r : nRow});
        		ws[cell_ref] = 	{
        							v : "" ,
        							t : "s" ,
        							s : oStyle,
        						};
        		var cell_ref = XLSX.utils.encode_cell(	{	c : 7,
        													r : nRow});
        		ws[cell_ref] = 	{
        							v : "" ,
        							t : "s" ,
        							s : oStyle,
        						};

        		nRow++;
        	}
        	return ws;
        };


        this.gfnWriteExcelInData = function(mInfo, ws, ds, idx) {
        	var arrData = [];
        	var arrCnt = -1;
        	for(var i=23;i<=this.objTitle.in2.e;i++) {
        		arrCnt++;
        		var colid = this.salaryObj.indata[i].colname;
        		var val = ds.getColumn(idx, colid);
        		if(!val || val == "") continue;
        		val = nexacro.toNumber(val);
        		val = nexacro.toNumber(val.toFixed(0));
        		if(val == 0) continue;
        		arrData.push({"t" : this.salaryObj.indata[i].txt, "v" : val});
        	}

        	var nRow = 8;
        	for(var i=0;i<12;i++) {
        		//---------------------------------------------------
        		// text
        		//---------------------------------------------------
        		mInfo.push({s: {c: 1, r: nRow}, e: {c: 2, r: nRow}});
        		var cell_ref = XLSX.utils.encode_cell(	{	c : 1,
        													r : nRow});
        		fs = 9;
        		var oStyle = {};
        		oStyle.alignment = {};
        		oStyle.alignment.horizontal = "center";
        		oStyle.alignment.vertical = "center";

        		oStyle.fill = {};
        		oStyle.fill.patternType = "solid";
        		oStyle.fill.fgColor = {};
        		oStyle.fill.fgColor.rgb = "dae3f3";

        		oStyle.font = {};
        		oStyle.font.color = {};
        		oStyle.font.color.rgb = "000000";
        		oStyle.font.name = "Malgun Gothic";
        		oStyle.font.sz = fs;	//parseInt(fs * 72 / 96);
        		oStyle.font.bold = false;

        		oStyle.border = {};
        		oStyle.border.left = { style: "thin", color: { rgb: "000000" } };
        		oStyle.border.top = oStyle.border.bottom = oStyle.border.right = { style: "dotted", color: { rgb: "cccccc" } };
        		ws[cell_ref] = 	{
        							v : arrData[i]?arrData[i].t:"" ,
        							t : "s" ,
        							s : oStyle,
        						};
        		var cell_ref = XLSX.utils.encode_cell(	{	c : 2,
        													r : nRow});
        		ws[cell_ref] = 	{
        							v : "" ,
        							t : "s" ,
        							s : oStyle,
        						};
        		//---------------------------------------------------
        		// data
        		//---------------------------------------------------
        		mInfo.push({s: {c: 3, r: nRow}, e: {c: 4, r: nRow}});
        		var cell_ref = XLSX.utils.encode_cell(	{	c : 3,
        													r : nRow});
        		fs = 9;
        		var oStyle = {};
        		oStyle.alignment = {};
        		oStyle.alignment.horizontal = "right";
        		oStyle.alignment.vertical = "center";

        		oStyle.fill = {};
        		oStyle.fill.patternType = "none";
        		oStyle.fill.fgColor = {};
        		oStyle.fill.fgColor.rgb = "ffffff";

        		oStyle.font = {};
        		oStyle.font.color = {};
        		oStyle.font.color.rgb = "000000";
        		oStyle.font.name = "Malgun Gothic";
        		oStyle.font.sz = fs;	//parseInt(fs * 72 / 96);
        		oStyle.font.bold = false;

        		oStyle.border = {};
        		oStyle.border.right = oStyle.border.bottom = oStyle.border.top = oStyle.border.left = { style: "dotted", color: { rgb: "cccccc" } };

        		ws[cell_ref] = 	{
        							v : arrData[i]?arrData[i].v:"" ,
        							t : arrData[i]?"n":"s" ,
        							z : arrData[i]?"#,###":"" ,
        							s : oStyle,
        						};

        		var cell_ref = XLSX.utils.encode_cell(	{	c : 4,
        													r : nRow});
        		ws[cell_ref] = 	{
        							v : "" ,
        							t : "s" ,
        							s : oStyle,
        						};
        		nRow++;
        	}
        	nRow = 20;
        	// 합계
        	//---------------------------------------------------
        	// text
        	//---------------------------------------------------
        	mInfo.push({s: {c: 1, r: nRow}, e: {c: 2, r: nRow}});
        	var cell_ref = XLSX.utils.encode_cell(	{	c : 1,
        												r : nRow});
        	fs = 9;
        	var oStyle = {};
        	oStyle.alignment = {};
        	oStyle.alignment.horizontal = "center";
        	oStyle.alignment.vertical = "center";

        	oStyle.fill = {};
        	oStyle.fill.patternType = "solid";
        	oStyle.fill.fgColor = {};
        	oStyle.fill.fgColor.rgb = "dae3f3";

        	oStyle.font = {};
        	oStyle.font.color = {};
        	oStyle.font.color.rgb = "000000";
        	oStyle.font.name = "Malgun Gothic";
        	oStyle.font.sz = fs;	//parseInt(fs * 72 / 96);
        	oStyle.font.bold = false;

        	oStyle.border = {};
        	oStyle.border.left = oStyle.border.bottom = { style: "thin", color: { rgb: "000000" } };
        	oStyle.border.top = oStyle.border.right = { style: "dotted", color: { rgb: "cccccc" } };
        	ws[cell_ref] = 	{
        						v : "지급합계" ,
        						t : "s" ,
        						s : oStyle,
        					};
        	var cell_ref = XLSX.utils.encode_cell(	{	c : 2,
        												r : nRow});
        	ws[cell_ref] = 	{
        						v : "" ,
        						t : "s" ,
        						s : oStyle,
        					};
        	//---------------------------------------------------
        	// data
        	//---------------------------------------------------
        	mInfo.push({s: {c: 3, r: nRow}, e: {c: 4, r: nRow}});
        	var cell_ref = XLSX.utils.encode_cell(	{	c : 3,
        												r : nRow});
        	fs = 9;
        	var oStyle = {};
        	oStyle.alignment = {};
        	oStyle.alignment.horizontal = "right";
        	oStyle.alignment.vertical = "center";

        	oStyle.fill = {};
        	oStyle.fill.patternType = "none";
        	oStyle.fill.fgColor = {};
        	oStyle.fill.fgColor.rgb = "ffffff";

        	oStyle.font = {};
        	oStyle.font.color = {};
        	oStyle.font.color.rgb = "000000";
        	oStyle.font.name = "Malgun Gothic";
        	oStyle.font.sz = fs;	//parseInt(fs * 72 / 96);
        	oStyle.font.bold = false;

        	oStyle.border = {};
        	oStyle.border.bottom = { style: "thin", color: { rgb: "000000" } };
        	oStyle.border.right = oStyle.border.top = oStyle.border.left = { style: "dotted", color: { rgb: "cccccc" } };

        	ws[cell_ref] = 	{
        						f : "=SUM(D9:E20)",
        						t : "n" ,
        						z : "#,###" ,
        						s : oStyle,
        					};

        	var cell_ref = XLSX.utils.encode_cell(	{	c : 4,
        												r : nRow});
        	ws[cell_ref] = 	{
        						v : "" ,
        						t : "s" ,
        						s : oStyle,
        					};
        	nRow++;
        	return ws;
        };

        this.gfnWriteExcelOutData = function(mInfo, ws, ds, idx) {
        	var arrData = [];

        	var arrCnt = -1;
        	console.log(this.objTitle);
        	console.log(this.salaryObj);
        	for(var i=this.objTitle.out.s;i<=this.objTitle.out.e;i++) {
        		arrCnt++;
        		var colid = this.salaryObj.outdata[i].colname;
        		var val = ds.getColumn(idx, colid);
        		console.log(i, colid, val);
        		if(!val || val == "") continue;
        		val = nexacro.toNumber(val);
        		val = nexacro.toNumber(val.toFixed(0));
        		if(val == 0) continue;
        		arrData.push({"t" : this.salaryObj.outdata[i].txt, "v" : val});
        	}

        	var nRow = 8;
        	for(var i=0;i<12;i++) {
        		//---------------------------------------------------
        		// text
        		//---------------------------------------------------
        		mInfo.push({s: {c: 5, r: nRow}, e: {c: 7, r: nRow}});
        		var cell_ref = XLSX.utils.encode_cell(	{	c : 5,
        													r : nRow});
        		fs = 9;
        		var oStyle = {};
        		oStyle.alignment = {};
        		oStyle.alignment.horizontal = "center";
        		oStyle.alignment.vertical = "center";

        		oStyle.fill = {};
        		oStyle.fill.patternType = "solid";
        		oStyle.fill.fgColor = {};
        		oStyle.fill.fgColor.rgb = "dae3f3";

        		oStyle.font = {};
        		oStyle.font.color = {};
        		oStyle.font.color.rgb = "000000";
        		oStyle.font.name = "Malgun Gothic";
        		oStyle.font.sz = fs;	//parseInt(fs * 72 / 96);
        		oStyle.font.bold = false;

        		oStyle.border = {};
        		oStyle.border.left = oStyle.border.top = oStyle.border.bottom = oStyle.border.right = { style: "dotted", color: { rgb: "cccccc" } };
        		ws[cell_ref] = 	{
        							v : arrData[i]?arrData[i].t:"" ,
        							t : "s" ,
        							s : oStyle,
        						};
        		var cell_ref = XLSX.utils.encode_cell(	{	c : 6,
        													r : nRow});
        		ws[cell_ref] = 	{
        							v : "" ,
        							t : "s" ,
        							s : oStyle,
        						};
        		var cell_ref = XLSX.utils.encode_cell(	{	c : 7,
        													r : nRow});
        		ws[cell_ref] = 	{
        							v : "" ,
        							t : "s" ,
        							s : oStyle,
        						};
        		//---------------------------------------------------
        		// data
        		//---------------------------------------------------
        		mInfo.push({s: {c: 8, r: nRow}, e: {c: 9, r: nRow}});
        		var cell_ref = XLSX.utils.encode_cell(	{	c : 8,
        													r : nRow});
        		fs = 9;
        		var oStyle = {};
        		oStyle.alignment = {};
        		oStyle.alignment.horizontal = "right";
        		oStyle.alignment.vertical = "center";

        		oStyle.fill = {};
        		oStyle.fill.patternType = "none";
        		oStyle.fill.fgColor = {};
        		oStyle.fill.fgColor.rgb = "ffffff";

        		oStyle.font = {};
        		oStyle.font.color = {};
        		oStyle.font.color.rgb = "000000";
        		oStyle.font.name = "Malgun Gothic";
        		oStyle.font.sz = fs;	//parseInt(fs * 72 / 96);
        		oStyle.font.bold = false;

        		oStyle.border = {};
        		oStyle.border.right = { style: "thin", color: { rgb: "000000" } };
        		oStyle.border.bottom = oStyle.border.top = oStyle.border.left = { style: "dotted", color: { rgb: "cccccc" } };

        		ws[cell_ref] = 	{
        							v : arrData[i]?arrData[i].v:"" ,
        							t : arrData[i]?"n":"s" ,
        							z : arrData[i]?"#,###":"" ,
        							s : oStyle,
        						};

        		var cell_ref = XLSX.utils.encode_cell(	{	c : 9,
        													r : nRow});
        		ws[cell_ref] = 	{
        							v : "" ,
        							t : "s" ,
        							s : oStyle,
        						};
        		nRow++;
        	}

        	//---------------------------------------------------
        	// text
        	//---------------------------------------------------
        	nRow = 20;
        	mInfo.push({s: {c: 5, r: nRow}, e: {c: 7, r: nRow}});
        	var cell_ref = XLSX.utils.encode_cell(	{	c : 5,
        												r : nRow});
        	fs = 9;
        	var oStyle = {};
        	oStyle.alignment = {};
        	oStyle.alignment.horizontal = "center";
        	oStyle.alignment.vertical = "center";

        	oStyle.fill = {};
        	oStyle.fill.patternType = "solid";
        	oStyle.fill.fgColor = {};
        	oStyle.fill.fgColor.rgb = "dae3f3";

        	oStyle.font = {};
        	oStyle.font.color = {};
        	oStyle.font.color.rgb = "000000";
        	oStyle.font.name = "Malgun Gothic";
        	oStyle.font.sz = fs;	//parseInt(fs * 72 / 96);
        	oStyle.font.bold = false;

        	oStyle.border = {};
        	oStyle.border.bottom = { style: "thin", color: { rgb: "000000" } };
        	oStyle.border.left = oStyle.border.top = oStyle.border.right = { style: "dotted", color: { rgb: "cccccc" } };
        	ws[cell_ref] = 	{
        						v : "공제합계" ,
        						t : "s" ,
        						s : oStyle,
        					};
        	var cell_ref = XLSX.utils.encode_cell(	{	c : 6,
        												r : nRow});
        	ws[cell_ref] = 	{
        						v : "" ,
        						t : "s" ,
        						s : oStyle,
        					};
        	var cell_ref = XLSX.utils.encode_cell(	{	c : 7,
        												r : nRow});
        	ws[cell_ref] = 	{
        						v : "" ,
        						t : "s" ,
        						s : oStyle,
        					};
        	//---------------------------------------------------
        	// data
        	//---------------------------------------------------
        	mInfo.push({s: {c: 8, r: nRow}, e: {c: 9, r: nRow}});
        	var cell_ref = XLSX.utils.encode_cell(	{	c : 8,
        												r : nRow});
        	fs = 9;
        	var oStyle = {};
        	oStyle.alignment = {};
        	oStyle.alignment.horizontal = "right";
        	oStyle.alignment.vertical = "center";

        	oStyle.fill = {};
        	oStyle.fill.patternType = "none";
        	oStyle.fill.fgColor = {};
        	oStyle.fill.fgColor.rgb = "ffffff";

        	oStyle.font = {};
        	oStyle.font.color = {};
        	oStyle.font.color.rgb = "000000";
        	oStyle.font.name = "Malgun Gothic";
        	oStyle.font.sz = fs;	//parseInt(fs * 72 / 96);
        	oStyle.font.bold = false;

        	oStyle.border = {};
        	oStyle.border.bottom = oStyle.border.right = { style: "thin", color: { rgb: "000000" } };
        	oStyle.border.top = oStyle.border.left = { style: "dotted", color: { rgb: "cccccc" } };

        	ws[cell_ref] = 	{
        						f : '=SUM(I9:J20)',
        						t : "n" ,
        						z : "#,###" ,
        						s : oStyle,
        					};

        	var cell_ref = XLSX.utils.encode_cell(	{	c : 9,
        												r : nRow});
        	ws[cell_ref] = 	{
        						v : "" ,
        						t : "s" ,
        						s : oStyle,
        					};
        	return ws;
        };


        this.fdtFile_onsuccess = function(obj,e)
        {
        	console.log('succ', e.targetfullpath, e.url);
        };

        this.fdtFile_onerror = function(obj,e)
        {
        	console.log('error');
        };


        this.btnContents_onclick = function(obj,e)
        {
        	var sTitle  = "메일컨텐츠 변경";
        	var oArg    = { pType : "update",
        				};
        	var oOption = {title:sTitle
        				,titlebar:true};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("salesScheduleDetailPu", "hrd::salary/salaryMailContentsPuFm.xfdl", oArg, sPopupCallBack, oOption);
        };

        this.btnEmailInfo_onclick = function(obj,e)
        {
        	var sTitle  = "메일 비밀번호설정";
        	var oArg    = { pType : "update",
        				};
        	var oOption = {title:sTitle
        				,titlebar:true};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("salesScheduleDetailPu", "hrd::salary/salaryMaiIInfoPuFm.xfdl", oArg, sPopupCallBack, oOption);
        };

        this.btnDeleteFiles_onclick = function(obj,e)
        {
        	this.fnTranDeletePdf();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.salaryImportFm_onload,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.grd00.addEventHandler("oncellclick",this.grd00_oncellclick,this);
            this.grd00.addEventHandler("onheadclick",this.grd00_onheadclick,this);
            this.btnAdd00.addEventHandler("onclick",this.btnAdd00_onclick,this);
            this.btnAdd00_00.addEventHandler("onclick",this.btnAdd00_00_onclick,this);
            this.btnEmail.addEventHandler("onclick",this.btnAdd00_00_00_onclick,this);
            this.btnContents.addEventHandler("onclick",this.btnContents_onclick,this);
            this.btnEmailInfo.addEventHandler("onclick",this.btnEmailInfo_onclick,this);
            this.btnDeleteFiles.addEventHandler("onclick",this.btnDeleteFiles_onclick,this);
            this.fdtFile.addEventHandler("onsuccess",this.fdtFile_onsuccess,this);
            this.fdtFile.addEventHandler("onerror",this.fdtFile_onerror,this);
        };
        this.loadIncludeScript("salaryImportFm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
