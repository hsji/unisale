(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CO_SelectionEmployee");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(313,488);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("stc_GbDetailInfo","0","0",null,"31","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_GroupBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_GbDetailInfoText00","11","9","112","15",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("선택대상자");
            obj.set_cssclass("sta_POP_GroupTit");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_SelectionEmployee","0","31",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_selected");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"이름\"/><Cell col=\"1\" text=\"직책\"/><Cell col=\"2\" text=\"부서\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_NM\"/><Cell col=\"1\" text=\"bind:CAPTION\"/><Cell col=\"2\" text=\"bind:DEPT_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",313,488,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CO_SelectionEmployee.xfdl","Script::CommGrid.xjs");
        this.registerScript("CO_SelectionEmployee.xfdl", function() {
        this.executeIncludeScript("Script::CommGrid.xjs"); /*include "Script::CommGrid.xjs"*/;

        this.CO_SelectionEmployee_onload = function(obj,e)
        {
        	this.gfnCompInit(obj); //헤더클릭 이벤트 없을 시 사용
        };

        this.grd_SelectionEmployee_oncelldblclick = function(obj, e)
        {
        	var objDs = this.lookup(obj.binddataset);
        	objDs.deleteRow(e.row);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CO_SelectionEmployee_onload,this);
            this.grd_SelectionEmployee.addEventHandler("oncelldblclick",this.grd_SelectionEmployee_oncelldblclick,this);
        };
        this.loadIncludeScript("CO_SelectionEmployee.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
