(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AE_Expend");
            this.set_titletext("영업지출현황관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1290,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMain", this);
            obj._setContents("<ColumnInfo><Column id=\"CONTRACT_TYPE\" type=\"string\" size=\"20\"/><Column id=\"CONTRACT_TYPE_NAME\" type=\"string\" size=\"100\"/><Column id=\"EXPORT_FLAG\" type=\"string\" size=\"1\"/><Column id=\"EXPORT_NAME\" type=\"string\" size=\"4\"/><Column id=\"PRODUCT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CLIENT_NAME\" type=\"string\" size=\"100\"/><Column id=\"PROJECT_CODE\" type=\"string\" size=\"15\"/><Column id=\"PROJECT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CONTRACT_NO\" type=\"string\" size=\"10\"/><Column id=\"CONTRACT_NAME\" type=\"string\" size=\"100\"/><Column id=\"SALES_EMP_NO\" type=\"string\" size=\"60\"/><Column id=\"SALES_EMP_NAME\" type=\"string\" size=\"255\"/><Column id=\"CONTRACT_MAIN\" type=\"string\" size=\"100\"/><Column id=\"CONTRACT_MAIN_NAME\" type=\"string\" size=\"100\"/><Column id=\"CONTRACT_DATE\" type=\"datetime\" size=\"23\"/><Column id=\"START_DATE\" type=\"datetime\" size=\"23\"/><Column id=\"END_DATE\" type=\"datetime\" size=\"23\"/><Column id=\"CON_MEN_MONTH\" type=\"bigdecimal\" size=\"8\"/><Column id=\"CONTRACT_NO_PURCHASE\" type=\"string\" size=\"10\"/><Column id=\"CONTRACT_MAIN_PURCHASE\" type=\"string\" size=\"100\"/><Column id=\"CONTRACT_MAIN_NAME_PURCHASE\" type=\"string\" size=\"100\"/><Column id=\"CONTRACT_DATE_PURCHASE\" type=\"datetime\" size=\"23\"/><Column id=\"CONTRACT_PRICE_PURCHASE\" type=\"bigdecimal\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRUD", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_Search","8","8",null,"40","8",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_WF_SchList");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Year","18","8","58","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("0");
            obj.set_text("조회년월");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.div_Search.addChild(obj.name, obj);

            obj = new Div("div_Search_yyyyMM","87","8","145","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("1");
            obj.set_url("Common::COM_yyyyMM.xfdl");
            obj.getSetter("user_onchanged").set("search_fromto_onchanged");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_Search",null,"8","60","22","8",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_SchText");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_Save",null,"8","60","22","btn_Search:4",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_tran");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_ExcelExport",null,"8","66","22","btn_Save:4",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("3");
            obj.set_text("Excel");
            obj.set_cssclass("btn_WF_Excel");
            this.div_Search.addChild(obj.name, obj);

            obj = new Grid("grd_Main","8","div_Search:4",null,null,"8","8",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsMain");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj.set_formatid("default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"부서\"/><Cell col=\"1\" text=\"직원\"/><Cell col=\"2\" text=\"사용일\"/><Cell col=\"3\" text=\"전자결재 제목\"/><Cell col=\"4\" text=\"적요\"/><Cell col=\"5\" text=\"내용\"/><Cell col=\"6\" text=\"사용처\"/><Cell col=\"7\" text=\"금액\"/><Cell col=\"8\" text=\"부가세\"/><Cell col=\"9\" text=\"합계\"/><Cell col=\"10\" text=\"고객사\"/><Cell col=\"11\" text=\"프로젝트\"/><Cell col=\"12\" text=\"계약\"/><Cell col=\"13\" text=\"담당영업\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_NAME\" textAlign=\"left\" tooltiptext=\"bind:DEPT_NAME\"/><Cell col=\"1\" text=\"bind:EMP_NAME\"/><Cell col=\"2\" text=\"bind:AUTH_DT\" displaytype=\"mask\" maskeditformat=\"####-##-##\" maskedittype=\"string\"/><Cell col=\"3\" text=\"bind:DOC_TITLE\" textAlign=\"left\" tooltiptext=\"bind:DOC_TITLE\"/><Cell col=\"4\" text=\"bind:SUMMARY_NM\" textAlign=\"left\" tooltiptext=\"bind:SUMMARY_NM\"/><Cell col=\"5\" text=\"bind:LINE_DESC\" textAlign=\"left\" tooltiptext=\"bind:LINE_DESC\"/><Cell col=\"6\" text=\"bind:CUST_NM\" textAlign=\"left\" tooltiptext=\"bind:CUST_NM\"/><Cell col=\"7\" text=\"bind:COST\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"8\" text=\"bind:VAT\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:AMT\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"10\" text=\"bind:CLIENT_NAME\" textAlign=\"left\" tooltiptext=\"bind:CLIENT_NAME\"/><Cell col=\"11\" text=\"bind:PROJECT_NAME\" textAlign=\"left\" tooltiptext=\"bind:PROJECT_NAME\"/><Cell col=\"12\" text=\"bind:CONTRACT_NAME\" textAlign=\"left\" tooltiptext=\"bind:CONTRACT_NAME\" expandimage=\"expr:comp.parent.gfnIsEmpty(CONTRACT_NO)?&quot;theme://images/btn_WF_Sch.png&quot;:&quot;theme://images/btn_WF_Minus.png&quot;\" expandshow=\"show\" expandsize=\"22\"/><Cell col=\"13\" text=\"bind:SALES_EMP_NAME\" textAlign=\"left\"/></Band><Band id=\"summary\"><Cell text=\"합계\"/><Cell col=\"1\" colspan=\"5\" text=\"합계\"/><Cell col=\"6\"/><Cell col=\"7\" text=\"expr:dataset.getSum(&quot;COST&quot;)\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"8\" text=\"expr:dataset.getSum(&quot;VAT&quot;)\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"9\" text=\"expr:dataset.getSum(&quot;AMT&quot;)\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"10\"/><Cell col=\"11\"/><Cell col=\"12\"/><Cell col=\"13\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_Search.form.div_Search_yyyyMM
            obj = new Layout("default","",0,0,this.div_Search.form.div_Search_yyyyMM.form,function(p){});
            this.div_Search.form.div_Search_yyyyMM.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_Search.form
            obj = new Layout("default","",0,0,this.div_Search.form,function(p){});
            this.div_Search.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1290,570,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Common::COM_yyyyMM.xfdl");
        };
        
        // User Script
        this.addIncludeScript("AE_Expend.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("AE_Expend.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("AE_Expend.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("AE_Expend.xfdl","Script::CommGrid.xjs");
        this.registerScript("AE_Expend.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 : 공통 - 공통
        * 02. 화면명   : 영업지출현황관리
        * 03. 화면설명 :
        * 04. 작성일   :
        * 05. 작성자   :
        * 06. 수정이력 :
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

        /************************************************************************************************
        * 전역 변수 영역
        ************************************************************************************************/

        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/
        this.AE_Expend_onload = function(obj,e)
        {
        	this.gfnCompInit(obj); //Grid 공통함수 호출
        	this.fnFormInit();
        };

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.fnFormInit = function()
        {
        	//this.fnSearch();

        	var date = new Date();
        	date.addMonth(-1);
        	var preMonth = this.gfnGetDateMaskFormatString(date, "yyyyMM");
        	this.div_Search.form.div_Search_yyyyMM.setYYYYMM(preMonth);
        };

        // Popup 콜백
        this.fnPopupCallBack = function(sPopupId, Variant)
        {
        	Variant = this.commUtil.popupReturn();
        	if(this.gfnIsEmpty(Variant))
        	{
        		return;
        	}
        	else
        	{
        		switch(sPopupId)
        		{
        			case "popupContractSearch" :  //매출계약
        				var ds = new nexacro.Dataset();
        				ds.loadXML(Variant);
        				this.dsMain.setColumn(this.dsMain.rowposition, "CLIENT_NAME",  ds.getColumn(0, "CLIENT_NAME"));
        				this.dsMain.setColumn(this.dsMain.rowposition, "PROJECT_CODE",  ds.getColumn(0, "PROJECT_CODE"));
        				this.dsMain.setColumn(this.dsMain.rowposition, "PROJECT_NAME",  ds.getColumn(0, "PROJECT_NAME"));
        				this.dsMain.setColumn(this.dsMain.rowposition, "CONTRACT_NO",  ds.getColumn(0, "CONTRACT_NO"));
        				this.dsMain.setColumn(this.dsMain.rowposition, "CONTRACT_NAME",  ds.getColumn(0, "CONTRACT_NAME"));
        				this.dsMain.setColumn(this.dsMain.rowposition, "CONTRACT_TYPE",  ds.getColumn(0, "CONTRACT_TYPE"));
        				this.dsMain.setColumn(this.dsMain.rowposition, "CONTRACT_TYPE_NAME",  ds.getColumn(0, "CONTRACT_TYPE_NAME"));
        				this.dsMain.setColumn(this.dsMain.rowposition, "SALES_EMP_NO",  ds.getColumn(0, "BIZ_STAFF"));
        				this.dsMain.setColumn(this.dsMain.rowposition, "SALES_EMP_NAME",  ds.getColumn(0, "BIZ_STAFF_NAME"));

        				var nFindRow = this.dsRUD.findRowExpr("EXPEND_NO=="+this.dsMain.getColumn(this.dsMain.rowposition,"EXPEND_NO") +" && LINE_NO=="+this.dsMain.getColumn(this.dsMain.rowposition,"LINE_NO"));

        				if(nFindRow>0)
        				{
        					if(this.gfnIsEmpty(ds.getColumn(0, "CONTRACT_NO")))	//선택된 계약이 없으면 지출결의 연결 삭제
        						this.dsRUD.deleteRow(nFindRow);
        					else
        					{
        						this.dsRUD.setColumn(nFindRow, "CONTRACT_NO",  ds.getColumn(0, "CONTRACT_NO"));
        						this.dsRUD.setColumn(nFindRow, "ORG_CONTRACT_NO",  this.dsRUD.getOrgColumn(nFindRow, "CONTRACT_NO"));
        					}
        				}
        				else
        				{
        					var nRow = this.dsRUD.insertRow();
        					this.dsRUD.setColumn(nRow, "EXPEND_NO",  this.dsMain.getColumn(this.dsMain.rowposition,"EXPEND_NO"));
        					this.dsRUD.setColumn(nRow, "LINE_NO",  this.dsMain.getColumn(this.dsMain.rowposition,"LINE_NO"));
        					this.dsRUD.setColumn(nRow, "CONTRACT_NO",  ds.getColumn(0, "CONTRACT_NO"));
        				}

        			break;
        		}
        	}
        }
        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fnSearch = function()
        {

        	if(!this.commUtil.getAuthority(166))	/*영업지원은 전체 조회, 그외에는 본인것만*/
        		this.gfnAddSendParameter("EMP_NO",	nexacro.getApplication().gdsUserInfo.getColumn(0, "EMP_NO"));
        	this.gfnAddSendParameter("YYYYMM",	this.div_Search.form.div_Search_yyyyMM.getYYYYMM());
        	this.gfnAddOutputDataset("dsMain",	"dsOutput1");
        	this.gfnAddOutputDataset("dsRUD",	"dsOutput2");
        	this.gfnCommonTransaction("Select",	"AE_Expend_S01", this.grd_Main);
        };

        this.fnSave = function()
        {
        	this.gfnAddInputDataset("dsRUD",	"dsInput", "U");
        	this.gfnCommonTransaction("Save",	"AE_Expend_R01");
        };

        this.fnCallBack = function (strSvcId, nErrorCode, strErrorMsg)
        {
        	// 에러 예외처리
        	if(nErrorCode != 0)
        	{
        		alert("strSvcID : " + strSvcId + "\n" + "nErrorCode : " + nErrorCode + "\n" + "strErrorMag : " + strErrorMsg);
        		return;
        	}
        	else if(strSvcId == "Select")
        	{

        	}
        };

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.comm_Click = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_ExcelExport" :
        			this.gfn_excelExport(this, this.grd_Main);
        			break;
        		case "btn_Search" :
        			this.fnSearch();
        			break;
        		case "btn_Save" :
        			this.fnSave();
        			break;
        	}
        };

        this.search_fromto_onchanged = function(obj,e)
        {

        }

        this.grd_Main_onexpanddown = function(obj,e)
        {
        	if(this.gfnIsEmpty(this.dsMain.getColumn(e.row, "CONTRACT_NO")))
        	{
        		this.commUtil.popupProjectSearch(this, "popupContractSearch", "fnPopupCallBack", {searchtype:"N"});
        	}
        	else
        	{
        		var nFindRow = this.dsRUD.findRowExpr("EXPEND_NO=="+this.dsMain.getColumn(e.row,"EXPEND_NO") +" && LINE_NO=="+this.dsMain.getColumn(e.row,"LINE_NO"));
        		this.dsRUD.deleteRow(nFindRow);

        		this.dsMain.setColumn(e.row, "CLIENT_NAME",  "");
        		this.dsMain.setColumn(e.row, "PROJECT_CODE",  "");
        		this.dsMain.setColumn(e.row, "PROJECT_NAME",  "");
        		this.dsMain.setColumn(e.row, "CONTRACT_NO",  "");
        		this.dsMain.setColumn(e.row, "CONTRACT_NAME",  "");
        		this.dsMain.setColumn(e.row, "CONTRACT_TYPE",  "");
        		this.dsMain.setColumn(e.row, "CONTRACT_TYPE_NAME",  "");
        		this.dsMain.setColumn(e.row, "SALES_EMP_NO",  "");
        		this.dsMain.setColumn(e.row, "SALES_EMP_NAME",  "");
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.AE_Expend_onload,this);
            this.div_Search.form.btn_Search.addEventHandler("onclick",this.comm_Click,this);
            this.div_Search.form.btn_Save.addEventHandler("onclick",this.comm_Click,this);
            this.div_Search.form.btn_ExcelExport.addEventHandler("onclick",this.comm_Click,this);
            this.grd_Main.addEventHandler("onexpanddown",this.grd_Main_onexpanddown,this);
        };
        this.loadIncludeScript("AE_Expend.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
