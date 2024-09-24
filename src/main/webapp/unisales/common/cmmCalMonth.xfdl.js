(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("commCalMonth");
            this.set_titletext("월력");
            if (Form == this.constructor)
            {
                this._setFormPosition(120,28);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Calendar("calM","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_initvalueid("iv_cal");
            obj.set_taborder("0");
            obj.set_dateformat("MM-yyyy");
            obj.set_editformat("MM-yyyy");
            obj.set_popuptype("none");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdivCal","0","30","236","260",null,null,null,null,null,null,this);
            obj.set_text("pdiv00");
            obj.set_visible("false");
            obj.set_cssclass("pdiv_POP_lev3");
            this.addChild(obj.name, obj);

            obj = new Static("staYear","0","0",null,"60","0",null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("0");
            obj.set_text("2020");
            obj.set_cssclass("sta_POP_calHead");
            obj.set_textAlign("center");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btnPrev","16","9","32","42",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_POP_calPrev");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btnNext",null,"16","28","28","18",null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_POP_calNext");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btn01","16","73","21.37%","49",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("3");
            obj.set_cssclass("btn_POP_calNumber");
            obj.set_text("1");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btn02","66","73","21.37%","49",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_POP_calNumber");
            obj.set_text("2");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btn03","116","73","21.37%","49",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_POP_calNumber");
            obj.set_text("3");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btn04","166","73",null,"49","18",null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("6");
            obj.set_cssclass("btn_POP_calNumber");
            obj.set_text("4");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btn05","16","122","21.37%","49",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("7");
            obj.set_cssclass("btn_POP_calNumber");
            obj.set_text("5");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btn06","66","122","21.37%","49",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("8");
            obj.set_cssclass("btn_POP_calNumber");
            obj.set_text("6");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btn07","116","122","21.37%","49",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("9");
            obj.set_cssclass("btn_POP_calNumber");
            obj.set_text("7");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btn08","166","122",null,"49","18",null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("10");
            obj.set_cssclass("btn_POP_calNumber");
            obj.set_text("8");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btn09","17","171","21.37%","49",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("11");
            obj.set_cssclass("btn_POP_calNumber");
            obj.set_text("9");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btn10","67","171","21.37%","49",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("12");
            obj.set_cssclass("btn_POP_calNumber");
            obj.set_text("10");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btn11","116","171","21.37%","49",null,null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("13");
            obj.set_cssclass("btn_POP_calNumber");
            obj.set_text("11");
            this.pdivCal.addChild(obj.name, obj);

            obj = new Button("btn12","166","171",null,"49","18",null,null,null,null,null,this.pdivCal.form);
            obj.set_taborder("14");
            obj.set_cssclass("btn_POP_calNumber");
            obj.set_text("12");
            this.pdivCal.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.pdivCal.form
            obj = new Layout("default","",0,0,this.pdivCal.form,function(p){});
            this.pdivCal.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",120,28,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("cmmCalMonth.xfdl", function() {
        /**
        *  commComp
        *  @FileName 	commCalMonth.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023/12/28
        *  @Desction    공통 - 기간달력
        *--------------  소스 수정 이력  --------------------------------------------
        * Date					Modifier					Description
        *------------------------------------------------------------------------------
        * 2023/12/28			@RHS						Initial creation
        *******************************************************************************
        */

        /************************************************************************************
         * FORM Variable Area
        ************************************************************************************/
        this.fvDiv = null;
        this.fvBtn = null;
        this.fvSelectCss = "btn_POP_calNumber";

        /************************************************************************************
         * FORM Event Area (onload, onbeforeclose..)
        ************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수
        	this.fvDiv = this.parent;

        	this.fvBtn = [];
        	this.fvBtn.push(this.pdivCal.form.btn01);
        	this.fvBtn.push(this.pdivCal.form.btn02);
        	this.fvBtn.push(this.pdivCal.form.btn03);
        	this.fvBtn.push(this.pdivCal.form.btn04);
        	this.fvBtn.push(this.pdivCal.form.btn05);
        	this.fvBtn.push(this.pdivCal.form.btn06);
        	this.fvBtn.push(this.pdivCal.form.btn07);
        	this.fvBtn.push(this.pdivCal.form.btn08);
        	this.fvBtn.push(this.pdivCal.form.btn09);
        	this.fvBtn.push(this.pdivCal.form.btn10);
        	this.fvBtn.push(this.pdivCal.form.btn11);
        	this.fvBtn.push(this.pdivCal.form.btn12);

        	this.fnInit(); 	//초기화
        };

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
        * @description 년력초기화
        */
        this.fnInit = function()
        {
        	var sDate = this.calM.value;
        	if(this.gfnIsNull(sDate))	sDate = this.gfnGetDate();

        	var sYear = sDate.substr(0,4);
        	var sMonth = sDate.substr(4,2);

        	this.fnShowCalendarData(sYear, sMonth);
        };

        this.fnShowCalendarData = function (sYear, sMonth)
        {

        	this.pdivCal.form.staYear.set_text(sYear);
        	var sCurValue = this.calM.value;
        	if	(this.gfnIsNull(sCurValue)) sCurValue = this.gfnGetDate();

        	if( !this.gfnIsNull(sCurValue)){
        		for( var i=0; i<this.fvBtn.length; i++){
        			this.fvBtn[i].set_cssclass(this.fvSelectCss);

        			if( this.fvBtn[i].name.replace("btn","") == sCurValue.substr(4,2) && sCurValue.substr(0,4)==sYear){
        				this.fvBtn[i].set_cssclass(this.fvSelectCss+"_S");
        			}
        		}
        	}
        };

        this.fnOpenPopupdiv= function ()
        {
        	this.pdivCal.trackPopupByComponent(this.calM, 0, this.calM.getOffsetHeight());
        };

        /**
         * @description  return date
        */
        this.getValue = function ()
        {
        	if( !this.gfnIsNull(this.calM.value)) return this.calM.value.substr(0,6);
        	else return this.calM.value;
        };

        /**
         * @description date setting
        */
        this.setValue = function (value)
        {
        	this.calM.set_value(value.substr(0,4)+""+value.substr(4,2)+"01");
        };

        /**
        * @description Essential css세팅 [true/false]
        */
        this.fnSetEssential  = function (bValue)
        {
        	//CSS Class가 있는 경우 클래스설정
        	if(bValue){
        		this.calM.set_cssclass("point");
        	}else{
        		this.calM.set_cssclass("");
        	}
        };

        /**
        * @description enable 세팅 [true/false]
        */
        this.fnSetEnable = function (bValue)
        {
        	this.calM.set_enable(bValue);
        };

        /**
        * @description readonly 세팅 [true/false]
        */
        this.fnSetReadonly = function (bValue)
        {
        	this.calM.set_readonly(bValue);
        };

        /************************************************************************************
         * Component Event Area
        ************************************************************************************/
        this.calM_ondropdown = function(obj,e)
        {
        	obj.uOrgValue = obj.text;
        	this.fnOpenPopupdiv();
        };

        this.calM_oneditclick = function(obj,e)
        {
        	obj.uOrgValue = obj.text;
        	this.fnOpenPopupdiv();
        };

        this.pdivCal_onpopup = function(obj,e)
        {
        	var sDate = this.calM.value;
        	if(this.gfnIsNull(sDate)){
        		sDate = this.gfnGetDate().substr(0,8);
        	}

        	var sYear  = sDate.substr(0, 4);
            var sMonth = sDate.substr(4, 2);
            var sDay   = sDate.substr(6, 2);

        	this.fnShowCalendarData(sYear, sMonth);
        };

        this.btnMonth_onclick = function(obj,e)
        {
        	var sYear = this.pdivCal.form.staYear.text;
        	var sMonth = obj.name.replace("btn","");

        	this.calM.set_value(sYear+""+sMonth+"01");
        	this.pdivCal.closePopup();
        };

        this.pdivCal_btnPrev_onclick = function(obj,e)
        {
        	var sDate = nexacro.toNumber(this.pdivCal.form.staYear.text);
        	this.pdivCal.form.staYear.set_text(sDate - 1 );

        	this.fnShowCalendarData(sDate - 1 , "00");
        };

        this.pdivCal_btnNext_onclick = function(obj,e)
        {
        	var sDate = nexacro.toNumber(this.pdivCal.form.staYear.text);
        	this.pdivCal.form.staYear.set_text(sDate + 1 );

        	this.fnShowCalendarData(sDate + 1, "00");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.calM.addEventHandler("ondropdown",this.calM_ondropdown,this);
            this.calM.addEventHandler("oneditclick",this.calM_oneditclick,this);
            this.pdivCal.addEventHandler("onpopup",this.pdivCal_onpopup,this);
            this.pdivCal.form.btnPrev.addEventHandler("onclick",this.pdivCal_btnPrev_onclick,this);
            this.pdivCal.form.btnNext.addEventHandler("onclick",this.pdivCal_btnNext_onclick,this);
            this.pdivCal.form.btn01.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal.form.btn02.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal.form.btn03.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal.form.btn04.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal.form.btn05.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal.form.btn06.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal.form.btn07.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal.form.btn08.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal.form.btn09.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal.form.btn10.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal.form.btn11.addEventHandler("onclick",this.btnMonth_onclick,this);
            this.pdivCal.form.btn12.addEventHandler("onclick",this.btnMonth_onclick,this);
        };
        this.loadIncludeScript("cmmCalMonth.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
