(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AL_ConnuteMM");
            this.set_titletext("근태현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1360,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDept", this);
            obj._setContents("<ColumnInfo><Column id=\"LEV\" type=\"int\" size=\"11\"/><Column id=\"CO_CD\" type=\"string\" size=\"60\"/><Column id=\"CO_NM\" type=\"string\" size=\"200\"/><Column id=\"DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"DEPT_NM\" type=\"string\" size=\"510\"/><Column id=\"USE_YN\" type=\"int\" size=\"11\"/><Column id=\"FULL_DEPT_NM\" type=\"string\" size=\"200\"/><Column id=\"ORD\" type=\"string\" size=\"510\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"string\" size=\"100\"/><Column id=\"EMP_NM\" type=\"string\" size=\"255\"/><Column id=\"DEPT_NM\" type=\"string\" size=\"100\"/><Column id=\"DEPT_CD\" type=\"string\" size=\"30\"/><Column id=\"HOLI_DAY\" type=\"int\" size=\"11\"/><Column id=\"BUSINESS_TRIP_DAY\" type=\"int\" size=\"11\"/><Column id=\"EDU_DAY\" type=\"int\" size=\"11\"/><Column id=\"OUT_DAY\" type=\"int\" size=\"11\"/><Column id=\"OFF_DAY\" type=\"int\" size=\"11\"/><Column id=\"LATE_TIME\" type=\"int\" size=\"11\"/><Column id=\"VIEW_ORDER\" type=\"string\" size=\"10\"/><Column id=\"ATTEND_01\" type=\"string\" size=\"5\"/><Column id=\"ATTEND_02\" type=\"string\" size=\"5\"/><Column id=\"ATTEND_03\" type=\"string\" size=\"5\"/><Column id=\"ATTEND_04\" type=\"string\" size=\"5\"/><Column id=\"ATTEND_05\" type=\"string\" size=\"5\"/><Column id=\"ATTEND_06\" type=\"string\" size=\"5\"/><Column id=\"ATTEND_07\" type=\"string\" size=\"5\"/><Column id=\"ATTEND_08\" type=\"string\" size=\"5\"/><Column id=\"ATTEND_09\" type=\"string\" size=\"5\"/><Column id=\"ATTEND_10\" type=\"string\" size=\"5\"/><Column id=\"ATTEND_11\" type=\"string\" size=\"5\"/><Column id=\"ATTEND_12\" type=\"string\" size=\"5\"/><Column id=\"ATTEND_13\" type=\"string\" size=\"5\"/><Column id=\"ATTEND_14\" type=\"string\" size=\"5\"/><Column id=\"ATTEND_15\" type=\"string\" size=\"5\"/><Column id=\"ATTEND_16\" type=\"string\" size=\"5\"/><Column id=\"ATTEND_17\" type=\"string\" size=\"5\"/><Column id=\"ATTEND_18\" type=\"string\" size=\"5\"/><Column id=\"ATTEND_19\" type=\"string\" size=\"5\"/><Column id=\"ATTEND_20\" type=\"string\" size=\"5\"/><Column id=\"ATTEND_21\" type=\"string\" size=\"5\"/><Column id=\"ATTEND_22\" type=\"string\" size=\"5\"/><Column id=\"ATTEND_23\" type=\"string\" size=\"5\"/><Column id=\"ATTEND_24\" type=\"string\" size=\"5\"/><Column id=\"ATTEND_25\" type=\"string\" size=\"5\"/><Column id=\"ATTEND_26\" type=\"string\" size=\"5\"/><Column id=\"ATTEND_27\" type=\"string\" size=\"5\"/><Column id=\"ATTEND_28\" type=\"string\" size=\"5\"/><Column id=\"ATTEND_29\" type=\"string\" size=\"5\"/><Column id=\"ATTEND_30\" type=\"string\" size=\"5\"/><Column id=\"ATTEND_31\" type=\"string\" size=\"5\"/><Column id=\"QUIT_01\" type=\"string\" size=\"5\"/><Column id=\"QUIT_02\" type=\"string\" size=\"5\"/><Column id=\"QUIT_03\" type=\"string\" size=\"5\"/><Column id=\"QUIT_04\" type=\"string\" size=\"5\"/><Column id=\"QUIT_05\" type=\"string\" size=\"5\"/><Column id=\"QUIT_06\" type=\"string\" size=\"5\"/><Column id=\"QUIT_07\" type=\"string\" size=\"5\"/><Column id=\"QUIT_08\" type=\"string\" size=\"5\"/><Column id=\"QUIT_09\" type=\"string\" size=\"5\"/><Column id=\"QUIT_10\" type=\"string\" size=\"5\"/><Column id=\"QUIT_11\" type=\"string\" size=\"5\"/><Column id=\"QUIT_12\" type=\"string\" size=\"5\"/><Column id=\"QUIT_13\" type=\"string\" size=\"5\"/><Column id=\"QUIT_14\" type=\"string\" size=\"5\"/><Column id=\"QUIT_15\" type=\"string\" size=\"5\"/><Column id=\"QUIT_16\" type=\"string\" size=\"5\"/><Column id=\"QUIT_17\" type=\"string\" size=\"5\"/><Column id=\"QUIT_18\" type=\"string\" size=\"5\"/><Column id=\"QUIT_19\" type=\"string\" size=\"5\"/><Column id=\"QUIT_20\" type=\"string\" size=\"5\"/><Column id=\"QUIT_21\" type=\"string\" size=\"5\"/><Column id=\"QUIT_22\" type=\"string\" size=\"5\"/><Column id=\"QUIT_23\" type=\"string\" size=\"5\"/><Column id=\"QUIT_24\" type=\"string\" size=\"5\"/><Column id=\"QUIT_25\" type=\"string\" size=\"5\"/><Column id=\"QUIT_26\" type=\"string\" size=\"5\"/><Column id=\"QUIT_27\" type=\"string\" size=\"5\"/><Column id=\"QUIT_28\" type=\"string\" size=\"5\"/><Column id=\"QUIT_29\" type=\"string\" size=\"5\"/><Column id=\"QUIT_30\" type=\"string\" size=\"5\"/><Column id=\"QUIT_31\" type=\"string\" size=\"5\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_Search","8","8",null,"40","8",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_WF_SchList");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Year","18","8","58","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("0");
            obj.set_text("조회년월");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.div_Search.addChild(obj.name, obj);

            obj = new Div("div_Search_yyyyMM","stc_Year:8","8","145","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("1");
            obj.set_url("Common::COM_yyyyMM.xfdl");
            obj.getSetter("user_onchanged").set("fnSearch");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_Search",null,"8","60","22","8",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_SchText");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("stc_Count",null,"8","150","22","82",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("3");
            obj.set_textAlign("right");
            this.div_Search.addChild(obj.name, obj);

            obj = new Combo("cmb_Dept","241","9","270","20",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("4");
            obj.set_innerdataset("dsDept");
            obj.set_codecolumn("DEPT_CD");
            obj.set_datacolumn("FULL_DEPT_NM");
            obj.set_index("-1");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_ExcelExport",null,"8","66","22","75",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("5");
            obj.set_text("Excel");
            obj.set_cssclass("btn_WF_Excel");
            obj.set_visible("true");
            this.div_Search.addChild(obj.name, obj);

            obj = new Grid("grdList","8","56",null,null,"8","8",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"180\" band=\"left\"/><Column size=\"100\" band=\"left\"/><Column size=\"50\" band=\"left\"/><Column size=\"50\" band=\"left\"/><Column size=\"50\" band=\"left\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"부서\"/><Cell col=\"1\" rowspan=\"2\" text=\"성명\"/><Cell col=\"2\" text=\"지각\"/><Cell col=\"3\" text=\"휴가\"/><Cell col=\"4\" text=\"휴직\"/><Cell col=\"5\" rowspan=\"2\" text=\"1일 \"/><Cell col=\"6\" rowspan=\"2\" text=\"2일 \"/><Cell col=\"7\" rowspan=\"2\" text=\"3일 \"/><Cell col=\"8\" rowspan=\"2\" text=\"4일 \"/><Cell col=\"9\" rowspan=\"2\" text=\"5일 \"/><Cell col=\"10\" rowspan=\"2\" text=\"6일 \"/><Cell col=\"11\" rowspan=\"2\" text=\"7일 \"/><Cell col=\"12\" rowspan=\"2\" text=\"8일 \"/><Cell col=\"13\" rowspan=\"2\" text=\"9일 \"/><Cell col=\"14\" rowspan=\"2\" text=\"10일 \"/><Cell col=\"15\" rowspan=\"2\" text=\"11일 \"/><Cell col=\"16\" rowspan=\"2\" text=\"12일 \"/><Cell col=\"17\" rowspan=\"2\" text=\"13일 \"/><Cell col=\"18\" rowspan=\"2\" text=\"14일 \"/><Cell col=\"19\" rowspan=\"2\" text=\"15일 \"/><Cell col=\"20\" rowspan=\"2\" text=\"16일 \"/><Cell col=\"21\" rowspan=\"2\" text=\"17일 \"/><Cell col=\"22\" rowspan=\"2\" text=\"18일 \"/><Cell col=\"23\" rowspan=\"2\" text=\"19일 \"/><Cell col=\"24\" rowspan=\"2\" text=\"20일 \"/><Cell col=\"25\" rowspan=\"2\" text=\"21일 \"/><Cell col=\"26\" rowspan=\"2\" text=\"22일 \"/><Cell col=\"27\" rowspan=\"2\" text=\"23일 \"/><Cell col=\"28\" rowspan=\"2\" text=\"24일 \"/><Cell col=\"29\" rowspan=\"2\" text=\"25일 \"/><Cell col=\"30\" rowspan=\"2\" text=\"26일\"/><Cell col=\"31\" rowspan=\"2\" text=\"27일\"/><Cell col=\"32\" rowspan=\"2\" text=\"28일\"/><Cell col=\"33\" rowspan=\"2\" text=\"29일\"/><Cell col=\"34\" rowspan=\"2\" text=\"30일 \"/><Cell col=\"35\" rowspan=\"2\" text=\"31일\"/><Cell row=\"1\" col=\"2\" text=\"출장\"/><Cell row=\"1\" col=\"3\" text=\"외근\"/><Cell row=\"1\" col=\"4\" text=\"교육\"/></Band><Band id=\"body\"><Cell rowspan=\"2\" text=\"bind:DEPT_NM\" textAlign=\"left\" suppress=\"1\"/><Cell col=\"1\" rowspan=\"2\" textAlign=\"center\" text=\"bind:EMP_NM\"/><Cell col=\"2\" text=\"bind:LATE_TIME\"/><Cell col=\"3\" text=\"bind:HOLI_DAY\"/><Cell col=\"4\" text=\"bind:OFF_DAY\"/><Cell col=\"5\" text=\"bind:ATTEND_01\"/><Cell col=\"6\" text=\"bind:ATTEND_02\"/><Cell col=\"7\" text=\"bind:ATTEND_03\"/><Cell col=\"8\" text=\"bind:ATTEND_04\"/><Cell col=\"9\" text=\"bind:ATTEND_05\"/><Cell col=\"10\" text=\"bind:ATTEND_06\"/><Cell col=\"11\" text=\"bind:ATTEND_07\"/><Cell col=\"12\" text=\"bind:ATTEND_08\"/><Cell col=\"13\" text=\"bind:ATTEND_09\"/><Cell col=\"14\" text=\"bind:ATTEND_10\"/><Cell col=\"15\" text=\"bind:ATTEND_11\"/><Cell col=\"16\" text=\"bind:ATTEND_12\"/><Cell col=\"17\" text=\"bind:ATTEND_13\"/><Cell col=\"18\" text=\"bind:ATTEND_14\"/><Cell col=\"19\" text=\"bind:ATTEND_15\"/><Cell col=\"20\" text=\"bind:ATTEND_16\"/><Cell col=\"21\" text=\"bind:ATTEND_17\"/><Cell col=\"22\" text=\"bind:ATTEND_18\"/><Cell col=\"23\" text=\"bind:ATTEND_19\"/><Cell col=\"24\" text=\"bind:ATTEND_20\"/><Cell col=\"25\" text=\"bind:ATTEND_21\"/><Cell col=\"26\" text=\"bind:ATTEND_22\"/><Cell col=\"27\" text=\"bind:ATTEND_23\"/><Cell col=\"28\" text=\"bind:ATTEND_24\"/><Cell col=\"29\" text=\"bind:ATTEND_25\"/><Cell col=\"30\" text=\"bind:ATTEND_26\"/><Cell col=\"31\" text=\"bind:ATTEND_27\"/><Cell col=\"32\" text=\"bind:ATTEND_28\"/><Cell col=\"33\" text=\"bind:ATTEND_29\"/><Cell col=\"34\" text=\"bind:ATTEND_30\"/><Cell col=\"35\" text=\"bind:ATTEND_31\"/><Cell row=\"1\" col=\"2\" text=\"bind:BUSINESS_TRIP_DAY\"/><Cell row=\"1\" col=\"3\" text=\"bind:OUT_DAY\"/><Cell row=\"1\" col=\"4\" text=\"bind:EDU_DAY\"/><Cell row=\"1\" col=\"5\" text=\"bind:QUIT_01\"/><Cell row=\"1\" col=\"6\" text=\"bind:QUIT_02\"/><Cell row=\"1\" col=\"7\" text=\"bind:QUIT_03\"/><Cell row=\"1\" col=\"8\" text=\"bind:QUIT_04\"/><Cell row=\"1\" col=\"9\" text=\"bind:QUIT_05\"/><Cell row=\"1\" col=\"10\" text=\"bind:QUIT_06\"/><Cell row=\"1\" col=\"11\" text=\"bind:QUIT_07\"/><Cell row=\"1\" col=\"12\" text=\"bind:QUIT_08\"/><Cell row=\"1\" col=\"13\" text=\"bind:QUIT_09\"/><Cell row=\"1\" col=\"14\" text=\"bind:QUIT_10\"/><Cell row=\"1\" col=\"15\" text=\"bind:QUIT_11\"/><Cell row=\"1\" col=\"16\" text=\"bind:QUIT_12\"/><Cell row=\"1\" col=\"17\" text=\"bind:QUIT_13\"/><Cell row=\"1\" col=\"18\" text=\"bind:QUIT_14\"/><Cell row=\"1\" col=\"19\" text=\"bind:QUIT_15\"/><Cell row=\"1\" col=\"20\" text=\"bind:QUIT_16\"/><Cell row=\"1\" col=\"21\" text=\"bind:QUIT_17\"/><Cell row=\"1\" col=\"22\" text=\"bind:QUIT_18\"/><Cell row=\"1\" col=\"23\" text=\"bind:QUIT_19\"/><Cell row=\"1\" col=\"24\" text=\"bind:QUIT_20\"/><Cell row=\"1\" col=\"25\" text=\"bind:QUIT_21\"/><Cell row=\"1\" col=\"26\" text=\"bind:QUIT_22\"/><Cell row=\"1\" col=\"27\" text=\"bind:QUIT_23\"/><Cell row=\"1\" col=\"28\" text=\"bind:QUIT_24\"/><Cell row=\"1\" col=\"29\" text=\"bind:QUIT_25\"/><Cell row=\"1\" col=\"30\" text=\"bind:QUIT_26\"/><Cell row=\"1\" col=\"31\" text=\"bind:QUIT_27\"/><Cell row=\"1\" col=\"32\" text=\"bind:QUIT_28\"/><Cell row=\"1\" col=\"33\" text=\"bind:QUIT_29\"/><Cell row=\"1\" col=\"34\" text=\"bind:QUIT_30\"/><Cell row=\"1\" col=\"35\" text=\"bind:QUIT_31\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_Search.form.div_Search_yyyyMM
            obj = new Layout("default","",0,0,this.div_Search.form.div_Search_yyyyMM.form,function(p){});
            this.div_Search.form.div_Search_yyyyMM.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_Search.form
            obj = new Layout("default","",0,0,this.div_Search.form,function(p){});
            this.div_Search.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1360,560,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Common::COM_yyyyMM.xfdl");
        };
        
        // User Script
        this.addIncludeScript("AL_CommuteMM.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("AL_CommuteMM.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("AL_CommuteMM.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("AL_CommuteMM.xfdl","Script::CommGrid.xjs");
        this.registerScript("AL_CommuteMM.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 : 공통 - 공통
        * 02. 화면명   :
        * 03. 화면설명 :
        * 04. 작성일   :
        * 05. 작성자   :
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
        this.formLoadYn = true;	// load 여부
        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/

        this.AL_ConnuteMM_onload = function(obj,e)
        {
        	this.gfnCompInit(obj); //Grid 공통함수 호출
        	this.fnFormInit();
        };



        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.fnFormInit = function()
        {
        	if(nexacro.getApplication().id=="ACEp")
        		this.parent.parent.stc_FormTitle.set_text(this.titletext);



        	var date = new Date();
        	var strMonth = this.gfnGetDateMaskFormatString(date, "yyyyMM");
        	this.div_Search.form.div_Search_yyyyMM.setYYYYMM(strMonth);

        	this.fn_Search_Dept();
        };


        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fn_Search_Dept = function()
        {
        	// 조회용 셋팅
        	this.gfnAddOutputDataset("dsDept", "dsoutput");
        	this.gfnCommonTransaction("Dept_Search", "AL_CommuteMM_S02", null);

        }


        this.fnSearch = function()
        {
        	this.gfnAddSendParameter("YYYYMM", this.div_Search.form.div_Search_yyyyMM.getYYYYMM());
        	this.gfnAddSendParameter("DEPT_CD", this.div_Search.form.cmb_Dept.value);

        	this.gfnAddOutputDataset("dsList", "dsoutput");
        	this.gfnCommonTransaction("Select", "AL_CommuteMM_S01", this.grd_Main, false);
        };



        this.fnCallBack = function (strSvcId, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode<0) {
        		this.alert("["+nErrorCode+"] "+strErrorMsg);
        		return
        	}
        	switch (strSvcId)
        	{
        		case "Dept_Search":
        			this.dsDept.set_enableevent(false);
        			this.dsDept.insertRow(0);
        			this.dsDept.setColumn(0, "FULL_DEPT_NM", "전체");
        			this.div_Search.form.cmb_Dept.set_index(0);
        			this.dsDept.set_enableevent(true);

        			this.fnSearch();
        			break;
        		case "Select":
        			break;
        	}
        };


        this.div_Search_btn_Search_onclick = function(obj,e)
        {
        	this.fnSearch();
        };

        this.div_Search_cmb_Dept_onitemchanged = function(obj,e)
        {
        	this.fnSearch();
        };

        this.div_Search_btn_ExcelExport_onclick = function(obj,e)
        {
        	this.gfn_excelExport(this, this.grdList, "근태현황");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.AL_ConnuteMM_onload,this);
            this.div_Search.form.btn_Search.addEventHandler("onclick",this.div_Search_btn_Search_onclick,this);
            this.div_Search.form.cmb_Dept.addEventHandler("onitemchanged",this.div_Search_cmb_Dept_onitemchanged,this);
            this.div_Search.form.btn_ExcelExport.addEventHandler("onclick",this.div_Search_btn_ExcelExport_onclick,this);
        };
        this.loadIncludeScript("AL_CommuteMM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
