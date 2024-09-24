(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("docMain");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"IN_FDATE\" type=\"STRING\" size=\"256\"/><Column id=\"IN_TDATE\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SYS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MTG_RESULT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"END_NUM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"USED_FLAG\" type=\"undefined\" size=\"0\"/><Column id=\"MTG_END_TM\" type=\"string\" size=\"32\"/><Column id=\"PDF_PAGE\" type=\"int\" size=\"4\"/><Column id=\"MTG_DATE\" type=\"string\" size=\"32\"/><Column id=\"MTG_RESULT_TYPE\" type=\"undefined\" size=\"0\"/><Column id=\"MTG_RESULT_CN\" type=\"string\" size=\"32\"/><Column id=\"CLSDR_MTG_AT\" type=\"string\" size=\"32\"/><Column id=\"ETC_MATTER\" type=\"undefined\" size=\"0\"/><Column id=\"HOST_NAME\" type=\"string\" size=\"32\"/><Column id=\"HOST_ID\" type=\"string\" size=\"32\"/><Column id=\"BIZ_CODE\" type=\"string\" size=\"32\"/><Column id=\"DOC_TITLE\" type=\"string\" size=\"32\"/><Column id=\"INPT_DTTM\" type=\"string\" size=\"32\"/><Column id=\"EXPIRE_DATE\" type=\"string\" size=\"32\"/><Column id=\"EDIT_INFO\" type=\"undefined\" size=\"0\"/><Column id=\"DOC_ID\" type=\"string\" size=\"32\"/><Column id=\"PDF_FILE_NM\" type=\"undefined\" size=\"0\"/><Column id=\"MTG_CNT\" type=\"int\" size=\"4\"/><Column id=\"WORK_NAME\" type=\"string\" size=\"32\"/><Column id=\"MTG_MTR_CN\" type=\"string\" size=\"32\"/><Column id=\"MTG_BEGIN_TM\" type=\"string\" size=\"32\"/><Column id=\"MTG_PLACE_CD\" type=\"string\" size=\"32\"/><Column id=\"MTG_SEQ\" type=\"int\" size=\"4\"/><Column id=\"READNG_AT\" type=\"string\" size=\"32\"/><Column id=\"HOST_TYPE\" type=\"string\" size=\"32\"/><Column id=\"USER_NAME\" type=\"string\" size=\"32\"/><Column id=\"PLACE_NAME\" type=\"string\" size=\"32\"/><Column id=\"HOST_WORK_NAME\" type=\"string\" size=\"32\"/><Column id=\"CHGE_ID\" type=\"string\" size=\"32\"/><Column id=\"MTG_AT\" type=\"undefined\" size=\"0\"/><Column id=\"SYS_CODE\" type=\"string\" size=\"32\"/><Column id=\"PDF_ORIG_FILE_NM\" type=\"undefined\" size=\"0\"/><Column id=\"PDF_FILE_PATH_NM\" type=\"undefined\" size=\"0\"/><Column id=\"READNG_DATE\" type=\"string\" size=\"32\"/><Column id=\"INPT_ID\" type=\"string\" size=\"32\"/><Column id=\"EDIT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ACNT\" type=\"INT\" size=\"256\"/></ColumnInfo>");
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


            obj = new Dataset("dsResultCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">전체</Col></Row><Row><Col id=\"NAME\">완료</Col><Col id=\"CODE\">Z</Col></Row><Row><Col id=\"NAME\">반송</Col><Col id=\"CODE\">R</Col></Row><Row><Col id=\"CODE\">P</Col><Col id=\"NAME\">열람중</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDept", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_YN\" type=\"string\" size=\"32\"/><Column id=\"ST_CD\" type=\"string\" size=\"32\"/><Column id=\"DT_LVL\" type=\"int\" size=\"4\"/><Column id=\"DT_NAME\" type=\"string\" size=\"32\"/><Column id=\"SortOrder\" type=\"string\" size=\"32\"/><Column id=\"HIPO_DT_CD\" type=\"string\" size=\"32\"/><Column id=\"CHGE_ID\" type=\"string\" size=\"32\"/><Column id=\"DT_CD\" type=\"string\" size=\"32\"/><Column id=\"SYS_CODE\" type=\"string\" size=\"32\"/><Column id=\"BIZ_CODE\" type=\"string\" size=\"32\"/><Column id=\"INPT_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"DT_ORDR\" type=\"int\" size=\"4\"/><Column id=\"INPT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResultCode00", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">진행중</Col></Row><Row><Col id=\"NAME\">완료</Col><Col id=\"CODE\">Z</Col></Row><Row><Col id=\"NAME\">반송</Col><Col id=\"CODE\">R</Col></Row><Row><Col id=\"CODE\">P</Col><Col id=\"NAME\">열람중</Col></Row><Row><Col id=\"CODE\"/><Col id=\"NAME\">진행중</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10.00","10",null,"87","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","11","86","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("회의그룹");
            obj.set_cssclass("sta_WF_SchLabel");
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

            obj = new Combo("cboDocTree","staTitle00:0.00","10","194","27",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_innerdataset("dsDept");
            obj.set_codecolumn("DT_CD");
            obj.set_datacolumn("DT_NAME");
            obj.set_text("cbo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle02","cboDocTree:0","11","87","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle03_00","280","45","87","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("작성일");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divCalPeriod","staTitle03_00:0","45","290","27",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_url("common::cmmPeriodCalendar.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnDelDate","divCalPeriod:2","46","20","23",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_background("url(\'theme://images/img_titlebar_Close.png\') no-repeat center center");
            obj.set_border("0px none");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnDelUser","659","13","20","23",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_background("url(\'theme://images/img_titlebar_Close.png\') no-repeat center center");
            obj.set_border("0px none");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle03_00_00","btnDelUser:15","11","68","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMsgTxt00","staTitle03_00_00:0","10","290","27",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle00_00","0","46","86","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("열람상태");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboDocTree00","86","45","194","27",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_innerdataset("dsResultCode");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_text("cbo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divUser","staTitle02:0","10","290","27",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("div00");
            obj.set_url("meet::cmmUserSearch.xfdl");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdList","10.00","140",null,null,"10","60",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"62\"/><Column size=\"97\"/><Column size=\"97\"/><Column size=\"97\"/><Column size=\"105\"/><Column size=\"244\"/><Column size=\"113\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"순서\"/><Cell col=\"1\" text=\"회의일\"/><Cell col=\"2\" text=\"등록일\"/><Cell col=\"3\" text=\"작성자명\"/><Cell col=\"4\" text=\"회의ID\"/><Cell col=\"5\" text=\"회의명\"/><Cell col=\"6\" text=\"회의장소\"/><Cell col=\"7\" text=\"미리보기\"/><Cell col=\"8\" text=\"열람상태\"/><Cell col=\"9\" text=\"열람내역\"/><Cell col=\"10\" text=\"서명\"/><Cell col=\"11\" text=\"편집\"/></Band><Band id=\"body\"><Cell expr=\"dataset.parent.fvStart +currow\"/><Cell col=\"1\" text=\"bind:MTG_DATE\" displaytype=\"mask\" maskeditformat=\"@@@@-@@-@@\" maskedittype=\"string\"/><Cell col=\"2\" text=\"bind:INPT_DTTM\" displaytype=\"mask\" maskeditformat=\"@@@@-@@-@@ @@:@@\" maskedittype=\"string\"/><Cell col=\"3\" text=\"bind:USER_NAME\"/><Cell col=\"4\" text=\"bind:DOC_ID\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:DOC_TITLE\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:PLACE_NAME\" textAlign=\"left\"/><Cell col=\"7\" displaytype=\"imagecontrol\" background=\"url(&apos;theme://images/btn_WF_Search.png&apos;) no-repeat center center\" cursor=\"pointer\"/><Cell col=\"8\" text=\"bind:MTG_RESULT_TYPE\" displaytype=\"combotext\" combodataset=\"dsResultCode00\" combocodecol=\"CODE\" combodatacol=\"NAME\"/><Cell col=\"9\" cursor=\"pointer\" displaytype=\"imagecontrol\" background=\"url(&apos;theme://images/btn_WF_Search.png&apos;) no-repeat center center\"/><Cell col=\"10\" combodataset=\"dsMstatus\" combocodecol=\"code\" combodatacol=\"name\" displaytype=\"expr:ACNT&gt;0?&apos;buttoncontrol&apos;:&apos;none&apos;\" expr=\"ACNT&gt;0?&apos;서명&apos;:&apos;&apos;\"/><Cell col=\"11\" combodataset=\"dsRstatus\" combocodecol=\"code\" combodatacol=\"name\" displaytype=\"expr:EDIT_YN==&apos;Y&apos;?&apos;buttoncontrol&apos;:&apos;&apos;\" expr=\"EDIT_YN==&apos;Y&apos;?&apos;편집&apos;:&apos;&apos;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divPaging","10",null,null,"30","10","10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_url("common::cmmPaging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"104","82","30","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("작성");
            obj.set_cssclass("btn_TFDM_Add");
            obj.set_visible("true");
            obj.getSetter("btnType").set("E");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd00",null,"104","111","30","btnAdd:7",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("서명변경");
            obj.set_cssclass("btn_TFDM_Add");
            obj.set_visible("true");
            obj.getSetter("btnType").set("E");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form.divCalPeriod
            obj = new Layout("default","",0,0,this.divSearch.form.divCalPeriod.form,function(p){});
            this.divSearch.form.divCalPeriod.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearch.form.divUser
            obj = new Layout("default","",0,0,this.divSearch.form.divUser.form,function(p){});
            this.divSearch.form.divUser.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPaging
            obj = new Layout("default","",0,0,this.divPaging.form,function(p){});
            this.divPaging.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1400,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item4","divSearch.form.cboDocTree","value","dsCond","BIZ_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.edtMsgTxt00","value","dsCond","DOC_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboDocTree00","value","dsCond","MTG_RESULT_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.divUser.form.edtCode","value","dsCond","INPT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.divCalPeriod.form.cal_fr","value","dsCond","IN_FDATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.divCalPeriod.form.cal_to","value","dsCond","IN_TDATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::cmmPeriodCalendar.xfdl");
            this._addPreloadList("fdl","meet::cmmUserSearch.xfdl");
            this._addPreloadList("fdl","common::cmmPaging.xfdl");
        };
        
        // User Script
        this.registerScript("mtgResult.xfdl", function() {
        /**
        *  메일발송 현황
        *  @FileName 	docResult.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2024/03/04
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/03/04			DXTOBE						최초생성
        *******************************************************************************
        */
        this.fvRedrawPos = -1;
        this.fvPage  = -1;
        this.fvStart = -1;
        this.fvEnd   = -1;

        this.fvBoardInfo = { pageCnt : 20};
        this.docMain_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	var date = this.gfnGetDate();
        	this.divSearch.form.divCalPeriod.form.fnInitValue({"fromdate" : this.gfnAddDate(date,-7),
        											"todate" : date});

        	this.divPaging.form.staTitle.set_visible(false);
        	this.divPaging.form.cboCnt.set_value(20);
        	this.divPaging.form.cboCnt.set_visible(false);

        	this.fnDocGroupSearch();

        	this.cfnSearch();
        };

        //조회
        this.cfnSearch = function ()
        {
        	//조회버튼으로 조회
        	this.dsList.clearData();
        	this.dsCount.clearData();

        	this.fvPage  = 1;
        	this.fvStart = 1;
        	this.fvEnd   = this.fvBoardInfo.pageCnt;
        	this.dsCond.setColumn(0, "DEPT_CD", this.gfnGetUserInfo("DEPT_CD"));
        	this.fnTranCountSearch();
        	this.fnTranSearch();
        };

        /**
        * @function fnMtgListSearch  <br>
        * description 열람가능정보를 확인하기 위해 조직 구성 TREE 조회
        */
        this.fnTranCountSearch = function ()
        {
        	this.gfnSetMap("meet", "MyMeetPageCount");

        	var strSvcId    = "selectMyMeetCount";
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

        /**
        * @function fnMtgListSearch  <br>
        * description 열람가능정보를 확인하기 위해 조직 구성 TREE 조회
        */
        this.fnTranSearch = function ()
        {
        	this.dsCond.setColumn(0, "START_NUM", this.fvStart);
        	this.dsCond.setColumn(0, "END_NUM", this.fvEnd);

        	this.gfnSetMap("meet", "MyMeetPageList");

        	var strSvcId    = "selectMyMeetList";
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


        /**
        * @function fnDocGroupSearch  <br>
        * description 문서그룹조회
        */
        this.fnDocGroupSearch = function ()
        {
        	this.gfnSetMap("meet", "DocuTreeList");

        	var strSvcId    = "searchDocuTree";
        	var strSvcUrl   = "searchCommonBaseService.do";
        	var inData      = "dsCond=dsCond dsMap=dsMap";
        	var outData     = "dsDept=dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };


        /**
        * @function fnGetDeptList  <br>
        * description 쿼리에서 조직을 in으로 조회 - 리스트 담기
        */
        this.fnGetDeptList = function ()
        {
        	var arrList = [];
        	var nRow = this.dsList.rowposition;
        	arrList.push("'" + this.dsList.getColumn(nRow, "BIZ_CODE") + "'");
        	var curLvl = this.dsList.getColumn(nRow, "DT_LVL");

        	var lvl;
        	if(nRow >= 0) {
        		for(var i=nRow+1,len=this.dsList.rowcount;i<len;i++) {
        			lvl = this.dsList.getColumn(i, "DT_LVL");
        			if(lvl <= curLvl) continue;
        			arrList.push("'" + this.dsList.getColumn(i, "BIZ_CODE") + "'");
        		}
        	}
        	var deptList = "(" + arrList.join(",") + ")";
        	this.dsCond.setColumn(0, "DOC_LIST", deptList);
        };
        /**
        * @function fnDocSearch  <br>
        * description 그룹별 문서 조회
        */
        this.fnDocSearch = function (v)
        {
        	if(v) {
        		this.fvRedrawPos = this.dsList.rowposition;
        	}

        	this.fnGetDeptList();	// 하위조직 담기

        	this.dsCond.setColumn(0, "LIMIT", nCount * 3);

        	this.gfnSetMap("meet", "MeetList");

        	var strSvcId    = "searchDocuContents";
        	var strSvcUrl   = "searchCommonBaseService.do";
        	var inData      = "dsCond=dsCond dsMap=dsMap";
        	var outData     = "dsDocInfo=dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        /**
        * @function fnDocSearch  <br>
        * description 그룹별 문서 조회
        */
        this.fnDocSearch = function (v)
        {
        	var strSvcId    = "searchDocMailHistory";
        	var strSvcUrl   = "searchDocMailHistory.do";
        	var inData      = "dsCond=dsCond";
        	var outData     = "dsDocList=dsDocList dsHistory=dsHistory dsReceiveInfo=dsReceiveInfo";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };
        /**
        * @function fnCallback  <br>
        * description 서비스콜백
        */
        this.fvTranCnt = 0;
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "selectMyMeetCount" :
        		case "selectMyMeetList" :
        			this.fvTranCnt++;
        			if(this.fvTranCnt >= 2) {
        				var nTotal = this.dsCount.getColumn(0, "TOTALCNT");
        				this.divPaging.form.fnCreatePage(this.grdList, "fnPageCallback", this.fvPage, "", nTotal);
        				this.fvTranCnt = 0;
        			}
        			break;
        		case "searchDocuTree" :
        			this.dsDept.setColumn(0, "DT_CD", "");
        			this.divSearch.form.cboDocTree.set_index(0);
        			break;
        		case "searchResultDocList":
        			var sId = this.gfnGetUserInfo("USER_ID");
        			if(sId == "ylk" || sId == "jihs" || sId == "jh.lee") {
        			} else {
        				this.dsList.filter("BIZ_CODE!='1010040'");
        			}
        			break;
        		case "searchDocMailHistory":

        			break;
        		default :
        	}
        };

        /**
        * @function fnPopupCallback  <br>
        * description 팝업코르백
        */
        this.fnPopupCallback = function (sPopupId, sRtn)
        {
        	switch(sPopupId) {
        		case "mgtTreePu":
        			if( !this.gfnIsNull(sRtn) ){
        				var aRtn= sRtn.split("|");

        				this.getOwnerFrame().pvMainUrl = "meet::mtgResult.xfdl";
        				this.getOwnerFrame().pvDocId = null;
        				this.getOwnerFrame().pvSyscode = aRtn[3];
        				this.getOwnerFrame().pvBizcode = aRtn[4];

        				this.getOwnerFrame().form.divWork.set_url("meet::mtgNewFm.xfdl");
        			}
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

        this.grdList_oncellclick = function(obj,e)
        {
        	if(e.col < 6) {

        	} else if(e.col == 7) {
        		var sTitle  = "회의록열람";
        		var nRow	= this.dsList.rowposition;
        		var oArg    = { pvUUID:		this.dsList.getColumn(nRow,"DOC_ID"),
        						pvSysCode:	this.dsList.getColumn(nRow,"SYS_CODE"),
        						pvBizCode:	this.dsList.getColumn(nRow,"BIZ_CODE")
        					  };
        		var oOption = {title:sTitle , titlebar:true};
        		var sPopupCallBack = "fnPopupCallback";
        		this.gfnOpenPopup("docView1", "meet::mtgViewPu.xfdl", oArg, sPopupCallBack, oOption);
        	} else if(e.col == 9) {
        		var sTitle  = "참석자 열람정보";
        		var nRow	= this.dsList.rowposition;
        		var oArg    = { pvDocId:		this.dsList.getColumn(nRow,"DOC_ID"),
        						pvSysCode:	this.dsList.getColumn(nRow,"SYS_CODE"),
        						pvBizCode:	this.dsList.getColumn(nRow,"BIZ_CODE"),
        						pvPage:	this.dsList.getColumn(nRow,"PDF_PAGE")
        					  };
        		var oOption = {title:sTitle , titlebar:true};
        		var sPopupCallBack = "fnPopupCallback";
        		this.gfnOpenPopup("docView2", "meet::mtgReadStatusPu.xfdl", oArg, sPopupCallBack, oOption);
        	} else if(e.col == 10) {
        		var sTitle  = "회의록열람";
        		var nRow	= this.dsList.rowposition;
        		if(this.dsList.getColumn(this.dsList.rowposition, "ACNT") > 0) {
        			var oArg    = { pvUUID:		this.dsList.getColumn(nRow,"DOC_ID"),
        							pvSysCode:	this.dsList.getColumn(nRow,"SYS_CODE"),
        							pvBizCode:	this.dsList.getColumn(nRow,"BIZ_CODE"),
        							pvPage:	this.dsList.getColumn(nRow,"PDF_PAGE")
        						  };
        			var oOption = {title:sTitle , titlebar:true};
        			var sPopupCallBack = "fnPopupCallback";
        			this.gfnOpenPopup("docView3", "meet::mtgUserSignPu.xfdl", oArg, sPopupCallBack, oOption);
        		}
        	} else if(e.col == 11) {
        		var sTitle  = "회의록편집";
        		var nRow	= this.dsList.rowposition;
        		if(this.dsList.getColumn(this.dsList.rowposition, "EDIT_YN") == "Y") {
        			this.getOwnerFrame().pvMainUrl = "meet::mtgResult.xfdl";
        			this.getOwnerFrame().pvDocId = this.dsList.getColumn(nRow,"DOC_ID");
        			this.getOwnerFrame().pvSyscode = this.dsList.getColumn(nRow,"SYS_CODE");
        			this.getOwnerFrame().pvBizcode = this.dsList.getColumn(nRow,"BIZ_CODE");

        			this.getOwnerFrame().form.divWork.set_url("meet::mtgNewFm.xfdl");
        		}
        	}
        };

        // row change
        this.dsList_onrowposchanged = function(obj,e)
        {
        	if(e.newrow >= 0) {
        		var docId = obj.getColumn(e.newrow, "DOC_ID");
        		if(this.gfnIsNull(docId) == false) {
        			this.dsCond.setColumn(0, "DOC_ID", docId);
        			this.fnDocSearch();
        		} else {
        			this.dsDocList.clearData();
        			this.dsHistory.clearData();
        			this.dsReceiveInfo.clearData()
        		}
        	}
        };



        this.Grid00_00_oncellclick = function(obj,e)
        {
        	if(e.cell == 7) {
        		var pos = this.dsReceiveInfo.rowposition;
        		var rStatus = this.dsReceiveInfo.getColumn(pos, "R_STATUS");
        		if(rStatus == "Z" || rStatus == "K" || rStatus == "U") {
        			var sTitle  = "문서보기";
        			var docId   = this.dsDocList.getColumn(0,"DOC_ID");
        			var Doctitle  = this.dsDocList.getColumn(0,"DOC_TITLE");
        			var sysCode = this.dsDocList.getColumn(0,"SYS_CODE");
        			var bizCode = this.dsDocList.getColumn(0,"BIZ_CODE");
        			var seq 	= this.dsHistory.getColumn(this.dsHistory.rowposition,"SEND_SEQ")+"";
        			var oArg    = { pvUUID:		docId,
        							pvSysCode:	sysCode,
        							pvBizCode:	bizCode,
        							pvTitle :	Doctitle,
        							pvSeq :	seq,
        							pvUserId:	this.dsReceiveInfo.getColumn(pos,"USER_ID")
        						  };
        						  console.log(oArg);
        			var oOption = {title:sTitle , titlebar:true};
        			var sPopupCallBack = "fnPopupCallback";
        			this.gfnOpenPopup("docView", "docForm::docViewPu.xfdl", oArg, sPopupCallBack, oOption);
        		}
        	}
        };

        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.cfnSearch();
        };

        // 사용자 삭제
        this.divSearch_btnDelUser_onclick = function(obj,e)
        {
        	this.divSearch.form.divUser.form.fnInit();
        };
        // 일자 삭제
        this.divSearch_btnDelDate_onclick = function(obj,e)
        {
        	this.divSearch.form.divCalPeriod.form.fnInitValue();
        };

        this.grdList_oncelldblclick = function(obj,e)
        {
        	if(e.col <= 6) {
        		var sTitle  = "회의록열람";
        		var nRow	= this.dsList.rowposition;
        		var oArg    = { pvDocId:		this.dsList.getColumn(nRow,"DOC_ID"),
        						pvSysCode:	this.dsList.getColumn(nRow,"SYS_CODE"),
        						pvBizCode:	this.dsList.getColumn(nRow,"BIZ_CODE")
        					  };
        		var oOption = {title:sTitle , titlebar:true};
        		var sPopupCallBack = "fnPopupCallback";
        		this.gfnOpenPopup("docView", "meet::mtgDetailFm.xfdl", oArg, sPopupCallBack, oOption);
        	}
        };

        this.fnSelectGroup = function()
        {
        	var sTitle  = "회의그룹 선택";
        	var oArg    = {
        		pvSearchValue:""
        		,pvSearchScopeCd:""
        	};
        	var oOption = {title:sTitle
        				  ,titlebar:true};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("mgtTreePu", "meet::mtgTreePu.xfdl", oArg, sPopupCallBack, oOption);
        };

        this.divDetail_btnEdit_onclick = function(obj,e)
        {
        	this.fnSelectGroup();
        };

        this.btnAdd00_onclick = function(obj,e)
        {
        		var sTitle  = "서명등록";
        		var oArg    = {};
        		var oOption = {title:sTitle
        					,titlebar:true};
        		var sPopupCallBack = "fnPopupCallback";
        		this.gfnOpenPopup("mtgSignRegPu", "meet::mtgSignRegPu.xfdl", oArg, sPopupCallBack, oOption);
        };

        this.fnRefresh = function() {
        	this.cfnSearch();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.docMain_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.divSearch.form.btnDelDate.addEventHandler("onclick",this.divSearch_btnDelDate_onclick,this);
            this.divSearch.form.btnDelUser.addEventHandler("onclick",this.divSearch_btnDelUser_onclick,this);
            this.divSearch.form.edtMsgTxt00.addEventHandler("onkeyup",this.searchEdit_onkeyup,this);
            this.grdList.addEventHandler("oncellclick",this.grdList_oncellclick,this);
            this.grdList.addEventHandler("oncelldblclick",this.grdList_oncelldblclick,this);
            this.btnAdd.addEventHandler("onclick",this.divDetail_btnEdit_onclick,this);
            this.btnAdd00.addEventHandler("onclick",this.btnAdd00_onclick,this);
        };
        this.loadIncludeScript("mtgResult.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
