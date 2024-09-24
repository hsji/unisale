(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SC_CompanyReg");
            this.set_scrolltype("vertical");
            this.set_titletext("회사정보등록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new DataObject("doZip", this);
            obj._setContents({
            });
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCompany", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_NM\" type=\"STRING\" size=\"255\"/><Column id=\"COMPANY_NM_ENG\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_ABBREVIATION\" type=\"STRING\" size=\"256\"/><Column id=\"TAG\" type=\"STRING\" size=\"255\"/><Column id=\"CLIENT_FLAG\" type=\"STRING\" size=\"255\"/><Column id=\"COMPANY_FLAG\" type=\"STRING\" size=\"255\"/><Column id=\"TMP_FLAG\" type=\"STRING\" size=\"255\"/><Column id=\"BLACKLIST_FLAG\" type=\"STRING\" size=\"255\"/><Column id=\"NATION_CD\" type=\"STRING\" size=\"255\"/><Column id=\"BUSINESS_SCALE_CD\" type=\"STRING\" size=\"255\"/><Column id=\"L_CATEGORY_CD\" type=\"STRING\" size=\"255\"/><Column id=\"M_CATEGORY_CD\" type=\"STRING\" size=\"255\"/><Column id=\"COMPANY_REG_NO\" type=\"STRING\" size=\"255\"/><Column id=\"CORPORATE_REG_NO\" type=\"STRING\" size=\"255\"/><Column id=\"INCORPORATION_DATE\" type=\"STRING\" size=\"255\"/><Column id=\"CEO_NM\" type=\"STRING\" size=\"255\"/><Column id=\"CEO_PHONE\" type=\"STRING\" size=\"255\"/><Column id=\"POST_NO\" type=\"STRING\" size=\"255\"/><Column id=\"POST_ADDR\" type=\"STRING\" size=\"255\"/><Column id=\"DETAIL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE_NO\" type=\"STRING\" size=\"255\"/><Column id=\"FAX_NO\" type=\"STRING\" size=\"255\"/><Column id=\"BUSINESS_FORM\" type=\"STRING\" size=\"255\"/><Column id=\"BUSINESS_KIND\" type=\"STRING\" size=\"255\"/><Column id=\"PURCHASE_COMPANY_CD\" type=\"STRING\" size=\"255\"/><Column id=\"PRODUCT_FLAG\" type=\"STRING\" size=\"255\"/><Column id=\"SI_FLAG\" type=\"STRING\" size=\"255\"/><Column id=\"SOLUTION_FLAG\" type=\"STRING\" size=\"255\"/><Column id=\"GOODS_FLAG\" type=\"STRING\" size=\"255\"/><Column id=\"PARTNER_FLAG\" type=\"STRING\" size=\"255\"/><Column id=\"PARTNER_KIND\" type=\"STRING\" size=\"255\"/><Column id=\"COMPANY_STATE\" type=\"STRING\" size=\"255\"/><Column id=\"COMPANY_KIND\" type=\"STRING\" size=\"255\"/><Column id=\"BANK_CD\" type=\"STRING\" size=\"255\"/><Column id=\"ACCOUNT_NO\" type=\"STRING\" size=\"255\"/><Column id=\"ACCOUNT_NM\" type=\"STRING\" size=\"255\"/><Column id=\"SI_VIEW_FLAG\" type=\"STRING\" size=\"255\"/><Column id=\"COLLECTION_BOND_FLAG\" type=\"STRING\" size=\"255\"/><Column id=\"CL_APPROVAL_EMP_NO\" type=\"STRING\" size=\"255\"/><Column id=\"CL_ASSET\" type=\"STRING\" size=\"255\"/><Column id=\"CL_EMP_NUMBER\" type=\"STRING\" size=\"255\"/><Column id=\"CL_APPROVAL_DATE\" type=\"STRING\" size=\"255\"/><Column id=\"CL_CAPITAL\" type=\"STRING\" size=\"255\"/><Column id=\"CL_OPINION\" type=\"STRING\" size=\"255\"/><Column id=\"CL_PS\" type=\"STRING\" size=\"255\"/><Column id=\"CL_ANNUAL_SALES\" type=\"STRING\" size=\"255\"/><Column id=\"CL_SI\" type=\"STRING\" size=\"255\"/><Column id=\"CL_NET_INCOME\" type=\"STRING\" size=\"255\"/><Column id=\"CL_EVALUATION\" type=\"STRING\" size=\"255\"/><Column id=\"CL_LISTED_FLAG\" type=\"STRING\" size=\"255\"/><Column id=\"CL_EXCEPTION_CD\" type=\"STRING\" size=\"255\"/><Column id=\"CL_ADD_SCORE1\" type=\"STRING\" size=\"255\"/><Column id=\"CL_ADD_SCORE2\" type=\"STRING\" size=\"255\"/><Column id=\"CL_ADD_SCORE3\" type=\"STRING\" size=\"255\"/><Column id=\"REMARKS\" type=\"STRING\" size=\"255\"/><Column id=\"DELETE_FLAG\" type=\"STRING\" size=\"255\"/><Column id=\"INSERT_DATE\" type=\"STRING\" size=\"255\"/><Column id=\"INSERT_EMP_NO\" type=\"STRING\" size=\"255\"/><Column id=\"INSERT_DEPT_CD\" type=\"STRING\" size=\"255\"/><Column id=\"INSERT_MODEL\" type=\"STRING\" size=\"255\"/><Column id=\"UPDATE_DATE\" type=\"STRING\" size=\"255\"/><Column id=\"UPDATE_EMP_NO\" type=\"STRING\" size=\"255\"/><Column id=\"UPDATE_DEPT_CD\" type=\"STRING\" size=\"255\"/><Column id=\"UPDATE_DEPT_NM\" type=\"STRING\" size=\"255\"/><Column id=\"UPDATE_MODEL\" type=\"STRING\" size=\"255\"/><Column id=\"REST\" type=\"STRING\" size=\"256\"/><Column id=\"CL_APPROVAL_EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CL_CURRENT_ASSETS\" type=\"STRING\" size=\"256\"/><Column id=\"CL_PROFITABILITY\" type=\"STRING\" size=\"256\"/><Column id=\"CL_SAFETY\" type=\"STRING\" size=\"256\"/><Column id=\"CL_REST\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAddressBook", this);
            obj._setContents("<ColumnInfo><Column id=\"CA_SEQ\" type=\"BIGDECIMAL\" size=\"18\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"20\"/><Column id=\"EMP_NM\" type=\"STRING\" size=\"100\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"GRADE_CD\" type=\"STRING\" size=\"20\"/><Column id=\"ROLE_CD\" type=\"STRING\" size=\"20\"/><Column id=\"H_PHONE_NO\" type=\"STRING\" size=\"30\"/><Column id=\"O_PHONE_NO\" type=\"STRING\" size=\"30\"/><Column id=\"HOLD_OFFICE\" type=\"STRING\" size=\"20\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"200\"/><Column id=\"ETAX_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"ORDER_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"REMARKS\" type=\"STRING\" size=\"32767\"/><Column id=\"INSERT_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"INSERT_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"INSERT_DEPT_CD\" type=\"STRING\" size=\"60\"/><Column id=\"INSERT_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"INSERT_MODEL\" type=\"STRING\" size=\"100\"/><Column id=\"UPDATE_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"UPDATE_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"UPDATE_DEPT_CD\" type=\"STRING\" size=\"60\"/><Column id=\"UPDATE_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"UPDATE_MODEL\" type=\"STRING\" size=\"100\"/><Column id=\"HISTORY\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_NATION_CODE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_BUSINESS_SCALE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_L_CATEGORY", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_M_CATEGORY", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_BUSINESS_FORM", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_BUSINESS_KIND", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_COMPANY_STATE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_COMPANY_KIND", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_BANK_CODE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_CL_EXCEPTION_CODE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_CL_OPINION", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_CL_ADD_SCORE1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_CL_ADD_SCORE2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_CL_ADD_SCORE3", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"30\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"255\"/><Column id=\"VAL1\" type=\"STRING\" size=\"100\"/><Column id=\"VAL2\" type=\"STRING\" size=\"100\"/><Column id=\"VAL3\" type=\"STRING\" size=\"100\"/><Column id=\"VAL4\" type=\"STRING\" size=\"100\"/><Column id=\"REMARK\" type=\"STRING\" size=\"1073741823\"/><Column id=\"ORD\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSalesEmpList", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"HOLD_OFFICE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_PARTNER_KIND", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_OutputBusinessName", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDuplication", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CODE\" type=\"STRING\" size=\"255\"/><Column id=\"COMPANY_NAME\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_HOLD_OFFICE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_ROLE_CODE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_GRADE_CODE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"30\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"255\"/><Column id=\"VAL1\" type=\"STRING\" size=\"100\"/><Column id=\"VAL2\" type=\"STRING\" size=\"100\"/><Column id=\"VAL3\" type=\"STRING\" size=\"100\"/><Column id=\"VAL4\" type=\"STRING\" size=\"100\"/><Column id=\"REMARK\" type=\"STRING\" size=\"1073741823\"/><Column id=\"ORD\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_LimitAmount", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_company_print", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CODE\" size=\"255\" type=\"STRING\"/><Column id=\"COMPANY_NAME\" size=\"255\" type=\"STRING\"/><Column id=\"NATION\" size=\"255\" type=\"STRING\"/><Column id=\"APPROVAL_TYPE\" size=\"255\" type=\"STRING\"/><Column id=\"APPROVAL_DATE\" size=\"255\" type=\"STRING\"/><Column id=\"APPROVAL_STAFF\" size=\"255\" type=\"STRING\"/><Column id=\"BIZ_STAFF\" size=\"255\" type=\"STRING\"/><Column id=\"COMPANY_GRADE\" size=\"255\" type=\"STRING\"/><Column id=\"COMPANY_CLASS\" size=\"255\" type=\"STRING\"/><Column id=\"COMPANY_KIND\" size=\"255\" type=\"STRING\"/><Column id=\"TAG\" size=\"255\" type=\"STRING\"/><Column id=\"COMPANY_GBN\" size=\"255\" type=\"STRING\"/><Column id=\"LICENSE_NO\" size=\"255\" type=\"STRING\"/><Column id=\"MASTER_NAME\" size=\"255\" type=\"STRING\"/><Column id=\"MASTER_PHONE\" size=\"255\" type=\"STRING\"/><Column id=\"MASTER_EMAIL\" size=\"255\" type=\"STRING\"/><Column id=\"CHARGE_EMPNM\" size=\"255\" type=\"STRING\"/><Column id=\"CHARGE_EMPPHONE\" size=\"255\" type=\"STRING\"/><Column id=\"CHARGE_EMPEMAIL\" size=\"255\" type=\"STRING\"/><Column id=\"FAX_NO\" size=\"255\" type=\"STRING\"/><Column id=\"POST_NO\" size=\"255\" type=\"STRING\"/><Column id=\"ADDRESS\" size=\"255\" type=\"STRING\"/><Column id=\"BUSINESS_FORM\" size=\"255\" type=\"STRING\"/><Column id=\"BUSINESS_KIND\" size=\"255\" type=\"STRING\"/><Column id=\"PHONE_NO\" size=\"255\" type=\"STRING\"/><Column id=\"DISCOUNT_RATE\" size=\"20\" type=\"DECIMAL\"/><Column id=\"CHK_SI\" size=\"255\" type=\"STRING\"/><Column id=\"CHK_SALE\" size=\"255\" type=\"STRING\"/><Column id=\"CHK_SOL\" size=\"255\" type=\"STRING\"/><Column id=\"CHK_ETC_GOODS\" size=\"255\" type=\"STRING\"/><Column id=\"JONGMOK\" size=\"255\" type=\"STRING\"/><Column id=\"REMARKS\" size=\"255\" type=\"STRING\"/><Column id=\"BANK_CODE\" size=\"255\" type=\"STRING\"/><Column id=\"ACCOUNT_NAME\" size=\"255\" type=\"STRING\"/><Column id=\"ACCOUNT_NO\" size=\"255\" type=\"STRING\"/><Column id=\"FILE_KEY\" size=\"255\" type=\"STRING\"/><Column id=\"BBLACKLIST\" size=\"255\" type=\"STRING\"/><Column id=\"ETAX_CONTACT_DEPT\" size=\"255\" type=\"STRING\"/><Column id=\"ETAX_CONTACT_NAME\" size=\"255\" type=\"STRING\"/><Column id=\"ETAX_CONTACT_PHONE\" size=\"255\" type=\"STRING\"/><Column id=\"ETAX_CONTACT_CELLPHONE\" size=\"255\" type=\"STRING\"/><Column id=\"ETAX_CONTACT_EMAIL\" size=\"255\" type=\"STRING\"/><Column id=\"CREDIT_LINE_PS\" size=\"20\" type=\"DECIMAL\"/><Column id=\"CREDIT_LINE_SI\" size=\"20\" type=\"DECIMAL\"/><Column id=\"COMPANY_APPROVAL_DOCNO\" size=\"255\" type=\"STRING\"/><Column id=\"COMPANY_CODE_NEW\" size=\"255\" type=\"STRING\"/><Column id=\"REGISTER_NO\" size=\"255\" type=\"STRING\"/><Column id=\"CLIENT_CLASS\" size=\"255\" type=\"STRING\"/><Column id=\"HIGHER_CLIENT_CODE\" size=\"255\" type=\"STRING\"/><Column id=\"INDUSTRY_CLASS\" size=\"255\" type=\"STRING\"/><Column id=\"BCOMPANY\" size=\"255\" type=\"STRING\"/><Column id=\"BCLIENT\" size=\"255\" type=\"STRING\"/><Column id=\"DEL_FLAG\" size=\"255\" type=\"STRING\"/><Column id=\"HIGHER_CLIENT_NAME\" size=\"255\" type=\"STRING\"/><Column id=\"PREE_PROJECT_CNT\" size=\"20\" type=\"INT\"/><Column id=\"PROJECT_CNT\" size=\"20\" type=\"INT\"/><Column id=\"CONTRACT_CNT\" size=\"20\" type=\"INT\"/><Column id=\"PURCHASE_CNT\" size=\"20\" type=\"INT\"/><Column id=\"TMP_COMPANY_FLAG\" size=\"255\" type=\"STRING\"/><Column id=\"TMP_COMPANY_NAME\" size=\"255\" type=\"STRING\"/><Column id=\"BUSINESS_SCALE\" size=\"255\" type=\"STRING\"/><Column id=\"ASSET\" size=\"20\" type=\"INT\"/><Column id=\"CAPITAL\" size=\"20\" type=\"INT\"/><Column id=\"ANNUAL_TURNOVER\" size=\"20\" type=\"INT\"/><Column id=\"NET_INCOME\" size=\"20\" type=\"INT\"/><Column id=\"LISTED_YN\" size=\"255\" type=\"STRING\"/><Column id=\"WORKFORCE\" size=\"20\" type=\"INT\"/><Column id=\"MGR_OPINION\" size=\"20\" type=\"INT\"/><Column id=\"ADD_SCORE1\" size=\"20\" type=\"INT\"/><Column id=\"ADD_SCORE2\" size=\"20\" type=\"INT\"/><Column id=\"ADD_SCORE3\" size=\"20\" type=\"INT\"/><Column id=\"INCORPORATION_DATE\" size=\"256\" type=\"DATE\"/><Column id=\"SCORE\" size=\"256\" type=\"STRING\"/><Column id=\"TODAY_DATE\" size=\"256\" type=\"DATE\"/><Column id=\"BIZ_STAFF_NM\" size=\"256\" type=\"STRING\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsContractList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPurchaseList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsContractSum", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsContractTotal", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPurchaseSum", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPurchaseTotal", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEvaluate", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAdminOpinion", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCredithistory", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Return", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_CreditLevel", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_CreditCompany", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_BottomFrame","1.00",null,null,"37","1","14",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_BtnBg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Cancel",null,null,"70","28","9","18",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("닫기");
            obj.getSetter("TL_SEQ").set("59");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Save",null,null,"60","28","btn_Cancel:8","18",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_enable("false");
            obj.getSetter("TL_SEQ").set("115");
            this.addChild(obj.name, obj);

            obj = new Button("btn_CompanyAddMM","9.00",null,null,"28","1134","18",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("공통코드 관리");
            obj.set_enable("false");
            obj.getSetter("TL_SEQ").set("672");
            this.addChild(obj.name, obj);

            obj = new Div("div_Attachment02","btn_CompanyAddMM:10.00",null,"116","28",null,"18",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_async("true");
            obj.getSetter("USE_NEXT_FILE_TYPE").set("true");
            obj.getSetter("USE_LINK_TYPE").set("false");
            obj.getSetter("USE_MULTI_FILE").set("true");
            obj.getSetter("USE_OPEN_ADD_DIALOG").set("false");
            obj.getSetter("USE_DELETE_ALL").set("false");
            obj.getSetter("USE_BUTTON_ONLY").set("true");
            obj.set_url("sales::comm/COM_Attachment.xfdl");
            obj.set_enable("true");
            obj.set_enableevent("true");
            obj.getSetter("SOURCE_SEQ").set("COMPANY_CD");
            obj.getSetter("SOURCE_CD").set("COM");
            obj.getSetter("BINDDATASET").set("dsCompany");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Del","div_Attachment02:8.00",null,"93","28",null,"18",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("회사삭제");
            obj.set_cssclass("btn_WF_CrudDelete");
            obj.set_enable("false");
            obj.getSetter("TL_SEQ").set("22578");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_Info","10","10",null,null,"10","56",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tpg_BasicInfo",this.tab_Info);
            obj.set_text("기본정보");
            obj.getSetter("TL_SEQ").set("752");
            this.tab_Info.addChild(obj.name, obj);

            obj = new Static("stc_CompanyReg1","0","3",null,null,"0","3",null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_detailBg");
            obj.set_text("");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Static("stc_CompanyType","9","11","92","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("1");
            obj.set_text("회사구분");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("836");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Static("stc_CompanyName","9","stc_CompanyType:7","92","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("2");
            obj.set_text("회사명 (한국)");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("22534");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Static("stc_CompanyNameJap","9","stc_CompanyName:7","92","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("66");
            obj.set_text("회사명 (영문)");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("22533");
            obj.set_cssclass("sta_WF_DetailTit");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Static("stc_CorporateRegistrationNumber","9","stc_CompanyNameJap:7","92","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("3");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("837");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Static("stc_BusinessCondition","9","stc_CorporateRegistrationNumber:7","92","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("5");
            obj.set_text("업태");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("839");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Static("stc_PostalNumber","9","stc_BusinessCondition:7","92","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("4");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("838");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Static("stc_ContractType04","9.00","222","92","22",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("6");
            obj.set_text("Tag");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("137");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Static("stc_Remark","9.00","356","92","32",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("7");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("45");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Static("stc_Code","9.00","488","92","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("8");
            obj.set_text("코드");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("662");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Static("stc_CompanyStatus","49.00","stc_Code:7","52","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("48");
            obj.set_text("회사상태");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("149");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Static("stc_BankName","9.00","stc_CompanyStatus:7","92","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("9");
            obj.set_text("은행명");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("840");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_CorporateRegistrationNumber","stc_CorporateRegistrationNumber:8.00","104","175","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("10");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new CheckBox("chb_ClientCompany","109","11","71","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("11");
            obj.set_text("고객사");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.getSetter("TL_SEQ").set("32");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new CheckBox("chb_PlaceOfContract","chb_ClientCompany:1","11","61","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("12");
            obj.set_text("계약처");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.getSetter("TL_SEQ").set("34");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new CheckBox("chb_FakeCode","chb_PlaceOfContract:18","11","61","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("13");
            obj.set_text("가코드");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.getSetter("TL_SEQ").set("841");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new CheckBox("chb_BlackList","chb_FakeCode:18","11","85","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("14");
            obj.set_text("블랙리스트");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.getSetter("TL_SEQ").set("842");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new CheckBox("chb_DISP","chb_BlackList:10","11","61","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("15");
            obj.set_text("DISP");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.getSetter("TL_SEQ").set("843");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new CheckBox("chb_TURNKEY","chb_DISP:3","11","77","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("62");
            obj.set_text("원청턴키");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.getSetter("TL_SEQ").set("858");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Static("stc_Nation","679","11","68","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("17");
            obj.set_text("국가");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("844");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Combo("cmb_Nation","stc_Nation:8","11","157","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("18");
            obj.set_innerdataset("ds_CD_NATION_CODE");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_text("");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new TextArea("txt_Remark","109.00","282",null,"192","10",null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("19");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Static("stc_CompanySize","cmb_Nation:8","11","59","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("20");
            obj.set_text("기업규모");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("845");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Combo("cmb_CompanySize","stc_CompanySize:8","11",null,"24","10",null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("21");
            obj.set_innerdataset("ds_CD_BUSINESS_SCALE");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_text("");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Static("stc_CompanyAbbreviation","449.00","42","42","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("64");
            obj.set_text("약어");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("12314");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_CompanyAbbreviation","stc_CompanyAbbreviation:8.00","42","175","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("65");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Static("stc_LargeCategory","edt_CompanyAbbreviation:8.00","42","65","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("22");
            obj.set_text("대분류");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("670");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Combo("cmb_LargeCategory","stc_LargeCategory:8.00","42","157","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("23");
            obj.set_innerdataset("ds_CD_L_CATEGORY");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_text("");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Static("stc_MiddleCategory","cmb_LargeCategory:8.00","42","59","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("24");
            obj.set_text("중분류");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("846");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Combo("cmb_MiddleCategory","stc_MiddleCategory:8.00","42","163","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("25");
            obj.set_innerdataset("ds_CD_M_CATEGORY");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_text("");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Static("stc_CorperateRegistrationNumber","415.00","104","76","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("26");
            obj.set_text("법인등록번호");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("847");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_CorperateRegistrationNumber","stc_CorperateRegistrationNumber:8.00","104","175","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("27");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Static("stc_RepresentName","663.00","73","84","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("28");
            obj.set_text("대표자명");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("848");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_RepresentName","755.00","73","108","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("29");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Static("stc_RepresentNumber","edt_RepresentName:8.00","73","108","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("30");
            obj.set_text("대표자번호");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("849");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_RepresentNumber","stc_RepresentNumber:8.00","73",null,"24","10",null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("31");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Static("stc_FoundationDate","415.00","73","76","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("32");
            obj.set_text("설립일");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("850");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Calendar("cal_FoundationDate","stc_FoundationDate:8.00","73","126","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("33");
            obj.set_dateformat("yyyy-MM-dd");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Static("stc_Telephone","663.00","104","84","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("34");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("545");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_Telephone","755.00","104","108","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("35");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Static("stc_FaxNumber","edt_Telephone:8.00","104","108","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("36");
            obj.set_text("팩스번호");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("852");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_FaxNumber","stc_FaxNumber:8.00","104",null,"24","10",null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("37");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Static("stc_BusinessType","415.00","135","76","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("38");
            obj.set_text("업종");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("853");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Combo("cmb_BusinessType","stc_BusinessType:8.00","135","256","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("39");
            obj.set_innerdataset("ds_CD_BUSINESS_KIND");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_type("filterlike");
            obj.set_text("");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Static("stc_ResponsibilitySalesMan","895.00","135","84","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("40");
            obj.set_text("담당영업사원");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("854");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_ResponsibilitySalesMan","987.00","135",null,"24","10",null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("41");
            obj.set_enable("true");
            obj.set_readonly("true");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_Code","109.00","488","108","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("42");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new CheckBox("chb_Product","edt_Code:9.00","488","53","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("43");
            obj.set_text("제품");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.getSetter("TL_SEQ").set("62");
            obj.set_font("12px \"noto\",\"Malgun Gothic\",\"Arial\"");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new CheckBox("chb_Si","chb_Product:8.00","488","45","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("44");
            obj.set_text("SI");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.getSetter("TL_SEQ").set("404");
            obj.set_font("12px \"noto\",\"Malgun Gothic\",\"Arial\"");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new CheckBox("chb_Solution","chb_Si:8.00","488","69","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("45");
            obj.set_text("솔루션");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.getSetter("TL_SEQ").set("855");
            obj.set_font("12px \"noto\",\"Malgun Gothic\",\"Arial\"");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new CheckBox("chb_Product2","chb_Solution:8.00","488","53","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("46");
            obj.set_text("상품");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.getSetter("TL_SEQ").set("405");
            obj.set_font("12px \"noto\",\"Malgun Gothic\",\"Arial\"");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","chb_Product2:9.00","488","113","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("59");
            obj.set_text("채권추심이력");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.getSetter("TL_SEQ").set("151");
            obj.set_font("12px \"noto\",\"Malgun Gothic\",\"Arial\"");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new CheckBox("chb_OfficialPartner","CheckBox00:-5.00","488","101","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("47");
            obj.set_text("공식파트너사");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.getSetter("TL_SEQ").set("152");
            obj.set_font("12px \"noto\",\"Malgun Gothic\",\"Arial\"");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Combo("cmb_PartKind","chb_OfficialPartner:1.00","488","113","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("58");
            obj.set_visible("true");
            obj.set_innerdataset("ds_CD_PARTNER_KIND");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_text("");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Combo("cmb_CompanyStatus","stc_CompanyStatus:8.00","519",null,"24","761",null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("49");
            obj.set_innerdataset("ds_CD_COMPANY_STATE");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_text("");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Static("stc_PlaceOfContract","504.00","519","76","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("50");
            obj.set_text("계약처");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("34");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Combo("cmb_PlaceOfContract","587.00","519",null,"24","375",null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("51");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_innerdataset("ds_CD_COMPANY_KIND");
            obj.set_text("");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Combo("cmb_BankName","109.00","551","276","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("52");
            obj.set_innerdataset("ds_CD_BANK_CODE");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_text("");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Static("stc_AccountNumber","412.00","551","52","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("53");
            obj.set_text("계좌번호");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("856");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_AccountNumber","472.00","551","244","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("54");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_AccountName","822.00","551","223","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("55");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Static("stc_AccountName","722.00","551","92","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("56");
            obj.set_text("계좌명");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("857");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Combo("cmb_BusinessCondition","stc_BusinessCondition:8.00","135","309","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("57");
            obj.set_innerdataset("ds_CD_BUSINESS_FORM");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_type("filterlike");
            obj.set_enableevent("true");
            obj.set_text("");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_CompanyName","stc_CompanyName:8.00","42","309","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("60");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Button("btn_CompanyName","edt_CompanyName:5.00","42","22","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("61");
            obj.set_cssclass("btn_WF_Sch");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new JusoPostCode("jPostAddr","109.00","166",null,"24","10",null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("69");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Div("divTag","109","jPostAddr:7",null,"77","10",null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("63");
            obj.set_url("sales::comm/COM_Tag.xfdl");
            obj.getSetter("tagcolumn").set("TAG");
            obj.getSetter("binddataset").set("dsCompany");
            obj.set_text("");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_OriginContractNo00","109.00","263","1076","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("16");
            obj.set_visible("false");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Edit("edt_CompanyNameJap","stc_CompanyNameJap:8.00","73","309","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("67");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new CheckBox("chb_SubsidiaryCompany","chb_TURNKEY:3","11","87","24",null,null,null,null,null,null,this.tab_Info.tpg_BasicInfo.form);
            obj.set_taborder("68");
            obj.set_text("자회사여부");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.getSetter("TL_SEQ").set("22837");
            this.tab_Info.tpg_BasicInfo.addChild(obj.name, obj);

            obj = new Tabpage("tpg_Credit",this.tab_Info);
            obj.set_text("여신");
            obj.getSetter("TL_SEQ").set("304");
            this.tab_Info.addChild(obj.name, obj);

            obj = new Static("stc_CompanyReg2","0","3",null,null,"0","3",null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_detailBg");
            obj.set_text("");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new Static("stc_Approver","12","39","100","22",null,null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("1");
            obj.set_text("승인권자");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("859");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new Static("stc_ApproveDate","12","65","100","22",null,null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("2");
            obj.set_text("승인일자");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("803");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new Static("stc_ProductService","-6.00","83","118","38",null,null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("3");
            obj.set_text("제품/\r\n제품+용역+유지보수");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("861");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new Static("stc_Service","335","195","100","22",null,null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("4");
            obj.set_text("용역");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.set_visible("false");
            obj.getSetter("TL_SEQ").set("17");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new Static("stc_EvaluationGrade","12","117","100","22",null,null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("5");
            obj.set_text("평가점수");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("139");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new Static("stc_Remainder","12","143","100","22",null,null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("6");
            obj.set_text("잔여");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("140");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new Static("stc_Asset","335","39","100","22",null,null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("7");
            obj.set_text("자산");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("862");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new Static("stc_Capital","335","65","100","22",null,null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("8");
            obj.set_text("자본");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("863");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new Static("stc_YearSales","335","91","100","22",null,null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("9");
            obj.set_text("년간매출액");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("864");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new Static("stc_NetProfit","335","117","100","22",null,null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("10");
            obj.set_text("순이익");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("865");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new Static("stc_Exception","335","143","100","22",null,null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("11");
            obj.set_text("예외처리");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("144");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new Static("stc_TotalEmployees","12","169","100","22",null,null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("12");
            obj.set_text("종업원수");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("866");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new Static("stc_AdminOpinion","659","65","100","22",null,null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("13");
            obj.set_text("담당자의견");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("867");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new Static("stc_AdditionalScore","659","89","100","78",null,null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("14");
            obj.set_text("추가점수");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("868");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new Edit("edt_CurrentAssets","767","39","200","22",null,null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("38");
            obj.set_textAlign("right");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new Button("btn_Evaluate","edt_CurrentAssets:10","38","46","24",null,null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("15");
            obj.set_text("평가");
            obj.getSetter("TL_SEQ").set("771");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new Button("btn_Print","btn_Evaluate:8","38","46","24",null,null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("16");
            obj.set_text("출력");
            obj.getSetter("TL_SEQ").set("394");
            obj.set_visible("false");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new Edit("edt_Approver","stc_Approver:8","39","200","22",null,null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("17");
            obj.set_readonly("true");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new Calendar("cal_ApproveDate","stc_ApproveDate:9","65","200","22",null,null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("18");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_readonly("true");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new Edit("edt_EvaluationGrade","stc_EvaluationGrade:8","117","200","22",null,null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("19");
            obj.set_enable("true");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new MaskEdit("edt_Asset","stc_Asset:8","39","200","22",null,null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("20");
            obj.set_format("9,999");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new Combo("cmb_AdminOpinion","stc_AdminOpinion:8","65","200","22",null,null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("21");
            obj.set_innerdataset("ds_CD_CL_OPINION");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_text("");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new Edit("edt_TotalEmployees","stc_TotalEmployees:8","169","200","22",null,null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("22");
            obj.set_textAlign("right");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new Combo("cmb_Exception","stc_Exception:8","143","200","22",null,null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("23");
            obj.set_innerdataset("ds_CD_CL_EXCEPTION_CODE");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_text("");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new Static("stc_AdditionalScore1","stc_AdditionalScore:8","92","200","20",null,null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("24");
            obj.set_text("1. 신용등급 점수 평가");
            obj.getSetter("TL_SEQ").set("141");
            obj.set_font("12px \"noto\",\"Malgun Gothic\",\"Arial\"");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new Static("stc_AdditionalScore2","stc_AdditionalScore:8","118","200","20",null,null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("25");
            obj.set_text("2. 6개월 동안 계약 횟수가 있는가");
            obj.getSetter("TL_SEQ").set("142");
            obj.set_font("12px \"noto\",\"Malgun Gothic\",\"Arial\"");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new Static("stc_AdditionalScore3","stc_AdditionalScore:8","144","200","20",null,null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("26");
            obj.set_text("3. 6개월 동안 미수채권현황");
            obj.getSetter("TL_SEQ").set("143");
            obj.set_font("12px \"noto\",\"Malgun Gothic\",\"Arial\"");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new Combo("cmb_AdditionalScore1","971","91","217","22",null,null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("27");
            obj.set_innerdataset("ds_CD_CL_ADD_SCORE1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_text("");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new Combo("cmb_AdditionalScore2","971","117","217","22",null,null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("28");
            obj.set_innerdataset("ds_CD_CL_ADD_SCORE2");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_text("");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new CheckBox("chb_Listed","123","196","73","20",null,null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("29");
            obj.set_text("상장여부");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.getSetter("TL_SEQ").set("869");
            obj.set_font("12px \"noto\",\"Malgun Gothic\",\"Arial\"");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new Combo("cmb_AdditionalScore3","971","143","217","22",null,null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("30");
            obj.set_innerdataset("ds_CD_CL_ADD_SCORE3");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_text("");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new MaskEdit("edt_Capital","stc_Capital:8","65","200","22",null,null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("31");
            obj.set_format("9,999");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new MaskEdit("edt_YearSales","stc_YearSales:8","91","200","22",null,null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("32");
            obj.set_format("9,999");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new MaskEdit("edt_NetProfit","stc_NetProfit:8","117","200","22",null,null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("33");
            obj.set_format("9,999");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new MaskEdit("edt_ProductService","stc_ProductService:8","91","200","22",null,null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("34");
            obj.set_format("9,999");
            obj.set_readonly("false");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new MaskEdit("edt_Service","stc_Service:8","195","200","22",null,null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("35");
            obj.set_format("9,999");
            obj.set_visible("false");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new MaskEdit("edt_Remainder","stc_Remainder:8","143","200","22",null,null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("36");
            obj.set_format("9,999");
            obj.set_readonly("false");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new Static("stc_CurrentAssets","659","39","100","22",null,null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("37");
            obj.set_text("유동자산");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("870");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new Static("stc_Profitability","335.00","163","100","34",null,null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("39");
            obj.set_text("수익성\r\n(이자보상배수)");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("872");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new Edit("edt_Profitability","stc_Profitability:8","169","200","22",null,null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("40");
            obj.set_textAlign("right");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new Static("stc_Safety","659.00","163","100","34",null,null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("41");
            obj.set_text("안전성\r\n(차입금의존도)");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("874");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new Edit("edt_Safety","stc_Safety:8","169","200","22",null,null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("42");
            obj.set_textAlign("right");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new Button("btn_AdminOpinionHistory","cmb_AdminOpinion:10","65","22","22",null,null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("43");
            obj.set_cssclass("btn_WF_Sch");
            obj.set_tooltiptext("변경사유 이력");
            obj.set_visible("false");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new Static("stc_GbSalesProd1","0","225",null,"32","0",null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("45");
            obj.set_cssclass("sta_POP_GroupBg");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new Grid("grd_Credithistory","0","stc_GbSalesProd1:0",null,null,"0","0",null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("44");
            obj.set_binddataset("dsCredithistory");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"평가일자\" TL_SEQ=\"875\"/><Cell col=\"2\" text=\"재무년도\" TL_SEQ=\"876\"/><Cell col=\"3\" text=\"평가처\" TL_SEQ=\"877\"/><Cell col=\"4\" text=\"신용등급\" TL_SEQ=\"878\"/><Cell col=\"5\" text=\"등록일자\" TL_SEQ=\"879\"/><Cell col=\"6\" text=\"등록자\" TL_SEQ=\"81\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:EVALUATION_DATE\" displaytype=\"date\" edittype=\"expr:dataset.getRowType(currow) == &apos;2&apos;?&apos;date&apos;:&apos;none&apos;\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"2\" text=\"bind:YEAR\" edittype=\"expr:dataset.getRowType(currow) == &apos;2&apos;?&apos;date&apos;:&apos;none&apos;\" editmaxlength=\"4\" maskeditformat=\"9999\" calendartype=\"spin\" calendardateformat=\"yyyy\" calendareditformat=\"yyyy\" displaytype=\"calendarcontrol\"/><Cell col=\"3\" text=\"bind:CREDIT_COMPANY\" displaytype=\"combotext\" combodataset=\"ds_CD_CreditCompany\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" edittype=\"expr:dataset.getRowType(currow) == &apos;2&apos;?&apos;combo&apos;:&apos;none&apos;\"/><Cell col=\"4\" text=\"bind:CREDIT_LEVEL\" displaytype=\"combotext\" textAlign=\"center\" edittype=\"expr:dataset.getRowType(currow) == &apos;2&apos;?&apos;combo&apos;:&apos;none&apos;\" combodataset=\"ds_CD_CreditLevel\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/><Cell col=\"5\" text=\"bind:INPT_DTTM\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"6\" text=\"bind:INSERT_EMP_NAME\"/></Band></Format></Formats>");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new Static("stc_SalesProd1","6.00","233","134","19",null,null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("46");
            obj.set_text("신용평가 이력");
            obj.set_visible("true");
            obj.set_cssclass("sta_POP_GroupTit");
            obj.getSetter("TL_SEQ").set("880");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new Static("stc_GbSalesProd00","0","3",null,"32","0",null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("47");
            obj.set_cssclass("sta_POP_GroupBg");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new Static("stc_SalesProd00","6.00","11","134","19",null,null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("48");
            obj.set_text("여신평가");
            obj.set_visible("true");
            obj.set_cssclass("sta_POP_GroupTit");
            obj.getSetter("TL_SEQ").set("881");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new Button("btn_CreditMinus",null,"230","33","25","0",null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("50");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_Delete");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new Button("btn_CreditPlus",null,"230","33","25","btn_CreditMinus:5",null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("49");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_Add");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new CheckBox("ck_SalesEmpReturn","1063","229",null,"22","btn_CreditPlus:16",null,null,null,null,null,this.tab_Info.tpg_Credit.form);
            obj.set_taborder("51");
            obj.set_text("담당영업 회신");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.getSetter("TL_SEQ").set("882");
            obj.set_font("12px \"noto\",\"Malgun Gothic\",\"Arial\"");
            obj.set_visible("false");
            this.tab_Info.tpg_Credit.addChild(obj.name, obj);

            obj = new Tabpage("tpg_Contract",this.tab_Info);
            obj.set_text("거래내역");
            obj.getSetter("TL_SEQ").set("835");
            this.tab_Info.addChild(obj.name, obj);

            obj = new Grid("grd_ContractList01","0","111",null,"35.638297872340424%","49.16%",null,null,null,null,null,this.tab_Info.tpg_Contract.form);
            obj.set_taborder("11");
            obj.set_autofittype("col");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj.set_binddataset("dsContractTotal");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"28\"/><Row size=\"28\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"계약구분\" TL_SEQ=\"123\"/><Cell col=\"1\" colspan=\"2\" text=\"누적거래내역\" TL_SEQ=\"889\"/><Cell col=\"3\" colspan=\"2\" text=\"최근1년거래내역\" TL_SEQ=\"890\"/><Cell row=\"1\" col=\"1\" text=\"계약금\" TL_SEQ=\"891\"/><Cell row=\"1\" col=\"2\" text=\"건수\" TL_SEQ=\"287\"/><Cell row=\"1\" col=\"3\" text=\"계약금\" TL_SEQ=\"891\"/><Cell row=\"1\" col=\"4\" text=\"건수\" TL_SEQ=\"287\"/></Band><Band id=\"body\"><Cell text=\"bind:CONTRACT_TYPE_NAME\"/><Cell col=\"1\" text=\"bind:CONTRACT_PRICE_SUM\" displaytype=\"expr:comp.parent.parent.parent.parent.gfn_getPriceDisplayType(&apos;number&apos;)\" textAlign=\"right\" maskedittype=\"expr:comp.parent.parent.parent.parent.gfn_getPriceMaskEdtType()\" maskeditformat=\"expr:comp.parent.parent.parent.parent.gfn_getPriceMaskformat(CONTRACT_PRICE_SUM)\"/><Cell col=\"2\" text=\"bind:CONTRACT_CNT\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"3\" text=\"bind:CONTRACT_PRICE_SUM_1\" displaytype=\"expr:comp.parent.parent.parent.parent.gfn_getPriceDisplayType(&apos;number&apos;)\" textAlign=\"right\" maskedittype=\"expr:comp.parent.parent.parent.parent.gfn_getPriceMaskEdtType()\" maskeditformat=\"expr:comp.parent.parent.parent.parent.gfn_getPriceMaskformat(CONTRACT_PRICE_SUM_1)\"/><Cell col=\"4\" text=\"bind:CONTRACT_CNT_1\" displaytype=\"number\" textAlign=\"right\"/></Band><Band id=\"summary\"><Cell text=\"합계\" TL_SEQ=\"437\"/><Cell col=\"1\" displaytype=\"expr:comp.parent.parent.parent.parent.gfn_getPriceDisplayType(&apos;number&apos;)\" text=\"expr:dataset.getSum(&quot;CONTRACT_PRICE_SUM&quot;)\" textAlign=\"right\" maskedittype=\"expr:comp.parent.parent.parent.parent.gfn_getPriceMaskEdtType()\" maskeditformat=\"expr:comp.parent.parent.parent.parent.gfn_getPriceMaskformat(dataset.getSum(&quot;CONTRACT_PRICE_SUM&quot;))\"/><Cell col=\"2\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;CONTRACT_CNT&quot;)\" textAlign=\"right\"/><Cell col=\"3\" displaytype=\"expr:comp.parent.parent.parent.parent.gfn_getPriceDisplayType(&apos;number&apos;)\" text=\"expr:dataset.getSum(&quot;CONTRACT_PRICE_SUM_1&quot;)\" textAlign=\"right\" maskedittype=\"expr:comp.parent.parent.parent.parent.gfn_getPriceMaskEdtType()\" maskeditformat=\"expr:comp.parent.parent.parent.parent.gfn_getPriceMaskformat(dataset.getSum(&quot;CONTRACT_PRICE_SUM_1&quot;))\"/><Cell col=\"4\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;CONTRACT_CNT_1&quot;)\" textAlign=\"right\"/></Band></Format></Formats>");
            this.tab_Info.tpg_Contract.addChild(obj.name, obj);

            obj = new Grid("grd_ContractList","0","grd_ContractList01:10",null,null,"49.19%","3",null,null,null,null,this.tab_Info.tpg_Contract.form);
            obj.set_taborder("0");
            obj.set_autofittype("none");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj.set_binddataset("dsContractList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"120\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"고객사\" TL_SEQ=\"32\"/><Cell col=\"2\" text=\"계약처\" TL_SEQ=\"34\"/><Cell col=\"3\" text=\"구분\" TL_SEQ=\"68\"/><Cell col=\"4\" text=\"고객사\" TL_SEQ=\"32\"/><Cell col=\"5\" text=\"계약처\" TL_SEQ=\"34\"/><Cell col=\"6\" text=\"계약명\" TL_SEQ=\"33\"/><Cell col=\"7\" text=\"계약일\" TL_SEQ=\"490\"/><Cell col=\"8\" text=\"계약금액&#13;&#10;(VAT별도)\" TL_SEQ=\"1013\"/><Cell col=\"9\" text=\"영업대표\" TL_SEQ=\"55\"/><Cell col=\"10\" text=\"계약제품\" TL_SEQ=\"332\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CLIENT_FLAG\" displaytype=\"checkboxcontrol\"/><Cell col=\"2\" text=\"bind:CONTRACT_MAIN_FLAG\" displaytype=\"checkboxcontrol\"/><Cell col=\"3\" text=\"bind:CONTRACT_TYPE_NAME\"/><Cell col=\"4\" text=\"bind:CLIENT_NAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:CONTRACT_MAIN_NAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:CONTRACT_NAME\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:CONTRACT_DATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"8\" text=\"bind:CONTRACT_PRICE\" displaytype=\"expr:comp.parent.parent.parent.parent.gfn_getPriceDisplayType(&apos;number&apos;)\" textAlign=\"right\" maskedittype=\"expr:comp.parent.parent.parent.parent.gfn_getPriceMaskEdtType()\" maskeditformat=\"expr:comp.parent.parent.parent.parent.gfn_getPriceMaskformat(CONTRACT_PRICE)\"/><Cell col=\"9\" text=\"bind:EMP_NAME\"/><Cell col=\"10\" text=\"bind:PRODUCT_NAME\" textAlign=\"left\"/></Band></Format></Formats>");
            this.tab_Info.tpg_Contract.addChild(obj.name, obj);

            obj = new Grid("grd_PurchaseList01","grd_ContractList01:10","111",null,"35.638297872340424%","0.00%",null,null,null,null,null,this.tab_Info.tpg_Contract.form);
            obj.set_taborder("21");
            obj.set_autofittype("col");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj.set_binddataset("dsPurchaseTotal");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"28\"/><Row size=\"28\" band=\"summ\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"계약구분\" TL_SEQ=\"123\"/><Cell col=\"1\" colspan=\"2\" text=\"누적거래내역\" TL_SEQ=\"889\"/><Cell col=\"3\" colspan=\"2\" text=\"최근1년거래내역\" TL_SEQ=\"890\"/><Cell row=\"1\" col=\"1\" text=\"계약금\" TL_SEQ=\"891\"/><Cell row=\"1\" col=\"2\" text=\"건수\" TL_SEQ=\"287\"/><Cell row=\"1\" col=\"3\" text=\"계약금\" TL_SEQ=\"891\"/><Cell row=\"1\" col=\"4\" text=\"건수\" TL_SEQ=\"287\"/></Band><Band id=\"body\"><Cell text=\"bind:CONTRACT_TYPE_NAME\"/><Cell col=\"1\" text=\"bind:CONTRACT_PRICE_SUM\" displaytype=\"expr:comp.parent.parent.parent.parent.gfn_getPriceDisplayType(&apos;number&apos;)\" textAlign=\"right\" maskedittype=\"expr:comp.parent.parent.parent.parent.gfn_getPriceMaskEdtType()\" maskeditformat=\"expr:comp.parent.parent.parent.parent.gfn_getPriceMaskformat(CONTRACT_PRICE_SUM)\"/><Cell col=\"2\" text=\"bind:CONTRACT_CNT\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"3\" text=\"bind:CONTRACT_PRICE_SUM_1\" displaytype=\"expr:comp.parent.parent.parent.parent.gfn_getPriceDisplayType(&apos;number&apos;)\" textAlign=\"right\" maskedittype=\"expr:comp.parent.parent.parent.parent.gfn_getPriceMaskEdtType()\" maskeditformat=\"expr:comp.parent.parent.parent.parent.gfn_getPriceMaskformat(CONTRACT_PRICE_SUM_1)\"/><Cell col=\"4\" text=\"bind:CONTRACT_CNT_1\" displaytype=\"number\" textAlign=\"right\"/></Band><Band id=\"summary\"><Cell text=\"합계\" TL_SEQ=\"437\"/><Cell col=\"1\" displaytype=\"expr:comp.parent.parent.parent.parent.gfn_getPriceDisplayType(&apos;number&apos;)\" text=\"expr:dataset.getSum(&quot;CONTRACT_PRICE_SUM&quot;)\" textAlign=\"right\" maskedittype=\"expr:comp.parent.parent.parent.parent.gfn_getPriceMaskEdtType()\" maskeditformat=\"expr:comp.parent.parent.parent.parent.gfn_getPriceMaskformat(dataset.getSum(&quot;CONTRACT_PRICE_SUM&quot;))\"/><Cell col=\"2\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;CONTRACT_CNT&quot;)\" textAlign=\"right\"/><Cell col=\"3\" displaytype=\"expr:comp.parent.parent.parent.parent.gfn_getPriceDisplayType(&apos;number&apos;)\" text=\"expr:dataset.getSum(&quot;CONTRACT_PRICE_SUM_1&quot;)\" textAlign=\"right\" maskedittype=\"expr:comp.parent.parent.parent.parent.gfn_getPriceMaskEdtType()\" maskeditformat=\"expr:comp.parent.parent.parent.parent.gfn_getPriceMaskformat(dataset.getSum(&quot;CONTRACT_PRICE_SUM_1&quot;))\"/><Cell col=\"4\" displaytype=\"number\" text=\"expr:dataset.getSum(&quot;CONTRACT_CNT_1&quot;)\" textAlign=\"right\"/></Band></Format></Formats>");
            this.tab_Info.tpg_Contract.addChild(obj.name, obj);

            obj = new Grid("grd_PurchaseList","51.61%","grd_PurchaseList01:10",null,null,"0.08%","3",null,null,null,null,this.tab_Info.tpg_Contract.form);
            obj.set_taborder("1");
            obj.set_autofittype("none");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj.set_binddataset("dsPurchaseList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"50\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"120\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"고객사\" TL_SEQ=\"32\"/><Cell col=\"2\" text=\"계약처\" TL_SEQ=\"34\"/><Cell col=\"3\" text=\"구분\" TL_SEQ=\"68\"/><Cell col=\"4\" text=\"고객사\" TL_SEQ=\"32\"/><Cell col=\"5\" text=\"계약처\" TL_SEQ=\"34\"/><Cell col=\"6\" text=\"계약명\" TL_SEQ=\"33\"/><Cell col=\"7\" text=\"계약일\" TL_SEQ=\"490\"/><Cell col=\"8\" text=\"계약금액&#13;&#10;(VAT별도)\" TL_SEQ=\"1013\"/><Cell col=\"9\" text=\"영업대표\" TL_SEQ=\"55\"/><Cell col=\"10\" text=\"계약제품\" TL_SEQ=\"332\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" text=\"bind:CLIENT_FLAG\" displaytype=\"checkboxcontrol\"/><Cell col=\"2\" text=\"bind:CONTRACT_MAIN_FLAG\" displaytype=\"checkboxcontrol\"/><Cell col=\"3\" text=\"bind:CONTRACT_TYPE_NAME\"/><Cell col=\"4\" text=\"bind:CLIENT_NAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:CONTRACT_MAIN_NAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:CONTRACT_NAME\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:CONTRACT_DATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"8\" text=\"bind:CONTRACT_PRICE\" displaytype=\"expr:comp.parent.parent.parent.parent.gfn_getPriceDisplayType(&apos;number&apos;)\" textAlign=\"right\" maskedittype=\"expr:comp.parent.parent.parent.parent.gfn_getPriceMaskEdtType()\" maskeditformat=\"expr:comp.parent.parent.parent.parent.gfn_getPriceMaskformat(CONTRACT_PRICE)\"/><Cell col=\"9\" text=\"bind:EMP_NAME\"/><Cell col=\"10\" text=\"bind:PRODUCT_NAME\" textAlign=\"left\"/></Band></Format></Formats>");
            this.tab_Info.tpg_Contract.addChild(obj.name, obj);

            obj = new Static("stc_FoundationDate","6","43","84","22",null,null,null,null,null,null,this.tab_Info.tpg_Contract.form);
            obj.set_taborder("2");
            obj.set_text("최초거래일자");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("884");
            this.tab_Info.tpg_Contract.addChild(obj.name, obj);

            obj = new MaskEdit("medt_MinContractDate","96","43","82","22",null,null,null,null,null,null,this.tab_Info.tpg_Contract.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            obj.set_format("####-##-##");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.tab_Info.tpg_Contract.addChild(obj.name, obj);

            obj = new Static("stc_FoundationDate00","6","73","84","22",null,null,null,null,null,null,this.tab_Info.tpg_Contract.form);
            obj.set_taborder("4");
            obj.set_text("마지막거래일자");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("885");
            this.tab_Info.tpg_Contract.addChild(obj.name, obj);

            obj = new MaskEdit("medt_MaxContractDate","96","73","82","22",null,null,null,null,null,null,this.tab_Info.tpg_Contract.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_format("####-##-##");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.tab_Info.tpg_Contract.addChild(obj.name, obj);

            obj = new Static("stc_FoundationDate01","190","43","130","22",null,null,null,null,null,null,this.tab_Info.tpg_Contract.form);
            obj.set_taborder("6");
            obj.set_text("수금주기");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("886");
            this.tab_Info.tpg_Contract.addChild(obj.name, obj);

            obj = new Static("stc_FoundationDate02","190","73","130","22",null,null,null,null,null,null,this.tab_Info.tpg_Contract.form);
            obj.set_taborder("7");
            obj.set_text("건당 최대 계약금");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("887");
            this.tab_Info.tpg_Contract.addChild(obj.name, obj);

            obj = new MaskEdit("edt_AvgBillDate","328","43","62","22",null,null,null,null,null,null,this.tab_Info.tpg_Contract.form);
            obj.set_taborder("8");
            obj.set_format("9,999");
            obj.set_readonly("true");
            this.tab_Info.tpg_Contract.addChild(obj.name, obj);

            obj = new MaskEdit("edt_MaxContractPrice","328","73","86","22",null,null,null,null,null,null,this.tab_Info.tpg_Contract.form);
            obj.set_taborder("9");
            obj.set_format("9,999");
            obj.set_readonly("true");
            this.tab_Info.tpg_Contract.addChild(obj.name, obj);

            obj = new Static("stc_FoundationDate03","396","43","12","22",null,null,null,null,null,null,this.tab_Info.tpg_Contract.form);
            obj.set_taborder("10");
            obj.set_text("일");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("left");
            obj.getSetter("TL_SEQ").set("888");
            this.tab_Info.tpg_Contract.addChild(obj.name, obj);

            obj = new Static("stc_FoundationDate04","654.00","43","84","22",null,null,null,null,null,null,this.tab_Info.tpg_Contract.form);
            obj.set_taborder("12");
            obj.set_text("최초거래일자");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("884");
            this.tab_Info.tpg_Contract.addChild(obj.name, obj);

            obj = new MaskEdit("cal_MinPurchaseDate","744.00","43","82","22",null,null,null,null,null,null,this.tab_Info.tpg_Contract.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            obj.set_format("####-##-##");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.tab_Info.tpg_Contract.addChild(obj.name, obj);

            obj = new Static("stc_FoundationDate05","654.00","73","84","22",null,null,null,null,null,null,this.tab_Info.tpg_Contract.form);
            obj.set_taborder("14");
            obj.set_text("마지막거래일자");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("885");
            this.tab_Info.tpg_Contract.addChild(obj.name, obj);

            obj = new MaskEdit("cal_MaxPurchaseDate","744.00","73","82","22",null,null,null,null,null,null,this.tab_Info.tpg_Contract.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            obj.set_format("####-##-##");
            obj.set_type("string");
            obj.set_textAlign("left");
            this.tab_Info.tpg_Contract.addChild(obj.name, obj);

            obj = new Static("stc_FoundationDate06","830.00","43","110","22",null,null,null,null,null,null,this.tab_Info.tpg_Contract.form);
            obj.set_taborder("16");
            obj.set_text("지급주기");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("892");
            this.tab_Info.tpg_Contract.addChild(obj.name, obj);

            obj = new Static("stc_FoundationDate07","830.00","73","110","22",null,null,null,null,null,null,this.tab_Info.tpg_Contract.form);
            obj.set_taborder("17");
            obj.set_text("건당 최대 계약금");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("887");
            this.tab_Info.tpg_Contract.addChild(obj.name, obj);

            obj = new MaskEdit("edt_AvgPayDate","946.00","43","62","22",null,null,null,null,null,null,this.tab_Info.tpg_Contract.form);
            obj.set_taborder("18");
            obj.set_format("9,999");
            obj.set_readonly("true");
            this.tab_Info.tpg_Contract.addChild(obj.name, obj);

            obj = new MaskEdit("edt_MaxPurchasePrice","946.00","73","86","22",null,null,null,null,null,null,this.tab_Info.tpg_Contract.form);
            obj.set_taborder("19");
            obj.set_format("9,999");
            obj.set_readonly("true");
            this.tab_Info.tpg_Contract.addChild(obj.name, obj);

            obj = new Static("stc_FoundationDate08","1014.00","43","12","22",null,null,null,null,null,null,this.tab_Info.tpg_Contract.form);
            obj.set_taborder("20");
            obj.set_text("일");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("left");
            obj.getSetter("TL_SEQ").set("888");
            this.tab_Info.tpg_Contract.addChild(obj.name, obj);

            obj = new Static("stc_SalesProd1","6.00","11","134","19",null,null,null,null,null,null,this.tab_Info.tpg_Contract.form);
            obj.set_taborder("22");
            obj.set_text("[매출]");
            obj.set_visible("true");
            obj.set_cssclass("sta_POP_GroupTit");
            obj.getSetter("TL_SEQ").set("893");
            this.tab_Info.tpg_Contract.addChild(obj.name, obj);

            obj = new Static("stc_SalesProd00","654.00","11","134","19",null,null,null,null,null,null,this.tab_Info.tpg_Contract.form);
            obj.set_taborder("23");
            obj.set_text("[매입]");
            obj.set_visible("true");
            obj.set_cssclass("sta_POP_GroupTit");
            obj.getSetter("TL_SEQ").set("894");
            this.tab_Info.tpg_Contract.addChild(obj.name, obj);

            obj = new TextArea("txt_ConractRemark","438.00","39","182","62",null,null,null,null,null,null,this.tab_Info.tpg_Contract.form);
            obj.set_taborder("24");
            this.tab_Info.tpg_Contract.addChild(obj.name, obj);

            obj = new TextArea("txt_PurchaseRemark","1056.00","39","182","62",null,null,null,null,null,null,this.tab_Info.tpg_Contract.form);
            obj.set_taborder("25");
            this.tab_Info.tpg_Contract.addChild(obj.name, obj);

            obj = new Tabpage("tpg_Person",this.tab_Info);
            obj.set_text("담당자");
            obj.getSetter("TL_SEQ").set("66");
            this.tab_Info.addChild(obj.name, obj);

            obj = new Grid("grd_AddressBook","0","3",null,null,"0","212",null,null,null,null,this.tab_Info.tpg_Person.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsAddressBook");
            obj.set_autoenter("select");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"53\"/><Column size=\"51\"/><Column size=\"38\"/><Column size=\"145\"/><Column size=\"118\"/><Column size=\"122\"/><Column size=\"111\"/><Column size=\"142\"/><Column size=\"140\"/><Column size=\"178\"/><Column size=\"281\"/><Column size=\"108\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"재직\" TL_SEQ=\"78\"/><Cell col=\"1\" text=\"E-Tax\" TL_SEQ=\"635\"/><Cell col=\"2\" text=\"발주\" TL_SEQ=\"636\"/><Cell col=\"3\" text=\"부서\" TL_SEQ=\"74\"/><Cell col=\"4\" text=\"역할\" TL_SEQ=\"75\"/><Cell col=\"5\" text=\"담당자명\" TL_SEQ=\"895\"/><Cell col=\"6\" text=\"직급\" TL_SEQ=\"26\"/><Cell col=\"7\" text=\"유선번호\" TL_SEQ=\"896\"/><Cell col=\"8\" text=\"휴대폰\" TL_SEQ=\"897\"/><Cell col=\"9\" text=\"이메일\" TL_SEQ=\"80\"/><Cell col=\"10\" text=\"비고\" TL_SEQ=\"45\"/><Cell col=\"11\" text=\"반영일\" TL_SEQ=\"898\"/><Cell col=\"12\" text=\"반영직원\" TL_SEQ=\"899\"/></Band><Band id=\"body\"><Cell text=\"bind:HOLD_OFFICE\" combodataset=\"ds_CD_HOLD_OFFICE\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"1\" text=\"bind:ETAX_FLAG\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"2\" text=\"bind:ORDER_FLAG\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"3\" text=\"bind:DEPT_NM\" edittype=\"text\" displaytype=\"text\"/><Cell col=\"4\" text=\"bind:ROLE_CD\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_CD_ROLE_CODE\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/><Cell col=\"5\" text=\"bind:EMP_NM\" edittype=\"text\" displaytype=\"text\"/><Cell col=\"6\" text=\"bind:GRADE_CD\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_CD_GRADE_CODE\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" combotype=\"search\"/><Cell col=\"7\" text=\"bind:O_PHONE_NO\" edittype=\"text\" displaytype=\"text\"/><Cell col=\"8\" text=\"bind:H_PHONE_NO\" edittype=\"text\" displaytype=\"text\"/><Cell col=\"9\" text=\"bind:EMAIL\" edittype=\"text\" displaytype=\"text\"/><Cell col=\"10\" text=\"bind:REMARKS\" edittype=\"text\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:UPDATE_DATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"12\" text=\"bind:UPDATE_EMP_NAME\"/></Band></Format><Format id=\"SELECT\"><Columns><Column size=\"48\"/><Column size=\"40\"/><Column size=\"45\"/><Column size=\"30\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"선택\" TL_SEQ=\"113\"/><Cell col=\"1\" text=\"현황\" TL_SEQ=\"78\"/><Cell col=\"2\" text=\"E-Tax\" TL_SEQ=\"635\"/><Cell col=\"3\" text=\"발주\" TL_SEQ=\"636\"/><Cell col=\"4\" text=\"부서\" TL_SEQ=\"74\"/><Cell col=\"5\" text=\"역할\" TL_SEQ=\"75\"/><Cell col=\"6\" text=\"담당자명\" TL_SEQ=\"895\"/><Cell col=\"7\" text=\"직급\" TL_SEQ=\"26\"/><Cell col=\"8\" text=\"유선번호\" TL_SEQ=\"896\"/><Cell col=\"9\" text=\"휴대폰\" TL_SEQ=\"897\"/><Cell col=\"10\" text=\"이메일\" TL_SEQ=\"80\"/><Cell col=\"11\" text=\"비고\" TL_SEQ=\"45\"/><Cell col=\"12\" text=\"반영일\" TL_SEQ=\"898\"/><Cell col=\"13\" text=\"반영직원\" TL_SEQ=\"899\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHECK\"/><Cell col=\"1\" text=\"bind:HOLD_OFFICE\" combodataset=\"ds_CD_HOLD_OFFICE\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"2\" text=\"bind:ETAX_FLAG\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"3\" text=\"bind:ORDER_FLAG\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"4\" text=\"bind:DEPT_NAME\" edittype=\"text\" displaytype=\"text\"/><Cell col=\"5\" text=\"bind:ROLE_CODE\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_CD_ROLE_CODE\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/><Cell col=\"6\" text=\"bind:EMP_NAME\" edittype=\"text\" displaytype=\"text\"/><Cell col=\"7\" text=\"bind:GRADE_CODE\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_CD_GRADE_CODE\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" combotype=\"search\"/><Cell col=\"8\" text=\"bind:O_PHONE_NO\" edittype=\"text\" displaytype=\"text\"/><Cell col=\"9\" text=\"bind:H_PHONE_NO\" edittype=\"text\" displaytype=\"text\"/><Cell col=\"10\" text=\"bind:EMAIL\" edittype=\"text\" displaytype=\"text\"/><Cell col=\"11\" text=\"bind:REMARKS\" edittype=\"text\" displaytype=\"text\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:UPDATE_DATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"13\" text=\"bind:UPDATE_EMP_NAME\"/></Band></Format></Formats>");
            this.tab_Info.tpg_Person.addChild(obj.name, obj);

            obj = new Static("stc_Remark","9","401","60","36",null,null,null,null,null,null,this.tab_Info.tpg_Person.form);
            obj.set_taborder("1");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("45");
            this.tab_Info.tpg_Person.addChild(obj.name, obj);

            obj = new TextArea("txt_Remark","stc_Remark:20","grd_AddressBook:10","514",null,null,"15",null,null,null,null,this.tab_Info.tpg_Person.form);
            obj.set_taborder("2");
            this.tab_Info.tpg_Person.addChild(obj.name, obj);

            obj = new Static("stc_Remark00","txt_Remark:100","401","60","36",null,null,null,null,null,null,this.tab_Info.tpg_Person.form);
            obj.set_taborder("3");
            obj.set_text("변경이력");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("900");
            this.tab_Info.tpg_Person.addChild(obj.name, obj);

            obj = new TextArea("txt_Remark00","stc_Remark00:20","grd_AddressBook:10","399",null,null,"15",null,null,null,null,this.tab_Info.tpg_Person.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            this.tab_Info.tpg_Person.addChild(obj.name, obj);

            obj = new Button("btn_Minus",null,"26","33","25","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_Delete");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Plus",null,"26","33","25","btn_Minus:10",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_visible("false");
            obj.set_cssclass("btn_WF_Add");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Confirm",null,"26","60","25","btn_Plus:10",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("선택");
            obj.set_visible("false");
            obj.set_cssclass("btn_TFDM_Add");
            obj.getSetter("TL_SEQ").set("113");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("wb_PostalSearch","8.00","870","72","71",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ExcelPurchaseList",null,null,"68","22","btn_Save:70","21",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Excel");
            obj.set_cssclass("btn_WF_Excel");
            obj.set_visible("false");
            obj.set_tooltiptext("매입리스트");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("div_Reason","111.00","861","345","219",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #dddddd");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Exception","14.00","55","100","24",null,null,null,null,null,null,this.div_Reason.form);
            obj.set_taborder("0");
            obj.set_text("요청영업사원");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("901");
            this.div_Reason.addChild(obj.name, obj);

            obj = new Combo("cmb_SalesEmp","131.00","55","200","24",null,null,null,null,null,null,this.div_Reason.form);
            obj.set_taborder("1");
            obj.set_codecolumn("EMP_NO");
            obj.set_datacolumn("EMP_NAME");
            obj.set_innerdataset("dsSalesEmpList");
            obj.set_text("");
            this.div_Reason.addChild(obj.name, obj);

            obj = new Static("stc_Remark","14.00","98","100","32",null,null,null,null,null,null,this.div_Reason.form);
            obj.set_taborder("2");
            obj.set_text("변경사유");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("902");
            this.div_Reason.addChild(obj.name, obj);

            obj = new TextArea("txt_Remark","131.00","84","200","83",null,null,null,null,null,null,this.div_Reason.form);
            obj.set_taborder("3");
            this.div_Reason.addChild(obj.name, obj);

            obj = new Button("btn_PopClose3",null,null,"65","24","10","8",null,null,null,null,this.div_Reason.form);
            obj.set_taborder("4");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_CrudSave");
            obj.getSetter("TL_SEQ").set("115");
            this.div_Reason.addChild(obj.name, obj);

            obj = new Div("divMainBg","0","0",null,"40","0",null,null,null,null,null,this.div_Reason.form);
            obj.set_taborder("5");
            obj.set_cssclass("div_POP_TitleBg");
            this.div_Reason.addChild(obj.name, obj);

            obj = new Button("btn_PopClose3",null,"4","31","31","8",null,null,null,null,null,this.div_Reason.form.divMainBg.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_POP_Close");
            obj.set_tooltiptext("창닫기");
            this.div_Reason.form.divMainBg.addChild(obj.name, obj);

            obj = new Static("Static00","10.00","0",null,null,"37","0",null,null,null,null,this.div_Reason.form.divMainBg.form);
            obj.set_taborder("1");
            obj.set_text("담당자의견 변경사유");
            obj.getSetter("TL_SEQ").set("903");
            obj.set_color("#ffffff");
            this.div_Reason.form.divMainBg.addChild(obj.name, obj);

            obj = new PopupDiv("div_History","467.00","861","734","269",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.getSetter("taborder").set("13");
            obj.set_background("#ffffff");
            obj.set_borderRadius("5px");
            obj.set_border("2px solid #dddddd");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_AdminOpinion","10","47",null,null,"10","10",null,null,null,null,this.div_History.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsAdminOpinion");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"90\"/><Column size=\"205\"/><Column size=\"223\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"요청영업\" TL_SEQ=\"905\"/><Cell col=\"2\" text=\"수정자\" TL_SEQ=\"337\"/><Cell col=\"3\" text=\"수정일\" TL_SEQ=\"336\"/><Cell col=\"4\" text=\"담당자의견\" TL_SEQ=\"867\"/><Cell col=\"5\" text=\"변경사유\" TL_SEQ=\"902\"/></Band><Band id=\"body\"><Cell displaytype=\"number\" text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:SALES_EMP_NAME\"/><Cell col=\"2\" text=\"bind:INSERT_EMP_NAME\"/><Cell col=\"3\" text=\"bind:INSERT_DATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"4\" text=\"bind:CL_OPINION\" displaytype=\"combotext\" combodataset=\"ds_CD_CL_OPINION\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:REMARKS_REASON\" displaytype=\"text\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_History.addChild(obj.name, obj);

            obj = new Button("btn_PopClose2",null,"13","15","15","15",null,null,null,null,null,this.div_History.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_POP_close");
            obj.set_text("");
            this.div_History.addChild(obj.name, obj);

            obj = new Div("divMainBg","0","0",null,"40","0",null,null,null,null,null,this.div_History.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_POP_TitleBg");
            this.div_History.addChild(obj.name, obj);

            obj = new Button("btn_PopClose2",null,"4","31","31","8",null,null,null,null,null,this.div_History.form.divMainBg.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_POP_Close");
            obj.set_tooltiptext("창닫기");
            this.div_History.form.divMainBg.addChild(obj.name, obj);

            obj = new Static("Static00","10.00","0",null,null,"37","0",null,null,null,null,this.div_History.form.divMainBg.form);
            obj.set_taborder("1");
            obj.set_text("담당자의견 변경사유");
            obj.getSetter("TL_SEQ").set("903");
            obj.set_color("#ffffff");
            this.div_History.form.divMainBg.addChild(obj.name, obj);

            obj = new Button("btn_ExcelPurchase",null,null,"68","22","btn_ExcelPurchaseList:4","21",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Excel");
            obj.set_cssclass("btn_WF_Excel");
            obj.set_visible("false");
            obj.set_tooltiptext("매입요약");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ExcelContractList",null,null,"68","22","btn_ExcelPurchase:4","21",null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Excel");
            obj.set_cssclass("btn_WF_Excel");
            obj.set_visible("false");
            obj.set_tooltiptext("매출리스트");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ExcelContract",null,null,"68","22","btn_ExcelContractList:4","21",null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("Excel");
            obj.set_cssclass("btn_WF_Excel");
            obj.set_visible("false");
            obj.set_tooltiptext("매출요약");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_Attachment02
            obj = new Layout("default","",0,0,this.div_Attachment02.form,function(p){});
            this.div_Attachment02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_Info.tpg_BasicInfo.form.divTag
            obj = new Layout("default","",0,0,this.tab_Info.tpg_BasicInfo.form.divTag.form,function(p){});
            this.tab_Info.tpg_BasicInfo.form.divTag.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_Info.tpg_BasicInfo.form
            obj = new Layout("default","",0,0,this.tab_Info.tpg_BasicInfo.form,function(p){});
            this.tab_Info.tpg_BasicInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_Info.tpg_Credit.form
            obj = new Layout("default","",0,0,this.tab_Info.tpg_Credit.form,function(p){});
            this.tab_Info.tpg_Credit.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_Info.tpg_Contract.form
            obj = new Layout("default","",0,0,this.tab_Info.tpg_Contract.form,function(p){});
            this.tab_Info.tpg_Contract.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_Info.tpg_Person.form
            obj = new Layout("default","",0,0,this.tab_Info.tpg_Person.form,function(p){});
            this.tab_Info.tpg_Person.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_Reason.form.divMainBg.form
            obj = new Layout("default","",0,0,this.div_Reason.form.divMainBg.form,function(p){});
            this.div_Reason.form.divMainBg.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_Reason.form
            obj = new Layout("default","",0,0,this.div_Reason.form,function(p){});
            this.div_Reason.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_History.form.divMainBg.form
            obj = new Layout("default","",0,0,this.div_History.form.divMainBg.form,function(p){});
            this.div_History.form.divMainBg.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_History.form
            obj = new Layout("default","",0,0,this.div_History.form,function(p){});
            this.div_History.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tab_Info.tpg_BasicInfo.form.edt_CorporateRegistrationNumber","value","dsCompany","COMPANY_REG_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tab_Info.tpg_BasicInfo.form.chb_ClientCompany","value","dsCompany","CLIENT_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab_Info.tpg_BasicInfo.form.chb_PlaceOfContract","value","dsCompany","COMPANY_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","tab_Info.tpg_BasicInfo.form.chb_FakeCode","value","dsCompany","TMP_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab_Info.tpg_BasicInfo.form.chb_BlackList","value","dsCompany","BLACKLIST_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tab_Info.tpg_BasicInfo.form.edt_OriginContractNo00","value","dsCompany","TAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tab_Info.tpg_BasicInfo.form.cmb_Nation","value","dsCompany","NATION_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","tab_Info.tpg_BasicInfo.form.txt_Remark","value","dsCompany","REMARKS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","tab_Info.tpg_BasicInfo.form.cmb_CompanySize","value","dsCompany","BUSINESS_SCALE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","tab_Info.tpg_BasicInfo.form.cmb_LargeCategory","value","dsCompany","L_CATEGORY_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","tab_Info.tpg_BasicInfo.form.cmb_MiddleCategory","value","dsCompany","M_CATEGORY_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","tab_Info.tpg_BasicInfo.form.edt_CorperateRegistrationNumber","value","dsCompany","CORPORATE_REG_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","tab_Info.tpg_BasicInfo.form.edt_RepresentName","value","dsCompany","CEO_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","tab_Info.tpg_BasicInfo.form.edt_RepresentNumber","value","dsCompany","CEO_PHONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","tab_Info.tpg_BasicInfo.form.cal_FoundationDate","value","dsCompany","INCORPORATION_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","tab_Info.tpg_BasicInfo.form.edt_Address","value","dsCompany","POST_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","tab_Info.tpg_BasicInfo.form.edt_Address2","value","dsCompany","DETAIL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","tab_Info.tpg_BasicInfo.form.edt_Telephone","value","dsCompany","PHONE_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","tab_Info.tpg_BasicInfo.form.edt_FaxNumber","value","dsCompany","FAX_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","tab_Info.tpg_BasicInfo.form.cmb_BusinessType","value","dsCompany","BUSINESS_KIND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","tab_Info.tpg_BasicInfo.form.edt_Code","value","dsCompany","PURCHASE_COMPANY_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","tab_Info.tpg_BasicInfo.form.chb_Product","value","dsCompany","PRODUCT_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","tab_Info.tpg_BasicInfo.form.chb_Si","value","dsCompany","SI_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","tab_Info.tpg_BasicInfo.form.chb_Solution","value","dsCompany","SOLUTION_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","tab_Info.tpg_BasicInfo.form.chb_Product2","value","dsCompany","GOODS_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","tab_Info.tpg_BasicInfo.form.chb_OfficialPartner","value","dsCompany","PARTNER_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","tab_Info.tpg_BasicInfo.form.cmb_CompanyStatus","value","dsCompany","COMPANY_STATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","tab_Info.tpg_BasicInfo.form.cmb_PlaceOfContract","value","dsCompany","COMPANY_KIND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","tab_Info.tpg_BasicInfo.form.cmb_BankName","value","dsCompany","BANK_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item47","tab_Info.tpg_BasicInfo.form.edt_AccountNumber","value","dsCompany","ACCOUNT_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item48","tab_Info.tpg_BasicInfo.form.edt_AccountName","value","dsCompany","ACCOUNT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item50","tab_Info.tpg_BasicInfo.form.cmb_BusinessCondition","value","dsCompany","BUSINESS_FORM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item51","tab_Info.tpg_BasicInfo.form.cmb_PartKind","value","dsCompany","PARTNER_KIND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item52","tab_Info.tpg_BasicInfo.form.CheckBox00","value","dsCompany","COLLECTION_BOND_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item53","tab_Info.tpg_BasicInfo.form.edt_PostNo","value","dsCompany","POST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item54","tab_Info.tpg_BasicInfo.form.edt_CompanyName","value","dsCompany","COMPANY_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","tab_Info.tpg_Credit.form.edt_Approver","value","dsCompany","CL_APPROVAL_EMP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","tab_Info.tpg_Credit.form.cal_ApproveDate","value","dsCompany","CL_APPROVAL_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item33","tab_Info.tpg_Credit.form.edt_EvaluationGrade","value","dsCompany","CL_EVALUATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item34","tab_Info.tpg_Credit.form.edt_Asset","value","dsCompany","CL_ASSET");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item35","tab_Info.tpg_Credit.form.cmb_AdminOpinion","value","dsCompany","CL_OPINION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item36","tab_Info.tpg_Credit.form.edt_TotalEmployees","value","dsCompany","CL_EMP_NUMBER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item37","tab_Info.tpg_Credit.form.cmb_Exception","value","dsCompany","CL_EXCEPTION_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item38","tab_Info.tpg_Credit.form.cmb_AdditionalScore1","value","dsCompany","CL_ADD_SCORE1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item39","tab_Info.tpg_Credit.form.cmb_AdditionalScore2","value","dsCompany","CL_ADD_SCORE2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","tab_Info.tpg_Credit.form.chb_Listed","value","dsCompany","CL_LISTED_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","tab_Info.tpg_Credit.form.cmb_AdditionalScore3","value","dsCompany","CL_ADD_SCORE3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","tab_Info.tpg_Credit.form.edt_Capital","value","dsCompany","CL_CAPITAL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item43","tab_Info.tpg_Credit.form.edt_YearSales","value","dsCompany","CL_ANNUAL_SALES");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","tab_Info.tpg_Credit.form.edt_NetProfit","value","dsCompany","CL_NET_INCOME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item45","tab_Info.tpg_Credit.form.edt_ProductService","value","dsCompany","CL_PS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item46","tab_Info.tpg_Credit.form.edt_Service","value","dsCompany","CL_SI");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item49","tab_Info.tpg_Credit.form.edt_Remainder","value","dsCompany","REST");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","tab_Info.tpg_Person.form.txt_Remark","value","dsAddressBook","REMARKS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","tab_Info.tpg_Credit.form.edt_CurrentAssets","value","dsCompany","CL_CURRENT_ASSETS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item55","tab_Info.tpg_Credit.form.edt_Profitability","value","dsCompany","CL_PROFITABILITY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item56","tab_Info.tpg_Credit.form.edt_Safety","value","dsCompany","CL_SAFETY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item57","tab_Info.tpg_Contract.form.medt_MinContractDate","value","dsContractSum","MIN_CONTRACT_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item58","tab_Info.tpg_Contract.form.medt_MaxContractDate","value","dsContractSum","MAX_CONTRACT_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item59","tab_Info.tpg_Contract.form.edt_AvgBillDate","value","dsContractSum","AVG_BILL_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item60","tab_Info.tpg_Contract.form.edt_MaxContractPrice","value","dsContractSum","MAX_CONTRACT_PRICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item61","tab_Info.tpg_Contract.form.cal_MinPurchaseDate","value","dsPurchaseSum","MIN_CONTRACT_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item62","tab_Info.tpg_Contract.form.cal_MaxPurchaseDate","value","dsPurchaseSum","MAX_CONTRACT_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item63","tab_Info.tpg_Contract.form.edt_AvgPayDate","value","dsPurchaseSum","AVG_PAY_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item64","tab_Info.tpg_Contract.form.edt_MaxPurchasePrice","value","dsPurchaseSum","MAX_CONTRACT_PRICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item65","tab_Info.tpg_Contract.form.txt_ConractRemark","value","dsCompany","CONTRACT_REMARKS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item66","tab_Info.tpg_Contract.form.txt_PurchaseRemark","value","dsCompany","PURCHASE_REMARKS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item67","tab_Info.tpg_BasicInfo.form.edt_ResponsibilitySalesMan","value","dsCompany","COMPANY_SALES_EMP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item68","PopupDiv00.form.cmb_Exception","value","dsCompany","CL_EXCEPTION_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item69","PopupDiv00.form.txt_Remark","value","dsCompany","REMARKS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item70","div_Reason.form.cmb_SalesEmp","value","dsAdminOpinion","SALES_EMP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item71","div_Reason.form.txt_Remark","value","dsAdminOpinion","REMARKS_REASON");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item72","tab_Info.tpg_BasicInfo.form.chb_DISP","value","dsCompany","SI_VIEW_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item73","tab_Info.tpg_BasicInfo.form.chb_TURNKEY","value","dsCompany","TURNKEY_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item75","tab_Info.tpg_Person.form.txt_Remark00","value","dsAddressBook","HISTORY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item74","tab_Info.tpg_BasicInfo.form.edt_CompanyAbbreviation","value","dsCompany","COMPANY_ABBREVIATION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item77","tab_Info.tpg_BasicInfo.form.edt_CompanyNameJap","value","dsCompany","COMPANY_NM_ENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item76","tab_Info.tpg_BasicInfo.form.chb_SubsidiaryCompany","value","dsCompany","SUBSIDIARY_COMPANY_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item78","tab_Info.tpg_BasicInfo.form.jPostAddr.form.edtSculZip","value","dsCompany","POST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item79","tab_Info.tpg_BasicInfo.form.jPostAddr.form.edtBasAddr","value","dsCompany","BASC_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item80","tab_Info.tpg_BasicInfo.form.jPostAddr.form.edtDetailAddr","value","dsCompany","DTL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","sales::comm/COM_Attachment.xfdl");
            this._addPreloadList("fdl","sales::comm/COM_Tag.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SC_CompanyReg.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("SC_CompanyReg.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("SC_CompanyReg.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("SC_CompanyReg.xfdl","Script::CommGrid.xjs");
        this.addIncludeScript("SC_CompanyReg.xfdl","Script::ext_Report.xjs");
        this.addIncludeScript("SC_CompanyReg.xfdl","Script::ext_Dataset.xjs");
        this.registerScript("SC_CompanyReg.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 : 공통 - 공통
        * 02. 화면명   : 회사정보 등록 (C_S01,
        								  SC_CompanyReg_R01)
        * 03. 화면설명 :
        * 04. 작성일   : 2018.08.20
        * 05. 작성자   : 안주환
        * 06. 수정이력 :
        ***********************************************************************************************
        *     수정일          이  름    사유
        ***********************************************************************************************
        *     2023.11.06       이상원    일문 회사명 추가 및 오류 수정
        ************************************************************************************************/

        /************************************************************************************************
        * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        this.executeIncludeScript("Script::CommSystem.xjs"); /*include "Script::CommSystem.xjs"*/;
        this.executeIncludeScript("Script::CommTrans.xjs"); /*include "Script::CommTrans.xjs"*/;
        this.executeIncludeScript("Script::CommUtil.xjs"); /*include "Script::CommUtil.xjs"*/;
        this.executeIncludeScript("Script::CommGrid.xjs"); /*include "Script::CommGrid.xjs"*/;
        this.executeIncludeScript("Script::ext_Report.xjs"); /*include "Script::ext_Report.xjs"*/;
        this.executeIncludeScript("Script::ext_Dataset.xjs"); /*include "Script::ext_Dataset.xjs"*/;
        /************************************************************************************************
        * 전역 변수 영역
        ************************************************************************************************/
        this.fvMode = "";
        this.fvTmpCompReg = false;
        this.bUpdate = false;
        this.trnasTarget = "";

        this.FV_AUTH_PRICE_MASK = false;

        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/
        this.SC_CompanyReg_onload = function(obj,e)
        {
        	this.gfnCompInit(obj); //헤더클릭 이벤트 없을 시 사용
        	this.fnFormInit();
        };

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.fnFormInit = function()
        {
        	if(this.getOwnerFrame().hasOwnProperty("TMP_COMP_REG")) {
        		this.fvTmpCompReg = this.parent.TMP_COMP_REG;
        	}

        	if(this.commUtil.getFormAuthority(254,1))	// 추가,삭제,저장 권한
        	{
        		// 회사 삭제 비활성화
        		if(!this.commUtil.getFormAuthority(254,1)) {
        			this.btn_Del.set_enable(true);
        		}
        		this.btn_Save.set_enable(true);
        		this.btn_Plus.set_enable(true);
        		this.btn_Minus.set_enable(true);
        		this.btn_CompanyAddMM.set_enable(true);
        	}
        	else if(this.commUtil.getFormAuthority(254,2))	// (담당자 추가,삭제), (가코드 회사 등록) 권한
        	{
        		this.btn_Save.set_enable(true);
        		this.btn_Plus.set_enable(true);
        		this.btn_Minus.set_enable(true);
          		if (!this.parent.TMP_COMP_REG) {
         			this.gfnCompDisable(this.tab_Info.tpg_BasicInfo.form, true);
         		}
         		this.gfnCompDisable(this.tab_Info.tpg_Contract.form, true);
         		this.gfnCompDisable(this.tab_Info.tpg_Credit.form, true);
        	}
        	else
        	{
        		this.gfnCompDisable(this.tab_Info.tpg_BasicInfo.form, true);
        		this.gfnCompDisable(this.tab_Info.tpg_Contract.form, true);
        		this.gfnCompDisable(this.tab_Info.tpg_Credit.form, true);
        		this.gfnCompDisable(this.tab_Info.tpg_Person.form, true);
        	}

        	// 부모폼에서 지정한 Tabindx로 바로 띄우기
        	if(this.parent.hasOwnProperty("TAB_INDEX")) {
        		if(!this.gfnIsEmpty(this.parent.TAB_INDEX)){
        			this.tab_Info.set_tabindex(this.parent.TAB_INDEX);
        		}
        	}
        	// Mode 설정을 통해 Popup의 조회용또는 등록용으로 사용
        	if(this.parent.hasOwnProperty("MODE")) {
        		this.fvMode = this.parent.MODE;
        		this.btn_Confirm.set_visible(true);
        		this.tab_Info.tpg_Person.form.grd_AddressBook.set_formatid("SELECT");
        	}

        	if (this.commUtil.getFormAuthority(254,4))	this.FV_AUTH_PRICE_MASK = true;	// 계약금액 마스킹 처리 권한

        	this.fn_setPriceMasking(this.tab_Info.tpg_Contract.form.edt_MaxContractPrice);
        	this.fn_setPriceMasking(this.tab_Info.tpg_Contract.form.edt_MaxPurchasePrice);


        	this.fnSetTooltip();
        	this.wb_PostalSearch.set_visible(false);
        	this.fnGetCode();

        	this.tab_Info.tpg_BasicInfo.form.jPostAddr.set_jspUrl(this.gfnGetServiceUrl() + "thirdParty/post/PostCall.jsp");
        }

        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fnGetCode = function()
        {
        	this.gfnAddCodeDataset("ds_CD_NATION_CODE"			,"NATION_CODE");
        	this.gfnAddCodeDataset("ds_CD_L_CATEGORY"			,"COM_L_C");
        	this.gfnAddCodeDataset("ds_CD_M_CATEGORY"			,"COM_M_C");
        	this.gfnAddCodeDataset("ds_CD_BUSINESS_SCALE"		,"BUSINESS_SCALE");
        	this.gfnAddCodeDataset("ds_CD_BUSINESS_FORM"		,"BUSINESS_FORM");
        	this.gfnAddCodeDataset("ds_CD_BUSINESS_KIND"		,"BUSINESS_KIND");
        	this.gfnAddCodeDataset("ds_CD_PARTNER_KIND" 		,"PARTNER_KIND");
        	this.gfnAddCodeDataset("ds_CD_COMPANY_STATE"		,"COMPANY_STATE");
        	this.gfnAddCodeDataset("ds_CD_COMPANY_KIND"			,"COMPANY_KIND");
        	this.gfnAddCodeDataset("ds_CD_BANK_CODE"			,"BANK_CODE");
        	this.gfnAddCodeDataset("ds_CD_CL_EXCEPTION_CODE"	,"CL_EXCEPTION_CODE");
        	this.gfnAddCodeDataset("ds_CD_CL_OPINION"			,"CL_OPINION");
        	this.gfnAddCodeDataset("ds_CD_CL_ADD_SCORE1"		,"CL_ADD_SCORE1");
        	this.gfnAddCodeDataset("ds_CD_CL_ADD_SCORE2"		,"CL_ADD_SCORE2");
        	this.gfnAddCodeDataset("ds_CD_CL_ADD_SCORE3"		,"CL_ADD_SCORE3");
        	this.gfnAddCodeDataset("ds_CD_ROLE_CODE"			,"CA_ROLE_CODE");
        	this.gfnAddCodeDataset("ds_CD_GRADE_CODE"			,"CA_GRADE_CODE");
        	this.gfnAddCodeDataset("ds_CD_LimitAmount"			,"CREDIT_SCORE");
        	this.gfnAddCodeDataset("ds_CD_CreditLevel"			,"CREDIT_LEVEL");
        	this.gfnAddCodeDataset("ds_CD_CreditCompany"		,"CREDIT_COMPANY");
        	this.gfnAddCodeDataset("ds_CD_HOLD_OFFICE"			,"CM0009");

        	// 공통코드 조회
        	this.gfnCodeTransaction();
        };

        this.fnSearch = function()
        {
        	// 조건값 셋팅
        	this.gfnAddSendParameter("COMPANY_CODE", this.parent.COMPANY_CODE);

        	var sMapper = "nextBaseMapper";
        	var arrMapId = [], arrOut = [];
        	var nCnt = 0;
        	arrMapId[nCnt++] = "DetailCompany";
        	arrMapId[nCnt++] = "DetailAddressBook";
        	//arrMapId[nCnt++] = "DetailSalesEmpList";
        	arrMapId[nCnt++] = "DetailContractList";
        	arrMapId[nCnt++] = "DetailPurchaseList";
        	arrMapId[nCnt++] = "DetailContractSum";
        	arrMapId[nCnt++] = "DetailContractTotal";
        	arrMapId[nCnt++] = "DetailPurchaseSum";
        	arrMapId[nCnt++] = "DetailPurchaseTotal";
        	arrMapId[nCnt++] = "DetailEvaluate";
        	arrMapId[nCnt++] = "DetailAdminOpinion";
        	arrMapId[nCnt++] = "DetailCredithistory";

        	nCnt = 0;
        	arrOut[nCnt++] = "dsCompany";
        	arrOut[nCnt++] = "dsAddressBook";
        	//arrOut[nCnt++] = "dsSalesEmpList";
        	arrOut[nCnt++] = "dsContractList";
        	arrOut[nCnt++] = "dsPurchaseList";
        	arrOut[nCnt++] = "dsContractSum";
        	arrOut[nCnt++] = "dsContractTotal";
        	arrOut[nCnt++] = "dsPurchaseSum";
        	arrOut[nCnt++] = "dsPurchaseTotal";
        	arrOut[nCnt++] = "dsEvaluate";
        	arrOut[nCnt++] = "dsAdminOpinion";
        	arrOut[nCnt++] = "dsCredithistory";

        	this.gfnSetMap("nextBaseMapper", arrMapId, arrOut);
        	this.gfnCommonTransaction("Select", "selectNextMultiList.do");

        	// 조회용 Output dataset 세팅
        	/*
        	this.gfnAddOutputDataset("dsCompany"		, "dsOutput");
        	this.gfnAddOutputDataset("dsAddressBook"	, "dsOutput2");
        	this.gfnAddOutputDataset("dsSalesEmpList"	, "dsOutput3");
        	this.gfnAddOutputDataset("dsContractList"	, "dsOutput4");
        	this.gfnAddOutputDataset("dsPurchaseList"	, "dsOutput5");
        	this.gfnAddOutputDataset("dsContractSum"	, "dsOutput6");
        	this.gfnAddOutputDataset("dsContractTotal"	, "dsOutput7");
        	this.gfnAddOutputDataset("dsPurchaseSum"	, "dsOutput8");
        	this.gfnAddOutputDataset("dsPurchaseTotal"	, "dsOutput9");
        	this.gfnAddOutputDataset("dsEvaluate"		, "dsOutput10");
        	this.gfnAddOutputDataset("dsAdminOpinion"	, "dsOutput11");
        	this.gfnAddOutputDataset("dsCredithistory"	, "dsOutput12");
        	this.gfnCommonTransaction("Select", "SC_CompanyReg_S01");
        	*/
        };

        // 삭제가 아닌 저장인 경우 회사 명이 변경 되었는지 확인
        this.fnTransCompare = function()
        {
        	if(!this.gfnIsEmpty(this.parent.COMPANY_CODE)) {
        		var sCompany = this.dsCompany.getColumn(0, "COMPANY_NM");
        		var sOrgCompany = this.dsCompany.getOrgColumn(0, "COMPANY_NM");

        		var sLanguage = nexacro.getApplication().gdsGlobal.getColumn(0, "LANGUAGE");

        		if(sCompany != sOrgCompany && sLanguage == "JAP") this.trnasTarget = "KOR";
        		else if(sCompany != sOrgCompany && sLanguage == "KOR") this.trnasTarget = "JAP";
        		else this.trnasTarget = "";
        	}
        };

        this.fnSave = function()
        {
        // 	var sLanguage = nexacro.getApplication().gdsGlobal.getColumn(0, "LANGUAGE");
        //
        // 	if(this.gfnIsEmpty(this.dsCompany.getColumn(0,"COMPANY_NM_JAP")))
        // 	{
        // 		if(sLanguage == "JAP")
        // 		{
        // 			this.dsCompany.setColumn(0,"COMPANY_NM_JAP",''); //한글 회사명에 공백입력
        // 		}
        // 		else
        // 		{
        // 			this.dsCompany.setColumn(0,"COMPANY_NM_JAP",null);
        // 		}
        // 	}
        	if(((this.dsCredithistory.getRowType(0)==Dataset.ROWTYPE_UPDATE)
        		&&(this.dsCompany.getColumn(0, "CL_ASSET") != this.dsCompany.getOrgColumn(0, "CL_ASSET")				/*자산 변경될경우*/
        		||this.dsCompany.getColumn(0, "CL_CAPITAL") != this.dsCompany.getOrgColumn(0, "CL_CAPITAL")			/*자본 변경될경우*/
        		||this.dsCompany.getColumn(0, "CL_ANNUAL_SALES") != this.dsCompany.getOrgColumn(0, "CL_ANNUAL_SALES")	/*년간매출액 변경될경우*/
        		||this.dsCompany.getColumn(0, "CL_NET_INCOME") != this.dsCompany.getOrgColumn(0, "CL_NET_INCOME")		/*순이익 변경될경우*/
        		)
        		&&(this.dsCredithistory.getColumn(0, "EVALUATION_DATE").substr(0,4) != this.gfnToday().substr(0,4)))	//당해년 신용평가 재무년도가 존재할경우 이력을 저장하지 않음
        	)
        	{
        		var nRow = this.dsCredithistory.insertRow(0);
        		var companyCode = this.dsCompany.getColumn(0, "COMPANY_CD");
        		if(!this.gfnIsEmpty(companyCode))
        		{
        			this.dsCredithistory.setColumn(nRow, "COMPANY_CD", companyCode);
        		}
        		//자산, 자본, 년간매출액, 순이익이 변경되었습니다.\n신용평가 이력을 입력후 저장하시기 바랍니다.
        		this.gfnAlert('msg.err.validation.creditcheck', []);
        		return;
        	}

        	this.gfnAddSendParameter("SALES_EMP_RETURN_FLAG", this.tab_Info.tpg_Credit.form.ck_SalesEmpReturn.value);
        	this.gfnAddSendParameter("TRANS_TARGET", this.trnasTarget);
        	this.gfnAddSendParameter("COMPANY_CODE", this.parent.COMPANY_CODE);
        	//Tag가져와 데이터셋에 셋팅
        	this.dsCompany.setColumn(0, "TAG", this.tab_Info.tpg_BasicInfo.form.divTag.getTag());

        	//저장용 Input Dataset 세팅
         	this.gfnAddInputDataset("dsCompany"			, "dsInput1", "A");
        	this.gfnAddInputDataset("dsAddressBook"		, "dsInput2");
        	this.gfnAddInputDataset("dsAdminOpinion"	, "dsInput3");	// 이건 현재 넣지 않는다 24.09.13
        	this.gfnAddInputDataset("dsCredithistory"	, "dsInput4");

        	var map = ['CompanyList','CompanyAddressBook','CompanyOpinionHistory','CreditLevelHistory'];
        	this.gfnSetMap("nextBaseMapper", map, []);

        	this.gfnCommonTransaction("Save", "saveNextCompanyList.do");/*SC_CompanyReg_R01*/
        }

        // 화면 콜백
        this.fnCallBack = function(strSvcID, nErrorCode, strErrorMag)
        {
        	// 에러 예외처리
        	if(nErrorCode != 0)
        	{
        		//this.alert("strSvcID : " + strSvcID + "\n" + "nErrorCode : " + nErrorCode + "\n" + "strErrorMag : " + strErrorMag);
        		return;
        	}
        	else
        	{
        		if(strSvcID=="Select")
        		{
        			//자동으로 row하나 생성되는 문제 처리
        			if(this.dsAddressBook.getRowCount()==1)
        			{
        				if(this.gfnIsEmpty(this.dsAddressBook.getColumn(0, "CA_SEQ")))
        					this.dsAddressBook.deleteRow(0);
        			}

        			if(this.dsCompany.getColumn(0, "COMPANY_CD") == "TOBE" || this.dsCompany.getColumn(0, "COMPANY_CD") == "CORE")
        			{
        				this.div_Attachment02.set_visible(false);
        			}

        			//원청턴키 투입이력이 있을경우 원청턴키여부를 해제할수 없음
        			if (this.dsCompany.getColumn(0, "TURNKEY_CNT")>0) {
        				this.tab_Info.tpg_BasicInfo.form.chb_TURNKEY.set_enable(false);
        			}

        			if(this.dsCompany.getRowCount() == 0)
        			{
        				var newrow = this.dsCompany.addRow();

        				//flag null값 오류 처리.
        				this.dsCompany.setColumn(newrow, "PRODUCT_FLAG"				, "0");
        				this.dsCompany.setColumn(newrow, "SI_FLAG"					, "0");
        				this.dsCompany.setColumn(newrow, "SOLUTION_FLAG"			, "0");
        				this.dsCompany.setColumn(newrow, "GOODS_FLAG"				, "0");
        				this.dsCompany.setColumn(newrow, "PARTNER_FLAG"				, "0");
        				this.dsCompany.setColumn(newrow, "SI_VIEW_FLAG"				, "0");
        				this.dsCompany.setColumn(newrow, "COLLECTION_BOND_FLAG"		, "0");
        				this.dsCompany.setColumn(newrow, "CL_LISTED_FLAG"			, "0");
        				this.dsCompany.setColumn(newrow, "TURNKEY_FLAG"				, "0");

        				this.dsCompany.setColumn(newrow, "CLIENT_FLAG"				, "0");
        				this.dsCompany.setColumn(newrow, "COMPANY_FLAG"				, "0");
        				this.dsCompany.setColumn(newrow, "BLACKLIST_FLAG"			, "0");
        				this.dsCompany.setColumn(newrow, "TMP_FLAG"					, "0");

        				//'피연산자 유형 충돌 : varbinary은(는) float과(와) 호환되지 않습니다' 오류 처리
        				this.dsCompany.setColumn(newrow, "CL_ASSET"					, 0);
        				this.dsCompany.setColumn(newrow, "CL_CAPITAL"				, 0);
        				this.dsCompany.setColumn(newrow, "CL_PS"					, 0);
        				this.dsCompany.setColumn(newrow, "CL_ANNUAL_SALES"			, 0);
        				this.dsCompany.setColumn(newrow, "CL_SI"					, 0);
        				this.dsCompany.setColumn(newrow, "CL_NET_INCOME"			, 0);
        				this.dsCompany.setColumn(newrow, "CL_EXCEPTION_CODE"		, "000");
        				this.dsCompany.setColumn(newrow, "NATION_CD"		, "001");



        				// 가코드 신규등록(영업관리)
        				if (this.fvTmpCompReg) {
        					this.dsCompany.setColumn(newrow, "TMP_FLAG"					, "1");
        					this.tab_Info.tpg_BasicInfo.form.chb_FakeCode.set_enable(false);
        				}

        				this.div_Attachment02.set_enable(false);
        			}
        			else
        			{
        				//업체명 중복확인
        				this.strDuplicateText = this.tab_Info.tpg_BasicInfo.form.edt_CompanyName.value;
        				this.div_Attachment02.set_enable(true);
        			}

         			if(this.fvMode=="E")
         				this.dsAddressBook.addColumn("CHECK","STRING");
        			//조회한 Tag를 셋팅
        			this.tab_Info.tpg_BasicInfo.form.divTag.setTag();

        			this.fn_setPriceMasking(this.tab_Info.tpg_Contract.form.edt_MaxContractPrice);
        			this.fn_setPriceMasking(this.tab_Info.tpg_Contract.form.edt_MaxPurchasePrice);
        		}
        		else if(strSvcID=="gfnGetCode")
        		{
        			this.fnSearch();
        		}
        		else if(strSvcID=="Save")
        		{
        			this.tab_Info.tpg_Credit.form.ck_SalesEmpReturn.set_value("0");
        			this.gfnAlert('msg.save.success',[],"SAVE",
        			function() {
        				this.bUpdate = false;
        				this.fnSearch();
        			});
        		}
        		else if(strSvcID="fnGetCodeSub")
        		{

        		}
        	}
        };


        this.fn_setPriceMasking = function (obj)
        {
        	var sContractAmt = obj.value;
        	if (this.gfnIsEmpty(sContractAmt))	sContractAmt = 0;

        	obj.set_type( this.gfn_getPriceMaskEdtType() );
        	obj.set_format( this.gfn_getPriceMaskformat(sContractAmt) );
        }


        //message callback
        this.fnMsgCallback = function (sPopupId, sRtn)
        {
        	if (this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false) {
        		return;
        	}
        	// 삭제후 저장 하시겠습니까?
        	if (sPopupId == "deleteNsave") {
        		this.dsCompany.deleteRow(this.dsCompany.rowposition);
        		//reset() : DataSet의 데이터를 마지막 저장 상태로 복구하는 메소드.
        		this.dsAddressBook.reset();
        		this.fnSave();
        	}
        	// 선택된 자료를 삭제 하시겠습니까?
        	else if (sPopupId == "deleteaddress") {
        		this.dsAddressBook.deleteRow(this.dsAddressBook.rowposition);
        	}
        	else if (sPopupId == "deletehistory") {
        		this.dsCredithistory.deleteRow(this.dsCredithistory.rowposition);
        	}
        };

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.comm_Click = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_Save" :
        			if(this.fnIsValid())
        			{
        				this.fnTransCompare();
        				this.fnSave();
        			}
        			break;
        		case "btn_Del" :
        			// 저장 하시겠습니까?
        			this.gfnAlert("confirm.before.deletesave", [""], "deleteNsave", "fnMsgCallback");
        			break;
        		case "btn_Close" :
        			this.commUtil.popupClose("close");
        			break;

        		case "btn_Exit" :
        			this.commUtil.popupClose("close");
        			break;

        		case "btn_CompanyName" :
        			var sCompanyName = this.tab_Info.tpg_BasicInfo.form.edt_CompanyName.value;
        			var sCompanyName2 = this.tab_Info.tpg_BasicInfo.form.edt_CompanyNameJap.value;
        			var Argument = {pvCompanyName:sCompanyName, pvCompanyName2:sCompanyName2};
        			Argument.title = "회사 검색";
        			this.commUtil.popup(this, "CompanySearchReg", "sales::base/SC_CompanySearchReg.xfdl", -1, -1, null, null, true, true, false, Argument, "fnPopupCallBack");
        			break;

        		case "btn_PostalNumber" :
        			var sCocd = nexacro.getApplication().gdsUserInfo.getColumn(0, "CO_CD");

        			if(sCocd=="J02") {
        				var code = this.tab_Info.tpg_BasicInfo.form.edt_PostNo.value;

        				var json_param = {
        					"async" : true
        				}
        				this.doZip.request("zip","GET","https://apis.postcode-jp.com/api/v3/postcodes?postcode=" + code + "&apikey=5zU1XOuUdsDDHQ2unROP6wqMWpjJrMxn2O2RU9n",json_param);
        			} else {
        				var objEnv = nexacro.getEnvironment();
        				var svc = objEnv.services["ServiceURL"];
        				this.wb_PostalSearch.set_url(svc.url+"/Service/zip.html");
        			}

        			break;

        		case "btn_CompanyAddMM" :
        			var sArgument = {"CD_CODE" : this.dsCompany.getColumn("0", "NATION_CODE"), "SCR_ID":this.name};
        			sArgument.title = "공통코드 관리";
        			this.commUtil.popup(this, "CompanyAddMM", "sales::base/SC_CompanyAddMM.xfdl", -1, -1, null, null, true, true, false, sArgument, "fnPopupCallBack");
        			break;

        		case "btn_Plus" :
        			var nRow = this.dsAddressBook.addRow();
        			var companyCode = this.dsCompany.getColumn(0, "COMPANY_CD");
        			if(!this.gfnIsEmpty(companyCode))
        			{
        				this.dsAddressBook.setColumn(nRow, "COMPANY_CD", companyCode);
        			}
        			this.dsAddressBook.setColumn(nRow, "HOLD_OFFICE", "1");
        			break;

        		case "btn_Minus" :
        			this.gfnAlert("confirm.before.delete", [""], "deleteaddress", "fnMsgCallback");
        			break;

        		case "btn_Evaluate" :
        			if(this.dsCompany.getColumn(0, "BUSINESS_SCALE_CD") == null ||
        			this.dsCompany.getColumn(0, "CL_CAPITAL") == null ||
        			this.dsCompany.getColumn(0, "CL_ANNUAL_SALES") == null ||
        			this.dsCompany.getColumn(0, "CL_EMP_NUMBER") == null ||
        			this.dsCompany.getColumn(0, "CL_NET_INCOME") == null ||
        			this.dsCompany.getColumn(0, "CL_OPINION") == null ||
        			this.dsCompany.getColumn(0, "CL_LISTED_FLAG") == null ||
        			this.dsCompany.getColumn(0, "CL_ADD_SCORE1") == null ||
        			this.dsCompany.getColumn(0, "CL_ADD_SCORE2") == null ||
        			this.dsCompany.getColumn(0, "CL_ADD_SCORE3") == null )
        			{
        				this.gfnAlert('msg.err.validator.input',['여신관련 항목(모두)'],"SAVE",
        				function() {
        				});
        				return;
        			}
        			else
        			{
        				var strEndIdx;
        				var nCreditScore = 0;

        				var value;
        				/*6개월간 매출계약 건수 적용*/
        				var nContracrCnt = this.dsEvaluate.getColumn(0, "CONTRACT_CNT");
        				     if(nContracrCnt>=6)	value = 12;
        				else if (nContracrCnt<=1)	value = 2;
        				else						value = nContracrCnt*2;
        				this.dsCompany.setColumn(0, "CL_ADD_SCORE2", value.toString());

        				/*6개월 지난 미수채권현황 적용*/
        				var nUnbillCnt = this.dsEvaluate.getColumn(0, "UNRECV_CNT");
        				if(nUnbillCnt>0)	value = 0;
        				else				value = 8;
        				this.dsCompany.setColumn(0, "CL_ADD_SCORE3", value.toString());

        				//자본금
        				var nCAPITAL = parseInt(this.dsCompany.getColumn(0, "CL_CAPITAL"));

        				// 연간매출액
        				var nANNUAL_TURNOVER = parseInt(this.dsCompany.getColumn(0, "CL_ANNUAL_SALES"));

        				// 종업원수
        				var nWORKFORCE = nexacro.toNumber(this.dsCompany.getColumn(0,"CL_EMP_NUMBER"));

        				// 순이익
        				var nNET_INCOME = parseInt(this.dsCompany.getColumn(0, "CL_NET_INCOME"));

        				//자본금
        				     if(nCAPITAL >= 10000000000)	nCreditScore += 12;	//100억이상
        				else if(nCAPITAL >= 1000000000)		nCreditScore += 10;	//100억미만
        				else if(nCAPITAL >= 500000000)		nCreditScore += 8;	//10억미만
        				else if(nCAPITAL >= 300000000)		nCreditScore += 6;	//5억미만
        				else if(nCAPITAL >= 50000000)		nCreditScore += 4;	//3억미만
        				else 								nCreditScore += 2;	//5천미만

        				//trace("자본금	"+nCreditScore);
        				//매출액
        				     if(nANNUAL_TURNOVER >= 100000000000)	nCreditScore += 12;	//1000억이상
        				else if(nANNUAL_TURNOVER >= 10000000000)	nCreditScore += 10;	//1000억미만
        				else if(nANNUAL_TURNOVER >= 2000000000)		nCreditScore += 8;	//100억미만
        				else if(nANNUAL_TURNOVER >= 1000000000)		nCreditScore += 6;	//20억미만
        				else if(nANNUAL_TURNOVER >= 500000000)		nCreditScore += 4;	//10억미만
        				else										nCreditScore += 2;	//5억미만
        				//trace("매출액	"+nCreditScore+"' nANNUAL_TURNOVER : "+nANNUAL_TURNOVER);
        				//종업원수
        				     if(nWORKFORCE >= 1000)	nCreditScore += 12;	//1000명이상
        				else if(nWORKFORCE >= 200)	nCreditScore += 10;	//1000명미만
        				else if(nWORKFORCE >= 100)	nCreditScore += 8;	//200명미만
        				else if(nWORKFORCE >= 50)	nCreditScore += 6;	//100명미만
        				else if(nWORKFORCE >= 10)	nCreditScore += 4;	//50명미만
        				else 						nCreditScore += 2;	//10명미만
        				//trace("종업원수	"+nCreditScore);

        				//순이익
        				     if(nNET_INCOME >= 5000000000)	nCreditScore += 12;	//50억이상
        				else if(nNET_INCOME >= 1000000000)	nCreditScore += 10;	//50억미만
        				else if(nNET_INCOME >= 500000000)	nCreditScore += 8;	//10억미만
        				else if(nNET_INCOME >= 100000000)	nCreditScore += 6;	//5억미만
        				else if(nNET_INCOME >= 0)			nCreditScore += 4;	//1억미만
        				else 								nCreditScore += 2;
        				//trace("순이익	"+nCreditScore);

        				//담당자의견
        				nCreditScore += parseInt(this.dsCompany.getColumn(0, "CL_OPINION"));
        				//trace("담당자의견	"+nCreditScore);

        				//추가점수 (상장여부)
        				if(this.dsCompany.getColumn(0, "CL_LISTED_FLAG") == "Y")	nCreditScore += 8;
        				else 													nCreditScore += 0;
        				//trace("상장여부	"+nCreditScore);

        				//추가점수 (신용등급 점수 평가)
        				nCreditScore += parseInt(this.dsCompany.getColumn(0, "CL_ADD_SCORE1"));
        				//trace("신용등급 점수 평가	"+nCreditScore);
        				//추가점수 (6개월간 계약횟수)
        				nCreditScore += parseInt(this.dsCompany.getColumn(0, "CL_ADD_SCORE2"));
        				//trace("6개월간 계약횟수	"+nCreditScore);
        				//추가점수 (6개월간 미수채권현황)
        				nCreditScore += parseInt(this.dsCompany.getColumn(0, "CL_ADD_SCORE3"));
        				//trace("6개월간 미수채권현황	"+nCreditScore);

        				for(var i = 0; i < this.ds_CD_LimitAmount.rowcount; i++)
        				{
        					if(nCreditScore < parseInt(this.ds_CD_LimitAmount.getColumn(i, "CAPTION"))) //SCORE
        					{
        						this.tab_Info.tpg_Credit.form.edt_Service.set_value(this.ds_CD_LimitAmount.getColumn(i,"VAL1")); //SI
        						this.tab_Info.tpg_Credit.form.edt_ProductService.set_value(this.ds_CD_LimitAmount.getColumn(i,"VAL2")); //PS
        						break;
        					}
        					else if(nCreditScore >= 90 || this.dsCompany.getColumn(0, "CL_EXCEPTION_CODE") == "005")
        					{
        						// 여신 점수 90점 이상인경우 제한없음(제품/제품+용역에 100억세팅)
        						this.tab_Info.tpg_Credit.form.edt_ProductService.set_value("10000000000"); //제품/제품+용역
        						this.tab_Info.tpg_Credit.form.edt_Service.set_value("10000000000"); //용역
        						break;
        					}
        				}

        				this.dsCompany.setColumn(0, "CL_APPROVAL_EMP_NAME", this.gfnGetUserInfo("EMP_NM"));	//CL_APPROVAL_EMP_NAME
        				this.dsCompany.setColumn(0, "CL_APPROVAL_EMP_NO", this.gfnGetUserInfo("EMP_NO"));		//CL_APPROVAL_EMP_NO
        				this.dsCompany.setColumn(0, "CL_APPROVAL_DATE", this.gfnToday());
        				this.dsCompany.setColumn(0, "CL_EVALUATION", nCreditScore);

        				if(	   (this.dsCompany.getColumn(0, "CL_OPINION") == this.dsCompany.getOrgColumn(0, "CL_OPINION")				/*담당자의견 수정시 여신평가이력을 저장하지 않음*/
        						|| this.gfnIsEmpty(this.dsCompany.getOrgColumn(0, "CL_OPINION"))
        						)
        					|| (this.dsCredithistory.getRowCount() == 0)																	/*여신평기이력이 없을경우 이력 저장*/
        					&&(
        					   (this.dsCompany.getColumn(0, "CL_CAPITAL") != this.dsCompany.getOrgColumn(0, "CL_CAPITAL"))				/*자본금*/
        					|| (this.dsCompany.getColumn(0, "CL_ANNUAL_SALES") != this.dsCompany.getOrgColumn(0, "CL_ANNUAL_SALES"))	/*연간매출액*/
        					|| (this.dsCompany.getColumn(0, "CL_EMP_NUMBER") != this.dsCompany.getOrgColumn(0, "CL_EMP_NUMBER"))		/*종업원수*/
        					|| (this.dsCompany.getColumn(0, "CL_NET_INCOME") != this.dsCompany.getOrgColumn(0, "CL_NET_INCOME"))		/*순이익*/
        					|| (this.dsCompany.getColumn(0, "CL_LISTED_FLAG") != this.dsCompany.getOrgColumn(0, "CL_LISTED_FLAG"))		/*추가점수 (상장여부)*/
        					|| (this.dsCompany.getColumn(0, "CL_ADD_SCORE1") != this.dsCompany.getOrgColumn(0, "CL_ADD_SCORE1"))		/*추가점수 (신용등급 점수 평가)*/
        					|| (this.dsCompany.getColumn(0, "CL_ADD_SCORE2") != this.dsCompany.getOrgColumn(0, "CL_ADD_SCORE2"))		/*추가점수 (6개월간 계약횟수)*/
        					|| (this.dsCompany.getColumn(0, "CL_ADD_SCORE3") != this.dsCompany.getOrgColumn(0, "CL_ADD_SCORE3"))))		/*추가점수 (6개월간 미수채권현황)*/
        				{
        					this.gfnAlert('msg.err.validator.input',['평가점수 : ' + nCreditScore + '\n신용평가 이력'],"SAVE",
        					function() {
        					});
        					var nRow = this.dsCredithistory.insertRow(0);
        					var companyCode = this.dsCompany.getColumn(0, "COMPANY_CD");
        					if(!this.gfnIsEmpty(companyCode))
        					{
        						this.dsCredithistory.setColumn(nRow, "COMPANY_CODE", companyCode);
        					}
        					this.dsCredithistory.setColumn(nRow, "YEAR", this.gfnGetDate("year"));
        					this.dsCredithistory.setColumn(nRow, "EVALUATION_DATE", this.gfnGetDate("date"));

        				}
        			}
        			break;
        		case "btn_Print" :
        			if (this.gfnIsUpdateDs(this.dsCompany))
        			{
        				this.gfnAlert('msg.check.save',[''],"SAVE",
        				function() {
        				});
        				return;
        			}
        			else if(this.gfnIsEmpty(this.tab_Info.tpg_Credit.form.edt_EvaluationGrade.value))
        			{
        				this.gfnAlert('msg.validate.afterjob',[''],"SAVE",
        				function() {
        				});
        				return;
        			}
        			else
        			{
        				this.ds_company_print.clearData();
        				this.ds_company_print.addRow();
        				this.ds_company_print.setColumn(0,"TODAY_DATE"			, this.gfnToday());
        				this.ds_company_print.setColumn(0,"SCORE"				, this.dsCompany.getColumn(0, "CL_EVALUATION"));
        				this.ds_company_print.setColumn(0,"CREDIT_LINE_PS"		, this.dsCompany.getColumn(0, "CL_PS"));
        				this.ds_company_print.setColumn(0,"CREDIT_LINE_SI"		, this.dsCompany.getColumn(0, "CL_SI"));
        				this.ds_company_print.setColumn(0,"CREDIT_LINE_SI"		, this.dsCompany.getColumn(0, "CL_SI"));
        				this.ds_company_print.setColumn(0,"INCORPORATION_DATE"	, this.dsCompany.getColumn(0, "INCORPORATION_DATE"));
        				this.ds_company_print.setColumn(0,"COMPANY_NM"		, this.dsCompany.getColumn(0, "COMPANY_NM"));
        				this.ds_company_print.setColumn(0,"ADDRESS"				, this.dsCompany.getColumn(0, "POST_ADDR")+" "+this.dsCompany.getColumn(0, "DETAIL_ADDR"));
        				this.ds_company_print.setColumn(0,"MASTER_NAME"			, this.dsCompany.getColumn(0, "CEO_NAME"));
        				this.ds_company_print.setColumn(0,"LICENSE_NO"			, this.dsCompany.getColumn(0, "COMPANY_REG_NO"));
        				this.ds_company_print.setColumn(0,"REGISTER_NO"			, this.dsCompany.getColumn(0, "CORPORATE_REG_NO"));
        				this.ds_company_print.setColumn(0,"PHONE_NO"			, this.dsCompany.getColumn(0, "PHONE_NO"));
        				this.ds_company_print.setColumn(0,"FAX_NO"				, this.dsCompany.getColumn(0, "FAX_NO"));
        				this.ds_company_print.setColumn(0,"BUSINESS_SCALE"		, this.tab_Info.tpg_BasicInfo.form.cmb_CompanySize.text);
        				this.ds_company_print.setColumn(0,"LISTED_YN"			, this.dsCompany.getColumn(0, "CL_LISTED_FLAG"));
        				this.ds_company_print.setColumn(0,"WORKFORCE"			, this.dsCompany.getColumn(0, "CL_EMP_NUMBER"));
        				this.ds_company_print.setColumn(0,"MGR_OPINION"			, this.dsCompany.getColumn(0, "CL_OPINION"));
        				this.ds_company_print.setColumn(0,"ADD_SCORE1"			, this.dsCompany.getColumn(0, "CL_ADD_SCORE1"));
        				this.ds_company_print.setColumn(0,"ADD_SCORE2"			, this.dsCompany.getColumn(0, "CL_ADD_SCORE2"));
        				this.ds_company_print.setColumn(0,"ADD_SCORE3"			, this.dsCompany.getColumn(0, "CL_ADD_SCORE3"));
        				this.ds_company_print.setColumn(0,"BIZ_STAFF_NM"		, this.dsAdminOpinion.getColumn(0, "SALES_EMP_NAME"));
        				this.ds_company_print.setColumn(0,"ASSET"				, parseInt(this.dsCompany.getColumn(0, "CL_ASSET").toString().substr(0, (this.dsCompany.getColumn(0, "CL_ASSET").toString().length - 6))));
        				this.ds_company_print.setColumn(0,"CAPITAL"				, parseInt(this.dsCompany.getColumn(0, "CL_CAPITAL").toString().substr(0, (this.dsCompany.getColumn(0, "CL_CAPITAL").toString().length - 6))));
        				this.ds_company_print.setColumn(0,"ANNUAL_TURNOVER"		, parseInt(this.dsCompany.getColumn(0, "CL_ANNUAL_SALES").toString().substr(0, (this.dsCompany.getColumn(0, "CL_ANNUAL_SALES").toString().length - 6))));
        				this.ds_company_print.setColumn(0,"NET_INCOME"			, parseInt(this.dsCompany.getColumn(0, "CL_NET_INCOME").toString().substr(0, (this.dsCompany.getColumn(0, "CL_NET_INCOME").toString().length - 6))));

        				// Dataset 설정
        				this.gfn_SetAddInputDs("ds0", this.ds_company_print);
        				// Parameter 설정
        				this.gfn_SetAddParam("TITLE1", this.gfnGetTransTxt(2070, "여신한도설정품의서")+"_" + this.dsCompany.getColumn(0, "COMPANY_NM") + "_" + this.gfnToday());
        				var strSaveFileNm = this.gfnGetTransTxt(2070, "여신한도설정품의서")+"_" + this.dsCompany.getColumn(0, "COMPANY_NM") + "_" + this.gfnToday();
        				// Report PopupViewer
        				this.ds_company_print.applyChange();
        				this.gfnPopupReportViewer("CREDIT_LIMIT_CONFIGURE_REQUEST.jrf",strSaveFileNm);
        			}
        			break;
        		case "btn_AdminOpinionHistory" :
        			this.div_History.trackPopupByComponent(obj,-this.div_History.getOffsetWidth(), obj.getOffsetHeight());
        			break;
        		case "btn_PopClose1" :
        			this.div_Reason.set_visible(false);
        			this.tab_Info.set_enable(true);
        			break;
        		case "btn_PopClose3" :
        			var strEmpNo = this.dsAdminOpinion.getColumn(0, "SALES_EMP_NO");
        			var nfindRow = this.dsSalesEmpList.findRow("EMP_NO", strEmpNo);
        			var bCheck = this.dsSalesEmpList.getColumn(nfindRow, "SS_FLAG");

        			if(this.gfnIsEmpty(strEmpNo))
        			{
        				this.gfnAlert('msg.err.validator.input',['요청영업대표'],"SAVE",
        				function() {
        					this.div_Reason.form.cmb_SalesEmp.setFocus();
        				});
        			}
        			else if(this.gfnIsEmpty(this.dsAdminOpinion.getColumn(0, "REMARKS_REASON")) && bCheck=='0')
        			{
        				this.gfnAlert('msg.err.validator.input',['변경사유'],"SAVE",
        				function() {
        					this.div_Reason.form.txt_Remark.setFocus();
        				});
        			}
        			else
        			{
        				this.div_Reason.closePopup();
        			}
        			break;
        		case "btn_PopClose2" :
        			this.div_History.closePopup();
        			break;

        		case "btn_CreditPlus" :
        			var nRow = this.dsCredithistory.insertRow(0);
        			var companyCode = this.dsCompany.getColumn(0, "COMPANY_CD");
        			if(!this.gfnIsEmpty(companyCode))
        			{
        				this.dsCredithistory.setColumn(nRow, "COMPANY_CD", companyCode);
        			}
        			break;

        		case "btn_CreditMinus" :
        			//var bRtn = this.confirm( this.gfnGetTransTxt(1672, "정말로 삭제하시겠습니까?"), this.gfnGetTransTxt(1935, "신용평가이력") );
        			this.gfnAlert("confirm.before.delete", [""], "deletehistory", "fnMsgCallback");
        // 			if(bRtn)
        // 			{
        // 				this.dsCredithistory.deleteRow(this.dsAddressBook.rowposition);
        // 			}
        			break;

        	}
        };

        //SC_CompanyReg에서 정보 받은것을 가공할 때 사용.
        this.fnPopupCallBack = function (popupId, popupArg)
        {
        	if(popupArg == null || popupArg == "close" || popupArg == "false" || popupArg == "")
        	{
        		return;
        	}
        	else
        	{
        		switch(popupId)
        		{
        			case "CompanySearchReg" :
        				var popupArg = popupArg.split("|");
        				this.tab_Info.tpg_BasicInfo.form.edt_CompanyName.set_value(popupArg[0]); 	// 한국:한국어  일본:일본어
        				this.tab_Info.tpg_BasicInfo.form.edt_CompanyNameJap.set_value(popupArg[1]); // 한국:일본어  일본:한국어
        				break;
        			case "CompanyAddMM":
        				break;
        		}
        	}
        }

        this.fnIsValid = function()
        {
        	//COMPANY_LIST TABLE VALIDATION CHECK
        	//회사구분
        	if(this.tab_Info.tpg_BasicInfo.form.chb_ClientCompany.value == 0 && this.tab_Info.tpg_BasicInfo.form.chb_PlaceOfContract.value == 0 &&
        	this.tab_Info.tpg_BasicInfo.form.chb_FakeCode.value == 0 && this.tab_Info.tpg_BasicInfo.form.chb_BlackList.value == 0 &&
        	this.tab_Info.tpg_BasicInfo.form.chb_BlackList.value == 0 && this.tab_Info.tpg_BasicInfo.form.chb_DISP.value == 0)
        	{
        		this.tab_Info.set_tabindex(0);
        		this.gfnAlert('msg.err.validator.required',['회사구분'],"COMPANY",
        		function() {
        			this.tab_Info.tpg_BasicInfo.form.chb_ClientCompany.setFocus();
        		});
        		return false;
        	}

        	//업체명
        	if(this.gfnIsEmpty(this.tab_Info.tpg_BasicInfo.form.edt_CompanyName.value))
        	{
        		this.tab_Info.set_tabindex(0);
        		this.gfnAlert('msg.err.validator.required',['회사명'],"COMPANYNAME",
        		function() {
        			this.tab_Info.tpg_BasicInfo.form.edt_CompanyName.setFocus();
        		});
        		return false;
        	}

        	//대분류
        	if(this.gfnIsEmpty(this.tab_Info.tpg_BasicInfo.form.cmb_LargeCategory.value))
        	{
        		this.tab_Info.set_tabindex(0);
        		this.gfnAlert('msg.err.validator.required',['대분류'],"CATEGORY",
        		function() {
        			this.tab_Info.tpg_BasicInfo.form.cmb_LargeCategory.setFocus();
        		});
        		return false;
        	}

        	//중분류
        	if(this.gfnIsEmpty(this.tab_Info.tpg_BasicInfo.form.cmb_MiddleCategory.value))
        	{
        		this.tab_Info.set_tabindex(0);
        		this.gfnAlert('msg.err.validator.required',['중분류'],"CATEGORY",
        		function() {
        			this.tab_Info.tpg_BasicInfo.form.cmb_MiddleCategory.setFocus();
        		});
        		return false;
        	}

        	//회사상태
        	if(this.gfnIsEmpty(this.tab_Info.tpg_BasicInfo.form.cmb_CompanyStatus.value))
        	{
        		this.tab_Info.set_tabindex(0);
        		this.gfnAlert('msg.err.validator.required',['회사상태'],"CATEGORY",
        		function() {
        			this.tab_Info.tpg_BasicInfo.form.cmb_CompanyStatus.setFocus();
        		});
        		return false;
        	}

        	var strCreditCom = this.dsCredithistory.getColumn(0, "CREDIT_COMPANY");
        	var nfindRow = this.ds_CD_CreditCompany.findRow("CODE", strCreditCom)
        	var bCheck = this.ds_CD_CreditCompany.getColumn(nfindRow, "VAL1");

        	if(this.gfnIsEmpty(this.dsCredithistory.getColumn(0, "EVALUATION_DATE")) && this.dsCredithistory.getRowCount()>0 && bCheck=="Y")
        	{
        		this.tab_Info.set_tabindex(1);
        		this.gfnAlert('msg.err.validator.input',['신용평가이력 평가일자'],"Credithistory",
        		function() {
        			this.tab_Info.tpg_BasicInfo.form.grd_Credithistory.setFocus();
        		});
        		return false;
        	}
        	if(this.gfnIsEmpty(this.dsCredithistory.getColumn(0, "YEAR")) && this.dsCredithistory.getRowCount()>0 && bCheck=="Y")
        	{
        		this.tab_Info.set_tabindex(1);
        		this.gfnAlert('msg.err.validator.input',['신용평가이력 재무년도'],"grd_Credithistory",
        		function() {
        			this.tab_Info.tpg_BasicInfo.form.grd_Credithistory.setFocus();
        		});
        		return false;
        	}
        	if(this.gfnIsEmpty(this.dsCredithistory.getColumn(0, "CREDIT_COMPANY")) && this.dsCredithistory.getRowCount()>0)
        	{
        		this.tab_Info.set_tabindex(1);
        		this.gfnAlert('msg.err.validator.input',['신용평가이력 신용평가처'],"grd_Credithistory",
        		function() {
        			this.tab_Info.tpg_BasicInfo.form.grd_Credithistory.setFocus();
        		});
        		return false;
        	}
        	if(this.gfnIsEmpty(this.dsCredithistory.getColumn(0, "CREDIT_LEVEL")) && this.dsCredithistory.getRowCount()>0 && bCheck=="Y")
        	{
        		this.tab_Info.set_tabindex(1);
        		this.gfnAlert('msg.err.validator.input',['신용평가이력 신용등급'],"grd_Credithistory",
        		function() {
        			this.tab_Info.tpg_BasicInfo.form.grd_Credithistory.setFocus();
        		});
        		return false;
        	}
        	//COMPANY_ADDRESS TABLE VALIDATION CHECK
        	//직원명
        	for(var i=0; i<this.dsAddressBook.rowcount; i++)
        	{
        		if(this.gfnIsEmpty(this.dsAddressBook.getColumn(i, "EMP_NM")))
        		{
        			this.tab_Info.set_tabindex(3);
        			this.gfnAlert('msg.err.validator.input',['담당자의 담당자명']);
        			return false;
        		}
        	}

        	this.dsDuplication.clearData();

        	var sCompanyAbbreviation = this.tab_Info.tpg_BasicInfo.form.edt_CompanyAbbreviation.value;

        // 	if(!this.gfnIsEmpty(sCompanyAbbreviation)) {
        // 		// 조건값 셋팅
        // 		this.gfnAddSendParameter("COMPANY_ABBREVIATION", sCompanyAbbreviation);
        //
        // 		if(!this.gfnIsEmpty(this.parent.COMPANY_CODE)) this.gfnAddSendParameter("COMPANY_CODE", this.parent.COMPANY_CODE);
        //
        // 		// 조회용 Output dataset 세팅
        // 		this.gfnAddOutputDataset("dsDuplication"		, "dsOutput");
        // 		this.gfnCommonTransaction("Select_Duplication", "SC_CompanyReg_S02", null, false);
        //
        // 		if(this.dsDuplication.rowcount > 0) {
        // 			this.gfnAlert('msg.err.validator.duplcation',['약어']);
        // 			return false;
        // 		}
        // 	}
        	return true;
        };

        //공식파트너사
        this.tab_Info_tpg_BasicInfo_chb_OfficialPartner_onchanged = function(obj, e)
        {
        	if(this.tab_Info.tpg_BasicInfo.form.chb_OfficialPartner.value)
        		this.tab_Info.tpg_BasicInfo.form.cmb_PartKind.set_visible(true);
        	else
        		this.tab_Info.tpg_BasicInfo.form.cmb_PartKind.set_visible(false);
        };

        //주소API
        this.wb_PostalSearch_onloadcompleted = function(obj,e)
        {
        	this.wb_PostalSearch.callMethod("sample4_execDaumPostcode", "");
        };

        //주소API
        this.wb_PostalSearch_onusernotify = function(obj, e)
        {
        	var strRtn = e.userdata;
        	if(!this.gfnIsEmpty(strRtn))
        	{
        		//초기화
        		this.tab_Info.tpg_BasicInfo.form.edt_Address2.set_value("");
        		//값지정
        		this.tab_Info.tpg_BasicInfo.form.edt_PostNo.set_value(strRtn[0]);
        		this.tab_Info.tpg_BasicInfo.form.edt_Address.set_value(strRtn[1]);
        	}
        };

        this.tab_Info_tpg_Contract_grd_ContractList_oncelldblclick = function(obj,e)
        {
        	this.commUtil.popupProjectMM(this, "popProjectMM", "fn_popCallBack", this.dsContractList.getColumn(e.row, "PROJECT_CODE"), this.dsContractList.getColumn(e.row, "PROJECT_NAME"), "R");
        };

        this.tab_Info_tpg_Contract_grd_PurchaseList_oncelldblclick = function(obj,e)
        {
        	var sContractType		= this.dsPurchaseList.getColumn(e.row, "CONTRACT_TYPE"		);
        	var sContractNoPurchase	= this.dsPurchaseList.getColumn(e.row, "CONTRACT_NO_PURCHASE");
        	var args = {"CONTRACT_TYPE":sContractType, "CONTRACT_NO_PURCHASE":sContractNoPurchase};

        	if (sContractType == "P"
        	||	sContractType == "E"
        	||	sContractType == "G"
        	||	sContractType == "O"
        	||	sContractType == "C"
        	||	sContractType == "M"
        	||	sContractType == "S" ) {
        		this.commUtil.popup(this, "SP_PurchaseReg", "Sales::SP_PurchaseReg.xfdl", -1, -1, 1290, 570, true, true, false, args, "fnPopupCallBack");
        	} else {
        		this.alert(this.gfnGetTransTxt(1633, "[" + sContractType + "] 개발중입니다.", [sContractType]));
        	}
        };

        this.btn_Excel_onclick = function(obj,e)
        {
        	if(obj.id=="btn_ExcelContract")
        		this.gfn_excelExport(this, this.tab_Info.tpg_Contract.form.grd_ContractList01, this.dsCompany.getColumn(0, "COMPANY_NM")+"_매출계약요약");
        	else if(obj.id=="btn_ExcelContractList")
        		this.gfn_excelExport(this, this.tab_Info.tpg_Contract.form.grd_ContractList, this.dsCompany.getColumn(0, "COMPANY_NM")+"_매출계약리스트");
        	else if(obj.id=="btn_ExcelPurchase")
        		this.gfn_excelExport(this, this.tab_Info.tpg_Contract.form.grd_PurchaseList01, this.dsCompany.getColumn(0, "COMPANY_NM")+"_매입계약요약");
        	else if(obj.id=="btn_ExcelPurchaseList")
        		this.gfn_excelExport(this, this.tab_Info.tpg_Contract.form.grd_PurchaseList, this.dsCompany.getColumn(0, "COMPANY_NM")+"_매입계약리스트");
        };

        this.tab_Info_onchanged = function(obj,e)
        {
        	this.btn_ExcelContract.set_visible(false);
        	this.btn_ExcelContractList.set_visible(false);
        	this.btn_ExcelPurchase.set_visible(false);
        	this.btn_ExcelPurchaseList.set_visible(false);
        	this.btn_Plus.set_visible(false);
        	this.btn_Minus.set_visible(false);

        	if(e.postindex==2)
        	{
        		this.btn_ExcelContract.set_visible(true);
        		this.btn_ExcelContractList.set_visible(true);
        		this.btn_ExcelPurchase.set_visible(true);
        		this.btn_ExcelPurchaseList.set_visible(true);
        	}
        	else if(e.postindex==3)
        	{
        		this.btn_Plus.set_visible(true);
        		this.btn_Minus.set_visible(true);
        	}
        };

        this.tab_Info_tpg_Credit_cmb_AdminOpinion_onitemchanged = function(obj,e)
        {
        	if(this.dsCompany.getRowType(0)==2)	/*신규등록시 담당자의견 변경사유는 입력하지 않는다*/
        		return;
        	if(this.gfnIsEmpty(	this.dsCompany.getColumn(0, "CL_EVALUATION")))	/*최초 여신평가 시,  담당자의견 지정 시 변경사유는 입력하지 않는다*/
        		return;

        	this.div_Reason.trackPopupByComponent(obj, 0, obj.getOffsetHeight());

        	if(this.dsAdminOpinion.rowcount == 0 || this.dsAdminOpinion.getRowType(0) != Dataset.ROWTYPE_INSERT) {
        		this.dsAdminOpinion.insertRow(0);
        		this.dsAdminOpinion.setColumn(0, "COMPANY_CD", this.parent.COMPANY_CODE);
        		this.dsAdminOpinion.setColumn(0, "CL_OPINION", e.postvalue);
        	}
        };

        // 담당자 선택 버튼
        this.btn_Confirm_onclick = function(obj,e)
        {
        	if (this.fnsetReturnDs()) {
        		this.commUtil.popupClose(this.ds_Return);
        	}
        };

        // 담당자 목록 더블클릭
        this.tab_Info_tpg_Person_grd_AddressBook_oncelldblclick = function(obj,e)
        {
        	if (this.fnsetReturnDs(e.row)) {
        		this.commUtil.popupClose(this.ds_Return);
        	}
        };

        // Return Dataset 처리
        this.fnsetReturnDs = function(nSelRow)
        {
        	if (this.dsAddressBook.rowcount<=0) return false;

        	//더블클릭시 자동선택
        	if(nSelRow>=0)
        		this.dsAddressBook.setColumn(nSelRow, "CHECK", "1");

        	if(this.bUpdate) {
        		// 저장할 데이터가 없습니다.
        		this.gfnAlert("msg.save.nochange");
        		return;
          	}

        	this.ds_Return.clear();
        	for (var i=0; i<this.dsAddressBook.colcount; i++) {
        		var objColInfo = this.dsAddressBook.getColumnInfo(i);
        		this.ds_Return.addColumnInfo(objColInfo.name, objColInfo);
        	}

         	for (var i=0; i<this.dsAddressBook.rowcount; i++) {
         		if(this.dsAddressBook.getColumn(i, "CHECK")=="1")
         		{
         			var nRow = this.ds_Return.addRow();
         			this.ds_Return.copyRow(nRow, this.dsAddressBook, i);
         		}
         	}
        	if(this.ds_Return.rowcount == 0)
        	{
        		this.gfnAlert('msg.err.grid.noselect', []);	// 선택된 항목이 없습니다.
        		return false;
        	}
        	return true;
        }
        this.div_Reason_cmb_SalesEmp_onitemchanged = function(obj,e)
        {
        	this.dsAdminOpinion.setColumn(0, "SALES_EMP_NAME", e.posttext);
        	this.dsAdminOpinion.setColumn(0, "INSERT_EMP_NAME",  nexacro.getApplication().gdsUserInfo.getColumn(0, "EMP_NM"));
        	this.dsAdminOpinion.setColumn(0, "INSERT_DATE", this.gfnToday());
        };

        this.btn_Cancel_onclick = function(obj,e)
        {
        	this.commUtil.popupClose();
        };

        this.dsAddressBook_cancolumnchange = function(obj,e)
        {
        // 	if(e.columnid=="EMP_NAME")
        // 	{
        // 		var nRow = obj.findRow("EMP_NAME", e.newvalue);
        // 		if(nRow>=0)
        // 			if(! this.confirm(this.gfnGetTransTxt(1675, "동명이인이 존재 합니다. 계속진행하시겠습니까?")) )
        // 				obj.deleteRow(e.row);
        // 	}
        };

        this.dsAddressBook_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid!="CHECK")
        	{
        		this.bUpdate = true;
        	}
        };



        this.tab_Info_tpg_BasicInfo_edt_CompanyName_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		var sCompanyName = this.tab_Info.tpg_BasicInfo.form.edt_CompanyName.value;
        		var Argument = {
        			pvCompanyName:sCompanyName
        		};
        		this.commUtil.popup(this, "CompanySearchReg", "sales::base/SC_CompanySearchReg.xfdl", -1, -1, null, null, true, true, false, Argument, "fnPopupCallBack");
        	}
        };

        this.fnSetTooltip = function () //접속 언어별 툴팁변경
        {
        	var sLang = nexacro.getApplication().gdsUser.getColumn(0, "LANGUAGE");
        	var rtnArg = {};
        	if(sLang == 'JAP')
        	{
        		rtnArg[0] = "회사명 (일본)";
        		rtnArg[1] = "회사명 (한국)";
        	} else {
        		rtnArg[0] = "회사명 (한국)";
        		rtnArg[1] = "회사명 (일본)";
        	}
        	this.tab_Info.tpg_BasicInfo.form.stc_CompanyName.set_tooltiptext(rtnArg[0]);
        	this.tab_Info.tpg_BasicInfo.form.stc_CompanyNameJap.set_tooltiptext(rtnArg[1]);
        };

        this.doZip_onsuccess = function(obj,e)
        {
        	trace("onsuccess");
        	obj.removeChangedInfo(e.serviceid);
        };

        this.doZip_onload = function(obj,e)
        {
        	if(obj.data.data){
        		this.tab_Info.tpg_BasicInfo.form.edt_Address.set_value(obj.data.data[0].allAddress);
        		this.tab_Info.tpg_BasicInfo.form.edt_Address.setFocus();
        	}
        };

        this.tab_Info_tpg_BasicInfo_edt_PostNo_onkeyup = function(obj,e)
        {
        	if (e.keycode == "13")
        	{
        		this.tab_Info.tpg_BasicInfo.form.btn_PostalNumber.click();
        	}
        };

        this.doZip_onerror = function(obj,e)
        {
        	trace("onerror-" +e.errordata);

        	//this.alert(this.gfnGetTransTxt(22843, "올바른 우편번호가 아닙니다. 확인 하시고 다시 입력 하세요"));
        	//this.tab_Info.tpg_BasicInfo.form.edt_PostNo.set_value("");


        };

        // 담당자 의견
        this.tab_Info_tpg_Credit_stc_AdminOpinion_onclick = function(obj,e)
        {
        // 	if(this.dsAdminOpinion.getRowType(0) == Dataset.ROWTYPE_INSERT) {
        // 		this.div_Reason.trackPopupByComponent(obj, 0, obj.getOffsetHeight());
        // 	}
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SC_CompanyReg_onload,this);
            this.btn_Cancel.addEventHandler("onclick",this.btn_Cancel_onclick,this);
            this.btn_Save.addEventHandler("onclick",this.comm_Click,this);
            this.btn_CompanyAddMM.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Del.addEventHandler("onclick",this.comm_Click,this);
            this.tab_Info.addEventHandler("onchanged",this.tab_Info_onchanged,this);
            this.tab_Info.tpg_BasicInfo.form.stc_CompanyReg1.addEventHandler("onclick",this.tab_Info_tpg_BasicInfo_stc_CompanyReg1_onclick,this);
            this.tab_Info.tpg_BasicInfo.form.chb_OfficialPartner.addEventHandler("onchanged",this.tab_Info_tpg_BasicInfo_chb_OfficialPartner_onchanged,this);
            this.tab_Info.tpg_BasicInfo.form.edt_CompanyName.addEventHandler("onkillfocus",this.tab_Info_tpg_BasicInfo_edt_CompanyName_onkillfocus,this);
            this.tab_Info.tpg_BasicInfo.form.edt_CompanyName.addEventHandler("onkeydown",this.tab_Info_tpg_BasicInfo_edt_CompanyName_onkeydown,this);
            this.tab_Info.tpg_BasicInfo.form.btn_CompanyName.addEventHandler("onclick",this.comm_Click,this);
            this.tab_Info.tpg_Credit.form.stc_AdminOpinion.addEventHandler("onclick",this.tab_Info_tpg_Credit_stc_AdminOpinion_onclick,this);
            this.tab_Info.tpg_Credit.form.btn_Evaluate.addEventHandler("onclick",this.comm_Click,this);
            this.tab_Info.tpg_Credit.form.btn_Print.addEventHandler("onclick",this.comm_Click,this);
            this.tab_Info.tpg_Credit.form.cmb_AdminOpinion.addEventHandler("onitemchanged",this.tab_Info_tpg_Credit_cmb_AdminOpinion_onitemchanged,this);
            this.tab_Info.tpg_Credit.form.btn_AdminOpinionHistory.addEventHandler("onclick",this.comm_Click,this);
            this.tab_Info.tpg_Credit.form.btn_CreditMinus.addEventHandler("onclick",this.comm_Click,this);
            this.tab_Info.tpg_Credit.form.btn_CreditPlus.addEventHandler("onclick",this.comm_Click,this);
            this.tab_Info.tpg_Contract.form.grd_ContractList.addEventHandler("oncelldblclick",this.tab_Info_tpg_Contract_grd_ContractList_oncelldblclick,this);
            this.tab_Info.tpg_Contract.form.grd_PurchaseList.addEventHandler("oncelldblclick",this.tab_Info_tpg_Contract_grd_PurchaseList_oncelldblclick,this);
            this.tab_Info.tpg_Contract.form.edt_AvgBillDate.addEventHandler("onchanged",this.div_CompanyReg_edt_Asset_onchanged,this);
            this.tab_Info.tpg_Contract.form.edt_MaxContractPrice.addEventHandler("onchanged",this.div_CompanyReg_edt_Asset_onchanged,this);
            this.tab_Info.tpg_Contract.form.edt_AvgPayDate.addEventHandler("onchanged",this.div_CompanyReg_edt_Asset_onchanged,this);
            this.tab_Info.tpg_Contract.form.edt_MaxPurchasePrice.addEventHandler("onchanged",this.div_CompanyReg_edt_Asset_onchanged,this);
            this.tab_Info.tpg_Person.form.grd_AddressBook.addEventHandler("oncelldblclick",this.tab_Info_tpg_Person_grd_AddressBook_oncelldblclick,this);
            this.tab_Info.tpg_Person.form.stc_Remark.addEventHandler("onclick",this.tab_Info_tpg_Person_stc_Remark_onclick,this);
            this.btn_Minus.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Plus.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Confirm.addEventHandler("onclick",this.btn_Confirm_onclick,this);
            this.wb_PostalSearch.addEventHandler("onloadcompleted",this.wb_PostalSearch_onloadcompleted,this);
            this.wb_PostalSearch.addEventHandler("onusernotify",this.wb_PostalSearch_onusernotify,this);
            this.btn_ExcelPurchaseList.addEventHandler("onclick",this.btn_Excel_onclick,this);
            this.div_Reason.form.cmb_SalesEmp.addEventHandler("onitemchanged",this.div_Reason_cmb_SalesEmp_onitemchanged,this);
            this.div_Reason.form.btn_PopClose3.addEventHandler("onclick",this.comm_Click,this);
            this.div_Reason.form.divMainBg.form.btn_PopClose3.addEventHandler("onclick",this.comm_Click,this);
            this.div_History.form.btn_PopClose2.addEventHandler("onclick",this.comm_Click,this);
            this.div_History.form.divMainBg.form.btn_PopClose2.addEventHandler("onclick",this.comm_Click,this);
            this.btn_ExcelPurchase.addEventHandler("onclick",this.btn_Excel_onclick,this);
            this.btn_ExcelContractList.addEventHandler("onclick",this.btn_Excel_onclick,this);
            this.btn_ExcelContract.addEventHandler("onclick",this.btn_Excel_onclick,this);
            this.dsAddressBook.addEventHandler("cancolumnchange",this.dsAddressBook_cancolumnchange,this);
            this.dsAddressBook.addEventHandler("oncolumnchanged",this.dsAddressBook_oncolumnchanged,this);
            this.doZip.addEventHandler("onload",this.doZip_onload,this);
            this.doZip.addEventHandler("onsuccess",this.doZip_onsuccess,this);
            this.doZip.addEventHandler("onerror",this.doZip_onerror,this);
        };
        this.loadIncludeScript("SC_CompanyReg.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
