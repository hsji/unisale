(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("memoMagFm");
            this.set_titletext("메모관리");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"SEARCHDATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"KEYSEQ\" type=\"int\" size=\"4\"/><Column id=\"LVL_FONT\" type=\"string\" size=\"32\"/><Column id=\"CHGE_DTTM\" type=\"datetime\" size=\"17\"/><Column id=\"LVL_COLOR\" type=\"string\" size=\"32\"/><Column id=\"MEMO_CONTENTS\" type=\"string\" size=\"32\"/><Column id=\"LVL_NAME\" type=\"string\" size=\"32\"/><Column id=\"USER_ID\" type=\"string\" size=\"32\"/><Column id=\"LVL_BGCOLOR\" type=\"string\" size=\"32\"/><Column id=\"MEMO_TITLE\" type=\"string\" size=\"32\"/><Column id=\"SEQ\" type=\"int\" size=\"4\"/><Column id=\"LVL_NO\" type=\"int\" size=\"4\"/><Column id=\"EDITCOL\" type=\"STRING\" size=\"256\"/><Column id=\"RTYPE\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCmdYn", this);
            obj._setContents("<ColumnInfo><Column id=\"cmdCode\" type=\"STRING\" size=\"256\"/><Column id=\"cmdNm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cmdNm\">전체</Col></Row><Row><Col id=\"cmdCode\">1</Col><Col id=\"cmdNm\">사용</Col></Row><Row><Col id=\"cmdCode\">0</Col><Col id=\"cmdNm\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaxSeq", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsListCopy", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","56","-158","185","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch_form_Combo01_innerdataset = new nexacro.NormalDataset("divSearch_form_Combo01_innerdataset", obj);
            divSearch_form_Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_Combo01_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo02","282","-158","185","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch_form_Combo02_innerdataset = new nexacro.NormalDataset("divSearch_form_Combo02_innerdataset", obj);
            divSearch_form_Combo02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_Combo02_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo03","521","-158","184","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch_form_Combo03_innerdataset = new nexacro.NormalDataset("divSearch_form_Combo03_innerdataset", obj);
            divSearch_form_Combo03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_Combo03_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","785","-158","184","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_value("20190308");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10","48","28","25",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static04_00",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W20");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","-2","divSearch:0",null,"43","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("나의 메모장");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","0","staTitle01:38","23.24%",null,null,"10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj.getSetter("uFunction").set("filter,sort,!colfix,!initial,find");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"245\"/></Columns><Rows><Row size=\"32\"/></Rows><Band id=\"body\"><Cell text=\"bind:LVL_NAME\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:LVL_NO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divCmmnBtn",null,"divSearch:10","467","33","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelDown","348","0","119","28",null,null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("0");
            obj.set_text("엑셀다운로드");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelSave");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnChangeContents","257","0",null,"28","btnExcelDown:5",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("1");
            obj.set_text("변경");
            obj.set_visible("false");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Div("divContents","grdList:10","93",null,null,"20","10",null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","3","8","62","24",null,null,null,null,null,null,this.divContents.form);
            obj.set_taborder("1");
            obj.set_text("제목");
            obj.set_cssclass("sta_WF_Dot");
            this.divContents.addChild(obj.name, obj);

            obj = new WebBrowser("webEditorContents","0","40",null,null,"0","0",null,null,null,null,this.divContents.form);
            obj.set_taborder("0");
            obj.set_border("1px solid #cccccc");
            obj.set_visible("false");
            this.divContents.addChild(obj.name, obj);

            obj = new Edit("edt00","75","8",null,"24","0.9800000000000182",null,null,null,null,null,this.divContents.form);
            obj.set_taborder("2");
            this.divContents.addChild(obj.name, obj);

            obj = new WebBrowser("webViewerContents","0","40",null,null,"0","0",null,null,null,null,this.divContents.form);
            obj.set_taborder("3");
            obj.set_border("1px solid #cccccc");
            obj.set_visible("false");
            this.divContents.addChild(obj.name, obj);

            obj = new Div("div00","2","93","23.24%","42",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Button("btnbottom",null,"6","22","22","1",null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_LF_MoveDown");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btntop",null,"6","22","22","btnbottom:7",null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_LF_MoveUp");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btnright",null,"6","22","22","btntop:7",null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_LF_MoveRight");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btnleft",null,"6","22","22","btnright:7",null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_LF_MoveLeft");
            this.div00.addChild(obj.name, obj);

            obj = new PopupDiv("pdivRename","1081","332","239","43",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_background("#ffffff");
            obj.set_border("2px solid #cccccc");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00","6","7","154","24",null,null,null,null,null,null,this.pdivRename.form);
            obj.set_taborder("0");
            this.pdivRename.addChild(obj.name, obj);

            obj = new Button("btnChange","168","7",null,"24","4",null,null,null,null,null,this.pdivRename.form);
            obj.set_taborder("1");
            obj.set_text("변경");
            obj.set_fittocontents("width");
            this.pdivRename.addChild(obj.name, obj);

            obj = new Grid("grdList00","1078","108","23.24%",null,null,"488",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("dsList");
            obj.getSetter("uFunction").set("filter,sort,!colfix,!initial,find");
            obj.set_treeusecheckbox("false");
            obj.set_treeinitstatus("expand,all");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"245\"/><Column size=\"354\"/><Column size=\"511\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"LEVEL\"/><Cell col=\"1\" text=\"TITLE\"/><Cell col=\"2\" text=\"CONTENTS\"/></Band><Band id=\"body\"><Cell text=\"bind:LVL_NAME\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:LVL_NO\"/><Cell col=\"1\" text=\"bind:MEMO_TITLE\"/><Cell col=\"2\" text=\"bind:MEMO_CONTENTS\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCmmnBtn.form
            obj = new Layout("default","",0,0,this.divCmmnBtn.form,function(p){});
            this.divCmmnBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form
            obj = new Layout("default","",0,0,this.divContents.form,function(p){});
            this.divContents.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.pdivRename.form
            obj = new Layout("default","",0,0,this.pdivRename.form,function(p){});
            this.pdivRename.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1050,736,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtBoardNm","value","dsCond","SEARCHDATA");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divContents.form.edt00","value","dsList","MEMO_TITLE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("memoMagFm.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	memoMagFm.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/02/15
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/02/15			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvRowPosition = -1;
        this.fvnMaxKeySeq = 0;
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	var oWeb1 = this.divContents.form.webViewerContents;
        	this.gfnCreateHtmlViewer(oWeb1);

        	var oWeb2 = this.divContents.form.webEditorContents;
        	this.gfnCreateWebEditor(oWeb2);

        	this.cfnSearch();
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	if (this.gfnDsIsUpdated(this.dsList)) {
        		// 검색을 진행하면 변경된 데이터가 사라집니다. \n계속 진행 하시겠습니까?
        		var sMsgId = "confirm.before.search";	//메세지ID
        		var arrArg = [""];						//메세지취환될값 배열[생략가능]
        		var sPopId = "search";					//메세지팝업ID[생략가능]	*해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
        		var sMsgCallback = "fnMsgCallback";		//메세지콜백[생략가능] 		* confirm성 메시지를 사용 시 반드시 필요

        		this.gfnAlert(sMsgId, arrArg, sPopId, sMsgCallback);
        	}else{
        		this.fnTranSearch();
        	}
        };

        //추가
        this.cfnAdd = function ()
        {
        	var nRow = this.dsList.insertRow(this.dsList.rowposition+1);
        	this.dsList.setColumn(nRow,'EDITCOL',"1");
        	this.dsList.setColumn(nRow,'LVL_NO',0);
        	this.dsList.setColumn(nRow,'LVL_NAME',"변경하세요");

        	var nMaxKeySeq = this.dsMaxSeq.getColumn(0, "MAXKEYSEQ");
        	if(!nMaxKeySeq) nMaxKeySeq = 0;
        	this.fvnMaxKeySeq = Math.max(this.fvnMaxKeySeq, nMaxKeySeq);
        	this.fvnMaxKeySeq++;
        	//var nMaxSeq = this.dsMaxSeq.getColumn(0, "MAXSEQ");
        	//if(!nMaxSeq) nMaxSeq = 0;

        	this.dsList.setColumn(nRow,'KEYSEQ',this.fvnMaxKeySeq);

        	this.fnWebEdit(true);
        };

        //삭제
        this.cfnDel = function ()
        {
        	if (this.dsList.rowcount == 0) {
        		return;
        	}

        	this.dsList.deleteRow(this.dsList.rowposition);
        };

        //저장
        this.cfnSave = function ()
        {
        	this.fnResetSeq();

        	if(this.fnFormValidation() == false) return;

        	// 변경된 정보없으면 리턴
        	if (this.gfnDsIsUpdated(this.dsList) == false) {
        		// 저장할 데이터가 없습니다.
        		this.gfnAlert("msg.save.nochange");
        		return;
        	}

        	if(this.fnFormValidation()){
        		// 저장 하시겠습니까?
        		this.gfnAlert("confirm.save", [""], "saveMsg", "fnMsgCallback");
        		return;
        	}
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //조회
        this.fnTranSearch = function ()
        {
        	this.dsList.clearData();

        	var strSvcId    = "searchMemoList";
        	var strSvcUrl   = "searchMemoList.do";
        	var inData      = "dsCond=dsCond";
        	var outData     = "dsList=dsList dsMaxSeq=dsMaxSeq";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        //저장
        this.fnTranSave = function ()
        {

        	// Insert, Update
        	var strSvcId    = "saveMemoContents";
        	var strSvcUrl   = "saveMemoContents.do";
        	var inData      = "dsList=dsList:U";
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
        //transaction callback
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "searchMemoList":
        			if(this.dsList.rowcount > 0) {
        				this.divCmmnBtn.form.btnChangeContents.set_visible(true);
        			}
        			break;
        		case "saveMemoContents":
        			this.fnTranSearch();
        			break;
        		default:break;
        	}
        };

        //message callback
        this.fnMsgCallback = function (sPopupId, sRtn)
        {
        	if( this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false){
        		return;
        	}else{
        		switch(sPopupId) {
        			case "search":
        				this.fnTranSearch();//조회
        				break;
        			case "saveMsg":
        				this.fnTranSave(); //저장
        				break;
        			default:break;
        		}
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnFormValidation = function ()
        {
        	var oWeb2 = this.divContents.form.webEditorContents;
        	if(oWeb2.visible) {
        		var web2Data = oWeb2.callMethod("getData");
        		this.dsList.setColumn(this.dsList.rowposition, "MEMO_CONTENTS", web2Data);
        	}

        	// 정합성 체크
        	this.gfnClearValidation(this.dsList);

        	this.gfnSetValidation(this.dsList, "LVL_NAME", "메뉴명", "required");
        	this.gfnSetValidation(this.dsList, "MEMO_TITLE", "제목", "required");
        	this.gfnSetValidation(this.dsList, "MEMO_CONTENTS", "내용"	 , "required");

        	// Dataset의 변경된 Row Validation check
        	if (this.gfnValidation(this.dsList, "U") == false) return false;
        	else return true;
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.fnWebEdit = function(v) {
        	var oWeb1 = this.divContents.form.webViewerContents;
        	var oWeb2 = this.divContents.form.webEditorContents;

        	if(v) {

        		oWeb1.set_visible(false);
        		oWeb2.set_visible(true);

        		oWeb2.callMethod("setData", this.dsList.getColumn(this.dsList.rowposition, "MEMO_CONTENTS"));

        	} else {
        		oWeb1.set_visible(true);
        		oWeb2.set_visible(false);

        		this.gfnSetHtmlView(oWeb1, this.dsList.getColumn(this.dsList.rowposition, "MEMO_CONTENTS"));
        	}
        };
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.cfnSearch();
        };

        this.dsList_canrowposchange = function(obj,e)
        {
        	var oWeb2 = this.divContents.form.webEditorContents;

        	if(oWeb2.visible == true) {
        		var web2Data = oWeb2.callMethod("getData");
        		this.dsList.setColumn(e.oldrow, "MEMO_CONTENTS", web2Data);
        	}
        };


        this.dsList_onrowposchanged = function(obj,e)
        {
        	if(obj.getRowType(e.newrow) == Dataset.ROWTYPE_INSERT) {
        		this.fnWebEdit(true);
        	} else {
        		this.fnWebEdit(false);
        	}

        };

        this.divCmmnBtn_btnExcelDown_onclick = function(obj,e)
        {
        	// 엑셀 상단 타이틀 텍스트 설정
        	var sSubTitle = this.staTitle01.text;

        	// Excel Export 공통함수 호출
        	this.gfnExcelExport(this.grdList00, sSubTitle, sSubTitle, "EXCEL2007","",sSubTitle, true, "");
        };

        this.fnResetSeq = function()
        {
        // 	var oWeb2 = this.divContents.form.webEditorContents;
        // 	if(oWeb2.visible) {
        // 		var sCntn = this.dsList.getColumn(this.dsList.rowposition, "MEMO_CONTENTS");
        // 		oWeb2.callMethod("setData", sCntn);
        // 	}

        	this.dsList.set_enableevent(false);
        	for(var i=0;i<this.dsList.rowcount;i++) {
        		this.dsList.setColumn(i, "SEQ", i);
        	}
        	this.dsList.set_enableevent(true);
        };

        // move left
        this.div00_btnleft_onclick = function(obj,e)
        {
        	var nDsRow = this.dsList.rowposition;
        	if(nDsRow == 0) return;

        	var nCurLvl = this.dsList.getColumn(nDsRow, "LVL_NO");
        	var nPreLvl = this.dsList.getColumn(nDsRow-1, "LVL_NO");
        	if(nCurLvl == 0) return;

        	var nTrow = this.grdList.getTreeSiblingRow( nDsRow,-1 , true );
        	if(nTrow >= 0) {
        		this.grdList.setTreeStatus( nTrow, true );
        	}

        	var nFindRow = -1;
        	for(var i=nDsRow+1;i<this.dsList.rowcount;i++) {
        		if(this.dsList.getColumn(i, "LVL_NO") <= nCurLvl) {
        			nFindRow = i;
        			break;
        		}
        	}
        	if(nFindRow < 0) nFindRow = this.dsList.rowcount;
        	nFindRow = nFindRow - 1;

        	for(var i=nDsRow;i<=nFindRow;i++) {
        		this.dsList.setColumn(i, "LVL_NO", this.dsList.getColumn(i, "LVL_NO")-1);
        	}

        	//this.dsList.setColumn(nDsRow, "LVL_NO", nLvl - 1);
        };
        // move right
        this.div00_btnright_onclick = function(obj,e)
        {
        	var nDsRow = this.dsList.rowposition;
        	if(nDsRow == 0) return;
        	var nCurLvl = this.dsList.getColumn(nDsRow, "LVL_NO");
        	var nPreLvl = this.dsList.getColumn(nDsRow-1, "LVL_NO");

        	var gap = Math.abs(nCurLvl - nPreLvl);
        	if((nCurLvl <= nPreLvl)/* || gap < 2*/) {
        		var nTrow = this.grdList.getTreeSiblingRow( nDsRow,-1 , true );
        		if(nTrow >= 0) {
        			this.grdList.setTreeStatus( nTrow, true );
        		}

        		var nFindRow = -1;
        		for(var i=nDsRow+1;i<this.dsList.rowcount;i++) {
        			if(this.dsList.getColumn(i, "LVL_NO") <= nCurLvl) {
        				nFindRow = i;
        				break;
        			}
        		}
        		if(nFindRow < 0) nFindRow = this.dsList.rowcount;
        		nFindRow = nFindRow - 1;

        		for(var i=nDsRow;i<=nFindRow;i++) {
        			this.dsList.setColumn(i, "LVL_NO", this.dsList.getColumn(i, "LVL_NO")+1);
        		}
        	}
        };

        this.fnMoveTopRows = function(sourceS, sourceE, target)
        {
        	this.dsListCopy.copyData(this.dsList);
        	this.dsListCopy.clearData();

        	// copy
        	var rtype;
        	for(var i=sourceS;i<=sourceE;i++) {
        		var nRow = this.dsListCopy.addRow();
        		//rtype = this.dsList.getRowType(i);
        		this.dsListCopy.copyRow(nRow, this.dsList, i);
        		//this.dsListCopy.setColumn(nRow, "RTYPE", rtype);
        	}
        	// delete
        	this.dsList.set_enableevent(false);
        	for(var i=sourceE;i>=sourceS;i--) {
        		this.dsList.deleteRow(i);
        	}
        	// insert
        	var nTarget = target - 1;
        	for(var i=this.dsListCopy.rowcount-1;i>=0;i--) {
        		this.dsList.insertRow(target);
        		this.dsList.copyRow(target, this.dsListCopy, i);
        		//rtype = this.dsListCopy.getColumn(i,"RTYPE");
        	}
        	this.dsList.set_enableevent(true);

        	this.dsList_onrowposchanged(this.dsList, { newrow : target});
        };

        this.div00_btntop_onclick = function(obj,e)
        {
        	var nDsRow = this.dsList.rowposition;
        	if(nDsRow == 0) return;

        	var nTrow = this.grdList.getTreeSiblingRow( nDsRow,-1 , true );
        	var nBrow = this.grdList.getTreeSiblingRow( nDsRow, 1 , true );

        	if(nTrow < 0) return;
        	if(nBrow < 0) {
        		var lvl = 0;
        		var lvlcurr = this.dsList.getColumn(nDsRow, "LVL_NO");
        		for(var i=nDsRow;i<this.dsList.rowcount;i++) {
        			if(this.dsList.getColumn(i, "LVL_NO") < lvlcurr) {
        				nBrow = i;
        				break;
        			}
        		}
        		if(nBrow < 0) nBrow = this.dsList.rowcount;
        	}
        	nBrow = nBrow - 1;

        	this.fnMoveTopRows(nDsRow, nBrow, nTrow);

        };


        this.fnMoveBottomRows = function(sourceS, sourceE, target)
        {
        	this.dsListCopy.copyData(this.dsList);
        	this.dsListCopy.clearData();

        	// copy
        	var rtype;
        	for(var i=sourceS;i<=sourceE;i++) {
        		var nRow = this.dsListCopy.addRow();
        		this.dsListCopy.copyRow(nRow, this.dsList, i);
        	}
        	// insert
        	this.dsList.set_enableevent(false);
        	var nTarget = target - 1;
        	var nCnt = 0;
        	var nCheck = false;
        	for(var i=this.dsListCopy.rowcount-1;i>=0;i--) {
        		nCheck = false;
        		if(target == (this.dsList.rowcount-1)) {
        			if(nCnt == 0) {
        				nCheck = true;
        			}
        		}
        		if(nCheck == true) {
        			target = this.dsList.addRow();
        		} else {
        			this.dsList.insertRow(target);
        		}
        		this.dsList.copyRow(target, this.dsListCopy, i);
        		nCnt++;
        	}
        	// delete
        	for(var i=sourceE;i>=sourceS;i--) {
        		this.dsList.deleteRow(i);
        	}
        	this.dsList.set_enableevent(true);

        	this.dsList_onrowposchanged(this.dsList, { newrow : target});
        };


        this.div00_btnbottom_onclick = function(obj,e)
        {
        	var nDsRow = this.dsList.rowposition;
        	if(nDsRow == this.dsList.rowcount-1) return;

        	var nBrow = this.grdList.getTreeSiblingRow( nDsRow, 1 , true );
        	if(nBrow < 0) return;

        	var nBBrow = this.grdList.getTreeSiblingRow( nBrow, 1 , true );
        	if(nBBrow < 0) {
        		var lvl = 0;
        		var lvlcurr = this.dsList.getColumn(nDsRow, "LVL_NO");
        		for(var i=nBrow;i<this.dsList.rowcount;i++) {
        			if(this.dsList.getColumn(i, "LVL_NO") < lvlcurr) {
        				nBBrow = i;
        				break;
        			}
        		}
        		if(nBBrow < 0) nBBrow = this.dsList.rowcount-1;
        	}
        	nBrow = nBrow - 1;

        	this.fnMoveBottomRows(nDsRow, nBrow, nBBrow);
        };


        this.grdList_oncelldblclick = function(obj,e)
        {
        	var rect = obj.getCellRect( e.row, e.cell );
        	this.pdivRename.trackPopupByComponent(obj, rect.left, rect.bottom);
        };

        this.pdivRename_btnChange_onclick = function(obj,e)
        {
        	var txt = this.pdivRename.form.edt00.value;
        	if(txt) {
        		this.dsList.setColumn(this.dsList.rowposition, "LVL_NAME", txt);
        	}
        	this.pdivRename.closePopup();
        };

        this.divCmmnBtn_btnChangeContents_onclick = function(obj,e)
        {
        	this.fnWebEdit(true);
        };

        this.pdivRename_edt00_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13) {
        		this.pdivRename.form.btnChange.click();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.grdList.addEventHandler("oncelldblclick",this.grdList_oncelldblclick,this);
            this.divCmmnBtn.form.btnExcelDown.addEventHandler("onclick",this.divCmmnBtn_btnExcelDown_onclick,this);
            this.divCmmnBtn.form.btnChangeContents.addEventHandler("onclick",this.divCmmnBtn_btnChangeContents_onclick,this);
            this.divContents.form.webEditorContents.addEventHandler("onusernotify",this.webEditor_onusernotify,this);
            this.div00.form.btnbottom.addEventHandler("onclick",this.div00_btnbottom_onclick,this);
            this.div00.form.btntop.addEventHandler("onclick",this.div00_btntop_onclick,this);
            this.div00.form.btnright.addEventHandler("onclick",this.div00_btnright_onclick,this);
            this.div00.form.btnleft.addEventHandler("onclick",this.div00_btnleft_onclick,this);
            this.pdivRename.form.edt00.addEventHandler("onkeydown",this.pdivRename_edt00_onkeydown,this);
            this.pdivRename.form.btnChange.addEventHandler("onclick",this.pdivRename_btnChange_onclick,this);
            this.grdList00.addEventHandler("oncelldblclick",this.grdList_oncelldblclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
            this.dsList.addEventHandler("canrowposchange",this.dsList_canrowposchange,this);
        };
        this.loadIncludeScript("memoMagFm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
