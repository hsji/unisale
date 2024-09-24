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
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"START_MM\" type=\"STRING\" size=\"256\"/><Column id=\"END_MM\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_YEAR2\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"CONTRACT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRICE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput1", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"DEPT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CD_CODE\" type=\"string\" size=\"20\"/><Column id=\"CAPTION\" type=\"string\" size=\"100\"/><Column id=\"BUSINESS_TYPE\" type=\"string\" size=\"20\"/><Column id=\"GOAL\" type=\"bigdecimal\" size=\"20\"/><Column id=\"RESULT\" type=\"bigdecimal\" size=\"20\"/><Column id=\"GOAL_Y\" type=\"bigdecimal\" size=\"20\"/><Column id=\"RESULT_Y\" type=\"bigdecimal\" size=\"20\"/></ColumnInfo>");
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

            obj = new Div("divChart01","0.65%","402","48.89%","226",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_MF_part");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS_vm","10","53","44.13%","127",null,null,null,null,null,null,this.divChart01.form);
            obj.set_taborder("0");
            obj.set_text("ChartJS00");
            this.divChart01.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS_cpu1","ChartJS_vm:20","12",null,"33","20",null,null,null,null,null,this.divChart01.form);
            obj.set_taborder("1");
            obj.set_text("ChartJS00");
            obj.set_border("0px none,0px none,1px solid black");
            this.divChart01.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS_cpu2","ChartJS_vm:20","47",null,"33","20",null,null,null,null,null,this.divChart01.form);
            obj.set_taborder("2");
            obj.set_text("ChartJS00");
            obj.set_border("0px none,0px none,1px solid black");
            this.divChart01.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS_cpu3","ChartJS_vm:20","82",null,"33","20",null,null,null,null,null,this.divChart01.form);
            obj.set_taborder("3");
            obj.set_text("ChartJS00");
            obj.set_border("0px none,0px none,1px solid black");
            this.divChart01.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS_cpu4","ChartJS_vm:20","117",null,"33","20",null,null,null,null,null,this.divChart01.form);
            obj.set_taborder("4");
            obj.set_text("ChartJS00");
            obj.set_border("0px none,0px none,1px solid black");
            this.divChart01.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS_cpu5","ChartJS_vm:20","152",null,"33","20",null,null,null,null,null,this.divChart01.form);
            obj.set_taborder("5");
            obj.set_text("ChartJS00");
            obj.set_border("0px none,0px none,1px solid black");
            this.divChart01.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS_cpu6","ChartJS_vm:20","187",null,"33","20",null,null,null,null,null,this.divChart01.form);
            obj.set_taborder("6");
            obj.set_text("ChartJS00");
            this.divChart01.addChild(obj.name, obj);

            obj = new Div("divChart01_00","50.00%","402","48.89%","226",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_MF_part");
            this.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS_vm","10","53","44.13%","127",null,null,null,null,null,null,this.divChart01_00.form);
            obj.set_taborder("0");
            obj.set_text("ChartJS00");
            this.divChart01_00.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS_cpu1","ChartJS_vm:20","12",null,"33","20",null,null,null,null,null,this.divChart01_00.form);
            obj.set_taborder("1");
            obj.set_text("ChartJS00");
            obj.set_border("0px none,0px none,1px solid black");
            this.divChart01_00.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS_cpu2","ChartJS_vm:20","47",null,"33","20",null,null,null,null,null,this.divChart01_00.form);
            obj.set_taborder("2");
            obj.set_text("ChartJS00");
            obj.set_border("0px none,0px none,1px solid black");
            this.divChart01_00.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS_cpu3","ChartJS_vm:20","82",null,"33","20",null,null,null,null,null,this.divChart01_00.form);
            obj.set_taborder("3");
            obj.set_text("ChartJS00");
            obj.set_border("0px none,0px none,1px solid black");
            this.divChart01_00.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS_cpu4","ChartJS_vm:20","117",null,"33","20",null,null,null,null,null,this.divChart01_00.form);
            obj.set_taborder("4");
            obj.set_text("ChartJS00");
            obj.set_border("0px none,0px none,1px solid black");
            this.divChart01_00.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS_cpu5","ChartJS_vm:20","152",null,"33","20",null,null,null,null,null,this.divChart01_00.form);
            obj.set_taborder("5");
            obj.set_text("ChartJS00");
            obj.set_border("0px none,0px none,1px solid black");
            this.divChart01_00.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS_cpu6","ChartJS_vm:20","187",null,"33","20",null,null,null,null,null,this.divChart01_00.form);
            obj.set_taborder("6");
            obj.set_text("ChartJS00");
            this.divChart01_00.addChild(obj.name, obj);

            obj = new Static("sta02_00",null,"639","60","25","140",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("구분");
            obj.set_cssclass("sta_MF_bullet02");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cbo_type03",null,"639","121","25","11",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_readonly("false");
            obj.set_innerdataset("dsCodeStatus");
            obj.set_codecolumn("code");
            obj.set_datacolumn("name");
            obj.set_visible("false");
            obj.set_text("회사");
            obj.set_value("1");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","10","9","329","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("항목별 전년대비 실적 비교");
            obj.set_cssclass("sta_WF_SchLabel");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00","50.00%","9","385","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("항목별 목표대비 실적");
            obj.set_cssclass("sta_WF_SchLabel");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01","10","369","320","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("항목 TOP 5 (금년)");
            obj.set_cssclass("sta_WF_SchLabel");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","50.00%","369","280","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("항목 TOP5 (전년)");
            obj.set_cssclass("sta_WF_SchLabel");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_00","10","638","300","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("항목별 실적 LIST");
            obj.set_cssclass("sta_WF_SchLabel");
            this.addChild(obj.name, obj);

            obj = new Div("div00","10","671",null,"319","10",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("div_MF_part");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","10","10",null,null,"10","10",null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsItem");
            obj.set_autofittype("col");
            obj.getSetter("usecustomexpr").set("false");
            obj.set_cssclass("grd_WF_selected");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"275\"/><Column size=\"204\"/><Column size=\"159\"/><Column size=\"175\"/><Column size=\"180\"/></Columns><Rows><Row size=\"15\" band=\"head\"/><Row size=\"15\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"구분\" cssclass=\"grd_MF_roundL\"/><Cell col=\"1\" rowspan=\"2\" text=\"항목\"/><Cell col=\"2\" rowspan=\"2\" text=\"목표\"/><Cell col=\"3\" rowspan=\"2\" text=\"실적\"/><Cell col=\"4\" rowspan=\"2\" text=\"달성률\" cssclass=\"grd_MF_roundR\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_NAME\" textAlign=\"left\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:CAPTION\" textAlign=\"left\" suppress=\"2\"/><Cell col=\"2\" text=\"bind:GOAL_Y\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"3\" text=\"bind:RESULT_Y\" textAlign=\"right\" displaytype=\"number\" combodataset=\"gdsDevice\" combocodecol=\"code\" combodatacol=\"name\"/><Cell col=\"4\" textAlign=\"center\" displaytype=\"progressbarcontrol\" progressbarsmooth=\"true\" expr=\"(GOAL_Y&gt;0 &amp;&amp; RESULT_Y&gt;0)?Math.round((RESULT_Y/GOAL_Y)*100,2) + &apos;%&apos;:&apos;-&apos;\"/></Band></Format></Formats>");
            this.div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divChart.form
            obj = new Layout("default","",0,0,this.divChart.form,function(p){});
            this.divChart.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divChart00.form
            obj = new Layout("default","",0,0,this.divChart00.form,function(p){});
            this.divChart00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divChart01.form
            obj = new Layout("default","",0,0,this.divChart01.form,function(p){});
            this.divChart01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divChart01_00.form
            obj = new Layout("default","",0,0,this.divChart01_00.form,function(p){});
            this.divChart01_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

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
        this.registerScript("statusOP.xfdl", function() {
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
        	this.fnGetItemMonth();
        	this.fnGetItem("1");
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
        this.fvGoalCnt = 0;
        this.fnGetGoal = function()
        {
        	this.gfnInitNextGlobalDataset(this.dsGlobal);

        	var year = this.gfnGetDate("year");
        	var preyear = (parseInt(year) - 1) + "";
        	this.dsParam1.setColumn(0, "YEAR", year);
        	this.dsParam1.setColumn(0, "PRE_YEAR", preyear);
        	this.dsParam1.setColumn(0, "START_MM", "01");
        	this.dsParam1.setColumn(0, "END_MM", "12");
        	//this.dsParam1.setColumn(0, "BUSINESS_TYPE", "U");
        	this.dsParam1.setColumn(0, "BUSINESS_TYPE", null);

        	var strSvcId 	= "goal";
        	var strSvcUrl 	= "nextService.do";
        	var inData 		= "dsGlobal=dsGlobal:A dsParam=dsParam1:A";
        	var outData 	= "dsOutput1=dsOutput";
        	var strArg 		= "jobCode=" + nexacro.wrapQuote("next");
        	strArg 			+= " trxCode=" + nexacro.wrapQuote("goal");
        	strArg 			+= " trxUrl=" + nexacro.wrapQuote("FrontControllerServlet.do?service=xupservice&domain=NEXTp&model=SR_SalesResultAnalysis_S01&format=xml&version=xplatform&compress=false");
        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, "fnCallback");
        };

        this.fnGetItemMonth = function()
        {
        	this.dsParam1.setColumn(0, "CONTRACT_TYPE", "S");
        	var strSvcId 	= "goal";
        	var strSvcUrl 	= "nextService.do";
        	var inData 		= "dsGlobal=dsGlobal:A dsParam=dsParam1:A";
        	var outData 	= "dsItemMon=dsOutput";
        	var strArg 		= "jobCode=" + nexacro.wrapQuote("next");
        	strArg 			+= " trxCode=" + nexacro.wrapQuote("itemmon");
        	strArg 			+= " trxUrl=" + nexacro.wrapQuote("FrontControllerServlet.do?service=xupservice&domain=NEXTp&model=SR_SalesResultAnalysis_S03&format=xml&version=xplatform&compress=false");
        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, "fnCallback");
        };

        this.fnGetItem = function(v)
        {
        	this.dsParam1.setColumn(0, "DEPT_LEVEL", v);
        	var strSvcId 	= "item";
        	var strSvcUrl 	= "nextService.do";
        	var inData 		= "dsGlobal=dsGlobal:A dsParam=dsParam1:A";
        	var outData 	= "dsItem=dsOutput";
        	var strArg 		= "jobCode=" + nexacro.wrapQuote("next");
        	strArg 			+= " trxCode=" + nexacro.wrapQuote("item");
        	strArg 			+= " trxUrl=" + nexacro.wrapQuote("FrontControllerServlet.do?service=xupservice&domain=NEXTp&model=SR_SalesResultAnalysis_S02&format=xml&version=xplatform&compress=false");

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
        			this.fvGoalCnt++;
        			if(this.fvGoalCnt >=2) {
        				this.fvGoalCnt = 0;
        				this.dsOutput1_00.copyData(this.dsOutput1);
        				this.fnGoalChart();
        			}
        			break;
        		default:
        			break;
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        // Goal
        this.fnGoalChart = function()
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
        	var result, preresult, name, goal, remain;
        	this.dsOutput1.set_enableevent(false);
        	for(var i=0, len=this.dsOutput1.rowcount;i<len; i++) {
        		result 		= this.dsOutput1.getColumn(i, "RESULT_Y");
        		preresult 	= this.dsOutput1.getColumn(i, "PRE_RESULT_Y");
        		name		= this.dsOutput1.getColumn(i, "TYPE_NM");
        		goal		= this.dsOutput1.getColumn(i, "GOAL_Y");

        		if(!result) this.dsOutput1.setColumn(i, "RESULT_Y", 0);
        		if(!preresult) this.dsOutput1.setColumn(i, "PRE_RESULT_Y", 0);

        		result 		= (!result?0:result.valueOf());
        		preresult 	= (!preresult?0:preresult.valueOf());
        		goal 		= (!goal?0:goal.valueOf());

        		chartdatas[i] = [result.formatWon(), preresult.formatWon()];
        		labels[i] = name;
        		tooltipstr = '<span style="font-size: 12pt;">' + name + '</span>%{key}';
        		tooltips.push(tooltipstr);
        		tooltips.push(tooltipstr);
        		nMax = Math.max(nMax, result.formatWon(), preresult.formatWon());

        		remain = (goal==0?0:(goal>result?goal.formatWon()-result.formatWon():0));
        		chartdatas2[i] = [result.formatWon(), remain];
        		labels2[i] = name;
        		tooltipstr = '<span style="font-size: 12pt;">' + name + '</span>%{key}';
        		tooltips2.push(tooltipstr);
        		tooltips2.push(tooltipstr);
        		nMax2 = Math.max(nMax2, result.formatWon(), remain);
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
        					tooltipsFormattedKeyLabels: [year+"년 : ", preyear+"년 : "],
        					tooltipsFormattedKeyColors: [colors[0], colors[1]]
        				};
        			console.log("#########2");
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

        	nH = chart.getOffsetHeight() - 60;
        	nOneGap = (nH / labels2.length) * 0.2;
        	nMax2 = nMax2 + 5;

        	this.gfnActiveStopChart(chart, chartdatas2, labels2, tooltips2, ['실적','목표'],
        							210,  nMax2);

        	this.dsOutput1.set_keystring("S:-RESULT_Y");
        	var chart = this.divChart01.form.ChartJS_vm;
        	this.fnShowResource(chart, "RESULT_Y");

        	this.dsOutput1.set_keystring("S:-PRE_RESULT_Y");
        	var chart2 = this.divChart01_00.form.ChartJS_vm;
        	this.fnShowResource(chart2, "PRE_RESULT_Y");
        };

        this.fnShowResource = function(chart, valCol) {

        	//--------------------------------------------------------------------
        	// CPU
        	//--------------------------------------------------------------------
        	var len = 5;
        	var rowcount = this.dsOutput1.rowcount-1;
        	var chartdatas = [];
        	var labels = [];
        	var tooltips = [];
        	var nMax = 0;
        	var name, used;

        	var svlabel;
        	for(var i=0; i<len; i++) {
        		if(i>rowcount) {
        			chartdatas.push(0);
        			labels.push("");
        			tooltips.push("");
        		} else {
        			name = this.dsOutput1.getColumn(i, "TYPE_NM");
        			used = nexacro.toNumber(this.dsOutput1.getColumn(i, valCol).valueOf().toFixed(2));
        			used = used.formatWon();
        			chartdatas.push(used);
        			labels.push(name);
        			tooltips.push('<b>' + name + '</b>%{key}');
        			nMax = Math.max(nMax, used);

        			svlabel = this.fnResourceTop5Status(i, this.dsOutput1.getColumn(i, "TYPE"), valCol);
        		}
        	}

        	var canvas = chart.getCanvas();
        	var cvs = canvas.id;
        	DxChart.reset(canvas);

        	var nH = chart.getOffsetHeight() - 60;
        	var nOneGap = (nH / labels.length) * 0.3;

        	nMax = nMax + 5;
        	var data1dummy = [];
         	for(var i=0;i<chartdatas.length;i++) {
         		data1dummy.push(nMax);
         	}

        	this.gfnTop5Chart(chart, chartdatas, data1dummy, labels, tooltips, nMax, "억");

        	var oTgtDiv;
        	if(valCol == "PRE_RESULT_Y") {
        		oTgtDiv = this.divChart01_00;
        	} else {
        		oTgtDiv = this.divChart01;
        	}

        	var param = {
        				xaxisUse : true,
        				shadowUse: false,
        				textColor: '#5F6368',
        				xaxisColor: '#5F6368',
        				xaxisLabels: svlabel,
        				marginBottom: 38,
        				marginLeft: 0,
        				marginRight: 0,
        				marginTop: 0,
        				filledUse: false,
        				xaxisTickmarks : true,
        				tooltips : '',
        				nodataShow : false
        	};
        	var options = this.gfnGetRChartOption("line", "fill1", param);
        	var oChart = oTgtDiv.form["ChartJS_cpu6"];
        	var canvas = oChart.getCanvas();
        	var cvs = canvas.id;
        	DxChart.reset(canvas);

        	var dummydatas 	= [0,0];
        	var myChart = new DxChartLine({
        		id: cvs,
        		elem : canvas,
        		data: dummydatas,
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

        	for(var i=0; i<rowcnt; i++) {
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
        		elem : canvas,
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
        	//this.fnGetData();
        	//this.reload();
        };

        this.divChart00_ChartJS_cpu_onmouseleave = function(obj,e)
        {

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
            this.divChart01.form.ChartJS_vm.addEventHandler("onmouseleave",this.divChart00_ChartJS_cpu_onmouseleave,this);
            this.divChart01.form.ChartJS_cpu1.addEventHandler("onmouseleave",this.divChart00_ChartJS_cpu_onmouseleave,this);
            this.divChart01.form.ChartJS_cpu2.addEventHandler("onmouseleave",this.divChart00_ChartJS_cpu_onmouseleave,this);
            this.divChart01.form.ChartJS_cpu3.addEventHandler("onmouseleave",this.divChart00_ChartJS_cpu_onmouseleave,this);
            this.divChart01.form.ChartJS_cpu4.addEventHandler("onmouseleave",this.divChart00_ChartJS_cpu_onmouseleave,this);
            this.divChart01.form.ChartJS_cpu5.addEventHandler("onmouseleave",this.divChart00_ChartJS_cpu_onmouseleave,this);
            this.divChart01_00.form.ChartJS_vm.addEventHandler("onmouseleave",this.divChart00_ChartJS_cpu_onmouseleave,this);
            this.divChart01_00.form.ChartJS_cpu1.addEventHandler("onmouseleave",this.divChart00_ChartJS_cpu_onmouseleave,this);
            this.divChart01_00.form.ChartJS_cpu2.addEventHandler("onmouseleave",this.divChart00_ChartJS_cpu_onmouseleave,this);
            this.divChart01_00.form.ChartJS_cpu3.addEventHandler("onmouseleave",this.divChart00_ChartJS_cpu_onmouseleave,this);
            this.divChart01_00.form.ChartJS_cpu4.addEventHandler("onmouseleave",this.divChart00_ChartJS_cpu_onmouseleave,this);
            this.divChart01_00.form.ChartJS_cpu5.addEventHandler("onmouseleave",this.divChart00_ChartJS_cpu_onmouseleave,this);
            this.cbo_type03.addEventHandler("onitemchanged",this.cbo_type03_onitemchanged,this);
            this.div00.form.grd00.addEventHandler("oncellclick",this.grd00_oncellclick,this);
            this.div00.form.grd00.addEventHandler("oncelldblclick",this.grd00_oncelldblclick,this);
        };
        this.loadIncludeScript("statusOP.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
