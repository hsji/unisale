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
            obj._setContents("<ColumnInfo><Column id=\"DOC_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"IN_FDATE\" type=\"STRING\" size=\"256\"/><Column id=\"IN_TDATE\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_LIST\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"DOC_ID\" type=\"string\" size=\"32\"/><Column id=\"PDF_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"USED_FLAG\" type=\"string\" size=\"32\"/><Column id=\"CHGE_ID\" type=\"string\" size=\"32\"/><Column id=\"SYS_CODE\" type=\"string\" size=\"32\"/><Column id=\"PDF_ORIG_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"PDF_FILE_PATH_NM\" type=\"string\" size=\"32\"/><Column id=\"BIZ_CODE\" type=\"string\" size=\"32\"/><Column id=\"DOC_TITLE\" type=\"string\" size=\"32\"/><Column id=\"EXPIRE_DATE\" type=\"string\" size=\"32\"/><Column id=\"INPT_ID\" type=\"string\" size=\"32\"/><Column id=\"EDIT_INFO\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFieldInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"FIELD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FIELD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FIELD_MASK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"FIELD_NAME\">기본급</Col><Col id=\"FIELD_ID\">field_base</Col></Row><Row><Col id=\"FIELD_NAME\">고정연장수당</Col><Col id=\"FIELD_ID\">field_overtime</Col></Row><Row><Col id=\"FIELD_NAME\">직책수당</Col><Col id=\"FIELD_ID\">field_work</Col></Row><Row><Col id=\"FIELD_NAME\">출산보육수당</Col><Col id=\"FIELD_ID\">field_baby</Col></Row><Row><Col id=\"FIELD_NAME\">연구개발비</Col><Col id=\"FIELD_ID\">field_rnd</Col></Row><Row><Col id=\"FIELD_NAME\">월합계</Col><Col id=\"FIELD_ID\">field_month</Col></Row><Row><Col id=\"FIELD_NAME\">총연봉</Col><Col id=\"FIELD_ID\">field_year</Col></Row><Row><Col id=\"FIELD_NAME\">주민등록번호</Col><Col id=\"FIELD_ID\">field_resno</Col></Row><Row><Col id=\"FIELD_NAME\">성명</Col><Col id=\"FIELD_ID\">field_name</Col></Row><Row><Col id=\"FIELD_NAME\">서명</Col><Col id=\"FIELD_ID\">field_sign</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdList","10.00","70","282",null,null,"10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj.getSetter("uFunction").set("!filter,!sort,!colfix,!initial");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"400\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"문서그룹 리스트\"/></Band><Band id=\"body\"><Cell text=\"bind:DT_NAME\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:DT_LVL\"/></Band></Format></Formats>");
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

            obj = new Div("divContents","grdList:10","102",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("1px solid #dddddd");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","grdList:10","60","592","43",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form.divCalPeriod
            obj = new Layout("default","",0,0,this.divSearch.form.divCalPeriod.form,function(p){});
            this.divSearch.form.divCalPeriod.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form
            obj = new Layout("default","",0,0,this.divContents.form,function(p){});
            this.divContents.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
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
        this.registerScript("docMain.xfdl", function() {
        /**
        *  문서관리 메인화면
        *  @FileName 	docMain.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2024/03/04
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/03/04			DXTOBE						최초생성
        *******************************************************************************
        */
        this.fvRedrawPos = -1;		// 사용안함

        /**
        * @function docMain_onload  <br>
        * description 기간달력 초기화 , 문서(여기서는 부서)리스트 조회
        */
        this.docMain_onload = function(obj,e)
        {
        	this.divSearch.form.divCalPeriod.form.fnInitComp(this, "periodCalendar", this.fnCallbackPeriodCalendar, null);
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
        * @function fnDeptSearch  <br>
        * description 문서그룹조회 - 조직으로 임시처리
        */
        this.fnDocGroupSearch = function ()
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

        	var strSvcId    = "searchDocuContents";
        	var strSvcUrl   = "searchDocuContents.do";
        	var inData      = "dsCond=dsCond";
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
        * @function fnCallback  <br>
        * description 서비스콜백
        */
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "selectDeptList":
        			break;
        		case "searchDocuContents":
        			this.fnMakeSnapShot();
        			break;
        		case "searchDocuTree":	// dxonly
        			var sId = this.gfnGetUserInfo("USER_ID");
        			if(sId == "ylk" || sId == "jihs" || sId == "jh.lee") {
        			} else {
        				this.dsList.filter("DT_CD!='1010040'");
        			}
        			break;
        		default :
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
        		var comp = this.divContents.form.removeChild(comps[i].id);
        		comp.destroy();
        		comp = null;
        	}

        	var nFullW = this.divContents.getOffsetWidth();
        	var nSubDivW = 230;
        	var nSubDivH = 300;
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
        	for(i=0,len=this.dsDocInfo.rowcount;i<len;i++) {
        		nCnt++;
        		sDivId = "divSub_" + i;
        		var objDiv = new Div(sDivId, nLeft, nTop, nSubDivW, nSubDivH, null, null);
        		objDiv.set_async(false);
        		objDiv.set_url("docForm::docItemSub.xfdl");
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

        	// 부모는 추가 안함.
        	//if(this.dsList.rowposition == 0) return;
        	if(this.grdList.getTreeChildCount( this.dsList.rowposition, true )>0) return;

        	// add - 기본
        	sDivId = "divSub_add";
        	var objDiv = new Div(sDivId, nLeft, nTop, nSubDivW, nSubDivH, null, null);
        	objDiv.set_async(false);
        	objDiv.set_url("docForm::docItemSub.xfdl");
        	this.divContents.form.addChild(sDivId, objDiv);
        	objDiv.show();

        	objDiv.form.fnInit("add", null, -1,
        					this.dsList.getColumn(this.dsList.rowposition, "SYS_CODE"),
        					this.dsList.getColumn(this.dsList.rowposition, "BIZ_CODE"));
        	this.divContents.form.resetScroll();
        };

        /**
        * @function fnMakeSnapShotResize  <br>
        * description resize 처리
        */
        this.fnMakeSnapShotResize = function ()
        {
        	var nFullW = this.divContents.getOffsetWidth();
        	var nSubDivW = 230;
        	var nSubDivH = 300;
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
        	if(this.grdList.getTreeChildCount( this.dsList.rowposition, true )>0) return;
        	// add - 기본
        	sDivId = "divSub_add";
        	var objDiv = this.divContents.form[sDivId];
        	objDiv.set_left(nLeft);
        	objDiv.set_top(nTop);

        	this.divContents.form.resetScroll();
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
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
        };
        this.loadIncludeScript("docMain.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
