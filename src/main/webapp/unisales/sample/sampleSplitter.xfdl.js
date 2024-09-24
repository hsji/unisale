(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleSplitter");
            this.set_titletext("Splitter");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grid", this);
            obj._setContents("<ColumnInfo><Column id=\"chk\" type=\"STRING\" size=\"256\"/><Column id=\"No\" type=\"STRING\" size=\"256\"/><Column id=\"Edi\" type=\"STRING\" size=\"256\"/><Column id=\"Essential\" type=\"STRING\" size=\"256\"/><Column id=\"Num\" type=\"STRING\" size=\"256\"/><Column id=\"Expand\" type=\"STRING\" size=\"256\"/><Column id=\"Cmb\" type=\"STRING\" size=\"256\"/><Column id=\"Cal\" type=\"STRING\" size=\"256\"/><Column id=\"CenterAlign\" type=\"STRING\" size=\"256\"/><Column id=\"Btn\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"No\">01</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">02</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">03</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">04</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">05</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">06</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">07</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">08</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">09</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">10</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">11</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">12</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">13</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">14</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row><Row><Col id=\"No\">15</Col><Col id=\"Edi\">가나다라마바</Col><Col id=\"Essential\">투비</Col><Col id=\"Num\">1000000</Col><Col id=\"Expand\">가나다라</Col><Col id=\"Cmb\">콤보</Col><Col id=\"Cal\">20200202</Col><Col id=\"CenterAlign\">투비소프트</Col><Col id=\"Btn\">버튼</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new TextArea("txaGuide","0","0",null,"190","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_value("-Splitter 사용 방법\n\n1. Splitter 컴포넌트 추가\n2. type 속성 확인(vertical, horizontal)\n3. form onload 이벤트에서 Splitter 초기화\n  - Splittter.addItem() 메소드로 item 적용\n  - Splittter.addSplitter() 메소드로 최대, 최소 position 기준 컴포넌트 세팅\t\n4. 추가된 Splitter 컴포넌트를 마우스 드래그 시 item 적용한 컴포넌트 사이즈 조절 가능\t");
            this.addChild(obj.name, obj);

            obj = new Div("divBottomLimit","866",null,"163","20",null,"0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("div00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("sta04_00_00",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W20");
            this.addChild(obj.name, obj);

            obj = new Splitter("SplitterV","0","199",null,"10","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_type("vertical");
            obj.set_cssclass("spt_WF_V");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Div("divIntegrated","2","226",null,null,"20","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("div03");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grdSubList","-2","38","497",null,null,"0",null,null,null,null,this.divIntegrated.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_grid");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"48\"/><Column size=\"160\"/><Column size=\"60\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"에디트\"/><Cell col=\"3\" text=\"필수\" cssclass=\"essential\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:No\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:Edi\" displaytype=\"editcontrol\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:Essential\" displaytype=\"text\"/></Band></Format></Formats>");
            this.divIntegrated.addChild(obj.name, obj);

            obj = new Grid("grdDetailList","538","38",null,null,"0","0",null,null,null,null,this.divIntegrated.form);
            obj.set_taborder("4");
            obj.set_binddataset("ds_grid");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"48\"/><Column size=\"160\"/><Column size=\"60\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"No\"/><Cell col=\"2\" text=\"에디트\"/><Cell col=\"3\" text=\"필수\" cssclass=\"essential\"/></Band><Band id=\"body\"><Cell text=\"bind:chk\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:No\" displaytype=\"text\"/><Cell col=\"2\" text=\"bind:Edi\" displaytype=\"editcontrol\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:Essential\" displaytype=\"text\"/></Band></Format></Formats>");
            this.divIntegrated.addChild(obj.name, obj);

            obj = new Splitter("SplitterH","508","0","11",null,null,"0",null,null,null,null,this.divIntegrated.form);
            obj.set_taborder("5");
            obj.set_cssclass("spt_WF_H");
            obj.set_text("");
            obj.set_layoutorder("0");
            obj.set_max("1500");
            obj.set_min("1");
            this.divIntegrated.addChild(obj.name, obj);

            obj = new Div("divExcel","197","-1",null,"37","531",null,null,null,null,null,this.divIntegrated.form);
            obj.set_taborder("6");
            obj.set_text("div00");
            this.divIntegrated.addChild(obj.name, obj);

            obj = new Button("btnCust00_00_00",null,"3","119","28","0",null,null,null,null,null,this.divIntegrated.form.divExcel.form);
            obj.set_taborder("0");
            obj.set_text("엑셀다운로드");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelSave");
            this.divIntegrated.form.divExcel.addChild(obj.name, obj);

            obj = new Button("btnCust01_00_00",null,"3","105","28","btnCust00_00_00:2.343999999999994",null,null,null,null,null,this.divIntegrated.form.divExcel.form);
            obj.set_taborder("1");
            obj.set_text("엑셀업로드");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelUp");
            this.divIntegrated.form.divExcel.addChild(obj.name, obj);

            obj = new Static("staSubTitle","0","-9","420","46",null,null,null,null,null,null,this.divIntegrated.form);
            obj.set_taborder("0");
            obj.set_text("서브타이틀");
            obj.set_cssclass("sta_WF_Title");
            this.divIntegrated.addChild(obj.name, obj);

            obj = new Static("staDetailList",null,"-9","261","46","230",null,null,null,null,null,this.divIntegrated.form);
            obj.set_taborder("2");
            obj.set_text("상세리스트");
            obj.set_cssclass("sta_WF_SubTitle");
            this.divIntegrated.addChild(obj.name, obj);

            obj = new Div("divExcel1",null,"-1","400","34","0",null,null,null,null,null,this.divIntegrated.form);
            obj.set_taborder("3");
            obj.set_text("div00");
            this.divIntegrated.addChild(obj.name, obj);

            obj = new Button("btnCust00_00_00",null,"3","119","28","0",null,null,null,null,null,this.divIntegrated.form.divExcel1.form);
            obj.set_taborder("0");
            obj.set_text("엑셀다운로드");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelSave");
            this.divIntegrated.form.divExcel1.addChild(obj.name, obj);

            obj = new Button("btnCust01_00_00",null,"3","105","28","btnCust00_00_00:2.343999999999994",null,null,null,null,null,this.divIntegrated.form.divExcel1.form);
            obj.set_taborder("1");
            obj.set_text("엑셀업로드");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelUp");
            this.divIntegrated.form.divExcel1.addChild(obj.name, obj);

            obj = new Static("staSampleEx","872","3","158","26",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divBottomLimit
            obj = new Layout("default","",0,0,this.divBottomLimit.form,function(p){});
            this.divBottomLimit.form.addLayout(obj.name, obj);

            //-- Default Layout : this.SplitterV.form
            obj = new Layout("default","",0,0,this.SplitterV.form,function(p){});
            this.SplitterV.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divIntegrated.form.SplitterH.form
            obj = new Layout("default","",0,0,this.divIntegrated.form.SplitterH.form,function(p){});
            this.divIntegrated.form.SplitterH.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divIntegrated.form.divExcel.form
            obj = new Layout("default","",0,0,this.divIntegrated.form.divExcel.form,function(p){});
            this.divIntegrated.form.divExcel.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divIntegrated.form.divExcel1.form
            obj = new Layout("default","",0,0,this.divIntegrated.form.divExcel1.form,function(p){});
            this.divIntegrated.form.divExcel1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divIntegrated.form
            obj = new Layout("default","",0,0,this.divIntegrated.form,function(p){});
            this.divIntegrated.form.addLayout(obj.name, obj);

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
        this.registerScript("sampleSplitter.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	sampleSplitter.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023/02/07
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2023/02/07			TOBESOFT					최초생성
        *******************************************************************************
        */
        /************************************************************************************************
         * FORM 변수 선언 영역
         ************************************************************************************************/

        /************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose)
         ************************************************************************************************/
        /**
         * @description 화면 onload시 처리내역(필수)
        */
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	this.fnSize();

        	//Splitter item 적용
        	this.SplitterV.addItem([{componentid:"txaGuide", offset:5, position:"top"}, {componentid:"divIntegrated", offset:5, position:"bottom"}]);
        	this.divIntegrated.form.SplitterH.addItem([{componentid:"grdSubList", offset:5, position:"left"}, {componentid:"grdDetailList", offset:5, position:"right"}]);
        	this.divIntegrated.form.SplitterH.addItem([{componentid:"divExcel", offset:5, position:"left"}, {componentid:"staDetailList", offset:5, position:"right"}]);

        	//Splitter 최소, 최대 position 기준 컴포넌트 적용
        	//순서 : top, bottom, left, right
        	this.SplitterV.addSplitter(this.staSampleEx, this.divBottomLimit, null, null);
          	this.divIntegrated.form.SplitterH.addSplitter(null, null, this.divIntegrated.form.staSubTitle, this.divIntegrated.form.divExcel1);
        };

        this.form_onsize = function(obj,e)
        {
        	this.fnSize();
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnSize = function()
        {
        	var formSize = (this.parent.form.getPixelWidth()) / 2;

        	this.divIntegrated.form.SplitterH.set_left(formSize);
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.txaGuide.addEventHandler("onchanged",this.txaGuide_onchanged,this);
        };
        this.loadIncludeScript("sampleSplitter.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
