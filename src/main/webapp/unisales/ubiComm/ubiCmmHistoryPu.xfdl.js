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
                this._setFormPosition(460,440);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HOOF_STAT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"KORN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHistory", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"SEND_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","25.00","0",null,"43","25",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("발송정보");
            obj.set_cssclass("sta_TFDM_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","25","Static00:0",null,null,"25","68",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsHistory");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"139\"/><Column size=\"51\"/><Column size=\"202\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"발송일시\"/><Cell col=\"1\" text=\"순번\"/><Cell col=\"2\" text=\"제목\"/></Band><Band id=\"body\"><Cell text=\"bind:SEND_DTTM\" displaytype=\"mask\" maskeditformat=\"@@@@-@@-@@ @@:@@:@@\" maskedittype=\"string\"/><Cell col=\"1\" text=\"bind:SEND_SEQ\"/><Cell col=\"2\" text=\"bind:SEND_TITLE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm",null,null,"50","28","78","20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("선택");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_TFDM_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"50","28","25","20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("취소");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_TFDM_Crud");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",460,440,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ubiCmmHistoryPu.xfdl", function() {
        /**
        *  발송히스토리 리스트 - docMailPu에서 사용
        *  @FileName 	ubiCmmHistory.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2024/03/05
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/03/05			DXTOBE						최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.dsHistory.copyData(this.opener.dsHistory);
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
        	if(nRow >= 0) {
        		this.opener.dsHistory.set_rowposition(nRow);	// 부모창 row position set
        		this.close("OK");
        	} else {
        		this.close();
        	}
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.grdList_oncelldblclick = function(obj,e)
        {
        	this.fnClose(e.row);
        };

        this.btnConfirm_onclick = function(obj,e)
        {
        	this.fnClose(this.dsHistory.rowposition);
        };

        this.btnClose_onclick = function(obj,e)
        {
        	this.close("");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grdList.addEventHandler("oncelldblclick",this.grdList_oncelldblclick,this);
            this.btnConfirm.addEventHandler("onclick",this.btnConfirm_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
        };
        this.loadIncludeScript("ubiCmmHistoryPu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
