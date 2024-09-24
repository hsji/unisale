(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("samplediv");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn00","67","127","1095","415",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00","70","570","1095","415",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00_00","75","1010","1095","415",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00_00_00","75","1480","1095","415",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00_00_00_00","75","1950","1095","415",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00_00_00_00_00","75","2410","1095","415",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00_00_00_00_00_00","73","2883","1095","415",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0","0",null,"50","0",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_url("frame::frmTop.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,800,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmTop.xfdl");
        };
        
        // User Script
        this.registerScript("samplediv.xfdl", function() {

        this.samplediv_onvscroll = function(obj,e)
        {
        	console.log(e);
        	console.log(this);
        	console.log(this.div00);

        };

        this.samplediv_onload = function(obj,e)
        {


         	var div = this.div00._control_element.handle;
        	div.style.position = "fixed";
        	console.log(div);
        // 	console.log(div);
        // 	div.addEventListener("wheel", zoom);
        // 	div.onscroll = zoom;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onvscroll",this.samplediv_onvscroll,this);
            this.addEventHandler("onload",this.samplediv_onload,this);
        };
        this.loadIncludeScript("samplediv.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
