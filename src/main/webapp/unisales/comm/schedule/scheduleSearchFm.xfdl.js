(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("scheduleSearchFm");
            this.set_titletext("일정검색");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"BOARD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_COND\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"SECTCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CAL_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SCD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SCD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SCD_SECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"START_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"START_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"START_MINUTES\" type=\"STRING\" size=\"256\"/><Column id=\"END_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"END_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"END_MINUTES\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"SSC_CD_KORN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_EMP_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsScdInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBoardInfo", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCondPage", this);
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"END_NUM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCount", this);
            obj._setContents("<ColumnInfo><Column id=\"TOTALCNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static04_00",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W20");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10","48","28","25",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","0","12","86","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("등록일자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new PeriodCalendar("periodCal","sta01:0","12","250","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02_00","periodCal:0","12","62","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("유형");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSectCd","sta02_00:0","12","103","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta02","cboSectCd:0","12","74","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("검색어");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboGubun","sta02:0","12","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var divSearch_form_cboGubun_innerdataset = new nexacro.NormalDataset("divSearch_form_cboGubun_innerdataset", obj);
            divSearch_form_cboGubun_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">제목</Col></Row><Row><Col id=\"datacolumn\">내용</Col><Col id=\"codecolumn\">02</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboGubun_innerdataset);
            obj.set_text("제목");
            obj.set_value("01");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCond","cboGubun:3","12","244","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_maxlength("100");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static04_00_00_00","0","49",null,"18","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("H18");
            this.addChild(obj.name, obj);

            obj = new Div("divGrd","0","67",null,null,"20","25",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Div("div_Head","0","0",null,"50","0",null,null,null,null,null,this.divGrd.form);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_WF_SchLabel");
            this.divGrd.addChild(obj.name, obj);

            obj = new Static("sta01","0","13","86","24",null,null,null,null,null,null,this.divGrd.form.div_Head.form);
            obj.set_taborder("0");
            obj.set_text("검색결과");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divGrd.form.div_Head.addChild(obj.name, obj);

            obj = new Static("staCnt","sta01:0","12","71","26",null,null,null,null,null,null,this.divGrd.form.div_Head.form);
            obj.set_taborder("1");
            obj.set_text("0건");
            this.divGrd.form.div_Head.addChild(obj.name, obj);

            obj = new Grid("grdSearch","0","div_Head:-1",null,null,"0","0",null,null,null,null,this.divGrd.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"200\"/></Columns><Rows><Row size=\"36\" band=\"head\"/><Row size=\"34\"/></Rows><Band id=\"head\"><Cell text=\"일정마스터명\"/><Cell col=\"1\" text=\"작성자\"/><Cell col=\"2\" text=\"일정유형\"/><Cell col=\"3\" text=\"시작일\"/><Cell col=\"4\" text=\"종료일\"/><Cell col=\"5\" text=\"제목\"/></Band><Band id=\"body\"><Cell text=\"bind:SCD_NM\"/><Cell col=\"1\" text=\"bind:INPT_EMP_NO\"/><Cell col=\"2\" text=\"bind:SSC_CD_KORN_NM\"/><Cell col=\"3\" text=\"bind:START_DAY\" displaytype=\"date\"/><Cell col=\"4\" text=\"bind:END_DAY\" displaytype=\"date\"/><Cell col=\"5\" text=\"bind:TITLE\" tooltiptext=\"bind:TITLE\"/></Band></Format></Formats>");
            this.divGrd.addChild(obj.name, obj);

            obj = new Div("divPaging","0",null,null,"24","20","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_url("common::cmmPaging.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrd.form.div_Head.form
            obj = new Layout("default","",0,0,this.divGrd.form.div_Head.form,function(p){});
            this.divGrd.form.div_Head.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divGrd.form
            obj = new Layout("default","",0,0,this.divGrd.form,function(p){});
            this.divGrd.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPaging
            obj = new Layout("default","",0,0,this.divPaging.form,function(p){});
            this.divPaging.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1050,736,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.periodCal.form.calFrom","value","dsCond","FROM_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.periodCal.form.calTo","value","dsCond","TO_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtCond","value","dsCond","SEARCH_COND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboGubun","value","dsCond","SEARCH_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.cboSectCd","value","dsCond","SECTCD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::cmmPaging.xfdl");
        };
        
        // User Script
        this.registerScript("scheduleSearchFm.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	scheduleSearchFm.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/12/30
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/11/10			TOBESOFT					최초생성
        * 2022/01/12            TOBESOFT					페이징
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvScdCd = "";
        this.fvScdId = "";

        //페이징
        this.fvPage  = -1;
        this.fvStart = -1;
        this.fvEnd   = -1;
        this.fvBoardCd	 = "";
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); 	//필수함수

        	//공통코드(유형)
        	var param = [{biztype : "Combo", code : "CM03", selecttype:"A", objid : this.divSearch.form.cboSectCd}];
        	//공통코드콤보설정
        	this.gfnGetCommonCode(param);
        	//검색어 콤보 INDEX설정
        	this.divSearch.form.cboGubun.set_index(0);

        	// 조회범위에 따른 검색결과
        	var sScope = this.gfnGetScope();
        	// 조회범위가 팀, 개인일때만 부서코드 조회조건 삽입
        	if (sScope == "0040" || sScope == "0050") {
        		this.dsCond.setColumn(0, "DEPT_CD", nexacro.getApplication().gdsUser.getColumn(0, "DEPT_CD"));
        		this.dsCond.setColumn(0, "USER_ID", nexacro.getApplication().gdsUser.getColumn(0, "USER_ID"));
        	}

        	// 권한 조회
        	var sAuth = this.getOwnerFrame().form.fvButtonAuthorYn;

        	// 일자
        	var sToday = this.gfnGetDate();
        	this.dsCond.setColumn(0,"FROM_DATE",sToday.substr(0,6)+"01");
        	this.dsCond.setColumn(0,"TO_DATE",this.gfnGetLastDate(sToday.substr(0,6)));
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function()
        {
        	this.fvPage  = 1;
        	this.fvStart = 1;
        	this.fvEnd   = this.divPaging.form.cboCnt.value;

        	this.fnTranSearchScdData();
        }

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //조회
        this.fnTranSearchScdData = function()
        {
        	this.dsCondPage.setColumn(0, "START_NUM", this.fvStart);
        	this.dsCondPage.setColumn(0, "END_NUM", this.fvEnd);

        	var strSvcId    = "searchScdData";
        	var strSvcUrl   = "searchScdData.do";
        	var inData      = "dsCond=dsCond dsCondPage=dsCondPage";
        	var outData     = "dsList=dsList dsCount=dsCount";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        }

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //transaction
        this.fnCallback = function(sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId){
        		case "searchScdData":
        			var nTotal = this.dsCount.getColumn(0, "TOTALCNT");
        			this.divPaging.form.fnCreatePage(this.divGrd.form.grdSearch, "fnPageCallback", this.fvPage, "", nTotal);
        			this.divGrd.form.div_Head.form.staCnt.set_text(nTotal+"건");
        			break;
        	}
        }

        //paging
        this.fnPageCallback = function (nPage, nRecrod)
        {
        	this.fvPage  = nPage;
        	this.fvStart = ((this.fvPage-1)*nRecrod) + 1;
        	this.fvEnd   = this.fvPage*nRecrod;

        	this.fnTranSearchScdData();
        };

        //popup callback
        this.fnPopupCallback = function (sPopupId, sRtn)
        {
        	if(sRtn == "delete" || sRtn =="update"){
        		// 검색 결과 새로고침
        		//this.fnTranSearchScdData();
        		//(2022.08.03삭제 후 페이지 조절)
        		var nRow = this.dsList.rowposition;
        		this.dsList.deleteRow(nRow);
        		this.fnSetPaging();
        	}
        	else if(sRtn == "rUpdate"){
        		this.fnOpenScdP("update");
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        //팝업
        this.fnOpenScdP = function()
        {
        	var sTitle = "일정";
        	var oOption = {title:sTitle
        					,titlebar:true};

        	var popupId = "";
        	var popupUrl = "";

        	popupId = "searchReadScd";
        	popupUrl = "comm::schedule/scheduleReadPu.xfdl";
        	var oArg   = {pvApndYn		: this.fvScdInfo.apndYn
        				  ,pvTitle 		: this.fvScdInfo.scdNm // 일정 마스터 타이틀
        				  ,pvScdCd		: this.fvScdCd
        				  ,pvScdId		: this.fvScdId
        				  ,pvDeptCd		: this.fvDeptCd
        				  ,pvOpenType	: "searchRead"
        				  ,pvMgrCd	 	: this.fvScdInfo.mgrCd// 관리자
        				};

        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup(popupId, popupUrl, oArg, sPopupCallBack, oOption);
        };
        //페이지 설정 후 재조회(2022.08.03)
        this.fnSetPaging = function()
        {
        	//페이징이 생성되어있고, 현재 데이터가0일 때/ 가장 마지막 페이징이었을 경우 한 페이지 앞으로 이동
        	trace( this.dsList.saveXML());
        	if(!this.gfnIsNull(this.divPaging.form.divPage) && this.dsList.rowcount==0){
        		if(this.divPaging.form.fvObjGrid.uPage==this.fvPage && this.fvPage!=1){
        			var nRecord = this.divPaging.form.fvObjGrid.uPageSize;
        			this.fvPage = this.fvPage-1;
        			this.fvStart = ((this.fvPage-1)*nRecord) + 1;
        			this.fvEnd   = this.fvPage*nRecord;
        		}
        	}
        	this.fnTranSearchScdData();
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        //조회
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.cfnSearch();
        };

        //grd 더블클릭
        this.grdSearch_oncelldblclick = function(obj,e)
        {
        	this.fvScdCd = this.dsList.getColumn(e.row, "SCD_CD");
        	this.fvScdId = this.dsList.getColumn(e.row, "SCD_ID");

         	// 일정 마스터 정보 조회
        	this.fvScdInfo = {
        			scdNm	: this.dsList.getColumn(e.row,"SCD_NM")
        			, scdCd : this.dsList.getColumn(e.row,"SCD_CD")
        			, apndYn: this.dsList.getColumn(e.row,"APND_YN")
        			, mgrCd : this.dsList.getColumn(e.row,"MGR_ID")
        	};

        	//상세 조회
        	this.fnOpenScdP();
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.divSearch.form.edtCond.addEventHandler("onkeydown",this.divSearch_edtTitle_onkeydown,this);
            this.divGrd.form.grdSearch.addEventHandler("oncelldblclick",this.grdSearch_oncelldblclick,this);
        };
        this.loadIncludeScript("scheduleSearchFm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
