(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("mtgListFm");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,780);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"LIMIT\" type=\"INT\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"DT_YN\" type=\"string\" size=\"32\"/><Column id=\"DT_LVL\" type=\"int\" size=\"4\"/><Column id=\"DT_NAME\" type=\"string\" size=\"32\"/><Column id=\"HIPO_DT_CD\" type=\"string\" size=\"32\"/><Column id=\"SortOrder\" type=\"string\" size=\"32\"/><Column id=\"CHGE_ID\" type=\"string\" size=\"32\"/><Column id=\"DT_CD\" type=\"string\" size=\"32\"/><Column id=\"SYS_CODE\" type=\"string\" size=\"32\"/><Column id=\"HIPO_DT_NAME\" type=\"undefined\" size=\"0\"/><Column id=\"BIZ_CODE\" type=\"string\" size=\"32\"/><Column id=\"DT_ORDR\" type=\"int\" size=\"4\"/><Column id=\"INPT_ID\" type=\"string\" size=\"32\"/><Column id=\"INPT_DTTM\" type=\"undefined\" size=\"0\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCheckDept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDeptList", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDocInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"USED_FLAG\" type=\"string\" size=\"32\"/><Column id=\"MTG_END_TM\" type=\"string\" size=\"32\"/><Column id=\"MTG_DATE\" type=\"string\" size=\"32\"/><Column id=\"MTG_RESULT_TYPE\" type=\"string\" size=\"32\"/><Column id=\"MTG_RESULT_CN\" type=\"string\" size=\"32\"/><Column id=\"USER_ID\" type=\"string\" size=\"32\"/><Column id=\"CLSDR_MTG_AT\" type=\"string\" size=\"32\"/><Column id=\"ETC_MATTER\" type=\"string\" size=\"32\"/><Column id=\"HOST_NAME\" type=\"string\" size=\"32\"/><Column id=\"HOST_ID\" type=\"string\" size=\"32\"/><Column id=\"BIZ_CODE\" type=\"string\" size=\"32\"/><Column id=\"DOC_TITLE\" type=\"string\" size=\"32\"/><Column id=\"INPT_DTTM\" type=\"string\" size=\"32\"/><Column id=\"EXPIRE_DATE\" type=\"string\" size=\"32\"/><Column id=\"EDIT_INFO\" type=\"string\" size=\"32\"/><Column id=\"DOC_ID\" type=\"string\" size=\"32\"/><Column id=\"PDF_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"MTG_CNT\" type=\"int\" size=\"4\"/><Column id=\"WORK_NAME\" type=\"string\" size=\"32\"/><Column id=\"MTG_MTR_CN\" type=\"string\" size=\"32\"/><Column id=\"MTG_BEGIN_TM\" type=\"string\" size=\"32\"/><Column id=\"MTG_PLACE_CD\" type=\"string\" size=\"32\"/><Column id=\"MTG_SEQ\" type=\"int\" size=\"4\"/><Column id=\"READNG_AT\" type=\"string\" size=\"32\"/><Column id=\"HOST_TYPE\" type=\"string\" size=\"32\"/><Column id=\"USER_NAME\" type=\"string\" size=\"32\"/><Column id=\"HOST_WORK_NAME\" type=\"string\" size=\"32\"/><Column id=\"CHGE_ID\" type=\"string\" size=\"32\"/><Column id=\"MTG_AT\" type=\"string\" size=\"32\"/><Column id=\"CHGE_DTTM\" type=\"datetime\" size=\"17\"/><Column id=\"SYS_CODE\" type=\"string\" size=\"32\"/><Column id=\"PDF_ORIG_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"PDF_FILE_PATH_NM\" type=\"string\" size=\"32\"/><Column id=\"READNG_DATE\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUser", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserTree", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond2", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUbiDoc", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHistory", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staTitle01","10","0","738","43",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_Title");
            obj.set_text("최근 회의록");
            this.addChild(obj.name, obj);

            obj = new Div("divDetail","10","staTitle01:0",null,"300","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("#ffffff");
            obj.set_borderRadius("10px");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Static("staBg","0","0",null,null,"0","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("4");
            obj.set_background("linear-gradient(to right,#007f7d,#006db3)");
            this.divDetail.addChild(obj.name, obj);

            obj = new ImageViewer("imgSnap","27.35%","29","28.70563674321503%",null,null,"-15",null,null,null,null,this.divDetail.form);
            obj.set_taborder("0");
            obj.set_visible("true");
            obj.set_stretch("fit");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staTitle01","30.00","24","463","36",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_visible("true");
            obj.set_wordWrap("char");
            obj.set_fittocontents("height");
            obj.set_text("242423");
            obj.set_color("#ffffff");
            obj.set_font("bold 14px/normal \"noto\",\"Malgun Gothic\",\"Arial\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnView","5.32%","220","90","30",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("2");
            obj.set_text("미리보기");
            obj.set_cssclass("btn_TFDM_Save");
            obj.set_visible("true");
            obj.getSetter("btnType").set("E");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnSign","btnView:5.5","220","90","30",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("5");
            obj.set_text("열람서명");
            obj.set_cssclass("btn_TFDM_Save");
            obj.set_visible("false");
            obj.getSetter("btnType").set("E");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staDate","98.00","70","250","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("6");
            obj.set_visible("true");
            obj.set_wordWrap("char");
            obj.set_fittocontents("height");
            obj.set_text("242423");
            obj.set_color("#ffffff");
            obj.set_font("bold 12px/normal \"noto\",\"Malgun Gothic\",\"Arial\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staHost","98","staDate:10","250","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("7");
            obj.set_visible("true");
            obj.set_wordWrap("char");
            obj.set_fittocontents("height");
            obj.set_text("242423");
            obj.set_color("#ffffff");
            obj.set_font("bold 12px/normal \"noto\",\"Malgun Gothic\",\"Arial\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Button("btnEdit",null,"220","82","30","410",null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("8");
            obj.set_text("편집");
            obj.set_cssclass("btn_TFDM_Add");
            obj.set_visible("false");
            obj.getSetter("btnType").set("E");
            obj.set_background("#ffffff");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staUser","98","staHost:10","250","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("9");
            obj.set_visible("true");
            obj.set_wordWrap("char");
            obj.set_fittocontents("height");
            obj.set_text("242423");
            obj.set_color("#ffffff");
            obj.set_font("bold 12px/normal \"noto\",\"Malgun Gothic\",\"Arial\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Static("staPlace","98","staUser:10","250","27",null,null,null,null,null,null,this.divDetail.form);
            obj.set_taborder("10");
            obj.set_visible("true");
            obj.set_wordWrap("char");
            obj.set_fittocontents("height");
            obj.set_text("242423");
            obj.set_color("#ffffff");
            obj.set_font("bold 12px/normal \"noto\",\"Malgun Gothic\",\"Arial\"");
            this.divDetail.addChild(obj.name, obj);

            obj = new Grid("grdUser",null,"0","396",null,"1","0",null,null,null,null,this.divDetail.form);
            obj.set_taborder("3");
            obj.set_background("transparent");
            obj.set_binddataset("dsUser");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_LF_searchResult");
            obj.set_border("1px solid #cccccc");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"55\"/><Column size=\"339\"/></Columns><Rows><Row size=\"40\" band=\"head\"/><Row size=\"36\"/></Rows><Band id=\"head\"><Cell colspan=\"2\" text=\"참석자\" background=\"transparent\"/></Band><Band id=\"body\"><Cell expr=\"USER_NAME.substr(0,1)\" cssclass=\"expr:comp.parent.parent.parent.fnCssName(currow)\" textAlign=\"center\"/><Cell col=\"1\" expr=\"USER_NAME + &apos; &apos; + WORK_NAME\" textAlign=\"left\" color=\"white\"/></Band></Format></Formats>");
            this.divDetail.addChild(obj.name, obj);

            obj = new Div("divContents","10","divDetail:10",null,null,"20","50",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnEdit","57.109375%","divContents:10","90","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("보기");
            obj.set_cssclass("btn_TFDM_Save");
            obj.set_visible("false");
            obj.getSetter("btnType").set("E");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divDetail.form
            obj = new Layout("default","",0,0,this.divDetail.form,function(p){});
            this.divDetail.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divContents.form
            obj = new Layout("default","",0,0,this.divContents.form,function(p){});
            this.divContents.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,780,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("mtgMyListFm.xfdl", function() {
        /**
        *  나의 최근 열람 회의록
        *  @FileName 	mtgMyList.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2024/03/25
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/03/25			DXTOBE						최초생성
        *******************************************************************************
        */
        this.fvRedrawPos = -1;		// 사용안함
        this.fvSubItemW = 320;
        this.fvSubItemH = 140;
        /**
        * @function mtgListFm_onload  <br>
        * description 최근회의록
        */
        this.mtgListFm_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	this.divDetail.set_height(0);
        	this.resetScroll();
        	this.fnMtgListSearch();
        };

        /**
        * @function fnMtgListSearch  <br>
        * description 열람가능정보를 확인하기 위해 조직 구성 TREE 조회
        */
        this.fnMtgListSearch = function ()
        {
        	var nFullW = this.divContents.getOffsetWidth();
        	var nSubDivW = this.fvSubItemW;
        	var nCount = Math.floor(nFullW / nSubDivW);

        	this.dsCond.setColumn(0, "DEPT_CD", this.gfnGetUserInfo("DEPT_CD"));
        	this.dsCond.setColumn(0, "LIMIT", nCount * 3);

        	this.gfnSetMap("meet", "MyMeetList");

        	var strSvcId    = "selectMyMeetList";
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
        * @function fnReadUserSearch  <br>
        * description 열람가능 사용자조회
        */
        this.fnMeetUserSearch = function (v)
        {
        	this.gfnSetMap("meet", "MeetUserList");

        	var strSvcId    = "searchMeetUser";
        	var strSvcUrl   = "searchCommonBaseService.do";
        	var inData      = "dsCond=dsCond2 dsMap=dsMap";
        	var outData     = "dsUser=dsList";
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
        * @function fnOpenSendMailPop  <br>
        * description 메일발송팝업실행
        */
        this.fnOpenSendMailPop = function(sType)
        {
        	var nRow 	= this.dsDocInfo.rowposition;
        	var sTitle  = "메일발송";
        	var oArg    = { pvUUID:		this.dsDocInfo.getColumn(nRow, "DOC_ID"),
        					pvSysCode:	this.dsDocInfo.getColumn(nRow, "SYS_CODE"),
        					pvBizCode:	this.dsDocInfo.getColumn(nRow, "BIZ_CODE"),
        					pvType:		sType
        				  };
        	var oOption = {title:sTitle , titlebar:true};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("docFormMail", "meet::docmanager/mtgManagerMail.xfdl", oArg, sPopupCallBack, oOption);
        };
        /**
        * @function fnCallback  <br>
        * description 서비스콜백
        */
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "searchMeetUser":
        			this.divDetail.form.btnSign.set_enable(true);
        			this.dsUser.set_rowposition(-1);
        			var mtgType = this.dsList.getColumn(this.dsList.rowposition, "MTG_RESULT_TYPE");
        			if(mtgType == "R" || mtgType == "Z") {
        				this.divDetail.form.btnSign.set_visible(false);
        			} else {
        				var user = this.gfnGetUserInfo("USER_ID");
        				var nRow = this.dsUser.findRow("USER_ID", user);
        				if(nRow>=0) {
        					var state = this.dsUser.getColumn(nRow, "READ_STATUS");
        					this.divDetail.form.btnSign.set_visible(true);
        					if(state == "Z" || state == "R") {
        						this.divDetail.form.btnSign.set_enable(false);
        					}
        				} else {
        					this.divDetail.form.btnSign.set_visible(false);
        				}
        			}
        			break;
        		case "selectMyMeetList":
        			this.fnMakeSnapShot(); // 리스트생성
        			break;
        		default :
        	}
        };

        /**
        * @function fnPopupCallback  <br>
        * description 팝업코르백
        */
        this.fnPopupCallback = function (sPopupId, sRtn)
        {
        	switch(sPopupId) {
        		case "docFormNew":
        			this.fnRefreshMain();
        			break;
        		case "docFormEdit":
        			this.fnRefreshMain();
        			break;
        		case "selectHistory" :
        			// 발송건이 여러개인 경우 팝업선택
        			if(!this.gfnIsNull(sRtn)){
        				this.fnOpenSendMailPop("Y");
        			}
        			break
        		case "docFormMail" :
        			this.fnRefreshMain();
        			break
        		default:break;
        	}
        };

        /**
        * @function fnMakeSnapShot  <br>
        * description 회의록 리스트를 동적으로 생성
        */
        this.fnMakeSnapShot = function ()
        {
        	// 다 삭제
        	var comps = this.divContents.form.components;
        	for(var i=comps.length-1;i>=0;i--) {
        		if(comps[i].id != "img00") {
        			var comp = this.divContents.form.removeChild(comps[i].id);
        			comp.destroy();
        			comp = null;
        		}
        	}

        	var nFullW   = this.divContents.getOffsetWidth();
        	var nSubDivW = this.fvSubItemW;
        	var nSubDivH = this.fvSubItemH;
        	var nSubDivWSum = nSubDivW + 10;
        	var nCount = Math.floor(nFullW / nSubDivWSum);

        	var nBaseLeft = 0;
        	// line over시 left 재정렬
        	if(this.dsDocInfo.rowcount >= nCount) {
        		nBaseLeft = (nFullW - (nSubDivWSum*nCount)) / 2;
        	}
        	var nLeft = nBaseLeft;
        	var nTop = 0;
        	var nCnt = 1;

        	// 추가 버튼.
        	var sDivId = "divSub_add";
        	var sSubPage = "meet::mtgListItemSub.xfdl";
        	var objDiv = new Div(sDivId, nLeft, nTop, nSubDivW, nSubDivH, null, null);
        	objDiv.set_async(false);
        	objDiv.set_url(sSubPage);
        	this.divContents.form.addChild(sDivId, objDiv);
        	objDiv.show();

        	objDiv.form.fnInit("add", null, -1,
        					this.dsList.getColumn(this.dsList.rowposition, "SYS_CODE"),
        					this.dsList.getColumn(this.dsList.rowposition, "BIZ_CODE"));

        	nLeft += nSubDivW;
        	if(nCnt >= nCount) {
        		nCnt = 0;
        		nTop += nSubDivH;
        		nLeft = nBaseLeft;
        	}

        	// 목록
        	for(var i=0,len=this.dsList.rowcount;i<len;i++) {
        		nCnt++;
        		sDivId = "divSub_" + i;
        		var objDiv = new Div(sDivId, nLeft, nTop, nSubDivW, nSubDivH, null, null);
        		objDiv.set_async(false);
        		objDiv.set_url(sSubPage);
        		this.divContents.form.addChild(sDivId, objDiv);
        		objDiv.show();

        		objDiv.form.fnInit("", this.dsList, i);
        		nLeft += nSubDivW;
        		if(nCnt >= nCount) {
        			nCnt = 0;
        			nTop += nSubDivH;
        			nLeft = nBaseLeft;
        		}
        	}
        	this.divContents.form.resetScroll();
        };

        /**
        * @function fnMakeSnapShotResize  <br>
        * description resize 처리
        */
        this.fnMakeSnapShotResize = function ()
        {
        	var nFullW = this.divContents.getOffsetWidth();
        	var nSubDivW = this.fvSubItemW;
        	var nSubDivH = this.fvSubItemH;
        	var nSubDivWSum = nSubDivW + 10;
        	var nCount = Math.floor(nFullW / nSubDivWSum);

        	var nBaseLeft = 0;
        	// line over시 left 재정렬
        	if(this.dsDocInfo.rowcount >= nCount) {
        		nBaseLeft = (nFullW - (nSubDivWSum*nCount)) / 2;
        	}
        	var nLeft = nBaseLeft;
        	var nTop = 0;
        	var nCnt = 1;
        	var sDivId = "";
        	var i = 0;

        	sDivId = "divSub_add";
        	var objDiv = this.divContents.form[sDivId];
        	objDiv.set_left(nLeft);
        	objDiv.set_top(nTop);
        	nLeft += nSubDivW;
        	if(nCnt >= nCount) {
        		nCnt = 0;
        		nTop += nSubDivH;
        		nLeft = nBaseLeft;
        	}

        	for(i=0,len=this.dsDocInfo.rowcount;i<len;i++) {
        		nCnt++;
        		sDivId = "divSub_" + i;
        		var objDiv = this.divContents.form[sDivId];
        		objDiv.set_left(nLeft);
        		objDiv.set_top(nTop);
        		nLeft += nSubDivW;
        		if(nCnt >= nCount) {
        			nCnt = 0;
        			nTop += nSubDivH;
        			nLeft = nBaseLeft;
        		}
        	}

        	this.divContents.form.resetScroll();
        };

        /**
        * @function fnShowDetail  <br>
        * description 상단 보이기
        * @param v visible
        * @param s sys code
        * @param b biz code
        * @param d doc id
        * @param a 열람여부
        * @param i row index
        */
        this.fnShowDetail = function(v, s, b, d, a, i)
        {
        	this.divDetail.set_height((v?300:0));
        	if(v == true) {
        		this.dsList.set_rowposition(i);
        		var param = "S=" + s + "&B=" + b + "&D=" + d;
        		if(this.divDetail.form.imgSnap._param != param) {
        			this.divDetail.form.imgSnap._param = param;
        			this.divDetail.form.imgSnap.set_image("svcUrl::searchSnapshot.do?" + param);
        		}
        		this.divDetail.form.staTitle01.set_text(this.dsList.getColumn(i, "DOC_TITLE"));
        		var dt = "일시 : ";
        		dt += this.gfnGetDateFormat(this.dsList.getColumn(i, "MTG_DATE"),"",true);
        		dt += " " + this.gfnGetTimeFormat(this.dsList.getColumn(i, "MTG_BEGIN_TM").substr(8,4))
        						+ " ~ "
        						+ this.gfnGetTimeFormat(this.dsList.getColumn(i, "MTG_END_TM").substr(8,4));
        		this.divDetail.form.staDate.set_text(dt);

        		this.divDetail.form.staHost.set_text("주관 : " + this.dsList.getColumn(i, "HOST_NAME"));
        		this.divDetail.form.staUser.set_text("작성 : " + this.dsList.getColumn(i, "USER_NAME"));
        		this.divDetail.form.staPlace.set_text("장소 : " + this.dsList.getColumn(i, "PLACE_NAME"));
        		this.dsCond2.setColumn(0, "DOC_ID", d);
        		this.fnMeetUserSearch();

        		this.divDetail.form.btnView.set_enable(true);

        		var inId = this.dsList.getColumn(i, "INPT_ID");
        		if(inId == this.gfnGetUserInfo("USER_ID") || inId == "TESTER") {
        			//this.divDetail.form.btnSendMail.set_visible(true);
        			//this.divDetail.form.btnSign.set_visible(true);
        			var read = this.dsList.getColumn(i, "MTG_RESULT_TYPE");
        			if(read != "Z" && read != "P") {
        				this.divDetail.form.btnEdit.set_visible(true);
        			} else {
        				this.divDetail.form.btnEdit.set_visible(false);
        			}
        		} else {
        			this.divDetail.form.btnEdit.set_visible(false);
        		}
        	}
        	this.resetScroll();
        };

        this.grdList_oncellclick = function(obj,e)
        {
        	if(e.clickitem != "treeitembutton") {

        	}
        };

        /**
        * @function dsList_onrowposchanged  <br>
        * description row 변경시 재조회
        */
        this.dsList_onrowposchanged = function(obj,e)
        {
        	if(e.newrow >= 0) {
        		//this.fnShowDetail(false);
        		//this.staTitle01.set_text(obj.getColumn(e.newrow, "DT_NAME") + " 문서리스트");
        		//this.fnDocSearch();
        	}
        };
        /**
        * @function divSearch_btnSearch_onclick  <br>
        * description 조회영역 조회버튼
        */
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.fnDocSearch();
        };

        this.divSearch_Button00_onclick = function(obj,e)
        {
        	this.divSearch.form.divCalPeriod.form.fnSetValue("", "");
        };
        /**
        * @function docMain_onsize  <br>
        * description resize시 좌측화면 재조정
        */
        this.docMain_onsize = function(obj,e)
        {
        	this.fnMakeSnapShotResize();
        };

        this.searchEdit_onkeyup = function(obj,e)
        {
        	if(e.keycode == 13) {
        		this.fnDocSearch();
        	}
        };
        /**
        * @function divDetail_btnView_onclick  <br>
        * description 열람
        */
        this.divDetail_btnView_onclick = function(obj,e)
        {
        	var sTitle  = "회의록열람";
        	var nRow	= this.dsList.rowposition;
        	var oArg    = { pvUUID:		this.dsList.getColumn(nRow,"DOC_ID"),
        					pvSysCode:	this.dsList.getColumn(nRow,"SYS_CODE"),
        					pvBizCode:	this.dsList.getColumn(nRow,"BIZ_CODE")
        				  };
        	var oOption = {title:sTitle , titlebar:true};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("docView", "meet::mtgViewPu.xfdl", oArg, sPopupCallBack, oOption);
        };
        /**
        * @function divDetail_btnEdit_onclick  <br>
        * description 편집
        */
        this.divDetail_btnEdit_onclick = function(obj,e)
        {
        	var nRow	= this.dsList.rowposition;

        	this.getOwnerFrame().pvMainUrl = "meet::mtgMyListFm.xfdl";
        	this.getOwnerFrame().pvDocId = this.dsList.getColumn(nRow,"DOC_ID");
        	this.getOwnerFrame().pvSyscode = this.dsList.getColumn(nRow,"SYS_CODE");
        	this.getOwnerFrame().pvBizcode = this.dsList.getColumn(nRow,"BIZ_CODE");

        	this.getOwnerFrame().form.divWork.set_url("meet::mtgNewFm.xfdl");

        };
        /**
        * @function divDetail_btnSendMail_onclick  <br>
        * description 열람서명
        */
        this.divDetail_btnSendMail_onclick = function(obj,e)
        {
        	var sTitle  = "회의록열람";
        	var nRow	= this.dsList.rowposition;
        	var oArg    = { pvUUID:		this.dsList.getColumn(nRow,"DOC_ID"),
        					pvSysCode:	this.dsList.getColumn(nRow,"SYS_CODE"),
        					pvBizCode:	this.dsList.getColumn(nRow,"BIZ_CODE"),
        					pvPage:	this.dsList.getColumn(nRow,"PDF_PAGE")
        				  };
        	var oOption = {title:sTitle , titlebar:true};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("docView", "meet::mtgUserSignPu.xfdl", oArg, sPopupCallBack, oOption);
        };

        this.fnCssName = function(currow)
        {
        	var mod = currow%10;
        	return "lv" + mod;
        };

        this.fnRefresh = function()
        {
        	this.fnMtgListSearch();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.docMain_onsize,this);
            this.addEventHandler("ontimer",this.docMain_ontimer,this);
            this.addEventHandler("onload",this.mtgListFm_onload,this);
            this.divDetail.form.imgSnap.addEventHandler("onclick",this.imgSnap_onclick,this);
            this.divDetail.form.btnView.addEventHandler("onclick",this.divDetail_btnView_onclick,this);
            this.divDetail.form.btnSign.addEventHandler("onclick",this.divDetail_btnSendMail_onclick,this);
            this.divDetail.form.btnEdit.addEventHandler("onclick",this.divDetail_btnEdit_onclick,this);
            this.btnEdit.addEventHandler("onclick",this.btnEdit_onclick,this);
            this.dsList.addEventHandler("onrowposchanged",this.dsList_onrowposchanged,this);
        };
        this.loadIncludeScript("mtgMyListFm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
