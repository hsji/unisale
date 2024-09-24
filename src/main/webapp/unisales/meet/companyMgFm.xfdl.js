(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("companyMgFm");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"SEQ_NO\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"COM_ENGL_NAME\" type=\"string\" size=\"32\"/><Column id=\"LANG_CD\" type=\"string\" size=\"32\"/><Column id=\"ADDR_DTL\" type=\"string\" size=\"32\"/><Column id=\"CHGE_IP\" type=\"string\" size=\"32\"/><Column id=\"COM_IMAGE_WIDTH\" type=\"int\" size=\"4\"/><Column id=\"CHGE_ID\" type=\"string\" size=\"32\"/><Column id=\"COM_CODE\" type=\"string\" size=\"32\"/><Column id=\"INPT_IP\" type=\"string\" size=\"32\"/><Column id=\"USE_YN\" type=\"string\" size=\"32\"/><Column id=\"CHGE_DTTM\" type=\"datetime\" size=\"17\"/><Column id=\"SEQ_NO\" type=\"int\" size=\"4\"/><Column id=\"COM_NAME\" type=\"string\" size=\"32\"/><Column id=\"COM_IMAGE\" type=\"string\" size=\"32\"/><Column id=\"INPT_DTTM\" type=\"datetime\" size=\"17\"/><Column id=\"INPT_ID\" type=\"string\" size=\"32\"/><Column id=\"ADDR_BASIC\" type=\"string\" size=\"32\"/><Column id=\"COM_IMAGE_HEIGHT\" type=\"int\" size=\"4\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divOutter","22.58%","17.92%","701","399",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("div00");
            obj.set_background("#ffffff");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","5.00","75","115","30",null,null,null,null,null,null,this.divOutter.form);
            obj.set_taborder("0");
            obj.set_text("회사명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divOutter.addChild(obj.name, obj);

            obj = new Edit("edtComName","160","77","510","28",null,null,null,null,null,null,this.divOutter.form);
            obj.set_taborder("1");
            obj.set_cssclass("essential");
            obj.set_maxlength("100");
            obj.set_imemode("hangul");
            this.divOutter.addChild(obj.name, obj);

            obj = new Static("sta00_00","5.00","35","115","30",null,null,null,null,null,null,this.divOutter.form);
            obj.set_taborder("2");
            obj.set_text("회사코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divOutter.addChild(obj.name, obj);

            obj = new Edit("edtComCode","160","37","150","28",null,null,null,null,null,null,this.divOutter.form);
            obj.set_taborder("3");
            obj.set_cssclass("essential");
            obj.set_maxlength("8");
            obj.set_inputtype("alpha");
            obj.set_inputmode("upper");
            this.divOutter.addChild(obj.name, obj);

            obj = new Static("sta00_01","5.00","115","115","30",null,null,null,null,null,null,this.divOutter.form);
            obj.set_taborder("4");
            obj.set_text("회사이미지");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divOutter.addChild(obj.name, obj);

            obj = new Static("sta00_01_00","5.00","295","145","30",null,null,null,null,null,null,this.divOutter.form);
            obj.set_taborder("5");
            obj.set_text("이미지 가로사이즈");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divOutter.addChild(obj.name, obj);

            obj = new Edit("edtDtName00_00","160","298","140","28",null,null,null,null,null,null,this.divOutter.form);
            obj.set_taborder("6");
            obj.set_cssclass("essential");
            obj.set_maxlength("8");
            obj.set_inputtype("number");
            this.divOutter.addChild(obj.name, obj);

            obj = new Edit("edtDtName00_00_00","160","339","140","28",null,null,null,null,null,null,this.divOutter.form);
            obj.set_taborder("7");
            obj.set_cssclass("essential");
            obj.set_maxlength("8");
            obj.set_inputtype("number");
            this.divOutter.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00","5.00","336","145","30",null,null,null,null,null,null,this.divOutter.form);
            obj.set_taborder("8");
            obj.set_text("이미지 세로사이즈");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divOutter.addChild(obj.name, obj);

            obj = new ImageViewer("img00","160.00","120",null,null,"210","168",null,null,null,null,this.divOutter.form);
            obj.set_taborder("9");
            obj.set_border("1px solid #dddddd");
            obj.set_stretch("none");
            this.divOutter.addChild(obj.name, obj);

            obj = new FileUpload("fud00",null,"237","80","24","209",null,null,null,null,null,this.divOutter.form);
            obj.set_taborder("10");
            obj.set_itemheight("24");
            obj.set_buttonsize("80");
            obj.set_buttontext("선택");
            obj.set_filefilter("IMAGE|*.png;*.gif;*.jpg");
            this.divOutter.addChild(obj.name, obj);

            obj = new Static("sta01","159","237","125","24",null,null,null,null,null,null,this.divOutter.form);
            obj.set_taborder("11");
            obj.set_text("* 1MB 이하");
            this.divOutter.addChild(obj.name, obj);

            obj = new Static("sta01_00","309.00","300","62","24",null,null,null,null,null,null,this.divOutter.form);
            obj.set_taborder("12");
            obj.set_text("픽셀");
            this.divOutter.addChild(obj.name, obj);

            obj = new Static("sta01_00_00","309.00","342","62","24",null,null,null,null,null,null,this.divOutter.form);
            obj.set_taborder("13");
            obj.set_text("픽셀");
            this.divOutter.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divOutter.form
            obj = new Layout("default","",0,0,this.divOutter.form,function(p){});
            this.divOutter.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","divOutter.form.edtComCode","value","dsList","COM_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divOutter.form.edtComName","value","dsList","COM_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divOutter.form.img00","image","dsList","COM_IMAGE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divOutter.form.edtDtName00_00","value","dsList","COM_IMAGE_WIDTH");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divOutter.form.edtDtName00_00_00","value","dsList","COM_IMAGE_HEIGHT");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("companyMgFm.xfdl", function() {
        /**
        *  회의록 회사이미지등록
        *  @FileName 	companyMgFm.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2024/05/21
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/05/21			DXTOBE						최초생성
        *******************************************************************************
        */
        this.companyMgFm_onload = function(obj,e)
        {
        	this.fnSearch();
        };

        this.cfnSave = function ()
        {
        	// 변경된 정보없으면 리턴
        	if (this.gfnDsIsUpdated(this.dsList) == false) {
        		// 저장할 데이터가 없습니다.
        		this.gfnAlert("msg.save.nochange");
        		return;
        	}

        	// validation 체크 후
        	if (this.fnFormValidation()) {
        		this.fnSave();
        	}

        };

        /**
        * @function fnSearch  <br>
        * description 회사조회
        */
        this.fnSearch = function ()
        {
        	this.gfnSetMap("meet", "CompanyInfo");

        	var strSvcId    = "searchCompanyInfo";
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

        /**
        * @function fnSave  <br>
        * description 저장
        */
        this.fnSave = function ()
        {
        	this.gfnSetMap("meet", "CompanyInfo");

        	var strSvcId    = "saveCompanyInfo";
        	var strSvcUrl   = "saveCommonBaseService.do";
        	var inData      = "dsList=dsList:U dsMap=dsMap";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        /**
        * @function fnCallback  <br>
        * description 서비스콜백
        */
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "searchCompanyInfo" :
        			if(this.dsList.rowcount == 0) {
        				this.dsList.addRow();
        			}
        			break;
        		case "saveCompanyInfo" :
        			this.fnSearch();
        			break;
        		default :
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnFormValidation = function ()
        {
        	// 정합성 체크
        	this.gfnClearValidation(this.dsList);

        	this.gfnSetValidation(this.dsList, "COM_CODE", "회사코드"	, "required");
        	this.gfnSetValidation(this.dsList, "COM_NAME", "회사명"	, "required");

        	// Dataset의 변경된 Row Validation check
        	if (this.gfnValidation(this.dsList, "U") == false) return false;
        	else return true;
        };

        /**
        * @function fud00_onitemchanged  <br>
        * description 사진등록
        */
        this.fud00_onitemchanged = function(obj,e)
        {
        	var items = obj._items;
        	var ds = this.dsList;
        	if(items[0] && items[0]._files && items[0]._files[0]) {
        		var file = items[0]._files[0];
        		console.log(file);
        		if(file.name.indexOf(".png") < 0 && file.name.indexOf(".gif") < 0 && file.name.indexOf(".jpg") < 0) {
        			this.gfnAlert("msg.err.nosupportimage", [], "");
        			return;
        		}
        		if(file.size > 1024000) {
        			this.gfnAlert("msg.err.filesize", ["1MB"], "");
        			return;
        		}
        		var reader = new FileReader();
        		reader.readAsDataURL(items[0]._files[0]);
        		reader.onload = function(e) {
        			ds.setColumn(0, "COM_IMAGE", e.target.result);
        		};
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.companyMgFm_onload,this);
            this.divOutter.form.fud00.addEventHandler("onitemchanged",this.fud00_onitemchanged,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
        };
        this.loadIncludeScript("companyMgFm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
