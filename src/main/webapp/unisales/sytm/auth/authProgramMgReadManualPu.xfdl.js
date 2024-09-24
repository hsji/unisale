(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("authProgramMgReadManualPu");
            this.set_titletext("매뉴얼 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(950,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"PRGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"PRGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_HELP\" type=\"STRING\" size=\"400\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staManualTitle","25","0","118","43","807",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("매뉴얼");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("divContents","25","staManualTitle:0",null,null,"25","10",null,null,"589",null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divCont","0","0",null,null,"0","0",null,null,"350",null,this.divContents.form);
            obj.set_taborder("0");
            obj.set_text("div00");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staBg000","0","0",null,null,"0","0",null,null,null,null,this.divContents.form.divCont.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divContents.form.divCont.addChild(obj.name, obj);

            obj = new WebBrowser("webEditor","5","5",null,null,"5","5",null,null,null,null,this.divContents.form.divCont.form);
            obj.set_taborder("1");
            this.divContents.form.divCont.addChild(obj.name, obj);

            obj = new Static("staBottom","0","680",null,"60","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Div("divBtn00",null,"7","247","28","25",null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"0","50","28","0",null,null,null,null,null,this.divBtn00.form);
            obj.set_taborder("0");
            obj.set_text("닫기");
            this.divBtn00.addChild(obj.name, obj);

            obj = new Button("btnModi",null,"0","69","28","btnClose:3",null,null,null,null,null,this.divBtn00.form);
            obj.set_taborder("1");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_CrudModify");
            obj.set_visible("false");
            this.divBtn00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divContents.form.divCont.form
            obj = new Layout("default","",0,0,this.divContents.form.divCont.form,function(p){});
            this.divContents.form.divCont.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form
            obj = new Layout("default","",0,0,this.divContents.form,function(p){});
            this.divContents.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBtn00.form
            obj = new Layout("default","",0,0,this.divBtn00.form,function(p){});
            this.divBtn00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",950,700,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divContents.form.staProId","text","dsList","PRGM_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divContents.form.staProNm","text","dsList","PRGM_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("authProgramMgReadManualPu.xfdl", function() {
         /**
        *  DevPACK
        *  @FileName 	authProgramMgReadManualPu.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023/08/03
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2023/08/03			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvOpenType 	= "";	//오픈타입
        this.fvButtonAuth 	= "";	//버튼 권한
        this.fvProgId 		= "";	//프로그램 ID
        this.fvProgNm 		= "";	//프로그램 이름
        this.fvMenuNm		= "";   //메뉴 이름
        this.fvCompanyCd  = ""; // 회사코드

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	this.fvOpenType = this.getOwnerFrame().pvOpenType;  //오픈타입
        	this.fvProgId = this.getOwnerFrame().pvProgId; 		// 프로그램 ID
        	this.fvProgNm = this.getOwnerFrame().pvProgNm; 		// 프로그램 이름
        	this.fvManuNm =	this.getOwnerFrame().pvMenuNm; 		// 메뉴 이름
        	this.fvCompanyCd 	   = this.getOwnerFrame().pvCompanyCd;  	// 회사코드

        	// 메뉴 이름 세팅
        	if(!this.gfnIsNull(this.fvManuNm)) this.staManualTitle.set_text(this.fvManuNm + " ");
        	else this.staManualTitle.set_text(this.fvProgNm + " ");

        	this.resetScroll();

        	//게시물 내용조회
        	this.fnGetContentsTran();
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //게시물내용가져오기
        this.fnGetContentsTran = function ()
        {
        	this.dsCond.clearData();
        	var nRow = this.dsCond.addRow();
        	this.dsCond.setColumn(nRow, "COMPANY_CD", this.fvCompanyCd);
        	this.dsCond.setColumn(nRow, "PRGM_ID", this.fvProgId);

        	var strSvcId    = "searchManual";
        	var strSvcUrl   = "searchManual.do";
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
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "searchManual":
        			this.fnSetFormInit();
        			break;
        		default:
        			break;
        	}
        };

        //message
        this.fnMsgCallback = function (sMsgId, sRtn)
        {

        };

        //popup
        this.fnPopupCallback = function (sPopupId, sRtn)
        {

        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnSetFormInit = function ()
        {
        	// HTML Viewer를 생성
        	var oWeb = this.divContents.form.divCont.form.webEditor;
        	this.gfnCreateHtmlViewer(oWeb);
        	this.divContents.set_visible(true);
        	this.divBtn.form.resetScroll();
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        //웹에디터
        this.divContents_divCont_webEditor_onloadcompleted = function(obj,e)
        {
        	//내용세팅
        	var sContents = this.dsList.getColumn(0, "PRGM_HELP");
        	var oWeb = this.divContents.form.divCont.form.webEditor;
        	this.gfnSetHtmlView(oWeb, sContents);
        };

        //닫기버튼
        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        //수정버튼
        this.divBtn_btnModi_onclick = function(obj,e)
        {

        };

        //삭제버튼
        this.divBtn_btnDelete_onclick = function(obj,e)
        {
        	this.gfnAlert("confirm.before.delete",[],"delete", "fnMsgCallback");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divContents.form.divCont.form.webEditor.addEventHandler("onloadcompleted",this.divContents_divCont_webEditor_onloadcompleted,this);
            this.divBtn00.form.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.divBtn00.form.btnModi.addEventHandler("onclick",this.divBtn_btnModi_onclick,this);
        };
        this.loadIncludeScript("authProgramMgReadManualPu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
