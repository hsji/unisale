(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AA_AuditMaster");
            this.set_titletext("내부회계관리제도 진행현황표");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,580);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_AM_List", this);
            obj._setContents("<ColumnInfo><Column id=\"SM_SEQ\" type=\"bigdecimal\" size=\"20\"/><Column id=\"AUDIT_SEQ\" type=\"string\" size=\"15\"/><Column id=\"CONTROL_SEQ\" type=\"string\" size=\"15\"/><Column id=\"RISK_SEQ\" type=\"string\" size=\"15\"/><Column id=\"MAJOR_PROCESS_CD\" type=\"string\" size=\"2\"/><Column id=\"SUB_PROCESS_CD\" type=\"string\" size=\"4\"/><Column id=\"CONTROL_CFR_CD\" type=\"string\" size=\"2\"/><Column id=\"RISK_DESC\" type=\"string\" size=\"3000\"/><Column id=\"SAMPLE_CNT\" type=\"string\" size=\"15\"/><Column id=\"REAL_SAMPLE_CNT\" type=\"bigdecimal\" size=\"7\"/><Column id=\"REAL_SAMPLE_RESULT_CNT\" type=\"bigdecimal\" size=\"20\"/><Column id=\"APPRAISAL_EMPNO\" type=\"string\" size=\"10\"/><Column id=\"APPRAISAL_EMPNM\" type=\"string\" size=\"255\"/><Column id=\"WRITER_DEPT\" type=\"string\" size=\"100\"/><Column id=\"WRITER_DEPTNM\" type=\"string\" size=\"100\"/><Column id=\"REVIEW_DOC_DESC\" type=\"string\" size=\"1073741823\"/><Column id=\"TEST_METHOD_DESC\" type=\"string\" size=\"1073741823\"/><Column id=\"CONTROL_TYPE_CD\" type=\"string\" size=\"1\"/><Column id=\"APPRAISAL_RESULT\" type=\"string\" size=\"1\"/><Column id=\"POPULATION_RESULT_FLAG\" type=\"string\" size=\"1\"/><Column id=\"SAMPLE_RESULT_FLAG\" type=\"string\" size=\"1\"/><Column id=\"ATTACH_FLAG\" type=\"string\" size=\"1\"/><Column id=\"APPRAISAL_RESULT_FLAG\" type=\"string\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Seriality", this);
            obj._setContents("<ColumnInfo><Column id=\"SM_SEQ\" type=\"bigdecimal\" size=\"20\"/><Column id=\"SM_NM\" type=\"string\" size=\"10\"/><Column id=\"START_DT\" type=\"string\" size=\"8\"/><Column id=\"END_DT\" type=\"string\" size=\"8\"/><Column id=\"REMARK\" type=\"string\" size=\"1073741823\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_MajorProcess_SEL", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"string\" size=\"30\"/><Column id=\"CAPTION\" type=\"string\" size=\"100\"/><Column id=\"VAL1\" type=\"string\" size=\"100\"/><Column id=\"VAL2\" type=\"string\" size=\"100\"/><Column id=\"VAL3\" type=\"string\" size=\"100\"/><Column id=\"VAL4\" type=\"string\" size=\"100\"/><Column id=\"REMARK\" type=\"string\" size=\"255\"/><Column id=\"ORD\" type=\"string\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_AppraisalEmp", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"string\" size=\"30\"/><Column id=\"APPRAISAL_EMPNO\" type=\"string\" size=\"10\"/><Column id=\"EMP_NM\" type=\"string\" size=\"255\"/><Column id=\"DUTY\" type=\"string\" size=\"30\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_WriterDept", this);
            obj._setContents("<ColumnInfo><Column id=\"WRITER_DEPT\" type=\"string\" size=\"100\"/><Column id=\"DEPT_NM\" type=\"string\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_MajorProcess", this);
            obj._setContents("<ColumnInfo><Column id=\"CM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ORD\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SubProcess", this);
            obj._setContents("<ColumnInfo><Column id=\"CM_CODE\" type=\"STRING\" size=\"255\"/><Column id=\"CODE\" type=\"STRING\" size=\"255\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"255\"/><Column id=\"USE_FLAG\" type=\"STRING\" size=\"255\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"255\"/><Column id=\"ORD\" type=\"STRING\" size=\"255\"/><Column id=\"VAL1\" type=\"STRING\" size=\"255\"/><Column id=\"VAL2\" type=\"STRING\" size=\"255\"/><Column id=\"VAL3\" type=\"STRING\" size=\"255\"/><Column id=\"VAL4\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ControlCFR", this);
            obj._setContents("<ColumnInfo><Column id=\"CM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ORD\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Improvement", this);
            obj._setContents("<ColumnInfo><Column id=\"SM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"AUDIT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"IM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DISCOVERY_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"IMPROVEMENT_METHOD_DESC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_TestStep", this);
            obj._setContents("<ColumnInfo><Column id=\"SM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"AUDIT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TS_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_STEP_DESC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ProcessMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"ORD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ControlType", this);
            obj._setContents("<ColumnInfo><Column id=\"CM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ORD\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_RtnVal", this);
            obj._setContents("<ColumnInfo><Column id=\"AUTH_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Master_Excel", this);
            obj._setContents("<ColumnInfo><Column id=\"AUDIT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MAJOR_PROCESS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_PROCESS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAJOR_PROCESS\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_PROCESS\" type=\"STRING\" size=\"256\"/><Column id=\"RISK_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CONTROL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CONTROL_CFR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RISK_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"SAMPLE_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_SAMPLE_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REVIEW_DOC_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_METHOD_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_STEP_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"DISCOVERY_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"IMPROVEMENT_METHOD_DESC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_TestStep_Excel", this);
            obj._setContents("<ColumnInfo><Column id=\"SM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"AUDIT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TS_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_STEP_DESC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Improve_Excel", this);
            obj._setContents("<ColumnInfo><Column id=\"SM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"AUDIT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"IM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DISCOVERY_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"IMPROVEMENT_METHOD_DESC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ExcelList", this);
            obj._setContents("<ColumnInfo><Column id=\"AUDIT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MAJOR_PROCESS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_PROCESS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAJOR_PROCESS\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_PROCESS\" type=\"STRING\" size=\"256\"/><Column id=\"RISK_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CONTROL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CONTROL_CFR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RISK_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"SAMPLE_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_SAMPLE_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REVIEW_DOC_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_METHOD_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_STEP_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"DISCOVERY_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"IMPROVEMENT_METHOD_DESC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_BefDept", this);
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"int\" size=\"11\"/><Column id=\"DEPT_CD\" type=\"string\" size=\"60\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_WriterDeptList", this);
            obj._setContents("<ColumnInfo><Column id=\"SM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"AUDIT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_WRITER_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"WRITER_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"WRITER_DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_Search01","8","8",null,"40","8",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_WF_SchList");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("stc_title02","4","8","58","22",null,null,null,null,null,null,this.div_Search01.form);
            obj.set_taborder("0");
            obj.set_text("회차");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.div_Search01.addChild(obj.name, obj);

            obj = new Static("stc_title15","202","8","43","22",null,null,null,null,null,null,this.div_Search01.form);
            obj.set_taborder("1");
            obj.set_text("M.P");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_Search01.addChild(obj.name, obj);

            obj = new Combo("cmb_MajorProcessSel","stc_title15:8","8","102","22",null,null,null,null,null,null,this.div_Search01.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_MajorProcess_SEL");
            obj.set_datacolumn("CAPTION");
            obj.set_codecolumn("CODE");
            this.div_Search01.addChild(obj.name, obj);

            obj = new Static("stc_title16","372","8","58","22",null,null,null,null,null,null,this.div_Search01.form);
            obj.set_taborder("3");
            obj.set_text("처리구분");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_Search01.addChild(obj.name, obj);

            obj = new Combo("cmb_ResultKind","stc_title16:8","8","102","22",null,null,null,null,null,null,this.div_Search01.form);
            obj.set_taborder("4");
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            var div_Search01_form_cmb_ResultKind_innerdataset = new nexacro.NormalDataset("div_Search01_form_cmb_ResultKind_innerdataset", obj);
            div_Search01_form_cmb_ResultKind_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">모집단등록여부</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">샘플등록여부</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">첨부파일등록여부</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">검토확인여부</Col></Row></Rows>");
            obj.set_innerdataset(div_Search01_form_cmb_ResultKind_innerdataset);
            obj.set_text("전체");
            obj.set_value("A");
            obj.set_index("0");
            this.div_Search01.addChild(obj.name, obj);

            obj = new Combo("cmb_Result","cmb_ResultKind:8","8","102","22",null,null,null,null,null,null,this.div_Search01.form);
            obj.set_taborder("5");
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            var div_Search01_form_cmb_Result_innerdataset = new nexacro.NormalDataset("div_Search01_form_cmb_Result_innerdataset", obj);
            div_Search01_form_cmb_Result_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\"/><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">O</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">X</Col></Row></Rows>");
            obj.set_innerdataset(div_Search01_form_cmb_Result_innerdataset);
            obj.set_text("전체");
            obj.set_value("");
            obj.set_index("0");
            this.div_Search01.addChild(obj.name, obj);

            obj = new Combo("cmb_AppraisalEmp","cmb_Result:8","8","102","22",null,null,null,null,null,null,this.div_Search01.form);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_AppraisalEmp");
            obj.set_datacolumn("EMP_NM");
            obj.set_codecolumn("APPRAISAL_EMPNO");
            obj.set_index("-1");
            this.div_Search01.addChild(obj.name, obj);

            obj = new Combo("cmb_WriterDept","cmb_AppraisalEmp:8","9","102","22",null,null,null,null,null,null,this.div_Search01.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_WriterDept");
            obj.set_datacolumn("DEPT_NM");
            obj.set_codecolumn("WRITER_DEPT");
            obj.set_index("-1");
            this.div_Search01.addChild(obj.name, obj);

            obj = new Combo("cmb_Seriality","stc_title02:8","8","113","22",null,null,null,null,null,null,this.div_Search01.form);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_Seriality");
            obj.set_codecolumn("SM_SEQ");
            obj.set_datacolumn("SM_NM");
            this.div_Search01.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"8","52","22","8",null,null,null,null,null,this.div_Search01.form);
            obj.set_taborder("9");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_SchText");
            this.div_Search01.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"7","59","23","70",null,null,null,null,null,this.div_Search01.form);
            obj.set_taborder("10");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_tran");
            obj.set_enable("true");
            this.div_Search01.addChild(obj.name, obj);

            obj = new Button("btn_ImportTmp",null,"7","134","23","btn_save:8",null,null,null,null,null,this.div_Search01.form);
            obj.set_taborder("11");
            obj.set_text("신규 회차 불러오기");
            obj.set_cssclass("btn_WF_tran");
            obj.set_enable("true");
            this.div_Search01.addChild(obj.name, obj);

            obj = new Button("btn_WriterDept",null,"7","97","23","btn_ImportTmp:6",null,null,null,null,null,this.div_Search01.form);
            obj.set_taborder("12");
            obj.set_text("TP부서일괄등록");
            obj.set_cssclass("btn_WF_tran");
            obj.set_visible("false");
            this.div_Search01.addChild(obj.name, obj);

            obj = new Div("div_ContractInfo","8",null,null,"174","8","104",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("div_WF_detailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_title00","8","8","100","22",null,null,null,null,null,null,this.div_ContractInfo.form);
            obj.set_taborder("3");
            obj.set_text("MajorProcess");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.div_ContractInfo.addChild(obj.name, obj);

            obj = new Combo("cmb_MajorProcess","stc_title00:8","8","215","22",null,null,null,null,null,null,this.div_ContractInfo.form);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_MajorProcess");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_readonly("true");
            obj.set_text("");
            obj.set_value("1");
            obj.set_index("0");
            this.div_ContractInfo.addChild(obj.name, obj);

            obj = new Static("stc_title01","cmb_MajorProcess:13","8","100","22",null,null,null,null,null,null,this.div_ContractInfo.form);
            obj.set_taborder("4");
            obj.set_text("SubProcess");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.div_ContractInfo.addChild(obj.name, obj);

            obj = new Combo("cmb_SubProcess","stc_title01:8","8","334","22",null,null,null,null,null,null,this.div_ContractInfo.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_SubProcess");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_readonly("true");
            obj.set_text("Combo00");
            this.div_ContractInfo.addChild(obj.name, obj);

            obj = new Static("stc_title04","8","68","100","22",null,null,null,null,null,null,this.div_ContractInfo.form);
            obj.set_taborder("15");
            obj.set_text("위험");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.div_ContractInfo.addChild(obj.name, obj);

            obj = new Edit("edt_RiskDesc","stc_title04:8","71",null,"22","8",null,null,null,null,null,this.div_ContractInfo.form);
            obj.set_taborder("2");
            obj.set_textAlign("left");
            obj.set_inputtype("number");
            obj.set_readonly("true");
            this.div_ContractInfo.addChild(obj.name, obj);

            obj = new Static("stc_title13","798","38","60","22",null,null,null,null,null,null,this.div_ContractInfo.form);
            obj.set_taborder("11");
            obj.set_text("평가자");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.div_ContractInfo.addChild(obj.name, obj);

            obj = new Static("stc_title05","798","8","60","22",null,null,null,null,null,null,this.div_ContractInfo.form);
            obj.set_taborder("20");
            obj.set_text("위험번호");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.div_ContractInfo.addChild(obj.name, obj);

            obj = new Static("stc_title06","966","8","60","22",null,null,null,null,null,null,this.div_ContractInfo.form);
            obj.set_taborder("5");
            obj.set_text("통제번호");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.div_ContractInfo.addChild(obj.name, obj);

            obj = new Static("stc_title07","1112","8","60","22",null,null,null,null,null,null,this.div_ContractInfo.form);
            obj.set_taborder("6");
            obj.set_text("문서번호");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.div_ContractInfo.addChild(obj.name, obj);

            obj = new Static("stc_title03","8","stc_title00:8","100","22",null,null,null,null,null,null,this.div_ContractInfo.form);
            obj.set_taborder("7");
            obj.set_text("통제번호");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.div_ContractInfo.addChild(obj.name, obj);

            obj = new Combo("cmb_CtrCFR","stc_title03:8","38","215","22",null,null,null,null,null,null,this.div_ContractInfo.form);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_ControlCFR");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_readonly("true");
            obj.set_text("제품계약");
            obj.set_value("1");
            obj.set_index("0");
            this.div_ContractInfo.addChild(obj.name, obj);

            obj = new Static("stc_title11","344","38","100","22",null,null,null,null,null,null,this.div_ContractInfo.form);
            obj.set_taborder("9");
            obj.set_text("표본수");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.div_ContractInfo.addChild(obj.name, obj);

            obj = new Static("stc_title12","580","38","60","22",null,null,null,null,null,null,this.div_ContractInfo.form);
            obj.set_taborder("10");
            obj.set_text("실제표본수");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.div_ContractInfo.addChild(obj.name, obj);

            obj = new Static("stc_title14","958","38","68","22",null,null,null,null,null,null,this.div_ContractInfo.form);
            obj.set_taborder("12");
            obj.set_text("TP작성부서");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.div_ContractInfo.addChild(obj.name, obj);

            obj = new Edit("edt_WriterDept","stc_title14:8","38",null,"22","37",null,null,null,null,null,this.div_ContractInfo.form);
            obj.set_taborder("13");
            obj.set_textAlign("left");
            obj.set_readonly("true");
            this.div_ContractInfo.addChild(obj.name, obj);

            obj = new Button("btn_DeptPopup","edt_WriterDept:5","38","24","22",null,null,null,null,null,null,this.div_ContractInfo.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_WF_Sch");
            this.div_ContractInfo.addChild(obj.name, obj);

            obj = new Static("stc_title09","8","112","100","39",null,null,null,null,null,null,this.div_ContractInfo.form);
            obj.set_taborder("16");
            obj.set_text("검토문서");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.div_ContractInfo.addChild(obj.name, obj);

            obj = new TextArea("ta_ReviewDoc","stc_title09:8","101",null,"62","690",null,null,null,null,null,this.div_ContractInfo.form);
            obj.set_taborder("17");
            obj.set_readonly("true");
            obj.set_wordWrap("char");
            this.div_ContractInfo.addChild(obj.name, obj);

            obj = new Static("stc_title08","ta_ReviewDoc:8","112","60","21",null,null,null,null,null,null,this.div_ContractInfo.form);
            obj.set_taborder("18");
            obj.set_text("평가방법");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.div_ContractInfo.addChild(obj.name, obj);

            obj = new TextArea("ta_TestMethod","stc_title08:8","101",null,"62","8",null,null,null,null,null,this.div_ContractInfo.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            obj.set_wordWrap("char");
            this.div_ContractInfo.addChild(obj.name, obj);

            obj = new MaskEdit("medt_RealSampleCnt","stc_title12:8","38","138","26",null,null,null,null,null,null,this.div_ContractInfo.form);
            obj.set_taborder("21");
            obj.set_readonly("false");
            this.div_ContractInfo.addChild(obj.name, obj);

            obj = new Div("div_AppraisalEmp","stc_title13:8","38","90","23",null,null,null,null,null,null,this.div_ContractInfo.form);
            obj.set_taborder("22");
            obj.set_url("Common::COM_Search.xfdl");
            obj.getSetter("codecolumn").set("APPRAISAL_EMPNO");
            obj.getSetter("datacolumn").set("APPRAISAL_EMPNM");
            obj.getSetter("kind").set("EMPLOYEE");
            obj.getSetter("binddataset").set("ds_AM_List");
            obj.getSetter("autoSearch").set("false");
            this.div_ContractInfo.addChild(obj.name, obj);

            obj = new Edit("edt_SampleCnt","stc_title11:8","38",null,"22","stc_title12:8",null,null,null,null,null,this.div_ContractInfo.form);
            obj.set_taborder("23");
            obj.set_readonly("true");
            obj.set_textAlign("right");
            this.div_ContractInfo.addChild(obj.name, obj);

            obj = new Edit("edt_RiskNum","stc_title05:8","8","90","22",null,null,null,null,null,null,this.div_ContractInfo.form);
            obj.set_taborder("24");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.div_ContractInfo.addChild(obj.name, obj);

            obj = new Edit("edt_ControlNum","stc_title06:8","8","87","22",null,null,null,null,null,null,this.div_ContractInfo.form);
            obj.set_taborder("25");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.div_ContractInfo.addChild(obj.name, obj);

            obj = new Edit("edt_AuditNum","stc_title07:8","8",null,"22","8",null,null,null,null,null,this.div_ContractInfo.form);
            obj.set_taborder("26");
            obj.set_readonly("true");
            obj.set_textAlign("center");
            this.div_ContractInfo.addChild(obj.name, obj);

            obj = new Grid("grd_Improvement","8","div_ContractInfo:8","48.91%","80",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_Improvement");
            obj.set_autofittype("col");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj.set_autosizingtype("none");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"591\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"50\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"미비점\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:IMPROVEMENT_METHOD_DESC\" textAlign=\"left\" wordWrap=\"char\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_GBProduct02","8",null,null,"32","8","278",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_POP_GroupBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Project","8","div_Search01:8",null,null,"8","stc_GBProduct02:8",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_AM_List");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"MajorProcess\"/><Cell col=\"2\" text=\"SubProcess\"/><Cell col=\"3\" text=\"위험번호\"/><Cell col=\"4\" text=\"통제번호\"/><Cell col=\"5\" text=\"문서번호\"/><Cell col=\"6\" text=\"모집단등록여부\"/><Cell col=\"7\" text=\"샘플등록여부\"/><Cell col=\"8\" text=\"첨부파일등록여부\"/><Cell col=\"9\" text=\"검토확인여부\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:MAJOR_PROCESS_CD\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"ds_MajorProcess\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/><Cell col=\"2\" text=\"bind:SUB_PROCESS_CD\" displaytype=\"combotext\" combodataset=\"ds_SubProcess\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/><Cell col=\"3\" text=\"bind:RISK_SEQ\"/><Cell col=\"4\" text=\"bind:CONTROL_SEQ\"/><Cell col=\"5\" text=\"bind:AUDIT_SEQ\"/><Cell col=\"6\" text=\"bind:POPULATION_RESULT_FLAG\"/><Cell col=\"7\" text=\"bind:SAMPLE_RESULT_FLAG\"/><Cell col=\"8\" text=\"bind:ATTACH_FLAG\"/><Cell col=\"9\" text=\"bind:APPRAISAL_RESULT_FLAG\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_title10","16",null,"70","32",null,"277",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("상세정보");
            obj.set_visible("true");
            obj.set_cssclass("sta_POP_GroupTit");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Excel",null,null,"60","22","20","282",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Excel");
            obj.set_cssclass("btn_WF_Excel");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_TestStep","grd_Improvement:8",null,null,"80","8","16",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("ds_TestStep");
            obj.set_autofittype("col");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj.set_autosizingtype("none");
            obj.set_wheelscrollrow("1");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"564\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"50\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"테스트절차\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:TEST_STEP_DESC\" textAlign=\"left\" wordWrap=\"char\" edittype=\"none\" autosizerow=\"default\" displaytype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("div_Popup","1368","330","402","230",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            obj.set_background("white");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","3","3","396","185",null,null,null,null,null,null,this.div_Popup.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_WriterDeptList");
            obj.set_autosizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"55\"/><Column size=\"338\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:WRITER_DEPT_NM\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_Popup.addChild(obj.name, obj);

            obj = new Button("btn_Close",null,null,"60","32","20","4",null,null,null,null,this.div_Popup.form);
            obj.set_taborder("1");
            obj.set_text("초기화");
            obj.set_cssclass("btn_WF_tran");
            this.div_Popup.addChild(obj.name, obj);

            obj = new Button("btn_Ok",null,null,"60","32","100","4",null,null,null,null,this.div_Popup.form);
            obj.set_taborder("2");
            obj.set_text("적용");
            obj.set_cssclass("btn_WF_tran");
            this.div_Popup.addChild(obj.name, obj);

            obj = new Button("btn_Del",null,null,"60","32","180","4",null,null,null,null,this.div_Popup.form);
            obj.set_taborder("3");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_tran");
            this.div_Popup.addChild(obj.name, obj);

            obj = new Button("btn_Add",null,null,"60","32","260","4",null,null,null,null,this.div_Popup.form);
            obj.set_taborder("4");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_tran");
            this.div_Popup.addChild(obj.name, obj);

            obj = new Grid("grd_ExcelExport","1380","26","840","246",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("ds_ExcelList");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"109\"/><Column size=\"145\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"142\"/><Column size=\"116\"/><Column size=\"97\"/><Column size=\"101\"/><Column size=\"108\"/><Column size=\"109\"/><Column size=\"100\"/><Column size=\"104\"/><Column size=\"107\"/><Column size=\"151\"/><Column size=\"155\"/><Column size=\"209\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"문서번호\"/><Cell col=\"1\" text=\"MAJOR_PROCESS\"/><Cell col=\"2\" text=\"SUB_PROCESS\"/><Cell col=\"3\" text=\"위험번호\"/><Cell col=\"4\" text=\"통제번호\"/><Cell col=\"5\" text=\"통제빈도\"/><Cell col=\"6\" text=\"위험\"/><Cell col=\"7\" text=\"표본수\"/><Cell col=\"8\" text=\"실제표본수\"/><Cell col=\"9\" text=\"평가자\"/><Cell col=\"10\" text=\"TP작성자\"/><Cell col=\"11\" text=\"검토문서\"/><Cell col=\"12\" text=\"평가방법\"/><Cell col=\"13\" text=\"테스트절차\"/><Cell col=\"14\" text=\"발견사항\"/><Cell col=\"15\" text=\"미비점\"/></Band><Band id=\"body\"><Cell text=\"bind:AUDIT_SEQ\"/><Cell col=\"1\" text=\"bind:MAJOR_PROCESS\"/><Cell col=\"2\" text=\"bind:SUB_PROCESS\"/><Cell col=\"3\" text=\"bind:RISK_SEQ\"/><Cell col=\"4\" text=\"bind:CONTROL_SEQ\"/><Cell col=\"5\" text=\"bind:CONTROL_CFR_CD\"/><Cell col=\"6\" text=\"bind:RISK_DESC\"/><Cell col=\"7\" text=\"bind:SAMPLE_CNT\"/><Cell col=\"8\" text=\"bind:REAL_SAMPLE_CNT\"/><Cell col=\"9\" text=\"bind:EMP_NM\"/><Cell col=\"10\" text=\"bind:DEPT_NM\"/><Cell col=\"11\" text=\"bind:REVIEW_DOC_DESC\"/><Cell col=\"12\" text=\"bind:TEST_METHOD_DESC\"/><Cell col=\"13\" text=\"bind:TEST_STEP_DESC\" textAlign=\"left\"/><Cell col=\"14\" text=\"bind:DISCOVERY_DESC\" textAlign=\"left\"/><Cell col=\"15\" text=\"bind:IMPROVEMENT_METHOD_DESC\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_Search01.form
            obj = new Layout("default","",0,0,this.div_Search01.form,function(p){});
            this.div_Search01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_ContractInfo.form.div_AppraisalEmp
            obj = new Layout("default","",0,0,this.div_ContractInfo.form.div_AppraisalEmp.form,function(p){});
            this.div_ContractInfo.form.div_AppraisalEmp.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_ContractInfo.form
            obj = new Layout("default","",0,0,this.div_ContractInfo.form,function(p){});
            this.div_ContractInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_Popup.form
            obj = new Layout("default","",0,0,this.div_Popup.form,function(p){});
            this.div_Popup.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,580,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item6","div_ContractInfo.form.cal_FreeMaEndDate","value","ds_MainContract","DELIVERY_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_ContractInfo.form.cal_OpenDate","value","ds_MainContract","OPEN_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_ContractInfo.form.cal_LICDate","value","ds_MainContract","ISSUE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_ContractInfo.form.chb_Annual","value","ds_MainContract","ANNUAL_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_ContractInfo.form.cal_StartDt","value","ds_MainContract","START_DATE2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_ContractInfo.form.cal_EndDt","value","ds_MainContract","END_DATE2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_ContractInfo.form.cal_ResultDt","value","ds_MainContract","RESULT_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_ContractInfo.form.cmb_CtrCFR","value","ds_AM_List","CONTROL_CFR_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","div_ContractInfo.form.ta_ReviewDoc","value","ds_AM_List","REVIEW_DOC_DESC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","div_ContractInfo.form.ta_TestMethod","value","ds_AM_List","TEST_METHOD_DESC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_ContractInfo.form.cmb_MajorProcess","value","ds_AM_List","MAJOR_PROCESS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_ContractInfo.form.cmb_SubProcess","value","ds_AM_List","SUB_PROCESS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_ContractInfo.form.edt_RiskDesc","value","ds_AM_List","RISK_DESC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_ContractInfo.form.medt_RealSampleCnt","value","ds_AM_List","REAL_SAMPLE_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_ContractInfo.form.edt_SampleCnt","value","ds_AM_List","SAMPLE_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_ContractInfo.form.edt_RiskNum","value","ds_AM_List","RISK_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_ContractInfo.form.edt_ControlNum","value","ds_AM_List","CONTROL_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_ContractInfo.form.edt_AuditNum","value","ds_AM_List","AUDIT_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Common::COM_Search.xfdl");
        };
        
        // User Script
        this.addIncludeScript("AA_AuditMaster.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("AA_AuditMaster.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("AA_AuditMaster.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("AA_AuditMaster.xfdl","Script::CommGrid.xjs");
        this.registerScript("AA_AuditMaster.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 : 내부회계관리제도 - 진행현황표
        * 02. 화면명   : 프로젝트관리(AA_AuditMaster)
        * 03. 화면설명 : 진행현황표
        * 04. 작성일   : 2021.05.25
        * 05. 작성자   : 박종언
        * 06. 수정이력 :
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
        var gUseAuth = 'N'; // 전체 조회 권한 변수 전체(A)/일부(N)
        var gCurYear;
        var gTrackHeight; // trackpopup 높이 값 저장 변수
        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/
        this.AA_AuditMaster_onload = function(obj,e)
        {
        	this.fn_Search();
        };

        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        //전체 로딩 조회
        this.fn_Search = function()
        {
        	this.gfnCompInit(this);

        	//그룹웨어에서 임베딩 할때 "내부회계관리제도 진행현황표" 뿌리는 방식
        	if(nexacro.getApplication().id=="ACEp")
        	{
        		this.parent.parent.stc_FormTitle.set_text(this.titletext);
        	}

        	var objDate = new Date();
            gCurYear = objDate.getFullYear();

            this.fn_ScrAuth();
            this.fn_CodeData();
        }

        // 버튼 셋팅
        this.btnControl = function(sYear)
        {
        	if(sYear == gCurYear)
        	{
        		if(this.commUtil.getFormAuthority(313,1) || this.commUtil.getFormAuthority(313,2))
        		{
        			this.div_Search01.form.btn_WriterDept.set_visible(true);
        		}
        	}
        	else
        	{
        		this.div_Search01.form.btn_WriterDept.set_visible(false);
        	}
        }

        //로그인 별 화면 셋팅 001
        this.fn_ScrAuth = function()
        {
        	var app = nexacro.getApplication();
        	var strEmpNo = app.gdsUserInfo.getColumn(0, "EMP_NO");
            var strDeptNo = app.gdsUserInfo.getColumn(0, "DEPT_CD");

            if(this.commUtil.getFormAuthority(313,1)) // 관리권한
        	{
        		gUseAuth = 'A'
                this.div_ContractInfo.form.edt_RiskDesc.set_readonly(false);
                this.div_ContractInfo.form.ta_ReviewDoc.set_readonly(false);
                this.div_ContractInfo.form.ta_TestMethod.set_readonly(false);
                this.grd_TestStep.setCellProperty("Body", 1, "edittype", "textarea");
        	}
        	else if(this.commUtil.getFormAuthority(313,2)) // 등록,수정권한
        	{
        		gUseAuth = 'A'
        	}
        	else // 조회권한
        	{
        		this.div_Search01.form.btn_ImportTmp.set_visible(false);
                this.div_Search01.form.btn_save.set_visible(false);
                this.div_ContractInfo.form.medt_RealSampleCnt.set_readonly(true);
        		this.div_ContractInfo.form.div_AppraisalEmp.form.enable = false;
        		this.div_ContractInfo.form.edt_WriterDept.set_readonly(true);
        		this.div_ContractInfo.form.btn_DeptPopup.enable = false;
        		this.btn_Excel.set_visible(false);
        	}
        };

        //공통코드 셋팅 002
        this.fn_CodeData = function()
        {
        	this.gfnAddCodeDataset("ds_ProcessMaster", "AM_PROCESS_CODE");   // Process 구분
            this.gfnAddCodeDataset("ds_ControlCFR", "CONTROL_CFR");      // 수행빈도
            this.gfnAddCodeDataset("ds_ControlType", "CONTROL_TYPE");     // 통제유형
        	this.gfnCodeTransaction(); // 공통 코드 조회
        };

        //회차 셋팅 003
        this.fn_serialityData = function() {

        	// 조회용 Output Dataset 셋팅
        	this.gfnAddOutputDataset("ds_Seriality"	, "dsOutput");
        	// ( callBackNm , svcId )
        	this.gfnCommonTransaction("Seriality_Search", "AA_AuditMaster_S01", null, false);
        }

        //작성자 담당자 및 작성 부서 셋팅 셋팅 004
        this.fn_WRITER_DEPT_SEL = function()
        {
        	//Parameter 셋팅
            this.gfnAddSendParameter("SM_SEQ",  this.div_Search01.form.cmb_Seriality.value);

        	// 조회용 Output Dataset 셋팅 WRITER_DEPT_SEL / APPRAISAL_EMPNO_SEL
        	this.gfnAddOutputDataset("ds_WriterDept"	, "dsWdsOutput");
        	this.gfnAddOutputDataset("ds_AppraisalEmp"	, "dsAesOutput");

        	this.gfnCommonTransaction("WRITER_DEPT_Search", "AA_AuditMaster_S03");
        }

        //로그인한 유저 부서 history 셋팅 005
        this.fn_FindBefDeptQuery = function(sStartDt)
        {
            /* 기간이 변경되면 해당 기간에 대한 부서코드를 조회 하여 처리 */
            this.ds_BefDept.clearData();

            // Parameter 셋팅
            this.gfnAddSendParameter("START_DATE",   sStartDt.substr(0, 4));

            // 조회용 Output Dataset 셋팅
        	this.gfnAddOutputDataset("ds_BefDept"	, "dsFbdOutput");
        	// 공통 Transaction
        	this.gfnCommonTransaction("BefDept_Search", "AA_AuditMaster_S02", null, false);
        };


        //조회
        this.fn_QueryData = function()
        {
        // 	trace("gUseAuth:["+gUseAuth+"]");

            this.ds_TestStep.clearData();
            this.ds_Improvement.clearData();

            this.gfnAddSendParameter("BEF_FLAG", "0");
            var sEndDt  = this.ds_Seriality.getColumn(this.div_Search01.form.cmb_Seriality.index, "END_DT");
            if (gUseAuth == 'N' && gCurYear > sEndDt.substr(0, 4))
            {
                // 과거 년도의 해당 부서 코드 조회 하여 입력값 처리
                this.gfnAddSendParameter("BEF_FLAG", "1");
                this.gfnAddSendParameter("BEF_DEPT_NO", this.ds_BefDept.getColumn(0, "DEPT_CD"));
            }

            // Parameter 셋팅
            this.gfnAddSendParameter("SM_SEQ",           this.div_Search01.form.cmb_Seriality.value);
            this.gfnAddSendParameter("AUTH_KIND",        gUseAuth);
        	trace("gUseAuth==>"+gUseAuth);
            this.gfnAddSendParameter("MAJOR_PROCESS_CD", this.div_Search01.form.cmb_MajorProcessSel.value);
            this.gfnAddSendParameter("RESULT_KIND",      this.fn_GetResultKind());
            this.gfnAddSendParameter("WRITER_DEPT",      this.div_Search01.form.cmb_WriterDept.value);
            this.gfnAddSendParameter("APPRAISAL_EMPNO",  this.div_Search01.form.cmb_AppraisalEmp.value);

        	this.gfnAddOutputDataset("ds_AM_List"	, "dsOutput");
        	this.gfnCommonTransaction("AM_Master_Search", "AA_AuditMaster_S04", this.grd_Project);
        }

        this.fnCallBack = function(strSvcID, nErrorCode, strErrorMag)
        {
        	// 에러 예외처리
        	if(nErrorCode != 0)
        	{
        		alert("strSvcID : " + strSvcID + "\n" + "nErrorCode : " + nErrorCode + "\n" + "strErrorMag : " + strErrorMag);
        		return;
        	}
        	else
        	{
        		if(strSvcID=="gfnGetCode") {
        			this.ds_MajorProcess_SEL.assign(this.ds_ProcessMaster);
        			var nRow = this.ds_MajorProcess_SEL.insertRow(0);
        			this.ds_MajorProcess_SEL.setColumn(nRow, "CAPTION", "전체");
        			this.ds_MajorProcess_SEL.filter("VAL1 == 'MP' || CAPTION == '전체'");
        			this.div_Search01.form.cmb_MajorProcessSel.set_index(0);
        			this.ds_ProcessMaster.filter("VAL1 == 'MP'");
        			this.ds_MajorProcess.copyData(this.ds_ProcessMaster, true); // true : 필터링 된 데이터 복사 false : 모든 데이터 복사
        			this.ds_ProcessMaster.filter("");
        			this.ds_ProcessMaster.filter("VAL1 == 'SP'");
        			this.ds_SubProcess.copyData(this.ds_ProcessMaster, true);

        			this.fn_serialityData(); //회차 조회
        		}
        		else if(strSvcID=="Seriality_Search")
        		{
        			var nIdx = this.ds_Seriality.rowcount -1;
        			this.div_Search01.form.cmb_Seriality.set_index(nIdx);

        			var sYear = this.ds_Seriality.getColumn(this.div_Search01.form.cmb_Seriality.index, "SM_NM");

        			this.btnControl(sYear.substr(0,4));

        			this.fn_WRITER_DEPT_SEL();
        		}
        		else if (strSvcID=="WRITER_DEPT_Search")
        		{
        			var nRow = this.ds_WriterDept.insertRow(0);
        			this.ds_WriterDept.setColumn(nRow, "DEPT_NM", "전체");
        			this.div_Search01.form.cmb_WriterDept.set_index(0);

        			nRow = this.ds_AppraisalEmp.insertRow(0);
        			this.ds_AppraisalEmp.setColumn(nRow, "EMP_NM", "전체");
        			this.div_Search01.form.cmb_AppraisalEmp.set_index(0);

        			// 작업회차에 대한 부서코드를 조회 한다.
        			var sStartDt= this.ds_Seriality.getColumn(this.div_Search01.form.cmb_Seriality.index, "START_DT");
        			var sEndDt  = this.ds_Seriality.getColumn(this.div_Search01.form.cmb_Seriality.index, "END_DT");

        			if (gUseAuth == 'N' && gCurYear > sEndDt.substr(0, 4))
        			{
        				this.fn_FindBefDeptQuery(sStartDt);
        			}
        			else
        			{
        				this.fn_QueryData(); // ds_AM_List 조회
        			}
        		}
        		else if (strSvcID=="BefDept_Search")
        		{
        			this.fn_QueryData(); // ds_AM_List 조회
        		}
        		else if (strSvcID=="AM_Master_Search")
        		{
        			if (this.ds_AM_List.rowcount==1) this.fn_DetailQueryData(0);
        		}
        		else if (strSvcID=="AM_Master_Detail_Search")
        		{
        			this.fn_WriterDeptChange();
        		}
        		else if (strSvcID=="AM_MASTER_update")
        		{
        			this.alert("정상적으로 저장 되었습니다.");
        		}
        		else if (strSvcID=="AM_MasterExcel_Search")
        		{
        			var nMasterRowCnt = this.ds_Master_Excel.rowcount;
        			this.ds_ExcelList.clearData();
        			if (nMasterRowCnt<=0) return;

        			this.ds_ExcelList.enableevent = false;
        			for (var i=0; i<nMasterRowCnt; i++)
        			{
        				var nAddRow = this.ds_ExcelList.addRow();
        				this.ds_ExcelList.copyRow(nAddRow, this.ds_Master_Excel,i);
        				this.fn_AddDetailExcelData ( this.ds_Master_Excel.getColumn(i, "AUDIT_SEQ") );
        			}
        			this.ds_ExcelList.enableevent = true;
        			var exTitle = this.div_Search01.form.cmb_Seriality.text;
        			exTitle = exTitle.replace("년",""); // '년' 한글명 삭제
        			this.ds_ExcelList.filter();
        			if(nexacro.getApplication().id=="ACEp")
        			{
        				this.fn_gwExcelExport(this, this.grd_ExcelExport, exTitle);
        			}
        			else
        			{
        				this.gfn_excelExport(this, this.grd_ExcelExport, exTitle);
        			}
        		}
        	}
        }

        //처리구분에 관해서 셋팅
        this.fn_GetResultKind = function()
        {
            var strResultKind = this.div_Search01.form.cmb_ResultKind.value;
            var strResult = this.div_Search01.form.cmb_Result.value;

            if (this.gfnIsEmpty(strResult)) return "";
            else
            {
                var strRtnVal;
                if (strResult == "0") return "N"+strResultKind;
                else                  return strResultKind;
            }
        }

        //Detail 조회
        this.fn_DetailQueryData = function(nRow)
        {
            if (!this.fn_Validation("SD")) return;

            // Parameter 셋팅
            this.gfnAddSendParameter("SM_SEQ",       this.ds_AM_List.getColumn(nRow, "SM_SEQ"));
            this.gfnAddSendParameter("AUDIT_SEQ",    this.ds_AM_List.getColumn(nRow, "AUDIT_SEQ"));

            // 미비점, 테스트절차 조회
            this.gfnAddOutputDataset("ds_WriterDeptList",		"dsWdListOutput");
            this.gfnAddOutputDataset("ds_TestStep", 			"dsTsOutput");
            this.gfnAddOutputDataset("ds_Improvement",			"dsImpOutput");

        	// 공통 Transaction
        	this.gfnCommonTransaction("AM_Master_Detail_Search", "AA_AuditMaster_S05");
        }

        //validataion
        this.fn_Validation = function(sGb)
        {
            var bRtnVal = true;
            if (sGb == "SD") {
                //

            } /*else if (sGb == "D")
            {
                if (gfnIsEmpty(ds_AM_List.getColumn(ds_AM_List.rowposition, "AUDIT_SEQ")))
                {
                    alert("문자번호가 없습니다. 확인하세요", "경고");
                    bRtnVal =  false;
                }
            }*/
            return bRtnVal;
        }

        //TP 작성부서 가져오기
        this.fn_WriterDeptChange = function()
        {
            var sWriterDeptList = "";

            var nRowCnt = this.ds_WriterDeptList.rowcount;
            if (nRowCnt>0) {
                for (var i=0; i<nRowCnt; i++) {
                    var sWriterDeptNm = this.ds_WriterDeptList.getColumn(i, "WRITER_DEPT_NM");
                    sWriterDeptList += sWriterDeptNm + ",";
                }
            }

            if (sWriterDeptList.length > 0) {
                sWriterDeptList = sWriterDeptList.substr(0, sWriterDeptList.length-1);
            }

            this.div_ContractInfo.form.edt_WriterDept.set_value(sWriterDeptList);
        }

        //ds_ExcelList 테스트절차, 발견사항, 미비점 데이터 셋팅
        this.fn_AddDetailExcelData = function( strAuditSeq )
        {
            this.ds_TestStep_Excel.filter();
            this.ds_TestStep_Excel.filter("AUDIT_SEQ=='"+strAuditSeq+"'");
            var nTestStepRowCnt = this.ds_TestStep_Excel.rowcount;

            this.ds_Improve_Excel.filter();
            this.ds_Improve_Excel.filter("AUDIT_SEQ=='"+strAuditSeq+"'");
            var nTestStepRowCnt = this.ds_TestStep_Excel.rowcount;

            var nImproveRowCnt = this.ds_Improve_Excel.rowcount;
            var nAddRowCnt = nTestStepRowCnt;
            if (nImproveRowCnt > nTestStepRowCnt) nAddRowCnt = nImproveRowCnt;

            for (var i=0; i<nAddRowCnt; i++)
            {
                var nAddRow = 0;
                var strTestStepDesc =  this.ds_TestStep_Excel.getColumn(i, "TEST_STEP_DESC");
                var strDiscoveryDesc =  this.ds_Improve_Excel.getColumn(i, "DISCOVERY_DESC");
                var strImproveDesc =  this.ds_Improve_Excel.getColumn(i, "IMPROVEMENT_METHOD_DESC");
                if ( this.gfnIsEmpty(strTestStepDesc) && this.gfnIsEmpty(strDiscoveryDesc) && this.gfnIsEmpty(strImproveDesc)) continue;

                if ( i > 0 ) nAddRow = this.ds_ExcelList.addRow();
                else         nAddRow = this.ds_ExcelList.rowcount -1;

                if (nImproveRowCnt < nTestStepRowCnt)
                {
                    this.ds_ExcelList.setColumn(nAddRow, "TEST_STEP_DESC",          strTestStepDesc);
                }
                if (nImproveRowCnt > nTestStepRowCnt)
                {
                    this.ds_ExcelList.setColumn(nAddRow, "DISCOVERY_DESC",          strDiscoveryDesc);
                    this.ds_ExcelList.setColumn(nAddRow, "IMPROVEMENT_METHOD_DESC", strImproveDesc);
                }
                else
                {
                    this.ds_ExcelList.setColumn(nAddRow, "TEST_STEP_DESC",          strTestStepDesc);
                    this.ds_ExcelList.setColumn(nAddRow, "DISCOVERY_DESC",          strDiscoveryDesc);
                    this.ds_ExcelList.setColumn(nAddRow, "IMPROVEMENT_METHOD_DESC", strImproveDesc);
                }
            }
        }
        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        //조회 버튼 클릭
        this.div_Search01_btn_search_onclick = function(obj,e)
        {
        	this.fn_QueryData();
        };

        //회차 변경 시 이벤트
        this.cmb_Seriality_onitemchanged = function(obj, e)
        {
            this.btnControl(e.posttext.substr(0,4));
        	this.fn_WRITER_DEPT_SEL();
        }

        //처리 구분 Result 리셋 이벤트
        this.cmb_ResultKind_onitemchanged = function(obj, e)
        {
        	this.div_Search01.form.cmb_Result.set_index(0);
        }

        this.ds_AM_List_onrowposchanged = function(obj, e)
        {
            var nRowCnt = this.ds_WriterDeptList.rowcount;
            for (var i=0; i<nRowCnt; i++)
            {
                var nRowType = this.ds_WriterDeptList.getRowType(i);
                //trace(i+"번째 RowType["+nRowType+"]");
                //trace(ds_WriterDeptList.getDeletedRowCount());
                if (nRowType==2 || nRowType==4 || nRowType==8){
                    if (!confirm("TP작성부서에 변경된 내용이 있습니다. 계속 진행 하시겠습니까?")) {
                        this.ds_AM_List.set_enableevent(false);
                        this.ds_AM_List.set_rowposition(e.oldrow);
                        this.ds_AM_List.set_enableevent(true);
                        return;
                    }
                }
            }

            this.fn_DetailQueryData(e.newrow);
        }

        this.ds_AM_List_oncolumnchanged = function(obj, e)
        {
            //trace(e.columnid+"////"+e.newvalue +"////"+obj.getColumn(e.row, "REAL_SAMPLE_RESULT_CNT"));
            if (e.columnid == "REAL_SAMPLE_CNT" && nexacro.toNumber(e.newvalue) < nexacro.toNumber(obj.getColumn(e.row, "REAL_SAMPLE_RESULT_CNT")))
            {
                    alert("해당 문서는 이미 등록된 결과가 존재 합니다.\n\n결과를 삭제 하셔야 실제표본수(샘플수)를 줄일수 있습니다.");
                    obj.setColumn(e.row, e.columnid, e.oldvalue);
            }
        }

        //상세 Detail Popup 호출
        this.grd_Project_oncelldblclick = function(obj, e)
        {
            var colText = obj.getCellProperty("body", e.cell, "text").split("bind:");

        	var sArgument =
        	{
        		 strSMSeq 	 	: this.ds_AM_List.getColumn(e.row, "SM_SEQ")
        		,strAuditSeq	: this.ds_AM_List.getColumn(e.row, "AUDIT_SEQ")
        	}
        	this.commUtil.popup(this, "AuditResultPopup", "Admin::AA_AuditResultPopup.xfdl", -1, -1, null, null, true, true, false, sArgument, "fnPopupCallBack");
        }

        //메인그리드 저장
        this.div_Search01_btn_save_onclick = function(obj,e)
        {
        	this.fn_SaveData();
        };

        //메인그리드 Excel export
        this.btn_Excel_onclick = function(obj,  e)
        {
            this.ds_Master_Excel.clearData();
            this.ds_TestStep_Excel.clearData();
            this.ds_Improve_Excel.clearData();

            // Parameter 셋팅
            this.gfnAddSendParameter("SM_SEQ",          this.div_Search01.form.cmb_Seriality.value);

            // 조회용 Output Dataset 셋팅 (AM_MASTER_EXCEL, AM_TEST_STEP_EXCEL, AM_IMPROVEMENT_EXCEL)
            this.gfnAddOutputDataset("ds_Master_Excel", "dsMstExcelOutput");
        	this.gfnAddOutputDataset("ds_TestStep_Excel", "dsTsExcelOutput");
        	this.gfnAddOutputDataset("ds_Improve_Excel", "dsImpExcelOutput");

            // 공통 Transaction
            this.gfnCommonTransaction("AM_MasterExcel_Search", "AA_AuditMaster_S06");
        }

        /************************************************************************************************
        * 팝업 TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        //팝업 콜백 함수
        this.fnPopupCallBack = function(popupId, popupArg)
        {
        	popupArg = this.commUtil.popupReturn();
        	if(this.gfnIsEmpty(popupArg))
        	{
        		return;
        	}
        	else
        	{
        		switch(popupId)
        		{
        			case "AuditResultPopup" :
        				this.fn_QueryData();
        				break;
        			case "popDept" :
        				var ds = new nexacro.Dataset();
        				ds.loadXML(popupArg);
        				var nCurrow = this.ds_AM_List.rowposition;

        				for(var i = 0; i < ds.rowcount; i++)
        				{
        					var nRow = this.ds_WriterDeptList.addRow();
        					this.ds_WriterDeptList.setColumn(nRow, "SM_SEQ",             this.ds_AM_List.getColumn(nCurrow, "SM_SEQ"));
        					this.ds_WriterDeptList.setColumn(nRow, "AUDIT_SEQ",          this.ds_AM_List.getColumn(nCurrow, "AUDIT_SEQ"));
        					this.ds_WriterDeptList.setColumn(nRow, "ORG_WRITER_DEPT",    ds.getColumn(i, "DEPT_CD"));
        					this.ds_WriterDeptList.setColumn(nRow, "WRITER_DEPT",        ds.getColumn(i, "DEPT_CD"));
        					this.ds_WriterDeptList.setColumn(nRow, "WRITER_DEPT_NM",     ds.getColumn(i, "DEPT_NM"));
        				}

        				var nX = parseInt(0);
        				this.fnOpenTrackPopup(this.div_ContractInfo.form.btn_DeptPopup, nX, gTrackHeight);
        				//this.fn_WriterDeptChange();
        				break;
        			case "SerialityPopup" :
        				this.fn_CodeData();
        				break;
        			case "WriterDeptPopup" :
        				this.fn_Search();
        				break;
        		}
        	}
        }

        //메인 그리드 저장
        this.fn_SaveData = function()
         {
            if (!confirm("변경된 내용이 있을 저장하시겠습니까?")) return;

            // 저장용 Input Dataset 셋팅 AM_MASTER_UPDATE_1, AM_TEST_STEP, WRITER_DEPT_SAVE
            this.gfnAddInputDataset("ds_AM_List", "dsAmList");
            this.gfnAddInputDataset("ds_TestStep",       "dsTstep");
            this.gfnAddInputDataset("ds_WriterDeptList",   "dsWdList");

            // 공통 Transaction
            this.gfnCommonTransaction("AM_MASTER_update", "AA_AuditMaster_R01");
        }

        /************************************************************************************************
        * 팝업 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        //신규 회차 Popup
        this.div_Search01_btn_ImportTmp01_onclick = function(obj,e)
        {
        	var strToday = this.gfnToday();
            var sArgument =
        	{
        		 STR_TODAY 	 		: strToday
        		,STR_SOURCE_TYPE	: "AMS"
        	}

        	this.commUtil.popup(this, "SerialityPopup", "Admin::AA_SerialityPopup.xfdl", -1, -1, 640, 250, true, false, false, sArgument, "fnPopupCallBack");
        };

        //TP작성부서 팝업 버튼 클릭
        this.btn_DeptPopup_onclick = function(obj,  e)
        {
        	var nX = parseInt(0);
        	gTrackHeight = parseInt(obj.height);
        	this.fnOpenTrackPopup(this.div_ContractInfo.form.btn_DeptPopup, nX, gTrackHeight);
        }

        //TP작성부서 팝업 호출
        this.fnOpenTrackPopup = function(divPopup, nX, nY)
        {
        	this.div_Popup.trackPopupByComponent(divPopup, nX, nY);
            this.div_Popup.bringToFront();
            this.div_Popup.set_visible(true);
        }

        //TP작성부서 추가
        this.div_Popup_btn_Add_onclick = function(obj,  e)
        {
        	this.commUtil.popupOrganization(this, "popDept", "fnPopupCallBack", "DEPTS", null, "1");
        }

        //TP작성부서 삭제
        this.div_Popup_btn_Del_onclick = function(obj,  e)
        {
            this.ds_WriterDeptList.deleteRow(this.ds_WriterDeptList.rowposition);
        }

        //TP작성부서 적용
        this.div_Popup_btn_Ok_onclick = function(obj,  e)
        {
            this.fn_WriterDeptChange();
        	this.div_Popup.closePopup();
        }

        //TP작성부서 팝업 닫기
        this.div_Popup_btn_Close_onclick = function(obj,e)
        {
        	this.ds_WriterDeptList.reset();
        	this.fn_WriterDeptChange();
        	this.div_Popup.closePopup();
        };


        // TP부서 일괄 등록
        this.div_Search01_btn_WriterDept_onclick = function(obj,e)
        {
        	// 등록한 회차 일련번호
        	var sSmSeq = this.div_Search01.form.cmb_Seriality.value;
        	// TP 작성부서 매칭 해주는 팝업 호출
        	var sArgument =
        	{
        		 STR_SM_SEQ 	 	: sSmSeq
        		 ,STR_EVT_POSITION	: "btn_WriterDept"
        	}

        	this.commUtil.popup(this, "WriterDeptPopup", "Admin::AA_WriterDeptPopup.xfdl", -1, -1, 640, 270, true, false, false, sArgument, "fnPopupCallBack");
        };

        /*----------------------------------------------------------------------------------------------------
         *  Excel Export 사용자 함수 - 전자결재 임베딩한 경우 ( BF_TopFrame이 없어서 기입 )
        ----------------------------------------------------------------------------------------------------*/
        //Excel Export
        this.fn_gwExcelExport = function(objForm, objGrid, sFileNm, callback)
        {
        	if(this.gfnIsEmpty(sFileNm)) sFileNm = objForm.titletext+"_Excel";

        	//sStartTime = this.fn_CheckTime();

        	//ExcelExportObjext를 초기화
        	this.ExcelExportObject = null;
        	this.ExcelExportObject = new ExcelExportObject("ExcelExportObject", objForm);
        	this.ExcelExportObject.addEventHandler("onsuccess", this.ExcelExportObject_onsuccess, this);
        	this.ExcelExportObject.callback = callback;
        	this.ExcelExportObject.objForm = objForm;

        	var objEnv = nexacro.getEnvironment();
        	var strServiceURL = objEnv.services["ServiceURL"].url;
        	var constExportItemType = nexacro.ExportItemTypes.GRID;
        	var varExportSource = objGrid;
        	var strRange = "Sheet1!A1";
        	var strExportHead = "allband";
        	var strExportSelect = "allrecord";
        	var strExportMerge = "suppress";
        	var strExportValue = "allstyle";
        	var strExportImage = "none";
        	var strExceptStyle = "";
        	var strExportSize = "both";
        	var strAcceptStyle = "cellline";

        	var ret = this.ExcelExportObject.addExportItem(constExportItemType,varExportSource,strRange,strExportHead,strExportSelect,strExportMerge,strExportValue,strExportImage,strExceptStyle,strExportSize,strAcceptStyle);

        	this.ExcelExportObject.set_exporttype(nexacro.ExportTypes.EXCEL2007);
        	this.ExcelExportObject.set_exportfilename(sFileNm);
        	this.ExcelExportObject.set_exporturl(strServiceURL+"xeni/XExportImport");

        	this.ExcelExportObject.exportData();
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.AA_AuditMaster_onload,this);
            this.div_Search01.form.cmb_MajorProcessSel.addEventHandler("onitemchanged",this.fnSearch,this);
            this.div_Search01.form.cmb_ResultKind.addEventHandler("onitemchanged",this.cmb_ResultKind_onitemchanged,this);
            this.div_Search01.form.cmb_Result.addEventHandler("onitemchanged",this.div_Search01_cmb_Result_onitemchanged,this);
            this.div_Search01.form.cmb_AppraisalEmp.addEventHandler("onitemchanged",this.cmb_ResultKind_onitemchanged,this);
            this.div_Search01.form.cmb_WriterDept.addEventHandler("onitemchanged",this.cmb_ResultKind_onitemchanged,this);
            this.div_Search01.form.cmb_Seriality.addEventHandler("onitemchanged",this.cmb_Seriality_onitemchanged,this);
            this.div_Search01.form.btn_search.addEventHandler("onclick",this.div_Search01_btn_search_onclick,this);
            this.div_Search01.form.btn_save.addEventHandler("onclick",this.div_Search01_btn_save_onclick,this);
            this.div_Search01.form.btn_ImportTmp.addEventHandler("onclick",this.div_Search01_btn_ImportTmp01_onclick,this);
            this.div_Search01.form.btn_WriterDept.addEventHandler("onclick",this.div_Search01_btn_WriterDept_onclick,this);
            this.div_ContractInfo.form.cmb_MajorProcess.addEventHandler("onitemchanged",this.div_ContractInfo_cmb_ContractType_onitemchanged,this);
            this.div_ContractInfo.form.cmb_CtrCFR.addEventHandler("onitemchanged",this.div_ContractInfo_cmb_ContractType_onitemchanged,this);
            this.div_ContractInfo.form.edt_WriterDept.addEventHandler("onchanged",this.div_ContractInfo_edt_WriterDept_onchanged,this);
            this.div_ContractInfo.form.btn_DeptPopup.addEventHandler("onclick",this.btn_DeptPopup_onclick,this);
            this.grd_Project.addEventHandler("oncelldblclick",this.grd_Project_oncelldblclick,this);
            this.btn_Excel.addEventHandler("onclick",this.btn_Excel_onclick,this);
            this.div_Popup.form.btn_Close.addEventHandler("onclick",this.div_Popup_btn_Close_onclick,this);
            this.div_Popup.form.btn_Ok.addEventHandler("onclick",this.div_Popup_btn_Ok_onclick,this);
            this.div_Popup.form.btn_Del.addEventHandler("onclick",this.div_Popup_btn_Del_onclick,this);
            this.div_Popup.form.btn_Add.addEventHandler("onclick",this.div_Popup_btn_Add_onclick,this);
            this.ds_AM_List.addEventHandler("onrowposchanged",this.ds_AM_List_onrowposchanged,this);
            this.ds_AM_List.addEventHandler("oncolumnchanged",this.ds_AM_List_oncolumnchanged,this);
        };
        this.loadIncludeScript("AA_AuditMaster.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
