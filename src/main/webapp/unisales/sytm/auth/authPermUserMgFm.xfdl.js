(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("authPermUserMgFm");
            this.set_titletext("권한별 사용자 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"PREM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYTM_FLAG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPremTarget", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCondDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"PERM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SYTM_FLAG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staCompany","0","12","87","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("회사구분");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCompany","staCompany:0","12","139","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_innerdataset("gdsCompany");
            obj.set_codecolumn("SSC_CD");
            obj.set_datacolumn("SSC_CD_KORN_NM");
            obj.set_text("알림");
            obj.set_value("INF");
            obj.set_index("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle00","cboCompany:0","12","74","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("시스템");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo01","56","-158","185","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
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
            obj.set_taborder("5");
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
            obj.set_taborder("6");
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
            obj.set_taborder("7");
            obj.set_value("20190308");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10","48","28","25",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboSysGubun","staTitle00:0","12","180","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("cbo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle01","cboSysGubun:0","12","74","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("권한명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtPermNm","staTitle01:0","12","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","divSearch:0","306","43",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("권한 그룹");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdAuthList","0","staTitle00:0","426",null,null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsList");
            obj.set_autoenter("select");
            obj.set_cellclickbound("cell");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"117\"/><Column size=\"35\"/><Column size=\"250\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell edittype=\"normal\" displaytype=\"normal\" text=\"권한코드\"/><Cell col=\"1\" text=\"권한명\"/><Cell col=\"2\" text=\"여부\"/><Cell col=\"3\" text=\"비고\"/></Band><Band id=\"body\"><Cell displaytype=\"text\" text=\"bind:PERM_ID\" textAlign=\"center\" edittype=\"expr:dataset.getRowType(currow)==2?&apos;text&apos;:&apos;none&apos;\"/><Cell col=\"1\" edittype=\"text\" text=\"bind:PERM_GRP_NM\" displaytype=\"editcontrol\"/><Cell col=\"2\" text=\"bind:USED_YN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"3\" text=\"bind:REMK\" displaytype=\"editcontrol\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdUserList","grdAuthList:20","93",null,null,"20","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_treeusecheckbox("false");
            obj.set_binddataset("dsPremTarget");
            obj.set_cellclickbound("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"250\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"사번/ID\"/><Cell col=\"1\" text=\"사용자명\"/><Cell col=\"2\" text=\"부서명\"/><Cell col=\"3\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_NO\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:KORN_NM\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:DEPT_NM\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:REMK\" displaytype=\"editcontrol\" edittype=\"text\" editmaxlength=\"1000\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","grdAuthList:20","50",null,"43","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("사용자");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Div("divCmmBtnCud","306","60","119","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"0","50","28","0",null,null,null,null,null,this.divCmmBtnCud.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            this.divCmmBtnCud.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"0","28","28","btnSave:3",null,null,null,null,null,this.divCmmBtnCud.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_DeleteSm");
            this.divCmmBtnCud.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","28","28","btnDel:3",null,null,null,null,null,this.divCmmBtnCud.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_AddSm");
            this.divCmmBtnCud.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCmmBtnCud.form
            obj = new Layout("default","",0,0,this.divCmmBtnCud.form,function(p){});
            this.divCmmBtnCud.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1050,736,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cboSysGubun","value","dsCond","SYTM_FLAG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtPermNm","value","dsCond","PREM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divSearch.form.cboCompany","value","dsCond","COMPANY_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("authPermUserMgFm.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	authPermUserMgFm.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/04/05
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/04/05			TOBESOFT					최초생성
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

        	//공통코드조회
        	var param = [
        			, {biztype : "Combo", code : "SM00", objid : this.divSearch.form.cboSysGubun}		// 시스템구분
        	];
        	this.gfnGetCommonCode(param);

        	// 버튼 권한 제어
        	this.gfnSetCommBtn(this.divCmmnBtn);

        	var arrComp = [this.divSearch.form.cboCompany];
        	this.gfnSetAuthorityCompany(arrComp);
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	if (this.gfnDsIsUpdated(this.dsPremTarget)) {
        		// 검색을 진행하면 변경된 데이터가 사라집니다. \n계속 진행 하시겠습니까?
        		var sMsgId = "confirm.before.search";					//메세지ID
        		var arrArg = [""];										//메세지취환될값 배열[생략가능]
        		var sPopId = "search";									//메세지팝업ID[생략가능]	*해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
        		var sMsgCallback = "fnMsgCallback";						//메세지콜백[생략가능] 		* confirm성 메시지를 사용 시 반드시 필요

        		// 변경된 정보가 있습니다.\n저장 하시겠습니까?
        		this.gfnAlert(sMsgId, arrArg, sPopId, sMsgCallback);
        	}
        	else {
        		this.fnTranSearch();
        	}
        };

        //신규
        this.cfnAdd = function ()
        {
        	if( this.dsList.getRowCount() == 0 ) return;

        	//사용자리스트 조회 팝업 오픈
        	var sTitle = "사용자 선택";
        	var oArg   = {pvCompanyCd:this.dsList.getColumn(this.dsList.rowposition, "COMPANY_CD")
        				, pvPermId :this.dsList.getColumn(this.dsList.rowposition, "PERM_ID")
        				, pvSysFlagCd :this.dsList.getColumn(this.dsList.rowposition, "SYTM_FLAG_CD")};

        	var oOption = {title:sTitle,titlebar:true};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("authPermUserPu", "sytm::auth/authPermUserPu.xfdl", oArg, sPopupCallBack, oOption);
        };

        //삭제
        this.cfnDel = function ()
        {
        	if (this.dsPremTarget.rowcount == 0){
        		return;
        	}

        	this.dsPremTarget.deleteRow(this.dsPremTarget.rowposition);
        };

        //저장
        this.cfnSave = function ()
        {
        	// 변경된 정보없으면 리턴
        	if (this.gfnDsIsUpdated(this.dsPremTarget) == false) {
        		// 저장할 데이터가 없습니다.
        		this.gfnAlert("msg.save.nochange");
        		return;
        	}

        	// 자료를 저장하시겠습니까?
        	this.gfnAlert("confirm.save", [""], "save", "fnMsgCallback");
        	return;
        };
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //조회
        this.fnTranSearch = function ()
        {
        	var strSvcId    = "searchPremList";
        	var strSvcUrl   = "searchPremList.do";
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

        //이용자 목록 조회
        this.fnTranUserList = function ()
        {
        	var strSvcId    = "searchPremUserList";
        	var strSvcUrl   = "searchPremUserList.do";
        	var inData      = "dsCondDetail=dsCondDetail";
        	var outData     = "dsPremTarget=dsPremTarget";
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
        	var strSvcId    = "savePremUserList";
        	var strSvcUrl   = "savePremUserList.do";
        	var inData      = "dsPremTarget=dsPremTarget:U";
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

        //권한목록 수정 저장
        this.fnTranSavePrem = function ()
        {
        	var strSvcId    = "savePremGrpList";
        	var strSvcUrl   = "savePremGrpList.do";
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
        		case "searchPremList":
        		case "searchPremUserList":
        			break;
        		case "savePremUserList":
        			this.fnTranUserList();
        			break;
        		default: break;
        	}
        };

        //message callback
        this.fnMsgCallback = function (sMsgId, sRtn)
        {
        	switch(sMsgId) {
        		case "delete":
        			if(this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false){
        				return;
        			}else{
        				this.dsPremTarget.deleteRow(this.dsPremTarget.rowposition);
        				this.fnTranSave();
        			}
        			break;
        		case "save":
        			if(this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false){
        				return;
        			}else{
        				this.fnTranSave();
        			}
        		case "savePrem":
        			if(this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false){
        				return;
        			}
        			this.fnTranSavePrem();
        			break;
        		case "search":
        			if(this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false){
        				return;
        			}else{
        				this.fnTranSearch();
        			}
        			break;
        		case "beforeRowPosChange":
        			if (this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false) {
        				return;
        			}
        			this.dsList.set_enableevent(false);
        			this.dsList.set_rowposition(this.dsList.uNewRow);
        			this.fnSetPermTargetSearchCond(this.dsList.uNewRow);
        			this.dsList.set_enableevent(true);
        		default: break;
        	}
        };

        //popup callback
        this.fnPopupCallback = function (sPopupId, sRtn)
        {
        	switch(sPopupId) {
        		case "authPermUserPu":
        			break;
        		default: break;
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnSetPermTargetSearchCond = function (nNewRow)
        {
        	this.dsCondDetail.clearData();
        	var nRow = this.dsCondDetail.addRow();

        	this.dsCondDetail.setColumn(nRow, "COMPANY_CD"		, this.dsList.getColumn(nNewRow, "COMPANY_CD"));
        	this.dsCondDetail.setColumn(nRow, "PERM_ID"		, this.dsList.getColumn(nNewRow, "PERM_ID"));
        	this.dsCondDetail.setColumn(nRow, "SYTM_FLAG_CD", this.dsList.getColumn(nNewRow, "SYTM_FLAG_CD"));

        	this.fnTranUserList();
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.cfnSearch();
        };

        this.dsList_onrowposchanged = function(obj,e)
        {
        	if( e.newrow > -1){
        		this.fnSetPermTargetSearchCond(e.newrow);
        	}
        };

        this.dsList_canrowposchange = function(obj,e)
        {
        	this.dsList.uNewRow = e.newrow;
        	this.dsList.uOldRow = e.oldrow;

        	// 마스터 row변경전 상세정보 저장유무 확인
        	if (this.gfnDsIsUpdated(this.dsPremTarget)) {
        		//해당 row의 위치를 이동하면 변경된 데이터가 사라집니다. \n계속 진행 하시겠습니까?
        		this.gfnAlert("confirm.before.moveropos", [""], "beforeRowPosChange", "fnMsgCallback");
        		return false;
        	}
        };

        //권한그룹 삭제
        this.divCmmBtnCud_btnDel_onclick = function(obj,e)
        {
        	if (this.dsList.rowcount == 0){
        		return;
        	}

        	this.dsList.deleteRow(this.dsList.rowposition);
        };

        //권한그룹 추가
        this.divCmmBtnCud_btnAdd_onclick = function(obj,e)
        {
        	var nRow = this.dsList.addRow();
        	this.dsList.setColumn(nRow, "COMPANY_CD", this.divSearch.form.cboCompany.value);
        	this.dsList.setColumn(nRow, "SYTM_FLAG_CD", this.divSearch.form.cboSysGubun.value);
        	this.dsList.setColumn(nRow, "USED_YN", "1");

        	this.grdAuthList.setCellPos(0);
        	this.grdAuthList.showEditor(true);
        };

        //validation
        this.fnValidation = function ()
        {
        	// 정합성 체크
        	this.gfnClearValidation(this.dsList);
        	this.gfnSetValidation(this.dsList, "COMPANY_CD"	 	 , "회사"		, "required");
        	this.gfnSetValidation(this.dsList, "PERM_ID"	 	 , "권한코드"		, "required");
        	this.gfnSetValidation(this.dsList, "PERM_GRP_NM"	 , "권한명"		, "required");

        	// Dataset의 변경된 Row Validation check
        	if (this.gfnValidation(this.grdAuthList, "U") == false) {
        		return false;
        	}else{
        		return true;
        	}
        };

        //권한그룹저장
        this.divCmmBtnCud_btnSave_onclick = function(obj,e)
        {
        	// 변경된 정보없으면 리턴
        	if (this.gfnDsIsUpdated(this.dsList) == false) {
        		// 저장할 데이터가 없습니다.
        		this.gfnAlert("msg.save.nochange");
        		return;
        	}

        	if(this.fnValidation()){
        		// 자료를 저장하시겠습니까?
        		this.gfnAlert("confirm.save", [""], "savePrem", "fnMsgCallback");
        		return;
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.grdUserList.addEventHandler("onheadclick",this.grdUserList_onheadclick,this);
            this.divCmmBtnCud.form.btnSave.addEventHandler("onclick",this.divCmmBtnCud_btnSave_onclick,this);
            this.divCmmBtnCud.form.btnDel.addEventHandler("onclick",this.divCmmBtnCud_btnDel_onclick,this);
            this.divCmmBtnCud.form.btnAdd.addEventHandler("onclick",this.divCmmBtnCud_btnAdd_onclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
            this.dsList.addEventHandler("canrowposchange",this.dsList_canrowposchange,this);
        };
        this.loadIncludeScript("authPermUserMgFm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
