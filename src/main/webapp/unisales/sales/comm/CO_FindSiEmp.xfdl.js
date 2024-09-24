(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CO_FindSiEmp");
            this.set_titletext("투입인력 선택");
            this.set_cssclass("frm_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Orgran", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CODE\" type=\"STRING\" size=\"20\"/><Column id=\"COMPANY_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"EMP_CNT\" type=\"INT\" size=\"11\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Emp", this);
            obj._setContents("<ColumnInfo><Column id=\"CO_CD\" type=\"STRING\" size=\"60\"/><Column id=\"COMPANY_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"PSE_CNT\" type=\"INT\" size=\"11\"/><Column id=\"PROJECT_CODE\" type=\"STRING\" size=\"15\"/><Column id=\"PROJECT_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"RECENT_PSE\" type=\"STRING\" size=\"126\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Pse", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"CLIENT_CODE\" type=\"STRING\" size=\"20\"/><Column id=\"CLIENT_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"PROJECT_CODE\" type=\"STRING\" size=\"15\"/><Column id=\"PROJECT_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"START_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"END_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"CONTRACT_NO\" type=\"STRING\" size=\"10\"/><Column id=\"CONTRACT_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"SALES_EMP_NAME\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsLastProjectInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"PSE_SEQ\" type=\"BIGDECIMAL\" size=\"20\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"100\"/><Column id=\"CLIENT_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"PROJECT_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"CO_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"255\"/><Column id=\"ROLE_CODE\" type=\"STRING\" size=\"20\"/><Column id=\"ROLE_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"START_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"END_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"STEP_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"SCORES_GRADE\" type=\"STRING\" size=\"6\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_close",null,"10","15","15","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_POP_Cls");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","1",null,null,"38","1","1",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_POP_BtnBg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Confirm",null,null,"60","24","88","7",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_tran");
            obj.getSetter("TL_SEQ").set("113");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Cancel",null,null,"70","24","10","7",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_tran");
            obj.getSetter("TL_SEQ").set("59");
            this.addChild(obj.name, obj);

            obj = new Div("div_Search","4","39",null,"40","4",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_WF_SchList");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Name","228","8","44","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("3");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("27");
            this.div_Search.addChild(obj.name, obj);

            obj = new Edit("edt_Name","276","8","172","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("1");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_Search",null,"7","60","24","8",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_SchText");
            obj.getSetter("TL_SEQ").set("118");
            this.div_Search.addChild(obj.name, obj);

            obj = new Edit("edt_CompanyName","52","8","172","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("0");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("stc_Name00","4","8","44","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("4");
            obj.set_text("회사");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("73");
            this.div_Search.addChild(obj.name, obj);

            obj = new Div("div_Organ","4","div_Search:4","260",null,null,"Static00:4",null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","0","0",null,"31","0",null,null,null,null,null,this.div_Organ.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_POP_GroupBg");
            this.div_Organ.addChild(obj.name, obj);

            obj = new Grid("grd_List","0","Static06:1",null,null,"0","0",null,null,null,null,this.div_Organ.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_Orgran");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseexpandkey("true");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_formatid("default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"200\"/><Column size=\"50\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No.\" TL_SEQ=\"735\"/><Cell col=\"1\" text=\"회사\" TL_SEQ=\"73\"/><Cell col=\"2\" text=\"직원수\" TL_SEQ=\"766\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:COMPANY_NAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:EMP_CNT\" textAlign=\"right\" displaytype=\"number\" padding=\"0px 5px 0px 0px\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" expr=\"dataset.getRowCount()\"/><Cell col=\"2\" expr=\"dataset.getSum(&quot;EMP_CNT&quot;)\"/></Band></Format><Format id=\"mobile\"><Columns><Column size=\"30\"/><Column size=\"200\"/><Column size=\"50\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"No.\" TL_SEQ=\"735\"/><Cell col=\"1\" text=\"회사\" TL_SEQ=\"73\"/><Cell col=\"2\" text=\"직원수\" TL_SEQ=\"766\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:COMPANY_NAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:EMP_CNT\" textAlign=\"right\" displaytype=\"number\" padding=\"0px 5px 0px 0px\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" expr=\"dataset.getRowCount()\"/><Cell col=\"2\" expr=\"dataset.getSum(&quot;EMP_CNT&quot;)\"/></Band></Format></Formats>");
            this.div_Organ.addChild(obj.name, obj);

            obj = new Static("Static07","10","9","120","15",null,null,null,null,null,null,this.div_Organ.form);
            obj.set_taborder("1");
            obj.set_text("회사");
            obj.set_cssclass("sta_POP_GroupTit");
            obj.getSetter("TL_SEQ").set("73");
            this.div_Organ.addChild(obj.name, obj);

            obj = new Div("div_Emp","div_Organ:4","div_Search:4",null,null,"4","Static00:4",null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","0","0",null,"31","0",null,null,null,null,null,this.div_Emp.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_POP_GroupBg");
            this.div_Emp.addChild(obj.name, obj);

            obj = new Grid("grd_List","0","Static06:1",null,null,"0","288",null,null,null,null,this.div_Emp.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_Emp");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseexpandkey("true");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"25\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"45\"/><Column size=\"270\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No.\" TL_SEQ=\"735\"/><Cell col=\"1\" text=\"회사\" TL_SEQ=\"73\"/><Cell col=\"2\" text=\"성명\" TL_SEQ=\"27\"/><Cell col=\"3\" text=\"등급\" TL_SEQ=\"92\"/><Cell col=\"4\" text=\"투입수\" TL_SEQ=\"767\"/><Cell col=\"5\" text=\"최근 투입\" TL_SEQ=\"768\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:COMPANY_NAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:EMP_NAME\"/><Cell col=\"3\" text=\"bind:LEVEL_NAME\"/><Cell col=\"4\" text=\"bind:PSE_CNT\" textAlign=\"right\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:RECENT_PSE\" textAlign=\"left\" padding=\"0px 0px 0px 5px\"/></Band></Format><Format id=\"mobile\"><Columns><Column size=\"40\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No.\" TL_SEQ=\"735\"/><Cell col=\"1\" colspan=\"2\" text=\"회사\" TL_SEQ=\"73\"/><Cell col=\"3\" text=\"등급\" TL_SEQ=\"92\"/><Cell col=\"4\" text=\"투입수\" TL_SEQ=\"767\"/><Cell row=\"1\" col=\"1\" text=\"성명\" TL_SEQ=\"27\"/><Cell row=\"1\" col=\"2\" colspan=\"3\" text=\"최근 투입\" TL_SEQ=\"768\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" expr=\"currow+1\"/><Cell col=\"1\" colspan=\"2\" text=\"bind:COMPANY_NAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:LEVEL_NAME\"/><Cell col=\"4\" text=\"bind:PSE_CNT\" textAlign=\"right\" displaytype=\"number\"/><Cell row=\"1\" col=\"1\" text=\"bind:EMP_NAME\"/><Cell row=\"1\" col=\"2\" colspan=\"3\" text=\"bind:RECENT_PSE\" textAlign=\"left\" padding=\"0px 0px 0px 5px\"/></Band></Format></Formats>");
            this.div_Emp.addChild(obj.name, obj);

            obj = new Static("Static07","10","9","120","15",null,null,null,null,null,null,this.div_Emp.form);
            obj.set_taborder("2");
            obj.set_text("직원");
            obj.set_cssclass("sta_POP_GroupTit");
            obj.getSetter("TL_SEQ").set("769");
            this.div_Emp.addChild(obj.name, obj);

            obj = new Static("stc_GBProduct","0","grd_List:4",null,"30","0",null,null,null,null,null,this.div_Emp.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_POP_GroupBg");
            this.div_Emp.addChild(obj.name, obj);

            obj = new Div("div01","0","stc_GBProduct:0",null,"100","0",null,null,null,null,null,this.div_Emp.form);
            obj.set_taborder("6");
            obj.set_text("div01");
            obj.set_cssclass("div_WF_detailBg");
            this.div_Emp.addChild(obj.name, obj);

            obj = new Static("sta00","2","8","55","22",null,null,null,null,null,null,this.div_Emp.form.div01.form);
            obj.set_taborder("0");
            obj.set_text("고객사");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("32");
            this.div_Emp.form.div01.addChild(obj.name, obj);

            obj = new Static("sta01","-1","38","55","22",null,null,null,null,null,null,this.div_Emp.form.div01.form);
            obj.set_taborder("1");
            obj.set_text("프로젝트");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("119");
            this.div_Emp.form.div01.addChild(obj.name, obj);

            obj = new Edit("edtProject","62","38","297","22",null,null,null,null,null,null,this.div_Emp.form.div01.form);
            obj.set_taborder("2");
            obj.set_readonly("true");
            this.div_Emp.form.div01.addChild(obj.name, obj);

            obj = new Static("sta03","500","38","31","22",null,null,null,null,null,null,this.div_Emp.form.div01.form);
            obj.set_taborder("3");
            obj.set_text("역할");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("75");
            this.div_Emp.form.div01.addChild(obj.name, obj);

            obj = new Static("sta04","356","8","55","22",null,null,null,null,null,null,this.div_Emp.form.div01.form);
            obj.set_taborder("4");
            obj.set_text("투입기간");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("770");
            this.div_Emp.form.div01.addChild(obj.name, obj);

            obj = new Static("sta08","356","38","55","22",null,null,null,null,null,null,this.div_Emp.form.div01.form);
            obj.set_taborder("5");
            obj.set_text("평가");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("771");
            this.div_Emp.form.div01.addChild(obj.name, obj);

            obj = new Edit("edtClient","62","8","297","22",null,null,null,null,null,null,this.div_Emp.form.div01.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            this.div_Emp.form.div01.addChild(obj.name, obj);

            obj = new Edit("edtRole","536","38","82","22",null,null,null,null,null,null,this.div_Emp.form.div01.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            this.div_Emp.form.div01.addChild(obj.name, obj);

            obj = new Edit("edtScore3","417","38","82","22",null,null,null,null,null,null,this.div_Emp.form.div01.form);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.div_Emp.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("calStartDate","417","8","82","22",null,null,null,null,null,null,this.div_Emp.form.div01.form);
            obj.set_taborder("9");
            obj.set_readonly("true");
            obj.set_type("string");
            obj.set_format("####-##-##");
            obj.set_textAlign("center");
            this.div_Emp.form.div01.addChild(obj.name, obj);

            obj = new MaskEdit("calEndDate","536","8","82","22",null,null,null,null,null,null,this.div_Emp.form.div01.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            obj.set_format("####-##-##");
            obj.set_type("string");
            obj.set_textAlign("center");
            this.div_Emp.form.div01.addChild(obj.name, obj);

            obj = new Static("sta05","507","8","17","22",null,null,null,null,null,null,this.div_Emp.form.div01.form);
            obj.set_taborder("11");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("center");
            this.div_Emp.form.div01.addChild(obj.name, obj);

            obj = new Static("sta08_00","2","68","55","22",null,null,null,null,null,null,this.div_Emp.form.div01.form);
            obj.set_taborder("12");
            obj.set_text("평가의견");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("772");
            this.div_Emp.form.div01.addChild(obj.name, obj);

            obj = new Edit("edtScore3_00","63","68",null,"22","8",null,null,null,null,null,this.div_Emp.form.div01.form);
            obj.set_taborder("13");
            obj.set_readonly("true");
            this.div_Emp.form.div01.addChild(obj.name, obj);

            obj = new Static("Static00","0","div01:4",null,"30","0",null,null,null,null,null,this.div_Emp.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_POP_GroupBg");
            this.div_Emp.addChild(obj.name, obj);

            obj = new Grid("grd_ListPse","0","div01:35",null,null,"0","0",null,null,null,null,this.div_Emp.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_Pse");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseexpandkey("true");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"30\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"70\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No.\" TL_SEQ=\"735\"/><Cell col=\"1\" text=\"고객사\" TL_SEQ=\"32\"/><Cell col=\"2\" text=\"프로젝트\" TL_SEQ=\"119\"/><Cell col=\"3\" text=\"투입일\" TL_SEQ=\"773\"/><Cell col=\"4\" text=\"종료일\" TL_SEQ=\"39\"/><Cell col=\"5\" text=\"담당영업\" TL_SEQ=\"37\"/></Band><Band id=\"body\"><Cell expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:CLIENT_NAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:PROJECT_NAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:START_DATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"4\" text=\"bind:END_DATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"5\" text=\"bind:SALES_EMP_NAME\"/></Band></Format><Format id=\"mobile\"><Columns><Column size=\"40\"/><Column size=\"180\"/><Column size=\"100\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"No.\" TL_SEQ=\"735\"/><Cell col=\"1\" text=\"고객사\" TL_SEQ=\"32\"/><Cell col=\"2\" text=\"담당영업\" TL_SEQ=\"37\"/><Cell col=\"3\" text=\"투입일\" TL_SEQ=\"773\"/><Cell row=\"1\" col=\"1\" colspan=\"2\" text=\"프로젝트\" TL_SEQ=\"119\"/><Cell row=\"1\" col=\"3\" text=\"종료일\" TL_SEQ=\"39\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" expr=\"currow+1\"/><Cell col=\"1\" text=\"bind:CLIENT_NAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:SALES_EMP_NAME\"/><Cell col=\"3\" text=\"bind:START_DATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell row=\"1\" col=\"1\" colspan=\"2\" text=\"bind:PROJECT_NAME\" textAlign=\"left\"/><Cell row=\"1\" col=\"3\" text=\"bind:END_DATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format></Formats>");
            this.div_Emp.addChild(obj.name, obj);

            obj = new Static("Static01","10","div01:12","120","15",null,null,null,null,null,null,this.div_Emp.form);
            obj.set_taborder("5");
            obj.set_text("투입이력");
            obj.set_cssclass("sta_POP_GroupTit");
            obj.getSetter("TL_SEQ").set("774");
            this.div_Emp.addChild(obj.name, obj);

            obj = new Static("stc_Product","10","grd_List:11","158","16",null,null,null,null,null,null,this.div_Emp.form);
            obj.set_taborder("8");
            obj.set_text("최근 평가 프로젝트 정보");
            obj.set_visible("true");
            obj.set_cssclass("sta_POP_GroupTit");
            obj.getSetter("TL_SEQ").set("775");
            this.div_Emp.addChild(obj.name, obj);

            obj = new Button("btn_StaffEvaluation",null,"grd_List:8","60","22","8",null,null,null,null,null,this.div_Emp.form);
            obj.set_taborder("9");
            obj.set_text("투입평가");
            obj.getSetter("TL_SEQ").set("776");
            this.div_Emp.addChild(obj.name, obj);

            obj = new Static("st_Title","10","0","356","35",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("투입인력 선택");
            obj.set_cssclass("sta_POP_Title");
            obj.getSetter("TL_SEQ").set("777");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_Search.form
            obj = new Layout("default","",0,0,this.div_Search.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.stc_Name.set_taborder("3");
                p.stc_Name.set_text("성명");
                p.stc_Name.set_cssclass("sta_WF_DetailTit");
                p.stc_Name.set_textAlign("right");
                p.stc_Name.getSetter("TL_SEQ").set("27");
                p.stc_Name.move("228","8","44","22",null,null);

                p.edt_Name.set_taborder("1");
                p.edt_Name.move("276","8","172","22",null,null);

                p.btn_Search.set_taborder("2");
                p.btn_Search.set_text("조회");
                p.btn_Search.set_cssclass("btn_WF_SchText");
                p.btn_Search.getSetter("TL_SEQ").set("118");
                p.btn_Search.move(null,"7","60","24","8",null);

                p.edt_CompanyName.set_taborder("0");
                p.edt_CompanyName.move("52","8","172","22",null,null);

                p.stc_Name00.set_taborder("4");
                p.stc_Name00.set_text("회사");
                p.stc_Name00.set_cssclass("sta_WF_DetailTit");
                p.stc_Name00.set_textAlign("right");
                p.stc_Name00.getSetter("TL_SEQ").set("73");
                p.stc_Name00.move("4","8","44","22",null,null);
            	}
            );
            this.div_Search.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div_Search.form
            obj = new Layout("portrait","",0,0,this.div_Search.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.stc_Name.move("196","4","44","30",null,null);

                p.edt_Name.move("244","4","140","30",null,null);

                p.btn_Search.move(null,"3","70","30","4",null);

                p.edt_CompanyName.move("52","4","140","30",null,null);

                p.stc_Name00.move("4","4","44","30",null,null);
            	}
            );
            this.div_Search.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div_Organ.form
            obj = new Layout("default","",0,0,this.div_Organ.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static06.set_taborder("2");
                p.Static06.set_cssclass("sta_POP_GroupBg");
                p.Static06.move("0","0",null,"31","0",null);

                p.grd_List.set_taborder("0");
                p.grd_List.set_binddataset("ds_Orgran");
                p.grd_List.set_treeinitstatus("expand,all");
                p.grd_List.set_treeuseexpandkey("true");
                p.grd_List.set_cellsizingtype("col");
                p.grd_List.set_autofittype("col");
                p.grd_List.set_formatid("default");
                p.grd_List.move("0","Static06:1",null,null,"0","0");

                p.Static07.set_taborder("1");
                p.Static07.set_text("회사");
                p.Static07.set_cssclass("sta_POP_GroupTit");
                p.Static07.getSetter("TL_SEQ").set("73");
                p.Static07.move("10","9","120","15",null,null);
            	}
            );
            this.div_Organ.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div_Organ.form
            obj = new Layout("portrait","",0,0,this.div_Organ.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grd_List.set_formatid("mobile");
                p.grd_List.move("0","36",null,null,"0","0");

                p.Static07.move("10","0","120","35",null,null);

                p.Static06.move("0","0",null,"35","0",null);
            	}
            );
            this.div_Organ.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div_Emp.form.div01.form
            obj = new Layout("default","",0,0,this.div_Emp.form.div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sta00.set_taborder("0");
                p.sta00.set_text("고객사");
                p.sta00.set_cssclass("sta_WF_DetailTit");
                p.sta00.set_textAlign("right");
                p.sta00.getSetter("TL_SEQ").set("32");
                p.sta00.move("2","8","55","22",null,null);

                p.sta01.set_taborder("1");
                p.sta01.set_text("프로젝트");
                p.sta01.set_cssclass("sta_WF_DetailTit");
                p.sta01.getSetter("TL_SEQ").set("119");
                p.sta01.move("-1","38","55","22",null,null);

                p.edtProject.set_taborder("2");
                p.edtProject.set_readonly("true");
                p.edtProject.move("62","38","297","22",null,null);

                p.sta03.set_taborder("3");
                p.sta03.set_text("역할");
                p.sta03.set_cssclass("sta_WF_DetailTit");
                p.sta03.getSetter("TL_SEQ").set("75");
                p.sta03.move("500","38","31","22",null,null);

                p.sta04.set_taborder("4");
                p.sta04.set_text("투입기간");
                p.sta04.set_cssclass("sta_WF_DetailTit");
                p.sta04.set_textAlign("right");
                p.sta04.getSetter("TL_SEQ").set("770");
                p.sta04.move("356","8","55","22",null,null);

                p.sta08.set_taborder("5");
                p.sta08.set_text("평가");
                p.sta08.set_cssclass("sta_WF_DetailTit");
                p.sta08.getSetter("TL_SEQ").set("771");
                p.sta08.move("356","38","55","22",null,null);

                p.edtClient.set_taborder("6");
                p.edtClient.set_readonly("true");
                p.edtClient.move("62","8","297","22",null,null);

                p.edtRole.set_taborder("7");
                p.edtRole.set_readonly("true");
                p.edtRole.move("536","38","82","22",null,null);

                p.edtScore3.set_taborder("8");
                p.edtScore3.set_readonly("true");
                p.edtScore3.move("417","38","82","22",null,null);

                p.calStartDate.set_taborder("9");
                p.calStartDate.set_readonly("true");
                p.calStartDate.set_type("string");
                p.calStartDate.set_format("####-##-##");
                p.calStartDate.set_textAlign("center");
                p.calStartDate.move("417","8","82","22",null,null);

                p.calEndDate.set_taborder("10");
                p.calEndDate.set_readonly("true");
                p.calEndDate.set_format("####-##-##");
                p.calEndDate.set_type("string");
                p.calEndDate.set_textAlign("center");
                p.calEndDate.move("536","8","82","22",null,null);

                p.sta05.set_taborder("11");
                p.sta05.set_text("~");
                p.sta05.set_cssclass("sta_WF_DetailTit");
                p.sta05.set_textAlign("center");
                p.sta05.move("507","8","17","22",null,null);

                p.sta08_00.set_taborder("12");
                p.sta08_00.set_text("평가의견");
                p.sta08_00.set_cssclass("sta_WF_DetailTit");
                p.sta08_00.getSetter("TL_SEQ").set("772");
                p.sta08_00.move("2","68","55","22",null,null);

                p.edtScore3_00.set_taborder("13");
                p.edtScore3_00.set_readonly("true");
                p.edtScore3_00.move("63","68",null,"22","8",null);
            	}
            );
            this.div_Emp.form.div01.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div_Emp.form.div01.form
            obj = new Layout("portrait","",0,0,this.div_Emp.form.div01.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.sta00.move("8","4","64","30",null,null);

                p.sta01.move("8","38","64","30",null,null);

                p.edtProject.move("80","38",null,"30","133",null);

                p.sta03.move(null,"39","39","30","92",null);

                p.sta04.move("8","72","64","30",null,null);

                p.sta08.move(null,"5","39","30","92",null);

                p.edtClient.move("80","4",null,"30","133",null);

                p.edtRole.move(null,"39","82","30","3",null);

                p.edtScore3.move(null,"5","82","30","4",null);

                p.calStartDate.move("80","72","92","30",null,null);

                p.calEndDate.move("200","72","92","30",null,null);

                p.sta05.move("179","72","17","30",null,null);

                p.sta08_00.set_text("평가의견");
                p.sta08_00.move("8","106","64","30",null,null);

                p.edtScore3_00.move("80","106",null,"30","4",null);
            	}
            );
            this.div_Emp.form.div01.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div_Emp.form
            obj = new Layout("default","",0,0,this.div_Emp.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static06.set_taborder("3");
                p.Static06.set_cssclass("sta_POP_GroupBg");
                p.Static06.move("0","0",null,"31","0",null);

                p.grd_List.set_taborder("0");
                p.grd_List.set_binddataset("ds_Emp");
                p.grd_List.set_treeinitstatus("expand,all");
                p.grd_List.set_treeuseexpandkey("true");
                p.grd_List.set_cellsizingtype("col");
                p.grd_List.set_autofittype("col");
                p.grd_List.move("0","Static06:1",null,null,"0","288");

                p.Static07.set_taborder("2");
                p.Static07.set_text("직원");
                p.Static07.set_cssclass("sta_POP_GroupTit");
                p.Static07.getSetter("TL_SEQ").set("769");
                p.Static07.move("10","9","120","15",null,null);

                p.stc_GBProduct.set_taborder("7");
                p.stc_GBProduct.set_cssclass("sta_POP_GroupBg");
                p.stc_GBProduct.move("0","grd_List:4",null,"30","0",null);

                p.div01.set_taborder("6");
                p.div01.set_text("div01");
                p.div01.set_cssclass("div_WF_detailBg");
                p.div01.move("0","stc_GBProduct:0",null,"100","0",null);

                p.Static00.set_taborder("4");
                p.Static00.set_cssclass("sta_POP_GroupBg");
                p.Static00.move("0","div01:4",null,"30","0",null);

                p.grd_ListPse.set_taborder("1");
                p.grd_ListPse.set_binddataset("ds_Pse");
                p.grd_ListPse.set_treeinitstatus("expand,all");
                p.grd_ListPse.set_treeuseexpandkey("true");
                p.grd_ListPse.set_cellsizingtype("col");
                p.grd_ListPse.set_autofittype("col");
                p.grd_ListPse.move("0","div01:35",null,null,"0","0");

                p.Static01.set_taborder("5");
                p.Static01.set_text("투입이력");
                p.Static01.set_cssclass("sta_POP_GroupTit");
                p.Static01.getSetter("TL_SEQ").set("774");
                p.Static01.move("10","div01:12","120","15",null,null);

                p.stc_Product.set_taborder("8");
                p.stc_Product.set_text("최근 평가 프로젝트 정보");
                p.stc_Product.set_visible("true");
                p.stc_Product.set_cssclass("sta_POP_GroupTit");
                p.stc_Product.getSetter("TL_SEQ").set("775");
                p.stc_Product.move("10","grd_List:11","158","16",null,null);

                p.btn_StaffEvaluation.set_taborder("9");
                p.btn_StaffEvaluation.set_text("투입평가");
                p.btn_StaffEvaluation.getSetter("TL_SEQ").set("776");
                p.btn_StaffEvaluation.move(null,"grd_List:8","60","22","8",null);
            	}
            );
            this.div_Emp.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div_Emp.form
            obj = new Layout("portrait","",0,0,this.div_Emp.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static07.move("10","0","120","35",null,null);

                p.Static06.move("0","0",null,"35","0",null);

                p.stc_Product.move("10","282","158","35",null,null);

                p.stc_GBProduct.move("0","282",null,"35","0",null);

                p.Static01.move("10","462","120","35",null,null);

                p.Static00.move("0","462",null,"35","0",null);

                p.grd_List.set_formatid("mobile");
                p.grd_List.move("0","36",null,"242","0",null);

                p.grd_ListPse.set_formatid("mobile");
                p.grd_ListPse.move("0","498",null,null,"0","2");

                p.div01.move("0","316",null,"142","0",null);

                p.btn_StaffEvaluation.move(null,"grd_List:6","80","30","4",null);
            	}
            );
            this.div_Emp.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",900,600,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("투입인력 선택");
                p.set_cssclass("frm_popBg");

                p.btn_close.set_taborder("0");
                p.btn_close.set_cssclass("btn_POP_Cls");
                p.btn_close.set_escapebutton("true");
                p.btn_close.move(null,"10","15","15","10",null);

                p.Static00.set_taborder("4");
                p.Static00.set_cssclass("sta_POP_BtnBg");
                p.Static00.move("1",null,null,"38","1","1");

                p.btn_Confirm.set_taborder("5");
                p.btn_Confirm.set_text("선택");
                p.btn_Confirm.set_cssclass("btn_WF_tran");
                p.btn_Confirm.getSetter("TL_SEQ").set("113");
                p.btn_Confirm.move(null,null,"60","24","88","7");

                p.btn_Cancel.set_taborder("6");
                p.btn_Cancel.set_text("닫기");
                p.btn_Cancel.set_cssclass("btn_WF_tran");
                p.btn_Cancel.getSetter("TL_SEQ").set("59");
                p.btn_Cancel.move(null,null,"70","24","10","7");

                p.div_Search.set_taborder("1");
                p.div_Search.set_text("");
                p.div_Search.set_cssclass("div_WF_SchList");
                p.div_Search.move("4","39",null,"40","4",null);

                p.div_Organ.set_taborder("2");
                p.div_Organ.move("4","div_Search:4","260",null,null,"Static00:4");

                p.div_Emp.set_taborder("3");
                p.div_Emp.move("div_Organ:4","div_Search:4",null,null,"4","Static00:4");

                p.st_Title.set_taborder("7");
                p.st_Title.set_text("투입인력 선택");
                p.st_Title.set_cssclass("sta_POP_Title");
                p.st_Title.getSetter("TL_SEQ").set("777");
                p.st_Title.move("10","0","356","35",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("portrait","Mobile_screen",480,1120,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.div_Search.move("4","39",null,"40","4",null);

                p.div_Organ.set_formscrolltype("none");
                p.div_Organ.move("4","83",null,"249","4",null);

                p.div_Emp.set_formscrolltype("none");
                p.div_Emp.move("4","336",null,"742","4",null);

                p.btn_Confirm.move(null,"1085","70","30","78",null);

                p.btn_Cancel.move(null,"1085","70","30","4",null);

                p.Static00.move("1","1081",null,"38","1",null);
            	}
            );
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_Emp.form.div01.form.edtClient","value","dsLastProjectInfo","CLIENT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_Emp.form.div01.form.edtProject","value","dsLastProjectInfo","PROJECT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_Emp.form.div01.form.edtRole","value","dsLastProjectInfo","ROLE_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_Emp.form.div01.form.calStartDate","value","dsLastProjectInfo","START_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_Emp.form.div01.form.calEndDate","value","dsLastProjectInfo","END_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_Emp.form.div01.form.edtScore3","value","dsLastProjectInfo","ST3_CAPTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_Emp.form.div01.form.edtScore3_00","value","dsLastProjectInfo","REMARKS");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CO_FindSiEmp.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("CO_FindSiEmp.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("CO_FindSiEmp.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("CO_FindSiEmp.xfdl","Script::CommGrid.xjs");
        this.registerScript("CO_FindSiEmp.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분	 	: xxx
        * 02. 화면명		: xxx
        * 03. 화면설명 		: xxx
        * 04. 작성일   	: 2018.xx.xx
        * 05. 작성자   	: xxx
        * 06. 수정이력 	:
        ***********************************************************************************************
        *     수정일          이  름    사유
        ***********************************************************************************************
        *
        ************************************************************************************************/

        /************************************************************************************************
        * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        this.executeIncludeScript("Script::CommSystem.xjs"); /*include "Script::CommSystem.xjs"*/;
        this.executeIncludeScript("Script::CommTrans.xjs"); /*include "Script::CommTrans.xjs"*/;
        this.executeIncludeScript("Script::CommUtil.xjs"); /*include "Script::CommUtil.xjs"*/;
        this.executeIncludeScript("Script::CommGrid.xjs"); /*include "Script::CommGrid.xjs"*/;


        /************************************************************************************************
        * 전역 변수 영역
        ************************************************************************************************/
        this.sEmpName = "";
        this.sCompanyCode = "";
        /************************************************************************************************
        * FORM 영역 EVENT 영역
        ************************************************************************************************/
        this.CO_FindSiEmp_onload = function(obj,e)
        {
        	this.gfnCompInit(obj);  	// Grid 공통함수 호출
        	this.fnInitForm();
        };
        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.btn_Confirm_onclick = function(obj,e)
        {
        	this.fnReturnOne(this.ds_Emp.rowposition);
        };

        this.btn_close_onclick = function(obj,e)
        {
        	this.commUtil.popupClose();
        };

        this.btn_Cancel_onclick = function(obj,e)
        {
        	this.commUtil.popupClose();
        };

        this.ds_Orgran_onrowposchanged = function(obj,e)
        {
        	this.fnSearchEmp("COMP");
        };

        this.ds_Emp_onrowposchanged = function(obj,e)
        {
        	this.fnSearchPse();
        	this.fnSearchProjectLast();
        };

        this.div_Search_edt_Name_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.fnSearchEmp("EMP");
        	}
        };

        this.div_Search_edt_CompanyName_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.ds_Orgran.set_rowposition(-1);
        		var v = obj.text;
        		if(!this.gfnIsEmpty(v))
        		{
        			this.ds_Orgran.filter("COMPANY_NAME.indexOf('" +v+ "') != -1");
        		}else{
        			this.ds_Orgran.filter("");
        		}

        		if(this.ds_Orgran.getRowCount() > 0)
        		{
        			this.ds_Orgran.set_rowposition(0);
        		}
        	}
        };


        this.div_Emp_grd_List_oncelldblclick = function(obj,e)
        {
        	this.fnReturnOne(e.row);
        };

        this.div_Emp_grd_List_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13 && obj.currentrow >= 0)
        	{
        		this.fnReturnOne(obj.currentrow);
        	}
        };

        this.fnReturnOne = function(row)
        {
        	if(row >= 0)
        	{
        		var dsReturn = new nexacro.Dataset();
        		dsReturn.assign(this.ds_Emp);
        		dsReturn.clearData();

        		var newrow = dsReturn.addRow();
        		dsReturn.copyRow(newrow, this.ds_Emp, row);
        		this.commUtil.popupClose(dsReturn);
        	}else{
        		alert(this.gfnGetTransTxt(1229, "투입인력을 선택하십시오."));
        	}
        }
        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.fnInitForm = function()
        {
        	if(this.parent.hasOwnProperty("sEmpName"))
        	{
        		this.sEmpName = this.parent.sEmpName;
        	}
        	if(this.parent.hasOwnProperty("sCompanyCode"))
        	{
        		this.sCompanyCode = this.parent.sCompanyCode;
        	}
        	if(this.commUtil.gfnGetMobile())
        		this.div_Emp.form.btn_StaffEvaluation.set_visible(false);

        	this.fnGetCode();
        }

        this.fnPopupCallBack = function (popupId, popupArg)
        {
        	popupArg = this.commUtil.popupReturn();

        	switch(popupId)
        	{
        		case "" :
        			//this.fnSearch();
        		default:
        			break;
        	}
        }
        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fnGetCode = function()
        {
        	this.gfnAddOutputDataset("ds_Orgran", "dsOutput");
        	this.gfnCommonTransaction("SelectOrgan", "CO_FindSiEmp_S01");
        }

        this.fnSearchEmp = function(sType)
        {
        	//최초 팝업 시 파라미터로 넘어온 회사코드를 선택하도록 처리
        	if(!this.gfnIsEmpty(this.sCompanyCode))
        	{
        		var fRow = this.ds_Orgran.findRow("COMPANY_CODE", this.sCompanyCode);
        		this.sCompanyCode = ""; // 초기화 (한번만 실행되도록)

        		if(fRow != -1)
        		{
        			this.ds_Orgran.set_rowposition(fRow);
        			this.div_Organ.form.grd_List.selectRow(fRow, true);
        		}
        	}

        	var row = this.ds_Orgran.rowposition;
        	var companyCode = this.ds_Orgran.getColumn(row,"COMPANY_CODE");
        	var companyName = this.div_Search.form.edt_CompanyName.text;
        	var empName		= this.div_Search.form.edt_Name.text;


        	if(sType == "COMP")
        	{
        		if(!this.gfnIsEmpty(companyCode))
        		{
        			this.gfnAddSendParameter("COMPANY_CODE"	, companyCode);
        			this.gfnAddOutputDataset("ds_Emp", "dsOutput");
        			this.gfnCommonTransaction("SelectEmp_"+sType, "CO_FindSiEmp_S02");
        		}else{
        			this.ds_Emp.clearData();
        		}
        	}
        	else if(sType == "EMP")
        	{
        		this.ds_Orgran.set_rowposition(-1);
        		if(!this.gfnIsEmpty(companyName))
        		{
        			this.gfnAddSendParameter("COMPANY_NAME"		, companyName);
        		}
        		this.gfnAddSendParameter("EMP_NAME"		, empName);
        		this.gfnAddOutputDataset("ds_Emp", "dsOutput");
        		this.gfnCommonTransaction("SelectEmp_"+sType, "CO_FindSiEmp_S02");
        	}
        }

        this.fnSearchPse = function()
        {
        	var row = this.ds_Emp.rowposition;
        	var empNo = this.ds_Emp.getColumn(row,"EMP_NO");
        	if(!this.gfnIsEmpty(empNo))
        	{
        		this.gfnAddSendParameter("EMP_NO", empNo);
        		this.gfnAddOutputDataset("ds_Pse", "dsOutput");
        		this.gfnCommonTransaction("SelectPse", "CO_FindSiEmp_S03");
        	}else{
        		this.ds_Pse.clearData();
        	}
        }

        this.fnSearchProjectLast = function()
        {
        	var row = this.ds_Emp.rowposition;
        	var empNo = this.ds_Emp.getColumn(row,"EMP_NO");
        	if(!this.gfnIsEmpty(empNo))
        	{
        		if(this.commUtil.getFormAuthority(291,1))	// 투비직원평가권한
        			this.gfnAddSendParameter("TOBE_FLAG", "1");
        		this.gfnAddSendParameter("EMP_NO", empNo);
        		this.gfnAddOutputDataset("dsLastProjectInfo", "dsOutput");
        		this.gfnCommonTransaction("fnSearchProjectLast", "TS_StaffEvaluation_S01");
        	}else{
        		this.dsLastProjectInfo.clearData();
        	}
        };

        this.fnCallBack = function(strSvcID, nErrorCode, strErrorMag)
        {
        	// 에러 예외처리
        	if(nErrorCode != 0)
        	{
        		return;
        	}
        	else
        	{
        		if(strSvcID=="gfnGetCode")
        		{

        		}
        		else if(strSvcID=="SelectOrgan")
        		{

        		}
        		else if(strSvcID=="SelectEmp_COMP")
        		{
        			this.div_Organ.form.grd_List.setFocus();
        		}
        		else if(strSvcID=="SelectEmp_EMP")
        		{
        			var nCnt = this.ds_Emp.getRowCount();
        // 			if(nCnt == 1)
        // 			{
        // 				//이름검색 결과가 1건이면 즉시 리턴
        // 				this.fnReturnOne(0);
        // 			}
        // 			else
        			if(nCnt >= 1)
        			{
        				//1건 초과이면 그리드 포커스
        				this.div_Emp.form.grd_List.setFocus();
        			}
        		}
        	}
        }

        this.div_Emp_btn_StaffEvaluation_onclick = function(obj,e)
        {
        	var strEmpNo = this.ds_Emp.getColumn(this.ds_Emp.rowposition,"EMP_NO");
        	var strEmpName = this.ds_Emp.getColumn(this.ds_Emp.rowposition,"EMP_NAME");

        	var sArgument = {pvEmpNo:strEmpNo, pvEmpName:strEmpName};
        	this.commUtil.popup(this, "CO_StaffEvaluation", "sales::comm/CO_StaffEvaluation.xfdl", -1, -1, -1, -1, true, true, false, sArgument, "");
        };

        this.div_Search_btn_Search_onclick = function(obj,e)
        {
        	this.fnSearchEmp("EMP");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CO_FindSiEmp_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.btn_Confirm.addEventHandler("onclick",this.btn_Confirm_onclick,this);
            this.btn_Cancel.addEventHandler("onclick",this.btn_Cancel_onclick,this);
            this.div_Search.form.edt_Name.addEventHandler("onkeydown",this.div_Search_edt_Name_onkeydown,this);
            this.div_Search.form.btn_Search.addEventHandler("onclick",this.div_Search_btn_Search_onclick,this);
            this.div_Search.form.edt_CompanyName.addEventHandler("onkeydown",this.div_Search_edt_CompanyName_onkeydown,this);
            this.div_Organ.form.grd_List.addEventHandler("oncelldblclick",this.grd_List_oncelldblclick,this);
            this.div_Organ.form.grd_List.addEventHandler("onkeydown",this.grd_List_onkeydown,this);
            this.div_Emp.form.grd_List.addEventHandler("oncelldblclick",this.div_Emp_grd_List_oncelldblclick,this);
            this.div_Emp.form.grd_List.addEventHandler("onkeydown",this.div_Emp_grd_List_onkeydown,this);
            this.div_Emp.form.grd_ListPse.addEventHandler("oncelldblclick",this.grd_List_oncelldblclick,this);
            this.div_Emp.form.grd_ListPse.addEventHandler("onkeydown",this.grd_List_onkeydown,this);
            this.div_Emp.form.btn_StaffEvaluation.addEventHandler("onclick",this.div_Emp_btn_StaffEvaluation_onclick,this);
            this.ds_Orgran.addEventHandler("onrowposchanged",this.ds_Orgran_onrowposchanged,this);
            this.ds_Emp.addEventHandler("onrowposchanged",this.ds_Emp_onrowposchanged,this);
        };
        this.loadIncludeScript("CO_FindSiEmp.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
