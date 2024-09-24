(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("authMenuMgFm");
            this.set_titletext("메뉴관리");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SYTM_FLAG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MODULE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SYTM_FLAG_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"LEVL\" type=\"STRING\" size=\"39\"/><Column id=\"SYTM_FLAG_CD\" type=\"string\" size=\"6\"/><Column id=\"MODULE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"string\" size=\"10\"/><Column id=\"MENU_GRP_ID\" type=\"string\" size=\"10\"/><Column id=\"HIPO_MENU_ID\" type=\"string\" size=\"10\"/><Column id=\"PRGM_ID\" type=\"string\" size=\"50\"/><Column id=\"PRGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"string\" size=\"50\"/><Column id=\"MENU_ENGL_NM\" type=\"string\" size=\"150\"/><Column id=\"MENU_WHLE_NM\" type=\"string\" size=\"200\"/><Column id=\"MENU_ORDR\" type=\"STRING\" size=\"4\"/><Column id=\"USED_YN\" type=\"string\" size=\"1\"/><Column id=\"REMK\" type=\"string\" size=\"4000\"/><Column id=\"PARM\" type=\"string\" size=\"100\"/><Column id=\"MENU_FLAG_CD\" type=\"string\" size=\"6\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHipoMenuList", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"LEVL\" type=\"STRING\" size=\"39\"/><Column id=\"SYTM_FLAG_CD\" type=\"string\" size=\"6\"/><Column id=\"MENU_ID\" type=\"string\" size=\"10\"/><Column id=\"MENU_GRP_ID\" type=\"string\" size=\"10\"/><Column id=\"HIPO_MENU_ID\" type=\"string\" size=\"10\"/><Column id=\"PRGM_ID\" type=\"string\" size=\"50\"/><Column id=\"MENU_NM\" type=\"string\" size=\"50\"/><Column id=\"MENU_ENGL_NM\" type=\"string\" size=\"150\"/><Column id=\"MENU_TOTL_NM\" type=\"string\" size=\"200\"/><Column id=\"MENU_ORDR\" type=\"STRING\" size=\"4\"/><Column id=\"USED_YN\" type=\"string\" size=\"1\"/><Column id=\"DATA_ALOG_YN\" type=\"string\" size=\"1\"/><Column id=\"PRNT_ALOG_YN\" type=\"string\" size=\"1\"/><Column id=\"PERS_INFN_ALOG_YN\" type=\"string\" size=\"1\"/><Column id=\"TERM_SET_YN\" type=\"string\" size=\"1\"/><Column id=\"CYBR_MENU_YN\" type=\"string\" size=\"1\"/><Column id=\"REMK\" type=\"string\" size=\"4000\"/><Column id=\"PARM\" type=\"string\" size=\"100\"/><Column id=\"MENU_FRDT\" type=\"string\" size=\"8\"/><Column id=\"MENU_TODT\" type=\"string\" size=\"8\"/><Column id=\"MENU_FRTM\" type=\"string\" size=\"4\"/><Column id=\"MENU_TOTM\" type=\"string\" size=\"4\"/><Column id=\"YEAR\" type=\"string\" size=\"4\"/><Column id=\"SHTM\" type=\"string\" size=\"6\"/><Column id=\"YEAR_SHTM_SET_YN\" type=\"string\" size=\"1\"/><Column id=\"MENU_FLAG_CD\" type=\"string\" size=\"6\"/><Column id=\"INPT_ID\" type=\"string\" size=\"50\"/><Column id=\"INPT_IP\" type=\"string\" size=\"20\"/><Column id=\"CHGE_ID\" type=\"string\" size=\"50\"/><Column id=\"CHGE_IP\" type=\"string\" size=\"20\"/><Column id=\"ATTC_FILE_ID\" type=\"string\" size=\"10\"/><Column id=\"ATTC_FILE_PATH\" type=\"string\" size=\"200\"/><Column id=\"ATTC_FILE_NM\" type=\"string\" size=\"50\"/><Column id=\"SERV_ATTC_FILE_NM\" type=\"string\" size=\"200\"/><Column id=\"ATTC_FILE_SIZE\" type=\"string\" size=\"10\"/><Column id=\"ATTC_FILE_ORDR\" type=\"STRING\" size=\"4\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","56","-158","185","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
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
            obj.set_taborder("7");
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
            obj.set_taborder("8");
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
            obj.set_taborder("9");
            obj.set_value("20190308");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10","48","28","25",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCompany","0","12","87","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("회사구분");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCompany","staCompany:0","12","139","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            obj.set_innerdataset("gdsCompany");
            obj.set_codecolumn("SSC_CD");
            obj.set_datacolumn("SSC_CD_KORN_NM");
            obj.set_text("알림");
            obj.set_value("INF");
            obj.set_index("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle00","cboCompany:0","12","74","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("시스템");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSysGubun","staTitle00:0","12","130","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("cbo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle03_00","cboSysGubun:0","12","62","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("모듈");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboModuleCd","staTitle03_00:0","12","100","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("cbo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle01","cboModuleCd:0","12","74","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("메뉴ID");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMenuId","staTitle01:0","12","100","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_maxlength("10");
            obj.set_imemode("alpha");
            obj.set_inputtype("english,digit");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle02","edtMenuId:0","12","74","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("메뉴명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMenuNm","staTitle02:0","12","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_imemode("hangul");
            obj.set_maxlength("66");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle03","edtMenuNm:0","12","62","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("사용");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUseYn","staTitle03:0","12","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_cboUseYn_innerdataset = new nexacro.NormalDataset("divSearch_form_cboUseYn_innerdataset", obj);
            divSearch_form_cboUseYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">- 전체 - </Col></Row><Row><Col id=\"datacolumn\">예</Col><Col id=\"codecolumn\">1</Col></Row><Row><Col id=\"datacolumn\">아니오</Col><Col id=\"codecolumn\">0</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboUseYn_innerdataset);
            obj.set_text("cbo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTerm",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W20");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail",null,"93","350",null,"20","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Static("staBg12","0","33",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg00","0","0",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","33","120","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("메뉴ID");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtMenuId","124","38",null,"24","5",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_cssclass("essential");
            obj.set_maxlength("10");
            obj.set_inputtype("digit,english");
            obj.set_inputmode("upper");
            obj.set_imemode("alpha");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg15","0","363",null,null,"0","0",null,null,"108",null,this.divDetail.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle16","0","363","120",null,null,"0",null,null,"108",null,this.divDetail.form);
            obj.set_taborder("26");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new TextArea("txtRemk","124","368",null,null,"5","5",null,null,"98",null,this.divDetail.form);
            obj.set_taborder("27");
            obj.set_maxlength("1000");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle02_00","0","0","120","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("모듈");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboModuleCd","124","5","141","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_cssclass("essential");
            obj.set_text("cbo00");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg01","0","66",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle02","0","66","120","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_text("메뉴명");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtMenuNm","124","71",null,"24","5",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_cssclass("essential");
            obj.set_maxlength("23");
            obj.set_imemode("hangul");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg02","0","99",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle03","0","99","120","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_text("메뉴영문명");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtMenuEnglNm","124","104",null,"24","5",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_maxlength("23");
            obj.set_imemode("alpha");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg03","0","165",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle04","0","165","120","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_text("상위메뉴");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new CheckBox("chkIncProg","124","170","24","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            obj.set_enable("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboHipoMenuId","chkIncProg:0","170","116","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_innerdataset("dsHipoMenuList");
            obj.set_datacolumn("MENU_NM");
            obj.set_codecolumn("MENU_ID");
            obj.set_readonly("true");
            obj.set_text("cbo01");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg08","0","231",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("34");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle08","0","231","120","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("16");
            obj.set_text("프로그램ID");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtPgmId","124","236","111","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("17");
            obj.set_cssclass("edi_WF_Search");
            obj.set_readonly("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnSelPrgm","edtPgmId:-24","237","24","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_EdiSch");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg05","0","297",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("35");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg06","0","330",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("36");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle06","0","297","120","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("22");
            obj.set_text("메뉴순서");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle07","0","330","120","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("24");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtOrdr","124","302",null,"24","5",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("23");
            obj.set_cssclass("essential");
            obj.set_inputtype("digit");
            obj.set_maxlength("3");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg04","0","198",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("37");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle05","0","198","120","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("14");
            obj.set_text("메뉴구분");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboMenyTypeCd","124","203","141","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("15");
            obj.set_text("cbo00");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg09","0","264",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("38");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtParam","124","269",null,"24","5",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("21");
            obj.set_maxlength("50");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle09","0","264","120","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("20");
            obj.set_text("파라미터");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtPrgmNm","edtPgmId:3","236",null,"24","5",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboHipoMenuId00","cboHipoMenuId:3","170",null,"24","5",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_innerdataset("dsHipoMenuList");
            obj.set_datacolumn("MENU_ID");
            obj.set_codecolumn("MENU_ID");
            obj.set_readonly("true");
            obj.set_text("cbo01");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg07","0","132",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("39");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle09_00","0","132","120","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_text("메뉴레벨");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboMenuLvl","124","137","141","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_cssclass("essential");
            var divDetail_form_cboMenuLvl_innerdataset = new nexacro.NormalDataset("divDetail_form_cboMenuLvl_innerdataset", obj);
            divDetail_form_cboMenuLvl_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">0</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4</Col></Row></Rows>");
            obj.set_innerdataset(divDetail_form_cboMenuLvl_innerdataset);
            obj.set_text("0");
            obj.set_value("0");
            obj.set_index("0");
            this.divDetail.addChild(obj.name, obj);

            obj = new CheckBox("chkUseYn","124","335","100","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("25");
            obj.set_text("사용");
            obj.set_value("true");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_cssclass("essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle00",null,"divSearch:0","350","43","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("메뉴 상세");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","0","93",null,null,"divDetail:20","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsList");
            obj.set_autoenter("select");
            obj.set_treeinitstatus("expand,all");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_tooltiptype("hover");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"206\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"206\"/><Column size=\"100\"/><Column size=\"40\"/><Column size=\"40\"/><Column size=\"50\"/></Columns><Rows><Row size=\"62\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"메뉴명\" textAlign=\"center\"/><Cell col=\"1\" text=\"메뉴ID\"/><Cell col=\"2\" text=\"모듈\"/><Cell col=\"3\" text=\"상위메뉴ID\" textAlign=\"center\"/><Cell col=\"4\" text=\"프로그램ID\" textAlign=\"center\"/><Cell col=\"5\" text=\"프로그램명\"/><Cell col=\"6\" displaytype=\"normal\" text=\"메뉴구분\" textAlign=\"center\"/><Cell col=\"7\" text=\"레벨\"/><Cell col=\"8\" text=\"순서\" textAlign=\"center\"/><Cell col=\"9\" text=\"사용&#13;&#10;여부\"/></Band><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" text=\"bind:MENU_NM\" treestartlevel=\"0\" treelevel=\"bind:LEVL\"/><Cell col=\"1\" text=\"bind:MENU_ID\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:MODULE_CD\"/><Cell col=\"3\" displaytype=\"normal\" text=\"bind:HIPO_MENU_ID\" textAlign=\"center\" verticalAlign=\"middle\"/><Cell col=\"4\" text=\"bind:PRGM_ID\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:PRGM_NM\"/><Cell col=\"6\" displaytype=\"combo\" text=\"bind:MENU_FLAG_CD\"/><Cell col=\"7\" text=\"bind:MENU_LVL\" edittype=\"normal\"/><Cell col=\"8\" edittype=\"normal\" text=\"bind:MENU_ORDR\"/><Cell col=\"9\" text=\"bind:USED_YN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","50","48","43",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("메뉴");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Div("divCmmnBtn","staTitle01:0","60",null,"33","staTitle00:20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcel",null,"0","95","28","0",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("5");
            obj.set_text("엑셀다운");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelSave");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnExcelTemplate",null,"0","143","28","btnExcel:3",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("4");
            obj.set_text("업로드템플릿다운");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_TempSave");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnExcelUpload",null,"0","107","28","btnExcelTemplate:3",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("3");
            obj.set_text("엑셀업로드");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelUp");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnRegiSubMenu",null,"0","84","28","btnExcelUpload:3",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("2");
            obj.set_text("하위메뉴");
            obj.set_cssclass("btn_WF_Add");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnRegiMenu",null,"0","60","28","btnRegiSubMenu:3",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("1");
            obj.set_text("메뉴");
            obj.set_cssclass("btn_WF_Add");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnRegiTopMenu",null,"0","84","28","btnRegiMenu:3",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("0");
            obj.set_text("상위메뉴");
            obj.set_cssclass("btn_WF_Add");
            this.divCmmnBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCmmnBtn.form
            obj = new Layout("default","",0,0,this.divCmmnBtn.form,function(p){});
            this.divCmmnBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1300,736,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item4","divDetail.form.edtMenuId","value","dsList","MENU_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divDetail.form.txtRemk","value","dsList","REMK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.cboSysGubun","value","dsCond","SYTM_FLAG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divDetail.form.cboModuleCd","value","dsList","MODULE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divDetail.form.edtMenuNm","value","dsList","MENU_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divDetail.form.edtMenuEnglNm","value","dsList","MENU_ENGL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divDetail.form.cboHipoMenuId","value","dsList","HIPO_MENU_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divDetail.form.edtPgmId","value","dsList","PRGM_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divDetail.form.edtOrdr","value","dsList","MENU_ORDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divDetail.form.cboUseYn","value","dsList","USED_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divDetail.form.cboMenyTypeCd","value","dsList","MENU_FLAG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divDetail.form.edtParam","value","dsList","PARM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divDetail.form.edtPrgmNm","value","dsList","PRGM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divDetail.form.cboHipoMenuId00","value","dsList","HIPO_MENU_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divDetail.form.cboMenuLvl","value","dsList","MENU_LVL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSearch.form.cboModuleCd","value","dsCond","MODULE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtMenuId","value","dsCond","MENU_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtMenuNm","value","dsCond","MENU_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboUseYn","value","dsCond","USED_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divDetail.form.chkUseYn","value","dsList","USED_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divSearch.form.cboCompany","value","dsCond","COMPANY_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("authMenuMgFm.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	authMenuMgFm.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/03/25
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/03/25			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvSys 					= ''; 			//조회된 데이타의 시스템 구분값
        this.fvIsEnableCreateMenu 	= true; 		//전체 조회가 아닌 경우 메뉴작업불가
        this.fvBFirst 				= true;
        this.fvTopHipoMenuId 		= '0000000000';	// 최상위 메뉴의 상위메뉴 ID
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	//공통코드
        	var param = [
        			  {biztype : "Combo", code : "SM00", objid : this.divSearch.form.cboSysGubun}					// 시스템 구분
        			, {biztype : "Combo", code : "SM01", selecttype : "A", objid : this.divSearch.form.cboModuleCd}	// 모듈
        			, {biztype : "Combo", code : "SM12", objid : this.divDetail.form.cboMenyTypeCd}					// 메뉴구분코드
        			, {biztype : "Combo", code : "SM01", objid : this.divDetail.form.cboModuleCd}					// 모듈
        			, {biztype : "Grid" , code : "SM12", objid : this.grdList, bindcolumn:"MENU_FLAG_CD"}			// 메뉴구분코드
        			, {biztype : "Grid" , code : "SM01", objid : this.grdList, bindcolumn:"MODULE_CD"}			// 메뉴구분코드
        	];
        	var arrComp = [this.divSearch.form.cboCompany];
        	this.gfnSetAuthorityCompany(arrComp);

        	this.gfnGetCommonCode(param);
        	this.fnSetBtn();

        	if (this.fvBFirst == false) {
        		return;
        	}
        	this.fvSys = this.divSearch.form.cboSysGubun.value;
        	this.fvBFirst = false;

        	// 버튼 권한 제어
        	this.gfnSetCommBtn(this.divCmmnBtn);
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	if (this.gfnDsIsUpdated(this.dsList)) {
        		// 변경된 정보가 있습니다.\n저장 하시겠습니까?
        		var sMsgId = "confirm.before.search";	//메세지ID
        		var arrArg = [""];						//메세지취환될값 배열[생략가능]
        		var sPopId = "beforeSearch";			//메세지팝업ID[생략가능]	*해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
        		var sMsgCallback = "fnMsgCallback";		//메세지콜백[생략가능] 		* confirm성 메시지를 사용 시 반드시 필요

        		// 변경된 정보가 있습니다.\n저장 하시겠습니까?
        		this.gfnAlert(sMsgId, arrArg, sPopId, sMsgCallback);
        	}else{
        		this.fnTranSearch();
        	}
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

        	if(this.fnValidation()){
        		// 자료를 저장하시겠습니까?
        		this.gfnAlert("confirm.save", [""], "beforeSave", "fnMsgCallback");
        		return;
        	}
        };

        //삭제
        this.cfnDel = function ()
        {
        	if (this.dsList.rowcount == 0){
        		return;
        	}

        	// 메뉴리스트가 필터된 상태에서는 메뉴 삭제 불가
        	if (this.fvIsEnableCreateMenu != true)
        	{
        		var sMsgId = "confirm.before.fullsearch";						//메세지ID
        		var arrArg = ["메뉴"];											//메세지취환될값 배열[생략가능]
        		var sPopId = sMsgId;											//메세지팝업ID[생략가능]	*해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
        		var sMsgCallback = "fnMsgCallback";								//메세지콜백[생략가능] 		* confirm성 메시지를 사용 시 반드시 필요

        		// '필터링된 상태에서는 메뉴작업을 할수없습니다.\n
        		// 재조회 하시겠습니까?'
        		this.gfnAlert(sMsgId, arrArg, sPopId, sMsgCallback);
        		return;
        	}
        	else {
        		this.dsList.deleteRow(this.dsList.rowposition);
        	}
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //조회
        this.fnTranSearch = function ()
        {
        	// 조회
        	this.dsList.clearData();
        	this.fvSys = this.divSearch.form.cboSysGubun.value;

        	var strSvcId    = "searchMenuList";
        	var strSvcUrl   = "searchMenuList.do";
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
        	var strSvcId    = "saveMenuList";
        	var strSvcUrl   = "saveMenuList.do";
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
        //transaction
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "searchMenuList":
        			// 조회시 풀메뉴를 조회하는지 여부확인용 변수 세팅
        			var strMenu = this.divSearch.form.edtMenuNm.value;
        			var strMenuId = this.divSearch.form.edtMenuId.value;

        			if( this.gfnIsNull(strMenu) && this.gfnIsNull(strMenuId)) this.fvIsEnableCreateMenu = true;
        			else this.fvIsEnableCreateMenu = false;

        			// 상위메뉴 코드 콤보용 데이타셋 작성
        			this.dsHipoMenuList.copyData(this.dsList);
        			break;
        		case "saveMenuList":
        			break;
        		default:break;
        	}
        };

        //message
        this.fnMsgCallback = function (sMsgId,sRtn)
        {
        	switch(sMsgId) {
        		case "beforeSearch":
        			if( this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false){
        				return
        			}
        			this.fnTranSearch();
        			break;
        		case "beforeSave":
        			if(this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false){
        				return;
        			}
        			this.fnTranSave();
        			break;
        		case "validCode":
        			this.divDetail.form.edtMenuId.set_value("");
        			this.divDetail.form.edtMenuId.setFocus();
        			break;
        		default:break;
        	}
        };
        //popup
        this.fnPopupCallback = function (sPopupId, sRtn)
        {
        	switch(sPopupId) {
        		case "bizMenuMgPopup":
        			if(!this.gfnIsNull(sRtn)){
        				// 프로그램 ID가 선택되어 온 경우라면
        				if(sRtn != "N") {
        					var aValue = sRtn.split(",");
        					this.divDetail.form.edtPgmId.set_value(aValue[1]); // 프로그램 ID
        					this.divDetail.form.edtPrgmNm.set_value(aValue[2]); // 프로그램 NM
        				}
        			}
        			break;
        		default:break;
        	}
        };

        //엑셀 임포트 콜백
        this.fnExcelImportCallback = function (sImportId, e)
        {
        	//TODO..
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        //validation
        this.fnValidation = function ()
        {
        	// 정합성 체크
        	this.gfnClearValidation(this.dsList);

        	this.gfnSetValidation(this.dsList, "COMPANY_CD"	 , "회사"	, "required");
        	this.gfnSetValidation(this.dsList, "MENU_ID"	 , "메뉴아이디"	, "required");
        	this.gfnSetValidation(this.dsList, "MODULE_CD"	 , "모듈"			, "required");
        	this.gfnSetValidation(this.dsList, "MENU_NM"	 , "메뉴명"		, "required");
        	this.gfnSetValidation(this.dsList, "MENU_ORDR"	 , "메뉴순서"		, "required");
        	this.gfnSetValidation(this.dsList, "USED_YN"	 , "사용여부"		, "required");
        	this.gfnSetValidation(this.dsList, "MENU_LVL"	 , "메뉴레벨"		, "required");

        	// Dataset의 변경된 Row Validation check
        	if (this.gfnValidation(this.dsList, "U") == false) {
        		return false;
        	}else{
        		return true;
        	}
        };
        // 프로그램 구분에 따른 버튼활성처리
        this.fnSetBtn = function (strMenuGb)
        {
        	if (strMenuGb == 'P') {
        		// 프로그램이 연결되어 있는 메뉴인 경우
        		this.divDetail.form.btnSelPrgm.set_enable(true);
        		this.divDetail.form.edtParam.set_enable(true);
        	}else {
        		// 프로그램이 연결되어 있지 않은 메뉴인 경우
        		this.divDetail.form.btnSelPrgm.set_enable(false);
        		this.divDetail.form.edtParam.set_enable(false);
        	}

        };

        //메뉴추가
        this.fnAddNewMenu = function (sGubun)
        {
        	// 메뉴리스트가 필터된 상태에서는 메뉴 생성 불가
        	if (this.fvIsEnableCreateMenu != true)
        	{
        		var sMsgId = "confirm.before.fullsearch";	//메세지ID
        		var arrArg = [sGubun];						//메세지취환될값 배열[생략가능]
        		var sPopId = "AddNewMenu";					//메세지팝업ID[생략가능]	*해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
        		var sMsgCallback = "fnMsgCallback";			//메세지콜백[생략가능] 		* confirm성 메시지를 사용 시 반드시 필요

        		// '필터링된 상태에서는 메뉴작업을 할수없습니다.\n 재조회 하시겠습니까?'
        		this.gfnAlert(sMsgId, arrArg, sPopId, sMsgCallback);
        		return;
        	}

        	// 현재 선택된 Row 설정
        	var nCurRow = this.dsList.rowposition;
        	var nNewRow;

        	// Top Menu 등록 시 가장 마지막 Row에 Add
        	if(sGubun == "top") {
        		nNewRow = this.dsList.addRow();
        	}
        	// 그외의 경우 선택된 Row하단에 Insert
        	else {
        		nNewRow = this.dsList.insertRow(nCurRow + 1);
        	}

        	// 메뉴생성시 기본세팅 처리
        	this.dsList.setColumn(nNewRow, 'COMPANY_CD', this.divSearch.form.cboCompany.value);	// 시스템코드
        	this.dsList.setColumn(nNewRow, 'SYTM_FLAG_CD', this.divSearch.form.cboSysGubun.value);	// 시스템코드
        	this.dsList.setColumn(nNewRow, 'USED_YN', '1');	// 사용여부

        	// 상위메뉴 등록 시 LEVL은 0으로 상위메뉴는 기본 값('0000000000')으로 설정
        	if (sGubun == "top") {
        		this.dsList.setColumn(nNewRow, 'MENU_LVL', 0);	// 최상위 메뉴 등록 시 레벨은 0
        		this.dsList.setColumn(nNewRow, 'HIPO_MENU_ID', this.fvTopHipoMenuId);	// 최상위메뉴 등록 시 상위 메뉴 ID는 '0000000000'
        		this.dsList.setColumn(nNewRow, 'MENU_FLAG_CD', 'M');
        	}
        	// 동일레벨 혹은 하위레벨 메뉴 등록 시 처리
        	else {
        		// 동일레벨의 경우
        		if (sGubun == "same") {
        			this.dsList.setColumn(nNewRow, 'MENU_LVL', this.dsList.getColumn(nCurRow, 'MENU_LVL'));
        			this.dsList.setColumn(nNewRow, 'MODULE_CD', this.dsList.getColumn(nCurRow, 'MODULE_CD'));
        			this.dsList.setColumn(nNewRow, 'HIPO_MENU_ID', this.dsList.getColumn(nCurRow, 'HIPO_MENU_ID'));
        			this.dsList.setColumn(nNewRow, 'MENU_FLAG_CD', this.dsList.getColumn(nCurRow, 'MENU_FLAG_CD'));
        			this.dsList.setColumn(nNewRow, 'MENU_ORDR', this.dsList.getColumn(nCurRow, 'MENU_ORDR')+1);
        		}
        		// 하위레벨 메뉴 등록 시
        		else {
        			this.dsList.setColumn(nNewRow, 'MENU_FLAG_CD', 'P');
        			this.dsList.setColumn(nNewRow, 'MENU_LVL', this.dsList.getColumn(nCurRow, 'MENU_LVL') + 1);
        			this.dsList.setColumn(nNewRow, 'HIPO_MENU_ID', this.dsList.getColumn(nCurRow, 'MENU_ID'));
        		}
        	}

        	this.grdList.set_treeinitstatus('expand,all');
        };


        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        //프로그램검색
        this.divDetail_btnSelPrgm_onclick = function(obj,e)
        {
        	var sTitle = "프로그램검색";
        	var oArg   = {pvCompanyCd:this.divSearch.form.cboCompany.value
        					,pvPgmId:this.divDetail.form.edtPgmId.value
        				, pvModuleCd : this.divDetail.form.cboModuleCd.value};
        	var oOption = {title:sTitle
        				,titlebar:true};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("bizMenuMgPopup", "sytm::auth/authMenuMgPu.xfdl", oArg, sPopupCallBack, oOption);
        };

        //컬럼체인지
        this.dsList_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == 'MENU_FLAG_CD') {
        		// 프로그램 구분에 따른 버튼활성처리
        		this.fnSetBtn(e.newvalue);
        	}
        };
        //로우포스체인지
        this.dsList_onrowposchanged = function(obj,e)
        {
        	if( e.newrow > -1){
        		if(obj.getRowType(e.newrow)==Dataset.ROWTYPE_INSERT){
        			this.divDetail.form.edtMenuId.set_readonly(false);
        		}else{
        			this.divDetail.form.edtMenuId.set_readonly(true);
        		}


        		if (this.dsList.getColumn(e.newrow, 'HIPO_MENU_ID') == this.fvTopHipoMenuId) {
        			// root행일 경우 프로그램구분 수정불가(편집불가)
        			this.divDetail.form.chkIncProg.set_enable(false);
        			this.divDetail.form.chkIncProg.set_value("0");
        			this.divDetail.form.cboHipoMenuId.set_readonly(true);
        			this.divDetail.form.cboHipoMenuId.set_cssclass("");
        		}else {
        			this.divDetail.form.chkIncProg.set_enable(true);
        			this.divDetail.form.chkIncProg.set_value("1");
        			this.divDetail.form.cboHipoMenuId.set_readonly(false);
        			this.divDetail.form.cboHipoMenuId.set_cssclass("essential");
        		}
        		this.fnSetBtn(this.dsList.getColumn(e.newrow, 'MENU_FLAG_CD'));

        		var nCurLvl = this.dsList.getColumn(e.newrow, "MENU_LVL");
        		this.dsHipoMenuList.filter("MENU_LVL < "+nCurLvl);
        	}
        };
        //조회
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.cfnSearch();
        };

        // TOP 메뉴등록
        this.divCmmnBtn_btnRegiTopMenu_onclick = function(obj,e)
        {
        	this.fnAddNewMenu("top");
        };

        //메뉴등록
        this.divCmmnBtn_btnRegiMenu_onclick = function(obj,e)
        {
        	this.fnAddNewMenu("same");
        };

        //SUB메뉴등록
        this.divCmmnBtn_btnRegiSubMenu_onclick = function(obj,e)
        {
        	if(this.dsList.getRowType(this.dsList.rowposition) != Dataset.ROWTYPE_NORMAL) {
        		// 상위 {0}을(를) 저장 후 작업을 진행하십시오.
        		this.gfnAlert("msg.err.updata", ["상위 메뉴"]);
        		return;
        	}
        	this.fnAddNewMenu("sub");
        };

        //EXCEL DOWNLOAD
        this.divCmmnBtn_btnExcel_onclick = function(obj,e)
        {
        	// 엑셀 상단 타이틀 텍스트 설정
        	var sSubTitle = this.staTitle01.text;

        	// Excel Export 공통함수 호출
        	this.gfnExcelExport(this.grdList, sSubTitle, sSubTitle, "EXCEL2007","",sSubTitle, true, "");
        };

        this.dsList_cancolumnchange = function(obj,e)
        {
        	if( e.columnid=="MENU_ID"){
        		if(this.gfnIsNull(e.newvalue)) return;

        		var nRow = obj.findRow("MENU_ID", e.newvalue);
        		if( nRow > -1){
        			this.gfnAlert("msg.exist", ["입력하신 메뉴아이디"], "validCode","fnMsgCallback");
        			return;
        		}
        	}else if( e.columnid == "MENU_LVL"){
        		var nCurLvl = e.newvalue;
        		this.dsHipoMenuList.filter("MENU_LVL < "+nCurLvl);
        		this.divDetail.form.cboHipoMenuId.setFocus();
        	}
        };

        //엑셀업로드
        this.divCmmnBtn_btnExcelUpload_onclick = function(obj,e)
        {
        	this.gfnExcelImport("dsList", "메뉴 리스트", "A4:N", "fnExcelImportCallback", "menu", "", "A3:N3", this.grdList);
        };

        //엑셀템플릿 다운로드
        this.divCmmnBtn_btnExcelTemplate_onclick = function(obj,e)
        {
        	var fileId = "공통시스템_Template.xlsx";
        	this.gfnDownTempate(fileId);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.divDetail.form.chkIncProg.addEventHandler("onchanged",this.divDetail_chkIncProg_onchanged,this);
            this.divDetail.form.btnSelPrgm.addEventHandler("onclick",this.divDetail_btnSelPrgm_onclick,this);
            this.divCmmnBtn.form.btnExcel.addEventHandler("onclick",this.divCmmnBtn_btnExcel_onclick,this);
            this.divCmmnBtn.form.btnExcelTemplate.addEventHandler("onclick",this.divCmmnBtn_btnExcelTemplate_onclick,this);
            this.divCmmnBtn.form.btnExcelUpload.addEventHandler("onclick",this.divCmmnBtn_btnExcelUpload_onclick,this);
            this.divCmmnBtn.form.btnRegiSubMenu.addEventHandler("onclick",this.divCmmnBtn_btnRegiSubMenu_onclick,this);
            this.divCmmnBtn.form.btnRegiMenu.addEventHandler("onclick",this.divCmmnBtn_btnRegiMenu_onclick,this);
            this.divCmmnBtn.form.btnRegiTopMenu.addEventHandler("onclick",this.divCmmnBtn_btnRegiTopMenu_onclick,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
            this.dsList.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
        };
        this.loadIncludeScript("authMenuMgFm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
