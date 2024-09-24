(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AH_DevList");
            this.set_titletext("체험판 다운로드/라이선스");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_DevList", this);
            obj._setContents("<ColumnInfo><Column id=\"KIND\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRODUCT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REQ_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"CUSTOMER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CONNECT_CNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_Search","8","8",null,"40","24",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_SchList");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_CategoryCode","8","9","58","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("1");
            obj.set_text("년월");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_Excel",null,"9","68","22","8",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("2");
            obj.set_text("Excel");
            obj.set_cssclass("btn_WF_Excel");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_Search",null,"9","58","22","btn_Excel:8",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_SchText");
            this.div_Search.addChild(obj.name, obj);

            obj = new Div("div_Search_yyyyMM","74","9","145","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("3");
            obj.set_url("Common::COM_yyyyMM.xfdl");
            obj.getSetter("user_onchanged").set("fnSearch");
            this.div_Search.addChild(obj.name, obj);

            obj = new Grid("grd_DevList","8","56",null,null,"8","8",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_DevList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"200\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"요청구분\"/><Cell col=\"1\" text=\"제품\"/><Cell col=\"2\" text=\"다운로드 페이지\"/><Cell col=\"3\" text=\"요청 이메일\"/><Cell col=\"4\" text=\"신청자\"/><Cell col=\"5\" text=\"신청자 회사\"/><Cell col=\"6\" text=\"누적 다운로드 횟수\"/></Band><Band id=\"body\"><Cell text=\"bind:KIND\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:PRODUCT_NM\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:LANGUAGE_NM\"/><Cell col=\"3\" text=\"bind:REQ_EMAIL\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:CUSTOMER_NM\"/><Cell col=\"5\" text=\"bind:COMPANY_NM\" textAlign=\"left\"/><Cell col=\"6\" text=\"bind:CONNECT_CNT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_Search.form.div_Search_yyyyMM
            obj = new Layout("default","",0,0,this.div_Search.form.div_Search_yyyyMM.form,function(p){});
            this.div_Search.form.div_Search_yyyyMM.form.addLayout(obj.name, obj);

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
            this._addPreloadList("fdl","Common::COM_yyyyMM.xfdl");
        };
        
        // User Script
        this.addIncludeScript("AH_DevList.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("AH_DevList.xfdl","Script::CommGrid.xjs");
        this.addIncludeScript("AH_DevList.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("AH_DevList.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("AH_DevList.xfdl","Script::ext_CommEco.xjs");
        this.registerScript("AH_DevList.xfdl", function() {
        /************************************************************************************************
         * 01. 업무구분 : 홈페이지관리
         * 02. 화면명   : 체험판 다운로드/라이선스 탭페이지(AH_DevList)
         * 03. 화면설명 : 체험판 다운로드/라이선스 탭페이지 ( 대상 제품 : 넥사크로N, 엑스플랫폼9.2)
         * 04. 작성일   : 2023.05.03
         * 05. 작성자   : 박종언
         * 06. 수정이력 :
         ***********************************************************************************************
         *     수정일          이  름    사유
         ***********************************************************************************************
         *
         *
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
        this.AH_DevList_onload = function(obj,e)
        {
        	this.gfnCompInit(obj);  	// Grid 공통함수 호출
        };

         /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
         ************************************************************************************************/
        // 조회
        this.fnSearch = function()
        {
        	var sYYYYMM = this.div_Search.form.div_Search_yyyyMM.getYYYYMM();

        	this.gfnAddSendParameter("YYYYMM", sYYYYMM);

        	this.gfnAddOutputDataset("ds_DevList", "dsOutput");
        	this.gfnCommonTransaction("Search_DevList", "AH_DevList_S01", this.grd_DevList);
        };

        // 엑셀
        this.fnExcel = function()
        {
        	var objGrd = this.grd_DevList;

        	var sFileNm = "홈페이지 내 체험판다운/라이선스 신청자 DB 목록";
        	var sYYYYMM = this.div_Search.form.div_Search_yyyyMM.getYYYYMM();
        	sFileNm += "(" + sYYYYMM.substring(0,4) + "-" + sYYYYMM.substring(4,6) + ")";

        	this.gfn_excelExport(this, objGrd, sFileNm);
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
        			this.fnExcel();
        			break;
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.AH_DevList_onload,this);
            this.div_Search.form.btn_Excel.addEventHandler("onclick",this.common_onclick,this);
            this.div_Search.form.btn_Search.addEventHandler("onclick",this.common_onclick,this);
        };
        this.loadIncludeScript("AH_DevList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
