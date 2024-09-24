(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleala");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds00", this);
            obj._setContents("<ColumnInfo><Column id=\"COL1\" type=\"STRING\" size=\"256\"/><Column id=\"COL2\" type=\"INT\" size=\"256\"/><Column id=\"COL3\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"Column0\" type=\"DATE\" size=\"256\"/><Column id=\"Column1\" type=\"TIME\" size=\"256\"/><Column id=\"Column2\" type=\"DATETIME\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"COL1\">a</Col><Col id=\"COL2\">1</Col><Col id=\"COL3\">3</Col><Col id=\"Column0\">20240101</Col><Col id=\"Column1\">081111</Col><Col id=\"Column2\">20240101010101</Col><Col id=\"Column3\">서울</Col></Row><Row><Col id=\"Column3\">서울</Col><Col id=\"COL1\">a</Col><Col id=\"COL2\">1</Col><Col id=\"COL3\">1</Col></Row><Row><Col id=\"Column3\">서울</Col><Col id=\"COL1\">b</Col><Col id=\"COL2\">1</Col><Col id=\"COL3\">1</Col></Row><Row><Col id=\"COL1\">a</Col><Col id=\"COL2\">2</Col><Col id=\"COL3\">4</Col><Col id=\"Column0\">20240101</Col><Col id=\"Column1\">091111</Col><Col id=\"Column2\">20240101010101</Col><Col id=\"Column3\">부산</Col></Row><Row><Col id=\"COL1\">b</Col><Col id=\"COL2\">4</Col><Col id=\"COL3\">4</Col><Col id=\"Column0\">20240101</Col><Col id=\"Column1\">091111</Col><Col id=\"Column2\">20240101010101</Col><Col id=\"Column3\">부산</Col></Row><Row><Col id=\"COL1\">b</Col><Col id=\"COL2\">4</Col><Col id=\"COL3\">4</Col><Col id=\"Column0\">20240101</Col><Col id=\"Column1\">091111</Col><Col id=\"Column2\">20240101010101</Col><Col id=\"Column3\">대구</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn00","67","47","332","71",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","548","80","180","89",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("btn01");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","63","151","149","98",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("btn02");
            this.addChild(obj.name, obj);

            obj = new Button("btn03","281","152","151","97",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("btn03");
            this.addChild(obj.name, obj);

            obj = new Button("btn04","73","295","153","78",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("btn04");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleala.xfdl", function() {

        this.btn00_onclick = function(obj,e)
        {
        	var data = [ {COL1: "1", COL2: 10}, {COL1: "2", COL2: 20}, {COL1: "1", COL2: 30} ];
        	var data1 = this.ds00._viewRecords;
        	var res = alasql('SELECT COL1, SUM(COL2) AS COL2 FROM ? GROUP BY COL1', [data]);
        	console.log(res);
        };

        this.btn01_onclick = function(obj,e)
        {
        	this.ds00.setColumn(1, "COL3", 10);
        	console.log(this.ds00);
        };

        this.btn02_onclick = function(obj,e)
        {
        	var res = alasql('SELECT * FROM ? WHERE COL1 == "b"', [this.ds00]);
        	console.log(res);
        };

        this.btn03_onclick = function(obj,e)
        {
        	var res = alasql('SELECT Column3, COL1, [COL2] FROM ? PIVOT (SUM([COL2]) FOR COL1)', [this.ds00]);
        // 	var data = [ {COL1: "1", COL2: 10}, {COL1: "2", COL2: 20}, {COL1: "1", COL2: 30} ];
        // 	var res = alasql('UPDATE ? SET COL2 = 20 WHERE COL1 == "1"', data);
         	console.log(res);
        };

        this.btn04_onclick = function(obj,e)
        {
        	var res = alasql('SELECT Column3, COL1, [COL2] FROM ? PIVOT (SUM([COL2]) FOR COL1)', [this.ds00], "dstest", this);
        // 	var data = [ {COL1: "1", COL2: 10}, {COL1: "2", COL2: 20}, {COL1: "1", COL2: 30} ];
        // 	var res = alasql('UPDATE ? SET COL2 = 20 WHERE COL1 == "1"', data);
         	console.log(res);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
            this.btn03.addEventHandler("onclick",this.btn03_onclick,this);
            this.btn04.addEventHandler("onclick",this.btn04_onclick,this);
        };
        this.loadIncludeScript("sampleala.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
