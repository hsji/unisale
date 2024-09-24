(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Temp19");
            this.set_titletext("사용자설정 팝업");
            if (Form == this.constructor)
            {
                this._setFormPosition(320,230);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btnConfirm",null,null,"50","28","25","20",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("저장");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"50","28","78","20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("취소");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);

            obj = new Button("btn00","30","20","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("테마 설정");
            obj.set_cssclass("btn_WF_TabS");
            this.addChild(obj.name, obj);

            obj = new Button("btn00_00","160","20","130","32",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("비밀번호 변경");
            obj.set_cssclass("btn_WF_Tab");
            this.addChild(obj.name, obj);

            obj = new Div("div00","30","62",null,"100","30",null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","30","8","75","55",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_Light");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00_00","151","8","75","55",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Dark");
            this.div00.addChild(obj.name, obj);

            obj = new Radio("rdo00","27","67","231","21",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var div00_form_rdo00_innerdataset = new nexacro.NormalDataset("div00_form_rdo00_innerdataset", obj);
            div00_form_rdo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">라이트모드</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">다크모드</Col></Row></Rows>");
            obj.set_innerdataset(div00_form_rdo00_innerdataset);
            obj.set_text("라이트모드");
            obj.set_value("0");
            obj.set_index("0");
            this.div00.addChild(obj.name, obj);

            obj = new Div("div00_00","359","68",null,"100","-299",null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Static("sta03","0","0",null,"34","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("edt05","125","5",null,"24","5",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("1");
            obj.set_password("true");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("sta03_00","0","33",null,"34","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("sta02_00","-4","33","125","34",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("3");
            obj.set_text("새 비밀번호");
            obj.set_cssclass("sta_WF_Label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("edt05_00","125","38",null,"24","5",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("4");
            obj.set_password("true");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("sta03_00_00","0","66",null,"34","0",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_LabelBg");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("sta02_00_00","-4","66","125","34",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("6");
            obj.set_text("새 비밀번호 확인");
            obj.set_cssclass("sta_WF_Label");
            this.div00_00.addChild(obj.name, obj);

            obj = new Edit("edt05_00_00","125","71",null,"24","5",null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("7");
            obj.set_password("true");
            this.div00_00.addChild(obj.name, obj);

            obj = new Static("sta02","-4","0","125","34",null,null,null,null,null,null,this.div00_00.form);
            obj.set_taborder("8");
            obj.set_text("현재 비밀번호");
            obj.set_cssclass("sta_WF_Label");
            this.div00_00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00_00.form
            obj = new Layout("default","",0,0,this.div00_00.form,function(p){});
            this.div00_00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",320,230,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Temp19.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	Temp09_01.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/01/05
        *  @Desction    팝업연결용 화면
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/01/05			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvSearch = "";	// 부모에서 넘긴 검색조건

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	// 초기화
        	this.fnInit();
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
        /**
         * @description 초기화
        */
        this.fnInit = function()
        {
        	this.fvSearch = this.getOwnerFrame().pvSearch;

        	if (!this.gfnIsNull(this.fvSearch))
        	{
        		this.dsGrid.filter("NAME.indexOf('" + this.fvSearch + "') > -1");
        	}

        	this.grdList.set_binddataset("dsGrid");

        	this.dsGrid.set_rowposition(0);
        }

        /**
         * @description 사용자 검색
        */
        this.fnSearch = function()
        {
        	var sSearch = this.divSearch.form.edtName.value;

        	if (this.gfnIsNull(sSearch)) sSearch = "";

        	this.dsGrid.filter("NAME.indexOf('" + sSearch + "') > -1");
        }

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        /**
         * @description 취소 버튼 클릭 이벤트
        */
        this.btnClose_onclick = function(obj,e)
        {
        	this.gfnClosePopup();
        };

        /**
         * @description 확인 버튼 클릭 이벤트
        */
        this.btnConfirm_onclick = function(obj,e)
        {
        	var nRow = this.dsGrid.rowposition;

        	var sId = this.dsGrid.getColumn(nRow, "ID");
        	var sName = this.dsGrid.getColumn(nRow, "NAME");

        	var rtnValue = {
        	     rtnId:sId
        		,rtnName:sName
        	}

        	this.gfnClosePopup(JSON.stringify(rtnValue));
        };

        /**
         * @description 그리드셀 더블클릭 이벤트
        */
        this.grdList_oncelldblclick = function(obj,e)
        {
        	var nRow = this.dsGrid.rowposition;

        	var sId = this.dsGrid.getColumn(nRow, "ID");
        	var sName = this.dsGrid.getColumn(nRow, "NAME");

        	var rtnValue = {
        	     rtnId:sId
        		,rtnName:sName
        	}

        	this.gfnClosePopup(JSON.stringify(rtnValue));
        };

        /**
         * @description 조회 버튼 클릭 이벤트
        */
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	// 사용자 검색
        	this.fnSearch();
        };

        /**
         * @description 검색 엔터키 이벤트
        */
        this.divSearch_edtName_onkeyup = function(obj,e)
        {
        	// 엔터키일 경우
        	if (e.keycode == 13)
        	{
        		// 사용자 검색
        		this.fnSearch();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.btnConfirm.addEventHandler("onclick",this.btnConfirm_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
        };
        this.loadIncludeScript("Temp19.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
