(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleCalendarModule");
            this.set_titletext("캘린더");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,870);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new TextArea("txaGuide","0","0",null,"390","20",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_value("- 캘린더 사용 방법\n - component 목록에서 PeriodCalendar(기간달력), MonthCalendar(월달력), WeekCalendar(주차달력)을 선택하여 화면에 배치 후 사용한다.\n\n- 호출 할 수 있는 함수\n 공통함수 \n - setRequired(); // 필수설정\n - setReadOnly();//리드온리설정\n\n 각 component 별 함수\n - setDate(); // value세팅 , 주차달력/월달력 only\n - getDate(); //선택된 value가져오기 주차달력/월달력 only\n - getWeek(); //주차달력 only\n - setFromDate();//기간달력의 from date세팅 기간달력 only\n - getFromDate();//기간달력의 from date가져오기 기간달력 only\n - setToDate();//기간달력의 to date세팅 기간달력 only\n - getToDate();//기간달력의 to dater가져오기 기간달력 only");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","0","txaGuide:0","169","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("주차달력");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new WeekCalendar("WeekCalendar00","0","Static01:0","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetWCalDate","WeekCalendar00:3","Static01:0","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("get date");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetWCalWeek","btnGetWCalDate:3","Static01:0","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("get week");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetWCalDate","btnGetWCalWeek:3","Static01:0","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("set date");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","0","WeekCalendar00:0","169","43",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("월달력");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new MonthCalendar("MonthCalendar00","0","Static01_00:0","150","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetMCalM","MonthCalendar00:3","Static01_00:0","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("get month");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetMCalM","btnGetMCalM:3","Static01_00:0","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("set month");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00_00","0","MonthCalendar00:0","169","43",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("기간달력");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new PeriodCalendar("PeriodCalendar00","0","Static01_00_00:0","320","28",null,null,null,null,null,null,this);
            this.addChild(obj.name, obj);

            obj = new Button("btnGetFTCalFDate","PeriodCalendar00:3","Static01_00_00:0","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("get from date");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetFTCalFDate","btnGetFTCalFDate:3","Static01_00_00:0","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("set from date");
            this.addChild(obj.name, obj);

            obj = new Button("btnGetFTCalTDate","PeriodCalendar00:3","btnGetFTCalFDate:3","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("get to date");
            this.addChild(obj.name, obj);

            obj = new Button("btnSetFTCalTDate","btnGetFTCalTDate:3","btnSetFTCalFDate:3","120","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("set to date");
            this.addChild(obj.name, obj);

            obj = new Static("Static04_00",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W20");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal00","700","454","260","209",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_type("monthonly");
            this.addChild(obj.name, obj);

            obj = new WeekByMonthCalendar("WeekByMonthCalendar00","129","689","140","28",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1050,870,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleCalendarModule.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	sampleCalendarModule.xfdl
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
        	alert(this.WeekCalendar00.getDate());
        };


        this.btnGetWCalWeek_onclick = function(obj,e)
        {
        	alert(this.WeekCalendar00.getWeek());
        };

        this.btnSetWCalDate_onclick = function(obj,e)
        {
        	this.WeekCalendar00.setDate("20201207");
        };

        this.btnGetMCalM_onclick = function(obj,e)
        {
        	alert(this.MonthCalendar00.getDate());
        };

        this.btnSetMCalM_onclick = function(obj,e)
        {
        	this.MonthCalendar00.setDate("20201207");
        };

        this.btnGetFTCalFDate_onclick = function(obj,e)
        {
        	alert(this.PeriodCalendar00.getFromDate());
        };

        this.btnSetFTCalFDate_onclick = function(obj,e)
        {
        	this.PeriodCalendar00.setFromDate("20201207");
        };

        this.btnGetFTCalTDate_onclick = function(obj,e)
        {
        	alert(this.PeriodCalendar00.getToDate());
        };

        this.btnSetFTCalTDate_onclick = function(obj,e)
        {
        	this.PeriodCalendar00.setToDate("20201231");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnGetWCalDate.addEventHandler("onclick",this.btnGetWCalDate_onclick,this);
            this.btnGetWCalWeek.addEventHandler("onclick",this.btnGetWCalWeek_onclick,this);
            this.btnSetWCalDate.addEventHandler("onclick",this.btnSetWCalDate_onclick,this);
            this.btnGetMCalM.addEventHandler("onclick",this.btnGetMCalM_onclick,this);
            this.btnSetMCalM.addEventHandler("onclick",this.btnSetMCalM_onclick,this);
            this.btnGetFTCalFDate.addEventHandler("onclick",this.btnGetFTCalFDate_onclick,this);
            this.btnSetFTCalFDate.addEventHandler("onclick",this.btnSetFTCalFDate_onclick,this);
            this.btnGetFTCalTDate.addEventHandler("onclick",this.btnGetFTCalTDate_onclick,this);
            this.btnSetFTCalTDate.addEventHandler("onclick",this.btnSetFTCalTDate_onclick,this);
        };
        this.loadIncludeScript("sampleCalendarModule.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
