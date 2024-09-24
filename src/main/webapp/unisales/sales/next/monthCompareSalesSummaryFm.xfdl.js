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
                this._setFormPosition(1200,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsParam1", this);
            obj._setContents("<ColumnInfo><Column id=\"TYPE\" type=\"string\" size=\"256\"/><Column id=\"FORMAT\" type=\"string\" size=\"256\"/><Column id=\"END_MONTH\" type=\"string\" size=\"256\"/><Column id=\"DEPT_LEVEL\" type=\"string\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TYPE\">TAX</Col><Col id=\"DEPT_LEVEL\">1</Col><Col id=\"FORMAT\">EMP</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput", this);
            obj._setContents("<ColumnInfo><Column id=\"CONTRACT_TYPE\" type=\"string\" size=\"40\"/><Column id=\"CONTRACT_TYPE_NAME\" type=\"string\" size=\"100\"/><Column id=\"CLIENT_CODE\" type=\"string\" size=\"20\"/><Column id=\"COMPANY_NAME\" type=\"string\" size=\"100\"/><Column id=\"INDUSTRY\" type=\"string\" size=\"100\"/><Column id=\"PROJECT_CODE\" type=\"string\" size=\"15\"/><Column id=\"PROJECT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CONTRACT_NO\" type=\"string\" size=\"20\"/><Column id=\"CONTRACT_NAME\" type=\"string\" size=\"100\"/><Column id=\"DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"DEPT_NAME\" type=\"string\" size=\"100\"/><Column id=\"SALES_EMP_NO\" type=\"string\" size=\"120\"/><Column id=\"SALES_EMP_NAME\" type=\"string\" size=\"255\"/><Column id=\"CL_01\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_02\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_03\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_04\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_05\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_06\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_07\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_08\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_09\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_10\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_11\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_12\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_H01\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_H02\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_Y\" type=\"bigdecimal\" size=\"40\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsItem", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"DEPT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CD_CODE\" type=\"string\" size=\"20\"/><Column id=\"CAPTION\" type=\"string\" size=\"100\"/><Column id=\"BUSINESS_TYPE\" type=\"string\" size=\"20\"/><Column id=\"GOAL\" type=\"bigdecimal\" size=\"20\"/><Column id=\"RESULT\" type=\"bigdecimal\" size=\"20\"/><Column id=\"GOAL_Y\" type=\"bigdecimal\" size=\"20\"/><Column id=\"RESULT_Y\" type=\"bigdecimal\" size=\"20\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGlobal", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"string\" size=\"60\"/><Column id=\"EMP_NM\" type=\"string\" size=\"100\"/><Column id=\"DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"DEPT_NM\" type=\"string\" size=\"100\"/><Column id=\"EMAIL\" type=\"string\" size=\"268\"/><Column id=\"MOBILE\" type=\"string\" size=\"44\"/><Column id=\"OFFICE\" type=\"string\" size=\"20\"/><Column id=\"GRADE_CD\" type=\"string\" size=\"30\"/><Column id=\"GRADE_NM\" type=\"string\" size=\"100\"/><Column id=\"DUTY_CD\" type=\"string\" size=\"30\"/><Column id=\"DUTY_NM\" type=\"string\" size=\"100\"/><Column id=\"EMP_KIND\" type=\"string\" size=\"255\"/><Column id=\"CO_CD\" type=\"string\" size=\"30\"/><Column id=\"CO_NM\" type=\"string\" size=\"100\"/><Column id=\"LOGIN_SYS\" type=\"string\" size=\"10\"/><Column id=\"LANGUAGE\" type=\"string\" size=\"10\"/><Column id=\"MODEL_ID\" type=\"string\" size=\"50\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCode", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">EMP</Col><Col id=\"NAME\">담당자별</Col></Row><Row><Col id=\"CODE\">DEPT</Col><Col id=\"NAME\">부서별</Col></Row><Row><Col id=\"CODE\">CLIENT</Col><Col id=\"NAME\">고객사별</Col></Row><Row><Col id=\"CODE\">PROJECT</Col><Col id=\"NAME\">프로젝트별</Col></Row><Row><Col id=\"CODE\">CONTRACT</Col><Col id=\"NAME\">계약별</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput1", this);
            obj._setContents("<ColumnInfo><Column id=\"CONTRACT_TYPE\" type=\"string\" size=\"40\"/><Column id=\"CONTRACT_TYPE_NAME\" type=\"string\" size=\"100\"/><Column id=\"CLIENT_CODE\" type=\"string\" size=\"20\"/><Column id=\"COMPANY_NAME\" type=\"string\" size=\"100\"/><Column id=\"INDUSTRY\" type=\"string\" size=\"100\"/><Column id=\"PROJECT_CODE\" type=\"string\" size=\"15\"/><Column id=\"PROJECT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CONTRACT_NO\" type=\"string\" size=\"20\"/><Column id=\"CONTRACT_NAME\" type=\"string\" size=\"100\"/><Column id=\"DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"DEPT_NAME\" type=\"string\" size=\"100\"/><Column id=\"SALES_EMP_NO\" type=\"string\" size=\"120\"/><Column id=\"SALES_EMP_NAME\" type=\"string\" size=\"255\"/><Column id=\"CL_01\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_02\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_03\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_04\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_05\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_06\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_07\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_08\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_09\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_10\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_11\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_12\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_H01\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_H02\" type=\"bigdecimal\" size=\"40\"/><Column id=\"CL_Y\" type=\"bigdecimal\" size=\"40\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsParam2", this);
            obj._setContents("<ColumnInfo><Column id=\"KIND\" type=\"string\" size=\"256\"/><Column id=\"YEAR\" type=\"string\" size=\"256\"/><Column id=\"DEPT_LEVEL\" type=\"string\" size=\"256\"/><Column id=\"BUSINESS_TYPE\" type=\"string\" size=\"256\"/><Column id=\"UNIT\" type=\"string\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_LEVEL\">1</Col><Col id=\"UNIT\">1</Col><Col id=\"KIND\">E</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSum", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"string\" size=\"100\"/><Column id=\"EMP_NAME\" type=\"string\" size=\"255\"/><Column id=\"DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"DEPT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CONTRACT_TYPE\" type=\"string\" size=\"20\"/><Column id=\"CONTRACT_TYPE_NAME\" type=\"string\" size=\"100\"/><Column id=\"CL_01\" type=\"bigdecimal\" size=\"13\"/><Column id=\"CL_02\" type=\"bigdecimal\" size=\"13\"/><Column id=\"CL_03\" type=\"bigdecimal\" size=\"13\"/><Column id=\"CL_04\" type=\"bigdecimal\" size=\"13\"/><Column id=\"CL_05\" type=\"bigdecimal\" size=\"13\"/><Column id=\"CL_06\" type=\"bigdecimal\" size=\"13\"/><Column id=\"CL_07\" type=\"bigdecimal\" size=\"13\"/><Column id=\"CL_08\" type=\"bigdecimal\" size=\"13\"/><Column id=\"CL_09\" type=\"bigdecimal\" size=\"13\"/><Column id=\"CL_10\" type=\"bigdecimal\" size=\"13\"/><Column id=\"CL_11\" type=\"bigdecimal\" size=\"13\"/><Column id=\"CL_12\" type=\"bigdecimal\" size=\"13\"/><Column id=\"CL_Y\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_01\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_02\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_03\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_04\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_05\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_06\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_07\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_08\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_09\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_10\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_11\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_12\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_Y\" type=\"bigdecimal\" size=\"13\"/><Column id=\"ORD\" type=\"string\" size=\"10\"/><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","10.00","10",null,"50","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","11","101","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("기준년도");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo01","56","-158","185","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch_form_Combo01_innerdataset = new nexacro.NormalDataset("divSearch_form_Combo01_innerdataset", obj);
            divSearch_form_Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_Combo01_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo02","282","-158","185","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch_form_Combo02_innerdataset = new nexacro.NormalDataset("divSearch_form_Combo02_innerdataset", obj);
            divSearch_form_Combo02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_Combo02_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo03","521","-158","184","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch_form_Combo03_innerdataset = new nexacro.NormalDataset("divSearch_form_Combo03_innerdataset", obj);
            divSearch_form_Combo03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_Combo03_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","785","-158","184","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_value("20190308");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10","48","28","25",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("calMonth","staTitle00:0","10","114","27",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy");
            obj.set_editformat("yyyy");
            obj.set_type("spin");
            this.divSearch.addChild(obj.name, obj);

            obj = new Grid("grdList","10","100",null,null,"10","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsSum");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"118\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"158\"/><Column size=\"150\"/><Column size=\"150\" band=\"right\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"년도\" TL_SEQ=\"74\"/><Cell col=\"1\" text=\"분류\" TL_SEQ=\"74\"/><Cell col=\"2\" text=\"1월\" TL_SEQ=\"477\"/><Cell col=\"3\" text=\"2월\" TL_SEQ=\"478\"/><Cell col=\"4\" text=\"3월\" TL_SEQ=\"479\"/><Cell col=\"5\" text=\"4월\" TL_SEQ=\"480\"/><Cell col=\"6\" text=\"5월\" TL_SEQ=\"481\"/><Cell col=\"7\" text=\"6월\" TL_SEQ=\"482\"/><Cell col=\"8\" text=\"7월\" TL_SEQ=\"483\"/><Cell col=\"9\" text=\"8월\" TL_SEQ=\"484\"/><Cell col=\"10\" text=\"9월\" TL_SEQ=\"485\"/><Cell col=\"11\" text=\"10월\" TL_SEQ=\"486\"/><Cell col=\"12\" text=\"11월\" TL_SEQ=\"487\"/><Cell col=\"13\" text=\"12월\" TL_SEQ=\"488\"/><Cell col=\"14\" text=\"년합계\" TL_SEQ=\"2288\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" text=\"bind:YEAR\"/><Cell col=\"1\" text=\"실적\"/><Cell col=\"2\" text=\"bind:CL_01\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,#0\"/><Cell col=\"3\" text=\"bind:CL_02\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,#0\"/><Cell col=\"4\" text=\"bind:CL_03\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,#0\"/><Cell col=\"5\" text=\"bind:CL_04\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,#0\"/><Cell col=\"6\" text=\"bind:CL_05\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,#0\"/><Cell col=\"7\" text=\"bind:CL_06\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,#0\"/><Cell col=\"8\" text=\"bind:CL_07\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,#0\"/><Cell col=\"9\" text=\"bind:CL_08\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,#0\"/><Cell col=\"10\" text=\"bind:CL_09\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,#0\"/><Cell col=\"11\" text=\"bind:CL_10\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,#0\"/><Cell col=\"12\" textAlign=\"right\" text=\"bind:CL_11\" displaytype=\"mask\" maskeditformat=\"#,#0\"/><Cell col=\"13\" text=\"bind:CL_12\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,#0\"/><Cell col=\"14\" text=\"bind:CL_Y\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,#0\"/><Cell row=\"1\" col=\"1\" text=\"목표\"/><Cell row=\"1\" col=\"2\" text=\"bind:SG_01\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,#0\"/><Cell row=\"1\" col=\"3\" text=\"bind:SG_02\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,#0\"/><Cell row=\"1\" col=\"4\" text=\"bind:SG_03\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,#0\"/><Cell row=\"1\" col=\"5\" text=\"bind:SG_04\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,#0\"/><Cell row=\"1\" col=\"6\" text=\"bind:SG_05\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,#0\"/><Cell row=\"1\" col=\"7\" text=\"bind:SG_06\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,#0\"/><Cell row=\"1\" col=\"8\" text=\"bind:SG_07\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,#0\"/><Cell row=\"1\" col=\"9\" text=\"bind:SG_08\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,#0\"/><Cell row=\"1\" col=\"10\" text=\"bind:SG_09\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,#0\"/><Cell row=\"1\" col=\"11\" text=\"bind:SG_10\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,#0\"/><Cell row=\"1\" col=\"12\" textAlign=\"right\" text=\"bind:SG_11\" displaytype=\"mask\" maskeditformat=\"#,#0\"/><Cell row=\"1\" col=\"13\" text=\"bind:SG_12\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,#0\"/><Cell row=\"1\" col=\"14\" text=\"bind:SG_Y\" textAlign=\"right\" displaytype=\"mask\" maskeditformat=\"#,#0\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" TL_SEQ=\"437\" text=\"전년대비 실적\"/><Cell col=\"2\" expr=\"dataset.parent.fnGetData2(&quot;01&quot;)\" textAlign=\"right\" maskeditformat=\"#,#0\" background=\"#FFFF00\"/><Cell col=\"3\" expr=\"dataset.parent.fnGetData2(&quot;02&quot;)\" textAlign=\"right\" maskeditformat=\"#,#0\" background=\"#FFFF00\"/><Cell col=\"4\" expr=\"dataset.parent.fnGetData2(&quot;03&quot;)\" textAlign=\"right\" maskeditformat=\"#,#0\" background=\"#FFFF00\"/><Cell col=\"5\" expr=\"dataset.parent.fnGetData2(&quot;04&quot;)\" textAlign=\"right\" maskeditformat=\"#,#0\" background=\"#FFFF00\"/><Cell col=\"6\" expr=\"dataset.parent.fnGetData2(&quot;05&quot;)\" textAlign=\"right\" maskeditformat=\"#,#0\" background=\"#FFFF00\"/><Cell col=\"7\" expr=\"dataset.parent.fnGetData2(&quot;06&quot;)\" textAlign=\"right\" maskeditformat=\"#,#0\" background=\"#FFFF00\"/><Cell col=\"8\" expr=\"dataset.parent.fnGetData2(&quot;07&quot;)\" textAlign=\"right\" maskeditformat=\"#,#0\" background=\"#FFFF00\"/><Cell col=\"9\" expr=\"dataset.parent.fnGetData2(&quot;08&quot;)\" textAlign=\"right\" maskeditformat=\"#,#0\" background=\"#FFFF00\"/><Cell col=\"10\" expr=\"dataset.parent.fnGetData2(&quot;09&quot;)\" textAlign=\"right\" maskeditformat=\"#,#0\" background=\"#FFFF00\"/><Cell col=\"11\" expr=\"dataset.parent.fnGetData2(&quot;10&quot;)\" textAlign=\"right\" maskeditformat=\"#,#0\" background=\"#FFFF00\"/><Cell col=\"12\" textAlign=\"right\" expr=\"dataset.parent.fnGetData2(&quot;11&quot;)\" maskeditformat=\"#,#0\" background=\"#FFFF00\"/><Cell col=\"13\" expr=\"dataset.parent.fnGetData2(&quot;12&quot;)\" textAlign=\"right\" maskeditformat=\"#,#0\" background=\"#FFFF00\"/><Cell col=\"14\" expr=\"dataset.parent.fnGetData2(&quot;Y&quot;)\" textAlign=\"right\" maskeditformat=\"#,#0\" background=\"#FFFF00\"/><Cell row=\"1\" colspan=\"2\" text=\"목표대비 실적\"/><Cell row=\"1\" col=\"2\" expr=\"dataset.parent.fnGetData(&quot;01&quot;)\" textAlign=\"right\" maskeditformat=\"#,#0\" background=\"#FFFF00\"/><Cell row=\"1\" col=\"3\" expr=\"dataset.parent.fnGetData(&quot;02&quot;)\" textAlign=\"right\" maskeditformat=\"#,#0\" background=\"#FFFF00\"/><Cell row=\"1\" col=\"4\" expr=\"dataset.parent.fnGetData(&quot;03&quot;)\" textAlign=\"right\" maskeditformat=\"#,#0\" background=\"#FFFF00\"/><Cell row=\"1\" col=\"5\" expr=\"dataset.parent.fnGetData(&quot;04&quot;)\" textAlign=\"right\" maskeditformat=\"#,#0\" background=\"#FFFF00\"/><Cell row=\"1\" col=\"6\" expr=\"dataset.parent.fnGetData(&quot;05&quot;)\" textAlign=\"right\" maskeditformat=\"#,#0\" background=\"#FFFF00\"/><Cell row=\"1\" col=\"7\" expr=\"dataset.parent.fnGetData(&quot;06&quot;)\" textAlign=\"right\" maskeditformat=\"#,#0\" background=\"#FFFF00\"/><Cell row=\"1\" col=\"8\" expr=\"dataset.parent.fnGetData(&quot;07&quot;)\" textAlign=\"right\" maskeditformat=\"#,#0\" background=\"#FFFF00\"/><Cell row=\"1\" col=\"9\" expr=\"dataset.parent.fnGetData(&quot;08&quot;)\" textAlign=\"right\" maskeditformat=\"#,#0\" background=\"#FFFF00\"/><Cell row=\"1\" col=\"10\" expr=\"dataset.parent.fnGetData(&quot;09&quot;)\" textAlign=\"right\" maskeditformat=\"#,#0\" background=\"#FFFF00\"/><Cell row=\"1\" col=\"11\" expr=\"dataset.parent.fnGetData(&quot;10&quot;)\" textAlign=\"right\" maskeditformat=\"#,#0\" background=\"#FFFF00\"/><Cell row=\"1\" col=\"12\" textAlign=\"right\" expr=\"dataset.parent.fnGetData(&quot;11&quot;)\" maskeditformat=\"#,#0\" background=\"#FFFF00\"/><Cell row=\"1\" col=\"13\" expr=\"dataset.parent.fnGetData(&quot;12&quot;)\" textAlign=\"right\" maskeditformat=\"#,#0\" background=\"#FFFF00\"/><Cell row=\"1\" col=\"14\" expr=\"dataset.parent.fnGetData(&quot;Y&quot;)\" textAlign=\"right\" maskeditformat=\"#,#0\" background=\"#FFFF00\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelDown",null,"66","119","28","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("엑셀다운로드");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelSave");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","10","55","650","45",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("영업일(계약일) 기준 매출현황");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1200,736,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item6","divSearch.form.cboType","value","dsParam1","FORMAT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("monthCompareSalesSummaryFm.xfdl", function() {
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
        this.fvCurYear = "";
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj);

        	var date = this.gfnGetDate();
        	this.fvCurYear = date.substr(0,4);
        	this.divSearch.form.calMonth.set_value(this.fvCurYear + "1231");

        	this.staTitle01.set_text(date.substr(0,4) + "년도 영업일(계약일) 기준 매출 비교 현황");
        };

        //조회
        this.cfnSearch = function ()
        {
        	this.fnTranSearch();
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
        this.fnTranSearch = function()
        {
        	this.fvAddTranCnt = 0;

        	this.dsOutput.clearData();
        	this.dsOutput1.clearData();
        	this.dsSum.clearData();

        	this.grdList.set_binddataset("");

        	this.gfnInitNextGlobalDataset(this.dsGlobal);

        	var selDate = this.divSearch.form.calMonth.value;
        	var selYear = selDate.substr(0,4);
        	this.fvCurYear = selYear;
        	this.dsParam2.setColumn(0, "YEAR", selYear);
        	this.dsParam2.applyChange();

        	// https://nextcns.tobesoft.com/FrontControllerServlet.do?service=xupservice&domain=NEXTp&model=MI_SalesMonthly_S01&format=xml&version=xplatform&compress=false HTTP/1.1
        	var strSvcId 	= "month1";
        	var strSvcUrl 	= "nextService.do";
        	var inData 		= "dsGlobal=dsGlobal:A dsParam=dsParam2:A";
        	var outData 	= "dsOutput=dsOutput";
        	var strArg 		= "trxUrl=" + nexacro.wrapQuote("FrontControllerServlet.do?service=xupservice&domain=NEXTp&model=MI_TargetVsResults_S01&format=xml&version=xplatform&compress=false");
        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, "fnCallback");

        	var preYear = parseInt(selYear) - 1;
        	this.dsParam2.setColumn(0, "YEAR", preYear+"");
        	this.dsParam2.applyChange();

        	// https://nextcns.tobesoft.com/FrontControllerServlet.do?service=xupservice&domain=NEXTp&model=MI_SalesMonthly_S01&format=xml&version=xplatform&compress=false HTTP/1.1
        	var strSvcId 	= "month2";
        	var strSvcUrl 	= "nextService.do";
        	var inData 		= "dsGlobal=dsGlobal:A dsParam=dsParam2:A";
        	var outData 	= "dsOutput1=dsOutput";
        	var strArg 		= "trxUrl=" + nexacro.wrapQuote("FrontControllerServlet.do?service=xupservice&domain=NEXTp&model=MI_TargetVsResults_S01&format=xml&version=xplatform&compress=false");
        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, "fnCallback");

        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //transaction
        this.fvAddTranCnt = 0;
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg, oJson)
        {
        	switch(sSvcId) {
        		case "month1":
        			this.fnSum1();
        			this.fvAddTranCnt++;
        			if(this.fvAddTranCnt >= 2) {
        				this.grdList.set_binddataset("dsSum");
        				this.fvAddTranCnt = 0;
        			}
        			break;
        		case "month2":
        			this.fnSum2();
        			this.fvAddTranCnt++;
        			if(this.fvAddTranCnt >= 2) {
        				this.grdList.set_binddataset("dsSum");
        				this.fvAddTranCnt = 0;
        			}
        			break;
        		default:
        			break;
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.fnSum1 = function ()
        {
        	if(this.dsOutput.rowcount == 0) return;

        	var selDate = this.divSearch.form.calMonth.value;
        	var selYear = selDate.substr(0,4);

        	var colname = "", nSum = 0, nAddSum=0;
        	var nRow = this.dsSum.addRow();
        	this.dsSum.setColumn(nRow, "YEAR", selYear);

        	for(var j=1;j<=12;j++) {
        		colname = "CL_" + (j+"").padLeft(2, '0');	// 실적
        		nSum = this.dsOutput.getSum(colname) || 0;
        		nAddSum += nSum;
        		this.dsSum.setColumn(nRow, colname, nSum);
        	}
        	this.dsSum.setColumn(nRow, "CL_Y", nAddSum);

        	nSum = 0, nAddSum = 0;
        	//nRow = this.dsSum.addRow();
        	for(var j=1;j<=12;j++) {
        		colname = "SG_" + (j+"").padLeft(2, '0');	// 목표
        		nSum = this.dsOutput.getSum(colname);
        		nAddSum += nSum;
        		this.dsSum.setColumn(nRow, colname, nSum);
        	}
        	this.dsSum.setColumn(nRow, "SG_Y", nAddSum);

        };

        this.fnSum2 = function ()
        {
        	if(this.dsOutput1.rowcount == 0) return;

        	var selDate = this.divSearch.form.calMonth.value;
        	var selYear = selDate.substr(0,4);
        	selYear = (parseInt(selYear)-1) + "";
        	var colname = "", nSum = 0, nAddSum=0;
        	var nRow = this.dsSum.addRow();
        	this.dsSum.setColumn(nRow, "YEAR", selYear);

        	for(var j=1;j<=12;j++) {
        		colname = "CL_" + (j+"").padLeft(2, '0');	// 실적
        		nSum = this.dsOutput1.getSum(colname) || 0;
        		nAddSum += nSum;
        		this.dsSum.setColumn(nRow, colname, nSum);
        	}
        	this.dsSum.setColumn(nRow, "CL_Y", nAddSum);

        	nSum = 0, nAddSum = 0;
        	//nRow = this.dsSum.addRow();
        	for(var j=1;j<=12;j++) {
        		colname = "SG_" + (j+"").padLeft(2, '0');	// 목표
        		nSum = this.dsOutput1.getSum(colname);
        		nAddSum += nSum;
        		this.dsSum.setColumn(nRow, colname, nSum);
        	}
        	this.dsSum.setColumn(nRow, "SG_Y", nAddSum);

        };

        // 목대비매출실적
        this.fnGetData = function(val) {
        	var ds = this.dsSum;
        	if(ds.rowcount == 0) return "";
        	var tcol = "SG_" + val;
        	var gcol = "CL_" + val;

        	// 전년매출 - 귀차나 sum으로 대충...
        	var preYearSum = ds.getCaseSum("YEAR=='" + this.fvCurYear + "'", tcol);
        	var curYearSum = ds.getCaseSum("YEAR=='" + this.fvCurYear + "'", gcol);
        	if(preYearSum.valueOf() == 0) return "-";

        	return nexacro.round((curYearSum/preYearSum)*100,1) + "%";
        };

        // 전년대비매출실적
        this.fnGetData2 = function(val) {
        	var ds = this.dsSum;
        	if(ds.rowcount == 0) return "";
        	//var tcol = "SG_" + val;
        	var gcol = "CL_" + val;

        	var preYear = (parseInt(this.fvCurYear) - 1) + "";
        	// 전년매출
        	var preYearSum = ds.getCaseSum("YEAR=='" + preYear + "'", gcol);
        	var curYearSum = ds.getCaseSum("YEAR=='" + this.fvCurYear + "'", gcol);
        	if(preYearSum.valueOf() == 0) return "-";

        	return nexacro.round((curYearSum/preYearSum)*100,1) + "%";
        };

        this.divCmmnBtn_btnExcelDown_onclick = function(obj,e)
        {
        	// 엑셀 상단 타이틀 텍스트 설정
        	var sSubTitle = this.staTitle01.text;

        	// Excel Export 공통함수 호출
        	this.gfnExcelExport(this.grdList, sSubTitle, sSubTitle, "EXCEL2007","",sSubTitle, true, "");
        };

        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.cfnSearch();
        };

        // 구분 변경
        this.divSearch_cboType_onitemchanged = function(obj,e)
        {
        	this.grdList.set_formatid(e.postvalue);
        	this.dsOutput.clearData();
        };

        this.divSearch_calMonth_onspin = function(obj,e)
        {
        	this.dsOutput.clearData();
        	this.dsOutput1.clearData();
        	this.dsSum.clearData();
        	this.staTitle01.set_text(e.postvalue.substr(0,4) + "년도 영업일(계약일) 기준 매출 비교 현황");
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.addEventHandler("onkeydown",this.frmMain_onkeydown,this);
            this.addEventHandler("ontimer",this.frmMain_ontimer,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.divSearch.form.calMonth.addEventHandler("onspin",this.divSearch_calMonth_onspin,this);
            this.btnExcelDown.addEventHandler("onclick",this.divCmmnBtn_btnExcelDown_onclick,this);
        };
        this.loadIncludeScript("monthCompareSalesSummaryFm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
