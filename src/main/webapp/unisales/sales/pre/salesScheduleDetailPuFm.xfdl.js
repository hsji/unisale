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
                this._setFormPosition(870,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDetailCond", this);
            obj.getSetter("firefirstcount").set("0");
            obj._setContents("<ColumnInfo><Column id=\"CLIENT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CLIENT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRJT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRJT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SCHD_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj.getSetter("firefirstcount").set("0");
            obj._setContents("<ColumnInfo><Column id=\"PRJT_CODE\" type=\"string\" size=\"32\"/><Column id=\"SCHD_CODE\" type=\"string\" size=\"32\"/><Column id=\"SCHD_TITLE\" type=\"string\" size=\"32\"/><Column id=\"REMK\" type=\"string\" size=\"32\"/><Column id=\"SCHD_STATUS\" type=\"string\" size=\"32\"/><Column id=\"SCHD_SDATE\" type=\"string\" size=\"32\"/><Column id=\"SCHD_EDATE\" type=\"string\" size=\"32\"/><Column id=\"CLIENT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CLIENT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRJT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj._setContents("<ColumnInfo><Column id=\"PRJT_CODE\" type=\"string\" size=\"32\"/><Column id=\"OTXT_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_SIZE\" type=\"int\" size=\"4\"/><Column id=\"SCHD_CODE\" type=\"string\" size=\"32\"/><Column id=\"FILE_ID\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"SAVE_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_SEQ\" type=\"int\" size=\"4\"/><Column id=\"FILE_PATH_NM\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fdgFile", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("futFile", this);
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fdtFile", this);
            obj.set_url("svcUrl::fileDownload.do");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("edtCustomer","149","60","161","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("essential");
            obj.getSetter("uUse").set("false");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","25","5",null,"43","284",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("프로젝트 활동");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","30","60","106","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("고객명");
            obj.set_cssclass("sta_WF_LabelnoLine");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","313","60","106","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("프로젝트명");
            obj.set_cssclass("sta_WF_LabelnoLine");
            this.addChild(obj.name, obj);

            obj = new Edit("edtProjectName","433","60",null,"24","25",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_maxlength("10");
            obj.set_inputtype("digit,alpha");
            obj.set_cssclass("essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01","30","92","106","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("프로젝트코드");
            obj.set_cssclass("sta_WF_LabelnoLine");
            this.addChild(obj.name, obj);

            obj = new Edit("edtProjectCode","149","92","161","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_imemode("alpha");
            obj.set_maxlength("30");
            obj.set_cssclass("essential");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01","30","125","106","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("스케쥴 구분");
            obj.set_cssclass("sta_WF_LabelnoLine");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00","30","158","106","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_LabelnoLine");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUserNmEng00_00","149","158",null,"24","25",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_imemode("alpha");
            obj.set_maxlength("30");
            this.addChild(obj.name, obj);

            obj = new Combo("cboSchedule","149","125",null,"24","560",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("essential");
            obj.set_text("cbo00");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("webEditor","150","193",null,null,"25","196",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_border("1px solid #cccccc");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa00","92","320","28","40",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_01_01","30","193","106","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_LabelnoLine");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"659","68","28","74",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("저장");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_CrudSave");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"659","50","28","20",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("닫기");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnFileDel",null,"514","62","22","25",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("전체삭제");
            obj.set_cssclass("btn_WF_Detail");
            this.addChild(obj.name, obj);

            obj = new Button("btnFile",null,"514","62","22","btnFileDel:5",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("파일찾기");
            obj.set_cssclass("btn_WF_Detail");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFile","150","543",null,"102","25",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_MF_Notice");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"614\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell text=\"bind:OTXT_FILE_NM\"/><Cell col=\"1\" text=\"삭제\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_01_01_00","30","544","106","24",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_LabelnoLine");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","313","92","106","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("일자");
            obj.set_cssclass("sta_WF_LabelnoLine");
            this.addChild(obj.name, obj);

            obj = new PeriodCalendar("PFromToCal","433","92","250","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_01","313","125","106","24",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("상태구분");
            obj.set_cssclass("sta_WF_LabelnoLine");
            this.addChild(obj.name, obj);

            obj = new Combo("cboScheduleStatus","432","125",null,"24","277",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("essential");
            obj.set_text("cbo00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",870,700,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","cboSchedule","value","dsDetail","SCHD_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtUserNmEng00_00","value","dsDetail","SCHD_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","PFromToCal.form.calFrom","value","dsDetail","SCHD_SDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","PFromToCal.form.calTo","value","dsDetail","SCHD_EDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cboScheduleStatus","value","dsDetail","SCHD_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("salesScheduleDetailPuFm.xfdl", function() {
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
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	//공통코드
        	var param = [
        			  {biztype : "Combo", code : "SM29", objid : this.cboSchedule}							// 스케쥴
        			  ,{biztype : "Combo", code : "SM30", objid : this.cboScheduleStatus}			// 스케쥴상태
        	];

        	this.pType  = this.getOwnerFrame().pType;

        	this.edtCustomer.set_value(this.getOwnerFrame().pCustName);
        	this.edtProjectName.set_value(this.getOwnerFrame().pPrjName);

        	if(this.pType == "add") {
        		this.dsDetail.addRow();
        		this.dsDetail.setColumn(0, "PRJT_CODE",	this.getOwnerFrame().pPrjCode);
        		this.dsDetail.setColumn(0, "CLIENT_CODE",	this.getOwnerFrame().pCustCode);

        		var sToday = this.gfnGetDate();
        		this.dsDetail.setColumn(0, "SCHD_SDATE",	sToday);
        		this.dsDetail.setColumn(0, "SCHD_EDATE",	sToday);
        	} else if(this.pType == "update") {
        		this.dsDetailCond.setColumn(0, "PRJT_CODE",	this.getOwnerFrame().pPrjCode);
        		this.dsDetailCond.setColumn(0, "CLIENT_CODE",	this.getOwnerFrame().pCustCode);
        		this.dsDetailCond.setColumn(0, "SCHD_CODE",	this.getOwnerFrame().pSchedCode);

        		this.fnTranSearch();
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
        		var ds = this.opener.dsDetail;
        		var combods = this[this.cboSchedule.innerdataset];
        		for(var i=0;i<ds.rowcount;i++) {
        			var nRow = combods.findRow("SSC_CD", ds.getColumn(i, "SCHD_CODE"));
        			if(nRow>=0) {
        				combods.deleteRow(nRow);
        			}
        		}
        	} else {
        		this.cboSchedule.set_enable(false);
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
        	if (this.gfnDsIsUpdated(this.dsList) == false && this.gfnDsIsUpdated(this.dsList) == false) {
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
        	var strSvcId    = "searchProjectDetailList";
        	var strSvcUrl   = "searchProjectDetailList.do";
        	var inData      = "dsDetailCond=dsDetailCond";
        	var outData     = "dsDetail=dsDetail dsFile=dsFile";
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
        	sCont = this.webEditor.callMethod("getData");
        	this.dsDetail.setColumn(0, "REMK", sCont);

        	if(this.gfnDsIsUpdated(this.dsDetail) == false){
        		return;
        	}

        	var strSvcId    = "saveProjectDetailInfo";
        	var strSvcUrl   = "saveProjectDetailInfo.do";
        	var inData      = "dsDetail=dsDetail:U";
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
        	var strSvcId    = "deleteSalesFile";
        	var strSvcUrl   = "deleteSalesFile.do";
        	var inData      = "dsList=dsFile:U";
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

        //파일업로드
        this.fnFileUploadTran = function ()
        {
        	var PRJT_CODE = this.dsDetail.getColumn(0,"PRJT_CODE");
        	var SCHD_CODE = this.dsDetail.getColumn(0, "SCHD_CODE");

        	this.futFile.setPostData("PRJT_CODE", PRJT_CODE);
        	this.futFile.setPostData("SCHD_CODE" , SCHD_CODE);

        	this.futFile.upload("svcUrl::saleFileUpload.do");
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
        		case "saveCustomerInfo":
        			this.fnTranSearch();
        			break;
        		case "saveProjectDetailInfo":
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
        		case "deleteFileUpdate":
        			if(this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false){
        				return;
        			}
        			var nRow 	 = this.dsFile.rowposition;
        			var nRowType = this.dsFile.getRowType(nRow);
        			var sFileNm  = this.dsFile.getColumn(nRow, "OTXT_FILE_NM");

        			this.dsFile.deleteRow(nRow);
        			this.fnTranDeleteFile();
        			break;
        		case "deleteFileAllUpdate":
        			//입력모드일경우 지금 첨부된 파일이므로 그냥 삭제
        			var nCount = this.dsFile.getCaseCount('dataset.getRowType(rowidx)==2');
        			var nTotalCnt = this.dsFile.getRowCount();
        			if ( nCount > 0 ){
        				this.futFile.clearFileList();
        			}
        			this.dsFile.deleteAll();
        			if( nCount == nTotalCnt){
        				this.fnFileInit();
        			}else{
        				this.fnTranDeleteFile();
        			}
        			break;
        		default: break;
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        //조회
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.cfnSearch(); //조회
        };


        this.fud00_onitemchanged = function(obj,e)
        {
        	var items = obj._items;
        	var ds = this.dsList;
        	if(items[0] && items[0]._files && items[0]._files[0]) {
        		var reader = new FileReader();
        		reader.readAsDataURL(items[0]._files[0]);
        		reader.onload = function(e) {
        			ds.setColumn(0, "CLIENT_PIC", e.target.result);
        		};
        	}
        };

        this.divCmmnBtn_btnExcelDown_onclick = function(obj,e)
        {
        	// 엑셀 상단 타이틀 텍스트 설정
        	var sSubTitle = this.staTitle00.text;

        	// Excel Export 공통함수 호출
        	this.gfnExcelExport(this.grdMaster, sSubTitle, sSubTitle, "EXCEL2007","",sSubTitle, true, "");
        };

        this.divContents_divFile_btnFile_onclick = function(obj,e)
        {
        	this.fdgFile.open("file upload..", FileDialog.MULTILOAD);
        };

        this.fdgFile_onclose = function(obj,e)
        {
        	if( e.reason == 3 ){
        		//멀티업로드일경우
        		this.fnSetFile(e.virtualfiles);
        	}
        };


        //div사이즈 조절
        this.fnFileInit = function ()
        {
        	return;	// 팝업이라 무작정 늘림 안됨.
        	var nRowCnt = this.dsFile.getRowCount();
        	if(nRowCnt == 0 ) nRowCnt = 1;
        	var nHeigth = ( 32 * nRowCnt ) + 39;

        	this.grdFile.set_height(nHeigth);
        	this.resetScroll();
        };


        //파일세팅
        this.fnSetFile = function (aVFiles)
        {
        	var nLen = aVFiles.length;

        	var sFileId = "";
        	var oFile = null;
        		console.log(aVFiles);
        	for(var i=0; i<nLen; i++){
        		sFileId = aVFiles[i].filename;
        		oFile   = aVFiles[i];

        		//중복확인
        		if(this.futFile.existFile(oFile)){
        			sFileId += "_" + this.dsFile.getRowCount();
        		}
        		console.log(sFileId);
        		this.futFile.addFile(sFileId, oFile);
        		var nRow = this.dsFile.addRow();
        		this.dsFile.setColumn(nRow, "OTXT_FILE_NM", sFileId);
        	}

        	this.fnFileInit();
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
        	if(this.gfnDsIsUpdated(this.dsDetail)){
        		this.fnTranSave();
        	} else {
        			this.opener.fnTranSearch();
        			this.close();
        	}
        };

        this.divContents_divFile_btnFileDel_onclick = function(obj,e)
        {
        	this.gfnAlert("confirm.before.filedeleteall",[],"deleteFileAllUpdate", "fnMsgCallback");
        };

        this.divButton_btnSave_onclick = function(obj,e)
        {
        	var sCont = "";
        	if(this.webEditor.visible){
        		sCont = this.webEditor.callMethod("getData");
        	}else if(this.txa00.visible){
        		sCont = this.txa00.value;
        	}

        	this.dsDetail.setColumn(0, "REMK", sCont);

        	// 정합성 체크
        	this.gfnClearValidation(this.dsDetail);

        	this.gfnSetValidation(this.dsDetail, "SCHD_CODE" , "스케쥴구분"	, "required");
        	this.gfnSetValidation(this.dsDetail, "SCHD_STATUS" , "상태구분"	, "required");
        	this.gfnSetValidation(this.dsDetail, "SCHD_TITLE", "제목"	, "required");
        	this.gfnSetValidation(this.dsDetail, "REMK" , "내용"	, "required");

        	// Dataset의 변경된 Row Validation check
        	if (this.gfnValidation(this.dsDetail, "U") == false) return false;

        	if(!this.gfnDsIsUpdated(this.dsFile)&&!this.gfnDsIsUpdated(this.dsDetail)){
        			// 저장할 데이터가 없습니다.
        			this.gfnAlert("msg.save.nochange");
        			return;
        	}else{
        		if(this.gfnDsIsUpdated(this.dsFile)){
        			//file변경
        			if(this.futFile.filelist.length > 0){
        				this.fnFileUploadTran();
        			}
        		} else {
        			if(this.gfnDsIsUpdated(this.dsDetail)){
        				//내용변경
        				this.fnTranSave();
        			}
        		}
        	}
        };

        this.divButton_btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        this.webEditor_onusernotify = function(obj,e)
        {
        	if (e.userdata=="instanceReady" && !this.isLoad){
        		obj.callMethod("init", obj.getOffsetHeight()-20);
        		this.isLoad=true;
        		var sCntn = this.dsDetail.getColumn(0, "REMK");
        		if(!this.gfnIsNull(sCntn)){
        			this.webEditor.callMethod("setData", sCntn);
        		}
        	}
        };

        this.divContents_divFile_grdFile_oncellclick = function(obj,e)
        {
        	var nRow = e.row;
        	if(e.cell == 1){
        		var nStatus = this.dsFile.getRowType(nRow);
        		if( nStatus == 2){
        			//새로추가된 파일은 그냥 삭제
        			var sFileNm = this.dsFile.getColumn(nRow, "OTXT_FILE_NM");
        			this.futFile.removeFile(sFileNm);
        			this.dsFile.deleteRow(nRow);
        			this.fnFileInit();
        		}else{
        			//이미 서버에 저장된 파일은 파일 삭제 진행
        			this.gfnAlert("confirm.before.filedelete",[],"deleteFileUpdate", "fnMsgCallback");
        		}
        	} else if(e.cell == 0){
        		var sFileId 	= this.dsFile.getColumn(e.row, "FILE_ID");
        		var sFileNm 	= this.dsFile.getColumn(e.row, "OTXT_FILE_NM");
        		var sSaveFileNm = this.dsFile.getColumn(e.row, "SAVE_FILE_NM");
        		if( !this.gfnIsNull(sFileId)){
        			this.fdtFile.setPostData("saveFileName"	, sSaveFileNm);
        			this.fdtFile.setPostData("orgFileName"	, sFileNm);

        			this.fdtFile.set_downloadfilename(sFileNm)
        			this.fdtFile.download("svcUrl::fileDownload.do");
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.edtCustomer.addEventHandler("onkeyup",this.edtCode_onkeyup,this);
            this.webEditor.addEventHandler("onusernotify",this.webEditor_onusernotify,this);
            this.btnSave.addEventHandler("onclick",this.divButton_btnSave_onclick,this);
            this.btnClose.addEventHandler("onclick",this.divButton_btnClose_onclick,this);
            this.btnFileDel.addEventHandler("onclick",this.divContents_divFile_btnFileDel_onclick,this);
            this.btnFile.addEventHandler("onclick",this.divContents_divFile_btnFile_onclick,this);
            this.grdFile.addEventHandler("oncellclick",this.divContents_divFile_grdFile_oncellclick,this);
            this.grdFile.addEventHandler("ondrop",this.divContents_divFile_grdFile_ondrop,this);
            this.fdgFile.addEventHandler("onclose",this.fdgFile_onclose,this);
            this.futFile.addEventHandler("onsuccess",this.futFile_onsuccess,this);
            this.futFile.addEventHandler("onerror",this.futFile_onerror,this);
        };
        this.loadIncludeScript("salesScheduleDetailPuFm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
