(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmTimeSelect");
            this.set_titletext("시/분 선택");
            if (Form == this.constructor)
            {
                this._setFormPosition(110,28);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new MaskEdit("msk00_00","242","30",null,null,"-242","-30",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_format("##:##");
            obj.set_displaynulltext("Time");
            obj.set_type("string");
            obj.set_autoskip("true");
            obj.set_autoselect("true");
            obj.set_value("0000");
            obj.set_readonly("true");
            obj.set_visible("false");
            obj.set_padding("1px 27px 0px 9px");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("msk00","242","0",null,null,"-242","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_format("##:##");
            obj.set_displaynulltext("시간");
            obj.set_cssclass("point");
            obj.set_type("string");
            obj.set_autoskip("true");
            obj.set_autoselect("true");
            obj.set_value("0000");
            obj.set_visible("false");
            obj.set_padding("1px 27px 0px 9px");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskTime","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_format("##:##");
            obj.set_displaynulltext("시간");
            obj.set_cssclass("maskTime");
            obj.set_type("string");
            obj.set_autoskip("true");
            obj.set_autoselect("true");
            obj.set_value("0000");
            obj.set_padding("1px 27px 0px 9px");
            this.addChild(obj.name, obj);

            obj = new Button("btnShow",null,"1","26",null,"1","1",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_time");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdivTime","0","28","126","109",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("pdiv_POP_lev3");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("mskHour","12","35","38","38",null,null,null,null,null,null,this.pdivTime.form);
            obj.set_taborder("2");
            obj.set_textAlign("center");
            obj.set_format("##");
            obj.set_value("00");
            obj.set_type("string");
            obj.set_autoskip("true");
            obj.set_autoselect("true");
            obj.set_font("normal 500 14px/normal \"Roboto Medium\",\"RobotoWeb\",\"맑은 고딕\"");
            obj.set_borderRadius("0px");
            obj.set_border("0px none");
            this.pdivTime.addChild(obj.name, obj);

            obj = new Static("staUnit","50","40","24","26",null,null,null,null,null,null,this.pdivTime.form);
            obj.set_taborder("1");
            obj.set_text(":");
            obj.set_cssclass("sta_WF_unit");
            this.pdivTime.addChild(obj.name, obj);

            obj = new MaskEdit("mskMinute","74","35","38","38",null,null,null,null,null,null,this.pdivTime.form);
            obj.set_taborder("5");
            obj.set_textAlign("center");
            obj.set_format("##");
            obj.set_value("00");
            obj.set_type("string");
            obj.set_autoskip("true");
            obj.set_autoselect("true");
            obj.set_font("normal 500 14px/normal \"Roboto Medium\",\"RobotoWeb\",\"맑은 고딕\"");
            obj.set_borderRadius("0px");
            obj.set_border("0px none");
            this.pdivTime.addChild(obj.name, obj);

            obj = new Edit("edtTemp","0","0","0","0",null,null,null,null,null,null,this.pdivTime.form);
            obj.set_taborder("0");
            obj.set_visible("true");
            this.pdivTime.addChild(obj.name, obj);

            obj = new Button("btnHup","12","8","38","28",null,null,null,null,null,null,this.pdivTime.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_timeUp");
            obj.set_tabstop("false");
            this.pdivTime.addChild(obj.name, obj);

            obj = new Button("btnHdown","12","72","38","28",null,null,null,null,null,null,this.pdivTime.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_timeDown");
            obj.set_tabstop("false");
            this.pdivTime.addChild(obj.name, obj);

            obj = new Button("btnMup","74","8","38","28",null,null,null,null,null,null,this.pdivTime.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_timeUp");
            obj.set_tabstop("false");
            this.pdivTime.addChild(obj.name, obj);

            obj = new Button("btnMdown","74","72","38","28",null,null,null,null,null,null,this.pdivTime.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_WF_timeDown");
            obj.set_tabstop("false");
            this.pdivTime.addChild(obj.name, obj);

            obj = new Static("staUnitS","113","40","24","26",null,null,null,null,null,null,this.pdivTime.form);
            obj.set_taborder("8");
            obj.set_text(":");
            obj.set_cssclass("sta_WF_unit");
            obj.set_visible("false");
            this.pdivTime.addChild(obj.name, obj);

            obj = new MaskEdit("mskSecond","135","35","38","38",null,null,null,null,null,null,this.pdivTime.form);
            obj.set_taborder("9");
            obj.set_textAlign("center");
            obj.set_format("##");
            obj.set_value("00");
            obj.set_type("string");
            obj.set_autoskip("true");
            obj.set_autoselect("true");
            obj.set_font("normal 500 14px/normal \"Roboto Medium\",\"RobotoWeb\",\"맑은 고딕\"");
            obj.set_borderRadius("0px");
            obj.set_border("0px none");
            obj.set_visible("false");
            this.pdivTime.addChild(obj.name, obj);

            obj = new Button("btnSup","135","8","38","28",null,null,null,null,null,null,this.pdivTime.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_WF_timeUp");
            obj.set_tabstop("false");
            obj.set_visible("false");
            this.pdivTime.addChild(obj.name, obj);

            obj = new Button("btnSdown","135","72","38","28",null,null,null,null,null,null,this.pdivTime.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_WF_timeDown");
            obj.set_tabstop("false");
            obj.set_visible("false");
            this.pdivTime.addChild(obj.name, obj);

            obj = new Button("Button00_00",null,"0","26",null,"-242","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_time");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00_00",null,"30","26",null,"-242","-30",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_time");
            obj.set_enable("false");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","367","2","107","21",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("필수입력 스타일 ");
            obj.set_color("red");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01_00","366","31","107","21",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("읽기전용 스타일");
            obj.set_color("red");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.pdivTime.form
            obj = new Layout("default","",0,0,this.pdivTime.form,function(p){});
            this.pdivTime.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",110,28,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmTimeSelect.xfdl", function() {
        /**
        * commComp
        * Business
        * FileName 	  commTimeSelect.xfdl
        * Creator 	  TOBESOFT
        * CreateDate  2023/12/28
        * Desction    시/분 입력
        *--------------  Source Modify History  ---------------------------------------
        * Date					Modifier					Description
        *------------------------------------------------------------------------------
        * 2023/12/28			@RHS						Initial creation
        *******************************************************************************
        */

        /************************************************************************************
         * FORM Variable Area
        ************************************************************************************/
        this.fvIsoHours ="HH24";
        this.fvCallbackFunction;
        this.fvObjForm;

        /************************************************************************************
         * FORM Event Area (onload, onbeforeclose..)
        ************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	if(!this.gfnIsNull(this.parent.uSetTimeVlaue)) {
        		this.setValue(this.parent.uSetTimeVlaue);
        	}

        	if(!this.gfnIsNull(this.parent.uFunction)) {
        		this.mskTime.set_format("##:##:##");

        	}
        };

        /* @param  sHours - 기준시간체계[HH24/HH12]
         * 		   sCallbackFunction - callback 함수
         *         objForm
        */
        this.fnInit = function(objForm, sHours,sCallbackFunction)
        {
        	if (!this.gfnIsNull(sHours))	this.fvIsoHours = sHours;	// 기준시간
        	this.fvCallbackFunction = sCallbackFunction;		//callback 셋팅
        	this.fvObjForm = objForm;
        }

        /************************************************************************************
         * Transaction Function Area
        ************************************************************************************/

        /************************************************************************************
         * Callback Event Area (Transaction, popup, message..)
        ************************************************************************************/

        /************************************************************************************
         * User Function Area
        ************************************************************************************/
        /**
         * @description  return date
        */
        this.getValue = function ()
        {
        	return String(this.mskTime.value);
        };

        /**
        * @description   보이는대로 값가져오기
        */
        this.fnGetText = function()
        {
        	return String(this.mskTime.text);
        };

        /**
         * @description date setting
        */
        this.setValue = function (value)
        {
        	this.mskTime.set_value(value);
        };

        /**
        * @description Essential css세팅 [true/false]
        */
        this.fnSetEssential  = function (bValue)
        {
        	//CSS Class가 있는 경우 클래스설정
        	if(bValue){
        		this.mskTime.set_cssclass("point");
        	}else{
        		this.mskTime.set_cssclass("");
        	}
        };

        /**
        * @description enable 세팅 [true/false]
        */
        this.fnSetEnable = function (bValue)
        {
        	this.mskTime.set_enable(bValue);
        	this.btnShow.set_enable(bValue);
        };

        /**
        * @description readonly 세팅 [true/false]
        */
        this.fnSetReadonly = function (bValue)
        {
        	this.mskTime.set_readonly(bValue);
        	this.btnShow.set_enable(bValue);
        };

        this.fnCheckValidation = function(postValue, preValue)
        {
        	if(!this.gfnIsEmpty(postValue))
        	{
        		var sHour = nexacro.toNumber(postValue.substr(0,2));
        		var sMinu = nexacro.toNumber(postValue.substr(2,2));

        		if (sHour<0 || sHour>23)	sHour = "0";
        		if (sMinu<0 || sMinu>59)	sMinu = "0";

        		if (sHour=="0" || sMinu=="0") this.setValue(preValue);
        	}
        };

        this.fnSecondView = function (bFlag)
        {
        	if (bFlag) {
        		this.pdivTime.set_width(190);
        		this.pdivTime.form.staUnitS.set_left(111);
        		this.pdivTime.form.staUnitS.set_visible(true);
        		this.pdivTime.form.mskSecond.set_visible(true);
        		this.pdivTime.form.btnSup.set_visible(true);
        		this.pdivTime.form.btnSdown.set_visible(true);
        	}else {
        		this.pdivTime.set_width(126);
        		this.pdivTime.form.staUnitS.set_left(113);
        		this.pdivTime.form.staUnitS.set_visible(false);
        		this.pdivTime.form.mskSecond.set_visible(false);
        		this.pdivTime.form.btnSup.set_visible(false);
        		this.pdivTime.form.btnSdown.set_visible(false);
        	}
        };

        /************************************************************************************
         * Component Event Area
        ************************************************************************************/
        this.btnShow_onclick = function(obj,e)
        {
        	if(!this.gfnIsNull(this.parent.uFunction)) {
        		this.fnSecondView(true);
        	}

        	this.pdivTime.form.edtTemp.setFocus();
        	this.pdivTime.trackPopupByComponent(this.mskTime, 0, this.mskTime.getOffsetHeight());
        };

        //시
        this.btnHourCtrl_onclick = function(obj,e)
        {
        	var sHour = nexacro.toNumber(this.pdivTime.form.mskHour.value);
        	if (this.gfnIsNull(sHour))	sHour = 0;

        	if (obj.id=="btnHup")	sHour = sHour + 1;
        	else 					sHour = sHour - 1;

        	if (this.fvIsoHours =="HH24") {
        		if (sHour<0)	sHour = "23";
        		if (sHour>23)	sHour = "01";
        		else 			sHour = this.gfnLPad(sHour, "0", 2);
        	}else {
        		if (sHour<0)	sHour = "11";
        		if (sHour>23)	sHour = "01";
        		else 			sHour = this.gfnLPad(sHour, "0", 2);
        	}

        	this.pdivTime.form.mskHour.set_value(sHour);
        };

        //분
        this.btnMinuteCtrl_onclick = function(obj,e)
        {
        	var sHour = nexacro.toNumber(this.pdivTime.form.mskMinute.value);
        	if (this.gfnIsNull(sHour))	sHour = 0;

        	if (obj.id=="btnMup")	sHour = sHour + 1;
        	else 					sHour = sHour - 1;

        	if (sHour<0)	sHour = "59";
        	else if (sHour>59)	sHour = "01";
        	else 			sHour = this.gfnLPad(sHour, "0", 2);

        	sHour = this.gfnLPad(sHour, "0", 2);
        	this.pdivTime.form.mskMinute.set_value(sHour);
        };

        //초
        this.btnSecondCtrl_onclick = function(obj,e)
        {
        	var sHour = nexacro.toNumber(this.pdivTime.form.mskSecond.value);
        	if (this.gfnIsNull(sHour))	sHour = 0;

        	if (obj.id=="btnSup")	sHour = sHour + 1;
        	else 					sHour = sHour - 1;

        	if (sHour<0)	sHour = "59";
        	else if (sHour>59)	sHour = "01";
        	else 			sHour = this.gfnLPad(sHour, "0", 2);

        	sHour = this.gfnLPad(sHour, "0", 2);
        	this.pdivTime.form.mskSecond.set_value(sHour);
        };

        this.pdivTime_onpopup = function(obj,e)
        {
        	var sTime = String(this.mskTime.value);

        	this.pdivTime.form.mskHour.set_value(sTime.substr(0,2));
        	this.pdivTime.form.mskMinute.set_value(sTime.substr(2,2));
        	this.pdivTime.form.mskSecond.set_value(sTime.substr(4,2));
        };

        this.pdivTime_oncloseup = function(obj,e)
        {
        	this.pdivTime.form.edtTemp.setFocus();
        	var sTime = this.pdivTime.form.mskHour.value + this.pdivTime.form.mskMinute.value;
        	if(!this.gfnIsNull(this.parent.uFunction)) {
        		sTime = sTime + this.pdivTime.form.mskSecond.value;
        	}

        	this.mskTime.set_value(sTime);

        	var oRtn = {};
        	oRtn.time = sTime;
        	try{
        		this.fvCallbackFunction.call(this.fvObjForm, this.id, oRtn);
        	}catch(e){}
        };

        this.mskTime_onchanged = function(obj,e)
        {
        	this.fnCheckValidation(e.postvalue, e.prevalue);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.mskTime.addEventHandler("onchanged",this.mskTime_onchanged,this);
            this.btnShow.addEventHandler("onclick",this.btnShow_onclick,this);
            this.pdivTime.addEventHandler("oncloseup",this.pdivTime_oncloseup,this);
            this.pdivTime.addEventHandler("onpopup",this.pdivTime_onpopup,this);
            this.pdivTime.form.btnHup.addEventHandler("onclick",this.btnHourCtrl_onclick,this);
            this.pdivTime.form.btnHdown.addEventHandler("onclick",this.btnHourCtrl_onclick,this);
            this.pdivTime.form.btnMup.addEventHandler("onclick",this.btnMinuteCtrl_onclick,this);
            this.pdivTime.form.btnMdown.addEventHandler("onclick",this.btnMinuteCtrl_onclick,this);
            this.pdivTime.form.btnSup.addEventHandler("onclick",this.btnSecondCtrl_onclick,this);
            this.pdivTime.form.btnSdown.addEventHandler("onclick",this.btnSecondCtrl_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.time_open,this);
            this.Button00_00_00.addEventHandler("onclick",this.time_open,this);
        };
        this.loadIncludeScript("cmmTimeSelect.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
