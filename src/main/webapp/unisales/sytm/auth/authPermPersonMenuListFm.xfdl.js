(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("authPermPersonMenuListFm");
            this.set_titletext("사용자별 권한 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SYTM_FLAG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HOOF_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCondDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SYTM_FLAG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"PERM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SYTM_FLAG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PERM_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PERM_GRP_EXPL\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRegiMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"SYTM_FLAG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MODULE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"HIPO_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_SCOPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"INQR_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ANEW_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DELE_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRNT_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EXCL_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"INIT_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCompany","0","12","87","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("회사구분");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCompany","staCompany:0","12","139","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_innerdataset("gdsCompany");
            obj.set_codecolumn("SSC_CD");
            obj.set_datacolumn("SSC_CD_KORN_NM");
            obj.set_text("알림");
            obj.set_value("INF");
            obj.set_index("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle00","cboCompany:0","12","74","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("시스템");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo01","56","-158","185","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
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
            obj.set_taborder("6");
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
            obj.set_taborder("7");
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
            obj.set_taborder("8");
            obj.set_value("20190308");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10","48","28","25",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSysGubun","staTitle00:0","12","180","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("cbo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle00_00","cboSysGubun:0","12","74","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("사용자");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divUser","staTitle00_00:0","12","250","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_url("common::cmmUserSearch.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle03","divUser:0","12","86","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("재직상태");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboHoofStat","staTitle03:0","12","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","50","260","43",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("사용자");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdUserList","0","93","270",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"부서명\"/><Cell col=\"1\" text=\"사번/ID\"/><Cell col=\"2\" text=\"사용자명\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_NM\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:EMP_NO\"/><Cell col=\"2\" text=\"bind:KORN_NM\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","grdUserList:20","50","118","43",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("사용자별 권한");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Div("divRegiMenuSearch","290","staTitle01:0","152","32",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle02","-18","1","60","28",null,null,null,null,null,null,this.divRegiMenuSearch.form);
            obj.set_taborder("1");
            obj.set_text("모듈");
            obj.set_cssclass("sta_WF_SchLabelSub");
            this.divRegiMenuSearch.addChild(obj.name, obj);

            obj = new Combo("cboMenuModule","staTitle02:0","3","102","24",null,null,null,null,null,null,this.divRegiMenuSearch.form);
            obj.set_taborder("1");
            obj.set_text("워크플로우");
            obj.set_value("");
            obj.set_index("-1");
            this.divRegiMenuSearch.addChild(obj.name, obj);

            obj = new Grid("grdMenuRegi","290","divRegiMenuSearch:5",null,null,"18","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsRegiMenu");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj.set_cellclickbound("cell");
            obj.set_treeusebutton("use");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"280\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"48\"/><Column size=\"85\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell colspan=\"4\" text=\"메뉴\"/><Cell col=\"4\" rowspan=\"2\" text=\"조회범위\"/><Cell col=\"5\" rowspan=\"2\" text=\"조회\"/><Cell col=\"6\" rowspan=\"2\" text=\"추가\"/><Cell col=\"7\" rowspan=\"2\" text=\"삭제\"/><Cell col=\"8\" rowspan=\"2\" text=\"저장\"/><Cell col=\"9\" rowspan=\"2\" text=\"출력\"/><Cell col=\"10\" rowspan=\"2\" text=\"엑셀\"/><Cell row=\"1\" text=\"메뉴명\"/><Cell row=\"1\" col=\"1\" text=\"메뉴코드\"/><Cell row=\"1\" col=\"2\" text=\"모듈\"/><Cell row=\"1\" col=\"3\" text=\"사용\"/></Band><Band id=\"body\"><Cell text=\"bind:MENU_NM\" treelevel=\"bind:MENU_LVL\" treestartlevel=\"0\" displaytype=\"treeitemcontrol\" tooltiptext=\"bind:MENU_NM\"/><Cell col=\"1\" text=\"bind:MENU_ID\"/><Cell col=\"2\" text=\"bind:MODULE_CD\"/><Cell col=\"3\" text=\"bind:USED_YN\" displaytype=\"expr:USED_YN == &apos;1&apos; ? &apos;checkboxcontrol&apos; : &apos;none&apos;\" cssclass=\"cell_WF_ChkS\"/><Cell col=\"4\" text=\"bind:SEARCH_SCOPE_CD\" edittype=\"none\" displaytype=\"normal\"/><Cell col=\"5\" text=\"bind:INQR_BTTN_USED_YN\" displaytype=\"expr:INQR_BTTN_USED_YN == &apos;1&apos; ? &apos;checkboxcontrol&apos; : &apos;none&apos;\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" cssclass=\"cell_WF_ChkS\"/><Cell col=\"6\" text=\"bind:ANEW_BTTN_USED_YN\" displaytype=\"expr:ANEW_BTTN_USED_YN == &apos;1&apos; ? &apos;checkboxcontrol&apos; : &apos;none&apos;\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" cssclass=\"cell_WF_ChkS\"/><Cell col=\"7\" text=\"bind:DELE_BTTN_USED_YN\" displaytype=\"expr:DELE_BTTN_USED_YN == &apos;1&apos; ? &apos;checkboxcontrol&apos; : &apos;none&apos;\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" cssclass=\"cell_WF_ChkS\"/><Cell col=\"8\" text=\"bind:SAVE_BTTN_USED_YN\" displaytype=\"expr:SAVE_BTTN_USED_YN == &apos;1&apos; ? &apos;checkboxcontrol&apos; : &apos;none&apos;\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" cssclass=\"cell_WF_ChkS\"/><Cell col=\"9\" text=\"bind:PRNT_BTTN_USED_YN\" displaytype=\"expr:PRNT_BTTN_USED_YN == &apos;1&apos; ? &apos;checkboxcontrol&apos; : &apos;none&apos;\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" cssclass=\"cell_WF_ChkS\"/><Cell col=\"10\" text=\"bind:EXCL_BTTN_USED_YN\" displaytype=\"expr:EXCL_BTTN_USED_YN == &apos;1&apos; ? &apos;checkboxcontrol&apos; : &apos;none&apos;\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" cssclass=\"cell_WF_ChkS\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form.divUser
            obj = new Layout("default","",0,0,this.divSearch.form.divUser.form,function(p){});
            this.divSearch.form.divUser.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRegiMenuSearch.form
            obj = new Layout("default","",0,0,this.divRegiMenuSearch.form,function(p){});
            this.divRegiMenuSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1200,736,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cboSysGubun","value","dsCond","SYTM_FLAG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.divUser.form.edtUserId","value","dsCond","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboHoofStat","value","dsCond","HOOF_STAT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboCompany","value","dsCond","COMPANY_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::cmmUserSearch.xfdl");
        };
        
        // User Script
        this.registerScript("authPermPersonMenuListFm.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	authPermPersonMenuListFm.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/06/25
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/06/25			TOBESOFT					최초생성
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
        	this.gfnFormOnload(obj,e); //필수함수

        	//공통코드조회
        	var param = [
        			, {biztype : "Combo", code : "SM00", objid : this.divSearch.form.cboSysGubun}									// 시스템구분
        			, {biztype : "Combo", code : "SM01", objid : this.divRegiMenuSearch.form.cboMenuModule, selecttype:"A"} 		// 모듈구분
        			, {biztype : "Grid" , code : "SM01", objid : this.grdMenuRegi, bindcolumn : "MODULE_CD", edit : "false"}		// 모듈구분
        			, {biztype : "Grid" , code : "SM13", objid : this.grdMenuRegi, bindcolumn : "SEARCH_SCOPE_CD", edit:"false"}	// 조회범위
        			, {biztype : "Combo", code : "SM08", selecttype : "A", objid : this.divSearch.form.cboHoofStat}		    	// 재직상태
        	];
        	this.gfnGetCommonCode(param);

        	var arrComp = [this.divSearch.form.cboCompany];
        	this.gfnSetAuthorityCompany(arrComp);

        	this.divSearch.form.cboHoofStat.set_index(1);
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	this.fnTranSearch();
        };
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //사용자 List 조회
        this.fnTranSearch = function ()
        {
        	var strSvcId    = "searchPersonalPremUserList";
        	var strSvcUrl   = "searchPersonalPremUserList.do";
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

        //권한 메뉴 조회
        this.fnTranMenuSearch = function ()
        {
        	this.dsCondDetail.clearData();
        	var nRow = this.dsCondDetail.addRow();
        	this.dsCondDetail.setColumn(nRow, "COMPANY_CD"	, this.dsList.getColumn(this.dsList.rowposition, "COMPANY_CD"));
        	this.dsCondDetail.setColumn(nRow, "USER_ID"		, this.dsList.getColumn(this.dsList.rowposition, "USER_ID"));
        	this.dsCondDetail.setColumn(nRow, "SYTM_FLAG_CD", this.divSearch.form.cboSysGubun.value);

        	this.dsRegiMenu.filter("");
        	this.divRegiMenuSearch.form.cboMenuModule.set_index(0);

        	var strSvcId    = "searchPermPersonMenuList";
        	var strSvcUrl   = "searchPermPersonMenuList.do";
        	var inData      = "dsCondDetail=dsCondDetail";
        	var outData     = "dsRegiMenu=dsRegiMenu";
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
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "searchPersonalPremUserList":
        		case "searchPermPersonMenuList":
        			break;
        		default: break;
        	}
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

        this.dsList_onrowposchanged = function(obj,e)
        {
        	this.fnTranMenuSearch();
        };

        this.divRegiMenuSearch_cboMenuModule_canitemchange = function(obj,e)
        {
        	var sVal = e.postvalue;
        	if( sVal == "%"){
        		this.dsRegiMenu.filter("");
        	}else{
        		this.dsRegiMenu.filter("MODULE_CD=='"+sVal+"'");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.divRegiMenuSearch.form.cboMenuModule.addEventHandler("canitemchange",this.divRegiMenuSearch_cboMenuModule_canitemchange,this);
            this.grdMenuRegi.addEventHandler("oncellclick",this.grdMenuRegi_oncellclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
        };
        this.loadIncludeScript("authPermPersonMenuListFm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
