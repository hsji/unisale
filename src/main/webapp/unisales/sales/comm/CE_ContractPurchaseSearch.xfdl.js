(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CE_ContractPurchaseSearch");
            this.set_titletext("매입계약 검색");
            this.set_cssclass("frm_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(1100,391);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmm_ContractType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"string\" size=\"30\"/><Column id=\"CAPTION\" type=\"string\" size=\"255\"/><Column id=\"VAL1\" type=\"string\" size=\"100\"/><Column id=\"VAL2\" type=\"string\" size=\"100\"/><Column id=\"VAL3\" type=\"string\" size=\"100\"/><Column id=\"VAL4\" type=\"string\" size=\"100\"/><Column id=\"REMARK\" type=\"string\" size=\"1073741823\"/><Column id=\"ORD\" type=\"string\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_ContractStatus", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"string\" size=\"30\"/><Column id=\"CAPTION\" type=\"string\" size=\"255\"/><Column id=\"VAL1\" type=\"string\" size=\"100\"/><Column id=\"VAL2\" type=\"string\" size=\"100\"/><Column id=\"VAL3\" type=\"string\" size=\"100\"/><Column id=\"VAL4\" type=\"string\" size=\"100\"/><Column id=\"REMARK\" type=\"string\" size=\"1073741823\"/><Column id=\"ORD\" type=\"string\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_PurchaseType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"30\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"255\"/><Column id=\"VAL1\" type=\"STRING\" size=\"100\"/><Column id=\"VAL2\" type=\"STRING\" size=\"100\"/><Column id=\"VAL3\" type=\"STRING\" size=\"100\"/><Column id=\"VAL4\" type=\"STRING\" size=\"100\"/><Column id=\"REMARK\" type=\"STRING\" size=\"1073741823\"/><Column id=\"ORD\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_List", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CODE\" type=\"string\" size=\"15\"/><Column id=\"CONTRACT_NO_PURCHASE\" type=\"string\" size=\"10\"/><Column id=\"CLIENT_CODE\" type=\"string\" size=\"20\"/><Column id=\"CONTRACT_MAIN\" type=\"string\" size=\"20\"/><Column id=\"PROJECT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CLIENT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CONTRACT_MAIN_NAME\" type=\"string\" size=\"100\"/><Column id=\"CONTRACT_PURCHASE_NAME\" type=\"string\" size=\"100\"/><Column id=\"CONTRACT_TYPE\" type=\"string\" size=\"20\"/><Column id=\"CONTRACT_STATUS\" type=\"string\" size=\"20\"/><Column id=\"PURCHASE_TYPE\" type=\"string\" size=\"20\"/><Column id=\"CONTRACT_DATE\" type=\"string\" size=\"8\"/><Column id=\"EMP_NO\" type=\"string\" size=\"60\"/><Column id=\"EMP_NAME\" type=\"string\" size=\"255\"/><Column id=\"START_DATE\" type=\"string\" size=\"8\"/><Column id=\"END_DATE\" type=\"string\" size=\"8\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0",null,null,"38","0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_BtnBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("st_Title","10","0","356","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("매입계약 검색");
            obj.set_cssclass("sta_POP_Title");
            obj.getSetter("TL_SEQ").set("764");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close",null,"10","15","15","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_POP_Cls");
            this.addChild(obj.name, obj);

            obj = new Div("div_Search","4","39",null,"40","4",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_cssclass("div_WF_SchList");
            this.addChild(obj.name, obj);

            obj = new Static("st_ContractType","11","8","60","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("4");
            obj.set_text("계약구분");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("123");
            this.div_Search.addChild(obj.name, obj);

            obj = new Combo("cmb_ContractType","75","8","118","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_cmm_ContractType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_Search",null,"7","60","24","8",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_SchText");
            obj.getSetter("TL_SEQ").set("118");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("stc_Client_Code00","471","8","60","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("5");
            obj.set_text("계약처");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("34");
            this.div_Search.addChild(obj.name, obj);

            obj = new Edit("edt_ContractMainName","539","8","196","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("2");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("stc_Client_Code01","211","7","60","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("6");
            obj.set_text("계약서번호");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("743");
            this.div_Search.addChild(obj.name, obj);

            obj = new Edit("edt_ContractDocNo","279","7","196","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("1");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("stc_Client_Code02","735","8","60","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("7");
            obj.set_text("프로젝트");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("119");
            this.div_Search.addChild(obj.name, obj);

            obj = new Edit("edt_ProjectName","stc_Client_Code02:8","8","196","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("8");
            this.div_Search.addChild(obj.name, obj);

            obj = new Grid("grd_List","4","83",null,null,"4","42",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_List");
            obj.set_autofittype("col");
            obj.set_formatid("S");
            obj._setContents("<Formats><Format id=\"S\"><Columns><Column size=\"100\"/><Column size=\"120\"/><Column size=\"180\"/><Column size=\"190\"/><Column size=\"120\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"계약서번호\" TL_SEQ=\"743\"/><Cell col=\"1\" text=\"고객사\" TL_SEQ=\"32\"/><Cell col=\"2\" text=\"프로젝트명\" TL_SEQ=\"114\"/><Cell col=\"3\" text=\"매입계약명\" TL_SEQ=\"161\"/><Cell col=\"4\" text=\"업체명\" TL_SEQ=\"231\"/><Cell col=\"5\" text=\"이름\" TL_SEQ=\"765\"/><Cell col=\"6\" text=\"시작일\" TL_SEQ=\"38\"/><Cell col=\"7\" text=\"종료일\" TL_SEQ=\"39\"/><Cell col=\"8\" text=\"계약상태\" TL_SEQ=\"121\"/><Cell col=\"9\" text=\"비고\" TL_SEQ=\"45\"/></Band><Band id=\"body\"><Cell text=\"bind:CONTRACT_DOC_NO\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:CLIENT_NAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:PROJECT_NAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:CONTRACT_PURCHASE_NAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:CONTRACT_MAIN_NAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:EMP_NAME\"/><Cell col=\"6\" text=\"bind:START_DATE\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\"/><Cell col=\"7\" text=\"bind:END_DATE\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\"/><Cell col=\"8\" displaytype=\"combotext\" text=\"bind:CONTRACT_STATUS\" combodataset=\"ds_cmm_ContractStatus\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/><Cell col=\"9\" text=\"bind:REMARKS\" combodataset=\"ds_cmm_ContractStatus\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" tooltiptext=\"bind:REMARKS\" textAlign=\"left\"/></Band></Format><Format id=\"M\"><Columns><Column size=\"100\"/><Column size=\"120\"/><Column size=\"180\"/><Column size=\"190\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"60\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"계약서번호\" TL_SEQ=\"743\"/><Cell col=\"1\" text=\"고객사\" TL_SEQ=\"32\"/><Cell col=\"2\" text=\"프로젝트명\" TL_SEQ=\"114\"/><Cell col=\"3\" text=\"매입계약명\" TL_SEQ=\"161\"/><Cell col=\"4\" text=\"업체명\" TL_SEQ=\"231\"/><Cell col=\"5\" text=\"제품\" TL_SEQ=\"62\"/><Cell col=\"6\" text=\"시작일\" TL_SEQ=\"38\"/><Cell col=\"7\" text=\"종료일\" TL_SEQ=\"39\"/><Cell col=\"8\" text=\"계약상태\" TL_SEQ=\"121\"/><Cell col=\"9\" text=\"비고\" TL_SEQ=\"45\"/></Band><Band id=\"body\"><Cell text=\"bind:CONTRACT_DOC_NO\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:CLIENT_NAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:PROJECT_NAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:CONTRACT_PURCHASE_NAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:CONTRACT_MAIN_NAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:EMP_NAME\"/><Cell col=\"6\" text=\"bind:START_DATE\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\"/><Cell col=\"7\" text=\"bind:END_DATE\" calendardateformat=\"yyyy-MM-dd\" displaytype=\"date\"/><Cell col=\"8\" displaytype=\"combotext\" text=\"bind:CONTRACT_STATUS\" combodataset=\"ds_cmm_ContractStatus\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/><Cell col=\"9\" text=\"bind:REMARKS\" combodataset=\"ds_cmm_ContractStatus\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" tooltiptext=\"bind:REMARKS\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Cancel",null,null,"70","22","8","8",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_cancel");
            obj.getSetter("TL_SEQ").set("59");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Confirm",null,null,"60","22","88","8",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_tran");
            obj.getSetter("TL_SEQ").set("113");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_Search.form
            obj = new Layout("default","",0,0,this.div_Search.form,function(p){});
            this.div_Search.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1100,391,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CE_ContractPurchaseSearch.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("CE_ContractPurchaseSearch.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("CE_ContractPurchaseSearch.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("CE_ContractPurchaseSearch.xfdl","Script::CommGrid.xjs");
        this.addIncludeScript("CE_ContractPurchaseSearch.xfdl","Script::ext_CommEco.xjs");
        this.registerScript("CE_ContractPurchaseSearch.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분	 	:
        * 02. 화면명		:
        * 03. 화면설명 	:
        * 04. 작성일   	: 2018.12.19
        * 05. 작성자   	: 채종한
        * 06. 수정이력 	:
        ***********************************************************************************************
        *     수정일          이  름    사유
        ***********************************************************************************************
        *
        ************************************************************************************************/

        /************************************************************************************************
        * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        this.executeIncludeScript("Script::CommSystem.xjs"); /*include "Script::CommSystem.xjs"*/;
        this.executeIncludeScript("Script::CommTrans.xjs"); /*include "Script::CommTrans.xjs"*/;
        this.executeIncludeScript("Script::CommUtil.xjs"); /*include "Script::CommUtil.xjs"*/;
        this.executeIncludeScript("Script::CommGrid.xjs"); /*include "Script::CommGrid.xjs"*/;
        this.executeIncludeScript("Script::ext_CommEco.xjs"); /*include "Script::ext_CommEco.xjs"*/

        /************************************************************************************************
        * 전역 변수 영역
        ************************************************************************************************/
        this.FV_CONTRACT_TYPE = "";
        this.FV_PROJECT_CODE = "";
        this.FV_CONTRACT_NO_PURCHASE = "";
        this.FV_CONTRACT_MAIN_NAME = "";
        this.FV_EMP_NO = "";
        /************************************************************************************************
        * FORM 영역 EVENT 영역
        ************************************************************************************************/
        this.CE_ContractPurchaseSearch_onload = function(obj,e)
        {
        	this.FV_PROJECT_CODE = this.parent.pv_project_cd;
        	this.FV_CONTRACT_TYPE = this.parent.pv_contract_type;
        	this.FV_CONTRACT_NO_PURCHASE = this.parent.pv_ContractNoPurchase;
        	this.FV_CONTRACT_MAIN_NAME = this.parent.pv_ContractMainName;
        	this.FV_EMP_NO = this.parent.pv_emp_no;
        	this.div_Search.form.edt_ContractMainName.set_value(this.FV_CONTRACT_MAIN_NAME);

        	this.gfnCompInit(obj);  	// Grid 공통함수 호출
        	this.fnGetCode();
        };


        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        // 공통 코드 조회
        this.fnGetCode = function()
        {
        	this.gfnAddCodeDataset("ds_cmm_ContractType",	"CONTRACT_TYPE", true);	// 계약구분
        	this.gfnAddCodeDataset("ds_cmm_ContractStatus",	"CONTRACT_STATUS");		// 계약상태
        	this.gfnAddCodeDataset("ds_cmm_PurchaseType",	"PURCHASE_TYPE"); 		// 매입구분
        	this.gfnCodeTransaction();
        }


        // 조회
        this.fnSearch = function()
        {
        	this.fnSetGridDisp();	// 계약구분에 대한 Grid 포맷 변경 처리

        	this.gfnAddSendParameter("PROJECT_CODE",		this.FV_PROJECT_CODE);
        	this.gfnAddSendParameter("CONTRACT_NO_PURCHASE",this.FV_CONTRACT_NO_PURCHASE);
        	this.gfnAddSendParameter("CONTRACT_TYPE",		this.div_Search.form.cmb_ContractType.value);
        	this.gfnAddSendParameter("CONTRACT_DOC_NO",		this.div_Search.form.edt_ContractDocNo.value);
        	this.gfnAddSendParameter("CONTRACT_MAIN_NAME",	this.div_Search.form.edt_ContractMainName.value);
        	this.gfnAddSendParameter("PROJECT_NAME",		this.div_Search.form.edt_ProjectName.value);

        	this.gfnAddOutputDataset("ds_List", "dsOutput");
        	this.gfnCommonTransaction("Select", "CE_ContractPurchaseSearch_S01");
        }


        this.fnCallBack = function(strSvcID, nErrorCode, strErrorMag)
        {
        	// 에러 예외처리
        	if(nErrorCode != 0) {
        		return;
        	} else {
        		if(strSvcID=="gfnGetCode") {

        			if (this.gfnIsEmpty(this.FV_CONTRACT_TYPE)) {
        				this.div_Search.form.cmb_ContractType.set_index(0);
        			} else {
        				this.div_Search.form.cmb_ContractType.set_value(this.FV_CONTRACT_TYPE);
        				this.div_Search.form.cmb_ContractType.set_readonly(true);
        			}
        			this.fnSearch();

        		} else if(strSvcID=="Select")	{
        			//
        		}
        	}
        }

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        //
        this.fnSetGridDisp = function()
        {
        	var sContractType = this.div_Search.form.cmb_ContractType.value;
        	this.grd_List.set_enableevent(false);
        	this.grd_List.set_formatid(sContractType);
        	this.grd_List.set_enableevent(true);
        }

        // 선택된 Row의 데이터를 Return처리
        this.fnReturnOne = function(objDs, nRow)
        {
        	if(objDs.getColumn(objDs.rowposition, "EMP_NO")!=this.FV_EMP_NO && !this.gfnIsEmpty(this.FV_EMP_NO))
        	{
        		alert(this.gfnGetTransTxt(1206, "다른 직원의 매입계약은 선택할수 없습니다."));
        		return;
        	}

        	var dsReturn = new nexacro.Dataset();
        	dsReturn.assign(objDs);
        	dsReturn.clearData();

        	var newrow = dsReturn.addRow();
        	dsReturn.copyRow(newrow, objDs, nRow);
        	this.commUtil.popupClose(dsReturn);
        }

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        // 조회 버튼
        this.div_Search_btn_Search_onclick = function(obj,e)
        {
        	this.fnSearch();
        };


        // 닫기 버튼
        this.btn_Close_onclick = function(obj,e)
        {
        	this.commUtil.popupClose("");
        };

        // 선택 버튼
        this.btn_Confirm_onclick = function(obj,e)
        {
        	var sDatasetId = obj.binddataset;
        	var objDs = this.objects[sDatasetId];
        	this.fnReturnOne(objDs, objDs.rowposition);
        };

        // Grid 더블클릭
        this.grd_List_oncelldblclick = function(obj,e)
        {
        	var sDatasetId = obj.binddataset;
        	var objDs = this.objects[sDatasetId];
        	this.fnReturnOne(objDs, e.row);
        };

        this.Edit_onkeydown = function(obj,e)
        {
        	if(e.keycode==13)
        		this.fnSearch();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CE_ContractPurchaseSearch_onload,this);
            this.btn_Close.addEventHandler("onclick",this.btn_Close_onclick,this);
            this.div_Search.form.cmb_ContractType.addEventHandler("onitemchanged",this.div_Search_cmb_ContractType_onitemchanged,this);
            this.div_Search.form.btn_Search.addEventHandler("onclick",this.div_Search_btn_Search_onclick,this);
            this.div_Search.form.edt_ContractMainName.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.div_Search.form.edt_ContractDocNo.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.div_Search.form.edt_ProjectName.addEventHandler("onkeydown",this.Edit_onkeydown,this);
            this.grd_List.addEventHandler("oncelldblclick",this.grd_List_oncelldblclick,this);
            this.btn_Cancel.addEventHandler("onclick",this.btn_Close_onclick,this);
            this.btn_Confirm.addEventHandler("onclick",this.btn_Confirm_onclick,this);
        };
        this.loadIncludeScript("CE_ContractPurchaseSearch.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
