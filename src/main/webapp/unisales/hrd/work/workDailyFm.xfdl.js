(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("workDailyFm");
            this.set_titletext("시스템 접속 현황");
            if (Form == this.constructor)
            {
                this._setFormPosition(1200,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"WORK_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"WORK_TIME\" type=\"int\" size=\"4\"/><Column id=\"WORK_CONTENTS\" type=\"string\" size=\"32\"/><Column id=\"WORK_TYPE\" type=\"string\" size=\"32\"/><Column id=\"USER_ID\" type=\"string\" size=\"32\"/><Column id=\"WORK_SEQ\" type=\"int\" size=\"4\"/><Column id=\"WORK_DATE\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWork", this);
            obj._setContents("<ColumnInfo><Column id=\"WORK_TIME\" type=\"int\" size=\"4\"/><Column id=\"WORK_CONTENTS\" type=\"string\" size=\"32\"/><Column id=\"WORK_TYPE\" type=\"string\" size=\"32\"/><Column id=\"USER_ID\" type=\"string\" size=\"32\"/><Column id=\"WORK_SEQ\" type=\"int\" size=\"4\"/><Column id=\"WORK_DATE\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsAddWork", this);
            obj._setContents("<ColumnInfo><Column id=\"WORK_TIME\" type=\"int\" size=\"4\"/><Column id=\"WORK_CONTENTS\" type=\"string\" size=\"32\"/><Column id=\"WORK_TYPE\" type=\"string\" size=\"32\"/><Column id=\"USER_ID\" type=\"string\" size=\"32\"/><Column id=\"WORK_SEQ\" type=\"int\" size=\"4\"/><Column id=\"WORK_DATE\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds00", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTargetWork", this);
            obj._setContents("<ColumnInfo><Column id=\"WORK_TIME\" type=\"int\" size=\"4\"/><Column id=\"WORK_CONTENTS\" type=\"string\" size=\"32\"/><Column id=\"WORK_TYPE\" type=\"string\" size=\"32\"/><Column id=\"USER_ID\" type=\"string\" size=\"32\"/><Column id=\"WORK_SEQ\" type=\"int\" size=\"4\"/><Column id=\"WORK_DATE\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWorkSum", this);
            obj._setContents("<ColumnInfo><Column id=\"WORK_TIME\" type=\"int\" size=\"4\"/><Column id=\"WORK_CONTENTS\" type=\"string\" size=\"32\"/><Column id=\"WORK_TYPE\" type=\"string\" size=\"32\"/><Column id=\"USER_ID\" type=\"string\" size=\"32\"/><Column id=\"WORK_SEQ\" type=\"int\" size=\"4\"/><Column id=\"WORK_DATE\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"WORK_CONTENTS\">TOTAL</Col><Col id=\"WORK_TYPE\">Z</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsWorkTargetSum", this);
            obj._setContents("<ColumnInfo><Column id=\"WORK_TIME\" type=\"int\" size=\"4\"/><Column id=\"WORK_CONTENTS\" type=\"string\" size=\"32\"/><Column id=\"WORK_TYPE\" type=\"string\" size=\"32\"/><Column id=\"USER_ID\" type=\"string\" size=\"32\"/><Column id=\"WORK_SEQ\" type=\"int\" size=\"4\"/><Column id=\"WORK_DATE\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row><Col id=\"WORK_CONTENTS\">TOTAL</Col><Col id=\"WORK_TYPE\">Y</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staBg02",null,null,"554","34","20","43",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00",null,null,"400","46","177","80",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Summary");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divSearch","0","0",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","56","-158","185","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch_form_Combo01_innerdataset = new nexacro.NormalDataset("divSearch_form_Combo01_innerdataset", obj);
            divSearch_form_Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_Combo01_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo02","282","-158","185","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch_form_Combo02_innerdataset = new nexacro.NormalDataset("divSearch_form_Combo02_innerdataset", obj);
            divSearch_form_Combo02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_Combo02_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo03","521","-158","184","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch_form_Combo03_innerdataset = new nexacro.NormalDataset("divSearch_form_Combo03_innerdataset", obj);
            divSearch_form_Combo03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_Combo03_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","785","-158","184","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_value("20190308");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,null,"48","28","25","10",null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","12","107","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("기준일자");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("cal00","107","11","150","27",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            this.divSearch.addChild(obj.name, obj);

            obj = new Div("divUser","358","14","250","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("div00");
            obj.set_url("common::cmmUserSearch.xfdl");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle00_00_00","264","14","74","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("담당자");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","divSearch:0","140","43","910",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("일일업무 현황");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","0","staTitle01:40","32.5%",null,null,"126",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsTargetWork");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("row");
            obj.set_cellsizingtype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"382\"/><Column size=\"69\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\" band=\"head\"/><Row size=\"50\"/><Row size=\"32\" band=\"summ\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"업무목표\" font=\"bold 13px/normal &quot;noto&quot;,&quot;Malgun Gothic&quot;,&quot;Arial&quot;\" background=\"#132C30\" color=\"#ffffff\"/><Cell row=\"1\" text=\"업무내용\"/><Cell row=\"1\" col=\"1\" text=\"분(30분)\"/></Band><Band id=\"body\"><Cell text=\"bind:WORK_CONTENTS\" displaytype=\"textareacontrol\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" textAlign=\"left\" autosizerow=\"limitmin\" edittype=\"textarea\"/><Cell col=\"1\" text=\"bind:WORK_TIME\" displaytype=\"number\" edittype=\"mask\" maskeditformat=\"#,###\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" displaytype=\"normal\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edtTatgetTime",null,null,"369","24","30","48",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_maxlength("30");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle04",null,null,"164","34","410","43",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("목표시간");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("staBg02_00",null,null,"554","34","20","10",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Edit("edtWorkTime",null,null,"369","24","30","15",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_maxlength("30");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle04_00",null,null,"164","34","410","10",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("업무시간");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Button("btnTAdd","0","95","67","28",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_CrudAdd");
            obj.getSetter("WTYPE").set("T");
            this.addChild(obj.name, obj);

            obj = new Button("btnTDel","btnTAdd:3","95","69","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CrudDelete");
            obj.getSetter("WTYPE").set("T");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList00","grdList:10","133","32.5%",null,null,"126",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_binddataset("dsWork");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"382\"/><Column size=\"69\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\" band=\"head\"/><Row size=\"50\"/><Row size=\"32\" band=\"summ\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"수행업무\" background=\"#132C30\" color=\"#ffffff\"/><Cell row=\"1\" text=\"업무내용\"/><Cell row=\"1\" col=\"1\" text=\"분(30분)\"/></Band><Band id=\"body\"><Cell text=\"bind:WORK_CONTENTS\" displaytype=\"textareacontrol\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" textAlign=\"left\" autosizerow=\"limitmin\" edittype=\"textarea\"/><Cell col=\"1\" text=\"bind:WORK_TIME\" displaytype=\"number\" edittype=\"mask\" maskeditformat=\"#,###\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" displaytype=\"normal\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd","grdList:9","95","67","28",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_CrudAdd");
            obj.getSetter("WTYPE").set("W");
            this.addChild(obj.name, obj);

            obj = new Button("btnDel","btnAdd:3","95","69","28",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CrudDelete");
            obj.getSetter("WTYPE").set("W");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList00_00","grdList00:10","133","32.5%",null,null,"126",null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_binddataset("dsAddWork");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autosizingtype("row");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"382\"/><Column size=\"69\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\" band=\"head\"/><Row size=\"50\"/><Row size=\"32\" band=\"summ\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"목표외 기타업무\" background=\"#132C30\" color=\"#ffffff\"/><Cell row=\"1\" text=\"업무내용\"/><Cell row=\"1\" col=\"1\" text=\"분(30분)\"/></Band><Band id=\"body\"><Cell text=\"bind:WORK_CONTENTS\" displaytype=\"textareacontrol\" calendardateformat=\"yyyy-MM-dd HH:mm:ss\" textAlign=\"left\" autosizerow=\"limitmin\" edittype=\"textarea\"/><Cell col=\"1\" text=\"bind:WORK_TIME\" displaytype=\"number\" edittype=\"mask\" maskeditformat=\"#,###\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" displaytype=\"normal\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAAdd","grdList00:10","95","67","28",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_CrudAdd");
            obj.getSetter("WTYPE").set("A");
            this.addChild(obj.name, obj);

            obj = new Button("btnADel","btnAAdd:3","95","69","28",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CrudDelete");
            obj.getSetter("WTYPE").set("A");
            this.addChild(obj.name, obj);

            obj = new Button("btn00",null,"62","221","28","19",null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("최근 데이터  오늘날짜로 복사");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form.divUser
            obj = new Layout("default","",0,0,this.divSearch.form.divUser.form,function(p){});
            this.divSearch.form.divUser.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1200,736,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item8","divSearch.form.cal00","value","dsCond","WORK_DATE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.divUser.form.edtUserId","value","dsCond","USER_ID");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","common::cmmUserSearch.xfdl");
        };
        
        // User Script
        this.registerScript("workDailyFm.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	logSytmLoginFm.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/06/28
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/06/28			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.fvToday = null;
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	//날짜세팅
        	this.fvToday = this.gfnGetDate();
        	this.divSearch.form.cal00.set_value(this.fvToday);

        // 	var WKDT_CD = this.gfnGetUserInfo("WKDT_CD");
        // 	if(WKDT_CD != "0050") {
        // 		this.divSearch.form.staTitle00_00_00.set_visible(true);
        // 		this.divSearch.form.divUser.set_visible(true);
        // 	}
        //
        	this.dsCond.setColumn(0, "USER_ID", this.gfnGetUserInfo("USER_ID"));
        	this.dsCond.setColumn(0, "WORK_DATE", this.fvToday);
        	this.cfnSearch();
        };

        this.fnGridHead = function ()
        {
        	var date = this.divSearch.form.cal00.value;
        	if(!date) return;

        	date = new Date(parseInt(date.substr(0,4)), parseInt(date.substr(4,2))-1, parseInt(date.substr(6,2)));
        	var sDate = this.gfnGetDate("date", "-", date)
        	this.grdList.setCellProperty("head", 0, "text", sDate + " 업무목표");
        	this.grdList00.setCellProperty("head", 0, "text", sDate + " 수행업무");
        	this.grdList00_00.setCellProperty("head", 0, "text", sDate + " 목표외기타업무");
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	if( this.fnSearchValidation()){
        		this.fnGridHead();
        		this.fnTranSearch();
        	}
        };

        //저장
        this.cfnSave = function ()
        {
        	// 변경된 정보없으면 리턴
        	if (this.gfnDsIsUpdated(this.dsWork) == false && this.gfnDsIsUpdated(this.dsAddWork) == false && this.gfnDsIsUpdated(this.dsTargetWork) == false) {
        		// 저장할 데이터가 없습니다.
        		this.gfnAlert("msg.save.nochange");
        		return;
        	}

        	if(this.fnSaveValidation() == false) return;
        	this.fnTranSave();
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //조회
        this.fnTranSearch = function ()
        {
        	var strSvcId    = "searchWorkList";
        	var strSvcUrl   = "searchWorkList.do";
        	var inData      = "dsCond=dsCond";
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

        //조회
        this.fnTranPreSearch = function ()
        {
        	var strSvcId    = "searchPreWorkList";
        	var strSvcUrl   = "searchPreWorkList.do";
        	var inData      = "dsCond=dsCond";
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

        //저장
        this.fnTranSave = function ()
        {
        	var strSvcId    = "saveWorkList";
        	var strSvcUrl   = "saveWorkList.do";
        	var inData      = "dsCond=dsCond dsList=dsList:A";
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
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //transaction
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	if(nErrCd < 0) return;
        	switch(sSvcId) {
        		case "searchWorkList":
        			this.fvMaxSeq = this.dsList.getMax("WORK_SEQ") || 0;
        			this.fnSplitData();
        			break;
        		case "searchPreWorkList":
        			if(this.dsList.rowcount > 0) {
        				this.fvToday = this.dsList.getColumn(0, "WORK_DATE");
        				this.divSearch.form.cal00.set_value(this.fvToday);
        				this.fnGridHead();
        			}
        			this.fvMaxSeq = this.dsList.getMax("WORK_SEQ") || 0;
        			this.fnSplitData();
        			break;
        		case "saveWorkList" :
        			this.cfnSearch();
        			break;
        		default: break;
        	}
        };

        this.fnSplitData = function() {
        	this.dsList.filter("");
        	this.dsTargetWork.clearData();
        	this.dsWork.clearData();
        	this.dsAddWork.clearData();

        	if(this.dsList.rowcount == 0) {
        		this.dsWorkSum.setColumn(0, "WORK_DATE", this.fvToday);
        		this.dsWorkSum.setColumn(0, "USER_ID", this.gfnGetUserInfo("USER_ID"));
        		this.dsWorkSum.setColumn(0, "WORK_CONTENTS", "TOTAL");
        		this.dsWorkSum.setColumn(0, "WORK_SEQ", this.fvMaxSeq++);
        		this.dsWorkSum.setColumn(0, "WORK_TYPE", "Z");
        		this.dsWorkSum.setColumn(0, "WORK_TIME", 0);

        		this.dsWorkTargetSum.setColumn(0, "WORK_DATE", this.fvToday);
        		this.dsWorkTargetSum.setColumn(0, "USER_ID", this.gfnGetUserInfo("USER_ID"));
        		this.dsWorkTargetSum.setColumn(0, "WORK_CONTENTS", "TOTAL");
        		this.dsWorkTargetSum.setColumn(0, "WORK_SEQ", this.fvMaxSeq++);
        		this.dsWorkTargetSum.setColumn(0, "WORK_TYPE", "Y");
        		this.dsWorkTargetSum.setColumn(0, "WORK_TIME", 0);
        		this.fnSum();
        		return;
        	}

        	this.dsList.filter("WORK_TYPE == 'T'");
        	this.dsTargetWork.copyData(this.dsList, true);

        	this.dsList.filter("WORK_TYPE == 'W'");
        	this.dsWork.copyData(this.dsList, true);

        	this.dsList.filter("WORK_TYPE == 'A'");
        	this.dsAddWork.copyData(this.dsList, true);

        	this.dsList.filter("WORK_TYPE == 'Y'");
        	this.dsWorkTargetSum.copyData(this.dsList, true);

        	this.dsList.filter("WORK_TYPE == 'Z'");
        	this.dsWorkSum.copyData(this.dsList, true);

        	this.fnSum();
        	this.dsList.filter("");
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        //조회조건 validation
        this.fnSearchValidation = function ()
        {
        	// 정합성 체크
        	this.gfnClearValidation(this.dsCond);

        	this.gfnSetValidation(this.dsCond, "WORK_DATE", "기준일자"	, "required");

        	// Dataset의 변경된 Row Validation check
        	if (this.gfnValidation(this.dsCond, "A") == false) return false;
        	else return true;
        };

        //저장 validation
        this.fnSaveValidation = function ()
        {
        	// 정합성 체크
        	this.gfnClearValidation(this.dsTargetWork);
        	this.gfnSetValidation(this.dsTargetWork, "WORK_CONTENTS", "내용"	, "required");
        	this.gfnSetValidation(this.dsTargetWork, "WORK_TIME"	, "시간", "required");
        	if (this.gfnValidation(this.dsTargetWork, "A") == false) return false;

        	this.gfnClearValidation(this.dsWork);
        	this.gfnSetValidation(this.dsWork, "WORK_CONTENTS", "내용"	, "required");
        	this.gfnSetValidation(this.dsWork, "WORK_TIME"	, "시간", "required");
        	if (this.gfnValidation(this.dsWork, "A") == false) return false;

        	this.gfnClearValidation(this.dsAddWork);
        	this.gfnSetValidation(this.dsAddWork, "WORK_CONTENTS", "내용"	, "required");
        	this.gfnSetValidation(this.dsAddWork, "WORK_TIME"	, "시간", "required");
        	if (this.gfnValidation(this.dsAddWork, "A") == false) return false;

        	this.dsList.copyData(this.dsTargetWork);
        	this.dsList.appendData(this.dsWork);
        	this.dsList.appendData(this.dsAddWork);
        	this.dsList.appendData(this.dsWorkTargetSum);
        	this.dsList.appendData(this.dsWorkSum);

        	for(var i=0;i<this.dsList.rowcount;i++) {
        		this.dsList.setColumn(i, "WORK_SEQ", i+1);
        	}

        	return true;
        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.cfnSearch();
        };


        this.commonAdd = function(obj,e)
        {
        	var objDs;
        	var nAddRow;
        	if(obj.WTYPE == "T") {
        		objDs = this.dsTargetWork;
        		nAddRow = objDs.addRow();
        		if(this.dsTargetWork.rowcount > this.dsWork.rowcount) {
        			var nRow = this.dsWork.addRow();
        			this.dsWork.setColumn(nRow, "WORK_DATE", this.fvToday);
        			this.dsWork.setColumn(nRow, "USER_ID", this.gfnGetUserInfo("USER_ID"));
        			this.dsWork.setColumn(nRow, "WORK_SEQ", this.fvMaxSeq++);
        			this.dsWork.setColumn(nRow, "WORK_TYPE", "W");
        			this.dsWork.setColumn(nRow, "WORK_TIME", 0);
        		}
        	} else if(obj.WTYPE == "W") {
        		objDs = this.dsWork;
        		nAddRow = objDs.addRow();
        	} else {
        		objDs = this.dsAddWork;
        		nAddRow = objDs.addRow();
        	}
        	objDs.setColumn(nAddRow, "WORK_DATE", this.fvToday);
        	objDs.setColumn(nAddRow, "USER_ID", this.gfnGetUserInfo("USER_ID"));
        	objDs.setColumn(nAddRow, "WORK_SEQ", this.fvMaxSeq++);
        	objDs.setColumn(nAddRow, "WORK_TYPE", obj.WTYPE);
        	objDs.setColumn(nAddRow, "WORK_TIME", 0);

        	this.fnSum();
        };

        this.commonDelete = function(obj,e)
        {
        	if(obj.WTYPE == "T") {
        		this.dsTargetWork.deleteRow(this.dsTargetWork.rowposition);
        	} else if(obj.WTYPE == "W") {
        		this.dsWork.deleteRow(this.dsWork.rowposition);
        	} else {
        		this.dsAddWork.deleteRow(this.dsAddWork.rowposition);
        	}
        	this.fnSum();
        };


        this.btn00_onclick = function(obj,e)
        {
        	this.fnTranPreSearch();
        };

        // column 변경
        this.dsWork_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "WORK_TIME") {
        		this.fnSum();
        	}

        };

        this.dsAddWork_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "WORK_TIME") {
        		this.fnSum();
        	}

        };


        this.dsTargetWork_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "WORK_CONTENTS" || e.columnid == "WORK_TIME") {
        		this.dsWork.setColumn(e.row, e.columnid, e.newvalue);
        	}
        	if(e.columnid == "WORK_TIME") {
        		this.fnSum();
        	}
        };

        this.fnSum = function() {
        	var targetTime = this.dsTargetWork.getSum("WORK_TIME");
        	var workTime = this.dsWork.getSum("WORK_TIME");
        	var addTime = this.dsAddWork.getSum("WORK_TIME");
        	this.dsWorkTargetSum.setColumn(0, "WORK_TIME", targetTime);
        	this.dsWorkSum.setColumn(0, "WORK_TIME", workTime + addTime);

        	var hour = Math.floor(targetTime/60);
        	var time = targetTime%60;
        	this.edtTatgetTime.set_value(hour + "시간 " +  time + "분");


        	var workaddtime = workTime + addTime;
        	hour = Math.floor(workaddtime/60);
        	time = workaddtime%60;

        	this.edtWorkTime.set_value(hour + "시간 " +  time + "분");


        };
        this.divSearch_cal00_onchanged = function(obj,e)
        {
        	this.fvToday = obj.value;
        	this.dsCond.setColumn(0, "WORK_DATE", this.fvToday);
        	this.cfnSearch();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.divSearch.form.cal00.addEventHandler("onchanged",this.divSearch_cal00_onchanged,this);
            this.btnTAdd.addEventHandler("onclick",this.commonAdd,this);
            this.btnTDel.addEventHandler("onclick",this.commonDelete,this);
            this.btnAdd.addEventHandler("onclick",this.commonAdd,this);
            this.btnDel.addEventHandler("onclick",this.commonDelete,this);
            this.btnAAdd.addEventHandler("onclick",this.commonAdd,this);
            this.btnADel.addEventHandler("onclick",this.commonDelete,this);
            this.btn00.addEventHandler("onclick",this.btn00_onclick,this);
            this.dsWork.addEventHandler("oncolumnchanged",this.dsWork_oncolumnchanged,this);
            this.dsAddWork.addEventHandler("oncolumnchanged",this.dsAddWork_oncolumnchanged,this);
            this.dsTargetWork.addEventHandler("oncolumnchanged",this.dsTargetWork_oncolumnchanged,this);
        };
        this.loadIncludeScript("workDailyFm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
