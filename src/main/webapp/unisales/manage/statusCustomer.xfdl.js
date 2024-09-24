(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("statusCustomer");
            this.set_titletext("MainFrame");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,990);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsParam1", this);
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"START_MM\" type=\"STRING\" size=\"256\"/><Column id=\"END_MM\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_YEAR2\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"CONTRACT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRICE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput1", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"DEPT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CD_CODE\" type=\"string\" size=\"20\"/><Column id=\"CAPTION\" type=\"string\" size=\"100\"/><Column id=\"BUSINESS_TYPE\" type=\"string\" size=\"20\"/><Column id=\"GOAL\" type=\"bigdecimal\" size=\"20\"/><Column id=\"RESULT\" type=\"bigdecimal\" size=\"20\"/><Column id=\"GOAL_Y\" type=\"bigdecimal\" size=\"20\"/><Column id=\"RESULT_Y\" type=\"bigdecimal\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCustomer", this);
            obj._setContents("<ColumnInfo><Column id=\"CLIENT_CODE\" type=\"string\" size=\"20\"/><Column id=\"CLIENT_NAME\" type=\"string\" size=\"100\"/><Column id=\"PROJECT_CODE\" type=\"string\" size=\"15\"/><Column id=\"PROJECT_NAME\" type=\"string\" size=\"100\"/><Column id=\"EMP_NAME\" type=\"string\" size=\"255\"/><Column id=\"CONTRACT_PRICE\" type=\"bigdecimal\" size=\"20\"/><Column id=\"SUM_CONTRACT_PRICE\" type=\"bigdecimal\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPart", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGlobal", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"string\" size=\"60\"/><Column id=\"EMP_NM\" type=\"string\" size=\"100\"/><Column id=\"DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"DEPT_NM\" type=\"string\" size=\"100\"/><Column id=\"EMAIL\" type=\"string\" size=\"268\"/><Column id=\"MOBILE\" type=\"string\" size=\"44\"/><Column id=\"OFFICE\" type=\"string\" size=\"20\"/><Column id=\"GRADE_CD\" type=\"string\" size=\"30\"/><Column id=\"GRADE_NM\" type=\"string\" size=\"100\"/><Column id=\"DUTY_CD\" type=\"string\" size=\"30\"/><Column id=\"DUTY_NM\" type=\"string\" size=\"100\"/><Column id=\"EMP_KIND\" type=\"string\" size=\"255\"/><Column id=\"CO_CD\" type=\"string\" size=\"30\"/><Column id=\"CO_NM\" type=\"string\" size=\"100\"/><Column id=\"LOGIN_SYS\" type=\"string\" size=\"10\"/><Column id=\"LANGUAGE\" type=\"string\" size=\"10\"/><Column id=\"MODEL_ID\" type=\"string\" size=\"50\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divDisk",null,"39","393","321","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_MF_part");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS_disk1","7","17","123","136",null,null,null,null,null,null,this.divDisk.form);
            obj.set_taborder("0");
            obj.set_text("ChartJS00");
            this.divDisk.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS_disk2","ChartJS_disk1:4","17","123","136",null,null,null,null,null,null,this.divDisk.form);
            obj.set_taborder("1");
            obj.set_text("ChartJS00");
            this.divDisk.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS_disk3","ChartJS_disk2:4","17","123","136",null,null,null,null,null,null,this.divDisk.form);
            obj.set_taborder("2");
            obj.set_text("ChartJS00");
            this.divDisk.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS_disk4","7","171","123","136",null,null,null,null,null,null,this.divDisk.form);
            obj.set_taborder("3");
            obj.set_text("ChartJS00");
            this.divDisk.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS_disk5","ChartJS_disk4:4","171","123","136",null,null,null,null,null,null,this.divDisk.form);
            obj.set_taborder("4");
            obj.set_text("ChartJS00");
            this.divDisk.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS_disk6","ChartJS_disk5:4","171","123","136",null,null,null,null,null,null,this.divDisk.form);
            obj.set_taborder("5");
            obj.set_text("ChartJS00");
            this.divDisk.addChild(obj.name, obj);

            obj = new Static("sta00_01_00",null,"7","393","30","10",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("매출 상위 6개사 비중");
            obj.set_cssclass("sta_WF_SchLabel");
            this.addChild(obj.name, obj);

            obj = new Div("divAlert","10","9",null,"351","410",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_MF_part");
            this.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS_node","10","42",null,null,"10","10",null,null,null,null,this.divAlert.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divAlert.addChild(obj.name, obj);

            obj = new Static("sta00_01_00","0","0",null,"30","0",null,null,null,null,null,this.divAlert.form);
            obj.set_taborder("1");
            obj.set_text("고객사별 매출 현황");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divAlert.addChild(obj.name, obj);

            obj = new Div("divAlert00","10","365","48.58%","285",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_MF_part");
            this.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS_node","10","42",null,null,"10","10",null,null,null,null,this.divAlert00.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divAlert00.addChild(obj.name, obj);

            obj = new Static("sta00_01_00","0","-2",null,"30","0",null,null,null,null,null,this.divAlert00.form);
            obj.set_taborder("1");
            obj.set_text("업종별 매출 현황");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divAlert00.addChild(obj.name, obj);

            obj = new Div("divAlert00_00","50.58%","365","48.58%","285",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("div_MF_part");
            this.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS_node","10","42",null,null,"10","10",null,null,null,null,this.divAlert00_00.form);
            obj.set_taborder("0");
            obj.set_text("");
            this.divAlert00_00.addChild(obj.name, obj);

            obj = new Static("sta00_01_00","0","-2",null,"30","0",null,null,null,null,null,this.divAlert00_00.form);
            obj.set_taborder("1");
            obj.set_text("업종별 수주 건수");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divAlert00_00.addChild(obj.name, obj);

            obj = new Div("div00","10","657",null,"353","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("div_MF_part");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_02_00_00","0","0",null,"34","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("고객사별 매출 현황");
            obj.set_cssclass("sta_WF_SchLabel");
            this.div00.addChild(obj.name, obj);

            obj = new Grid("grd00","10","41",null,null,"10","10",null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_cellsizingtype("col");
            obj.set_binddataset("dsCustomer");
            obj.set_autofittype("col");
            obj.getSetter("usecustomexpr").set("false");
            obj.set_nodataimage("url(\'theme://images/grd_NODATA.png\')");
            obj.set_cssclass("grd_WF_selected");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"239\"/><Column size=\"227\"/><Column size=\"338\"/><Column size=\"227\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Customer\" cssclass=\"grd_MF_roundL\"/><Cell col=\"1\" text=\"고객사 매출액\"/><Cell col=\"2\" text=\"Project Name\"/><Cell col=\"3\" text=\"매출액\" cssclass=\"grd_MF_roundR\"/></Band><Band id=\"body\"><Cell text=\"bind:CLIENT_NAME\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:SUM_CONTRACT_PRICE\" displaytype=\"number\" combodataset=\"gdsType\" combocodecol=\"code\" combodatacol=\"name\" textAlign=\"right\" suppress=\"2\"/><Cell col=\"2\" displaytype=\"normal\" combodataset=\"gdsStatus\" combocodecol=\"code\" combodatacol=\"name\" textAlign=\"center\" text=\"bind:PROJECT_NAME\"/><Cell col=\"3\" text=\"bind:CONTRACT_PRICE\" textAlign=\"right\" displaytype=\"number\" progressbarsmooth=\"true\"/></Band></Format></Formats>");
            this.div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divDisk.form
            obj = new Layout("default","",0,0,this.divDisk.form,function(p){});
            this.divDisk.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAlert.form
            obj = new Layout("default","",0,0,this.divAlert.form,function(p){});
            this.divAlert.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAlert00.form
            obj = new Layout("default","",0,0,this.divAlert00.form,function(p){});
            this.divAlert00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAlert00_00.form
            obj = new Layout("default","",0,0,this.divAlert00_00.form,function(p){});
            this.divAlert00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1200,990,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("statusCustomer.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	statusVM1.xfdl
        *  @Creator
        *  @CreateDate
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************

        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj);
        	this.fnGetData();	// onsize에서 처리됨.

        };

        // 전체 DATA 가져오기
        this.fnGetData = function()
        {
        	if(this.fvexportstart) return;

        	this.fnGetGoal();

        	this.fnGetPart();
        };


        //max size 변경
        this.form_onsize = function(obj,e)
        {

        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        // 고객사별
        this.fnGetCustomer = function()
        {

        	var year = this.gfnGetDate("year");
        	var preyear = (parseInt(year) - 1) + "";
        	var preyear2 = (parseInt(year) - 2) + "";
        	this.dsParam1.setColumn(0, "YEAR", year);
        	this.dsParam1.setColumn(0, "PRE_YEAR", preyear);
        	this.dsParam1.setColumn(0, "START_MM", "01");
        	this.dsParam1.setColumn(0, "END_MM", "12");
        	//this.dsParam1.setColumn(0, "BUSINESS_TYPE", "U");
        	this.dsParam1.setColumn(0, "BUSINESS_TYPE", null);
        	this.dsParam1.setColumn(0, "PRE_YEAR2", preyear2);

        	this.dsParam1.setColumn(0, "PRICE", "10000000");

        	var strSvcId 	= "customer";
        	var strSvcUrl 	= "nextService.do";
        	var inData 		= "dsGlobal=dsGlobal:A dsParam=dsParam1:A";
        	var outData 	= "dsCustomer=dsOutput";
        	var strArg 		= "jobCode=" + nexacro.wrapQuote("next");
        	strArg 			+= " trxCode=" + nexacro.wrapQuote("customer");
        	strArg 			+= " trxUrl=" + nexacro.wrapQuote("FrontControllerServlet.do?service=xupservice&domain=NEXTp&model=SR_SalesResultAnalysis_S06&format=xml&version=xplatform&compress=false");
        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, "fnCallback");

        };

        this.fnGetGoal = function()
        {
        	this.gfnInitNextGlobalDataset(this.dsGlobal);

        	var year = this.gfnGetDate("year");
        	var preyear = (parseInt(year) - 1) + "";
        	var preyear2 = (parseInt(year) - 2) + "";
        	this.dsParam1.setColumn(0, "YEAR", year);
        	this.dsParam1.setColumn(0, "PRE_YEAR", preyear);
        	this.dsParam1.setColumn(0, "START_MM", "01");
        	this.dsParam1.setColumn(0, "END_MM", "12");
        	//this.dsParam1.setColumn(0, "BUSINESS_TYPE", "U");
        	this.dsParam1.setColumn(0, "BUSINESS_TYPE", null);
        	this.dsParam1.setColumn(0, "PRE_YEAR2", preyear2);

        	var strSvcId 	= "goal";
        	var strSvcUrl 	= "nextService.do";
        	var inData 		= "dsGlobal=dsGlobal:A dsParam=dsParam1:A";
        	var outData 	= "dsOutput1=dsOutput";
        	var strArg 		= "jobCode=" + nexacro.wrapQuote("next");
        	strArg 			+= " trxCode=" + nexacro.wrapQuote("goal");
        	strArg 			+= " trxUrl=" + nexacro.wrapQuote("FrontControllerServlet.do?service=xupservice&domain=NEXTp&model=SR_SalesResultAnalysis_S01&format=xml&version=xplatform&compress=false");
        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, "fnCallback");
        };

        // 업종별
        this.fnGetPart = function()
        {
        	var strSvcId 	= "part";
        	var strSvcUrl 	= "nextService.do";
        	var inData 		= "dsGlobal=dsGlobal:A dsParam=dsParam1:A";
        	var outData 	= "dsPart=dsOutput";
        	var strArg 		= "jobCode=" + nexacro.wrapQuote("next");
        	strArg 			+= " trxCode=" + nexacro.wrapQuote("part");
        	strArg 			+= " trxUrl=" + nexacro.wrapQuote("FrontControllerServlet.do?service=xupservice&domain=NEXTp&model=SR_SalesResultAnalysis_S04&format=xml&version=xplatform&compress=false");
        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, "fnCallback");

        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //transaction
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg, oJson)
        {
        	switch(sSvcId) {
        		case "goal":
        			this.fnGetCustomer();
        			break;
        		case "customer":
        			this.fnCustomerChart();
        			break;
        		case "part":
        			this.fnPartChart();
        			this.fnPartChart2();
        			break;
        		default:
        			break;
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        // Topolog 상태

        this.fnCustomerChart = function ()
        {
        	var sum  = this.dsOutput1.getSum("RESULT_Y");
        	this.dsCustomer.set_keystring("S:-SUM_CONTRACT_PRICE");

        	var chart = this.divAlert.form.ChartJS_node;
        	var canvas = chart.getCanvas();
        	var cvs = canvas.id;
        	DxChart.reset(canvas);

        	var nH = chart.getOffsetHeight() - 60;

        	var chartdatas 	= [];
        	var labels 		= [];
        	var labelaboves 		= [];
        	var tooltips 	= [];
        	var nMax = 0;
        	var tooltipstr = "";
        	var nPct;
        	var SUM_CONTRACT_PRICE,CONTRACT_PRICE,PROJECT_NAME,CLIENT_NAME;
        	var len = this.dsCustomer.rowcount;
        	if(len>10) len = 10;
        	var svCLIENT_NAME = "";
        	var nCnt = 0;
        	for(var i=0;i<len; i++) {
        		SUM_CONTRACT_PRICE = this.dsCustomer.getColumn(i, "SUM_CONTRACT_PRICE");
        		CONTRACT_PRICE = this.dsCustomer.getColumn(i, "CONTRACT_PRICE");
        		PROJECT_NAME   = this.dsCustomer.getColumn(i, "PROJECT_NAME");
        		CLIENT_NAME	   = this.dsCustomer.getColumn(i, "CLIENT_NAME");
        		if(svCLIENT_NAME == CLIENT_NAME) continue;

        		if(!SUM_CONTRACT_PRICE) this.dsCustomer.setColumn(i, "SUM_CONTRACT_PRICE", 0);
        		if(!CONTRACT_PRICE) this.dsCustomer.setColumn(i, "CONTRACT_PRICE", 0);

        		SUM_CONTRACT_PRICE = (!SUM_CONTRACT_PRICE?0:SUM_CONTRACT_PRICE.valueOf());
        		CONTRACT_PRICE 	= (!CONTRACT_PRICE?0:CONTRACT_PRICE.valueOf());

        		chartdatas.push(SUM_CONTRACT_PRICE.formatWon());

        		nPct = nexacro.toNumber((SUM_CONTRACT_PRICE / sum).toFixed(2)) * 100;

        		labelaboves.push(SUM_CONTRACT_PRICE.formatWon() + "억");
        		labels.push(CLIENT_NAME);
        		tooltipstr = '<span style="font-size: 12pt;">' + CLIENT_NAME + '</span>%{key}';
        		tooltips.push(tooltipstr);
        		nMax = Math.max(nMax, SUM_CONTRACT_PRICE.formatWon());

        		if(nCnt < 6) {

        			this.fnCustomerUsageChart(nCnt, CLIENT_NAME, nPct);
        		}
        		nCnt++;
        		svCLIENT_NAME = CLIENT_NAME;
        	}
        	this.dsCustomer.set_enableevent(true);
        	var nOneGap = (nH / labels.length) * 0.2;
        	nMax = nMax + 1.0;
        	var year = this.gfnGetDate("year");
        	var preyear = (parseInt(year) - 1) + "";
        	//var colors = this.gfnChartSeriesColorArrayNew();
        	var param = {
        					labelsAbove : true,
        					labelsAboveFontStyle : '8px noto',
        					labelsAboveSpecific : labelaboves,
        					labelsAboveColor : this.gfnChartColor("axislabel"),
        					marginLeft:            120,
        					marginRight:           35,
        					marginTop:             30,
        					marginBottom:          35,
        					marginLeftAuto:        true,
        					keyPositionX : 			chart.getOffsetWidth() - 230,
        				    yaxisLabels: 			labels,
        					xaxisScaleMax : 		nMax,
        					marginInner: 			nOneGap,
        					tooltipsData : 			tooltips,
        					//key: 					[year+"년", preyear+"년"],
        					//colors: 				colors,
        					colorsSequential : true,
        					//tooltipsFormattedKeyLabels: [year+"년 : ", preyear+"년 : "],
        					tooltipsFormattedUnitsPost : '억'
        					//tooltipsFormattedKeyColors: colors
        				};
        	var options = this.gfnGetRChartOption("hbar", "dual", param);
            var hbar = new DxChartHBar({
                    id: cvs,
        			elem : canvas,
                    data: chartdatas,
                    options: options
                });
        	hbar.draw();
        	console.log("@@@@2", 1);

        	this.dsCustomer.set_keystring("S:-SUM_CONTRACT_PRICE+CLIENT_NAME");
        };


        /**
         * DISK USAGE TOP6
          * @return N/A
         */
        this.fnCustomerUsageChart = function(nCnt, sName, nPct) {
        	var oChart = this.divDisk.form["ChartJS_disk" + (nCnt+1)];
        	var nHeight = this.divDisk.form.ChartJS_disk1.getOffsetHeight();
        	var titleColor = "#c9c9c9";//this.gfnChartColor("titlecenter");
        	var color2 = "#505156";

        	var arrColors = ["radial-gradient(#e53c78:#ec4c7e:#f35f8a)",
        					 "radial-gradient(#aa2fd7:#b643e0:#c55beb)",
        					 "radial-gradient(#2c33d6:#3c4ae0:#4f5feb)",
        					 "radial-gradient(#21dd53:#32ec66:#47f379)",
        					 "radial-gradient(#dd8624:#e69733:#f0a848)",
        					 "radial-gradient(#d5501e:#e76630:#f37c47)"];
        	var canvas = oChart.getCanvas();
        	var cvs = canvas.id;
        	DxChart.reset(canvas);
        	var param = {
        						marginLeft:    0,
        						marginRight:   0,
        						marginTop:     0,
        						marginBottom:  25,
        		donutWidth: 20
        	};
        	var option1 = this.gfnGetRChartOption("piesvg", "usage1", param);
        	var param2 = {
        						marginLeft:    0,
        						marginRight:   0,
        						marginTop:     0,
        						marginBottom:  25,
        						colors: [arrColors[nCnt], color2],
        						donutWidth: 20,
        						textFontStyle : '10px noto'
        	};
        	var option2 = this.gfnGetRChartOption("piesvg", "usage2", param2);
        	var  pie1 = new DxChartPie({
        			id: cvs,
        			elem : canvas,
        			data: [100,100],
        			options: option1
        		}).draw();

        	var  pie2 = new DxChartPie({
        			id: cvs,
        			elem : canvas,
        			data: [nPct, (100-nPct)],
        			options: option2
        		});
        		pie2.draw();
        		DxChart.text({
        			object: pie2,
        			text:   nPct + "%",
        			x:      pie2.centerx,
        			y:      pie2.centery,
        			halign: 'center',
        			valign: 'center',
        			size:   12,
        			bold:   true,
        			color:  titleColor
        		});
        // 		RGraph.SVG.text({
        // 			object: pie2,
        // 			parent: pie2.svg.all,
        // 			text:   "[" + nTotCnt + "GB]",
        // 			x:      pie2.centerx,
        // 			y:      nHeight - 50,
        // 			halign: 'center',
        // 			valign: 'center',
        // 			size:   10,
        // 			bold:   true,
        // 			color:  titleColor
        // 		});
        		// Add the smaller text label that sits under the main percentage label.
        		if(sName.length>10) sName = sName.substr(0,8) + "..";
        		DxChart.text({
        			object: pie2,
        			text:   sName,
        			x:      pie2.centerx,
        			y:      nHeight - 20,
        			halign: 'center',
        			valign: 'top',
        			size:   10,
        			bold:   true,
        			color:  titleColor
        		});
        };

        this.fnPartChart = function ()
        {
        	var nTotalAmount = this.dsPart.getSum("AMOUNT_SUM");
        	this.dsPart.set_keystring("S:-AMOUNT_SUM");

        	var chart = this.divAlert00.form.ChartJS_node;
        	var canvas = chart.getCanvas();
        	var cvs = canvas.id;
        	DxChart.reset(canvas);

        	var datas = [];
        	var labels = [];
        	var nMax = 0;
        	var nTotal = 0;
        	var tooltips = [];
        	var name, usage;
        	for(var i=0,len=this.dsPart.rowcount; i<len; i++) {
        		nTotal = this.dsPart.getColumn(i, "AMOUNT_SUM").valueOf();
        		name = this.dsPart.getColumn(i, "CAPTION");
        		labels.push(name);
        		datas.push(nTotal.formatWon());
        		nMax = Math.max(nMax, nTotal.formatWon());
        		tooltips.push('<span style="font-size: 11pt;">' + name + '</span>%{key}');
        	}
        	nMax = nMax + 5;

        	var nH = chart.getOffsetHeight() - 60;
        	var nOneGap = (nH / labels.length) * 0.3;

        	//var colors = this.gfnChartSeriesColorArrayNew();
        	//var colors = ["#3594de", "#fbe815"];
        	//colors = ["#fbdd15","#fbdd15","#fbdd15","#fbdd15","#fbdd15","#fbdd15","#fbdd15","#fbdd15","#fbdd15","#fbdd15"];

            var hbar = new DxChartHBar({
                    id: cvs,
        			elem : canvas,
                    data: datas,
                    options: {
        			textFontStyle : '9px noto',
        			textColor : this.gfnChartColor("axis"),
                    marginRight:           35,
                    marginTop:             35,
                    marginBottom:          35,
        			colorsSequential : true,
        			backgroundGridColor : '#57585E',
                        yaxisLabels: labels,
        				xaxisScaleMax : nMax,
        				//keyLabelsColor : '#ffffff',
                        //marginLeftAuto: true,
                        marginInner: nOneGap,
                        backgroundGridHlines: false,
                        backgroundGridBorder: false,
                        backgroundGridVlinesCount: 5,
                        xaxis: false,
                        yaxis: false,
                        //colors: colors,
                        xaxisLabelsCount: 5,
                        //xaxisScaleDecimals: 1,
                        xaxisTitle: '',
                        xaxisTitleColor: '',
        				//tooltips : tooltip,
        				tooltipsData: tooltips,	/*'<b>%{prop:xaxisLabels[%{dataset}]}</b> %{key} ',*/
        				tooltipsPointer: true,
        				tooltipsEvent: 'mousemove',
        				tooltipsFormattedUnitsPost : "억",
                        //tooltipsFormattedKeyColors: colors,
                        tooltipsPointer: true,
        				xaxisScaleZerostart : false,
                        //tooltipsPositionStatic: true,
        			tooltipsCss: {
        				fontSize: '10pt'
        			}
        //                 tooltipsCss: {
        //                     backgroundColor: this.gfnChartColor("tooltipbg"),
        //                     color: this.gfnChartColor("tooltiptext")
        //                 }
                    }
                });
        	hbar.draw();
        };

        // 귀차나 반복..
        this.fnPartChart2 = function ()
        {
        	var nTotalAmount = this.dsPart.getSum("AMOUNT_CNT");
        	this.dsPart.set_keystring("S:-AMOUNT_CNT");

        	var chart = this.divAlert00_00.form.ChartJS_node;
        	var canvas = chart.getCanvas();
        	var cvs = canvas.id;
        	DxChart.reset(canvas);

        	var datas = [];
        	var labels = [];
        	var nMax = 0;
        	var nTotal = 0;
        	var tooltips = [];
        	var name, usage;
        	for(var i=0,len=this.dsPart.rowcount; i<len; i++) {
        		nTotal = this.dsPart.getColumn(i, "AMOUNT_CNT").valueOf();
        		name = this.dsPart.getColumn(i, "CAPTION");
        		labels.push(name);
        		datas.push(nTotal);
        		nMax = Math.max(nMax, nTotal);
        		tooltips.push('<span style="font-size: 11pt;">' + name + '</span>%{key}');
        	}
        	nMax = nMax + 5;

        	var nH = chart.getOffsetHeight() - 60;
        	var nOneGap = (nH / labels.length) * 0.3;

        	//var colors = this.gfnChartSeriesColorArrayNew();
        	//var colors = ["#3594de", "#fbe815"];
        	//colors = ["#4cabf4","#4cabf4","#4cabf4","#4cabf4","#4cabf4","#4cabf4","#4cabf4","#4cabf4","#4cabf4","#4cabf4"];

            var hbar = new DxChartHBar({
                    id: cvs,
        			elem : canvas,
                    data: datas,
                    options: {
        			textFontStyle : '9px noto',
        			textColor : this.gfnChartColor("axis"),
                    marginRight:           35,
                    marginTop:             35,
                    marginBottom:          35,
        			colorsSequential : true,
        			backgroundGridColor : '#57585E',
                        yaxisLabels: labels,
        				xaxisScaleMax : nMax,
        				//keyLabelsColor : '#ffffff',
                        //marginLeftAuto: true,
                        marginInner: nOneGap,
                        backgroundGridHlines: false,
                        backgroundGridBorder: false,
                        backgroundGridVlinesCount: 5,
                        xaxis: false,
                        yaxis: false,
                        //colors: colors,
                        xaxisLabelsCount: 5,
                        //xaxisScaleDecimals: 1,
                        xaxisTitle: '',
                        xaxisTitleColor: '',
        				//tooltips : tooltip,
        				tooltipsData: tooltips,	/*'<b>%{prop:xaxisLabels[%{dataset}]}</b> %{key} ',*/
        				tooltipsPointer: true,
        				tooltipsEvent: 'mousemove',
        				tooltipsFormattedUnitsPost : "건",
                        //tooltipsFormattedKeyColors: colors,
                        tooltipsPointer: true,
        				xaxisScaleZerostart : false,
                        //tooltipsPositionStatic: true,
        			tooltipsCss: {
        				fontSize: '10pt'
        			}
        //                 tooltipsCss: {
        //                     backgroundColor: this.gfnChartColor("tooltipbg"),
        //                     color: this.gfnChartColor("tooltiptext")
        //                 }
                    }
                });
        	hbar.draw();
        };

        //main div 가운데정렬
        this.fnDivMainResize = function ()
        {
        // 	var nLeft = nexacro.round((this.getOffsetWidth() - this.divMain.getOffsetWidth() ) /2);
        // 	var nTop = nexacro.round((this.getOffsetHeight() - this.divMain.getOffsetHeight() ) /2);
        //
        // 	if( nLeft < this.nDivMainTerm ) nLeft = this.nDivMainTerm;
        // 	if( nTop < this.nDivMainTerm ) nTop = this.nDivMainTerm;
        //
        // 	this.divMain.move(nLeft, nTop);
        	this.resetScroll();
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/

        this.frmMain_onkeydown = function(obj,e)
        {

        };

        this.frmMain_ontimer = function(obj,e)
        {
        	this.fnGetData();
        	//this.reload();
        };

        this.divChart00_ChartJS_cpu_onmouseleave = function(obj,e)
        {
        	 RGraph.SVG.hideTooltip();
        	 RGraph.hideTooltip();
        };

        this.cbo_type01_onitemchanged = function(obj,e)
        {
        	var v1 = this.cbo_type01.value;
        	var v2 = this.cbo_type02.value;
        	var v3 = this.cbo_type03.value;
        	var filterstr = "";
        	if(v1 != "all") {
        		filterstr = "(root_code=='" + v1 + "')";
        	}
        	if(v2 != "all") {
        		if(filterstr != "") filterstr += "&&";
        		filterstr += "(parent_code=='" + v2 + "')";
        	}
        	if(v3 != "all") {
        		if(filterstr != "") filterstr += "&&";
        		filterstr += "(state_code=='" + v3 + "')";
        	}
        	this.dsVMs.filter(filterstr);

        	if(obj.name == "cbo_type01") {
        		if(v1 == "all") {
        			this.dsCodeHost.filter("");
        			this.cbo_type02.set_index(0);
        		} else {
        			this.dsCodeHost.filter("(code=='all')||(pcode=='" + v1 + "')");
        		}
        	}
        	this.dsVMs.set_rowposition(0);
        	this.dsVMs.set_rowposition(-1);
        };

        this.fvDivShowCnt = 0;

        // Adaptor data set
        this.fnCalcAdaptor = function(row) {
        	this.dsVMAdapter.clearData();
        	this.dsVMAdapter.set_enableevent(false);
        	var adapters = this.dsVMs.getColumn(row, "adapters");

        	var oAdapters = JSON.parse(adapters);
        	var nRow, adapter;
        	for(var i=0,len=oAdapters.length;i<len;i++) {
        		adapter = oAdapters[i];
        		console.log(adapter);
        		nRow = this.dsVMAdapter.addRow();
        		this.dsVMAdapter.setColumn(nRow, "connected", adapter.connected);
        		this.dsVMAdapter.setColumn(nRow, "gateway", adapter.gateway);
        		this.dsVMAdapter.setColumn(nRow, "ip", adapter.ip);
        		this.dsVMAdapter.setColumn(nRow, "mac", adapter.mac);
        		this.dsVMAdapter.setColumn(nRow, "name", adapter.name);
        		this.dsVMAdapter.setColumn(nRow, "state_code", adapter.state_code);
        		this.dsVMAdapter.setColumn(nRow, "index_num", adapter.index_num);
        		this.dsVMAdapter.setColumn(nRow, "subnet_mask", adapter.subnet_mask);
        	}

        	this.dsVMAdapter.set_enableevent(true);
        	this.divAdaptor.form.sta00.set_text(this.dsVMs.getColumn(row, "name"));
        	this.dsVMAdapter.set_rowposition(-1);
        };


        // Storage data set
        this.fnCalcStorage = function(row) {
        	this.dsVMStorage.clearData();
        	this.dsVMStorage.set_enableevent(false);
        	var storages = this.dsVMs.getColumn(row, "storage");

        	var oStorage = JSON.parse(storages);
        	var nRow, storage;
        	for(var i=0,len=oStorage.length;i<len;i++) {
        		storage = oStorage[i];
        		nRow = this.dsVMStorage.addRow();
        		this.dsVMStorage.setColumn(nRow, "disk_total", storage.disk_total);
        		this.dsVMStorage.setColumn(nRow, "disk_usage", storage.disk_usage);
        		this.dsVMStorage.setColumn(nRow, "disk_used", storage.disk_used);
        		this.dsVMStorage.setColumn(nRow, "fs", storage.fs);
        		if(storage.volumes && storage.volumes[0]) {
        			this.dsVMStorage.setColumn(nRow, "name", storage.name + " ["+ storage.volumes[0].name + "]");
        		} else {
        			this.dsVMStorage.setColumn(nRow, "name", storage.name);
        		}
        		this.dsVMStorage.setColumn(nRow, "state_code", storage.state_code);
        		this.dsVMStorage.setColumn(nRow, "type_code", storage.type_code);
        	}

        	this.dsVMStorage.set_enableevent(true);
        	this.dsVMStorage.set_rowposition(-1);
        };


        // Disk data set
        this.fnCalcDisk = function(row) {
        	this.dsVMDisk.clearData();
        	this.dsVMDisk.set_enableevent(false);
        	var disks = this.dsVMs.getColumn(row, "disk");

        	var oDisks = JSON.parse(disks);
        	var nRow, disk;
        	for(var i=0,len=oDisks.length;i<len;i++) {
        		disk = oDisks[i];
        		nRow = this.dsVMDisk.addRow();
        		this.dsVMDisk.setColumn(nRow, "provisioning", disk.provisioning);
        		this.dsVMDisk.setColumn(nRow, "size_gb", disk.size_gb);
        		this.dsVMDisk.setColumn(nRow, "name", disk.name);
        	}
        	this.dsVMDisk.set_enableevent(true);
        	this.dsVMDisk.set_rowposition(-1);
        };
        // adaptor , storage
        this.grd00_oncellclick = function(obj,e)
        {
        	if(e.col == 6) {	// adaptors
        		this.fnCalcAdaptor(e.row);
        		this.fnCalcStorage(e.row);
        		this.fnCalcDisk(e.row);
        		var h = this.getOffsetHeight();
        		this.divAdaptor.setOffsetTop(h - this.divAdaptor.getOffsetHeight() - 10);
        		this.divAdaptor.set_visible(true);
        		this.resetScroll();
        	}
        };

        this.divAdaptor_btn00_onclick = function(obj,e)
        {
        	this.divAdaptor.set_visible(false);
        	this.resetScroll();
        };




        this.divChart01_00_grd00_oncellclick = function(obj,e)
        {
        	nexacro._OnceCallbackTimer.callonce(this, function () {
        					obj.getBindDataset().set_rowposition(-1);
        				});
        };

        this.dsBps_onrowposchanged = function(obj,e)
        {
        	var arrData = [];
        	arrData.push(obj.getColumn(e.newrow, "code"));
        	this.fvBpsArr = arrData;
        	this.fnNetTrace(arrData, "1");
        };

        this.dsError_onrowposchanged = function(obj,e)
        {
        	var arrData = [];
        	arrData.push(obj.getColumn(e.newrow, "code"));
        	this.fvErrorArr = arrData;
        	this.fnNetTrace(arrData, "2");
        };

        this.cbo00_onitemchanged = function(obj,e)
        {
        	this.fnNetToError();
        	this.divChart01_02.form.sta00.set_text(this.divChart01_02.form.cbo00.text + " TOP 5");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.addEventHandler("onkeydown",this.frmMain_onkeydown,this);
            this.addEventHandler("ontimer",this.frmMain_ontimer,this);
        };
        this.loadIncludeScript("statusCustomer.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
