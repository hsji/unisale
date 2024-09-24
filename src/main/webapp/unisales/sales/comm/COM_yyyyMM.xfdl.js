(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM_yyyyMM");
            if (Form == this.constructor)
            {
                this._setFormPosition(140,24);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn_PreMonth","13","0","13",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_prev");
            obj.set_tooltiptext("go to last month");
            this.addChild(obj.name, obj);

            obj = new MaskEdit("medt_yyyyMM","btn_PreMonth:3.00","0","62","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_format("####-##");
            obj.set_value("201801");
            obj.set_type("string");
            obj.set_textAlign("center");
            obj.set_border("0px none");
            obj.set_padding("0px 2px");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pop_SelectMM","31.00","29","180","177",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_border("1px solid #c8c8c8");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Static("staBg","0","0",null,null,"0","0",null,null,null,null,this.pop_SelectMM.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_GBg01");
            this.pop_SelectMM.addChild(obj.name, obj);

            obj = new Button("btn_1","6","41","40","40",null,null,null,null,null,null,this.pop_SelectMM.form);
            obj.set_taborder("1");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("btn_WF_Cal01");
            this.pop_SelectMM.addChild(obj.name, obj);

            obj = new Button("btn_2","btn_1:2.00","41","40","40",null,null,null,null,null,null,this.pop_SelectMM.form);
            obj.set_taborder("2");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("btn_WF_Cal02");
            this.pop_SelectMM.addChild(obj.name, obj);

            obj = new Button("btn_3","btn_2:2.00","41","40","40",null,null,null,null,null,null,this.pop_SelectMM.form);
            obj.set_taborder("3");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("btn_WF_Cal03");
            this.pop_SelectMM.addChild(obj.name, obj);

            obj = new Button("btn_4","btn_3:2.00","41","40","40",null,null,null,null,null,null,this.pop_SelectMM.form);
            obj.set_taborder("4");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("btn_WF_Cal04");
            this.pop_SelectMM.addChild(obj.name, obj);

            obj = new Button("btn_5","6","btn_1:2","40","40",null,null,null,null,null,null,this.pop_SelectMM.form);
            obj.set_taborder("5");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("btn_WF_Cal05");
            this.pop_SelectMM.addChild(obj.name, obj);

            obj = new Button("btn_6","btn_5:2.00","btn_2:2","40","40",null,null,null,null,null,null,this.pop_SelectMM.form);
            obj.set_taborder("6");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("btn_WF_Cal06");
            this.pop_SelectMM.addChild(obj.name, obj);

            obj = new Button("btn_7","btn_6:2.00","btn_3:2","40","40",null,null,null,null,null,null,this.pop_SelectMM.form);
            obj.set_taborder("7");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("btn_WF_Cal07");
            this.pop_SelectMM.addChild(obj.name, obj);

            obj = new Button("btn_8","btn_7:2.00","btn_4:2","40","40",null,null,null,null,null,null,this.pop_SelectMM.form);
            obj.set_taborder("8");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("btn_WF_Cal08");
            this.pop_SelectMM.addChild(obj.name, obj);

            obj = new Button("btn_9","6","btn_5:2","40","40",null,null,null,null,null,null,this.pop_SelectMM.form);
            obj.set_taborder("9");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("btn_WF_Cal09");
            this.pop_SelectMM.addChild(obj.name, obj);

            obj = new Button("btn_10","btn_9:2.00","btn_6:2","40","40",null,null,null,null,null,null,this.pop_SelectMM.form);
            obj.set_taborder("10");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("btn_WF_Cal10");
            this.pop_SelectMM.addChild(obj.name, obj);

            obj = new Button("btn_11","btn_10:2.00","btn_7:2","40","40",null,null,null,null,null,null,this.pop_SelectMM.form);
            obj.set_taborder("11");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("btn_WF_Cal11");
            this.pop_SelectMM.addChild(obj.name, obj);

            obj = new Button("btn_12","btn_11:2.00","btn_8:2","40","40",null,null,null,null,null,null,this.pop_SelectMM.form);
            obj.set_taborder("12");
            obj.set_textAlign("center");
            obj.set_verticalAlign("middle");
            obj.set_cssclass("btn_WF_Cal12");
            this.pop_SelectMM.addChild(obj.name, obj);

            obj = new Spin("spin_Year","6","6","82","30",null,null,null,null,null,null,this.pop_SelectMM.form);
            obj.set_taborder("0");
            obj.set_font("bold 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"");
            obj.set_min("2000");
            obj.set_max("10000");
            obj.set_value("2018");
            this.pop_SelectMM.addChild(obj.name, obj);

            obj = new Button("btn_NextMonth","medt_yyyyMM:2","0","13",null,null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_next");
            obj.set_tooltiptext("go to next month");
            this.addChild(obj.name, obj);

            obj = new Button("btn_PreYear","0","0","13",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_prev2");
            obj.set_tooltiptext("go to last year");
            this.addChild(obj.name, obj);

            obj = new Button("btn_NextYear","btn_NextMonth:0","0","13",null,null,"0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_next2");
            obj.set_tooltiptext("go to next year");
            this.addChild(obj.name, obj);

            obj = new Button("btn_SelectPopMM","btn_NextYear:4","0","13",null,null,"0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_SchOpen");
            obj.set_tooltiptext("select month");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.pop_SelectMM.form
            obj = new Layout("default","",0,0,this.pop_SelectMM.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staBg.set_taborder("13");
                p.staBg.set_cssclass("sta_WF_GBg01");
                p.staBg.move("0","0",null,null,"0","0");

                p.btn_1.set_taborder("1");
                p.btn_1.set_textAlign("center");
                p.btn_1.set_verticalAlign("middle");
                p.btn_1.set_cssclass("btn_WF_Cal01");
                p.btn_1.move("6","41","40","40",null,null);

                p.btn_2.set_taborder("2");
                p.btn_2.set_textAlign("center");
                p.btn_2.set_verticalAlign("middle");
                p.btn_2.set_cssclass("btn_WF_Cal02");
                p.btn_2.move("btn_1:2.00","41","40","40",null,null);

                p.btn_3.set_taborder("3");
                p.btn_3.set_textAlign("center");
                p.btn_3.set_verticalAlign("middle");
                p.btn_3.set_cssclass("btn_WF_Cal03");
                p.btn_3.move("btn_2:2.00","41","40","40",null,null);

                p.btn_4.set_taborder("4");
                p.btn_4.set_textAlign("center");
                p.btn_4.set_verticalAlign("middle");
                p.btn_4.set_cssclass("btn_WF_Cal04");
                p.btn_4.move("btn_3:2.00","41","40","40",null,null);

                p.btn_5.set_taborder("5");
                p.btn_5.set_textAlign("center");
                p.btn_5.set_verticalAlign("middle");
                p.btn_5.set_cssclass("btn_WF_Cal05");
                p.btn_5.move("6","btn_1:2","40","40",null,null);

                p.btn_6.set_taborder("6");
                p.btn_6.set_textAlign("center");
                p.btn_6.set_verticalAlign("middle");
                p.btn_6.set_cssclass("btn_WF_Cal06");
                p.btn_6.move("btn_5:2.00","btn_2:2","40","40",null,null);

                p.btn_7.set_taborder("7");
                p.btn_7.set_textAlign("center");
                p.btn_7.set_verticalAlign("middle");
                p.btn_7.set_cssclass("btn_WF_Cal07");
                p.btn_7.move("btn_6:2.00","btn_3:2","40","40",null,null);

                p.btn_8.set_taborder("8");
                p.btn_8.set_textAlign("center");
                p.btn_8.set_verticalAlign("middle");
                p.btn_8.set_cssclass("btn_WF_Cal08");
                p.btn_8.move("btn_7:2.00","btn_4:2","40","40",null,null);

                p.btn_9.set_taborder("9");
                p.btn_9.set_textAlign("center");
                p.btn_9.set_verticalAlign("middle");
                p.btn_9.set_cssclass("btn_WF_Cal09");
                p.btn_9.move("6","btn_5:2","40","40",null,null);

                p.btn_10.set_taborder("10");
                p.btn_10.set_textAlign("center");
                p.btn_10.set_verticalAlign("middle");
                p.btn_10.set_cssclass("btn_WF_Cal10");
                p.btn_10.move("btn_9:2.00","btn_6:2","40","40",null,null);

                p.btn_11.set_taborder("11");
                p.btn_11.set_textAlign("center");
                p.btn_11.set_verticalAlign("middle");
                p.btn_11.set_cssclass("btn_WF_Cal11");
                p.btn_11.move("btn_10:2.00","btn_7:2","40","40",null,null);

                p.btn_12.set_taborder("12");
                p.btn_12.set_textAlign("center");
                p.btn_12.set_verticalAlign("middle");
                p.btn_12.set_cssclass("btn_WF_Cal12");
                p.btn_12.move("btn_11:2.00","btn_8:2","40","40",null,null);

                p.spin_Year.set_taborder("0");
                p.spin_Year.set_font("bold 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"");
                p.spin_Year.set_min("2000");
                p.spin_Year.set_max("10000");
                p.spin_Year.set_value("2018");
                p.spin_Year.move("6","6","82","30",null,null);
            	}
            );
            this.pop_SelectMM.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.pop_SelectMM.form
            obj = new Layout("portrait","",0,0,this.pop_SelectMM.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.spin_Year.move("4","4","80","30",null,null);

                p.btn_1.move("4","38","40","36",null,null);

                p.btn_2.move("46","38","40","36",null,null);

                p.btn_3.move("88","38","40","36",null,null);

                p.btn_4.move("130","38","40","36",null,null);

                p.btn_5.move("4","76","40","36",null,null);

                p.btn_6.move("46","76","40","36",null,null);

                p.btn_7.move("88","76","40","36",null,null);

                p.btn_8.move("130","76","40","36",null,null);

                p.btn_9.move("4","114","40","36",null,null);

                p.btn_10.move("46","114","40","36",null,null);

                p.btn_11.move("88","114","40","36",null,null);

                p.btn_12.move("130","114","40","36",null,null);
            	}
            );
            this.pop_SelectMM.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","",140,24,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btn_PreMonth.set_taborder("1");
                p.btn_PreMonth.set_cssclass("btn_WF_prev");
                p.btn_PreMonth.set_tooltiptext("go to last month");
                p.btn_PreMonth.move("13","0","13",null,null,"0");

                p.medt_yyyyMM.set_taborder("2");
                p.medt_yyyyMM.set_format("####-##");
                p.medt_yyyyMM.set_value("201801");
                p.medt_yyyyMM.set_type("string");
                p.medt_yyyyMM.set_textAlign("center");
                p.medt_yyyyMM.set_border("0px none");
                p.medt_yyyyMM.set_padding("0px 2px");
                p.medt_yyyyMM.move("btn_PreMonth:3.00","0","62","24",null,null);

                p.pop_SelectMM.set_visible("false");
                p.pop_SelectMM.set_border("1px solid #c8c8c8");
                p.pop_SelectMM.set_background("white");
                p.pop_SelectMM.move("31.00","29","180","177",null,null);

                p.btn_NextMonth.set_taborder("3");
                p.btn_NextMonth.set_cssclass("btn_WF_next");
                p.btn_NextMonth.set_tooltiptext("go to next month");
                p.btn_NextMonth.move("medt_yyyyMM:2","0","13",null,null,"0");

                p.btn_PreYear.set_taborder("0");
                p.btn_PreYear.set_cssclass("btn_WF_prev2");
                p.btn_PreYear.set_tooltiptext("go to last year");
                p.btn_PreYear.move("0","0","13",null,null,"0");

                p.btn_NextYear.set_taborder("4");
                p.btn_NextYear.set_cssclass("btn_WF_next2");
                p.btn_NextYear.set_tooltiptext("go to next year");
                p.btn_NextYear.move("btn_NextMonth:0","0","13",null,null,"0");

                p.btn_SelectPopMM.set_taborder("5");
                p.btn_SelectPopMM.set_cssclass("btn_WF_SchOpen");
                p.btn_SelectPopMM.set_tooltiptext("select month");
                p.btn_SelectPopMM.move("btn_NextYear:4","0","13",null,null,"0");
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("portrait","Mobile_screen",224,30,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.pop_SelectMM.move("48","31","176","156",null,null);

                p.btn_PreYear.move("0","0","30","30",null,null);

                p.btn_PreMonth.move("30","0","30","30",null,null);

                p.medt_yyyyMM.move("60","0","74","30",null,null);

                p.btn_NextMonth.move("134","0","30","30",null,null);

                p.btn_NextYear.move("164","0","30","30",null,null);

                p.btn_SelectPopMM.move("194","0","30","30",null,null);
            	}
            );
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("COM_yyyyMM.xfdl", function() {
        this.today;
        this.yyyy;
        this.mm;
        this.popdiv;

        this.yyyyPre;
        this.mmPre;
        this.pForm;
        this.pComp;
        this.pEventForm;
        this.pEventComp;

        this.validYear = {
        					 min:"2000"
        					,max:((new Date()).getFullYear()+5).toString()
        				 };											//년 4자리 (1900~2018:최신년도) : 미래 설정가능여부 판단필요. (10년까지?)
        this.validMonths = [  "01", "02", "03", "04", "05", "06" ,"07", "08", "09", "10", "11", "12" ];	//월 2자리 (01~12)

        this.COM_yyyyMM_onload = function(obj,e)
        {
        	//스크롤바 제거
        	this.set_scrollbartype("none none");

        	this.today = new Date();
        	this.pop_SelectMM.form.spin_Year.set_max(this.validYear.max);

        	this.popdiv = this.pop_SelectMM;
        	this.popdiv.parentOrg = this;

        	this.pForm = this.parent.parent;		//Form.Div.this(현위치)
        	this.pEventForm = this.pForm;			//Form.Div.this(현위치)

        	this.pComp = this.parent;				//Div.this(현위치)
        	this.pEventComp = this.pComp;			//Div.this(현위치)

        	if( this.pComp.name == "div_yyyyMM_From"
        	 || this.pComp.name == "div_yyyyMM_To" )
        	{
        		this.pForm = this.parent.parent.parent.parent;		//Form.Div.Form.Div.this(현위치)
        		this.pComp = this.parent.parent.parent;				//Div.Form.Div.this(현위치)
        	}

        	this.removeChild( this.popdiv.name );
        	//this.pForm.addChild(this.gfnGetUniqueId(this.popdiv.name), this.popdiv);

        	this.getOwnerFrame().getForm().addChild(this.gfnGetUniqueId(this.popdiv.name), this.popdiv);

        // 	if(nexacro.getApplication().id=="ACEp")
        // 		//this.getOwnerFrame().addChild(this.gfnGetUniqueId(this.popdiv.name), this.popdiv);
        // 		this.getOwnerFrame().getForm().addChild(this.gfnGetUniqueId(this.popdiv.name), this.popdiv);
        // 	else
        // 		nexacro.getApplication().getActiveForm().addChild(this.gfnGetUniqueId(this.popdiv.name), this.popdiv);

        	var pThis = this;
        	this.pEventComp.getYear = function()	{	return pThis.yyyy;			}
        	this.pEventComp.getMonth = function()	{	return pThis.mm;			}
        	this.pEventComp.getYYYYMM = function()	{	return pThis.yyyy+pThis.mm;	}

        	this.pEventComp.setYear = function(v)
        	{
        		if(pThis.isValidYear(v))
        		{
        			pThis.today.setYear(v);
        			pThis.updateDate();
        			return true;
        		}
        		return false;
        	}
        	this.pEventComp.setMonth = function(v)
        	{
        		if(pThis.isValidMonth(v))
        		{
        			pThis.today.setMonth(parseInt(v)-1);// v:01~12 -> setMonth:0~11 int형 입력
        			pThis.updateDate();
        			return true;
        		}
        		return false;
        	}
        	this.pEventComp.setYYYYMM = function(v)
        	{
        		if(!pThis.isValidValue(v))
        		{
        			return false;
        		}
        		var year = v.substring(0,4);
        		var month = v.substring(4,6);
        		pThis.today.setYear(year);
        		pThis.today.setMonth(month-1);

        		pThis.updateDate();

        		return true;
        	}

        	this.updateDate();
        };

        this.updateDate = function()
        {
        	this.yyyyPre = this.yyyy;
        	this.mmPre = this.mm;

        	this.yyyy = this.today.getFullYear();
        	this.yyyy = this.yyyy.toString();
        	this.mm = this.today.getMonth()+1;
        	this.mm = this.mm.toString().padLeft(2, "0");

        	this.medt_yyyyMM.set_value(this.yyyy+this.mm);
        	this.popdiv.form.spin_Year.set_value(this.yyyy);
        }

        this.setNextYear = function()
        {
        	if(this.isValidYear(this.yyyy+1))
        	{
        		this.today.addYear(1);
        		this.updateDate();
        		this.onchanged();
        	}
        }
        this.setPreYear = function()
        {
        	if(this.isValidYear(this.yyyy-1))
        	{
        		this.today.addYear(-1);
        		this.updateDate();
        		this.onchanged();
        	}
        }
        this.setNextMonth = function()
        {
        	this.today.addMonth(1);
        	this.updateDate();
        	this.onchanged();
        }
        this.setPreMonth = function()
        {
        	this.today.addMonth(-1);
        	this.updateDate();
        	this.onchanged();
        }

        this.btn_SelectPopMM_onclick = function(obj,e)
        {
        	var nXpos = 31;	// 29
        	var nYpos = 24;
        // 	if(nexacro.getApplication().id=="ACEp")
        // 		nYpos = 20;

        	this.popdiv.trackPopupByComponent(this, nXpos, nYpos, null, null, "onchanged");
        };

        this.comm_btn_mm = function(obj,e)
        {
        	var mm = obj.name.split("_")[1];
        	var pForm = obj.parent.parent.parentOrg;
        	pForm.today.setMonth(mm-1);

        	pForm.updateDate();
        	this.popdiv.closePopup();
        };

        this.isValidValue = function(val)
        {
        	//사용자가 직접입력한 경우 유효성 체크
        	if(this.gfnIsEmpty(val) || val.length != 6)	//총 6자리
        	{
        		return false;
        	}

        	var year = val.substring(0,4);
        	var month = val.substring(4,6);

        	if( this.isValidYear(year) && this.isValidMonth(month) )
        	{
        		return true;
        	}else{
        		return false;
        	}
        }

        this.isValidYear = function(year)
        {
        	if( this.validYear.min <= year && this.validYear.max >= year )
        	{
        		return true;
        	}else{
        		return false;
        	}
        }
        this.isValidMonth = function(month)
        {
        	if( this.validMonths.indexOf(month) != -1 )
        	{
        		return true;
        	}else{
        		return false;
        	}
        }

        this.medt_yyyyMM_canchange = function(obj,e)
        {
        	if(!this.isValidValue(e.postvalue))
        	{
        		return false;
        	}
        	var year = e.postvalue.substring(0,4);
        	var month = e.postvalue.substring(4,6);
        	this.today.setYear(year);
        	this.today.setMonth(month-1);

        	this.updateDate();

        	this.onchanged();
        };

        this.spin_Year_onchanged = function(obj,e)
        {
        	if(!this.isValidYear(e.postvalue))
        	{
        		return false;
        	}
        	this.today.setYear(e.postvalue);

        	this.updateDate();
        };


        this.pop_SelectMM_spin_Year_onspin = function(obj,e)
        {
        	if(!this.isValidYear(e.postvalue))
        	{
        		return false;
        	}
        	this.today.setYear(e.postvalue);

        	this.updateDate();
        };

        this.onchanged = function()
        {
        	if(this.pEventComp.hasOwnProperty("user_onchanged"))
        	{
        		var event = this.pEventComp.user_onchanged;
        		if(!this.gfnIsEmpty(event))
        		{
        			var ep = {
        						 prevalue:this.yyyyPre + this.mmPre
        						,newvalue:this.yyyy + this.mm
        					}

        			var f = this.pEventForm;
        			var fe;
        			/*상위로 올라가면서 event fn 찾기*/
        			for (f; (f != null); f = f.parent)
        			{
        				if (event in f)
        				{
        					/*event fn이 존재한다면 호출*/
        					f[event].call(f, this.pEventComp, ep);
        					break;
        				}
        			}
        		}
        	}
        }

        this.pop_SelectMM_oncloseup = function(obj,e)
        {
        	this.onchanged();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.COM_yyyyMM_onload,this);
            this.btn_PreMonth.addEventHandler("onclick",this.setPreMonth,this);
            this.medt_yyyyMM.addEventHandler("canchange",this.medt_yyyyMM_canchange,this);
            this.pop_SelectMM.addEventHandler("oncloseup",this.pop_SelectMM_oncloseup,this);
            this.pop_SelectMM.form.btn_1.addEventHandler("onclick",this.comm_btn_mm,this);
            this.pop_SelectMM.form.btn_2.addEventHandler("onclick",this.comm_btn_mm,this);
            this.pop_SelectMM.form.btn_3.addEventHandler("onclick",this.comm_btn_mm,this);
            this.pop_SelectMM.form.btn_4.addEventHandler("onclick",this.comm_btn_mm,this);
            this.pop_SelectMM.form.btn_5.addEventHandler("onclick",this.comm_btn_mm,this);
            this.pop_SelectMM.form.btn_6.addEventHandler("onclick",this.comm_btn_mm,this);
            this.pop_SelectMM.form.btn_7.addEventHandler("onclick",this.comm_btn_mm,this);
            this.pop_SelectMM.form.btn_8.addEventHandler("onclick",this.comm_btn_mm,this);
            this.pop_SelectMM.form.btn_9.addEventHandler("onclick",this.comm_btn_mm,this);
            this.pop_SelectMM.form.btn_10.addEventHandler("onclick",this.comm_btn_mm,this);
            this.pop_SelectMM.form.btn_11.addEventHandler("onclick",this.comm_btn_mm,this);
            this.pop_SelectMM.form.btn_12.addEventHandler("onclick",this.comm_btn_mm,this);
            this.pop_SelectMM.form.spin_Year.addEventHandler("onchanged",this.spin_Year_onchanged,this);
            this.pop_SelectMM.form.spin_Year.addEventHandler("onspin",this.pop_SelectMM_spin_Year_onspin,this);
            this.btn_NextMonth.addEventHandler("onclick",this.setNextMonth,this);
            this.btn_PreYear.addEventHandler("onclick",this.setPreYear,this);
            this.btn_NextYear.addEventHandler("onclick",this.setNextYear,this);
            this.btn_SelectPopMM.addEventHandler("onclick",this.btn_SelectPopMM_onclick,this);
        };
        this.loadIncludeScript("COM_yyyyMM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
