(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CE_ProjectSearch");
            this.set_titletext("프로젝트검색");
            this.set_cssclass("frm_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(900,568);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOutput", this);
            obj._setContents("<ColumnInfo><Column id=\"CLIENT_CODE\" type=\"string\" size=\"15\"/><Column id=\"CLIENT_NAME\" type=\"string\" size=\"50\"/><Column id=\"PROJECT_CODE\" type=\"string\" size=\"15\"/><Column id=\"PROJECT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CONTRACT_NO\" type=\"string\" size=\"20\"/><Column id=\"CONTRACT_TYPE\" type=\"string\" size=\"3\"/><Column id=\"CONTRACT_NAME\" type=\"string\" size=\"202\"/><Column id=\"COMPANY_NAME\" type=\"string\" size=\"50\"/><Column id=\"CONTRACT_DATE\" type=\"datetime\" size=\"23\"/><Column id=\"BIZ_STAFF_DEPT\" type=\"string\" size=\"30\"/><Column id=\"BIZ_STAFF\" type=\"string\" size=\"15\"/><Column id=\"BIZ_STAFF_NAME\" type=\"string\" size=\"255\"/><Column id=\"COMPANY_CODE\" type=\"string\" size=\"255\"/><Column id=\"PRODUCT_NAME\" type=\"string\" size=\"255\"/><Column id=\"PRODUCT_CODE\" type=\"string\" size=\"255\"/><Column id=\"PROJECT_CONTRACT_STATUS\" type=\"string\" size=\"20\"/><Column id=\"CONTRACT_STATUS\" type=\"string\" size=\"20\"/><Column id=\"PURCHASE_CONTRACT_STATUS\" type=\"string\" size=\"20\"/><Column id=\"COLOR\" type=\"string\" size=\"255\"/><Column id=\"CO_CD\" type=\"string\" size=\"255\"/><Column id=\"CONTRACT_TYPE_NAME\" type=\"string\" size=\"203\"/><Column id=\"CONTRACT_MAIN\" type=\"string\" size=\"20\"/><Column id=\"CONTRACT_MAIN_NAME\" type=\"string\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSelected", this);
            obj._setContents("<ColumnInfo><Column id=\"CLIENT_CODE\" type=\"string\" size=\"15\"/><Column id=\"CLIENT_NAME\" type=\"string\" size=\"50\"/><Column id=\"PROJECT_CODE\" type=\"string\" size=\"15\"/><Column id=\"PROJECT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CONTRACT_NO\" type=\"string\" size=\"20\"/><Column id=\"CONTRACT_TYPE\" type=\"string\" size=\"3\"/><Column id=\"CONTRACT_NAME\" type=\"string\" size=\"202\"/><Column id=\"COMPANY_NAME\" type=\"string\" size=\"50\"/><Column id=\"CONTRACT_DATE\" type=\"datetime\" size=\"23\"/><Column id=\"BIZ_STAFF_DEPT\" type=\"string\" size=\"30\"/><Column id=\"BIZ_STAFF\" type=\"string\" size=\"15\"/><Column id=\"BIZ_STAFF_NAME\" type=\"string\" size=\"255\"/><Column id=\"COMPANY_CODE\" type=\"string\" size=\"255\"/><Column id=\"PRODUCT_NAME\" type=\"string\" size=\"255\"/><Column id=\"PRODUCT_CODE\" type=\"string\" size=\"255\"/><Column id=\"PROJECT_CONTRACT_STATUS\" type=\"string\" size=\"20\"/><Column id=\"CONTRACT_STATUS\" type=\"string\" size=\"20\"/><Column id=\"PURCHASE_CONTRACT_STATUS\" type=\"string\" size=\"20\"/><Column id=\"COLOR\" type=\"string\" size=\"255\"/><Column id=\"CO_CD\" type=\"string\" size=\"255\"/><Column id=\"CONTRACT_TYPE_NAME\" type=\"string\" size=\"203\"/><Column id=\"CONTRACT_MAIN\" type=\"string\" size=\"20\"/><Column id=\"CONTRACT_MAIN_NAME\" type=\"string\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_CONTRACT_COMPLETE_TYPE", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION_JAP\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION_ENG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CAPTION\">All</Col><Col id=\"CODE\"/><Col id=\"CAPTION_JAP\">全体</Col></Row><Row><Col id=\"CODE\">0</Col><Col id=\"CAPTION\">가계약</Col><Col id=\"CAPTION_JAP\">仮契約</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"CAPTION\">진계약</Col><Col id=\"CAPTION_JAP\">真契約</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_SEARCH", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION_JAP\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION_ENG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">C</Col><Col id=\"CAPTION\">고객사</Col><Col id=\"CAPTION_JAP\">顧客社</Col></Row><Row><Col id=\"CODE\">A</Col><Col id=\"CAPTION\">매출계약처</Col><Col id=\"CAPTION_JAP\">売上契約先</Col></Row><Row><Col id=\"CODE\">P</Col><Col id=\"CAPTION\">프로젝트</Col><Col id=\"CAPTION_JAP\">プロジェクト</Col></Row><Row><Col id=\"CODE\">M</Col><Col id=\"CAPTION\">매입계약명</Col><Col id=\"CAPTION_JAP\">買入契約名</Col></Row><Row><Col id=\"CODE\">N</Col><Col id=\"CAPTION\">매출계약명</Col><Col id=\"CAPTION_JAP\">売上契約名</Col></Row><Row><Col id=\"CODE\">B</Col><Col id=\"CAPTION\">매입계약처</Col><Col id=\"CAPTION_JAP\">買入契約先</Col></Row><Row><Col id=\"CODE\">CN</Col><Col id=\"CAPTION\">매출계약번호</Col><Col id=\"CAPTION_JAP\">売上契約番号</Col></Row><Row><Col id=\"CODE\">PN</Col><Col id=\"CAPTION\">매입계약번호</Col><Col id=\"CAPTION_JAP\">買入契約番号</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInConTypeList", this);
            obj._setContents("<ColumnInfo><Column id=\"CONTRACT_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_Close",null,"9","15","15","12",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_POP_Cls");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_search","4","39",null,"71","4",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("");
            obj.set_cssclass("div_WF_SchList");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_Search","8","6","372","57",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_CD_SEARCH");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_direction("vertical");
            obj.set_rowcount("2");
            obj.getSetter("TL_FLAG").set("1");
            obj.set_text("고객사");
            obj.set_value("C");
            obj.set_index("0");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("stc_ContractCompleteType","392","8","52","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("1");
            obj.set_text("계약상태");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("121");
            this.div_search.addChild(obj.name, obj);

            obj = new Combo("cmb_ContractCompleteType","452","8","102","22",null,null,null,null,null,null,this.div_search.form);
            obj.set_taborder("2");
            obj.set_innerdataset("ds_CD_CONTRACT_COMPLETE_TYPE");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.getSetter("TL_FLAG").set("1");
            obj.set_text("진계약");
            obj.set_value("1");
            obj.set_index("2");
            this.div_search.addChild(obj.name, obj);

            obj = new Button("btn_Search",null,"7","60","24","8",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_SchText");
            obj.getSetter("TL_SEQ").set("118");
            this.div_search.addChild(obj.name, obj);

            obj = new Edit("edt_Name","392","39",null,"22","98",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("3");
            obj.set_tooltiptext("제목 입력");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("Static06","390","34",null,"1","9",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("5");
            obj.set_text("Static06");
            obj.set_background("#c6deed");
            this.div_search.addChild(obj.name, obj);

            obj = new Static("st_OtherCo",null,"42","80","16","8",null,null,null,null,null,this.div_search.form);
            obj.set_taborder("6");
            obj.set_text("※ 타사계약건");
            obj.set_color("green");
            obj.set_textAlign("right");
            obj.set_visible("false");
            obj.getSetter("TL_SEQ").set("155");
            this.div_search.addChild(obj.name, obj);

            obj = new Grid("grd_ProjectSearch","4","div_search:4",null,null,"4","41",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsOutput");
            obj.set_autofittype("col");
            obj.set_formatid("default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/><Column size=\"100\"/><Column size=\"250\"/><Column size=\"80\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"고객사\" TL_SEQ=\"32\"/><Cell col=\"1\" text=\"계약처\" TL_SEQ=\"34\"/><Cell col=\"2\" text=\"프로젝트명\" TL_SEQ=\"114\"/><Cell col=\"3\" text=\"계약구분\" TL_SEQ=\"123\"/><Cell col=\"4\" text=\"계약명\" TL_SEQ=\"33\"/><Cell col=\"5\" text=\"계약일자\" TL_SEQ=\"156\"/><Cell col=\"6\" text=\"영업\" TL_SEQ=\"157\"/></Band><Band id=\"body\"><Cell text=\"bind:CLIENT_NAME\" textAlign=\"left\" suppress=\"1\" cssclass=\"expr:COLOR==&apos;GREEN&apos;?&apos;Expr_Case_Font_green&apos;:&apos;&apos;\"/><Cell col=\"1\" text=\"bind:CONTRACT_MAIN_NAME\" textAlign=\"left\" cssclass=\"expr:COLOR==&apos;GREEN&apos;?&apos;Expr_Case_Font_green&apos;:&apos;&apos;\"/><Cell col=\"2\" text=\"bind:PROJECT_NAME\" textAlign=\"left\" cssclass=\"expr:COLOR==&apos;GREEN&apos;?&apos;Expr_Case_Font_green&apos;:&apos;&apos;\"/><Cell col=\"3\" text=\"bind:CONTRACT_TYPE_NAME\" cssclass=\"expr:COLOR==&apos;GREEN&apos;?&apos;Expr_Case_Font_green&apos;:&apos;&apos;\"/><Cell col=\"4\" text=\"bind:CONTRACT_NAME\" textAlign=\"left\" cssclass=\"expr:COLOR==&apos;GREEN&apos;?&apos;Expr_Case_Font_green&apos;:&apos;&apos;\"/><Cell col=\"5\" text=\"bind:CONTRACT_DATE\" calendardateformat=\"yyyy-MM-dd\" cssclass=\"expr:COLOR==&apos;GREEN&apos;?&apos;Expr_Case_Font_green&apos;:&apos;&apos;\" displaytype=\"date\"/><Cell col=\"6\" text=\"bind:BIZ_STAFF_NAME\" cssclass=\"expr:COLOR==&apos;GREEN&apos;?&apos;Expr_Case_Font_green&apos;:&apos;&apos;\"/></Band></Format><Format id=\"mobile\"><Columns><Column size=\"110\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"고객사\"/><Cell col=\"1\" text=\"프로젝트명\"/><Cell col=\"2\" text=\"계약구분\"/><Cell col=\"3\" text=\"계약일자\"/><Cell row=\"1\" text=\"계약처\"/><Cell row=\"1\" col=\"1\" colspan=\"2\" text=\"계약명\"/><Cell row=\"1\" col=\"3\" text=\"영업\"/></Band><Band id=\"body\"><Cell text=\"bind:CLIENT_NAME\" textAlign=\"left\" cssclass=\"expr:COLOR==&apos;GREEN&apos;?&apos;Expr_Case_Font_green&apos;:&apos;&apos;\"/><Cell col=\"1\" text=\"bind:PROJECT_NAME\" textAlign=\"left\" cssclass=\"expr:COLOR==&apos;GREEN&apos;?&apos;Expr_Case_Font_green&apos;:&apos;&apos;\"/><Cell col=\"2\" text=\"bind:CONTRACT_TYPE_NAME\" cssclass=\"expr:COLOR==&apos;GREEN&apos;?&apos;Expr_Case_Font_green&apos;:&apos;&apos;\"/><Cell col=\"3\" text=\"bind:CONTRACT_DATE\" calendardateformat=\"yyyy-MM-dd\" cssclass=\"expr:COLOR==&apos;GREEN&apos;?&apos;Expr_Case_Font_green&apos;:&apos;&apos;\"/><Cell row=\"1\" text=\"bind:CONTRACT_MAIN_NAME\" textAlign=\"left\" cssclass=\"expr:COLOR==&apos;GREEN&apos;?&apos;Expr_Case_Font_green&apos;:&apos;&apos;\"/><Cell row=\"1\" col=\"1\" colspan=\"2\" text=\"bind:CONTRACT_NAME\" textAlign=\"left\" cssclass=\"expr:COLOR==&apos;GREEN&apos;?&apos;Expr_Case_Font_green&apos;:&apos;&apos;\"/><Cell row=\"1\" col=\"3\" text=\"bind:BIZ_STAFF_NAME\" cssclass=\"expr:COLOR==&apos;GREEN&apos;?&apos;Expr_Case_Font_green&apos;:&apos;&apos;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_BottomFrame","1",null,null,"36","1","1",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_POP_BtnBg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Confirm",null,null,"60","22","10","8",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_tran");
            obj.getSetter("TL_SEQ").set("158");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ProjectCode",null,"59","110","22","-130",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_tooltiptext("코드 입력");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ContractType",null,"59","30","22","-162",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_tooltiptext("코드 입력");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_ClientCode",null,"37","110","22","-130",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_tooltiptext("코드 입력");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","10","10","95","15",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("프로젝트검색");
            obj.set_cssclass("sta_POP_Title");
            obj.getSetter("TL_SEQ").set("159");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_search.form
            obj = new Layout("default","",0,0,this.div_search.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.rdo_Search.set_taborder("0");
                p.rdo_Search.set_innerdataset("ds_CD_SEARCH");
                p.rdo_Search.set_codecolumn("CODE");
                p.rdo_Search.set_datacolumn("CAPTION");
                p.rdo_Search.set_direction("vertical");
                p.rdo_Search.set_rowcount("2");
                p.rdo_Search.getSetter("TL_FLAG").set("1");
                p.rdo_Search.set_value("C");
                p.rdo_Search.set_index("0");
                p.rdo_Search.move("8","6","372","57",null,null);

                p.stc_ContractCompleteType.set_taborder("1");
                p.stc_ContractCompleteType.set_text("계약상태");
                p.stc_ContractCompleteType.set_cssclass("sta_WF_DetailTit");
                p.stc_ContractCompleteType.set_textAlign("right");
                p.stc_ContractCompleteType.getSetter("TL_SEQ").set("121");
                p.stc_ContractCompleteType.move("392","8","52","22",null,null);

                p.cmb_ContractCompleteType.set_taborder("2");
                p.cmb_ContractCompleteType.set_innerdataset("ds_CD_CONTRACT_COMPLETE_TYPE");
                p.cmb_ContractCompleteType.set_codecolumn("CODE");
                p.cmb_ContractCompleteType.set_datacolumn("CAPTION");
                p.cmb_ContractCompleteType.getSetter("TL_FLAG").set("1");
                p.cmb_ContractCompleteType.set_text("진계약");
                p.cmb_ContractCompleteType.set_value("1");
                p.cmb_ContractCompleteType.set_index("2");
                p.cmb_ContractCompleteType.move("452","8","102","22",null,null);

                p.btn_Search.set_taborder("4");
                p.btn_Search.set_text("조회");
                p.btn_Search.set_cssclass("btn_WF_SchText");
                p.btn_Search.getSetter("TL_SEQ").set("118");
                p.btn_Search.move(null,"7","60","24","8",null);

                p.edt_Name.set_taborder("3");
                p.edt_Name.set_tooltiptext("제목 입력");
                p.edt_Name.move("392","39",null,"22","98",null);

                p.Static06.set_taborder("5");
                p.Static06.set_text("Static06");
                p.Static06.set_background("#c6deed");
                p.Static06.move("390","34",null,"1","9",null);

                p.st_OtherCo.set_taborder("6");
                p.st_OtherCo.set_text("※ 타사계약건");
                p.st_OtherCo.set_color("green");
                p.st_OtherCo.set_textAlign("right");
                p.st_OtherCo.set_visible("false");
                p.st_OtherCo.getSetter("TL_SEQ").set("155");
                p.st_OtherCo.move(null,"42","80","16","8",null);
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
                p.btn_Search.move(null,"73","80","30","4",null);

                p.stc_ContractCompleteType.move("9","73","65","30",null,null);

                p.cmb_ContractCompleteType.move("80","73","102","30",null,null);

                p.edt_Name.move("186","73",null,"30","88",null);

                p.Static06.move("4","68",null,"1","4",null);

                p.rdo_Search.move("8","3","454","60",null,null);

                p.st_OtherCo.move(null,"42","120","20","8",null);
            	}
            );
            this.div_search.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",900,568,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("프로젝트검색");
                p.set_cssclass("frm_popBg");

                p.btn_Close.set_taborder("0");
                p.btn_Close.set_cssclass("btn_POP_Cls");
                p.btn_Close.set_escapebutton("true");
                p.btn_Close.move(null,"9","15","15","12",null);

                p.div_search.set_taborder("8");
                p.div_search.set_text("");
                p.div_search.set_cssclass("div_WF_SchList");
                p.div_search.move("4","39",null,"71","4",null);

                p.grd_ProjectSearch.set_taborder("1");
                p.grd_ProjectSearch.set_binddataset("dsOutput");
                p.grd_ProjectSearch.set_autofittype("col");
                p.grd_ProjectSearch.set_formatid("default");
                p.grd_ProjectSearch.move("4","div_search:4",null,null,"4","41");

                p.stc_BottomFrame.set_taborder("2");
                p.stc_BottomFrame.set_cssclass("sta_POP_BtnBg");
                p.stc_BottomFrame.move("1",null,null,"36","1","1");

                p.btn_Confirm.set_taborder("3");
                p.btn_Confirm.set_text("확인");
                p.btn_Confirm.set_cssclass("btn_WF_tran");
                p.btn_Confirm.getSetter("TL_SEQ").set("158");
                p.btn_Confirm.move(null,null,"60","22","10","8");

                p.edt_ProjectCode.set_taborder("4");
                p.edt_ProjectCode.set_tooltiptext("코드 입력");
                p.edt_ProjectCode.set_visible("false");
                p.edt_ProjectCode.move(null,"59","110","22","-130",null);

                p.edt_ContractType.set_taborder("5");
                p.edt_ContractType.set_tooltiptext("코드 입력");
                p.edt_ContractType.set_visible("false");
                p.edt_ContractType.move(null,"59","30","22","-162",null);

                p.edt_ClientCode.set_taborder("6");
                p.edt_ClientCode.set_tooltiptext("코드 입력");
                p.edt_ClientCode.set_visible("false");
                p.edt_ClientCode.move(null,"37","110","22","-130",null);

                p.Static02.set_taborder("7");
                p.Static02.set_text("프로젝트검색");
                p.Static02.set_cssclass("sta_POP_Title");
                p.Static02.getSetter("TL_SEQ").set("159");
                p.Static02.move("10","10","95","15",null,null);
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
                p.btn_Confirm.move(null,null,"80","30","4","5");

                p.div_search.move("4","39",null,"109","4",null);

                p.grd_ProjectSearch.set_formatid("mobile");
                p.grd_ProjectSearch.move("4","div_search:4",null,null,"4","43");

                p.Static02.move("10","0","119","34",null,null);

                p.btn_Close.move(null,"0","34","34","10",null);

                p.stc_BottomFrame.move("1",null,null,"38","1","1");
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
        this.addIncludeScript("CE_ProjectSearch.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("CE_ProjectSearch.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("CE_ProjectSearch.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("CE_ProjectSearch.xfdl","Script::CommGrid.xjs");
        this.registerScript("CE_ProjectSearch.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분	 	: 공통 - 공통
        * 02. 화면명		: 프로젝트 검색 (CE_ContractSearch_S01)
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
        //include "Script::CommCompExt.xjs"; //Test시에만 기재.

        /************************************************************************************************
        * 전역 변수 영역
        ************************************************************************************************/
        this.sAllCo = "none";

        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/
        this.CE_ProjectSearch_onload = function(obj,e)
        {
        	this.gfnCompInit(obj);  	// Grid 공통함수 호출

        	if(this.parent.hasOwnProperty("contracttype"))
        	{
        		if(!this.gfnIsEmpty(this.parent.contracttype))
        		{
        			this.edt_ContractType.set_value(this.parent.contracttype);
        		}
        	}
        	if(this.parent.hasOwnProperty("searchtype"))
        	{
        		if(!this.gfnIsEmpty(this.parent.searchtype))
        		{
        			this.div_search.form.rdo_Search.set_value(this.parent.searchtype);
        		}
        	}

        	if(this.parent.hasOwnProperty("allco"))
        	{
        		if(!this.gfnIsEmpty(this.parent.allco))
        		{
        			this.sAllCo = this.parent.allco;

        			if(this.sAllCo=="ALL")
        				this.div_search.form.st_OtherCo.set_visible(true);
        		}
        	}
        	this.div_search.form.cmb_ContractCompleteType.set_index(2);
        	if(this.parent.hasOwnProperty("contractstatus"))
        	{
        		if(!this.gfnIsEmpty(this.parent.contractstatus))
        		{
        			this.div_search.form.cmb_ContractCompleteType.set_value(this.parent.contractstatus);
        			this.div_search.form.cmb_ContractCompleteType.set_enable(false);
        		}
        	}
        	if(this.parent.hasOwnProperty("searchcode"))
        	{
        		var searchcode = this.parent.searchcode;
        		if(!this.gfnIsEmpty(searchcode))
        		{
        			if(searchcode.name == "CLIENT_CODE")
        			{
        				this.edt_ClientCode.set_value(searchcode.value);
        			}
        			else if(searchcode.name == "PROJECT_CODE")
        			{
        				this.edt_ProjectCode.set_value(searchcode.value);
        				this.fnSearch();
        			}
        		}
        	}
        	if(this.parent.hasOwnProperty("sSubject"))
        	{
        		this.div_search.form.edt_Name.set_value(this.parent.sSubject);
        		if(!this.gfnIsEmpty(this.parent.sSubject)) {
        			this.fnSearch();
        		}
        	}
        	if(this.parent.hasOwnProperty("ProjectName"))
        	{
        		this.div_search.form.rdo_Search.set_value("P");
        		this.div_search.form.edt_Name.set_value(this.parent.ProjectName);

        		if(!this.gfnIsEmpty(this.parent.ProjectName))
        		{
        			this.fnSearch();
        		}
        	}
        	if(this.parent.hasOwnProperty("ClientName"))
        	{
        		this.div_search.form.rdo_Search.set_value("C");
        		this.div_search.form.edt_Name.set_value(this.parent.ClientName);

        		if(!this.gfnIsEmpty(this.parent.ClientName))
        		{
        			this.fnSearch();
        		}
        	}
        	if(this.parent.hasOwnProperty("sRelatedCompany"))
        	{
        		if(!this.gfnIsEmpty(this.parent.sRelatedCompany)) {
        			this.fnSearch();
        		}
        	}
        	if(this.parent.hasOwnProperty("sEstimateFlag"))
        	{
        		if(!this.gfnIsEmpty(this.parent.sEstimateFlag)) {
        			this.fnSearch();
        		}
        	}
        };

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.rdo_PurchaseTyp_onitemchanged = function(obj,e)
        {
        	this.fnSearch();
        };

        this.fnReturnOne = function(row)
        {
        	this.dsSelected.clearData();
        	var nRow = this.dsSelected.addRow();
        	this.dsSelected.copyRow(nRow, this.dsOutput, row);
        	this.commUtil.popupClose(this.dsSelected);
        }

        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fnSearch = function() {
        	// 조건값 셋팅
        	this.gfnAddSendParameter("All_CO", this.sAllCo);
        	this.gfnAddSendParameter("SEARCH_GB", this.div_search.form.rdo_Search.value);
        	this.gfnAddSendParameter("SEARCH_TEXT", this.div_search.form.edt_Name.text);
        	if(!this.gfnIsEmpty(this.parent.sRelatedCompany))
        		this.gfnAddSendParameter("RELATED_COMPANY_CODE", this.parent.sRelatedCompany);
        	/*계약상태*/
        	if(!this.gfnIsEmpty(this.div_search.form.cmb_ContractCompleteType.value))
        	{
        		this.gfnAddSendParameter("CONTRACT_COMPLETE_TYPE", this.div_search.form.cmb_ContractCompleteType.value);
        	}
        	/*고객코드*/
        	if(!this.gfnIsEmpty(this.edt_ClientCode.value))
        	{
        		this.gfnAddSendParameter("CLIENT_CODE", this.edt_ClientCode.value);
        	}
        	/*프로젝트코드*/
        	if(!this.gfnIsEmpty(this.edt_ProjectCode.value))
        	{
        		this.gfnAddSendParameter("PROJECT_CODE", this.edt_ProjectCode.value);
        	}
        	/*매출계약구분*/
        	this.gfnAddSendParameter("MULTI_CONTRACT_TYPE_FLAG", "N");
        	if(!this.gfnIsEmpty(this.edt_ContractType.value))
        	{
        		var sParamContractType = this.edt_ContractType.value;
        		var arrContractType = sParamContractType.split(",");


        		if (arrContractType.length>0) {
        			this.gfnAddSendParameter("MULTI_CONTRACT_TYPE_FLAG", "Y");

        			this.dsInConTypeList.clearData();
        			for (var i=0; i<arrContractType.length; i++) {
        				var nRowIdx = this.dsInConTypeList.addRow();
        				this.dsInConTypeList.setColumn(nRowIdx, "CONTRACT_TYPE", arrContractType[i]);
        			}

        		} else {
        			this.gfnAddSendParameter("MULTI_CONTRACT_TYPE_FLAG", "N");
        			this.gfnAddSendParameter("CONTRACT_TYPE", this.edt_ContractType.value);
        		}
        	}
        	/*견적서여부*/
        	if(!this.gfnIsEmpty(this.parent.sEstimateFlag))
        	{
        		this.gfnAddSendParameter("ESTIMATE_FLAG", this.parent.sEstimateFlag);
        	}
        	/*견적서 계약구분*/
        	if(!this.gfnIsEmpty(this.parent.sEstimateContractType))
        	{
        		this.gfnAddSendParameter("ESTIMATE_CONTRACT_TYPE", this.parent.sEstimateContractType);
        	}
        	// 조회용 Input dataset 세팅
        	this.gfnAddInputDataset("dsInConTypeList", "dsConTypeList");

        	// 조회용 Output dataset 세팅
        	this.gfnAddOutputDataset("dsOutput", "dsOutput");
        	this.gfnCommonTransaction("Select", "CE_ContractSearch_S01", this.grd_ProjectSearch);
        }

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
        		if(strSvcID=="Select")
        		{
        			var nRowCnt = this.dsOutput.getRowCount();
        			if(nRowCnt > 0)
        			{
        				this.grd_ProjectSearch.setFocus();
        			}else{
        				this.div_search.form.edt_Name.setFocus();
        			}

        			if(this.hasOwnProperty("opener") && !this.gfnIsEmpty(this.opener))
        			{
        				if(this.opener.name == "COM_Search")
        				{
        				/* 1건 조회시 자동 선택후 창 닫히는것을 막음 (사업지원팀에서 원하지 않음)
        					if(nRowCnt == 1)
        					{
        						this.fnReturnOne(0);
        					}
        				*/
        				}
        			}

        		}
        	}
        }

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.comm_Click = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btn_Search":
        			this.fnSearch();
        			break;
        		case "btn_Confirm":
        			this.fnReturnOne(this.dsOutput.rowposition);
        			break;
        	}
        };

        this.grd_ProjectSearch_oncelldblclick = function(obj, e)
        {
        	this.fnReturnOne(e.row);
        };

        this.div_search_form_edt_Name_onkeydown = function(obj, e)
        {
        	if(e.keycode == 13)
        	{
        		this.fnSearch();
        	}
        };


        this.btn_Cancel_onclick = function(obj,e)
        {
        	this.commUtil.popupClose();
        };

        this.btn_Close_onclick = function(obj,e)
        {
        	this.commUtil.popupClose();
        };

        this.grd_ProjectSearch_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.fnReturnOne(this.dsOutput.rowposition);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CE_ProjectSearch_onload,this);
            this.btn_Close.addEventHandler("onclick",this.btn_Close_onclick,this);
            this.div_search.form.rdo_Search.addEventHandler("onitemchanged",this.rdo_PurchaseTyp_onitemchanged,this);
            this.div_search.form.rdo_Search.addEventHandler("canitemchange",this.rdo_Search_canitemchange,this);
            this.div_search.form.btn_Search.addEventHandler("onclick",this.comm_Click,this);
            this.div_search.form.edt_Name.addEventHandler("onkeydown",this.div_search_form_edt_Name_onkeydown,this);
            this.grd_ProjectSearch.addEventHandler("oncelldblclick",this.grd_ProjectSearch_oncelldblclick,this);
            this.grd_ProjectSearch.addEventHandler("onkeydown",this.grd_ProjectSearch_onkeydown,this);
            this.btn_Confirm.addEventHandler("onclick",this.comm_Click,this);
            this.edt_ProjectCode.addEventHandler("onkeydown",this.edt_Name_onkeydown,this);
            this.edt_ContractType.addEventHandler("onkeydown",this.edt_Name_onkeydown,this);
            this.edt_ClientCode.addEventHandler("onkeydown",this.edt_Name_onkeydown,this);
        };
        this.loadIncludeScript("CE_ProjectSearch.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
