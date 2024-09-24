(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("boardCardFm");
            this.set_titletext("게시판(카드형)");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsBoardCond", this);
            obj._setContents("<ColumnInfo><Column id=\"BOARD_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBoardInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"BLBD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_IP\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_IP\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_EMP_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDiv", this);
            obj._setContents("<ColumnInfo><Column id=\"divID\" type=\"STRING\" size=\"256\"/><Column id=\"htmlSize\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"srchBoardCd\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"srchCond\" type=\"STRING\" size=\"256\"/><Column id=\"srchGubun\" type=\"STRING\" size=\"256\"/><Column id=\"srchFlag\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCount", this);
            obj._setContents("<ColumnInfo><Column id=\"TOTALCNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCondPage", this);
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"END_NUM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj.set_taborder("4");
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
            obj.set_taborder("5");
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
            obj.set_taborder("6");
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

            obj = new Button("btnSearch",null,"10","48","28","25",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","12","86","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("등록일자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new PeriodCalendar("PFromToCal","staTitle00:0","12","250","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","PFromToCal:0","12","74","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("검색어");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboGubun","sta00:0","12","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_cboGubun_innerdataset = new nexacro.NormalDataset("divSearch_form_cboGubun_innerdataset", obj);
            divSearch_form_cboGubun_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">제목</Col></Row><Row><Col id=\"datacolumn\">내용</Col><Col id=\"codecolumn\">02</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">작성자</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboGubun_innerdataset);
            obj.set_text("제목");
            obj.set_value("01");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCond","cboGubun:3","12","300","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staBoardTitle","0","50",null,"43","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("게시판 상세");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Div("divPaging","0",null,null,"24","20","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div00");
            obj.set_url("common::cmmPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Div("divCmmnBtn",null,"58","572","30","20",null,null,null,null,null,this);
            obj.set_taborder("4");
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
            obj = new BindItem("item0","divSearch.form.PFromToCal.form.calFrom","value","dsCond","FROM_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.PFromToCal.form.calTo","value","dsCond","TO_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboGubun","value","dsCond","srchGubun");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.edtCond","value","dsCond","srchCond");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::cmmPaging.xfdl");
        };
        
        // User Script
        this.registerScript("boardCardFm.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	boardCardFm.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/12/20
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/12/20			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvProgCd	= "";
        this.fvMenuCd	= "";
        this.fvBoardCd	= "";

        this.fvBoardInfo = {};

        this.fvCnt		= 0;

        //페이징
        this.fvPage  = -1;
        this.fvStart = -1;
        this.fvEnd   = -1;
        this.pageCnt = -1;
        /*****************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.boardCardFm_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e);//필수함수

        	this.fvProgCd  = this.gfnGetArgument(this.FRAME_MENUCOLUMNS.prgmId);
        	this.fvMenuCd  = this.gfnGetArgument(this.FRAME_MENUCOLUMNS.menuId);
        	this.fvBoardCd = this.gfnGetArgument(this.FRAME_MENUCOLUMNS.param);

        	//검색어 콤보 INDEX설정
        	this.divSearch.form.cboGubun.set_index(0);

        	//FormTo 시간셋팅(오늘부터 일주일전까찌)
        	var sToday = this.gfnGetDate();
        	this.dsCond.setColumn(0,"FROM_DATE", this.gfnAddDate(sToday,-7));
        	this.dsCond.setColumn(0, "TO_DATE", sToday);

        	this.fnTranSearchBoardInfo(this.fvBoardCd); //게시판 정보 조회

        	// 공통버튼 권한 제어
        	this.gfnSetCommBtn(this.divCmmnBtn);
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //신규
        this.cfnAdd = function()
        {
        	this.fnOpenBoardP("add");
        };

        //조회
        this.cfnSearch = function()
        {
        	this.dsList.clearData();
        	this.dsCount.clearData();

        	this.fvPage  = 1;
        	this.fvStart = 1;
        	this.fvEnd   = this.fvBoardInfo.pageCnt;

        	this.fnTranSearch();
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //게시판 정보 조회
        this.fnTranSearchBoardInfo = function(sBoardCd)
        {
        	this.dsBoardCond.clearData();
        	var nRow = this.dsBoardCond.addRow();
        	this.dsBoardCond.setColumn(nRow, "BOARD_CD", sBoardCd);

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
        this.fnTranSearch = function()
        {
        	this.dsCond.setColumn(0,"srchBoardCd", this.fvBoardCd);
        	this.dsCond.setColumn(0,"srchCond", this.gfnTrim(this.dsCond.getColumn(0,"srchCond")));
        	//카드형 게시판
        	this.dsCond.setColumn(0,"srchFlag", "C");

        	//페이징
        	this.dsCondPage.setColumn(0, "START_NUM", this.fvStart);
        	this.dsCondPage.setColumn(0, "END_NUM", this.fvEnd);

        	var strSvcId    = "searchBoard";
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
        		case "searchBoard":
        			//조회, div동적생성
        			this.fnSetFormInit();
        			break;
        		default:break;
        	}
        };

        //paging
        this.fnPageCallback = function (nPage, nRecord)
        {
        	this.fvPage  = nPage;
        	this.fvStart = ((this.fvPage-1)*nRecord) + 1;
        	this.fvEnd   = this.fvPage*nRecord;
        	this.fvPageCnt = nRecord;

        	this.fnTranSearch();
        };

        //popup
        this.fnPopupCallback = function(sPopupId, sRtn)
        {
        	if (!this.gfnIsNull(sRtn))
        	{
        		this.cfnSearch();
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        //게시판 정보 조회
        this.fnSetBoard = function()
        {
        	if( this.dsBoardInfo.getRowCount() == 0 ){
        		this.gfnAlert("msg.nomenu");
        		nexacro.getApplication().gvFrmMdi.form.fnCloseMenu(this.fvMenuCd);
        		return;
        	}

        	this.fvBoardInfo = {
        		blbdNm 	 : this.dsBoardInfo.getColumn(0, "BLBD_NM")
        		,apndYn  : this.dsBoardInfo.getColumn(0, "APND_YN")
        		,pageCnt : this.dsBoardInfo.getColumn(0, "PAGE_CNT")
        		,mgrCd	 : this.dsBoardInfo.getColumn(0, "MGR_CD")
        	};
        	this.staBoardTitle.set_text(this.fvBoardInfo.blbdNm);
        	this.fvPageCnt = this.fvBoardInfo.pageCnt;

        	//조회
        	this.cfnSearch();
        };

        //폼셋팅
        this.fnSetFormInit = function()
        {
        	//생성된 DIV 모두 삭제
        	this.fnDestroyDynamicDiv();
        	//Div동적생성
        	this.fnCreateDynamicDiv();

        	//웹브라우저 사이즈 계산 완료를 위함
        	var pThis = this;
        	var nTime = this.dsList.getRowCount() * 200;
        	if (nTime > 2000)
        	{
        		nTime = 2000;
        	}
        	nexacro._OnceCallbackTimer.callonce(pThis, function () {
        		pThis.fnScroll();
        	}, nTime);
        };

        this.fnScroll = function()
        {
        	this.resetScroll();

        	//페이징Div 위치 조절
        	if (this.dsDiv.getRowCount() > 0)
        	{
        		var sCurDiv = this.dsDiv.getColumn(this.dsDiv.getRowCount()-1,"divID");
        		var objCur  = this.components[sCurDiv];
        		var nTop	= objCur.getOffsetBottom() + 10;
        		this.divPaging.set_top(nTop);
        	}
        	else
        	{
        		this.divPaging.set_top("");
        		this.divPaging.set_bottom("0");
        	}

        	this.divPaging.form.cboCnt.set_value(this.fvPageCnt);
        	this.divPaging.form.cboCnt.set_readonly(true);
        	var nTotal = this.dsCount.getColumn(0, "TOTALCNT");
        	this.divPaging.form.fnCreatePage(null,"fnPageCallback", this.fvPage, "", nTotal);
        	this.resetScroll();
        	this.vscrollbar.set_pos(0);
        }

        //생성된 DIV 모두 삭제
        this.fnDestroyDynamicDiv = function()
        {
        	this.fvCnt		= 0;
        	for(var i=0; i<this.dsDiv.getRowCount(); i++){
        		var sDiv = this.components[this.dsDiv.getColumn(i,"divID")];
        		sDiv.destroy();
        	}
        	this.resetScroll();
        	this.dsDiv.clearData();
        }

        //Div동적생성
        this.fnCreateDynamicDiv = function()
        {
        	for (var i = 0; i < this.dsList.getRowCount(); i++)
        	{
        		var nCount	= this.dsDiv.rowcount;
        		var nRow	= this.dsDiv.rowposition;
        		var nTop	= 100;

        		//생성된 div가 있다면;
        		if (nCount > 0)
        		{
        			var sCurDiv = this.dsDiv.getColumn(nRow,"divID");
        			var objCur  = this.components[sCurDiv];
        			nTop		= "div"+ this.fvCnt + ":20";
        		}

        		this.fvCnt++; //div가 생성될때마다 count 증가

        		var objDiv		= new Div();
        		var sDivName	= "div"+this.fvCnt;
        		objDiv.init(sDivName, 0, nTop, null, 530, 20, null);
        		objDiv.set_url("comm::board/cardFm.xfdl");
        		this.addChild(sDivName, objDiv);
        		objDiv.show();

        		// Dataset에 Div 정보 추가
        		var nAddRow = this.dsDiv.insertRow(nRow+1);
        		this.dsDiv.setColumn(nAddRow, "divID", sDivName);
        	}
        };


        //팝업
        this.fnOpenBoardP = function(sStatus)
        {
        	var sTitle	= "게시글";
        	var oOption = {title:sTitle
        					,titlebar:true};

        	var popupId	= "";
        	var popupUrl= "";

        	if(sStatus=="add"){
        		//게시판추가
        		popupId		= "addBoard";
        		popupUrl	= "comm::board/boardPu.xfdl";
        		var oArg	= { pvApndYn	: this.fvBoardInfo.apndYn
        					  ,pvTitle 		: this.fvBoardInfo.blbdNm
        					  ,pvInputId	: nexacro.getApplication().gdsUser.getColumn(0, "USER_ID")
        					  ,pvInputEmpNo : nexacro.getApplication().gdsUser.getColumn(0, "EMP_NO")
        					  ,pvContTitle	: ""
        					  ,pvBoardCd	: this.fvBoardCd
        					  ,pvOpenType	: "add"
        					  ,pvHrank		: null	// [2023.08.03 수정] mySQL, postgreSQL 버전에 값이 없을경우 empty로 저장되는 문제 수정
        					  ,pvAnswLvl    : 0
        					  ,pvCard		: 1
        				  };
        	}

        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup(popupId, popupUrl, oArg, sPopupCallBack, oOption);
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        //추가 버튼
        this.btnAdd_onclick = function(obj,e)
        {
        	this.cfnAdd();
        };

        //조회버튼
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.cfnSearch();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.boardCardFm_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.divCmmnBtn.form.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.dsCond.addEventHandler("oncolumnchanged",this.dsCond_oncolumnchanged,this);
        };
        this.loadIncludeScript("boardCardFm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
