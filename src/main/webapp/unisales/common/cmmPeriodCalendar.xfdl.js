(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("commPeriodCalendar");
            this.set_titletext("기간");
            if (Form == this.constructor)
            {
                this._setFormPosition(269,28);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("stc_bar","44.61%","0","29",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("~");
            obj.set_cssclass("sta_WF_unit");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_to","stc_bar:0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_initvalueid("iv_cal");
            obj.set_taborder("8");
            obj.set_displaynulltext("End Date");
            obj.set_headformat("MM.yyyy");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdvCal","0","28","483","378",null,null,null,null,null,null,this);
            obj.set_cssclass("pdiv_POP_lev3");
            this.addChild(obj.name, obj);

            obj = new Static("sta02","0","0",null,"60","0",null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_POP_calHead_green");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Calendar("cal_fr","0","68","236","260",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_initvalueid("iv_cal");
            obj.set_taborder("0");
            obj.set_value("20231210");
            obj.set_type("monthonly");
            obj.set_cssclass("cal_POP_period");
            obj.set_headformat("MM.yyyy");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Calendar("cal_to","245","68","236","260",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_initvalueid("iv_cal");
            obj.set_taborder("1");
            obj.set_value("20240116");
            obj.set_type("monthonly");
            obj.set_cssclass("cal_POP_period");
            obj.set_headformat("MM.yyyy");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btn_WF_Popup",null,"336","51","32","16",null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("2");
            obj.set_text("OK");
            obj.set_cssclass("btn_alert_yes");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Static("staFrom2","65","51","98","36",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("3");
            obj.set_text("12. 2023");
            obj.set_cssclass("sta_POP_calHead");
            obj.set_textAlign("left");
            obj.set_padding("0px 0px 0px 26px");
            obj.set_visible("false");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Static("sta01","0","162","16","72",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("4");
            obj.set_text("w\r\n16");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Static("staTo2","319","51","98","36",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("5");
            obj.set_text("10. 2024");
            obj.set_cssclass("sta_POP_calHead");
            obj.set_textAlign("right");
            obj.set_padding("0px 26px 0px 0px");
            obj.set_visible("false");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Static("sta01_00",null,"328","26","8","34",null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("6");
            obj.set_text("h8");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Static("sta00","240","68","5","260",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("7");
            obj.set_cssclass("sta_alert_lineV");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Static("staFrom","0","0","236","60",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("9");
            obj.set_text("DEC 28. 2023");
            obj.set_cssclass("sta_POP_calHead_green");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Static("staTo","245","0","236","60",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("10");
            obj.set_text("JAN 10. 2024");
            obj.set_cssclass("sta_POP_calHead_green");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Static("sta00_01","240","8","5","44",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_alert_lineV");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btnPrevFr","14","52","32","32",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_POP_calPrev");
            obj.set_visible("false");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btnNextFr",null,"52","32","32","260",null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_POP_calNext");
            obj.set_visible("false");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btnPrevTo","259","52","32","32",null,null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_POP_calPrev");
            obj.set_visible("false");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Button("btnNextTo",null,"52","32","32","15",null,null,null,null,null,this.pdvCal.form);
            obj.set_taborder("15");
            obj.set_cssclass("btn_POP_calNext");
            obj.set_visible("false");
            this.pdvCal.addChild(obj.name, obj);

            obj = new Calendar("cal_fr","0","0",null,null,"stc_bar:0","0",null,null,null,null,this);
            obj.set_initvalueid("iv_cal");
            obj.set_taborder("7");
            obj.set_displaynulltext("Start Date");
            obj.set_headformat("MM.yyyy");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.pdvCal.form
            obj = new Layout("default","",0,0,this.pdvCal.form,function(p){});
            this.pdvCal.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",269,28,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmPeriodCalendar.xfdl", function() {
        /**
        *  commComp
        *  @FileName 	commPeriodCalendar.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023/12/20
        *  @Desction    common - Period Calendar
        *--------------  Source Modify History  ---------------------------------------
        * Date					Modifier					Description
        *------------------------------------------------------------------------------
        * 2023/12/20			@RHS						Initial creation
        *******************************************************************************
        */

        /************************************************************************************
         * FORM Variable Area
        ************************************************************************************/
        this.isSelectedFr = false;
        this.isSelectedTo = false;
        this.fvSelFrDay;
        this.fvSelToDay;

        /************************************************************************************
         * FORM Event Area (onload, onbeforeclose..)
        ************************************************************************************/
        this.commPeriodCalendar_onload = function(obj,e)
        {

        };

        //기간달력 초기설정
        this.fnInitComp = function(oForm, sPopId, oCallback, aPDate)
        {
        	if(!this.gfnIsNull(this.cal_fr.dropbutton))
        	{
        		this.cal_fr.dropbutton.set_visible(false);
        	}

        	this.fv_oForm     = oForm;
        	this.fv_sPopId    = sPopId;
        	this.fv_oCallback = oCallback;

        	if(!this.gfnIsNull(aPDate))
        	{
        		this.fnInitValue(aPDate);
        	}
        	else {
        		aPDate = {};
        		aPDate.fromdate = this.gfnAddDate(this.gfnGetDate(),-30);
        		aPDate.todate   = this.gfnGetDate();
        		this.fnInitValue(aPDate);
        	}

        	//this.periodcalendar_onsize(this);
        };

        /************************************************************************************
         * User Function Area
        *************************************************************************************/
        /**
        * @description from일자 세팅하기
        */
        this.setFromDate = function (sDate)
        {
        	//aPDate.fromdate = sDate;
        	//this.cal_fr.set_value(sDate);
        	this.fnSetValue(sDate, "");
        };

        /**
        * @description to일자 세팅하기
        */
        this.setToDate = function (sDate)
        {
        	//aPDate.todate = sDate;
        	//this.cal_to.set_value(sDate);
        	this.fnSetValue("", sDate);
        };

        /**
        * @description from 일자 갖고오기
        */
        this.getFromDate = function ()
        {
        	var sDate = this.cal_fr.value;
        	return sDate;
        };

        /**
        * @description to 일자 갖고오기
        */
        this.getToDate = function ()
        {
        	var sDate = this.cal_to.value;
        	return sDate;
        };

        //값설정 : viewcolumn에 해당하는값들을 보여줌(기본값은 datacolumn), from일자/to일자 세팅하기
        this.fnSetValue = function(frDate, toDate)
        {
        	var aPDate = {};
        	aPDate.fromdate = frDate;
        	aPDate.todate = toDate;
        	this.fnInitValue(aPDate);
        };

        //값얻기 : codecolumn값 이외 경우 컬럼명을 설정해줌
        this.fnGetValue = function()
        {
        	var oRtn = {};
        	oRtn.fromdate = this.cal_fr.value;
        	oRtn.todate   = this.cal_to.value;

        	return oRtn;
        };

        //From, To 달력 초기화
        this.fnInitValue = function(aPDate)
        {
        //	this.fv_aPDate = aPDate;

        	if(this.gfnIsNull(aPDate))
        	{
        		this.cal_fr.set_value("");
        		this.cal_to.set_value("");
        		this.pdvCal.form.cal_fr.set_value(this.gfnGetDate());
        		this.pdvCal.form.cal_to.set_value(this.gfnGetDate());
        		return;
        	}

        	if(!this.gfnIsNull(aPDate.fromdate))
        	{
        		this.cal_fr.set_value(aPDate.fromdate);
        		this.pdvCal.form.cal_fr.set_value(aPDate.fromdate);
        	}
        	else {
        		this.cal_fr.set_value(aPDate.fromdate);
        		this.pdvCal.form.cal_fr.set_value(this.gfnGetDate());
        	}
        	this.fnSetDateFormat("FR", this.cal_fr.value);

        	if(!this.gfnIsNull(aPDate.todate))
        	{
        		this.cal_to.set_value(aPDate.todate);
        		this.pdvCal.form.cal_to.set_value(aPDate.todate);
        	}
        	else {
        		this.cal_to.set_value(aPDate.todate);
        		this.pdvCal.form.cal_to.set_value(this.gfnGetDate());
        	}
        	this.fnSetDateFormat("TO", this.cal_to.value);

        	// from 일자 초기값
        	var sDay = this.pdvCal.form.cal_fr.value;
        	sDay = sDay.substring(sDay.length-2, sDay.length);
        	this.fvSelFrDay = sDay;
        	// to 일자 초기값
        	sDay = this.pdvCal.form.cal_to.value;
        	sDay = sDay.substring(sDay.length-2, sDay.length);
        	this.fvSelToDay = sDay;
        };

        /**
         * @class 입력된 월로부터 영문 월 Full Name을 구함 <br>
         * @param {String} monthVal - 'month' 월
         * @return {String}
         */
        this.fnGetMonthOrgKr = function(monthVal)
        {
        	var nDay = -1;
        	var menthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        	if( monthVal < 0 ) return "";

        	return menthArray[monthVal-1];
        };
        //MM.yyyy 형태
        this.fnSetDateFormat = function(dGubun, sDate)
        {
        	var sYear, sMonth;
        	sYear = sDate.substr(0,4);
        	sMonth = sDate.substr(4,2);;	//Month

        	if (dGubun=="FR") {
        		//this.pdvCal.form.staFrom.set_text(this.gfnGetMonthEn(nexacro.toNumber(sMonth))+"  "+sMonth +"."+sYear);
        		this.pdvCal.form.staFrom.set_text(this.fnGetMonthOrgKr(nexacro.toNumber(sMonth))+"  "+sYear);
        		this.pdvCal.form.staFrom2.set_text(sMonth +"."+sYear);

        	}else {
        		this.pdvCal.form.staTo.set_text(this.fnGetMonthOrgKr(nexacro.toNumber(sMonth))+"  "+sYear);
        		this.pdvCal.form.staTo2.set_text(sMonth +"."+sYear);
        	}
        };

        //class 설정
        this.fn_setClass = function(sClass)
        {
        	if(this.gfnIsNull(sClass))
        	{
        		sClass = "essential";
        	}

        	this.cal_fr.set_cssclass(sClass);
        	this.cal_to.set_cssclass(sClass);
        };

        this.fnCheckValidation = function(sMsgCd)
        {
        	if(this.gfnIsNull(this.cal_fr.value))
        	{
        		//this.gfn_alert("VALID_REQUIRED", [this.gfn_getWord(sMsgCd)]);
        		trace("VALID_REQUIRED", [this.gfn_getWord(sMsgCd)]);
        		this.cal_fr.setFocus();
        		return false;
        	}
        	if(this.gfnIsNull(this.cal_to.value))
        	{
        		//this.gfn_alert("VALID_REQUIRED", [this.gfn_getWord(sMsgCd)]);
        		trace("VALID_REQUIRED", [this.gfn_getWord(sMsgCd)]);
        		this.cal_to.setFocus();
        		return false;
        	}
         	return true;
        };

        //popupdiv오픈
        this.fnOpenPopupDiv = function()
        {
        	this.pdvCal.form.cal_fr.set_enable(this.cal_fr.enable);
        	this.pdvCal.form.cal_to.set_enable(this.cal_to.enable);

        	this.pdvCal.form.cal_fr.set_value(this.cal_fr.value);
        	this.pdvCal.form.cal_to.set_value(this.cal_to.value);

        	if(this.gfnIsNull(this.pdvCal.form.cal_fr.value)) this.pdvCal.form.cal_fr.set_value(this.gfnGetDate());
        	if(this.gfnIsNull(this.pdvCal.form.cal_to.value)) this.pdvCal.form.cal_to.set_value(this.gfnGetDate());

        	this.fnSetDateFormat("FR", this.pdvCal.form.cal_fr.value);
        	this.fnSetDateFormat("TO", this.pdvCal.form.cal_to.value);

        	this.pdvCal.trackPopupByComponent(this.cal_fr, 0, 28);
        };


        /************************************************************************************
         * Component Event Area
        ************************************************************************************/
        this.btn_expand_onclick = function(obj,  e)
        {
        	this.fnOpenPopupDiv();
        };

        this.cal_fr_ondropdown = function(obj, e)
        {
        	this.fnOpenPopupDiv();
        	return false;
        };

        this.cal_to_ondropdown = function(obj, e)
        {
        	this.fnOpenPopupDiv();
        	return false;
        };

        this.pdvCal_btn_WF_Popup_onclick = function(obj,  e)
        {
        	this.fnCloseCalendar();
        };

        this.fnCloseCalendar = function()
        {
        	var arrArg = [];
        	if(this.gfnIsNull(this.cal_fr.value))
        	{
        		this.gfnAlert("시작일을 선택해주세요.", arrArg);
        		return false;
        	}
        	else if(this.gfnIsNull(this.cal_to.value))
        	{
        		this.gfnAlert("종료일을 선택해주세요.", arrArg);
        		return false;
        	}
        	var rtn = true;
        	var fromdt = this.pdvCal.form.cal_fr.toString();
        	var todt   = this.pdvCal.form.cal_to.toString();
        	var day    = this.gfnGetDiffDate(fromdt, todt);

        	if(day < 0)
        	{
        		this.cal_fr.set_value("");
        		this.cal_to.set_value("");

        		this.isSelectedFr = false;
        		this.isSelectedTo = false;
        		rtn = false;
        		this.gfnAlert("시작일이 종료일 보다 큽니다.", arrArg);
        		return;
        	}

        	if(this.isSelectedFr || this.isSelectedTo)
        	{
        		if(this.gfnIsNull(this.cal_fr.value)) this.cal_fr.set_value(this.pdvCal.form.cal_fr.value);
        		if(this.gfnIsNull(this.cal_to.value)) this.cal_to.set_value(this.pdvCal.form.cal_to.value);
        	}

        	var oRtn = {};
        	oRtn.fromdate = this.cal_fr.value;
        	oRtn.todate   = this.cal_to.value;
        	try{
        		this.fv_oCallback.call(this.fv_oForm, this.fv_sPopId, oRtn);
        	}catch(e){}
        	this.isSelectedFr = false;
        	this.isSelectedTo = false;

        	this.pdvCal.closePopup();
        };

        this.pdvCal_cal_fr_ondayclick = function(obj, e)
        {
        	if(this.cal_fr.enable && !this.cal_fr.readonly)
        	{
        		obj.set_value(e.date);
        		this.cal_fr.uPrevVal = this.cal_fr.value;
        		this.cal_fr.set_value(this.pdvCal.form.cal_fr.value);
        	}
        	this.isSelectedFr = true;

        	var sVal = String(this.cal_fr.value);
        	this.fvSelFrDay = sVal.substring(sVal.length-2, sVal.length);

        	if(this.isSelectedFr==true && this.isSelectedTo==true) this.fnCloseCalendar();
        };

        this.pdvCal_calfrto_onchanged = function(obj,e)
        {
        	if(this.gfnIsNull(this.cal_to.value)) return true;

        	var fromdt = this.cal_fr.value.toString();
        	var todt   = this.cal_to.value.toString();
        	var day    = this.gfnGetDiffDate(fromdt, todt);

        	if(day < 0)
        	{
        		var arrArg = [];
        		this.gfnAlert("시작일이 종료일 보다 큽니다.", arrArg);

        		var sCalNm = String(obj.id);
        		if (sCalNm.indexOf('fr')>0)
        			this.cal_fr.set_value(this.cal_fr.uPrevVal);
        		else this.cal_to.set_value(this.cal_to.uPrevVal);
        		return;
        	}
        };

        this.pdvCal_cal_to_ondayclick = function(obj, e)
        {
        	if(this.cal_to.enable && !this.cal_to.readonly)
        	{
        		obj.set_value(e.date);
        		this.cal_to.uPrevVal = this.cal_to.value;
        		this.cal_to.set_value(this.pdvCal.form.cal_to.value);
        	}
        	this.isSelectedTo = true;

        	var sVal = String(this.cal_to.value);
        	this.fvSelToDay = sVal.substring(sVal.length-2, sVal.length);

        	if(this.isSelectedFr==true && this.isSelectedTo==true) this.fnCloseCalendar();

        	if(!this.cal_fr.enable) this.fnCloseCalendar();
        };


        this.cal_fr_canchange = function(obj,e)
        {
        	return true;
        };

        this.cal_to_canchange = function(obj, e)
        {
        	return true;
        };

        this.cal_fr_onchanged = function(obj,e)
        {
        	if(this.gfnIsNull(this.cal_to.value)) return true;

        	var fromdt = this.cal_fr.value.toString();
        	var todt   = this.cal_to.value.toString();
        	var day    = this.gfnGetDiffDate(fromdt, todt);

        	if(day < 0)
        	{
        		var arrArg = [];
        		this.gfnAlert("시작일이 종료일 보다 큽니다.", arrArg);

        		obj.set_value(e.prevalue);
        		return;
        	}

        	var objFunc = this.getOwnerFrame().form["comm_cal_fr_onchanged"];
        	if(!this.gfnIsNull(objFunc))
        	{
        		try{
        			this.getOwnerFrame().form.comm_cal_fr_onchanged(obj, e);
        		}catch(e){}
        	}
        };

        this.cal_to_onchanged = function(obj,e)
        {
        	if(this.gfnIsNull(this.cal_fr.value)) return true;

        	var fromdt = this.cal_fr.value.toString();
        	var todt   = this.cal_to.value.toString();
        	var day    = this.gfnGetDiffDate(fromdt, todt);

        	if(day < 0)
        	{
        		var arrArg = [];
        		this.gfnAlert("시작일이 종료일 보다 큽니다.", arrArg);

        		obj.set_value(e.prevalue);
        		return;
        	}

        	var objFunc = this.getOwnerFrame().form["comm_cal_to_onchanged"];
        	if(!this.gfnIsNull(objFunc))
        	{
        		try{
        			this.getOwnerFrame().form.comm_cal_to_onchanged(obj, e);
        		}catch(e){}
        	}
        };

        // 다음 버튼
        this.pdvCal_btnNextCtrl_onclick = function(obj,e)
        {
        	var sBtnNm = obj.id;
        	var selDate, sYear;
        	if (sBtnNm.indexOf("Fr")>0) {
        		this.pdvCal.form.cal_fr.datepicker.head.nextbutton.click();

        		selDate = this.pdvCal.form.cal_fr.datepicker.head.monthstatic.text;
        		sYear = this.gfnTrim(this.pdvCal.form.cal_fr.datepicker.head.yearstatic.text).substr(0,4);

        		this.pdvCal.form.staFrom.set_text(this.fnGetMonthOrgKr(nexacro.toNumber(selDate))+"  "+sYear);
        		this.pdvCal.form.staFrom2.set_text(selDate +"."+sYear);
        		this.pdvCal.form.cal_fr.set_value(sYear+selDate+this.fvSelFrDay);
        	}else {
        		this.pdvCal.form.cal_to.datepicker.head.nextbutton.click();

        		selDate = this.pdvCal.form.cal_to.datepicker.head.monthstatic.text;
        		sYear = this.gfnTrim(this.pdvCal.form.cal_to.datepicker.head.yearstatic.text).substr(0,4);
        		// 영문 월
        		this.pdvCal.form.staTo.set_text(this.fnGetMonthOrgKr(nexacro.toNumber(selDate))+"  "+sYear);
        		this.pdvCal.form.staTo2.set_text(selDate +"."+sYear);
        		this.pdvCal.form.cal_to.set_value(sYear+selDate+this.fvSelToDay);
        	}
        };

        //이전 버튼
        this.pdvCal_btnPrevCtrl_onclick = function(obj,e)
        {
        	var sBtnNm = obj.id;
        	var selDate, sYear;

        	if (sBtnNm.indexOf("Fr")>0) {
        		this.pdvCal.form.cal_fr.datepicker.head.prevbutton.click();

        		selDate = this.pdvCal.form.cal_fr.datepicker.head.monthstatic.text;
        		sYear = this.gfnTrim(this.pdvCal.form.cal_fr.datepicker.head.yearstatic.text).substr(0,4);

        		// 영문 월
        		this.pdvCal.form.staFrom.set_text(this.fnGetMonthOrgKr(nexacro.toNumber(selDate))+"  "+sYear);
        		this.pdvCal.form.staFrom2.set_text(selDate +"."+sYear);
        		this.pdvCal.form.cal_fr.set_value(sYear+selDate+this.fvSelFrDay);
        	}else {
        		this.pdvCal.form.cal_to.datepicker.head.prevbutton.click();

        		selDate = this.pdvCal.form.cal_to.datepicker.head.monthstatic.text;
        		sYear = this.gfnTrim(this.pdvCal.form.cal_to.datepicker.head.yearstatic.text).substr(0,4);

        		this.pdvCal.form.staTo.set_text(this.fnGetMonthOrgKr(nexacro.toNumber(selDate))+"  "+sYear);
        		this.pdvCal.form.staTo2.set_text(selDate +"."+sYear);
        		this.pdvCal.form.cal_to.set_value(sYear+selDate+this.fvSelToDay);
        	}
        };

        this.periodcalendar_onsize = function(obj, e)
        {
        	obj.set_scrollbars("none");

        	var nFormWidth = obj.getOffsetWidth();
        	var nBarWidth = this.stc_bar.width;
        	var nBtnWidth = 10;
        	var nLeft = 0;
        	var nCalWidth = parseInt((nFormWidth - nBarWidth - nBtnWidth)/2);

        	this.cal_fr.set_left(nLeft);		// 0
        	this.cal_fr.set_width(nCalWidth);	// 91

        	nLeft += parseInt(nCalWidth);
        	this.stc_bar.set_left(nLeft);
        	this.stc_bar.set_width(nBarWidth);

        	nLeft += parseInt(nBarWidth);
        	this.cal_to.set_left(nLeft);
        	this.cal_to.set_width(nCalWidth);

        	if(!this.gfnIsNull(this.cal_fr.dropbutton))
        	{
        		this.cal_fr.dropbutton.set_visible(false);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.commPeriodCalendar_onload,this);
            this.cal_to.addEventHandler("ondropdown",this.cal_to_ondropdown,this);
            this.cal_to.addEventHandler("canchange",this.cal_to_canchange,this);
            this.cal_to.addEventHandler("onchanged",this.cal_to_onchanged,this);
            this.pdvCal.form.cal_fr.addEventHandler("ondayclick",this.pdvCal_cal_fr_ondayclick,this);
            this.pdvCal.form.cal_fr.addEventHandler("onchanged",this.pdvCal_calfrto_onchanged,this);
            this.pdvCal.form.cal_to.addEventHandler("ondayclick",this.pdvCal_cal_to_ondayclick,this);
            this.pdvCal.form.cal_to.addEventHandler("onchanged",this.pdvCal_calfrto_onchanged,this);
            this.pdvCal.form.btn_WF_Popup.addEventHandler("onclick",this.pdvCal_btn_WF_Popup_onclick,this);
            this.pdvCal.form.btnPrevFr.addEventHandler("onclick",this.pdvCal_btnPrevCtrl_onclick,this);
            this.pdvCal.form.btnNextFr.addEventHandler("onclick",this.pdvCal_btnNextCtrl_onclick,this);
            this.pdvCal.form.btnPrevTo.addEventHandler("onclick",this.pdvCal_btnPrevCtrl_onclick,this);
            this.pdvCal.form.btnNextTo.addEventHandler("onclick",this.pdvCal_btnNextCtrl_onclick,this);
            this.cal_fr.addEventHandler("onchanged",this.cal_fr_onchanged,this);
            this.cal_fr.addEventHandler("canchange",this.cal_fr_canchange,this);
        };
        this.loadIncludeScript("cmmPeriodCalendar.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
