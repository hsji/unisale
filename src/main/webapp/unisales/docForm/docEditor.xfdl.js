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
                this._setFormPosition(1280,850);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDocInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"SYS_CODE\" type=\"string\" size=\"32\"/><Column id=\"BIZ_CODE\" type=\"string\" size=\"32\"/><Column id=\"DOC_ID\" type=\"string\" size=\"32\"/><Column id=\"DOC_TITLE\" type=\"string\" size=\"32\"/><Column id=\"USER_ID\" type=\"string\" size=\"32\"/><Column id=\"EDIT_INFO\" type=\"string\" size=\"32\"/><Column id=\"INPT_DTTM\" type=\"datetime\" size=\"17\"/><Column id=\"EXPIRE_DATE\" type=\"string\" size=\"32\"/><Column id=\"PDF_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"PDF_ORIG_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"PDF_FILE_PATH_NM\" type=\"string\" size=\"32\"/><Column id=\"SEND_SEQ\" type=\"int\" size=\"4\"/><Column id=\"SEND_ID\" type=\"string\" size=\"32\"/><Column id=\"SEND_NAME\" type=\"string\" size=\"32\"/><Column id=\"SEND_MESSAGE\" type=\"string\" size=\"32\"/><Column id=\"SEND_PHONE\" type=\"string\" size=\"32\"/><Column id=\"SEND_TITLE\" type=\"string\" size=\"32\"/><Column id=\"SEND_MAILADDR\" type=\"string\" size=\"32\"/><Column id=\"DRAWSIGN_FLAG\" type=\"string\" size=\"32\"/><Column id=\"DRAWIMAGE_FLAG\" type=\"string\" size=\"32\"/><Column id=\"REFIMAGE_FLAG\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"docTitle\">테스트</Col><Col id=\"sysCode\">DXTOBE</Col><Col id=\"bizCode\">HRD</Col><Col id=\"useDrawSign\">1</Col><Col id=\"useImageSign\">1</Col><Col id=\"useRegSign\">1</Col><Col id=\"userId\">jihs</Col><Col id=\"mailMessage\">테스트문서</Col><Col id=\"expiredDate\">2099-12-31</Col><Col id=\"senderName\">지해식</Col><Col id=\"senderMailAddr\">jihs@dxtobe.com</Col><Col id=\"senderPhone\">01096675759</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReceiver", this);
            obj._setContents("<ColumnInfo><Column id=\"receiveType\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_MAILADDR\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"field_base\" type=\"STRING\" size=\"256\"/><Column id=\"field_overtime\" type=\"STRING\" size=\"256\"/><Column id=\"field_work\" type=\"STRING\" size=\"256\"/><Column id=\"field_baby\" type=\"STRING\" size=\"256\"/><Column id=\"field_rnd\" type=\"STRING\" size=\"256\"/><Column id=\"field_month\" type=\"STRING\" size=\"256\"/><Column id=\"field_year\" type=\"STRING\" size=\"256\"/><Column id=\"field_resno\" type=\"STRING\" size=\"256\"/><Column id=\"field_name\" type=\"STRING\" size=\"256\"/><Column id=\"field_sign\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"receiveType\">receiver1</Col><Col id=\"name\">홍길동</Col><Col id=\"mailAddr\">jihs@dxtobe.com</Col><Col id=\"phone\">01096675759</Col><Col id=\"field_base\">1000000</Col><Col id=\"field_overtime\">100000</Col><Col id=\"field_work\">0</Col><Col id=\"userId\">emp001</Col><Col id=\"field_baby\">-</Col><Col id=\"field_rnd\">200000</Col><Col id=\"field_month\">1300000</Col><Col id=\"field_year\">20000000</Col><Col id=\"field_name\">홍길동</Col><Col id=\"field_resno\">111111-1000000</Col></Row><Row><Col id=\"receiveType\">receiver1</Col><Col id=\"name\">이길동</Col><Col id=\"mailAddr\">jihs@tobesoft.com</Col><Col id=\"phone\">01096675759</Col><Col id=\"field_base\">2000000</Col><Col id=\"field_overtime\">100000</Col><Col id=\"field_work\">0</Col><Col id=\"userId\">emp002</Col><Col id=\"field_baby\">-</Col><Col id=\"field_rnd\">0</Col><Col id=\"field_month\">1400000</Col><Col id=\"field_year\">22000000</Col><Col id=\"field_name\">이길동</Col><Col id=\"field_resno\">121111-1000000</Col></Row><Row><Col id=\"receiveType\">receiver2</Col><Col id=\"name\">박길동</Col><Col id=\"mailAddr\">hsji1020@naver.com</Col><Col id=\"phone\">01096675759</Col><Col id=\"field_base\">2500000</Col><Col id=\"field_overtime\">200000</Col><Col id=\"field_work\">0</Col><Col id=\"userId\">emp003</Col><Col id=\"field_baby\">-</Col><Col id=\"field_rnd\">0</Col><Col id=\"field_month\">1500000</Col><Col id=\"field_year\">23000000</Col><Col id=\"field_name\">박길동</Col><Col id=\"field_resno\">091111-1000000</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFormerInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"FORMER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FORMER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FORMER_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"FORMER_NAME\">작성자</Col><Col id=\"FORMER_ID\">former</Col><Col id=\"FORMER_YN\">Y</Col></Row><Row><Col id=\"FORMER_NAME\">수신자</Col><Col id=\"FORMER_ID\">receiver</Col><Col id=\"FORMER_YN\">N</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFieldInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"FIELD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FIELD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FIELD_MASK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"FIELD_NAME\">기본급</Col><Col id=\"FIELD_ID\">field_base</Col></Row><Row><Col id=\"FIELD_NAME\">고정연장수당</Col><Col id=\"FIELD_ID\">field_overtime</Col></Row><Row><Col id=\"FIELD_NAME\">직책수당</Col><Col id=\"FIELD_ID\">field_work</Col></Row><Row><Col id=\"FIELD_NAME\">출산보육수당</Col><Col id=\"FIELD_ID\">field_baby</Col></Row><Row><Col id=\"FIELD_NAME\">연구개발비</Col><Col id=\"FIELD_ID\">field_rnd</Col></Row><Row><Col id=\"FIELD_NAME\">월합계</Col><Col id=\"FIELD_ID\">field_month</Col></Row><Row><Col id=\"FIELD_NAME\">총연봉</Col><Col id=\"FIELD_ID\">field_year</Col></Row><Row><Col id=\"FIELD_NAME\">주민등록번호</Col><Col id=\"FIELD_ID\">field_resno</Col></Row><Row><Col id=\"FIELD_NAME\">성명</Col><Col id=\"FIELD_ID\">field_name</Col></Row><Row><Col id=\"FIELD_NAME\">서명</Col><Col id=\"FIELD_ID\">field_sign</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new UbiDocuMaker("UbiDocuMaker00","80","70",null,null,"10","120",null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("btnLoad","79","17","149","39",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("OPEN");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave","239.00","17","149","39",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("SAVE");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","80","UbiDocuMaker00:10",null,"90","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsDocInfo");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"SYS_CODE\"/><Cell col=\"1\" text=\"BIZ_CODE\"/><Cell col=\"2\" text=\"DOC_ID\"/><Cell col=\"3\" text=\"DOC_TITLE\"/><Cell col=\"4\" text=\"USER_ID\"/><Cell col=\"5\" text=\"EDIT_INFO\"/><Cell col=\"6\" text=\"INPT_DTTM\"/><Cell col=\"7\" text=\"EXPIRE_DATE\"/><Cell col=\"8\" text=\"PDF_FILE_NM\"/><Cell col=\"9\" text=\"PDF_ORIG_FILE_NM\"/><Cell col=\"10\" text=\"PDF_FILE_PATH_NM\"/><Cell col=\"11\" text=\"SEND_SEQ\"/><Cell col=\"12\" text=\"SEND_ID\"/><Cell col=\"13\" text=\"SEND_NAME\"/><Cell col=\"14\" text=\"SEND_MESSAGE\"/><Cell col=\"15\" text=\"SEND_PHONE\"/><Cell col=\"16\" text=\"SEND_TITLE\"/><Cell col=\"17\" text=\"SEND_MAILADDR\"/><Cell col=\"18\" text=\"DRAWSIGN_FLAG\"/><Cell col=\"19\" text=\"DRAWIMAGE_FLAG\"/><Cell col=\"20\" text=\"REFIMAGE_FLAG\"/></Band><Band id=\"body\"><Cell text=\"bind:SYS_CODE\"/><Cell col=\"1\" text=\"bind:BIZ_CODE\"/><Cell col=\"2\" text=\"bind:DOC_ID\"/><Cell col=\"3\" text=\"bind:DOC_TITLE\"/><Cell col=\"4\" text=\"bind:USER_ID\"/><Cell col=\"5\" text=\"bind:EDIT_INFO\"/><Cell col=\"6\" text=\"bind:INPT_DTTM\"/><Cell col=\"7\" text=\"bind:EXPIRE_DATE\"/><Cell col=\"8\" text=\"bind:PDF_FILE_NM\"/><Cell col=\"9\" text=\"bind:PDF_ORIG_FILE_NM\"/><Cell col=\"10\" text=\"bind:PDF_FILE_PATH_NM\"/><Cell col=\"11\" text=\"bind:SEND_SEQ\"/><Cell col=\"12\" text=\"bind:SEND_ID\"/><Cell col=\"13\" text=\"bind:SEND_NAME\"/><Cell col=\"14\" text=\"bind:SEND_MESSAGE\"/><Cell col=\"15\" text=\"bind:SEND_PHONE\"/><Cell col=\"16\" text=\"bind:SEND_TITLE\"/><Cell col=\"17\" text=\"bind:SEND_MAILADDR\"/><Cell col=\"18\" text=\"bind:DRAWSIGN_FLAG\"/><Cell col=\"19\" text=\"bind:DRAWIMAGE_FLAG\"/><Cell col=\"20\" text=\"bind:REFIMAGE_FLAG\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnView","561.00","17","149","39",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("VIEW");
            this.addChild(obj.name, obj);

            obj = new Button("btnSendMail","399.00","17","149","39",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Send Mail");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,850,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("docEditor.xfdl", function() {

        this.docEditor_onload = function(obj,e)
        {

        };

        this.fnSave = function()
        {
        	//this.transaction("aa","svcUrl::saveDocuContent.do", "dsList=dsDocInfo:U", "", "", "fnCallBack");
        };

        this.fnCallBack = function(srvId, errCode, errMsg)
        {
        	if(errCode >= 0) {
        		this.UbiDocuMaker00.showMsg("alert","",this.UbiDocuMaker00.getLangText("s001"));
        	}
        };

        // load
        this.btnLoad_onclick = function(obj,e)
        {
        	this.UbiDocuMaker00.set_bizFormUrl("ubiComm::ubiCmmComm.xfdl");
        	this.UbiDocuMaker00.set_viewType("dmedit");
        	this.UbiDocuMaker00.set_editorPath("svcUrl::ubidocu/ubidocumaker");	// test
        	this.UbiDocuMaker00.setDebugMode(true);

        	this.dsDocInfo.setColumn(0, "SYS_CODE", "HRD");
        	this.dsDocInfo.setColumn(0, "BIZ_CODE", "B202403");
        	this.dsDocInfo.setColumn(0, "DOC_TITLE", "테스트문서");
        	var rtn = this.UbiDocuMaker00.setDocInfo(this.dsDocInfo, 0);
        	if(rtn == false) return;

        	this.UbiDocuMaker00.setFormerInfo(this.dsFormerInfo);
        	this.UbiDocuMaker00.setFieldInfo(this.dsFieldInfo);

        	this.UbiDocuMaker00.loadEditor();
        };

        // save
        this.btnSave_onclick = function(obj,e)
        {
        	//this.UbiDocuMaker00.set_autoSaveMsg(false);	// 메세지 처리를 화면에서 함.
        	this.UbiDocuMaker00.saveEditor();
        };

        // viewer
        this.btnView_onclick = function(obj,e)
        {
        	this.UbiDocuMaker00.set_viewType("dmview");
        	this.UbiDocuMaker00.setDocInfo(this.dsDocInfo, 0);
        	this.UbiDocuMaker00.loadEditor();
        };

        // mail
        this.btnSendMail_onclick = function(obj,e)
        {
        	this.UbiDocuMaker00.sendMail(this.dsDocInfo, this.dsReceiver);
        };


        this.UbiDocuMaker00_onnotify = function(obj, e)
        {
        	console.log("UbiDocuMaker00_onnotify", e);
        	if(e.data) {
        		console.log("UbiDocuMaker00_onnotify", e.data.UTYPE, e.data.STATUS);
        		if(e.data.UTYPE == "SAVE") {	// 저장성공
        			 if(e.data.STATUS == 1) {
        				// 데이터 저장
        			} else {
        			}
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.docEditor_onload,this);
            this.UbiDocuMaker00.addEventHandler("onnotify",this.UbiDocuMaker00_onnotify,this);
            this.btnLoad.addEventHandler("onclick",this.btnLoad_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.btnView.addEventHandler("onclick",this.btnView_onclick,this);
            this.btnSendMail.addEventHandler("onclick",this.btnSendMail_onclick,this);
        };
        this.loadIncludeScript("docEditor.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
