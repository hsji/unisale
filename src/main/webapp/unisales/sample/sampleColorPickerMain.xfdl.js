(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleColorPickerMain");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn00","102","80","564","160",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new Edit("edt00","203","289","309","41",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_value("#3399ff");
            obj.set_text("#3399ff");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","529","286","86","44",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("btn01");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdiv00","766","270","240","220",null,null,null,null,null,null,this);
            obj.set_text("pdiv00");
            obj.set_visible("false");
            obj.set_url("sample::sampleColorPicker.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","62","407","161","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("기본색상지정");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.pdiv00
            obj = new Layout("default","",0,0,this.pdiv00.form,function(p){});
            this.pdiv00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","sample::sampleColorPicker.xfdl");
        };
        
        // User Script
        this.registerScript("sampleColorPickerMain.xfdl", function() {

        this.btn01_onclick = function(obj,e)
        {
        	this.pdiv00.form.fnInit(this.edt00.value);
        	this.pdiv00.trackPopupByComponent(this.edt00,0,this.edt00.getOffsetHeight(), 240, 220, "fnColorPicCallBack");
        };

        this.btn02_onclick = function(obj,e)
        {
        	this.pdiv00.form.setSelectedColor(this.edt00.value);
        };

        this.fnColorPicCallBack = function(obj, rtn) {
        	if(rtn) {
        		this.edt00.set_value(rtn);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
        };
        this.loadIncludeScript("sampleColorPickerMain.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
