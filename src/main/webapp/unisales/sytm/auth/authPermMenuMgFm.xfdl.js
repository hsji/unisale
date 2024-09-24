(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("authPermMenuMgFm");
            this.set_titletext("메뉴별권한관리");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"SYTM_FLAG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MODULE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SYTM_FLAG_CD\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"LEVL\" type=\"STRING\" size=\"39\"/><Column id=\"SYTM_FLAG_CD\" type=\"string\" size=\"6\"/><Column id=\"MODULE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"string\" size=\"10\"/><Column id=\"MENU_GRP_ID\" type=\"string\" size=\"10\"/><Column id=\"HIPO_MENU_ID\" type=\"string\" size=\"10\"/><Column id=\"PRGM_ID\" type=\"string\" size=\"50\"/><Column id=\"PRGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"string\" size=\"50\"/><Column id=\"MENU_ENGL_NM\" type=\"string\" size=\"150\"/><Column id=\"MENU_WHLE_NM\" type=\"string\" size=\"200\"/><Column id=\"MENU_ORDR\" type=\"STRING\" size=\"4\"/><Column id=\"USED_YN\" type=\"string\" size=\"1\"/><Column id=\"REMK\" type=\"string\" size=\"4000\"/><Column id=\"PARM\" type=\"string\" size=\"100\"/><Column id=\"MENU_FLAG_CD\" type=\"string\" size=\"6\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"PERM_ID\" type=\"string\" size=\"32\"/><Column id=\"PERM_GRP_NM\" type=\"string\" size=\"32\"/><Column id=\"USER_NM\" type=\"string\" size=\"32\"/><Column id=\"SYTM_FLAG_CD\" type=\"string\" size=\"32\"/><Column id=\"USER_ID\" type=\"string\" size=\"32\"/><Column id=\"MENU_ID\" type=\"string\" size=\"32\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCondDetail", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SYTM_FLAG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGrp", this);
            obj._setContents("<ColumnInfo><Column id=\"PERM_ID\" type=\"string\" size=\"32\"/><Column id=\"PERM_GRP_NM\" type=\"string\" size=\"32\"/><Column id=\"SYTM_FLAG_CD\" type=\"string\" size=\"32\"/><Column id=\"USED_YN\" type=\"string\" size=\"32\"/><Column id=\"MENU_ID\" type=\"string\" size=\"32\"/><Column id=\"REMK\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUser", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_NM\" type=\"string\" size=\"32\"/><Column id=\"USER_ID\" type=\"string\" size=\"32\"/><Column id=\"EMP_NO\" type=\"string\" size=\"32\"/><Column id=\"DEPT_CD\" type=\"string\" size=\"32\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

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
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCompany","0","12","87","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("13");
            obj.set_text("회사구분");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCompany","staCompany:0","12","139","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("14");
            obj.set_innerdataset("gdsCompany");
            obj.set_codecolumn("SSC_CD");
            obj.set_datacolumn("SSC_CD_KORN_NM");
            obj.set_text("알림");
            obj.set_value("INF");
            obj.set_index("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle00","cboCompany:0","12","74","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_text("시스템");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSysGubun","staTitle00:0","12","130","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("cbo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle03_00","cboSysGubun:0","12","62","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("모듈");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboModuleCd","staTitle03_00:0","12","100","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("cbo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle01","cboModuleCd:0","12","74","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("11");
            obj.set_text("메뉴ID");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMenuId","staTitle01:0","12","100","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_maxlength("10");
            obj.set_imemode("alpha");
            obj.set_inputtype("english,digit");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle02","edtMenuId:0","12","74","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("12");
            obj.set_text("메뉴명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMenuNm","staTitle02:0","12","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_imemode("hangul");
            obj.set_maxlength("66");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTerm",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W20");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00",null,"divSearch:0","350","43","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("권한그룹");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","0","93",null,null,"390","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsList");
            obj.set_treeinitstatus("expand,all");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_tooltiptype("hover");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"206\"/><Column size=\"110\"/><Column size=\"100\"/><Column size=\"206\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"메뉴명\" textAlign=\"center\"/><Cell col=\"1\" text=\"메뉴ID\"/><Cell col=\"2\" text=\"모듈\"/><Cell col=\"3\" text=\"프로그램명\"/><Cell col=\"4\" displaytype=\"normal\" text=\"메뉴구분\" textAlign=\"center\"/></Band><Band id=\"body\"><Cell displaytype=\"treeitemcontrol\" edittype=\"tree\" text=\"bind:MENU_NM\" treestartlevel=\"0\" treelevel=\"bind:LEVL\"/><Cell col=\"1\" text=\"bind:MENU_ID\"/><Cell col=\"2\" text=\"bind:MODULE_CD\"/><Cell col=\"3\" text=\"bind:PRGM_NM\"/><Cell col=\"4\" displaytype=\"combo\" text=\"bind:MENU_FLAG_CD\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","50","48","43",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("메뉴");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdGroup",null,"staTitle00:0","350","321","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsGrp");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"120\"/><Column size=\"186\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"코드\"/><Cell col=\"1\" text=\"권한명\"/><Cell col=\"2\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:PERM_ID\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:PERM_GRP_NM\"/><Cell col=\"2\" text=\"bind:REMK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta00",null,"grdGroup:0","350","43","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("개인별 권한");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdUser",null,"sta00:0","350",null,"20","0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("dsUser");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"140\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"부서명\"/><Cell col=\"1\" text=\"사번/ID\"/><Cell col=\"2\" text=\"사용자명\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_NM\"/><Cell col=\"1\" text=\"bind:EMP_NO\"/><Cell col=\"2\" text=\"bind:USER_NM\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1200,736,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cboSysGubun","value","dsCond","SYTM_FLAG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divSearch.form.cboModuleCd","value","dsCond","MODULE_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtMenuId","value","dsCond","MENU_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtMenuNm","value","dsCond","MENU_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboUseYn","value","dsCond","USED_YN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.cboCompany","value","dsCond","COMPANY_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("authPermMenuMgFm.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	authPermMenuMgFm.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/03/25
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/03/25			TOBESOFT					최초생성
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

        	//공통코드
        	var param = [
        			  {biztype : "Combo", code : "SM00", objid : this.divSearch.form.cboSysGubun}					// 시스템 구분
        			, {biztype : "Combo", code : "SM01", selecttype : "A", objid : this.divSearch.form.cboModuleCd}	// 모듈
        			, {biztype : "Grid" , code : "SM12", objid : this.grdList, bindcolumn:"MENU_FLAG_CD"}			// 메뉴구분코드
        			, {biztype : "Grid" , code : "SM01", objid : this.grdList, bindcolumn:"MODULE_CD"}				// 모듈코드
        	];

        	this.gfnGetCommonCode(param);

        	var arrComp = [this.divSearch.form.cboCompany];
        	this.gfnSetAuthorityCompany(arrComp);
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
        //조회
        this.fnTranSearch = function ()
        {
        	// 조회
        	this.dsList.clearData();

        	var strSvcId    = "searchMenuList";
        	var strSvcUrl   = "searchMenuList.do";
        	var inData      = "dsCond=dsCond";
        	var outData     = "dsList=dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , strSvcUrl, inData, outData, strArg, callBackFnc);
        };


        //할당 미할당 메뉴 조회
        this.fnTranSearchMenu = function ()
        {
        	this.dsCondDetail.clearData();
        	var nRow = this.dsCondDetail.addRow();
        	this.dsCondDetail.setColumn(nRow, "COMPANY_CD"		, this.dsList.getColumn(this.dsList.rowposition, "COMPANY_CD"));
        	this.dsCondDetail.setColumn(nRow, "MENU_ID"		, this.dsList.getColumn(this.dsList.rowposition, "MENU_ID"));
        	this.dsCondDetail.setColumn(nRow, 'SYTM_FLAG_CD', this.dsList.getColumn(this.dsList.rowposition, "SYTM_FLAG_CD"));	// 시스템코드

        	var strSvcId    = "searchPermMenuList";
        	var strSvcUrl   = "searchPermMenuList.do";
        	var inData      = "dsCondDetail=dsCondDetail";
        	var outData     = "dsGrp=dsGrp dsUser=dsUser";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , strSvcUrl, inData, outData, strArg, callBackFnc);
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //transaction
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "searchMenuList":

        			break;
        		case "searchPermMenuList":
        // 			this.dsDetailGrp.filter("");
        // 			this.dsDetailGrp.copyData(this.dsDetail);
        // 			var sExpr	= "rowidx==dataset.findRowExpr(\"PERM_ID=='\" + PERM_ID + \"'\")";
        // 			this.dsDetailGrp.filter(sExpr);

        			break;

        		default:break;
        	}
        };



        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/


        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/

        this.dsList_onrowposchanged = function(obj,e)
        {
        	if ( e.newrow > -1)
        	{
        		this.fnTranSearchMenu();
        	}
        	else
        	{
        		this.dsUser.clearData();
        		this.dsGrp.clearData();
        	}
        };

        //조회
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.cfnSearch();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
        };
        this.loadIncludeScript("authPermMenuMgFm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
