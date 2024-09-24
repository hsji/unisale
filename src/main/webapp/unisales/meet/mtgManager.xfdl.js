(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("mtgManager");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,780);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"IN_FDATE\" type=\"STRING\" size=\"256\"/><Column id=\"IN_TDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"LIMIT\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_YN\" type=\"string\" size=\"32\"/><Column id=\"DT_LVL\" type=\"int\" size=\"4\"/><Column id=\"DT_NAME\" type=\"string\" size=\"32\"/><Column id=\"HIPO_DT_CD\" type=\"string\" size=\"32\"/><Column id=\"SortOrder\" type=\"string\" size=\"32\"/><Column id=\"CHGE_ID\" type=\"string\" size=\"32\"/><Column id=\"DT_CD\" type=\"string\" size=\"32\"/><Column id=\"SYS_CODE\" type=\"string\" size=\"32\"/><Column id=\"HIPO_DT_NAME\" type=\"undefined\" size=\"0\"/><Column id=\"BIZ_CODE\" type=\"string\" size=\"32\"/><Column id=\"DT_ORDR\" type=\"int\" size=\"4\"/><Column id=\"INPT_ID\" type=\"string\" size=\"32\"/><Column id=\"INPT_DTTM\" type=\"undefined\" size=\"0\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCheckDept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeptList", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDocInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"USED_FLAG\" type=\"string\" size=\"32\"/><Column id=\"MTG_END_TM\" type=\"string\" size=\"32\"/><Column id=\"MTG_DATE\" type=\"string\" size=\"32\"/><Column id=\"MTG_RESULT_TYPE\" type=\"string\" size=\"32\"/><Column id=\"MTG_RESULT_CN\" type=\"string\" size=\"32\"/><Column id=\"USER_ID\" type=\"string\" size=\"32\"/><Column id=\"CLSDR_MTG_AT\" type=\"string\" size=\"32\"/><Column id=\"ETC_MATTER\" type=\"string\" size=\"32\"/><Column id=\"HOST_NAME\" type=\"string\" size=\"32\"/><Column id=\"HOST_ID\" type=\"string\" size=\"32\"/><Column id=\"BIZ_CODE\" type=\"string\" size=\"32\"/><Column id=\"DOC_TITLE\" type=\"string\" size=\"32\"/><Column id=\"INPT_DTTM\" type=\"string\" size=\"32\"/><Column id=\"EXPIRE_DATE\" type=\"string\" size=\"32\"/><Column id=\"EDIT_INFO\" type=\"string\" size=\"32\"/><Column id=\"DOC_ID\" type=\"string\" size=\"32\"/><Column id=\"PDF_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"MTG_CNT\" type=\"int\" size=\"4\"/><Column id=\"WORK_NAME\" type=\"string\" size=\"32\"/><Column id=\"MTG_MTR_CN\" type=\"string\" size=\"32\"/><Column id=\"MTG_BEGIN_TM\" type=\"string\" size=\"32\"/><Column id=\"MTG_PLACE_CD\" type=\"string\" size=\"32\"/><Column id=\"MTG_SEQ\" type=\"int\" size=\"4\"/><Column id=\"READNG_AT\" type=\"string\" size=\"32\"/><Column id=\"HOST_TYPE\" type=\"string\" size=\"32\"/><Column id=\"USER_NAME\" type=\"string\" size=\"32\"/><Column id=\"HOST_WORK_NAME\" type=\"string\" size=\"32\"/><Column id=\"CHGE_ID\" type=\"string\" size=\"32\"/><Column id=\"MTG_AT\" type=\"string\" size=\"32\"/><Column id=\"CHGE_DTTM\" type=\"datetime\" size=\"17\"/><Column id=\"SYS_CODE\" type=\"string\" size=\"32\"/><Column id=\"PDF_ORIG_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"PDF_FILE_PATH_NM\" type=\"string\" size=\"32\"/><Column id=\"READNG_DATE\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUser", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserTree", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond2", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUbiDoc", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHistory", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdList","10.00","70","282",null,null,"10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj.getSetter("uFunction").set("!filter,!sort,!colfix,!initial");
            obj.set_borderRadius("10px");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"400\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"회의그룹 리스트\"/></Band><Band id=\"body\"><Cell text=\"bind:DT_NAME\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:DT_LVL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","10","10",null,"50","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","11","86","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("문서명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo01","56","-158","185","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
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
            obj.set_taborder("5");
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
            obj.set_taborder("6");
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
            obj.set_taborder("7");
            obj.set_value("20190308");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10","48","28","25",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMsgCd","staTitle00:1.00","10","191","27",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle02","edtMsgCd:0.00","11","97","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("작성자ID");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMsgTxt","staTitle02:0.00","10","140","27",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle03_00","edtMsgTxt:0","11","84","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("작성일");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divCalPeriod","staTitle03_00:4","10","280","27",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_url("common::cmmPeriodCalendar.xfdl");
            obj.set_text("");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("Button00","divCalPeriod:0","12","20","23",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_background("url(\'theme://images/img_titlebar_Close.png\') no-repeat center center");
            obj.set_border("0px none");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divDetail","302.00","105",null,"300","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Grid("grdUser",null,"0","396",null,"1","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_background("transparent");
            obj.set_binddataset("dsUser");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_LF_searchResult");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"55\"/><Column size=\"339\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"36\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"참석자\"/></Band><Band id=\"body\"><Cell expr=\"USER_NAME.substr(0,1)\" cssclass=\"expr:comp.parent.parent.parent.fnCssName(currow)\" textAlign=\"center\"/><Cell col=\"1\" expr=\"USER_NAME + &apos; &apos; + WORK_NAME\" textAlign=\"left\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg","0","0",null,null,"394","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_background("linear-gradient(to right,#007f7d,#006db3)");
            this.divDetail.addChild(obj.name, obj);

            obj = new ImageViewer("imgSnap","27.35%","29","28.70563674321503%",null,null,"-15",null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_visible("true");
            obj.set_stretch("fit");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle01","30.00","24","463","36",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_visible("true");
            obj.set_wordWrap("char");
            obj.set_fittocontents("height");
            obj.set_text("242423");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnView","5.32%","220","90","30",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("열람");
            obj.set_cssclass("btn_TFDM_Save");
            obj.set_visible("true");
            obj.getSetter("btnType").set("E");
            obj.set_enable("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnSendMail","btnView:7.00","220","121","30",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_text("참석자메일발송");
            obj.set_cssclass("btn_TFDM_Save");
            obj.set_visible("true");
            obj.getSetter("btnType").set("E");
            obj.set_enable("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnSign","btnSendMail:7","220","121","30",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_text("결재요청");
            obj.set_cssclass("btn_TFDM_Save");
            obj.set_visible("true");
            obj.getSetter("btnType").set("E");
            obj.set_enable("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDate","98.00","70","250","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_visible("true");
            obj.set_wordWrap("char");
            obj.set_fittocontents("height");
            obj.set_text("242423");
            obj.set_color("#ffffff");
            obj.set_font("bold 12px/normal \"noto\",\"Malgun Gothic\",\"Arial\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staHost","98.00","104","250","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_visible("true");
            obj.set_wordWrap("char");
            obj.set_fittocontents("height");
            obj.set_text("242423");
            obj.set_color("#ffffff");
            obj.set_font("bold 12px/normal \"noto\",\"Malgun Gothic\",\"Arial\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnEdit",null,"220","82","30","410",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_text("편집");
            obj.set_cssclass("btn_TFDM_Add");
            obj.set_visible("true");
            obj.getSetter("btnType").set("E");
            obj.set_enable("false");
            obj.set_background("#ffffff");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("divContents","grdList:10.00","divDetail:10",null,null,"20","50",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","grdList:10.00","60","738","43",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Button("btnEdit","57.109375%","divContents:10","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("보기");
            obj.set_cssclass("btn_TFDM_Save");
            obj.set_visible("false");
            obj.getSetter("btnType").set("E");
            this.addChild(obj.name, obj);

            obj = new Grid("grdUserList","27.00","401",null,null,"1000","120",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsUserTree");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseexpandkey("true");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"252\"/><Column size=\"201\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"소속/이름\"/><Cell col=\"1\" text=\"E-Mail\"/></Band><Band id=\"body\"><Cell text=\"bind:TITLE\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:DEPT_LVL\" treecheck=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:EMAIL\" edittype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form.divCalPeriod
            obj = new Layout("default","",0,0,this.divSearch.form.divCalPeriod.form,function(p){});
            this.divSearch.form.divCalPeriod.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form
            obj = new Layout("default","",0,0,this.divContents.form,function(p){});
            this.divContents.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,780,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","divSearch.form.edtMsgCd","value","dsCond","DOC_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.edtMsgTxt","value","dsCond","INPT_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboUseYN","value","dsCond","SEND_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::cmmPeriodCalendar.xfdl");
        };
        
        // User Script
        this.registerScript("mtgManager.xfdl", function() {
        /**
        *  문서관리 메인화면
        *  @FileName 	mtgManager.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2024/03/25
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/03/25			DXTOBE						최초생성
        *******************************************************************************
        */
        this.fvRedrawPos = -1;		// 사용안함
        this.fvSubItemW = 320;
        this.fvSubItemH = 140;
        /**
        * @function docMain_onload  <br>
        * description 기간달력 초기화 , 문서(여기서는 부서)리스트 조회
        */
        this.docMain_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	this.divDetail.set_height(0);
        	this.resetScroll();
        	this.divSearch.form.divCalPeriod.form.fnInitComp(this, "periodCalendar", this.fnCallbackPeriodCalendar, null);
        	this.fnUserListSearch();
        	this.fnDocGroupSearch();
        };


        // 01."기간달력" Callback
        this.fnCallbackPeriodCalendar = function (sPopId, sValue)
        {
        	if (sPopId == "periodCalendar")
        	{
        		console.log("sValue", sValue);
        		this.dsCond.setColumn(0, "IN_FDATE", sValue.fromdate);
        		this.dsCond.setColumn(0, "IN_TDATE", sValue.todate);
        	}
        };

        /**
        * @function fnUserListSearch  <br>
        * description 열람가능정보를 확인하기 위해 조직 구성 TREE 조회
        */
        this.fnUserListSearch = function ()
        {
        	this.gfnSetMap("meet", "CompanyDocMapList");

        	var strSvcId    = "selectCompanyMapList";
        	var strSvcUrl   = "searchCommonBaseService.do";
        	var inData      = "dsCond=dsCond dsMap=dsMap";
        	var outData     = "dsUserTree=dsList";
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
        * @function fnReadUserSearch  <br>
        * description 열람가능 사용자조회
        */
        this.fnMeetUserSearch = function (v)
        {
        	this.gfnSetMap("meet", "MeetUserList");

        	var strSvcId    = "searchMeetUser";
        	var strSvcUrl   = "searchCommonBaseService.do";
        	var inData      = "dsCond=dsCond2 dsMap=dsMap";
        	var outData     = "dsUser=dsList";
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
        * @function fnDocGroupSearch  <br>
        * description 문서그룹조회
        */
        this.fnDocGroupSearch = function ()
        {
        	this.gfnSetMap("meet", "DocuTreeList");

        	var strSvcId    = "searchDocuTree";
        	var strSvcUrl   = "searchCommonBaseService.do";
        	var inData      = "dsCond=dsCond dsMap=dsMap";
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
        * @function fnGetDeptList  <br>
        * description 쿼리에서 조직을 in으로 조회 - 리스트 담기
        */
        this.fnGetDeptList = function ()
        {
        	var arrList = [];
        	var nRow = this.dsList.rowposition;
        	arrList.push("'" + this.dsList.getColumn(nRow, "BIZ_CODE") + "'");
        	var curLvl = this.dsList.getColumn(nRow, "DT_LVL");

        	var lvl;
        	if(nRow >= 0) {
        		for(var i=nRow+1,len=this.dsList.rowcount;i<len;i++) {
        			lvl = this.dsList.getColumn(i, "DT_LVL");
        			if(lvl <= curLvl) continue;
        			arrList.push("'" + this.dsList.getColumn(i, "BIZ_CODE") + "'");
        		}
        	}
        	var deptList = "(" + arrList.join(",") + ")";
        	this.dsCond.setColumn(0, "DOC_LIST", deptList);
        };

        /**
        * @function fnDocSearch  <br>
        * description 그룹별 문서 조회
        */
        this.fnDocSearch = function (v)
        {
        	if(v) {
        		this.fvRedrawPos = this.dsList.rowposition;
        	}

        	this.fnGetDeptList();	// 하위조직 담기

        	var nFullW = this.divContents.getOffsetWidth();
        	var nSubDivW = this.fvSubItemW;
        	var nCount = Math.floor(nFullW / nSubDivW);

        	this.dsCond.setColumn(0, "LIMIT", nCount * 3);

        	this.gfnSetMap("meet", "MeetList");

        	var strSvcId    = "searchDocuContents";
        	var strSvcUrl   = "searchCommonBaseService.do";
        	var inData      = "dsCond=dsCond dsMap=dsMap";
        	var outData     = "dsDocInfo=dsList";
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
        * @function fnHistorySearch  <br>
        * description 발송히스토리 조회
        */
        this.fnHistorySearch = function ()
        {
        	this.gfnSetMap("meet", "MeetHistory");

        	var strSvcId    = "searchMailHistory";
        	var strSvcUrl   = "searchCommonBaseService.do";
        	var inData      = "dsCond=dsCond2 dsMap=dsMap";
        	var outData     = "dsHistory=dsList";
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
        * @function fnOpenSendMailPop  <br>
        * description 메일발송팝업실행
        */
        this.fnOpenSendMailPop = function(sType)
        {
        	console.log("this.fnOpenSendMailPop");
        	var nRow 	= this.dsDocInfo.rowposition;
        	var sTitle  = "메일발송";
        	var oArg    = { pvUUID:		this.dsDocInfo.getColumn(nRow, "DOC_ID"),
        					pvSysCode:	this.dsDocInfo.getColumn(nRow, "SYS_CODE"),
        					pvBizCode:	this.dsDocInfo.getColumn(nRow, "BIZ_CODE"),
        					pvType:		sType
        				  };
        	var oOption = {title:sTitle , titlebar:true};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("docFormMail", "meet::docmanager/mtgManagerMail.xfdl", oArg, sPopupCallBack, oOption);
        };
        /**
        * @function fnCallback  <br>
        * description 서비스콜백
        */
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "searchMeetUser":
        			this.dsUser.set_rowposition(-1);
        			break;
        		case "selectDeptList":
        			break;
        		case "searchMailHistory":
        			if(this.dsHistory.rowcount > 1) {
        				// HISTORY 팝업 오픈
        				var sTitle  = "메일발송현황 - 선택";
        				var oArg    = {};
        				var oOption = {title:sTitle , titlebar:true};
        				var sPopupCallBack = "fnPopupCallback";
        				this.gfnOpenPopup("selectHistory", "meet::docmanager/mtgCmmHistoryPu.xfdl", oArg, sPopupCallBack, oOption);
        			} else if(this.dsHistory.rowcount == 1) {
        				this.dsHistory.set_rowposition(0);
        				this.fnOpenSendMailPop("Y");
        			} else {
        				this.fnOpenSendMailPop("N");
        			}
        			break;
        		case "searchDocuContents":
        			this.fnMakeSnapShot();
        			break;
        		case "searchDocuTree":	// dxonly
        			// 이전페이지로 재조회하는 경우
        			if(this.getOwnerFrame().STCD && this.getOwnerFrame().DTCD) {
        				var nRow = this.dsList.findRowExpr("ST_CD=='" + this.getOwnerFrame().STCD + "'" +
        								" && DT_CD=='" + this.getOwnerFrame().STCD + "'");
        				console.log(nRow);
        				if(nRow>=0) {
        					this.dsList.set_rowposition(nRow);
        				}
        				this.getOwnerFrame().STCD = this.getOwnerFrame().DTCD = null;
        			}
        			break;
        		default :
        	}
        };


        /**
        * @function fnPopupCallback  <br>
        * description 팝업코르백
        */
        this.fnPopupCallback = function (sPopupId, sRtn)
        {
        	switch(sPopupId) {
        		case "docFormNew":
        			this.fnRefreshMain();
        			break;
        		case "docFormEdit":
        			this.fnRefreshMain();
        			break;
        		case "selectHistory" :
        			// 발송건이 여러개인 경우 팝업선택
        			if(!this.gfnIsNull(sRtn)){
        				this.fnOpenSendMailPop("Y");
        			}
        			break
        		case "docFormMail" :
        			this.fnRefreshMain();
        			break
        		default:break;
        	}
        };
        /**
        * @function fnMakeSnapShot  <br>
        * description 문서리스트를 좌측에 동적으로 생성
        */
        this.fnMakeSnapShot = function ()
        {
        	// 다 삭제
        	var comps = this.divContents.form.components;
        	for(var i=comps.length-1;i>=0;i--) {
        		if(comps[i].id != "img00") {
        			var comp = this.divContents.form.removeChild(comps[i].id);
        			comp.destroy();
        			comp = null;
        		}
        	}

        	var nFullW = this.divContents.getOffsetWidth();
        	var nSubDivW = this.fvSubItemW;
        	var nSubDivH = this.fvSubItemH;
        	var nCount = Math.floor(nFullW / nSubDivW);

        	var nBaseLeft = 0;
        	// line over시 left 재정렬
        	if(this.dsDocInfo.rowcount >= nCount) {
        		nBaseLeft = (nFullW - (nSubDivW*nCount)) / 2;
        	}
        	var nLeft = nBaseLeft;
        	var nTop = 0;
        	var nCnt = 0;
        	var sDivId = "";

        	// 부모는 추가 안함.
        	if(this.grdList.getTreeChildCount( this.dsList.rowposition, true )==0) {
        		// add - 기본
        		sDivId = "divSub_add";
        		var objDiv = new Div(sDivId, nLeft, nTop, nSubDivW, nSubDivH, null, null);
        		objDiv.set_async(false);
        		objDiv.set_url("meet::docmanager/mtgManagerItemSub.xfdl");
        		this.divContents.form.addChild(sDivId, objDiv);
        		objDiv.show();

        		objDiv.form.fnInit("add", null, -1,
        						this.dsList.getColumn(this.dsList.rowposition, "SYS_CODE"),
        						this.dsList.getColumn(this.dsList.rowposition, "BIZ_CODE"));

        		nLeft += nSubDivW;
        		if(nCnt >= nCount) {
        			nCnt = 0;
        			nTop += nSubDivH;
        			nLeft = nBaseLeft;
        		}
        	}
        	for(var i=0,len=this.dsDocInfo.rowcount;i<len;i++) {
        		nCnt++;
        		sDivId = "divSub_" + i;
        		var objDiv = new Div(sDivId, nLeft, nTop, nSubDivW, nSubDivH, null, null);
        		objDiv.set_async(false);
        		objDiv.set_url("meet::docmanager/mtgManagerItemSub.xfdl");
        		this.divContents.form.addChild(sDivId, objDiv);
        		objDiv.show();

        		objDiv.form.fnInit("", this.dsDocInfo, i);
        		nLeft += nSubDivW;
        		if(nCnt >= nCount) {
        			nCnt = 0;
        			nTop += nSubDivH;
        			nLeft = nBaseLeft;
        		}
        	}
        	this.divContents.form.resetScroll();
        };

        /**
        * @function fnMakeSnapShotResize  <br>
        * description resize 처리
        */
        this.fnMakeSnapShotResize = function ()
        {
        	var nFullW = this.divContents.getOffsetWidth();
        	var nSubDivW = this.fvSubItemW;
        	var nSubDivH = this.fvSubItemH;
        	var nCount = Math.floor(nFullW / nSubDivW);

        	var nBaseLeft = 0;
        	// line over시 left 재정렬
        	if(this.dsDocInfo.rowcount >= nCount) {
        		nBaseLeft = (nFullW - (nSubDivW*nCount)) / 2;
        	}
        	var nLeft = nBaseLeft;
        	var nTop = 0;
        	var nCnt = 0;
        	var sDivId = "";
        	var i = 0;

        	// 부모는 추가 안함.
        	if(this.grdList.getTreeChildCount( this.dsList.rowposition, true )==0) {
        		// add - 기본
        		sDivId = "divSub_add";
        		var objDiv = this.divContents.form[sDivId];
        		objDiv.set_left(nLeft);
        		objDiv.set_top(nTop);
        		nLeft += nSubDivW;
        		if(nCnt >= nCount) {
        			nCnt = 0;
        			nTop += nSubDivH;
        			nLeft = nBaseLeft;
        		}
        	}

        	for(i=0,len=this.dsDocInfo.rowcount;i<len;i++) {
        		nCnt++;
        		sDivId = "divSub_" + i;
        		var objDiv = this.divContents.form[sDivId];
        		objDiv.set_left(nLeft);
        		objDiv.set_top(nTop);
        		nLeft += nSubDivW;
        		if(nCnt >= nCount) {
        			nCnt = 0;
        			nTop += nSubDivH;
        			nLeft = nBaseLeft;
        		}
        	}

        	this.divContents.form.resetScroll();
        };
        /**
        * @function fnShowDetail  <br>
        * description 상단 보이기
        * @param v visible
        * @param s sys code
        * @param b biz code
        * @param d doc id
        * @param a 열람여부
        * @param i row index
        */
        this.fnShowDetail = function(v, s, b, d, a, i)
        {
        	this.divDetail.set_height((v?300:0));
        	if(v == true) {
        		this.dsDocInfo.set_rowposition(i);
        		var param = "S=" + s + "&B=" + b + "&D=" + d;
        		if(this.divDetail.form.imgSnap._param != param) {
        			this.divDetail.form.imgSnap._param = param;
        			this.divDetail.form.imgSnap.set_image("svcUrl::searchSnapshot.do?" + param);
        		}
        		this.divDetail.form.staTitle01.set_text(this.dsDocInfo.getColumn(i, "DOC_TITLE"));
        		var dt = "일시 : ";
        		dt += this.gfnGetDateFormat(this.dsDocInfo.getColumn(i, "MTG_DATE"),"",true);
        		dt += " " + this.gfnGetTimeFormat(this.dsDocInfo.getColumn(i, "MTG_BEGIN_TM").substr(8,4))
        						+ " ~ "
        						+ this.gfnGetTimeFormat(this.dsDocInfo.getColumn(i, "MTG_END_TM").substr(8,4));
        		this.divDetail.form.staDate.set_text(dt);

        		this.divDetail.form.staHost.set_text("주체자 : " + this.dsDocInfo.getColumn(i, "HOST_NAME"));
        		this.dsCond2.setColumn(0, "DOC_ID", d);
        		this.fnMeetUserSearch();

        		if(a == true) {	// 열람권한
        			this.divDetail.form.btnView.set_enable(true);
        		}
        		var inId = this.dsDocInfo.getColumn(i, "INPT_ID");
        		if(inId == this.gfnGetUserInfo("USER_ID")) {
        			this.divDetail.form.btnSendMail.set_enable(true);
        			this.divDetail.form.btnSign.set_enable(true);
        			this.divDetail.form.btnEdit.set_enable(true);
        		}
        	}
        	this.resetScroll();
        };

        this.grdList_oncellclick = function(obj,e)
        {
        	if(e.clickitem != "treeitembutton") {

        	}
        };

        /**
        * @function dsList_onrowposchanged  <br>
        * description row 변경시 재조회
        */
        this.dsList_onrowposchanged = function(obj,e)
        {
        	if(e.newrow >= 0) {
        		this.fnShowDetail(false);
        		this.staTitle01.set_text(obj.getColumn(e.newrow, "DT_NAME") + " 문서리스트");
        		this.fnDocSearch();
        	}
        };
        /**
        * @function divSearch_btnSearch_onclick  <br>
        * description 조회영역 조회버튼
        */
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.fnDocSearch();
        };

        this.divSearch_Button00_onclick = function(obj,e)
        {
        	this.divSearch.form.divCalPeriod.form.fnSetValue("", "");
        };
        /**
        * @function docMain_onsize  <br>
        * description resize시 좌측화면 재조정
        */
        this.docMain_onsize = function(obj,e)
        {
        	this.fnMakeSnapShotResize();
        };

        this.searchEdit_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13) {
        		this.fnDocSearch();
        	}
        };
        /**
        * @function divDetail_btnView_onclick  <br>
        * description 열람
        */
        this.divDetail_btnView_onclick = function(obj,e)
        {
        	var sTitle  = "회의록열람";
        	var nRow	= this.dsDocInfo.rowposition;
        	var oArg    = { pvUUID:		this.dsDocInfo.getColumn(nRow,"DOC_ID"),
        					pvSysCode:	this.dsDocInfo.getColumn(nRow,"SYS_CODE"),
        					pvBizCode:	this.dsDocInfo.getColumn(nRow,"BIZ_CODE")
        				  };
        	var oOption = {title:sTitle , titlebar:true};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("docView", "meet::docmanager/mtgViewPu.xfdl", oArg, sPopupCallBack, oOption);
        };
        /**
        * @function divDetail_btnEdit_onclick  <br>
        * description 편집
        */
        this.divDetail_btnEdit_onclick = function(obj,e)
        {
        	var nRow	= this.dsDocInfo.rowposition;
        	this.getOwnerFrame().pvDocId = this.dsDocInfo.getColumn(nRow,"DOC_ID");
        	this.getOwnerFrame().pvSyscode = this.dsDocInfo.getColumn(nRow,"SYS_CODE");
        	this.getOwnerFrame().pvBizcode = this.dsDocInfo.getColumn(nRow,"BIZ_CODE");

        	this.getOwnerFrame().STCD = this.dsList.getColumn(this.dsList.rowposition, "SYS_CODE");
        	this.getOwnerFrame().DTCD = this.dsList.getColumn(this.dsList.rowposition, "BIZ_CODE");
        	this.getOwnerFrame().form.divWork.set_url("meet::docmanager/mtgManagerNew.xfdl");

        };
        /**
        * @function divDetail_btnSendMail_onclick  <br>
        * description 참석자메일발송
        */
        this.divDetail_btnSendMail_onclick = function(obj,e)
        {
        	this.dsCond2.setColumn(0, "DOC_ID", this.dsDocInfo.getColumn(this.dsDocInfo.rowposition,"DOC_ID"));
        	this.fnHistorySearch();
        };

        this.fnCssName = function(currow)
        {
        	var mod = currow%10;
        	return "lv" + mod;
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.docMain_onload,this);
            this.addEventHandler("onsize",this.docMain_onsize,this);
            this.addEventHandler("ontimer",this.docMain_ontimer,this);
            this.grdList.addEventHandler("oncellclick",this.grdList_oncellclick,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.divSearch.form.edtMsgCd.addEventHandler("onkeyup",this.searchEdit_onkeyup,this);
            this.divSearch.form.edtMsgTxt.addEventHandler("onkeyup",this.searchEdit_onkeyup,this);
            this.divSearch.form.Button00.addEventHandler("onclick",this.divSearch_Button00_onclick,this);
            this.divDetail.form.imgSnap.addEventHandler("onclick",this.imgSnap_onclick,this);
            this.divDetail.form.btnView.addEventHandler("onclick",this.divDetail_btnView_onclick,this);
            this.divDetail.form.btnSendMail.addEventHandler("onclick",this.divDetail_btnSendMail_onclick,this);
            this.divDetail.form.btnSign.addEventHandler("onclick",this.btnEdit_onclick,this);
            this.divDetail.form.btnEdit.addEventHandler("onclick",this.divDetail_btnEdit_onclick,this);
            this.btnEdit.addEventHandler("onclick",this.btnEdit_onclick,this);
            this.grdUserList.addEventHandler("oncelldblclick",this.grdList_oncelldblclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
        };
        this.loadIncludeScript("mtgManager.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
