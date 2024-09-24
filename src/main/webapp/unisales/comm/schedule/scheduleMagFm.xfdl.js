(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("scheduleMagFm");
            this.set_titletext("일정설정관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"SCHEDULE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USED_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"SCD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SCD_SHARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APND_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MGR_EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MGR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USED_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCmdYn", this);
            obj._setContents("<ColumnInfo><Column id=\"cmdCode\" type=\"STRING\" size=\"256\"/><Column id=\"cmdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cmdNm\">전체</Col></Row><Row><Col id=\"cmdCode\">1</Col><Col id=\"cmdNm\">사용</Col></Row><Row><Col id=\"cmdCode\">0</Col><Col id=\"cmdNm\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static04_00",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W20");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","-2","50",null,"43","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("일정");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","0","93",null,null,"20","110",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj.getSetter("uFunction").set("filter,sort,!colfix,!initial,find");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"94\"/><Column size=\"250\"/><Column size=\"110\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"일정마스터코드\"/><Cell col=\"1\" text=\"일정마스터명\"/><Cell col=\"2\" text=\"일정공유유형\"/><Cell col=\"3\" text=\"부서명\"/><Cell col=\"4\" text=\"파일첨부\"/><Cell col=\"5\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:SCD_CD\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:SCD_NM\"/><Cell col=\"2\" text=\"bind:SCD_SHARE_CD\"/><Cell col=\"3\" text=\"bind:DEPT_NM\"/><Cell col=\"4\" text=\"bind:APND_YN\" displaytype=\"checkboxcontrol\"/><Cell col=\"5\" text=\"bind:USED_YN\" displaytype=\"checkboxcontrol\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","0",null,null,"67","20","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staBg01","0","33",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg00","0","0",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","0","110","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_text("일정마스터코드");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtScdCd","staTitle00:4","5","140","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_cssclass("essential");
            obj.set_maxlength("10");
            obj.set_inputtype("digit,english");
            obj.set_inputmode("upper");
            obj.set_imemode("alpha");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle01","edtScdCd:4","0","100","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_text("일정마스터명");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtScdNm","staTitle01:4","5","216","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_cssclass("essential");
            obj.set_maxlength("40");
            obj.set_imemode("hangul");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle03","0","33","110","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_text("일정공유유형");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboScdShareType","staTitle03:4","edtScdCd:9","140","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_text("cbo00");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle04","cboScdShareType:4","33","100","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_text("모아보기-부서");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("divDept","staTitle04:4","38","216","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_url("common::cmmDeptSearch.xfdl");
            obj.getSetter("uEssential").set("true");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle05","divDept:4","33","90","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("14");
            obj.set_text("파일첨부");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new CheckBox("chkApndYn","staTitle05:4","38","62","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_text("사용");
            obj.set_value("true");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle06","chkApndYn:80","33","90","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("15");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new CheckBox("chkUsedYn","staTitle06:4","38","62","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_text("사용");
            obj.set_value("true");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle02","edtScdNm:4","0","90","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_text("관리자");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("divUser","staTitle02:4","5","349","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_url("common::cmmUserSearch.xfdl");
            obj.getSetter("uEssential").set("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle00","0",null,null,"43","20","67",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("일정 상세");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","12","126","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("일정마스터명");
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

            obj = new Edit("edtScdNm","staTitle00:0","12","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle00_00","267","12","86","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboYnType","staTitle00_00:0","12","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_innerdataset("dsCmdYn");
            obj.set_codecolumn("cmdCode");
            obj.set_datacolumn("cmdNm");
            obj.set_text("cbo00");
            this.divSearch.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divDetail.form.divDept
            obj = new Layout("default","",0,0,this.divDetail.form.divDept.form,function(p){});
            this.divDetail.form.divDept.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form.divUser
            obj = new Layout("default","",0,0,this.divDetail.form.divUser.form,function(p){});
            this.divDetail.form.divUser.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1050,736,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divDetail.form.edtScdCd","value","dsList","SCD_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divDetail.form.edtScdNm","value","dsList","SCD_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divDetail.form.cboScdShareType","value","dsList","SCD_SHARE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divDetail.form.chkApndYn","value","dsList","APND_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divDetail.form.chkUsedYn","value","dsList","USED_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divDetail.form.divUser.form.edtUserId","value","dsList","MGR_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divDetail.form.divUser.form.edtName","value","dsList","MGR_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divDetail.form.divUser.form.edtCode","value","dsList","MGR_EMP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divDetail.form.divDept.form.edtCode","value","dsList","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divDetail.form.divDept.form.edtName","value","dsList","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.edtScdNm","value","dsCond","SCHEDULE_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSearch.form.cboYnType","value","dsCond","USED_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::cmmDeptSearch.xfdl");
            this._addPreloadList("fdl","common::cmmUserSearch.xfdl");
        };
        
        // User Script
        this.registerScript("scheduleMagFm.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	scheduleMagFm.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/11/09
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 	2021/11/09   		TOBESOFT					최초생성
        *******************************************************************************
        */


        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvEmpNo = nexacro.getApplication().gdsUser.getColumn(0,"EMP_NO");

        this.fvChildResult	= 0;	// 삭제 전 자식 유무 결과 저장할 변수
        this.fvRow 			= "";	// 부서 정합성 검사 row
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	//공통코드
        	var param = [{biztype : "Combo", code : "CM02", objid : this.divDetail.form.cboScdShareType}						// 일정 구분 (Detail 영역)
        			  ,  {biztype : "Grid",  code : "CM02", objid : this.grdList, bindcolumn : "SCD_SHARE_CD", edit : "false"}	// grid 메시지 구분
        	];

        	//공통코드콤보설정
        	this.gfnGetCommonCode(param);

        	this.divSearch.form.cboYnType.set_index(1);
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        // 조회
        this.cfnSearch = function ()
        {
        	if (this.gfnDsIsUpdated(this.dsList)) {
        		// 검색을 진행하면 변경된 데이터가 사라집니다. \n계속 진행 하시겠습니까?
        		var sMsgId = "confirm.before.search";	//메세지ID
        		var arrArg = [""];						//메세지취환될값 배열[생략가능]
        		var sPopId = "search";					//메세지팝업ID[생략가능]	*해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
        		var sMsgCallback = "fnMsgCallback";		//메세지콜백[생략가능] 		* confirm성 메시지를 사용 시 반드시 필요

        		this.gfnAlert(sMsgId, arrArg, sPopId, sMsgCallback);
        	}else{
        		this.fnTranSearch();
        	}
        };


        // 추가
        this.cfnAdd = function ()
        {
        	var nRow = this.dsList.addRow();

        	this.dsList.setColumn(nRow,'APND_YN',1);
        	this.dsList.setColumn(nRow,'USED_YN',1);
        	this.dsList.setColumn(nRow,'SCD_SHARE_CD',"ALL");

        	// 관리자에 본인 id 입력
            this.divDetail.form.divUser.form.edtCode.set_value(this.fvEmpNo);
        	this.divDetail.form.divUser.form.fnTranUserList();

        	this.divDetail.form.edtScdCd.set_readonly(false);
        	this.divDetail.form.edtScdCd.setFocus();

        	// 일정공유유형 DEFAULT가 전체로 설정되어있기 때문에 부서 비활성화.
        	this.divDetail.form.divDept.set_enable(false);
        };


        //삭제
        this.cfnDel = function ()
        {
        	if(this.dsList.rowcount == 0)  return;

        	var sScdCd = this.dsList.getColumn(this.dsList.rowposition,"SCD_CD");

        	this.fnTranChkChild(this.dsList.rowposition,sScdCd);
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

        	// 부서 정합성 체크
        	if(!this.fnChkDeptValidation()){
        		this.gfnAlert("msg.err.validator.required", ["부서"]);
        		this.dsList.set_rowposition(this.fvRow);
        		this.divDetail.form.divDept.set_enable(true);
        		this.gfnSetValidationFocus(this.dsList, "DEPT_CD");
        		return;
        	}

            // 정합성 체크
        	if(this.fnFormValidation()){
        		// 저장 하시겠습니까?
        		this.gfnAlert("confirm.save", [""], "saveMsg", "fnMsgCallback");
        		return;
        	}
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/

        // 조회
        this.fnTranSearch = function()
        {
        	this.dsList.clearData();
        	this.divSearch.form.edtScdNm.set_value(this.gfnTrim(this.divSearch.form.edtScdNm.value));

        	var strSvcId    = "searchScheduleList";
        	var strSvcUrl   = "searchScheduleList.do";
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

        // 삭제 전 자식 유무 확인
        this.fnTranChkChild = function(rowposition, scdCd)
        {
        	var strSvcId    = "selectChildSchedule";
        	var strSvcUrl   = "selectChildSchedule.do";
        	var inData      = "";
        	var outData     = "";
        	var strArg      = "scdCd="+scdCd;
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
        	this.dsList.set_enableevent(true);

        	//Insert, Update
        	var strSvcId    = "saveScheduleMaster";
        	var strSvcUrl   = "saveScheduleMaster.do";
        	var inData      = "dsList=dsList:U";
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


        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //transaction callback
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "searchScheduleList":
        		   this.dsList_onload();
        		   break;
        		case "saveScheduleMaster" :
        		    break;
        		case "selectChildSchedule" :
        		    if(this.fvChildResult == 0){
        			  this.dsList.deleteRow(this.dsList.rowposition);
        			}else{
        			 this.gfnAlert("msg.scd.child");
        			 return;
        			}
        		    break;
        		default: break;
        	}
        };

        //message callback
        this.fnMsgCallback = function (sPopupId, sRtn)
        {
        	if( this.gfnIsNull(sRtn)||sRtn=="false"||sRtn == false){
        		return;
        	}else{
        		switch(sPopupId) {
        			case "search":
        				this.fnTranSearch();//조회
        				break;
        			case "saveMsg":
        				this.fnTranSave(); //저장
        				break;
        			default:break;
        		}
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        // 데이터 저장 전 정합성 체크
        this.fnFormValidation = function ()
        {
        	// 정합성 체크
        	this.gfnClearValidation(this.dsList);

        	this.gfnSetValidation(this.dsList, "SCD_CD", "일정마스터코드", "required");
        	this.gfnSetValidation(this.dsList, "SCD_NM", "일정마스터명", "required");

        	this.gfnSetValidation(this.dsList, "MGR_ID", "관리자", "required");

        	// Dataset의 변경된 Row Validation check
        	if (this.gfnValidation(this.dsList, "U") == false) return false;
        	else return true;
        };

        //부서 정합성 체크
        this.fnChkDeptValidation = function()
        {
        	var sDeptCd ="";
        	var sDeptNm ="";
        	for(var i=0; i<this.dsList.rowcount; i++){
        		if(this.dsList.getRowType(i)==2 || this.dsList.getRowType(i)==4){
        			if(this.dsList.getColumn(i,"SCD_SHARE_CD")!='ALL'){
        				if(this.gfnIsNull(this.dsList.getColumn(i, "DEPT_CD"))){
        					this.fvRow = i;
        					return false;
        				}
        			}
        		}
        	}
        	return true;
        }


        // 일정 공유 유형 선택
        this.fnChkScdShareCd = function()
        {
        	if(this.divDetail.form.cboScdShareType.value == 'ALL'){
        		this.divDetail.form.divDept.set_enable(false);
        	}else{
        		this.divDetail.form.divDept.set_enable(true);
        	}
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.cfnSearch();
        };

        // 일정공유유형에 따라 부서 enable속성 변경
        this.divDetail_cboScdShareType_onitemchanged = function(obj,e)
        {
        	this.fnChkScdShareCd();
        	if(this.divDetail.form.cboScdShareType.value == 'ALL')
        	{
        		this.divDetail.form.divDept.form.edtCode.set_value("");
        		this.divDetail.form.divDept.form.edtName.set_value("");
        	}
        };

        // grid에서 행 선택(마우스, 키보드)
        this.grdList_oncellposchanged = function(obj,e)
        {
        	this.fnChkScdShareCd(); //부서 활성,비활성
        };

        //일정마스터코드 포커스 잃을 때 중복검사 진행
        this.divDetail_edtScdCd_onkillfocus = function(obj,e)
        {
        	var nRtnRow = this.gfnChkDuplicateData(this.dsList, "SCD_CD");
        	if(nRtnRow >=0){
        		obj.setFocus();
        		this.gfnAlert("msg.scd.scdcd.exist");
        		return false;
        	}
        };

        // 데이터 변경 시 Update 할 때 scd_cd 수정 불가.
        this.dsList_canrowposchange = function(obj,e)
        {
        	var nRowType = obj.getRowType(e.newrow);

        	// Row Type에 따라 일정마스터코드 입력 Component를 제어한다.
        	if(nRowType == Dataset.ROWTYPE_INSERT)
        		this.divDetail.form.edtScdCd.set_readonly(false);
        	else
        		this.divDetail.form.edtScdCd.set_readonly(true);
        };

        // 조회 후 전체 유형일 경우 부서 비활성화 시키기 위함.
        this.dsList_onload = function(obj,e)
        {
        	if(this.dsList.getColumn(0, "SCD_SHARE_CD") == 'ALL')
        	{
        		this.divDetail.form.divDept.set_enable(false);
        	}
        };

        //일정마스터명 trim
        this.divDetail_edtScdNm_onkillfocus = function(obj,e)
        {
        	obj.set_value(this.gfnTrim(obj.value));
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grdList.addEventHandler("oncellposchanged",this.grdList_oncellposchanged,this);
            this.divDetail.form.edtScdCd.addEventHandler("onkillfocus",this.divDetail_edtScdCd_onkillfocus,this);
            this.divDetail.form.edtScdNm.addEventHandler("onkillfocus",this.divDetail_edtScdNm_onkillfocus,this);
            this.divDetail.form.cboScdShareType.addEventHandler("onitemchanged",this.divDetail_cboScdShareType_onitemchanged,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.dsList.addEventHandler("canrowposchange",this.dsList_canrowposchange,this);
            this.dsList.addEventHandler("onload",this.dsList_onload,this);
        };
        this.loadIncludeScript("scheduleMagFm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
