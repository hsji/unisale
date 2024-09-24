(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AT_TranslationMenu");
            this.set_titletext("번역메뉴목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTranslationMenuList", this);
            obj._setContents("<ColumnInfo><Column id=\"RN\" type=\"STRING\" size=\"256\"/><Column id=\"FRM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_NAME_JAP\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_NAME_ENG\" type=\"STRING\" size=\"256\"/><Column id=\"USE_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DEPT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTranslationMenuListCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTranslationMenuExcelList", this);
            obj._setContents("<ColumnInfo><Column id=\"FRM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_NAME_JAP\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_NAME_ENG\" type=\"STRING\" size=\"256\"/><Column id=\"USE_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_UseFlag", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION_JAP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"CAPTION\">사용</Col><Col id=\"CAPTION_JAP\">使用</Col></Row><Row><Col id=\"CODE\">0</Col><Col id=\"CAPTION\">미사용</Col><Col id=\"CAPTION_JAP\">未使用</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_TranslationKind", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_Search","8","8",null,"40","8",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SchList");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_TranslationKind","8","9","58","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_text("번역 여부");
            obj.getSetter("TL_SEQ").set("22602");
            this.div_Search.addChild(obj.name, obj);

            obj = new Combo("cmb_TranslationKind","stc_TranslationKind:8","9","187","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_cmm_TranslationKind");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("stc_TLData","cmb_TranslationKind:8","9","58","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("0");
            obj.set_text("단어");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("22603");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_Search",null,"9","58","22","74",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_SchText");
            obj.getSetter("TL_SEQ").set("118");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_Save",null,"9","58","22","btn_Search:8",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_tran");
            obj.getSetter("TL_SEQ").set("115");
            this.div_Search.addChild(obj.name, obj);

            obj = new Edit("edt_TLData","stc_TLData:8","9","300","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("3");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_Excel","btn_Search:8","9","58","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("6");
            obj.set_text("Excel");
            obj.set_cssclass("btn_WF_Excel");
            this.div_Search.addChild(obj.name, obj);

            obj = new Div("div_paging","8",null,null,"24","24","10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_url("Common::COM_Paging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("stc_TranslationListBg","8","58","800","31",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_POP_GroupBg");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_TranslationList","8","stc_TranslationListBg:0","800",null,null,"div_paging:8",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsTranslationMenuList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"No\" TL_SEQ=\"167\"/><Cell col=\"1\" text=\"국문 메뉴명\" TL_SEQ=\"22621\"/><Cell col=\"2\" text=\"일문 메뉴명\" TL_SEQ=\"22622\"/><Cell col=\"3\" text=\"영문 메뉴명\" TL_SEQ=\"22623\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:FORM_NAME\" textAlign=\"left\" tooltiptext=\"bind:FORM_NAME\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:FORM_NAME_JAP\" textAlign=\"left\" tooltiptext=\"bind:FORM_NAME_JAP\"/><Cell col=\"3\" text=\"bind:FORM_NAME_ENG\" textAlign=\"left\" tooltiptext=\"bind:FORM_NAME_ENG\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_TranslationExcelList","1370","58",null,null,"-1354","42",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_visible("false");
            obj.set_binddataset("dsTranslationMenuExcelList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"메뉴일련번호\" TL_SEQ=\"22619\"/><Cell col=\"1\" text=\"국문 메뉴명\" TL_SEQ=\"22621\"/><Cell col=\"2\" text=\"일문 메뉴명\" TL_SEQ=\"22622\"/><Cell col=\"3\" text=\"영문 메뉴명\" TL_SEQ=\"22623\"/><Cell col=\"4\" text=\"사용여부\" TL_SEQ=\"669\"/><Cell col=\"5\" text=\"비고\" TL_SEQ=\"45\"/><Cell col=\"6\" text=\"등록일\" TL_SEQ=\"77\"/><Cell col=\"7\" text=\"등록자\" TL_SEQ=\"81\"/></Band><Band id=\"body\"><Cell text=\"bind:FRM_SEQ\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:FORM_NAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:FORM_NAME_JAP\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:FORM_NAME_ENG\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:USE_FLAG\" displaytype=\"combotext\" combodataset=\"ds_cmm_UseFlag\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" TL_FLAG=\"1\"/><Cell col=\"5\" text=\"bind:REMARK\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:INSERT_DATE\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"7\" text=\"bind:INSERT_EMP_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_TranslationListTit","16","66","152","15",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("메뉴목록");
            obj.set_cssclass("sta_POP_GroupTit");
            obj.getSetter("TL_SEQ").set("22620");
            this.addChild(obj.name, obj);

            obj = new Static("stc_TranslationListBg00","816","58",null,"31","8",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_POP_GroupBg");
            this.addChild(obj.name, obj);

            obj = new Div("div_InsertInfo","816",null,null,"22","8","div_paging:8",null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("stc_InsertEmpNm","6","0","80","22",null,null,null,null,null,null,this.div_InsertInfo.form);
            obj.set_taborder("0");
            obj.set_text("등록자");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("81");
            this.div_InsertInfo.addChild(obj.name, obj);

            obj = new Edit("edt_InsertEmpNm","94","0","130","22",null,null,null,null,null,null,this.div_InsertInfo.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.div_InsertInfo.addChild(obj.name, obj);

            obj = new Static("stc_InsertDate","232","0","80","22",null,null,null,null,null,null,this.div_InsertInfo.form);
            obj.set_taborder("2");
            obj.set_text("등록일");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("77");
            this.div_InsertInfo.addChild(obj.name, obj);

            obj = new Calendar("cal_InsertDate","320","0","128","22",null,null,null,null,null,null,this.div_InsertInfo.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_InsertInfo.addChild(obj.name, obj);

            obj = new Div("div_TranslationDet","grd_TranslationList:8","stc_TranslationListBg00:0",null,null,"8","div_InsertInfo:8",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_FRMSeq","6","9","80","22",null,null,null,null,null,null,this.div_TranslationDet.form);
            obj.set_taborder("0");
            obj.set_text("메뉴코드");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("22625");
            this.div_TranslationDet.addChild(obj.name, obj);

            obj = new Edit("edt_FRMSeq","stc_FRMSeq:8","9",null,"22","8",null,null,null,null,null,this.div_TranslationDet.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.div_TranslationDet.addChild(obj.name, obj);

            obj = new Static("stc_TLDataEng","6","235","80","90",null,null,null,null,null,null,this.div_TranslationDet.form);
            obj.set_taborder("6");
            obj.set_text("영문 메뉴명");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("22623");
            this.div_TranslationDet.addChild(obj.name, obj);

            obj = new Static("stc_TLDataJap","6","137","80",null,null,"stc_TLDataEng:8",null,null,null,null,this.div_TranslationDet.form);
            obj.set_taborder("4");
            obj.set_text("일문 메뉴명");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("22622");
            this.div_TranslationDet.addChild(obj.name, obj);

            obj = new Static("stc_TLDataKor","6","39","80",null,null,"stc_TLDataJap:8",null,null,null,null,this.div_TranslationDet.form);
            obj.set_taborder("2");
            obj.set_text("국문 메뉴명");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("22621");
            this.div_TranslationDet.addChild(obj.name, obj);

            obj = new TextArea("ta_FormNameEng","stc_TLDataEng:8","235",null,"90","8",null,null,null,null,null,this.div_TranslationDet.form);
            obj.set_taborder("7");
            this.div_TranslationDet.addChild(obj.name, obj);

            obj = new TextArea("ta_FormNameJap","stc_TLDataJap:8","137",null,null,"8","ta_FormNameEng:8",null,null,null,null,this.div_TranslationDet.form);
            obj.set_taborder("5");
            this.div_TranslationDet.addChild(obj.name, obj);

            obj = new TextArea("ta_FormName","stc_TLDataKor:8","39",null,null,"8","ta_FormNameJap:8",null,null,null,null,this.div_TranslationDet.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.div_TranslationDet.addChild(obj.name, obj);

            obj = new Static("stc_UseFlag","6","331","80","22",null,null,null,null,null,null,this.div_TranslationDet.form);
            obj.set_taborder("8");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("669");
            this.div_TranslationDet.addChild(obj.name, obj);

            obj = new Radio("rd_UseFlag","stc_UseFlag:8","331","354","25",null,null,null,null,null,null,this.div_TranslationDet.form);
            obj.set_taborder("9");
            obj.set_codecolumn("CODE");
            obj.set_innerdataset("ds_cmm_UseFlag");
            obj.set_rowcount("1");
            obj.set_datacolumn("CAPTION");
            obj.set_readonly("true");
            obj.getSetter("TL_FLAG").set("1");
            obj.set_text("사용");
            obj.set_value("1");
            obj.set_index("0");
            this.div_TranslationDet.addChild(obj.name, obj);

            obj = new Static("stc_Remark","6","361","80",null,null,"0",null,null,null,null,this.div_TranslationDet.form);
            obj.set_taborder("10");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("45");
            this.div_TranslationDet.addChild(obj.name, obj);

            obj = new TextArea("ta_Remark","stc_Remark:8","361",null,null,"8","0",null,null,null,null,this.div_TranslationDet.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.div_TranslationDet.addChild(obj.name, obj);

            obj = new Static("stc_TranslationListTit00","828","66","152","15",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("번역 메뉴정보");
            obj.set_cssclass("sta_POP_GroupTit");
            obj.getSetter("TL_SEQ").set("22624");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_Search.form
            obj = new Layout("default","",0,0,this.div_Search.form,function(p){});
            this.div_Search.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_paging
            obj = new Layout("default","",0,0,this.div_paging.form,function(p){});
            this.div_paging.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_InsertInfo.form
            obj = new Layout("default","",0,0,this.div_InsertInfo.form,function(p){});
            this.div_InsertInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_TranslationDet.form
            obj = new Layout("default","",0,0,this.div_TranslationDet.form,function(p){});
            this.div_TranslationDet.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_TranslationDet.form.edt_FRMSeq","value","dsTranslationMenuList","FRM_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_TranslationDet.form.ta_FormName","value","dsTranslationMenuList","FORM_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_TranslationDet.form.ta_FormNameJap","value","dsTranslationMenuList","FORM_NAME_JAP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_TranslationDet.form.ta_FormNameEng","value","dsTranslationMenuList","FORM_NAME_ENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_TranslationDet.form.rd_UseFlag","value","dsTranslationMenuList","USE_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_TranslationDet.form.ta_Remark","value","dsTranslationMenuList","REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_InsertInfo.form.edt_InsertEmpNm","value","dsTranslationMenuList","INSERT_EMP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_InsertInfo.form.cal_InsertDate","value","dsTranslationMenuList","INSERT_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Common::COM_Paging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("AT_TranslationMenu.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("AT_TranslationMenu.xfdl","Script::CommGrid.xjs");
        this.addIncludeScript("AT_TranslationMenu.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("AT_TranslationMenu.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("AT_TranslationMenu.xfdl","Script::ext_CommEco.xjs");
        this.registerScript("AT_TranslationMenu.xfdl", function() {
        /************************************************************************************************
         * 01. 업무구분 : 번역관리
         * 02. 화면명   : 번역메뉴목록 탭(AT_TranslationMenu)
         * 03. 화면설명 : 번역메뉴목록
         * 04. 작성일   : 2023.02.06
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
        this.executeIncludeScript("Script::CommTrans.xjs"); /*include "Script::CommTrans.xjs"*/
        this.executeIncludeScript("Script::CommGrid.xjs"); /*include "Script::CommGrid.xjs"*/
        this.executeIncludeScript("Script::CommUtil.xjs"); /*include "Script::CommUtil.xjs"*/
        this.executeIncludeScript("Script::CommSystem.xjs"); /*include "Script::CommSystem.xjs"*/
        this.executeIncludeScript("Script::ext_CommEco.xjs"); /*include "Script::ext_CommEco.xjs"*/

        /************************************************************************************************
         * 전역 변수 영역
         ************************************************************************************************/
        this.gUseAuth;
        this.bFirst = true;		// 페이징공통 컴포넌트 초기화 처리 Flag
        this.curStartNum = 1;	// 현재 게시글 시작 번호
        this.curEndNum;			// 현재 게시글 마지막 번호
         /************************************************************************************************
         * FORM 영역
         ************************************************************************************************/
        this.AT_TranslationMenu_onload = function(obj,e)
        {
        	this.gfnCompInit(obj);  	// Grid 공통함수 호출
        	this.fnGetCode();			// 공통코드 조회
        };

        // 권한 처리
        this.fnAuthConfig = function()
        {
        	this.gUseAuth = this.parent.parent.parent.FV_AUTH;
        	this.fnFormInit();
        };

        this.fnFormInit = function()
        {
        	// 번역여부 : "전체"
        	this.div_Search.form.cmb_TranslationKind.set_index(0);

        	var bReadOnly = false;

        	if(this.gUseAuth != "ALL") {
        		bReadOnly = true;
        	}

        	this.div_TranslationDet.form.ta_FormNameEng.set_readonly(bReadOnly);

        	// 조회 설정
        	this.div_paging.form.fn_loadInit(0, 10, true, this);
        	this.fnSearchCnt();
        };

         /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
         ************************************************************************************************/
        // 공통코드 조회
        this.fnGetCode = function()
        {
        	this.gfnAddCodeDataset("ds_cmm_TranslationKind",	"NO_TRANSLATION_KIND", true); 		// 미 번역 종류
        	this.gfnCodeTransaction();
        };

        // [필수공통함수] 페이징공통화면에서 초기화 검색시 호출하는 함수
        this.fnPagingInit = function()
        {
        	this.fnSearchCnt();
        };

        // [필수공통함수] 공통 페이징화면에서 호출하는 함수
        this.fnPagingSearch = function(nStartNum, nEndNum)
        {
        	this.fnSearch(nStartNum, nEndNum);
        };

        // 조회 Reset
        this.fnResetSearch = function()
        {
        	this.bFirst = true;
        	this.div_paging.form.fn_goFirst();
        };

        // 조회 CNT
        this.fnSearchCnt = function()
        {
        	var sData = this.div_Search.form.edt_TLData.value;
        	var sTranslationKind = this.div_Search.form.cmb_TranslationKind.value;

        	this.gfnAddSendParameter("DATA", sData);
        	this.gfnAddSendParameter("TRANSLATION_KIND", sTranslationKind);

        	this.gfnAddOutputDataset("dsTranslationMenuListCnt", "dsOutput");
        	this.gfnCommonTransaction("Search_TranslationMenu_Cnt", "AT_TranslationMenu_S01_Cnt");
        };

        // 조회
        this.fnSearch = function(nStartNum, nEndNum)
        {
        	var sData = this.div_Search.form.edt_TLData.value;
        	var sTranslationKind = this.div_Search.form.cmb_TranslationKind.value;

        	// 저장 후 리 로딩시 필요
        	this.curStartNum = nStartNum;
        	this.curEndNum = nEndNum;

        	this.gfnAddSendParameter("START_NO", nStartNum);
        	this.gfnAddSendParameter("END_NO", nEndNum);
        	this.gfnAddSendParameter("DATA", sData);
        	this.gfnAddSendParameter("TRANSLATION_KIND", sTranslationKind);

        	this.gfnAddOutputDataset("dsTranslationMenuList", "dsOutput");
        	this.gfnCommonTransaction("Search_TranslationMenu", "AT_TranslationMenu_S01", this.grd_TranslationList);
        };

        // Validation
        this.fnValidation = function()
        {
        	/*
        		필수 값 : 	 TL_DATA_KOR
        					,USE_FLAG
        	*/
        	var bResult = this.gfnIsUpdateDs(this.dsTranslationMenuList);

        	if(bResult) {
        		this.fnSetData();
        	} else {
        		alert(this.gfnGetTransTxt(1215,"변경된 내역이 없습니다."));
        	}
        };

        // 데이터 셋팅
        this.fnSetData = function()
        {
        	this.dsTranslationMenuList.set_enableevent(false);

        	for(var i = 0; i < this.dsTranslationMenuList.rowcount; i++) {
        		var sFormNmJap = this.dsTranslationMenuList.getColumn(i, "FORM_NAME_JAP");
        		var sFormNmEng = this.dsTranslationMenuList.getColumn(i, "FORM_NAME_ENG");

        		if(this.gfnIsEmpty(sFormNmJap)) this.dsTranslationMenuList.setColumn(i, "FORM_NAME_JAP", null);
        		if(this.gfnIsEmpty(sFormNmEng)) this.dsTranslationMenuList.setColumn(i, "FORM_NAME_ENG", null);
        	}

        	this.dsTranslationMenuList.set_enableevent(true);

        	this.fnSave();
        };

        // 저장
        this.fnSave = function()
        {
        	this.gfnAddInputDataset("dsTranslationMenuList", "dsInput");
        	this.gfnCommonTransaction("Save", "AT_TranslationMenu_R01");
        };

        // 엑셀 데이터 조회
        this.fnExcelData = function()
        {
        	var sData = this.div_Search.form.edt_TLData.value;
        	var sTranslationKind = this.div_Search.form.cmb_TranslationKind.value;

        	this.gfnAddSendParameter("DATA", sData);
        	this.gfnAddSendParameter("TRANSLATION_KIND", sTranslationKind);

        	this.gfnAddOutputDataset("dsTranslationMenuExcelList", "dsOutput");
        	this.gfnCommonTransaction("Search_TranslationMenuExcelList", "AT_TranslationMenu_S02", this.grd_TranslationExcelList);
        };

        // 엑셀
        this.fnExcel = function()
        {
        	var objGrd = this.grd_TranslationExcelList;
        	var sFileNm = this.gfnGetTransTxt(22599,"번역메뉴목록");
        	var sSTranslationKindNm = this.div_Search.form.cmb_TranslationKind.text;
        	sFileNm += "(" + sSTranslationKindNm + ")";

        	this.gfn_excelExport(this, objGrd, sFileNm);
        };

        // 화면 콜백
        this.fnCallBack = function (strSvcID, nErrorCode, strErrorMag)
        {
        	if (nErrorCode<0) {
        		this.alert("["+strSvcID+":"+nErrorCode+"] "+strErrorMag);
        		return;
        	} else {
        		switch (strSvcID)
        		{
        			case "gfnGetCode" :
        				this.ds_cmm_TranslationKind.filter("CODE!='KOR'");
        				// 권한 처리
        				this.fnAuthConfig();
        				break;
        			case "Search_TranslationMenu_Cnt" :
        				this.fnSearch(1, this.div_paging.form.fv_pageListCnt);
        				break;
        			case "Search_TranslationMenu" :
        				if(this.bFirst) {
        					// [필수] 전체건수 설정
        					this.div_paging.form.fn_init(this.dsTranslationMenuListCnt.getColumn(0, "TOTAL_COUNT"), 10, true, this);
        					this.bFirst = false;
        				}
        				break;
        			case "Search_TranslationMenuExcelList" :
        				this.fnExcel();
        				break;
        			case "Save" :
        				this.fnSearch(this.curStartNum, this.curEndNum);
        				break;
        		}
        	}
        };
         /************************************************************************************************
         * FORM 공통 FUNCTION 영역
         ************************************************************************************************/

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        this.common_onclick = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_Search":	// 조회
        			this.fnResetSearch();
        			//this.fnSearchCnt();
        			break;
        		case "btn_Save":	// 저장
        			this.fnValidation();
        			break;
        		case "btn_Excel":	// 엑셀
        			this.fnExcelData();
        			break;
        	}
        };

        // 엔터 쳤을 경우 이벤트
        this.div_Search_edt_TLData_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.fnResetSearch();
        	}
        };

        // 번역 대상 변경 이벤트
        this.div_Search_cmb_TranslationKind_onitemchanged = function(obj,e)
        {
        	this.fnResetSearch();
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.AT_TranslationMenu_onload,this);
            this.div_Search.form.cmb_TranslationKind.addEventHandler("onitemchanged",this.div_Search_cmb_TranslationKind_onitemchanged,this);
            this.div_Search.form.btn_Search.addEventHandler("onclick",this.common_onclick,this);
            this.div_Search.form.btn_Save.addEventHandler("onclick",this.common_onclick,this);
            this.div_Search.form.edt_TLData.addEventHandler("onkeydown",this.div_Search_edt_TLData_onkeydown,this);
            this.div_Search.form.btn_Excel.addEventHandler("onclick",this.common_onclick,this);
        };
        this.loadIncludeScript("AT_TranslationMenu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
