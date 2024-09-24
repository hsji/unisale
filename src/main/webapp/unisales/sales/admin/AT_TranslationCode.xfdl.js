(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AT_TranslationCode");
            this.set_titletext("번역코드목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTranslationCodeList", this);
            obj._setContents("<ColumnInfo><Column id=\"RN\" type=\"STRING\" size=\"256\"/><Column id=\"CM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION_JAP\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION_ENG\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1_JAP\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2_JAP\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3_JAP\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4_JAP\" type=\"STRING\" size=\"256\"/><Column id=\"USE_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"TRANS_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTranslationCodeListCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTranslationCodeExcelList", this);
            obj._setContents("<ColumnInfo><Column id=\"CM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION_JAP\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION_ENG\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1_JAP\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2_JAP\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3_JAP\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4_JAP\" type=\"STRING\" size=\"256\"/><Column id=\"USE_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"TRANS_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_TransFlag", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION_JAP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CAPTION\">전체</Col><Col id=\"CAPTION_JAP\">全体</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CAPTION\">대상</Col><Col id=\"CAPTION_JAP\">対象</Col></Row><Row><Col id=\"CAPTION\">미대상</Col><Col id=\"CODE\">0</Col><Col id=\"CAPTION_JAP\">未対象</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_TranslationKind", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_rdo_TransFlag", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_Search","8","8",null,"40","8",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SchList");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_TransFlag","8","9","58","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_text("번역 대상");
            obj.getSetter("TL_SEQ").set("22626");
            this.div_Search.addChild(obj.name, obj);

            obj = new Combo("cmb_TransFlag","stc_TransFlag:8","9","127","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_cmm_TransFlag");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.getSetter("TL_FLAG").set("1");
            obj.set_text("대상");
            obj.set_value("1");
            obj.set_index("1");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("stc_TranslationKind","cmb_TransFlag:8","9","58","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_text("번역 여부");
            obj.getSetter("TL_SEQ").set("22602");
            this.div_Search.addChild(obj.name, obj);

            obj = new Combo("cmb_TranslationKind","stc_TranslationKind:8","9","127","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_cmm_TranslationKind");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("stc_CmCode","cmb_TranslationKind:8","9","58","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("9");
            obj.set_text("CM_CODE");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_Search.addChild(obj.name, obj);

            obj = new Edit("edt_CmCode","stc_CmCode:8","9","130","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("10");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("stc_TLData","edt_CmCode:8","9","58","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("0");
            obj.set_text("단어");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("22603");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_Search",null,"9","58","22","74",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_SchText");
            obj.getSetter("TL_SEQ").set("118");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_Save",null,"9","58","22","btn_Search:8",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_tran");
            obj.getSetter("TL_SEQ").set("115");
            this.div_Search.addChild(obj.name, obj);

            obj = new Edit("edt_TLData","stc_TLData:8","9","300","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("3");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_Excel","btn_Search:8","9","58","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("6");
            obj.set_text("Excel");
            obj.set_cssclass("btn_WF_Excel");
            this.div_Search.addChild(obj.name, obj);

            obj = new Div("div_paging","8",null,null,"24","24","10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_url("Common::COM_Paging.xfdl");
            this.addChild(obj.name, obj);

            obj = new Static("stc_TranslationListBg","8","58","800","31",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_POP_GroupBg");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_TranslationList","8","stc_TranslationListBg:0","800",null,null,"div_paging:8",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsTranslationCodeList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"CM_CODE\"/><Cell col=\"1\" text=\"CODE\"/><Cell col=\"2\" text=\"국문 코드명\" TL_SEQ=\"22629\"/><Cell col=\"3\" text=\"일문 코드명\" TL_SEQ=\"22630\"/><Cell col=\"4\" text=\"영문 코드명\" TL_SEQ=\"22631\"/></Band><Band id=\"body\"><Cell text=\"bind:CM_CODE\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:CODE\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:CAPTION\" textAlign=\"left\" tooltiptext=\"bind:CAPTION\"/><Cell col=\"3\" text=\"bind:CAPTION_JAP\" textAlign=\"left\" tooltiptext=\"bind:CAPTION_JAP\"/><Cell col=\"4\" text=\"bind:CAPTION_ENG\" textAlign=\"left\" tooltiptext=\"bind:CAPTION_ENG\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_TranslationExcelList","1370","58",null,null,"-1354","42",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_visible("false");
            obj.set_binddataset("dsTranslationCodeExcelList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"CM_CODE\"/><Cell col=\"1\" text=\"CODE\"/><Cell col=\"2\" text=\"국문 코드명\" TL_SEQ=\"22629\"/><Cell col=\"3\" text=\"일문 코드명\" TL_SEQ=\"22630\"/><Cell col=\"4\" text=\"영문 코드명\" TL_SEQ=\"22631\"/><Cell col=\"5\" text=\"사용여부\" TL_SEQ=\"669\"/><Cell col=\"6\" text=\"비고\" TL_SEQ=\"45\"/><Cell col=\"7\" text=\"등록일\" TL_SEQ=\"77\"/><Cell col=\"8\" text=\"등록자\" TL_SEQ=\"81\"/></Band><Band id=\"body\"><Cell text=\"bind:CM_CODE\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:CODE\"/><Cell col=\"2\" text=\"bind:CAPTION\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:CAPTION_JAP\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:CAPTION_ENG\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:USE_FLAG\" displaytype=\"combotext\" combodataset=\"ds_cmm_UseFlag\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" TL_FLAG=\"1\"/><Cell col=\"6\" text=\"bind:REMARK\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:INSERT_DATE\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"8\" text=\"bind:INSERT_EMP_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_TranslationListTit","16","66","152","15",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("코드목록");
            obj.set_cssclass("sta_POP_GroupTit");
            obj.getSetter("TL_SEQ").set("22628");
            this.addChild(obj.name, obj);

            obj = new Static("stc_TranslationListBg00","816","58",null,"31","8",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_POP_GroupBg");
            this.addChild(obj.name, obj);

            obj = new Div("div_InsertInfo","816",null,null,"22","8","div_paging:8",null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("stc_InsertEmpNm","6","0","80","22",null,null,null,null,null,null,this.div_InsertInfo.form);
            obj.set_taborder("0");
            obj.set_text("등록자");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("81");
            this.div_InsertInfo.addChild(obj.name, obj);

            obj = new Edit("edt_InsertEmpNm","94","0","130","22",null,null,null,null,null,null,this.div_InsertInfo.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.div_InsertInfo.addChild(obj.name, obj);

            obj = new Static("stc_InsertDate","232","0","80","22",null,null,null,null,null,null,this.div_InsertInfo.form);
            obj.set_taborder("2");
            obj.set_text("등록일");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("77");
            this.div_InsertInfo.addChild(obj.name, obj);

            obj = new Calendar("cal_InsertDate","320","0","128","22",null,null,null,null,null,null,this.div_InsertInfo.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_InsertInfo.addChild(obj.name, obj);

            obj = new Div("div_TranslationDet","grd_TranslationList:8","stc_TranslationListBg00:0",null,null,"8","div_InsertInfo:8",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_TLSeq","6","9","80","22",null,null,null,null,null,null,this.div_TranslationDet.form);
            obj.set_taborder("0");
            obj.set_text("CM_CODE");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_TranslationDet.addChild(obj.name, obj);

            obj = new Edit("edt_CmCode","stc_TLSeq:8","9",null,"22","8",null,null,null,null,null,this.div_TranslationDet.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.div_TranslationDet.addChild(obj.name, obj);

            obj = new Static("stc_Remark","6","429","80",null,null,"0",null,null,null,null,this.div_TranslationDet.form);
            obj.set_taborder("2");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("45");
            this.div_TranslationDet.addChild(obj.name, obj);

            obj = new TextArea("ta_Remark","stc_Remark:8","429",null,null,"8","0",null,null,null,null,this.div_TranslationDet.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.div_TranslationDet.addChild(obj.name, obj);

            obj = new Static("stc_Code","6","39","80","22",null,null,null,null,null,null,this.div_TranslationDet.form);
            obj.set_taborder("4");
            obj.set_text("CODE");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_TranslationDet.addChild(obj.name, obj);

            obj = new Edit("edt_Code","stc_Code:8","39",null,"22","8",null,null,null,null,null,this.div_TranslationDet.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.div_TranslationDet.addChild(obj.name, obj);

            obj = new Static("stc_Caption","6","69","80","22",null,null,null,null,null,null,this.div_TranslationDet.form);
            obj.set_taborder("6");
            obj.set_text("국문 코드명");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("22629");
            this.div_TranslationDet.addChild(obj.name, obj);

            obj = new Edit("edt_Caption","stc_Caption:8","69",null,"22","8",null,null,null,null,null,this.div_TranslationDet.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.div_TranslationDet.addChild(obj.name, obj);

            obj = new Static("stc_CaptionJap","6","99","80","22",null,null,null,null,null,null,this.div_TranslationDet.form);
            obj.set_taborder("8");
            obj.set_text("일문 코드명");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("22630");
            this.div_TranslationDet.addChild(obj.name, obj);

            obj = new Edit("edt_CaptionJap","stc_CaptionJap:8","99",null,"22","8",null,null,null,null,null,this.div_TranslationDet.form);
            obj.set_taborder("9");
            this.div_TranslationDet.addChild(obj.name, obj);

            obj = new Static("stc_CaptionEng","6","129","80","22",null,null,null,null,null,null,this.div_TranslationDet.form);
            obj.set_taborder("10");
            obj.set_text("영문 코드명");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("22631");
            this.div_TranslationDet.addChild(obj.name, obj);

            obj = new Edit("edt_CaptionEng","stc_CaptionEng:8","129",null,"22","8",null,null,null,null,null,this.div_TranslationDet.form);
            obj.set_taborder("11");
            this.div_TranslationDet.addChild(obj.name, obj);

            obj = new Static("stc_Val1","6","159","80","22",null,null,null,null,null,null,this.div_TranslationDet.form);
            obj.set_taborder("12");
            obj.set_text("국문 VAL1");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("22633");
            this.div_TranslationDet.addChild(obj.name, obj);

            obj = new Edit("edt_Val1","stc_Val1:8","159",null,"22","8",null,null,null,null,null,this.div_TranslationDet.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            this.div_TranslationDet.addChild(obj.name, obj);

            obj = new Static("stc_Val1Jap","6","189","80","22",null,null,null,null,null,null,this.div_TranslationDet.form);
            obj.set_taborder("14");
            obj.set_text("일문 VAL1");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("22634");
            this.div_TranslationDet.addChild(obj.name, obj);

            obj = new Edit("edt_Val1Jap","stc_Val1Jap:8","189",null,"22","8",null,null,null,null,null,this.div_TranslationDet.form);
            obj.set_taborder("15");
            this.div_TranslationDet.addChild(obj.name, obj);

            obj = new Static("stc_Val2","6","219","80","22",null,null,null,null,null,null,this.div_TranslationDet.form);
            obj.set_taborder("16");
            obj.set_text("국문 VAL2");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("22635");
            this.div_TranslationDet.addChild(obj.name, obj);

            obj = new Edit("edt_Val2","stc_Val2:8","219",null,"22","8",null,null,null,null,null,this.div_TranslationDet.form);
            obj.set_taborder("17");
            obj.set_readonly("true");
            this.div_TranslationDet.addChild(obj.name, obj);

            obj = new Static("stc_Val2Jap","6","249","80","22",null,null,null,null,null,null,this.div_TranslationDet.form);
            obj.set_taborder("18");
            obj.set_text("일문 VAL2");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("22636");
            this.div_TranslationDet.addChild(obj.name, obj);

            obj = new Edit("edt_Val2Jap","stc_Val2Jap:8","249",null,"22","8",null,null,null,null,null,this.div_TranslationDet.form);
            obj.set_taborder("19");
            this.div_TranslationDet.addChild(obj.name, obj);

            obj = new Static("stc_Val3","6","279","80","22",null,null,null,null,null,null,this.div_TranslationDet.form);
            obj.set_taborder("20");
            obj.set_text("국문 VAL3");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("22637");
            this.div_TranslationDet.addChild(obj.name, obj);

            obj = new Edit("edt_Val3","stc_Val3:8","279",null,"22","8",null,null,null,null,null,this.div_TranslationDet.form);
            obj.set_taborder("21");
            obj.set_readonly("true");
            this.div_TranslationDet.addChild(obj.name, obj);

            obj = new Static("stc_Val3Jap","6","309","80","22",null,null,null,null,null,null,this.div_TranslationDet.form);
            obj.set_taborder("22");
            obj.set_text("일문 VAL3");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("22638");
            this.div_TranslationDet.addChild(obj.name, obj);

            obj = new Edit("edt_Val3Jap","stc_Val3Jap:8","309",null,"22","8",null,null,null,null,null,this.div_TranslationDet.form);
            obj.set_taborder("23");
            this.div_TranslationDet.addChild(obj.name, obj);

            obj = new Static("stc_Val4","6","339","80","22",null,null,null,null,null,null,this.div_TranslationDet.form);
            obj.set_taborder("24");
            obj.set_text("국문 VAL4");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("22639");
            this.div_TranslationDet.addChild(obj.name, obj);

            obj = new Edit("edt_Val4","stc_Val4:8","339",null,"22","8",null,null,null,null,null,this.div_TranslationDet.form);
            obj.set_taborder("25");
            obj.set_readonly("true");
            this.div_TranslationDet.addChild(obj.name, obj);

            obj = new Static("stc_Val4Jap","6","369","80","22",null,null,null,null,null,null,this.div_TranslationDet.form);
            obj.set_taborder("26");
            obj.set_text("일문 VAL4");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("22640");
            this.div_TranslationDet.addChild(obj.name, obj);

            obj = new Edit("edt_Val4Jap","stc_Val4Jap:8","369",null,"22","8",null,null,null,null,null,this.div_TranslationDet.form);
            obj.set_taborder("27");
            this.div_TranslationDet.addChild(obj.name, obj);

            obj = new Static("stc_TransFlag","6","399","80","22",null,null,null,null,null,null,this.div_TranslationDet.form);
            obj.set_taborder("28");
            obj.set_text("번역대상");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("22641");
            this.div_TranslationDet.addChild(obj.name, obj);

            obj = new Radio("rd_TransFlag","stc_TransFlag:8","399","354","20",null,null,null,null,null,null,this.div_TranslationDet.form);
            obj.set_taborder("29");
            obj.set_innerdataset("ds_cmm_rdo_TransFlag");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_rowcount("1");
            obj.getSetter("TL_FLAG").set("1");
            obj.set_text("미번역");
            obj.set_value("0");
            obj.set_index("1");
            this.div_TranslationDet.addChild(obj.name, obj);

            obj = new Static("stc_TranslationListTit00","828","66","152","15",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("번역 코드정보");
            obj.set_cssclass("sta_POP_GroupTit");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_Search.form
            obj = new Layout("default","",0,0,this.div_Search.form,function(p){});
            this.div_Search.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_paging
            obj = new Layout("default","",0,0,this.div_paging.form,function(p){});
            this.div_paging.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_InsertInfo.form
            obj = new Layout("default","",0,0,this.div_InsertInfo.form,function(p){});
            this.div_InsertInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_TranslationDet.form
            obj = new Layout("default","",0,0,this.div_TranslationDet.form,function(p){});
            this.div_TranslationDet.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_TranslationDet.form.edt_CmCode","value","dsTranslationCodeList","CM_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_TranslationDet.form.ta_Remark","value","dsTranslationCodeList","REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_InsertInfo.form.edt_InsertEmpNm","value","dsTranslationCodeList","INSERT_EMP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_InsertInfo.form.cal_InsertDate","value","dsTranslationCodeList","INSERT_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_TranslationDet.form.edt_Caption","value","dsTranslationCodeList","CAPTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_TranslationDet.form.edt_CaptionJap","value","dsTranslationCodeList","CAPTION_JAP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_TranslationDet.form.edt_CaptionEng","value","dsTranslationCodeList","CAPTION_ENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_TranslationDet.form.edt_Val1","value","dsTranslationCodeList","VAL1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_TranslationDet.form.edt_Val1Jap","value","dsTranslationCodeList","VAL1_JAP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_TranslationDet.form.edt_Val2","value","dsTranslationCodeList","VAL2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_TranslationDet.form.edt_Val2Jap","value","dsTranslationCodeList","VAL2_JAP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_TranslationDet.form.edt_Val3","value","dsTranslationCodeList","VAL3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_TranslationDet.form.edt_Val3Jap","value","dsTranslationCodeList","VAL3_JAP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_TranslationDet.form.edt_Val4","value","dsTranslationCodeList","VAL4");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_TranslationDet.form.edt_Val4Jap","value","dsTranslationCodeList","VAL4_JAP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_TranslationDet.form.rd_TransFlag","value","dsTranslationCodeList","TRANS_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_TranslationDet.form.ta_Remark","acceptstab","dsTranslationCodeList","REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","div_TranslationDet.form.edt_Code","value","dsTranslationCodeList","CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Common::COM_Paging.xfdl");
        };
        
        // User Script
        this.addIncludeScript("AT_TranslationCode.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("AT_TranslationCode.xfdl","Script::CommGrid.xjs");
        this.addIncludeScript("AT_TranslationCode.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("AT_TranslationCode.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("AT_TranslationCode.xfdl","Script::ext_CommEco.xjs");
        this.registerScript("AT_TranslationCode.xfdl", function() {
        /************************************************************************************************
         * 01. 업무구분 : 번역관리
         * 02. 화면명   : 번역코드목록 탭(AT_TranslationCode)
         * 03. 화면설명 : 번역코드목록
         * 04. 작성일   : 2023.02.06
         * 05. 작성자   : 박종언
         * 06. 수정이력 :
         ***********************************************************************************************
         *     수정일          이  름    사유
         ***********************************************************************************************
         *
         ***********************************************************************************************/


        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
         ************************************************************************************************/
        this.executeIncludeScript("Script::CommTrans.xjs"); /*include "Script::CommTrans.xjs"*/
        this.executeIncludeScript("Script::CommGrid.xjs"); /*include "Script::CommGrid.xjs"*/
        this.executeIncludeScript("Script::CommUtil.xjs"); /*include "Script::CommUtil.xjs"*/
        this.executeIncludeScript("Script::CommSystem.xjs"); /*include "Script::CommSystem.xjs"*/
        this.executeIncludeScript("Script::ext_CommEco.xjs"); /*include "Script::ext_CommEco.xjs"*/

        /************************************************************************************************
         * 전역 변수 영역
         ************************************************************************************************/
        this.gUseAuth;
        this.bFirst = true;		// 페이징공통 컴포넌트 초기화 처리 Flag
        this.curStartNum = 1;	// 현재 게시글 시작 번호
        this.curEndNum;			// 현재 게시글 마지막 번호
         /************************************************************************************************
         * FORM 영역
         ************************************************************************************************/
        this.AT_TranslationCode_onload = function(obj,e)
        {
        	this.gfnCompInit(obj);  	// Grid 공통함수 호출
        	this.fnGetCode();			// 공통코드 조회
        };

        // 권한 처리
        this.fnAuthConfig = function()
        {
        	this.gUseAuth = this.parent.parent.parent.FV_AUTH;
        	this.fnFormInit();
        };

        this.fnFormInit = function()
        {
        	// 번역여부 : "전체"
        	this.div_Search.form.cmb_TranslationKind.set_index(0);

        	this.ds_cmm_rdo_TransFlag.assign(this.ds_cmm_TransFlag);
        	this.ds_cmm_rdo_TransFlag.filter("CAPTION != '전체'");

        	var bReadOnly = false;

        	if(this.gUseAuth != "ALL") {
        		bReadOnly = true;
        	}

        	this.div_TranslationDet.form.edt_CaptionEng.set_readonly(bReadOnly);	// 영문코드명
        	this.div_TranslationDet.form.rd_TransFlag.set_readonly(bReadOnly);		// 번역대상

        	// 조회 설정
        	this.div_paging.form.fn_loadInit(0, 10, true, this);
        	this.fnSearchCnt();
        };
         /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
         ************************************************************************************************/
        // 공통코드 조회
        this.fnGetCode = function()
        {
        	this.gfnAddCodeDataset("ds_cmm_TranslationKind",	"NO_TRANSLATION_KIND", true); 		// 미 번역 종류
        	this.gfnCodeTransaction();
        };

        // [필수공통함수] 페이징공통화면에서 초기화 검색시 호출하는 함수
        this.fnPagingInit = function()
        {
        	this.fnSearchCnt();
        };

        // [필수공통함수] 공통 페이징화면에서 호출하는 함수
        this.fnPagingSearch = function(nStartNum, nEndNum)
        {
        	this.fnSearch(nStartNum, nEndNum);
        };

        // 조회 Reset
        this.fnResetSearch = function()
        {
        	this.bFirst = true;
        	this.div_paging.form.fn_goFirst();
        };

        // 조회 CNT
        this.fnSearchCnt = function()
        {
        	var sData = this.div_Search.form.edt_TLData.value;
        	var sTranslationKind = this.div_Search.form.cmb_TranslationKind.value;
        	var sTransFlag = this.div_Search.form.cmb_TransFlag.value;
        	var sCmCode = this.div_Search.form.edt_CmCode.value;

        	this.gfnAddSendParameter("DATA", sData);
        	this.gfnAddSendParameter("TRANSLATION_KIND", sTranslationKind);
        	this.gfnAddSendParameter("TRANS_FLAG", sTransFlag);
        	this.gfnAddSendParameter("CM_CODE", sCmCode);

        	this.gfnAddOutputDataset("dsTranslationCodeListCnt", "dsOutput");
        	this.gfnCommonTransaction("Search_TranslationCode_Cnt", "AT_TranslationCode_S01_Cnt");
        };

        // 조회
        this.fnSearch = function(nStartNum, nEndNum)
        {
        	var sData = this.div_Search.form.edt_TLData.value;
        	var sTranslationKind = this.div_Search.form.cmb_TranslationKind.value;
        	var sTransFlag = this.div_Search.form.cmb_TransFlag.value;
        	var sCmCode = this.div_Search.form.edt_CmCode.value;

        	// 저장 후 리 로딩시 필요
        	this.curStartNum = nStartNum;
        	this.curEndNum = nEndNum;

        	this.gfnAddSendParameter("START_NO", nStartNum);
        	this.gfnAddSendParameter("END_NO", nEndNum);
        	this.gfnAddSendParameter("DATA", sData);
        	this.gfnAddSendParameter("TRANSLATION_KIND", sTranslationKind);
        	this.gfnAddSendParameter("TRANS_FLAG", sTransFlag);
        	this.gfnAddSendParameter("CM_CODE", sCmCode);

        	this.gfnAddOutputDataset("dsTranslationCodeList", "dsOutput");
        	this.gfnCommonTransaction("Search_TranslationCode", "AT_TranslationCode_S01", this.grd_TranslationList);
        };

        // Validation
        this.fnValidation = function()
        {
        	/*
        		필수 값 : 	 TL_DATA_KOR
        					,USE_FLAG
        	*/
        	var bResult = this.gfnIsUpdateDs(this.dsTranslationCodeList);

        	if(bResult) {
        		this.fnSetData();
        	} else {
        		alert(this.gfnGetTransTxt(1215,"변경된 내역이 없습니다."));
        	}
        };

        // 데이터 셋팅
        this.fnSetData = function()
        {
        	this.dsTranslationCodeList.set_enableevent(false);

        	for(var i = 0; i < this.dsTranslationCodeList.rowcount; i++) {
        		var sCaptionJap = this.dsTranslationCodeList.getColumn(i, "CAPTION_JAP");
        		var sCaptionEng = this.dsTranslationCodeList.getColumn(i, "CAPTION_ENG");

        		if(this.gfnIsEmpty(sCaptionJap)) this.dsTranslationCodeList.setColumn(i, "CAPTION_JAP", null);
        		if(this.gfnIsEmpty(sCaptionEng)) this.dsTranslationCodeList.setColumn(i, "CAPTION_ENG", null);
        	}

        	this.dsTranslationCodeList.set_enableevent(true);

        	this.fnSave();
        };

        // 저장
        this.fnSave = function()
        {
        	this.gfnAddInputDataset("dsTranslationCodeList", "dsInput");
        	this.gfnCommonTransaction("Save", "AT_TranslationCode_R01");
        };

        // 엑셀 데이터 조회
        this.fnExcelData = function()
        {
        	var sData = this.div_Search.form.edt_TLData.value;
        	var sTranslationKind = this.div_Search.form.cmb_TranslationKind.value;

        	this.gfnAddSendParameter("DATA", sData);
        	this.gfnAddSendParameter("TRANSLATION_KIND", sTranslationKind);

        	this.gfnAddOutputDataset("dsTranslationCodeExcelList", "dsOutput");
        	this.gfnCommonTransaction("Search_TranslationCodeExcelList", "AT_TranslationCode_S02", this.grd_TranslationExcelList);
        };

        // 엑셀
        this.fnExcel = function()
        {
        	var objGrd = this.grd_TranslationExcelList;
        	var sFileNm = this.gfnGetTransTxt(22600,"번역코드목록");
        	var sSTranslationKindNm = this.div_Search.form.cmb_TranslationKind.text;
        	sFileNm += "(" + sSTranslationKindNm + ")";

        	this.gfn_excelExport(this, objGrd, sFileNm);
        };

        // 화면 콜백
        this.fnCallBack = function (strSvcID, nErrorCode, strErrorMag)
        {
        	if (nErrorCode<0) {
        		this.alert("["+strSvcID+":"+nErrorCode+"] "+strErrorMag);
        		return;
        	} else {
        		switch (strSvcID)
        		{
        			case "gfnGetCode" :
        				this.ds_cmm_TranslationKind.filter("CODE!='KOR'");

        				// 권한 처리
        				this.fnAuthConfig();
        				break;
        			case "Search_TranslationCode_Cnt" :
        				this.fnSearch(1, this.div_paging.form.fv_pageListCnt);
        				break;
        			case "Search_TranslationCode" :
        				if(this.bFirst) {
        					// [필수] 전체건수 설정
        					this.div_paging.form.fn_init(this.dsTranslationCodeListCnt.getColumn(0, "TOTAL_COUNT"), 10, true, this);
        					this.bFirst = false;
        				}
        				break;
        			case "Search_TranslationCodeExcelList" :
        				this.fnExcel();
        				break;
        			case "Save" :
        				this.fnSearch(this.curStartNum, this.curEndNum);
        				break;
        		}
        	}
        };
         /************************************************************************************************
         * FORM 공통 FUNCTION 영역
         ************************************************************************************************/

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        this.common_onclick = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_Search":	// 조회
        			this.fnResetSearch();
        			//this.fnSearchCnt();
        			break;
        		case "btn_Save":	// 저장
        			this.fnValidation();
        			break;
        		case "btn_Excel":	// 엑셀
        			this.fnExcelData();
        			break;
        	}
        };

        // 엔터 쳤을 경우 이벤트
        this.div_Search_edt_TLData_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.fnResetSearch();
        	}
        };

        // 번역 대상 변경 이벤트
        this.div_Search_cmb_TranslationKind_onitemchanged = function(obj,e)
        {
        	this.fnResetSearch();
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.AT_TranslationCode_onload,this);
            this.div_Search.form.cmb_TransFlag.addEventHandler("onitemchanged",this.div_Search_cmb_TranslationKind_onitemchanged,this);
            this.div_Search.form.cmb_TranslationKind.addEventHandler("onitemchanged",this.div_Search_cmb_TranslationKind_onitemchanged,this);
            this.div_Search.form.edt_CmCode.addEventHandler("onkeydown",this.div_Search_edt_TLData_onkeydown,this);
            this.div_Search.form.btn_Search.addEventHandler("onclick",this.common_onclick,this);
            this.div_Search.form.btn_Save.addEventHandler("onclick",this.common_onclick,this);
            this.div_Search.form.edt_TLData.addEventHandler("onkeydown",this.div_Search_edt_TLData_onkeydown,this);
            this.div_Search.form.btn_Excel.addEventHandler("onclick",this.common_onclick,this);
        };
        this.loadIncludeScript("AT_TranslationCode.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
