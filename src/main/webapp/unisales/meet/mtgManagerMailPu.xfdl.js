(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("docEditor");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDocInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_ID\" type=\"string\" size=\"32\"/><Column id=\"PDF_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"USED_FLAG\" type=\"string\" size=\"32\"/><Column id=\"CHGE_ID\" type=\"string\" size=\"32\"/><Column id=\"SYS_CODE\" type=\"string\" size=\"32\"/><Column id=\"PDF_ORIG_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"PDF_FILE_PATH_NM\" type=\"string\" size=\"32\"/><Column id=\"BIZ_CODE\" type=\"string\" size=\"32\"/><Column id=\"DOC_TITLE\" type=\"string\" size=\"32\"/><Column id=\"EXPIRE_DATE\" type=\"string\" size=\"32\"/><Column id=\"INPT_ID\" type=\"string\" size=\"32\"/><Column id=\"EDIT_INFO\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFormerInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"FORMER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FORMER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FORMER_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FORMER_ORDER\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"FORMER_NAME\">작성자</Col><Col id=\"FORMER_ID\">former</Col><Col id=\"FORMER_YN\">Y</Col></Row><Row><Col id=\"FORMER_NAME\">수신자</Col><Col id=\"FORMER_ID\">receiver</Col><Col id=\"FORMER_YN\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFieldInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"FIELD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FIELD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FIELD_MASK\" type=\"STRING\" size=\"256\"/><Column id=\"FORMER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"FIELD_NAME\">기본급</Col><Col id=\"FIELD_ID\">field_base</Col></Row><Row><Col id=\"FIELD_NAME\">고정연장수당</Col><Col id=\"FIELD_ID\">field_overtime</Col></Row><Row><Col id=\"FIELD_NAME\">직책수당</Col><Col id=\"FIELD_ID\">field_work</Col></Row><Row><Col id=\"FIELD_NAME\">출산보육수당</Col><Col id=\"FIELD_ID\">field_baby</Col></Row><Row><Col id=\"FIELD_NAME\">연구개발비</Col><Col id=\"FIELD_ID\">field_rnd</Col></Row><Row><Col id=\"FIELD_NAME\">월합계</Col><Col id=\"FIELD_ID\">field_month</Col></Row><Row><Col id=\"FIELD_NAME\">총연봉</Col><Col id=\"FIELD_ID\">field_year</Col></Row><Row><Col id=\"FIELD_NAME\">주민등록번호</Col><Col id=\"FIELD_ID\">field_resno</Col></Row><Row><Col id=\"FIELD_NAME\">성명</Col><Col id=\"FIELD_ID\">field_name</Col></Row><Row><Col id=\"FIELD_NAME\">서명</Col><Col id=\"FIELD_ID\">field_sign</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SYS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCondCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SYS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_SEQ\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCal", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">선택</Col><Col id=\"code\">Z</Col></Row><Row><Col id=\"name\">1년</Col><Col id=\"code\">A</Col></Row><Row><Col id=\"name\">3년</Col><Col id=\"code\">B</Col></Row><Row><Col id=\"name\">5년</Col><Col id=\"code\">C</Col></Row><Row><Col id=\"name\">10년</Col><Col id=\"code\">D</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFormerDefault", this);
            obj._setContents("<ColumnInfo><Column id=\"FORMER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FORMER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FORMER_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FORMER_ORDER\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"FORMER_NAME\">작성자</Col><Col id=\"FORMER_ID\">former</Col><Col id=\"FORMER_YN\">Y</Col></Row><Row><Col id=\"FORMER_NAME\">수신자</Col><Col id=\"FORMER_ID\">receiver</Col><Col id=\"FORMER_YN\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCodeFormer", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">Y</Col><Col id=\"name\">작성자</Col></Row><Row><Col id=\"code\">N</Col><Col id=\"name\">수신자</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divTop","0","0",null,"70","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_TFDM_BottomStep");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staTitleSubStep1","40.06%","38","227","23",null,null,null,null,null,null,this.divTop.form);
            obj.set_taborder("1");
            obj.set_text("문서기본 정보 설정");
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

            obj = new Div("divTop00","0","0",null,"70","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_TFDM_BottomStep");
            obj.set_visible("true");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Static("staTitleSubStep1","40.06%","38","227","23",null,null,null,null,null,null,this.divTop00.form);
            obj.set_taborder("1");
            obj.set_text("문서 편집");
            obj.set_cssclass("sta_TFDM_StepTitle");
            obj.set_font("bold 20px/normal \"Noto Sans\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"");
            obj.set_textDecoration("none");
            obj.set_textAlign("center");
            this.divTop00.addChild(obj.name, obj);

            obj = new Static("staTitleStep1","560.00","12","227","17",null,null,null,null,null,null,this.divTop00.form);
            obj.set_taborder("0");
            obj.set_text("STEP 2");
            obj.set_cssclass("sta_TFDM_Step");
            obj.set_font("bold 14px/normal \"Noto Sans\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"");
            obj.set_textAlign("center");
            this.divTop00.addChild(obj.name, obj);

            obj = new Button("btnSaveAs",null,"21","191","30","29",null,null,null,null,null,this.divTop00.form);
            obj.set_taborder("2");
            obj.set_text("다른이름으로 저장");
            obj.set_cssclass("btn_TFDM_Save");
            obj.set_visible("true");
            this.divTop00.addChild(obj.name, obj);

            obj = new UbiDocuMaker("UbiDocuMaker00","0","divTop00:0",null,null,"0","70",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Div("divBottom","0","UbiDocuMaker00:0",null,"66","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_TFDM_BottomStep");
            obj.set_visible("true");
            obj.set_positionstep("1");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","45.99%","11","110","30",null,null,null,null,null,null,this.divBottom.form);
            obj.set_taborder("0");
            obj.set_text("편집내용저장");
            obj.set_cssclass("btn_TFDM_Save");
            obj.set_visible("true");
            this.divBottom.addChild(obj.name, obj);

            obj = new Div("divContents","0","divTop:0","1400",null,null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle1","11.36%","20","1058","36",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("0");
            obj.set_text("메일 제목");
            obj.set_cssclass("sta_WF_doctitle");
            obj.set_font("bold 16px/normal \"Noto Sans\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"");
            this.divContents.addChild(obj.name, obj);

            obj = new Edit("edtDocName","11.36%","64",null,"32","11.79%",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("1");
            obj.set_cssclass("edt_TFDM_essential");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staTitle2_00","11.36%","201",null,"23","400",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("5");
            obj.set_text("작성/수신 그룹");
            obj.set_cssclass("sta_WF_doctitle");
            obj.set_font("bold 16px/normal \"Noto Sans\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divFormer","11.36%","staTitle2_00:9",null,"135","12.14%",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("6");
            obj.set_background("#F2F6FF");
            obj.set_borderRadius("10px");
            obj.set_boxShadow("1px 1px 2px 0px #cccccc");
            this.divContents.addChild(obj.name, obj);

            obj = new Grid("grdFormer","20.00","20",null,"94","20",null,null,null,null,null,this.divContents.form.divFormer.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsFormerInfo");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_border("1px solid #C3E9CD");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"189\"/><Column size=\"222\"/><Column size=\"156\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"그룹명\"/><Cell col=\"1\" text=\"그룹 ID\"/><Cell col=\"2\" text=\"작성자 구분\"/></Band><Band id=\"body\"><Cell text=\"bind:FORMER_NAME\" edittype=\"normal\"/><Cell col=\"1\" text=\"bind:FORMER_ID\" edittype=\"none\"/><Cell col=\"2\" text=\"bind:FORMER_YN\" edittype=\"none\" displaytype=\"combotext\" combodataset=\"dsCodeFormer\" combocodecol=\"code\" combodatacol=\"name\"/></Band></Format></Formats>");
            this.divContents.form.divFormer.addChild(obj.name, obj);

            obj = new Static("staTitle2","11.36%","divFormer:24",null,"25","212",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("7");
            obj.set_text("필드 정의");
            obj.set_cssclass("sta_WF_doctitle");
            obj.set_font("bold 16px/normal \"Noto Sans\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divField","11.36%","staTitle2:7",null,"270","12.14%",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("8");
            obj.set_background("#FFF6F4");
            obj.set_url("ubiComm::ubiCmmFieldSet.xfdl");
            obj.set_borderRadius("10px");
            obj.set_boxShadow("1px 1px 2px 0px #cccccc");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("Static00","576.00","713","62","2",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("9");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staTitle1_00","11.36%","110","1058","36",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("2");
            obj.set_text("문서 파기일자");
            obj.set_cssclass("sta_WF_doctitle");
            obj.set_font("bold 16px/normal \"Noto Sans\",\"Malgun Gothic\",\"Tahoma\",\"Dotum\",\"Helvetica\",\"Apple SD Gothic Neo\",\"Sans-serif\"");
            this.divContents.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","11.36%","150","233","32",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("3");
            this.divContents.addChild(obj.name, obj);

            obj = new Combo("Combo00","Calendar00:33","150","150","32",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsCal");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_text("선택");
            obj.set_value("Z");
            obj.set_index("0");
            this.divContents.addChild(obj.name, obj);

            obj = new Button("btnAddGroup",null,"196","130","28","170",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("10");
            obj.set_text("수신그룹 추가");
            obj.set_cssclass("btn_POP_yes");
            this.divContents.addChild(obj.name, obj);

            obj = new Button("btnDeleteGroup",null,"196","130","28","306",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("11");
            obj.set_text("수신그룹 삭제");
            obj.set_cssclass("btn_POP_yes");
            obj.set_enable("false");
            this.divContents.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTop.form
            obj = new Layout("default","",0,0,this.divTop.form,function(p){});
            this.divTop.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divTop00.form
            obj = new Layout("default","",0,0,this.divTop00.form,function(p){});
            this.divTop00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBottom.form
            obj = new Layout("default","",0,0,this.divBottom.form,function(p){});
            this.divBottom.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form.divFormer.form
            obj = new Layout("default","",0,0,this.divContents.form.divFormer.form,function(p){});
            this.divContents.form.divFormer.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form.divField
            obj = new Layout("default","",0,0,this.divContents.form.divField.form,function(p){});
            this.divContents.form.divField.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form
            obj = new Layout("default","",0,0,this.divContents.form,function(p){});
            this.divContents.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1400,800,this,function(p){});
            obj.set_stepcount("2");
            obj.set_stepindex("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divContents.form.edtDocName","value","dsDocInfo","DOC_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divContents.form.Calendar00","value","dsDocInfo","EXPIRE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","ubiComm::ubiCmmFieldSet.xfdl");
        };
        
        // User Script
        this.registerScript("mtgManagerMailPu.xfdl", function() {
        /**
        *  문서편집 팝업
        *  @FileName 	docFormNewPu.xfdl
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
        * description 문서편집,작성 팝업
        */
        this.docEditor_onload = function(obj,e)
        {
        	var uuid = this.getOwnerFrame().pvUUID;
        	var sysCode = this.getOwnerFrame().pvSysCode;
        	var bizCode = this.getOwnerFrame().pvBizCode;

        	// 다른이름으로 저장
        	if(this.getOwnerFrame().pvSaveMode == "N") {
        		this.divTop00.form.btnSaveAs.set_visible(false);
        	}
        	// 신규 기본정보 세팅
        	if(this.gfnIsNull(uuid)) {
        		this.divTop00.form.btnSaveAs.set_visible(false);
        		this.dsDocInfo.setColumn(0, "INPT_ID", this.gfnGetUserInfo("USER_ID"));
        		this.dsDocInfo.setColumn(0, "EXPIRE_DATE", this.gfnAddDate(this.gfnGetDate(),3650));
        		this.divContents.form.Combo00.set_value("D");
        		this.dsDocInfo.setColumn(0, "SYS_CODE", sysCode);
        		this.dsDocInfo.setColumn(0, "BIZ_CODE", bizCode);

        		this.dsFormerInfo.copyData(this.dsFormerDefault);
        	} else {
        		this.dsDocInfo.copyData(this.opener.dsDocInfo);
        		this.fvUUID = uuid;
        		this.dsCond.setColumn(0, "DOC_ID", uuid);

        		this.fnDocInfoSearch();
        	}

        	// 문서 html 오픈
        	this.UbiDocuMaker00.set_bizFormUrl("ubiComm::ubiCmmComm.xfdl");
        	this.UbiDocuMaker00.set_viewType("dmedit");
        	this.UbiDocuMaker00.set_editorPath("svcUrl::dxtobe/ubidocumaker");	// test
        	//this.UbiDocuMaker00.setDebugMode(true);

        };
        /**
        * @function fnDocInfoSearch  <br>
        * description 문서 상세 정보 조회 - 필드정보, 수신자 정보
        */
        this.fnDocInfoSearch = function ()
        {
        	var strSvcId    = "searchDocuDetail";
        	var strSvcUrl   = "searchDocuDetail.do";
        	var inData      = "dsCond=dsCond";
        	var outData     = "dsFieldInfo=dsFieldInfo dsFormerInfo=dsFormerInfo";
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
        * @function fnDocSaveCopy  <br>
        * description 다른이름으로 저장
        */
        this.fnDocSaveCopy = function ()
        {
        	var strSvcId    = "saveAsDoc";
        	var strSvcUrl   = "saveAsDoc.do";
        	var inData      = "dsCond=dsCondCopy";
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
        * description 서비스콜백
        */
        this.fnCallback = function(srvId, errCode, errMsg)
        {
        	if(errCode < 0) return;
        	if(srvId == "searchDocuDetail") {
        		this.divContents.form.divField.form._setData(this.dsFieldInfo);
        		if(this.dsFormerInfo.rowcount == 0) {
        			this.dsFormerInfo.copyData(this.dsFormerDefault);
        		}
        		this.fnresizeFormer();	// resize
        		this.divContents.form.divField.form._setFormerData(this.dsFormerInfo);
        	} else if(srvId == "saveAsDoc") {	// 다른이름으로 저장
        		this.gfnAlert("msg.copy");
        	}
        };

        /**
        * @function fnDocLoad  <br>
        * description 문서오픈
        */
        this.fnDocLoad = function()
        {
        	if(this.gfnIsNull(this.dsDocInfo.getColumn(0, "SEND_SEQ"))) {
        		this.dsDocInfo.setColumn(0, "SEND_SEQ", 0);
        	}

        	// 문서정보를 html 로 전달
        	var rtn = this.UbiDocuMaker00.setDocInfo(this.dsDocInfo, 0);
        	if(rtn == false) return;
        	// 작성그룹정보를 html 로 전달
        	this.UbiDocuMaker00.setFormerInfo(this.dsFormerInfo);
        	// 필드정보를 html 로 전달
        	this.UbiDocuMaker00.setFieldInfo(this.dsFieldInfo);
        	// 문서 오픈
        	this.UbiDocuMaker00.loadEditor();
        };

        // viewer
        this.btnView_onclick = function(obj,e)
        {
        	this.UbiDocuMaker00.set_viewType("dmview");
        	this.UbiDocuMaker00.setDocInfo(this.dsDocInfo, 0);
        	this.UbiDocuMaker00.loadEditor();
        };

        /**
        * @function UbiDocuMaker00_onnotify  <br>
        * description 문서 event
        */
        this.UbiDocuMaker00_onnotify = function(obj, e)
        {
        	if(e.data) {
        		console.log("UbiDocuMaker00_onnotify", e.data);
        		if(e.data.UTYPE == "SAVE") {	// 저장성공
        			 if(e.data.STATUS == 1) {
        				// 데이터 저장
        				if(this.divTop00.form.btnSaveAs.visible == false) {
        					this.divTop00.form.btnSaveAs.set_visible(true);
        				}
        			} else {
        			}
        		}
        	}
        };
        /**
         * @function fnValidationDup
         * @description 중복체크
         */
        this.fnValidationErrorAlert = function(ds, i, msg)
        {
        	ds.set_rowposition(i);
        	this.gfnAlert("msg.err.validator", [msg],"");
        };
        /**
         * @function fnValidationDup
         * @description 중복체크
         */
        this.fnValidationFormerDup = function()
        {
        	var nCnt = this.dsFormerInfo.rowcount;
        	var receiver, treceiver;
        	for(var i=1;i<nCnt-1;i++) {
        		receiver = this.dsFormerInfo.getColumn(i, "FORMER_NAME");
        		for(var j=(i+1);j<nCnt;j++) {
        			treceiver = this.dsFormerInfo.getColumn(j, "FORMER_NAME");
        			if(receiver == treceiver) {
        				this.fnValidationErrorAlert(this.dsFormerInfo, i, "수신그룹명에 중복데이터가 존재합니다.");
        				return false;
        			}
        		}
        	}
        	return true;
        };

        /**
        * @function fnValidate  <br>
        * description 정합성 체크
        */
        this.fnValidate = function() {
        	// 정합성 체크
        	console.log(this.dsDocInfo.saveXML());
        	console.log(this.dsFormerInfo.saveXML());
        	console.log(this.dsFieldInfo.saveXML());
        	console.log("####>>>>>>>>>>>>");
        	this.gfnClearValidation(this.dsDocInfo);
        	this.gfnSetValidation(this.dsDocInfo, "DOC_TITLE"	, "문서제목"		, "required");
        	console.log("####0");
        	if (this.gfnValidation(this.dsDocInfo, "A") == false) return false;
        	console.log("####1");
        	this.gfnClearValidation(this.dsFormerInfo);
        	this.gfnSetValidation(this.dsFormerInfo, "FORMER_NAME"	, "그룹명"		, "required");
        	this.gfnSetValidation(this.dsFormerInfo, "FORMER_ID"		, "그룹ID"	, "required");
        	this.gfnSetValidation(this.dsFormerInfo, "FORMER_YN"		, "작성자구분"	, "required");
        	if (this.gfnValidation(this.dsFormerInfo, "A") == false) return false;
        	console.log("####2");
        	this.dsFieldInfo.copyData(this.divContents.form.divField.form._getData());

        	// former 체크
        	if(this.dsFormerInfo.rowcount > 2) {
        		if(this.fnValidationFormerDup() == false) return false;
        	}
        console.log("####3");
        	if(this.divContents.form.divField.form.fnValidation() == false) return false;
        console.log("####4");
        	this.gfnClearValidation(this.dsFieldInfo);
        	this.gfnSetValidation(this.dsFieldInfo, "FIELD_ID"	, "필드ID"		, "required");
        	this.gfnSetValidation(this.dsFieldInfo, "FIELD_NAME", "필드명"	, "required");
        	if (this.gfnValidation(this.dsFieldInfo, "A") == false) return false;
        	else return true;
        };

        /**
        * @function docEditor_onstepchanged  <br>
        * description step 이동 처리
        */
        this.docEditor_onstepchanged = function(obj,e)
        {
        	if(e.postindex == 0) {

        	} else {
        		this.resetScroll();
        		this.fnDocLoad();
        // 		if(this.fvisDocLoad == false) {
        // 			this.fnDocLoad();
        // 			this.fvisDocLoad = true;
        // 		}
        	}
        };
        /**
        * @function docEditor_canstepchange  <br>
        * description step 이동 체크
        */
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
        * @function divBottom_btnSave_onclick  <br>
        * description 문서저장
        */
        this.divBottom_btnSave_onclick = function(obj,e)
        {
        	if(this.gfnIsNull(this.dsDocInfo.getColumn(0, "DOC_ID"))) {
        		this.gfnAlert("msg.err.validator", ["파일을 먼저 선택하세요."],"");
        		return;
        	}
        	this.UbiDocuMaker00.saveEditor();
        };
        /**
        * @function docEditor_onbeforeclose  <br>
        * description 닫기전 부모 리프레쉬
        */
        this.docEditor_onbeforeclose = function(obj,e)
        {
        	//this.opener.fnRefreshMain();
        };

        this.docEditor_onsize = function(obj,e)
        {

        };

        //message callback
        this.fnMsgCallback = function (sPopupId, sRtn)
        {
        	if( sPopupId == "saveMsg"){
        		if(this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false){
        			return;
        		}
        		var title = this.dsDocInfo.getColumn(0, "DOC_TITLE") + "-복사";
        		this.dsCondCopy.setColumn(0, "DOC_ID", this.dsDocInfo.getColumn(0, "DOC_ID"));
        		this.dsCondCopy.setColumn(0, "DOC_TITLE", title);
        		this.dsCondCopy.setColumn(0, "SEND_SEQ", 0);
        		this.dsCondCopy.setColumn(0, "SYS_CODE", this.dsDocInfo.getColumn(0, "SYS_CODE"));
        		this.dsCondCopy.setColumn(0, "BIZ_CODE", this.dsDocInfo.getColumn(0, "BIZ_CODE"));
        		this.dsCondCopy.setColumn(0, "USER_ID", this.gfnGetUserInfo("USER_ID"));
        		this.fnDocSaveCopy();
        	}
        };
        /**
        * @function divTop00_btnSaveAs_onclick  <br>
        * description 다른이름으로 저장
        */
        this.divTop00_btnSaveAs_onclick = function(obj,e)
        {
        	this.gfnAlert("confirm.save", [""], "saveMsg", "fnMsgCallback");
        };
        /**
        * @function divContents_Combo00_onitemchanged  <br>
        * description 파기일선택
        */
        this.divContents_Combo00_onitemchanged = function(obj,e)
        {
        	var sDate = "";
        	switch(e.postvalue) {
        		case "A" :
        			this.dsDocInfo.setColumn(0, "EXPIRE_DATE", this.gfnAddDate(this.gfnGetDate(),365));
        			break;
        		case "B" :
        			this.dsDocInfo.setColumn(0, "EXPIRE_DATE", this.gfnAddDate(this.gfnGetDate(),365*3));
        			break;
        		case "C" :
        			this.dsDocInfo.setColumn(0, "EXPIRE_DATE", this.gfnAddDate(this.gfnGetDate(),365*5));
        			break;
        		case "D" :
        			this.dsDocInfo.setColumn(0, "EXPIRE_DATE", this.gfnAddDate(this.gfnGetDate(),365*10));
        			break;
        		default  :
        			break;
        	}
        };


        /**
        * @function divContents_btnAddGroup_onclick  <br>
        * description 수신그룹추가
        */
        this.divContents_btnAddGroup_onclick = function(obj,e)
        {
        	var nRow = this.dsFormerInfo.addRow();
        	this.dsFormerInfo.setColumn(nRow, "USED_FLAG", "1");
        	this.dsFormerInfo.setColumn(nRow, "FORMER_YN", "N");
        	this.dsFormerInfo.setColumn(nRow, "FORMER_ID", "receiver" + nRow);

        	this.fnresizeFormer();
        };
        /**
        * @function divContents_btnAddGroup_onclick  <br>
        * description 수신그룹삭제
        */
        this.divContents_btnDeleteGroup_onclick = function(obj,e)
        {
        	if(this.dsFormerInfo.rowposition < 2) return;
        	this.dsFormerInfo.deleteRow(this.dsFormerInfo.rowposition);

        	this.fnresizeFormer();
        };

        /**
        * @function fnresizeFormer  <br>
        * description 수신그룹 변경 사이즈 조정
        */
        this.fnresizeFormer = function()
        {
        	var grid = this.divContents.form.divFormer.form.grdFormer;
        	var nCnt = this.dsFormerInfo.rowcount;
        	var nHead = 32;
        	var nBody = 30;

        	grid.setOffsetHeight(nHead + (nBody*nCnt) + 2);
        	this.divContents.form.divFormer.form.resetScroll();
        	this.divContents.form.divFormer.setOffsetHeight(grid.getOffsetHeight() + 42);

        	this.divContents.form.resetScroll();
        	this.resetScroll();

        };
        /**
        * @function dsFormerInfo_oncolumnchanged  <br>
        * description 수신그룹 변경시 필드정보데이터 갱신
        */
        this.dsFormerInfo_oncolumnchanged = function(obj,e)
        {
        	this.divContents.form.divField.form._setFormerData(this.dsFormerInfo);
        };

        this.dsFormerInfo_onrowposchanged = function(obj,e)
        {
        	if(e.newrow < 2) {
        		this.divContents.form.btnDeleteGroup.set_enable(false);
        	} else {
        		this.divContents.form.btnDeleteGroup.set_enable(true);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.docEditor_onload,this);
            this.addEventHandler("onstepchanged",this.docEditor_onstepchanged,this);
            this.addEventHandler("canstepchange",this.docEditor_canstepchange,this);
            this.addEventHandler("onsize",this.docEditor_onsize,this);
            this.divTop00.form.btnSaveAs.addEventHandler("onclick",this.divTop00_btnSaveAs_onclick,this);
            this.UbiDocuMaker00.addEventHandler("onnotify",this.UbiDocuMaker00_onnotify,this);
            this.divBottom.form.btnSave.addEventHandler("onclick",this.divBottom_btnSave_onclick,this);
            this.divContents.form.Combo00.addEventHandler("onitemchanged",this.divContents_Combo00_onitemchanged,this);
            this.divContents.form.btnAddGroup.addEventHandler("onclick",this.divContents_btnAddGroup_onclick,this);
            this.divContents.form.btnDeleteGroup.addEventHandler("onclick",this.divContents_btnDeleteGroup_onclick,this);
            this.dsFormerInfo.addEventHandler("oncolumnchanged",this.dsFormerInfo_oncolumnchanged,this);
            this.dsFormerInfo.addEventHandler("onrowposchanged",this.dsFormerInfo_onrowposchanged,this);
        };
        this.loadIncludeScript("mtgManagerMailPu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
