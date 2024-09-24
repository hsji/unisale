(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CO_MeetingParticipant");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(313,488);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("stc_GbDetailInfoText","-910",null,"928","15",null,"57",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("상세정보");
            obj.set_cssclass("sta_POP_GroupTit");
            this.addChild(obj.name, obj);

            obj = new Static("stc_GbDetailInfo","0","1",null,"31","1",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_GroupBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_GbDetailInfoText00","11","9","112","15",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("주최자");
            obj.set_cssclass("sta_POP_GroupTit");
            this.addChild(obj.name, obj);

            obj = new Static("stc_GbDetailInfo00","0","71",null,"31","1",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_POP_GroupBg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_GbDetailInfoText01","11","80","112","15",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("참석자");
            obj.set_cssclass("sta_POP_GroupTit");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_host","0","32",null,null,"1","stc_GbDetailInfo00:0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_autofittype("col");
            obj.set_binddataset("ds_cc");
            obj.set_autosizingtype("none");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"36\"/></Rows><Band id=\"body\"><Cell text=\"bind:EMP_NM\"/><Cell col=\"1\" text=\"bind:DEPT_NM\"/><Cell col=\"2\" text=\"bind:CAPTION\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_guest","0","stc_GbDetailInfo00:0",null,"386","1",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_bcc");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:EMP_NM\"/><Cell col=\"1\" text=\"bind:DEPT_NM\"/><Cell col=\"2\" text=\"bind:CAPTION\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",313,488,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("CO_MeetingParticipant.xfdl", function() {
        /************************************************************************************************
         * 01. 업무구분	: 공통 - 공통
         * 02. 화면명		: 조직도 - 회의참석자 (CO_MeetingParticipant)
         * 03. 화면설명	: 조직도(Organization)화면에서 div_list 에 연결되는 화면 -  회의 참석자 선택
         * 04. 작성일		: 2021.11.11
         * 05. 작성자		: 박종언
         * 06. 수정이력	:
         ***********************************************************************************************
         *     수정일          이  름    사유
         ***********************************************************************************************
         *
        ************************************************************************************************/

        /************************************************************************************************
         * FORM 영역
        ************************************************************************************************/
        this.CO_MeetingParticipant_onload = function(obj, e)
        {
        	this.gfnCompInit(obj); //헤더클릭 이벤트 없을 시 사용
        }

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.grd_oncelldblclick = function(obj, e)
        {
        	var objDs = this.lookup(obj.binddataset);

        	objDs.deleteRow(e.row);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("CO_MeetingParticipant.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
