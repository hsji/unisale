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
                this._setFormPosition(1200,750);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsParam1", this);
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"START_MM\" type=\"STRING\" size=\"256\"/><Column id=\"END_MM\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_YEAR2\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"CONTRACT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRICE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput5", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"DEPT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CD_CODE\" type=\"string\" size=\"20\"/><Column id=\"CAPTION\" type=\"string\" size=\"100\"/><Column id=\"BUSINESS_TYPE\" type=\"string\" size=\"20\"/><Column id=\"GOAL\" type=\"bigdecimal\" size=\"20\"/><Column id=\"RESULT\" type=\"bigdecimal\" size=\"20\"/><Column id=\"GOAL_Y\" type=\"bigdecimal\" size=\"20\"/><Column id=\"RESULT_Y\" type=\"bigdecimal\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCustomer", this);
            obj._setContents("<ColumnInfo><Column id=\"CLIENT_CODE\" type=\"string\" size=\"20\"/><Column id=\"CLIENT_NAME\" type=\"string\" size=\"100\"/><Column id=\"PROJECT_CODE\" type=\"string\" size=\"15\"/><Column id=\"PROJECT_NAME\" type=\"string\" size=\"100\"/><Column id=\"EMP_NAME\" type=\"string\" size=\"255\"/><Column id=\"CONTRACT_PRICE\" type=\"bigdecimal\" size=\"20\"/><Column id=\"SUM_CONTRACT_PRICE\" type=\"bigdecimal\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPart", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProduct", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput1", this);
            obj._setContents("<ColumnInfo><Column id=\"PRODUCT_CODE\" type=\"string\" size=\"20\"/><Column id=\"PRODUCT_NAME\" type=\"string\" size=\"100\"/><Column id=\"AMOUNT_SUM\" type=\"bigdecimal\" size=\"20\"/><Column id=\"AMOUNT_CNT\" type=\"int\" size=\"11\"/><Column id=\"ORD\" type=\"string\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput2", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"DEPT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CD_CODE\" type=\"string\" size=\"20\"/><Column id=\"CAPTION\" type=\"string\" size=\"100\"/><Column id=\"BUSINESS_TYPE\" type=\"string\" size=\"20\"/><Column id=\"GOAL\" type=\"bigdecimal\" size=\"20\"/><Column id=\"RESULT\" type=\"bigdecimal\" size=\"20\"/><Column id=\"GOAL_Y\" type=\"bigdecimal\" size=\"20\"/><Column id=\"RESULT_Y\" type=\"bigdecimal\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput3", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"DEPT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CD_CODE\" type=\"string\" size=\"20\"/><Column id=\"CAPTION\" type=\"string\" size=\"100\"/><Column id=\"BUSINESS_TYPE\" type=\"string\" size=\"20\"/><Column id=\"GOAL\" type=\"bigdecimal\" size=\"20\"/><Column id=\"RESULT\" type=\"bigdecimal\" size=\"20\"/><Column id=\"GOAL_Y\" type=\"bigdecimal\" size=\"20\"/><Column id=\"RESULT_Y\" type=\"bigdecimal\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput4", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"DEPT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CD_CODE\" type=\"string\" size=\"20\"/><Column id=\"CAPTION\" type=\"string\" size=\"100\"/><Column id=\"BUSINESS_TYPE\" type=\"string\" size=\"20\"/><Column id=\"GOAL\" type=\"bigdecimal\" size=\"20\"/><Column id=\"RESULT\" type=\"bigdecimal\" size=\"20\"/><Column id=\"GOAL_Y\" type=\"bigdecimal\" size=\"20\"/><Column id=\"RESULT_Y\" type=\"bigdecimal\" size=\"20\"/></ColumnInfo>");
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
            obj.set_text("제품별 매출 비중");
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
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_text("연간 제품별 매출");
            this.divAlert.addChild(obj.name, obj);

            obj = new Div("div00","10","374",null,"353","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_MF_part");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_02_00_00","0","0",null,"34","0",null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("제품별 매출 현황");
            obj.set_cssclass("sta_WF_SchLabel");
            this.div00.addChild(obj.name, obj);

            obj = new Grid("grd00","10","41",null,null,"10","10",null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.getSetter("usecustomexpr").set("false");
            obj.set_nodataimage("url(\'theme://images/grd_NODATA.png\')");
            obj.set_cssclass("grd_WF_selected");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"262\"/><Column size=\"267\"/><Column size=\"173\"/><Column size=\"227\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"Product\" cssclass=\"grd_MF_roundL\"/><Cell col=\"1\" text=\"매출액\"/><Cell col=\"2\" text=\"건수\"/><Cell col=\"3\" text=\"비중\" cssclass=\"grd_MF_roundR\"/></Band><Band id=\"body\"><Cell text=\"bind:PRODUCT_NAME\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:AMOUNT_SUM\" displaytype=\"number\" combodataset=\"gdsType\" combocodecol=\"code\" combodatacol=\"name\" textAlign=\"right\" suppress=\"2\"/><Cell col=\"2\" displaytype=\"number\" combodataset=\"gdsStatus\" combocodecol=\"code\" combodatacol=\"name\" textAlign=\"right\" text=\"bind:AMOUNT_CNT\"/><Cell col=\"3\" textAlign=\"left\" displaytype=\"progressbarcontrol\" progressbarsmooth=\"true\" text=\"bind:PROGRESS\"/></Band></Format></Formats>");
            this.div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divDisk.form
            obj = new Layout("default","",0,0,this.divDisk.form,function(p){});
            this.divDisk.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAlert.form
            obj = new Layout("default","",0,0,this.divAlert.form,function(p){});
            this.divAlert.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1200,750,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("statusProduct.xfdl", function() {
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

        	this.fnGetCustomer();
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
        	this.gfnInitNextGlobalDataset(this.dsGlobal);

        	var year = this.gfnGetDate("year");
        	var preyear = (parseInt(year) - 1) + "";
        	var preyear2 = (parseInt(year) - 2) + "";
        	var preyear3 = (parseInt(year) - 3) + "";
        	this.dsParam1.setColumn(0, "YEAR", year);
        	this.dsParam1.setColumn(0, "PRE_YEAR", preyear);
        	this.dsParam1.setColumn(0, "PRE_YEAR2", preyear2);
        	this.dsParam1.setColumn(0, "START_MM", "01");
        	this.dsParam1.setColumn(0, "END_MM", "12");
        	this.dsParam1.setColumn(0, "BUSINESS_TYPE", "U");
        	this.dsParam1.setColumn(0, "BUSINESS_TYPE", null);

        	var strSvcId 	= "product";
        	var strSvcUrl 	= "nextService.do";
        	var inData 		= "dsGlobal=dsGlobal:A dsParam=dsParam1:A";
        	var outData 	= "dsOutput1=dsOutput1 dsOutput2=dsOutput2 dsOutput3=dsOutput3 dsOutput4=dsOutput4 dsOutput5=dsOutput5";
        	var strArg 		= "jobCode=" + nexacro.wrapQuote("next");
        	strArg 			+= " trxCode=" + nexacro.wrapQuote("product");
        	strArg 			+= " trxUrl=" + nexacro.wrapQuote("FrontControllerServlet.do?service=xupservice&domain=NEXTp&model=SR_SalesResultAnalysis_S05&format=xml&version=xplatform&compress=false");
        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, "fnCallback");

        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //transaction
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg, oJson)
        {
        	switch(sSvcId) {
        		case "product":
        			this.fnProductChart();
        			this.fnProductUsageChart();
        			break;

        		default:
        			break;
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /**
         * 항목 월별
         */
        this.fnProductChart = function ()
        {
        	// 용역,서비스,유지보수
        	var frm = this.divAlert.form;
        	var oChart = frm.ChartJS_node;

        	// next 금년데이터 이상함
        	var np = this.dsOutput1.getCaseSum("PRODUCT_NAME.indexOf('nexacro')>=0 || PRODUCT_NAME.indexOf('Nexacro')>=0", "AMOUNT_SUM");
        	var xp = this.dsOutput1.getCaseSum("PRODUCT_NAME.indexOf('XPLATFORM')>=0", "AMOUNT_SUM");
        	var mp = this.dsOutput1.getCaseSum("PRODUCT_NAME.indexOf('MiPlatform')>=0", "AMOUNT_SUM");

        	var nRow = this.dsOutput3.findRow("PRODUCT_CODE", "NP");
        	this.dsOutput3.setColumn(nRow, "AMOUNT_SUM", np);
        	nRow = this.dsOutput3.findRow("PRODUCT_CODE", "XP");
        	this.dsOutput3.setColumn(nRow, "AMOUNT_SUM", xp);
        	nRow = this.dsOutput3.findRow("PRODUCT_CODE", "MP");
        	this.dsOutput3.setColumn(nRow, "AMOUNT_SUM", mp);

        	var arrDs = [this.dsOutput5, this.dsOutput4, this.dsOutput3];
        	var arrPrdCode = [];
        	var arrPrdName = [];
        	var arrData = [];
        	var label = [];
        	var ds, prdcode,prdidx;
        	// 전전년 dsOutput5
        	for(var i=0,len=arrDs.length;i<len;i++) {
        		ds = arrDs[i];
        		for(var j=0,jlen=ds.rowcount;j<jlen;j++) {
        			prdcode = ds.getColumn(j, "PRODUCT_CODE");
        			if(arrPrdCode.indexOf(prdcode)<0) {
        				arrPrdCode.push(prdcode);
        				arrPrdName.push(ds.getColumn(j, "PRODUCT_NAME"));
        			}
        			prdidx = arrPrdCode.indexOf(prdcode);
        			if(!arrData[prdidx]) arrData[prdidx] = [];
        			arrData[prdidx][i] = ds.getColumn(j, "AMOUNT_SUM").valueOf().formatWon();
        		}
        	}
        	for(var i=0,len=arrPrdName.length;i<len;i++) {
        		label.push(arrPrdName[i]);
        	}
        	var label2 = [];
        	label2.push(this.dsParam1.getColumn(0, "PRE_YEAR2") + "년");
        	label2.push(this.dsParam1.getColumn(0, "PRE_YEAR") + "년");
        	label2.push(this.dsParam1.getColumn(0, "YEAR") + "년");

        	var arrColor2 = ["#fbdd15", "#4cabf4", "#96d922"];
        	var canvas = oChart.getCanvas();
        	var cvs = canvas.id;
        	DxChart.reset(canvas);

        	//var nW = this.divStorage.getOffsetWidth() - 10;
        	//var nChartLeft = oChart.getOffsetLeft();

            var options = {
                        backgroundGrid: false,
                        xaxisLabels: label,
                        colors: arrColor2,
                        shadowUse: true,
                        shadowStyle: '1 0 0 #aaaaaa',
                        colorsStroke: 'rgba(0,0,0,0)',
        				marginTop:             5,
        				marginBottom:          20,
        				marginLeft:            30,
        				marginRight:           5,
        				yaxisLabelsCount : 1,
        				yaxisLabelsSize : 8,
        				xaxisLabelsSize : 8,
        				xaxisColor : this.gfnChartColor("axis"),
        				xaxisLabelsColor :this.gfnChartColor("axislabel"),
        				yaxisLabelsColor :this.gfnChartColor("axislabel"),
        				yaxisUse : true,
        				title : '',
        				corners : 'round',
        				marginInner: 75,
                        marginInnerGrouped: 2,
        				tooltipsData: '',
        				keyData : label2,
        				//keyColors :arrColor2,
        				//keyLabelsColor : this.gfnChartColor("axislabel"),
        				//keyTextSize : 10,
        				//keyPositionX : 			oChart.getOffsetWidth() - 330,
        				tooltipsFormattedKeyLabels: label2,
        				tooltipsFormattedKeyColors : arrColor2,
        				tooltipsFormattedUnitsPost : '억',
        				tooltipsEvent: 'mousemove'
                    };
        	tooltips = [];
        	for(var i=0,len=arrData.length;i<len;i++) {
        		var a = arrData[i];
        		if(!a) a = [0,0,0];
        		tooltips.push('<span style="font-size: 9pt;">' + label[i] + '</span>%{key}');
        		tooltips.push('<span style="font-size: 9pt;">' + label[i] + '</span>%{key}');
        		tooltips.push('<span style="font-size: 9pt;">' + label[i] + '</span>%{key}');
        	}
        	if(arrData.length == 0) {
        		options.backgroundImageX = oChart.getOffsetWidth()/2 - 30;
        		options.backgroundImageY = oChart.getOffsetHeight()/2 - 10;
        		options.backgroundImage = './images/grd_NODATA.png';
        		options.backgroundImageStretch = false;
        	} else {
        		options.backgroundImage = null;
        	}
        	options.tooltipsData = tooltips;
            var nodechart = new DxChartBar({
                    id: cvs,
        			elem : canvas,
                    data: arrData,
                    options: options
                 }).draw();
        };

        /**
         * DISK USAGE TOP6
          * @return N/A
         */
        this.fnProductUsageChart = function() {
        	var nSum = this.dsOutput1.getSum("AMOUNT_SUM");
        	this.dsOutput1.set_keystring("S:-AMOUNT_SUM");
        	this.dsOutput1.addColumn("PROGRESS","decimal", 5);
        	var nPct,sName;
        	for(var i=0;i<6;i++) {
        		sName = this.dsOutput1.getColumn(i, "PRODUCT_NAME");
        		nPct = nexacro.toNumber(((this.dsOutput1.getColumn(i, "AMOUNT_SUM") / nSum) * 100).toFixed(2));
        		this.dsOutput1.setColumn(i, "PROGRESS",nPct);
        		this.fnProductUsageChartOne(i, sName, nPct);
        	}
        	this.div00.form.grd00.set_binddataset("dsOutput1");
        };

        /**
         * DISK USAGE TOP6
          * @return N/A
         */
        this.fnProductUsageChartOne = function(nCnt, sName, nPct) {
        	var oChart = this.divDisk.form["ChartJS_disk" + (nCnt+1)];
        	var nHeight = this.divDisk.form.ChartJS_disk1.getOffsetHeight();
        	var titleAccent = this.gfnChartColor("titleaccent");
        	var titleColor = this.gfnChartColor("titlecenter");
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
        						donutWidth: 20
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
        		//if(sName.length>15) sName = sName.substr(0,13) + "..";
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
            this.div00.form.grd00.addEventHandler("onmousemove",this.grd00_onmousemove,this);
        };
        this.loadIncludeScript("statusProduct.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
