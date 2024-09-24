(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AT_TranslationInfoPopup");
            this.set_titletext("번역정보 추가팝업");
            this.set_cssclass("frm_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,510);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmm_UseFlag", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION_JAP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">1</Col><Col id=\"CAPTION\">사용</Col><Col id=\"CAPTION_JAP\">使用</Col></Row><Row><Col id=\"CODE\">0</Col><Col id=\"CAPTION\">미사용</Col><Col id=\"CAPTION_JAP\">未使用</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTranslationInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"TL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TL_DATA_KOR\" type=\"STRING\" size=\"256\"/><Column id=\"TL_DATA_JAP\" type=\"STRING\" size=\"256\"/><Column id=\"TL_DATA_ENG\" type=\"STRING\" size=\"256\"/><Column id=\"USE_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("st_Title","10","0","356","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("번역 추가");
            obj.set_cssclass("sta_POP_Title");
            obj.getSetter("TL_SEQ").set("22647");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0",null,null,"30","0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_BtnBg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Cancel",null,null,"65","22","8","3",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_cancel");
            obj.set_text("닫기");
            obj.getSetter("TL_SEQ").set("59");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close",null,"8","15","15","8",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_POP_Cls");
            obj.set_text("");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_TranslationInfo","8","46",null,null,"8","Static01:8",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("div_WF_detailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_TLDataKor","8","8","80","90",null,null,null,null,null,null,this.div_TranslationInfo.form);
            obj.set_taborder("0");
            obj.set_text("국문");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("22607");
            this.div_TranslationInfo.addChild(obj.name, obj);

            obj = new TextArea("ta_TLDataKor","96","8",null,"90","8",null,null,null,null,null,this.div_TranslationInfo.form);
            obj.set_taborder("1");
            this.div_TranslationInfo.addChild(obj.name, obj);

            obj = new Static("stc_TLDataJap","8","106","80","90",null,null,null,null,null,null,this.div_TranslationInfo.form);
            obj.set_taborder("2");
            obj.set_text("일문");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("22608");
            this.div_TranslationInfo.addChild(obj.name, obj);

            obj = new TextArea("ta_TLDataJap","96","106",null,"90","8",null,null,null,null,null,this.div_TranslationInfo.form);
            obj.set_taborder("3");
            this.div_TranslationInfo.addChild(obj.name, obj);

            obj = new Static("stc_TLDataEng","8","204","80","90",null,null,null,null,null,null,this.div_TranslationInfo.form);
            obj.set_taborder("4");
            obj.set_text("영문");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("22609");
            this.div_TranslationInfo.addChild(obj.name, obj);

            obj = new TextArea("ta_TLDataEng","96","204",null,"90","8",null,null,null,null,null,this.div_TranslationInfo.form);
            obj.set_taborder("5");
            this.div_TranslationInfo.addChild(obj.name, obj);

            obj = new Static("stc_UseFlag","8","302","80","22",null,null,null,null,null,null,this.div_TranslationInfo.form);
            obj.set_taborder("6");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("669");
            this.div_TranslationInfo.addChild(obj.name, obj);

            obj = new Radio("rd_UseFlag","96","302","478","25",null,null,null,null,null,null,this.div_TranslationInfo.form);
            obj.set_taborder("7");
            obj.set_innerdataset("ds_cmm_UseFlag");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_columncount("0");
            obj.set_rowcount("1");
            obj.getSetter("TL_FLAG").set("1");
            obj.set_text("사용");
            obj.set_value("1");
            obj.set_index("0");
            this.div_TranslationInfo.addChild(obj.name, obj);

            obj = new Static("stc_Remark","8","332","80","68",null,null,null,null,null,null,this.div_TranslationInfo.form);
            obj.set_taborder("8");
            obj.set_text("비고");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("45");
            this.div_TranslationInfo.addChild(obj.name, obj);

            obj = new TextArea("ta_Remark","96","332","478","68",null,null,null,null,null,null,this.div_TranslationInfo.form);
            obj.set_taborder("9");
            this.div_TranslationInfo.addChild(obj.name, obj);

            obj = new Button("btn_Save","454",null,null,"22","btn_Cancel:8","3",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("등록");
            obj.set_cssclass("btn_WF_tran");
            obj.getSetter("TL_SEQ").set("585");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_TranslationInfo.form
            obj = new Layout("default","",0,0,this.div_TranslationInfo.form,function(p){});
            this.div_TranslationInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",600,510,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_TranslationInfo.form.ta_TLDataKor","value","dsTranslationInfo","TL_DATA_KOR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_TranslationInfo.form.ta_TLDataJap","value","dsTranslationInfo","TL_DATA_JAP");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_TranslationInfo.form.ta_TLDataEng","value","dsTranslationInfo","TL_DATA_ENG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_TranslationInfo.form.rd_UseFlag","value","dsTranslationInfo","USE_FLAG");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_TranslationInfo.form.ta_Remark","value","dsTranslationInfo","REMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("AT_TranslationInfoPopup.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("AT_TranslationInfoPopup.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("AT_TranslationInfoPopup.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("AT_TranslationInfoPopup.xfdl","Script::CommGrid.xjs");
        this.registerScript("AT_TranslationInfoPopup.xfdl", function() {
        /************************************************************************************************
         * 01. 업무구분 : 변역관리
         * 02. 화면명   : 번역정보 상세팝업(AT_TranslationInfoPopup)
         * 03. 화면설명 : 번역정보 상세
         * 04. 작성일   : 2023.02.03
         * 05. 작성자   : 박종언
         * 06. 수정이력 :
         ***********************************************************************************************
         *     수정일          이  름    사유
         ***********************************************************************************************
         *
         ***********************************************************************************************/
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
        * FORM 영역 EVENT 영역
        ************************************************************************************************/
        this.AT_TranslationInfoPopup_onload = function(obj,e)
        {
        	this.gfnCompInit(obj);	//	사용자 Grid
        	this.fnInit();
        };

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.fnInit = function()
        {
        	this.dsTranslationInfo.clearData();
        	var nRow = this.dsTranslationInfo.addRow();
        	// 사용여부
        	this.dsTranslationInfo.setColumn(nRow, "USE_FLAG", '1');
        };
        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        // 체크 사항
        this.fnValidation = function()
        {
        	var curRow = this.dsTranslationInfo.rowposition;
        	var sDataKor = this.dsTranslationInfo.getColumn(curRow, "TL_DATA_KOR");

        	// 체크 항목 : 국문
        	if(this.gfnIsEmpty(this.dsTranslationInfo.getColumn(curRow, "TL_DATA_KOR"))) { alert(this.gfnGetTransTxt(22614, "국문은 필수 입력 항목입니다.")); this.div_TranslationInfo.form.ta_TLDataKor.setFocus(); return false;}

        	return true;
        };

        // 저장
        this.fnSave = function()
        {
        	this.gfnAddInputDataset ("dsTranslationInfo",	"dsInput");
        	this.gfnCommonTransaction("Save", "AT_TranslationInfo_R01");
        };

         // 화면 콜백
        this.fnCallBack = function (strSvcID, nErrorCode, strErrorMag)
        {
        	if (nErrorCode<0) {
        		this.alert("["+strSvcID+":"+nErrorCode+"] "+strErrorMag);
        		return;
        	} else {
        		switch (strSvcID)
        		{
        			case "Save" :
        				alert(this.gfnGetTransTxt(1170,"저장 되었습니다."));
        				this.commUtil.popupClose("Save");
        			break;
        		}
        	}
        };

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.common_onclick = function(obj,e)
        {
        	switch(obj.name) {
        		case "btn_Save" : // 저장
        			if(this.fnValidation()) this.fnSave();
        			break;

        		case "btn_Close": case "btn_Cancel":
        			//this.close();
        			this.commUtil.popupClose("");
        			break;
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.AT_TranslationInfoPopup_onload,this);
            this.btn_Cancel.addEventHandler("onclick",this.common_onclick,this);
            this.btn_Close.addEventHandler("onclick",this.common_onclick,this);
            this.btn_Save.addEventHandler("onclick",this.common_onclick,this);
        };
        this.loadIncludeScript("AT_TranslationInfoPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
