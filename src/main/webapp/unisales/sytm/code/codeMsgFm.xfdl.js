(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("codeMsgFm");
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
            obj._setContents("<ColumnInfo><Column id=\"MSGE_CD\" type=\"string\" size=\"255\"/><Column id=\"MSGE_FLAG_CD\" type=\"string\" size=\"255\"/><Column id=\"MSGE\" type=\"string\" size=\"255\"/></ColumnInfo><Rows><Row><Col id=\"MSGE_FLAG_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MSGE_CD\" type=\"string\" size=\"32\"/><Column id=\"MSGE_FLAG_CD\" type=\"string\" size=\"32\"/><Column id=\"KORN_MSGE\" type=\"string\" size=\"32\"/><Column id=\"ENGL_MSGE\" type=\"string\" size=\"32\"/><Column id=\"USED_YN\" type=\"string\" size=\"32\"/><Column id=\"INPT_ID\" type=\"string\" size=\"32\"/><Column id=\"CHGE_ID\" type=\"string\" size=\"32\"/></ColumnInfo>");
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
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","12","98","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("메세지코드");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo01","56","-158","185","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
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
            obj.set_taborder("6");
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
            obj.set_taborder("7");
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
            obj.set_taborder("8");
            obj.set_value("20190308");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10","48","28","25",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMsgCd","staTitle00:0","12","211","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle01","edtMsgCd:0","12","98","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("메세지구분");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboMsgType","staTitle01:0","12","150","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("알림");
            obj.set_value("INF");
            obj.set_index("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle02","cboMsgType:0","12","110","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("한글메세지");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMsgTxt","staTitle02:0","12","200","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","divSearch:0","342","43",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("메세지");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","0","staTitle01:0",null,null,"20","143",null,null,"250",null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj.getSetter("uFunction").set("filter,sort,!colfix,!initial,find");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"180\"/><Column size=\"100\"/><Column size=\"300\"/><Column size=\"300\"/><Column size=\"60\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"메세지코드\" cssclass=\"essential\"/><Cell col=\"1\" text=\"메세지구분코드\" cssclass=\"essential\"/><Cell col=\"2\" text=\"한글메세지\" cssclass=\"essential\"/><Cell col=\"3\" text=\"영문메세지\"/><Cell col=\"4\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:MSGE_CD\" edittype=\"expr:dataset.getRowType(currow)==2?&apos;text&apos;:&apos;none&apos;\" displaytype=\"expr:dataset.getRowType(currow)==2?&apos;editcontrol&apos;:&apos;normal&apos;\" editmaxlength=\"50\" editinputtype=\"digit,dot,english\" editinputmode=\"lower\" editimemode=\"alpha\"/><Cell col=\"1\" text=\"bind:MSGE_FLAG_CD\" displaytype=\"combocontrol\" edittype=\"combo\"/><Cell col=\"2\" text=\"bind:KORN_MSGE\" edittype=\"text\" displaytype=\"editcontrol\" editimemode=\"hangul\"/><Cell col=\"3\" text=\"bind:ENGL_MSGE\" edittype=\"text\" displaytype=\"editcontrol\" editimemode=\"alpha\"/><Cell col=\"4\" text=\"bind:USED_YN\" displaytype=\"checkboxcontrol\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" edittype=\"checkbox\"/></Band></Format></Formats>");
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

            obj = new Button("btnExcelTemplate",null,"0","171","28","btnExcelDown:3",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("1");
            obj.set_text("업로드템플릿 다운로드");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_TempSave");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnExcelUpload",null,"0","107","28","btnExcelTemplate:3",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("2");
            obj.set_text("엑셀업로드");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelUp");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Static("staTitle","0","grdList:0","342","43",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("메세지 상세");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","0","staTitle:0",null,"100","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("staBg01","0","33",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg00","0","0",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg02","0","66",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","0","150","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_text("메세지코드");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtMsgCd","staTitle00:4","5","398","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_maxlength("50");
            obj.set_inputtype("digit,dot,english");
            obj.set_inputmode("lower");
            obj.set_imemode("alpha");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle03","edtMsgCd:4","0","108","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_text("메세지구분");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboMsgType","staTitle03:4","5","141","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("Combo00");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle04","cboMsgType:4","0","108","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new CheckBox("chkUseYn","staTitle04:4","4","100","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("사용");
            obj.set_value("true");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","33","150","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_text("한글메세지");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtMsgTxtKor","staTitle01:4","38",null,"24","5",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_cssclass("essential");
            obj.set_imemode("hangul");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle02","0","66","150","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_text("영문메세지");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtMsgTxtEng","staTitle02:4","71",null,"24","5",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_imemode("alpha");
            obj.set_text("5678");
            this.divDetail.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCmmnBtn.form
            obj = new Layout("default","",0,0,this.divCmmnBtn.form,function(p){});
            this.divCmmnBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

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

            obj = new BindItem("item3","divDetail.form.edtMsgCd","value","dsList","MSGE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divDetail.form.cboMsgType","value","dsList","MSGE_FLAG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divDetail.form.chkUseYn","value","dsList","USED_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divDetail.form.edtMsgTxtKor","value","dsList","KORN_MSGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divDetail.form.edtMsgTxtEng","value","dsList","ENGL_MSGE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("codeMsgFm.xfdl", function() {
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

        	//공통코드
        	var param = [
        			  {biztype : "Combo", code : "SM02", selecttype : "A", objid : this.divSearch.form.cboMsgType}			// 메시지 구분
        			, {biztype : "Combo", code : "SM02", objid : this.divDetail.form.cboMsgType}							// 메시지 구분 (Detail 영역)
        			, {biztype : "Grid",  code : "SM02", objid : this.grdList, bindcolumn : "MSGE_FLAG_CD", edit : "true"}	// grid 메시지 구분
        	];
        	this.gfnGetCommonCode(param);

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
        	this.dsList.setColumn(nRow,'USED_YN',1);
        	this.dsList.setColumn(nRow,'MSGE_FLAG_CD',"INF");

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
        		this.fnCheckMsgCD();
        	}
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        /**
         * @description    메시지 조회를 위한 transaction.
         * @param	N/A
         * @return 	N/A
         */
        this.fnTranSearch = function ()
        {
        	this.dsList.clearData();

        	var strSvcId    = "Search";
        	var strSvcUrl   = "SearchSystemMsg.do";
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
         * @description    메시지 신규, 수정, 삭제 데이터 저장을 위한 transaction.
         * @param	N/A
         * @return 	N/A
         */
        this.fnTranSave = function ()
        {
        	// Insert, Update, Delete
        	var strSvcId    = "Save";
        	var strSvcUrl   = "SaveMsg.do";
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
         * @description    메시지 저장 시 신규건에 대한 체크를 진행한다.
         * @param	N/A
         * @return 	N/A
         */
        this.fnCheckMsgCD = function()
        {
        	var i;
        	var nAddRow;

        	// dsList에서 신규 데이터 건만 추출한다.
        	this.dsChkData.clearData();
        	for (i = 0; i < this.dsList.getRowCount(); i++) {
        		if (this.dsList.getRowType(i) == Dataset.ROWTYPE_INSERT) {
        			nAddRow = this.dsChkData.addRow();
        			this.dsChkData.copyRow(nAddRow, this.dsList, i);
        		}
        	}

        	// 신규 데이터가 있는 경우
        	if (this.dsChkData.getRowCount() > 0) {
        		// 데이터가 중복이 있는 지 체크하는 서비스를 호출한다.
        		var strSvcId    = "CheckMsgCode";
        		var strSvcUrl   = "CheckMsgCode.do";
        		var inData      = "dsChkData=dsChkData";
        		var outData     = "dsChkResultMsg=dsChkResultMsg";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction(strSvcId , 		// transaction을 구분하기 위한 svc id값
        							strSvcUrl , 	// trabsaction을 요청할 주소
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); 	// 통신방법 정의 [생략가능]
        	}
        	else {
        		// 저장 하시겠습니까?
        		this.gfnAlert("confirm.save", [""], "save", "fnMsgCallback");
        	}
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //transaction
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch (sSvcId)
        	{
        		case "Search":
        		case "Save":
        			break;
        		case "CheckMsgCode":
        			// 메시지 코드가 존재하는 지 여부 체크
        			var nCnt = this.dsChkResultMsg.getRowCount();

        			// 중복되는 건이 없는 경우 저장 서비스 호출
        			if (nCnt == 0) {
        				// 저장 하시겠습니까?
        				this.gfnAlert("confirm.save", [""], "save", "fnMsgCallback");
        			}
        			// 중복된 건이 있는 경우 메시지 출력
        			else {
        				var sDupCode;
        				var sTemp;

        				for (i = 0; i < nCnt; i++) {
        					sTemp = this.dsChkResultMsg.getColumn(i, "MSGE_CD");

        					if (i == 0) {
        						sDupCode = "[" + sTemp;
        					}
        					else {
        						sDupCode += sTemp;
        					}

        					if (i == this.dsChkResultMsg.getRowCount() - 1) {
        						sDupCode += "]";
        					}
        					else {
        						sDupCode += ",";
        					}
        				}
        				// 중복된 메시지가 존재합니다.
        				this.gfnAlert("msg.exist.code", ["중복된 대분류코드", sDupCode]);
        				msg.exist
        			}
        			break;
        	}
        };

        //message callback
        this.fnMsgCallback = function (sPopupId, sRtn)
        {
        	// 저장 하시겠습니까?
        	if (sPopupId == "save") {
        		if (this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false) {
        			return;
        		}
        		else {
        			// 데이터 저장 서비스를 호출한다.
        			this.fnTranSave();
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

        	this.gfnSetValidation(this.dsList, "MSGE_CD", "메세지코드"	, "required");
        	this.gfnSetValidation(this.dsList, "KORN_MSGE", "한글메세지"	, "required");

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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.divCmmnBtn.form.btnExcelDown.addEventHandler("onclick",this.divCmmnBtn_btnExcelDown_onclick,this);
            this.divCmmnBtn.form.btnExcelTemplate.addEventHandler("onclick",this.divCmmnBtn_btnExcelTemplate_onclick,this);
            this.divCmmnBtn.form.btnExcelUpload.addEventHandler("onclick",this.divCmmnBtn_btnExcelUpload_onclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
        };
        this.loadIncludeScript("codeMsgFm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
