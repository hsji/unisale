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
                this._setFormPosition(1200,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj.getSetter("firefirstcount").set("0");
            obj._setContents("<ColumnInfo><Column id=\"CLIENT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CLIENT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SCHD_FDATE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHD_TDATE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHD_FDATE_FORMAT\" type=\"STRING\" size=\"256\"/><Column id=\"SCHD_TDATE_FORMAT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.getSetter("firefirstcount").set("0");
            obj._setContents("<ColumnInfo><Column id=\"PRJT_CODE\" type=\"string\" size=\"32\"/><Column id=\"SALES_USER\" type=\"string\" size=\"32\"/><Column id=\"CLIENT_NAME\" type=\"string\" size=\"32\"/><Column id=\"USER_EMAIL\" type=\"string\" size=\"32\"/><Column id=\"REF_URL\" type=\"string\" size=\"32\"/><Column id=\"USER_NAME\" type=\"string\" size=\"32\"/><Column id=\"USER_TEL\" type=\"string\" size=\"32\"/><Column id=\"KORN_NM\" type=\"string\" size=\"32\"/><Column id=\"CLIENT_CODE\" type=\"string\" size=\"32\"/><Column id=\"SALES_TYPE_CODE\" type=\"string\" size=\"32\"/><Column id=\"REMK\" type=\"string\" size=\"32\"/><Column id=\"PRJT_NAME\" type=\"string\" size=\"32\"/><Column id=\"USER_CELL\" type=\"string\" size=\"32\"/><Column id=\"SALES_STATUS\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"PRJT_CODE\" type=\"string\" size=\"32\"/><Column id=\"SCHD_CODE\" type=\"string\" size=\"32\"/><Column id=\"SCHD_TITLE\" type=\"string\" size=\"32\"/><Column id=\"REMK\" type=\"string\" size=\"32\"/><Column id=\"SCHD_STATUS\" type=\"string\" size=\"32\"/><Column id=\"SCHD_SDATE\" type=\"string\" size=\"32\"/><Column id=\"SCHD_EDATE\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj._setContents("<ColumnInfo><Column id=\"PRJT_CODE\" type=\"string\" size=\"32\"/><Column id=\"OTXT_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_SIZE\" type=\"int\" size=\"4\"/><Column id=\"SCHD_CODE\" type=\"string\" size=\"32\"/><Column id=\"FILE_ID\" type=\"string\" size=\"32\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"32\"/><Column id=\"SAVE_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_SEQ\" type=\"int\" size=\"4\"/><Column id=\"FILE_PATH_NM\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetailCond", this);
            obj.getSetter("firefirstcount").set("0");
            obj._setContents("<ColumnInfo><Column id=\"PRJT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SCHD_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Static("staCdNm","339","12","110","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("고객명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCdNm","staCdNm:0","12","198","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10","48","28","25",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new PeriodCalendar("PFromToCal","86","12","250","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","12","86","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("등록일자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","50","397","43",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("할동 프로젝트리스트");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","staTitle00:0","40%",null,null,"16",null,null,"250",null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsList");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.getSetter("uFunction").set("filter,sort,!colfix,!initial,find");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"124\"/><Column size=\"176\"/><Column size=\"140\"/><Column size=\"127\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"프로젝트 코드\"/><Cell col=\"1\" text=\"고객명\"/><Cell col=\"2\" text=\"형태\"/><Cell col=\"3\" text=\"담담영업\"/></Band><Band id=\"body\"><Cell text=\"bind:PRJT_CODE\"/><Cell col=\"1\" text=\"bind:CLIENT_NAME\"/><Cell col=\"2\" text=\"bind:SALES_TYPE_CODE\"/><Cell col=\"3\" text=\"bind:KORN_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divCmmnBtn",null,"55","467","33","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"3","72","28","75",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("0");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Add");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"3","72","28","0",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("1");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Delete");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Grid("grdDetail","grdMaster:20","93",null,null,"20","16",null,null,"250",null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsDetail");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.getSetter("uFunction").set("filter,sort,!colfix,!initial,find");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"87\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"366\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"일정명\"/><Cell col=\"1\" text=\"상태\"/><Cell col=\"2\" text=\"시작일\"/><Cell col=\"3\" text=\"종료일\"/><Cell col=\"4\" text=\"내용\"/></Band><Band id=\"body\"><Cell text=\"bind:SCHD_CODE\"/><Cell col=\"1\" text=\"bind:SCHD_STATUS\"/><Cell col=\"2\" text=\"bind:SCHD_SDATE\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"####-##-##\"/><Cell col=\"3\" text=\"bind:SCHD_EDATE\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"####-##-##\"/><Cell col=\"4\" text=\"bind:SCHD_TITLE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00_00","grdMaster:20","50","397","43",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("일정 내역");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCmmnBtn.form
            obj = new Layout("default","",0,0,this.divCmmnBtn.form,function(p){});
            this.divCmmnBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1200,736,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtCdNm","value","dsCond","CLIENT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSearch.form.PFromToCal.form.calFrom","value","dsCond","SCHD_FDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSearch.form.PFromToCal.form.calTo","value","dsCond","SCHD_TDATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("salesScheduleMgFm.xfdl", function() {
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
        			 {biztype : "Grid" , code : "SM28", objid : this.grdMaster, bindcolumn:"SALES_TYPE_CODE"}		// 프로젝트구분
        			, {biztype : "Grid" , code : "SM30", objid : this.grdDetail, bindcolumn:"SCHD_STATUS"}		// 프로젝트스케쥴상태
        			, {biztype : "Grid" , code : "SM29", objid : this.grdDetail, bindcolumn:"SCHD_CODE"}		// 프로젝트구분

        			  //{biztype : "Combo", code : "SM27", objid : this.divDetail.form.cboType}							// 업종
        	];
        	this.gfnGetCommonCode(param);

        	// 버튼 권한 제어
        	this.gfnSetCommBtn(this.divCmmnBtn);

        	//날짜세팅
        	var sToday = this.gfnGetDate();
        	this.divSearch.form.PFromToCal.setFromDate(this.gfnAddDate(sToday,-15));
        	this.divSearch.form.PFromToCal.setToDate(sToday);
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
        	var sTitle  = "프로젝트 추가";
        	var oArg    = { pType : "add" };
        	var oOption = {title:sTitle
        				,titlebar:true};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("salesScheduleMasterPu", "sales::pre/salesScheduleMasterPuFm.xfdl", oArg, sPopupCallBack, oOption);
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
        	if (this.gfnDsIsUpdated(this.dsList) == false && this.gfnDsIsUpdated(this.dsDetail) == false) {
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
        this.fndateFormat = function (s)
        {
        	return s.substr(0,4) + "-" + s.substr(4,2) + "-" + s.substr(6,2);
        };
        this.fnTranSearch = function ()
        {
        	if(this.fnSearchValidation() == false) return;

        	var s = this.dsCond.getColumn(0, "SCHD_FDATE");
        	var e = this.dsCond.getColumn(0, "SCHD_TDATE");

        	this.dsCond.setColumn(0, "SCHD_FDATE_FORMAT", this.fndateFormat(s) + " 00:00:00");
        	this.dsCond.setColumn(0, "SCHD_TDATE_FORMAT", this.fndateFormat(e) + " 23:59:59");

        	// 조회-대분류
        	this.dsList.clearData();

        	var strSvcId    = "searchProjectList";
        	var strSvcUrl   = "searchProjectList.do";
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

        //detail 조회
        this.fnTranDetailSearch = function (row)
        {
        	this.dsDetailCond.setColumn(0, "PRJT_CODE", this.dsList.getColumn(row, "PRJT_CODE"));

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
        		case "searchProjectDetailList":
        			break;
        		case "saveProjectInfo":
        			this.fnTranSearch();
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
        //조회조건 validation
        this.fnSearchValidation = function ()
        {
        	// 정합성 체크
        	this.gfnClearValidation(this.dsCond);

        	this.gfnSetValidation(this.dsCond, "SCHD_FDATE", "기간"	, "required");
        	this.gfnSetValidation(this.dsCond, "SCHD_TDATE"	, "기간"	, "required");

        	// Dataset의 변경된 Row Validation check
        	if (this.gfnValidation(this.dsCond, "A") == false) return false;
        	else return true;
        };

        //디테일 - validation
        this.fnValid = function ()
        {
        	// 정합성 체크
        	this.gfnClearValidation(this.dsList);

        	this.gfnSetValidation(this.dsList, "CLIENT_CODE", "고객 코드"	, "required");
        	this.gfnSetValidation(this.dsList, "CLIENT_NAME", "고객명"	, "required");
        	this.gfnSetValidation(this.dsList, "CLIENT_TYPE", "업종구분"	, "required");

        	// Dataset의 변경된 Row Validation check
        	if (this.gfnValidation(this.grdMaster, "U") == false) return;
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

        this.fnSetTelGridMask = function(tel) {
        	var mask = "###-####-####";
        	if(tel) {
        		if(tel.length == 9) {
        			mask = "##-###-####";
        		} else if(tel.length == 10) {
        			if(tel.substr(0,2) == "02") {
        				mask = "##-###-####";
        			} else {
        				mask = "###-###-####";
        			}
        		}
        	} else {
        		mask = "";
        	}

        	return mask;
        };

        this.dsList_onrowposchanged = function(obj,e)
        {
        	this.fnTranDetailSearch(e.newrow);
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

        this.divCmmnBtn_btnAdd_onclick = function(obj,e)
        {
        	var sTitle  = "프로젝트 할동 추가";
        	var oArg    = { pType : "add",
        					pCustCode : this.dsList.getColumn(this.dsList.rowposition, "CLIENT_CODE"),
        					pCustName : this.dsList.getColumn(this.dsList.rowposition, "CLIENT_NAME"),
        					pPrjCode : this.dsList.getColumn(this.dsList.rowposition, "PRJT_CODE"),
        					pPrjName : this.dsList.getColumn(this.dsList.rowposition, "PRJT_NAME")
        				};
        	var oOption = {title:sTitle
        				,titlebar:true};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("salesScheduleDetailPu", "sales::pre/salesScheduleDetailPuFm.xfdl", oArg, sPopupCallBack, oOption);

        };

        this.divCmmnBtn_btnDel_onclick = function(obj,e)
        {

        };


        this.grdMaster_oncelldblclick = function(obj,e)
        {
        	var sTitle  = "프로젝트 변경";
        	var oArg    = { pType : "update",
        					pRow : this.dsList.rowposition
        				};
        	var oOption = {title:sTitle
        				,titlebar:true};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("salesScheduleMasterPu", "sales::pre/salesScheduleMasterPuFm.xfdl", oArg, sPopupCallBack, oOption);

        };

        this.grdDetail_oncelldblclick = function(obj,e)
        {
        	var sTitle  = "프로젝트 할동 변경";
        	var oArg    = { pType : "update",
        					pCustCode : this.dsList.getColumn(this.dsList.rowposition, "CLIENT_CODE"),
        					pCustName : this.dsList.getColumn(this.dsList.rowposition, "CLIENT_NAME"),
        					pPrjCode : this.dsList.getColumn(this.dsList.rowposition, "PRJT_CODE"),
        					pPrjName : this.dsList.getColumn(this.dsList.rowposition, "PRJT_NAME"),
        					pSchedCode : this.dsDetail.getColumn(this.dsDetail.rowposition, "SCHD_CODE")
        				};
        	var oOption = {title:sTitle
        				,titlebar:true};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("salesScheduleDetailPu", "sales::pre/salesScheduleDetailPuFm.xfdl", oArg, sPopupCallBack, oOption);

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.grdMaster.addEventHandler("oncelldblclick",this.grdMaster_oncelldblclick,this);
            this.divCmmnBtn.form.btnAdd.addEventHandler("onclick",this.divCmmnBtn_btnAdd_onclick,this);
            this.divCmmnBtn.form.btnDel.addEventHandler("onclick",this.divCmmnBtn_btnDel_onclick,this);
            this.grdDetail.addEventHandler("oncelldblclick",this.grdDetail_oncelldblclick,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
        };
        this.loadIncludeScript("salesScheduleMgFm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
