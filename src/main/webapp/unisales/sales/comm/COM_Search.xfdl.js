(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM_Search");
            this.set_titletext("New Form");
            this.set_scrolltype("none");
            this.set_scrollbartype("none none");
            if (Form == this.constructor)
            {
                this._setFormPosition(270,24);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Edit("edtName","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_padding("0px 15px 0px 5px");
            obj.set_cssclass("edi_WF_Search");
            obj.set_text("국민연금 주거래시스템 고도화 사업국민연금 주거래시스템 고도화 사업");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Popup",null,"0","24","24","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdiSch");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Delete",null,"0","24","24","24",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_TF_Clear");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCode","0","40","37.78%","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("edi_WF_Search");
            obj.getSetter("uUse").set("false");
            obj.set_maxlength("7");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",270,24,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("COM_Search.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("COM_Search.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("COM_Search.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("COM_Search.xfdl","Script::CommGrid.xjs");
        this.registerScript("COM_Search.xfdl", function() {
        /************************************************************************************************
         * 01. 업무구분 :
         * 02. 화면명   : COM_Search
         * 03. 화면설명 :
         * 04. 작성일   :
         * 05. 작성자   :
         * 06. 수정이력 :
         ***********************************************************************************************
         *     수정일          이  름    사유
         ***********************************************************************************************/
        /*
        사용 용도
        1. 검색조건 edit
          example)
        		- this.div_Search.form.div_Search.getCode();  : 코드 가져오기
        		- this.div_Search.form.div_Search.getData();  : 코드명 가져오기
        2. 데이터 binding edit (	div url에 본 화면을 연결한 후 아래 user property를 추가한다.)
          example)
        		- binddataset="ds_List"			: string, 바인딩할 ds명
        		- codecolumn="WORK_EMP_NO" 		: string, 바인딩할 ds의 코드 컬럼명
        		- datacolumn="WORK_EMP_NAME" 	: string, 바인딩할 ds의 데이터 컬럼명 (코드명)
        		- kind="EMPLOYEE" 				: string, 검색버튼 용도 (아래 btn_Popup_onclick 함수에 나열)
        */

        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
         ************************************************************************************************/
        this.executeIncludeScript("Script::CommSystem.xjs"); /*include "Script::CommSystem.xjs"*/;
        this.executeIncludeScript("Script::CommTrans.xjs"); /*include "Script::CommTrans.xjs"*/;
        this.executeIncludeScript("Script::CommUtil.xjs"); /*include "Script::CommUtil.xjs"*/;
        this.executeIncludeScript("Script::CommGrid.xjs"); /*include "Script::CommGrid.xjs"*/;


        /************************************************************************************************
         * 전역 변수 영역
         ************************************************************************************************/
        this.pForm;			//Form.Div.this(현위치)
        this.pEventForm;	//Form.Div.this(현위치)

        this.pComp;			//Div.this(현위치)
        this.pEventComp;	//Div.this(현위치)
        this.preCode, this.preName;

        this.FV_KIND;	// 부모Div userproperty 속성 kind (검색 popup 종류)
        this.FV_PARAM;	// 부모Div userproperty 속성 param (parameter 값)

        this.FV_SEARCHTYPE;
        this.FV_ALL_CO;
        this.FV_TEXT = "";
        this.FV_VALUE = "";
        this.FV_ESTIMATE_FLAG;
        this.FV_ESTIMATE_CONTRACT_TYPE;

        this.recentVariant = null;

        // 회사 (고객사, 협력사)
        // 프로젝트 (프로젝트, 계약)
        // 직원
        // 업종, 업태


         /************************************************************************************************
         * FORM 영역
         ************************************************************************************************/
        this.COM_ProjectSearch_onload = function(obj,e)
        {
        	this.fnInitForm();
        };

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
         ************************************************************************************************/


         /************************************************************************************************
         * FORM 공통 FUNCTION 영역
         ************************************************************************************************/
        this.fnInitForm = function()
        {
        	if( this.parent.uEssential=="true"){
        		this.edtName.set_cssclass("essential");
        	}

        	var pThis = this;
        	this.parent.getRecentVariant = function()
        							{
        								return pThis.recentVariant;
        							}
        	this.parent.getCode = function()
        							{
        								return pThis.edtName._code;
        							};
        	this.parent.getData = function()
        							{
        								return pThis.edtName.value;
        							};
        	this.parent.setCode = function(code)
        						{
        							pThis.preCode = pThis.edtName._code;
        							pThis.edtName._code = code;
        							if(pThis.isBind() && !pThis.gfnIsEmpty(pThis.parent.codecolumn))
        							{
        								pThis.edtName.set_value(code);
        								var pDs = pThis.getBindDataset();
        								var pDsRow = pDs.rowposition;
        								pDs.setColumn(pDsRow, pThis.parent.codecolumn, code);
        							}
        							if(!pThis.gfnIsEmpty(code))
        							{
        								pThis.btn_Delete.set_visible(true);
        							}else{
        								pThis.btn_Delete.set_visible(false);
        							}
        						};
        	this.parent.setData = function(data)
        						{
        							pThis.preName = pThis.edtName.value;
        							pThis.edtName.set_value(data);
        							if(pThis.isBind() && !pThis.gfnIsEmpty(pThis.parent.datacolumn))
        							{
        								var pDs = pThis.getBindDataset();
        								var pDsRow = pDs.rowposition;
        								pDs.setColumn(pDsRow, pThis.parent.datacolumn, data);
        							}
        							if(!pThis.gfnIsEmpty(data))
        							{
        								pThis.btn_Delete.set_visible(true);
        							}else{
        								pThis.btn_Delete.set_visible(false);
        							}
        						};
        	this.getRecentVariant = this.parent.getRecentVariant;
        	this.getCode = this.parent.getCode;
        	this.getData = this.parent.getData;
        	this.setCode = this.parent.setCode;
        	this.setData = this.parent.setData;

        	this.pForm = this.parent.parent;		//Form.Div.this(현위치)
        	this.pEventForm = this.pForm;			//Form.Div.this(현위치)

        	this.pComp = this.parent;				//Div.this(현위치)
        	this.pEventComp = this.pComp;			//Div.this(현위치)

        	this.FV_KIND = this.parent.kind;		// div User Component 속성처리
        	this.FV_SEARCHTYPE = this.parent.searchtype;
        	this.FV_ALL_CO = this.parent.allco;
        	this.FV_ESTIMATE_FLAG = this.parent.estimateflag;

        	if(this.isBind())
        	{
        		var pDs = this.getBindDataset();
        		var pDsRow = pDs.rowposition;
        		if(!this.gfnIsEmpty(this.parent.codecolumn))
        		{
        			if (pDsRow>=0) {
        				this.setCode(pDs.getColumn(pDsRow, this.parent.codecolumn));
        			}
        		}
        		if(!this.gfnIsEmpty(this.parent.datacolumn))
        		{
        			var bindItem = new BindItem();
        			bindItem.init("userBindItem_edtName", "edtName", "value", this.parent.binddataset, this.parent.datacolumn);
        			this.addChild("userBindItem_edtName", bindItem);
        			bindItem.bind();

        			var _bindds_oncolumnchanged = function(obj,e)
        			{
        				if(!this.gfnIsEmpty(this.parent)) {
        					if(e.columnid == this.parent.datacolumn)
        					{
        						if(!this.gfnIsEmpty(e.newvalue))
        						{
        							this.btn_Delete.set_visible(true);
        						}else{
        							this.btn_Delete.set_visible(false);
        						}
        					}
        				}
        			}
        			var _bindds_onload = function(obj,e)
        			{
        				if(!this.gfnIsEmpty(this.parent)) {
        					var _val = obj.getColumn(obj.rowposition, this.parent.datacolumn);
        					if(!this.gfnIsEmpty(_val))
        					{
        						this.btn_Delete.set_visible(true);
        					}else{
        						this.btn_Delete.set_visible(false);
        					}
        				}
        			}

        			var _bindds_onrowposchanged = function(obj,e)
        			{
        				if(!this.gfnIsEmpty(this.parent)) {
        					var _val = obj.getColumn(e.newrow, this.parent.datacolumn);
        					if(!this.gfnIsEmpty(_val))
        					{
        						this.btn_Delete.set_visible(true);
        					}else{
        						this.btn_Delete.set_visible(false);
        					}
        				}
        			}
        			this.getBindDataset().addEventHandler("oncolumnchanged", _bindds_oncolumnchanged, this);
        			this.getBindDataset().addEventHandler("onload", _bindds_onload, this);
        			this.getBindDataset().addEventHandler("onrowposchanged", _bindds_onrowposchanged, this);
        		}
        	}
        }

        this.isBind = function()
        {
        	if(this.parent.binddataset)
        	{
        		if(		!this.gfnIsEmpty(this.parent.binddataset)
        			&& ( !this.gfnIsEmpty(this.parent.datacolumn) || !this.gfnIsEmpty(this.parent.codecolumn) ) )
        		{
        			return true;
        		}
        	}
        	return false;
        }

        this.getBindDataset = function()
        {
        	/*var pForm = nexacro.getApplication().getActiveForm();
        	var pDs = pForm[this.parent.binddataset];
        	return pDs;*/
        	return this._getDatasetObject(this.parent.binddataset);
        }

        this.clearData = function()
        {
        	this.edtName.set_value(null);
        	this.edtName._code = null;

        	if(this.isBind())
        	{
        		var pDs = this.getBindDataset();
        		var pDsRow = pDs.rowposition;
        		 if(!this.gfnIsEmpty(this.parent.codecolumn))
        		 {
        			pDs.setColumn(pDsRow, this.parent.codecolumn, null);
        		 }
        		 if(!this.gfnIsEmpty(this.parent.datacolumn))
        		 {
        			pDs.setColumn(pDsRow, this.parent.datacolumn, null);
        		 }
        	}
        	this.onchanged();
        	this.btn_Delete.set_visible(false);
        }

        // Popup 콜백
        this.fnPopupCallBack = function(sPopupId, Variant)
        {
        	if(this.gfnIsEmpty(Variant) || Variant == false || Variant == "false")
        	{
        		return;
        	}
        	else
        	{
        		var arrVariant = Variant.split("|");
        		this.recentVariant = Variant;
        		switch(sPopupId)
        		{
        			case "popupClientSearch" :  //고객사
        				this.setCode(arrVariant[0]);
        				this.setData(arrVariant[1]);
        				this.onchanged();
        			break;

        			case "popupCompanySearch" :  //협력사
        				this.setCode(arrVariant[0]);
        				this.setData(arrVariant[1]);
        				this.onchanged();
        			break;

        			case "popupProjectSearch" :  //프로젝트관리
        				var ds = new nexacro.Dataset();
        				ds.loadXML(Variant);
        				this.recentVariant = ds;
        				this.setCode(ds.getColumn(0, "PROJECT_CODE"));
        				this.setData(ds.getColumn(0, "PROJECT_NAME"));
        				this.onchanged();
        			break;

        			case "popupContractSearch" :  //매출계약
        				var ds = new nexacro.Dataset();
        				ds.loadXML(Variant);
        				this.recentVariant = ds;
        				this.setCode(ds.getColumn(0, "CONTRACT_NO"));
        				this.setData(ds.getColumn(0, "CONTRACT_NAME"));
        				this.onchanged();
        			break;

        			case "popupPurchaseSearch":			// 매입계약
        				var ds = new nexacro.Dataset();
        				ds.loadXML(Variant);
        				this.recentVariant = ds;
        				this.setCode(ds.getColumn(0, "CONTRACT_NO_PURCHASE"));
        				this.setData(ds.getColumn(0, "CONTRACT_PURCHASE_NAME"));
        				this.onchanged();
        			break;

        			case "popSiEmployee" :		// SI 투입인력
        				var ds = new nexacro.Dataset();
        				ds.loadXML(Variant);
        				this.recentVariant = ds;
        				this.setCode(ds.getColumn(0, "EMP_NO"));
        				this.setData(ds.getColumn(0, "EMP_NM"));
        				this.onchanged();
        			break;

        			case "popOrganization" :	// 직원
        				var ds = new nexacro.Dataset();
        				ds.loadXML(Variant);
        				this.recentVariant = ds;
        				this.setCode(ds.getColumn(0, "EMP_NO"));
        				this.setData(ds.getColumn(0, "EMP_NM"));
        				this.onchanged();
        			break;

        			case "popupProductSearch" : // 제품
        				var ds = new nexacro.Dataset();
        				ds.loadXML(Variant);
        				this.recentVariant = ds;
        				this.setCode(ds.getColumn(0, "PRODUCT_CODE"));
        				this.setData(ds.getColumn(0, "PRODUCT_NAME"));
        				this.onchanged();
        			break;

        			case "popDept" :	// 부서
        				var ds = new nexacro.Dataset();
        				ds.loadXML(Variant);
        				this.recentVariant = ds;
        				this.setCode(ds.getColumn(0, "DEPT_CD"));
        				this.setData(ds.getColumn(0, "DEPT_NM"));
        				this.onchanged();
        			break;

        			case "AssetComCdPopup" :  //자산관리 공통코드 선택
        				var ds = new nexacro.Dataset();
        				ds.loadXML(Variant);
        				this.recentVariant = ds;
        				this.setCode(ds.getColumn(0, "CD_CODE"));
        				this.setData(ds.getColumn(0, "CAPTION"));
        				this.onchanged();
        			break;
        		}
        	}
        }


        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        this.btn_Delete_onclick = function(obj,e)
        {
        	this.clearData();
        };

        this.btn_Popup_onclick = function(obj,e)
        {
        	var sArgument = {};

        	if (this.gfnIsEmpty(this.FV_VALUE)) {
        		sArgument.sSubject = this.edtName.value;
        	} else {
        		sArgument.sSubject = this.FV_VALUE;
        	}


        	// 자동 조회 처리 User Property
        	if(this.parent.hasOwnProperty("autoSearch")) {
        		if( this.gfnIsEmpty(this.parent.autoSearch) ) {
        			sArgument.autoSearch = "true";
        		} else  {
        			sArgument.autoSearch = this.parent.autoSearch;
        		}
        	}


        	// 회사 신규등록 버튼 활성화 User Property
        	if(this.parent.hasOwnProperty("compReg")) {
        		if( this.gfnIsEmpty(this.parent.compReg) ) {
        			sArgument.compReg = "false";
        		} else  {
        			sArgument.compReg = this.parent.compReg;
        		}
        	}



        	if(this.parent.hasOwnProperty("param"))
        	{
        		if(!this.gfnIsEmpty(this.parent.param))
        		{
        			var params = (this.parent.param).split(",");
        			var param;
        			if(params.length == 1 && params[0].split(":").length == 1)
        			{
        				sArgument.pvMode = this.parent.param;
        			}
        			else
        			{
        				for(var i = 0, iL = params.length; i < iL; i++)
        				{
        					param = params[i].split(":");
        					if(param[0] == "searchcode" && this.isBind())
        					{
        						var pDs = this.getBindDataset();
        						var pDsRow = pDs.rowposition;
        						sArgument[param[0]] = {name:param[1], value:pDs.getColumn(pDsRow, param[1])};
        					}else{
        						sArgument[param[0]] = param[1];
        					}

        				}
        			}
        		}
        	}

        	switch(this.FV_KIND){
        	case "CLIENT" :		//고객사
        		this.commUtil.popupCompanySearch(this, "popupClientSearch", "fnPopupCallBack", sArgument);
        		break;
        	case "COMPANY" :	//협력사
        		this.commUtil.popupCompanySearch(this, "popupCompanySearch", "fnPopupCallBack", sArgument);
        		break;
        	case "PROJECT" :	//프로젝트
        		if (!this.gfnIsEmpty(this.FV_SEARCHTYPE)) {
        			sArgument.searchtype = this.FV_SEARCHTYPE;
        		}
        		if (!this.gfnIsEmpty(this.FV_ALL_CO)) {
        			sArgument.allco = this.FV_ALL_CO;
        		}
        		if (!this.gfnIsEmpty(this.FV_ESTIMATE_FLAG)) {
        			sArgument.sEstimateFlag = this.FV_ESTIMATE_FLAG;
        			sArgument.sEstimateContractType = this.parent.estimateContractType;
        		}
        		this.commUtil.popupProjectSearch(this, "popupProjectSearch", "fnPopupCallBack", sArgument);
        		break;
        	case "CONTRACT" :	//매출계약
        		if (!this.gfnIsEmpty(this.FV_ALL_CO)) {
        			sArgument.allco = this.FV_ALL_CO;
        		}
        		if (!this.gfnIsEmpty(this.FV_ESTIMATE_FLAG)) {
        			sArgument.sEstimateFlag = this.FV_ESTIMATE_FLAG;
        			sArgument.sEstimateContractType = this.parent.estimateContractType;
        		}
        		this.commUtil.popupProjectSearch(this, "popupContractSearch", "fnPopupCallBack", sArgument);
        		break;
        	case "CONTRACT_PROJECT" :	//매출계약(프로젝트코드로 매출계약검색)
        		var pThis = this;
        		var pDs = pThis.getBindDataset();
        		var pDsRow = pDs.rowposition;
        		var sProjectCode = pDs.getColumn(pDsRow, pThis.parent.projectcodecolumn);

        		if(!this.gfnIsEmpty(sProjectCode) && this.gfnIsEmpty(sArgument.sSubject))
        		{
        			sArgument = {};
        			sArgument.searchcode = {name:"PROJECT_CODE", value:sProjectCode};
        			sArgument.searchtype = "P";
        		}
        		if (!this.gfnIsEmpty(this.FV_ALL_CO)) {
        			sArgument.allco = this.FV_ALL_CO;
        		}
        		this.commUtil.popupProjectSearch(this, "popupContractSearch", "fnPopupCallBack", sArgument);
        		break;
        	case "PURCHASE" :	//매입계약
        		this.commUtil.popupPurchaseSearch(this, "popupPurchaseSearch", "fnPopupCallBack", sArgument);
        		break;
        	case "SIEMPLOYEE" :	//SI 투입 인력
        		this.commUtil.popupFindSiEmp(this, "popSiEmployee", "fnPopupCallBack", sArgument);
        		break;
        	case "EMPLOYEE" :	//직원
        		this.commUtil.popupOrganization(this, "popOrganization", "fnPopupCallBack", "EMP", null, "1", sArgument);
        		break;
        	case "PRODUCT" :	//제품
        		if(this.parent.contracttype)
        		{
        			sArgument.sContractType = this.parent.contracttype;
        		}else{
        			sArgument.sContractType = "P";	//기본값 : 제품계약
        		}
        		if(this.parent.userelatedproduct)
        		{
        			sArgument.userelatedproduct = nexacro._toBoolean(this.parent.userelatedproduct);
        		}
        		if(this.parent.uselicenseinfo)
        		{
        			sArgument.uselicenseinfo = nexacro._toBoolean(this.parent.uselicenseinfo);
        		}
        		if(this.parent.useonlymainproduct)
        		{
        			sArgument.useonlymainproduct = nexacro._toBoolean(this.parent.useonlymainproduct);
        		}

        		this.commUtil.popupProductSearch(this, "popupProductSearch", "fnPopupCallBack", sArgument);
        		break;
        	case "DEPTS" :	//조직도 202106901 박종언 추가
        		this.commUtil.popupOrganization(this, "popOrganization", "fnPopupCallBack", "DEPTS", null, "1", sArgument);
        		break;
        	case "ASSET" :	//자산관리-공통코드팝업 20211206 박종언 추가
        		sArgument.CM_CODE = this.parent.CM_CODE;
        		sArgument.SCR_ID = this.parent.SCR_ID;
        		sArgument.SEARCH_TYPE = this.parent.SEARCH_TYPE;
        		sArgument.FORMAT = this.parent.FORMAT;
        		this.commUtil.popup(this, "AssetComCdPopup", "Asset::AS_AssetAddMM.xfdl", -1, -1, null, null, true, true, false, sArgument, "fnPopupCallBack");
        		break;
        	case "ASSET_EMPLOYEE" :	//직원(투비소프트, 투비씨엔에스) 20220114 박종언 추가
        		this.commUtil.popupOrganization(this, "popOrganization", "fnPopupCallBack", "ASSETEMP", null, "1", sArgument);
        		break;
        	default :
        		break;
        	}
        };


        this.COM_ProjectSearch_onkeydown = function(obj,e)
        {
        	var bkeydownevent = "true";
        	//화면에서 엔터키 눌렀을때 자동 팝업 안시킬 경우 (돋보기로만 팝업시킬경우)
        	//bkeydownevent = "false" 로 셋팅
        	if(this.parent.hasOwnProperty("enable_keydownevent"))
        		bkeydownevent = this.parent.enable_keydownevent;

        	if(e.keycode == 13 && bkeydownevent=="true")
        	{
        		this.btn_Popup_onclick();
        	}
        };

        this.onchanged = function()
        {
        	if(this.pEventComp.hasOwnProperty("user_onchanged"))
        	{
        		var event = this.pEventComp.user_onchanged;
        		if(!this.gfnIsEmpty(event))
        		{
        			var ep = {
        						 preCode:this.preCode
        						 ,preName:this.preName
        						 ,newCode:this.edtName._code
        						 ,newName:this.edtName.value
        						 ,columnId:this.parent.codecolumn
        					}

        			var f = this.pEventForm;
        			var fe;
        			/*상위로 올라가면서 event fn 찾기*/
        			for (f; (f != null); f = f.parent)
        			{
        				if (event in f)
        				{
        					/*event fn이 존재한다면 호출*/
        					f[event].call(f, this.pEventComp, ep);
        					break;
        				}
        			}
        		}
        	}
        }
        this.edtName_onchanged = function(obj,e)
        {
        	if(this.gfnIsNull(obj.value)) {
        		this.btn_Delete.set_visible(false);
        	} else {
        		this.btn_Delete.set_visible(true);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.COM_ProjectSearch_onload,this);
            this.addEventHandler("onkeydown",this.COM_ProjectSearch_onkeydown,this);
            this.edtName.addEventHandler("onchanged",this.edtName_onchanged,this);
            this.btn_Popup.addEventHandler("onclick",this.btn_Popup_onclick,this);
            this.btn_Delete.addEventHandler("onclick",this.btn_Delete_onclick,this);
            this.edtCode.addEventHandler("onkeyup",this.edtCode_onkeyup,this);
            this.edtCode.addEventHandler("onchanged",this.edtCode_onchanged,this);
        };
        this.loadIncludeScript("COM_Search.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
