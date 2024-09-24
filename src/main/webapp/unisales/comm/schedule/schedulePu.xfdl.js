(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("schedulePu");
            this.set_titletext("일정 입력 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(950,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsScdNm", this);
            obj._setContents("<ColumnInfo><Column id=\"SCD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SCD_SHARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"APND_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTime", this);
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">00</Col></Row><Row><Col id=\"NAME\">01</Col></Row><Row><Col id=\"NAME\">02</Col></Row><Row><Col id=\"NAME\">03</Col></Row><Row><Col id=\"NAME\">04</Col></Row><Row><Col id=\"NAME\">05</Col></Row><Row><Col id=\"NAME\">06</Col></Row><Row><Col id=\"NAME\">07</Col></Row><Row><Col id=\"NAME\">08</Col></Row><Row><Col id=\"NAME\">09</Col></Row><Row><Col id=\"NAME\">10</Col></Row><Row><Col id=\"NAME\">11</Col></Row><Row><Col id=\"NAME\">12</Col></Row><Row><Col id=\"NAME\">13</Col></Row><Row><Col id=\"NAME\">14</Col></Row><Row><Col id=\"NAME\">15</Col></Row><Row><Col id=\"NAME\">16</Col></Row><Row><Col id=\"NAME\">17</Col></Row><Row><Col id=\"NAME\">18</Col></Row><Row><Col id=\"NAME\">19</Col></Row><Row><Col id=\"NAME\">20</Col></Row><Row><Col id=\"NAME\">21</Col></Row><Row><Col id=\"NAME\">22</Col></Row><Row><Col id=\"NAME\">23</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMinutes", this);
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">00</Col></Row><Row><Col id=\"NAME\">10</Col></Row><Row><Col id=\"NAME\">20</Col></Row><Row><Col id=\"NAME\">30</Col></Row><Row><Col id=\"NAME\">40</Col></Row><Row><Col id=\"NAME\">50</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"SCD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SCD_SECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"START_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"START_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"START_MINUTES\" type=\"STRING\" size=\"256\"/><Column id=\"END_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"END_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"END_MINUTES\" type=\"STRING\" size=\"256\"/><Column id=\"CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEL_YN\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUpload", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"OTXT_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"SCD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SCD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fdgFile", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("futFile", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divContents","25","15",null,"610","25",null,null,null,"600",null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staBg04","708","0",null,"34","172",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("28");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_visible("false");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staBg05","738","1",null,"34","147",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("27");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_visible("false");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staBg02","0","66",null,"34","0",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("15");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staBg03","0","99",null,"34","0",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("18");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staBg00","0","0",null,"34","0",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("11");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staBg01","0","staBg00:-1",null,"34","0",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("13");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","0","83","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("14");
            obj.set_text("일정마스터");
            obj.set_cssclass("sta_WF_Label");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divCont","0","staBg03:-1",null,"380","0",null,null,null,"400",null,this.divContents.form);
            obj.set_taborder("12");
            obj.set_text("div00");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staBg00","0","0",null,null,"0","0",null,null,null,null,this.divContents.form.divCont.form);
            obj.set_taborder("0");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divContents.form.divCont.addChild(obj.name, obj);

            obj = new Static("staTitle04","0","0","83",null,null,"0",null,null,null,null,this.divContents.form.divCont.form);
            obj.set_taborder("1");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_Label");
            this.divContents.form.divCont.addChild(obj.name, obj);

            obj = new WebBrowser("webEditor","staTitle04:4","5",null,null,"5","5",null,null,null,null,this.divContents.form.divCont.form);
            obj.set_taborder("2");
            this.divContents.form.divCont.addChild(obj.name, obj);

            obj = new TextArea("txa00","91","13","24","20",null,null,null,null,null,null,this.divContents.form.divCont.form);
            obj.set_taborder("3");
            obj.set_visible("false");
            this.divContents.form.divCont.addChild(obj.name, obj);

            obj = new Div("divFile","0","511",null,"90","0",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("10");
            obj.set_text("div00");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staBg03","0","0",null,null,"0","0",null,null,null,null,this.divContents.form.divFile.form);
            obj.set_taborder("0");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divContents.form.divFile.addChild(obj.name, obj);

            obj = new Static("staTitle05","0","0","83",null,null,"0",null,null,null,null,this.divContents.form.divFile.form);
            obj.set_taborder("1");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_Label");
            this.divContents.form.divFile.addChild(obj.name, obj);

            obj = new Button("btnFileDel",null,"5","62","22","5",null,null,null,null,null,this.divContents.form.divFile.form);
            obj.set_taborder("2");
            obj.set_text("전체삭제");
            obj.set_cssclass("btn_WF_Detail");
            this.divContents.form.divFile.addChild(obj.name, obj);

            obj = new Button("btnFile",null,"5","62","22","btnFileDel:5",null,null,null,null,null,this.divContents.form.divFile.form);
            obj.set_taborder("3");
            obj.set_text("파일찾기");
            obj.set_cssclass("btn_WF_Detail");
            this.divContents.form.divFile.addChild(obj.name, obj);

            obj = new Grid("grdFile","staTitle05:4","btnFile:5",null,null,"5","5",null,null,null,null,this.divContents.form.divFile.form);
            obj.set_taborder("4");
            obj.set_binddataset("dsUpload");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_MF_Notice");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"545\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell text=\"bind:OTXT_FILE_NM\"/><Cell col=\"1\" text=\"삭제\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band></Format></Formats>");
            this.divContents.form.divFile.addChild(obj.name, obj);

            obj = new Static("staCntFile","staTitle05:-83","staTitle05:-40","83","22",null,null,null,null,null,null,this.divContents.form.divFile.form);
            obj.set_taborder("5");
            obj.set_text("(0건)");
            obj.set_fittocontents("none");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divContents.form.divFile.addChild(obj.name, obj);

            obj = new Static("staBg04","0","530",null,"34","0",null,null,null,null,null,this.divContents.form.divFile.form);
            obj.set_taborder("6");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_visible("false");
            this.divContents.form.divFile.addChild(obj.name, obj);

            obj = new Static("staTitle01_00","409","33","83","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("24");
            obj.set_text("유형");
            obj.set_cssclass("sta_WF_Label");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staTitle03","0","66","83","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("16");
            obj.set_text("시작일");
            obj.set_cssclass("sta_WF_Label");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staTitle02","0","33","83","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("17");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_Label");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staTitle03_01","409","66","83","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("25");
            obj.set_text("종료일");
            obj.set_cssclass("sta_WF_Label");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staTitle03_00","0","99","83","34",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("19");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_Label");
            this.divContents.addChild(obj.name, obj);

            obj = new Edit("edtTitle","staTitle03_00:4","104",null,"24","5",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("9");
            obj.set_cssclass("essential");
            obj.set_text("ZBCDASDQWEZBCDASDQWEZBCDASDQWEZBCDASDQWEZBCDASDQWEZBCDASDQWEZBCDASDQWEZBCDASDQWEZBCDASDQWE..ZBCDASDQWE..");
            this.divContents.addChild(obj.name, obj);

            obj = new Calendar("calFrom","staTitle03:4","71","125","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("3");
            this.divContents.addChild(obj.name, obj);

            obj = new Combo("cboFromTime","calFrom:4","71","52","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsTime");
            obj.set_codecolumn("NAME");
            obj.set_datacolumn("NAME");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("sta00","cboFromTime:2","71","15","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("20");
            obj.set_text("시");
            this.divContents.addChild(obj.name, obj);

            obj = new Combo("cboFromMinutes","cboFromTime:20","71","52","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("5");
            obj.set_innerdataset("dsMinutes");
            obj.set_codecolumn("NAME");
            obj.set_datacolumn("NAME");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("sta00_00","cboFromMinutes:2","71","15","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("21");
            obj.set_text("분");
            this.divContents.addChild(obj.name, obj);

            obj = new Calendar("calTo","staTitle03_01:4","71","125","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("6");
            this.divContents.addChild(obj.name, obj);

            obj = new Combo("cboToTime","calTo:4","71","52","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("7");
            obj.set_innerdataset("dsTime");
            obj.set_codecolumn("NAME");
            obj.set_datacolumn("NAME");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("sta00_01","cboToTime:2","71","15","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("22");
            obj.set_text("시");
            this.divContents.addChild(obj.name, obj);

            obj = new Combo("cboToMinutes","cboToTime:20","71","52","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("8");
            obj.set_innerdataset("dsMinutes");
            obj.set_codecolumn("NAME");
            obj.set_datacolumn("NAME");
            obj.set_text("");
            obj.set_value("");
            obj.set_index("-1");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("sta00_00_01","cboToMinutes:2","71","15","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("23");
            obj.set_text("분");
            this.divContents.addChild(obj.name, obj);

            obj = new Edit("edtInpId","staTitle02:4","38","268","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("1");
            obj.set_readonly("true");
            this.divContents.addChild(obj.name, obj);

            obj = new Combo("cboTitle","staTitle00:4","5","267","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("0");
            obj.set_codecolumn("SCD_CD");
            obj.set_datacolumn("SCD_NM");
            obj.set_innerdataset("dsScdNm");
            obj.set_text("");
            obj.set_value("");
            this.divContents.addChild(obj.name, obj);

            obj = new Combo("cboSectCd","496","38","158","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("2");
            obj.set_cssclass("essential");
            obj.set_text("cbo00");
            obj.set_index("-1");
            this.divContents.addChild(obj.name, obj);

            obj = new Edit("edtScdNm","87","5","268","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("26");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divButton","650","divContents:27",null,"28","25",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"0","50","28","0",null,null,null,null,null,this.divButton.form);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_fittocontents("width");
            this.divButton.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"0","68","28","54",null,null,null,null,null,this.divButton.form);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_CrudSave");
            this.divButton.addChild(obj.name, obj);

            obj = new Static("staBottom","0",null,null,"20","0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divContents.form.divCont.form
            obj = new Layout("default","",0,0,this.divContents.form.divCont.form,function(p){});
            this.divContents.form.divCont.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form.divFile.form
            obj = new Layout("default","",0,0,this.divContents.form.divFile.form,function(p){});
            this.divContents.form.divFile.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form
            obj = new Layout("default","",0,0,this.divContents.form,function(p){});
            this.divContents.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divButton.form
            obj = new Layout("default","",0,0,this.divButton.form,function(p){});
            this.divButton.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",950,700,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item4","divContents.form.cboFromTime","value","dsList","START_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divContents.form.cboFromMinutes","value","dsList","START_MINUTES");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divContents.form.cboToMinutes","value","dsList","END_MINUTES");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divContents.form.cboToTime","value","dsList","END_TIME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divContents.form.edtInpId","value","dsList","INPT_EMP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divContents.form.cboTitle","value","dsList","SCD_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divContents.form.calFrom","value","dsList","START_DAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divContents.form.calTo","value","dsList","END_DAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divContents.form.cboSectCd","value","dsList","SCD_SECT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divContents.form.edtTitle","value","dsList","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divContents.form.divCont.form.txa00","value","dsList","CNTN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("schedulePu.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	schedulePu.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/11/16
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/11/16			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvApndYn		= ""; 	//첨부파일 여부
        this.fvTitle		= ""; 	//일정마스터타이틀()
        this.fvInputId		= ""; 	//로그인 한 ID = 000000017
        this.fvInputEmpNo 	= "";	//로그인 한 EMPNO  = brkang516
        this.fvScdTitle		= ""; 	//추가될 스케쥴의 타이틀
        this.fvScdCd		= ""; 	//일정마스터코드
        this.fvScdId		= ""; 	//일정아이디
        this.fvSelYyyy		= ""; 	//년
        this.fvSelMm 		= ""; 	//월
        this.fvSelDd 		= ""; 	//일
        this.fvDeptCd 		= ""; 	//부서코드
        this.fvOpenType 	= ""; 	//오픈타입
        this.fvScdType		= "";   //일정타입(모아보기/일반일정)

        this.fvFileId		= ""; 	//파일ID

        this.fvFileDelUp	= "";	//파일삭제추가
        this.fvFileDel		= "";	//파일삭제만
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.schedulePu_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	//공통코드
        	var param = [{biztype : "Combo", code : "CM03", objid : this.divContents.form.cboSectCd}];// 유형
        	//공통코드콤보설정
        	this.gfnGetCommonCode(param);

        	// 웹브라우저 객체에 Web Editor 생성(visible true일때만)
        	if(this.divContents.form.divCont.form.webEditor.visible){
        		var oWeb = this.divContents.form.divCont.form.webEditor;
        		this.gfnCreateWebEditor(oWeb);
        	}

        	// 가져온 값 셋팅
        	this.fvApndYn	= this.getOwnerFrame().pvApndYn;
        	this.fvTitle	= this.getOwnerFrame().pvTitle;
        	this.fvInputId	= nexacro.getApplication().gdsUser.getColumn(0, "USER_ID");
        	this.fvInputEmpNo = nexacro.getApplication().gdsUser.getColumn(0,"USER_NAME")
        						+"(" + nexacro.getApplication().gdsUser.getColumn(0, "EMP_NO")+ ")";
        	this.fvScdTitle	= this.getOwnerFrame().pvScdTitle;
        	this.fvScdCd	= this.getOwnerFrame().pvScdCd;
        	this.fvScdId	= this.getOwnerFrame().pvScdId;
        	this.fvSelYyyy	= this.getOwnerFrame().pvYyyy;
        	this.fvSelMm	= this.getOwnerFrame().pvMm;
        	this.fvSelDd	= this.getOwnerFrame().pvDd;
        	this.fvDeptCd	= this.getOwnerFrame().pvDeptCd;
        	this.fvOpenType = this.getOwnerFrame().pvOpenType;
        	this.fvScdType	= this.gfnGetUserInfo("DEPT_CD");	//this.getOwnerFrame().pvScdType;

        	this.fnTranSearchScdNm();// 접근 가능한 일정 목록 가져오기

        	//formSize조정, form 기본 셋팅
        	this.fnSetFormInit();
        };


        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/


        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        // 접근 가능한 일정 목록 가져오기
        this.fnTranSearchScdNm = function()
        {
        	this.dsCond.clearData();
        	var nRow = this.dsCond.addRow();
        	this.dsCond.setColumn(nRow, "DEPT_CD", this.fvDeptCd);
        	this.dsCond.setColumn(nRow, "USER_ID", this.fvInputId);

        	var strSvcId    = "selectScdNm";
        	var strSvcUrl   = "selectScdNm.do";
        	var inData      = "dsCond=dsCond";
        	var outData     = "dsScdNm=dsScdNm";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };


        //파일업로드
        this.fnFileUploadTran = function ()
        {
        	if(this.fvOpenType == "add"){
        		this.futFile.setPostData("SCD_CD", this.fvScdCd);
        		this.futFile.setPostData("FILE_ID" , this.fvFileId);
        	}else if(this.fvOpenType == "update" || this.fvOpenType =="searchUpdate"){
        		var sScdId = this.dsList.getColumn(0,"SCD_CD");
        		var sFileId = this.dsList.getColumn(0, "FILE_ID");

        		if(this.gfnIsNull(sFileId)) sFileId = "";

        		this.futFile.setPostData("SCD_CD", sScdId);
        		this.futFile.setPostData("FILE_ID" , sFileId);
        	}
        	this.futFile.upload("svcUrl::scheduleFileUpload.do");
        };


        // Save
        this.fnTranSave = function()
        {
        	this.dsList.setColumn(0, "STATUS", this.fvOpenType);
        	this.dsList.setColumn(0, "CHGE_ID", this.fvInputId);

        	//파일 등록 후 모두 삭제한다면 FILE_ID도 삭제해줘야한다.
        	if(this.dsUpload.getRowCount()==0) this.dsList.setColumn(0,"FILE_ID","");

        	var strSvcId    = "saveScheduleContents";
        	var strSvcUrl   = "saveScheduleContents.do";
        	var inData      = "dsList=dsList:A";
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


        //deleteFile
        this.fnTranDeleteFile = function ()
        {
        	var strSvcId    = "deleteScheduleFile";
        	var strSvcUrl   = "deleteScheduleFile.do";
        	var inData      = "dsUpload=dsUpload:U";
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

        //delete
        this.fnTranDelete = function()
        {
        	var strSvcId    = "delete";
        	var strSvcUrl   = "saveScheduleContents.do";
        	var inData      = "dsList=dsList:A";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }


        //업데이트 시 데이터 조회
        this.fnGetContentsTran = function()
        {
        	this.dsCond.clearData();
        	var nRow = this.dsCond.addRow();
        	this.dsCond.setColumn(nRow, "SCD_CD", this.fvScdCd);
        	this.dsCond.setColumn(nRow, "SCD_ID", this.fvScdId);

        	var strSvcId    = "searchScheduleContents";
        	var strSvcUrl   = "searchScheduleContents.do";
        	var inData      = "dsCond=dsCond";
        	var outData     = "dsList=dsList dsUpload=dsFile";
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
        //transaction callback
        this.fnCallback = function(sSvcId, nErrCd, sErrMsg)
        {
        	switch (sSvcId)
        	{
        		case "selectScdNm":
        			// Main, 일정모아보기 메뉴 에서는 등록 가능한 일정 목록 체크
        			if (this.gfnIsNull(this.fvScdType) || this.fvScdType == "MY") {
        				var nRow = this.dsScdNm.findRow("SCD_CD", this.fvDeptCd);
        				// 접근가능한 일정목록에 사용자의 일정마스터코드가 없으면
        				if ( nRow == -1) {
        					//일정 등록 권한이 없습니다.
        					this.gfnAlert("msg.scdaddnoscope", [""], "selectScdNm", "fnMsgCallback");
        					return;
        				}
        				this.divContents.form.cboTitle.set_value(this.dsScdNm.getColumn(nRow, "SCD_CD"));
        			}
        			// 전사, 팀 메뉴
        			else if (this.fvScdType == "Y") {
        				this.divContents.form.cboTitle.set_value(this.fvScdCd);
        			}
        			//일정마스터 값 설정하면 비활성화 처리
        			this.divContents.form.cboTitle.set_enable(false);
        			break;

        		case "saveScheduleContents":
        			this.gfnAlert("msg.save.success", [], "saveAfter", "fnMsgCallback");
        		    break;

        		case "deleteScheduleFile":
        			if(this.fvFileDelUp == "Y") {
        					this.fnFileUploadTran();
        			}
        			else if(this.fvFileDel =="Y") {
        					this.fnTranSave();
        			}
        			break;

        		case "searchScheduleContents" :
        			//첨부파일 건수
        			this.divContents.form.divFile.form.staCntFile.set_text("(" + this.dsUpload.getRowCount() + "건)");
        		//	this.divContents.form.edtTitle.setFocus();
        			if(this.divContents.form.divCont.form.webEditor.visible) {
        				var oWeb = this.divContents.form.divCont.form.webEditor;
        				this.gfnCreateWebEditor(oWeb);
        			}
        			break;
        	}
        };


        //message callback
        this.fnMsgCallback = function (sMsgId, sRtn)
        {
        	switch(sMsgId) {
        		case "deleteFileUpdate": 	//파일 1개 삭제
        			if(sRtn=="false" || sRtn==false || this.gfnIsNull(sRtn)){
        				return;
        			}
        			var nRow  = this.dsUpload.rowposition;
        			this.dsUpload.deleteRow(nRow);
        			this.divContents.form.divFile.form.staCntFile.set_text("(" + this.dsUpload.getRowCount() + "건)");
        			break;
        		case "deleteFileAllUpdate": //파일 전체 삭제
        			if(sRtn=="false" || sRtn==false || this.gfnIsNull(sRtn)){
        				return;
        			}
        			this.futFile.clearFileList();
        			this.dsUpload.deleteAll();
        			this.divContents.form.divFile.form.staCntFile.set_text("(" + this.dsUpload.getRowCount() + "건)");
        			break;
        		case "selectScdNm": // 일정마스터 값 없는 경우 팝업 닫기
        			this.gfnClosePopup();
        			break;
        		case "saveAfter":
        			if(sRtn)
        			{
        				if(this.fvOpenType=="add"){
        					this.close(this.dsList.getColumn(0,"START_DAY"));
        				}else if(this.fvOpenType=="update"){
        					this.close(this.dsList.getColumn(0,"START_DAY"));
        				}else if(this.fvOpenType=="searchUpdate"){
        					this.close("update");
        				}
        			}
        			break;
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        //초기 폼 세팅
        this.fnSetFormInit = function ()
        {
        	if(this.fvOpenType =="update" || this.fvOpenType =="searchUpdate"){
        		this.divContents.form.cboTitle.set_visible(false);
        		this.divContents.form.edtScdNm.set_visible(true);
        		this.divContents.form.edtScdNm.set_value(this.fvTitle);
        	}else if(this.fvOpenType=="add") {
        		if(this.fvScdType=="MY"){
        			this.divContents.form.cboTitle.set_readonly(false);
        		}else if(this.fvScdType=="Y"){
        			this.divContents.form.cboTitle.set_visible(false);
        			this.divContents.form.edtScdNm.set_visible(true);
        			this.divContents.form.edtScdNm.set_value(this.fvTitle);
        		}
        	}
        	this.fnSetDataset();
        };

        // 데이터셋 세팅
        this.fnSetDataset = function(status)
        {
        	if(this.fvOpenType == "add"){
        		this.dsList.clearData();
        		var nRow = this.dsList.addRow();

        		this.dsList.setColumn(nRow,"SCD_CD", this.fvScdCd);
        		this.dsList.setColumn(nRow,"TITLE", this.fvScdTitle);
        		this.dsList.setColumn(nRow,"START_DAY", this.fvSelYyyy+this.fvSelMm+this.fvSelDd);
        		this.dsList.setColumn(nRow,"START_TIME", "09");
        		this.dsList.setColumn(nRow,"START_MINUTES", "00");
        		this.dsList.setColumn(nRow,"END_DAY", this.fvSelYyyy+this.fvSelMm+this.fvSelDd);
        		this.dsList.setColumn(nRow,"END_TIME", "18");
        		this.dsList.setColumn(nRow,"END_MINUTES","00");
        		this.dsList.setColumn(nRow,"DEL_YN", "0");
        		this.dsList.setColumn(nRow,"INPT_EMP_NO", this.fvInputEmpNo);
        		this.dsList.setColumn(nRow,"INPT_ID", this.fvInputId);
        		this.dsList.setColumn(nRow,"CHGE_ID", this.fvInputId);
        		this.dsList.setColumn(nRow,"STATUS", this.fvOpenType);
        		this.divContents.form.divFile.form.staCntFile.set_text("(0건)");
        		this.divContents.form.cboSectCd.set_index(0);
        	//	this.divContents.form.edtTitle.setFocus();

        	}else{ //update
        		this.dsList.clearData();
        		this.dsUpload.clearData();
        		this.fnGetContentsTran();
        	}
        };

        //첨부파일 여부 셋팅
        this.fnSetApndYn = function(anpdYn)
        {
        	if(anpdYn == "0"){
        		this.divContents.form.divFile.set_height(0);
        		this.divContents.form.divCont.set_bottom(0);
        		this.divContents.form.resetScroll();
        		if(this.isLoad) this.divContents.form.divCont.form.webEditor.callMethod("init", this.divContents.form.divCont.form.webEditor.getOffsetHeight()-35);
        	}
        	else if(anpdYn == "1"){
        		this.divContents.form.divFile.set_height(99);
        		this.divContents.form.divCont.set_height(400);
        		this.divContents.form.resetScroll();
        		if(this.isLoad) this.divContents.form.divCont.form.webEditor.callMethod("init", this.divContents.form.divCont.form.webEditor.getOffsetHeight()-35);
        	}
        };


        //파일세팅
        this.fnSetFile = function (aVFiles)
        {
        	var nLen	= aVFiles.length;

        	var sFileId	= "";
        	var oFile	= null;

        	for(var i=0; i<nLen; i++){
        		sFileId	= aVFiles[i].filename;
        		oFile  	= aVFiles[i];

        		//중복확인
        		if(this.futFile.existFile(oFile)){
        			sFileId += "_" + this.dsUpload.getRowCount();
        		}
        		this.futFile.addFile(sFileId, oFile);
        		var nRow = this.dsUpload.addRow();
        		this.dsUpload.setColumn(nRow, "OTXT_FILE_NM", sFileId);
        		this.divContents.form.divFile.form.staCntFile.set_text("(" + this.dsUpload.getRowCount() + "건)");
        	}
        };

        // 1~9까지 앞에 0 붙임.
        this.fnMakeTime =function(nTime)
        {
        	if(this.gfnIsNull(nTime)) return;
        	if(10 > nTime)  nTime = "0"+nTime;
        	return nTime;
        };

        // 입력된 글자 byte 구하기
        this.fnGetByte = function(str)
        {
        	var nByte = 0;
        	for(var i=0; i<str.length; i++){
        		(str.charCodeAt(i) > 127) ? nByte += 3 : nByte++ ;
        	}
        	return nByte;
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        //일정관리코드 combo변경
        this.divContents_cboTitle_onitemchanged = function(obj,e)
        {
        	 var nRow = this.dsScdNm.findRow("SCD_CD", obj.value);
        	 var nApndYn = this.dsScdNm.getColumn(nRow,"APND_YN");
        	 this.fnSetApndYn(nApndYn);
        };


        //웹브라우저 온로드 컴플리트
        this.divContents_divCont_webEditor_onloadcompleted = function(obj,e)
        {


        };

        this.isLoad=false;
        //웹브라우저 유저노티
        this.divContents_divCont_webEditor_onusernotify = function(obj,e)
        {
        	if (e.userdata=="instanceReady" && !this.isLoad){
        		this.isLoad=true;
        		obj.callMethod("init", obj.getOffsetHeight()-35);
        		this.setTimer(0,300);
        	}
        };

        // 저장 버튼
        this.divButton_btnSave_onclick = function(obj,e)
        {
        	// webEditor, TextArea 내용
        	var sCont = "";
        	if(this.divContents.form.divCont.form.webEditor.visible){
        		sCont = this.divContents.form.divCont.form.webEditor.callMethod("getData");
        	}else if(this.divContents.form.divCont.form.txa00.visible){
        		sCont = this.divContents.form.divCont.form.txa00.text;
        		sCont = this.gfnIsNull(sCont) ? "" : nexacro.replaceAll(sCont,"\n", "<br>");
        	}


        	this.dsList.setColumn(0, "CNTN", sCont);
        	this.dsList.setColumn(0, "TITLE", this.gfnTrim(this.divContents.form.edtTitle.value));

        	var nStartDayTime = this.dsList.getColumn(0,"START_DAY") + this.dsList.getColumn(0,"START_TIME") + this.dsList.getColumn(0,"START_MINUTES");
        	var nEndDayTime = this.dsList.getColumn(0,"END_DAY") + this.dsList.getColumn(0,"END_TIME") + this.dsList.getColumn(0,"END_MINUTES");
        	if(nStartDayTime > nEndDayTime) {
        		this.gfnAlert("msg.err.validator.date.great");
        		return;
        	}

        	// 정합성 체크
        	this.gfnClearValidation(this.dsList);
        	this.gfnSetValidation(this.dsList,"SCD_CD","일정마스터", "required");
        	this.gfnSetValidation(this.dsList, "SCD_SECT_CD", "유형", "required");
        	this.gfnSetValidation(this.dsList, "TITLE", "제목"	, "required");

        	// Dataset의 변경된 Row Validation check
        	if (this.gfnValidation(this.dsList, "U") == false) return;

        	if(this.fvOpenType == "add"){
        		if(this.futFile.filelist.length > 0){
        			this.fnFileUploadTran();
        		}else{
        			this.fnTranSave();
        		}
        	}else if(this.fvOpenType =="update" || this.fvOpenType=="searchUpdate"){
        	    // 파일과 내용 모두 변경된 Data가 없다면.
        		if(!this.gfnDsIsUpdated(this.dsUpload)&&!this.gfnDsIsUpdated(this.dsList)){
        				this.gfnAlert("msg.save.nochange"); // 저장할 데이터가 없습니다.
        				return;
        		}else{
        			//file 삭제 및 추가
        			if(this.dsUpload.getDeletedRowCount()> 0 && this.futFile.filelist.length > 0){
        				this.fvFileDelUp = "Y";
        			    this.fnTranDeleteFile();
        			//file 삭제만
        			}else if(this.dsUpload.getDeletedRowCount()> 0 && this.futFile.filelist.length == 0){
        				this.fvFileDel	 = "Y";
        				this.fnTranDeleteFile();
        			//file 추가만
        			}else if(this.dsUpload.getDeletedRowCount()== 0 && this.futFile.filelist.length > 0){
        				this.fnFileUploadTran();
        			//내용만
        			}else if(this.dsUpload.getDeletedRowCount()== 0 && this.futFile.filelist.length == 0){
        				this.fnTranSave();
        			}
        		}
        	}
        };

        //첨부파일 삭제 버튼 클릭
        this.divContents_divFile_grdFile_oncellclick = function(obj,e)
        {
        	var nRow = e.row;
        	if(e.cell == 1){
        		if(this.fvOpenType=="add"){
        			//입력모드일경우 지금 첨부된 파일이므로 그냥 삭제
        			var sFileNm = this.dsUpload.getColumn(nRow, "OTXT_FILE_NM");
        			this.futFile.removeFile(sFileNm);
        			this.dsUpload.deleteRow(nRow);
        			this.divContents.form.divFile.form.staCntFile.set_text("(" + this.dsUpload.getRowCount() + "건)");
        		}else{
        			//이미 서버에 저장된 파일은 파일 삭제 진행
        			this.gfnAlert("confirm.before.filedelete",[],"deleteFileUpdate", "fnMsgCallback");
        		}
        	}
        };

        //파일 드래그 앤 드랍
        this.divContents_divFile_grdFile_ondrop = function(obj,e)
        {
        	this.fnSetFile(e.filelist);
        };

        //첨부파일 선택
        this.divContents_divFile_btnFile_onclick = function(obj,e)
        {
        	this.fdgFile.open("file upload..", FileDialog.MULTILOAD);
        };

        //첨부파일 전체 삭제
        this.divContents_divFile_btnFileDel_onclick = function(obj,e)
        {
        	if(this.fvOpenType=="add"){
        		//입력모드일경우 지금 첨부된 파일이므로 그냥 삭제
        		this.futFile.clearFileList();
        		this.dsUpload.deleteAll();
        		this.divContents.form.divFile.form.staCntFile.set_text("(" + this.dsUpload.getRowCount() + "건)");
        	}
        	if(this.fvOpenType=="update" || this.fvOpenType =="searchUpdate"){
        		//수정모드일경우 확인
        		if(this.dsUpload.getRowCount()>0){
        			this.gfnAlert("confirm.before.filedeleteall",[],"deleteFileAllUpdate", "fnMsgCallback");
        		}
        	}
        };

        //파일다이얼로그 클로즈
        this.fdgFile_onclose = function(obj,e)
        {
        	if( e.reason == 3 ){
        		//멀티업로드일경우
        		this.fnSetFile(e.virtualfiles);
        	}
        };

        //파일업로드트랜스퍼 온 에러
        this.futFile_onerror = function(obj,e)
        {
        	this.gfnAlert("msg.server.error.msg" ,[e.errormsg]);
        };

        //파일업로드트랜스퍼 온 서세스
        this.futFile_onsuccess = function(obj,e)
        {
        	this.dsList.setColumn(0, "FILE_ID", e.datasets[0].getColumn(0,"FILE_ID"));
        	this.fnTranSave();
        };

        // 일자 변경(종료일을 시작일보다 빠르게 설정할 수 없음)
        this.fnDateTime_onchanged = function(obj,e)
        {
        	var nCalFrom	= this.divContents.form.calFrom.value;
        	var nCalTo		= this.divContents.form.calTo.value;
        	var nTime1		= this.divContents.form.cboFromTime.value;
        	var nMinutes1	= this.divContents.form.cboFromMinutes.value;
        	var nTime2		= this.divContents.form.cboToTime.value;
        	var nMinutes2	= this.divContents.form.cboToMinutes.value;

        	if(nCalFrom>nCalTo) {
        		this.divContents.form.calTo.set_value(nCalFrom);
        	}else if(nCalFrom+nTime1>nCalTo+nTime2){
        		if(Number(nTime1)+1 != "24"){
        			this.divContents.form.cboToTime.set_value(this.fnMakeTime(Number(nTime1)+1)); //00~09 앞에 0 추가해주기..
        		}else if(Number(nTime1)+1=="24"){
        			this.divContents.form.calTo.set_value(Number(nCalTo)+1);
        			this.divContents.form.cboToTime.set_value("00");
        		}
        	}else if(nCalFrom+nTime1+nMinutes1 > nCalTo+nTime2+nMinutes2){
        		if(Number(nMinutes1)+10 !="60"){
        			this.divContents.form.cboToMinutes.set_value(Number(nMinutes1)+10);
        		}else if(Number(nMinutes1)+10 =="60"){
        			this.divContents.form.cboToTime.set_value(this.fnMakeTime(Number(nTime2)+1));
        			this.divContents.form.cboToMinutes.set_value("00");
        		}
        	}
        };

        // 제목 입력 시 글자 수 제한
        this.divContents_edtTitle_oninput = function(obj,e)
        {
        	var nLength = this.fnGetByte(obj.value);
        	if(nLength==100) {
        		obj.set_maxlength(obj.value.length);
        	}else if(nLength>100){
        		obj.set_maxlength(obj.value.slice(0,-1).length);
        	}else{
        		obj.set_maxlength("");
        	}
        };

        //팝업 닫기
        this.divButton_btnClose_onclick = function(obj,e)
        {
        	this.close();
        };


        this.divContents_cboSectCd_onitemchanged = function(obj,e)
        {
        	if(this.divContents.form.cboSectCd.value == "MT"){
        		//내용 가져옴
        		var sRemk = nexacro.replaceAll(this.objects[this.divContents.form.cboSectCd.innerdataset].lookup("SSC_CD","MT", "REMK"),"\n","<BR>");
        // 		var sRemk = ""
        // 			sRemk+= "1. 미팅사 : <BR>";
        // 			sRemk+= "2. 지역 : <BR>";
        // 			sRemk+= "3. 방문시간 : <BR>";
        // 			sRemk+= "4. 목적 : <BR>";
        // 			sRemk+= "5. 동행자 : <BR>";
        // 			sRemk+= "6. 기타 : <BR>";

        		if(!this.gfnIsNull(sRemk)){
        			this.divContents.form.divCont.form.webEditor.callMethod("setData", sRemk);
        		}
        	}else{
        	    this.divContents.form.divCont.form.webEditor.callMethod("setData", "");
        	}
        };

        this.schedulePu_ontimer = function(obj,e)
        {
        	if(e.timerid == 0){
        		this.killTimer(0);
        	//	this.divContents.form.edtTitle.setFocus();

        		//첨부파일 여부(Editor가 로딩 되기 전에 callMethod 호출되면 에러발생. 웹브라우저 온로드 컴플리트 후 실행되게 함.)
        		this.fnSetApndYn(this.fvApndYn);

        		//내용 가져옴
        		var sCntn = this.dsList.getColumn(0, "CNTN");
        		if(!this.gfnIsNull(sCntn)){
        			this.divContents.form.divCont.form.webEditor.callMethod("setData", sCntn);
        		}else{
        			if(this.divContents.form.cboSectCd.value == "MT"){
        				//내용 가져옴
        				var sRemk = nexacro.replaceAll(this.objects[this.divContents.form.cboSectCd.innerdataset].lookup("SSC_CD","MT", "REMK"),"\n","<BR>");
        	// 			var sRemk = ""
        	// 				sRemk+= "1. 미팅사 : <BR>";
        	// 				sRemk+= "2. 지역 : <BR>";
        	// 				sRemk+= "3. 방문시간 : <BR>";
        	// 				sRemk+= "4. 목적 : <BR>";
        	// 				sRemk+= "5. 동행자 : <BR>";
        	// 				sRemk+= "6. 기타 : <BR>";
        				if(!this.gfnIsNull(sRemk)){
        					this.divContents.form.divCont.form.webEditor.callMethod("setData", sRemk);
        				}
        			}
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.schedulePu_onload,this);
            this.addEventHandler("ontimer",this.schedulePu_ontimer,this);
            this.divContents.form.divCont.form.webEditor.addEventHandler("onloadcompleted",this.divContents_divCont_webEditor_onloadcompleted,this);
            this.divContents.form.divCont.form.webEditor.addEventHandler("onusernotify",this.divContents_divCont_webEditor_onusernotify,this);
            this.divContents.form.divFile.form.staBg03.addEventHandler("onclick",this.divContents_divFile_staBg03_onclick,this);
            this.divContents.form.divFile.form.btnFileDel.addEventHandler("onclick",this.divContents_divFile_btnFileDel_onclick,this);
            this.divContents.form.divFile.form.btnFile.addEventHandler("onclick",this.divContents_divFile_btnFile_onclick,this);
            this.divContents.form.divFile.form.grdFile.addEventHandler("ondrop",this.divContents_divFile_grdFile_ondrop,this);
            this.divContents.form.divFile.form.grdFile.addEventHandler("oncellclick",this.divContents_divFile_grdFile_oncellclick,this);
            this.divContents.form.edtTitle.addEventHandler("onchanged",this.divContents_edtTitle_onchanged,this);
            this.divContents.form.edtTitle.addEventHandler("oninput",this.divContents_edtTitle_oninput,this);
            this.divContents.form.calFrom.addEventHandler("onchanged",this.fnDateTime_onchanged,this);
            this.divContents.form.cboFromTime.addEventHandler("onitemchanged",this.fnDateTime_onchanged,this);
            this.divContents.form.cboFromMinutes.addEventHandler("onitemchanged",this.fnDateTime_onchanged,this);
            this.divContents.form.calTo.addEventHandler("onchanged",this.fnDateTime_onchanged,this);
            this.divContents.form.cboToTime.addEventHandler("onitemchanged",this.fnDateTime_onchanged,this);
            this.divContents.form.cboToMinutes.addEventHandler("onitemchanged",this.fnDateTime_onchanged,this);
            this.divContents.form.cboTitle.addEventHandler("onitemchanged",this.divContents_cboTitle_onitemchanged,this);
            this.divContents.form.cboSectCd.addEventHandler("onitemchanged",this.divContents_cboSectCd_onitemchanged,this);
            this.divButton.form.btnClose.addEventHandler("onclick",this.divButton_btnClose_onclick,this);
            this.divButton.form.btnSave.addEventHandler("onclick",this.divButton_btnSave_onclick,this);
            this.fdgFile.addEventHandler("onclose",this.fdgFile_onclose,this);
            this.futFile.addEventHandler("onerror",this.futFile_onerror,this);
            this.futFile.addEventHandler("onsuccess",this.futFile_onsuccess,this);
        };
        this.loadIncludeScript("schedulePu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
