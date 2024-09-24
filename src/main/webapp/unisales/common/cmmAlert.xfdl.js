(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmAlert");
            this.set_titletext("알림창");
            if (Form == this.constructor)
            {
                this._setFormPosition(450,210);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new TextArea("txtMsgContent","90","20",null,null,"20","48",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_readonly("true");
            obj.set_cssclass("txt_POP_Text");
            this.addChild(obj.name, obj);

            obj = new Button("btnOk","200",null,"50","28",null,"10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("확인");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("imgLink","20","64","53","53",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_accessibilitylabel("알림 아이콘");
            obj.set_image("url(\'theme://images/img_POP_Warning.png\')");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new Button("btnVoc",null,"125","31","31","388",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_tooltiptext("VOC등록");
            obj.set_cssclass("btn_MDI_Voc");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",450,210,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmAlert.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	cmmAlert.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2020/11/25
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2020/11/25			TOBESOFT					최초생성
        *******************************************************************************
        */

        /********************************************************************************
         * Form 변수선언 영역
         ********************************************************************************/
        this.fvOptSize;

        /********************************************************************************
         * Form Event 영역
         ********************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	var sMsgId    = this.getOwnerFrame().paramId;
        	var paramType = this.getOwnerFrame().paramType;
        	var sContents = this.getOwnerFrame().paramContents;
        	this.fvOptSize = this.getOwnerFrame().pOptSize;

        	switch(paramType)
        	{
        		case "ERR":
        			this.imgLink.set_image("theme://images/img_POP_Error.png");
        			break;
        		case "WAN":
        			this.imgLink.set_image("theme://images/img_POP_Warning.png");
        			this.btnVoc.set_visible(true);
        			break;
        	}

        	this.fnMsgSetting(sContents);

        	this.btnOk.setFocus();
        };

        /********************************************************************************
         * 사용자 Function 영역
         ********************************************************************************/
        /**
        * @description 메세지설정
        */
         this.fnMsgSetting = function (sMsgContent)
         {
        	this.txtMsgContent.set_value(sMsgContent);
         };

        //웹일경우 해당컴포넌트 이미지 파일로 다운로드
        this.fnWebImageSave = function(objComp,strFileName){
        	//var ele = document.getElementById(objComp.getElement().handle.id);
        	var ele = window.document.body;
        	var oForm = this;
        	if (!ele){
        		trace('ele is not exist.')
        		return false;
        	}

        	html2canvas(ele, {
        		onrendered : function(canvas){
        			sImageData = canvas.toDataURL('image/png'); //Image 코드로 뽑아내기 // image 추가
        			oForm.fnOpenBoardPopup(sImageData);
        		}
        	});
        };

        //20210609 VOC추가
        //게시판입력팝업오픈
        this.fnOpenBoardPopup = function (sImg)
        {
        	var sImgTag = "<p></p> <p></p>  <p></p> <img src="+nexacro.wrapQuote(sImg)+">";
        	//게시판추가
        	var popupId = "addBoard";
        	var popupUrl = "comm::board/boardPu.xfdl";
        	var oArg   = { pvApndYn		: "1"
        				  ,pvTitle 		: "VOC등록 "
        				  ,pvInputId	: nexacro.getApplication().gdsUser.getColumn(0, "USER_ID")
        				  ,pvInputEmpNo	: nexacro.getApplication().gdsUser.getColumn(0, "EMP_NO")
        				  ,pvContTitle	: ""
        				  ,pvBoardCd	: "VOC001"
        				  ,pvOpenType	: "add"
        				  ,pvHrank		: ""
        				  ,pvAnswLvl    : 0
        				  ,pvCont		: sImgTag };
        	var sPopupCallBack = "fnPopupCallback";
        	var sTitle = "게시글";
        	var oOption = {title:sTitle, titlebar:true};
        	this.gfnOpenPopup(popupId, popupUrl, oArg, sPopupCallBack, oOption);
        };

        /********************************************************************************
         * Component Event 영역
         ********************************************************************************/
        /**
        * @description OK버튼이벤트
        */
        this.btnOk_onclick = function(obj,e)
        {
        	this.close(true);
        };

        /**
        * @description VOC버튼클릭
        */
        this.btnVoc_onclick = function(obj,e)
        {
        	//var sCur = nexacro.getApplication().gvVfrsWork.separatesize;
        	//var sStatus = sCur=="42,*,0,0"?"main":"work";

        	//var oTargetFrame = sStatus=="main"? nexacro.getApplication().gvFrmMain : nexacro.getApplication().gvFrsWork.getActiveFrame();
        	//var oTarget = oTargetFrame.form;
        	//var oTarget = nexacro.getApplication().mainframe;
        	var oTarget = nexacro.getApplication().getActiveFrame();

        	var sFileName = oTarget.name+".png";
        	var sImg = "";

        	if (system.navigatorname != "nexacro") {
        		sImg = this.fnWebImageSave(oTarget,sFileName);
        	}
        	else {
        		sImg = system.saveToImageBase64String(oTarget, false, "PNG");
        		this.fnOpenBoardPopup(sImg);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnOk.addEventHandler("onclick",this.btnOk_onclick,this);
            this.btnVoc.addEventHandler("onclick",this.btnVoc_onclick,this);
        };
        this.loadIncludeScript("cmmAlert.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
