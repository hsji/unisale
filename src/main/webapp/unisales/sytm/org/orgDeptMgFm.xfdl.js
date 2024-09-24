(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("orgDeptMgFm");
            this.set_titletext("부서관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HIPO_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HIPO_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_KORN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ENGL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ABBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ENGL_ABBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_SHOW_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_FLAG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"BEFO_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_TODT\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_IP\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_IP\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCheckDept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCompany","0","12","87","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("회사구분");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCompany","staCompany:0","12","139","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_innerdataset("gdsCompany");
            obj.set_codecolumn("SSC_CD");
            obj.set_datacolumn("SSC_CD_KORN_NM");
            obj.set_text("알림");
            obj.set_value("INF");
            obj.set_index("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle00","cboCompany:0","12","86","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("부서코드");
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

            obj = new Edit("edtMsgCd","staTitle00:0","12","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle02","edtMsgCd:0","12","74","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("부서명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMsgTxt","staTitle02:0","12","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle03","edtMsgTxt:0","12","74","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("사용");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUseYN","staTitle03:0","12","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_cboUseYN_innerdataset = new nexacro.NormalDataset("divSearch_form_cboUseYN_innerdataset", obj);
            divSearch_form_cboUseYN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">- 전체 - </Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboUseYN_innerdataset);
            obj.set_text("예");
            obj.set_value("1");
            obj.set_index("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static04_00",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W20");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00",null,"divSearch:0","450","43","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("부서 상세");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail",null,"staTitle00:0","450",null,"20","0",null,null,"463",null,this);
            obj.set_taborder("3");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Static("staBg01","0","0",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","0","141","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("부서코드");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtDeptCd","145","5","141","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_maxlength("7");
            obj.set_inputtype("digit,english");
            obj.set_inputmode("upper");
            obj.set_imemode("alpha");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg02","0","33",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle02","0","33","141","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_text("상위부서코드");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg03","0","66",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg04","0","99",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg05","0","132",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg06","0","165",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg07","0","198",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg08","0","231",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg09","0","264",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg10","0","297",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg11","0","330",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg12","0","363",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg13","0","396",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg14","0","429",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle03","0","66","141","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("17");
            obj.set_text("부서한글명");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtDeptKorNm","145","71",null,"24","5",null,"300",null,null,null,this.divDetail.form);
            obj.set_taborder("18");
            obj.set_cssclass("essential");
            obj.set_maxlength("66");
            obj.set_imemode("hangul");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle04","0","99","141","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("19");
            obj.set_text("부서영문명");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtDeptEngNm","145","104",null,"24","5",null,"300","300",null,null,this.divDetail.form);
            obj.set_taborder("20");
            obj.set_maxlength("66");
            obj.set_imemode("alpha");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle05","0","132","141","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("21");
            obj.set_text("부서 약어명");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtDeptAbbrNm","145","137",null,"24","5",null,"300",null,null,null,this.divDetail.form);
            obj.set_taborder("22");
            obj.set_maxlength("33");
            obj.set_imemode("hangul");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle06","0","165","141","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("23");
            obj.set_text("부서영문약어명");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtDeptEngAbbrNm","145","170",null,"24","5",null,"300","300",null,null,this.divDetail.form);
            obj.set_taborder("24");
            obj.set_maxlength("33");
            obj.set_imemode("alpha");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle07","0","198","141","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("25");
            obj.set_text("부서표시명");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtDeptShowNm","145","203",null,"24","5",null,"300",null,null,null,this.divDetail.form);
            obj.set_taborder("26");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle08","0","231","141","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("27");
            obj.set_text("정렬순서");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtDeptSort","145","236","141","24",null,null,"141","141",null,null,this.divDetail.form);
            obj.set_taborder("28");
            obj.set_inputtype("digit");
            obj.set_cssclass("essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle09","0","264","141","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("29");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new CheckBox("chkCyberYn","145","269","61","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("30");
            obj.set_text("사용");
            obj.set_value("true");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle10","0","297","141","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("31");
            obj.set_text("부서구분");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboDeptFlagCd","145","302","141","24",null,null,null,"141",null,null,this.divDetail.form);
            obj.set_taborder("32");
            obj.set_cssclass("essential");
            obj.set_text("cbo00");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle11","0","330","141","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("33");
            obj.set_text("부서레벨");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtDeptLvl","145","335","141","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("34");
            obj.set_inputtype("digit");
            obj.set_cssclass("essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle12","0","363","141","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("35");
            obj.set_text("이전부서코드");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtBefoDeptCd","145","368","141","24",null,null,null,"141",null,null,this.divDetail.form);
            obj.set_taborder("36");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle13","0","396","141","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("37");
            obj.set_text("부서시작일자");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Calendar("calDeptFrdt","145","401","141","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("38");
            obj.set_dateformat("yyyy-MM-dd");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle14","0","429","141","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("39");
            obj.set_text("부서종료일자");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Calendar("calDeeptTodt","145","434","141","24",null,null,null,"141",null,null,this.divDetail.form);
            obj.set_taborder("40");
            obj.set_dateformat("yyyy-MM-dd");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("divDept","145","39",null,"24","5",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("41");
            obj.set_url("common::cmmDeptSearch.xfdl");
            obj.getSetter("uEssential").set("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdList","0","93",null,null,"divDetail:20","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj.getSetter("uFunction").set("!filter,!sort,!colfix,!initial");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"400\"/><Column size=\"115\"/><Column size=\"67\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"부서명\"/><Cell col=\"1\" text=\"부서코드\"/><Cell col=\"2\" text=\"정렬순서\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_KORN_NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:DEPT_LVL\"/><Cell col=\"1\" text=\"bind:DEPT_CD\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:DEPT_ORDR\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divCmmnBtn",null,"divSearch:9","430","28","staTitle00:20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelDown",null,"0","119",null,"0","0",null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("0");
            obj.set_text("엑셀다운로드");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelSave");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnExcelTemplate",null,"0","171","28","btnExcelDown:3",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("1");
            obj.set_text("업로드템플릿 다운로드");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_TempSave");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnExcelUpload",null,"0","107",null,"btnExcelTemplate:3","0",null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("2");
            obj.set_text("엑셀업로드");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelUp");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","50",null,"43","divCmmnBtn:0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHipoDeptCd","1061","80","141","24",null,null,null,"141",null,null,this);
            obj.set_taborder("7");
            obj.set_maxlength("8");
            obj.set_cssclass("essential");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","1178","80","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_EdiSch");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00","1205","80",null,"24","-311",null,"156",null,null,null,this);
            obj.set_taborder("9");
            obj.set_maxlength("66");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form.divDept
            obj = new Layout("default","",0,0,this.divDetail.form.divDept.form,function(p){});
            this.divDetail.form.divDept.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCmmnBtn.form
            obj = new Layout("default","",0,0,this.divCmmnBtn.form,function(p){});
            this.divCmmnBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1050,736,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtMsgCd","value","dsCond","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtMsgTxt","value","dsCond","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divDetail.form.edtDeptCd","value","dsList","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divDetail.form.edtDeptKorNm","value","dsList","DEPT_KORN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divDetail.form.edtDeptEngNm","value","dsList","DEPT_ENGL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divDetail.form.edtDeptAbbrNm","value","dsList","DEPT_ABBR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divDetail.form.edtDeptEngAbbrNm","value","dsList","DEPT_ENGL_ABBR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divDetail.form.edtDeptShowNm","value","dsList","DEPT_SHOW_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divDetail.form.edtDeptSort","value","dsList","DEPT_ORDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divDetail.form.chkCyberYn","value","dsList","DEPT_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divDetail.form.cboDeptFlagCd","value","dsList","DEPT_FLAG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divDetail.form.edtDeptLvl","value","dsList","DEPT_LVL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divDetail.form.edtBefoDeptCd","value","dsList","BEFO_DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divDetail.form.calDeptFrdt","value","dsList","DEPT_FRDT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divDetail.form.calDeeptTodt","value","dsList","DEPT_TODT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtHipoDeptCd","value","dsList","HIPO_DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","edt00","value","dsList","HIPO_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divDetail.form.divDept.form.edtCode","value","dsList","HIPO_DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divDetail.form.divDept.form.edtName","value","dsList","HIPO_DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divSearch.form.cboUseYN","value","dsCond","USED_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divSearch.form.cboCompany","value","dsCond","COMPANY_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::cmmDeptSearch.xfdl");
        };
        
        // User Script
        this.registerScript("orgDeptMgFm.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	orgDeptMgFm.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/02/02
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/02/02			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	//공통코드
        	var param = [
        			  {biztype : "Combo", code : "SM03", objid : this.divDetail.form.cboDeptFlagCd}							//부서구분
        			, {biztype : "Grid",  code : "SM03", objid : this.grdList, bindcolumn : "DEPT_FLAG_CD", edit : "false"}	// grid 부서구분
        			, {biztype : "Grid",  code : "SM13", objid : this.grdList, bindcolumn : "DEPT_YN", edit : "false"}	// grid 여부코드
        	];
        	this.gfnGetCommonCode(param);

        	var arrComp = [this.divSearch.form.cboCompany];
        	this.gfnSetAuthorityCompany(arrComp);
        	this.divDetail.form.divDept.form.fnSetCompany(arrComp[0].value);


        	//2022.03.03 사용여부 조회 조건 INDEX 설정
        	this.divSearch.form.cboUseYN.set_index(1);

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
        		// 검색을 진행하면 변경된 데이터가 사라집니다. \n계속 진행 하시겠습니까?
        		var sMsgId = "confirm.before.search";			//메세지ID
        		var arrArg = [""];								//메세지취환될값 배열[생략가능]
        		var sPopId = "search";							//메세지팝업ID[생략가능]	*해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
        		var sMsgCallback = "fnMsgCallback";				//메세지콜백[생략가능] 		* confirm성 메시지를 사용 시 반드시 필요

        		this.gfnAlert(sMsgId, arrArg, sPopId, sMsgCallback);
        	}else{
        		this.fnTranSearch();
        	}
        };

        //추가
        this.cfnAdd = function ()
        {
        	var nowRow = this.dsList.rowposition;
        	var nLvl = this.dsList.getColumn(nowRow, "DEPT_LVL");
        	var sDeptCode = this.dsList.getColumn(nowRow, "DEPT_CD");
        	var sDeptName = this.dsList.getColumn(nowRow, "DEPT_KORN_NM");

        	var nRow = this.dsList.insertRow(nowRow+1);

        	this.dsList.setColumn(nRow, "COMPANY_CD", this.divSearch.form.cboCompany.value);
        	this.dsList.setColumn(nRow, "HIPO_DEPT_CD", sDeptCode);
        	this.divDetail.form.divDept.form.edtName.set_value(sDeptName);
        	this.dsList.setColumn(nRow, "DEPT_YN", "1");
        	this.dsList.setColumn(nRow, "DEPT_LVL", nLvl+1);
        	this.dsList.setColumn(nRow, "DEPT_FRDT", this.gfnGetDate());
        	this.dsList.setColumn(nRow, "DEPT_TODT", "99991231");

        	this.divDetail.form.edtDeptCd.setFocus();
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
        		// 자료를 저장하시겠습니까?
        		this.gfnAlert("confirm.save", [""], "saveMsg", "fnMsgCallback");
        		return;
        	}
        };

        //삭제
        this.cfnDel = function ()
        {
        	if (this.dsList.rowcount == 0){
        		return;
        	}

        	if(this.fnCheckDelete()){
        		this.dsList.deleteRow(this.dsList.rowposition);
        	}else{
        		this.gfnAlert("msg.err.delete.child");
        		return;
        	}
        };
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //조회
        this.fnTranSearch = function ()
        {
        	var strSvcId    = "selectDeptList";
        	var strSvcUrl   = "selectDeptList.do";
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
        	var strSvcId    = "saveDeptInfo";
        	var strSvcUrl   = "saveDeptInfo.do";
        	var inData      = "dsList=dsList:U";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	 // 통신방법 정의 [생략가능]
        };
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //transaction
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "selectDeptList":
        		case "saveDeptInfo":
        			break;
        	}
        };

        //message callback
        this.fnMsgCallback = function (sPopupId, sRtn)
        {
        	if( sPopupId == "saveMsg"){
        		if(this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false){
        			return;
        		}
        		this.fnTranSave();
        	}else if (sPopupId == "search"){
        		if( this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false){
        			return;
        		}
        		this.fnTranSearch();
        	}else if( sPopupId=="validCode"){
        		this.divDetail.form.edtDeptCd.set_value("");
        		this.divDetail.form.edtDeptCd.setFocus();
        	}
        };

        //excel import
        this.fnExcelImportCallback = function (sImportId, e)
        {
        	//TODO..
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnFormValidation = function ()
        {
        	// 정합성 체크
        	this.gfnClearValidation(this.dsList);

        	this.gfnSetValidation(this.dsList, "COMPANY_CD"	 , "회사"		, "required");
        	this.gfnSetValidation(this.dsList, "DEPT_CD"	 , "부서코드"		, "required");
        	this.gfnSetValidation(this.dsList, "HIPO_DEPT_CD", "상위부서코드"	, "required");
        	this.gfnSetValidation(this.dsList, "DEPT_KORN_NM", "부서한글명"	, "required");

        	this.gfnSetValidation(this.dsList, "DEPT_FLAG_CD", "정렬순서"	, "required");
        	this.gfnSetValidation(this.dsList, "DEPT_FLAG_CD", "부서구분"	, "required");
        	this.gfnSetValidation(this.dsList, "DEPT_LVL",     "부서레벨"	, "required");

        	this.gfnSetValidation(this.dsList, "DEPT_FRDT"	 , "부서시작일자"	, "date");
        	this.gfnSetValidation(this.dsList, "DEPT_TODT"	 , "부서종료일자"	, "date");

        	// Dataset의 변경된 Row Validation check
        	if (this.gfnValidation(this.dsList, "U") == false) return false;
        	else return true;
        };

        //삭제 가능여부체크
        this.fnCheckDelete = function ()
        {
        	this.dsCheckDept.clearData();
        	this.dsCheckDept.copyData(this.dsList);

        	var nCurRow= this.dsList.rowposition;
        	this.dsCheckDept.filter("HIPO_DEPT_CD=='"+this.dsList.getColumn(nCurRow,"DEPT_CD")+"'");
        	var nRowCount = this.dsCheckDept.getRowCount();
        	if( nRowCount > 0){
        		return false;
        	}
        	return true;
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.cfnSearch();
        };

        this.divCmmnBtn_btnExcelDown_onclick = function(obj,e)
        {
        	// 엑셀 상단 타이틀 텍스트 설정
        	var sSubTitle = this.staTitle01.text;

        	// Excel Export 공통함수 호출
        	this.gfnExcelExport(this.grdList, sSubTitle, sSubTitle, "EXCEL2007","",sSubTitle, true, "");
        };

        this.divCmmnBtn_btnExcelUpload_onclick = function(obj,e)
        {
        	this.gfnExcelImport("dsList", "부서 리스트", "A4:O", "fnExcelImportCallback", "message", "", "A3:O3", this.grdList);
        };

        this.dsList_canrowposchange = function(obj,e)
        {
        	var nRow = e.newrow;
        	if( obj.getRowType(nRow) == 2){
        		this.divDetail.form.edtDeptCd.set_readonly(false);
        	}else{
        		this.divDetail.form.edtDeptCd.set_readonly(true);
        	}
        };

        this.dsList_cancolumnchange = function(obj,e)
        {
        	if( e.columnid=="DEPT_CD"){
        		if(this.gfnIsNull(e.newvalue)) return;

        		var nRow = obj.findRow("DEPT_CD", e.newvalue);
        		if( nRow > -1){
        			this.gfnAlert("msg.exist", ["입력하신 부서코드"], "validCode","fnMsgCallback");
        			return;
        		}
        	}
        };

        //엑셀템플릿 다운로드
        this.divCmmnBtn_btnExcelTemplate_onclick = function(obj,e)
        {
        	var fileId = "공통시스템_Template.xlsx";
        	this.gfnDownTempate(fileId);
        };

        this.divSearch_cboCompany_onitemchanged = function(obj,e)
        {
        	this.divDetail.form.divDept.form.fnSetCompany(obj.value);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cboCompany.addEventHandler("onitemchanged",this.divSearch_cboCompany_onitemchanged,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.divCmmnBtn.form.btnExcelDown.addEventHandler("onclick",this.divCmmnBtn_btnExcelDown_onclick,this);
            this.divCmmnBtn.form.btnExcelTemplate.addEventHandler("onclick",this.divCmmnBtn_btnExcelTemplate_onclick,this);
            this.divCmmnBtn.form.btnExcelUpload.addEventHandler("onclick",this.divCmmnBtn_btnExcelUpload_onclick,this);
            this.edtHipoDeptCd.addEventHandler("onkeyup",this.divDetail_edtHipoDeptCd_onkeyup,this);
            this.btnSearch.addEventHandler("onclick",this.divDetail_btnSearch_onclick,this);
            this.dsList.addEventHandler("canrowposchange",this.dsList_canrowposchange,this);
            this.dsList.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
        };
        this.loadIncludeScript("orgDeptMgFm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
