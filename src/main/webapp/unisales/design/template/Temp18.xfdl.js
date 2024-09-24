(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("authPermMenuMgFm");
            this.set_titletext("그룹 권한 메뉴 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"PREM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SYTM_FLAG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCondDetail", this);
            obj._setContents("<ColumnInfo><Column id=\"PERM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SYTM_FLAG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"PERM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SYTM_FLAG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PERM_GRP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PERM_GRP_EXPL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRegiMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"SYTM_FLAG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PERM_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"MODULE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ENGL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_WHLE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HIPO_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_FLAG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PARM\" type=\"STRING\" size=\"256\"/><Column id=\"USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REMK\" type=\"STRING\" size=\"256\"/><Column id=\"PERM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQR_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ANEW_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DELE_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRNT_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EXCL_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"INIT_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_SCOPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_ANEW_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_INQR_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_DELE_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_SAVE_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_PRNT_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_EXCL_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_INIT_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRegiMenuDel", this);
            obj._setContents("<ColumnInfo><Column id=\"SYTM_FLAG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PERM_CHK\" type=\"STRING\" size=\"256\"/><Column id=\"MODULE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ENGL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_WHLE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HIPO_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_FLAG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PARM\" type=\"STRING\" size=\"256\"/><Column id=\"USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"REMK\" type=\"STRING\" size=\"256\"/><Column id=\"PERM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INQR_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"ANEW_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SAVE_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DELE_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRNT_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"EXCL_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"INIT_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"SEARCH_SCOPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_ANEW_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_INQR_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_DELE_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_SAVE_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_PRNT_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_EXCL_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_INIT_BTTN_USED_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","12","102","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("시스템 구분");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
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

            obj = new Combo("cboSysGubun","staTitle00:0","12","180","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("cbo00");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle01","cboSysGubun:0","12","74","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("권한명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtPermNm","staTitle01:0","12","140","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","divSearch:0","260","43",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("권한 그룹");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","staTitle00:20","divSearch:0","102","43","668",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("그룹별 권한");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdAuthList","0","staTitle00:0","260",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList");
            obj.set_cellclickbound("cell");
            obj.set_autoenter("select");
            obj.set_selectchangetype("up");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"35\"/><Column size=\"80\"/><Column size=\"117\"/><Column size=\"48\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell displaytype=\"normal\" text=\"No\"/><Cell col=\"1\" edittype=\"normal\" displaytype=\"normal\" text=\"코드\"/><Cell col=\"2\" text=\"권한명\"/><Cell col=\"3\" text=\"여부\" autosizecol=\"none\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\" textAlign=\"center\"/><Cell col=\"1\" displaytype=\"text\" text=\"bind:PERM_ID\" textAlign=\"left\" edittype=\"expr:dataset.getRowType(currow)==2?&apos;text&apos;:&apos;none&apos;\" editmaxlength=\"10\" editinputtype=\"digit,english\" editinputmode=\"upper\" editautoselect=\"true\" editimemode=\"alpha\"/><Cell col=\"2\" text=\"bind:PERM_GRP_NM\" edittype=\"text\" displaytype=\"editcontrol\" editautoselect=\"true\" editimemode=\"hangul\"/><Cell col=\"3\" text=\"bind:USED_YN\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" autosizecol=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divRegiMenuSearch","grdAuthList:20","93","152","32",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle02","-18","3","60","24",null,null,null,null,null,null,this.divRegiMenuSearch.form);
            obj.set_taborder("1");
            obj.set_text("모듈");
            obj.set_fittocontents("width");
            obj.set_cssclass("sta_WF_SchLabelSub");
            this.divRegiMenuSearch.addChild(obj.name, obj);

            obj = new Combo("cboMenuModule","staTitle02:0","3","102","24",null,null,null,null,null,null,this.divRegiMenuSearch.form);
            obj.set_taborder("0");
            obj.set_text("워크플로우");
            obj.set_value("");
            obj.set_index("-1");
            this.divRegiMenuSearch.addChild(obj.name, obj);

            obj = new Grid("grdMenuRegi","grdAuthList:20","130",null,null,"20","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsRegiMenu");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj.set_cellclickbound("cell");
            obj.set_treeusebutton("use");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\" band=\"left\"/><Column size=\"35\" band=\"left\"/><Column size=\"280\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"48\"/><Column size=\"100\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"35\"/><Column size=\"48\"/></Columns><Rows><Row size=\"62\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"권한&#13;&#10;여부\"/><Cell col=\"1\" displaytype=\"normal\" text=\"No\"/><Cell col=\"2\" text=\"메뉴명\"/><Cell col=\"3\" text=\"메뉴코드\"/><Cell col=\"4\" text=\"상위메뉴&#13;&#10;코드\"/><Cell col=\"5\" text=\"메뉴모듈\"/><Cell col=\"6\" text=\"사용&#13;&#10;여부\"/><Cell col=\"7\" text=\"조회&#13;&#10;범위\"/><Cell col=\"8\" text=\"조회\" autosizecol=\"none\"/><Cell col=\"9\" text=\"신규\" autosizecol=\"none\"/><Cell col=\"10\" text=\"삭제\" autosizecol=\"none\"/><Cell col=\"11\" text=\"저장\" autosizecol=\"none\"/><Cell col=\"12\" text=\"출력\" autosizecol=\"none\"/><Cell col=\"13\" text=\"엑셀\" autosizecol=\"none\"/><Cell col=\"14\" text=\"추가&#13;&#10;버튼\" autosizecol=\"none\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:PERM_CHK\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/><Cell col=\"1\" text=\"expr:currow + 1\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:MENU_NM\" treelevel=\"bind:MENU_LVL\" treestartlevel=\"0\" displaytype=\"treeitemcontrol\" tooltiptext=\"bind:MENU_NM\" edittype=\"tree\"/><Cell col=\"3\" text=\"bind:MENU_ID\"/><Cell col=\"4\" text=\"bind:HIPO_MENU_ID\"/><Cell col=\"5\" text=\"bind:MODULE_CD\"/><Cell col=\"6\" text=\"bind:USED_YN\" displaytype=\"checkboxcontrol\"/><Cell col=\"7\" text=\"bind:SEARCH_SCOPE_CD\" edittype=\"expr:(PRGM_YN == &apos;1&apos; &amp;&amp; PERM_CHK==&apos;1&apos;) ? &apos;combo&apos; : &apos;none&apos;\" displaytype=\"expr:(PRGM_YN == &apos;1&apos; &amp;&amp; PERM_CHK==&apos;1&apos;) ? &apos;combocontrol&apos; : &apos;none&apos;\"/><Cell col=\"8\" text=\"bind:INQR_BTTN_USED_YN\" displaytype=\"expr:(PRGM_YN == &apos;1&apos; &amp;&amp; PERM_CHK==&apos;1&apos; &amp;&amp; PRGM_INQR_BTTN_USED_YN==&apos;1&apos;) ? &apos;checkboxcontrol&apos; : &apos;none&apos;\" edittype=\"expr:(PRGM_YN == &apos;1&apos; &amp;&amp; PERM_CHK==&apos;1&apos; &amp;&amp; PRGM_INQR_BTTN_USED_YN==&apos;1&apos;) ? &apos;checkbox&apos; : &apos;none&apos;\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" autosizecol=\"none\"/><Cell col=\"9\" text=\"bind:ANEW_BTTN_USED_YN\" displaytype=\"expr:(PRGM_YN == &apos;1&apos; &amp;&amp; PERM_CHK==&apos;1&apos; &amp;&amp; PRGM_ANEW_BTTN_USED_YN==&apos;1&apos;) ? &apos;checkboxcontrol&apos; : &apos;none&apos;\" edittype=\"expr:(PRGM_YN == &apos;1&apos; &amp;&amp; PERM_CHK==&apos;1&apos; &amp;&amp; PRGM_ANEW_BTTN_USED_YN==&apos;1&apos;) ? &apos;checkbox&apos; : &apos;none&apos;\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" autosizecol=\"none\"/><Cell col=\"10\" text=\"bind:DELE_BTTN_USED_YN\" displaytype=\"expr:(PRGM_YN == &apos;1&apos; &amp;&amp; PERM_CHK==&apos;1&apos; &amp;&amp; PRGM_DELE_BTTN_USED_YN==&apos;1&apos;) ? &apos;checkboxcontrol&apos; : &apos;none&apos;\" edittype=\"expr:(PRGM_YN == &apos;1&apos; &amp;&amp; PERM_CHK==&apos;1&apos; &amp;&amp; PRGM_DELE_BTTN_USED_YN==&apos;1&apos;) ? &apos;checkbox&apos; : &apos;none&apos;\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" autosizecol=\"none\"/><Cell col=\"11\" text=\"bind:SAVE_BTTN_USED_YN\" displaytype=\"expr:(PRGM_YN == &apos;1&apos; &amp;&amp; PERM_CHK==&apos;1&apos; &amp;&amp; PRGM_SAVE_BTTN_USED_YN==&apos;1&apos; ) ? &apos;checkboxcontrol&apos; : &apos;none&apos;\" edittype=\"expr:(PRGM_YN == &apos;1&apos; &amp;&amp; PERM_CHK==&apos;1&apos; &amp;&amp; PRGM_SAVE_BTTN_USED_YN==&apos;1&apos;) ? &apos;checkbox&apos; : &apos;none&apos;\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" autosizecol=\"none\"/><Cell col=\"12\" text=\"bind:PRNT_BTTN_USED_YN\" displaytype=\"expr:(PRGM_YN == &apos;1&apos; &amp;&amp; PERM_CHK==&apos;1&apos; &amp;&amp; PRGM_PRNT_BTTN_USED_YN==&apos;1&apos; ) ? &apos;checkboxcontrol&apos; : &apos;none&apos;\" edittype=\"expr:(PRGM_YN == &apos;1&apos; &amp;&amp; PERM_CHK==&apos;1&apos; &amp;&amp; PRGM_PRNT_BTTN_USED_YN==&apos;1&apos;) ? &apos;checkbox&apos; : &apos;none&apos;\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" autosizecol=\"none\"/><Cell col=\"13\" text=\"bind:EXCL_BTTN_USED_YN\" displaytype=\"expr:(PRGM_YN == &apos;1&apos; &amp;&amp; PERM_CHK==&apos;1&apos;&amp;&amp; PRGM_EXCL_BTTN_USED_YN==&apos;1&apos; ) ? &apos;checkboxcontrol&apos; : &apos;none&apos;\" edittype=\"expr:(PRGM_YN == &apos;1&apos; &amp;&amp; PERM_CHK==&apos;1&apos; &amp;&amp; PRGM_EXCL_BTTN_USED_YN==&apos;1&apos;) ? &apos;checkbox&apos; : &apos;none&apos;\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" autosizecol=\"none\"/><Cell col=\"14\" displaytype=\"expr:(PRGM_YN == &apos;1&apos;&amp;&amp;PERM_CHK==&apos;1&apos;) ? &apos;buttoncontrol&apos; : &apos;none&apos;\" edittype=\"expr:(PRGM_YN == &apos;1&apos;&amp;&amp;PERM_CHK==&apos;1&apos;) ? &apos;button&apos; : &apos;none&apos;\" expr=\"expr:(PRGM_YN == &apos;1&apos;&amp;&amp;PERM_CHK==&apos;1&apos;) ? &apos;관리&apos; : &apos;&apos;\" text=\"관리\" autosizecol=\"none\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divCmmnBtn",null,"60","150",null,"20","grdMenuRegi:42",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Button("btnSave",null,"0","50","28","0",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_visible("true");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Div("divCmmnBtn00","88","60","171",null,null,"grdAuthList:5",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelDown",null,"0","28","28","0",null,null,null,null,null,this.divCmmnBtn00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_ExcelSaveSm");
            obj.set_tooltiptext("엑셀다운로드");
            this.divCmmnBtn00.addChild(obj.name, obj);

            obj = new Button("btnExcelUp",null,"0","28","28","btnExcelDown:3",null,null,null,null,null,this.divCmmnBtn00.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_ExcelUpSm");
            obj.set_tooltiptext("엑셀업로드");
            this.divCmmnBtn00.addChild(obj.name, obj);

            obj = new Button("btnDel",null,"0","28","28","btnExcelUp:3",null,null,null,null,null,this.divCmmnBtn00.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_DeleteSm");
            obj.set_visible("false");
            obj.set_tooltiptext("행삭제");
            this.divCmmnBtn00.addChild(obj.name, obj);

            obj = new Button("btnAdd",null,"0","28","28","btnDel:3",null,null,null,null,null,this.divCmmnBtn00.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_AddSm");
            obj.set_visible("false");
            obj.set_tooltiptext("행추가");
            this.divCmmnBtn00.addChild(obj.name, obj);

            obj = new Div("divRegiMenuSearch00",null,"93","599","32","19",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_SchSub");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00","-1","3","89","24",null,null,null,null,null,null,this.divRegiMenuSearch00.form);
            obj.set_taborder("13");
            obj.set_text("조회범위  ");
            obj.set_fittocontents("width");
            obj.set_cssclass("sta_WF_SchLabelSub");
            this.divRegiMenuSearch00.addChild(obj.name, obj);

            obj = new Combo("cboSearchScope","staTitle00:0","3","88","24",null,null,null,null,null,null,this.divRegiMenuSearch00.form);
            obj.set_taborder("12");
            obj.set_text("사업본부");
            obj.set_value("");
            obj.set_index("-1");
            this.divRegiMenuSearch00.addChild(obj.name, obj);

            obj = new Static("staTitle01","cboSearchScope:8","3","24","24",null,null,null,null,null,null,this.divRegiMenuSearch00.form);
            obj.set_taborder("11");
            obj.set_text("조회");
            obj.set_fittocontents("width");
            obj.set_cssclass("sta_WF_Bold");
            this.divRegiMenuSearch00.addChild(obj.name, obj);

            obj = new CheckBox("chkSearch","staTitle01:5","3","20","24",null,null,null,null,null,null,this.divRegiMenuSearch00.form);
            obj.set_taborder("10");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divRegiMenuSearch00.addChild(obj.name, obj);

            obj = new Static("staTitle02_00","chkSearch:8","3","24","24",null,null,null,null,null,null,this.divRegiMenuSearch00.form);
            obj.set_taborder("9");
            obj.set_text("신규");
            obj.set_fittocontents("width");
            obj.set_cssclass("sta_WF_Bold");
            this.divRegiMenuSearch00.addChild(obj.name, obj);

            obj = new CheckBox("chkNew","staTitle02_00:5","3","20","24",null,null,null,null,null,null,this.divRegiMenuSearch00.form);
            obj.set_taborder("8");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.divRegiMenuSearch00.addChild(obj.name, obj);

            obj = new Static("staTitle03","chkNew:8","3","24","24",null,null,null,null,null,null,this.divRegiMenuSearch00.form);
            obj.set_taborder("7");
            obj.set_text("삭제");
            obj.set_fittocontents("width");
            obj.set_cssclass("sta_WF_Bold");
            this.divRegiMenuSearch00.addChild(obj.name, obj);

            obj = new CheckBox("chkDel","staTitle03:5","3","20","24",null,null,null,null,null,null,this.divRegiMenuSearch00.form);
            obj.set_taborder("6");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.divRegiMenuSearch00.addChild(obj.name, obj);

            obj = new Static("staTitle04","chkDel:8","3","24","24",null,null,null,null,null,null,this.divRegiMenuSearch00.form);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_fittocontents("width");
            obj.set_cssclass("sta_WF_Bold");
            this.divRegiMenuSearch00.addChild(obj.name, obj);

            obj = new CheckBox("chkSave","staTitle04:5","3","20","24",null,null,null,null,null,null,this.divRegiMenuSearch00.form);
            obj.set_taborder("4");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.divRegiMenuSearch00.addChild(obj.name, obj);

            obj = new Static("staTitle05","chkSave:8","3","24","24",null,null,null,null,null,null,this.divRegiMenuSearch00.form);
            obj.set_taborder("3");
            obj.set_text("출력");
            obj.set_fittocontents("width");
            obj.set_cssclass("sta_WF_Bold");
            this.divRegiMenuSearch00.addChild(obj.name, obj);

            obj = new CheckBox("chkPrint","staTitle05:5","3","20","24",null,null,null,null,null,null,this.divRegiMenuSearch00.form);
            obj.set_taborder("2");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.divRegiMenuSearch00.addChild(obj.name, obj);

            obj = new Static("staTitle06","chkPrint:8","3","24","24",null,null,null,null,null,null,this.divRegiMenuSearch00.form);
            obj.set_taborder("1");
            obj.set_text("엑셀");
            obj.set_fittocontents("width");
            obj.set_cssclass("sta_WF_Bold");
            this.divRegiMenuSearch00.addChild(obj.name, obj);

            obj = new CheckBox("chkExcel","staTitle06:5","3","20","24",null,null,null,null,null,null,this.divRegiMenuSearch00.form);
            obj.set_taborder("0");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.divRegiMenuSearch00.addChild(obj.name, obj);

            obj = new Button("btnApply","chkExcel:8","3","60","25",null,null,null,null,null,null,this.divRegiMenuSearch00.form);
            obj.set_taborder("14");
            obj.set_text("일괄적용");
            obj.set_visible("true");
            obj.set_cssclass("btn_WF_Module");
            this.divRegiMenuSearch00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRegiMenuSearch.form
            obj = new Layout("default","",0,0,this.divRegiMenuSearch.form,function(p){});
            this.divRegiMenuSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCmmnBtn.form
            obj = new Layout("default","",0,0,this.divCmmnBtn.form,function(p){});
            this.divCmmnBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCmmnBtn00.form
            obj = new Layout("default","",0,0,this.divCmmnBtn00.form,function(p){});
            this.divCmmnBtn00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divRegiMenuSearch00.form
            obj = new Layout("default","",0,0,this.divRegiMenuSearch00.form,function(p){});
            this.divRegiMenuSearch00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1050,736,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.cboSysGubun","value","dsCond","SYTM_FLAG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtPermNm","value","dsCond","PREM_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Temp18.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	authPermMenuMgFm.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/04/05
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/04/05			TOBESOFT					최초생성
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

        	//공통코드조회
        	var param = [
        			, {biztype : "Combo", code : "SM00", objid : this.divSearch.form.cboSysGubun}									// 시스템구분
        			, {biztype : "Combo", code : "SM01", objid : this.divRegiMenuSearch.form.cboMenuModule, selecttype:"A"} 		// 모듈구분
        			, {biztype : "Combo", code : "SM13", objid : this.divCmmnBtn.form.cboSearchScope}								// 조회범위
        			, {biztype : "Grid" , code : "SM01", objid : this.grdMenuRegi, bindcolumn : "MODULE_CD", edit : "false"}		// 모듈구분
        			, {biztype : "Grid" , code : "SM13", objid : this.grdMenuRegi, bindcolumn : "SEARCH_SCOPE_CD", edit:"true"}	// 조회범위
        	];
        	this.divCmmnBtn.form.cboSearchScope
        	this.gfnGetCommonCode(param);

        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        this.cfnSearch = function ()
        {
        	if (this.gfnDsIsUpdated(this.dsList) ||this.gfnDsIsUpdated(this.dsRegiMenu) ) {
        		// 변경된 정보가 있습니다.\n저장 하시겠습니까?
        		var sMsgId = "confirm.before.search";	//메세지ID
        		var arrArg = [""];						//메세지취환될값 배열[생략가능]
        		var sPopId = "beforeSearch";			//메세지팝업ID[생략가능]	*해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
        		var sMsgCallback = "fnMsgCallback";		//메세지콜백[생략가능] 		* confirm성 메시지를 사용 시 반드시 필요

        		// 변경된 정보가 있습니다.\n저장 하시겠습니까?
        		this.gfnAlert(sMsgId, arrArg, sPopId, sMsgCallback);
        	}else{
        		this.fnTranSearch();
        	}
        };

        //행추가 권한목록
        this.cfnAdd = function ()
        {
        	var nRow = this.dsList.addRow();
        	this.dsList.setColumn(nRow, "SYTM_FLAG_CD", this.divSearch.form.cboSysGubun.value);
        	this.dsList.setColumn(nRow, "USED_YN", "1");

        	this.grdAuthList.setCellPos(1);
        	this.grdAuthList.showEditor(true);
        };

        //행삭제 권한목록
        this.cfnDel = function ()
        {
        	if (this.dsList.rowcount == 0){
        		return;
        	}

        	this.dsList.deleteRow(this.dsList.rowposition);
        };

        //저장 왼쪽그리드
        this.cfnSave = function ()
        {
        	// 변경된 정보없으면 리턴
        	if (this.gfnDsIsUpdated(this.dsList) == false) {
        		// 저장할 데이터가 없습니다.
        		this.gfnAlert("msg.save.nochange");
        		return;
        	}

        	if(this.fnValidation()){
        		// 자료를 저장하시겠습니까?
        		this.gfnAlert("confirm.save", [""], "savePrem", "fnMsgCallback");
        		return;
        	}
        };
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //권한 목록 조회
        this.fnTranSearch = function ()
        {
        	var strSvcId    = "premGrpList";
        	var strSvcUrl   = "premGrpList.do";
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

        //할당 미할당 메뉴 조회
        this.fnTranSearchMenu = function ()
        {
        	this.dsCondDetail.clearData();
        	var nRow = this.dsCondDetail.addRow();
        	this.dsCondDetail.setColumn(nRow, "PERM_ID"		, this.dsList.getColumn(this.dsList.rowposition, "PERM_ID"));
        	this.dsCondDetail.setColumn(nRow, "SYTM_FLAG_CD", this.dsList.getColumn(this.dsList.rowposition, "SYTM_FLAG_CD"));

        	this.dsRegiMenu.filter("");

        	var strSvcId    = "premGrpMenuList";
        	var strSvcUrl   = "premGrpMenuList.do";
        	var inData      = "dsCondDetail=dsCondDetail";
        	var outData     = "dsRegiMenu=dsRegiMenu";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        //권한목록 수정 저장
        this.fnTranSave = function ()
        {
        	var strSvcId    = "savePremGrpList";
        	var strSvcUrl   = "savePremGrpList.do";
        	var inData      = "dsList=dsList:U";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        //menu 등록
        this.fnTranSavePermMenu = function ()
        {
        	var strSvcId    = "savePremMenuList";
        	var strSvcUrl   = "savePremMenuList.do";
        	var inData      = "dsRegiMenu=dsRegiMenu:U dsRegiMenuDel=dsRegiMenuDel:A";
        	var outData     = "";
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
        	switch(sSvcId) {
        		case "premGrpList":
        		case "savePremGrpList":
        		case "savePremMenuList":
        			break;
        		case "premGrpMenuList": //모듈filter초기화
        			this.divRegiMenuSearch.form.cboMenuModule.set_index(0);
        			break;
        		default: break;
        	}
        };
        //message
        this.fnMsgCallback = function (sMsgId, sRtn)
        {
        	switch(sMsgId) {
        		case "beforeSearch":
        			if( this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false){
        				return;
        			}
        			this.fnTranSearch();
        			break;
        		case "beforeRowPosChange":
        			if (this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false) {
        				return;
        			}
        			this.dsList.set_enableevent(false);
        			this.dsList.set_rowposition(this.dsList.uNewRow);
        			this.fnTranSearchMenu();
        			this.dsList.set_enableevent(true);
        			break;
        		case "savePrem":
        			if(this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false){
        				return;
        			}
        			this.fnTranSave();
        			break;
        		case "savePermMenu":
        			if(this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false){
        				return;
        			}
        			this.fnSavePermMenu();
        			break;
        		case "valiPermId":
        			this.dsList.setColumn(this.dsList.rowposition, "PERM_ID", "");
        			this.grdAuthList.setCellPos(1);
        			this.grdAuthList.showEditor(true);
        			break;
        		default:break;
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        //validation
        this.fnValidation = function ()
        {
        	// 정합성 체크
        	this.gfnClearValidation(this.dsList);

        	this.gfnSetValidation(this.dsList, "PERM_ID"	 	 , "권한코드"		, "required");
        	this.gfnSetValidation(this.dsList, "PERM_GRP_NM"	 , "권한명"		, "required");

        	// Dataset의 변경된 Row Validation check
        	if (this.gfnValidation(this.grdAuthList, "U") == false) {
        		return false;
        	}else{
        		return true;
        	}
        };

        //저장할 데이터셋 세팅
        this.fnSavePermMenu = function ()
        {
        	//insert, delete분리
        	this.dsRegiMenu.set_enableevent(false);
        	this.grdMenuRegi.set_enableevent(false);
        	this.grdMenuRegi.set_enableredraw(false);

        	var orgFilter = this.dsRegiMenu.filterstr;
        	this.dsRegiMenuDel.clearData();

        	this.dsRegiMenu.filter("dataset.getRowType(rowidx)==4 && PERM_CHK=='0'");
        	this.dsRegiMenuDel.copyData(this.dsRegiMenu,true); //delete모음
        	this.dsRegiMenu.filter(orgFilter);

        	this.dsRegiMenu.set_enableevent(true);
        	this.grdMenuRegi.set_enableevent(true);
        	this.grdMenuRegi.set_enableredraw(true);

        	this.fnTranSavePermMenu();
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        //조회버튼 클릭
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.cfnSearch();
        };

        //권한그리드 포스체인지전 변경유무 체크
        this.dsList_canrowposchange = function(obj,e)
        {
        	if (e.newrow < 0) {
        		return true;
        	}

        	this.dsList.uNewRow = e.newrow;
        	this.dsList.uOldRow = e.oldrow;

        	// 마스터 row변경전 상세정보 저장유무 확인
        	if (this.gfnDsIsUpdated(this.dsRegiMenu)) {
        		//해당 row의 위치를 이동하면 변경된 데이터가 사라집니다. \n계속 진행 하시겠습니까?
        		this.gfnAlert("confirm.before.moveropos", [""], "beforeRowPosChange", "fnMsgCallback");
        		return false;
        	}
        };

        //권한그리드 포스체인지 (메뉴 조회)
        this.dsList_onrowposchanged = function(obj,e)
        {
        	if( e.newrow > -1){
        		this.fnTranSearchMenu();
        	}
        };

        //권한 캔컬럼체인지
        this.dsList_cancolumnchange = function(obj,e)
        {
        	if( e.columnid=="PERM_ID"){
        		if(this.gfnIsNull(e.newvalue)) return;

        		var nRow = obj.findRow("PERM_ID", e.newvalue);
        		if( nRow > -1){
        			this.gfnAlert("msg.exist", ["입력하신 권한코드"],"valiPermId","fnMsgCallback");
        			return;
        		}
        	}
        };

        //모듈콤보
        this.divRegiMenuSearch_cboMenuModule_canitemchange = function(obj,e)
        {
        	var sVal = e.postvalue;
        	if( sVal == "%"){
        		this.dsRegiMenu.filter("");
        	}else{
        		this.dsRegiMenu.filter("MODULE_CD=='"+sVal+"'");
        	}
        };

        //메뉴그리드 클릭
        this.grdMenuRegi_oncellclick = function(obj,e)
        {
        	var nCell = e.cell;
        	var curEditType = obj.getCurEditType();
        	if( nCell == 14){
        		if( curEditType == "button"){
        			if( !this.gfnDsIsUpdated(this.dsRegiMenu)){
        				var sTitle = "메뉴 권한 추가 버튼 관리";
        				var oArg   = {	pvPremId	:this.dsRegiMenu.getColumn(e.row, "PERM_ID")
        							  , pvSytmFlagCd:this.dsRegiMenu.getColumn(e.row, "SYTM_FLAG_CD")
        							  , pvPrgmId	:this.dsRegiMenu.getColumn(e.row, "PRGM_ID")
        							  , pvMenuId	:this.dsRegiMenu.getColumn(e.row, "MENU_ID")
        							};
        				var oOption = {title:sTitle,titlebar:true};
        				var sPopupCallBack = "fnPopupCallback";
        				this.gfnOpenPopup("authPermAddBtnPu", "sytm::auth/authPermGrpMenuAddBtnPu.xfdl", oArg, sPopupCallBack, oOption);
        			}else{
        				this.gfnAlert("msg.err.updateafter");
        				return;
        			}
        		}
        	}else if( nCell == 7 ){
        		if( curEditType == "combo"){
        			this.grdMenuRegi.showEditor(true);
        			this.grdMenuRegi.dropdownCombo();
        		}
        	}
        };

        //메뉴 저장
        this.divCmmnBtn_btnSave_onclick = function(obj,e)
        {
        	// 변경된 정보없으면 리턴
        	if (this.gfnDsIsUpdated(this.dsRegiMenu) == false) {
        		// 저장할 데이터가 없습니다.
        		this.gfnAlert("msg.save.nochange");
        		return;
        	}

        	// 자료를 저장하시겠습니까?
        	this.gfnAlert("confirm.save", [""], "savePermMenu", "fnMsgCallback");
        	return;
        };

        //일괄적용
        this.divCmmnBtn_btnApply_onclick = function(obj,e)
        {
        	var nRow = this.dsRegiMenu.rowposition;
        	var nTreeRow = -1;this.grdMenuRegi.getTreeRow(nRow);

        	if( !this.grdMenuRegi.isTreeLeafRow(nRow, true))
        	{
        		//선택한 로우의 값
        		var nLvl 	 = this.dsRegiMenu.getColumn(nRow, "MENU_LVL");
        		var sCurPerm = this.dsRegiMenu.getColumn(nRow, "PERM_CHK");
        		var sCurInqr = this.divCmmnBtn.form.chkSearch.value;// this.dsRegiMenu.getColumn(nRow, "INQR_BTTN_USED_YN");
        		var sCurAnew = this.divCmmnBtn.form.chkNew.value;//this.dsRegiMenu.getColumn(nRow, "ANEW_BTTN_USED_YN");
        		var sCurSave = this.divCmmnBtn.form.chkSave.value;//this.dsRegiMenu.getColumn(nRow, "SAVE_BTTN_USED_YN");
        		var sCurDele = this.divCmmnBtn.form.chkDel.value;//this.dsRegiMenu.getColumn(nRow, "DELE_BTTN_USED_YN");
        		var sCurPrnt = this.divCmmnBtn.form.chkPrint.value;//this.dsRegiMenu.getColumn(nRow, "PRNT_BTTN_USED_YN");
        		var sCurExcl = this.divCmmnBtn.form.chkExcel.value;//this.dsRegiMenu.getColumn(nRow, "EXCL_BTTN_USED_YN");
        		var sCurScop = this.divCmmnBtn.form.cboSearchScope.value;//this.dsRegiMenu.getColumn(nRow, "SEARCH_SCOPE_CD");

        		//하위 로우 세팅
        		for ( var i=nRow+1; i<this.dsRegiMenu.rowcount; i++)
        		{
        			if( this.dsRegiMenu.getColumn(i, "MENU_LVL") <= nLvl){
        				break;
        			}
        			nTreeRow = this.grdMenuRegi.getTreeRow(i);
        			this.dsRegiMenu.setColumn(i, "PERM_CHK", sCurPerm);
        			if(this.grdMenuRegi.getCellPropertyValue(nTreeRow, 8, "edittype") =="checkbox")  this.dsRegiMenu.setColumn(i, "INQR_BTTN_USED_YN", sCurInqr);
        			if(this.grdMenuRegi.getCellPropertyValue(nTreeRow, 9, "edittype") =="checkbox")  this.dsRegiMenu.setColumn(i, "ANEW_BTTN_USED_YN", sCurAnew);
        			if(this.grdMenuRegi.getCellPropertyValue(nTreeRow, 11, "edittype")=="checkbox") this.dsRegiMenu.setColumn(i, "SAVE_BTTN_USED_YN", sCurSave);
        			if(this.grdMenuRegi.getCellPropertyValue(nTreeRow, 10, "edittype")=="checkbox") this.dsRegiMenu.setColumn(i, "DELE_BTTN_USED_YN", sCurDele);
        			if(this.grdMenuRegi.getCellPropertyValue(nTreeRow, 12, "edittype")=="checkbox") this.dsRegiMenu.setColumn(i, "PRNT_BTTN_USED_YN", sCurPrnt);
        			if(this.grdMenuRegi.getCellPropertyValue(nTreeRow, 13, "edittype")=="checkbox") this.dsRegiMenu.setColumn(i, "EXCL_BTTN_USED_YN", sCurExcl);
        			if(this.grdMenuRegi.getCellPropertyValue(nTreeRow, 7, "edittype") =="combo")  	this.dsRegiMenu.setColumn(i, "SEARCH_SCOPE_CD"	, sCurScop);
        		}
        	}else{
        		this.gfnAlert("msg.err.batch.noselect", []);//일괄적용할 로우를 선택 후 다시 시도해주세요
        		return;
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.divRegiMenuSearch.form.cboMenuModule.addEventHandler("canitemchange",this.divRegiMenuSearch_cboMenuModule_canitemchange,this);
            this.grdMenuRegi.addEventHandler("oncellclick",this.grdMenuRegi_oncellclick,this);
            this.divCmmnBtn.form.btnSave.addEventHandler("onclick",this.divCmmnBtn_btnSave_onclick,this);
            this.divCmmnBtn00.form.btnExcelDown.addEventHandler("onclick",this.divCmmnBtn_btnExcelDown_onclick,this);
            this.divCmmnBtn00.form.btnExcelUp.addEventHandler("onclick",this.divCmmnBtn_btnExcelUp_onclick,this);
            this.divCmmnBtn00.form.btnDel.addEventHandler("onclick",this.divCmmnBtn_btnDel_onclick,this);
            this.divCmmnBtn00.form.btnAdd.addEventHandler("onclick",this.divCmmnBtn_btnAdd_onclick,this);
            this.divRegiMenuSearch00.form.btnApply.addEventHandler("onclick",this.divCmmnBtn_btnApply_onclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
            this.dsList.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
            this.dsList.addEventHandler("canrowposchange",this.dsList_canrowposchange,this);
        };
        this.loadIncludeScript("Temp18.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
