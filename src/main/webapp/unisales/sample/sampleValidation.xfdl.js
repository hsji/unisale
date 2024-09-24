(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleValidation");
            this.set_titletext("정합성 체크");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,1970);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"SSN\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_FROM\" type=\"STRING\" size=\"256\"/><Column id=\"DATE_TO\" type=\"STRING\" size=\"256\"/><Column id=\"MAX_NUM\" type=\"FLOAT\" size=\"256\"/><Column id=\"DECIMAL\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"COMPARE_1\" type=\"STRING\" size=\"256\"/><Column id=\"COMPARE_2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"ID\">kimyk</Col><Col id=\"DATE_FROM\">20171201</Col><Col id=\"DATE_TO\">20171130</Col><Col id=\"MAX_NUM\">10</Col><Col id=\"DECIMAL\">1.25</Col><Col id=\"COMPARE_1\">10</Col><Col id=\"COMPARE_2\">20</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeatil", this);
            obj._setContents("<ColumnInfo><Column id=\"DATE\" type=\"STRING\" size=\"256\"/><Column id=\"YYYYMM\" type=\"STRING\" size=\"6\"/><Column id=\"MAX_NUM\" type=\"INT\" size=\"256\"/><Column id=\"MIN_NUM\" type=\"INT\" size=\"256\"/><Column id=\"LENGTH_MIN\" type=\"STRING\" size=\"256\"/><Column id=\"RANGE\" type=\"STRING\" size=\"256\"/><Column id=\"CAMP\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDataGrp", this);
            obj.set_keystring("G:Column0");
            obj._setContents("<ColumnInfo><Column id=\"row\" type=\"FLOAT\" size=\"256\"/><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"BIGDECIMAL\" size=\"256\" prop=\"AVG\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">warm</Col><Col id=\"Column2\">red</Col><Col id=\"Column3\">1</Col><Col id=\"row\">1</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\"/><Col id=\"Column2\">yellow</Col><Col id=\"Column3\">1200</Col><Col id=\"row\">2</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">cool</Col><Col id=\"Column2\">blue</Col><Col id=\"Column3\">3</Col><Col id=\"row\">3</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">cool</Col><Col id=\"Column2\">navy</Col><Col id=\"Column3\">4</Col><Col id=\"row\">4</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">acid</Col><Col id=\"Column2\">lemon</Col><Col id=\"Column3\">5</Col><Col id=\"row\">5</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">acid</Col><Col id=\"Column2\">orange</Col><Col id=\"Column3\">1600</Col><Col id=\"row\">6</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">test</Col><Col id=\"Column3\">7</Col><Col id=\"row\">7</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">strawberry</Col><Col id=\"Column3\">8</Col><Col id=\"row\">8</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">banana</Col><Col id=\"Column3\">9</Col><Col id=\"row\">9</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDupl", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"Column3\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">warm</Col><Col id=\"Column2\">1</Col><Col id=\"Column3\">1</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">warm</Col><Col id=\"Column2\">2</Col><Col id=\"Column3\">2</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">cool</Col><Col id=\"Column2\">3</Col><Col id=\"Column3\">3</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">cool</Col><Col id=\"Column2\">4</Col><Col id=\"Column3\">4</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">acid</Col><Col id=\"Column2\">5</Col><Col id=\"Column3\">5</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">cool</Col><Col id=\"Column2\">6</Col><Col id=\"Column3\">9</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">acid</Col><Col id=\"Column2\">7</Col><Col id=\"Column3\">1600</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">8</Col><Col id=\"Column3\">7</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">9</Col><Col id=\"Column3\">8</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">10</Col><Col id=\"Column3\">9</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">acid</Col><Col id=\"Column2\">1</Col><Col id=\"Column3\">5</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDupl00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"Column3\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">warm</Col><Col id=\"Column2\">1</Col><Col id=\"Column3\">1</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">warm</Col><Col id=\"Column2\">1</Col><Col id=\"Column3\">1</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">cool</Col><Col id=\"Column2\">3</Col><Col id=\"Column3\">3</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">cool</Col><Col id=\"Column2\">4</Col><Col id=\"Column3\">4</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">acid</Col><Col id=\"Column2\">1</Col><Col id=\"Column3\">5</Col></Row><Row><Col id=\"Column0\">color</Col><Col id=\"Column1\">cool</Col><Col id=\"Column2\">3</Col><Col id=\"Column3\">9</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">acid</Col><Col id=\"Column2\">2</Col><Col id=\"Column3\">1600</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">1</Col><Col id=\"Column3\">7</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">2</Col><Col id=\"Column3\">8</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">sweet</Col><Col id=\"Column2\">3</Col><Col id=\"Column3\">9</Col></Row><Row><Col id=\"Column0\">fruits</Col><Col id=\"Column1\">acid</Col><Col id=\"Column2\">1</Col><Col id=\"Column3\">5</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static01","0","770","209","43",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Grid Validation Check");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdCheck","0","Static01:0",null,"200","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_autoenter("key");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"31\" band=\"head\"/><Row size=\"31\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"필수,길이(5자)\"/><Cell col=\"1\" text=\"주민번호\"/><Cell col=\"2\" colspan=\"2\" text=\"투입기간(from-to)\"/><Cell col=\"4\" text=\"금액/정수7/소수2\"/><Cell col=\"5\" text=\"숫자/max10\"/><Cell col=\"6\" colspan=\"2\" text=\"비교\"/><Cell row=\"1\" text=\"ID\"/><Cell row=\"1\" col=\"1\" text=\"SSN\"/><Cell row=\"1\" col=\"2\" text=\"DATE_FROM\"/><Cell row=\"1\" col=\"3\" text=\"DATE_TO\"/><Cell row=\"1\" col=\"4\" text=\"MAX_NUM\"/><Cell row=\"1\" col=\"5\" text=\"DECIMAL\"/><Cell row=\"1\" col=\"6\" text=\"COMPARE_1\"/><Cell row=\"1\" col=\"7\" text=\"COMPARE_2\"/></Band><Band id=\"body\"><Cell text=\"bind:ID\" displaytype=\"normal\" edittype=\"normal\" calendarautoselect=\"true\" comboautoselect=\"true\" editautoselect=\"true\" maskeditautoselect=\"true\"/><Cell col=\"1\" text=\"bind:SSN\" displaytype=\"normal\" edittype=\"normal\" calendarautoselect=\"true\" comboautoselect=\"true\" editautoselect=\"true\" maskeditautoselect=\"true\"/><Cell col=\"2\" text=\"bind:DATE_FROM\" displaytype=\"normal\" edittype=\"normal\" calendarautoselect=\"true\" comboautoselect=\"true\" editautoselect=\"true\" maskeditautoselect=\"true\"/><Cell col=\"3\" text=\"bind:DATE_TO\" displaytype=\"normal\" edittype=\"normal\" calendarautoselect=\"true\" comboautoselect=\"true\" editautoselect=\"true\" maskeditautoselect=\"true\"/><Cell col=\"4\" text=\"bind:MAX_NUM\" displaytype=\"normal\" edittype=\"normal\" calendarautoselect=\"true\" comboautoselect=\"true\" editautoselect=\"true\" maskeditautoselect=\"true\"/><Cell col=\"5\" text=\"bind:DECIMAL\" displaytype=\"normal\" edittype=\"normal\" calendarautoselect=\"true\" comboautoselect=\"true\" editautoselect=\"true\" maskeditautoselect=\"true\"/><Cell col=\"6\" text=\"bind:COMPARE_1\" displaytype=\"normal\" edittype=\"normal\" calendarautoselect=\"true\" comboautoselect=\"true\" editautoselect=\"true\" maskeditautoselect=\"true\"/><Cell col=\"7\" text=\"bind:COMPARE_2\" displaytype=\"normal\" edittype=\"normal\" calendarautoselect=\"true\" comboautoselect=\"true\" editautoselect=\"true\" maskeditautoselect=\"true\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnGrdCheck",null,null,"48","28","20","grdCheck:5",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("체크");
            obj.set_cssclass("btn_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,null,"72","28","btnGrdCheck:3","grdCheck:5",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("행추가");
            obj.set_cssclass("btn_WF_Add");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel",null,null,"71","28","btnAdd:3","grdCheck:5",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("행삭제");
            obj.set_cssclass("btn_WF_Delete");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","grdCheck:0","259","43",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Component Validation Check");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","0","Static01_00:0",null,"150","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Static("staBg00","0","0",null,"38","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg01","0","staBg00:-1",null,"38","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg02","0","staBg01:-1",null,"38","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg03","0","staBg02:-1",null,"38","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","0","150","38",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_text("필수(날짜)");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","37","150","38",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_text("최대값 = 100");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle02","0","74","150","38",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_text("최소길이3/최대길이8");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle03","0","111","150","38",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_text("컬럼비교 (최소값=10)");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Calendar("calReq","staTitle00:4","5","150","28",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtMax100","staTitle01:4","calReq:9","150","28",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtLength3to8","staTitle02:4","edtMax100:9","150","28",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtCompa","staTitle03:4","edtLength3to8:9","150","28",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle00_00","50%","0","150","38",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_text("년월");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle01_00","50%","37","150","38",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_text("최소값 = 10");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle02_00","50%","74","150","38",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("14");
            obj.set_text("범위 1~100");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle03_00","50%","111","150","38",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("15");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtMin10","staTitle01_00:4","42","150","28",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("16");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtRange1to100","staTitle02_00:4","edtMin10:9","150","28",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("17");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtPhone","staTitle03_00:4","edtRange1to100:9","150","28",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("18");
            this.divDetail.addChild(obj.name, obj);

            obj = new MaskEdit("mskYM","staTitle00_00:4","5","150","28",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("19");
            obj.set_format("####-##");
            obj.set_type("string");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnDetailCheck",null,null,"48","28","20","divDetail:5",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("체크");
            obj.set_cssclass("btn_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","divDetail:0","274","43",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("Group 지정시  Validation Check");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDatasetProp","0","Static01_00_00:0",null,"326","20",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("dsDataGrp");
            obj.set_autofittype("col");
            obj.set_selecttype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"130\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"64\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/><Row size=\"37\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"Column0\"/><Cell col=\"2\" text=\"Column1\"/><Cell col=\"3\" text=\"Column2\"/><Cell col=\"4\" text=\"Column3\"/><Cell col=\"5\" text=\"rowLevel\"/></Band><Band id=\"body\"><Cell cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_SubTotal&quot; : &quot;&quot;\" expr=\"dataset.getRowLevel(currow) == 1 ? &quot;&quot; : row\" text=\"bind:row\" edittype=\"normal\"/><Cell col=\"1\" text=\"bind:Column0\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_SubTotal&quot; : &quot;&quot;\" suppress=\"1\" expr=\"dataset.getRowLevel(currow) == 0 ? Column0 : &apos;평균&apos;\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:Column1\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_SubTotal&quot; : &quot;&quot;\" edittype=\"normal\" suppress=\"2\"/><Cell col=\"3\" text=\"bind:Column2\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_SubTotal&quot; : &quot;&quot;\" edittype=\"normal\" suppress=\"3\"/><Cell col=\"4\" text=\"bind:Column3\" displaytype=\"number\" textAlign=\"right\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_SubTotal&quot; : &quot;&quot;\" edittype=\"normal\"/><Cell col=\"5\" cssclass=\"expr:dataset.getRowLevel(currow) == 1 ? &quot;cell_SubTotal&quot; : &quot;&quot;\" expr=\"dataset.getRowLevel(currow)\" edittype=\"normal\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\" colspan=\"3\" text=\"합계\"/><Cell col=\"4\" displaytype=\"number\" textAlign=\"right\" expr=\"dataset.getSum(&apos;Column3&apos;)\"/><Cell col=\"5\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnGrpCheck",null,null,"48","28","20","grdDatasetProp:5",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("체크");
            obj.set_cssclass("btn_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00_00","0","grdDatasetProp:0","169","43",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("중복된 row 검사");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDup","0","Static01_00_00_00:0",null,"321","20",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_binddataset("dsDupl");
            obj.set_autofittype("col");
            obj.set_selecttype("row");
            obj.set_autoenter("select");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"Column0\"/><Cell col=\"1\" text=\"Column1\"/><Cell col=\"2\" text=\"Column2\"/><Cell col=\"3\" text=\"Column3\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:Column1\"/><Cell col=\"2\" text=\"bind:Column2\" displaytype=\"number\" edittype=\"mask\" textAlign=\"right\" editinputfilter=\"digit\"/><Cell col=\"3\" text=\"bind:Column3\" displaytype=\"number\" textAlign=\"right\" edittype=\"mask\" editinputtype=\"digit\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnDupCheck",null,null,"48","28","20","grdDup:5",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("체크");
            obj.set_cssclass("btn_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Static("staBottom","0","grdDatasetProp:0",null,"43","800",null,null,null,null,null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new TextArea("txa00","0","0",null,"770","20",null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_value("1.Validation 공통함수는 아래와 같이 4개의 함수가 제공된다. \n  1) Dataset에 설정된 정합성체크 RuleSet을 Clear한다.\n       this.gfnClearValidation(this.dsList);\n  2) Dataset의 Column별로 정합성체크 Rule을 등록한다.\n       this.gfnSetValidation(this.dsList, \"ID\", \"아이디\", \"required,minlength:5\");\n  3) Dataset의 Column별로 설정된 정합성체크 Rule을 제거한다.\n       this.gfnRemoveValidation(this.dsList, \"ID\");\n  4) Dataset에 등록된 데이터 정합성체크 RuleSet에의해 정합성을 체크를 하고 이상여부를 리턴한다.\n       this.gfnValidation(this.dsList, \"U\");\n\n2. gfnSetValidation에 등록할 수 있는 Validation 체크 Rule의 종류\n  예) this.gfnSetValidation(this.dsList, \"ID\", \"아이디\", \"required,equalto:NAME\");\n\n3. Validation 체크 Rule의 종류 \n required - 필수 체크\n length:7 - 길이가 7자리인지 체크\n max:7 - 값이 7 보다 큰지 체크\t\n min:7 - 값이 7 보다 작은지 체크\n maxlength:7 - 길이가 7자 보다 큰지 체크\n maxlengthbyte:7 - byte의 길이가 7보다 보다 큰지 체크\n maxlengthdec:8:4 - Decimal의 값의 길이가 정수 8자리, 소수 4자리 보다 큰지 체크\n minlength:3 - 길이가 3보다 작은지 체크\n minlengthbyte:3 - byte의 길이가 3보다 작은지 체크\n fromto:칼럼명 - 등록된 날짜가 칼럼의 값 보다 큰지 예) this.gfnSetValidation(this.dsList, \"DATE_TO\", \"종료일자,시작일자\", \"required,date,fromto:DATE_FROM\");\n fromtosmall:칼럼명 - 등록된 날짜가 칼럼의 값 보다 작은지 예) this.gfnSetValidation(this.dsList, \"DATE_FROM\", \"시작일자,종료일자\", \"required,date,fromtosmall:DATE_TO\");\n range:40:100 - 값이 40 ~ 100 사이의 값인지 체크\t\n isemail - 이메일 체크\n isssn - 주민번호 체크\n isbzid - 사업자등록번호 체크\n isfirmid - 법인등록번호 체크\t\n istel - 전화번호 체크\n ismobile - 핸드폰번호 체크\n isphone - 전화번호or핸드폰번호 체크\n date - 년월일형태의 날짜가 맞는지 체크\n dateym - 년월형태의 날짜가 맞는지 체크\t\n korean - 한글 여부 체크\n digits - 숫자 여부 체크\n engnum - 영문+숫자 여부 체크\n special - 특수문자 포함 여부 체크\n comparebig:칼럼명 - NAME 칼럼의 값보다 큰지 체크 예) this.gfnSetValidation(this.dsList2, \"CAMP\", \"비교,최소값\", \"required,comparebig:MIN_NUM\");\n comparesmall:칼럼명 - NAME 칼럼의 값보다 작은지 체크 예) this.gfnSetValidation(this.dsList2, \"CAMP\", \"비교,최소값\", \"required,comparesmall:MIN_NUM\");");
            this.addChild(obj.name, obj);

            obj = new Button("btnDupDsCheck",null,null,"110","28","80","grdDup:5",null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("데이타셋 체크");
            obj.set_cssclass("btn_WF_Search");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1050,1970,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divDetail.form.calReq","value","dsDeatil","DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divDetail.form.edtMax100","value","dsDeatil","MAX_NUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divDetail.form.edtMin10","value","dsDeatil","MIN_NUM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divDetail.form.edtLength3to8","value","dsDeatil","LENGTH_MIN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divDetail.form.edtRange1to100","value","dsDeatil","RANGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divDetail.form.edtCompa","value","dsDeatil","CAMP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divDetail.form.edtPhone","value","dsDeatil","PHONE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divDetail.form.mskYM","value","dsDeatil","YYYYMM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleValidation.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	sampleValidation.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2020/12/02
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2020/12/02			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        /*
        == Validation 체크 Rule의 종류 ==
         required 	- 필수 체크
         length:7 	- 길이가 7자리인지 체크
         max:7 		- 값이 7 보다 큰지 체크
         min:7 		- 값이 7 보다 작은지 체크
         maxlength:7 - 길이가 7자 보다 큰지 체크
         maxlengthbyte:7  - byte의 길이가 7보다 보다 큰지 체크
         maxlengthdec:8:4 - Decimal의 값의 길이가 정수 8자리, 소수 4자리 보다 큰지 체크
         minlength:3	  - 길이가 3보다 작은지 체크
         minlengthbyte:3  - byte의 길이가 3보다 작은지 체크
         fromto:칼럼명	  - 등록된 날짜가 칼럼의 값 보다 큰지 예) this.gfnSetValidation(this.dsList, "DATE_TO", "종료일자,시작일자", "required,date,fromto:DATE_FROM");
         fromtosmall:칼럼명 - 등록된 날짜가 칼럼의 값 보다 작은지 예) this.gfnSetValidation(this.dsList, "DATE_FROM", "시작일자,종료일자", "required,date,fromtosmall:DATE_TO");
         range:40:100  	  - 값이 40 ~ 100 사이의 값인지 체크
         isemail 	- 이메일 체크
         isssn 		- 주민번호 체크
         isbzid 	- 사업자등록번호 체크
         isfirmid 	- 법인등록번호 체크
         istel 		- 전화번호 체크
         ismobile 	- 핸드폰번호 체크
         isphone 	- 전화번호or핸드폰번호 체크
         date 		- 년월일형태의 날짜가 맞는지 체크
         dateym 	- 년월형태의 날짜가 맞는지 체크
         korean 	- 한글 여부 체크
         digits 	- 숫자 여부 체크
         engnum 	- 영문+숫자 여부 체크
         special 	- 특수문자 포함 여부 체크
         comparebig:칼럼명 - NAME 칼럼의 값보다 큰지 체크 예) this.gfnSetValidation(this.dsList2, "CAMP", "비교,최소값", "required,comparebig:MIN_NUM");
         comparesmall:칼럼명 - NAME 칼럼의 값보다 작은지 체크 예) this.gfnSetValidation(this.dsList2, "CAMP", "비교,최소값", "required,comparesmall:MIN_NUM");
        */
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.btnAdd_onclick = function(obj,e)
        {
        	var nRow = this.dsList.addRow();
        };

        this.btnDel_onclick = function(obj,e)
        {
        	var nRow = this.dsList.rowposition;
        	this.dsList.deleteRow(nRow);
        };

        this.btnGrdCheck_onclick = function(obj,e)
        {
        	// 정합성 체크
        	this.gfnClearValidation(this.dsList);

        	this.gfnSetValidation(this.dsList, "ID"			, "아이디"				, "required,minlength:3,maxlength:8");
        	this.gfnSetValidation(this.dsList, "SSN"		, "주민번호"			, "required,isssn");
        	this.gfnSetValidation(this.dsList, "DATE_FROM"	, "시작일자,종료일자"	, "required,date");
        	this.gfnSetValidation(this.dsList, "DATE_TO"	, "종료일자,시작일자"	, "required,date,fromto:DATE_FROM");
        	this.gfnSetValidation(this.dsList, "MAX_NUM"	, "금액"				, "required,digits,maxlengthdec:7:2");
        	this.gfnSetValidation(this.dsList, "DECIMAL"	, "최대값"				, "required,digits,max:10");
        	this.gfnSetValidation(this.dsList, "COMPARE_1"	, "COMPARE_1,COMPARE_2"	, "comparebig:COMPARE_2");

         	// Dataset의 변경된 Row Validation check
          	if (this.gfnValidation(this.grdCheck, "U") == false) return;

        	trace("Validation이 통과 되었습니다.");
        };

        this.btnDetailCheck_onclick = function(obj,e)
        {
        	if (this.dsDeatil.rowcount == 0) {
        		var nRow = this.dsDeatil.addRow();
        		this.dsDeatil.setColumn(nRow, "DATE", this.gfnGetDate());
        	}

        	// 정합성 체크
        	this.gfnClearValidation(this.dsDeatil);
        	this.gfnSetValidation(this.dsDeatil, "DATE"			, "필수(날짜)"				, "required,date");
        	this.gfnSetValidation(this.dsDeatil, "YYYYMM"		, "년월"					, "required,dateym");
        	this.gfnSetValidation(this.dsDeatil, "MAX_NUM"		, "최대값 = 100"			, "required,digits,max:100");
        	this.gfnSetValidation(this.dsDeatil, "MIN_NUM"		, "최소값 = 10"			, "required,digits,min:10");
        	this.gfnSetValidation(this.dsDeatil, "LENGTH_MIN"	, "최소길이3/최대길이8"	, "required,minlength:3,maxlength:8");
        	this.gfnSetValidation(this.dsDeatil, "RANGE"		, "범위 1~100"				, "required,digits,range:1:100");
        	this.gfnSetValidation(this.dsDeatil, "CAMP"			, "컬럼비교 (최소값=10)"	, "required,comparebig:MIN_NUM");
        	this.gfnSetValidation(this.dsDeatil, "PHONE"		, "전화번호"				, "required,isphone");

        	// 전체 Row Validation check
         	if (this.gfnValidation(this.dsDeatil, "A") == false) return;

        	trace("Validation이 통과 되었습니다.");
        };

        this.btnGrpCheck_onclick = function(obj,e)
        {
        	// 정합성 체크
        	this.gfnClearValidation(this.dsDataGrp);

        	this.gfnSetValidation(this.dsDataGrp, "Column0", "색상", "required");
        	this.gfnSetValidation(this.dsDataGrp, "Column1", "온도", "required");

        	// 수정된 Row만 Validation check
         	if (this.gfnValidation(this.grdDatasetProp, "A") == false) return;

        	trace("Validation이 통과 되었습니다.");
        };

        this.btnDupCheck_onclick = function(obj,e)
        {
        	var nRow = this.gfnChkDuplicateData(this.dsDupl, "Column0,Column1,Column2", this.dsDupl.rowposition);

        	if (nRow > -1) {
        		this.gfnAlert("msg.err.validator.duplcation",[nRow+"번째 로우"]);
        		this.dsDupl.set_rowposition(nRow);
        		this.grdDup.setCellPos(2);
        		this.grdDup.showEditor(true);
        		return;
        	}

        	trace("Validation이 통과 되었습니다.");
        };

        this.btnDupDsCheck_onclick = function(obj,e)
        {
        	var nRow = this.gfnDuplicateData(this.dsDupl, "Column0,Column1,Column2");

        	if (nRow > -1) {
        		this.gfnAlert("msg.err.validator.duplcation",[nRow+"번째 로우"]);
        		this.dsDupl.set_rowposition(nRow);
        		this.grdDup.setCellPos(2);
        		this.grdDup.showEditor(true);
        		return;
        	}
        	trace("Validation이 통과 되었습니다.");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnGrdCheck.addEventHandler("onclick",this.btnGrdCheck_onclick,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
            this.btnDetailCheck.addEventHandler("onclick",this.btnDetailCheck_onclick,this);
            this.btnGrpCheck.addEventHandler("onclick",this.btnGrpCheck_onclick,this);
            this.btnDupCheck.addEventHandler("onclick",this.btnDupCheck_onclick,this);
            this.btnDupDsCheck.addEventHandler("onclick",this.btnDupDsCheck_onclick,this);
            this.dsDataGrp.addEventHandler("onrowposchanged",this.dsSample00_onrowposchanged,this);
        };
        this.loadIncludeScript("sampleValidation.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
