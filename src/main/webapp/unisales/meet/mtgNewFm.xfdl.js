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
                this._setFormPosition(1400,1580);
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
            obj.set_text("신규 회의록 작성");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Div("divContents","10.00","53",null,"1477","20",null,null,null,"589",null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","10","337",null,null,"18","0",null,null,null,null,this.divContents.form);
            obj.set_taborder("47");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("sta01_01","10","46",null,"87","10",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("43");
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
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_SchLabelBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staTitle03_00","0","1083","97","351",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("20");
            obj.set_text("회의주석");
            obj.set_cssclass("sta_WF_SchLabel");
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

            obj = new WebBrowser("webEditorResult","22.34%","1094","750","330",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("21");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staTitle02_00_00_01_00_00_01_00","0","263","97","38",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("22");
            obj.set_text("결재자 1");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_visible("false");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divSign1","106.00","267","290","28",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("24");
            obj.set_text("div00");
            obj.set_url("meet::cmmUserSearch.xfdl");
            obj.set_visible("false");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staTitle02_00_00_01_00_00_01_00_00","470","263","97","38",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("25");
            obj.set_text("결재자 2");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_visible("false");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divSign2","576.00","268","290","28",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("26");
            obj.set_text("div00");
            obj.set_url("meet::cmmUserSearch.xfdl");
            obj.set_visible("false");
            this.divContents.addChild(obj.name, obj);

            obj = new Button("btnSelectUser",null,"186","30","28","41",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("27");
            obj.set_background("url(\'theme://images/btn_WF_Search.png\') no-repeat center center");
            this.divContents.addChild(obj.name, obj);

            obj = new Button("btnReadUser",null,"228","30","28","41",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("28");
            obj.set_background("url(\'theme://images/btn_WF_Search.png\') no-repeat center center");
            this.divContents.addChild(obj.name, obj);

            obj = new Edit("edtHost","106","149","254","28",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("29");
            this.divContents.addChild(obj.name, obj);

            obj = new Button("btnSelectHost","367","149","30","28",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("30");
            obj.set_background("url(\'theme://images/btn_WF_Search.png\') no-repeat center center");
            this.divContents.addChild(obj.name, obj);

            obj = new Button("btnDeleteHost","399","149","30","28",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("31");
            obj.set_background("url(\'theme://images/btn_WF_DelN.png\') no-repeat center center");
            this.divContents.addChild(obj.name, obj);

            obj = new Button("btnDeleteUser",null,"186","30","28","9",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("32");
            obj.set_background("url(\'theme://images/btn_WF_DelN.png\') no-repeat center center");
            this.divContents.addChild(obj.name, obj);

            obj = new Button("btnDeleteReadUser",null,"228","30","28","9",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("33");
            obj.set_background("url(\'theme://images/btn_WF_DelN.png\') no-repeat center center");
            this.divContents.addChild(obj.name, obj);

            obj = new Button("btnAddUser",null,"186","30","28","73",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("34");
            obj.set_background("url(\'theme://images/btn_WF_Add.png\') no-repeat center center");
            this.divContents.addChild(obj.name, obj);

            obj = new Calendar("calDate","576.00","94","150","28",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("35");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staTitle02_00_01_01","767.00","89","97","38",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("36");
            obj.set_text("회의시간");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divTimeFr","874","94","86","28",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("37");
            obj.set_text("div00");
            obj.set_url("common::cmmTimeSelect.xfdl");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divTimeTo","994.00","94","86","28",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("38");
            obj.set_text("div00");
            obj.set_url("common::cmmTimeSelect.xfdl");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("sta00","972","97","15","23",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("39");
            obj.set_text("~");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("sta01","10","44",null,"1","10",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("40");
            obj.set_border("1px dotted #cccccc");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("sta01_00","10","134",null,"1","10",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("41");
            obj.set_border("1px dotted #cccccc");
            obj.set_text("");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("sta01_00_00","10","309",null,"1","10",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("42");
            obj.set_border("1px dotted #cccccc");
            obj.set_text("");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staTitle00_00_00_00","767","0","100","38",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("44");
            obj.set_text("문서보관일");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divContents.addChild(obj.name, obj);

            obj = new Calendar("calReadDate00","staTitle00_00_00_00:7","5","150","28",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("45");
            this.divContents.addChild(obj.name, obj);

            obj = new Combo("Combo00","1034","5","75","28",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("46");
            obj.set_innerdataset("dsCal");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_text("선택");
            obj.set_value("Z");
            obj.set_index("0");
            this.divContents.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"1540","68","28","116",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CrudSave");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"1540","92","28","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("이전페이지");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose00",null,"15","92","28","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("이전페이지");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave00",null,"15","68","28","116",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CrudSave");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"15","68","28","188",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CrudDelete");
            obj.set_visible("false");
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
            obj = new Layout("default","",1400,1580,this,function(p){});
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
        this.registerScript("mtgNewFm.xfdl", function() {
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

        	// 회사이미지 호출
        	this.fnCompanySearch();

        	//공통코드
        	var param = [
        			  {biztype : "Combo", code : "SM40", objid : this.divContents.form.cboMTG_PLACE_CD}							// 직원구분
        	];
        	this.gfnGetCommonCode(param);


        	//받아온값 세팅
        	this.fvDocId  	 = this.getOwnerFrame().pvDocId; 	// 문서 ID
        	this.fvSyscode   = this.getOwnerFrame().pvSyscode; 	// sys code
        	this.fvBizcode   = this.getOwnerFrame().pvBizcode; 	// biz code

        	console.log(this.fvDocId);

        	if(this.fvDocId) {
        		this.btnDelete.set_visible(true);
        		this.staBoardTitle.set_text("회의록 편집");
        		this.dsCond.setColumn(0, "DOC_ID", this.fvDocId);
        		this.fnGetDocInfo();
        	} else {

        		this.staBoardTitle.set_text("회의록 작성");
        		var dt = new Date();
        		this.dsList.addRow();
        		this.dsList.setColumn(0, "DOC_ID", "D" + dt.getTime());
        		this.dsList.setColumn(0, "SYS_CODE", this.fvSyscode);
        		this.dsList.setColumn(0, "BIZ_CODE", this.fvBizcode);
        		this.dsList.setColumn(0, "MTG_SEQ", 1);
        		this.dsList.setColumn(0, "MTG_CNT", 1);
        		this.dsList.setColumn(0, "CLSDR_MTG_AT", "N");
        		this.dsList.setColumn(0, "READNG_AT", "Y");
        		this.dsList.setColumn(0, "MTG_DATE", this.gfnGetDate());
        		this.dsList.setColumn(0, "MTG_BEGIN_TM", this.gfnGetDate() + "090000");
        		this.dsList.setColumn(0, "MTG_END_TM", this.gfnGetDate() + "090000");
        		this.dsList.setColumn(0, "INPT_DTTM", this.gfnGetDate());
        		this.dsList.setColumn(0, "READNG_DATE", this.gfnGetDate());
        		this.dsList.setColumn(0, "EXPIRE_DATE", this.gfnAddDate(this.gfnGetDate(),3650));
        		//this.dsList.setColumn(0, "HOST_ID", this.gfnGetUserInfo("USER_ID"));
        		//this.dsList.setColumn(0, "HOST_NAME", this.gfnGetUserInfo("USER_NAME"));
        		this.divContents.form.edtInpId.set_value(this.gfnGetUserInfo("USER_NAME"));

        		this.divContents.form.divTimeFr.form.setValue("0900");
        		this.divContents.form.divTimeTo.form.setValue("1000");

        		var oWeb = this.divContents.form.webEditor;
        		this.gfnCreateWebEditor(oWeb);
        		var oWeb2 = this.divContents.form.webEditorResult;
        		this.gfnCreateWebEditor(oWeb2);
        	}

        	this.resetScroll();
        };
        /**
        * @function fnCompanySearch  <br>
        * description 회사조회
        */
        this.fnCompanySearch = function ()
        {
        	this.gfnSetMap("meet", "CompanyInfo");

        	var strSvcId    = "searchCompanyInfo";
        	var strSvcUrl   = "searchCommonBaseService.do";
        	var inData      = "dsCond=dsCond dsMap=dsMap";
        	var outData     = "dsCompany=dsList";
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


        //내용저장
        this.fnTranSave = function ()
        {
        	var strSvcId    = "saveDocContents";
        	var strSvcUrl   = "saveMgtInfoService.do";
        	var inData      = "dsList=dsList:A dsUser=dsUser:A dsReadUser=dsReadUser:A dsSignUser=dsSignUser:A";
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

        //내용저장
        this.fnTranDelete = function ()
        {
        	this.dsCond.setColumn(0, "DOC_ID", this.fvDocId);

        	var arrMap = ["meet","meet"];
        	var arrMapId = ["MeetUserList","MeetInfo"];

        	this.gfnSetMap(arrMap, arrMapId);

        	var strSvcId    = "deleteDocInfo";
        	var strSvcUrl   = "deleteContentsService.do";
        	var inData      = "dsList=dsCond dsMap=dsMap";
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
        		case "searchCompanyInfo" :

        			break;
        		case "deleteDocInfo" :
        			this.btnClose00.click();
        			break;
        		case "searchDocInfo":
        			var userId = this.gfnGetUserInfo("USER_ID");
        			var createId = this.dsList.getColumn(0, "INPT_ID");
        			var result = this.dsList.getColumn(0, "MTG_RESULT_TYPE");
        			if(userId == createId && result != "S") {
        				this.fvMyDoc = true;
        				var oWeb = this.divContents.form.webEditor;
        				this.gfnCreateWebEditor(oWeb);
        				var oWeb2 = this.divContents.form.webEditorResult;
        				this.gfnCreateWebEditor(oWeb2);
        			} else {
        				var oWeb = this.divContents.form.webEditor;
        				this.gfnCreateHtmlViewer(oWeb);
        				var oWeb2 = this.divContents.form.webEditorResult;
        				this.gfnCreateHtmlViewer(oWeb2);
        				this.divContents.set_enable(false);
        				this.btnSave00.set_enable(false);
        				this.btnSave.set_enable(false);
        			}
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

        			break;
        		case "saveDocContents":
        			//저장
        			this.gfnAlert("msg.save.success", [], "saveAfter", "fnMsgCallback");
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
        		case "deleteData":
        			if (this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false) {
        				return;
        			}
        			this.fnTranDelete();
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
        	if (e.userdata=="instanceReady" && !this.isLoad){
        		obj.callMethod("init", obj.getOffsetHeight()-40);
        		this.isLoad=true;
        		this.setTimer(0,300);
        	} else {
        		this.setTimer(0,300);
        	}
        };
        this.fnPopupCallback = function (sPopupId, sRtn)
        {
        	switch(sPopupId) {
        		case "DMUserPopup":
        			break;
        		default:break;
        	}
        };


        //저장버튼클릭
        this.divButton_btnSave_onclick = function(obj,e)
        {
        	var sCont = "";
        	sCont = this.divContents.form.webEditor.callMethod("getData");
        	this.dsList.setColumn(0, "MTG_MTR_CN", sCont);

        	sCont = this.divContents.form.webEditorResult.callMethod("getData");
        	this.dsList.setColumn(0, "MTG_RESULT_CN", sCont);

        	// 정합성 체크
        	this.gfnClearValidation(this.dsList);

        	this.gfnSetValidation(this.dsList, "DOC_ID", "회의록ID"	, "required");
        	this.gfnSetValidation(this.dsList, "DOC_TITLE", "회의록제목"	, "required");
        	this.gfnSetValidation(this.dsList, "MTG_DATE", "회의일자"	, "required");
        	this.gfnSetValidation(this.dsList, "MTG_MTR_CN", "회의록내용"	, "required");
        	this.gfnSetValidation(this.dsList, "MTG_PLACE_CD", "회의장소"	, "required");
        	//this.gfnSetValidation(this.dsList, "MTG_BEGIN_TM", "회의시작시간"	, "required");
        	//this.gfnSetValidation(this.dsList, "MTG_END_TM", "회의종료시간"	, "required");
        	this.gfnSetValidation(this.dsList, "HOST_NAME", "주관자/부서"	, "required");
        	this.gfnSetValidation(this.dsList, "READNG_DATE", "열람개시일"	, "required");

        	// Dataset의 변경된 Row Validation check
        	if (this.gfnValidation(this.dsList, "U") == false) return;

        	var st = this.divContents.form.divTimeFr.form.getValue();
        	var et = this.divContents.form.divTimeTo.form.getValue();
        	if(st >= et) {
        		this.gfnAlert("msg.err.validator.time.great", [], "");
        		return false;
        	}
        	this.dsList.setColumn(0, "MTG_BEGIN_TM", this.dsList.getColumn(0,"MTG_DATE").substr(0,8) + st);
        	this.dsList.setColumn(0, "MTG_END_TM", this.dsList.getColumn(0,"MTG_DATE").substr(0,8) + et);

        	if(st.length < 4) {
        		this.gfnAlert("msg.check.time", [], "");
        		return false;
        	}
        	if(et.length < 4) {
        		this.gfnAlert("msg.check.time", [], "");
        		return false;
        	}
        	if(this.dsUser.rowcount == 0) {
        		this.gfnAlert("msg.check.row", ["참석자"], "");
        		return false;
        	}
        	if(this.dsReadUser.rowcount == 0) {
        		this.gfnAlert("msg.check.row", ["열람자"], "");
        		return false;
        	}


        	// 정합성 체크
        	this.gfnClearValidation(this.dsUser);
        	this.gfnSetValidation(this.dsUser, "USER_ID", "참석자"	, "required");
        	if (this.gfnValidation(this.dsUser, "U") == false) return;

        	this.gfnClearValidation(this.dsReadUser);
        	this.gfnSetValidation(this.dsReadUser, "USER_ID", "열람자"	, "required");
        	if (this.gfnValidation(this.dsReadUser, "U") == false) return;

        	if(!this.gfnIsNull(this.divContents.form.divSign2.form.edtCode.value)) {
        		if(this.gfnIsNull(this.divContents.form.divSign1.form.edtCode.value)) {
        			this.gfnAlert("msg.check.row", ["결재자1"], "");
        		}
        	}
        	this.dsSignUser.clearData();
        	this.dsSignUser.applyChange();
        	var form;
        	for(var i=0;i<2;i++) {
        		if(i == 0) form = this.divContents.form.divSign1.form;
        		else if(i == 1) form = this.divContents.form.divSign2.form;
        		if(!this.gfnIsNull(form.edtCode.value)) {
        			var nRow = this.dsSignUser.addRow();
        			this.dsSignUser.setColumn(nRow, "DOC_ID", this.dsList.getColumn(0, "DOC_ID"));
        			this.dsSignUser.setColumn(nRow, "USER_ID", form.edtCode.value);
        			this.dsSignUser.setColumn(nRow, "USER_NAME", form.edtName.value);
        			this.dsSignUser.setColumn(nRow, "SIGN_SEQ", (i+2));
        		}
        	}

        	// 참석자 체크 - multicombo에서 uncheck
        	var arr = this.divContents.form.MultiComboUser.value.split(",");
        	this.dsUser.addColumn("chk", "string", 1);
        	for(var i=0,len=this.dsUser.rowcount;i<len;i++) {
        		var id = this.dsUser.getColumn(i, "USER_ID");
        		if(arr.indexOf(id)<0) {
        			this.dsUser.setColumn(i, "chk", "D");
        		}
        	}
        	for(var i=this.dsUser.rowcount-1;i>=0;i--) {
        		if(this.dsUser.getColumn(i, "chk") == "D") {
        			this.dsUser.deleteRow(i);
        		}
        	}
        	this.dsUser.deleteColumn("chk");
        	this.dsUser.applyChange();

        	// 열람자 체크 - multicombo에서 uncheck
        	var arr = this.divContents.form.MultiComboReadUser.value.split(",");
        	this.dsReadUser.addColumn("chk", "string", 1);
        	for(var i=0,len=this.dsReadUser.rowcount;i<len;i++) {
        		var id = this.dsReadUser.getColumn(i, "USER_ID");
        		if(arr.indexOf(id)<0) {
        			this.dsReadUser.setColumn(i, "chk", "D");
        		}
        	}
        	for(var i=this.dsReadUser.rowcount-1;i>=0;i--) {
        		if(this.dsReadUser.getColumn(i, "chk") == "D") {
        			this.dsReadUser.deleteRow(i);
        		}
        	}
        	// 작성자를 열람자에 추가
        // 	var nRow = this.dsReadUser.findRow("USER_ID", this.gfnGetUserInfo("USER_ID"));
        // 	if(nRow < 0) {
        // 		var nRow = this.dsReadUser.addRow();
        // 		this.dsReadUser.setColumn();
        // 	}
        	this.dsReadUser.deleteColumn("chk");
        	this.dsReadUser.applyChange();

        	if(!this.gfnDsIsUpdated(this.dsList) && !this.gfnDsIsUpdated(this.dsUser) && !this.gfnDsIsUpdated(this.dsReadUser)
        			 && !this.gfnDsIsUpdated(this.dsSignUser)){
        			// 저장할 데이터가 없습니다.
        			this.gfnAlert("msg.save.nochange");
        			return;
        	}else{
        		this.fnMakeHtml();
        		this.fnTranSave();
        	}
        };

        //닫기버튼클릭
        this.divButton_btnClose_onclick = function(obj,e)
        {
        	this.getOwnerFrame().pvDocId = null;

        	this.getOwnerFrame().form.divWork.set_url(this.getOwnerFrame().pvMainUrl);
        };

        this.docMain_ontimer = function(obj,e)
        {
        	if(e.timerid == 0){
        		this.killTimer(0);

        		// 로딩 후 처리
        		if(this.fvMyDoc) {
        			// 회의안건내용
        			var sCntn = this.dsList.getColumn(0, "MTG_MTR_CN");
        			if(!this.gfnIsNull(sCntn)){
        				this.divContents.form.webEditor.callMethod("setData", sCntn);
        			}
        			// 회의결과내용
        			sCntn = this.dsList.getColumn(0, "MTG_RESULT_CN");
        			if(!this.gfnIsNull(sCntn)){
        				this.divContents.form.webEditorResult.callMethod("setData", sCntn);
        			}
        		} else {
        			if(!this.fvDocId) {
        				var sCntn = '<p><span style="font-family:Verdana,Geneva,sans-serif"><span style="font-size:10pt"><strong>1. 회의 주요 안건</strong></span></span></p>';
        				sCntn += '<ol><li><span style="font-family:Verdana,Geneva,sans-serif"><span style="font-size:10pt">안건 1</span></span>';
        				sCntn += '<ol><li>&nbsp;</li></ol></li><li><span style="font-family:Verdana,Geneva,sans-serif">안건 2</span></li>';
        				sCntn += '</ol>';
        				sCntn += '<p>&nbsp;</p>';
        				sCntn += '<p><span style="font-family:Verdana,Geneva,sans-serif"><span style="font-size:10pt"><strong>2. 회의 결과</strong></span></span></p>';
        				this.divContents.form.webEditor.callMethod("setData", sCntn);
        			} else {
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

        /**
         * @function fnOpenUserPopup
         * @description 사용자 선택창 오픈
         */
        this.fnOpenUserPopup = function(type, seltype)
        {
        	var sTitle  = "사용자 선택";
        	var oArg    = { pvDocId: this.dsList.getColumn(0, "DOC_ID"),
        					pvSelectType: seltype,
        					pvUserType: type};
        	var oOption = {title:sTitle
        				,titlebar:true};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("DMUserPopup", "meet::mtgSelectUserPu.xfdl", oArg, sPopupCallBack, oOption);
        };

        /**
         * @function divContents_btnSelectUser_onclick
         * @description 참석자선택 오픈
         */
        this.divContents_btnSelectUser_onclick = function(obj,e)
        {
        	this.fnOpenUserPopup("U","USER");
        };
        /**
         * @function divContents_btnSelectUser_onclick
         * @description 열람자선택 오픈
         */
        this.divContents_btnReadUser_onclick = function(obj,e)
        {
        	this.fnOpenUserPopup("R","USER");
        };
        /**
         * @function divContents_btnSelectHost_onclick
         * @description 주체자선택 오픈
         */
        this.divContents_btnSelectHost_onclick = function(obj,e)
        {
        	this.fnOpenUserPopup("U","HOST");
        };
        /**
         * @function divContents_btnSelectHost00_onclick
         * @description 주체자삭제
         */
        this.divContents_btnDeleteHost_onclick = function(obj,e)
        {
        	this.dsList.setColumn(0, "HOST_ID", "");
        	this.dsList.setColumn(0, "HOST_NAME", "");
        };
        /**
         * @function divContents_btnSelectHost00_onclick
         * @description 주체자삭제
         */
        this.divContents_btnDeleteUser_onclick = function(obj,e)
        {
        	this.dsUser.clearData();
        	this.dsUser.applyChange();
        	this.divContents.form.MultiComboUser.set_value("");
        };
        /**
         * @function divContents_btnDeleteReadUser_onclick
         * @description 열람자삭제
         */
        this.divContents_btnDeleteReadUser_onclick = function(obj,e)
        {
        	this.dsReadUser.clearData();
        	this.dsReadUser.applyChange();
        	this.divContents.form.MultiComboReadUser.set_value("");
        };
        /**
         * @function divContents_btnAddUser_onclick
         * @description 참석자추가
         */
        this.divContents_btnAddUser_onclick = function(obj,e)
        {
        	// 외부 사용자 추가
        	var sTitle  = "사용자 선택";
        	var oArg    = { pvDocId: this.dsList.getColumn(0, "DOC_ID")
        				};
        	var oOption = {title:sTitle
        				,titlebar:true};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("DMUserPopup", "meet::mtgAddUserPu.xfdl", oArg, sPopupCallBack, oOption);
        };

        /**
         * @function fnMakeHtml
         * @description HTML 생성
         */
        this.fnMakeHtml = function()
        {
        	var S = "";
        	S += '<html>';
        	S += '\n<body>';
        	S += '\n<table cellspacing="0" style="border-collapse:collapse; width:700px;table-layout: fixed">';
        	S += '\n<tbody>';
        	S += '\n<tr style="line-height:30px">		';
        	S += '\n<td align="center" style="vertical-align:middle;">';
        	S += '\n	<p>';
        	S += '\n	<strong>';
        	S += '\n	<span style="font-size:16pt;font-family:&quot;맑은 고딕&quot;text-align:center;">@MEETNAME@</span>';
        	S += '\n	</strong>';
        	S += '\n	<br />';
        	S += '\n	&nbsp;</p>';
        	S += '\n</td>';
        	S += '\n</tr>';

        	// 결재
        	/*
        	if(this.dsSignUser.rowcount > 0) {
        		// 결재란
        		S += '\n<tr>		';
        		S += '\n<td align="left">';
        		S += '\n<table cellspacing="0" style="border-collapse:collapse">';
        		S += '\n	<tbody>';
        		S += '\n		<tr>';
        		S += '\n			<td rowspan="2" style="vertical-align:middle; border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:1px solid black; text-align:center; height:10px; width:70px">';
        		S += '\n			<span style="font-size:11pt;font-family:&quot;맑은 고딕&quot;vertical-align:middle;">@@NAMESIGN@@</span>';
        		S += '\n			</td>';
        		S += '\n			<td style="border-bottom:1px solid black; border-left:none; text-align:center; border-right:1px solid black; border-top:1px solid black; vertical-align:top; width:110px">';
        		S += '\n			<p><span style="font-size:10.0pt;font-family:&quot;맑은 고딕&quot;">@@SIGNUSER1@@</span></p>';
        		S += '\n			</td>';
        		if(this.dsSignUser.rowcount == 2) {
        			S += '\n			<td style="border-bottom:1px solid black; border-left:none; text-align:center; border-right:1px solid black; border-top:1px solid black; vertical-align:top; width:110px">';
        			S += '\n			<p><span style="font-size:10.0pt;font-family:&quot;맑은 고딕&quot;">@@SIGNUSER2@@</span></p>';
        			S += '\n			</td>';
        		}
        		S += '\n		</tr>';
        		S += '\n		<tr>';
        		S += '\n			<td style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; height:60px; vertical-align:top; width:100px">';
        		S += '\n			<p>&nbsp;</p>';
        		S += '\n			</td>';
        		if(this.dsSignUser.rowcount == 2) {
        			S += '\n			<td style="border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; height:60px; vertical-align:top; width:100px">';
        			S += '\n			<p>&nbsp;</p>';
        			S += '\n			</td>';
        		}
        		S += '\n		</tr>';
        		S += '\n	</tbody>';
        		S += '\n</table>';
        		S += '\n</td>';
        		S += '\n</tr>';
        		S += '\n<tr style="line-height:3px">';
        		S += '\n<td><p>&nbsp;</p>';
        		S += '\n</td>';
        		S += '\n</tr>';

        		// 결재의견
        		S += '\n<tr>		';
        		S += '\n<td align="left">';
        		S += '\n<table cellspacing="0" style="border-collapse:collapse;width:700px;">';
        		S += '\n	<tbody>';
        		S += '\n		<tr>';
        		S += '\n			<td colspan="2" style="vertical-align:middle; border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:1px solid black; text-align:center; height:10px;">';
        		S += '\n				<span style="font-size:11pt;font-family:&quot;맑은 고딕&quot;vertical-align:middle;">@@NAMESINGCOMMENT@@</span>';
        		S += '\n			</td>';
        		S += '\n		</tr>';
        		S += '\n		<tr>';
        		S += '\n			<td style="vertical-align:middle; border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:1px solid black; text-align:center; height:50px; width:100px">';
        		S += '\n				<span style="font-size:10pt;font-family:&quot;맑은 고딕&quot;vertical-align:middle;">@@SIGNUSER1@@</span>';
        		S += '\n			</td>';
        		S += '\n			<td style="vertical-align:middle; border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:1px solid black; text-align:left; height:50px;">';
        		S += '\n				<span style="font-size:9pt;font-family:&quot;맑은 고딕&quot;vertical-align:middle;">&nbsp;</span>';
        		S += '\n			</td>';
        		S += '\n		</tr>';
        		if(this.dsSignUser.rowcount == 2) {
        			S += '\n		<tr>';
        			S += '\n			<td style="vertical-align:middle; border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:1px solid black; text-align:center; height:50px; width:100px">';
        			S += '\n				<span style="font-size:10pt;font-family:&quot;맑은 고딕&quot;vertical-align:middle;">@@SIGNUSER2@@</span>';
        			S += '\n			</td>';
        			S += '\n			<td style="vertical-align:middle; border-bottom:1px solid black; border-left:1px solid black; border-right:1px solid black; border-top:1px solid black; text-align:left; height:50px;">';
        			S += '\n				<span style="font-size:9pt;font-family:&quot;맑은 고딕&quot;vertical-align:middle;">&nbsp;</span>';
        			S += '\n			</td>';
        			S += '\n		</tr>';
        		}
        		S += '\n	</tbody>';
        		S += '\n</table>';
        		S += '\n</td>';
        		S += '\n</tr>';
        		S += '\n<tr style="line-height:1px">';
        		S += '\n<td><p>&nbsp;</p>';
        		S += '\n</td>';
        		S += '\n</tr>';
        	}
        	*/

        	S += '\n<tr>		';
        	S += '\n<td align="left">';
        	S += '\n	<table cellspacing="0" style="border-collapse:collapse;width:700px;table-layout: fixed;word-wrap: break-word;">';
        	S += '\n		<tbody>';
        	S += '\n			<tr style="line-height:10px;">';
        	S += '\n				<td style="padding-left:5px;background-color:#AEE3FF;border-bottom:1px solid black; border-left:2px solid black; border-right:1px solid black; border-top:2px solid black; height:10px; width:92px">';
        	S += '\n				<p><span style="font-size:11.0pt;font-family:&quot;맑은 고딕&quot;">@@NAMEDATE@@</span></p>';
        	S += '\n				</td>';
        	S += '\n				<td style="padding-left:5px;border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:2px solid black; height:9px; width:145px">';
        	S += '\n				<p><span style="font-size:10.0pt;font-family:&quot;맑은 고딕&quot;">@@DATE@@</span></p>';
        	S += '\n				</td>';
        	S += '\n				<td style="padding-left:5px;background-color:#AEE3FF;border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:2px solid black; height:10px; width:57px">';
        	S += '\n				<p><span style="font-size:11.0pt;font-family:&quot;맑은 고딕&quot;">@@NAMEHOST@@</span></p>';
        	S += '\n				</td>';
        	S += '\n				<td style="padding-left:5px;border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:2px solid black; height:18px; width:142px">';
        	S += '\n				<p><span style="font-size:10.0pt;font-family:&quot;맑은 고딕&quot;">@@HOST@@</span></p>';
        	S += '\n				</td>';
        	S += '\n				<td style="padding-left:5px;background-color:#AEE3FF;border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:2px solid black; width:76px">';
        	S += '\n				<p><span style="font-size:11.0pt;font-family:&quot;맑은 고딕&quot;">@@NAMEINPUT@@</span></p>';
        	S += '\n				</td>';
        	S += '\n				<td style="padding-left:5px;border-bottom:1px solid black; border-left:none; border-right:2px solid black; border-top:2px solid black; width:135px">';
        	S += '\n				<p><span style="font-size:10.0pt;font-family:&quot;맑은 고딕&quot;">@@INPUT@@</span></p>';
        	S += '\n				</td>';
        	S += '\n			</tr>';
        	S += '\n			<tr style="line-height:10px;">';
        	S += '\n				<td style="padding-left:5px;background-color:#AEE3FF;border-bottom:1px solid black; border-left:2px solid black; border-right:1px solid black; border-top:none; height:10px; width:92px">';
        	S += '\n				<p><span style="font-size:11.0pt;font-family:&quot;맑은 고딕&quot;">@@NAMETIME@@</span></p>';
        	S += '\n				</td>';
        	S += '\n				<td colspan="3" style="padding-left:5px;border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; width:369px">';
        	S += '\n				<p><span style="font-size:10.0pt;font-family:&quot;맑은 고딕&quot;">@@TIME@@</span></p>';
        	S += '\n				</td>';
        	S += '\n				<td style="padding-left:5px;background-color:#AEE3FF;border-bottom:1px solid black; border-left:none; border-right:1px solid black; border-top:none; width:76px">';
        	S += '\n				<p><span style="font-size:11.0pt;font-family:&quot;맑은 고딕&quot;">@@NAMEMEETPLACE@@</span></p>';
        	S += '\n				</td>';
        	S += '\n				<td style="padding-left:5px;border-bottom:1px solid black; border-left:none; border-right:2px solid black; border-top:none; width:135px">';
        	S += '\n				<p><span style="font-size:10.0pt;font-family:&quot;맑은 고딕&quot;">@@MEETPLACE@@</span></p>';
        	S += '\n				</td>';
        	S += '\n			</tr>';
        	S += '\n			<tr style="line-height:15px;">';
        	S += '\n				<td style="padding-left:5px;background-color:#AEE3FF;border-bottom:1px solid black; border-left:2px solid black; border-right:1px solid black; border-top:none; height:10px; width:92px">';
        	S += '\n				<p><span style="font-size:11.0pt;font-family:&quot;맑은 고딕&quot;">@@NAMEUSER@@</span></p>';
        	S += '\n				</td>';
        	S += '\n				<td colspan="5" style="padding-left:5px;border-bottom:1px solid black; border-left:none; border-right:2px solid black; border-top:none; width:579px">';
        	S += '\n				<p><span style="font-size:10.0pt;font-family:&quot;맑은 고딕&quot;">@@USERLIST@@</span></p>';
        	S += '\n				</td>';
        	S += '\n			</tr>';
        	S += '\n			<tr style="line-height:10px;">';
        	S += '\n				<td style="padding-left:5px;background-color:#AEE3FF;border-bottom:1px solid black; border-left:2px solid black; border-right:1px solid black; border-top:none; width:92px">';
        	S += '\n				<p><span style="font-size:11.0pt;font-family:&quot;맑은 고딕&quot;">@@NAMEREADUSER@@</span></p>';
        	S += '\n				</td>';
        	S += '\n				<td colspan="5" style="padding-left:5px;border-bottom:1px solid black; border-left:none; border-right:2px solid black; border-top:none; width:579px">';
        	S += '\n				<p><span style="font-size:10.0pt;font-family:&quot;맑은 고딕&quot;">@@READUSERLIST@@</span></p>';
        	S += '\n				</td>';
        	S += '\n			</tr>';
        	S += '\n			<tr style="line-height:10px;">';
        	S += '\n				<td style="padding-left:5px;background-color:#AEE3FF;border-bottom:2px solid black; border-left:2px solid black; border-right:1px solid black; border-top:none; width:92px">';
        	S += '\n				<p><span style="font-size:11.0pt;font-family:&quot;맑은 고딕&quot;">@@NAMETITLE@@</span></p>';
        	S += '\n				</td>';
        	S += '\n				<td colspan="5" style="padding-left:5px;border-bottom:2px solid black; border-left:none; border-right:2px solid black; border-top:none; width:579px">';
        	S += '\n				<p><span style="font-size:10.0pt;font-family:&quot;맑은 고딕&quot;">@@TITLE@@</span></p>';
        	S += '\n				</td>';
        	S += '\n			</tr>';
        	S += '\n		</tbody>';
        	S += '\n	</table>';
        	S += '\n</td>';
        	S += '\n</tr>';

        	// 내용
        	S += '\n<tr>		';
        	S += '\n<td align="left">';
        	S += '\n<table cellspacing="0" style="border-collapse:collapse;width:700px;table-layout: fixed;word-wrap: break-word;">';
        	S += '\n<tbody>';
        	S += '\n<tr>';
        	S += '\n<td style="background-color:#e1e1e1;padding:5px;text-align:left;border:1px solid black;">';
        	S += '\n	<p>';
        	S += '\n	<strong>';
        	S += '\n	<span style="font-size:12pt;font-family:&quot;맑은 고딕&quot;text-align:center;">@@NAMECONTENTS@@</span>';
        	S += '\n	</strong>';
        	S += '\n	</p>';
        	S += '\n</td>';
        	S += '\n</tr>';
        	S += '\n<tr>';
        	S += '\n<td style="padding:5px;text-align:left;border:1px solid black;">';
        	S += '\n@@CONTENTS@@';
        	S += '\n</td>';
        	S += '\n</tr>';
        	S += '\n</tbody>';
        	S += '\n</table>							';
        	S += '\n</td>';
        	S += '\n</tr>';

        	// 결과
        // 	if(!this.gfnIsNull(this.dsList.getColumn(0, "MTG_RESULT_CN"))) {
        // 		S += '\n<tr>		';
        // 		S += '\n<td align="left">';
        // 		S += '\n<table cellspacing="0" style="border-collapse:collapse;width:700px;table-layout: fixed;word-wrap: break-word;">';
        // 		S += '\n<tbody>';
        // 		S += '\n<tr>';
        // 		S += '\n<td style="background-color:#AEE3FF;padding:5px;text-align:left;border:1px solid black;">';
        // 		S += '\n	<p>';
        // 		S += '\n	<strong>';
        // 		S += '\n	<span style="font-size:12pt;font-family:&quot;맑은 고딕&quot;text-align:center;">@@NAMERESULTCONTENTS@@</span>';
        // 		S += '\n	</strong>';
        // 		S += '\n	</p>';
        // 		S += '\n</td>';
        // 		S += '\n</tr>';
        // 		S += '\n<tr>';
        // 		S += '\n<td style="padding:5px;text-align:left;border:1px solid black;">';
        // 		S += '\n@@RESULTCONTENTS@@';
        // 		S += '\n</td>';
        // 		S += '\n</tr>';
        // 		S += '\n</tbody>';
        // 		S += '\n</table>							';
        // 		S += '\n</td>';
        // 		S += '\n</tr>';
        // 	}
        	// logo
        	S += '\n<tr>';
        	S += '\n<td align="right">';
        	S += '\n<table cellspacing="0" style="border-collapse:collapse;width:700px;table-layout: fixed;word-wrap: break-word;">';
        	S += '\n<tbody>';
        	S += '\n<tr><td>';
        	S += '\n<hr width = "100%" color="blue" size="1">';
        	S += '\n</td></tr>';
        	S += '\n<tr>';
        	S += '\n<td style="align:right;padding:5px;text-align:left;border:0px none;">';
        	S += '\n<img src="' + this.dsCompany.getColumn(0, "COM_IMAGE") + '" style="height:' + this.dsCompany.getColumn(0, "COM_IMAGE_HEIGHT") + 'px; width:' + this.dsCompany.getColumn(0, "COM_IMAGE_WIDTH") + 'px" />';
        	S += '\n</td>';
        	S += '\n</tr>';
        	S += '\n</tbody>';
        	S += '\n</table>	';
        	S += '\n</td>';
        	S += '\n</tr>';

        	S += '\n</tbody>';
        	S += '\n</table>							';
        	S += '\n</body>';
        	S += '\n</html>';

        	S = S.replace("@MEETNAME@", this.dsCompany.getColumn(0, "COM_NAME") + " 회의록");

        	// 결재
        	if(this.dsSignUser.rowcount > 0) {
        		S = S.replace("@@NAMESIGN@@", "결재");
        		if(this.dsSignUser.rowcount > 0) {
        			for(var i=0,len=this.dsSignUser.rowcount;i<len;i++) {
        				var txt = this.dsSignUser.getColumn(i, "WORK_NAME");
        				if(this.gfnIsNull(txt)) {
        					txt = "";
        					var form;
        					if(i == 0) form = this.divContents.form.divSign1.form;
        					else form = this.divContents.form.divSign2.form;
        					var value = form.edtWorkName.value;
        					if(!this.gfnIsNull(value)) {
        						txt = " " + value;
        					}
        				} else {
        					txt = " " + txt;
        				}
        				S = nexacro.replaceAll(S, "@@SIGNUSER" + (i+1) + "@@", this.dsSignUser.getColumn(i, "USER_NAME") + txt);
        			}
        		}
        		S = S.replace("@@NAMESINGCOMMENT@@", "결재의견");
        	}

        	S = S.replace("@@NAMEDATE@@", "작성일자");
        	S = S.replace("@@DATE@@", this.gfnGetDateFormat(this.dsList.getColumn(0, "INPT_DTTM")," ", true));
        	S = S.replace("@@NAMEHOST@@", "주관");
        	var txt = this.dsList.getColumn(0, "HOST_WORK_NAME");
        	if(this.gfnIsNull(txt)) {
        		txt = "";
        	} else {
        		txt = " " + txt;
        	}
        	S = S.replace("@@HOST@@", this.dsList.getColumn(0, "HOST_NAME") + txt);
        	S = S.replace("@@NAMEINPUT@@", "작성자");
        	txt = this.dsList.getColumn(0, "WORK_NAME");
        	if(this.gfnIsNull(txt)) {
        		txt = "";
        	} else {
        		txt = " " + txt;
        	}
        	S = S.replace("@@INPUT@@", this.dsList.getColumn(0, "USER_NAME") + txt);
        	S = S.replace("@@NAMETIME@@", "회의시간");
        	S = S.replace("@@TIME@@", this.gfnGetDateFormat(this.dsList.getColumn(0, "MTG_DATE"),"",true)
        						+ "  "
        						+ this.gfnGetTimeFormat(this.dsList.getColumn(0, "MTG_BEGIN_TM").substr(8,4))
        						+ " ~ "
        						+ this.gfnGetTimeFormat(this.dsList.getColumn(0, "MTG_END_TM").substr(8,4)));

        	S = S.replace("@@NAMEMEETPLACE@@", "회의장소");
        	var inds = this[this.divContents.form.cboMTG_PLACE_CD.innerdataset];
        	var nRow = inds.findRow("SSC_CD", this.dsList.getColumn(0, "MTG_PLACE_CD"));
        	S = S.replace("@@MEETPLACE@@", inds.getColumn(nRow, "SSC_CD_KORN_NM"));

        	S = S.replace("@@NAMEUSER@@", "참석자");

        	this.dsUser.set_keystring("S:USER_NAME");
        	/*
        	var name = "";
        	for(var i=0,len=this.dsUser.rowcount;i<len;i++) {
        		if(i>0) name += ", ";
        		txt = this.dsUser.getColumn(i, "WORK_NAME");
        		if(this.gfnIsNull(txt)) {
        			txt = "";
        		} else {
        			txt = " " + txt;
        		}
        		//name += '<span style="display:inline-block; width:120px;">'
        		//name += this.dsUser.getColumn(i, "USER_NAME") + txt + "  (인)  ";// + '</span>';
        		name += this.dsUser.getColumn(i, "USER_NAME") + txt + " ";// + '</span>';
        	}
        	S = S.replace("@@USERLIST@@", name);
        	*/

        	S = S.replace("@@NAMEREADUSER@@", "열람자");
        	name = "";
        	for(var i=0,len=this.dsReadUser.rowcount;i<len;i++) {
        		if(i>0) name += ", ";
        		name += this.dsReadUser.getColumn(0, "USER_NAME");
        		if(!this.gfnIsNull(this.dsReadUser.getColumn(0, "WORK_NAME"))) {
        			name += " " + this.dsReadUser.getColumn(0, "WORK_NAME");
        		}
        	}
        	S = S.replace("@@READUSERLIST@@", name);

        	S = S.replace("@@NAMETITLE@@", "제목");
        	S = S.replace("@@TITLE@@", this.dsList.getColumn(0, "DOC_TITLE"));

        	S = S.replace("@@NAMECONTENTS@@", "회의내용");
        	S = S.replace("@@CONTENTS@@", this.dsList.getColumn(0, "MTG_MTR_CN"));

        // 	if(!this.gfnIsNull(this.dsList.getColumn(0, "MTG_RESULT_CN"))) {
        // 		S = S.replace("@@NAMERESULTCONTENTS@@", "회의결과");
        // 		S = S.replace("@@RESULTCONTENTS@@", this.dsList.getColumn(0, "MTG_RESULT_CN"));
        // 	}

        	this.dsList.addColumn("HTML","string");
        	this.dsList.setColumn(0, "HTML", S);

        };
        this.divContents_MultiComboUser_onitemchanged = function(obj,e)
        {
        	console.log(e);
        };

        /**
        * @function divContents_Combo00_onitemchanged  <br>
        * description 문서보관선택
        */
        this.divContents_Combo00_onitemchanged = function(obj,e)
        {
        	var sDate = "";
        	switch(e.postvalue) {
        		case "A" :
        			this.dsList.setColumn(0, "EXPIRE_DATE", this.gfnAddDate(this.gfnGetDate(),365));
        			break;
        		case "B" :
        			this.dsList.setColumn(0, "EXPIRE_DATE", this.gfnAddDate(this.gfnGetDate(),365*3));
        			break;
        		case "C" :
        			this.dsList.setColumn(0, "EXPIRE_DATE", this.gfnAddDate(this.gfnGetDate(),365*5));
        			break;
        		case "D" :
        			this.dsList.setColumn(0, "EXPIRE_DATE", this.gfnAddDate(this.gfnGetDate(),365*10));
        			break;
        		default  :
        			break;
        	}
        };

        // 삭제
        this.btnDelete_onclick = function(obj,e)
        {
        		// 선택된 자료를 삭제 하시겠습니까?
        		var sMsgId = "confirm.before.delete";					//메세지ID
        		var arrArg = [""];										//메세지취환될값 배열[생략가능]
        		var sPopId = "deleteData";								//메세지팝업ID[생략가능]	*해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
        		var sMsgCallback = "fnMsgCallback";						//메세지콜백[생략가능] 		* confirm성 메시지를 사용 시 반드시 필요

        		// 변경된 정보가 있습니다.\n저장 하시겠습니까?
        		this.gfnAlert(sMsgId, arrArg, sPopId, sMsgCallback);
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
            this.divContents.form.webEditorResult.addEventHandler("onloadcompleted",this.divContents_divCont_webEditor_onloadcompleted,this);
            this.divContents.form.webEditorResult.addEventHandler("onusernotify",this.divContents_divCont_webEditor_onusernotify,this);
            this.divContents.form.btnSelectUser.addEventHandler("onclick",this.divContents_btnSelectUser_onclick,this);
            this.divContents.form.btnReadUser.addEventHandler("onclick",this.divContents_btnReadUser_onclick,this);
            this.divContents.form.btnSelectHost.addEventHandler("onclick",this.divContents_btnSelectHost_onclick,this);
            this.divContents.form.btnDeleteHost.addEventHandler("onclick",this.divContents_btnDeleteHost_onclick,this);
            this.divContents.form.btnDeleteUser.addEventHandler("onclick",this.divContents_btnDeleteUser_onclick,this);
            this.divContents.form.btnDeleteReadUser.addEventHandler("onclick",this.divContents_btnDeleteReadUser_onclick,this);
            this.divContents.form.btnAddUser.addEventHandler("onclick",this.divContents_btnAddUser_onclick,this);
            this.divContents.form.Combo00.addEventHandler("onitemchanged",this.divContents_Combo00_onitemchanged,this);
            this.btnSave.addEventHandler("onclick",this.divButton_btnSave_onclick,this);
            this.btnClose.addEventHandler("onclick",this.divButton_btnClose_onclick,this);
            this.btnClose00.addEventHandler("onclick",this.divButton_btnClose_onclick,this);
            this.btnSave00.addEventHandler("onclick",this.divButton_btnSave_onclick,this);
            this.btnDelete.addEventHandler("onclick",this.btnDelete_onclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
        };
        this.loadIncludeScript("mtgNewFm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
