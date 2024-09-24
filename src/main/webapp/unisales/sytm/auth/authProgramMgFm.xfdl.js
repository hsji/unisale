(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("authProgramMgPu");
            this.set_titletext("프로그램 관리");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1250,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"PRGM_ID\" type=\"string\" size=\"10\"/><Column id=\"MODULE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_NM\" type=\"string\" size=\"100\"/><Column id=\"PRGM_TYPE_CD\" type=\"string\" size=\"3\"/><Column id=\"PRGM_EXPL\" type=\"string\" size=\"500\"/><Column id=\"PRGM_PATH\" type=\"string\" size=\"200\"/><Column id=\"USED_YN\" type=\"string\" size=\"1\"/><Column id=\"ANEW_BTTN_USED_YN\" type=\"string\" size=\"1\"/><Column id=\"INQR_BTTN_USED_YN\" type=\"string\" size=\"1\"/><Column id=\"DELE_BTTN_USED_YN\" type=\"string\" size=\"1\"/><Column id=\"SAVE_BTTN_USED_YN\" type=\"string\" size=\"1\"/><Column id=\"PRNT_BTTN_USED_YN\" type=\"string\" size=\"1\"/><Column id=\"EXCL_BTTN_USED_YN\" type=\"string\" size=\"1\"/><Column id=\"INIT_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REMK\" type=\"string\" size=\"4000\"/><Column id=\"ADD_BTN_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_HELP\" type=\"STRING\" size=\"256\"/><Column id=\"HELP_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"PRGM_ID\" type=\"STRING\" size=\"10\"/><Column id=\"PRGM_NM\" type=\"STRING\" size=\"100\"/><Column id=\"PRGM_TYPE_CD\" type=\"STRING\" size=\"3\"/><Column id=\"MODULE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PRGM_TYPE_CD\"/><Col id=\"PRGM_NM\"/><Col id=\"PRGM_ID\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYn", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"name\">Y</Col></Row><Row><Col id=\"code\">0</Col><Col id=\"name\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTerm",null,"0","20",null,"0","0",null,null,null,null,this);
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

            obj = new Static("staCompany","0","12","87","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("회사구분");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCompany","staCompany:0","12","139","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_innerdataset("gdsCompany");
            obj.set_codecolumn("SSC_CD");
            obj.set_datacolumn("SSC_CD_KORN_NM");
            obj.set_text("알림");
            obj.set_value("INF");
            obj.set_index("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle03","cboCompany:0","12","62","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("모듈");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboModuleCd","staTitle03:0","12","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("cbo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle00","cboModuleCd:0","12","98","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("프로그램ID");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

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
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtProgId","staTitle00:0","12","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle01","edtProgId:0","12","98","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("프로그램명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtProgNm","staTitle01:0","12","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle02","edtProgNm:0","12","110","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("프로그램유형");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboProgType","staTitle02:0","12","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("cbo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","divSearch:0","86","43",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("프로그램 ");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","0","staTitle01:0",null,null,"20","210",null,null,"250",null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"101\"/><Column size=\"80\"/><Column size=\"220\"/><Column size=\"70\"/><Column size=\"220\"/><Column size=\"50\" band=\"right\"/><Column size=\"50\" band=\"right\"/><Column size=\"50\" band=\"right\"/><Column size=\"50\" band=\"right\"/><Column size=\"50\" band=\"right\"/><Column size=\"50\" band=\"right\"/><Column size=\"50\" band=\"right\"/><Column size=\"50\" band=\"right\"/><Column size=\"55\" band=\"right\"/><Column size=\"50\" band=\"right\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"프로그램 ID\"/><Cell col=\"1\" rowspan=\"2\" text=\"모듈\"/><Cell col=\"2\" rowspan=\"2\" text=\"프로그램 명\"/><Cell col=\"3\" rowspan=\"2\" text=\"프로그램&#13;&#10;유형\"/><Cell col=\"4\" rowspan=\"2\" text=\"프로그램 경로\"/><Cell col=\"5\" rowspan=\"2\" text=\"사용&#13;&#10;여부\" autosizecol=\"none\" controlautosizingtype=\"none\"/><Cell col=\"6\" colspan=\"7\" text=\"프로그램 기능\" autosizecol=\"none\" controlautosizingtype=\"none\"/><Cell col=\"13\" rowspan=\"2\" text=\"추가버튼&#13;&#10;유무\" autosizecol=\"none\" controlautosizingtype=\"none\"/><Cell col=\"14\" rowspan=\"2\" text=\"매뉴얼&#13;&#10; 여부\"/><Cell row=\"1\" col=\"6\" text=\"조회\" autosizecol=\"none\" controlautosizingtype=\"none\"/><Cell row=\"1\" col=\"7\" text=\"추가\" autosizecol=\"none\" controlautosizingtype=\"none\"/><Cell row=\"1\" col=\"8\" text=\"삭제\" autosizecol=\"none\" controlautosizingtype=\"none\"/><Cell row=\"1\" col=\"9\" text=\"저장\" autosizecol=\"none\" controlautosizingtype=\"none\"/><Cell row=\"1\" col=\"10\" text=\"출력\" autosizecol=\"none\" controlautosizingtype=\"none\"/><Cell row=\"1\" col=\"11\" text=\"엑셀\" autosizecol=\"none\" controlautosizingtype=\"none\"/><Cell row=\"1\" col=\"12\" text=\"초기화\" autosizecol=\"none\" controlautosizingtype=\"none\"/></Band><Band id=\"body\"><Cell text=\"bind:PRGM_ID\"/><Cell col=\"1\" text=\"bind:MODULE_CD\"/><Cell col=\"2\" text=\"bind:PRGM_NM\" tooltiptext=\"bind:PRGM_NM\"/><Cell col=\"3\" text=\"bind:PRGM_TYPE_CD\"/><Cell col=\"4\" text=\"bind:PRGM_PATH\" tooltiptext=\"bind:PRGM_PATH\"/><Cell col=\"5\" text=\"bind:USED_YN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" autosizecol=\"none\" controlautosizingtype=\"none\"/><Cell col=\"6\" text=\"bind:INQR_BTTN_USED_YN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" autosizecol=\"none\" controlautosizingtype=\"none\"/><Cell col=\"7\" text=\"bind:ANEW_BTTN_USED_YN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" autosizecol=\"none\" controlautosizingtype=\"none\"/><Cell col=\"8\" text=\"bind:DELE_BTTN_USED_YN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" autosizecol=\"none\" controlautosizingtype=\"none\"/><Cell col=\"9\" text=\"bind:SAVE_BTTN_USED_YN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" autosizecol=\"none\" controlautosizingtype=\"none\"/><Cell col=\"10\" text=\"bind:PRNT_BTTN_USED_YN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" autosizecol=\"none\" controlautosizingtype=\"none\"/><Cell col=\"11\" text=\"bind:EXCL_BTTN_USED_YN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" autosizecol=\"none\" controlautosizingtype=\"none\"/><Cell col=\"12\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:INIT_BTTN_USED_YN\" autosizecol=\"none\" controlautosizingtype=\"none\"/><Cell col=\"13\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"dsYn\" combodatacol=\"name\" combocodecol=\"code\" autosizecol=\"none\" controlautosizingtype=\"none\" text=\"bind:ADD_BTN_YN\"/><Cell col=\"14\" text=\"bind:HELP_FLAG\" displaytype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divCmmnBtn",null,"divSearch:10","720","33","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddBtnMg",null,"0","98","28","101",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("0");
            obj.set_text("추가버튼관리");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnExcel",null,"0","119","28","btnAddBtnMg:3",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("1");
            obj.set_text("엑셀다운로드");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelSave");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnExcelTemplate",null,"0","171","28","btnExcel:3",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("2");
            obj.set_text("업로드템플릿 다운로드");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_TempSave");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnExcelUpload",null,"0","107","28","btnExcelTemplate:3",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("3");
            obj.set_text("엑셀업로드");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelUp");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnManual","btnAddBtnMg:3","0","98","28",null,null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("4");
            obj.set_text("매뉴얼 관리");
            obj.set_fittocontents("width");
            obj.set_visible("true");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","grdList:0",null,"43","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("프로그램 상세");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","0","staTitle00:0",null,"167","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Static("staBg01","0","0",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg02","0","33",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg03","0","66",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg04","0","99",null,"68","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","0","108","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_text("프로그램 ID");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtProgId","112","5","141","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_cssclass("essential");
            obj.set_maxlength("10");
            obj.set_inputtype("digit,english");
            obj.set_inputmode("upper");
            obj.set_imemode("alpha");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle01_00","257","0","108","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_text("모듈");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboModuleCd","369","5","141","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_cssclass("essential");
            obj.set_text("cbo00");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle02","514","0","108","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_text("프로그램 명");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtProgNm","626","5","141","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_cssclass("essential");
            obj.set_maxlength("66");
            obj.set_imemode("hangul");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle03","771","0","108","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_text("프로그램 유형");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboProgType","883","5","141","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_text("cbo00");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle05","0","33","108","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_text("프로그램 경로");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtProgPath","112","edtProgId:9","398","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_cssclass("essential");
            obj.set_maxlength("100");
            obj.set_inputtype("digit,english,space,symbol,sign,dot");
            obj.set_imemode("alpha");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle07","514","33","108","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("14");
            obj.set_text("프로그램 설명");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtProgDesc","626","38",null,"24","5",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("15");
            obj.set_maxlength("150");
            obj.set_imemode("hangul");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle04","0","66","108","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("16");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new CheckBox("chkUseYn","112","71","61","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("17");
            obj.set_text("사용");
            obj.set_value("true");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle08","257","66","108","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("18");
            obj.set_text("프로그램 기능");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new CheckBox("chkSearchYn","369","71","61","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("19");
            obj.set_text("조회");
            obj.set_value("true");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.divDetail.addChild(obj.name, obj);

            obj = new CheckBox("chkNewYn","chkSearchYn:1","71","61","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("20");
            obj.set_text("추가");
            obj.set_value("true");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.divDetail.addChild(obj.name, obj);

            obj = new CheckBox("chkDelYn","chkNewYn:1","71","61","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("21");
            obj.set_text("삭제");
            obj.set_value("true");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.divDetail.addChild(obj.name, obj);

            obj = new CheckBox("chkSaveYn","chkDelYn:1","71","61","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("22");
            obj.set_text("저장");
            obj.set_value("true");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.divDetail.addChild(obj.name, obj);

            obj = new CheckBox("chkPrintYn","chkSaveYn:1","71","61","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("23");
            obj.set_text("출력");
            obj.set_value("true");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.divDetail.addChild(obj.name, obj);

            obj = new CheckBox("chkExcelYn","chkPrintYn:1","71","61","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("24");
            obj.set_text("엑셀");
            obj.set_value("true");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.divDetail.addChild(obj.name, obj);

            obj = new CheckBox("chkInitYn","chkExcelYn:1","71","74","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("25");
            obj.set_text("초기화");
            obj.set_value("true");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle09","0","99","108","68",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("26");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new TextArea("txtRemk","staTitle09:4","chkSaveYn:9",null,"58","5",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("27");
            obj.set_maxlength("1000");
            obj.set_imemode("hangul");
            this.divDetail.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCmmnBtn.form
            obj = new Layout("default","",0,0,this.divCmmnBtn.form,function(p){});
            this.divCmmnBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1250,736,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divDetail.form.edtProgId","value","dsList","PRGM_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divDetail.form.cboModuleCd","value","dsList","MODULE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divDetail.form.edtProgNm","value","dsList","PRGM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divDetail.form.cboProgType","value","dsList","PRGM_TYPE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divDetail.form.edtProgPath","value","dsList","PRGM_PATH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divDetail.form.edtProgDesc","value","dsList","PRGM_EXPL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divDetail.form.chkUseYn","value","dsList","USED_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divDetail.form.chkSearchYn","value","dsList","INQR_BTTN_USED_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divDetail.form.chkNewYn","value","dsList","ANEW_BTTN_USED_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divDetail.form.chkDelYn","value","dsList","DELE_BTTN_USED_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divDetail.form.chkSaveYn","value","dsList","SAVE_BTTN_USED_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divDetail.form.chkPrintYn","value","dsList","PRNT_BTTN_USED_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divDetail.form.chkExcelYn","value","dsList","EXCL_BTTN_USED_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divDetail.form.chkInitYn","value","dsList","INIT_BTTN_USED_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divDetail.form.txtRemk","value","dsList","REMK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divSearch.form.edtProgId","value","dsCond","PRGM_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divSearch.form.cboModuleCd","value","dsCond","MODULE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divSearch.form.edtProgNm","value","dsCond","PRGM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divSearch.form.cboProgType","value","dsCond","PRGM_TYPE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divSearch.form.cboCompany","value","dsCond","COMPANY_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("authProgramMgFm.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	authProgramMgPu.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/03/23
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/03/23			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        //this.fvRowPosition = -1;
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	//공통코드조회
        	var param = [ {biztype : "Combo", code : "SM10", selecttype : "A", objid : this.divSearch.form.cboProgType}			// 프로그램 유형
        				 ,{biztype : "Combo", code : "SM01", selecttype : "A", objid : this.divSearch.form.cboModuleCd}			// 모듈구분
        				 ,{biztype : "Combo", code : "SM10", objid : this.divDetail.form.cboProgType}							// 입력항목 프로그램 유형
        				 ,{biztype : "Combo", code : "SM01", objid : this.divDetail.form.cboModuleCd}							// 입력항목 모듈구분
        				 ,{biztype : "Grid",  code : "SM10", objid : this.grdList, bindcolumn : "PRGM_TYPE_CD", edit : "false"}	// grid 프로그램 유형
        				 ,{biztype : "Grid",  code : "SM01", objid : this.grdList, bindcolumn : "MODULE_CD", 	edit : "false"}	// grid 프로그램 유형
        	];
        	this.gfnGetCommonCode(param);

        	// 버튼 권한 제어
        	this.gfnSetCommBtn(this.divCmmnBtn);

        	var arrComp = [this.divSearch.form.cboCompany];
        	this.gfnSetAuthorityCompany(arrComp);
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	if (this.gfnDsIsUpdated(this.dsList)) {
        		// 변경된 정보가 있습니다.\n저장 하시겠습니까?
        		var sMsgId = "confirm.before.search";		//메세지ID
        		var arrArg = [""];							//메세지취환될값 배열[생략가능]
        		var sPopId = "search";						//메세지팝업ID[생략가능]	*해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
        		var sMsgCallback = "fnMsgCallback";			//메세지콜백[생략가능] 		* confirm성 메시지를 사용 시 반드시 필요

        		// 변경된 정보가 있습니다.\n저장 하시겠습니까?
        		this.gfnAlert(sMsgId, arrArg, sPopId, sMsgCallback);
        	}else{
        		this.fnTranSearch();
        	}
        };

        //추가
        this.cfnAdd = function ()
        {
        	//초기값 세팅
        	var nRow = this.dsList.addRow();
        	var compCd = this.dsList.getColumn(nRow-1, "COMPANY_CD");
        	if(!compCd) compCd = this.divSearch.form.cboCompany.value;
        	this.dsList.setColumn(nRow, "COMPANY_CD", compCd);

        	this.dsList.setColumn(nRow,'PRGM_ID'		  ,"");
        	this.dsList.setColumn(nRow,'MODULE_CD'		  ,"");
        	this.dsList.setColumn(nRow,'PRGM_NM'		  ,"");
        	this.dsList.setColumn(nRow,'PRGM_TYPE_CD'	  ,"F");
        	this.dsList.setColumn(nRow,'PRGM_EXPL'		  ,"");
        	this.dsList.setColumn(nRow,'PRGM_PATH'		  ,"");
        	this.dsList.setColumn(nRow,'USED_YN'		  ,"1");
        	this.dsList.setColumn(nRow,'ANEW_BTTN_USED_YN',"0");
        	this.dsList.setColumn(nRow,'INQR_BTTN_USED_YN',"0");
        	this.dsList.setColumn(nRow,'DELE_BTTN_USED_YN',"0");
        	this.dsList.setColumn(nRow,'SAVE_BTTN_USED_YN',"0");
        	this.dsList.setColumn(nRow,'PRNT_BTTN_USED_YN',"0");
        	this.dsList.setColumn(nRow,'EXCL_BTTN_USED_YN',"0");
        	this.dsList.setColumn(nRow,'INIT_BTTN_USED_YN',"0");
        	this.dsList.setColumn(nRow,'REMK'			  ,"");

        	this.divDetail.form.edtProgId.setFocus();
        };

        //삭제
        this.cfnDel = function ()
        {
        	if (this.dsList.rowcount == 0){
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

        	if(this.fnValidation()){
        		// 자료를 저장하시겠습니까?
        		this.gfnAlert("confirm.save", [""], "saveProg", "fnMsgCallback");
        		return;
        	}
        };

        //추가버튼 테스트
        this.cfnbtnAddBtnMg = function ()
        {
        	if( this.dsList.getRowCount()==0){
        		return;
        	}

        	var nRow = this.dsList.rowposition;
        	var nRowType = this.dsList.getRowType(nRow);
        	if( nRowType == 2 ){
        		this.gfnAlert("msg.err.updateafter"); // 변경된 내역을 저장 후 작업하세요.
        		return;
        	}

        	var sProgId = this.dsList.getColumn(nRow, "PRGM_ID");
        	var sProgNm = this.dsList.getColumn(nRow, "PRGM_NM");
        	var sTitle = "추가버튼 관리";
        	var oArg   = { pvCompanyCd:this.dsList.getColumn(nRow, "COMPANY_CD")
        					,pvProgId:sProgId
        				  ,pvProgNm:sProgNm};
        	var oOption = {title:sTitle
        				,titlebar:true};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("bizProgramMgPopup", "sytm::auth/authProgramMgPu.xfdl", oArg, sPopupCallBack, oOption);
        };



        // 매뉴얼 팝업 open
        this.fnbtnManual = function()
        {
        	var sPopupId = "manualUpdatePopup";

        	// 열려있는 팝업 닫기
        	this.gfnCloseToOpenPopup(sPopupId);

        	if( this.dsList.getRowCount()==0){
        		return;
        	}

        	var nRow = this.dsList.rowposition;
        	var nRowType = this.dsList.getRowType(nRow);
        	if( nRowType == 2 ){
        		this.gfnAlert("msg.err.updateafter"); // 변경된 내역을 저장 후 작업하세요.
        		return;
        	}

        	var sProgId = this.dsList.getColumn(nRow, "PRGM_ID");
        	var sProgNm = this.dsList.getColumn(nRow, "PRGM_NM");
        	var sManualFlag = this.dsList.getColumn(nRow, "HELP_FLAG");

        	var sTitle = "매뉴얼 관리";
        	var oArg   = {pvCompanyCd:this.dsList.getColumn(nRow, "COMPANY_CD")
        					,pvProgId:sProgId
        				  ,pvProgNm:sProgNm
        				 };

        	if(sManualFlag == "Y") oArg['pvOpenType'] = "update";

        	var sPopupCallBack = "fnPopupCallback";
        	var sUrl = "sytm::auth/authProgramMgUpdateManualPu.xfdl";

        	var oOption = {title:sTitle
        				,titlebar:true
        				,width:1000
        				,height:800
        				,popuptype:"modeless"
        				};

        	this.gfnOpenPopup(sPopupId, sUrl, oArg, sPopupCallBack, oOption);
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //조회 transaction
        this.fnTranSearch = function ()
        {
        	var strSvcId    = "searchProgramList";
        	var strSvcUrl   = "searchProgramList.do";
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

        //저장 transaction
        this.fnTranSave = function ()
        {
        	var strSvcId    = "saveProgramList";
        	var strSvcUrl   = "saveProgramList.do";
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
        		case "searchProgramList":
        		case "saveProgramList":
        			break;
        		default: break;
        	}
        };

        //popup callback
        this.fnPopupCallback = function (sPopupId, sRtn)
        {
        	//TODO..
        	switch(sPopupId)
        	{
        		case "manualUpdatePopup" :
        			if(sRtn == "close") break;
        			this.fnTranSearch();
        			break;
        		default :
        			break;
        	}
        };

        //message callback
        this.fnMsgCallback = function (sMsgId, sRtn)
        {
        	switch(sMsgId) {
        		case "search":
        			if(this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false){
        				return;
        			}
        			this.fnTranSearch();
        			break;
        		case "saveProg":
        			if(this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false){
        				return;
        			}
        			this.fnTranSave();
        			break;
        		case "validCode":
        			this.divDetail.form.edtProgId.set_value("");
        			this.divDetail.form.edtProgId.setFocus();
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
        this.fnValidation = function ()
        {
        	// 정합성 체크
        	this.gfnClearValidation(this.dsList);

        	this.gfnSetValidation(this.dsList, "PRGM_ID"	 , "프로그램ID"		, "required");
        	this.gfnSetValidation(this.dsList, "MODULE_CD"	 , "모듈"				, "required");
        	this.gfnSetValidation(this.dsList, "PRGM_NM"	 , "프로그램명"		, "required");
        	this.gfnSetValidation(this.dsList, "PRGM_PATH"	 , "프로그램경로"		, "required");

        	// Dataset의 변경된 Row Validation check
        	if (this.gfnValidation(this.dsList, "U") == false) {
        		return false;
        	}else{
        		return true;
        	}
        };



        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        // 조회버튼 클릭
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.cfnSearch();
        };

        // 추가버튼 관리 버튼 클릭
        this.divCmmnBtn_btnAddBtnMg_onclick = function(obj,e)
        {
        	this.cfnbtnAddBtnMg();
        };

        // 매뉴얼 관리 버튼 클릭
        this.divCmmnBtn_btnManual_onclick = function(obj,e)
        {
        	this.fnbtnManual();
        };

        //엑셀다운로드
        this.divCmmnBtn_btnExcel_onclick = function(obj,e)
        {
        	// 엑셀 상단 타이틀 텍스트 설정
        	var sSubTitle = this.staTitle01.text;

        	// Excel Export 공통함수 호출
        	this.gfnExcelExport(this.grdList, sSubTitle, sSubTitle, "EXCEL2007","",sSubTitle, true, "");
        };

        //업로드 템플릿 다운로드
        this.divCmmnBtn_btnExcelTemplate_onclick = function(obj,e)
        {
        	var fileId = "공통시스템_Template.xlsx";
        	this.gfnDownTempate(fileId);
        };

        //엑셀업로드
        this.divCmmnBtn_btnExcelUpload_onclick = function(obj,e)
        {
        	this.gfnExcelImport("dsList", "프로그램 리스트", "A4:O", "fnExcelImportCallback", "program", "", "A3:O3", this.grdList);
        };

        this.dsList_onrowposchanged = function(obj,e)
        {
        	if(obj.getRowType(e.newrow)==Dataset.ROWTYPE_INSERT){
        		this.divDetail.form.edtProgId.set_readonly(false);
        	}else{
        		this.divDetail.form.edtProgId.set_readonly(true);
        	}
        };


        this.dsList_cancolumnchange = function(obj,e)
        {
        	if( e.columnid=="PRGM_ID"){
        		if(this.gfnIsNull(e.newvalue)) return;

        		var nRow = obj.findRow("PRGM_ID", e.newvalue);
        		if( nRow > -1){
        			this.gfnAlert("msg.exist", ["입력하신 프로그램아이디"], "validCode","fnMsgCallback");
        			return;
        		}
        	}
        };

        // Grid 더블클릭시
        this.grdList_oncelldblclick = function(obj,e)
        {
        	// bind된 칼럼명
        	var sColumn = this.gfnGetBindColName(obj, e.col);

        	switch(sColumn) {
        	// 추가버튼
        	case "ADD_BTN_YN" :
        		this.cfnbtnAddBtnMg();
        		break;
        	// 매뉴얼
        	case "HELP_FLAG" :
        		this.fnbtnManual();
        		break;
        	default:
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.grdList.addEventHandler("oncelldblclick",this.grdList_oncelldblclick,this);
            this.divCmmnBtn.form.btnAddBtnMg.addEventHandler("onclick",this.divCmmnBtn_btnAddBtnMg_onclick,this);
            this.divCmmnBtn.form.btnExcel.addEventHandler("onclick",this.divCmmnBtn_btnExcel_onclick,this);
            this.divCmmnBtn.form.btnExcelTemplate.addEventHandler("onclick",this.divCmmnBtn_btnExcelTemplate_onclick,this);
            this.divCmmnBtn.form.btnExcelUpload.addEventHandler("onclick",this.divCmmnBtn_btnExcelUpload_onclick,this);
            this.divCmmnBtn.form.btnManual.addEventHandler("onclick",this.divCmmnBtn_btnManual_onclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
            this.dsList.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
        };
        this.loadIncludeScript("authProgramMgFm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
