(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("statusOP");
            this.set_titletext("MainFrame");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCodeStatus", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"name\">회사</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"name\">부분</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"name\">본부</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"name\">그룹</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"name\">팀</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsParam1", this);
            obj._setContents("<ColumnInfo><Column id=\"OTHERCO_FLAG\" type=\"string\" size=\"256\"/><Column id=\"PROJECT_NAME\" type=\"string\" size=\"256\"/><Column id=\"COMPANY_NAME\" type=\"string\" size=\"256\"/><Column id=\"DATE_OPTION\" type=\"string\" size=\"256\"/><Column id=\"PCM\" type=\"string\" size=\"256\"/><Column id=\"IEL\" type=\"string\" size=\"256\"/><Column id=\"EMPLOYEE\" type=\"string\" size=\"256\"/><Column id=\"YEAR_CONTRACT\" type=\"string\" size=\"256\"/><Column id=\"CORPORATE\" type=\"string\" size=\"256\"/><Column id=\"FREELANCER\" type=\"string\" size=\"256\"/><Column id=\"DEVELOPER\" type=\"string\" size=\"256\"/><Column id=\"LEVEL\" type=\"string\" size=\"256\"/><Column id=\"ROLE\" type=\"string\" size=\"256\"/><Column id=\"PRODUCT\" type=\"string\" size=\"256\"/><Column id=\"STARTDATE\" type=\"string\" size=\"256\"/><Column id=\"ENDDATE\" type=\"string\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput1", this);
            obj._setContents("<ColumnInfo><Column id=\"CLIENT_CODE\" type=\"string\" size=\"20\"/><Column id=\"CLIENT_NAME\" type=\"string\" size=\"100\"/><Column id=\"PROJECT_CODE\" type=\"string\" size=\"15\"/><Column id=\"PROJECT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CONTRACT_NO\" type=\"string\" size=\"10\"/><Column id=\"CO_CD\" type=\"string\" size=\"60\"/><Column id=\"CONTRACT_TYPE\" type=\"string\" size=\"20\"/><Column id=\"CONTRACT_NAME\" type=\"string\" size=\"100\"/><Column id=\"SALES_EMP_NO\" type=\"string\" size=\"60\"/><Column id=\"SALES_EMP_NAME\" type=\"string\" size=\"255\"/><Column id=\"PSE_SEQ\" type=\"bigdecimal\" size=\"20\"/><Column id=\"FREE_SVC_FLAG\" type=\"string\" size=\"1\"/><Column id=\"FREE_KIND\" type=\"string\" size=\"4\"/><Column id=\"LEVEL_CODE\" type=\"string\" size=\"20\"/><Column id=\"LEVEL_NAME\" type=\"string\" size=\"100\"/><Column id=\"ROLE_CODE\" type=\"string\" size=\"20\"/><Column id=\"ROLE_NAME\" type=\"string\" size=\"100\"/><Column id=\"PRODUCT_CODE\" type=\"string\" size=\"20\"/><Column id=\"PRODUCT_NAME\" type=\"string\" size=\"100\"/><Column id=\"EMP_NO\" type=\"string\" size=\"100\"/><Column id=\"EMP_NAME\" type=\"string\" size=\"255\"/><Column id=\"CO_KIND\" type=\"string\" size=\"6\"/><Column id=\"EMP_CO_CD\" type=\"string\" size=\"60\"/><Column id=\"EMP_CO_NAME\" type=\"string\" size=\"100\"/><Column id=\"CONTRACT_NO_PURCHASE\" type=\"string\" size=\"10\"/><Column id=\"PURCHASE_TYPE\" type=\"string\" size=\"20\"/><Column id=\"PURCHASE_TYPE_NAME\" type=\"string\" size=\"100\"/><Column id=\"START_DATE\" type=\"string\" size=\"8\"/><Column id=\"END_PLAN_DATE\" type=\"string\" size=\"8\"/><Column id=\"END_DATE\" type=\"string\" size=\"8\"/><Column id=\"P_START_DATE\" type=\"string\" size=\"8\"/><Column id=\"P_END_DATE\" type=\"string\" size=\"8\"/><Column id=\"INSERT_EMP_NO\" type=\"string\" size=\"60\"/><Column id=\"INSERT_EMP_NAME\" type=\"string\" size=\"255\"/><Column id=\"RSSC_REMARKS\" type=\"string\" size=\"1073741823\"/><Column id=\"PSE_REMARKS\" type=\"string\" size=\"1073741823\"/><Column id=\"COLOR\" type=\"string\" size=\"4\"/><Column id=\"COLOR2\" type=\"string\" size=\"255\"/><Column id=\"UNIT_COST\" type=\"bigdecimal\" size=\"20\"/><Column id=\"EXPENSE\" type=\"bigdecimal\" size=\"20\"/><Column id=\"CON_UNIT_COST\" type=\"bigdecimal\" size=\"20\"/><Column id=\"NONRESIDENT_FLAG\" type=\"string\" size=\"1\"/><Column id=\"MEN_MONTH\" type=\"bigdecimal\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsItemMon", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput1_00", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"DEPT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CD_CODE\" type=\"string\" size=\"20\"/><Column id=\"CAPTION\" type=\"string\" size=\"100\"/><Column id=\"BUSINESS_TYPE\" type=\"string\" size=\"20\"/><Column id=\"GOAL\" type=\"bigdecimal\" size=\"20\"/><Column id=\"RESULT\" type=\"bigdecimal\" size=\"20\"/><Column id=\"GOAL_Y\" type=\"bigdecimal\" size=\"20\"/><Column id=\"RESULT_Y\" type=\"bigdecimal\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsItem", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"DEPT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CD_CODE\" type=\"string\" size=\"20\"/><Column id=\"CAPTION\" type=\"string\" size=\"100\"/><Column id=\"BUSINESS_TYPE\" type=\"string\" size=\"20\"/><Column id=\"GOAL\" type=\"bigdecimal\" size=\"20\"/><Column id=\"RESULT\" type=\"bigdecimal\" size=\"20\"/><Column id=\"GOAL_Y\" type=\"bigdecimal\" size=\"20\"/><Column id=\"RESULT_Y\" type=\"bigdecimal\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput2", this);
            obj._setContents("<ColumnInfo><Column id=\"CONTRACT_TYPE\" type=\"string\" size=\"40\"/><Column id=\"CONTRACT_TYPE_NAME\" type=\"string\" size=\"100\"/><Column id=\"CLIENT_CODE\" type=\"string\" size=\"20\"/><Column id=\"COMPANY_NAME\" type=\"string\" size=\"100\"/><Column id=\"INDUSTRY\" type=\"string\" size=\"100\"/><Column id=\"PROJECT_CODE\" type=\"string\" size=\"15\"/><Column id=\"PROJECT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CONTRACT_NO\" type=\"string\" size=\"20\"/><Column id=\"CONTRACT_NAME\" type=\"string\" size=\"100\"/><Column id=\"DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"DEPT_NAME\" type=\"string\" size=\"100\"/><Column id=\"SALES_EMP_NO\" type=\"string\" size=\"120\"/><Column id=\"SALES_EMP_NAME\" type=\"string\" size=\"255\"/><Column id=\"CL_01\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_02\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_03\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_04\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_05\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_06\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_07\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_08\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_09\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_10\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_11\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_12\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_H01\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_H02\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_Y\" type=\"bigdecimal\" size=\"40\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput2_Copy", this);
            obj._setContents("<ColumnInfo><Column id=\"CONTRACT_TYPE\" type=\"string\" size=\"40\"/><Column id=\"CONTRACT_TYPE_NAME\" type=\"string\" size=\"100\"/><Column id=\"CLIENT_CODE\" type=\"string\" size=\"20\"/><Column id=\"COMPANY_NAME\" type=\"string\" size=\"100\"/><Column id=\"INDUSTRY\" type=\"string\" size=\"100\"/><Column id=\"PROJECT_CODE\" type=\"string\" size=\"15\"/><Column id=\"PROJECT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CONTRACT_NO\" type=\"string\" size=\"20\"/><Column id=\"CONTRACT_NAME\" type=\"string\" size=\"100\"/><Column id=\"DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"DEPT_NAME\" type=\"string\" size=\"100\"/><Column id=\"SALES_EMP_NO\" type=\"string\" size=\"120\"/><Column id=\"SALES_EMP_NAME\" type=\"string\" size=\"255\"/><Column id=\"CL_01\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_02\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_03\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_04\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_05\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_06\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_07\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_08\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_09\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_10\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_11\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_12\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_H01\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_H02\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_Y\" type=\"bigdecimal\" size=\"40\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput3", this);
            obj._setContents("<ColumnInfo><Column id=\"CONTRACT_TYPE\" type=\"string\" size=\"40\"/><Column id=\"CONTRACT_TYPE_NAME\" type=\"string\" size=\"100\"/><Column id=\"CLIENT_CODE\" type=\"string\" size=\"20\"/><Column id=\"COMPANY_NAME\" type=\"string\" size=\"100\"/><Column id=\"INDUSTRY\" type=\"string\" size=\"100\"/><Column id=\"PROJECT_CODE\" type=\"string\" size=\"15\"/><Column id=\"PROJECT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CONTRACT_NO\" type=\"string\" size=\"20\"/><Column id=\"CONTRACT_NAME\" type=\"string\" size=\"100\"/><Column id=\"DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"DEPT_NAME\" type=\"string\" size=\"100\"/><Column id=\"SALES_EMP_NO\" type=\"string\" size=\"120\"/><Column id=\"SALES_EMP_NAME\" type=\"string\" size=\"255\"/><Column id=\"CL_01\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_02\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_03\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_04\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_05\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_06\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_07\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_08\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_09\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_10\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_11\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_12\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_H01\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_H02\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_Y\" type=\"bigdecimal\" size=\"40\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGlobal", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"string\" size=\"60\"/><Column id=\"EMP_NM\" type=\"string\" size=\"100\"/><Column id=\"DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"DEPT_NM\" type=\"string\" size=\"100\"/><Column id=\"EMAIL\" type=\"string\" size=\"268\"/><Column id=\"MOBILE\" type=\"string\" size=\"44\"/><Column id=\"OFFICE\" type=\"string\" size=\"20\"/><Column id=\"GRADE_CD\" type=\"string\" size=\"30\"/><Column id=\"GRADE_NM\" type=\"string\" size=\"100\"/><Column id=\"DUTY_CD\" type=\"string\" size=\"30\"/><Column id=\"DUTY_NM\" type=\"string\" size=\"100\"/><Column id=\"EMP_KIND\" type=\"string\" size=\"255\"/><Column id=\"CO_CD\" type=\"string\" size=\"30\"/><Column id=\"CO_NM\" type=\"string\" size=\"100\"/><Column id=\"LOGIN_SYS\" type=\"string\" size=\"10\"/><Column id=\"LANGUAGE\" type=\"string\" size=\"10\"/><Column id=\"MODEL_ID\" type=\"string\" size=\"50\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChart", this);
            obj._setContents("<ColumnInfo><Column id=\"label\" type=\"STRING\" size=\"256\"/><Column id=\"start\" type=\"DATE\" size=\"256\"/><Column id=\"end\" type=\"DATE\" size=\"256\"/><Column id=\"complete\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"linewidth\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"color\" type=\"STRING\" size=\"256\"/><Column id=\"bgcolor\" type=\"STRING\" size=\"256\"/><Column id=\"link\" type=\"STRING\" size=\"256\"/><Column id=\"org_start\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"label\">Saas Project</Col><Col id=\"start\">20221128</Col><Col id=\"end\">20230131</Col><Col id=\"complete\">30</Col><Col id=\"linewidth\">0</Col><Col id=\"color\">linear-gradient(to bottom,#1D4E82:#2C69B8:#67A0E1:#2C69B8:#1D4E82)</Col><Col id=\"bgcolor\">#D1EBF6</Col></Row><Row><Col id=\"label\">Server Install</Col><Col id=\"start\">20221128</Col><Col id=\"end\">20221223</Col><Col id=\"complete\">50</Col><Col id=\"linewidth\">0</Col><Col id=\"color\">linear-gradient(to bottom,#1D4E82:#2C69B8:#67A0E1:#2C69B8:#1D4E82)</Col><Col id=\"bgcolor\">#D1EBF6</Col></Row><Row><Col id=\"label\">Install Apache</Col><Col id=\"start\">20221128</Col><Col id=\"end\">20221206</Col><Col id=\"complete\">100</Col><Col id=\"linewidth\">0</Col><Col id=\"color\">linear-gradient(to bottom,#79C680,#8EE997,#79C680)</Col><Col id=\"bgcolor\">#D1EBF6</Col><Col id=\"link\">Install Test</Col></Row><Row><Col id=\"label\">Install Tomcat</Col><Col id=\"start\">20221207</Col><Col id=\"end\">20221215</Col><Col id=\"complete\">70</Col><Col id=\"linewidth\">0</Col><Col id=\"color\">linear-gradient(to bottom,#79C680,#8EE997,#79C680)</Col><Col id=\"bgcolor\">#D1EBF6</Col><Col id=\"link\">Install Test</Col></Row><Row><Col id=\"label\">Install DB(MySQL)</Col><Col id=\"start\">20221207</Col><Col id=\"end\">20221216</Col><Col id=\"complete\">30</Col><Col id=\"linewidth\">0</Col><Col id=\"color\">linear-gradient(to bottom,#d43346:#d95060:#cf747e:#d95060:#d43346)</Col><Col id=\"bgcolor\">#D1EBF6</Col><Col id=\"link\">Install Test</Col></Row><Row><Col id=\"label\">Install Test</Col><Col id=\"start\">20221219</Col><Col id=\"end\">20221223</Col><Col id=\"complete\">30</Col><Col id=\"linewidth\">0</Col><Col id=\"color\">linear-gradient(to bottom,#d43346:#d95060:#cf747e:#d95060:#d43346)</Col><Col id=\"bgcolor\">#D1EBF6</Col><Col id=\"link\">Web Source</Col></Row><Row><Col id=\"label\">Deploy</Col><Col id=\"start\">20221226</Col><Col id=\"end\">20230131</Col><Col id=\"complete\">30</Col><Col id=\"linewidth\">0</Col><Col id=\"color\">linear-gradient(to bottom,#1D4E82:#2C69B8:#67A0E1:#2C69B8:#1D4E82)</Col><Col id=\"bgcolor\">#D1EBF6</Col></Row><Row><Col id=\"label\">Web Source</Col><Col id=\"start\">20221226</Col><Col id=\"end\">20230120</Col><Col id=\"complete\">10</Col><Col id=\"linewidth\">0</Col><Col id=\"color\">linear-gradient(to bottom,#1D4E82:#2C69B8:#67A0E1:#2C69B8:#1D4E82)</Col><Col id=\"bgcolor\">#D1EBF6</Col><Col id=\"link\">Was Souce</Col></Row><Row><Col id=\"label\">Was Souce</Col><Col id=\"start\">20230123</Col><Col id=\"end\">20230131</Col><Col id=\"complete\">10</Col><Col id=\"linewidth\">0</Col><Col id=\"color\">linear-gradient(to bottom,#1D4E82:#2C69B8:#67A0E1:#2C69B8:#1D4E82)</Col><Col id=\"bgcolor\">#D1EBF6</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","0","0","329","43",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("인력 투입 현황");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Static("staCon2_00_00_00",null,"8","56","23","127",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("기준월");
            obj.set_cssclass("sta_POP_PopTitle02");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal00",null,"8","107","21","13",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_dateformat("yyyy-MM");
            obj.set_editformat("yyyy-MM");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divDeviceDesc","5","1014","372","366",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div00");
            obj.set_border("2px solid #7c7c7c");
            obj.set_visible("false");
            obj.set_cssclass("div_MF_part");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("sta_dum00_00_00_00_00_00","1.36%","309",null,"34","10",null,null,null,null,null,this.divDeviceDesc.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_MF_detailL");
            this.divDeviceDesc.addChild(obj.name, obj);

            obj = new Static("sta_dum00_00_00_00_00","2.45%","276",null,"34","10",null,null,null,null,null,this.divDeviceDesc.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_MF_detailL");
            this.divDeviceDesc.addChild(obj.name, obj);

            obj = new Static("sta_state01_00","102","111",null,"34","10",null,null,null,null,null,this.divDeviceDesc.form);
            obj.set_taborder("22");
            obj.set_cssclass("sta_MF_detailL");
            this.divDeviceDesc.addChild(obj.name, obj);

            obj = new Static("sta_state01","102","78",null,"34","10",null,null,null,null,null,this.divDeviceDesc.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_MF_detailL");
            this.divDeviceDesc.addChild(obj.name, obj);

            obj = new Static("sta_state00_00_00_00_01","102","45",null,"34","10",null,null,null,null,null,this.divDeviceDesc.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_MF_detailL");
            this.divDeviceDesc.addChild(obj.name, obj);

            obj = new Static("sta_dum00","2.72%","144",null,"34","10",null,null,null,null,null,this.divDeviceDesc.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_MF_detailL");
            this.divDeviceDesc.addChild(obj.name, obj);

            obj = new Static("sta_dum00_00","2.45%","177",null,"34","10",null,null,null,null,null,this.divDeviceDesc.form);
            obj.set_taborder("16");
            obj.set_cssclass("sta_MF_detailL");
            this.divDeviceDesc.addChild(obj.name, obj);

            obj = new Static("sta_dum00_00_00","2.99%","210",null,"34","10",null,null,null,null,null,this.divDeviceDesc.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_MF_detailL");
            this.divDeviceDesc.addChild(obj.name, obj);

            obj = new Static("sta_dum00_00_00_00","2.72%","243",null,"34","10",null,null,null,null,null,this.divDeviceDesc.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_MF_detailL");
            this.divDeviceDesc.addChild(obj.name, obj);

            obj = new Static("sta_state","9","5",null,"34","10",null,null,null,null,null,this.divDeviceDesc.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_MF_title");
            this.divDeviceDesc.addChild(obj.name, obj);

            obj = new Static("sta02_00_00","10","112","91","33",null,null,null,null,null,null,this.divDeviceDesc.form);
            obj.set_taborder("0");
            obj.set_text("제품");
            obj.set_cssclass("sta_MF_detail");
            this.divDeviceDesc.addChild(obj.name, obj);

            obj = new Static("sta_state00","114","118",null,"21","31",null,null,null,null,null,this.divDeviceDesc.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDeviceDesc.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00","10","145","91","33",null,null,null,null,null,null,this.divDeviceDesc.form);
            obj.set_taborder("2");
            obj.set_text("등급");
            obj.set_cssclass("sta_MF_detail");
            this.divDeviceDesc.addChild(obj.name, obj);

            obj = new Static("sta_state00_00","114","150",null,"21","21",null,null,null,null,null,this.divDeviceDesc.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDeviceDesc.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00","10","178","91","33",null,null,null,null,null,null,this.divDeviceDesc.form);
            obj.set_taborder("4");
            obj.set_text("역할");
            obj.set_cssclass("sta_MF_detail");
            this.divDeviceDesc.addChild(obj.name, obj);

            obj = new Static("sta_state00_00_00","114","183",null,"21","21",null,null,null,null,null,this.divDeviceDesc.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDeviceDesc.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00_00","10","211","91","33",null,null,null,null,null,null,this.divDeviceDesc.form);
            obj.set_taborder("6");
            obj.set_text("프로젝트명");
            obj.set_cssclass("sta_MF_detail");
            this.divDeviceDesc.addChild(obj.name, obj);

            obj = new Static("sta_state00_00_00_00","114","216",null,"21","21",null,null,null,null,null,this.divDeviceDesc.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDeviceDesc.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00_00_00","10","244","91","33",null,null,null,null,null,null,this.divDeviceDesc.form);
            obj.set_taborder("8");
            obj.set_text("기간");
            obj.set_cssclass("sta_MF_detail");
            this.divDeviceDesc.addChild(obj.name, obj);

            obj = new Static("sta_state00_00_00_00_00","114","250",null,"21","31",null,null,null,null,null,this.divDeviceDesc.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDeviceDesc.addChild(obj.name, obj);

            obj = new Static("sta02_00_01","10","79","91","33",null,null,null,null,null,null,this.divDeviceDesc.form);
            obj.set_taborder("10");
            obj.set_text("회사구분");
            obj.set_cssclass("sta_MF_detail");
            this.divDeviceDesc.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00_00_01","10","46","91","33",null,null,null,null,null,null,this.divDeviceDesc.form);
            obj.set_taborder("12");
            obj.set_text("업체명");
            obj.set_cssclass("sta_MF_detail");
            this.divDeviceDesc.addChild(obj.name, obj);

            obj = new Static("sta_state00_01","114","52",null,"21","21",null,null,null,null,null,this.divDeviceDesc.form);
            obj.set_taborder("19");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDeviceDesc.addChild(obj.name, obj);

            obj = new Static("sta_state00_01_00","114","84",null,"21","21",null,null,null,null,null,this.divDeviceDesc.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDeviceDesc.addChild(obj.name, obj);

            obj = new Static("sta_state00_01_00_00","114","118",null,"21","21",null,null,null,null,null,this.divDeviceDesc.form);
            obj.set_taborder("21");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDeviceDesc.addChild(obj.name, obj);

            obj = new Button("btn00",null,"8","56","25","14",null,null,null,null,null,this.divDeviceDesc.form);
            obj.set_taborder("23");
            obj.set_text("Close");
            this.divDeviceDesc.addChild(obj.name, obj);

            obj = new Static("sta_state00_00_00_00_02","114","250",null,"21","21",null,null,null,null,null,this.divDeviceDesc.form);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDeviceDesc.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00_00_00_00","10","277","91","33",null,null,null,null,null,null,this.divDeviceDesc.form);
            obj.set_taborder("25");
            obj.set_text("월단가");
            obj.set_cssclass("sta_MF_detail");
            this.divDeviceDesc.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00_00_00_00_00","10","310","91","33",null,null,null,null,null,null,this.divDeviceDesc.form);
            obj.set_taborder("27");
            obj.set_text("투입단가");
            obj.set_cssclass("sta_MF_detail");
            this.divDeviceDesc.addChild(obj.name, obj);

            obj = new MaskEdit("msk00","109","284","227","22",null,null,null,null,null,null,this.divDeviceDesc.form);
            obj.set_taborder("29");
            obj.set_format("#,###");
            this.divDeviceDesc.addChild(obj.name, obj);

            obj = new MaskEdit("msk00_00","109","314","227","22",null,null,null,null,null,null,this.divDeviceDesc.form);
            obj.set_taborder("30");
            obj.set_format("#,###");
            this.divDeviceDesc.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS_vm","0","sta00:0",null,null,"20","10",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("ChartJS00");
            obj.set_border("1px solid #dddddd");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdiv00","557","903","394","363",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #dddddd");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta02_00_00","10","111","91","33",null,null,null,null,null,null,this.pdiv00.form);
            obj.set_taborder("0");
            obj.set_text("제품");
            obj.set_cssclass("sta_MF_detail");
            this.pdiv00.addChild(obj.name, obj);

            obj = new Static("sta_state00","114","117",null,"21","31",null,null,null,null,null,this.pdiv00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.pdiv00.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00","10","144","91","33",null,null,null,null,null,null,this.pdiv00.form);
            obj.set_taborder("2");
            obj.set_text("등급");
            obj.set_cssclass("sta_MF_detail");
            this.pdiv00.addChild(obj.name, obj);

            obj = new Static("sta_state00_00","114","149",null,"21","21",null,null,null,null,null,this.pdiv00.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_enable("false");
            this.pdiv00.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00","10","177","91","33",null,null,null,null,null,null,this.pdiv00.form);
            obj.set_taborder("4");
            obj.set_text("역할");
            obj.set_cssclass("sta_MF_detail");
            this.pdiv00.addChild(obj.name, obj);

            obj = new Static("sta_state00_00_00","114","182",null,"21","21",null,null,null,null,null,this.pdiv00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_enable("false");
            this.pdiv00.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00_00","10","210","91","33",null,null,null,null,null,null,this.pdiv00.form);
            obj.set_taborder("6");
            obj.set_text("프로젝트명");
            obj.set_cssclass("sta_MF_detail");
            this.pdiv00.addChild(obj.name, obj);

            obj = new Static("sta_state00_00_00_00","114","215",null,"21","21",null,null,null,null,null,this.pdiv00.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_enable("false");
            this.pdiv00.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00_00_00","10","243","91","33",null,null,null,null,null,null,this.pdiv00.form);
            obj.set_taborder("8");
            obj.set_text("기간");
            obj.set_cssclass("sta_MF_detail");
            this.pdiv00.addChild(obj.name, obj);

            obj = new Static("sta_state00_00_00_00_00","114","249",null,"21","31",null,null,null,null,null,this.pdiv00.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_LabelBg");
            this.pdiv00.addChild(obj.name, obj);

            obj = new Static("sta02_00_01","10","78","91","33",null,null,null,null,null,null,this.pdiv00.form);
            obj.set_taborder("10");
            obj.set_text("회사구분");
            obj.set_cssclass("sta_MF_detail");
            this.pdiv00.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00_00_01","10","45","91","33",null,null,null,null,null,null,this.pdiv00.form);
            obj.set_taborder("11");
            obj.set_text("업체명");
            obj.set_cssclass("sta_MF_detail");
            this.pdiv00.addChild(obj.name, obj);

            obj = new Static("sta_state00_01","114","51",null,"21","21",null,null,null,null,null,this.pdiv00.form);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_enable("false");
            this.pdiv00.addChild(obj.name, obj);

            obj = new Static("sta_state00_01_00","114","83",null,"21","21",null,null,null,null,null,this.pdiv00.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_enable("false");
            this.pdiv00.addChild(obj.name, obj);

            obj = new Static("sta_state00_01_00_00","114","117",null,"21","21",null,null,null,null,null,this.pdiv00.form);
            obj.set_taborder("14");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_enable("false");
            this.pdiv00.addChild(obj.name, obj);

            obj = new Static("sta_state00_00_00_00_02","114","249",null,"21","21",null,null,null,null,null,this.pdiv00.form);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_enable("false");
            this.pdiv00.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00_00_00_00","10","276","91","33",null,null,null,null,null,null,this.pdiv00.form);
            obj.set_taborder("16");
            obj.set_text("월단가");
            obj.set_cssclass("sta_MF_detail");
            this.pdiv00.addChild(obj.name, obj);

            obj = new Static("sta02_00_00_00_00_00_00_00_00","10","309","91","33",null,null,null,null,null,null,this.pdiv00.form);
            obj.set_taborder("17");
            obj.set_text("투입단가");
            obj.set_cssclass("sta_MF_detail");
            this.pdiv00.addChild(obj.name, obj);

            obj = new MaskEdit("msk00","114","283","227","22",null,null,null,null,null,null,this.pdiv00.form);
            obj.set_taborder("18");
            obj.set_format("#,###");
            obj.set_enable("false");
            this.pdiv00.addChild(obj.name, obj);

            obj = new MaskEdit("msk00_00","114","313","227","22",null,null,null,null,null,null,this.pdiv00.form);
            obj.set_taborder("19");
            obj.set_format("#,###");
            obj.set_enable("false");
            this.pdiv00.addChild(obj.name, obj);

            obj = new Static("sta_state01","9","5",null,"34","32",null,null,null,null,null,this.pdiv00.form);
            obj.set_taborder("20");
            obj.set_cssclass("sta_MF_title");
            this.pdiv00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divDeviceDesc.form
            obj = new Layout("default","",0,0,this.divDeviceDesc.form,function(p){});
            this.divDeviceDesc.form.addLayout(obj.name, obj);

            //-- Default Layout : this.pdiv00.form
            obj = new Layout("default","",0,0,this.pdiv00.form,function(p){});
            this.pdiv00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1080,736,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("resourceAll.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	statusVM1.xfdl
        *  @Creator
        *  @CreateDate
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************

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
        	this.gfnFormOnload(obj);
        	this.cal00.set_value(this.gfnGetDate("day").substr(0,8));
        	this.fnGetData();	// onsize에서 처리됨.
        };

        // 전체 DATA 가져오기
        this.fnGetData = function()
        {
        	this.fnGetMan();
        };


        //max size 변경
        this.form_onsize = function(obj,e)
        {

        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        /**
         * 구성도 서비스 호출
         * @return N/A
         */
        this.fvGoalCnt = 0;
        this.fnGetMan = function()
        {
        	this.gfnInitNextGlobalDataset(this.dsGlobal);

        	// POST http://next.tobesoft.com/FrontControllerServlet.do?service=xupservice&domain=NEXTp&model=SR_SalesResultAnalysis_S03&format=xml&version=xplatform&compress=false HTTP/1.1
        	var year = this.gfnGetDate("year");
        	var preyear = (parseInt(year) - 1) + "";
        	this.dsParam1.setColumn(0, "OTHERCO_FLAG", "0");
        	this.dsParam1.setColumn(0, "DATE_OPTION", "1");
        	this.dsParam1.setColumn(0, "PCM", "0");
        	this.dsParam1.setColumn(0, "IEL", "0");
        	this.dsParam1.setColumn(0, "EMPLOYEE", "1");
        	this.dsParam1.setColumn(0, "YEAR_CONTRACT", "1");
        	this.dsParam1.setColumn(0, "CORPORATE", "1");
        	this.dsParam1.setColumn(0, "FREELANCER", "1");
        	//this.dsParam1.setColumn(0, "BUSINESS_TYPE", "U");

        	var dt = new Date();
        	var objDate = new nexacro.Date(dt.getFullYear(), dt.getMonth, 1);
        	var nMs = objDate.addMonth(-12);

        	this.dsParam1.setColumn(0, "STARTDATE", objDate.getFullYear() + "01");
        	this.dsParam1.setColumn(0, "ENDDATE", this.cal00.value.substr(0,6));

        	var strSvcId 	= "man";
        	var strSvcUrl 	= "nextService.do";
        	var inData 		= "dsGlobal=dsGlobal:A dsParam=dsParam1:A";
        	var outData 	= "dsOutput1=dsOutput";
        	var strArg 		= "jobCode=" + nexacro.wrapQuote("next");
        	strArg 			+= " trxCode=" + nexacro.wrapQuote("month");
        	strArg 			+= " trxUrl=" + nexacro.wrapQuote("FrontControllerServlet.do?service=xupservice&domain=NEXTp&model=TS_StaffInputList_S01&format=xml&version=xplatform&compress=false");
        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, "fnCallback");
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //transaction
        this.fv_industrycnt = 0;
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg, oJson)
        {
        	switch(sSvcId) {
        		case "man":
        			console.log(this.dsOutput1.saveXML());
        			this.fnMonthChart();
        			break;
        		default:
        			break;
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        // Goal
        this.fnGetDate = function(s)
        {
        	var y = s.substr(0,4);
        	var m = parseInt(s.substr(4,2));
        	var d = parseInt(s.substr(6,2));
        	return new Date(y, m, d);
        };
        this.fnGetDate2 = function(s)
        {
        	var y = s.substr(0,4);
        	var m = s.substr(4,2);
        	var d = s.substr(6,2);
        	return y + "/" + m + "/" + d;
        };

        this.fnAddMonth = function(s, v)
        {
        	s = s + "";
        	var y = s.substr(0,4);
        	var m = parseInt(s.substr(4,2));
        	var d = parseInt(s.substr(6,2));
        	var x = new Date(y, m, d);
        	return x.addMonth(v);
        };

        this._fnSetDate = function(cDate, i, nRow)
        {
        	var s = this.dsOutput1.getColumn(i, "START_DATE");
        	var e = this.dsOutput1.getColumn(i, "END_DATE");
        	var s_r = s;

        	var complete = 0;
        	var diff2 = this.gfnGetDiffDate(s_r, cDate);
        	if(cDate < s_r) {
        		complete = 0;
        	} else if(cDate > e) {
        		complete = 100;
        	} else {
        		var diff1 = this.gfnGetDiffDate(s_r, e);
        		complete = parseInt((diff2/diff1)*100);
        	}
        	if(diff2 > 365) {
        		this.dsChart.setColumn(nRow, "start",this.gfnAddDate(cDate, -365));
        	} else {
        		this.dsChart.setColumn(nRow, "start", s);
        	}
        	this.dsChart.setColumn(nRow, "org_start", s_r);
        	this.dsChart.setColumn(nRow, "end", e);
        	this.dsChart.setColumn(nRow, "complete", complete);
        };

        this.fnMonthChart = function()
        {
        	var chart = this.ChartJS_vm;
        	var canvas = chart.getCanvas();
        	var cvs = canvas.id;
        	DxChart.reset(canvas);

        	// resize 처리 안함.
        	chart.set_autoresize(false);
        	//------------------------------------
        	var cDate = this.gfnGetDate("date");
        	this.dsChart.clearData();
        	this.dsChart.set_enableevent(false);

        	for(var i=0,len=this.dsOutput1.rowcount;i<len;i++) {
        		var nRow = this.dsChart.addRow();
        		this.dsChart.setColumn(nRow, "label", this.dsOutput1.getColumn(i, "EMP_NAME") + " - " + this.dsOutput1.getColumn(i, "CLIENT_NAME"));
        		this._fnSetDate(cDate, i, nRow);
        		this.dsChart.setColumn(nRow, "linewidth", 0);
        		this.dsChart.setColumn(nRow, "color", "linear-gradient(to bottom,#1D4E82:#2C69B8:#67A0E1:#2C69B8:#1D4E82)");
        		this.dsChart.setColumn(nRow, "bgcolor", "#D1EBF6");
        		this.dsChart.setColumn(nRow, "link", "");
        	}
        	this.dsChart.set_enableevent(true);

           var gantt = new DxChartGantt({
        		id: cvs,
        		elem : canvas,
        		binddataset : this.dsChart,
        		data: 'bind:start=start,bind:end=end,bind:complete=complete,bind:label=label,bind:linewidth=linewidth,bind:color=color,bind:bgcolor=background,bind:link=link',
        		options: {
        			variant: {Value:'month'},
        			margin: { Left:100, Top: 70, Inner : 7},
        			linked: {
        					Use: true,
        					LineColor: '#000000',
        					LineWidth: 1
        			},
        			xaxis: {
        				Use:true,
        				Position: 'top',
        				LabelsCount : 5,
        				DateFormat: 'yyyy-MM-dd',

        				WeekList: ['','','','','','',''],
        				WeeklyTitleFontStyle: 'bold 10px noto,Tahoma',
        				WeeklyTitleColor: '#000000',
        				WeeklySubTitleFontStyle: '10px noto,Tahoma',
        				WeeklySubTitleColor: '#0000ff',
        				WeeklyDateWidth: 2,
        				WeeklySundayColor : '#ff0000',
        				WeeklySundayBackgroundColor : '#eeeeee',
        				WeeklyTitleBackgroundColor: '#99ffcc',
        				WeeklySubTitleBackgroundColor: '',
        				WeeklyTitleHeight: 30,
        				WeeklySubTitleHeight: 0,
        				WeeklyTitleLineWidth: 2,
        				WeeklyTitleLineColor: '#000000',
        				WeeklySubTitleLineWidth: 1,
        				WeeklySubTitleLineColor: '#777777',
        				WeeklyVLineWidth: 1,
        				WeeklyVLineColor: '#000000',
        				WeeklyVSubLineWidth: 1,
        				WeeklyVSubLineColor: '#dddddd',
        				WeeklyRowHeight: 36,
        				WeeklyHLineWidth: 1,
        				WeeklyHLineColor: '#eeeeee',
        			},
        			labels: {
        				FontStyle: 'bold 9px noto,Tahoma',
        				Color: '#000000',
        				Complete: false
        			},
        			tooltips: {
        						Data : '%{label}<br>START: %{start}<br>END: %{end}<br>COMPLETE: %{complete}',
        						DateFormat: 'yyyy-MM-dd',
        						Pointer : false,
        						Css: {
        							fontSize: '10pt',
        							borderRadius : '2px',
        							border : '2px solid #000000',
        							color : 'black',
        							backgroundColor : ['#FFFFFF']
        						}
        					}
        		}
        	});
        	var pThis = this;
        	gantt.on("onclick", function(e1, e2) {
        		console.log(e2);
        		if(!e2 || e2.dataset == undefined) return;
        		pThis.fnDetailPop(e2.sequentialIndex, e2);
        	});
        	gantt.draw();

        };

        this.fnDetailPop = function (idx, properties)
        {
        	var div = this.pdiv00.form;
        	if(this.dsOutput1.getColumn(idx, "PURCHASE_TYPE_NAME")) {
        		div.sta_state01.set_text(this.dsOutput1.getColumn(idx, "EMP_NAME") + " (" + this.dsOutput1.getColumn(idx, "PURCHASE_TYPE_NAME") + ")");
        	} else {
        		div.sta_state01.set_text(this.dsOutput1.getColumn(idx, "EMP_NAME"));
        	}
        	div.sta_state00_01.set_text(this.dsOutput1.getColumn(idx, "EMP_CO_NAME"));
        	div.sta_state00_01_00.set_text(this.dsOutput1.getColumn(idx, "CO_KIND"));
        	div.sta_state00_01_00_00.set_text(this.dsOutput1.getColumn(idx, "PRODUCT_NAME"));
        	div.sta_state00_00.set_text(this.dsOutput1.getColumn(idx, "LEVEL_NAME"));
        	div.sta_state00_00_00.set_text(this.dsOutput1.getColumn(idx, "ROLE_NAME"));
        	div.sta_state00_00_00_00.set_text(this.dsOutput1.getColumn(idx, "PROJECT_NAME"));
        	div.msk00.set_value(this.dsOutput1.getColumn(idx, "UNIT_COST"));
        	div.msk00_00.set_value(this.dsOutput1.getColumn(idx, "CON_UNIT_COST"));

        	var dt = this.fnGetDate2(this.dsOutput1.getColumn(idx, "START_DATE")) + " - " + this.fnGetDate2(this.dsOutput1.getColumn(idx, "END_DATE"))
        	div.sta_state00_00_00_00_02.set_text(dt);

        	var x = properties.x;
        	var y = properties.y;
        	if(this.ChartJS_vm.form.vscrollbar) {
        		y = y - this.ChartJS_vm.form.vscrollbar.pos;
        	}
        	if(this.ChartJS_vm.form.hscrollbar) {
        		x = x - this.ChartJS_vm.form.hscrollbar.pos;
        	}
        	x = x - 20;

        	this.pdiv00.trackPopup(x,y,400,363,null, false);

        // 	this.divDeviceDesc.set_left(x);
        // 	this.divDeviceDesc.set_top(y);
        // 	this.divDeviceDesc.set_visible(true);
        // 	this.divDeviceDesc.getElement().handle.style.zIndex  = 350;
        };

        //main div 가운데정렬
        this.fnDivMainResize = function ()
        {
        // 	var nLeft = nexacro.round((this.getOffsetWidth() - this.divMain.getOffsetWidth() ) /2);
        // 	var nTop = nexacro.round((this.getOffsetHeight() - this.divMain.getOffsetHeight() ) /2);
        //
        // 	if( nLeft < this.nDivMainTerm ) nLeft = this.nDivMainTerm;
        // 	if( nTop < this.nDivMainTerm ) nTop = this.nDivMainTerm;
        //
        // 	this.divMain.move(nLeft, nTop);
        	this.resetScroll();
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/

        this.frmMain_onkeydown = function(obj,e)
        {

        };

        this.frmMain_ontimer = function(obj,e)
        {
        	this.fnGetData();
        	//this.reload();
        };

        this.divChart00_ChartJS_cpu_onmouseleave = function(obj,e)
        {

        };


        this.divAdaptor_btn00_onclick = function(obj,e)
        {
        	this.divDeviceDesc.set_visible(false);
        	this.resetScroll();
        };


        this.cbo_type03_onitemchanged = function(obj,e)
        {
        	this.fnGetItem(obj.value);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.addEventHandler("onkeydown",this.frmMain_onkeydown,this);
            this.addEventHandler("ontimer",this.frmMain_ontimer,this);
            this.divDeviceDesc.form.btn00.addEventHandler("onclick",this.divAdaptor_btn00_onclick,this);
        };
        this.loadIncludeScript("resourceAll.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
