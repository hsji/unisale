(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleWeather");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new DataObject("doj00", this);
            this.addChild(obj.name, obj);


            obj = new Dataset("ds00", this);
            obj.set_binddataobject("doj00");
            obj._setContents("<ColumnInfo><Column id=\"items\" datapath=\"$.response.body.items\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn00","60","44","286","85",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("btn00");
            this.addChild(obj.name, obj);

            obj = new Button("btn01","406","44","243","89",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("btn01");
            this.addChild(obj.name, obj);

            obj = new Button("btn02","149","163","269","101",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("btn02");
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
        this.registerScript("sampleWeather.xfdl", function() {

        this.btn00_onclick = function(obj,e)
        {
        	// %2BPFsFevzZecsv9GbHbbEWjG%2BokFVEdgTEQfibhhDDlUrb2XPyRFDXmeTRei5i%2FRPuDKr%2FVCDX7NhdxwDWhZLeQ%3D%3D
        	// +PFsFevzZecsv9GbHbbEWjG+okFVEdgTEQfibhhDDlUrb2XPyRFDXmeTRei5i/RPuDKr/VCDX7NhdxwDWhZLeQ==
        	// https://www.data.go.kr/data/15059468/openapi.do
        	var time = this.gfnGetDate("date");
        	console.log(time);
        	var sKey = "%2BPFsFevzZecsv9GbHbbEWjG%2BokFVEdgTEQfibhhDDlUrb2XPyRFDXmeTRei5i%2FRPuDKr%2FVCDX7NhdxwDWhZLeQ%3D%3D";
        	var xhr = new XMLHttpRequest();
        	var url = 'http://apis.data.go.kr/1360000/MidFcstInfoService/getMidFcst'; /*URL*/
        	var queryParams = '?' + encodeURIComponent('serviceKey') + '='+sKey; /*Service Key*/
        	queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
        	queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
        	queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('JSON'); /**/
        	queryParams += '&' + encodeURIComponent('stnId') + '=' + encodeURIComponent('108'); /**/
        	queryParams += '&' + encodeURIComponent('tmFc') + '=' + encodeURIComponent(time + '0600'); /**/
        	xhr.open('GET', url + queryParams);
        	xhr.onreadystatechange = function () {
        		if (this.readyState == 4) {
        			console.log(this.status,this.getAllResponseHeaders(),this.responseText);
        		}
        	};

        	xhr.send('');
        };

        this.btn01_onclick = function(obj,e)
        {
        	//0200, 0500, 0800, 1100, 1400, 1700, 2000, 2300

        	var date = this.gfnGetDate("date");
        	var time = this.gfnGetDate("timeform2");
        // %2BPFsFevzZecsv9GbHbbEWjG%2BokFVEdgTEQfibhhDDlUrb2XPyRFDXmeTRei5i%2FRPuDKr%2FVCDX7NhdxwDWhZLeQ%3D%3D
        // +PFsFevzZecsv9GbHbbEWjG+okFVEdgTEQfibhhDDlUrb2XPyRFDXmeTRei5i/RPuDKr/VCDX7NhdxwDWhZLeQ==
        	var sKey = "%2BPFsFevzZecsv9GbHbbEWjG%2BokFVEdgTEQfibhhDDlUrb2XPyRFDXmeTRei5i%2FRPuDKr%2FVCDX7NhdxwDWhZLeQ%3D%3D";
        	var xhr = new XMLHttpRequest();
        	//var url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst'; /*URL*/
        	var url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst'; /*URL*/
        	//var url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getFcstVersion'; /*URL*/
        	var queryParams = '?' + encodeURIComponent('serviceKey') + '='+sKey; /*Service Key*/
        	queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
        	queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('100'); /**/
        	queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('JSON'); /**/
        	//queryParams += '&' + encodeURIComponent('ftype') + '=' + encodeURIComponent('SHRT'); /**/
        	queryParams += '&' + encodeURIComponent('base_date') + '=' + encodeURIComponent(date); /**/
        	queryParams += '&' + encodeURIComponent('base_time') + '=' + encodeURIComponent("1600"/*time.substr(0,2) + "30"*/); /**/
        	//queryParams += '&' + encodeURIComponent('basedatetime') + '=' + encodeURIComponent(date + time.substr(0,2) + "00"); /**/

        	queryParams += '&' + encodeURIComponent('nx') + '=55';// + encodeURIComponent('37'); /**/
        	queryParams += '&' + encodeURIComponent('ny') + '=127';// + encodeURIComponent('127'); /**/
        	xhr.open('GET', url + queryParams);
        	xhr.onreadystatechange = function () {
        		if (this.readyState == 4) {
        			//console.log(this.status,this.getAllResponseHeaders(),this.responseText);
        			console.log(this.responseText);
        		}
        	};

        	xhr.send('');
        };

        this.btn02_onclick = function(obj,e)
        {
        	var date = this.gfnGetDate("date");
        	var time = this.gfnGetDate("timeform2");
        // %2BPFsFevzZecsv9GbHbbEWjG%2BokFVEdgTEQfibhhDDlUrb2XPyRFDXmeTRei5i%2FRPuDKr%2FVCDX7NhdxwDWhZLeQ%3D%3D
        // +PFsFevzZecsv9GbHbbEWjG+okFVEdgTEQfibhhDDlUrb2XPyRFDXmeTRei5i/RPuDKr/VCDX7NhdxwDWhZLeQ==
        	var sKey = "%2BPFsFevzZecsv9GbHbbEWjG%2BokFVEdgTEQfibhhDDlUrb2XPyRFDXmeTRei5i%2FRPuDKr%2FVCDX7NhdxwDWhZLeQ%3D%3D";
        	var xhr = new XMLHttpRequest();
        	//var url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst'; /*URL*/
        	var url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst'; /*URL*/
        	//var url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getFcstVersion'; /*URL*/
        	var queryParams = '?' + encodeURIComponent('serviceKey') + '='+sKey; /*Service Key*/
        	queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
        	queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('100'); /**/
        	queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('JSON'); /**/
        	//queryParams += '&' + encodeURIComponent('ftype') + '=' + encodeURIComponent('SHRT'); /**/
        	queryParams += '&' + encodeURIComponent('base_date') + '=' + encodeURIComponent(date); /**/
        	queryParams += '&' + encodeURIComponent('base_time') + '=' + encodeURIComponent("1600"/*time.substr(0,2) + "30"*/); /**/
        	//queryParams += '&' + encodeURIComponent('basedatetime') + '=' + encodeURIComponent(date + time.substr(0,2) + "00"); /**/

        	queryParams += '&' + encodeURIComponent('nx') + '=55';// + encodeURIComponent('37'); /**/
        	queryParams += '&' + encodeURIComponent('ny') + '=127';// + encodeURIComponent('127'); /**/

        	var objReqData = {
        		"serviceid" : "weather",
        		"dataobject" : this.doj00,
        		"method" : "GET",
        		"requesturl" : url + queryParams,
        	};
        	this.gfnRequestDataObject(this, objReqData, this.fnCb);
        };

        this.fnCb = function(serviceid, code, objResolve) {
        	console.log(serviceid, code, objResolve);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.btn01.addEventHandler("onclick",this.btn01_onclick,this);
            this.btn02.addEventHandler("onclick",this.btn02_onclick,this);
        };
        this.loadIncludeScript("sampleWeather.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
