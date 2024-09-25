(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CE_CompanySearch");
            this.set_titletext("회사검색");
            this.set_cssclass("frm_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(830,712);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOutput", this);
            obj._setContents("<ColumnInfo><Column id=\"BLACKLIST_FLAG\" type=\"string\" size=\"32\"/><Column id=\"PURCHASE_REMARKS\" type=\"undefined\" size=\"0\"/><Column id=\"COMPANY_NAME_ENG\" type=\"undefined\" size=\"0\"/><Column id=\"CONTRACT_REMARKS\" type=\"undefined\" size=\"0\"/><Column id=\"REMARKS\" type=\"undefined\" size=\"0\"/><Column id=\"PHONE_NO\" type=\"undefined\" size=\"0\"/><Column id=\"SUBSIDIARY_COMPANY_FLAG\" type=\"undefined\" size=\"0\"/><Column id=\"CORPORATE_REG_NO\" type=\"undefined\" size=\"0\"/><Column id=\"COMPANY_NAME\" type=\"string\" size=\"32\"/><Column id=\"TURNKEY_FLAG\" type=\"string\" size=\"32\"/><Column id=\"CLIENT_FLAG\" type=\"string\" size=\"32\"/><Column id=\"TMP_FLAG\" type=\"string\" size=\"32\"/><Column id=\"COMPANY_FLAG\" type=\"string\" size=\"32\"/><Column id=\"COMPANY_CODE\" type=\"string\" size=\"32\"/><Column id=\"COMPANY_STATE\" type=\"undefined\" size=\"0\"/><Column id=\"COMPANY_REG_NO\" type=\"undefined\" size=\"0\"/><Column id=\"SI_VIEW_FLAG\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_PARTNER_KIND", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_COMPANY_STATE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_CL_ADD_SCORE1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_CL_ADD_SCORE2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_CL_ADD_SCORE3", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_CL_EXCEPTION_CODE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_SEARCH", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"string\" size=\"30\"/><Column id=\"CAPTION\" type=\"string\" size=\"255\"/><Column id=\"CAPTION_JAP\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION_ENG\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"string\" size=\"100\"/><Column id=\"VAL2\" type=\"string\" size=\"100\"/><Column id=\"VAL3\" type=\"string\" size=\"100\"/><Column id=\"VAL4\" type=\"string\" size=\"100\"/><Column id=\"REMARK\" type=\"string\" size=\"1073741823\"/><Column id=\"ORD\" type=\"string\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"CAPTION\">고객사검색</Col><Col id=\"CAPTION_JAP\">顧客社検索</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"CAPTION\">협력사검색</Col><Col id=\"CAPTION_JAP\">パートナー社検索</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_search","20","20",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Name","0","12","83","24",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.getSetter("TL_SEQ").set("32");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_Name","stc_Name:0.00","12",null,"24","370",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_Search",null,"10","60","28","8",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            obj.getSetter("TL_SEQ").set("118");
            this.div_search.addChild(obj.name, obj);

            obj = new Grid("grd_CompanySerachList","20.00","div_search:10",null,null,"20","278",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsOutput");
            obj.set_autofittype("col");
            obj.set_formatid("default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"175\"/><Column size=\"486\"/><Column size=\"126\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"회사코드\" TL_SEQ=\"147\"/><Cell col=\"1\" text=\"회사명\" TL_SEQ=\"148\"/><Cell col=\"2\" text=\"회사상태\" TL_SEQ=\"149\"/></Band><Band id=\"body\"><Cell text=\"bind:COMPANY_CODE\"/><Cell col=\"1\" text=\"bind:COMPANY_NAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:COMPANY_STATE\" displaytype=\"combotext\" combodataset=\"ds_CD_COMPANY_STATE\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/></Band></Format><Format id=\"mobile\"><Columns><Column size=\"100\"/><Column size=\"200\"/><Column size=\"100\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"회사코드\" TL_SEQ=\"147\"/><Cell col=\"1\" text=\"회사명\" TL_SEQ=\"148\"/><Cell col=\"2\" text=\"회사상태\" TL_SEQ=\"149\"/></Band><Band id=\"body\"><Cell text=\"bind:COMPANY_CODE\"/><Cell col=\"1\" text=\"bind:COMPANY_NAME\"/><Cell col=\"2\" text=\"bind:COMPANY_STATE\" displaytype=\"combotext\" combodataset=\"ds_CD_COMPANY_STATE\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"50","28","20","10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_CompReg",null,null,"82","28","btnClose:5","10",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("신규등록");
            obj.set_cssclass("btn_WF_Crud");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_CompanyReg00","20.00","444",null,"218","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_border("1px solid #dddddd");
            obj.set_cssclass("div_WF_detailBg");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_CorporateRegistrationNumber","0","44","100","24",null,null,null,null,null,null,this.div_CompanyReg00.form);
            obj.set_taborder("0");
            obj.set_text("사업자등록번호");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("837");
            this.div_CompanyReg00.addChild(obj.name, obj);

            obj = new Edit("edt_CorporateRegistrationNumber","stc_CorporateRegistrationNumber:10.00","44","155","24",null,null,null,null,null,null,this.div_CompanyReg00.form);
            obj.set_taborder("1");
            obj.set_enable("true");
            obj.set_readonly("false");
            this.div_CompanyReg00.addChild(obj.name, obj);

            obj = new Static("stc_CorperateRegistrationNumber","edt_CorporateRegistrationNumber:0.00","44","100","24",null,null,null,null,null,null,this.div_CompanyReg00.form);
            obj.set_taborder("2");
            obj.set_text("법인등록번호");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("847");
            this.div_CompanyReg00.addChild(obj.name, obj);

            obj = new Edit("edt_CorperateRegistrationNumber","stc_CorperateRegistrationNumber:10.00","44","165","24",null,null,null,null,null,null,this.div_CompanyReg00.form);
            obj.set_taborder("3");
            obj.set_readonly("false");
            this.div_CompanyReg00.addChild(obj.name, obj);

            obj = new Static("stc_Telephone","edt_CorperateRegistrationNumber:0.00","44","84","24",null,null,null,null,null,null,this.div_CompanyReg00.form);
            obj.set_taborder("5");
            obj.set_text("전화번호");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("545");
            this.div_CompanyReg00.addChild(obj.name, obj);

            obj = new Edit("edt_Telephone","stc_Telephone:10.00","44",null,"24","10",null,null,null,null,null,this.div_CompanyReg00.form);
            obj.set_taborder("4");
            obj.set_readonly("false");
            this.div_CompanyReg00.addChild(obj.name, obj);

            obj = new Static("stc_Remark","0","76","100","59",null,null,null,null,null,null,this.div_CompanyReg00.form);
            obj.set_taborder("6");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("45");
            this.div_CompanyReg00.addChild(obj.name, obj);

            obj = new TextArea("txt_Remark","110.00","76",null,"59","10",null,null,null,null,null,this.div_CompanyReg00.form);
            obj.set_taborder("7");
            obj.set_readonly("false");
            this.div_CompanyReg00.addChild(obj.name, obj);

            obj = new Static("stc_CompanyType","0.00","11","100","24",null,null,null,null,null,null,this.div_CompanyReg00.form);
            obj.set_taborder("8");
            obj.set_text("회사구분");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("836");
            this.div_CompanyReg00.addChild(obj.name, obj);

            obj = new CheckBox("chb_ClientCompany","111.00","11","71","24",null,null,null,null,null,null,this.div_CompanyReg00.form);
            obj.set_taborder("9");
            obj.set_text("고객사");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.getSetter("TL_SEQ").set("32");
            this.div_CompanyReg00.addChild(obj.name, obj);

            obj = new CheckBox("chb_PlaceOfContract","183.00","11","61","24",null,null,null,null,null,null,this.div_CompanyReg00.form);
            obj.set_taborder("10");
            obj.set_text("계약처");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.getSetter("TL_SEQ").set("34");
            this.div_CompanyReg00.addChild(obj.name, obj);

            obj = new CheckBox("chb_FakeCode","262.00","11","61","24",null,null,null,null,null,null,this.div_CompanyReg00.form);
            obj.set_taborder("11");
            obj.set_text("가코드");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.getSetter("TL_SEQ").set("841");
            this.div_CompanyReg00.addChild(obj.name, obj);

            obj = new CheckBox("chb_BlackList","341.00","11","85","24",null,null,null,null,null,null,this.div_CompanyReg00.form);
            obj.set_taborder("12");
            obj.set_text("블랙리스트");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.getSetter("TL_SEQ").set("842");
            this.div_CompanyReg00.addChild(obj.name, obj);

            obj = new CheckBox("chb_DISP","436.00","11","61","24",null,null,null,null,null,null,this.div_CompanyReg00.form);
            obj.set_taborder("13");
            obj.set_text("DISP");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.getSetter("TL_SEQ").set("843");
            this.div_CompanyReg00.addChild(obj.name, obj);

            obj = new CheckBox("chb_TURNKEY","500.00","11","77","24",null,null,null,null,null,null,this.div_CompanyReg00.form);
            obj.set_taborder("14");
            obj.set_text("원청턴키");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.getSetter("TL_SEQ").set("858");
            this.div_CompanyReg00.addChild(obj.name, obj);

            obj = new CheckBox("chb_SubsidiaryCompany","580.00","11","87","24",null,null,null,null,null,null,this.div_CompanyReg00.form);
            obj.set_taborder("15");
            obj.set_text("자회사여부");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.getSetter("TL_SEQ").set("22837");
            this.div_CompanyReg00.addChild(obj.name, obj);

            obj = new TextArea("txt_Remark00","110.00","136",null,"35","10",null,null,null,null,null,this.div_CompanyReg00.form);
            obj.set_taborder("16");
            obj.set_readonly("false");
            this.div_CompanyReg00.addChild(obj.name, obj);

            obj = new TextArea("txt_Remark00_00","110.00","172",null,"35","10",null,null,null,null,null,this.div_CompanyReg00.form);
            obj.set_taborder("17");
            obj.set_readonly("false");
            this.div_CompanyReg00.addChild(obj.name, obj);

            obj = new Static("stc_Remark00","0","136","100","35",null,null,null,null,null,null,this.div_CompanyReg00.form);
            obj.set_taborder("18");
            obj.set_text("계약비고");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("45");
            this.div_CompanyReg00.addChild(obj.name, obj);

            obj = new Static("stc_Remark00_00","0","172","100","35",null,null,null,null,null,null,this.div_CompanyReg00.form);
            obj.set_taborder("19");
            obj.set_text("구매비고");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("45");
            this.div_CompanyReg00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_search.form
            obj = new Layout("default","",0,0,this.div_search.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.stc_Name.set_taborder("0");
                p.stc_Name.set_text("회사명");
                p.stc_Name.set_cssclass("sta_WF_SchLabel");
                p.stc_Name.getSetter("TL_SEQ").set("32");
                p.stc_Name.move("0","12","83","24",null,null);

                p.edt_Name.set_taborder("1");
                p.edt_Name.move("stc_Name:0.00","12",null,"24","370",null);

                p.btn_Search.set_taborder("2");
                p.btn_Search.set_text("조회");
                p.btn_Search.set_cssclass("btn_WF_Search");
                p.btn_Search.getSetter("TL_SEQ").set("118");
                p.btn_Search.move(null,"10","60","28","8",null);
            	}
            );
            this.div_search.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div_search.form
            obj = new Layout("portrait","",0,0,this.div_search.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.rdo_Search.move("76","4","216","30",null,null);

                p.stc_Search.move("12","4","48","30",null,null);

                p.btn_Search.move(null,"4","80","30","4",null);

                p.edt_Name.move("76","43",null,"30","4",null);

                p.stc_Name.move("12","43","48","30",null,null);
            	}
            );
            this.div_search.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div_CompanyReg00.form
            obj = new Layout("default","",0,0,this.div_CompanyReg00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.stc_CorporateRegistrationNumber.set_taborder("0");
                p.stc_CorporateRegistrationNumber.set_text("사업자등록번호");
                p.stc_CorporateRegistrationNumber.set_cssclass("sta_WF_DetailTit");
                p.stc_CorporateRegistrationNumber.getSetter("TL_SEQ").set("837");
                p.stc_CorporateRegistrationNumber.move("0","44","100","24",null,null);

                p.edt_CorporateRegistrationNumber.set_taborder("1");
                p.edt_CorporateRegistrationNumber.set_enable("true");
                p.edt_CorporateRegistrationNumber.set_readonly("false");
                p.edt_CorporateRegistrationNumber.move("stc_CorporateRegistrationNumber:10.00","44","155","24",null,null);

                p.stc_CorperateRegistrationNumber.set_taborder("2");
                p.stc_CorperateRegistrationNumber.set_text("법인등록번호");
                p.stc_CorperateRegistrationNumber.set_cssclass("sta_WF_DetailTit");
                p.stc_CorperateRegistrationNumber.set_textAlign("right");
                p.stc_CorperateRegistrationNumber.getSetter("TL_SEQ").set("847");
                p.stc_CorperateRegistrationNumber.move("edt_CorporateRegistrationNumber:0.00","44","100","24",null,null);

                p.edt_CorperateRegistrationNumber.set_taborder("3");
                p.edt_CorperateRegistrationNumber.set_readonly("false");
                p.edt_CorperateRegistrationNumber.move("stc_CorperateRegistrationNumber:10.00","44","165","24",null,null);

                p.stc_Telephone.set_taborder("5");
                p.stc_Telephone.set_text("전화번호");
                p.stc_Telephone.set_cssclass("sta_WF_DetailTit");
                p.stc_Telephone.set_textAlign("right");
                p.stc_Telephone.getSetter("TL_SEQ").set("545");
                p.stc_Telephone.move("edt_CorperateRegistrationNumber:0.00","44","84","24",null,null);

                p.edt_Telephone.set_taborder("4");
                p.edt_Telephone.set_readonly("false");
                p.edt_Telephone.move("stc_Telephone:10.00","44",null,"24","10",null);

                p.stc_Remark.set_taborder("6");
                p.stc_Remark.set_text("비고");
                p.stc_Remark.set_cssclass("sta_WF_DetailTit");
                p.stc_Remark.set_textAlign("right");
                p.stc_Remark.getSetter("TL_SEQ").set("45");
                p.stc_Remark.move("0","76","100","59",null,null);

                p.txt_Remark.set_taborder("7");
                p.txt_Remark.set_readonly("false");
                p.txt_Remark.move("110.00","76",null,"59","10",null);

                p.stc_CompanyType.set_taborder("8");
                p.stc_CompanyType.set_text("회사구분");
                p.stc_CompanyType.set_cssclass("sta_WF_DetailTit");
                p.stc_CompanyType.set_textAlign("right");
                p.stc_CompanyType.getSetter("TL_SEQ").set("836");
                p.stc_CompanyType.move("0.00","11","100","24",null,null);

                p.chb_ClientCompany.set_taborder("9");
                p.chb_ClientCompany.set_text("고객사");
                p.chb_ClientCompany.set_falsevalue("0");
                p.chb_ClientCompany.set_truevalue("1");
                p.chb_ClientCompany.getSetter("TL_SEQ").set("32");
                p.chb_ClientCompany.move("111.00","11","71","24",null,null);

                p.chb_PlaceOfContract.set_taborder("10");
                p.chb_PlaceOfContract.set_text("계약처");
                p.chb_PlaceOfContract.set_falsevalue("0");
                p.chb_PlaceOfContract.set_truevalue("1");
                p.chb_PlaceOfContract.getSetter("TL_SEQ").set("34");
                p.chb_PlaceOfContract.move("183.00","11","61","24",null,null);

                p.chb_FakeCode.set_taborder("11");
                p.chb_FakeCode.set_text("가코드");
                p.chb_FakeCode.set_falsevalue("0");
                p.chb_FakeCode.set_truevalue("1");
                p.chb_FakeCode.getSetter("TL_SEQ").set("841");
                p.chb_FakeCode.move("262.00","11","61","24",null,null);

                p.chb_BlackList.set_taborder("12");
                p.chb_BlackList.set_text("블랙리스트");
                p.chb_BlackList.set_falsevalue("0");
                p.chb_BlackList.set_truevalue("1");
                p.chb_BlackList.getSetter("TL_SEQ").set("842");
                p.chb_BlackList.move("341.00","11","85","24",null,null);

                p.chb_DISP.set_taborder("13");
                p.chb_DISP.set_text("DISP");
                p.chb_DISP.set_falsevalue("0");
                p.chb_DISP.set_truevalue("1");
                p.chb_DISP.getSetter("TL_SEQ").set("843");
                p.chb_DISP.move("436.00","11","61","24",null,null);

                p.chb_TURNKEY.set_taborder("14");
                p.chb_TURNKEY.set_text("원청턴키");
                p.chb_TURNKEY.set_falsevalue("0");
                p.chb_TURNKEY.set_truevalue("1");
                p.chb_TURNKEY.getSetter("TL_SEQ").set("858");
                p.chb_TURNKEY.move("500.00","11","77","24",null,null);

                p.chb_SubsidiaryCompany.set_taborder("15");
                p.chb_SubsidiaryCompany.set_text("자회사여부");
                p.chb_SubsidiaryCompany.set_falsevalue("0");
                p.chb_SubsidiaryCompany.set_truevalue("1");
                p.chb_SubsidiaryCompany.getSetter("TL_SEQ").set("22837");
                p.chb_SubsidiaryCompany.move("580.00","11","87","24",null,null);

                p.txt_Remark00.set_taborder("16");
                p.txt_Remark00.set_readonly("false");
                p.txt_Remark00.move("110.00","136",null,"35","10",null);

                p.txt_Remark00_00.set_taborder("17");
                p.txt_Remark00_00.set_readonly("false");
                p.txt_Remark00_00.move("110.00","172",null,"35","10",null);

                p.stc_Remark00.set_taborder("18");
                p.stc_Remark00.set_text("계약비고");
                p.stc_Remark00.set_cssclass("sta_WF_DetailTit");
                p.stc_Remark00.set_textAlign("right");
                p.stc_Remark00.getSetter("TL_SEQ").set("45");
                p.stc_Remark00.move("0","136","100","35",null,null);

                p.stc_Remark00_00.set_taborder("19");
                p.stc_Remark00_00.set_text("구매비고");
                p.stc_Remark00_00.set_cssclass("sta_WF_DetailTit");
                p.stc_Remark00_00.set_textAlign("right");
                p.stc_Remark00_00.getSetter("TL_SEQ").set("45");
                p.stc_Remark00_00.move("0","172","100","35",null,null);
            	}
            );
            this.div_CompanyReg00.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div_CompanyReg00.form
            obj = new Layout("portrait","",0,0,this.div_CompanyReg00.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.div_CompanyReg00.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","",830,712,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_CompanyReg00.form.chb_ClientCompany","value","dsOutput","CLIENT_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_CompanyReg00.form.chb_PlaceOfContract","value","dsOutput","COMPANY_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_CompanyReg00.form.chb_FakeCode","value","dsOutput","TMP_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_CompanyReg00.form.chb_BlackList","value","dsOutput","BLACKLIST_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_CompanyReg00.form.chb_DISP","value","dsOutput","SI_VIEW_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_CompanyReg00.form.chb_TURNKEY","value","dsOutput","TURNKEY_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_CompanyReg00.form.chb_SubsidiaryCompany","value","dsOutput","SUBSIDIARY_COMPANY_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_CompanyReg00.form.edt_CorporateRegistrationNumber","value","dsOutput","COMPANY_REG_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_CompanyReg00.form.edt_CorperateRegistrationNumber","value","dsOutput","CORPORATE_REG_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_CompanyReg00.form.edt_Telephone","value","dsOutput","PHONE_NO");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_CompanyReg00.form.txt_Remark","value","dsOutput","REMARKS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_CompanyReg00.form.txt_Remark00","value","dsOutput","CONTRACT_REMARKS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item12","div_CompanyReg00.form.txt_Remark00_00","value","dsOutput","PURCHASE_REMARKS");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CE_CompanySearch.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("CE_CompanySearch.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("CE_CompanySearch.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("CE_CompanySearch.xfdl","Script::CommGrid.xjs");
        this.registerScript("CE_CompanySearch.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분	 	: 공통 - 공통
        * 02. 화면명		: 고객사, 협력사 검색 (CE_CompanySearch_S01)
        * 03. 화면설명 	:
        * 04. 작성일   	: 2018.08.13
        * 05. 작성자   	: 안주환
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
        this.SEARCH_MODE;	// 1:고객사, 2:협력사
        this.FV_AUTO_SEARCH;
        //this.FV_CO_CD = nexacro.getApplication().gdsUserInfo.getColumn(0, "CO_CD");
        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/
        this.CE_CompanySearch_onload = function(obj,e)
        {
        	this.gfnCompInit(obj);  	// Grid 공통함수 호출
        	this.fnGetCode();

        	this.SEARCH_MODE = this.parent.pvMode;  //검색조건
        	this.FV_AUTO_SEARCH = this.parent.autoSearch;	//자동조회 처리
        //
        // 	if (!this.gfnIsEmpty(this.SEARCH_MODE))
        // 	{
        // 		if (this.SEARCH_MODE == "1") {
        // 			this.st_Title.set_text(this.gfnGetTransTxt(153, "고객사 검색"));
        // 			this.div_search.form.stc_Name.set_text(this.gfnGetTransTxt(32, "고객사"));
        // 		} else if (this.SEARCH_MODE == "2") {
        // 			this.st_Title.set_text(this.gfnGetTransTxt(154, "협력사 검색"));
        // 			this.div_search.form.stc_Name.set_text(this.gfnGetTransTxt(1133, "협력사"));
        // 		}
        // 		this.div_search.form.rdo_Search.set_enableevent(false);
        // 		this.div_search.form.rdo_Search.set_value(this.SEARCH_MODE);
        // 		this.div_search.form.rdo_Search.set_enable(false);
        // 		this.div_search.form.rdo_Search.set_enableevent(true);
        // 	}

        	if(this.parent.sSubject)
        	{
        		this.div_search.form.edt_Name.set_value(this.parent.sSubject);
        		//this.fnSearch();
        	}

        	// 회사 신규등록 버튼 활성화 User Property
        	if (this.parent.compReg == "true") {
        		this.div_CompanyReg.form.btn_CompReg.set_visible(true);
        	}
        	if(this.parent.hasOwnProperty("CompanyName"))
        	{
        		if(this.parent.CompanyName == "Optionchange")
        		{
        			this.div_search.form.rdo_Search.set_value(2);
        		}
        		else
        		{
        			this.div_search.form.edt_Name.set_value(this.parent.CompanyName);
        			if(!this.gfnIsEmpty(this.parent.ProjectName))
        			{
        				this.fnSearch();
        				return;
        			}
        		}
        	}

        	if(this.parent.sSubject && !this.gfnIsNull(this.parent.sSubject))
        	{
        		this.fnSearch();
        	}
        };

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        // this.div_search_rdo_Search_onitemchanged = function(obj:nexacro.Radio, e:nexacro.ItemChangeEventInfo)
        // {
        // 	var code = this.div_search.form.rdo_Search.value;
        //
        // 	if(code == "1") {
        // 		this.div_search.form.stc_Name.set_text(this.gfnGetTransTxt(32, "고객사"));
        // 	}
        // 	else if(code == "2"){
        // 		this.div_search.form.stc_Name.set_text(this.gfnGetTransTxt(1133, "협력사"));
        // 	}
        // 	this.fnSearch();
        // };

        this.fnReturnOne = function(row)
        {
        	this.close(this.dsOutput.getColumn(row, "COMPANY_CODE") + "|" + this.dsOutput.getColumn(row, "COMPANY_NAME"));
        }

        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fnGetCode = function()
        {
        	this.gfnAddCodeDataset("ds_CD_PARTNER_KIND" 		,"PARTNER_KIND");
        // 	this.gfnAddCodeDataset("ds_CD_COMPANY_STATE"		,"COMPANY_STATE");
        // 	this.gfnAddCodeDataset("ds_CD_CL_EXCEPTION_CODE"	,"CL_EXCEPTION_CODE");
        //
        // 	this.gfnAddCodeDataset("ds_CD_CL_ADD_SCORE1"		,"CL_ADD_SCORE1");
        // 	this.gfnAddCodeDataset("ds_CD_CL_ADD_SCORE2"		,"CL_ADD_SCORE2");
        // 	this.gfnAddCodeDataset("ds_CD_CL_ADD_SCORE3"		,"CL_ADD_SCORE3");

        	// 공통코드 조회
        	this.gfnCodeTransaction();
        };

        this.fnSearch = function()
        {
        	// 조건값 셋팅
        	this.gfnAddSendParameter("COMPANY_NAME", this.div_search.form.edt_Name.value);

        	// 조회용 Output dataset 세팅
        	//this.gfnAddOutputDataset("dsOutput", "dsOutput");
        	this.gfnSetMap("nextBaseMapper", "DetailPopupCompany", "dsOutput");
        	this.gfnCommonTransaction("Select", "selectNextList.do"/*"CE_CompanySearch_S01"*/, this.grd_CompanySerachList);
        }

        // 화면 콜백
        this.fnCallBack = function(strSvcID, nErrorCode, strErrorMag)
        {
        	// 에러 예외처리
        	if(nErrorCode != 0) {
        		return;
        	}
        	else {
        		if(strSvcID=="gfnGetCode")
        		{
        			if(!this.gfnIsEmpty(this.div_search.form.edt_Name.value)) {
        				this.fnSearch();
        			}
        		}
        		else if(strSvcID=="Select") {
        			var nRowCnt = this.dsOutput.getRowCount();
        			if(nRowCnt > 0)
        			{
        				this.grd_CompanySerachList.setFocus();
        			}else{
        				this.div_search.form.edt_Name.setFocus();
        			}

        			if(this.hasOwnProperty("opener") && !this.gfnIsEmpty(this.opener))
        			{
        				if(this.opener.name == "COM_Search")
        				{
        					if(nRowCnt == 1)
        					{
        						if (this.FV_AUTO_SEARCH == "true") {
        							this.fnReturnOne(0);
        						}
        					}
        				}
        			}
        		}
        	}
        }

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.comm_Click = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_Search" :
        			if(this.gfnIsEmpty(this.div_search.form.edt_Name.value))
        			{
        				this.gfnAlert('msg.err.validator.input',['검색할 회사명']);
        				this.div_search.form.edt_Name.setFocus();
        				return;
        			}
        			this.fnSearch();
        			break;
        		case "btn_Close" :
        			this.close();
        			break;
        	}
        };

        this.div_search_edt_Name_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13) {
        		if(this.gfnIsEmpty(this.div_search.form.edt_Name.value))
        		{
        			this.gfnAlert('msg.err.validator.input',['검색할 회사명']);
        			this.div_search.form.edt_Name.setFocus();
        		}
        		else
        		{
        			this.fnSearch();
        		}
        	}
        };

        this.grd_CompanySerachList_oncelldblclick = function(obj,e)
        {
        	this.fnReturnOne(e.row);
        };

        this.grd_CompanySerachList_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.fnReturnOne(obj.currentrow);
        	}
        };

        this.div_CompanyReg_btn_CompReg_onclick = function(obj,e)
        {
        	var sTmpCompReg = true;
        	if(this.FV_CO_CD == "J02") sTmpCompReg = false;

        	var sArgument = {COMPANY_CODE : "", TMP_COMP_REG : sTmpCompReg};
        	this.commUtil.popup(this, "CompanyRegIns", "Sales::SC_CompanyReg.xfdl", -1, -1, null, null, true, true, false, sArgument, "fnPopupCallBack");
        };

        // Popup 콜백
        this.fnPopupCallBack = function(sPopupId, Variant)
        {
        	Variant = this.commUtil.popupReturn();
        	if(this.gfnIsEmpty(Variant))
        	{
        		return;
        	}
        	else
        	{
        		this.recentVariant = Variant;
        		switch(sPopupId)
        		{
        			case "CompanyReg" :  //고객사
        				var ds = new nexacro.Dataset();
        				ds.loadXML(Variant);
        				this.recentVariant = ds;


        				if(!this.gfnIsEmpty(ds.getColumn(0, "COMPANY_NAME")))
        				{
        					this.div_search.form.edt_Name.set_value(ds.getColumn(0, "COMPANY_NAME"));
        					this.fnSearch();
        				}
        			break;
        		}
        	}
        }
        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CE_CompanySearch_onload,this);
            this.div_search.form.edt_Name.addEventHandler("onkeydown",this.div_search_edt_Name_onkeydown,this);
            this.div_search.form.btn_Search.addEventHandler("onclick",this.comm_Click,this);
            this.grd_CompanySerachList.addEventHandler("oncelldblclick",this.grd_CompanySerachList_oncelldblclick,this);
            this.grd_CompanySerachList.addEventHandler("onkeydown",this.grd_CompanySerachList_onkeydown,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.btn_CompReg.addEventHandler("onclick",this.btnConfirm_onclick,this);
        };
        this.loadIncludeScript("CE_CompanySearch.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
