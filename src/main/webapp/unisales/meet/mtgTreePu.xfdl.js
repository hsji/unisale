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
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"CHGE_ID\" type=\"string\" size=\"32\"/><Column id=\"DT_YN\" type=\"string\" size=\"32\"/><Column id=\"CHGE_DTTM\" type=\"datetime\" size=\"17\"/><Column id=\"DT_CD\" type=\"string\" size=\"32\"/><Column id=\"DT_LVL\" type=\"int\" size=\"4\"/><Column id=\"DT_NAME\" type=\"string\" size=\"32\"/><Column id=\"HIPO_DT_CD\" type=\"string\" size=\"32\"/><Column id=\"INPT_DTTM\" type=\"datetime\" size=\"17\"/><Column id=\"DEPT_ORDER\" type=\"string\" size=\"32\"/><Column id=\"DT_ORDR\" type=\"int\" size=\"4\"/><Column id=\"INPT_ID\" type=\"string\" size=\"32\"/></ColumnInfo>");
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
            obj.set_text("회의그룹");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","25","Static00:0",null,null,"25","68",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj.set_treeuseimage("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"232\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"문서그룹\"/><Cell col=\"1\" text=\"그룹코드\"/></Band><Band id=\"body\"><Cell text=\"bind:DT_NAME\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:DT_LVL\"/><Cell col=\"1\" text=\"bind:DT_CD\" textAlign=\"center\"/></Band></Format></Formats>");
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
        this.registerScript("mtgTreePu.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	ubiCmmDocTreePu.xfdl
        *  @Creator 	DXTOBE
        *  @CreateDate 	2024/03/02
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/03/02			DXTOBE					최초생성
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
        	//부서조회
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
        	this.gfnSetMap("meet", "DocuTreeList");

        	var strSvcId    = "searchDocuTree";
        	var strSvcUrl   = "searchCommonBaseService.do";
        	var inData      = "dsCond=dsCond dsMap=dsMap";
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
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "searchDocuTreeInfo":
        			if(!this.gfnIsNull(this.fvSearchValue)){
        				var nFindRow = this.dsList.findRow("DT_CD",this.fvSearchValue);
        				if( nFindRow>-1) this.dsList.set_rowposition(nFindRow);
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
        	var sDtCd = this.dsList.getColumn(nRow, "DT_CD");
        	var sDtNm = this.dsList.getColumn(nRow, "DT_NAME");
        	var nLv = nexacro.toNumber(this.dsList.getColumn(nRow, "DT_LVL")) +1;

        	var rtn = sDtCd +"|" + nLv +"|"+sDtNm+"|"+this.dsList.getColumn(nRow, "SYS_CODE")+"|"+this.dsList.getColumn(nRow, "BIZ_CODE");

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
        	this.fnClose(this.dsList.rowposition);
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
        this.loadIncludeScript("mtgTreePu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
