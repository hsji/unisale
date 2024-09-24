(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleWebView");
            this.set_titletext("웹뷰 샘플");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds00", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">메뉴1</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">메뉴2</Col></Row><Row><Col id=\"Column0\">3</Col><Col id=\"Column1\">메뉴3</Col></Row><Row><Col id=\"Column0\">4</Col><Col id=\"Column1\">메뉴4</Col></Row><Row><Col id=\"Column0\">5</Col><Col id=\"Column1\">메뉴5</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new WebView("wbvSample","0","38","62.48%",null,null,"0",null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","wbvSample:20","0",null,"43","160",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("html에서 넘겨받은 내용");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new TextArea("txaRtn","wbvSample:20","staTitle:0",null,null,"20","0",null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btnCallHtml",null,null,"148","28","20","txaRtn:5",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("HTML로 데이터셋 전송");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","0",null,"43","826",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("웹뷰");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1050,736,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleWebView.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	sampleWebView.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/04/07
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/04/07			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        //https://developer.microsoft.com/ko-kr/microsoft-edge/webview2/
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수


        	var sUrl = nexacro.getEnvironment().services['svcUrl'].url + "sampleHtml/webBrowserSample.html";
        	this.wbvSample.set_url(sUrl);
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
        this.wbvSample_onloadcompleted = function(obj,e)
        {
        	trace("wbvSample_onloadcompleted");
        };

        this.wbvSample_onusernotify = function(obj,e)
        {
        	trace("wbvSample_onusernotify" + e.userdata);
        	if(e.userdata.indexOf("toValue:")>-1){
        		var sValue = this.txaRtn.value;
        		if(this.gfnIsNull(sValue)) sValue = "";

        		var sRtnValue = e.userdata.replace("toValue:","");
        		if(this.gfnIsNull(sRtnValue)) return;

        		this.txaRtn.set_value(sValue + e.userdata.replace("toValue:","")+"\n");
        	}
        };

        this.btnCallHtml_onclick = function(obj,e)
        {
        	// XML 형태는 안넘어감 ? 버그인가 2021.04.07
        	var sData = this.ds00.saveSSV();
        	//sample.fromNexacro.value = nStr
        	var rtn = this.wbvSample.callScript("fnFromNexacro('"+sData.toString()+"')");
        	trace("btnCallHtml_onclick" + rtn);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.wbvSample.addEventHandler("onloadcompleted",this.wbvSample_onloadcompleted,this);
            this.wbvSample.addEventHandler("onusernotify",this.wbvSample_onusernotify,this);
            this.btnCallHtml.addEventHandler("onclick",this.btnCallHtml_onclick,this);
        };
        this.loadIncludeScript("sampleWebView.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
