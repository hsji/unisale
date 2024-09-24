(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("docMain");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_ID\" type=\"string\" size=\"32\"/><Column id=\"DT_LVL\" type=\"undefined\" size=\"0\"/><Column id=\"SYS_CODE\" type=\"undefined\" size=\"0\"/><Column id=\"REORDER\" type=\"undefined\" size=\"0\"/><Column id=\"SortOrder\" type=\"undefined\" size=\"0\"/><Column id=\"TITLE\" type=\"string\" size=\"32\"/><Column id=\"BIZ_CODE\" type=\"undefined\" size=\"0\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDocList", this);
            obj._setContents("<ColumnInfo><Column id=\"USED_FLAG\" type=\"string\" size=\"32\"/><Column id=\"SEND_DTTM\" type=\"undefined\" size=\"0\"/><Column id=\"EXPIREMAIL_DATE\" type=\"undefined\" size=\"0\"/><Column id=\"SEND_NAME\" type=\"string\" size=\"32\"/><Column id=\"BIZ_CODE\" type=\"string\" size=\"32\"/><Column id=\"DOC_TITLE\" type=\"string\" size=\"32\"/><Column id=\"DRAWSIGN_FLAG\" type=\"string\" size=\"32\"/><Column id=\"SEND_SEQ\" type=\"int\" size=\"4\"/><Column id=\"EXPIRE_DATE\" type=\"string\" size=\"32\"/><Column id=\"EDIT_INFO\" type=\"string\" size=\"32\"/><Column id=\"DOC_ID\" type=\"string\" size=\"32\"/><Column id=\"PDF_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"SEND_MESSAGE\" type=\"undefined\" size=\"0\"/><Column id=\"SEND_TITLE\" type=\"undefined\" size=\"0\"/><Column id=\"DRAWIMAGE_FLAG\" type=\"string\" size=\"32\"/><Column id=\"REFIMAGE_FLAG\" type=\"string\" size=\"32\"/><Column id=\"CHGE_ID\" type=\"string\" size=\"32\"/><Column id=\"SYS_CODE\" type=\"string\" size=\"32\"/><Column id=\"PDF_ORIG_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"PDF_FILE_PATH_NM\" type=\"string\" size=\"32\"/><Column id=\"SEND_ID\" type=\"string\" size=\"32\"/><Column id=\"SEND_PHONE\" type=\"string\" size=\"32\"/><Column id=\"INPT_ID\" type=\"string\" size=\"32\"/><Column id=\"SEND_MAILADDR\" type=\"string\" size=\"32\"/><Column id=\"CERT_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHistory", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_ID\" type=\"string\" size=\"32\"/><Column id=\"SEND_DTTM\" type=\"string\" size=\"32\"/><Column id=\"SEND_SEQ\" type=\"int\" size=\"4\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReceiveInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_ID\" type=\"string\" size=\"32\"/><Column id=\"PDF_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"USER_MAILADDR\" type=\"string\" size=\"32\"/><Column id=\"APRV_SEQ\" type=\"int\" size=\"4\"/><Column id=\"USER_ID\" type=\"string\" size=\"32\"/><Column id=\"USER_NAME\" type=\"string\" size=\"32\"/><Column id=\"R_STATUS\" type=\"string\" size=\"32\"/><Column id=\"CHGE_ID\" type=\"string\" size=\"32\"/><Column id=\"USER_PHONE\" type=\"string\" size=\"32\"/><Column id=\"CHGE_DTTM\" type=\"datetime\" size=\"17\"/><Column id=\"PDF_ORIG_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"PDF_FILE_PATH_NM\" type=\"string\" size=\"32\"/><Column id=\"R_ORDER\" type=\"int\" size=\"4\"/><Column id=\"SEND_SEQ\" type=\"int\" size=\"4\"/><Column id=\"INPT_DTTM\" type=\"datetime\" size=\"17\"/><Column id=\"INPT_ID\" type=\"string\" size=\"32\"/><Column id=\"EDIT_INFO\" type=\"string\" size=\"32\"/><Column id=\"M_STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMstatus", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">미발송</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"name\">발송</Col></Row><Row><Col id=\"code\">0</Col><Col id=\"name\">발송오류</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRstatus", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\"/></Row><Row><Col id=\"code\">1</Col><Col id=\"name\">서명대기</Col></Row><Row><Col id=\"code\">Z</Col><Col id=\"name\">서명완료</Col></Row><Row><Col id=\"code\">K</Col><Col id=\"name\">서명완료-확인메일오류</Col></Row><Row><Col id=\"code\">U</Col><Col id=\"name\">서명완요메일오류</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staBg01_00","360.00","88",null,"40","10",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","10.00","10","340",null,null,"10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj.getSetter("uFunction").set("!filter,!sort,!colfix,!initial");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"400\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"문서목록\"/></Band><Band id=\"body\"><Cell text=\"bind:TITLE\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:DT_LVL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","358.00","122","592","43",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Title");
            obj.set_text("메일 발송 현황");
            this.addChild(obj.name, obj);

            obj = new Static("staBg01","360","10",null,"40","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01_00","360","10","141","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("문서 TITLE");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDocTitle","505.00","15",null,"29","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_readonly("true");
            obj.set_maxlength("7");
            this.addChild(obj.name, obj);

            obj = new Static("staBg02","360","49",null,"40","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle02","360","49","141","40",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("생성일");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle02_00","800.00","49","141","40",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDocTitle00","945.00","54",null,"29","20",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_readonly("true");
            obj.set_maxlength("7");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","505","54","235","29",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","360.00","staTitle01:3",null,"194","10",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_binddataset("dsHistory");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"276\"/><Column size=\"200\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"발송일자\"/><Cell col=\"1\" text=\"발송순번\"/></Band><Band id=\"body\"><Cell text=\"bind:SEND_DTTM\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"@@@@/@@/@@ @@:@@:@@\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:SEND_SEQ\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01_01","358","Grid00:5","592","43",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_Title");
            obj.set_text("메일 수신 현황");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","360","staTitle01_01:3",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_binddataset("dsReceiveInfo");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"104\"/><Column size=\"119\"/><Column size=\"156\"/><Column size=\"128\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"수신자ID\"/><Cell col=\"1\" text=\"수신자명\"/><Cell col=\"2\" text=\"E-Mail\"/><Cell col=\"3\" text=\"연락처\"/><Cell col=\"4\" text=\"발송순번\"/><Cell col=\"5\" text=\"발송상태\"/><Cell col=\"6\" text=\"수신상태\"/><Cell col=\"7\" text=\"문서보기\"/></Band><Band id=\"body\"><Cell text=\"bind:USER_ID\"/><Cell col=\"1\" text=\"bind:USER_NAME\"/><Cell col=\"2\" text=\"bind:USER_MAILADDR\"/><Cell col=\"3\" text=\"bind:USER_PHONE\"/><Cell col=\"4\" text=\"bind:SEND_SEQ\"/><Cell col=\"5\" text=\"bind:M_STATUS\" displaytype=\"combotext\" combodataset=\"dsMstatus\" combocodecol=\"code\" combodatacol=\"name\" cssclass=\"expr:M_STATUS==&apos;1&apos;?&apos;cell_WF_Point03&apos;:&apos;cell_WF_Point01&apos;\"/><Cell col=\"6\" text=\"bind:R_STATUS\" combodataset=\"dsRstatus\" combocodecol=\"code\" combodatacol=\"name\" displaytype=\"combotext\" cssclass=\"expr:R_STATUS==&apos;Z&apos;||R_STATUS==&apos;K&apos;||R_STATUS==&apos;U&apos;?&apos;cell_WF_Point03&apos;:&apos;cell_WF_Point01&apos;\"/><Cell col=\"7\" displaytype=\"expr:R_STATUS==&apos;Z&apos;||R_STATUS==&apos;K&apos;||R_STATUS==&apos;U&apos;?&apos;imagecontrol&apos;:&apos;none&apos;\" expr=\"R_STATUS==&apos;Z&apos;||R_STATUS==&apos;K&apos;||R_STATUS==&apos;U&apos;?&apos;theme://images/btn_WF_Search.png&apos;:&apos;&apos;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01_00_00","360.00","88","141","40",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("파일명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edtDocFileName","505.00","93",null,"29","20",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_readonly("true");
            obj.set_maxlength("7");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtDocTitle","value","dsDocList","DOC_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Calendar00","value","dsDocList","INPT_DTTM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtDocTitle00","value","dsDocList","KORN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","staTitle01_00_00","value","dsDocList","DOC_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edtDocFileName","value","dsDocList","PDF_ORIG_FILE_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("docResult.xfdl", function() {
        /**
        *  메일발송 현황
        *  @FileName 	docResult.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2024/03/04
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/03/04			DXTOBE						최초생성
        *******************************************************************************
        */
        this.fvRedrawPos = -1;
        this.docMain_onload = function(obj,e)
        {
        	this.fnDocTreeSearch();
        };

        /**
        * @function fnDeptSearch  <br>
        * description 문서그룹조회 -
        */
        this.fnDocTreeSearch = function ()
        {
        	var strSvcId    = "searchResultDocList";
        	var strSvcUrl   = "searchResultDocList.do";
        	var inData      = "dsCond=dsCond";
        	var outData     = "dsList=dsList";
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
        * @function fnDocSearch  <br>
        * description 그룹별 문서 조회
        */
        this.fnDocSearch = function (v)
        {
        	var strSvcId    = "searchDocMailHistory";
        	var strSvcUrl   = "searchDocMailHistory.do";
        	var inData      = "dsCond=dsCond";
        	var outData     = "dsDocList=dsDocList dsHistory=dsHistory dsReceiveInfo=dsReceiveInfo";
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
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "searchResultDocList":
        			var sId = this.gfnGetUserInfo("USER_ID");
        			if(sId == "ylk" || sId == "jihs" || sId == "jh.lee") {
        			} else {
        				this.dsList.filter("BIZ_CODE!='1010040'");
        			}
        			break;
        		case "searchDocMailHistory":

        			break;
        		default :
        	}
        };


        this.grdList_oncellclick = function(obj,e)
        {

        };

        // row change
        this.dsList_onrowposchanged = function(obj,e)
        {
        	if(e.newrow >= 0) {
        		var docId = obj.getColumn(e.newrow, "DOC_ID");
        		if(this.gfnIsNull(docId) == false) {
        			this.dsCond.setColumn(0, "DOC_ID", docId);
        			this.fnDocSearch();
        		} else {
        			this.dsDocList.clearData();
        			this.dsHistory.clearData();
        			this.dsReceiveInfo.clearData()
        		}
        	}
        };


        this.dsHistory_onrowposchanged = function(obj,e)
        {
        	if(obj.rowcount > 0) {
        		this.dsReceiveInfo.filter("SEND_SEQ==" + obj.getColumn(e.newrow, "SEND_SEQ"));
        	}
        };

        this.Grid00_00_oncellclick = function(obj,e)
        {
        	if(e.cell == 7) {
        		var pos = this.dsReceiveInfo.rowposition;
        		var rStatus = this.dsReceiveInfo.getColumn(pos, "R_STATUS");
        		if(rStatus == "Z" || rStatus == "K" || rStatus == "U") {
        			var sTitle  = "문서보기";
        			var docId   = this.dsDocList.getColumn(0,"DOC_ID");
        			var Doctitle  = this.dsDocList.getColumn(0,"DOC_TITLE");
        			var sysCode = this.dsDocList.getColumn(0,"SYS_CODE");
        			var bizCode = this.dsDocList.getColumn(0,"BIZ_CODE");
        			var seq 	= this.dsHistory.getColumn(this.dsHistory.rowposition,"SEND_SEQ")+"";
        			var oArg    = { pvUUID:		docId,
        							pvSysCode:	sysCode,
        							pvBizCode:	bizCode,
        							pvTitle :	Doctitle,
        							pvSeq :	seq,
        							pvUserId:	this.dsReceiveInfo.getColumn(pos,"USER_ID")
        						  };
        						  console.log(oArg);
        			var oOption = {title:sTitle , titlebar:true};
        			var sPopupCallBack = "fnPopupCallback";
        			this.gfnOpenPopup("docView", "docForm::docViewPu.xfdl", oArg, sPopupCallBack, oOption);
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.docMain_onload,this);
            this.grdList.addEventHandler("oncellclick",this.grdList_oncellclick,this);
            this.Grid00_00.addEventHandler("oncellclick",this.Grid00_00_oncellclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
            this.dsHistory.addEventHandler("onrowposchanged",this.dsHistory_onrowposchanged,this);
        };
        this.loadIncludeScript("docResult.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
