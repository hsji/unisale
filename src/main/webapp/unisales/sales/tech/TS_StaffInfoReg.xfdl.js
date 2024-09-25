(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TS_StaffInfoReg");
            this.set_titletext("인력기본정보");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,530);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsEmpNo", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_LICENSE_TYPE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ArmyType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"256\" type=\"STRING\"/><Column id=\"CAPTION\" size=\"256\" type=\"STRING\"/><Column id=\"CAPTION_JAP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"CAPTION\">미필</Col><Col id=\"CAPTION_JAP\">軍未畢</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CAPTION\">필</Col><Col id=\"CAPTION_JAP\">軍畢</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Married", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"256\" type=\"STRING\"/><Column id=\"CAPTION\" size=\"256\" type=\"STRING\"/><Column id=\"CAPTION_JAP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"CAPTION\">미혼</Col><Col id=\"CAPTION_JAP\">未婚</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CAPTION\">기혼</Col><Col id=\"CAPTION_JAP\">既婚</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Birth", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"256\" type=\"STRING\"/><Column id=\"CAPTION\" size=\"256\" type=\"STRING\"/><Column id=\"CAPTION_JAP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"CAPTION\">양력</Col><Col id=\"CAPTION_JAP\">揚力</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CAPTION\">음력</Col><Col id=\"CAPTION_JAP\">旧暦</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SexType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"256\" type=\"STRING\"/><Column id=\"CAPTION\" size=\"256\" type=\"STRING\"/><Column id=\"CAPTION_JAP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">m</Col><Col id=\"CAPTION\">남</Col><Col id=\"CAPTION_JAP\">男</Col></Row><Row><Col id=\"CODE\">w</Col><Col id=\"CAPTION\">여</Col><Col id=\"CAPTION_JAP\">女</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsEmpCheck", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_Attachment01","172","491","134","27",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("개인정보활용동의서");
            obj.set_visible("true");
            obj.set_cssclass("sta_POP_GroupTit");
            obj.getSetter("TL_SEQ").set("2231");
            this.addChild(obj.name, obj);

            obj = new Div("div_Attachment02","stc_Attachment01:12","491","506","26",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_async("false");
            obj.getSetter("SOURCE_CD").set("EI");
            obj.getSetter("SOURCE_SEQ").set("EMP_NO");
            obj.getSetter("USE_NEXT_FILE_TYPE").set("false");
            obj.getSetter("USE_LINK_TYPE").set("false");
            obj.getSetter("USE_MULTI_FILE").set("false");
            obj.getSetter("USE_OPEN_ADD_DIALOG").set("false");
            obj.getSetter("USE_DELETE_ALL").set("false");
            obj.getSetter("USE_BUTTON_ONLY").set("false");
            obj.getSetter("STATUS_CD").set("PRIVACY");
            obj.getSetter("BINDDATASET").set("dsOutput");
            obj.set_url("sales::comm/COM_Attachment.xfdl");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img00","12.00","20","150","180",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("1px solid #dddddd");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new FileUpload("fud00","46","img00:10","80","33",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_itemheight("32");
            obj.set_buttonsize("80");
            obj.set_buttontext("사진등록");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","170.00","20",null,"470","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","524","0","129","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("17");
            obj.set_text("사용자 ID");
            obj.set_cssclass("sta_WF_DetailTit");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtUserId","staTitle01:15.00","6","130","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_cssclass("essential");
            obj.set_readonly("false");
            obj.set_imemode("alpha");
            obj.set_maxlength("20");
            obj.set_inputtype("digit,english");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle02","524.00","36","129","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("18");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtPassword","668.00","41","130","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_cssclass("essential");
            obj.set_password("true");
            obj.set_imemode("alpha");
            obj.set_maxlength("30");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle01_00","0","0","129","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("36");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_DetailTit");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle05","0","staTitle01_00:2","129","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("34");
            obj.set_text("사번/ID");
            obj.set_cssclass("sta_WF_DetailTit");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle03","0","staTitle05:2","129","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("19");
            obj.set_text("사용자명");
            obj.set_cssclass("sta_WF_DetailTit");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtEmpNo","144.00","41","127","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_maxlength("10");
            obj.set_inputtype("digit,alpha");
            obj.set_cssclass("essential");
            obj.set_enable("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","144.00","78","127","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_imemode("hangul");
            obj.set_maxlength("30");
            obj.set_cssclass("essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle06","0","staTitle03:2","129","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("20");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_DetailTit");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle07","524.00","108","129","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("21");
            obj.set_text("직원구분");
            obj.set_cssclass("sta_WF_DetailTit");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboUserFlagCd","668.00","115","130","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle08","0","staTitle06:2","129","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("22");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_DetailTit");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("divDept","144.00","115","355","28",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_text("div00");
            obj.set_url("common::cmmDeptSearch.xfdl");
            obj.getSetter("uEssential").set("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboWkgdCd","144.00","150","127","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_CD_GRADE_CODE");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle09","0","staTitle08:2","129","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("23");
            obj.set_text("직종");
            obj.set_cssclass("sta_WF_DetailTit");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboOccuCd","144.00","186","127","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_CD_OCCU");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle10","524.00","180","129","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("24");
            obj.set_text("담당업무");
            obj.set_cssclass("sta_WF_DetailTit");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtChagWork","668.00","186","130","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle11","0","staTitle09:2","129","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("30");
            obj.set_text("입사일자");
            obj.set_cssclass("sta_WF_DetailTit");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle13","0","staTitle11:2","129","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("25");
            obj.set_text("재직상태");
            obj.set_cssclass("sta_WF_DetailTit");
            this.divDetail.addChild(obj.name, obj);

            obj = new Calendar("calJoinDate","144.00","222","130","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_dateformat("yyyy-MM-dd");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboHoofStatCd","144.00","258","130","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_cssclass("essential");
            obj.set_innerdataset("ds_CD_HOLD_OFFICE");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle14","524.00","252","129","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("26");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_DetailTit");
            this.divDetail.addChild(obj.name, obj);

            obj = new Calendar("calBirDt","staTitle14:15.00","258","127","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("14");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle16","524.00","324","129","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("27");
            obj.set_text("E-Mail");
            obj.set_cssclass("sta_WF_DetailTit");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtEmail","668.00","329",null,"24","50",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("15");
            obj.set_imemode("alpha");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle15_00_00_00","0","360","129","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("42");
            obj.set_text("주민등록번호");
            obj.set_cssclass("sta_WF_DetailTit");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle15_00_00_00_00","0","staTitle15_00_00_00:2","129","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("45");
            obj.set_text("병역관계");
            obj.set_cssclass("sta_WF_DetailTit");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle17","0","staTitle15_00_00_00_00:2","129","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("28");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_DetailTit");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle15","0","staTitle13:2","129","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("29");
            obj.set_text("핸드폰번호");
            obj.set_cssclass("sta_WF_DetailTit");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle12","524.00","216","129","35",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("31");
            obj.set_text("퇴사일자");
            obj.set_cssclass("sta_WF_DetailTit");
            this.divDetail.addChild(obj.name, obj);

            obj = new Calendar("calRetrDate","668.00","222","130","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_dateformat("yyyy-MM-dd");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle09_00","524.00","144","129","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("32");
            obj.set_text("직책");
            obj.set_cssclass("sta_WF_DetailTit");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboWkdtCd","668.00","150","130","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_CD_DUTY_CODE");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            this.divDetail.addChild(obj.name, obj);

            obj = new JusoPostCode("jPostAddr","144.00","438",null,"24","20",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("16");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle04","524.00","72","129","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("33");
            obj.set_text("영문명");
            obj.set_cssclass("sta_WF_DetailTit");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtUserNmEng","668.00","78","130","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_imemode("alpha");
            obj.set_maxlength("30");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("div_RelatedCompany","staTitle01_00:15","6","245","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("37");
            obj.set_url("sales::comm/COM_Search.xfdl");
            obj.getSetter("binddataset").set("dsOutput");
            obj.getSetter("kind").set("COMPANY");
            obj.set_async("false");
            obj.getSetter("codecolumn").set("COMPANY_CD");
            obj.getSetter("datacolumn").set("COMPANY_NAME");
            obj.getSetter("mode").set("");
            obj.getSetter("user_onchanged").set("dsOutput_CO_CD_onchanged");
            obj.set_text("");
            obj.getSetter("param").set("2");
            this.divDetail.addChild(obj.name, obj);

            obj = new MaskEdit("mskHp","144.00","294","130","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("35");
            obj.set_type("string");
            obj.set_format("###-####-####");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle15_00","524.00","288","129","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("38");
            obj.set_text("직장전화번호");
            obj.set_cssclass("sta_WF_DetailTit");
            this.divDetail.addChild(obj.name, obj);

            obj = new MaskEdit("mskOTel","668.00","294","130","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("39");
            obj.set_type("string");
            obj.set_format("###-####-####");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle15_00_00","0","staTitle15:2","129","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("40");
            obj.set_text("집전화번호");
            obj.set_cssclass("sta_WF_DetailTit");
            this.divDetail.addChild(obj.name, obj);

            obj = new MaskEdit("mskHTel","144.00","329","130","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("41");
            obj.set_type("string");
            obj.set_format("###-####-####");
            this.divDetail.addChild(obj.name, obj);

            obj = new MaskEdit("mskResNo","144.00","365","130","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("43");
            obj.set_type("string");
            obj.set_format("######-#######");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle16_00","524.00","360","129","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("44");
            obj.set_text("결혼여부");
            obj.set_cssclass("sta_WF_DetailTit");
            this.divDetail.addChild(obj.name, obj);

            obj = new Radio("rdo_Married","661.00","365","141","22",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("46");
            obj.set_innerdataset("ds_Married");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_direction("vertical");
            obj.set_readonly("false");
            obj.set_rowcount("1");
            obj.getSetter("TL_FLAG").set("1");
            obj.set_text("미혼");
            obj.set_value("0");
            this.divDetail.addChild(obj.name, obj);

            obj = new Radio("rdo_Birth","809.00","258","133","22",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("47");
            obj.set_innerdataset("ds_Birth");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_direction("vertical");
            obj.set_readonly("false");
            obj.set_rowcount("1");
            obj.getSetter("TL_FLAG").set("1");
            obj.set_text("양력");
            obj.set_value("0");
            this.divDetail.addChild(obj.name, obj);

            obj = new Radio("rdo_ArmyType","138.00","403","130","22",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("48");
            obj.set_innerdataset("ds_ArmyType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_direction("vertical");
            obj.set_rowcount("1");
            obj.getSetter("TL_FLAG").set("1");
            obj.set_text("미필");
            obj.set_value("0");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btn_EmpNoIssuer","279.00","41","110","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("49");
            obj.set_text("사번자동발급");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btn_EmpNoCheck","btn_EmpNoIssuer:6","41","110","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("50");
            obj.set_text("사번중복체크");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_Attachment02
            obj = new Layout("default","",0,0,this.div_Attachment02.form,function(p){});
            this.div_Attachment02.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form.divDept
            obj = new Layout("default","",0,0,this.divDetail.form.divDept.form,function(p){});
            this.divDetail.form.divDept.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form.div_RelatedCompany
            obj = new Layout("default","",0,0,this.divDetail.form.div_RelatedCompany.form,function(p){});
            this.divDetail.form.div_RelatedCompany.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1200,530,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item9","edt_Address2","value","dsOutput","DETAIL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","img00","image","dsOutput","USER_PIC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divDetail.form.edtUserId","value","dsOutput","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divDetail.form.edtUserNm","value","dsOutput","EMP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divDetail.form.cboUserFlagCd","value","dsOutput","USER_FLAG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divDetail.form.cboWkgdCd","value","dsOutput","WKGD_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divDetail.form.cboWkdtCd","value","dsOutput","WKDT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divDetail.form.cboOccuCd","value","dsOutput","OCCU_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divDetail.form.edtChagWork","value","dsOutput","CHAG_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divDetail.form.calJoinDate","value","dsOutput","JOIN_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divDetail.form.calRetrDate","value","dsOutput","RETR_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divDetail.form.cboHoofStatCd","value","dsOutput","HOOF_STAT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divDetail.form.calBirDt","value","dsOutput","BIR_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divDetail.form.cboPhone1","value","dsOutput","PHONE1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divDetail.form.edtPhone2","value","dsOutput","PHONE2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divDetail.form.edtPhone3","value","dsOutput","PHONE3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divDetail.form.edtEmail","value","dsOutput","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divDetail.form.jPostAddr.form.edtSculZip","value","dsOutput","ZIP_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divDetail.form.jPostAddr.form.edtBasAddr","value","dsOutput","BASC_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divDetail.form.jPostAddr.form.edtDetailAddr","value","dsOutput","DTL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divDetail.form.divDept.form.edtCode","value","dsOutput","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divDetail.form.divDept.form.edtName","value","dsOutput","DEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item42","divDetail.form.divDept.form.edtCompany","value","dsOutput","COMPANY_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divDetail.form.div_RelatedCompany.form.edtName","value","dsOutput","COMPANY_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item44","divDetail.form.div_RelatedCompany.form.edtCode","value","dsOutput","COMPANY_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divDetail.form.edtUserNmEng","value","dsOutput","ENGL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divDetail.form.edtEmpNo","value","dsOutput","EMP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","divDetail.form.cboThemId","value","dsOutput","THEME_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divDetail.form.mskHp","value","dsOutput","CELL_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divDetail.form.mskOTel","value","dsOutput","HUS_TELP_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divDetail.form.mskHTel","value","dsOutput","WKPL_TELP_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divDetail.form.mskResNo","value","dsOutput","REGI_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divDetail.form.rdo_Married","value","dsOutput","MARRIAGE_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divDetail.form.rdo_Birth","value","dsOutput","BIR_LUNAR_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divDetail.form.rdo_ArmyType","value","dsOutput","MILITARY_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","sales::comm/COM_Attachment.xfdl");
            this._addPreloadList("fdl","common::cmmDeptSearch.xfdl");
            this._addPreloadList("fdl","sales::comm/COM_Search.xfdl");
        };
        
        // User Script
        this.addIncludeScript("TS_StaffInfoReg.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("TS_StaffInfoReg.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("TS_StaffInfoReg.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("TS_StaffInfoReg.xfdl","Script::CommGrid.xjs");
        this.registerScript("TS_StaffInfoReg.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 : 공통 - 공통
        * 02. 화면명   : 인력정보등록 (TS_StaffInfoSearch_S01,
        								TS_StaffInfoSearch_S02,
        								TS_StaffInfoSearch_S04,
        								TS_StaffInfoSearch_R01,
        								TS_StaffInfoSearch_R02)
        * 03. 화면설명 :
        * 04. 작성일   : 2018.09.17
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
        this.arrCompanyExceptList = ["TOBE"];	//선택되면 안되는 회사 목록 추려야함 ingyu 20181015

        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/
        this.fvAddEmpNoCheck = false;
        this.dsOutput = null;
        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/
        this.TS_StaffInfoReg_onload = function(obj,e)
        {
        	this.gfnCompInit(obj); //헤더클릭 이벤트 없을 시 사용
        	this.fnGetCode();

        	var sUrl = this.gfnGetServiceUrl();
        	this.divDetail.form.jPostAddr.set_jspUrl(sUrl + "thirdParty/post/PostCall.jsp");

        	this.dsOutput = this.parent.parent.parent.dsOutput;

        	//this.divDetail.form.div_RelatedCompany.form.fnSetReadOnly(true);
        };

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.fnGetCode = function()
        {
        	//공통코드
        	var param = [
        			  {biztype : "Combo", code : "SM04", objid : this.divDetail.form.cboUserFlagCd}							// 직원구분
        			//, {biztype : "Combo", code : "SM05", objid : this.divDetail.form.cboWkgdCd}								// 직급코드
        			//, {biztype : "Combo", code : "SM06", objid : this.divDetail.form.cboWkdtCd}								// 직책구분
        			, {biztype : "Combo", code : "SM07", objid : this.divDetail.form.cboOccuCd}								// 직종
        			//, {biztype : "Combo", code : "SM08", objid : this.divDetail.form.cboHoofStatCd}							// 재직상태
        	];
        	this.gfnGetCommonCode(param);
        //
        // 	this.gfnAddCodeDataset("ds_CD_GRADE_CODE"			,"SM05");		// SM05 CM0002 직급
        // 	this.gfnAddCodeDataset("ds_CD_DUTY_CODE"			,"SM06");		// SM06 CM0003 직책
        // 	this.gfnAddCodeDataset("ds_CD_HOLD_OFFICE"			,"SM08");		// 재직상태 SM08 CM0009

        // 	this.gfnAddCodeDataset("ds_CD_LEVEL_CODE" 			,"LEVEL_CODE");	// 등급
        // 	this.gfnAddCodeDataset("ds_CD_LAST_SCHOOL_CAREER"	,"LAST_SCHOOL_CAREER");
        // 	this.gfnAddCodeDataset("ds_CD_LICENSE_TYPE" 		,"FILE_EL");
        //
        // 	// 공통코드 조회
        // 	this.gfnCodeTransaction();
        };

        this.fnsetEditReadonly = function(bRead)
        {
        	this.gfnCompDisable(this.divDetail.form, bRead);
        };

        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/

        this.fnGetEmpCode = function()
        {
        	var dsOutput = this.dsOutput; //parent의 Dataset에 접근하기 위해 사용한다.
        	if(dsOutput.rowcount == 0 || this.gfnIsNull(dsOutput.getColumn(0, "COMPANY_CD"))) {
        		this.gfnAlert('msg.noselect',['회사']);
        		return;
        	}

        	this.gfnAddSendParameter("CO_CD", dsOutput.getColumn(0, "COMPANY_CD"));

        	//this.gfnAddOutputDataset("dsEmpNo", "dsNewEmpNo");
        	//this.gfnCommonTransaction("fnGetEmpCode", "TS_StaffInfoSearch_S04");

        	this.gfnSetMap("orgUserMapper", "MakeEmpNo", "dsEmpNo");
        	this.gfnCommonTransaction("fnGetEmpCode", "selectNextList.do"/*"TS_StaffInfoSearch_S04"*/);
        };

        // 화면 콜백
        this.fnCallBack = function(strSvcID, nErrorCode, strErrorMag)
        {
        	// 에러 예외처리
        	if(nErrorCode != 0)
        	{
        		//alert("strSvcID : " + strSvcID + "\n" + "nErrorCode : " + nErrorCode + "\n" + "strErrorMag : " + strErrorMag);
        		return;
        	}
        	else
        	{
        		if(strSvcID == "gfnGetCode")
        		{

        		}
        		else if(strSvcID == "fnGetEmpCode")
        		{
        			var dsOutput = this.dsOutput;
        			dsOutput.setColumn(0,"EMP_NO", this.dsEmpNo.getColumn(0, "EMP_NO"));
        			dsOutput.setColumn(0,"USER_ID", this.dsEmpNo.getColumn(0, "EMP_NO"));
        // 			var form = dsOutput.parent;
        // 			form.fnSearchSub("SubSelect_Copy", this.dsEmpNo.getColumn(0, "EMP_NO")); //재조회 작업
        		}
        		else if(strSvcID == "checkEmp") {
        			if(this.dsEmpCheck.rowcount == 0) {
        				this.gfnAlert("msg.info.empid",[]);
        				this.fvAddEmpNoCheck = true;
        			} else {
        				this.gfnAlert("msg.err.empid",[]);
        				this.fvAddEmpNoCheck = false;
        			}
        		}
        	}
        };

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.comm_Click = function(obj,e)
        {
        	this.fvAddEmpNoCheck = false;

        	switch(obj.name)
        	{
        		case "btn_EmpNoIssuer" :
        			if(this.divDetail.form.edtEmpNo.readonly == false) {
        				this.divDetail.form.edtEmpNo.set_value("");
        				this.divDetail.form.edtEmpNo.set_readonly(true);
        				this.divDetail.form.edtUserId.set_value("");
        				this.divDetail.form.edtUserId.set_readonly(true);
        				this.divDetail.form.btn_EmpNoIssuer.set_text("사번수기입력");
        				this.divDetail.form.btn_EmpNoCheck.set_visible(true);
        			} else {
        				this.divDetail.form.edtEmpNo.set_readonly(false);
        				this.divDetail.form.edtUserId.set_readonly(false);
        				this.divDetail.form.btn_EmpNoIssuer.set_text("사번자동발급");
        				this.divDetail.form.btn_EmpNoCheck.set_visible(false);
        			}
        			//this.fnGetEmpCode();
        			break;
        		case "btn_EmpNoCheck" :
        			if(this.gfnIsNull(this.dsOutput.getColumn(0,"COMPANY_CD"))) {
        				this.gfnAlert('msg.noselect',['회사명']);
        				return;
        			}
        			if(this.gfnIsNull(this.divDetail.form.edtEmpNo.value)) {
        				this.gfnAlert('msg.err.validator.input',['사번']);
        				this.divDetail.form.edtEmpNo.setFocus();
        				return;
        			}

        			this.gfnAddSendParameter("EMP_NO", this.divDetail.form.edtEmpNo.value);
        			this.gfnAddSendParameter("COMPANY_CODE", this.dsOutput.getColumn(0,"COMPANY_CD"));

        			// 추후 권한처리할 것
        			this.gfnSetMap("orgUserMapper", "CheckEmpNo", "dsEmpCheck");
        			this.gfnCommonTransaction("checkEmp", "selectNextList.do"/*"TS_StaffInfoSearch_S01"*/);
        			break;
        		default:
        	}
        };

        this.dsOutput_CO_CD_onchanged = function(obj, e)
        {
        	this.fvAddEmpNoCheck = false;
        // 	if(this.arrCompanyExceptList.indexOf(e.newCode) != -1 )
        // 	{
        // 		this.fnsetEditReadonly(true); //TOBE직원일 때
        // 	}
        // 	else
        // 	{
        // 		this.fnsetEditReadonly(false); //TOBE직원이 아닐 때
        // 	}
        }

        this.fud00_onitemchanged = function(obj,e)
        {
        	var items = obj._items;
        	var ds = this.dsOutput;
        	if(items[0] && items[0]._files && items[0]._files[0]) {
        		var reader = new FileReader();
        		reader.readAsDataURL(items[0]._files[0]);
        		reader.onload = function(e) {
        			ds.setColumn(0, "USER_PIC", e.target.result);
        		};
        	}
        };

        // 저장 validation
        this.fnFieldEnable = function (v)
        {
        	this.divDetail.form.div_RelatedCompany.form.fnSetReadOnly(true);
        	if(v) {
        		// 기존
        		//this.divDetail.form.div_RelatedCompany.set_enable(true);
        		this.divDetail.form.edtEmpNo.set_readonly(true);
        		this.divDetail.form.edtUserId.set_readonly(true);
        		this.divDetail.form.edtUserNm.set_readonly(true);
        		this.divDetail.form.staTitle02.set_visible(false);
        		this.divDetail.form.edtPassword.set_visible(false);
        		//this.divDetail.form.staTitle02.set_visible(true);
        		//this.divDetail.form.edtPassword.set_visible(true);
        	} else {
        		// 신규
        		//this.divDetail.form.div_RelatedCompany.set_enable(false);
        		this.divDetail.form.edtEmpNo.set_readonly(false);
        		this.divDetail.form.edtUserId.set_readonly(false);
        		this.divDetail.form.edtUserNm.set_readonly(false);
        		this.divDetail.form.staTitle02.set_visible(true);
        		this.divDetail.form.edtPassword.set_visible(true);
        	}


        };

        // 저장 validation
        this.fnValid = function ()
        {
        	if(this.dsOutput.getRowType(0) == 2) {
        		if(this.divDetail.form.edtEmpNo.readonly == false && this.fvAddEmpNoCheck == false) {
        			this.gfnAlert("msg.err.checkempid",[]);
        			return false;
        		}
        	}

        	// 정합성 체크
        	this.gfnClearValidation(this.dsOutput);
        	this.gfnSetValidation(this.dsOutput, "COMPANY_CD", "회사명"	, "required");

        	if(this.dsOutput.getRowType(0) != 2 || (this.divDetail.form.btn_EmpNoIssuer.visible && this.divDetail.form.edtEmpNo.readonly == false)) {
        		this.gfnSetValidation(this.dsOutput, "EMP_NO", "사번"	, "required");
        		this.gfnSetValidation(this.dsOutput, "USER_ID", "사용자ID"	, "required");
        	}
        	this.gfnSetValidation(this.dsOutput, "EMP_NM", "사용자명"	, "required");
        	//this.gfnSetValidation(this.dsOutput, "DEPT_CD", "부서명"	, "required");
        	this.gfnSetValidation(this.dsOutput, "USER_FLAG_CD", "직원구분"	, "required");
        	this.gfnSetValidation(this.dsOutput, "WKGD_CD", "직급"	, "required");
        	this.gfnSetValidation(this.dsOutput, "HOOF_STAT_CD", "재직상태"	, "required");
        	this.gfnSetValidation(this.dsOutput, "EMAIL", "EMAIL"	, "required");
        	this.gfnSetValidation(this.dsOutput, "EMAIL", "EMAIL"	, "isemail");

        	// Dataset의 변경된 Row Validation check
        	if (this.gfnValidation(this.dsOutput, "U") == false) return false;
        	else return true;
        };


        this.fud00_onfindclick = function(obj,e)
        {
        	if(this.dsOutput.rowcount == 0) return false;
        };

        this.divDetail_edtPassword_onchanged = function(obj,e)
        {
        	var pswd = obj.value;
        	var shaObj = new jsSHA("SHA-256", "TEXT");
        	shaObj.update(pswd);
        	var hash = shaObj.getHash("HEX");

        	this.dsOutput.setColumn(this.dsOutput.rowposition, "PASSWORD", this.gfnEncData(hash));
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TS_StaffInfoReg_onload,this);
            this.fud00.addEventHandler("onitemchanged",this.fud00_onitemchanged,this);
            this.fud00.addEventHandler("onfindclick",this.fud00_onfindclick,this);
            this.divDetail.form.edtPassword.addEventHandler("onchanged",this.divDetail_edtPassword_onchanged,this);
            this.divDetail.form.cboUserFlagCd.addEventHandler("onitemchanged",this.cbo_onitemchange,this);
            this.divDetail.form.cboWkgdCd.addEventHandler("onitemchanged",this.cbo_onitemchange,this);
            this.divDetail.form.cboOccuCd.addEventHandler("onitemchanged",this.cbo_onitemchange,this);
            this.divDetail.form.cboWkdtCd.addEventHandler("onitemchanged",this.cbo_onitemchange,this);
            this.divDetail.form.btn_EmpNoIssuer.addEventHandler("onclick",this.comm_Click,this);
            this.divDetail.form.btn_EmpNoCheck.addEventHandler("onclick",this.comm_Click,this);
        };
        this.loadIncludeScript("TS_StaffInfoReg.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
