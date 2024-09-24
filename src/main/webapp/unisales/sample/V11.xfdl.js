(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("V11");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds00", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"LVL\" type=\"STRING\" size=\"256\"/><Column id=\"TXT\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LVL\">0</Col><Col id=\"TXT\">AAA</Col></Row><Row><Col id=\"LVL\">1</Col><Col id=\"TXT\">BBB</Col><Col id=\"TYPE\">1</Col></Row><Row><Col id=\"LVL\">1</Col><Col id=\"TXT\">CCC</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd00","128","148","579","326",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds00");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj.set_autoenter("none");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"227\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"ID\"/><Cell col=\"1\" text=\"LVL\"/><Cell col=\"2\" text=\"TXT\"/><Cell col=\"3\" text=\"Column3\"/></Band><Band id=\"body\"><Cell text=\"bind:TXT\" displaytype=\"treeitemcontrol\" edittype=\"expr:TYPE==&apos;1&apos;?&apos;text&apos;:&apos;tree&apos;\" treelevel=\"bind:LVL\"/><Cell col=\"1\" text=\"bind:LVL\" edittype=\"expr:TYPE==&apos;1&apos;?&apos;text&apos;:&apos;none&apos;\"/><Cell col=\"2\" text=\"bind:TXT\"/><Cell col=\"3\" text=\"bind:TYPE\"/></Band></Format></Formats>");
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("V11.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
