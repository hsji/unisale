(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("docViewPu");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,730);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDocInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"BIZ_CODE\" type=\"string\" size=\"32\"/><Column id=\"DOC_TITLE\" type=\"string\" size=\"32\"/><Column id=\"DOC_ID\" type=\"string\" size=\"32\"/><Column id=\"SYS_CODE\" type=\"string\" size=\"32\"/><Column id=\"USER_ID\" type=\"string\" size=\"32\"/><Column id=\"SEND_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsComment", this);
            obj._setContents("<ColumnInfo><Column id=\"READ_COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"READ_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"FILE\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SYS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCompany", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUser", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FORMER_YN\" type=\"STRING\" size=\"256\"/><Column id=\"FORMER_ORDER\" type=\"INT\" size=\"256\"/><Column id=\"SEND_SEQ\" type=\"int\" size=\"2\"/><Column id=\"USER_MAILADDR\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"FORMER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FORMER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"APRV_SEQ\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USER_ID\">jihs</Col><Col id=\"USER_NAME\">지해식</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSignUser", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SIGN_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"SSRESULT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SS_COMMENT\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReadUser", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_GB\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"USED_FLAG\" type=\"string\" size=\"32\"/><Column id=\"MTG_END_TM\" type=\"string\" size=\"32\"/><Column id=\"MTG_DATE\" type=\"string\" size=\"32\"/><Column id=\"MTG_RESULT_TYPE\" type=\"string\" size=\"32\"/><Column id=\"MTG_RESULT_CN\" type=\"string\" size=\"32\"/><Column id=\"USER_ID\" type=\"string\" size=\"32\"/><Column id=\"CLSDR_MTG_AT\" type=\"string\" size=\"32\"/><Column id=\"ETC_MATTER\" type=\"string\" size=\"32\"/><Column id=\"HOST_NAME\" type=\"string\" size=\"32\"/><Column id=\"HOST_ID\" type=\"string\" size=\"32\"/><Column id=\"BIZ_CODE\" type=\"string\" size=\"32\"/><Column id=\"DOC_TITLE\" type=\"string\" size=\"32\"/><Column id=\"INPT_DTTM\" type=\"string\" size=\"32\"/><Column id=\"EXPIRE_DATE\" type=\"string\" size=\"32\"/><Column id=\"EDIT_INFO\" type=\"string\" size=\"32\"/><Column id=\"DOC_ID\" type=\"string\" size=\"32\"/><Column id=\"PDF_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"MTG_CNT\" type=\"int\" size=\"4\"/><Column id=\"WORK_NAME\" type=\"string\" size=\"32\"/><Column id=\"MTG_MTR_CN\" type=\"string\" size=\"32\"/><Column id=\"MTG_BEGIN_TM\" type=\"string\" size=\"32\"/><Column id=\"MTG_PLACE_CD\" type=\"string\" size=\"32\"/><Column id=\"MTG_SEQ\" type=\"int\" size=\"4\"/><Column id=\"READNG_AT\" type=\"string\" size=\"32\"/><Column id=\"HOST_TYPE\" type=\"string\" size=\"32\"/><Column id=\"USER_NAME\" type=\"string\" size=\"32\"/><Column id=\"HOST_WORK_NAME\" type=\"string\" size=\"32\"/><Column id=\"CHGE_ID\" type=\"string\" size=\"32\"/><Column id=\"MTG_AT\" type=\"string\" size=\"32\"/><Column id=\"CHGE_DTTM\" type=\"datetime\" size=\"17\"/><Column id=\"SYS_CODE\" type=\"string\" size=\"32\"/><Column id=\"PDF_ORIG_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"PDF_FILE_PATH_NM\" type=\"string\" size=\"32\"/><Column id=\"READNG_DATE\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"IN_FDATE\" type=\"STRING\" size=\"256\"/><Column id=\"IN_TDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LIMIT\" type=\"INT\" size=\"256\"/><Column id=\"DOC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"READ_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"SYS_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BIZ_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSave", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"string\" size=\"32\"/><Column id=\"BIZ_CODE\" type=\"string\" size=\"32\"/><Column id=\"DOC_ID\" type=\"string\" size=\"32\"/><Column id=\"SYS_CODE\" type=\"string\" size=\"32\"/><Column id=\"HTML\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMySign", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle01","10","0","738","43",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Title");
            obj.set_text("회의록  의견");
            this.addChild(obj.name, obj);

            obj = new Div("divImage","10","45","980","540",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa00","9","divImage:40",null,"90","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","divImage:10","760","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("반송의견");
            obj.set_cssclass("sta_WF_SchLabel");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"10","50","28","9",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divImage
            obj = new Layout("default","",0,0,this.divImage.form,function(p){});
            this.divImage.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1000,730,this,function(p){});
            obj.set_horizontalgap("0");
            obj.set_mobileorientation("landscape");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","txa00","value","dsComment","READ_COMMENT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("mtgReadRejectPu.xfdl", function() {
        /**
        * @function docViewPu_onload  <br>
        * description 문서보기
        */
        this.fvPageCnt = 0;
        this.fvContext = null;
        this.fvPage = {
        	x : 0, y : 0, w : 0, h : 0
        };
        this.fvImage = null;
        this.fvIsExist = true;
        this.fvIsDrawingFlag = false;
        this.fvIsDrawing = false;
        this.fvX = 0;
        this.fvY = 0;

        this.docViewPu_onload = function(obj,e)
        {

        	this.dsCond.setColumn(0, "SYS_CODE", this.getOwnerFrame().pvSysCode);
        	this.dsCond.setColumn(0, "BIZ_CODE", this.getOwnerFrame().pvBizCode);

        	this.dsCond.setColumn(0, "DOC_ID", this.getOwnerFrame().pvDocId);
        	this.dsCond.setColumn(0, "USER_ID", this.getOwnerFrame().pvUserId);
        	this.fnUserSearch();
        };

        /**
        * @function fnCompanySearch  <br>
        * description 사용자조회
        */
        this.fnUserSearch = function ()
        {
        	this.gfnSetMap("meet", "MyUserInfo");

        	var strSvcId    = "searchUserInfo";
        	var strSvcUrl   = "searchCommonBaseService.do";
        	var inData      = "dsCond=dsCond dsMap=dsMap";
        	var outData     = "dsComment=dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };


        //transaction callback
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "searchUserInfo" :
        			var page = this.getOwnerFrame().pvPage;
        			this.fnMakeCanvas(page);
        			break;
        		default:break;
        	}
        };

        this.fnPopupCallback = function (sPopupId, sRtn)
        {
        	switch(sPopupId) {
        		case "mtgSignRegPu":
        			if(sRtn) {
        				this.fnTranSave();
        			}
        			break;
        		default:break;
        	}
        };

        /**
        * @class Unique ID 생성. <br>
        * @param N/A
        * @return {String} v uid
        * @example this.createUID()
        */
        this.createUID = function ()
        {
        	return 'xxxx_xyx4x'.replace(/[xy]/g, function(c)
        	{
        		var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        		return v.toString(16);
        	});
        };

        this.fnLoadImage = function()
        {
        	this.fvPageCnt++;
        	var path = "?D=" + this.getOwnerFrame().pvDocId;
        	path += "&S=" + this.getOwnerFrame().pvSysCode;
        	path += "&B=" + this.getOwnerFrame().pvBizCode;
        	path += "&U=" + this.gfnGetUserInfo("USER_ID");
        	path += "&PAGE=" + this.fvPageCnt;
        	path += "&UID=" + this.createUID();

        	var page = this.getOwnerFrame().pvPage;

        	var objEnv	 = nexacro.getEnvironment();
        	var objSrv   = objEnv.services["svcUrl"];
        	var url = objSrv.url + "searchImageView.do" + path;

        	var context = this.fvContext;
        	var img = {};
        	var pThis = this;
        	var _imageload_callback = function (url, w, h, imgnode) {
        		var pageh = (page*pThis.fvPage.h);
        		img.width = w;
        		img.height = h;
        		img.imagewidth = w;
        		img.imageheight = h;
        		pThis.fvImage = img;

        		context.drawImage(img, 0, 0, w, h /*pThis.fvPage.w, pageh*/);
        		pThis.fvIsExist = false;
        	};
        	img.src = url;
        	img.handle = nexacro._getImageObject(url, _imageload_callback, this, "", false);
        };

        // canvas 생성
        this.fnMakeCanvas = function (page)
        {
        	var mainDiv = this.divImage.form;
        	var x = this.divImage.form.getOffsetWidth();
        	var y = this.divImage.form.getOffsetHeight();

        	var w = 595;
        	var h = (page * 840) + (page * 10);
        	var l = parseInt((x - w)/2);

        	var control_elem = mainDiv.getElement();
        	var	sid = "canvas00";
        	var canvas;
        	canvas = new nexacro.CanvasComponent(sid, l, 0, w, h);
        	canvas.set_name(sid);
        	canvas.set_id(sid);
        	mainDiv.addChild(sid, canvas);
        	canvas.show();
        	canvas.bringToFront();
        	canvas.set_enableevent(true);
        	var context = canvas._canvas;
        	context.clearRect(0, 0, w, h);

        	this.fvContext = context;

        	this.fvPage.x = l;
        	this.fvPage.y = 0;
        	this.fvPage.w = w;
        	this.fvPage.h = 840;

        	mainDiv.resetScroll();

        	this.fnLoadImage();
        };


        this.docViewPu_onbeforeclose = function(obj,e)
        {
        	var mainDiv = this.divImage.form;
        	var comp = mainDiv.removeChild("canvas00");
        	if(comp) comp.destroy();
        };

        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.docViewPu_onload,this);
            this.addEventHandler("onbeforeclose",this.docViewPu_onbeforeclose,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
        };
        this.loadIncludeScript("mtgReadRejectPu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
