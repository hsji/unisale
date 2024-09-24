(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("orgUserListPu");
            this.set_titletext("사용자전체조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(450,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"COMP_NAME\" type=\"string\" size=\"32\"/><Column id=\"WORK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_MAILADDR\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOne", this);
            obj._setContents("<ColumnInfo><Column id=\"COMP_NAME\" type=\"string\" size=\"32\"/><Column id=\"WORK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_MAILADDR\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","25.00","8",null,"43","25",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("참석자 추가");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm",null,null,"50","28","78","20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("적용");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"50","28","25","20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("취소");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHost","126","56","284","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","20","54","104","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00","20","88","104","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("직급/직책");
            obj.set_cssclass("sta_WF_SchLabel");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHost00","126","90","284","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00_00","20","122","104","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("이름");
            obj.set_cssclass("sta_WF_SchLabel");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHost00_00","126","124","284","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00_00_00","20","156","104","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("이메일주소");
            obj.set_cssclass("sta_WF_SchLabel");
            this.addChild(obj.name, obj);

            obj = new Edit("edtHost00_00_00","126","158","284","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","10","236",null,null,"15","59",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseexpandkey("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"151\"/><Column size=\"278\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"이름\"/><Cell col=\"1\" text=\"E-Mail\"/></Band><Band id=\"body\"><Cell text=\"bind:USER_NAME\" treelevel=\"bind:DEPT_LVL\" treecheck=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:USER_MAILADDR\" edittype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"196","78","26","41",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("추가");
            obj.set_cssclass("btn_TFDM_Save");
            obj.set_visible("true");
            obj.getSetter("btnType").set("E");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",450,500,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtHost","value","dsOne","COMP_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edtHost00","value","dsOne","WORK_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtHost00_00","value","dsOne","USER_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edtHost00_00_00","value","dsOne","USER_MAILADDR");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("mtgAddUserPu.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	mtgAddUser.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/06/28
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/06/28			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvDocId = null;
        this.fvFormerPrefix = "FMER_";	// 발신자,수신자동일함을 허용위해 이름 다르게
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.fvDocId = this.getOwnerFrame().pvDocId;
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *****************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //transaction
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {

        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnClose = function (nRow)
        {

        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.grdList_oncelldblclick = function(obj,e)
        {
        	this.dsList.deleteRow(this.dsList.rowposition);
        };

        this.btnConfirm_onclick = function(obj,e)
        {
        	var targetDs = this.opener.dsUser;
        	for(var i=0,len=this.dsList.rowcount;i<len;i++) {
        		var targetRow = targetDs.addRow();
        		targetDs.setColumn(targetRow, "DOC_ID", this.fvDocId);
        		targetDs.setColumn(targetRow, "COMP_NAME", this.dsList.getColumn(i, "COMP_NAME"));
        		targetDs.setColumn(targetRow, "USER_ID", this.dsList.getColumn(i, "USER_ID"));
        		targetDs.setColumn(targetRow, "USER_NAME", this.dsList.getColumn(i, "USER_NAME"));
        		targetDs.setColumn(targetRow, "USER_MAILADDR", this.dsList.getColumn(i, "USER_MAILADDR"));
        		targetDs.setColumn(targetRow, "WORK_NAME", this.dsList.getColumn(i, "WORK_NAME"));
        		targetDs.setColumn(targetRow, "SEND_SEQ", 0);
        		targetDs.setColumn(targetRow, "R_ORDER", 1);

        		targetDs.setColumn(targetRow, "FORMER_ID", this.fvFormerPrefix + this.dsList.getColumn(i, "USER_ID"));
        		targetDs.setColumn(targetRow, "FORMER_NAME", this.dsList.getColumn(i, "USER_NAME"));
        	}

        	var v = "";
        	for(var i=0,len=targetDs.rowcount;i<len;i++) {
        		if(i>0) v += ",";
        		v += targetDs.getColumn(i, "USER_ID");
        	}
        	console.log(v);

        	this.opener.divContents.form.MultiComboUser.set_value(v);

        	this.close("");
        };

        this.btnClose_onclick = function(obj,e)
        {
        	this.close("");
        };

        /**
         * @function btnEdit_onclick
         * @description 추가
         */
        this.btnEdit_onclick = function(obj,e)
        {
        	if(this.fnCheckValidation() == false) return;
        	var nRow = this.dsList.addRow();
        	this.dsList.copyRow(nRow, this.dsOne, 0);
        };

        //정합성체큰
        this.fnCheckValidation = function ()
        {
        	// 정합성 체크
        	this.gfnClearValidation(this.dsOne);

        	this.gfnSetValidation(this.dsOne, "COMP_NAME", "회사명"	, "required");
        	this.gfnSetValidation(this.dsOne, "WORK_NAME",  "직급"	    , "required");
        	this.gfnSetValidation(this.dsOne, "USER_NAME", "이름"	, "required");

        	this.gfnSetValidation(this.dsOne, "USER_MAILADDR", "EMail"	, "isemail");

        	this.dsOne.setColumn(0, "USER_ID", this.createUID());

        	// Dataset의 변경된 Row Validation check
        	if (this.gfnValidation(this.dsOne, "U") == false) return false;
        	else return true;
        };

        /**
        * @class Unique ID 생성. <br>
        * @param N/A
        * @return {String} v uid
        * @example this.createUID()
        */
        this.createUID = function ()
        {
        	return 'xxxx_xyx4x'.replace(/[xy]/g, function(c)
        	{
        		var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        		return v.toString(16);
        	});
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnConfirm.addEventHandler("onclick",this.btnConfirm_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.grdList.addEventHandler("oncelldblclick",this.grdList_oncelldblclick,this);
            this.btnAdd.addEventHandler("onclick",this.btnEdit_onclick,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsOne.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
        };
        this.loadIncludeScript("mtgAddUserPu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
