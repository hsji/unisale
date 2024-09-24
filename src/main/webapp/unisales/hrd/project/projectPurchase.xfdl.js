(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("projectPurchase");
            this.set_titletext("MainFrame");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1180,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCodeStatus", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"name\">회사</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"name\">부분</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"name\">본부</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"name\">그룹</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"name\">팀</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsParam1", this);
            obj._setContents("<ColumnInfo><Column id=\"CLIENT_CODE\" type=\"string\" size=\"256\"/><Column id=\"CONTRACT_MAIN\" type=\"string\" size=\"256\"/><Column id=\"DATE_KIND\" type=\"string\" size=\"256\"/><Column id=\"ST_YYYYMM\" type=\"string\" size=\"256\"/><Column id=\"ED_YYYYMM\" type=\"string\" size=\"256\"/><Column id=\"DATE_FLAG\" type=\"string\" size=\"256\"/><Column id=\"CONTRACT_TYPE\" type=\"string\" size=\"256\"/><Column id=\"CONTRACT_DOC_FLAG\" type=\"string\" size=\"256\"/><Column id=\"PAY_NOT_COMPLETE_ONLY\" type=\"string\" size=\"256\"/><Column id=\"BILL_COMPLETE_ONLY\" type=\"string\" size=\"256\"/><Column id=\"CONTRACT_NOT_COMPLETE_ONLY\" type=\"string\" size=\"256\"/><Column id=\"CONTRACT_NOT_RELATED_ONLY\" type=\"string\" size=\"256\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DATE_KIND\">C</Col><Col id=\"DATE_FLAG\">0</Col><Col id=\"CONTRACT_DOC_FLAG\">A</Col><Col id=\"PAY_NOT_COMPLETE_ONLY\">0</Col><Col id=\"CONTRACT_NOT_RELATED_ONLY\">0</Col><Col id=\"BILL_COMPLETE_ONLY\">0</Col><Col id=\"CONTRACT_NOT_COMPLETE_ONLY\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput1", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"string\" size=\"20\"/><Column id=\"CAPTION\" type=\"string\" size=\"255\"/><Column id=\"VAL1\" type=\"string\" size=\"100\"/><Column id=\"VAL2\" type=\"string\" size=\"100\"/><Column id=\"VAL3\" type=\"string\" size=\"100\"/><Column id=\"VAL4\" type=\"string\" size=\"100\"/><Column id=\"REMARK\" type=\"string\" size=\"1073741823\"/><Column id=\"ORD\" type=\"string\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGlobal", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"string\" size=\"60\"/><Column id=\"EMP_NM\" type=\"string\" size=\"100\"/><Column id=\"DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"DEPT_NM\" type=\"string\" size=\"100\"/><Column id=\"EMAIL\" type=\"string\" size=\"268\"/><Column id=\"MOBILE\" type=\"string\" size=\"44\"/><Column id=\"OFFICE\" type=\"string\" size=\"20\"/><Column id=\"GRADE_CD\" type=\"string\" size=\"30\"/><Column id=\"GRADE_NM\" type=\"string\" size=\"100\"/><Column id=\"DUTY_CD\" type=\"string\" size=\"30\"/><Column id=\"DUTY_NM\" type=\"string\" size=\"100\"/><Column id=\"EMP_KIND\" type=\"string\" size=\"255\"/><Column id=\"CO_CD\" type=\"string\" size=\"30\"/><Column id=\"CO_NM\" type=\"string\" size=\"100\"/><Column id=\"LOGIN_SYS\" type=\"string\" size=\"10\"/><Column id=\"LANGUAGE\" type=\"string\" size=\"10\"/><Column id=\"MODEL_ID\" type=\"string\" size=\"50\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsParamCode", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_IN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_OUT\" type=\"STRING\" size=\"256\"/><Column id=\"CM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ALL\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK\" type=\"STRING\" size=\"256\"/><Column id=\"NEXT\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DS_IN\">ds_CD_CONTRACT_TYPE</Col><Col id=\"DS_OUT\">dsOutput</Col><Col id=\"CM_CODE\">CONTRACT_TYPE</Col><Col id=\"ALL\">true</Col><Col id=\"CHECK\">false</Col><Col id=\"LANGUAGE\">KOR</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsContactCode", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">A</Col><Col id=\"name\">전체</Col></Row><Row><Col id=\"code\">Y</Col><Col id=\"name\">계약완료</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"name\">계약예정</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CODE\" type=\"string\" size=\"15\"/><Column id=\"PROJECT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CONTRACT_NO_PURCHASE\" type=\"string\" size=\"10\"/><Column id=\"CONTRACT_NO\" type=\"string\" size=\"10\"/><Column id=\"CLIENT_CODE\" type=\"string\" size=\"20\"/><Column id=\"CLIENT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CONTRACT_NAME\" type=\"string\" size=\"100\"/><Column id=\"SALES_EMP_NAME\" type=\"string\" size=\"255\"/><Column id=\"CONTRACT_TYPE\" type=\"string\" size=\"20\"/><Column id=\"CONTRACT_TYPE_NAME\" type=\"string\" size=\"100\"/><Column id=\"PRODUCT_NAME\" type=\"string\" size=\"255\"/><Column id=\"QTY_UNIT_RATE\" type=\"string\" size=\"133\"/><Column id=\"CONTRACT_DATE\" type=\"string\" size=\"8\"/><Column id=\"PAY_TERM\" type=\"string\" size=\"20\"/><Column id=\"PAY_TERM_NAME\" type=\"string\" size=\"100\"/><Column id=\"INSERT_EMP_NAME\" type=\"string\" size=\"255\"/><Column id=\"CONTRACT_DOC_NO\" type=\"string\" size=\"50\"/><Column id=\"CONTRACT_DOC_TYPE\" type=\"string\" size=\"20\"/><Column id=\"CONTRACT_MAIN\" type=\"string\" size=\"20\"/><Column id=\"CONTRACT_MAIN_NAME\" type=\"string\" size=\"100\"/><Column id=\"CONTRACT_PRICE\" type=\"bigdecimal\" size=\"20\"/><Column id=\"UNIT_COST\" type=\"bigdecimal\" size=\"20\"/><Column id=\"REMARKS\" type=\"string\" size=\"1073741823\"/><Column id=\"BILL_DATE_LIST\" type=\"string\" size=\"1\"/><Column id=\"BILL_STATES\" type=\"string\" size=\"8\"/><Column id=\"PAY_FLAG_NAME\" type=\"string\" size=\"8\"/><Column id=\"PAY_CNT\" type=\"int\" size=\"11\"/><Column id=\"PAY_FLAG\" type=\"bigdecimal\" size=\"40\"/><Column id=\"BILL_CNT\" type=\"int\" size=\"11\"/><Column id=\"OVERWRITE_SALES_DELIVERY_DATE\" type=\"int\" size=\"11\"/><Column id=\"CONTRACT_NO_PURCHASE_SEQ\" type=\"string\" size=\"255\"/><Column id=\"LEVEL_NAME\" type=\"string\" size=\"255\"/><Column id=\"CSD_UNIT_COST\" type=\"bigdecimal\" size=\"100\"/><Column id=\"CO_CD\" type=\"string\" size=\"255\"/><Column id=\"ROYALTY_TYPE\" type=\"string\" size=\"1\"/><Column id=\"EXPENSE\" type=\"bigdecimal\" size=\"20\"/><Column id=\"FILE_CNT\" type=\"int\" size=\"11\"/><Column id=\"PLSD_START_DATE\" type=\"string\" size=\"8\"/><Column id=\"PLSD_END_DATE\" type=\"string\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCondPerson", this);
            obj._setContents("<ColumnInfo><Column id=\"CONTRACT_NO_PURCHASE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTRACT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CONTRACT_MAIN\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAppendData", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList3", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList4", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDocInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"USED_FLAG\" type=\"string\" size=\"32\"/><Column id=\"SEND_DTTM\" type=\"undefined\" size=\"0\"/><Column id=\"EXPIREMAIL_DATE\" type=\"undefined\" size=\"0\"/><Column id=\"SEND_NAME\" type=\"string\" size=\"32\"/><Column id=\"BIZ_CODE\" type=\"string\" size=\"32\"/><Column id=\"DOC_TITLE\" type=\"string\" size=\"32\"/><Column id=\"DRAWSIGN_FLAG\" type=\"string\" size=\"32\"/><Column id=\"SEND_SEQ\" type=\"int\" size=\"4\"/><Column id=\"EXPIRE_DATE\" type=\"string\" size=\"32\"/><Column id=\"EDIT_INFO\" type=\"string\" size=\"32\"/><Column id=\"DOC_ID\" type=\"string\" size=\"32\"/><Column id=\"PDF_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"SEND_MESSAGE\" type=\"undefined\" size=\"0\"/><Column id=\"SEND_TITLE\" type=\"undefined\" size=\"0\"/><Column id=\"DRAWIMAGE_FLAG\" type=\"string\" size=\"32\"/><Column id=\"REFIMAGE_FLAG\" type=\"string\" size=\"32\"/><Column id=\"CHGE_ID\" type=\"string\" size=\"32\"/><Column id=\"SYS_CODE\" type=\"string\" size=\"32\"/><Column id=\"PDF_ORIG_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"PDF_FILE_PATH_NM\" type=\"string\" size=\"32\"/><Column id=\"SEND_ID\" type=\"string\" size=\"32\"/><Column id=\"SEND_PHONE\" type=\"string\" size=\"32\"/><Column id=\"INPT_ID\" type=\"string\" size=\"32\"/><Column id=\"SEND_MAILADDR\" type=\"string\" size=\"32\"/><Column id=\"CERT_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHistory", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReceiveInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList5", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle01","0","84","342","43",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("진계약");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"85","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCustomer00","374","12","211","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCd","0","12","78","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("고객사");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCdNm","293","12","78","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("계약처");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10","48","28","25",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCustomer","78","12","211","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearchCust","264","13","23","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_background("url(\'theme://images/btn_WF_Search.png\') no-repeat center bottom");
            obj.set_border("0px none");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearchCust00","560","13","23","20",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_background("url(\'theme://images/btn_WF_Search.png\') no-repeat center bottom");
            obj.set_border("0px none");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCd00","0","42","78","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("기간");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCdNm00","590","12","86","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("계약구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboGubun","680","12","139","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_innerdataset("dsOutput1");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_text("제목");
            obj.set_value("01");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chk00","829","12","101","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("지급완료제외");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chk00_00","939","12","108","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("매출미연결");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCdNm00_00","293","42","86","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("계약여부");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboGubun00","374","43","105","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_innerdataset("dsContactCode");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_text("제목");
            obj.set_value("01");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new CheckBox("chk00_01","485","43","101","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_text("수금완료");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCdNm00_01","590","42","86","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("15");
            obj.set_text("개발자명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCustomer00_00","680","42","139","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("16");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divCalFrom","78","45","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("17");
            obj.set_text("div00");
            obj.set_url("common::cmmCalM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divCalTo","196","45","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("18");
            obj.set_text("div00");
            obj.set_url("common::cmmCalM.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","177","47","15","19",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("19");
            obj.set_text("~");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnDelCustomer","245","13","16","18",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("20");
            obj.set_background("url(\'theme://images/btn_WF_DelN.png\') no-repeat center bottom");
            obj.set_border("0px none");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnDelCustomer00","543","13","16","18",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("21");
            obj.set_background("url(\'theme://images/btn_WF_DelN.png\') no-repeat center bottom");
            obj.set_border("0px none");
            this.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdList","0","staTitle01:0",null,null,"20","10",null,null,"250",null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.getSetter("uFunction").set("filter,sort,!colfix,!initial,find");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"200\"/><Column size=\"289\"/><Column size=\"168\"/><Column size=\"110\"/><Column size=\"88\"/><Column size=\"128\"/><Column size=\"129\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"102\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"161\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"고객사\"/><Cell col=\"2\" text=\"매입계약명\"/><Cell col=\"3\" text=\"계약처\"/><Cell col=\"4\" text=\"계약구분\"/><Cell col=\"5\" text=\"영업담당\"/><Cell col=\"6\" text=\"제품/투입인력\"/><Cell col=\"7\" text=\"수량/MM/요율\"/><Cell col=\"8\" text=\"계약일\"/><Cell col=\"9\" text=\"투입일\"/><Cell col=\"10\" text=\"종료일\"/><Cell col=\"11\" text=\"지급구분\"/><Cell col=\"12\" text=\"계약금액\"/><Cell col=\"13\" text=\"경비\"/><Cell col=\"14\" text=\"매입단가\"/><Cell col=\"15\" text=\"수금일목록\"/><Cell col=\"16\" text=\"수금상태\"/><Cell col=\"17\" text=\"등록자\"/><Cell col=\"18\" text=\"지급상태\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:CLIENT_NAME\" editmaxlength=\"50\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:CONTRACT_NAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:CONTRACT_MAIN_NAME\" editimemode=\"hangul\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:CONTRACT_TYPE_NAME\" editimemode=\"alpha\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:SALES_EMP_NAME\"/><Cell col=\"6\" text=\"bind:PRODUCT_NAME\"/><Cell col=\"7\" text=\"bind:QTY_UNIT_RATE\"/><Cell col=\"8\" text=\"bind:CONTRACT_DATE\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"@@@@-@@-@@\"/><Cell col=\"9\" text=\"bind:PLSD_START_DATE\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"@@@@-@@-@@\"/><Cell col=\"10\" text=\"bind:PLSD_END_DATE\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"@@@@-@@-@@\"/><Cell col=\"11\" text=\"bind:PAY_TERM_NAME\"/><Cell col=\"12\" text=\"bind:CONTRACT_PRICE\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"13\" text=\"bind:EXPENSE\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"14\" text=\"bind:CONTRACT_PRICE\" displaytype=\"number\" textAlign=\"right\"/><Cell col=\"15\" text=\"bind:BILL_DATE_LIST\" textAlign=\"left\"/><Cell col=\"16\" text=\"bind:BILL_STATES\"/><Cell col=\"17\" text=\"bind:INSERT_EMP_NAME\"/><Cell col=\"18\" text=\"bind:PAY_FLAG_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnSendMail",null,"93","113","29","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("메일발송");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form.divCalFrom
            obj = new Layout("default","",0,0,this.divSearch.form.divCalFrom.form,function(p){});
            this.divSearch.form.divCalFrom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearch.form.divCalTo
            obj = new Layout("default","",0,0,this.divSearch.form.divCalTo.form,function(p){});
            this.divSearch.form.divCalTo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1180,736,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item10","divSearch.form.chk00","value","dsParam1","PAY_NOT_COMPLETE_ONLY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.chk00_00","value","dsParam1","CONTRACT_NOT_RELATED_ONLY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.chk00_01","value","dsParam1","BILL_COMPLETE_ONLY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboGubun00","value","dsParam1","CONTRACT_DOC_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboGubun","value","dsParam1","CONTRACT_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.edtCustomer00_00","value","dsParam1","EMP_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::cmmCalM.xfdl");
        };
        
        // User Script
        this.registerScript("projectPurchase.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	projectPurchase.xfdl
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
        this.fvTranCnt = 0;
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj);

        	var mon = this.gfnGetDate("day").substr(0,6);
        	this.divSearch.form.divCalFrom.form.setDate(mon);
        	this.divSearch.form.divCalTo.form.setDate(mon);

        	this.fnGetCode();	// onsize에서 처리됨.
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
        this.fnGetCode = function()
        {
        	// POST http://172.10.10.20:7070/Service/getCode.jsp

        	var strSvcId 	= "code";
        	var strSvcUrl 	= "nextServiceCode.do";
        	var inData 		= "dsParam=dsParamCode:A";
        	var outData 	= "dsOutput1=dsOutput";
        	var strArg 		= "jobCode=" + nexacro.wrapQuote("next");
        	strArg 			+= " trxUrl=" + nexacro.wrapQuote("Service/getCode.jsp");
        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, "fnCallback");
        };

        this.fnInValidation = function ()
        {
        	var from = this.divSearch.form.divCalFrom.form.getDate();
        	var to = this.divSearch.form.divCalTo.form.getDate();

        	if(this.gfnIsNull(from)) {
        		this.gfnAlert("msg.err.validator.required",["조회시작일"],"");
        		return false;
        	}
        	if(this.gfnIsNull(to)) {
        		this.gfnAlert("msg.err.validator.required",["조회종료일"],"");
        		return false;
        	}
        	from = from.substr(0,6);
        	to = to.substr(0,6);
        	if(from.length != 6) {
        		this.gfnAlert("msg.err.validator.required",["조회시작일"],"");
        		return false;
        	}
        	if(to.length != 6) {
        		this.gfnAlert("msg.err.validator.required",["조회종료일"],"");
        		return false;
        	}

        	this.dsParam1.setColumn(0, "CLIENT_CODE", this.divSearch.form.edtCustomer._customercode);
        	this.dsParam1.setColumn(0, "CONTRACT_MAIN", this.divSearch.form.edtCustomer00._customercode);


        	this.dsParam1.setColumn(0, "ST_YYYYMM", from);
        	this.dsParam1.setColumn(0, "ED_YYYYMM", to);
        	return true;
        };

        this.fnGetData = function()
        {
        // 	var from = this.divSearch.form.divCalFrom.form.getDate();
        // 	var to = this.divSearch.form.divCalTo.form.getDate();
        	if(this.fnInValidation() == false) return;

        	this.gfnInitNextGlobalDataset(this.dsGlobal);

        	// POST http://172.10.10.20:7070/FrontControllerServlet.do?service=xupservice&domain=NEXTp&model=SP_PurchaseList_S01&format=xml&version=xplatform&compress=false HTTP/1.1

        	var strSvcId 	= "getData";
        	var strSvcUrl 	= "nextService.do";
        	var inData 		= "dsGlobal=dsGlobal:A dsParam=dsParam1:A";
        	var outData 	= "dsList=dsOutput";
        	var strArg 		= "jobCode=" + nexacro.wrapQuote("next");
        	strArg 			+= " trxUrl=" + nexacro.wrapQuote("FrontControllerServlet.do?service=xupservice&domain=NEXTp&model=SP_PurchaseList_S01&format=xml&version=xplatform&compress=false");
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
        		case "code":
        			this.divSearch.form.cboGubun.set_index(0);
        			break;
        		case "getData":
        			this.dsList.addColumn("CHK","string");
        			this.dsList.filter("CONTRACT_MAIN=='A104'");
        			break;
        		default:
        			break;
        	}
        };

        //popup callback
        this.fnPopupCallback = function (sPopupId, sRtn)
        {
        	if (this.gfnIsNull(sRtn)) {
        		return;
        	}
        	if(sPopupId == "customer") {
        		var rtn = sRtn.split("|");
        		if(rtn[2] == "1") {
        			this.divSearch.form.edtCustomer.set_value(rtn[1]);
        			this.divSearch.form.edtCustomer._customercode = rtn[0];
        		} else {
        			this.divSearch.form.edtCustomer00.set_value(rtn[1]);
        			this.divSearch.form.edtCustomer00._customercode = rtn[0];
        		}
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

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

        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.fnGetData();
        };

        this.fnFindCustomer = function(type)
        {
        	var sTitle = "고객사검색";
        	var value = this.divSearch.form.edtCustomer.value;
        	if(type == "2") {
        		sTitle = "협력사검색";
        		value = this.divSearch.form.edtCustomer00.value;
        	}
        	var oArg   = {pvCustomer :value
        				,pvType : type	};
        	var oOption = {title:sTitle
        				,titlebar:true};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("customer", "hrd::project/customerPu.xfdl", oArg, sPopupCallBack, oOption);
        };

        this.divSearch_edtCustomer_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13) {
        		this.fnFindCustomer("1");
        	}
        };

        this.divSearch_btnSearchCust_onclick = function(obj,e)
        {
        	this.fnFindCustomer("1");
        };

        this.divSearch_edtCustomer_onchanged = function(obj,e)
        {
        	obj._customercode = null;
        };

        this.divSearch_edtCustomer00_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13) {
        		this.fnFindCustomer("2");
        	}
        };

        this.divSearch_btnSearchCust00_onclick = function(obj,e)
        {
        	this.fnFindCustomer("2");
        };

        this.divSearch_edtCustomer00_onchanged = function(obj,e)
        {
        	obj._customercode = null;
        };

        this.divSearch_btnDelCustomer_onclick = function(obj,e)
        {
        	this.divSearch.form.edtCustomer.set_value("");
        	this.divSearch.form.edtCustomer._customercode = null;
        };

        this.divSearch_btnDelCustomer00_onclick = function(obj,e)
        {
        	this.divSearch.form.edtCustomer00.set_value("");
        	this.divSearch.form.edtCustomer00._customercode = null;
        };

        this.btnSendMail_onclick = function(obj,e)
        {
        	var nCnt = this.dsList.getCaseCount("CHK=='1'");
        	if(nCnt != 1) {	// 하나만 선택하라..
        		this.gfnAlert("msg.check.one", [], "");
        		return;
        	}
        	var nRow = this.dsList.findRow("CHK", "1");
        	if(nRow >= 0) {
        		this.dsList.set_rowposition(nRow);
        		this.fnGetPersonData1(nRow);
        	}
        };

        this.sendMail = function()
        {

        };


        /**
        * @function fnOpenSendMailPop  <br>
        * description 메일발송팝업실행
        */
        this.fnOpenSendMailPop = function(sType)
        {
        	var sTitle  = "메일발송";
        	var oArg    = { pvUUID:		this.dsDocInfo.getColumn(0, "DOC_ID"),
        					pvSysCode:	this.dsDocInfo.getColumn(0, "SYS_CODE"),
        					pvBizCode:	this.dsDocInfo.getColumn(0, "BIZ_CODE"),
        					pvType:		sType
        				  };
        	var oOption = {title:sTitle , titlebar:true};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("docFormMail", "hrd::project/projectDocMailPu.xfdl", oArg, sPopupCallBack, oOption);
        };

        this.fnCallback3 = function (sSvcId, nErrCd, sErrMsg, oJson)
        {
        	switch(sSvcId) {
        		case "searchDocMailHistory":
        			if(this.dsHistory.rowcount > 0) {
        				this.dsHistory.set_rowposition(this.dsHistory.rowcount-1);
        				this.fnOpenSendMailPop("Y");
        			} else {
        				this.fnOpenSendMailPop("N");
        			}
        			break;
        		default:
        			break;
        	}
        };


        /**
        * @function fnDocSearch  <br>
        * description 그룹별 문서 조회
        */
        this.fnDocSearch = function (v)
        {
        	var arrId = ["uuid_1711009222660","uuid_1711077746606","uuid_1711078266351","uuid_1711078499242"
        			,"uuid_1711078745976","uuid_1711079030082"];
        	this.dsCond.setColumn(0, "DOC_ID", arrId[this.dsList3.rowcount-1]);

        	var strSvcId    = "searchDocMailHistory";
        	var strSvcUrl   = "searchDocMailHistory.do";
        	var inData      = "dsCond=dsCond";
        	var outData     = "dsDocInfo=dsDocList dsHistory=dsHistory dsReceiveInfo=dsReceiveInfo";
        	var strArg      = "";
        	var callBackFnc = "fnCallback3";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };


        this.fnCallback2 = function (sSvcId, nErrCd, sErrMsg, oJson)
        {
        	switch(sSvcId) {
        		case "getPersonData1":
        		case "getPersonData2":
        		case "getPersonData3":
        		case "getPersonData4":
        		case "getPersonData5":
        			this.fvTranCnt++;
        			if(this.fvTranCnt >= 5) {
        				this.fvTranCnt = 0;

        				if(this.dsList1.getColumn(0, "LUMP_PAY_FLAG") == "1") {
        					this.dsList3.filter("");
        				} else {
        					this.dsList3.filter("PSD_SEQ == '" + this.dsList2.getColumn(0, "PSD_SEQ") + "'");
        				}
        				this.fnDocSearch();
        				return;
        			}
        			if(sSvcId == "getPersonData2") {
        				this.fnGetPersonData2();
        			}
        			break;
        		default:
        			break;
        	}
        };

        this.fnGetPersonData1 = function(row)
        {
        	this.fvTranCnt = 0;

        	this.gfnInitNextGlobalDataset(this.dsGlobal);

        	// service 1 - EMAIL
        	this.dsCondPerson.setColumn(0, "CONTRACT_NO_PURCHASE",
        				this.dsList.getColumn(row, "CONTRACT_NO_PURCHASE"));
        	var strSvcId 	= "getPersonData1";
        	var strSvcUrl 	= "nextService.do";
        	var inData 		= "dsGlobal=dsGlobal:A dsParam=dsCondPerson:A";
        	var outData 	= "dsList1=dsOutput";
        	var strArg 		= "jobCode=" + nexacro.wrapQuote("next");
        	strArg 			+= " trxUrl=" + nexacro.wrapQuote("FrontControllerServlet.do?service=xupservice&domain=NEXTp&model=SP_PurchaseSi_S01&format=xml&version=xplatform&compress=false");
        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, "fnCallback2");

        	// service 2 - REGNO
        	strSvcId 	= "getPersonData2";
        	strSvcUrl 	= "nextService.do";
        	inData 		= "dsGlobal=dsGlobal:A dsParam=dsCondPerson:A";
        	outData 	= "dsList2=dsOutput";
        	strArg 		= "jobCode=" + nexacro.wrapQuote("next");
        	strArg 			+= " trxUrl=" + nexacro.wrapQuote("FrontControllerServlet.do?service=xupservice&domain=NEXTp&model=SP_PurchaseSiDet_S01&format=xml&version=xplatform&compress=false");
        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, "fnCallback2");

        	// service 3 - 경비
        	strSvcId 	= "getPersonData3";
        	strSvcUrl 	= "nextService.do";
        	inData 		= "dsGlobal=dsGlobal:A dsParam=dsCondPerson:A";
        	outData 	= "dsList3=dsOutput";
        	strArg 		= "jobCode=" + nexacro.wrapQuote("next");
        	strArg 			+= " trxUrl=" + nexacro.wrapQuote("FrontControllerServlet.do?service=xupservice&domain=NEXTp&model=SP_PurchasePay_S01&format=xml&version=xplatform&compress=false");
        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, "fnCallback2");

        	// service 4 - 총액
        	this.dsCondPerson.setColumn(0, "CONTRACT_NO",
        				this.dsList.getColumn(row, "CONTRACT_NO"));
        	this.dsCondPerson.setColumn(0, "CONTRACT_MAIN",
        				this.dsList.getColumn(row, "CONTRACT_MAIN"));
        	strSvcId 	= "getPersonData4";
        	strSvcUrl 	= "nextService.do";
        	inData 		= "dsGlobal=dsGlobal:A dsParam=dsCondPerson:A";
        	outData 	= "dsList4=dsOutput";
        	strArg 		= "jobCode=" + nexacro.wrapQuote("next");
        	strArg 			+= " trxUrl=" + nexacro.wrapQuote("FrontControllerServlet.do?service=xupservice&domain=NEXTp&model=SP_PurchaseSi_S02&format=xml&version=xplatform&compress=false");
        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, "fnCallback2");

        };

        this.fnGetPersonData2 = function()
        {
        	this.dsCondPerson.setColumn(0, "EMP_NO", this.dsList2.getColumn(0, "EMP_NO"));

        	var strSvcId 	= "getPersonData5";
        	var strSvcUrl 	= "nextService.do";
        	var inData 		= "dsGlobal=dsGlobal:A dsParam=dsCondPerson:A";
        	var outData 	= "dsList5=dsOutput";
        	var strArg 		= "jobCode=" + nexacro.wrapQuote("next");
        	strArg 			+= " trxUrl=" + nexacro.wrapQuote("FrontControllerServlet.do?service=xupservice&domain=NEXTp&model=SP_PurchaseRegSiReport_S02&format=xml&version=xplatform&compress=false");
        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, "fnCallback2");

        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.edtCustomer00.addEventHandler("onkeyup",this.divSearch_edtCustomer00_onkeyup,this);
            this.divSearch.form.edtCustomer00.addEventHandler("onchanged",this.divSearch_edtCustomer00_onchanged,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.divSearch.form.edtCustomer.addEventHandler("onkeyup",this.divSearch_edtCustomer_onkeyup,this);
            this.divSearch.form.edtCustomer.addEventHandler("onchanged",this.divSearch_edtCustomer_onchanged,this);
            this.divSearch.form.btnSearchCust.addEventHandler("onclick",this.divSearch_btnSearchCust_onclick,this);
            this.divSearch.form.btnSearchCust00.addEventHandler("onclick",this.divSearch_btnSearchCust00_onclick,this);
            this.divSearch.form.btnDelCustomer.addEventHandler("onclick",this.divSearch_btnDelCustomer_onclick,this);
            this.divSearch.form.btnDelCustomer00.addEventHandler("onclick",this.divSearch_btnDelCustomer00_onclick,this);
            this.btnSendMail.addEventHandler("onclick",this.btnSendMail_onclick,this);
        };
        this.loadIncludeScript("projectPurchase.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
