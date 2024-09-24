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
                this._setFormPosition(1230,630);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_KORN_NM\" type=\"string\" size=\"32\"/><Column id=\"KORN_NM\" type=\"string\" size=\"32\"/><Column id=\"DEPT_LVL\" type=\"bigdecimal\" size=\"8\"/><Column id=\"DEPT_NEW_NAME\" type=\"string\" size=\"32\"/><Column id=\"USER_ID\" type=\"string\" size=\"32\"/><Column id=\"CELL_NUMB\" type=\"string\" size=\"32\"/><Column id=\"TITLE\" type=\"string\" size=\"32\"/><Column id=\"EMAIL\" type=\"string\" size=\"32\"/><Column id=\"DEPT_CD\" type=\"string\" size=\"32\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"GRPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsParam1", this);
            obj._setContents("<ColumnInfo><Column id=\"TYPE\" type=\"string\" size=\"256\"/><Column id=\"END_MONTH\" type=\"string\" size=\"256\"/><Column id=\"CONTRACT_TYPE\" type=\"string\" size=\"256\"/><Column id=\"FORMAT\" type=\"string\" size=\"256\"/><Column id=\"CONTRACT_NO\" type=\"string\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"CLIENT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTRACT_NO_0\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TYPE\">TAX</Col><Col id=\"CONTRACT_NO\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput", this);
            obj._setContents("<ColumnInfo><Column id=\"CONTRACT_TYPE\" type=\"string\" size=\"40\"/><Column id=\"CONTRACT_TYPE_NAME\" type=\"string\" size=\"100\"/><Column id=\"CLIENT_CODE\" type=\"string\" size=\"20\"/><Column id=\"COMPANY_NAME\" type=\"string\" size=\"100\"/><Column id=\"INDUSTRY\" type=\"string\" size=\"100\"/><Column id=\"PROJECT_CODE\" type=\"string\" size=\"15\"/><Column id=\"PROJECT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CONTRACT_NO\" type=\"string\" size=\"20\"/><Column id=\"CONTRACT_NAME\" type=\"string\" size=\"100\"/><Column id=\"DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"DEPT_NAME\" type=\"string\" size=\"100\"/><Column id=\"SALES_EMP_NO\" type=\"string\" size=\"120\"/><Column id=\"SALES_EMP_NAME\" type=\"string\" size=\"255\"/><Column id=\"CL_01\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_02\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_03\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_04\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_05\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_06\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_07\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_08\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_09\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_10\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_11\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_12\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_H01\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_H02\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_Y\" type=\"bigdecimal\" size=\"40\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGlobal", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"string\" size=\"60\"/><Column id=\"EMP_NM\" type=\"string\" size=\"100\"/><Column id=\"DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"DEPT_NM\" type=\"string\" size=\"100\"/><Column id=\"EMAIL\" type=\"string\" size=\"268\"/><Column id=\"MOBILE\" type=\"string\" size=\"44\"/><Column id=\"OFFICE\" type=\"string\" size=\"20\"/><Column id=\"GRADE_CD\" type=\"string\" size=\"30\"/><Column id=\"GRADE_NM\" type=\"string\" size=\"100\"/><Column id=\"DUTY_CD\" type=\"string\" size=\"30\"/><Column id=\"DUTY_NM\" type=\"string\" size=\"100\"/><Column id=\"EMP_KIND\" type=\"string\" size=\"255\"/><Column id=\"CO_CD\" type=\"string\" size=\"30\"/><Column id=\"CO_NM\" type=\"string\" size=\"100\"/><Column id=\"LOGIN_SYS\" type=\"string\" size=\"10\"/><Column id=\"LANGUAGE\" type=\"string\" size=\"10\"/><Column id=\"MODEL_ID\" type=\"string\" size=\"50\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","25.00","8",null,"43","25",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("월별 매출현황 상세");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","25","Static00:0",null,null,"25","55",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsOutput");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseexpandkey("true");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"200\"/><Column size=\"300\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"50\"/><Column size=\"150\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"고객사\" TL_SEQ=\"32\"/><Cell col=\"1\" text=\"프로젝트\" TL_SEQ=\"119\"/><Cell col=\"2\" text=\"계약명\" TL_SEQ=\"33\"/><Cell col=\"3\" text=\"영업대표\" TL_SEQ=\"55\"/><Cell col=\"4\" text=\"시작일\" TL_SEQ=\"38\"/><Cell col=\"5\" text=\"종료일\" TL_SEQ=\"39\"/><Cell col=\"6\" text=\"계약구분\" TL_SEQ=\"123\"/><Cell col=\"7\" text=\"월\" TL_SEQ=\"403\"/><Cell col=\"8\" text=\"월매출\" TL_SEQ=\"2294\"/></Band><Band id=\"body\"><Cell text=\"bind:CLIENT_NAME\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:PROJECT_NAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:CONTRACT_NAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:SALES_EMP_NAME\"/><Cell col=\"4\" displaytype=\"date\" text=\"bind:START_DATE\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"5\" displaytype=\"date\" text=\"bind:END_DATE\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"6\" text=\"bind:CONTRACT_TYPE_NAME\"/><Cell col=\"7\" text=\"bind:MM\"/><Cell col=\"8\" textAlign=\"right\" displaytype=\"mask\" text=\"bind:MM_PRICE\" maskeditformat=\"#,#0\"/></Band><Band id=\"summary\"><Cell colspan=\"8\" text=\"합계\" TL_SEQ=\"437\"/><Cell col=\"8\" displaytype=\"mask\" expr=\"dataset.getSum(&quot;MM_PRICE&quot;)\" textAlign=\"right\" maskeditformat=\"#,#0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"50","28","25","14",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1230,630,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("salesDetailPu.xfdl", function() {
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
        	this.gfnFormOnload(obj);

        	var format = this.getOwnerFrame().FORMAT;

        	this.dsParam1.setColumn(0, "END_MONTH", this.getOwnerFrame().END_MONTH);
        	this.dsParam1.setColumn(0, "CONTRACT_TYPE", this.getOwnerFrame().CONTRACT_TYPE);
        	this.dsParam1.setColumn(0, "FORMAT", format);

        	if(format=="EMP")
        		this.dsParam1.setColumn(0, "EMP_NO", this.getOwnerFrame().EMP_NO);
        	else if(format=="CLIENT")
        		this.dsParam1.setColumn(0, "CLIENT_CODE", this.getOwnerFrame().CLIENT_CODE);
        	else if(format=="PROJECT")
        		this.dsParam1.setColumn(0, "PROJECT_CODE", this.getOwnerFrame().PROJECT_CODE);
        	else if(format=="CONTRACT")
        		this.dsParam1.setColumn(0, "CONTRACT_NO", this.getOwnerFrame().CONTRACT_NO);

        	this.fnTranSearch(); //자동조회
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.fnTranSearch = function()
        {
        	this.gfnInitNextGlobalDataset(this.dsGlobal);

        	this.dsParam1.applyChange();

        	// POST https://nextcns.tobesoft.com/FrontControllerServlet.do?service=xupservice&domain=NEXTp&model=MI_SalesMonthly_S03&format=xml&version=xplatform&compress=false HTTP/1.1

        	var strSvcId 	= "monthDetail";
        	var strSvcUrl 	= "nextService.do";
        	var inData 		= "dsGlobal=dsGlobal:A dsParam=dsParam1:A";
        	var outData 	= "dsOutput=dsOutput";
        	var strArg 		= "trxUrl=" + nexacro.wrapQuote("FrontControllerServlet.do?service=xupservice&domain=NEXTp&model=MI_SalesMonthly_S03&format=xml&version=xplatform&compress=false");
        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, "fnCallback");

        };
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //transaction
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "monthDetail":
        			break;
        		default:break;
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnClose = function (nRow)
        {

        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/


        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grdList.addEventHandler("oncelldblclick",this.grdList_oncelldblclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
        };
        this.loadIncludeScript("salesDetailPu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
