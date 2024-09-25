(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CF_AceFileMM");
            this.set_titletext("파일관리");
            this.set_cssclass("frm_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(924,500);
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
            obj._setContents("<ColumnInfo><Column id=\"fileid\" type=\"string\" size=\"255\"/><Column id=\"CHK\" type=\"string\" size=\"255\"/><Column id=\"SOURCE_CD\" type=\"string\" size=\"255\"/><Column id=\"SOURCE_TYPE\" type=\"string\" size=\"255\"/><Column id=\"SOURCE_CODE\" type=\"string\" size=\"255\"/><Column id=\"SOURCE_CODE1\" type=\"string\" size=\"255\"/><Column id=\"DESCRIPTION\" type=\"string\" size=\"255\"/><Column id=\"USE_FLAG\" type=\"string\" size=\"255\"/><Column id=\"INSERT_EMPNO\" type=\"string\" size=\"255\"/><Column id=\"INSERT_DEPT\" type=\"string\" size=\"255\"/><Column id=\"ATTACH_KIND\" type=\"string\" size=\"255\"/><Column id=\"INSERT_EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FM_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_FileInsert", this);
            obj._setContents("<ColumnInfo><Column id=\"fileid\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SOURCE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SOURCE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SOURCE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SOURCE_CODE1\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FM_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_FileDelete", this);
            obj._setContents("<ColumnInfo><Column id=\"fileid\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"SOURCE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SOURCE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SOURCE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"SOURCE_CODE1\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_EMPNM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FM_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRtnArgs", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"AAM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"FM_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_NEXT_FILE_TYPE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ContractList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_NextFileType", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRtn", this);
            obj._setContents("<ColumnInfo><Column id=\"FM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"AAM_SEQ\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_AttachMasterSeq", this);
            obj._setContents("<ColumnInfo><Column id=\"AAM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_NUMBER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_AttachMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"SM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"AUDIT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RTS_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_NUMBER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_Destroy",null,"10","15","15","10",null,null,null,null,null,this);
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

            obj = new Button("btn_Close",null,null,"57","22","10","7",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_cancel");
            obj.set_tooltiptext("ESC");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","8","44",null,null,"8","44",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("#f4f8fc");
            obj.set_border("1px solid #bad3ec");
            obj.set_borderRadius("10px");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Grid("grdFileKind","16","84","150",null,null,"52",null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_borderRadius("5px");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_NextFileType");
            obj.set_cellsizingtype("col");
            obj.set_formatid("default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"118\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"파일종류\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" combodataset=\"ds_CD_NEXT_FILE_TYPE\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" text=\"bind:CAPTION\" combotype=\"dropdown\" combobuttonsize=\"20 20\" textAlign=\"left\"/></Band></Format><Format id=\"mobile\"><Columns><Column size=\"30\"/><Column size=\"118\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"파일종류\"/></Band><Band id=\"body\"><Cell text=\"expr:currow+1\"/><Cell col=\"1\" combodataset=\"ds_CD_NEXT_FILE_TYPE\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" text=\"bind:CAPTION\" combotype=\"dropdown\" combobuttonsize=\"20 20\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdUpload","grdFileKind:7","84",null,null,"16","52",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_borderRadius("5px");
            obj.set_binddataset("dsUpload");
            obj.set_autofittype("col");
            obj.set_formatid("default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"48\"/><Column size=\"60\"/><Column size=\"430\"/><Column size=\"60\"/></Columns><Rows><Row size=\"50\"/></Rows><Band id=\"body\"><Cell combodataset=\"ds_CD_NEXT_FILE_TYPE\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" text=\"bind:STATUS_CD\" displaytype=\"combotext\" combotype=\"dropdown\" combobuttonsize=\"20 20\" edittype=\"expr:dataset.getRowType(currow)==2?&apos;combo&apos;:&apos;none&apos;\"/><Cell col=\"1\" expr=\"SHARE_FLAG == &quot;1&quot; ? &quot;Link&quot; : &quot;File&quot;\"/><Cell col=\"2\" displaytype=\"imagecontrol\" text=\"expr:comp.parent.getFileIcon(FILE_NAME)\"/><Cell col=\"3\" text=\"bind:FILE_NAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"theme://images/btn_del.png\" displaytype=\"imagecontrol\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddFile",null,"52","90","25","91",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_background("#1abd9c");
            obj.set_font("bold 10px \"antialias\"");
            obj.set_color("#ffffff");
            obj.set_icon("URL(\"theme://images/file_btn_AddFiles.png\")");
            obj.set_iconPosition("left");
            obj.set_textPadding("0px 0px 0px 10px");
            obj.set_text("Add Files");
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

            obj = new Button("btnSaveFile",null,"52","70","25","16",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_background("#298ae1");
            obj.set_font("bold 10px \"antialias\"");
            obj.set_color("#ffffff");
            obj.set_icon("URL(\"theme://images/file_btn_Save.png\")");
            obj.set_iconPosition("left");
            obj.set_textPadding("0px 0px 0px 10px");
            obj.set_text("Save");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgLoading","grdFileKind:282","234",null,"60","279",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_background("url(\'theme://images/loading.gif\') no-repeat");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("st_Type","21","56","51","16",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("파일타입");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Type","77","53","70","22",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("NAME");
            obj.set_tooltiptext("File : 파일을 서버에 저장합니다.\r\nLink : 파일의 Link정보만 서버에 저장합니다.");
            obj.set_innerdataset("ds_CmbType");
            obj.set_visible("false");
            obj.set_text("File");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddLinkFile",null,"52","106","25","186",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_background("#1abd9c");
            obj.set_font("bold 10px \"antialias\"");
            obj.set_color("#ffffff");
            obj.set_icon("URL(\"theme://images/file_btn_AddFiles.png\")");
            obj.set_iconPosition("left");
            obj.set_textPadding("0px 0px 0px 10px");
            obj.set_text("Add Link Files");
            obj.set_borderRadius("5px");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_ContractList","174","53","450","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_visible("false");
            obj.set_innerdataset("ds_ContractList");
            obj.set_codecolumn("CONTRACT_NO");
            obj.set_datacolumn("NAME");
            obj.set_value("0");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("staHelpMessage","179","89",null,null,"21","57",null,null,null,null,this);
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
            obj = new Layout("default","Desktop_screen",924,500,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("파일관리");
                p.set_cssclass("frm_popBg");

                p.btn_Destroy.set_taborder("0");
                p.btn_Destroy.set_cssclass("btn_POP_Cls");
                p.btn_Destroy.set_hotkey("ESCAPE");
                p.btn_Destroy.set_tooltiptext("ESC");
                p.btn_Destroy.move(null,"10","15","15","10",null);

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
                p.btn_Close.move(null,null,"57","22","10","7");

                p.sta00.set_taborder("4");
                p.sta00.set_background("#f4f8fc");
                p.sta00.set_border("1px solid #bad3ec");
                p.sta00.set_borderRadius("10px");
                p.sta00.set_text("");
                p.sta00.move("8","44",null,null,"8","44");

                p.grdFileKind.set_taborder("14");
                p.grdFileKind.set_borderRadius("5px");
                p.grdFileKind.set_autofittype("col");
                p.grdFileKind.set_binddataset("ds_NextFileType");
                p.grdFileKind.set_cellsizingtype("col");
                p.grdFileKind.set_formatid("default");
                p.grdFileKind.move("16","84","150",null,null,"52");

                p.grdUpload.set_taborder("5");
                p.grdUpload.set_borderRadius("5px");
                p.grdUpload.set_binddataset("dsUpload");
                p.grdUpload.set_autofittype("col");
                p.grdUpload.set_formatid("default");
                p.grdUpload.move("grdFileKind:7","84",null,null,"16","52");

                p.btnAddFile.set_taborder("7");
                p.btnAddFile.set_background("#1abd9c");
                p.btnAddFile.set_font("bold 10px \"antialias\"");
                p.btnAddFile.set_color("#ffffff");
                p.btnAddFile.set_icon("URL(\"theme://images/file_btn_AddFiles.png\")");
                p.btnAddFile.set_iconPosition("left");
                p.btnAddFile.set_textPadding("0px 0px 0px 10px");
                p.btnAddFile.set_text("Add Files");
                p.btnAddFile.set_borderRadius("5px");
                p.btnAddFile.move(null,"52","90","25","91",null);

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
                p.btnSaveFile.set_text("Save");
                p.btnSaveFile.set_borderRadius("5px");
                p.btnSaveFile.move(null,"52","70","25","16",null);

                p.imgLoading.set_taborder("10");
                p.imgLoading.set_background("url(\'theme://images/loading.gif\') no-repeat");
                p.imgLoading.set_visible("false");
                p.imgLoading.move("grdFileKind:282","234",null,"60","279",null);

                p.st_Type.set_taborder("11");
                p.st_Type.set_text("파일타입");
                p.st_Type.set_visible("false");
                p.st_Type.move("21","56","51","16",null,null);

                p.cmb_Type.set_taborder("12");
                p.cmb_Type.set_codecolumn("CODE");
                p.cmb_Type.set_datacolumn("NAME");
                p.cmb_Type.set_tooltiptext("File : 파일을 서버에 저장합니다.\r\nLink : 파일의 Link정보만 서버에 저장합니다.");
                p.cmb_Type.set_innerdataset("ds_CmbType");
                p.cmb_Type.set_visible("false");
                p.cmb_Type.set_text("File");
                p.cmb_Type.set_value("0");
                p.cmb_Type.set_index("0");
                p.cmb_Type.move("77","53","70","22",null,null);

                p.btnAddLinkFile.set_taborder("13");
                p.btnAddLinkFile.set_background("#1abd9c");
                p.btnAddLinkFile.set_font("bold 10px \"antialias\"");
                p.btnAddLinkFile.set_color("#ffffff");
                p.btnAddLinkFile.set_icon("URL(\"theme://images/file_btn_AddFiles.png\")");
                p.btnAddLinkFile.set_iconPosition("left");
                p.btnAddLinkFile.set_textPadding("0px 0px 0px 10px");
                p.btnAddLinkFile.set_text("Add Link Files");
                p.btnAddLinkFile.set_borderRadius("5px");
                p.btnAddLinkFile.set_visible("false");
                p.btnAddLinkFile.move(null,"52","106","25","186",null);

                p.cmb_ContractList.set_taborder("15");
                p.cmb_ContractList.set_visible("false");
                p.cmb_ContractList.set_innerdataset("ds_ContractList");
                p.cmb_ContractList.set_codecolumn("CONTRACT_NO");
                p.cmb_ContractList.set_datacolumn("NAME");
                p.cmb_ContractList.set_value("0");
                p.cmb_ContractList.set_index("0");
                p.cmb_ContractList.move("174","53","450","22",null,null);

                p.staHelpMessage.set_taborder("6");
                p.staHelpMessage.set_background("#ffffff");
                p.staHelpMessage.set_border("1px dashed #aac9e7");
                p.staHelpMessage.set_borderRadius("10px");
                p.staHelpMessage.set_text("마우스로 파일을 끌어오세요");
                p.staHelpMessage.set_color("#8e8e8e");
                p.staHelpMessage.set_font("14px/normal \"돋움\"");
                p.staHelpMessage.set_textAlign("center");
                p.staHelpMessage.move("179","89",null,null,"21","57");
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

                p.cmb_ContractList.move("174","44",null,"30","95",null);

                p.grdFileKind.set_formatid("mobile");
                p.grdFileKind.move("4","117",null,"209","4",null);

                p.staHelpMessage.move("12","338",null,null,"12","52");

                p.grdUpload.move("4","330",null,null,"4","43");

                p.cmb_Type.move("93","44","78","30",null,null);

                p.st_Type.move("21","44","75","30",null,null);

                p.btnAddFile.move(null,"78","90","30","8",null);

                p.btnSaveFile.move(null,"44","80","30","8",null);

                p.btnAddLinkFile.move(null,"78","106","30","103",null);

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
        this.addIncludeScript("CF_AceFileMM.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("CF_AceFileMM.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("CF_AceFileMM.xfdl","Script::ExtFileUpDownload.xjs");
        this.addIncludeScript("CF_AceFileMM.xfdl","Script::ext_CommEco.xjs");
        this.registerScript("CF_AceFileMM.xfdl", function() {
        /************************************************************************************************
         * 01. 업무구분 : 공통 - 파일관리
         * 02. 화면명   : 파일관리(CM_AceFileMM)
         * 03. 화면설명 : 파일관리를 위한 공통 팝업화면
         * 04. 작성일   : 2021.06.xx
         * 05. 작성자   : 박종언
         * 06. 수정이력 :
         ***********************************************************************************************
         *     수정일          이  름    사유
         ***********************************************************************************************
         *
         *
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
        				,SOURCE_TYPE:null			// O / string / 파일을 저장하려는 소스 코드 ( 파일 구분 )
        				,SOURCE_CODE:null			// O / string / 파일을 저장하려는 번호 또는 문서번호 ( 파일 구분이 AAM 일때는 필수 X )
        				,SOURCE_CODE1:null			// X / string / 파일 저장 회차
        				,FM_SEQ:null				// X / string / 파일 저장한 일련번호(파일 일련번호)
        				,STATUS_CD:null				// X / string / 저장된 파일을 구분할 세번째 키 값 (공통코드 NEXT_FILE_TYPE)
        				,RT_SEQ:null				// X / string / 결과 순번 ( ds_Result )
        				,RTS_SEQ:null				// X / string / 테스트 절차 순번 ( ds_TestStep )
        				,SM_SEQ:null				// X / string / 회차 (AAM파일 사용)
        				,AUDIT_SEQ:null				// X / string / 문서번호 (AAM파일 사용)

        				,USE_NEXT_FILE_TYPE:false	// X / bool / 공통코드 NEXT_FILE_TYPE을 사용할지 여부 (저장 시 사용, 조회는 STATUS_CD에 따라 다름)
        				,USE_LINK_TYPE:false		// X / bool / 링크 형태의 파일을 사용할지 여부 (구NEXT의 매출계약에서만 사용가능, 구현여부 고민필요)
        				,USE_MULTI_FILE:true		// X / bool / 다중파일 선택, 저장 가능여부
        				,USE_OPEN_ADD_DIALOG:false	// X / bool / 파일등록 팝업 시 파일선택 화면 즉시 출력여부 (동작안함)
        				,USE_DELETE_ALL:false		// X / bool / 파일등록 팝업 시 등록된 파일을 모두 삭제할지 여부 (삭제 후 저장까지 즉시처리)
        				,USE_BUTTON_ONLY:false		// X / bool / 버튼 형태로만 사용할 경우 (파일보기[n], 파일등록)
        				,AAM_MULTI:false			// X / bool / AAM 파일인 경우 멀티 업로드 구분
        			}

        var strFileName;
        /************************************************************************************************
         * FORM 영역
         ************************************************************************************************/
        this.CF_AceFileMM_onload = function(obj,e)
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

        	if(!this.opts.USE_NEXT_FILE_TYPE)
        	{
        		this.grdUpload.setFormatColProperty(0,"size",0);
        		if(this.commUtil.gfnGetMobile())
        		{
        			this.grdFileKind.set_height(0);
        			this.grdUpload.set_top(109);
        			//this.grdUpload.set_height(618);
        			this.staHelpMessage.set_top(117);
        			//this.staHelpMessage.set_height(602);
        		}
        		else
        		{
        			this.grdFileKind.set_width(0);
        			this.grdUpload.set_left(16)
        			this.staHelpMessage.set_left(21);
        		}
        	}

        	if(!this.opts.USE_LINK_TYPE)
        	{
        		this.grdUpload.setFormatColProperty(1,"size",0);
        	} else {
        		// 조건값(Rarameter) 셋팅
        		this.gfnAddSendParameter("SOURCE_TYPE",		this.opts.SOURCE_TYPE);
        		this.gfnAddSendParameter("SOURCE_CODE",		this.opts.SOURCE_CODE);
        		this.gfnAddSendParameter("SOURCE_CODE1",	this.opts.SOURCE_CODE1);

        		// 조회용 Output dataset 세팅
        		this.gfnAddOutputDataset("ds_ContractList"	, "dsOutput");
        		this.gfnCommonTransaction("ContractList", "CF_NFileMM_S03");
        	}

        	this.fileConfig = {
        		host : this.gfnGetServerUrl(),
        		//uploadUrl : "File/saveFile.jsp?path=nexacro",
        		uploadUrl :	"FrontControllerServlet.do"
        					 +	"?service=xupservice"
        					 +	"&domain=NEXTp"
        					 +	"&model=AA_FileUpload_R01"
        					 +	"&format=xml"
        					 +	"&version=xplatform",

        		//downloadUrl : "File/downloadFile.jsp?path=nexacro&fileName=",
        		downloadUrl	: "FrontControllerServlet.do"
        						+ "?service=xupservice"
        						+ "&domain=NEXTp"
        						+ "&model=AA_FileUpload_S04"
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

        	// 파일 구분이 AAM이 아니거나 파일 AAM 멀티 업로드가 아닌 경우
        	if(this.opts.SOURCE_TYPE != "AAM" || !this.opts.AAM_MULTI)
        	{
        		this.fnRetrieve();
        	}
        };




        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
         ************************************************************************************************/
         this.fnGetCode = function()
        {
        	/*프로젝트일경우 프로젝트매출계약(CL) 첨부파일을 불러온다*/
        	this.gfnAddCodeDataset("ds_CD_NEXT_FILE_TYPE", "FILE_"+(this.opts.SOURCE_CD=="P"?"CL":this.opts.SOURCE_CD));
        	this.gfnCodeTransaction();
        }
         /**
         * @description 파일업/다운로드 관련 초기화
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
         * @description 확장자별 파일 아이콘 설정
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
         * @description 파일 확장자에 해당하는 이미지경로 반환.
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
         * @description 파일 다운로드 수행
        */
        this.downloadFile = function (row)
        {
        	var dsUpload = this.dsUpload;

        	if (dsUpload.getRowType(row) == 2)
        	{
        		return;
        	}

        	var nSeq = dsUpload.getColumn(row,		"FM_SEQ");
        	var downloadUrl = this.fileConfig.host + this.fileConfig.downloadUrl;


        	//trace("URL:["+downloadUrl+"]");

        	//download file
        	//@param {=string} url 다운로드 fullPath url
        	//@param {string} filename 파일저장시 적용할 file name.(지원가능한 브라우저만 적용됨. 런타임 미지원)
        	//@return {boolean} 다운로드 성공여부
        	//this.extDown.download(downloadUrl + encodeFileName, fileName, nSeq);
        	this.extDown.download(downloadUrl, nSeq);
        };

        /**
         * @description 파일 유효성검증
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
         * @param {number} row 삭제대상 row
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
        	if(dsFiles.getRowType(row) == 2) //수정된 상태
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
        	this.fn_Close("close");
        };

        this.btn_Close_onclick = function(obj,e)
        {
        	this.fn_Close("close");
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
         * @description 파일링크추가버튼이벤트
        */
        this.btnAddLinkFile_onclick = function(obj,e)
        {
        	//this.commUtil.popup(this, "TR_RequestOnsiteEduReg", "Technique::TR_RequestOnsiteEduReg.xfdl", -1, -1, 933, 814, true, false, false, {strFormType:"TA",rtsSeq:nRtsSeq}, "fnPopupCallBack");
        	// alert("개발중입니다.");


        	//링크타입의 파일 처리 구현 필요
        	var nRow = this.cmb_ContractList.index;
        	var Argument = {	pv_SourceCd : this.opts.SOURCE_CD,
        						pv_SourceSeq : this.cmb_ContractList.value
        					};
        	this.commUtil.popup(this, "AddLinkFile", "sales::comm/CF_LinkFileSearch.xfdl", -1, -1, 700, 400, true, false, false, Argument, "fnPopupCallBack");
        };


        /**
         * @description 전체삭제버튼이벤트
         * 기능 정상동작하지 않음. 주석처리 ingyu 20180928
        */
        /*
        this.btnDeleteAll_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        {
        	this.grdUpload.set_enableredraw(false);
        	this.extUp.removeAll();
        	this.dsUpload.clearData();
        	this.grdUpload.set_enableredraw(true);
        };
        */

        /**
         * @description 개별삭제이벤트
        */
        this.grdUpload_oncellclick = function(obj,e)
        {
        	var rmCellIdx = 4;	// Delete cell Index(상수로 사용)


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
        		var insertCnt = 0;


        		// Link 처리
        		for (var i=0; i<this.dsUpload.rowcount; i++) {
        			var sShareFlag = this.dsUpload.getColumn(i, "SHARE_FLAG");
        			if (sShareFlag == "1") {
        				if (this.dsUpload.getRowType(i) == 2) 	// Dataset.ROWTYPE_INSERT
        				{
        					var nRow = this.ds_FileInsert.addRow();
        					this.ds_FileInsert.copyRow(nRow, this.dsUpload, i);

        					insertCnt++;
        				}
        			}
        		}

        		// 삭제 데이터 or Link 파일이 있는 경우
        		if (deleteCnt > 0 || insertCnt > 0)
        		{
        			this.gfnAddInputDataset("ds_FileDelete", "ds_FileDelete", "A");
        			//this.gfnAddInputDataset("ds_FileInsert", "ds_FileInsert", "A");
        			this.gfnAddOutputDataset("dsRtnArgs", "dsRtnArgs");

        			var strSvcID = "FileDeleteCall";
        			var strModelNm = "AA_FileUpload_R02";
        			this.gfnCommonTransaction(strSvcID, strModelNm, "");
        		}
        		else
        		{
        			// 첨부파일이 있는 경우
        			if(this.isUpdateDataset(this.dsUpload))
        			{
        				// AAM 신규 다중 업로드 시
        				if(this.opts.SOURCE_TYPE == "AAM" || this.opts.AAM_MULTI)
        				{
        					for(var i = 0; i < this.dsUpload.rowcount; i++)
        					{
        						var nRow = this.ds_AttachMaster.addRow();
        						this.ds_AttachMaster.setColumn(nRow, "SM_SEQ", 		this.opts.SM_SEQ);
        						this.ds_AttachMaster.setColumn(nRow, "AUDIT_SEQ",	this.opts.AUDIT_SEQ);
        						this.ds_AttachMaster.setColumn(nRow, "RT_SEQ",		this.opts.RT_SEQ);
        						this.ds_AttachMaster.setColumn(nRow, "RTS_SEQ",		this.opts.RTS_SEQ);
        						this.ds_AttachMaster.setColumn(nRow, "ATTACH_KIND",	"1");
        					}
        					this.fn_AttachMasterMultiInsert();
        				}
        				else // AAM 단건 or AMT 업로드 시
        				{
        					this.uploadFiles();
        				}
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
        		//trace("upload url =>"+url);

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

        		//[전체전송]
        		var rtn = this.extUp.upload(url, "ds_input=dsUpload","ds_output=dsRtn", this.transferType, 0, this.opts.SOURCE_TYPE, this.opts.SOURCE_CODE, this.opts.SOURCE_CODE1);
        		if(rtn)
        		{
        			alert("저장되었습니다.");
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
         * @description 그리드 다운로드 더블클릭시 다운로드 실행
        */
        this.grdUpload_oncelldblclick = function(obj,e)
        {
        	this.downloadFile(e.row);
        };


        //=======================================================================================================================================
        //              ExtFileUpload Event
        //=======================================================================================================================================
        /**
         * @description 파일업로드 컴포넌트 체인지 이벤트 (파일 다이얼로그 파일을 선택)
        */
        this.extUpload_onchange = function(obj, e)
        {
        	//trace("extUpload_onchange !!!");

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

        		ds.setColumn(addidx, "FILE_NAME",	fileName);
        		ds.setColumn(addidx, "USE_FLAG",	"1");
        		ds.setColumn(addidx, "SOURCE_TYPE",	this.opts.SOURCE_TYPE);
        		if(this.opts.SOURCE_TYPE == "AAM" && this.opts.AAM_MULTI)
        		{
        			ds.setColumn(addidx, "SOURCE_CODE",	"");
        		}
        		else
        		{
        			ds.setColumn(addidx, "SOURCE_CODE",	this.opts.SOURCE_CODE);
        		}
        		ds.setColumn(addidx, "SOURCE_CODE1",	this.opts.SOURCE_CODE1);

        		strFileName = fileName;

        // 		var statusCd = this.opts.STATUS_CD;
        // 		if(this.gfnIsEmpty(statusCd))
        // 		{
        // 			statusCd = this.ds_NextFileType.getColumn(this.ds_NextFileType.rowposition, "CODE");
        // 		}
        // 		ds.setColumn(addidx, "STATUS_CD",	statusCd);

        // 		if(this.opts.SOURCE_CD=="P" && this.gfnIsEmpty(statusCd))
        // 		{
        // 			if(this.confirm("첨부파일이 견적서 파일입니까?"))
        // 			{
        // 				statusCd = "004";
        // 			}
        // 		}
        // 		if(this.gfnIsEmpty(statusCd)&&this.opts.USE_NEXT_FILE_TYPE)
        // 		{
        // 			alert("파일종류를 선택후 업로드 바랍니다.");
        // 			ds.deleteRow(addidx);
        // 			return;
        // 		}
        //		ds.setColumn(addidx, "STATUS_CD",	statusCd);
        		if(fileSize > 0)
        		{
        			ds.setColumn(addidx, "FILE_SIZE", fileSize);
        		}
        	}
        };


        /**
         * @description [HTML5 Only] XMLHttpRequest 통신시 readystate 속성 변경 event
         * @param {ExtFileUpload} obj ExtFileUpload
         * @param {ExtFileReadystateChangEventInfo} e ExtFileReadystateChangEventInfo
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


        //=======================================================================================================================================
        //              ExtFileDownload Event
        //=======================================================================================================================================
        /**
         * @description 통신 오류 시 발생하는 이벤트입니다
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
         * CALLBACK 콜백 처리부분(Transaction, Popup)
         ************************************************************************************************/
        //===========================================================
        //				File UpLoad
        //===========================================================
        /**
         * @description 파일업로드 성공!
        */
        this.extUpload_onsuccess = function(obj, e)
        {
        	//trace("extUpload_onsuccess !!");

        	//e.fildId는 개별전송("each")시 수신.
        	if (this.imgLoading.visible)
        	{
        		this.imgLoading.set_visible(false);
        	}

        	this.dsUpload.applyChange();

        	if(e.datasets)
        	{
        		var outputDatasets = e.datasets;
        		//trace(outputDatasets[0].saveXML());

        		if(outputDatasets.length == 0) return;

        		var outDs = outputDatasets[0];
        		//var ds = this.dsDownload;

        		//개별전송 처리로직
        		if(this.transferType == "each")
        		{
        			if (this.extUp.support.XHR2) {
        				//var row = ds.addRow();
        				//ds.copyRow(row, outDs, 0);

        				//개별파일 전송시. "each"
        				var fileId = e.fileId;
        				if(fileId){
        					var ds = this.dsUpload;
        					var row = ds.findRow("FILE_NAME", fileId);
        //					trace("### [개별전송] extUpload_onsuccess :" +" e.fileId=" + e.fileId);
        					//ds.setColumn(row, "prog", 100);
        				}

        			}
        		}

        		// SOURCE_TYPE : AAM 이면서 첨부파일을 한 경우 바로 AM_ATTACH_MASTER INSERT 해준다.
        		if(this.opts.SOURCE_TYPE == 'AAM' && !this.opts.AAM_MULTI)
        		{
        			var strAAMSeq = outDs.getColumn(0, "AAM_SEQ");
        			this.opener.fn_AttachMasterInsert( strAAMSeq, strFileName );
        			this.fn_Close("");
        		}
        		else if(this.opts.SOURCE_TYPE == 'AAM' && this.opts.AAM_MULTI)
        		{
        			this.opener.fn_QueryDataDetail( this.opts.RTS_SEQ );
        			this.fn_Close("");
        		}
        	}
        };


        //===========================================================
        //				File DownLoad
        //===========================================================
        /**
         * @description 다운로드 성공시에 발생하는 이벤트입니다
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



         /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
         ************************************************************************************************/
        // 파일조회
        this.fnRetrieve = function ()
        {
        	var state = "";
        	if (this.opts.STATUS_CD == 'INSERT')
        	{
        		state = "INSERT";
        	}

        	this.gfnGetAceFiles(
        						"FileRetrieve"
        						,{
        							 DS_OUT_NAME	:	"dsUpload"
        							,SOURCE_TYPE	:	this.opts.SOURCE_TYPE
        							,SOURCE_CODE	:	this.opts.SOURCE_CODE
        							,SOURCE_CODE1	:	this.opts.SOURCE_CODE1
        							,RT_SEQ			:	this.opts.RT_SEQ
        							,RTS_SEQ		:	this.opts.RTS_SEQ
        							,ARR_GRD		:	this.opts.ARR_GRD
        							,STATE			:	state
        						}
        					);		// 신규등록여부
        };



        // callback
        this.fnCallBack = function (strSvcID, nErrorCode, strErrorMag)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(nErrorCode + " : " + strErrorMag);
        		return;
        	}

        	if (strSvcID == "FileRetrieve")
        	{
        		if (this.dsUpload.rowcount > 0)
        		{
        			if(this.staHelpMessage.visible)	this.staHelpMessage.set_visible(false);
        		}

        		this.ds_FileInsert.clearData();
        		this.ds_FileDelete.clearData();

        		if(this.opts.USE_OPEN_ADD_DIALOG)
        		{
        			if(this.opts.USE_MULTI_FILE || (!this.opts.USE_MULTI_FILE && this.dsUpload.rowcount == 0))
        			{
        				//아래코드 두줄 모두 동작안함, 원인파악필요
        				this.btnAddFile.click();
        				//this.extUp.addFiles();
        			}
        		}
        		if(this.opts.USE_DELETE_ALL && this.dsUpload.rowcount > 0)
        		{
        			while(this.dsUpload.rowcount > 0)
        			{
        				this.removeFile(0);
        			}
        			this.btnSaveFile_onclick();
        		}
        	}
        	else if (strSvcID == "FileSave")
        	{
        // 		trace(this.dsRtnArgs.saveXML());
        // 		this.fn_Close(this.dsRtnArgs);
        	}
        	else if (strSvcID == "FileDelete")
        	{
        		// this.fn_Close(strSvcID);
        		if(this.opts.USE_DELETE_ALL && this.dsUpload.rowcount == 0)
        		{
        			this.fn_Close("deleteAll");
        		}
        	}
        	else if (strSvcID == "FileDeleteCall")
        	{
        		this.opts.SOURCE_SEQ = this.opts.SOURCE_SEQ == "0" ? (this.dsRtnArgs.getRowCount() > 0 ? this.dsRtnArgs.getColumn(0, "SOURCE_SEQ") : this.opts.SOURCE_SEQ) : this.opts.SOURCE_SEQ;

        		if(this.isUpdateDataset(this.dsUpload))
        		{
        			this.uploadFiles();
        		}
        		else
        		{
        			this.fnCallBack("FileDelete", "0", "");
        		}
        	}
        	else if(strSvcID=="gfnGetCode")
        	{
        		if(this.opts.USE_NEXT_FILE_TYPE)
        		{
        			this.ds_NextFileType.set_enableevent(false);
        			this.ds_NextFileType.assign(this.ds_CD_NEXT_FILE_TYPE);
        			this.ds_NextFileType.insertRow(0);
        			this.ds_NextFileType.setColumn(0, "CAPTION", "전체");
        			this.ds_NextFileType.set_enableevent(true);
        			this.ds_NextFileType.set_rowposition(0);
        			this.btnAddFile.set_visible(false);
        		}
        	}
        	else if (strSvcID=="ContractList")
        	{
        		this.cmb_ContractList.set_index(0);
        	}
        	else if (strSvcID=="AM_ATTACH_MASTER_Save")
        	{
        		var sInsertSeqCnt = this.ds_AttachMasterSeq.rowcount;
        		var sSourceCd = "";

        		this.dsUpload.set_enableevent(false);
        		for(var i = 0; i < sInsertSeqCnt; i++)
        		{
        			this.dsUpload.setColumn(i, "SOURCE_CODE", this.ds_AttachMasterSeq.getColumn(i, "AAM_SEQ"));
        			sSourceCd += this.ds_AttachMasterSeq.getColumn(i, "AAM_SEQ") + ",";
        		}
        		this.dsUpload.set_enableevent(true);
        		this.opts.SOURCE_CODE = sSourceCd;

        		// 파일 업로드 시작
        		this.uploadFiles();
        	}
        };

        this.fnPopupCallBack = function(sPopupId, Variant)
        {
        	Variant = this.commUtil.popupReturn();
        	if(this.gfnIsEmpty(Variant))
        	{
        		return;
        	}
        	else
        	{
        		this.recentVariant = Variant;
        		switch(sPopupId)
        		{
        			case "AddLinkFile":
        				var ds = new nexacro.Dataset();
        				ds.loadXML(Variant);
        				this.recentVariant = ds;

        				// return 정보가 없으면 종료
        				if (ds.rowcount<=0) return;

        				for (var i=0; i<ds.rowcount; i++) {

        					var sFmseq = ds.getColumn(i, "FM_SEQ")
        					var nFindRow = this.dsUpload.findRow("FM_SEQ", sFmseq);
        					// trace(sFmseq + " // "+nFindRow);

        					if (nFindRow<0) {
        						var addidx = this.dsUpload.addRow();
        						var sFileNm = ds.getColumn(i, "FILE_NAME");
        						// var downImage = this.getFileIcon(sFileNm);

        						this.dsUpload.setColumn(addidx, "FM_SEQ",		 ds.getColumn(i, "FM_SEQ"));
        						this.dsUpload.setColumn(addidx, "SHARE_FLAG",	"1");
        						this.dsUpload.setColumn(addidx, "FILE_NAME",	sFileNm);
        						this.dsUpload.setColumn(addidx, "FILE_TYPE",	"0");
        						this.dsUpload.setColumn(addidx, "DEL_FLAG",		"N");
        						this.dsUpload.setColumn(addidx, "SOURCE_CD",	this.opts.SOURCE_CD);
        						this.dsUpload.setColumn(addidx, "SOURCE_SEQ",	this.opts.SOURCE_SEQ);
        						this.dsUpload.setColumn(addidx, "STATUS_CD",	ds.getColumn(i, "STATUS_CD"));
        					}
        				}
        				if (this.dsUpload.rowcount>0)	this.staHelpMessage.set_visible(false);

        			break;


        		}
        	}
        }

        this.fn_Close = function(sArg)
        {
        	this.commUtil.popupClose(sArg);
        }

        this.ds_NextFileType_onrowposchanged = function(obj,e)
        {
        	var sStatusCd = obj.getColumn(e.newrow, "CODE");
        	if (this.gfnIsEmpty(sStatusCd)) {
        		this.dsUpload.filter("");
        		this.btnAddFile.set_visible(false);
        	} else {
        		this.dsUpload.filter("STATUS_CD=='"+sStatusCd+"'");
        		this.btnAddFile.set_visible(true);
        	}
        };


        this.cmb_Type_onitemchanged = function(obj,e)
        {
        	if (this.opts.USE_LINK_TYPE) {
        		var bLinkFlag = false;
        		if (e.postvalue == "1")	bLinkFlag = true;
        		else					bLinkFlag = false;

        		this.btnAddLinkFile.set_visible(bLinkFlag);
        		this.cmb_ContractList.set_visible(bLinkFlag);
        	}
        };

        // AAM Multi Insert
        this.fn_AttachMasterMultiInsert = function()
        {
        	this.gfnAddInputDataset("ds_AttachMaster", "dsAttachMasterInput");
        	this.gfnAddOutputDataset("ds_AttachMasterSeq", "ds_AttachMasterSeq");

        	// 공통 Transaction
        	this.gfnCommonTransaction("AM_ATTACH_MASTER_Save", "AA_FileUpload_R04");
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CF_AceFileMM_onload,this);
            this.btn_Destroy.addEventHandler("onclick",this.btn_Destroy_onclick,this);
            this.btn_Close.addEventHandler("onclick",this.btn_Close_onclick,this);
            this.grdUpload.addEventHandler("oncellclick",this.grdUpload_oncellclick,this);
            this.grdUpload.addEventHandler("oncelldblclick",this.grdUpload_oncelldblclick,this);
            this.btnAddFile.addEventHandler("onclick",this.btnAddFile_onclick,this);
            this.btnDeleteAll.addEventHandler("onclick",this.btnDeleteAll_onclick,this);
            this.btnSaveFile.addEventHandler("onclick",this.btnSaveFile_onclick,this);
            this.cmb_Type.addEventHandler("onitemchanged",this.cmb_Type_onitemchanged,this);
            this.btnAddLinkFile.addEventHandler("onclick",this.btnAddLinkFile_onclick,this);
            this.staHelpMessage.addEventHandler("onclick",this.staHelpMessage_onclick,this);
            this.dsUpload.addEventHandler("oncolumnchanged",this.dsUpload_oncolumnchanged,this);
            this.ds_FileInsert.addEventHandler("oncolumnchanged",this.dsUpload_oncolumnchanged,this);
            this.ds_FileDelete.addEventHandler("oncolumnchanged",this.dsUpload_oncolumnchanged,this);
            this.ds_NextFileType.addEventHandler("onrowposchanged",this.ds_NextFileType_onrowposchanged,this);
        };
        this.loadIncludeScript("CF_AceFileMM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
