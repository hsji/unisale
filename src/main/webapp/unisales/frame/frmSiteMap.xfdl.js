(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmSiteMap");
            this.set_titletext("사이트맵");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divSiteMap","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_MF_MegaMenu");
            obj.set_url("frame::frmSiteMapDiv.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,"25","40","40","30",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_MF_Close");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSiteMap
            obj = new Layout("default","",0,0,this.divSiteMap.form,function(p){});
            this.divSiteMap.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,2350,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmSiteMapDiv.xfdl");
        };
        
        // User Script
        this.registerScript("frmSiteMap.xfdl", function() {
         /**
        *  SGI
        *  @FileName 	frmMegaMenu.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023.03.28
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        * 2023.03.28			TOBESOFT				MegaMenu
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
        	// 온로드 시 메가메뉴 호출
        	this.divSiteMap.form.fnGridSetMenu(this.getOwnerFrame().pvCnt);
        };


        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/


        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/

        /**
         * @description 메가메뉴 닫기 클릭 이벤트
         */
        this.divSiteMap_btnClose_onclick = function(obj,e)
        {
        	this.gfnClosePopup();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.btnClose.addEventHandler("onclick",this.divSiteMap_btnClose_onclick,this);
        };
        this.loadIncludeScript("frmSiteMap.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
