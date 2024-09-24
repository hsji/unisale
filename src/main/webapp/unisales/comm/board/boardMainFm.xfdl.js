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
            obj._setContents("<ColumnInfo><Column id=\"srchGubun\" type=\"STRING\" size=\"256\"/><Column id=\"srchCond\" type=\"STRING\" size=\"256\"/><Column id=\"srchBoardCd\" type=\"STRING\" size=\"256\"/><Column id=\"srchFlag\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"srchGubun\">01</Col></Row></Rows>");
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
            obj._setContents("");
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
            
            // UI Components Initialize
            obj = new Static("Static04_00",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W20");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"50","20",null,null,null,null,null,this);
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

            obj = new Static("sta02","0","12","74","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("검색어");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboGubun","sta02:0","12","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_cboGubun_innerdataset = new nexacro.NormalDataset("divSearch_form_cboGubun_innerdataset", obj);
            divSearch_form_cboGubun_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">제목</Col></Row><Row><Col id=\"datacolumn\">내용</Col><Col id=\"codecolumn\">02</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboGubun_innerdataset);
            obj.set_text("제목");
            obj.set_value("01");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCond1","cboGubun:3","12","300","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBoardTitle","0","divSearch:0",null,"43","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("게시판 상세");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","0","staBoardTitle:0",null,null,"20","33",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"500\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"댓글수\"/><Cell col=\"3\" text=\"파일\"/><Cell col=\"4\" text=\"조회수\"/><Cell col=\"5\" text=\"작성자\"/><Cell col=\"6\" text=\"등록일자\"/></Band><Band id=\"body\"><Cell textAlign=\"center\" expr=\"dataset.parent.fvStart +currow\"/><Cell col=\"1\" text=\"bind:TITLE\"/><Cell col=\"2\" text=\"bind:REPLY_CNT\" textAlign=\"center\"/><Cell col=\"3\" displaytype=\"checkboxcontrol\" textAlign=\"center\" text=\"bind:FILE_YN\"/><Cell col=\"4\" text=\"bind:INQ_CNT\" displaytype=\"normal\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:INPT_EMP_NO\" displaytype=\"normal\" textAlign=\"center\"/><Cell col=\"6\" text=\"bind:INPT_DTTM\" displaytype=\"date\" textAlign=\"center\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
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

            obj = new Button("btnAdd",null,"2","72","28","0",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("0");
            obj.set_text("글쓰기");
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
            obj = new BindItem("item1","divSearch.form.edtCond1","value","dsCond","srchCond");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboGubun","value","dsCond","srchGubun");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::cmmPaging.xfdl");
        };
        
        // User Script
        this.registerScript("boardMainFm.xfdl", function() {
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

        this.fvBoardInfo = {};
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	this.fvProgCd  = this.gfnGetArgument(this.FRAME_MENUCOLUMNS.prgmId);
        	this.fvMenuCd  = this.gfnGetArgument(this.FRAME_MENUCOLUMNS.menuId);
        	this.fvBoardCd = this.gfnGetArgument(this.FRAME_MENUCOLUMNS.param);

        	//게시판 정보 조회
        	this.fnTranSearchBoardInfo(this.fvBoardCd);

        	// 공통버튼 권한 제어
        	this.gfnSetCommBtn(this.divCmmnBtn);
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

        	this.fvPage  = 1;
        	this.fvStart = 1;
        	this.fvEnd   = this.fvBoardInfo.pageCnt;
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
        //게시판 정보조회
        this.fnTranSearchBoardInfo = function (sBordCd)
        {
        	this.dsBoardCond.clearData();
        	var nRow = this.dsBoardCond.addRow();
        	this.dsBoardCond.setColumn(nRow, "BOARD_CD", sBordCd);

        	var strSvcId    = "searchBoardList";
        	var strSvcUrl   = "searchBoardList.do";
        	var inData      = "dsCond=dsBoardCond";
        	var outData     = "dsBoardInfo=dsList";
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
        	//조회조건
        	this.dsCond.setColumn(0, "srchBoardCd", this.fvBoardCd);
        	this.dsCond.setColumn(0, "srchFlag", "B");

        	this.dsCondPage.setColumn(0, "START_NUM", this.fvStart);
        	this.dsCondPage.setColumn(0, "END_NUM", this.fvEnd);

        	var strSvcId    = "searchBoardContent";
        	var strSvcUrl   = "searchBoardContent.do";
        	var inData      = "dsCond=dsCond dsCondPage=dsCondPage";
        	var outData     = "dsList=dsList dsCount=dsCount";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };
        //조회수 업데이트
        this.fnTranUpdateInqCnt = function ()
        {
        	var strSvcId    = "saveBoardContents";
        	var strSvcUrl   = "saveBoardContents.do";
        	var inData      = "dsList=dsUpdateInq:U";
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
        		case "searchBoardList":
        			this.fnSetBoard();
        			break;
        		case "searchBoardContent":
        			var nTotal = this.dsCount.getColumn(0, "TOTALCNT");
        			this.divPaging.form.fnCreatePage(this.grdList, "fnPageCallback", this.fvPage, "", nTotal);
        			break;
        		case "saveBoardContents":
        			this.fnOpenBoardP("read");
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
        //게시판 정보 세팅
        this.fnSetBoard = function ()
        {
        	if( this.dsBoardInfo.getRowCount() == 0 ){
        		this.gfnAlert("msg.nomenu");
        		nexacro.getApplication().gvFrmMdi.form.fnCloseMenu(this.fvMenuCd);
        		return;
        	}

        	this.fvBoardInfo = {
        		blbdNm 	 : this.dsBoardInfo.getColumn(0, "BLBD_NM")
        		,answYn  : this.dsBoardInfo.getColumn(0, "ANSW_YN")
        		,apndYn  : this.dsBoardInfo.getColumn(0, "APND_YN")
        		,pageCnt : this.dsBoardInfo.getColumn(0, "PAGE_CNT")
        		,replyYn : this.dsBoardInfo.getColumn(0, "REPLY_YN")
        		,mgrCd	 : this.dsBoardInfo.getColumn(0, "MGR_CD")
        	};
        	this.staBoardTitle.set_text(this.fvBoardInfo.blbdNm);
        	this.divPaging.form.cboCnt.set_value(this.fvBoardInfo.pageCnt);
        	this.divPaging.form.cboCnt.set_readonly(true);

        	//전체조회
        	this.cfnSearch();
        };

        //입력/조회 팝업 오픈
        this.fnOpenBoardP = function (sStatus)
        {
        	var sTitle = "게시글";
        	var oOption = {title:sTitle
        					,titlebar:true};

        	var popupId = "";
        	var popupUrl = "";

        	if(sStatus=="read"){
        		//게시판조회
        		popupId = "readBoard";
        		popupUrl = "comm::board/boardReadPu.xfdl";
        		var nRow   = this.dsList.rowposition;
        		var oArg   = {pvAnswYn 		: this.fvBoardInfo.answYn
        					  ,pvApndYn		: this.fvBoardInfo.apndYn
        					  ,pvReplyYn    : this.fvBoardInfo.replyYn
        					  ,pvTitle 		: this.fvBoardInfo.blbdNm
        					  ,pvBoardCd	: this.fvBoardCd
        					  ,pvNotiNo		: this.dsList.getColumn(nRow, "NOTI_NO")
        					  ,pvOpenType	: "read"
        					  ,pvMgrCd	 	: this.fvBoardInfo.mgrCd
        					};
        	} else if(sStatus=="add"){
        		//게시판추가
        		popupId = "addBoard";
        		popupUrl = "comm::board/boardPu.xfdl";
        		var oArg   = { pvApndYn		: this.fvBoardInfo.apndYn
        					  ,pvTitle 		: this.fvBoardInfo.blbdNm
        					  ,pvInputId	: nexacro.getApplication().gdsUser.getColumn(0, "USER_ID")
        					  ,pvInputEmpNo : nexacro.getApplication().gdsUser.getColumn(0, "EMP_NO")
        					  ,pvContTitle	: ""
        					  ,pvBoardCd	: this.fvBoardCd
        					  ,pvOpenType	: "add"
        					  ,pvHrank		: null // [2023.08.03 수정] mySQL, postgreSQL 버전에 값이 없을경우 empty로 저장되는 문제 수정
        					  ,pvAnswLvl    : 0
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
        	//2021.07.08 더블클릭에서 클릭으로 변경
        	//조회수 증가
        	var nRow = e.row;

        	this.dsUpdateInq.clearData();
        	var nTargetRow = this.dsUpdateInq.addRow();

        	this.dsUpdateInq.copyRow(nTargetRow, this.dsList, nRow);
        	this.dsUpdateInq.setColumn(nTargetRow, "STATUS", "updateInqCount");

        	this.fnTranUpdateInqCnt();
        };

        this.divSearch_edtCond1_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.grdList.addEventHandler("oncellclick",this.grdList_oncellclick,this);
            this.divCmmnBtn.form.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
        };
        this.loadIncludeScript("boardMainFm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
