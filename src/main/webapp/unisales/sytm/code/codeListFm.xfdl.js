(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("codeListFm");
            this.set_titletext("공통코드통합조회");
            this.getSetter("classname").set("COMMBE004SN");
            if (Form == this.constructor)
            {
                this._setFormPosition(1250,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SSC_NUMB\" type=\"string\" size=\"6\"/><Column id=\"HCL_CD\" type=\"string\" size=\"8\"/><Column id=\"HCL_CD_KORN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SSC_CD\" type=\"string\" size=\"150\"/><Column id=\"SSC_CD_KORN_NM\" type=\"string\" size=\"1\"/><Column id=\"SSC_CD_ENGL_NM\" type=\"string\" size=\"8\"/><Column id=\"ABBR_KORN_NM\" type=\"string\" size=\"100\"/><Column id=\"ABBR_ENGL_NM\" type=\"string\" size=\"100\"/><Column id=\"GRP_CD_1\" type=\"string\" size=\"100\"/><Column id=\"GRP_CD_2\" type=\"string\" size=\"100\"/><Column id=\"GRP_CD_3\" type=\"string\" size=\"20\"/><Column id=\"GRP_CD_4\" type=\"string\" size=\"20\"/><Column id=\"GRP_CD_5\" type=\"string\" size=\"20\"/><Column id=\"GRP_CD_6\" type=\"string\" size=\"20\"/><Column id=\"GRP_CD_7\" type=\"string\" size=\"20\"/><Column id=\"GRP_CD_8\" type=\"string\" size=\"20\"/><Column id=\"GRP_CD_9\" type=\"string\" size=\"20\"/><Column id=\"BEFO_HCL_CD\" type=\"string\" size=\"20\"/><Column id=\"BEFO_SSC_CD\" type=\"string\" size=\"20\"/><Column id=\"SSC_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"HCL_USED_YN\" type=\"string\" size=\"1\"/><Column id=\"SORT_ORDR\" type=\"bigdecimal\" size=\"22\" prop=\"\"/><Column id=\"REMK\" type=\"string\" size=\"2000\" prop=\"\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"HCL_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HCL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SSC_KNM\" type=\"STRING\" size=\"256\"/><Column id=\"SSC_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCount", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"TOTALCNT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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
            obj._setContents("<ColumnInfo><Column id=\"START_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"END_NUM\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Search");
            obj.getSetter("scrollbars").set("none");
            this.addChild(obj.name, obj);

            obj = new Static("staCompany","0","12","98","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("회사구분");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCompany","staCompany:0","12","150","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_innerdataset("gdsCompany");
            obj.set_codecolumn("SSC_CD");
            obj.set_datacolumn("SSC_CD_KORN_NM");
            obj.set_text("알림");
            obj.set_value("INF");
            obj.set_index("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCon2","cboCompany:0","12","98","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("대분류코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCd","staCon2:0","12","118","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCon00","edtCd:0","12","110","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("대분류코드명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCdNm","staCon00:0","12","118","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCon01","edtCdNm:0","12","98","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("소분류코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtScaKCd","staCon01:0","12","118","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10","48","28","23",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCon01_00","edtScaKCd:0","12","110","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("소분류코드명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtScaKnm","staCon01_00:0","12","118","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle1","0","divSearch:0","134","43",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("공통코드");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","0","staTitle1:0",null,null,"20","35",null,null,null,null,this);
            obj.set_taborder("2");
            obj.getSetter("useinputpanel").set("false");
            obj.set_binddataset("dsList");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_fillareatype("none");
            obj.getSetter("scrollbars").set("autoboth");
            obj.set_autofittype("col");
            obj.getSetter("uFunction").set("filter,sort,!colfix,!initial,find");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"150\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"190\"/><Column size=\"40\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"40\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"34\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell colspan=\"3\" style=\"background: ;\" text=\"대분류\" uFunctionCol=\"N\"/><Cell col=\"3\" colspan=\"9\" text=\"소분류\" uFunctionCol=\"N\"/><Cell row=\"1\" text=\"코드\"/><Cell row=\"1\" col=\"1\" text=\"코드명\"/><Cell row=\"1\" col=\"2\" text=\"사용&#13;&#10;여부\"/><Cell row=\"1\" col=\"3\" text=\"코드\"/><Cell row=\"1\" col=\"4\" text=\"소분류코드명\"/><Cell row=\"1\" col=\"5\" text=\"정렬&#13;&#10;순서\"/><Cell row=\"1\" col=\"6\" text=\"그룹1\"/><Cell row=\"1\" col=\"7\" text=\"그룹2\"/><Cell row=\"1\" col=\"8\" text=\"그룹3\"/><Cell row=\"1\" col=\"9\" text=\"그룹4\"/><Cell row=\"1\" col=\"10\" text=\"그룹5\"/><Cell row=\"1\" col=\"11\" text=\"사용&#13;&#10;여부\"/></Band><Band id=\"body\"><Cell displaytype=\"normal\" edittype=\"none\" style=\"align:center middle;\" text=\"bind:HCL_CD\" suppress=\"1\" suppressalign=\"first\"/><Cell col=\"1\" displaytype=\"normal\" edittype=\"none\" text=\"bind:HCL_CD_KORN_NM\" suppress=\"2\" suppressalign=\"first\"/><Cell col=\"2\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" cssclass=\"cell_WF_ChkS\" text=\"bind:HCL_USED_YN\" displaytype=\"expr:HCL_USED_YN == &apos;1&apos; ? &apos;checkboxcontrol&apos; : &apos;none&apos;\"/><Cell col=\"3\" text=\"bind:SSC_CD\"/><Cell col=\"4\" style=\"align:left middle;\" text=\"bind:SSC_CD_KORN_NM\"/><Cell col=\"5\" style=\"align:center middle;\" text=\"bind:SORT_ORDR\"/><Cell col=\"6\" text=\"bind:GRP_CD_1\"/><Cell col=\"7\" text=\"bind:GRP_CD_2\"/><Cell col=\"8\" text=\"bind:GRP_CD_3\"/><Cell col=\"9\" text=\"bind:GRP_CD_4\"/><Cell col=\"10\" text=\"bind:GRP_CD_5\"/><Cell col=\"11\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" cssclass=\"cell_WF_ChkS\" text=\"bind:SSC_USED_YN\" displaytype=\"expr:SSC_USED_YN == &apos;1&apos; ? &apos;checkboxcontrol&apos; : &apos;none&apos;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divCmmnBtn",null,"divSearch:10","131","28","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelDown",null,"0","119","28","0",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("0");
            obj.set_text("엑셀다운로드");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelSave");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Div("divPaging","0",null,null,"24","20","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            obj.set_url("common::cmmPaging.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCmmnBtn.form
            obj = new Layout("default","",0,0,this.divCmmnBtn.form,function(p){});
            this.divCmmnBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divPaging
            obj = new Layout("default","",0,0,this.divPaging.form,function(p){});
            this.divPaging.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item4","divSearch.form.edtCd","value","dsCond","HCL_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.edtCdNm","value","dsCond","HCL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtScaKCd","value","dsCond","SSC_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtScaKnm","value","dsCond","SSC_KNM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::cmmPaging.xfdl");
        };
        
        // User Script
        this.registerScript("codeListFm.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	codeListFm.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/01/25
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/01/25			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvPage  = -1; 	//페이지세팅
        this.fvStart = 0;	//시작NUM
        this.fvEnd   = 0;	//끝NUM
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	// 버튼 권한 제어
        	this.gfnSetCommBtn(this.divCmmnBtn);

        	var arrComp = [this.divSearch.form.cboCompany];
        	this.gfnSetAuthorityCompany(arrComp);

        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        /**
         * 공통조회버튼(마스터)
         * @param N/A
         * @return  N/A
         */
        this.cfnSearch = function ()
        {
        	//조회버튼으로 조회
        	this.dsList.clearData();
        	this.dsCount.clearData();

        	this.fvPage  = 1;
        	this.fvStart = 1;
        	this.fvEnd   = this.divPaging.form.cboCnt.value;
        	this.fnTranSearch();
        };
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //조회
        this.fnTranSearch = function ()
        {
        	this.dsCond.setColumn(0, "COMPANY_CD", this.divSearch.form.cboCompany.value);
        	this.dsCondPage.setColumn(0, "COMPANY_CD", this.divSearch.form.cboCompany.value);

        	this.dsCondPage.setColumn(0, "START_NUM", this.fvStart);
        	this.dsCondPage.setColumn(0, "END_NUM", this.fvEnd);

        	// 조회-대분류
        	var strSvcId    = "searchUnionCommonCode";
        	var strSvcUrl   = "searchUnionCommonCode.do";
        	var inData      = "dsCond=dsCond dsCondPage=dsCondPage";
        	var outData     = "dsList=dsList dsCount=dsCount";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc);   // 통신방법 정의 [생략가능]

        };
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //transaction
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "searchUnionCommonCode":
        			var nTotal = this.dsCount.getColumn(0, "TOTALCNT");
        			this.divPaging.form.fnCreatePage(this.grdList, "fnPageCallback", this.fvPage, "", nTotal);
        			break;
        		default:break;
        	}
        };

        //paging
        this.fnPageCallback = function (nPage, nRecrod)
        {
        	this.fvPage  = nPage;
        	this.fvStart = ((this.fvPage-1)*nRecrod) + 1;
        	this.fvEnd   = this.fvPage*nRecrod;

        	this.fnTranSearch();
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

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
        	var sSubTitle = this.staTitle1.text;

        	// Excel Export 공통함수 호출
        	this.gfnExcelExport(this.grdList, sSubTitle, sSubTitle, "EXCEL2007","",sSubTitle, true, "");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.divCmmnBtn.form.btnExcelDown.addEventHandler("onclick",this.divCmmnBtn_btnExcelDown_onclick,this);
        };
        this.loadIncludeScript("codeListFm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
