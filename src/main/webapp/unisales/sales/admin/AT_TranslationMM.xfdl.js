(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AT_TranslationMM");
            this.set_titletext("변역관리");
            this.getSetter("TL_FLAG").set("1");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTranslationList", this);
            obj._setContents("<ColumnInfo><Column id=\"RN\" type=\"STRING\" size=\"256\"/><Column id=\"TL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TL_DATA_KOR\" type=\"STRING\" size=\"256\"/><Column id=\"TL_DATA_JAP\" type=\"STRING\" size=\"256\"/><Column id=\"TL_DATA_ENG\" type=\"STRING\" size=\"256\"/><Column id=\"USE_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTranslationListCnt", this);
            obj._setContents("<ColumnInfo><Column id=\"TOTAL_COUNT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTranslationExcelList", this);
            obj._setContents("<ColumnInfo><Column id=\"TL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TL_DATA_KOR\" type=\"STRING\" size=\"256\"/><Column id=\"TL_DATA_JAP\" type=\"STRING\" size=\"256\"/><Column id=\"TL_DATA_ENG\" type=\"STRING\" size=\"256\"/><Column id=\"USE_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"DELETE_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"UPDATE_DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_UseFlag", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"CAPTION\">사용</Col></Row><Row><Col id=\"CODE\">0</Col><Col id=\"CAPTION\">미사용</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_TranslationMM","8","8",null,null,"8","8",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tpg_TranslationInfoList",this.tab_TranslationMM);
            obj.set_text("번역정보목록");
            obj.set_url("Admin::AT_TranslationInfo.xfdl");
            obj.getSetter("TL_SEQ").set("22598");
            this.tab_TranslationMM.addChild(obj.name, obj);

            obj = new Tabpage("tpg_TransMenuList",this.tab_TranslationMM);
            obj.set_text("번역메뉴목록");
            obj.set_url("Admin::AT_TranslationMenu.xfdl");
            obj.getSetter("TL_SEQ").set("22599");
            this.tab_TranslationMM.addChild(obj.name, obj);

            obj = new Tabpage("tpg_TransCodeList",this.tab_TranslationMM);
            obj.set_text("번역코드목록");
            obj.set_url("Admin::AT_TranslationCode.xfdl");
            obj.getSetter("TL_SEQ").set("22600");
            this.tab_TranslationMM.addChild(obj.name, obj);

            obj = new Tabpage("tpg_TransCompanyList",this.tab_TranslationMM);
            obj.set_text("번역회사목록");
            obj.set_url("Admin::AT_TranslationCompany.xfdl");
            obj.getSetter("TL_SEQ").set("22601");
            this.tab_TranslationMM.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.tab_TranslationMM.tpg_TranslationInfoList
            obj = new Layout("default","",0,0,this.tab_TranslationMM.tpg_TranslationInfoList.form,function(p){});
            this.tab_TranslationMM.tpg_TranslationInfoList.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_TranslationMM.tpg_TransMenuList
            obj = new Layout("default","",0,0,this.tab_TranslationMM.tpg_TransMenuList.form,function(p){});
            this.tab_TranslationMM.tpg_TransMenuList.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_TranslationMM.tpg_TransCodeList
            obj = new Layout("default","",0,0,this.tab_TranslationMM.tpg_TransCodeList.form,function(p){});
            this.tab_TranslationMM.tpg_TransCodeList.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_TranslationMM.tpg_TransCompanyList
            obj = new Layout("default","",0,0,this.tab_TranslationMM.tpg_TransCompanyList.form,function(p){});
            this.tab_TranslationMM.tpg_TransCompanyList.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Admin::AT_TranslationInfo.xfdl");
            this._addPreloadList("fdl","Admin::AT_TranslationMenu.xfdl");
            this._addPreloadList("fdl","Admin::AT_TranslationCode.xfdl");
            this._addPreloadList("fdl","Admin::AT_TranslationCompany.xfdl");
        };
        
        // User Script
        this.addIncludeScript("AT_TranslationMM.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("AT_TranslationMM.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("AT_TranslationMM.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("AT_TranslationMM.xfdl","Script::CommGrid.xjs");
        this.addIncludeScript("AT_TranslationMM.xfdl","Script::ext_WebEditor.xjs");
        this.registerScript("AT_TranslationMM.xfdl", function() {
        /************************************************************************************************
         * 01. 업무구분 : 번역관리
         * 02. 화면명   : 번역관리(AT_TranslationMM)
         * 03. 화면설명 : 번역관리
         * 04. 작성일   : 2023.01.31
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
        this.executeIncludeScript("Script::CommSystem.xjs"); /*include "Script::CommSystem.xjs"*/;
        this.executeIncludeScript("Script::CommTrans.xjs"); /*include "Script::CommTrans.xjs"*/;
        this.executeIncludeScript("Script::CommUtil.xjs"); /*include "Script::CommUtil.xjs"*/;
        this.executeIncludeScript("Script::CommGrid.xjs"); /*include "Script::CommGrid.xjs"*/;
        this.executeIncludeScript("Script::ext_WebEditor.xjs"); /*include "Script::ext_WebEditor.xjs"*/;

        /************************************************************************************************
        * 전역 변수 영역
        ************************************************************************************************/
        this.FV_AUTH;
        /************************************************************************************************
        * FORM 영역 EVENT 영역
        ************************************************************************************************/
        this.AT_TranslationMM_onload = function(obj,e)
        {
        	this.gfnCompInit(obj);  	// Grid 공통함수 호출
        	this.fnAuthConfig();
        };

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        //권한처리
        this.fnAuthConfig = function()
        {
        	if (this.commUtil.getFormAuthority(326,1)) /*	관리자 권한	*/
        	{
        		this.FV_AUTH = "ALL";
        	}
        	else if (this.commUtil.getFormAuthority(326,2)) /*	일문 권한	*/
        	{
        		this.FV_AUTH = "JAP";
        	}
        	else if (this.commUtil.getFormAuthority(326,3)) /*	일본컨설팅 권한+회사정보 권한	*/
        	{
        		this.FV_AUTH = "COMPANY";
        	}
        	this.fnSetTabpage(this.FV_AUTH);
        };
        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fnSetTabpage = function(sAuth)
        {
        	if(sAuth == "JAP") {
        		// 순서 중요 3 : 번역회사목록
        		this.tab_TranslationMM.removeTabpage(3);
        	}
        };
        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.AT_TranslationMM_onload,this);
        };
        this.loadIncludeScript("AT_TranslationMM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
