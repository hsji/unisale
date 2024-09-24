(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("assetListPu");
            this.set_titletext("사용자전체조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(750,630);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"ASSET_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HOOF_STAT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.getSetter("firefirstcount").set("0");
            obj._setContents("<ColumnInfo><Column id=\"ASSET_STATUS_CD\" type=\"string\" size=\"32\"/><Column id=\"P_DATE\" type=\"string\" size=\"32\"/><Column id=\"REASON_CD\" type=\"string\" size=\"32\"/><Column id=\"SERIAL_NO\" type=\"string\" size=\"32\"/><Column id=\"POSITION_CD\" type=\"string\" size=\"32\"/><Column id=\"OWNNER\" type=\"string\" size=\"32\"/><Column id=\"I_DATE\" type=\"string\" size=\"32\"/><Column id=\"IP_ADDR\" type=\"string\" size=\"32\"/><Column id=\"MEM_TYPE\" type=\"string\" size=\"32\"/><Column id=\"M_STATUS\" type=\"string\" size=\"32\"/><Column id=\"DEGREE_LVL\" type=\"string\" size=\"32\"/><Column id=\"ASSET_SIZE\" type=\"string\" size=\"32\"/><Column id=\"ASSET_CD\" type=\"string\" size=\"32\"/><Column id=\"ASSET_NO\" type=\"int\" size=\"4\"/><Column id=\"ASSET_TYPE\" type=\"string\" size=\"32\"/><Column id=\"MANAGETEAM_CD\" type=\"string\" size=\"32\"/><Column id=\"MANAGER\" type=\"string\" size=\"32\"/><Column id=\"HDD_TYPE\" type=\"string\" size=\"32\"/><Column id=\"TITLE\" type=\"string\" size=\"32\"/><Column id=\"REMARK\" type=\"string\" size=\"32\"/><Column id=\"M_CNT\" type=\"int\" size=\"4\"/><Column id=\"CPU_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ASSET_VERSION\" type=\"string\" size=\"32\"/><Column id=\"PRODUCT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"RELATION_ASSET\" type=\"STRING\" size=\"256\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OWNNER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"OS_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","25","20",null,"50","25",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10","48","28","25",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCd","0","12","98","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("자산구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboAssetGrp","98","12","165","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00","25","70",null,"43","25",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("자산목록");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm",null,null,"50","28","78","20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"50","28","25","20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("취소");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","165","70","30","43",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("H43");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01","0","0","25",null,null,"0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W 25");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_00",null,"0","25",null,"0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W 25");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00","166","0","30","20",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("H20");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","25","113",null,null,"25","68",null,null,"250",null,this);
            obj.set_taborder("8");
            obj.set_binddataset("dsList");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.getSetter("uFunction").set("filter,sort,!colfix,!initial,find");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"65\"/><Column size=\"139\"/><Column size=\"98\"/><Column size=\"160\"/><Column size=\"160\"/><Column size=\"160\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"자산번호\"/><Cell col=\"3\" text=\"사용자\"/><Cell col=\"4\" text=\"형태\"/><Cell col=\"5\" text=\"버전\"/><Cell col=\"6\" text=\"시리얼\"/></Band><Band id=\"body\"><Cell text=\"bind:ASSET_CD\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:ASSET_NO\"/><Cell col=\"2\" expr=\"ASSET_CD &amp;&amp; ASSET_NO?ASSET_CD + &apos;-&apos; + (ASSET_NO+&apos;&apos;).padLeft(3,&apos;0&apos;):&apos;&apos;\"/><Cell col=\"3\" text=\"bind:OWNNER_NAME\"/><Cell col=\"4\" text=\"bind:ASSET_TYPE\"/><Cell col=\"5\" text=\"bind:ASSET_VERSION\"/><Cell col=\"6\" text=\"bind:SERIAL_NO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",750,630,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtEmpNo","value","dsCond","EMP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtUserNm","value","dsCond","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboHoofStat","value","dsCond","HOOF_STAT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSearch.form.cboAssetGrp","value","dsCond","ASSET_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("assetListPu.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	orgUserListPu.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/06/28
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/06/28			TOBESOFT					최초생성
        * 2022/10/18			TOBESOFT					재직상태추가
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

        	var param =
        	[
        		  {biztype : "Combo", code : "SM23", selecttype : "A", objid : this.divSearch.form.cboAssetGrp}				// 자산구분
        		, {biztype : "Grid",  code : "SM23", objid : this.grdMaster, bindcolumn : "ASSET_CD", edit : "false"}	// 자산구분코드
        		, {biztype : "Grid",  code : "SM19", objid : this.grdMaster, bindcolumn : "ASSET_TYPE", edit : "false"}	// 자산형태

        	];
        	this.gfnGetCommonCode(param);

        	this.fvSearchCode = this.getOwnerFrame().pvSearchCode;
        	this.fvSearchName = this.getOwnerFrame().pvSearchNo;

        	if(this.fvSearchCode && this.fvSearchCode != "") {
        		this.divSearch.form.cboAssetGrp.set_value(this.fvSearchCode);
        	}

        	this.cfnSearch(); //자동조회
        };

        this.afterCommCodeLoad = function()
        {

        }
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *****************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	//this.dsCond.clearData();
        	this.dsList.clearData();

        	var strSvcId    = "SearchAssetList";
        	var strSvcUrl   = "SearchAssetList.do";
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
        //transaction
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "SearchAssetList":
        			break;
        		default:break;
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnClose = function (nRow)
        {
        	var sCd = this.dsList.getColumn(nRow, "ASSET_CD");
        	var sNo = this.dsList.getColumn(nRow, "ASSET_NO");
        	var sName = this.dsList.getColumn(nRow, "OWNNER_NAME");
        	var sType = this.dsList.getColumn(nRow, "ASSET_TYPE");
        	var sVersion = this.dsList.getColumn(nRow, "ASSET_VERSION");

        	var rtn = sCd +"|" + sNo+"|" + sName+"|" + sType+"|" + sVersion;

        	this.close(rtn);
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.btnConfirm_onclick = function(obj,e)
        {
        	this.fnClose(this.dsList.rowposition);
        };

        this.btnClose_onclick = function(obj,e)
        {
        	this.close("");
        };

        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.cfnSearch();
        };

        this.grdMaster_oncelldblclick = function(obj,e)
        {
        	this.fnClose(e.row);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.divSearch.form.cboAssetGrp.addEventHandler("onitemchanged",this.divSearch_cboAssetGrp_onitemchanged,this);
            this.btnConfirm.addEventHandler("onclick",this.btnConfirm_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.grdMaster.addEventHandler("oncelldblclick",this.grdMaster_oncelldblclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
        };
        this.loadIncludeScript("assetListPu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
