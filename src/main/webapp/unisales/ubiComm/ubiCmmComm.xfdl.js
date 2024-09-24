(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ubiCmmComm");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(10,10);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",10,10,this,function(p){});
            obj.set_horizontalgap("0");
            obj.set_mobileorientation("landscape");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ubiCmmComm.xfdl", function() {
        /**
        *  ubiDocuEditor 와 업무영역의 interface용도 화면
        *  @FileName 	ubiCmmComm.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2024/03/05
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/03/05			DXTOBE						최초생성
        *******************************************************************************
        */


        /**
        * @fnOpenPopup ubiDocuEditor에 link될 경우 업무 팝업 호출
        * - ubiDocuEditor 에서 alert, confirm의 경우 호출됨
        * - 업무용 공통팝업 호출
        * @param1 : scope - ubiDocuEditor
        * @param2 : oPopupCallback - ubiDocuEditor 팝업콜백
        * @param3 : sType - alert/confirm 메세지 구분
        * @param4 : sPopupId - Popup Id
        * @param5 : sMsg - Msg
        */
        this.fvScope = null;
        this.fvScopeCallBack = null;
        this.fnOpenPopup = function (scope, oPopupCallback, sType, sPopupId, sMsg)
        {
        	this.fvScope	= scope;
        	this.fvScopeCallBack = oPopupCallback;

        	if (this.gfnIsNull(sPopupId)) sPopupId = "ubiCommMsg";

        	var sMsgUrl ="";
        	var sMsgType = "", sMsgTitle = "";
        	switch(sType)
        	{
        		case "alert":
        			sMsgUrl = "common::cmmAlert.xfdl";
        			sMsgType = "INF";
        			sMsgTitle = "알림";
        			break;
        		default:
        			sMsgUrl = "common::cmmConfirm.xfdl";
        			sMsgType = "CFN";
        			sMsgTitle = "확인";
        			break;
        	}
        	var arrButton = (sType=='alert'?["확인"]:["확인","취소"]);
        	var arrRtn = (sType=='alert'?[true]:[true,false]);
        	var objArg = {paramContents:sMsg, paramType:sMsgType, paramButton:arrButton, paramRtn:arrRtn};
        	var objOption = {titlebar:"true", title:sMsgTitle};
        	// 업무용 공통
        	this.gfnOpenPopup(sPopupId, sMsgUrl, objArg, this.fnPopupCallBack, objOption);

        };
        /**
        * function fnPopupCallBack
        * - ubiDocuEditor 로 callback 처리
        */
        this.fnPopupCallBack = function (id, rtn)
        {
        	this.fvScopeCallBack.call(this.fvScope, id, rtn);
        };

        this.ubiCmmComm_onbeforeclose = function(obj,e)
        {
        	this.fvScope = null;
        	this.fvScopeCallBack = null;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onbeforeclose",this.ubiCmmComm_onbeforeclose,this);
        };
        this.loadIncludeScript("ubiCmmComm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
