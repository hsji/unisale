(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleDynamicDiv");
            this.set_titletext("Div동적생성");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDiv", this);
            obj._setContents("<ColumnInfo><Column id=\"divId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"divId\">divStep1</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static04_00",null,"0","20",null,"0","20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W20");
            this.addChild(obj.name, obj);

            obj = new Div("divStep1","0","43",null,"250","20",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_url("sample::sampleDynamicDivLink.xfdl");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnDivAdd",null,null,"107","28","20","divStep1:5",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div동적생성");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btnDivDel",null,null,"118","28","btnDivAdd:4","divStep1:5",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div동적생성 삭제");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","0","divStep1:20",null,"257","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staBgW01","0","37",null,"38","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBgW00","0","0",null,"38","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","0","108","38",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("콤보박스");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","37","108","38",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_text("디세이블검색");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBgW02","0","74",null,"38","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_text("Static02");
            obj.set_cssclass("sta_WF_LabelBg");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle02","0","74","108","38",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_text("핸드폰번호");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle03","257","0","108","38",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_text("필수에디트");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle05","514","0","108","38",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_text("에디트");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle08","771","0","108","38",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_text("캘린더");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle06","514","37","108","38",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_text("라디오버튼");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle09","771","37","108","38",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_text("마스크에디트");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle04","257","37","108","38",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_text("검색");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle10","771","74","108","38",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_text("스핀박스");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle07","514","74","108","38",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_text("체크박스");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("Combo00","112","5","141","28",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("14");
            obj.set_text("Combo00");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("Edit00","112","42","141","28",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("15");
            obj.set_enable("false");
            obj.set_cssclass("edi_WF_Search");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("Edit01","369","42","141","28",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("16");
            obj.set_cssclass("edi_WF_Search");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("Edit02","369","5","141","28",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("17");
            obj.set_cssclass("essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("Combo01","112","79","60","28",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("18");
            obj.set_text("Combo00");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("Edit03","184","79","60","28",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("19");
            obj.set_value("1234");
            obj.set_text("1234");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("Edit04","256","79","60","28",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("20");
            obj.set_value("5678");
            obj.set_text("5678");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static00","172","79","12","28",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("21");
            obj.set_text("-");
            obj.set_cssclass("sta_WF_Center");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("Static01","244","79","12","28",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("22");
            obj.set_text("-");
            obj.set_cssclass("sta_WF_Center");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("Button02","224","42","28","28",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("23");
            obj.set_cssclass("btn_WF_EdiSch");
            obj.set_enable("false");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("Button00","482","42","28","28",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("24");
            obj.set_cssclass("btn_WF_EdiSch");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("Edit05","626","5","141","28",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("25");
            this.divDetail.addChild(obj.name, obj);

            obj = new Radio("Radio00","626","42","141","28",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("26");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_columncount("-1");
            obj.set_rowcount("-1");
            var divDetail_form_Radio00_innerdataset = new nexacro.NormalDataset("divDetail_form_Radio00_innerdataset", obj);
            divDetail_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">체크</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">체크</Col></Row></Rows>");
            obj.set_innerdataset(divDetail_form_Radio00_innerdataset);
            obj.set_text("체크");
            obj.set_value("0");
            obj.set_index("0");
            this.divDetail.addChild(obj.name, obj);

            obj = new CheckBox("CheckBox00","626","79","150","28",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("27");
            obj.set_text("사용");
            obj.set_value("true");
            this.divDetail.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","883","5","142","28",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("28");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("Edit06","883","42","99","28",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("29");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("Button01","985","43","40","26",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("30");
            obj.set_text("버튼");
            obj.set_cssclass("btn_WF_Detail");
            this.divDetail.addChild(obj.name, obj);

            obj = new Spin("Spin00","883","79","142","28",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("31");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grd00","0","Combo01:20","257",null,null,"30",null,null,null,null,this.divDetail.form);
            obj.set_taborder("32");
            obj.set_binddataset("dsDiv");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"divId\"/></Band><Band id=\"body\"><Cell text=\"bind:divId\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divStep1
            obj = new Layout("default","",0,0,this.divStep1.form,function(p){});
            this.divStep1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1050,736,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","sample::sampleDynamicDivLink.xfdl");
        };
        
        // User Script
        this.registerScript("sampleDynamicDiv.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	sampleDynamicDiv.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2020/12/14
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2020/12/14			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvCnt = 1;	// Div count
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

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
        this.btnDivAdd_onclick = function(obj,e)
        {
        	var nCnt = this.dsDiv.rowcount;
        	var nRow = this.dsDiv.rowposition;
        	var nTop = 38;
        	if (nCnt > 0) {
        		var sCurDiv = this.dsDiv.getColumn(nRow, "divId");
        		var objCur  = this.components[sCurDiv];
        		nTop        = objCur.getOffsetBottom() + 10;
        	}

        	// count 증가
        	this.fvCnt++;

        	// Div 동적생성
        	var objDiv = new Div();
        	var sDivName = "divStep" + this.fvCnt;
        	objDiv.init(sDivName, 0, nTop, null, 200, 20, null);
        	objDiv.set_url("sample::sampleDynamicDivLink.xfdl");
        	this.addChild(sDivName, objDiv);
        	objDiv.show();

        	var nLastBottom = 0;
        	// 마지막 Div 추가 시
        	if (nRow == (nCnt-1)) {
        		nLastBottom = objDiv.getOffsetBottom();
        	}
        	// 중간 Div 삭제 시
        	else {
        		for (var i=nRow+1; i<nCnt; i++) {
        			var objComp = this.components[this.dsDiv.getColumn(i, "divId")];
        			trace("i : " + i + " / objComp.name : " + objComp.name);
        			objComp.move(0, objComp.getOffsetTop() + 200 + 10, null, objComp.getOffsetHeight(), 0);
        			nLastBottom = objComp.getOffsetBottom();
        		}
        	}

        	// 수정사유 Div 위치 조정
        	this.divDetail.move(0, nLastBottom + 10, null, this.divDetail.getOffsetHeight(), 0);

        	// 화면 갱신
        	this.resetScroll();

        	// Dataset에 Div 정보 추가
        	var nAddRow = this.dsDiv.insertRow(nRow+1);
        	this.dsDiv.setColumn(nAddRow, "divId", sDivName);
        };

        this.btnDivDel_onclick = function(obj,e)
        {
        	var nCnt = this.dsDiv.rowcount;
        	if (nCnt == 0) return;

        	var nRow   = this.dsDiv.rowposition;
        	var sDiv   = this.dsDiv.getColumn(nRow, "divId");
        	var objDiv = this.components[sDiv];

        	var nLastBottom = 0;
        	// 1개 Div 삭제 시
        	if (nCnt == 1) {
        		nLastBottom = 112 + 200;
        	}
        	// 마지막 Div 삭제시
        	else if (nCnt > 1 && nRow == (nCnt-1)) {
        		nLastBottom = objDiv.getOffsetBottom();
        	}
        	// 중간 Div 삭제 시
        	else {
        		for (var i=nRow+1; i<nCnt; i++) {
        			var objComp = this.components[this.dsDiv.getColumn(i, "divId")];
        			//trace("i : " + i + " / objComp.name : " + objComp.name);
        			nLastBottom = objComp.getOffsetBottom();
        			objComp.move(0, objComp.getOffsetTop() - 200 - 10, null, objComp.getOffsetHeight(), 0);
        		}
        	}

        	// Div 삭제
        	var objRtn = this.removeChild(sDiv);

        	// Dataset에 Div 정보 삭제
        	this.dsDiv.deleteRow(nRow);

        	var nLastRow = this.dsDiv.getRowCount() - 1;
        	var objLastDiv = this.components[this.dsDiv.getColumn(nLastRow, "divId")];

        	// 수정사유 Div 위치 조정
        	if(!this.gfnIsNull(objLastDiv))
        	{
        		let nLastBottom = objLastDiv.getOffsetBottom();
        		this.divDetail.move(0, nLastBottom + 10, null, this.divDetail.getOffsetHeight(), 0);
        	} else {
        		this.divDetail.move(0, 38, null, this.divDetail.getOffsetHeight(), 0);
        	}

        	// 화면 갱신
        	this.resetScroll();


        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnDivAdd.addEventHandler("onclick",this.btnDivAdd_onclick,this);
            this.btnDivDel.addEventHandler("onclick",this.btnDivDel_onclick,this);
            this.divDetail.form.Button02.addEventHandler("onclick",this.Div00_Button01_onclick,this);
            this.divDetail.form.Button00.addEventHandler("onclick",this.Div00_Button01_onclick,this);
        };
        this.loadIncludeScript("sampleDynamicDiv.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
