(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("workDailyFm");
            this.set_titletext("주간 일일업무 현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"WORK_FDATE\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_TDATE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"WORK_TIME\" type=\"int\" size=\"4\"/><Column id=\"WORK_CONTENTS\" type=\"string\" size=\"32\"/><Column id=\"WORK_TYPE\" type=\"string\" size=\"32\"/><Column id=\"USER_ID\" type=\"string\" size=\"32\"/><Column id=\"WORK_SEQ\" type=\"int\" size=\"4\"/><Column id=\"WORK_DATE\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWork", this);
            obj._setContents("<ColumnInfo><Column id=\"WORK_TIME\" type=\"int\" size=\"4\"/><Column id=\"WORK_CONTENTS\" type=\"string\" size=\"32\"/><Column id=\"WORK_TYPE\" type=\"string\" size=\"32\"/><Column id=\"USER_ID\" type=\"string\" size=\"32\"/><Column id=\"WORK_SEQ\" type=\"int\" size=\"4\"/><Column id=\"WORK_DATE\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAddWork", this);
            obj._setContents("<ColumnInfo><Column id=\"WORK_TIME\" type=\"int\" size=\"4\"/><Column id=\"WORK_CONTENTS\" type=\"string\" size=\"32\"/><Column id=\"WORK_TYPE\" type=\"string\" size=\"32\"/><Column id=\"USER_ID\" type=\"string\" size=\"32\"/><Column id=\"WORK_SEQ\" type=\"int\" size=\"4\"/><Column id=\"WORK_DATE\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds00", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTargetWork", this);
            obj._setContents("<ColumnInfo><Column id=\"WORK_TIME\" type=\"int\" size=\"4\"/><Column id=\"WORK_CONTENTS\" type=\"string\" size=\"32\"/><Column id=\"WORK_TYPE\" type=\"string\" size=\"32\"/><Column id=\"USER_ID\" type=\"string\" size=\"32\"/><Column id=\"WORK_SEQ\" type=\"int\" size=\"4\"/><Column id=\"WORK_DATE\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWorkSum", this);
            obj._setContents("<ColumnInfo><Column id=\"WORK_TIME\" type=\"int\" size=\"4\"/><Column id=\"WORK_CONTENTS\" type=\"string\" size=\"32\"/><Column id=\"WORK_TYPE\" type=\"string\" size=\"32\"/><Column id=\"USER_ID\" type=\"string\" size=\"32\"/><Column id=\"WORK_SEQ\" type=\"int\" size=\"4\"/><Column id=\"WORK_DATE\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"WORK_CONTENTS\"/><Col id=\"WORK_TYPE\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWorkTargetSum", this);
            obj._setContents("<ColumnInfo><Column id=\"WORK_TIME\" type=\"int\" size=\"4\"/><Column id=\"WORK_CONTENTS\" type=\"string\" size=\"32\"/><Column id=\"WORK_TYPE\" type=\"string\" size=\"32\"/><Column id=\"USER_ID\" type=\"string\" size=\"32\"/><Column id=\"WORK_SEQ\" type=\"int\" size=\"4\"/><Column id=\"WORK_DATE\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"WORK_CONTENTS\">TOTAL</Col><Col id=\"WORK_TYPE\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridTarget", this);
            obj._setContents("<ColumnInfo><Column id=\"WORK_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CTN0\" type=\"STRING\" size=\"256\"/><Column id=\"TIME0\" type=\"INT\" size=\"256\"/><Column id=\"CTN1\" type=\"STRING\" size=\"256\"/><Column id=\"TIME1\" type=\"INT\" size=\"256\"/><Column id=\"CTN2\" type=\"STRING\" size=\"256\"/><Column id=\"TIME2\" type=\"INT\" size=\"256\"/><Column id=\"CTN3\" type=\"STRING\" size=\"256\"/><Column id=\"TIME3\" type=\"INT\" size=\"256\"/><Column id=\"CTN4\" type=\"STRING\" size=\"256\"/><Column id=\"TIME4\" type=\"INT\" size=\"256\"/><Column id=\"CTN5\" type=\"STRING\" size=\"256\"/><Column id=\"TIME5\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridWork", this);
            obj._setContents("<ColumnInfo><Column id=\"WORK_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CTN0\" type=\"STRING\" size=\"256\"/><Column id=\"TIME0\" type=\"INT\" size=\"256\"/><Column id=\"CTN1\" type=\"STRING\" size=\"256\"/><Column id=\"TIME1\" type=\"INT\" size=\"256\"/><Column id=\"CTN2\" type=\"STRING\" size=\"256\"/><Column id=\"TIME2\" type=\"INT\" size=\"256\"/><Column id=\"CTN3\" type=\"STRING\" size=\"256\"/><Column id=\"TIME3\" type=\"INT\" size=\"256\"/><Column id=\"CTN4\" type=\"STRING\" size=\"256\"/><Column id=\"TIME4\" type=\"INT\" size=\"256\"/><Column id=\"CTN5\" type=\"STRING\" size=\"256\"/><Column id=\"TIME5\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridAdd", this);
            obj._setContents("<ColumnInfo><Column id=\"WORK_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CTN0\" type=\"STRING\" size=\"256\"/><Column id=\"TIME0\" type=\"INT\" size=\"256\"/><Column id=\"CTN1\" type=\"STRING\" size=\"256\"/><Column id=\"TIME1\" type=\"INT\" size=\"256\"/><Column id=\"CTN2\" type=\"STRING\" size=\"256\"/><Column id=\"TIME2\" type=\"INT\" size=\"256\"/><Column id=\"CTN3\" type=\"STRING\" size=\"256\"/><Column id=\"TIME3\" type=\"INT\" size=\"256\"/><Column id=\"CTN4\" type=\"STRING\" size=\"256\"/><Column id=\"TIME4\" type=\"INT\" size=\"256\"/><Column id=\"CTN5\" type=\"STRING\" size=\"256\"/><Column id=\"TIME5\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","56","-158","185","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
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
            obj.set_taborder("2");
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
            obj.set_taborder("3");
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
            obj.set_taborder("4");
            obj.set_value("20190308");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"48","28","25","10",null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","12","107","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("기준일자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("cal00","107","11","150","27",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle00_00_00","264","14","74","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divUser","staTitle00_00_00:20","14","250","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("div00");
            obj.set_url("common::cmmUserSearch.xfdl");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","divSearch:0","264","43",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("주간 일일업무 현황");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0","97",null,null,"20","20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","0","0","1199","183",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsGridTarget");
            obj.set_autoenter("select");
            obj.set_autosizingtype("row");
            obj.set_cellsizingtype("row");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"350\"/><Column size=\"40\"/><Column size=\"350\"/><Column size=\"40\"/><Column size=\"350\"/><Column size=\"40\"/><Column size=\"350\"/><Column size=\"40\"/><Column size=\"350\"/><Column size=\"40\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\" band=\"head\"/><Row size=\"50\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" font=\"bold 13px/normal &quot;noto&quot;,&quot;Malgun Gothic&quot;,&quot;Arial&quot;\" color=\"#000000\"/><Cell col=\"1\" colspan=\"2\" text=\"월요일\" font=\"bold 13px/normal &quot;noto&quot;,&quot;Malgun Gothic&quot;,&quot;Arial&quot;\" background=\"#132C30\" color=\"#ffffff\"/><Cell col=\"3\" colspan=\"2\" text=\"화요일\" font=\"bold 13px/normal &quot;noto&quot;,&quot;Malgun Gothic&quot;,&quot;Arial&quot;\" background=\"#132C30\" color=\"#ffffff\"/><Cell col=\"5\" colspan=\"2\" text=\"수요일\" font=\"bold 13px/normal &quot;noto&quot;,&quot;Malgun Gothic&quot;,&quot;Arial&quot;\" background=\"#132C30\" color=\"#ffffff\"/><Cell col=\"7\" colspan=\"2\" text=\"목요일\" font=\"bold 13px/normal &quot;noto&quot;,&quot;Malgun Gothic&quot;,&quot;Arial&quot;\" background=\"#132C30\" color=\"#ffffff\"/><Cell col=\"9\" colspan=\"2\" text=\"금요일\" font=\"bold 13px/normal &quot;noto&quot;,&quot;Malgun Gothic&quot;,&quot;Arial&quot;\" background=\"#132C30\" color=\"#ffffff\"/><Cell row=\"1\" col=\"1\" text=\"업무내용\"/><Cell row=\"1\" col=\"2\" text=\"분\"/><Cell row=\"1\" col=\"3\" text=\"업무내용\"/><Cell row=\"1\" col=\"4\" text=\"분\"/><Cell row=\"1\" col=\"5\" text=\"업무내용\"/><Cell row=\"1\" col=\"6\" text=\"분\"/><Cell row=\"1\" col=\"7\" text=\"업무내용\"/><Cell row=\"1\" col=\"8\" text=\"분\"/><Cell row=\"1\" col=\"9\" text=\"업무내용\"/><Cell row=\"1\" col=\"10\" text=\"분\"/></Band><Band id=\"body\"><Cell calendardateformat=\"yyyy-MM-dd HH:mm:ss\" textAlign=\"center\" autosizerow=\"limitmin\" text=\"bind:WORK_TYPE\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:CTN0\" displaytype=\"textareacontrol\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" textAlign=\"left\" autosizerow=\"limitmin\"/><Cell col=\"2\" text=\"bind:TIME0\" displaytype=\"number\" maskeditformat=\"#,###\" border=\"0px none,1px solid #000000,0px none,0px none\"/><Cell col=\"3\" text=\"bind:CTN1\" displaytype=\"textareacontrol\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" textAlign=\"left\" autosizerow=\"limitmin\"/><Cell col=\"4\" text=\"bind:TIME1\" displaytype=\"number\" maskeditformat=\"#,###\" border=\"0px none,1px solid #000000,0px none,0px none\"/><Cell col=\"5\" text=\"bind:CTN2\" displaytype=\"textareacontrol\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" textAlign=\"left\" autosizerow=\"limitmin\"/><Cell col=\"6\" text=\"bind:CTN2\" displaytype=\"number\" maskeditformat=\"#,###\" border=\"0px none,1px solid #000000,0px none,0px none\"/><Cell col=\"7\" text=\"bind:CTN3\" displaytype=\"textareacontrol\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" textAlign=\"left\" autosizerow=\"limitmin\"/><Cell col=\"8\" text=\"bind:TIME3\" displaytype=\"number\" maskeditformat=\"#,###\" border=\"0px none,1px solid #000000,0px none,0px none\"/><Cell col=\"9\" text=\"bind:CTN4\" displaytype=\"textareacontrol\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" textAlign=\"left\" autosizerow=\"limitmin\"/><Cell col=\"10\" text=\"bind:TIME4\" displaytype=\"number\" edittype=\"mask\" maskeditformat=\"#,###\"/></Band></Format></Formats>");
            this.div00.addChild(obj.name, obj);

            obj = new Grid("grdList00","0","grdList:5","1199","121",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsGridWork");
            obj.set_autoenter("select");
            obj.set_autosizingtype("row");
            obj.set_cellsizingtype("row");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"350\"/><Column size=\"40\"/><Column size=\"350\"/><Column size=\"40\"/><Column size=\"350\"/><Column size=\"40\"/><Column size=\"350\"/><Column size=\"40\"/><Column size=\"350\"/><Column size=\"40\"/></Columns><Rows><Row size=\"50\"/></Rows><Band id=\"body\"><Cell calendardateformat=\"yyyy-MM-dd HH:mm:ss\" textAlign=\"center\" autosizerow=\"limitmin\" text=\"bind:WORK_TYPE\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:CTN0\" displaytype=\"textareacontrol\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" textAlign=\"left\" autosizerow=\"limitmin\"/><Cell col=\"2\" text=\"bind:TIME0\" displaytype=\"number\" maskeditformat=\"#,###\" border=\"0px none,1px solid #000000,0px none,0px none\"/><Cell col=\"3\" text=\"bind:CTN1\" displaytype=\"textareacontrol\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" textAlign=\"left\" autosizerow=\"limitmin\"/><Cell col=\"4\" text=\"bind:TIME1\" displaytype=\"number\" maskeditformat=\"#,###\" border=\"0px none,1px solid #000000,0px none,0px none\"/><Cell col=\"5\" text=\"bind:CTN2\" displaytype=\"textareacontrol\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" textAlign=\"left\" autosizerow=\"limitmin\"/><Cell col=\"6\" text=\"bind:CTN2\" displaytype=\"number\" maskeditformat=\"#,###\" border=\"0px none,1px solid #000000,0px none,0px none\"/><Cell col=\"7\" text=\"bind:CTN3\" displaytype=\"textareacontrol\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" textAlign=\"left\" autosizerow=\"limitmin\"/><Cell col=\"8\" text=\"bind:TIME3\" displaytype=\"number\" maskeditformat=\"#,###\" border=\"0px none,1px solid #000000,0px none,0px none\"/><Cell col=\"9\" text=\"bind:CTN4\" displaytype=\"textareacontrol\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" textAlign=\"left\" autosizerow=\"limitmin\"/><Cell col=\"10\" text=\"bind:TIME4\" displaytype=\"number\" edittype=\"mask\" maskeditformat=\"#,###\"/></Band></Format></Formats>");
            this.div00.addChild(obj.name, obj);

            obj = new Grid("grdList00_00","0","grdList00:5","1199","109",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsGridAdd");
            obj.set_autoenter("select");
            obj.set_autosizingtype("row");
            obj.set_cellsizingtype("row");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"350\"/><Column size=\"40\"/><Column size=\"350\"/><Column size=\"40\"/><Column size=\"350\"/><Column size=\"40\"/><Column size=\"350\"/><Column size=\"40\"/><Column size=\"350\"/><Column size=\"40\"/></Columns><Rows><Row size=\"50\"/></Rows><Band id=\"body\"><Cell calendardateformat=\"yyyy-MM-dd HH:mm:ss\" textAlign=\"center\" autosizerow=\"limitmin\" text=\"bind:WORK_TYPE\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:CTN0\" displaytype=\"textareacontrol\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" textAlign=\"left\" autosizerow=\"limitmin\"/><Cell col=\"2\" text=\"bind:TIME0\" displaytype=\"number\" maskeditformat=\"#,###\" border=\"0px none,1px solid #000000,0px none,0px none\"/><Cell col=\"3\" text=\"bind:CTN1\" displaytype=\"textareacontrol\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" textAlign=\"left\" autosizerow=\"limitmin\"/><Cell col=\"4\" text=\"bind:TIME1\" displaytype=\"number\" maskeditformat=\"#,###\" border=\"0px none,1px solid #000000,0px none,0px none\"/><Cell col=\"5\" text=\"bind:CTN2\" displaytype=\"textareacontrol\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" textAlign=\"left\" autosizerow=\"limitmin\"/><Cell col=\"6\" text=\"bind:CTN2\" displaytype=\"number\" maskeditformat=\"#,###\" border=\"0px none,1px solid #000000,0px none,0px none\"/><Cell col=\"7\" text=\"bind:CTN3\" displaytype=\"textareacontrol\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" textAlign=\"left\" autosizerow=\"limitmin\"/><Cell col=\"8\" text=\"bind:TIME3\" displaytype=\"number\" maskeditformat=\"#,###\" border=\"0px none,1px solid #000000,0px none,0px none\"/><Cell col=\"9\" text=\"bind:CTN4\" displaytype=\"textareacontrol\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" textAlign=\"left\" autosizerow=\"limitmin\"/><Cell col=\"10\" text=\"bind:TIME4\" displaytype=\"number\" edittype=\"mask\" maskeditformat=\"#,###\"/></Band></Format></Formats>");
            this.div00.addChild(obj.name, obj);

            obj = new Grid("grdList00_00_00","0","grdList00_00:10","1199","109",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_autoenter("select");
            obj.set_binddataset("dsWorkSum");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"350\"/><Column size=\"40\"/><Column size=\"350\"/><Column size=\"40\"/><Column size=\"350\"/><Column size=\"40\"/><Column size=\"350\"/><Column size=\"40\"/><Column size=\"350\"/><Column size=\"40\"/></Columns><Rows><Row size=\"40\"/><Row size=\"40\"/></Rows><Band id=\"body\"><Cell rowspan=\"2\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" textAlign=\"center\" autosizerow=\"limitmin\" suppress=\"1\" text=\"TOTAL\"/><Cell col=\"1\" text=\"목표시간\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" textAlign=\"left\" autosizerow=\"limitmin\"/><Cell col=\"2\" displaytype=\"number\" maskeditformat=\"#,###\" expr=\"comp.parent.parent.parent.fnGetTarget(0)\" border=\"0px none,1px solid #000000,0px none,0px none\"/><Cell col=\"3\" text=\"목표시간\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" textAlign=\"left\" autosizerow=\"limitmin\"/><Cell col=\"4\" displaytype=\"number\" maskeditformat=\"#,###\" expr=\"comp.parent.parent.parent.fnGetTarget(1)\" border=\"0px none,1px solid #000000,0px none,0px none\"/><Cell col=\"5\" text=\"목표시간\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" textAlign=\"left\" autosizerow=\"limitmin\"/><Cell col=\"6\" expr=\"comp.parent.parent.parent.fnGetTarget(2)\" border=\"0px none,1px solid #000000,0px none,0px none\" displaytype=\"number\"/><Cell col=\"7\" text=\"목표시간\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" textAlign=\"left\" autosizerow=\"limitmin\"/><Cell col=\"8\" displaytype=\"number\" maskeditformat=\"#,###\" expr=\"comp.parent.parent.parent.fnGetTarget(3)\" border=\"0px none,1px solid #000000,0px none,0px none\"/><Cell col=\"9\" text=\"목표시간\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" textAlign=\"left\" autosizerow=\"limitmin\"/><Cell col=\"10\" displaytype=\"number\" maskeditformat=\"#,###\" expr=\"comp.parent.parent.parent.fnGetTarget(4)\"/><Cell row=\"1\" col=\"1\" text=\"업무시간\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" textAlign=\"left\" autosizerow=\"limitmin\"/><Cell row=\"1\" col=\"2\" displaytype=\"number\" maskeditformat=\"#,###\" expr=\"comp.parent.parent.parent.fnGetWork(0)\" border=\"0px none,1px solid #000000,0px none,0px none\"/><Cell row=\"1\" col=\"3\" text=\"업무시간\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" textAlign=\"left\" autosizerow=\"limitmin\"/><Cell row=\"1\" col=\"4\" displaytype=\"number\" maskeditformat=\"#,###\" expr=\"comp.parent.parent.parent.fnGetWork(1)\" border=\"0px none,1px solid #000000,0px none,0px none\"/><Cell row=\"1\" col=\"5\" text=\"업무시간\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" textAlign=\"left\" autosizerow=\"limitmin\"/><Cell row=\"1\" col=\"6\" expr=\"comp.parent.parent.parent.fnGetWork(2)\" border=\"0px none,1px solid #000000,0px none,0px none\"/><Cell row=\"1\" col=\"7\" text=\"업무시간\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" textAlign=\"left\" autosizerow=\"limitmin\"/><Cell row=\"1\" col=\"8\" displaytype=\"number\" maskeditformat=\"#,###\" expr=\"comp.parent.parent.parent.fnGetWork(3)\" border=\"0px none,1px solid #000000,0px none,0px none\"/><Cell row=\"1\" col=\"9\" text=\"업무시간\" displaytype=\"normal\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" textAlign=\"left\" autosizerow=\"limitmin\"/><Cell row=\"1\" col=\"10\" displaytype=\"number\" maskeditformat=\"#,###\" expr=\"comp.parent.parent.parent.fnGetWork(4)\"/></Band></Format></Formats>");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btnExcelDown",null,"61","119","28","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("엑셀다운로드");
            obj.set_cssclass("btn_WF_ExcelSave");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form.divUser
            obj = new Layout("default","",0,0,this.divSearch.form.divUser.form,function(p){});
            this.divSearch.form.divUser.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1200,736,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item4","divSearch.form.divUser.form.edtUserId","value","dsCond","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::cmmUserSearch.xfdl");
        };
        
        // User Script
        this.registerScript("workWeeklyFm.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	logSytmLoginFm.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/06/28
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/06/28			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.fvToday = null;
        this.fvDate = [];
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	//날짜세팅
        	this.fvToday = this.gfnGetDate();
        	this.divSearch.form.cal00.set_value(this.fvToday);
        	this.getMonday();

        	this.divSearch.form.cal00.set_value(this.fvToday);

        	this.div00.form.grdList.set_width(100 + (390*5) + 3);
        	this.div00.form.grdList00.set_width(100 + (390*5) + 3);
        	this.div00.form.grdList00_00.set_width(100 + (390*5) + 3);
        	this.div00.form.grdList00_00_00.set_width(100 + (390*5) + 3);

        };


        this.getMonday = function () {
        	var cald = this.divSearch.form.cal00.value;
        	var d = new Date(this.fnDateFormat(cald));
        	var d2 = new Date(this.fnDateFormat(cald));

        	var day = d.getDay(),
        		diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
        	var monday =  new Date(d.setDate(diff));
        	var strMonday = this.gfnGetDate("date", "", monday);
        	diff = d2.getDate() - day + (day == 0 ? -2 : 5); // adjust when day is sunday
        	var friday =  new Date(d2.setDate(diff));
        	var strFriday = this.gfnGetDate("date", "", friday);

        	this.dsCond.setColumn(0, "WORK_FDATE", strMonday);
        	this.dsCond.setColumn(0, "WORK_TDATE", strFriday);

        	this.fnGridHead(monday);

        }
        this.fnDateFormat = function (monday)
        {
        	return monday.substr(0,4) + "-" + monday.substr(4,2) + "-" + monday.substr(6,2);
        };

        this.fnGridHead = function(monday)
        {
        	var mon = this.gfnGetDate("date", "", monday);
        	this.fvDate[0] = mon;
        	var col = 1;
        	var arrDay = ["월","화","수","목","금"];
        	for(var i=0;i<5;i++) {
        		this.div00.form.grdList.setCellProperty("head", col, "text", this.fnDateFormat(mon) + " " + arrDay[i]);
        		mon = this.gfnAddDate(mon, 1);
        		this.fvDate[i+1] = mon;
        		col = col+1;
        	}
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	if( this.fnSearchValidation()){
        		this.fnTranSearch();
        	}
        };
        this.fnSearchValidation = function ()
        {
        	// 정합성 체크
        	this.gfnClearValidation(this.dsCond);

        	this.gfnSetValidation(this.dsCond, "WORK_FDATE", "기간"	, "required");
        	this.gfnSetValidation(this.dsCond, "WORK_TDATE", "기간"	, "required");
        	this.gfnSetValidation(this.dsCond, "USER_ID", "사용자"	, "required");

        	// Dataset의 변경된 Row Validation check
        	if (this.gfnValidation(this.dsCond, "A") == false) return false;
        	else return true;
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //조회
        this.fnTranSearch = function ()
        {
        	var strSvcId    = "searchWeekWorkList";
        	var strSvcUrl   = "searchWeekWorkList.do";
        	var inData      = "dsCond=dsCond";
        	var outData     = "dsList=dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //transaction
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	if(nErrCd < 0) return;
        	switch(sSvcId) {
        		case "searchWeekWorkList":
        			this.fnSplitData();
        			break;
        		default: break;
        	}
        };

        this.fnSplitData = function() {

        	this.dsGridTarget.clearData();
        	this.dsGridWork.clearData();
        	this.dsGridAdd.clearData();

        	this.div00.form.grdList.setCellProperty("head", 0, "text",
        	this.divSearch.form.divUser.form.edtName.value);
        	var arrCnt = [];
        	for(var i=0;i<5;i++) {
        		this.dsList.filter("WORK_DATE == '" + this.fvDate[i] + "' && WORK_TYPE == 'T'");

        		for(var j=0;j<this.dsList.rowcount;j++) {
        			if(this.dsGridTarget.rowcount < (j+1)) {
        				this.dsGridTarget.addRow();
        			}
        			this.dsGridTarget.setColumn(j, "CTN" + i, this.dsList.getColumn(j, "WORK_CONTENTS"));
        			this.dsGridTarget.setColumn(j, "TIME" + i, this.dsList.getColumn(j, "WORK_TIME"));
        			this.dsGridTarget.setColumn(j, "WORK_TYPE", "업무목표");
        		}
        		this.dsList.filter("WORK_DATE == '" + this.fvDate[i] + "' && WORK_TYPE == 'W'");

        		for(var j=0;j<this.dsList.rowcount;j++) {
        			if(this.dsGridWork.rowcount < (j+1)) {
        				this.dsGridWork.addRow();
        			}
        			this.dsGridWork.setColumn(j, "CTN" + i, this.dsList.getColumn(j, "WORK_CONTENTS"));
        			this.dsGridWork.setColumn(j, "TIME" + i, this.dsList.getColumn(j, "WORK_TIME"));
        			this.dsGridWork.setColumn(j, "WORK_TYPE", "업무실적");
        		}

        		this.dsList.filter("WORK_DATE == '" + this.fvDate[i] + "' && WORK_TYPE == 'A'");
        		for(var j=0;j<this.dsList.rowcount;j++) {
        			if(this.dsGridAdd.rowcount < (j+1)) {
        				this.dsGridAdd.addRow();
        			}
        			this.dsGridAdd.setColumn(j, "CTN" + i, this.dsList.getColumn(j, "WORK_CONTENTS"));
        			this.dsGridAdd.setColumn(j, "TIME" + i, this.dsList.getColumn(j, "WORK_TIME"));
        			this.dsGridAdd.setColumn(j, "WORK_TYPE", "추가업무");
        		}
        	}
        	this.dsGridTarget.set_rowposition(-1);
        	this.dsGridWork.set_rowposition(-1);
        	this.dsGridAdd.set_rowposition(-1);

        	var size = this.div00.form.grdList.getRealRowFullSize("body");
        	this.div00.form.grdList.set_height(64 + size + 2);
        	size = this.div00.form.grdList00.getRealRowFullSize("body");
        	this.div00.form.grdList00.set_height(size + 2);
        	size = this.div00.form.grdList00_00.getRealRowFullSize("body");
        	this.div00.form.grdList00_00.set_height(size + 2);
        	size = this.div00.form.grdList00_00_00.getRealRowFullSize("body");
        	this.div00.form.grdList00_00_00.set_height(size + 2);

        // 	this.div00.form.grdList.set_height(64 + (50*this.dsGridTarget.rowcount) + 3);
        // 	this.div00.form.grdList00.set_height((50*this.dsGridWork.rowcount) + 3);
        // 	this.div00.form.grdList00_00.set_height((50*this.dsGridAdd.rowcount) + 3);

        	this.div00.form.resetScroll();

        	this.dsWorkSum.setColumn(0, "WORK_TIME", 0);
        	this.div00.form.grdList00_00_00.redrawExprCell();
        };

        this.fnGetTarget = function(idx) {
        	//console.log("#######", idx, this.dsGridTarget.getColumn(0, "TIME" + idx),this.dsGridTarget.getSum("TIME" + idx));
        	return this.dsGridTarget.getSum("TIME" + idx);
        };

        this.fnGetWork = function(idx) {
        	var suma = this.dsGridWork.getSum("TIME" + idx);
        	var sumb = this.dsGridAdd.getSum("TIME" + idx);

        	return suma + sumb;
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.cfnSearch();
        };



        this.divSearch_cal00_onchanged = function(obj,e)
        {
        	this.fvToday = obj.value;
        	this.getMonday();
        	this.dsGridTarget.clearData();
        	this.dsGridWork.clearData();
        	this.dsGridAdd.clearData();
        };

        this.btnExcelDown_onclick = function(obj,e)
        {
        	// 엑셀 상단 타이틀 텍스트 설정
        	var sSubTitle = this.staTitle01.text;

        	var arrGrid = [this.div00.form.grdList, this.div00.form.grdList00, this.div00.form.grdList00_00, this.div00.form.grdList00_00_00];
        	var arrSheet = [];
        	arrSheet[0] = "sheet!A3";
        	var n = this.dsGridTarget.rowcount;
        	var nAdd = (3 + 4 + n);
        	arrSheet[1] = "sheet!A" + nAdd;
        	n = this.dsGridWork.rowcount;
        	nAdd = (nAdd + 2 + n);
        	arrSheet[2] = "sheet!A" + nAdd;
        	nAdd = (nAdd + 2 + 1);
        	arrSheet[3] = "sheet!A" + nAdd;
        		console.log(arrSheet);
        	// Excel Export 공통함수 호출
        	this.gfnExcelExport(arrGrid, arrSheet, "", "EXCEL2007","","", true, "");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.divSearch.form.cal00.addEventHandler("onchanged",this.divSearch_cal00_onchanged,this);
            this.btnExcelDown.addEventHandler("onclick",this.btnExcelDown_onclick,this);
            this.dsWork.addEventHandler("oncolumnchanged",this.dsWork_oncolumnchanged,this);
            this.dsAddWork.addEventHandler("oncolumnchanged",this.dsAddWork_oncolumnchanged,this);
            this.dsTargetWork.addEventHandler("oncolumnchanged",this.dsTargetWork_oncolumnchanged,this);
        };
        this.loadIncludeScript("workWeeklyFm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
