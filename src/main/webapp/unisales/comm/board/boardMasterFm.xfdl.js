(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("boardMasterFm");
            this.set_titletext("게시판관리");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"BLBD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BLBD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BLBD_SECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ANSW_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ANSW_LEVL\" type=\"STRING\" size=\"256\"/><Column id=\"APND_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REPLY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MGR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MGR_EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MGR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USED_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCmdYn", this);
            obj._setContents("<ColumnInfo><Column id=\"cmdCode\" type=\"STRING\" size=\"256\"/><Column id=\"cmdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cmdNm\">전체</Col></Row><Row><Col id=\"cmdCode\">1</Col><Col id=\"cmdNm\">사용</Col></Row><Row><Col id=\"cmdCode\">0</Col><Col id=\"cmdNm\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetailList", this);
            obj._setContents("<ColumnInfo><Column id=\"BLBD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_IP\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_IP\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"REPLY_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetailCond", this);
            obj._setContents("<ColumnInfo><Column id=\"srchBoardCd\" type=\"STRING\" size=\"256\"/><Column id=\"srchGubun\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"srchCond\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCondPage", this);
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"END_NUM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCount", this);
            obj._setContents("<ColumnInfo><Column id=\"TOTALCNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","56","-158","185","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
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
            obj.set_taborder("4");
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
            obj.set_taborder("5");
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
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","12","86","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("등록일자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new PeriodCalendar("PFromToCal","staTitle00:0","12","250","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","PFromToCal:0","12","74","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("검색어");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboGubun","sta00:0","12","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_cboGubun_innerdataset = new nexacro.NormalDataset("divSearch_form_cboGubun_innerdataset", obj);
            divSearch_form_cboGubun_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">제목</Col></Row><Row><Col id=\"datacolumn\">내용</Col><Col id=\"codecolumn\">02</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">작성자</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboGubun_innerdataset);
            obj.set_text("제목");
            obj.set_value("01");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCond","cboGubun:3","12","244","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle01","-2","divSearch:0",null,"43","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("게시판");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","0","staTitle01:0","420",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj.getSetter("uFunction").set("filter,find,!sort");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"300\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"게시판 유형\"/><Cell col=\"1\" text=\"게시판 명\"/><Cell col=\"2\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:BLBD_SECT_CD\"/><Cell col=\"1\" text=\"bind:BLBD_NM\"/><Cell col=\"2\" text=\"bind:USED_YN\" displaytype=\"checkboxcontrol\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDetailList","grdList:20","staTitle01:0",null,null,"Static04_00:0","33",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsDetailList");
            obj.set_cellcombopopuptype("none");
            obj.set_cellsizingtype("col");
            obj.getSetter("uFunction").set("filter,find");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"500\"/><Column size=\"48\"/><Column size=\"65\"/><Column size=\"48\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"댓글수\"/><Cell col=\"3\" text=\"파일유무\"/><Cell col=\"4\" text=\"조회수\"/><Cell col=\"5\" text=\"작성자\"/><Cell col=\"6\" text=\"등록일자\"/></Band><Band id=\"body\"><Cell text=\"expr:currow +1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:TITLE\"/><Cell col=\"2\" text=\"bind:REPLY_CNT\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:FILE_YN\" textAlign=\"center\" displaytype=\"checkboxcontrol\"/><Cell col=\"4\" text=\"bind:INQ_CNT\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:INPT_EMP_NO\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:INPT_DTTM\" textAlign=\"center\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" calendareditformat=\"yyyy-MM-dd HH:mm:ss\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divPaging","grdList:20",null,null,"24","20","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            obj.set_url("common::cmmPaging.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Combo01.set_taborder("3");
                p.Combo01.set_innerdataset(divSearch_form_Combo01_innerdataset);
                p.Combo01.set_codecolumn("codecolumn");
                p.Combo01.set_datacolumn("datacolumn");
                p.Combo01.set_readonly("false");
                p.Combo01.set_text("전체");
                p.Combo01.set_value("1");
                p.Combo01.set_index("0");
                p.Combo01.move("56","-158","185","24",null,null);

                p.Combo02.set_taborder("4");
                p.Combo02.set_innerdataset(divSearch_form_Combo02_innerdataset);
                p.Combo02.set_codecolumn("codecolumn");
                p.Combo02.set_datacolumn("datacolumn");
                p.Combo02.set_readonly("false");
                p.Combo02.set_text("전체");
                p.Combo02.set_value("1");
                p.Combo02.set_index("0");
                p.Combo02.move("282","-158","185","24",null,null);

                p.Combo03.set_taborder("5");
                p.Combo03.set_innerdataset(divSearch_form_Combo03_innerdataset);
                p.Combo03.set_codecolumn("codecolumn");
                p.Combo03.set_datacolumn("datacolumn");
                p.Combo03.set_readonly("false");
                p.Combo03.set_text("전체");
                p.Combo03.set_value("1");
                p.Combo03.set_index("0");
                p.Combo03.move("521","-158","184","24",null,null);

                p.btnSearch.set_taborder("2");
                p.btnSearch.set_text("조회");
                p.btnSearch.set_cssclass("btn_WF_Search");
                p.btnSearch.move(null,"10","48","28","25",null);

                p.staTitle00.set_taborder("7");
                p.staTitle00.set_text("등록일자");
                p.staTitle00.set_cssclass("sta_WF_SchLabel");
                p.staTitle00.move("0","12","86","24",null,null);

                p.PFromToCal.set_taborder("0");
                p.PFromToCal.move("staTitle00:0","12","250","24",null,null);

                p.sta00.set_taborder("6");
                p.sta00.set_text("검색어");
                p.sta00.set_cssclass("sta_WF_SchLabel");
                p.sta00.move("PFromToCal:0","12","74","24",null,null);

                p.cboGubun.set_taborder("0");
                p.cboGubun.set_innerdataset(divSearch_form_cboGubun_innerdataset);
                p.cboGubun.set_codecolumn("codecolumn");
                p.cboGubun.set_datacolumn("datacolumn");
                p.cboGubun.set_text("제목");
                p.cboGubun.set_value("01");
                p.cboGubun.set_index("0");
                p.cboGubun.move("sta00:0","12","80","24",null,null);

                p.edtCond.set_taborder("1");
                p.edtCond.move("cboGubun:3","12","244","24",null,null);
            	}
            );
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divSearch.form
            obj = new Layout("Layout0","",0,0,this.divSearch.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divSearch.form.addLayout(obj.name, obj);
            //-- Default Layout : this.divPaging
            obj = new Layout("default","",0,0,this.divPaging.form,function(p){});
            this.divPaging.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1050,736,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.PFromToCal.form.calFrom","value","dsDetailCond","FROM_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSearch.form.PFromToCal.form.calTo","value","dsDetailCond","TO_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.cboGubun","value","dsDetailCond","srchGubun");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSearch.form.edtCond","value","dsDetailCond","srchCond");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::cmmPaging.xfdl");
        };
        
        // User Script
        this.registerScript("boardMasterFm.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	boardMasterFm.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023/04/05
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2023/04/05			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        //페이징
        this.fvPage  = 1;
        this.fvStart = 1;
        this.fvEnd   = 1;
        this.fvAutnYn = "Y"; // 수정, 삭제 권한부여 임의의 파라미터변수

        this.fvBoardInfo = {};
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        	this.divSearch.form.cboGubun.set_index(0);

        	var sToday = this.gfnGetDate();
        	this.dsDetailCond.setColumn(0,"FROM_DATE", this.gfnAddDate(sToday,-365));
        	this.dsDetailCond.setColumn(0,"TO_DATE",this.gfnGetLastDate(sToday.substr(0,6)));

        	//공통코드
        	var param = [{biztype : "Grid",  code : "CM01", objid : this.grdList, bindcolumn : "BLBD_SECT_CD", edit : "false"}	// grid 메시지 구분
        	];
        	this.gfnGetCommonCode(param);

        	// 게시판 조회
        	this.fnTranSearch();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        //조회
        this.cfnSearch = function()
        {
        	// 게시판 상세조회
        	this.fnTranDetailSearch();
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //조회
        this.fnTranSearch = function ()
        {
        	this.dsList.clearData();

        	var strSvcId    = "searchBoardList";
        	var strSvcUrl   = "searchBoardList.do";
        	var inData      = "";
        	var outData     = "dsList=dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId , strSvcUrl , inData , outData , strArg, callBackFnc);
        };

        //상세 조회
        this.fnTranDetailSearch = function ()
        {
        	// 데이터 초기화
        	this.dsDetailList.clearData()
        	this.dsCount.clearData();

        	// 상세 게시판 페이징 세팅
        	this.dsCondPage.setColumn(0, "START_NUM", this.fvStart);
        	this.dsCondPage.setColumn(0, "END_NUM", this.fvEnd);

        	var strSvcId    = "searchDetailBoard";
        	var strSvcUrl   = "searchBoardContent.do";
        	var inData      = "dsCond=dsDetailCond dsCondPage=dsCondPage";
        	var outData     = "dsDetailList=dsList dsCount=dsCount";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId , strSvcUrl , inData , outData , strArg, callBackFnc);
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

        	this.gfnTransaction(strSvcId , strSvcUrl , inData , outData , strArg, callBackFnc);
        };
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //transaction callback
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "searchBoardList":
        			break;
        		case "searchDetailBoard":
        			var nTotal = this.dsCount.getColumn(0, "TOTALCNT");
        			// 페이징 세팅 및 데이터 갯수 세팅
        			this.divPaging.form.fnCreatePage(this.grdDetailList, "fnPageCallback", this.fvPage, "", nTotal);
        			break;
        		case "saveBoardContents":
        			this.fnOpenBoardP();
        		default:break;
        	}
        };

        //paging callback
        this.fnPageCallback = function (nPage, nRecrod)
        {
        	this.fvPage  = nPage;
        	this.fvStart = ((this.fvPage-1)*nRecrod) + 1;
        	this.fvEnd   = this.fvPage*nRecrod;

        	this.fnTranDetailSearch();
        };

        //popup callback
        this.fnPopupCallback = function (sPopupId, sRtn)
        {
        	if (!this.gfnIsNull(sRtn))
        	{
        		this.fnTranDetailSearch();
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        //입력/조회 팝업 오픈
        this.fnOpenBoardP = function ()
        {
        	var sTitle = "게시글";
        	var oOption = {title:sTitle
        					,titlebar:true};

        	//게시판조회
        	var	popupId = "readBoard";
        	var	popupUrl = "comm::board/boardReadPu.xfdl";
        	var nRow   = this.dsDetailList.rowposition;
        	// 넘길 아규먼트 값
        	var oArg   = {pvAnswYn 		: this.fvBoardInfo.answYn
        				  ,pvApndYn		: this.fvBoardInfo.apndYn
        				  ,pvReplyYn    : this.fvBoardInfo.replyYn
        				  ,pvTitle 		: this.fvBoardInfo.blbdNm
        				  ,pvBoardCd	: this.fvBoardInfo.blbdCd
        				  ,pvNotiNo		: this.dsDetailList.getColumn(nRow, "NOTI_NO")
        				  ,pvMgrCd	 	: this.fvBoardInfo.mgrCd
        				  ,pvAutnYn	    : this.fvAutnYn	// 게시판관리 팝업 > 수정, 삭제 권한부여 임의의 파라미터 추가
        				};
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

        this.dsList_onrowposchanged = function(obj,e)
        {
        	// dsDetailList 데이터가 0보다 클 경우
        	if (obj.getRowCount() > 0)
        	{
        		this.fvBoardInfo = {
        			blbdCd 	 : obj.getColumn(obj.rowposition, "BLBD_CD")
        			,blbdNm  : obj.getColumn(obj.rowposition, "BLBD_NM")
        			,answYn  : obj.getColumn(obj.rowposition, "ANSW_YN")
        			,apndYn  : obj.getColumn(obj.rowposition, "APND_YN")
        			,pageCnt : obj.getColumn(obj.rowposition, "PAGE_CNT")
        			,replyYn : obj.getColumn(obj.rowposition, "REPLY_YN")
        			,mgrCd	 : obj.getColumn(obj.rowposition, "MGR_CD")
        		};
        		// 서버에 데이터 넘겨줄 게시판 코드 세팅
        		this.dsDetailCond.setColumn(0, "srchBoardCd", this.fvBoardInfo.blbdCd);
        		// 페이징 값
        		this.fvEnd  = this.fvBoardInfo.pageCnt;
        		this.divPaging.form.cboCnt.set_value(this.fvEnd);

        		// 상세 게시판 조회
        		this.fnTranDetailSearch();
        	}
        };

        // 상세 그리드 셀 클릭 이벤트
        this.grdDetailList_oncellclick = function(obj,e)
        {
        	var nRow = e.row;

        	this.dsUpdateInq.clearData();
        	var nTargetRow = this.dsUpdateInq.addRow();

        	this.dsUpdateInq.copyRow(nTargetRow, this.dsDetailList, nRow);
        	this.dsUpdateInq.setColumn(nTargetRow, "STATUS", "updateInqCount");

        	// 팝업 조회
        	this.fnTranUpdateInqCnt();
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.grdDetailList.addEventHandler("oncellclick",this.grdDetailList_oncellclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
        };
        this.loadIncludeScript("boardMasterFm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
