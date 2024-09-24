(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AM_PackageMM");
            this.set_titletext("패키지관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,580);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_PackageInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"PI_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"PW\" type=\"STRING\" size=\"256\"/><Column id=\"RENEWAL_CYCLE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTRACT_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_PackageManager", this);
            obj._setContents("<ColumnInfo><Column id=\"PM_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"COMPANY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SERVICE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_CONTACT\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_MAIL\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"PI_SEQ\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_PackageContractDoc", this);
            obj._setContents("<ColumnInfo><Column id=\"PCD_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"DOC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_NO\" type=\"STRING\" size=\"256\"/><Column id=\"PI_SEQ\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_RenewalCycle", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1YEAR</Col><Col id=\"DATA\">1년</Col></Row><Row><Col id=\"CODE\">2YEAR</Col><Col id=\"DATA\">2년</Col></Row><Row><Col id=\"CODE\">PERMANENT</Col><Col id=\"DATA\">무기한</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ContractStatus", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">CONCLUDED</Col><Col id=\"DATA\">계약완료</Col></Row><Row><Col id=\"CODE\">EXPIRED</Col><Col id=\"DATA\">만료됨</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SearchContractStatus", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">ALL</Col><Col id=\"DATA\">전체보기</Col></Row><Row><Col id=\"CODE\">CONCLUDED</Col><Col id=\"DATA\">계약완료</Col></Row><Row><Col id=\"CODE\">EXPIRED</Col><Col id=\"DATA\">만료됨</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_PiPmJoinedExcel", this);
            obj._setContents("<ColumnInfo><Column id=\"PI_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"PI_SERVICE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"URL\" type=\"STRING\" size=\"256\"/><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"PW\" type=\"STRING\" size=\"256\"/><Column id=\"CONTRACT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"TERMINATION_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"RENEWAL_CYCLE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTRACT_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"PI_REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_NM\" type=\"STRING\" size=\"256\"/><Column id=\"PM_SERVICE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_CONTACT\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGER_MAIL\" type=\"STRING\" size=\"256\"/><Column id=\"PM_REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_PackageManagement","10","8",null,"40","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_WF_SchList");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Inquiry",null,"8","60","22","8",null,null,null,null,null,this.div_PackageManagement.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_SchText");
            this.div_PackageManagement.addChild(obj.name, obj);

            obj = new Static("stc_ContractStatus","12","8","48","22",null,null,null,null,null,null,this.div_PackageManagement.form);
            obj.set_taborder("1");
            obj.set_text("계약상태");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_visible("true");
            this.div_PackageManagement.addChild(obj.name, obj);

            obj = new Combo("cmb_ContractStatus","stc_ContractStatus:8","8","120","22",null,null,null,null,null,null,this.div_PackageManagement.form);
            obj.set_taborder("2");
            obj.set_visible("true");
            obj.set_innerdataset("ds_SearchContractStatus");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("DATA");
            obj.set_text("계약완료");
            obj.set_value("CONCLUDED");
            obj.set_index("0");
            this.div_PackageManagement.addChild(obj.name, obj);

            obj = new Static("stc_PackageName","cmb_ContractStatus:8","8","48","22",null,null,null,null,null,null,this.div_PackageManagement.form);
            obj.set_taborder("3");
            obj.set_text("패키지명");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_PackageManagement.addChild(obj.name, obj);

            obj = new Edit("edt_PackageName","stc_PackageName:8","8","334","22",null,null,null,null,null,null,this.div_PackageManagement.form);
            obj.set_taborder("4");
            this.div_PackageManagement.addChild(obj.name, obj);

            obj = new Button("btn_InfoExcelExport",null,"8","66","22","btn_Inquiry:8",null,null,null,null,null,this.div_PackageManagement.form);
            obj.set_taborder("5");
            obj.set_text("Excel");
            obj.set_cssclass("btn_WF_Excel");
            this.div_PackageManagement.addChild(obj.name, obj);

            obj = new Div("div_PackageInfoHeader","10","div_PackageManagement:10",null,"30","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("linear-gradient(to bottom,#f3f3f3,#d9d9d9)");
            obj.set_border("1px solid #c8c8c8");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ServerInfoText","10","7","95","16",null,null,null,null,null,null,this.div_PackageInfoHeader.form);
            obj.set_taborder("0");
            obj.set_text("패키지 정보");
            obj.set_cssclass("sta_POP_GroupTit");
            this.div_PackageInfoHeader.addChild(obj.name, obj);

            obj = new Button("btn_PackageInfoSave",null,"4","70","22","8",null,null,null,null,null,this.div_PackageInfoHeader.form);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_tran");
            this.div_PackageInfoHeader.addChild(obj.name, obj);

            obj = new Button("btn_PackageInfoDelete",null,"4","70","22","btn_PackageInfoSave:8",null,null,null,null,null,this.div_PackageInfoHeader.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            this.div_PackageInfoHeader.addChild(obj.name, obj);

            obj = new Button("btn_PackageInfoAdd",null,"4","70","22","btn_PackageInfoDelete:8",null,null,null,null,null,this.div_PackageInfoHeader.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            this.div_PackageInfoHeader.addChild(obj.name, obj);

            obj = new Tab("tab_Sub","10",null,null,"300","10","10",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tpg_PackageManager",this.tab_Sub);
            obj.set_text("관리자 명단");
            this.tab_Sub.addChild(obj.name, obj);

            obj = new Div("div_PackageManagerHeader","0","0",null,"30","0",null,null,null,null,null,this.tab_Sub.tpg_PackageManager.form);
            obj.set_taborder("0");
            obj.set_background("linear-gradient(to bottom,#f3f3f3,#d9d9d9)");
            obj.set_border("1px solid #c8c8c8");
            this.tab_Sub.tpg_PackageManager.addChild(obj.name, obj);

            obj = new Static("stc_ServerInfoText","10","7","95","16",null,null,null,null,null,null,this.tab_Sub.tpg_PackageManager.form.div_PackageManagerHeader.form);
            obj.set_taborder("0");
            obj.set_text("관리자 정보");
            obj.set_cssclass("sta_POP_GroupTit");
            this.tab_Sub.tpg_PackageManager.form.div_PackageManagerHeader.addChild(obj.name, obj);

            obj = new Button("btn_PackageManagerSave",null,"4","70","22","8",null,null,null,null,null,this.tab_Sub.tpg_PackageManager.form.div_PackageManagerHeader.form);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_tran");
            this.tab_Sub.tpg_PackageManager.form.div_PackageManagerHeader.addChild(obj.name, obj);

            obj = new Button("btn_PackageManagerDelete",null,"4","70","22","btn_PackageManagerSave:8",null,null,null,null,null,this.tab_Sub.tpg_PackageManager.form.div_PackageManagerHeader.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            this.tab_Sub.tpg_PackageManager.form.div_PackageManagerHeader.addChild(obj.name, obj);

            obj = new Button("btn_PackageManagerAdd",null,"4","70","22","btn_PackageManagerDelete:8",null,null,null,null,null,this.tab_Sub.tpg_PackageManager.form.div_PackageManagerHeader.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            this.tab_Sub.tpg_PackageManager.form.div_PackageManagerHeader.addChild(obj.name, obj);

            obj = new Grid("grd_PackageManger","0","div_PackageManagerHeader:0",null,null,"0","0",null,null,null,null,this.tab_Sub.tpg_PackageManager.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_PackageManager");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"회사명\"/><Cell col=\"1\" rowspan=\"2\" text=\"서비스명\"/><Cell col=\"2\" colspan=\"3\" text=\"관리자 정보\"/><Cell col=\"5\" rowspan=\"2\" text=\"비고\"/><Cell row=\"1\" col=\"2\" text=\"이름\"/><Cell row=\"1\" col=\"3\" text=\"연락처\"/><Cell row=\"1\" col=\"4\" text=\"이메일\"/></Band><Band id=\"body\"><Cell text=\"bind:COMPANY_NM\" textAlign=\"left\" edittype=\"text\"/><Cell col=\"1\" text=\"bind:SERVICE_NM\" textAlign=\"left\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:MANAGER_NM\" textAlign=\"left\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:MANAGER_CONTACT\" textAlign=\"left\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:MANAGER_MAIL\" textAlign=\"left\" edittype=\"text\"/><Cell col=\"5\" text=\"bind:REMARK\" textAlign=\"left\" edittype=\"text\"/></Band></Format></Formats>");
            this.tab_Sub.tpg_PackageManager.addChild(obj.name, obj);

            obj = new Tabpage("tpg_PackageContractDoc",this.tab_Sub);
            obj.set_text("관련 결재 문서");
            this.tab_Sub.addChild(obj.name, obj);

            obj = new Div("div_PackageContractDocHeader","0","0",null,"30","0",null,null,null,null,null,this.tab_Sub.tpg_PackageContractDoc.form);
            obj.set_taborder("1");
            obj.set_background("linear-gradient(to bottom,#f3f3f3,#d9d9d9)");
            obj.set_border("1px solid #c8c8c8");
            this.tab_Sub.tpg_PackageContractDoc.addChild(obj.name, obj);

            obj = new Static("stc_PackageContractDocText","10","7","150","14",null,null,null,null,null,null,this.tab_Sub.tpg_PackageContractDoc.form.div_PackageContractDocHeader.form);
            obj.set_taborder("0");
            obj.set_text("관련 결재 문서 목록");
            obj.set_cssclass("sta_POP_GroupTit");
            this.tab_Sub.tpg_PackageContractDoc.form.div_PackageContractDocHeader.addChild(obj.name, obj);

            obj = new Button("btn_PackageContractDocSave",null,"4","70","22","8",null,null,null,null,null,this.tab_Sub.tpg_PackageContractDoc.form.div_PackageContractDocHeader.form);
            obj.set_taborder("3");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_tran");
            this.tab_Sub.tpg_PackageContractDoc.form.div_PackageContractDocHeader.addChild(obj.name, obj);

            obj = new Button("btn_PackageContractDocDelete",null,"4","70","22","btn_PackageContractDocSave:8",null,null,null,null,null,this.tab_Sub.tpg_PackageContractDoc.form.div_PackageContractDocHeader.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            this.tab_Sub.tpg_PackageContractDoc.form.div_PackageContractDocHeader.addChild(obj.name, obj);

            obj = new Button("btn_PackageContractDocAdd",null,"4","70","22","btn_PackageContractDocDelete:8",null,null,null,null,null,this.tab_Sub.tpg_PackageContractDoc.form.div_PackageContractDocHeader.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            this.tab_Sub.tpg_PackageContractDoc.form.div_PackageContractDocHeader.addChild(obj.name, obj);

            obj = new Button("btn_DocExcelExport",null,"4","66","22","btn_PackageContractDocAdd:8",null,null,null,null,null,this.tab_Sub.tpg_PackageContractDoc.form.div_PackageContractDocHeader.form);
            obj.set_taborder("4");
            obj.set_text("Excel");
            obj.set_cssclass("btn_WF_Excel");
            this.tab_Sub.tpg_PackageContractDoc.form.div_PackageContractDocHeader.addChild(obj.name, obj);

            obj = new Grid("grd_PackageContractDoc","0","div_PackageContractDocHeader:-0",null,null,"0","0",null,null,null,null,this.tab_Sub.tpg_PackageContractDoc.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_PackageContractDoc");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"350\"/><Column size=\"700\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"패키지명\"/><Cell col=\"1\" text=\"문서 명\"/><Cell col=\"2\"/></Band><Band id=\"body\"><Cell text=\"bind:NAME\" displaytype=\"normal\"/><Cell col=\"1\" text=\"bind:DOC_NO\" edittype=\"text\"/><Cell col=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"결재 문서 보기\"/></Band></Format></Formats>");
            this.tab_Sub.tpg_PackageContractDoc.addChild(obj.name, obj);

            obj = new Grid("grd_PackageInfo","10","div_PackageInfoHeader:0",null,null,"10","tab_Sub:15",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_PackageInfo");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"200\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"패키지명\"/><Cell col=\"1\" rowspan=\"2\" text=\"서비스명\"/><Cell col=\"2\" colspan=\"3\" text=\"접속 정보\"/><Cell col=\"5\" rowspan=\"2\" text=\"갱신 주기\"/><Cell col=\"6\" rowspan=\"2\" text=\"계약 상태\"/><Cell col=\"7\" rowspan=\"2\" text=\"비고\"/><Cell row=\"1\" col=\"2\" text=\"URL\"/><Cell row=\"1\" col=\"3\" text=\"ID\"/><Cell row=\"1\" col=\"4\" text=\"PW\"/></Band><Band id=\"body\"><Cell text=\"bind:NAME\" textAlign=\"left\" edittype=\"text\"/><Cell col=\"1\" textAlign=\"left\" text=\"bind:SERVICE_NM\" edittype=\"text\"/><Cell col=\"2\" text=\"bind:URL\" textAlign=\"left\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:ID\" textAlign=\"left\" edittype=\"text\"/><Cell col=\"4\" text=\"bind:PW\" textAlign=\"left\" edittype=\"text\"/><Cell col=\"5\" text=\"bind:RENEWAL_CYCLE\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_RenewalCycle\" combocodecol=\"CODE\" combodatacol=\"DATA\"/><Cell col=\"6\" text=\"bind:CONTRACT_STATUS\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_ContractStatus\" combocodecol=\"CODE\" combodatacol=\"DATA\"/><Cell col=\"7\" text=\"bind:REMARK\" textAlign=\"left\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_PiPmJoinExcel","0","630",null,"500","16",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_PiPmJoinedExcel");
            obj.set_visible("false");
            obj.set_autofittype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"250\"/><Column size=\"250\"/><Column size=\"250\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"250\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"250\"/><Column size=\"250\"/><Column size=\"250\"/><Column size=\"250\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"패키지 명\"/><Cell col=\"1\" rowspan=\"2\" text=\"서비스 명\"/><Cell col=\"2\" colspan=\"3\" text=\"접속 정보\"/><Cell col=\"5\" rowspan=\"2\" text=\"갱신 주기\"/><Cell col=\"6\" rowspan=\"2\" text=\"계약 상태\"/><Cell col=\"7\" rowspan=\"2\" text=\"패키지 비고\"/><Cell col=\"8\" rowspan=\"2\" text=\"회사명\"/><Cell col=\"9\" rowspan=\"2\" text=\"서비스명\"/><Cell col=\"10\" colspan=\"3\" text=\"관리자 정보\"/><Cell col=\"13\" rowspan=\"2\" text=\"관리자 비고\"/><Cell row=\"1\" col=\"2\" text=\"URL\"/><Cell row=\"1\" col=\"3\" text=\"ID\"/><Cell row=\"1\" col=\"4\" text=\"PW\"/><Cell row=\"1\" col=\"10\" text=\"이름\"/><Cell row=\"1\" col=\"11\" text=\"연락처\"/><Cell row=\"1\" col=\"12\" text=\"메일\"/></Band><Band id=\"body\"><Cell text=\"bind:NAME\" textAlign=\"left\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:PI_SERVICE_NM\" textAlign=\"left\" suppress=\"1\"/><Cell col=\"2\" text=\"bind:URL\" textAlign=\"left\" suppress=\"1\" wordWrap=\"char\"/><Cell col=\"3\" text=\"bind:ID\" textAlign=\"left\" suppress=\"1\"/><Cell col=\"4\" text=\"bind:PW\" textAlign=\"left\" suppress=\"1\"/><Cell col=\"5\" text=\"bind:RENEWAL_CYCLE\" textAlign=\"center\" edittype=\"combo\" displaytype=\"combotext\" combodataset=\"ds_RenewalCycle\" combocodecol=\"CODE\" combodatacol=\"DATA\"/><Cell col=\"6\" text=\"bind:CONTRACT_STATUS\" textAlign=\"center\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_ContractStatus\" combocodecol=\"CODE\" combodatacol=\"DATA\"/><Cell col=\"7\" text=\"bind:PI_REMARK\" textAlign=\"left\"/><Cell col=\"8\" text=\"bind:COMPANY_NM\" textAlign=\"left\"/><Cell col=\"9\" text=\"bind:PM_SERVICE_NM\" textAlign=\"left\"/><Cell col=\"10\" text=\"bind:MANAGER_NM\" textAlign=\"left\"/><Cell col=\"11\" text=\"bind:MANAGER_CONTACT\" textAlign=\"left\"/><Cell col=\"12\" text=\"bind:MANAGER_MAIL\" textAlign=\"left\"/><Cell col=\"13\" text=\"bind:PM_REMARK\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_PackageContractDocExcel","1358","172","654","390",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_visible("false");
            obj.set_binddataset("ds_PackageContractDoc");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"400\"/><Column size=\"400\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"패키지명\"/><Cell col=\"1\" text=\"문서 명\"/></Band><Band id=\"body\"><Cell text=\"bind:NAME\"/><Cell col=\"1\" text=\"bind:DOC_NO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_PackageManagement.form
            obj = new Layout("default","",0,0,this.div_PackageManagement.form,function(p){});
            this.div_PackageManagement.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_PackageInfoHeader.form
            obj = new Layout("default","",0,0,this.div_PackageInfoHeader.form,function(p){});
            this.div_PackageInfoHeader.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_Sub.tpg_PackageManager.form.div_PackageManagerHeader.form
            obj = new Layout("default","",0,0,this.tab_Sub.tpg_PackageManager.form.div_PackageManagerHeader.form,function(p){});
            this.tab_Sub.tpg_PackageManager.form.div_PackageManagerHeader.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_Sub.tpg_PackageManager.form
            obj = new Layout("default","",0,0,this.tab_Sub.tpg_PackageManager.form,function(p){});
            this.tab_Sub.tpg_PackageManager.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_Sub.tpg_PackageContractDoc.form.div_PackageContractDocHeader.form
            obj = new Layout("default","",0,0,this.tab_Sub.tpg_PackageContractDoc.form.div_PackageContractDocHeader.form,function(p){});
            this.tab_Sub.tpg_PackageContractDoc.form.div_PackageContractDocHeader.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_Sub.tpg_PackageContractDoc.form
            obj = new Layout("default","",0,0,this.tab_Sub.tpg_PackageContractDoc.form,function(p){});
            this.tab_Sub.tpg_PackageContractDoc.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,580,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("AM_PackageMM.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("AM_PackageMM.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("AM_PackageMM.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("AM_PackageMM.xfdl","Script::CommGrid.xjs");
        this.registerScript("AM_PackageMM.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 : 패키지 관리
        * 02. 화면명   : 패키지 관리(AM_PackageMM)
        * 03. 화면설명 : 패키지관리 화면
        * 04. 작성일   : 2023/06/23
        * 05. 작성자   : 이상원
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

        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/
        this.AM_PackageMM_onload = function(obj,e)
        {
        	this.gfnCompInit(obj);	//사용자 Grid
        	this.fnInit();
        };

        this.nPiSeq=0;
        this.nPmSeq=0;
        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        //페이지 초기화 세팅
        this.fnInit = function () {
        	this.div_PackageManagement.form.edt_PackageName.value = "";
        	this.ds_PackageInfo.clearData();
        	this.ds_PackageManager.clearData();
        	this.ds_PackageContractDoc.clearData();
        	this.fnPackageInfoSelect();
        }

        //Excel Export
        this.fn_export = function(grid)
        {
        	this.gfn_excelExport(this, grid);
        };

        //PackageInfo (패키지 정보) 조회
        this.fnPackageInfoSelect = function ()
        {
        	// 계약 상태 검색 조건값 셋팅
        	var sContractStatus = this.div_PackageManagement.form.cmb_ContractStatus.value;
        	this.gfnAddSendParameter("CONTRACT_STATUS", sContractStatus);

        	// 패키지명 검색 조건값 셋팅
        	var sPackageName = this.div_PackageManagement.form.edt_PackageName.value;
        	this.gfnAddSendParameter("PACKAGE_NAME", sPackageName);

        	this.gfnAddOutputDataset("ds_PackageInfo","ds_PackageInfo");
        	this.gfnCommonTransaction("PackageInfoSelect", "AM_PackageInfo_S01");
        };

        //PackageInfo (패키지 정보) 저장
        this.fnPackageInfoSave = function ()
        {
        	if(this.fnPackageInfoValidation() == true) {
        		this.gfnAddInputDataset("ds_PackageInfo","ds_PackageInfo");
        		this.gfnCommonTransaction("PackageInfoSave", "AM_PackageInfo_R01");
        	}
        };

        //엑셀 출력을 위한 PackageInfo, PackageManager (패키지 정보 + 관리자 명단) 조회
        this.fnPackageInfoManagerJoinSelect = function ()
        {
        	// 계약 상태 검색 조건값 셋팅
        	var sContractStatus = this.div_PackageManagement.form.cmb_ContractStatus.value;
        	this.gfnAddSendParameter("CONTRACT_STATUS", sContractStatus);

        	// 패키지명 검색 조건값 셋팅
        	var sPackageName = this.div_PackageManagement.form.edt_PackageName.value;
        	this.gfnAddSendParameter("PACKAGE_NAME", sPackageName);

        	this.gfnAddOutputDataset("ds_PiPmJoinedExcel","ds_PiPmJoinedExcel");
        	this.gfnCommonTransaction("PackageInfoManagerJoinSelect", "AM_PackageInfo_S02");
        };

        //PackageManager(관리자 명단) 조회
        this.fnPackageManagerSelect = function ()
        {
        	this.gfnAddSendParameter("PI_SEQ", this.nPiSeq);
        	this.gfnAddOutputDataset("ds_PackageManager","ds_PackageManager");
        	this.gfnCommonTransaction("PackageManagerSelect", "AM_PackageManager_S01");
        };

        //PackageManager(관리자 명단) 저장
        this.fnPackageManagerSave = function ()
        {
        	if(this.fnPackageManagerValidation()==true){
        		this.gfnAddInputDataset("ds_PackageManager","ds_PackageManager");
        		this.gfnCommonTransaction("PackageManagerSave", "AM_PackageManager_R01");
        	}
        };

        //PackageContractDoc(관련 결재 문서) 조회
        this.fnPackageContractDocSelect = function ()
        {
        	this.gfnAddSendParameter("PI_SEQ", this.nPiSeq);
        	this.gfnAddOutputDataset("ds_PackageContractDoc","ds_PackageContractDoc");
        	this.gfnCommonTransaction("PackageContractDocSelect", "AM_PackageContractDoc_S01");
        };

        //PackageContractDoc(관련 결재 문서) 저장
        this.fnPackageContractDocSave = function ()
        {
        	if(this.fnPackageContractDocrValidation() == true) {
        		this.gfnAddInputDataset("ds_PackageContractDoc","ds_PackageContractDoc");
        		this.gfnCommonTransaction("PackageContractDocSave", "AM_PackageContractDoc_R01");
        	}
        };

        /*
         *	유효성 체크 함수
         */
        this.fnPackageInfoValidation = function ()
        {
        	for(var i = 0; i < this.ds_PackageInfo.rowcount; i++)
        	{
        		if(this.gfnIsEmpty(this.ds_PackageInfo.getColumn(i, "NAME"))) { alert("패키지명은 필수 입력 항목입니다."); this.grd_PackageInfo.setCellPos(0, i); this.grd_PackageInfo.showEditor(true); return false;}
        		else if(this.gfnIsEmpty(this.ds_PackageInfo.getColumn(i, "SERVICE_NM"))) { alert("서비스명은 필수 입력 항목입니다."); this.grd_PackageInfo.setCellPos(1, i); this.grd_PackageInfo.showEditor(true); return false;}
        		else if(this.gfnIsEmpty(this.ds_PackageInfo.getColumn(i, "CONTRACT_STATUS"))) { alert("계약 상태는 필수 입력 항목입니다."); this.grd_PackageInfo.setCellPos(6, i); this.grd_PackageInfo.showEditor(true); return false;}
        	}
        	return true;
        };

        this.fnPackageManagerValidation = function ()
        {
        	for(var i = 0; i < this.ds_PackageManager.rowcount; i++)
        	{
        		if(this.gfnIsEmpty(this.ds_PackageInfo.getColumn(this.ds_PackageInfo.rowposition, "PI_SEQ"))) { alert("패키지를 먼저 등록해주세요."); return false;}
        		else if(this.gfnIsEmpty(this.ds_PackageManager.getColumn(i, "COMPANY_NM"))) { alert("회사명은 필수 입력 항목입니다."); this.tab_Sub.tpg_PackageManager.form.grd_PackageManger.setCellPos(0, i); this.tab_Sub.tpg_PackageManager.form.grd_PackageManger.showEditor(true); return false;}
        		else if(this.gfnIsEmpty(this.ds_PackageManager.getColumn(i, "SERVICE_NM"))) { alert("관리서비스는 필수 입력 항목입니다."); this.tab_Sub.tpg_PackageManager.form.grd_PackageManger.setCellPos(1, i); this.tab_Sub.tpg_PackageManager.form.grd_PackageManger.showEditor(true); return false;}
        		else if(this.gfnIsEmpty(this.ds_PackageManager.getColumn(i, "MANAGER_NM"))) { alert("관리자명은 필수 입력 항목입니다."); this.tab_Sub.tpg_PackageManager.form.grd_PackageManger.setCellPos(2, i); this.tab_Sub.tpg_PackageManager.form.grd_PackageManger.showEditor(true); return false;}
        		else if(this.gfnIsEmpty(this.ds_PackageManager.getColumn(i, "MANAGER_CONTACT"))) { alert("연락처는 필수 입력 항목입니다."); this.tab_Sub.tpg_PackageManager.form.grd_PackageManger.setCellPos(3, i); this.tab_Sub.tpg_PackageManager.form.grd_PackageManger.showEditor(true); return false;}
        	}
        	return true;
        };

        this.fnPackageContractDocrValidation = function ()
        {
        	for(var i = 0; i < this.ds_PackageContractDoc.rowcount; i++)
        	{
        		if(this.gfnIsEmpty(this.ds_PackageInfo.getColumn(this.ds_PackageInfo.rowposition, "PI_SEQ"))) { alert("패키지를 먼저 등록해주세요."); return false;}
        		else if(this.gfnIsEmpty(this.ds_PackageContractDoc.getColumn(i, "DOC_NO"))) { alert("문서 명은 필수 입력 항목입니다."); this.tab_Sub.tpg_PackageContractDoc.form.grd_PackageContractDoc.setCellPos(1, i); this.tab_Sub.tpg_PackageContractDoc.form.grd_PackageContractDoc.showEditor(true); return false;}
        	}
        	return true;
        };

        //콜백 함수
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
        		if(strSvcID == "PackageInfoSelect")
        		{
        			this.fnPackageInfoManagerJoinSelect();
        			this.fnPackageManagerSelect();
        			this.fnPackageContractDocSelect();
        		}
        		else if(strSvcID == "PackageInfoSave")
        		{
        			this.fnPackageInfoSelect();
        		}
        		else if(strSvcID == "PackageInfoManagerJoinSelect")
        		{
        		}
        		else if (strSvcID == "PackageManagerSelect")
        		{
        		}
        		else if (strSvcID == "PackageManagerSave")
        		{
        			this.fnPackageManagerSelect();

        		}
        		else if (strSvcID == "PackageContractDocSelect")
        		{
        		}
        		else if (strSvcID == "PackageContractDocSave")
        		{
        			this.fnPackageContractDocSelect();
        		}
        	}
        }
        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.common_add_onclick = function(obj,e)
        {
        	switch(obj.name) {
        		case "btn_PackageInfoAdd" :			//패키지 정보 추가
        			var nRow = this.ds_PackageInfo.addRow();
        			this.ds_PackageInfo.setColumn(nRow,"REMARK",""); 		//ntext를 위한 초기값 설정
        			break;
        		case "btn_PackageManagerAdd" :		//관리자 명단 추가
        			if(this.gfnIsEmpty(this.nPiSeq) == true) {
        				alert("패키지를 먼저 추가/저장해주세요.");
        			} else {
        				var nRow = this.ds_PackageManager.addRow();
        				this.ds_PackageManager.setColumn(nRow,"PI_SEQ",this.nPiSeq);
        				this.ds_PackageManager.setColumn(nRow,"REMARK",""); 		//ntext를 위한 초기값 설정
        			}
        			break;
        		case "btn_PackageContractDocAdd" :		//관련 결재 문서 추가
        			if(this.gfnIsEmpty(this.nPiSeq) == true) {
        				alert("패키지를 먼저 추가/저장해주세요.");
        			} else {
        				var nRow = this.ds_PackageContractDoc.addRow();
        				this.ds_PackageContractDoc.setColumn(nRow,"PI_SEQ",this.nPiSeq);
        			}
        			break;
        		default :
        			break;
        	}
        };

        this.common_delete_onclick = function(obj,e)
        {
        	switch(obj.name) {
        		case "btn_PackageInfoDelete" :		//패키지 정보 삭제
        			this.ds_PackageInfo.deleteRow(this.ds_PackageInfo.rowposition);
        			break;
        		case "btn_PackageManagerDelete" :		//관리자 명단 삭제
        			this.ds_PackageManager.deleteRow(this.ds_PackageManager.rowposition);
        			break;
        		case "btn_PackageContractDocDelete" :		//관련 결재 문서 삭제
        			this.ds_PackageContractDoc.deleteRow(this.ds_PackageContractDoc.rowposition);
        			break;
        		default :
        			break;
        	}
        };

        this.common_save_onclick = function(obj,e)
        {
        	switch(obj.name) {
        		case "btn_PackageInfoSave" :		//패키지 정보 저장
        			this.fnPackageInfoSave();
        			break;
        		case "btn_PackageManagerSave" :			//관리자 명단 저장
        			this.fnPackageManagerSave();
        			break;
        		case "btn_PackageContractDocSave" :			//관련 결재 문서 저장
        			this.fnPackageContractDocSave();
        			break;
        		default :
        			break;
        	}
        };

        //검색조건에 따라 조회
        this.comm_select_onclick = function(obj,e)
        {
        	this.fnPackageInfoSelect();
        };

        //엑셀 출력
        this.comm_Exel_Click = function(obj,e)
        {
        	switch(obj.name) {
        	case "btn_InfoExcelExport" :
        		this.fn_export(this.grd_PiPmJoinExcel);
        		break;
        	case "btn_DocExcelExport" :
        		this.fn_export(this.grd_PackageContractDocExcel);
        		break;
        	default:
        		break;
        	}
        };

        this.ds_PackageInfo_onrowposchanged = function(obj,e)
        {
        	this.nPiSeq=this.ds_PackageInfo.getColumn(this.ds_PackageInfo.rowposition,"PI_SEQ");
        	this.fnPackageManagerSelect();
        	this.fnPackageContractDocSelect();
        };

        //결재문서 상세 보기(새 탭)
        this.tab_Sub_tpg_PackageContractDoc_grd_PackageContractDoc_oncellclick = function(obj,e)
        {
        	if(e.col == 2)
        	{
        		var nRow = e.row;
        		this.fnDocOpen(nRow);
        	}
        };

        /************************************************************************************************
        * 팝업 TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        // 전자결재 문서 보기
        this.fnDocOpen = function(nRow)
        {
        	var sDocNo = this.ds_PackageContractDoc.getColumn(nRow, "DOC_NO");
        	var sDocId = this.ds_PackageContractDoc.getColumn(nRow, "DOC_ID");
        	var sFormId = this.ds_PackageContractDoc.getColumn(nRow, "FORM_ID");

        	if (this.gfnIsEmpty(sFormId))
        	{
        		// 구문서
        		system.execBrowser("http://gw.tobesoft.com/Ea/EADocPop/EAAppDocMigPop/?ace_auth=1&doc_id="+sDocId);
        	}
        	else
        	{
        		// 신문서
        		system.execBrowser("http://gw.tobesoft.com/Ea/EADocPop/EAAppDocViewPop/?doc_auth=0&doc_id="+sDocId+"&form_id="+sFormId);
        	}
        };
        /************************************************************************************************
        * 팝업 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.AM_PackageMM_onload,this);
            this.div_PackageManagement.form.btn_Inquiry.addEventHandler("onclick",this.comm_select_onclick,this);
            this.div_PackageManagement.form.btn_InfoExcelExport.addEventHandler("onclick",this.comm_Exel_Click,this);
            this.div_PackageInfoHeader.form.btn_PackageInfoSave.addEventHandler("onclick",this.common_save_onclick,this);
            this.div_PackageInfoHeader.form.btn_PackageInfoDelete.addEventHandler("onclick",this.common_delete_onclick,this);
            this.div_PackageInfoHeader.form.btn_PackageInfoAdd.addEventHandler("onclick",this.common_add_onclick,this);
            this.tab_Sub.addEventHandler("onchanged",this.Tab00_onchanged,this);
            this.tab_Sub.tpg_PackageManager.form.div_PackageManagerHeader.form.stc_ServerInfoText.addEventHandler("onclick",this.Tab00_tpg_PackageManager_divPackageInfoHeader_stc_ServerInfoText_onclick,this);
            this.tab_Sub.tpg_PackageManager.form.div_PackageManagerHeader.form.btn_PackageManagerSave.addEventHandler("onclick",this.common_save_onclick,this);
            this.tab_Sub.tpg_PackageManager.form.div_PackageManagerHeader.form.btn_PackageManagerDelete.addEventHandler("onclick",this.common_delete_onclick,this);
            this.tab_Sub.tpg_PackageManager.form.div_PackageManagerHeader.form.btn_PackageManagerAdd.addEventHandler("onclick",this.common_add_onclick,this);
            this.tab_Sub.tpg_PackageContractDoc.form.div_PackageContractDocHeader.form.stc_PackageContractDocText.addEventHandler("onclick",this.Tab00_tpg_PackageManager_divPackageInfoHeader_stc_ServerInfoText_onclick,this);
            this.tab_Sub.tpg_PackageContractDoc.form.div_PackageContractDocHeader.form.btn_PackageContractDocSave.addEventHandler("onclick",this.common_save_onclick,this);
            this.tab_Sub.tpg_PackageContractDoc.form.div_PackageContractDocHeader.form.btn_PackageContractDocDelete.addEventHandler("onclick",this.common_delete_onclick,this);
            this.tab_Sub.tpg_PackageContractDoc.form.div_PackageContractDocHeader.form.btn_PackageContractDocAdd.addEventHandler("onclick",this.common_add_onclick,this);
            this.tab_Sub.tpg_PackageContractDoc.form.div_PackageContractDocHeader.form.btn_DocExcelExport.addEventHandler("onclick",this.comm_Exel_Click,this);
            this.tab_Sub.tpg_PackageContractDoc.form.grd_PackageContractDoc.addEventHandler("oncellclick",this.tab_Sub_tpg_PackageContractDoc_grd_PackageContractDoc_oncellclick,this);
            this.ds_PackageInfo.addEventHandler("cancolumnchange",this.ds_PackageInfo_cancolumnchange,this);
            this.ds_PackageInfo.addEventHandler("onrowposchanged",this.ds_PackageInfo_onrowposchanged,this);
        };
        this.loadIncludeScript("AM_PackageMM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
