(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ubiCmmDocSearch");
            this.set_titletext("문서그룹조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(205,28);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"SRCH\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("edtCode","0","0","50%",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("edi_WF_Search");
            obj.getSetter("uUse").set("false");
            obj.set_maxlength("7");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","edtCode:-28.00","2","28","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdiSch");
            this.addChild(obj.name, obj);

            obj = new Edit("edtName","edtCode:3","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("edi_WF_Search");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",205,28,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ubiCmmDocSearch.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	ubiCmmDocSearch.xfdl
        *  @Creator 	DXTOBE
        *  @CreateDate 	2024/03/28
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/03/28			DXTOBE					최초생성
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
        	this.fnTranDocTreeList();
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //조회
        this.fnTranDocTreeList = function ()
        {
        	if (this.gfnIsNull(this.edtCode.value)) {
        		this.edtName.set_value("");
        		return;
        	}

        	this.dsCond.clearData();
        	var nRow = this.dsCond.addRow();
        	this.dsCond.setColumn(nRow, "SRCH", this.edtCode.value);

        	var strSvcId    = "searchDocuTreeOne";
        	var strSvcUrl   = "searchDocuTreeOne.do";
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
        		case "searchDocuTreeOne":
        			this.fnSetResult();
        			break;
        		default:break;
        	}
        };

        //popup
        this.fnPopupCallback = function (sPopupId, sRtn)
        {
        	switch(sPopupId) {
        		case "ubiCmmDocTreePu":
        			if( !this.gfnIsNull(sRtn) ){
        				var aRtn= sRtn.split("|");
        				this.edtCode.set_value(aRtn[0]);
        				this.edtName.set_value(aRtn[2]);
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
        	if( this.dsList.getRowCount() == 0){
        		this.gfnAlert("msg.err.nodata", [""], "nodata", "fnMsgCallback");
        		return;
        	}

        	var sCode = this.dsList.getColumn(0, "DT_CD");
        	var sName = this.dsList.getColumn(0, "DT_NAME");

        	this.edtCode.set_value(sCode);
        	this.edtName.set_value(sName);

        	if(this.parent.parent.btnSearch) this.parent.parent.btnSearch.setFocus();
        	//this.edtCode.set_enableevent(true);
        };

        //부서 세팅
        this.fnSetDoc = function (sDoc)
        {
        	if (this.gfnIsNull(sDoc)) {
        		return;
        	}
        	this.edtCode.set_value(sDoc);
        	this.fnTranDocTreeList();
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
        	if(e.keycode==13) this.fnTranDocTreeList();
        };

        this.btnSearch_onclick = function(obj,e)
        {
        	var sTitle  = "부서 선택";
        	var oArg    = {
        		pvSearchValue:this.edtCode.value
        		,pvSearchScopeCd:this.fvSearchScopeCd
        	};
        	var oOption = {title:sTitle
        				  ,titlebar:true};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("ubiCmmDocTreePu", "ubiComm::ubiCmmDocTreePu.xfdl", oArg, sPopupCallBack, oOption);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.edtCode.addEventHandler("onkeyup",this.edtCode_onkeyup,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
        };
        this.loadIncludeScript("ubiCmmDocSearch.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
