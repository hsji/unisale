(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SS_Presales");
            this.set_titletext("Presales");
            if (Form == this.constructor)
            {
                this._setFormPosition(1274,448);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmm_SalesStatus", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"string\" size=\"30\"/><Column id=\"CAPTION\" type=\"string\" size=\"255\"/><Column id=\"VAL1\" type=\"string\" size=\"100\"/><Column id=\"VAL2\" type=\"string\" size=\"100\"/><Column id=\"VAL3\" type=\"string\" size=\"100\"/><Column id=\"VAL4\" type=\"string\" size=\"100\"/><Column id=\"REMARK\" type=\"string\" size=\"1073741823\"/><Column id=\"ORD\" type=\"string\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_ContractStatus", this);
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


            obj = new Dataset("ds_cmm_SalesEmp", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"string\" size=\"60\"/><Column id=\"EMP_NAME\" type=\"string\" size=\"262\"/><Column id=\"CO_CD\" type=\"string\" size=\"60\"/><Column id=\"DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"DEPT_NAME\" type=\"string\" size=\"100\"/><Column id=\"BUSINESS_TYPE\" type=\"string\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_CaGrade", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"string\" size=\"30\"/><Column id=\"CAPTION\" type=\"string\" size=\"255\"/><Column id=\"VAL1\" type=\"string\" size=\"100\"/><Column id=\"VAL2\" type=\"string\" size=\"100\"/><Column id=\"VAL3\" type=\"string\" size=\"100\"/><Column id=\"VAL4\" type=\"string\" size=\"100\"/><Column id=\"REMARK\" type=\"string\" size=\"1073741823\"/><Column id=\"ORD\" type=\"string\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_CaRole", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"string\" size=\"30\"/><Column id=\"CAPTION\" type=\"string\" size=\"255\"/><Column id=\"VAL1\" type=\"string\" size=\"100\"/><Column id=\"VAL2\" type=\"string\" size=\"100\"/><Column id=\"VAL3\" type=\"string\" size=\"100\"/><Column id=\"VAL4\" type=\"string\" size=\"100\"/><Column id=\"REMARK\" type=\"string\" size=\"1073741823\"/><Column id=\"ORD\" type=\"string\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_HoldOffice", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"30\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"255\"/><Column id=\"VAL1\" type=\"STRING\" size=\"100\"/><Column id=\"VAL2\" type=\"STRING\" size=\"100\"/><Column id=\"VAL3\" type=\"STRING\" size=\"100\"/><Column id=\"VAL4\" type=\"STRING\" size=\"100\"/><Column id=\"REMARK\" type=\"STRING\" size=\"1073741823\"/><Column id=\"ORD\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_BusinessType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"30\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"255\"/><Column id=\"VAL1\" type=\"STRING\" size=\"100\"/><Column id=\"VAL2\" type=\"STRING\" size=\"100\"/><Column id=\"VAL3\" type=\"STRING\" size=\"100\"/><Column id=\"VAL4\" type=\"STRING\" size=\"100\"/><Column id=\"REMARK\" type=\"STRING\" size=\"1073741823\"/><Column id=\"ORD\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CODE\" type=\"string\" size=\"15\"/><Column id=\"CONTRACT_NO\" type=\"string\" size=\"10\"/><Column id=\"PROJECT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CONTRACT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CLIENT_CODE\" type=\"string\" size=\"20\"/><Column id=\"CLIENT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CONTRACT_MAIN\" type=\"string\" size=\"20\"/><Column id=\"CONTRACT_MAIN_NAME\" type=\"string\" size=\"100\"/><Column id=\"CONTRACT_DATE\" type=\"string\" size=\"8\"/><Column id=\"PRODUCT_CODE\" type=\"string\" size=\"20\"/><Column id=\"PRODUCT_NAME\" type=\"string\" size=\"100\"/><Column id=\"PRODUCT_NAME_SHORT\" type=\"STRING\" size=\"100\"/><Column id=\"SALES_STATUS\" type=\"string\" size=\"20\"/><Column id=\"RELATED_PROJECT_CODE\" type=\"string\" size=\"15\"/><Column id=\"RELATED_PROJECT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_CONTRACT_STATUS\" type=\"string\" size=\"20\"/><Column id=\"CONTRACT_STATUS\" type=\"string\" size=\"20\"/><Column id=\"INCENTIVE_EMP_NO\" type=\"string\" size=\"60\"/><Column id=\"SALES_EMP_NO\" type=\"string\" size=\"60\"/><Column id=\"SALES_EMP_NAME\" type=\"string\" size=\"255\"/><Column id=\"SALES_EMP_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"SALES_DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"SALES_DEPT_NAME\" type=\"string\" size=\"100\"/><Column id=\"SALES_CO_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"PIPELINE_FLAG\" type=\"string\" size=\"1\"/><Column id=\"REMARKS\" type=\"string\" size=\"1073741823\"/><Column id=\"CONTRACT_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"BLACKLIST_FLAG\" type=\"string\" size=\"1\"/><Column id=\"BUSINESS_TYPE\" type=\"string\" size=\"20\"/><Column id=\"SAVE_TYPE\" type=\"string\" size=\"1\"/><Column id=\"CONTRACT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"LINK_CONFIRM_FLAG\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsContractProd", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CODE\" type=\"string\" size=\"15\"/><Column id=\"CONTRACT_NO\" type=\"string\" size=\"10\"/><Column id=\"CONTRACT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CRD_SEQ\" type=\"bigdecimal\" size=\"20\"/><Column id=\"PRODUCT_CODE\" type=\"string\" size=\"20\"/><Column id=\"PRODUCT_NAME\" type=\"string\" size=\"100\"/><Column id=\"ROYALTY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_PURCHASE_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"RELATED_COMPANY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RELATED_COMPANY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONTRACT_PRICE\" type=\"bigdecimal\" size=\"20\"/><Column id=\"QUANTITY\" type=\"STRING\" size=\"256\"/><Column id=\"CONTRACT_TYPE\" type=\"string\" size=\"20\"/><Column id=\"CONTRACT_MAIN_NAME\" type=\"string\" size=\"100\"/><Column id=\"BLACKLIST_FLAG\" type=\"string\" size=\"1\"/><Column id=\"CL_PS\" type=\"bigdecimal\" size=\"20\"/><Column id=\"CL_SI\" type=\"bigdecimal\" size=\"20\"/><Column id=\"P_UNRECV_PRICE\" type=\"bigdecimal\" size=\"40\"/><Column id=\"ETC_UNRECV_PRICE\" type=\"bigdecimal\" size=\"40\"/><Column id=\"SUM_UNRECV_PRICE\" type=\"bigdecimal\" size=\"40\"/><Column id=\"F_CHK_YEOSHIN\" type=\"int\" size=\"11\"/><Column id=\"PRODUCT_NAME_SHORT\" type=\"string\" size=\"100\"/><Column id=\"PRODUCT_VERSION\" type=\"string\" size=\"10\"/><Column id=\"INSERT_STATUS\" type=\"string\" size=\"255\"/><Column id=\"CONTRACT_SEQ\" type=\"INT\" size=\"11\"/><Column id=\"UNION_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsContractSi", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CODE\" type=\"string\" size=\"15\"/><Column id=\"CONTRACT_NO\" type=\"string\" size=\"10\"/><Column id=\"CONTRACT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CSD_SEQ\" type=\"bigdecimal\" size=\"20\"/><Column id=\"ROLE_CODE\" type=\"string\" size=\"20\"/><Column id=\"LEVEL_CODE\" type=\"string\" size=\"20\"/><Column id=\"UNIT_COST\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"START_DATE\" type=\"string\" size=\"8\"/><Column id=\"END_DATE\" type=\"string\" size=\"8\"/><Column id=\"MEN_MONTH\" type=\"float\" size=\"22\"/><Column id=\"CONTRACT_PRICE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"AREA_CODE\" type=\"string\" size=\"20\"/><Column id=\"REMARKS\" type=\"string\" size=\"1073741823\"/><Column id=\"CONTRACT_TYPE\" type=\"string\" size=\"20\"/><Column id=\"CONTRACT_MAIN_NAME\" type=\"string\" size=\"100\"/><Column id=\"BLACKLIST_FLAG\" type=\"string\" size=\"1\"/><Column id=\"CL_PS\" type=\"float\" size=\"22\"/><Column id=\"CL_SI\" type=\"float\" size=\"22\"/><Column id=\"P_UNRECV_PRICE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"ETC_UNRECV_PRICE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUM_UNRECV_PRICE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"F_CHK_YEOSHIN\" type=\"int\" size=\"11\"/><Column id=\"CONTRACT_SEQ\" type=\"INT\" size=\"11\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsContractCS", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CODE\" type=\"string\" size=\"15\"/><Column id=\"CONTRACT_NO\" type=\"string\" size=\"10\"/><Column id=\"CONTRACT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CSD_SEQ\" type=\"bigdecimal\" size=\"20\"/><Column id=\"ROLE_CODE\" type=\"string\" size=\"20\"/><Column id=\"LEVEL_CODE\" type=\"string\" size=\"20\"/><Column id=\"UNIT_COST\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"START_DATE\" type=\"string\" size=\"8\"/><Column id=\"END_DATE\" type=\"string\" size=\"8\"/><Column id=\"MEN_MONTH\" type=\"float\" size=\"22\"/><Column id=\"CONTRACT_PRICE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"AREA_CODE\" type=\"string\" size=\"20\"/><Column id=\"REMARKS\" type=\"string\" size=\"1073741823\"/><Column id=\"CONTRACT_TYPE\" type=\"string\" size=\"20\"/><Column id=\"CONTRACT_MAIN_NAME\" type=\"string\" size=\"100\"/><Column id=\"BLACKLIST_FLAG\" type=\"string\" size=\"1\"/><Column id=\"CL_PS\" type=\"float\" size=\"22\"/><Column id=\"CL_SI\" type=\"float\" size=\"22\"/><Column id=\"EXECUTION_TYPE\" type=\"string\" size=\"20\"/><Column id=\"TECH_SUPPORT_UNIT\" type=\"string\" size=\"20\"/><Column id=\"P_UNRECV_PRICE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"ETC_UNRECV_PRICE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SUM_UNRECV_PRICE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"F_CHK_YEOSHIN\" type=\"int\" size=\"11\"/><Column id=\"CONTRACT_SEQ\" type=\"INT\" size=\"11\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsContractGoods", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CODE\" type=\"string\" size=\"15\"/><Column id=\"CONTRACT_NO\" type=\"string\" size=\"10\"/><Column id=\"CONTRACT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CRD_SEQ\" type=\"bigdecimal\" size=\"20\"/><Column id=\"PRODUCT_CODE\" type=\"string\" size=\"20\"/><Column id=\"PRODUCT_NAME\" type=\"string\" size=\"100\"/><Column id=\"ROYALTY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"NO_PURCHASE_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"RELATED_COMPANY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RELATED_COMPANY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONTRACT_PRICE\" type=\"bigdecimal\" size=\"20\"/><Column id=\"CONTRACT_TYPE\" type=\"string\" size=\"20\"/><Column id=\"CONTRACT_MAIN_NAME\" type=\"string\" size=\"100\"/><Column id=\"BLACKLIST_FLAG\" type=\"string\" size=\"1\"/><Column id=\"CL_PS\" type=\"bigdecimal\" size=\"20\"/><Column id=\"CL_SI\" type=\"bigdecimal\" size=\"20\"/><Column id=\"P_UNRECV_PRICE\" type=\"bigdecimal\" size=\"20\"/><Column id=\"ETC_UNRECV_PRICE\" type=\"bigdecimal\" size=\"20\"/><Column id=\"SUM_UNRECV_PRICE\" type=\"bigdecimal\" size=\"20\"/><Column id=\"F_CHK_YEOSHIN\" type=\"int\" size=\"11\"/><Column id=\"INSERT_STATUS\" type=\"string\" size=\"255\"/><Column id=\"CONTRACT_SEQ\" type=\"INT\" size=\"11\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPurchaseList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CODE\" type=\"string\" size=\"15\"/><Column id=\"CONTRACT_NO_PURCHASE\" type=\"string\" size=\"10\"/><Column id=\"CONTRACT_NO\" type=\"string\" size=\"10\"/><Column id=\"CONTRACT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CONTRACT_TYPE\" type=\"string\" size=\"20\"/><Column id=\"CONTRACT_DATE\" type=\"string\" size=\"8\"/><Column id=\"PURCHASE_CONTRACT_STATUS\" type=\"string\" size=\"20\"/><Column id=\"PPD_SEQ\" type=\"bigdecimal\" size=\"20\"/><Column id=\"PRODUCT_CODE\" type=\"string\" size=\"20\"/><Column id=\"PRODUCT_NAME\" type=\"string\" size=\"100\"/><Column id=\"ROYALTY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"RELATED_PRODUCT_CODE\" type=\"string\" size=\"20\"/><Column id=\"RELATED_PRODUCT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CONTRACT_PRICE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"VAT_PRICE\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"CONTRACT_MAIN\" type=\"string\" size=\"20\"/><Column id=\"CONTRACT_MAIN_NAME\" type=\"string\" size=\"100\"/><Column id=\"COMMISSION_RATE\" type=\"float\" size=\"22\"/><Column id=\"UNIT_COST\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"QUANTITY\" type=\"int\" size=\"11\"/><Column id=\"CRD_SEQ\" type=\"BIGDECIMAL\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsScheduleList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CODE\" type=\"string\" size=\"15\"/><Column id=\"CONTRACT_NO\" type=\"string\" size=\"10\"/><Column id=\"TYPE_CODE\" type=\"string\" size=\"20\"/><Column id=\"ISSUE_DATE\" type=\"string\" size=\"8\"/><Column id=\"REPORT_FLAG\" type=\"string\" size=\"1\"/><Column id=\"IMPORTANCE\" type=\"int\" size=\"11\"/><Column id=\"OPEN_FLAG\" type=\"string\" size=\"1\"/><Column id=\"CONTENTS\" type=\"string\" size=\"1073741823\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAddressbookList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CODE\" type=\"string\" size=\"15\"/><Column id=\"CA_SEQ\" type=\"bigdecimal\" size=\"20\"/><Column id=\"COMPANY_CODE\" type=\"string\" size=\"20\"/><Column id=\"COMPANY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NAME\" type=\"string\" size=\"100\"/><Column id=\"DEPT_NAME\" type=\"string\" size=\"100\"/><Column id=\"GRADE_CODE\" type=\"string\" size=\"100\"/><Column id=\"ROLE_CODE\" type=\"string\" size=\"100\"/><Column id=\"H_PHONE_NO\" type=\"string\" size=\"30\"/><Column id=\"O_PHONE_NO\" type=\"string\" size=\"30\"/><Column id=\"HOLD_OFFICE\" type=\"string\" size=\"20\"/><Column id=\"EMAIL\" type=\"string\" size=\"200\"/><Column id=\"ETAX_FLAG\" type=\"string\" size=\"1\"/><Column id=\"ORDER_FLAG\" type=\"string\" size=\"1\"/><Column id=\"REMARKS\" type=\"string\" size=\"1073741823\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_Product", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCT_CODE\" type=\"string\" size=\"20\"/><Column id=\"PRODUCT_CODE_LEVEL\" type=\"int\" size=\"11\"/><Column id=\"P_PRODUCT_CODE\" type=\"string\" size=\"255\"/><Column id=\"PRODUCT_NAME\" type=\"string\" size=\"100\"/><Column id=\"PRODUCT_NAME_SHORT\" type=\"string\" size=\"100\"/><Column id=\"MAIN_PRODUCT_FLAG\" type=\"string\" size=\"1\"/><Column id=\"UNIT_COST\" type=\"float\" size=\"22\"/><Column id=\"REMARKS\" type=\"string\" size=\"1073741823\"/><Column id=\"DELETE_FLAG\" type=\"string\" size=\"1\"/><Column id=\"ORD\" type=\"string\" size=\"10\"/><Column id=\"RELATED_COMPANY_CODE\" type=\"string\" size=\"20\"/><Column id=\"RELATED_COMPANY_NAME\" type=\"string\" size=\"100\"/><Column id=\"INSERT_DATE\" type=\"string\" size=\"8\"/><Column id=\"INSERT_EMP_NO\" type=\"string\" size=\"60\"/><Column id=\"INSERT_EMP_NM\" type=\"string\" size=\"255\"/><Column id=\"INSERT_DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"INSERT_DEPT_NM\" type=\"string\" size=\"100\"/><Column id=\"INSERT_MODEL\" type=\"string\" size=\"100\"/><Column id=\"UPDATE_DATE\" type=\"datetime\" size=\"23\"/><Column id=\"UPDATE_EMP_NO\" type=\"string\" size=\"60\"/><Column id=\"UPDATE_DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"UPDATE_DEPT_NM\" type=\"string\" size=\"100\"/><Column id=\"UPDATE_MODEL\" type=\"string\" size=\"100\"/><Column id=\"PTYPE\" type=\"string\" size=\"1\"/><Column id=\"SELECT_FLAG\" type=\"string\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_MM", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ParamLic", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_VERSION\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"PLATFORM_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"FUNCTION_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"ISDEV_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_RequestStaff", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_ExecutionType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"30\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"255\"/><Column id=\"VAL1\" type=\"STRING\" size=\"100\"/><Column id=\"VAL2\" type=\"STRING\" size=\"100\"/><Column id=\"VAL3\" type=\"STRING\" size=\"100\"/><Column id=\"VAL4\" type=\"STRING\" size=\"100\"/><Column id=\"REMARK\" type=\"STRING\" size=\"1073741823\"/><Column id=\"ORD\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_TechSupportUnit", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"30\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"255\"/><Column id=\"VAL1\" type=\"STRING\" size=\"100\"/><Column id=\"VAL2\" type=\"STRING\" size=\"100\"/><Column id=\"VAL3\" type=\"STRING\" size=\"100\"/><Column id=\"VAL4\" type=\"STRING\" size=\"100\"/><Column id=\"REMARK\" type=\"STRING\" size=\"1073741823\"/><Column id=\"ORD\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_Role2", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"string\" size=\"30\"/><Column id=\"CAPTION\" type=\"string\" size=\"255\"/><Column id=\"VAL1\" type=\"string\" size=\"100\"/><Column id=\"VAL2\" type=\"string\" size=\"100\"/><Column id=\"VAL3\" type=\"string\" size=\"100\"/><Column id=\"VAL4\" type=\"string\" size=\"100\"/><Column id=\"REMARK\" type=\"string\" size=\"1073741823\"/><Column id=\"ORD\" type=\"string\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsContractSeq", this);
            obj._setContents("<ColumnInfo><Column id=\"CONTRACT_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFileCnt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ContractMainInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CODE\" type=\"string\" size=\"20\"/><Column id=\"COMPANY_NAME\" type=\"string\" size=\"100\"/><Column id=\"COMPANY_STATE\" type=\"string\" size=\"20\"/><Column id=\"COMPANY_STATE_NAME\" type=\"string\" size=\"255\"/><Column id=\"CL_APPROVAL_DATE\" type=\"string\" size=\"8\"/><Column id=\"CL_PS\" type=\"bigdecimal\" size=\"20\"/><Column id=\"CL_ASSET\" type=\"bigdecimal\" size=\"20\"/><Column id=\"CL_CAPITAL\" type=\"bigdecimal\" size=\"20\"/><Column id=\"CL_ANNUAL_SALES\" type=\"bigdecimal\" size=\"20\"/><Column id=\"REST\" type=\"bigdecimal\" size=\"20\"/><Column id=\"CL_EXCEPTION_CODE\" type=\"string\" size=\"20\"/><Column id=\"CL_EXCEPTION_NAME\" type=\"string\" size=\"255\"/><Column id=\"CLH_SEQ\" type=\"bigdecimal\" size=\"20\"/><Column id=\"YEAR\" type=\"string\" size=\"4\"/><Column id=\"EVALUATION_DATE\" type=\"string\" size=\"8\"/><Column id=\"MAX_YEAR\" type=\"string\" size=\"4\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CostsheetInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"CC_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Kind", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION_JAP\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION_ENG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">01</Col><Col id=\"CAPTION\">신규 프로젝트</Col><Col id=\"CAPTION_JAP\">新規プロジェクト</Col></Row><Row><Col id=\"CODE\">02</Col><Col id=\"CAPTION\">추가 계약</Col><Col id=\"CAPTION_JAP\">追加契約</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_RoyaltyType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"string\" size=\"30\"/><Column id=\"CAPTION\" type=\"string\" size=\"255\"/><Column id=\"VAL1\" type=\"string\" size=\"100\"/><Column id=\"VAL2\" type=\"string\" size=\"100\"/><Column id=\"VAL3\" type=\"string\" size=\"100\"/><Column id=\"VAL4\" type=\"string\" size=\"100\"/><Column id=\"REMARK\" type=\"string\" size=\"1073741823\"/><Column id=\"ORD\" type=\"string\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTmpProdInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MAIN_PRODUCT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ROW_IDX\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEstimateContract", this);
            obj._setContents("<ColumnInfo><Column id=\"CONTRACT_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEstimateCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_checkProduct", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_Sales_List","558","4",null,"157","0",null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_detailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Presales","0","4","554",null,null,"188",null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_binddataset("dsList");
            obj.getSetter("useinputpanel").set("false");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"200\"/><Column size=\"60\"/><Column size=\"85\"/><Column size=\"85\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"24\"/><Row size=\"25\" band=\"summ\"/></Rows><Band id=\"head\"><Cell displaytype=\"text\" edittype=\"text\" wordWrap=\"char\" text=\"고객사\" TL_SEQ=\"32\"/><Cell col=\"1\" wordWrap=\"char\" text=\"계약명\" TL_SEQ=\"33\"/><Cell col=\"2\" text=\"제품\" TL_SEQ=\"62\"/><Cell col=\"3\" text=\"예상매출\" TL_SEQ=\"63\"/><Cell col=\"4\" text=\"계약예정일\" TL_SEQ=\"64\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" text=\"bind:CLIENT_NAME\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:CONTRACT_NAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:PRODUCT_NAME_SHORT\"/><Cell col=\"3\" textAlign=\"right\" text=\"bind:CONTRACT_AMT\" displaytype=\"mask\" maskedittype=\"expr:comp.parent.gfn_getPriceMaskEdtType()\" maskeditformat=\"expr:comp.parent.gfn_getPriceMaskformat(CONTRACT_AMT)\"/><Cell col=\"4\" text=\"bind:CONTRACT_DATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"합계\" TL_SEQ=\"437\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Tab("tab_Progess","0","grd_Presales:4","554",null,null,"0",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_tabindex("0");
            obj.getSetter("scrollbars").set("autoboth");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tpg_Progess",this.tab_Progess);
            obj.set_text("진행사항");
            obj.getSetter("TL_SEQ").set("65");
            this.tab_Progess.addChild(obj.name, obj);

            obj = new Static("Static00","89","4",null,null,"0","0",null,null,null,null,this.tab_Progess.tpg_Progess.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_detailLbl01");
            this.tab_Progess.tpg_Progess.addChild(obj.name, obj);

            obj = new Grid("grd_Date","0","4","95",null,null,"0",null,null,null,null,this.tab_Progess.tpg_Progess.form);
            obj.set_taborder("6");
            obj.set_autofittype("col");
            obj.set_binddataset("dsScheduleList");
            obj.set_readonly("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"일자\" TL_SEQ=\"67\"/></Band><Band id=\"body\"><Cell text=\"bind:ISSUE_DATE\" edittype=\"none\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.tab_Progess.tpg_Progess.addChild(obj.name, obj);

            obj = new Static("stc_TypeCode","91","5","65","28",null,null,null,null,null,null,this.tab_Progess.tpg_Progess.form);
            obj.set_taborder("7");
            obj.set_text("구분");
            obj.set_cssclass("sta_WF_detailLbl01");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("68");
            this.tab_Progess.tpg_Progess.addChild(obj.name, obj);

            obj = new Static("stc_IssueDate","320","5","70","28",null,null,null,null,null,null,this.tab_Progess.tpg_Progess.form);
            obj.set_taborder("8");
            obj.set_text("일자");
            obj.set_cssclass("sta_WF_detailLbl01");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("67");
            this.tab_Progess.tpg_Progess.addChild(obj.name, obj);

            obj = new Static("stc_ProgressContent","95","59","65",null,null,"0",null,null,null,null,this.tab_Progess.tpg_Progess.form);
            obj.set_taborder("9");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_detailLbl01");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("69");
            this.tab_Progess.tpg_Progess.addChild(obj.name, obj);

            obj = new Combo("cmb_TypeCode","162","8","157","22",null,null,null,null,null,null,this.tab_Progess.tpg_Progess.form);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_cmm_Type");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_text("");
            this.tab_Progess.tpg_Progess.addChild(obj.name, obj);

            obj = new Calendar("cal_IssueDate","392","8","158","22",null,null,null,null,null,null,this.tab_Progess.tpg_Progess.form);
            obj.set_taborder("1");
            obj.set_autoselect("true");
            this.tab_Progess.tpg_Progess.addChild(obj.name, obj);

            obj = new TextArea("txt_ProgressContent","162","62",null,null,"4","0",null,null,null,null,this.tab_Progess.tpg_Progess.form);
            obj.set_taborder("5");
            this.tab_Progess.tpg_Progess.addChild(obj.name, obj);

            obj = new Combo("cmb_Importance00","162","35","157","22",null,null,null,null,null,null,this.tab_Progess.tpg_Progess.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_cmm_Importance");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_text("");
            this.tab_Progess.tpg_Progess.addChild(obj.name, obj);

            obj = new CheckBox("chb_MakePublic01","341","35","54","22",null,null,null,null,null,null,this.tab_Progess.tpg_Progess.form);
            obj.set_taborder("3");
            obj.set_text("보고");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.getSetter("TL_SEQ").set("70");
            this.tab_Progess.tpg_Progess.addChild(obj.name, obj);

            obj = new CheckBox("chb_MakePublic02","392","35","52","22",null,null,null,null,null,null,this.tab_Progess.tpg_Progess.form);
            obj.set_taborder("4");
            obj.set_text("공개");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.getSetter("TL_SEQ").set("71");
            this.tab_Progess.tpg_Progess.addChild(obj.name, obj);

            obj = new Static("stc_Importance00","95","32","65","28",null,null,null,null,null,null,this.tab_Progess.tpg_Progess.form);
            obj.set_taborder("10");
            obj.set_text("중요도");
            obj.set_cssclass("sta_WF_detailLbl01");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("72");
            this.tab_Progess.tpg_Progess.addChild(obj.name, obj);

            obj = new Tabpage("tpg_PersonInCharge",this.tab_Progess);
            obj.set_text("담당자");
            obj.getSetter("TL_SEQ").set("66");
            this.tab_Progess.addChild(obj.name, obj);

            obj = new Grid("grd_PersonInCharge","0","4",null,null,"0","0",null,null,null,null,this.tab_Progess.tpg_PersonInCharge.form);
            obj.set_taborder("0");
            obj.getSetter("scrollbars").set("alwaysvert");
            obj.set_autoenter("select");
            obj.getSetter("useinputpanel").set("false");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_visible("true");
            obj.set_binddataset("dsAddressbookList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"100\"/><Column size=\"75\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"회사\" TL_SEQ=\"73\"/><Cell col=\"2\" text=\"부서\" TL_SEQ=\"74\"/><Cell col=\"3\" text=\"담당자\" TL_SEQ=\"66\"/><Cell col=\"4\" text=\"직급\" TL_SEQ=\"26\"/><Cell col=\"5\" text=\"역할\" TL_SEQ=\"75\"/><Cell col=\"6\" colspan=\"2\" text=\"핸드폰\" TL_SEQ=\"76\"/><Cell col=\"8\" text=\"등록일\" TL_SEQ=\"77\"/><Cell row=\"1\" text=\"현황\" TL_SEQ=\"78\"/><Cell row=\"1\" col=\"1\" text=\"유선\" TL_SEQ=\"79\"/><Cell row=\"1\" col=\"2\" colspan=\"3\" text=\"이메일\" TL_SEQ=\"80\"/><Cell row=\"1\" col=\"5\" colspan=\"3\" text=\"비고\" TL_SEQ=\"45\"/><Cell row=\"1\" col=\"8\" text=\"등록자\" TL_SEQ=\"81\"/></Band><Band id=\"body\"><Cell colspan=\"2\" textAlign=\"left\" text=\"bind:COMPANY_NAME\"/><Cell col=\"2\" text=\"bind:DEPT_NAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:EMP_NAME\"/><Cell col=\"4\" text=\"bind:GRADE_CODE\" displaytype=\"combotext\" combodataset=\"ds_cmm_CaGrade\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/><Cell col=\"5\" text=\"bind:ROLE_CODE\" combodataset=\"ds_cmm_CaRole\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" displaytype=\"combotext\"/><Cell col=\"6\" colspan=\"2\" text=\"bind:H_PHONE_NO\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:INSERT_DATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell row=\"1\" text=\"bind:HOLD_OFFICE\" displaytype=\"combotext\" combodataset=\"ds_cmm_HoldOffice\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/><Cell row=\"1\" col=\"1\" text=\"bind:O_PHONE_NO\" textAlign=\"left\"/><Cell row=\"1\" col=\"2\" colspan=\"3\" text=\"bind:EMAIL\" textAlign=\"left\"/><Cell row=\"1\" col=\"5\" colspan=\"3\" text=\"bind:REMARKS\" textAlign=\"left\"/><Cell row=\"1\" col=\"8\" text=\"bind:INSERT_EMP_NAME\"/></Band></Format></Formats>");
            this.tab_Progess.tpg_PersonInCharge.addChild(obj.name, obj);

            obj = new Static("stc_Remark","569","116","74","22",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("비고");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_detailLbl01");
            obj.getSetter("TL_SEQ").set("45");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_Remark","stc_Remark:2","102","463","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Div("div_ContractMain","645","71","161","22",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_url("sales::comm/COM_Search.xfdl");
            obj.getSetter("kind").set("COMPANY");
            obj.getSetter("param").set("");
            obj.getSetter("binddataset").set("dsList");
            obj.getSetter("codecolumn").set("CONTRACT_MAIN");
            obj.getSetter("datacolumn").set("CONTRACT_MAIN_NAME");
            obj.getSetter("user_onchanged").set("Com_Search_onChanged");
            obj.getSetter("compReg").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ContractName","div_ContractMain:0","71","62","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("계약명");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_detailLbl01");
            obj.getSetter("TL_SEQ").set("33");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ProductCode","569","42","74","22",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("영업제품");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_detailLbl01");
            obj.getSetter("TL_SEQ").set("83");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_SalesProduct","stc_ProductCode:2","42","148","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_cmm_Product");
            obj.set_codecolumn("PRODUCT_CODE");
            obj.set_datacolumn("PRODUCT_NAME");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_SalesStatus","cmb_SalesProduct:13","42","54","22",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("영업상태");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_detailLbl01");
            obj.getSetter("TL_SEQ").set("84");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_SalesStatus","stc_SalesStatus:0","42","95","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_cmm_SalesStatus");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_RelatedProject","cmb_SalesStatus:19","42","82","22",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("연결프로젝트");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_detailLbl01");
            obj.getSetter("TL_SEQ").set("82");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ContractMain","569","71","74","22",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("계약처");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_detailLbl01");
            obj.getSetter("TL_SEQ").set("34");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ClientCode","569","12","74","22",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("고객사");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_detailLbl01");
            obj.getSetter("TL_SEQ").set("32");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ContractName","stc_ContractName:0","71","232","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ContractDate","edt_ContractName:8","71","70","22",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("계약예정일");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_detailLbl01");
            obj.getSetter("TL_SEQ").set("64");
            this.addChild(obj.name, obj);

            obj = new Static("stc_SalesEmpNo","txt_Remark:0","132","70","22",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("담당영업");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_detailLbl01");
            obj.getSetter("TL_SEQ").set("37");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_ContractDate","stc_ContractDate:0","71","99","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd");
            obj.set_autoselect("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ContractNo","1434","8","97","22",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_SalesEmpNo","stc_SalesEmpNo:0","132","95","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_cmm_SalesEmp");
            obj.set_codecolumn("EMP_NO");
            obj.set_datacolumn("EMP_NAME");
            obj.set_displayrowcount("15");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_ClientName","stc_ClientCode:2","12","161","22",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_url("sales::comm/COM_Search.xfdl");
            obj.getSetter("kind").set("CLIENT");
            obj.getSetter("param").set("");
            obj.getSetter("binddataset").set("dsList");
            obj.getSetter("codecolumn").set("CLIENT_CODE");
            obj.getSetter("datacolumn").set("CLIENT_NAME");
            obj.getSetter("compReg").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ProjectName","div_ClientName:12","13","74","22",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("프로젝트명");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_detailLbl01");
            obj.getSetter("TL_SEQ").set("114");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ProjectName","stc_ProjectName:0","13","212","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ProjectCode","edt_ProjectName:3","13","76","22",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            obj.set_value("201909016");
            obj.set_text("201909016");
            this.addChild(obj.name, obj);

            obj = new CheckBox("ckb_PipeLineFlag","edt_ProjectCode:6","12","75","22",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("PIPE 라인");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("85");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Add","508",null,"16","16",null,"157",null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("btn_POP_Add");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Del","532",null,"16","16",null,"157",null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("btn_POP_Del");
            this.addChild(obj.name, obj);

            obj = new Div("divDet","558","165",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("25");
            this.addChild(obj.name, obj);

            obj = new Div("divDet1","0","0","385",null,null,"0",null,null,null,null,this.divDet.form);
            obj.set_taborder("0");
            this.divDet.addChild(obj.name, obj);

            obj = new Div("divProd","0","0",null,null,"0","47.7%",null,null,null,null,this.divDet.form.divDet1.form);
            obj.set_taborder("0");
            this.divDet.form.divDet1.addChild(obj.name, obj);

            obj = new Grid("grd_SalesProd","0","32",null,null,"0","0",null,null,null,null,this.divDet.form.divDet1.form.divProd.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsContractProd");
            obj.getSetter("scrollbars").set("alwaysvert");
            obj.set_autoenter("select");
            obj.getSetter("useinputpanel").set("false");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_visible("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"240\"/><Column size=\"143\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"항목(제품/상품)\" displaytype=\"text\" edittype=\"text\" TL_SEQ=\"86\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" text=\"예상매출액\" TL_SEQ=\"87\"/></Band><Band id=\"body\"><Cell editautoselect=\"true\" text=\"bind:PRODUCT_NAME\" expandshow=\"show\" textAlign=\"left\" expandsize=\"20\" expandimage=\"URL(&quot;theme://images/btn_WF_Sch_P.png&quot;)\"/><Cell col=\"1\" edittype=\"mask\" editautoselect=\"true\" editdisplay=\"edit\" text=\"bind:CONTRACT_PRICE\" textAlign=\"right\"/></Band></Format><Format id=\"PRODUCT_JAP\"><Columns><Column size=\"240\"/><Column size=\"60\"/><Column size=\"143\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"항목(제품/상품)\" displaytype=\"text\" edittype=\"text\" TL_SEQ=\"86\"/><Cell col=\"1\" text=\"수량\" TL_SEQ=\"103\"/><Cell col=\"2\" displaytype=\"text\" edittype=\"text\" text=\"예상매출액\" TL_SEQ=\"87\"/></Band><Band id=\"body\"><Cell editautoselect=\"true\" text=\"bind:PRODUCT_NAME\" expandshow=\"show\" textAlign=\"left\" expandsize=\"20\" expandimage=\"URL(&quot;theme://images/btn_WF_Sch_P.png&quot;)\"/><Cell col=\"1\" text=\"bind:QUANTITY\" edittype=\"text\"/><Cell col=\"2\" edittype=\"mask\" editautoselect=\"true\" editdisplay=\"edit\" text=\"bind:CONTRACT_PRICE\" textAlign=\"right\" displaytype=\"expr:comp.parent.parent.parent.parent.parent.parent.parent.gfn_getPriceDisplayType(&apos;normal&apos;)\" maskeditformat=\"expr:comp.parent.parent.parent.parent.parent.parent.parent.gfn_getPriceMaskformat(CONTRACT_PRICE)\" maskedittype=\"expr:comp.parent.parent.parent.parent.parent.parent.parent.gfn_getPriceMaskEdtType()\"/></Band></Format></Formats>");
            this.divDet.form.divDet1.form.divProd.addChild(obj.name, obj);

            obj = new Static("stc_GbSalesProd1","0","0",null,"32","0",null,null,null,null,null,this.divDet.form.divDet1.form.divProd.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_GroupBg");
            this.divDet.form.divDet1.form.divProd.addChild(obj.name, obj);

            obj = new Static("stc_SalesProd1","10","7","134","16",null,null,null,null,null,null,this.divDet.form.divDet1.form.divProd.form);
            obj.set_taborder("1");
            obj.set_text("제품매출 상세내역");
            obj.set_visible("true");
            obj.set_cssclass("sta_POP_GroupTit");
            obj.getSetter("TL_SEQ").set("88");
            this.divDet.form.divDet1.form.divProd.addChild(obj.name, obj);

            obj = new Button("btn_ProdDel",null,"7","16","16","8",null,null,null,null,null,this.divDet.form.divDet1.form.divProd.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_POP_Del");
            obj.set_text("");
            this.divDet.form.divDet1.form.divProd.addChild(obj.name, obj);

            obj = new Button("btn_ProdAdd",null,"7","16","16","32",null,null,null,null,null,this.divDet.form.divDet1.form.divProd.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_POP_Add");
            this.divDet.form.divDet1.form.divProd.addChild(obj.name, obj);

            obj = new Button("btn_ContractUnion",null,"5","70","22","btn_ProdAdd:9",null,null,null,null,null,this.divDet.form.divDet1.form.divProd.form);
            obj.set_taborder("5");
            obj.set_text("계약연결");
            obj.getSetter("TL_SEQ").set("89");
            this.divDet.form.divDet1.form.divProd.addChild(obj.name, obj);

            obj = new Div("divGoods","0","divProd:4",null,null,"0","0",null,null,null,null,this.divDet.form.divDet1.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.divDet.form.divDet1.addChild(obj.name, obj);

            obj = new Grid("grd_Salesgoods","0","32",null,null,"0","0",null,null,null,null,this.divDet.form.divDet1.form.divGoods.form);
            obj.set_taborder("4");
            obj.set_binddataset("dsContractGoods");
            obj.getSetter("scrollbars").set("alwaysvert");
            obj.set_autoenter("select");
            obj.getSetter("useinputpanel").set("false");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_visible("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"240\"/><Column size=\"143\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"항목(제품/상품)\" displaytype=\"text\" edittype=\"text\" TL_SEQ=\"86\"/><Cell col=\"1\" displaytype=\"text\" edittype=\"text\" text=\"예상매출액\" TL_SEQ=\"87\"/></Band><Band id=\"body\"><Cell edittype=\"none\" editautoselect=\"true\" text=\"bind:PRODUCT_NAME\" expandshow=\"show\" textAlign=\"left\" expandsize=\"20\" expandimage=\"URL(&quot;theme://images/btn_WF_Sch_P.png&quot;)\"/><Cell col=\"1\" edittype=\"normal\" editautoselect=\"true\" editdisplay=\"edit\" text=\"bind:CONTRACT_PRICE\" textAlign=\"right\"/></Band></Format><Format id=\"format00\"><Columns><Column size=\"99\"/><Column size=\"99\"/><Column size=\"99\"/><Column size=\"99\"/><Column size=\"99\"/><Column size=\"99\"/><Column size=\"99\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"역할\" TL_SEQ=\"75\"/><Cell col=\"1\" text=\"등급\" TL_SEQ=\"92\"/><Cell col=\"2\" text=\"예상단가\" TL_SEQ=\"93\"/><Cell col=\"3\" text=\"MM\"/><Cell col=\"4\" text=\"금액\" TL_SEQ=\"97\"/><Cell col=\"5\" text=\"근무지역\" TL_SEQ=\"98\"/><Cell col=\"6\" text=\"비고\" TL_SEQ=\"45\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\"/><Cell col=\"6\"/></Band></Format><Format id=\"format01\"><Columns><Column size=\"138\"/><Column size=\"138\"/><Column size=\"138\"/><Column size=\"138\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"항목\" TL_SEQ=\"105\"/><Cell col=\"1\" text=\"예상매입액\" TL_SEQ=\"107\"/><Cell col=\"2\" text=\"매입처\" TL_SEQ=\"108\"/><Cell col=\"3\" text=\"판매수수료율\" TL_SEQ=\"1911\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/></Band></Format></Formats>");
            this.divDet.form.divDet1.form.divGoods.addChild(obj.name, obj);

            obj = new Static("stc_GbSalesProd2","0","0",null,"32","0",null,null,null,null,null,this.divDet.form.divDet1.form.divGoods.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_POP_GroupBg");
            this.divDet.form.divDet1.form.divGoods.addChild(obj.name, obj);

            obj = new Static("stc_SalesProd2","10","7","118","16",null,null,null,null,null,null,this.divDet.form.divDet1.form.divGoods.form);
            obj.set_taborder("3");
            obj.set_text("상품매출 상세내역");
            obj.set_visible("true");
            obj.set_cssclass("sta_POP_GroupTit");
            obj.getSetter("TL_SEQ").set("90");
            this.divDet.form.divDet1.form.divGoods.addChild(obj.name, obj);

            obj = new Button("btn_GoodsDel",null,"7","16","16","8",null,null,null,null,null,this.divDet.form.divDet1.form.divGoods.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_POP_Del");
            this.divDet.form.divDet1.form.divGoods.addChild(obj.name, obj);

            obj = new Button("btn_GoodsAdd",null,"7","16","16","32",null,null,null,null,null,this.divDet.form.divDet1.form.divGoods.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_POP_Add");
            this.divDet.form.divDet1.form.divGoods.addChild(obj.name, obj);

            obj = new Div("divDet2","divDet1:4","0",null,null,"0","0",null,null,null,null,this.divDet.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.divDet.addChild(obj.name, obj);

            obj = new Div("divSi","0","0",null,null,"0","66.78%",null,null,null,null,this.divDet.form.divDet2.form);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.divDet.form.divDet2.addChild(obj.name, obj);

            obj = new Static("stc_GbSalesSi","0","0",null,"32","0",null,null,null,null,null,this.divDet.form.divDet2.form.divSi.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_GroupBg");
            obj.set_text("");
            this.divDet.form.divDet2.form.divSi.addChild(obj.name, obj);

            obj = new Static("stc_SalesSi","8","7","95","16",null,null,null,null,null,null,this.divDet.form.divDet2.form.divSi.form);
            obj.set_taborder("1");
            obj.set_text("용역 상세내역");
            obj.set_visible("true");
            obj.set_cssclass("sta_POP_GroupTit");
            obj.getSetter("TL_SEQ").set("91");
            this.divDet.form.divDet2.form.divSi.addChild(obj.name, obj);

            obj = new Grid("grd_SalesSi","0","32",null,null,"0","0",null,null,null,null,this.divDet.form.divDet2.form.divSi.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsContractSi");
            obj.getSetter("scrollbars").set("alwaysvert");
            obj.set_autoenter("select");
            obj.getSetter("useinputpanel").set("false");
            obj.set_cellsizingtype("col");
            obj.set_visible("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/><Column size=\"75\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"40\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"130\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"역할\" TL_SEQ=\"75\"/><Cell col=\"1\" text=\"등급\" TL_SEQ=\"92\"/><Cell col=\"2\" text=\"예상단가\" TL_SEQ=\"93\"/><Cell col=\"3\" text=\"시작일자\" TL_SEQ=\"94\"/><Cell col=\"4\" text=\"종료일자\" TL_SEQ=\"95\"/><Cell col=\"5\" text=\"MM\"/><Cell col=\"6\" text=\"금액\" TL_SEQ=\"97\"/><Cell col=\"7\" text=\"근무지역\" TL_SEQ=\"98\"/><Cell col=\"8\" text=\"비고\" TL_SEQ=\"45\"/></Band><Band id=\"body\"><Cell text=\"bind:ROLE_CODE\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_cmm_Role\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/><Cell col=\"1\" text=\"bind:LEVEL_CODE\" combodataset=\"ds_cmm_Level\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"2\" text=\"bind:UNIT_COST\" textAlign=\"right\" displaytype=\"number\" edittype=\"mask\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"date\" text=\"bind:START_DATE\" calendardateformat=\"yyyy-MM-dd\" calendarautoselect=\"true\"/><Cell col=\"4\" text=\"bind:END_DATE\" displaytype=\"date\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\" calendarautoselect=\"true\"/><Cell col=\"5\" text=\"bind:MEN_MONTH\" displaytype=\"mask\" textAlign=\"right\" edittype=\"mask\" maskeditformat=\"90.90\"/><Cell col=\"6\" text=\"bind:CONTRACT_PRICE\" textAlign=\"right\" displaytype=\"expr:comp.parent.parent.parent.parent.parent.parent.parent.gfn_getPriceDisplayType(&apos;number&apos;)\" edittype=\"mask\" maskeditformat=\"expr:comp.parent.parent.parent.parent.parent.parent.parent.gfn_getPriceMaskformat(CONTRACT_PRICE)\" maskedittype=\"expr:comp.parent.parent.parent.parent.parent.parent.parent.gfn_getPriceMaskEdtType()\"/><Cell col=\"7\" text=\"bind:AREA_CODE\" textAlign=\"left\" combodataset=\"ds_cmm_Area\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"8\" text=\"bind:REMARKS\" textAlign=\"left\" edittype=\"normal\"/></Band></Format></Formats>");
            this.divDet.form.divDet2.form.divSi.addChild(obj.name, obj);

            obj = new Button("btn_SiAdd",null,"7","16","16","32",null,null,null,null,null,this.divDet.form.divDet2.form.divSi.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_POP_Add");
            this.divDet.form.divDet2.form.divSi.addChild(obj.name, obj);

            obj = new Button("btn_SiDel",null,"7","16","16","8",null,null,null,null,null,this.divDet.form.divDet2.form.divSi.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_POP_Del");
            this.divDet.form.divDet2.form.divSi.addChild(obj.name, obj);

            obj = new Button("btn_Labor_Require",null,"5","70","22","btn_SiAdd:8",null,null,null,null,null,this.divDet.form.divDet2.form.divSi.form);
            obj.set_taborder("5");
            obj.set_text("인력요청");
            obj.set_enable("true");
            obj.getSetter("TL_SEQ").set("99");
            this.divDet.form.divDet2.form.divSi.addChild(obj.name, obj);

            obj = new Div("divCS","0","divSi:-1",null,null,"0","33.22%",null,null,null,null,this.divDet.form.divDet2.form);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.divDet.form.divDet2.addChild(obj.name, obj);

            obj = new Static("stc_GbSalesCS","0","0",null,"32","0",null,null,null,null,null,this.divDet.form.divDet2.form.divCS.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_GroupBg");
            obj.set_text("");
            this.divDet.form.divDet2.form.divCS.addChild(obj.name, obj);

            obj = new Static("stc_SalesCS","8","7","155","16",null,null,null,null,null,null,this.divDet.form.divDet2.form.divCS.form);
            obj.set_taborder("1");
            obj.set_text("기술서비스 상세내역");
            obj.set_visible("true");
            obj.set_cssclass("sta_POP_GroupTit");
            obj.getSetter("TL_SEQ").set("2307");
            this.divDet.form.divDet2.form.divCS.addChild(obj.name, obj);

            obj = new Grid("grd_SalesCS","0","32",null,null,"0","0",null,null,null,null,this.divDet.form.divDet2.form.divCS.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsContractCS");
            obj.getSetter("scrollbars").set("alwaysvert");
            obj.set_autoenter("select");
            obj.getSetter("useinputpanel").set("false");
            obj.set_cellsizingtype("col");
            obj.set_visible("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"75\"/><Column size=\"75\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"40\"/><Column size=\"70\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"130\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"역할\" TL_SEQ=\"75\"/><Cell col=\"1\" text=\"등급\" TL_SEQ=\"92\"/><Cell col=\"2\" text=\"수행방식\" TL_SEQ=\"101\"/><Cell col=\"3\" text=\"시작일자\" TL_SEQ=\"94\"/><Cell col=\"4\" text=\"종료일자\" TL_SEQ=\"95\"/><Cell col=\"5\" text=\"단가\" TL_SEQ=\"102\"/><Cell col=\"6\" text=\"수량\" TL_SEQ=\"103\"/><Cell col=\"7\" text=\"단위\" TL_SEQ=\"104\"/><Cell col=\"8\" text=\"금액\" TL_SEQ=\"97\"/><Cell col=\"9\" text=\"근무지역\" TL_SEQ=\"98\"/><Cell col=\"10\" text=\"비고\" TL_SEQ=\"45\"/></Band><Band id=\"body\"><Cell text=\"bind:ROLE_CODE\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_cmm_Role2\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/><Cell col=\"1\" text=\"bind:LEVEL_CODE\" combodataset=\"ds_cmm_Level\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"2\" text=\"bind:EXECUTION_TYPE\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_cmm_ExecutionType\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/><Cell col=\"3\" displaytype=\"date\" edittype=\"date\" text=\"bind:START_DATE\" calendardateformat=\"yyyy-MM-dd\" comboautoselect=\"true\" calendarautoselect=\"true\"/><Cell col=\"4\" text=\"bind:END_DATE\" displaytype=\"date\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\" comboautoselect=\"true\" calendarautoselect=\"true\"/><Cell col=\"5\" text=\"bind:UNIT_COST\" edittype=\"mask\" displaytype=\"expr:comp.parent.parent.parent.parent.parent.parent.parent.gfn_getPriceDisplayType(&apos;number&apos;)\" textAlign=\"right\" maskeditformat=\"expr:comp.parent.parent.parent.parent.parent.parent.parent.gfn_getPriceMaskformat(UNIT_COST)\" maskedittype=\"expr:comp.parent.parent.parent.parent.parent.parent.parent.gfn_getPriceMaskEdtType()\"/><Cell col=\"6\" text=\"bind:MEN_MONTH\" displaytype=\"mask\" textAlign=\"right\" edittype=\"mask\" maskeditformat=\"90.90\"/><Cell col=\"7\" text=\"bind:TECH_SUPPORT_UNIT\" displaytype=\"combotext\" edittype=\"combo\" calendarautoselect=\"true\" combodataset=\"ds_cmm_TechSupportUnit\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/><Cell col=\"8\" text=\"bind:CONTRACT_PRICE\" textAlign=\"right\" displaytype=\"expr:comp.parent.parent.parent.parent.parent.parent.parent.gfn_getPriceDisplayType(&apos;number&apos;)\" edittype=\"mask\" maskeditformat=\"expr:comp.parent.parent.parent.parent.parent.parent.parent.gfn_getPriceMaskformat(CONTRACT_PRICE)\" maskedittype=\"expr:comp.parent.parent.parent.parent.parent.parent.parent.gfn_getPriceMaskEdtType()\"/><Cell col=\"9\" text=\"bind:AREA_CODE\" textAlign=\"left\" combodataset=\"ds_cmm_Area\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" displaytype=\"combotext\" edittype=\"combo\"/><Cell col=\"10\" text=\"bind:REMARKS\" textAlign=\"left\" edittype=\"normal\"/></Band></Format></Formats>");
            this.divDet.form.divDet2.form.divCS.addChild(obj.name, obj);

            obj = new Button("btn_CSAdd",null,"7","16","16","32",null,null,null,null,null,this.divDet.form.divDet2.form.divCS.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_POP_Add");
            this.divDet.form.divDet2.form.divCS.addChild(obj.name, obj);

            obj = new Button("btn_CSDel",null,"7","16","16","8",null,null,null,null,null,this.divDet.form.divDet2.form.divCS.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_POP_Del");
            this.divDet.form.divDet2.form.divCS.addChild(obj.name, obj);

            obj = new Button("btn_Labor_Require2",null,"5","70","22","btn_CSAdd:8",null,null,null,null,null,this.divDet.form.divDet2.form.divCS.form);
            obj.set_taborder("5");
            obj.set_text("인력요청");
            obj.set_enable("true");
            obj.getSetter("TL_SEQ").set("99");
            this.divDet.form.divDet2.form.divCS.addChild(obj.name, obj);

            obj = new Div("divPur","0","divCS:-1",null,null,"0","0%",null,null,null,null,this.divDet.form.divDet2.form);
            obj.set_taborder("1");
            obj.set_text("Div00");
            this.divDet.form.divDet2.addChild(obj.name, obj);

            obj = new Static("stc_GbSalesPurchase","-2","0",null,"32","0",null,null,null,null,null,this.divDet.form.divDet2.form.divPur.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_GroupBg");
            this.divDet.form.divDet2.form.divPur.addChild(obj.name, obj);

            obj = new Grid("grd_SalesPurchase","0","32",null,null,"0","0",null,null,null,null,this.divDet.form.divDet2.form.divPur.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsPurchaseList");
            obj.getSetter("scrollbars").set("alwaysvert");
            obj.set_autoenter("select");
            obj.getSetter("useinputpanel").set("false");
            obj.set_cellsizingtype("col");
            obj.set_visible("true");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"89\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"90\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"항목\" TL_SEQ=\"105\"/><Cell col=\"1\" text=\"연관제품\" TL_SEQ=\"106\"/><Cell col=\"2\" text=\"예상매입액\" TL_SEQ=\"107\"/><Cell col=\"3\" text=\"매입처\" TL_SEQ=\"108\"/><Cell col=\"4\" text=\"요율(%)\" TL_SEQ=\"109\"/></Band><Band id=\"body\"><Cell text=\"bind:PRODUCT_NAME\" textAlign=\"left\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL(&quot;theme://images/btn_WF_Sch_P.png&quot;)\"/><Cell col=\"1\" text=\"bind:RELATED_PRODUCT_NAME\" expandimage=\"url(&apos;theme://images/btn_WF_Sch_P.png&apos;)\" expandshow=\"show\" expandsize=\"20\"/><Cell col=\"2\" textAlign=\"right\" text=\"bind:CONTRACT_PRICE\" displaytype=\"number\" edittype=\"mask\"/><Cell col=\"3\" text=\"bind:CONTRACT_MAIN_NAME\" textAlign=\"left\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL(&quot;theme://images/btn_WF_Sch_P.png&quot;)\"/><Cell col=\"4\" text=\"bind:COMMISSION_RATE\" displaytype=\"number\" textAlign=\"right\" edittype=\"mask\"/></Band></Format><Format id=\"PURCHASE_JAP\"><Columns><Column size=\"100\"/><Column size=\"89\"/><Column size=\"100\"/><Column size=\"110\"/><Column size=\"90\"/><Column size=\"90\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"항목\" TL_SEQ=\"105\"/><Cell col=\"1\" text=\"연관제품\" TL_SEQ=\"106\"/><Cell col=\"2\" text=\"예상매입액\" TL_SEQ=\"107\"/><Cell col=\"3\" text=\"매입처\" TL_SEQ=\"108\"/><Cell col=\"4\" text=\"요율(%)\" TL_SEQ=\"109\"/><Cell col=\"5\" text=\"로열티\" TL_SEQ=\"22569\"/></Band><Band id=\"body\"><Cell text=\"bind:PRODUCT_NAME\" textAlign=\"left\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL(&quot;theme://images/btn_WF_Sch_P.png&quot;)\"/><Cell col=\"1\" text=\"bind:RELATED_PRODUCT_NAME\" expandimage=\"url(&apos;theme://images/btn_WF_Sch_P.png&apos;)\" expandshow=\"show\" expandsize=\"20\"/><Cell col=\"2\" textAlign=\"right\" text=\"bind:CONTRACT_PRICE\" displaytype=\"expr:comp.parent.parent.parent.parent.parent.parent.parent.gfn_getPriceDisplayType(&apos;number&apos;)\" edittype=\"mask\" maskeditformat=\"expr:comp.parent.parent.parent.parent.parent.parent.parent.gfn_getPriceMaskformat(CONTRACT_PRICE)\" maskedittype=\"expr:comp.parent.parent.parent.parent.parent.parent.parent.gfn_getPriceMaskEdtType()\"/><Cell col=\"3\" text=\"bind:CONTRACT_MAIN_NAME\" textAlign=\"left\" expandshow=\"show\" expandsize=\"20\" expandimage=\"URL(&quot;theme://images/btn_WF_Sch_P.png&quot;)\"/><Cell col=\"4\" text=\"bind:COMMISSION_RATE\" displaytype=\"number\" textAlign=\"right\" edittype=\"mask\"/><Cell col=\"5\" text=\"bind:ROYALTY_TYPE\" displaytype=\"combotext\" combodataset=\"ds_cmm_RoyaltyType\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/></Band></Format></Formats>");
            this.divDet.form.divDet2.form.divPur.addChild(obj.name, obj);

            obj = new Static("stc_SalesPurchase","8","7","94","16",null,null,null,null,null,null,this.divDet.form.divDet2.form.divPur.form);
            obj.set_taborder("2");
            obj.set_text("매입 상세내역");
            obj.set_visible("true");
            obj.set_cssclass("sta_POP_GroupTit");
            obj.getSetter("TL_SEQ").set("110");
            this.divDet.form.divDet2.form.divPur.addChild(obj.name, obj);

            obj = new Button("btn_PurDel",null,"7","16","16","8",null,null,null,null,null,this.divDet.form.divDet2.form.divPur.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_POP_Del");
            this.divDet.form.divDet2.form.divPur.addChild(obj.name, obj);

            obj = new Button("btn_PurAdd",null,"7","16","16","32",null,null,null,null,null,this.divDet.form.divDet2.form.divPur.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_POP_Add");
            this.divDet.form.divDet2.form.divPur.addChild(obj.name, obj);

            obj = new Button("btn_ContractLink",null,"5","70","22","btn_PurAdd:8",null,null,null,null,null,this.divDet.form.divDet2.form.divPur.form);
            obj.set_taborder("5");
            obj.set_text("매출연결");
            obj.set_enable("true");
            obj.getSetter("TL_SEQ").set("111");
            this.divDet.form.divDet2.form.divPur.addChild(obj.name, obj);

            obj = new Static("stc_BusinessType","txt_Remark:0","102","70","22",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("사업구분");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_detailLbl01");
            obj.getSetter("TL_SEQ").set("112");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_BusinessType","stc_BusinessType:0","102","95","22",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_cmm_BusinessType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("div_RelatedProject","stc_RelatedProject:0","42","213","22",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_url("sales::comm/COM_Search.xfdl");
            obj.getSetter("kind").set("PROJECT");
            obj.getSetter("binddataset").set("dsList");
            obj.getSetter("codecolumn").set("RELATED_PROJECT_CODE");
            obj.getSetter("datacolumn").set("RELATED_PROJECT_NAME");
            obj.getSetter("user_onchanged").set("Com_Search_onChanged");
            obj.getSetter("searchtype").set("P");
            obj.set_enable("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_InConfirm","624","156","150","89",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("div_WF_detailBg");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Radio("rd_kind","20","4",null,"42","16",null,null,null,null,null,this.div_InConfirm.form);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_Kind");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.getSetter("TL_FLAG").set("1");
            obj.set_text("확인");
            obj.set_value("01");
            obj.set_index("0");
            this.div_InConfirm.addChild(obj.name, obj);

            obj = new Static("stc_BottomFrame","0",null,null,"37","0","0",null,null,null,null,this.div_InConfirm.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_BtnBg");
            obj.set_text("");
            this.div_InConfirm.addChild(obj.name, obj);

            obj = new Button("btn_Confirm",null,null,"60","22","68","7",null,null,null,null,this.div_InConfirm.form);
            obj.set_taborder("2");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_tran");
            obj.set_defaultbutton("true");
            obj.getSetter("TL_SEQ").set("113");
            this.div_InConfirm.addChild(obj.name, obj);

            obj = new Button("btn_Exit",null,null,"60","22","4","7",null,null,null,null,this.div_InConfirm.form);
            obj.set_taborder("3");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_tran");
            obj.getSetter("TL_SEQ").set("59");
            this.div_InConfirm.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.tab_Progess.tpg_Progess.form
            obj = new Layout("default","",0,0,this.tab_Progess.tpg_Progess.form,function(p){});
            this.tab_Progess.tpg_Progess.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_Progess.tpg_PersonInCharge.form
            obj = new Layout("default","",0,0,this.tab_Progess.tpg_PersonInCharge.form,function(p){});
            this.tab_Progess.tpg_PersonInCharge.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_ContractMain
            obj = new Layout("default","",0,0,this.div_ContractMain.form,function(p){});
            this.div_ContractMain.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_ClientName
            obj = new Layout("default","",0,0,this.div_ClientName.form,function(p){});
            this.div_ClientName.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDet.form.divDet1.form.divProd.form
            obj = new Layout("default","",0,0,this.divDet.form.divDet1.form.divProd.form,function(p){});
            this.divDet.form.divDet1.form.divProd.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDet.form.divDet1.form.divGoods.form
            obj = new Layout("default","",0,0,this.divDet.form.divDet1.form.divGoods.form,function(p){});
            this.divDet.form.divDet1.form.divGoods.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDet.form.divDet1.form
            obj = new Layout("default","",0,0,this.divDet.form.divDet1.form,function(p){});
            this.divDet.form.divDet1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDet.form.divDet2.form.divSi.form
            obj = new Layout("default","",0,0,this.divDet.form.divDet2.form.divSi.form,function(p){});
            this.divDet.form.divDet2.form.divSi.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDet.form.divDet2.form.divCS.form
            obj = new Layout("default","",0,0,this.divDet.form.divDet2.form.divCS.form,function(p){});
            this.divDet.form.divDet2.form.divCS.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDet.form.divDet2.form.divPur.form
            obj = new Layout("default","",0,0,this.divDet.form.divDet2.form.divPur.form,function(p){});
            this.divDet.form.divDet2.form.divPur.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDet.form.divDet2.form
            obj = new Layout("default","",0,0,this.divDet.form.divDet2.form,function(p){});
            this.divDet.form.divDet2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDet.form
            obj = new Layout("default","",0,0,this.divDet.form,function(p){});
            this.divDet.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_RelatedProject
            obj = new Layout("default","",0,0,this.div_RelatedProject.form,function(p){});
            this.div_RelatedProject.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_InConfirm.form
            obj = new Layout("default","",0,0,this.div_InConfirm.form,function(p){});
            this.div_InConfirm.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1274,448,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","tab_Progess.tpg_Progess.form.cmb_TypeCode","value","dsScheduleList","TYPE_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","tab_Progess.tpg_Progess.form.txt_ProgressContent","value","dsScheduleList","CONTENTS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","tab_Progess.tpg_Progess.form.cal_IssueDate","value","dsScheduleList","ISSUE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","tab_Progess.tpg_Progess.form.chb_MakePublic01","value","dsScheduleList","REPORT_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","tab_Progess.tpg_Progess.form.chb_MakePublic02","value","dsScheduleList","OPEN_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","tab_Progess.tpg_Progess.form.cmb_Importance00","value","dsScheduleList","IMPORTANCE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_ContractNo","value","dsList","PROJECT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","cal_ContractDate","value","dsList","CONTRACT_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","ckb_PipeLineFlag","value","dsList","PIPELINE_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","txt_Remark","value","dsList","REMARKS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edt_ContractName","value","dsList","CONTRACT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","cmb_SalesStatus","value","dsList","SALES_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","cmb_SalesEmpNo","value","dsList","SALES_EMP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","cmb_BusinessType","value","dsList","BUSINESS_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","cmb_SalesProduct","value","dsList","PRODUCT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","edt_ProjectName","value","dsList","PROJECT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","edt_ProjectCode","value","dsList","PROJECT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","sales::comm/COM_Search.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SS_Presales.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("SS_Presales.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("SS_Presales.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("SS_Presales.xfdl","Script::CommGrid.xjs");
        this.registerScript("SS_Presales.xfdl", function() {
        /************************************************************************************************
         * 01. 업무구분 : 영업관리 - 영업관리
         * 02. 화면명   : Presales Tabpage(SS_Presales)
         * 03. 화면설명 : 영업관리의 Presales Tabpage
         * 04. 작성일   : 2018.08.19
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
        this.executeIncludeScript("Script::CommGrid.xjs"); /*include "Script::CommGrid.xjs"*/

        /************************************************************************************************
        * 전역 변수 영역
        ************************************************************************************************/
        this.FV_PARENT_FORM = this.parent.parent.parent;
        this.nRowPosition = 0;
        this.FV_BUTTON_TYPE = "";
        this.sObjDs;
        this.FV_CO_CD = "";
        this.FV_AUTH_PRICE_MASK = false;
        this.SAVE_FLAG = false;
        this.sInsertType = ""; // insert 계약 구분
         /************************************************************************************************
         * FORM 영역
         ************************************************************************************************/
        this.SS_Presales_onload = function(obj,e)
        {
        	this.FV_CO_CD = this.gfnGetCompanyCode();
        	this.gfnCompInit(obj);  	// Grid 공통함수 호출
        	this.fnSetComCmbConfig();
        	this.fnAuthConfig();

        	this.fnGetCode();			// 공통코드
        	this.fnSalesEmpSerch();		// 영업 담당자
        	this.fnProductQueryData();	// 대표제품
        	this.fnFormInit();
        };

        this.fnAuthConfig = function()
        {
        	var sAuthKind = "N";

        	if (this.commUtil.getFormAuthority(235,2))		sAuthKind = "LS";	// 영업팀장이상
        	else {
        		if(this.commUtil.getFormAuthority(235,1))	sAuthKind = "S";	// 일반영업
        		else 										sAuthKind = "N";	// 일반사용자
        	}


        	if (this.commUtil.getFormAuthority(235,11))	this.FV_AUTH_PRICE_MASK = true;	// 계약금액 마스킹 처리 권한




        	var nCurrow = this.dsList.rowposition;
        	var bDisableFlag;

        	// 예외대상 목록
        	var arrCompInfo = new Array();
        	arrCompInfo[0] = this.edt_ProjectCode;			// 프로젝트 코드
        	arrCompInfo[1] = this.div_InConfirm;			// 프로젝트 코드



        	if (nCurrow < 0) {		// 최초 onLoad
        		if (sAuthKind == "LS")	bDisableFlag = false;
        		else					bDisableFlag = true;

        		// this.gfnCompDisable(this, bDisableFlag, arrCompInfo);
        	} else {				// Row변경시 재설정
        		var sLoginEmpNo = nexacro.getApplication().gdsUserInfo.getColumn(0, "EMP_NO");
        		var sTargetEmpNo = this.dsList.getColumn(nCurrow, "SALES_EMP_NO");

        		if (sAuthKind == "LS") bDisableFlag = false;		// 영업팀장이상은 등록가능
        		else if (sAuthKind == "S" && (sTargetEmpNo == sLoginEmpNo)) bDisableFlag = false;	// (일반영업) 담당영업이 본인인 경우만 등록가능
        		else bDisableFlag = true;	// 일반사용자 수정불가

        		// this.gfnCompDisable(this, bDisableFlag, arrComp);
        	}
        	this.gfnCompDisable(this, bDisableFlag, arrCompInfo);


        	var bBtnCtr;
        	if (bDisableFlag)	bBtnCtr = false;
        	else				bBtnCtr = true;

        	this.FV_PARENT_FORM.div_search.form.btn_Delete.set_enable(bBtnCtr);
        	this.FV_PARENT_FORM.div_search.form.btn_Save.set_enable(bBtnCtr);
        	this.FV_PARENT_FORM.btn_CostSheet.set_enable(bBtnCtr);

        	// 라이선스 발급요청 권한
        	if (this.commUtil.getFormAuthority(235,4)) {
        		this.FV_PARENT_FORM.btn_RequestLicense.set_enable(true);
        	}


        	var sSaveType = this.dsList.getColumn(this.dsList.rowposition, "SAVE_TYPE");
        	if (sSaveType == "A") {
        		this.div_ClientName.set_enable(false);
        		this.edt_ProjectName.set_readonly(true);
        	} else {
        		this.div_ClientName.set_enable(true);
        		this.edt_ProjectName.set_readonly(false);
        	}

        	return bBtnCtr;
        }


        // 공통 검색 Popup 설정 처리
        this.fnSetComCmbConfig = function ()
        {
        	this.div_ClientName.param = "pvMode:1";
        	this.div_ContractMain.param = "pvMode:2";
        }

         this.fnFormInit = function()
         {
        	if(this.FV_CO_CD == "J02") {
        		this.divDet.form.divDet1.form.divProd.form.grd_SalesProd.set_formatid("PRODUCT_JAP");
        		this.divDet.form.divDet2.form.divPur.form.grd_SalesPurchase.set_formatid("PURCHASE_JAP");
        	}
        	else this.divDet.form.divDet1.form.divProd.form.grd_SalesProd.set_formatid("default");
         };

         /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
         ************************************************************************************************/
         // 공통코드 조회
         this.fnGetCode = function()
         {
         	this.gfnAddCodeDataset("ds_cmm_SalesStatus",	"SALES_STATUS"); 	// 영업상태 코드
        	this.gfnAddCodeDataset("ds_cmm_ContractStatus", "CONTRACT_STATUS");	// 계약상태 코드

        	this.gfnAddCodeDataset("ds_cmm_Type",			"TYPE_CODE");		// 일정 구분
        	this.gfnAddCodeDataset("ds_cmm_Importance",		"IMPORTANCE");		// 일정 중요도 코드
        	this.gfnAddCodeDataset("ds_cmm_Role", 			"ROLE_CODE");		// 역할 코드
        	this.gfnAddCodeDataset("ds_cmm_Level",			"LEVEL_CODE");		// 등급 코드
        	this.gfnAddCodeDataset("ds_cmm_Area",			"AREA_CODE");		// 근무지역 코드

        	this.gfnAddCodeDataset("ds_cmm_CaGrade",		"CA_GRADE_CODE");	// 담당자 직급
        	this.gfnAddCodeDataset("ds_cmm_CaRole",			"CA_ROLE_CODE");	// 담당자 역할
        	this.gfnAddCodeDataset("ds_cmm_BusinessType",	"BUSINESS_TYPE");	// 사업구분
        	this.gfnAddCodeDataset("ds_cmm_HoldOffice",		"CM0009");			// 재직여부

        	this.gfnAddCodeDataset("ds_cmm_ExecutionType",	"EXECUTION_TYPE");		// 수행방법
        	this.gfnAddCodeDataset("ds_cmm_TechSupportUnit","TECH_SUPPORT_UNIT");	// 단위(기술서비스)

        	this.gfnAddCodeDataset("ds_cmm_RoyaltyType",	"ROYALTY_TYPE");	// 로열티종류

        	this.gfnCodeTransaction();
         }

         this.fnSalesEmpSerch = function()
        {

        	// 조회용 Output dataset 세팅
        	this.gfnAddOutputDataset("ds_cmm_SalesEmp"	, "ds_output");
        	this.gfnCommonTransaction("CO_SalesEmp_S01", "CO_SalesEmp_S01");
        }

         // (계약대표)제품 조회
         this.fnProductQueryData = function()
        {
        	this.gfnAddSendParameter("CONTRACT_TYPE",		"P");
        	this.gfnAddSendParameter("MAIN_PRODUCT_FLAG",	"1");
        	this.gfnAddSendParameter("E03",					"E03");
        	this.gfnAddOutputDataset("ds_cmm_Product", 	"dsOutput");
        	this.gfnCommonTransaction("AP_SalesProductMM_S01", "AP_SalesProductMM_S01");

        }

        // 시작 종료일에 대한 MEN_MONTH 조회
        this.fnGetMM = function(sStartDt, sEndDt, nRow) {
        	if (this.gfnIsEmpty(sStartDt) || this.gfnIsEmpty(sEndDt)) {
        		return;
        	}
        	if (sStartDt>sEndDt)
        	{
        		return;
        	}

        	this.gfnAddSendParameter("START_DATE",	sStartDt);
        	this.gfnAddSendParameter("END_DATE",	sEndDt);
        	this.gfnAddSendParameter("ROW",			nRow);
        	this.gfnAddOutputDataset("ds_MM", "ds_output");
        	this.gfnCommonTransaction("getMM", "CO_GetMM_S01");
        }

         // 마스터(프로젝트, 계약) 조회
         this.fnQueryData = function(sKind)
         {

        	if(sKind != "Save")
        	{
        		this.nRowPosition = 0;
        	}
        	else
        	{
        		this.SAVE_FLAG = true;
        	}

        	// 세부 DS 초기화
        // 	this.dsContractProd.clearData();
        // 	this.dsContractSi.clearData();
        // 	this.dsContractGoods.clearData();
        // 	this.dsScheduleList.clearData();
        // 	this.dsAddressbookList.clearData();


        	// 조건값(Rarameter) 셋팅
        	this.gfnAddSendParameter("PROJECT_NAME",		this.FV_PARENT_FORM.div_search.form.div_ProjectName.getData());
        	this.gfnAddSendParameter("CLIENT_NAME",			this.FV_PARENT_FORM.div_search.form.div_ClientName.getData());
        	this.gfnAddSendParameter("NONE_DATE",			this.FV_PARENT_FORM.div_search.form.chk_NoneDate.value);
        	this.gfnAddSendParameter("FROM_CONTRACT_DT",	this.FV_PARENT_FORM.div_search.form.div_Search_yyyyMM_FromTo.getFromYYYYMM());
        	this.gfnAddSendParameter("TO_CONTRACT_DT",		this.FV_PARENT_FORM.div_search.form.div_Search_yyyyMM_FromTo.getToYYYYMM());
        	this.gfnAddSendParameter("SALES_EMP_NO",		this.FV_PARENT_FORM.div_search.form.cmb_SalesRepresent.value);
        	this.gfnAddSendParameter("SALES_STATUS",		this.FV_PARENT_FORM.div_search.form.cmb_SalesStatus.value);
        	this.gfnAddSendParameter("ATM_SEQ",				162);

        	// 조회용 Output dataset 세팅
        	this.gfnAddOutputDataset("dsList",		"ds_output");
        	this.gfnCommonTransaction("SS_Presales_S01", "SS_Presales_S01", this.grd_Presales);
         };

          // 세부(제품, 상품, 용역, 매입계약, 진행사항, 담당자) 조회
         this.fnSSearch = function(sProjectCd)
         {
        	this.dsContractProd.clearData();
        	this.dsContractSi.clearData();
        	this.dsContractCS.clearData();
        	this.dsContractGoods.clearData();
        	this.dsPurchaseList.clearData();
        	this.dsScheduleList.clearData();
        	this.dsAddressbookList.clearData();

        	// 조건값(Rarameter) 셋팅
        	this.gfnAddSendParameter("PROJECT_CODE", sProjectCd);

        	// 조회용 Output dataset 세팅
        	this.gfnAddOutputDataset("dsContractProd",		"ds_output1");
        	this.gfnAddOutputDataset("dsContractSi",		"ds_output2");
        	this.gfnAddOutputDataset("dsContractCS",		"ds_output7");
        	this.gfnAddOutputDataset("dsContractGoods",		"ds_output3");
        	this.gfnAddOutputDataset("dsPurchaseList",		"ds_output4");
        	this.gfnAddOutputDataset("dsScheduleList",		"ds_output5");
        	this.gfnAddOutputDataset("dsAddressbookList",	"ds_output6");
        	this.gfnCommonTransaction("SS_Presales_S02", 	"SS_Presales_S02");
         };


        // 저장
         this.fnSaveData = function()
         {
        	if (!this.fn_getValidation("T"))
        	{
        		return;
        	}

        	// 추가 계약인 경우 기존 프리세일즈 동일 제품 체크
        	if(this.FV_CO_CD == "J02" && this.sInsertType == "02") {
        		if(this.dsContractProd.rowcount > 0 || this.dsContractProd.rowcount > 0) {
        			this.fn_getCompareProductCode();

        			if(this.ds_checkProduct.rowcount > 0) {
        				alert(this.gfnGetTransTxt(22590,"동일한 제품이 존재 합니다."));
        				return;
        			}
        		}
        	}

        	this.fn_setInsertStatus(this.dsContractProd);
        	this.fn_setInsertStatus(this.dsContractGoods);

        	// 계약연결 알림 메시지 1회만 띄우기 위해 PROJECT_LIST 테이블 LINK_CONFIRM_FLAG 컬럼으로 확인 및 처리
        	// 저장, 계약연결(제품매출 상단 버튼) 작업시 LINK_CONFIRM_FLAG 컬럼을 "1" 등록함
        	var sLinkConfirmFlag = this.dsList.getColumn(this.dsList.rowposition, "LINK_CONFIRM_FLAG");
        	if (sLinkConfirmFlag == "0") {
        		var bNexaNFlag = this.fn_getNexaNCheck(this.dsContractProd);		// nexacro N 여부 확인
        		if (bNexaNFlag) {
        			var bUnionFlag = false;

        			// 매출제품계약(nexacro N)은 이전 계약 중 nexacro 17(17.1)과 연결 할건지 확인
        			for (var i=0; i<this.dsContractProd.rowcount; i++) {
        				var nUnionCnt = this.dsContractProd.getColumn(i, "UNION_CNT");
        				if (nUnionCnt > 0) {
        					bUnionFlag = true;
        					break;
        				}
        			}

        			if (!bUnionFlag && this.FV_CO_CD == "A01") {
        				this.alert(this.gfnGetTransTxt(1463,"기존계약이 있으면 '계약연결'버튼을 통해 계약을 연결해 주세요"));
        			}
        		}
        	}


        	this.nRowPosition = this.dsList.rowposition;

        	this.gfnAddSendParameter("BUSINESS_TYPE",		this.cmb_BusinessType.value);
        	this.gfnAddSendParameter("SALES_STATUS",		this.cmb_SalesStatus.value);
        	this.gfnAddSendParameter("CONTRACT_NAME",		this.edt_ContractName.value);
        	this.gfnAddSendParameter("CONTRACT_DATE",		this.cal_ContractDate.value);
        	this.gfnAddSendParameter("PIPELINE_FLAG",		this.ckb_PipeLineFlag.value);
        	this.gfnAddSendParameter("CONTRACT_MAIN",		this.dsList.getColumn(this.dsList.rowposition, "CONTRACT_MAIN"));
        	this.gfnAddSendParameter("PRODUCT_CODE",		this.dsList.getColumn(this.dsList.rowposition, "PRODUCT_CODE"));
        	this.gfnAddSendParameter("SALES_EMP_NO",		this.dsList.getColumn(this.dsList.rowposition, "SALES_EMP_NO"));
        	this.gfnAddSendParameter("SALES_DEPT_CD",		this.dsList.getColumn(this.dsList.rowposition, "SALES_DEPT_CD"));
        	this.gfnAddSendParameter("SALES_DEPT_NAME",		this.dsList.getColumn(this.dsList.rowposition, "SALES_DEPT_NAME"));
        	this.gfnAddSendParameter("SALES_CO_CD",			this.dsList.getColumn(this.dsList.rowposition, "SALES_CO_CD"));

        	// 입력용 Input Dataset 세팅
        	this.gfnAddInputDataset ("dsList",				"ds_contract");
        	this.gfnAddInputDataset ("dsContractProd",		"ds_contract_prod");
        	this.gfnAddInputDataset ("dsContractGoods",		"ds_contract_goods");
        	this.gfnAddInputDataset ("dsContractSi",		"ds_contract_si");
        	this.gfnAddInputDataset ("dsContractCS",		"ds_contract_cs");
        	this.gfnAddInputDataset ("dsPurchaseList",		"ds_purchase");
        	this.gfnAddInputDataset ("dsScheduleList",		"ds_schedule");
        	this.gfnAddInputDataset ("dsAddressbookList",	"ds_addressbook");

        	this.gfnCommonTransaction("SS_Presales_R01", "SS_Presales_R01");
         }


         // Validation check
        this.fn_getValidation = function(sMode)
        {
        	var bRtnVal = true;
        	if (sMode == "T") {
        		if (!this.fnGetChangeDs() && !this.gfnIsUpdateDs(this.dsList)) {
        			this.alert(this.gfnGetTransTxt(1243,"변경된 데이터가 없습니다."));
        			return false;
        		}

        		var nContrProdCnt = this.dsContractProd.rowcount;
        		var nContrSiCnt = this.dsContractSi.rowcount;
        		var nContrGoodsCnt = this.dsContractGoods.rowcount;
        		var nContrCsCnt = this.dsContractCS.rowcount;
        		var nTotCnt = nContrProdCnt + nContrSiCnt + nContrGoodsCnt + nContrCsCnt;
        		if (nTotCnt <= 0) {
        			alert(this.gfnGetTransTxt(1464,"제품, 상품, 용역, 기술서비스 매출 상세내역을 최소 한건이라도 입력 하세요"));
        			return false;
        		}


        		// 매출계약 마스터 입력값 확인
        		var nCurrow = this.dsList.rowposition;
        		if (this.gfnIsEmpty(this.dsList.getColumn(nCurrow, "CLIENT_CODE")))		{ this.alert(this.gfnGetTransTxt(1465,"고객사를 입력하세요.")); return false; }
        		if (this.gfnIsEmpty(this.dsList.getColumn(nCurrow, "PRODUCT_CODE")))	{ this.alert(this.gfnGetTransTxt(1466,"영업제품을 입력하세요.")); return false; }
        		if (this.gfnIsEmpty(this.dsList.getColumn(nCurrow, "PROJECT_NAME")))	{ this.alert(this.gfnGetTransTxt(1467,"프로젝트명을 입력하세요.")); return false; }
        		if (this.gfnIsEmpty(this.dsList.getColumn(nCurrow, "CONTRACT_MAIN")))	{ this.alert(this.gfnGetTransTxt(1468,"계약처를 입력하세요.")); return false; }
        		if (this.gfnIsEmpty(this.dsList.getColumn(nCurrow, "CONTRACT_NAME")))	{ this.alert(this.gfnGetTransTxt(1469,"계약명을 입력하세요.")); return false; }
        		if (this.gfnIsEmpty(this.dsList.getColumn(nCurrow, "SALES_STATUS")))	{ this.alert(this.gfnGetTransTxt(1470,"영업상태를 입력하세요.")); return false; }
        		if (this.gfnIsEmpty(this.dsList.getColumn(nCurrow, "CONTRACT_DATE")))	{ this.alert(this.gfnGetTransTxt(1471,"계약(예정)일을 입력하세요.")); return false; }
        		if (this.gfnIsEmpty(this.dsList.getColumn(nCurrow, "BUSINESS_TYPE")))	{ this.alert(this.gfnGetTransTxt(1472,"사업구분을 입력하세요.")); return false; }
        		if (this.gfnIsEmpty(this.dsList.getColumn(nCurrow, "SALES_EMP_NO")))	{ this.alert(this.gfnGetTransTxt(1473,"담당영업을 입력하세요.")); return false; }

        		// 제품매출 입력값 확인
        		var objContrProd = this.dsContractProd;
        		for (var i=0; i<objContrProd.rowcount; i++)
        		{
        			var sProductCode = objContrProd.getColumn(i, "PRODUCT_CODE");

        			if (this.gfnIsEmpty(objContrProd.getColumn(i, "PRODUCT_CODE"))) {
        				alert(this.gfnGetTransTxt(1474,"[제품매출] 제품정보를 입력하세요"));
        				return false;
        			}

        			if (this.gfnIsEmpty(objContrProd.getColumn(i, "CONTRACT_PRICE"))) {
        				alert(this.gfnGetTransTxt(1475,"[제품매출] 예상매출액을 입력하세요"));
        				return false;
        			}

        			if(this.FV_CO_CD == "J02") {
        				if (this.gfnIsEmpty(objContrProd.getColumn(i, "QUANTITY"))) {
        					alert(this.gfnGetTransTxt(12313,"[제품매출] 수량을 입력하세요"));
        					return false;
        				}

        				var sCnt = objContrProd.getCaseCount("PRODUCT_CODE=='" + sProductCode + "'");

        				if(sCnt > 1) {
        					alert(this.gfnGetTransTxt(32854, "[제품매출] 중복된 제품이 있습니다."));
        					return false;
        				}
        			}
        		}

        		// 상품매출 입력값 확인
        		var objContrGoods = this.dsContractGoods;
        		for (var i=0; i<objContrGoods.rowcount; i++)
        		{
        			var sProductCode = objContrGoods.getColumn(i, "PRODUCT_CODE");

        			if (this.gfnIsEmpty(objContrGoods.getColumn(i, "PRODUCT_CODE"))) {
        				alert(this.gfnGetTransTxt(1476,"[상품매출] 상품정보를 입력하세요"));
        				return false;
        			}
        			if (this.gfnIsEmpty(objContrGoods.getColumn(i, "CONTRACT_PRICE"))) {
        				alert(this.gfnGetTransTxt(1477,"[상품매출] 예상매출액을 입력하세요"));
        				return false;
        			}

        			if(this.FV_CO_CD == "J02") {
        				var sCnt = objContrProd.getCaseCount("PRODUCT_CODE=='" + sProductCode + "'");

        				if(sCnt > 1) {
        					alert(this.gfnGetTransTxt(32855,"[상품매출] 중복된 상품이 있습니다."));
        					return false;
        				}
        			}
        		}

        		// 용역매출 입력값 확인
        		for (var i=0; i<this.dsContractSi.rowcount; i++)
        		{

        			if (this.gfnIsEmpty(this.dsContractSi.getColumn(i, "ROLE_CODE"))) {
        				alert(this.gfnGetTransTxt(1478,"[용역매출] 역할을 입력하세요"));
        				return false;
        			}
        			if (this.gfnIsEmpty(this.dsContractSi.getColumn(i, "LEVEL_CODE"))) {
        				alert(this.gfnGetTransTxt(1479,"[용역매출] 등급을 입력하세요"));
        				return false;
        			}
        			if (this.gfnIsEmpty(this.dsContractSi.getColumn(i, "START_DATE"))) {
        				alert(this.gfnGetTransTxt(1480,"[용역매출] 시작일자를 입력하세요"));
        				return false;
        			}
        			if (this.gfnIsEmpty(this.dsContractSi.getColumn(i, "END_DATE"))) {
        				alert(this.gfnGetTransTxt(1481,"[용역매출] 종료일자를 입력하세요"));
        				return false;
        			}
        			if (this.gfnIsEmpty(this.dsContractSi.getColumn(i, "CONTRACT_PRICE"))) {
        				alert(this.gfnGetTransTxt(1482,"[용역매출] 금액을 입력하세요"));
        				return false;
        			}
        		}

        		// 컨설팅 서비스 매출 입력값 확인
        		for (var i=0; i<this.dsContractCS.rowcount; i++)
        		{

        			if (this.gfnIsEmpty(this.dsContractCS.getColumn(i, "ROLE_CODE"))) {
        				alert(this.gfnGetTransTxt(1483,"[기술서비스] 역할을 입력하세요"));
        				return false;
        			}
        			if (this.gfnIsEmpty(this.dsContractCS.getColumn(i, "LEVEL_CODE"))) {
        				alert(this.gfnGetTransTxt(1484,("[기술서비스] 등급을 입력하세요")));
        				return false;
        			}
        			if (this.gfnIsEmpty(this.dsContractCS.getColumn(i, "EXECUTION_TYPE"))) {
        				alert(this.gfnGetTransTxt(1485,("[기술서비스] 수행방식을 입력하세요")));
        				return false;
        			}
        			if (this.gfnIsEmpty(this.dsContractCS.getColumn(i, "TECH_SUPPORT_UNIT"))) {
        				alert(this.gfnGetTransTxt(1486,("[기술서비스] 단위를 입력하세요")));
        				return false;
        			}
        			if (this.gfnIsEmpty(this.dsContractCS.getColumn(i, "START_DATE"))) {
        				alert(this.gfnGetTransTxt(1487,("[기술서비스] 시작일자를 입력하세요")));
        				return false;
        			}
        			if (this.gfnIsEmpty(this.dsContractCS.getColumn(i, "END_DATE"))) {
        				alert(this.gfnGetTransTxt(1488,("[기술서비스] 종료일자를 입력하세요")));
        				return false;
        			}
        			if (this.gfnIsEmpty(this.dsContractCS.getColumn(i, "CONTRACT_PRICE"))) {
        				alert(this.gfnGetTransTxt(1489,("[기술서비스] 금액을 입력하세요")));
        				return false;
        			}
        		}

        		// 매입계약 입력값 확인
        		for (var i=0; i<this.dsPurchaseList.rowcount; i++)
        		{
        			var sContractType = this.dsPurchaseList.getColumn(i, "CONTRACT_TYPE");
        			if (this.gfnIsEmpty(this.dsPurchaseList.getColumn(i, "PRODUCT_CODE"))) {
        				alert(this.gfnGetTransTxt(1490,("[매입] 항목(제품)을 입력하세요")));
        				return false;
        			}
        			if (this.gfnIsEmpty(this.dsPurchaseList.getColumn(i, "CONTRACT_PRICE"))) {
        				alert(this.gfnGetTransTxt(1491,("[매입] 예상매입액을 입력하세요")));
        				return false;
        			}
        			if (this.gfnIsEmpty(this.dsPurchaseList.getColumn(i, "CONTRACT_MAIN"))) {
        				alert(this.gfnGetTransTxt(1492,("[매입] 매입처를 입력하세요")));
        				return false;
        			}

        			if (sContractType == "C") {				// 판매수수료
        				if (this.gfnIsEmpty(this.dsPurchaseList.getColumn(i, "COMMISSION_RATE"))) {
        					alert(this.gfnGetTransTxt(1493,("[매입] 판매수수료율을 입력하세요")));
        					return false;
        				}
        				if (this.gfnIsEmpty(this.dsPurchaseList.getColumn(i, "RELATED_PRODUCT_CODE"))) {
        					alert(this.gfnGetTransTxt(1494,("[매입] 연관제품을 입력하세요")));
        					return false;
        				}
        			} else if (sContractType == "D") {		// 총판수수료
        				if (this.gfnIsEmpty(this.dsPurchaseList.getColumn(i, "COMMISSION_RATE"))) {
        					alert(this.gfnGetTransTxt(1495,("[매입] 총판수수료율을 입력하세요")));
        					return false;
        				}
        				if (this.gfnIsEmpty(this.dsPurchaseList.getColumn(i, "RELATED_PRODUCT_CODE"))) {
        					alert(this.gfnGetTransTxt(1494,("[매입] 연관제품을 입력하세요")));
        					return false;
        				}
        			}
        		}
        	}
        	return bRtnVal;
        }

        this.fn_getCompareProductCode = function()
        {
        	this.ds_checkProduct.clearData();

        	var sProductCodeList = "";
        	var sProdProductCodeList = "";
        	var sGoodsProductCodeList = "";
        	for(var i = 0; i < this.dsContractProd.rowcount; i++) {
        		var sProductCode = this.dsContractProd.getColumn(i, "PRODUCT_CODE");
        		sProdProductCodeList += sProductCode;
        		if(this.dsContractProd.rowcount - 1  > i || this.dsContractGoods.rowcount > 0) sProdProductCodeList += ",";
        	}

        	for(var i = 0; i < this.dsContractGoods.rowcount; i++) {
        		var sProductCode = this.dsContractGoods.getColumn(i, "PRODUCT_CODE");
        		sGoodsProductCodeList += sProductCode;
        		if(this.dsContractGoods.rowcount > i) sGoodsProductCodeList += ",";
        	}

        	sProductCodeList = sProdProductCodeList + sGoodsProductCodeList;

        	this.gfnAddSendParameter("PROJECT_CODE",  this.dsList.getColumn(this.dsList.rowposition, "PROJECT_CODE"));
        	this.gfnAddSendParameter("CONTRACT_STATUS",  "0");
        	this.gfnAddSendParameter("PRODUCT_LIST",  sProductCodeList);
        	this.gfnAddOutputDataset("ds_checkProduct",	"ds_output");
        	this.gfnCommonTransaction("SS_Presales_S08", "SS_Presales_S08", null, false);
        };

          // 인력 요청 처리 여부 확인
         this.fnRequestStaffSearch = function(sProjectCd, sContractNo)
         {
        	// 조건값(Rarameter) 셋팅
        	this.gfnAddSendParameter("PROJECT_CODE", sProjectCd);
        	this.gfnAddSendParameter("CONTRACT_NO",  sContractNo);

        	// 조회용 Output dataset 세팅
        	this.gfnAddOutputDataset("ds_RequestStaff",	"ds_output");
        	this.gfnCommonTransaction("SS_Presales_S03", "SS_Presales_S03", null, false);
         };

          this.fnContractMainInfoSearch = function(sBtnId)
          {
        	if (this.fnGetChangeDs() || this.gfnIsUpdateDs(this.dsList)) {
        		this.alert(this.gfnGetTransTxt(1364,"변경된 데이터가 존재 합니다. 저장후 진행해 주세요"));
        		return "0";
        	}

        	/*	여신프로세스 처리	*/
        	this.FV_BUTTON_TYPE = sBtnId;
        	this.gfnAddSendParameter("CONTRACT_MAIN",  this.dsList.getColumn(this.dsList.rowposition, "CONTRACT_MAIN"));
        	this.gfnAddSendParameter("PROJECT_CODE",  this.dsList.getColumn(this.dsList.rowposition, "PROJECT_CODE"));
        	this.gfnAddOutputDataset("ds_ContractMainInfo",	"ds_output");
        	this.gfnAddOutputDataset("ds_CostsheetInfo",	"ds_output2");
        	this.gfnCommonTransaction("SS_Presales_S06", "SS_Presales_S06", null, false);

        	return this.fnCheckCostSheet(this.FV_BUTTON_TYPE);
          }

         this.fnCheckCostSheet = function(sBtnId)
         {
        	var sRtnVal = "1";
        	var nRowIdx = this.dsList.rowposition;
        	var sContractAmt = this.dsList.getColumn(nRowIdx, "CONTRACT_AMT");				// 매출(예상)금액
        	var sClPsAmt = this.ds_ContractMainInfo.getColumn(0, "CL_PS");					// 여신한도_제품/제품+용역
        	var sRestmt = this.ds_ContractMainInfo.getColumn(0, "REST");					// 잔여
        	var sCompanyState = this.ds_ContractMainInfo.getColumn(0, "COMPANY_STATE");		// 회사상태
        	var sClExceptionCd = this.ds_ContractMainInfo.getColumn(0, "CL_EXCEPTION_CODE");// 회사여신 예외항목
        	var sCcSeq = this.ds_CostsheetInfo.getColumn(0, "CC_SEQ");						// 사전원가표 작업여부 확인용

        	var nOverbudget = 0;

        	if (nexacro.toNumber(sClPsAmt) > 0 && !this.gfnIsEmpty(sRestmt)) {
        		nOverbudget = nexacro.toNumber(sRestmt) - nexacro.floor((nexacro.toNumber(sContractAmt) * 0.9));
        	}

        	if (sBtnId == "btn_Order_Confirm")
        	{
        		if (sCompanyState != "001") {			// 회사상태가 (N/A)정상이 아닌 경우
        			if (this.gfnIsEmpty(sCcSeq)) {		// 사전원가표 작업 없는 경우
        				this.alert(this.gfnGetTransTxt(1635,"계약처 회사상태(@1@)를 확인 바랍니다. 사전원가표 진행 대상입니다.",[this.ds_ContractMainInfo.getColumn(0, "COMPANY_STATE_NAME")]));
        				return "0";
        			}
        		}

        		// 여신 초과 알림
        		if (nOverbudget < 0 ) {
        		/*
        			회사 여신 예외항목(CL_EXCEPTION_CODE) 기타(상계가능)(006), 정부/공공기관(007), 해외기업(008)
        			경우는 예외로 계약확정 가능(이외는 사전원가표 작성필)
        		*/
        			if (sClExceptionCd != "006" && sClExceptionCd != "007" && sClExceptionCd != "008") {
        				if (this.gfnIsEmpty(sCcSeq)) {		// 사전원가표 작업 없는 경우
        					this.alert(this.gfnGetTransTxt(1971,"(@1@) 여신이 초과 되었습니다. 사전원가표 진행 바랍니다.",[this.ds_ContractMainInfo.getColumn(0, "COMPANY_NAME")]));
        					return "0";
        				}
        			}
        		}
        	}

        	if (sClExceptionCd != "006" && sClExceptionCd != "007" && sClExceptionCd != "008") {
        		if (this.gfnIsEmpty(this.ds_ContractMainInfo.getColumn(0, "CL_APPROVAL_DATE"))) {
        			if (this.confirm(this.gfnGetTransTxt(1972,"(@1@)의 여신평가 미진행 되었습니다.\n완료 후 진행 바랍니다.\n사업지원팀에 여신평가 요청 하시겠습니까?",[this.ds_ContractMainInfo.getColumn(0, "COMPANY_NAME")]))) {
        				// [Y] (자동 메일발송)
        				this.fn_SendMail("1");
        			}
        			sRtnVal = "0";
        		} else if (this.gfnIsEmpty(this.ds_ContractMainInfo.getColumn(0, "CLH_SEQ"))) {
        			var sMaxYear = this.ds_ContractMainInfo.getColumn(0, "MAX_YEAR");
        			if (this.gfnIsEmpty(sMaxYear)) {
        				if (this.confirm(this.gfnGetTransTxt(1972,"(@1@)의 여신평가 미진행 되었습니다.\n완료 후 진행 바랍니다.\n사업지원팀에 여신평가 요청 하시겠습니까?",[this.ds_ContractMainInfo.getColumn(0, "COMPANY_NAME")]))) {
        					// [Y] (자동 메일발송)
        					this.fn_SendMail("1");
        				}
        			} else {
        				if (this.confirm(this.gfnGetTransTxt(1973,"(@1@)의 여신평가 [@2@]년 입니다.\n최근 재무정보 업데이트 후 진행 바랍니다.\n사업지원팀에 여신평가 요청 하시겠습니까?",[this.ds_ContractMainInfo.getColumn(0, "COMPANY_NAME"),sMaxYear]))) {
        					// [Y] (자동 메일발송)
        					this.fn_SendMail("2");
        				}
        			}
        			sRtnVal = "0";
        		}
        	}

        	return sRtnVal
         }

          // 삭제 처리
         this.fnDeleteData = function()
         {
        	if (this.dsList.rowcount<=0) {
        		this.alert(this.gfnGetTransTxt(1497,"삭제할 데이터가 존재 하지 않습니다."));
        		return;
        	}

        	if (this.confirm(this.gfnGetTransTxt(1734,"선택한 계약을 삭제 하시겠습니까?"))) {

        		var sProjectCd = this.dsList.getColumn(this.dsList.rowposition, "PROJECT_CODE");
        		if (!this.gfnIsEmpty(sProjectCd)) {
        			this.fnRequestStaffSearch(sProjectCd, null);
        			if (this.ds_RequestStaff.rowcount > 0)
        			//if (this.ds_RequestStaff.rowcount > 0 && objDs.rowcount==1)
        			{
        				this.alert(this.gfnGetTransTxt(1498,"해당 프로젝트에 지원인력 요청 건이 있어 삭제 할수 없습니다.\n지원요청 삭제후 처리하세요"));
        				return;
        			}
        		}

        		this.dsList.deleteRow(this.dsList.rowposition);
        		this.dsPurchaseList.deleteAll();
        	}
         }


        // 화면 콜백
        this.fnCallBack = function (strSvcID, nErrorCode, strErrorMag)
        {
        	if (nErrorCode<0) {
        		this.alert("["+nErrorCode+"] "+strErrorMag);
        		return
        	}
        	switch (strSvcID)
        	{
        		case "gfnGetCode":
        			this.ds_cmm_Role2.assign(this.ds_cmm_Role);
        			this.ds_cmm_Role.filter("VAL2=='S'");
        			this.ds_cmm_Role2.filter("VAL2=='T'");

        			break;
        		case "SS_Presales_S01":
        			this.dsList.set_rowposition(this.nRowPosition);
        			break;
        		case "SS_Presales_S02":
        			break;
        		case "SS_Presales_S06":
        			//this.fnCheckCostSheet(this.FV_BUTTON_TYPE);
        			break;
        		case "SS_Presales_R01":
        			this.fnQueryData("Save");
        			break;
        		case "SS_Presales_R02":
        			this.alert(this.gfnGetTransTxt(1499,"계약확정이 완료 되었습니다."));

        			if(this.FV_CO_CD != "J02") {
        				this.fnSendSMS();			// 메시지 전송 (일본법인 제외)
        			}

        			this.fnContractOkSendEmail();	// 메일 전송
        			this.fnQueryData("Save");
        			break;
        		case "getMM":
        			if (this.ds_MM.rowcount>0) {
        				var nMM = this.ds_MM.getColumn(0, "MM");
        				var nROW = this.ds_MM.getColumn(0, "ROW");
        				this.sObjDs.setColumn(nROW, "MEN_MONTH", nMM);
        			}
        			break;
        	}
         }


         this.fnSendSMS = function ()
         {
        	var sSendType = "SELF";
        	var sTelNoKind = "M";

        	var sAlimTalkService = "PRESALES_CONTRACT";

        	// Massage 처리
        	var sClientNm = this.div_ClientName.getData();
        	var sContractNm = this.edt_ContractName.value;
        	var sMsg = sClientNm+":"+sContractNm;
        	if (this.commUtil.getByteSize(sMsg) > 75) {
        		sMsg = sMsg.substr(0, 75);
        	}
        	sMsg = "수주:" + sMsg;


        	var arrSmsInfo = new Array();
        	// [화면별 권한] 계약확정 SMS
        	arrSmsInfo[0] = {};
        	arrSmsInfo[0].pvUserKind = "FORM_AUTH";


        	if (this.FV_CO_CD == "W01") {
        		arrSmsInfo[0].pvUserCode = "235,8";
        	} else {
        		arrSmsInfo[0].pvUserCode = "235,3";
        	}

        	//this.gfnAddSmsList(arrSmsInfo);		// 수신자 처리
        	this.gfnAddAlimTalkList(arrSmsInfo);		// 수신자 처리
        	//this.gfnSendSms ("SendSMS", sSendType, sTelNoKind, "", sMsg, "");	// SMS 발송
        	this.gfnSendAlimTalk ("SendSMS", sSendType, sTelNoKind, "", sMsg, "", sAlimTalkService);	// 알림톡 발송
         }


         this.fnContractOkSendEmail = function ()
         {
        	//받는사람 중복된는 경우가 있어서 초기화 한번 해줌 [SRH_SEQ:84209]
        	nexacro.getApplication().gdsEmailList.clearData();
        	var arrEmailInfo = new Array();

        	//계약확정 Email 수신
        	arrEmailInfo[0] = {};
        	arrEmailInfo[0].pvType = "TO";
        	arrEmailInfo[0].pvUserKind = "FORM_AUTH";

        	if (this.FV_CO_CD == "W01") {
        		arrEmailInfo[0].pvUserCode = "235,9";
        	} else if(this.FV_CO_CD == "J02") {
        		arrEmailInfo[0].pvUserCode = "235,10"; // 김진희 책임

        		var sEmpNo = this.dsList.getColumn(this.dsList.rowposition, "SALES_EMP_NO");
        	} else {
        		arrEmailInfo[0].pvUserCode = "235,7";
        	}
        	this.gfnAddEmailList(arrEmailInfo);

        	// Massage 처리
        	var sClientNm = this.div_ClientName.getData();
        	var sProjectNm = this.edt_ProjectName.value;
        	var sContractNm = this.edt_ContractName.value;
        	var sSalesEmpNm = this.cmb_SalesEmpNo.text;
        	var sContractDate = this.cal_ContractDate.text;
        	var strTitle = "";
        	var strContents = "";

        	if(this.FV_CO_CD == "J02") {
        		strTitle = ""+sClientNm+" 顧客社 契約 確定 案内";
        		strContents =
        		 '<html> \n'
        		+'<head> \n'
        		+'<meta charset="utf-8"/> \n'
        		+'<title>顧客社 契約 確定 案内</title> \n'
        		+'<body> \n'
        		+'<p style="margin: 0px; font-family: 돋움, Dotum, Helvetica, sans-serif; font-size: 12px; text-align: center;"><b>契約 確定 案内</b></p> <p> \n'
        		+'<p style="margin: 0px; font-family: 돋움, Dotum, Helvetica, sans-serif; font-size: 12px;">＊顧&nbsp;&nbsp;&nbsp;客&nbsp;&nbsp;&nbsp;社 : '+sClientNm+'</p> \n'
        		+'<p style="margin: 0px; font-family: 돋움, Dotum, Helvetica, sans-serif; font-size: 12px;">＊プ&nbsp;ロ&nbsp;ジェク&nbsp;ト : '+sProjectNm+'</p> \n'
        		+'<p style="margin: 0px; font-family: 돋움, Dotum, Helvetica, sans-serif; font-size: 12px;">＊契&nbsp;&nbsp;&nbsp;約&nbsp;&nbsp;&nbsp;名 : '+sContractNm+'</p>\n'
        		+'<p style="margin: 0px; font-family: 돋움, Dotum, Helvetica, sans-serif; font-size: 12px;">＊担&nbsp;当&nbsp;営&nbsp;業 : '+sSalesEmpNm+'</p>\n'
        		+'<p style="margin: 0px; font-family: 돋움, Dotum, Helvetica, sans-serif; font-size: 12px;">＊契約 予定日 : '+sContractDate+'</p> <p>\n'
        		+'</body> \n'
        		+'</html> \n';
        	} else {
        		strTitle = sClientNm+" 계약확정 확정 안내";
        		strContents =
        		 '<html> \n'
        		+'<head> \n'
        		+'<meta charset="utf-8"/> \n'
        		+'<title>계약확정</title> \n'
        		+'<body> \n'
        		+'<p style="margin: 0px; font-family: 돋움, Dotum, Helvetica, sans-serif; font-size: 12px; text-align: center;"><b>계약 확정 안내</b></p> <p> \n'
        		+'<p style="margin: 0px; font-family: 돋움, Dotum, Helvetica, sans-serif; font-size: 12px;">＊고&nbsp;&nbsp;&nbsp;객&nbsp;&nbsp;&nbsp;사 : '+sClientNm+'</p> \n'
        		+'<p style="margin: 0px; font-family: 돋움, Dotum, Helvetica, sans-serif; font-size: 12px;">＊프&nbsp;로&nbsp;젝&nbsp;트 : '+sProjectNm+'</p> \n'
        		+'<p style="margin: 0px; font-family: 돋움, Dotum, Helvetica, sans-serif; font-size: 12px;">＊담&nbsp;당&nbsp;영&nbsp;업 : '+sSalesEmpNm+'</p>\n'
        		+'<p style="margin: 0px; font-family: 돋움, Dotum, Helvetica, sans-serif; font-size: 12px;">＊계약예정일 : '+sContractDate+'</p> <p>\n'
        		+'</body> \n'
        		+'</html> \n';
        	}
        	this.gfnSendEmail("ContractOkSendEmail", "SELF", "", strTitle, strContents);
         }


         /************************************************************************************************
         * FORM 공통 FUNCTION 영역
         ************************************************************************************************/
        this.fnAddContract = function ()
        {
        	var nFindRow = this.fnGetFindRowType(this.dsList, "INSERT");
        	if (nFindRow>=0) {
        		this.alert(this.gfnGetTransTxt(1500,"신규건이 존재 합니다. 처리완료후 추가하세요"));
        		return;
        	}

        	this.div_InConfirm.form.rd_kind.set_index(0);


        	var nLeft = (this.width - 150) / 2
        	this.div_InConfirm.set_left(nLeft);
        	this.div_InConfirm.set_visible(true);
        }


        this.fnGetFindRowType = function(objDs, sRowType)
        {
        	var nRtnVal = -1;
        	var nRowCnt = objDs.rowcount;
        	for (i=0; i<nRowCnt; i++) {
        		var nRowType = objDs.getRowType(i);

        		if (sRowType == "INSERT") {
        			if (nRowType == 2) {	// Dataset.ROWTYPE_INSERT
        				nRtnVal = i;
        				break;
        			}
        		} else if (sRowType == "UPDATE") {
        			if (nRowType == 4) {	// Dataset.ROWTYPE_INSERT
        				nRtnVal = i;
        				break;
        			}
        		}
        	}
        	return nRtnVal;
        }


        this.fnGetChangeDs = function()
        {
        	var objDsList = {
        		ContProd: this.dsContractProd,
        		ContGoods: this.dsContractGoods,
        		ContSi: this.dsContractSi,
        		Purchase: this.dsPurchaseList,
        		Schedule: this.dsScheduleList,
        		AddrBook: this.dsAddressbookList,
        		ContTech:this.dsContractCS
        	}

        	return this.gfnIsUpdateDsList(objDsList);
        }

        this.fnGetChangeMainDs = function()
        {
        	var objDsList = {
        		ContMainDs: this.dsList
        	}

        	return this.gfnIsUpdateDsList(objDsList);
        };

        // 수주확정(계약확정) 처리
        this.fnContractOk = function()
        {
        	//견적서 파일 유무 확인
        	this.gfnAddSendParameter("PROJECT_CODE", this.dsList.getColumn(this.dsList.rowposition, "PROJECT_CODE"));
        	// 조회용 Output dataset 세팅
        	this.gfnAddOutputDataset("dsFileCnt", "dsOutput");
        	this.gfnCommonTransaction("Get_FileCnt", "SS_Presales_S05", null, false);

        	if(this.FV_CO_CD == "J02") {
        		//견적서 유무 확인
        		this.gfnAddSendParameter("PROJECT_CODE", this.dsList.getColumn(this.dsList.rowposition, "PROJECT_CODE"));
        		// 조회용 Output dataset 세팅
        		this.gfnAddOutputDataset("dsEstimateCnt", "dsOutput");
        		this.gfnAddOutputDataset("dsEstimateContract", "dsOutput1");
        		this.gfnCommonTransaction("Get_EstimateCnt", "SS_Presales_S07", null, false);

        		/*
        			[1] TBJ 견적 작성이 있는 경우 각 계약 별 최종여부 체크
        			1. 계약 별 최종 견적 존재 시 계약확정 처리
        			2. 계약 별 중 최종 견적이 없는 경우 confirm 창 띄워서 여부 계약 확정 여부 물어보기

        			[2] TBJ 견적 작성을 안한 경우
        			1. 견적서 파일 첨부 O -> 계약확정 처리
        			2. 견적서 파일 첨부 X -> confirm Y : 계약확정처리 N : 계약확정 미처리
        		*/
        		var sCnt = this.dsEstimateCnt.getColumn(0, "CNT");

        		if(sCnt > 0) { // [1] 케이스
        			if(this.dsEstimateContract.rowcount > 0) {
        				if(!this.confirm(this.gfnGetTransTxt(32850,"최종견적 체크 미진행 계약건이 존재합니다. \n예: 계약확정 진행 아니오 : 계약확정 미진행"))) return;
        			}
        		} else { // [2] 케이스
        			if(this.dsFileCnt.getColumn(0, "CNT")==0)
        			{
        				if(!this.confirm(this.gfnGetTransTxt(32853,"견적서 파일이 첨부 되지 않았습니다. 그래도 계약확정 하시겠습니까?"))) return;
        // 				alert(this.gfnGetTransTxt(1203,"견적서 파일이 첨부 되지 않았습니다."));// 견적서 첨부 후 진행 바랍니다.");
        // 				return;
        			}
        		}
        	} else {
        		if(this.dsFileCnt.getColumn(0, "CNT")==0)
        		{
        			alert(this.gfnGetTransTxt(1203,"견적서 파일이 첨부 되지 않았습니다."));// 견적서 첨부 후 진행 바랍니다.");
        			//return;
        		}
        	}

        	var sContractNo = this.dsList.getColumn(this.dsList.rowposition, "CONTRACT_NO");

        	if (this.gfnIsEmpty(sContractNo)) {
        		alert(this.gfnGetTransTxt(1501,"신규건은 계약확정을 진행 할수 없습니다. 저장후 진행하세요"));
        		return;
        	}
        	this.dsList.set_enableevent(false);
        	this.dsList.setColumn(this.dsList.rowposition, "CONTRACT_STATUS",	"2");
        	this.dsList.set_enableevent(true);

        	// 입력용 Input Dataset 세팅
        	this.gfnAddInputDataset ("dsList", "dsInput");
        	this.gfnCommonTransaction("SS_Presales_R02", "SS_Presales_R02");
        }

        this.fnRequestLicense = function()
        {
        	var nCurrow		= this.dsContractProd.rowposition;
        	var sProductCd	= this.dsContractProd.getColumn(nCurrow, "PRODUCT_CODE");
        	var sProductName= this.dsContractProd.getColumn(nCurrow, "PRODUCT_NAME");

        	var Argument = {pvProductCode:sProductCd, pvProductName:sProductName};
        	this.commUtil.popup(this, "popupRequestLicenseConfirm", "Sales::SS_RequestLicenseConfirm.xfdl", -1, -1, 450, 200, true, false, false, Argument, "fnPopupCallBack");
        }

        this.fnPopupRequestLicense = function(sProductCode, sProductName, sProdShortName, sProductVer)
        {
        	if (this.dsContractProd.rowcount<=0) {
        		this.alert(this.gfnGetTransTxt(1502,"제품매출 상세내역을 등록 하세요"));
        		return;
        	}

        	if (this.fnGetChangeDs()) {
        		this.alert(this.gfnGetTransTxt(1333,"저장후 라이센스 요청하시기 바랍니다"));
        		return;
        	}

        	var bAppend = true;
        	var nCurrow = this.dsContractProd.rowposition;
        	var sContractNo		= this.dsContractProd.getColumn(nCurrow, "CONTRACT_NO");
        	var sContractName	= this.dsContractProd.getColumn(nCurrow, "CONTRACT_NAME");
        	var sLicenseKind =  "";

        	if (sProductCode.substr(0, 5) == "G0101")	sLicenseKind = "Chart";
        	else if (sProdShortName.indexOf("MP")>=0)	sLicenseKind = "MP";
        	else if (sProdShortName.indexOf("XP ")>=0)	sLicenseKind = "XP";
        	else if (sProdShortName.indexOf("NP")>=0)	sLicenseKind = "NP";
        	else 										sLicenseKind = sProdShortName;

        	// Chart 예외처리
        	if (this.gfnIsEmpty(sProdShortName)) {
        		if (sProductCode.substr(0, 5) == "G0101")	sLicenseKind = "Chart";
        	}


        	var nRow			= this.dsList.rowposition;
        	var sProjectCode	= this.dsList.getColumn(nRow, "PROJECT_CODE");
        	var sProjectName	= this.dsList.getColumn(nRow, "PROJECT_NAME");
        	var sClientCode		= this.div_ClientName.getCode();
        	var sClientName		= this.div_ClientName.getData();

        	if (this.gfnIsEmpty(sContractNo)) {
        		alert(this.gfnGetTransTxt(1334,"먼저 계약내용을 저장하십시요."));
        		return;
        	}


        	// 선택된 제품계약 세부 정보 복사
        	this.ds_ParamLic.clearData();
        	this.ds_ParamLic.addRow();

        	var nCurrow = this.dsContractProd.rowposition;
        	this.ds_ParamLic.setColumn(0, "PRODUCT_CODE",	sProductCode);
        	this.ds_ParamLic.setColumn(0, "PRODUCT_NAME",	sProductName);
        	this.ds_ParamLic.setColumn(0, "PRODUCT_VERSION",sProductVer);
        	this.ds_ParamLic.setColumn(0, "PRODUCT_LIST",	"");
        	this.ds_ParamLic.setColumn(0, "PLATFORM_LIST",	"");
        	this.ds_ParamLic.setColumn(0, "FUNCTION_LIST",	"");
        	this.ds_ParamLic.setColumn(0, "ISDEV_FLAG",		"1");
        	// bSucc = this.ds_ParamLic.copyRow(0, this.dsContractProd, this.dsContractProd.rowposition);

        	var Argument = {pvLicenseKind:sLicenseKind, pvProjectCode:sProjectCode, pvProjectName:sProjectName, pvContractNo:sContractNo, pvContractName:sContractName, pvClientCode:sClientCode, pvClientName:sClientName, pvParamDsj:this.ds_ParamLic};
        	this.commUtil.popup(this, "popupSalesRequestLicense", "Sales::SP_RequestLicense_pop.xfdl", -1, -1, 1200, 600, true, false, false, Argument, "fnPopupCallBack");
        }

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        // 목록 Row 변경시 세부 목록 조회
        this.dsList_onrowposchanged = function(obj,e)
        {
        	// 추가계약인 상태에서 Row 변경 시 Validation 체크
        	if(this.sInsertType=="02" && this.fnGetChangeMainDs()) {
        		if (this.confirm(this.gfnGetTransTxt(32859, "변경된 데이터가 존재 합니다. 저장하지 않으면 등록된 데이터는 삭제됩니다. 계속하시겠습니까?")))	{
        			obj.deleteRow(e.oldrow);
        			this.sInsertType = "";
        		} else {
        			this.dsList.set_enableevent(false);
        			obj.set_rowposition(e.oldrow);
        			this.FV_PARENT_FORM.div_Attachment.SOURCE_SEQ = this.dsList.getColumn(e.oldrow, "CONTRACT_NO");
        			this.dsList.set_enableevent(true);
        			return;
        		}
        	}

        	this.sInsertType = "";

        	// 권한 처리
        	var bBtnCtr = this.fnAuthConfig();
        	var evtRow = e.newrow;

        	if(this.SAVE_FLAG) {
        		evtRow = this.nRowPosition;
        		this.SAVE_FLAG = false;
        	}

        	// 파일 Upload 처리 (SOURCE_SEQ=="CONTRACT_NO")
        	this.FV_PARENT_FORM.div_Attachment.set_url("");
        	this.FV_PARENT_FORM.div_Attachment.SOURCE_SEQ = this.dsList.getColumn(evtRow, "PROJECT_CODE");
        	this.FV_PARENT_FORM.div_Attachment.set_url("Common::COM_Attachment.xfdl");
        	// 견적서 버튼 활성화
        	this.FV_PARENT_FORM.btn_Estimate.set_enable(true);

        	// 변경여부 확인
        	if (this.fnGetChangeDs()) {
        		if (!this.confirm(this.gfnGetTransTxt(1684, "변경된 데이터가 존재 합니다 계속 진행 하시겠습니까?")))	{
        			this.dsList.set_enableevent(false);
        			obj.set_rowposition(e.oldrow);
        			this.FV_PARENT_FORM.div_Attachment.SOURCE_SEQ = this.dsList.getColumn(e.oldrow, "CONTRACT_NO");
        			this.dsList.set_enableevent(true);
        			return;
        		}
        	}

        	// 연결 프로젝트 활성화 처리
        	var sRelatedProjectCd = obj.getColumn(evtRow, "RELATED_PROJECT_CODE");
        	if (this.gfnIsEmpty(sRelatedProjectCd)) { this.div_RelatedProject.set_enable(false); }
        	else 									{ this.div_RelatedProject.set_enable(true); }

        	// 계약 및 세부 정보 조회
        	var sProjectCd = obj.getColumn(evtRow, "PROJECT_CODE");
        	this.fnSSearch(sProjectCd);

        	// 계약확정 버튼 활성화
        	this.fnCheckOrderConfirm(evtRow);

        };

        this.fnCheckOrderConfirm = function(nRow, sDocStatus)
        {
        	// 권한 처리
        	var bBtnCtr = this.fnAuthConfig();

        	//사전원가표 상신후 처리
         	if(nRow==-1 && !this.gfnIsEmpty(sDocStatus))
         	{
         		this.dsList.set_enableevent(false);
        		nRow = this.dsList.rowposition;
         		this.dsList.setColumn(nRow, "DOC_STATUS", sDocStatus);
        		this.dsList.set_enableevent(true);
         	}

        	// 계약확정 버튼 활성화
        	if (((this.dsList.getColumn(nRow, "DOC_STATUS") == "FINISH")		//사전원가표 전자결재 완료이거나
        		|| this.gfnIsEmpty(this.dsList.getColumn(nRow, "DOC_STATUS")) 	//사전원가표 전자결재가 없을 경우
        		&& bBtnCtr)
        		|| this.commUtil.getFormAuthority(235,6))					//전자결제 무관하게 계약확정
        		this.FV_PARENT_FORM.btn_Order_Confirm.set_enable(true);
        	else
        		this.FV_PARENT_FORM.btn_Order_Confirm.set_enable(false);
        }

        // 사업구분 변경시 담당영업 변경
        this.cmb_BusinessType_onitemchanged = function(obj,e)
        {
        	this.fnSalesEmpSerch(e.postvalue);
        };

        // 담당영업 변경
        this.cmb_SalesEmpNo_onitemchanged = function(obj,e)
        {
        	var nCurrow = this.dsList.rowposition;
        	this.dsList.setColumn(nCurrow, "SALES_EMP_NO",		this.ds_cmm_SalesEmp.getColumn(e.postindex, "EMP_NO"));
        	this.dsList.setColumn(nCurrow, "SALES_CO_CD",		this.ds_cmm_SalesEmp.getColumn(e.postindex, "CO_CD"));

        	if (this.dsList.getRowType(nCurrow) != 2) {
        		this.dsList.setColumn(nCurrow, "SALES_DEPT_CD",		this.ds_cmm_SalesEmp.getColumn(e.postindex, "DEPT_CD"));
        		this.dsList.setColumn(nCurrow, "SALES_DEPT_NAME",	this.ds_cmm_SalesEmp.getColumn(e.postindex, "DEPT_NAME"));
        	}
        };

        this.CommAddRow_onclick = function(obj,e)
        {
        	var nAddRow = 0;

        	if (this.dsList.rowcount<=0) {
        		this.alert(this.gfnGetTransTxt(1503,"계약이 존재 하지 않습니다."));
        		return;
        	}


        	switch (obj.name)
        	{
        		case "btn_Add":
        			nTabIdx = this.tab_Progess.tabindex;
        			if (nTabIdx == 0) {
        				var sContractNo = this.dsList.getColumn(this.dsList.rowposition, "CONTRACT_NO");
        				if(!this.gfnIsEmpty(sContractNo)) {
        					// 진행상황
        					nAddRow = this.dsScheduleList.addRow();
        					this.tab_Progess.tpg_Progess.form.cal_IssueDate.set_value(this.gfnToday());
        					this.dsScheduleList.setColumn(nAddRow, "PROJECT_CODE",	this.dsList.getColumn(this.dsList.rowposition, "PROJECT_CODE"));
        					this.dsScheduleList.setColumn(nAddRow, "CONTRACT_NO", 	sContractNo);
        					this.dsScheduleList.setColumn(nAddRow, "REPORT_FLAG",	"0");
        					this.dsScheduleList.setColumn(nAddRow, "OPEN_FLAG",		"0");
        				}

        			} else {
        				// 담당자
        				var sClientCd = this.dsList.getColumn(this.dsList.rowposition, "CLIENT_CODE");
        				var sCompanyCd = this.dsList.getColumn(this.dsList.rowposition, "CONTRACT_MAIN");

        				if (this.gfnIsEmpty(sCompanyCd)) {
        					this.alert(this.gfnGetTransTxt(1465,"고객사를 입력하세요."));
        					return;
        				}

        				var sArgument = {CLIENT_CODE:sClientCd, COMPANY_CODE:sCompanyCd};
        				this.commUtil.popup(this, "CompanyTypeSelect", "Sales::SC_CompanyTypeSelect.xfdl", -1, -1, null, null, true, true, false, sArgument, "fnPopupCallBack");
        			}
        		break;
        		case "btn_ProdAdd":

        			var nRowIdx = this.dsContractProd.rowcount -1;
        			if (this.gfnIsEmpty(this.dsContractProd.getColumn(nRowIdx, "PRODUCT_CODE")) && nRowIdx>=0) {

        				this.alert(this.gfnGetTransTxt(1474,"[제품매출] 제품정보를 입력하세요"));
        				return;
        			}

        			nAddRow = this.dsContractProd.addRow();
        			this.dsContractProd.setColumn(nAddRow, "PROJECT_CODE", this.dsList.getColumn(this.dsList.rowposition, "PROJECT_CODE"));
        			//this.dsContractProd.setColumn(nAddRow, "CONTRACT_NO", this.dsList.getColumn(this.dsList.rowposition, "CONTRACT_NO"));
        			this.dsContractProd.setColumn(nAddRow, "CONTRACT_TYPE", "P");
        			this.dsContractProd.setColumn(nAddRow, "ANNUAL_FLAG", "0");
        			this.dsContractProd.setColumn(nAddRow, "STRATEGY_SALES_FLAG", "0");
        			this.dsContractProd.setColumn(nAddRow, "INSERT_STATUS", "I");

        			//trace("CONTRACT_SEQ:"+this.dsList.getColumn(this.dsList.rowposition, "CONTRACT_SEQ"));
        			this.dsContractProd.setColumn(nAddRow, "CONTRACT_SEQ", this.dsList.getColumn(this.dsList.rowposition, "CONTRACT_SEQ"));

        		break;
        		case "btn_GoodsAdd":
        			var nRowIdx = this.dsContractGoods.rowcount -1;
        			if (this.gfnIsEmpty(this.dsContractGoods.getColumn(nAddRow, "PRODUCT_CODE")) && nRowIdx>=0) {

        				this.alert(this.gfnGetTransTxt(1476,"[상품매출] 상품정보를 입력하세요"));
        				return;
        			}

        			nAddRow = this.dsContractGoods.addRow();
        			this.dsContractGoods.setColumn(nAddRow, "PROJECT_CODE", this.dsList.getColumn(this.dsList.rowposition, "PROJECT_CODE"));
        			//this.dsContractGoods.setColumn(nAddRow, "CONTRACT_NO", this.dsList.getColumn(this.dsList.rowposition, "CONTRACT_NO"));
        			this.dsContractGoods.setColumn(nAddRow, "CONTRACT_TYPE", "G");
        			this.dsContractGoods.setColumn(nAddRow, "ANNUAL_FLAG", "0");
        			this.dsContractGoods.setColumn(nAddRow, "STRATEGY_SALES_FLAG", "0");
        			this.dsContractGoods.setColumn(nAddRow, "INSERT_STATUS", "I");

        			//trace("CONTRACT_SEQ:"+this.dsList.getColumn(this.dsList.rowposition, "CONTRACT_SEQ"));
        			this.dsContractGoods.setColumn(nAddRow, "CONTRACT_SEQ", this.dsList.getColumn(this.dsList.rowposition, "CONTRACT_SEQ"));

        		break;
        		case "btn_SiAdd":
        			nAddRow = this.dsContractSi.addRow();
        			this.dsContractSi.setColumn(nAddRow, "PROJECT_CODE", this.dsList.getColumn(this.dsList.rowposition, "PROJECT_CODE"));
        			if (this.dsContractSi.rowcount > 0) {
        				this.dsContractSi.setColumn(nAddRow, "CONTRACT_NO", this.dsContractSi.getColumn(0, "CONTRACT_NO"));
        			}
        			this.dsContractSi.setColumn(nAddRow, "CONTRACT_TYPE", "S");
        			this.dsContractSi.setColumn(nAddRow, "STRATEGY_SALES_FLAG", "0");

        			//trace("CONTRACT_SEQ:"+this.dsList.getColumn(this.dsList.rowposition, "CONTRACT_SEQ"));
        			this.dsContractSi.setColumn(nAddRow, "CONTRACT_SEQ", this.dsList.getColumn(this.dsList.rowposition, "CONTRACT_SEQ"));

        		break;
        		case "btn_CSAdd":
        			nAddRow = this.dsContractCS.addRow();
        			this.dsContractCS.setColumn(nAddRow, "PROJECT_CODE", this.dsList.getColumn(this.dsList.rowposition, "PROJECT_CODE"));
        			this.dsContractCS.setColumn(nAddRow, "CONTRACT_NO", this.dsList.getColumn(this.dsList.rowposition, "CONTRACT_NO"));
        			this.dsContractCS.setColumn(nAddRow, "CONTRACT_TYPE", "T");
        			this.dsContractCS.setColumn(nAddRow, "STRATEGY_SALES_FLAG", "0");

        			//trace("CONTRACT_SEQ:"+this.dsList.getColumn(this.dsList.rowposition, "CONTRACT_SEQ"));
        			this.dsContractCS.setColumn(nAddRow, "CONTRACT_SEQ", this.dsList.getColumn(this.dsList.rowposition, "CONTRACT_SEQ"));

        		break;
        		case "btn_PurAdd":
        			var expr = "CODE == 'C' || CODE == 'D' || CODE == 'G'";

        			var sArgument = {sFilterExpr:expr};
        			this.commUtil.popup(this, "SP_PurchaseContractTypeSelect", "Sales::SP_PurchaseContractTypeSelect.xfdl", -1, -1, 144, 304, true, false, false, sArgument, "fnPopupCallBack");
        		break;
        	}
        };


        this.CommDelRow_onclick = function(obj,e)
        {
        	var sConfirmMsg = "";
        	var objDs;
        	switch (obj.name)
        	{
        		case "btn_Del":
        			nTabIdx = this.tab_Progess.tabindex;
        			if (nTabIdx == 0) {
        				objDs = this.objects["dsScheduleList"];
        				sConfirmMsg = this.gfnGetTransTxt(1974,"해당 일정을 삭제하시겠습니까?");
        			} else {
        				objDs = this.objects["dsAddressbookList"];
        				sConfirmMsg = this.gfnGetTransTxt(1975,"해당 담당자를 삭제하시겠습니까?");
        			}
        		break;
        		case "btn_ProdDel":
        			objDs = this.objects["dsContractProd"];
        			sConfirmMsg = this.gfnGetTransTxt(1976,"해당 제품매출 상세를 삭제하시겠습니까?");
        		break;
        		case "btn_GoodsDel":
        			objDs = this.objects["dsContractGoods"];
        			sConfirmMsg = this.gfnGetTransTxt(1977,"해당 상품매출 상세를 삭제하시겠습니까?");
        		break;
        		case "btn_SiDel":
        			objDs = this.objects["dsContractSi"];
        			sConfirmMsg = this.gfnGetTransTxt(1978,"해당 용역매출 상세를 삭제하시겠습니까?");
        		break;
        		case "btn_CSDel":
        			objDs = this.objects["dsContractCS"];
        			sConfirmMsg = this.gfnGetTransTxt(1979,"해당 컨설팅 서비스매출 상세를 삭제하시겠습니까?");
        		break;
        		case "btn_PurDel":
        			objDs = this.objects["dsPurchaseList"];
        			sConfirmMsg = this.gfnGetTransTxt(1980,"해당 매입내역을 삭제하시겠습니까?");
        		break;
        	}

        	if (objDs.rowcount<=0) {
        		this.alert(this.gfnGetTransTxt(1497,"삭제할 데이터가 존재 하지 않습니다."));
        		return;
        	}

        	if (this.confirm(sConfirmMsg))
        	{
        		var nDelRow = objDs.rowposition;

        		if (obj.name == "btn_ProdDel" || obj.name == "btn_GoodsDel" || obj.name == "btn_SiDel" || obj.name == "btn_CSDel")
        		{
        			var sContractNo = objDs.getColumn(objDs.rowposition, "CONTRACT_NO");

        			var objDs;

        			if (obj.name == "btn_ProdDel")		objDs = this.dsContractProd;
        			else if (obj.name == "btn_GoodsDel") objDs = this.dsContractGoods;
        			else if (obj.name == "btn_SiDel")	objDs = this.dsContractSi;
        			else if (obj.name == "btn_CSDel")	objDs = this.dsContractCS;


        			if (!this.gfnIsEmpty(sContractNo) && objDs.rowcount<=1) {
        				this.fnRequestStaffSearch(null, sContractNo);

        				if (this.ds_RequestStaff.rowcount > 0)
        				{
        					this.alert(this.gfnGetTransTxt(1326,"해당 매출계약의 지원인력 요청 건이 있어 삭제 할수 없습니다.\n지원요청 삭제후 처리하세요"));
        					return;
        				}
        			}
        		}

        		var sCocd = nexacro.getApplication().gdsUserInfo.getColumn(0, "CO_CD");
        		if(sCocd == "J02" && (obj.name == "btn_ProdDel" || obj.name == "btn_GoodsDel")) this.fnDelPurchase(objDs, nDelRow);
        		objDs.deleteRow(nDelRow);
        	}
        };



         // 팝업 콜백
         this.fnPopupCallBack = function(sPopupId, Variant)
        {
        	Variant = this.commUtil.popupReturn();

        	if (sPopupId == "ContractLicenseUnionReg" || sPopupId == "SS_ContractLink") {
        			// 계약 및 세부 정보 조회
        			var sProjectCd = this.dsList.getColumn(this.dsList.rowposition, "PROJECT_CODE");
        			this.fnSSearch(sProjectCd);
        	}


        	if(this.gfnIsEmpty(Variant)) {
        		return;
        	} else {
        		this.recentVariant = Variant;
        		switch(sPopupId)
        		{
        			case "popupProductSearch" : // 제품
        				var ds = new nexacro.Dataset();
        				ds.loadXML(Variant);
        				this.recentVariant = ds;

        				var findRow = this.dsContractProd.findRow("PRODUCT_CODE", ds.getColumn(0, "PRODUCT_CODE"));

        				if(findRow == -1) {
        					/*바인딩 순서 중요*/
        					this.dsContractProd.setColumn(this.dsContractProd.rowposition, "NO_PURCHASE_FLAG", ds.getColumn(0, "NO_PURCHASE_FLAG"));
        					this.dsContractProd.setColumn(this.dsContractProd.rowposition, "PRODUCT_NAME", ds.getColumn(0, "PRODUCT_NAME"));
        					this.dsContractProd.setColumn(this.dsContractProd.rowposition, "ROYALTY_TYPE", ds.getColumn(0, "ROYALTY_TYPE"));

        					if(this.FV_CO_CD == "J02") {
        						this.dsContractProd.setColumn(this.dsContractProd.rowposition, "RELATED_COMPANY_CODE", ds.getColumn(0, "RELATED_COMPANY_CODE_JAP"));
        						this.dsContractProd.setColumn(this.dsContractProd.rowposition, "RELATED_COMPANY_NAME", ds.getColumn(0, "RELATED_COMPANY_NAME_JAP"));
        					} else {
        						this.dsContractProd.setColumn(this.dsContractProd.rowposition, "RELATED_COMPANY_CODE", ds.getColumn(0, "RELATED_COMPANY_CODE"));
        						this.dsContractProd.setColumn(this.dsContractProd.rowposition, "RELATED_COMPANY_NAME", ds.getColumn(0, "RELATED_COMPANY_NAME"));
        					}
        					this.dsContractProd.setColumn(this.dsContractProd.rowposition, "PRODUCT_CODE", ds.getColumn(0, "PRODUCT_CODE"));
        					if(ds.getColumn(0, "PRODUCT_CODE").indexOf(this.cmb_SalesProduct.value)<0)
        						alert(this.gfnGetTransTxt(1504,"제품명 및 버전이 다릅니다. 다시 확인해주세요."));
        				} else {
        					alert(this.gfnGetTransTxt(22590,"동일한 제품이 존재 합니다."));
        					return;
        				}

        			break;
        			case "popupGoodsSearch" :	// 상품
        				var ds = new nexacro.Dataset();
        				ds.loadXML(Variant);
        				this.recentVariant = ds;

        				var findRow = this.dsContractGoods.findRow("PRODUCT_CODE", ds.getColumn(0, "PRODUCT_CODE"));

        				if(findRow == -1) {
        					/*바인딩 순서 중요*/
        					this.dsContractGoods.setColumn(this.dsContractGoods.rowposition, "NO_PURCHASE_FLAG", ds.getColumn(0, "NO_PURCHASE_FLAG"));
        					this.dsContractGoods.setColumn(this.dsContractGoods.rowposition, "PRODUCT_NAME", ds.getColumn(0, "PRODUCT_NAME"));
        					this.dsContractGoods.setColumn(this.dsContractGoods.rowposition, "ROYALTY_TYPE", ds.getColumn(0, "ROYALTY_TYPE"));

        					if(this.FV_CO_CD == "J02") {
        						this.dsContractGoods.setColumn(this.dsContractGoods.rowposition, "RELATED_COMPANY_CODE", ds.getColumn(0, "RELATED_COMPANY_CODE_JAP"));
        						this.dsContractGoods.setColumn(this.dsContractGoods.rowposition, "RELATED_COMPANY_NAME", ds.getColumn(0, "RELATED_COMPANY_NAME_JAP"));
        					} else {
        						this.dsContractGoods.setColumn(this.dsContractGoods.rowposition, "RELATED_COMPANY_CODE", ds.getColumn(0, "RELATED_COMPANY_CODE"));
        						this.dsContractGoods.setColumn(this.dsContractGoods.rowposition, "RELATED_COMPANY_NAME", ds.getColumn(0, "RELATED_COMPANY_NAME"));
        					}
        					this.dsContractGoods.setColumn(this.dsContractGoods.rowposition, "PRODUCT_CODE", ds.getColumn(0, "PRODUCT_CODE"));
        				} else {
        					alert(this.gfnGetTransTxt(22591,"동일한 상품이 존재합니다."));
        					return;
        				}
        			break;
        			case "popupPurProductSearch":	// 매입상품
        				var ds = new nexacro.Dataset();
        				ds.loadXML(Variant);
        				this.recentVariant = ds;

        				var sContractType = this.dsPurchaseList.getColumn(this.dsPurchaseList.rowposition, "CONTRACT_TYPE");
        				var sContractType = ds.getColumn(0, "PRODUCT_CODE").substring(0, 1);
        				// this.dsPurchaseList.setColumn(this.dsPurchaseList.rowposition, "CONTRACT_TYPE",sContractType);
        				this.dsPurchaseList.setColumn(this.dsPurchaseList.rowposition, "PRODUCT_CODE", ds.getColumn(0, "PRODUCT_CODE"));
        				this.dsPurchaseList.setColumn(this.dsPurchaseList.rowposition, "PRODUCT_NAME", ds.getColumn(0, "PRODUCT_NAME"));

        				// 연관제품 처리

        				var sRelatedProductCd = ds.getColumn(0, "RELATED_PRODUCT_CODE");
        				var sRelatedProductNm = ds.getColumn(0, "RELATED_PRODUCT_NAME");
        				if (this.gfnIsEmpty(sRelatedProductCd)) {
        					sRelatedProductCd = this.dsContractProd.getColumn(0, "PRODUCT_CODE");
        					sRelatedProductNm = this.dsContractProd.getColumn(0, "PRODUCT_NAME");
        				}

        				this.dsPurchaseList.setColumn(this.dsPurchaseList.rowposition, "RELATED_PRODUCT_CODE", sRelatedProductCd);
        				this.dsPurchaseList.setColumn(this.dsPurchaseList.rowposition, "RELATED_PRODUCT_NAME", sRelatedProductNm);


        				// 상품의 매칭된 거래처 처리
        				if (sContractType == "G") {
        					this.dsPurchaseList.setColumn(this.dsPurchaseList.rowposition, "CONTRACT_MAIN", ds.getColumn(0, "RELATED_COMPANY_CODE"));
        					this.dsPurchaseList.setColumn(this.dsPurchaseList.rowposition, "CONTRACT_MAIN_NAME", ds.getColumn(0, "RELATED_COMPANY_NAME"));
        				}
        			break;
        			case "popupPurRelatedProductSearch":	// 매입연관상품
        				var ds = new nexacro.Dataset();
        				ds.loadXML(Variant);
        				this.recentVariant = ds;

        				this.dsPurchaseList.setColumn(this.dsPurchaseList.rowposition, "RELATED_PRODUCT_CODE", ds.getColumn(0, "PRODUCT_CODE"));
        				this.dsPurchaseList.setColumn(this.dsPurchaseList.rowposition, "RELATED_PRODUCT_NAME", ds.getColumn(0, "PRODUCT_NAME"));
        			break;

        			case "popupClientSearch":	// 고개사
        				var ds = new nexacro.Dataset();
        				ds.loadXML(Variant);
        				this.recentVariant = ds;

        				this.dsPurchaseList.setColumn(this.dsPurchaseList.rowposition, "CONTRACT_MAIN", ds.getColumn(0, "COMPANY_CODE"));
        				this.dsPurchaseList.setColumn(this.dsPurchaseList.rowposition, "CONTRACT_MAIN_NAME", ds.getColumn(0, "COMPANY_NAME"));
        			break;
        			case "CompanyTypeSelect":	// 담당자
        				var ds = new nexacro.Dataset();
        				ds.loadXML(Variant);
        				this.recentVariant = ds;

        				// return 정보가 없으면 종료
        				if (ds.rowcount<=0) return;

        				for (var i=0; i<ds.rowcount; i++) {
        					var nfindRow = this.dsAddressbookList.findRow("CA_SEQ", ds.getColumn(i, "CA_SEQ"));
        					if(nfindRow>=0)
        					{
        						this.alert(this.gfnGetTransTxt(1982,"@1@의 중복데이터가 존재 합니다.",[ds.getColumn(i, "EMP_NAME")]));
        						continue;
        					}
        					nfindRow = this.dsAddressbookList.findRow("EMP_NAME", ds.getColumn(i, "EMP_NAME"));
        					if(nfindRow>=0)
        					{
        						if(!this.confirm(this.gfnGetTransTxt(1983,"@1@의 동명이인이 있습니다. 등록하시겠습니까?",[ds.getColumn(i, "EMP_NAME")])))
        							continue;
        					}
        					// 담당자 정보 세팅
        					this.dsAddressbookList.set_enableevent(false);
        					var nRow = this.dsAddressbookList.addRow();
        					this.dsAddressbookList.setColumn(nRow, "CA_SEQ",		ds.getColumn(i, "CA_SEQ"));
        					this.dsAddressbookList.setColumn(nRow, "SOURCE_CD",		"PL");
        					this.dsAddressbookList.setColumn(nRow, "SOURCE_DATA",	this.dsList.getColumn(this.dsList.rowposition, "PROJECT_CODE"));
        					this.dsAddressbookList.setColumn(nRow, "COMPANY_NAME",	ds.getColumn(i, "COMPANY_NAME"));
        					this.dsAddressbookList.setColumn(nRow, "DEPT_NAME",		ds.getColumn(i, "DEPT_NAME"));
        					this.dsAddressbookList.setColumn(nRow, "EMP_NAME",		ds.getColumn(i, "EMP_NAME"));
        					this.dsAddressbookList.setColumn(nRow, "GRADE_CODE",	ds.getColumn(i, "GRADE_CODE"));
        					this.dsAddressbookList.setColumn(nRow, "ROLE_CODE",		ds.getColumn(i, "ROLE_CODE"));
        					this.dsAddressbookList.setColumn(nRow, "H_PHONE_NO",	ds.getColumn(i, "H_PHONE_NO"));
        					this.dsAddressbookList.setColumn(nRow, "HOLD_OFFICE",	ds.getColumn(i, "HOLD_OFFICE"));
        					this.dsAddressbookList.setColumn(nRow, "O_PHONE_NO",	ds.getColumn(i, "O_PHONE_NO"));
        					this.dsAddressbookList.setColumn(nRow, "EMAIL",			ds.getColumn(i, "EMAIL"));
        					this.dsAddressbookList.setColumn(nRow, "REMARKS",		ds.getColumn(i, "REMARKS"));
        					this.dsAddressbookList.set_enableevent(true);
        				}
        			break;
        			case "popupProjectSearch":		// 계약추가시 프로젝트 검색
        				var ds = new nexacro.Dataset();
        				ds.loadXML(Variant);

        				this.dsList.set_enableevent(false);
        				var nAddRow = this.dsList.insertRow(0);// addRow();

        				this.dsList.setColumn(nAddRow, "PROJECT_CODE",		ds.getColumn(0, "PROJECT_CODE"));
        				this.dsList.setColumn(nAddRow, "PROJECT_NAME",		ds.getColumn(0, "PROJECT_NAME"));
        				this.dsList.setColumn(nAddRow, "CLIENT_CODE",		ds.getColumn(0, "CLIENT_CODE"));
        				this.dsList.setColumn(nAddRow, "CLIENT_NAME",		ds.getColumn(0, "CLIENT_NAME"));

        				this.dsList.setColumn(nAddRow, "CONTRACT_NAME",		ds.getColumn(0, "CONTRACT_NAME"));
        				this.dsList.setColumn(nAddRow, "CONTRACT_MAIN",		ds.getColumn(0, "CONTRACT_MAIN"));
        				this.dsList.setColumn(nAddRow, "CONTRACT_MAIN_NAME",ds.getColumn(0, "CONTRACT_MAIN_NAME"));
        				this.dsList.setColumn(nAddRow, "PIPELINE_FLAG",		"0");
        				this.dsList.setColumn(nAddRow, "BUSINESS_TYPE",		"U");
        				this.dsList.setColumn(nAddRow, "SALES_STATUS",		"001");
        				this.dsList.setColumn(nAddRow, "CONTRACT_STATUS",	"0");

        				this.dsList.setColumn(nAddRow, "RELATED_PROJECT_CODE",		ds.getColumn(0, "PROJECT_CODE"));
        				this.dsList.setColumn(nAddRow, "RELATED_PROJECT_NAME",		ds.getColumn(0, "PROJECT_NAME"));
        				this.dsList.setColumn(nAddRow, "PROJECT_CONTRACT_STATUS",	ds.getColumn(0, "PROJECT_CONTRACT_STATUS"));
        				this.dsList.setColumn(nAddRow, "SAVE_TYPE",					"A");

        				//추가 계약시 영업대표가 등록할경우 담당영업에 영업대표 셋팅
        				//영업대표가 아닐경우 기존계약 영업대표 셋팅
        				var sEmpNo = nexacro.getApplication().gdsUserInfo.getColumn(0, "EMP_NO");
        				var nFindRow = this.ds_cmm_SalesEmp.findRow("EMP_NO", sEmpNo);
        				if(nFindRow<0)
        					sEmpNo = ds.getColumn(0, "BIZ_STAFF");

        				this.dsList.setColumn(nAddRow, "SALES_EMP_NO",		sEmpNo);
        				this.dsList.setColumn(nAddRow, "SALES_EMP_NAME",	this.ds_cmm_SalesEmp.getColumn(nFindRow, "EMP_NAME"));
        				this.dsList.setColumn(nAddRow, "SALES_DEPT_CD",		this.ds_cmm_SalesEmp.getColumn(nFindRow, "DEPT_CD"));
        				this.dsList.setColumn(nAddRow, "SALES_DEPT_NAME",	this.ds_cmm_SalesEmp.getColumn(nFindRow, "DEPT_NAME"));
        				this.dsList.setColumn(nAddRow, "SALES_CO_CD",		this.ds_cmm_SalesEmp.lookup("EMP_NO", sEmpNo, "CO_CD"));


        				/*	CONTRACT_SEQ MAX 값 조회 처리	*/
        				// 조건값(Rarameter) 셋팅
        				this.gfnAddSendParameter("PROJECT_CODE", ds.getColumn(0, "PROJECT_CODE"));

        				// 조회용 Output dataset 세팅
        				this.gfnAddOutputDataset("dsContractSeq", "ds_output");
        				this.gfnCommonTransaction("Get_MaxContractSeq", "SS_Presales_S04", null, false);

        				var sContractSeq = this.dsContractSeq.getColumn(0, "CONTRACT_SEQ");
        				if (this.gfnIsEmpty(sContractSeq)) sContractSeq = "1";
        				this.dsList.setColumn(nAddRow, "CONTRACT_SEQ",	sContractSeq);


        				this.dsContractProd.clearData();
        				this.dsContractGoods.clearData();
        				this.dsContractSi.clearData();
        				this.dsPurchaseList.clearData();
        				this.dsScheduleList.clearData();
        				this.dsAddressbookList.clearData();
        				this.dsList.set_enableevent(true);
        				this.div_RelatedProject.set_enable(true);	// 연결 프로젝트 활성화

        				//계약추가 시 파일 초기화
        				this.FV_PARENT_FORM.div_Attachment.set_url("");
        				this.FV_PARENT_FORM.div_Attachment.SOURCE_SEQ = this.dsList.getColumn(this.dsList.rowposition, "PROJECT_CODE");
        				this.FV_PARENT_FORM.div_Attachment.set_url("Common::COM_Attachment.xfdl");
        				// 견적서 버튼 활성화
        				this.FV_PARENT_FORM.btn_Estimate.set_enable(true);
        			break;
        			case "SP_PurchaseContractTypeSelect":	// 매입계약 (연관) 제품 검색
        				var sContractType = Variant;

        				if(sContractType == "cancel" || this.gfnIsEmpty(sContractType) == true) {	//팝업 리턴값이 없거나 cancel일 경우 return
        					return;
        				}

        				this.dsPurchaseList.set_enableevent(false);
        				var nAddRow = this.dsPurchaseList.addRow();
        				this.dsPurchaseList.setColumn(nAddRow, "PROJECT_CODE",	this.dsList.getColumn(this.dsList.rowposition, "PROJECT_CODE"));
        				this.dsPurchaseList.setColumn(nAddRow, "CONTRACT_NAME",	this.dsList.getColumn(this.dsList.rowposition, "CONTRACT_NAME"));
        				this.dsPurchaseList.setColumn(nAddRow, "CONTRACT_DATE",	this.dsList.getColumn(this.dsList.rowposition, "CONTRACT_DATE"));
        				this.dsPurchaseList.setColumn(nAddRow, "CONTRACT_TYPE",	sContractType);
        				this.dsPurchaseList.setColumn(nAddRow, "PURCHASE_CONTRACT_STATUS",	"0")

        				// trace("sContractType:["+sContractType+"]");


        				if (sContractType == "C") {			//	판매 수수료
        					this.dsPurchaseList.setColumn(nAddRow, "PRODUCT_CODE", "C01");;
        				} else if (sContractType == "D") {	//	총판 수수료
        					this.dsPurchaseList.setColumn(nAddRow, "PRODUCT_CODE", "D01");;
        				}
        				this.dsPurchaseList.set_enableevent(true);
        			break;
        			case "popupRequestLicenseConfirm":
        				if (Variant != "CANCEL") {
        					this.fnPopupRequestLicense (Variant[0], Variant[1], Variant[2], Variant[3]);
        				}
        			break;
        			case "SS_ContractLink":					// 상품 매출 매입 연결
        				//
        			break;
        		}
        	}
        }

        // 공통검색 component callback 처리
        this.Com_Search_onChanged = function (obj, e)
        {
        	if (!this.gfnIsEmpty(e.newCode)) {
        		if (obj.name == "div_ContractMain") {
        			// 고객사 변경시 처리
        			var ds = new nexacro.Dataset();
        			ds = this.div_ContractMain.form.recentVariant;

        			var sCompStatus = ds.getColumn(0, "COMPANY_STATE");
        			if (sCompStatus == "002") {
        				this.alert(this.gfnGetTransTxt(1505,"폐업된 업체 입니다."));
        			}


        			/*	정부/공공기관(007), 해외기업(008) 예외처리 */
        			var sClExceptionCd = ds.getColumn(0, "CL_EXCEPTION_CODE");// 회사여신 예외항목
        			if (sClExceptionCd != "007" && sClExceptionCd != "008")
        			{
        				var nRestAmt = ds.getColumn(0, "REST");
        				if (nexacro.toNumber(nRestAmt) < 0) {
        					this.alert(this.gfnGetTransTxt(1335,"여신한도 금액 초과 업체 입니다.\n지급 보증각서 또는 내부품의 진행 바랍니다."));
        				}
        			}
        		} else if (obj.name == "div_RelatedProject") {
        			var ds = new nexacro.Dataset();
        			ds = this.div_RelatedProject.form.recentVariant;
        			this.dsList.setColumn(this.dsList.rowposition, "RELATED_PROJECT_CODE", ds.getColumn(0, "PROJECT_CODE"));
        			this.dsList.setColumn(this.dsList.rowposition, "RELATED_PROJECT_NAME", ds.getColumn(0, "PROJECT_NAME"));
        		}
        	}
        };


        // 제품매출 제품 검색 팝업 처리
        this.divDet_divDet1_divProd_grd_SalesProd_onexpandup = function(obj,e)
        {
        	if (e.cell == 0) {
        		var sArgument = {};		//{pvMode:this.parent.mode}
        		var sProductCd = this.dsContractProd.getColumn(e.row, "PRODUCT_CODE");

        		// 매출 제품 선택 되지 않은 경우 대표제품으로 처리
        		if (this.gfnIsEmpty(sProductCd))	sProductCd = this.dsList.getColumn(this.dsList.rowposition, "PRODUCT_CODE");

        		sArgument.sProductCd = sProductCd;
        		this.commUtil.popupProductSearch(this, "popupProductSearch", "fnPopupCallBack", sArgument);
        	}
        };

        // 상품매출 상품 검색 팝업 처리
        this.divDet_divDet1_divGoods_grd_Salesgoods_onexpandup = function(obj,e)
        {
        	if (e.cell == 0) {
        		var sArgument = {};		//{pvMode:this.parent.mode}
        		sArgument.sProductCd = this.dsContractGoods.getColumn(e.row, "PRODUCT_CODE");
        		sArgument.sContractType = "G";
        		this.commUtil.popupProductSearch(this, "popupGoodsSearch", "fnPopupCallBack", sArgument);
        	}
        };

        // 매입 상품, 연관제품 검색 팝업 처리
        this.divDet_divDet2_divPur_grd_SalesPurchase_onexpandup = function(obj,e)
        {
        	if (e.cell == 0) {
        		var sContractType = this.dsPurchaseList.getColumn(e.row, "CONTRACT_TYPE");

        		var sArgument = {};
        		sArgument.sProductCd = this.dsPurchaseList.getColumn(e.row, "PRODUCT_CODE");
        		sArgument.sProductCd2 = this.dsPurchaseList.getColumn(e.row, "RELATED_PRODUCT_CODE");

        		sArgument.sFilterExpr = "CODE=='"+sContractType+"'";
        		sArgument.sContractType = sContractType;

        		//제품검색창 연관제품나오게 처리
        		sArgument.userelatedproduct = true;
        		sArgument.sContractType = sContractType;
        		this.commUtil.popupProductSearch(this, "popupPurProductSearch", "fnPopupCallBack", sArgument);

        	}else if (e.cell == 1) {
        		var sArgument = {};
        		sArgument.sProductCd = this.dsPurchaseList.getColumn(e.row, "RELATED_PRODUCT_CODE");
        		this.commUtil.popupProductSearch(this, "popupPurRelatedProductSearch", "fnPopupCallBack", sArgument);
        	} else if (e.cell == 3){
        		var sArgument = {};
        		sArgument.pvMode = "2";
        		this.commUtil.popupCompanySearch(this, "popupClientSearch", "fnPopupCallBack", sArgument);
        	}
        };


        this.divDet_divDet2_divSi_grd_SalesSi_oncellclick = function(obj,e)
        {
        	//역할에 맞는 등급만 나오고 필터
        	var sCellProp = obj.getCellProperty("body", e.cell, "text");
        	var sColNm = sCellProp.split(":")[1];
        	var ds = obj.getBindDataset();
        	if(sColNm == "LEVEL_CODE")
        	{
        		var strRoleCode = ds.getColumn(e.row, "ROLE_CODE");
        		var nRow = this.ds_cmm_Role.findRow("CODE", strRoleCode);
        		var strKind = this.ds_cmm_Role.getColumn(nRow, "VAL1");
        		if (obj.name == "grd_SalesCS") {
        			this.ds_cmm_Level.filter("VAL1=='DEV' || VAL1=='ALL' ");
        		} else {
        			//this.ds_cmm_Level.filter("VAL1=='"+strKind+"'");
        			if (strKind == "ALL") {
        				this.ds_cmm_Level.filter("VAL1!='ALL'");
        			} else {
        				this.ds_cmm_Level.filter("VAL1=='"+strKind+"'");
        			}
        		}
        	}
        };


        // 인력 요청
        this.divDet_divDet2_divSi_btn_Labor_Require_onclick = function(obj,e)
        {
        	if (this.dsContractSi.rowcount == 0 ) {
        		return;
        	}

        	var sArgument = {
        			 pvKind			: "Si"
        			,pvFormType		: "TR"
        			,pvProjectCode	: this.dsList.getColumn(this.dsList.rowposition, "PROJECT_CODE")
        			,pvProjectName	: this.dsList.getColumn(this.dsList.rowposition, "PROJECT_NAME")
        			,pvClientCode	: this.dsList.getColumn(this.dsList.rowposition, "CLIENT_CODE")
        			,pvClientName	: this.dsList.getColumn(this.dsList.rowposition, "CLIENT_NAME")
        			,pvProductCode	: this.dsList.getColumn(this.dsList.rowposition, "PRODUCT_CODE")
        			,pvContractNo	: this.dsContractSi.getColumn(this.dsContractSi.rowposition, "CONTRACT_NO")
        			,pvContractName	: this.dsContractSi.getColumn(this.dsContractSi.rowposition, "CONTRACT_NAME")
        			,pvStartDate	: this.dsContractSi.getColumn(this.dsContractSi.rowposition, "START_DATE")
        			,pvEndDate		: this.dsContractSi.getColumn(this.dsContractSi.rowposition, "END_DATE")
        			,pvAreacode		: this.dsContractSi.getColumn(this.dsContractSi.rowposition, "AREA_CODE")
        			,pvdsContractSi	: this.dsContractSi.saveXML()
        			};

        	this.commUtil.popup (this, "SP_RequestEmpList", "Sales::SP_RequestEmpList.xfdl", -1, -1, 1200, 300, true, true, false, sArgument, "fnPopupCallBack");
        };


        this.divDet_divDet2_divCS_btn_Labor_Require2_onclick = function(obj,e)
        {
        	if (this.dsContractCS.rowcount == 0 ) {
        		return;
        	}

        	var sKind = "";
        	var sFormID = "Sales::SP_RequestEmpList.xfdl";
        	var nContCSRow = this.dsContractCS.rowposition;
        	var sRoleCd = this.dsContractCS.getColumn(nContCSRow, "ROLE_CODE");
        	if (sRoleCd == "016") {
        		sKind = "Edu";
        	} else {
        		sKind = "Tech";
        	}

        	var sArgument = {
        			 pvKind			: sKind
        			,pvFormType		: "TR"
        			,pvProjectCode	: this.dsList.getColumn(this.dsList.rowposition, "PROJECT_CODE")
        			,pvProjectName	: this.dsList.getColumn(this.dsList.rowposition, "PROJECT_NAME")
        			,pvClientCode	: this.dsList.getColumn(this.dsList.rowposition, "CLIENT_CODE")
        			,pvClientName	: this.dsList.getColumn(this.dsList.rowposition, "CLIENT_NAME")
        			,pvProductCode	: this.dsList.getColumn(this.dsList.rowposition, "PRODUCT_CODE")
        			,pvContractNo	: this.dsContractCS.getColumn(nContCSRow, "CONTRACT_NO")
        			,pvContractName	: this.dsContractCS.getColumn(nContCSRow, "CONTRACT_NAME")
        			,pvStartDate	: this.dsContractCS.getColumn(nContCSRow, "START_DATE")
        			,pvEndDate		: this.dsContractCS.getColumn(nContCSRow, "END_DATE")
        			,pvAreacode		: this.dsContractCS.getColumn(nContCSRow, "AREA_CODE")
        			,pvRoleCode		: this.dsContractCS.getColumn(nContCSRow, "ROLE_CODE")
        			};

        	this.commUtil.popup (this, "SP_RequestEmpList", "Sales::SP_RequestEmpList.xfdl", -1, -1, 1200, 300, true, true, false, sArgument, "fnPopupCallBack");
        };

        // 매입 매출 연결 팝업
        this.divDet_divDet2_divPur_btn_ContractLink_onclick = function(obj,e)
        {
        	if (this.dsPurchaseList.rowcount == 0 ) {
        		return;
        	}

        	var sArgument = {
        			 pvProjectCode	: this.dsList.getColumn(this.dsList.rowposition, "PROJECT_CODE")
        			,pvBusinessType	: this.dsList.getColumn(this.dsList.rowposition, "BUSINESS_TYPE")
        			};

        	this.commUtil.popup (this, "SS_ContractLink", "Sales::SS_ContractLinkPopup.xfdl", -1, -1, 1000, 400, true, true, false, sArgument, "fnPopupCallBack");
        };

        this.div_InConfirm_btn_Confirm_onclick = function(obj,e)
        {
        	var sInsertType = this.div_InConfirm.form.rd_kind.value;
        	this.div_InConfirm.set_visible(false);

        	if (sInsertType == "01") {	// 신규 프로젝트 생성
        		this.dsList.set_enableevent(false);
        		var nAddRow = this.dsList.insertRow(0);// addRow();
        		this.dsList.setColumn(nAddRow, "PROJECT_CONTRACT_STATUS", 	"0");
        		this.dsList.setColumn(nAddRow, "CONTRACT_STATUS", 	"0");
        		this.dsList.setColumn(nAddRow, "SALES_STATUS",		"001");
        		this.dsList.setColumn(nAddRow, "BUSINESS_TYPE",		"U");
        		this.dsList.setColumn(nAddRow, "PIPELINE_FLAG",		"0");
        		this.dsList.setColumn(nAddRow, "LINK_CONFIRM_FLAG",	"0");

        		var sEmpNo = nexacro.getApplication().gdsUserInfo.getColumn(0, "EMP_NO");


        		this.dsList.setColumn(nAddRow, "SALES_EMP_NO",		sEmpNo);
        		this.dsList.setColumn(nAddRow, "SALES_EMP_NAME",	nexacro.getApplication().gdsUserInfo.getColumn(0, "EMP_NM"));
        		this.dsList.setColumn(nAddRow, "SALES_DEPT_CD",		nexacro.getApplication().gdsUserInfo.getColumn(0, "DEPT_CD"));
        		this.dsList.setColumn(nAddRow, "SALES_DEPT_NAME",	nexacro.getApplication().gdsUserInfo.getColumn(0, "DEPT_NM"));
        		this.dsList.setColumn(nAddRow, "SALES_CO_CD",		nexacro.getApplication().gdsUserInfo.getColumn(0, "CO_CD"));
        		this.dsList.setColumn(nAddRow, "SAVE_TYPE",			"N");
        		this.dsList.setColumn(nAddRow, "CONTRACT_SEQ",		"1");


        		this.dsContractProd.clearData();
        		this.dsContractGoods.clearData();
        		this.dsContractSi.clearData();
        		this.dsContractCS.clearData();
        		this.dsPurchaseList.clearData();
        		this.dsScheduleList.clearData();
        		this.dsAddressbookList.clearData();

        		this.dsList.set_enableevent(true);
        		this.fnAuthConfig();

        		//연결프로젝트 초기화
        		this.div_RelatedProject.set_enable(false);

        		//계약추가 시 파일 초기화
        		this.FV_PARENT_FORM.div_Attachment.set_url("");
        		this.FV_PARENT_FORM.div_Attachment.SOURCE_SEQ = this.dsList.getColumn(this.dsList.rowposition, "PROJECT_CODE");
        		this.FV_PARENT_FORM.div_Attachment.set_url("Common::COM_Attachment.xfdl");
        	} else {				// 계약추가
        		var sArgument = {};
        		sArgument.searchtype = "P"
        		this.commUtil.popupProjectSearch(this, "popupProjectSearch", "fnPopupCallBack", sArgument);
        		this.div_ClientName.set_enable(false);
        		this.edt_ProjectName.set_readonly(true);
        	}

        	this.sInsertType = sInsertType;
        };


        this.div_InConfirm_btn_Exit_onclick = function(obj,e)
        {
        	this.div_InConfirm.set_visible(false);
        };

        this.dsContractProd_oncolumnchanged = function(obj,e)
        {
        	var sCocd = nexacro.getApplication().gdsUserInfo.getColumn(0, "CO_CD");

        	if (e.columnid == "PRODUCT_CODE") {

        		var nRowType = obj.getRowType(e.row);
        		if (nRowType == Dataset.ROWTYPE_INSERT && obj.rowcount>1) {
        			// this.fn_setInsertStatus(obj, e.newvalue, obj);
        		}
        		if(sCocd == "J02") {
        			this.fnCheckPurchase(obj, e.row, e.columnid, e.newvalue, e.oldvalue);
        		}
        	} else if(e.columnid == "PRODUCT_NAME") {
        // 		if(sCocd == "J02") {
        // 			this.fnCheckPurchase(obj, e.row, e.columnid, e.newvalue, e.oldvalue);
        // 		}
        	} else if(e.columnid == "CONTRACT_PRICE") {
        		var sProductCode = this.dsContractProd.getColumn(e.row, "PRODUCT_CODE");
        		if(sCocd == "J02") {
        			this.fnCheckPurchase(obj, e.row, e.columnid, e.newvalue, e.oldvalue);
        		}
        	}
        };


        this.dsContractGoods_oncolumnchanged = function(obj,e)
        {
        	var sCocd = nexacro.getApplication().gdsUserInfo.getColumn(0, "CO_CD");

        	if (e.columnid == "PRODUCT_CODE") {

        		var nRowType = obj.getRowType(e.row);
        		if (nRowType == Dataset.ROWTYPE_INSERT && obj.rowcount>1) {
        			// this.fn_setInsertStatus(obj, e.newvalue);
        		}
        		if(sCocd == "J02") {
        			this.fnCheckPurchase(obj, e.row, e.columnid, e.newvalue, e.oldvalue);
        		}
        	} else if(e.columnid == "PRODUCT_NAME") {
        // 		if(sCocd == "J02") {
        // 			this.fnCheckPurchase(obj, e.row, e.columnid, e.newvalue, e.oldvalue);
        // 		}
        	} else if(e.columnid == "CONTRACT_PRICE") {
        		var sProductCode = this.dsContractProd.getColumn(e.row, "PRODUCT_CODE");
        		if(sCocd == "J02") {
        			this.fnCheckPurchase(obj, e.row, e.columnid, e.newvalue, e.oldvalue);
        		}
        	}
        };

        this.fnCheckPurchase = function(objDs, curRow, colId, newValue, oldValue)
        {
        	var targetDs = this.dsPurchaseList;
        	var findRow, findOldRow;

        	objDs.set_enableevent(false);

        	var sContractType = objDs.getColumn(curRow, "CONTRACT_TYPE");
        	var sProductCode = objDs.getColumn(curRow, "PRODUCT_CODE");
        	var sOldProductCode = objDs.getOrgColumn(curRow, "PRODUCT_CODE");
        	var sProductName = objDs.getColumn(curRow, "PRODUCT_NAME");
        	var sOldProductName = objDs.getOrgColumn(curRow, "PRODUCT_NAME");
        	var sRoyaltyType = objDs.getColumn(curRow, "ROYALTY_TYPE");
        	var sRelatedCompanyCode = objDs.getColumn(curRow, "RELATED_COMPANY_CODE");
        	var sRelatedCompanyName = objDs.getColumn(curRow, "RELATED_COMPANY_NAME");
        	var sContractPrice = objDs.getColumn(curRow, "CONTRACT_PRICE");
        	var sNoPurchaseFlag = objDs.getColumn(curRow, "NO_PURCHASE_FLAG");

        	if(sNoPurchaseFlag != "1") {
        		if(colId == "PRODUCT_CODE") {
        			sProductCode = newValue;
        			sOldProductCode = oldValue;
        		}

        		var cmmFindRow = this.ds_cmm_RoyaltyType.findRow("CODE", sRoyaltyType);
        		var commissionRate = this.ds_cmm_RoyaltyType.getColumn(cmmFindRow, "VAL1");

        		var nAddRow, targetRow;
        		if(colId == "PRODUCT_CODE") {
        			if(sProductCode == sOldProductCode) {
        				findRow = targetDs.findRow("PRODUCT_CODE", sProductCode);

        				if(findRow == -1) {
        					targetRow = targetDs.addRow();
        				} else {
        					targetRow = findRow;
        				}
        				targetDs.setColumn(targetRow, "PROJECT_CODE",		this.dsList.getColumn(this.dsList.rowposition, "PROJECT_CODE"));
        				targetDs.setColumn(targetRow, "CONTRACT_NAME",	this.dsList.getColumn(this.dsList.rowposition, "CONTRACT_NAME"));
        				targetDs.setColumn(targetRow, "CONTRACT_DATE",	this.dsList.getColumn(this.dsList.rowposition, "CONTRACT_DATE"));
        				targetDs.setColumn(targetRow, "CONTRACT_TYPE",	sContractType);
        				targetDs.setColumn(targetRow, "PRODUCT_CODE",		sProductCode);
        				targetDs.setColumn(targetRow, "PRODUCT_NAME",		sProductName);
        				targetDs.setColumn(targetRow, "ROYALTY_TYPE",		sRoyaltyType);
        				targetDs.setColumn(targetRow, "COMMISSION_RATE",	commissionRate);
        				targetDs.setColumn(targetRow, "CONTRACT_MAIN",	sRelatedCompanyCode);
        				targetDs.setColumn(targetRow, "CONTRACT_MAIN_NAME",	sRelatedCompanyName);
        				targetDs.setColumn(targetRow, "CONTRACT_PRICE",	sContractPrice * commissionRate / 100);
        				targetDs.setColumn(targetRow, "PURCHASE_CONTRACT_STATUS",	"0");

        			} else {
        				findRow = targetDs.findRow("PRODUCT_CODE", sProductCode);
        				findOldRow = targetDs.findRow("PRODUCT_CODE", sOldProductCode);

        				if(findOldRow == -1 && findOldRow == -1) {
        					targetRow = targetDs.addRow();
        				} else if(findOldRow > -1) {
        					//targetDs.deleteRow(findOldRow);

        					for(var i = targetDs.rowcount; i >= 0; i--) {
        						var sProductCodeTmp = targetDs.getColumn(i, "PRODUCT_CODE");
        						if(sProductCodeTmp == sOldProductCode) targetDs.deleteRow(i);
        					}

        					if(findRow == -1) {
        						targetRow = targetDs.addRow();
        					}
        				}
        				targetDs.setColumn(targetRow, "PROJECT_CODE",	this.dsList.getColumn(this.dsList.rowposition, "PROJECT_CODE"));
        				targetDs.setColumn(targetRow, "CONTRACT_NAME",	this.dsList.getColumn(this.dsList.rowposition, "CONTRACT_NAME"));
        				targetDs.setColumn(targetRow, "CONTRACT_DATE",	this.dsList.getColumn(this.dsList.rowposition, "CONTRACT_DATE"));
        				targetDs.setColumn(targetRow, "CONTRACT_TYPE",	sContractType);
        				targetDs.setColumn(targetRow, "PRODUCT_CODE",		sProductCode);
        				targetDs.setColumn(targetRow, "PRODUCT_NAME",		sProductName);
        				targetDs.setColumn(targetRow, "ROYALTY_TYPE",		sRoyaltyType);
        				targetDs.setColumn(targetRow, "COMMISSION_RATE",	commissionRate);
        				targetDs.setColumn(targetRow, "CONTRACT_MAIN",	sRelatedCompanyCode);
        				targetDs.setColumn(targetRow, "CONTRACT_MAIN_NAME",	sRelatedCompanyName);
        				targetDs.setColumn(targetRow, "CONTRACT_PRICE",	sContractPrice * commissionRate / 100);
        				targetDs.setColumn(targetRow, "PURCHASE_CONTRACT_STATUS",	"0");
        			}
        		} else if(colId == "CONTRACT_PRICE") {
        			findRow = targetDs.findRow("PRODUCT_CODE", sProductCode);
        			targetRow = findRow;

        			targetDs.setColumn(targetRow, "PROJECT_CODE",		this.dsList.getColumn(this.dsList.rowposition, "PROJECT_CODE"));
        			targetDs.setColumn(targetRow, "CONTRACT_NAME",	this.dsList.getColumn(this.dsList.rowposition, "CONTRACT_NAME"));
        			targetDs.setColumn(targetRow, "CONTRACT_DATE",	this.dsList.getColumn(this.dsList.rowposition, "CONTRACT_DATE"));
        			targetDs.setColumn(targetRow, "CONTRACT_TYPE",	sContractType);
        			targetDs.setColumn(targetRow, "PRODUCT_CODE",		sProductCode);
        			targetDs.setColumn(targetRow, "PRODUCT_NAME",		sProductName);
        			targetDs.setColumn(targetRow, "ROYALTY_TYPE",		sRoyaltyType);
        			targetDs.setColumn(targetRow, "COMMISSION_RATE",	commissionRate);
        			targetDs.setColumn(targetRow, "CONTRACT_MAIN",	sRelatedCompanyCode);
        			targetDs.setColumn(targetRow, "CONTRACT_MAIN_NAME",	sRelatedCompanyName);
        			targetDs.setColumn(targetRow, "CONTRACT_PRICE",	sContractPrice * commissionRate / 100);
        			targetDs.setColumn(targetRow, "PURCHASE_CONTRACT_STATUS",	"0");
        		}


        	}

        	objDs.set_enableevent(true);
        };

        this.fnDelPurchase = function(objDs, curRow)
        {
        	var sProductCode = objDs.getColumn(curRow, "PRODUCT_CODE");
        	var targetDs = this.dsPurchaseList;

        	for(var i = targetDs.rowcount; i >= 0; i--) {
        		var delProductCode = targetDs.getColumn(i, "PRODUCT_CODE");
        		if(sProductCode == delProductCode) targetDs.deleteRow(i);
        	}

        	//var findRow = this.dsPurchaseList.findRow("PRODUCT_CODE", sProductCode);

        	//if(findRow > -1) this.dsPurchaseList.deleteRow(findRow);
        };




        this.fn_setInsertStatus = function(obj)
        {
        	if (obj.rowcount<=0) return;		// 입력데이터 없으면 리턴

        	this.dsTmpProdInfo.clearData();
        	for (var i=0; i<obj.rowcount; i++) {
        		var prod_cd = obj.getColumn(i, "PRODUCT_CODE");				// 제품코드
        		var main_prod_cd = "";

        		// 메인 제품코드
        		if (prod_cd.length<=3) {
        			main_prod_cd = prod_cd;		// 코드 3자리인 경우 동일 계약으로 묶이는 문제 있음
        		} else {
        			main_prod_cd = prod_cd.substring(0, prod_cd.length-2);
        		}


        		var nFindRow = this.dsTmpProdInfo.findRow("MAIN_PRODUCT_CODE", main_prod_cd);

        		if (nFindRow<0) {
        			var nAddRow = this.dsTmpProdInfo.addRow();
        			this.dsTmpProdInfo.setColumn(nAddRow, "PRODUCT_CODE", prod_cd);
        			this.dsTmpProdInfo.setColumn(nAddRow, "MAIN_PRODUCT_CODE", main_prod_cd);
        			this.dsTmpProdInfo.setColumn(nAddRow, "ROW_IDX", i);
        		}
        	}

        	for (var i=0; i<this.dsTmpProdInfo.rowcount; i++)
        	{
        		var sMainProdCd = this.dsTmpProdInfo.getColumn(i, "MAIN_PRODUCT_CODE");
        		var nRowIdx = this.dsTmpProdInfo.getColumn(i, "ROW_IDX");

        		var sContractNo = obj.getColumn(nRowIdx, "CONTRACT_NO");

        		for (var j=0; j<obj.rowcount; j++)
        		{
        			var sTarProdCd = obj.getColumn(j, "PRODUCT_CODE");
        			var sTarMainProdCd = "";

        			// 메인 제품코드
        			if (prod_cd.length<=3) {
        				sTarMainProdCd = sTarProdCd;		// 코드 3자리인 경우 동일 계약으로 묶이는 문제 있음
        			} else {
        				sTarMainProdCd = sTarProdCd.substring(0, sTarProdCd.length-2);
        			}



        			if (sMainProdCd == sTarMainProdCd && this.dsTmpProdInfo.getRowType(i) != 1)
        			{
        				if (nRowIdx == j) {
        					obj.setColumn(j, "INSERT_STATUS", "I");
        					obj.setColumn(j, "CONTRACT_NO", "");
        				} else {
        					if (this.dsTmpProdInfo.getRowType(i) == 2) {		//	ROWTYPE_INSERT

        						if (!this.gfnIsEmpty(sContractNo)) {
        							obj.setColumn(j, "CONTRACT_NO", sContractNo);
        						}

        						obj.setColumn(j, "INSERT_STATUS", "A");
        					} else  {											//	ROWTYPE_UPDATE
        						obj.setColumn(j, "INSERT_STATUS", "N");
        					}
        				}

        			}
        		}
        	}

        	//trace("============================================================================");
        	//trace(obj.saveXML());
        	//trace("============================================================================");


        }


        this.dsContractSi_onload = function(obj,e)
        {
        	var bEnable = false;
        	if (obj.rowcount >  0 ) {
        		bEnable = true;
        	}
        	this.divDet.form.divDet2.form.divSi.form.btn_Labor_Require.set_enable(bEnable);
        };


        this.dsContractCS_onload = function(obj,e)
        {
        	var bEnable = false;
        	if (obj.rowcount >  0 ) {
        		bEnable = true;
        	}
        	this.divDet.form.divDet2.form.divCS.form.btn_Labor_Require2.set_enable(bEnable);
        };


        this.dsContractSi_oncolumnchanged = function(obj,e)
        {
        	var sObjDsId = obj.name;
        	this.sObjDs = obj;

        	if (e.columnid == "START_DATE" || e.columnid == "END_DATE") {
        		var strStartDt = obj.getColumn(e.row, "START_DATE");
        		var strEndDt = obj.getColumn(e.row, "END_DATE");

        		// 시작일, 종료일 변경시 M/M계산 조회
        		this.fnGetMM(strStartDt, strEndDt, e.row);
        	}
        	if (e.columnid == "UNIT_COST" || e.columnid == "MEN_MONTH") {
        		var nUnitCost = obj.getColumn(e.row, "UNIT_COST");
        		var nMenMonth = obj.getColumn(e.row, "MEN_MONTH");
        		var nContractPrice = nUnitCost*nMenMonth;
        		obj.setColumn(e.row, "CONTRACT_PRICE", nContractPrice)
        	}
        	if (sObjDsId == "dsContractCS") {

        		if (e.columnid == "EXECUTION_TYPE") {
        			var sTechSupprotUnit = obj.getColumn(e.row, "TECH_SUPPORT_UNIT");
        			if (this.gfnIsEmpty(sTechSupprotUnit)) {
        				obj.set_enableevent(false);
        				if (e.newvalue == "001") {
        					obj.setColumn(e.row, "TECH_SUPPORT_UNIT", "1");
        				} else if (e.newvalue == "002") {
        					obj.setColumn(e.row, "TECH_SUPPORT_UNIT", "3");
        				} else if (e.newvalue == "003") {
        					obj.setColumn(e.row, "TECH_SUPPORT_UNIT", "4");
        				}
        				obj.set_enableevent(true);
        			}
        		}
        	}
        	if (e.columnid == "EXECUTION_TYPE") {
        		var sTechSupprotUnit = obj.getColumn(e.row, "TECH_SUPPORT_UNIT");
        		if (this.gfnIsEmpty(sTechSupprotUnit)) {
        			obj.set_enableevent(false);
        			if (e.newvalue == "001") {
        				obj.setColumn(e.row, "TECH_SUPPORT_UNIT", "1");
        			} else if (e.newvalue == "002") {
        				obj.setColumn(e.row, "TECH_SUPPORT_UNIT", "3");
        			} else if (e.newvalue == "003") {
        				obj.setColumn(e.row, "TECH_SUPPORT_UNIT", "4");
        			}
        			obj.set_enableevent(true);
        		}
        	}
        };

        this.fn_SendMail = function(sKind)
        {
        	var nCurrow = this.dsList.rowposition;
        	var sProjectCd = this.dsList.getColumn(nCurrow, "PROJECT_CODE");
        	var sSalesEmpNm = this.dsList.getColumn(nCurrow, "SALES_EMP_NAME");
        	var sSalesEmpNo = this.dsList.getColumn(nCurrow, "SALES_EMP_NO");
        	var sSalesEmpEmail = this.dsList.getColumn(nCurrow, "SALES_EMP_EMAIL");
        	var sContractMain = this.dsList.getColumn(nCurrow, "CONTRACT_MAIN");
        	var sContractMainNm = this.dsList.getColumn(nCurrow, "CONTRACT_MAIN_NAME");
        	var sSubject = "("+sContractMainNm+")"+this.gfnGetTransTxt(22732,"여신평가 요청의 건");

        	if (this.gfnIsEmpty(sSalesEmpEmail)) {
        		alert(this.gfnGetTransTxt(1506,"담당영업의 Email 주소를 확인후 입력해 주세요"));
        		return;
        	}

        	if (this.gfnIsEmpty(sSalesEmpNo)) {
        		alert(this.gfnGetTransTxt(1507,"담당영업을 입력해 주세요"));
        		return;
        	}

        	this.gfnAddSendParameter("PROJECT_CODE",	sProjectCd);
        	this.gfnAddSendParameter("SALES_EMP_NO",	sSalesEmpNo);
        	this.gfnAddSendParameter("CONTRACT_MAIN",	sContractMain);
        	this.gfnAddSendParameter("TO_ADDRESS",		"tax@tobesoft.com");
        	this.gfnAddSendParameter("TO_NAME",			"tax@tobesoft.com");
        	this.gfnAddSendParameter("FROM_ADDRESS",	sSalesEmpEmail);
        	this.gfnAddSendParameter("FROM_NAME",		sSalesEmpNm);
        	this.gfnAddSendParameter("SUBJECT",			sSubject);
        	this.gfnAddSendParameter("CONTENTS",		this.fn_getMailContents());
        	this.gfnCommonTransaction("SendMail", 		"SS_PresalesSendMail_R01");
        }

        this.fn_getMailContents = function()
        {
        	var nCurrow = this.dsList.rowposition;
        	var sContractMain = this.dsList.getColumn(nCurrow, "CONTRACT_MAIN");
        	var sContractMainNm = this.dsList.getColumn(nCurrow, "CONTRACT_MAIN_NAME");
        	var sClientNm = this.dsList.getColumn(nCurrow, "CLIENT_NAME");
        	var sProjectNm = this.dsList.getColumn(nCurrow, "PROJECT_NAME");
        	var sSalesEmpNm = this.dsList.getColumn(nCurrow, "SALES_EMP_NAME");

        	var contents =
        	'<table width="700" border="0" cellspacing="0" cellpadding="0" style="table-layout">'+
        		'<tbody>'+
        			'<tr>'+
        				'<td width="800" height="100" align="left" valign="top" bgcolor="#FFFFFF">'+
        				'<table width="800" height="100" border="0" cellpadding="0" cellspacing="0">'+
        					'<tbody>'+
        						'<tr>'+
        							'<td align="left" valign="top"><font size="2" face="돋움">'+
        							'<p></p>'+
        							'<p>여신한도평가 요청건이 도착하였습니다.<br /><br />'+
        							'<br />'+
        							'</font>'+

        							'<table border="0" width="800">'+
        								'<tbody>'+
        									'<tr>'+
        										'<td width="130"><span style="font-size:10.0pt;font-family:돋움">ㆍ계약처</span></td>'+
        										'<td width="10"><span style="font-size:10.0pt;font-family:돋움"> : </span></td>'+
        										'<td><span style="font-size:10.0pt;font-family:돋움"> '+sContractMainNm+' </span></td>'+
        									'</tr>'+
        									'<tr>'+
        										'<td width="130"><span style="font-size:10.0pt;font-family:돋움">ㆍ고객사/프로젝트</span></td>'+
        										'<td width="10"><span style="font-size:10.0pt;font-family:돋움"> : </span></td>'+
        										'<td><span style="font-size:10.0pt;font-family:돋움"> '+sClientNm+' / '+sProjectNm+' </span></td>'+
        									'</tr>'+
        									'<tr>'+
        										'<td width="130"><span style="font-size:10.0pt;font-family:돋움">ㆍ요청자</span></td>'+
        										'<td width="10"><span style="font-size:10.0pt;font-family:돋움"> : </span></td>'+
        										'<td><span style="font-size:10.0pt;font-family:돋움"> '+sSalesEmpNm+' </span></td>'+
        									'</tr>'+
        								'</tbody>'+
        							'</table>'+
        							'</td>'+
        						'</tr>'+
        						'<table border="0" width="800"><tbody>'+
        							'<tr>'+
        								'<td><span style="font-size:10.0pt;font-family:돋움"><br /><br />[화면연결]</span></td>'+
        							'</tr>'+
        							'<tr>'+
        								'<td><span style="font-size:10.0pt;font-family:돋움">'+
        									'<a href="' + nexacro.getEnvironment().services["ServiceURL"].url + 'index.jsp?FRM_SEQ=254&CONTRACT_MAIN='+sContractMain+'" style="font-size:10.0pt;font-family:돋움">'+ nexacro.getEnvironment().services["ServiceURL"].url + 'index.jsp?FRM_SEQ=254&CONTRACT_MAIN='+sContractMain + '</a>'+
        								'</span></td>'+
        							'</tr>'+
        						'</tbody></table>'+
        					'</tbody>'+
        				'</table>'+
        				'</td>'+
        			'</tr>'+
        		'</tbody>'+
        	'</table>';

        	return contents;
        }

        this.tab_Progess_tpg_PersonInCharge_grd_PersonInCharge_oncelldblclick = function(obj,e)
        {
        	var sArgument = {COMPANY_CODE : this.dsAddressbookList.getColumn(e.row, "COMPANY_CODE"), TAB_INDEX:3, MODE:"E"};
        	this.commUtil.popup(this, "CompanyReg", "Sales::SC_CompanyReg.xfdl", -1, -1, null, null, true, true, false, sArgument, "fnPopupCallBack");
        };


        this.fn_getNexaNCheck = function(objDs)
        {
        	var bRtnVal = false;
        	if (objDs.rowcount > 0) {

        		for (var i=0; i<objDs.rowcount; i++) {
        			var sProductCd = objDs.getColumn(i, "PRODUCT_CODE");
        			if(!this.gfnIsEmpty(sProductCd))
        			{
        				if (sProductCd.substr(0, 3) == "P06") {
        					bRtnVal = true;
        					break;
        				}
        			}
        		}
        	}
        	return bRtnVal;
        }

        this.divDet_divDet1_divProd_btn_ContractUnion_onclick = function(obj,e)
        {
        	if (this.dsContractProd.rowcount > 0)
        	{
        		var sArgument = {pvContractNo : this.dsContractProd.getColumn(this.dsContractProd.rowposition, "CONTRACT_NO"), pvProjectCd : this.dsContractProd.getColumn(this.dsContractProd.rowposition, "PROJECT_CODE")};
        		this.commUtil.popup(this, "ContractLicenseUnionReg", "Sales::SS_ContractLicenseUnionPopup.xfdl", -1, -1, null, null, true, true, false, sArgument, "fnPopupCallBack");
        	}
        };

        this.dsContractProd_onrowposchanged = function(obj,e)
        {
        	if(this.dsContractProd.rowcount > 0) {
        		var bNexaNFlag = this.fn_getNexaNCheck(this.dsContractProd);
        		if (bNexaNFlag) {
        			this.divDet.form.divDet1.form.divProd.form.btn_ContractUnion.set_enable(true);
        		} else {
        			this.divDet.form.divDet1.form.divProd.form.btn_ContractUnion.set_enable(false);
        		}
        	} else {
        		this.divDet.form.divDet1.form.divProd.form.btn_ContractUnion.set_enable(false);
        	}
        };

        this.cmb_SalesProduct_onitemchanged = function(obj,e)
        {
        	var sProdCD = this.ds_cmm_Product.getColumn(e.postindex, "PRODUCT_CODE");
        	var nRow = this.ds_cmm_BusinessType.findRow("VAL1", sProdCD);
        	this.cmb_BusinessType.set_index(nRow<0?0:nRow);
        };

        this.dsPurchaseList_oncolumnchanged = function(obj,e)
        {
        	var sCocd = nexacro.getApplication().gdsUserInfo.getColumn(0, "CO_CD");

        	if(sCocd == "J02") {
        		if(e.columnid == "COMMISSION_RATE") {
        			var sProductCode = this.dsPurchaseList.getColumn(e.row, "PRODUCT_CODE");
        			var sContractPrice = this.fnGetContractPrice(sProductCode);

        			if(!this.gfnIsEmpty(sContractPrice)) {
        				obj.setColumn(e.row, "CONTRACT_PRICE", sContractPrice * e.newvalue / 100);
        			}
        		} else if(e.columnid == "CONTRACT_PRICE") {
        			var sProductCode = this.dsPurchaseList.getColumn(e.row, "PRODUCT_CODE");
        			var sContractPrice = this.fnGetContractPrice(sProductCode);

        			if(!this.gfnIsEmpty(sContractPrice)) {
        				obj.setColumn(e.row, "COMMISSION_RATE", e.newvalue * 100 / sContractPrice);
        			}
        		}
        	}
        };

        this.fnGetContractPrice = function(sProductCode)
        {
        	var findRow = this.dsContractProd.findRow("PRODUCT_CODE", sProductCode);
        	if(findRow > -1) return this.dsContractProd.getColumn(findRow, "CONTRACT_PRICE");
        	else findRow = this.dsContractGoods.findRow("PRODUCT_CODE", sProductCode);

        	if(findRow > -1) return this.dsContractGoods.getColumn(findRow, "CONTRACT_PRICE");
        };

        this.cal_ContractDate_onchanged = function(obj,e)
        {
        	var sContractDate = e.postvalue;
        	var sPurchaseCnt = this.dsPurchaseList.rowcount;

        	if(!this.gfnIsEmpty(sContractDate)) {
        		if(sPurchaseCnt > 0) {
        			for(var i = 0; i < sPurchaseCnt; i++) {
        				this.dsPurchaseList.setColumn(i, "CONTRACT_DATE", sContractDate);
        			}
        		}
        	}
        };

        this.edt_ContractName_onchanged = function(obj,e)
        {
        	var sContractName = e.postvalue;
        	var sPurchaseCnt = this.dsPurchaseList.rowcount;

        	if(!this.gfnIsEmpty(sContractName)) {
        		if(sPurchaseCnt > 0) {
        			for(var i = 0; i < sPurchaseCnt; i++) {
        				this.dsPurchaseList.setColumn(i, "CONTRACT_NAME", sContractName);
        			}
        		}
        	}
        };









        /***************************************************************
        		[계약금액 마스킹 처리] 1. grid display type (mask)
        ***************************************************************
        this.gfn_getPriceDisplayType = function(edttype)
        {
        	var sRtnVal= "";
        	if (this.gfnIsEmpty(edttype)) edttype = "normal";

        	if (this.FV_AUTH_PRICE_MASK) {
        		sRtnVal = "mask";
        	} else {
        		sRtnVal = edttype;
        	}
        	return sRtnVal;
        }

        /***************************************************************
        		[계약금액 마스킹 처리] 2. grid MaskEdit type (string)
        ***************************************************************
        this.gfn_getPriceMaskEdtType = function()
        {
        	var sRtnVal= "";
        	if (this.FV_AUTH_PRICE_MASK) {
        		sRtnVal = "string";
        	} else {
        		sRtnVal = "number";
        	}
        	return sRtnVal;
        }


        /***************************************************************
        		[계약금액 마스킹 처리] 3. grid Maskformat ({@...@})
        ***************************************************************
        this.gfn_getPriceMaskformat = function(nVal)
        {
        	var sRtnVal= "";
        	if (this.FV_AUTH_PRICE_MASK) {
        		sRtnVal= "{";
        		var ntxtLen = nVal.toString().length;

        		if (ntxtLen>0) {
        			for (var i=0; i<ntxtLen; i++) {
        				sRtnVal = sRtnVal + "@";
        				if (i == ntxtLen-1) {
        					sRtnVal = sRtnVal + "}";
        				}
        			}
        		} else {
        			sRtnVal = sRtnVal + "}";
        		}
        	} else {
        		sRtnVal = "#,##0";
        	}
        	return sRtnVal;
        }
        */
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SS_Presales_onload,this);
            this.tab_Progess.addEventHandler("onchanged",this.Div03_Tab00_onchanged,this);
            this.tab_Progess.tpg_PersonInCharge.form.grd_PersonInCharge.addEventHandler("oncelldblclick",this.tab_Progess_tpg_PersonInCharge_grd_PersonInCharge_oncelldblclick,this);
            this.cmb_SalesProduct.addEventHandler("onitemchanged",this.cmb_SalesProduct_onitemchanged,this);
            this.edt_ContractName.addEventHandler("onchanged",this.edt_ContractName_onchanged,this);
            this.cal_ContractDate.addEventHandler("onchanged",this.cal_ContractDate_onchanged,this);
            this.cmb_SalesEmpNo.addEventHandler("onitemchanged",this.cmb_SalesEmpNo_onitemchanged,this);
            this.btn_Add.addEventHandler("onclick",this.CommAddRow_onclick,this);
            this.btn_Del.addEventHandler("onclick",this.CommDelRow_onclick,this);
            this.divDet.form.divDet1.form.divProd.form.grd_SalesProd.addEventHandler("onexpandup",this.divDet_divDet1_divProd_grd_SalesProd_onexpandup,this);
            this.divDet.form.divDet1.form.divProd.form.btn_ProdDel.addEventHandler("onclick",this.CommDelRow_onclick,this);
            this.divDet.form.divDet1.form.divProd.form.btn_ProdAdd.addEventHandler("onclick",this.CommAddRow_onclick,this);
            this.divDet.form.divDet1.form.divProd.form.btn_ContractUnion.addEventHandler("onclick",this.divDet_divDet1_divProd_btn_ContractUnion_onclick,this);
            this.divDet.form.divDet1.form.divGoods.form.grd_Salesgoods.addEventHandler("onexpandup",this.divDet_divDet1_divGoods_grd_Salesgoods_onexpandup,this);
            this.divDet.form.divDet1.form.divGoods.form.btn_GoodsDel.addEventHandler("onclick",this.CommDelRow_onclick,this);
            this.divDet.form.divDet1.form.divGoods.form.btn_GoodsAdd.addEventHandler("onclick",this.CommAddRow_onclick,this);
            this.divDet.form.divDet2.form.divSi.form.grd_SalesSi.addEventHandler("oncellclick",this.divDet_divDet2_divSi_grd_SalesSi_oncellclick,this);
            this.divDet.form.divDet2.form.divSi.form.btn_SiAdd.addEventHandler("onclick",this.CommAddRow_onclick,this);
            this.divDet.form.divDet2.form.divSi.form.btn_SiDel.addEventHandler("onclick",this.CommDelRow_onclick,this);
            this.divDet.form.divDet2.form.divSi.form.btn_Labor_Require.addEventHandler("onclick",this.divDet_divDet2_divSi_btn_Labor_Require_onclick,this);
            this.divDet.form.divDet2.form.divCS.form.grd_SalesCS.addEventHandler("oncellclick",this.divDet_divDet2_divSi_grd_SalesSi_oncellclick,this);
            this.divDet.form.divDet2.form.divCS.form.btn_CSAdd.addEventHandler("onclick",this.CommAddRow_onclick,this);
            this.divDet.form.divDet2.form.divCS.form.btn_CSDel.addEventHandler("onclick",this.CommDelRow_onclick,this);
            this.divDet.form.divDet2.form.divCS.form.btn_Labor_Require2.addEventHandler("onclick",this.divDet_divDet2_divCS_btn_Labor_Require2_onclick,this);
            this.divDet.form.divDet2.form.divPur.form.grd_SalesPurchase.addEventHandler("onexpandup",this.divDet_divDet2_divPur_grd_SalesPurchase_onexpandup,this);
            this.divDet.form.divDet2.form.divPur.form.btn_PurDel.addEventHandler("onclick",this.CommDelRow_onclick,this);
            this.divDet.form.divDet2.form.divPur.form.btn_PurAdd.addEventHandler("onclick",this.CommAddRow_onclick,this);
            this.divDet.form.divDet2.form.divPur.form.btn_ContractLink.addEventHandler("onclick",this.divDet_divDet2_divPur_btn_ContractLink_onclick,this);
            this.cmb_BusinessType.addEventHandler("onitemchanged",this.cmb_BusinessType_onitemchanged,this);
            this.div_InConfirm.form.btn_Confirm.addEventHandler("onclick",this.div_InConfirm_btn_Confirm_onclick,this);
            this.div_InConfirm.form.btn_Exit.addEventHandler("onclick",this.div_InConfirm_btn_Exit_onclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
            this.dsContractProd.addEventHandler("oncolumnchanged",this.dsContractProd_oncolumnchanged,this);
            this.dsContractProd.addEventHandler("onrowposchanged",this.dsContractProd_onrowposchanged,this);
            this.dsContractSi.addEventHandler("oncolumnchanged",this.dsContractSi_oncolumnchanged,this);
            this.dsContractSi.addEventHandler("onload",this.dsContractSi_onload,this);
            this.dsContractCS.addEventHandler("onload",this.dsContractCS_onload,this);
            this.dsContractCS.addEventHandler("oncolumnchanged",this.dsContractSi_oncolumnchanged,this);
            this.dsContractGoods.addEventHandler("oncolumnchanged",this.dsContractGoods_oncolumnchanged,this);
            this.dsPurchaseList.addEventHandler("oncolumnchanged",this.dsPurchaseList_oncolumnchanged,this);
        };
        this.loadIncludeScript("SS_Presales.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
