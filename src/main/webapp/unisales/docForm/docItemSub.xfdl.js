(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("docItemSub");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(230,300);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDocInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_ID\" type=\"string\" size=\"32\"/><Column id=\"PDF_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"USED_FLAG\" type=\"string\" size=\"32\"/><Column id=\"CHGE_ID\" type=\"string\" size=\"32\"/><Column id=\"SYS_CODE\" type=\"string\" size=\"32\"/><Column id=\"PDF_ORIG_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"PDF_FILE_PATH_NM\" type=\"string\" size=\"32\"/><Column id=\"BIZ_CODE\" type=\"string\" size=\"32\"/><Column id=\"DOC_TITLE\" type=\"string\" size=\"32\"/><Column id=\"EXPIRE_DATE\" type=\"string\" size=\"32\"/><Column id=\"INPT_ID\" type=\"string\" size=\"32\"/><Column id=\"EDIT_INFO\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHistory", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_ID\" type=\"string\" size=\"32\"/><Column id=\"SEND_MESSAGE\" type=\"string\" size=\"32\"/><Column id=\"SEND_TITLE\" type=\"string\" size=\"32\"/><Column id=\"SEND_TYPE\" type=\"string\" size=\"32\"/><Column id=\"USER_MAILADDR\" type=\"string\" size=\"32\"/><Column id=\"CERT_TYPE\" type=\"string\" size=\"32\"/><Column id=\"DRAWIMAGE_FLAG\" type=\"string\" size=\"32\"/><Column id=\"REFIMAGE_FLAG\" type=\"string\" size=\"32\"/><Column id=\"SEND_DTTM\" type=\"string\" size=\"32\"/><Column id=\"USER_NAME\" type=\"string\" size=\"32\"/><Column id=\"EXPIREMAIL_DATE\" type=\"string\" size=\"32\"/><Column id=\"USER_PHONE\" type=\"string\" size=\"32\"/><Column id=\"DRAWSIGN_FLAG\" type=\"string\" size=\"32\"/><Column id=\"SEND_SEQ\" type=\"int\" size=\"4\"/><Column id=\"SEND_ID\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new ImageViewer("imgSnap","30.00","45",null,"190","30",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_visible("false");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Button("btnEdit","39.00","241","66","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("편집");
            obj.set_cssclass("btn_TFDM_Save");
            obj.set_visible("false");
            obj.getSetter("btnType").set("E");
            this.addChild(obj.name, obj);

            obj = new Button("btnMail","109.00","241","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("메일발송");
            obj.set_cssclass("btn_TFDM_Save");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose","178.00","11","31","33",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_TFDM_CloseEdit");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd","77.00","102","77","68",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_ProjectCardAdd");
            obj.set_visible("false");
            obj.getSetter("btnType").set("N");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","12","16","166","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static00",null,"43","1","199","1",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_border("1px dotted #dddddd");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",230,300,this,function(p){});
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
        this.registerScript("docItemSub.xfdl", function() {
        /**
        *  문서 스냅샵 - docMain에서 호출
        *  @FileName 	docItemSub.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2024/03/04
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/03/04			DXTOBE						최초생성
        *******************************************************************************
        */
        this.fvIndex = -1;
        this.docItemSub_onload = function(obj,e)
        {
        };
        /**
        * @function fnHistorySearch  <br>
        * description 발송히스토리 조회
        */
        this.fnHistorySearch = function ()
        {
        	var strSvcId    = "searchMailHistory";
        	var strSvcUrl   = "searchMailHistory.do";
        	var inData      = "dsCond=dsCond";
        	var outData     = "dsHistory=dsHistory";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };
        /**
        * @function fnDocDetete  <br>
        * description 삭제
        */
        this.fnDocDetete = function ()
        {
        	var strSvcId    = "deleteDoc";
        	var strSvcUrl   = "deleteDoc.do";
        	var inData      = "dsCond=dsCond";
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
        /**
        * @function fnCallback  <br>
        * description 서비스콜백
        */
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "searchMailHistory":
        			break;
        		case "deleteDoc":
        			var pThis = this;
        			this.gfnAlert("msg.delete.success", [], "deldoc", "fnMsgCallback" );
        			break;
        	}
        };

        /**
        * @function fnPopupCallback  <br>
        * description 팝업코르백
        */
        this.fnPopupCallback = function (sPopupId, sRtn)
        {
        	switch(sPopupId) {
        		case "docFormNew":
        			this.fnRefreshMain();
        			break;
        		case "docFormEdit":
        			this.fnRefreshMain();
        			break;
        		case "selectHistory" :
        			// 발송건이 여러개인 경우 팝업선택
        			if(!this.gfnIsNull(sRtn)){
        				this.fnOpenSendMailPop("Y");
        			}
        			break
        		case "docFormMail" :
        			this.fnRefreshMain();
        			break
        		default:break;
        	}
        };
        this.fnMsgCallback = function (sPopupId, sRtn)
        {
        	if( sPopupId == "deleteMsg"){
        		if(this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false){
        			return;
        		}
        		this.fnDocDetete();
        	} if( sPopupId == "deldoc"){
        		this.fnRefreshMain();
        	}
        };
        /**
        * @function fnInit  <br>
        * description docMain에서 생성 후 최초 호출
        */
        this.fnInit = function(sType, objDocDs, nDocIndex, sysCode, bizCode)
        {
        	if(objDocDs) {
        		this.dsDocInfo.copyRow(0, objDocDs, nDocIndex);
        		this.dsCond.setColumn(0, "DOC_ID", this.dsDocInfo.getColumn(0,"DOC_ID"));
        		this.fnHistorySearch();
        	} else {
        		this.dsDocInfo.setColumn(0, "SYS_CODE", sysCode);
        		this.dsDocInfo.setColumn(0, "BIZ_CODE", bizCode);
        	}
        	this.fnSetVisible(sType);
        };

        /**
        * @function fnSetVisible  <br>
        * description visible 처리
        */
        this.fnSetVisible = function(v)
        {
        	if(v == "add") {
        		this.btnAdd.set_visible(true);
        	} else {
        		var comps = this.components;
        		for(var i=0,len=comps.length;i<len;i++) {
        			if(comps[i].name != "btnAdd") {
        				comps[i].set_visible(true);
        			}
        		}
        		// title
        		if(this.gfnIsNull(this.dsDocInfo.getColumn(0, "DOC_TITLE")) == false) {
        			this.staTitle01.set_text(this.dsDocInfo.getColumn(0, "DOC_TITLE").substr(0,16));
        		} else {
        			this.staTitle01.set_cssclass("sta_WF_SchLabel2");
        			this.staTitle01.set_text("[편집대기]");
        			this.btnMail.set_enable(false);
        		}
        		// 문서 저장이 안된 경우
        		if(this.gfnIsNull(this.dsDocInfo.getColumn(0, "PDF_ORIG_FILE_NM"))) {
        			this.btnMail.set_enable(false);
        		} else {
        			// snapshot image
        			this.fnLoadImage();
        		}
        	}
        };
        /**
        * @function fnLoadImage  <br>
        * description snapshot image load
        */
        this.fnLoadImage = function() {
        	var uuid = this.dsDocInfo.getColumn(0, "DOC_ID");
        	var sysCode = this.dsDocInfo.getColumn(0, "SYS_CODE");
        	var bizCode = this.dsDocInfo.getColumn(0, "BIZ_CODE");

        	this.imgSnap.set_image("svcUrl::ubiGetSnapshot.do?u=" + uuid + "&s=" + sysCode + "&b=" + bizCode);
        };

        /**
        * @function btnEdit_onclick  <br>
        * description 신규편집/수정
        */
        this.btnEdit_onclick = function(obj,e)
        {
        	var sTitle = "";
        	if(obj.btnType == "N") sTitle  = "문서작성";
        	else sTitle  = "문서편집";

        	var oArg    = { pvUUID:		this.dsDocInfo.getColumn(0, "DOC_ID"),
        					pvSysCode:	this.dsDocInfo.getColumn(0, "SYS_CODE"),
        					pvBizCode:	this.dsDocInfo.getColumn(0, "BIZ_CODE"),
        					pvSaveMode: (this.btnMail.enable==true?"Y":"N")
        				  };
        	var oOption = {title:sTitle , titlebar:true};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("docFormEdit", "docForm::docFormNewPu.xfdl", oArg, sPopupCallBack, oOption);
        };


        /**
        * @function fnOpenSendMailPop  <br>
        * description 메일발송팝업실행
        */
        this.fnOpenSendMailPop = function(sType)
        {
        	var sTitle  = "메일발송";
        	var oArg    = { pvUUID:		this.dsDocInfo.getColumn(0, "DOC_ID"),
        					pvSysCode:	this.dsDocInfo.getColumn(0, "SYS_CODE"),
        					pvBizCode:	this.dsDocInfo.getColumn(0, "BIZ_CODE"),
        					pvType:		sType
        				  };
        	var oOption = {title:sTitle , titlebar:true};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("docFormMail", "docForm::docMailPu.xfdl", oArg, sPopupCallBack, oOption);
        };

        /**
        * @function btnMail_onclick  <br>
        * description 메일발송
        */
        this.btnMail_onclick = function(obj,e)
        {
        	if(this.dsHistory.rowcount > 1) {
        		// HISTORY 팝업 오픈
        		var sTitle  = "메일발송현황 - 선택";
        		var oArg    = { pvUUID:		this.dsDocInfo.getColumn(0, "DOC_ID"),
        						pvSysCode:	this.dsDocInfo.getColumn(0, "SYS_CODE"),
        						pvBizCode:	this.dsDocInfo.getColumn(0, "BIZ_CODE")
        					  };
        		var oOption = {title:sTitle , titlebar:true};
        		var sPopupCallBack = "fnPopupCallback";
        		this.gfnOpenPopup("selectHistory", "ubiComm::ubiCmmHistoryPu.xfdl", oArg, sPopupCallBack, oOption);
        	} else if(this.dsHistory.rowcount == 1) {
        		this.dsHistory.set_rowposition(0);
        		this.fnOpenSendMailPop("Y");
        	} else {
        		this.fnOpenSendMailPop("N");
        	}
        };
        /**
        * @function fnRefreshMain  <br>
        * description 부모창 재조회
        */
        this.fnRefreshMain = function() {
        	this.parent.parent.parent.parent.fnDocSearch(true);
        };

        // delete
        this.btnClose_onclick = function(obj,e)
        {
        	this.gfnAlert("confirm.before.delete", [""], "deleteMsg", "fnMsgCallback");
        };

        this.imgSnap_onclick = function(obj,e)
        {
        	var sTitle  = "문서보기";
        	var docId   = this.dsDocInfo.getColumn(0,"DOC_ID");
        	var Doctitle  = this.dsDocInfo.getColumn(0,"DOC_TITLE");
        	var sysCode = this.dsDocInfo.getColumn(0,"SYS_CODE");
        	var bizCode = this.dsDocInfo.getColumn(0,"BIZ_CODE");
        	var seq 	= this.dsDocInfo.getColumn(0,"SEND_SEQ")+"";
        	if(!Doctitle || Doctitle == "") return;
        	var oArg    = { pvUUID:		docId,
        					pvSysCode:	sysCode,
        					pvBizCode:	bizCode,
        					pvTitle :	Doctitle,
        					pvSeq :	seq,
        					pvUserId:	""
        				  };
        				  console.log(oArg);
        	var oOption = {title:sTitle , titlebar:true};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("docView", "docForm::docViewPu.xfdl", oArg, sPopupCallBack, oOption);

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.docItemSub_onload,this);
            this.imgSnap.addEventHandler("onclick",this.imgSnap_onclick,this);
            this.btnEdit.addEventHandler("onclick",this.btnEdit_onclick,this);
            this.btnMail.addEventHandler("onclick",this.btnMail_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnAdd.addEventHandler("onclick",this.btnEdit_onclick,this);
        };
        this.loadIncludeScript("docItemSub.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
