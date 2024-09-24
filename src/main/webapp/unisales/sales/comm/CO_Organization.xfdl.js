(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CO_Organization");
            this.set_titletext("조직도");
            this.set_cssclass("frm_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(1142,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_department", this);
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"255\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"30\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"10\"/><Column id=\"LEV\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_employee", this);
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"255\"/><Column id=\"EMP_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"255\"/><Column id=\"GRADE_CD\" type=\"STRING\" size=\"255\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"255\"/><Column id=\"DUTY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"PHOTO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"H_PHONE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"O_PHONE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"FIRE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"HOLD_OFFICE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_selectedEmp", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"DUTY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"PHOTO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"H_PHONE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"O_PHONE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"FIRE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"HOLD_OFFICE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_employeeCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"255\"/><Column id=\"EMP_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"255\"/><Column id=\"GRADE_CD\" type=\"STRING\" size=\"255\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"255\"/><Column id=\"DUTY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"PHOTO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"H_PHONE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"O_PHONE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"FIRE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"HOLD_OFFICE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_to", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"DUTY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"PHOTO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"H_PHONE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"O_PHONE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"FIRE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"HOLD_OFFICE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cc", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"DUTY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"PHOTO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"H_PHONE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"O_PHONE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"FIRE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"HOLD_OFFICE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bcc", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"DUTY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"PHOTO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"H_PHONE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"O_PHONE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"FIRE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"HOLD_OFFICE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_btn", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Return", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"DUTY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"PHOTO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"H_PHONE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"O_PHONE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"FIRE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"HOLD_OFFICE\" type=\"STRING\" size=\"256\"/><Column id=\"TO_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_selected", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"DUTY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"PHOTO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"H_PHONE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"O_PHONE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ENTER_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"FIRE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"HOLD_OFFICE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_CONDITION", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION_JAP\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION_ENG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">EMP_NM</Col><Col id=\"CAPTION\">이름</Col><Col id=\"CAPTION_JAP\">名前</Col></Row><Row><Col id=\"CODE\">DEPT_NM</Col><Col id=\"CAPTION\">부서</Col><Col id=\"CAPTION_JAP\">部署</Col></Row><Row><Col id=\"CODE\">H_PHONE_NO</Col><Col id=\"CAPTION\">Phone</Col><Col id=\"CAPTION_JAP\">Phone</Col></Row><Row><Col id=\"CODE\">EMAIL</Col><Col id=\"CAPTION\">메일</Col><Col id=\"CAPTION_JAP\">メール</Col></Row><Row><Col id=\"CODE\">EMP_NO</Col><Col id=\"CAPTION\">사번</Col><Col id=\"CAPTION_JAP\">社員番号</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_Search","4","39",null,"40","4",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("div_WF_SchList");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Condition","8","8","60","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("0");
            obj.getSetter("TL_FLAG").set("1");
            obj.set_innerdataset("ds_CD_CONDITION");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_text("이름");
            obj.set_value("EMP_NM");
            obj.set_index("0");
            this.div_Search.addChild(obj.name, obj);

            obj = new Edit("edt_Search","75","8","168","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("1");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_Search","243","8","22","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_Sch");
            obj.set_text("");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_Bcc",null,"8","70","22","8",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("5");
            obj.set_text("숨은참조");
            obj.set_visible("false");
            obj.getSetter("TL_SEQ").set("830");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_Cc",null,"8","50","22","86",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("4");
            obj.set_text("참조");
            obj.set_visible("false");
            obj.getSetter("TL_SEQ").set("831");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_To",null,"8","70","22","btn_Cc:8",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("3");
            obj.set_text("받는사람");
            obj.set_visible("false");
            obj.getSetter("TL_SEQ").set("832");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("stc_GbCompanyOrganization","4","div_Search:4","316","31",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_POP_GroupBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_GbCompanyOrganizationText","14","div_Search:4","120","31",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("조직도");
            obj.set_cssclass("sta_POP_GroupTit");
            obj.getSetter("TL_SEQ").set("833");
            this.addChild(obj.name, obj);

            obj = new Static("stc_BottomFrame","1",null,null,"38","1","1",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_POP_BtnBg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close",null,"8","15","15","8",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_POP_Cls");
            obj.set_text("");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Cancel",null,null,"80","22","8","9",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_cancel");
            obj.getSetter("TL_SEQ").set("59");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Confirm",null,null,"60","22","btn_Cancel:8","9",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_tran");
            obj.getSetter("TL_SEQ").set("158");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_CompanyOrganizationDepartment","4","stc_GbCompanyOrganization:1","316",null,null,"stc_BottomFrame:4",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_department");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:DEPT_NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:LEV\" treecheck=\"bind:ISCHECKED\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/></Band></Format><Format id=\"DEPT\"><Columns><Column size=\"48\"/><Column size=\"265\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" text=\"bind:DEPT_NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:LEV\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_CompanyOrganizationEmployeeInfo","grd_CompanyOrganizationDepartment:4","div_Search:4","499",null,null,"stc_BottomFrame:4",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_employee");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj.set_formatid("default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"이름\" TL_SEQ=\"765\"/><Cell col=\"2\" text=\"부서\" TL_SEQ=\"74\"/><Cell col=\"3\" text=\"직급\" TL_SEQ=\"26\"/><Cell col=\"4\" text=\"전화번호\" TL_SEQ=\"545\"/><Cell col=\"5\" text=\"핸드폰\" TL_SEQ=\"76\"/><Cell col=\"6\" text=\"이메일\" TL_SEQ=\"80\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" text=\"bind:EMP_NM\"/><Cell col=\"2\" text=\"bind:DEPT_NM\"/><Cell col=\"3\" text=\"bind:CAPTION\"/><Cell col=\"4\" text=\"bind:O_PHONE_NO\"/><Cell col=\"5\" text=\"bind:H_PHONE_NO\"/><Cell col=\"6\" text=\"bind:EMAIL\"/></Band></Format><Format id=\"EMAIL\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"이름\" TL_SEQ=\"765\"/><Cell col=\"2\" text=\"부서\" TL_SEQ=\"74\"/><Cell col=\"3\" text=\"직급\" TL_SEQ=\"26\"/><Cell col=\"4\" text=\"이메일\" TL_SEQ=\"80\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" text=\"bind:EMP_NM\"/><Cell col=\"2\" text=\"bind:DEPT_NM\"/><Cell col=\"3\" text=\"bind:CAPTION\"/><Cell col=\"4\" text=\"bind:EMAIL\"/></Band></Format><Format id=\"SMS\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"이름\" TL_SEQ=\"765\"/><Cell col=\"2\" text=\"부서\" TL_SEQ=\"74\"/><Cell col=\"3\" text=\"직급\" TL_SEQ=\"26\"/><Cell col=\"4\" text=\"핸드폰\" TL_SEQ=\"76\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" text=\"bind:EMP_NM\"/><Cell col=\"2\" text=\"bind:DEPT_NM\"/><Cell col=\"3\" text=\"bind:CAPTION\"/><Cell col=\"4\" text=\"bind:H_PHONE_NO\"/></Band></Format><Format id=\"mobile\"><Columns><Column size=\"48\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" colspan=\"2\" text=\"부서\" TL_SEQ=\"74\"/><Cell col=\"3\" text=\"전화번호\" TL_SEQ=\"545\"/><Cell col=\"4\" text=\"핸드폰\" TL_SEQ=\"76\"/><Cell row=\"1\" col=\"1\" text=\"이름\" TL_SEQ=\"765\"/><Cell row=\"1\" col=\"2\" text=\"직급\" TL_SEQ=\"26\"/><Cell row=\"1\" col=\"3\" colspan=\"2\" text=\"이메일\" TL_SEQ=\"80\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" displaytype=\"checkboxcontrol\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" colspan=\"2\" text=\"bind:DEPT_NM\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:O_PHONE_NO\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:H_PHONE_NO\" textAlign=\"left\"/><Cell row=\"1\" col=\"1\" text=\"bind:EMP_NM\" textAlign=\"left\"/><Cell row=\"1\" col=\"2\" text=\"bind:CAPTION\" textAlign=\"left\"/><Cell row=\"1\" col=\"3\" colspan=\"2\" text=\"bind:EMAIL\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_list","827","div_Search:4",null,null,"4","stc_BottomFrame:4",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_async("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_title","8","5","61","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("조직도");
            obj.set_color("white");
            obj.set_cssclass("sta_POP_Title ");
            obj.getSetter("TL_SEQ").set("833");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_Search.form
            obj = new Layout("default","",0,0,this.div_Search.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.cmb_Condition.set_taborder("0");
                p.cmb_Condition.getSetter("TL_FLAG").set("1");
                p.cmb_Condition.set_innerdataset("ds_CD_CONDITION");
                p.cmb_Condition.set_codecolumn("CODE");
                p.cmb_Condition.set_datacolumn("CAPTION");
                p.cmb_Condition.set_text("이름");
                p.cmb_Condition.set_value("EMP_NM");
                p.cmb_Condition.set_index("0");
                p.cmb_Condition.move("8","8","60","22",null,null);

                p.edt_Search.set_taborder("1");
                p.edt_Search.move("75","8","168","22",null,null);

                p.btn_Search.set_taborder("2");
                p.btn_Search.set_cssclass("btn_WF_Sch");
                p.btn_Search.set_text("");
                p.btn_Search.move("243","8","22","22",null,null);

                p.btn_Bcc.set_taborder("5");
                p.btn_Bcc.set_text("숨은참조");
                p.btn_Bcc.set_visible("false");
                p.btn_Bcc.getSetter("TL_SEQ").set("830");
                p.btn_Bcc.move(null,"8","70","22","8",null);

                p.btn_Cc.set_taborder("4");
                p.btn_Cc.set_text("참조");
                p.btn_Cc.set_visible("false");
                p.btn_Cc.getSetter("TL_SEQ").set("831");
                p.btn_Cc.move(null,"8","50","22","86",null);

                p.btn_To.set_taborder("3");
                p.btn_To.set_text("받는사람");
                p.btn_To.set_visible("false");
                p.btn_To.getSetter("TL_SEQ").set("832");
                p.btn_To.move(null,"8","70","22","btn_Cc:8",null);
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
                p.cmb_Condition.move("4","4","72","30",null,null);

                p.edt_Search.move("76","4","159","30",null,null);

                p.btn_Search.move("235","4","30","30",null,null);

                p.btn_Cc.move(null,"4","50","30","btn_Bcc:4",null);

                p.btn_To.move(null,"4","70","30","btn_Cc:4",null);

                p.btn_Bcc.move(null,"4","70","30","4",null);
            	}
            );
            this.div_Search.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div_list.form
            obj = new Layout("default","",0,0,this.div_list.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.div_list.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div_list.form
            obj = new Layout("portrait","",0,0,this.div_list.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.div_list.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1142,570,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("조직도");
                p.set_cssclass("frm_popBg");

                p.div_Search.set_taborder("10");
                p.div_Search.set_cssclass("div_WF_SchList");
                p.div_Search.move("4","39",null,"40","4",null);

                p.stc_GbCompanyOrganization.set_taborder("5");
                p.stc_GbCompanyOrganization.set_cssclass("sta_POP_GroupBg");
                p.stc_GbCompanyOrganization.move("4","div_Search:4","316","31",null,null);

                p.stc_GbCompanyOrganizationText.set_taborder("4");
                p.stc_GbCompanyOrganizationText.set_text("조직도");
                p.stc_GbCompanyOrganizationText.set_cssclass("sta_POP_GroupTit");
                p.stc_GbCompanyOrganizationText.getSetter("TL_SEQ").set("833");
                p.stc_GbCompanyOrganizationText.move("14","div_Search:4","120","31",null,null);

                p.stc_BottomFrame.set_taborder("3");
                p.stc_BottomFrame.set_cssclass("sta_POP_BtnBg");
                p.stc_BottomFrame.move("1",null,null,"38","1","1");

                p.btn_Close.set_taborder("0");
                p.btn_Close.set_cssclass("btn_POP_Cls");
                p.btn_Close.set_text("");
                p.btn_Close.set_escapebutton("true");
                p.btn_Close.move(null,"8","15","15","8",null);

                p.btn_Cancel.set_taborder("1");
                p.btn_Cancel.set_text("닫기");
                p.btn_Cancel.set_cssclass("btn_WF_cancel");
                p.btn_Cancel.getSetter("TL_SEQ").set("59");
                p.btn_Cancel.move(null,null,"80","22","8","9");

                p.btn_Confirm.set_taborder("2");
                p.btn_Confirm.set_text("확인");
                p.btn_Confirm.set_cssclass("btn_WF_tran");
                p.btn_Confirm.getSetter("TL_SEQ").set("158");
                p.btn_Confirm.move(null,null,"60","22","btn_Cancel:8","9");

                p.grd_CompanyOrganizationDepartment.set_taborder("6");
                p.grd_CompanyOrganizationDepartment.set_binddataset("ds_department");
                p.grd_CompanyOrganizationDepartment.set_autofittype("col");
                p.grd_CompanyOrganizationDepartment.set_treeinitstatus("expand,all");
                p.grd_CompanyOrganizationDepartment.set_treeusecheckbox("true");
                p.grd_CompanyOrganizationDepartment.move("4","stc_GbCompanyOrganization:1","316",null,null,"stc_BottomFrame:4");

                p.grd_CompanyOrganizationEmployeeInfo.set_taborder("8");
                p.grd_CompanyOrganizationEmployeeInfo.set_autofittype("col");
                p.grd_CompanyOrganizationEmployeeInfo.set_binddataset("ds_employee");
                p.grd_CompanyOrganizationEmployeeInfo.set_cellmovingtype("col");
                p.grd_CompanyOrganizationEmployeeInfo.set_cellsizingtype("col");
                p.grd_CompanyOrganizationEmployeeInfo.set_formatid("default");
                p.grd_CompanyOrganizationEmployeeInfo.move("grd_CompanyOrganizationDepartment:4","div_Search:4","499",null,null,"stc_BottomFrame:4");

                p.div_list.set_taborder("7");
                p.div_list.set_text("");
                p.div_list.set_async("false");
                p.div_list.move("827","div_Search:4",null,null,"4","stc_BottomFrame:4");

                p.stc_title.set_taborder("9");
                p.stc_title.set_text("조직도");
                p.stc_title.set_color("white");
                p.stc_title.set_cssclass("sta_POP_Title ");
                p.stc_title.getSetter("TL_SEQ").set("833");
                p.stc_title.move("8","5","61","22",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("portrait","Mobile_screen",480,768,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.div_list.set_visible("false");
                p.div_list.move("676","429","471",null,null,"43");

                p.grd_CompanyOrganizationEmployeeInfo.set_formatid("mobile");
                p.grd_CompanyOrganizationEmployeeInfo.move("4","55.08%",null,null,"4","43");

                p.stc_title.move("8","0","69","35",null,null);

                p.btn_Close.move(null,"0","35","35","10",null);

                p.stc_GbCompanyOrganization.move("4","83",null,"35","4",null);

                p.stc_GbCompanyOrganizationText.move("14","83","120","35",null,null);

                p.grd_CompanyOrganizationDepartment.move("4","stc_GbCompanyOrganization:1",null,null,"4","45%");

                p.btn_Confirm.move(null,null,"70","30","78","5");

                p.btn_Cancel.move(null,null,"70","30","4","5");
            	}
            );
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CO_Organization.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("CO_Organization.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("CO_Organization.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("CO_Organization.xfdl","Script::CommGrid.xjs");
        this.registerScript("CO_Organization.xfdl", function() {
        /************************************************************************************************
         * 01. 업무구분 : 공통 - 공통
         * 02. 화면명   : 조직도 검색 (CO_Organization_S01)
         * 03. 화면설명 :
         * 04. 작성일   : 2018.08.09
         * 05. 작성자   : 안주환
         * 06. 수정이력 :
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
        //부모창 없을 경우 default값
        this.myDept 		= nexacro.getApplication().gdsGlobal.setColumn(0, "CO_NM");
        this.myDeptCD 		= "F01"
        this.myEmpNO 		= "";
        this.myEmpNM		= "";

        this.grdCol 		= "EMP";
        this.partDiv		= "both";
        this.holdOffice 	= "1";
        this.empKind		= "T";
        this.title 			= this.gfnGetTransTxt(2087, "직원선택");
        this.divUrl			= "sales::comm/CO_SelectionEmployee.xfdl";
        this.bPartner		= false;
        this.fvExpandRow 	= -1;
        this.FV_CO_CD = nexacro.getApplication().gdsUserInfo.getColumn(0, "CO_CD");	//로그인 회사코드
        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/
        this.CO_Organization_onload = function(obj, e)
        {
        	this.gfnCompInit(obj); //헤더클릭 이벤트 없을 시 사용

        	var app = nexacro.getApplication();
        	this.fnSetOption(this.parent.pvArrayList);

        	if(app.gdsUserInfo.rowcount>0)
        	{
        		this.myDept		= this.gfnIsEmpty(app.gdsUserInfo.getColumn(0,"DEPT_NM")) ? this.myDept : app.gdsUserInfo.getColumn(0,"DEPT_NM");
        		this.myDeptCD 	= this.gfnIsEmpty(app.gdsUserInfo.getColumn(0,"DEPT_CD")) ? this.myDeptCD : app.gdsUserInfo.getColumn(0,"DEPT_CD");
        		this.myEmpNO 	= this.gfnIsEmpty(app.gdsUserInfo.getColumn(0,"EMP_NO")) ? this.myEmpNO : app.gdsUserInfo.getColumn(0,"EMP_NO");
        		this.myEmpNM	= this.gfnIsEmpty(app.gdsUserInfo.getColumn(0,"EMP_NM")) ? this.myEmpNM: app.gdsUserInfo.getColumn(0,"EMP_NM");
        	}
        };

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.fnSetOption = function(arrOption)
        {
        	var objEmpGrid = this.grd_CompanyOrganizationEmployeeInfo;
        	var objDeptGrid = this.grd_CompanyOrganizationDepartment;

        	if(this.gfnIsEmpty(arrOption))
        	{

        	}
        	else
        	{
        		this.grdCol 	= arrOption[0];
        		this.partDiv 	= arrOption[1];
        		this.holdOffice	= arrOption[2];
        		this.empKind 	= arrOption[3];
        		this.title		= arrOption[4];
        		this.divUrl		= arrOption[5];
        		this.bPartner	= arrOption[6];
        	}

        	this.stc_title.set_text(this.title);
        	this.set_titletext(this.title);

        	if(this.gfnIsEmpty(this.divUrl))
        	{
        		this.div_list.set_width(0);
        		this.div_list.set_visible(false);
        		//this.grd_CompanyOrganizationEmployeeInfo.set_width(0);
        		this.grd_CompanyOrganizationEmployeeInfo.set_right(4);
        	}
        	else
        	{
        		this.div_list.set_url(this.divUrl);
        	}

        	if(this.gfnIsEmpty(this.divUrl))
        	{
        		objEmpGrid.setFormatColProperty(0, "size", 0);
        	}

        	if(this.divUrl == "sales::comm/CO_EmailAddress.xfdl")
        	{
        		this.div_Search.form.btn_To.set_visible(true);
        		this.div_Search.form.btn_Cc.set_visible(true);
        		this.div_Search.form.btn_Bcc.set_visible(true);

        		this.div_list.form.grd_To.set_binddataset(this.ds_to);
        		this.div_list.form.grd_Cc.set_binddataset(this.ds_cc);
        		this.div_list.form.grd_Bcc.set_binddataset(this.ds_bcc);
        	}
        	else if(this.divUrl == "sales::comm/CO_SelectionEmployee.xfdl")
        	{
        		this.div_Search.form.btn_To.set_visible(true);
        		if(this.partDiv == "deptOnly")
        		{
        			this.div_Search.form.btn_To.set_text(this.gfnGetTransTxt(2088, "부서선택"));
        		}
        		else
        		{
        			this.div_Search.form.btn_To.set_text(this.gfnGetTransTxt(2087, "직원선택"));
        		}

        		this.div_list.form.grd_SelectionEmployee.set_binddataset(this.ds_selected);
        	}
        	else if(this.divUrl == "sales::comm/CO_MeetingParticipant.xfdl")
        	{
        		this.div_Search.form.btn_Cc.set_visible(true);
        		this.div_Search.form.btn_Bcc.set_visible(true);

        		this.div_Search.form.btn_Cc.set_text(this.gfnGetTransTxt(2089, "주최자"));
        		this.div_Search.form.btn_Bcc.set_text(this.gfnGetTransTxt(2090, "참석자"));

        		this.div_list.form.grd_host.set_binddataset(this.ds_cc);
        		this.div_list.form.grd_guest.set_binddataset(this.ds_bcc);
        	}

        	switch(this.grdCol)
        	{
        		case "EMAIL":
        			this.grd_CompanyOrganizationEmployeeInfo.set_formatid("EMAIL");
        			break;
        		case "SMS":
        			this.grd_CompanyOrganizationEmployeeInfo.set_formatid("SMS");
        			break;
        		case "DEPTS":
        			this.div_list.form.grd_SelectionEmployee.setFormatColProperty(0, "size", 0); // 이름 hide
        			this.div_list.form.grd_SelectionEmployee.setFormatColProperty(1, "size", 0); // 직책 hide
        			this.grd_CompanyOrganizationDepartment.set_formatid("DEPT");
        			break;
        	}

        	switch(this.partDiv)
        	{
        		case "both":								//부서, 사원 모두
        			objDeptGrid.set_enable(true);
        			objEmpGrid.set_enable(true);
        			break;

        		case "deptOnly":							//부서만
        			objDeptGrid.set_treeusecheckbox(true);
        			objDeptGrid.set_enable(true);
        			objEmpGrid.set_enable(false);
        			break;

        		case "empOnly":								//사원만
        			objDeptGrid.set_treeusecheckbox(false);
        			objEmpGrid.set_enable(true);
        			break;
        	}

        	//Transaction
        	this.fnSearchDeptList();	// Department 조회 	(callback - Tree 오픈)
        	this.fnSearchEmpList();		// Employee 조회 	(callback - User 선택)
        }

        //검색
        this.fnSearchEmp = function(colValue, sWord)
        {
        	var nRow;
        	var empDsCopy = this.ds_employeeCopy;
        	var objDs = this.ds_employee;

        	objDs.filter(colValue + ".toString().toUpperCase().indexOf('" + (sWord).toUpperCase() + "') >=0");

        	this.fnTreeOpen(objDs.getColumn(0, "DEPT_CD"));

        	if(this.hasOwnProperty("opener") && !this.gfnIsEmpty(this.opener))
        	{
        		if(this.opener.name == "COM_Search")
        		{
        			if(objDs.getRowCount() == 1)
        			{
        				objDs.set_rowposition(0);
        				if(this.FV_CO_CD != "J02") this.fnCloseWin();
        			}

        		}
        	}
        }

        //사원정보를 받아와서 해당 Tree nod를 open해준다.
        this.fnTreeOpen = function(deptCD)
        {
        	var objGrid = this.grd_CompanyOrganizationDepartment;
        	var objDs 	= this.ds_department;
        	var nRow 	= this.ds_department.findRow("DEPT_CD", deptCD);
        	var nPos 	= 3; //DEPT_CD Index를 의미

        	objGrid.set_treeinitstatus("collapse,null");

        	for(var i = 1 ; i <= objDs.getColumn(nRow, "LEV"); i++)
        	{
        		objGrid.setTreeStatus(objGrid.getTreeRow(objDs.findRow("DEPT_CD", deptCD.substr(0, nPos))), true);
        		nPos += 2;
        		//처음에 0인덱스부터 3글자까지 자르고 계속해서 2인덱스씩 증가하면서 setTreeStatus를 탄다.
        		//ex) H02 -> (주)투비소프트 / H0202 -> 경영관리본부 /  H020206 -> 경영관리그룹
        	}

         	objDs.set_rowposition(nRow);
        }

        //선택 유저의 부서 정보를 보여주고, 해당유저에 포커스를 준다.
        this.fnSetFocus = function(deptCD, empNO)
        {
        	var objDs = this.ds_employee;

        	this.fnUnCheck(objDs);

        	objDs.filter("DEPT_CD.indexOf('" + deptCD + "') > -1");

        	if(!this.gfnIsEmpty(empNO))
        	{
        		objDs.set_rowposition(objDs.findRow("EMP_NO", empNO));
        	}
        }

        //해당 Ds의 체크박스를 모두 해제한다.
        this.fnUnCheck = function(objDs)
        {
        	var nRow;

        	do
        	{
        		nRow = objDs.findRow("ISCHECKED", "1");
        		objDs.setColumn(nRow, "ISCHECKED", "0");
        	}while(nRow != -1)

        	if(objDs.name == "ds_employee")
        		this.grd_CompanyOrganizationEmployeeInfo.setCellProperty("Head", 0, "text", "0");
        }

        //체크선택된 ds의 값들을 중복 체크하여 toDs에 넣어준다.
        this.fnInsert = function(toDs)
        {
        	var nRow, j, rowCount;

        	//부서 선택시 copyRow를 해준다음, DEPT_CD를 EMP_NO에 넣어준다.
        	if(this.grdCol == "DEPTS")
        	{
        		if(this.grd_CompanyOrganizationDepartment.treeusecheckbox)
        		{
        			for(j=0; j < this.ds_department.rowcount; j++)
        			{
        				if(this.ds_department.getColumn(j,"ISCHECKED")=="1")
        				{
        					nRow = toDs.addRow();
        					toDs.copyRow(nRow, this.ds_department, j);
        					toDs.setColumn(nRow, "EMP_NO", this.ds_department.getColumn(j, "DEPT_CD"));
        				}
        			}
        		}
        	}

         	nRow = -1;

        	for(var j = 0 ; j < this.ds_employee.rowcount ; j++)
        	{
        		//trace("this.ds_employee.getColumn(j,\"ISCHECKED\") : " + this.ds_employee.getColumn(j,"ISCHECKED"));
        		if(this.ds_employee.getColumn(j,"ISCHECKED") == "1")
        		{
        			nRow = toDs.findRow("EMP_NO", this.ds_employee.getColumn(j,"EMP_NO"));
        			if( nRow == -1 )
        			{
        				//trace("findRow : " + nRow);
        				nRow = toDs.addRow();
        				toDs.copyRow(nRow, this.ds_employee, j);
        			}
        		}
        	}

        	this.fnUnCheck(this.ds_department);
        	this.fnUnCheck(this.ds_employee);
        }

        //fromDs의 선택 row수를 체크하고toDs에 넣어준다.
        this.fnInsertOne = function(toDs)
        {
        	var cnt = this.ds_employee.getCaseCount("ISCHECKED == '1'") + this.ds_department.getCaseCount("ISCHECKED == '1'");
        	var nRow;

        	switch(cnt)
        	{
        		case 0:
        			return;
        			break;
        		case 1:
        			toDs.clearData();
        			nRow = toDs.addRow();
        			toDs.copyRow(nRow,this.ds_employee, this.ds_employee.findRow("ISCHECKED", "1"));
        			toDs.copyRow(nRow,this.ds_department, this.ds_department.findRow("ISCHECKED", "1"));
        			break;
        		default :
        			this.alert(this.gfnGetTransTxt(1230, "한명만 선택해 주세요."));
        			break;
        	}

        	this.fnUnCheck(this.ds_employee);
        	this.fnUnCheck(this.ds_department);
        }

        //확인버튼을 누르고 창을 종료할때 넘겨주는 object를 명시하여 준다. DIV화면이 없을 때만 사용
        this.fnCloseWin = function()
        {
        	var objDs = this.ds_employee;

        	if(!this.grd_CompanyOrganizationEmployeeInfo.enable && this.grd_CompanyOrganizationDepartment.enable)
        	{
        		objDs = this.ds_department;
        	}

        	this.fnGetOne(objDs, objDs.rowposition);
        	this.commUtil.popupClose(this.ds_selectedEmp);
        }

        //선택된 row를 ds_selectedEmp에 넣어준다.
        this.fnGetOne = function(fromDs, nRow)
        {
        	var selDs = this.ds_selectedEmp;

        	selDs.clearData();
        	var toRow = selDs.addRow();
        	selDs.copyRow(toRow, fromDs, nRow);

        	//부서를 선택한 경우
        	if(fromDs.name == "ds_department") selDs.setColumn(toRow, "EMP_NO", fromDs.getColumn(nRow, "DEPT_CD"));
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        //직원 리스트를 가지고 온다
        this.fnSearchEmpList = function(empKind, holdOffice)
        {
        	var strSvcID = "searchEmpList";
        	var strModelNm = "CO_Organization_S01";

        	this.gfnAddSendParameter("TYPE", "2"); //TYPE 1:부서조회 2:직원리스트조회 3.직원검색
        	this.gfnAddSendParameter("EMP_KIND", this.empKind); //T:Tobe직원만
        	this.gfnAddSendParameter("HOLD_OFFICE", this.holdOffice); //1:현재종사자
        	if(this.bPartner)
        		this.gfnAddSendParameter("OUTSIDE_FLAG", "1"); //1:협력사
        	if(this.grdCol=="ASSETEMP") // 20220114 박종언 추가(협력사 코드)
        		this.gfnAddSendParameter("OUTSIDE_KIND", "1136"); //1136:투비씨엔에스

        	this.gfnAddOutputDataset("ds_employee", "ds_employee");
        	this.gfnCommonTransaction(strSvcID, strModelNm, this.grd_CompanyOrganizationEmployeeInfo);
        }

        //회사 조직도 리스트
        this.fnSearchDeptList = function()
        {
        	var strSvcID = "searchDeptList";
        	var strModelNm = "CO_Organization_S01";

        	this.gfnAddSendParameter("TYPE", "1"); //TYPE 1:부서조회 2:직원리스트조회 3.직원검색
        	this.gfnAddSendParameter("EMP_KIND", this.empKind); //T:Tobe직원만
        	this.gfnAddSendParameter("HOLD_OFFICE", this.holdOffice); //1:현재종사자
        	if(this.bPartner)
        		this.gfnAddSendParameter("OUTSIDE_FLAG", "1"); //1:협력사
        	if(this.grdCol=="ASSETEMP") // 20220114 박종언 추가(협력사 코드)
        		this.gfnAddSendParameter("OUTSIDE_KIND", "W01"); //W01:투비씨엔에스

        	this.gfnAddOutputDataset("ds_department", "ds_department");
        	this.gfnCommonTransaction(strSvcID, strModelNm, this.grd_CompanyOrganizationDepartment);
        }

        this.fnCallBack = function(strSvcID, nErrorCode, strErrorMag)
        {
        	if(nErrorCode != 0)
        	{
        		return;
        	}
        	else
        	{
        		switch(strSvcID)
        		{
        			case "searchDeptList":
        				if(this.holdOffice == "3")
        				{
        					var nRow = this.ds_department.addRow();
        					this.ds_department.setColumn(nRow, "ISCHECKED", "0");
        					this.ds_department.setColumn(nRow, "DEPT_CD", "");
        					this.ds_department.setColumn(nRow, "DEPT_NM", this.gfnGetTransTxt(2091, "퇴직자"));
        					this.ds_department.setColumn(nRow, "USE_YN", 1);
        					this.ds_department.setColumn(nRow, "LEV", "0");
        				}
        				this.fnTreeOpen(this.myDeptCD);
        				break;

        			case "searchEmpList" :
        				this.ds_employeeCopy.copyData(this.ds_employee); //검색시 row search에 쓰임
        				if(this.parent.sSubject)
        				{
        					this.div_Search.form.cmb_Condition.set_value("EMP_NM");
        					this.div_Search.form.edt_Search.set_value(this.parent.sSubject);

        					this.fnSearchEmp(this.div_Search.form.cmb_Condition.value, this.div_Search.form.edt_Search.value);
        				}else{
        					this.fnSetFocus(this.myDeptCD, this.myEmpNO);
        				}
        				break;
        		}
        	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.comm_oncellclick = function(obj,e)
        {
        	var objDs = this.lookup(obj.binddataset);

        	switch(obj.name)
        	{
        		//체크박스 토글 및 선택된 사원 해당부서 Tree Open
        		case "grd_CompanyOrganizationEmployeeInfo":
        			var sIsChecked = objDs.getColumn(e.row, "ISCHECKED") == "0" ? "1" : "0";
        			objDs.setColumn(e.row,"ISCHECKED", sIsChecked);
        			//선택된 직원의 부서를 Tree Open해준다.
        			this.fnTreeOpen(objDs.getColumn(e.row, "DEPT_CD"));
        			break;

        		//조직도 부서 선택 시 해당 부서를 open 해준다.
        		case "grd_CompanyOrganizationDepartment":
        			this.fnUnCheck(this.ds_employee);
        			if(this.holdOffice == 3 && objDs.rowcount == objDs.rowposition+1){
        				this.ds_employee.filter("HOLD_OFFICE != 1");
        			} else {
        				this.ds_employee.filter("DEPT_CD.indexOf('" + objDs.getColumn(e.row, "DEPT_CD")+ "') > -1 && HOLD_OFFICE == 1");
        			}
        			break;
        	}
        };

        this.grd_CompanyOrganizationEmployeeInfo_oncelldblclick = function(obj, e)
        {
        	var objDs = this.lookup(obj.binddataset);

        	//div가 없을때 선택 더블클릭시 직원 1명 정보 부모로 이동
        	if(this.div_list.url == "")
        		this.fnCloseWin();
        };

        this.common_onclick = function(obj, e)
        {
        	switch(obj.name) {
        		case "btn_Confirm": //확인버튼
        			if(this.gfnIsEmpty(this.divUrl))
        			{
        				this.fnCloseWin();
        			}
        			else
        			{
        				if(this.grdCol == "SMS" || this.grdCol == "DEPTS")
        				{
        					this.commUtil.popupClose(this.ds_selected);
        				}
        				else if(this.grdCol == "EMAIL")
        				{
        					var ds = this.ds_Return;
        					var fnSetDs = function(dsT, sToType)
        					{
        						for(var i = 0, iL = dsT.getRowCount(); i < iL; i++)
        						{
        							var newrow = ds.addRow();
        							ds.copyRow(newrow, dsT, i);
        							ds.setColumn(newrow, "TO_TYPE", sToType);
        						}
        					}
        					fnSetDs(this.ds_to, "TO");
        					fnSetDs(this.ds_cc, "CC");
        					fnSetDs(this.ds_bcc, "BCC");

        					this.commUtil.popupClose(ds);
        				}
        				else if(this.grdCol == "MEETING")
        				{
        					var ds = this.ds_Return;
        					var fnSetDs = function(dsT, sToType)
        					{
        						for(var i = 0, iL = dsT.getRowCount(); i < iL; i++)
        						{
        							var newrow = ds.addRow();
        							ds.copyRow(newrow, dsT, i);
        							ds.setColumn(newrow, "TO_TYPE", sToType);
        						}
        					}
        					fnSetDs(this.ds_cc, "H");
        					fnSetDs(this.ds_bcc, "G");

        					this.commUtil.popupClose(ds);
        				}
        			}
        			break;

        		case "btn_Cancel": //취소버튼
        			this.close();
        			break;

        		case "btn_Close": // X버튼
        			this.commUtil.popupClose(new nexacro.Dataset());
        			break;

        		case "btn_Search":
        			this.fnSearchEmp(this.div_Search.form.cmb_Condition.value, this.div_Search.form.edt_Search.value);
        			break;

        		//fnInsert
        		case "btn_To":
        			if(this.grdCol == "SMS")
        			{
        				this.fnInsert(this.ds_selected);
        			}
        			else if(this.grdCol == "EMAIL")
        			{
        				this.fnInsert(this.ds_to);
        			}
        			else if(this.grdCol == "DEPTS")
        			{
        				this.fnInsert(this.ds_selected);
        			}
        			break;

        		case "btn_Cc":
        			if(this.grdCol == "MEETING")
        			{
        				this.fnInsertOne(this.ds_cc);
        			}
        			else
        			{
        				this.fnInsert(this.ds_cc);
        			}
        			break;

        		case "btn_Bcc":
        			this.fnInsert(this.ds_bcc);
        			break;

        		default :
        			this.alert(this.gfnGetTransTxt(1231, "준비중입니다."));
        			break;
        	}
        };

        this.edt_Search_onkeydown = function(obj, e)
        {
        	if(e.keycode == 13)
        	{
        		this.fnSearchEmp(this.div_Search.form.cmb_Condition.value, this.div_Search.form.edt_Search.value);
        	}
        };

        this.grd_CompanyOrganizationEmployeeInfo_onheadclick = function(obj, e)
        {
        	if(e.col == 0)
        	{
        		if(this.gfnIsEmpty(obj.getCellProperty("head", e.cell, "text")) || obj.getCellProperty("head", e.cell, "text") == 0)
        		{
        			obj.setCellProperty("head", e.cell, "text", 1);
        		}
        		else
        		{
        			obj.setCellProperty("head", e.cell, "text", 0);
        		}

        		if(obj.getCellProperty("head", e.cell, "text") == 1)
        		{
        			for(var i=0; i<this.ds_employee.rowcount; i++)
        			{
        				this.ds_employee.setColumn(i, "ISCHECKED", 1);
        			}
        		}
        		else if(obj.getCellProperty("head", e.cell, "text") == 0)
        		{
        			for(var i=0; i<this.ds_employee.rowcount; i++)
        			{
        				this.ds_employee.setColumn(i, "ISCHECKED", 0);
        			}
        		}
        	}
        };
        this.ListView00_oncellclick = function(obj,e)
        {
        // 	// 셀 클릭시 expand/collapse 되도록 설정. 왜 getDetailBandStatus()함수가 없는걸까...
        // 	if (this.fvExpandRow == e.row) {
        // 		this.ListView00.hideDetailBand(e.row);
        // 	} else {
        // 		this.ListView00.showDetailBand(e.row);
        // 	}
        };

        this.ListView00_onbandstatuschanged = function(obj,e)
        {
        // 	if (e.bandstatus == "expand") {
        // 		this.fvExpandRow = e.row;
        // 	} else {
        // 		if (this.fvExpandRow == e.row)	this.fvExpandRow = -1;
        // 	}
        };

        this.grd_CompanyOrganizationDepartment_oncelldblclick = function(obj,e)
        {
        	if(this.partDiv == "deptOnly")
        	{
        		var objDs = this.lookup(obj.binddataset);

        		//div가 없을때 선택 더블클릭시 직원 1명 정보 부모로 이동
        		if(this.div_list.url == "" || this.partDiv == "deptOnly")
        			this.fnCloseWin();
        	}
        	else return;
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CO_Organization_onload,this);
            this.div_Search.form.edt_Search.addEventHandler("onkeydown",this.edt_Search_onkeydown,this);
            this.div_Search.form.btn_Search.addEventHandler("onclick",this.common_onclick,this);
            this.div_Search.form.btn_Bcc.addEventHandler("onclick",this.common_onclick,this);
            this.div_Search.form.btn_Cc.addEventHandler("onclick",this.common_onclick,this);
            this.div_Search.form.btn_To.addEventHandler("onclick",this.common_onclick,this);
            this.btn_Close.addEventHandler("onclick",this.common_onclick,this);
            this.btn_Cancel.addEventHandler("onclick",this.common_onclick,this);
            this.btn_Confirm.addEventHandler("onclick",this.common_onclick,this);
            this.grd_CompanyOrganizationDepartment.addEventHandler("oncellclick",this.comm_oncellclick,this);
            this.grd_CompanyOrganizationDepartment.addEventHandler("oncelldblclick",this.grd_CompanyOrganizationDepartment_oncelldblclick,this);
            this.grd_CompanyOrganizationEmployeeInfo.addEventHandler("oncellclick",this.comm_oncellclick,this);
            this.grd_CompanyOrganizationEmployeeInfo.addEventHandler("oncelldblclick",this.grd_CompanyOrganizationEmployeeInfo_oncelldblclick,this);
            this.grd_CompanyOrganizationEmployeeInfo.addEventHandler("onheadclick",this.grd_CompanyOrganizationEmployeeInfo_onheadclick,this);
        };
        this.loadIncludeScript("CO_Organization.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
