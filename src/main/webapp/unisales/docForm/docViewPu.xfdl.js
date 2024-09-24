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
            
            // UI Components Initialize
            obj = new UbiDocuMaker("UbiDocuMaker00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_viewerFileName("docuViewerOnly.html");
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
        this.registerScript("docViewPu.xfdl", function() {
        /**
        * @function docViewPu_onload  <br>
        * description 문서보기
        */
        this.docViewPu_onload = function(obj,e)
        {

        	this.dsDocInfo.setColumn(0, "DOC_ID", this.getOwnerFrame().pvUUID);
        	this.dsDocInfo.setColumn(0, "SYS_CODE", this.getOwnerFrame().pvSysCode);
        	this.dsDocInfo.setColumn(0, "BIZ_CODE", this.getOwnerFrame().pvBizCode);
        	this.dsDocInfo.setColumn(0, "DOC_TITLE", this.getOwnerFrame().pvTitle);
        	this.dsDocInfo.setColumn(0, "INPT_ID", this.getOwnerFrame().pvUserId);
        	this.dsDocInfo.setColumn(0, "SEND_SEQ", this.getOwnerFrame().pvSeq);

        	this.UbiDocuMaker00.set_bizFormUrl("ubiComm::ubiCmmComm.xfdl");
        	this.UbiDocuMaker00.set_viewType("dmview");
        	this.UbiDocuMaker00.set_editorPath("svcUrl::dxtobe/ubidocumaker");	// test
        	this.UbiDocuMaker00.setDebugMode(true);

        	var rtn = this.UbiDocuMaker00.setDocInfo(this.dsDocInfo, 0);
        	if(rtn == false) return;
        	this.UbiDocuMaker00.loadEditor();
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.docViewPu_onload,this);
        };
        this.loadIncludeScript("docViewPu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
