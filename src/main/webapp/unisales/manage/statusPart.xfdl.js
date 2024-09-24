(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("statusOP");
            this.set_titletext("MainFrame");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,1090);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCodeStatus", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"name\">회사</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"name\">부분</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"name\">본부</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"name\">그룹</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"name\">팀</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsParam1", this);
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"START_MM\" type=\"STRING\" size=\"256\"/><Column id=\"END_MM\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_YEAR2\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"CONTRACT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"END_MONTH\" type=\"STRING\" size=\"256\"/><Column id=\"FORMAT\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput1", this);
            obj._setContents("<ColumnInfo><Column id=\"CD_CODE\" type=\"string\" size=\"20\"/><Column id=\"CAPTION\" type=\"string\" size=\"100\"/><Column id=\"AMOUNT_SUM\" type=\"bigdecimal\" size=\"20\"/><Column id=\"PRE_AMOUNT_SUM\" type=\"bigdecimal\" size=\"20\"/><Column id=\"AMOUNT_CNT\" type=\"int\" size=\"11\"/><Column id=\"ORD\" type=\"string\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsItemMon", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput1_00", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"DEPT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CD_CODE\" type=\"string\" size=\"20\"/><Column id=\"CAPTION\" type=\"string\" size=\"100\"/><Column id=\"BUSINESS_TYPE\" type=\"string\" size=\"20\"/><Column id=\"GOAL\" type=\"bigdecimal\" size=\"20\"/><Column id=\"RESULT\" type=\"bigdecimal\" size=\"20\"/><Column id=\"GOAL_Y\" type=\"bigdecimal\" size=\"20\"/><Column id=\"RESULT_Y\" type=\"bigdecimal\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsItem", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"DEPT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CD_CODE\" type=\"string\" size=\"20\"/><Column id=\"CAPTION\" type=\"string\" size=\"100\"/><Column id=\"BUSINESS_TYPE\" type=\"string\" size=\"20\"/><Column id=\"GOAL\" type=\"bigdecimal\" size=\"20\"/><Column id=\"RESULT\" type=\"bigdecimal\" size=\"20\"/><Column id=\"GOAL_Y\" type=\"bigdecimal\" size=\"20\"/><Column id=\"RESULT_Y\" type=\"bigdecimal\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput2", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"DEPT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CD_CODE\" type=\"string\" size=\"20\"/><Column id=\"CAPTION\" type=\"string\" size=\"100\"/><Column id=\"BUSINESS_TYPE\" type=\"string\" size=\"20\"/><Column id=\"GOAL\" type=\"bigdecimal\" size=\"20\"/><Column id=\"RESULT\" type=\"bigdecimal\" size=\"20\"/><Column id=\"GOAL_Y\" type=\"bigdecimal\" size=\"20\"/><Column id=\"RESULT_Y\" type=\"bigdecimal\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput3", this);
            obj._setContents("<ColumnInfo><Column id=\"CONTRACT_TYPE\" type=\"string\" size=\"40\"/><Column id=\"CONTRACT_TYPE_NAME\" type=\"string\" size=\"100\"/><Column id=\"CLIENT_CODE\" type=\"string\" size=\"20\"/><Column id=\"COMPANY_NAME\" type=\"string\" size=\"100\"/><Column id=\"INDUSTRY\" type=\"string\" size=\"100\"/><Column id=\"PROJECT_CODE\" type=\"string\" size=\"15\"/><Column id=\"PROJECT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CONTRACT_NO\" type=\"string\" size=\"20\"/><Column id=\"CONTRACT_NAME\" type=\"string\" size=\"100\"/><Column id=\"DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"DEPT_NAME\" type=\"string\" size=\"100\"/><Column id=\"SALES_EMP_NO\" type=\"string\" size=\"120\"/><Column id=\"SALES_EMP_NAME\" type=\"string\" size=\"255\"/><Column id=\"CL_01\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_02\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_03\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_04\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_05\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_06\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_07\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_08\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_09\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_10\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_11\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_12\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_H01\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_H02\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_Y\" type=\"bigdecimal\" size=\"40\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput2_Copy", this);
            obj._setContents("<ColumnInfo><Column id=\"CONTRACT_TYPE\" type=\"string\" size=\"40\"/><Column id=\"CONTRACT_TYPE_NAME\" type=\"string\" size=\"100\"/><Column id=\"CLIENT_CODE\" type=\"string\" size=\"20\"/><Column id=\"COMPANY_NAME\" type=\"string\" size=\"100\"/><Column id=\"INDUSTRY\" type=\"string\" size=\"100\"/><Column id=\"PROJECT_CODE\" type=\"string\" size=\"15\"/><Column id=\"PROJECT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CONTRACT_NO\" type=\"string\" size=\"20\"/><Column id=\"CONTRACT_NAME\" type=\"string\" size=\"100\"/><Column id=\"DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"DEPT_NAME\" type=\"string\" size=\"100\"/><Column id=\"SALES_EMP_NO\" type=\"string\" size=\"120\"/><Column id=\"SALES_EMP_NAME\" type=\"string\" size=\"255\"/><Column id=\"CL_01\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_02\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_03\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_04\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_05\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_06\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_07\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_08\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_09\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_10\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_11\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_12\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_H01\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_H02\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_Y\" type=\"bigdecimal\" size=\"40\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGlobal", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"string\" size=\"60\"/><Column id=\"EMP_NM\" type=\"string\" size=\"100\"/><Column id=\"DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"DEPT_NM\" type=\"string\" size=\"100\"/><Column id=\"EMAIL\" type=\"string\" size=\"268\"/><Column id=\"MOBILE\" type=\"string\" size=\"44\"/><Column id=\"OFFICE\" type=\"string\" size=\"20\"/><Column id=\"GRADE_CD\" type=\"string\" size=\"30\"/><Column id=\"GRADE_NM\" type=\"string\" size=\"100\"/><Column id=\"DUTY_CD\" type=\"string\" size=\"30\"/><Column id=\"DUTY_NM\" type=\"string\" size=\"100\"/><Column id=\"EMP_KIND\" type=\"string\" size=\"255\"/><Column id=\"CO_CD\" type=\"string\" size=\"30\"/><Column id=\"CO_NM\" type=\"string\" size=\"100\"/><Column id=\"LOGIN_SYS\" type=\"string\" size=\"10\"/><Column id=\"LANGUAGE\" type=\"string\" size=\"10\"/><Column id=\"MODEL_ID\" type=\"string\" size=\"50\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divChart","0.65%","39","48.89%","321",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_MF_part");
            this.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS_vm","10","10",null,null,"10","10",null,null,null,null,this.divChart.form);
            obj.set_taborder("1");
            obj.set_text("ChartJS00");
            this.divChart.addChild(obj.name, obj);

            obj = new Div("divChart00","50.00%","39","48.89%","321",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_MF_part");
            this.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS_vm","10","10",null,null,"10","10",null,null,null,null,this.divChart00.form);
            obj.set_taborder("1");
            obj.set_text("ChartJS00");
            this.divChart00.addChild(obj.name, obj);

            obj = new Static("sta00","10","9","329","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("업종별 전년대비 매출현황");
            obj.set_cssclass("sta_WF_SchLabel");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","50.00%","9","385","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("업종별 실적 비율");
            obj.set_cssclass("sta_WF_SchLabel");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00","10","726","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("업종별 실적 LIST");
            obj.set_cssclass("sta_WF_SchLabel");
            this.addChild(obj.name, obj);

            obj = new Div("div00","10","759",null,"271","10",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("div_MF_part");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","10","10",null,null,"10","10",null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsOutput1");
            obj.set_autofittype("col");
            obj.getSetter("usecustomexpr").set("false");
            obj.set_cssclass("grd_WF_selected");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"268\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"180\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"업종\" cssclass=\"grd_MF_roundL\"/><Cell col=\"1\" text=\"금년 매출\"/><Cell col=\"2\" text=\"작년 매출\"/><Cell col=\"3\" text=\"작년대비율\" cssclass=\"grd_MF_roundR\"/></Band><Band id=\"body\"><Cell text=\"bind:CAPTION\" textAlign=\"left\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:AMOUNT_SUM\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"2\" text=\"bind:PRE_AMOUNT_SUM\" textAlign=\"right\" displaytype=\"number\" combodataset=\"gdsDevice\" combocodecol=\"code\" combodatacol=\"name\"/><Cell col=\"3\" textAlign=\"center\" displaytype=\"progressbarcontrol\" progressbarsmooth=\"true\" expr=\"(AMOUNT_SUM&gt;0 &amp;&amp; PRE_AMOUNT_SUM&gt;0)?Math.round((AMOUNT_SUM/PRE_AMOUNT_SUM)*100,2) + &apos;%&apos;:&apos;-&apos;\"/></Band></Format></Formats>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta01","112","680","20","1",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("sta01");
            this.addChild(obj.name, obj);

            obj = new Div("divChart01","7","399",null,"321","10",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("div_MF_part");
            this.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS_vm","10","10",null,null,"10","10",null,null,null,null,this.divChart01.form);
            obj.set_taborder("1");
            obj.set_text("ChartJS00");
            this.divChart01.addChild(obj.name, obj);

            obj = new Static("sta00_01","10","369","329","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("월별 매출 현황");
            obj.set_cssclass("sta_WF_SchLabel");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divChart.form
            obj = new Layout("default","",0,0,this.divChart.form,function(p){});
            this.divChart.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divChart00.form
            obj = new Layout("default","",0,0,this.divChart00.form,function(p){});
            this.divChart00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divChart01.form
            obj = new Layout("default","",0,0,this.divChart01.form,function(p){});
            this.divChart01.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1080,1090,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("statusPart.xfdl", function() {
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

        	this.fnSales();
        	this.fnGetIndustry();
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
        /**
         * 구성도 서비스 호출
         * @return N/A
         */
        this.fvSalesCnt = 0;
        this.fnSales = function()
        {
        	this.gfnInitNextGlobalDataset(this.dsGlobal);

        	var year = this.gfnGetDate("year");
        	var preyear = (parseInt(year) - 1) + "";
        	this.dsParam1.setColumn(0, "YEAR", year);
        	this.dsParam1.setColumn(0, "START_MM", "01");
        	this.dsParam1.setColumn(0, "END_MM", "12");
        	//this.dsParam1.setColumn(0, "BUSINESS_TYPE", "U");
        	this.dsParam1.setColumn(0, "BUSINESS_TYPE", null);

        	var strSvcId 	= "sales";
        	var strSvcUrl 	= "nextService.do";
        	var inData 		= "dsGlobal=dsGlobal:A dsParam=dsParam1:A";
        	var outData 	= "dsOutput1=dsOutput";
        	var strArg 		= "jobCode=" + nexacro.wrapQuote("next");
        	strArg 			+= " trxCode=" + nexacro.wrapQuote("sales");
        	strArg 			+= " trxUrl=" + nexacro.wrapQuote("FrontControllerServlet.do?service=xupservice&domain=NEXTp&model=SR_SalesResultAnalysis_S04&format=xml&version=xplatform&compress=false");
        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, "fnCallback");

        	this.dsParam1.setColumn(0, "YEAR", preyear);
        	strSvcId 		= "sales2";
        	strSvcUrl 		= "nextService.do";
        	inData 			= "dsGlobal=dsGlobal:A dsParam=dsParam1:A";
        	outData 		= "dsOutput2=dsOutput";
        	var strArg 		= "jobCode=" + nexacro.wrapQuote("next");
        	strArg 			+= " trxCode=" + nexacro.wrapQuote("sales2");
        	strArg 			+= " trxUrl=" + nexacro.wrapQuote("FrontControllerServlet.do?service=xupservice&domain=NEXTp&model=SR_SalesResultAnalysis_S04&format=xml&version=xplatform&compress=false");
        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, "fnCallback");
        };


        this.fnGetIndustry = function()
        {
        	//POST http://next.tobesoft.com/FrontControllerServlet.do?service=xupservice&domain=NEXTp&model=MI_TargetVsResults_S01&format=xml&version=xplatform&compress=false HTTP/1.1
        	var year = this.gfnGetDate("year");
        	this.dsParam1.setColumn(0, "YEAR", year);
        	this.dsParam1.setColumn(0, "TYPE", "CONTRACT");
        	this.dsParam1.setColumn(0, "FORMAT", "CLIENT");
        	this.dsParam1.setColumn(0, "DEPT_LEVEL", "1");
        	this.dsParam1.setColumn(0, "END_MONTH", year + "12");

        	var strSvcId 	= "salesmancur";
        	var strSvcUrl 	= "nextService.do";
        	var inData 		= "dsGlobal=dsGlobal:A dsParam=dsParam1:A";
        	var outData 	= "dsOutput3=dsOutput";
        	var strArg 		= "jobCode=" + nexacro.wrapQuote("next");
        	strArg 			+= " trxCode=" + nexacro.wrapQuote("salesmancur");
        	strArg 			+= " trxUrl=" + nexacro.wrapQuote("FrontControllerServlet.do?service=xupservice&domain=NEXTp&model=MI_SalesMonthly_S01&format=xml&version=xplatform&compress=false");
        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, "fnCallback");

        };


        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //transaction
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg, oJson)
        {
        	switch(sSvcId) {
        		case "sales":
        		case "sales2":
        			this.fvSalesCnt++;
        			if(this.fvSalesCnt>=2){
        				this.fvSalesCnt = 0;
        				this.fnSalesChart();
        			}
        			break;
        		case "salesmancur":
        			this.fnIndustryList();
        			break;
        		default:
        			break;
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        // Goal
        this.fnSalesChart = function()
        {
        	var chart = this.divChart.form.ChartJS_vm;
        	var canvas = chart.getCanvas();
        	var cvs = canvas.id;
        	DxChart.reset(canvas);

        	var nH = chart.getOffsetHeight() - 60;

        	var chartdatas 	= [];
        	var labels 		= [];
        	var tooltips 	= [];
        	var nMax = 0;

        	var chartdatas2 = [];
        	var labels2 	= [];
        	var tooltips2 	= [];
        	var nMax2 = 0;
        	var tooltipstr = "";
        	var result, preresult, name, goal, remain, cd, row, nPct, nPct2;

        	var nSum = this.dsOutput1.getSum("AMOUNT_SUM");
        	var nSum2 = this.dsOutput2.getSum("AMOUNT_SUM");

        	this.dsOutput1.addColumn("PRE_AMOUNT_SUM", "bigdecimal", 10);
        	this.dsOutput1.set_enableevent(false);

        	for(var i=0, len=this.dsOutput1.rowcount;i<len; i++) {
        		cd 			= this.dsOutput1.getColumn(i, "CD_CODE");
        		result 		= this.dsOutput1.getColumn(i, "AMOUNT_SUM");
        		name		= this.dsOutput1.getColumn(i, "CAPTION");

        		row 		= this.dsOutput2.findRow("CD_CODE", cd);
        		if(row>=0) {
        			preresult 	= this.dsOutput2.getColumn(row, "AMOUNT_SUM");
        		} else {
        			preresult 	= 0;
        		}
        		this.dsOutput1.setColumn(i, "PRE_AMOUNT_SUM", preresult);

        		nPct = nexacro.toNumber(((result / nSum) * 100).toFixed(2));
        		nPct2 = nexacro.toNumber(((preresult / nSum2) * 100).toFixed(2));

        		result 		= (!result?0:result.valueOf());
        		preresult 	= (!preresult?0:preresult.valueOf());

        		chartdatas[i] = [result.formatWon(), preresult.formatWon()];
        		labels[i] = name;
        		tooltipstr = '<span style="font-size: 12pt;">' + name + '</span>%{key}';
        		tooltips.push(tooltipstr);
        		tooltips.push(tooltipstr);
        		nMax = Math.max(nMax, result.formatWon(), preresult.formatWon());

        		chartdatas2[i] = [nPct, nPct2];
        		labels2[i] = name;
        		tooltipstr = '<span style="font-size: 12pt;">' + name + '</span>%{key}';
        		tooltips2.push(tooltipstr);
        		tooltips2.push(tooltipstr);

        	}
        	this.dsOutput1.set_enableevent(true);
        	var nOneGap = (nH / labels.length) * 0.2;

        	nMax = nMax + 5;
        	var year = this.gfnGetDate("year");
        	var preyear = (parseInt(year) - 1) + "";

        	var colors = this.gfnChartHBarColor(0);
        	var param = {
        					marginLeft:            120,
        					marginRight:           35,
        					marginTop:             30,
        					marginBottom:          35,
        					marginLeftAuto:        true,
        					keyPositionX : 			chart.getOffsetWidth() - 230,
        				    yaxisLabels: 			labels,
        					xaxisScaleMax : 		nMax,
        					marginInner: 			nOneGap,
        					tooltipsData : 				tooltips,
        					keyData: 					[year+"년", preyear+"년"],
        					colors: 				[colors[0], colors[1]],
        					tooltipsFormattedUnitsPost : '억',
        					tooltipsFormattedKeyLabels: [year+"년 : ", preyear+"년 : "],
        					tooltipsFormattedKeyColors: [colors[0], colors[1]]
        				};
        	var options = this.gfnGetRChartOption("hbar", "dual", param);
            var hbar = new DxChartHBar({
                    id: cvs,
        			elem : canvas,
                    data: chartdatas,
                    options: options
                });
        	hbar.draw();

        	// HOST별 VM별 Status
        	chart = this.divChart00.form.ChartJS_vm;
        	canvas = chart.getCanvas();
        	cvs = canvas.id;
        	DxChart.reset(canvas);

        	nH = chart.getOffsetHeight() - 60;
        	options.xaxisScaleMax = 100;
        	options.tooltipsFormattedUnitsPost = "%";
            var hbar = new DxChartHBar({
                    id: cvs,
        			elem : canvas,
                    data: chartdatas2,
                    options: options
                });
        	hbar.draw();
        };

        this.fnIndustryList = function() {

        	this.dsOutput2_Copy.clearData();

        	var year = this.gfnGetDate("year");
        	var preyear = (parseInt(year) - 1) + "";

        	// 작년
        	this.dsOutput2_Copy.set_enableevent(false);
        	var INDUSTRY, svINDUSTRY, nRow, val,mon, colName;
        	svINDUSTRY = "";
        	this.dsOutput3.set_keystring("S:+INDUSTRY");
        	for(var i=0,len=this.dsOutput3.rowcount;i<len;i++) {
        		INDUSTRY = this.dsOutput3.getColumn(i, "INDUSTRY");
        		if(INDUSTRY != svINDUSTRY) {
        			nRow = this.dsOutput2_Copy.addRow();
        			this.dsOutput2_Copy.setColumn(nRow, "INDUSTRY", INDUSTRY);
        		}
        		for(var j=1;j<=12;j++) {
        			mon = (j+"").padLeft(2, "0");
        			colName = "CL_" + mon;
        			val = this.dsOutput2_Copy.getColumn(nRow, colName);
        			if(!val) val = 0;
        			this.dsOutput2_Copy.setColumn(nRow, colName, val + this.dsOutput3.getColumn(i, colName));
        		}
        		svINDUSTRY = INDUSTRY;
        	}
        	this.dsOutput2_Copy.set_enableevent(true);

        	var chart = this.divChart01.form.ChartJS_vm;
        	var canvas = chart.getCanvas();
        	var cvs = canvas.id;
        	DxChart.reset(canvas);

        	var arrData = [];
        	var label = [];
        	var labelsInbarSpecificSum = [];
        	var keys = [];
        	var amt, goal, preamt, pregoal;
        	for(var j=0,len=this.dsOutput2_Copy.rowcount;j<len;j++) {
        		keys.push(this.dsOutput2_Copy.getColumn(j, "INDUSTRY"));

        		for(var i=0;i<12;i++) {
        			var arrInd = arrData[i];
        			if(arrInd == undefined || arrInd == null) {
        				arrData[i] = [];
        				arrInd = arrData[i];
        			}
        			mon = ((i+1) + "").padLeft(2, "0");
        			colName = "CL_" + mon;
        			if(!this.dsOutput2_Copy.getColumn(j, colName)) {
        				amt = 0;
        			} else {
        				amt = this.dsOutput2_Copy.getColumn(j, colName).valueOf().formatWon();
        			}
        			arrInd.push(amt);
        			if(j==0) {
        				label[i] = ((i+1) + "월");
        			}
        		}
        	}

        	var colorlist = ['#e76630','#4cabf4','#fbdd15','#ec4c7e','#b643e0','#3c4ae0','#32ec66','#e69733','#e76630','#e76630','#4cabf4','#fbdd15','#ec4c7e'];

        	var nW = this.divChart.getOffsetWidth() - 10;
        	var nChartLeft = chart.getOffsetLeft();

            var options = {
                        backgroundGrid: false,
                        xaxisLabels: label,
                        colors: colorlist,
                        shadowUse: true,
                        shadowStyle: '2 0 0 #aaaaaa',
                        colorsStroke: 'rgba(0,0,0,0)',
        				marginTop:             5,
        				marginBottom:          20,
        				marginLeft:            30,
        				marginRight:           5,
        				marginInner : 14,
        				corners : 'round',
        				yaxisLabelsCount : 1,
        				yaxisLabelsSize : 8,
        				xaxisLabelsSize : 8,
        				xaxisColor : this.gfnChartColor("axis"),
        				xaxisLabelsColor :this.gfnChartColor("axislabel"),
        				yaxisLabelsColor :this.gfnChartColor("axislabel"),
        				labelsAbove: true,
        				labelsAboveDecimals: 1,
        				labelsAboveUnitsPost: '',
        				labelsAboveColor: this.gfnChartColor("axislabel"),
        				labelsAboveFontStyle: '8px noto',
        				yaxisUse : true,
        				titleText : '',
                        marginInnerGrouped: 1,
        				keyData: 					keys,
        						keyTextFontStyle : '10px noto',
        						keyPosition: 'margin',
        						keyLabelsFontStyle : 'bold 10px noto',
        						keyPositionX : 			chart.getOffsetWidth() - 800,
        						keyPositionY : 			20,
        						keyLabelsColor : this.gfnChartColor("axislabel"),
        				tooltipsData: '',
        				tooltipsFormattedKeyColors : colorlist,
        				tooltipsFormattedKeyLabels: keys,
        				tooltipsEvent: 'mousemove'
                    };
        	tooltips = [];
        	for(var i=0,len=arrData.length;i<len;i++) {
        		var x = arrData[i];
        		for(var j=0;j<x.length;j++) {
        			tooltips.push('<span style="font-size: 9pt;">' + label[i] + " - " + this.dsOutput2_Copy.getColumn(j, "INDUSTRY") + '<br>' + '</span>%{key}');
        		}
        	}
        	if(arrData.length == 0) {
        		options.backgroundImageX = oChart.getOffsetWidth()/2 - 30;
        		options.backgroundImageY = oChart.getOffsetHeight()/2 - 10;
        		options.backgroundImage = './images/grd_NODATA.png';
        		options.backgroundImageStretch = false;
        	} else {
        		options.backgroundImage = null;
        	}

        	options.tooltips = tooltips;
            var nodechart = new DxChartBar({
                    id: cvs,
        			elem : canvas,
                    data: arrData,
                    options: options
                 }).draw();
        };

        // resource CPU - 금일통계
        this.fnResourceTop5Status = function (idx, type, valCol)
        {
        	this.dsItemMon.filter("CD_CODE=='" + type + "'");


        	var arrTarget, oTgtDiv, tgtCol;
        	if(valCol == "PRE_RESULT_Y") {
        		oTgtDiv = this.divChart01_00;
        		tgtCol  = "PRE_RESULT_AMOUNT";
        	} else {
        		oTgtDiv 	= this.divChart01;
        		tgtCol  = "RESULT_AMOUNT";
        	}
        	var rowcnt = this.dsItemMon.rowcount;
        	var len = 5;

        	var obj, objCpus, objCpu, oSub;
        	var date = new Date();

        	var chartdatas 	= [];
        	var dummydatas 	= [];
        	var labels 		= [];
        	var tooltips 	= [];
        	var nDivCnt 	= 0;
        	var colors_fill = this.gfnChartSeriesColorArray("0.4");
        	var colors 		= this.gfnChartSeriesColorArrayNew();
        	var colorsHexa 	= this.gfnChartSeriesColorArrayHexa();
        	var nMax 		= 0;
        	var name 		= "";

        	var oChart = oTgtDiv.form["ChartJS_cpu" + (idx+1)];
        	var canvas = oChart.getCanvas();
        	var cvs = canvas.id;
        	DxChart.reset(canvas);

        	var amt;
        	for(var i=0; i<len; i++) {
        		name = this.dsItemMon.getColumn(i, "CAPTION");
        		if(i>0 && (i%3==0)) {
        			labels.push(this.dsItemMon.getColumn(i, "MM"));
        		} else {
        			labels.push("");
        		}
        		amt = this.dsItemMon.getColumn(i, tgtCol);
        		if(!amt) amt = 0;
        		else amt = amt.valueOf().formatWon();

        		nMax = Math.max(nMax, amt);

        		chartdatas.push(amt);
        		tooltips.push('<b>' + name  + '</b><br/>'+this.dsItemMon.getColumn(i, "MM")+'%{key}');
        	}

        	nMax = nMax + 2;
        	var param = {
        				//backgroundColor : colors_fill[i],
        				shadowUse: false,
        				xaxisUse: false,
        				xaxisLabels: labels,
        				yaxisUse: false,
        				yaxisScaleMax : nMax,
        				marginBottom: 0,
        				marginLeft: 0,
        				marginRight: 0,
        				marginTop: 0,
        				tooltipsData : tooltips,
        				lineWidth: 2,
        				tooltipsFormattedUnitsPost : "억",
        				tooltipsFormattedKeyColors : [colorsHexa[idx]],
        				title : '',
        				titleY : 15,
        				titleSize : 8,
        				colors: [colors[idx],'transparent']
        	};
        	var options = this.gfnGetRChartOption("line", "fill1", param);
        	// CPU
        	var oChart = oTgtDiv.form["ChartJS_cpu" + (idx+1)];
        	//oChart.set_border("1px solid " + colors[i]);
        	var canvas = oChart.getCanvas();
        	var cvs = canvas.id;
        	DxChart.reset(canvas);

        	var myChart = new DxChartLine({
        		id: cvs,
        		elem: canvas,
        		data: chartdatas,
        		options: options
        	}).draw();

        	return labels;
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
        	this.dsVMAdapter.set_rowposition(0);
        	this.dsVMAdapter.set_enableevent(true);
        	this.divAdaptor.form.sta00.set_text("      " + this.dsVMs.getColumn(row, "name"));
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
        	this.dsVMStorage.set_rowposition(0);
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
        	this.dsVMDisk.set_rowposition(0);
        };
        // adaptor , storage
        this.grd00_oncellclick = function(obj,e)
        {
        	if(e.col == 6) {	// adaptors
        		this.fnCalcAdaptor(e.row);
        		this.fnCalcStorage(e.row);
        		this.fnCalcDisk(e.row);
        		//var h = this.getOffsetHeight();
        		this.divAdaptor.setOffsetTop(this.div00.getOffsetTop() - (this.divAdaptor.getOffsetHeight()/2));
        		this.divAdaptor.set_visible(true);
        		this.resetScroll();
        	}
        };

        this.divAdaptor_btn00_onclick = function(obj,e)
        {
        	this.divAdaptor.set_visible(false);
        	this.resetScroll();
        };


        this.btnexcel_onclick = function(obj,e)
        {
        	var objGrid = this.div00.form.grd00;

        	//var name = this.dsNodesCopy.getColumn(this.dsNodesCopy.rowposition, "name");
        	var sSheetName = "nodelist" + "!A1";

        	var sFileName = "nodelist.xlsx";
        	this.gfnExportExcelJS(objGrid, sSheetName, sFileName);
        };

        this.grd00_oncelldblclick = function(obj,e)
        {
        	var ds = obj.getBindDataset();
        	var title = ds.getColumn(e.row, "name") + " Detail";
        	var code = ds.getColumn(e.row, "code");
        	var type_code = ds.getColumn(e.row, "type_code");
        	this.gfnOpenVMPopup(title, code, type_code);
        };

        this.cbo_type03_onitemchanged = function(obj,e)
        {
        	this.fnGetItem(obj.value);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.addEventHandler("onkeydown",this.frmMain_onkeydown,this);
            this.addEventHandler("ontimer",this.frmMain_ontimer,this);
            this.divChart.form.ChartJS_vm.addEventHandler("onmouseleave",this.divChart00_ChartJS_cpu_onmouseleave,this);
            this.divChart00.form.ChartJS_vm.addEventHandler("onmouseleave",this.divChart00_ChartJS_cpu_onmouseleave,this);
            this.div00.form.grd00.addEventHandler("oncellclick",this.grd00_oncellclick,this);
            this.div00.form.grd00.addEventHandler("oncelldblclick",this.grd00_oncelldblclick,this);
            this.divChart01.form.ChartJS_vm.addEventHandler("onmouseleave",this.divChart00_ChartJS_cpu_onmouseleave,this);
        };
        this.loadIncludeScript("statusPart.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
