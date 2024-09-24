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


            obj = new Dataset("ds_CD_LAST_SCHOOL_CAREER", this);
            obj._setContents("");
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
            
            // UI Components Initialize
            obj = new ImageViewer("img00","0","20","191","256",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("1px solid #dddddd");
            obj.set_stretch("fit");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","img00:20.00","20",null,"470","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","536.00","0","110","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("17");
            obj.set_text("사용자 ID");
            obj.set_cssclass("sta_WF_DetailTit");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle02","536","staTitle01:9","110","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("18");
            obj.set_text("비밀번호");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtUserId","staTitle01:9","0","206","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_cssclass("essential");
            obj.set_readonly("true");
            obj.set_imemode("alpha");
            obj.set_maxlength("20");
            obj.set_inputtype("digit,english");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtPassword","staTitle02:9","edtUserId:10","206","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_cssclass("essential");
            obj.set_password("true");
            obj.set_imemode("alpha");
            obj.set_maxlength("30");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle05","0","34","110","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("34");
            obj.set_text("사번/ID");
            obj.set_cssclass("sta_WF_DetailTit");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle03","0","staTitle05:10","110","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("19");
            obj.set_text("사용자명");
            obj.set_cssclass("sta_WF_DetailTit");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtEmpNo","staTitle05:9","34","206","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_maxlength("10");
            obj.set_inputtype("digit,alpha");
            obj.set_cssclass("essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtUserNm","staTitle03:10","68","206","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_imemode("hangul");
            obj.set_maxlength("30");
            obj.set_cssclass("essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle06","0","staTitle03:10","110","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("20");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_DetailTit");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle04","536","staTitle02:10","110","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("33");
            obj.set_text("영문명");
            obj.set_cssclass("sta_WF_DetailTit");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle07","536","staTitle04:10","110","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("21");
            obj.set_text("직원구분");
            obj.set_cssclass("sta_WF_DetailTit");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtUserNmEng","staTitle04:9","edtPassword:10","206","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_imemode("alpha");
            obj.set_maxlength("30");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboUserFlagCd","staTitle07:9","edtUserNmEng:10","206","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle08","0","staTitle06:10","110","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("22");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_DetailTit");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("divDept","120.00","staTitle06:-24","412","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_text("div00");
            obj.set_url("common::cmmDeptSearch.xfdl");
            obj.getSetter("uEssential").set("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboWkgdCd","120.00","divDept:10","206","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_CD_GRADE_CODE");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle09","0","staTitle08:10","110","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("23");
            obj.set_text("직종");
            obj.set_cssclass("sta_WF_DetailTit");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboOccuCd","120.00","cboWkgdCd:10","206","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle09_00","536","staTitle07:10","110","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("32");
            obj.set_text("직책");
            obj.set_cssclass("sta_WF_DetailTit");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle10","536","staTitle09_00:10","110","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("24");
            obj.set_text("담당업무");
            obj.set_cssclass("sta_WF_DetailTit");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboWkdtCd","staTitle09_00:9","cboUserFlagCd:10","206","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_innerdataset("ds_CD_DUTY_CODE");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtChagWork","staTitle10:9","cboWkdtCd:10","206","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle11","0","staTitle09:10","110","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("30");
            obj.set_text("입사일자");
            obj.set_cssclass("sta_WF_DetailTit");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle13","0","staTitle11:10","110","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("25");
            obj.set_text("재직상태");
            obj.set_cssclass("sta_WF_DetailTit");
            this.divDetail.addChild(obj.name, obj);

            obj = new Calendar("calJoinDate","120.00","cboOccuCd:10","130","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_dateformat("yyyy-MM-dd");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboHoofStatCd","120.00","calJoinDate:10","130","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_cssclass("essential");
            obj.set_innerdataset("ds_CD_HOLD_OFFICE");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle12","536","staTitle10:10","110","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("31");
            obj.set_text("퇴사일자");
            obj.set_cssclass("sta_WF_DetailTit");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle14","536","staTitle12:10","110","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("26");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_DetailTit");
            this.divDetail.addChild(obj.name, obj);

            obj = new Calendar("calRetrDate","staTitle12:9","edtChagWork:10","130","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_dateformat("yyyy-MM-dd");
            this.divDetail.addChild(obj.name, obj);

            obj = new Calendar("calBirDt","staTitle14:9","calRetrDate:10","130","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("14");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle16","536.00","306","110","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("27");
            obj.set_text("E-Mail");
            obj.set_cssclass("sta_WF_DetailTit");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtEmail","staTitle16:9","306","299","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("15");
            obj.set_imemode("alpha");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle15_00_00_00_00_00","0","374","110","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("47");
            obj.set_text("병역관계");
            obj.set_cssclass("sta_WF_DetailTit");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle17","0","staTitle15_00_00_00_00_00:10","110","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("28");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_DetailTit");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle15","0","staTitle13:10","110","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("29");
            obj.set_text("핸드폰번호");
            obj.set_cssclass("sta_WF_DetailTit");
            this.divDetail.addChild(obj.name, obj);

            obj = new JusoPostCode("jPostAddr","120.00","408",null,"24","10",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("16");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("stc_CompanyName","0","0","110","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("36");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_DetailTit");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("div_RelatedCompany","stc_CompanyName:9","0","412","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("37");
            obj.set_url("sales::comm/COM_Search.xfdl");
            obj.getSetter("binddataset").set("dsOutput");
            obj.getSetter("kind").set("COMPANY");
            obj.set_async("false");
            obj.getSetter("codecolumn").set("COMPANY_CD");
            obj.getSetter("datacolumn").set("COMPANY_NM");
            obj.getSetter("mode").set("");
            obj.getSetter("user_onchanged").set("dsOutput_CO_CD_onchanged");
            obj.set_text("");
            obj.getSetter("param").set("2");
            obj.getSetter("uEssential").set("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new MaskEdit("msk00","120.00","cboHoofStatCd:10","130","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("35");
            obj.set_type("string");
            obj.set_format("###-####-####");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btn_EmpNoIssuer","edtEmpNo:5.00","33","121","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("38");
            obj.set_text("사번발급(협력사)");
            obj.set_visible("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle15_00","536.00","272","110","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("39");
            obj.set_text("직장전화번호");
            obj.set_cssclass("sta_WF_DetailTit");
            this.divDetail.addChild(obj.name, obj);

            obj = new MaskEdit("msk00_00","staTitle15_00:9","272","130","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("40");
            obj.set_type("string");
            obj.set_format("###-####-####");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle15_00_00","0","staTitle15:10","110","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("41");
            obj.set_text("집전화번호");
            obj.set_cssclass("sta_WF_DetailTit");
            this.divDetail.addChild(obj.name, obj);

            obj = new MaskEdit("msk00_00_00","120.00","306","130","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("42");
            obj.set_type("string");
            obj.set_format("###-####-####");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle15_00_00_00","0","staTitle15_00_00:10","110","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("43");
            obj.set_text("주민등록번호");
            obj.set_cssclass("sta_WF_DetailTit");
            this.divDetail.addChild(obj.name, obj);

            obj = new MaskEdit("mskREGI_NUMB","120.00","340","130","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("44");
            obj.set_type("string");
            obj.set_format("{######-#######}");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle15_00_00_00_00","536.00","340","110","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("45");
            obj.set_text("결혼여부");
            obj.set_cssclass("sta_WF_DetailTit");
            this.divDetail.addChild(obj.name, obj);

            obj = new Radio("rdo_Married","staTitle15_00_00_00_00:3.00","340","119","24",null,null,null,null,null,null,this.divDetail.form);
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

            obj = new Radio("rdo_ArmyType","114.00","374","119","24",null,null,null,null,null,null,this.divDetail.form);
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

            obj = new Radio("rdo_Birth","calRetrDate:10.00","238","119","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("49");
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

            obj = new Radio("rdo_SexType","256.00","340","103","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("50");
            obj.set_innerdataset("ds_SexType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_direction("vertical");
            obj.set_rowcount("1");
            obj.getSetter("TL_FLAG").set("1");
            obj.set_text("남");
            obj.set_value("m");
            this.divDetail.addChild(obj.name, obj);

            obj = new FileUpload("fud00","50.00","283","80","33",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_itemheight("32");
            obj.set_buttonsize("80");
            obj.set_buttontext("사진등록");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle17_00","0","491","160","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("개인정보활용동의서");
            obj.set_cssclass("sta_POP_GroupTit");
            this.addChild(obj.name, obj);

            obj = new Div("div_Attachment02","staTitle17_00:10.00","494","506","26",null,null,null,null,null,null,this);
            obj.set_taborder("4");
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
            // Layout Functions
            //-- Default Layout : this.divDetail.form.divDept
            obj = new Layout("default","",0,0,this.divDetail.form.divDept.form,function(p){});
            this.divDetail.form.divDept.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form.div_RelatedCompany
            obj = new Layout("default","",0,0,this.divDetail.form.div_RelatedCompany.form,function(p){});
            this.divDetail.form.div_RelatedCompany.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_Attachment02
            obj = new Layout("default","",0,0,this.div_Attachment02.form,function(p){});
            this.div_Attachment02.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1200,530,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divDetail.form.edtUserId","value","dsOutput","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divDetail.form.edtUserNm","value","dsOutput","EMP_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divDetail.form.cboUserFlagCd","value","dsOutput","USER_FLAG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divDetail.form.cboWkgdCd","value","dsOutput","WKGD_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divDetail.form.cboWkdtCd","value","dsOutput","WKDT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divDetail.form.cboOccuCd","value","dsOutput","OCCU_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divDetail.form.edtChagWork","value","dsOutput","CHAG_WORK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divDetail.form.calJoinDate","value","dsOutput","JOIN_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","divDetail.form.calRetrDate","value","dsOutput","RETR_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","divDetail.form.cboHoofStatCd","value","dsOutput","HOOF_STAT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","divDetail.form.calBirDt","value","dsOutput","BIR_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","divDetail.form.cboPhone1","value","dsOutput","PHONE1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","divDetail.form.edtPhone2","value","dsOutput","PHONE2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","divDetail.form.edtPhone3","value","dsOutput","PHONE3");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","divDetail.form.edtEmail","value","dsOutput","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","divDetail.form.jPostAddr.form.edtSculZip","value","dsOutput","ZIP_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","divDetail.form.jPostAddr.form.edtBasAddr","value","dsOutput","BASC_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","divDetail.form.jPostAddr.form.edtDetailAddr","value","dsOutput","DTL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","divDetail.form.divDept.form.edtCode","value","dsOutput","DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","divDetail.form.divDept.form.edtName","value","dsOutput","DEPT_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","divDetail.form.edtUserNmEng","value","dsOutput","ENGL_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divDetail.form.edtEmpNo","value","dsOutput","EMP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divDetail.form.cboThemId","value","dsOutput","THEME_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divDetail.form.msk00","value","dsOutput","CELL_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","img00","image","dsOutput","USER_PIC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","divDetail.form.edtUserId00","value","dsOutput","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","divDetail.form.msk00_00","value","dsOutput","WKPL_TELP_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","divDetail.form.msk00_00_00","value","dsOutput","HUS_TELP_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","divDetail.form.mskREGI_NUMB","value","dsOutput","REGI_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item29","divDetail.form.rdo_Married","value","dsOutput","MARRIAGE_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item30","divDetail.form.rdo_ArmyType","value","dsOutput","MILITARY_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item31","divDetail.form.rdo_Birth","value","dsOutput","BIR_LUNAR_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item32","divDetail.form.rdo_SexType","value","dsOutput","SEX_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item40","divDetail.form.div_RelatedCompany.form.edtCode","value","dsOutput","COMPANY_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item41","divDetail.form.div_RelatedCompany.form.edtName","value","dsOutput","COMPANY_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::cmmDeptSearch.xfdl");
            this._addPreloadList("fdl","sales::comm/COM_Search.xfdl");
            this._addPreloadList("fdl","sales::comm/COM_Attachment.xfdl");
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
        	this.gfnCompDisable(this.div_EmpInfo.form, bRead);
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
        		alert("strSvcID : " + strSvcID + "\n" + "nErrorCode : " + nErrorCode + "\n" + "strErrorMag : " + strErrorMag);
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
        	}
        };

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.comm_Click = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_EmpNoIssuer" :
        			this.fnGetEmpCode();
        			break;
        	}
        };

        this.dsOutput_CO_CD_onchanged = function(obj, e)
        {
        	if(this.arrCompanyExceptList.indexOf(e.newCode) != -1 )
        	{
        		this.fnsetEditReadonly(true); //TOBE직원일 때
        	}
        	else
        	{
        		this.fnsetEditReadonly(false); //TOBE직원이 아닐 때
        	}
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
        this.fnValid = function ()
        {
        	// 정합성 체크
        	this.gfnClearValidation(this.dsOutput);
        	this.gfnSetValidation(this.dsOutput, "COMPANY_CD", "회사명"	, "required");
        	this.gfnSetValidation(this.dsOutput, "EMP_NO", "사번"	, "required");
        	this.gfnSetValidation(this.dsOutput, "USER_ID", "사용자ID"	, "required");
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TS_StaffInfoReg_onload,this);
            this.divDetail.form.edtPassword.addEventHandler("onchanged",this.divDetail_edtPassword_onchanged,this);
            this.divDetail.form.cboUserFlagCd.addEventHandler("onitemchanged",this.cbo_onitemchange,this);
            this.divDetail.form.cboWkgdCd.addEventHandler("onitemchanged",this.cbo_onitemchange,this);
            this.divDetail.form.cboOccuCd.addEventHandler("onitemchanged",this.cbo_onitemchange,this);
            this.divDetail.form.cboWkdtCd.addEventHandler("onitemchanged",this.cbo_onitemchange,this);
            this.divDetail.form.btn_EmpNoIssuer.addEventHandler("onclick",this.comm_Click,this);
            this.fud00.addEventHandler("onitemchanged",this.fud00_onitemchanged,this);
        };
        this.loadIncludeScript("TS_StaffInfoReg.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
