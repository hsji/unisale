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
                this._setFormPosition(1050,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCodeStatus", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"name\">회사</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"name\">부분</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"name\">본부</Col></Row><Row><Col id=\"code\">4</Col><Col id=\"name\">그룹</Col></Row><Row><Col id=\"code\">5</Col><Col id=\"name\">팀</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsParam1", this);
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"START_MM\" type=\"STRING\" size=\"256\"/><Column id=\"END_MM\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_YEAR2\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"CONTRACT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRICE\" type=\"STRING\" size=\"256\"/><Column id=\"KIND\" type=\"STRING\" size=\"256\"/><Column id=\"UNIT\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"FORMAT\" type=\"STRING\" size=\"256\"/><Column id=\"END_MONTH\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"YEAR\"/><Col id=\"START_MM\"/><Col id=\"BUSINESS_TYPE\"/><Col id=\"PRE_YEAR2\"/><Col id=\"DEPT_LEVEL\"/><Col id=\"PRICE\"/><Col id=\"KIND\"/><Col id=\"TYPE\"/><Col id=\"PRE_YEAR\"/><Col id=\"END_MM\"/><Col id=\"CONTRACT_TYPE\"/><Col id=\"UNIT\"/><Col id=\"FORMAT\"/><Col id=\"END_MONTH\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput1", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"string\" size=\"10\"/><Column id=\"DEPT_CD\" type=\"string\" size=\"30\"/><Column id=\"DEPT_NAME\" type=\"string\" size=\"100\"/><Column id=\"EMP_NO\" type=\"string\" size=\"60\"/><Column id=\"EMP_NAME\" type=\"string\" size=\"255\"/><Column id=\"M_1\" type=\"int\" size=\"11\"/><Column id=\"M_2\" type=\"int\" size=\"11\"/><Column id=\"M_3\" type=\"int\" size=\"11\"/><Column id=\"M_4\" type=\"int\" size=\"11\"/><Column id=\"M_5\" type=\"int\" size=\"11\"/><Column id=\"M_6\" type=\"int\" size=\"11\"/><Column id=\"M_7\" type=\"int\" size=\"11\"/><Column id=\"M_8\" type=\"int\" size=\"11\"/><Column id=\"M_9\" type=\"int\" size=\"11\"/><Column id=\"M_10\" type=\"int\" size=\"11\"/><Column id=\"M_11\" type=\"int\" size=\"11\"/><Column id=\"M_12\" type=\"int\" size=\"11\"/><Column id=\"TOTALSUM\" type=\"int\" size=\"11\"/><Column id=\"DEPT_BOSS\" type=\"string\" size=\"255\"/><Column id=\"TOTALMONTH\" type=\"int\" size=\"11\"/></ColumnInfo>");
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
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"string\" size=\"10\"/><Column id=\"DEPT_CD\" type=\"string\" size=\"30\"/><Column id=\"DEPT_NAME\" type=\"string\" size=\"100\"/><Column id=\"EMP_NO\" type=\"string\" size=\"60\"/><Column id=\"EMP_NAME\" type=\"string\" size=\"255\"/><Column id=\"M_1\" type=\"int\" size=\"11\"/><Column id=\"M_2\" type=\"int\" size=\"11\"/><Column id=\"M_3\" type=\"int\" size=\"11\"/><Column id=\"M_4\" type=\"int\" size=\"11\"/><Column id=\"M_5\" type=\"int\" size=\"11\"/><Column id=\"M_6\" type=\"int\" size=\"11\"/><Column id=\"M_7\" type=\"int\" size=\"11\"/><Column id=\"M_8\" type=\"int\" size=\"11\"/><Column id=\"M_9\" type=\"int\" size=\"11\"/><Column id=\"M_10\" type=\"int\" size=\"11\"/><Column id=\"M_11\" type=\"int\" size=\"11\"/><Column id=\"M_12\" type=\"int\" size=\"11\"/><Column id=\"TOTALSUM\" type=\"int\" size=\"11\"/><Column id=\"DEPT_BOSS\" type=\"string\" size=\"255\"/><Column id=\"TOTALMONTH\" type=\"int\" size=\"11\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput3", this);
            obj._setContents("<ColumnInfo><Column id=\"CONTRACT_TYPE\" type=\"string\" size=\"40\"/><Column id=\"CONTRACT_TYPE_NAME\" type=\"string\" size=\"100\"/><Column id=\"CLIENT_CODE\" type=\"string\" size=\"20\"/><Column id=\"COMPANY_NAME\" type=\"string\" size=\"100\"/><Column id=\"INDUSTRY\" type=\"string\" size=\"100\"/><Column id=\"PROJECT_CODE\" type=\"string\" size=\"15\"/><Column id=\"PROJECT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CONTRACT_NO\" type=\"string\" size=\"20\"/><Column id=\"CONTRACT_NAME\" type=\"string\" size=\"100\"/><Column id=\"DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"DEPT_NAME\" type=\"string\" size=\"100\"/><Column id=\"SALES_EMP_NO\" type=\"string\" size=\"120\"/><Column id=\"SALES_EMP_NAME\" type=\"string\" size=\"255\"/><Column id=\"CL_01\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_02\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_03\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_04\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_05\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_06\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_07\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_08\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_09\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_10\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_11\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_12\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_H01\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_H02\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_Y\" type=\"bigdecimal\" size=\"40\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput1_01", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"string\" size=\"10\"/><Column id=\"DEPT_CD\" type=\"string\" size=\"30\"/><Column id=\"DEPT_NAME\" type=\"string\" size=\"100\"/><Column id=\"EMP_NO\" type=\"string\" size=\"60\"/><Column id=\"EMP_NAME\" type=\"string\" size=\"255\"/><Column id=\"M_1\" type=\"int\" size=\"11\"/><Column id=\"M_2\" type=\"int\" size=\"11\"/><Column id=\"M_3\" type=\"int\" size=\"11\"/><Column id=\"M_4\" type=\"int\" size=\"11\"/><Column id=\"M_5\" type=\"int\" size=\"11\"/><Column id=\"M_6\" type=\"int\" size=\"11\"/><Column id=\"M_7\" type=\"int\" size=\"11\"/><Column id=\"M_8\" type=\"int\" size=\"11\"/><Column id=\"M_9\" type=\"int\" size=\"11\"/><Column id=\"M_10\" type=\"int\" size=\"11\"/><Column id=\"M_11\" type=\"int\" size=\"11\"/><Column id=\"M_12\" type=\"int\" size=\"11\"/><Column id=\"TOTALSUM\" type=\"int\" size=\"11\"/><Column id=\"DEPT_BOSS\" type=\"string\" size=\"255\"/><Column id=\"TOTALMONTH\" type=\"int\" size=\"11\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput2_00", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"string\" size=\"10\"/><Column id=\"DEPT_CD\" type=\"string\" size=\"30\"/><Column id=\"DEPT_NAME\" type=\"string\" size=\"100\"/><Column id=\"EMP_NO\" type=\"string\" size=\"60\"/><Column id=\"EMP_NAME\" type=\"string\" size=\"255\"/><Column id=\"M_1\" type=\"int\" size=\"11\"/><Column id=\"M_2\" type=\"int\" size=\"11\"/><Column id=\"M_3\" type=\"int\" size=\"11\"/><Column id=\"M_4\" type=\"int\" size=\"11\"/><Column id=\"M_5\" type=\"int\" size=\"11\"/><Column id=\"M_6\" type=\"int\" size=\"11\"/><Column id=\"M_7\" type=\"int\" size=\"11\"/><Column id=\"M_8\" type=\"int\" size=\"11\"/><Column id=\"M_9\" type=\"int\" size=\"11\"/><Column id=\"M_10\" type=\"int\" size=\"11\"/><Column id=\"M_11\" type=\"int\" size=\"11\"/><Column id=\"M_12\" type=\"int\" size=\"11\"/><Column id=\"TOTALSUM\" type=\"int\" size=\"11\"/><Column id=\"DEPT_BOSS\" type=\"string\" size=\"255\"/><Column id=\"TOTALMONTH\" type=\"int\" size=\"11\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGlobal", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"string\" size=\"60\"/><Column id=\"EMP_NM\" type=\"string\" size=\"100\"/><Column id=\"DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"DEPT_NM\" type=\"string\" size=\"100\"/><Column id=\"EMAIL\" type=\"string\" size=\"268\"/><Column id=\"MOBILE\" type=\"string\" size=\"44\"/><Column id=\"OFFICE\" type=\"string\" size=\"20\"/><Column id=\"GRADE_CD\" type=\"string\" size=\"30\"/><Column id=\"GRADE_NM\" type=\"string\" size=\"100\"/><Column id=\"DUTY_CD\" type=\"string\" size=\"30\"/><Column id=\"DUTY_NM\" type=\"string\" size=\"100\"/><Column id=\"EMP_KIND\" type=\"string\" size=\"255\"/><Column id=\"CO_CD\" type=\"string\" size=\"30\"/><Column id=\"CO_NM\" type=\"string\" size=\"100\"/><Column id=\"LOGIN_SYS\" type=\"string\" size=\"10\"/><Column id=\"LANGUAGE\" type=\"string\" size=\"10\"/><Column id=\"MODEL_ID\" type=\"string\" size=\"50\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","0","0","329","43",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("월별 인력 가동 현황");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Div("divChart","0","sta00:0",null,"33.97%","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_MF_part");
            this.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS_vm","0","0",null,null,"0","0",null,null,null,null,this.divChart.form);
            obj.set_taborder("1");
            obj.set_text("ChartJS00");
            obj.set_border("1px solid #cccccc");
            this.divChart.addChild(obj.name, obj);

            obj = new Static("sta00_00","0","divChart:0","329","43",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("월별 인력 가동 현황 리스트");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","0","sta00_00:0",null,null,"20","10",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsOutput1_01");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_cssclass("grd_WF_selected");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"80\"/><Column size=\"74\"/><Column size=\"74\"/><Column size=\"74\"/><Column size=\"74\"/><Column size=\"74\"/><Column size=\"74\"/><Column size=\"74\"/><Column size=\"74\"/><Column size=\"74\"/><Column size=\"74\"/><Column size=\"74\"/><Column size=\"74\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"부서\" cssclass=\"grd_MF_roundL\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"1월\"/><Cell col=\"3\" text=\"2월\"/><Cell col=\"4\" text=\"3월\"/><Cell col=\"5\" text=\"4월\"/><Cell col=\"6\" text=\"5월\"/><Cell col=\"7\" text=\"6월\"/><Cell col=\"8\" text=\"7월\"/><Cell col=\"9\" text=\"8월\"/><Cell col=\"10\" text=\"9월\"/><Cell col=\"11\" text=\"10월\"/><Cell col=\"12\" text=\"11월\"/><Cell col=\"13\" text=\"12월\" cssclass=\"grd_MF_roundR\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_NAME\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:EMP_NAME\"/><Cell col=\"2\" text=\"bind:M_1\" displaytype=\"number\"/><Cell col=\"3\" text=\"bind:M_2\" displaytype=\"number\"/><Cell col=\"4\" text=\"bind:M_3\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:M_4\" displaytype=\"number\"/><Cell col=\"6\" text=\"bind:M_5\" displaytype=\"number\"/><Cell col=\"7\" text=\"bind:M_6\" displaytype=\"number\"/><Cell col=\"8\" text=\"bind:M_7\" displaytype=\"number\"/><Cell col=\"9\" text=\"bind:M_8\" displaytype=\"number\"/><Cell col=\"10\" text=\"bind:M_9\" displaytype=\"number\"/><Cell col=\"11\" text=\"bind:M_10\" displaytype=\"number\"/><Cell col=\"12\" text=\"bind:M_11\" displaytype=\"number\"/><Cell col=\"13\" text=\"bind:M_12\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divCmmnBtn",null,"divChart:8","131","28","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelDown",null,"0","119","28","0",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("0");
            obj.set_text("엑셀다운로드");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelSave");
            this.divCmmnBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divChart.form
            obj = new Layout("default","",0,0,this.divChart.form,function(p){});
            this.divChart.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCmmnBtn.form
            obj = new Layout("default","",0,0,this.divCmmnBtn.form,function(p){});
            this.divCmmnBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1050,736,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("resourceAllMan.xfdl", function() {
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
        	this.fnGetMonth();
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
        this.fnGetMonth = function()
        {
        	this.gfnInitNextGlobalDataset(this.dsGlobal);

        	var year = this.gfnGetDate("year");
        	var preyear = (parseInt(year) - 1) + "";

        	this.dsParam1.setColumn(0, "YEAR", year);
        	this.dsParam1.setColumn(0, "TYPE", "A");

        	this.dsParam1.applyChange();

        	var strSvcId 	= "month";
        	var strSvcUrl 	= "nextService.do";
        	var inData 		= "dsGlobal=dsGlobal:A dsParam=dsParam1:A";
        	var outData 	= "dsOutput1=dsOutput1";
        	var strArg 		= "trxUrl=" + nexacro.wrapQuote("FrontControllerServlet.do?service=xupservice&domain=NEXTp&model=TS_StaffOperationRate_S01&format=xml&version=xplatform&compress=false");
        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, "fnCallback");

        	this.dsParam1.setColumn(0, "YEAR", preyear);
        	this.dsParam1.setColumn(0, "TYPE", "A");
        	this.dsParam1.applyChange();

        	strSvcId 	= "month2";
        	strSvcUrl 	= "nextService.do";
        	outData 	= "dsOutput2=dsOutput1";
        	strArg 		= "trxUrl=" + nexacro.wrapQuote("FrontControllerServlet.do?service=xupservice&domain=NEXTp&model=TS_StaffOperationRate_S01&format=xml&version=xplatform&compress=false");
        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, "fnCallback");

        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //transaction
        this.fv_industrycnt = 0;
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg, oJson)
        {
        	switch(sSvcId) {
        		case "month":
        		case "month2":
        			this.fv_industrycnt++;
        			if(this.fv_industrycnt >=2) {
        				this.fv_industrycnt = 0;
        				this.fnIndustryList();
        			}
        			break;
        		default:
        			break;
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        this.fnIndustryList = function() {
        	this.dsOutput1_01.clearData();
        	this.dsOutput2_00.clearData();
        	var svEmp = "";
        	var emp;
        	this.dsOutput1.set_keystring("S:+EMP_NO");
        	this.dsOutput2.set_keystring("S:+EMP_NO");
        	for(var i=0,len=this.dsOutput1.rowcount;i<len;i++) {
        		emp = this.dsOutput1.getColumn(i, "EMP_NO");
        		if(svEmp != emp) {
        			var nRow = this.dsOutput1_01.addRow();
        			this.dsOutput1_01.copyRow(nRow, this.dsOutput1, i);
        		}
        		svEmp = emp;
        	}
        	svEmp = "";
        	for(var i=0,len=this.dsOutput2.rowcount;i<len;i++) {
        		emp = this.dsOutput2.getColumn(i, "EMP_NO");
        		if(svEmp != emp) {
        			var nRow = this.dsOutput2_00.addRow();
        			this.dsOutput2_00.copyRow(nRow, this.dsOutput2, i);
        		}
        		svEmp = emp;
        	}

        	var year = this.gfnGetDate("year");
        	var preyear = (parseInt(year) - 1) + "";

        	var chart = this.divChart.form.ChartJS_vm;
        	var canvas = chart.getCanvas();
        	var cvs = canvas.id;
        	DxChart.reset(canvas);

        	this.dsOutput1_01.set_keystring("S:+DEPT_CD+EMPNAME");
        	this.dsOutput1_01.set_rowposition(0);
        	var arrData = [];
        	var label = [];
        	var labelsInbarSpecificSum = [];
        	var mon = "";
        	var amt, goal, preamt, pregoal;
        	var tooltips = [];
        	for(var i=1;i<=12;i++) {
        		amt = this.dsOutput1_01.getSum("M_" + i).valueOf();
        		preamt = this.dsOutput2_00.getSum("M_" + i).valueOf();
        		arrData[i-1] = [preamt, amt];
        		labelsInbarSpecificSum.push(" " + preamt+"M/M" + " ");
        		labelsInbarSpecificSum.push(" " + amt+"M/M" + " ");
        		label[i-1] = (i + "월");
        		tooltips.push('<span style="font-size: 9pt;">' + (preyear + "/" + i) + '</span>%{key}');
        		tooltips.push('<span style="font-size: 9pt;">' + (year + "/" + i) + '</span>%{key}');
        	}

        	//var arrColor2 = ["#f36299","#cc62f3"];

        	var nW = this.divChart.getOffsetWidth() - 10;
        	var nChartLeft = chart.getOffsetLeft();

            var options = {
                        background: { Grid: false },
                        xaxis : {
        						Color : "#001933",
        						Labels: label,
        						LabelsFontStyle : "8px",
        						LabelsColor :	"#000066"
        				},
                        yaxis : {
        						Color : "#001933",
        						LabelsFontStyle : "8px",
        						LabelsColor :	"#000066",
        						LabelsCount : 1
        				},
                        //colors: arrColor2,
                        shadow: {
        						Use : true,
        						Style: "2 0 0 #aaaaaa"
        				},
                        colorsStroke: 'rgba(0,0,0,0)',
        				corners : 'round',
        				labels : {
        						Ingraph : labelsInbarSpecificSum,
        						IngraphFontStyle: "bold 8px #000000",
        						IngraphColor: "#004c96"
        				},
        				title : { Text :'' },
                        margin: {
        					Top:             10,
        					Bottom:          20,
        					Left:            30,
        					Right:           5,
        					Inner : 30,
        					InnerGrouped: 1
        				},
        				key: {
        						Data : [preyear+"년", year+"년"],
        						TextStyle : "10px",
        						Position: 'margin',
        						LabelsFontStyle : "bold 10px",
        						//Valign : 'top',
        						//Halign : 'right',
        						//PositionX : 			chart.getOffsetWidth() - 230,
        						PositionY : 			10
        						//LabelsColor : this.gfnChartColor("axislabel"),
        				},
        				tooltips: {
        					Data : tooltips,
        					FormattedKeyLabels: ['작년 : ','올해 : '],
        					//FormattedKeyColors : arrColor2,
        					Event: 'mousemove'
        				}
                    };
        	if(arrData.length == 0) {
        		options.backgroundImageX = this.divChart.getOffsetWidth()/2 - 30;
        		options.backgroundImageY = this.divChart.getOffsetHeight()/2 - 10;
        		options.backgroundImage = './images/grd_NODATA.png';
        		options.backgroundImageStretch = false;
        	} else {
        		options.backgroundImage = null;
        	}

            var chartBar = new DxChartBar({
                    id: cvs,
        			elem : canvas,
                    data: arrData,
                    options: options
                 }).draw();

        	this.dsOutput1_01.set_rowposition(0);
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

        this.divCmmnBtn_btnExcelDown_onclick = function(obj,e)
        {
        	// 엑셀 상단 타이틀 텍스트 설정
        	var sSubTitle = this.sta00_00.text;

        	// Excel Export 공통함수 호출
        	this.gfnExcelExport(this.grd00, sSubTitle, sSubTitle, "EXCEL2007","",sSubTitle, true, "");
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
            this.divCmmnBtn.form.btnExcelDown.addEventHandler("onclick",this.divCmmnBtn_btnExcelDown_onclick,this);
        };
        this.loadIncludeScript("resourceAllMan.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
