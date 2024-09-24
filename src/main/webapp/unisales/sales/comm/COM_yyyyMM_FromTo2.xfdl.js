(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM_yyyyMM_FromTo");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(252,24);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("div_yyyyMM_From","0","0","46.03174603174603%",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_url("sales::comm/COM_yymm.xfdl");
            obj.getSetter("user_onchanged").set("from_onchanged");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","div_yyyyMM_From:0","0","20","20",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("~");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Div("div_yyyyMM_To","Static00:0.00","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_url("sales::comm/COM_yymm.xfdl");
            obj.getSetter("user_onchanged").set("to_onchanged");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_yyyyMM_From
            obj = new Layout("default","",0,0,this.div_yyyyMM_From.form,function(p){});
            this.div_yyyyMM_From.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_yyyyMM_To
            obj = new Layout("default","",0,0,this.div_yyyyMM_To.form,function(p){});
            this.div_yyyyMM_To.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",252,24,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("New Form");

                p.div_yyyyMM_From.set_taborder("0");
                p.div_yyyyMM_From.set_url("sales::comm/COM_yymm.xfdl");
                p.div_yyyyMM_From.getSetter("user_onchanged").set("from_onchanged");
                p.div_yyyyMM_From.set_formscrolltype("none");
                p.div_yyyyMM_From.set_formscrollbartype("none none");
                p.div_yyyyMM_From.move("0","0","46.03174603174603%",null,null,"0");

                p.Static00.set_taborder("1");
                p.Static00.set_text("~");
                p.Static00.set_textAlign("center");
                p.Static00.move("div_yyyyMM_From:0","0","20","20",null,null);

                p.div_yyyyMM_To.set_taborder("2");
                p.div_yyyyMM_To.set_url("sales::comm/COM_yymm.xfdl");
                p.div_yyyyMM_To.getSetter("user_onchanged").set("to_onchanged");
                p.div_yyyyMM_To.set_formscrollbartype("none none");
                p.div_yyyyMM_To.set_formscrolltype("none");
                p.div_yyyyMM_To.move("Static00:0.00","0",null,null,"0","0");
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("portrait","Mobile_screen",462,30,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.div_yyyyMM_To.move("Static00:0","0","224","30",null,null);

                p.Static00.move("div_yyyyMM_From:0","0","14","30",null,null);

                p.div_yyyyMM_From.move("0","0","224","30",null,null);
            	}
            );
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","sales::comm/COM_yymm.xfdl");
        };
        
        // User Script
        this.registerScript("COM_yyyyMM_FromTo2.xfdl", function() {
        this.pForm;
        this.pComp;

        this.COM_yyyyMM_FromTo_onload = function(obj,e)
        {
        	//스크롤바 제거
        	this.set_scrollbartype("none none");

        	this.pForm = this.parent.parent;
        	this.pComp = this.parent;

        	var pThis = this;
        	this.pComp.getFromYear = function()		{	return pThis.div_yyyyMM_From.getYear();		}
        	this.pComp.getFromMonth = function()	{	return pThis.div_yyyyMM_From.getMonth();	}
        	this.pComp.getFromYYYYMM = function()	{	return pThis.div_yyyyMM_From.getYYYYMM()	}

        	this.pComp.getToYear = function()		{	return pThis.div_yyyyMM_To.getYear();		}
        	this.pComp.getToMonth = function()		{	return pThis.div_yyyyMM_To.getMonth();		}
        	this.pComp.getToYYYYMM = function()		{	return pThis.div_yyyyMM_To.getYYYYMM();		}

        	this.pComp.setFromYYYYMM = function(v)	{	return pThis.div_yyyyMM_From.setYYYYMM(v);	}
        	this.pComp.setToYYYYMM = function(v)	{	return pThis.div_yyyyMM_To.setYYYYMM(v);	}

        };

        this.from_onchanged = function(obj, e)
        {
        	if(e.newvalue > this.div_yyyyMM_To.getYYYYMM())
        	{
        		this.div_yyyyMM_To.setYYYYMM(e.newvalue);
        	}

        	e.target = "from";
        	this.onchanged(obj, e);
        }

        this.to_onchanged = function(obj, e)
        {
        	if(e.newvalue < this.div_yyyyMM_From.getYYYYMM())
        	{
        		this.div_yyyyMM_From.setYYYYMM(e.newvalue);
        	}

        	e.target = "to";
        	this.onchanged(obj, e);
        }

        this.onchanged = function(obj, e)
        {
        	if(this.pComp.hasOwnProperty("user_onchanged"))
        	{
        		var event = this.pComp.user_onchanged;

        		if(!this.gfnIsEmpty(event))
        		{
        			var f = this.pForm;
        			var fe;
        			/*상위로 올라가면서 event fn 찾기*/
        			for (f; (f != null); f = f.parent)
        			{
        				if (event in f)
        				{
        					/*event fn이 존재한다면 호출*/
        					f[event].call(f, this.pComp, e);
        					break;
        				}
        			}
        		}
        	}
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.COM_yyyyMM_FromTo_onload,this);
        };
        this.loadIncludeScript("COM_yyyyMM_FromTo2.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
