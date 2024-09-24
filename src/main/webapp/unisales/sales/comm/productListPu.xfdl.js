(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("orgUserListPu");
            this.set_titletext("사용자전체조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(540,630);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HOOF_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"KORN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Product", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCT_CODE\" type=\"string\" size=\"20\"/><Column id=\"PRODUCT_TYPE\" type=\"string\" size=\"20\"/><Column id=\"PRODUCT_NAME\" type=\"string\" size=\"100\"/><Column id=\"PRODUCT_NAME_SHORT\" type=\"string\" size=\"100\"/><Column id=\"PRODUCT_NAME_JAP\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT_COST\" type=\"float\" size=\"22\"/><Column id=\"PRODUCT_NAME_SHORT2\" type=\"STRING\" size=\"256\"/><Column id=\"REMARKS\" type=\"string\" size=\"1073741823\"/><Column id=\"DELETE_FLAG\" type=\"string\" size=\"1\"/><Column id=\"ORD\" type=\"string\" size=\"10\"/><Column id=\"RELATED_COMPANY_CODE\" type=\"string\" size=\"20\"/><Column id=\"INSERT_DATE\" type=\"datetime\" size=\"23\"/><ConstColumn id=\"INSERT_EMP_NO\" type=\"string\" size=\"60\" value=\"0412201\"/><Column id=\"INSERT_DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"INSERT_DEPT_NM\" type=\"string\" size=\"100\"/><Column id=\"INSERT_MODEL\" type=\"string\" size=\"100\"/><Column id=\"UPDATE_DATE\" type=\"datetime\" size=\"23\"/><Column id=\"UPDATE_EMP_NO\" type=\"string\" size=\"60\"/><Column id=\"UPDATE_DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"UPDATE_DEPT_NM\" type=\"string\" size=\"100\"/><Column id=\"UPDATE_MODEL\" type=\"string\" size=\"100\"/><Column id=\"PRODUCT_CODE_LEVEL\" type=\"string\" size=\"255\"/><Column id=\"P_PRODUCT_CODE\" type=\"string\" size=\"255\"/><Column id=\"INSERT_EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NO_PURCHASE_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"ROYALTY_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"MA_MAIN_PRODUCT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"MA_MAIN_PRODUCT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_COMPANY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"RELATED_COMPANY_CODE_JAP\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_CO_CD_TOBE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_CO_CD_DX_TOBE\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_CO_CD_TOBE_JAP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","25.00","0",null,"43","25",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("제품 목록");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm",null,null,"50","28","78","20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"50","28","25","20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("취소");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01","0","0","25",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W 25");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_00",null,"0","25",null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W 25");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_List","25","43",null,null,"25","70",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_Product");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseexpandkey("true");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"62\"/><Column size=\"410\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"No.\"/><Cell col=\"1\" text=\"제품목록\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" treelevel=\"bind:PRODUCT_LVL\" edittype=\"tree\" displaytype=\"treeitemcontrol\" text=\"bind:PRODUCT_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",540,630,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("productListPu.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("productListPu.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("productListPu.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("productListPu.xfdl","Script::CommGrid.xjs");
        this.registerScript("productListPu.xfdl", function() {
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
        this.executeIncludeScript("Script::CommSystem.xjs"); /*include "Script::CommSystem.xjs"*/;
        this.executeIncludeScript("Script::CommTrans.xjs"); /*include "Script::CommTrans.xjs"*/;
        this.executeIncludeScript("Script::CommUtil.xjs"); /*include "Script::CommUtil.xjs"*/;
        this.executeIncludeScript("Script::CommGrid.xjs"); /*include "Script::CommGrid.xjs"*/;
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        	this.cfnSearch(); //자동조회
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *****************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	this.gfnAddSendParameter("COMPANY_CODE"	, this.getOwnerFrame().pvCompanyCd);
        	this.gfnAddSendParameter("CONTRACT_TYPE"	, this.getOwnerFrame().pvContractType);

        	this.gfnSetMap("nextBaseMapper", "ProductTreeList", "ds_Product");

        	this.gfnCommonTransaction("Select", "selectNextList.do"/*"AP_SalesProductMM_S05"*/);
        };
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //transaction
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "Select":
        			break;
        		default:break;
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnClose = function (nRow)
        {
        	var sCd = this.ds_Product.getColumn(nRow, "PRODUCT_CODE");
        	var sNm = this.ds_Product.getColumn(nRow, "PRODUCT_NAME");
        	var rtn = sCd +"|" + sNm;

        	this.close(rtn);
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.btnConfirm_onclick = function(obj,e)
        {
        	this.fnClose(this.ds_Product.rowposition);
        };

        this.btnClose_onclick = function(obj,e)
        {
        	this.close("");
        };

        this.grd_List_oncelldblclick = function(obj,e)
        {
        	this.fnClose(e.row);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnConfirm.addEventHandler("onclick",this.btnConfirm_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.grd_List.addEventHandler("oncelldblclick",this.grd_List_oncelldblclick,this);
        };
        this.loadIncludeScript("productListPu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
