(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("boardMainFm");
            this.set_titletext("게시판");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"RPT_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"RPT_MONTH\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"INT\" size=\"256\"/><Column id=\"END_NUM\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"RPT_YEAR\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYYYY", this);
            obj._setContents("<ColumnInfo><Column id=\"year\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBoardCond", this);
            obj._setContents("<ColumnInfo><Column id=\"BOARD_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBoardInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"RPT_MONTH\" type=\"string\" size=\"32\"/><Column id=\"KORN_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_CNT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"RPT_NO\" type=\"int\" size=\"4\"/><Column id=\"RPT_YEAR\" type=\"string\" size=\"32\"/><Column id=\"REG_DATE\" type=\"undefined\" size=\"0\"/><Column id=\"TITLE\" type=\"string\" size=\"32\"/><Column id=\"FILE_ID\" type=\"undefined\" size=\"0\"/><Column id=\"INPT_DTTM\" type=\"undefined\" size=\"0\"/><Column id=\"DEPT_CD\" type=\"string\" size=\"32\"/><Column id=\"RPT_CNT\" type=\"undefined\" size=\"0\"/><Column id=\"CNTN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCount", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"TOTALCNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCondPage", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"END_NUM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUpdateInq", this);
            obj._setContents("<ColumnInfo><Column id=\"BLBD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_NO\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_CNT\" type=\"INT\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTeam", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static04_00",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W20");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","1",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","56","-158","185","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
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
            obj.set_taborder("2");
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
            obj.set_taborder("3");
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
            obj.set_taborder("4");
            obj.set_value("20190308");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10","48","28","25",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02_00","200","12","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("팀");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboTeam","sta02_00:0","12","130","27",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_innerdataset("dsTeam");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("cbo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02_00_00","0","12","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("년월");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new MonthCalendar("MonthCalendar00","sta02_00_00:0","11","116","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02_00_01","cboTeam:4","12","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt00","sta02_00_01:0","12","287","27",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBoardTitle","0","divSearch:0",null,"43","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("팀 주간보고 리스트");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","0","staBoardTitle:0",null,null,"20","33",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"500\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"82\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"등록자\"/><Cell col=\"3\" text=\"등록일자\"/><Cell col=\"4\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" expr=\"dataset.parent.fvStart +currow\"/><Cell col=\"1\" text=\"bind:TITLE\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:KORN_NM\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:REG_DATE\" displaytype=\"date\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"4\" displaytype=\"imagecontrol\" text=\"미리보기\" background=\"url(&apos;theme://images/btn_WF_Search.png&apos;) no-repeat center center\" cursor=\"pointer\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divPaging","0",null,null,"24","20","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            obj.set_url("common::cmmPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divCmmnBtn",null,"56","572","31","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"2","90","28","0",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("0");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_Add");
            this.divCmmnBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPaging
            obj = new Layout("default","",0,0,this.divPaging.form,function(p){});
            this.divPaging.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCmmnBtn.form
            obj = new Layout("default","",0,0,this.divCmmnBtn.form,function(p){});
            this.divCmmnBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1050,736,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cboTeam","value","dsCond","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.edt00","value","dsCond","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::cmmPaging.xfdl");
        };
        
        // User Script
        this.registerScript("weekReportListFm.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	boardMainFm.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/02/15
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/02/15			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvProgCd = "";
        this.fvMenuCd = "";
        this.fvBoardCd = "";

        //페이징
        this.fvPage  = -1;
        this.fvStart = -1;
        this.fvEnd   = -1;

        this.fvBoardInfo = { pageCnt : 20};
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	this.fnTeamInfo();

        	this.divPaging.form.staTitle.set_visible(false);
        	this.divPaging.form.cboCnt.set_value(20);
        	this.divPaging.form.cboCnt.set_visible(false);

        	this.cfnSearch();
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	//조회버튼으로 조회
        	this.dsList.clearData();
        	this.dsCount.clearData();

        	var date = this.divSearch.form.MonthCalendar00.getDate();
        	if(this.gfnIsNull(date) == false) {
        		this.dsCond.setColumn(0, "RPT_YEAR", date.substr(0,4));
        		this.dsCond.setColumn(0, "RPT_MONTH", date.substr(4,2));
        	} else {
        		this.dsCond.setColumn(0, "RPT_YEAR", "");
        		this.dsCond.setColumn(0, "RPT_MONTH", "");
        	}

        	this.fvPage  = 1;
        	this.fvStart = 1;
        	this.fvEnd   = this.fvBoardInfo.pageCnt;
        	this.fnTranCountSearch();
        	this.fnTranSearch();
        };

        //글쓰기
        this.cfnAdd = function ()
        {
        	this.fnOpenBoardP("add");
        };
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //팀 정보조회
        this.fnTeamInfo = function ()
        {
        	this.gfnSetMap("board", "TeamList");

        	var strSvcId    = "selectTeamList";
        	var strSvcUrl   = "searchCommonBaseService.do";
        	var inData      = "dsCond=dsCond dsMap=dsMap";
        	var outData     = "dsTeam=dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        //조회
        this.fnTranCountSearch = function ()
        {
        	this.gfnSetMap("board", "WeekReportCnt");

        	var strSvcId    = "selectReportCount";
        	var strSvcUrl   = "searchCommonBaseService.do";
        	var inData      = "dsCond=dsCond dsMap=dsMap";
        	var outData     = "dsCount=dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        //조회
        this.fnTranSearch = function ()
        {
        	this.dsCond.setColumn(0, "START_NUM", this.fvStart);
        	this.dsCond.setColumn(0, "END_NUM", this.fvEnd);

        	this.gfnSetMap("board", "WeekReportList");

        	var strSvcId    = "selectReportList";
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
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //transaction
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "selectTeamList":
        			this.dsTeam.insertRow(0);
        			this.dsTeam.setColumn(0,"CODE", "");
        			this.dsTeam.setColumn(0,"NAME", "전체");
        			this.divSearch.form.cboTeam.set_index(0);
        			break;
        		case "selectReportCount" :
        			var nTotal = this.dsCount.getColumn(0, "TOTALCNT");
        			this.divPaging.form.fnCreatePage(this.grdList, "fnPageCallback", this.fvPage, "", nTotal);
        			break;
        		case "selectReportList":
        			break;
        		default:break;
        	}
        };

        //paging
        this.fnPageCallback = function (nPage, nRecrod)
        {
        	this.fvPage  = nPage;
        	this.fvStart = ((this.fvPage-1)*nRecrod) + 1;
        	this.fvEnd   = this.fvPage*nRecrod;

        	this.fnTranSearch();
        };

        //popup
        this.fnPopupCallback = function (sPopupId, sRtn)
        {
        	if (!this.gfnIsNull(sRtn))
        	{
        		this.fnTranSearch();
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        //입력/조회 팝업 오픈
        this.fnOpenBoardP = function (sStatus)
        {
        	var sTitle = "주간보고";
        	var oOption = {title:sTitle
        					,titlebar:true};

        	var popupId = "";
        	var popupUrl = "";

        	if(sStatus=="read"){
        		//게시판추가
        		sTitle += " 조회";
        		popupId = "addBoard";
        		popupUrl = "comm::weekReport/weekUpdatePu.xfdl";
        		var oArg   = { pvOpenType	: "read",
        						pvNo	: this.dsList.getColumn(this.dsList.rowposition, "RPT_NO")
        				  };
        	} else if(sStatus=="add"){
        		//게시판추가
        		sTitle += " 등록";
        		popupId = "addBoard";
        		popupUrl = "comm::weekReport/weekUpdatePu.xfdl";
        		var oArg   = { pvOpenType	: "add"
        				  };
        	} else if(sStatus=="edit"){
        		//게시판추가
        		sTitle += " 수정";
        		popupId = "addBoard";
        		popupUrl = "comm::weekReport/weekUpdatePu.xfdl";
        		var oArg   = { pvOpenType	: "edit",
        						pvNo	: this.dsList.getColumn(this.dsList.rowposition, "RPT_NO")
        				  };
        	}
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup(popupId, popupUrl, oArg, sPopupCallBack, oOption);
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.cfnSearch();
        };

        this.btnAdd_onclick = function(obj,e)
        {
        	this.cfnAdd();
        };

        this.grdList_oncellclick = function(obj,e)
        {
        	if(e.col == 4) {
        		var sTitle = "주간보고";
        		var oOption = {title:sTitle
        						,titlebar:true};

        		var popupId = "";
        		var popupUrl = "";
        		//게시판추가
        		popupId = "addBoard";
        		popupUrl = "comm::weekReport/weekReportViewPu.xfdl";
        		var oArg   = {
        						pvFileId	: this.dsList.getColumn(this.dsList.rowposition, "FILE_ID")
        				  };

        		var sPopupCallBack = "fnPopupCallback";
        		this.gfnOpenPopup(popupId, popupUrl, oArg, sPopupCallBack, oOption);
        	}
        };

        this.divSearch_edtCond1_onchanged = function(obj,e)
        {

        };

        this.grdList_oncelldblclick = function(obj,e)
        {
        	if(e.col == 4) {
        	} else {
        		if(this.dsList.getColumn(e.row, "INPT_ID") == this.gfnGetUserInfo("USER_ID")) {
        			this.fnOpenBoardP("edit");
        		} else {
        			this.fnOpenBoardP("read");
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.grdList.addEventHandler("oncellclick",this.grdList_oncellclick,this);
            this.grdList.addEventHandler("oncelldblclick",this.grdList_oncelldblclick,this);
            this.divCmmnBtn.form.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
        };
        this.loadIncludeScript("weekReportListFm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
