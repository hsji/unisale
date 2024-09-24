(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("boardMagFm");
            this.set_titletext("게시판설정관리");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"BOARD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USED_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"BLBD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BLBD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BLBD_SECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ANSW_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ANSW_LEVL\" type=\"STRING\" size=\"256\"/><Column id=\"APND_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REPLY_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PAGE_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"MGR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MGR_EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MGR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USED_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCmdYn", this);
            obj._setContents("<ColumnInfo><Column id=\"cmdCode\" type=\"STRING\" size=\"256\"/><Column id=\"cmdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cmdNm\">전체</Col></Row><Row><Col id=\"cmdCode\">1</Col><Col id=\"cmdNm\">사용</Col></Row><Row><Col id=\"cmdCode\">0</Col><Col id=\"cmdNm\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","12","86","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("게시판명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

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

            obj = new Calendar("Calendar00","785","-158","184","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_value("20190308");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10","48","28","25",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtBoardNm","staTitle00:0","12","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle00_00","226","12","86","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboYnType","staTitle00_00:0","12","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsCmdYn");
            obj.set_codecolumn("cmdCode");
            obj.set_datacolumn("cmdNm");
            obj.set_text("cbo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static04_00",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W20");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","-2","divSearch:0",null,"43","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("게시판");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","0","staTitle01:0",null,null,"20","110",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj.getSetter("uFunction").set("filter,sort,!colfix,!initial,find");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"300\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"게시판 코드\"/><Cell col=\"1\" text=\"게시판 유형\"/><Cell col=\"2\" text=\"게시판 명\"/><Cell col=\"3\" text=\"답변여부\"/><Cell col=\"4\" text=\"리플여부\"/><Cell col=\"5\" text=\"파일첨부\"/><Cell col=\"6\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:BLBD_CD\"/><Cell col=\"1\" text=\"bind:BLBD_SECT_CD\"/><Cell col=\"2\" text=\"bind:BLBD_NM\"/><Cell col=\"3\" text=\"bind:ANSW_YN\" displaytype=\"checkboxcontrol\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"4\" text=\"bind:REPLY_YN\" displaytype=\"checkboxcontrol\"/><Cell col=\"5\" text=\"bind:APND_YN\" displaytype=\"checkboxcontrol\"/><Cell col=\"6\" text=\"bind:USED_YN\" displaytype=\"checkboxcontrol\"/></Band></Format></Formats>");
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

            obj = new Div("divDetail","0",null,null,"67","20","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staBg01","0","33",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg00","0","0",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","0","100","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_text("게시판코드");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtBlbdCd","staTitle00:4","5","120","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_maxlength("10");
            obj.set_inputtype("digit,english");
            obj.set_inputmode("upper");
            obj.set_imemode("alpha");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle01","edtBlbdCd:4","0","100","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_text("게시판명");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtBlbdNm","staTitle01:4","5","225","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_cssclass("essential");
            obj.set_maxlength("40");
            obj.set_imemode("hangul");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle02","0","33","100","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_text("게시판유형");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboBlbdType","staTitle02:4","edtBlbdCd:9","120","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_text("cbo00");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle03","cboBlbdType:4","33","100","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_text("목록표시개수");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboPageCnt","staTitle03:4","edtBlbdNm:9","70","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divDetail_form_cboPageCnt_innerdataset = new nexacro.NormalDataset("divDetail_form_cboPageCnt_innerdataset", obj);
            divDetail_form_cboPageCnt_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">30</Col><Col id=\"datacolumn\">30</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row><Row><Col id=\"codecolumn\">100</Col><Col id=\"datacolumn\">100</Col></Row></Rows>");
            obj.set_innerdataset(divDetail_form_cboPageCnt_innerdataset);
            obj.set_text("100");
            obj.set_value("100");
            obj.set_index("4");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle04","cboPageCnt:4","33","90","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_text("답글여부");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new CheckBox("chkAnswYn","staTitle04:4","38","58","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_text("사용");
            obj.set_value("true");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle05_00","chkAnswYn:4","33","90","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_text("댓글여부");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new CheckBox("chkReplyYn","staTitle05_00:4","38","58","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_text("사용");
            obj.set_value("true");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle05","chkReplyYn:4","33","90","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("14");
            obj.set_text("파일첨부");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new CheckBox("chkApndYn","staTitle05:4","38","58","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("15");
            obj.set_text("사용");
            obj.set_value("true");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle06","chkApndYn:4","33","90","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("16");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new CheckBox("chkUsedYn","staTitle06:4","38","62","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("17");
            obj.set_text("사용");
            obj.set_value("true");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle05_01","562","0","90","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("18");
            obj.set_text("관리자");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("divUser","staTitle05_01:4","5","369","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("19");
            obj.set_text("div00");
            obj.set_url("common::cmmUserSearch.xfdl");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle00","0",null,null,"43","20","67",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("게시판 상세");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCmmnBtn.form
            obj = new Layout("default","",0,0,this.divCmmnBtn.form,function(p){});
            this.divCmmnBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form.divUser
            obj = new Layout("default","",0,0,this.divDetail.form.divUser.form,function(p){});
            this.divDetail.form.divUser.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1050,736,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtBoardNm","value","dsCond","BOARD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divDetail.form.edtBlbdCd","value","dsList","BLBD_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divDetail.form.edtBlbdNm","value","dsList","BLBD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divDetail.form.cboBlbdType","value","dsList","BLBD_SECT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divDetail.form.chkAnswYn","value","dsList","ANSW_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divDetail.form.cboPageCnt","value","dsList","PAGE_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divDetail.form.chkApndYn","value","dsList","APND_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divDetail.form.chkReplyYn","value","dsList","REPLY_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divDetail.form.chkUsedYn","value","dsList","USED_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divDetail.form.divUser.form.edtUserId","value","dsList","MGR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divDetail.form.divUser.form.edtName","value","dsList","MGR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divDetail.form.divUser.form.edtCode","value","dsList","MGR_EMP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSearch.form.cboYnType","value","dsCond","USED_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::cmmUserSearch.xfdl");
        };
        
        // User Script
        this.registerScript("boardMagFm.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	boardMagFm.xfdl
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
        this.fvRowPosition = -1;
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	//공통코드
        	var param = [{biztype : "Combo", code : "CM01", objid : this.divDetail.form.cboBlbdType}						// 게시판 구분 (Detail 영역)
        			  ,  {biztype : "Grid",  code : "CM01", objid : this.grdList, bindcolumn : "BLBD_SECT_CD", edit : "false"}	// grid 메시지 구분
        	];
        	this.gfnGetCommonCode(param);

        	this.divSearch.form.cboYnType.set_index(1);
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	if (this.gfnDsIsUpdated(this.dsList)) {
        		// 검색을 진행하면 변경된 데이터가 사라집니다. \n계속 진행 하시겠습니까?
        		var sMsgId = "confirm.before.search";	//메세지ID
        		var arrArg = [""];						//메세지취환될값 배열[생략가능]
        		var sPopId = "search";					//메세지팝업ID[생략가능]	*해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
        		var sMsgCallback = "fnMsgCallback";		//메세지콜백[생략가능] 		* confirm성 메시지를 사용 시 반드시 필요

        		this.gfnAlert(sMsgId, arrArg, sPopId, sMsgCallback);
        	}else{
        		this.fnTranSearch();
        	}
        };

        //추가
        this.cfnAdd = function ()
        {
        	var nRow = this.dsList.addRow();
        	this.dsList.setColumn(nRow,'USED_YN',1);
        	this.dsList.setColumn(nRow,'ANSW_YN',1);
        	this.dsList.setColumn(nRow,'APND_YN',1);
        	this.dsList.setColumn(nRow,'REPLY_YN',1);
        	this.dsList.setColumn(nRow,'PAGE_CNT',30);
        	this.dsList.setColumn(nRow,'BLBD_SECT_CD',"01");

        	this.divDetail.form.edtBlbdCd.set_readonly(false);
        	this.divDetail.form.edtBlbdCd.setFocus();
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
        	if (this.gfnDsIsUpdated(this.dsList) == false) {
        		// 저장할 데이터가 없습니다.
        		this.gfnAlert("msg.save.nochange");
        		return;
        	}

        	if(this.fnFormValidation()){
        		// 저장 하시겠습니까?
        		this.gfnAlert("confirm.save", [""], "saveMsg", "fnMsgCallback");
        		return;
        	}
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

        //저장
        this.fnTranSave = function ()
        {
        	// Insert, Update
        	var strSvcId    = "saveBoard";
        	var strSvcUrl   = "saveBoard.do";
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
        //transaction callback
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "searchBoardList":
        		case "saveBoard":
        			break;
        		default:break;
        	}
        };

        //message callback
        this.fnMsgCallback = function (sPopupId, sRtn)
        {
        	if( this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false){
        		return;
        	}else{
        		switch(sPopupId) {
        			case "search":
        				this.fnTranSearch();//조회
        				break;
        			case "saveMsg":
        				this.fnTranSave(); //저장
        				break;
        			default:break;
        		}
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnFormValidation = function ()
        {
        	// 정합성 체크
        	this.gfnClearValidation(this.dsList);

        	this.gfnSetValidation(this.dsList, "BLBD_CD", "게시판 코드", "required");
        	this.gfnSetValidation(this.dsList, "BLBD_NM", "게시판 명"	 , "required");

        	// Dataset의 변경된 Row Validation check
        	if (this.gfnValidation(this.dsList, "U") == false) return false;
        	else return true;
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.cfnSearch();
        };

        this.dsList_canrowposchange = function(obj,e)
        {
        	var nRowType = obj.getRowType(e.newrow);

        	// Row Type에 따라 메시지 코드 입력 Component를 제어한다.
        	if(nRowType == Dataset.ROWTYPE_INSERT)
        		this.divDetail.form.edtBlbdCd.set_readonly(false);
        	else
        		this.divDetail.form.edtBlbdCd.set_readonly(true);
        };

        this.divCmmnBtn_btnExcelDown_onclick = function(obj,e)
        {
        	// 엑셀 상단 타이틀 텍스트 설정
        	var sSubTitle = this.staTitle01.text;

        	// Excel Export 공통함수 호출
        	this.gfnExcelExport(this.grdList, sSubTitle, sSubTitle, "EXCEL2007","",sSubTitle, true, "");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.divCmmnBtn.form.btnExcelDown.addEventHandler("onclick",this.divCmmnBtn_btnExcelDown_onclick,this);
            this.dsList.addEventHandler("canrowposchange",this.dsList_canrowposchange,this);
        };
        this.loadIncludeScript("boardMagFm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
