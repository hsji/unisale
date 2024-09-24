(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SC_CompanyMM");
            this.set_titletext("회사정보관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1290,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOutput", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CODE\" type=\"STRING\" size=\"20\"/><Column id=\"COMPANY_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"TAG\" type=\"STRING\" size=\"200\"/><Column id=\"CLIENT_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"COMPANY_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"TMP_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"BLACKLIST_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"NATION_CODE\" type=\"STRING\" size=\"20\"/><Column id=\"BUSINESS_SCALE\" type=\"STRING\" size=\"20\"/><Column id=\"L_CATEGORY\" type=\"STRING\" size=\"20\"/><Column id=\"M_CATEGORY\" type=\"STRING\" size=\"20\"/><Column id=\"COMPANY_REG_NO\" type=\"STRING\" size=\"20\"/><Column id=\"CORPORATE_REG_NO\" type=\"STRING\" size=\"30\"/><Column id=\"INCORPORATION_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"CEO_NAME\" type=\"STRING\" size=\"30\"/><Column id=\"CEO_PHONE\" type=\"STRING\" size=\"20\"/><Column id=\"POST_NO\" type=\"STRING\" size=\"8\"/><Column id=\"POST_ADDR\" type=\"STRING\" size=\"100\"/><Column id=\"DETAIL_ADDR\" type=\"STRING\" size=\"100\"/><Column id=\"PHONE_NO\" type=\"STRING\" size=\"20\"/><Column id=\"FAX_NO\" type=\"STRING\" size=\"20\"/><Column id=\"BUSINESS_FORM\" type=\"STRING\" size=\"20\"/><Column id=\"BUSINESS_KIND\" type=\"STRING\" size=\"20\"/><Column id=\"PURCHASE_COMPANY_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"PRODUCT_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"SI_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"SOLUTION_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"GOODS_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"PARTNER_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"PARTNER_KIND\" type=\"STRING\" size=\"20\"/><Column id=\"COMPANY_STATE\" type=\"STRING\" size=\"20\"/><Column id=\"COMPANY_KIND\" type=\"STRING\" size=\"20\"/><Column id=\"BANK_CODE\" type=\"STRING\" size=\"20\"/><Column id=\"ACCOUNT_NO\" type=\"STRING\" size=\"30\"/><Column id=\"ACCOUNT_NAME\" type=\"STRING\" size=\"50\"/><Column id=\"SI_VIEW_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"COLLECTION_BOND_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"CL_APPROVAL_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"CL_ASSET\" type=\"BIGDECIMAL\" size=\"53\"/><Column id=\"CL_EMP_NUMBER\" type=\"INT\" size=\"10\"/><Column id=\"CL_APPROVAL_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"CL_CAPITAL\" type=\"BIGDECIMAL\" size=\"53\"/><Column id=\"CL_OPINION\" type=\"STRING\" size=\"20\"/><Column id=\"CL_PS\" type=\"BIGDECIMAL\" size=\"53\"/><Column id=\"CL_ANNUAL_SALES\" type=\"BIGDECIMAL\" size=\"53\"/><Column id=\"CL_SI\" type=\"BIGDECIMAL\" size=\"53\"/><Column id=\"CL_NET_INCOME\" type=\"BIGDECIMAL\" size=\"53\"/><Column id=\"CL_EVALUATION\" type=\"INT\" size=\"10\"/><Column id=\"CL_LISTED_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"CL_EXCEPTION_CODE\" type=\"STRING\" size=\"20\"/><Column id=\"CL_ADD_SCORE1\" type=\"STRING\" size=\"20\"/><Column id=\"CL_ADD_SCORE2\" type=\"STRING\" size=\"20\"/><Column id=\"CL_ADD_SCORE3\" type=\"STRING\" size=\"20\"/><Column id=\"REMARKS\" type=\"STRING\" size=\"32767\"/><Column id=\"DELETE_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"INSERT_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"INSERT_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"INSERT_DEPT_CD\" type=\"STRING\" size=\"60\"/><Column id=\"INSERT_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"INSERT_MODEL\" type=\"STRING\" size=\"100\"/><Column id=\"UPDATE_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"UPDATE_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"UPDATE_DEPT_CD\" type=\"STRING\" size=\"60\"/><Column id=\"UPDATE_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"UPDATE_MODEL\" type=\"STRING\" size=\"100\"/><Column id=\"PROJECT_COUNT\" type=\"STRING\" size=\"255\"/><Column id=\"GENUINE_CONTRACT_OF_SALES\" type=\"STRING\" size=\"255\"/><Column id=\"PROVISIONAL_CONTRACT_OF_SALES\" type=\"STRING\" size=\"255\"/><Column id=\"GENUINE_CONTRACT_OF_PURCHASE\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_BUSINESS_FORM", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_BUSINESS_KIND", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_L_CATEGORY", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsProject", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRealContract", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CLIENT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONTRACT_COMPANY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONTRACT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFakeContract", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CLIENT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONTRACT_COMPANY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONTRACT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRealPurchase", this);
            obj._setContents("<ColumnInfo><Column id=\"PROJECT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"PROJECT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CLIENT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONTRACT_COMPANY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"CONTRACT_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SelectType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"256\" type=\"STRING\"/><Column id=\"CAPTION\" size=\"256\" type=\"STRING\"/><Column id=\"CAPTION_JAP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">ALL</Col><Col id=\"CAPTION\">전체</Col><Col id=\"CAPTION_JAP\">全体</Col></Row><Row><Col id=\"CODE\">CLIENT</Col><Col id=\"CAPTION\">고객사</Col><Col id=\"CAPTION_JAP\">パートナ社</Col></Row><Row><Col id=\"CODE\">COMPANY</Col><Col id=\"CAPTION\">협력사</Col><Col id=\"CAPTION_JAP\">パートナー社</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_Project_Management","0","0",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_WF_Search");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("stc_CompanyType","0","12","93","24",null,null,null,null,null,null,this.div_Project_Management.form);
            obj.set_taborder("5");
            obj.set_text("회사구분");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.getSetter("TL_SEQ").set("836");
            this.div_Project_Management.addChild(obj.name, obj);

            obj = new Combo("cmb_SelectType","stc_CompanyType:0","12","111","24",null,null,null,null,null,null,this.div_Project_Management.form);
            obj.set_taborder("6");
            obj.set_innerdataset("ds_SelectType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.getSetter("TL_FLAG").set("1");
            obj.set_value("A");
            obj.set_index("0");
            this.div_Project_Management.addChild(obj.name, obj);

            obj = new Static("stc_ClientName","cmb_SelectType:0.00","12","73","24",null,null,null,null,null,null,this.div_Project_Management.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_text("회사");
            obj.getSetter("TL_SEQ").set("73");
            this.div_Project_Management.addChild(obj.name, obj);

            obj = new Edit("edt_ClientName","stc_ClientName:0","12","212","24",null,null,null,null,null,null,this.div_Project_Management.form);
            obj.set_taborder("1");
            this.div_Project_Management.addChild(obj.name, obj);

            obj = new CheckBox("chb_Inquiry","edt_ClientName:30","12","67","24",null,null,null,null,null,null,this.div_Project_Management.form);
            obj.set_taborder("2");
            obj.set_text("가 조회");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.getSetter("TL_SEQ").set("2271");
            this.div_Project_Management.addChild(obj.name, obj);

            obj = new Button("btn_Ins",null,"8","60","22","152",null,null,null,null,null,this.div_Project_Management.form);
            obj.set_taborder("3");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_tran");
            obj.set_enable("false");
            obj.getSetter("TL_SEQ").set("116");
            obj.set_visible("false");
            this.div_Project_Management.addChild(obj.name, obj);

            obj = new Button("btn_Merge",null,"8","70","22","btn_Ins:8",null,null,null,null,null,this.div_Project_Management.form);
            obj.set_taborder("7");
            obj.set_text("회사병합");
            obj.set_cssclass("btn_WF_tran");
            obj.set_enable("false");
            obj.getSetter("TL_SEQ").set("2272");
            obj.set_visible("false");
            this.div_Project_Management.addChild(obj.name, obj);

            obj = new Button("btn_Search",null,"10","48","28","25",null,null,null,null,null,this.div_Project_Management.form);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            obj.getSetter("TL_SEQ").set("118");
            this.div_Project_Management.addChild(obj.name, obj);

            obj = new CheckBox("cb_BlackList","chb_Inquiry:10","12","90","24",null,null,null,null,null,null,this.div_Project_Management.form);
            obj.set_taborder("8");
            obj.set_text("블랙리스트");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.getSetter("TL_SEQ").set("842");
            this.div_Project_Management.addChild(obj.name, obj);

            obj = new Static("stc_CompanyType00","cb_BlackList:0.00","12","80","24",null,null,null,null,null,null,this.div_Project_Management.form);
            obj.set_taborder("9");
            obj.set_text("대분류");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.getSetter("TL_SEQ").set("670");
            this.div_Project_Management.addChild(obj.name, obj);

            obj = new Combo("cmb_CoLCategory","stc_CompanyType00:0","12","151","24",null,null,null,null,null,null,this.div_Project_Management.form);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_CD_L_CATEGORY");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_text("");
            obj.set_value("A");
            obj.set_index("0");
            this.div_Project_Management.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","div_Project_Management:0","342","43",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("회사정보");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_CompanyMM","0","staTitle01:0",null,null,"20","24",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsOutput");
            obj.set_autofittype("col");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"70\"/><Column size=\"150\"/><Column size=\"150\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"250\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/><Column size=\"70\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"NO\"/><Cell col=\"1\" text=\"회사코드\" TL_SEQ=\"147\"/><Cell col=\"2\" text=\"회사명\" TL_SEQ=\"148\"/><Cell col=\"3\" text=\"대분류\" TL_SEQ=\"670\"/><Cell col=\"4\" text=\"대표자명\" TL_SEQ=\"848\"/><Cell col=\"5\" text=\"우편번호\" TL_SEQ=\"838\"/><Cell col=\"6\" text=\"주소\" TL_SEQ=\"851\"/><Cell col=\"7\" text=\"고객사\" TL_SEQ=\"32\"/><Cell col=\"8\" text=\"협력사\" TL_SEQ=\"1133\"/><Cell col=\"9\" text=\"프로젝트\" TL_SEQ=\"119\"/><Cell col=\"10\" text=\"가프로젝트\" TL_SEQ=\"2274\"/><Cell col=\"11\" text=\"매출\" TL_SEQ=\"302\"/><Cell col=\"12\" text=\"매입\" TL_SEQ=\"52\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:COMPANY_CODE\"/><Cell col=\"2\" text=\"bind:COMPANY_NAME\" textAlign=\"left\"/><Cell col=\"3\" text=\"bind:L_CATEGORY\" combodataset=\"ds_CD_L_CATEGORY\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" displaytype=\"combotext\"/><Cell col=\"4\" text=\"bind:CEO_NAME\"/><Cell col=\"5\" text=\"bind:POST_NO\"/><Cell col=\"6\" text=\"bind:ADDR\" textAlign=\"left\"/><Cell col=\"7\" text=\"bind:CLIENT_FLAG\" displaytype=\"checkboxcontrol\" edittype=\"none\"/><Cell col=\"8\" text=\"bind:COMPANY_FLAG\" edittype=\"none\" displaytype=\"checkboxcontrol\"/><Cell col=\"9\" text=\"bind:PROJECT_CNT\"/><Cell col=\"10\" text=\"bind:PRE_PROJECT_CNT\"/><Cell col=\"11\" text=\"bind:CONTRACT_CNT\"/><Cell col=\"12\" text=\"bind:PURCHASE_CNT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divCmmnBtn",null,"60","467","33","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelDown","348","0","119","28",null,null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("0");
            obj.set_text("엑셀다운로드");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelSave");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Button("btnExcelUpload",null,"0","107","28","btnExcelDown:5",null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("1");
            obj.set_text("엑셀업로드");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelUp");
            obj.set_visible("false");
            this.divCmmnBtn.addChild(obj.name, obj);

            obj = new Div("divCount","0",null,null,"24","0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            obj.set_url("common::cmmCount.xfdl");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_Project_Management.form
            obj = new Layout("default","",0,0,this.div_Project_Management.form,function(p){});
            this.div_Project_Management.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCmmnBtn.form
            obj = new Layout("default","",0,0,this.divCmmnBtn.form,function(p){});
            this.divCmmnBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCount
            obj = new Layout("default","",0,0,this.divCount.form,function(p){});
            this.divCount.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1290,570,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::cmmCount.xfdl");
        };
        
        // User Script
        this.addIncludeScript("SC_CompanyMM.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("SC_CompanyMM.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("SC_CompanyMM.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("SC_CompanyMM.xfdl","Script::CommGrid.xjs");
        this.registerScript("SC_CompanyMM.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 : 공통 - 공통
        * 02. 화면명   : 회사 검색 (SC_CompanyMM_S01,
        							 SC_CompanyMMPopUp_S01.xam,
        							 SC_CompanyMMPopUp_S02.xam,
        							 SC_CompanyMMPopUp_S03.xam,
        							 SC_CompanyMMPopUp_S04.xam,
        							 SC_CompanyReg_R01.xam)
        * 03. 화면설명 :
        * 04. 작성일   : 2018.08.20
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
        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/
        this.SC_CompanyMM_onload = function(obj, e)
        {
        	this.gfnCompInit(obj); //헤더클릭 이벤트 없을 시 사용
        	this.fnFormInit();
        };

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.fnFormInit = function()
        {
        // 	if(this.commUtil.getFormAuthority(254,1)	// 추가,삭제,저장 권한
        // 	|| this.commUtil.getFormAuthority(254,2))	//(담당자 추가,삭제), (가코드 회사 등록) 권한
        // 	{
        // 		this.divCmmnBtn.form.btn_Ins.set_enable(true);
        // 	}
        // 	if(this.commUtil.getFormAuthority(254,3))	// 회사병합 권한
        // 	{
        // 		this.divCmmnBtn.form.btn_Merge.set_enable(true);
        // 	}
         	this.fnGetCode();
        // 	this.div_Project_Management.form.chb_Inquiry.set_value(0);

        	this.gfnSetCommBtn(this.divCmmnBtn);
        }


        //신규
        this.cfnAdd = function ()
        {
        	var sArgument = {COMPANY_CODE : "", TMP_COMP_REG : true
        				,title 			: '회사등록'};
        	if(this.commUtil.getFormAuthority(254,1))
        		sArgument = {COMPANY_CODE : "",title 			: '회사등록'};
        	this.commUtil.popup(this, "CompanyRegIns", "sales::base/SC_CompanyReg.xfdl", -1, -1, null, null, true, true, false, sArgument, "fnPopupCallBack");

        // 	var nRow = this.dsList.addRow();
        //
        // 	this.dsList.setColumn(nRow, "COMPANY_CD", this.divSearch.form.cboCompany.value);
        // 	this.dsList.setColumn(nRow, "JOIN_DATE", this.gfnGetDate());
        // 	//this.dsList.setColumn(nRow, "RETR_DATE", "99991231");
        // 	this.dsList.setColumn(nRow, "HOOF_STAT_CD", "HO");
        // 	this.dsList.setColumn(nRow, "USER_FLAG_CD", "RW");
        // 	this.dsList.setColumn(nRow, "WKGD_CD", "0080");
        // 	this.dsList.setColumn(nRow, "WKDT_CD", "0050");
        //
        // 	this.dsList.setColumn(nRow, "USER_ID", this.gfnLPad(""+(nexacro.toNumber(this.dsList.getMaxNF("USER_ID"))+1),"0",10));
        // 	this.divDetail.form.edtEmpNo.setFocus();
        };

        //삭제
        this.cfnDel = function ()
        {
        // 	if (this.dsList.rowcount == 0) return;
        //
        // 	this.dsList.deleteRow(this.dsList.rowposition);
        };

        //저장
        this.cfnSave = function ()
        {
        // 	// 변경된 정보없으면 리턴
        // 	if (this.gfnDsIsUpdated(this.dsList) == false) {
        // 		// 저장할 데이터가 없습니다.
        // 		this.gfnAlert("msg.save.nochange");
        // 		return;
        // 	}
        //
        // 	if(this.fnFormValidation()){
        // 		this.fnCheckUserId();
        // 	}
        };

        this.fn_export = function(grid)
        {
        	this.gfn_excelExport(this, grid);
        };

        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fnGetCode = function()
        {
        	this.gfnAddCodeDataset("ds_CD_BUSINESS_FORM"		,"BUSINESS_FORM");
        	this.gfnAddCodeDataset("ds_CD_BUSINESS_KIND"		,"BUSINESS_KIND");
        	this.gfnAddCodeDataset("ds_CD_L_CATEGORY"			,"COM_L_C", true);

        	// 공통코드 조회
        	this.gfnCodeTransaction();
        };

        // 공통코드 callback
        this.afterCommCodeLoad = function() {
        	this.div_Project_Management.form.cmb_CoLCategory.set_index(0);
        }

        this.fnSearch = function() {

        // 	if(this.gfnIsEmpty(this.div_Project_Management.form.edt_ClientName.value))
        // 	{
        // 		this.gfnAlert('msg.err.validator.required',['회사']);
        // 		return;
        // 	}

        	// 조건값 셋팅
        	this.gfnAddSendParameter("TMP_CODE", this.div_Project_Management.form.chb_Inquiry.value);
        	this.gfnAddSendParameter("SEARCH_TEXT", this.div_Project_Management.form.edt_ClientName.value);
        	this.gfnAddSendParameter("SEARCH_GB", this.div_Project_Management.form.cmb_SelectType.value);
        	this.gfnAddSendParameter("BLACKLIST_FLAG", this.div_Project_Management.form.cb_BlackList.value);
        	this.gfnAddSendParameter("L_CATEGORY", this.div_Project_Management.form.cmb_CoLCategory.value);

        	// 조회용 Output dataset 세팅

        	// 삭제한다
        	//this.gfnAddOutputDataset("dsOutput", "dsOutput");

        	this.gfnSetMap("nextBaseMapper", "CompanyList", "dsOutput");

        	this.gfnCommonTransaction("Select", "selectNextList.do", this.grd_CompanyMM);
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
        		if(strSvcID=="gfnGetCode") {
        // 			this.ds_CD_L_CATEGORY.insertRow(0);
        // 			this.ds_CD_L_CATEGORY
        // 			this._gfnInsertDefaultRow(dsComboName, "전체", data, selecttype, codecol);
        			this.div_Project_Management.form.cmb_CoLCategory.set_index(0);
        		} else if(strSvcID=="Select") {
        			this.divCount.form.setText(this.dsOutput.rowcount); //조회건 수
        		}
        	}
        };

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.div_Project_Management_edt_ClientName_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.fnSearch();
        	}
        };

        this.grd_CompanyMM_oncelldblclick = function(obj, e)
        {
        	var colText = obj.getCellProperty("body", e.cell, "text").split("bind:");

        	//프로젝트, 매출(진), 매출(가), 매입 cell 클릭 시
        	if(["PROJECT_CNT", "PRE_PROJECT_CNT", "CONTRACT_CNT", "PURCHASE_CNT"].indexOf(colText[1]) != -1)
        	{
        		var sArgument =
        		{
        			 dsProject 	 	: this.dsProject
        			,dsRealContract : this.dsRealContract
        			,dsFakeContract : this.dsFakeContract
        			,dsRealPurchase : this.dsRealPurchase
        			,"pType"	    : colText[1]
        			,"COMPANY_CODE" : this.dsOutput.getColumn(this.dsOutput.rowposition, "COMPANY_CODE")
        			,title 			: ''
        		}
        		this.commUtil.popup(this, "CompanyMMPopup", "sales::base/SC_CompanyMMPopup.xfdl", -1, -1, null, null, true, true, false, sArgument, "fnPopupCallBack");
        	}
        	else
        	{
        		var sArgument = {COMPANY_CODE : this.dsOutput.getColumn(e.row, "COMPANY_CODE")
        						,title 			: '회사정보 - ' + this.dsOutput.getColumn(this.dsOutput.rowposition, "COMPANY_NAME")};
        		this.commUtil.popup(this, "CompanyReg", "sales::base/SC_CompanyReg.xfdl", -1, -1, null, null, true, true, false, sArgument, "fnPopupCallBack");
        	}
        };

        //SC_CompanyReg에서 정보 받은것을 가공할 때 사용.
        this.fnPopupCallBack = function (popupId, popupArg)
        {
        	popupArg = this.commUtil.popupReturn();

        	switch(popupId)
        	{
        		case "CompanyRegIns" :
        			this.fnSearch();
        			break;
        		case "CompanyReg" :
        /*			if(popupArg == "close")
        			{
        				this.fnSearch();
        			}
        */
        			break;
        		case "CompanyMMPopup" :
        			break;
        	}
        }

        this.comm_Click = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btn_Ins" :
        // 			var sArgument = {COMPANY_CODE : "", TMP_COMP_REG : true
        // 						,title 			: '회사등록'};
        // 			if(this.commUtil.getFormAuthority(254,1))
        // 				sArgument = {COMPANY_CODE : "",title 			: '회사등록'};
        // 			this.commUtil.popup(this, "CompanyRegIns", "sales::base/SC_CompanyReg.xfdl", -1, -1, null, null, true, true, false, sArgument, "fnPopupCallBack");
        			break;
        		case "btn_Search" :
        			this.fnSearch();
        			break;
        		case "btnExcelDown" :
        			// 엑셀 상단 타이틀 텍스트 설정
        			var sSubTitle = this.staTitle01.text;

        			// Excel Export 공통함수 호출
        			this.gfnExcelExport(this.grd_CompanyMM, sSubTitle, sSubTitle, "EXCEL2007","",sSubTitle, true, "");
        			break;
        		case "btn_Merge" :
        			var sArgument = {COMPANY_CODE : this.dsOutput.getColumn(e.row, "COMPANY_CODE")};
        			this.commUtil.popup(this, "CompanyMerge", "sales::base/SC_CompanyMerge.xfdl", -1, -1, null, null, true, true, false, sArgument, "fnPopupCallBack");
        			break;
        	}
        };

        this.div_Project_Management_cmb_SelectType_onitemchanged = function(obj,e)
        {
        // 	if(!this.gfnIsEmpty(this.div_Project_Management.form.edt_ClientName))
        // 	{
        // 		if(this.div_Project_Management.form.cmb_SelectType.value == 'A')
        // 		{
        // 			this.div_Project_Management.form.stc_ClientName.set_text("전체");
        // 		}
        // 		else if(this.div_Project_Management.form.cmb_SelectType.value == 'B')
        // 		{
        // 			this.div_Project_Management.form.stc_ClientName.set_text("고객사");
        // 		}
        // 		else if(this.div_Project_Management.form.cmb_SelectType.value == 'C')
        // 		{
        // 			this.div_Project_Management.form.stc_ClientName.set_text("협력사");
        // 		}
        // 	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SC_CompanyMM_onload,this);
            this.div_Project_Management.form.cmb_SelectType.addEventHandler("onitemchanged",this.div_Project_Management_cmb_SelectType_onitemchanged,this);
            this.div_Project_Management.form.edt_ClientName.addEventHandler("onkeydown",this.div_Project_Management_edt_ClientName_onkeydown,this);
            this.div_Project_Management.form.btn_Ins.addEventHandler("onclick",this.comm_Click,this);
            this.div_Project_Management.form.btn_Merge.addEventHandler("onclick",this.comm_Click,this);
            this.div_Project_Management.form.btn_Search.addEventHandler("onclick",this.comm_Click,this);
            this.div_Project_Management.form.cmb_CoLCategory.addEventHandler("onitemchanged",this.div_Project_Management_cmb_SelectType_onitemchanged,this);
            this.grd_CompanyMM.addEventHandler("oncelldblclick",this.grd_CompanyMM_oncelldblclick,this);
            this.divCmmnBtn.form.btnExcelDown.addEventHandler("onclick",this.comm_Click,this);
            this.divCmmnBtn.form.btnExcelUpload.addEventHandler("onclick",this.divCmmnBtn_btnExcelUpload_onclick,this);
        };
        this.loadIncludeScript("SC_CompanyMM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
