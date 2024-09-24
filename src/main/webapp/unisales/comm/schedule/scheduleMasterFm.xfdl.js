(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("scheduleMasterFm");
            this.set_titletext("일정관리");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"SCD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SCD_SHARE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"APND_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MGR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MGR_EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"MGR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USED_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetailList", this);
            obj._setContents("<ColumnInfo><Column id=\"CAL_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SCD_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SCD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SCD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SCD_SECT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"START_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"START_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"START_MINUTES\" type=\"STRING\" size=\"256\"/><Column id=\"END_DAY\" type=\"STRING\" size=\"256\"/><Column id=\"END_TIME\" type=\"STRING\" size=\"256\"/><Column id=\"END_MINUTES\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"SSC_CD_KORN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetailCond", this);
            obj._setContents("<ColumnInfo><Column id=\"BOARD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"FROM_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_COND\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_GUBUN\" type=\"STRING\" size=\"256\"/><Column id=\"SECTCD\" type=\"STRING\" size=\"256\"/><Column id=\"SCD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj.set_taborder("5");
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
            divSearch_form_cboGubun_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">제목</Col></Row><Row><Col id=\"datacolumn\">내용</Col><Col id=\"codecolumn\">02</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">작성자</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cboGubun_innerdataset);
            obj.set_text("제목");
            obj.set_value("01");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCond","cboGubun:3","12","244","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_maxlength("100");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle01","-2","divSearch:0",null,"43","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("일정");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","0","staTitle01:0","420",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj.getSetter("uFunction").set("filter,find,!sort");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"250\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"일정마스터명\"/><Cell col=\"1\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:SCD_NM\"/><Cell col=\"1\" text=\"bind:USED_YN\" displaytype=\"checkboxcontrol\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDetailList","grdList:20","staTitle01:0",null,null,"Static04_00:0","33",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_binddataset("dsDetailList");
            obj.set_cellcombopopuptype("none");
            obj.set_cellsizingtype("col");
            obj.getSetter("uFunction").set("filter,find");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"20\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"60\"/><Column size=\"60\"/><Column size=\"200\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"작성자\"/><Cell col=\"2\" text=\"일정유형\"/><Cell col=\"3\" text=\"시작일\"/><Cell col=\"4\" text=\"종료일\"/><Cell col=\"5\" text=\"제목\"/></Band><Band id=\"body\"><Cell text=\"expr:currow +1\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:INPT_EMP_NO\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:SSC_CD_KORN_NM\" textAlign=\"center\" displaytype=\"normal\"/><Cell col=\"3\" text=\"bind:START_DAY\" textAlign=\"center\"/><Cell col=\"4\" text=\"bind:END_DAY\" textAlign=\"center\"/><Cell col=\"5\" text=\"bind:TITLE\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divPaging","grdList:20",null,null,"24","20","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            obj.set_url("common::cmmPaging.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPaging
            obj = new Layout("default","",0,0,this.divPaging.form,function(p){});
            this.divPaging.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1050,736,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.periodCal.form.calFrom","value","dsDetailCond","FROM_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.periodCal.form.calTo","value","dsDetailCond","TO_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboGubun","value","dsDetailCond","SEARCH_GUBUN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divSearch.form.edtCond","value","dsDetailCond","SEARCH_COND");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboSectCd","value","dsDetailCond","SECTCD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::cmmPaging.xfdl");
        };
        
        // User Script
        this.registerScript("scheduleMasterFm.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	scheduleMasterFm.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023/04/12
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2023/04/12			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        //페이징
        this.fvPage  = 1;
        this.fvStart = 1;
        this.fvEnd   = 30;
        this.fvAutnYn = "Y"; // 수정, 삭제 권한부여 임의의 파라미터변수

        this.fvScdInfo = {};

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	// 한달 일자
        	var sToday = this.gfnGetDate();
        	this.dsDetailCond.setColumn(0,"FROM_DATE",sToday.substr(0,6)+"01");
        	this.dsDetailCond.setColumn(0,"TO_DATE",this.gfnGetLastDate(sToday.substr(0,6)));

        	//공통코드(유형)
        	var param = [{biztype : "Combo", code : "CM03", selecttype:"A", objid : this.divSearch.form.cboSectCd}];
        	//공통코드콤보설정
        	this.gfnGetCommonCode(param);

        	this.divSearch.form.cboGubun.set_index(0);

        	// 일정 조회
        	this.fnTranSearch();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function()
        {
        	// 일정 상세조회
        	this.fnTranDetailSearch();
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //조회
        this.fnTranSearch = function ()
        {
        	this.dsList.clearData();

        	var strSvcId    = "searchScheduleList";
        	var strSvcUrl   = "searchScheduleList.do";
        	var inData      = "";
        	var outData     = "dsList=dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId , strSvcUrl , inData , outData , strArg, callBackFnc);
        };

        //상세 조회
        this.fnTranDetailSearch = function ()
        {
        	// 데이터 초기화
        	this.dsDetailList.clearData()
        	this.dsCount.clearData();

        	// 상세 게시판 페이징 세팅
        	this.dsCondPage.setColumn(0, "START_NUM", this.fvStart);
        	this.dsCondPage.setColumn(0, "END_NUM", this.fvEnd);

        	var strSvcId    = "searchScdData";
        	var strSvcUrl   = "searchScdData.do";
        	var inData      = "dsCond=dsDetailCond dsCondPage=dsCondPage";
        	var outData     = "dsDetailList=dsList dsCount=dsCount";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction(strSvcId , strSvcUrl , inData , outData , strArg, callBackFnc);
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //transaction callback
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "searchScheduleList":
        			break;
        		case "searchScdData":
        			var nTotal = this.dsCount.getColumn(0, "TOTALCNT");
        			// 페이징 세팅 및 데이터 갯수 세팅
        			this.divPaging.form.fnCreatePage(this.grdDetailList, "fnPageCallback", this.fvPage, "", nTotal);
        			break;
        		default:break;
        	}
        };

        //paging callback
        this.fnPageCallback = function (nPage, nRecrod)
        {
        	this.fvPage  = nPage;
        	this.fvStart = ((this.fvPage-1)*nRecrod) + 1;
        	this.fvEnd   = this.fvPage*nRecrod;

        	this.fnTranDetailSearch();
        };

        //popup callback
        this.fnPopupCallback = function (sPopupId, sRtn)
        {
        	if(sRtn == "delete"){
        		var nRow = this.dsDetailList.rowposition;
        		this.dsDetailList.deleteRow(nRow);
        		this.fnSetPaging();
        	}
        	else if(!this.gfnIsNull(sRtn))
        	{
        		this.fnTranDetailSearch();
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

        	var popupId = "searchReadScd";
         	var popupUrl = "comm::schedule/scheduleReadPu.xfdl";
        	var oArg   = {pvApndYn		: this.fvScdInfo.apndYn
        				  ,pvTitle 		: this.fvScdInfo.scdNm // 일정 마스터 타이틀
        				  ,pvScdCd		: this.fvScdInfo.scdCd
        				  ,pvScdId		: this.fvScdInfo.scdId
        				  ,pvDeptCd		: this.fvScdInfo.deptCd
        				  ,pvOpenType	: "searchRead"
        				  ,pvMgrCd	 	: this.fvScdInfo.mgrCd// 관리자
        				  ,pvAutnYn	    : this.fvAutnYn	// 게시판관리 팝업 > 수정, 삭제 권한부여 임의의 파라미터 추가
        				};

        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup(popupId, popupUrl, oArg, sPopupCallBack, oOption);
        };

        //페이지 설정 후 재조회(2022.08.03)
        this.fnSetPaging = function()
        {
        	//페이징이 생성되어있고, 현재 데이터가0일 때/ 가장 마지막 페이징이었을 경우 한 페이지 앞으로 이동
        	if(!this.gfnIsNull(this.divPaging.form.divPage) && this.dsList.rowcount==0){
        		if(this.divPaging.form.fvObjGrid.uPage==this.fvPage && this.fvPage!=1){
        			var nRecord = this.divPaging.form.fvObjGrid.uPageSize;
        			this.fvPage = this.fvPage-1;
        			this.fvStart = ((this.fvPage-1)*nRecord) + 1;
        			this.fvEnd   = this.fvPage*nRecord;
        		}
        	}
        	this.fnTranDetailSearch();
        };


        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	// 일정 상세조회
        	this.cfnSearch();
        };

        this.dsList_onrowposchanged = function(obj,e)
        {
        	if(obj.getRowCount() > 0)
        	{
        		var scdCd = obj.getColumn(obj.rowposition, "SCD_CD");

        		// 서버에 데이터 넘겨줄 게시판 코드 세팅
        		this.dsDetailCond.setColumn(0, "SCD_CD", scdCd);
        		// 페이징 값
        		this.divPaging.form.cboCnt.set_value(this.fvEnd);

        		// 상세 게시판 조회
        		this.fnTranDetailSearch();
        	}
        };

        // 그리드 셀 클릭 이벤트
        this.grdDetailList_oncellclick = function(obj,e)
        {
        	var nRow = e.row;

        	this.fvScdInfo = {
        		scdCd 	     : this.dsDetailList.getColumn(nRow, "SCD_CD")
        		,scdNm       : this.dsDetailList.getColumn(nRow, "SCD_NM")
        		,apndYn      : this.dsDetailList.getColumn(nRow, "APND_YN")
        		,scdId		 : this.dsDetailList.getColumn(nRow, "SCD_ID")
        		,mgrCd		 : this.dsDetailList.getColumn(nRow, "MGR_ID")
        		,deptCd		 : this.dsDetailList.getColumn(nRow, "DEPT_CD")
        	};
        	this.fnOpenScdP();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.grdDetailList.addEventHandler("oncellclick",this.grdDetailList_oncellclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
        };
        this.loadIncludeScript("scheduleMasterFm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
