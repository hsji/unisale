(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("bizBoardReadPopup");
            this.set_titletext("게시판 조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(950,700);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsReplyPopupMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"ACTION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ACTION\">수정</Col></Row><Row><Col id=\"ACTION\">삭제</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"BOARD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"NOTI_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"INPT_EMP_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFile", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReply", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fdtFile", this);
            obj.set_url("svcUrl::fileDownload.do");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staBoardTitle","25","0","118","43","807",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("사용자 리스트");
            obj.set_cssclass("sta_WF_Title");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("divContents","25","staBoardTitle:0",null,"589","25",null,null,null,"589",null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle000","0","0","83","38",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("0");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_Label");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staTitle001","0","37","83","38",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("1");
            obj.set_text("작성자");
            obj.set_cssclass("sta_WF_Label");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staTitle002","0","74","83","38",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("2");
            obj.set_text("조회수");
            obj.set_cssclass("sta_WF_Label");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staTitle","staTitle000:-1","0",null,"38","0",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staInpId","staTitle001:-1","37",null,"38","450",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staInqCnt","staTitle002:-1","74",null,"38","450",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staTitle003","staInpId:-1","37","83","38",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("6");
            obj.set_text("작성일");
            obj.set_cssclass("sta_WF_Label");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staTitle004","staInqCnt:-1","74","83","38",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("7");
            obj.set_text("댓글수");
            obj.set_cssclass("sta_WF_Label");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staInpDttm","staTitle003:-1","37",null,"38","0",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staReplyCnt","staTitle004:-1","74",null,"38","0",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("divCont","0","111",null,"350","0",null,null,null,"350",null,this.divContents.form);
            obj.set_taborder("10");
            obj.set_text("div00");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staBg000","0","0",null,null,"0","0",null,null,null,null,this.divContents.form.divCont.form);
            obj.set_taborder("1");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divContents.form.divCont.addChild(obj.name, obj);

            obj = new Static("staTitle000","0","0","83",null,null,"0",null,null,null,null,this.divContents.form.divCont.form);
            obj.set_taborder("0");
            obj.set_text("내용");
            obj.set_cssclass("sta_WF_Label");
            this.divContents.form.divCont.addChild(obj.name, obj);

            obj = new WebBrowser("webEditor","staTitle000:4","5",null,null,"5","5",null,null,null,null,this.divContents.form.divCont.form);
            obj.set_taborder("2");
            this.divContents.form.divCont.addChild(obj.name, obj);

            obj = new Div("divFile","0","divCont:-1",null,"44","0",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("11");
            obj.set_text("div00");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staBg000","0","0",null,null,"0","0",null,null,null,null,this.divContents.form.divFile.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_usedecorate("true");
            obj.set_visible("true");
            obj.set_text("");
            this.divContents.form.divFile.addChild(obj.name, obj);

            obj = new Static("staTitle000","0","0","83",null,null,"0",null,null,null,null,this.divContents.form.divFile.form);
            obj.set_taborder("1");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_WF_Label");
            this.divContents.form.divFile.addChild(obj.name, obj);

            obj = new Grid("grdFile","staTitle000:4","5",null,null,"5","5",null,null,null,null,this.divContents.form.divFile.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsFile");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_MF_Notice");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"450\"/><Column size=\"100\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell text=\"bind:OTXT_FILE_NM\"/><Cell col=\"1\" text=\"다운로드\" displaytype=\"buttoncontrol\" edittype=\"button\"/></Band></Format></Formats>");
            this.divContents.form.divFile.addChild(obj.name, obj);

            obj = new Div("divReply","0","divFile:-1",null,"182","0",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("12");
            obj.set_text("div00");
            this.divContents.addChild(obj.name, obj);

            obj = new Static("staReplyTitle","0","0",null,"43","0",null,null,null,null,null,this.divContents.form.divReply.form);
            obj.set_taborder("0");
            obj.set_text("댓글");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divContents.form.divReply.addChild(obj.name, obj);

            obj = new Grid("grdReplyList","0","staReplyTitle:0",null,"1","0",null,null,null,null,null,this.divContents.form.divReply.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsReply");
            obj.set_autofittype("col");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("row");
            obj.set_nodatatext("등록된 댓글이 없습니다.");
            obj.getSetter("uFunction").set("!nodata");
            obj.set_cssclass("grd_WF_Comment");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"657\"/><Column size=\"30\"/><Column size=\"30\"/></Columns><Rows><Row size=\"20\"/><Row size=\"24\"/><Row size=\"20\"/></Rows><Band id=\"body\"><Cell colspan=\"2\" text=\"bind:INPT_EMP_NO\" cssclass=\"cell_WF_Id\"/><Cell col=\"2\" edittype=\"expr:(INPT_ID==dataset.parent.fvLoginUser||dataset.parent.fvMgrCd==dataset.parent.fvLoginUser)?&apos;button&apos;:&apos;none&apos;\" cssclass=\"expr:(INPT_ID==dataset.parent.fvLoginUser||dataset.parent.fvMgrCd==dataset.parent.fvLoginUser)?&apos;cell_WF_MoreBtn&apos;:&apos;&apos;\" displaytype=\"expr:(INPT_ID==dataset.parent.fvLoginUser||dataset.parent.fvMgrCd==dataset.parent.fvLoginUser)?&apos;buttoncontrol&apos;:&apos;none&apos;\"/><Cell row=\"1\" text=\"bind:REPLY_CNTN\" displaytype=\"expr:STATUS==&apos;update&apos;?&apos;textareacontrol&apos;:&apos;normal&apos;\" wordWrap=\"char\" textAlign=\"left\" edittype=\"expr:STATUS==&apos;update&apos;?&apos;textarea&apos;:&apos;none&apos;\" textareaacceptsenter=\"true\" textareaautoselect=\"true\"/><Cell row=\"1\" col=\"1\" displaytype=\"expr:STATUS==&apos;update&apos;?&apos;buttoncontrol&apos;:&apos;none&apos;\" edittype=\"expr:STATUS==&apos;update&apos;?&apos;button&apos;:&apos;none&apos;\" text=\"expr:STATUS==&apos;update&apos;?&apos;취소&apos;:&apos;&apos;\"/><Cell row=\"1\" col=\"2\" text=\"expr:STATUS==&apos;update&apos;?&apos;저장&apos;:&apos;&apos;\" displaytype=\"expr:STATUS==&apos;update&apos;?&apos;buttoncontrol&apos;:&apos;none&apos;\" edittype=\"expr:STATUS==&apos;update&apos;?&apos;button&apos;:&apos;none&apos;\"/><Cell row=\"2\" colspan=\"3\" text=\"bind:CHGE_DTTM\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd HH:mm\" cssclass=\"cell_WF_Line\" calendareditformat=\"yyyy-MM-dd HH:mm\" textAlign=\"left\"/></Band></Format></Formats>");
            this.divContents.form.divReply.addChild(obj.name, obj);

            obj = new Div("divInputReply","0","grdReplyList:0",null,"138","0",null,null,null,null,null,this.divContents.form.divReply.form);
            obj.set_taborder("2");
            this.divContents.form.divReply.addChild(obj.name, obj);

            obj = new Static("staInputReplyBg","0","0",null,null,"0","0",null,null,null,null,this.divContents.form.divReply.form.divInputReply.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_GBg01");
            this.divContents.form.divReply.form.divInputReply.addChild(obj.name, obj);

            obj = new Static("staUserNm","20","10",null,"28","118",null,null,null,null,null,this.divContents.form.divReply.form.divInputReply.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Comment");
            obj.set_text("");
            this.divContents.form.divReply.form.divInputReply.addChild(obj.name, obj);

            obj = new TextArea("txaReply","20","staUserNm:10",null,"70","20",null,null,null,null,null,this.divContents.form.divReply.form.divInputReply.form);
            obj.set_taborder("1");
            this.divContents.form.divReply.form.divInputReply.addChild(obj.name, obj);

            obj = new Button("btnAddReply",null,"11","88","28","20",null,null,null,null,null,this.divContents.form.divReply.form.divInputReply.form);
            obj.set_taborder("2");
            obj.set_text("댓글 등록");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Re");
            this.divContents.form.divReply.form.divInputReply.addChild(obj.name, obj);

            obj = new PopupDiv("pdivReplyUpdate",null,"5","71","57","218",null,null,null,null,null,this.divContents.form.divReply.form);
            obj.set_visible("false");
            obj.set_cssclass("pdiv_WF_List");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.divContents.form.divReply.addChild(obj.name, obj);

            obj = new Grid("grdReplyUpdate","0","0",null,null,"0","0",null,null,null,null,this.divContents.form.divReply.form.pdivReplyUpdate.form);
            obj.set_taborder("0");
            obj.set_cssclass("grd_WF_List");
            obj.set_binddataset("dsReplyPopupMenu");
            obj.set_autofittype("col");
            obj.set_scrollbartype("none none");
            obj.set_scrolltype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"70\"/></Columns><Rows><Row size=\"28\"/></Rows><Band id=\"body\"><Cell text=\"bind:ACTION\"/></Band></Format></Formats>");
            this.divContents.form.divReply.form.pdivReplyUpdate.addChild(obj.name, obj);

            obj = new Div("divBtn",null,"divContents:20","237","28","25",null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"0","50","28","0",null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("0");
            obj.set_text("닫기");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","69","28","btnClose:3",null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CrudDelete");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btnModi",null,"0","69","28","btnDelete:3",null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("2");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_CrudModify");
            this.divBtn.addChild(obj.name, obj);

            obj = new Button("btnRepl",null,"0","50","28","btnModi:3",null,null,null,null,null,this.divBtn.form);
            obj.set_taborder("3");
            obj.set_text("답글");
            obj.set_cssclass("btn_WF_Crud");
            this.divBtn.addChild(obj.name, obj);

            obj = new Static("staBottom","0","divBtn:0",null,"20","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Div("divBtn00",null,"7","237","28","25",null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"0","50","28","0",null,null,null,null,null,this.divBtn00.form);
            obj.set_taborder("0");
            obj.set_text("닫기");
            this.divBtn00.addChild(obj.name, obj);

            obj = new Button("btnDelete",null,"0","69","28","btnClose:3",null,null,null,null,null,this.divBtn00.form);
            obj.set_taborder("1");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CrudDelete");
            this.divBtn00.addChild(obj.name, obj);

            obj = new Button("btnModi",null,"0","69","28","btnDelete:3",null,null,null,null,null,this.divBtn00.form);
            obj.set_taborder("2");
            obj.set_text("수정");
            obj.set_cssclass("btn_WF_CrudModify");
            this.divBtn00.addChild(obj.name, obj);

            obj = new Button("btnRepl",null,"0","50","28","btnModi:3",null,null,null,null,null,this.divBtn00.form);
            obj.set_taborder("3");
            obj.set_text("답글");
            obj.set_cssclass("btn_WF_Crud");
            this.divBtn00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divContents.form.divCont.form
            obj = new Layout("default","",0,0,this.divContents.form.divCont.form,function(p){});
            this.divContents.form.divCont.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form.divFile.form
            obj = new Layout("default","",0,0,this.divContents.form.divFile.form,function(p){});
            this.divContents.form.divFile.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form.divReply.form.divInputReply.form
            obj = new Layout("default","",0,0,this.divContents.form.divReply.form.divInputReply.form,function(p){});
            this.divContents.form.divReply.form.divInputReply.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form.divReply.form.pdivReplyUpdate.form
            obj = new Layout("default","",0,0,this.divContents.form.divReply.form.pdivReplyUpdate.form,function(p){});
            this.divContents.form.divReply.form.pdivReplyUpdate.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form.divReply.form
            obj = new Layout("default","",0,0,this.divContents.form.divReply.form,function(p){});
            this.divContents.form.divReply.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form
            obj = new Layout("default","",0,0,this.divContents.form,function(p){});
            this.divContents.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBtn.form
            obj = new Layout("default","",0,0,this.divBtn.form,function(p){});
            this.divBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divBtn00.form
            obj = new Layout("default","",0,0,this.divBtn00.form,function(p){});
            this.divBtn00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",950,700,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divContents.form.staTitle","text","dsList","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divContents.form.staInpId","text","dsList","INPT_EMP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divContents.form.staInqCnt","text","dsList","INQ_CNT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divContents.form.staReplyCnt","text","dsList","REPLY_CNT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("boardReadPu.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	bizBoardReadPopup.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/03/09
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/03/09			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvAnswYn   = ""; //답변유무
        this.fvApndYn   = ""; //첨부파일유무
        this.fvReplyYn  = ""; //리플유무
        this.fvTitle    = ""; //게시판타이틀
        this.fvBoardCd  = ""; //게시판코드
        this.fvNotiNo   = ""; //게시물번호
        this.fvOpenType = ""; //오픈타입
        this.fvLoginUser = ""; //로그인유저ID
        this.fvLoginUserEmpNo = "";//로그인유저EMP_NO
        this.fvMgrCd	 = ""; //관리자 ID
        this.fvReplyGridMinHeight = 0;	// 댓글 그리드의 최소 높이
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	this.fvAnswYn   = this.getOwnerFrame().pvAnswYn; //답변유무
        	this.fvApndYn   = this.getOwnerFrame().pvApndYn; //첨부파일유무
        	this.fvReplyYn  = this.getOwnerFrame().pvReplyYn; //리플유무
        	this.fvTitle    = this.getOwnerFrame().pvTitle; //게시판타이틀
        	this.fvBoardCd  = this.getOwnerFrame().pvBoardCd; //게시판코드
        	this.fvNotiNo   = this.getOwnerFrame().pvNotiNo; //게시물번호
        	this.fvOpenType = this.getOwnerFrame().pvOpenType; //오픈타입
        	this.fvLoginUser = nexacro.getApplication().gdsUser.getColumn(0, "USER_ID");
        	this.fvLoginUserEmpNo = nexacro.getApplication().gdsUser.getColumn(0,"USER_NAME")
        							+"(" + nexacro.getApplication().gdsUser.getColumn(0, "EMP_NO")+ ")";
        	this.fvMgrCd	= this.getOwnerFrame().pvMgrCd; //관리자20210629 추가

        	//타이틀설정
        	this.staBoardTitle.set_text(this.fvTitle+" ");
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
        	this.dsCond.setColumn(nRow, "BOARD_CD", this.fvBoardCd);
        	this.dsCond.setColumn(nRow, "NOTI_NO", this.fvNotiNo);

        	var strSvcId    = "searchBoardContentDetail";
        	var strSvcUrl   = "searchBoardContentDetail.do";
        	var inData      = "dsCond=dsCond";
        	var outData     = "dsList=dsList dsFile=dsFile dsReply=dsReply";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        //삭제
        this.fnTranDelete = function ()
        {
        	var strSvcId    = "delete";
        	var strSvcUrl   = "saveBoardContents.do";
        	var inData      = "dsList=dsList:A";
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

        //댓글조회
        this.fnTranSearchReply = function ()
        {
        	var strSvcId    = "searchReplyList";
        	var strSvcUrl   = "searchReplyList.do";
        	var inData      = "dsCond=dsCond";
        	var outData     = "dsReply=dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        // 댓글 추가/삭제/수정
        this.fnTranSaveReply = function(sAction)
        {
        	var strSvcId = "";

        	if (sAction == "add") {
        		strSvcId = "addReply";
        	} else if (sAction == "update") {
        		strSvcId = "updateReply";
        	} else if (sAction == "delete") {
        		strSvcId = "deleteReply";
        	}

        	var strSvcUrl   = "saveReply.do";
        	var inData      = "dsList=dsReply:U";
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
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "searchBoardContentDetail":
        			this.fnSetFormInit();
        			break;
        		case "delete":
        			this.gfnAlert("msg.delete.success", [], "deleteAfter", "fnMsgCallback");
        			break;
        		case "addReply":
        			// 댓글창 초기화
        			this.divContents.form.divReply.form.divInputReply.form.txaReply.set_value("");
        			// 댓글 재조회
        			this.fnTranSearchReply();
        			break;
        		case "updateReply":
        			this.fvReplyRowPos = -1;
        			// 댓글 재조회
        			this.fnTranSearchReply();
        			break;
        		case "deleteReply":
        			this.fvReplyRowPos = -1;
        			// 댓글 재조회
        			this.fnTranSearchReply();
        			break;
        		case "searchReplyList":
        			this.divContents.form.divReply.form.grdReplyList.set_enableevent(true);
        			this.divContents.form.divReply.form.grdReplyList.set_enableredraw(true);

        			this.divContents.form.divReply.form.grdReplyList.set_autosizingtype("none");
        			this.divContents.form.divReply.form.grdReplyList.set_autosizingtype("row");

        			// 댓글 그리드 높이 가변 설정
        			this.fnSetReplySize();
        			break;
        		default:
        			break;
        	}
        };

        //message
        this.fnMsgCallback = function (sMsgId, sRtn)
        {
        	switch(sMsgId) {
        		case "delete":
        			if(sRtn=="false" || sRtn==false || this.gfnIsNull(sRtn)){
        				return;
        			}
        			this.dsList.setColumn(0, "STATUS", "delete");
        			this.fnTranDelete();
        			break;
        		case "deleteReply":
        			if(sRtn=="false" ||sRtn==false || this.gfnIsNull(sRtn)){
        				return;
        			}
        			this.dsReply.setColumn(this.fvReplyRowPos, "STATUS", "delete");
        			this.fnTranSaveReply("delete");
        			break;
        		case "editReplyCancel":
        			if(sRtn=="false" ||sRtn==false || this.gfnIsNull(sRtn)){
        				return;
        			}

        			// 댓글 수정상태를 일반상태로 복귀
        			var nFindRow = this.dsReply.findRow("STATUS", "update");

        			this.dsReply.reset();
        			this.divContents.form.divReply.form.grdReplyList.redrawExprCell();

        			// 댓글 그리드 높이 가변 설정
        			this.divContents.form.divReply.form.grdReplyList.autoSizeRow(nFindRow);

        			// 댓글 수정상태로 변경
        			this.fnSetReplyUpdateStatus();
        			break;
        		case "deleteAfter":
        			if (sRtn)
        			{
        				this.close();
        			}
        	}
        };

        //popup
        this.fnPopupCallback = function (sPopupId, sRtn)
        {
        	switch(sPopupId) {
        		case "addBoardRepl":
        			this.close();
        			break;
        		case "updateBoard":
        			this.fnGetContentsTran();
        			break;
        		default:break;
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnSetFormInit = function ()
        {

        	// HTML Viewer를 생성
        	var oWeb = this.divContents.form.divCont.form.webEditor;
        	this.gfnCreateHtmlViewer(oWeb);

        	// 작성일시 셋팅
        	var sInputDate = this.dsList.getColumn(0, "INPT_DTTM").toString();
        	sInputDate = sInputDate.substr(0,4) + "-" + sInputDate.substr(4,2) + "-" + sInputDate.substr(6,2) + " "
        	           + sInputDate.substr(8,2) + ":" + sInputDate.substr(10,2)+ ":" + sInputDate.substr(12,2);
        	this.divContents.form.staInpDttm.set_text(sInputDate);

        	//리플작성자세팅
        	this.divContents.form.divReply.form.divInputReply.form.staUserNm.set_text(this.fvLoginUserEmpNo);

        	//사이징처리
        	//첨부파일&리플 둘다 사용안할 경우
        	if( this.fvApndYn =="0" && this.fvReplyYn=="0"){
        		this.divContents.set_bottom(68);
        		this.divContents.form.divReply.set_height(0);
        		this.divContents.form.divFile.set_height(0);
        		this.divContents.form.divCont.set_bottom(0);
        		this.divContents.form.resetScroll();
        		this.resetScroll();
        	}else{
        		var nApndSize  = this.fnGetApndSize();
        		var nReplySize = this.fnGetReplySize();

        		this.divContents.form.divReply.set_height(nReplySize);
        		this.divContents.form.divFile.set_height(nApndSize);
        		this.divContents.form.resetScroll();

        		var nTotal = 0;
        		if(this.fvReplyYn =="1"){
        			nTotal = this.divContents.form.divReply.getOffsetBottom();
        		}else if(this.fvReplyYn=="0"){
        			nTotal = this.divContents.form.divFile.getOffsetBottom();
        			if( nTotal < this.divContents.getOffsetHeight()){
        				var nTerm = this.divContents.getOffsetHeight() - nTotal;
        				this.divContents.form.divCont.set_height(nTerm+this.divContents.form.divCont.getOffsetHeight());
        				this.divContents.form.resetScroll();
        			}
        		}
        		this.divContents.set_height(nTotal);
        		this.resetScroll();
        	}
        	this.divContents.set_visible(true);

        	//답변 사용안함
        	if(this.fvAnswYn=="0"){
        		this.divBtn.form.btnRepl.set_visible(false);
        		this.divBtn.form.btnRepl.set_width(0);

        		//2022.03.11 팝업 상단 divBtn00 생성
        		this.divBtn00.form.btnRepl.set_visible(false);
        		this.divBtn00.form.btnRepl.set_width(0);
        	}else{
        		this.divBtn.form.btnRepl.set_visible(true);
        		this.divBtn.form.btnRepl.set_width(50);

        		//2022.03.11 팝업 상단 divBtn00 생성
        		this.divBtn00.form.btnRepl.set_visible(true);
        		this.divBtn00.form.btnRepl.set_width(50);
        	}

        	//user확인 수정/삭제 버튼
        	var sInputUser = this.dsList.getColumn(0,"INPT_ID");
        	if( this.fvLoginUser == sInputUser || this.fvMgrCd == this.fvLoginUser){
        		this.divBtn.form.btnModi.set_visible(true);
        		this.divBtn.form.btnDelete.set_visible(true);
        		this.divBtn.form.btnModi.set_width(50);
        		this.divBtn.form.btnDelete.set_width(69);

        		this.divBtn.form.btnRepl.set_right("btnModi:3");

        		//2022.03.11 팝업 상단 divBtn00 생성
        		this.divBtn00.form.btnModi.set_visible(true);
        		this.divBtn00.form.btnDelete.set_visible(true);
        		this.divBtn00.form.btnModi.set_width(50);
        		this.divBtn00.form.btnDelete.set_width(69);
        		this.divBtn00.form.btnRepl.set_right("btnModi:3");
        	}else{
        		this.divBtn.form.btnModi.set_visible(false);
        		this.divBtn.form.btnDelete.set_visible(false);
        		this.divBtn.form.btnModi.set_width(0);
        		this.divBtn.form.btnDelete.set_width(0);

        		this.divBtn.form.btnRepl.set_right("btnClose:3");

        		//2022.03.11 팝업 상단 divBtn00 생성
        		this.divBtn00.form.btnModi.set_visible(false);
        		this.divBtn00.form.btnDelete.set_visible(false);
        		this.divBtn00.form.btnModi.set_width(0);
        		this.divBtn00.form.btnDelete.set_width(0);
        		this.divBtn00.form.btnRepl.set_right("btnClose:3");
        	}

        	this.divBtn.form.resetScroll();
        };


        //첨부파일 사이즈 조정
        this.fnGetApndSize = function ()
        {
        	var nApndSize = 0;
        	if( this.fvApndYn=="1" ){
        		var nRowCnt = this.dsFile.getRowCount();
        		if(nRowCnt == 0 ) nRowCnt = 1;
        		nApndSize = ( 32 * nRowCnt ) + 12;
        	}
        	return nApndSize;
        };

        //리플영역 사이즈 조절
        this.fnGetReplySize = function ()
        {
        	var nReplySize = 0;
        	if( this.fvReplyYn == "1"){
        		var nReplyGridHeight = 0; // 그리드 높이
        		if (this.dsReply.getRowCount() > 0) {
        			nReplyGridHeight = this.divContents.form.divReply.form.grdReplyList.getRealRowFullSize("body");
        		} else {
        			nReplyGridHeight = this.fvReplyGridMinHeight;
        		}
        		// 댓글 그리드 높이 설정
        		this.divContents.form.divReply.form.grdReplyList.setOffsetHeight(nReplyGridHeight + 2);
        		this.divContents.form.divReply.form.resetScroll();
        		nReplySize = nReplyGridHeight + 2 + this.divContents.form.divReply.form.divInputReply.getOffsetHeight() + 48;
        	}
        	return nReplySize;
        };


        //댓글창 높이조절
        this.fnSetReplySize = function ()
        {
        	var nReplySize = this.fnGetReplySize();
        	this.divContents.form.divReply.set_height(nReplySize);
        	this.divContents.form.resetScroll();
        	var nTotal = this.divContents.form.divReply.getOffsetBottom();
        	this.divContents.set_height(nTotal);
        	this.resetScroll();
        };

        // 댓글 수정상태로 변경
        this.fnSetReplyUpdateStatus = function()
        {
        	this.dsReply.setColumn(this.fvReplyRowPos, "STATUS", "update");
        	this.divContents.form.divReply.form.grdReplyList.setRealRowSize(this.fvReplyRowPos, 70, 1);

        	this.divContents.form.divReply.form.pdivReplyUpdate.closePopup();

        	// 댓글 그리드 높이 가변 설정
        	this.fnSetReplySize();
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        //웹에디터
        this.divContents_divCont_webEditor_onloadcompleted = function(obj,e)
        {
        	//내용세팅
        	var sContents = this.dsList.getColumn(0, "CNTN");
        	var oWeb = this.divContents.form.divCont.form.webEditor;
        	this.gfnSetHtmlView(oWeb, sContents);
        };

        //닫기버튼
        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        //답글버튼
        this.divBtn_btnRepl_onclick = function(obj,e)
        {
        	var sTitle = "게시글";
        	var oOption = {title:sTitle
        					,titlebar:true};

        	//게시판추가
        	var popupId = "addBoardRepl";
        	var oArg   = { pvApndYn		: this.fvApndYn
        				  ,pvTitle 		: this.fvTitle
        				  ,pvInputId	: nexacro.getApplication().gdsUser.getColumn(0, "USER_ID")
        				  ,pvInputEmpNo : nexacro.getApplication().gdsUser.getColumn(0, "EMP_NO")
        				  ,pvContTitle	: "└ Re : " + this.dsList.getColumn(0, "TITLE")
        				  ,pvBoardCd	: this.dsList.getColumn(0, "BLBD_CD")
        				  ,pvOpenType	: "add"
        				  ,pvHrank		: this.dsList.getColumn(0, "NOTI_NO")
        				  ,pvAnswLvl    : this.dsList.getColumn(0, "ANSW_LEVL") + 1
        			  };
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup(popupId, "comm::board/boardPu.xfdl", oArg, sPopupCallBack, oOption);
        };

        //수정버튼
        this.divBtn_btnModi_onclick = function(obj,e)
        {
        	var sTitle = "게시글";
        	var oOption = {title:sTitle
        					,titlebar:true};

        	//게시판추가
        	var popupId = "updateBoard";
        	var oArg   = { pvApndYn		: this.fvApndYn
        				  ,pvTitle 		: this.fvTitle
        				  ,pvFile		: this.dsFile
        				  ,pvList       : this.dsList
        				  ,pvOpenType   : "update"
        			  };
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup(popupId, "comm::board/boardUpdatePu.xfdl", oArg, sPopupCallBack, oOption);
        };

        //삭제버튼
        this.divBtn_btnDelete_onclick = function(obj,e)
        {
        	this.gfnAlert("confirm.before.delete",[],"delete", "fnMsgCallback");
        };

        //답글등록버튼
        this.divContents_divReply_divInputReply_btnAddReply_onclick = function(obj,e)
        {
        	// 댓글 텍스트
        	var sReplyTxts = this.divContents.form.divReply.form.divInputReply.form.txaReply.value;

        	if (this.gfnIsNull(sReplyTxts)) {
        		this.gfnAlert("msg.err.validator.required", ["댓글 내용"]);
        	} else {
        		this.divContents.form.divReply.form.grdReplyList.set_enableevent(false);
        		this.divContents.form.divReply.form.grdReplyList.set_enableredraw(false);
        		var nRow = this.dsReply.addRow();

        		this.dsReply.setColumn(nRow, "STATUS", "add");
        		this.dsReply.setColumn(nRow, "BLBD_CD", this.fvBoardCd);
        		this.dsReply.setColumn(nRow, "NOTI_NO", this.fvNotiNo);
        		this.dsReply.setColumn(nRow, "REPLY_CNTN", this.divContents.form.divReply.form.divInputReply.form.txaReply.value);

        		// 댓글 추가
        		this.fnTranSaveReply("add");
        	}
        };

        //댓글그리드 클릭
        this.divCont_divReply_grdReplyList_oncellclick = function(obj,e)
        {
        	var sCellDisplyType = obj.getCellPropertyValue(e.row, e.cell, "edittype");
        	if (sCellDisplyType != "button") return;

        	this.fvReplyRowPos = obj.getDatasetRow(e.row);

        	// 댓글의 ... 버튼 클릭한 경우 수정/삭제 팝업메뉴 호출
        	if (e.cell == 1) {
        		var objPdivPopupMenu = this.divContents.form.divReply.form.pdivReplyUpdate;

        		this.dsReplyPopupMenu.set_rowposition(-1);

        		var arrPos = obj.getCellRect(e.row, e.cell);
        		var nx = nexacro.toNumber(arrPos.left);
        		var ny = nexacro.toNumber(arrPos.bottom);
        		nx = nx - objPdivPopupMenu.getOffsetWidth() + obj.getFormatColSize(1);

        		objPdivPopupMenu.trackPopupByComponent(obj, nx, ny);
        	// 댓글 수정 상태에서 취소버튼 클릭한 경우
        	} else if (e.cell == 3) {
        		this.dsReply.reset();
        		var nRowCnt = this.dsReply.getRowCount();
        		this.divContents.form.divReply.form.grdReplyList.set_autosizingtype("none");
        		this.divContents.form.divReply.form.grdReplyList.set_autosizingtype("row");

        		// 그리드 높이 가변 설정
        		this.fnSetReplySize();
        	// 댓글 수정 상태에서 저장버튼 클릭한 경우
        	} else if (e.cell == 4) {
        		// 댓글 텍스트
        		obj.updateToDataset();
        		var sReplyTxts = this.dsReply.getColumn(this.fvReplyRowPos, "REPLY_CNTN");

        		if (this.gfnIsNull(sReplyTxts)) {
        			this.gfnAlert("msg.err.validator.required", ["댓글 내용"]);
        		} else {
        			// 댓글 저장
        			this.fnTranSaveReply("update");
        		}
        	}
        };

        //댓글 수정/삭제
        this.divContents_divReply_pdivReplyUpdate_grdReplyUpdate_oncellclick = function(obj,e)
        {
        	// 수정
        	if (e.row == 0) {
        		if (this.dsReply.findRow("STATUS", "update") > -1) {
        			this.gfnAlert("msg.confirm", ["내용 입력을 취소하시겠습니까?"], "editReplyCancel", "fnMsgCallback");
        		} else {
        			// 댓글 수정상태로 변경
        			this.fnSetReplyUpdateStatus();
        		}
        	// 삭제
        	} else if (e.row == 1) {
        		this.gfnAlert("confirm.before.comment", [], "deleteReply", "fnMsgCallback");//댓글을 삭제하시겠습니까?
        	}
        };

        //첨부파일다운로드
        this.divCont_divFile_grdFile_oncellclick = function(obj,e)
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

        //파일다운로드트랜스퍼 온에러
        this.fdtFile_onerror = function(obj,e)
        {
        	//TODO..
        };
        //파일다운로드트랜스퍼 온서세스
        this.fdtFile_onsuccess = function(obj,e)
        {
        	//TODO..
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divContents.form.divCont.form.webEditor.addEventHandler("onloadcompleted",this.divContents_divCont_webEditor_onloadcompleted,this);
            this.divContents.form.divFile.form.staBg000.addEventHandler("onclick",this.divCont_divFile_btnDown_onclick,this);
            this.divContents.form.divFile.form.grdFile.addEventHandler("oncellclick",this.divCont_divFile_grdFile_oncellclick,this);
            this.divContents.form.divReply.form.grdReplyList.addEventHandler("oncellclick",this.divCont_divReply_grdReplyList_oncellclick,this);
            this.divContents.form.divReply.form.divInputReply.form.btnAddReply.addEventHandler("onclick",this.divContents_divReply_divInputReply_btnAddReply_onclick,this);
            this.divContents.form.divReply.form.pdivReplyUpdate.form.grdReplyUpdate.addEventHandler("oncellclick",this.divContents_divReply_pdivReplyUpdate_grdReplyUpdate_oncellclick,this);
            this.divBtn.form.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.divBtn.form.btnDelete.addEventHandler("onclick",this.divBtn_btnDelete_onclick,this);
            this.divBtn.form.btnModi.addEventHandler("onclick",this.divBtn_btnModi_onclick,this);
            this.divBtn.form.btnRepl.addEventHandler("onclick",this.divBtn_btnRepl_onclick,this);
            this.divBtn00.form.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.divBtn00.form.btnDelete.addEventHandler("onclick",this.divBtn_btnDelete_onclick,this);
            this.divBtn00.form.btnModi.addEventHandler("onclick",this.divBtn_btnModi_onclick,this);
            this.divBtn00.form.btnRepl.addEventHandler("onclick",this.divBtn_btnRepl_onclick,this);
            this.fdtFile.addEventHandler("onerror",this.fdtFile_onerror,this);
            this.fdtFile.addEventHandler("onsuccess",this.fdtFile_onsuccess,this);
        };
        this.loadIncludeScript("boardReadPu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
