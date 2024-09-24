(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("orgUserListPu");
            this.set_titletext("사용자전체조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(510,590);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUser", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_REGNO\" type=\"undefined\" size=\"0\"/><Column id=\"APRV_SEQ\" type=\"int\" size=\"4\"/><Column id=\"USER_ID\" type=\"string\" size=\"32\"/><Column id=\"READ_COMMENT\" type=\"undefined\" size=\"0\"/><Column id=\"R_STATUS\" type=\"undefined\" size=\"0\"/><Column id=\"R_ORDER\" type=\"undefined\" size=\"0\"/><Column id=\"MAIL_URL\" type=\"undefined\" size=\"0\"/><Column id=\"INPT_DTTM\" type=\"undefined\" size=\"0\"/><Column id=\"EDIT_INFO\" type=\"undefined\" size=\"0\"/><Column id=\"DOC_ID\" type=\"string\" size=\"32\"/><Column id=\"PDF_FILE_NM\" type=\"undefined\" size=\"0\"/><Column id=\"WORK_NAME\" type=\"string\" size=\"32\"/><Column id=\"FORMER_ID\" type=\"string\" size=\"32\"/><Column id=\"USER_MAILADDR\" type=\"string\" size=\"32\"/><Column id=\"FORMER_YN\" type=\"string\" size=\"32\"/><Column id=\"FORMER_NAME\" type=\"string\" size=\"32\"/><Column id=\"USER_NAME\" type=\"string\" size=\"32\"/><Column id=\"MAILUSER_ID\" type=\"undefined\" size=\"0\"/><Column id=\"FORMER_ORDER\" type=\"int\" size=\"4\"/><Column id=\"M_STATUS\" type=\"undefined\" size=\"0\"/><Column id=\"CHGE_ID\" type=\"undefined\" size=\"0\"/><Column id=\"USER_PHONE\" type=\"string\" size=\"32\"/><Column id=\"COMP_NAME\" type=\"undefined\" size=\"0\"/><Column id=\"READ_STATUS\" type=\"undefined\" size=\"0\"/><Column id=\"USER_TYPE\" type=\"undefined\" size=\"0\"/><Column id=\"PDF_ORIG_FILE_NM\" type=\"undefined\" size=\"0\"/><Column id=\"PDF_FILE_PATH_NM\" type=\"undefined\" size=\"0\"/><Column id=\"INPT_ID\" type=\"undefined\" size=\"0\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsResultCode00", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"NAME\">진행중</Col></Row><Row><Col id=\"NAME\">완료</Col><Col id=\"CODE\">Z</Col></Row><Row><Col id=\"NAME\">반송</Col><Col id=\"CODE\">R</Col></Row><Row><Col id=\"CODE\">P</Col><Col id=\"NAME\">열람중</Col></Row><Row><Col id=\"CODE\"/><Col id=\"NAME\">진행중</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","25.00","8",null,"43","25",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("열람상태");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"50","28","20","20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Grid("grdUser","20","60",null,null,"20","60",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsUser");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_LF_searchResult");
            obj.set_border("1px solid #f1f1f1");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"56\"/><Column size=\"314\"/><Column size=\"100\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"36\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"참석자\"/><Cell col=\"2\" text=\"열람상태\"/></Band><Band id=\"body\"><Cell expr=\"USER_NAME.substr(0,1)\" cssclass=\"expr:dataset.parent.fnCssName(currow)\" textAlign=\"center\"/><Cell col=\"1\" expr=\"USER_NAME + &apos; &apos; + WORK_NAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:READ_STATUS\" displaytype=\"combotext\" combodataset=\"dsResultCode00\" combocodecol=\"CODE\" combodatacol=\"NAME\" textAlign=\"center\" cssclass=\"expr:READ_STATUS==&apos;R&apos;?&apos;reject&apos;:&apos;&apos;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",510,590,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("mtgReadStatusPu.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	orgUserListPu.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/06/28
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/06/28			TOBESOFT					최초생성
        * 2022/10/18			TOBESOFT					재직상태추가
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

        	this.dsCond.setColumn(0, "DOC_ID", this.getOwnerFrame().pvDocId);
        	this.cfnSearch();
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *****************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	this.fnMeetUserSearch();
        };

        /**
        * @function fnReadUserSearch  <br>
        * description 열람가능 사용자조회
        */
        this.fnMeetUserSearch = function (v)
        {
        	this.gfnSetMap("meet", "MeetUserList");

        	var strSvcId    = "searchMeetUser";
        	var strSvcUrl   = "searchCommonBaseService.do";
        	var inData      = "dsCond=dsCond dsMap=dsMap";
        	var outData     = "dsUser=dsList";
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
        		case "searchMeetUser":
        			break;
        		default:break;
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnClose = function (nRow)
        {
        	this.close();
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/

        this.fnCssName = function(currow)
        {
        	var mod = currow%10;
        	return "lv" + mod;
        };
        this.grdUser_oncelldblclick = function(obj,e)
        {

        };

        this.grdUser_oncellclick = function(obj,e)
        {
        	if(e.col == 2) {
        		var rStatus =this.dsUser.getColumn(e.row, "READ_STATUS");
        		if(rStatus == "R") {
        			var sTitle  = "회의록열람";
        			var oArg    = { pvDocId:		this.getOwnerFrame().pvDocId,
        							pvSysCode:	this.getOwnerFrame().pvSysCode,
        							pvBizCode:	this.getOwnerFrame().pvBizCode,
        							pvPage:	this.getOwnerFrame().pvPage,
        							pvUserId:	this.dsUser.getColumn(this.dsUser.rowposition, "USER_ID")
        						  };
        			var oOption = {title:sTitle , titlebar:true};
        			var sPopupCallBack = "fnPopupCallback";
        			this.gfnOpenPopup("mtgReadRejectPu", "meet::mtgReadRejectPu.xfdl", oArg, sPopupCallBack, oOption);
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnClose.addEventHandler("onclick",this.fnClose,this);
            this.grdUser.addEventHandler("oncellclick",this.grdUser_oncellclick,this);
        };
        this.loadIncludeScript("mtgReadStatusPu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
