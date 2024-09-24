(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AC_ServerInfoList");
            this.set_titletext("서버목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmm_Server", this);
            obj._setContents("<ColumnInfo><Column id=\"SIL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SERVER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ORD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_Port", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"ORD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_Protocol", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"ORD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ServerInfoList", this);
            obj._setContents("<ColumnInfo><Column id=\"SIL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SERVER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SERVER_NAME_ALIAS\" type=\"STRING\" size=\"256\"/><Column id=\"PUBLIC_IP\" type=\"STRING\" size=\"256\"/><Column id=\"PRIVATE_IP\" type=\"STRING\" size=\"256\"/><Column id=\"USE_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_AcountTaskCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"ORD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ServerAccountList", this);
            obj._setContents("<ColumnInfo><Column id=\"SAL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SIL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_OWNER\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT_TASK_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PUBLIC_PORT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PROTOCOL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"USE_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_UseFlag", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"string\" size=\"30\"/><Column id=\"CAPTION\" type=\"string\" size=\"255\"/><Column id=\"VAL1\" type=\"string\" size=\"100\"/><Column id=\"VAL2\" type=\"string\" size=\"100\"/><Column id=\"VAL3\" type=\"string\" size=\"100\"/><Column id=\"VAL4\" type=\"string\" size=\"100\"/><Column id=\"REMARK\" type=\"string\" size=\"1073741823\"/><Column id=\"ORD\" type=\"string\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_AccountUser", this);
            obj._setContents("<ColumnInfo><Column id=\"AU_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SAL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"AU_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"AU_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"AU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USE_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_FALG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_Search","8","8",null,"40","8",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SchList");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Server","8","9","58","22",null,null,null,null,null,null,this.div_Search.form);
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
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_tran");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("stc_UseFlag","cmb_Server:10","8","58","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("4");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_Search.addChild(obj.name, obj);

            obj = new Combo("cmb_UseFlag","stc_UseFlag:16","9","87","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("5");
            obj.set_innerdataset("ds_cmm_UseFlag");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_index("-1");
            this.div_Search.addChild(obj.name, obj);

            obj = new Grid("grd_ServerInfoList","10","86","672",null,null,"8",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_ServerInfoList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"110\"/><Column size=\"110\"/><Column size=\"60\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"서버명\"/><Cell col=\"1\" text=\"서버ALIAS\"/><Cell col=\"2\" text=\"공용 IP\"/><Cell col=\"3\" text=\"내부 IP\"/><Cell col=\"4\" text=\"사용여부\"/><Cell col=\"5\" text=\"파일생성여부\"/></Band><Band id=\"body\"><Cell text=\"bind:SERVER_NAME\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"1\" displaytype=\"editcontrol\" edittype=\"text\" text=\"bind:SERVER_NAME_ALIAS\"/><Cell col=\"2\" text=\"bind:PUBLIC_IP\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:PRIVATE_IP\" edittype=\"text\" displaytype=\"editcontrol\"/><Cell col=\"4\" text=\"bind:USE_FLAG\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"5\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" text=\"bind:FILE_FLAG\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_ServerAccountList","690","86",null,null,"7","8",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_ServerAccountList");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"계정\"/><Cell col=\"1\" text=\"프로토콜\"/><Cell col=\"2\" text=\"포트\"/><Cell col=\"3\" text=\"서버관리자\"/><Cell col=\"4\" text=\"계정작업\"/><Cell col=\"5\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:ACCOUNT\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"1\" text=\"bind:PROTOCOL_CODE\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_cmm_Protocol\" combodatacol=\"CAPTION\" combocodecol=\"CODE\"/><Cell col=\"2\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_cmm_Port\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" text=\"bind:PUBLIC_PORT_CODE\"/><Cell col=\"3\" text=\"bind:ACCOUNT_USER\" expandshow=\"show\" expandimage=\"url(&apos;theme://images/btn_WF_Sch.png&apos;)\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:ACCOUNT_TASK_CODE\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_cmm_AcountTaskCode\" combodatacol=\"CAPTION\" combocodecol=\"CODE\"/><Cell col=\"5\" text=\"bind:USE_FLAG\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ServerInfo","10","56","672","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_POP_GroupBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ServerAccount","690","56",null,"30","8",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_POP_GroupBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ServerInfoText","16","63","95","16",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("서버정보");
            obj.set_cssclass("sta_POP_GroupTit");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ServerAccountText","700","63","95","16",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("계정정보");
            obj.set_cssclass("sta_POP_GroupTit");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ServerNew","613","61","58","22",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_AccountNew",null,"61","58","22","16",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("추가");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_AccountDel",null,"61","58","22","btn_AccountNew:8",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("삭제");
            obj.set_enable("false");
            this.addChild(obj.name, obj);
            // Layout Functions
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

        };
        
        // User Script
        this.addIncludeScript("AC_ServerInfoList.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("AC_ServerInfoList.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("AC_ServerInfoList.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("AC_ServerInfoList.xfdl","Script::CommGrid.xjs");
        this.registerScript("AC_ServerInfoList.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 : 서버점검관리
        * 02. 화면명   : 서버목록(AC_ServerInfoList)
        * 03. 화면설명 : 서버목록 화면
        * 04. 작성일   : 2022.06.02
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
        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/
        this.AC_ServerInfoList_onload = function(obj,e)
        {
        	this.gfnCompInit(obj);	//사용자 Grid
        	this.fnGetCode();		//공통코드 조회
        };

        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        // 공통코드 조회
        this.fnGetCode = function()
        {
        	this.gfnAddCodeDataset("ds_cmm_Port" 			, "PUBLIC_PORT_CODE");
        	this.gfnAddCodeDataset("ds_cmm_Protocol" 		, "PROTOCOL_CODE");
        	this.gfnAddCodeDataset("ds_cmm_AcountTaskCode" 	, "ACCOUNT_TASK_CODE");
        	this.gfnAddCodeDataset("ds_cmm_UseFlag"			,"USE_FLAG", true);		// 사용여부
        	this.gfnCodeTransaction();
        };

        // 검색용 서버 목록 조회
        this.fnServerList = function()
        {
        	this.gfnAddSendParameter("FORM_NM", this.name);
        	this.gfnAddOutputDataset("ds_cmm_Server",  "dsOutput");
        	this.gfnCommonTransaction("getServerList", "AC_ServerInfoList_S01");
        };

        // 서버목록 조회
        this.fnServerInfoList = function()
        {
        	var sSilSeq = this.div_Search.form.cmb_Server.value;
        	if(!this.gfnIsEmpty(sSilSeq))
        	{
        		this.gfnAddSendParameter("SIL_SEQ", sSilSeq);
        	}
        	this.gfnAddSendParameter("USE_FLAG", this.div_Search.form.cmb_UseFlag.value);

        	this.gfnAddOutputDataset("ds_ServerInfoList",  "dsOutput");
        	this.gfnCommonTransaction("getServerInfoList", "AC_ServerInfoList_S02");
        };

        // 서버 계정 조회
        this.fnServerAccountList = function(sSilSeq)
        {
        	this.gfnAddSendParameter("SIL_SEQ", sSilSeq);
        	this.gfnAddSendParameter("USE_FLAG", this.div_Search.form.cmb_UseFlag.value);

        	this.gfnAddOutputDataset("ds_ServerAccountList",  "dsOutput");
        	this.gfnCommonTransaction("getServerAccountList", "AC_ServerInfoList_S03");
        };

        // 서버 추가
        this.fnServerInsert = function()
        {
        	var bServerFlag = false;
        	var sServerCnt = this.ds_ServerInfoList.rowcount;

        	for(var i = 0; i < sServerCnt; i++)
        	{
        		var nRowType = this.ds_ServerInfoList.getRowType(i);
        		if(nRowType == 2)
        		{
        			bServerFlag = true;
        			break;
        		}
        	}

        	if(!bServerFlag)
        	{
        		var sServerNm = this.div_Search.form.cmb_Server.text;
        		var nRow = this.ds_ServerInfoList.addRow();

        		if(this.gfnIsEmpty(sServerCd))
        		{
        			this.ds_ServerInfoList.setColumn(nRow, "SERVER_NAME", sServerNm);
        		}
        		this.ds_ServerInfoList.setColumn(nRow, "USE_FLAG", "1");
        	}
        	else
        	{
        		alert("신규 등록하는 서버 정보 데이터가 있습니다. \n신규 데이터 저장 후 서버 정보 추가 하세요.");
        	}
        };

        // 서버 계정 정보 추가
        this.fnAccountInsert = function()
        {
        	var sCurRow = this.ds_ServerInfoList.rowposition;
        	var sSilSeq = this.ds_ServerInfoList.getColumn(sCurRow, "SIL_SEQ");

        	var nRow = this.ds_ServerAccountList.addRow();

        	if(!this.gfnIsEmpty(sSilSeq))
        	{
        		this.ds_ServerAccountList.setColumn(nRow, "SIL_SEQ", sSilSeq);
        	}
        	this.ds_ServerAccountList.setColumn(nRow, "USE_FLAG", "1");

        	this.fnSubBtnControl();
        };

        // 계정 정보 삭제
        this.fnAccountDel = function()
        {
        	var sCurRow = this.ds_ServerAccountList.rowposition;
        	var sSilSeq = this.ds_ServerAccountList.getColumn(sCurRow, "SIL_SEQ");

        	if(this.gfnIsEmpty(sSilSeq))
        	{
        		this.ds_ServerAccountList.deleteRow(sCurRow);
        	}
        	else
        	{
        		alert("계정 정보 삭제처리는 사용여부로 설정합니다.");
        		this.ds_ServerAccountList.setColumn(sCurRow, "USE_FLAG", "0");
        	}
        };

        // 계정 GRD 버튼 컨트롤
        this.fnSubBtnControl = function()
        {
        	var sServerCnt = this.ds_ServerInfoList.rowcount;
        	var sAccountCnt = this.ds_ServerAccountList.rowcount;

        	if(sServerCnt > 0)
        	{
        		this.btn_AccountNew.set_enable(true);
        		if(sAccountCnt > 0) this.btn_AccountDel.set_enable(true);
        		else this.btn_AccountDel.set_enable(false);
        	}
        	else
        	{
        		this.btn_AccountNew.set_enable(false);
        		this.btn_AccountDel.set_enable(false);
        	}
        };

        // 유효성 체크
        this.fnValidation = function()
        {
        	if(this.ds_ServerInfoList.rowcount == 0)
        	{
        		alert("서버정보를 입력 해주세요.");
        		return false;
        	}

        	for(var i = 0; i < this.ds_ServerInfoList.rowcount; i++)
        	{
        		if(this.gfnIsEmpty(this.ds_ServerInfoList.getColumn(i, "SERVER_NAME"))) { alert("서버명은 필수 입력 항목입니다."); this.grd_ServerInfoList.setCellPos(0, i); this.grd_ServerInfoList.showEditor(true); return false;}
        		else if(this.gfnIsEmpty(this.ds_ServerInfoList.getColumn(i, "SERVER_NAME_ALIAS"))) { alert("서버ALIAS명은 필수 입력 항목입니다."); this.grd_ServerInfoList.setCellPos(1, i); this.grd_ServerInfoList.showEditor(true); return false;}
        		else if(this.gfnIsEmpty(this.ds_ServerInfoList.getColumn(i, "PUBLIC_IP"))) { alert("공용IP는 필수 입력 항목입니다."); this.grd_ServerInfoList.setCellPos(2, i); this.grd_ServerInfoList.showEditor(true); return false;}
        		else if(this.gfnIsEmpty(this.ds_ServerInfoList.getColumn(i, "PRIVATE_IP"))) { alert("내부IP는 필수 입력 항목입니다."); this.grd_ServerInfoList.setCellPos(3, i); this.grd_ServerInfoList.showEditor(true); return false;}
        	}

        	if(this.ds_ServerAccountList.rowcount > 0)
        	{
        		for(var i = 0; i < this.ds_ServerAccountList.rowcount; i++)
        		{
        			if(this.gfnIsEmpty(this.ds_ServerAccountList.getColumn(i, "ACCOUNT"))) { alert("계정은 필수 입력 항목입니다."); this.grd_ServerAccountList.setCellPos(0, i); this.grd_ServerAccountList.showEditor(true); return false;}
        			else if(this.gfnIsEmpty(this.ds_ServerAccountList.getColumn(i, "PROTOCOL_CODE"))) { alert("프로토콜은 필수 입력 항목입니다."); this.grd_ServerAccountList.setCellPos(1, i); this.grd_ServerAccountList.showEditor(true); return false;}
        			else if(this.gfnIsEmpty(this.ds_ServerAccountList.getColumn(i, "PROTOCOL_CODE"))) { alert("포트는 필수 입력 항목입니다."); this.grd_ServerAccountList.setCellPos(2, i); this.grd_ServerAccountList.showEditor(true); return false;}
        			else if(this.gfnIsEmpty(this.ds_ServerAccountList.getColumn(i, "ACCOUNT_TASK_CODE"))) { alert("계정 작업은 필수 입력 항목입니다."); this.grd_ServerAccountList.setCellPos(4, i); this.grd_ServerAccountList.showEditor(true); return false;}
        		}
        	}

        	return true;
        };

        // 저장
        this.fnSave = function()
        {
        	this.gfnAddInputDataset("ds_ServerInfoList",  "ds_ServerInfoList");
        	this.gfnAddInputDataset("ds_ServerAccountList",  "ds_ServerAccountList");
        	this.gfnCommonTransaction("Save", "AC_ServerInfoList_R01");
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
        		if(strSvcID == "gfnGetCode")
        		{
        			this.div_Search.form.cmb_UseFlag.set_value("1");
        			this.fnServerList();
        		}
        		else if(strSvcID == "getServerList")
        		{
        			this.div_Search.form.cmb_Server.set_index(0);
        			this.fnServerInfoList();
        		}
        		else if(strSvcID == "getServerInfoList")
        		{
        			if(this.ds_ServerInfoList.rowcount > 0)
        			{
        				var sCurRow = this.ds_ServerInfoList.rowposition;
        				this.fnServerAccountList(this.ds_ServerInfoList.getColumn(sCurRow, "SIL_SEQ"));
        			}
        		}
        		else if(strSvcID == "getServerAccountList")
        		{
        			this.fnSubBtnControl();
        		}
        		else if(strSvcID == "Save")
        		{
        			alert("저장 되었습니다.");
        			this.fnServerList();
        		}
        	}
        };

        // 계정 정보 변경 내역 있는지 여부 확인
        this.fnDataCheck = function(sOldrow)
        {
        	var bResult = false;

        	if (this.gfnIsUpdateDs(this.ds_ServerAccountList))
        	{
        		if (this.confirm("변경된 계정정보 데이터가 존재 합니다 계속 진행 하시겠습니까?"))	{
        			this.ds_ServerAccountList.reset();
        			bResult = true;
        		} else {
        			this.ds_ServerInfoList.set_enableevent(false);
        			if(this.gfnIsEmpty(sOldrow)) this.ds_ServerInfoList.set_rowposition(this.ds_ServerInfoList.rowposition);
        			else this.ds_ServerInfoList.set_rowposition(sOldrow);
        			this.ds_ServerInfoList.set_enableevent(true);
        		}
        	}
        	else
        	{
        		bResult = true;
        	}

        	return bResult;
        };

        // 서버 정보 등록 카운트 확인
        this.fnInsertCheck = function()
        {
        	var bResult = false;
        	var sServerCnt = this.ds_ServerInfoList.rowcount;

        	for(var i = 0; i < sServerCnt; i++)
        	{
        		var nRowType = this.ds_ServerInfoList.getRowType(i);
        		if(nRowType == 2)
        		{
        			bResult = true;
        			break;
        		}
        	}

        	return bResult;
        };
        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.grd_ServerInfoList_oncellclick = function(obj,e)
        {
        	this.parent.parent.parent.fnComCellClick(obj, e);
        };

        this.div_Search_cmb_Server_onitemchanged = function(obj,e)
        {
        	if(bCmdChangeFlag)
        	{
        		this.fnServerInfoList();
        	}
        	else
        	{
        		this.div_Search.form.cmb_Server.set_index(e.preindex);
        	}
        };

        this.ds_ServerInfoList_onrowposchanged = function(obj,e)
        {
        	if(this.fnDataCheck(e.oldrow)) this.fnServerAccountList(obj.getColumn(e.newrow, "SIL_SEQ"));
        };

        this.div_Search_cmb_Server_canitemchange = function(obj,e)
        {
        	bCmdChangeFlag = this.fnDataCheck(e.oldrow);
        };

        this.common_onclick = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_ServerNew":	// 서버정보 추가
        			if(this.fnDataCheck())
        			{
        				if(!this.fnInsertCheck()) this.fnServerInsert();
        				else alert("신규 등록하는 서버 정보 데이터가 있습니다. \n신규 데이터 저장 후 서버 정보 추가 하세요.");
        			}
        			break;

        		case "btn_AccountNew": // 서버계정 정보 추가
        			this.fnAccountInsert();
        			break;

        		case "btn_AccountDel": // 서버계정 정보 삭제
        			this.fnAccountDel();
        			break;

        		case "btn_Save": // 저장
        			if(this.fnValidation()) this.fnSave();
        			break;

        		case "btn_Search": // 조회
        			this.fnServerInfoList();
        			break;
        	}
        };


        // 팝업 콜백
         this.fnPopupCallBack = function(sPopupId, Variant)
        {
        	Variant = this.commUtil.popupReturn();

        	if(this.gfnIsEmpty(Variant)) {
        		return;
        	} else {
        		this.recentVariant = Variant;
        		switch(sPopupId)
        		{
        			case "popupAccontUser" :
        				var sCurRow = this.ds_ServerInfoList.rowposition;
        				this.fnServerAccountList(this.ds_ServerInfoList.getColumn(sCurRow, "SIL_SEQ"));
        			break;
        		}
        	}
        }
        /************************************************************************************************
        * 팝업 TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.grd_ServerAccountList_onexpandup = function(obj,e)
        {
        		var sTitle = "담당자 선택";
        		var sPopupId = "popupAccontUser";

        		var sal_seq = this.ds_ServerAccountList.getColumn(this.ds_ServerAccountList.rowposition, "SAL_SEQ");
        		var Argument = {pvTitle:sTitle, pvSalseq:sal_seq};
        		this.commUtil.popup(this, sPopupId, "Admin::AC_EmpDeptSearchPopup.xfdl", -1, -1, 650, 640, true, false, false, Argument, "fnPopupCallBack");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.AC_ServerInfoList_onload,this);
            this.div_Search.form.cmb_Server.addEventHandler("onitemchanged",this.div_Search_cmb_Server_onitemchanged,this);
            this.div_Search.form.cmb_Server.addEventHandler("canitemchange",this.div_Search_cmb_Server_canitemchange,this);
            this.div_Search.form.btn_Search.addEventHandler("onclick",this.common_onclick,this);
            this.div_Search.form.btn_Save.addEventHandler("onclick",this.common_onclick,this);
            this.grd_ServerInfoList.addEventHandler("onheadclick",this.grd_CheckServerList_onheadclick,this);
            this.grd_ServerInfoList.addEventHandler("oncellclick",this.grd_ServerInfoList_oncellclick,this);
            this.grd_ServerAccountList.addEventHandler("onexpandup",this.grd_ServerAccountList_onexpandup,this);
            this.btn_ServerNew.addEventHandler("onclick",this.common_onclick,this);
            this.btn_AccountNew.addEventHandler("onclick",this.common_onclick,this);
            this.btn_AccountDel.addEventHandler("onclick",this.common_onclick,this);
            this.ds_ServerInfoList.addEventHandler("onrowposchanged",this.ds_ServerInfoList_onrowposchanged,this);
        };
        this.loadIncludeScript("AC_ServerInfoList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
