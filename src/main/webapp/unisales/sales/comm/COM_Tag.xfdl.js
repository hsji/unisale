(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM_Tag");
            this.set_titletext("Tag관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(400,168);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTag", this);
            obj._setContents("<ColumnInfo><Column id=\"TAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPosition", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("edtTag","0","0","200","22",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_enable("false");
            obj.set_tooltiptext("Tag 입력");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd","edtTag:14.00","0","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_POP_Circle");
            obj.set_tooltiptext("추가");
            obj.set_text("+");
            this.addChild(obj.name, obj);

            obj = new Div("divTag","0","edtTag:4",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_detailBg");
            obj.set_formscrolltype("both");
            obj.set_background("white");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel","btnAdd:2","0","22","22",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_enable("false");
            obj.set_cssclass("btn_POP_Circle");
            obj.set_tooltiptext("일괄 삭제");
            obj.set_text("-");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTag.form
            obj = new Layout("default","",0,0,this.divTag.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divTag.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divTag.form
            obj = new Layout("portrait","",0,0,this.divTag.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divTag.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","",400,168,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("Tag관리");

                p.edtTag.set_taborder("1");
                p.edtTag.set_enable("false");
                p.edtTag.set_tooltiptext("Tag 입력");
                p.edtTag.move("0","0","200","22",null,null);

                p.btnAdd.set_taborder("2");
                p.btnAdd.set_cssclass("btn_POP_Circle");
                p.btnAdd.set_tooltiptext("추가");
                p.btnAdd.set_text("+");
                p.btnAdd.move("edtTag:14.00","0","22","22",null,null);

                p.divTag.set_taborder("0");
                p.divTag.set_cssclass("div_WF_detailBg");
                p.divTag.set_formscrolltype("both");
                p.divTag.set_background("white");
                p.divTag.move("0","edtTag:4",null,null,"0","0");

                p.btnDel.set_taborder("3");
                p.btnDel.set_enable("false");
                p.btnDel.set_cssclass("btn_POP_Circle");
                p.btnDel.set_tooltiptext("일괄 삭제");
                p.btnDel.set_text("-");
                p.btnDel.move("btnAdd:2","0","22","22",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("portrait","Mobile_screen",480,768,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.edtTag.move("0","0","280","30",null,null);

                p.btnDel.move("btnAdd:4","0","30","30",null,null);

                p.btnAdd.move("edtTag:4","0","30","30",null,null);
            	}
            );
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("COM_Tag.xfdl","Script::CommSystem.xjs");
        this.registerScript("COM_Tag.xfdl", function() {
        /*******************************************************************************************
        	FILENAME	: CommTag.xjs
        	TITLE		: Tag용 Script
        ********************************************************************************************
        	COMMENT  	: Tag 컴포넌트
        	HISTORY  	: 2022/04/27
        	AUTHOR  	: 한상수
        *******************************************************************************************/
        this.executeIncludeScript("Script::CommSystem.xjs"); /*include "Script::CommSystem.xjs"*/;

        this.fv_sFont = 'normal 300 13px/normal "noto","Malgun Gothic","Arial"';
        this.readonly = false;
        /*************************************************************************/
        //초기 component 셋팅
        this.fnInitTagComp = function()
        {
        	if(this.readonly)
        	{
        		this.edtTag.set_visible(false);
        		this.btnAdd.set_visible(false);
        		this.btnDel.set_visible(false);
        		this.divTag.set_top(0);
        	}
        	this.dsTag.clearData();
        	this.dsPosition.clearData();
        	var arrText=Array();
        	if(this.isBind())
        	{
        		var objDS = this.getBindDataset();
        		var sText = objDS.getColumn(objDS.rowposition, this.parent.tagcolumn);
        		if(!this.gfnIsEmpty(sText))
        			arrText = sText.split(",");

        		this.edtTag.set_enable(true);
        		this.btnAdd.set_enable(true);
        		// TAG 데이터 전체 삭제
        		this.fnclearAllTag(true);
        		if(arrText.length>0)
        		{
        			for(var i = 0; i < arrText.length; i++)
        			{
        				var nRow = this.dsTag.findRow("TAG", arrText[i]);
        				//중복 데이터 제거
        				if(nRow<0)
        				{
        					var nRow = this.dsTag.addRow();
        					this.dsPosition.addRow();
        					this.dsTag.setColumn(nRow, "TAG", arrText[i]);
        				}
        				else
        					trace("중복데이터 "+i+" : "+arrText[i]);
        			}
        			// dataset Tag박스 생성
        			this.fnCreateTagbox();
        		}
        	}
        }
        //TagBox 재생성
        this.fnCreateTagbox = function() {
        	//위치정보 컬럼 추가
        	if(this.gfnIsEmpty(this.dsPosition.getColumnInfo("_top"))) {
        		this.dsPosition.addColumn("_top"		, "STRING");
        		this.dsPosition.addColumn("_right"		, "STRING");
        		this.dsPosition.addColumn("_bottom"		, "STRING");
        		this.dsPosition.addColumn("_comp_id"	, "STRING");
        		this.dsPosition.addColumn("_data_id"	, "STRING");
        	}

        	var sText = "";
        	var objPos = null;
        	var objDiv = null;
        	for(var i = 0; i < this.dsTag.getRowCount(); i++) {
        		// 1. Text 가져오기
        		sText = this.dsTag.getColumn(i, "TAG");
        		// 2. 그리기
        		this.fnCreateComponent(this.divTag, sText, i);
        	}
        	// 5. scrollbar reset
        	this.divTag.form.resetScroll();
        }
        //Tag 추가
        this.fnAddTag = function(sText) {
        	if(this.gfnIsEmpty(sText)) {
        		this.gfnAlert('msg.err.validator.input',['태그'],"tag",
        		function() {
        			this.edtTag.setFocus()
        		});
        		return;
        	}
        	if(-1 < this.dsTag.findRow("TAG", sText)) {
        		this.gfnAlert('msg.exist.code',[''],"tag",
        		function() {
        			this.edtTag.setFocus()
        		});
        		return;
        	}
        	if(sText.indexOf(",")>0)
        	{
        		this.gfnAlert('msg.err.validator.notvalid',[','],"tag",
        		function() {
        			this.edtTag.setFocus()
        		});
        		return;
        	}
        	this.edtTag.set_value("");

        	// 1. data 추가
        	var nRow = this.dsTag.addRow();
        	this.dsPosition.addRow();
        	this.dsTag.setColumn (nRow, "TAG", sText);
        	// 2. 그린다
        	this.fnCreateComponent(this.divTag, sText, nRow);
        	// 4. scrollbar reset
        	this.divTag.form.resetScroll();
        	// 5. 신규 생성 component 위치로 scrollbar 이동
        	this.divTag.form.vscrollbar.set_pos(this.divTag.form.vscrollbar.max);
        }
        //Tag n번째 ROW부터 END ROW까지 추가
        this.fnAddAllTagFromIndex = function(nIdx) {
        	var sText = "";
        	var objPos = null;
        	var objDiv = null;
        	for(var i = nIdx; i < this.dsTag.getRowCount(); i++) {
        		// 1. Text 가져오기.
        		sText = this.dsTag.getColumn(i, "TAG");
        		// 2. 그리기
        		this.fnCreateComponent(this.divTag, sText, i);
        	}
        }
        // 전체 삭제
        this.fnclearAllTag = function(bResize) {
        	var arrComp = this.divTag.form.components;
        	var objDiv = null;
        	for(var i = arrComp.length - 1; i > -1; i--) {
        		objDiv = this.divTag.removeChild(arrComp[i].name);
        		objDiv.destroy();
        		objDiv = null;
        	}
        	if(!bResize)	//사이즈 조절시 데이터 삭제는 안한다
        	{
        		// scrollbar reset
        		this.divTag.form.resetScroll();
        		// Tag reset
        		this.dsTag.clearData();
        		this.dsPosition.clearData();
        	}
        	this.btnDel.set_enable(false);
        }
        /*
        // Tag 삭제
         예시) B(ROW:1) 삭제시 B(ROW:1), C(ROW:2) 삭제하고, A(ROW:0) 뒤에 C(ROW:1)로 추가됨
         ┌────┐┌────┐┌────┐  ┌────┐┌────┐
         │A (ROW:0)││B (ROW:1)││C (ROW:2)│→│A (ROW:0)││C (ROW:1)│
         └────┘└────┘└────┘  └────┘└────┘
        */
        this.fnDeleteTag = function(objDiv) {
        	var nCurrIdx = this.dsPosition.findRow("_comp_id", objDiv.name);
        	// component 삭제
        	this.fnDeleteAllTagFromIndex(nCurrIdx);
        	// tag 삭제
        	this.dsTag.deleteRow(nCurrIdx);
        	this.dsPosition.deleteRow(nCurrIdx);
        	// tag 삭제 후 재배치
        	this.fnAddAllTagFromIndex(nCurrIdx);
        	// scrollbar reset
        	this.divTag.form.resetScroll();
        	if(this.dsTag.getRowCount()==0)
        		this.btnDel.set_enable(false);
        }
        // Tag n번째 row부터 end row 까지 삭제
        this.fnDeleteAllTagFromIndex = function(nIdx) {
        	var objDiv = null;
        	for(var i = this.dsTag.getRowCount() - 1; i > nIdx - 1; i--) {
        		objDiv = this.divTag.form.components[this.dsPosition.getColumn(i, "_comp_id")];
        		if(!this.gfnIsEmpty(objDiv)) {
        			objDiv.parent.removeChild(objDiv.name);
        			objDiv.destroy();
        			objDiv = null;
        		}
        	}
        }
        //Tag 문자길이를 계산하여 생성될 component의 위치를 정의
        this.fnGetPosition = function(sText) {
        	var _parentSize = this.divTag._adjust_width;	// Div width
        	var _compSize = 20; // 기본가로px(텍스트 좌우패딩합 + 버튼 + 여유값5px)
        	if(this.readonly)
        		_compSize = 8;
        	var _textSize = nexacro.getTextSize(sText, this.fv_sFont, null, "none", 0)["nx"] + 5; // 여유값5px
        	var _p = 4;		//padding
        	var _h = this.getCurrentLayoutID()=="portrait"?30:22;	//height
        	var _scroll = this.divTag.form.vscrollbar.width;	//scrollbar(10)
        	var objPos = {};

        	var nIdx 	= this.dsTag.findRow("TAG", sText);
        	var nTop	= nIdx==0?4:nexacro.toNumber(this.dsPosition.getColumn(nIdx-1, "_top"));
        	var nRight	= nIdx==0?0:nexacro.toNumber(this.dsPosition.getColumn(nIdx-1, "_right"));
        	var nBottom	= nIdx==0?0:nexacro.toNumber(this.dsPosition.getColumn(nIdx-1, "_bottom"));

        	// 1. 생성될 Div와 부모div 사이즈를 비교
        	if(_parentSize > (nRight + _textSize + _compSize + _p*2 + _scroll)) {
        		// 1-1-1. left : 마지막 component의 우측 + padding
        		objPos.left = nRight + _p;
        		// 1-1-2. top : 마지막 component의 top
        		objPos.top = nTop;
        	}else {
        		// 1-2-1. left : padding
        		objPos.left = _p;
        		// 1-2-2. top : 마지막 component의 Bottom + padding
        		objPos.top = nBottom + _p;
        	}
        	// component의 크기, 위치 정의
        	objPos.width = _textSize + _compSize;
        	objPos.height = _h;
        	objPos.right = objPos.left + objPos.width;
        	objPos.bottom = objPos.top + objPos.height;
        	objPos.textSize = _textSize;

        	return objPos;
        }
        /*
        //Tag 문자를 감싼 component를 생성하여 반환
         ┌ Div ─────────┐
         │┌ EditBox ──┐┌─┐│
         ││ Tag     ──││x ││
         │└──────┘└─┘│
         └───────────┘
        */
        this.fnCreateComponent = function(objParentDiv, sText, nIdx) {
        	//component 위치 지정
        	var objPos = this.fnGetPosition(sText);

        	// 1. Tag 박스
        	var sId = "div_" + sText;
        	var objDiv = new Div(sId, objPos.left, objPos.top, objPos.width, objPos.height, null, null);
        	objParentDiv.addChild(sId, objDiv);
        	objDiv.set_cssclass("div_WF_detailBg");
        	//objDiv.form.set_background("#3276b1");
         	//objDiv.form.set_border("1px solid #285e8e");
        	objDiv.show();

        	// 2. 텍스트+좌우패딩합(12)
        	var objEdit = new Edit("edtValue", 0, 0, objPos.textSize + 20, objPos.height-2, null, null);
        	objDiv.addChild("edtValue", objEdit);
        	objEdit.set_background("transparent");
         	objEdit.set_border("1px none transparent");
         	objEdit.set_borderRadius ("0px");
         	objEdit.set_font(this.fv_sFont);
         	//objEdit.set_color("#ffffff");
        	objEdit.set_value(sText);
        	objEdit.set_readonly(true);
        	objEdit.show();

        	if(!this.readonly)
        	{
        		// 3. 삭제 버튼 추가
        		var objButton = new Button("btnDel", null, 1, objPos.height-4, objPos.height-4, 1, null);
        		objDiv.addChild("btnDel", objButton);
        		objButton.set_background("URL('theme://images/grd_LF_Delete.png') no-repeat center center");
        		objButton.set_border("0px none transparent");
        		objButton.addEventHandler("onclick", this.btn_Del_onclick, this);
        		objButton.show();

        		this.btnDel.set_enable(true);
        	}

        	// 생성된 component의 위치를 dataset에 저장
        	this.dsPosition.setColumn(nIdx, "_top"		, objPos.top);
        	this.dsPosition.setColumn(nIdx, "_right"	, objPos.right);
        	this.dsPosition.setColumn(nIdx, "_bottom"	, objPos.bottom);
        	this.dsPosition.setColumn(nIdx, "_comp_id"	, objDiv.name);
        	this.dsPosition.setColumn(nIdx, "_data_id"	, sId);
        };
        //tag 삭제버튼 이벤트
        this.btn_Del_onclick = function(obj, e) {
        	this.fnDeleteTag(obj.parent.parent);
        };
        // Div 사이즈 조절에 따라서 component 재배치
        this.fnDivResize = function()
        {
         	// 전체 component 삭제
        	this.fnclearAllTag(true);
        	//새로운 사이즈에 맞추어서 component 재생성
        	this.fnCreateTagbox();
        }
        /*************************************************************************/
        this.getBindDataset = function()
        {
        	return this._getDatasetObject(this.parent.binddataset);
        }

        this.isBind = function()
        {
        	if(this.parent.binddataset)
        	{
        		if(!this.gfnIsEmpty(this.parent.binddataset) && (!this.gfnIsEmpty(this.parent.tagcolumn)))
        		{
        			return true;
        		}
        	}
        	return false;
        }
        /*
        자동으로 셋팅해주려고 했으나 오류때문에 화면에서 직접 처리 하게 제외
        this.setBindData = function()
        {
        	var objDS = this.getBindDataset();
        	objDS.setColumn(objDS.rowposition, this.parent.tagcolumn, this.getTag());
        }
        */
        /*************************************************************************/
        this.divTag_onsize = function(obj,e)
        {
        	this.fnDivResize();
        };

        this.COM_Tag_onload = function(obj,e)
        {
        	var pThis = this;
        	this.parent.getTag = function()
        	{
        		var Text;
        		for(var i = 0; i < pThis.dsTag.getRowCount(); i++)
        		{
        			Text = (pThis.gfnIsEmpty(Text)?"":Text+",")+pThis.dsTag.getColumn(i,"TAG");
        		}
        		return Text;
        	};
        	this.parent.setTag = function()
        	{
        		pThis.fnInitTagComp();
        	};
        	this.getTag = this.parent.getTag;	//화면에서 tag를 확인할때 (저장전에 사용)
        	this.setTag = this.parent.setTag;	//화면의 tag값을 컴포넌트에 셋팅할때 (조회후에 사용)
        	this.readonly = this.parent.readonly;
        	//this.fv_sFont = this.getCurrentLayoutID()=="portrait"?"16px 'Dotum'":"12px 'Dotum'";

        	this.fnInitTagComp();
        };

        this.btnAdd_onclick = function(obj,e)
        {
        	this.fnAddTag(this.edtTag.value);
        };

        this.edtTag_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13)
        	{
        		this.fnAddTag(this.edtTag.value);
        	}
        };

        this.btnDel_onclick = function(obj,e)
        {
        	// 일괄삭제를 하시겠습니까?
        	this.gfnAlert('confirm.before.deleteall',[','],"tag",
        	function() {
        		this.fnclearAllTag(false);
        	});
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.COM_Tag_onload,this);
            this.edtTag.addEventHandler("onkeyup",this.edtTag_onkeyup,this);
            this.btnAdd.addEventHandler("onclick",this.btnAdd_onclick,this);
            this.divTag.addEventHandler("onsize",this.divTag_onsize,this);
            this.btnDel.addEventHandler("onclick",this.btnDel_onclick,this);
        };
        this.loadIncludeScript("COM_Tag.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
