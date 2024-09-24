(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmDeptSearch");
            this.set_titletext("부서조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(205,24);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCommonCond", this);
            obj._setContents("<ColumnInfo><Column id=\"SRCH\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCommonList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("edtCode","0","0","103","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("edi_WF_Search");
            obj.getSetter("uUse").set("false");
            obj.set_maxlength("7");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch","edtCode:-28","0","28","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_EdiSch");
            this.addChild(obj.name, obj);

            obj = new Edit("edtName","edtCode:3","0",null,"24","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("edi_WF_Search");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edtCompany","53.00","81","140","20",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",205,24,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmDeptSearch.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	cmmDeptSearch.xfdl
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
        this.fvSearchScopeCd = "";

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	if( this.parent.uEssential=="true"){
        		this.edtCode.set_cssclass("essential");
        	}

        	// 조회권한 셋팅
        	this.fvSearchScopeCd = this.gfnGetScope();
        	switch(this.fvSearchScopeCd) {
        		case "0010":	//전체
        		case "0020":	//사업본부
        		case "0030":	//그룹
        			this.edtCode.set_enable(true);
        			this.btnSearch.set_enable(true);
        			break;
        		case "0040":	//팀
        		case "0050":	//개인
        			this.fnSetDept();
        			this.edtCode.set_enable(false);
        			this.btnSearch.set_enable(false);
        			break;
        		default:
        	}
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //조회
        this.fnTranDeptList = function ()
        {
        	//this.edtCode.set_enableevent(false);

        	if (this.gfnIsNull(this.edtCode.value)) {
        		this.edtName.set_value("");
        		//this.edtCode.set_enableevent(true);
        		return;
        	}

        	this.dsCommonCond.clearData();
        	var nRow = this.dsCommonCond.addRow();
        	this.dsCommonCond.setColumn(nRow, "COMPANY_CD", this.edtCompany.value);
        	this.dsCommonCond.setColumn(nRow, "SRCH", this.edtCode.value);

        	var strSvcId    = "selectCommonDeptList";
        	var strSvcUrl   = "selectCommonDeptList.do";
        	var inData      = "dsCommonCond=dsCommonCond";
        	var outData     = "dsCommonList=dsCommonList";
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
        		case "selectCommonDeptList":
        			this.fnSetResult();
        			break;
        		default:break;
        	}
        };

        //popup
        this.fnPopupCallback = function (sPopupId, sRtn)
        {
        	switch(sPopupId) {
        		case "orgDeptMgPu":
        			if( !this.gfnIsNull(sRtn) ){
        				var aRtn= sRtn.split("|");
        				this.edtCode.set_value(aRtn[0]);
        				this.edtName.set_value(aRtn[2]);
        			}
        			break;
        		default:break;
        	}
        };

        //message
        this.fnMsgCallback = function (sMsgId, sRtn)
        {
        	switch(sMsgId) {
        		case "nodata":
        			//this.edtCode.set_enableevent(true);
        			this.edtCode.set_value("");
        			this.edtName.set_value("");
        			this.edtCode.setFocus();
        			break;
        		default:break;
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        //조회결과세팅
        this.fnSetResult = function ()
        {
        	if( this.dsCommonList.getRowCount() == 0){
        		this.gfnAlert("msg.err.nodata", [""], "nodata", "fnMsgCallback");
        		return;
        	}

        	var sCode = this.dsCommonList.getColumn(0, "CODE");
        	var sName = this.dsCommonList.getColumn(0, "NAME");

        	this.edtCode.set_value(sCode);
        	this.edtName.set_value(sName);

        	if(this.parent.parent.btnSearch) this.parent.parent.btnSearch.setFocus();
        	//this.edtCode.set_enableevent(true);
        };

        //부서 세팅
        this.fnSetDept = function (sDept)
        {
        	if (this.gfnIsNull(sDept)) {
        		sDept = nexacro.getApplication().gdsUser.getColumn(0,"DEPT_CD");
        	}
        	this.edtCode.set_value(sDept);
        	this.fnTranDeptList();
        };

        // 활성화/비활성화
        this.fnSetEnable = function (bEnable)
        {
        	this.edtCode.set_enable(bEnable);
        	this.btnSearch.set_enable(bEnable);
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.edtCode_onkeyup = function(obj,e)
        {
        	if(e.keycode==13) this.fnTranDeptList();
        };

        this.edtCode_onkillfocus = function(obj,e)
        {
        	this.fnTranDeptList();
        };

        this.btnSearch_onclick = function(obj,e)
        {
        	var sTitle  = "부서 선택";
        	var oArg    = {
        		pvCompanyCd:this.edtCompany.value,
        		pvSearchValue:this.edtCode.value,
        		pvSearchScopeCd:this.fvSearchScopeCd
        	};
        	var oOption = {title:sTitle
        				  ,titlebar:true};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("orgDeptMgPu", "sytm::org/orgDeptMgPu.xfdl", oArg, sPopupCallBack, oOption);
        };

        this.fnSetCompany = function (v)
        {
        	this.edtCompany.set_value(v);
        };


        this.edtCode_onchanged = function(obj,e)
        {
        	if(!obj.value || obj.value == "") {
        		this.edtName.value = "";
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.edtCode.addEventHandler("onkeyup",this.edtCode_onkeyup,this);
            this.edtCode.addEventHandler("onchanged",this.edtCode_onchanged,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
        };
        this.loadIncludeScript("cmmDeptSearch.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
