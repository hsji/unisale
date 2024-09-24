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
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_ID\" type=\"string\" size=\"32\"/><Column id=\"PDF_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"SEND_TITLE\" type=\"string\" size=\"32\"/><Column id=\"USER_MAILADDR\" type=\"string\" size=\"32\"/><Column id=\"APRV_SEQ\" type=\"undefined\" size=\"0\"/><Column id=\"USER_ID\" type=\"string\" size=\"32\"/><Column id=\"USER_NAME\" type=\"string\" size=\"32\"/><Column id=\"SEND_DTTM\" type=\"undefined\" size=\"0\"/><Column id=\"SEND_NAME\" type=\"string\" size=\"32\"/><Column id=\"R_STATUS\" type=\"string\" size=\"32\"/><Column id=\"M_STATUS\" type=\"string\" size=\"32\"/><Column id=\"CHGE_ID\" type=\"string\" size=\"32\"/><Column id=\"USER_PHONE\" type=\"string\" size=\"32\"/><Column id=\"PDF_ORIG_FILE_NM\" type=\"undefined\" size=\"0\"/><Column id=\"PDF_FILE_PATH_NM\" type=\"string\" size=\"32\"/><Column id=\"R_ORDER\" type=\"undefined\" size=\"0\"/><Column id=\"SEND_SEQ\" type=\"int\" size=\"4\"/><Column id=\"SEND_ID\" type=\"string\" size=\"32\"/><Column id=\"INPT_ID\" type=\"string\" size=\"32\"/><Column id=\"EDIT_INFO\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDocList", this);
            obj._setContents("<ColumnInfo><Column id=\"USED_FLAG\" type=\"string\" size=\"32\"/><Column id=\"SEND_DTTM\" type=\"undefined\" size=\"0\"/><Column id=\"EXPIREMAIL_DATE\" type=\"undefined\" size=\"0\"/><Column id=\"SEND_NAME\" type=\"string\" size=\"32\"/><Column id=\"BIZ_CODE\" type=\"string\" size=\"32\"/><Column id=\"DOC_TITLE\" type=\"string\" size=\"32\"/><Column id=\"DRAWSIGN_FLAG\" type=\"string\" size=\"32\"/><Column id=\"SEND_SEQ\" type=\"int\" size=\"4\"/><Column id=\"EXPIRE_DATE\" type=\"string\" size=\"32\"/><Column id=\"EDIT_INFO\" type=\"string\" size=\"32\"/><Column id=\"DOC_ID\" type=\"string\" size=\"32\"/><Column id=\"PDF_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"SEND_MESSAGE\" type=\"undefined\" size=\"0\"/><Column id=\"SEND_TITLE\" type=\"undefined\" size=\"0\"/><Column id=\"DRAWIMAGE_FLAG\" type=\"string\" size=\"32\"/><Column id=\"REFIMAGE_FLAG\" type=\"string\" size=\"32\"/><Column id=\"CHGE_ID\" type=\"string\" size=\"32\"/><Column id=\"SYS_CODE\" type=\"string\" size=\"32\"/><Column id=\"PDF_ORIG_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"PDF_FILE_PATH_NM\" type=\"string\" size=\"32\"/><Column id=\"SEND_ID\" type=\"string\" size=\"32\"/><Column id=\"SEND_PHONE\" type=\"string\" size=\"32\"/><Column id=\"INPT_ID\" type=\"string\" size=\"32\"/><Column id=\"SEND_MAILADDR\" type=\"string\" size=\"32\"/></ColumnInfo>");
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
            obj = new Static("staTitle01_01","10.00","62","592","43",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Title");
            obj.set_text("메일 수신 현황");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00_00","10","staTitle01_01:3",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"355\"/><Column size=\"119\"/><Column size=\"119\"/><Column size=\"78\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"수신일자\"/><Cell col=\"1\" text=\"문서제목\"/><Cell col=\"2\" text=\"발신자명\"/><Cell col=\"3\" text=\"서명상태\"/><Cell col=\"4\" text=\"문서보기\"/></Band><Band id=\"body\"><Cell text=\"bind:SEND_DTTM\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"@@@@/@@/@@ @@:@@:@@\"/><Cell col=\"1\" text=\"bind:SEND_TITLE\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:SEND_NAME\"/><Cell col=\"3\" text=\"bind:R_STATUS\" combodataset=\"dsRstatus\" combocodecol=\"code\" combodatacol=\"name\" displaytype=\"combotext\" cssclass=\"expr:R_STATUS==&apos;Z&apos;||R_STATUS==&apos;K&apos;||R_STATUS==&apos;U&apos;?&apos;cell_WF_Point03&apos;:&apos;cell_WF_Point01&apos;\"/><Cell col=\"4\" displaytype=\"expr:R_STATUS==&apos;Z&apos;||R_STATUS==&apos;K&apos;||R_STATUS==&apos;U&apos;?&apos;imagecontrol&apos;:&apos;normal&apos;\" expr=\"R_STATUS==&apos;Z&apos;||R_STATUS==&apos;K&apos;||R_STATUS==&apos;U&apos;?&apos;theme://images/btn_WF_Search.png&apos;:&apos;Sign하기&apos;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","10.00","10",null,"50","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","11","86","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("문서명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo01","56","-158","185","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch_form_Combo01_innerdataset = new nexacro.NormalDataset("divSearch_form_Combo01_innerdataset", obj);
            divSearch_form_Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_Combo01_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo02","282","-158","185","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch_form_Combo02_innerdataset = new nexacro.NormalDataset("divSearch_form_Combo02_innerdataset", obj);
            divSearch_form_Combo02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_Combo02_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo03","521","-158","184","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch_form_Combo03_innerdataset = new nexacro.NormalDataset("divSearch_form_Combo03_innerdataset", obj);
            divSearch_form_Combo03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_Combo03_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","785","-158","184","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_value("20190308");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10","48","28","25",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMsgCd","staTitle00:1.00","10","191","27",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle03","edtMsgCd:0","11","98","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("서명여부");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUseYN","staTitle03:0.00","10","112","27",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            var divSearch_form_cboUseYN_innerdataset = new nexacro.NormalDataset("divSearch_form_cboUseYN_innerdataset", obj);
            divSearch_form_cboUseYN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">- 전체 - </Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">발송</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">미발송</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboUseYN_innerdataset);
            obj.set_text("- 전체 - ");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle03_00","cboUseYN:0","11","84","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("수신일");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divCalPeriod","staTitle03_00:4","10","280","27",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_url("common::cmmPeriodCalendar.xfdl");
            obj.set_text("");
            obj.set_enable("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00","divCalPeriod:4","12","20","23",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_background("url(\'theme://images/img_titlebar_Close.png\') no-repeat center center");
            obj.set_border("0px none");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSign",null,"70","100","28","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("서명등록");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form.divCalPeriod
            obj = new Layout("default","",0,0,this.divSearch.form.divCalPeriod.form,function(p){});
            this.divSearch.form.divCalPeriod.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtMsgCd","value","dsCond","DOC_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtMsgTxt","value","dsCond","INPT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboUseYN","value","dsCond","SEND_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::cmmPeriodCalendar.xfdl");
        };
        
        // User Script
        this.registerScript("docTask.xfdl", function() {
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
        	this.dsCond.setColumn(0, "USER_ID", this.gfnGetUserInfo("USER_ID"));
        	this.fnListSearch();
        };

        /**
        * @function fnDeptSearch  <br>
        * description 문서그룹조회 - 조직으로 임시처리
        */
        this.fnListSearch = function ()
        {
        	var strSvcId    = "searchDocMyMailList";
        	var strSvcUrl   = "searchDocMyMailList.do";
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
        * @function fnCallback  <br>
        * description 서비스콜백
        */
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "searchDocMyMailList":
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

        };


        this.dsHistory_onrowposchanged = function(obj,e)
        {

        };

        this.Grid00_00_oncellclick = function(obj,e)
        {
        	if(e.cell == 4) {
        		var pos = this.dsList.rowposition;
        		var rStatus = this.dsList.getColumn(pos, "R_STATUS");
        		if(rStatus == "Z" || rStatus == "K" || rStatus == "U") {
        			var sTitle  = "문서보기";
        			var docId   = this.dsList.getColumn(pos,"DOC_ID");
        			var Doctitle  = this.dsList.getColumn(pos,"SEND_TITLE");
        			var sysCode = this.dsList.getColumn(pos,"SYS_CODE");
        			var bizCode = this.dsList.getColumn(pos,"BIZ_CODE");
        			var seq 	= this.dsList.getColumn(pos,"SEND_SEQ")+"";
        			var oArg    = { pvUUID:		docId,
        							pvSysCode:	sysCode,
        							pvBizCode:	bizCode,
        							pvTitle :	Doctitle,
        							pvSeq :	seq,
        							pvUserId:	this.dsList.getColumn(pos,"USER_ID")
        						  };
        						  console.log(oArg);
        			var oOption = {title:sTitle , titlebar:true};
        			var sPopupCallBack = "fnPopupCallback";
        			this.gfnOpenPopup("docView", "docForm::docViewPu.xfdl", oArg, sPopupCallBack, oOption);
        		} else {
        			var sTitle  = "사인하기";
        			var oArg    = { pvUrl:		this.dsList.getColumn(pos,"MAIL_URL")
        						  };
        			var oOption = {title:sTitle , titlebar:true};
        			var sPopupCallBack = "fnPopupCallback";
        			this.gfnOpenPopup("docView", "docForm::docSignPu.xfdl", oArg, sPopupCallBack, oOption);
        		}
        	}
        };

        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.fnListSearch();
        };
        //사인등록
        this.divCmmnBtn_btnExcelDown_onclick = function(obj,e)
        {
        	var sTitle  = "서명등록";
        	var oArg    = {
        				  };
        	var oOption = {title:sTitle , titlebar:true};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("docView", "ubiComm::ubiSignRegPu.xfdl", oArg, sPopupCallBack, oOption);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.docMain_onload,this);
            this.Grid00_00.addEventHandler("oncellclick",this.Grid00_00_oncellclick,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.divSearch.form.edtMsgCd.addEventHandler("onkeyup",this.searchEdit_onkeyup,this);
            this.divSearch.form.Button00.addEventHandler("onclick",this.divSearch_Button00_onclick,this);
            this.btnSign.addEventHandler("onclick",this.divCmmnBtn_btnExcelDown_onclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
            this.dsHistory.addEventHandler("onrowposchanged",this.dsHistory_onrowposchanged,this);
        };
        this.loadIncludeScript("docTask.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
