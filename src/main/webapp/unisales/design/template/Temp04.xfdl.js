(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Temp04");
            this.set_titletext("List-Detail");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"Edi\" type=\"STRING\" size=\"256\"/><Column id=\"Essential\" type=\"STRING\" size=\"256\"/><Column id=\"Num\" type=\"STRING\" size=\"256\"/><Column id=\"CenterAlign\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">01</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"CenterAlign\">가나다라마바사</Col></Row><Row><Col id=\"No\">02</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"CenterAlign\">가나다라마바사</Col></Row><Row><Col id=\"No\">03</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"CenterAlign\">가나다라마바사</Col></Row><Row><Col id=\"No\">04</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"CenterAlign\">가나다라마바사</Col></Row><Row><Col id=\"No\">05</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"CenterAlign\">가나다라마바사</Col></Row><Row><Col id=\"No\">06</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"CenterAlign\">가나다라마바사</Col></Row><Row><Col id=\"No\">07</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"CenterAlign\">가나다라마바사</Col></Row><Row><Col id=\"No\">08</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"CenterAlign\">가나다라마바사</Col></Row><Row><Col id=\"No\">09</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"CenterAlign\">가나다라마바사</Col></Row><Row><Col id=\"No\">10</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"CenterAlign\">가나다라마바사</Col></Row><Row><Col id=\"No\">11</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"CenterAlign\">가나다라마바사</Col></Row><Row><Col id=\"No\">12</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"CenterAlign\">가나다라마바사</Col></Row><Row><Col id=\"No\">13</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"CenterAlign\">가나다라마바사</Col></Row><Row><Col id=\"No\">14</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"CenterAlign\">가나다라마바사</Col></Row><Row><Col id=\"No\">15</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"CenterAlign\">가나다라마바사</Col></Row><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","0","12","98","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("필수캘린더");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo01","56","-158","185","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch_form_cbo01_innerdataset = new nexacro.NormalDataset("divSearch_form_cbo01_innerdataset", obj);
            divSearch_form_cbo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cbo01_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo02","282","-158","185","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch_form_cbo02_innerdataset = new nexacro.NormalDataset("divSearch_form_cbo02_innerdataset", obj);
            divSearch_form_cbo02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cbo02_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cbo03","521","-158","184","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch_form_cbo03_innerdataset = new nexacro.NormalDataset("divSearch_form_cbo03_innerdataset", obj);
            divSearch_form_cbo03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_cbo03_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("cal00","785","-158","184","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_value("20190308");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta01","238","12","86","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("검색라벨");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt00","324","12","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("cal01","98","12","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_cssclass("essential");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt04","467","12","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_cssclass("edi_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btn02","579","12","28","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_WF_EdiSch");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10","48","28","25",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("10");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("sta00","0","50","342","43",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("서브타이틀");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","0","93",null,null,"545","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("ds_grid");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"48\"/><Column size=\"160\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"에디트\"/><Cell col=\"3\" text=\"필수\" cssclass=\"essential\"/><Cell col=\"4\" text=\"숫자\"/><Cell col=\"5\" text=\"텍스트\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:No\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:Edi\" displaytype=\"editcontrol\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:Essential\" displaytype=\"text\"/><Cell col=\"4\" text=\"bind:Num\" displaytype=\"number\"/><Cell col=\"5\" text=\"bind:CenterAlign\" displaytype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta04","140","50","30","43",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("H43");
            this.addChild(obj.name, obj);

            obj = new Static("sta01",null,"50","342","43","183",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("상세디테일");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Div("div01",null,"93","505",null,"20","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("sta07","0","66",null,"34","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"34","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta06","0","33",null,"34","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta04","0","165",null,"34","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta16","0","132",null,"34","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta18","0","99",null,"34","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("27");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta19","0","198",null,"34","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("28");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta20","0","231",null,"34","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("29");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta21","0","264",null,"34","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("30");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta22","0","297",null,"34","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("31");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta23","0","330",null,"34","0",null,null,null,null,null,this.div01.form);
            obj.set_taborder("32");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta24","0","363",null,null,"0","0",null,null,null,null,this.div01.form);
            obj.set_taborder("33");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta02","0","0","108","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("2");
            obj.set_text("에디트");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta05","0","33","108","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("3");
            obj.set_text("라디오버튼");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta08","0","66","108","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("5");
            obj.set_text("체크박스");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta09","252","0","108","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("6");
            obj.set_text("캘린더");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta10","0","99","108","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("7");
            obj.set_text("콤보박스");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta11","252","99","108","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("8");
            obj.set_text("필수에디트");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta12","0","132","108","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("9");
            obj.set_text("디세이블검색");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta13","252","132","108","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("10");
            obj.set_text("검색");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta14","252","33","108","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("11");
            obj.set_text("마스크에디트");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta17","0","165","108","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("12");
            obj.set_text("에디트");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cbo00","112","104","136","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("13");
            obj.set_text("Combo00");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt00","112","137","136","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("14");
            obj.set_enable("false");
            obj.set_cssclass("edi_WF_Search");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt01","364","137","136","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("15");
            obj.set_cssclass("edi_WF_Search");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt02","364","104","136","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("16");
            obj.set_cssclass("essential");
            this.div01.addChild(obj.name, obj);

            obj = new Button("btn02","220","137","28","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("17");
            obj.set_cssclass("btn_WF_EdiSch");
            obj.set_enable("false");
            this.div01.addChild(obj.name, obj);

            obj = new Button("btn00","472","137","28","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("18");
            obj.set_cssclass("btn_WF_EdiSch");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt05","112","5","136","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("19");
            this.div01.addChild(obj.name, obj);

            obj = new Radio("rdo00","112","38","136","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("20");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var div01_form_rdo00_innerdataset = new nexacro.NormalDataset("div01_form_rdo00_innerdataset", obj);
            div01_form_rdo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">체크</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">체크</Col></Row></Rows>");
            obj.set_innerdataset(div01_form_rdo00_innerdataset);
            obj.set_text("체크");
            obj.set_value("0");
            obj.set_index("0");
            this.div01.addChild(obj.name, obj);

            obj = new CheckBox("chk00","112","71","150","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("21");
            obj.set_text("사용");
            obj.set_value("true");
            this.div01.addChild(obj.name, obj);

            obj = new Calendar("cal00","364","5","136","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("22");
            this.div01.addChild(obj.name, obj);

            obj = new Button("btn01","461","38","40","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("23");
            obj.set_text("버튼");
            obj.set_cssclass("btn_WF_Detail");
            this.div01.addChild(obj.name, obj);

            obj = new Spin("spn00","364","71","136","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("24");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta25","252","66","108","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("34");
            obj.set_text("스핀박스");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta26","0","363","108",null,null,"0",null,null,null,null,this.div01.form);
            obj.set_taborder("35");
            obj.set_text("텍스트박스");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta27","0","330","108","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("36");
            obj.set_text("에디트");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta28","0","297","108","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("37");
            obj.set_text("에디트");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta29","0","264","108","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("38");
            obj.set_text("콤보박스");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta30","0","231","108","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("39");
            obj.set_text("에디트");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta31","0","198","108","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("40");
            obj.set_text("마스크에디트");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta32","252","330","108","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("41");
            obj.set_text("마스크에디트");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta33","252","297","108","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("42");
            obj.set_text("마스크에디트");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta34","252","264","108","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("43");
            obj.set_text("필수에디트");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta35","252","231","108","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("44");
            obj.set_text("캘린더");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta36","252","198","108","34",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("45");
            obj.set_text("마스크에디트");
            obj.set_cssclass("sta_WF_Label");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt07","112","170","389","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("46");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt08","112","236","136","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("47");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt09","112","302","136","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("48");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt10","112","335","136","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("49");
            this.div01.addChild(obj.name, obj);

            obj = new Edit("edt11","364","269","136","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("50");
            obj.set_cssclass("essential");
            this.div01.addChild(obj.name, obj);

            obj = new MaskEdit("msk00","112","203","136","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("51");
            obj.set_value("50000000");
            obj.set_format("###,###");
            this.div01.addChild(obj.name, obj);

            obj = new MaskEdit("msk01","364","203","136","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("52");
            obj.set_format("###,###");
            obj.set_value("50000000");
            this.div01.addChild(obj.name, obj);

            obj = new Calendar("cal01","364","236","136","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("53");
            this.div01.addChild(obj.name, obj);

            obj = new Combo("cbo02","112","269","136","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("54");
            obj.set_text("Combo00");
            this.div01.addChild(obj.name, obj);

            obj = new MaskEdit("msk02","364","302","136","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("55");
            obj.set_value("50000000");
            obj.set_format("###,###");
            this.div01.addChild(obj.name, obj);

            obj = new MaskEdit("msk03","364","335","136","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("56");
            obj.set_value("50000000");
            obj.set_format("###,###");
            this.div01.addChild(obj.name, obj);

            obj = new TextArea("txa00","112","368",null,null,"4","5",null,null,null,null,this.div01.form);
            obj.set_taborder("57");
            this.div01.addChild(obj.name, obj);

            obj = new MaskEdit("msk04","364","38","94","24",null,null,null,null,null,null,this.div01.form);
            obj.set_taborder("58");
            this.div01.addChild(obj.name, obj);

            obj = new Static("sta04_00",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W20");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div01.form
            obj = new Layout("default","",0,0,this.div01.form,function(p){});
            this.div01.form.addLayout(obj.name, obj);

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
        this.registerScript("Temp04.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	Temp04.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/06/30
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/06/30			TOBESOFT					최초생성
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
        	this.gfnFormOnload(obj,e); //필수함수

        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	//TODO..
        };

        //저장
        this.cfnSave = function ()
        {
        	//TODO..
        };

        //추가
        this.cfnAdd = function ()
        {
        	//TODO..
        };

        //삭제
        this.cfnDel = function ()
        {
        	//TODO..
        };
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
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btn02.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.div01.form.btn02.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.div01.form.btn00.addEventHandler("onclick",this.Div00_Button01_onclick,this);
        };
        this.loadIncludeScript("Temp04.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
