(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("mtgNewFm");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"IN_FDATE\" type=\"STRING\" size=\"256\"/><Column id=\"IN_TDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LIMIT\" type=\"INT\" size=\"256\"/><Column id=\"DOC_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"USED_FLAG\" type=\"string\" size=\"32\"/><Column id=\"MTG_END_TM\" type=\"string\" size=\"32\"/><Column id=\"MTG_DATE\" type=\"string\" size=\"32\"/><Column id=\"MTG_RESULT_TYPE\" type=\"string\" size=\"32\"/><Column id=\"MTG_RESULT_CN\" type=\"string\" size=\"32\"/><Column id=\"USER_ID\" type=\"string\" size=\"32\"/><Column id=\"CLSDR_MTG_AT\" type=\"string\" size=\"32\"/><Column id=\"ETC_MATTER\" type=\"string\" size=\"32\"/><Column id=\"HOST_NAME\" type=\"string\" size=\"32\"/><Column id=\"HOST_ID\" type=\"string\" size=\"32\"/><Column id=\"BIZ_CODE\" type=\"string\" size=\"32\"/><Column id=\"DOC_TITLE\" type=\"string\" size=\"32\"/><Column id=\"INPT_DTTM\" type=\"string\" size=\"32\"/><Column id=\"EXPIRE_DATE\" type=\"string\" size=\"32\"/><Column id=\"EDIT_INFO\" type=\"string\" size=\"32\"/><Column id=\"DOC_ID\" type=\"string\" size=\"32\"/><Column id=\"PDF_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"MTG_CNT\" type=\"int\" size=\"4\"/><Column id=\"WORK_NAME\" type=\"string\" size=\"32\"/><Column id=\"MTG_MTR_CN\" type=\"string\" size=\"32\"/><Column id=\"MTG_BEGIN_TM\" type=\"string\" size=\"32\"/><Column id=\"MTG_PLACE_CD\" type=\"string\" size=\"32\"/><Column id=\"MTG_SEQ\" type=\"int\" size=\"4\"/><Column id=\"READNG_AT\" type=\"string\" size=\"32\"/><Column id=\"HOST_TYPE\" type=\"string\" size=\"32\"/><Column id=\"USER_NAME\" type=\"string\" size=\"32\"/><Column id=\"HOST_WORK_NAME\" type=\"string\" size=\"32\"/><Column id=\"CHGE_ID\" type=\"string\" size=\"32\"/><Column id=\"MTG_AT\" type=\"string\" size=\"32\"/><Column id=\"CHGE_DTTM\" type=\"datetime\" size=\"17\"/><Column id=\"SYS_CODE\" type=\"string\" size=\"32\"/><Column id=\"PDF_ORIG_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"PDF_FILE_PATH_NM\" type=\"string\" size=\"32\"/><Column id=\"READNG_DATE\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCheckDept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeptList", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDocInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"MTG_END_TM\" type=\"string\" size=\"32\"/><Column id=\"CHGE_IP\" type=\"string\" size=\"32\"/><Column id=\"MTG_DATE\" type=\"string\" size=\"32\"/><Column id=\"NONATDRN_CNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"CLSDR_MTG_AT\" type=\"string\" size=\"32\"/><Column id=\"READNG_DATE\" type=\"string\" size=\"32\"/><Column id=\"MTG_RESULT_ENNC\" type=\"string\" size=\"32\"/><Column id=\"HOST_DEPT_CD\" type=\"string\" size=\"32\"/><Column id=\"HOST_ID\" type=\"string\" size=\"32\"/><Column id=\"BIZ_CODE\" type=\"string\" size=\"32\"/><Column id=\"DOC_ID\" type=\"string\" size=\"32\"/><Column id=\"INPT_DTTM\" type=\"datetime\" size=\"17\"/><Column id=\"MTG_CNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"MTG_BEGIN_TM\" type=\"string\" size=\"32\"/><Column id=\"MTG_PLACE_CD\" type=\"string\" size=\"32\"/><Column id=\"MTG_SEQ\" type=\"bigdecimal\" size=\"16\"/><Column id=\"READNG_AT\" type=\"string\" size=\"32\"/><Column id=\"USER_NAME\" type=\"string\" size=\"32\"/><Column id=\"CHGE_ID\" type=\"string\" size=\"32\"/><Column id=\"INPT_IP\" type=\"string\" size=\"32\"/><Column id=\"MTG_AT\" type=\"string\" size=\"32\"/><Column id=\"CHGE_DTTM\" type=\"datetime\" size=\"17\"/><Column id=\"SYS_CODE\" type=\"string\" size=\"32\"/><Column id=\"DOC_TITLE\" type=\"string\" size=\"32\"/><Column id=\"ATDRN_CNT\" type=\"bigdecimal\" size=\"16\"/><Column id=\"INPT_ID\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFieldInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"FIELD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FIELD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FIELD_MASK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"FIELD_NAME\">기본급</Col><Col id=\"FIELD_ID\">field_base</Col></Row><Row><Col id=\"FIELD_NAME\">고정연장수당</Col><Col id=\"FIELD_ID\">field_overtime</Col></Row><Row><Col id=\"FIELD_NAME\">직책수당</Col><Col id=\"FIELD_ID\">field_work</Col></Row><Row><Col id=\"FIELD_NAME\">출산보육수당</Col><Col id=\"FIELD_ID\">field_baby</Col></Row><Row><Col id=\"FIELD_NAME\">연구개발비</Col><Col id=\"FIELD_ID\">field_rnd</Col></Row><Row><Col id=\"FIELD_NAME\">월합계</Col><Col id=\"FIELD_ID\">field_month</Col></Row><Row><Col id=\"FIELD_NAME\">총연봉</Col><Col id=\"FIELD_ID\">field_year</Col></Row><Row><Col id=\"FIELD_NAME\">주민등록번호</Col><Col id=\"FIELD_ID\">field_resno</Col></Row><Row><Col id=\"FIELD_NAME\">성명</Col><Col id=\"FIELD_ID\">field_name</Col></Row><Row><Col id=\"FIELD_NAME\">서명</Col><Col id=\"FIELD_ID\">field_sign</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUser", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FORMER_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FORMER_ORDER\" type=\"INT\" size=\"256\"/><Column id=\"SEND_SEQ\" type=\"int\" size=\"2\"/><Column id=\"USER_MAILADDR\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"FORMER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FORMER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"APRV_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"READ_STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USER_ID\">jihs</Col><Col id=\"USER_NAME\">지해식</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSignUser", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"SSRESULT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SS_COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReadUser", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_GB\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCal", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">선택</Col><Col id=\"code\">Z</Col></Row><Row><Col id=\"name\">1년</Col><Col id=\"code\">A</Col></Row><Row><Col id=\"name\">3년</Col><Col id=\"code\">B</Col></Row><Row><Col id=\"name\">5년</Col><Col id=\"code\">C</Col></Row><Row><Col id=\"name\">10년</Col><Col id=\"code\">D</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCompany", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staBoardTitle","25.00","0","315","43",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("회의록 내용");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Div("divContents","10.00","53",null,"1117","20",null,null,null,"589",null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta01_01","10","46",null,"87","10",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("34");
            obj.set_background("#f1f1f1");
            obj.set_visible("true");
            this.divContents.addChild(obj.name, obj);

            obj = new CheckBox("chk00_00","406","8","91","22",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("9");
            obj.set_text("열람");
            obj.set_falsevalue("N");
            obj.set_truevalue("Y");
            obj.set_visible("false");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staBg01_00_00_00_00_01_00","0","263",null,"38","0",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_SchLabelBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staBg01_00_00_00_00_01","0","222",null,"38","0",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_SchLabelBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","0","97","38",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("0");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staTitle02","0","staTitle00:14","97","38",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("1");
            obj.set_text("회의명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divContents.addChild(obj.name, obj);

            obj = new Edit("edtInpId","staTitle00:10.00","5","187","28",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            this.divContents.addChild(obj.name, obj);

            obj = new Edit("edtTitle","staTitle02:10","57","973","28",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("3");
            obj.set_enable("true");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staTitle00_00_00","470","0","100","38",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("4");
            obj.set_text("열람개시일");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staTitle02_00","0","89","97","38",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("5");
            obj.set_text("회의장소");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divContents.addChild(obj.name, obj);

            obj = new Combo("cboMTG_PLACE_CD","106.00","94","254","28",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("6");
            obj.set_text("cbo00");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staTitle02_00_01","470.00","89","97","38",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("7");
            obj.set_text("회의일");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staTitle02_00_00_01","300","0","97","38",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("8");
            obj.set_text("열람여부");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_visible("false");
            this.divContents.addChild(obj.name, obj);

            obj = new Calendar("calReadDate","staTitle00_00_00:7","5","150","28",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("10");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staTitle02_00_00_01_00_00","0","143","104","38",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("11");
            obj.set_text("주관자/부서");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staBg01_00_00_00_00","0","181",null,"38","0",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_SchLabelBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staTitle02_00_00_01_00_00_00","0","181","97","38",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("13");
            obj.set_text("참석자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divContents.addChild(obj.name, obj);

            obj = new MultiCombo("MultiComboUser","106.00","184",null,"34","113",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("14");
            obj.set_edittype("multitag");
            obj.set_innerdataset("dsUser");
            obj.set_codecolumn("USER_ID");
            obj.set_datacolumn("USER_NAME");
            obj.set_text("MultiCombo00");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staTitle03","0","316","97","775",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("15");
            obj.set_text("회의내용\r\n(700픽셀)");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divContents.addChild(obj.name, obj);

            obj = new WebBrowser("webEditor","22.40%","326","750","753",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("16");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staTitle02_00_00_01_00_00_01","0","222","103","38",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("17");
            obj.set_text("열람가능자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divContents.addChild(obj.name, obj);

            obj = new MultiCombo("MultiComboReadUser","106.00","225",null,"34","113",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("19");
            obj.set_edittype("multitag");
            obj.set_innerdataset("dsReadUser");
            obj.set_codecolumn("USER_ID");
            obj.set_datacolumn("USER_NAME");
            obj.set_text("MultiCombo00");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staTitle02_00_00_01_00_00_01_00","0","263","97","38",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("20");
            obj.set_text("결재자 1");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_visible("false");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divSign1","106.00","267","290","28",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("22");
            obj.set_text("div00");
            obj.set_url("meet::cmmUserSearch.xfdl");
            obj.set_visible("false");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staTitle02_00_00_01_00_00_01_00_00","470","263","97","38",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("23");
            obj.set_text("결재자 2");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_visible("false");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divSign2","576.00","268","290","28",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("24");
            obj.set_text("div00");
            obj.set_url("meet::cmmUserSearch.xfdl");
            obj.set_visible("false");
            this.divContents.addChild(obj.name, obj);

            obj = new Edit("edtHost","106","149","254","28",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("25");
            this.divContents.addChild(obj.name, obj);

            obj = new Calendar("calDate","576.00","94","150","28",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("26");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staTitle02_00_01_01","767.00","89","97","38",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("27");
            obj.set_text("회의시간");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divTimeFr","874","94","86","28",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("28");
            obj.set_text("div00");
            obj.set_url("common::cmmTimeSelect.xfdl");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divTimeTo","994.00","94","86","28",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("29");
            obj.set_text("div00");
            obj.set_url("common::cmmTimeSelect.xfdl");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("sta00","972","97","15","23",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("30");
            obj.set_text("~");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("sta01","10","44",null,"1","10",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("31");
            obj.set_border("1px dotted #cccccc");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("sta01_00","10","134",null,"1","10",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("32");
            obj.set_border("1px dotted #cccccc");
            obj.set_text("");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("sta01_00_00","10","309",null,"1","10",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("33");
            obj.set_border("1px dotted #cccccc");
            obj.set_text("");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staTitle00_00_00_00","767","0","100","38",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("35");
            obj.set_text("문서보관일");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divContents.addChild(obj.name, obj);

            obj = new Calendar("calReadDate00","staTitle00_00_00_00:7","5","150","28",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("36");
            this.divContents.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"10","92","28","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divContents.form.divSign1
            obj = new Layout("default","",0,0,this.divContents.form.divSign1.form,function(p){});
            this.divContents.form.divSign1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form.divSign2
            obj = new Layout("default","",0,0,this.divContents.form.divSign2.form,function(p){});
            this.divContents.form.divSign2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form.divTimeFr
            obj = new Layout("default","",0,0,this.divContents.form.divTimeFr.form,function(p){});
            this.divContents.form.divTimeFr.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form.divTimeTo
            obj = new Layout("default","",0,0,this.divContents.form.divTimeTo.form,function(p){});
            this.divContents.form.divTimeTo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form
            obj = new Layout("default","",0,0,this.divContents.form,function(p){});
            this.divContents.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1400,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divContents.form.calINPT_DTTM","value","dsList","INPT_DTTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divContents.form.edtTitle","value","dsList","DOC_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divContents.form.cboMTG_PLACE_CD","value","dsList","MTG_PLACE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divContents.form.chk00_00","value","dsList","READNG_AT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divContents.form.calReadDate","value","dsList","READNG_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divContents.form.chk00","value","dsList","CLSDR_MTG_AT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divContents.form.calDate","value","dsList","MTG_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divContents.form.edtHost","value","dsList","HOST_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divContents.form.edtInpId","value","dsList","USER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divContents.form.staTitle00_00_00_00","value","dsList","READNG_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divContents.form.calReadDate00","value","dsList","EXPIRE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","meet::cmmUserSearch.xfdl");
            this._addPreloadList("fdl","common::cmmTimeSelect.xfdl");
        };
        
        // User Script
        this.registerScript("mtgDetailFm.xfdl", function() {
        /**
        *  회의록 작성
        *  @FileName 	mtgNewFm.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2024/03/25
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/03/25			DXTOBE						최초생성
        *******************************************************************************
        */
        this.fvMyDoc = false;
        /**
        * @function docMain_onload  <br>
        * description 기간달력 초기화 , 문서(여기서는 부서)리스트 조회
        */
        this.mtgNewFm_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	//공통코드
        	var param = [
        			  {biztype : "Combo", code : "SM40", objid : this.divContents.form.cboMTG_PLACE_CD}							// 직원구분
        	];
        	this.gfnGetCommonCode(param);


        	//받아온값 세팅
        	this.fvDocId  	 = this.getOwnerFrame().pvDocId; 	// 문서 ID
        	this.fvSyscode   = this.getOwnerFrame().pvSyscode; 	// sys code
        	this.fvBizcode   = this.getOwnerFrame().pvBizcode; 	// biz code

        	if(this.fvDocId) {
        		this.dsCond.setColumn(0, "DOC_ID", this.fvDocId);
        		this.fnGetDocInfo();
        	} else {

        	}
        	var oWeb = this.divContents.form.webEditor;
        	this.gfnCreateHtmlViewer(oWeb);

        	this.resetScroll();
        };

        /**
        * @function fnGetDocInfo  <br>
        * description 문서 컨텐츠 조회
        */
        this.fnGetDocInfo = function (v)
        {
        	var arrMap = ["meet","meet","meet","meet"];
        	var arrMapId = ["MeetList","MeetUserList","MeetSignUserList", "MeetReadUserList"];
        	var arrOut = ["dsList","dsUser","dsSignUser", "dsReadUser"];

        	this.gfnSetMap(arrMap, arrMapId,arrOut);

        	var strSvcId    = "searchDocInfo";
        	var strSvcUrl   = "searchCommonListService.do";
        	var inData      = "dsCond=dsCond dsMap=dsMap";
        	var outData     = "dsList=dsList dsUser=dsUser dsSignUser=dsSignUser dsReadUser=dsReadUser";
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
        		case "searchDocInfo":
        			var userId = this.gfnGetUserInfo("USER_ID");
        			var createId = this.dsList.getColumn(0, "INPT_ID");
        			var result = this.dsList.getColumn(0, "MTG_RESULT_TYPE");

        			if(this.dsUser.rowcount > 0) {
        				var v = "";
        				for(var i=0,len=this.dsUser.rowcount;i<len;i++) {
        					if(i>0) v += ",";
        					v += this.dsUser.getColumn(i, "USER_ID");
        				}
        				this.divContents.form.MultiComboUser.set_value(v);
        			}
        			if(this.dsReadUser.rowcount > 0) {
        				var v = "";
        				for(var i=0,len=this.dsReadUser.rowcount;i<len;i++) {
        					if(i>0) v += ",";
        					v += this.dsReadUser.getColumn(i, "USER_ID");
        				}
        				this.divContents.form.MultiComboReadUser.set_value(v);
        			}
        			this.divContents.form.divTimeFr.form.setValue(this.dsList.getColumn(0, "MTG_BEGIN_TM").substr(8,4));
        			this.divContents.form.divTimeTo.form.setValue(this.dsList.getColumn(0, "MTG_END_TM").substr(8,4));

        			if(this.dsSignUser.rowcount > 0) {
        				var v = "";
        				for(var i=0,len=this.dsSignUser.rowcount;i<len;i++) {
        					var form = this.divContents.form["divSign" + (i+1)].form;
        					form.edtCode.set_value(this.dsSignUser.getColumn(i, "USER_ID"));
        					form.edtName.set_value(this.dsSignUser.getColumn(i, "USER_NAME"));
        					//form.edtEmail.set_value(this.dsSignUser.getColumn(i, "EMAIL"));
        					//form.edtWorkName.set_value(this.dsSignUser.getColumn(i, "PHONE"));
        				}
        			}

        			this.setTimer(0,500);

        			break;
        		default:break;
        	}
        };

        //message callback
        this.fnMsgCallback = function (sMsgId, sRtn)
        {
        	switch(sMsgId) {
        		case "saveAfter":
        			if (sRtn)
        			{
        				this.close();
        			}
        			break;
        		default:
        			break;
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        //웹브라우저 온로드 컴플리트
        this.divContents_divCont_webEditor_onloadcompleted = function(obj,e)
        {

        };

        this.isLoad=false;
        //웹브라우저 유저노티
        this.divContents_divCont_webEditor_onusernotify = function(obj,e)
        {
        // 	if (e.userdata=="instanceReady" && !this.isLoad){
        // 		obj.callMethod("init", obj.getOffsetHeight()-40);
        // 		this.isLoad=true;
        // 		this.setTimer(0,300);
        // 	} else {
        // 		this.setTimer(0,300);
        // 	}
        };
        this.fnPopupCallback = function (sPopupId, sRtn)
        {
        	switch(sPopupId) {
        		case "DMUserPopup":
        			break;
        		default:break;
        	}
        };


        //닫기버튼클릭
        this.divButton_btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        this.docMain_ontimer = function(obj,e)
        {
        	if(e.timerid == 0){
        		this.killTimer(0);

        		var sCntn = this.dsList.getColumn(0, "MTG_MTR_CN");
        		if(!this.gfnIsNull(sCntn)){
        			this.gfnSetHtmlView(this.divContents.form.webEditor, sCntn);
        		}
        		// 회의결과내용
        		sCntn = this.dsList.getColumn(0, "MTG_RESULT_CN");
        		if(!this.gfnIsNull(sCntn)){
        			this.gfnSetHtmlView(this.divContents.form.webEditorResult, sCntn);
        		}
        	}
        };

        this.CaltoCallBack = function(id, e) {
        	this.divContents.form.calMonthTimeTemp00.set_value(e);
        };
        this.CalfromCallBack = function(id, e) {
        	this.divContents.form.calMonthTimeTemp.set_value(e);
        };

        this.calMonthTime_onlbuttonup = function(obj,e)
        {
        	this.gfnCompTimeCalendar(obj, e);
        };

        this.divContents_calMonthTimeTemp00_onlbuttonup = function(obj,e)
        {
        	this.gfnCompTimeCalendar(obj, e);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.mtgNewFm_onload,this);
            this.addEventHandler("ontimer",this.docMain_ontimer,this);
            this.divContents.form.MultiComboUser.addEventHandler("onitemchanged",this.divContents_MultiComboUser_onitemchanged,this);
            this.divContents.form.webEditor.addEventHandler("onloadcompleted",this.divContents_divCont_webEditor_onloadcompleted,this);
            this.divContents.form.webEditor.addEventHandler("onusernotify",this.divContents_divCont_webEditor_onusernotify,this);
            this.btnClose.addEventHandler("onclick",this.divButton_btnClose_onclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
        };
        this.loadIncludeScript("mtgDetailFm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
