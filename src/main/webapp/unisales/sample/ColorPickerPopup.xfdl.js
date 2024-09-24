(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ColorPickerPopup");
            this.set_titletext("Color 선택");
            this.getSetter("classname").set("OColorDialog");
            this.getSetter("inheritanceid").set("");
            this.getSetter("position").set("absolute");
            this.getSetter("style").set("background:transparent;");
            if (Form == this.constructor)
            {
                this._setFormPosition(527,344);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static10","0","0","527","344",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","17","10","122","15",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Basic Color");
            this.addChild(obj.name, obj);

            obj = new Button("selectColorBoder11","244","212","16","48",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("b11","15","26","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Static("b21","15","53","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("b31","15","80","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("b41","15","107","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("b51","15","134","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Static("b61","15","161","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Static("b12","44","26","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("b13","73","26","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Static("b14","102","26","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Static("b15","131","26","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Static("b16","160","26","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            this.addChild(obj.name, obj);

            obj = new Static("b17","189","26","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);

            obj = new Static("b18","218","26","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            this.addChild(obj.name, obj);

            obj = new Button("btnCancel","189","308","71","25",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("Cancel");
            obj.set_cssclass("WF_btn_Pnt");
            this.addChild(obj.name, obj);

            obj = new Button("btnApply","263","308","71","25",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("OK");
            obj.set_cssclass("WF_btn_Pnt");
            this.addChild(obj.name, obj);

            obj = new Static("b22","44","53","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            this.addChild(obj.name, obj);

            obj = new Static("b32","44","80","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            this.addChild(obj.name, obj);

            obj = new Static("b42","44","107","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            this.addChild(obj.name, obj);

            obj = new Static("b52","44","134","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            this.addChild(obj.name, obj);

            obj = new Static("b62","44","161","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            this.addChild(obj.name, obj);

            obj = new Static("b23","73","53","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            this.addChild(obj.name, obj);

            obj = new Static("b33","73","80","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            this.addChild(obj.name, obj);

            obj = new Static("b43","73","107","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            this.addChild(obj.name, obj);

            obj = new Static("b53","73","134","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            this.addChild(obj.name, obj);

            obj = new Static("b63","73","161","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            this.addChild(obj.name, obj);

            obj = new Static("b24","102","53","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            this.addChild(obj.name, obj);

            obj = new Static("b34","102","80","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            this.addChild(obj.name, obj);

            obj = new Static("b44","102","107","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            this.addChild(obj.name, obj);

            obj = new Static("b54","102","134","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            this.addChild(obj.name, obj);

            obj = new Static("b64","102","161","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            this.addChild(obj.name, obj);

            obj = new Static("b25","131","53","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            this.addChild(obj.name, obj);

            obj = new Static("b35","131","80","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            this.addChild(obj.name, obj);

            obj = new Static("b45","131","107","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            this.addChild(obj.name, obj);

            obj = new Static("b55","131","134","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("36");
            this.addChild(obj.name, obj);

            obj = new Static("b65","131","161","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            this.addChild(obj.name, obj);

            obj = new Static("b26","160","53","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            this.addChild(obj.name, obj);

            obj = new Static("b36","160","80","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            this.addChild(obj.name, obj);

            obj = new Static("b46","160","107","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            this.addChild(obj.name, obj);

            obj = new Static("b56","160","134","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            this.addChild(obj.name, obj);

            obj = new Static("b66","160","161","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            this.addChild(obj.name, obj);

            obj = new Static("b27","189","53","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            this.addChild(obj.name, obj);

            obj = new Static("b37","189","80","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("44");
            this.addChild(obj.name, obj);

            obj = new Static("b47","189","107","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("45");
            this.addChild(obj.name, obj);

            obj = new Static("b57","189","134","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("46");
            this.addChild(obj.name, obj);

            obj = new Static("b67","189","161","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            this.addChild(obj.name, obj);

            obj = new Static("b28","218","53","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("48");
            this.addChild(obj.name, obj);

            obj = new Static("b38","218","80","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            this.addChild(obj.name, obj);

            obj = new Static("b48","218","107","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("50");
            this.addChild(obj.name, obj);

            obj = new Static("b58","218","134","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("51");
            this.addChild(obj.name, obj);

            obj = new Static("b68","218","161","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("52");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("colorImage","260","29","221","172",null,null,null,null,null,null,this);
            obj.set_taborder("53");
            obj.set_tabstop("false");
            obj.set_image("URL(\'image::editor/colorDialog.jpg\')");
            this.addChild(obj.name, obj);

            obj = new Static("previewColor","260","211","72","48",null,null,null,null,null,null,this);
            obj.set_taborder("55");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","344","236","32","23",null,null,null,null,null,null,this);
            obj.set_taborder("57");
            obj.set_text("Set");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","344","261","32","23",null,null,null,null,null,null,this);
            obj.set_taborder("58");
            obj.set_text("Lum");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","344","211","36","23",null,null,null,null,null,null,this);
            obj.set_taborder("59");
            obj.set_text("Hue");
            this.addChild(obj.name, obj);

            obj = new Static("Static05","423","236","48","23",null,null,null,null,null,null,this);
            obj.set_taborder("60");
            obj.set_text("Green");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","423","261","32","23",null,null,null,null,null,null,this);
            obj.set_taborder("61");
            obj.set_text("Blue");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","423","211","32","23",null,null,null,null,null,null,this);
            obj.set_taborder("62");
            obj.set_text("Red");
            this.addChild(obj.name, obj);

            obj = new Static("Static08","17","191","168","15",null,null,null,null,null,null,this);
            obj.set_taborder("63");
            obj.set_text("Custom Add Color");
            this.addChild(obj.name, obj);

            obj = new Static("u0","15","209","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("64");
            this.addChild(obj.name, obj);

            obj = new Static("u2","44","209","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("65");
            this.addChild(obj.name, obj);

            obj = new Static("u4","73","209","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("66");
            this.addChild(obj.name, obj);

            obj = new Static("u6","102","209","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("67");
            this.addChild(obj.name, obj);

            obj = new Static("u8","131","209","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("68");
            this.addChild(obj.name, obj);

            obj = new Static("u10","160","209","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("69");
            this.addChild(obj.name, obj);

            obj = new Static("u12","189","209","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("70");
            this.addChild(obj.name, obj);

            obj = new Static("u14","218","209","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("71");
            this.addChild(obj.name, obj);

            obj = new Static("u1","15","236","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("72");
            this.addChild(obj.name, obj);

            obj = new Static("u3","44","236","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("73");
            this.addChild(obj.name, obj);

            obj = new Static("u5","73","236","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("74");
            this.addChild(obj.name, obj);

            obj = new Static("u7","102","236","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("75");
            this.addChild(obj.name, obj);

            obj = new Static("u9","131","236","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("76");
            this.addChild(obj.name, obj);

            obj = new Static("u11","160","236","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("77");
            this.addChild(obj.name, obj);

            obj = new Static("u13","189","236","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("78");
            this.addChild(obj.name, obj);

            obj = new Static("u15","218","236","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("79");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddUserColor","260","263","72","21",null,null,null,null,null,null,this);
            obj.set_taborder("80");
            obj.set_text("Add");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("selectPointer","267","14","19","19",null,null,null,null,null,null,this);
            obj.getSetter("transparenthittest").set("true");
            obj.set_taborder("82");
            obj.set_tabstop("false");
            obj.set_image("URL(\'image::select.GIF\')");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("slider","505","45","9","15",null,null,null,null,null,null,this);
            obj.set_taborder("83");
            obj.set_tabstop("false");
            obj.set_image("URL(\'image::editor/Editr_arrow.png\')");
            this.addChild(obj.name, obj);

            obj = new Static("Static09","0","297","526","1",null,null,null,null,null,null,this);
            obj.set_taborder("84");
            obj.set_cssclass("WF_sta_lineDiv");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_r","465","211","40","23",null,null,null,null,null,null,this);
            obj.set_taborder("85");
            obj.getSetter("ontextchanged").set("onChangeRgbValue");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_g","465","236","40","23",null,null,null,null,null,null,this);
            obj.set_taborder("86");
            obj.getSetter("ontextchanged").set("onChangeRgbValue");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_b","465","261","40","23",null,null,null,null,null,null,this);
            obj.set_taborder("87");
            obj.getSetter("ontextchanged").set("onChangeRgbValue");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_h","374","211","40","23",null,null,null,null,null,null,this);
            obj.set_taborder("88");
            obj.getSetter("ontextchanged").set("onChangeHslValue");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_s","374","236","40","23",null,null,null,null,null,null,this);
            obj.set_taborder("89");
            obj.getSetter("ontextchanged").set("onChangeHslValue");
            this.addChild(obj.name, obj);

            obj = new Edit("ed_v","374","261","40","23",null,null,null,null,null,null,this);
            obj.set_taborder("90");
            obj.getSetter("ontextchanged").set("onChangeLumValue");
            this.addChild(obj.name, obj);

            obj = new Button("selectColorBoder","120","1","27","27",null,null,null,null,null,null,this);
            obj.set_taborder("91");
            this.addChild(obj.name, obj);

            obj = new Div("lightnessBar","492","29","13","172",null,null,null,null,null,null,this);
            obj.set_taborder("92");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.lightnessBar
            obj = new Layout("default","",0,0,this.lightnessBar.form,function(p){});
            this.lightnessBar.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",527,344,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ColorPickerPopup.xfdl", function() {
        /**
         * 기본색상(48개)을 선택할 수 있는 Color Picker.
         * Hue의 범위는 0 ~ 240도.
         */

        this.initColor = '#000000'; //default color

        //HSL과 RGB값을 가진 Color객체
        this.colorValue = {R:0, G:0, B:0, A:255, H:0, S:0, V:0};
        //팝업호출시 전달받은 색상
        this.receiveColor = "#000000";
        //선택한 "사용자 색"관련 컴포넌트
        this.userColorComponent = this.u0;

        //selectPointer 폭
        this.selectPointerWidth;
        //selectPointer 높이
        this.selectPointerHeight;

        //명도선택판 높이
        this.lightnessBarHeight;
        //명도선택판 Top Position
        this.lightnessBarTop;
        //명도선택판 Bottom Position
        this.lightnessBarBottom;

        //slider 높이
        this.sliderHeight;

        //this.fixSize = 19;
        this.fixSize = 10; // selectPointer / 2 + 1

        this.sliderCenter = 8; // slider / 2 + 1

        //pointer의 상하좌우 이동 가능범위 설정
        this.pointerHalfWidth = parseInt(this.selectPointer.width / 2);
        this.pointerHalfHeight = parseInt(this.selectPointer.height / 2);
        this.paletteLeft = parseInt(this.colorImage.left);
        this.paletteTop  = parseInt(this.colorImage.top);

        this.minLeft   = this.paletteLeft - this.pointerHalfWidth;
        this.minTop    = this.paletteTop  - this.pointerHalfHeight;
        this.minRight  = this.paletteLeft + parseInt(this.colorImage.width)  - this.pointerHalfWidth;
        this.minBottom = this.paletteTop  + parseInt(this.colorImage.height) - this.pointerHalfHeight;

        //slider의 상하이동 가능범위 설정
        this.lightBarTop = parseInt(this.lightnessBar.top);
        this.sliderHalfHeight = parseInt(this.slider.height/2);
        this.allowSliderMinTop = (this.lightBarTop - this.sliderHalfHeight);
        this.allowSliderMaxTop = ((this.lightBarTop + parseInt(this.lightnessBar.height))
                                    - this.sliderHalfHeight);

        this.ColorPickerPopup_onload = function(obj, e)
        {
        	var ecoColor = Eco.Color;

        	this.selectPointerWidth = 20;
        	this.selectPointerHeight = 20;

        	this.lightnessBarHeight = this.lightnessBar.height;
        	this.lightnessBarTop = this.lightnessBar.top;
        	this.lightnessBarBottom = this.lightnessBar.bottom;

        	this.sliderHeight = 10;

        	//기본색
        	var basicColors= ecoColor.basicColors;
        	var horizontalLen = basicColors[0].length; //8
        	var verticalLen   = basicColors.length; //6
        	var i = j = 0;
        	var row, col, color, currentItem;

        	//전달받은 색상이 "기본 색"일 때 이에 해당하는 컴포넌트(검정색이 default).
        	var matchComponent = this.b61;

        	//팝업호출시 전달받은 색상
         	var arg = Eco.XComp.getPopupArguments(this,["initColor"])

        	if(!Eco.isEmpty(arg["initColor"]))
        	{
        		this.initColor = arg["initColor"];
        	}


        	this.receiveColor = this.initColor.toLowerCase();


        	//"기본 색"관련 컴포넌트에 배경색 설정
        	var compList = this.components;

        	for(var i=0; i<verticalLen; i++)
        	{
        		row = i+1;

        		for(var j=0; j<horizontalLen; j++)
        		{
        			col = j+1;
        			color = ecoColor.basicColors[i][j];

        			currentItem = compList["b"+row+col];

        			if( color == this.receiveColor )
        			{
        				matchComponent = currentItem;
        			}

        			color += " URL('image::editor/Editer_sta_clrBox.png')";
        			currentItem.style.set_background(color);

        		}
        	}


        	//"사용자 지정 색" 존재시 배경색 설정
        	var compList = this.components;
        	var ecoStorage = Eco.LocalStorage;

        	for( i = 0 ; i < 16 ; i++ )
        	{
        		var userColor = ecoStorage.getItem("u" + i);

        		if(userColor)
        		{
        			var pureUserColor = userColor.substr(0,7);
        			if( pureUserColor == this.receiveColor )
        			{
        				matchComponent = compList["u"+i];
        			}

        			userColor = userColor + " URL('image::editor/Editer_sta_clrBox.png')";
        			compList["u"+i].style.set_background(userColor);

        		}

        	}


         	//색선택 표시용 테두리 설정
         	this.setSelectColorBorder(matchComponent);

         	//colorValue 설정
         	this.setColor(this.receiveColor);

        	this.setValue();

         	this.onChangeRGB();

        	this.setPreview();

         	this.setLightnessBar();
        }


        /*========================================================================
        	Function Area
        ========================================================================*/


        /**
         * color를 헥사문자열값으로 반환.
         * @example
         *   getHexColor(); //return "#FF0000"
         */
        this.getHexColor = function()
        {
        	return Eco.Color.rgbToHex(this.colorValue.R, this.colorValue.G, this.colorValue.B, this.colorValue.A);
        }


        this.checkRgbaValue = function(r,g,b,a)
        {
        	var len = arguments.length;

        	if(len < 3) return false;
        	var i = 0,
        	    value;
        	for( ; i < len; i++)
        	{
        		value = arguments[i];
        		if(value < 0 || value > 255) return false;
        	}

        	return true;
        }

        /**
         * this.colorValue 설정
         * @param {string | number} firstValue Color 값 문자열 또는 Red 값 ( 0 ~ 255 ).
         * @param {number=} green Green 값.( 0 ~ 255 )의 입력범위를 가집니다.
         * @param {number=} blue Blue 값.( 0 ~ 255 )의 입력범위를 가집니다.
         * @param {number=} alpha Alpha 값.( 0 ~ 255 ) 의 입력범위를 가집니다.
         * @example
         *   this.setColor("#FF0000");
         *   this.setColor(255,0,0);
         */
        this.setColor = function(firstValue,green,blue,alpha)
        {
        	var ret, hsv, color = {r: 0, g: 0, b: 0, a: 0};
        	color.setColor = function(r,g,b,a){
        		this.r = r;
        		this.g = g;
        		this.b = b;

        		if(Eco.isEmpty(a)) return;

        		this.a = a;
        	};


        	if( typeof(firstValue) == "string" && Eco.isEmpty(green))
        	{
        		ret = Eco.Color.hexToRgb(firstValue);

        		if(ret)
        		{
        			color.setColor(ret[0], ret[1], ret[2], ret[3]);
        			ret = true;
        		}
        	}
        	else
        	{
        		if( alpha == null )
        		{
        			color.setColor(firstValue,green,blue);
        			ret = this.checkRgbaValue(firstValue,green,blue);

        		}
        		else
        		{
        			color.setColor(firstValue,green,blue,alpha);
        			ret = this.checkRgbaValue(firstValue,green,blue,alpha);
        		}
        	}

        	hsv = nexacro.toNumber(this.ed_v.value) || 0;
        	if( ret == true )
        	{
        		this.colorValue.R = color.r;
        		this.colorValue.G = color.g;
        		this.colorValue.B = color.b;
        		this.colorValue.A = color.a;

        		if(hsv == 0 || hsv == 240){
        			this.colorValue.H = nexacro.toNumber(this.ed_h.value) || 0;
        			this.colorValue.S = nexacro.toNumber(this.ed_s.value) || 0;
        			this.colorValue.V = hsv;
        		}else{
        			hsv = Eco.Color.rgbToHsl(color.r, color.g, color.b);

        			this.colorValue.H = hsv[0];
        			this.colorValue.S = hsv[1];
        			this.colorValue.V = hsv[2];
        		}
        	}
        	else
        	{
        		this.colorValue.R = 255;
        		this.colorValue.G = 255;
        		this.colorValue.B = 255;
        		this.colorValue.A = 255;

        		if(hsv == 0 || hsv == 240){
        			this.colorValue.H = nexacro.toNumber(this.ed_h.value) || 0;
        			this.colorValue.S = nexacro.toNumber(this.ed_s.value) || 0;
        			this.colorValue.V = hsv;
        		}else{
        			hsv = Eco.Color.rgbToHsl(color.r, color.g, color.b);
        			this.colorValue.H = hsv[0];
        			this.colorValue.S = hsv[1];
        			this.colorValue.V = hsv[2];
        		}
        	}


        	return ret;
        }

        /**
         * HSL,RGB표시용 컴포넌트 값설정.
         * colorValue의 값을 사용한다.
         */
        this.setValue = function()
        {
        	this.ed_h.set_value(this.colorValue.H);
        	this.ed_v.set_value(this.colorValue.V);
        	this.ed_s.set_value(this.colorValue.S);

        	this.ed_r.set_value(this.colorValue.R);
        	this.ed_g.set_value(this.colorValue.G);
        	this.ed_b.set_value(this.colorValue.B);
        }


        //RGB와 연관된 컴포넌트의 값을 업데이트합니다.
        this.setRgbValue = function()
        {
        	this.ed_r.set_value( this.colorValue.R );
        	this.ed_g.set_value( this.colorValue.G);
        	this.ed_b.set_value( this.colorValue.B);
        }

        this.setHslValue = function()
        {
        	this.ed_h.set_value( this.colorValue.H);
        	this.ed_v.set_value( this.colorValue.V);
        	this.ed_s.set_value( this.colorValue.S);
        }


        /**
         * 미리보기 컴포넌트의 배경색을 설정합니다.
         */
        this.setPreview = function()
        {
            var hexColor = this.getHexColor();

            //알파값이 적용되지 않아 제거함.
            var removeAlpha = hexColor.substr(0, hexColor.length - 2);
            this.previewColor.style.set_background(removeAlpha);

        }


        /**
         * 명도선택판 배경색을 설정합니다.
         */
        this.setLightnessBar = function()
        {
        	var hexColor;
        	var rgb = Eco.Color.hslToRgb(this.colorValue.H,this.colorValue.S, 120);
        	hexColor = Eco.Color.rgbToHex(rgb[0],rgb[1],rgb[2],this.colorValue.A);


        	//알파값이 적용되지 않아 제거함.
            var removeAlpha = hexColor.substr(0, hexColor.length - 2);


        	this.lightnessBar.style.set_gradation("linear 0%,0% white 0%,100% black [50% " + removeAlpha + "]");
        }





        /**
         * "기본 색" 및 "사용자 지정 색" 컴포넌트를 대상으로
         * selectColorBoder를 이동시켜 선택된 컴포넌트를 표시한다.
         * @param {component} xComp 테두리가 위치할 컴포넌트 객체.
         */
        this.setSelectColorBorder = function(xComp)
        {
        	this.selectColorBoder.move(xComp.left, xComp.top);
        }

        /**
         * RGB값 변경시 처리함수.
         * SelectPointer와 Slider를 color에 맞게 이동시킨다.
         */
        this.onChangeRGB = function()
        {
        	this.moveSelectPointer();
        	this.moveSlider();
        }


        //명도선택판에서 선택된 명도로
        //관련된 정보를 업데이트합니다.
        this.onChangeLightnessBar = function()
        {
        	var sliderTop = nexacro.toNumber(this.slider.top);
        	var lightnessBarTop = nexacro.toNumber(this.lightnessBar.top);
        	var adjustTop = sliderTop + this.sliderCenter;
        	var topGap  = adjustTop - this.lightnessBarTop;

        	var lightRate = nexacro.round(240/172, 2); //명도배율. 1일때
        	var light = nexacro.ceil(240 - topGap * lightRate);

        	this.ed_v.set_value(light);

         	var rgb = Eco.Color.hslToRgb(this.ed_h.value, this.ed_s.value, light);

        	this.setColor(rgb[0], rgb[1], rgb[2]);
        	this.setPreview();
        	this.setRgbValue();

        }

        //색상,채도 입력시 처리
        this.onChangeHslValue = function(obj)
        {
        	var value = obj.value;
        	if(Eco.isEmpty(value)) return;

        	this.setValidate(obj);

        	var h = parseInt(this.ed_h.value);
        	var s = parseInt(this.ed_s.value);
        	var l = parseInt(this.ed_v.value);

        	var rgb = Eco.Color.hslToRgb(h,s,l);
        	this.setColor(rgb[0], rgb[1], rgb[2]);
        	this.setPreview();
        	this.setLightnessBar();

        	this.setRgbValue();
        	this.moveSelectPointer();
        }

        //명도 입력시 처리
        this.onChangeLumValue = function(obj,  e)
        {
        	var value = obj.value;
        	if(Eco.isEmpty(value)) return;

        	this.setValidate(obj);

        	var h = parseInt(this.ed_h.value);
        	var s = parseInt(this.ed_s.value);
        	var l = parseInt(this.ed_v.value);

        	var rgb = Eco.Color.hslToRgb(h,s,l);
        	this.setColor(rgb[0], rgb[1], rgb[2]);
        	this.setPreview();
        	this.moveSlider();
        }

        //R,G,B 입력시 처리
        this.onChangeRgbValue = function(obj)
        {
        	var value = obj.value;
        	if(Eco.isEmpty(value)) return;

        	this.setValidate(obj);

        	var r = parseInt(this.ed_r.value);
        	var g = parseInt(this.ed_g.value);
        	var b = parseInt(this.ed_b.value);

        	this.setColor(r, g, b);
         	this.setPreview();
         	this.setLightnessBar();

         	this.setHslValue();
         	this.moveSlider();
         	this.moveSelectPointer();
        }


        this.setValidate = function(obj, max_val)
        {
        	if( obj === this.ed_h)
        	{
        		max_val = 239;
        	}
        	else if(obj === this.ed_s || obj === this.ed_v )
        	{
        		max_val = 240;
        	}
        	else if(obj === this.ed_r || obj === this.ed_g || obj === this.ed_b){
        		max_val = 255;
        	}else{
        		max_val = 0;
        	}

        	if( obj.value > max_val )
        	{
        		obj.set_value(max_val);
        		obj.setCaretPos(-1); //입력 Caret을 마지막으로 이동
        	}
        }


        //색채선택판에서 선택된 색으로
        //관련된 정보를 업데이트합니다.
        this.onChangeHueSat = function()
        {
        	var pointerLeft = this.selectPointer.left;
        	var pointerTop = this.selectPointer.top;
        	var colorImageLeft = this.colorImage.left;
        	var colorImageTop = this.colorImage.top;

        	var adjustLeft = pointerLeft + this.fixSize;
        	var adjustTop  = pointerTop  + this.fixSize;

        	var x_point = adjustLeft - colorImageLeft;
        	var y_point  = adjustTop - colorImageTop;

        	var hue = sat = 0;

        	var hueRate = nexacro.round(239/221, 2); //색상배율. 1일때.
        	var satRate = nexacro.round(240/172, 2); //채도배율. 1일때

        	hue = nexacro.ceil(x_point * hueRate);
        	sat = nexacro.ceil(240 - y_point*satRate);

        	light = nexacro.toNumber(this.ed_v.value);

        	var rgb = Eco.Color.hslToRgb(hue,sat,light);

        	this.ed_h.set_value(hue);
        	this.ed_v.set_value(light);
        	this.ed_s.set_value(sat);
        	this.ed_r.set_value(rgb[0]);
        	this.ed_g.set_value(rgb[1]);
        	this.ed_b.set_value(rgb[2]);

        	this.setColor(rgb[0], rgb[1], rgb[2]);
        	this.setPreview();
        	this.setLightnessBar();
        }



        /**
         * selectPointer 이동.
         * left position은 색상(hue)과 연동.
         * top position은 채도(saturation)와 연동.
         */
        this.moveSelectPointer = function()
        {
        	//var left = top = 0;	// IE8 디버그 모드에서 비정상 작동
        	var left = 0,
        		top = 0;
        	var hue = this.colorValue.H;
        	var sat = this.colorValue.S;

        	hue = nexacro.round((hue/239)*221);
        	left = nexacro.toNumber(this.colorImage.left) + hue - this.fixSize;

        	sat = nexacro.round(172 - (sat/240)*172);
        	top = nexacro.toNumber(this.colorImage.top) + sat - this.fixSize;

        	this.selectPointer.move(left, top);
        }


        /**
         * slider 이동.
         * top position은 명도와 연동.
         */
        this.moveSlider = function()
        {
        	var left, top;
        	var lightness = this.colorValue.V;

        	left = nexacro.toNumber(this.slider.left);
        	var lightBar = this.lightnessBar;

        	lightness = nexacro.round(172 - (lightness/240)*172);
        	top = nexacro.toNumber(lightBar.top) + lightness - this.sliderCenter;


        	this.slider.move(left, top);
        }


        //기본색 클릭시 이벤트 처리
        this.basicColor_onclick = function(obj,  e)
        {
        	this.setSelectColorBorder(obj);

        	this.setColor(obj.style.background.color.toString());
        	this.setValue();
        	this.onChangeRGB();

        	this.setPreview();
        	this.setLightnessBar();
        }

        this.btnApply_onclick = function(obj,  e)
        {
        	var selcolor = this.previewColor.style.background.color.toString().substr(0,7);

        	this.opener["setCellColor"](selcolor);
        	this.close();
        }

        this.btnCancel_onclick = function(obj,  e)
        {
        	this.close();
        }


        //명도선택판 마우스클릭 이벤트
        this.lightnessBar_onlbuttondown = function(obj,  e)
        {
        	this.slider.move(nexacro.toNumber(this.slider.left)
        	                   , nexacro.toNumber(obj.top) + e.clientY - this.sliderCenter);

        	this.onChangeLightnessBar();
        }


        this.btnAddUserColor_onclick = function(obj,  e)
        {
        	var bg = this.previewColor.style.background;
        	bg = String(bg).toLowerCase();
        	bg = bg + " URL('image::editor/Editer_sta_clrBox.png')";

        	var currentUc = this.userColorComponent;
        	var componentName = currentUc.name;
        	currentUc.style.set_background(bg);

        	var id = parseInt(componentName.substr(1))+1;
        	id = (id%16);

        	Eco.LocalStorage.setItem(componentName, bg);

        	this.userColorComponent = this.components["u"+((parseInt(componentName.substr(1))+1)%16)];

        }

        //"사용자 지정 색" 클릭시 이벤트 처리
        this.userColor_onclick = function(obj,  e)
        {
        	this.userColorComponent = obj;

        	this.setSelectColorBorder(obj);

        	this.setColor(obj.currentstyle.background.color);

        	this.setValue();
         	this.setPreview();
         	this.setLightnessBar();

         	//selectPointer 이동
         	this.moveSelectPointer();
        }

        this.colorImage_ondrag = function(obj, e)
        {
        	return true;
        }

        this.colorImage_ondragenter = function(obj, e)
        {
        	if(e.sourceobject == obj){
        		this.selectPointer.set_visible(false);
        	}
        }

        this.checkArea = function(target, e){
        	var l, t, min_x, min_y, max_x, max_y, x, y, is_over = false;
        	l = nexacro.toNumber(target.left);
        	t = nexacro.toNumber(target.top);
        	min_x = l, min_y = t,
        	max_x = l + nexacro.toNumber(target.width);
        	max_y = t + nexacro.toNumber(target.height);
        	x = e.clientX;
        	y = e.clientY;

        	if(e.clientX < min_x){
        		x = min_x;
        		is_over = true;
        	}else if(e.clientX > max_x){
        		x = max_x;
        		is_over = true;
        	}else{
        	}

        	if(e.clientY < min_y){
        		y = min_y;
        		is_over = true;
        	}else if(e.clientY > max_y){
        		y = max_y;
        		is_over = true;
        	}else{
        	}

        	return {'x': x, 'y':y, 'isOver': is_over}
        };

        var selectFns = {
        	"colorSelect": function(obj, e){
        		var point_info = this.checkArea(this.colorImage, e);
        		this.selectPointer.move(point_info['x'] - this.fixSize
        									 , point_info['y'] - this.fixSize);
        		if(point_info.isOver){
        			this.selectPointer.set_visible(true);
        		}
        		this.onChangeHueSat();
        	},
        	"lightSelect": function(obj, e){
        		var point_info = this.checkArea(this.lightnessBar, e);
        		this.slider.move(nexacro.toNumber(this.slider.left)
        									 , point_info['y'] - this.sliderCenter);

        		this.onChangeLightnessBar();
        	}
        }

        var selectTarget = {
        	"selectPointer": selectFns.colorSelect,
        	"colorImage" : selectFns.colorSelect,
        	"lightnessBar" : selectFns.lightSelect,
        	"slider": selectFns.lightSelect
        }

        this.ColorPickerPopup_ondragleave = function(obj, e)
        {
        	var k_target = e.fromobject;
        	var k_source = e.sourceobject.id;
        	if(selectTarget[k_source]){
        		selectTarget[k_source].call(this, obj, e);
        	}
        }

        this.ColorPickerPopup_ondragmove = function(obj, e)
        {
        	var k_target = e.fromobject;
        	var k_source = e.sourceobject.id;
        	if(selectTarget[k_source]){
        		selectTarget[k_source].call(this, obj, e);
        	}
        }

        this.ColorPickerPopup_onlbuttondown = function(obj, e)
        {
        	var point_info = this.checkArea(this.colorImage, e);
        	if(!point_info.isOver){
        		this.selectPointer.set_visible(false);
        	}
        }

        this.ColorPickerPopup_onlbuttonup = function(obj, e)
        {
        	var point_info = this.checkArea(this.colorImage, e);
        	if(!point_info.isOver){
        		this.selectPointer.move(point_info['x'] - this.fixSize
        									 , point_info['y'] - this.fixSize);
        		this.selectPointer.set_visible(true);
        		this.onChangeHueSat();
        	}
        }

        this.slider_ondrag = function(obj, e)
        {
        	return true;
        }
        this.lightnessBar_ondrag = function(obj, e)
        {
        	return true;
        }


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ColorPickerPopup_onload,this);
            this.addEventHandler("ondragleave",this.ColorPickerPopup_ondragleave,this);
            this.addEventHandler("ondragmove",this.ColorPickerPopup_ondragmove,this);
            this.addEventHandler("onlbuttondown",this.ColorPickerPopup_onlbuttondown,this);
            this.addEventHandler("onlbuttonup",this.ColorPickerPopup_onlbuttonup,this);
            this.b11.addEventHandler("onclick",this.basicColor_onclick,this);
            this.b21.addEventHandler("onclick",this.basicColor_onclick,this);
            this.b31.addEventHandler("onclick",this.basicColor_onclick,this);
            this.b41.addEventHandler("onclick",this.basicColor_onclick,this);
            this.b51.addEventHandler("onclick",this.basicColor_onclick,this);
            this.b61.addEventHandler("onclick",this.basicColor_onclick,this);
            this.b12.addEventHandler("onclick",this.basicColor_onclick,this);
            this.b13.addEventHandler("onclick",this.basicColor_onclick,this);
            this.b14.addEventHandler("onclick",this.basicColor_onclick,this);
            this.b15.addEventHandler("onclick",this.basicColor_onclick,this);
            this.b16.addEventHandler("onclick",this.basicColor_onclick,this);
            this.b17.addEventHandler("onclick",this.basicColor_onclick,this);
            this.b18.addEventHandler("onclick",this.basicColor_onclick,this);
            this.btnCancel.addEventHandler("onclick",this.btnCancel_onclick,this);
            this.btnApply.addEventHandler("onclick",this.btnApply_onclick,this);
            this.b22.addEventHandler("onclick",this.basicColor_onclick,this);
            this.b32.addEventHandler("onclick",this.basicColor_onclick,this);
            this.b42.addEventHandler("onclick",this.basicColor_onclick,this);
            this.b52.addEventHandler("onclick",this.basicColor_onclick,this);
            this.b62.addEventHandler("onclick",this.basicColor_onclick,this);
            this.b23.addEventHandler("onclick",this.basicColor_onclick,this);
            this.b33.addEventHandler("onclick",this.basicColor_onclick,this);
            this.b43.addEventHandler("onclick",this.basicColor_onclick,this);
            this.b53.addEventHandler("onclick",this.basicColor_onclick,this);
            this.b63.addEventHandler("onclick",this.basicColor_onclick,this);
            this.b24.addEventHandler("onclick",this.basicColor_onclick,this);
            this.b34.addEventHandler("onclick",this.basicColor_onclick,this);
            this.b44.addEventHandler("onclick",this.basicColor_onclick,this);
            this.b54.addEventHandler("onclick",this.basicColor_onclick,this);
            this.b64.addEventHandler("onclick",this.basicColor_onclick,this);
            this.b25.addEventHandler("onclick",this.basicColor_onclick,this);
            this.b35.addEventHandler("onclick",this.basicColor_onclick,this);
            this.b45.addEventHandler("onclick",this.basicColor_onclick,this);
            this.b55.addEventHandler("onclick",this.basicColor_onclick,this);
            this.b65.addEventHandler("onclick",this.basicColor_onclick,this);
            this.b26.addEventHandler("onclick",this.basicColor_onclick,this);
            this.b36.addEventHandler("onclick",this.basicColor_onclick,this);
            this.b46.addEventHandler("onclick",this.basicColor_onclick,this);
            this.b56.addEventHandler("onclick",this.basicColor_onclick,this);
            this.b66.addEventHandler("onclick",this.basicColor_onclick,this);
            this.b27.addEventHandler("onclick",this.basicColor_onclick,this);
            this.b37.addEventHandler("onclick",this.basicColor_onclick,this);
            this.b47.addEventHandler("onclick",this.basicColor_onclick,this);
            this.b57.addEventHandler("onclick",this.basicColor_onclick,this);
            this.b67.addEventHandler("onclick",this.basicColor_onclick,this);
            this.b28.addEventHandler("onclick",this.basicColor_onclick,this);
            this.b38.addEventHandler("onclick",this.basicColor_onclick,this);
            this.b48.addEventHandler("onclick",this.basicColor_onclick,this);
            this.b58.addEventHandler("onclick",this.basicColor_onclick,this);
            this.b68.addEventHandler("onclick",this.basicColor_onclick,this);
            this.colorImage.addEventHandler("ondrag",this.colorImage_ondrag,this);
            this.colorImage.addEventHandler("ondragenter",this.colorImage_ondragenter,this);
            this.u0.addEventHandler("onclick",this.userColor_onclick,this);
            this.u2.addEventHandler("onclick",this.userColor_onclick,this);
            this.u4.addEventHandler("onclick",this.userColor_onclick,this);
            this.u6.addEventHandler("onclick",this.userColor_onclick,this);
            this.u8.addEventHandler("onclick",this.userColor_onclick,this);
            this.u10.addEventHandler("onclick",this.userColor_onclick,this);
            this.u12.addEventHandler("onclick",this.userColor_onclick,this);
            this.u14.addEventHandler("onclick",this.userColor_onclick,this);
            this.u1.addEventHandler("onclick",this.userColor_onclick,this);
            this.u3.addEventHandler("onclick",this.userColor_onclick,this);
            this.u5.addEventHandler("onclick",this.userColor_onclick,this);
            this.u7.addEventHandler("onclick",this.userColor_onclick,this);
            this.u9.addEventHandler("onclick",this.userColor_onclick,this);
            this.u11.addEventHandler("onclick",this.userColor_onclick,this);
            this.u13.addEventHandler("onclick",this.userColor_onclick,this);
            this.u15.addEventHandler("onclick",this.userColor_onclick,this);
            this.btnAddUserColor.addEventHandler("onclick",this.btnAddUserColor_onclick,this);
            this.selectPointer.addEventHandler("ondrag",this.colorImage_ondrag,this);
            this.slider.addEventHandler("ondrag",this.slider_ondrag,this);
            this.lightnessBar.addEventHandler("ondrag",this.lightnessBar_ondrag,this);
            this.lightnessBar.addEventHandler("onlbuttondown",this.lightnessBar_onlbuttondown,this);
        };
        this.loadIncludeScript("ColorPickerPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
