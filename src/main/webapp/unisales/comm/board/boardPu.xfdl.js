(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("boardPu");
            this.set_titletext("게시판 입력 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(950,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"BLBD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"RCMD_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"ANSW_YN\" type=\"STRING\" size=\"256\"/><Column id=\"HRANK_NOTI_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ANSW_ORDER\" type=\"STRING\" size=\"256\"/><Column id=\"ANSW_LEVL\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"CTNS_ATTR\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"CNTN_CLOB\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUpload", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OTXT_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fdgFile", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("futFile", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staBoardTitle","25","0","118","43","807",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("게시판 이름");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("divContents","25","staBoardTitle:0",null,"589","25",null,null,null,"589",null,this);
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

            obj = new Edit("edtInpId","staTitle00:4","5","158","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staTitle01","edtInpId:4","0","83","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("4");
            obj.set_text("조회수");
            obj.set_cssclass("sta_WF_Label");
            this.divContents.addChild(obj.name, obj);

            obj = new Edit("edtInqCnt","staTitle01:4","5",null,"24","5",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.divContents.addChild(obj.name, obj);

            obj = new Edit("edtTitle","87","edtInqCnt:9",null,"24","5",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("6");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divCont","0","staBg01:-1",null,"424","0",null,null,null,"424",null,this.divContents.form);
            obj.set_taborder("8");
            obj.set_text("div00");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staBg00","0","0",null,null,"0","0",null,null,null,null,this.divContents.form.divCont.form);
            obj.set_taborder("0");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divContents.form.divCont.addChild(obj.name, obj);

            obj = new Static("staTitle03","0","0","83",null,null,"0",null,null,null,null,this.divContents.form.divCont.form);
            obj.set_taborder("1");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_Label");
            this.divContents.form.divCont.addChild(obj.name, obj);

            obj = new WebBrowser("webEditor","staTitle03:4","5",null,null,"5","5",null,null,null,null,this.divContents.form.divCont.form);
            obj.set_taborder("2");
            this.divContents.form.divCont.addChild(obj.name, obj);

            obj = new TextArea("txa00","96","17","25","45",null,null,null,null,null,null,this.divContents.form.divCont.form);
            obj.set_taborder("3");
            obj.set_visible("false");
            this.divContents.form.divCont.addChild(obj.name, obj);

            obj = new Div("divFile","0","489",null,"99","0",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("7");
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
            obj.set_cssclass("grd_MF_Notice");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"545\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell text=\"bind:OTXT_FILE_NM\"/><Cell col=\"1\" text=\"삭제\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band></Format></Formats>");
            this.divContents.form.divFile.addChild(obj.name, obj);

            obj = new Static("staTitle02","0","33","83","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("9");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_Label");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divButton",null,"divContents:20","255","28","25",null,null,null,null,null,this);
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

            obj = new Button("btnDelete",null,"0","69","28","btnSave:4",null,null,null,null,null,this.divButton.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_CrudDelete");
            this.divButton.addChild(obj.name, obj);

            obj = new Static("staBottom","0","divButton:0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);
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

            //-- Default Layout : this.divButton.form
            obj = new Layout("default","",0,0,this.divButton.form,function(p){});
            this.divButton.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","desktop",950,700,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divContents.form.edtInpId","value","dsList","INPT_EMP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divContents.form.edtInqCnt","value","dsList","INQ_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divContents.form.edtTitle","value","dsList","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("boardPu.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	boardPu.xfdl
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
        this.fvAnswYn	 = ""; //답변유무
        this.fvOpenType  = ""; //오픈상태
        this.fvTitle  	 = ""; //게시판 타이틀
        this.fvInputId 	 = ""; //작성자ID
        this.fvInputEmpNo= ""; //작성자EMP_NO
        this.fvBoardCd   = ""; //게시판코드
        this.fvNotiNo    = ""; //게시물넘버
        this.fvHrank	 = ""; //상위게시물넘버
        this.fvAnswLvl   = ""; //답변레벨
        this.fvLoginUser = ""; //로그인유저ID
        this.fvFileId    = ""; //파일아이디

        this.fvCard		 = ""; //카드형 구분
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	//받아온값 세팅
        	this.fvApndYn    = this.getOwnerFrame().pvApndYn;
        	this.fvAnswYn    = this.getOwnerFrame().pvAnswYn;
        	this.fvOpenType  = this.getOwnerFrame().pvOpenType;
        	this.fvTitle  	 = this.getOwnerFrame().pvTitle;
        	this.fvInputId 	 = this.getOwnerFrame().pvInputId;
        	this.fvInputEmpNo= nexacro.getApplication().gdsUser.getColumn(0,"USER_NAME")
        						+"(" + nexacro.getApplication().gdsUser.getColumn(0, "EMP_NO")+ ")";
        	this.fvBoardCd   = this.getOwnerFrame().pvBoardCd;
        	this.fvNotiNo    = this.getOwnerFrame().pvNotiNo;
        	this.fvHrank	 = this.getOwnerFrame().pvHrank;
        	this.fvAnswLvl   = this.getOwnerFrame().pvAnswLvl;
        	this.fvContTitle = this.getOwnerFrame().pvContTitle;
        	this.fvCont		 = this.getOwnerFrame().pvCont;
        	this.fvLoginUser = nexacro.getApplication().gdsUser.getColumn(0, "USER_ID");

        	this.fvCard		= this.getOwnerFrame().pvCard;		//카드형

        	//formSize조정
        	this.fnSetFormInit();

        	// 웹브라우저 객체에 Web Editor 생성
        	if(this.divContents.form.divCont.form.webEditor.visible){
        		var oWeb = this.divContents.form.divCont.form.webEditor;
        		this.gfnCreateWebEditor(oWeb);
        	}
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //파일업로드
        this.fnFileUploadTran = function ()
        {
        	this.futFile.setPostData("BOARD_CD", this.fvBoardCd);
        	this.futFile.setPostData("FILE_ID" , this.fvFileId);

        	this.futFile.upload("svcUrl::boardFileUpload.do");
        };

        //내용저장
        this.fnTranSave = function ()
        {
        	var strSvcId    = "saveBoardContents";
        	var strSvcUrl   = "saveBoardContents.do";
        	var inData      = "dsList=dsList:A";
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

        //내용삭제
        this.fnTranDelete = function ()
        {
        	var strSvcId    = "delete";
        	var strSvcUrl   = "saveBoardContents.do";
        	var inData      = "dsList=dsList:A";
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
        		case "saveBoardContents":
        			//저장
        			this.gfnAlert("msg.save.success", [], "saveAfter", "fnMsgCallback");
        			break;
        		case "delete":
        			//삭제
        			this.gfnAlert("msg.delete.success", [], "deleteAfter", "fnMsgCallback");
        			break;
        		default:
        			break;
        	}
        };

        //message callback
        this.fnMsgCallback = function (sMsgId, sRtn)
        {
        	switch(sMsgId) {
        		case "delete":
        			if(this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false){
        				return;
        			}
        			this.dsList.setColumn(0, "STATUS", "delete");
        			this.fnTranDelete();
        			break;
        		case "saveAfter":
        		case "deleteAfter":
        			if (sRtn)
        			{
        				this.close("card");
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
        	this.staBoardTitle.set_text(this.fvTitle+" ");
        	this.resetScroll();

        	//첨부파일 사용하지 않는 게시판 가리기
        	if(this.fvApndYn=="0"){
        		this.divContents.form.divFile.set_height(0);
        		this.divContents.form.divCont.set_bottom(0);
        		this.divContents.form.resetScroll();
        	}

        	//입력일 경우 삭제버튼 가리기
        	if(this.fvOpenType == "add"){
        		this.divButton.form.btnDelete.set_visible(false);
        		//입력일 경우 받아온 데이터셋 세팅
        		this.fnSetDataset();
        	}
        };

        //데이터셋 세팅
        this.fnSetDataset = function ()
        {
        	//데이터셋 설정
        	this.dsList.clearData();
        	var nRow = this.dsList.addRow();
        	this.dsList.setColumn(nRow, "BLBD_CD" 		 , this.fvBoardCd);
        	this.dsList.setColumn(nRow, "NOTI_NO" 		 , this.fvNotiNo);
        	this.dsList.setColumn(nRow, "INQ_CNT"		 , 0);
        	this.dsList.setColumn(nRow, "ANSW_YN"		 , this.fvAnswYn)
        	this.dsList.setColumn(nRow, "INPT_EMP_NO"	 , this.fvInputEmpNo);
        	this.dsList.setColumn(nRow, "INPT_ID" 		 , this.fvInputId);
        	this.dsList.setColumn(nRow, "STATUS"  		 , this.fvOpenType);
        	this.dsList.setColumn(nRow, "HRANK_NOTI_NO"  , this.fvHrank);
        	this.dsList.setColumn(nRow, "ANSW_LEVL"  	 , this.fvAnswLvl);
        	this.dsList.setColumn(nRow, "DEL_YN"		 , "0");
        	this.dsList.setColumn(nRow, "STATUS"		 , this.fvOpenType);
        	this.dsList.setColumn(nRow, "TITLE"			 , this.fvContTitle);

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

        //div사이즈 조절
        this.fnFileInit = function ()
        {
        	var nRowCnt = this.dsUpload.getRowCount();
        	if(nRowCnt == 0 ) nRowCnt = 1;
        	var nHeigth = ( 32 * nRowCnt ) + 39;

        	this.divContents.form.divFile.set_height(nHeigth);
        	this.divContents.form.resetScroll();

        	var nDivMainHeight = this.divContents.form.divFile.getOffsetBottom()+5;
        	this.divContents.set_height(nDivMainHeight);
        	this.resetScroll();
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        //웹브라우저 온로드 컴플리트
        this.divContents_divCont_webEditor_onloadcompleted = function(obj,e)
        {

        };

        this.isLoad=false;
        //웹브라우저 유저노티
        this.divContents_divCont_webEditor_onusernotify = function(obj,e)
        {
        	if (e.userdata=="instanceReady" && !this.isLoad){
        		this.isLoad=true;
        		obj.callMethod("init", obj.getOffsetHeight()-40);
        		this.setTimer(0,300);
        	}
        };


        //삭제버튼클릭
        this.divButton_btnDelete_onclick = function(obj,e)
        {
        	this.gfnAlert("confirm.before.delete",[],"delete", "fnMsgCallback");
        };

        //저장버튼클릭
        this.divButton_btnSave_onclick = function(obj,e)
        {
        	var sCont = "";
        	if(this.divContents.form.divCont.form.webEditor.visible){
        		sCont = this.divContents.form.divCont.form.webEditor.callMethod("getData");
        	}else if(this.divContents.form.divCont.form.txa00.visible){
        		sCont = this.divContents.form.divCont.form.txa00.value;
        		sCont = this.gfnIsNull(sCont) ? "" : nexacro.replaceAll(sCont,"\n", "<br>");
        	}

        	this.dsList.setColumn(0, "CNTN", sCont);

        	// 정합성 체크
        	this.gfnClearValidation(this.dsList);

        	this.gfnSetValidation(this.dsList, "TITLE", "제목"	, "required");
        	this.gfnSetValidation(this.dsList, "CNTN" , "내용"	, "required");

        	// Dataset의 변경된 Row Validation check
        	if (this.gfnValidation(this.dsList, "U") == false) return;

        	if(this.fvOpenType == "add"){
        		if(this.futFile.filelist.length > 0){
        			this.fnFileUploadTran();
        		}else{
        			this.fnTranSave();
        		}
        	}
        };

        //닫기버튼클릭
        this.divButton_btnClose_onclick = function(obj,e)
        {
        	if(!this.fvCard){
        		this.close("card");
        	}else{
        		this.close("card");
        	}
        };

        //첨부파일 삭제 버튼 클릭
        this.divContents_divFile_grdFile_oncellclick = function(obj,e)
        {
        	var nRow = e.row;
        	if(e.cell == 1){
        		if(this.fvOpenType=="add"){
        			//입력모드일경우 지금 첨부된 파일이므로 그냥 삭제
        			var sFileNm = this.dsUpload.getColumn(nRow, "OTXT_FILE_NM");
        			this.futFile.removeFile(sFileNm);
        			this.dsUpload.deleteRow(nRow);
        		}
        	}

        	this.fnFileInit();
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

        //첨부파일 전체 삭제
        this.divContents_divFile_btnFileDel_onclick = function(obj,e)
        {
        	if(this.fvOpenType=="add"){
        		//입력모드일경우 지금 첨부된 파일이므로 그냥 삭제
        		this.futFile.clearFileList();
        		this.dsUpload.deleteAll();
        	}
        	this.fnFileInit();
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
        		this.divContents.form.edtTitle.setFocus();
        		var sCntn = this.fvCont;
        		if(!this.gfnIsNull(sCntn)){
        			this.divContents.form.divCont.form.webEditor.callMethod("setData", sCntn);
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ontimer",this.bizBoardInputPopup_ontimer,this);
            this.divContents.form.divCont.form.webEditor.addEventHandler("onloadcompleted",this.divContents_divCont_webEditor_onloadcompleted,this);
            this.divContents.form.divCont.form.webEditor.addEventHandler("onusernotify",this.divContents_divCont_webEditor_onusernotify,this);
            this.divContents.form.divFile.form.btnFileDel.addEventHandler("onclick",this.divContents_divFile_btnFileDel_onclick,this);
            this.divContents.form.divFile.form.btnFile.addEventHandler("onclick",this.divContents_divFile_btnFile_onclick,this);
            this.divContents.form.divFile.form.grdFile.addEventHandler("oncellclick",this.divContents_divFile_grdFile_oncellclick,this);
            this.divContents.form.divFile.form.grdFile.addEventHandler("ondrop",this.divContents_divFile_grdFile_ondrop,this);
            this.divButton.form.btnClose.addEventHandler("onclick",this.divButton_btnClose_onclick,this);
            this.divButton.form.btnSave.addEventHandler("onclick",this.divButton_btnSave_onclick,this);
            this.divButton.form.btnDelete.addEventHandler("onclick",this.divButton_btnDelete_onclick,this);
            this.fdgFile.addEventHandler("onclose",this.fdgFile_onclose,this);
            this.futFile.addEventHandler("onsuccess",this.futFile_onsuccess,this);
            this.futFile.addEventHandler("onerror",this.futFile_onerror,this);
        };
        this.loadIncludeScript("boardPu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
