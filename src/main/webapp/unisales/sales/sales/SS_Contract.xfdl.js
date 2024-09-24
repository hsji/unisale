(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SS_Contract");
            this.set_titletext("영업관리-계약탭");
            if (Form == this.constructor)
            {
                this._setFormPosition(1344,448);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CLIENT_CODE\" type=\"string\" size=\"20\"/><Column id=\"CLIENT_NAME\" type=\"string\" size=\"100\"/><Column id=\"PROJECT_CODE\" type=\"string\" size=\"15\"/><Column id=\"PROJECT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CONTRACT_NO\" type=\"string\" size=\"10\"/><Column id=\"CONTRACT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CONTRACT_MAIN_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"CONTRACT_DATE\" type=\"string\" size=\"8\"/><Column id=\"DELIVERY_DATE\" type=\"string\" size=\"8\"/><Column id=\"TAX_DATE\" type=\"string\" size=\"8\"/><Column id=\"BILL_DATE\" type=\"string\" size=\"8\"/><Column id=\"OPEN_DATE\" type=\"string\" size=\"8\"/><Column id=\"INCENTIVE_STAFF\" type=\"string\" size=\"255\"/><Column id=\"CONTRACT_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"PURCHASE_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"NET_SALES_AMT\" type=\"BIGDECIMAL\" size=\"22\"/><Column id=\"SALES_STATUS\" type=\"string\" size=\"20\"/><Column id=\"CONTRACT_STATUS_NAME\" type=\"string\" size=\"8\"/><Column id=\"CONTRACT_STATUS\" type=\"string\" size=\"20\"/><Column id=\"CONTRACT_TYPE\" type=\"string\" size=\"100\"/><Column id=\"COSTSHEEP_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_checkProduct", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCT_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_ContractList","0","4",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsList");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"130\" band=\"left\"/><Column size=\"170\" band=\"left\"/><Column size=\"60\" band=\"left\"/><Column size=\"200\" band=\"left\"/><Column size=\"130\" band=\"left\"/><Column size=\"100\"/><Column size=\"75\"/><Column size=\"70\"/><Column size=\"80\"/><Column size=\"90\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"고객사\" TL_SEQ=\"32\"/><Cell col=\"2\" text=\"프로젝트명\" TL_SEQ=\"114\"/><Cell col=\"3\" text=\"계약구분\" TL_SEQ=\"123\"/><Cell col=\"4\" text=\"계약명\" TL_SEQ=\"33\"/><Cell col=\"5\" text=\"계약처\" TL_SEQ=\"34\"/><Cell col=\"6\" text=\"계약일자\" TL_SEQ=\"156\"/><Cell col=\"7\" text=\"계약상태\" TL_SEQ=\"121\"/><Cell col=\"8\" text=\"사전원가표\" TL_SEQ=\"19\"/><Cell col=\"9\" text=\"담당영업\" TL_SEQ=\"37\"/><Cell col=\"10\" text=\"인센티브해당자\" TL_SEQ=\"272\"/><Cell col=\"11\" text=\"계산발행\" TL_SEQ=\"273\"/><Cell col=\"12\" text=\"수금일자\" TL_SEQ=\"274\"/><Cell col=\"13\" text=\"납품일자\" TL_SEQ=\"275\"/><Cell col=\"14\" text=\"오픈일자\" TL_SEQ=\"276\"/><Cell col=\"15\" text=\"매출총액\" TL_SEQ=\"277\"/><Cell col=\"16\" text=\"매입금액\" TL_SEQ=\"278\"/><Cell col=\"17\" text=\"순매출\" TL_SEQ=\"279\"/></Band><Band id=\"body\"><Cell displaytype=\"expr:CONTRACT_TYPE==&quot;유지보수&quot;?&quot;normal&quot;:CONTRACT_TYPE==&quot;가계약&quot;?&quot;normal&quot;:&quot;checkboxcontrol&quot;\" edittype=\"expr:CONTRACT_TYPE==&quot;유지보수&quot;?&quot;none&quot;:CONTRACT_TYPE==&quot;가계약&quot;?&quot;none&quot;:&quot;checkbox&quot;\" text=\"bind:CHECK_FLAG\"/><Cell col=\"1\" text=\"bind:CLIENT_NAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:PROJECT_NAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:CONTRACT_TYPE\"/><Cell col=\"4\" text=\"bind:CONTRACT_NAME\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:CONTRACT_MAIN_NAME\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:CONTRACT_DATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"7\" text=\"bind:CONTRACT_STATUS_NAME\"/><Cell col=\"8\" text=\"bind:COSTSHEEP_FLAG\"/><Cell col=\"9\" text=\"bind:SALSE_STAFF\"/><Cell col=\"10\" text=\"bind:INCENTIVE_STAFF\"/><Cell col=\"11\" text=\"bind:TAX_DATE\" displaytype=\"expr:TAX_DATE.length  == 0 ? &apos;none&apos; : &apos;date&apos;\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"12\" displaytype=\"expr:BILL_DATE.length  == 0 ? &apos;none&apos; : &apos;date&apos;\" text=\"bind:BILL_DATE\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"13\" displaytype=\"expr:DELIVERY_DATE.length  == 0 ? &apos;none&apos; : &apos;date&apos;\" text=\"bind:DELIVERY_DATE\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"14\" text=\"bind:OPEN_DATE\" displaytype=\"expr:OPEN_DATE.length  == 0 ? &apos;none&apos; : &apos;date&apos;\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"15\" text=\"bind:CONTRACT_AMT\" textAlign=\"right\" displaytype=\"expr:comp.parent.gfn_getPriceDisplayType(&apos;normal&apos;)\" maskeditformat=\"expr:comp.parent.gfn_getPriceMaskformat(CONTRACT_AMT)\" maskedittype=\"expr:comp.parent.gfn_getPriceMaskEdtType()\"/><Cell col=\"16\" text=\"bind:PURCHASE_AMT\" textAlign=\"right\" maskedittype=\"expr:comp.parent.gfn_getPriceMaskEdtType()\" maskeditformat=\"expr:comp.parent.gfn_getPriceMaskformat(PURCHASE_AMT)\" displaytype=\"expr:comp.parent.gfn_getPriceDisplayType(&apos;normal&apos;)\"/><Cell col=\"17\" text=\"bind:NET_SALES_AMT\" textAlign=\"right\" displaytype=\"expr:comp.parent.gfn_getPriceDisplayType(&apos;normal&apos;)\" maskeditformat=\"expr:comp.parent.gfn_getPriceMaskformat(NET_SALES_AMT)\" maskedittype=\"expr:comp.parent.gfn_getPriceMaskEdtType()\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1344,448,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SS_Contract.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("SS_Contract.xfdl","Script::CommGrid.xjs");
        this.addIncludeScript("SS_Contract.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("SS_Contract.xfdl","Script::CommSystem.xjs");
        this.registerScript("SS_Contract.xfdl", function() {
        /************************************************************************************************
         * 01. 업무구분 : 영업관리 - 영업관리
         * 02. 화면명   : 계약 Tabpage(SS_Presales)
         * 03. 화면설명 : 영업관리 계약 Tabpage
         * 04. 작성일   : 2018.08.19
         * 05. 작성자   : 채종한
         * 06. 수정이력 :
         ***********************************************************************************************
         *     수정일          이  름    사유
         ***********************************************************************************************
         *
         *
         *
         ***********************************************************************************************/


        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
         ************************************************************************************************/
        this.executeIncludeScript("Script::CommUtil.xjs"); /*include "Script::CommUtil.xjs"*/
        this.executeIncludeScript("Script::CommGrid.xjs"); /*include "Script::CommGrid.xjs"*/
        this.executeIncludeScript("Script::CommTrans.xjs"); /*include "Script::CommTrans.xjs"*/
        this.executeIncludeScript("Script::CommSystem.xjs"); /*include "Script::CommSystem.xjs"*/


        /************************************************************************************************
        * 전역 변수 영역
        ************************************************************************************************/
         this.FV_PARENT_FORM = this.parent.parent.parent;
         this.FV_AUTH_PRICE_MASK = false;
         this.FV_CO_CD = nexacro.getApplication().gdsUserInfo.getColumn(0, "CO_CD");	//로그인 회사코드
         /************************************************************************************************
         * FORM 영역
         ************************************************************************************************/
         this.SS_Contract_onload = function(obj,e)
        {
        	this.gfnCompInit(obj);  	// Grid 공통함수 호출
        	this.fnAuthConfig();
        	this.fnQueryData();
        };

        // 권한 처리
        this.fnAuthConfig = function()
        {
        	if (this.commUtil.getFormAuthority(235,11))	this.FV_AUTH_PRICE_MASK = true;	// 계약금액 마스킹 처리 권한
        }

         /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
         ************************************************************************************************/

         // 계약조회
         this.fnQueryData = function()
         {
        	this.dsList.clearData();
        	// 조건값(Rarameter) 셋팅
        	this.gfnAddSendParameter("PROJECT_NAME",		this.FV_PARENT_FORM.div_search.form.div_ProjectName.getData());
        	this.gfnAddSendParameter("CLIENT_NAME",			this.FV_PARENT_FORM.div_search.form.div_ClientName.form.getData());
        	this.gfnAddSendParameter("NONE_DATE",			this.FV_PARENT_FORM.div_search.form.chk_NoneDate.value);
        	this.gfnAddSendParameter("FROM_CONTRACT_DT",	this.FV_PARENT_FORM.div_search.form.div_Search_yyyyMM_FromTo.getFromYYYYMM());
        	this.gfnAddSendParameter("TO_CONTRACT_DT",		this.FV_PARENT_FORM.div_search.form.div_Search_yyyyMM_FromTo.getToYYYYMM());
        	if(this.FV_PARENT_FORM.div_search.form.rd_EmpKind.value=="E")
        		this.gfnAddSendParameter("SALES_EMP_NO",		this.FV_PARENT_FORM.div_search.form.cmb_SalesRepresent.value);
        	else if(this.FV_PARENT_FORM.div_search.form.rd_EmpKind.value=="D")
        	{
        		var nFindRow = this.FV_PARENT_FORM.ds_cond_sales_emp.findRow("EMP_NO", this.FV_PARENT_FORM.div_search.form.cmb_SalesRepresent.value);
        		var srtDeptCD = this.FV_PARENT_FORM.ds_cond_sales_emp.getColumn(nFindRow,"DEPT_CD");
        		this.gfnAddSendParameter("SALES_DEPT_CD",		srtDeptCD);
        	}
        	this.gfnAddSendParameter("CONTRACT_STATUS",		this.FV_PARENT_FORM.div_search.form.cmb_ContractStatus.value);
        	this.gfnAddSendParameter("CONTRACT_TYPE",		this.FV_PARENT_FORM.div_search.form.cmb_ContractType.value);
        	this.gfnAddSendParameter("SALES_STATUS",		this.FV_PARENT_FORM.div_search.form.cmb_SalesStatus.value);

        	// 조회용 Output dataset 세팅
        	this.gfnAddOutputDataset("dsList", "ds_output");
        	this.gfnCommonTransaction("SS_Contract_S01", "SS_Contract_S01");
         };

         // 계약확정취소 저장
         this.fn_SaveData = function ()
         {
        	if (!this.gfnIsUpdateDs(this.dsList))
        	{
        		return;
        	}

        	// 입력용 Input Dataset 세팅
        	this.gfnAddInputDataset ("dsList", "dsInput");
        	this.gfnCommonTransaction("SS_Contract_R01", "SS_Contract_R01");
         }


         // 화면 콜백
        this.fnCallBack = function (strSvcID, nErrorCode, strErrorMag)
        {
        	switch (strSvcID)
        	{
        		case "SS_Contract_R01":
        			this.fnQueryData();
        			break;
        		case "SS_Contract_S01":
        			// trace(this.dsList.saveXML());
        			break;
        	}
         }

         /************************************************************************************************
         * FORM 공통 FUNCTION 영역
         ************************************************************************************************/
        this.fnPopupContractReport= function()
        {
        	var arrList = new Array();
        	for (var i=0; i<this.dsList.rowcount; i++)
        	{
        		if(this.dsList.getColumn(i, "CHECK_FLAG")=="1")
        		{
        			arrList.push(this.dsList.getColumn(i, "CONTRACT_NO"));
        		}
        	}
        	var sArgument = {pvContractList : arrList
        					,pvEmpKind : this.FV_PARENT_FORM.div_search.form.rd_EmpKind.value}
        	this.commUtil.popup(this, "popContractReport", "Sales::SS_ContractReport.xfdl", -1, -1, 1150, 650, true, true, false, sArgument, "fn_popCallBack");
        };


        //계약확정 취소처리
        this.fnContractCancel = function()
        {
        	if( this.dsList.getColumn(this.dsList.rowposition, "CONTRACT_STATUS") == "3" )
        	{
        		alert(this.gfnGetTransTxt (1242,"완료건은 계약확정 취소 할 수 없습니다."));
        		return;
        	}

        	if(confirm(this.gfnGetTransTxt (1669,"계약확정 취소 처리를 하시겠습니까?")))
        	{
        		if(this.FV_CO_CD == "J02") {
        			this.gfnAddSendParameter("PROJECT_CODE",  this.dsList.getColumn(this.dsList.rowposition, "PROJECT_CODE"));
        			this.gfnAddSendParameter("CONTRACT_STATUS",  "2");
        			this.gfnAddSendParameter("TARGET_CONTRACT_STATUS",  "0");
        			this.gfnAddOutputDataset("ds_checkProduct",	"ds_output");
        			this.gfnCommonTransaction("SS_Contract_S02", "SS_Contract_S02", null, false);

        			if(this.ds_checkProduct.rowcount > 0) {
        				if(this.confirm(this.gfnGetTransTxt (32856,"영업관리에 해당 프로젝트 가계약에 동일한 제품 또는 상품이 있습니다. 그래도 계약확정 취소 처리를 하시겠습니까?"))) {
        					this.dsList.setColumn(this.dsList.rowposition, "CONTRACT_STATUS", "0");
        					this.fn_SaveData();
        				}
        			} else {
        				this.dsList.setColumn(this.dsList.rowposition, "CONTRACT_STATUS", "0");
        				this.fn_SaveData();
        			}
        		} else {
        			this.dsList.setColumn(this.dsList.rowposition, "CONTRACT_STATUS", "0");
        			this.fn_SaveData();
        		}
        	}
        }

        // 팝업 콜백
        this.fn_popCallBack = function(sPopupId, Variant)
        {
        	Variant = this.commUtil.popupReturn();
        	if(this.gfnIsEmpty(Variant)) {
        		//
        	}
        	else {
        		if (sPopupId == "popContractDet")	{
        			//
        		}
        		else if (sPopupId == "popProjectMM") {
        			//
        		}
        	}
        }

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        // 프로젝트관리 popup 처리
        this.grd_ContractList_oncelldblclick = function(obj,e)
        {
        	var sContractSt =	this.dsList.getColumn(e.row, "CONTRACT_STATUS");
        	var sProjectCd =	this.dsList.getColumn(e.row, "PROJECT_CODE");
        	var sProjectNm =	this.dsList.getColumn(e.row, "PROJECT_NAME");
        	var sContractNo =	this.dsList.getColumn(e.row, "CONTRACT_NO");

        	//trace("sContractSt:["+sContractSt+"]  sProjectCd:["+sProjectCd+"]  sContractNo:["+sContractNo+"]");

        	if (sContractSt == "3") {
        		this.commUtil.popupProjectMM (this, "popProjectMM", "fn_popCallBack", sProjectCd, sProjectNm, "R");
        	} else {
        		var sArgument = {pvProjectCd : sProjectCd, pvContractNo : sContractNo}
        		this.commUtil.popup(this, "popContractDet", "Sales::SS_ContractDetail.xfdl", -1, -1, 700, 696, true, true, false, sArgument, "fn_popCallBack");
        	}
        };

        this.dsList_onrowposchanged = function(obj,e)
        {
        	var bEnable = false;
        	if( this.dsList.getColumn(e.newrow, "CONTRACT_STATUS") == "2")
        		bEnable = true;

        	this.FV_PARENT_FORM.btn_Order_Confirm.set_enable(bEnable);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SS_Contract_onload,this);
            this.grd_ContractList.addEventHandler("oncelldblclick",this.grd_ContractList_oncelldblclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
        };
        this.loadIncludeScript("SS_Contract.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
