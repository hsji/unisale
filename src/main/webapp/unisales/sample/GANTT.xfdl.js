(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("GANTT");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds00", this);
            obj._setContents("<ColumnInfo><Column id=\"label\" type=\"STRING\" size=\"256\"/><Column id=\"start\" type=\"DATE\" size=\"256\"/><Column id=\"end\" type=\"DATE\" size=\"256\"/><Column id=\"complete\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"linewidth\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"color\" type=\"STRING\" size=\"256\"/><Column id=\"bgcolor\" type=\"STRING\" size=\"256\"/><Column id=\"link\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"label\">Saas Project</Col><Col id=\"start\">20221128</Col><Col id=\"end\">20230131</Col><Col id=\"complete\">30</Col><Col id=\"linewidth\">0</Col><Col id=\"color\">linear-gradient(to bottom,#1D4E82:#2C69B8:#67A0E1:#2C69B8:#1D4E82)</Col><Col id=\"bgcolor\">#D1EBF6</Col></Row><Row><Col id=\"label\">Server Install</Col><Col id=\"start\">20221128</Col><Col id=\"end\">20221223</Col><Col id=\"complete\">50</Col><Col id=\"linewidth\">0</Col><Col id=\"color\">linear-gradient(to bottom,#1D4E82:#2C69B8:#67A0E1:#2C69B8:#1D4E82)</Col><Col id=\"bgcolor\">#D1EBF6</Col></Row><Row><Col id=\"label\">Install Apache</Col><Col id=\"start\">20221128</Col><Col id=\"end\">20221206</Col><Col id=\"complete\">100</Col><Col id=\"linewidth\">0</Col><Col id=\"color\">linear-gradient(to bottom,#79C680,#8EE997,#79C680)</Col><Col id=\"bgcolor\">#D1EBF6</Col><Col id=\"link\">Install Test</Col></Row><Row><Col id=\"label\">Install Tomcat</Col><Col id=\"start\">20221207</Col><Col id=\"end\">20221215</Col><Col id=\"complete\">70</Col><Col id=\"linewidth\">0</Col><Col id=\"color\">linear-gradient(to bottom,#79C680,#8EE997,#79C680)</Col><Col id=\"bgcolor\">#D1EBF6</Col><Col id=\"link\">Install Test</Col></Row><Row><Col id=\"label\">Install DB(MySQL)</Col><Col id=\"start\">20221207</Col><Col id=\"end\">20221216</Col><Col id=\"complete\">30</Col><Col id=\"linewidth\">0</Col><Col id=\"color\">linear-gradient(to bottom,#d43346:#d95060:#cf747e:#d95060:#d43346)</Col><Col id=\"bgcolor\">#D1EBF6</Col><Col id=\"link\">Install Test</Col></Row><Row><Col id=\"label\">Install Test</Col><Col id=\"start\">20221219</Col><Col id=\"end\">20221223</Col><Col id=\"complete\">30</Col><Col id=\"linewidth\">0</Col><Col id=\"color\">linear-gradient(to bottom,#d43346:#d95060:#cf747e:#d95060:#d43346)</Col><Col id=\"bgcolor\">#D1EBF6</Col><Col id=\"link\">Web Source</Col></Row><Row><Col id=\"label\">Deploy</Col><Col id=\"start\">20221226</Col><Col id=\"end\">20230131</Col><Col id=\"complete\">30</Col><Col id=\"linewidth\">0</Col><Col id=\"color\">linear-gradient(to bottom,#1D4E82:#2C69B8:#67A0E1:#2C69B8:#1D4E82)</Col><Col id=\"bgcolor\">#D1EBF6</Col></Row><Row><Col id=\"label\">Web Source</Col><Col id=\"start\">20221226</Col><Col id=\"end\">20230120</Col><Col id=\"complete\">10</Col><Col id=\"linewidth\">0</Col><Col id=\"color\">linear-gradient(to bottom,#1D4E82:#2C69B8:#67A0E1:#2C69B8:#1D4E82)</Col><Col id=\"bgcolor\">#D1EBF6</Col><Col id=\"link\">Was Souce</Col></Row><Row><Col id=\"label\">Was Souce</Col><Col id=\"start\">20230123</Col><Col id=\"end\">20230131</Col><Col id=\"complete\">10</Col><Col id=\"linewidth\">0</Col><Col id=\"color\">linear-gradient(to bottom,#1D4E82:#2C69B8:#67A0E1:#2C69B8:#1D4E82)</Col><Col id=\"bgcolor\">#D1EBF6</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new ChartJS("ChartJS00","30","88","1157","444",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("ChartJS00");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","26","7","172","42",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("btn00");
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
        this.registerScript("GANTT.xfdl", function() {

        this.btn00_onclick = function(obj,e)
        {
        	var chart = this.ChartJS00;
        	var canvas = chart.getCanvas();
        	var cvs = canvas.id;
        	DxChart.reset(canvas);

        	// resize 처리 안함.
        	//------------------------------------
        	chart.set_autoresize(false);
        	//------------------------------------

        	var gantt = new DxChartGantt({
        		id: cvs,
        		elem : canvas,
        		binddataset : this.ds00,
        		data: 'bind:start=start,bind:end=end,bind:complete=complete,bind:label=label,bind:linewidth=linewidth,bind:color=color,bind:bgcolor=background,bind:link=link',
        		options: {
        			variant: {Value:'month'},
        			margin: { Left:100, Top: 70, Inner : 7},
        			linked: {
        					Use: true,
        					LineColor: '#000000',
        					LineWidth: 1
        			},
        			xaxis: {
        				Use:true,
        				Position: 'top',
        				LabelsCount : 5,
        				DateFormat: 'yyyy-MM-dd',

        				WeekList: ['S','M','T','W','T','F','S'],
        				WeeklyTitleFontStyle: 'bold 10px Tahoma',
        				WeeklyTitleColor: '#000000',
        				WeeklySubTitleFontStyle: '10px Tahoma',
        				WeeklySubTitleColor: '#0000ff',
        				WeeklyDateWidth: 20,
        				WeeklySundayColor : '#ff0000',
        				WeeklySundayBackgroundColor : '#eeeeee',
        				WeeklyTitleBackgroundColor: '#ffffff',
        				WeeklySubTitleBackgroundColor: '',
        				WeeklyTitleHeight: 20,
        				WeeklyTitleLineWidth: 2,
        				WeeklyTitleLineColor: '#000000',
        				WeeklySubTitleLineWidth: 1,
        				WeeklySubTitleLineColor: '#777777',
        				WeeklyVLineWidth: 1,
        				WeeklyVLineColor: '#000000',
        				WeeklyVSubLineWidth: 1,
        				WeeklyVSubLineColor: '#dddddd',
        				WeeklyRowHeight: 36,
        				WeeklyHLineWidth: 1,
        				WeeklyHLineColor: '#eeeeee',
        			},
        			labels: {
        				FontStyle: '9px Tahoma',
        				Color: '#000000',
        				Complete: false
        			},
        			tooltips: {
        						Data : '%{label}<br>START: %{start}<br>END: %{end}<br>COMPLETE: %{complete}',
        						DateFormat: 'yyyy-MM-dd',
        						Pointer : false,
        						Css: {
        							fontSize: '10pt',
        							borderRadius : '2px',
        							border : '2px solid #000000',
        							color : 'black',
        							backgroundColor : ['#FFFFFF']
        						}
        					}
        		}
        	});
        	gantt.draw();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
        };
        this.loadIncludeScript("GANTT.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
