(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AH_QuestionManagerList");
            this.set_titletext("문의담당자관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmm_CategoryCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"string\" size=\"30\"/><Column id=\"CAPTION\" type=\"string\" size=\"255\"/><Column id=\"VAL1\" type=\"string\" size=\"100\"/><Column id=\"VAL2\" type=\"string\" size=\"100\"/><Column id=\"VAL3\" type=\"string\" size=\"100\"/><Column id=\"VAL4\" type=\"string\" size=\"100\"/><Column id=\"REMARK\" type=\"string\" size=\"1073741823\"/><Column id=\"ORD\" type=\"string\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_QuestionManagerList", this);
            obj._setContents("<ColumnInfo><Column id=\"QML_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CATEGORY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_EMP_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_Search","8","8",null,"40","24",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SchList");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_CategoryCode","8","9","58","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("2");
            obj.set_text("질문유형");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_Search.addChild(obj.name, obj);

            obj = new Combo("cmb_CategoryCode","74","9","150","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_cmm_CategoryCode");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_Excel",null,"9","68","22","8",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("3");
            obj.set_text("Excel");
            obj.set_cssclass("btn_WF_Excel");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_Search",null,"9","58","22","btn_Excel:8",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_SchText");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_Insert",null,"9","59","23","btn_Search:8",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("4");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_tran");
            this.div_Search.addChild(obj.name, obj);

            obj = new Grid("grd_QuestionManagerList","8","56",null,null,"24","8",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_autosizingtype("none");
            obj.set_autoenter("select");
            obj.set_binddataset("ds_QuestionManagerList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"120\"/><Column size=\"150\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"질문유형\"/><Cell col=\"2\" text=\"담당자 이메일\"/><Cell col=\"3\" text=\"담당자\"/><Cell col=\"4\" text=\"작성자\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:CATEGORY_CODE\" textAlign=\"left\" displaytype=\"combotext\" combodataset=\"ds_cmm_CategoryCode\" combodatacol=\"CAPTION\" combocodecol=\"CODE\"/><Cell col=\"2\" text=\"bind:MANAGER_EMAIL\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:EMP_NM\"/><Cell col=\"4\" text=\"bind:INSERT_EMP_NM\"/></Band></Format></Formats>");
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
        this.addIncludeScript("AH_QuestionManagerList.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("AH_QuestionManagerList.xfdl","Script::CommGrid.xjs");
        this.addIncludeScript("AH_QuestionManagerList.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("AH_QuestionManagerList.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("AH_QuestionManagerList.xfdl","Script::ext_CommEco.xjs");
        this.registerScript("AH_QuestionManagerList.xfdl", function() {
        /************************************************************************************************
         * 01. 업무구분 : 홈페이지관리
         * 02. 화면명   : 문의담당자 탭페이지(AH_QuestionManagerList)
         * 03. 화면설명 : 문의담당자 탭페이지
         * 04. 작성일   : 2022.09.01
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

         /************************************************************************************************
         * FORM 영역
         ************************************************************************************************/
        this.AH_QuestionManagerList_onload = function(obj,e)
        {
        	this.gfnCompInit(obj);  	// Grid 공통함수 호출
        	this.fnGetCode();
        };

         /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
         ************************************************************************************************/
        // 공통코드 조회
        this.fnGetCode = function()
        {
        	this.gfnAddCodeDataset("ds_cmm_CategoryCode",	"CATEGORY_CODE", true);		// 질문유형
        	this.gfnCodeTransaction();
        };

        // 조회
        this.fnSearch = function()
        {
        	var sCategoryCode = this.div_Search.form.cmb_CategoryCode.value;

        	this.gfnAddSendParameter("CATEGORY_CODE", sCategoryCode);

        	this.gfnAddOutputDataset("ds_QuestionManagerList", "dsOutput");
        	this.gfnCommonTransaction("Search_QuestionManagerList", "AH_QuestionManagerList_S01", this.grd_QuestionManagerList);
        };

        // 상세
        this.fnQuestionManagerDet = function(vMode)
        {
        	var sQmlSeq = this.ds_QuestionManagerList.getColumn(this.ds_QuestionManagerList.rowposition, "QML_SEQ");
        	var Argument = {pvQmlSeq:sQmlSeq, pvMode:vMode};
        	this.commUtil.popup(this, "popupQuestionManagerListdPopup", "Admin::AH_QuestionManagerListPopup.xfdl", -1, -1, 500, 250, true, false, false, Argument, "fnPopupCallBack");
        };

        // 엑셀
        this.fnExcelData = function()
        {
        	var objGrd = this.grd_QuestionManagerList;

        	var sFileNm = "문의담당자 목록";
        	var sCategoryNm = this.div_Search.form.cmb_CategoryCode.text;
        	sFileNm += "(" + sCategoryNm + ")";

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
        				this.div_Search.form.cmb_CategoryCode.set_index(0);
        				this.fnSearch();
        				break;
        			case "Search_QuestionManagerList" :

        				break;
        		}
        	}
        };

        // 팝업 콜백
        this.fnPopupCallBack = function(sPopupId, Variant)
        {
        	Variant = this.commUtil.popupReturn();
        	if(this.gfnIsEmpty(Variant))
        	{
        		return;
        	}
        	else
        	{
        		this.recentVariant = Variant;
        		switch(sPopupId)
        		{
        			case "popupQuestionManagerListdPopup" : // 문의담당자 상세
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
        			this.fnExcelData();
        			break;
        		case "btn_Insert":	// 등록
        			this.fnQuestionManagerDet("I");
        			break;
        	}
        };

        // 상세 팝업 이벤트
        this.grd_QuestionManagerList_oncelldblclick = function(obj,e)
        {
        	this.fnQuestionManagerDet("U");
        };

        // 질문유형 변경 이벤트
        this.div_Search_cmb_CategoryCode_onitemchanged = function(obj,e)
        {
        	this.fnSearch();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.AH_QuestionManagerList_onload,this);
            this.div_Search.form.cmb_CategoryCode.addEventHandler("onitemchanged",this.div_Search_cmb_CategoryCode_onitemchanged,this);
            this.div_Search.form.btn_Excel.addEventHandler("onclick",this.common_onclick,this);
            this.div_Search.form.btn_Search.addEventHandler("onclick",this.common_onclick,this);
            this.div_Search.form.btn_Insert.addEventHandler("onclick",this.common_onclick,this);
            this.grd_QuestionManagerList.addEventHandler("oncelldblclick",this.grd_QuestionManagerList_oncelldblclick,this);
        };
        this.loadIncludeScript("AH_QuestionManagerList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
