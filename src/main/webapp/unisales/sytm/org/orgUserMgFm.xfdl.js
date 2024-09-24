(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("orgUserMgFm");
            this.set_titletext("사용자 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1300,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"HOOF_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_FLAG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PASSWORD\" type=\"STRING\" size=\"256\"/><Column id=\"KORN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ENGL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_FLAG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WKGD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WKDT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OCCU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHAG_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"JOIN_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"RETR_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"HOOF_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REGI_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"BIR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CELL_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE1\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE2\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE3\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"BASC_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DTL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCheckUserId", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCheckResult", this);
            obj._setContents("");
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

            obj = new Static("staTitle00","cboCompany:0","12","90","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("사용자 ID");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10","48","28","25",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtUserId","staTitle00:0","12","108","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle01","edtUserId:0","12","83","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("사번/ID ");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtEmpNo","staTitle01:0","12","95","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle02","edtEmpNo:0","12","86","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("사용자명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","staTitle02:0","12","100","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle03","edtUserNm:0","12","86","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("재직상태");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboHoofStat","staTitle03:0","12","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("재직");
            obj.set_value("HO");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle03_00","cboHoofStat:0","12","86","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("직원구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUserFlagCd","staTitle03_00:0","12","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","divSearch:0","64","43",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("사용자");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Div("divCmmnBtn",null,"60","580","33","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelDown",null,"0","119","28","0",null,null,null,null,null,this.divCmmnBtn.form);
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

            obj = new Button("btnExcelUpload",null,"0","107","28","btnExcelTemplate:3",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("2");
            obj.set_text("엑셀업로드");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelUp");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Grid("grdList","0","staTitle01:0",null,null,"20","246",null,null,"250",null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.getSetter("uFunction").set("filter,sort,!colfix,!initial,find");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"사용자 ID\"/><Cell col=\"1\" text=\"사번/ID\"/><Cell col=\"2\" text=\"사용자명\"/><Cell col=\"3\" text=\"부서\"/><Cell col=\"4\" text=\"직원구분\"/><Cell col=\"5\" text=\"직급\"/><Cell col=\"6\" text=\"직책\"/><Cell col=\"7\" text=\"직종\"/><Cell col=\"8\" text=\"담당업무\"/><Cell col=\"9\" text=\"재직상태\"/><Cell col=\"10\" text=\"테마\"/></Band><Band id=\"body\"><Cell text=\"bind:USER_ID\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"1\" text=\"bind:EMP_NO\" edittype=\"none\" editimemode=\"hangul\" editmaxlength=\"10\" displaytype=\"normal\"/><Cell col=\"2\" text=\"bind:KORN_NM\" displaytype=\"normal\" edittype=\"none\" editinputtype=\"digit\"/><Cell col=\"3\" text=\"bind:DEPT_NM\" edittype=\"none\" combodataset=\"dsDept\" combodatacol=\"DEPT_KORN_NM\" combocodecol=\"DEPT_CD\"/><Cell col=\"4\" text=\"bind:USER_FLAG_CD\" edittype=\"none\"/><Cell col=\"5\" text=\"bind:WKGD_CD\" edittype=\"none\"/><Cell col=\"6\" text=\"bind:WKDT_CD\" edittype=\"none\"/><Cell col=\"7\" text=\"bind:OCCU_CD\" edittype=\"none\"/><Cell col=\"8\" text=\"bind:CHAG_WORK\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"9\" text=\"bind:HOOF_STAT_CD\" edittype=\"none\"/><Cell col=\"10\" text=\"bind:THEME_ID\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","grdList:0",null,"47","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("사용자 상세");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","0","staTitle00:0",null,"199","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Static("staBg01","0","0",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg02","0","staBg01:-1",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg03","0","staBg02:-1",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg04","0","staBg03:-1",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg05","0","staBg04:-1",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg06","0","staBg05:-1",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","0","90","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("24");
            obj.set_text("사용자 ID");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtUserId","95","5","130","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_cssclass("essential");
            obj.set_readonly("true");
            obj.set_imemode("alpha");
            obj.set_maxlength("20");
            obj.set_inputtype("digit,english");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle02","536","0","110","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("25");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtPassword","650","5","130","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_cssclass("essential");
            obj.set_password("true");
            obj.set_imemode("alpha");
            obj.set_maxlength("30");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle03","784","0","110","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("26");
            obj.set_text("사용자명");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","898","5","127","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_imemode("hangul");
            obj.set_maxlength("30");
            obj.set_cssclass("essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle06","230","33","90","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("27");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle07","536","33","110","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("28");
            obj.set_text("직원구분");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboUserFlagCd","650","38","130","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle08","784","33","110","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("29");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboWkgdCd","898","38","127","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle09","230","66","90","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("30");
            obj.set_text("직종");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboOccuCd","325","71","206","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle10","536","66","110","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("31");
            obj.set_text("담당업무");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtChagWork","650","71","130","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle13","536","99","110","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("32");
            obj.set_text("재직상태");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboHoofStatCd","650","104","130","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("14");
            obj.set_cssclass("essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle14","784","99","110","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("33");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Calendar("calBirDt","staTitle14:4","edtChagWork:9","127","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("15");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle16","536","132","110","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("34");
            obj.set_text("E-Mail");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtEmail","650","137",null,"24","5",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("16");
            obj.set_imemode("alpha");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle17","0","165","90","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("35");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle15","0","132","90","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("36");
            obj.set_text("핸드폰번호");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle11","0","99","90","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("37");
            obj.set_text("입사일자");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Calendar("calJoinDate","95","104","130","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_dateformat("yyyy-MM-dd");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle12","230","98","90","35",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("38");
            obj.set_text("퇴사일자");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Calendar("calRetrDate","325","104","206","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_dateformat("yyyy-MM-dd");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle09_00","0","66","90","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("39");
            obj.set_text("직책");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboWkdtCd","95","71","130","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            this.divDetail.addChild(obj.name, obj);

            obj = new JusoPostCode("jPostAddr","95","170",null,"24","5",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("17");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("divDept","325","38","206","28",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_text("div00");
            obj.set_url("common::cmmDeptSearch.xfdl");
            obj.getSetter("uEssential").set("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle04","0","33","90","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("40");
            obj.set_text("영문명");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtUserNmEng","95","38","130","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_imemode("alpha");
            obj.set_maxlength("30");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle05","230","0","90","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("41");
            obj.set_text("사번/ID");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtEmpNo","325","5","206","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_maxlength("10");
            obj.set_inputtype("digit,alpha");
            obj.set_cssclass("essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle08_00","784","66","110","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("42");
            obj.set_text("테마");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboThemId","898","71","127","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            this.divDetail.addChild(obj.name, obj);

            obj = new MaskEdit("msk00","95","137","130","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("43");
            obj.set_type("string");
            obj.set_format("###-####-####");
            this.divDetail.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCmmnBtn.form
            obj = new Layout("default","",0,0,this.divCmmnBtn.form,function(p){});
            this.divCmmnBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form.divDept
            obj = new Layout("default","",0,0,this.divDetail.form.divDept.form,function(p){});
            this.divDetail.form.divDept.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1300,736,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item2","divDetail.form.edtUserId","value","dsList","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divDetail.form.edtUserNm","value","dsList","KORN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divDetail.form.cboUserFlagCd","value","dsList","USER_FLAG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divDetail.form.cboWkgdCd","value","dsList","WKGD_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divDetail.form.cboWkdtCd","value","dsList","WKDT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divDetail.form.cboOccuCd","value","dsList","OCCU_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divDetail.form.edtChagWork","value","dsList","CHAG_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divDetail.form.calJoinDate","value","dsList","JOIN_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divDetail.form.calRetrDate","value","dsList","RETR_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divDetail.form.cboHoofStatCd","value","dsList","HOOF_STAT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divDetail.form.calBirDt","value","dsList","BIR_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divDetail.form.cboPhone1","value","dsList","PHONE1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divDetail.form.edtPhone2","value","dsList","PHONE2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divDetail.form.edtPhone3","value","dsList","PHONE3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divDetail.form.edtEmail","value","dsList","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divDetail.form.jPostAddr.form.edtSculZip","value","dsList","ZIP_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divDetail.form.jPostAddr.form.edtBasAddr","value","dsList","BASC_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divDetail.form.jPostAddr.form.edtDetailAddr","value","dsList","DTL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divDetail.form.divDept.form.edtCode","value","dsList","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divDetail.form.divDept.form.edtName","value","dsList","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divDetail.form.edtUserNmEng","value","dsList","ENGL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divDetail.form.edtEmpNo","value","dsList","EMP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.edtUserId","value","dsCond","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtEmpNo","value","dsCond","EMP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divSearch.form.edtUserNm","value","dsCond","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divDetail.form.cboThemId","value","dsList","THEME_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divSearch.form.cboHoofStat","value","dsCond","HOOF_STAT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divDetail.form.msk00","value","dsList","CELL_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboUserFlagCd","value","dsCond","USER_FLAG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divSearch.form.cboCompany","value","dsCond","COMPANY_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::cmmDeptSearch.xfdl");
        };
        
        // User Script
        this.registerScript("orgUserMgFm.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	orgUserMgFm.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/06/16
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/06/16			TOBESOFT					최초생성
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
        			  {biztype : "Combo", code : "SM04", objid : this.divDetail.form.cboUserFlagCd}							// 직원구분
        			, {biztype : "Combo", code : "SM05", objid : this.divDetail.form.cboWkgdCd}								// 직급코드
        			, {biztype : "Combo", code : "SM06", objid : this.divDetail.form.cboWkdtCd}								// 직책구분
        			, {biztype : "Combo", code : "SM07", objid : this.divDetail.form.cboOccuCd}								// 직종
        			, {biztype : "Combo", code : "SM08", objid : this.divDetail.form.cboHoofStatCd}							// 재직상태
        			, {biztype : "Combo", code : "SM14", objid : this.divDetail.form.cboThemId}								// 테마
        			, {biztype : "Grid",  code : "SM04", objid : this.grdList, bindcolumn : "USER_FLAG_CD", edit : "false"}	// grid 직원구분
        			, {biztype : "Grid",  code : "SM05", objid : this.grdList, bindcolumn : "WKGD_CD", edit : "false"}		// grid 직급코드
        			, {biztype : "Grid",  code : "SM06", objid : this.grdList, bindcolumn : "WKDT_CD", edit : "false"}		// grid 직책코드
        			, {biztype : "Grid",  code : "SM07", objid : this.grdList, bindcolumn : "OCCU_CD", edit : "false"}		// grid 직종코드
        			, {biztype : "Grid",  code : "SM08", objid : this.grdList, bindcolumn : "HOOF_STAT_CD", edit : "false"}	// grid 재직상태
        			, {biztype : "Grid",  code : "SM14", objid : this.grdList, bindcolumn : "THEME_ID", edit : "false"}		// grid 테마
        			// 2022.03.03  재직상태 조회 조건 추가
        			, {biztype : "Combo", code : "SM08", selecttype : "A", objid : this.divSearch.form.cboHoofStat}			// 재직상태
        			, {biztype : "Combo", code : "SM04", selecttype : "A", objid : this.divSearch.form.cboUserFlagCd}								// 직원구분
        	];
        	this.gfnGetCommonCode(param);

        	var arrComp = [this.divSearch.form.cboCompany];
        	this.gfnSetAuthorityCompany(arrComp);
        	this.divDetail.form.divDept.form.fnSetCompany(arrComp[0].value);

        	//주소찾기
        //	var url = this.gfnGetServerUrl() + "devPack/thirdParty/post/PostCall.jsp";
        	var sUrl = nexacro.getEnvironment().services['svcUrl'].url;
        // 	if (url.indexOf("localhost") > -1) {
        // 		url = "http://127.0.0.1:9093/devPack/thirdParty/post/PostCall.jsp";
        // 	}
        	this.divDetail.form.jPostAddr.set_jspUrl(sUrl + "thirdParty/post/PostCall.jsp");

        	//2022.03.03 재직상태 조회 조건 INDEX 설정
        	this.divSearch.form.cboHoofStat.set_index(1);

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
        		var sMsgId = "confirm.before.search";					//메세지ID
        		var arrArg = [""];										//메세지취환될값 배열[생략가능]
        		var sPopId = "search";									//메세지팝업ID[생략가능]	*해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
        		var sMsgCallback = "fnMsgCallback";						//메세지콜백[생략가능] 		* confirm성 메시지를 사용 시 반드시 필요

        		// 변경된 정보가 있습니다.\n저장 하시겠습니까?
        		this.gfnAlert(sMsgId, arrArg, sPopId, sMsgCallback);
        	}
        	else {
        		this.fnTranSearch();
        	}
        };


        //신규
        this.cfnAdd = function ()
        {
        	var nRow = this.dsList.addRow();

        	this.dsList.setColumn(nRow, "COMPANY_CD", this.divSearch.form.cboCompany.value);
        	this.dsList.setColumn(nRow, "JOIN_DATE", this.gfnGetDate());
        	//this.dsList.setColumn(nRow, "RETR_DATE", "99991231");
        	this.dsList.setColumn(nRow, "HOOF_STAT_CD", "HO");
        	this.dsList.setColumn(nRow, "USER_FLAG_CD", "RW");
        	this.dsList.setColumn(nRow, "WKGD_CD", "0080");
        	this.dsList.setColumn(nRow, "WKDT_CD", "0050");

        	this.dsList.setColumn(nRow, "USER_ID", this.gfnLPad(""+(nexacro.toNumber(this.dsList.getMaxNF("USER_ID"))+1),"0",10));
        	this.divDetail.form.edtEmpNo.setFocus();
        };

        //삭제
        this.cfnDel = function ()
        {
        	if (this.dsList.rowcount == 0) return;

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
        		this.fnCheckUserId();
        	}
        };
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //사용자 목록 조회
        this.fnTranSearch = function ()
        {
        	var strSvcId    = "searchUserInfo";
        	var strSvcUrl   = "searchUserInfo.do";
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

        //사용자아이디 중복체크
        this.fnTranCheckUserId = function ()
        {
        	// 데이터가 중복이 있는 지 체크하는 서비스를 호출한다.
        	var strSvcId    = "checkUserId";
        	var strSvcUrl   = "checkUserId.do";
        	var inData      = "dsCheckUserId=dsCheckUserId";
        	var outData     = "dsCheckResult=dsCheckResult";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        //사용자 정보 저장
        this.fnTranSave = function ()
        {
        	var strSvcId    = "saveUserInfo";
        	var strSvcUrl   = "saveUserInfo.do";
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
        		case "searchUserInfo":
        		case "saveUserInfo":
        			break;
        		case "checkUserId":
        			this.fnAfterCheck();
        			break;
        		default: break;
        	}
        };

        //message
        this.fnMsgCallback = function (sMsgId, sRtn)
        {
        	switch(sMsgId) {
        		case "search":
        			if(this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false){
        				return;
        			}
        			this.fnTranSearch();
        			break;
        		case "save":
        			if(this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false){
        				return;
        			}
        			this.fnTranSave();
        			break;
        		case "valiEmpNo":
        			this.dsList.setColumn(this.dsList.rowposition, "EMP_NO", "");
        			this.divDetail.form.edtEmpNo.setFocus();
        			break;
        		default:break;
        	}
        };

        //엑셀임포트콜백
        this.fnExcelImportCallback = function (sImportId, e)
        {
        	//TODO..
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        //정합성체큰
        this.fnFormValidation = function ()
        {
        	for(var i=0;i<this.dsList.rowcount;i++) {
        		if(this.dsList.getRowType(i) == Dataset.ROWTYPE_INSERT) {
        			if(!this.dsList.getColumn(i, "PASSWORD")) {
        				this.dsList.set_rowposition(i);
        				this.gfnAlert("msg.err.validator.required", ["비밀번호","6"],"");
        				return;
        			}
        		}
        	}
        	// 정합성 체크
        	this.gfnClearValidation(this.dsList);

        	this.gfnSetValidation(this.dsList, "COMPANY_CD", "회사"	, "required");
        	this.gfnSetValidation(this.dsList, "USER_ID", "사용자ID"	, "required");
        	this.gfnSetValidation(this.dsList, "EMP_NO",  "사번"	    , "required");
        	//this.gfnSetValidation(this.dsList, "PASSWORD", "비밀번호"	, "required");
        	this.gfnSetValidation(this.dsList, "KORN_NM", "사용자이름(한글)"	, "required");
        	this.gfnSetValidation(this.dsList, "DEPT_CD", "부서"	, "required");
        	this.gfnSetValidation(this.dsList, "HOOF_STAT_CD", "재직상태"	, "required");

        	this.gfnSetValidation(this.dsList, "JOIN_DATE", "입사일자", "date");
        	this.gfnSetValidation(this.dsList, "RETR_DATE", "퇴사일자", "date");
        	this.gfnSetValidation(this.dsList, "BIR_DT"   , "생년월일", "date");

        	this.gfnSetValidation(this.dsList, "EMAL", "EMail"	, "isemail");

        	// Dataset의 변경된 Row Validation check
        	if (this.gfnValidation(this.dsList, "U") == false) return false;
        	else return true;
        };

        //아이디중복체크
        this.fnCheckUserId = function ()
        {
        	var i;
        	var nAddRow;

        	// dsList에서 신규 데이터 건만 추출한다.
        	this.dsCheckUserId.clearData();
        	for(i = 0; i < this.dsList.getRowCount(); i++) {
        		if(this.dsList.getRowType(i) == Dataset.ROWTYPE_INSERT) {
        			nAddRow = this.dsCheckUserId.addRow();

        			this.dsCheckUserId.copyRow(nAddRow, this.dsList, i);
        		}
        	}

        	if(this.dsCheckUserId.getRowCount() > 0) {
        		// 신규 데이터가 있는 경우
        		this.fnTranCheckUserId();
        	}else {
        		// 저장 하시겠습니까?
        		this.gfnAlert("confirm.save", [""], "save", "fnMsgCallback");
        		return;
        	}
        };


        //아이디 중복체크 후
        this.fnAfterCheck = function ()
        {
        	// 메시지 코드가 존재하는 지 여부 체크
        	var nCnt = this.dsCheckResult.getRowCount();

        	if(nCnt == 0) {
        		// 중복되는 건이 없는 경우 저장 서비스 호출
        		this.gfnAlert("confirm.save", [""], "save", "fnMsgCallback");
        	}else {
        		// 중복된 건이 있는 경우 메시지 출력
        		var sDupCode;
        		var sTemp;

        		for(i = 0; i < nCnt; i++) {
        			sTemp = this.dsCheckResult.getColumn(i, "USER_ID");

        			if(i == 0) {
        				sDupCode = "[" + sTemp;
        			}
        			else {
        				sDupCode += sTemp;
        			}

        			if(i == this.dsCheckResult.getRowCount() - 1) {
        				sDupCode += "]";
        			}
        			else {
        				sDupCode += ",";
        			}
        		}
        		// 중복된 메시지가 존재합니다.
        		this.gfnAlert("msg.exist.code", ["중복된 사용자ID", sDupCode]);
        		return;
        	}
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        //조회버튼
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.cfnSearch();
        };

        //사용자아이디
        this.dsList_canrowposchange = function(obj,e)
        {
        	var nStatus = this.dsList.getRowType(e.newrow);
        	if( nStatus == 2 ){
        		this.divDetail.form.edtUserId.set_readonly(false);
        	}else{
        		this.divDetail.form.edtUserId.set_readonly(true);
        	}
        };

        //엑셀업로드
        this.divCmmnBtn_btnExcelUpload_onclick = function(obj,e)
        {
        	this.gfnExcelImport("dsList", "사용자 리스트", "A4:W", "fnExcelImportCallback", "message", "", "A3:W3", this.grdList);
        };

        //엑셀템플릿 다운로드
        this.divCmmnBtn_btnExcelTemplate_onclick = function(obj,e)
        {
        	var fileId = "공통시스템_Template.xlsx";
        	this.gfnDownTempate(fileId);
        };

        //엑셀다운로드
        this.divCmmnBtn_btnExcelDown_onclick = function(obj,e)
        {
        	// 엑셀 상단 타이틀 텍스트 설정
        	var sSubTitle = this.staTitle01.text;

        	// Excel Export 공통함수 호출
        	this.gfnExcelExport(this.grdList, sSubTitle, sSubTitle, "EXCEL2007","",sSubTitle, true, "");
        };

        //EMP_NO 중복체크
        this.dsList_cancolumnchange = function(obj,e)
        {
        	if( e.columnid=="EMP_NO"){
        		if(this.gfnIsNull(e.newvalue)) return;

        		var nRow = obj.findRow("EMP_NO", e.newvalue);
        		if( nRow > -1){
        			this.gfnAlert("msg.exist", ["입력하신 사번"],"valiEmpNo","fnMsgCallback");
        			return;
        		}
        	}
        };

        this.grdList_oncelldblclick = function(obj,e)
        {
        	if(this.dsList.getRowType(this.dsList.rowposition) == Dataset.ROWTYPE_INSERT) {
        		this.gfnAlert("msg.err.updateafter", [],"insertPre","fnMsgCallback");
        		return;
        	}
        	var sTitle = "사용자상세";
        	var oArg   = {pvCompanyCd:this.dsList.getColumn(this.dsList.rowposition, "COMPANY_CD")
        					,pvEmpNo : this.dsList.getColumn(this.dsList.rowposition, "EMP_NO")
        				};
        	var oOption = {title:sTitle
        				,titlebar:true};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("orgUserDetail", "sytm::org/orgUserDetailPu.xfdl", oArg, sPopupCallBack, oOption);
        };

        // 비밀번호 변경
        this.divDetail_edtPassword_onchanged = function(obj,e)
        {
        	var pswd = obj.value;
        	var shaObj = new jsSHA("SHA-256", "TEXT");
        	shaObj.update(pswd);
        	var hash = shaObj.getHash("HEX");

        	this.dsList.setColumn(this.dsList.rowposition, "PASSWORD", this.gfnEncData(hash));
        };

        this.dsList_onrowposchanged = function(obj,e)
        {
        	this.divDetail.form.edtPassword.set_value(this.dsList.getColumn(this.dsList.rowposition, "PASSWORD"));
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
            this.grdList.addEventHandler("oncelldblclick",this.grdList_oncelldblclick,this);
            this.divDetail.form.edtPassword.addEventHandler("onchanged",this.divDetail_edtPassword_onchanged,this);
            this.divDetail.form.cboUserFlagCd.addEventHandler("onitemchanged",this.cbo_onitemchange,this);
            this.divDetail.form.cboWkgdCd.addEventHandler("onitemchanged",this.cbo_onitemchange,this);
            this.divDetail.form.cboOccuCd.addEventHandler("onitemchanged",this.cbo_onitemchange,this);
            this.divDetail.form.cboWkdtCd.addEventHandler("onitemchanged",this.cbo_onitemchange,this);
            this.divDetail.form.cboThemId.addEventHandler("onitemchanged",this.cbo_onitemchange,this);
            this.dsList.addEventHandler("canrowposchange",this.dsList_canrowposchange,this);
            this.dsList.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
        };
        this.loadIncludeScript("orgUserMgFm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
