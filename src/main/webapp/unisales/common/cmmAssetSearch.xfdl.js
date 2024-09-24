(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmAssetSearch");
            this.set_titletext("자산조회");
            this.set_scrolltype("none");
            this.set_scrollbartype("none none");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,24);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCommonCond", this);
            obj._setContents("<ColumnInfo><Column id=\"SRCH\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCommonList", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","0","0","47",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("구분");
            this.addChild(obj.name, obj);

            obj = new Combo("cboAssetGrp","sta00:5","0","16.89%",null,null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_enable("false");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","cboAssetGrp:22.99000000000001","0","47",null,null,"0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("형태");
            this.addChild(obj.name, obj);

            obj = new Combo("cboAssetType","sta00_00:5","0","16.89%",null,null,"0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_enable("false");
            obj.set_value("");
            obj.set_index("-1");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","cboAssetType:21","0","47",null,null,"0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("모델");
            this.addChild(obj.name, obj);

            obj = new Edit("edtVersion","sta00_00_00:1","0","23.78%",null,null,"0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtUName","edtVersion:14.961000000000013","0",null,null,"30","0",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAssetCd","0","42","280","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edtAssetNo","360","42","260","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"0","28",null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_EdiSch");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",900,24,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmAssetSearch.xfdl", function() {
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
        	//this.gfnFormOnload(obj,e); //필수함수
        	if( this.parent.uEssential=="true"){
        		this.edtCode.set_cssclass("essential");
        	}

        	//공통코드
        	var param = [
        			  {biztype : "Combo", code : "SM23", objid : this.cboAssetGrp}	// 자산 구분
        			, {biztype : "Combo", code : "SM19", objid : this.cboAssetType}	// 자산명
        	];

        	this.gfnGetCommonCode(param);
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //transaction
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {

        };

        //popup
        this.fnPopupCallback = function (sPopupId, sRtn)
        {
        	switch(sPopupId) {
        		case "assetListPu":
        			if( !this.gfnIsNull(sRtn) ){
        				console.log(sRtn);
        				var aRtn= sRtn.split("|");
        				this.edtAssetCd.set_value(aRtn[0]);
        				this.edtAssetNo.set_value(aRtn[1]);
        				this.cboAssetGrp.set_value(aRtn[0]);
        				this.cboAssetType.set_value(aRtn[3]);
        				this.edtVersion.set_value(aRtn[4]);
        				this.edtUName.set_value(aRtn[2]);
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
        			this.edtAssetCd.set_value("");
        			this.edtAssetNo.set_value("");
        			this.cboAssetGrp.set_value("");
        			this.cboAssetType.set_value("");
        			this.edtVersion.set_value("");
        			this.edtUName.set_value("");
        			break;
        		default:break;
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/

        this.btnSearch_onclick = function(obj,e)
        {
        	var sTitle  = "자산 선택";
        	var oArg    = {pvSearchCode:this.edtAssetCd.value, pvSearchNo:this.edtAssetNo.value};
        	var oOption = {title:sTitle
        				,titlebar:true};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("assetListPu", "sytm::asset/assetListPu.xfdl", oArg, sPopupCallBack, oOption);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnSearch.addEventHandler("onclick",this.btnSearch_onclick,this);
        };
        this.loadIncludeScript("cmmAssetSearch.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
