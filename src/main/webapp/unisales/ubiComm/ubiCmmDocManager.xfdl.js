(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ubiCmmDocManager");
            this.set_titletext("문서그룹관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USED_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_YN\" type=\"string\" size=\"32\"/><Column id=\"DT_LVL\" type=\"int\" size=\"4\"/><Column id=\"DT_NAME\" type=\"string\" size=\"32\"/><Column id=\"HIPO_DT_CD\" type=\"string\" size=\"32\"/><Column id=\"SortOrder\" type=\"string\" size=\"32\"/><Column id=\"CHGE_ID\" type=\"string\" size=\"32\"/><Column id=\"SYS_CODE\" type=\"string\" size=\"32\"/><Column id=\"HIPO_DT_NAME\" type=\"undefined\" size=\"0\"/><Column id=\"BIZ_CODE\" type=\"string\" size=\"32\"/><Column id=\"DT_ORDR\" type=\"int\" size=\"4\"/><Column id=\"INPT_ID\" type=\"string\" size=\"32\"/><Column id=\"DT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCheckDept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10","10",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","12","116","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("문서그룹코드");
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

            obj = new Button("btnSearch",null,"10","66","28","10",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMsgCd","staTitle00:0.00","11","140","27",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle02","edtMsgCd:0.00","12","106","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("문서그룹명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMsgTxt","staTitle02:0.00","11","140","27",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle03","edtMsgTxt:0.00","12","92","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUseYN","staTitle03:0.00","11","80","27",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_cboUseYN_innerdataset = new nexacro.NormalDataset("divSearch_form_cboUseYN_innerdataset", obj);
            divSearch_form_cboUseYN_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">- 전체 - </Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">예</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">아니오</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboUseYN_innerdataset);
            obj.set_text("예");
            obj.set_value("1");
            obj.set_index("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"10","72","28","btnSearch:19",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CrudSave");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"10","72","28","btnSave:5",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CrudDelete");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"10","72","28","btnDelete:5",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_CrudAdd");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle00",null,"divSearch:0","450","43","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("문서 그룹 상세");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail",null,"staTitle00:0","450",null,"20","10",null,null,"463",null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Static("staBg01","0","0",null,"42","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","0","141","42",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("그룹코드");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtDtCd","145.00","6","141","28",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_maxlength("7");
            obj.set_inputtype("digit,english");
            obj.set_inputmode("upper");
            obj.set_imemode("alpha");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg02","0","41",null,"42","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle02","0","41","141","42",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_text("상위그룹코드");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg03","0","82",null,"42","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg08","0","123",null,"42","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg09","0","164",null,"42","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg11","0","205",null,"42","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle03","0","82","141","42",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_text("그룹명");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtDtName","145.00","89",null,"28","5",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_cssclass("essential");
            obj.set_maxlength("66");
            obj.set_imemode("hangul");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle08","0","123","141","42",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_text("정렬순서");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtDtSort","145.00","130","141","28",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_inputtype("digit");
            obj.set_cssclass("essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle09","0","164","141","42",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new CheckBox("chkCyberYn","145.00","171","61","28",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("14");
            obj.set_text("사용");
            obj.set_value("true");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle11","0","205","141","42",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("15");
            obj.set_text("그룹레벨");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtDtLvl","145.00","212","141","28",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("16");
            obj.set_inputtype("digit");
            obj.set_cssclass("essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("divDocTree","145.00","47",null,"28","5",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("17");
            obj.set_url("ubiComm::ubiCmmDocSearch.xfdl");
            obj.getSetter("uEssential").set("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdList","10","103",null,null,"divDetail:20","10",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj.getSetter("uFunction").set("!filter,!sort,!colfix,!initial");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"432\"/><Column size=\"129\"/><Column size=\"129\"/><Column size=\"67\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"문서그룹\"/><Cell col=\"1\" text=\"그룹코드\"/><Cell col=\"2\" text=\"상위그룹코드\"/><Cell col=\"3\" text=\"정렬순서\"/></Band><Band id=\"body\"><Cell text=\"bind:DT_NAME\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:DT_LVL\"/><Cell col=\"1\" text=\"bind:DT_CD\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:HIPO_DT_CD\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:DT_ORDR\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divCmmnBtn",null,"divSearch:9","430","28","staTitle00:20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelDown",null,"0","119",null,"0","0",null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("0");
            obj.set_text("엑셀다운로드");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelSave");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnExcelUpload",null,"0","107",null,"btnExcelDown:3","0",null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("1");
            obj.set_text("엑셀업로드");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelUp");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Static("staTitle01","10","60",null,"43","divCmmnBtn:0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("문서 그룹");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHipoDeptCd","1311.00","90","141","24",null,null,null,"141",null,null,this);
            obj.set_taborder("6");
            obj.set_maxlength("8");
            obj.set_cssclass("essential");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","1428.00","90","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_EdiSch");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00","1455.00","90",null,"24","-561",null,"156",null,null,null,this);
            obj.set_taborder("8");
            obj.set_maxlength("66");
            obj.set_readonly("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form.divDocTree
            obj = new Layout("default","",0,0,this.divDetail.form.divDocTree.form,function(p){});
            this.divDetail.form.divDocTree.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCmmnBtn.form
            obj = new Layout("default","",0,0,this.divCmmnBtn.form,function(p){});
            this.divCmmnBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,736,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtMsgCd","value","dsCond","DT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtMsgTxt","value","dsCond","DT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divDetail.form.edtDtCd","value","dsList","DT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divDetail.form.edtDtName","value","dsList","DT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divDetail.form.edtDtSort","value","dsList","DT_ORDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divDetail.form.edtDtLvl","value","dsList","DT_LVL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divDetail.form.divDocTree.form.edtCode","value","dsList","HIPO_DT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divDetail.form.divDocTree.form.edtName","value","dsList","HIPO_DT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divSearch.form.cboUseYN","value","dsCond","USED_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","ubiComm::ubiCmmDocSearch.xfdl");
        };
        
        // User Script
        this.registerScript("ubiCmmDocManager.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	ubiCmmDocManager.xfdl
        *  @Creator 	DXTOBE
        *  @CreateDate 	2024/03/12
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/03/12			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	// 기본 - 사용
        	this.divSearch.form.cboUseYN.set_index(1);

        	this.cfnSearch();
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	if (this.gfnDsIsUpdated(this.dsList)) {
        		// 검색을 진행하면 변경된 데이터가 사라집니다. \n계속 진행 하시겠습니까?
        		var sMsgId = "confirm.before.search";			//메세지ID
        		var arrArg = [""];								//메세지취환될값 배열[생략가능]
        		var sPopId = "search";							//메세지팝업ID[생략가능]	*해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
        		var sMsgCallback = "fnMsgCallback";				//메세지콜백[생략가능] 		* confirm성 메시지를 사용 시 반드시 필요

        		this.gfnAlert(sMsgId, arrArg, sPopId, sMsgCallback);
        	}else{
        		this.fnTranSearch();
        	}
        };

        //추가
        this.cfnAdd = function ()
        {
        	var nowRow = this.dsList.rowposition;
        	var nLvl = this.dsList.getColumn(nowRow, "DT_LVL");
        	var sDtCode = this.dsList.getColumn(nowRow, "DT_CD");
        	var sDtName = this.dsList.getColumn(nowRow, "DT_NAME");

        	var nRow = this.dsList.insertRow(nowRow+1);

        	this.dsList.setColumn(nRow, "HIPO_DT_CD", sDtCode);
        	this.divDetail.form.divDocTree.form.edtName.set_value(sDtName);
        	this.dsList.setColumn(nRow, "DT_YN", "1");
        	this.dsList.setColumn(nRow, "DT_LVL", nLvl+1);

        	this.divDetail.form.edtDtCd.setFocus();
        };

        //저장
        this.cfnSave = function ()
        {
        	// 변경된 정보없으면 리턴
        	if (this.gfnDsIsUpdated(this.dsList) == false) {
        		// 저장할 데이터가 없습니다.
        		this.gfnAlert("msg.save.nochange");
        		return;
        	}

        	if(this.fnFormValidation()){
        		// 자료를 저장하시겠습니까?
        		this.gfnAlert("confirm.save", [""], "saveMsg", "fnMsgCallback");
        		return;
        	}
        };

        //삭제
        this.cfnDel = function ()
        {
        	if (this.dsList.rowcount == 0){
        		return;
        	}
        	if(this.dsList.rowposition == 0) {
        		this.gfnAlert("msg.err.nodelete", [""]);
        		return;
        	}

        	if(this.fnCheckDelete()){
        		this.dsList.deleteRow(this.dsList.rowposition);
        	}else{
        		this.gfnAlert("msg.err.delete.child");
        		return;
        	}
        };
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //조회
        this.fnTranSearch = function ()
        {
        	var strSvcId    = "searchDocuTree";
        	var strSvcUrl   = "searchDocuTree.do";
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

        //저장
        this.fnTranSave = function ()
        {
        	var strSvcId    = "saveDocTree";
        	var strSvcUrl   = "saveDocTree.do";
        	var inData      = "dsList=dsList:U";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);	 // 통신방법 정의 [생략가능]
        };
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //transaction
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "searchDocuTree":
        			break;
        		case "saveDocTree":
        			this.fnTranSearch();
        			break;
        		default :
        	}
        };

        //message callback
        this.fnMsgCallback = function (sPopupId, sRtn)
        {
        	if( sPopupId == "saveMsg"){
        		if(this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false){
        			return;
        		}
        		this.fnTranSave();
        	}else if (sPopupId == "search"){
        		if( this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false){
        			return;
        		}
        		this.fnTranSearch();
        	}else if( sPopupId=="validCode"){
        		this.divDetail.form.edtDtCd.set_value("");
        		this.divDetail.form.edtDtCd.setFocus();
        	}
        };

        //excel import
        this.fnExcelImportCallback = function (sImportId, e)
        {
        	//TODO..
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnFormValidation = function ()
        {
        	// 정합성 체크
        	this.gfnClearValidation(this.dsList);

        	this.gfnSetValidation(this.dsList, "DT_CD"	 , "문서그룹코드"		, "required");
        	this.gfnSetValidation(this.dsList, "HIPO_DT_CD", "문서 상위그룹코드"	, "required");
        	this.gfnSetValidation(this.dsList, "DT_NAME", "문서그룹명"	, "required");
        	this.gfnSetValidation(this.dsList, "DT_LVL",     "문서그룹레벨"	, "required");

        	// Dataset의 변경된 Row Validation check
        	if (this.gfnValidation(this.dsList, "U") == false) return false;
        	else return true;
        };

        //삭제 가능여부체크
        this.fnCheckDelete = function ()
        {
        	this.dsCheckDept.clearData();
        	this.dsCheckDept.copyData(this.dsList);

        	var nCurRow= this.dsList.rowposition;
        	this.dsCheckDept.filter("HIPO_DT_CD=='"+this.dsList.getColumn(nCurRow,"DT_CD")+"'");
        	var nRowCount = this.dsCheckDept.getRowCount();
        	if( nRowCount > 0){
        		return false;
        	}
        	return true;
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.cfnSearch();
        };

        this.divCmmnBtn_btnExcelDown_onclick = function(obj,e)
        {
        	// 엑셀 상단 타이틀 텍스트 설정
        	var sSubTitle = this.staTitle01.text;

        	// Excel Export 공통함수 호출
        	this.gfnExcelExport(this.grdList, sSubTitle, sSubTitle, "EXCEL2007","",sSubTitle, true, "");
        };

        this.divCmmnBtn_btnExcelUpload_onclick = function(obj,e)
        {
        	this.gfnExcelImport("dsList", "문서그룹 리스트", "A4:D", "fnExcelImportCallback", "message", "", "A3:D3", this.grdList);
        };

        this.dsList_canrowposchange = function(obj,e)
        {
        	var nRow = e.newrow;
        	if( obj.getRowType(nRow) == 2){
        		this.divDetail.form.edtDtCd.set_readonly(false);
        	}else{
        		this.divDetail.form.edtDtCd.set_readonly(true);
        	}
        };

        this.dsList_cancolumnchange = function(obj,e)
        {
        	if( e.columnid=="DT_CD"){
        		if(this.gfnIsNull(e.newvalue)) return;

        		var nRow = obj.findRow("DT_CD", e.newvalue);
        		if( nRow > -1){
        			this.gfnAlert("msg.exist", ["입력하신 문서그룹코드"], "validCode","fnMsgCallback");
        			return;
        		}
        	}
        };

        // ADD
        this.divSearch_btnAdd_onclick = function(obj,e)
        {
        	this.cfnAdd();
        };



        this.divSearch_btnDelete_onclick = function(obj,e)
        {
        	this.cfnDel();
        };

        this.btnSave_onclick = function(obj,e)
        {
        	this.cfnSave();
        };

        this.divSearch_edtMsgTxt_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13) this.cfnSearch();
        };

        this.divSearch_edtMsgCd_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13) this.cfnSearch();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.divSearch.form.edtMsgCd.addEventHandler("onkeyup",this.divSearch_edtMsgCd_onkeyup,this);
            this.divSearch.form.edtMsgTxt.addEventHandler("onkeyup",this.divSearch_edtMsgTxt_onkeyup,this);
            this.divSearch.form.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.divSearch.form.btnDelete.addEventHandler("onclick",this.divSearch_btnDelete_onclick,this);
            this.divSearch.form.btnAdd.addEventHandler("onclick",this.divSearch_btnAdd_onclick,this);
            this.divCmmnBtn.form.btnExcelDown.addEventHandler("onclick",this.divCmmnBtn_btnExcelDown_onclick,this);
            this.divCmmnBtn.form.btnExcelUpload.addEventHandler("onclick",this.divCmmnBtn_btnExcelUpload_onclick,this);
            this.edtHipoDeptCd.addEventHandler("onkeyup",this.divDetail_edtHipoDeptCd_onkeyup,this);
            this.btnSearch.addEventHandler("onclick",this.divDetail_btnSearch_onclick,this);
            this.dsList.addEventHandler("canrowposchange",this.dsList_canrowposchange,this);
            this.dsList.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
        };
        this.loadIncludeScript("ubiCmmDocManager.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
