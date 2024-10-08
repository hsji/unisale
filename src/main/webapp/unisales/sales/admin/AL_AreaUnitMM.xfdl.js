(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AL_AreaUnitMM");
            this.set_titletext("지역별 금액 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1360,575);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_ClientList","8","8",null,"43","8",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_WF_SchList");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_ClientList","8","59",null,null,"8","8",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("Dataset00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"112\"/><Column size=\"112\"/><Column size=\"154\"/><Column size=\"122\"/><Column size=\"78\"/><Column size=\"181\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"적용년도\"/><Cell col=\"1\" text=\"지역코드\"/><Cell col=\"2\" text=\"지역이름\"/><Cell col=\"3\" text=\"금액\"/><Cell col=\"4\" text=\"사용여부\"/><Cell col=\"5\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\"/><Cell col=\"3\" text=\"bind:Column3\"/><Cell col=\"4\" text=\"bind:Column4\"/><Cell col=\"5\" text=\"bind:Column5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_ClientList.form
            obj = new Layout("default","",0,0,this.div_ClientList.form,function(p){});
            this.div_ClientList.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1360,575,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.grd_ClientList.addEventHandler("oncelldblclick",this.grd_ClientList_oncelldblclick,this);
        };
        this.loadIncludeScript("AL_AreaUnitMM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
