(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("authPermGrpMenuAddBtnPu");
            this.set_titletext("권한그룹별 권한 관리(추가버튼관리팝업)");
            if (Form == this.constructor)
            {
                this._setFormPosition(780,640);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"PERM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SYTM_FLAG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPrem", this);
            obj._setContents("<ColumnInfo><Column id=\"PERM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SYTM_FLAG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"BTTN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BTTN_ENGL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPrgm", this);
            obj._setContents("<ColumnInfo><Column id=\"PRGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"BTTN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BTTN_ENGL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","25","20",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10","48","28","25",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","12","74","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("권한ID");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtPremId","staTitle00:00","12","120","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle01","edtPremId:0","12","74","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("메뉴ID");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMenuId","staTitle01:0","12","120","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle02","edtMenuId:0","12","98","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("프로그램ID");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtPrgmId","staTitle02:0","12","120","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00","25","70",null,"43","25",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("권한 등록 프로그램 추가 버튼");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","25","Static00:0",null,null,"25","322",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_binddataset("dsPrem");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"60\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell text=\"버튼 ID\"/><Cell col=\"1\" text=\"버튼명\"/><Cell col=\"2\" text=\"버튼영문명\"/><Cell col=\"3\" text=\"버튼스타일\"/><Cell col=\"4\" text=\"순서\"/><Cell col=\"5\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:BTTN_ID\" editlimit=\"0\"/><Cell col=\"1\" edittype=\"none\" text=\"bind:BTTN_NM\" editlimit=\"0\" editlengthunit=\"utf8\" textAlign=\"left\" verticalAlign=\"middle\"/><Cell col=\"2\" text=\"bind:BTTN_ENGL_NM\"/><Cell col=\"3\" text=\"bind:BTTN_STYLE\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" editfilter=\"digit\" text=\"bind:SORT_ORDR\" editlimit=\"0\" editlengthunit=\"utf8\"/><Cell col=\"5\" displaytype=\"checkboxcontrol\" edittype=\"none\" text=\"bind:USED_YN\" editlimit=\"0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","25","grdList:0","247","43",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("권한 미등록 프로그램 추가 버튼");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Button("btnDown","376","grdList:7","29","29",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_Down");
            this.addChild(obj.name, obj);

            obj = new Div("divCmmnBtn",null,"grdList:10","210","28","25",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"0","72","28","0",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("1");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Delete");
            obj.set_visible("false");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Grid("grdMenuList","25","Static00_00:0",null,null,"25","68",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_binddataset("dsPrgm");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"50\"/><Column size=\"60\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell text=\"버튼 ID\"/><Cell col=\"1\" text=\"버튼명\"/><Cell col=\"2\" text=\"버튼영문명\"/><Cell col=\"3\" text=\"버튼스타일\"/><Cell col=\"4\" text=\"순서\"/><Cell col=\"5\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:BTTN_ID\" editlimit=\"0\"/><Cell col=\"1\" edittype=\"none\" text=\"bind:BTTN_NM\" editlimit=\"0\" editlengthunit=\"utf8\" textAlign=\"left\" verticalAlign=\"middle\"/><Cell col=\"2\" text=\"bind:BTTN_ENGL_NM\"/><Cell col=\"3\" text=\"bind:BTTN_STYLE\"/><Cell col=\"4\" displaytype=\"normal\" edittype=\"none\" editfilter=\"digit\" text=\"bind:SORT_ORDR\" editlimit=\"0\" editlengthunit=\"utf8\"/><Cell col=\"5\" displaytype=\"checkboxcontrol\" edittype=\"none\" text=\"bind:USED_YN\" editlimit=\"0\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"50","28","25","20",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("닫기");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnUp","346","325","29","29",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_WF_Up");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCmmnBtn.form
            obj = new Layout("default","",0,0,this.divCmmnBtn.form,function(p){});
            this.divCmmnBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",780,640,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtPremId","value","dsCond","PERM_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtMenuId","value","dsCond","MENU_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.edtPrgmId","value","dsCond","PRGM_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("authPermGrpMenuAddBtnPu.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	authPermGrpMenuAddBtnPu.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/04/05
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/04/05			TOBESOFT					최초생성
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

        	var nRow = this.dsCond.addRow();
        	this.dsCond.setColumn(nRow, "COMPANY_CD"	, oFrame.pvCompanyCd);
        	this.dsCond.setColumn(nRow, "PERM_ID"		, oFrame.pvPremId);
        	this.dsCond.setColumn(nRow, "SYTM_FLAG_CD"	, oFrame.pvSytmFlagCd);
        	this.dsCond.setColumn(nRow, "MENU_ID"		, oFrame.pvMenuId);
        	this.dsCond.setColumn(nRow, "PRGM_ID"		, oFrame.pvPrgmId);
        	this.cfnSearch();
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
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
        	var strSvcId    = "searchPremGrpAddBtnList";
        	var strSvcUrl   = "searchPremGrpAddBtnList.do";
        	var inData      = "dsCond=dsCond";
        	var outData     = "dsPrem=dsPrem dsPrgm=dsPrgm";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };
        //저장
        this.fnTranSave = function ()
        {
        	var strSvcId    = "savePremGrpAddBtnList";
        	var strSvcUrl   = "savePremGrpAddBtnList.do";
        	var inData      = "dsPrem=dsPrem:U";
        	var outData     = "";
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
        		case "searchPremGrpAddBtnList":
        			break;
        		case "savePremGrpAddBtnList":
        			this.cfnSearch();
        			break;
        		default: break;
        	}
        };
        //message
        this.fnMsgCallback = function (sMsgId, sRtn)
        {
        	if(this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false){
        		return;
        	}

        	switch(sMsgId) {
        		case "regiButton":
        			this.fnInsertRegiBtn();
        			break;
        		case "unregiButton":
        			this.fnDeleteRegiBtn();
        			break;
        		default:break;
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        //추가로직
        this.fnInsertRegiBtn = function ()
        {
        	var nRow = this.dsPrem.addRow();
        	this.dsPrem.copyRow(nRow, this.dsPrgm, this.dsPrgm.rowposition);
        	this.dsPrem.setColumn(nRow, "COMPANY_CD"		, this.dsCond.getColumn(0, "COMPANY_CD"));
        	this.dsPrem.setColumn(nRow, "PERM_ID"		, this.dsCond.getColumn(0, "PERM_ID"));
        	this.dsPrem.setColumn(nRow, "SYTM_FLAG_CD"	, this.dsCond.getColumn(0, "SYTM_FLAG_CD"));
        	this.dsPrem.setColumn(nRow, "MENU_ID"		, this.dsCond.getColumn(0, "MENU_ID"));
        	this.dsPrem.setColumn(nRow, "SORT_CD"		, this.dsPrgm.getColumn(this.dsPrgm.rowposition, "SORT_CD"));

        	this.fnTranSave();
        };

        //삭제로직
        this.fnDeleteRegiBtn = function ()
        {
        	var nRow = this.dsPrem.rowposition;
        	this.dsPrem.deleteRow(nRow);
        	this.fnTranSave();
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.cfnSearch();
        };

        this.btnClose_onclick = function(obj,e)
        {
        	this.close()
        };

        this.btnUp_onclick = function(obj,e)
        {
        	var nRow = this.dsPrgm.rowposition;
        	if( nRow > -1){
        		this.gfnAlert("confirm.before.regi.button", [""], "regiButton", "fnMsgCallback");
        	}else{
        		this.gfnAlert("msg.err.grid.noselect");
        	}
        };

        this.btnDown_onclick = function(obj,e)
        {
        	var nRow = this.dsPrem.rowposition;
        	if( nRow > -1){
        		this.gfnAlert("confirm.before.unregi.button", [""], "unregiButton", "fnMsgCallback");
        	}else{
        		this.gfnAlert("msg.err.grid.noselect");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.btnDown.addEventHandler("onclick",this.btnDown_onclick,this);
            this.divCmmnBtn.form.btnDel.addEventHandler("onclick",this.divCmmnBtn_btnDel_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnUp.addEventHandler("onclick",this.btnUp_onclick,this);
        };
        this.loadIncludeScript("authPermGrpMenuAddBtnPu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
