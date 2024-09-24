(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM_ProductSearch");
            this.set_titletext("부서조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(205,24);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCommonCond", this);
            obj._setContents("<ColumnInfo><Column id=\"SRCH\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCommonList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("edtCode","0","0","50%","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("edi_WF_Search");
            obj.getSetter("uUse").set("false");
            obj.set_maxlength("7");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","edtCode:-28","0","28","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdiSch");
            this.addChild(obj.name, obj);

            obj = new Edit("edtName","edtCode:3","0",null,"24","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("edi_WF_Search");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCompany","53.00","81","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",205,24,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COM_ProductSearch.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	COM_ProductSearch.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/06/28
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/06/28			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvSearchScopeCd = "";

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	if( this.parent.uEssential=="true"){
        		this.edtCode.set_cssclass("essential");
        	}
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //조회
        this.fnTranDeptList = function ()
        {
        	if (this.gfnIsNull(this.edtCode.value)) {
        		this.edtName.set_value("");
        		return;
        	}

        	var sContractType = this.divSearch.form.cmb_SelectType.value;
        	this.fnSetParentProduct();

        	this.gfnAddSendParameter("COMPANY_CODE"	, this.parent.COMPANY_CODE);
        	this.gfnAddSendParameter("CONTRACT_TYPE"	, this.parent.CONTRACT_TYPE);
        	this.gfnAddSendParameter("SRCH_TEXT"	, this.edtCode.value);

        	this.gfnSetMap("nextBaseMapper", "ProductOne", "dsCommonList");

        	this.gfnCommonTransaction("selectCommonDeptList", "selectNextList.do");

        };
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //transaction
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "selectCommonDeptList":
        			this.fnSetResult();
        			break;
        		default:break;
        	}
        };

        //popup
        this.fnPopupCallback = function (sPopupId, sRtn)
        {
        	switch(sPopupId) {
        		case "productMgPu":
        			if( !this.gfnIsNull(sRtn) ){
        				var aRtn= sRtn.split("|");
        				this.edtCode.set_value(aRtn[0]);
        				this.edtName.set_value(aRtn[1]);
        			}
        			break;
        		default:break;
        	}
        };

        //message
        this.fnMsgCallback = function (sMsgId, sRtn)
        {
        	switch(sMsgId) {
        		case "nodata":
        			//this.edtCode.set_enableevent(true);
        			this.edtCode.set_value("");
        			this.edtName.set_value("");
        			this.edtCode.setFocus();
        			break;
        		default:break;
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        //조회결과세팅
        this.fnSetResult = function ()
        {
        	if( this.dsCommonList.getRowCount() == 1){
        		var sCode = this.dsCommonList.getColumn(0, "CODE");
        		var sName = this.dsCommonList.getColumn(0, "NAME");

        		this.edtCode.set_value(sCode);
        		this.edtName.set_value(sName);

        // 		this.gfnAlert("msg.err.nodata", [""], "nodata", "fnMsgCallback");
         		return;
        	} else {
        		this.btnSearch.click();
        	}

        // 	var sCode = this.dsCommonList.getColumn(0, "CODE");
        // 	var sName = this.dsCommonList.getColumn(0, "NAME");
        //
        // 	this.edtCode.set_value(sCode);
        // 	this.edtName.set_value(sName);
        //
        // 	if(this.parent.parent.btnSearch) this.parent.parent.btnSearch.setFocus();
        	//this.edtCode.set_enableevent(true);
        };

        // 활성화/비활성화
        this.fnSetEnable = function (bEnable)
        {
        	this.edtCode.set_enable(bEnable);
        	this.btnSearch.set_enable(bEnable);
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.edtCode_onkeyup = function(obj,e)
        {
        	if(e.keycode==13) this.fnTranDeptList();
        };

        this.edtCode_onkillfocus = function(obj,e)
        {
        	this.fnTranDeptList();
        };

        this.btnSearch_onclick = function(obj,e)
        {
        	var sTitle  = "제품 선택";
        	var oArg    = {
        		pvCompanyCd:this.parent.COMPANY_CODE,
        		pvContractType:this.parent.CONTRACT_TYPE,
        		pvSearchValue:this.edtCode.value
        	};
        	var oOption = {title:sTitle
        				  ,titlebar:true};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("productMgPu", "sales::comm/productListPu.xfdl", oArg, sPopupCallBack, oOption);
        };

        this.fnSetCompany = function (v)
        {
        	this.edtCompany.set_value(v);
        	this.parent.COMPANY_CODE = v;
        };


        this.edtCode_onchanged = function(obj,e)
        {
        	if(!obj.value || obj.value == "") {
        		this.edtName.value = "";
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.edtCode.addEventHandler("onkeyup",this.edtCode_onkeyup,this);
            this.edtCode.addEventHandler("onchanged",this.edtCode_onchanged,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
        };
        this.loadIncludeScript("COM_ProductSearch.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
