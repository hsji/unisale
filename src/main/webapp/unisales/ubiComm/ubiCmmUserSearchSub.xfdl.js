(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ubiCmmUserSearchSub");
            this.set_titletext("사용자조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(205,32);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCommonCond", this);
            obj._setContents("<ColumnInfo><Column id=\"SRCH\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCommonList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("edtCode","0","0","44.39%",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("edi_WF_Search");
            obj.getSetter("uUse").set("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","edtCode:-28.00","12.5%","28","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdiSch");
            this.addChild(obj.name, obj);

            obj = new Edit("edtName","edtCode:3","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("edi_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUserId","0","42",null,"24","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",205,32,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ubiCmmUserSearchSub.xfdl", function() {
        /**
        *  발신자 조회
        *  @FileName 	ubiCmmUserSearchSub.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2024/03/05
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/03/05			DXTOBE					최초생성
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
        	//this.gfnFormOnload(obj,e); //필수함수
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
        this.fnTranUserList = function ()
        {
        	//this.edtCode.set_enableevent(false);

        	if( this.gfnIsNull( this.edtCode.value )) {
        		this.edtName.set_value("");
        		this.edtUserId.set_value("");
        		//this.edtCode.set_enableevent(true);
        		return;
        	}

        	this.dsCommonCond.clearData();
        	var nRow = this.dsCommonCond.addRow();
        	this.dsCommonCond.setColumn(nRow, "SRCH", this.edtCode.value);

        	var strSvcId    = "selectCommonUserList";
        	var strSvcUrl   = "selectCommonUserList.do";
        	var inData      = "dsCommonCond=dsCommonCond";
        	var outData     = "dsCommonList=dsCommonList";
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
        		case "selectCommonUserList":
        			this.fnSetUserResult();
        			break;
        		default:break;
        	}
        };

        //popup
        this.fnPopupCallback = function (sPopupId, sRtn)
        {
        	switch(sPopupId) {
        		case "orgUserListPu":
        			if( !this.gfnIsNull(sRtn) ){
        				var aRtn= sRtn.split("|");
        				var dsDocInfo = this.parent.parent.lookup("dsHistory");
        				dsDocInfo.setColumn(0, "SEND_ID", aRtn[2]);
        				dsDocInfo.setColumn(0, "USER_NAME", aRtn[1]);
        				dsDocInfo.setColumn(0, "USER_MAILADDR", aRtn[3]);
        				dsDocInfo.setColumn(0, "USER_PHONE", aRtn[4]);
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
        			this.edtUserId.set_value("");
        			this.edtCode.setFocus();
        			break;
        		default:break;
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        //조회결과세팅
        this.fnSetUserResult = function ()
        {
        	if( this.dsCommonList.getRowCount() == 0){
        		this.gfnAlert("msg.err.nodata", [""], "nodata", "fnMsgCallback");
        		return;
        	}

        // 	var sCode = this.dsCommonList.getColumn(0, "CODE");
        // 	var sName = this.dsCommonList.getColumn(0, "NAME");
        // 	var sUserId = this.dsCommonList.getColumn(0, "EMP_NO");
        //
        // 	this.edtCode.set_value(sUserId);
        //  	this.edtName.set_value(sName);
        //  	this.edtUserId.set_value(sCode);
        //
        // 	if(this.parent.parent.btnSearch) this.parent.parent.btnSearch.setFocus();
        // 	//this.edtCode.set_enableevent(true);
        };

        // 사용자 세팅
        this.fnSetUser = function (sUser)
        {
        	if (this.gfnIsNull(sUser)) {
        		sUser = nexacro.getApplication().gdsUser.getColumn(0,"EMP_NO");
        	}
        	this.edtCode.set_value(sUser);
        	this.fnTranUserList();
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
        	if(e.keycode==13) this.fnTranUserList();
        };

        this.edtCode_onkillfocus = function(obj,e)
        {
        	this.fnTranUserList();
        };

        this.btnSearch_onclick = function(obj,e)
        {
        	var sTitle  = "사용자 선택";
        	var oArg    = {pvSearchValue:this.edtCode.value};
        	var oOption = {title:sTitle
        				,titlebar:true};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("orgUserListPu", "ubiComm::ubiCmmUserListPu.xfdl", oArg, sPopupCallBack, oOption);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.edtCode.addEventHandler("onkeyup",this.edtCode_onkeyup,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
        };
        this.loadIncludeScript("ubiCmmUserSearchSub.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
