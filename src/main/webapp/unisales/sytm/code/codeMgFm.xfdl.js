(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("codeMgFm");
            this.set_titletext("공통코드관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj.getSetter("firefirstcount").set("0");
            obj._setContents("<ColumnInfo><Column id=\"HCL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HCL_CD_KORN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCondsub", this);
            obj.getSetter("firefirstcount").set("0");
            obj._setContents("<ColumnInfo><Column id=\"HCL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj.getSetter("firefirstcount").set("0");
            obj._setContents("<ColumnInfo><Column id=\"HCL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HCL_CD_KORN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HCL_CD_ENGL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REMK\" type=\"STRING\" size=\"256\"/><Column id=\"BEFO_HCL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HIPO_HCL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HIPO_SSC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_IP\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_IP\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMasterCheck", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"HCL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HCL_CD_KORN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HCL_CD_ENGL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REMK\" type=\"STRING\" size=\"256\"/><Column id=\"BEFO_HCL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HIPO_HCL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HIPO_SSC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_IP\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_IP\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMasterResult", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SSC_NUMB\" type=\"string\" size=\"1\"/><Column id=\"HCL_CD\" type=\"string\" size=\"8\"/><Column id=\"SSC_CD\" type=\"string\" size=\"8\"/><Column id=\"SSC_CD_KORN_NM\" type=\"string\" size=\"6\"/><Column id=\"SSC_CD_ENGL_NM\" type=\"string\" size=\"100\"/><Column id=\"ABBR_KORN_NM\" type=\"string\" size=\"100\"/><Column id=\"ABBR_ENGL_NM\" type=\"string\" size=\"100\"/><Column id=\"GRP_CD_1\" type=\"string\" size=\"100\"/><Column id=\"GRP_CD_2\" type=\"string\" size=\"20\"/><Column id=\"GRP_CD_3\" type=\"string\" size=\"20\"/><Column id=\"GRP_CD_4\" type=\"string\" size=\"20\"/><Column id=\"GRP_CD_5\" type=\"string\" size=\"20\"/><Column id=\"GRP_CD_6\" type=\"string\" size=\"20\"/><Column id=\"GRP_CD_7\" type=\"string\" size=\"20\"/><Column id=\"GRP_CD_8\" type=\"string\" size=\"20\"/><Column id=\"GRP_CD_9\" type=\"string\" size=\"20\"/><Column id=\"BEFO_HCL_CD\" type=\"string\" size=\"20\"/><Column id=\"BEFO_SSC_CD\" type=\"string\" size=\"12\"/><Column id=\"USED_YN\" type=\"string\" size=\"20\"/><Column id=\"SORT_ORDR\" type=\"string\" size=\"1\"/><Column id=\"REMK\" type=\"bigdecimal\" size=\"22\" prop=\"\"/><Column id=\"INPT_ID\" type=\"string\" size=\"2000\" prop=\"\"/><Column id=\"INPT_DTTM\" type=\"string\" size=\"20\" prop=\"\"/><Column id=\"INPT_IP\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_IP\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetailCheck", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SSC_NUMB\" type=\"string\" size=\"1\"/><Column id=\"HCL_CD\" type=\"string\" size=\"8\"/><Column id=\"SSC_CD\" type=\"string\" size=\"8\"/><Column id=\"SSC_CD_KORN_NM\" type=\"string\" size=\"6\"/><Column id=\"SSC_CD_ENGL_NM\" type=\"string\" size=\"100\"/><Column id=\"ABBR_KORN_NM\" type=\"string\" size=\"100\"/><Column id=\"ABBR_ENGL_NM\" type=\"string\" size=\"100\"/><Column id=\"GRP_CD_1\" type=\"string\" size=\"100\"/><Column id=\"GRP_CD_2\" type=\"string\" size=\"20\"/><Column id=\"GRP_CD_3\" type=\"string\" size=\"20\"/><Column id=\"GRP_CD_4\" type=\"string\" size=\"20\"/><Column id=\"GRP_CD_5\" type=\"string\" size=\"20\"/><Column id=\"GRP_CD_6\" type=\"string\" size=\"20\"/><Column id=\"GRP_CD_7\" type=\"string\" size=\"20\"/><Column id=\"GRP_CD_8\" type=\"string\" size=\"20\"/><Column id=\"GRP_CD_9\" type=\"string\" size=\"20\"/><Column id=\"BEFO_HCL_CD\" type=\"string\" size=\"20\"/><Column id=\"BEFO_SSC_CD\" type=\"string\" size=\"12\"/><Column id=\"USED_YN\" type=\"string\" size=\"20\"/><Column id=\"SORT_ORDR\" type=\"string\" size=\"1\"/><Column id=\"REMK\" type=\"bigdecimal\" size=\"22\" prop=\"\"/><Column id=\"INPT_ID\" type=\"string\" size=\"2000\" prop=\"\"/><Column id=\"INPT_DTTM\" type=\"string\" size=\"20\" prop=\"\"/><Column id=\"INPT_IP\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_IP\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetailResult", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Static("staCompany","0","12","98","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("회사구분");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCompany","staCompany:0","12","150","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_innerdataset("gdsCompany");
            obj.set_codecolumn("SSC_CD");
            obj.set_datacolumn("SSC_CD_KORN_NM");
            obj.set_text("알림");
            obj.set_value("INF");
            obj.set_index("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCd","cboCompany:0","12","98","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("대분류코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCd","staCd:0","12","111","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCdNm","edtCd:0","12","110","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("대분류코드명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCdNm","staCdNm:0","12","198","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10","48","28","25",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","50","397","43",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("대분류코드");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","staTitle00:0","397",null,null,"308",null,null,"250",null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsMaster");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.getSetter("uFunction").set("filter,sort,!colfix,!initial,find");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/><Column size=\"220\"/><Column size=\"40\"/></Columns><Rows><Row size=\"62\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"코드\" cssclass=\"essential\"/><Cell col=\"1\" text=\"코드명(한글)\" cssclass=\"essential\"/><Cell col=\"2\" text=\"사용&#13;&#10;여부\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:dataset.getRowType(currow)==2?&apos;editcontrol&apos;:&apos;normal&apos;\" edittype=\"expr:dataset.getRowType(currow)==2?&apos;text&apos;:&apos;none&apos;\" text=\"bind:HCL_CD\" textAlign=\"center\" verticalAlign=\"middle\" editmaxlength=\"4\" editinputtype=\"english,digit\" editinputmode=\"upper\" editimemode=\"alpha\"/><Cell col=\"1\" displaytype=\"editcontrol\" edittype=\"text\" text=\"bind:HCL_CD_KORN_NM\" textAlign=\"left\" verticalAlign=\"middle\" editmaxlength=\"30\" editimemode=\"hangul\"/><Cell col=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:USED_YN\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","grdMaster:0","397","43",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("대분류코드 상세");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divMaster","0","staTitle01:0","397","265",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Static("staBg01","0","33",null,"34","0",null,null,null,null,null,this.divMaster.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divMaster.addChild(obj.name, obj);

            obj = new Static("staBg02","0","staBg01:-1",null,"34","0",null,null,null,null,null,this.divMaster.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divMaster.addChild(obj.name, obj);

            obj = new Static("staBg03","0","staBg02:-1",null,"34","0",null,null,null,null,null,this.divMaster.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divMaster.addChild(obj.name, obj);

            obj = new Static("staBg00","0","0",null,"34","0",null,null,null,null,null,this.divMaster.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divMaster.addChild(obj.name, obj);

            obj = new Static("staBg04","0","staBg03:-1",null,"100","0",null,null,null,null,null,this.divMaster.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divMaster.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","0","108","34",null,null,null,null,null,null,this.divMaster.form);
            obj.set_taborder("10");
            obj.set_text("코드");
            obj.set_cssclass("sta_WF_Label");
            this.divMaster.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","staTitle00:-1","108","34",null,null,null,null,null,null,this.divMaster.form);
            obj.set_taborder("11");
            obj.set_text("코드명(한글)");
            obj.set_cssclass("sta_WF_Label");
            this.divMaster.addChild(obj.name, obj);

            obj = new Static("staTitle02","0","staTitle01:-1","108","34",null,null,null,null,null,null,this.divMaster.form);
            obj.set_taborder("12");
            obj.set_text("코드명(영문)");
            obj.set_cssclass("sta_WF_Label");
            this.divMaster.addChild(obj.name, obj);

            obj = new Static("staTitle03","0","staTitle02:-1","108","34",null,null,null,null,null,null,this.divMaster.form);
            obj.set_taborder("13");
            obj.set_text("상위코드");
            obj.set_cssclass("sta_WF_Label");
            this.divMaster.addChild(obj.name, obj);

            obj = new Static("staTitle04","0","staTitle03:-1","108","100",null,null,null,null,null,null,this.divMaster.form);
            obj.set_taborder("14");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_Label");
            this.divMaster.addChild(obj.name, obj);

            obj = new Edit("edtCd","112","5",null,"24","5",null,null,null,null,null,this.divMaster.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_maxlength("20");
            obj.set_inputtype("english,digit");
            obj.set_inputmode("upper");
            obj.set_cssclass("essential");
            obj.set_imemode("alpha");
            this.divMaster.addChild(obj.name, obj);

            obj = new Edit("edtCdNm","112","edtCd:9",null,"24","5",null,null,null,null,null,this.divMaster.form);
            obj.set_taborder("1");
            obj.set_cssclass("essential");
            obj.set_maxlength("30");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_imemode("hangul");
            this.divMaster.addChild(obj.name, obj);

            obj = new Edit("edtCdNmEng","112","edtCdNm:9",null,"24","5",null,null,null,null,null,this.divMaster.form);
            obj.set_taborder("2");
            obj.set_maxlength("30");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_inputtype("english,number,sign,space,symbol");
            obj.set_imemode("alpha");
            this.divMaster.addChild(obj.name, obj);

            obj = new Edit("edtHiMcaCd","112","edtCdNmEng:9",null,"24","5",null,null,null,null,null,this.divMaster.form);
            obj.set_taborder("3");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_maxlength("4");
            obj.set_cssclass("compulsory");
            obj.set_imemode("alpha");
            this.divMaster.addChild(obj.name, obj);

            obj = new TextArea("txaRemark","112","edtHiMcaCd:9",null,"90","5",null,null,null,null,null,this.divMaster.form);
            obj.set_taborder("4");
            obj.set_maxlength("1000");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_imemode("hangul");
            this.divMaster.addChild(obj.name, obj);

            obj = new Static("staBg05","0","staBg04:-1",null,"34","0",null,null,null,null,null,this.divMaster.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divMaster.addChild(obj.name, obj);

            obj = new Static("staTitle05","0","staTitle04:-1","108","34",null,null,null,null,null,null,this.divMaster.form);
            obj.set_taborder("16");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label");
            this.divMaster.addChild(obj.name, obj);

            obj = new CheckBox("chkUseYn","112","txaRemark:9","150","24",null,null,null,null,null,null,this.divMaster.form);
            obj.set_taborder("5");
            obj.set_value("true");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_text("");
            this.divMaster.addChild(obj.name, obj);

            obj = new Static("staTitle02","staTitle00:20","divSearch:0",null,"43","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("소분류코드");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Div("divCmmnBtn",null,"divSearch:10","400","28","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"0","72","28","0",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("1");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Delete");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","72","28","btnDel:3",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("0");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Add");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Grid("grdDetail","grdMaster:20","staTitle02:0",null,null,"20","308",null,null,"250",null,this);
            obj.set_taborder("7");
            obj.set_binddataset("dsDetail");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.getSetter("uFunction").set("filter,sort,!colfix,!initial,find");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"129\"/><Column size=\"40\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"40\"/></Columns><Rows><Row size=\"62\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"코드\" cssclass=\"essential\"/><Cell col=\"1\" text=\"코드명\" cssclass=\"essential\"/><Cell col=\"2\" text=\"정렬&#13;&#10;순서\" cssclass=\"essential\"/><Cell col=\"3\" text=\"그룹1\"/><Cell col=\"4\" text=\"그룹2\"/><Cell col=\"5\" text=\"사용&#13;&#10;여부\"/></Band><Band id=\"body\"><Cell editfilter=\"alpha,digit\" text=\"bind:SSC_CD\" textAlign=\"left\" edittype=\"text\" editmaxlength=\"8\" editinputtype=\"digit,english\" editinputmode=\"upper\" displaytype=\"editcontrol\" editimemode=\"alpha\"/><Cell col=\"1\" text=\"bind:SSC_CD_KORN_NM\" textAlign=\"left\" verticalAlign=\"middle\" edittype=\"text\" displaytype=\"editcontrol\" editmaxlength=\"30\" editimemode=\"hangul\"/><Cell col=\"2\" text=\"bind:SORT_ORDR\" displaytype=\"editcontrol\" edittype=\"text\" editmaxlength=\"2\" editinputtype=\"digit\"/><Cell col=\"3\" text=\"bind:GRP_CD_1\" displaytype=\"editcontrol\" edittype=\"text\" editmaxlength=\"10\" editimemode=\"alpha\"/><Cell col=\"4\" text=\"bind:GRP_CD_2\" displaytype=\"editcontrol\" edittype=\"text\" editmaxlength=\"10\" editimemode=\"alpha\"/><Cell col=\"5\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:USED_YN\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle03","grdMaster:20","grdDetail:0",null,"43","20",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("소분류코드 상세");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divSub","divMaster:20","staTitle03:0",null,"265","20",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Static("staBg00","0","0",null,"34","0",null,null,null,null,null,this.divSub.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staBg01","0","33",null,"34","0",null,null,null,null,null,this.divSub.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staBg02","0","66",null,"34","0",null,null,null,null,null,this.divSub.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staBg03","0","staBg02:-1",null,"34","0",null,null,null,null,null,this.divSub.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staBg04","0","staBg03:-1",null,"34","0",null,null,null,null,null,this.divSub.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staBg05","0","staBg04:-1",null,"34","0",null,null,null,null,null,this.divSub.form);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staBg06","0","staBg05:-1",null,"34","0",null,null,null,null,null,this.divSub.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staBg07","0","staBg06:-1",null,"34","0",null,null,null,null,null,this.divSub.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","0","89","34",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("26");
            obj.set_text("코드");
            obj.set_cssclass("sta_WF_Label");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","staTitle00:-1","89","34",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("27");
            obj.set_text("약어명");
            obj.set_cssclass("sta_WF_Label");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staTitle02","0","staTitle01:-1","89","34",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("28");
            obj.set_text("영문명");
            obj.set_cssclass("sta_WF_Label");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staTitle03","0","staTitle02:-1","89","34",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("29");
            obj.set_text("그룹1");
            obj.set_cssclass("sta_WF_Label");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staTitle04","0","staTitle03:-1","89","34",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("30");
            obj.set_text("그룹4");
            obj.set_cssclass("sta_WF_Label");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staTitle05","0","staTitle04:-1","89","34",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("31");
            obj.set_text("그룹7");
            obj.set_cssclass("sta_WF_Label");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staTitle06","0","staTitle05:-1","89","34",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("32");
            obj.set_text("이전코드");
            obj.set_cssclass("sta_WF_Label");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staTitle07","0","staTitle06:-1","89","34",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("33");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_Label");
            this.divSub.addChild(obj.name, obj);

            obj = new Edit("edtSoCd","93","5","107","24",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("0");
            obj.set_maxlength("8");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_cssclass("essential");
            obj.set_inputtype("digit,english");
            obj.set_inputmode("upper");
            obj.set_imemode("alpha");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staTitle08","edtSoCd:4","0","89","34",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("34");
            obj.set_text("코드명");
            obj.set_cssclass("sta_WF_Label");
            this.divSub.addChild(obj.name, obj);

            obj = new Edit("edtSoCdNm","staTitle08:4","5",null,"24","5",null,null,null,null,null,this.divSub.form);
            obj.set_taborder("1");
            obj.set_cssclass("essential");
            obj.set_maxlength("30");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_imemode("hangul");
            this.divSub.addChild(obj.name, obj);

            obj = new Edit("edtSoShortCdNm","93","edtSoCd:9","311","24",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("2");
            obj.set_maxlength("100");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_inputtype("english,digit,space,symbol");
            obj.set_imemode("hangul");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staTitle12","edtSoShortCdNm:4","33","89","34",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("35");
            obj.set_text("영문약어명");
            obj.set_cssclass("sta_WF_Label");
            this.divSub.addChild(obj.name, obj);

            obj = new Edit("edtSoEngShotNm","staTitle12:4","edtSoCdNm:9",null,"24","5",null,null,null,null,null,this.divSub.form);
            obj.set_taborder("3");
            obj.set_maxlength("100");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_inputtype("number,english,dot,sign,symbol,space");
            obj.set_imemode("alpha");
            this.divSub.addChild(obj.name, obj);

            obj = new Edit("edtSoEngNm","staTitle02:4","edtSoShortCdNm:9","311","24",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("4");
            obj.set_maxlength("100");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_inputtype("english,symbol,digit,space");
            obj.set_imemode("alpha");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staTitle13","edtSoEngNm:4","66","89","34",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("36");
            obj.set_text("정렬순서");
            obj.set_cssclass("sta_WF_Label");
            this.divSub.addChild(obj.name, obj);

            obj = new Edit("edtSoDisSeq","staTitle13:4","edtSoEngShotNm:9",null,"24","5",null,null,null,null,null,this.divSub.form);
            obj.set_taborder("5");
            obj.set_cssclass("essential");
            obj.set_maxlength("5");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_inputtype("digit");
            this.divSub.addChild(obj.name, obj);

            obj = new Edit("edtSoGroup1","staTitle03:4","104","107","24",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("6");
            obj.set_maxlength("10");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_inputmode("normal");
            obj.set_imemode("alpha");
            this.divSub.addChild(obj.name, obj);

            obj = new Edit("edtSoGroup4","staTitle04:4","edtSoGroup1:9","107","24",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("9");
            obj.set_maxlength("10");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_inputmode("normal");
            obj.set_imemode("alpha");
            this.divSub.addChild(obj.name, obj);

            obj = new Edit("edtSoGroup7","staTitle05:4","edtSoGroup4:9","107","24",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("12");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_maxlength("10");
            obj.set_inputmode("normal");
            obj.set_imemode("alpha");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staTitle09","edtSoGroup1:4","99","89","34",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("37");
            obj.set_text("그룹2");
            obj.set_cssclass("sta_WF_Label");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staTitle10","edtSoGroup4:4","132","89","34",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("38");
            obj.set_text("그룹5");
            obj.set_cssclass("sta_WF_Label");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staTitle11","edtSoGroup7:4","165","89","34",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("39");
            obj.set_text("그룹8");
            obj.set_cssclass("sta_WF_Label");
            this.divSub.addChild(obj.name, obj);

            obj = new Edit("edtSoGroup2","staTitle09:4","edtSoEngNm:9","107","24",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("7");
            obj.set_maxlength("10");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_inputmode("normal");
            obj.set_imemode("alpha");
            this.divSub.addChild(obj.name, obj);

            obj = new Edit("edtSoGroup5","staTitle10:4","edtSoGroup2:9","107","24",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("10");
            obj.set_maxlength("10");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_inputmode("normal");
            obj.set_imemode("alpha");
            this.divSub.addChild(obj.name, obj);

            obj = new Edit("edtSoGroup8","staTitle11:4","edtSoGroup5:9","107","24",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("13");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_maxlength("10");
            obj.set_inputmode("normal");
            obj.set_imemode("alpha");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staTitle14","edtSoGroup2:4","99","89","34",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("40");
            obj.set_text("그룹3");
            obj.set_cssclass("sta_WF_Label");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staTitle15","edtSoGroup5:4","132","89","34",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("41");
            obj.set_text("그룹6");
            obj.set_cssclass("sta_WF_Label");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staTitle16","edtSoGroup8:4","165","89","34",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("42");
            obj.set_text("그룹9");
            obj.set_cssclass("sta_WF_Label");
            this.divSub.addChild(obj.name, obj);

            obj = new Edit("edtSoGroup3","staTitle14:4","edtSoDisSeq:9",null,"24","5",null,null,null,null,null,this.divSub.form);
            obj.set_taborder("8");
            obj.set_maxlength("10");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_inputmode("normal");
            obj.set_imemode("alpha");
            this.divSub.addChild(obj.name, obj);

            obj = new Edit("edtSoGroup6","staTitle15:4","edtSoGroup3:9",null,"24","5",null,null,null,null,null,this.divSub.form);
            obj.set_taborder("11");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_maxlength("10");
            obj.set_inputmode("normal");
            obj.set_imemode("alpha");
            this.divSub.addChild(obj.name, obj);

            obj = new Edit("edtSoGroup9","staTitle16:4","edtSoGroup6:9",null,"24","5",null,null,null,null,null,this.divSub.form);
            obj.set_taborder("14");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_maxlength("10");
            obj.set_inputmode("normal");
            obj.set_imemode("alpha");
            this.divSub.addChild(obj.name, obj);

            obj = new Edit("edtBeforeScaCd","staTitle06:4","edtSoGroup7:9","311","24",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("15");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_maxlength("8");
            obj.set_imemode("alpha");
            this.divSub.addChild(obj.name, obj);

            obj = new TextArea("edtRemark","staTitle07:4","edtBeforeScaCd:9",null,"24","5",null,null,null,null,null,this.divSub.form);
            obj.set_taborder("17");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_maxlength("1000");
            obj.set_imemode("hangul");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staTitle17","edtBeforeScaCd:4","198","89","34",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("43");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label");
            this.divSub.addChild(obj.name, obj);

            obj = new CheckBox("chkSoUseYn","staTitle17:4","edtSoGroup9:9","108","24",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("16");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.divSub.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMaster.form
            obj = new Layout("default","",0,0,this.divMaster.form,function(p){});
            this.divMaster.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCmmnBtn.form
            obj = new Layout("default","",0,0,this.divCmmnBtn.form,function(p){});
            this.divCmmnBtn.form.addLayout(obj.name, obj);

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

            obj = new BindItem("item2","divMaster.form.edtCd","value","dsMaster","HCL_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divMaster.form.edtCdNm","value","dsMaster","HCL_CD_KORN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divMaster.form.edtCdNmEng","value","dsMaster","HCL_CD_ENGL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divMaster.form.edtHiMcaCd","value","dsMaster","HIPO_HCL_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divMaster.form.txaRemark","value","dsMaster","REMK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divMaster.form.chkUseYn","value","dsMaster","USED_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSub.form.edtSoCd","value","dsDetail","SSC_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSub.form.edtSoCdNm","value","dsDetail","SSC_CD_KORN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSub.form.edtSoShortCdNm","value","dsDetail","ABBR_KORN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSub.form.edtSoEngShotNm","value","dsDetail","ABBR_ENGL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divSub.form.edtSoEngNm","value","dsDetail","SSC_CD_ENGL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSub.form.edtSoDisSeq","value","dsDetail","SORT_ORDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divSub.form.edtSoGroup1","value","dsDetail","GRP_CD_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divSub.form.edtSoGroup4","value","dsDetail","GRP_CD_4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divSub.form.edtSoGroup7","value","dsDetail","GRP_CD_7");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divSub.form.edtSoGroup2","value","dsDetail","GRP_CD_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divSub.form.edtSoGroup5","value","dsDetail","GRP_CD_5");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divSub.form.edtSoGroup8","value","dsDetail","GRP_CD_8");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divSub.form.edtSoGroup3","value","dsDetail","GRP_CD_3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divSub.form.edtSoGroup6","value","dsDetail","GRP_CD_6");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divSub.form.edtSoGroup9","value","dsDetail","GRP_CD_9");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divSub.form.edtBeforeScaCd","value","dsDetail","BEFO_SSC_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divSub.form.chkSoUseYn","value","dsDetail","USED_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divSub.form.edtRemark","value","dsDetail","REMK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divSearch.form.staCompany","value","dsCond","MSGE_FLAG_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("codeMgFm.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	codeMgFm.xfdl
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

        	// 버튼 권한 제어
        	this.gfnSetCommBtn(this.divCmmnBtn);

        	var arrComp = [this.divSearch.form.cboCompany];
        	this.gfnSetAuthorityCompany(arrComp);

        	this.dsCond.setColumn(0, "COMPANY_CD", this.gfnGetUserInfo("COMP"));
        	this.dsCondsub.setColumn(0, "COMPANY_CD", this.gfnGetUserInfo("COMP"));
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	if (this.gfnDsIsUpdated(this.dsMaster)||this.gfnDsIsUpdated(this.dsDetail)) {
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
        	if(this.gfnDsIsUpdated(this.dsDetail)){
        		// {0}을(를) 저장 후 작업을 진행하십시오.
        		this.gfnAlert("msg.err.updata", ["소분류코드"]);
        		return;
        	}

        	var nRow = this.dsMaster.addRow();
        	var compCd = this.dsMaster.getColumn(nRow-1, "COMPANY_CD");
        	if(!compCd) compCd = this.divSearch.form.cboCompany.value;

        	this.dsMaster.setColumn(nRow, "COMPANY_CD", compCd);
        	this.dsMaster.setColumn(nRow, "USED_YN", "1");
        	this.grdMaster.setCellPos(0);
        	this.grdMaster.showEditor(true);
        };

        //삭제
        this.cfnDel = function ()
        {
        	if (this.dsMaster.rowcount == 0) {
        		return;
        	}

        	// 대분류에 포함된 소분류코드가 존재할 경우
        	if (this.dsDetail.rowcount > 0) {
        		// {0}을/를 삭제하신 후 {1}을/를 삭제하시기 바랍니다.
        		this.gfnAlert("msg.delete.input", ["소분류코드", "대분류코드"]);
        		return;
        	}

        	if(this.gfnDsIsUpdated(this.dsDetail)){
        		// {0}을(를) 저장 후 작업을 진행하십시오.
        		this.gfnAlert("msg.err.updata", ["소분류코드"]);
        		return;
        	}

        	this.dsMaster.deleteRow(this.dsMaster.rowposition);
        };

        //저장
        this.cfnSave = function ()
        {
        	// 변경된 정보없으면 리턴
        	if (this.gfnDsIsUpdated(this.dsMaster) == false && this.gfnDsIsUpdated(this.dsDetail) == false) {
        		// 저장할 데이터가 없습니다.
        		this.gfnAlert("msg.save.nochange");
        		return;
        	}

        	if( this.fnMasterValid() && this.fnDetailValid()){
        		// 서버 중복 체크
        		this.fnTranCheckCommCode();
        	}
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //master 조회
        this.fnTranSearch = function ()
        {
        	this.dsCond.setColumn(0, "COMPANY_CD", this.divSearch.form.cboCompany.value);
        	// 조회-대분류
        	this.dsMaster.clearData();

        	var strSvcId    = "SearchCommCodeList";
        	var strSvcUrl   = "SearchCommCodeList.do";
        	var inData      = "dsCond=dsCond";
        	var outData     = "dsMaster=dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        //sub 조회
        this.fnTranSearchSub = function ()
        {
        	// 조회-소분류
        	this.dsDetail.clearData();
        	this.dsCondsub.setColumn(0, "COMPANY_CD", this.divSearch.form.cboCompany.value);
        	var strSvcId    = "SearchPopCommCodeList";
        	var strSvcUrl   = "SearchPopCommCodeList.do";
        	var inData      = "dsCond=dsCondsub";
        	var outData     = "dsDetail=dsList";
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
        	var strSvcId    = "saveComCode";
        	var strSvcUrl   = "saveComCode.do";
        	var inData      = "dsMaster=dsMaster:U dsDetail=dsDetail:U";
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

        //서버중복체크
        this.fnTranCheckCommCode = function ()
        {
        	var i;
        	var nAddRow;

        	// dsMaster 신규 데이터 건만 추출한다.
        	this.dsMasterCheck.clearData();
        	for(i = 0; i < this.dsMaster.getRowCount(); i++) {
        		if(this.dsMaster.getRowType(i) == Dataset.ROWTYPE_INSERT) {
        			nAddRow = this.dsMasterCheck.addRow();

        			this.dsMasterCheck.copyRow(nAddRow, this.dsMaster, i);
        		}
        	}

        	//dsDetail 신규 데이터 건만 추출한다.
        	this.dsDetailCheck.clearData();
        	for(i = 0; i < this.dsDetail.getRowCount(); i++) {
        		if(this.dsDetail.getRowType(i) == Dataset.ROWTYPE_INSERT) {
        			nAddRow = this.dsDetailCheck.addRow();

        			this.dsDetailCheck.copyRow(nAddRow, this.dsDetail, i);
        		}
        	}
        	// 신규 데이터가 있는 경우
        	if(this.dsMasterCheck.getRowCount() > 0 || this.dsDetailCheck.getRowCount() > 0) {
        		// 데이터가 중복이 있는 지 체크하는 서비스를 호출한다.
        		var strSvcId    = "checkCommonCode";
        		var strSvcUrl   = "checkCommonCode.do";
        		var inData      = "dsMasterCheck=dsMasterCheck dsDetailCheck=dsDetailCheck";
        		var outData     = "dsMasterResult=dsMasterResult dsDetailResult=dsDetailResult";
        		var strArg      = "";
        		var callBackFnc = "fnCallback";

        		this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        							strSvcUrl , 	// trabsaction을 요청할 주소
        							inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        							outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        							strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        							callBackFnc); 	// 통신방법 정의 [생략가능]
        	}else {
        		//저장하시겠습니까?
        		this.gfnAlert("confirm.save", [""], "beforeSaveTran", "fnMsgCallback");
        	}
        };
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //transaction
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "SearchCommCodeList":
        			if(this.fvRowPositionMain>-1) {
        				this.dsMaster.set_rowposition(this.fvRowPositionMain);
        				this.fnSubSearch(); //소분류조회
        			}
        			break;
        		case "SearchPopCommCodeList":
        			if(this.fvRowPositionSub>-1) this.dsDetail.set_rowposition(this.fvRowPositionSub);
        			break;
        		case "checkCommonCode":
        			this.fnAfterCheck();
        			break;
        		case "saveComCode":
        			this.fvRowPositionMain = this.dsMaster.rowposition;
        			if(this.fvRowPositionMain>-1)  this.fnSubSearch(); //소분류조회
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
        //소분류 조회 조건 세팅
        this.fnSubSearch = function ()
        {
        	this.dsCondsub.clearData();
        	var nRow = this.dsCondsub.addRow();

        	var compCd = this.dsCondsub.getColumn(nRow-1, "COMPANY_CD");
        	if(!compCd) compCd = this.divSearch.form.cboCompany.value;

        	this.dsCondsub.setColumn(nRow, "COMPANY_CD", compCd);
        	if( this.dsMaster.rowcount > 0 ){
        		this.dsCondsub.setColumn(nRow, 'HCL_CD', this.dsMaster.getColumn(this.dsMaster.rowposition, 'HCL_CD'));
        	}else{
        		this.dsCondsub.setColumn(nRow, 'HCL_CD', "");
        	}
        	this.fnTranSearchSub();
        };

        //마스터 - validation
        this.fnMasterValid = function ()
        {
        	// 정합성 체크
        	this.gfnClearValidation(this.dsMaster);
        	this.gfnSetValidation(this.dsMaster, "HCL_CD", "대분류 코드"	, "required");
        	this.gfnSetValidation(this.dsMaster, "HCL_CD_KORN_NM", "대분류 코드명(한글)"	, "required");

        	// Dataset의 변경된 Row Validation check
        	if (this.gfnValidation(this.grdMaster, "U") == false) return false;
        	else return true;
        };

        //디테일 - validation
        this.fnDetailValid = function ()
        {
        	// 정합성 체크
        	this.gfnClearValidation(this.dsDetail);

        	this.gfnSetValidation(this.dsDetail, "SSC_CD", "소분류 코드"	, "required");
        	this.gfnSetValidation(this.dsDetail, "SSC_CD_KORN_NM", "소분류 코드명"	, "required");
        	this.gfnSetValidation(this.dsDetail, "SORT_ORDR", "소분류 정렬순서"	, "required");
        	this.gfnSetValidation(this.dsDetail, "USED_YN", "소분류 사용여부"	, "required");

        	// Dataset의 변경된 Row Validation check
        	if (this.gfnValidation(this.grdDetail, "U") == false) return;
        	else return true;
        };

        //아이디중복체크 후
        //아이디 중복 체크
        this.fnAfterCheck = function ()
        {
        	//코드가 존재하는 지 여부 체크
        	var nMasterCnt = this.dsMasterResult.getRowCount();
        	var nDetailCnt = this.dsDetailResult.getRowCount();

        	// 중복되는 건이 없는 경우 저장 서비스 호출
        	if(nMasterCnt == 0 && nDetailCnt==0) {
        		//저장하시겠습니까?
        		this.gfnAlert("confirm.save", [""], "beforeSaveTran", "fnMsgCallback");
        	}
        	else {
        		var sDupCode="";
        		var sTemp= "";
        		// 중복된 건이 있는 경우 메시지 출력
        		if( nMasterCnt > 0 ){
        			var sDupCode;
        			var sTemp;

        			for(i = 0; i < nMasterCnt; i++) {
        				sTemp = this.dsMasterResult.getColumn(i, "HCL_CD");

        				if(i == 0) {
        					sDupCode = "[" + sTemp;
        				}
        				else {
        					sDupCode += sTemp;
        				}

        				if(i == this.dsMasterResult.getRowCount() - 1) {
        					sDupCode += "]";
        				}
        				else {
        					sDupCode += ",";
        				}
        			}
        			// 중복된 메시지가 존재합니다.
        			this.gfnAlert("msg.exist.code", ["중복된 대분류코드", sDupCode]);
        			return;
        		}else{
        			for(i = 0; i < nDetailCnt; i++) {
        				sTemp = this.dsDetailResult.getColumn(i, "SSC_CD");

        				if(i == 0) {
        					sDupCode = "[" + sTemp;
        				}
        				else {
        					sDupCode += sTemp;
        				}

        				if(i == this.dsDetailResult.getRowCount() - 1) {
        					sDupCode += "]";
        				}
        				else {
        					sDupCode += ",";
        				}
        			}
        			// 중복된 메시지가 존재합니다.
        			this.gfnAlert("msg.exist.code", ["중복된 소분류코드", sDupCode]);
        			return;
        		}
        	}
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        //조회
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.cfnSearch(); //조회
        };

        //소분류 - 행추가
        this.divCmmnBtn_btnAdd_onclick = function(obj,e)
        {
        	if (this.dsMaster.rowcount == 0) {
        		return;
        	}

        	if (this.gfnDsIsUpdated(this.dsMaster)) {
        		// {0}을(를) 저장 후 작업을 진행하십시오.
        		this.gfnAlert("msg.err.updata", ["대분류코드"]);
        		return;
        	}

        	var nRow = this.dsDetail.addRow();
        	var compCd = this.dsDetail.getColumn(nRow-1, "COMPANY_CD");
        	if(!compCd) compCd = this.divSearch.form.cboCompany.value;

        	this.dsDetail.setColumn(nRow, "COMPANY_CD", compCd);
        	this.dsDetail.setColumn(nRow, 'HCL_CD', this.dsMaster.getColumn(this.dsMaster.rowposition, 'HCL_CD'));
        	this.dsDetail.setColumn(nRow, 'USED_YN', '1');
        	this.grdDetail.setCellPos(0);
        	this.grdDetail.showEditor(true);
        	//this.divSub.form.edtSoCd.setFocus();
        };

        //소분류 - 행삭제
        this.divCmmnBtn_btnDel_onclick = function(obj,e)
        {
        	if (this.dsMaster.rowcount == 0 || this.dsDetail.rowcount == 0) {
        		return;
        	}

        	if (this.gfnDsIsUpdated(this.dsMaster)) {
        		// {0}을(를) 저장 후 작업을 진행하십시오.
        		this.gfnAlert("msg.err.updata", ["대분류코드"]);
        		return;
        	}

        	this.dsDetail.deleteRow(this.dsDetail.rowposition);
        };

        //마스터 - 컬럼제인지
        this.dsMaster_cancolumnchange = function(obj,e)
        {
        	if( e.columnid=="HCL_CD"){
        		if(this.gfnIsNull(e.newvalue)) return;

        		var nRow = this.dsMaster.findRow("HCL_CD", e.newvalue);
        		if( nRow > -1){
        			this.gfnAlert("msg.exist", ["입력하신 대분류코드"],"validHclCd","fnMsgCallback");
        			return;
        		}
        	}
        };

        //마스터 - 로우포스체인지
        this.dsMaster_canrowposchange = function(obj,e)
        {
        	if (e.newrow < 0) {
        		return true;
        	}

        	this.dsMaster.uNewRow = e.newrow;
        	this.dsMaster.uOldRow = e.oldrow;

        	// 마스터 row변경전 상세정보 저장유무 확인
        	if (this.gfnDsIsUpdated(this.dsDetail)) {
        		//해당 row의 위치를 이동하면 변경된 데이터가 사라집니다. \n계속 진행 하시겠습니까?
        		this.gfnAlert("confirm.before.moveropos", [""], "beforeRowPosChange", "fnMsgCallback");
        		return false;
        	}
        };

        //마스터 - 로우포스체인지
        this.dsMaster_onrowposchanged = function(obj,e)
        {
        	//공통코드 입력 가능
        	if(this.dsMaster.getRowType(e.newrow) == Dataset.ROWTYPE_INSERT){
        		this.divMaster.form.edtCd.set_readonly(false);
        	}else{
        		this.divMaster.form.edtCd.set_readonly(true);
        	}
        	this.fnSubSearch();
        };

        //디테일 - 컬럼체인지
        this.dsDetail_cancolumnchange = function(obj,e)
        {
        	if (this.gfnDsIsUpdated(this.dsMaster)) {
        		// {0}을(를) 저장 후 작업을 진행하십시오.
        		this.gfnAlert("msg.err.updata", ["대분류코드"]);
        		return;
        	}

        	if( e.columnid=="SSC_CD"){
        		if(this.gfnIsNull(e.newvalue)) return;

        		var nRow = this.dsDetail.findRow("SSC_CD", e.newvalue);
        		if( nRow > -1){
        			this.gfnAlert("msg.exist", ["입력하신 소분류 코드"],"validSscCd","fnMsgCallback");
        			return;
        		}
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.divCmmnBtn.form.btnDel.addEventHandler("onclick",this.divCmmnBtn_btnDel_onclick,this);
            this.divCmmnBtn.form.btnAdd.addEventHandler("onclick",this.divCmmnBtn_btnAdd_onclick,this);
            this.dsMaster.addEventHandler("canrowposchange",this.dsMaster_canrowposchange,this);
            this.dsMaster.addEventHandler("cancolumnchange",this.dsMaster_cancolumnchange,this);
            this.dsMaster.addEventHandler("onrowposchanged",this.dsMaster_onrowposchanged,this);
            this.dsDetail.addEventHandler("cancolumnchange",this.dsDetail_cancolumnchange,this);
        };
        this.loadIncludeScript("codeMgFm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
