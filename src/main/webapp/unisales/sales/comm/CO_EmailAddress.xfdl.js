(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CO_EmailAddress");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(313,479);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("stc_GbHiddenReference","0","334",null,"31","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_GroupBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_GbDetailInfoText","-910",null,"928","15",null,"57",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("상세정보");
            obj.set_cssclass("sta_POP_GroupTit");
            this.addChild(obj.name, obj);

            obj = new Static("stc_GbReceiver","0","0",null,"31","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_POP_GroupBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_GbReceiverText","11","9","112","15",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("받는사람");
            obj.set_cssclass("sta_POP_GroupTit");
            this.addChild(obj.name, obj);

            obj = new Static("stc_GbReference","0","183",null,"31","0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_POP_GroupBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_GbReferenceText","11","192","112","15",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("참조");
            obj.set_cssclass("sta_POP_GroupTit");
            this.addChild(obj.name, obj);

            obj = new Static("stc_GbHiddenReferenceText","11","343","112","15",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("숨은참조");
            obj.set_cssclass("sta_POP_GroupTit");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_To","0","32",null,"153","0",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_to");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"86\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"이름\"/><Cell col=\"1\" text=\"이메일\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_NM\"/><Cell col=\"1\" text=\"bind:EMAIL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Cc","0","214",null,"121","0",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_cc");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"86\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"이름\"/><Cell col=\"1\" text=\"이메일\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_NM\"/><Cell col=\"1\" text=\"bind:EMAIL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Bcc","0","363",null,"116","0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_bcc");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"86\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"이름\"/><Cell col=\"1\" text=\"이메일\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_NM\"/><Cell col=\"1\" text=\"bind:EMAIL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",313,479,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CO_EmailAddress.xfdl","Script::CommGrid.xjs");
        this.registerScript("CO_EmailAddress.xfdl", function() {
        this.executeIncludeScript("Script::CommGrid.xjs"); /*include "Script::CommGrid.xjs"*/;

        this.CO_EmailAddress_onload = function(obj,e)
        {
        	this.gfnCompInit(obj); //헤더클릭 이벤트 없을 시 사용
        };

        this.grd_oncelldblclick = function(obj,e)
        {
        	var objDs = this.lookup(obj.binddataset);
        	objDs.deleteRow(e.row);
        };





        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CO_EmailAddress_onload,this);
            this.grd_To.addEventHandler("oncelldblclick",this.grd_oncelldblclick,this);
            this.grd_Cc.addEventHandler("oncelldblclick",this.grd_oncelldblclick,this);
            this.grd_Bcc.addEventHandler("oncelldblclick",this.grd_oncelldblclick,this);
        };
        this.loadIncludeScript("CO_EmailAddress.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
