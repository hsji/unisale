(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("orgDeptMgFm");
            this.set_titletext("부서관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USED_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"TXTCOLOR\" type=\"string\" size=\"32\"/><Column id=\"USER_PIC\" type=\"string\" size=\"32\"/><Column id=\"WKORDER\" type=\"string\" size=\"32\"/><Column id=\"WKDT_CD\" type=\"string\" size=\"32\"/><Column id=\"BGCOLOR\" type=\"string\" size=\"32\"/><Column id=\"HIPO_EMPNO\" type=\"string\" size=\"32\"/><Column id=\"FONTSTYLE\" type=\"string\" size=\"32\"/><Column id=\"DEPT_CD\" type=\"string\" size=\"32\"/><Column id=\"UID\" type=\"string\" size=\"32\"/><Column id=\"DEPT_KORN_NM\" type=\"string\" size=\"32\"/><Column id=\"SORTORDER\" type=\"string\" size=\"32\"/><Column id=\"KORN_NM\" type=\"string\" size=\"32\"/><Column id=\"HIPO_DEPT_NM\" type=\"undefined\" size=\"0\"/><Column id=\"EMP_NO\" type=\"string\" size=\"32\"/><Column id=\"TITLE\" type=\"string\" size=\"32\"/><Column id=\"LEAF_YN\" type=\"string\" size=\"32\"/><Column id=\"HIPO_DEPT_CD\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCheckDept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle01","0","0",null,"43","850",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("DXTOBE 조직도");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS00","0","staTitle01:0",null,null,"20","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("ChartJS00");
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
        this.registerScript("orgDeptMapFm.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	orgDeptMgFm.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/02/02
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/02/02			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	this.cfnSearch();
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	this.fnTranSearch();
        };


        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //조회
        this.fnTranSearch = function ()
        {
        	var strSvcId    = "selectCompanyMapList";
        	var strSvcUrl   = "selectCompanyMapList.do";
        	var inData      = "";
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

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //transaction
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "selectCompanyMapList":
        			this.fnDraw();
        			break;
        		default:
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnDraw = function ()
        {
        	var chart = this.ChartJS00;
        	var canvas = chart.getCanvas();
        	var cvs = canvas.id;
        	DxChart.reset(canvas);
            var org = new DxChartOrg({
                id: cvs,
        		elem : canvas,
        		binddataset : this.dsList,
                idColumn: 'UID',
                parentIdColumn: 'HIPO_EMPNO',
        		bgColorColumn : 'BGCOLOR',
        		textColorColumn: 'TXTCOLOR,TXTCOLOR',
        		imageUrlColumn	: 'USER_PIC',
        		textColumn: 'DEPT_NEW_NAME,TITLE',
        		leafGroupColumn	: 'LEAF_YN',
        		textFontColumn  : 'FONTSTYLE',
        		metaColumn : 'METACNT',
                options: {
        			scale : { Auto : true },
        			tree: {	Template : 'rect' },
        			item: {
        					FontStyle 		: "11px noto",
        					DefaultWidth : 200,
        					GroupGapSize : 15,
        					GroupFullDraw : true,
        					BoxStyle : 'roundrect',
        					RectRatio : 0.36,
        					MetaColor : '#4D468D',
        					MetaFont : 'bold 12px noto',
        					NodeGapSize : 10,
        					DefaultWidth : 140,
        					DefaultHeight : 50,
        					ImageVMargin : 0,
        					ImageHMargin : -10,
        					ImageSize : 60,
        					ImageStyle : 'arc',
        					TextHAlign		: 'center',
        					ExpandWidth : 6,
        					ExpandShow : false,
        					ExpandBackgroundColor : '#5B5B98',
        					ExpandLineColor : '#ffffff',
        					ExpandLineWidth : 2,
        					ExpandIconColor : '#ffffff'
        				}
                }
        	});
        	org.draw();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.dsList.addEventHandler("canrowposchange",this.dsList_canrowposchange,this);
            this.dsList.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
        };
        this.loadIncludeScript("orgDeptMapFm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
