(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AH_MenuList");
            this.set_titletext("메뉴관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_MenuList", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_IDX\" type=\"INT\" size=\"256\"/><Column id=\"LANGUAGE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"UP_IDX\" type=\"INT\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_DEPTH\" type=\"INT\" size=\"256\"/><Column id=\"MENU_GRP_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_SORT\" type=\"INT\" size=\"256\"/><Column id=\"HIDDEN_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"NWIN_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ExcelMenuList", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_IDX\" type=\"INT\" size=\"256\"/><Column id=\"LANGUAGE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"UP_IDX\" type=\"INT\" size=\"256\"/><Column id=\"TREE_MENU\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_DEPTH\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USE_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_SORT\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_LanguageCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"string\" size=\"30\"/><Column id=\"CAPTION\" type=\"string\" size=\"255\"/><Column id=\"VAL1\" type=\"string\" size=\"100\"/><Column id=\"VAL2\" type=\"string\" size=\"100\"/><Column id=\"VAL3\" type=\"string\" size=\"100\"/><Column id=\"VAL4\" type=\"string\" size=\"100\"/><Column id=\"REMARK\" type=\"string\" size=\"1073741823\"/><Column id=\"ORD\" type=\"string\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_Search","8","8",null,"40","24",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SchList");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Excel",null,"9","68","22","8",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("1");
            obj.set_text("Excel");
            obj.set_cssclass("btn_WF_Excel");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_Search",null,"9","58","22","btn_Excel:8",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_SchText");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_Save",null,"9","59","23","btn_Search:8",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("2");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_tran");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_deleteRow",null,"9","59","23","btn_Save:8",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("3");
            obj.set_text("삭제");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_addRow",null,"9","59","23","btn_deleteRow:8",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("4");
            obj.set_text("추가");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("stc_UseYn","8","9","69","18",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("5");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_Search.addChild(obj.name, obj);

            obj = new Radio("rdo_UseYn","104","9","214","17",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_columncount("3");
            var div_Search_form_rdo_UseYn_innerdataset = new nexacro.NormalDataset("div_Search_form_rdo_UseYn_innerdataset", obj);
            div_Search_form_rdo_UseYn_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(div_Search_form_rdo_UseYn_innerdataset);
            obj.set_text("사용");
            obj.set_value("Y");
            obj.set_index("1");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("stc_Language","326","9","69","18",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("7");
            obj.set_text("사이트구분");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_Search.addChild(obj.name, obj);

            obj = new Combo("cmb_Language","stc_Language:8","9","150","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_cmm_LanguageCode");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            this.div_Search.addChild(obj.name, obj);

            obj = new Grid("grd_MenuList","8","56",null,null,"24","8",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_MenuList");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"250\"/><Column size=\"250\"/><Column size=\"300\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"구성도(메뉴이동 시 선택)\"/><Cell col=\"1\" text=\"메뉴명\"/><Cell col=\"2\" text=\"URL\"/><Cell col=\"3\" text=\"사용여부\"/><Cell col=\"4\" text=\"Top메뉴 미 표출여부\"/><Cell col=\"5\" text=\"새창 오픈 여부\"/></Band><Band id=\"body\"><Cell text=\"bind:MENU_NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:MENU_DEPTH\" treestate=\"bind:USE_YN\"/><Cell col=\"1\" edittype=\"text\" text=\"bind:MENU_NM\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:MENU_URL\" edittype=\"text\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:USE_FLAG\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"4\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:HIDDEN_FLAG\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"5\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:NWIN_FLAG\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_ExcelMenuList","1402","54","1248","221",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_ExcelMenuList");
            obj.set_autofittype("col");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"200\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"300\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"구성도\"/><Cell col=\"1\" text=\"메뉴ID\"/><Cell col=\"2\" text=\"상위메뉴ID\"/><Cell col=\"3\" text=\"메뉴레벨\"/><Cell col=\"4\" text=\"그룹여부\"/><Cell col=\"5\" text=\"URL\"/><Cell col=\"6\" text=\"사용여부\"/><Cell col=\"7\" text=\"정렬\"/></Band><Band id=\"body\"><Cell text=\"bind:TREE_MENU\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:MENU_IDX\"/><Cell col=\"2\" text=\"bind:UP_IDX\"/><Cell col=\"3\" text=\"bind:MENU_DEPTH\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:MENU_GRP_NM\"/><Cell col=\"5\" text=\"bind:MENU_URL\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:USE_YN\"/><Cell col=\"7\" text=\"bind:MENU_SORT\"/></Band></Format></Formats>");
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
        this.addIncludeScript("AH_MenuList.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("AH_MenuList.xfdl","Script::CommGrid.xjs");
        this.addIncludeScript("AH_MenuList.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("AH_MenuList.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("AH_MenuList.xfdl","Script::ext_CommEco.xjs");
        this.registerScript("AH_MenuList.xfdl", function() {
        /************************************************************************************************
         * 01. 업무구분 : 홈페이지관리
         * 02. 화면명   : 메뉴관리 탭페이지(AH_MenuList)
         * 03. 화면설명 : 메뉴관리 탭페이지
         * 04. 작성일   : 2022.12.01
         * 05. 작성자   : 박종언
         * 06. 수정이력 :
         ***********************************************************************************************
         *     수정일          이  름    사유
         ***********************************************************************************************
         *
         ***********************************************************************************************/


        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
         ************************************************************************************************/
        this.executeIncludeScript("Script::CommTrans.xjs"); /*include "Script::CommTrans.xjs"*/
        this.executeIncludeScript("Script::CommGrid.xjs"); /*include "Script::CommGrid.xjs"*/
        this.executeIncludeScript("Script::CommUtil.xjs"); /*include "Script::CommUtil.xjs"*/
        this.executeIncludeScript("Script::CommSystem.xjs"); /*include "Script::CommSystem.xjs"*/
        this.executeIncludeScript("Script::ext_CommEco.xjs"); /*include "Script::ext_CommEco.xjs"*/

        /************************************************************************************************
         * 전역 변수 영역
         ************************************************************************************************/
        this.DELETE_COUNT = 0;
         /************************************************************************************************
         * FORM 영역
         ************************************************************************************************/
        this.AH_MenuList_onload = function(obj,e)
        {
        	//this.gfnCompInit(obj);  	// Grid 공통함수 호출 ( 트리구조는 해더 필터 이용시 뎁스가 깨지므로 사용 X)
        	this.fnGetCode();
        };

         /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
         ************************************************************************************************/
        // 공통코드 조회
        this.fnGetCode = function()
        {
        	this.gfnAddCodeDataset("ds_cmm_LanguageCode",	"LANGUAGE_CODE"); 		// 언어구분
        	this.gfnCodeTransaction();
        };

        // 조회
        this.fnSearch = function()
        {
        	if(this.DELETE_COUNT > 0) this.div_Search.form.rdo_UseYn.set_value("1");

        	var sUseYn = this.div_Search.form.rdo_UseYn.value;
        	var sLanguage = this.div_Search.form.cmb_Language.value;

        	this.gfnAddSendParameter("USE_FLAG", sUseYn);
        	this.gfnAddSendParameter("LANGUAGE_CODE", sLanguage);

        	this.gfnAddOutputDataset("ds_MenuList", "dsOutput");
        	this.gfnCommonTransaction("Search_MenuList", "AH_MenuList_S01", this.grd_MenuList);
        };

        // 메뉴 추가
        this.fnAddRow = function()
        {
        	var sLanguage = this.div_Search.form.cmb_Language.value;
        	var curRow = this.ds_MenuList.rowposition;
        	var sUpIdx = this.ds_MenuList.getColumn(curRow, "UP_IDX");
        	var sMenuIdx = this.ds_MenuList.getColumn(curRow, "MENU_IDX");
        	var sMenuDeth = this.ds_MenuList.getColumn(curRow, "MENU_DEPTH");

        	// 동일한 부모IDX 메뉴 중 제일 마지막 메뉴 찾기
        	var sMenuSort = this.ds_MenuList.getCaseMax("UP_IDX=='"+sMenuIdx+"'", "MENU_SORT");
        	var sTargetRow = this.ds_MenuList.findRowExpr("UP_IDX=='"+sMenuIdx+"' && MENU_SORT=='" + sMenuSort + "'");

        	// 자식 갯수
        	var sTargetChildCnt = this.grd_MenuList.getTreeChildCount(sTargetRow);

        	if(sTargetChildCnt > 0) {
        		sTargetRow = this.fnLeafRow(sTargetRow);
        	}

        	var nRow;
        	// 해당 신규 메뉴에 대해서 하위 메뉴가 하나도 없는 경우
        	if(sTargetChildCnt == 0) {
        		nRow = this.ds_MenuList.insertRow(curRow + 1);
        		sMenuSort = 0;
        	} else {
        		nRow = this.ds_MenuList.insertRow(sTargetRow + 1);
        	}

        	this.ds_MenuList.setColumn(nRow, "LANGUAGE_CODE", sLanguage);
        	this.ds_MenuList.setColumn(nRow, "UP_IDX", sMenuIdx);
        	this.ds_MenuList.setColumn(nRow, "MENU_DEPTH", sMenuDeth + 1);
        	this.ds_MenuList.setColumn(nRow, "USE_FLAG", "1");
        	this.ds_MenuList.setColumn(nRow, "MENU_GRP_FLAG", "0");
        	this.ds_MenuList.setColumn(nRow, "MENU_SORT", sMenuSort + 1);
        	this.ds_MenuList.setColumn(nRow, "HIDDEN_FLAG", "0");
        	this.ds_MenuList.setColumn(nRow, "NWIN_FLAG", "0");
        };

        // NODE 체크
        this.fnChkNode = function()
        {
        	var curRow = this.ds_MenuList.rowposition;
        	var sMenuIdx = this.ds_MenuList.getColumn(curRow, "MENU_IDX");

        	if(this.gfnIsEmpty(sMenuIdx)){ // 하위 추가 시 상위 MENU_IDX 체크
        		alert("상위 메뉴를 먼저 저장 후 하위 메뉴가 추가 가능합니다.");
        	} else {
        		this.fnAddRow();
        	}
        };

        // Validation
        this.fnValidation = function()
        {
        	/*
        		체크 데이터 : MENU_NM
        	*/
        	for(var i = 0; i < this.ds_MenuList.rowcount; i++)
        	{
        		if(this.gfnIsEmpty(this.ds_MenuList.getColumn(i, "MENU_NM"))) { alert("메뉴명은 필수 입력 항목입니다."); this.grd_MenuList.setCellPos(1, i); this.grd_MenuList.showEditor(true); return false;}
        	}
        	return true;
        };

        // 저장
        this.fnSave = function()
        {
        	this.gfnAddInputDataset("ds_MenuList",  "dsInput");
        	this.gfnCommonTransaction("Save", "AH_MenuList_R01");
        };

        // 삭제
        this.fnDelete = function(curRow)
        {
        	this.ds_MenuList.deleteRow(curRow);
        	this.DELETE_COUNT++;
        };

        // 메뉴 정렬
        this.fnSetOrd = function(sMenuUpIdx, sMenuDepth)
        {
        	var sCnt = this.ds_MenuList.rowcount;
        	var sSort = 1;
        	var sFindRowCnt = this.ds_MenuList.getCaseCount("UP_IDX=='" + sMenuUpIdx + "'&&MENU_DEPTH=='" + sMenuDepth + "'");

        	if(sFindRowCnt > 0) {
        		for(var i = 0; i < sCnt; i++)
        		{
        			var sUpIdx = this.ds_MenuList.getColumn(i, "UP_IDX");
        			var sDepth  = this.ds_MenuList.getColumn(i, "MENU_DEPTH");

        			if(sMenuUpIdx == sUpIdx && sMenuDepth == sDepth) {
        				this.ds_MenuList.setColumn(i, "MENU_SORT", sSort);
        				sSort++;
        			}
        		}
        	}
        };

        // 현재 메뉴에서 제일 마지막 row 구하기
        this.fnLeafRow = function(sRow)
        {
        	var sLastRow = this.grd_MenuList.getTreeChildRow(sRow, -1);

        	// leaf Flag
        	var leafYn = this.grd_MenuList.isTreeLeafRow(sLastRow);

        	// leaf가 아닌 경우 맨 마지막 ROW 찾기
        	while( !leafYn ) {
        		sLastRow = this.grd_MenuList.getTreeChildRow(sLastRow, -1);
        		leafYn = this.grd_MenuList.isTreeLeafRow(sLastRow);
        	}

        // 	trace("마지막 leaf Row ==>" + sLastRow);
        // 	trace("현재 ROW==>"+ sRow);

        	return sLastRow;
        };

        // 트리 다시 그리기
        this.fnRedrawTree = function()
        {
        	// 데이터 셋팅 후 트리 그리드 다시 그리기 위함 START
        	this.grd_MenuList.set_binddataset("");

        	// 데이터 셋팅 후 트리 그리드 다시 그리기 위함 END
        	this.grd_MenuList.set_binddataset("ds_MenuList");
        };

        // 엑셀 데이터 조회
        this.fnExcelDataSearch = function()
        {
        	var sUseYn = this.div_Search.form.rdo_UseYn.value;

        	this.gfnAddSendParameter("USE_FLAG", sUseYn);

        	this.gfnAddOutputDataset("ds_ExcelMenuList", "dsOutput");
        	this.gfnCommonTransaction("Search_ExcelMenuList", "AH_MenuList_S02", this.grd_ExcelMenuList);
        };

        // 엑셀
        this.fnExcel = function()
        {
        	var objGrd = this.grd_ExcelMenuList;

        	var sFileNm = "메뉴관리 목록";
        	var sUseYnNm = this.div_Search.form.rdo_UseYn.text;
        	sFileNm += "(" + sUseYnNm + ")";

        	if(nexacro.getApplication().id=="ACEp")
        	{
        		this.parent.parent.parent.parent.parent.fn_excelExport(this, objGrd, sFileNm);
        	}
        	else
        	{
        		this.gfn_excelExport(this, objGrd, sFileNm);
        	}
        };

        // 화면 콜백
        this.fnCallBack = function (strSvcID, nErrorCode, strErrorMag)
        {
        	if (nErrorCode<0) {
        		this.alert("["+strSvcID+":"+nErrorCode+"] "+strErrorMag);
        		return;
        	} else {
        		switch (strSvcID)
        		{
        			case "gfnGetCode" :
        				this.div_Search.form.cmb_Language.set_index(0);
        				this.fnSearch();
        				break;
        			case "Search_MenuList" :
        				// 초기화
        				this.DELETE_COUNT = 0;
        				break;
        			case "Search_ExcelMenuList":
        				this.fnExcel();
        				break;
        			case "Save" :
        				alert("저장 되었습니다.");
        				this.fnSearch();
        				break;
        		}
        	}
        };

         /************************************************************************************************
         * FORM 공통 FUNCTION 영역
         ************************************************************************************************/

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        this.common_onclick = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_Search":	// 조회
        			this.fnSearch();
        			break;
        		case "btn_Excel":	// 엑셀
        			this.fnExcelDataSearch();
        			break;
        		case "btn_addRow":	// 추가
        			this.fnChkNode();
        			break;
        		case "btn_deleteRow" : // 삭제
        			var curRow = this.ds_MenuList.rowposition;
        			var sMenuIdx = this.ds_MenuList.getColumn(curRow, "MENU_IDX");
        			var sMenuNm = this.ds_MenuList.getColumn(curRow, "MENU_NM");
        			var sMenuDepth = this.ds_MenuList.getColumn(curRow, "MENU_DEPTH");

        			if(sMenuDepth == "0") {
        				alert("ROOT는 삭제 할 수 없습니다.");
        			} else {
        				if(this.gfnIsEmpty(sMenuIdx)) {
        					this.fnDelete(curRow);
        				} else {
        					if(this.confirm("[" +sMenuNm + "] 삭제 하시겠습니까?")) {
        						alert("저장 버튼을 클릭해야 삭제 적용 됩니다.");
        						this.fnDelete(curRow);
        					}
        				}
        			}
        			break;
        		case "btn_Save" : // 저장
        			if(this.fnValidation()) {
        				this.fnSave();
        			}
        			break;
        	}
        };

        this.div_Search_rdo_UseYn_onitemchanged = function(obj,e)
        {
        	this.fnSearch();
        };

        this.grd_MenuList_ondrag = function(obj,e)
        {
        	if(e.col == 0) {
        		var sUseYn = this.div_Search.form.rdo_UseYn.value;
        		if(sUseYn == "N") alert("메뉴 이동은 [미사용]에서는 이동이 불가 합니다.");
        		else {
        			var sMenuIdx = this.ds_MenuList.getColumn(e.row, "MENU_IDX");
        			var argument = {"MENU_IDX":sMenuIdx, "ROW":e.row};
        			e.set_userdata(argument);
        			return true;
        		}
        	}

        };

        this.grd_MenuList_ondrop = function(obj,e)
        {
        	// e.userdata 안에 MENU_IDX, 선택한 ROW가 들어가 있다 ( KEY : VALUE 형태 )
        	var curRow = e.userdata.ROW;
        	var curMenuIdx = e.userdata.MENU_IDX;
        	var curMenuNm = this.ds_MenuList.getColumn(curRow, "MENU_NM");
        	var rtn = this.confirm("[" + curMenuNm + "] 메뉴를 이동하시겠습니까?");

        	if(rtn) {
        		var targetRow = e.row;
        		var sRoot = this.ds_MenuList.getColumn(e.row, "MENU_DEPTH");
        		if(sRoot == 0) {
        			alert("ROOT 위로는 메뉴 이동할 수 없습니다.");
        		} else {
        			var curGrpyn = this.ds_MenuList.getColumn(curRow, "MENU_GRP_FLAG");
        			var curMenuDepth = this.ds_MenuList.getColumn(curRow, "MENU_DEPTH");

        			// 자식 갯수
        			var curChildCnt = this.grd_MenuList.getTreeChildCount(curRow);
        			// 맨 마지막 자식 row
        			var curLastChildRow = curRow;
        			if(curChildCnt > 0) {
        				curLastChildRow = this.fnLeafRow(curLastChildRow);
        				// 해당 그룹 하위에 있는 모든 자식 수 계산
        				curChildCnt = curLastChildRow - curRow;
        			}

        			var targetMenuIdx = this.ds_MenuList.getColumn(e.row, "MENU_IDX");
        			var targetUpIdx = this.ds_MenuList.getColumn(e.row, "UP_IDX");
        			var targetMenuDepth = this.ds_MenuList.getColumn(e.row, "MENU_DEPTH");

        			/*
        				순서 중요!!
        				1. 메뉴 뎁스 변경
        				2. 이동하는 메뉴 상위메뉴IDX 변경
        				3. 메뉴 정렬 변경
        			*/
        			// 뎁스 설정 START
        			this.ds_MenuList.setColumn(curRow, "MENU_DEPTH", targetMenuDepth);
        			if(targetMenuDepth != curMenuDepth) {

        				for(var i = 1; i <= curChildCnt; i++) {

        					var sUpIdx = this.ds_MenuList.getColumn(curRow + i, "UP_IDX");
        					var sMomRow = this.ds_MenuList.findRowExpr("MENU_IDX=='" + sUpIdx + "'");
        					var sUpdateDepth = this.ds_MenuList.getColumn(sMomRow, "MENU_DEPTH");

        					this.ds_MenuList.setColumn(curRow + i, "MENU_DEPTH", sUpdateDepth + 1 );
        				}
        			} else {
        				this.ds_MenuList.setColumn(curRow, "MENU_DEPTH", targetMenuDepth);
        			}
        			// 뎁스 설정 END

        			// 상위메뉴 IDX 변경
        			this.ds_MenuList.setColumn(curRow, "UP_IDX", targetUpIdx);

        			// 메뉴 이동 START
        			if(curRow > targetRow) { // 아래에서 위로 올렸을 경우
        				for(var i = 0; i <= curLastChildRow - curRow; i++) {
        					this.ds_MenuList.moveRow(curRow + i, targetRow + i);
        				}
        			} else { // 위에서 아래로 올렸을 경우
        				for(var i = 0; i <= curChildCnt; i++) {
        					this.ds_MenuList.moveRow(curRow + curChildCnt -i, targetRow -1 -i);
        				}
        			}
        			// 메뉴 이동 END

        			// 정렬
        			this.fnSetOrd(targetUpIdx, targetMenuDepth);

        			// TREE Refresh
        			this.fnRedrawTree();
        		}
        	}
        };

        this.div_Search_cmb_Language_onitemchanged = function(obj,e)
        {
        	this.fnSearch();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.AH_MenuList_onload,this);
            this.div_Search.form.btn_Excel.addEventHandler("onclick",this.common_onclick,this);
            this.div_Search.form.btn_Search.addEventHandler("onclick",this.common_onclick,this);
            this.div_Search.form.btn_Save.addEventHandler("onclick",this.common_onclick,this);
            this.div_Search.form.btn_deleteRow.addEventHandler("onclick",this.common_onclick,this);
            this.div_Search.form.btn_addRow.addEventHandler("onclick",this.common_onclick,this);
            this.div_Search.form.rdo_UseYn.addEventHandler("onitemchanged",this.div_Search_rdo_UseYn_onitemchanged,this);
            this.div_Search.form.cmb_Language.addEventHandler("onitemchanged",this.div_Search_cmb_Language_onitemchanged,this);
            this.grd_MenuList.addEventHandler("ondrag",this.grd_MenuList_ondrag,this);
            this.grd_MenuList.addEventHandler("ondrop",this.grd_MenuList_ondrop,this);
        };
        this.loadIncludeScript("AH_MenuList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
