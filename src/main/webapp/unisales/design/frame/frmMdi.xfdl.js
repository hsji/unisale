(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmMdi");
            this.set_titletext("MdiFrame");
            this.set_cssclass("frm_MDI_Bg");
            if (Form == this.constructor)
            {
                this._setFormPosition(1070,42);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTab", this);
            obj._setContents("<ColumnInfo><Column id=\"tabId\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"winId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsContextMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"name\">Close All But This</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"name\">Close Tabs to the Right</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTabTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"tabId\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"winId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGdsOpenMenuTemp", this);
            obj._setContents("<ColumnInfo><Column id=\"WIN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0",null,null,"1","0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_MDI_Line");
            this.addChild(obj.name, obj);

            obj = new Button("btnLeftMenuShowHide","0","0","20","42",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_MDI_Open");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnHome","btnLeftMenuShowHide:0","0","42","42",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_MDI_Home");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnVoc",null,"6","23","31","10",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_tooltiptext("VOC등록");
            obj.set_cssclass("btn_MDI_Voc");
            this.addChild(obj.name, obj);

            obj = new Button("btnCloseAll",null,"6","23","31","btnVoc:0",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_tooltiptext("전체닫기");
            obj.set_cssclass("btn_MDI_CloseAll");
            this.addChild(obj.name, obj);

            obj = new Static("sta00",null,"15","1","14","btnCloseAll:5",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_MDI_Line");
            this.addChild(obj.name, obj);

            obj = new Button("btn04",null,"6","23","31","sta00:5",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_MDI_Horizontal");
            this.addChild(obj.name, obj);

            obj = new Button("btn03",null,"6","23","31","btn04:0",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_MDI_Vertical");
            this.addChild(obj.name, obj);

            obj = new Button("btn02",null,"6","23","29","btn03:0",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_MDI_Restore");
            this.addChild(obj.name, obj);

            obj = new Button("btn01",null,"6","23","31","btn02:0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_MDI_Max");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00",null,"15","1","14","btn01:5",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("sta_MDI_Line");
            this.addChild(obj.name, obj);

            obj = new Button("btnList",null,"6","23","31","sta00_00:5",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_tooltiptext("열린메뉴");
            obj.set_cssclass("btn_MDI_List");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnNexMdi",null,"6","18","31","btnList:0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_tooltiptext("다음 화면목록으로");
            obj.set_cssclass("btn_MDI_Right");
            this.addChild(obj.name, obj);

            obj = new Button("btnPreMdi",null,"6","18","31","btnNexMdi:0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_tooltiptext("이전 화면목록으로");
            obj.set_cssclass("btn_MDI_Left");
            this.addChild(obj.name, obj);

            obj = new Div("divTab","btnHome:0","0",null,"42","btnPreMdi:5",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdvOpenMenu","790","42","245","200",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("pdiv_MDI_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("grdOpenMenu","0","0",null,null,"0","0",null,null,null,null,this.pdvOpenMenu.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("gdsOpenMenu");
            obj.set_cssclass("grd_MDI_List");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"28\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NM\" tooltiptext=\"bind:MENU_NM\"/></Band></Format></Formats>");
            this.pdvOpenMenu.addChild(obj.name, obj);

            obj = new PopupDiv("pdvContextMenu","140","42","180","48",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("grd_MDI_List");
            this.addChild(obj.name, obj);

            obj = new Grid("grdContextMenu","0","0",null,null,"0","0",null,null,null,null,this.pdvContextMenu.form);
            obj.set_taborder("0");
            obj.set_cssclass("grd_MDI_List");
            obj.set_binddataset("dsContextMenu");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:name\"/></Band></Format></Formats>");
            this.pdvContextMenu.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTab.form
            obj = new Layout("default","",0,0,this.divTab.form,function(p){});
            this.divTab.form.addLayout(obj.name, obj);

            //-- Default Layout : this.pdvOpenMenu.form
            obj = new Layout("default","",0,0,this.pdvOpenMenu.form,function(p){});
            this.pdvOpenMenu.form.addLayout(obj.name, obj);

            //-- Default Layout : this.pdvContextMenu.form
            obj = new Layout("default","",0,0,this.pdvContextMenu.form,function(p){});
            this.pdvContextMenu.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1070,42,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.form_onsize,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclick",this.frmMdi_onclick,this);
            this.btnLeftMenuShowHide.addEventHandler("onclick",this.btnLeftMenuShowHide_onclick,this);
            this.btnHome.addEventHandler("onclick",this.btnHome_onclick,this);
            this.btnVoc.addEventHandler("onclick",this.btnVoc_onclick,this);
            this.btnCloseAll.addEventHandler("onclick",this.btnCloseAll_onclick,this);
            this.btnList.addEventHandler("onclick",this.btnList_onclick,this);
            this.btnNexMdi.addEventHandler("onclick",this.btnNexMdi_onclick,this);
            this.btnPreMdi.addEventHandler("onclick",this.btnPreMdi_onclick,this);
            this.divTab.addEventHandler("onlbuttonup",this.divTab_onlbuttonup,this);
            this.divTab.addEventHandler("ondragmove",this.divTab_ondragmove,this);
            this.pdvOpenMenu.form.grdOpenMenu.addEventHandler("oncellclick",this.pdvOpenMenu_grdOpenMenu_oncellclick,this);
            this.pdvContextMenu.addEventHandler("onpopup",this.pdvContextMenu_onpopup,this);
            this.pdvContextMenu.form.grdContextMenu.addEventHandler("oncellclick",this.pdvContextMenu_grdContextMenu_oncellclick,this);
            this.pdvContextMenu.form.grdContextMenu.addEventHandler("onsetfocus",this.pdvContextMenu_grdContextMenu_onsetfocus,this);
        };
        this.loadIncludeScript("frmMdi.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
