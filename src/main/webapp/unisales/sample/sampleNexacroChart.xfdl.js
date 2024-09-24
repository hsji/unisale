(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleNexacroChart");
            this.set_titletext("넥사크로 차트");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,746);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsRainfall", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"rainfall\" type=\"FLOAT\" size=\"256\"/><Column id=\"mean\" type=\"FLOAT\" size=\"256\"/><Column id=\"select\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">SYDNEY BOTANIC GARDENS</Col><Col id=\"rainfall\">94.1</Col><Col id=\"mean\">68.2</Col></Row><Row><Col id=\"name\">CHATSWOOD BOWLING CLUB</Col><Col id=\"rainfall\">78</Col><Col id=\"mean\">51</Col></Row><Row><Col id=\"name\">CONCORD GOLF CLUB</Col><Col id=\"rainfall\">11.2</Col><Col id=\"mean\">59.1</Col></Row><Row><Col id=\"name\">ABBOTSFORD</Col><Col id=\"rainfall\">59</Col><Col id=\"mean\">66.2</Col><Col id=\"select\">1</Col></Row><Row><Col id=\"name\">MARRICKVILLE GOLF CLUB</Col><Col id=\"rainfall\">56</Col><Col id=\"mean\">55.9</Col></Row><Row><Col id=\"name\">SYDNEY AIRPORT AMO</Col><Col id=\"rainfall\">66.6</Col><Col id=\"mean\">60.3</Col><Col id=\"select\">1</Col></Row><Row><Col id=\"name\">PENNANT HILLS</Col><Col id=\"rainfall\">53.2</Col><Col id=\"mean\">56.8</Col></Row><Row><Col id=\"name\">CONCORD</Col><Col id=\"rainfall\">16.6</Col><Col id=\"mean\">48.6</Col></Row><Row><Col id=\"name\">RANDWICK BOWLING CLUB</Col><Col id=\"rainfall\">122.6</Col><Col id=\"mean\">65.9</Col></Row><Row><Col id=\"name\">SANS SOUCI</Col><Col id=\"rainfall\">45</Col><Col id=\"mean\">61.5</Col><Col id=\"select\">1</Col></Row><Row><Col id=\"name\">TERREY HILLS AWS</Col><Col id=\"rainfall\">83.4</Col><Col id=\"mean\">63.9</Col></Row><Row><Col id=\"name\">SYDNEY</Col><Col id=\"rainfall\">80</Col><Col id=\"mean\">65.5</Col></Row><Row><Col id=\"name\">STRATHFIELD GOLF CLUB</Col><Col id=\"rainfall\">36</Col><Col id=\"mean\">45.3</Col></Row><Row><Col id=\"name\">LUCAS HEIGHTS</Col><Col id=\"rainfall\">28.9</Col><Col id=\"mean\">50.9</Col></Row><Row><Col id=\"name\">CASTLE COVE</Col><Col id=\"rainfall\">101</Col><Col id=\"mean\">69.2</Col></Row><Row><Col id=\"name\">PARRAMATTA NORTH</Col><Col id=\"rainfall\">33.6</Col><Col id=\"mean\">52.4</Col></Row><Row><Col id=\"name\">COLLAROY</Col><Col id=\"rainfall\">91.4</Col><Col id=\"mean\">66.2</Col></Row><Row><Col id=\"name\">BANKSTOWN AIRPORT AWS</Col><Col id=\"rainfall\">33.4</Col><Col id=\"mean\">43.6</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCountryLitres", this);
            obj._setContents("<ColumnInfo><Column id=\"country\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"FLOAT\" size=\"256\"/><Column id=\"select\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/><Column id=\"valuedata\" type=\"FLOAT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"country\">Czech Republic</Col><Col id=\"value\">356.9</Col><Col id=\"select\"/><Col id=\"data\">test1</Col><Col id=\"valuedata\">100</Col></Row><Row><Col id=\"country\">Ireland</Col><Col id=\"value\">54</Col><Col id=\"select\"/><Col id=\"data\">tes2</Col><Col id=\"valuedata\">10</Col></Row><Row><Col id=\"country\">Germany</Col><Col id=\"value\">115.8</Col><Col id=\"data\">test3</Col><Col id=\"valuedata\">200.11</Col></Row><Row><Col id=\"country\">Australia</Col><Col id=\"value\">109.9</Col><Col id=\"select\"/><Col id=\"data\">test4</Col><Col id=\"valuedata\">19.1</Col></Row><Row><Col id=\"country\">Austria</Col><Col id=\"value\">108.3</Col><Col id=\"select\">1</Col><Col id=\"data\">test5</Col><Col id=\"valuedata\">30.12</Col></Row><Row><Col id=\"country\">UK</Col><Col id=\"value\">65</Col><Col id=\"select\"/><Col id=\"data\">test6</Col><Col id=\"valuedata\">10</Col></Row><Row><Col id=\"country\">Belgium</Col><Col id=\"value\">110</Col><Col id=\"select\"/><Col id=\"data\">test7</Col><Col id=\"valuedata\">19.100</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCostProfit", this);
            obj._setContents("<ColumnInfo><Column id=\"category\" type=\"STRING\" size=\"256\"/><Column id=\"profit\" type=\"FLOAT\" size=\"256\"/><Column id=\"cost\" type=\"FLOAT\" size=\"256\"/><Column id=\"revenue\" type=\"FLOAT\" size=\"256\"/><Column id=\"profit1\" type=\"FLOAT\" size=\"256\"/><Column id=\"cost1\" type=\"FLOAT\" size=\"256\"/><Column id=\"revenue1\" type=\"FLOAT\" size=\"256\"/><Column id=\"select\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"category\">1</Col><Col id=\"profit\">600</Col><Col id=\"cost\">700</Col><Col id=\"revenue\">9999</Col><Col id=\"profit1\">400</Col><Col id=\"cost1\">200</Col><Col id=\"revenue1\">8000</Col></Row><Row><Col id=\"category\">2</Col><Col id=\"profit\">1000</Col><Col id=\"cost\">1400</Col><Col id=\"revenue\">5500</Col><Col id=\"profit1\">2200</Col><Col id=\"cost1\">4000</Col><Col id=\"revenue1\">4040</Col></Row><Row><Col id=\"category\">3</Col><Col id=\"profit\">1500</Col><Col id=\"cost\">1550</Col><Col id=\"revenue\">2200</Col><Col id=\"profit1\">1900</Col><Col id=\"cost1\">2000</Col><Col id=\"revenue1\">3000</Col></Row><Row><Col id=\"category\">4</Col><Col id=\"profit\">2200</Col><Col id=\"cost\">1300</Col><Col id=\"revenue\">1900</Col><Col id=\"profit1\">50</Col><Col id=\"cost1\">660</Col><Col id=\"revenue1\">200</Col></Row><Row><Col id=\"category\">5</Col><Col id=\"profit\">1400</Col><Col id=\"cost\">900</Col><Col id=\"revenue\">9900</Col><Col id=\"profit1\">3000</Col><Col id=\"cost1\">1500</Col><Col id=\"revenue1\">500</Col></Row><Row><Col id=\"category\">6</Col><Col id=\"profit\">2000</Col><Col id=\"cost\">500</Col><Col id=\"revenue\">27000</Col><Col id=\"profit1\">80</Col><Col id=\"cost1\">2900</Col><Col id=\"revenue1\">3050</Col><Col id=\"select\">1</Col></Row><Row><Col id=\"profit\">1800</Col><Col id=\"category\">7</Col><Col id=\"cost\">1400</Col><Col id=\"revenue\">8000</Col><Col id=\"profit1\">2500</Col><Col id=\"cost1\">800</Col><Col id=\"revenue1\">2000</Col></Row><Row><Col id=\"category\">8</Col><Col id=\"profit\">2500</Col><Col id=\"cost\">800</Col><Col id=\"revenue\">5700</Col><Col id=\"profit1\">3000</Col><Col id=\"cost1\">1900</Col><Col id=\"revenue1\">1900</Col><Col id=\"select\">1</Col></Row><Row><Col id=\"category\">9</Col><Col id=\"profit\">2550</Col><Col id=\"cost\">600</Col><Col id=\"revenue\">3000</Col><Col id=\"profit1\">1500</Col><Col id=\"cost1\">1300</Col><Col id=\"revenue1\">440</Col></Row><Row><Col id=\"category\">10</Col><Col id=\"profit\">1600</Col><Col id=\"cost\">1200</Col><Col id=\"revenue\">5000</Col><Col id=\"profit1\">8989</Col><Col id=\"cost1\">1500</Col><Col id=\"revenue1\">200</Col></Row><Row><Col id=\"category\">11</Col><Col id=\"profit\">650</Col><Col id=\"cost\">550</Col><Col id=\"revenue\">3087</Col><Col id=\"profit1\">2000</Col><Col id=\"cost1\">1500</Col><Col id=\"revenue1\">500</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTempo", this);
            obj._setContents("<ColumnInfo><Column id=\"month\" type=\"STRING\" size=\"256\"/><Column id=\"TVs\" type=\"FLOAT\" size=\"256\"/><Column id=\"SmartPhones\" type=\"FLOAT\" size=\"256\"/><Column id=\"Computers\" type=\"FLOAT\" size=\"256\"/><Column id=\"Printers\" type=\"FLOAT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"month\">Jan</Col><Col id=\"TVs\">85</Col><Col id=\"SmartPhones\">50</Col><Col id=\"Computers\">9</Col><Col id=\"Printers\">16</Col></Row><Row><Col id=\"month\">Feb</Col><Col id=\"TVs\">54</Col><Col id=\"SmartPhones\">76</Col><Col id=\"Computers\">12</Col><Col id=\"Printers\">15</Col></Row><Row><Col id=\"month\">Mar</Col><Col id=\"TVs\">57</Col><Col id=\"SmartPhones\">48</Col><Col id=\"Computers\">15</Col><Col id=\"Printers\">25</Col></Row><Row><Col id=\"month\">Apr</Col><Col id=\"TVs\">55</Col><Col id=\"SmartPhones\">34</Col><Col id=\"Computers\">79</Col><Col id=\"Printers\">17</Col></Row><Row><Col id=\"month\">May</Col><Col id=\"TVs\">120</Col><Col id=\"SmartPhones\">56</Col><Col id=\"Computers\">18</Col><Col id=\"Printers\">10</Col></Row><Row><Col id=\"month\">Jun</Col><Col id=\"TVs\">140</Col><Col id=\"SmartPhones\">34</Col><Col id=\"Computers\">19</Col><Col id=\"Printers\">11</Col></Row><Row><Col id=\"month\">Jul</Col><Col id=\"TVs\">57</Col><Col id=\"SmartPhones\">33</Col><Col id=\"Computers\">8</Col><Col id=\"Printers\">20</Col></Row><Row><Col id=\"month\">Aug</Col><Col id=\"TVs\">61</Col><Col id=\"SmartPhones\">42</Col><Col id=\"Computers\">9</Col><Col id=\"Printers\">22</Col></Row><Row><Col id=\"month\">Sep</Col><Col id=\"TVs\">48</Col><Col id=\"SmartPhones\">35</Col><Col id=\"Computers\">12</Col><Col id=\"Printers\">18</Col></Row><Row><Col id=\"month\">Oct</Col><Col id=\"TVs\">117</Col><Col id=\"SmartPhones\">47</Col><Col id=\"Computers\">11</Col><Col id=\"Printers\">17</Col></Row><Row><Col id=\"month\">Nov</Col><Col id=\"TVs\">110</Col><Col id=\"SmartPhones\">21</Col><Col id=\"Computers\">12</Col><Col id=\"Printers\">21</Col></Row><Row><Col id=\"month\">Dec</Col><Col id=\"TVs\">120</Col><Col id=\"SmartPhones\">34</Col><Col id=\"Computers\">15</Col><Col id=\"Printers\">14</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHighlight", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">0</Col><Col id=\"Column1\">70</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBrowserLanking", this);
            obj._setContents("<ColumnInfo><Column id=\"Browser\" type=\"STRING\" size=\"256\"/><Column id=\"Perr\" type=\"FLOAT\" size=\"256\"/><Column id=\"Use\" type=\"FLOAT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Browser\">Edge</Col><Col id=\"Perr\">22</Col><Col id=\"Use\">60</Col></Row><Row><Col id=\"Browser\">Android</Col><Col id=\"Perr\">20</Col><Col id=\"Use\">5</Col></Row><Row><Col id=\"Browser\">Samsung Internet</Col><Col id=\"Perr\">31</Col><Col id=\"Use\">20</Col></Row><Row><Col id=\"Browser\">IE</Col><Col id=\"Perr\">35</Col><Col id=\"Use\">40</Col></Row><Row><Col id=\"Browser\">Opera</Col><Col id=\"Perr\">38</Col><Col id=\"Use\">30</Col></Row><Row><Col id=\"Browser\">Firefox</Col><Col id=\"Perr\">57</Col><Col id=\"Use\">10</Col></Row><Row><Col id=\"Browser\">UCBrowser</Col><Col id=\"Perr\">80</Col><Col id=\"Use\">9</Col></Row><Row><Col id=\"Browser\">Safari</Col><Col id=\"Perr\">44</Col><Col id=\"Use\">60</Col></Row><Row><Col id=\"Browser\">Chrome</Col><Col id=\"Perr\">55</Col><Col id=\"Use\">20</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRadar", this);
            obj._setContents("<ColumnInfo><Column id=\"catName\" type=\"STRING\" size=\"256\"/><Column id=\"year2010\" type=\"INT\" size=\"256\"/><Column id=\"year2011\" type=\"INT\" size=\"256\"/><Column id=\"year2012\" type=\"INT\" size=\"256\"/><Column id=\"year2013\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"catName\">A</Col><Col id=\"year2010\">140</Col><Col id=\"year2011\">70</Col><Col id=\"year2012\">130</Col><Col id=\"year2013\">170</Col></Row><Row><Col id=\"catName\">B</Col><Col id=\"year2010\">90</Col><Col id=\"year2011\">170</Col><Col id=\"year2012\">150</Col><Col id=\"year2013\">170</Col></Row><Row><Col id=\"catName\">C</Col><Col id=\"year2010\">80</Col><Col id=\"year2011\">80</Col><Col id=\"year2012\">180</Col><Col id=\"year2013\">150</Col></Row><Row><Col id=\"catName\">D</Col><Col id=\"year2010\">100</Col><Col id=\"year2011\">130</Col><Col id=\"year2012\">200</Col><Col id=\"year2013\">210</Col></Row><Row><Col id=\"catName\">E</Col><Col id=\"year2010\">80</Col><Col id=\"year2011\">50</Col><Col id=\"year2012\">100</Col><Col id=\"year2013\">240</Col></Row><Row><Col id=\"catName\">F</Col><Col id=\"year2010\">110</Col><Col id=\"year2011\">50</Col><Col id=\"year2012\">140</Col><Col id=\"year2013\">210</Col></Row><Row><Col id=\"catName\">G</Col><Col id=\"year2010\">160</Col><Col id=\"year2011\">120</Col><Col id=\"year2012\">130</Col><Col id=\"year2013\">200</Col></Row><Row><Col id=\"catName\">H</Col><Col id=\"year2010\">80</Col><Col id=\"year2011\">70</Col><Col id=\"year2012\">165</Col><Col id=\"year2013\">140</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBrowserLanking2", this);
            obj._setContents("<ColumnInfo><Column id=\"Browser\" type=\"STRING\" size=\"256\"/><Column id=\"from\" type=\"FLOAT\" size=\"256\"/><Column id=\"to\" type=\"FLOAT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Browser\">Edge</Col><Col id=\"from\">22</Col><Col id=\"to\">60</Col></Row><Row><Col id=\"Browser\">Android</Col><Col id=\"from\">20</Col><Col id=\"to\">65</Col></Row><Row><Col id=\"Browser\">Samsung Internet</Col><Col id=\"from\">31</Col><Col id=\"to\">35</Col></Row><Row><Col id=\"Browser\">IE</Col><Col id=\"from\">10</Col><Col id=\"to\">40</Col></Row><Row><Col id=\"Browser\">Opera</Col><Col id=\"from\">0</Col><Col id=\"to\">30</Col></Row><Row><Col id=\"Browser\">Firefox</Col><Col id=\"from\">56</Col><Col id=\"to\">10</Col></Row><Row><Col id=\"Browser\">UCBrowser</Col><Col id=\"from\">22</Col><Col id=\"to\">43</Col></Row><Row><Col id=\"Browser\">Safari</Col><Col id=\"from\">12</Col><Col id=\"to\">33</Col></Row><Row><Col id=\"Browser\">Chrome</Col><Col id=\"from\">5</Col><Col id=\"to\">56</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsBrowserLanking3", this);
            obj._setContents("<ColumnInfo><Column id=\"Browser\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"FLOAT\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Browser\">Edge</Col><Col id=\"value\">220</Col></Row><Row><Col id=\"Browser\">IE</Col><Col id=\"value\">890</Col></Row><Row><Col id=\"Browser\">Opera</Col><Col id=\"value\">120</Col></Row><Row><Col id=\"Browser\">Firefox</Col><Col id=\"value\">320</Col></Row><Row><Col id=\"Browser\">Safari</Col><Col id=\"value\">550</Col></Row><Row><Col id=\"Browser\">Chrome</Col><Col id=\"value\">2000</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","0","0",null,"100","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Button("BtnRotate","0","32","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("rotate axis");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("BtnGrouping","BtnRotate:2","32","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("grouping bar");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("BtnStack","BtnGrouping:2","32","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("stack type");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("BtnCategoryRotate","BtnStack:2","32","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("category angle");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("BtnBarType","0","0","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("bar");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("BtnLineType","BtnBarType:2","0","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("line");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("BtnLineAreaType","BtnLineType:2","0","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("area");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("BtnCategoryOpposite","BtnCategoryRotate:2","32","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("category oppo.");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("BtnLineBarType","BtnLineAreaType:2","0","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("line+bar");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("BtnLineAreaBarType","BtnLineBarType:2","0","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("line+area+bar");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("BtnLineShape","BtnCategoryOpposite:2","32","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("line shape");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("BtnPointShape","BtnLineShape:2","32","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_text("point shape");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("BtnLinePointType","BtnLineAreaBarType:2","0","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("line point");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("BtnPointType","BtnLinePointType:2","0","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_text("point");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("BtnOppoAxis","BtnPointShape:1","32","100","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("valuexis oppo.");
            this.Div00.addChild(obj.name, obj);

            obj = new BasicChart("BasicChart00","0","Div00:11",null,"555","20",null,null,null,null,null,this);
            obj.getSetter("taborder").set("1");
            obj.getSetter("categorycolumn").set("bind:name");
            obj.getSetter("binddataset").set("dsRainfall");
            obj.getSetter("onmousemove").set("BasicChart00_onmousemove");
            obj.getSetter("onmouseleave").set("BasicChart00_onmouseleave");
            obj.getSetter("onmouseenter").set("BasicChart00_onmouseenter");
            obj.getSetter("ontitleclick").set("BasicChart00_ontitleclick");
            obj.getSetter("onclick").set("BasicChart00_onclick");
            obj.getSetter("onseriesclick").set("BasicChart00_onseriesclick");
            this.addChild(obj.name, obj);

            obj = new Static("StaDesc","480","430","370","40",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("false");
            obj.set_text("description");
            obj.set_background("lightyellow");
            obj.set_font("normal 700 14pt/normal \"Arial\"");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new PieChart("PieChart00","0","BasicChart00:20","48.57%","480",null,null,null,null,null,null,this);
            obj.getSetter("taborder").set("3");
            obj.getSetter("binddataset").set("dsCountryLitres");
            obj.getSetter("categorycolumn").set("bind:country");
            obj.getSetter("enableanimation").set("true");
            this.addChild(obj.name, obj);

            obj = new BubbleChart("BubbleChart00","PieChart00:20","BasicChart00:20",null,"480","20",null,null,null,null,null,this);
            obj.getSetter("taborder").set("4");
            obj.getSetter("binddataset").set("dsCostProfit");
            obj.getSetter("enableanimation").set("true");
            this.addChild(obj.name, obj);

            obj = new RadarChart("RadarChart00","0","PieChart00:20","48.48%","480",null,null,null,null,null,null,this);
            obj.getSetter("taborder").set("7");
            obj.getSetter("binddataset").set("dsRadar");
            obj.getSetter("categorycolumn").set("bind:catName");
            obj.getSetter("radius").set("80");
            obj.getSetter("enableanimation").set("true");
            this.addChild(obj.name, obj);

            obj = new GaugeChart("GaugeChart02","RadarChart00:20","BubbleChart00:20",null,"480","20",null,null,null,null,null,this);
            obj.getSetter("taborder").set("5");
            obj.getSetter("binddataset").set("dsHighlight");
            obj.getSetter("categorycolumn").set("bind:Column0");
            obj.getSetter("gaugetype").set("circular");
            this.addChild(obj.name, obj);

            obj = new RoseChart("RoseChart00","0","RadarChart00:38","48.57%","480",null,null,null,null,null,null,this);
            obj.getSetter("taborder").set("6");
            obj.getSetter("binddataset").set("dsBrowserLanking");
            obj.getSetter("categorycolumn").set("bind:Browser");
            obj.getSetter("enableanimation").set("true");
            obj.getSetter("rosesize").set("70");
            obj.getSetter("duration").set("500");
            this.addChild(obj.name, obj);

            obj = new FloatChart("FloatChart00","RoseChart00:20","GaugeChart02:20",null,"479","20",null,null,null,null,null,this);
            obj.getSetter("taborder").set("8");
            obj.getSetter("binddataset").set("dsBrowserLanking2");
            obj.getSetter("categorycolumn").set("bind:Browser");
            obj.getSetter("rotateaxis").set("false");
            obj.getSetter("waterfall").set("false");
            this.addChild(obj.name, obj);

            obj = new PyramidChart("PyramidChart00","0","RoseChart00:20","48.57%","480",null,null,null,null,null,null,this);
            obj.getSetter("taborder").set("9");
            obj.getSetter("binddataset").set("dsBrowserLanking3");
            obj.getSetter("categorycolumn").set("bind:value");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Div00.form
            obj = new Layout("default","",0,0,this.Div00.form,function(p){});
            this.Div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1050,746,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleNexacroChart.xfdl", function() {

        this.Div00_BtnBarType_onclick = function(obj,e)
        {
        	var cnt = this.BasicChart00.seriesset.length;
        	for (var i=0;i<cnt;i++)
        	{
        		this.BasicChart00.seriesset[i].set_barvisible(true);
        		this.BasicChart00.seriesset[i].set_linevisible(false);
        		this.BasicChart00.seriesset[i].set_lineareavisible(false);
        		this.BasicChart00.seriesset[i].set_pointvisible(false);
        	}
        };

        this.Div00_BtnLineType_onclick = function(obj,e)
        {
        	var cnt = this.BasicChart00.seriesset.length;
        	for (var i=0;i<cnt;i++)
        	{
        		this.BasicChart00.seriesset[i].set_barvisible(false);
        		this.BasicChart00.seriesset[i].set_linevisible(true);
        		this.BasicChart00.seriesset[i].set_lineareavisible(false);
        		this.BasicChart00.seriesset[i].set_pointvisible(false);
        	}
        };

        this.Div00_BtnLineAreaType_onclick = function(obj,e)
        {
        	var cnt = this.BasicChart00.seriesset.length;
        	for (var i=0;i<cnt;i++)
        	{
        		this.BasicChart00.seriesset[i].set_barvisible(false);
        		this.BasicChart00.seriesset[i].set_linevisible(true);
        		this.BasicChart00.seriesset[i].set_lineareavisible(true);
        		this.BasicChart00.seriesset[i].set_pointvisible(false);
        	}
        };


        this.Div00_BtnLineBarType_onclick = function(obj,e)
        {
        	var cnt = this.BasicChart00.seriesset.length;
        	for (var i=0;i<cnt;i++)
        	{
        		this.BasicChart00.seriesset[i].set_barvisible(i==0 ? false : true);
        		this.BasicChart00.seriesset[i].set_linevisible(i==0 ? true : false);
        		this.BasicChart00.seriesset[i].set_lineareavisible(false);
        		this.BasicChart00.seriesset[i].set_pointvisible(false);
        	}
        };

        this.Div00_BtnLineAreaBarType_onclick = function(obj,e)
        {
        	var cnt = this.BasicChart00.seriesset.length;
        	for (var i=0;i<cnt;i++)
        	{
        		this.BasicChart00.seriesset[i].set_barvisible(i==0 ? false : true);
        		this.BasicChart00.seriesset[i].set_linevisible(i==0 ? true : false);
        		this.BasicChart00.seriesset[i].set_lineareavisible(i==0 ? true : false);
        		this.BasicChart00.seriesset[i].set_pointvisible(false);
        	}
        };

        this.Div00_BtnLinePointType_onclick = function(obj,e)
        {
        	var cnt = this.BasicChart00.seriesset.length;
        	for (var i=0;i<cnt;i++)
        	{
        		this.BasicChart00.seriesset[i].set_barvisible(false);
        		this.BasicChart00.seriesset[i].set_linevisible(true);
        		this.BasicChart00.seriesset[i].set_lineareavisible(false);
        		this.BasicChart00.seriesset[i].set_pointvisible(true);
        	}
        };

        this.Div00_BtnRotate_onclick = function(obj,e)
        {
        	this.BasicChart00.set_rotateaxis(!this.BasicChart00.rotateaxis);
        };

        this.Div00_BtnGrouping_onclick = function(obj,e)
        {
        	this.BasicChart00.set_bargrouping(!this.BasicChart00.bargrouping);
        };

        this.Div00_BtnStack_onclick = function(obj,e)
        {
        	var type = this.BasicChart00.stacktype;
        	switch (type)
        	{
        	case "none":
        		this.BasicChart00.set_stacktype("normal");
        	break;
        	case "normal":
        		this.BasicChart00.set_stacktype("percent");
        	break;
        	case "percent":
        		this.BasicChart00.set_stacktype("none");
        	break;
        	}

        };

        this.Div00_BtnCategoryRotate_onclick = function(obj,e)
        {
        	var angle = this.BasicChart00.categoryaxis.labelrotate | 0;
        	angle -= 15;
        	this.BasicChart00.categoryaxis.set_labelrotate(angle);
        };

        this.Div00_BtnCategoryOpposite_onclick = function(obj,e)
        {
        	this.BasicChart00.categoryaxis.set_opposite(!this.BasicChart00.categoryaxis.opposite);
        };

        this.Div00_BtnLineShape_onclick = function(obj,e)
        {
        	var cnt = this.BasicChart00.seriesset.length;
        	for (var i=0;i<cnt;i++)
        	{
        		if ( this.BasicChart00.seriesset[i].linevisible)
        		{
        			var type = this.BasicChart00.seriesset[i].linetype;
        			switch (type)
        			{
        				case "":
        				case "segment":
        					this.BasicChart00.seriesset[i].set_linetype("step");
        					break;

        				case "step":
        					this.BasicChart00.seriesset[i].set_linetype("curve");
        					break;

        				case "curve":
        					this.BasicChart00.seriesset[i].set_linetype("segment");
        					break;
        			}
        		}
        	}
        };

        var shape_pos = 0, same_shape = true;
        this.Div00_BtnPointShape_onclick = function(obj,e)
        {
        	shape_pos++;

        	var cnt = this.BasicChart00.seriesset.length;
        	if (same_shape && shape_pos >= 5 || !same_shape && shape_pos >= (6-cnt))
        	{
        		shape_pos = 0; same_shape = !same_shape;
        	}

        	var shapeset = ["circle", "square", "diamond", "triangle", "cross"];
        	var cnt = this.BasicChart00.seriesset.length;
        	for (var i=0;i<cnt;i++)
        	{
        		if (same_shape)
        		{
        			this.BasicChart00.seriesset[i].set_pointshape(shapeset[shape_pos]);
        		}
        		else
        		{
        			this.BasicChart00.seriesset[i].set_pointshape(shapeset[shape_pos + i]);
        		}
        	}

        };

        this.Div00_BtnPointType_onclick = function(obj,e)
        {
        	var cnt = this.BasicChart00.seriesset.length;
        	for (var i=0;i<cnt;i++)
        	{
        		this.BasicChart00.seriesset[i].set_barvisible(false);
        		this.BasicChart00.seriesset[i].set_linevisible(false);
        		this.BasicChart00.seriesset[i].set_lineareavisible(false);
        		this.BasicChart00.seriesset[i].set_pointvisible(true);
        	}
        };

        this.Div00_BtnOppoAxis_onclick = function(obj,e)
        {
        	var cnt = this.BasicChart00.valueaxes.length;
        	for (var i=0;i<cnt;i++)
        	{
        		var val = this.BasicChart00.valueaxes[i].opposite;
        		this.BasicChart00.valueaxes[i].set_opposite(!val);
        	}
        };


        this.BasicChart00_onmousemove = function(obj,e)
        {
        	var refobj = e.fromreferenceobject || obj;

        	this.StaDesc.set_text(refobj._type_name);

        	if (!this.StaDesc.visible)
        	{
        		this.StaDesc.set_visible(true);
        	}
        	this.StaDesc.move(obj.getOffsetLeft() + e.canvasx + 10, obj.getOffsetTop() + e.canvasy + 10);
        };

        this.BasicChart00_onmouseleave = function(obj,e)
        {
        	if (e.fromreferenceobject == obj)
        		this.StaDesc.set_visible(false);
        };

        this.BasicChart00_onmouseenter = function(obj,e)
        {
        	if (e.fromreferenceobject == obj)
        		this.StaDesc.set_visible(true);
        };

        this.BasicChart00_onclick = function(obj,e)
        {
        	this.alert("타이틀 클릭 이벤트!");
        };

        this.BasicChart00_onseriesclick = function(obj,e)
        {
        	this.alert("시리즈 클릭 이벤트 >>>  아이템인덱스 : " + e.itemindex
        				+ ", 시리즈인덱스 : " + e.seriesindex
        				+ ", 시리즈 수치 : " + e.value
        				+ ", 시리즈 명 : " + obj.seriesset[e.seriesindex].id);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.BtnRotate.addEventHandler("onclick",this.Div00_BtnRotate_onclick,this);
            this.Div00.form.BtnGrouping.addEventHandler("onclick",this.Div00_BtnGrouping_onclick,this);
            this.Div00.form.BtnStack.addEventHandler("onclick",this.Div00_BtnStack_onclick,this);
            this.Div00.form.BtnCategoryRotate.addEventHandler("onclick",this.Div00_BtnCategoryRotate_onclick,this);
            this.Div00.form.BtnBarType.addEventHandler("onclick",this.Div00_BtnBarType_onclick,this);
            this.Div00.form.BtnLineType.addEventHandler("onclick",this.Div00_BtnLineType_onclick,this);
            this.Div00.form.BtnLineAreaType.addEventHandler("onclick",this.Div00_BtnLineAreaType_onclick,this);
            this.Div00.form.BtnCategoryOpposite.addEventHandler("onclick",this.Div00_BtnCategoryOpposite_onclick,this);
            this.Div00.form.BtnLineBarType.addEventHandler("onclick",this.Div00_BtnLineBarType_onclick,this);
            this.Div00.form.BtnLineAreaBarType.addEventHandler("onclick",this.Div00_BtnLineAreaBarType_onclick,this);
            this.Div00.form.BtnLineShape.addEventHandler("onclick",this.Div00_BtnLineShape_onclick,this);
            this.Div00.form.BtnPointShape.addEventHandler("onclick",this.Div00_BtnPointShape_onclick,this);
            this.Div00.form.BtnLinePointType.addEventHandler("onclick",this.Div00_BtnLinePointType_onclick,this);
            this.Div00.form.BtnPointType.addEventHandler("onclick",this.Div00_BtnPointType_onclick,this);
            this.Div00.form.BtnOppoAxis.addEventHandler("onclick",this.Div00_BtnOppoAxis_onclick,this);
        };
        this.loadIncludeScript("sampleNexacroChart.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
