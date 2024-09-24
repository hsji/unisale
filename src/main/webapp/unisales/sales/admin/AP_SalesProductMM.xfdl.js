(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AP_SalesProductMM");
            this.set_titletext("영업제품관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1100,642);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_CD_CONTRACT_TYPE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"string\" size=\"30\"/><Column id=\"CAPTION\" type=\"string\" size=\"255\"/><Column id=\"VAL1\" type=\"string\" size=\"100\"/><Column id=\"VAL2\" type=\"string\" size=\"100\"/><Column id=\"VAL3\" type=\"string\" size=\"100\"/><Column id=\"VAL4\" type=\"string\" size=\"100\"/><Column id=\"REMARK\" type=\"string\" size=\"1073741823\"/><Column id=\"ORD\" type=\"string\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_SALES_PRODUCT_TYPE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"string\" size=\"30\"/><Column id=\"CAPTION\" type=\"string\" size=\"255\"/><Column id=\"VAL1\" type=\"string\" size=\"100\"/><Column id=\"VAL2\" type=\"string\" size=\"100\"/><Column id=\"VAL3\" type=\"string\" size=\"100\"/><Column id=\"VAL4\" type=\"string\" size=\"100\"/><Column id=\"REMARK\" type=\"string\" size=\"1073741823\"/><Column id=\"ORD\" type=\"string\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Product", this);
            obj._setContents("<ColumnInfo><Column id=\"HIPO_PRODUCT_NAME\" type=\"undefined\" size=\"0\"/><Column id=\"UNIT_COST\" type=\"undefined\" size=\"0\"/><Column id=\"CHGE_IP\" type=\"undefined\" size=\"0\"/><Column id=\"GOODS_FLAG\" type=\"string\" size=\"32\"/><Column id=\"REMARKS\" type=\"undefined\" size=\"0\"/><Column id=\"PRODUCT_CODE\" type=\"string\" size=\"32\"/><Column id=\"RELATED_COMPANY_CODE\" type=\"undefined\" size=\"0\"/><Column id=\"COMPANY_CODE\" type=\"string\" size=\"32\"/><Column id=\"MAIN_PRODUCT_CODE\" type=\"undefined\" size=\"0\"/><Column id=\"MAIN_PRODUCT_FLAG\" type=\"string\" size=\"32\"/><Column id=\"INPT_DTTM\" type=\"undefined\" size=\"0\"/><Column id=\"_ORG_PRODUCT_CODE\" type=\"undefined\" size=\"0\"/><Column id=\"PRODUCT_NAME_SHORT\" type=\"string\" size=\"32\"/><Column id=\"PRODUCT_NAME_ENG\" type=\"undefined\" size=\"0\"/><Column id=\"ROYALTY_TYPE\" type=\"undefined\" size=\"0\"/><Column id=\"SELECT_FLAG\" type=\"string\" size=\"32\"/><Column id=\"SortOrder\" type=\"undefined\" size=\"0\"/><Column id=\"NO_PURCHASE_FLAG\" type=\"string\" size=\"32\"/><Column id=\"PRODUCT_NAME\" type=\"string\" size=\"32\"/><Column id=\"PRODUCT_LVL\" type=\"int\" size=\"4\"/><Column id=\"HIPO_PRODUCT_CODE\" type=\"string\" size=\"32\"/><Column id=\"CONTRACT_TYPE\" type=\"string\" size=\"32\"/><Column id=\"CHGE_ID\" type=\"undefined\" size=\"0\"/><Column id=\"MA_FLAG\" type=\"string\" size=\"32\"/><Column id=\"DELETE_FLAG\" type=\"string\" size=\"32\"/><Column id=\"INPT_IP\" type=\"undefined\" size=\"0\"/><Column id=\"CHGE_DTTM\" type=\"undefined\" size=\"0\"/><Column id=\"RELATED_COMPANY_NAME\" type=\"undefined\" size=\"0\"/><Column id=\"PRODUCT_ORDR\" type=\"undefined\" size=\"0\"/><Column id=\"INPT_ID\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_ROYALTY_TYPE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"string\" size=\"30\"/><Column id=\"CAPTION\" type=\"string\" size=\"255\"/><Column id=\"VAL1\" type=\"string\" size=\"100\"/><Column id=\"VAL2\" type=\"string\" size=\"100\"/><Column id=\"VAL3\" type=\"string\" size=\"100\"/><Column id=\"VAL4\" type=\"string\" size=\"100\"/><Column id=\"REMARK\" type=\"string\" size=\"1073741823\"/><Column id=\"ORD\" type=\"string\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SubsidiaryCompanyList", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_WF_Search");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCompany","0","12","87","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("회사구분");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCompany","staCompany:0","12","139","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_innerdataset("gdsCompany");
            obj.set_codecolumn("SSC_CD");
            obj.set_datacolumn("SSC_CD_KORN_NM");
            obj.set_text("알림");
            obj.set_value("INF");
            obj.set_index("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("stc_CompanyType","cboCompany:0","12","90","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("제품구분");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.getSetter("TL_SEQ").set("836");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cmb_SelectType","stc_CompanyType:0.00","12","165","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_CD_CONTRACT_TYPE");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.getSetter("TL_FLAG").set("1");
            obj.set_value("A");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btn_Search",null,"10","48","28","8",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            obj.getSetter("TL_SEQ").set("118");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("div_PROD","0","divSearch:0",null,null,"20","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail",null,"43","590","501","5",null,null,null,null,null,this.div_PROD.form);
            obj.set_taborder("1");
            obj.set_boxShadow("3px 3px 5px 0px #cccccc");
            this.div_PROD.addChild(obj.name, obj);

            obj = new Static("staBg07","0","165",null,"34","0",null,null,null,null,null,this.div_PROD.form.divDetail.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div_PROD.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg06_00","0","198",null,"34","0",null,null,null,null,null,this.div_PROD.form.divDetail.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div_PROD.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg01","0","0",null,"34","0",null,null,null,null,null,this.div_PROD.form.divDetail.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_borderRadius("5px 5px 0px 0px");
            this.div_PROD.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","0","141","34",null,null,null,null,null,null,this.div_PROD.form.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("제품코드");
            obj.set_cssclass("sta_WF_Label");
            obj.set_borderRadius("5px 0px 0px");
            this.div_PROD.form.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtDeptCd","staTitle01:5.00","5","218","24",null,null,null,null,null,null,this.div_PROD.form.divDetail.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_maxlength("7");
            obj.set_inputtype("digit,english");
            obj.set_inputmode("upper");
            obj.set_imemode("alpha");
            this.div_PROD.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg02","0","33",null,"34","0",null,null,null,null,null,this.div_PROD.form.divDetail.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div_PROD.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle02","0","33","141","34",null,null,null,null,null,null,this.div_PROD.form.divDetail.form);
            obj.set_taborder("4");
            obj.set_text("상위제품코드");
            obj.set_cssclass("sta_WF_Label");
            this.div_PROD.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg03","0","66",null,"34","0",null,null,null,null,null,this.div_PROD.form.divDetail.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div_PROD.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg04","0","99",null,"34","0",null,null,null,null,null,this.div_PROD.form.divDetail.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div_PROD.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg05","0","132",null,"34","0",null,null,null,null,null,this.div_PROD.form.divDetail.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div_PROD.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg08","0","231",null,"34","0",null,null,null,null,null,this.div_PROD.form.divDetail.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div_PROD.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg10","0","264",null,"100","0",null,null,null,null,null,this.div_PROD.form.divDetail.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div_PROD.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg11","0","363",null,"137","0",null,null,null,null,null,this.div_PROD.form.divDetail.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_borderRadius("0px 0px 5px 5px");
            this.div_PROD.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle03","0","66","141","34",null,null,null,null,null,null,this.div_PROD.form.divDetail.form);
            obj.set_taborder("12");
            obj.set_text("제품명");
            obj.set_cssclass("sta_WF_Label");
            this.div_PROD.form.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtDeptKorNm","staTitle03:5","71",null,"24","5",null,null,null,null,null,this.div_PROD.form.divDetail.form);
            obj.set_taborder("13");
            obj.set_cssclass("essential");
            obj.set_maxlength("66");
            obj.set_imemode("hangul");
            this.div_PROD.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle04","0","99","141","34",null,null,null,null,null,null,this.div_PROD.form.divDetail.form);
            obj.set_taborder("14");
            obj.set_text("제품영문명");
            obj.set_cssclass("sta_WF_Label");
            this.div_PROD.form.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtDeptEngNm","staTitle04:5","104",null,"24","5",null,null,null,null,null,this.div_PROD.form.divDetail.form);
            obj.set_taborder("15");
            obj.set_maxlength("66");
            obj.set_imemode("alpha");
            this.div_PROD.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle05","0","132","141","34",null,null,null,null,null,null,this.div_PROD.form.divDetail.form);
            obj.set_taborder("16");
            obj.set_text("단축제품명");
            obj.set_cssclass("sta_WF_Label");
            this.div_PROD.form.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtDeptAbbrNm","staTitle05:5","137",null,"24","5",null,null,null,null,null,this.div_PROD.form.divDetail.form);
            obj.set_taborder("17");
            obj.set_maxlength("33");
            obj.set_imemode("hangul");
            this.div_PROD.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle07","0","165","141","34",null,null,null,null,null,null,this.div_PROD.form.divDetail.form);
            obj.set_taborder("18");
            obj.set_text("관련회사");
            obj.set_cssclass("sta_WF_Label");
            this.div_PROD.form.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtDeptSort00","146","236","141","24",null,null,null,null,null,null,this.div_PROD.form.divDetail.form);
            obj.set_taborder("36");
            obj.set_inputtype("digit");
            obj.set_cssclass("essential");
            this.div_PROD.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle08","edtDeptSort00:23","231","141","34",null,null,null,null,null,null,this.div_PROD.form.divDetail.form);
            obj.set_taborder("19");
            obj.set_text("정렬순서");
            obj.set_cssclass("sta_WF_Label");
            this.div_PROD.form.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtDeptSort","staTitle08:5.00","236","70","24",null,null,null,null,null,null,this.div_PROD.form.divDetail.form);
            obj.set_taborder("20");
            obj.set_inputtype("digit");
            obj.set_cssclass("essential");
            this.div_PROD.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle10","0","264","141","100",null,null,null,null,null,null,this.div_PROD.form.divDetail.form);
            obj.set_taborder("21");
            obj.set_text("제품구분");
            obj.set_cssclass("sta_WF_Label");
            this.div_PROD.form.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboDeptFlagCd","145.00","249","0","89",null,null,null,"141",null,null,this.div_PROD.form.divDetail.form);
            obj.set_taborder("22");
            obj.set_cssclass("essential");
            obj.set_text("cbo00");
            this.div_PROD.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle11","0","363","141","137",null,null,null,null,null,null,this.div_PROD.form.divDetail.form);
            obj.set_taborder("23");
            obj.set_text("참고사항");
            obj.set_cssclass("sta_WF_Label");
            obj.set_borderRadius("0px 0px 0px 5px");
            this.div_PROD.form.divDetail.addChild(obj.name, obj);

            obj = new Div("divDept","staTitle02:5","39",null,"24","5",null,null,null,null,null,this.div_PROD.form.divDetail.form);
            obj.set_taborder("24");
            obj.set_url("sales::comm/COM_ProductSearch.xfdl");
            obj.getSetter("uEssential").set("true");
            obj.getSetter("CONTRACT_TYPE").set("");
            obj.getSetter("COMPANY_CODE").set("");
            this.div_PROD.form.divDetail.addChild(obj.name, obj);

            obj = new Div("div_RelatedCompany","staTitle07:5.00","170",null,"24","5",null,null,null,null,null,this.div_PROD.form.divDetail.form);
            obj.set_taborder("25");
            obj.set_url("sales::comm/COM_Search.xfdl");
            obj.getSetter("binddataset").set("ds_Product");
            obj.getSetter("kind").set("COMPANY");
            obj.set_async("false");
            obj.getSetter("codecolumn").set("RELATED_COMPANY_CODE");
            obj.getSetter("datacolumn").set("RELATED_COMPANY_NAME");
            obj.getSetter("mode").set("");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            this.div_PROD.form.divDetail.addChild(obj.name, obj);

            obj = new TextArea("txt_Remarks","staTitle11:5.00","369",null,"125","5",null,null,null,null,null,this.div_PROD.form.divDetail.form);
            obj.set_taborder("26");
            this.div_PROD.form.divDetail.addChild(obj.name, obj);

            obj = new CheckBox("cb_MainProductFlag","staTitle10:5.00","272","146","24",null,null,null,null,null,null,this.div_PROD.form.divDetail.form);
            obj.set_taborder("27");
            obj.set_text("메인제품 여부");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_readonly("false");
            obj.getSetter("TL_SEQ").set("12400");
            this.div_PROD.form.divDetail.addChild(obj.name, obj);

            obj = new CheckBox("cb_SelectFlag","staTitle10:5.00","301","146","24",null,null,null,null,null,null,this.div_PROD.form.divDetail.form);
            obj.set_taborder("28");
            obj.set_text("영업제품 선택 여부");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_readonly("false");
            obj.getSetter("TL_SEQ").set("12401");
            this.div_PROD.form.divDetail.addChild(obj.name, obj);

            obj = new CheckBox("cb_MaFlag","staTitle10:5.00","332","146","24",null,null,null,null,null,null,this.div_PROD.form.divDetail.form);
            obj.set_taborder("29");
            obj.set_text("유지보수 여부");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_readonly("false");
            obj.getSetter("TL_SEQ").set("12402");
            this.div_PROD.form.divDetail.addChild(obj.name, obj);

            obj = new CheckBox("cb_GoodsFlag","cb_MainProductFlag:30.00","272","100","24",null,null,null,null,null,null,this.div_PROD.form.divDetail.form);
            obj.set_taborder("30");
            obj.set_text("상품 여부");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_readonly("false");
            obj.getSetter("TL_SEQ").set("12403");
            this.div_PROD.form.divDetail.addChild(obj.name, obj);

            obj = new CheckBox("cb_NoPurchaseFlag","cb_SelectFlag:30.00","301","100","24",null,null,null,null,null,null,this.div_PROD.form.divDetail.form);
            obj.set_taborder("31");
            obj.set_text("매입미대상");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_readonly("false");
            obj.getSetter("TL_SEQ").set("22573");
            this.div_PROD.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle06_00","0","198","141","34",null,null,null,null,null,null,this.div_PROD.form.divDetail.form);
            obj.set_taborder("32");
            obj.set_text("단가");
            obj.set_cssclass("sta_WF_Label");
            this.div_PROD.form.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtDeptEngAbbrNm00","staTitle06_00:5","204",null,"24","210",null,null,null,null,null,this.div_PROD.form.divDetail.form);
            obj.set_taborder("34");
            obj.set_maxlength("33");
            obj.set_imemode("alpha");
            this.div_PROD.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle08_00","0.00","231","141","34",null,null,null,null,null,null,this.div_PROD.form.divDetail.form);
            obj.set_taborder("35");
            obj.set_text("트리레벨");
            obj.set_cssclass("sta_WF_Label");
            this.div_PROD.form.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","0","340","43",null,null,null,null,null,null,this.div_PROD.form);
            obj.set_taborder("3");
            obj.set_text("제품목록");
            obj.set_cssclass("sta_WF_Title");
            this.div_PROD.addChild(obj.name, obj);

            obj = new Grid("grd_List","0","staTitle01:0",null,null,"divDetail:20","0",null,null,null,null,this.div_PROD.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_Product");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseexpandkey("true");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"62\"/><Column size=\"410\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"제품목록\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" treelevel=\"bind:PRODUCT_LVL\" edittype=\"tree\" displaytype=\"treeitemcontrol\" text=\"bind:PRODUCT_NAME\"/></Band></Format></Formats>");
            this.div_PROD.addChild(obj.name, obj);

            obj = new Static("staTitle01_00",null,"0","590","43","0",null,null,null,null,null,this.div_PROD.form);
            obj.set_taborder("2");
            obj.set_text("제품상세");
            obj.set_cssclass("sta_WF_Title");
            this.div_PROD.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_PROD.form.divDetail.form.divDept
            obj = new Layout("default","",0,0,this.div_PROD.form.divDetail.form.divDept.form,function(p){});
            this.div_PROD.form.divDetail.form.divDept.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_PROD.form.divDetail.form.div_RelatedCompany
            obj = new Layout("default","",0,0,this.div_PROD.form.divDetail.form.div_RelatedCompany.form,function(p){});
            this.div_PROD.form.divDetail.form.div_RelatedCompany.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_PROD.form.divDetail.form
            obj = new Layout("default","",0,0,this.div_PROD.form.divDetail.form,function(p){});
            this.div_PROD.form.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_PROD.form
            obj = new Layout("default","",0,0,this.div_PROD.form,function(p){});
            this.div_PROD.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1100,642,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item28","div_PROD.form.divDetail.form.edtDeptCd","value","ds_Product","PRODUCT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","div_PROD.form.divDetail.form.edtDeptKorNm","value","ds_Product","PRODUCT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","div_PROD.form.divDetail.form.edtDeptEngNm","value","ds_Product","PRODUCT_NAME_ENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","div_PROD.form.divDetail.form.edtDeptAbbrNm","value","ds_Product","PRODUCT_NAME_SHORT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","div_PROD.form.divDetail.form.edtDeptEngAbbrNm","value","ds_Product","PRODUCT_NAME_SHORT2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","div_PROD.form.divDetail.form.edtDeptShowNm","value","dsList","DEPT_SHOW_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","div_PROD.form.divDetail.form.edtDeptSort","value","ds_Product","PRODUCT_ORDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","div_PROD.form.divDetail.form.txt_Remarks","value","ds_Product","REMARKS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","div_PROD.form.divDetail.form.cb_MainProductFlag","value","ds_Product","MAIN_PRODUCT_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","div_PROD.form.divDetail.form.cb_SelectFlag","value","ds_Product","SELECT_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","div_PROD.form.divDetail.form.cb_MaFlag","value","ds_Product","MA_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","div_PROD.form.divDetail.form.cb_GoodsFlag","value","ds_Product","GOODS_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","div_PROD.form.divDetail.form.cb_NoPurchaseFlag","value","ds_Product","NO_PURCHASE_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","div_PROD.form.divDetail.form.edtDeptEngAbbrNm00","value","ds_Product","UNIT_COST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","div_PROD.form.divDetail.form.edtDeptSort00","value","ds_Product","PRODUCT_LVL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","div_PROD.form.divDetail.form.divDept.form.edtCode","value","ds_Product","HIPO_PRODUCT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item79","div_PROD.form.divDetail.form.divDept.form.edtName","value","ds_Product","HIPO_PRODUCT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item80","div_PROD.form.divDetail.form.div_RelatedCompany.form.edtCode","value","ds_Product","RELATED_COMPANY_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item81","div_PROD.form.divDetail.form.div_RelatedCompany.form.edtName","value","ds_Product","RELATED_COMPANY_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","sales::comm/COM_ProductSearch.xfdl");
            this._addPreloadList("fdl","sales::comm/COM_Search.xfdl");
        };
        
        // User Script
        this.addIncludeScript("AP_SalesProductMM.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("AP_SalesProductMM.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("AP_SalesProductMM.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("AP_SalesProductMM.xfdl","Script::CommGrid.xjs");
        this.registerScript("AP_SalesProductMM.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분	 	: xxx
        * 02. 화면명		: xxx
        * 03. 화면설명 		: xxx
        * 04. 작성일   	: 2018.xx.xx
        * 05. 작성자   	: xxx
        * 06. 수정이력 	:
        ***********************************************************************************************
        *     수정일          이  름    사유
        ***********************************************************************************************
        *
        ************************************************************************************************/

        /************************************************************************************************
        * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        this.executeIncludeScript("Script::CommSystem.xjs"); /*include "Script::CommSystem.xjs"*/;
        this.executeIncludeScript("Script::CommTrans.xjs"); /*include "Script::CommTrans.xjs"*/;
        this.executeIncludeScript("Script::CommUtil.xjs"); /*include "Script::CommUtil.xjs"*/;
        this.executeIncludeScript("Script::CommGrid.xjs"); /*include "Script::CommGrid.xjs"*/;


        /************************************************************************************************
        * 전역 변수 영역
        ************************************************************************************************/

        this.fvPreComboIdx = 0;
        /************************************************************************************************
        * FORM 영역 EVENT 영역
        ************************************************************************************************/
        this.AP_SalesProductMM_onload = function(obj,e)
        {
        	this.gfnCompInit(obj);
        	this.fnInitForm();

        	var arrComp = [this.divSearch.form.cboCompany];
        	this.gfnSetAuthorityCompany(arrComp);
        	this.div_PROD.form.divDetail.form.divDept.form.fnSetCompany(arrComp[0].value);

        };

        //조회
        this.cfnSearch = function ()
        {
        	if (this.gfnDsIsUpdated(this.ds_Product)) {
        		// 검색을 진행하면 변경된 데이터가 사라집니다. \n계속 진행 하시겠습니까?
        		var sMsgId = "confirm.before.search";					//메세지ID
        		var arrArg = [""];										//메세지취환될값 배열[생략가능]
        		var sPopId = "search";									//메세지팝업ID[생략가능]	*해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
        		var sMsgCallback = "fnMsgCallback";						//메세지콜백[생략가능] 		* confirm성 메시지를 사용 시 반드시 필요

        		this.gfnAlert(sMsgId, arrArg, sPopId, sMsgCallback);
        	}
        	else {
        		this.fnSearch();
        	}
        };


        //신규
        this.cfnAdd = function ()
        {
        	this.fnAddRow();
        };

        //삭제
        this.cfnDel = function ()
        {
        	this.fnDeleteRow();
        };

        //저장
        this.cfnSave = function ()
        {
        	// 변경된 정보없으면 리턴
        	if (this.gfnDsIsUpdated(this.ds_Product) == false) {
        		// 저장할 데이터가 없습니다.
        		this.gfnAlert("msg.save.nochange");
        		return;
        	}
        	this.fnSave();
        };

        this.div_Search_btn_Search_onclick = function(obj,e)
        {
        	this.cfnSearch();
        };

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.div_PROD_btn_OrdUp_onclick = function(obj,e)
        {
        	this.fnChangeTreeOrder(-1);
        };

        this.div_PROD_btn_OrdDown_onclick = function(obj,e)
        {
        	this.fnChangeTreeOrder(+1);
        };

        this.div_Search_btn_New_onclick = function(obj,e)
        {
        	this.fnAddRow();
        };

        this.div_Search_btn_Delete_onclick = function(obj,e)
        {
        	this.fnDeleteRow();
        };

        this.div_Search_btn_Save_onclick = function(obj,e)
        {
        	this.fnSave();
        };

        this.ds_CD_CONTRACT_TYPE_onrowposchanged = function(obj,e)
        {
        	this.fnSearch();
        };

        this.ds_Product_onrowsetchanged = function(obj,e)
        {
        // 	var grd = this.div_PROD.form.grd_List;
        //
        // 	for(var i = 0, iL = obj.getRowCount(); i < iL; i++)
        // 	{
        // 		obj.setColumn(i, "ORD", i);
        // 	}
        };


        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.fnInitForm = function()
        {
        	this.fnGetCode();
        }

        this.fnAddRow = function()
        {
        	//선택된 제품의 하위레벨에서 마지막순서에 제품을 추가한다.
        	var ds		= this.ds_Product;
        	var currow	= ds.rowposition;
        	var rowType	= ds.getRowType(currow);
        	var productCode 		= ds.getColumn(currow, "PRODUCT_CODE");
        	var productName 		= ds.getColumn(currow, "PRODUCT_NAME");
        	var	productCodeLevel	= ds.getColumn(currow, "PRODUCT_LVL");

        	if(this.gfnIsEmpty(productCode))
        	{
        		productCodeLevel = -1;
        		currow = -1;
        	}

        	ds.insertRow(currow+1);
        	ds.setColumn(currow+1, "COMPANY_CODE"		, this.divSearch.form.cboCompany.value);
        	ds.setColumn(currow+1, "CONTRACT_TYPE"		, this.divSearch.form.cmb_SelectType.value);
        	ds.setColumn(currow+1, "HIPO_PRODUCT_CODE"	, productCode);
        	ds.setColumn(currow+1, "HIPO_PRODUCT_NAME"	, productName);
        	ds.setColumn(currow+1, "PRODUCT_LVL"		, parseInt(productCodeLevel)+1);
        	ds.setColumn(currow+1, "UNIT_COST"			, 0);

        	ds.setColumn(currow+1, "MAIN_PRODUCT_FLAG"	, 0);
        	ds.setColumn(currow+1, "SELECT_FLAG"		, 0);
        	ds.setColumn(currow+1, "MA_FLAG"			, 0);
        	ds.setColumn(currow+1, "GOODS_FLAG"			, 0);

        	if(ds.rowposition == 0) {
        		ds.setColumn(0, "PRODUCT_CODE"	, this.divSearch.form.cmb_SelectType.value);
        		ds.setColumn(0, "PRODUCT_NAME"	, this.divSearch.form.cmb_SelectType.text);
        	}

        	/*한번에 여러제품 추가할 것을 고려해 선택된 로우를 유지*/
        	//ds.set_rowposition(currow+1);

        // 	}else{
        // 		return alert(this.gfnGetTransTxt(1194,"상위제품코드가 없습니다."));
        // 	}
        }

        this.fnDeleteRow = function()
        {
        	var ds		= this.ds_Product;
        	var currow	= ds.rowposition;
        	var	productCodeLevel = ds.getColumn(currow, "PRODUCT_LVL");
        	if(productCodeLevel != "0")	//최상위 카테고리는 삭제 불가
        	{
        		var arrDeleteRows = [];
        		arrDeleteRows.push(currow);

        		var	nextRowLevel;
        		for(var i = currow+1, iL = ds.getRowCount(); i < iL; i++)
        		{
        			nextRowLevel = ds.getColumn(i, "PRODUCT_LVL");
        			if(productCodeLevel < nextRowLevel)
        			{
        				arrDeleteRows.push(i);
        			}else{
        				break;
        			}
        		}
        		ds.deleteMultiRows(arrDeleteRows);
        	}
        }

        //정합성체큰
        this.fnIsValidSave = function ()
        {
        	var ds = this.ds_Product;
        	for(var i = 0, iL = ds.getRowCount(); i < iL; i++)
        	{
        		if( this.gfnIsEmpty(ds.getColumn(i, "UNIT_COST")) )
        		{
        			ds.setColumn(i, "UNIT_COST", 0);
        		}

        		if( i>0 && this.gfnIsEmpty(ds.getColumn(i, "HIPO_PRODUCT_CODE")) )
        		{
        			this.gfnAlert("msg.err.validator.required",["상위제품코드"]);
        			return;
        		}
        	}

        	// 정합성 체크
        	this.gfnClearValidation(this.ds_Product);

        	this.gfnSetValidation(this.ds_Product, "COMPANY_CODE", "회사코드"	, "required");
        	this.gfnSetValidation(this.ds_Product, "CONTRACT_TYPE", "제품구분"	, "required");
        	//this.gfnSetValidation(this.ds_Product, "PRODUCT_CODE",  "제품코드"	    , "required");
        	this.gfnSetValidation(this.ds_Product, "PRODUCT_NAME", "제품명"	, "required");
        	//this.gfnSetValidation(this.ds_Product, "HIPO_PRODUCT_CODE", "상위제품코드"	, "required");
        	this.gfnSetValidation(this.ds_Product, "PRODUCT_LVL", "트리레벨"	, "required");
        	this.gfnSetValidation(this.ds_Product, "PRODUCT_ORDR", "정렬순서"	, "required");

        	// Dataset의 변경된 Row Validation check
        	if (this.gfnValidation(this.ds_Product, "U") == false) return false;
        	else return true;
        };

        /*선택된 row를 입력된 ordOffset 값만큼 이동시킨다.
        이동 불가시에는 무시한다.*/
        this.fnChangeTreeOrder = function(ordOffset)
        {
        	var grd = this.div_PROD.form.grd_List;

        	var ds = this.ds_Product;
        	var rowcnt = ds.getRowCount();
        	var currow = ds.rowposition;

        	var fnGetChildRowSet = function(trow, sign)
        	{
        		var arrRowSet = [];		//옮길대상 array
        		arrRowSet.push(trow);

        		var	curRowLevel = ds.getColumn(currow, "PRODUCT_LVL");
        		var	nextRowLevel;
        		for(var i = trow+1, iL = rowcnt; i < iL; i++)
        		{
        			nextRowLevel = ds.getColumn(i, "PRODUCT_LVL");
        			if(curRowLevel < nextRowLevel)
        			{
        				//arrRowSet.splice(0, 0, i);	//array의 0번째 위치에 i 값 삽입
        				arrRowSet.push(i);	//array의 마지막 위치에 i 값 추가
        			}else{
        				return arrRowSet;
        			}
        		}
        	}

        	if(!grd.isTreeRootRow(currow))
        	{
        		var nextRow = grd.getTreeSiblingRow(currow, ordOffset);
        		if(nextRow != -1)
        		{
        			//grd.setBindDataset();
        			var curRowSet = fnGetChildRowSet(currow);
        			var nextRowSet = fnGetChildRowSet(nextRow);
        			for(var i = 0, iL = curRowSet.length; i < iL; i++)
        			{
        				if(Math.sign(ordOffset) == -1)	//음수:위-1, 양수:아래1
        				{
        					ds.moveRow(currow+i, nextRowSet[0]+i);
        					ds.set_rowposition(nextRow);
        				}else{
        					ds.moveRow(currow, nextRowSet[nextRowSet.length-1]);
        					ds.set_rowposition(currow+nextRowSet.length);
        				}
        			}
        			//grd.setBindDataset(ds);
        		}
        	}
        }

        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fnGetCode = function()
        {
        	this.gfnAddCodeDataset("ds_CD_CONTRACT_TYPE"		, "CONTRACT_TYPE", false, false, false);
        	this.gfnAddCodeDataset("ds_CD_SALES_PRODUCT_TYPE"	, "SALES_PRODUCT_TYPE", false, false, false);
        	//this.gfnAddCodeDataset("ds_CD_ROYALTY_TYPE"	, "ROYALTY_TYPE", false, false, false);
        	this.gfnCodeTransaction();

        	this.divSearch.form.cmb_SelectType.set_index(0);
        }

        this.fnSubSidiaryCompanyList = function()
        {
        	this.gfnAddOutputDataset("ds_SubsidiaryCompanyList"	, "dsOutput");
        	this.gfnCommonTransaction("SearchSubSidiaryCompany", "AP_SalesProductMM_S04");
        };

        this.fnSearch = function()
        {
        	var sContractType = this.divSearch.form.cmb_SelectType.value;
        	this.fnSetParentProduct();

        	this.gfnAddSendParameter("COMPANY_CODE"	, this.divSearch.form.cboCompany.value);
        	this.gfnAddSendParameter("CONTRACT_TYPE"	, sContractType);
        	this.gfnAddSendParameter("DELETE_FLAG"	, '0');

        	this.fvPreComboIdx = this.divSearch.form.cmb_SelectType.index;
        	//this.gfnAddOutputDataset("ds_Product"	, "dsOutput");

        	this.gfnSetMap("nextBaseMapper", "ProductTreeList", "ds_Product");

        	this.gfnCommonTransaction("Select", "selectNextList.do"/*"AP_SalesProductMM_S05"*/);
        }

        this.fnSave = function()
        {
        	if(this.fnIsValidSave())
        	{
        		this.gfnAddInputDataset("ds_Product"	, "dsInput1");
        		this.gfnSetMap("nextBaseMapper", "ProductList", []);
        		this.gfnCommonTransaction("Save", "saveNextList.do"/*"AP_SalesProductMM_R01"*/);
        	}
        }


        //message
        this.fnMsgCallback = function (sMsgId, sRtn)
        {
        	switch(sMsgId) {
        		case "search":
        			if(this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false){
        				this.divSearch.form.cmb_SelectType.set_index(this.fvPreComboIdx);
        				return;
        			}
        			this.fnSearch();
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


        this.fnCallBack = function(strSvcID, nErrorCode, strErrorMag)
        {
        	// 에러 예외처리
        	if(nErrorCode != 0)
        	{
        		return;
        	}
        	else
        	{
        		if(strSvcID=="Select")
        		{
        		}
        		else if(strSvcID=="Save")
        		{
        			this.fnSearch();
        		}
        		else if(strSvcID=="gfnGetCode")
        		{
        			this.fnSubSidiaryCompanyList();
        			//this.fnSearch();
        		}
        		else if(strSvcID=="SearchSubSidiaryCompany")
        		{
        			this.fnSearch();
        		}
        	}
        }

        // Popup 콜백
        this.fnPopupCallBack = function(sPopupId, Variant)
        {
        	Variant = this.commUtil.popupReturn();
        	if(this.gfnIsEmpty(Variant))
        	{
        		return;
        	}
        	else
        	{
        		this.recentVariant = Variant;
        		switch(sPopupId)
        		{
        			case "popupProductSearch" : // 제품
        				var ds = new nexacro.Dataset();
        				ds.loadXML(Variant);
        				this.recentVariant = ds;
        				var curRow = this.ds_Product.rowposition;
        				this.ds_Product.setColumn(curRow, "MA_MAIN_PRODUCT_CODE", ds.getColumn(0, "PRODUCT_CODE"));
        				this.ds_Product.setColumn(curRow, "MA_MAIN_PRODUCT_NAME", ds.getColumn(0, "PRODUCT_NAME"));
        				this.onchanged();
        			break;
        		}
        	}
        };

        this.ds_Product_onrowposchanged = function(obj,e)
        {
        	//if (this.commUtil.getFormAuthority(283,1)) {
        // 		this.div_PROD.form.div_Admin.form.cb_MainProductFlag.set_readonly(false);
        // 		this.div_PROD.form.div_Admin.form.cb_SelectFlag.set_readonly(false);
        // 		this.div_PROD.form.div_Admin.form.cb_MaFlag.set_readonly(false);
        // 		this.div_PROD.form.div_Admin.form.cb_NoPurchaseFlag.set_readonly(false);
        //
        // 		var bReadonly = true;
        // 		if(obj.getColumn(e.newrow, "PRODUCT_CODE").substr(0,1) =="P")
        // 			 bReadonly = false;
        // 		this.div_PROD.form.div_Admin.form.cb_GoodsFlag.set_readonly(bReadonly);
        	//}

        // 	if(obj.getRowType(e.newrow)  == 2) {
        // 		this.div_PROD.form.divDetail.form.edtDeptCd.set_readonly(false);
        // 	} else {
        // 		this.div_PROD.form.divDetail.form.edtDeptCd.set_readonly(true);
        // 	}
        };

        this.div_PROD_btn_MaMainProduct_onclick = function(obj,e)
        {
        	var curRow = this.ds_Product.rowposition;
        	var Argument={};
        	Argument.sProductCd = this.ds_Product.getColumn(curRow, "MA_MAIN_PRODUCT_CODE");
        	Argument.sContractType = "ALL";

        	this.commUtil.popupProductSearch(this, "popupProductSearch", "fnPopupCallBack", Argument);
        };


        this.setProductCompanyCode = function(obj,e)
        {
        	var curRow = this.ds_Product.rowposition;
        	var sProductCompanyCode = this.ds_Product.getColumn(curRow, "PRODUCT_COMPANY_CODE");
        	if(this.gfnIsEmpty(sProductCompanyCode)) sProductCompanyCode = "0,0,0";
        	var arrCompanyCode = sProductCompanyCode.split(",");
        	var sCompanyCode = "";

        	if(obj.name == "chk_ProductCoCd_Tobe") {
        		sCompanyCode = "TOBE";
        		if(e.postvalue == "1") {
        			sProductCompanyCode = sCompanyCode + "," + arrCompanyCode[1] + "," + arrCompanyCode[2];
        		} else {
        			sProductCompanyCode = "0" + "," + arrCompanyCode[1] + "," + arrCompanyCode[2];
        		}
        	} else if(obj.name == "chk_ProductCoCd_DxTobe") {
        		sCompanyCode = "WIN";
        		if(e.postvalue == "1") {
        			sProductCompanyCode = arrCompanyCode[0] + "," + sCompanyCode + "," + arrCompanyCode[2];
        		} else {
        			sProductCompanyCode = arrCompanyCode[0] + "," + "0" + "," + arrCompanyCode[2];
        		}
        	} else if(obj.name == "chk_ProductCoCd_TobeJap") {
        		sCompanyCode = "B305";
        		if(e.postvalue == "1") {
        			sProductCompanyCode = arrCompanyCode[0] + "," + arrCompanyCode[1] + "," + sCompanyCode;
        		} else {
        			sProductCompanyCode = arrCompanyCode[0] + "," + arrCompanyCode[1] + "," + "0";
        		}
        	}
        	this.ds_Product.setColumn(curRow, "PRODUCT_COMPANY_CODE", sProductCompanyCode);
        };

        this.div_Project_Management_cmb_SelectType_onitemchanged = function(obj,e)
        {
        	this.fvPreComboIdx = e.preindex;
        	this.cfnSearch();
        };


        this.fnSetParentProduct = function()
        {
        	var comcode = this.divSearch.form.cboCompany.value;
        	var ctcode = this.divSearch.form.cmb_SelectType.value;
        	var div = this.div_PROD.form.divDetail.form.divDept;
        	div.COMPANY_CODE = comcode;
        	div.CONTRACT_TYPE = ctcode;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.AP_SalesProductMM_onload,this);
            this.divSearch.form.cboCompany.addEventHandler("onitemchanged",this.divSearch_cboCompany_onitemchanged,this);
            this.divSearch.form.cmb_SelectType.addEventHandler("onitemchanged",this.div_Project_Management_cmb_SelectType_onitemchanged,this);
            this.divSearch.form.btn_Search.addEventHandler("onclick",this.div_Search_btn_Search_onclick,this);
        };
        this.loadIncludeScript("AP_SalesProductMM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
