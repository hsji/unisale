(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleCalendar");
            this.set_titletext("캘린더");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("sta03","0","750",null,"330","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("<b v=\'true\'>- 캘린더 사용 방법</b>\r\n1. div를 생성한다.\r\n2. 생성한 div에 사용할 캘린더 URL을 연결하다.\r\n - 기간달력 : common::cmmCalFT.xfdl\r\n - 월달력    : common::cmmM.xfdl\r\n - 주차달력 : common::cmmW.xfdl\r\n3. onload 이후/콤보데이터 로딩 이후  div내부 함수 setDate()함수를 호출하여 초기값을 세팅한다.\r\n\r\n<b v=\'true\'>- 호출 할 수 있는 함수</b> \r\n 공통함수 \r\n - this.div.form.setRequired(); // 필수설정\r\n - this.div.form.setReadOnly();//리드온리설정\r\n\r\n 각 component 별 함수\r\n - this.div.form.setDate(); // value세팅 , 주차달력/월달력 only\r\n - this.div.form.getDate(); //선택된 value가져오기 주차달력/월달력 only\r\n - this.div.form.getWeek(); //주차달력 only\r\n - this.div.form.setFromDate();//기간달력의 from date세팅 기간달력 only\r\n - this.div.form.getFromDate();//기간달력의 from date가져오기 기간달력 only\r\n - this.div.form.setToDate();//기간달력의 to date세팅 기간달력 only\r\n - this.div.form.getToDate();//기간달력의 to dater가져오기 기간달력 only");
            obj.set_cssclass("sta_WF_GBg01");
            obj.set_usedecorate("true");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","400","169","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("주차달력");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Div("divWeekCal","0","Static01:0","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div00");
            obj.set_url("common::cmmCalW.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetWCalDate","divWeekCal:3","Static01:0","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("get date");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetWCalWeek","btnGetWCalDate:3","Static01:0","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("get week");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetWCalDate","btnGetWCalWeek:3","Static01:0","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("set date");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","divWeekCal:0","169","50",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("월달력");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Div("divMonthCal","0","Static01_00:0","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("div00");
            obj.set_url("common::cmmCalM.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetMCalM","divMonthCal:3","Static01_00:0","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("get month");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetMCalM","btnGetMCalM:3","Static01_00:0","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("set month");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","divMonthCal:0","169","50",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("기간달력");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Div("divFTCal","0","Static01_00_00:5","330","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("div01");
            obj.set_url("common::cmmCalFT.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetFTCalFDate","divFTCal:3","Static01_00_00:5","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("get from date");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetFTCalFDate","btnGetFTCalFDate:3","Static01_00_00:5","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("set from date");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetFTCalTDate","divFTCal:3","btnGetFTCalFDate:3","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("get to date");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetFTCalTDate","btnGetFTCalTDate:3","btnSetFTCalFDate:3","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("set to date");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W20");
            this.addChild(obj.name, obj);

            obj = new TextArea("txaGuide","0","0",null,"390","20",null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_value("- 캘린더 사용 방법\n1. div를 생성한다.\n2. 생성한 div에 사용할 캘린더 URL을 연결하다.\n - 기간달력 : common::cmmCalFT.xfdl\n - 월달력    : common::cmmM.xfdl\n - 주차달력 : common::cmmW.xfdl\n3. onload 이후/콤보데이터 로딩 이후  div내부 함수 setDate()함수를 호출하여 초기값을 세팅한다.\n\n- 호출 할 수 있는 함수\n 공통함수 \n - this.div.form.setRequired(); // 필수설정\n - this.div.form.setReadOnly();//리드온리설정\n\n 각 component 별 함수\n - this.div.form.setDate(); // value세팅 , 주차달력/월달력 only\n - this.div.form.getDate(); //선택된 value가져오기 주차달력/월달력 only\n - this.div.form.getWeek(); //주차달력 only\n - this.div.form.setFromDate();//기간달력의 from date세팅 기간달력 only\n - this.div.form.getFromDate();//기간달력의 from date가져오기 기간달력 only\n - this.div.form.setToDate();//기간달력의 to date세팅 기간달력 only\n - this.div.form.getToDate();//기간달력의 to dater가져오기 기간달력 only");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divWeekCal
            obj = new Layout("default","",0,0,this.divWeekCal.form,function(p){});
            this.divWeekCal.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMonthCal
            obj = new Layout("default","",0,0,this.divMonthCal.form,function(p){});
            this.divMonthCal.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divFTCal
            obj = new Layout("default","",0,0,this.divFTCal.form,function(p){});
            this.divFTCal.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1050,736,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::cmmCalW.xfdl");
            this._addPreloadList("fdl","common::cmmCalM.xfdl");
            this._addPreloadList("fdl","common::cmmCalFT.xfdl");
        };
        
        // User Script
        this.registerScript("sampleCalendar.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	sampleCalendar.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2020/12/07
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2020/12/07			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.btnGetWCalDate_onclick = function(obj,e)
        {
        	alert(this.divWeekCal.form.getDate());
        };


        this.btnGetWCalWeek_onclick = function(obj,e)
        {
        	alert(this.divWeekCal.form.getWeek());
        };

        this.btnSetWCalDate_onclick = function(obj,e)
        {
        	this.divWeekCal.form.setDate("20201207");
        };

        this.btnGetMCalM_onclick = function(obj,e)
        {
        	alert(this.divMonthCal.form.getDate());
        };

        this.btnSetMCalM_onclick = function(obj,e)
        {
        	this.divMonthCal.form.setDate("20201207");
        };

        this.btnGetFTCalFDate_onclick = function(obj,e)
        {
        	alert(this.divFTCal.form.getFromDate());
        };

        this.btnSetFTCalFDate_onclick = function(obj,e)
        {
        	this.divFTCal.form.setFromDate("20201207");
        };

        this.btnGetFTCalTDate_onclick = function(obj,e)
        {
        	alert(this.divFTCal.form.getToDate());
        };

        this.btnSetFTCalTDate_onclick = function(obj,e)
        {
        	this.divFTCal.form.setToDate("20201231");
        };

        this.txaGuide_onchanged = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.sta03.addEventHandler("onclick",this.sta03_onclick,this);
            this.btnGetWCalDate.addEventHandler("onclick",this.btnGetWCalDate_onclick,this);
            this.btnGetWCalWeek.addEventHandler("onclick",this.btnGetWCalWeek_onclick,this);
            this.btnSetWCalDate.addEventHandler("onclick",this.btnSetWCalDate_onclick,this);
            this.btnGetMCalM.addEventHandler("onclick",this.btnGetMCalM_onclick,this);
            this.btnSetMCalM.addEventHandler("onclick",this.btnSetMCalM_onclick,this);
            this.btnGetFTCalFDate.addEventHandler("onclick",this.btnGetFTCalFDate_onclick,this);
            this.btnSetFTCalFDate.addEventHandler("onclick",this.btnSetFTCalFDate_onclick,this);
            this.btnGetFTCalTDate.addEventHandler("onclick",this.btnGetFTCalTDate_onclick,this);
            this.btnSetFTCalTDate.addEventHandler("onclick",this.btnSetFTCalTDate_onclick,this);
            this.txaGuide.addEventHandler("onchanged",this.txaGuide_onchanged,this);
        };
        this.loadIncludeScript("sampleCalendar.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
