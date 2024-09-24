(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("bizProgramMgPopup");
            this.set_titletext("프로그램 관리(추가버튼관리팝업)");
            if (Form == this.constructor)
            {
                this._setFormPosition(930,390);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PRGM_ID\" type=\"string\" size=\"32\"/><Column id=\"BTTN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BTTN_NM\" type=\"string\" size=\"50\"/><Column id=\"BTTN_ENGL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BTTN_STYLE\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_CD\" type=\"string\" size=\"2\"/><Column id=\"SORT_ORDR\" type=\"int\" size=\"39\"/><Column id=\"USED_YN\" type=\"string\" size=\"1\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"PRGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static04_01","0","0","25",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W 25");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_01_00",null,"0","25",null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W 25");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","25","20",null,"50","25",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10","48","28","25",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","12","98","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("프로그램ID");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtProgId","98","12","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle01","238","12","98","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("프로그램명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtProgNm","336","12","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_readonly("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static00","25","divSearch:0",null,"43","355",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("추가버튼");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Div("divCmmnBtn",null,"divSearch:10","467","33","25",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"0","71","28","0",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("1");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Delete");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnAdd","308","0",null,"28","btnDel:3",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("0");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Add");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Grid("grdList","25","Static00:0",null,null,"25","68",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"59\"/><Column size=\"60\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"버튼ID\" cssclass=\"essential\"/><Cell col=\"1\" text=\"버튼명\" cssclass=\"essential\"/><Cell col=\"2\" text=\"버튼 영문명\"/><Cell col=\"3\" text=\"버튼 스타일\"/><Cell col=\"4\" text=\"정렬순서\" cssclass=\"essential\"/><Cell col=\"5\" text=\"사용여부\"/></Band><Band id=\"body\"><Cell text=\"bind:BTTN_ID\" displaytype=\"expr:dataset.getRowType(currow)==2?&apos;editcontrol&apos;:&apos;normal&apos;\" edittype=\"expr:dataset.getRowType(currow)==2?&apos;text&apos;:&apos;none&apos;\" editimemode=\"alpha\" editinputtype=\"english,digit\" editautoselect=\"true\"/><Cell col=\"1\" edittype=\"normal\" text=\"bind:BTTN_NM\" editlengthunit=\"utf8\" textAlign=\"left\" verticalAlign=\"middle\" editautoselect=\"true\" displaytype=\"editcontrol\" editimemode=\"hangul\"/><Cell col=\"2\" text=\"bind:BTTN_ENGL_NM\" edittype=\"normal\" editautoselect=\"true\" displaytype=\"editcontrol\" editimemode=\"alpha\"/><Cell col=\"3\" displaytype=\"editcontrol\" edittype=\"text\" text=\"bind:BTTN_STYLE\" editautoselect=\"true\" editimemode=\"alpha\"/><Cell col=\"4\" displaytype=\"editcontrol\" edittype=\"normal\" editfilter=\"digit\" text=\"bind:SORT_ORDR\" editlengthunit=\"utf8\" editautoselect=\"true\" editinputtype=\"digit\"/><Cell col=\"5\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:USED_YN\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"50","28","25","20",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("닫기");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,null,"68","28","btnClose:3","20",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("저장");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_CrudSave");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCmmnBtn.form
            obj = new Layout("default","",0,0,this.divCmmnBtn.form,function(p){});
            this.divCmmnBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",930,390,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtProgId","value","dsCond","PRGM_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtProgNm","value","dsCond","PRGM_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("authProgramMgPu.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	bizProgramMgPopup.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/03/23
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/03/23			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvProgId = "";
        this.fvCompanyCd = "";
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	//넘겨받은값 세팅
        	this.fvProgId = this.getOwnerFrame().pvProgId;
        	this.fvCompanyCd = this.getOwnerFrame().pvCompanyCd;
        	console.log("#",this.fvCompanyCd);
        	//검색조건세팅
        	this.dsCond.clearData();
        	var nRow = this.dsCond.addRow();
        	this.dsCond.setColumn(nRow, "COMPANY_CD", this.fvCompanyCd);
        	this.dsCond.setColumn(nRow, "PRGM_ID", this.fvProgId);
        	this.dsCond.setColumn(nRow, "PRGM_NM", this.getOwnerFrame().pvProgNm);
        	this.cfnSearch(); //자동조회
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	this.fnTranSearch();
        };
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //조회
        this.fnTranSearch = function ()
        {
        	var strSvcId    = "searchProgramAddBtnList";
        	var strSvcUrl   = "searchProgramAddBtnList.do";
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
        	var strSvcId    = "saveProgramAddBtnList";
        	var strSvcUrl   = "saveProgramAddBtnList.do";
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
        		case "searchProgramAddBtnList":
        		case "saveProgramAddBtnList":
        			break;
        		default:break;
        	}
        };
        //message..
        this.fnMsgCallback = function (sMsgId, sRtn)
        {
        	switch(sMsgId) {
        		case "closesave":
        			if(this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false){
        				return;
        			}else{
        				this.close();
        			}
        			break;
        		case "saveProg":
        			if(this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false){
        				return;
        			}else{
        				this.fnTranSave();
        			}
        			break;
        		case "validCode":
        			this.dsList.setColumn(this.dsList.rowposition, "BTTN_ID", "");
        			this.grdList.setCellPos(0);
        			this.grdList.showEditor(true);
        		default:break;
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        //validation
        this.fnValidation = function ()
        {
        	// 정합성 체크
        	this.gfnClearValidation(this.dsList);

        	this.gfnSetValidation(this.dsList, "BTTN_ID"	 , "버튼ID"			, "required");
        	this.gfnSetValidation(this.dsList, "BTTN_NM"	 , "버튼명"		, "required");
        	this.gfnSetValidation(this.dsList, "SORT_CD"	 , "버튼위치"		, "required");
        	this.gfnSetValidation(this.dsList, "SORT_ORDR"	 , "정렬순서"		, "required");

        	// Dataset의 변경된 Row Validation check
        	if (this.gfnValidation(this.grdList, "U") == false) {
        		return false;
        	}else{
        		return true;
        	}
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.btnClose_onclick = function(obj,e)
        {
        	if (this.gfnDsIsUpdated(this.dsList)) {
        		this.gfnAlert("confirm.before.closesave", [""], "closesave", "fnMsgCallback");
        	}else{
        		this.close();
        	}
        };

        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.cfnSearch();
        };

        this.divCmmnBtn_btnAdd_onclick = function(obj,e)
        {
        	var nRow = this.dsList.addRow();

        	this.dsList.setColumn(nRow, "SORT_CD", "10");
        	this.dsList.setColumn(nRow, "USED_YN", "1");
        	this.dsList.setColumn(nRow, "PRGM_ID", this.fvProgId);
        	this.dsList.setColumn(nRow, "COMPANY_CD", this.fvCompanyCd);

        	this.grdList.setCellPos(0);
        	this.grdList.showEditor(true);
        };

        this.divCmmnBtn_btnDel_onclick = function(obj,e)
        {
        	if (this.dsList.rowcount == 0){
        		return;
        	}

        	this.dsList.deleteRow(this.dsList.rowposition);
        };

        this.btnSave_onclick = function(obj,e)
        {
        	// 변경된 정보없으면 리턴
        	if (this.gfnDsIsUpdated(this.dsList) == false) {
        		// 저장할 데이터가 없습니다.
        		this.gfnAlert("msg.save.nochange");
        		return;
        	}

        	if(this.fnValidation()){
        		// 자료를 저장하시겠습니까?
        		this.gfnAlert("confirm.save", [""], "saveProg", "fnMsgCallback");
        		return;
        	}
        };

        this.dsList_cancolumnchange = function(obj,e)
        {
        	if( e.columnid=="BTTN_ID"){
        		if(this.gfnIsNull(e.newvalue)) return;

        		var nRow = obj.findRow("BTTN_ID", e.newvalue);
        		if( nRow > -1){
        			this.gfnAlert("msg.exist", ["입력하신 프로그램아이디"], "validCode","fnMsgCallback");
        			return;
        		}
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.divCmmnBtn.form.btnDel.addEventHandler("onclick",this.divCmmnBtn_btnDel_onclick,this);
            this.divCmmnBtn.form.btnAdd.addEventHandler("onclick",this.divCmmnBtn_btnAdd_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnSave.addEventHandler("onclick",this.btnSave_onclick,this);
            this.dsList.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
        };
        this.loadIncludeScript("authProgramMgPu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
