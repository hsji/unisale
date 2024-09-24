(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("customerMgFm");
            this.set_titletext("공통코드관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj.getSetter("firefirstcount").set("0");
            obj._setContents("<ColumnInfo><Column id=\"CLIENT_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CLIENT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.getSetter("firefirstcount").set("0");
            obj._setContents("<ColumnInfo><Column id=\"ADDR_DTL\" type=\"string\" size=\"32\"/><Column id=\"TELP_NUMB\" type=\"string\" size=\"32\"/><Column id=\"SEQ_NO\" type=\"int\" size=\"4\"/><Column id=\"CLIENT_CODE\" type=\"string\" size=\"32\"/><Column id=\"CLIENT_PIC\" type=\"string\" size=\"32\"/><Column id=\"CLIENT_NAME\" type=\"string\" size=\"32\"/><Column id=\"ZIP_NUMB\" type=\"string\" size=\"32\"/><Column id=\"ADDR_BASIC\" type=\"string\" size=\"32\"/><Column id=\"HOME_URL\" type=\"STRING\" size=\"256\"/><Column id=\"CLIENT_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_cssclass("div_WF_Search");
            this.addChild(obj.name, obj);

            obj = new Static("staCd","0","12","98","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("고객코드");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCd","staCd:0","12","111","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCdNm","edtCd:0","12","110","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("고객명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtCdNm","staCdNm:0","12","198","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10","48","28","25",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","50","397","43",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("고객리스트");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdMaster","0","staTitle00:0",null,null,"20","218",null,null,"250",null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsList");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.getSetter("uFunction").set("filter,sort,!colfix,!initial,find");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"81\"/><Column size=\"104\"/><Column size=\"135\"/><Column size=\"151\"/><Column size=\"564\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"순번\"/><Cell col=\"1\" text=\"고객코드\"/><Cell col=\"2\" text=\"고객명\"/><Cell col=\"3\" text=\"대표전화\"/><Cell col=\"4\" text=\"주소\"/></Band><Band id=\"body\"><Cell text=\"bind:SEQ_NO\"/><Cell col=\"1\" text=\"bind:CLIENT_CODE\"/><Cell col=\"2\" text=\"bind:CLIENT_NAME\"/><Cell col=\"3\" text=\"bind:TELP_NUMB\" displaytype=\"mask\" maskedittype=\"string\" maskeditformat=\"expr:comp.parent.fnSetTelGridMask(TELP_NUMB)\"/><Cell col=\"4\" expr=\"ADDR_BASIC &amp;&amp; ADDR_DTL?ADDR_BASIC + &apos; &apos; + ADDR_DTL:&apos;&apos;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","0","grdMaster:0","397","43",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("고객 상세");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","0","staTitle01:5",null,"170","20",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Static("staBg06_01_00_00_00_00","0","0",null,"133","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("18");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg06_01_00_00_00","460","99",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("17");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg06_01_00_00","460","66",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("13");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg06_01_00","460","33",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("11");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg06_01","460","0",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staBg06","0","132",null,"34","0",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_WF_LabelBg");
            obj.set_text("");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle17","0","132","90","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_text("주소");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new JusoPostCode("jPostAddr","95","137",null,"24","5",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            this.divDetail.addChild(obj.name, obj);

            obj = new ImageViewer("img00","112","8","199","120",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_border("1px solid #dddddd");
            obj.set_stretch("fit");
            this.divDetail.addChild(obj.name, obj);

            obj = new FileUpload("fud00","321","51","80","33",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_itemheight("32");
            obj.set_buttonsize("80");
            obj.set_buttontext("사진등록");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle17_00","0","0","90","133",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_text("CI");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle05","460","0","90","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_text("고객코드");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtEmpNo","555","6","105","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_maxlength("10");
            obj.set_inputtype("digit,alpha");
            obj.set_cssclass("essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle05_00","460","33","90","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_text("고객명");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtEmpNo00","555","38","275","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_maxlength("10");
            obj.set_cssclass("essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle05_00_00","460","66","90","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("12");
            obj.set_text("대표전화");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new MaskEdit("msk00","555","71","155","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("14");
            obj.set_type("string");
            obj.set_format("###-####-####");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle05_00_01","460","99","90","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("15");
            obj.set_text("URL");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Edit("edtEmpNo00_00","555","104","445","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("16");
            obj.set_maxlength("10");
            obj.set_cssclass("essential");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle05_01","740","66","90","34",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("19");
            obj.set_text("업종구분");
            obj.set_cssclass("sta_WF_Label");
            this.divDetail.addChild(obj.name, obj);

            obj = new Combo("cboType","840","71","160","24",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("20");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("divCmmnBtn",null,"60","467","33","20",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("div00");
            this.addChild(obj.name, obj);

            obj = new Button("btnExcelDown","348","0","119","28",null,null,null,null,null,null,this.divCmmnBtn.form);
            obj.set_taborder("0");
            obj.set_text("엑셀다운로드");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelSave");
            this.divCmmnBtn.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divCmmnBtn.form
            obj = new Layout("default","",0,0,this.divCmmnBtn.form,function(p){});
            this.divCmmnBtn.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1050,736,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item8","divSearch.form.edtCd","value","dsCond","CLIENT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.edtCdNm","value","dsCond","CLIENT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divDetail.form.img00","text","dsList","CLIENT_PIC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","divDetail.form.edtEmpNo","value","dsList","CLIENT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","divDetail.form.edtEmpNo00","value","dsList","CLIENT_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","divDetail.form.msk00","value","dsList","TELP_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item21","divDetail.form.jPostAddr.form.edtSculZip","value","dsList","ZIP_NUMB");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item22","divDetail.form.jPostAddr.form.edtBasAddr","value","dsList","ADDR_BASIC");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item23","divDetail.form.jPostAddr.form.edtDetailAddr","value","dsList","ADDR_DTL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","divDetail.form.edtEmpNo00_00","value","dsList","HOME_URL");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","divDetail.form.edtEmpNo01","value","dsList","CLIENT_CODE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","divDetail.form.cboType","value","dsList","CLIENT_TYPE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("customerMgFm.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	customerMgFm.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/06/08
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/06/08			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvRowPositionMain = -1;
        this.fvRowPositionSub  = -1;
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	//공통코드
        	var param = [
        			  {biztype : "Combo", code : "SM27", objid : this.divDetail.form.cboType}							// 업종
        	];
        	this.gfnGetCommonCode(param);

        	// 버튼 권한 제어
        	this.gfnSetCommBtn(this.divCmmnBtn);

        	var sUrl = nexacro.getEnvironment().services['svcUrl'].url;
        	this.divDetail.form.jPostAddr.set_jspUrl(sUrl + "thirdParty/post/PostCall.jsp");
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	if (this.gfnDsIsUpdated(this.dsList)) {
        		// 검색을 진행하면 변경된 데이터가 사라집니다. \n계속 진행 하시겠습니까?
        		var sMsgId = "confirm.before.search";		//메세지ID
        		var arrArg = [""];							//메세지취환될값 배열[생략가능]
        		var sPopId = "search";						//메세지팝업ID[생략가능]	*해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
        		var sMsgCallback = "fnMsgCallback";			//메세지콜백[생략가능] 		* confirm성 메시지를 사용 시 반드시 필요

        		this.gfnAlert(sMsgId, arrArg, sPopId, sMsgCallback);
        	}else{
        		this.fnTranSearch();
        	}
        };

        //추가
        this.cfnAdd = function ()
        {
        	var nRow = this.dsList.addRow();
        };

        //삭제
        this.cfnDel = function ()
        {
        	if (this.dsList.rowcount == 0) {
        		return;
        	}
        	this.dsList.deleteRow(this.dsList.rowposition);
        };

        //저장
        this.cfnSave = function ()
        {
        	// 변경된 정보없으면 리턴
        	if (this.gfnDsIsUpdated(this.dsList) == false && this.gfnDsIsUpdated(this.dsList) == false) {
        		// 저장할 데이터가 없습니다.
        		this.gfnAlert("msg.save.nochange");
        		return;
        	}

        	if(this.fnValid()){
        		this.gfnAlert("confirm.save", [""], "save", "fnMsgCallback");
        	}
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //master 조회
        this.fnTranSearch = function ()
        {
        	// 조회-대분류
        	this.dsList.clearData();

        	var strSvcId    = "searchCustomerList";
        	var strSvcUrl   = "searchCustomerList.do";
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
        	var strSvcId    = "saveCustomerInfo";
        	var strSvcUrl   = "saveCustomerInfo.do";
        	var inData      = "dsList=dsList:U";
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
        	switch(sSvcId) {
        		case "searchCustomerList":
        			break;
        		case "saveCustomerInfo":
        			this.fnTranSearch();
        			break;
        		default: break;
        	}
        };

        //popup
        this.fnPopupCallback = function (sPopupId, sRtn)
        {

        };

        //message
        this.fnMsgCallback = function (sMsgId, sRtn)
        {
        	switch(sMsgId) {
        		case "save":
        			if (this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false) {
        				return;
        			}
        			this.fnTranSave();
        			break;
        		default: break;
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        //디테일 - validation
        this.fnValid = function ()
        {
        	// 정합성 체크
        	this.gfnClearValidation(this.dsList);

        	this.gfnSetValidation(this.dsList, "CLIENT_CODE", "고객 코드"	, "required");
        	this.gfnSetValidation(this.dsList, "CLIENT_NAME", "고객명"	, "required");
        	this.gfnSetValidation(this.dsList, "CLIENT_TYPE", "업종구분"	, "required");

        	// Dataset의 변경된 Row Validation check
        	if (this.gfnValidation(this.grdMaster, "U") == false) return;
        	else return true;
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        //조회
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.cfnSearch(); //조회
        };

        this.fnSetTelGridMask = function(tel) {
        	var mask = "###-####-####";
        	if(tel) {
        		if(tel.length == 9) {
        			mask = "##-###-####";
        		} else if(tel.length == 10) {
        			if(tel.substr(0,2) == "02") {
        				mask = "##-###-####";
        			} else {
        				mask = "###-###-####";
        			}
        		}
        	} else {
        		mask = "";
        	}

        	return mask;
        };

        this.fnSetTelMask = function(flag) {
        	var tel = this.dsList.getColumn(this.dsList.rowposition, "TELP_NUMB");
        	var mask = "###-####-####";
        	if(tel) {
        		tel = nexacro.replaceAll(tel," ","");
        		if(tel && tel.length > 0) {
        			if(tel.length == 9) {
        				mask = "##-###-####";
        			} else if(tel.length == 10) {
        				if(tel.substr(0,2) == "02") {
        					mask = "##-###-####";
        				} else {
        					mask = "###-###-####";
        				}
        			}
        		}
        	}

        	this.divDetail.form.msk00.set_format(mask);

        	if(flag) {
        		this.dsList.setColumn(this.dsList.rowposition, "TELP_NUMB", tel);
        	}
        };

        this.divDetail_msk00_oninput = function(obj,e)
        {
        	obj.set_format("###-####-####");
        };

        this.dsList_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "TELP_NUMB") {
        		this.fnSetTelMask(true);
        	}
        };

        this.dsList_onrowposchanged = function(obj,e)
        {
        	if(this.dsList.getRowType(e.newrow) == Dataset.ROWTYPE_INSERT){
        		this.divDetail.form.msk00.set_format("###-####-####");
        	}else{
        		this.fnSetTelMask();
        	}
        };

        this.fud00_onitemchanged = function(obj,e)
        {
        	var items = obj._items;
        	var ds = this.dsList;
        	if(items[0] && items[0]._files && items[0]._files[0]) {
        		var reader = new FileReader();
        		reader.readAsDataURL(items[0]._files[0]);
        		reader.onload = function(e) {
        			ds.setColumn(0, "CLIENT_PIC", e.target.result);
        		};
        	}
        };

        this.divCmmnBtn_btnExcelDown_onclick = function(obj,e)
        {
        	// 엑셀 상단 타이틀 텍스트 설정
        	var sSubTitle = this.staTitle00.text;

        	// Excel Export 공통함수 호출
        	this.gfnExcelExport(this.grdMaster, sSubTitle, sSubTitle, "EXCEL2007","",sSubTitle, true, "");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.divDetail.form.fud00.addEventHandler("onitemchanged",this.fud00_onitemchanged,this);
            this.divDetail.form.msk00.addEventHandler("oninput",this.divDetail_msk00_oninput,this);
            this.divDetail.form.cboType.addEventHandler("onitemchanged",this.cbo_onitemchange,this);
            this.divCmmnBtn.form.btnExcelDown.addEventHandler("onclick",this.divCmmnBtn_btnExcelDown_onclick,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
        };
        this.loadIncludeScript("customerMgFm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
