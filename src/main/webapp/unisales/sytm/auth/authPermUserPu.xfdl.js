(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("authPermUserPu");
            this.set_titletext("권한별 사용자 관리 (사용자 목록 팝업)");
            if (Form == this.constructor)
            {
                this._setFormPosition(721,610);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PERM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SYTM_FLAG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","25","20",null,"50","25",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","12","86","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("사용자ID");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10","48","28","25",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtUserId","staTitle00:0","12","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle02","edtUserId:0","12","98","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("사용자명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","staTitle02:0","12","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00","25","70",null,"43","25",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("사용자");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","25","113",null,null,"25","68",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"104\"/><Column size=\"80\"/><Column size=\"209\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" text=\"0\" edittype=\"checkbox\"/><Cell col=\"1\" textAlign=\"center\" text=\"사용자ID\"/><Cell col=\"2\" text=\"사번\"/><Cell col=\"3\" textAlign=\"center\" text=\"사용자명\"/><Cell col=\"4\" textAlign=\"center\" text=\"부서코드\"/><Cell col=\"5\" textAlign=\"center\" text=\"부서명\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:CHK\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"1\" text=\"bind:USER_ID\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:EMP_NO\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:KORN_NM\" textAlign=\"left\" tooltiptext=\"bind:KORN_NM\"/><Cell col=\"4\" text=\"bind:DEPT_CD\" tooltiptext=\"bind:DEPT_CD\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:DEPT_NM\" textAlign=\"left\" tooltiptext=\"bind:DEPT_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"50","28","25","20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("취소");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk",null,null,"50","28","btnClose:3","20",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("확인");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",721,610,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtUserId","value","dsCond","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtUserNm","value","dsCond","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("authPermUserPu.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	authPermUserPu.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/04/08
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/04/08			TOBESOFT					최초생성
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

        	var oFrame = this.getOwnerFrame();
        	this.dsCond.clearData();
        	var nRow =this.dsCond.addRow();
        	this.dsCond.setColumn(nRow, "COMPANY_CD", oFrame.pvCompanyCd);
        	this.dsCond.setColumn(nRow, "PERM_ID", oFrame.pvPermId);
        	this.dsCond.setColumn(nRow, "SYTM_FLAG_CD", oFrame.pvSysFlagCd);

        	this.fnTranSearch(); //자동조회
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //조회
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
        	var strSvcId    = "searchPermAllUser";
        	var strSvcUrl   = "searchPermAllUser.do";
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

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.cfnSearch();
        };

        this.dsList_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "CHK"){
        		obj.set_enableevent(false);
        		var nFilterCnt = obj.getCaseCount("CHK=='1'");
        		var nTotalCnt = obj.getRowCount();
        		if( nFilterCnt == nTotalCnt){
        			this.grdList.setCellProperty("head", 0, "text", "1");
        		}else{
        			this.grdList.setCellProperty("head", 0, "text", "0");
        		}
        		obj.set_enableevent(true);
        	}
        };

        this.btnClose_onclick = function(obj,e)
        {
        	this.close("");
        };

        this.btnOk_onclick = function(obj,e)
        {
        	var nFilterCnt = this.dsList.getCaseCount("CHK=='1'");
        	if( nFilterCnt > 0 ){
        		var oParent = this.opener;
        		this.dsList.set_enableevent(false);
        		this.grdList.set_enableevent(false);
        		this.grdList.set_enableredraw(false);

        		this.dsList.filter("CHK=='1'");
        		var nIdx = this.dsList.getRowCount();
        		var oTargetDs = oParent.objects["dsPremTarget"];
        		for( var i=0;i<nIdx;i++){
        			var nRow = oTargetDs.addRow();
        			oTargetDs.copyRow(nRow, this.dsList, i);
        			oTargetDs.setColumn(nRow, "COMPANY_CD", this.dsCond.getColumn(0,"COMPANY_CD"));
        			oTargetDs.setColumn(nRow, "SYTM_FLAG_CD", this.dsCond.getColumn(0,"SYTM_FLAG_CD"));
        			oTargetDs.setColumn(nRow, "PERM_ID", this.dsCond.getColumn(0,"PERM_ID"));
        		}
        		this.dsList.filter("");
        		this.dsList.set_enableevent(true);
        		this.grdList.set_enableevent(true);
        		this.grdList.set_enableredraw(true);

        		this.close("SELECT");
        	}
        	else{
        		this.close("");
        	}

        };

        this.grdList_oncelldblclick = function(obj,e)
        {
        	var oParent = this.opener;
        	var oTargetDs = oParent.objects["dsPremTarget"];

        	var nRow = oTargetDs.addRow();
        	oTargetDs.copyRow(nRow, this.dsList, this.dsList.rowposition);
        	oTargetDs.setColumn(nRow, "COMPANY_CD", this.dsCond.getColumn(0,"COMPANY_CD"));
        	oTargetDs.setColumn(nRow, "SYTM_FLAG_CD", this.dsCond.getColumn(0,"SYTM_FLAG_CD"));
        	oTargetDs.setColumn(nRow, "PERM_ID", this.dsCond.getColumn(0,"PERM_ID"));

        	this.close("SELECT");
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
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
        };
        this.loadIncludeScript("authPermUserPu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
