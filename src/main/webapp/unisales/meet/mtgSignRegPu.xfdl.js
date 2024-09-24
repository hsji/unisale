(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ubiSignRegPu");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(366,370);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_SIGN\" type=\"string\" size=\"32\"/><Column id=\"USER_ID\" type=\"string\" size=\"32\"/><Column id=\"USER_SIGNIMAGE\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btnConfirm",null,null,"50","28","63","9",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"50","28","10","9",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Tab("Tab00","10","10",null,"313","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage1",this.Tab00);
            obj.set_text("서명등록");
            this.Tab00.addChild(obj.name, obj);

            obj = new Div("DivSign","10","10",null,null,"10","35",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("0");
            obj.set_border("1px solid #dddddd");
            obj.set_borderRadius("5px");
            obj.set_background("#ffffff");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            this.Tab00.Tabpage1.addChild(obj.name, obj);

            obj = new Button("btnClear",null,null,"57","25","11","5",null,null,null,null,this.Tab00.Tabpage1.form);
            obj.set_taborder("1");
            obj.set_text("지우기");
            obj.set_fittocontents("width");
            this.Tab00.Tabpage1.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.Tab00.Tabpage1.form.DivSign
            obj = new Layout("default","",0,0,this.Tab00.Tabpage1.form.DivSign.form,function(p){});
            this.Tab00.Tabpage1.form.DivSign.form.addLayout(obj.name, obj);

            //-- Default Layout : this.Tab00.Tabpage1.form
            obj = new Layout("default","",0,0,this.Tab00.Tabpage1.form,function(p){});
            this.Tab00.Tabpage1.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",366,370,this,function(p){});
            obj.set_horizontalgap("0");
            obj.set_mobileorientation("landscape");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Tab00.Tabpage2.form.img00","image","dsList","USER_SIGNIMAGE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("mtgSignRegPu.xfdl", function() {
        this.fvIsExist = true;
        this.fvIsDrawingFlag = false;
        this.fvIsDrawing = false;
        this.fvX = 0;
        this.fvY = 0;

        this.ubiSignRegPu_onload = function(obj,e)
        {
        	this.dsCond.setColumn(0, "USER_ID", this.gfnGetUserInfo("USER_ID"));

        	this.fnMakeCanvas();
        	this.fnSignSearch();
        };


        /**
        * @function fnSignSearch  <br>
        * description 서명정보 조회
        */
        this.fnSignSearch = function ()
        {
        	this.gfnSetMap("meet", "UserSign");

        	var strSvcId    = "searchUserSign";
        	var strSvcUrl   = "searchCommonBaseService.do";
        	var inData      = "dsCond=dsCond dsMap=dsMap";
        	var outData     = "dsList=dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        /**
        * @function fnSignSave  <br>
        * description 서명저장
        */
        this.fnSignSave = function ()
        {
        	this.gfnSetMap("meet", "UserSign");

        	var strSvcId    = "saveUserSign";
        	var strSvcUrl   = "insertContentsService.do";
        	var inData      = "dsList=dsList:U  dsMap=dsMap";
        	var outData     = "dsList=dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        this.fnMakeCanvas = function ()
        {
        	var mainDiv = this.Tab00.Tabpage1.form.DivSign.form;
        	var x = this.Tab00.Tabpage1.form.DivSign.form.getOffsetWidth();
        	var y = this.Tab00.Tabpage1.form.DivSign.form.getOffsetHeight();

        	var control_elem = mainDiv.getElement();
        	var	sid = "canvas00";
        	var canvas;
        	canvas = new nexacro.CanvasComponent(sid, 0, 0, x-10, y-10);
        	canvas.set_name(sid);
        	canvas.set_id(sid);
        	mainDiv.addChild(sid, canvas);
        	canvas.show();
        	canvas.addEventHandler("onmousemove", this.fnCanvasMouseMove, this);
        	canvas.addEventHandler("onlbuttondown", this.fnCanvasMouseDown, this);
        	canvas.addEventHandler("onlbuttonup", this.fnCanvasMouseUp, this);
        	canvas.bringToFront();
        	canvas.set_enableevent(true);

        	var context = canvas._canvas;
        	context.clearRect(0, 0, x, y);
        	context.setElementStrokeStyle("#000000");
        	context.setElementLineWidth(7);
        };

        this.Tab00_Tabpage1_btnClear_onclick = function(obj,e)
        {
        	var x = this.Tab00.Tabpage1.form.DivSign.form.getOffsetWidth();
        	var y = this.Tab00.Tabpage1.form.DivSign.form.getOffsetHeight();
        	var ctx = this.Tab00.Tabpage1.form.DivSign.form.canvas00._canvas;
        	ctx.clearRect(0, 0, x, y);
        	this.fvIsExist = false;
        };


        // canvas
        this.fnCanvasMouseMove = function(obj, e) {
        	if(this.fvIsExist) return;

            if (this.fvIsDrawing) {
                this.drawSign(this.fvX, this.fvY, e.clientx, e.clienty);
                this.fvX = e.clientx;
                this.fvY = e.clienty;
            }
        };
        this.fnCanvasMouseDown = function(obj, e) {
        	if(this.fvIsExist) return;

            this.fvX = e.clientx;
            this.fvY = e.clienty;
            this.fvIsDrawing = true;
        };
        this.fnCanvasMouseUp = function(obj, e) {
        	if(this.fvIsExist) return;
            if (this.fvIsDrawing) {
                this.drawSign(this.fvX, this.fvY, e.clientx, e.clienty);
                this.fvX = 0;
                this.fvY = 0;
                this.fvIsDrawing = false;
            }
        };

        this.drawSign = function(x1, y1, x2, y2) {
        	var ctx = this.Tab00.Tabpage1.form.DivSign.form.canvas00._canvas;
            if (ctx != null) {
                ctx.save();
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();
                ctx.closePath();
                ctx.restore();
        		this.fvIsDrawingFlag = true;
            }
        }

        /**
        * @function fnCallback  <br>
        * description 서비스콜백
        */
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "searchUserSign":
        			if(this.dsList.rowcount == 0) {
        				this.dsList.addRow();
        				this.dsList.setColumn(0, "USER_ID", this.gfnGetUserInfo("USER_ID"));
        				this.fvIsExist = false;
        			} else {
        				if(this.gfnIsNull(this.dsList.getColumn(0, "USER_SIGN"))) {
        					this.fvIsExist = false;
        				} else {
        					this.fvIsExist = true;
        					var canvas = this.Tab00.Tabpage1.form.DivSign.form.canvas00;
        					var ctx = canvas._canvas;
        					var cx = parseInt(this.Tab00.Tabpage1.form.DivSign.form.getOffsetWidth()/2);
        					var cy = parseInt(this.Tab00.Tabpage1.form.DivSign.form.getOffsetHeight()/2);

        					// HTML ONLY
        					var img = new Image();
        					img.src = this.dsList.getColumn(0, "USER_SIGN");
        					var webContext = ctx.handle._draw_ctx;
        					img.onload = function(e)
        					{
        						webContext.drawImage(img, 0,0,img.width,img.height);	//cx - (img.width / 2), cy - obj.radius + 35);
        					}
        				}
        			}
        			break;
        		case "saveUserSign":
        			this.opener.dsMySign.copyData(this.dsList);
        			this.close();
        			break;
        		default :
        	}
        };

        // 저장
        this.btnConfirm_onclick = function(obj,e)
        {
        	if(this.fvIsDrawingFlag) {
        		var canvas = this.Tab00.Tabpage1.form.DivSign.form.canvas00;
        		var context = canvas._canvas;
        		var img = context.toDataURL("image/png");
        		if(img.src) {
        			this.dsList.setColumn(0, "USER_SIGN", img.src);
        			this.fnSignSave();
        		}
        	}
        };


        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.ubiSignRegPu_onload,this);
            this.btnConfirm.addEventHandler("onclick",this.btnConfirm_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.Tab00.Tabpage1.form.btnClear.addEventHandler("onclick",this.Tab00_Tabpage1_btnClear_onclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
        };
        this.loadIncludeScript("mtgSignRegPu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
