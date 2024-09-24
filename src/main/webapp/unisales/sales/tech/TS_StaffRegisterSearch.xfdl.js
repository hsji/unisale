(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TS_StaffRegisterReg");
            this.set_titletext("직원조회");
            this.set_cssclass("frm_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(800,450);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOutput", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"STRING\" size=\"100\"/><Column id=\"EMP_NM\" type=\"STRING\" size=\"255\"/><Column id=\"SEX\" type=\"STRING\" size=\"32767\"/><Column id=\"BIRTHDAY\" type=\"STRING\" size=\"32767\"/><Column id=\"LUNAR_FLAG\" type=\"STRING\" size=\"30\"/><Column id=\"EMP_PHOTO\" type=\"STRING\" size=\"320\"/><Column id=\"HOME_TEL\" type=\"STRING\" size=\"32767\"/><Column id=\"HP_TEL_NO\" type=\"STRING\" size=\"32767\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"201\"/><Column id=\"POST_NO\" type=\"STRING\" size=\"32767\"/><Column id=\"POST_ADDR\" type=\"STRING\" size=\"32767\"/><Column id=\"DETAIL_ADDR\" type=\"STRING\" size=\"32767\"/><Column id=\"MARRY_FLAG\" type=\"STRING\" size=\"30\"/><Column id=\"CO_ID\" type=\"INT\" size=\"10\"/><Column id=\"COMPANY_CODE\" type=\"STRING\" size=\"4\"/><Column id=\"CO_CD\" type=\"STRING\" size=\"30\"/><Column id=\"COMPANY_NM\" type=\"STRING\" size=\"100\"/><Column id=\"DEPT_ID\" type=\"INT\" size=\"10\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"30\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"100\"/><Column id=\"GRADE_CODE\" type=\"STRING\" size=\"30\"/><Column id=\"DUTY_CODE\" type=\"STRING\" size=\"30\"/><Column id=\"OFFICE_TEL_NO\" type=\"STRING\" size=\"32767\"/><Column id=\"HOOF_STAT_CD\" type=\"STRING\" size=\"30\"/><Column id=\"ENTER_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"FIRE_DATE\" type=\"STRING\" size=\"8\"/><Column id=\"MSG_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"DEPT_USE_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"CO_USE_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"MAIN_DEPT_FLAG\" type=\"STRING\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_HOOF_STAT_CD", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SearchType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" size=\"256\" type=\"STRING\"/><Column id=\"CAPTION\" size=\"256\" type=\"STRING\"/><Column id=\"CAPTION_JAP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">E</Col><Col id=\"CAPTION\">이름</Col><Col id=\"CAPTION_JAP\">名前</Col></Row><Row><Col id=\"CODE\">O</Col><Col id=\"CAPTION\">회사명</Col><Col id=\"CAPTION_JAP\">会社名</Col></Row><Row><Col id=\"CODE\">M</Col><Col id=\"CAPTION\">이메일</Col><Col id=\"CAPTION_JAP\">メール</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_StaffRegisterReg","5","43","628","76",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_WF_detailLbl01");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_BottomFrame","1",null,null,"36","1","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_BtnBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Exit",null,null,"60","28","19","10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_tran");
            obj.getSetter("TL_SEQ").set("59");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Confirm",null,null,"60","28","btn_Exit:5","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_Crud");
            obj.getSetter("TL_SEQ").set("158");
            this.addChild(obj.name, obj);

            obj = new Div("div_Search","20","20",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_cssclass("div_WF_Search");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Search00","0","12","91","24",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("4");
            obj.set_text("검색유형");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.getSetter("TL_SEQ").set("136");
            this.div_Search.addChild(obj.name, obj);

            obj = new Combo("cmb_SearchType","stc_Search00:0","12","89","24",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_SearchType");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.getSetter("TL_FLAG").set("1");
            obj.set_text("이름");
            obj.set_index("0");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("stc_Search","cmb_SearchType:0","12","81","24",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("1");
            obj.set_text("검색어");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.getSetter("TL_SEQ").set("136");
            this.div_Search.addChild(obj.name, obj);

            obj = new Edit("edt_SearchText","stc_Search:0","12","237","24",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("2");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_Search",null,"10","48","28","10",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            obj.getSetter("TL_SEQ").set("118");
            this.div_Search.addChild(obj.name, obj);

            obj = new Grid("grd_StaffRegisterReg","20","div_Search:10",null,null,"20","50",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_autofittype("col");
            obj.set_binddataset("dsOutput");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"160\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"200\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"회사명\" TL_SEQ=\"148\"/><Cell col=\"1\" text=\"부서명\" TL_SEQ=\"25\"/><Cell col=\"2\" text=\"상태\" TL_SEQ=\"209\"/><Cell col=\"3\" text=\"이름\" TL_SEQ=\"765\"/><Cell col=\"4\" text=\"사번\" TL_SEQ=\"2192\"/><Cell col=\"5\" text=\"이메일\" TL_SEQ=\"80\"/></Band><Band id=\"body\"><Cell text=\"bind:COMPANY_NM\"/><Cell col=\"1\" text=\"bind:DEPT_NM\"/><Cell col=\"2\" text=\"bind:HOOF_STAT_CD\" displaytype=\"combotext\" combodataset=\"ds_CD_HOOF_STAT_CD\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/><Cell col=\"3\" text=\"bind:EMP_NM\"/><Cell col=\"4\" text=\"bind:EMP_NO\"/><Cell col=\"5\" text=\"bind:EMAIL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_Search.form
            obj = new Layout("default","",0,0,this.div_Search.form,function(p){});
            this.div_Search.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",800,450,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("TS_StaffRegisterSearch.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("TS_StaffRegisterSearch.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("TS_StaffRegisterSearch.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("TS_StaffRegisterSearch.xfdl","Script::CommGrid.xjs");
        this.registerScript("TS_StaffRegisterSearch.xfdl", function() {

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

        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/
        this.TS_StaffRegisterReg_onload = function(obj,e)
        {
        	this.gfnCompInit(obj); //헤더클릭 이벤트 없을 시 사용
        	this.fnFormInit();
        };

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.fnFormInit = function()
        {
        	this.div_Search.form.cmb_SearchType.set_value(this.parent.SEARCH_GB);
        	this.div_Search.form.edt_SearchText.set_value(this.parent.SEARCH_TEXT);
        	this.fnGetCode();
        }

        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fnGetCode = function()
        {
        	//this.gfnAddCodeDataset("ds_CD_HOLD_OFFICE"	,"SM08");
        	this.gfnAddCodeDataset("ds_CD_HOOF_STAT_CD","SM08");

        	// 공통코드 조회
        	this.gfnCodeTransaction();

        	this.dsOutput.set_rowposition(0);
        	this.grd_StaffRegisterReg.setFocus();
        };


        this.fnSearch = function()
        {
        	this.gfnAddSendParameter("SEARCH_GB", this.div_Search.form.cmb_SearchType.value);
        	this.gfnAddSendParameter("SEARCH_TEXT", this.div_Search.form.edt_SearchText.value);
        // 	this.gfnAddOutputDataset("dsOutput", "dsOutput");
        // 	this.gfnCommonTransaction("Select", "TS_StaffInfoSearch_S01", this.grd_StaffRegisterReg);

        	this.gfnSetMap("nextBaseMapper", "StaffList", "dsOutput");
        	this.gfnCommonTransaction("Select", "selectNextList.do"/*"TS_StaffInfoSearch_S01"*/, this.grd_StaffRegisterReg);
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
        		if(strSvcID=="gfnGetCode")
        		{
        			this.fnSearch();
        		}
        		else if(strSvcID=="Select")
        		{

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
        		case "btn_Close" :
        			this.close();
        			break;
        		case "btn_Confirm" :
        			this.gfnClosePopup([this.dsOutput.getColumn(this.dsOutput.rowposition, "EMP_NO")
        									, this.dsOutput.getColumn(this.dsOutput.rowposition, "EMP_NM")
        									, this.dsOutput.getColumn(this.dsOutput.rowposition, "DEPT_CD")
        									, this.dsOutput.getColumn(this.dsOutput.rowposition, "COMPANY_CD")
        									, this.dsOutput.getColumn(this.dsOutput.rowposition, "SI_FLAG")]);
        			break;
        		case "btn_Exit" :
        			this.close();
        			break;
        		case "btn_Search" :
        			if(!this.gfnIsEmpty(this.div_Search.form.edt_SearchText.value))
        				this.fnSearch();
        			else
        				alert("검색명을 입력하세요.");
        			break;
        	}
        };

        this.grd_StaffRegisterReg_oncelldblclick = function(obj, e)
        {
        	this.gfnClosePopup([this.dsOutput.getColumn(this.dsOutput.rowposition, "EMP_NO")
        							, this.dsOutput.getColumn(this.dsOutput.rowposition, "EMP_NM")
        							, this.dsOutput.getColumn(this.dsOutput.rowposition, "DEPT_CD")
        							, this.dsOutput.getColumn(this.dsOutput.rowposition, "COMPANY_CD")
        							, this.dsOutput.getColumn(this.dsOutput.rowposition, "SI_FLAG")]);
        };

        this.edt_SearchText_onkeydown = function(obj, e)
        {
        	if(e.keycode == 13)
        	{
        		if(!this.gfnIsEmpty(this.div_Search.form.edt_SearchText.value))
        				this.fnSearch();
        		else
        			this.gfnAlert('msg.err.validator.input',['검색어']);
        	}
        };

        this.grd_StaffRegisterReg_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13 && this.dsOutput.rowposition>=0)
        	{
        		this.gfnClosePopup([this.dsOutput.getColumn(this.dsOutput.rowposition, "EMP_NO")
        								, this.dsOutput.getColumn(this.dsOutput.rowposition, "EMP_NM")
        								, this.dsOutput.getColumn(this.dsOutput.rowposition, "DEPT_CD")
        								, this.dsOutput.getColumn(this.dsOutput.rowposition, "COMPANY_CD")
        								, this.dsOutput.getColumn(this.dsOutput.rowposition, "SI_FLAG")]);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TS_StaffRegisterReg_onload,this);
            this.btn_Exit.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Confirm.addEventHandler("onclick",this.comm_Click,this);
            this.div_Search.form.edt_SearchText.addEventHandler("onkeydown",this.edt_SearchText_onkeydown,this);
            this.div_Search.form.btn_Search.addEventHandler("onclick",this.comm_Click,this);
            this.grd_StaffRegisterReg.addEventHandler("oncelldblclick",this.grd_StaffRegisterReg_oncelldblclick,this);
            this.grd_StaffRegisterReg.addEventHandler("onkeydown",this.grd_StaffRegisterReg_onkeydown,this);
        };
        this.loadIncludeScript("TS_StaffRegisterSearch.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
