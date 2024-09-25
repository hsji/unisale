(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AS_TranslationMM");
            this.set_titletext("번역관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,580);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_comm_TLType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"30\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"255\"/><Column id=\"VAL1\" type=\"STRING\" size=\"100\"/><Column id=\"VAL2\" type=\"STRING\" size=\"100\"/><Column id=\"VAL3\" type=\"STRING\" size=\"100\"/><Column id=\"VAL4\" type=\"STRING\" size=\"100\"/><Column id=\"REMARK\" type=\"STRING\" size=\"1073741823\"/><Column id=\"ORD\" type=\"STRING\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"CAPTION\">전체</Col><Col id=\"CODE\">ALL</Col></Row><Row><Col id=\"CODE\">COMPONENT</Col><Col id=\"CAPTION\">항목</Col></Row><Row><Col id=\"CODE\">CONFIRM</Col><Col id=\"CAPTION\">Confirm(메시지)</Col></Row><Row><Col id=\"CODE\">ALERT</Col><Col id=\"CAPTION\">Alert(메시지)</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_list", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comm_TLType_all", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"30\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"255\"/><Column id=\"VAL1\" type=\"STRING\" size=\"100\"/><Column id=\"VAL2\" type=\"STRING\" size=\"100\"/><Column id=\"VAL3\" type=\"STRING\" size=\"100\"/><Column id=\"VAL4\" type=\"STRING\" size=\"100\"/><Column id=\"REMARK\" type=\"STRING\" size=\"1073741823\"/><Column id=\"ORD\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_Search01","8","8",null,"40","8",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_WF_SchList");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("stc_title15","12","8","53","22",null,null,null,null,null,null,this.div_Search01.form);
            obj.set_taborder("0");
            obj.set_text("번역종류");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_Search01.addChild(obj.name, obj);

            obj = new Combo("cmb_MajorProcessSel","stc_title15:11","8","102","22",null,null,null,null,null,null,this.div_Search01.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_comm_TLType_all");
            obj.set_datacolumn("CAPTION");
            obj.set_codecolumn("CODE");
            this.div_Search01.addChild(obj.name, obj);

            obj = new Combo("cmb_ResultKind","258","8","102","22",null,null,null,null,null,null,this.div_Search01.form);
            obj.set_taborder("2");
            obj.set_text("전체");
            obj.set_value("A");
            obj.set_index("0");
            this.div_Search01.addChild(obj.name, obj);

            obj = new Button("btn_search",null,"8","52","22","8",null,null,null,null,null,this.div_Search01.form);
            obj.set_taborder("3");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_SchText");
            this.div_Search01.addChild(obj.name, obj);

            obj = new Button("btn_save",null,"8","59","23","68",null,null,null,null,null,this.div_Search01.form);
            obj.set_taborder("4");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_tran");
            obj.set_enable("true");
            this.div_Search01.addChild(obj.name, obj);

            obj = new Edit("edt_ContractName02","361","8",null,"22","581",null,null,null,null,null,this.div_Search01.form);
            obj.set_taborder("5");
            this.div_Search01.addChild(obj.name, obj);

            obj = new Static("stc_title15_00","192","8","53","22",null,null,null,null,null,null,this.div_Search01.form);
            obj.set_taborder("6");
            obj.set_text("번역종류");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_Search01.addChild(obj.name, obj);

            obj = new Combo("cmb_ResultKind00","701","8","102","22",null,null,null,null,null,null,this.div_Search01.form);
            obj.set_taborder("7");
            obj.set_datacolumn("datacolumn");
            obj.set_codecolumn("codecolumn");
            var div_Search01_form_cmb_ResultKind00_innerdataset = new nexacro.NormalDataset("div_Search01_form_cmb_ResultKind00_innerdataset", obj);
            div_Search01_form_cmb_ResultKind00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">A</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">모집단등록여부</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">샘플등록여부</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">첨부파일등록여부</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">검토확인여부</Col></Row></Rows>");
            obj.set_innerdataset(div_Search01_form_cmb_ResultKind00_innerdataset);
            obj.set_text("전체");
            obj.set_value("A");
            obj.set_index("0");
            this.div_Search01.addChild(obj.name, obj);

            obj = new Button("btn_Insert",null,"8","59","22","200",null,null,null,null,null,this.div_Search01.form);
            obj.set_taborder("8");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_tran");
            this.div_Search01.addChild(obj.name, obj);

            obj = new Button("btn_Delete",null,"8","59","22","134",null,null,null,null,null,this.div_Search01.form);
            obj.set_taborder("9");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_tran");
            this.div_Search01.addChild(obj.name, obj);

            obj = new Grid("grd_Project","8","56",null,null,"8","194",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_AM_List");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"55\"/><Column size=\"80\"/><Column size=\"250\"/><Column size=\"250\"/><Column size=\"250\"/><Column size=\"60\"/><Column size=\"317\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"TL_SEQ\"/><Cell col=\"1\" text=\"번역종류\"/><Cell col=\"2\" text=\"국문\"/><Cell col=\"3\" text=\"일문\"/><Cell col=\"4\" text=\"영문\"/><Cell col=\"5\" text=\"사용여부\"/><Cell col=\"6\" text=\"비고\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\"/><Cell col=\"4\"/><Cell col=\"5\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"6\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_ContractInfo","8",null,null,"178","8","10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("div_WF_detailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_ContractName","4","33","75","28",null,null,null,null,null,null,this.div_ContractInfo.form);
            obj.set_taborder("0");
            obj.set_text("국문");
            obj.set_cssclass("sta_WF_detailLbl01");
            obj.set_textAlign("right");
            this.div_ContractInfo.addChild(obj.name, obj);

            obj = new Edit("edt_ContractName","81","36",null,"22","11",null,null,null,null,null,this.div_ContractInfo.form);
            obj.set_taborder("1");
            this.div_ContractInfo.addChild(obj.name, obj);

            obj = new Static("stc_ContractName00","4","62","75","28",null,null,null,null,null,null,this.div_ContractInfo.form);
            obj.set_taborder("2");
            obj.set_text("일문");
            obj.set_cssclass("sta_WF_detailLbl01");
            obj.set_textAlign("right");
            this.div_ContractInfo.addChild(obj.name, obj);

            obj = new Edit("edt_ContractName00","81","65",null,"22","11",null,null,null,null,null,this.div_ContractInfo.form);
            obj.set_taborder("3");
            this.div_ContractInfo.addChild(obj.name, obj);

            obj = new Static("stc_ContractName01","4","91","75","28",null,null,null,null,null,null,this.div_ContractInfo.form);
            obj.set_taborder("4");
            obj.set_text("영문");
            obj.set_cssclass("sta_WF_detailLbl01");
            obj.set_textAlign("right");
            this.div_ContractInfo.addChild(obj.name, obj);

            obj = new Edit("edt_ContractName01","81","94",null,"22","11",null,null,null,null,null,this.div_ContractInfo.form);
            obj.set_taborder("5");
            this.div_ContractInfo.addChild(obj.name, obj);

            obj = new Static("stc_PayMethod","4","4","75","28",null,null,null,null,null,null,this.div_ContractInfo.form);
            obj.set_taborder("6");
            obj.set_text("번역종류");
            obj.set_cssclass("sta_WF_detailLbl01");
            obj.set_textAlign("right");
            this.div_ContractInfo.addChild(obj.name, obj);

            obj = new Combo("cmb_PayMethod","81","7","300","22",null,null,null,null,null,null,this.div_ContractInfo.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_cmm_PayMethod");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_text("");
            this.div_ContractInfo.addChild(obj.name, obj);

            obj = new CheckBox("chb_Export",null,"7","84","22","791",null,null,null,null,null,this.div_ContractInfo.form);
            obj.set_taborder("8");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_ContractInfo.addChild(obj.name, obj);

            obj = new Static("stc_Explain","4","123","75","46",null,null,null,null,null,null,this.div_ContractInfo.form);
            obj.set_taborder("9");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_detailLbl01");
            this.div_ContractInfo.addChild(obj.name, obj);

            obj = new Edit("edt_Explain","81","123","1170","46",null,null,null,null,null,null,this.div_ContractInfo.form);
            obj.set_taborder("10");
            this.div_ContractInfo.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_Search01.form
            obj = new Layout("default","",0,0,this.div_Search01.form,function(p){});
            this.div_Search01.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_ContractInfo.form
            obj = new Layout("default","",0,0,this.div_ContractInfo.form,function(p){});
            this.div_ContractInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,580,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_ContractInfo.form.cal_FreeMaEndDate","value","ds_MainContract","DELIVERY_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_ContractInfo.form.cal_OpenDate","value","ds_MainContract","OPEN_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_ContractInfo.form.cal_LICDate","value","ds_MainContract","ISSUE_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_ContractInfo.form.chb_Annual","value","ds_MainContract","ANNUAL_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_ContractInfo.form.cal_StartDt","value","ds_MainContract","START_DATE2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","div_ContractInfo.form.cal_EndDt","value","ds_MainContract","END_DATE2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","div_ContractInfo.form.cal_ResultDt","value","ds_MainContract","RESULT_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","div_ContractInfo.form.edt_ContractName","value","ds_MainContract","CONTRACT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","div_ContractInfo.form.edt_ContractName00","value","ds_MainContract","CONTRACT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","div_ContractInfo.form.edt_ContractName01","value","ds_MainContract","CONTRACT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","div_ContractInfo.form.cmb_PayMethod","value","ds_MainContract","PAY_METHOD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","div_ContractInfo.form.chb_Export","value","ds_MainContract","EXPORT_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item13","div_Search01.form.edt_ContractName02","value","ds_MainContract","CONTRACT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("AS_TranslationMM.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("AS_TranslationMM.xfdl","Script::CommGrid.xjs");
        this.addIncludeScript("AS_TranslationMM.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("AS_TranslationMM.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("AS_TranslationMM.xfdl","Script::ext_CommEco.xjs");
        this.registerScript("AS_TranslationMM.xfdl", function() {
        /************************************************************************************************
         * 01. 업무구분 : 관리>데이터관리
         * 02. 화면명   : 번역관리(AS_TranslationMM)
         * 03. 화면설명 : NEXT 다국어 지원을 위한 항목, 메시지 국문 번역 등록
         * 04. 작성일   : 2022.12.15
         * 05. 작성자   : 채종한
         * 06. 수정이력 :
         ***********************************************************************************************
         *     수정일          이  름    사유
         ***********************************************************************************************
         *
         *
         *
         ***********************************************************************************************/


        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
         ************************************************************************************************/
        this.executeIncludeScript("Script::CommTrans.xjs"); /*include "Script::CommTrans.xjs"*/
        this.executeIncludeScript("Script::CommGrid.xjs"); /*include "Script::CommGrid.xjs"*/
        this.executeIncludeScript("Script::CommUtil.xjs"); /*include "Script::CommUtil.xjs"*/
        this.executeIncludeScript("Script::CommSystem.xjs"); /*include "Script::CommSystem.xjs"*/
        this.executeIncludeScript("Script::ext_CommEco.xjs"); /*include "Script::ext_CommEco.xjs"*/

        /************************************************************************************************
         * 전역 변수 영역
         ************************************************************************************************/



         /************************************************************************************************
         * FORM 영역
         ************************************************************************************************/
        this.AS_TranslationMM_onload = function(obj,e)
        {
        	this.gfnCompInit(obj);  	// Grid 공통함수 호출
        	this.fnGetCode();
        };



         /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
         ************************************************************************************************/
           // 공통코드 조회
         this.fnGetCode = function()
         {
        	this.gfnAddCodeDataset("ds_comm_TLType_all", "TL_TYPE", true);
        	this.gfnAddCodeDataset("ds_comm_TLType",	 "TL_TYPE");
        	this.gfnCodeTransaction();
         }


         // 조회
         this.fn_QueryData = function()
         {
        	if (!this.fn_getValidation("S"))	return;

        	// 조건값 셋팅
        	this.gfnAddSendParameter("PROJECT_CODE",	this.FV_PARENT_FORM.div_search.form.edt_ProjectCode.value);

        	// 조회용 Output dataset 세팅
        	this.gfnAddOutputDataset("ds_list", "ds_output");
        	this.gfnCommonTransaction("Select", "AS_TranslationMM_S01", this.grd_ContractList);
         };



          // 저장 처리
         this.fn_SaveData = function ()
         {
        	if (!this.fn_getValidation("T")) return;

        	this.FV_SAVE_CURROW = this.ds_MainContract.rowposition;

        	//저장용 Input Dataset 세팅
        	this.gfnAddInputDataset("ds_list",		"ds_input", "U");


        	this.gfnCommonTransaction("Save", "AS_TranslationMM_R01");
         }


         // 화면 콜백
         this.fnCallBack = function (strSvcID, nErrorCode, strErrorMag)
         {
        	if (nErrorCode<0) {
        		this.alert("["+strSvcID+":"+nErrorCode+"] "+strErrorMag);
        		return;
        	} else {
        		switch (strSvcID)
        		{
        			case "gfnGetCode" :
        				this.ds_cmm_ServerGrade.insertRow(0);
        				this.ds_cmm_ServerGrade.setColumn(0, "CAPTION", " ");
        				break;

        			case "Select" :
        				this.FV_PARENT_FORM.fnAuthConfig();
        				if (this.ds_MainContract.rowcount == 0 && this.commUtil.getFormAuthority(242,8))
        				{
        					/*신규프로젝트 추가시 조회되는 계약이 없음,
        					추가, 삭제 권한이 있을경우 계약 자동으로 1개 추가(초기화 문제때문에)*/
        					this.fn_AddRecord();
        				}

        				if (this.FV_SAVE_CURROW > 0) {
        					// 저장 처리시 이전 Row로 rowposition 위치 이동(rowposition:0 무시)
        					var nRow = this.FV_SAVE_CURROW;
        					this.FV_SAVE_CURROW = 0;

        					this.div_ContractInfo.form.div_Attachment.set_enableevent(false);
        					this.ds_MainContract.set_enableevent(false);
        					this.ds_MainContract.set_rowposition(nRow);

        					// 첨부파일 버튼 초기화
        					//this.div_ContractInfo.form.div_Attachment.form.fnSearch();
        					this.fnSetFileInit();
        					this.ds_MainContract.set_enableevent(true);
        					this.div_ContractInfo.form.div_Attachment.set_enableevent(true);

        					// 세부 조회
        					this.fn_ContractDetailQueryData (nRow);
        				}

        				break;

        		}
        	}
         };



         /************************************************************************************************
         * FORM 공통 FUNCTION 영역
         ************************************************************************************************/


        this.common_onclick = function(obj,e)
        {
        	if (obj.text == "btn_Insert") {
        		this.ds_list.addRow();

        	} else if (obj.text == "btn_Delete") {
        		this.ds_list.deleteRow(this.ds_list.rowposition);
        	} else if (obj.text == "btn_save") {
        		this.fn_SaveData();
        	} else if (obj.text == "btn_search") {
        		this.fn_QueryData();
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.AS_TranslationMM_onload,this);
            this.div_Search01.form.cmb_MajorProcessSel.addEventHandler("onitemchanged",this.fnSearch,this);
            this.div_Search01.form.cmb_ResultKind.addEventHandler("onitemchanged",this.cmb_ResultKind_onitemchanged,this);
            this.div_Search01.form.btn_search.addEventHandler("onclick",this.common_onclick,this);
            this.div_Search01.form.btn_save.addEventHandler("onclick",this.common_onclick,this);
            this.div_Search01.form.cmb_ResultKind00.addEventHandler("onitemchanged",this.cmb_ResultKind_onitemchanged,this);
            this.div_Search01.form.btn_Insert.addEventHandler("onclick",this.common_onclick,this);
            this.div_Search01.form.btn_Delete.addEventHandler("onclick",this.common_onclick,this);
            this.grd_Project.addEventHandler("oncelldblclick",this.grd_Project_oncelldblclick,this);
        };
        this.loadIncludeScript("AS_TranslationMM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
