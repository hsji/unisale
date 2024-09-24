(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("assetMgFm");
            this.set_titletext("공통코드관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj.getSetter("firefirstcount").set("0");
            obj._setContents("<ColumnInfo><Column id=\"ASSET_CD\" type=\"STRING\" size=\"256\"/><Column id=\"ASSET_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.getSetter("firefirstcount").set("0");
            obj._setContents("<ColumnInfo><Column id=\"ASSET_STATUS_CD\" type=\"string\" size=\"32\"/><Column id=\"P_DATE\" type=\"string\" size=\"32\"/><Column id=\"REASON_CD\" type=\"string\" size=\"32\"/><Column id=\"SERIAL_NO\" type=\"string\" size=\"32\"/><Column id=\"POSITION_CD\" type=\"string\" size=\"32\"/><Column id=\"OWNNER\" type=\"string\" size=\"32\"/><Column id=\"I_DATE\" type=\"string\" size=\"32\"/><Column id=\"IP_ADDR\" type=\"string\" size=\"32\"/><Column id=\"MEM_TYPE\" type=\"string\" size=\"32\"/><Column id=\"M_STATUS\" type=\"string\" size=\"32\"/><Column id=\"DEGREE_LVL\" type=\"string\" size=\"32\"/><Column id=\"ASSET_SIZE\" type=\"string\" size=\"32\"/><Column id=\"ASSET_CD\" type=\"string\" size=\"32\"/><Column id=\"ASSET_NO\" type=\"int\" size=\"4\"/><Column id=\"ASSET_TYPE\" type=\"string\" size=\"32\"/><Column id=\"MANAGETEAM_CD\" type=\"string\" size=\"32\"/><Column id=\"MANAGER\" type=\"string\" size=\"32\"/><Column id=\"HDD_TYPE\" type=\"string\" size=\"32\"/><Column id=\"TITLE\" type=\"string\" size=\"32\"/><Column id=\"REMARK\" type=\"string\" size=\"32\"/><Column id=\"M_CNT\" type=\"int\" size=\"4\"/><Column id=\"CPU_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ASSET_VERSION\" type=\"string\" size=\"32\"/><Column id=\"PRODUCT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RELATION_ASSET\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OWNNER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OS_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Static("staCd","0","12","98","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("자산구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboAssetGrp","staCd:0","12","165","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("cbo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCdNm","cboAssetGrp:10","12","110","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("자산명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10","48","28","25",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboAssetType","staCdNm:20","12","165","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("cbo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","50","397","43",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("자산관리");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","staTitle00:0",null,null,"20","346",null,null,"250",null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsList");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.getSetter("uFunction").set("filter,sort,!colfix,!initial,find");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"147\" band=\"left\"/><Column size=\"73\" band=\"left\"/><Column size=\"123\" band=\"left\"/><Column size=\"116\"/><Column size=\"160\"/><Column size=\"132\"/><Column size=\"132\"/><Column size=\"147\"/><Column size=\"147\"/><Column size=\"123\"/><Column size=\"123\"/><Column size=\"126\"/><Column size=\"126\"/><Column size=\"126\"/><Column size=\"126\"/><Column size=\"126\"/><Column size=\"126\"/><Column size=\"126\"/><Column size=\"126\"/><Column size=\"126\"/><Column size=\"96\"/><Column size=\"228\"/><Column size=\"400\"/><Column size=\"400\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/><Column size=\"0\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"자산번호\"/><Cell col=\"3\" text=\"형태\"/><Cell col=\"4\" text=\"버전\"/><Cell col=\"5\" text=\"사용자(사번)\"/><Cell col=\"6\" text=\"사용자\"/><Cell col=\"7\" text=\"관리팀\"/><Cell col=\"8\" text=\"관리팀(코드)\"/><Cell col=\"9\" text=\"관리자\"/><Cell col=\"10\" text=\"관리자(사번)\"/><Cell col=\"11\" text=\"사용목적\"/><Cell col=\"12\" text=\"위치\"/><Cell col=\"13\" text=\"구매일\"/><Cell col=\"14\" text=\"OS\"/><Cell col=\"15\" text=\"규격\"/><Cell col=\"16\" text=\"CPU\"/><Cell col=\"17\" text=\"MEMORY\"/><Cell col=\"18\" text=\"HDD\"/><Cell col=\"19\" text=\"SERIAL\"/><Cell col=\"20\" text=\"사용여부\"/><Cell col=\"21\" text=\"제조사\"/><Cell col=\"22\" text=\"자산 설명\"/><Cell col=\"23\" text=\"비고\"/><Cell col=\"24\" text=\"RANGE_TYPE\"/><Cell col=\"25\" text=\"P_DATE\"/><Cell col=\"26\" text=\"RELATION\"/><Cell col=\"27\" text=\"SERIAL_NO\"/><Cell col=\"28\" text=\"POS_CD\"/><Cell col=\"29\" text=\"I_DATE\"/><Cell col=\"30\" text=\"IP_ADDR\"/><Cell col=\"31\" text=\"MEM_TYPE\"/><Cell col=\"32\" text=\"M_STATUS\"/><Cell col=\"33\" text=\"PRODUCT_CD\"/><Cell col=\"34\" text=\"ASSET_SIZE\"/><Cell col=\"35\" text=\"HDD_TYPE\"/><Cell col=\"36\" text=\"CPU_TYPE\"/><Cell col=\"37\" text=\"OWNNER\"/><Cell col=\"38\" text=\"관리팀\"/><Cell col=\"39\" text=\"관리자\"/><Cell col=\"40\" text=\"OS_TYPE\"/></Band><Band id=\"body\"><Cell text=\"bind:ASSET_CD\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:ASSET_NO\"/><Cell col=\"2\" expr=\"ASSET_CD &amp;&amp; ASSET_NO?ASSET_CD + &apos;-&apos; + (ASSET_NO+&apos;&apos;).padLeft(3,&apos;0&apos;):&apos;&apos;\"/><Cell col=\"3\" text=\"bind:ASSET_TYPE\"/><Cell col=\"4\" text=\"bind:ASSET_VERSION\"/><Cell col=\"5\" text=\"bind:OWNNER\"/><Cell col=\"6\" text=\"bind:OWNNER_NAME\"/><Cell col=\"7\" text=\"bind:DEPT_NAME\"/><Cell col=\"8\" text=\"bind:MANAGETEAM_CD\"/><Cell col=\"9\" text=\"bind:MANAGER_NAME\"/><Cell col=\"10\" text=\"bind:MANAGER\"/><Cell col=\"11\" text=\"bind:REASON_CD\"/><Cell col=\"12\" text=\"bind:POSITION_CD\"/><Cell col=\"13\" text=\"bind:I_DATE\" displaytype=\"date\"/><Cell col=\"14\" text=\"bind:OS_TYPE\"/><Cell col=\"15\" text=\"bind:ASSET_SIZE\"/><Cell col=\"16\" text=\"bind:CPU_TYPE\"/><Cell col=\"17\" text=\"bind:MEM_TYPE\"/><Cell col=\"18\" text=\"bind:HDD_TYPE\"/><Cell col=\"19\" text=\"bind:SERIAL_NO\"/><Cell col=\"20\" text=\"bind:USE_YN\"/><Cell col=\"21\" text=\"bind:PRODUCT_CD\"/><Cell col=\"22\" text=\"bind:TITLE\"/><Cell col=\"23\" text=\"bind:REMARK\"/><Cell col=\"24\" text=\"bind:REASON_CD\"/><Cell col=\"25\" text=\"bind:P_DATE\"/><Cell col=\"26\" text=\"bind:RELATION_ASSET\"/><Cell col=\"27\" text=\"bind:SERIAL_NO\"/><Cell col=\"28\" text=\"bind:POSITION_CD\"/><Cell col=\"29\" text=\"bind:I_DATE\"/><Cell col=\"30\" text=\"bind:IP_ADDR\"/><Cell col=\"31\" text=\"bind:MEM_TYPE\"/><Cell col=\"32\" text=\"bind:ASSET_STATUS_CD\"/><Cell col=\"33\" text=\"bind:PRODUCT_CD\"/><Cell col=\"34\" text=\"bind:ASSET_SIZE\"/><Cell col=\"35\" text=\"bind:HDD_TYPE\"/><Cell col=\"36\" text=\"bind:CPU_TYPE\"/><Cell col=\"37\" text=\"bind:OWNNER\"/><Cell col=\"38\" text=\"bind:MANAGETEAM_CD\"/><Cell col=\"39\" text=\"bind:MANAGER\"/><Cell col=\"40\" text=\"bind:OS_TYPE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","grdMaster:0","397","43",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("자산 상세");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divCmmnBtn",null,"divSearch:10","400","28","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcel",null,"0","95","28","0",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("1");
            obj.set_text("엑셀다운");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelSave");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnExcelUpload",null,"0","107","28","btnExcel:5",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("0");
            obj.set_text("엑셀업로드");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelUp");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Static("staTitle03","grdMaster:20","428",null,"43","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("소분류코드 상세");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divSub","0","staTitle01:0",null,"298","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Static("staBg07_00","0","264",null,"34","0",null,null,null,null,null,this.divSub.form);
            obj.set_taborder("51");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staBg07","0","231",null,"34","0",null,null,null,null,null,this.divSub.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staBg00","0","0",null,"34","0",null,null,null,null,null,this.divSub.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staBg01","0","33",null,"34","0",null,null,null,null,null,this.divSub.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staBg02","0","66",null,"34","0",null,null,null,null,null,this.divSub.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staBg03","0","staBg02:-1",null,"34","0",null,null,null,null,null,this.divSub.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staBg04","0","staBg03:-1",null,"34","0",null,null,null,null,null,this.divSub.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staBg05","0","staBg04:-1",null,"34","0",null,null,null,null,null,this.divSub.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staBg06","0","staBg05:-1",null,"34","0",null,null,null,null,null,this.divSub.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","0","90","34",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("14");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_Label");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","staTitle00:-1","90","34",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("15");
            obj.set_text("형태");
            obj.set_cssclass("sta_WF_Label");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staTitle02","340","staTitle01:-1","90","34",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("16");
            obj.set_text("제조사");
            obj.set_cssclass("sta_WF_Label");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staTitle03","0","staTitle02:-1","90","34",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("17");
            obj.set_text("소유자");
            obj.set_cssclass("sta_WF_Label");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staTitle05","0","165","90","34",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_Label");
            obj.set_text("구매일");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staTitle06","0","231","90","34",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("19");
            obj.set_text("자산설명");
            obj.set_cssclass("sta_WF_Label");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staTitle07","0","264","90","34",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("20");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_Label");
            this.divSub.addChild(obj.name, obj);

            obj = new Combo("cboAssetCd","staTitle00:4","5","242","25",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("28");
            obj.set_cssclass("essential");
            obj.set_value("");
            obj.set_index("-1");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staTitle08","cboAssetCd:4","0","90","34",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("21");
            obj.set_text("자산순번");
            obj.set_cssclass("sta_WF_Label");
            this.divSub.addChild(obj.name, obj);

            obj = new Edit("edtSoCdNm","staTitle08:4","5","76","24",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("0");
            obj.set_cssclass("essential");
            obj.set_maxlength("30");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_imemode("hangul");
            obj.set_enable("false");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staTitle12","340","33","90","34",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("22");
            obj.set_text("모델(버전)");
            obj.set_cssclass("sta_WF_Label");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staTitle10","0","198","90","34",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("23");
            obj.set_text("CPU");
            obj.set_cssclass("sta_WF_Label");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staTitle11","340","165","90","34",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("24");
            obj.set_text("제조일");
            obj.set_cssclass("sta_WF_Label");
            this.divSub.addChild(obj.name, obj);

            obj = new Edit("edtSoGroup5","staTitle10:4","203","242","24",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("1");
            obj.set_maxlength("30");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_inputmode("normal");
            obj.set_imemode("alpha");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staTitle15","340","198","90","34",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("25");
            obj.set_text("MEMORY");
            obj.set_cssclass("sta_WF_Label");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staTitle16","680","132","90","34",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("26");
            obj.set_text("시리얼번호");
            obj.set_cssclass("sta_WF_Label");
            this.divSub.addChild(obj.name, obj);

            obj = new Edit("edtSoGroup6","staTitle15:3","203","242","24",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("2");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_inputmode("normal");
            obj.set_imemode("alpha");
            obj.set_maxlength("30");
            this.divSub.addChild(obj.name, obj);

            obj = new Edit("edtSoGroup9","staTitle16:4","137",null,"24","5",null,null,null,null,null,this.divSub.form);
            obj.set_taborder("3");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_maxlength("50");
            obj.set_inputmode("normal");
            obj.set_imemode("alpha");
            this.divSub.addChild(obj.name, obj);

            obj = new Edit("edtBeforeScaCd","staTitle06:4","236",null,"24","5",null,null,null,null,null,this.divSub.form);
            obj.set_taborder("4");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_imemode("alpha");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staTitle17","0","132","90","34",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("27");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label");
            this.divSub.addChild(obj.name, obj);

            obj = new CheckBox("chkSoUseYn","94","137","108","24",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("5");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staTitle08_00","680","0","90","34",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("29");
            obj.set_text("OS");
            obj.set_cssclass("sta_WF_Label");
            this.divSub.addChild(obj.name, obj);

            obj = new Edit("edtAssetName","512","5","164","24",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("30");
            obj.set_cssclass("essential");
            obj.set_maxlength("30");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_enable("false");
            this.divSub.addChild(obj.name, obj);

            obj = new Combo("cboAssetType","staTitle01:4","37","242","25",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("31");
            obj.set_cssclass("essential");
            obj.set_value("");
            obj.set_index("-1");
            this.divSub.addChild(obj.name, obj);

            obj = new Div("divUser","staTitle03:4","104","242","24",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("32");
            obj.set_url("common::cmmUserSearch.xfdl");
            obj.set_text("");
            obj.getSetter("uEssential").set("true");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staTitle08_01","340","99","90","34",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("33");
            obj.set_text("관리자");
            obj.set_cssclass("sta_WF_Label");
            this.divSub.addChild(obj.name, obj);

            obj = new Div("divUser2","staTitle08_01:4","104","242","24",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("34");
            obj.set_url("common::cmmUserSearch.xfdl");
            obj.getSetter("uEssential").set("true");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staTitle08_01_00","680","99","90","34",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("35");
            obj.set_text("관리팀");
            obj.set_cssclass("sta_WF_Label");
            this.divSub.addChild(obj.name, obj);

            obj = new Div("divDept","staTitle08_01_00:5","105","24.17%","28",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("36");
            obj.set_text("div00");
            obj.set_url("common::cmmDeptSearch.xfdl");
            obj.getSetter("uEssential").set("true");
            this.divSub.addChild(obj.name, obj);

            obj = new Edit("edtVersion","staTitle12:4","38","242","24",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("49");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_maxlength("30");
            obj.set_inputmode("normal");
            obj.set_imemode("alpha");
            obj.set_cssclass("essential");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staTitle01_00","edtVersion:4","33","90","34",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("37");
            obj.set_text("위치");
            obj.set_cssclass("sta_WF_Label");
            this.divSub.addChild(obj.name, obj);

            obj = new Combo("cboPosition","staTitle01_00:5","38","249","25",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("38");
            obj.set_cssclass("essential");
            obj.set_text("cbo00");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staTitle04_00","0","66","90","34",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("39");
            obj.set_text("사용목적");
            obj.set_cssclass("sta_WF_Label");
            this.divSub.addChild(obj.name, obj);

            obj = new Combo("cboReason","staTitle04_00:4","70","242","25",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("40");
            obj.set_value("");
            obj.set_index("-1");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staTitle15_00","680","198","90","34",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("41");
            obj.set_text("HDD");
            obj.set_cssclass("sta_WF_Label");
            this.divSub.addChild(obj.name, obj);

            obj = new Edit("edtSoGroup6_00","staTitle15_00:4","203","251","24",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("42");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_maxlength("30");
            obj.set_inputmode("normal");
            obj.set_imemode("alpha");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staTitle15_00_00","680","165","90","34",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("43");
            obj.set_text("규격(크기)");
            obj.set_cssclass("sta_WF_Label");
            this.divSub.addChild(obj.name, obj);

            obj = new Edit("edtSoGroup6_00_00","staTitle15_00_00:4","170","251","24",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("44");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_maxlength("30");
            obj.set_inputmode("normal");
            obj.set_imemode("alpha");
            this.divSub.addChild(obj.name, obj);

            obj = new Combo("cboProduct","staTitle02:4","70","242","25",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("45");
            obj.set_value("");
            obj.set_index("-1");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staTitle02_00","680","66","90","34",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("46");
            obj.set_text("관련장비");
            obj.set_cssclass("sta_WF_Label");
            this.divSub.addChild(obj.name, obj);

            obj = new Calendar("cal00","94","169","126","25",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("47");
            obj.set_cssclass("essential");
            this.divSub.addChild(obj.name, obj);

            obj = new Calendar("cal00_00","434","169","126","25",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("48");
            this.divSub.addChild(obj.name, obj);

            obj = new Edit("edtVersion00","staTitle02_00:5","71",null,"24","6",null,null,null,null,null,this.divSub.form);
            obj.set_taborder("50");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_maxlength("50");
            obj.set_inputmode("normal");
            obj.set_imemode("alpha");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staTitle08_01_01","340","132","90","34",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("52");
            obj.set_text("상태");
            obj.set_cssclass("sta_WF_Label");
            this.divSub.addChild(obj.name, obj);

            obj = new Combo("cboSatus","434","137","242","25",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("53");
            obj.set_value("");
            obj.set_index("-1");
            this.divSub.addChild(obj.name, obj);

            obj = new Edit("edtBeforeScaCd00","94","269",null,"24","5",null,null,null,null,null,this.divSub.form);
            obj.set_taborder("54");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_imemode("alpha");
            this.divSub.addChild(obj.name, obj);

            obj = new Edit("edtVersion01","staTitle08_00:5","5","249","24",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("55");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_maxlength("30");
            obj.set_inputmode("normal");
            obj.set_imemode("alpha");
            this.divSub.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCmmnBtn.form
            obj = new Layout("default","",0,0,this.divCmmnBtn.form,function(p){});
            this.divCmmnBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSub.form.divUser
            obj = new Layout("default","",0,0,this.divSub.form.divUser.form,function(p){});
            this.divSub.form.divUser.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSub.form.divUser2
            obj = new Layout("default","",0,0,this.divSub.form.divUser2.form,function(p){});
            this.divSub.form.divUser2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSub.form.divDept
            obj = new Layout("default","",0,0,this.divSub.form.divDept.form,function(p){});
            this.divSub.form.divDept.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSub.form
            obj = new Layout("default","",0,0,this.divSub.form,function(p){});
            this.divSub.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1050,736,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtCd","value","dsCond","HCL_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtCdNm","value","dsCond","HCL_CD_KORN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSub.form.edtSoCdNm","value","dsList","ASSET_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divSub.form.edtSoGroup4","value","dsList","M_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divSub.form.edtSoGroup5","value","dsList","CPU_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divSub.form.edtSoGroup6","value","dsList","MEM_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divSub.form.edtSoGroup9","value","dsList","SERIAL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divSub.form.edtBeforeScaCd","value","dsList","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divSub.form.chkSoUseYn","value","dsList","USE_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divSub.form.edtRemark","value","dsList","REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divSearch.form.cboAssetGrp","value","dsCond","ASSET_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divSearch.form.cboAssetType","value","dsCond","ASSET_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSub.form.edtSoGroup6_00","value","dsList","HDD_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divSub.form.edtSoGroup6_00_00","value","dsList","ASSET_SIZE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divSub.form.cal00_00","value","dsList","P_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divSub.form.cal00","value","dsList","I_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divSub.form.cbo00_00_02_00_00","value","dsList","DEGREE_LVL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divSub.form.cboProduct","value","dsList","PRODUCT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","divSub.form.cboReason","value","dsList","REASON_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","divSub.form.cboAssetType","value","dsList","ASSET_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","divSub.form.cboAssetCd","value","dsList","ASSET_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","divSub.form.cbo00_00_00","value","dsList","ASSET_DETAIL_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","divSub.form.cboPosition","value","dsList","POSITION_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","divSub.form.divDept.form.edtCode","value","dsList","MANAGETEAM_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","divSub.form.divUser.form.edtCode","value","dsList","OWNNER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divSub.form.divUser2.form.edtCode","value","dsList","MANAGER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSub.form.edtVersion","value","dsList","ASSET_VERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSub.form.edtVersion00","value","dsList","RELATION_ASSET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSub.form.cboSatus","value","dsList","ASSET_STATUS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","divSub.form.divDept.form.edtName","value","dsList","DEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","divSub.form.divUser.form.edtName","value","dsList","OWNNER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","divSub.form.divUser2.form.edtName","value","dsList","MANAGER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSub.form.edtBeforeScaCd00","value","dsList","REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSub.form.edtVersion01","value","dsList","OS_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::cmmUserSearch.xfdl");
            this._addPreloadList("fdl","common::cmmDeptSearch.xfdl");
        };
        
        // User Script
        this.registerScript("assetMgFm.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	assetMgFm.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/06/08
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/06/08			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvRowPositionMain = -1;
        this.fvRowPositionSub  = -1;
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	//공통코드
        	var param = [
        			  {biztype : "Combo", code : "SM23", selecttype : "A", objid : this.divSearch.form.cboAssetGrp}	// 자산 구분
        			, {biztype : "Combo", code : "SM19", selecttype : "A", objid : this.divSearch.form.cboAssetType}	// 자산명
        			, {biztype : "Grid",  code : "SM23", objid : this.grdMaster, bindcolumn : "ASSET_CD", edit : "false"}	// 자산구분코드
        			, {biztype : "Grid",  code : "SM19", objid : this.grdMaster, bindcolumn : "ASSET_TYPE", edit : "false"}	// 자산형태
        			, {biztype : "Grid",  code : "SM24", objid : this.grdMaster, bindcolumn : "POSITION_CD", edit : "false"}	// 위치
        			, {biztype : "Grid",  code : "SM22", objid : this.grdMaster, bindcolumn : "REASON_CD", edit : "false"}	// 위치
        			, {biztype : "Grid",  code : "SM25", objid : this.grdMaster, bindcolumn : "PRODUCT_CD", edit : "false"}	// 위치
        			, {biztype : "Combo", code : "SM23", objid : this.divSub.form.cboAssetCd}	// 자산구분
        			, {biztype : "Combo", code : "SM19", objid : this.divSub.form.cboAssetType}	// 자산명
        			, {biztype : "Combo", code : "SM24", objid : this.divSub.form.cboPosition}	// 위치
        			, {biztype : "Combo", code : "SM22", objid : this.divSub.form.cboReason}	// 목적
        			, {biztype : "Combo", code : "SM25", objid : this.divSub.form.cboProduct}	// 제조사
        			, {biztype : "Combo", code : "SM21", objid : this.divSub.form.cboSatus}	// STATUS
        	];

        	this.gfnGetCommonCode(param);

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
        		var sMsgId = "confirm.before.search";		//메세지ID
        		var arrArg = [""];							//메세지취환될값 배열[생략가능]
        		var sPopId = "search";						//메세지팝업ID[생략가능]	*해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
        		var sMsgCallback = "fnMsgCallback";			//메세지콜백[생략가능] 		* confirm성 메시지를 사용 시 반드시 필요

        		this.gfnAlert(sMsgId, arrArg, sPopId, sMsgCallback);
        	}else{
        		this.fnTranSearch();
        	}
        };

        //추가
        this.cfnAdd = function ()
        {
        	var nRow = this.dsList.addRow();
        	this.dsList.setColumn(nRow, "USE_YN", "1");
        	this.dsList.setColumn(nRow, "ASSET_STATUS_CD", "100");	// 상태

        };

        //삭제
        this.cfnDel = function ()
        {
        	if (this.dsList.rowcount == 0) {
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

        	if( this.fnMasterValid()){
        		this.gfnAlert("confirm.save", [""], "beforeSaveTran", "fnMsgCallback");
        	}
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //master 조회
        this.fnTranSearch = function ()
        {
        	// 조회-대분류
        	this.dsList.clearData();

        	var strSvcId    = "SearchAssetList";
        	var strSvcUrl   = "SearchAssetList.do";
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
        	var strSvcId    = "saveAssetList";
        	var strSvcUrl   = "saveAssetList.do";
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
        		case "SearchAssetList":
        			break;
        		case "saveAssetList":
        			this.fnTranSearch();
        			break;
        		default: break;
        	}
        };

        //popup
        this.fnPopupCallback = function (sPopupId, sRtn)
        {

        };

        //message
        this.fnMsgCallback = function (sMsgId, sRtn)
        {
        	switch(sMsgId) {
        		case "search":
        			if (this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false) {
        				return;
        			}
        			this.fnTranSearch();
        			break;
        		case "beforeSaveTran":
        			if (this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false) {
        				return;
        			}
        			this.fnTranSave();
        			break;
        		case "beforeRowPosChange":
        			if (this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false) {
        				return;
        			}
        			this.dsMaster.set_enableevent(false);
        			this.dsMaster.set_rowposition(this.dsMaster.uNewRow);
        			this.fnSubSearch();
        			this.dsMaster.set_enableevent(true);
        			break;
        		case "validHclCd":
        			this.dsMaster.setColumn(this.dsMaster.rowposition, "HCL_CD", "");
        			this.grdMaster.setCellPos(0);
        			this.grdMaster.showEditor(true);
        			break;
        		case "validSscCd":
        			this.dsDetail.setColumn(this.dsDetail.rowposition, "SSC_CD", "");
        			this.grdDetail.setCellPos(0);
        			this.grdDetail.showEditor(true);
        			break;
        		default: break;
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        //마스터 - validation
        this.fnMasterValid = function ()
        {
        	// 정합성 체크
        	this.gfnClearValidation(this.dsList);
        	this.gfnSetValidation(this.dsList, "ASSET_CD", "자산구분"	, "required");
        	this.gfnSetValidation(this.dsList, "ASSET_TYPE", "자산형태"	, "required");
        	this.gfnSetValidation(this.dsList, "ASSET_VERSION", "자산버전"	, "required");
        	this.gfnSetValidation(this.dsList, "POSITION_CD", "자산위치"	, "required");
        	this.gfnSetValidation(this.dsList, "REASON_CD", "자산위치"	, "required");
        	this.gfnSetValidation(this.dsList, "OWNNER", "소유자"	, "required");
        	this.gfnSetValidation(this.dsList, "MANAGER", "관리자"	, "required");
        	this.gfnSetValidation(this.dsList, "MANAGETEAM_CD", "관리팀"	, "required");
        	this.gfnSetValidation(this.dsList, "I_DATE", "구매일"	, "required");

        	// Dataset의 변경된 Row Validation check
        	if (this.gfnValidation(this.dsList, "U") == false) return false;
        	else return true;
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        //조회
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.cfnSearch(); //조회
        };

        //마스터 - 로우포스체인지
        this.dsList_onrowposchanged = function(obj,e)
        {
        	if(obj.getRowType() != Dataset.ROWTYPE_INSERT) {
        		var cd = obj.getColumn(obj.rowposition, "ASSET_CD");
        		var no = obj.getColumn(obj.rowposition, "ASSET_NO");

        		this.divSub.form.edtAssetName.set_value(cd + "-" + (no+"").padLeft(3, "0"));

        		if(obj.getRowType() == Dataset.ROWTYPE_NORMAL) {
        			this.divSub.form.divUser.form.edtName.set_value(obj.getColumn(obj.rowposition, "OWNNER_NAME"));
        			this.divSub.form.divUser2.form.edtName.set_value(obj.getColumn(obj.rowposition, "MANAGER_NAME"));
        			this.divSub.form.divDept.form.edtName.set_value(obj.getColumn(obj.rowposition, "DEPT_NAME"));
        		}
        	}
        };

        this.divCmmnBtn_btnExcel_onclick = function(obj,e)
        {
        	// 엑셀 상단 타이틀 텍스트 설정
        	var sSubTitle = this.staTitle00.text;

        	// Excel Export 공통함수 호출
        	this.gfnExcelExport(this.grdMaster, sSubTitle, sSubTitle, "EXCEL2007","",sSubTitle, true, "", true);
        };

        this.divCmmnBtn_btnExcelUpload_onclick = function(obj,e)
        {
        	this.gfnExcelImport("dsList", "자산관리", "A4:W", "fnExcelImportCallback", "asset", "", "A3:W3", this.grdMaster);
        };

        this.dsList_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "ASSET_CD") {
        		var inds = this[this.divSub.form.cboAssetType.innerdataset];
        		inds.filter("GRP_CD_1 == '" + e.newvalue + "'");
        	}
        };
        // 조회조건 변경
        this.divSearch_cboAssetGrp_onitemchanged = function(obj,e)
        {
        	var inds = this[this.divSearch.form.cboAssetType.innerdataset];

        	if(obj.value && obj.value != "") {
        		inds.filter("GRP_CD_1 == '" + obj.value + "'");
        	} else {
        		inds.filter("");
        	}
        	this.divSearch.form.cboAssetType.set_index(0);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.cboAssetGrp.addEventHandler("onitemchanged",this.divSearch_cboAssetGrp_onitemchanged,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.divCmmnBtn.form.btnExcel.addEventHandler("onclick",this.divCmmnBtn_btnExcel_onclick,this);
            this.divCmmnBtn.form.btnExcelUpload.addEventHandler("onclick",this.divCmmnBtn_btnExcelUpload_onclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
        };
        this.loadIncludeScript("assetMgFm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
