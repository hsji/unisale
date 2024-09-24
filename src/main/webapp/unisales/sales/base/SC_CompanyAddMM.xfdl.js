(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("SC_CompanyAddMM");
            this.set_titletext("New Form");
            this.set_cssclass("frm_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(850,540);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOutput", this);
            obj._setContents("<ColumnInfo><Column id=\"SSC_NUMB\" type=\"string\" size=\"1\"/><Column id=\"HCL_CD\" type=\"string\" size=\"8\"/><Column id=\"SSC_CD\" type=\"string\" size=\"8\"/><Column id=\"SSC_CD_KORN_NM\" type=\"string\" size=\"6\"/><Column id=\"SSC_CD_ENGL_NM\" type=\"string\" size=\"100\"/><Column id=\"ABBR_KORN_NM\" type=\"string\" size=\"100\"/><Column id=\"ABBR_ENGL_NM\" type=\"string\" size=\"100\"/><Column id=\"GRP_CD_1\" type=\"string\" size=\"100\"/><Column id=\"GRP_CD_2\" type=\"string\" size=\"20\"/><Column id=\"GRP_CD_3\" type=\"string\" size=\"20\"/><Column id=\"GRP_CD_4\" type=\"string\" size=\"20\"/><Column id=\"GRP_CD_5\" type=\"string\" size=\"20\"/><Column id=\"GRP_CD_6\" type=\"string\" size=\"20\"/><Column id=\"GRP_CD_7\" type=\"string\" size=\"20\"/><Column id=\"GRP_CD_8\" type=\"string\" size=\"20\"/><Column id=\"GRP_CD_9\" type=\"string\" size=\"20\"/><Column id=\"BEFO_HCL_CD\" type=\"string\" size=\"20\"/><Column id=\"BEFO_SSC_CD\" type=\"string\" size=\"12\"/><Column id=\"USED_YN\" type=\"string\" size=\"20\"/><Column id=\"SORT_ORDR\" type=\"string\" size=\"1\"/><Column id=\"REMK\" type=\"bigdecimal\" size=\"22\" prop=\"\"/><Column id=\"INPT_ID\" type=\"string\" size=\"2000\" prop=\"\"/><Column id=\"INPT_DTTM\" type=\"string\" size=\"20\" prop=\"\"/><Column id=\"INPT_IP\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_IP\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_ComCode", this);
            obj._setContents("<ColumnInfo><Column id=\"SCR_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION_JAP\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION_ENG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SCR_ID\">SC_CompanyReg</Col><Col id=\"CODE\">NATION_CODE</Col><Col id=\"CAPTION\">국가</Col><Col id=\"CAPTION_JAP\">国</Col></Row><Row><Col id=\"SCR_ID\">SC_CompanyReg</Col><Col id=\"CODE\">BUSINESS_KIND</Col><Col id=\"CAPTION\">업종</Col><Col id=\"CAPTION_JAP\">業種</Col></Row><Row><Col id=\"SCR_ID\">SC_CompanyReg</Col><Col id=\"CODE\">BUSINESS_FORM</Col><Col id=\"CAPTION\">업태</Col><Col id=\"CAPTION_JAP\">業態</Col></Row><Row><Col id=\"SCR_ID\">SC_CompanyReg</Col><Col id=\"CODE\">CA_ROLE_CODE</Col><Col id=\"CAPTION\">역할</Col><Col id=\"CAPTION_JAP\">役割</Col></Row><Row><Col id=\"SCR_ID\">SC_CompanyReg</Col><Col id=\"CODE\">CA_GRADE_CODE</Col><Col id=\"CAPTION\">직급</Col><Col id=\"CAPTION_JAP\">肩書き</Col></Row><Row><Col id=\"SCR_ID\">SP_Contract</Col><Col id=\"CODE\">PURPOSE</Col><Col id=\"CAPTION\">용도</Col><Col id=\"CAPTION_JAP\">用途</Col></Row><Row><Col id=\"CAPTION\">서버등급</Col><Col id=\"CODE\">SERVER_GRADE</Col><Col id=\"SCR_ID\">SP_Contract</Col><Col id=\"CAPTION_JAP\">サーバー等級</Col></Row><Row><Col id=\"SCR_ID\">SP_Contract</Col><Col id=\"CODE\">CONTRACT_PROD_TYPE</Col><Col id=\"CAPTION\">유형</Col><Col id=\"CAPTION_JAP\">タイプ</Col></Row><Row><Col id=\"CODE\">PRODUCT_UNIT</Col><Col id=\"CAPTION\">단위</Col><Col id=\"SCR_ID\">SP_Contract</Col><Col id=\"CAPTION_JAP\">単位</Col></Row><Row><Col id=\"SCR_ID\">SP_Contract</Col><Col id=\"CODE\">SERVER_IP_KIND</Col><Col id=\"CAPTION\">IP,Domain 용도구분</Col><Col id=\"CAPTION_JAP\">IP,Domain用途区分</Col></Row><Row><Col id=\"SCR_ID\">TE_StudentList</Col><Col id=\"CODE\">EDU_DIVISION</Col><Col id=\"CAPTION\">구분</Col></Row><Row><Col id=\"SCR_ID\">TE_StudentList</Col><Col id=\"CODE\">EDU_INDUSTRY</Col><Col id=\"CAPTION\">업종</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"SSC_NUMB\" type=\"string\" size=\"1\"/><Column id=\"HCL_CD\" type=\"string\" size=\"8\"/><Column id=\"SSC_CD\" type=\"string\" size=\"8\"/><Column id=\"SSC_CD_KORN_NM\" type=\"string\" size=\"6\"/><Column id=\"SSC_CD_ENGL_NM\" type=\"string\" size=\"100\"/><Column id=\"ABBR_KORN_NM\" type=\"string\" size=\"100\"/><Column id=\"ABBR_ENGL_NM\" type=\"string\" size=\"100\"/><Column id=\"GRP_CD_1\" type=\"string\" size=\"100\"/><Column id=\"GRP_CD_2\" type=\"string\" size=\"20\"/><Column id=\"GRP_CD_3\" type=\"string\" size=\"20\"/><Column id=\"GRP_CD_4\" type=\"string\" size=\"20\"/><Column id=\"GRP_CD_5\" type=\"string\" size=\"20\"/><Column id=\"GRP_CD_6\" type=\"string\" size=\"20\"/><Column id=\"GRP_CD_7\" type=\"string\" size=\"20\"/><Column id=\"GRP_CD_8\" type=\"string\" size=\"20\"/><Column id=\"GRP_CD_9\" type=\"string\" size=\"20\"/><Column id=\"BEFO_HCL_CD\" type=\"string\" size=\"20\"/><Column id=\"BEFO_SSC_CD\" type=\"string\" size=\"12\"/><Column id=\"USED_YN\" type=\"string\" size=\"20\"/><Column id=\"SORT_ORDR\" type=\"string\" size=\"1\"/><Column id=\"REMK\" type=\"bigdecimal\" size=\"22\" prop=\"\"/><Column id=\"INPT_ID\" type=\"string\" size=\"2000\" prop=\"\"/><Column id=\"INPT_DTTM\" type=\"string\" size=\"20\" prop=\"\"/><Column id=\"INPT_IP\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_IP\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_Exit",null,null,"65","28","20","10",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_tran");
            obj.getSetter("TL_SEQ").set("59");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Save",null,null,"65","28","btn_Exit:5","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_CrudSave");
            obj.getSetter("TL_SEQ").set("115");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Delete",null,null,"65","28","btn_Save:5","10",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_CrudDelete");
            obj.getSetter("TL_SEQ").set("117");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Add",null,null,"65","28","btn_Delete:5","10",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("추가");
            obj.set_cssclass("btn_WF_CrudAdd");
            obj.getSetter("TL_SEQ").set("528");
            this.addChild(obj.name, obj);

            obj = new Static("staCdNm","0","10","110","24",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("코드 구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_AddList","staCdNm:0","10","153","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.set_innerdataset("ds_cmm_ComCode");
            obj.getSetter("TL_FLAG").set("1");
            obj.set_text("국가");
            obj.set_value("NATION_CODE");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDetail","20.00","43",null,null,"20","140",null,null,"250",null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsOutput");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.set_autofittype("col");
            obj.getSetter("uFunction").set("filter,sort,!colfix,!initial,find");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"129\"/><Column size=\"40\"/><Column size=\"85\"/><Column size=\"85\"/><Column size=\"40\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"코드\" cssclass=\"essential\"/><Cell col=\"1\" text=\"코드명\" cssclass=\"essential\"/><Cell col=\"2\" text=\"정렬&#13;&#10;순서\" cssclass=\"essential\"/><Cell col=\"3\" text=\"그룹1\"/><Cell col=\"4\" text=\"그룹2\"/><Cell col=\"5\" text=\"사용&#13;&#10;여부\"/></Band><Band id=\"body\"><Cell editfilter=\"alpha,digit\" text=\"bind:SSC_CD\" textAlign=\"left\" edittype=\"text\" editmaxlength=\"8\" editinputtype=\"digit,english\" editinputmode=\"upper\" displaytype=\"editcontrol\" editimemode=\"alpha\"/><Cell col=\"1\" text=\"bind:SSC_CD_KORN_NM\" textAlign=\"left\" verticalAlign=\"middle\" edittype=\"text\" displaytype=\"editcontrol\" editmaxlength=\"30\" editimemode=\"hangul\"/><Cell col=\"2\" text=\"bind:SORT_ORDR\" displaytype=\"editcontrol\" edittype=\"text\" editmaxlength=\"2\" editinputtype=\"digit\"/><Cell col=\"3\" text=\"bind:GRP_CD_1\" displaytype=\"editcontrol\" edittype=\"text\" editmaxlength=\"10\" editimemode=\"alpha\"/><Cell col=\"4\" text=\"bind:GRP_CD_2\" displaytype=\"editcontrol\" edittype=\"text\" editmaxlength=\"10\" editimemode=\"alpha\"/><Cell col=\"5\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" text=\"bind:USED_YN\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staBg00","20","410",null,"34","20",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("staBg03","20","443",null,"34","20",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_LabelBg");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00","20","410","89","34",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("코드");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle03_00","20","443","89","34",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("그룹1");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSoCd","113.00","415","107","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_maxlength("8");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_cssclass("essential");
            obj.set_inputtype("digit,english");
            obj.set_inputmode("upper");
            obj.set_imemode("alpha");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle08","224.00","410","89","34",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("코드명");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSoCdNm","317.00","415",null,"24","30",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("essential");
            obj.set_maxlength("30");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_imemode("hangul");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle13","619.00","443","89","34",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("정렬순서");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSoDisSeq","712.00","448",null,"24","31",null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_cssclass("essential");
            obj.set_maxlength("5");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_inputtype("digit");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSoGroup1","113.00","448","107","24",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_maxlength("10");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_inputmode("normal");
            obj.set_imemode("alpha");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle09","224.00","443","89","34",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("그룹2");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new Edit("edtSoGroup2","317.00","448","107","24",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_maxlength("10");
            obj.getSetter("lengthunit").set("utf8");
            obj.set_inputmode("normal");
            obj.set_imemode("alpha");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle17","428.00","443","89","34",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("사용여부");
            obj.set_cssclass("sta_WF_Label");
            this.addChild(obj.name, obj);

            obj = new CheckBox("chkSoUseYn","521.00","448","108","24",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","426","6","406","30",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_text("코드가 변경되면 대상 화면을 닫고 다시 실행해야 할 수도 있습니다.");
            obj.set_textAlign("right");
            obj.set_color("red");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",850,540,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edtSoCd","value","dsOutput","SSC_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSub.form.edtSoCdNm","value","dsOutput","SSC_CD_KORN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edtSoCdNm","value","dsOutput","SSC_CD_KORN_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","edtSoDisSeq","value","dsOutput","SORT_ORDR");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","edtSoGroup1","value","dsOutput","GRP_CD_1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","edtSoGroup2","value","dsOutput","GRP_CD_2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item17","chkSoUseYn","value","dsOutput","USED_YN");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("SC_CompanyAddMM.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("SC_CompanyAddMM.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("SC_CompanyAddMM.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("SC_CompanyAddMM.xfdl","Script::CommGrid.xjs");
        this.registerScript("SC_CompanyAddMM.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 : 공통 - 공통
        * 02. 화면명   : 추가 등록 (SC_CompanyAddMM_S01,
        							 SC_CompanyAddMM_R01)
        * 03. 화면설명 :
        * 04. 작성일   : 2018.08.20
        * 05. 작성자   : 안주환
        * 06. 수정이력 :
        ***********************************************************************************************
        *     수정일          이  름    사유
        ***********************************************************************************************
        *
        ************************************************************************************************/

        /************************************************************************************************
        * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        this.executeIncludeScript("Script::CommSystem.xjs"); /*include "Script::CommSystem.xjs"*/;
        this.executeIncludeScript("Script::CommTrans.xjs"); /*include "Script::CommTrans.xjs"*/;
        this.executeIncludeScript("Script::CommUtil.xjs"); /*include "Script::CommUtil.xjs"*/;
        this.executeIncludeScript("Script::CommGrid.xjs"); /*include "Script::CommGrid.xjs"*/;
        /************************************************************************************************
        * 전역 변수 영역
        ************************************************************************************************/
        this.fvOldIndex = -1;
        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/
        this.SC_CompanyAddMM_onload = function(obj, e)
        {
        	this.gfnCompInit(obj); //헤더클릭 이벤트 없을 시 사용

        	var sScrId = this.parent.SCR_ID;
        	this.ds_cmm_ComCode.filter("SCR_ID=='"+sScrId+"'");
        	this.cmb_AddList.set_index(0);

        	this.dsOutput.copyData(nexacro.getApplication().gdsCommCode);
        	this.fnSearch(true);
        };

        // 개발전용
        this.fnGetCode = function()
        {
        // 	this.gfnAddCodeDataset("ds_CD_NATION_CODE"			,"NATION_CODE");
        //
        // 	// 공통코드 조회
        // 	this.gfnCodeTransaction();
        };
        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/


        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fnSearch = function(bFirst)
        {
        	if (this.gfnDsIsUpdated(this.dsOutput)) {
        		// 검색을 진행하면 변경된 데이터가 사라집니다. \n계속 진행 하시겠습니까?
        		var sMsgId = "confirm.before.search";		//메세지ID
        		var arrArg = [""];							//메세지취환될값 배열[생략가능]
        		var sPopId = "search";						//메세지팝업ID[생략가능]	*해당화면에서 메시지 중복사용시 구분되는값을 넣어줘야함
        		var sMsgCallback = "fnMsgCallback";			//메세지콜백[생략가능] 		* confirm성 메시지를 사용 시 반드시 필요

        		this.gfnAlert(sMsgId, arrArg, sPopId, sMsgCallback);
        		return;
        	}

        	this.fnSearchCall(bFirst);
        };

        this.fnSearchCall = function(bFirst)
        {
        	this.dsOutput.applyChange();
        	this.dsOutput.filter("HCL_CD=='" + this.cmb_AddList.value + "'");

        	if(bFirst === true) {
        		//rowPosition 초기 지정
        		if(!this.gfnIsEmpty(this.parent.CD_CODE))
        		{
        			var nRow = this.dsOutput.findRow("SSC_CD", this.parent.CD_CODE);
        			this.dsOutput.set_rowposition(nRow);
        		}
        		else
        		{
        			this.dsOutput.set_rowposition(0);
        		}
        	} else {
        		this.dsOutput.set_rowposition(0);
        	}
        };

        this.fnValid = function()
        {
        	var nCnt = this.dsOutput.getRowCount();
        	for(var i = 0; i < nCnt; i++) {
        		if(this.dsOutput.getRowType( i ) == Dataset.ROWTYPE_NORMAL) continue;

        		var code = this.dsOutput.getColumn(i, "SSC_CD");
        		var sort = this.dsOutput.getColumn(i, "SORT_ORDR");
        		if(this.gfnIsNull(sort)) {
        			this.gfnAlert('msg.err.validator.required',['정렬순서'],"SORT_ORDR",
        			function() {
        				this.dsOutput.set_rowposition(i);
        			});
        			return false;
        		}
        		for(var j = (i+1); j < nCnt; j++) {
        			if(this.dsOutput.getColumn(j, "SSC_CD") == code) {
        				this.gfnAlert('msg.err.validator.duplcation',[],"SSC_CD",
        				function() {
        					this.dsOutput.set_rowposition(j);
        				});
        				return false;
        			}
        		}
        	}
        	return true;
        };

        this.fnSave = function()
        {
        	// 변경된 정보없으면 리턴
        	if (this.gfnDsIsUpdated(this.dsOutput) == false) {
        		// 저장할 데이터가 없습니다.
        		this.gfnAlert("msg.save.nochange");
        		return;
        	}

        	if(this.fnValid() == false) return;

        	this.cmb_AddList.set_enable(false);
        	var strSvcId    = "saveComCode";
        	var strSvcUrl   = "saveComCode.do";
        	var inData      = "dsMaster=dsMaster:U dsDetail=dsOutput:U";
        	var outData     = "";
        	var strArg      = "";
        	var callBackFnc = "fnCallBack";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };


        //message
        this.fnMsgCallback = function (sMsgId, sRtn)
        {
        	switch(sMsgId) {
        		case "search":
        			if (this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false) {
        				if(this.fvOldIndex != null) {
        					this.cmb_AddList.set_index(this.fvOldIndex);
        					this.fvOldIndex = null;
        				}
        				return;
        			}
        			this.fnSearchCall();
        			break;
        		default: break;
        	}
        };


        // 화면 콜백
        this.fnCallBack = function(strSvcID, nErrorCode, strErrorMag)
        {
        	this.cmb_AddList.set_enable(true);
        	// 에러 예외처리
        	if(nErrorCode != 0)
        	{
        		//alert("strSvcID : " + strSvcID + "\n" + "nErrorCode : " + nErrorCode + "\n" + "strErrorMag : " + strErrorMag);
        		return;
        	}
        	else
        	{
        		if(strSvcID == "Select")
        		{

        		}
        		else if(strSvcID == "saveComCode")
        		{

        			var gdsCommCode = nexacro.getApplication().gdsCommCode;
        			gdsCommCode.filter("HCL_CD=='" + this.cmb_AddList.value + "'");
        			for(var i=gdsCommCode.rowcount-1;i>=0;i--) {
        				gdsCommCode.deleteRow(i);
        			}
        			gdsCommCode.filter("");
        			for(var i=0;i<this.dsOutput.rowcount;i++) {
        				var nRow = gdsCommCode.addRow();
        				gdsCommCode.copyRow(nRow, this.dsOutput, i);
        			}
        			gdsCommCode.applyChange();
        			this.dsOutput.applyChange();
        			this.fnSearch();
        		}
        	}
        };

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.comm_Click = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_Add" :
        			var nRow = this.dsOutput.addRow();
        			var compCd = this.dsOutput.getColumn(nRow-1, "COMPANY_CD");
        			if(!compCd) compCd = this.gfnGetCompanyCode();

        			this.dsOutput.setColumn(nRow, "COMPANY_CD", compCd);
        			this.dsOutput.setColumn(nRow, 'HCL_CD', this.cmb_AddList.value);
        			this.dsOutput.setColumn(nRow, 'USED_YN', '1');
        			this.grdDetail.setCellPos(0);
        			this.grdDetail.showEditor(true);
        			break;

        		case "btn_Delete" :
        			this.dsOutput.deleteRow(this.dsOutput.rowposition); //열을 삭제
        			break;

        		case "btn_Save" :
        			this.fnSave();
        			break;

        		case "btn_Exit" :
        			this.close();
        			break;

        		case "btn_Close" :
        			this.close();
        			break;
        	}
        };

        this.cmb_AddList_onitemchanged = function(obj, e)
        {
        	this.fvOldIndex = e.preindex;
        	this.fnSearch();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.SC_CompanyAddMM_onload,this);
            this.btn_Exit.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Save.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Delete.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Add.addEventHandler("onclick",this.comm_Click,this);
            this.cmb_AddList.addEventHandler("onitemchanged",this.cmb_AddList_onitemchanged,this);
        };
        this.loadIncludeScript("SC_CompanyAddMM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
