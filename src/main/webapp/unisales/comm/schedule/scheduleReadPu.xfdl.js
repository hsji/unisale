(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("scheduleReadPu");
            this.set_titletext("일정 조회 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(950,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"INPT_EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"SSC_CD_KORN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"SCD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SCD_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fdtFile", this);
            obj.set_url("svcUrl::fileDownload.do");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staScdCDTitle","25","0","118","43",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("일정 상세");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("divContents","25","staScdCDTitle:0",null,"589","25",null,null,null,"600",null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle003","449","37","83","38",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("6");
            obj.set_text("작성일");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("left");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staTitle002","0","74","83","38",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("3");
            obj.set_text("유형");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("left");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divCont","0","staTitle002:-1",null,"400","0",null,null,null,"400",null,this.divContents.form);
            obj.set_taborder("0");
            obj.set_text("div00");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staBg00","0","0",null,null,"0","0",null,null,null,null,this.divContents.form.divCont.form);
            obj.set_taborder("0");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divContents.form.divCont.addChild(obj.name, obj);

            obj = new Static("staTitle04","0","0","83",null,null,"0",null,null,null,null,this.divContents.form.divCont.form);
            obj.set_taborder("1");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("left");
            this.divContents.form.divCont.addChild(obj.name, obj);

            obj = new WebBrowser("webEditor","staTitle04:4","5",null,null,"5","5",null,null,null,null,this.divContents.form.divCont.form);
            obj.set_taborder("2");
            this.divContents.form.divCont.addChild(obj.name, obj);

            obj = new Static("staTitle000","0","0","83","38",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("1");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("left");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staTitle001","0","staTitle000:-1","83","38",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("2");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("left");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staTitle","staTitle000:-1","0",null,"38","0",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staInpId","staTitle001:-1","37",null,"38","450",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staSectCd","staTitle002:-1","74",null,"38","450",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divFile","0","divCont:-1",null,"79","0",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("8");
            obj.set_text("div00");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staBg000","0","0",null,null,"0","0",null,null,null,null,this.divContents.form.divFile.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_usedecorate("true");
            obj.set_visible("true");
            obj.set_text("");
            this.divContents.form.divFile.addChild(obj.name, obj);

            obj = new Static("staTitle000","0","0","83",null,null,"0",null,null,null,null,this.divContents.form.divFile.form);
            obj.set_taborder("1");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_Label");
            this.divContents.form.divFile.addChild(obj.name, obj);

            obj = new Grid("grdFile","staTitle000:4","5",null,null,"5","5",null,null,null,null,this.divContents.form.divFile.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_MF_Notice");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"450\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell text=\"bind:OTXT_FILE_NM\"/><Cell col=\"1\" text=\"다운로드\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band></Format></Formats>");
            this.divContents.form.divFile.addChild(obj.name, obj);

            obj = new Static("staCntFile","staTitle000:-83","staTitle000:-35","83","22",null,null,null,null,null,null,this.divContents.form.divFile.form);
            obj.set_taborder("3");
            obj.set_text("(0건)");
            obj.set_fittocontents("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divContents.form.divFile.addChild(obj.name, obj);

            obj = new Static("staTitle009","449","74","83","38",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("10");
            obj.set_text("일정");
            obj.set_cssclass("sta_WF_Label");
            obj.set_textAlign("left");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staDate","staTitle009:-1","74",null,"38","0",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staDate00","staTitle003:-1","37",null,"38","0",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staBottom","0","680",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btnMove","staScdCDTitle:10","7","50","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("이동");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"divContents:20","275","28","25",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"0","50","28","0",null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_fittocontents("width");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","69","28","53",null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CrudDelete");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btnModi",null,"0","69","28","125",null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("2");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_CrudModify");
            this.divBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divContents.form.divCont.form
            obj = new Layout("default","",0,0,this.divContents.form.divCont.form,function(p){});
            this.divContents.form.divCont.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form.divFile.form
            obj = new Layout("default","",0,0,this.divContents.form.divFile.form,function(p){});
            this.divContents.form.divFile.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form
            obj = new Layout("default","",0,0,this.divContents.form,function(p){});
            this.divContents.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBtn.form
            obj = new Layout("default","",0,0,this.divBtn.form,function(p){});
            this.divBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",950,700,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divContents.form.staTitle","text","dsList","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divContents.form.staInpId","text","dsList","INPT_EMP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divContents.form.staSectCd","text","dsList","SSC_CD_KORN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divContents.form.staDate00","text","dsList","CHGE_DTTM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("scheduleReadPu.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	scheduleReadPu.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/11/19
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/11/19			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvApndYn		= ""; 	//첨부파일 여부
        this.fvTitle		= ""; 	//일정 관리 타이틀
        this.fvScdCd		= ""; 	//일정 관리 코드
        this.fvScdId 		= ""; 	//일정 번호
        this.fvOpenType 	= ""; 	//오픈타입
        this.fvMgrCd		= ""; 	//관리자CD
        this.fvLoginUser 	= ""; 	//로그인유저ID
        this.fvLoginUserEmpNo = ""; //로그인 유저NO
        this.fvDeptCd 		= ""; 	//부서코드

        this.fvYyyyMmDd		= "";	//조회하고 있던 날짜

        this.fvUpdateYn 	= "";	//업데이트 여부
        this.fvAutnYn    = ""; //게시판관리 삭제,수정 권한
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.scheduleReadPu_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	this.fvApndYn   = this.getOwnerFrame().pvApndYn; 	//첨부파일유무
        	this.fvTitle    = this.getOwnerFrame().pvTitle; 	//일정 관리 타이틀
        	this.fvScdCd 	= this.getOwnerFrame().pvScdCd; 	//일정 관리 코드
        	this.fvScdId  	= this.getOwnerFrame().pvScdId; 	//일정번호
        	this.fvOpenType = this.getOwnerFrame().pvOpenType; 	//오픈타입
        	this.fvMgrCd	= this.getOwnerFrame().pvMgrCd; 	//관리자
        	this.fvLoginUser = nexacro.getApplication().gdsUser.getColumn(0, "USER_ID");
        	this.fvLoginUserEmpNo = nexacro.getApplication().gdsUser.getColumn(0, "EMP_NO");
        	this.fvDeptCd 	= this.getOwnerFrame().pvDeptCd;
        	this.fvAutnYn   = this.getOwnerFrame().pvAutnYn; //게시판관리 수정,삭제 권한부여 임의 파라미터 추가

        	this.fvYyyyMmDd = this.getOwnerFrame().pvYyyyMmDd;

        	//타이틀설정
        	this.staScdCDTitle.set_text(this.fvTitle+" ");
        	this.resetScroll();

        	//게시물 내용조회
        	this.fnGetContentsTran();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/




        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //조회
        this.fnGetContentsTran = function()
        {
        	this.dsCond.clearData();
        	var nRow = this.dsCond.addRow();
        	this.dsCond.setColumn(nRow, "SCD_CD", this.fvScdCd);
        	this.dsCond.setColumn(nRow, "SCD_ID", this.fvScdId);

        	var strSvcId    = "searchScheduleContents";
        	var strSvcUrl   = "searchScheduleContents.do";
        	var inData      = "dsCond=dsCond";
        	var outData     = "dsList=dsList dsFile=dsFile";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };


        //삭제
        this.fnTranDelete = function()
        {
        	var strSvcId    = "delete";
        	var strSvcUrl   = "saveScheduleContents.do";
        	var inData      = "dsList=dsList:A dsUpload=dsUpload";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }


        //deleteFile
        this.fnTranDeleteFile = function ()
        {
        	var strSvcId    = "deleteScheduleFile";
        	var strSvcUrl   = "deleteScheduleFile.do";
        	var inData      = "dsUpload=dsFile:U";
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
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "searchScheduleContents":
        			this.fnSetFormInit();
        			break;
        		case "delete":
        			this.gfnAlert("msg.delete.success", [], "deleteAfter", "fnMsgCallback");
        			break;
        		case "deleteScheduleFile":
        			break;
        	}
        };


        //메세지 콜백
        this.fnMsgCallback = function (sMsgId, sRtn)
        {
        	switch(sMsgId) {
        		case "delete":
        			if(sRtn=="false" || sRtn==false || this.gfnIsNull(sRtn)){
        				return;
        			}
        			// 시작일이 오늘 날짜보다 크면 delete, 작으면 삭제여부 update
        			if(this.dsList.getColumn(0,"START_DAY") > this.gfnGetDate()){
        				this.dsList.setColumn(0,"STATUS","delete:D");
        				//등록된 파일이 있다면 파일도 삭제.
        				if(this.dsFile.getRowCount()>0){
        					this.dsFile.deleteAll();
        					this.fnTranDeleteFile();
        				}
        			}else{
        				this.dsList.setColumn(0,"STATUS","delete:U");
        			}
        			this.fnTranDelete();
        			break;
        		case "deleteAfter":
        			if(sRtn)
        			{
        				if(this.fvOpenType!="searchRead"){
        					this.close(this.fvYyyyMmDd);
        				}else if(this.fvOpenType =="searchRead"){
        					this.close("delete");
        				}
        			}
        			break;
        	}
        };


        //popup
        this.fnPopupCallback = function (sPopupId, sRtn)
        {
        	switch(sPopupId) {
        		case "updateScd":
        			this.fvUpdateYn="1";
        			this.fnGetContentsTran();
        			break;
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnSetFormInit = function ()
        {

        	// HTML Viewer를 생성
        	var oWeb = this.divContents.form.divCont.form.webEditor;
        	this.gfnCreateHtmlViewer(oWeb);

        	// 일자 세팅
        	var sStartDate = this.dsList.getColumn(0, "START_DAY");
        	var sEndDate = this.dsList.getColumn(0,"END_DAY");
        	if(sStartDate == sEndDate){ //시작일자와 종료일자가 같으면 종료되는 시간만 가져오기.
        		sEndDate = this.dsList.getColumn(0,"END_TIME") + ":" + this.dsList.getColumn(0,"END_MINUTES");
        	}else{
        		sEndDate = sEndDate.substr(0,4) + "." + sEndDate.substr(4,2) + "." + sEndDate.substr(6,2) + "(" + this.gfnGetDayKor(sEndDate) + ")" + " ";
        		sEndDate = sEndDate + this.dsList.getColumn(0,"END_TIME") + ":" + this.dsList.getColumn(0,"END_MINUTES");
        	}
        	sStartDate = sStartDate.substr(0,4) + "." + sStartDate.substr(4,2) + "." + sStartDate.substr(6,2) + "(" + this.gfnGetDayKor(sStartDate) + ")" + " ";
        	sStartDate = sStartDate + this.dsList.getColumn(0,"START_TIME") + ":" + this.dsList.getColumn(0,"START_MINUTES");

        	this.divContents.form.staDate.set_text(sStartDate + " ~ " + sEndDate);

        	// 첨부파일 여부
        	if(this.fvApndYn=="0"){
        		this.divContents.form.divFile.set_height(0);
        		this.divContents.form.divCont.set_bottom(0);
        		this.divContents.form.resetScroll();
        	}

        	// 첨부파일 건수
        	this.divContents.form.divFile.form.staCntFile.set_text("(" + this.dsFile.getRowCount()+"건)")

        	// 메인화면에서 조회된 일정 ==> 일정 이동 버튼 활성화
        	if(!this.getOwnerFrame().pvMain){
        		this.btnMove.set_visible(false);
        	}
        	else {
        		this.btnMove.set_visible(true);
        	}

        	// 수정, 삭제 버튼
        	var sInputUser = this.dsList.getColumn(0,"INPT_ID"); // 작성자
        	if(sInputUser==this.fvLoginUser || this.fvMgrCd==this.fvLoginUser || this.fvAutnYn == 'Y'){//작성자 혹은 관리자 일 경우
        		//하단버튼
        		this.divBtn.form.btnModi.set_visible(true);
        		this.divBtn.form.btnDelete.set_visible(true);
        		this.divBtn.form.btnModi.set_width(69);
        		this.divBtn.form.btnDelete.set_width(69);
        	}
        	else if(sInputUser!=this.fvLoginUser || this.fvMgrCd!=this.fvLoginUser){
        		this.divBtn.form.btnModi.set_visible(false);
        		this.divBtn.form.btnDelete.set_visible(false);
        		this.divBtn.form.btnModi.set_width(0);
        		this.divBtn.form.btnDelete.set_width(0);
        	}
        	this.divBtn.form.resetScroll();
        };

        // 일정 수정 팝업창 호출
        this.fnOpenUpdateScdP = function ()
        {
        	sTitle		= "일정 수정";
        	popupId 	= "updateScd";
        	popupUrl 	= "comm::schedule/schedulePu.xfdl";
        	var oArg   	= {pvApndYn		: this.fvApndYn
        		,pvScdCd		: this.fvScdCd
        		,pvScdId		: this.fvScdId
        		,pvDeptCd		: this.fvDeptCd
        		,pvTitle		: this.fvTitle
        		,pvMgrCd 		: this.fvMgrCd
        		,pvOpenType	: "update"
        	};

        	var oOption 	= {title:sTitle
        					  ,titlebar:true};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup(popupId, popupUrl, oArg, sPopupCallBack, oOption);
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        //팝업 닫기
        this.btnClose_onclick = function(obj,e)
        {
        	if(this.fvUpdateYn) {
        		this.close(this.dsList.getColumn(0,"START_DAY"));
        	}else {
        		this.close();
        	}
        };

        //웹에디터
        this.divContents_divCont_webEditor_onloadcompleted = function(obj,e)
        {
        	//내용세팅
        	var sContents = this.dsList.getColumn(0, "CNTN");
        	var oWeb = this.divContents.form.divCont.form.webEditor;
        	this.gfnSetHtmlView(oWeb, sContents);
        };

        //첨부파일 다운로드
        this.divCont_divFile_grdFile_oncellclick = function(obj,e)
        {
        	//file download
        	if( e.cell == 1){ //다운로드 버튼display
        		var sFileId 	= this.dsFile.getColumn(e.row, "FILE_ID");
        		var sFileNm 	= this.dsFile.getColumn(e.row, "OTXT_FILE_NM");
        		var sSaveFileNm = this.dsFile.getColumn(e.row, "SAVE_FILE_NM");
        		if( !this.gfnIsNull(sFileId)){
        			this.fdtFile.setPostData("saveFileName"	, sSaveFileNm);
        			this.fdtFile.setPostData("orgFileName"	, sFileNm);

        			this.fdtFile.set_downloadfilename(sFileNm)
        			this.fdtFile.download("svcUrl::fileDownload.do");
        		}else{
        			this.gfnAlert("msg.err.nofile");
        			return;
        		}
        	}
        };

        //수정버튼
        this.divBtn_btnModi_onclick = function(obj,e)
        {
        	//this.close("rUpdate");

        	// 일정 수정 팝업창 호출
        	this.fnOpenUpdateScdP();
        };

        //삭제버튼
        this.divBtn_btnDelete_onclick = function(obj,e)
        {
        	this.gfnAlert("confirm.before.delete",[],"delete", "fnMsgCallback");
        };

        //이동버튼(메인에서 상세 조회 시 이동 버튼 클릭하면 해당 메뉴 오픈)
        this.btnMove_onclick = function(obj,e)
        {
        	var sMenuId 	= this.dsList.getColumn(0,"MENU_ID");
        	var sStartDay	= this.dsList.getColumn(0,"START_DAY");

        	//레프트Sync
        	var oDs = nexacro.getApplication().gdsMenu;
        	var sModuleCd = oDs.lookup("MENU_ID", sMenuId, "MODULE_CD");

        	var oTopForm = nexacro.getApplication().gvFrmTop.form;
        	var sTopCommBtnId = "TOP_"+oTopForm.dsMenu.lookup("MODULE_CD", sModuleCd, "MENU_ID");
        	var oBtn = oTopForm.divTopBtn.form.components[sTopCommBtnId];
        		oBtn.click();

        	this.gfnOpenMenu(sMenuId, sStartDay);
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.scheduleReadPu_onload,this);
            this.divContents.form.divCont.form.webEditor.addEventHandler("onloadcompleted",this.divContents_divCont_webEditor_onloadcompleted,this);
            this.divContents.form.divCont.form.webEditor.addEventHandler("onusernotify",this.divContents_divCont_webEditor_onusernotify,this);
            this.divContents.form.divFile.form.staBg000.addEventHandler("onclick",this.divCont_divFile_btnDown_onclick,this);
            this.divContents.form.divFile.form.grdFile.addEventHandler("oncellclick",this.divCont_divFile_grdFile_oncellclick,this);
            this.btnMove.addEventHandler("onclick",this.btnMove_onclick,this);
            this.divBtn.form.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.divBtn.form.btnDelete.addEventHandler("onclick",this.divBtn_btnDelete_onclick,this);
            this.divBtn.form.btnModi.addEventHandler("onclick",this.divBtn_btnModi_onclick,this);
        };
        this.loadIncludeScript("scheduleReadPu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
