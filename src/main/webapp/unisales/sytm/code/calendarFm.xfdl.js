(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("calendarFm");
            this.set_titletext("메세지관리");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PRESENT_DATE\" type=\"string\" size=\"255\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHGE_ID\" type=\"string\" size=\"32\"/><Column id=\"HOLIDAY_YN\" type=\"string\" size=\"32\"/><Column id=\"CHGE_IP\" type=\"string\" size=\"32\"/><Column id=\"PRESENT_DATE\" type=\"string\" size=\"32\"/><Column id=\"HOLIDAY_MEMO\" type=\"string\" size=\"32\"/><Column id=\"REMARK\" type=\"undefined\" size=\"0\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMsgType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">INF</Col><Col id=\"VALUE\">알림</Col></Row><Row><Col id=\"CODE\">ERR</Col><Col id=\"VALUE\">에러</Col></Row><Row><Col id=\"CODE\">WAN</Col><Col id=\"VALUE\">경고</Col></Row><Row><Col id=\"CODE\">CFN</Col><Col id=\"VALUE\">확인</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChkResultMsg", this);
            obj._setContents("<ColumnInfo><Column id=\"MSGE_CD\" type=\"string\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChkData", this);
            obj._setContents("<ColumnInfo><Column id=\"MSGE_CD\" type=\"string\" size=\"32\"/><Column id=\"MSGE_FLAG_CD\" type=\"string\" size=\"32\"/><Column id=\"KORN_MSGE\" type=\"string\" size=\"32\"/><Column id=\"ENGL_MSGE\" type=\"string\" size=\"32\"/><Column id=\"USED_YN\" type=\"string\" size=\"32\"/><Column id=\"INPT_ID\" type=\"string\" size=\"32\"/><Column id=\"INPT_DTTM\" type=\"datetime\" size=\"17\"/><Column id=\"INPT_IP\" type=\"string\" size=\"32\"/><Column id=\"CHGE_ID\" type=\"string\" size=\"32\"/><Column id=\"CHGE_DTTM\" type=\"datetime\" size=\"17\"/><Column id=\"CHGE_IP\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYN", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col><Col id=\"name\">휴일</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"name\">평일</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","12","98","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("기준년도");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo01","56","-158","185","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch_form_Combo01_innerdataset = new nexacro.NormalDataset("divSearch_form_Combo01_innerdataset", obj);
            divSearch_form_Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_Combo01_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo02","282","-158","185","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch_form_Combo02_innerdataset = new nexacro.NormalDataset("divSearch_form_Combo02_innerdataset", obj);
            divSearch_form_Combo02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_Combo02_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo03","521","-158","184","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch_form_Combo03_innerdataset = new nexacro.NormalDataset("divSearch_form_Combo03_innerdataset", obj);
            divSearch_form_Combo03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_Combo03_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","785","-158","184","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_value("20190308");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10","48","28","25",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("cal00","staTitle00:10","12","133","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy");
            obj.set_editformat("yyyy");
            obj.set_headformat("yyyy");
            obj.set_showyearspin("true");
            obj.set_type("spin");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","divSearch:0","342","43",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("휴일관리");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","0","staTitle01:0",null,null,"20","0",null,null,"250",null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj.getSetter("uFunction").set("filter,sort,!colfix,!initial,find");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"180\"/><Column size=\"112\"/><Column size=\"300\"/><Column size=\"440\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"일자\" cssclass=\"essential\"/><Cell col=\"1\" text=\"휴일여부\" cssclass=\"essential\"/><Cell col=\"2\" text=\"휴일메모\" cssclass=\"essential\"/><Cell col=\"3\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:PRESENT_DATE\" edittype=\"expr:dataset.getRowType(currow)==2?&apos;date&apos;:&apos;none&apos;\" displaytype=\"date\" editmaxlength=\"50\" editinputtype=\"digit,dot,english\" editinputmode=\"lower\" editimemode=\"alpha\" cssclass=\"expr:HOLIDAY_YN==&apos;Y&apos;?&apos;cell_WF_Red&apos;:&apos;&apos;\"/><Cell col=\"1\" text=\"bind:HOLIDAY_YN\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"dsYN\" combocodecol=\"code\" combodatacol=\"name\"/><Cell col=\"2\" text=\"bind:HOLIDAY_MEMO\" edittype=\"text\" displaytype=\"editcontrol\" editimemode=\"hangul\"/><Cell col=\"3\" text=\"bind:REMARK\" edittype=\"text\" displaytype=\"editcontrol\" editimemode=\"alpha\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W20");
            this.addChild(obj.name, obj);

            obj = new Div("divCmmnBtn",null,"divSearch:10","467","33","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelDown","348","0","119","28",null,null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("0");
            obj.set_text("엑셀다운로드");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelSave");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnCreate",null,"0","171","28","btnExcelDown:3",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("1");
            obj.set_text("년도데이터 재생성");
            obj.set_fittocontents("width");
            this.divCmmnBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCmmnBtn.form
            obj = new Layout("default","",0,0,this.divCmmnBtn.form,function(p){});
            this.divCmmnBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1050,736,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtMsgCd","value","dsCond","MSGE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboMsgType","value","dsCond","MSGE_FLAG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtMsgTxt","value","dsCond","MSGE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("calendarFm.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	codeMsgFm.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/01/26
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/01/26			TOBESOFT					최초생성
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

        	this.divSearch.form.cal00.set_value(this.gfnGetDate("date"));
        	// 버튼 권한 제어
        	this.gfnSetCommBtn(this.divCmmnBtn);
        };

        /*******************************************************************************************************************************
         * 공통버튼 영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	if (this.gfnDsIsUpdated(this.dsList)) {
        		// 검색을 진행하면 변경된 데이터가 사라집니다. \n계속 진행 하시겠습니까?
        		var sMsgId = "confirm.before.search";					//메세지ID
        		var arrArg = [""];										//메세지취환될값 배열[생략가능]
        		var sPopId = "search";									//메세지팝업ID[생략가능]	*해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
        		var sMsgCallback = "fnMsgCallback";						//메세지콜백[생략가능] 		* confirm성 메시지를 사용 시 반드시 필요

        		// 변경된 정보가 있습니다.\n저장 하시겠습니까?
        		this.gfnAlert(sMsgId, arrArg, sPopId, sMsgCallback);
        	}
        	else {
        		this.fnTranSearch();
        	}
        };

        //추가
        this.cfnAdd = function ()
        {
        	var nRow = this.dsList.addRow();
        	this.dsList.setColumn(nRow,'HOLIDAY_YN',"N");

        	this.grdList.setCellPos(0);
        	this.grdList.showEditor(true);

        };

        //삭제
        this.cfnDel = function ()
        {
        	if (this.dsList.rowcount == 0) {
        		return;
        	}

        	this.dsList.deleteRow(this.dsList.rowposition);
        };

        this.cfnSave = function ()
        {
        	// 변경된 정보없으면 리턴
        	if (this.gfnDsIsUpdated(this.dsList) == false) {
        		// 저장할 데이터가 없습니다.
        		this.gfnAlert("msg.save.nochange");
        		return;
        	}

        	// validation 체크 후
        	if (this.fnFormValidation()) {
        		// 서버 중복 체크
        		// 저장 하시겠습니까?
        		this.gfnAlert("confirm.save", [""], "save", "fnMsgCallback");

        	}
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        /**
         * @description    calendar 조회를 위한 transaction.
         * @param	N/A
         * @return 	N/A
         */
        this.fnTranSearch = function ()
        {
        	this.dsList.clearData();
        	this.dsCond.setColumn(0,"PRESENT_DATE", this.divSearch.form.cal00.value.substr(0,4));

        	var strSvcId    = "searchCalendarList";
        	var strSvcUrl   = "searchCalendarList.do";
        	var inData      = "dsCond=dsCond";
        	var outData     = "dsList=dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]
        };

        /**
         * @description    calendar 신규, 수정, 삭제 데이터 저장을 위한 transaction.
         * @param	N/A
         * @return 	N/A
         */
        this.fnTranSave = function ()
        {
        	// Insert, Update, Delete
        	var strSvcId    = "saveCalendarList";
        	var strSvcUrl   = "saveCalendarList.do";
        	var inData      = "dsList=dsList:U";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        /**
         * @description    calendar 생성을 위한 transaction.
         * @param	N/A
         * @return 	N/A
         */
        this.fnTranCreate = function ()
        {
        	this.dsCond.setColumn(0,"PRESENT_DATE", this.divSearch.form.cal00.value.substr(0,4));

        	// Insert, Update, Delete
        	var strSvcId    = "CreateCalendarList";
        	var strSvcUrl   = "CreateCalendarList.do";
        	var inData      = "dsCond=dsCond";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
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
        	switch (sSvcId)
        	{
        		case "searchCalendarList":
        			break;
        		case "CreateCalendarList":
        			this.fnTranSearch();
        			break;
        		case "saveCalendarList":
        			break;
        		case "Save":
        			this.fnTranSearch();
        			break;
        	}
        };

        //message callback
        this.fnMsgCallback = function (sPopupId, sRtn)
        {
        	// 저장 하시겠습니까?
        	if (sPopupId == "createCal") {
        		if (this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false) {
        			return;
        		}
        		else {
        			// 데이터 저장 서비스를 호출한다.
        			this.fnTranCreate();
        		}
        	}
        	// 검색을 진행하면 변경된 데이터가 사라집니다. \n계속 진행 하시겠습니까?
        	else if (sPopupId == "search") {
        		if (this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false) {
        			return;
        		}
        		else {
        			// 조회
        			this.fnTranSearch();
        		}
        	}
        	// 저장 하시겠습니까?
        	else if (sPopupId == "save") {
        		if (this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false) {
        			return;
        		}
        		else {
        			// 조회
        			this.fnTranSave();
        		}
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
        this.fnFormValidation = function ()
        {
        	// 정합성 체크
        	this.gfnClearValidation(this.dsList);

        	this.gfnSetValidation(this.dsList, "PRESENT_DATE", "일자"	, "required");
        	this.gfnSetValidation(this.dsList, "HOLIDAY_YN", "휴일여부"	, "required");

        	// Dataset의 변경된 Row Validation check
        	if (this.gfnValidation(this.grdList, "U") == false) return false;
        	else return true;
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.cfnSearch();
        };

        this.Common_onkeyup = function(obj,e)
        {
        	if (e.keycode == 13) {
        		this.cfnSearch();
        	}
        };

        this.dsList_onrowposchanged = function(obj,e)
        {
        	var nRowType = obj.getRowType(e.newrow);

        	// Row Type에 따라 메시지 코드 입력 Component를 제어한다.
        	if (nRowType == Dataset.ROWTYPE_INSERT) {
        		this.divDetail.form.edtMsgCd.set_readonly(false);
        	}
        	else {
        		this.divDetail.form.edtMsgCd.set_readonly(true);
        	}
        };

        this.divCmmnBtn_btnExcelDown_onclick = function(obj,e)
        {
        	// 엑셀 상단 타이틀 텍스트 설정
        	var sSubTitle = this.staTitle01.text;

        	// Excel Export 공통함수 호출
        	this.gfnExcelExport(this.grdList, sSubTitle, sSubTitle, "EXCEL2007","",sSubTitle, true, "");
        };

        this.divCmmnBtn_btnExcelTemplate_onclick = function(obj,e)
        {
        	var fileId = "공통시스템_Template.xlsx";
        	this.gfnDownTempate(fileId);
        };

        this.divCmmnBtn_btnExcelUpload_onclick = function(obj,e)
        {
        	this.gfnExcelImport("dsList", "메시지 리스트", "A4:E", "fnExcelImportCallback", "message", "", "A3:E3", this.grdList);
        };

        this.divCmmnBtn_btnCreate_onclick = function(obj,e)
        {
        	var d = this.divSearch.form.cal00.value.substr(0,4);
        	this.gfnAlert("confirm.create", [d + "년도 데이터를 신규로 "], "createCal", "fnMsgCallback");
        };

        this.dsList_cancolumnchange = function(obj,e)
        {
        	if(e.columnid == "PRESENT_DATE") {
        		for(var i=0;i<obj.rowcount;i++) {
        			if(i == e.row) continue;
        			if(obj.getColumn(i, "PRESENT_DATE") == e.newvalue) {
        				this.gfnAlert("msg.err.validator.duplcation", [i + "번째에 "], "duprow", "fnMsgCallback");
        				return false;
        			}
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.divCmmnBtn.form.btnExcelDown.addEventHandler("onclick",this.divCmmnBtn_btnExcelDown_onclick,this);
            this.divCmmnBtn.form.btnCreate.addEventHandler("onclick",this.divCmmnBtn_btnCreate_onclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
            this.dsList.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
        };
        this.loadIncludeScript("calendarFm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
