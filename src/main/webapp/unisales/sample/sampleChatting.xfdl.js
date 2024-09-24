(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("test");
            this.set_titletext("채팅 샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(1147,579);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsStatic", this);
            obj._setContents("<ColumnInfo><Column id=\"compId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divChat","344","38","339","492",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtSend","694","38","206","140",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btnSend","909","42","85","131",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("보내기");
            this.addChild(obj.name, obj);

            obj = new TextArea("txtReceive","35","37","206","140",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Button("btnReceive","250","41","85","131",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("받기");
            this.addChild(obj.name, obj);

            obj = new Grid("grd00","35","218","286","313",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsStatic");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"258\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"compId\"/></Band><Band id=\"body\"><Cell text=\"bind:compId\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("divChat00","694","218","306","312",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Static("sta00",null,"5","120","36","0",null,null,null,null,null,this.divChat00.form);
            obj.set_taborder("0");
            obj.set_text("우리나라는\r\n날씨가 너무 더워요~");
            obj.set_background("antiquewhite");
            obj.set_fittocontents("both");
            this.divChat00.addChild(obj.name, obj);

            obj = new Static("sta00_00","0","sta00:10","150","36",null,null,null,null,null,null,this.divChat00.form);
            obj.set_taborder("1");
            obj.set_text("그렇죠~\r\n더운데 몸 관리 잘 하세요");
            obj.set_background("azure");
            obj.set_fittocontents("both");
            this.divChat00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divChat.form
            obj = new Layout("default","",0,0,this.divChat.form,function(p){});
            this.divChat.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divChat00.form
            obj = new Layout("default","",0,0,this.divChat00.form,function(p){});
            this.divChat00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1147,579,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleChatting.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	sampleChatting.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/08/04
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/08/04			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvNCnt = 0;	// Statice count

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {

        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /**
         * @description 채팅 Static 생성
         */
        this.fnCreate = function(sGubun, sText)
        {
        	var sColor = "";
        	var nLeft  = null;
        	var nRight  = null;
        	if (sGubun == "send") {
        		sColor = "antiquewhite";
        		nLeft  = null;
        		nRight = 3;
        	}
        	else {
        		sColor = "azure";
        		nLeft  = 3;
        		nRight = null;
        	}

        	var nCnt = this.dsStatic.rowcount;
        	var nTop = 10;
        	if (nCnt > 0) {
        		nTop  = this.dsStatic.getColumn(nCnt-1, "compId")+":10";
        	}

        	// count 증가
        	this.fvNCnt = this.fvNCnt + 1;

        	// 동적생성
        	var objStatic = new Static();
        	var sStaName = "sta_" + this.fvNCnt;
        	       // init(strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
        		   // init( "Button00", "Button22:10", 300, null, null, "Button33:10", "20%", 300, 500, 200, 500 );
        	objStatic.init(sStaName, nLeft, nTop, 10, 10, nRight);
        	this.divChat.addChild(sStaName, objStatic);
        	objStatic.set_text(sText);
        	objStatic.set_background(sColor);
        	objStatic.set_fittocontents("both");
        	objStatic.show();
        	trace("추가한 objStatic : " + sStaName + " / nTop : " + nTop);

        	// 화면 갱신
        	this.divChat.form.resetScroll();

        	// scroll 맨 밑으로 내리기
        	this.divChat.form.scrollBy(0, objStatic.getOffsetHeight()+10);

        	// Dataset에 정보 추가
        	var nAddRow = this.dsStatic.addRow();
        	this.dsStatic.setColumn(nAddRow, "compId", sStaName);
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.btnSend_onclick = function(obj,e)
        {
        	this.fnCreate("send", this.txtSend.value);
        	this.txtSend.set_value("");
        };

        this.btnReceive_onclick = function(obj,e)
        {
        	this.fnCreate("receive", this.txtReceive.value);
        	this.txtReceive.set_value("");
        };

        this.txtSend_onkeyup = function(obj,e)
        {
        	//trace("e.ctrlkey : " + e.ctrlkey + " / e.altkey : " + e.altkey + " / e.keycode : " + e.keycode);
        	if (e.ctrlkey == true && e.keycode == 13) {
        		this.fnCreate("send", this.txtSend.value);
        		this.txtSend.set_value("");
        	}
        };

        this.txtReceive_onkeyup = function(obj,e)
        {
        	if (e.ctrlkey == true && e.keycode == 13) {
        		this.fnCreate("receive", this.txtReceive.value);
        		this.txtReceive.set_value("");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.txtSend.addEventHandler("onkeyup",this.txtSend_onkeyup,this);
            this.btnSend.addEventHandler("onclick",this.btnSend_onclick,this);
            this.txtReceive.addEventHandler("onkeyup",this.txtReceive_onkeyup,this);
            this.btnReceive.addEventHandler("onclick",this.btnReceive_onclick,this);
        };
        this.loadIncludeScript("sampleChatting.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
