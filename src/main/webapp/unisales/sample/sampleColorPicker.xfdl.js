(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleColorPicker");
            this.set_titletext("New Form");
            this.set_scrolltype("none");
            this.set_scrollbartype("none none");
            if (Form == this.constructor)
            {
                this._setFormPosition(240,220);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("staColor1","7","9","18","18",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("1px solid #000000");
            this.addChild(obj.name, obj);

            obj = new Static("staColor2","staColor1:5","9","18","18",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("1px solid #000000");
            this.addChild(obj.name, obj);

            obj = new Static("staColor3","staColor2:5","9","18","18",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("1px solid #000000");
            this.addChild(obj.name, obj);

            obj = new Static("staColor4","staColor3:5","9","18","18",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_border("1px solid #000000");
            this.addChild(obj.name, obj);

            obj = new Static("staColor5","staColor4:5","9","18","18",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_border("1px solid #000000");
            this.addChild(obj.name, obj);

            obj = new Static("staColor6","staColor5:5","9","18","18",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_border("1px solid #000000");
            this.addChild(obj.name, obj);

            obj = new Static("staColor7","staColor6:5","9","18","18",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_border("1px solid #000000");
            this.addChild(obj.name, obj);

            obj = new Static("staColor8","staColor7:5","9","18","18",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_border("1px solid #000000");
            this.addChild(obj.name, obj);

            obj = new Static("staColor9","staColor8:5","9","18","18",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_border("1px solid #000000");
            this.addChild(obj.name, obj);

            obj = new Static("staColor10","staColor9:5","9","18","18",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_border("1px solid #000000");
            this.addChild(obj.name, obj);

            obj = new Static("staColor11","7","30","18","18",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_border("1px solid #000000");
            this.addChild(obj.name, obj);

            obj = new Static("staColor12","staColor11:5","30","18","18",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_border("1px solid #000000");
            this.addChild(obj.name, obj);

            obj = new Static("staColor13","staColor12:5","30","18","18",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_border("1px solid #000000");
            this.addChild(obj.name, obj);

            obj = new Static("staColor14","staColor13:5","30","18","18",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_border("1px solid #000000");
            this.addChild(obj.name, obj);

            obj = new Static("staColor15","staColor14:5","30","18","18",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_border("1px solid #000000");
            this.addChild(obj.name, obj);

            obj = new Static("staColor16","staColor15:5","30","18","18",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_border("1px solid #000000");
            this.addChild(obj.name, obj);

            obj = new Static("staColor17","staColor16:5","30","18","18",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_border("1px solid #000000");
            this.addChild(obj.name, obj);

            obj = new Static("staColor18","staColor17:5","30","18","18",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_border("1px solid #000000");
            this.addChild(obj.name, obj);

            obj = new Static("staColor19","staColor18:5","30","18","18",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_border("1px solid #000000");
            this.addChild(obj.name, obj);

            obj = new Static("staColor20","staColor19:5","30","18","18",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_border("1px solid #000000");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","155","55","78","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("적용");
            this.addChild(obj.name, obj);

            obj = new Edit("edtColor","7","55","92","24",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_font("bold 13px/normal \"noto\",\"Malgun Gothic\",\"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("staSelectColor","105","58","18","18",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_border("1px solid #000000");
            this.addChild(obj.name, obj);

            obj = new Div("divCanvasLeft","7","90","180","120",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_border("1px solid #cccccc");
            this.addChild(obj.name, obj);

            obj = new Div("divCanvasRight","203","90","23","120",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_border("1px solid #cccccc");
            this.addChild(obj.name, obj);

            obj = new Static("staPoint","190","179","11","13",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("▶");
            obj.set_font("13px/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divCanvasLeft.form
            obj = new Layout("default","",0,0,this.divCanvasLeft.form,function(p){});
            this.divCanvasLeft.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCanvasRight.form
            obj = new Layout("default","",0,0,this.divCanvasRight.form,function(p){});
            this.divCanvasRight.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",240,220,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleColorPicker.xfdl", function() {
        this._defaultColors = [
        			'#000000', '#7d7d7d', '#870014', '#ec1c23', '#ff7e26', '#fef100', '#22b14b', '#00a1e7', '#3f47cc', '#a349a4',
        			'#ffffff', '#c3c3c3', '#b87957', '#feaec9', '#ffc80d', '#eee3af', '#b5e61d', '#99d9ea', '#7092be', '#c8bfe7',
        ];
        this._defaultColorsBorder = "1px solid #cccccc";
        this._defaultCanvasBorder = "1px solid #cccccc";
        this._defaultColorsSelectedBorder = "2px solid #000000";
        this._colorValue = "#ffffff";	//"#071522";	//"#184979";//"#3399FF";

        this.minS = 0; // min allowed saturation (0 - 100)
        this.maxS = 100; // max allowed saturation (0 - 100)
        this.minV = 0; // min allowed value (brightness) (0 - 100)
        this.maxV = 100; // max allowed value (brightness) (0 - 100)
        this.minA = 0.0; // min allowed alpha (opacity) (0.0 - 1.0)
        this.maxA = 1.0; // max allowed alpha (opacity) (0.0 - 1.0)

        this._isMouseDown = false;

        this._Channels = {
        	r: 255, // red [0-255]
        	g: 255, // green [0-255]
        	b: 255, // blue [0-255]
        	h: 0, // hue [0-360]
        	s: 0, // saturation [0-100]
        	v: 100, // value (brightness) [0-100]
        	a: 1.0, // alpha (opacity) [0.0 - 1.0]
        };

        // LOAD
        this.sampleColorPicker_onload = function(obj,e)
        {
        	this._initProc();
        	this._setDefaultColorsSet();
        	//this.fnInit();
        };

        /**
        * @class 초기화 - 업무화면에서 초기에 호출해주어야 한다.
        * @param {String} v - hexa color ex:#ffffff
        * @return N/A
        * @example
        */
        this.fnInit = function(v)
        {
        	if(v) this.setSelectedColor(v);
        	this._canvasInit();
        	this._colorSet();
        	this._redrawLeftPad();
        	this._redrawRightPad();
        };

        /**
        * @class canvas id 생성 - 내부함수
        * @param N/A
        * @return N/A
        * @example
        */
        this._createUID = function ()
        {
        	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c)
        	{
        		var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        		return v.toString(16);
        	});
        };

        // HSV TO RGB
        this.HSV_RGB = function (h, s, v) {
        	var u = parseInt(255 * (v / 100));

        	if (h === null) {
        		return [ u, u, u ];
        	}

        	h /= 60;
        	s /= 100;

        	var i = Math.floor(h);
        	var f = i%2 ? h-i : 1-(h-i);
        	var m = u * (1 - s);
        	var n = u * (1 - s * f);
        	n = parseInt(n);
        	m = parseInt(m);

        	switch (i) {
        		case 6:
        		case 0: return [u,n,m];
        		case 1: return [n,u,m];
        		case 2: return [m,u,n];
        		case 3: return [m,n,u];
        		case 4: return [n,m,u];
        		case 5: return [u,m,n];
        	}
        };

        // RGB TO HSV
        this.RGB_HSV = function (r, g, b) {
        	r /= 255;
        	g /= 255;
        	b /= 255;
        	var n = Math.min(Math.min(r,g),b);
        	var v = Math.max(Math.max(r,g),b);
        	var m = v - n;
        	if (m === 0) { return [ null, 0, 100 * v ]; }
        	var h = r===n ? 3+(b-g)/m : (g===n ? 5+(r-b)/m : 1+(g-r)/m);
        	return [
        		60 * (h===6?0:h),
        		100 * (m/v),
        		100 * v
        	];
        };

        // RGB 값 세팅 및 HSV 세팅
        this.fromRGBA = function (r, g, b, a, flags) { // null = don't change
        	if (r === undefined) { r = null; }
        	if (g === undefined) { g = null; }
        	if (b === undefined) { b = null; }
        	if (a === undefined) { a = null; }

        	if (r !== null) {
        		if (isNaN(r)) { return false; }
        		r = Math.max(0, Math.min(255, r));
        	}
        	if (g !== null) {
        		if (isNaN(g)) { return false; }
        		g = Math.max(0, Math.min(255, g));
        	}
        	if (b !== null) {
        		if (isNaN(b)) { return false; }
        		b = Math.max(0, Math.min(255, b));
        	}
        	if (a !== null) {
        		if (isNaN(a)) { return false; }
        		this._Channels.a = Math.max(0, Math.min(1, this.maxA, a), this.minA);
        	}
        	var hsv = this.RGB_HSV(
        		r===null ? this._Channels.r : r,
        		g===null ? this._Channels.g : g,
        		b===null ? this._Channels.b : b
        	);
        	if (hsv[0] !== null) {
        		this._Channels.h = Math.max(0, Math.min(360, hsv[0]));
        	}
        	if (hsv[2] !== 0) { // fully black color stays black through entire saturation range, so let's not change saturation
        		this._Channels.s = Math.max(0, this.minS, Math.min(100, this.maxS, hsv[1]));
        	}
        	this._Channels.v = Math.max(0, this.minV, Math.min(100, this.maxV, hsv[2]));
        	// update RGB according to final HSV, as some values might be trimmed
        	var rgb = this.HSV_RGB(this._Channels.h, this._Channels.s, this._Channels.v);

        	this._Channels.r = (r===null ? rgb[0] : r);
        	this._Channels.g = (g===null ? rgb[1] : g);
        	this._Channels.b = (b===null ? rgb[2] : b);

        	return true;
        };

        this.fromHSVA = function (h, s, v, a, flags) { // null = don't change
        	if (h === undefined) { h = null; }
        	if (s === undefined) { s = null; }
        	if (v === undefined) { v = null; }
        	if (a === undefined) { a = null; }

        	if (h !== null) {
        		if (isNaN(h)) { return false; }
        		this._Channels.h = Math.max(0, Math.min(360, h));
        	}
        	if (s !== null) {
        		if (isNaN(s)) { return false; }
        		this._Channels.s = Math.max(0, Math.min(100, this.maxS, s), this.minS);
        	}
        	if (v !== null) {
        		if (isNaN(v)) { return false; }
        		this._Channels.v = Math.max(0, Math.min(100, this.maxV, v), this.minV);
        	}
        	if (a !== null) {
        		if (isNaN(a)) { return false; }
        		this._Channels.a = Math.max(0, Math.min(1, this.maxA, a), this.minA);
        	}

        	var rgb = this.HSV_RGB(
        		this._Channels.h,
        		this._Channels.s,
        		this._Channels.v
        	);
        	this._Channels.r = rgb[0];
        	this._Channels.g = rgb[1];
        	this._Channels.b = rgb[2];

        	this._canvasInit();
        	this._redrawLeftPad();
        	this._redrawRightPad();

        	this._setHexstr();
        	//this.exposeColor(flags);
        	return true;
        };

        this._setHexstr = function ()
        {
        	var color = this._rgb2hex(this._Channels.r, this._Channels.g, this._Channels.b);
        	this.edtColor.set_value(color);
        	this.staSelectColor.set_background(color);
        	this._colorValue = color;
        };

        this._hexstr = function (number)
        {
        	number = nexacro.toNumber(number);
        	var chars = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f");
        	var low = number & 0xf;
        	var high = (number >> 4) & 0xf;
        	return "" + chars[high] + chars[low];
        };

        this._rgb2hex = function (r, g, b) {
        	var str = this._hexstr(r);
        	str += this._hexstr(g);
        	str += this._hexstr(b);

        	return "#" + str;
        };

        this._hex2rgb = function (hex)
        {
        	var ret = { "format" : "hexa", "rgba" : [] };
        	if(!hex || hex.length == 0) return;
        	if(hex.rgba && hex.rgba.length > 3) {
        		ret = hex;
        	} else if(typeof hex == "object") {
        		ret.rgba[0] = hex[0];
        		ret.rgba[1] = hex[1];
        		ret.rgba[2] = hex[2];
        	} else {
        		if(hex.indexOf("rgb")>=0) {
        			var m = str.match(/^\W*rgba?\(([^)]*)\)\W*$/i);
        			var par = m[1].split(',');
        			var re = /^\s*(\d+|\d*\.\d+|\d+\.\d*)\s*$/;
        			var mR, mG, mB, mA;
        			if (
        				par.length >= 3 &&
        				(mR = par[0].match(re)) &&
        				(mG = par[1].match(re)) &&
        				(mB = par[2].match(re))
        			) {
        				ret.format = 'rgb';
        				ret.rgba = [
        					parseFloat(mR[1]) || 0,
        					parseFloat(mG[1]) || 0,
        					parseFloat(mB[1]) || 0,
        					null
        				];

        				if (
        					par.length >= 4 &&
        					(mA = par[3].match(re))
        				) {
        					ret.format = 'rgba';
        					ret.rgba[3] = parseFloat(mA[1]) || 0;
        				}
        			}
        		} else {
        			var r,g,b,a;
        			if(hex.substr(0,1) == "#") {
        				ret.rgba[0] = parseInt(hex.slice(1, 3), 16),
        				ret.rgba[1] = parseInt(hex.slice(3, 5), 16),
        				ret.rgba[2] = parseInt(hex.slice(5, 7), 16);
        				ret.rgba[3] = null;

        				if(String(hex).length > 7) {
        					ret.rgba[3] = (parseInt(hex.slice(7, 9), 16) / 255).toString();
        				}
        			}
        		}
        	}
        	this._Channels.r = ret.rgba[0];
        	this._Channels.g = ret.rgba[1];
        	this._Channels.b = ret.rgba[2];

        	return ret;
        };

        // 최초 canvas 실행
        this._initProc = function() {

        	var cId = this._createUID();
        	var cIdLeft = cId + "_Left";
        	var cIdRight = cId + "_Right";
        	var canvas1, canvas2;
        	if(system.navigatorname == "nexacro") {
        		var _pCanvasComponent = nexacro.CanvasComponent.prototype;
        		if(!_pCanvasComponent.getContext) {
        			_pCanvasComponent.getContext = function (v)
        			{
        				return this._canvas;
        			};
        		}

        		canvas1 = new nexacro.CanvasComponent(cIdLeft, 0, 0, this.divCanvasLeft.getOffsetWidth(), this.divCanvasLeft.getOffsetHeight());
        		canvas1.set_name(cIdLeft);
        		this.divCanvasLeft.form.addChild(cIdLeft, canvas1);
        		canvas1.show();
        		canvas1.bringToFront();
        		canvas1.set_enableevent(true);
        		canvas1.setEventHandler('onlbuttondown', this._canvasLeft_mousedown_event_listener, this);

        		canvas2 = new nexacro.CanvasComponent(cIdRight, 0, 0, this.divCanvasRight.getOffsetWidth(), this.divCanvasRight.getOffsetHeight());
        		canvas2.set_name(cIdRight);
        		this.divCanvasRight.form.addChild(cIdRight, canvas2);
        		canvas2.show();
        		canvas2.bringToFront();
        		canvas2.set_enableevent(true);
        		canvas2.setEventHandler('onlbuttondown', this._canvasRight_mousedown_event_listener, this);
        		canvas2.setEventHandler('onmousemove', this._canvasRight_mousemove_event_listener, this);
        		canvas2.setEventHandler('ontouchmove', this._canvasRight_mousemove_event_listener, this);
        		canvas2.setEventHandler('onlbuttonup', this._canvasRight_mouseup_event_listener, this);
        		canvas2.setEventHandler('onmouseleave', this._canvasRight_mouseout_event_listener, this);
        		canvas2.setEventHandler('ontouchend', this._canvasRight_mouseup_event_listener, this);

        	} else {
        		var sId = cIdLeft + "_static";
        		var sta = new nexacro.Static(sId, 0, 0, this.divCanvasLeft.getOffsetWidth(), this.divCanvasLeft.getOffsetHeight());
        		this.divCanvasLeft.form.addChild(sId, sta);
        		sta.show();
        		var control_elem_sta = sta.getElement();
        		var elem_sta = control_elem_sta.handle;

        		canvas1 = document.createElement('canvas');
        		canvas1.id     = cIdLeft;
        		canvas1.width  = this.divCanvasLeft.getOffsetWidth();
        		canvas1.height = this.divCanvasLeft.getOffsetHeight();
        		elem_sta.appendChild(canvas1);
        		canvas1.addEventListener('mousedown', this._canvasLeft_mousedown_event_listener, false);
        		canvas1.addEventListener('touchstart', this._canvasLeft_mousedown_event_listener, false);

        		sId = cIdRight + "_static";
        		sta = new nexacro.Static(sId, 0, 0, this.divCanvasRight.getOffsetWidth(), this.divCanvasRight.getOffsetHeight());
        		this.divCanvasRight.form.addChild(sId, sta);
        		sta.show();
        		control_elem_sta = sta.getElement();
        		elem_sta = control_elem_sta.handle;

        		canvas2 = document.createElement('canvas');
        		canvas2.id     = cIdLeft;
        		canvas2.width  = this.divCanvasRight.getOffsetWidth();
        		canvas2.height = this.divCanvasRight.getOffsetHeight();
        		elem_sta.appendChild(canvas2);
        		canvas2.addEventListener('mousedown', this._canvasRight_mousedown_event_listener, false);
        		canvas2.addEventListener('touchstart', this._canvasRight_mousedown_event_listener, false);
        		canvas2.addEventListener('mousemove', this._canvasRight_mousemove_event_listener, false);
        		canvas2.addEventListener('touchmove', this._canvasRight_mousemove_event_listener, false);
        		canvas2.addEventListener('mouseup', this._canvasRight_mouseup_event_listener, false);
        		canvas2.addEventListener('touchend', this._canvasRight_mouseup_event_listener, false);
        		canvas2.addEventListener('mouseout', this._canvasRight_mouseout_event_listener, false);

        		canvas1._refform = this;
        		canvas2._refform = this;
        	}
        	this.canvasLeft = canvas1;
        	this.canvasRight = canvas2;
        };

        if(!nexacro._colorPickerReplaceTouchEvent) {
        	nexacro._colorPickerReplaceTouchEvent = function (e, obj)
        	{
        		if(e.type &&  e.type.indexOf("touch")>=0) {
        			var te = e.targetTouches;
        			var sve = e;
        			if(te && te[0]) {
        				var tete = te[0];
        				for(var xx in tete) {
        					e[xx] = tete[xx];
        				}
        				e.offsetX = e.pageX;
        				e.offsetY = e.pageY;
        				if(!e.target) e.target = obj;
        				e.offsetLeft = e.offsetTop = 0;
        				e.type = sve.type;
        			}
        		}
        		return e;
        	};

        	nexacro._colorPickerFixEventObject = function (obj, evt)
        	{
        		var e = evt;
        		if(e == undefined) return;
        		if(e.clientx != undefined) {
        			e.pageX  = e.clientx;
        			e.pageY  = e.clienty;
        			e.clientX = e.clientx;
        			e.clientY = e.clienty;
        			e.offsetX = e.pageX;
        			e.offsetY = e.pageY;
        		}
        		//e.target = e.fromobject;
        		e.target = obj;
        		e.offsetLeft = e.offsetTop = 0;
        		return e;
        	};
        }

        /**
        * @class canvas 좌측 마우스 event
        */
        this._canvasLeft_mousedown_event_listener = function(e1, e2) {

        	e1 = nexacro._colorPickerReplaceTouchEvent(e1);
        	var pThis;
        	if(system.navigatorname == "nexacro") {
        		e1 = nexacro._colorPickerFixEventObject(e1, e2);
        		pThis = this;
        	} else {
        		pThis = e1.target._refform;
        	}
        	pThis._setDefaultColorsSet("border");

        	var xVal = e1.offsetX * (360 / (pThis.canvasLeft.width - 1));
        	var yVal = 100 - (e1.offsetY * (100 / (pThis.canvasLeft.height - 1)));

        	pThis.fromHSVA(xVal, yVal, null, null);
        };
        /**
        * @class canvas 우측 event
        */
        this._canvasRight_commonEvent = function(e1, e2) {
        	this._setDefaultColorsSet("border");
        	e1 = nexacro._colorPickerReplaceTouchEvent(e1);
        	if(system.navigatorname == "nexacro") {
        		e1 = nexacro._colorPickerFixEventObject(e1, e2);
        	}
        	var yVal = 100 - (e1.offsetY * (100 / (this.canvasRight.height - 1)));
        	this.fromHSVA(null, null, yVal, null);

        	var y = Math.round((1 - this._Channels["v"] / 100) * (this.canvasRight.height - 1));
        	y = parseInt(y - (this.staPoint.getOffsetHeight()/2));
        	this.staPoint.setOffsetTop(this.divCanvasRight.getOffsetTop()+y);
        };
        /**
        * @class canvas 우측 mouse out
        */
        this._canvasRight_mouseout_event_listener = function(e1, e2) {
        	this._isMouseDown = false;
        };
        /**
        * @class canvas 우측 mouse down
        */
        this._canvasRight_mousedown_event_listener = function(e1, e2) {
        	this._isMouseDown = true;
        	var pThis;
        	if(system.navigatorname == "nexacro") {
        		pThis = this;
        	} else {
        		pThis = e1.target._refform;
        	}
        	pThis._canvasRight_commonEvent(e1, e2);
        };
        /**
        * @class canvas 우측 mouse up
        */
        this._canvasRight_mouseup_event_listener = function(e1, e2) {
        	this._isMouseDown = false;
        	var pThis;
        	if(system.navigatorname == "nexacro") {
        		pThis = this;
        	} else {
        		pThis = e1.target._refform;
        	}
        	pThis._canvasRight_commonEvent(e1, e2);
        };
        /**
        * @class canvas 우측 mouse move
        */
        this._canvasRight_mousemove_event_listener = function(e1, e2) {
        	if(this._isMouseDown == false) return;
        	var pThis;
        	if(system.navigatorname == "nexacro") {
        		pThis = this;
        	} else {
        		pThis = e1.target._refform;
        	}
        	pThis._canvasRight_commonEvent(e1, e2);
        };
        /**
        * @class canvas 좌측 기본 color panel
        */
        this._canvasInit = function() {
        	var contextLeft = this.canvasLeft.getContext("2d");
        	var contextRight = this.canvasRight.getContext("2d");

        	contextLeft.clearRect(0, 0, this.canvasLeft.width, this.canvasLeft.height);

        	var lGrad = contextLeft.createLinearGradient(0, 0, this.canvasLeft.width, 0);
        	var addValue = 1;
        	if(system.navigatorname == "nexacro") addValue = 100;
         	lGrad.addColorStop((0 / 6)*addValue, '#ff0000');
         	lGrad.addColorStop((1 / 6)*addValue, '#ffff00');
         	lGrad.addColorStop((2 / 6)*addValue, '#00ff00');
         	lGrad.addColorStop((3 / 6)*addValue, '#00ffff');
         	lGrad.addColorStop((4 / 6)*addValue, '#0000ff');
         	lGrad.addColorStop((5 / 6)*addValue, '#ff00ff');
         	lGrad.addColorStop((6 / 6)*addValue, '#ff0000');

        	contextLeft.fillStyle = lGrad;
        	if(system.navigatorname == "nexacro") {
        		contextLeft.setElementFillStyle(contextLeft.fillStyle);
        	}
        	contextLeft.fillRect(0, 0, this.canvasLeft.width, this.canvasLeft.height);

        	var vGrad = contextLeft.createLinearGradient(0, 0, 0, this.canvasLeft.height);
        	vGrad.addColorStop(0, '#ffffff00');
        	vGrad.addColorStop(1, '#ffffffff');

        	contextLeft.fillStyle = vGrad;
        	if(system.navigatorname == "nexacro") {
        		contextLeft.setElementFillStyle(contextLeft.fillStyle);
        	}
        	contextLeft.fillRect(0, 0, this.canvasLeft.width, this.canvasLeft.height);
        };
        /**
        * @class canvas 기본값을 rgb setting
        */
        this._colorSet = function() {
        	if(!this._colorValue || this._colorValue == "") return;
        	var color = this._hex2rgb(this._colorValue);
        	var flags = null;
        	this.fromRGBA(
        		color.rgba[0],
        		color.rgba[1],
        		color.rgba[2],
        		1,
        		flags
        	);

        	this._setHexstr();

        };
        /**
        * @class 최초 전달받은 color값을 세팅
        */
        this.setSelectedColor = function(v) {
        	this._colorValue = v;
        	this.edtColor.set_value(v);
        	this.staSelectColor.set_background(v);
        };
        /**
        * @class 상단 10개 기본컬러값 변경
        */
        this.setDefaultColors = function(arrColors) {
        	if(!arrColors || !arrColors.length || arrColors.length < 1) return;
        	for(var i=0,len=arrColors.length;i<len;i++) {
        		this._defaultColors[i] = arrColors[i];
        	}
        };
        /**
        * @class 상단 10개 기본 border 값 변경  ex:1px solid red
        */
        this.setDefaultColorsBorder = function(v) {
        	this._defaultColorsBorder = v;
        };
        /**
        * @class 하단 canvas 기본 border 값 변경  ex:1px solid red
        */
        this.setDefaultCanvasBorder = function(v) {
        	this._defaultCanvasBorder = v;
        };
        /**
        * @class 기본 스타일 적용
        */
        this._setDefaultColorsSet = function(v) {
        	if(v == "canvasborder") {
        		this.divCanvasLeft.set_border(this._defaultCanvasBorder);
        		this.divCanvasRight.set_border(this._defaultCanvasBorder);
        	} else {
        		if(!v) {
        			this.divCanvasLeft.set_border(this._defaultCanvasBorder);
        			this.divCanvasRight.set_border(this._defaultCanvasBorder);
        		}
        		for(var i=0,len=this._defaultColors.length;i<len;i++) {
        			if(v == "color") {
        				this["staColor" + (i+1)].set_background(this._defaultColors[i]);
        			} else if(v == "border") {
        				this["staColor" + (i+1)].set_border(this._defaultColorsBorder);
        			} else {
        				this["staColor" + (i+1)].set_background(this._defaultColors[i]);
        				this["staColor" + (i+1)].set_border(this._defaultColorsBorder);
        			}
        		}
        	}
        };
        /**
        * @class 하단 좌측 캔버스 draw
        */
        this._redrawLeftPad = function() {
        	//var yChannel = jsc.getPadYChannel(THIS);
        	var yChannel = "s";
        	var x = Math.round((this._Channels.h / 360) * (this.canvasLeft.width - 1));
        	var y = Math.round((1 - this._Channels[yChannel] / 100) * (this.canvasLeft.height - 1));

        	var crossOuterSize = (2 * 1 + 1 + 2 * 10);
        	var ofs = -Math.floor(crossOuterSize / 2);

        	var crossSize = 10;
        	var crossSizeHalf = crossSize/2;
        	var contextLeft = this.canvasLeft.getContext("2d");

        	// outter Cross
        	contextLeft.strokeStyle = "#ffffff";
        	contextLeft.lineWidth = 2;

        	if(system.navigatorname == "nexacro") {
        		contextLeft.setElementStrokeStyle(nexacro.ColorObject(contextLeft.strokeStyle));
        		contextLeft.setElementLineWidth(contextLeft.lineWidth);
        	}
        	contextLeft.beginPath();
        	contextLeft.moveTo(x+1, y-crossSizeHalf+1);
        	contextLeft.lineTo(x+1, y+crossSizeHalf+1);
        	contextLeft.stroke();
        	contextLeft.closePath();

        	contextLeft.beginPath();
        	contextLeft.moveTo(x-crossSizeHalf+1, y);
        	contextLeft.lineTo(x+crossSizeHalf+1, y);
        	contextLeft.stroke();
        	contextLeft.closePath();

        	// inner Cross
        	contextLeft.strokeStyle = "#000000";
        	contextLeft.lineWidth = 2;

        	if(system.navigatorname == "nexacro") {
        		contextLeft.setElementStrokeStyle(nexacro.ColorObject(contextLeft.strokeStyle));
        		contextLeft.setElementLineWidth(contextLeft.lineWidth);
        	}
        	contextLeft.beginPath();
        	contextLeft.moveTo(x, y-crossSizeHalf);
        	contextLeft.lineTo(x, y+crossSizeHalf);
        	contextLeft.stroke();
        	contextLeft.closePath();

        	contextLeft.beginPath();
        	contextLeft.moveTo(x-crossSizeHalf, y);
        	contextLeft.lineTo(x+crossSizeHalf, y);
        	contextLeft.stroke();
        	contextLeft.closePath();

        	contextLeft.lineWidth 		= 1;
        	if(system.navigatorname == "nexacro") {
        		contextLeft.setElementLineWidth(contextLeft.lineWidth);
        	}
        };
        /**
        * @class 하단 우측 캔버스 draw
        */

        this._redrawRightPad = function() {
        	var y = Math.round((1 - this._Channels["v"] / 100) * (this.canvasRight.height - 1));
        	this.staPoint.setOffsetTop(this.divCanvasRight.getOffsetTop()+y);
        	var contextRight = this.canvasRight.getContext("2d");

        	var rgb1 = this.HSV_RGB(this._Channels.h, this._Channels.s, 100);

        	var color1 = this._rgb2hex(rgb1[0], rgb1[1], rgb1[2]);
        	var color2 = "#000000";

        	contextRight.clearRect(0, 0, this.canvasRight.width, this.canvasRight.height);

        	var grad = contextRight.createLinearGradient(0, 0, 0, this.canvasRight.height);
        	var addValue = 1;
        	if(system.navigatorname == "nexacro") addValue = 100;
        	grad.addColorStop(0*addValue, color1);
        	grad.addColorStop(1*addValue, color2);

        	contextRight.fillStyle = grad;
        	if(system.navigatorname == "nexacro") {
        		contextRight.setElementFillStyle(contextRight.fillStyle);
        	}
        	contextRight.fillRect(0, 0, this.canvasRight.width, this.canvasRight.height);

        };

        this.sampleColorPicker_onbeforeclose = function(obj,e)
        {
        	if(this.canvasLeft) {
        		this.canvasLeft._refform = null
        		this.canvasRight._refform = null
        	}
        };

        this._colorValidate = function(v) {
        	if(/^#[0-9a-f]{6}$/i.test(v)) {
        		return true;
        	} else {
        		this.edtColor.set_value(this._colorValue);
        		return false;
        	}
        };

        //------------------------------------------------------------------------------
        // COMPONENT EVENT
        //------------------------------------------------------------------------------
        this.edtColor_onchanged = function(obj,e)
        {
        	if(!obj.value || obj.value == "") return;
        	if(obj.value.length > 7) {
        		obj.set_value(obj.value.substr(0,7));
        	}

        	this._colorValidate(obj.value.toLowerCase());
        	this._colorValue = obj.value;
        	this._colorSet();
        	this._canvasInit();
        	this._redrawLeftPad();
        	this._redrawRightPad();
        };

        this.edtColor_oninput = function(obj,e)
        {
        	if(!obj.value || obj.value == "") return;
        	if(obj.value.length == 7 && obj.value.substr(0,1) == "#") {
        		this._colorValidate(obj.value.toLowerCase());
        		this._colorValue = obj.value;
        		this._colorSet();
        		this._canvasInit();
        		this._redrawLeftPad();
        		this._redrawRightPad();

        	}
        };

        // 기본이미지 클릭
        this.commonColorClick = function(obj,e)
        {
        	var strColor = obj.background;
        	this._setDefaultColorsSet("border");
        	obj.set_border(this._defaultColorsSelectedBorder);
        	this._colorValue = strColor;
        	this._colorSet();
        	this._canvasInit();
        	this._redrawLeftPad();
        	this._redrawRightPad();
        };

        // 적용
        this.btn00_onclick = function(obj,e)
        {
        	if(this._colorValidate(this.edtColor.value.toLowerCase()) == true) {
        		this.parent.closePopup(this.edtColor.value);
        	} else {
        		this.parent.closePopup("");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.sampleColorPicker_onload,this);
            this.addEventHandler("onbeforeclose",this.sampleColorPicker_onbeforeclose,this);
            this.staColor1.addEventHandler("onclick",this.commonColorClick,this);
            this.staColor2.addEventHandler("onclick",this.commonColorClick,this);
            this.staColor3.addEventHandler("onclick",this.commonColorClick,this);
            this.staColor4.addEventHandler("onclick",this.commonColorClick,this);
            this.staColor5.addEventHandler("onclick",this.commonColorClick,this);
            this.staColor6.addEventHandler("onclick",this.commonColorClick,this);
            this.staColor7.addEventHandler("onclick",this.commonColorClick,this);
            this.staColor8.addEventHandler("onclick",this.commonColorClick,this);
            this.staColor9.addEventHandler("onclick",this.commonColorClick,this);
            this.staColor10.addEventHandler("onclick",this.commonColorClick,this);
            this.staColor11.addEventHandler("onclick",this.commonColorClick,this);
            this.staColor12.addEventHandler("onclick",this.commonColorClick,this);
            this.staColor13.addEventHandler("onclick",this.commonColorClick,this);
            this.staColor14.addEventHandler("onclick",this.commonColorClick,this);
            this.staColor15.addEventHandler("onclick",this.commonColorClick,this);
            this.staColor16.addEventHandler("onclick",this.commonColorClick,this);
            this.staColor17.addEventHandler("onclick",this.commonColorClick,this);
            this.staColor18.addEventHandler("onclick",this.commonColorClick,this);
            this.staColor19.addEventHandler("onclick",this.commonColorClick,this);
            this.staColor20.addEventHandler("onclick",this.commonColorClick,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.edtColor.addEventHandler("onchanged",this.edtColor_onchanged,this);
            this.edtColor.addEventHandler("oninput",this.edtColor_oninput,this);
        };
        this.loadIncludeScript("sampleColorPicker.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
