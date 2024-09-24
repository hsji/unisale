(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("assetMgFm");
            this.set_titletext("공통코드관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj.getSetter("firefirstcount").set("0");
            obj._setContents("<ColumnInfo><Column id=\"IPADDR\" type=\"STRING\" size=\"256\"/><Column id=\"OWNNER_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.getSetter("firefirstcount").set("0");
            obj._setContents("<ColumnInfo><Column id=\"DEPT_KORN_NM\" type=\"string\" size=\"32\"/><Column id=\"KORN_NM\" type=\"string\" size=\"32\"/><Column id=\"ASSET_CD\" type=\"string\" size=\"32\"/><Column id=\"ASSET_NO\" type=\"int\" size=\"4\"/><Column id=\"ASSET_TYPE\" type=\"string\" size=\"32\"/><Column id=\"ASSET_VERSION\" type=\"string\" size=\"32\"/><Column id=\"WIRE_YN\" type=\"string\" size=\"32\"/><Column id=\"REMARK\" type=\"string\" size=\"32\"/><Column id=\"IPADDR\" type=\"string\" size=\"32\"/><Column id=\"STATUS_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Static("staCd","0","12","114","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("IP ADDRESS");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10","48","28","25",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMenuNm","114","12","185","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_imemode("hangul");
            obj.set_maxlength("66");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCd00","320","12","114","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("소유자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtMenuNm00","434","12","185","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_imemode("hangul");
            obj.set_maxlength("66");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","50","397","43",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("IP관리");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","staTitle00:0",null,null,"20","146",null,null,"250",null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsList");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.getSetter("uFunction").set("filter,sort,!colfix,!initial,find");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"166\"/><Column size=\"121\"/><Column size=\"71\"/><Column size=\"123\"/><Column size=\"116\"/><Column size=\"189\"/><Column size=\"132\"/><Column size=\"147\"/><Column size=\"105\"/><Column size=\"105\"/><Column size=\"147\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"IP ADDR.\"/><Cell col=\"1\" text=\"자산구분\"/><Cell col=\"2\" text=\"순번\"/><Cell col=\"3\" text=\"자산번호\"/><Cell col=\"4\" text=\"형태\"/><Cell col=\"5\" text=\"버전\"/><Cell col=\"6\" text=\"사용자\"/><Cell col=\"7\" text=\"관리팀\"/><Cell col=\"8\" text=\"사용여부\"/><Cell col=\"9\" text=\"유선여부\"/><Cell col=\"10\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:IPADDR\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:ASSET_CD\"/><Cell col=\"2\" text=\"bind:ASSET_NO\"/><Cell col=\"3\" expr=\"ASSET_CD &amp;&amp; ASSET_NO?ASSET_CD + &apos;-&apos; + (ASSET_NO+&apos;&apos;).padLeft(3,&apos;0&apos;):&apos;&apos;\"/><Cell col=\"4\" text=\"bind:ASSET_TYPE\"/><Cell col=\"5\" text=\"bind:ASSET_VERSION\"/><Cell col=\"6\" text=\"bind:KORN_NM\"/><Cell col=\"7\" text=\"bind:DEPT_KORN_NM\"/><Cell col=\"8\" text=\"bind:STATUS_CD\"/><Cell col=\"9\" text=\"bind:WIRE_YN\"/><Cell col=\"10\" text=\"bind:REMARK\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","grdMaster:0","397","43",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("자산 상세");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divCmmnBtn",null,"divSearch:10","400","28","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcel",null,"0","95","28","0",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("1");
            obj.set_text("엑셀다운");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelSave");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnExcelUpload",null,"0","107","28","100",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("1");
            obj.set_text("엑셀업로드");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelUp");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Static("staTitle03","grdMaster:20","478",null,"43","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("소분류코드 상세");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divSub","0","staTitle01:0",null,"102","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Static("staBg00","0","33",null,"34","0",null,null,null,null,null,this.divSub.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staBg02","0","66",null,"34","0",null,null,null,null,null,this.divSub.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staTitle07","0","66","90","34",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("3");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_Label");
            this.divSub.addChild(obj.name, obj);

            obj = new Div("divAsset","94","38",null,"24","5",null,null,null,null,null,this.divSub.form);
            obj.set_taborder("5");
            obj.set_url("common::cmmAssetSearch.xfdl");
            obj.set_text("");
            obj.set_enable("true");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staTitle04_00","0","33","90","34",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("6");
            obj.set_text("자산정보");
            obj.set_cssclass("sta_WF_Label");
            this.divSub.addChild(obj.name, obj);

            obj = new Edit("edtBeforeScaCd00","94","71",null,"24","5",null,null,null,null,null,this.divSub.form);
            obj.set_taborder("7");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_imemode("alpha");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staBg00_00","0","0",null,"34","0",null,null,null,null,null,this.divSub.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staTitle00_00","0","0","90","34",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("9");
            obj.set_text("IP ADDR.");
            obj.set_cssclass("sta_WF_Label");
            this.divSub.addChild(obj.name, obj);

            obj = new Edit("edtIP","94","5","242","24",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("10");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_maxlength("30");
            obj.set_inputmode("normal");
            obj.set_imemode("alpha");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staTitle17","486","0","90","34",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("4");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label");
            this.divSub.addChild(obj.name, obj);

            obj = new CheckBox("chkSoUseYn","staTitle17:4","5","108","24",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("0");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.divSub.addChild(obj.name, obj);

            obj = new CheckBox("chkSoUseYn00","810","5","108","24",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("11");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.divSub.addChild(obj.name, obj);

            obj = new Static("staTitle17_00","716","0","90","34",null,null,null,null,null,null,this.divSub.form);
            obj.set_taborder("12");
            obj.set_text("유선여부");
            obj.set_cssclass("sta_WF_Label");
            this.divSub.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCmmnBtn.form
            obj = new Layout("default","",0,0,this.divCmmnBtn.form,function(p){});
            this.divCmmnBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSub.form.divAsset
            obj = new Layout("default","",0,0,this.divSub.form.divAsset.form,function(p){});
            this.divSub.form.divAsset.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSub.form
            obj = new Layout("default","",0,0,this.divSub.form,function(p){});
            this.divSub.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1050,736,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item4","divSearch.form.edtMenuNm","value","dsCond","IPADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divSearch.form.edtMenuNm00","value","dsCond","OWNNER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSub.form.chkSoUseYn","value","dsList","STATUS_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSub.form.edtIP","value","dsList","IPADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divSub.form.edtBeforeScaCd00","value","dsList","REMARK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divSub.form.divAsset.form.edtAssetCd","value","dsList","ASSET_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divSub.form.divAsset.form.edtAssetNo","value","dsList","ASSET_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divSub.form.divAsset.form.cboAssetGrp","value","dsList","ASSET_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divSub.form.divAsset.form.cboAssetType","value","dsList","ASSET_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divSub.form.divAsset.form.edtVersion","value","dsList","ASSET_VERSION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divSub.form.divAsset.form.edtUName","value","dsList","KORN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSub.form.chkSoUseYn00","value","dsList","WIRE_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::cmmAssetSearch.xfdl");
        };
        
        // User Script
        this.registerScript("ipMgFm.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	assetMgFm.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/06/08
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/06/08			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvRowPositionMain = -1;
        this.fvRowPositionSub  = -1;
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	//공통코드
        	var param = [
        			, {biztype : "Grid",  code : "SM23", objid : this.grdMaster, bindcolumn : "ASSET_CD", edit : "false"}	// 자산구분코드
        			, {biztype : "Grid",  code : "SM19", objid : this.grdMaster, bindcolumn : "ASSET_TYPE", edit : "false"}	// 자산형태
        	];

        	this.gfnGetCommonCode(param);

        	// 버튼 권한 제어
        	this.gfnSetCommBtn(this.divCmmnBtn);
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	if (this.gfnDsIsUpdated(this.dsList)) {
        		// 검색을 진행하면 변경된 데이터가 사라집니다. \n계속 진행 하시겠습니까?
        		var sMsgId = "confirm.before.search";		//메세지ID
        		var arrArg = [""];							//메세지취환될값 배열[생략가능]
        		var sPopId = "search";						//메세지팝업ID[생략가능]	*해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
        		var sMsgCallback = "fnMsgCallback";			//메세지콜백[생략가능] 		* confirm성 메시지를 사용 시 반드시 필요

        		this.gfnAlert(sMsgId, arrArg, sPopId, sMsgCallback);
        	}else{
        		this.fnTranSearch();
        	}
        };

        //추가
        this.cfnAdd = function ()
        {
        	var nRow = this.dsList.addRow();
        	this.dsList.setColumn(nRow, "STATUS_CD", "1");
        	this.dsList.setColumn(nRow, "WIRE_YN", "1");
        	this.dsList.setColumn(nRow, "IPADDR", "172.10.13.");
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
        	// 변경된 정보없으면 리턴
        	if (this.gfnDsIsUpdated(this.dsList) == false) {
        		// 저장할 데이터가 없습니다.
        		this.gfnAlert("msg.save.nochange");
        		return;
        	}

        	if( this.fnMasterValid()){
        		this.gfnAlert("confirm.save", [""], "beforeSaveTran", "fnMsgCallback");
        	}
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //master 조회
        this.fnTranSearch = function ()
        {
        	// 조회-대분류
        	this.dsList.clearData();

        	var strSvcId    = "SearchIPList";
        	var strSvcUrl   = "SearchIPList.do";
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

        //저장
        this.fnTranSave = function ()
        {
        	var strSvcId    = "saveIPList";
        	var strSvcUrl   = "saveIPList.do";
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
        //transaction
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "SearchIPList":
        			break;
        		case "saveIPList":
        			this.fnTranSearch();
        			break;
        		default: break;
        	}
        };

        //popup
        this.fnPopupCallback = function (sPopupId, sRtn)
        {

        };

        //message
        this.fnMsgCallback = function (sMsgId, sRtn)
        {
        	switch(sMsgId) {
        		case "search":
        			if (this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false) {
        				return;
        			}
        			this.fnTranSearch();
        			break;
        		case "beforeSaveTran":
        			if (this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false) {
        				return;
        			}
        			this.fnTranSave();
        			break;
        		default: break;
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        //마스터 - validation
        this.fnMasterValid = function ()
        {
        	// 정합성 체크
        	this.gfnClearValidation(this.dsList);
        	this.gfnSetValidation(this.dsList, "IPADDR", "IP"	, "required");
        	this.gfnSetValidation(this.dsList, "IPADDR", "IP"	, "isipaddr");
        	if(this.divSub.form.chkSoUseYn.value == "1") {
        		this.gfnSetValidation(this.dsList, "ASSET_CD", "자산정보"	, "required");
        		this.gfnSetValidation(this.dsList, "ASSET_NO", "자산정보"	, "required");
        	}

        	// Dataset의 변경된 Row Validation check
        	if (this.gfnValidation(this.dsList, "U") == false) return false;
        	else return true;
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        //조회
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.cfnSearch(); //조회
        };

        //마스터 - 로우포스체인지
        this.dsList_onrowposchanged = function(obj,e)
        {
        	if(obj.getRowType(e.newrow) == Dataset.ROWTYPE_INSERT) {
        		this.divSub.form.edtIP.set_enable(true);
        	} else {
        		this.divSub.form.edtIP.set_enable(false);
        	}
        	if(obj.rowcount == 0) {
        		this.divSub.form.edtIP.set_enable(false);
        	}
        };

        this.divCmmnBtn_btnExcel_onclick = function(obj,e)
        {
        	// 엑셀 상단 타이틀 텍스트 설정
        	var sSubTitle = this.staTitle00.text;

        	// Excel Export 공통함수 호출
        	this.gfnExcelExport(this.grdMaster, sSubTitle, sSubTitle, "EXCEL2007","",sSubTitle, true, "", true);
        };


        this.divCmmnBtn_btnExcelUpload_onclick = function(obj,e)
        {
        	var sSubTitle = this.staTitle00.text;
        	this.gfnExcelImport("dsList", sSubTitle, "A4:K", "fnExcelImportCallback", "asset", "", "A3:K3", this.grdMaster);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.divCmmnBtn.form.btnExcel.addEventHandler("onclick",this.divCmmnBtn_btnExcel_onclick,this);
            this.divCmmnBtn.form.btnExcelUpload.addEventHandler("onclick",this.divCmmnBtn_btnExcelUpload_onclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
        };
        this.loadIncludeScript("ipMgFm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
