(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cardFm");
            this.set_titletext("카드형게시판 링크폼");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,530);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"BLBD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_NO\" type=\"STRING\" size=\"256\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"INQ_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_IP\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_IP\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"BOARD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fdtFile", this);
            obj.set_url("svcUrl::fileDownload.do");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","0","0",null,null,"0","33",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","30","62",null,"48","30",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_PostTitle");
            obj.set_text("3월 3주차 주간보고");
            this.addChild(obj.name, obj);

            obj = new Static("staInpId","30","18","110","38",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_PostID");
            obj.set_text("홍길동(hong)");
            obj.set_wordWrap("none");
            this.addChild(obj.name, obj);

            obj = new Static("staDttm","staInpId:10","18","160","38",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_PostDate");
            obj.set_text("2023-03-15 11:21");
            this.addChild(obj.name, obj);

            obj = new Div("divCont","30","110",null,"300","30",null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("webEditor","0","0",null,null,"0","0",null,null,null,null,this.divCont.form);
            obj.set_taborder("0");
            this.divCont.addChild(obj.name, obj);

            obj = new Div("divFile","30","divCont:0",null,"60","30",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Static("staBg000","0","0",null,null,"0","0",null,null,null,null,this.divFile.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_PostAttach");
            obj.set_usedecorate("true");
            obj.set_visible("true");
            obj.set_text("");
            this.divFile.addChild(obj.name, obj);

            obj = new Static("staTitle000","4","-60","83",null,null,"60",null,null,null,null,this.divFile.form);
            obj.set_taborder("1");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_Label");
            this.divFile.addChild(obj.name, obj);

            obj = new Static("staCntFile","0","0","90","40",null,null,null,null,null,null,this.divFile.form);
            obj.set_taborder("3");
            obj.set_text("· 첨부파일 0건");
            obj.set_fittocontents("none");
            obj.set_cssclass("sta_WF_PostLabel");
            this.divFile.addChild(obj.name, obj);

            obj = new Grid("grdFile","staCntFile:20","1",null,null,"0","0",null,null,null,null,this.divFile.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_MF_Notice");
            obj.set_scrollbardecbuttonsize("0");
            obj.set_scrollbarincbuttonsize("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"540\"/><Column size=\"70\"/></Columns><Rows><Row size=\"30\"/></Rows><Band id=\"body\"><Cell text=\"bind:OTXT_FILE_NM\"/><Cell col=\"1\" text=\"다운로드\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band></Format></Formats>");
            this.divFile.addChild(obj.name, obj);

            obj = new Div("divBtn00",null,"divFile:30","275","30","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","69","28","0",null,null,null,null,null,this.divBtn00.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CrudDelete");
            this.divBtn00.addChild(obj.name, obj);

            obj = new Button("btnModi",null,"0","69","28","btnDelete:3",null,null,null,null,null,this.divBtn00.form);
            obj.set_taborder("0");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_CrudModify");
            this.divBtn00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divCont.form
            obj = new Layout("default","",0,0,this.divCont.form,function(p){});
            this.divCont.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFile.form
            obj = new Layout("default","",0,0,this.divFile.form,function(p){});
            this.divFile.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBtn00.form
            obj = new Layout("default","",0,0,this.divBtn00.form,function(p){});
            this.divBtn00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",800,530,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","staTitle","text","dsList","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cardFm.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	cardFm.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/12/21
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/12/21			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvDivId = "";
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	this.fvDivId	= this.parent.name.substr(3)-1;

        	this.dsList.clearData();
        	var nRow = this.dsList.addRow();
        	this.dsList.copyRow(nRow, this.parent.parent.dsList, this.fvDivId);

        	this.fnSetDiv();
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //파일조회
        this.fnTranSearchFile = function()
        {
        	this.dsCond.clearData();
        	var nRow = this.dsCond.addRow();
        	this.dsCond.setColumn(nRow, "BOARD_CD", this.dsList.getColumn(0,"BLBD_CD"));
        	this.dsCond.setColumn(nRow, "NOTI_NO", this.dsList.getColumn(0,"NOTI_NO"));

        	var strSvcId    = "searchBoardCardFile";
        	var strSvcUrl   = "searchBoardCardFile.do";
        	var inData      = "dsCond=dsCond";
        	var outData     = "dsFile=dsFile";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        //내용삭제
        this.fnTranDelete = function ()
        {
        	var strSvcId    = "delete";
        	var strSvcUrl   = "saveBoardContents.do";
        	var inData      = "dsList=dsList";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력값으로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //transaction callback
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "searchBoardCardFile":
        			this.divFile.form.staCntFile.set_text("· 첨부파일 " + this.dsFile.getRowCount() + "건");
        			break;
        		case "delete":
        			//삭제
        			this.gfnAlert("msg.delete.success");
        			this.parent.parent.cfnSearch();
        			break;
        		default:break;
        	}
        };

        //popup
        this.fnPopupCallback = function(sPopupId, sRtn)
        {
        	if(this.gfnIsNull(sRtn)){
        		this.parent.parent.cfnSearch();
        	}
        };

        //메세지
        this.fnMsgCallback = function(sMsgId, sRtn)
        {
        	switch(sMsgId) {
        		case "delete":
        			if(this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false){
        				return;
        			}
        			this.dsList.setColumn(0, "STATUS", "delete");
        			this.fnTranDelete();
        			break;
        		default: break;
        	}
        }

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnSetDiv = function()
        {
        	// HTML Viewer를 생성
        	var oWeb = this.divCont.form.webEditor;
        	this.gfnCreateHtmlViewer(oWeb);

        	//첨부파일 여부
        	var sApndYn		= this.parent.parent.fvBoardInfo.apndYn;
        	if(sApndYn=="0"){
        		this.divFile.set_visible(false);
        		this.divCont.set_height("252");
        		this.divCont.form.resetScroll();
        	}else if(sApndYn=="1"){
        		//첨부파일 조회
        		this.fnTranSearchFile();
        	}

        	// 수정/삭제 버튼
        	var sWriter		= this.parent.parent.dsList.getColumn(this.fvDivId, "INPT_ID");
        	var sMgrCd		= this.parent.parent.fvBoardInfo.mgrCd;
        	var sLoginId	= nexacro.getApplication().gdsUser.getColumn(0, "USER_ID");
        	if(sLoginId!=sWriter && sLoginId!=sMgrCd){
        		this.divBtn00.set_visible(false);
        	}

        	var sDttm		= this.dsList.getColumn(0, "INPT_DTTM")+"";
        	var sDate		= sDttm.substr(0,4) + "-" + sDttm.substr(4,2) + "-" + sDttm.substr(6,2);
        	var sTime		= sDttm.substr(8,2) + ":" + sDttm.substr(10,2);

        	this.staDttm.set_text(sDate + " " + sTime);
        	this.staInpId.set_text(this.dsList.getColumn(0, "INPT_EMP_NO"));
        	this.staInpId.set_fittocontents("width");
        };

        //팝업
        this.fnOpenBoardP = function(sStatus)
        {
        	var sTitle = "게시글";
        	var oOption = {title:sTitle
        					,titlebar:true};

        	//게시판추가
        	var popupId = "updateBoard";
        	var oArg   = { pvApndYn		: this.parent.parent.fvBoardInfo.apndYn
        				  ,pvTitle 		: this.parent.parent.fvBoardInfo.blbdNm
        				  ,pvList		: this.dsList
        				  ,pvFile		: this.dsFile
        				  ,pvOpenType   : "update"
        			  };
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup(popupId, "comm::board/boardUpdatePu.xfdl", oArg, sPopupCallBack, oOption);
        }

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        //웹브라우저 로딩
        this.webEditor_onloadcompleted = function(obj,e)
        {
        	//내용세팅
         	var sContents = this.dsList.getColumn(0, "CNTN");
         	this.gfnSetHtmlView(obj, sContents);
        };

        //수정버튼
        this.divBtn_btnModi_onclick = function(obj,e)
        {
        	this.fnOpenBoardP("update");
        };

        //삭제버튼
        this.divBtn_btnDelete_onclick = function(obj,e)
        {
        	this.gfnAlert("confirm.before.delete",[],"delete", "fnMsgCallback");
        };

        //첨부파일 다운로드
        this.divFile_grdFile_oncellclick = function(obj,e)
        {
        	//file download
        	if( e.cell == 1){
        		var sFileId 	= this.dsFile.getColumn(e.row, "FILE_ID");
        		var sFileNm 	= this.dsFile.getColumn(e.row, "OTXT_FILE_NM");
        		var sSaveFileNm = this.dsFile.getColumn(e.row, "SAVE_FILE_NM");
        		if( !this.gfnIsNull(sFileId)){
        			this.fdtFile.setPostData("saveFileName"	, sSaveFileNm);
        			this.fdtFile.setPostData("orgFileName"	, sFileNm);

        			this.fdtFile.set_downloadfilename(sFileNm)
        			this.fdtFile.download("svcUrl::fileDownload.do");
        		}else{
        			this.gfnAlert("msg.err.nofile");
        			return;
        		}
        	}
        };

        ////파일다운로드트랜스퍼 온서세스
        this.fdtFile_onsuccess = function(obj,e)
        {

        };
        ////파일다운로드트랜스퍼 온에러
        this.fdtFile_onerror = function(obj,e)
        {

        };

        //웹브라우저 정보 전달
        this.divCont_webEditor_onusernotify = function(obj,e)
        {
        	if (e.userdata.indexOf("toValue:") > -1)
        	{
        		var sRtnValue = e.userdata.replace("toValue:","");
        		if (this.gfnIsNull(sRtnValue))
        		{
        			return;
        		}

        		var objDiv = obj.parent.parent.parent.parent;	//부모Div
        		var objDs = objDiv.parent.dsDiv;				//Div 정보 가진 Dataset
        		var nRow = objDs.findRow("divID", objDiv.name);
        		var nSize = objDiv.getOffsetHeight() - 300;		//300 - divCont org Height
        		var nRtn = nexacro.toNumber(sRtnValue);
        		objDs.setColumn(nRow, "htmlSize", nRtn);
        		this.divCont.setOffsetHeight(nRtn + 45);		//웹브라우저 사이즈 조정	40 - 여백 더 주기
        		objDiv.setOffsetHeight(nSize + nRtn + 45);		//부모Div 사이즈 조정
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divCont.form.webEditor.addEventHandler("onloadcompleted",this.webEditor_onloadcompleted,this);
            this.divCont.form.webEditor.addEventHandler("onusernotify",this.divCont_webEditor_onusernotify,this);
            this.divFile.form.staBg000.addEventHandler("onclick",this.divCont_divFile_btnDown_onclick,this);
            this.divFile.form.grdFile.addEventHandler("oncellclick",this.divFile_grdFile_oncellclick,this);
            this.divBtn00.form.btnDelete.addEventHandler("onclick",this.divBtn_btnDelete_onclick,this);
            this.divBtn00.form.btnModi.addEventHandler("onclick",this.divBtn_btnModi_onclick,this);
            this.fdtFile.addEventHandler("onsuccess",this.fdtFile_onsuccess,this);
            this.fdtFile.addEventHandler("onerror",this.fdtFile_onerror,this);
        };
        this.loadIncludeScript("cardFm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
