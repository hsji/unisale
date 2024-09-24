(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AH_BoardListPopup");
            this.set_titletext("게시판 상세팝업");
            this.set_cssclass("frm_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmm_LanguageCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"string\" size=\"30\"/><Column id=\"CAPTION\" type=\"string\" size=\"255\"/><Column id=\"VAL1\" type=\"string\" size=\"100\"/><Column id=\"VAL2\" type=\"string\" size=\"100\"/><Column id=\"VAL3\" type=\"string\" size=\"100\"/><Column id=\"VAL4\" type=\"string\" size=\"100\"/><Column id=\"REMARK\" type=\"string\" size=\"1073741823\"/><Column id=\"ORD\" type=\"string\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_BoardCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"string\" size=\"30\"/><Column id=\"CAPTION\" type=\"string\" size=\"255\"/><Column id=\"VAL1\" type=\"string\" size=\"100\"/><Column id=\"VAL2\" type=\"string\" size=\"100\"/><Column id=\"VAL3\" type=\"string\" size=\"100\"/><Column id=\"VAL4\" type=\"string\" size=\"100\"/><Column id=\"REMARK\" type=\"string\" size=\"1073741823\"/><Column id=\"ORD\" type=\"string\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_PopupCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"string\" size=\"30\"/><Column id=\"CAPTION\" type=\"string\" size=\"255\"/><Column id=\"VAL1\" type=\"string\" size=\"100\"/><Column id=\"VAL2\" type=\"string\" size=\"100\"/><Column id=\"VAL3\" type=\"string\" size=\"100\"/><Column id=\"VAL4\" type=\"string\" size=\"100\"/><Column id=\"REMARK\" type=\"string\" size=\"1073741823\"/><Column id=\"ORD\" type=\"string\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_ExpressionCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"string\" size=\"30\"/><Column id=\"CAPTION\" type=\"string\" size=\"255\"/><Column id=\"VAL1\" type=\"string\" size=\"100\"/><Column id=\"VAL2\" type=\"string\" size=\"100\"/><Column id=\"VAL3\" type=\"string\" size=\"100\"/><Column id=\"VAL4\" type=\"string\" size=\"100\"/><Column id=\"REMARK\" type=\"string\" size=\"1073741823\"/><Column id=\"ORD\" type=\"string\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_TopFiedFlag", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"CAPTION\">미사용</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CAPTION\">사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Board", this);
            obj._setContents("<ColumnInfo><Column id=\"BL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT\" type=\"STRING\" size=\"256\"/><Column id=\"TOP_FIXED_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"POPUP_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"EXPRESSION_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENTS\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_EMP_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_File", this);
            obj._setContents("<ColumnInfo><Column id=\"FL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_EMP_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_BlSeq", this);
            obj._setContents("<ColumnInfo><Column id=\"BL_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_BottomFrame","0",null,null,"45","1","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_BtnBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"10","15","15","8",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_POP_Cls");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Static("st_Title","10","0","186","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("게시글 상세");
            obj.set_cssclass("sta_POP_Title");
            this.addChild(obj.name, obj);

            obj = new Static("stc_BasicInfo","8","43",null,"31","8",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_POP_GroupBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_Board","8","stc_BasicInfo:0",null,"539","8",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_detailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_LanguageCode","8","8","68","22",null,null,null,null,null,null,this.div_Board.form);
            obj.set_taborder("0");
            obj.set_text("언어구분");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_Board.addChild(obj.name, obj);

            obj = new Combo("cmb_LanguageCode","stc_LanguageCode:8","8","187","22",null,null,null,null,null,null,this.div_Board.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_cmm_LanguageCode");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            this.div_Board.addChild(obj.name, obj);

            obj = new Static("stc_BoardCode","cmb_LanguageCode:8","8","68","22",null,null,null,null,null,null,this.div_Board.form);
            obj.set_taborder("2");
            obj.set_text("게시판구분");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_Board.addChild(obj.name, obj);

            obj = new Combo("cmb_BoardCode","stc_BoardCode:8","8","187","22",null,null,null,null,null,null,this.div_Board.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_cmm_BoardCode");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_text("");
            this.div_Board.addChild(obj.name, obj);

            obj = new Static("stc_TopFiedFlag","cmb_BoardCode:8","8","68","22",null,null,null,null,null,null,this.div_Board.form);
            obj.set_taborder("4");
            obj.set_text("상단고정");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_Board.addChild(obj.name, obj);

            obj = new Combo("cmb_TopFiedFlag","stc_TopFiedFlag:8","8",null,"22","8",null,null,null,null,null,this.div_Board.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_cmm_TopFiedFlag");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_text("");
            this.div_Board.addChild(obj.name, obj);

            obj = new Static("stc_Subject","8","38","68","22",null,null,null,null,null,null,this.div_Board.form);
            obj.set_taborder("6");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_Board.addChild(obj.name, obj);

            obj = new Edit("edt_Subject","stc_Subject:8","38",null,"22","8",null,null,null,null,null,this.div_Board.form);
            obj.set_taborder("7");
            this.div_Board.addChild(obj.name, obj);

            obj = new Static("stc_PopupFlag","8","68","68","22",null,null,null,null,null,null,this.div_Board.form);
            obj.set_taborder("8");
            obj.set_text("팝업사용");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_Board.addChild(obj.name, obj);

            obj = new Static("stc_ExpressionCode","279","68","68","22",null,null,null,null,null,null,this.div_Board.form);
            obj.set_taborder("9");
            obj.set_text("팝업설정");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_Board.addChild(obj.name, obj);

            obj = new Combo("cmb_PopupCode","stc_ExpressionCode:8","68","187","22",null,null,null,null,null,null,this.div_Board.form);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_cmm_PopupCode");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_enable("false");
            obj.set_text("");
            this.div_Board.addChild(obj.name, obj);

            obj = new Static("stc_StartDate","8","98","68","22",null,null,null,null,null,null,this.div_Board.form);
            obj.set_taborder("11");
            obj.set_text("노출시작일");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_Board.addChild(obj.name, obj);

            obj = new Calendar("cal_StartDate","stc_StartDate:8","98","187","22",null,null,null,null,null,null,this.div_Board.form);
            obj.set_taborder("12");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");
            this.div_Board.addChild(obj.name, obj);

            obj = new Static("stc_EndDate","cal_StartDate:8","98","68","22",null,null,null,null,null,null,this.div_Board.form);
            obj.set_taborder("13");
            obj.set_text("노출종료일");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_Board.addChild(obj.name, obj);

            obj = new Calendar("cal_EndDate","stc_EndDate:8","98","187","22",null,null,null,null,null,null,this.div_Board.form);
            obj.set_taborder("14");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_enable("false");
            this.div_Board.addChild(obj.name, obj);

            obj = new Static("stc_Contents","8","128","68",null,null,"8",null,null,null,null,this.div_Board.form);
            obj.set_taborder("15");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_Board.addChild(obj.name, obj);

            obj = new Static("stc_PopupCode","cmb_PopupCode:8","68","68","22",null,null,null,null,null,null,this.div_Board.form);
            obj.set_taborder("16");
            obj.set_text("표출방식");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_Board.addChild(obj.name, obj);

            obj = new Combo("cmb_ExpressionCode","stc_PopupCode:8","68",null,"22","8",null,null,null,null,null,this.div_Board.form);
            obj.set_taborder("17");
            obj.set_innerdataset("ds_cmm_ExpressionCode");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_enable("false");
            this.div_Board.addChild(obj.name, obj);

            obj = new Combo("cmb_PopupFlag","84","68","187","22",null,null,null,null,null,null,this.div_Board.form);
            obj.set_taborder("18");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var div_Board_form_cmb_PopupFlag_innerdataset = new nexacro.NormalDataset("div_Board_form_cmb_PopupFlag_innerdataset", obj);
            div_Board_form_cmb_PopupFlag_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">미사용</Col></Row><Row><Col id=\"datacolumn\">사용</Col><Col id=\"codecolumn\">1</Col></Row></Rows>");
            obj.set_innerdataset(div_Board_form_cmb_PopupFlag_innerdataset);
            this.div_Board.addChild(obj.name, obj);

            obj = new Static("stc_BackgroundContents","84","128",null,null,"8","8",null,null,null,null,this.div_Board.form);
            obj.set_taborder("19");
            obj.set_background("white");
            this.div_Board.addChild(obj.name, obj);

            obj = new WebBrowser("wb_Contents","84","128",null,null,"8","8",null,null,null,null,this.div_Board.form);
            obj.set_taborder("20");
            this.div_Board.addChild(obj.name, obj);

            obj = new Static("stc_BasicInfoTitle","16","51","122","15",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("기본정보");
            obj.set_cssclass("sta_POP_GroupTit");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Save",null,null,"60","22","74","13",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_tran");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Cancel",null,null,"60","22","6","13",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_cancel");
            this.addChild(obj.name, obj);

            obj = new Static("stc_FileInfo","8","618",null,"31","8",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_POP_GroupBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_FileInfoTitle","16","626","122","15",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_POP_GroupTit");
            this.addChild(obj.name, obj);

            obj = new Div("div_File","8","stc_FileInfo:0",null,null,"8","stc_BottomFrame:8",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("div_WF_detailBg");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_FileList","4","3",null,null,"4","4",null,null,null,null,this.div_File.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_File");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"500\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"파일명\"/><Cell col=\"1\" text=\"등록일\"/></Band><Band id=\"body\"><Cell text=\"bind:FILE_NAME\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:INSERT_DATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.div_File.addChild(obj.name, obj);

            obj = new Button("btn_PopFile",null,"623","72","21","12",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("파일등록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Del",null,null,"60","22","142","13",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_tran");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_Board.form
            obj = new Layout("default","",0,0,this.div_Board.form,function(p){});
            this.div_Board.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_File.form
            obj = new Layout("default","",0,0,this.div_File.form,function(p){});
            this.div_File.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",900,800,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_Board.form.cmb_LanguageCode","value","ds_Board","LANGUAGE_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_Board.form.cmb_BoardCode","value","ds_Board","BOARD_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_Board.form.cmb_TopFiedFlag","value","ds_Board","TOP_FIXED_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_Board.form.edt_Subject","value","ds_Board","SUBJECT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_Board.form.cal_StartDate","value","ds_Board","START_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_Board.form.cal_EndDate","value","ds_Board","END_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_Board.form.cmb_PopupFlag","value","ds_Board","POPUP_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_Board.form.cmb_PopupCode","value","ds_Board","POPUP_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_Board.form.cmb_ExpressionCode","value","ds_Board","EXPRESSION_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("AH_BoardListPopup.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("AH_BoardListPopup.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("AH_BoardListPopup.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("AH_BoardListPopup.xfdl","Script::CommGrid.xjs");
        this.addIncludeScript("AH_BoardListPopup.xfdl","Script::ext_WebEditor.xjs");
        this.registerScript("AH_BoardListPopup.xfdl", function() {
        /************************************************************************************************
         * 01. 업무구분 : 홈페이지관리
         * 02. 화면명   : 게시판 상세팝업(AH_BoardListPopup)
         * 03. 화면설명 : 게시판 상세
         * 04. 작성일   : 2022.09.13
         * 05. 작성자   : 박종언
         * 06. 수정이력 :
         ***********************************************************************************************
         *     수정일          이  름    사유
         ***********************************************************************************************
         *
         ***********************************************************************************************/
        /************************************************************************************************
        * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        this.executeIncludeScript("Script::CommSystem.xjs"); /*include "Script::CommSystem.xjs"*/;
        this.executeIncludeScript("Script::CommTrans.xjs"); /*include "Script::CommTrans.xjs"*/;
        this.executeIncludeScript("Script::CommUtil.xjs"); /*include "Script::CommUtil.xjs"*/;
        this.executeIncludeScript("Script::CommGrid.xjs"); /*include "Script::CommGrid.xjs"*/;
        this.executeIncludeScript("Script::ext_WebEditor.xjs"); /*include "Script::ext_WebEditor.xjs"*/;

        /************************************************************************************************
        * 전역 변수 영역
        ************************************************************************************************/
        this.FV_TITLE = "";
        this.FV_BL_SEQ;
        this.FV_MODE;
        this.FV_AUTH;
        this.SAVE_FLAG = false;
        /************************************************************************************************
        * FORM 영역 EVENT 영역
        ************************************************************************************************/
        this.AH_BoardListPopup_onload = function(obj,e)
        {
        	this.gfnCompInit(obj);	//	사용자 Grid
        	this.fnFormInit();
        	this.fnGetCode();
        };

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.fnFormInit = function()
        {
        	var sTitle = this.st_Title.text;
        	this.FV_BL_SEQ =  this.parent.pvBlSeq;
        	this.FV_MODE =  this.parent.pvMode;
        	this.FV_AUTH = this.parent.pvUseAuth;

        	if (this.FV_MODE == "I") {
        		sTitle = "게시글 등록";
        		this.btn_Del.set_visible(false); // 삭제 버튼
        	}
        	this.st_Title.set_text(sTitle);

        	var objWB = this.div_Board.form.wb_Contents;
        	var sContents = "contents";
        	var strEditorKind = "A";
        	commWebEditor.gfnCreateWebEditor(objWB, sContents, strEditorKind);
        	//this.div_Board.form.wb_Contents.show();
        };

        // 권한 처리
        this.fnAuthConfig = function()
        {
        	if(this.FV_AUTH != "ALL")
        	{
        		this.ds_cmm_BoardCode.filter("VAL1.indexOf('"+ this.FV_AUTH +"') > -1 ");
        	}
        };

        this.fnSetContents = function()
        {
        	var objWB = this.div_Board.form.wb_Contents;
        	var sContents = this.ds_Board.getColumn(this.ds_Board.rowposition, "CONTENTS");
        	if(this.gfnIsEmpty(sContents)) sContents = "";

        	commWebEditor.gfnSetContents(objWB, sContents);
        };

        this.fnSetPopupControl = function(colId, value)
        {
        	var sTopFixFlag = this.ds_Board.getColumn(this.ds_Board.rowposition, "TOP_FIXED_FLAG");
        	var sBoardCode = this.ds_Board.getColumn(this.ds_Board.rowposition, "BOARD_CODE");
        	var sPopupCode = this.ds_Board.getColumn(this.ds_Board.rowposition, "POPUP_FLAG");

        	// 초기화
        	this.div_Board.form.cmb_PopupCode.set_enable(false);
        	this.div_Board.form.cmb_ExpressionCode.set_enable(false);
        	this.div_Board.form.cmb_PopupFlag.set_enable(false);
        	this.div_Board.form.cal_StartDate.set_enable(false);
        	this.div_Board.form.cal_EndDate.set_enable(false);

        	if(sBoardCode == "NOTICE")
        	{
        		this.div_Board.form.cmb_PopupFlag.set_enable(true);
        		if(sTopFixFlag == "1" || sPopupCode == "1")
        		{
        			this.div_Board.form.cal_StartDate.set_enable(true);
        			this.div_Board.form.cal_EndDate.set_enable(true);
        		}

        		if(sPopupCode == "1")
        		{
        			this.div_Board.form.cmb_PopupCode.set_enable(true);
        			this.div_Board.form.cmb_ExpressionCode.set_enable(true);
        		}
        	}
        	else
        	{
        		this.div_Board.form.cmb_PopupFlag.set_index(0);
        		if(sTopFixFlag == "1")
        		{
        			this.div_Board.form.cal_StartDate.set_enable(true);
        			this.div_Board.form.cal_EndDate.set_enable(true);
        		}
        	}
        };

        // 게시판구분 설정
        this.fnSetBoardControl = function()
        {
        	var sFileCnt = this.ds_File.rowcount;
        	if(sFileCnt > 0) this.div_Board.form.cmb_BoardCode.set_enable(false);
        	else this.div_Board.form.cmb_BoardCode.set_enable(true);
        };
        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        // 공통코드 조회
        this.fnGetCode = function()
        {
        	this.gfnAddCodeDataset("ds_cmm_LanguageCode",		"LANGUAGE_CODE"); 		// 언어구분
        	this.gfnAddCodeDataset("ds_cmm_BoardCode",			"BOARD_CODE"); 			// 게시판구분
        	this.gfnAddCodeDataset("ds_cmm_PopupCode",			"POPUP_CODE"); 			// 팝업설정
        	this.gfnAddCodeDataset("ds_cmm_ExpressionCode",		"EXPRESSION_CODE");		// 표출방식

        	this.gfnCodeTransaction();
        };

        // 조회
        this.fnQueryData = function()
        {
        	this.gfnAddSendParameter("BL_SEQ", this.FV_BL_SEQ);
        	this.gfnAddOutputDataset("ds_Board",  "dsOutput");
        	this.gfnCommonTransaction("Search", "AH_BoardList_S01");
        };

        // 파일 조회
        this.fnSearchFile = function()
        {
        	var sBlSeq = this.ds_Board.getColumn(this.ds_Board.rowposition, "BL_SEQ");
        	this.gfnAddSendParameter("BL_SEQ", sBlSeq);
        	this.gfnAddOutputDataset("ds_File",  "ds_File");
        	this.gfnCommonTransaction("SearchFile", "CF_HFileMM_S02");
        };

        // 체크 사항
        this.fnValidation = function()
        {
        	var curRow = this.ds_Board.rowposition;
        	var sBoardCode = this.ds_Board.getColumn(curRow, "BOARD_CODE");
        	var sPopupFlag = this.ds_Board.getColumn(curRow, "POPUP_FLAG");
        	var sTopFixFlag = this.ds_Board.getColumn(curRow, "TOP_FIXED_FLAG");

        	/*
        		공통 체크 항목 : 제목( 언어구분, 게시판구분, 상단고정은 default 값으로 지정 되어서 체크 X ), 상단고정 사용일 경우 노출시작일/종료일 체크
        		공지사항 체크 항목 : 팝업설정, 표출방식, 노출시작일, 노출종료일
        	*/
        	if(this.gfnIsEmpty(this.ds_Board.getColumn(curRow, "SUBJECT"))) { alert("제목은 필수 입력 항목입니다."); this.div_Board.form.edt_Subject.setFocus(); return false;}
        	else if(sTopFixFlag == "1")
        	{
        		if(this.gfnIsEmpty(this.ds_Board.getColumn(curRow, "START_DATE"))) { alert("상단고정 사용할 경우 노출시작일은 필수 입력 항목입니다."); this.div_Board.form.cal_StartDate.setFocus(); return false;}
        		else if(this.gfnIsEmpty(this.ds_Board.getColumn(curRow, "END_DATE"))) { alert("상단고정 사용할 경우 노출종료일은 필수 입력 항목입니다."); this.div_Board.form.cal_EndDate.setFocus(); return false;}
        	}


        	if(sBoardCode == "NOTICE")
        	{
        		if(sPopupFlag == "1")
        		{
        			if(this.gfnIsEmpty(this.ds_Board.getColumn(curRow, "POPUP_CODE"))) { alert("팝업설정은 필수 입력 항목입니다."); this.div_Board.form.cmb_PopupCode.setFocus(); return false;}
        			else if(this.gfnIsEmpty(this.ds_Board.getColumn(curRow, "EXPRESSION_CODE"))) { alert("표출방식은 필수 입력 항목입니다."); this.div_Board.form.cmb_ExpressionCode.setFocus(); return false;}
        			else if(this.gfnIsEmpty(this.ds_Board.getColumn(curRow, "START_DATE"))) { alert("팝업 사용 시 노출시작일은 필수 입력 항목입니다."); this.div_Board.form.cal_StartDate.setFocus(); return false;}
        			else if(this.gfnIsEmpty(this.ds_Board.getColumn(curRow, "END_DATE"))) { alert("팝업 사용 시 노출종료일은 필수 입력 항목입니다."); this.div_Board.form.cal_EndDate.setFocus(); return false;}
        		}
        	}

        	return true;
        };

        // 데이터 정리
        this.fnSetData = function()
        {
        	this.ds_Board.set_enableevent(false);
        	var curRow = this.ds_Board.rowposition;
        	var sBoardCode = this.ds_Board.getColumn(curRow, "BOARD_CODE");
        	var sPopupFlag = this.ds_Board.getColumn(curRow, "POPUP_FLAG");
        	var sTopFixFlag = this.ds_Board.getColumn(curRow, "TOP_FIXED_FLAG");

        	if(sBoardCode != "NOTICE")
        	{
        		this.ds_Board.setColumn(curRow, "POPUP_FLAG", "0");
        		this.ds_Board.setColumn(curRow, "POPUP_CODE", null);
        		this.ds_Board.setColumn(curRow, "EXPRESSION_CODE", null);
        		if(sTopFixFlag != "1")
        		{
        			this.ds_Board.setColumn(curRow, "START_DATE", null);
        			this.ds_Board.setColumn(curRow, "END_DATE", null);
        		}
        	}

        	this.ds_Board.setColumn(curRow, "CONTENTS", commWebEditor.gfnGetContents(this.div_Board.form.wb_Contents));
        	this.ds_Board.set_enableevent(true);
        	this.fnSaveData("Save");
        };

        // 저장
        this.fnSaveData = function(sMode)
        {
        	var strSvcID = "SaveData";
        	if(sMode == "Delete")
        	{
        		this.ds_Board.deleteRow(this.ds_Board.rowposition);
        		this.ds_File.deleteAll();
        		strSvcID = "Delete";
        	}

        	this.gfnAddSendParameter("BL_SEQ", this.FV_BL_SEQ);
        	this.gfnAddInputDataset ("ds_Board",	"ds_Board");
        	this.gfnAddInputDataset ("ds_File",		"ds_File");
        	this.gfnAddOutputDataset("ds_BlSeq",  	"ds_BlSeq");
        	this.gfnCommonTransaction(strSvcID, "AH_BoardList_R01");
        };

        // 파일 등록 팝업 Validation
        this.fnFileValidation = function()
        {
        	var bSucFile = true;
        	var sFileCnt = this.ds_File.rowcount;

        	if(sFileCnt > 0)
        	{
        		for(var i = 0; i < sFileCnt; i++)
        		{
        			var sType = this.ds_File.getRowType(i);
        			if(sType == "2")
        			{
        				bSucFile = false;
        				break;
        			}
        		}
        	}

        	return bSucFile;
        };

        // 파일등록 팝업
        this.fnPopFile = function()
        {
        	var sBlSeq = this.ds_Board.getColumn(this.ds_Board.rowposition, "BL_SEQ");
        	var sBoardCode = this.ds_Board.getColumn(this.ds_Board.rowposition, "BOARD_CODE");

        	var args = {
        					BOARD_CODE:sBoardCode
        					,BL_SEQ:sBlSeq
        					,USE_MULTI_FILE:false
        				}
        	this.commUtil.popupHomepageFileMaster(this, args, "fnPopupCallBack");
        };

        // 파일 다운로드
        this.fnDownload = function()
        {
        	var curRow = this.ds_File.rowposition;
        	var sFlSeq = this.ds_File.getColumn(curRow, "FL_SEQ");
        	if(!this.gfnIsEmpty(sFlSeq)) this.gfnHomepageFileDownload(sFlSeq);
        	else alert("저장을 한 후 다운로드 진행이 가능합니다.");
        };

         // 화면 콜백
        this.fnCallBack = function (strSvcID, nErrorCode, strErrorMag)
        {
        	switch (strSvcID)
        	{
        		case "gfnGetCode" :
        			this.fnAuthConfig();
        			if (this.FV_MODE == "I") {
        				var nRow = this.ds_Board.addRow();

        				this.div_Board.form.cmb_BoardCode.set_index(0);
        				this.div_Board.form.cmb_LanguageCode.set_index(0);
        				this.div_Board.form.cmb_TopFiedFlag.set_index(0);
        				this.div_Board.form.cmb_PopupFlag.set_index(0);

        // 				var sBoardCode = this.div_Board.form.cmb_BoardCode.value;
        // 				var sPopupFlag = this.div_Board.form.cmb_PopupFlag.value;
        // 				this.ds_Board.setColumn(nRow, "BOARD_CODE", sBoardCode);
        // 				this.ds_Board.setColumn(nRow, "POPUP_FLAG", sPopupFlag);

        // 				var a = this.div_Search.form.cmb_LanguageCode.value;
        // 				this.div_Search.form.cmb_BoardCode.set_index(0);
        //
        // 				this.ds_Board.setColumn(nRow, "LANGUAGE_CODE", a);
        			} else {
        				this.fnQueryData();
        			}
        			break;
        		case "Search" :
        			if(this.FV_MODE != "I")
        			{
        				var sPopupFlag = this.ds_Board.getColumn(this.ds_Board.rowposition, "POPUP_FLAG");
        				this.fnSetPopupControl("POPUP_FLAG", sPopupFlag);
        				this.fnSearchFile();
        			}
        			break;
        		case "SearchFile" :
        			this.fnSetBoardControl();
        			break;
        		case "Delete" :
        			alert("삭제 되었습니다.");
        			this.commUtil.popupClose("Delete");
        			break;
        		case "SaveData" :
        			this.SAVE_FLAG = true;
        			alert("저장 되었습니다.");
        			if(this.FV_MODE == "I")
        			{
        				this.FV_MODE = "U";
        				var sBlSeq = this.ds_BlSeq.getColumn(this.ds_BlSeq.rowposition, "BL_SEQ");
        				this.FV_BL_SEQ = sBlSeq;
        				this.btn_Del.set_visible(true);
        			}

        			this.fnQueryData();
        			break;
        	}
        };

        // 팝업 콜백
        this.fnPopupCallBack = function(sPopupId, Variant)
        {
        	Variant = this.commUtil.popupReturn();
        	if(this.gfnIsEmpty(Variant))
        	{
        		return;
        	}
        	else
        	{
        		switch(sPopupId)
        		{
        			case "popHomepageFileManager" : // 파일 팝업
        				this.ds_File.deleteAll();
        				if(Variant != "DELETE ALL")
        				{
        					var ds = new nexacro.Dataset();
        					ds.loadXML(Variant);
        					if(ds.rowcount > 0)
        					{
        						for(var i = 0; i < ds.rowcount; i++)
        						{
        							var sBlSeq = ds.getColumn(i, "BL_SEQ");
        							var sBoardCode = ds.getColumn(i, "BOARD_CODE");
        							var sFileName = ds.getColumn(i, "FILE_NAME");
        							var sSaveFileName = ds.getColumn(i, "SAVE_FILE_NAME");
        							var sSavePath = ds.getColumn(i, "SAVE_PATH");
        							sSavePath = sSavePath.replaceAll('\\', '/');

        							var nRow = this.ds_File.addRow();
        							if(!this.gfnIsEmpty(sBlSeq)) this.ds_File.setColumn(nRow, "BL_SEQ", sBlSeq);
        							this.ds_File.setColumn(nRow, "BOARD_CODE", sBoardCode);
        							this.ds_File.setColumn(nRow, "FILE_NAME", sFileName);
        							this.ds_File.setColumn(nRow, "SAVE_FILE_NAME", sSaveFileName);
        							this.ds_File.setColumn(nRow, "SAVE_PATH", sSavePath);
        						}
        					}
        				}

        				this.fnSetBoardControl();
        			break;
        		}
        	}
        }
        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.common_onclick = function(obj,e)
        {
        	switch(obj.name) {
        		case "btn_Save" : // 저장
        			if(this.fnValidation()) this.fnSetData();
        			break;

        		case "btn_close": case "btn_Cancel":
        			//this.close();
        			if(this.SAVE_FLAG) this.commUtil.popupClose(this.ds_Board);
        			else this.commUtil.popupClose("");
        			break;

        		case "btn_PopFile":
        			var bSucFile = this.fnFileValidation();
        			if(!bSucFile)
        			{
        				if(this.confirm("저장하지 않는 파일이 존재합니다.\n삭제 후 새로 등록 하시겠습니까?"))
        				{
        					this.ds_File.deleteAll();
        					this.fnPopFile();
        				}
        			}
        			else
        			{
        				this.fnPopFile();
        			}
        			break;

        		case "btn_Del":
        			if(this.confirm("해당 게시글을 삭제 하시겠습니까?")) this.fnSaveData("Delete");
        			break;
        	}
        };

        // 에디터에서 결과물 반환 이벤트
        this.div_Board_wb_Contents_onusernotify = function(obj,e)
        {
        	if(e.userdata == "contents")
        	{
        		this.fnSetContents();
        	}
        };

        this.ds_Board_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "POPUP_FLAG")
        	{
        		this.fnSetPopupControl(e.columnid, e.newvalue);
        	}
        	else if(e.columnid == "BOARD_CODE")
        	{
        		if(e.postvalue == "NOTICE") this.fnSetPopupControl(e.columnid, "1");
        		else this.fnSetPopupControl(e.columnid, "0");
        	}
        	else if(e.columnid == "TOP_FIXED_FLAG")
        	{
        		this.fnSetPopupControl(e.columnid, e.newvalue);
        	}
        };

        this.div_File_grd_FileList_oncelldblclick = function(obj,e)
        {
        	this.fnDownload();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.AH_BoardListPopup_onload,this);
            this.btn_close.addEventHandler("onclick",this.common_onclick,this);
            this.div_Board.form.cmb_BoardCode.addEventHandler("onitemchanged",this.div_Board_cmb_BoardCode_onitemchanged,this);
            this.div_Board.form.wb_Contents.addEventHandler("onusernotify",this.div_Board_wb_Contents_onusernotify,this);
            this.btn_Save.addEventHandler("onclick",this.common_onclick,this);
            this.btn_Cancel.addEventHandler("onclick",this.common_onclick,this);
            this.div_File.form.grd_FileList.addEventHandler("oncelldblclick",this.div_File_grd_FileList_oncelldblclick,this);
            this.btn_PopFile.addEventHandler("onclick",this.common_onclick,this);
            this.btn_Del.addEventHandler("onclick",this.common_onclick,this);
            this.ds_Board.addEventHandler("oncolumnchanged",this.ds_Board_oncolumnchanged,this);
        };
        this.loadIncludeScript("AH_BoardListPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
