(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleDynamicTab");
            this.set_titletext("Tabpage 동적 생성");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Tab("tabMain","0","43",null,null,"20","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            obj.set_showextrabutton("true");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.tabMain);
            obj.set_text("Tabpage1");
            obj.set_url("sample::sampleDynamicTabLink.xfdl");
            this.tabMain.addChild(obj.name, obj);

            obj = new Button("btnAddTabpage",null,null,"94","28","20","tabMain:5",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("TabPage생성");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnDelTabpage",null,"10","98","28","btnAddTabpage:3",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("TabPage 삭제");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","0","200","43",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("탭페이지");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddTabpageM",null,"10","165","28","btnDelTabpage:3",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("특정위치에 Tabpage  생성");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnTabpageMove",null,"10","166","28","btnAddTabpageM:3",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("현재탭을 제일앞으로 이동");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00",null,"0","20",null,"0","20",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W20");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.tabMain.Tabpage1
            obj = new Layout("default","",0,0,this.tabMain.Tabpage1.form,function(p){});
            this.tabMain.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1050,736,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","sample::sampleDynamicTabLink.xfdl");
        };
        
        // User Script
        this.registerScript("sampleDynamicTab.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	sampleDynamicTab.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2020/12/14
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2020/12/14			TOBESOFT					최초생성
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
        	this.gfnFormOnload(obj,e); //필수함수
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

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnGetMaxCnt = function ()
        {
        	var nMax = -1;
        	for( var i=0; i<this.tabMain.getTabpageCount(); i++){
        		var sCompaId = parseInt(this.tabMain.tabpages[i].id.replace("Tabpage",""));
        		if( sCompaId > nMax) nMax = sCompaId;
        	}
        	return nMax;
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.btnAddTabpage_onclick = function(obj,e)
        {
        	var nMax = this.fnGetMaxCnt() + 1;
        	var sNewId = "Tabpage"+nMax;
        	var nIndex = this.tabMain.insertTabpage(sNewId, -1);
        	if (nIndex > -1) this.tabMain.tabpages[nIndex].set_url("sample::sampleDynamicTabLink.xfdl");
        };

        this.btnDelTabpage_onclick = function(obj,e)
        {
        	this.tabMain.removeTabpage(this.tabMain.tabindex);
        };

        this.btnAddTabpageM_onclick = function(obj,e)
        {
        	var nMax = this.fnGetMaxCnt() + 1;
        	var sNewId = "Tabpage"+nMax;

        	var nIndex = this.tabMain.insertTabpage(sNewId, 1);
        	if (nIndex > -1) this.tabMain.tabpages[nIndex].set_url("sample::sampleDynamicTabLink.xfdl");
        };

        this.tabMain_onextrabuttonclick = function(obj,e)
        {
        	var nIdx = e.index;
        	this.tabMain.removeTabpage(nIdx);
        };

        this.btnTabpageMove_onclick = function(obj,e)
        {
        	var nIdx = this.tabMain.tabindex;
        	this.tabMain.moveTabpage(nIdx, 0);
        };

        //drag & drop으로 index변경
        this.tabMain_ondrop = function(obj,e)
        {
        	var nEndIdx = this.tabMain.getIndex(e.clientx, e.clienty);
        	var nStartIdx = e.userdata;
        	if( nEndIdx == -1 ){
        		nEndIdx = this.tabMain.getTabpageCount() -1;
        	}
        	this.tabMain.moveTabpage(nStartIdx, nEndIdx);
        };

        this.tabMain_ondrag = function(obj,e)
        {
        	var nStartIdx = this.tabMain.getIndex(e.canvasx, e.canvasy);
        	e.set_userdata(nStartIdx);
        	return true;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.tabMain.addEventHandler("onextrabuttonclick",this.tabMain_onextrabuttonclick,this);
            this.tabMain.addEventHandler("ondrop",this.tabMain_ondrop,this);
            this.tabMain.addEventHandler("ondrag",this.tabMain_ondrag,this);
            this.btnAddTabpage.addEventHandler("onclick",this.btnAddTabpage_onclick,this);
            this.btnDelTabpage.addEventHandler("onclick",this.btnDelTabpage_onclick,this);
            this.btnAddTabpageM.addEventHandler("onclick",this.btnAddTabpageM_onclick,this);
            this.btnTabpageMove.addEventHandler("onclick",this.btnTabpageMove_onclick,this);
        };
        this.loadIncludeScript("sampleDynamicTab.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
