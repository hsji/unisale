(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CF_HomepageFileMM");
            this.set_titletext("홈페이지 파일관리");
            this.set_cssclass("frm_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(780,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_CmbType", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"NAME\">File</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"NAME\">Link</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUpload", this);
            obj._setContents("<ColumnInfo><Column id=\"fileid\" type=\"string\" size=\"255\"/><Column id=\"FL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_CODE\" type=\"string\" size=\"255\"/><Column id=\"FILE_NAME\" type=\"string\" size=\"255\"/><Column id=\"SAVE_FILE_NAME\" type=\"string\" size=\"255\"/><Column id=\"SAVE_PATH\" type=\"string\" size=\"255\"/><Column id=\"DELETE_FLAG\" type=\"string\" size=\"255\"/><Column id=\"INSERT_EMP_NAME\" type=\"string\" size=\"255\"/><Column id=\"INSERT_DATE\" type=\"string\" size=\"255\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_FileInsert", this);
            obj._setContents("<ColumnInfo><Column id=\"fileid\" type=\"STRING\" size=\"256\"/><Column id=\"FL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_FileDelete", this);
            obj._setContents("<ColumnInfo><Column id=\"fileid\" type=\"STRING\" size=\"256\"/><Column id=\"FL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"BOARD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_EMP_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRtnArgs", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BOARD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_FILE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRtn", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"BOARD_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"BL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_FILE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_Destroy",null,"10","15","15","8",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_POP_Cls");
            obj.set_hotkey("ESCAPE");
            obj.set_tooltiptext("ESC");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","10","63","15",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("파일관리");
            obj.set_cssclass("sta_POP_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","1",null,null,"36","1","1",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_POP_BtnBg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close",null,null,"57","22","8","7",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_cancel");
            obj.set_tooltiptext("ESC");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","10","44","756",null,null,"44",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("#f4f8fc");
            obj.set_border("1px solid #bad3ec");
            obj.set_borderRadius("10px");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grdUpload","23","84","735",null,null,"52",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_borderRadius("5px");
            obj.set_binddataset("dsUpload");
            obj.set_autofittype("col");
            obj.set_formatid("default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"430\"/><Column size=\"60\"/></Columns><Rows><Row size=\"50\"/></Rows><Band id=\"body\"><Cell displaytype=\"imagecontrol\" text=\"expr:comp.parent.getFileIcon(FILE_NAME)\"/><Cell col=\"1\" text=\"bind:FILE_NAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"theme://images/btn_del.png\" displaytype=\"imagecontrol\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddFile",null,"52","90","25","101",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("#1abd9c");
            obj.set_font("bold 10px \"antialias\"");
            obj.set_color("#ffffff");
            obj.set_icon("URL(\"theme://images/file_btn_AddFiles.png\")");
            obj.set_iconPosition("left");
            obj.set_textPadding("0px 0px 0px 10px");
            obj.set_text("파일첨부");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new Button("btnDeleteAll",null,"50","92","25","-140",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_background("#eb707e");
            obj.set_font("bold 10px \"antialias\"");
            obj.set_color("#ffffff");
            obj.set_icon("URL(\"theme://images/file_btn_DeleteAll.png\")");
            obj.set_iconPosition("left");
            obj.set_textPadding("0px 0px 0px 10px");
            obj.set_text("Delete All");
            obj.set_borderRadius("5px");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSaveFile",null,"52","70","25","22",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_background("#298ae1");
            obj.set_font("bold 10px \"antialias\"");
            obj.set_color("#ffffff");
            obj.set_icon("URL(\"theme://images/file_btn_Save.png\")");
            obj.set_iconPosition("left");
            obj.set_textPadding("0px 0px 0px 10px");
            obj.set_text("반영");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgLoading","298","234","197","60",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_background("url(\'theme://images/loading.gif\') no-repeat");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staHelpMessage","29","89","724",null,null,"57",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_background("#ffffff");
            obj.set_border("1px dashed #aac9e7");
            obj.set_borderRadius("10px");
            obj.set_text("마우스로 파일을 끌어오세요");
            obj.set_color("#8e8e8e");
            obj.set_font("14px/normal \"돋움\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",780,500,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("홈페이지 파일관리");
                p.set_cssclass("frm_popBg");

                p.btn_Destroy.set_taborder("0");
                p.btn_Destroy.set_cssclass("btn_POP_Cls");
                p.btn_Destroy.set_hotkey("ESCAPE");
                p.btn_Destroy.set_tooltiptext("ESC");
                p.btn_Destroy.move(null,"10","15","15","8",null);

                p.Static02.set_taborder("1");
                p.Static02.set_text("파일관리");
                p.Static02.set_cssclass("sta_POP_Title");
                p.Static02.move("10","10","63","15",null,null);

                p.Static06.set_taborder("2");
                p.Static06.set_cssclass("sta_POP_BtnBg");
                p.Static06.move("1",null,null,"36","1","1");

                p.btn_Close.set_taborder("3");
                p.btn_Close.set_text("닫기");
                p.btn_Close.set_cssclass("btn_WF_cancel");
                p.btn_Close.set_tooltiptext("ESC");
                p.btn_Close.move(null,null,"57","22","8","7");

                p.sta00.set_taborder("4");
                p.sta00.set_background("#f4f8fc");
                p.sta00.set_border("1px solid #bad3ec");
                p.sta00.set_borderRadius("10px");
                p.sta00.set_text("");
                p.sta00.move("10","44","756",null,null,"44");

                p.grdUpload.set_taborder("5");
                p.grdUpload.set_borderRadius("5px");
                p.grdUpload.set_binddataset("dsUpload");
                p.grdUpload.set_autofittype("col");
                p.grdUpload.set_formatid("default");
                p.grdUpload.move("23","84","735",null,null,"52");

                p.btnAddFile.set_taborder("7");
                p.btnAddFile.set_background("#1abd9c");
                p.btnAddFile.set_font("bold 10px \"antialias\"");
                p.btnAddFile.set_color("#ffffff");
                p.btnAddFile.set_icon("URL(\"theme://images/file_btn_AddFiles.png\")");
                p.btnAddFile.set_iconPosition("left");
                p.btnAddFile.set_textPadding("0px 0px 0px 10px");
                p.btnAddFile.set_text("파일첨부");
                p.btnAddFile.set_borderRadius("5px");
                p.btnAddFile.move(null,"52","90","25","101",null);

                p.btnDeleteAll.set_taborder("8");
                p.btnDeleteAll.set_background("#eb707e");
                p.btnDeleteAll.set_font("bold 10px \"antialias\"");
                p.btnDeleteAll.set_color("#ffffff");
                p.btnDeleteAll.set_icon("URL(\"theme://images/file_btn_DeleteAll.png\")");
                p.btnDeleteAll.set_iconPosition("left");
                p.btnDeleteAll.set_textPadding("0px 0px 0px 10px");
                p.btnDeleteAll.set_text("Delete All");
                p.btnDeleteAll.set_borderRadius("5px");
                p.btnDeleteAll.set_visible("false");
                p.btnDeleteAll.move(null,"50","92","25","-140",null);

                p.btnSaveFile.set_taborder("9");
                p.btnSaveFile.set_background("#298ae1");
                p.btnSaveFile.set_font("bold 10px \"antialias\"");
                p.btnSaveFile.set_color("#ffffff");
                p.btnSaveFile.set_icon("URL(\"theme://images/file_btn_Save.png\")");
                p.btnSaveFile.set_iconPosition("left");
                p.btnSaveFile.set_textPadding("0px 0px 0px 10px");
                p.btnSaveFile.set_text("반영");
                p.btnSaveFile.set_borderRadius("5px");
                p.btnSaveFile.move(null,"52","70","25","22",null);

                p.imgLoading.set_taborder("10");
                p.imgLoading.set_background("url(\'theme://images/loading.gif\') no-repeat");
                p.imgLoading.set_visible("false");
                p.imgLoading.move("298","234","197","60",null,null);

                p.staHelpMessage.set_taborder("6");
                p.staHelpMessage.set_background("#ffffff");
                p.staHelpMessage.set_border("1px dashed #aac9e7");
                p.staHelpMessage.set_borderRadius("10px");
                p.staHelpMessage.set_text("마우스로 파일을 끌어오세요");
                p.staHelpMessage.set_color("#8e8e8e");
                p.staHelpMessage.set_font("14px/normal \"돋움\"");
                p.staHelpMessage.set_textAlign("center");
                p.staHelpMessage.move("29","89","724",null,null,"57");
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("portrait","Mobile_screen",480,768,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static02.move("10","0","79","35",null,null);

                p.btn_Destroy.move(null,"6","23","23","10",null);

                p.btn_Close.move(null,null,"80","30","4","5");

                p.staHelpMessage.move("12","338",null,null,"12","52");

                p.grdUpload.move("4","330",null,null,"4","43");

                p.btnAddFile.move(null,"78","90","30","8",null);

                p.btnSaveFile.move(null,"44","80","30","8",null);

                p.imgLoading.move("140","354",null,"60","140",null);

                p.sta00.move("4","39",null,"74","4",null);

                p.btnDeleteAll.move(null,"42","92","25","-140",null);

                p.Static06.move("1",null,null,"38","1","1");
            	}
            );
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CF_HomepageFileMM.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("CF_HomepageFileMM.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("CF_HomepageFileMM.xfdl","Script::ExtFileUpDownload.xjs");
        this.addIncludeScript("CF_HomepageFileMM.xfdl","Script::ext_CommEco.xjs");
        this.registerScript("CF_HomepageFileMM.xfdl", function() {
        /************************************************************************************************
         * 01. 업무구분 : 공통 - 홈페이지 파일관리
         * 02. 화면명   : 홈페이지 파일관리(CM_HomepageFileMM)
         * 03. 화면설명 : 홈페이지 파일관리를 위한 공통 팝업화면
         * 04. 작성일   : 2022.09.05
         * 05. 작성자   : 박종언
         * 06. 수정이력 :
         ***********************************************************************************************
         *     수정일          이  름    사유
         ***********************************************************************************************
         *
         ***********************************************************************************************/


        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
         ************************************************************************************************/
        this.executeIncludeScript("Script::CommTrans.xjs"); /*include "Script::CommTrans.xjs"*/
        this.executeIncludeScript("Script::CommUtil.xjs"); /*include "Script::CommUtil.xjs"*/
        this.executeIncludeScript("Script::ExtFileUpDownload.xjs"); /*include "Script::ExtFileUpDownload.xjs"*/
        this.executeIncludeScript("Script::ext_CommEco.xjs"); /*include "Script::ext_CommEco.xjs"*/


        /************************************************************************************************
         * 전역 변수 영역
         ************************************************************************************************/
        // File Updown 설정 정보
        this.fileConfig = {};

        //아이콘별 확장자 목록.
        this.iconInfo = {	file_icon_ZIP: ["zip","rar","7z"],
        					file_icon_IMG: ["jpg", "jpeg", "gif", "png", "bmp"],
        					file_icon_TXT: ["txt", "xml"],
        					file_icon_DOC: ["doc", "docx"],
        					file_icon_XLS: ["xls", "xlsx"],
        					file_icon_PPT: ["ppt", "pptx"],
        					file_icon_PDF: ["pdf"],
        					file_icon_ETC: ["etc"] //위 확장자 목록에 일치하지 않을 경우. default icon
        				};

        //확장자별 아이콘 정보
        this.extToIcon = {};
        this.extUp;
        this.extDown;
        this.transferType = "all";

        //옵션 기본값 정의
        this.opts = {								// 필수 / datatype / 설명
        				 BINDDATASET:null			// X / srting / 옵션값을 바인드할 데이터셋명
        				,BOARD_CODE:null			// O / string / 저장할 폴더명
        				,BL_SEQ:null				// X / string / 게시판 일련번호 (SEQ)

        				,USE_MULTI_FILE:false		// X / bool / 다중파일 선택, 저장 가능여부
        				,USE_DELETE_ALL:false		// X / bool / 파일등록 팝업 시 등록된 파일을 모두 삭제할지 여부 (삭제 후 저장까지 즉시처리)
        				,USE_BUTTON_ONLY:false		// X / bool / 버튼 형태로만 사용할 경우 (파일보기[n], 파일등록)
        			}

        /************************************************************************************************
         * FORM 영역
         ************************************************************************************************/
        this.CF_HomepageFileMM_onload = function(obj,e)
        {
        	var pOpts = this.parent;

        	//팝업 기본 옵션을 파라미터로 덮어쓰기
        	for(var name in this.opts)
        	{
        		if(pOpts.hasOwnProperty(name))
        		{
        			this.opts[name] = pOpts[name];
        		}
        	}

        	this.fileConfig = {
        		host : this.gfnGetServerUrl(),
        		//uploadUrl : "File/saveFile.jsp?path=nexacro",
        		uploadUrl :	"FrontControllerServlet.do"
        					 +	"?service=xupservice"
        					 +	"&domain=NEXTp"
        					 +	"&model=CF_HFileMM_R01"
        					 +	"&format=xml"
        					 +	"&version=xplatform",

        		//downloadUrl : "File/downloadFile.jsp?path=nexacro&fileName=",
        		downloadUrl	: "FrontControllerServlet.do"
        						+ "?service=xupservice"
        						+ "&domain=NEXTp"
        						+ "&model=CF_HFileMM_S01"
        						+ "&format=xml"
        						+ "&version=xplatform",

        		deleteUrl : "File/deleteFile.jsp?path=nexacro",

        		downImage : "theme://images/img_file.png",
        		delImage : "theme://images/btn_del.png",
        		allowTypes : ["jpg","jpeg","gif","png","bmp","txt","zip","7z","gzip","doc","docx","ppt","pptx","xls","xlsx","xlsm","pdf","msg","hwp"],
        		maxCount : this.opts.USE_MULTI_FILE ? 500 : 1,
        		maxSize : "200MB",
        		maxTotalSize : "200MB"
        	};

        	var browser = system.navigatorname;

        	if( browser == "nexacro"){
        		alert("현재 사용중인 브라우저에서는 지원되지 않습니다.");
        	}else{
        		this.initFile();
        	}

        	if(!this.gfnIsEmpty(this.opts.BL_SEQ)) this.fnRetrieve();
        };
        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
         ************************************************************************************************/
         /**
         * @description 파일업/다운로드 관련 초기화 ok
        */
        this.initFile = function ()
        {
        	//확장자별 파일아이콘 설정.
        	this.initExtToIcon();

        	//==============================================
        	//	파일 업로드 컴포넌트 생성 및 설정
        	//==============================================
        	var name = this.gfnGetUniqueId("extUpload_");
        	var extUp = new nexacro.ExtFileUpload(name, this);
        	this.addChild(extUp.name, extUp);
        	this.extUp = extUp;

        	this.extUp.set_multiselect(this.opts.USE_MULTI_FILE);	// Multi선택
        	this.extUp.setResponseZone(this, this.staHelpMessage, this.grdUpload);	// Drag Drop 처리 컴포넌트 선언 처리


        	// == Event 설정 ==

        	//	파일 다이얼로그를 통해 파일을 선택했을 때 발생하는 이벤트입니다
        	this.extUp.addEventHandler("onchange", this.extUpload_onchange, this);

        	//통신 성공시에 발생하는 이벤트입니다
        	this.extUp.addEventHandler("onsuccess", this.extUpload_onsuccess, this);

        	//통신 오류 시 발생하는 이벤트입니다.
        	this.extUp.addEventHandler("onerror", this.fileUpload_onerror, this);

        	//HTML5 Only : XMLHttpRequest가 데이터를 보내거나 받는 동안 서버에서 정의된 간격으로 발생합니다.
        	// this.extUp.addEventHandler("onprogress", this.extUpload_onprogress, this);

        	//HTML5 Only : XMLHttpRequest 통신시 readystate 속성 변경 event
        	this.extUp.addEventHandler("onreadystatechange", this.extUpload_onreadystatechange, this);
        	this.extUp.show();



        	//==============================================
        	//	파일 다운로드 컴포넌트 생성 및 설정
        	//==============================================
        	var name = this.gfnGetUniqueId("extDownload_");
        	var extDown = new nexacro.ExtFileDownload(name, this);
        	this.addChild(extDown.name, extDown);
        	this.extDown = extDown;

        	// == Event 설정 ==

            //통신 성공시에 발생하는 이벤트입니다
            this.extDown.addEventHandler("onsuccess", this.extDownload_onsuccess, this);

        	//통신 오류 시 발생하는 이벤트입니다.
        	this.extDown.addEventHandler("onerror", this.extDownload_onerror, this);

        	this.extDown.show();

        	system.navigatorname

        	//==============================================
        	//	브라우저별 기능 표시
        	//==============================================
        	//Drag and Drop 미지원 브라우저 확인.
        	if(this.extUp.support.FileAPI == false)
        	{
        		this.staHelpMessage.set_visible(false);
        		this.staSupportDnd.set_color("red");
        		this.staSupportDnd.set_text("• Drag and Drop 미지원");
        	}

        	//XHR2와 FileAPI 지원하지 않을 경우 그리드 format 변경. ex) file 전송량 표시용 progress bar
        	if (!this.extUp.support.XHR2)
        	{
        		this.grdUpload.setFormat("format0");
        		this.grdDownload.setFormat("format0");
        		this.staSupportPgb.set_color("red");
        		this.staSupportPgb.set_text("• ProgressBar 미지원");
        	}

        	//Multiple File Selection.
        	if (!this.extUp.support.MultipleInput)
        	{
        		this.staSupportMulti.set_color("red");
        		this.staSupportMulti.set_text("• File 다중선택 미지원");
        	}
        };

        /**
         * @description 확장자별 파일 아이콘 설정	ok
        */
        this.initExtToIcon = function ()
        {
        	var extToIcon = this.extToIcon;
        	var iconInfo = this.iconInfo;

        	for (var name in iconInfo) {
        		var len = iconInfo[name].length;
        		for (var i=0; i<len; i++)
        		{
        			extToIcon[iconInfo[name][i]] = name;
        		}
        	}
        };

        /**
         * @description 파일 확장자에 해당하는 이미지경로 반환. OK
         * @param {string} fileName file name
        */
        this.getFileIcon = function(fileName)
        {
        	if(this.gfnIsNull(fileName)) return;

        	fileName = fileName.toLowerCase();
        	var ext = (/[.]/.exec(fileName)) ? /[^.]+$/.exec(fileName) : undefined;
        	var icon = this.extToIcon[ext];

        	if(icon == undefined) ext = "etc";

        	return "theme://images/" + this.extToIcon[ext] + ".png";
        };


        //===========================================================
        //				File Upload
        //===========================================================
        /**
         * @description 파일 다운로드 수행 ok
        */
        this.downloadFile = function (row)
        {
        	var dsUpload = this.dsUpload;

        	if (dsUpload.getRowType(row) == 2)
        	{
        		return;
        	}

        	var nSeq = dsUpload.getColumn(row,		"FL_SEQ");
        	var downloadUrl = this.fileConfig.host + this.fileConfig.downloadUrl;


        	// trace("URL:["+downloadUrl+"]");

        	//download file
        	//@param {=string} url 다운로드 fullPath url
        	//@param {string} filename 파일저장시 적용할 file name.(지원가능한 브라우저만 적용됨. 런타임 미지원)
        	//@return {boolean} 다운로드 성공여부
        	//this.extDown.download(downloadUrl + encodeFileName, fileName, nSeq);
        	this.extDown.download(downloadUrl, nSeq);
        };

        /**
         * @description 파일 유효성검증 OK
        */
        this.validateFile = function (cond)
        {
        	var rtn = 1;
        	this.gfnEach(cond, function(prop, val, object) {
        		var result = "";
        		if (prop == "name")
        		{
        			var fileExt = val.slice(val.lastIndexOf(".")+1).toLowerCase();
        			if(!this.gfnContains(this.fileConfig.allowTypes, fileExt))
        			{
        				alert("'" + fileExt + "' 유형의 파일은 업로드가 불가능합니다. [" + val + "]");
        				rtn = 0;
        				return false;
        			}
        		}
        		else if (prop == "length")
        		{
        			if (val >= this.fileConfig.maxCount)
        			{
        				alert(this.fileConfig.maxCount + "건 이상의 파일 업로드는 허용되지 않습니다.");
        				rtn = -1;
        				return false;
        			}
        		}
        		else if (prop == "size")
        		{
        			if (!isNaN(val) && (val >= this.sizeToByte(this.fileConfig.maxSize)))
        			{
        				alert(this.fileConfig.maxSize + " 이상의 파일 업로드는 허용되지 않습니다.");
        				rtn = 0;
        				return false;
        			}
        		}
        		else if (prop == "totalSize")
        		{
        			if (!isNaN(val) && (val >= this.sizeToByte(this.fileConfig.maxTotalSize)))
        			{
        				alert(this.fileConfig.maxTotalSize + " 이상의 파일 업로드는 허용되지 않습니다.");
        				rtn = -1;
        				return false;
        			}
        		}
        	}, this);

        	return rtn;
        };

        /**
         * @description size를 byte로 변환처리한다.
        */
        this.sizeToByte = function(fileSize)
        {
        	var unit = fileSize.match(/[^\d]+/g),
        		size = fileSize.match(/\d+/);

        	unit = unit ? unit[0].toLowerCase() : "";
        	size = size ? size[0] : fileSize;

        	if (unit == "mb")
        	{
        		return size * 1024 * 1024;
        	}
        	else if (unit == "gb")
        	{
        		return size * 1024 * 1024 * 1024;
        	}
        	else if (unit == "tb")
        	{
        		return size * 1024 * 1024 * 1024 * 1024;
        	}
        	else if (unit == "")
        	{
        		return size;
        	}
        	else
        	{
        		return fileSize;
        	}
        };

        /**
         * @description 데이터셋 업데이트 여부 확인
        */
        this.isUpdateDataset = function (ds)
        {
        	if(this.gfnIsNull(ds))
        	{
        		return false;
        	}

        	if(ds.getRowCount() < 1) return false;

        	if (ds.getDeletedRowCount() > 0)
        	{
        		return true;

        	}

        	if (ds.findRowExpr("(this.getRowType(rowidx)==Dataset.ROWTYPE_UPDATE)||(this.getRowType(rowidx)==Dataset.ROWTYPE_INSERT)") > -1)
        	{
        		return true;
        	}

        	return false;
        };



        /**
         * @descriptio 파일 삭제
         * @param {number} row 삭제대상 row OK
        */
        this.removeFile = function(row)
        {
        	var dsFiles = this.dsUpload;

        	this.grdUpload.set_enableredraw(false);
        	if (this.gfnIsNull(row) || row < 0)
        	{
        		return;
        	}

        	//해당 row의 rowtype이 normal이면 서버에서 삭제로직 추가.
        	//업로드가 성공한 후에는 ExtFileUpload에 존재하는 파일 정보가 사라진 상태.
        	if(dsFiles.getRowType(row) == 2) //신규 추가된 상태
        	{
        		var fileId = dsFiles.getColumn(row, "fileid");

        		//ExtFileUpDownload에서 내부적으로 가지고 있는 file정보 삭제.
        		this.extUp.removeFile(fileId);
        		dsFiles.deleteRow(row);
        	}
        	else
        	{
        		var nRow = this.ds_FileDelete.addRow();
        		this.ds_FileDelete.copyRow(nRow, this.dsUpload, row);
        		dsFiles.deleteRow(row);
        	}
        	this.grdUpload.set_enableredraw(true);
        };

        //===========================================================
        //				File DownLoad
        //===========================================================



         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        this.btn_Destroy_onclick = function(obj,e)
        {
        	this.fn_Close("");
        };

        this.btn_Close_onclick = function(obj,e)
        {
        	this.fn_Close("");
        };

        //===========================================================
        //				File Upload
        //===========================================================
        /**
         * @description 파일추가버튼이벤트
        */
        this.btnAddFile_onclick = function(obj,e)
        {
        	this.extUp.addFiles();

        	if(this.staHelpMessage.visible)	this.staHelpMessage.set_visible(false);
        };


        /**
         * @description 개별삭제이벤트 ok
        */
        this.grdUpload_oncellclick = function(obj,e)
        {
        	var rmCellIdx = 2;	// Delete cell Index(상수로 사용)


        	if (e.col == rmCellIdx)
        	{
        		this.removeFile(e.row);
        	}
        };

        /**
         * @description 저장버튼이벤트
        */
        this.btnSaveFile_onclick = function(obj,e)
        {
        	var deleteCnt = this.ds_FileDelete.rowcount;
        	if( !this.isUpdateDataset(this.dsUpload) && deleteCnt <=0 )
        	{
        		alert("변경된 내역이 없습니다");
        	}
        	else
        	{
        		var i = 0;

        		if (deleteCnt > 0)
        		{
        			this.gfnAddInputDataset("ds_FileDelete", "ds_FileDelete", "A");
        			this.gfnAddOutputDataset("dsRtnArgs", "dsRtnArgs");

        			var strSvcID = "FileDeleteCall";
        			var strModelNm = "CF_HFileMM_R02";
        			this.gfnCommonTransaction(strSvcID, strModelNm, "");
        		}
        		else
        		{
        			if(this.isUpdateDataset(this.dsUpload))
        			{
        				this.uploadFiles();
        			}
        			else
        			{
        				this.fnCallBack("FileDelete", "0", "");
        			}
        		}
        	}
        };






        /**
         * @description 파일업로드수행
        */
        this.uploadFiles = function ()
        {
        	var i, len, rowtype,
        		type, fileid, addFileLen,
        		ds_files = this.dsUpload;

        	var extUp = this.extUp;
        	addFileLen = extUp.getAddedFileLength() || 0;

        	if (addFileLen > 0)
        	{
        		if (!extUp.support.XHR2 || !extUp.support.FileAPI)
        		{
        			if (!this.imgLoading.visible)
        			{
        				var topform = this.gfnGetTopLevelForm(this);
        				var l = Math.round((topform.getOffsetWidth() - this.imgLoading.getOffsetWidth())/2);
        				var t = Math.round((topform.getOffsetHeight() - this.imgLoading.getOffsetHeight())/2);

        				this.imgLoading.move(l, t, this.imgLoading.getOffsetWidth(), this.imgLoading.getOffsetHeight());
        				this.imgLoading.set_visible(true);
        			}
        		}

        		var url = this.fileConfig.host + this.fileConfig.uploadUrl;

        		/*
        		런타임에서는 url parameter 설정만 가능!
        		HTML5는 아래 내용 참고
        			//  upload files
        			//  @param {=string} path upload url 정보. default는 상단의 extUp.set_uploadurl()에서 설정한 정보.
        			//  @param {string} inDatasetsParam input dataset 정보
        			//  @param {string} outDatasetsParam output dataset 정보
        			//  @param {string} transferType 전송유형.(all: 대상파일을 한번에 전송(defalut), each: 개별 전송)
        			//  @param {number} datatype data 전송방식. 0:XML, 1:Binary(Runtime only), 2:SSV

        			ds_download에 output dataset 결과는 extUpload_onsuccess 이벤트의 e.datasets에서 수신한다.
        		*/

        		var rtn = this.extUp.homepageUpload(url, "ds_input=dsUpload","ds_output=dsRtn", this.transferType, 0, this.opts.BOARD_CODE, this.opts.BL_SEQ, "INSERT");
        		if(rtn)
        		{
        			//alert("저장되었습니다.");
        		}

        		//[개별전송]
        		//this.transferType = "all";
        		//extUp.upload(url, "ds_input=ds_input","", this.transferType, 0);
        	}
        };


        this.dsUpload_oncolumnchanged = function(obj,e)
        {
        	obj.setColumn(e.row, "STATUS", obj.getRowType(e.row));
        };

        //===========================================================
        //				File DownLoad
        //===========================================================
        /**
         * @description 그리드 다운로드 더블클릭시 다운로드 실행 ok
        */
        this.grdUpload_oncelldblclick = function(obj,e)
        {
        	var sFlSeq = this.dsUpload.getColumn(this.dsUpload.rowposition,"FL_SEQ");
        	if(!this.gfnIsEmpty(sFlSeq))
        	{
        		this.downloadFile(e.row);
        	}
        	else
        	{
        		alert("게시글 저장 후 다운로드 해주세요.");
        	}
        };


        //=======================================================================================================================================
        //              ExtFileUpload Event
        //=======================================================================================================================================
        /**
         * @description 파일업로드 컴포넌트 체인지 이벤트 (파일 다이얼로그 파일을 선택) ok
        */
        this.extUpload_onchange = function(obj, e)
        {
        //	trace("extUpload_onchange !!!");

        	var ds = this.dsUpload;
        	var index = e.index;
         	var fileList = e.files;
         	var fileCount = fileList.length;
         	var fileSupport = (this.extUp.support.XHR2 && this.extUp.support.FileAPI);

        	for(var i=0; i<fileCount; i++)
        	{
        		var file = fileList[i];
        		var fileId   = file.id;
        		var fileName = file.name;
                var fileSize = file.size;
                var fileType = file.type;
                var fileFullpath = file.fullpath; 	//RUMTIME만 제공됨(HTML5는 빈문자열 반환). 2016.02.02


        		var dsCount = ds.getRowCount();
        		var cond;
        		if (fileSupport)
        		{
        			var totalSize = ds.getSum("FILE_SIZE") + fileSize;
        			cond = {"name" : fileName, "length" : dsCount, "size" : fileSize, "totalSize" : totalSize};
        		}
        		else
        		{
        			cond = {"name" : fileName, "length" : dsCount};
        		}

        		var valid = this.validateFile(cond);

        		//파일 유형 에러
        		if (valid == 0)
        		{
        			this.extUp.removeFile(fileId);
        			return;
        		}
        		else if (valid == -1) //최대 파일첨부가능 건수 또는 size 에러.
        		{
        			this.extUp.removeFile(fileId);
        			return;
        		}


        		var findRow = ds.findRow("FILE_NAME", fileName);

        		if(findRow > -1) {
        			alert("Duplicate name exists. [" + fileName + "]");
        			this.extUp.removeFile(fileId);
        			return;
        		}

        		// 업로드 파일 정보 데이타 구성
        		var addidx = ds.addRow();
        		var downImage = this.getFileIcon(fileName);
        		// ds.setColumn(addidx, "fileimg", downImage);
        		ds.setColumn(addidx, "fileid",		fileId);

        		ds.setColumn(addidx, "BOARD_CODE",	this.opts.BOARD_CODE);
        		ds.setColumn(addidx, "FILE_NAME",	fileName);
        		ds.setColumn(addidx, "DELETE_FLAG",	"N");

        		var sBlSeq = this.opts.BL_SEQ;
        		if(!this.gfnIsEmpty(sBlSeq))
        		{
        			ds.setColumn(addidx, "BL_SEQ",	sBlSeq);
        		}
        		if(fileSize > 0)
        		{
        			ds.setColumn(addidx, "FILE_SIZE", fileSize);
        		}
        	}
        };


        /**
         * @description [HTML5 Only] XMLHttpRequest 통신시 readystate 속성 변경 event
         * @param {ExtFileUpload} obj ExtFileUpload
         * @param {ExtFileReadystateChangEventInfo} e ExtFileReadystateChangEventInfo  ok
        */
        this.extUpload_onreadystatechange = function(obj, e)
        {
        	if(e.readyState == 4 ){
        		if(e.status != 200) {
        //			trace("extUpload_onreadystatechange > Fail request!!");
        			//TODO
        			//에러 발생에 따른 UI 처리

        			var ds = this.dsUpload;
        			var count = ds.rowcount;
        			for(var i=0; i<count; i++)
        			{
        				ds.setColumn(i, "prog", -1);
        			}

        		} else if(e.status == 200) {

        		}
        	}
        };

        /************************************************************************************************
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
        //===========================================================
        //				File UpLoad
        //===========================================================
        /**
         * @description 파일업로드 성공! ok
        */
        this.extUpload_onsuccess = function(obj, e)
        {
        //	trace("extUpload_onsuccess !!");

        	//e.fildId는 개별전송("each")시 수신.
        	if (this.imgLoading.visible)
        	{
        		this.imgLoading.set_visible(false);
        	}

        	this.dsUpload.applyChange();

        	if(e.datasets)
        	{
        		var outputDatasets = e.datasets;

        		if(outputDatasets.length == 0) return;

        		var outDs = outputDatasets[0];

        		// 파일 정보 데이터 parent 파일 목록에 넘겨주기
        		if(outDs.rowcount > 0)
        		{
        			this.dsRtnArgs.copyData(outDs);
        			this.fn_Close(this.dsRtnArgs);
        		}
        	}
        };


        //===========================================================
        //				File DownLoad
        //===========================================================
        /**
         * @description 다운로드 성공시에 발생하는 이벤트입니다 OK
        */
        this.extDownload_onsuccess = function(obj, e)
        {
        //	trace("	 ★ extFileDownload_onsuccess url=" + e.url);

        	if (this.imgLoading.visible)
        	{
        		this.imgLoading.set_visible(false);
        	}

        	if(!this.gfnIsNull(e.url))
        	{
        		alert("Successfully downloaded.");
        	}
        	else
        	{
        		alert("다운로드 실패");
        	}
        };

        //=======================================================================================================================================
        //              ExtFileDownload Event
        //=======================================================================================================================================
        /**
         * @description 통신 오류 시 발생하는 이벤트입니다 OK
        */
        this.extDownload_onerror = function(obj, e)
        {
          //런타임에서 e.errortype; <-- 원하는 type이 아닌 error object 가 전송됨.
        //	trace("An error occurred: extDownload_onerror index=" + e.index  + ", errortype=" + e.errortype   + "\n, statuscode=" + e.statuscode + ", requesturi=" + e.requesturi);

        	if (this.imgLoading.visible)
        	{
        		this.imgLoading.set_visible(false);
        	}
        };

         /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
         ************************************************************************************************/
        // 파일조회 OK
        this.fnRetrieve = function ()
        {
        	this.gfnAddSendParameter("BL_SEQ", this.opts.BL_SEQ);
        	this.gfnAddOutputDataset("dsUpload",  "ds_File");
        	this.gfnCommonTransaction("FileRetrieve", "CF_HFileMM_S02");
        };

        // callback
        this.fnCallBack = function (strSvcID, nErrorCode, strErrorMag)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(nErrorCode + " : " + strErrorMag);
        		return;
        	}

        	if (strSvcID == "FileRetrieve") // OK
        	{
        		if (this.dsUpload.rowcount > 0)
        		{
        			if(this.staHelpMessage.visible)	this.staHelpMessage.set_visible(false);
        		}

        		this.ds_FileInsert.clearData();
        		this.ds_FileDelete.clearData();

        // 		if(this.opts.USE_DELETE_ALL && this.dsUpload.rowcount > 0)
        // 		{
        // 			while(this.dsUpload.rowcount > 0)
        // 			{
        // 				this.removeFile(0);
        // 			}
        // 			this.btnSaveFile_onclick();
        // 		}
        	}
        	else if (strSvcID == "FileDelete")
        	{
        		if(this.dsUpload.rowcount == 0)
        		{
        			this.fn_Close("DELETE ALL");
        		}
        	}
        	else if (strSvcID == "FileDeleteCall")
        	{
        		if(this.isUpdateDataset(this.dsUpload))
        		{
        			this.uploadFiles();
        		}
        		else
        		{
        			this.fnCallBack("FileDelete", "0", "");
        		}
        	}
        };

        this.fn_Close = function(sArg)
        {
        	this.commUtil.popupClose(sArg);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CF_HomepageFileMM_onload,this);
            this.btn_Destroy.addEventHandler("onclick",this.btn_Destroy_onclick,this);
            this.btn_Close.addEventHandler("onclick",this.btn_Close_onclick,this);
            this.grdUpload.addEventHandler("oncellclick",this.grdUpload_oncellclick,this);
            this.grdUpload.addEventHandler("oncelldblclick",this.grdUpload_oncelldblclick,this);
            this.btnAddFile.addEventHandler("onclick",this.btnAddFile_onclick,this);
            this.btnDeleteAll.addEventHandler("onclick",this.btnDeleteAll_onclick,this);
            this.btnSaveFile.addEventHandler("onclick",this.btnSaveFile_onclick,this);
            this.dsUpload.addEventHandler("oncolumnchanged",this.dsUpload_oncolumnchanged,this);
            this.ds_FileInsert.addEventHandler("oncolumnchanged",this.dsUpload_oncolumnchanged,this);
            this.ds_FileDelete.addEventHandler("oncolumnchanged",this.dsUpload_oncolumnchanged,this);
        };
        this.loadIncludeScript("CF_HomepageFileMM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
