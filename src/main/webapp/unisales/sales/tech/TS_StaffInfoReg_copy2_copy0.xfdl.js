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
                this._setFormPosition(1274,506);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsEmpNo", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_GRADE_CODE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_DUTY_CODE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_LEVEL_CODE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_LAST_SCHOOL_CAREER", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_LICENSE_TYPE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_HOLD_OFFICE", this);
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
            obj = new Static("stc_StaffInfoReg","0","4",null,"190","0",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_detailBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_RegisterNumber","1032","43","75","22",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("주민등록번호");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("2259");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Rank","1032","13","75","22",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("등급");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("92");
            this.addChild(obj.name, obj);

            obj = new Static("stc_HireDate","1032","103","75","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("경력시작일");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("2199");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ResultGrade","1032","163","75","22",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("최종학력");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("2200");
            this.addChild(obj.name, obj);

            obj = new Static("stc_HireDateCount","1032","133","75","22",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("경력일수");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("2201");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ArmyType","1032","73","75","22",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("병역관계");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("2202");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_Rank","stc_Rank:10","13","108","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_CD_LEVEL_CODE");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_HireDate","1117","103","108","22",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_dateformat("yyyy-MM-dd ");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_ResultGrade","1117","163","108","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_CD_LAST_SCHOOL_CAREER");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_ArmyType","1117","73","108","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_ArmyType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_direction("vertical");
            obj.set_rowcount("1");
            obj.getSetter("TL_FLAG").set("1");
            obj.set_text("미필");
            obj.set_value("0");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_RegisterNumber","1117","43","116","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_type("string");
            obj.set_format("######-#######");
            obj.set_textAlign("left");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_HireDateCount","1117","133","108","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Div("div_Attachment01",null,null,"506","26","0","0",null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_async("false");
            obj.getSetter("SOURCE_CD").set("EI");
            obj.getSetter("SOURCE_SEQ").set("EMP_NO");
            obj.getSetter("USE_NEXT_FILE_TYPE").set("false");
            obj.getSetter("USE_LINK_TYPE").set("false");
            obj.getSetter("USE_MULTI_FILE").set("false");
            obj.getSetter("USE_OPEN_ADD_DIALOG").set("false");
            obj.getSetter("USE_DELETE_ALL").set("false");
            obj.getSetter("USE_BUTTON_ONLY").set("false");
            obj.getSetter("BINDDATASET").set("dsOutput");
            obj.set_url("Common::COM_Attachment.xfdl");
            obj.set_text("");
            obj.getSetter("STATUS_CD").set("CERTIFICATE");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("stc_GBAttachment00",null,null,"506","29","0","24",null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_cssclass("sta_POP_GroupBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Attachment00",null,null,"166","16","331","31",null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("소프트웨어 기술자 자격증");
            obj.set_visible("true");
            obj.set_cssclass("sta_POP_GroupTit");
            obj.getSetter("TL_SEQ").set("2203");
            this.addChild(obj.name, obj);

            obj = new Div("div_Attachment00",null,null,"506","26","0","56",null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_async("false");
            obj.getSetter("SOURCE_CD").set("EI");
            obj.getSetter("SOURCE_SEQ").set("EMP_NO");
            obj.getSetter("USE_NEXT_FILE_TYPE").set("false");
            obj.getSetter("USE_LINK_TYPE").set("false");
            obj.getSetter("USE_MULTI_FILE").set("false");
            obj.getSetter("USE_OPEN_ADD_DIALOG").set("false");
            obj.getSetter("USE_DELETE_ALL").set("false");
            obj.getSetter("USE_BUTTON_ONLY").set("false");
            obj.getSetter("STATUS_CD").set("GRADUATION");
            obj.getSetter("BINDDATASET").set("dsOutput");
            obj.set_url("Common::COM_Attachment.xfdl");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("stc_GBAttachment",null,null,"506","29","0","81",null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("sta_POP_GroupBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Attachment",null,null,"94","16","403","89",null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("졸업증명서");
            obj.set_visible("true");
            obj.set_cssclass("sta_POP_GroupTit");
            obj.getSetter("TL_SEQ").set("2204");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_CertificateInfo",null,"231","506",null,"0","170",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_binddataset("dsOutput8");
            obj.getSetter("scrollbars").set("alwaysvert");
            obj.set_autoenter("select");
            obj.getSetter("useinputpanel").set("false");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_visible("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"113\"/><Column size=\"113\"/><Column size=\"192\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"취득년월\" TL_SEQ=\"2205\"/><Cell col=\"1\" text=\"종류\" TL_SEQ=\"728\"/><Cell col=\"2\" text=\"발행처\" TL_SEQ=\"2206\"/><Cell col=\"3\" colspan=\"2\" text=\"파일\" TL_SEQ=\"718\"/></Band><Band id=\"body\"><Cell text=\"bind:LICENSE_DATE\" maskedittype=\"string\" maskeditformat=\"####-##-##\" displaytype=\"date\" edittype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"1\" text=\"bind:LICENSE_CODE\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_CD_LICENSE_TYPE\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/><Cell col=\"2\" text=\"bind:LICENSE_CODE\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"ds_CD_LICENSE_TYPE\" combocodecol=\"CODE\" combodatacol=\"VAL1\"/><Cell col=\"3\" text=\"bind:FILE_NAME\" cursor=\"pointer\"/><Cell col=\"4\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"등록\" TL_SEQ=\"585\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_GbCertificateInfo",null,"198","506","32","0",null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_POP_GroupBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_CertificateInfo",null,"206","94","16","398",null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_text("자격사항");
            obj.set_visible("true");
            obj.set_cssclass("sta_POP_GroupTit");
            obj.getSetter("TL_SEQ").set("2207");
            this.addChild(obj.name, obj);

            obj = new Div("div_EmpInfo","144","9","888","177",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div01");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_Married","773","64","108","22",null,null,null,null,null,null,this.div_EmpInfo.form);
            obj.set_taborder("12");
            obj.set_innerdataset("ds_Married");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_direction("vertical");
            obj.set_readonly("false");
            obj.set_rowcount("1");
            obj.getSetter("TL_FLAG").set("1");
            obj.set_text("미혼");
            obj.set_value("0");
            this.div_EmpInfo.addChild(obj.name, obj);

            obj = new Static("stc_Married","711","64","48","22",null,null,null,null,null,null,this.div_EmpInfo.form);
            obj.set_taborder("20");
            obj.set_text("결혼여부");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("2208");
            this.div_EmpInfo.addChild(obj.name, obj);

            obj = new Edit("edt_EmpNo","91","34","130","22",null,null,null,null,null,null,this.div_EmpInfo.form);
            obj.set_taborder("4");
            obj.set_readonly("false");
            obj.set_text("수정불가");
            this.div_EmpInfo.addChild(obj.name, obj);

            obj = new Static("stc_EmpNo","36","34","47","22",null,null,null,null,null,null,this.div_EmpInfo.form);
            obj.set_taborder("21");
            obj.set_text("사번");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("2192");
            this.div_EmpInfo.addChild(obj.name, obj);

            obj = new Edit("edt_PostNo","91","94","109","22",null,null,null,null,null,null,this.div_EmpInfo.form);
            obj.set_taborder("15");
            obj.set_readonly("false");
            obj.set_text("수정불가");
            this.div_EmpInfo.addChild(obj.name, obj);

            obj = new Static("stc_PostNo","35","94","48","22",null,null,null,null,null,null,this.div_EmpInfo.form);
            obj.set_taborder("22");
            obj.set_text("우편번호");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("838");
            this.div_EmpInfo.addChild(obj.name, obj);

            obj = new Static("stc_DayOfEmployment","321","34","83","22",null,null,null,null,null,null,this.div_EmpInfo.form);
            obj.set_taborder("23");
            obj.set_text("입사일자");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("2209");
            this.div_EmpInfo.addChild(obj.name, obj);

            obj = new Calendar("cal_DayOfEmployment","411","34","108","22",null,null,null,null,null,null,this.div_EmpInfo.form);
            obj.set_taborder("5");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_readonly("false");
            this.div_EmpInfo.addChild(obj.name, obj);

            obj = new Static("stc_RetirementDate","537","34","50","22",null,null,null,null,null,null,this.div_EmpInfo.form);
            obj.set_taborder("24");
            obj.set_text("퇴사일자");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("2210");
            this.div_EmpInfo.addChild(obj.name, obj);

            obj = new Calendar("cal_RetirementDate","595","34","108","22",null,null,null,null,null,null,this.div_EmpInfo.form);
            obj.set_taborder("6");
            obj.set_dateformat("yyyy-MM-dd ");
            obj.set_readonly("false");
            this.div_EmpInfo.addChild(obj.name, obj);

            obj = new Static("stc_RetirementConfirm","711","34","48","22",null,null,null,null,null,null,this.div_EmpInfo.form);
            obj.set_taborder("25");
            obj.set_text("퇴사여부");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("2211");
            this.div_EmpInfo.addChild(obj.name, obj);

            obj = new Radio("rdo_RetirementConfirm","773","34","108","22",null,null,null,null,null,null,this.div_EmpInfo.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_CD_HOLD_OFFICE");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_direction("vertical");
            obj.set_readonly("false");
            obj.set_rowcount("1");
            this.div_EmpInfo.addChild(obj.name, obj);

            obj = new Edit("edt_Email","411","154","186","22",null,null,null,null,null,null,this.div_EmpInfo.form);
            obj.set_taborder("19");
            obj.set_readonly("false");
            obj.set_text("수정불가");
            this.div_EmpInfo.addChild(obj.name, obj);

            obj = new Static("stc_Email","356","154","48","22",null,null,null,null,null,null,this.div_EmpInfo.form);
            obj.set_taborder("26");
            obj.set_text("이메일");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("80");
            this.div_EmpInfo.addChild(obj.name, obj);

            obj = new Edit("edt_Address2","600","94","282","22",null,null,null,null,null,null,this.div_EmpInfo.form);
            obj.set_taborder("14");
            obj.set_readonly("false");
            obj.set_text("수정불가");
            this.div_EmpInfo.addChild(obj.name, obj);

            obj = new Edit("edt_Address","279","94","317","22",null,null,null,null,null,null,this.div_EmpInfo.form);
            obj.set_taborder("13");
            obj.set_readonly("false");
            obj.set_text("수정불가");
            this.div_EmpInfo.addChild(obj.name, obj);

            obj = new Static("stc_Address","208","94","59","22",null,null,null,null,null,null,this.div_EmpInfo.form);
            obj.set_taborder("27");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("851");
            this.div_EmpInfo.addChild(obj.name, obj);

            obj = new Static("stc_HTel","0","124","83","22",null,null,null,null,null,null,this.div_EmpInfo.form);
            obj.set_taborder("28");
            obj.set_text("전화번호(집)");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("2212");
            this.div_EmpInfo.addChild(obj.name, obj);

            obj = new Edit("edt_HTel","91","124","130","22",null,null,null,null,null,null,this.div_EmpInfo.form);
            obj.set_taborder("16");
            obj.set_readonly("false");
            obj.set_text("수정불가");
            this.div_EmpInfo.addChild(obj.name, obj);

            obj = new Static("stc_OTel","311","124","93","22",null,null,null,null,null,null,this.div_EmpInfo.form);
            obj.set_taborder("29");
            obj.set_text("전화번호(사무실)");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("2213");
            this.div_EmpInfo.addChild(obj.name, obj);

            obj = new Edit("edt_OTel","411","124","130","22",null,null,null,null,null,null,this.div_EmpInfo.form);
            obj.set_taborder("17");
            obj.set_readonly("false");
            obj.set_text("수정불가");
            this.div_EmpInfo.addChild(obj.name, obj);

            obj = new Static("stc_CPhone","35","154","48","22",null,null,null,null,null,null,this.div_EmpInfo.form);
            obj.set_taborder("30");
            obj.set_text("핸드폰");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("76");
            this.div_EmpInfo.addChild(obj.name, obj);

            obj = new Edit("edt_CPhone","91","154","130","22",null,null,null,null,null,null,this.div_EmpInfo.form);
            obj.set_taborder("18");
            obj.set_readonly("false");
            obj.set_text("수정불가");
            this.div_EmpInfo.addChild(obj.name, obj);

            obj = new Radio("rdo_Birth","532","64","100","22",null,null,null,null,null,null,this.div_EmpInfo.form);
            obj.set_taborder("11");
            obj.set_innerdataset("ds_Birth");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_direction("vertical");
            obj.set_readonly("false");
            obj.set_rowcount("1");
            obj.getSetter("TL_FLAG").set("1");
            obj.set_text("양력");
            obj.set_value("0");
            this.div_EmpInfo.addChild(obj.name, obj);

            obj = new Calendar("cal_Birth","411","64","108","22",null,null,null,null,null,null,this.div_EmpInfo.form);
            obj.set_taborder("10");
            obj.set_readonly("false");
            obj.set_dateformat("yyyy-MM-dd");
            this.div_EmpInfo.addChild(obj.name, obj);

            obj = new Static("stc_Bitrh","347","64","57","22",null,null,null,null,null,null,this.div_EmpInfo.form);
            obj.set_taborder("31");
            obj.set_text("생년월일");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("2215");
            this.div_EmpInfo.addChild(obj.name, obj);

            obj = new Radio("rdo_SexType","236","64","100","22",null,null,null,null,null,null,this.div_EmpInfo.form);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_SexType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_direction("vertical");
            obj.set_rowcount("1");
            obj.getSetter("TL_FLAG").set("1");
            obj.set_text("남");
            obj.set_value("m");
            this.div_EmpInfo.addChild(obj.name, obj);

            obj = new Edit("edt_EmpName","91","64","130","22",null,null,null,null,null,null,this.div_EmpInfo.form);
            obj.set_taborder("8");
            obj.set_readonly("false");
            obj.set_text("수정불가");
            this.div_EmpInfo.addChild(obj.name, obj);

            obj = new Static("stc_EmployeeName","0","64","83","22",null,null,null,null,null,null,this.div_EmpInfo.form);
            obj.set_taborder("32");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("27");
            this.div_EmpInfo.addChild(obj.name, obj);

            obj = new Static("stc_CompanyName","0","4","83","22",null,null,null,null,null,null,this.div_EmpInfo.form);
            obj.set_taborder("33");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("148");
            this.div_EmpInfo.addChild(obj.name, obj);

            obj = new Div("div_RelatedCompany","stc_CompanyName:8","4","245","22",null,null,null,null,null,null,this.div_EmpInfo.form);
            obj.set_taborder("0");
            obj.set_url("Common::COM_Search.xfdl");
            obj.getSetter("binddataset").set("dsOutput");
            obj.getSetter("kind").set("COMPANY");
            obj.set_async("false");
            obj.getSetter("codecolumn").set("CO_CD");
            obj.getSetter("datacolumn").set("CO_NAME");
            obj.getSetter("mode").set("");
            obj.getSetter("user_onchanged").set("dsOutput_CO_CD_onchanged");
            obj.set_text("");
            obj.getSetter("param").set("2");
            this.div_EmpInfo.addChild(obj.name, obj);

            obj = new Static("stc_DeptNM","div_RelatedCompany:10","4","58","22",null,null,null,null,null,null,this.div_EmpInfo.form);
            obj.set_taborder("34");
            obj.set_text("부서명");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("25");
            this.div_EmpInfo.addChild(obj.name, obj);

            obj = new Edit("edt_DeptNM","stc_DeptNM:7","4","130","22",null,null,null,null,null,null,this.div_EmpInfo.form);
            obj.set_taborder("1");
            obj.set_readonly("false");
            obj.set_text("수정불가");
            this.div_EmpInfo.addChild(obj.name, obj);

            obj = new Static("stc_Grade","edt_DeptNM:10","4","36","22",null,null,null,null,null,null,this.div_EmpInfo.form);
            obj.set_taborder("35");
            obj.set_text("직급");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("26");
            this.div_EmpInfo.addChild(obj.name, obj);

            obj = new Combo("cmb_Grade","stc_Grade:8","4","108","22",null,null,null,null,null,null,this.div_EmpInfo.form);
            obj.set_taborder("2");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_innerdataset("ds_CD_GRADE_CODE");
            obj.set_text("");
            this.div_EmpInfo.addChild(obj.name, obj);

            obj = new Static("stc_Duty","cmb_Grade:8","4","48","22",null,null,null,null,null,null,this.div_EmpInfo.form);
            obj.set_taborder("36");
            obj.set_text("직책");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("382");
            this.div_EmpInfo.addChild(obj.name, obj);

            obj = new Combo("cmb_Duty","stc_Duty:14","4","108","22",null,null,null,null,null,null,this.div_EmpInfo.form);
            obj.set_taborder("3");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_innerdataset("ds_CD_DUTY_CODE");
            obj.set_text("");
            this.div_EmpInfo.addChild(obj.name, obj);

            obj = new Button("btn_PostalNumber","199","94","22","22",null,null,null,null,null,null,this.div_EmpInfo.form);
            obj.set_taborder("37");
            obj.set_cssclass("btn_WF_Sch");
            this.div_EmpInfo.addChild(obj.name, obj);

            obj = new Button("btn_EmpNoIssuer","225","34","56","22",null,null,null,null,null,null,this.div_EmpInfo.form);
            obj.set_taborder("38");
            obj.set_text("사번발급");
            obj.set_visible("false");
            this.div_EmpInfo.addChild(obj.name, obj);

            obj = new Button("btn_CertificateMinus",null,"206","16","16","9",null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("btn_POP_Del");
            this.addChild(obj.name, obj);

            obj = new Button("btn_CertificatePlus",null,"206","16","16","33",null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("btn_POP_Add");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img_ImageReg","9","12","120","160",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("");
            obj.set_stretch("fit");
            obj.set_border("1px ridge");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ImageReg","34","172","70","22",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("사진등록");
            obj.set_enable("false");
            obj.getSetter("TL_SEQ").set("2220");
            this.addChild(obj.name, obj);

            obj = new Static("stc_GbEducationInfo","0","198",null,"32","510",null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("sta_POP_GroupBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_EducationInfo","12","206","134","16",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("학력사항");
            obj.set_visible("true");
            obj.set_cssclass("sta_POP_GroupTit");
            obj.getSetter("TL_SEQ").set("2221");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_EducationInfo","0","231",null,"106","510",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("dsOutput2");
            obj.getSetter("scrollbars").set("alwaysvert");
            obj.set_autoenter("select");
            obj.getSetter("useinputpanel").set("false");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_visible("true");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"20\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"200\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"3\" text=\"기간\" displaytype=\"text\" edittype=\"text\" TL_SEQ=\"28\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" text=\"학교명\" TL_SEQ=\"2222\"/><Cell col=\"4\" text=\"과명\" TL_SEQ=\"2223\"/><Cell col=\"5\" text=\"졸업,수료\" TL_SEQ=\"2224\"/><Cell col=\"6\" text=\"소재지\" TL_SEQ=\"2225\"/></Band><Band id=\"body\"><Cell edittype=\"date\" editautoselect=\"true\" text=\"bind:START_DATE\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"####-##-##\"/><Cell col=\"1\" text=\"~\"/><Cell col=\"2\" text=\"bind:END_DATE\" displaytype=\"mask\" edittype=\"date\" maskedittype=\"string\" maskeditformat=\"####-##-##\"/><Cell col=\"3\" edittype=\"text\" editautoselect=\"true\" editdisplay=\"edit\" text=\"bind:SCHOOL_NAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:SUBJECT_NAME\" edittype=\"text\" textAlign=\"left\"/><Cell col=\"5\" text=\"bind:GRADUATE_FLAG\" displaytype=\"combotext\" combodataset=\"ds_CD_GRADUATION_FLAG\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" edittype=\"combo\" TL_FLAG=\"1\"/><Cell col=\"6\" text=\"bind:PLACE_NAME\" edittype=\"text\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_EducationPlus",null,"206","16","16","543",null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("btn_POP_Add");
            this.addChild(obj.name, obj);

            obj = new Button("btn_EducationMinus",null,"206","16","16","519",null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_cssclass("btn_POP_Del");
            this.addChild(obj.name, obj);

            obj = new Static("stc_GbCareerInfo","0","341",null,"32","510",null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_cssclass("sta_POP_GroupBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_CareerInfo","12","349","118","16",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_text("경력사항");
            obj.set_visible("true");
            obj.set_cssclass("sta_POP_GroupTit");
            obj.getSetter("TL_SEQ").set("2226");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_CareerInfo","0","374",null,null,"510","0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("dsOutput3");
            obj.getSetter("scrollbars").set("alwaysvert");
            obj.set_autoenter("select");
            obj.getSetter("useinputpanel").set("false");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.set_visible("true");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"20\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"200\"/></Columns><Rows><Row size=\"25\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell colspan=\"3\" text=\"재직기간\" displaytype=\"text\" edittype=\"text\" TL_SEQ=\"2227\"/><Cell col=\"3\" displaytype=\"text\" edittype=\"text\" text=\"재직회사\" TL_SEQ=\"2228\"/><Cell col=\"4\" text=\"직위\" TL_SEQ=\"2229\"/><Cell col=\"5\" text=\"담당업무\" TL_SEQ=\"2230\"/></Band><Band id=\"body\"><Cell edittype=\"date\" editautoselect=\"true\" text=\"bind:START_DATE\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"####-##-##\"/><Cell col=\"1\" text=\"~\"/><Cell col=\"2\" text=\"bind:END_DATE\" edittype=\"date\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"####-##-##\"/><Cell col=\"3\" edittype=\"text\" editautoselect=\"true\" editdisplay=\"edit\" text=\"bind:COMPANY_NAME\" textAlign=\"left\"/><Cell col=\"4\" text=\"bind:GRADE_NAME\" edittype=\"text\"/><Cell col=\"5\" text=\"bind:WORK_PART\" edittype=\"text\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_CareerMinus",null,"349","16","16","519",null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_cssclass("btn_POP_Del");
            this.addChild(obj.name, obj);

            obj = new Button("btn_CareerPlus",null,"349","16","16","543",null,null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_cssclass("btn_POP_Add");
            this.addChild(obj.name, obj);

            obj = new WebBrowser("wb_PostalSearch","8","623","72","71",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_Attachment02",null,null,"506","26","0","113",null,null,null,null,this);
            obj.set_taborder("38");
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
            obj.set_url("Common::COM_Attachment.xfdl");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("stc_GBAttachment01",null,null,"506","29","0","138",null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_cssclass("sta_POP_GroupBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Attachment01",null,null,"134","16","363","146",null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_text("개인정보활용동의서");
            obj.set_visible("true");
            obj.set_cssclass("sta_POP_GroupTit");
            obj.getSetter("TL_SEQ").set("2231");
            this.addChild(obj.name, obj);

            obj = new Static("stc_EmployeeName_Eng","804","135","83","22",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_text("성명(영어)");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("2264");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_EmpName_Eng","895","135","130","22",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_readonly("false");
            obj.set_text("수정불가");
            this.addChild(obj.name, obj);

            obj = new Static("stc_EmployeeName_Jap","804","163","83","22",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_text("성명(일본어)");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("2265");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_EmpName_Jap","895","163","130","22",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_readonly("false");
            obj.set_text("수정불가");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_Attachment01
            obj = new Layout("default","",0,0,this.div_Attachment01.form,function(p){});
            this.div_Attachment01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_Attachment00
            obj = new Layout("default","",0,0,this.div_Attachment00.form,function(p){});
            this.div_Attachment00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_EmpInfo.form.div_RelatedCompany
            obj = new Layout("default","",0,0,this.div_EmpInfo.form.div_RelatedCompany.form,function(p){});
            this.div_EmpInfo.form.div_RelatedCompany.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_EmpInfo.form
            obj = new Layout("default","",0,0,this.div_EmpInfo.form,function(p){});
            this.div_EmpInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_Attachment02
            obj = new Layout("default","",0,0,this.div_Attachment02.form,function(p){});
            this.div_Attachment02.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1274,506,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item13","medt_RegisterNumber","value","dsOutput","REGISTER_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item18","cmb_Rank","value","dsOutput","LEVEL_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item19","cmb_ResultGrade","value","dsOutput","LAST_SCHOOL_CAREER");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","rdo_ArmyType","value","dsOutput","MILITARY_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item20","cal_HireDate","value","dsOutput","CAREER_START_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item26","edt_HireDateCount","value","dsOutput","CAREER_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","div_EmpInfo.form.rdo_Married","value","dsOutput","MARRY_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_EmpInfo.form.edt_EmpNo","value","dsOutput","EMP_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_EmpInfo.form.edt_PostNo","value","dsOutput","POST_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_EmpInfo.form.cal_DayOfEmployment","value","dsOutput","ENTER_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_EmpInfo.form.cal_RetirementDate","value","dsOutput","FIRE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_EmpInfo.form.rdo_RetirementConfirm","value","dsOutput","HOLD_OFFICE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_EmpInfo.form.edt_Email","value","dsOutput","EMAIL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_EmpInfo.form.edt_Address2","value","dsOutput","DETAIL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_EmpInfo.form.edt_Address","value","dsOutput","POST_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","edt_Address2","value","dsOutput","DETAIL_ADDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_EmpInfo.form.edt_HTel","value","dsOutput","HOME_TEL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_EmpInfo.form.edt_OTel","value","dsOutput","OFFICE_TEL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_EmpInfo.form.edt_CPhone","value","dsOutput","HP_TEL_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item14","div_EmpInfo.form.rdo_Birth","value","dsOutput","LUNAR_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item15","div_EmpInfo.form.cal_Birth","value","dsOutput","BIRTHDAY");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item16","div_EmpInfo.form.rdo_SexType","value","dsOutput","SEX");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","div_EmpInfo.form.edt_EmpName","value","dsOutput","EMP_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","div_EmpInfo.form.edt_DeptNM","value","dsOutput","DEPT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item24","div_EmpInfo.form.cmb_Grade","value","dsOutput","GRADE_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item25","div_EmpInfo.form.cmb_Duty","value","dsOutput","DUTY_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","img_ImageReg","image","dsOutput","EMP_PHOTO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item27","edt_EmpName_Eng","value","dsOutput9","USER_NM_EN");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item28","edt_EmpName_Jap","value","dsOutput9","USER_NM_JP");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Common::COM_Attachment.xfdl");
            this._addPreloadList("fdl","Common::COM_Search.xfdl");
        };
        
        // User Script
        this.addIncludeScript("TS_StaffInfoReg_copy2_copy0.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("TS_StaffInfoReg_copy2_copy0.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("TS_StaffInfoReg_copy2_copy0.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("TS_StaffInfoReg_copy2_copy0.xfdl","Script::CommGrid.xjs");
        this.registerScript("TS_StaffInfoReg_copy2_copy0.xfdl", function() {
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
        this.TS_StaffInfoReg_onload = function(obj,e)
        {
        	this.gfnCompInit(obj); //헤더클릭 이벤트 없을 시 사용
        	this.fnGetCode();
        };

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.fnGetCode = function()
        {
        	this.gfnAddCodeDataset("ds_CD_GRADE_CODE"			,"CM0002");
        	this.gfnAddCodeDataset("ds_CD_DUTY_CODE"			,"CM0003");
        	this.gfnAddCodeDataset("ds_CD_HOLD_OFFICE"			,"CM0009");
        	this.gfnAddCodeDataset("ds_CD_LEVEL_CODE" 			,"LEVEL_CODE");
        	this.gfnAddCodeDataset("ds_CD_LAST_SCHOOL_CAREER"	,"LAST_SCHOOL_CAREER");
        	this.gfnAddCodeDataset("ds_CD_LICENSE_TYPE" 		,"FILE_EL");

        	// 공통코드 조회
        	this.gfnCodeTransaction();
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
        	var dsOutput = this._getDatasetObject("dsOutput"); //parent의 Dataset에 접근하기 위해 사용한다.

        	this.gfnAddSendParameter("CO_CD", dsOutput.getColumn(0, "CO_CD"));

        	this.gfnAddOutputDataset("dsEmpNo", "dsNewEmpNo");
        	this.gfnCommonTransaction("fnGetEmpCode", "TS_StaffInfoSearch_S04");
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
        			var dsOutput = this._getDatasetObject("dsOutput");
        			var form = dsOutput.parent;
        			form.fnSearchSub("SubSelect_Copy", this.dsEmpNo.getColumn(0, "EMP_NO")); //재조회 작업
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
        		case "btn_EducationPlus" :
        			var ds = this.grd_EducationInfo.getBindDataset();
        			var nRow = ds.addRow();
        			ds.setColumn(nRow, "EMP_NO", this.div_EmpInfo.form.edt_EmpNo.value);
        			ds.setColumn(nRow, "GRADUATE_FLAG", "1");
        			break;
        		case "btn_EducationMinus" :
        			var ds = this.grd_EducationInfo.getBindDataset();
        			ds.deleteRow(ds.rowposition);
        			break;
        		case "btn_CertificatePlus" :
        			var ds = this.grd_CertificateInfo.getBindDataset();
        			ds.setColumn(ds.addRow(), "EMP_NO", this.div_EmpInfo.form.edt_EmpNo.value);
        			break;
        		case "btn_CertificateMinus" :
        			var ds = this.grd_CertificateInfo.getBindDataset();
        			ds.deleteRow(ds.rowposition);
        			break;
        		case "btn_CareerPlus" :
        			var ds = this.grd_CareerInfo.getBindDataset();
        			ds.setColumn(ds.addRow(), "EMP_NO", this.div_EmpInfo.form.edt_EmpNo.value);
        			break;
        		case "btn_CareerMinus" :
        			var ds = this.grd_CareerInfo.getBindDataset();
        			ds.deleteRow(ds.rowposition);
        			break;
        		case "btn_EmpNoIssuer" :
        			this.fnGetEmpCode();
        			break;
        		case "btn_PostalNumber" :
        			var objEnv = nexacro.getEnvironment();
        			var svc = objEnv.services["ServiceURL"];
        			this.wb_PostalSearch.set_url(svc.url+"/Service/zip.html");
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

        this.grd_CertificateInfo_oncellclick = function(obj,e)
        {
        	if(obj.getCellProperty("body",e.cell,"displaytype")=="buttoncontrol")
        	{
        		var ds 	= obj.getBindDataset();
        		var sStatusCd	= ds.getColumn( obj.getDatasetRow(e.row), "LICENSE_CODE");
        		var sEmpNo		= ds.getColumn( obj.getDatasetRow(e.row), "EMP_NO" 		);
        		var nFindrow 	= ds.findRow("LICENSE_CODE", sStatusCd);

        		if(this.gfnIsEmpty(sStatusCd))
        		{
        			alert(this.gfnGetTransTxt(1581,"자격증종류를 선택하여야 합니다."));
        			return;
        		}
        		else if(nFindrow>=0 && nFindrow!=e.row)
        		{
        			alert(this.gfnGetTransTxt(1582,"동일한 자격증종류가 존재합니다."));
        			return;
        		}
        		else if(!this.gfnIsEmpty(sEmpNo))
        		{
        			var args = {
        							SOURCE_CD:"EL"
        							,SOURCE_SEQ:sEmpNo
        							,STATUS_CD:sStatusCd
        							,USE_MULTI_FILE:false
        						}
        			this.commUtil.popupFileMaster(this, args, "fnPopupCallBack");
        		}
        	}
        };

        this.grd_CertificateInfo_oncelldblclick = function(obj,e)
        {
        	if(obj.getBindCellIndex("body", "FILE_NAME") == e.cell)
        	{
        		var ds 	= obj.getBindDataset();
        		var sFMSEQ = ds.getColumn(obj.getDatasetRow(e.row), "FM_SEQ");
        		if(!this.gfnIsEmpty(sFMSEQ))
        			this.gfnFileDownload(sFMSEQ);
        	}
        };

        this.btn_ImageReg_onclick = function(obj,e)
        {
        	var dsOutput = this._getDatasetObject("dsOutput");
        	var strEMP_NO = dsOutput.getColumn(0, "EMP_NO")
        	var args = {
        					SOURCE_CD:"EI"
        				   ,SOURCE_SEQ:strEMP_NO
        				   ,STATUS_CD:"EMP_PHOTO"
        				   ,USE_MULTI_FILE:false
        			   }
        	this.commUtil.popupFileMaster(this, args, "fnPopupCallBack");
        };

        this.wb_PostalSearch_onloadcompleted = function(obj,e)
        {
        	this.wb_PostalSearch.callMethod("sample4_execDaumPostcode", "");
        };

        this.wb_PostalSearch_onusernotify = function(obj,e)
        {
        	var strRtn = e.userdata
        	if(!this.gfnIsEmpty(strRtn))
        	{
        		//초기화
        		this.div_EmpInfo.form.edt_Address2.set_value("");
        		//값지정
        		this.div_EmpInfo.form.edt_PostNo.set_value(strRtn[0]);
        		this.div_EmpInfo.form.edt_Address.set_value(strRtn[1]);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TS_StaffInfoReg_onload,this);
            this.grd_CertificateInfo.addEventHandler("oncellclick",this.grd_CertificateInfo_oncellclick,this);
            this.grd_CertificateInfo.addEventHandler("oncelldblclick",this.grd_CertificateInfo_oncelldblclick,this);
            this.div_EmpInfo.form.edt_EmpNo.addEventHandler("onkeydown",this.div_ClientList_edt_ClientName_onkeydown,this);
            this.div_EmpInfo.form.edt_PostNo.addEventHandler("onkeydown",this.div_ClientList_edt_ClientName_onkeydown,this);
            this.div_EmpInfo.form.edt_Email.addEventHandler("onkeydown",this.div_ClientList_edt_ClientName_onkeydown,this);
            this.div_EmpInfo.form.edt_Address2.addEventHandler("onkeydown",this.div_ClientList_edt_ClientName_onkeydown,this);
            this.div_EmpInfo.form.edt_Address.addEventHandler("onkeydown",this.div_ClientList_edt_ClientName_onkeydown,this);
            this.div_EmpInfo.form.edt_HTel.addEventHandler("onkeydown",this.div_ClientList_edt_ClientName_onkeydown,this);
            this.div_EmpInfo.form.edt_OTel.addEventHandler("onkeydown",this.div_ClientList_edt_ClientName_onkeydown,this);
            this.div_EmpInfo.form.edt_CPhone.addEventHandler("onkeydown",this.div_ClientList_edt_ClientName_onkeydown,this);
            this.div_EmpInfo.form.edt_EmpName.addEventHandler("onkeydown",this.div_ClientList_edt_ClientName_onkeydown,this);
            this.div_EmpInfo.form.edt_DeptNM.addEventHandler("onkeydown",this.div_ClientList_edt_ClientName_onkeydown,this);
            this.div_EmpInfo.form.edt_DeptNM.addEventHandler("onchanged",this.edt_DeptNM_onchanged,this);
            this.div_EmpInfo.form.btn_PostalNumber.addEventHandler("onclick",this.comm_Click,this);
            this.div_EmpInfo.form.btn_EmpNoIssuer.addEventHandler("onclick",this.comm_Click,this);
            this.btn_CertificateMinus.addEventHandler("onclick",this.comm_Click,this);
            this.btn_CertificatePlus.addEventHandler("onclick",this.comm_Click,this);
            this.btn_ImageReg.addEventHandler("onclick",this.btn_ImageReg_onclick,this);
            this.btn_EducationPlus.addEventHandler("onclick",this.comm_Click,this);
            this.btn_EducationMinus.addEventHandler("onclick",this.comm_Click,this);
            this.btn_CareerMinus.addEventHandler("onclick",this.comm_Click,this);
            this.btn_CareerPlus.addEventHandler("onclick",this.comm_Click,this);
            this.wb_PostalSearch.addEventHandler("onloadcompleted",this.wb_PostalSearch_onloadcompleted,this);
            this.wb_PostalSearch.addEventHandler("onusernotify",this.wb_PostalSearch_onusernotify,this);
        };
        this.loadIncludeScript("TS_StaffInfoReg_copy2_copy0.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
