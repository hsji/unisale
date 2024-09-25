(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("customerMgFm");
            this.set_titletext("공통코드관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(460,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj.getSetter("firefirstcount").set("0");
            obj._setContents("<ColumnInfo><Column id=\"CLIENT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CLIENT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.getSetter("firefirstcount").set("0");
            obj._setContents("<ColumnInfo><Column id=\"ADDR_DTL\" type=\"string\" size=\"32\"/><Column id=\"TELP_NUMB\" type=\"string\" size=\"32\"/><Column id=\"SEQ_NO\" type=\"int\" size=\"4\"/><Column id=\"CLIENT_CODE\" type=\"string\" size=\"32\"/><Column id=\"CLIENT_PIC\" type=\"string\" size=\"32\"/><Column id=\"CLIENT_NAME\" type=\"string\" size=\"32\"/><Column id=\"ZIP_NUMB\" type=\"string\" size=\"32\"/><Column id=\"ADDR_BASIC\" type=\"string\" size=\"32\"/><Column id=\"HOME_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","20","20",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Static("staCdNm","0","12","110","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("고객명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCdNm","staCdNm:0","12","160","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10","48","28","25",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdMaster","20","divSearch:10",null,null,"20","48",null,null,"250",null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.getSetter("uFunction").set("filter,sort,!colfix,!initial,find");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"104\"/><Column size=\"308\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"고객코드\"/><Cell col=\"1\" text=\"고객명\"/></Band><Band id=\"body\"><Cell text=\"bind:CLIENT_CODE\"/><Cell col=\"1\" text=\"bind:CLIENT_NAME\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"50","28","20","10",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("취소");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk",null,null,"50","28","btnClose:5","10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",460,500,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item8","divSearch.form.edtCd","value","dsCond","CLIENT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.edtCdNm","value","dsCond","CLIENT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("customerMgPu.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	customerMgFm.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/06/08
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/06/08			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvRowPositionMain = -1;
        this.fvRowPositionSub  = -1;
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	var sCustomerCd  = this.getOwnerFrame().pvCustomerCd;
        	this.pTargetComp  = this.getOwnerFrame().pvComp;
        	this.divSearch.form.edtCdNm.set_value(sCustomerCd);
        	this.fnTranSearch();
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //master 조회
        this.fnTranSearch = function ()
        {
        	// 조회-대분류
        	this.dsList.clearData();

        	var strSvcId    = "searchCustomerList";
        	var strSvcUrl   = "searchCustomerList.do";
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
        		case "searchCustomerList":
        			break;
        		default: break;
        	}
        };

        //popup
        this.fnPopupCallback = function (sPopupId, sRtn)
        {

        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/


        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        //조회
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.fnTranSearch(); //조회
        };

        this.grdMaster_oncelldblclick = function(obj,e)
        {
        	this.fnClose();
        };

        this.fnClose = function() {
        	if(this.dsList.rowposition >= 0) {
        		if(this.opener["fnCallBackCustomer"]) {
        			var custCode = this.dsList.getColumn(this.dsList.rowposition, "CLIENT_CODE");
        			var custName = this.dsList.getColumn(this.dsList.rowposition, "CLIENT_NAME");
        			this.opener["fnCallBackCustomer"](custCode, custName);
        		}
        	}
        	this.close();
        };

        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        this.btnOk_onclick = function(obj,e)
        {
        	this.fnClose();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.grdMaster.addEventHandler("oncelldblclick",this.grdMaster_oncelldblclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
        };
        this.loadIncludeScript("customerMgPu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
