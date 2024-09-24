(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("docMail");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDocInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"SYS_CODE\" type=\"string\" size=\"32\"/><Column id=\"BIZ_CODE\" type=\"string\" size=\"32\"/><Column id=\"DOC_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_TITLE\" type=\"string\" size=\"32\"/><Column id=\"USER_ID\" type=\"string\" size=\"32\"/><Column id=\"EDIT_INFO\" type=\"string\" size=\"32\"/><Column id=\"INPT_DTTM\" type=\"datetime\" size=\"17\"/><Column id=\"EXPIRE_DATE\" type=\"string\" size=\"32\"/><Column id=\"PDF_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"PDF_ORIG_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"PDF_FILE_PATH_NM\" type=\"string\" size=\"32\"/><Column id=\"SEND_SEQ\" type=\"int\" size=\"4\"/><Column id=\"SEND_ID\" type=\"string\" size=\"32\"/><Column id=\"SEND_NAME\" type=\"string\" size=\"32\"/><Column id=\"SEND_MESSAGE\" type=\"string\" size=\"32\"/><Column id=\"SEND_PHONE\" type=\"string\" size=\"32\"/><Column id=\"SEND_TITLE\" type=\"string\" size=\"32\"/><Column id=\"SEND_MAILADDR\" type=\"string\" size=\"32\"/><Column id=\"DRAWSIGN_FLAG\" type=\"string\" size=\"32\"/><Column id=\"DRAWIMAGE_FLAG\" type=\"string\" size=\"32\"/><Column id=\"REFIMAGE_FLAG\" type=\"string\" size=\"32\"/><Column id=\"EXPIREMAIL_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"CERT_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"docTitle\">테스트</Col><Col id=\"sysCode\">DXTOBE</Col><Col id=\"bizCode\">HRD</Col><Col id=\"useDrawSign\">1</Col><Col id=\"useImageSign\">1</Col><Col id=\"useRegSign\">1</Col><Col id=\"userId\">jihs</Col><Col id=\"mailMessage\">테스트문서</Col><Col id=\"expiredDate\">2099-12-31</Col><Col id=\"senderName\">지해식</Col><Col id=\"senderMailAddr\">jihs@dxtobe.com</Col><Col id=\"senderPhone\">01096675759</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFormerInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"FORMER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FORMER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FORMER_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"FORMER_NAME\">작성자</Col><Col id=\"FORMER_ID\">former</Col><Col id=\"FORMER_YN\">Y</Col></Row><Row><Col id=\"FORMER_NAME\">수신자</Col><Col id=\"FORMER_ID\">receiver</Col><Col id=\"FORMER_YN\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFieldInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"FIELD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FIELD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FIELD_MASK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"FIELD_NAME\">기본급</Col><Col id=\"FIELD_ID\">field_base</Col></Row><Row><Col id=\"FIELD_NAME\">고정연장수당</Col><Col id=\"FIELD_ID\">field_overtime</Col></Row><Row><Col id=\"FIELD_NAME\">직책수당</Col><Col id=\"FIELD_ID\">field_work</Col></Row><Row><Col id=\"FIELD_NAME\">출산보육수당</Col><Col id=\"FIELD_ID\">field_baby</Col></Row><Row><Col id=\"FIELD_NAME\">연구개발비</Col><Col id=\"FIELD_ID\">field_rnd</Col></Row><Row><Col id=\"FIELD_NAME\">월합계</Col><Col id=\"FIELD_ID\">field_month</Col></Row><Row><Col id=\"FIELD_NAME\">총연봉</Col><Col id=\"FIELD_ID\">field_year</Col></Row><Row><Col id=\"FIELD_NAME\">주민등록번호</Col><Col id=\"FIELD_ID\">field_resno</Col></Row><Row><Col id=\"FIELD_NAME\">성명</Col><Col id=\"FIELD_ID\">field_name</Col></Row><Row><Col id=\"FIELD_NAME\">서명</Col><Col id=\"FIELD_ID\">field_sign</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReceiver", this);
            obj._setContents("<ColumnInfo><Column id=\"receiveType\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_MAILADDR\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PHONE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"receiveType\">receiver1</Col><Col id=\"name\">홍길동</Col><Col id=\"mailAddr\">jihs@dxtobe.com</Col><Col id=\"phone\">01096675759</Col><Col id=\"userId\">emp001</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SYS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_SEQ\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReceiverField", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReceiverSaveField", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"FIELD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FVALUE\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_DTTM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReceiverCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"receiveType\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_MAILADDR\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PHONE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"receiveType\">receiver1</Col><Col id=\"name\">홍길동</Col><Col id=\"mailAddr\">jihs@dxtobe.com</Col><Col id=\"phone\">01096675759</Col><Col id=\"userId\">emp001</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMailCert", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"name\">메일</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"name\">핸드폰번호</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTop","0","0",null,"70","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_TFDM_BottomStep");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staTitleSubStep1","40.06%","38","227","23",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("1");
            obj.set_text("메일 발송");
            obj.set_cssclass("sta_TFDM_StepTitle");
            obj.set_font("bold 20px/normal \"Noto Sans\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("staTitleStep1","560.00","12","227","17",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("1");
            obj.set_text("STEP 1");
            obj.set_cssclass("sta_TFDM_Step");
            obj.set_font("bold 14px/normal \"Noto Sans\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"");
            obj.set_textAlign("center");
            this.divTop.addChild(obj.name, obj);

            obj = new Static("staTitle1","10.86%","80","1058","36",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("메일 제목");
            obj.set_cssclass("sta_WF_doctitle");
            obj.set_font("bold 16px/normal \"Noto Sans\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSendTitle","10.86%","114",null,"32","52.14%",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("edt_TFDM_essential");
            obj.set_displaynulltext("메일제목을 입력하세요");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle2","10.86%","384",null,"25","249",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("수신자선택");
            obj.set_cssclass("sta_WF_doctitle");
            obj.set_font("bold 16px/normal \"Noto Sans\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"");
            this.addChild(obj.name, obj);

            obj = new Div("divReceiver","10.86%","416",null,"257","13.64%",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("#FFF6F4");
            obj.set_url("ubiComm::ubiCmmReceiverSearch.xfdl");
            obj.set_borderRadius("10px");
            obj.set_boxShadow("1px 1px 2px 0px #cccccc");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle2_00","10.86%","301",null,"23","872",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("사인 옵션");
            obj.set_cssclass("sta_WF_doctitle");
            obj.set_font("bold 16px/normal \"Noto Sans\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","556","divReceiver:20","62","2",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Div("divTop00","0","0",null,"70","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("div_TFDM_BottomStep");
            obj.set_visible("true");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("staTitleSubStep1","40.06%","38","227","23",null,null,null,null,null,null,this.divTop00.form);
            obj.set_taborder("1");
            obj.set_text("데이터 편집");
            obj.set_cssclass("sta_TFDM_StepTitle");
            obj.set_font("bold 20px/normal \"Noto Sans\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divTop00.addChild(obj.name, obj);

            obj = new Static("staTitleStep1","560.00","12","227","17",null,null,null,null,null,null,this.divTop00.form);
            obj.set_taborder("1");
            obj.set_text("STEP 2");
            obj.set_cssclass("sta_TFDM_Step");
            obj.set_font("bold 14px/normal \"Noto Sans\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"");
            obj.set_textAlign("center");
            this.divTop00.addChild(obj.name, obj);

            obj = new Div("divBottom","0","730",null,"66","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("div_TFDM_BottomStep");
            obj.set_visible("true");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","45.99%","11","110","30",null,null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("0");
            obj.set_text("메일발송");
            obj.set_cssclass("btn_TFDM_Save");
            obj.set_visible("true");
            this.divBottom.addChild(obj.name, obj);

            obj = new Static("staTitle1_00","10.79%","219","1058","36",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("발송자 정보");
            obj.set_cssclass("sta_WF_doctitle");
            obj.set_font("bold 16px/normal \"Noto Sans\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"");
            this.addChild(obj.name, obj);

            obj = new Div("divUser","10.86%","256","328","32",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_url("ubiComm::ubiCmmUserSearchSub.xfdl");
            obj.set_text("");
            obj.getSetter("uEssential").set("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","divUser:6.09%","245","77","44",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("E-Mail");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Edit("edtEmail","Static01:0.00","256","257","32",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_font("14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","edtEmail:8.17%","245","77","44",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("Phone");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Edit("edtPhone","Static01_00:0.00","256","257","32",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_font("14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkDrawSign","12.00%","42.75%","80","18",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("직접서명");
            obj.set_value("true");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkImageSign","262.00","42.75%","98","18",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("이미지서명");
            obj.set_value("true");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkRegImageSign","368.00","42.75%","125","18",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("등록이미지서명");
            obj.set_value("true");
            obj.set_truevalue("1");
            obj.set_falsevalue("0");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle1_01","10.79%","150","1058","36",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("메일 메세지");
            obj.set_cssclass("sta_WF_doctitle");
            obj.set_font("bold 16px/normal \"Noto Sans\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSendMsg","10.79%","184",null,"32","13.71%",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("edt_TFDM_essential");
            obj.set_displaynulltext("메일 메세지를 입력하세요");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle2_00_00","41.29%","301",null,"23","620",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("발송방법");
            obj.set_cssclass("sta_WF_doctitle");
            obj.set_font("bold 16px/normal \"Noto Sans\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grdData","10","116",null,"604","10",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_positionstep("1");
            obj.set_binddataset("dsReceiver");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/></Band><Band id=\"body\"><Cell text=\"bind:receiveType\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelDown",null,"78","119","28","10",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("엑셀다운로드");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelSave");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelImport",null,"78","119","28","btnExcelDown:10",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_text("엑셀임포트");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelSave");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new UbiDocuMaker("UbiDocuMaker00","997","97","0","0",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Div("DivProcess","566","325","307","71",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_positionstep("1");
            obj.set_background("#ffffff");
            obj.set_borderRadius("5px");
            obj.set_border("1px solid #dddddd");
            obj.set_boxShadow("3px 3px 3px 0px #cccccc");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new ProgressBar("ProgressBar00","28","35","255","24",null,null,null,null,null,null,this.DivProcess.form);
            obj.set_taborder("0");
            obj.set_min("0");
            obj.set_max("100");
            this.DivProcess.addChild(obj.name, obj);

            obj = new Static("Static00","28","10","255","20",null,null,null,null,null,null,this.DivProcess.form);
            obj.set_taborder("1");
            obj.set_text("메일을 발송중입니다.");
            obj.set_textAlign("center");
            this.DivProcess.addChild(obj.name, obj);

            obj = new Static("staTitle2_00_00_00","50.43%","80",null,"36","348",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("서명 만료 일자");
            obj.set_cssclass("sta_WF_doctitle");
            obj.set_font("bold 16px/normal \"Noto Sans\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00_00","50.86%","114","234","32",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_innerdataset("dsMailCert");
            this.addChild(obj.name, obj);

            obj = new Radio("radCheck","42.00%","334","212","34",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_innerdataset("dsMailCert");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_rowcount("1");
            obj.set_text("메일");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle2_00_00_01","65.29%","301",null,"23","297",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("인증방법");
            obj.set_cssclass("sta_WF_doctitle");
            obj.set_font("bold 16px/normal \"Noto Sans\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"");
            this.addChild(obj.name, obj);

            obj = new Radio("radCheck00","65.93%","334","212","34",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_innerdataset("dsMailCert");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_rowcount("1");
            obj.set_text("메일");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTop.form
            obj = new Layout("default","",0,0,this.divTop.form,function(p){});
            this.divTop.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divReceiver
            obj = new Layout("default","",0,0,this.divReceiver.form,function(p){});
            this.divReceiver.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTop00.form
            obj = new Layout("default","",0,0,this.divTop00.form,function(p){});
            this.divTop00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divUser
            obj = new Layout("default","",0,0,this.divUser.form,function(p){});
            this.divUser.form.addLayout(obj.name, obj);

            //-- Default Layout : this.DivProcess.form
            obj = new Layout("default","",0,0,this.DivProcess.form,function(p){});
            this.DivProcess.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1400,800,this,function(p){});
            obj.set_stepcount("2");
            obj.set_stepindex("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtSendTitle","value","dsDocInfo","SEND_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divUser.form.edtCode","value","dsDocInfo","SEND_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divUser.form.edtName","value","dsDocInfo","SEND_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","staTitle1_01","value","dsDocInfo","DOC_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edtEmail","value","dsDocInfo","SEND_MAILADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","edtPhone","value","dsDocInfo","SEND_PHONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","chkDrawSign","value","dsDocInfo","DRAWSIGN_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","chkImageSign","value","dsDocInfo","DRAWIMAGE_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","chkRegImageSign","value","dsDocInfo","REFIMAGE_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edtSendMsg","value","dsDocInfo","SEND_MESSAGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","radCheck","value","dsDocInfo","CERT_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","Calendar00_00","value","dsDocInfo","EXPIREMAIL_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","staTitle2_00_00_01","value","dsDocInfo","CERT_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","ubiComm::ubiCmmReceiverSearch.xfdl");
            this._addPreloadList("fdl","ubiComm::ubiCmmUserSearchSub.xfdl");
        };
        
        // User Script
        this.registerScript("docMailPu_copy0.xfdl", function() {
        /**
        *  메일발송
        *  @FileName 	docMailPu.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2024/03/04
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/03/04			DXTOBE						최초생성
        *******************************************************************************
        */
        this.fvUUID = null;
        this.fvisDocLoad = false;
        /**
        * @function docEditor_onload  <br>
        * description 메일발송 팝업
        */
        this.docEditor_onload = function(obj,e)
        {
        	var uuid = this.getOwnerFrame().pvUUID;
        	var sysCode = this.getOwnerFrame().pvSysCode;
        	var bizCode = this.getOwnerFrame().pvBizCode;

        	// 신규 - 신규는 있을 수 없음
        // 	if(this.gfnIsNull(uuid)) {
        // 		this.dsDocInfo.setColumn(0, "USER_ID", "jihs");
        // 		this.dsDocInfo.setColumn(0, "EXPIREMAIL_DATE", "20301231");
        // 		this.dsDocInfo.setColumn(0, "SYS_CODE", sysCode);
        // 		this.dsDocInfo.setColumn(0, "BIZ_CODE", bizCode);
        // 		this.dsDocInfo.setColumn(0, "SEND_SEQ", 0);
        // 		this.dsDocInfo.setColumn(0, "DRAWSIGN_FLAG", "1");
        // 	} else {
        		this.dsDocInfo.copyData(this.opener.dsDocInfo);
        		this.fvUUID = uuid;
        		this.dsCond.setColumn(0, "DOC_ID", uuid);
        		this.dsCond.setColumn(0, "SEND_SEQ", this.dsDocInfo.getColumn(0, "SEND_SEQ"));
        		if(this.gfnIsNull(this.dsDocInfo.getColumn(0, "SEND_TITLE"))) {
        			this.dsDocInfo.setColumn(0, "SEND_TITLE", this.dsDocInfo.getColumn(0, "DOC_TITLE"));
        		}

        		this.fnDocInfoSearch();
        /*	}
        */
        	// 문서 html 오픈
        	this.UbiDocuMaker00.set_bizFormUrl("ubiComm::ubiCmmComm.xfdl");
        	this.UbiDocuMaker00.set_viewType("dmedit");
        	this.UbiDocuMaker00.set_editorPath("svcUrl::ubidocu/ubidocumaker");	// test
        	this.UbiDocuMaker00.setDebugMode(true);

        };
        /**
        * @function fnDocInfoSearch  <br>
        * description 문서기본정보 조회 - 필드정보,수신자정보,수신자필드저장정보
        */
        this.fnDocInfoSearch = function ()
        {
        	var strSvcId    = "searchDocuDetail";
        	var strSvcUrl   = "searchDocuDetail.do";
        	var inData      = "dsCond=dsCond";
        	var outData     = "dsFieldInfo=dsFieldInfo dsReceiver=dsReceiver dsReceiverField=dsReceiverField";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };
        /**
        * @function fnReceiverFieldSave  <br>
        * description 수신자필드저장
        */
        this.fnReceiverFieldSave = function ()
        {
        	var strSvcId    = "saveDocuReceiverField";
        	var strSvcUrl   = "saveDocuReceiverField.do";
        	var inData      = "dsList=dsReceiverSaveField:A";
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
        /**
        * @function fnCallback  <br>
        * description
        */
        this.fnCallback = function(srvId, errCode, errMsg)
        {
        	if(errCode < 0) return;
        	if(srvId == "searchDocuDetail") {
        		this.fnMakeFieldData();
        		this.divReceiver.form._setData(this.dsReceiver);

        		var rtn = this.UbiDocuMaker00.setDocInfo(this.dsDocInfo, 0);
        		if(rtn == false) return;

        		this.UbiDocuMaker00.setFormerInfo(this.dsFormerInfo);
        		this.UbiDocuMaker00.setFieldInfo(this.dsFieldInfo);
        		this.UbiDocuMaker00.loadEditor();

        	} else if(srvId == "saveDocuReceiverField") {
        		this.DivProcess.form.ProgressBar00.set_pos(0);
        		this.DivProcess.set_visible(true);
        		this.setTimer(99,300);
        		this.UbiDocuMaker00.sendMail(this.dsDocInfo, this.dsReceiver);
        	}
        };

        /**
        * @function fnSetFieldData  <br>
        * description 기존전송시 사용된 데이터정보를 업데이트
        */
        this.fnSetFieldData = function()
        {
        	if(this.dsReceiverField.rowcount == 0) return;

        	var nFindRow = -1;
        	var sFindStr = "";
        	var userid,colid, colvalue;
        	var seq = this.dsDocInfo.getColumn(0, "SEND_SEQ");

        	this.dsReceiver.set_enableevent(false);
        	for(var i=0,len=this.dsReceiver.rowcount;i<len;i++) {
        		userid = this.dsReceiver.getColumn(i, "USER_ID");
        		for(var j=0,len2=this.dsFieldInfo.rowcount;j<len2;j++) {
        			colid = this.dsFieldInfo.getColumn(j, "FIELD_ID");
        			sFindStr  = "(USER_ID=='" + userid + "') && (SEND_SEQ == " + seq + ")";
        			sFindStr  += " && (FIELD_ID=='" + colid + "')";
        			nFindRow = this.dsReceiverField.findRowExpr(sFindStr);
        			if(nFindRow>=0) {
        				colvalue = this.dsReceiverField.getColumn(nFindRow, "FVALUE");
        				if(colvalue) {
        					this.dsReceiver.setColumn(i, colid, colvalue);
        				}
        			}
        		}
        	}
        	this.dsReceiver.set_enableevent(true);
        };

        /**
        * @function fnMakeGridFormat  <br>
        * description 필드정보를 참고하여 그리드 포맷생성
        */
        this.fnMakeGridFormat = function()
        {
        	var f = '<Formats>\n';
        	f += '\t<Format id="default">\n';
        	f += '\t\t<Columns>\n';

        	f += '\t\t\t<Column size="100" band="left"/>\n';	// ID
        	f += '\t\t\t<Column size="120" band="left"/>\n';	// NAME
        	f += '\t\t\t<Column size="200"/>\n';	// EMAIL
        	f += '\t\t\t<Column size="150"/>\n';	// PHONE

        	var colinfo, colname;
        	var arrCol = [];
        	for(var i=0,len=this.dsFieldInfo.rowcount;i<len;i++) {
        		f += '\t\t\t<Column size="150"/>\n';
        	}
        	f += '\t\t</Columns>\n';

        	// rows
        	f += '\t\t<Rows>\n';
        	f += '\t\t\t<Row size="32" band="head"/>\n';
        	f += '\t\t\t<Row size="32" band="body"/>\n';
        	f += '\t\t</Rows>\n';

        	// header
        	f += '\t\t<Band id="head">\n';
        	f += '\t\t\t<Cell col="0" text="ID"/>\n';
        	f += '\t\t\t<Cell col="1" text="수신자명"/>\n';
        	f += '\t\t\t<Cell col="2" text="E-Mail"/>\n';
        	f += '\t\t\t<Cell col="3" text="연락처"/>\n';

        	var nCol = 3;
        	var strColText = "";
        	for(var i=0,len=this.dsFieldInfo.rowcount;i<len;i++) {
        		strColText = this.dsFieldInfo.getColumn(i, "FIELD_NAME");
        		nCol++;
        		f += '\t\t\t<Cell col="' + nCol + '" text="' + strColText + '"/>\n';
        	}
        	f += '\t\t</Band>\n';

        	// body
        	f += '\t\t<Band id="body">\n';
        	f += '\t\t\t<Cell displaytype="normal" edittype="normal" text="bind:USER_ID"/>\n';
        	f += '\t\t\t<Cell col="1" displaytype="normal" edittype="normal" text="bind:USER_NAME"/>\n';
        	f += '\t\t\t<Cell col="2" displaytype="normal" edittype="normal" text="bind:USER_MAILADDR"/>\n';
        	f += '\t\t\t<Cell col="3" displaytype="normal" edittype="normal" text="bind:USER_PHONE"/>\n';

        	nCol = 3;
        	for(var i=0,len=this.dsFieldInfo.rowcount;i<len;i++) {
        		strColText = this.dsFieldInfo.getColumn(i, "FIELD_ID");
        		nCol++;
        		f += '\t\t\t<Cell col="' + nCol + '" displaytype="normal" edittype="normal" text="bind:' + strColText + '"/>\n';
        	}
        	f += '\t\t</Band>\n';
        	f += '\t</Format>\n';
        	f += '\t</Formats>';

        	this.grdData.set_formats(f);
        	this.grdData.set_binddataset("dsReceiver");

        };

        /**
        * @function fnMakeFieldData  <br>
        * description 필드정보/수신자정보를 조합하여 수신데이터 변경.
        */
        this.fnMakeFieldData = function()
        {
        	var colinfo, colid;
        	for(var i=0,len=this.dsFieldInfo.rowcount;i<len;i++) {
        		colid = this.dsFieldInfo.getColumn(i, "FIELD_ID");
        		colinfo = this.dsReceiver.getColumnInfo(colid);
        		if(!colinfo) {
        			this.dsReceiver.addColumn(colid, "string");
        		}
        	}
        	this.fnMakeGridFormat();
        	this.fnSetFieldData();
        };

        // mail
        this.btnSendMail_onclick = function(obj,e)
        {
        	this.UbiDocuMaker00.sendMail(this.dsDocInfo, this.dsReceiver);
        };

        /**
        * @function fnValidate  <br>
        * description 정합성 체크
        */
        this.fnValidate = function() {
        	if(this.divReceiver.form.fnValidation() == false) return false;

        	// 정합성 체크
        	this.gfnClearValidation(this.dsDocInfo);
        	this.gfnSetValidation(this.dsDocInfo, "SEND_TITLE"	, "메일제목"		, "required");
        	this.gfnSetValidation(this.dsDocInfo, "SEND_MESSAGE" , "메일메세지"		, "required");
        	this.gfnSetValidation(this.dsDocInfo, "SEND_ID" , "발송자"		, "required");
        	this.gfnSetValidation(this.dsDocInfo, "SEND_NAME" , "발송자"		, "required");
        	this.gfnSetValidation(this.dsDocInfo, "SEND_MAILADDR" , "발송자이메일"		, "required");
        	this.gfnSetValidation(this.dsDocInfo, "EXPIREMAIL_DATE" , "서명만료일자"		, "required");
        	if (this.gfnValidation(this.dsDocInfo, "A") == false) return false;

        	this.dsReceiver.copyData(this.divReceiver.form._getData());
        	// SIGN 하나이상 체크 처리 필요.
        	this.gfnClearValidation(this.dsReceiver);
        	//this.gfnSetValidation(this.dsReceiver, "USER_ID"	, "수신자ID"		, "required");
        	this.gfnSetValidation(this.dsReceiver, "USER_NAME"		, "수신자명"	, "required");
        	this.gfnSetValidation(this.dsReceiver, "USER_MAILADDR"		, "수신자이메일"	, "required");
        	if (this.gfnValidation(this.dsReceiver, "A") == false) return false;

        	for(var i=0,len=this.dsReceiver.rowcount;i<len;i++) {
        		if(this.gfnIsNull(this.dsReceiver.getColumn(i, "USER_ID"))) {
        			this.dsReceiver.setColumn(i, "USER_ID", this.divReceiver.form.createUID());
        		}
        	}
        	//this.divReceiver.form._getData().applyChange();
        	return true;
        };

        this.docEditor_onstepchanged = function(obj,e)
        {
        	if(e.preindex == 1 && e.postindex == 0) {
        		this.divReceiver.form._setData(this.dsReceiver);
        	}
        };

        this.docEditor_canstepchange = function(obj,e)
        {
        	if(e.postindex == 1) {
        		var objComp = this.getNextComponent(this.getFocus(), true);
        		if(objComp) {
        			objComp.setFocus();
        		} else {
        			objComp = this.getPrevComponent(this.getFocus(), true);
        			if(objComp) objComp.setFocus();
        		}
        		if(this.fnValidate() == false) {
        			return false;
        		}
        	}
        	return true;
        };
        /**
        * @function fnMakeSavedFieldData  <br>
        * description 수신필드정보 저장
        */
        this.fnMakeSavedFieldData = function() {
        	this.dsReceiverSaveField.clearData();
        	var sUserId = nexacro.getApplication().gvUserId;
        	var userid, colid, nRow;
        	var docid = this.dsDocInfo.getColumn(0, "DOC_ID");
        	var seq = this.dsDocInfo.getColumn(0, "SEND_SEQ");

        	this.dsReceiverSaveField.set_enableevent(false);
        	for(var i=0,len=this.dsReceiver.rowcount;i<len;i++) {
        		userid = this.dsReceiver.getColumn(i, "USER_ID");
        		for(var j=0,len2=this.dsFieldInfo.rowcount;j<len2;j++) {
        			colid = this.dsFieldInfo.getColumn(j, "FIELD_ID");
        			nRow = this.dsReceiverSaveField.addRow();
        			this.dsReceiverSaveField.setColumn(nRow, "DOC_ID", docid);
        			this.dsReceiverSaveField.setColumn(nRow, "USER_ID", userid);
        			this.dsReceiverSaveField.setColumn(nRow, "SEND_SEQ", seq);
        			this.dsReceiverSaveField.setColumn(nRow, "FIELD_ID", colid);
        			this.dsReceiverSaveField.setColumn(nRow, "FVALUE",
        						this.dsReceiver.getColumn(i,colid));
        			this.dsReceiverSaveField.setColumn(nRow, "INPT_ID", sUserId);
        			this.dsReceiverSaveField.setColumn(nRow, "CHGE_ID", sUserId);
        		}
        	}
        	this.dsReceiverSaveField.set_enableevent(true);
        };

        /**
        * @function divBottom_btnSave_onclick  <br>
        * description 수신필드정보 저장 및 발송
        */
        this.divBottom_btnSave_onclick = function(obj,e)
        {
        	this.fnMakeSavedFieldData();
        	this.fnReceiverFieldSave();
        };

        this.docEditor_onbeforeclose = function(obj,e)
        {
        	//this.opener.fnRefreshMain();
        };
        /**
        * @function btnExcelDown_onclick  <br>
        * description excel export
        */
        this.btnExcelDown_onclick = function(obj,e)
        {
        	// Excel Export 공통함수 호출
        	this.gfnExcelExport(this.grdData, "메일발송데이터", "메일발송데이터", "EXCEL2007","","메일발송데이터", true, "");
        };

        this._excelChr = function(codePt) {
        	if (codePt > 0xFFFF) {
        		codePt -= 0x10000;
        		return String.fromCharCode(0xD800 + (codePt >> 10), 0xDC00 + (codePt & 0x3FF));
        	}
        	return String.fromCharCode(codePt);
        };

        this._excelNumToChar = function(number) {
        	var numeric = (number - 1) % 26;
        	var letter = this._excelChr(65 + numeric);
        	var number2 = parseInt((number - 1) / 26);
        	if (number2 > 0) {
        		return this._excelNumToChar(number2) + letter;
        	} else {
        		return letter;
        	}
        };
        /**
        * @function btnExcelImport_onclick  <br>
        * description excel import
        */
        this.btnExcelImport_onclick = function(obj,e)
        {
        	var s = this._excelNumToChar(this.grdData.getCellCount("body"));
        	this.gfnExcelImport("dsReceiver", "메일발송데이터", "A4:" + s, "fnExcelImportCallback", "message", "", "A3:" + s + "3", this.grdData);
        };
        /**
        * @function fnExcelImportCallback  <br>
        * description excel import후 masking 처리
        */
        this.fnExcelImportCallback = function(obj, e) {

        	var arrCols = [];
        	var arrColMask = [];
        	var _maskstringtypeobj = new nexacro._EditMaskTypeString();
        	_maskstringtypeobj.maskchar = "";
        	var _masknumbertypeobj = new nexacro._EditMaskTypeNumber();
        	_masknumbertypeobj.setLimitType("decimal");
        	_masknumbertypeobj.setLocale(nexacro._getLocale());
        	for(var j=0,len2=this.dsFieldInfo.rowcount;j<len2;j++) {
        		arrCols.push(this.dsFieldInfo.getColumn(j, "FIELD_ID"));
        		arrColMask.push(this.dsFieldInfo.getColumn(j, "FIELD_MASK"));
        	}
        	var nColCnt = this.grdData.getCellCount("body");
        	var col = "";
        	var idx = -1, type = "";
        	var objMask;
        	this.dsReceiver.set_enableevent(false);
        	for(var i=0;i<nColCnt;i++) {
        		col = this.grdData.getCellProperty("body", i, "text").replace("bind:","");
        		idx = arrCols.indexOf(col);
        		if(idx>=0 && this.gfnIsNull(arrColMask[idx]) == false) {
        			type = "";
        			if(arrColMask[idx].indexOf("@")>=0) {
        				this.fnReplaceMask(col, arrColMask[idx], _maskstringtypeobj);
        			} else if(arrColMask[idx].indexOf("#")>=0) {
        				this.fnReplaceMask(col, arrColMask[idx], _masknumbertypeobj);
        			}
        		}
        	}
        	this.dsReceiver.set_enableevent(true);
        };

        this.fnReplaceMask = function(col, mask, maskObj)
        {
        	var value = "";
        	for(var i=0,len=this.dsReceiver.rowcount;i<len;i++) {
        		value = this.dsReceiver.getColumn(i, col);
        		if(value && value != "") {
        			maskObj.setMask(mask);
        			value = maskObj.applyMask(value);
        			this.dsReceiver.setColumn(i, col, value);
        		}
        	}
        };
        /**
        * @function UbiDocuMaker00_onnotify  <br>
        * description UbiDocuMaker event
        */
        this.UbiDocuMaker00_onnotify = function(obj, e)
        {
        	if(e.data) {
        		if(e.data.UTYPE == "SENDMAIL") {	// 메일
        			this.killTimer(99);
        			this.DivProcess.set_visible(false);
        		}
        	}
        };
        /**
        * @function docMail_ontimer  <br>
        * description 메일발송 가까 프로그레스바
        */
        this.docMail_ontimer = function(obj,e)
        {
        	this.killTimer(99);
        	if(e.timerid == 99) {
        		if(this.DivProcess.visible == true) {
        			var pos = this.DivProcess.form.ProgressBar00.pos;
        			this.DivProcess.form.ProgressBar00.set_pos(pos+10);
        			this.setTimer(99,300);
        		}
        	}
        };
        /**
        * @function radCheck_onitemchanged  <br>
        * description 인증방법
        */
        this.radCheck_onitemchanged = function(obj,e)
        {
        	if(e.postvalue == "1") {
        		this.divReceiver.form.setViewType("EMAIL");
        	} else {
        		this.divReceiver.form.setViewType("SMS");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.docEditor_onload,this);
            this.addEventHandler("onstepchanged",this.docEditor_onstepchanged,this);
            this.addEventHandler("canstepchange",this.docEditor_canstepchange,this);
            this.addEventHandler("onbeforeclose",this.docEditor_onbeforeclose,this);
            this.addEventHandler("ontimer",this.docMail_ontimer,this);
            this.divBottom.form.btnSave.addEventHandler("onclick",this.divBottom_btnSave_onclick,this);
            this.btnExcelDown.addEventHandler("onclick",this.btnExcelDown_onclick,this);
            this.btnExcelImport.addEventHandler("onclick",this.btnExcelImport_onclick,this);
            this.UbiDocuMaker00.addEventHandler("onnotify",this.UbiDocuMaker00_onnotify,this);
            this.radCheck.addEventHandler("onitemchanged",this.radCheck_onitemchanged,this);
            this.radCheck00.addEventHandler("onitemchanged",this.radCheck_onitemchanged,this);
        };
        this.loadIncludeScript("docMailPu_copy0.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
