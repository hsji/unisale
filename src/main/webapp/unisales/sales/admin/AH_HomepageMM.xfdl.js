(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AH_HomepageMM");
            this.set_titletext("홈페이지관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Tab("tab_HomepageMM","8","8",null,null,"8","8",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tpg_BoardList",this.tab_HomepageMM);
            obj.set_text("게시판");
            obj.set_url("Admin::AH_BoardList.xfdl");
            this.tab_HomepageMM.addChild(obj.name, obj);

            obj = new Tabpage("tpg_QuestionList",this.tab_HomepageMM);
            obj.set_text("문의");
            obj.set_url("Admin::AH_QuestionList.xfdl");
            this.tab_HomepageMM.addChild(obj.name, obj);

            obj = new Tabpage("tpg_QuestionManagerList",this.tab_HomepageMM);
            obj.set_text("문의담당자");
            obj.set_url("Admin::AH_QuestionManagerList.xfdl");
            this.tab_HomepageMM.addChild(obj.name, obj);

            obj = new Tabpage("tpg_Dev",this.tab_HomepageMM);
            obj.set_text("체험판다운/라이선스");
            obj.set_url("Admin::AH_DevList.xfdl");
            this.tab_HomepageMM.addChild(obj.name, obj);

            obj = new Tabpage("tpg_MenuList",this.tab_HomepageMM);
            obj.set_text("메뉴관리");
            obj.set_url("Admin::AH_MenuList.xfdl");
            this.tab_HomepageMM.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.tab_HomepageMM.tpg_BoardList
            obj = new Layout("default","",0,0,this.tab_HomepageMM.tpg_BoardList.form,function(p){});
            this.tab_HomepageMM.tpg_BoardList.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_HomepageMM.tpg_QuestionList
            obj = new Layout("default","",0,0,this.tab_HomepageMM.tpg_QuestionList.form,function(p){});
            this.tab_HomepageMM.tpg_QuestionList.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_HomepageMM.tpg_QuestionManagerList
            obj = new Layout("default","",0,0,this.tab_HomepageMM.tpg_QuestionManagerList.form,function(p){});
            this.tab_HomepageMM.tpg_QuestionManagerList.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_HomepageMM.tpg_Dev
            obj = new Layout("default","",0,0,this.tab_HomepageMM.tpg_Dev.form,function(p){});
            this.tab_HomepageMM.tpg_Dev.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_HomepageMM.tpg_MenuList
            obj = new Layout("default","",0,0,this.tab_HomepageMM.tpg_MenuList.form,function(p){});
            this.tab_HomepageMM.tpg_MenuList.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Admin::AH_BoardList.xfdl");
            this._addPreloadList("fdl","Admin::AH_QuestionList.xfdl");
            this._addPreloadList("fdl","Admin::AH_QuestionManagerList.xfdl");
            this._addPreloadList("fdl","Admin::AH_DevList.xfdl");
            this._addPreloadList("fdl","Admin::AH_MenuList.xfdl");
        };
        
        // User Script
        this.addIncludeScript("AH_HomepageMM.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("AH_HomepageMM.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("AH_HomepageMM.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("AH_HomepageMM.xfdl","Script::CommGrid.xjs");
        this.addIncludeScript("AH_HomepageMM.xfdl","Script::ext_WebEditor.xjs");
        this.registerScript("AH_HomepageMM.xfdl", function() {
        /************************************************************************************************
         * 01. 업무구분 : 홈페이지관리
         * 02. 화면명   : 홈페이지관리(AH_HomepageMM)
         * 03. 화면설명 : 홈페이지관리
         * 04. 작성일   : 2022.09.13
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
        this.FV_AUTH = "";
        /************************************************************************************************
        * FORM 영역 EVENT 영역
        ************************************************************************************************/
        this.AH_HomepageMM_onload = function(obj,e)
        {
        	this.fnAuthConfig();
        };

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        //권한처리
        this.fnAuthConfig = function()
        {
        	if (this.commUtil.getFormAuthority(325,1)) /*	전체 권한	*/
        	{
        		this.FV_AUTH = "ALL";
        	}
        	else if (this.commUtil.getFormAuthority(325,4)) /*	공시/IR/PR 권한	- 마케팅팀 권한 중복(2,4)으로 인해 순서변경처리*/
        	{
        		this.FV_AUTH = "IR";
        	}
        	else if (this.commUtil.getFormAuthority(325,2)) /*	사업전략팀 권한	*/
        	{
        		this.FV_AUTH = "BS";
        	}
        	else if (this.commUtil.getFormAuthority(325,3)) /*	회계 권한	*/
        	{
        		this.FV_AUTH = "ACT";
        	}
        	else if (this.commUtil.getFormAuthority(325,5)) /*	인사총무팀 권한	*/
        	{
        		this.FV_AUTH = "HR";
        	}
        	this.fnSetTabpage(this.FV_AUTH);
        };

        this.fnSetTabpage = function(sAuth)
        {
        	if(sAuth != "ALL") {
        		// 순서 중요 3 : 메뉴관리
        		this.tab_HomepageMM.removeTabpage(4);
        	}
        	if(sAuth != "ALL" && sAuth != "BS" && sAuth != "IR") {
        		// 순서 중요 3 : 체험판 다운로드/라이선스  2 : 문의담당자 1 : 문의
        		this.tab_HomepageMM.removeTabpage(3);
        		this.tab_HomepageMM.removeTabpage(2);
        		this.tab_HomepageMM.removeTabpage(1);
        	}

        };
        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.AH_HomepageMM_onload,this);
        };
        this.loadIncludeScript("AH_HomepageMM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
