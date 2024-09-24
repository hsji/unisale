(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("tt");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Edit("edt00","66","61","252","49",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_displaynulltext("안녕하세요");
            this.addChild(obj.name, obj);

            obj = new Edit("edt01","64","135","254","60",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_displaynulltext("반갑습니다");
            this.addChild(obj.name, obj);

            obj = new Edit("edt02","66","219","254","53",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","354","60","184","58",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("sta00");
            obj.set_accessibilityaction("333");
            this.addChild(obj.name, obj);
            // Layout Functions
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
        this.registerScript("tt.xfdl", function() {

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("tt.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
