(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SS_ContractDetail");
            this.set_titletext("계약 상세내용");
            this.set_cssclass("frm_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,646);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmm_SalesStatus", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"string\" size=\"30\"/><Column id=\"CAPTION\" type=\"string\" size=\"255\"/><Column id=\"VAL1\" type=\"string\" size=\"100\"/><Column id=\"VAL2\" type=\"string\" size=\"100\"/><Column id=\"VAL3\" type=\"string\" size=\"100\"/><Column id=\"VAL4\" type=\"string\" size=\"100\"/><Column id=\"REMARK\" type=\"string\" size=\"1073741823\"/><Column id=\"ORD\" type=\"string\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_Type", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"string\" size=\"30\"/><Column id=\"CAPTION\" type=\"string\" size=\"255\"/><Column id=\"VAL1\" type=\"string\" size=\"100\"/><Column id=\"VAL2\" type=\"string\" size=\"100\"/><Column id=\"VAL3\" type=\"string\" size=\"100\"/><Column id=\"VAL4\" type=\"string\" size=\"100\"/><Column id=\"REMARK\" type=\"string\" size=\"1073741823\"/><Column id=\"ORD\" type=\"string\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_Importance", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"string\" size=\"30\"/><Column id=\"CAPTION\" type=\"string\" size=\"255\"/><Column id=\"VAL1\" type=\"string\" size=\"100\"/><Column id=\"VAL2\" type=\"string\" size=\"100\"/><Column id=\"VAL3\" type=\"string\" size=\"100\"/><Column id=\"VAL4\" type=\"string\" size=\"100\"/><Column id=\"REMARK\" type=\"string\" size=\"1073741823\"/><Column id=\"ORD\" type=\"string\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_Role", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"string\" size=\"30\"/><Column id=\"CAPTION\" type=\"string\" size=\"255\"/><Column id=\"VAL1\" type=\"string\" size=\"100\"/><Column id=\"VAL2\" type=\"string\" size=\"100\"/><Column id=\"VAL3\" type=\"string\" size=\"100\"/><Column id=\"VAL4\" type=\"string\" size=\"100\"/><Column id=\"REMARK\" type=\"string\" size=\"1073741823\"/><Column id=\"ORD\" type=\"string\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_Level", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"string\" size=\"30\"/><Column id=\"CAPTION\" type=\"string\" size=\"255\"/><Column id=\"VAL1\" type=\"string\" size=\"100\"/><Column id=\"VAL2\" type=\"string\" size=\"100\"/><Column id=\"VAL3\" type=\"string\" size=\"100\"/><Column id=\"VAL4\" type=\"string\" size=\"100\"/><Column id=\"REMARK\" type=\"string\" size=\"1073741823\"/><Column id=\"ORD\" type=\"string\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_Area", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"string\" size=\"30\"/><Column id=\"CAPTION\" type=\"string\" size=\"255\"/><Column id=\"VAL1\" type=\"string\" size=\"100\"/><Column id=\"VAL2\" type=\"string\" size=\"100\"/><Column id=\"VAL3\" type=\"string\" size=\"100\"/><Column id=\"VAL4\" type=\"string\" size=\"100\"/><Column id=\"REMARK\" type=\"string\" size=\"1073741823\"/><Column id=\"ORD\" type=\"string\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CODE\" type=\"string\" size=\"15\"/><Column id=\"PROJECT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CLIENT_CODE\" type=\"string\" size=\"20\"/><Column id=\"CLIENT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CONTRACT_NO\" type=\"string\" size=\"10\"/><Column id=\"CONTRACT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CONTRACT_MAIN\" type=\"string\" size=\"20\"/><Column id=\"CONTRACT_MAIN_NAME\" type=\"string\" size=\"100\"/><Column id=\"PRODUCT_CODE\" type=\"string\" size=\"20\"/><Column id=\"PRODUCT_NAME\" type=\"string\" size=\"100\"/><Column id=\"SALES_STATUS\" type=\"string\" size=\"20\"/><Column id=\"CONTRACT_DATE\" type=\"string\" size=\"8\"/><Column id=\"REMARKS\" type=\"string\" size=\"1073741823\"/><Column id=\"SALES_EMP_NO\" type=\"string\" size=\"60\"/><Column id=\"EMP_NAME\" type=\"string\" size=\"255\"/><Column id=\"CONTRACT_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PURCHASE_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"NET_SALES_AMT\" type=\"BIGDECIMAL\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsContractProd", this);
            obj._setContents("<ColumnInfo><Column id=\"CONTRACT_NO\" type=\"string\" size=\"10\"/><Column id=\"CONTRACT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CRD_SEQ\" type=\"bigdecimal\" size=\"20\"/><Column id=\"PRODUCT_CODE\" type=\"string\" size=\"20\"/><Column id=\"PRODUCT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CONTRACT_PRICE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CONTRACT_TYPE\" type=\"string\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsContractSi", this);
            obj._setContents("<ColumnInfo><Column id=\"CONTRACT_NO\" type=\"string\" size=\"10\"/><Column id=\"CONTRACT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CSD_SEQ\" type=\"bigdecimal\" size=\"20\"/><Column id=\"ROLE_CODE\" type=\"string\" size=\"20\"/><Column id=\"LEVEL_CODE\" type=\"string\" size=\"20\"/><Column id=\"UNIT_COST\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"MEN_MONTH\" type=\"float\" size=\"22\"/><Column id=\"CONTRACT_PRICE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"AREA_CODE\" type=\"string\" size=\"20\"/><Column id=\"REMARKS\" type=\"string\" size=\"1073741823\"/><Column id=\"CONTRACT_TYPE\" type=\"string\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsContractGoods", this);
            obj._setContents("<ColumnInfo><Column id=\"CONTRACT_NO\" type=\"string\" size=\"10\"/><Column id=\"CONTRACT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CRD_SEQ\" type=\"bigdecimal\" size=\"20\"/><Column id=\"PRODUCT_CODE\" type=\"string\" size=\"20\"/><Column id=\"PRODUCT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CONTRACT_PRICE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CONTRACT_TYPE\" type=\"string\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPurchaseList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CODE\" type=\"string\" size=\"15\"/><Column id=\"CONTRACT_NO_PURCHASE\" type=\"string\" size=\"10\"/><Column id=\"CONTRACT_NO\" type=\"string\" size=\"10\"/><Column id=\"CONTRACT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CONTRACT_TYPE\" type=\"string\" size=\"20\"/><Column id=\"PURCHASE_TYPE\" type=\"string\" size=\"20\"/><Column id=\"PPD_SEQ\" type=\"bigdecimal\" size=\"20\"/><Column id=\"PRODUCT_CODE\" type=\"string\" size=\"20\"/><Column id=\"PRODUCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONTRACT_PRICE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CONTRACT_MAIN\" type=\"string\" size=\"20\"/><Column id=\"COMPANY_NAME\" type=\"string\" size=\"100\"/><Column id=\"COMMISSION_RATE\" type=\"float\" size=\"22\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsScheduleList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CODE\" type=\"string\" size=\"15\"/><Column id=\"CONTRACT_NO\" type=\"string\" size=\"10\"/><Column id=\"TYPE_CODE\" type=\"string\" size=\"20\"/><Column id=\"ISSUE_DATE\" type=\"string\" size=\"8\"/><Column id=\"REPORT_FLAG\" type=\"string\" size=\"1\"/><Column id=\"IMPORTANCE\" type=\"int\" size=\"11\"/><Column id=\"OPEN_FLAG\" type=\"string\" size=\"1\"/><Column id=\"CONTENTS\" type=\"string\" size=\"1073741823\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAddressbookList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CODE\" type=\"string\" size=\"15\"/><Column id=\"CA_SEQ\" type=\"bigdecimal\" size=\"20\"/><Column id=\"COMPANY_CODE\" type=\"string\" size=\"20\"/><Column id=\"COMPANY_NAME\" type=\"string\" size=\"200\"/><Column id=\"EMP_NAME\" type=\"string\" size=\"100\"/><Column id=\"DEPT_NAME\" type=\"string\" size=\"100\"/><Column id=\"GRADE_NAME\" type=\"string\" size=\"100\"/><Column id=\"ROLE_NAME\" type=\"string\" size=\"100\"/><Column id=\"H_PHONE_NO\" type=\"string\" size=\"30\"/><Column id=\"O_PHONE_NO\" type=\"string\" size=\"30\"/><Column id=\"HOLD_OFFICE_NAME\" type=\"string\" size=\"20\"/><Column id=\"EMAIL\" type=\"string\" size=\"200\"/><Column id=\"ETAX_FLAG\" type=\"string\" size=\"1\"/><Column id=\"ORDER_FLAG\" type=\"string\" size=\"1\"/><Column id=\"REMARKS\" type=\"string\" size=\"1073741823\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPreSiEmpList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CODE\" type=\"string\" size=\"15\"/><Column id=\"CONTRACT_NO\" type=\"string\" size=\"10\"/><Column id=\"PSE_SEQ\" type=\"bigdecimal\" size=\"20\"/><Column id=\"EMP_NO\" type=\"string\" size=\"60\"/><Column id=\"EMP_NAME\" type=\"string\" size=\"255\"/><Column id=\"CO_NAME\" type=\"string\" size=\"100\"/><Column id=\"START_DATE\" type=\"datetime\" size=\"23\"/><Column id=\"END_PLAN_DATE\" type=\"datetime\" size=\"23\"/><Column id=\"END_DATE\" type=\"datetime\" size=\"23\"/><Column id=\"NONRESIDENT_FLAG\" type=\"string\" size=\"1\"/><Column id=\"FREE_SVC_FLAG\" type=\"string\" size=\"1\"/><Column id=\"MEN_MONTH\" type=\"float\" size=\"22\"/><Column id=\"CONTRACT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CONTRACT_PRICE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CONTRACT_NO_PURCHASE\" type=\"string\" size=\"10\"/><Column id=\"PURCHASE_CONTRACT_NAME\" type=\"string\" size=\"100\"/><Column id=\"ROLE_CODE\" type=\"string\" size=\"20\"/><Column id=\"LEVEL_CODE\" type=\"string\" size=\"20\"/><Column id=\"UNIT_COST\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"REMARKS\" type=\"string\" size=\"1073741823\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTechList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_ConfirmCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_TechType", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","4","70",null,"184","4",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_detailLbl03");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close",null,"9","15","15","14",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_POP_Cls");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","10","167","15",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("계약 상세내용");
            obj.set_cssclass("sta_POP_Title");
            obj.getSetter("TL_SEQ").set("2086");
            this.addChild(obj.name, obj);

            obj = new Static("stc_SalesList","4","39",null,"31","4",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_POP_GroupBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_subTitle1","14","47","120","15",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("계약 기본정보");
            obj.set_cssclass("sta_POP_GroupTit");
            obj.getSetter("TL_SEQ").set("2098");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ClientCode","8","stc_SalesList:5","76","22",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("고  객  사");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("214");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ContractNo","284","stc_SalesList:5","76","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("프로젝트");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("119");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ContractName","284","stc_ContractNo:4","76","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("계  약  명");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("216");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ContractName01","365","101",null,"22","9",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_SalesEmpNo","560","edt_ContractName01:4","60","22",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("담당 영업");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("614");
            this.addChild(obj.name, obj);

            obj = new Static("stc_SalesEmpNo05","8","127","76","22",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("영업제품");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("83");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Remark","8","stc_SalesEmpNo05:4","76","70",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("비       고");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("1963");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_Progess","5","427",null,"178","4",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_tabindex("0");
            obj.getSetter("scrollbars").set("autoboth");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tpg_Progess",this.tab_Progess);
            obj.set_text("진행사항");
            obj.getSetter("TL_SEQ").set("65");
            this.tab_Progess.addChild(obj.name, obj);

            obj = new Static("Static06","90","-2.74%","601",null,null,"0.00%",null,null,null,null,this.tab_Progess.tpg_Progess.form);
            obj.set_taborder("10");
            obj.set_text("");
            obj.set_cssclass("sta_WF_detailLbl01");
            this.tab_Progess.tpg_Progess.addChild(obj.name, obj);

            obj = new Grid("grd_Date","0","4","96",null,null,"0",null,null,null,null,this.tab_Progess.tpg_Progess.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("dsScheduleList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"일자\" TL_SEQ=\"67\"/></Band><Band id=\"body\"><Cell text=\"bind:ISSUE_DATE\" edittype=\"none\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.tab_Progess.tpg_Progess.addChild(obj.name, obj);

            obj = new Static("stc_TypeCode","grd_Date:4","4","40","20",null,null,null,null,null,null,this.tab_Progess.tpg_Progess.form);
            obj.set_taborder("1");
            obj.set_text("구 분");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("633");
            this.tab_Progess.tpg_Progess.addChild(obj.name, obj);

            obj = new Combo("cmb_TypeCode","stc_TypeCode:4","4","93","22",null,null,null,null,null,null,this.tab_Progess.tpg_Progess.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_cmm_Type");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_readonly("true");
            obj.set_text("");
            this.tab_Progess.tpg_Progess.addChild(obj.name, obj);

            obj = new Static("stc_IssueDate","cmb_TypeCode:4","4","50","20",null,null,null,null,null,null,this.tab_Progess.tpg_Progess.form);
            obj.set_taborder("2");
            obj.set_text("일 자");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("634");
            this.tab_Progess.tpg_Progess.addChild(obj.name, obj);

            obj = new Static("stc_ProgressContent","grd_Date:4","stc_TypeCode:4","40",null,null,"0",null,null,null,null,this.tab_Progess.tpg_Progess.form);
            obj.set_taborder("3");
            obj.set_text("내 용");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("2009");
            this.tab_Progess.tpg_Progess.addChild(obj.name, obj);

            obj = new Calendar("cal_IssueDate","stc_IssueDate:4","4","101","22",null,null,null,null,null,null,this.tab_Progess.tpg_Progess.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            this.tab_Progess.tpg_Progess.addChild(obj.name, obj);

            obj = new Static("stc_Importance","cal_IssueDate:4","4","50","20",null,null,null,null,null,null,this.tab_Progess.tpg_Progess.form);
            obj.set_taborder("4");
            obj.set_text("중요도");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("72");
            this.tab_Progess.tpg_Progess.addChild(obj.name, obj);

            obj = new Combo("cmb_Importance","stc_Importance:4","4","79","22",null,null,null,null,null,null,this.tab_Progess.tpg_Progess.form);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_cmm_Importance");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_readonly("true");
            obj.set_text("");
            this.tab_Progess.tpg_Progess.addChild(obj.name, obj);

            obj = new TextArea("txt_ProgressContent","stc_ProgressContent:4","cmb_Importance:4",null,null,"0","0",null,null,null,null,this.tab_Progess.tpg_Progess.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.tab_Progess.tpg_Progess.addChild(obj.name, obj);

            obj = new CheckBox("chb_MakePublic",null,"4","60","22","0",null,null,null,null,null,this.tab_Progess.tpg_Progess.form);
            obj.set_taborder("9");
            obj.set_text("공개");
            obj.set_enable("false");
            obj.getSetter("TL_SEQ").set("71");
            this.tab_Progess.tpg_Progess.addChild(obj.name, obj);

            obj = new CheckBox("chb_MakePublic00",null,"4","60","22","chb_MakePublic:4",null,null,null,null,null,this.tab_Progess.tpg_Progess.form);
            obj.set_taborder("11");
            obj.set_text("보고");
            obj.set_enable("false");
            obj.getSetter("TL_SEQ").set("70");
            this.tab_Progess.tpg_Progess.addChild(obj.name, obj);

            obj = new Tabpage("tpg_PersonInCharge",this.tab_Progess);
            obj.set_text("담당자");
            obj.getSetter("TL_SEQ").set("66");
            this.tab_Progess.addChild(obj.name, obj);

            obj = new Grid("grd_PersonInCharge","0","0",null,null,"0","0",null,null,null,null,this.tab_Progess.tpg_PersonInCharge.form);
            obj.set_taborder("0");
            obj.getSetter("scrollbars").set("alwaysvert");
            obj.set_autoenter("select");
            obj.getSetter("useinputpanel").set("false");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_visible("true");
            obj.set_binddataset("dsAddressbookList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"93\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"회사\" TL_SEQ=\"73\"/><Cell col=\"2\" text=\"부서\" TL_SEQ=\"74\"/><Cell col=\"3\" text=\"담당자\" TL_SEQ=\"66\"/><Cell col=\"4\" text=\"직급\" TL_SEQ=\"26\"/><Cell col=\"5\" text=\"역할\" TL_SEQ=\"75\"/><Cell col=\"6\" colspan=\"2\" text=\"핸드폰\" TL_SEQ=\"76\"/><Cell row=\"1\" text=\"현황\" TL_SEQ=\"78\"/><Cell row=\"1\" col=\"1\" text=\"유선\" TL_SEQ=\"79\"/><Cell row=\"1\" col=\"2\" colspan=\"3\" text=\"이메일\" TL_SEQ=\"80\"/><Cell row=\"1\" col=\"5\" colspan=\"3\" text=\"비고\" TL_SEQ=\"45\"/></Band><Band id=\"body\"><Cell colspan=\"2\" text=\"bind:COMPANY_NAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:DEPT_NAME\"/><Cell col=\"3\" text=\"bind:EMP_NAME\"/><Cell col=\"4\" text=\"bind:GRADE_NAME\"/><Cell col=\"5\" text=\"bind:ROLE_NAME\"/><Cell col=\"6\" colspan=\"2\" text=\"bind:H_PHONE_NO\"/><Cell row=\"1\" text=\"bind:HOLD_OFFICE_NAME\"/><Cell row=\"1\" col=\"1\" text=\"bind:O_PHONE_NO\"/><Cell row=\"1\" col=\"2\" colspan=\"3\" text=\"bind:EMAIL\" textAlign=\"left\"/><Cell row=\"1\" col=\"5\" colspan=\"3\" text=\"bind:REMARKS\" textAlign=\"left\"/></Band></Format></Formats>");
            this.tab_Progess.tpg_PersonInCharge.addChild(obj.name, obj);

            obj = new Static("Static06","1",null,null,"36","1","1",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_POP_BtnBg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close00",null,null,"70","22","13","8",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_cancel");
            obj.set_tooltiptext("ESC");
            obj.getSetter("TL_SEQ").set("59");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_ContractDet","4","Static00:4",null,"32","4",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tp_ContractProd",this.tab_ContractDet);
            obj.set_text("제품매출");
            obj.getSetter("TL_SEQ").set("1964");
            this.tab_ContractDet.addChild(obj.name, obj);

            obj = new Tabpage("tp_ContractGoods",this.tab_ContractDet);
            obj.set_text("상품매출");
            obj.getSetter("TL_SEQ").set("1965");
            this.tab_ContractDet.addChild(obj.name, obj);

            obj = new Tabpage("tp_ContractSi",this.tab_ContractDet);
            obj.set_text("용역매출");
            obj.getSetter("TL_SEQ").set("2099");
            this.tab_ContractDet.addChild(obj.name, obj);

            obj = new Tabpage("tp_PurchaseContract",this.tab_ContractDet);
            obj.set_text("매입");
            obj.getSetter("TL_SEQ").set("52");
            this.tab_ContractDet.addChild(obj.name, obj);

            obj = new Tabpage("tp_PreSiEmp",this.tab_ContractDet);
            obj.set_text("선투입");
            obj.getSetter("TL_SEQ").set("970");
            this.tab_ContractDet.addChild(obj.name, obj);

            obj = new Tabpage("tp_Tech",this.tab_ContractDet);
            obj.set_text("기술지원");
            obj.getSetter("TL_SEQ").set("652");
            this.tab_ContractDet.addChild(obj.name, obj);

            obj = new Grid("grd_DetailList","4","tab_ContractDet:0",null,"133","4",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_formatid("product");
            obj.set_readonly("true");
            obj.set_binddataset("dsContractProd");
            obj._setContents("<Formats><Format id=\"product\"><Columns><Column size=\"200\"/><Column size=\"178\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"항목(제품/상품)\" TL_SEQ=\"2160\"/><Cell col=\"1\" text=\"예상매출액\" TL_SEQ=\"87\"/></Band><Band id=\"body\"><Cell text=\"bind:PRODUCT_NAME\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:CONTRACT_PRICE\" textAlign=\"right\" displaytype=\"expr:comp.parent.gfn_getPriceDisplayType(&apos;normal&apos;)\" maskeditformat=\"expr:comp.parent.gfn_getPriceMaskformat(CONTRACT_PRICE)\" maskedittype=\"expr:comp.parent.gfn_getPriceMaskEdtType()\"/></Band></Format><Format id=\"goods\"><Columns><Column size=\"200\"/><Column size=\"178\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"항목(제품/상품)\" TL_SEQ=\"2160\"/><Cell col=\"1\" text=\"예상매출액\" TL_SEQ=\"87\"/></Band><Band id=\"body\"><Cell text=\"bind:PRODUCT_NAME\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:CONTRACT_PRICE\" textAlign=\"right\" displaytype=\"expr:comp.parent.gfn_getPriceDisplayType(&apos;normal&apos;)\" maskeditformat=\"expr:comp.parent.gfn_getPriceMaskformat(CONTRACT_PRICE)\" maskedittype=\"expr:comp.parent.gfn_getPriceMaskEdtType()\"/></Band></Format><Format id=\"si\"><Columns><Column size=\"90\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"60\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"137\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"항목\" TL_SEQ=\"105\"/><Cell col=\"1\" text=\"등급\" TL_SEQ=\"92\"/><Cell col=\"2\" text=\"예상단가\" TL_SEQ=\"93\"/><Cell col=\"3\" text=\"MM\" TL_SEQ=\"96\"/><Cell col=\"4\" text=\"금액\" TL_SEQ=\"97\"/><Cell col=\"5\" text=\"근무지역\" TL_SEQ=\"98\"/><Cell col=\"6\" text=\"비고\" TL_SEQ=\"45\"/></Band><Band id=\"body\"><Cell text=\"bind:ROLE_CODE\" displaytype=\"combotext\" combodataset=\"ds_cmm_Role\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/><Cell col=\"1\" text=\"bind:LEVEL_CODE\" combodataset=\"ds_cmm_Level\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" displaytype=\"combotext\"/><Cell col=\"2\" text=\"bind:UNIT_COST\" textAlign=\"right\" displaytype=\"expr:comp.parent.gfn_getPriceDisplayType(&apos;normal&apos;)\" maskeditformat=\"expr:comp.parent.gfn_getPriceMaskformat(UNIT_COST)\" maskedittype=\"expr:comp.parent.gfn_getPriceMaskEdtType()\"/><Cell col=\"3\" text=\"bind:MEN_MONTH\"/><Cell col=\"4\" text=\"bind:CONTRACT_PRICE\" textAlign=\"right\" maskeditformat=\"expr:comp.parent.gfn_getPriceMaskformat(CONTRACT_PRICE)\" maskedittype=\"expr:comp.parent.gfn_getPriceMaskEdtType()\" displaytype=\"expr:comp.parent.gfn_getPriceDisplayType(&apos;normal&apos;)\"/><Cell col=\"5\" text=\"bind:AREA_CODE\" combodataset=\"ds_cmm_Area\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" displaytype=\"combotext\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:REMARKS\" textAlign=\"left\"/></Band></Format><Format id=\"purchase\"><Columns><Column size=\"180\"/><Column size=\"160\"/><Column size=\"200\"/><Column size=\"151\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"항목\" TL_SEQ=\"105\"/><Cell col=\"1\" text=\"예상매입액\" TL_SEQ=\"107\"/><Cell col=\"2\" text=\"매입처\" TL_SEQ=\"108\"/><Cell col=\"3\" text=\"판매수수료율\" TL_SEQ=\"1911\"/></Band><Band id=\"body\"><Cell text=\"bind:PRODUCT_NAME\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:CONTRACT_PRICE\" textAlign=\"right\" displaytype=\"expr:comp.parent.gfn_getPriceDisplayType(&apos;normal&apos;)\" maskeditformat=\"expr:comp.parent.gfn_getPriceMaskformat(CONTRACT_PRICE)\" maskedittype=\"expr:comp.parent.gfn_getPriceMaskEdtType()\"/><Cell col=\"2\" text=\"bind:COMPANY_NAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:COMMISSION_RATE\" textAlign=\"right\"/></Band></Format><Format id=\"presiemp\"><Columns><Column size=\"120\"/><Column size=\"82\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"48\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"소속사\" TL_SEQ=\"783\"/><Cell col=\"1\" text=\"성명\" TL_SEQ=\"27\"/><Cell col=\"2\" text=\"등급\" TL_SEQ=\"92\"/><Cell col=\"3\" text=\"역할\" TL_SEQ=\"75\"/><Cell col=\"4\" text=\"투입일자\" TL_SEQ=\"784\"/><Cell col=\"5\" text=\"종료일자\" TL_SEQ=\"95\"/><Cell col=\"6\" text=\"MM\" TL_SEQ=\"96\"/><Cell col=\"7\" text=\"계약금액\" TL_SEQ=\"40\"/></Band><Band id=\"body\"><Cell text=\"bind:CO_NAME\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:EMP_NAME\"/><Cell col=\"2\" displaytype=\"combotext\" text=\"bind:LEVEL_CODE\" combodataset=\"ds_cmm_Level\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/><Cell col=\"3\" displaytype=\"combotext\" combodataset=\"ds_cmm_Role\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" text=\"bind:ROLE_CODE\"/><Cell col=\"4\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" text=\"bind:START_DATE\"/><Cell col=\"5\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\" text=\"bind:END_DATE\"/><Cell col=\"6\" text=\"bind:MEN_MONTH\" displaytype=\"number\"/><Cell col=\"7\" displaytype=\"expr:comp.parent.gfn_getPriceDisplayType(&apos;number&apos;)\" text=\"bind:CONTRACT_PRICE\" textAlign=\"right\" maskeditformat=\"expr:comp.parent.gfn_getPriceMaskformat(CONTRACT_PRICE)\" maskedittype=\"expr:comp.parent.gfn_getPriceMaskEdtType()\"/></Band></Format><Format id=\"Tech\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"125\"/><Column size=\"98\"/><Column size=\"98\"/><Column size=\"75\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO\" TL_SEQ=\"167\"/><Cell col=\"1\" text=\"승인상태\" TL_SEQ=\"790\"/><Cell col=\"2\" text=\"기술지원구분\" TL_SEQ=\"791\"/><Cell col=\"3\" text=\"작업시작일자\" TL_SEQ=\"792\"/><Cell col=\"4\" text=\"작업완료일자\" TL_SEQ=\"793\"/><Cell col=\"5\" text=\"총작업시간\" TL_SEQ=\"794\"/><Cell col=\"6\" text=\"기술담당자\" TL_SEQ=\"795\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\" tooltiptext=\"bind:WORK_CONTENTS\"/><Cell col=\"1\" displaytype=\"combotext\" combodataset=\"ds_cmm_ConfirmCd\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" text=\"bind:CONFIRM_CD\" tooltiptext=\"bind:WORK_CONTENTS\"/><Cell col=\"2\" displaytype=\"combotext\" combodataset=\"ds_cmm_TechType\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" text=\"bind:TECH_TYPE\" tooltiptext=\"bind:WORK_CONTENTS\"/><Cell col=\"3\" displaytype=\"expr:WORK_START_DATE.length&gt;0?&apos;date&apos;:&apos;normal&apos;\" calendardateformat=\"yyyy-MM-dd\" text=\"bind:WORK_START_DATE\" tooltiptext=\"bind:WORK_CONTENTS\"/><Cell col=\"4\" displaytype=\"expr:WORK_END_DATE.length&gt;0?&apos;date&apos;:&apos;normal&apos;\" calendardateformat=\"yyyy-MM-dd\" text=\"bind:WORK_END_DATE\" tooltiptext=\"bind:WORK_CONTENTS\"/><Cell col=\"5\" textAlign=\"right\" displaytype=\"number\" text=\"bind:WORK_TOTAL_TIME\" tooltiptext=\"bind:WORK_CONTENTS\"/><Cell col=\"6\" text=\"bind:WORK_EMP_NAM\" tooltiptext=\"bind:WORK_CONTENTS\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ContractName","89","stc_SalesList:5","170","22",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ContractName00","365","stc_SalesList:5",null,"22","9",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_SalesEmpNo","281","stc_ContractName:4","96","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_innerdataset("ds_cmm_SalesStatus");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_readonly("true");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ContractName03","89","edt_ContractName:4","170","22",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_SalesEmpNo00","224","edt_ContractName03:4","52","22",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("영업상태");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("84");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_ContractDate","451","edt_ContractName01:4","108","22",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_readonly("true");
            obj.set_dateformat("yyyy-MM-dd");
            this.addChild(obj.name, obj);

            obj = new Static("stc_SalesEmpNo02","376","edt_ContractName01:4","68","22",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("계약예정일");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("64");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt__Remark","89","cmb_SalesEmpNo:4",null,"70","9",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_SalesEmpNo01","8","227","76","22",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("예상매출총액");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("2159");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_ContractAmt","89","227","138","22",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_SalesEmpNo03","264","227","76","22",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("예상매입총액");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("2181");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_PurchaseAmt","345","227","138","22",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_SalesEmpNo04","490","227","60","22",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("순매출");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("279");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_NetSalesAmt","554","txt__Remark:4","138","22",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_format("#,##0");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ContractName02","626","edt_ContractName01:4",null,"22","9",null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ClientCode00","8","stc_ClientCode:4","76","22",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("계  약  처");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("215");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ContractName04","89","edt_ContractName03:4","130","22",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.tab_Progess.tpg_Progess.form
            obj = new Layout("default","",0,0,this.tab_Progess.tpg_Progess.form,function(p){});
            this.tab_Progess.tpg_Progess.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_Progess.tpg_PersonInCharge.form
            obj = new Layout("default","",0,0,this.tab_Progess.tpg_PersonInCharge.form,function(p){});
            this.tab_Progess.tpg_PersonInCharge.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_ContractDet.tp_ContractProd
            obj = new Layout("default","",0,0,this.tab_ContractDet.tp_ContractProd.form,function(p){});
            this.tab_ContractDet.tp_ContractProd.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_ContractDet.tp_ContractGoods
            obj = new Layout("default","",0,0,this.tab_ContractDet.tp_ContractGoods.form,function(p){});
            this.tab_ContractDet.tp_ContractGoods.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_ContractDet.tp_ContractSi.form
            obj = new Layout("default","",0,0,this.tab_ContractDet.tp_ContractSi.form,function(p){});
            this.tab_ContractDet.tp_ContractSi.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_ContractDet.tp_PurchaseContract.form
            obj = new Layout("default","",0,0,this.tab_ContractDet.tp_PurchaseContract.form,function(p){});
            this.tab_ContractDet.tp_PurchaseContract.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_ContractDet.tp_PreSiEmp.form
            obj = new Layout("default","",0,0,this.tab_ContractDet.tp_PreSiEmp.form,function(p){});
            this.tab_ContractDet.tp_PreSiEmp.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_ContractDet.tp_Tech.form
            obj = new Layout("default","",0,0,this.tab_ContractDet.tp_Tech.form,function(p){});
            this.tab_ContractDet.tp_Tech.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",700,646,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","cmb_SalesEmpNo","value","dsList","SALES_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","cal_ContractDate","value","dsList","CONTRACT_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","txt__Remark","value","dsList","REMARKS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","tab_Progess.tpg_Progess.form.cmb_TypeCode","value","dsScheduleList","TYPE_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","tab_Progess.tpg_Progess.form.chb_MakePublic","value","dsScheduleList","OPEN_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","tab_Progess.tpg_Progess.form.chb_MakePublic00","value","dsScheduleList","REPORT_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","tab_Progess.tpg_Progess.form.txt_ProgressContent","value","dsScheduleList","CONTENTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","tab_Progess.tpg_Progess.form.cal_IssueDate","value","dsScheduleList","ISSUE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","tab_Progess.tpg_Progess.form.cmb_Importance","value","dsScheduleList","IMPORTANCE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edt_ContractName","value","dsList","CLIENT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","edt_ContractName00","value","dsList","PROJECT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","edt_ContractName03","value","dsList","CONTRACT_MAIN_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","edt_ContractName01","value","dsList","CONTRACT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edt_ContractName04","value","dsList","PRODUCT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","edt_ContractName02","value","dsList","EMP_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","medt_ContractAmt","value","dsList","CONTRACT_AMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","medt_PurchaseAmt","value","dsList","PURCHASE_AMT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","medt_NetSalesAmt","value","dsList","NET_SALES_AMT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SS_ContractDetail.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("SS_ContractDetail.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("SS_ContractDetail.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("SS_ContractDetail.xfdl","Script::CommGrid.xjs");
        this.registerScript("SS_ContractDetail.xfdl", function() {
        /************************************************************************************************
         * 01. 업무구분 : 영업관리 - 계약탭
         * 02. 화면명   : 계약 상세내용(SS_ContractDetail)
         * 03. 화면설명 : 영업관리 계약Tab에서 해당 계약에 대한 상세내용을 POPUP을 통해
         *				   계약 세부 내용을 확인
         * 04. 작성일   : 2018.09.07
         * 05. 작성자   : 채종한
         * 06. 수정이력 :
         ***********************************************************************************************
         *     수정일          이  름    사유
         ***********************************************************************************************
         *
         *
         *
         ***********************************************************************************************/


        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
         ************************************************************************************************/
        this.executeIncludeScript("Script::CommUtil.xjs"); /*include "Script::CommUtil.xjs"*/
        this.executeIncludeScript("Script::CommTrans.xjs"); /*include "Script::CommTrans.xjs"*/
        this.executeIncludeScript("Script::CommSystem.xjs"); /*include "Script::CommSystem.xjs"*/
        this.executeIncludeScript("Script::CommGrid.xjs"); /*include "Script::CommGrid.xjs"*/;

        /************************************************************************************************
        * 전역 변수 영역
        ************************************************************************************************/
         this.FV_PROJECT_CODE = "";
         this.FV_CONTRACT_NO = "";
         this.FV_AUTH_PRICE_MASK = false;

         /************************************************************************************************
         * FORM 영역
         ************************************************************************************************/
         this.SS_ContractDetail_onload = function(obj,e)
        {
        	this.gfnCompInit(obj); //헤더클릭 이벤트 없을 시 사용
        	this.FV_PROJECT_CODE = this.parent.pvProjectCd;
        	this.FV_CONTRACT_NO = this.parent.pvContractNo;

        	if(!this.gfnIsEmpty(this.parent.pvTabIndx))
        		this.tab_ContractDet.set_tabindex(this.parent.pvTabIndx);

        	this.fnAuthConfig();
        	this.fnGetCode();
        };

        // 권한 처리
        this.fnAuthConfig = function()
        {
        	if (this.commUtil.getFormAuthority(235,11))	this.FV_AUTH_PRICE_MASK = true;	// 계약금액 마스킹 처리 권한


        	this.fn_setPriceMasking(this.medt_ContractAmt);
        	this.fn_setPriceMasking(this.medt_PurchaseAmt);
        	this.fn_setPriceMasking(this.medt_NetSalesAmt);
        }

        this.fn_setPriceMasking = function (obj)
        {
        	var sContractAmt = obj.value;
        	if (this.gfnIsEmpty(sContractAmt))	sContractAmt = 0;

        	obj.set_type( this.gfn_getPriceMaskEdtType() );
        	obj.set_format( this.gfn_getPriceMaskformat(sContractAmt) );
        }

         /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
         ************************************************************************************************/
         // 공통코드 조회
         this.fnGetCode = function()
         {
         	this.gfnAddCodeDataset("ds_cmm_SalesStatus",	"SALES_STATUS"); 	// 영업상태 코드
        	this.gfnAddCodeDataset("ds_cmm_Type",			"TYPE_CODE");		// 일정 구분
        	this.gfnAddCodeDataset("ds_cmm_Importance",		"IMPORTANCE");		// 일정 중요도 코드
        	this.gfnAddCodeDataset("ds_cmm_Role", 			"ROLE_CODE");		// 역할 코드
        	this.gfnAddCodeDataset("ds_cmm_Level",			"LEVEL_CODE");		// 등급 코드
        	this.gfnAddCodeDataset("ds_cmm_Area",			"AREA_CODE");		// 근무지역 코드
        	this.gfnAddCodeDataset("ds_cmm_ConfirmCd",		"CONFIRM_CD");	// 승인상태
        	this.gfnAddCodeDataset("ds_cmm_TechType",		"TECH_TYPE");	// 기술지원구분

        	// 공통코드 조회
        	this.gfnCodeTransaction();
         }

        this.fnQueryData = function()
        {
        	// 조건값(Rarameter) 셋팅
        	this.gfnAddSendParameter("PROJECT_CODE",	this.FV_PROJECT_CODE);
        	this.gfnAddSendParameter("CONTRACT_NO",		this.FV_CONTRACT_NO);

        	// 조회용 Output dataset 세팅
        	this.gfnAddOutputDataset("dsList",				"ds_output0");
        	this.gfnAddOutputDataset("dsContractProd",		"ds_output1");
        	this.gfnAddOutputDataset("dsContractSi",		"ds_output2");
        	this.gfnAddOutputDataset("dsContractGoods",		"ds_output3");
        	this.gfnAddOutputDataset("dsPurchaseList",		"ds_output4");
        	this.gfnAddOutputDataset("dsScheduleList",		"ds_output5");
        	this.gfnAddOutputDataset("dsAddressbookList",	"ds_output6");
        	this.gfnAddOutputDataset("dsPreSiEmpList",		"ds_output7");
        	this.gfnAddOutputDataset("dsTechList",			"ds_output8");

        	this.gfnCommonTransaction("SS_ContractDetail_S01", "SS_ContractDetail_S01");
        };


        // 화면 콜백
        this.fnCallBack = function (strSvcID, nErrorCode, strErrorMag)
        {
        	switch (strSvcID)
        	{
        		case "gfnGetCode":
        			this.fnQueryData();
        			break;
        		case "SS_ContractDetail_S01":
        			this.fn_setPriceMasking(this.medt_ContractAmt);
        			this.fn_setPriceMasking(this.medt_PurchaseAmt);
        			this.fn_setPriceMasking(this.medt_NetSalesAmt);
        			break;
        	}
         }
         /************************************************************************************************
         * FORM 공통 FUNCTION 영역
         ************************************************************************************************/



         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        this.tab_ContractDet_onchanged = function(obj,e)
        {
        	this.grd_DetailList.set_enableevent(false);
        	if (e.postindex == 0) {
        		this.grd_DetailList.set_formatid("product");
        		this.grd_DetailList.set_binddataset("dsContractProd");
        	} else if (e.postindex == 1) {
        		this.grd_DetailList.set_formatid("goods");
        		this.grd_DetailList.set_binddataset("dsContractGoods");
        	} else if (e.postindex == 2) {
        		this.grd_DetailList.set_formatid("si");
        		this.grd_DetailList.set_binddataset("dsContractSi");
        	}  else if (e.postindex == 3) {
        		this.grd_DetailList.set_formatid("purchase");
        		this.grd_DetailList.set_binddataset("dsPurchaseList");
        	}  else if (e.postindex == 4) {
        		this.grd_DetailList.set_formatid("presiemp");
        		this.grd_DetailList.set_binddataset("dsPreSiEmpList");
        	}  else if (e.postindex == 5) {
        		this.grd_DetailList.set_formatid("Tech");
        		this.grd_DetailList.set_binddataset("dsTechList");
        	}
        	this.grd_DetailList.set_enableevent(true);
        };

        this.btn_Close_onclick = function(obj,e)
        {
        	this.commUtil.popupClose();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SS_ContractDetail_onload,this);
            this.btn_Close.addEventHandler("onclick",this.btn_Close_onclick,this);
            this.tab_Progess.addEventHandler("onchanged",this.Div03_Tab00_onchanged,this);
            this.btn_Close00.addEventHandler("onclick",this.btn_Close_onclick,this);
            this.tab_ContractDet.addEventHandler("onchanged",this.tab_ContractDet_onchanged,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
        };
        this.loadIncludeScript("SS_ContractDetail.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
