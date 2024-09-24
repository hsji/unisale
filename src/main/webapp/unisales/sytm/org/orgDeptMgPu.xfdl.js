(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("orgDeptMgPu");
            this.set_titletext("부서 선택");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_KORN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_LVL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
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

            obj = new Static("Static00","25","20",null,"43","25",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","25","Static00:0",null,null,"25","68",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsDept");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"184\"/><Column size=\"81\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"26\"/></Rows><Band id=\"head\"><Cell text=\"부서명\"/><Cell col=\"1\" text=\"부서코드\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_KORN_NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:DEPT_LVL\"/><Cell col=\"1\" text=\"bind:DEPT_CD\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"50","28","25","20",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("취소");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm",null,null,"50","28","btnClose:3","20",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("확인");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",400,550,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("orgDeptMgPu.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	orgDeptMgPu.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/02/02
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/02/02			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvSearchValue = "";

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	//부서조회
        	this.fvCompanyCd = this.getOwnerFrame().pvCompanyCd;
        	this.dsCond.setColumn(0, "COMPANY_CD", this.fvCompanyCd);
        	this.fvSearchValue = this.getOwnerFrame().pvSearchValue;
        	this.fvSearchScopeCd = this.getOwnerFrame().pvSearchScopeCd;
        	this.fnGetDeptTran();
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //부서전체조회
        this.fnGetDeptTran = function ()
        {
        	var strSvcId    = "searchDeptInfo";
        	var strSvcUrl   = "searchDeptInfo.do";
        	var inData      = "dsCond=dsCond";
        	var outData     = "dsDept=dsDept";
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
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "searchDeptInfo":
        			if(!this.gfnIsNull(this.fvSearchValue)){
        				var nFindRow = this.dsDept.findRow("DEPT_CD",this.fvSearchValue);
        				if( nFindRow>-1) this.dsDept.set_rowposition(nFindRow);
        			}
        			break;
        		default:break;
        	}
        };

        //message
        this.fnMsgCallback = function (sMsgId, sRtn)
        {
        	switch(sMsgId) {
        		case "nosearchscope":
        			break;
        		default:break;
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnClose = function (nRow)
        {
        	var sDeptCd = this.dsDept.getColumn(nRow, "DEPT_CD");
        	var sDeptNm = this.dsDept.getColumn(nRow, "DEPT_KORN_NM");
        	var nLv = nexacro.toNumber(this.dsDept.getColumn(nRow, "DEPT_LVL")) +1;
        	var rtn = sDeptCd +"|" + nLv +"|"+sDeptNm;

        	var sUserDeptCd = nexacro.getApplication().gdsUser.getColumn(0,"DEPT_CD");
        	var nUserRow = this.dsDept.findRow("DEPT_CD", sUserDeptCd);
        	var sUserParentDeptCd = "";
        	var sUserParentDeptFlagCd = "";
        	var sHiDeptCd = "";
        	var sParentDeptCd = "";
        	var sParentDeptFlagCd = "";

        	switch(this.fvSearchScopeCd) {
        		case "0010":	//전체
        			break;
        		case "0020":	//사업본부
        			//trace("nUserRow : " + nUserRow);
        			while (nUserRow)
        			{
        			    sUserParentDeptCd = this.dsDept.getColumn(nUserRow, "DEPT_CD");
        				sUserParentDeptFlagCd = this.dsDept.getColumn(nUserRow, "DEPT_FLAG_CD");
        				//trace("sUserParentDeptCd1 : " + sUserParentDeptCd);
        				//trace("sUserParentDeptFlagCd1 : " + sUserParentDeptFlagCd);
        				if(sUserParentDeptFlagCd == "0020"){
        					sUserHiDeptCd = sUserParentDeptCd;
        					break;
        				}
        				nUserRow = this.grdList.getTreeParentRow( nUserRow, true);
        				//trace("nUserRow1 : " + nUserRow);
        			}
        			//trace("sUserHiDeptCd  " + sUserHiDeptCd);
        			//trace(this.dsDept.lookup("DEPT_CD", sDeptCd, "HIPO_DEPT_CD"));

        			while (nRow)
        			{
        				sParentDeptCd = this.dsDept.getColumn(nRow, "DEPT_CD");
        				sParentDeptFlagCd = this.dsDept.getColumn(nRow, "DEPT_FLAG_CD");
        				//trace("sParentDeptCd1 : " + sParentDeptCd);
        				//trace("sParentDeptFlagCd1 : " + sParentDeptFlagCd);
        				if(sParentDeptFlagCd == "0020"){
        					sHiDeptCd = sParentDeptCd;
        					break;
        				}
        				nRow = this.grdList.getTreeParentRow( nRow, true);
        				//trace("nRow1 : " + nRow);
        			}
        			//trace("sUserHiDeptCd : " + sUserHiDeptCd + " sHiDeptCd : " + sHiDeptCd);
        			if( sUserHiDeptCd != sHiDeptCd) {
        				this.gfnAlert("msg.nosearchscope", [""], "nosearchscope", "fnMsgCallback");
        				return;
        			}

        			break;
        		case "0030":	//그룹
        // 			var sGrpDeptCd = this.dsDept.lookup("DEPT_CD", sUserDeptCd, "HIPO_DEPT_CD");
        //
        // 			if(this.dsDept.lookup("DEPT_CD", sGrpDeptCd, "DEPT_FLAG_CD") != "0030" || (sDeptCd != sGrpDeptCd && this.dsDept.lookup("DEPT_CD", sDeptCd, "HIPO_DEPT_CD") != sGrpDeptCd)) {
        // 				this.gfnAlert("msg.nosearchscope", [""], "nosearchscope", "fnMsgCallback");
        // 				return;
        // 			}

        			//trace("nUserRow : " + nUserRow);
        			while (nUserRow)
        			{
        			    sUserParentDeptCd = this.dsDept.getColumn(nUserRow, "DEPT_CD");
        				sUserParentDeptFlagCd = this.dsDept.getColumn(nUserRow, "DEPT_FLAG_CD");
        				//trace("sUserParentDeptCd1 : " + sUserParentDeptCd);
        				//trace("sUserParentDeptFlagCd1 : " + sUserParentDeptFlagCd);
        				if(sUserParentDeptFlagCd == "0030"){
        					sUserHiDeptCd = sUserParentDeptCd;
        					break;
        				}
        				nUserRow = this.grdList.getTreeParentRow( nUserRow, true);
        				//trace("nUserRow1 : " + nUserRow);
        			}
        			//trace("sUserHiDeptCd  " + sUserHiDeptCd);
        			//trace(this.dsDept.lookup("DEPT_CD", sDeptCd, "HIPO_DEPT_CD"));

        			while (nRow)
        			{
        				sParentDeptCd = this.dsDept.getColumn(nRow, "DEPT_CD");
        				sParentDeptFlagCd = this.dsDept.getColumn(nRow, "DEPT_FLAG_CD");
        				//trace("sParentDeptCd1 : " + sParentDeptCd);
        				//trace("sParentDeptFlagCd1 : " + sParentDeptFlagCd);
        				if(sParentDeptFlagCd == "0030"){
        					sHiDeptCd = sParentDeptCd;
        					break;
        				}
        				nRow = this.grdList.getTreeParentRow( nRow, true);
        				//trace("nRow1 : " + nRow);
        			}
        			//trace("sUserHiDeptCd : " + sUserHiDeptCd + " sHiDeptCd : " + sHiDeptCd);
        			if( sUserHiDeptCd != sHiDeptCd) {
        				this.gfnAlert("msg.nosearchscope", [""], "nosearchscope", "fnMsgCallback");
        				return;
        			}
        			break;
        		case "0040":	//팀
        		case "0050":	//개인
        			this.edtCode.set_enable(false);
        			this.btnSearch.set_enable(false);
        			break;
        		default:
        	}


        	this.close(rtn);
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.btnClose_onclick = function(obj,e)
        {
        	this.close("");
        };

        this.btnConfirm_onclick = function(obj,e)
        {
        	this.fnClose(this.dsDept.rowposition);
        };

        this.grdList_oncelldblclick = function(obj,e)
        {
        	this.fnClose(e.row);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grdList.addEventHandler("oncelldblclick",this.grdList_oncelldblclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btnConfirm.addEventHandler("onclick",this.btnConfirm_onclick,this);
        };
        this.loadIncludeScript("orgDeptMgPu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
