(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CE_EMailSend");
            this.set_titletext("E-Mail 발송");
            this.set_cssclass("frm_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,574);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_to", this);
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cc", this);
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bcc", this);
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_email", this);
            obj._setContents("<ColumnInfo><Column id=\"SUBJECT\" type=\"STRING\" size=\"255\"/><Column id=\"FROM\" type=\"STRING\" size=\"255\"/><Column id=\"FROM_NM\" type=\"STRING\" size=\"255\"/><Column id=\"CONTENT\" type=\"STRING\" size=\"255\"/><Column id=\"HTML_YN\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_RecentData", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_Sales_List03","4","114","540","418",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_detailLbl01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Sales_List02","545","37","297","496",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_detailLbl01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Sales_List01","4","75","540","40",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_detailLbl01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Sales_List00","4","37","540","40",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_detailLbl01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_GbReceiver",null,"41","297","36","4",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_POP_GroupBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_BottomFrame","0",null,null,"38","1","1",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_BtnBg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Send",null,null,"72","22","9","9",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("보내기");
            obj.set_cssclass("btn_WF_tran");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close",null,"9","15","15","12",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_POP_Cls");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Sender","13","46","48","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("발신자");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Title","13","81","48","22",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("stc_GbReceiverText",null,"51","65","15","225",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("받는 사람");
            obj.set_cssclass("sta_POP_GroupTit");
            this.addChild(obj.name, obj);

            obj = new Static("stc_GbReference",null,"200","297","36","4",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_POP_GroupBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_GbReferenceText",null,"209","72","15","218",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("참 조");
            obj.set_cssclass("sta_POP_GroupTit");
            this.addChild(obj.name, obj);

            obj = new Static("stc_GbHideReference",null,"371","297","36","4",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("sta_POP_GroupBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_GbHideReferenceText",null,"381","71","14","219",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("숨은 참조 ");
            obj.set_cssclass("sta_POP_GroupTit");
            this.addChild(obj.name, obj);

            obj = new Button("btn_SelectReceiver",null,"45","94","24","310",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("수신자 선택");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Name","70","46","135","22",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Email","209","46",null,"22","412",null,null,null,null,null,this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Title","69","81",null,"22","310",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_displaynulltext("제목을 입력하세요");
            obj.set_text("제목을 입력하세요.");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_InputEmailByReceiver",null,"81","239","22","62",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_displaynulltext("이메일 주소 직접 입력");
            obj.set_text("이메일 주소 직접 입력.");
            this.addChild(obj.name, obj);

            obj = new Button("btn_InputEmailByReceiverPlus",null,"84","16","16","36",null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("btn_POP_Add");
            this.addChild(obj.name, obj);

            obj = new Button("btn_InputEmailByReceiverMinus",null,"84","16","16","12",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("btn_POP_Del");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_InputEmailByReceiver",null,"107","298","90","3",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_binddataset("ds_to");
            obj.set_autofittype("col");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"이름\"/><Cell col=\"1\" text=\"이메일\"/></Band><Band id=\"body\"><Cell text=\"bind:NAME\"/><Cell col=\"1\" text=\"bind:EMAIL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_EmailReference",null,"267","298","101","3",null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_binddataset("ds_cc");
            obj.set_autofittype("col");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"이름\"/><Cell col=\"1\" text=\"이메일\"/></Band><Band id=\"body\"><Cell text=\"bind:NAME\"/><Cell col=\"1\" text=\"bind:EMAIL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_EmailReference",null,"240","239","22","62",null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_displaynulltext("이메일 주소 직접 입력");
            obj.set_text("이메일 주소 직접 입력.");
            this.addChild(obj.name, obj);

            obj = new Button("btn_EmailReferencePlus",null,"243","16","16","36",null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("btn_POP_Add");
            this.addChild(obj.name, obj);

            obj = new Button("btn_EmailReferenceMinus",null,"243","16","16","12",null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("btn_POP_Del");
            this.addChild(obj.name, obj);

            obj = new Button("btn_EmailHideReferenceMinus",null,"413","16","16","12",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("btn_POP_Del");
            this.addChild(obj.name, obj);

            obj = new Button("btn_EmailHideReferencePlus",null,"413","16","16","36",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("btn_POP_Add");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_EmailHideReference",null,"410","239","22","62",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_displaynulltext("이메일 주소 직접 입력");
            obj.set_text("이메일 주소 직접 입력.");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_EmailHideReference",null,"436","297",null,"4","43",null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_binddataset("ds_bcc");
            obj.set_autofittype("col");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"이름\"/><Cell col=\"1\" text=\"이메일\"/></Band><Band id=\"body\"><Cell text=\"bind:NAME\"/><Cell col=\"1\" text=\"bind:EMAIL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","8","5","96","22",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_text("E-Mail발송");
            obj.set_color("white");
            obj.set_cssclass("sta_POP_Title");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("wb_WebEditor","12","107",null,null,"310","43",null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_enable("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",900,574,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CE_EMailSend.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("CE_EMailSend.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("CE_EMailSend.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("CE_EMailSend.xfdl","Script::CommGrid.xjs");
        this.addIncludeScript("CE_EMailSend.xfdl","Script::ext_WebEditor.xjs");
        this.registerScript("CE_EMailSend.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분	 	: 공통 - 공통
        * 02. 화면명		: E-mail 발송 (CE_EMailSend_R01)
        * 03. 화면설명 	:
        * 04. 작성일   	: 2018.08.08
        * 05. 작성자   	: 안주환
        * 06. 수정이력 	:
        ***********************************************************************************************
        *     수정일          이  름    사유
        ***********************************************************************************************
        *
        ************************************************************************************************/

        /************************************************************************************************
        * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        this.executeIncludeScript("Script::CommSystem.xjs"); /*include "Script::CommSystem.xjs"*/;
        this.executeIncludeScript("Script::CommTrans.xjs"); /*include "Script::CommTrans.xjs"*/;
        this.executeIncludeScript("Script::CommUtil.xjs"); /*include "Script::CommUtil.xjs"*/;
        this.executeIncludeScript("Script::CommGrid.xjs"); /*include "Script::CommGrid.xjs"*/;
        this.executeIncludeScript("Script::ext_WebEditor.xjs"); /*include "Script::ext_WebEditor.xjs"*/;

        /************************************************************************************************
        * 전역 변수 영역
        ************************************************************************************************/
        this.strHtml = "";

        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/
        this.CE_EMailSend_onload = function(obj,e)
        {
        	this.gfnCompInit(obj); //헤더클릭 이벤트 없을 시 사용
        	this.fnFormInit();
        };

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.fnFormInit = function()
        {
        	var app = nexacro.getApplication();
        	this.edt_Name.set_value(app.gdsUserInfo.getColumn(0, "EMP_NM"));
        	this.edt_Email.set_value(app.gdsUserInfo.getColumn(0, "EMAIL"));

        	if(this.parent.key == "EmailSend")
        	{
        		for(var i = 0; i<this.parent.dsInput.rowcount; i++)
        		{
        			var nRow = this.ds_to.addRow();
        			this.ds_to.setColumn(nRow, "NAME", this.parent.dsInput.getColumn(i, "EMP_NAME"));
        			this.ds_to.setColumn(nRow, "EMAIL", this.parent.dsInput.getColumn(i, "EMAIL"));
        		}
        	}

        	var objWB = this.wb_WebEditor;
        	var strEditorKind = "A";
        	commWebEditor.gfnCreateWebEditor(objWB, this.strHtml, strEditorKind);
        }

        this.fnAddReceiver = function(objDs,objEdit)
        {
        	var nRow;

        	if(this.fnCheckAddress(objEdit.value))
        	{
        		if(objDs.findRow("EMAIL", objEdit.value) == -1){
        			nRow = objDs.addRow();
        			objDs.setColumn(nRow, "NAME", "-");
        			objDs.setColumn(nRow, "EMAIL", objEdit.value);
        		}
        	}
        	objEdit.set_value("");
        }

        this.fnCheckAddress = function(eMail)
        {
        	var reg_email = new RegExp(/^[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[@]{1}[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[.]{1}[A-Za-z]{2,5}$/);

        	if(reg_email.test(eMail))
        		return true;
        	else
        		alert("올바른 이메일 주소를 입력하여 주십시오.");

        	return false;
        }

        //유효성 체크 - 제목x//내용ok//발신자x//받는사람ok//참조x//숨은참조x
        this.fnCheckValidation = function()
        {
        	if(this.ds_to.rowcount < 1)
        	{
        		alert("받는 사람을 선택해 주세요.");
        		return false; //받는사람
        	}
        	else if(this.gfnIsEmpty(this.strHtml))
        	{
        		alert("내용을 입력해 주세요.");
        		return false; //내용ok
        	}

        	alert("이메일을 발송합니다.");

        	return true;
        }

        this.fnIsDuplicate = function(fromDs, toDs)
        {
        	var nRow;

        	for(var j = 0 ; j < fromDs.rowcount ; j++)
        	{
        		nRow = toDs.findRow("EMP_NO", fromDs.getColumn(j,"EMP_NO"));
        		if( nRow == -1 )
        		{
        			nRow = toDs.addRow();
        			toDs.copyRow(nRow, fromDs, j);
        			toDs.setColumn(nRow, "EMP_NO", fromDs.getColumn(j, "DEPT_CD"));
        		}
        	}
        }

        this.fnSendEmail = function()
        {
        	var arrEmailInfo = new Array();

        	/* TO 설정 */
        	arrEmailInfo[0] = {};
        	arrEmailInfo[0].pvType = "TO";
        	arrEmailInfo[0].pvUserKind = "BASE";
        	arrEmailInfo[0].pvUserCode = this.ds_to;

        	/* CC 설정 */
        	arrEmailInfo[1] = {};
        	arrEmailInfo[1].pvType = "CC";
        	arrEmailInfo[1].pvUserKind = "BASE";
        	arrEmailInfo[1].pvUserCode = this.ds_cc;

        	/* BCC 설정 */
        	arrEmailInfo[2] = {};
        	arrEmailInfo[2].pvType = "BCC";
        	arrEmailInfo[2].pvUserKind = "BASE";
        	arrEmailInfo[2].pvUserCode = this.ds_bcc;

        	this.gfnAddEmailList(arrEmailInfo);

        	var sTitle = "";
        	if (!this.gfnIsEmpty(this.edt_Title.value)) sTitle=this.edt_Title.value;
        		this.gfnSendEmail ("SendEmail", "APPOINT", this.edt_Email.value, sTitle, this.strHtml);
        }


        this.fnCallBack = function (strSvcID, nErrorCode, strErrorMag)
        {
        	if(nErrorCode != 0)
        	{
        		return;
        	}
        	else
        	{
        		switch(strSvcID){
        		case "SendEmail" :
        			alert("Email발송완료");
        			this.close();
        			break;
        		}
        	}
        }

        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fnPopupCallBack = function (popupId, popupArg)
        {
        	popupArg = this.commUtil.popupReturn();
        	if(!this.gfnIsEmpty(popupArg))
        	{
        		switch(popupId){
        		case "popOrganization":
        			var sToType, sEmailValidation;

        			//popupArg의 데이터 기반 Dataset생성
        			var ds = new Dataset();
        			ds.loadXML(popupArg);

        			//중복체크
        			var fnChkValidation = function(dsTarget, row)
        			{
        				sEmailValidation = ds.getColumn(row, "EMAIL");
        				var nRow = dsTarget.findRow("EMAIL", sEmailValidation);

        				if(nRow == -1)
        				{
        					var nRow = dsTarget.addRow();
        					dsTarget.setColumn(nRow, "NAME", ds.getColumn(row, "EMP_NM"));
        					dsTarget.setColumn(nRow, "EMAIL", ds.getColumn(row, "EMAIL"));
        				}
        			}

        			for(var i = 0; i<ds.rowcount; i++)
        			{
        				sToType = ds.getColumn(i, "TO_TYPE");

        				//TO_TYPE에 따라 분기 : Dataset 생성
        				if(sToType == "TO")
        				{
        					fnChkValidation(this.ds_to, i);
        				}
        				else if(sToType== "CC")
        				{
        					fnChkValidation(this.ds_cc, i);
        				}
        				else if(sToType == "BCC")
        				{
        					fnChkValidation(this.ds_bcc, i);
        				}
        			}
        			break;
        		}
        	}
        }

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.comm_Click = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_InputEmailByReceiverPlus" :
        			this.fnAddReceiver(this.ds_to, this.edt_InputEmailByReceiver);
        			break;
        		case "btn_EmailReferencePlus" :
        			this.fnAddReceiver(this.ds_cc, this.edt_EmailReference);
        			break;
        		case "btn_EmailHideReferencePlus" :
        			this.fnAddReceiver(this.ds_bcc, this.edt_EmailHideReference);
        			break;
        		case "btn_InputEmailByReceiverMinus" :
        			this.ds_to.deleteRow(this.ds_to.rowposition);
        			break;
        		case "btn_EmailReferenceMinus" :
        			this.ds_cc.deleteRow(this.ds_cc.rowposition);
        			break;
        		case "btn_EmailHideReferenceMinus" :
        			this.ds_bcc.deleteRow(this.ds_bcc.rowposition);
        			break;
        		case "btn_Send" :
        			var objWB = this.wb_WebEditor;
        			this.strHtml = commWebEditor.gfnGetContents(objWB);

        			if(this.fnCheckValidation()) {
        				if(this.confirm("Email 발송하시겠습니까?")) {
        					this.fnSendEmail();
        				}
        			}

        			break;
        		case "btn_Close" :
        			this.close();
        			break;
        		case "btn_RecentSendList" :
        			this.pdiv_RecentSendList.trackPopup();
        			break;
        		case "btn_SelectReceiver" :
        			this.commUtil.popupOrganization(this, "popOrganization", "fnPopupCallBack", "EMAIL", null, "1");
        			break;
        	}
        };

        this.comm_Keydown = function(obj,e)
        {
        	if(e.keycode == 13) {
        		switch(obj.name)
        		{
        			case "edt_InputEmailByReceiver" :
        				this.fnAddReceiver(this.ds_to, this.edt_InputEmailByReceiver);
        				break;
        			case "edt_EmailReference" :
        				this.fnAddReceiver(this.ds_cc, this.edt_EmailReference);
        				break;
        			case "edt_EmailHideReference" :
        				this.fnAddReceiver(this.ds_bcc, this.edt_EmailHideReference);
        				break;
        		}
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CE_EMailSend_onload,this);
            this.btn_Send.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Close.addEventHandler("onclick",this.comm_Click,this);
            this.btn_SelectReceiver.addEventHandler("onclick",this.comm_Click,this);
            this.edt_InputEmailByReceiver.addEventHandler("onkeydown",this.comm_Keydown,this);
            this.btn_InputEmailByReceiverPlus.addEventHandler("onclick",this.comm_Click,this);
            this.btn_InputEmailByReceiverMinus.addEventHandler("onclick",this.comm_Click,this);
            this.edt_EmailReference.addEventHandler("onkeydown",this.comm_Keydown,this);
            this.btn_EmailReferencePlus.addEventHandler("onclick",this.comm_Click,this);
            this.btn_EmailReferenceMinus.addEventHandler("onclick",this.comm_Click,this);
            this.btn_EmailHideReferenceMinus.addEventHandler("onclick",this.comm_Click,this);
            this.btn_EmailHideReferencePlus.addEventHandler("onclick",this.comm_Click,this);
            this.edt_EmailHideReference.addEventHandler("onkeydown",this.comm_Keydown,this);
            this.wb_WebEditor.addEventHandler("onloadcompleted",this.wb_WebEditor_onloadcompleted,this);
            this.wb_WebEditor.addEventHandler("onusernotify",this.wb_WebEditor_onusernotify,this);
        };
        this.loadIncludeScript("CE_EMailSend.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
