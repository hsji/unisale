(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmMain");
            this.set_titletext("MainFrame");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1070,772);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"srchGubun\" type=\"STRING\" size=\"256\"/><Column id=\"srchCond\" type=\"STRING\" size=\"256\"/><Column id=\"srchBoardCd\" type=\"STRING\" size=\"256\"/><Column id=\"YYYYMM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"gubun_main\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"srchGubun\">01</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCondPage", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"END_NUM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsNotiList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUpdateInq", this);
            obj._setContents("<ColumnInfo><Column id=\"BLBD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_NO\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_CNT\" type=\"INT\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTodo", this);
            obj._setContents("<ColumnInfo><Column id=\"CAL_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SCD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SCD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SCD_SECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SSC_CD_KORN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"START_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"START_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"START_MINUTES\" type=\"STRING\" size=\"256\"/><Column id=\"END_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"END_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"END_MINUTES\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_IP\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_IP\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_EMP_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTodoGrid", this);
            obj._setContents("<ColumnInfo><Column id=\"CAL_IMAGE\" type=\"STRING\" size=\"256\"/><Column id=\"TODO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TODO_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"TODO_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"CAL_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SCD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SCD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SCD_SECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SSC_CD_KORN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"START_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"START_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"START_MINUTES\" type=\"STRING\" size=\"256\"/><Column id=\"END_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"END_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"END_MINUTES\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_IP\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_IP\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_EMP_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBoardInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBoardCond", this);
            obj._setContents("<ColumnInfo><Column id=\"BOARD_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsScdInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSetCd", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTodoList", this);
            obj._setContents("<ColumnInfo><Column id=\"CAL_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SCD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SCD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SCD_SECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SSC_CD_KORN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"START_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"START_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"START_MINUTES\" type=\"STRING\" size=\"256\"/><Column id=\"END_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"END_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"END_MINUTES\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_IP\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_IP\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_EMP_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWeather", this);
            obj._setContents("<ColumnInfo><Column id=\"category\" type=\"STRING\" size=\"256\"/><Column id=\"fcstValue\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staShadow","1090","0","120","120",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_visible("false");
            obj.set_cssclass("sta_WF_portletBg");
            obj.set_border("3px dashed darkblue");
            obj.set_background("RGBA(51,51,51,0.47)");
            obj.set_text("move");
            obj.set_textAlign("center");
            obj.set_color("#ffffff");
            obj.set_font("normal 30pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("divMain","0","0","1070","772",null,null,"1070",null,"772",null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Static("staContents","240","18","810","14.90%",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("9");
            obj.set_verticalAlign("middle");
            this.divMain.addChild(obj.name, obj);

            obj = new Div("divLoginLog","20","448","505","304",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("0");
            obj.set_text("OS/브라우저/해상도별 접속 현황");
            obj.set_cssclass("div_MF_Box,box4");
            obj.set_url("frame::frmMainLogDv.xfdl");
            this.divMain.addChild(obj.name, obj);

            obj = new Div("divLink","541","448","505","304",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("1");
            obj.set_cssclass("div_MF_Box,box5");
            this.divMain.addChild(obj.name, obj);

            obj = new Button("btnDevGuideDown","0","0","169",null,null,"152",null,null,null,null,this.divMain.form.divLink.form);
            obj.set_taborder("0");
            obj.set_text("개발가이드 다운로드");
            obj.set_cssclass("btn_MF_Quick01");
            obj.getSetter("uLinkUrl").set("DevPACK_개발표준및개발가이드.pdf");
            obj.getSetter("uLinkType").set("file");
            this.divMain.form.divLink.addChild(obj.name, obj);

            obj = new Button("btnDsgGuideDown","169","0","168",null,null,"152",null,null,null,null,this.divMain.form.divLink.form);
            obj.set_taborder("1");
            obj.set_text("디자인가이드 다운로드");
            obj.set_cssclass("btn_MF_Quick02");
            obj.getSetter("uLinkUrl").set("DevPACK_디자인표준가이드.pdf");
            obj.getSetter("uLinkType").set("file");
            this.divMain.form.divLink.addChild(obj.name, obj);

            obj = new Button("btnGoIdeaBoard","337","0","168",null,null,"152",null,null,null,null,this.divMain.form.divLink.form);
            obj.set_taborder("2");
            obj.set_text("VOC 게시판");
            obj.set_cssclass("btn_MF_Quick03");
            obj.getSetter("uLinkUrl").set("MVOC000001");
            obj.getSetter("uLinkType").set("menu");
            this.divMain.form.divLink.addChild(obj.name, obj);

            obj = new Button("btnGoSupport","337","152","168","152",null,null,null,null,null,null,this.divMain.form.divLink.form);
            obj.set_taborder("3");
            obj.set_text("기술지원");
            obj.set_cssclass("btn_MF_Quick06");
            obj.getSetter("uLinkUrl").set("http://support.tobesoft.co.kr/Support/index.html");
            obj.getSetter("uLinkType").set("url");
            this.divMain.form.divLink.addChild(obj.name, obj);

            obj = new Button("btnGoPlayNexacro","169","152","168","152",null,null,null,null,null,null,this.divMain.form.divLink.form);
            obj.set_taborder("4");
            obj.set_text("플레이넥사");
            obj.set_cssclass("btn_MF_Quick05");
            obj.getSetter("uLinkUrl").set("https://www.playnexacro.com/#");
            obj.getSetter("uLinkType").set("url");
            this.divMain.form.divLink.addChild(obj.name, obj);

            obj = new Button("btnGoTobesoft","0","152","169","152",null,null,null,null,null,null,this.divMain.form.divLink.form);
            obj.set_taborder("5");
            obj.set_text("투비소프트");
            obj.set_cssclass("btn_MF_Quick04");
            obj.getSetter("uLinkUrl").set("https://www.tobesoft.com/");
            obj.getSetter("uLinkType").set("url");
            this.divMain.form.divLink.addChild(obj.name, obj);

            obj = new Div("divBoard","20","138","330","290",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("2");
            obj.set_cssclass("div_MF_Box,box1");
            obj.set_text("");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("sta00","28","11","159","45",null,null,null,null,null,null,this.divMain.form.divBoard.form);
            obj.set_taborder("0");
            obj.set_text("공지사항");
            obj.set_cssclass("sta_MF_tile");
            this.divMain.form.divBoard.addChild(obj.name, obj);

            obj = new Button("btnPlus",null,"13","48","41","12",null,null,null,null,null,this.divMain.form.divBoard.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_MF_More");
            obj.getSetter("uLinkType").set("menu");
            obj.getSetter("uLinkUrl").set("10501001");
            this.divMain.form.divBoard.addChild(obj.name, obj);

            obj = new Grid("grdNoti","25","63",null,null,"20","25",null,null,null,null,this.divMain.form.divBoard.form);
            obj.set_taborder("2");
            obj.set_cssclass("grd_MF_Notice");
            obj.set_binddataset("dsNotiList");
            obj.set_autofittype("col");
            obj.set_scrollbardecbuttonsize("0");
            obj.set_scrollbarincbuttonsize("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"176\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:TITLE\"/><Cell col=\"1\" text=\"bind:INPT_DTTM\" cssclass=\"cell_WF_Right,cell_WF_DecoNo\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.divMain.form.divBoard.addChild(obj.name, obj);

            obj = new Div("divCalendar","370","138","680","290",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("3");
            obj.set_cssclass("div_MF_Box2,box2");
            obj.set_background("");
            obj.set_text("");
            this.divMain.addChild(obj.name, obj);

            obj = new Calendar("calTodo","27","14",null,null,"356","18",null,null,null,null,this.divMain.form.divCalendar.form);
            obj.set_taborder("0");
            obj.set_type("monthonly");
            obj.set_cssclass("cal_MF_Cal");
            obj.set_usetrailingday("true");
            obj.set_weekformat("S M T W T F S");
            obj.set_innerdataset("dsTodo");
            obj.set_backgroundcolumn("CAL_IMAGE");
            obj.set_daysize("30 30");
            obj.set_datecolumn("CAL_DATE");
            this.divMain.form.divCalendar.addChild(obj.name, obj);

            obj = new Div("divTodolist","720","138","330","290",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("4");
            obj.set_cssclass("div_MF_BoxColor,box3");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("staTitle","28","11","159","45",null,null,null,null,null,null,this.divMain.form.divTodolist.form);
            obj.set_taborder("0");
            obj.set_text("TO-DO LIST");
            obj.set_cssclass("sta_MF_tile2");
            this.divMain.form.divTodolist.addChild(obj.name, obj);

            obj = new Button("btnNew",null,"13","48","41","12",null,null,null,null,null,this.divMain.form.divTodolist.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_MF_New");
            obj.getSetter("uLinkType").set("popup");
            obj.getSetter("uLinkUrl").set("add");
            this.divMain.form.divTodolist.addChild(obj.name, obj);

            obj = new Grid("grdTodo","25","63",null,null,"25","25",null,null,null,null,this.divMain.form.divTodolist.form);
            obj.set_taborder("2");
            obj.set_cssclass("grd_MF_Todo");
            obj.set_autofittype("col");
            obj.set_binddataset("dsTodo");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"0\"/><Column size=\"40\"/><Column size=\"180\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:SCD_ID\"/><Cell col=\"1\" displaytype=\"text\" cssclass=\"expr:dataset.parent.fnSetSectCdCss1(SCD_SECT_CD)\" text=\"bind:SSC_CD_KORN_NM\"/><Cell col=\"2\" text=\"bind:TITLE\" tooltiptext=\"expr:dataset.parent.fnGetWriterDate(dataset, currow)\" expr=\"expr:TITLE.length &gt; 13 ? TITLE.substr(0,13)+&apos;...&apos; : TITLE\"/><Cell col=\"3\" text=\"expr:INPT_EMP_NO.substr(0, INPT_EMP_NO.indexOf(&quot;(&quot;))\"/></Band></Format></Formats>");
            this.divMain.form.divTodolist.addChild(obj.name, obj);

            obj = new Button("btnRefresh",null,"88","40","40","24",null,null,null,null,null,this.divMain.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_MF_Restore");
            obj.set_visible("true");
            this.divMain.addChild(obj.name, obj);

            obj = new ImageViewer("imgW","20","12","106","107",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("6");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("staWMax","137","74","93","20",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("7");
            obj.set_font("bold 18px/normal \"noto\",\"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#d03534");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("staWMin","137","94","93","20",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("8");
            obj.set_font("bold 18px/normal \"noto\",\"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("center");
            obj.set_color("#6193ed");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("staWCur","137","14","93","41",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("10");
            obj.set_font("bold 24px/normal \"noto\",\"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("center");
            this.divMain.addChild(obj.name, obj);

            obj = new ImageViewer("img00","123","21","30","30",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("11");
            obj.set_image("url(\'theme://images/weather/11.png\')");
            this.divMain.addChild(obj.name, obj);

            obj = new Static("staWReh","22","104","105","25",null,null,null,null,null,null,this.divMain.form);
            obj.set_taborder("12");
            obj.set_font("bold 18px/normal \"noto\",\"Malgun Gothic\",\"Arial\"");
            obj.set_textAlign("center");
            this.divMain.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMain.form.divLoginLog
            obj = new Layout("default","",0,0,this.divMain.form.divLoginLog.form,function(p){});
            this.divMain.form.divLoginLog.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form.divLink.form
            obj = new Layout("default","",0,0,this.divMain.form.divLink.form,function(p){});
            this.divMain.form.divLink.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form.divBoard.form
            obj = new Layout("default","",0,0,this.divMain.form.divBoard.form,function(p){});
            this.divMain.form.divBoard.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form.divCalendar.form
            obj = new Layout("default","",0,0,this.divMain.form.divCalendar.form,function(p){});
            this.divMain.form.divCalendar.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form.divTodolist.form
            obj = new Layout("default","",0,0,this.divMain.form.divTodolist.form,function(p){});
            this.divMain.form.divTodolist.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMain.form
            obj = new Layout("default","",0,0,this.divMain.form,function(p){});
            this.divMain.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1070,772,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmMainLogDv.xfdl");
        };
        
        // User Script
        this.registerScript("frmMain.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	frmMain.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/04/29
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/04/29			TOBESOFT					최초생성
        * 2021/06/11			TOBESOFT					drag&drop기능 삭제
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.nDivMainTerm 		= 10;  			//divMain 가로세로 최소 여백
        this.fvNotiBoardMenuId 	= "10501001";	//공지사항메뉴아이디
        this.fvNotiBoardCd 		= "1000000";	//공지사항게시판 게시판코드
        this.fvBoardInfo 		= {};			//게시판인포

        this.fvDate 			= ""; 			//TodoList에서 사용할 날짜
        this.fvScdInfo 			= {};			//일정 마스터 정보
        this.fvScdId			= "";			//일정번호
        this.objApp = nexacro.getApplication();
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {

        	this.fnGetWeather();

        	this.fnDivMainResize(); //div리사이즈(가운데로)

        	this.objApp.gdsCommCode.filter("HCL_CD == 'CM03'");
        	this.dsSetCd.copyData(this.objApp.gdsCommCode,true);	//일정유형 복사
        	this.objApp.gdsCommCode.filter("");

        	//20210611 공지사항게시판조회
        	this.fnTranSearchBoardInfo(this.fvNotiBoardCd);

        	this.fvDate = this.gfnGetDate();
        	this.divMain.form.divTodolist.form.staTitle.set_text(this.fvDate.substr(4,2) + "월 " + this.fvDate.substr(6,2) + "일"
        														+ " (" + this.gfnGetDayKor(this.fvDate) + ")");
        	//접근가능한 일정마스터목록 조회
        	this.fnTranSearchScdInfo();
        	//나의일정 조회
        	this.fnTranGetMySchedule();

        };


        this.fnGetBaseTime = function(date, time) {
        	var rtntime = "";
        	if(time >= "0200" && time < "0500") rtntime = "0200";
        	else if(time >= "0500" && time < "0800") rtntime = "0500";
        	else if(time >= "0800" && time < "1100") rtntime = "0800";
        	else if(time >= "1100" && time < "1400") rtntime = "1100";
        	else if(time >= "1400" && time < "1700") rtntime = "1400";
        	else if(time >= "1700" && time < "2000") rtntime = "1700";
        	else if(time >= "2000" && time < "2300") rtntime = "2000";
        	else if(time >= "2300" && time <= "2359") rtntime = "2300";
        	else {
        		date = this.gfnAddDate(date, -1);
        		rtntime = "2300";
        	}

        	return [date, rtntime];
        };

        this.fnGetWeather = function()
        {
        	var date = this.gfnGetDate("date");
        	var time = this.gfnGetDate("timeform2");

        	var rtnTime = this.fnGetBaseTime(date, time);

        	date = rtnTime[0];
        	time = rtnTime[1];
        	// %2BPFsFevzZecsv9GbHbbEWjG%2BokFVEdgTEQfibhhDDlUrb2XPyRFDXmeTRei5i%2FRPuDKr%2FVCDX7NhdxwDWhZLeQ%3D%3D
        	// +PFsFevzZecsv9GbHbbEWjG+okFVEdgTEQfibhhDDlUrb2XPyRFDXmeTRei5i/RPuDKr/VCDX7NhdxwDWhZLeQ==
        	var sKey = "%2BPFsFevzZecsv9GbHbbEWjG%2BokFVEdgTEQfibhhDDlUrb2XPyRFDXmeTRei5i%2FRPuDKr%2FVCDX7NhdxwDWhZLeQ%3D%3D";
        	var xhr = new XMLHttpRequest();
        	//var url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst'; /*URL*/
        	var url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst'; /*URL*/
        	var queryParams = '?' + encodeURIComponent('serviceKey') + '='+sKey; /*Service Key*/
        	queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
        	queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('1000'); /**/
        	queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('JSON'); /**/
        	//queryParams += '&' + encodeURIComponent('ftype') + '=' + encodeURIComponent('SHRT'); /**/
        	queryParams += '&' + encodeURIComponent('base_date') + '=' + encodeURIComponent(date); /**/
        	queryParams += '&' + encodeURIComponent('base_time') + '=' + encodeURIComponent(time); /**/
        	//queryParams += '&' + encodeURIComponent('basedatetime') + '=' + encodeURIComponent(date + time.substr(0,2) + "00"); /**/

        	queryParams += '&' + encodeURIComponent('nx') + '=37';
        	queryParams += '&' + encodeURIComponent('ny') + '=127';
        	xhr.open('GET', url + queryParams);

        	var pThis = this;
        	xhr.onreadystatechange = function () {
        		if (this.readyState == 4) {
        			var json = JSON.parse(this.responseText);
        			if(json.response.header.resultCode == "00") {
        				pThis.fnMakeDataset(json);
        				pThis.fnResponse();
        			}
        		}
        	};

        	xhr.send('');

        	var sKey = "%2BPFsFevzZecsv9GbHbbEWjG%2BokFVEdgTEQfibhhDDlUrb2XPyRFDXmeTRei5i%2FRPuDKr%2FVCDX7NhdxwDWhZLeQ%3D%3D";
        	var xhr2 = new XMLHttpRequest();
        	var url = 'http://apis.data.go.kr/1360000/MidFcstInfoService/getMidFcst'; /*URL*/
        	var queryParams = '?' + encodeURIComponent('serviceKey') + '='+sKey; /*Service Key*/
        	queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
        	queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
        	queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('JSON'); /**/
        	queryParams += '&' + encodeURIComponent('stnId') + '=' + encodeURIComponent('108'); /**/
        	queryParams += '&' + encodeURIComponent('tmFc') + '=' + encodeURIComponent(date + '0600'); /**/
        	xhr2.open('GET', url + queryParams);
        	xhr2.onreadystatechange = function () {
        		if (this.readyState == 4) {
        			var json = JSON.parse(this.responseText);
        			if(json.response.header.resultCode == "00") {
        				pThis.divMain.form.staContents.set_text(json.response.body.items.item[0].wfSv);
        			}
        		}
        	};

        	xhr2.send('');
        };

        this.fnMakeDataset = function(json) {
        	var items = json.response.body.items.item;
        	this.dsWeather.clearData();
        	this.dsWeather.set_enableevent(false);
        	for(var i=0,len=items.length;i<len;i++) {
        		var nRow = this.dsWeather.addRow();
        		this.dsWeather.setColumn(nRow, "category",  items[i].category);
        		this.dsWeather.setColumn(nRow, "fcstValue", items[i].fcstValue);
        	}
        	this.dsWeather.set_enableevent(true);
        };

        this.fnGetCategory = function(category) {
        	var nRow = this.dsWeather.findRow("category", category);
        	if(nRow>=0) {
        		return this.dsWeather.getColumn(nRow, "fcstValue");
        	}
        };

        this.fnResponse = function() {
        	var time = this.gfnGetDate("timeform2");
        	var ba = "a";
        	if(time > "0600" && time < "1800") {
        		ba = "b";
        	}
        	var SKY = this.fnGetCategory("SKY");
        	var PTY = this.fnGetCategory("PTY");
        	var imgname = "w" + ba + SKY + PTY;

        	this.divMain.form.imgW.set_image("theme://images/weather/" + imgname + ".png");

        	var TMN = this.fnGetCategory("TMN");
        	var TMX = this.fnGetCategory("TMX");
        	this.divMain.form.staWMin.set_text(TMN + "°");
        	this.divMain.form.staWMax.set_text(TMX + "°");

        	var TMP = this.fnGetCategory("TMP");
        	this.divMain.form.staWCur.set_text(TMP + "°");

        	var REH = this.fnGetCategory("REH");
        	this.divMain.form.staWReh.set_text("습도:" + REH + "%");

        };

        //max size 변경
        this.form_onsize = function(obj,e)
        {
        	this.fnDivMainResize();
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //게시판 정보조회
        this.fnTranSearchBoardInfo = function (sBordCd)
        {
        	this.dsBoardCond.clearData();
        	var nRow = this.dsBoardCond.addRow();
        	this.dsBoardCond.setColumn(nRow, "BOARD_CD", sBordCd);

        	var strSvcId    = "searchBoardList";
        	var strSvcUrl   = "searchBoardList.do";
        	var inData      = "dsCond=dsBoardCond";
        	var outData     = "dsBoardInfo=dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        //조회
        this.fnTranNotiBoardSearch = function ()
        {
        	//조회조건
        	this.dsCond.setColumn(0, "srchBoardCd", this.fvNotiBoardCd);
        	//22.04.28 메인화면에서 공지사항 수정일자 내림차순으로 정렬
        	this.dsCond.setColumn(0, "gubun_main", "T");

        	this.dsCondPage.setColumn(0, "START_NUM", 0);
        	this.dsCondPage.setColumn(0, "END_NUM", 8);

        	var strSvcId    = "searchBoardContent";
        	var strSvcUrl   = "searchBoardContent.do";
        	var inData      = "dsCond=dsCond dsCondPage=dsCondPage";
        	var outData     = "dsNotiList=dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        //조회수 업데이트
        this.fnTranUpdateInqCnt = function ()
        {
        	var strSvcId    = "saveBoardContents";
        	var strSvcUrl   = "saveBoardContents.do";
        	var inData      = "dsList=dsUpdateInq:U";
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

        //일정마스터 정보 조회
        this.fnTranSearchScdInfo = function()
        {
        	this.dsScdInfo.clearData();

        	var strSvcId    = "searchScheduleList";
        	var strSvcUrl   = "searchScheduleList.do";
        	var inData      = "";
        	var outData     = "dsScdInfo=dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        // 나의 일정 조회
        this.fnTranGetMySchedule = function()
        {
        	this.dsCond.setColumn(0,"YYYYMM",this.fvDate.substr(0,6));
        	this.dsCond.setColumn(0,"DEPT_CD",nexacro.getApplication().gdsUser.getColumn(0, "DEPT_CD"));
        	this.dsTodo.clear();

         	var strSvcId    = "getMySchedule";
         	var strSvcUrl   = "getMySchedule.do";
         	var inData      = "dsSearch=dsCond";
         	var outData     = "dsTodo=dsScdData";
         	var strArg      = "";
         	var callBackFnc = "fnCallback";

         	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
         						strSvcUrl , 	// trabsaction을 요청할 주소
         						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
         						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
         						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
         						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //transaction
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "searchBoardContent":
        			break;
        		case "saveBoardContents":
        			this.fnOpenBoardP();
        			break;
        		case "searchBoardList":
        			this.fnSetBoard();
        			break;
        		case "searchScheduleList":
        			break;
        		case "getMySchedule":
        			this.fnSetCalImage();
        			this.divMain.form.divCalendar.form.calTodo.set_value(this.fvDate);
        			this.fnSetTodoList();
        			break;
        		default:break;
        	}
        };

        this.fnPopupCallback = function(sPopupId, sRtn)
        {
        	if(!this.gfnIsNull(sRtn)){
        		if(sRtn!="rUpdate"){
        			this.fvDate = sRtn;
        			this.fnTranGetMySchedule();
        		}else if(sRtn=="rUpdate"){ //조회->수정 이동
        			this.fnSetLinkPopup("update", this.fvScdId);
        		}
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        //게시판세팅
        this.fnSetBoard = function ()
        {
        	if( this.dsBoardInfo.getRowCount() == 0 ){
        		this.gfnAlert("msg.nomenu");
        		nexacro.getApplication().gvFrmMdi.form.fnCloseMenu(this.fvMenuCd);
        		return;
        	}

        	this.fvBoardInfo = {};
        		this.fvBoardInfo = {
        			blbdNm 	 : this.dsBoardInfo.getColumn(0, "BLBD_NM")
        			,answYn  : this.dsBoardInfo.getColumn(0, "ANSW_YN")
        			,apndYn  : this.dsBoardInfo.getColumn(0, "APND_YN")
        			,pageCnt : this.dsBoardInfo.getColumn(0, "PAGE_CNT")
        			,replyYn : this.dsBoardInfo.getColumn(0, "REPLY_YN")
        			,mgrCd	 : this.dsBoardInfo.getColumn(0, "MGR_CD")
        		};

        	//전체조회
        	this.fnTranNotiBoardSearch();
        };

        //main div 가운데정렬
        this.fnDivMainResize = function ()
        {
        	var nLeft = nexacro.round((this.getOffsetWidth() - this.divMain.getOffsetWidth() ) /2);
        	var nTop = nexacro.round((this.getOffsetHeight() - this.divMain.getOffsetHeight() ) /2);

        	if( nLeft < this.nDivMainTerm ) nLeft = this.nDivMainTerm;
        	if( nTop < this.nDivMainTerm ) nTop = this.nDivMainTerm;

        	this.divMain.move(nLeft, nTop);
        	this.resetScroll();
        };


        //공지사항오픈
        this.fnOpenBoardP = function ()
        {
        	var sTitle = "게시글";
        	var oOption = {title:sTitle
        					,titlebar:true};

        	var popupId = "readBoard";
        	var popupUrl = "comm::board/boardReadPu.xfdl";
        	var nRow   = this.dsNotiList.rowposition;
        	var oArg   = {pvAnswYn 		: this.fvBoardInfo.answYn
        				  ,pvApndYn		: this.fvBoardInfo.apndYn
        				  ,pvReplyYn    : this.fvBoardInfo.replyYn
        				  ,pvTitle 		: this.fvBoardInfo.blbdNm
        				  ,pvBoardCd	: this.fvNotiBoardCd
        				  ,pvNotiNo		: this.dsNotiList.getColumn(nRow, "NOTI_NO")
        				  ,pvOpenType	: "read"
        				  ,pvMgrCd		: this.fvBoardInfo.mgrCd};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup(popupId, popupUrl, oArg, sPopupCallBack, oOption);
        };

        //TODO LIST 세팅
        this.fnSetTodoList = function ()
        {
        	this.divMain.form.divTodolist.form.staTitle.set_text(this.fvDate.substr(4,2) + "월 " + this.fvDate.substr(6,2) + "일"
        														+ " (" + this.gfnGetDayKor(this.fvDate) + ")");
        	this.dsTodoGrid.clearData();
        	this.dsTodo.set_enableevent(false);
        	this.divMain.form.divTodolist.form.grdTodo.set_binddataset("");
        	this.dsTodo.filter("CAL_DATE=='"+this.fvDate+"'");

        	this.dsTodoGrid.copyData(this.dsTodo, true);

        	this.dsTodo.filter("");
        	this.divMain.form.divTodolist.form.grdTodo.set_binddataset("dsTodoGrid");
        	this.dsTodo.set_enableevent(true);
        };

        //링크처리 URL..
        this.fnSetLinkUrl = function (sUrl)
        {
        	if(system.navigatorname == "nexacro"){
        		system.execBrowser(sUrl);
        	}else{
        		var newwin = window.open('about:blank');
        		newwin.location.href = sUrl;
        	}
        };

        //링크처리 FILE..
        this.fnSetLinkFile = function (sFileNm)
        {
        	this.gfnDownTempate(sFileNm);
        };

        //링크처리 MENU..
        this.fnSetLinkMenu = function (sMenuId)
        {
        	//레프트Sync
        	var oDs = nexacro.getApplication().gdsMenu;
        	var sModuleCd = oDs.lookup("MENU_ID", sMenuId, "MODULE_CD");

        	var oTopForm = nexacro.getApplication().gvFrmTop.form;
        	var sTopCommBtnId = "TOP_"+oTopForm.dsMenu.lookup("MODULE_CD", sModuleCd, "MENU_ID");
        	var oBtn = oTopForm.divTopBtn.form.components[sTopCommBtnId];
        		oBtn.click();

        	//메뉴로이동
        	nexacro.getApplication().gvFrmLeft.form.fnFormOpen(sMenuId);
        };

        //링크처리 Popup..
        this.fnSetLinkPopup = function (sStatus)
        {
        	var sTitle = "일정";
        	var oOption = {title:sTitle
        					,titlebar:true};
        	var popupId = "";
        	var popupUrl = "";

        	if(sStatus=="add"){
        		//추가
        		popupId = "addScd";
        		popupUrl = "comm::schedule/schedulePu.xfdl";
        		var oArg   = { pvApndYn		: this.dsScdInfo.getColumn(0,"APND_YN")// 첨부파일 여부
        					  ,pvTitle 		: this.dsScdInfo.getColumn(0,"SCD_NM") // 일정마스터타이틀
        					  ,pvScdTitle	: "" // 추가될 스케쥴의 타이틀
        					  ,pvScdCd		: this.dsScdInfo.getColumn(0,"SCD_CD") //일정마스터코드
        					  ,pvYyyy 		: this.fvDate.substr(0,4)
        					  ,pvMm 		: this.fvDate.substr(4,2)
        					  ,pvDd			: this.fvDate.substr(6,2)
        					  ,pvDeptCd     : nexacro.getApplication().gdsUser.getColumn(0,"DEPT_CD")
        					  ,pvOpenType	: "add"
        				  };
        	}else if(sStatus=="read"){
        		popupId = "readScd";
        		popupUrl = "comm::schedule/scheduleReadPu.xfdl";
        		var oArg   = {pvApndYn		: this.fvScdInfo.apndYn
        					  ,pvTitle 		: this.fvScdInfo.scdNm // 일정마스터타이틀
        					  ,pvScdCd		: this.fvScdInfo.scdCd // 일정마스터코드
        					  ,pvScdId		: this.fvScdId // 일정 번호
        					  ,pvDeptCd		: nexacro.getApplication().gdsUser.getColumn(0,"DEPT_CD") //부서코드
        					  ,pvOpenType	: "read"
        					  ,pvMgrCd	 	: this.fvScdInfo.mgrCd// 관리자
        					  ,pvYyyyMmDd	: this.fvDate
        					  ,pvMain		: "1"
        					};
        	}else if(sStatus=="update"){
        		//추가
        		popupId = "updateScd";
        		popupUrl = "comm::schedule/schedulePu.xfdl";
        		var oArg   = { pvApndYn		: this.fvScdInfo.apndYn
        					  ,pvScdCd		: this.fvScdInfo.scdCd
        					  ,pvScdId		: this.fvScdId
        					  ,pvDeptCd		: nexacro.getApplication().gdsUser.getColumn(0,"DEPT_CD") //부서코드
        					  ,pvOpenType	: "update"
        				  };

        	}
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup(popupId, popupUrl, oArg, sPopupCallBack, oOption);
        };

        // 월 1~9까지 앞에 0 붙임.
        this.fnMakeMonth =function(nMonth)
        {
        	if(this.gfnIsNull(nMonth)) return;
        	if(10 > nMonth)  nMonth = "0"+nMonth;
        	return nMonth;
        };

        // todoGrid - tooltiptext
        this.fnGetWriterDate = function(dataset, currow)
        {
        	var sTitle		= dataset.getColumn(currow, 'TITLE');
        	var nStartDay	= dataset.getColumn(currow,'START_DAY');
        	var nEndDay	 	= dataset.getColumn(currow,'END_DAY');
        	var nStartTime	= dataset.getColumn(currow,'START_TIME');
        	var nStartMinutes = dataset.getColumn(currow, 'START_MINUTES');
        	var nEndTime	= dataset.getColumn(currow, 'END_TIME');
        	var nEndMinutes	= dataset.getColumn(currow, 'END_MINUTES');
        	var sRtn	  = "";

        	if(nStartDay == nEndDay){
        		sRtn = sTitle + " [" + nStartDay.substr(0,4) + "." + nStartDay.substr(4,2) + "." + nStartDay.substr(6,2) + "(" + this.gfnGetDayKor(nStartDay) + ") "
        			   + nStartTime + ":" + nStartMinutes + " ~ " + nEndTime + ":" + nEndMinutes + "]" ;
        	}else{
        		sRtn = sTitle + " [" + nStartDay.substr(0,4) + "." + nStartDay.substr(4,2) + "." + nStartDay.substr(6,2) + "(" + this.gfnGetDayKor(nStartDay) + ") "
        			   + nStartTime + ":" + nStartMinutes +  " ~ "
        			   + nEndDay.substr(0,4) + "." + nEndDay.substr(4,2) + "." + nEndDay.substr(6,2) + "(" + this.gfnGetDayKor(nEndDay) + ") " + nEndTime + ":" + nEndMinutes + "]";
        	}
        	return sRtn;
        }

        //일정 유형 별 Css
        this.fnSetSectCdCss1 = function(sScdSectCd)
        {
        	return "label" + this.gfnLPad(this.dsSetCd.findRow("SSC_CD", sScdSectCd)+1, 0, 2);
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        //공지사항 게시물 클릭
        this.divMain_divBoard_grdNoti_oncellclick = function(obj,e)
        {
        	//조회수 증가
        	var nRow = e.row;

        	this.dsUpdateInq.clearData();
        	var nTargetRow = this.dsUpdateInq.addRow();

        	this.dsUpdateInq.copyRow(nTargetRow, this.dsNotiList, nRow);
        	this.dsUpdateInq.setColumn(nTargetRow, "STATUS", "updateInqCount");

        	this.fnTranUpdateInqCnt();
        };

        //캘린더 하단에 . 표시(일정이 있을 경우);
        this.fnSetCalImage = function()
        {
        	this.dsTodo.set_enableevent(false);
        	this.dsTodo.addColumn("CAL_IMAGE", "STRING");
         	for(var i=0; i<this.dsTodo.getRowCount(); i++){
         		this.dsTodo.setColumn(i, "CAL_IMAGE", "url('theme://images/cal_MF_Dot.png') no-repeat center bottom");
         	}
        	this.dsTodo.set_enableevent(true);
        }

        //TODO
        this.divMain_divCalendar_calTodo_ondayclick = function(obj,e)
        {
        	//this.fvDate = e.date;
        	//2022.08.03 분기 후 값 대입하는 것으로 변경.

        	//다른 달을 클릭하면 해당 월 일정 조회
        	if(e.date.substr(0,6)!=this.fvDate.substr(0,6)){
        		this.fvDate = e.date;
        		this.fnTranGetMySchedule();
        	}else{
        		this.fvDate = e.date;
        		this.fnSetTodoList();
        	}
        };

        //Link 클릭
        this.btnLink_onclick = function(obj,e)
        {
        	var sUrl = obj.uLinkUrl;
        	var sLinkType = obj.uLinkType;

        	if( this.gfnIsNull(sUrl)){
        		this.gfnAlert("msg.preparation");
        		return;
        	}

        	//링크타입별 처리
        	switch(sLinkType) {
        		case "url":
        			this.fnSetLinkUrl(sUrl);
        			break;
        		case "file":
        			if (nexacro.getApplication().gdsUser.getColumn(0, "EMP_NO") == "guest")
        			{
        				this.gfnAlert("msg.nosearchscope");
        				return;
        			}
        			this.fnSetLinkFile(sUrl);
        			break;
        		case "menu":
        			this.fnSetLinkMenu(sUrl);
        			break;
        		case "popup":
        			this.fnSetLinkPopup(sUrl);
        			break;
        	}
        };

        // Todo 클릭(조회)
        this.divMain_divTodolist_grdTodo_oncellclick = function(obj,e)
        {
        	this.fvScdId= obj.getCellPropertyValue(e.row , 0, "text");
        	var nRow	= this.dsTodo.findRow("SCD_ID", this.fvScdId);
        	var sScdCd	= this.dsTodo.getColumn(nRow, "SCD_CD");
        	nRow	 	= this.dsScdInfo.findRow("SCD_CD", sScdCd);

        	this.fvScdInfo = {
        		  scdNm	: this.dsScdInfo.getColumn(nRow,"SCD_NM")
        		, scdCd : this.dsScdInfo.getColumn(nRow,"SCD_CD")
        		, apndYn: this.dsScdInfo.getColumn(nRow,"APND_YN")
        		, mgrCd : this.dsScdInfo.getColumn(nRow,"MGR_ID")
        	};

        	this.fnSetLinkPopup("read");
        };

        // 캘린더 <>버튼
        this.divMain_divCalendar_calTodo_onlbuttonup = function(obj,e)
        {
        	var sName = e.fromreferenceobject.name;
        	if(sName=='nextbutton'){
        		this.fvDate = this.gfnAddMonth(this.fvDate.substr(0,6)+"01", +1);
        		if(this.fvDate.substr(0,6)==this.gfnGetDate().substr(0,6))  this.fvDate = this.gfnGetDate();
        		this.fnTranGetMySchedule();
        	}else if(sName=='prevbutton'){
        		this.fvDate = this.gfnAddMonth(this.fvDate.substr(0,6)+"01", -1);
        		if(this.fvDate.substr(0,6)==this.gfnGetDate().substr(0,6))  this.fvDate = this.gfnGetDate();
        		this.fnTranGetMySchedule();
        	}
        };

        // 캘린더 년도,월 변경 후 엔터 눌렀을 경우.
        this.divMain_divCalendar_calTodo_onkeydown = function(obj,e)
        {
        	if( e.keycode == "13" && e.fromreferenceobject.name =="spinedit"){
        		var nSpinYyyy	= this.divMain.form.divCalendar.form.calTodo.datepicker.head.yearspin.spinedit.value;
        		var nSpinMm		= this.fnMakeMonth(this.divMain.form.divCalendar.form.calTodo.datepicker.head.monthspin.spinedit.value);
        		var nTodayYyyy	= this.gfnGetDate().substr(0,4);
        		var nTodayMm	= this.gfnGetDate().substr(4,2);
        		var nTodayDd	= this.gfnGetDate().substr(6,2);

        		if(nSpinYyyy+nSpinMm == nTodayYyyy+nTodayMm){
        			obj.set_value(nTodayYyyy+nTodayMm+nTodayDd);
        			this.fvDate = nTodayYyyy+nTodayMm;
        			this.fnTranGetMySchedule();
        		}else{
        			obj.set_value(nSpinYyyy+nSpinMm+"01");
        			this.fvDate = nSpinYyyy+nSpinMm;
        			this.fnTranGetMySchedule();
        		}
        	}
        };

        // 새로고침 클릭시
        this.btnRefresh_onclick = function(obj,e)
        {
        	//20210611 공지사항게시판조회
        	this.fnTranSearchBoardInfo(this.fvNotiBoardCd);

        	this.fvDate = this.gfnGetDate();
         	this.divMain.form.divTodolist.form.staTitle.set_text(this.fvDate.substr(4,2) + "월 " + this.fvDate.substr(6,2) + "일"
         														+ " (" + this.gfnGetDayKor(this.fvDate) + ")");

        	//접근가능한 일정마스터목록 조회
        	this.fnTranSearchScdInfo();
        	//나의일정 조회
        	this.fnTranGetMySchedule();

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.divMain.form.divLink.addEventHandler("ondrag",this.div_ondrag,this);
            this.divMain.form.divLink.form.btnDevGuideDown.addEventHandler("onclick",this.btnLink_onclick,this);
            this.divMain.form.divLink.form.btnDsgGuideDown.addEventHandler("onclick",this.btnLink_onclick,this);
            this.divMain.form.divLink.form.btnGoIdeaBoard.addEventHandler("onclick",this.btnLink_onclick,this);
            this.divMain.form.divLink.form.btnGoSupport.addEventHandler("onclick",this.btnLink_onclick,this);
            this.divMain.form.divLink.form.btnGoPlayNexacro.addEventHandler("onclick",this.btnLink_onclick,this);
            this.divMain.form.divLink.form.btnGoTobesoft.addEventHandler("onclick",this.btnLink_onclick,this);
            this.divMain.form.divBoard.addEventHandler("ondrag",this.div_ondrag,this);
            this.divMain.form.divBoard.form.sta00.addEventHandler("onclick",this.divMain_divBoard_sta00_onclick,this);
            this.divMain.form.divBoard.form.btnPlus.addEventHandler("onclick",this.btnLink_onclick,this);
            this.divMain.form.divBoard.form.grdNoti.addEventHandler("oncellclick",this.divMain_divBoard_grdNoti_oncellclick,this);
            this.divMain.form.divCalendar.addEventHandler("ondrag",this.div_ondrag,this);
            this.divMain.form.divCalendar.form.calTodo.addEventHandler("ondayclick",this.divMain_divCalendar_calTodo_ondayclick,this);
            this.divMain.form.divCalendar.form.calTodo.addEventHandler("onlbuttonup",this.divMain_divCalendar_calTodo_onlbuttonup,this);
            this.divMain.form.divCalendar.form.calTodo.addEventHandler("onchanged",this.divMain_divCalendar_calTodo_onchanged,this);
            this.divMain.form.divCalendar.form.calTodo.addEventHandler("onkeydown",this.divMain_divCalendar_calTodo_onkeydown,this);
            this.divMain.form.divTodolist.addEventHandler("ondrag",this.div_ondrag,this);
            this.divMain.form.divTodolist.form.btnNew.addEventHandler("onclick",this.btnLink_onclick,this);
            this.divMain.form.divTodolist.form.grdTodo.addEventHandler("oncellclick",this.divMain_divTodolist_grdTodo_oncellclick,this);
            this.divMain.form.btnRefresh.addEventHandler("onclick",this.btnRefresh_onclick,this);
        };
        this.loadIncludeScript("frmMain.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
