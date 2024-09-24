(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("authMenuMgPu");
            this.set_titletext("프로그램 검색 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(791,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"PRGM_ID\" type=\"string\" size=\"10\"/><Column id=\"PRGM_NM\" type=\"string\" size=\"100\"/><Column id=\"PRGM_TYPE_CD\" type=\"string\" size=\"3\"/><Column id=\"MODULE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"PRGM_TYPE_CD\"/><Col id=\"PRGM_NM\"/><Col id=\"PRGM_ID\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"INIT_BTTN_USED_YN\" type=\"string\" size=\"32\"/><Column id=\"MODULE_CD\" type=\"string\" size=\"32\"/><Column id=\"ADD_BTN_YN\" type=\"string\" size=\"32\"/><Column id=\"EXCL_BTTN_USED_YN\" type=\"string\" size=\"32\"/><Column id=\"INQR_BTTN_USED_YN\" type=\"string\" size=\"32\"/><Column id=\"PRNT_BTTN_USED_YN\" type=\"string\" size=\"32\"/><Column id=\"PRGM_TYPE_CD\" type=\"string\" size=\"32\"/><Column id=\"ANEW_BTTN_USED_YN\" type=\"string\" size=\"32\"/><Column id=\"SAVE_BTTN_USED_YN\" type=\"string\" size=\"32\"/><Column id=\"USED_YN\" type=\"string\" size=\"32\"/><Column id=\"REMK\" type=\"undefined\" size=\"0\"/><Column id=\"PRGM_EXPL\" type=\"string\" size=\"32\"/><Column id=\"PRGM_NM\" type=\"string\" size=\"32\"/><Column id=\"DELE_BTTN_USED_YN\" type=\"string\" size=\"32\"/><Column id=\"PRGM_ID\" type=\"string\" size=\"32\"/><Column id=\"PRGM_PATH\" type=\"string\" size=\"32\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","25","20",null,"50","25",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00","162","12","102","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("프로그램 ID");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10","48","28","25",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtProgId","staTitle00:0","12","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle01","edtProgId:0","12","102","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("프로그램명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtProgNm","staTitle01:0","12","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle03_00","0","12","62","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("모듈");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboModuleCd","62","12","100","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("cbo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static04_01","0","0","25",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W 25");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_00",null,"0","25",null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W 25");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","25","divSearch:0",null,"43","25",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("프로그램");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","25","Static00:0",null,null,"25","68",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"85\"/><Column size=\"172\"/><Column size=\"250\"/><Column size=\"0\"/><Column size=\"95\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"모듈\"/><Cell col=\"1\" textAlign=\"center\" text=\"프로그램ID\"/><Cell col=\"2\" textAlign=\"center\" text=\"프로그램명\"/><Cell col=\"3\" textAlign=\"center\" text=\"프로그램경로\"/><Cell col=\"4\" textAlign=\"center\" text=\"프로그램파일명\"/><Cell col=\"5\" text=\"프로그램유형\" textAlign=\"center\"/></Band><Band id=\"body\"><Cell text=\"bind:MODULE_CD\"/><Cell col=\"1\" text=\"bind:PRGM_ID\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:PRGM_NM\" textAlign=\"left\" tooltiptext=\"bind:PRGM_NM\"/><Cell col=\"3\" text=\"bind:PRGM_PATH\" tooltiptext=\"bind:PRGM_PATH\"/><Cell col=\"4\" text=\"bind:PRGM_FILE_NM\" textAlign=\"center\" tooltiptext=\"bind:PRGM_FILE_NM\"/><Cell col=\"5\" text=\"bind:PRGM_TYPE_CD\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"50","28","25","20",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("취소");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk",null,null,"50","28","btnClose:3","20",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("확인");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",791,500,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtProgId","value","dsCond","PRGM_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtProgNm","value","dsCond","PRGM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboModuleCd","value","dsCond","MODULE_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("authMenuMgPu.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	authMenuMgPu.xfdl
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

        	//공통코드조회
        	var param = [
        		{biztype : "Grid",  code : "SM10", objid : this.grdList, bindcolumn : "PRGM_TYPE_CD", edit : "false"}	// grid 프로그램 유형
        	  , {biztype : "Grid", code : "SM01", objid : this.grdList, bindcolumn : "MODULE_CD", edit : "false"}		// 모듈
        	  , {biztype : "Combo", code : "SM01", selecttype : "A", objid : this.divSearch.form.cboModuleCd}			// 모듈
        	];
        	this.gfnGetCommonCode(param);
        };

        this.afterCommCodeLoad = function()
        {
        	var sModuleCd  = this.getOwnerFrame().pvModuleCd;
        	var sPgmId  = this.getOwnerFrame().pvPgmId;

        	if (!this.gfnIsNull(sModuleCd) || !this.gfnIsNull(sPgmId))
        	{
        		this.divSearch.form.cboModuleCd.set_value(sModuleCd);
        		this.divSearch.form.edtProgId.set_value(sPgmId);

        		this.fnTranSearch();
        	}
        }
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
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
        	this.dsCond.setColumn(0, "COMPANY_CD", this.getOwnerFrame().pvCompanyCd);

        	var strSvcId    = "searchProgramList";
        	var strSvcUrl   = "searchProgramList.do";
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
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnGetPrgmData = function()
        {
        	var nRow = this.dsList.rowposition;
        	var sRtn = "";
        		sRtn += "Y";
        		sRtn += "," + this.dsList.getColumn(nRow, "PRGM_ID");  // 프로그램ID
        		sRtn += "," + this.dsList.getColumn(nRow, "PRGM_NM");  // 프로그램NM

        	return sRtn;
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.cfnSearch();
        };

        this.grdList_oncelldblclick = function(obj,e)
        {
        	if(e.row != -1) {
        		this.close(this.fnGetPrgmData());
        	}
        };

        this.btnClose_onclick = function(obj,e)
        {
        	this.close("N");
        };

        this.btnOk_onclick = function(obj,e)
        {
        	if(this.dsList.rowposition < 0 || this.dsList.getRowCount() == 0)
        		this.close("N");
        	else
        		this.close(this.fnGetPrgmData());
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.grdList.addEventHandler("oncelldblclick",this.grdList_oncelldblclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
        };
        this.loadIncludeScript("authMenuMgPu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
