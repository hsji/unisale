(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("docViewPu");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1000,800);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDocInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"BIZ_CODE\" type=\"string\" size=\"32\"/><Column id=\"DOC_TITLE\" type=\"string\" size=\"32\"/><Column id=\"DOC_ID\" type=\"string\" size=\"32\"/><Column id=\"SYS_CODE\" type=\"string\" size=\"32\"/><Column id=\"USER_ID\" type=\"string\" size=\"32\"/><Column id=\"SEND_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"FILE_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"FILE_ID\"/></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"RPT_MONTH\" type=\"string\" size=\"32\"/><Column id=\"KORN_NM\" type=\"string\" size=\"32\"/><Column id=\"FILE_CNT\" type=\"bigdecimal\" size=\"8\"/><Column id=\"RPT_NO\" type=\"int\" size=\"4\"/><Column id=\"RPT_YEAR\" type=\"string\" size=\"32\"/><Column id=\"REG_DATE\" type=\"undefined\" size=\"0\"/><Column id=\"TITLE\" type=\"string\" size=\"32\"/><Column id=\"FILE_ID\" type=\"undefined\" size=\"0\"/><Column id=\"INPT_DTTM\" type=\"undefined\" size=\"0\"/><Column id=\"DEPT_CD\" type=\"string\" size=\"32\"/><Column id=\"RPT_CNT\" type=\"INT\" size=\"0\"/><Column id=\"CNTN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new WebBrowser("web00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1000,800,this,function(p){});
            obj.set_horizontalgap("0");
            obj.set_mobileorientation("landscape");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("weekReportViewPu.xfdl", function() {
        /**
        * @function docViewPu_onload  <br>
        * description 문서보기
        */
        this.docViewPu_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	this.dsCond.setColumn(0, "FILE_ID", this.getOwnerFrame().pvFileId);
        	this.fnSearch();
        };

        this.fnSearch = function ()
        {
        	this.gfnSetMap("board", "WeekReportFileOne");

        	var strSvcId    = "selectWeekReport";
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


        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "selectWeekReport" :
        			if(this.dsList.rowcount > 0) {
        				var fileName = this.dsList.getColumn(0, "SAVE_FILE_NM");
        				var path = "?filename=" + fileName;
        				var objEnv	 = nexacro.getEnvironment();
        				var objSrv   = objEnv.services["svcUrl"];
        				this.web00.set_url(objSrv.url + "weekReportPDFView.do" + path);
        			}
        			break;
        		default:break;
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.docViewPu_onload,this);
        };
        this.loadIncludeScript("weekReportViewPu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
