(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AC_ServerPasswordList");
            this.set_titletext("서버패스워드목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmm_Server", this);
            obj._setContents("<ColumnInfo><Column id=\"SIL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SERVER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ORD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ServerPasswordList", this);
            obj._setContents("<ColumnInfo><Column id=\"SIL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"YYYYMM\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"PROTOCOL_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PROTOCOL_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PW\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_PW\" type=\"STRING\" size=\"256\"/><Column id=\"ALTER_PW_SQL\" type=\"STRING\" size=\"256\"/><Column id=\"TASK_DESC\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"SERVER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SERVER_NAME_ALIAS\" type=\"STRING\" size=\"256\"/><Column id=\"PUBLIC_IP\" type=\"STRING\" size=\"256\"/><Column id=\"PRIVATE_IP\" type=\"STRING\" size=\"256\"/><Column id=\"ORD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Rtn", this);
            obj._setContents("<ColumnInfo><Column id=\"CNT\" type=\"INT\" size=\"256\"/><Column id=\"MODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ServerPasswordListExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"PROTOCOL\" type=\"STRING\" size=\"256\"/><Column id=\"SERVER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PUBLIC_IP\" type=\"STRING\" size=\"256\"/><Column id=\"PRIVATE_IP\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PW\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_PW\" type=\"STRING\" size=\"256\"/><Column id=\"ALTER_PW_SQL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_EmailInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"SAL_SEQ\" type=\"bigdecimal\" size=\"20\"/><Column id=\"YYYYMM\" type=\"string\" size=\"6\"/><Column id=\"SERVER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ACCOUNT\" type=\"string\" size=\"255\"/><Column id=\"PROTOCOL_CODE\" type=\"string\" size=\"20\"/><Column id=\"NEW_PW\" type=\"string\" size=\"255\"/><Column id=\"PUBLIC_IP\" type=\"string\" size=\"255\"/><Column id=\"PUBLIC_PORT_CODE\" type=\"string\" size=\"20\"/><Column id=\"AU_TYPE\" type=\"string\" size=\"1\"/><Column id=\"AU_CODE\" type=\"string\" size=\"200\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NM\" type=\"string\" size=\"255\"/><Column id=\"EMAIL\" type=\"string\" size=\"201\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_info", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_ServerPasswordList","8","56",null,null,"24","8",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_ServerPasswordList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"180\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"250\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"프로토콜\"/><Cell col=\"2\" text=\"서버명\"/><Cell col=\"3\" text=\"계정\"/><Cell col=\"4\" text=\"적용 PW\"/><Cell col=\"5\" text=\"이전 PW\"/><Cell col=\"6\" text=\"로그인 PW 변경 SQL\"/><Cell col=\"7\" text=\"직무설명\"/><Cell col=\"8\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:PROTOCOL_NAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:SERVER_NAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:ACCOUNT\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:NEW_PW\" textAlign=\"left\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"5\" text=\"bind:OLD_PW\" textAlign=\"left\" edittype=\"none\" displaytype=\"text\"/><Cell col=\"6\" text=\"bind:ALTER_PW_SQL\" tooltiptext=\"bind:ALTER_PW_SQL\" textAlign=\"left\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"7\" text=\"bind:TASK_DESC\" tooltiptext=\"bind:TASK_DESC\" textAlign=\"left\" displaytype=\"editcontrol\" edittype=\"text\"/><Cell col=\"8\" text=\"bind:REMARK\" tooltiptext=\"bind:REMARK\" textAlign=\"left\" displaytype=\"editcontrol\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_Search","8","8",null,"40","24",null,null,null,null,null,this);
            obj.set_taborder("1");
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
            obj.getSetter("user_onchanged").set("fnSearch");
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

            obj = new Button("btn_Excel",null,"9","58","22","8",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("8");
            obj.set_text("Excel");
            obj.set_cssclass("btn_WF_Excel");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_Search",null,"9","58","22","btn_Excel:8",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_SchText");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_Save",null,"9","58","22","btn_Search:8",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("6");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_tran");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_Delete",null,"9","59","22","btn_Save:8",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("9");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_tran");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_Add",null,"9","85","22","btn_Delete:8",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("5");
            obj.set_text("패스워드생성");
            obj.set_cssclass("btn_WF_tran");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_DelAll",null,"9","138","22","btn_Add:8",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("7");
            obj.set_text("패스워드 데이터 삭제");
            obj.set_cssclass("btn_WF_tran");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_email",null,"9","68","22","btn_DelAll:9",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("10");
            obj.set_text("메일발송");
            obj.set_cssclass("btn_WF_tran");
            this.div_Search.addChild(obj.name, obj);

            obj = new Grid("grd_ServerPasswordListExcel","1366","48","1248","165",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_ServerPasswordListExcel");
            obj.set_autofittype("none");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"250\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/><Column size=\"300\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"600\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"프로토콜\"/><Cell col=\"1\" text=\"서버명\"/><Cell col=\"2\" text=\"공인IP\"/><Cell col=\"3\" text=\"내부IP\"/><Cell col=\"4\" text=\"계정\"/><Cell col=\"5\" text=\"비고\"/><Cell col=\"6\" text=\"PW\"/><Cell col=\"7\" text=\"OLD_PW\"/><Cell col=\"8\" text=\"ALTER_PW_SQL\"/></Band><Band id=\"body\"><Cell text=\"bind:PROTOCOL\"/><Cell col=\"1\" text=\"bind:SERVER_NAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:PUBLIC_IP\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:PRIVATE_IP\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:ACCOUNT\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:REMARK\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:NEW_PW\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:OLD_PW\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:ALTER_PW_SQL\" textAlign=\"left\"/></Band></Format></Formats>");
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
        this.addIncludeScript("AC_ServerPasswordList.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("AC_ServerPasswordList.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("AC_ServerPasswordList.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("AC_ServerPasswordList.xfdl","Script::CommGrid.xjs");
        this.registerScript("AC_ServerPasswordList.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 : 서버점검관리
        * 02. 화면명   : 서버패스워드목록(AC_ServerPasswordList)
        * 03. 화면설명 : 서버패스워드목록 화면
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

        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/
        this.AC_ServerPasswordList_onload = function(obj,e)
        {
        	this.gfnCompInit(obj);	// 사용자 Grid
        	this.fnServerList();	// 서버목록 조회
        };
        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        // 검색용 서버 목록 조회
        this.fnServerList = function()
        {
        	this.gfnAddSendParameter("FORM_NM", this.name);
        	this.gfnAddOutputDataset("ds_cmm_Server",  "dsOutput");
        	this.gfnCommonTransaction("getServerList", "AC_ServerInfoList_S01");
        };

        // 서버패스워드목록 조회
        this.fnSearch = function()
        {
        	var sSilSeq = this.div_Search.form.cmb_Server.value;
        	if(!this.gfnIsEmpty(sSilSeq))
        	{
        		this.gfnAddSendParameter("SIL_SEQ", sSilSeq);
        	}
        	this.gfnAddSendParameter("YYYYMM", this.div_Search.form.div_Search_yyyyMM.getYYYYMM());
        	this.gfnAddOutputDataset("ds_ServerPasswordList",  "dsOutput");
        	this.gfnCommonTransaction("getServerPasswordList", "AC_ServerPasswordList_S01");
        };

        // 서버계정 목록 체크
        this.fnCheckAccountInfo = function()
        {
        	this.ds_Rtn.clearData();

        	this.gfnAddOutputDataset("ds_Rtn",  "dsOutput");
        	this.gfnCommonTransaction("getCheckServerInfo", "AC_ServerPasswordList_S02");
        };

        // 서버 패스워드 목록 생성
        this.fnInsert = function()
        {
        	this.gfnAddSendParameter("YYYYMM", this.div_Search.form.div_Search_yyyyMM.getYYYYMM());
        	this.gfnCommonTransaction("setPaswordInsert", "AC_ServerPasswordList_R01");
        };

        // 조회한 패스워드 목록 삭제
        this.fnPasswordDelAll = function()
        {
        	this.gfnAddSendParameter("YYYYMM", this.div_Search.form.div_Search_yyyyMM.getYYYYMM());
        	this.gfnCommonTransaction("setPaswordDel", "AC_ServerPasswordList_R02");
        };

        // 저장
        this.fnSave = function()
        {
        	this.gfnAddInputDataset("ds_ServerPasswordList",  "dsInput");
        	this.gfnCommonTransaction("Save", "AC_ServerPasswordList_R03");
        };

        // 엑셀 데이터 조회
        this.fnExcelData = function()
        {
        	this.gfnAddSendParameter("YYYYMM", this.div_Search.form.div_Search_yyyyMM.getYYYYMM());
        	this.gfnAddOutputDataset("ds_ServerPasswordListExcel",  "dsOutput");
        	this.gfnCommonTransaction("getServerPasswordListExcel", "AC_ServerPasswordList_S04");
        };

        // 엑셀 다운로드
        this.fnExcel = function()
        {
        	var sYYYYMM = this.div_Search.form.div_Search_yyyyMM.getYYYYMM();
        	var objGrd = this.grd_ServerPasswordListExcel;
        	var sFileNm = sYYYYMM + " 패스워드";

        	this.gfn_excelExport(this, objGrd, sFileNm);
        };

        this.SqlReplaceAll = function(str, searchStr, replaceStr)
        {
           return str.split(searchStr).join(replaceStr);
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
        		if(strSvcID == "getServerList")
        		{
        			this.div_Search.form.cmb_Server.set_index(0);
        			this.fnSearch();
        		}
        		else if(strSvcID == "getServerPasswordList")
        		{
        		}
        		else if(strSvcID == "Save")
        		{
        			alert("저장 되었습니다.");
        			this.fnServerList();
        		}
        		else if(strSvcID == "getCheckServerInfo")
        		{
        			var sCnt = this.ds_Rtn.getColumn(0, "CNT");
        			if(sCnt > 0)
        			{
        				var sYYYYMM = this.div_Search.form.div_Search_yyyyMM.getYYYYMM();
        				if(this.confirm("패스워드 생성 시 해당 년월 [" + sYYYYMM + "] 데이터가 존재하는 경우 \n기존 데이터는 삭제되고 \n다시 생성합니다. 진행 하시겠습니까?"))
        				{
        					this.fnInsert();
        				}
        			}
        			else
        			{
        				alert("패스워드 목록 만들기 전에 서버 계정 목록 작성이 필요합니다.");
        			}
        		}
        		else if(strSvcID == "setPaswordInsert")
        		{
        			alert("패스워드 생성 되었습니다.");
        			this.fnSearch();
        		}
        		else if(strSvcID == "Save")
        		{
        			alert("저장 완료 되었습니다.");
        			this.fnSearch();
        		}
        		else if(strSvcID == "setPaswordDel")
        		{
        			alert("패스워드 목록 삭제 완료 되었습니다.");
        			this.fnSearch();
        		}
        		else if(strSvcID == "getServerPasswordListExcel")
        		{
        			if(this.ds_ServerPasswordListExcel.rowcount > 0) this.fnExcel();
        			else alert("패스워드 생성을 먼저 진행해 주세요.");
        		}
        		else if(strSvcID == "getEmailInfoist")
        		{
        			this.fn_SendMail();
        		}
        		else if (strSvcID == "SendEmail")
        		{
        			// trace(this.ds_info.saveXML());
        			this.alert("메일발송이 완료 되었습니다.");
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
        		case "btn_Add":	// 패스워드 목록 생성
        			this.fnCheckAccountInfo();
        			break;

        		case "btn_Save": // 저장
        			var bResult = this.gfnIsUpdateDs(this.ds_ServerPasswordList);
        			if(bResult)	this.fnSave();
        			break;

        		case "btn_Search": // 조회
        			this.fnSearch();
        			break;

        		case "btn_DelAll": // 패스워드 데이터 삭제
        			this.fnPasswordDelAll();
        			break;

        		case "btn_Excel": // 엑셀
        			this.fnExcelData();
        			break;
        		case "btn_Delete" : // 삭제
        			this.ds_ServerPasswordList.deleteRow(this.ds_ServerPasswordList.rowposition);
        			break;
        	}
        };

        this.div_Search_cmb_Server_onitemchanged = function(obj,e)
        {
        	this.fnSearch();
        };

        this.grd_ServerPasswordList_oncellclick = function(obj,e)
        {
        	this.parent.parent.parent.fnComCellClick(obj, e);
        };

        // 패스워드 변경 시 이벤트
        this.ds_ServerPasswordList_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "NEW_PW")
        	{
        		var sServerNm = this.ds_ServerPasswordList.getColumn(e.row, "SERVER_NAME");
        		var sServerAlias = this.ds_ServerPasswordList.getColumn(e.row, "SERVER_NAME_ALIAS");
        		if(sServerNm == "DB" && sServerAlias == "DB")
        		{
        			var sAlterPwSql = this.ds_ServerPasswordList.getColumn(e.row, "ALTER_PW_SQL");
        			var sNewSql = this.SqlReplaceAll(sAlterPwSql,e.oldvalue, e.newvalue);
        			this.ds_ServerPasswordList.setColumn(e.row, "ALTER_PW_SQL", sNewSql);
        		}
        	}
        };

        /************************************************************************************************
        * 팝업 TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.div_Search_btn_email_onclick = function(obj,e)
        {
        	if(this.confirm("담당자에게 일괄 메일 발송 하시겠습니까?"))
        	{
        		this.gfnAddSendParameter("YYYYMM", this.div_Search.form.div_Search_yyyyMM.getYYYYMM());
        		this.gfnAddOutputDataset("ds_EmailInfo",  "ds_emailinfo");
        		this.gfnCommonTransaction("getEmailInfoist", "AC_ServerPasswordList_S05");
        	}
        };

        this.fn_SendMail = function()
        {
        	if (this.ds_EmailInfo.rowcount<=0)
        	{
        		this.alert("메일발송 대상이 없습니다.");
        		return;
        	}
        	this.gfnAddSendParameter("YYYYMM", this.div_Search.form.div_Search_yyyyMM.getYYYYMM());
        	this.gfnAddInputDataset("ds_EmailInfo",  "ds_emailinfo", "A");
        	this.gfnCommonTransaction("SendEmail", "AC_ServerPasswordList_R04");
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.AC_ServerPasswordList_onload,this);
            this.grd_ServerPasswordList.addEventHandler("onheadclick",this.grd_CheckServerList_onheadclick,this);
            this.grd_ServerPasswordList.addEventHandler("oncellclick",this.grd_ServerPasswordList_oncellclick,this);
            this.div_Search.form.cmb_Server.addEventHandler("onitemchanged",this.div_Search_cmb_Server_onitemchanged,this);
            this.div_Search.form.btn_Excel.addEventHandler("onclick",this.common_onclick,this);
            this.div_Search.form.btn_Search.addEventHandler("onclick",this.common_onclick,this);
            this.div_Search.form.btn_Save.addEventHandler("onclick",this.common_onclick,this);
            this.div_Search.form.btn_Delete.addEventHandler("onclick",this.common_onclick,this);
            this.div_Search.form.btn_Add.addEventHandler("onclick",this.common_onclick,this);
            this.div_Search.form.btn_DelAll.addEventHandler("onclick",this.common_onclick,this);
            this.div_Search.form.btn_email.addEventHandler("onclick",this.div_Search_btn_email_onclick,this);
            this.ds_ServerPasswordList.addEventHandler("oncolumnchanged",this.ds_ServerPasswordList_oncolumnchanged,this);
        };
        this.loadIncludeScript("AC_ServerPasswordList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
