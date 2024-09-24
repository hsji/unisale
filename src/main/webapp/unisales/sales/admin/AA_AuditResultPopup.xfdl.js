(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AA_AuditResultPopup");
            this.set_titletext("내부회계관리제도 결과등록");
            this.set_cssclass("frm_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_AM_List", this);
            obj._setContents("<ColumnInfo><Column id=\"SM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"AUDIT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CONTROL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RISK_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MAJOR_PROCESS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_PROCESS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAJOR_PROCESS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_PROCESS_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CONTROL_CFR_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CONTROL_CFR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CONTROL_TYPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CONTROL_TYPE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SAMPLE_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"REAL_SAMPLE_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"APPRAISAL_RESULT\" type=\"STRING\" size=\"256\"/><Column id=\"SAMPLE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"REVIEW_DOC_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_METHOD_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"POPULATION_RESULT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Result", this);
            obj._setContents("<ColumnInfo><Column id=\"SM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"AUDIT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PROOF_SERIAL_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_RESULT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RTS_SEQ1\" type=\"STRING\" size=\"256\"/><Column id=\"TS_RESULT1\" type=\"STRING\" size=\"256\"/><Column id=\"RTS_SEQ2\" type=\"STRING\" size=\"256\"/><Column id=\"TS_RESULT2\" type=\"STRING\" size=\"256\"/><Column id=\"RTS_SEQ3\" type=\"STRING\" size=\"256\"/><Column id=\"TS_RESULT3\" type=\"STRING\" size=\"256\"/><Column id=\"RTS_SEQ4\" type=\"STRING\" size=\"256\"/><Column id=\"TS_RESULT4\" type=\"STRING\" size=\"256\"/><Column id=\"RTS_SEQ5\" type=\"STRING\" size=\"256\"/><Column id=\"TS_RESULT5\" type=\"STRING\" size=\"256\"/><Column id=\"RTS_SEQ6\" type=\"STRING\" size=\"256\"/><Column id=\"TS_RESULT6\" type=\"STRING\" size=\"256\"/><Column id=\"RTS_SEQ7\" type=\"STRING\" size=\"256\"/><Column id=\"TS_RESULT7\" type=\"STRING\" size=\"256\"/><Column id=\"RTS_SEQ8\" type=\"STRING\" size=\"256\"/><Column id=\"TS_RESULT8\" type=\"STRING\" size=\"256\"/><Column id=\"RTS_SEQ9\" type=\"STRING\" size=\"256\"/><Column id=\"TS_RESULT9\" type=\"STRING\" size=\"256\"/><Column id=\"RTS_SEQ10\" type=\"STRING\" size=\"256\"/><Column id=\"TS_RESULT10\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_TestResult", this);
            obj._setContents("<ColumnInfo><Column id=\"CM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ORD\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Export3", this);
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">통제번호</Col><Col id=\"VALUE\">결론</Col></Row><Row><Col id=\"NAME\"/><Col id=\"VALUE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Export6", this);
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">8. 운영의 효과성에 대한 결론</Col><Col id=\"VALUE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_BefDept", this);
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_TestStep", this);
            obj._setContents("<ColumnInfo><Column id=\"SM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"AUDIT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TS_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_STEP_DESC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Improvement", this);
            obj._setContents("<ColumnInfo><Column id=\"SM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"AUDIT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"IM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DISCOVERY_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"IMPROVEMENT_METHOD_DESC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_AppraisalResult", this);
            obj._setContents("<ColumnInfo><Column id=\"CM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ORD\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_FileList", this);
            obj._setContents("<ColumnInfo><Column id=\"FM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SOURCE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SOURCE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SOURCE_CODE1\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DEPT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Export2", this);
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">1. 수행빈도</Col><Col id=\"VALUE\"/></Row><Row><Col id=\"VALUE\"/><Col id=\"NAME\"/></Row><Row><Col id=\"NAME\">2. 통제유형</Col><Col id=\"VALUE\"/></Row><Row><Col id=\"VALUE\"/><Col id=\"NAME\"/></Row><Row><Col id=\"NAME\">3. 표본수</Col><Col id=\"VALUE\"/></Row><Row><Col id=\"VALUE\"/><Col id=\"NAME\"/></Row><Row><Col id=\"NAME\">4. 표본기간</Col><Col id=\"VALUE\"/></Row><Row><Col id=\"NAME\"/><Col id=\"VALUE\"/></Row><Row><Col id=\"NAME\">5. 테스트 절차</Col><Col id=\"VALUE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Export5", this);
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">   √</Col><Col id=\"VALUE\">: 예외사항 없이 수행됨</Col></Row><Row><Col id=\"NAME\">   X</Col><Col id=\"VALUE\">: 회계팀-101102-00001</Col></Row><Row><Col id=\"VALUE\">-&gt; 증빙고유번호 : 전표번호등. 증빙을 식별할 수 있는 고유번호</Col><Col id=\"NAME\"/></Row><Row><Col id=\"NAME\"/><Col id=\"VALUE\"/></Row><Row><Col id=\"NAME\">7. 예외사항</Col><Col id=\"VALUE\">-&gt; 예외사항 발견시 기술한다.</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Export4", this);
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">6. 결과</Col><Col id=\"VALUE\">&lt;표본정보&gt;</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Export1", this);
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">테스트 프로그램(Test Program)</Col><Col id=\"VALUE\"/></Row><Row><Col id=\"NAME\">회사명 : 주식회사 투비소프트</Col><Col id=\"VALUE\"/></Row><Row><Col id=\"NAME\">문서 Index : </Col><Col id=\"VALUE\"/></Row><Row><Col id=\"NAME\">Major Process : </Col><Col id=\"VALUE\"/></Row><Row><Col id=\"NAME\">Sub_Process : </Col><Col id=\"VALUE\"/></Row><Row><Col id=\"NAME\">테스트 수행자 : </Col><Col id=\"VALUE\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_Close",null,"8","15","15","8",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_POP_Cls");
            obj.set_text("");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_BottomFrame","2",null,null,"35","1","1",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_BtnBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","8","5","182","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_color("white");
            obj.set_cssclass("sta_POP_Title ");
            obj.set_text("내부회계관리제도 결과등록");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Cancel","1202","531","65","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_cancel");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Save","1124","531","65","22",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_tran");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Export2","1375","223","431","153",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_Export2");
            obj.set_visible("false");
            obj.set_border("2px solid #fd5d2a, 0px none #808080, 1px solid #ccd0d3");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"197\"/><Column size=\"55\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NAME\"/><Cell col=\"1\"/><Cell col=\"2\" colspan=\"6\" text=\"VALUE\"/></Band><Band id=\"body\"><Cell colspan=\"2\" text=\"bind:NAME\" textAlign=\"left\"/><Cell col=\"2\" colspan=\"6\" text=\"bind:VALUE\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Export3","1375","396","265","64",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_Export3");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"48\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"NAME\"/><Cell col=\"1\"/><Cell col=\"2\" text=\"VALUE\"/></Band><Band id=\"body\"><Cell colspan=\"2\" text=\"bind:NAME\"/><Cell col=\"2\" text=\"bind:VALUE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Export4","1372","472","398","32",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("ds_Export4");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"102\"/><Column size=\"31\"/><Column size=\"29\"/><Column size=\"33\"/><Column size=\"31\"/><Column size=\"25\"/><Column size=\"28\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell colspan=\"2\" text=\"bind:NAME\" textAlign=\"left\"/><Cell col=\"2\" colspan=\"6\" text=\"bind:VALUE\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Export5","1375","525","515","120",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("ds_Export5");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"152\"/><Column size=\"140\"/><Column size=\"37\"/><Column size=\"35\"/><Column size=\"31\"/><Column size=\"35\"/><Column size=\"36\"/><Column size=\"29\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell colspan=\"2\" text=\"bind:NAME\" textAlign=\"left\"/><Cell col=\"2\" colspan=\"6\" text=\"bind:VALUE\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Export6","1372","660","518","34",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("ds_Export6");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"142\"/><Column size=\"93\"/><Column size=\"59\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"30\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell colspan=\"8\" text=\"bind:NAME\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_RequestContract","4","38",null,"72","4",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("");
            obj.set_enable("true");
            obj.set_cssclass("div_WF_detailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_title01","8","8","84","22",null,null,null,null,null,null,this.div_RequestContract.form);
            obj.set_taborder("0");
            obj.set_text("MajorProcess");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_RequestContract.addChild(obj.name, obj);

            obj = new Edit("edt_MajorProcess","stc_title01:8","8",null,"22","985",null,null,null,null,null,this.div_RequestContract.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.div_RequestContract.addChild(obj.name, obj);

            obj = new Static("stc_title02","edt_MajorProcess:8","8","84","22",null,null,null,null,null,null,this.div_RequestContract.form);
            obj.set_taborder("2");
            obj.set_text("SubProcess");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_RequestContract.addChild(obj.name, obj);

            obj = new Edit("edt_SubProcess","stc_title02:8","8",null,"22","595",null,null,null,null,null,this.div_RequestContract.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.div_RequestContract.addChild(obj.name, obj);

            obj = new Static("stc_title03","edt_SubProcess:8","8","84","22",null,null,null,null,null,null,this.div_RequestContract.form);
            obj.set_taborder("4");
            obj.set_text("위험번호");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_RequestContract.addChild(obj.name, obj);

            obj = new Edit("edt_RiskNum","stc_title03:8","8",null,"22","405",null,null,null,null,null,this.div_RequestContract.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            this.div_RequestContract.addChild(obj.name, obj);

            obj = new Static("stc_title04","edt_RiskNum:8","8","84","22",null,null,null,null,null,null,this.div_RequestContract.form);
            obj.set_taborder("6");
            obj.set_text("통제번호");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_RequestContract.addChild(obj.name, obj);

            obj = new Edit("edt_CtlNum","stc_title04:8","8",null,"22","210",null,null,null,null,null,this.div_RequestContract.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.div_RequestContract.addChild(obj.name, obj);

            obj = new Static("stc_title05","edt_CtlNum:8","8","84","22",null,null,null,null,null,null,this.div_RequestContract.form);
            obj.set_taborder("8");
            obj.set_text("문서번호");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_RequestContract.addChild(obj.name, obj);

            obj = new Edit("edt_AuditNum","stc_title05:8","8",null,"22","10",null,null,null,null,null,this.div_RequestContract.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            this.div_RequestContract.addChild(obj.name, obj);

            obj = new Static("stc_title06","8","stc_title01:8","84","22",null,null,null,null,null,null,this.div_RequestContract.form);
            obj.set_taborder("10");
            obj.set_text("수행빈도");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_RequestContract.addChild(obj.name, obj);

            obj = new Edit("edt_CtlCFR","stc_title06:8","38",null,"22","985",null,null,null,null,null,this.div_RequestContract.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            this.div_RequestContract.addChild(obj.name, obj);

            obj = new Static("stc_title07","edt_CtlCFR:8","38","84","22",null,null,null,null,null,null,this.div_RequestContract.form);
            obj.set_taborder("13");
            obj.set_text("통제유형");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_RequestContract.addChild(obj.name, obj);

            obj = new Edit("edt_CtlType","stc_title07:8","38",null,"22","795",null,null,null,null,null,this.div_RequestContract.form);
            obj.set_taborder("12");
            obj.set_readonly("true");
            this.div_RequestContract.addChild(obj.name, obj);

            obj = new Static("stc_title08","edt_CtlType:8","38","84","22",null,null,null,null,null,null,this.div_RequestContract.form);
            obj.set_taborder("14");
            obj.set_text("샘플수");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_RequestContract.addChild(obj.name, obj);

            obj = new Edit("edt_SampleCnt","stc_title08:8","38",null,"22","595",null,null,null,null,null,this.div_RequestContract.form);
            obj.set_taborder("15");
            obj.set_readonly("true");
            this.div_RequestContract.addChild(obj.name, obj);

            obj = new Static("stc_title09","edt_SampleCnt:8","38","84","22",null,null,null,null,null,null,this.div_RequestContract.form);
            obj.set_taborder("16");
            obj.set_text("표본기간");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_RequestContract.addChild(obj.name, obj);

            obj = new Edit("edt_SampleDate","stc_title09:8","38",null,"22","210",null,null,null,null,null,this.div_RequestContract.form);
            obj.set_taborder("17");
            obj.set_readonly("true");
            this.div_RequestContract.addChild(obj.name, obj);

            obj = new Static("stc_title10","edt_SampleDate:8","38","84","22",null,null,null,null,null,null,this.div_RequestContract.form);
            obj.set_taborder("18");
            obj.set_text("테스트수행자");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_RequestContract.addChild(obj.name, obj);

            obj = new Edit("edt_EmpNm","stc_title10:8","38",null,"22","10",null,null,null,null,null,this.div_RequestContract.form);
            obj.set_taborder("19");
            obj.set_readonly("true");
            this.div_RequestContract.addChild(obj.name, obj);

            obj = new Div("div_TestStep","5","113","756","147",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("");
            obj.set_enable("true");
            obj.set_cssclass("div_WF_detailBg");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_TestStep","0","30",null,null,"0","0",null,null,null,null,this.div_TestStep.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_TestStep");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"649\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"43\"/></Rows><Band id=\"head\"><Cell text=\"일련번호\"/><Cell col=\"1\" text=\"테스트 절차\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:TEST_STEP_DESC\" wordWrap=\"char\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_TestStep.addChild(obj.name, obj);

            obj = new Static("Static01","5","113","756","31",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_POP_GroupBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_title11_01","16","121","122","15",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("테스트 절차");
            obj.set_cssclass("sta_POP_GroupTit");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ExcelExport",null,null,"68","22","607","420",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("Excel");
            obj.set_cssclass("btn_WF_Excel");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Search01","681","118","68","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_SchText");
            this.addChild(obj.name, obj);

            obj = new Div("div_File","div_TestStep:8","113",null,"147","4",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("");
            obj.set_enable("true");
            obj.set_cssclass("div_WF_detailBg");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Div("div_Attachment03","0","30",null,null,"0","0",null,null,null,null,this.div_File.form);
            obj.set_taborder("0");
            obj.set_url("Common::COM_AceAttachment.xfdl");
            obj.getSetter("BINDDATASET").set("ds_FileList");
            obj.getSetter("USE_DELETE_ALL").set("false");
            obj.getSetter("OPEN_ADD_DIALOG").set("false");
            obj.getSetter("USE_LINK_TYPE").set("false");
            obj.getSetter("USE_MULTI_FILE").set("true");
            obj.getSetter("USE_NEXT_FILE_TYPE").set("false");
            obj.getSetter("SOURCE_TYPE").set("AMT");
            obj.set_text("");
            obj.getSetter("USE_FILE_TYPE").set("true");
            this.div_File.addChild(obj.name, obj);

            obj = new Static("Static02","769","113",null,"31","2",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("sta_POP_GroupBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_title11_00_00","778","121","122","15",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("모집단 리스트");
            obj.set_cssclass("sta_POP_GroupTit");
            this.addChild(obj.name, obj);

            obj = new Div("div_Result","4","div_TestStep:8",null,"130","4",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("div_WF_detailBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","0","0",null,"31","0",null,null,null,null,null,this.div_Result.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_GroupBg");
            obj.set_text("");
            this.div_Result.addChild(obj.name, obj);

            obj = new Static("stc_title11_01","13","7","122","15",null,null,null,null,null,null,this.div_Result.form);
            obj.set_taborder("1");
            obj.set_text("결과");
            obj.set_cssclass("sta_POP_GroupTit");
            this.div_Result.addChild(obj.name, obj);

            obj = new Button("btn_AllChk","1187","5","73","19",null,null,null,null,null,null,this.div_Result.form);
            obj.set_taborder("2");
            obj.set_text("일괄확인");
            obj.set_cssclass("btn_WF_tran");
            this.div_Result.addChild(obj.name, obj);

            obj = new Grid("grd_Result","0","30",null,null,"0","0",null,null,null,null,this.div_Result.form);
            obj.set_taborder("3");
            obj.set_cellsizingtype("col");
            obj.set_binddataset("ds_Result");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"423\"/><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"50\"/></Rows><Band id=\"head\"><Cell text=\"일련번호\"/><Cell col=\"1\" text=\"샘플명\"/><Cell col=\"2\" text=\"1\"/><Cell col=\"3\" text=\"결과\"/><Cell col=\"4\" text=\"첨부파일\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:PROOF_SERIAL_NUM\" tooltiptext=\"bind:PROOF_SERIAL_NUM\" tooltiptype=\"inplace\" edittype=\"expr:strUseAuth==&apos;3&apos;?&apos;none&apos;:&apos;text&apos;\"/><Cell col=\"2\" text=\"bind:TS_RESULT1\" displaytype=\"combotext\" edittype=\"expr:strUseAuth==&apos;3&apos;?&apos;none&apos;:&apos;combo&apos;\" combodataset=\"ds_TestResult\" combodatacol=\"CAPTION\" combocodecol=\"CODE\"/><Cell col=\"3\" text=\"bind:TEST_RESULT_CD\" displaytype=\"combotext\" combodataset=\"ds_TestResult\" combodatacol=\"CAPTION\" combocodecol=\"CODE\"/><Cell col=\"4\" text=\"expr:첨부 (&apos;+dataset.getColumn(currow, &quot;FILE_CNT&quot;)+&apos;)&apos;\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band></Format></Formats>");
            this.div_Result.addChild(obj.name, obj);

            obj = new Button("btn_ResultDelRow","1234","33","16","16",null,null,null,null,null,null,this.div_Result.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_POP_Del");
            this.div_Result.addChild(obj.name, obj);

            obj = new Div("div_Improvement","4","div_Result:8",null,"112","4",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_cssclass("div_WF_detailBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","0","0",null,"31","0",null,null,null,null,null,this.div_Improvement.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_GroupBg");
            obj.set_text("");
            this.div_Improvement.addChild(obj.name, obj);

            obj = new Static("stc_title11_01","13","7","122","15",null,null,null,null,null,null,this.div_Improvement.form);
            obj.set_taborder("1");
            obj.set_text("예외사항");
            obj.set_cssclass("sta_POP_GroupTit");
            this.div_Improvement.addChild(obj.name, obj);

            obj = new Grid("grd_Improvement","0","31",null,null,"0","0",null,null,null,null,this.div_Improvement.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds_Improvement");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"569\"/><Column size=\"597\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"28\"/></Rows><Band id=\"head\"><Cell text=\"일련번호\"/><Cell col=\"1\" text=\"발견사항\"/><Cell col=\"2\" text=\"개선안\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:DISCOVERY_DESC\" displaytype=\"text\" edittype=\"textarea\" tooltiptext=\"bind:DISCOVERY_DESC\" tooltiptype=\"inplace\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:IMPROVEMENT_METHOD_DESC\" edittype=\"textarea\" displaytype=\"text\" tooltiptext=\"bind:IMPROVEMENT_METHOD_DESC\" tooltiptype=\"inplace\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_Improvement.addChild(obj.name, obj);

            obj = new Button("btn_DelRow","1234","35","16","16",null,null,null,null,null,null,this.div_Improvement.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_POP_Del");
            this.div_Improvement.addChild(obj.name, obj);

            obj = new Button("btn_AddRow","1206","35",null,"16","44",null,null,null,null,null,this.div_Improvement.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_POP_Add");
            this.div_Improvement.addChild(obj.name, obj);

            obj = new Static("stc_title11_01_00","17","532","172","15",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("운영의 효과성에 대한 결론");
            obj.set_cssclass("sta_POP_GroupTit");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_Lifecycle","203","530","150","22",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_innerdataset("ds_AppraisalResult");
            obj.set_datacolumn("CAPTION");
            obj.set_codecolumn("CODE");
            obj.set_text("문자발송");
            obj.set_value("SMS");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Export1","210","644","587","127",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_binddataset("ds_Export1");
            obj.set_visible("false");
            obj.set_color("#405980");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell colspan=\"8\" text=\"bind:VALUE\" textAlign=\"left\" background=\"#191970\" color=\"white\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_WorkFinish","1187","119","73","19",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("완료");
            obj.set_cssclass("btn_WF_tran");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_RequestContract.form
            obj = new Layout("default","",0,0,this.div_RequestContract.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.stc_title01.set_taborder("0");
                p.stc_title01.set_text("MajorProcess");
                p.stc_title01.set_textAlign("right");
                p.stc_title01.set_cssclass("sta_WF_DetailTit");
                p.stc_title01.move("8","8","84","22",null,null);

                p.edt_MajorProcess.set_taborder("1");
                p.edt_MajorProcess.set_readonly("true");
                p.edt_MajorProcess.move("stc_title01:8","8",null,"22","985",null);

                p.stc_title02.set_taborder("2");
                p.stc_title02.set_text("SubProcess");
                p.stc_title02.set_textAlign("right");
                p.stc_title02.set_cssclass("sta_WF_DetailTit");
                p.stc_title02.move("edt_MajorProcess:8","8","84","22",null,null);

                p.edt_SubProcess.set_taborder("3");
                p.edt_SubProcess.set_readonly("true");
                p.edt_SubProcess.move("stc_title02:8","8",null,"22","595",null);

                p.stc_title03.set_taborder("4");
                p.stc_title03.set_text("위험번호");
                p.stc_title03.set_textAlign("right");
                p.stc_title03.set_cssclass("sta_WF_DetailTit");
                p.stc_title03.move("edt_SubProcess:8","8","84","22",null,null);

                p.edt_RiskNum.set_taborder("5");
                p.edt_RiskNum.set_readonly("true");
                p.edt_RiskNum.move("stc_title03:8","8",null,"22","405",null);

                p.stc_title04.set_taborder("6");
                p.stc_title04.set_text("통제번호");
                p.stc_title04.set_textAlign("right");
                p.stc_title04.set_cssclass("sta_WF_DetailTit");
                p.stc_title04.move("edt_RiskNum:8","8","84","22",null,null);

                p.edt_CtlNum.set_taborder("7");
                p.edt_CtlNum.set_readonly("true");
                p.edt_CtlNum.move("stc_title04:8","8",null,"22","210",null);

                p.stc_title05.set_taborder("8");
                p.stc_title05.set_text("문서번호");
                p.stc_title05.set_textAlign("right");
                p.stc_title05.set_cssclass("sta_WF_DetailTit");
                p.stc_title05.move("edt_CtlNum:8","8","84","22",null,null);

                p.edt_AuditNum.set_taborder("9");
                p.edt_AuditNum.set_readonly("true");
                p.edt_AuditNum.move("stc_title05:8","8",null,"22","10",null);

                p.stc_title06.set_taborder("10");
                p.stc_title06.set_text("수행빈도");
                p.stc_title06.set_textAlign("right");
                p.stc_title06.set_cssclass("sta_WF_DetailTit");
                p.stc_title06.move("8","stc_title01:8","84","22",null,null);

                p.edt_CtlCFR.set_taborder("11");
                p.edt_CtlCFR.set_readonly("true");
                p.edt_CtlCFR.move("stc_title06:8","38",null,"22","985",null);

                p.stc_title07.set_taborder("13");
                p.stc_title07.set_text("통제유형");
                p.stc_title07.set_textAlign("right");
                p.stc_title07.set_cssclass("sta_WF_DetailTit");
                p.stc_title07.move("edt_CtlCFR:8","38","84","22",null,null);

                p.edt_CtlType.set_taborder("12");
                p.edt_CtlType.set_readonly("true");
                p.edt_CtlType.move("stc_title07:8","38",null,"22","795",null);

                p.stc_title08.set_taborder("14");
                p.stc_title08.set_text("샘플수");
                p.stc_title08.set_textAlign("right");
                p.stc_title08.set_cssclass("sta_WF_DetailTit");
                p.stc_title08.move("edt_CtlType:8","38","84","22",null,null);

                p.edt_SampleCnt.set_taborder("15");
                p.edt_SampleCnt.set_readonly("true");
                p.edt_SampleCnt.move("stc_title08:8","38",null,"22","595",null);

                p.stc_title09.set_taborder("16");
                p.stc_title09.set_text("표본기간");
                p.stc_title09.set_textAlign("right");
                p.stc_title09.set_cssclass("sta_WF_DetailTit");
                p.stc_title09.move("edt_SampleCnt:8","38","84","22",null,null);

                p.edt_SampleDate.set_taborder("17");
                p.edt_SampleDate.set_readonly("true");
                p.edt_SampleDate.move("stc_title09:8","38",null,"22","210",null);

                p.stc_title10.set_taborder("18");
                p.stc_title10.set_text("테스트수행자");
                p.stc_title10.set_textAlign("right");
                p.stc_title10.set_cssclass("sta_WF_DetailTit");
                p.stc_title10.move("edt_SampleDate:8","38","84","22",null,null);

                p.edt_EmpNm.set_taborder("19");
                p.edt_EmpNm.set_readonly("true");
                p.edt_EmpNm.move("stc_title10:8","38",null,"22","10",null);
            	}
            );
            this.div_RequestContract.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div_RequestContract.form
            obj = new Layout("portrait","",0,0,this.div_RequestContract.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.stc_title02.move("8","72","64","30",null,null);

                p.div_Contract.move("80","72",null,"30","4",null);

                p.stc_Project_Name00.move("8","38","64","30",null,null);

                p.edt_ProjectName.move("80","38",null,"30","4",null);

                p.edt_MajorProcess.move("80","4",null,"30","4",null);

                p.stc_title01.move("8","4","64","30",null,null);
            	}
            );
            this.div_RequestContract.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div_TestStep.form
            obj = new Layout("default","",0,0,this.div_TestStep.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grd_TestStep.set_taborder("0");
                p.grd_TestStep.set_binddataset("ds_TestStep");
                p.grd_TestStep.set_treeinitstatus("expand,all");
                p.grd_TestStep.set_treeusecheckbox("false");
                p.grd_TestStep.set_cellsizingtype("col");
                p.grd_TestStep.set_autofittype("col");
                p.grd_TestStep.set_extendsizetype("row");
                p.grd_TestStep.move("0","30",null,null,"0","0");
            	}
            );
            this.div_TestStep.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div_TestStep.form
            obj = new Layout("portrait","",0,0,this.div_TestStep.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.stc_Project_Name02.set_text("담당자");
                p.stc_Project_Name02.move("8","141","64","30",null,null);

                p.stc_Contract_Date00.set_text("요청일");
                p.stc_Contract_Date00.move(null,"39","60","30","100",null);

                p.msk_DtRequest.move(null,"39","92","30","4",null);

                p.stc_Project_Name03.move(null,"73","60","30","100",null);

                p.edt_EmpReg.move(null,"73","92","30","4",null);

                p.ta_ReqContents.move("81","175",null,null,"4","4");

                p.stc_Contract_Date04.move("8","244","64","22",null,null);

                p.cmb_EmpList.move("81","141",null,"30","30",null);

                p.stc_VoucherNo.set_text("바우처");
                p.stc_VoucherNo.move(null,"107","60","30","100",null);

                p.edt_VoucherNo.move(null,"107","66","30","30",null);

                p.div_EmpRequest.move("81","141",null,"30","4",null);

                p.btn_PopupVoucherNo.move(null,"107","26","30","4",null);

                p.Static05.set_textAlign("right");
                p.Static05.move("8","107","64","30",null,null);

                p.cmb_MinTo.move("253","107","42","30",null,null);

                p.cmb_HourTo.move("211","107","42","30",null,null);

                p.cal_DtTo.move("81","107","130","30",null,null);

                p.edt_ProductName.move("81","39","214","30",null,null);

                p.cal_DtFrom.move("81","73","130","30",null,null);

                p.cmb_MinFrom.move("253","73","42","30",null,null);

                p.cmb_HourFrom.move("211","73","42","30",null,null);

                p.stc_Contract_Date.move("8","73","64","30",null,null);

                p.stc_Contract_Date01.move("8","39","64","30",null,null);
            	}
            );
            this.div_TestStep.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div_File.form.div_Attachment03
            obj = new Layout("default","",0,0,this.div_File.form.div_Attachment03.form,function(p){});
            this.div_File.form.div_Attachment03.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_File.form
            obj = new Layout("default","",0,0,this.div_File.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.div_Attachment03.set_taborder("0");
                p.div_Attachment03.set_url("Common::COM_AceAttachment.xfdl");
                p.div_Attachment03.getSetter("BINDDATASET").set("ds_FileList");
                p.div_Attachment03.getSetter("USE_DELETE_ALL").set("false");
                p.div_Attachment03.getSetter("OPEN_ADD_DIALOG").set("false");
                p.div_Attachment03.getSetter("USE_LINK_TYPE").set("false");
                p.div_Attachment03.getSetter("USE_MULTI_FILE").set("true");
                p.div_Attachment03.getSetter("USE_NEXT_FILE_TYPE").set("false");
                p.div_Attachment03.getSetter("SOURCE_TYPE").set("AMT");
                p.div_Attachment03.set_text("");
                p.div_Attachment03.getSetter("USE_FILE_TYPE").set("true");
                p.div_Attachment03.move("0","30",null,null,"0","0");
            	}
            );
            this.div_File.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div_File.form
            obj = new Layout("portrait","",0,0,this.div_File.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.stc_Project_Name02.set_text("담당자");
                p.stc_Project_Name02.move("8","141","64","30",null,null);

                p.stc_Contract_Date00.set_text("요청일");
                p.stc_Contract_Date00.move(null,"39","60","30","100",null);

                p.msk_DtRequest.move(null,"39","92","30","4",null);

                p.stc_Project_Name03.move(null,"73","60","30","100",null);

                p.edt_EmpReg.move(null,"73","92","30","4",null);

                p.ta_ReqContents.move("81","175",null,null,"4","4");

                p.stc_Contract_Date04.move("8","244","64","22",null,null);

                p.cmb_EmpList.move("81","141",null,"30","30",null);

                p.stc_VoucherNo.set_text("바우처");
                p.stc_VoucherNo.move(null,"107","60","30","100",null);

                p.edt_VoucherNo.move(null,"107","66","30","30",null);

                p.div_EmpRequest.move("81","141",null,"30","4",null);

                p.btn_PopupVoucherNo.move(null,"107","26","30","4",null);

                p.Static05.set_textAlign("right");
                p.Static05.move("8","107","64","30",null,null);

                p.cmb_MinTo.move("253","107","42","30",null,null);

                p.cmb_HourTo.move("211","107","42","30",null,null);

                p.cal_DtTo.move("81","107","130","30",null,null);

                p.edt_ProductName.move("81","39","214","30",null,null);

                p.cal_DtFrom.move("81","73","130","30",null,null);

                p.cmb_MinFrom.move("253","73","42","30",null,null);

                p.cmb_HourFrom.move("211","73","42","30",null,null);

                p.stc_Contract_Date.move("8","73","64","30",null,null);

                p.stc_Contract_Date01.move("8","39","64","30",null,null);
            	}
            );
            this.div_File.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div_Result.form
            obj = new Layout("default","",0,0,this.div_Result.form,function(p){});
            this.div_Result.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_Improvement.form
            obj = new Layout("default","",0,0,this.div_Improvement.form,function(p){});
            this.div_Improvement.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,560,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","cb_Lifecycle","value","ds_AM_List","APPRAISAL_RESULT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_RequestContract.form.edt_MajorProcess","value","ds_AM_List","MAJOR_PROCESS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_RequestContract.form.edt_SubProcess","value","ds_AM_List","SUB_PROCESS_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_RequestContract.form.edt_RiskNum","value","ds_AM_List","RISK_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_RequestContract.form.edt_CtlNum","value","ds_AM_List","CONTROL_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_RequestContract.form.edt_AuditNum","value","ds_AM_List","AUDIT_SEQ");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_RequestContract.form.edt_CtlCFR","value","ds_AM_List","CONTROL_CFR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_RequestContract.form.edt_CtlType","value","ds_AM_List","CONTROL_TYPE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_RequestContract.form.edt_SampleCnt","value","ds_AM_List","SAMPLE_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_RequestContract.form.edt_SampleDate","value","ds_AM_List","SAMPLE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_RequestContract.form.edt_EmpNm","value","ds_AM_List","APPRAISAL_EMPNM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Common::COM_AceAttachment.xfdl");
        };
        
        // User Script
        this.addIncludeScript("AA_AuditResultPopup.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("AA_AuditResultPopup.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("AA_AuditResultPopup.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("AA_AuditResultPopup.xfdl","Script::CommGrid.xjs");
        this.registerScript("AA_AuditResultPopup.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 : 내부회계관리제도 - 진행현황결과
        * 02. 화면명   : 진행현황결과(AA_AuditResultPopup)
        * 03. 화면설명 : 진행현황결과
        * 04. 작성일   : 2021.06.09
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
        var strSMSeq;
        var strAuditSeq;
        var objVFList = new Array();
        var bUpdateFlag = false;
        var strUseAuth = '3';	// '1':관리자, '2':평가자, '3':TP작성자

        //첨부파일 사용 변수
        var strSourceType = "AMT";	//	모집단 리스트 첨부파일(테스트 절차)
        var strSourceCode;
        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/
        this.AA_AuditResultPopup_onload = function(obj,e)
        {
        	strSMSeq	= this.parent.strSMSeq;
        	strAuditSeq = this.parent.strAuditSeq;
        	strSourceType = "AMT";
        	strSourceCode = strAuditSeq;

        	// COM_AceAttachment에 SOURCE_CODE, SOURCE_CODE1 값 넘기기 위한 작업
        	this.div_File.form.div_Attachment03.SOURCE_CODE = strAuditSeq;		// 문서 또는 일련번호
        	this.div_File.form.div_Attachment03.SOURCE_CODE1 = strSMSeq;		// 회차
        	this.div_File.form.div_Attachment03.SOURCE_TYPE = strSourceType;	// AMT

        	// COM_AceAttachment 실행
        	this.div_File.form.div_Attachment03.form.fn_Init("load");

        	this.fn_CodeData();
        };
        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
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
        			this.fn_QueryData();
        		}
        		else if(strSvcID=="Search") {
        			this.fn_Display();
        			this.fn_RedrowResultGrid();
        			var nRowCnt = this.ds_AM_List.getColumn(0, "REAL_SAMPLE_CNT");
        			nRowCnt -= this.ds_Result.rowcount;

        			if (nRowCnt < 0)
        			{
        				var nCmpVal = this.ds_Result.rowcount - (nRowCnt*-1);

        				for ( var i=this.ds_Result.rowcount; i>=nCmpVal; i--)
        				{
        					this.ds_Result.deleteRow(i);
        				}
        			}
        			else
        			{
        				for (var i=0; i<nRowCnt; i++)
        				{
        					var nRow = this.ds_Result.addRow();
        					this.ds_Result.setColumn(nRow, "SM_SEQ",			strSMSeq);
        					this.ds_Result.setColumn(nRow, "AUDIT_SEQ",  	strAuditSeq);

        					for (var j=0; j<this.ds_TestStep.rowcount; j++)
        					{
        						this.ds_Result.setColumn(nRow, "RTS_SEQ"+(j+1),  this.ds_TestStep.getColumn(j, "TS_SEQ"));
        					}
        				}
        			}
        			bUpdateFlag = false;
        		}
        		else if (strSvcID=="AMM_Test_Save")
        		{
        			alert("저장되었습니다.");
        			this.fn_QueryData();
        		}
        	}
        };


        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        // 01 공통코드 조회
        this.fn_CodeData = function()
        {
        	this.gfnAddCodeDataset("ds_TestResult", "TEST_RESULT2");   			// 수행빈도
            this.gfnAddCodeDataset("ds_AppraisalResult", "APPRAISAL_RESULT");	// 통제유형
        	this.gfnCodeTransaction(); // 공통 코드 조회
        };

        // 02 Datail 조회
        this.fn_QueryData = function()
        {
        	// Parameter 셋팅
         	this.gfnAddSendParameter("SM_SEQ",		strSMSeq);
         	this.gfnAddSendParameter("AUDIT_SEQ",	strAuditSeq);

         	// FILE 첨부 조회 입력값
         	this.gfnAddSendParameter("SOURCE_TYPE",	strSourceType); // AMT
         	this.gfnAddSendParameter("SOURCE_CODE",	strAuditSeq);	// 문서번호(내부감사일련번호)
         	this.gfnAddSendParameter("SOURCE_CODE1",	strSMSeq);	// 회차

        	/* 조회용 Output Dataset 셋팅
        		1. AM_MASTER_DETAIL_SEL
        		2. AM_TEST_STEP_FILE_MASTER ( 파일은 다른 곳에서 셋팅 )
        		3. AM_TEST_STEP_SEL
        		4. AM_RESULT_SEL
        		5. AM_IMPROVEMENT_METHOD_SEL
        	*/
        	this.gfnAddOutputDataset("ds_AM_List"	, "dsAmListOutput");
        	this.gfnAddOutputDataset("ds_FileList"	, "dsFileListOutput");
        	this.gfnAddOutputDataset("ds_TestStep"	, "dsTsOutput");
        	this.gfnAddOutputDataset("ds_Result"	, "dsResOutput");
        	this.gfnAddOutputDataset("ds_Improvement"	, "dsImprovOutput");

        	// 공통 Transaction
        	this.gfnCommonTransaction("Search", "AA_AuditResult_S01");
        };

        //화면 셋팅
        this.fn_Display = function()
        {
        	/*	strUseAuth(권한) :   1(관리자)  2(평가자)  3(TP작성자)  */
        	var app = nexacro.getApplication();
        	var strEmpNo = app.gdsUserInfo.getColumn(0, "EMP_NO");
            var strDeptNo = app.gdsUserInfo.getColumn(0, "DEPT_CD");

        	if ( this.ds_AM_List.getColumn(0, "APPRAISAL_EMPNO") == strEmpNo) strUseAuth = '2';
        	else if(this.commUtil.getFormAuthority(313,1)) // 전산관리자, 송용호팀장 관리자 권한
        	{
        		strUseAuth = '1';
        	}

        	//trace("strUseAuth:["+strUseAuth+"]");
        	if (strUseAuth == '3')
        	{
        		this.div_Improvement.form.btn_AddRow.set_visible(false);
        		this.div_Improvement.form.btn_DelRow.set_visible(false);
        		this.div_Result.form.btn_ResultDelRow.set_visible(false);
        		this.div_Improvement.form.grd_Improvement.set_readonly(true);
        		this.cb_Lifecycle.set_readonly(true);
        		this.div_Result.form.btn_AllChk.set_visible(false);	// 일괄확인 버튼 비활성화
        	}
        };

        //권한에 따른 displaytype , edittype 설정
        this.fn_ModType = function(modType, tgCol, strUseAuth)
        {
        	var reVal = "";
        	if(tgCol == 'PROOF_SERIAL_NUM')
        	{
        		if(modType == 'edittype')
        		{
        			if(strUseAuth == '3') reVal = 'none';
        			else reVal = 'text';
        		}
        	}
        	else if(tgCol == 'TS_RESULT')
        	{
        		if(modType == 'displaytype')
        		{
        			if(strUseAuth == '3') reVal = 'combotext';
        			else reVal = 'combocontrol';
        		}
        		else if(modType = 'edittype')
        		{
        			if(strUseAuth == '3') reVal = 'none';
        			else reVal = 'combo';
        		}
        	}
        	return reVal;
        };

        //결과 체크 컬럼 셋팅
        this.fn_RedrowResultGrid = function()
        {
        	var strGrdFormat = "";
        	var strDyColumnFormat = "";
        	var strDyHeadColFormat = "";
        	var strDyBodyColFormat = "";
        	var TestColCnt = this.ds_TestStep.rowcount;
        	if (TestColCnt <=0) return;

        	for (var i=0; i<TestColCnt; i++)
        	{
        		if (i==0) continue;
        		strDyColumnFormat += '		<Column size="50" />\n';
        		strDyHeadColFormat += '		<Cell col="'+(i+2)+'" text="'+(i+1)+'"/>\n';
        		strDyBodyColFormat += '		<Cell col="'+(i+2)+'" text="bind:TS_RESULT'+(i+1)+'" combodataset="ds_TestResult" combocodecol="CODE" combodatacol="CAPTION" displaytype="'+this.fn_ModType('displaytype', 'TS_RESULT', strUseAuth)+'" edittype="'+this.fn_ModType('edittype', 'TS_RESULT', strUseAuth)+'"/>\n';
        	}

        	//trace("strUseAuth:["+strUseAuth+"]");
        	strGrdFormat = '<Formats>\n';
        	strGrdFormat += '	<Format id="default">\n';
        	strGrdFormat += '	  <Columns>\n';
        	strGrdFormat += '		<Column size="60" />\n';
        	strGrdFormat += '		<Column size="300" />\n';
        	strGrdFormat += '		<Column size="60" />\n';
        	strGrdFormat += strDyColumnFormat;
        	strGrdFormat += '		<Column size="70" />\n';
        	strGrdFormat += '		<Column size="80" />\n';
        	strGrdFormat += '	  </Columns>\n';
        	strGrdFormat += '	  <Rows>\n';
        	strGrdFormat += '		<Row size="24" band="head" />\n';
        	strGrdFormat += '		<Row size="24" />\n';
        	strGrdFormat += '	  </Rows>\n';
        	strGrdFormat += '	  <Band id="head">\n';
        	strGrdFormat += '		<Cell text="일련번호"/>\n';
        	strGrdFormat += '		<Cell col="1" text="샘플명"/>\n';
        	strGrdFormat += '		<Cell col="2" text="1"/>\n';
        	strGrdFormat +=	strDyHeadColFormat;
        	strGrdFormat += '		<Cell col="'+(TestColCnt+2)+'" text="결과"/>\n';
        	strGrdFormat += '		<Cell col="'+(TestColCnt+3)+'" text="첨부파일"/>\n';
        	strGrdFormat += '	  </Band>\n';
        	strGrdFormat += '	  <Band id="body">\n';
        	strGrdFormat += '		<Cell text="expr:currow&#32;+&#32;1"/>\n';
        	strGrdFormat += '		<Cell col="1" textAlign="left" text="bind:PROOF_SERIAL_NUM" edittype="'+this.fn_ModType('edittype', 'PROOF_SERIAL_NUM', strUseAuth)+'" tooltiptype="inplace" tooltiptext="bind:PROOF_SERIAL_NUM" />\n';
        	strGrdFormat += '		<Cell col="2" text="bind:TS_RESULT1" combodataset="ds_TestResult" combocodecol="CODE" combodatacol="CAPTION" displaytype="'+ this.fn_ModType('displaytype', 'TS_RESULT', strUseAuth) +'" edittype="'+this.fn_ModType('edittype', 'TS_RESULT', strUseAuth) + '" />\n';
        	strGrdFormat += strDyBodyColFormat;
        	strGrdFormat += '		<Cell col="'+(TestColCnt+2)+'" displaytype="combotext" text="bind:TEST_RESULT_CD" combodataset="ds_TestResult" combocodecol="CODE" combodatacol="CAPTION"/>\n';
        	strGrdFormat += '		<Cell col="'+(TestColCnt+3)+'" displaytype="buttoncontrol" edittype="button" text="expr:dataset.getColumn(currow,&#32;&quot;FILE_CNT&quot;)&#32;&gt;&#32;0?&apos;첨부&#32;(&apos;+dataset.getColumn(currow,&#32;&quot;FILE_CNT&quot;)+&apos;)&apos;&#32;:&#32;&apos;첨부&apos;"/>\n';
        	strGrdFormat += '	  </Band>\n';
        	strGrdFormat += '	</Format>\n';
        	strGrdFormat += '	</Formats>\n';
        	this.div_Result.form.grd_Result.set_formats(strGrdFormat);
        	this.div_Result.form.grd_Result.set_autofittype("col");
        };

        this.fn_SaveData = function()
        {
        	// 저장용 Input Dataset 셋팅
        	/*
        		1. AM_MASTER_UPDATE
        		2. AM_RESULT
        		3. AM_IMPROVEMENT_METHOD
        		4. FILE_MASTER
        	*/
        	this.gfnAddInputDataset("ds_AM_List",		"dsAmList");
        	this.gfnAddInputDataset("ds_Result",		"dsResult");
        	this.gfnAddInputDataset("ds_Improvement",	"dsImprovement");
        	//this.gfnAddInputDataset("ds_FileList",		"dsFileList");

        	// 공통 Transaction
        	this.gfnCommonTransaction("AMM_Test_Save", "AA_AuditResult_R01");
        }

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.comm_Click = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_Close" :
        			this.commUtil.popupClose("");
        			break;
        		case "btn_Cancel" :
        			if ( bUpdateFlag && confirm("변경된 내용이 있습니다. 저장하시겠습니까?") )	this.fn_SaveData();
        			else
        			{
        				this.opener.fn_QueryData(); // 메인 화면 조회
        				this.commUtil.popupClose("");
        			}
        			break;
        	}
        };

        //테스트 절차 상세 팝업
        this.div_TestStep_grd_TestStep_oncelldblclick = function(obj,e)
        {
        	var sArgument =
        	{
        		 strReviewDoc 	 	: this.ds_AM_List.getColumn(0, "REVIEW_DOC_DESC")
        		,strTestMethod		: this.ds_AM_List.getColumn(0, "TEST_METHOD_DESC")
        	}
        	this.commUtil.popup(this, "TestStepPopup", "Admin::AA_TestStepPopup.xfdl", -1, -1, null, null, true, true, false, sArgument, "fnPopupCallBack");
        };

        //결과 리스트 수정시 발생 이벤트
        this.ds_Result_oncolumnchanged = function(obj, e)
        {
        	if (e.columnid.substr(0,9) == "TS_RESULT")
        	{
        		var nTestCnt = this.ds_TestStep.rowcount;

        		var nSumPoint = 0;
        		for (var i=0; i<nTestCnt; i++)
        		{
        			var strTestResultVal = this.ds_Result.getColumn(e.row, "TS_RESULT"+(i+1));
        			if (this.gfnIsEmpty(strTestResultVal))	strTestResultVal = "0";

        			nSumPoint += nexacro.toNumber(strTestResultVal);
        		}

        		if (nSumPoint == (nTestCnt*2))	this.ds_Result.setColumn(e.row, "TEST_RESULT_CD", "2");
        		else							this.ds_Result.setColumn(e.row, "TEST_RESULT_CD", "1");
        	}
        }

        //예외사항 추가
        this.div_Improvement_btn_AddRow_onclick = function(obj,e)
        {
        	var nRow = this.ds_Improvement.rowposition;
        	if (nRow < 0)	nRow = 0;
        	var nAddRow = this.ds_Improvement.insertRow(nRow+1);
        	this.ds_Improvement.setColumn(nAddRow, "SM_SEQ",		strSMSeq);
        	this.ds_Improvement.setColumn(nAddRow, "AUDIT_SEQ",  strAuditSeq);
        };


        //예외사항 삭제
        this.div_Improvement_btn_DelRow_onclick = function(obj,e)
        {
        	if (this.ds_Improvement.rowcount <= 0 )
        	{
        		alert("삭제할 데이터가 없습니다.");
        		return;
        	}

        	var nRow = this.ds_Improvement.rowposition;
        	if (nRow < 0)	nRow = 0;
        	if (!confirm("[일련번호 "+(nRow+1)+"] 예외사항을 삭제 하시겠습니까?")) return;
        	this.ds_Improvement.deleteRow(this.ds_Improvement.rowposition);
        };

        //저장
        this.btn_Save_onclick = function(obj,e)
        {
        	bUpdateFlag = false;
        	this.fn_SaveData();
        };

        //값 수정시 UpdateFlag 변경
        this.ds_AM_List_onvaluechanged = function(obj,e)
        {
        	if (!bUpdateFlag) bUpdateFlag = true;
        };

        //값 수정시 UpdateFlag 변경
        this.ds_Result_onvaluechanged = function(obj,e)
        {
        	if (!bUpdateFlag) bUpdateFlag = true;
        };

        //값 수정시 UpdateFlag 변경
        this.ds_Improvement_onvaluechanged = function(obj,e)
        {
        	if (!bUpdateFlag) bUpdateFlag = true;
        };

        //값 수정시 UpdateFlag 변경
        this.ds_FileList_onvaluechanged = function(obj,e)
        {
        	if (!bUpdateFlag) bUpdateFlag = true;
        };

        //일괄 체크
        this.div_Result_btn_AllChk_onclick = function(obj,e)
        {
        	var nRowCnt = this.ds_Result.rowcount;
        	var nColCnt = this.ds_TestStep.rowcount;
        	var sBtnText = this.div_Result.form.btn_AllChk.text;
        	var sAllVal = "";

        	if (sBtnText == "일괄확인")
        	{
        		sAllVal = "2";
        		this.div_Result.form.btn_AllChk.set_text("일괄취소");
        	}
        	else
        	{
        		sAllVal = "";
        		this.div_Result.form.btn_AllChk.set_text("일괄확인");
        	}
        	//trace("Col_Cnt:["+nColCnt+"] Row_Cnt:["+nRowCnt+"]");

        	if (nRowCnt >0)
        	{
        		for (var i=0; i<nRowCnt; i++)
        		{
        			for (var j=0; j<nColCnt; j++)
        			{
        				var sColNm = "TS_RESULT"+(j+1);
        				this.ds_Result.setColumn(i, sColNm, sAllVal);
        			}
        			this.ds_Result.setColumn(i, "TEST_RESULT_CD", sAllVal);
        		}
        	}
        };


        //엑셀 다운로드
        this.div_Search_btn_ExcelExport_onclick = function(obj,e)
        {
        	this.ds_Export1.setColumn(0,"VALUE",this.ds_Export1.getColumn(0,"NAME"));
        	this.ds_Export1.setColumn(1,"VALUE",this.ds_Export1.getColumn(1,"NAME"));
        	this.ds_Export1.setColumn(2,"VALUE",this.ds_Export1.getColumn(2,"NAME")+this.ds_AM_List.getColumn(this.ds_AM_List.rowposition,"AUDIT_SEQ"));
        	this.ds_Export1.setColumn(3,"VALUE",this.ds_Export1.getColumn(3,"NAME")+this.ds_AM_List.getColumn(this.ds_AM_List.rowposition,"MAJOR_PROCESS_NM"));
        	this.ds_Export1.setColumn(4,"VALUE",this.ds_Export1.getColumn(4,"NAME")+this.ds_AM_List.getColumn(this.ds_AM_List.rowposition,"SUB_PROCESS_NM"));
        	this.ds_Export1.setColumn(5,"VALUE",this.ds_Export1.getColumn(5,"NAME")+this.ds_AM_List.getColumn(this.ds_AM_List.rowposition,"APPRAISAL_EMPNM"));
        	this.ds_Export1.setColumn(6,"VALUE",this.ds_Export1.getColumn(6,"NAME")+this.ds_AM_List.getColumn(this.ds_AM_List.rowposition,"CONTROL_SEQ"));

        	this.ds_Export2.setColumn(0,"VALUE",this.ds_AM_List.getColumn(this.ds_AM_List.rowposition,"CONTROL_CFR_NM"));
        	this.ds_Export2.setColumn(2,"VALUE",this.ds_AM_List.getColumn(this.ds_AM_List.rowposition,"CONTROL_TYPE_NM"));
        	this.ds_Export2.setColumn(4,"VALUE",this.ds_AM_List.getColumn(this.ds_AM_List.rowposition,"SAMPLE_CNT"));
        	this.ds_Export2.setColumn(6,"VALUE",this.ds_AM_List.getColumn(this.ds_AM_List.rowposition,"SAMPLE_DATE"));

        	this.ds_Export3.setColumn(1,"NAME",this.ds_AM_List.getColumn(this.ds_AM_List.rowposition,"CONTROL_SEQ"));
        	this.ds_Export3.setColumn(1,"VALUE",this.ds_AppraisalResult.getColumn(this.ds_AppraisalResult.rowposition,"CAPTION"));

        	/* Export 설정 */
        	var objEnv = nexacro.getEnvironment();
        	var strServiceURL = objEnv.services["ServiceURL"].url;

        	this.ExcelExportObject = null;
        	this.ExcelExportObject = new ExcelExportObject("ExcelExportObject", this);

        	//파일명 셋팅 : 통제번호
        	var sFileNm = this.ds_AM_List.getColumn(this.ds_AM_List.rowposition,"CONTROL_SEQ");

        	this.ExcelExportObject.set_exporttype(nexacro.ExportTypes.EXCEL2007);
        	this.ExcelExportObject.set_exportfilename(sFileNm);
        	this.ExcelExportObject.set_exporturl(strServiceURL+"xeni/XExportImport");
        	this.ExcelExportObject.addEventHandler("onsuccess", this.ExcelExportObject_onsuccess, this);
        	this.ExcelExportObject.addEventHandler("onerror", this.ExcelExportObject_onerror, this);

        	/* Export 부가설정 */
        	var constExportItemType = nexacro.ExportItemTypes.GRID;
        	var strExportHead = "allband";
        	var strExportSelect = "allrecord";
        	var strExportMerge = "suppress";
        	var strExportValue = "allstyle";
        	var strExportImage = "none";
        	var strExceptStyle = "none";
        	var strExportSize = "both";
        	var strAcceptStyle = "cellline";

        	/*
        		export Grid = export item source
        		대상 그리드 셋팅
        	*/
        	var objGrid1 = this.grd_Export1;
        	var objGrid2 = this.grd_Export2;
        	var objGrid3 = this.div_TestStep.form.grd_TestStep;
        	var objGrid4 = this.grd_Export4;
        	var objGrid5 = this.div_Result.form.grd_Result;
        	var objGrid6 = this.grd_Export5;
        	var objGrid7 = this.div_Improvement.form.grd_Improvement;
        	var objGrid8 = this.grd_Export6;
        	var objGrid9 = this.grd_Export3;

        	//export item ranges
        	//strRange 셋팅 grd_Export1 , addExportItem
        	var rCnt = 2;
        	var strRange = "Sheet1!A";
            this.ExcelExportObject.addExportItem(constExportItemType, objGrid1, strRange+rCnt, strExportHead, strExportSelect, strExportMerge, strExportValue, strExportImage, strExceptStyle, strExportSize, strAcceptStyle);

        	//strRange 셋팅 grd_Export2 , addExportItem
        	rCnt = rCnt + this.grd_Export1.rowcount + 1;
        	this.ExcelExportObject.addExportItem(constExportItemType, objGrid2, strRange+rCnt, "nohead", strExportSelect, strExportMerge, "onlyvalue", strExportImage, strExceptStyle, strExportSize, strAcceptStyle);

        	//strRange 셋팅 grd_TestStep , addExportItem
        	rCnt = rCnt + this.grd_Export2.rowcount;
        	this.ExcelExportObject.addExportItem(constExportItemType, objGrid3, strRange+rCnt, strExportHead, strExportSelect, strExportMerge, strExportValue, strExportImage, strExceptStyle, strExportSize, strAcceptStyle);

        	//strRange 셋팅 grd_Export4 , addExportItem
        	rCnt = rCnt + this.div_TestStep.form.grd_TestStep.rowcount + 2;
         	this.ExcelExportObject.addExportItem(constExportItemType, objGrid4, strRange+rCnt,"nohead", strExportSelect, strExportMerge, "onlyvalue", strExportImage, strExceptStyle, strExportSize, strAcceptStyle);

        	//strRange 셋팅 grd_Result , addExportItem
        	rCnt = rCnt + this.grd_Export4.rowcount;
         	this.ExcelExportObject.addExportItem(constExportItemType, objGrid5, strRange+rCnt, strExportHead, strExportSelect, strExportMerge, strExportValue, strExportImage, strExceptStyle, strExportSize, strAcceptStyle);

        	//strRange 셋팅 grd_Export5 , addExportItem
        	rCnt = rCnt + this.div_Result.form.grd_Result.rowcount + 1;
         	this.ExcelExportObject.addExportItem(constExportItemType, objGrid6, strRange+rCnt,"nohead", strExportSelect, strExportMerge, "onlyvalue", strExportImage, strExceptStyle, strExportSize, strAcceptStyle);

        	//strRange 셋팅 grd_Improvement , addExportItem
        	rCnt = rCnt + this.grd_Export5.rowcount;
          	this.ExcelExportObject.addExportItem(constExportItemType, objGrid7, strRange+rCnt, strExportHead, strExportSelect, strExportMerge, strExportValue, strExportImage, strExceptStyle, strExportSize, strAcceptStyle);

        	//strRange 셋팅 grd_Export6 , addExportItem
        	rCnt = rCnt + this.div_Improvement.form.grd_Improvement.rowcount + 2;
         	this.ExcelExportObject.addExportItem(constExportItemType, objGrid8, strRange+rCnt,"nohead", strExportSelect, strExportMerge, "onlyvalue", strExportImage, strExceptStyle, strExportSize, strAcceptStyle);

        	//strRange 셋팅 grd_Export3 , addExportItem
        	rCnt = rCnt + this.grd_Export6.rowcount;
         	this.ExcelExportObject.addExportItem(constExportItemType, objGrid9, strRange+rCnt,"nohead", strExportSelect, strExportMerge, strExportValue, strExportImage, strExceptStyle, strExportSize, strAcceptStyle);

        	this.ExcelExportObject.exportData();
        };

        this.ExcelExportObject_onsuccess = function(obj,e)
        {
        	//this.alert("Excel Export Success !!")
        };

        this.ExcelExportObject_onerror = function(obj,e)
        {
        	this.alert( "Excel Export Error Type:["+ e.errortype + "] Error Msg:["+e.errormsg+"]");
        };

        //결과 그리드에서 첨부 버튼 클릭
        this.div_Result_grd_Result_oncellclick = function(obj,e)
        {
        	var TestColCnt = this.ds_TestStep.rowcount;
        	if (e.col == (TestColCnt+3))
        	{
        		var nRTSeq = this.ds_Result.getColumn(e.row, "RT_SEQ");
        		var strProofSerialNum = this.ds_Result.getColumn(e.row, "PROOF_SERIAL_NUM");
        		if (this.gfnIsEmpty(nRTSeq))
        		{
        			alert("평가자의 평가가 선행 되어야 첨부파일을 첨부 할수 있습니다.");
        			return;
        		}

        		var sArgument =
        		{
        			 strSMSeq 	 	: strSMSeq
        			,strAuditSeq	: strAuditSeq
        			,nRTSeq			: nRTSeq
        			,strProofSerialNum	: strProofSerialNum
        		}
        		this.commUtil.popup(this, "FileUploadPopup", "Admin::AA_FileUploadPopup.xfdl", -1, -1, null, null, true, true, false, sArgument, "fnPopupCallBack");
        	}
        };

        //모집단 파일 첨부 완료
        this.btn_WorkFinish_onclick = function(obj,e)
        {
        	var bRtn = confirm("모집단 리스트 첨부를 완료 하시겠습니까?");
        	if (bRtn)	this.ds_AM_List.setColumn(0, "POPULATION_RESULT_CD", 1);
        };
        /****************************************/
        /* 모집단 리스트 첨부파일 처리 		*/
        /****************************************/
        //결과 로우 삭제
        this.div_Result_btn_ResultDelRow_onclick = function(obj,e)
        {
        	var nRow = this.ds_Result.rowcount;
        	var tgRow = this.div_Result.form.grd_Result.currentrow;
        	if (nRow <= 0)
        	{
        		alert("삭제할 데이터가 없습니다.");
        		return;
        	}

        	var strProofSerialNum = this.ds_Result.getColumn(tgRow, "PROOF_SERIAL_NUM");
        	if (!confirm("[ "+(tgRow+1)+" : "+ strProofSerialNum +"] 결과를 삭제 하시겠습니까?")) return;
        	this.ds_Result.deleteRow(tgRow);
        };

        /****************************************/
        /* 모집단 리스트 첨부파일 처리 부분 미 완료 */
        /****************************************/
        //파일 다운로드
        this.div_File_grd_TestStepAttach_oncelldblclick = function(obj,e)
        {
        	var strFmSeq = this.ds_FileList.getColumn(e.row, "FM_SEQ");
        	var strFileName = this.ds_FileList.getColumn(e.row, "FILE_NAME");
        	this.gfnFileDownload(strFmSeq, strFileName, strSourceType, strSourceCode);
        };

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
        			case "TestStepPopup" :
        				break;
        			case "FileUploadPopup" :
        				if(!this.gfnIsEmpty(popupArg)) this.fn_QueryData();
        				break;
        		}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.AA_AuditResultPopup_onload,this);
            this.btn_Close.addEventHandler("onclick",this.comm_Click,this);
            this.stc_BottomFrame.addEventHandler("onclick",this.stc_BottomFrame_onclick,this);
            this.btn_Cancel.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Save.addEventHandler("onclick",this.btn_Save_onclick,this);
            this.div_TestStep.form.grd_TestStep.addEventHandler("oncelldblclick",this.div_TestStep_grd_TestStep_oncelldblclick,this);
            this.btn_ExcelExport.addEventHandler("onclick",this.div_Search_btn_ExcelExport_onclick,this);
            this.btn_Search01.addEventHandler("onclick",this.fn_QueryData,this);
            this.div_Result.form.btn_AllChk.addEventHandler("onclick",this.div_Result_btn_AllChk_onclick,this);
            this.div_Result.form.grd_Result.addEventHandler("oncellclick",this.div_Result_grd_Result_oncellclick,this);
            this.div_Result.form.btn_ResultDelRow.addEventHandler("onclick",this.div_Result_btn_ResultDelRow_onclick,this);
            this.div_Improvement.form.btn_DelRow.addEventHandler("onclick",this.div_Improvement_btn_DelRow_onclick,this);
            this.div_Improvement.form.btn_AddRow.addEventHandler("onclick",this.div_Improvement_btn_AddRow_onclick,this);
            this.btn_WorkFinish.addEventHandler("onclick",this.btn_WorkFinish_onclick,this);
            this.ds_AM_List.addEventHandler("onvaluechanged",this.ds_AM_List_onvaluechanged,this);
            this.ds_Result.addEventHandler("oncolumnchanged",this.ds_Result_oncolumnchanged,this);
            this.ds_Result.addEventHandler("onvaluechanged",this.ds_Result_onvaluechanged,this);
            this.ds_Improvement.addEventHandler("onvaluechanged",this.ds_Improvement_onvaluechanged,this);
            this.ds_FileList.addEventHandler("onvaluechanged",this.ds_FileList_onvaluechanged,this);
        };
        this.loadIncludeScript("AA_AuditResultPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
