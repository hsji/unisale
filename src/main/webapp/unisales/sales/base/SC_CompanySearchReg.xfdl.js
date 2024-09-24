(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SC_CompanySearchReg");
            this.set_titletext("회사정보 검색");
            this.set_cssclass("frm_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(665,520);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOutput", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_NAME_JAP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput2", this);
            obj._setContents("<ColumnInfo><Column id=\"COMPANY_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_NAME_JAP\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch1","714.00","70",null,"40","-706",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_cssclass("div_WF_SchList");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("stc_CompanyName","9","8","52","22",null,null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("0");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            obj.getSetter("TL_SEQ").set("148");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Button("btn_Search",null,"8","60","22","139",null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_SchText");
            obj.getSetter("TL_SEQ").set("118");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Button("btn_Confirm",null,"8","60","22","8",null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("2");
            obj.set_text("확인");
            obj.set_cssclass("btn_WF_tran");
            obj.getSetter("TL_SEQ").set("158");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Button("btn_NewCompany",null,"8","60","22","73",null,null,null,null,null,this.divSearch1.form);
            obj.set_taborder("3");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_tran");
            obj.getSetter("TL_SEQ").set("116");
            this.divSearch1.addChild(obj.name, obj);

            obj = new Div("divSearch","20","20",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","12","86","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10","48","28","25",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edt_CompanyName","staTitle00:0.00","12","269","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Grid("grd_CompanySearch","20.00","divSearch:10",null,null,"20","50",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("dsOutput");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"152\"/><Column size=\"387\"/><Column size=\"388\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"회사코드\" TL_SEQ=\"147\"/><Cell col=\"1\" text=\"회사명\" TL_SEQ=\"22536\"/><Cell col=\"2\" text=\"영문회사명\" TL_SEQ=\"22536\"/></Band><Band id=\"body\"><Cell text=\"bind:COMPANY_CD\"/><Cell col=\"1\" text=\"bind:COMPANY_NM\"/><Cell col=\"2\" text=\"bind:COMPANY_NM_ENG\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Cancel",null,null,"60","28","20","10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("닫기");
            obj.getSetter("TL_SEQ").set("59");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch1.form
            obj = new Layout("default","",0,0,this.divSearch1.form,function(p){});
            this.divSearch1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",665,520,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divSearch.form.edtUserNm","value","dsCond","USER_NM");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SC_CompanySearchReg.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("SC_CompanySearchReg.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("SC_CompanySearchReg.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("SC_CompanySearchReg.xfdl","Script::CommGrid.xjs");
        this.registerScript("SC_CompanySearchReg.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 : 공통 - 공통
        * 02. 화면명   : 회사정보 검색 (SC_CompanySearchReg_S01)
        * 03. 화면설명 :
        * 04. 작성일   : 2018.08.20
        * 05. 작성자   : 안주환
        * 06. 수정이력 :
        ***********************************************************************************************
        *     수정일          이  름    사유
        ***********************************************************************************************
        *     2023.11.03       이상원    회사명 일문 검색 추가 및 오류 수정
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
        this.sCompanyName = '';
        this.popupArg = [];
        this.popupArg[0] = '';
        this.popupArg[1] = '';

        this.FV_CompanyNm = "";
        this.FV_CompanyNm2 = "";

        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/
        this.SC_CompanySearchReg_onload = function(obj,e)
        {
        	this.gfnCompInit(obj); //헤더클릭 이벤트 없을 시 사용
        	this.FV_CompanyNm = this.parent.pvCompanyName;
        	this.FV_CompanyNm2 = this.parent.pvCompanyName2;

        	trace(this.FV_CompanyNm + " // " + this.FV_CompanyNm2);

        	if(!this.gfnIsEmpty(this.FV_CompanyNm)) //부모창에서 전달받은 회사명 입력
        	{
        		this.divSearch.form.edt_CompanyName.set_value(this.FV_CompanyNm);
        	}

        	this.fnSearch();
        };

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.fnSearchPopupClose = function (sType)
        {
        	var sLang = nexacro.getApplication().gdsGlobal.getColumn(0, "LANGUAGE");

        	if(sType == "GetCompany") 		// 확인
        	{
        		this.popupArg[0] = this.dsOutput.getColumn(this.dsOutput.rowposition,"COMPANY_NM");
        		this.popupArg[1] = this.dsOutput.getColumn(this.dsOutput.rowposition,"COMPANY_NM_ENG");
        	} else if (sType == "NewCompany")	// 신규
        	{
        		var bRtn = false;


        		// CompanyName2 1) 유: 현재 상태 유지 2) 무: CompanyName 복사 하여 동일 처리
        		this.popupArg[0] = this.divSearch.form.edt_CompanyName.value;
        		if(!this.gfnIsEmpty(this.parent.pvCompanyName2)) {
        			this.popupArg[1] = this.parent.pvCompanyName2;
        		} else {
        			this.popupArg[1] = this.divSearch.form.edt_CompanyName.value;
        		}


        		if(!this.gfnIsEmpty(this.divSearch.form.edt_CompanyName.value)) {
        			if(this.dsOutput.rowcount == 0) {
        				// 조회된 회사가 없고 신규 회사 등록할 경우
        				bRtn = this.confirm(this.gfnGetTransTxt(22531,"검색된 회사가 없습니다.\n [@1@]로 신규등록을 진행하시겠습니까?",[this.divSearch.form.edt_CompanyName.value]));
        			} else {
        				// 조회된 회사가 있지만 신규 회사 등록할 경우
        				bRtn = this.confirm(this.gfnGetTransTxt(22532,"[@1@]로 신규등록을 진행하시겠습니까?",[this.divSearch.form.edt_CompanyName.value]));
        			}
        		} else { //회사명이 비어있을경우
        			this.alert(this.gfnGetTransTxt(1254,"회사명을 입력하세요."));
        		}


        		// validation 체크
        		if(bRtn == false) {
        			return false;
        		}
        	}


        	if(this.gfnIsEmpty(this.popupArg[0])) {
        		this.popupArg[0] = "";
        	}

        	if(this.gfnIsEmpty(this.popupArg[1])) 	{
        		this.popupArg[1] = "";
        	}
        	this.close(this.popupArg[0]+"|"+this.popupArg[1]);
        	//this.commUtil.popupClose(this.popupArg);
        }
        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fnSearch = function()
        {
        	// 조건값 셋팅
        	this.gfnAddSendParameter("COMPANY_NAME", this.divSearch.form.edt_CompanyName.value);

        	// 조회용 Output dataset 세팅
        	//this.gfnAddOutputDataset("dsOutput", "dsOutput");
        	this.gfnSetMap("nextBaseMapper", "PoppupCompany", "dsOutput");
        	this.gfnCommonTransaction("Select", "selectNextList.do"/*"SC_CompanySearchReg_S01"*/, this.grd_CompanySearch);
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
        		if(strSvcID=="Select")
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
        		case "btnSearch" :
        			this.fnSearch();
        			break;
        		case "btn_Confirm" :
        			if(this.dsOutput.rowcount == 0) //검색된 회사명이 있을경우 GetCompany(확인), 없을경우 NewCompany(신규)
        			{
        				this.fnSearchPopupClose("NewCompany");
        			}
        			else
        			{
        				this.fnSearchPopupClose("GetCompany");
        			}
        			break;
        		case "btn_Cancel" :
        			this.commUtil.popupClose("close"); // Cancel, Close 선택시 회사명이 아닌 공백값 전달
        			break;
        		case "btn_Close" :
        			this.commUtil.popupClose("close");
        			break;
        		case "btn_NewCompany" :
        			this.fnSearchPopupClose("NewCompany");
        			break;
        	}
        };

        this.grd_CompanySearch_oncelldblclick = function(obj,e)
        {
        	this.fnSearchPopupClose("GetCompany");
        };

        this.divSearch_edt_CompanyName_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.fnSearch();
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SC_CompanySearchReg_onload,this);
            this.divSearch1.form.btn_Search.addEventHandler("onclick",this.comm_Click,this);
            this.divSearch1.form.btn_Confirm.addEventHandler("onclick",this.comm_Click,this);
            this.divSearch1.form.btn_NewCompany.addEventHandler("onclick",this.comm_Click,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.comm_Click,this);
            this.divSearch.form.edt_CompanyName.addEventHandler("onkeydown",this.divSearch_edt_CompanyName_onkeydown,this);
            this.grd_CompanySearch.addEventHandler("oncelldblclick",this.grd_CompanySearch_oncelldblclick,this);
            this.btn_Cancel.addEventHandler("onclick",this.comm_Click,this);
        };
        this.loadIncludeScript("SC_CompanySearchReg.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
