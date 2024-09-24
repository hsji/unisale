(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AC_ServerCheckList");
            this.set_titletext("서버 체크리스트");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmm_Server", this);
            obj._setContents("<ColumnInfo><Column id=\"SIL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SERVER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ORD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ServerCheckList", this);
            obj._setContents("<ColumnInfo><Column id=\"SCL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SIL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SERVER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"YYYYMM\" type=\"STRING\" size=\"256\"/><Column id=\"SYSTEM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ENCODING\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"USE_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CheckCopyData", this);
            obj._setContents("<ColumnInfo><Column id=\"YYYYMM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ServerFileList", this);
            obj._setContents("<ColumnInfo><Column id=\"SCL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SIL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SERVER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"YYYYMM\" type=\"STRING\" size=\"256\"/><Column id=\"SYSTEM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ENCODING\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ServerCheckDet", this);
            obj._setContents("<ColumnInfo><Column id=\"SCD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SCL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SAL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PW\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_PW\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_AccountList", this);
            obj._setContents("<ColumnInfo><Column id=\"SAL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SERVER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PW\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_PW\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ServerCheckDetTmp", this);
            obj._setContents("<ColumnInfo><Column id=\"SCD_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SCL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SAL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PW\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_PW\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Rtn", this);
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_UseFlag", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"string\" size=\"30\"/><Column id=\"CAPTION\" type=\"string\" size=\"255\"/><Column id=\"VAL1\" type=\"string\" size=\"100\"/><Column id=\"VAL2\" type=\"string\" size=\"100\"/><Column id=\"VAL3\" type=\"string\" size=\"100\"/><Column id=\"VAL4\" type=\"string\" size=\"100\"/><Column id=\"REMARK\" type=\"string\" size=\"1073741823\"/><Column id=\"ORD\" type=\"string\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_Search","8","8",null,"40","8",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SchList");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_yyyyMM","8","9","58","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("3");
            obj.set_text("조회년월");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_Search.addChild(obj.name, obj);

            obj = new Div("div_Search_yyyyMM","stc_yyyyMM:8","9","145","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("4");
            obj.getSetter("user_onchanged").set("fnServerCheckList");
            obj.set_url("Common::COM_yyyyMM.xfdl");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("stc_Server","div_Search_yyyyMM:8","9","58","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("0");
            obj.set_text("서버");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_Search.addChild(obj.name, obj);

            obj = new Combo("cmb_Server","stc_Server:8","9","150","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_cmm_Server");
            obj.set_codecolumn("SIL_SEQ");
            obj.set_datacolumn("SERVER_NAME");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_Search",null,"9","58","22","8",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_SchText");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_Save",null,"9","58","22","btn_Search:8",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("6");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_tran");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_Copy",null,"9","108","22","btn_Save:8",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("7");
            obj.set_text("이전 데이터 복사");
            obj.set_cssclass("btn_WF_tran");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_File",null,"9","108","22","btn_Copy:8",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("5");
            obj.set_text("패스워드 변경");
            obj.set_enable("true");
            obj.set_cssclass("btn_WF_tran");
            this.div_Search.addChild(obj.name, obj);

            obj = new Combo("cmb_UseFlag","544","10","87","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_cmm_UseFlag");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_index("-1");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("stc_UseFlag","cmb_Server:27","9",null,"22","cmb_UseFlag:16",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("8");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_Search.addChild(obj.name, obj);

            obj = new Grid("grd_ServerCheckDet",null,"86","484",null,"8","8",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_ServerCheckDet");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"계정\"/><Cell col=\"1\" text=\"적용 PW\"/><Cell col=\"2\" text=\"이전 PW\"/></Band><Band id=\"body\"><Cell text=\"bind:ACCOUNT\" edittype=\"readonly\" textareaautoselect=\"true\"/><Cell col=\"1\" text=\"bind:NEW_PW\" textAlign=\"left\" edittype=\"readonly\" textareaautoselect=\"true\"/><Cell col=\"2\" text=\"bind:OLD_PW\" textAlign=\"left\" edittype=\"readonly\" textareaautoselect=\"true\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_ServerCheckList","8","86",null,null,"grd_ServerCheckDet:8","8",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_ServerCheckList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"60\"/><Column size=\"150\"/><Column size=\"250\"/><Column size=\"45\"/><Column size=\"230\"/><Column size=\"50\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"서버\"/><Cell col=\"1\" text=\"시스템\"/><Cell col=\"2\" text=\"파일명\"/><Cell col=\"3\" text=\"파일경로\"/><Cell col=\"4\" text=\"인코딩\"/><Cell col=\"5\" text=\"비고\"/><Cell col=\"6\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:SIL_SEQ\" displaytype=\"expr:comp.parent.PV_AUTH == &apos;ADMIN&apos; ? &apos;combocontrol&apos;: &apos;combotext&apos;\" edittype=\"expr:comp.parent.PV_AUTH == &apos;ADMIN&apos; ? &apos;combo&apos;: &apos;readonly&apos;\" combodataset=\"ds_cmm_Server\" combodatacol=\"SERVER_NAME\" combocodecol=\"SIL_SEQ\" textareascrolltype=\"expr:expr:comp.parent.PV_AUTH == &apos;ADMIN&apos; ? &apos;both&apos;: &apos;none&apos;\" textareaautoselect=\"expr:comp.parent.PV_AUTH == &apos;ADMIN&apos; ? &apos;false&apos;: &apos;true&apos;\"/><Cell col=\"1\" text=\"bind:SYSTEM\" displaytype=\"expr:comp.parent.PV_AUTH == &apos;ADMIN&apos; ? &apos;editcontrol&apos;: &apos;normal&apos;\" edittype=\"expr:comp.parent.PV_AUTH == &apos;ADMIN&apos; ? &apos;text&apos;: &apos;readonly&apos;\" textareascrolltype=\"expr:expr:comp.parent.PV_AUTH == &apos;ADMIN&apos; ? &apos;both&apos;: &apos;none&apos;\" textareaautoselect=\"expr:comp.parent.PV_AUTH == &apos;ADMIN&apos; ? &apos;false&apos;: &apos;true&apos;\"/><Cell col=\"2\" text=\"bind:FILE_NAME\" edittype=\"expr:comp.parent.PV_AUTH == &apos;ADMIN&apos; ? &apos;text&apos;: &apos;readonly&apos;\" displaytype=\"expr:comp.parent.PV_AUTH == &apos;ADMIN&apos; ? &apos;editcontrol&apos;: &apos;normal&apos;\" textAlign=\"left\" textareascrolltype=\"expr:expr:comp.parent.PV_AUTH == &apos;ADMIN&apos; ? &apos;both&apos;: &apos;none&apos;\" textareaautoselect=\"expr:comp.parent.PV_AUTH == &apos;ADMIN&apos; ? &apos;false&apos;: &apos;true&apos;\"/><Cell col=\"3\" text=\"bind:FILE_PATH\" edittype=\"expr:comp.parent.PV_AUTH == &apos;ADMIN&apos; ? &apos;text&apos;: &apos;readonly&apos;\" textAlign=\"left\" displaytype=\"expr:comp.parent.PV_AUTH == &apos;ADMIN&apos; ? &apos;editcontrol&apos;: &apos;normal&apos;\" controlautosizingtype=\"both\" textareascrolltype=\"expr:expr:comp.parent.PV_AUTH == &apos;ADMIN&apos; ? &apos;both&apos;: &apos;none&apos;\" textareaautoselect=\"expr:comp.parent.PV_AUTH == &apos;ADMIN&apos; ? &apos;false&apos;: &apos;true&apos;\"/><Cell col=\"4\" text=\"bind:ENCODING\" edittype=\"expr:comp.parent.PV_AUTH == &apos;ADMIN&apos; ? &apos;text&apos;: &apos;readonly&apos;\" displaytype=\"expr:comp.parent.PV_AUTH == &apos;ADMIN&apos; ? &apos;editcontrol&apos;: &apos;normal&apos;\" textareascrolltype=\"expr:expr:comp.parent.PV_AUTH == &apos;ADMIN&apos; ? &apos;both&apos;: &apos;none&apos;\" textareaautoselect=\"expr:comp.parent.PV_AUTH == &apos;ADMIN&apos; ? &apos;false&apos;: &apos;true&apos;\"/><Cell col=\"5\" text=\"bind:REMARK\" displaytype=\"expr:comp.parent.PV_AUTH == &apos;ADMIN&apos; ? &apos;editcontrol&apos;: &apos;normal&apos;\" edittype=\"expr:comp.parent.PV_AUTH == &apos;ADMIN&apos; ? &apos;text&apos;: &apos;readonly&apos;\" textAlign=\"left\" textareascrolltype=\"expr:expr:comp.parent.PV_AUTH == &apos;ADMIN&apos; ? &apos;both&apos;: &apos;none&apos;\" textareaautoselect=\"expr:comp.parent.PV_AUTH == &apos;ADMIN&apos; ? &apos;false&apos;: &apos;true&apos;\"/><Cell col=\"6\" displaytype=\"checkboxcontrol\" edittype=\"expr:comp.parent.PV_AUTH == &apos;ADMIN&apos; ? &apos;checkbox&apos;: &apos;none&apos;\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" text=\"bind:USE_FLAG\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ServerCheckDet",null,"56","484","30","8",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_POP_GroupBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ServerCheckList","8","56",null,"30","stc_ServerCheckDet:8",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_POP_GroupBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ServerCheckListText","16","63","95","16",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("파일목록");
            obj.set_cssclass("sta_POP_GroupTit");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ServerCheckDetText",null,"63","155","16","326",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("암호변경 대상 계정 목록");
            obj.set_cssclass("sta_POP_GroupTit");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ServerCheckNew",null,"60","58","22","507",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_AccountAdd",null,"60","63","22","16",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("계정추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_AccountDel",null,"60","63","22","btn_AccountAdd:8",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_Search.form.div_Search_yyyyMM
            obj = new Layout("default","",0,0,this.div_Search.form.div_Search_yyyyMM.form,function(p){});
            this.div_Search.form.div_Search_yyyyMM.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_Search.form
            obj = new Layout("default","",0,0,this.div_Search.form,function(p){});
            this.div_Search.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Common::COM_yyyyMM.xfdl");
        };
        
        // User Script
        this.addIncludeScript("AC_ServerCheckList.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("AC_ServerCheckList.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("AC_ServerCheckList.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("AC_ServerCheckList.xfdl","Script::CommGrid.xjs");
        this.registerScript("AC_ServerCheckList.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 : 서버점검관리
        * 02. 화면명   : 서버 체크리스트(AC_ServerCheckList)
        * 03. 화면설명 : 서버 체크리스트 화면
        * 04. 작성일   : 2022.04.25
        * 05. 작성자   : 박종언
        * 06. 수정이력 :
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
        /************************************************************************************************
        * 전역 변수 영역
        ************************************************************************************************/
        var  bCmdChangeFlag = false; // 콤보박스 변경 할 때 데이터 변경 여부 체크
        var arr = new Array();
        var newArr = new Array();
        var errisExtCnt = 0; // 존재하지 않는 파일 여부 건수
        var sucisExtCnt = 0; // 존재하는 파일 여부 건수
        var checkExtCnt = 0; // 파일 여부 체크 건수
        var sWriteCnt = 0; // 파일 생성 카운트
        var sHisServer = ""; // 이전에 조회한 서버 코드

        this.PV_AUTH = "USER";
        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/
        this.AC_ServerCheckList_onload = function(obj,e)
        {
        	this.gfnCompInit(obj);	//	사용자 Grid

        	// runtime은 패스워드만 변경 권한
        	if(nexacro._Browser == "Runtime") {
        		this.PV_AUTH = "USER";
        		this.div_Search.form.btn_Copy.set_visible(false);
        		this.div_Search.form.btn_Save.set_visible(false);
        		this.btn_ServerCheckNew.set_visible(false);
        		this.btn_AccountDel.set_visible(false);
        		this.btn_AccountAdd.set_visible(false);
        		this.div_Search.form.btn_File.set_right("btn_Search:8px");

        	} else {
        		this.PV_AUTH = "ADMIN";
        	}
        	this.fnGetCode();
        	this.fnServerList();	//	검색용 서버 목록 조회
        };
        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fnGetCode = function()
        {
        	this.gfnAddCodeDataset("ds_cmm_UseFlag"	,"USE_FLAG", true);		// 사용여부
        	this.gfnCodeTransaction();
        }

        // 검색용 서버 목록 조회
        this.fnServerList = function()
        {
        	this.gfnAddSendParameter("FORM_NM", this.name);
        	this.gfnAddOutputDataset("ds_cmm_Server",  "dsOutput");
        	this.gfnCommonTransaction("getServerList", "AC_ServerInfoList_S01");
        };

        // 파일 목록 추가
        this.fnFileInsert = function()
        {
        	var sYYYYMM = this.div_Search.form.div_Search_yyyyMM.getYYYYMM();
        	var sSilSeq = this.div_Search.form.cmb_Server.value;
        	var sServerNm = this.div_Search.form.cmb_Server.text;
        	var nRow = this.ds_ServerCheckList.addRow();
        	this.ds_ServerCheckList.setColumn(nRow, "SIL_SEQ", sSilSeq);
        	this.ds_ServerCheckList.setColumn(nRow, "SERVER_NAME", sServerNm);
        	this.ds_ServerCheckList.setColumn(nRow, "YYYYMM", sYYYYMM);
        	this.ds_ServerCheckList.setColumn(nRow, "USE_FLAG", '1');

        	this.fnButtonControl();
        };

        // 버튼 컨트롤
        this.fnButtonControl = function()
        {
        	var sCnt = this.ds_ServerCheckList.rowcount;
        	if(sCnt > 0 )
        	{
        		this.btn_AccountAdd.set_enable(true);
        		this.btn_AccountDel.set_enable(true);
        	}
        	else
        	{
        		this.btn_AccountAdd.set_enable(false);
        		this.btn_AccountDel.set_enable(false);
        	}
        };

        // 서버체크리스트(파일 목록) 조회
        this.fnServerCheckList = function()
        {
        	var sSilSeq = this.div_Search.form.cmb_Server.value;

        	if(nexacro._Browser == "Runtime") {
        		this.gfnSetReg("SIL_SEQ", 		sSilSeq);
        	}

        	this.gfnAddSendParameter("YYYYMM", this.div_Search.form.div_Search_yyyyMM.getYYYYMM());
        	this.gfnAddSendParameter("USE_FLAG", this.div_Search.form.cmb_UseFlag.value);

        	this.gfnAddSendParameter("SIL_SEQ",  sSilSeq);
        	this.gfnAddOutputDataset("ds_ServerCheckList",  "dsOutput");
        	this.gfnCommonTransaction("getServerCheckList", "AC_ServerCheckList_S01");
        };

        // 암호변경 대상 계정 목록
        this.fnServerCheckDet = function(sSclSeq, sMode)
        {
        	this.gfnAddSendParameter("SCL_SEQ", sSclSeq);
        	this.gfnAddSendParameter("YYYYMM", this.div_Search.form.div_Search_yyyyMM.getYYYYMM());
        	if(sMode == "FILE")
        	{
        		this.ds_ServerCheckDetTmp.clearData();
        		this.gfnAddOutputDataset("ds_ServerCheckDetTmp",  "dsOutput");
        		this.gfnCommonTransaction("getServerCheckDet", "AC_ServerCheckList_S02", null, false);
        	}
        	else
        	{
        		this.gfnAddOutputDataset("ds_ServerCheckDet",  "dsOutput");
        		this.gfnCommonTransaction("getServerCheckDet", "AC_ServerCheckList_S02");
        	}
        };

        // 저장
        this.fnSave = function()
        {
        	this.gfnAddInputDataset("ds_ServerCheckList",  "ds_ServerCheckList");
        	this.gfnAddInputDataset("ds_ServerCheckDet",  "ds_ServerCheckDet", "A");
        	this.gfnCommonTransaction("Save", "AC_ServerCheckList_R01");
        };

        // 삭제
        this.fnDelete = function(sCurRow)
        {
        	this.ds_ServerCheckList.deleteRow(sCurRow);
        	this.fnSave();
        };

        // 이전 데이터 복사할 대상이 있는 여부 체크
        this.fnCheckCopyData = function()
        {
        	this.gfnAddSendParameter("YYYYMM", this.div_Search.form.div_Search_yyyyMM.getYYYYMM());
        	this.gfnAddOutputDataset("ds_CheckCopyData",  "dsOutput");
        	this.gfnCommonTransaction("CheckCopyData", "AC_ServerCheckList_S04");
        };

        // 암호변경 대상 계정 목록 조회
        this.fnCheckAccountList = function()
        {
        	var sCurRow = this.ds_ServerCheckList.rowposition;
        	var sSilSeq = this.ds_ServerCheckList.getColumn(sCurRow, "SIL_SEQ");
        	this.gfnAddSendParameter("SIL_SEQ", sSilSeq);
        	this.gfnAddSendParameter("YYYYMM", this.div_Search.form.div_Search_yyyyMM.getYYYYMM());
        	this.gfnAddOutputDataset("ds_AccountList",  "dsOutput");
        	this.gfnCommonTransaction("CheckAccountList", "AC_ServerCheckList_S03");
        };

        // 암호변경 대상 계정 삭제
        this.fnAccountDel = function()
        {
        	var sCurRow = this.ds_ServerCheckDet.rowposition;
        	this.ds_ServerCheckDet.deleteRow(sCurRow);
        };

        // 암호변경 대상 계정 변경 내역 있는지 여부 확인
        this.fnDataCheck = function(sOldrow)
        {
        	var bResult = false;

        	if (this.gfnIsUpdateDs(this.ds_ServerCheckDet))
        	{
        		if (this.confirm("변경된 계정정보 데이터가 존재 합니다 계속 진행 하시겠습니까?"))	{
        			this.ds_ServerCheckDet.reset();
        			bResult = true;
        		} else {
        			this.ds_ServerCheckList.set_enableevent(false);
        			if(this.gfnIsEmpty(sOldrow)) this.ds_ServerCheckList.set_rowposition(this.ds_ServerCheckList.rowposition);
        			else this.ds_ServerCheckList.set_rowposition(sOldrow);
        			this.ds_ServerCheckList.set_enableevent(true);
        		}
        	}
        	else
        	{
        		bResult = true;
        	}

        	return bResult;
        };

        // 파일 생성 버튼 컨트롤
        this.fnFileButtonControl = function(idx)
        {
        	if(this.gfnIsEmpty(idx) || idx < 1) this.div_Search.form.btn_File.set_enable(false);
        	else this.div_Search.form.btn_File.set_enable(true);
        };

        // 유효성 체크
        this.fnValidation = function()
        {
        	if(this.ds_ServerCheckList.rowcount == 0)
        	{
        		alert("체크리스트를 작성 해주세요.");
        		return false;
        	}

        	for(var i = 0; i < this.ds_ServerCheckList.rowcount; i++)
        	{
        		if(this.gfnIsEmpty(this.ds_ServerCheckList.getColumn(i, "SYSTEM"))) { alert("시스템은 필수 입력 항목입니다."); this.grd_ServerCheckList.setCellPos(1, i); this.grd_ServerCheckList.showEditor(true); return false;}
        		else if(this.gfnIsEmpty(this.ds_ServerCheckList.getColumn(i, "FILE_NAME"))) { alert("파일명은 필수 입력 항목입니다."); this.grd_ServerCheckList.setCellPos(2, i); this.grd_ServerCheckList.showEditor(true); return false;}
        		else if(this.gfnIsEmpty(this.ds_ServerCheckList.getColumn(i, "FILE_PATH"))) { alert("파일경로는 필수 입력 항목입니다."); this.grd_ServerCheckList.setCellPos(3, i); this.grd_ServerCheckList.showEditor(true); return false;}
        		else if(this.gfnIsEmpty(this.ds_ServerCheckList.getColumn(i, "ENCODING"))) { alert("인코딩은 필수 입력 항목입니다."); this.grd_ServerCheckList.setCellPos(4, i); this.grd_ServerCheckList.showEditor(true); return false;}
        		else if(this.gfnIsEmpty(this.ds_ServerCheckList.getColumn(i, "REMARK"))) { this.ds_ServerCheckList.setColumn(i, "REMARK", " "); }
        	}

        	return true;
        };

        // 화면 콜백
        this.fnCallBack = function(strSvcID, nErrorCode, strErrorMag)
        {
        	// 에러 예외처리
        	if(nErrorCode != 0)
        	{
        		alert("strSvcID : " + strSvcID + "\n" + "nErrorCode : " + nErrorCode + "\n" + "strErrorMag : " + strErrorMag);
        		return;
        	}
        	else
        	{
        		if (strSvcID == "gfnGetCode") {
        			this.div_Search.form.cmb_UseFlag.set_value("1");
        		}
        		else if(strSvcID == "CreateFile")
        		{
        			alert("파일 생성 되었습니다.");
        			this.fnServerCheckList();
        		}
        		else if(strSvcID == "getServerList")
        		{
        			var sIdx = 0;
        			if(nexacro._Browser == "Runtime") {
        				sHisServer		= this.gfnGetReg("SIL_SEQ");
        			}

        			if(!this.gfnIsEmpty(sHisServer))
        			{
        				sIdx = this.ds_cmm_Server.findRow("SIL_SEQ", sHisServer);
        			}
        			this.div_Search.form.cmb_Server.set_index(sIdx);
        			this.fnFileButtonControl(sIdx);
        			this.fnServerCheckList();
        		}
        		else if(strSvcID == "getServerCheckList")
        		{
        			var sCurRow = this.ds_ServerCheckList.rowposition;
        			this.fnServerCheckDet(this.ds_ServerCheckList.getColumn(sCurRow, "SCL_SEQ"), "Search");
        		}
        		else if(strSvcID == "getServerCheckDet")
        		{
        			this.fnButtonControl();
        		}
        		else if(strSvcID == "Save")
        		{
        			alert("저장 완료 되었습니다.");
        			this.fnServerCheckList();
        		}
        		else if(strSvcID == "CheckAccountList")
        		{
        			var sCnt = this.ds_AccountList.rowcount;
        			if(sCnt > 0)
        			{
        				var Argument = {};
        				Argument = {
        					curYYYYMM		: this.div_Search.form.div_Search_yyyyMM.getYYYYMM() 	// 현재 조회한 년월
        					,sSclSeq		: this.ds_ServerCheckList.getColumn(this.ds_ServerCheckList.rowposition, "SCL_SEQ") // 체크리스트 일련번호
        					,dsAccountList	: this.ds_AccountList									// 암호변경 대상 계정목록
        					,dsServerCheckDet : this.ds_ServerCheckDet								// 현재 등록한 계정 목록
        				};
        				this.commUtil.popup(this, "AC_ServerCheckDetPopup", "Admin::AC_ServerCheckDetPopup.xfdl", -1, -1, 600, 250, true, true, false, Argument, "fnPopupCallBack");
        			}
        			else
        			{
        				alert("해당 년월 패스워드 생성 데이터가 없습니다. \n패스워드 리스트에서 패스워드 생성을 먼저 진행해 주세요.");
        				return false;
        			}
        		}
        		else if(strSvcID == "CheckCopyData")
        		{
        			var sCnt = this.ds_CheckCopyData.rowcount;
        			if(sCnt > 0)
        			{
        				if(this.confirm("이전 데이터 복사를 진행 하시겠습니까?"))
        				{
        					var Argument = {};
        					Argument = {
        						curYYYYMM		: this.div_Search.form.div_Search_yyyyMM.getYYYYMM() 	// 현재 조회한 년월
        						,dsCopyData		: this.ds_CheckCopyData									// 복사 대상 년월 리스트
        					};
        					this.commUtil.popup(this, "AC_ServerCheckListPopup", "Admin::AC_ServerCheckListPopup.xfdl", -1, -1, 390, 200, true, true, false, Argument, "fnPopupCallBack");
        				}
        			}
        			else
        			{
        				alert("복사할 이전 데이터가 없습니다. \n신규 버튼을 통해서 데이터를 생성해주세요.");
        				return false;
        			}
        		}
        	}
        };
        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.common_onclick = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_ServerCheckNew": // 서버파일 목록 등록
        			if(this.fnDataCheck())
        			{
        				this.fnFileInsert();
        			}
        			break;

        		case "btn_File": // 파일 생성
        			if(this.fnValidation())
        			{
        				this.ds_ServerFileList.clearData();
        				this.ds_ServerFileList.copyData(this.ds_ServerCheckList);
        				this.ds_ServerFileList.filter("USE_FLAG=='1'");

        				if(this.ds_ServerFileList.rowcount > 0)
        				{
        					this.fnFileIsExist();
        				}
        			}
        			break;

        		case "btn_Search": // 조회
        			this.fnServerCheckList();
        			break;

        		case "btn_Save": // 저장
        			if(this.fnValidation())
        			{
        				this.fnSave();
        			}
        			break;

        // 		case "btn_Del": // 삭제
        // 			var sCnt = this.ds_ServerCheckDet.rowcount;
        // 			if( sCnt > 0 ) alert("해당 파일에 연결된 계정이 존재합니다. \n먼저 연결된 계정 데이터를 삭제해 주세요.");
        // 			else
        // 			{
        // 				var sCurRow = this.ds_ServerCheckList.rowposition;
        // 				var sFileNm = this.ds_ServerCheckList.getColumn(sCurRow, "FILE_NAME");
        // 				if(this.confirm("파일 [ " + sFileNm + " ] 삭제 하시겠습니까?"))
        // 					this.fnDelete(sCurRow);
        // 			}
        // 			break;

        		case "btn_Copy": // 이전 체크리스트 복사
        			this.fnCheckCopyData();
        			break;

        		case "btn_AccountAdd" : // 계정추가
        			this.fnCheckAccountList();
        			break;

        		case "btn_AccountDel" : // 계정삭제
        			var curPosition = this.ds_ServerCheckDet.rowposition;
        			if(curPosition != -1)
        			{
        				if(this.confirm("해당 계정을 삭제 하시겠습니까?")) this.fnAccountDel();
        			}
        			else
        			{
        				alert("계정을 선택해주세요.");
        				return;
        			}

        			break;
        	}
        };

        this.div_Search_cmb_Server_onitemchanged = function(obj,e)
        {
        	this.fnFileButtonControl(e.postvalue);

        	if(bCmdChangeFlag)
        	{
        		this.fnServerCheckList();
        	}
        	else
        	{
        		this.div_Search.form.cmb_Server.set_index(e.preindex);
        	}
        };

        this.ds_ServerCheckList_onrowposchanged = function(obj,e)
        {
        	if(this.fnDataCheck(e.oldrow)) this.fnServerCheckDet(obj.getColumn(e.newrow, "SCL_SEQ"), "Search");
        };

        this.div_Search_cmb_Server_canitemchange = function(obj,e)
        {
        	bCmdChangeFlag = this.fnDataCheck(e.oldrow);
        };

        /************************************************************************************************
        * 팝업 TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        //팝업 콜백 함수
        this.fnPopupCallBack = function(popupId, popupArg)
        {
        	popupArg = this.commUtil.popupReturn();
        	if(this.gfnIsEmpty(popupArg))
        	{
        		return;
        	}
        	else
        	{
        		switch(popupId)
        		{
        			case "AC_ServerCheckDetPopup" :
        				this.ds_ServerCheckDet.deleteAll();
        				var ds = new nexacro.Dataset();
        				ds.loadXML(popupArg);
        				var sCnt = ds.rowcount;

        				for(var i = 0; i < sCnt; i++)
        				{
        					var nRow = this.ds_ServerCheckDet.addRow();
        					this.ds_ServerCheckDet.copyRow(nRow, ds, i);
        				}

        				break;

        			case "AC_ServerCheckListPopup" :
        				this.fnServerCheckList();
        				break;
        		}
        	}
        };

        /*
        	reason(VirtualFileEventInfo) 값에 따른 이벤트
        	reason		evt
        	1		:	open()
        	2		:	close()
        	3		:	read() binarydata 또는 textdata 속성에 데이터 저장
        	4		:	readLine() textdata 속성에 데이터 저장
        	5		:	seek()
        	6		:	write()
        	7		:	remove()
        	8		:	getFileList() fileattributelist 속성 데이터 저장
        	9		:	getFileSize() filesize 속성에 데이터 저장
        	10		:	isExist() fileisexist 속성에 데이터 저장
        	11		:	createDirectory()
        	12		:	deleteDirectory()
        	13		:	renameDirectory()
        	14		:	copy()
        	15		:	rename()
        */
        this.fileList_onerror = function(obj,e)
        {
        	//alert("ID : " + e.eventid + "\nerrorCode : " + e.statuscode + "\nerrorType : " + e.errortype + "\nmsg : " + e.errormsg);
        	trace("File Name : " + obj.filename + "\neventID : " + e.eventid + "\nerrorCode : " + e.statuscode + "\nerrorType : " + e.errortype + "\nmsg : " + e.errormsg);
        };

        this.fileList_onsuccess = function(obj,e)
        {
        	switch(e.reason)
        	{
        		case 1:	// open
        			break;

        		case 2:	// close
        			break;

        		case 3: // read
        			/*
        				read 코딩 순서 중요함!!!
        			*/
        			var content = e.textdata;
        			for(var i = 0; i < arr.length; i++)
        			{
        				if(JSON.stringify(obj.id)==JSON.stringify(arr[i].id))
        				{
        					this.fnServerCheckDet(obj.id, "FILE");
        					var sSclSeq = this.ds_ServerCheckDetTmp.getColumn(0, "SCL_SEQ");
        					var sFindRow = this.ds_ServerFileList.findRow("SCL_SEQ", sSclSeq);
        					var sEncoding = this.ds_ServerFileList.getColumn(sFindRow, "ENCODING");

        					var newCont = "";
        					var sContArr = content.split('\n');

        					for(var j = 0; j < sContArr.length; j++)
        					{
        						var tempTxt = sContArr[j];

        						for(var k = 0; k < this.ds_ServerCheckDetTmp.rowcount; k++)
        						{
        							var sOldPw = this.ds_ServerCheckDetTmp.getColumn(k, "OLD_PW");
        							var sNewPw = this.ds_ServerCheckDetTmp.getColumn(k, "NEW_PW");
        							tempTxt = tempTxt.replace(sOldPw, sNewPw);
        						}

        						newCont += tempTxt;
        						if(j != sContArr.length -1 ) newCont += "\n";
        					}

        					var contObj = new Object();
        					contObj.id = sSclSeq;
        					contObj.content = newCont;
        					contObj.path = obj.fullpath;
        					contObj.fileNm = obj.filename;
        					contObj.encoding = sEncoding;
         					newArr.push(contObj);

        					arr[i].remove(obj);
        				}
        			}

        			break;

        		case 6: // 쓰기

        			break;

        		case 7: // 삭제
        			break;

        		case 10: // 파일 여부
        			var sRowCnt = this.ds_ServerFileList.rowcount;

        			checkExtCnt = checkExtCnt + 1;

        			if(!e.fileisexist) errisExtCnt = errisExtCnt + 1;
        			else sucisExtCnt = sucisExtCnt + 1;

        // 			alert("체크 건수2 : "+ checkExtCnt);
        // 			alert("체크 건수 Suc : "+ sucisExtCnt);
        // 			alert("체크 건수 Err : "+ errisExtCnt);

        			if(checkExtCnt == sRowCnt)
        			{
        				if(sRowCnt == sucisExtCnt)
        				{
        					this.fnFileOpen();
        				}
        				else
        				{
        					alert("파일이 존재하지 않습니다. \n서버 또는 파일경로 + 파일명을 확인 해주세요.");
        				}
        			}
        			break;

        		case 11: // 백업 폴더 생성 여부
        			break;

        		case 14: // copy 복사
        			break;
        	}
        };

        // 파일 존재 여부체크 001
        this.fnFileIsExist = function()
        {
        	arr = new Array();
        	newArr = new Array();
        	checkExtCnt = 0; // 체크 건수 초기화
        	errisExtCnt = 0; // 존재하지 않는 파일 여부 건수 초기화
        	sucisExtCnt = 0; // 존재하는 파일 여부 건수 초기화

        	var sRowCnt = this.ds_ServerFileList.rowcount;

        	for(var i = 0; i < sRowCnt; i++)
        	{
        		var sSclSeq = this.ds_ServerFileList.getColumn(i, "SCL_SEQ");
        		var filePath = this.ds_ServerFileList.getColumn(i, "FILE_PATH");
        		var fileNm = this.ds_ServerFileList.getColumn(i, "FILE_NAME");
        		arr[i] = new VirtualFile();

        		arr[i].id = sSclSeq;
        		arr[i].addEventHandler("onsuccess", this.fileList_onsuccess, this);
        		arr[i].addEventHandler("onerror", this.fileList_onerror, this);
        		arr[i].isExist(filePath + "/" + fileNm);
        	}
        };

        // 파일 Open 002
        this.fnFileOpen = function()
        {
        	var chServerCnt = this.ds_ServerFileList.rowcount;

        	for(var i = 0; i < chServerCnt; i++)
        	{
        		var filePath = this.ds_ServerFileList.getColumn(i, "FILE_PATH");
        		var fileNm = this.ds_ServerFileList.getColumn(i, "FILE_NAME");
        		arr[i].open(filePath + "/" + fileNm, VirtualFile.openRead|VirtualFile.openText);
        	}

        	// 백업 폴더 생성
        	this.fnCreateBackupDic();
        };

        // 백업 폴더 생성 003
        this.fnCreateBackupDic = function()
        {
        	// 백업폴더 YYYYMM
        	var sYYYYMM = this.div_Search.form.div_Search_yyyyMM.getYYYYMM();
        	var sRowCnt = this.ds_ServerFileList.rowcount;

        	for(var i = 0; i < sRowCnt; i++)
        	{
        		var filePath = this.ds_ServerFileList.getColumn(i, "FILE_PATH");
        		var fileNm = this.ds_ServerFileList.getColumn(i, "FILE_NAME");

        		arr[i].createDirectory(filePath + "/" + sYYYYMM);
        	}

        	if(this.confirm("백업파일을 생성 하시겠습니까?"))
        	{
        		this.fnFileCopy();
        	}
        	else
        	{
        		this.fnFileRead();
        	}
        };

        // 파일 Copy 004-1
        this.fnFileCopy = function()
        {
        	// 백업폴더 YYYYMM
        	var sYYYYMM = this.div_Search.form.div_Search_yyyyMM.getYYYYMM();
        	var sRowCnt = this.ds_ServerFileList.rowcount;

        	for(var i = 0; i < sRowCnt; i++)
        	{
        		var filePath = this.ds_ServerFileList.getColumn(i, "FILE_PATH");
        		var fileNm = this.ds_ServerFileList.getColumn(i, "FILE_NAME");
        		arr[i].copy(filePath + "/" + fileNm, filePath + "/" + sYYYYMM + "/" + fileNm);
        	}

        	this.fnFileRead();
        };

        //파일 읽기 004-2
        this.fnFileRead = function()
        {
        	var sYYYYMM = this.div_Search.form.div_Search_yyyyMM.getYYYYMM();
        	var sFileCnt = this.ds_ServerFileList.rowcount;
        	for(var i = 0; i < sFileCnt; i++)
        	{
        		var sEncoding = this.ds_ServerFileList.getColumn(i, "ENCODING");

        		arr[i].read(null, sEncoding);
        		arr[i].close();
        	}

        	if(this.confirm("백업 완료 되었습니다. \n새로운 파일 생성 진행하시겠습니까?"))
        	{
        		this.fnFileWrite();
        	}

        };

        //파일 쓰기 006
        this.fnFileWrite = function()
        {
        	arr[i] = new Array();
        	var chServerCnt = this.ds_ServerFileList.rowcount;
        	var filePath = "";
        	var fileNm = "";

        	for(var i = 0; i < chServerCnt; i++)
        	{
        		sSclSeq = this.ds_ServerFileList.getColumn(i, "SCL_SEQ");

        		filePath = this.ds_ServerFileList.getColumn(i, "FILE_PATH");
        		fileNm = this.ds_ServerFileList.getColumn(i, "FILE_NAME");

        		arr[i] = new VirtualFile();
        		arr[i].id = sSclSeq;
        		arr[i].open(filePath + "/" + fileNm, VirtualFile.openWrite);
        	}

        	for(var i = 0; i < arr.length; i++)
        	{
        		arr[i].seek(-1, VirtualFile.seekBegin);
        		var bSucc = arr[i].write(newArr[i].content, newArr[i].encoding);
        		arr[i].close();
        		this.fnCheckList(newArr[i].id, newArr[i].fileNm, bSucc);
        	}
        };

        this.grd_CheckServerList_oncellclick = function(obj,e)
        {
        	this.parent.parent.parent.fnComCellClick(obj, e);
        };

        // 암호 변경 완료 체크리스트
        this.fnCheckList = function(sSclSeq, fileNm, bSucc)
        {
        	var sListCnt = this.ds_ServerCheckList.rowcount;
        	this.ds_ServerCheckList.set_enableevent(false);
        	this.ds_ServerCheckList.filter("SCL_SEQ=='"+sSclSeq+"'");
        	for(var i = 0; i < this.ds_ServerCheckList.rowcount; i++)
        	{
        		var msg = "";
        		if(bSucc)
        		{
        			msg = "파일명 [" + fileNm + "]이 생성되었습니다.";
        			sWriteCnt += 1;
        		}
        		else msg = "파일명 [" + fileNm + "]이 생성 안 되었습니다.";
        		this.ds_ServerCheckList.setColumn(i, "REMARK", msg);
        	}
        	this.ds_ServerCheckList.filter("");
        	this.ds_ServerCheckList.set_enableevent(true);

        	if(sWriteCnt == sListCnt) this.fnSave();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.AC_ServerCheckList_onload,this);
            this.div_Search.form.cmb_Server.addEventHandler("onitemchanged",this.div_Search_cmb_Server_onitemchanged,this);
            this.div_Search.form.cmb_Server.addEventHandler("canitemchange",this.div_Search_cmb_Server_canitemchange,this);
            this.div_Search.form.btn_Search.addEventHandler("onclick",this.common_onclick,this);
            this.div_Search.form.btn_Save.addEventHandler("onclick",this.common_onclick,this);
            this.div_Search.form.btn_Copy.addEventHandler("onclick",this.common_onclick,this);
            this.div_Search.form.btn_File.addEventHandler("onclick",this.common_onclick,this);
            this.btn_ServerCheckNew.addEventHandler("onclick",this.common_onclick,this);
            this.btn_AccountAdd.addEventHandler("onclick",this.common_onclick,this);
            this.btn_AccountDel.addEventHandler("onclick",this.common_onclick,this);
            this.ds_ServerCheckList.addEventHandler("onrowposchanged",this.ds_ServerCheckList_onrowposchanged,this);
            this.ds_ServerFileList.addEventHandler("onrowposchanged",this.ds_ServerFileList_onrowposchanged,this);
        };
        this.loadIncludeScript("AC_ServerCheckList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
