(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CO_Participant");
            this.set_titletext("공유자 검색");
            this.set_cssclass("frm_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_selected", this);
            obj._setContents("<ColumnInfo><Column id=\"MSP_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"MS_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"PARTICIPANT_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"PARTICIPANT_NO\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Organization", this);
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/><Column id=\"KIND\" type=\"STRING\" size=\"256\"/><Column id=\"VALUE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ORD\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_title","8","5","141","22",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("공유자 검색");
            obj.set_color("white");
            obj.set_cssclass("sta_POP_Title ");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close",null,"8","15","15","8",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_POP_Cls");
            obj.set_text("");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_Search","4","39",null,"40","8",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_SchList");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Del",null,"8","60","22","8",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("0");
            obj.set_text("삭제");
            obj.set_visible("true");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("stc_Search","8","8","59","19",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("1");
            obj.set_text("검색어");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_Search.addChild(obj.name, obj);

            obj = new Edit("edt_SearchTxt","75","8","229","19",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("2");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_Search","312","8","60","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("3");
            obj.set_text("검색");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_Add",null,"8","60","22","btn_Del:8",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("4");
            obj.set_text("추가");
            obj.set_visible("true");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("stc_BottomFrame","1",null,null,"38","0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_POP_BtnBg");
            this.addChild(obj.name, obj);

            obj = new Div("div_Organization","8","div_Search:8",null,null,"190","stc_BottomFrame:8",null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Organization","0","0",null,null,"0","0",null,null,null,null,this.div_Organization.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj.set_binddataset("ds_Organization");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"250\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:NAME\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treecheck=\"bind:ISCHECKED\" treelevel=\"bind:LVL\"/><Cell col=\"1\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:ISCHECKED\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/></Band></Format></Formats>");
            this.div_Organization.addChild(obj.name, obj);

            obj = new Button("btn_Cancel",null,null,"60","22","8","8",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_cancel");
            obj.getSetter("TL_SEQ").set("59");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Confirm",null,null,"60","22","btn_Cancel:8","8",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_tran");
            obj.getSetter("TL_SEQ").set("158");
            this.addChild(obj.name, obj);

            obj = new Div("div_Selected","div_Organization:8","87","174","367",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Selected","0","0",null,null,"0","0",null,null,null,null,this.div_Selected.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_selected");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:NAME\"/></Band></Format></Formats>");
            this.div_Selected.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_Search.form
            obj = new Layout("default","",0,0,this.div_Search.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btn_Del.set_taborder("0");
                p.btn_Del.set_text("삭제");
                p.btn_Del.set_visible("true");
                p.btn_Del.move(null,"8","60","22","8",null);

                p.stc_Search.set_taborder("1");
                p.stc_Search.set_text("검색어");
                p.stc_Search.set_cssclass("sta_WF_DetailTit");
                p.stc_Search.move("8","8","59","19",null,null);

                p.edt_SearchTxt.set_taborder("2");
                p.edt_SearchTxt.move("75","8","229","19",null,null);

                p.btn_Search.set_taborder("3");
                p.btn_Search.set_text("검색");
                p.btn_Search.move("312","8","60","22",null,null);

                p.btn_Add.set_taborder("4");
                p.btn_Add.set_text("추가");
                p.btn_Add.set_visible("true");
                p.btn_Add.move(null,"8","60","22","btn_Del:8",null);
            	}
            );
            this.div_Search.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div_Search.form
            obj = new Layout("portrait","",0,0,this.div_Search.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.cmb_Condition.move("4","4","72","30",null,null);

                p.edt_Search.move("76","4","159","30",null,null);

                p.btn_Search.move("235","4","30","30",null,null);

                p.btn_Cc.move(null,"4","50","30","btn_Bcc:4",null);

                p.btn_To.move(null,"4","70","30","btn_Cc:4",null);

                p.btn_Del.move(null,"4","70","30","4",null);
            	}
            );
            this.div_Search.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div_Organization.form
            obj = new Layout("default","",0,0,this.div_Organization.form,function(p){});
            this.div_Organization.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_Selected.form
            obj = new Layout("default","",0,0,this.div_Selected.form,function(p){});
            this.div_Selected.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",800,500,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CO_Participant.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("CO_Participant.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("CO_Participant.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("CO_Participant.xfdl","Script::CommGrid.xjs");
        this.registerScript("CO_Participant.xfdl", function() {
        /************************************************************************************************
         * 01. 업무구분 : 공통 - 공통
         * 02. 화면명   : 공유자 검색 (CO_Participant_S01)
         * 03. 화면설명 : 공유자 검색 팝업
         * 04. 작성일   : 2023.04.17
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
        //부모창 없을 경우 default값
        this.myDept 		= nexacro.getApplication().gdsGlobal.setColumn(0, "CO_NM");
        this.myDeptCD 		= "F01"
        this.myEmpNO 		= "";
        this.myEmpNM		= "";


        this.ORG_TXT = "";
        this.empKind = "T";
        this.holdOffice = "1";
        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/
        this.CO_Participant_onload = function(obj,e)
        {
        	this.gfnCompInit(obj); //헤더클릭 이벤트 없을 시 사용
        	this.fnFormInit();

        	var app = nexacro.getApplication();

        	if(app.gdsUserInfo.rowcount>0)
        	{
        		this.myDept		= this.gfnIsEmpty(app.gdsUserInfo.getColumn(0,"DEPT_NM")) ? this.myDept : app.gdsUserInfo.getColumn(0,"DEPT_NM");
        		this.myDeptCD 	= this.gfnIsEmpty(app.gdsUserInfo.getColumn(0,"DEPT_CD")) ? this.myDeptCD : app.gdsUserInfo.getColumn(0,"DEPT_CD");
        		this.myEmpNO 	= this.gfnIsEmpty(app.gdsUserInfo.getColumn(0,"EMP_NO")) ? this.myEmpNO : app.gdsUserInfo.getColumn(0,"EMP_NO");
        		this.myEmpNM	= this.gfnIsEmpty(app.gdsUserInfo.getColumn(0,"EMP_NM")) ? this.myEmpNM: app.gdsUserInfo.getColumn(0,"EMP_NM");
        	}

        	this.fnSearch();
        };
        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.fnFormInit = function()
        {
        	if(!this.gfnIsEmpty(this.parent.pvDs)) {
        		this.ds_selected.copyData(this.parent.pvDs);
        	}
        };

        this.fnSearch = function()
        {
        	var strSvcID = "searchOrganization";
        	var strModelNm = "CO_Participant_S01";

        	this.gfnAddOutputDataset("ds_Organization", "dsOutput");
        	this.gfnCommonTransaction(strSvcID, strModelNm, this.div_Organization.form.grd_Organization);
        };

        //해당유저에 포커스를 준다.
        this.fnSetFocus = function(empNO)
        {
        	var objDs = this.ds_Organization;

        	if(!this.gfnIsEmpty(empNO))
        	{
        		objDs.set_rowposition(objDs.findRow("VALUE", empNO));
        	}
        };

        //검색
        this.fnSearchEmp = function()
        {
        	var sSearchTxt = this.div_Search.form.edt_SearchTxt.value;
        	var objDs = this.ds_Organization;
        	var curRow = objDs.rowposition;

        	if(!this.gfnIsEmpty(sSearchTxt)) {
        		var strFindColumnName = "NAME";
        		var strExpr = strFindColumnName+".toUpperCase().indexOf('"+ sSearchTxt.toUpperCase() +"')>-1";

        		if(sSearchTxt == this.ORG_TXT) {
        			curRow += 1;
        		} else {
        			curRow = 0;
        			this.ORG_TXT = sSearchTxt;
        		}

        		objDs.set_rowposition(objDs.findRowExpr(strExpr, curRow));
        	} else {
        		alert("검색어를 입력 후 검색 해주세요.");
        	}
        };

        //체크선택된 ds의 값들을 중복 체크하여 ds_selected에 넣어준다.
        this.fnInsert = function()
        {
        	var findRow = -1;
        	var objDs = this.ds_Organization;
        	var objSelectDs = this.ds_selected;

        	for(var i = 0; i < objDs.rowcount; i++) {
        		var sValue = objDs.getColumn(i, "VALUE");

        		if(objDs.getColumn(i, "ISCHECKED") == "1") {
        			findRow = objSelectDs.findRow("PARTICIPANT_NO", sValue);
        			if( findRow == -1 ) {
        				var sKind = objDs.getColumn(i, "KIND");
        				var sName = objDs.getColumn(i, "NAME");
        				var nRow = objSelectDs.addRow();
        				objSelectDs.setColumn(nRow, "PARTICIPANT_KIND", sKind);
        				objSelectDs.setColumn(nRow, "PARTICIPANT_NO", sValue);
        				objSelectDs.setColumn(nRow, "NAME", sName);
        			}
        		}
        	}
        };

        // 삭제
        this.fnDeleted = function()
        {
        	var curRow = this.ds_selected.rowposition;
        	if( curRow == -1 ) {
        		alert("삭제할 대상이 없습니다.");
        	} else {
        		this.ds_selected.deleteRow(curRow);
        	}
        };
        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        //직원 리스트를 가지고 온다
        this.fnSearchEmpList = function()
        {
        	var strSvcID = "searchEmpList";
        	var strModelNm = "CO_Organization_S01";

        	this.gfnAddSendParameter("TYPE", "2"); //TYPE 1:부서조회 2:직원리스트조회 3.직원검색
        	this.gfnAddSendParameter("EMP_KIND", this.empKind); //T:Tobe직원만
        	this.gfnAddSendParameter("HOLD_OFFICE", this.holdOffice); //1:현재종사자

        	this.gfnAddOutputDataset("ds_employee", "ds_employee");
        	this.gfnCommonTransaction(strSvcID, strModelNm, this.grd_CompanyOrganizationEmployeeInfo);
        }

        //회사 조직도 리스트
        this.fnSearchDeptList = function()
        {
        	var strSvcID = "searchDeptList";
        	var strModelNm = "CO_Organization_S01";

        	this.gfnAddSendParameter("TYPE", "1"); //TYPE 1:부서조회 2:직원리스트조회 3.직원검색
        	this.gfnAddSendParameter("EMP_KIND", this.empKind); //T:Tobe직원만
        	this.gfnAddSendParameter("HOLD_OFFICE", this.holdOffice); //1:현재종사자

        	this.gfnAddOutputDataset("ds_department", "ds_department");
        	this.gfnCommonTransaction(strSvcID, strModelNm, this.div_Dept.form.grd_Dept);
        }

        this.fnCallBack = function(strSvcID, nErrorCode, strErrorMag)
        {
        	if(nErrorCode != 0)
        	{
        		return;
        	}
        	else
        	{
        		switch(strSvcID)
        		{
        			case "searchOrganization":
        				this.fnSetFocus(this.myEmpNO);
        				break;
        		}
        	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.common_onclick = function(obj, e)
        {
        	switch(obj.name) {
        		case "btn_Add": //추가버튼
        			this.fnInsert();
        			break;

        		case "btn_Del": //삭제버튼
        			this.fnDeleted();
        			break;

        		case "btn_Search": //검색버튼
        			this.fnSearchEmp();
        			break

        		case "btn_Confirm": //확인버튼
        			this.commUtil.popupClose(this.ds_selected);
        			break;

        		case "btn_Cancel": //취소버튼
        			this.close();
        			break;

        		case "btn_Close": // X버튼
        			this.commUtil.popupClose(new nexacro.Dataset());
        			break;

        		default :
        			this.alert(this.gfnGetTransTxt(1231, "준비중입니다."));
        			break;
        	}
        };


        this.div_Search_edt_SearchTxt_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.fnSearchEmp();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CO_Participant_onload,this);
            this.btn_Close.addEventHandler("onclick",this.common_onclick,this);
            this.div_Search.form.btn_Del.addEventHandler("onclick",this.common_onclick,this);
            this.div_Search.form.edt_SearchTxt.addEventHandler("onkeydown",this.div_Search_edt_SearchTxt_onkeydown,this);
            this.div_Search.form.btn_Search.addEventHandler("onclick",this.common_onclick,this);
            this.div_Search.form.btn_Add.addEventHandler("onclick",this.common_onclick,this);
            this.btn_Cancel.addEventHandler("onclick",this.common_onclick,this);
            this.btn_Confirm.addEventHandler("onclick",this.common_onclick,this);
        };
        this.loadIncludeScript("CO_Participant.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
