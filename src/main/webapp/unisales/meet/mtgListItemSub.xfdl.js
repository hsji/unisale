(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("docManagerItemSub");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(320,140);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDocInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"USED_FLAG\" type=\"string\" size=\"32\"/><Column id=\"MTG_END_TM\" type=\"string\" size=\"32\"/><Column id=\"MTG_DATE\" type=\"string\" size=\"32\"/><Column id=\"MTG_RESULT_TYPE\" type=\"string\" size=\"32\"/><Column id=\"MTG_RESULT_CN\" type=\"string\" size=\"32\"/><Column id=\"USER_ID\" type=\"string\" size=\"32\"/><Column id=\"CLSDR_MTG_AT\" type=\"string\" size=\"32\"/><Column id=\"ETC_MATTER\" type=\"string\" size=\"32\"/><Column id=\"HOST_NAME\" type=\"string\" size=\"32\"/><Column id=\"HOST_ID\" type=\"string\" size=\"32\"/><Column id=\"BIZ_CODE\" type=\"string\" size=\"32\"/><Column id=\"DOC_TITLE\" type=\"string\" size=\"32\"/><Column id=\"INPT_DTTM\" type=\"string\" size=\"32\"/><Column id=\"EXPIRE_DATE\" type=\"string\" size=\"32\"/><Column id=\"EDIT_INFO\" type=\"string\" size=\"32\"/><Column id=\"DOC_ID\" type=\"string\" size=\"32\"/><Column id=\"PDF_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"MTG_CNT\" type=\"int\" size=\"4\"/><Column id=\"WORK_NAME\" type=\"string\" size=\"32\"/><Column id=\"MTG_MTR_CN\" type=\"string\" size=\"32\"/><Column id=\"MTG_BEGIN_TM\" type=\"string\" size=\"32\"/><Column id=\"MTG_PLACE_CD\" type=\"string\" size=\"32\"/><Column id=\"MTG_SEQ\" type=\"int\" size=\"4\"/><Column id=\"READNG_AT\" type=\"string\" size=\"32\"/><Column id=\"HOST_TYPE\" type=\"string\" size=\"32\"/><Column id=\"USER_NAME\" type=\"string\" size=\"32\"/><Column id=\"HOST_WORK_NAME\" type=\"string\" size=\"32\"/><Column id=\"CHGE_ID\" type=\"string\" size=\"32\"/><Column id=\"MTG_AT\" type=\"string\" size=\"32\"/><Column id=\"CHGE_DTTM\" type=\"datetime\" size=\"17\"/><Column id=\"SYS_CODE\" type=\"string\" size=\"32\"/><Column id=\"PDF_ORIG_FILE_NM\" type=\"string\" size=\"32\"/><Column id=\"PDF_FILE_PATH_NM\" type=\"string\" size=\"32\"/><Column id=\"READNG_DATE\" type=\"string\" size=\"32\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsHistory", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_ID\" type=\"string\" size=\"32\"/><Column id=\"SEND_MESSAGE\" type=\"string\" size=\"32\"/><Column id=\"SEND_TITLE\" type=\"string\" size=\"32\"/><Column id=\"SEND_TYPE\" type=\"string\" size=\"32\"/><Column id=\"USER_MAILADDR\" type=\"string\" size=\"32\"/><Column id=\"CERT_TYPE\" type=\"string\" size=\"32\"/><Column id=\"DRAWIMAGE_FLAG\" type=\"string\" size=\"32\"/><Column id=\"REFIMAGE_FLAG\" type=\"string\" size=\"32\"/><Column id=\"SEND_DTTM\" type=\"string\" size=\"32\"/><Column id=\"USER_NAME\" type=\"string\" size=\"32\"/><Column id=\"EXPIREMAIL_DATE\" type=\"string\" size=\"32\"/><Column id=\"USER_PHONE\" type=\"string\" size=\"32\"/><Column id=\"DRAWSIGN_FLAG\" type=\"string\" size=\"32\"/><Column id=\"SEND_SEQ\" type=\"int\" size=\"4\"/><Column id=\"SEND_ID\" type=\"string\" size=\"32\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsReadUser", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_GB\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("staBg","6","7",null,null,"6","7",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_visible("true");
            obj.set_cssclass("sta_meet_item");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","30.00","14","264","33",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_wordWrap("char");
            obj.set_fittocontents("height");
            obj.set_text("테스트 제목입니다.");
            obj.set_cssclass("sta_meet_itemtitle");
            this.addChild(obj.name, obj);

            obj = new Div("divItem","0","staTitle01:17",null,"35","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("staUser","22.00","4","64","24",null,null,null,null,null,null,this.divItem.form);
            obj.set_taborder("0");
            obj.set_background("#000000");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_borderRadius("5px");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            obj.set_wordWrap("none");
            this.divItem.addChild(obj.name, obj);

            obj = new Static("staHost","staUser:7","4","64","24",null,null,null,null,null,null,this.divItem.form);
            obj.set_taborder("1");
            obj.set_background("#007A56");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_borderRadius("5px");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            this.divItem.addChild(obj.name, obj);

            obj = new Static("staPlace","staHost:7","4","77","24",null,null,null,null,null,null,this.divItem.form);
            obj.set_taborder("2");
            obj.set_background("#AE650B");
            obj.set_color("#ffffff");
            obj.set_textAlign("center");
            obj.set_borderRadius("5px");
            obj.set_visible("true");
            obj.set_fittocontents("width");
            obj.set_wordWrap("none");
            this.divItem.addChild(obj.name, obj);

            obj = new Static("staTime","30.00","102","262","27",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_visible("false");
            obj.set_wordWrap("char");
            obj.set_text("2024-03-12");
            obj.set_cssclass("sta_meet_itemdate");
            this.addChild(obj.name, obj);

            obj = new Button("btnAdd","117","33","77","68",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_ProjectCardAdd");
            obj.set_visible("false");
            obj.getSetter("btnType").set("N");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divItem.form
            obj = new Layout("default","",0,0,this.divItem.form,function(p){});
            this.divItem.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",320,140,this,function(p){});
            obj.set_horizontalgap("0");
            obj.set_mobileorientation("landscape");
            obj.set_spacing("0px");
            obj.set_tabletemplate("1* / 1*");
            obj.set_verticalgap("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("mtgListItemSub.xfdl", function() {
        /**
        *  문서 스냅샵 - docMain에서 호출
        *  @FileName 	mtgManagerItemSub.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2024/03/04
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/03/04			DXTOBE						최초생성
        *******************************************************************************
        */
        this.fvIndex = -1;
        this.fvType = "";
        this.fvSysCode = "";
        this.fvBizCode = "";
        this.fvAuth = false;
        this.docManagerItemSub_onload = function(obj,e)
        {
        };

        /**
        * @function fnReadUserSearch  <br>
        * description 열람가능 사용자조회
        */
        // this.fnReadUserSearch = function (v)
        // {
        // 	this.gfnSetMap("meet", "MeetReadUserList");
        //
        // 	var strSvcId    = "searchReadUser";
        // 	var strSvcUrl   = "searchCommonBaseService.do";
        // 	var inData      = "dsCond=dsCond dsMap=dsMap";
        // 	var outData     = "dsReadUser=dsList";
        // 	var strArg      = "";
        // 	var callBackFnc = "fnCallback";
        //
        // 	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        // 						strSvcUrl , 	// trabsaction을 요청할 주소
        // 						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        // 						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        // 						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        // 						callBackFnc); 	// 통신방법 정의 [생략가능]
        // };
        /**
        * @function fnDocDetete  <br>
        * description 삭제
        */
        this.fnDocDetete = function ()
        {
        	var strSvcId    = "deleteDoc";
        	var strSvcUrl   = "deleteDoc.do";
        	var inData      = "dsCond=dsCond";
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
        		case "searchReadUser":
        			var userId = this.gfnGetUserInfo("USER_ID");
        			var nRow = this.dsReadUser.findRow("USER_ID", userId);
        			if(nRow>=0) {
        				this.fvAuth = true;
        				this.divItem.form.sta00_00_00.set_visible(true);
        			} else {
        				this.findParent();
        			}
        			break;
        		case "deleteDoc":
        			var pThis = this;
        			this.gfnAlert("msg.delete.success", [], "deldoc", "fnMsgCallback" );
        			break;
        	}
        };

        this.getParentRow = function (arrList, grdUser, dsUser, row)
        {
        	var nRow = grdUser.getTreeParentRow(row, true);
        	if(nRow >= 0) {
        		arrList.push(dsUser.getColumn(nRow, "DEPT_CD"));
        		return this.getParentRow(arrList, grdUser, dsUser, nRow);
        	}
        };
        /**
        * @function findParent  <br>
        * description 조직 dataset을 찾아 열람권한 찾아
        */
        this.findParent = function ()
        {
        	var parent = this.parent.parent.parent.parent;
        	var grdUser = parent.grdUserList;	// 조직그리드
        	var dsUser = parent.dsUserTree;		// 조직 dataset;
        	var userId = this.gfnGetUserInfo("USER_ID");
        	var nRow = this.dsUser.findRow("USER_ID", userId);
        	var arrList = [];
        	if(nRow>=0) {
        		this.getParentRow(arrList, grdUser, dsUser, nRow);
        	}

        	if(arrList.length>0) {
        		for(var i=0,len=this.dsReadUser.rowcount;i<len;i++) {
        			var deptcd = this.dsReadUser.getColumn(i, "USER_ID");
        			if(arrList.indexOf(deptcd)>=0) {
        				this.fvAuth = true;
        				this.divItem.form.sta00_00_00.set_visible(true);
        				return;
        			}
        		}
        	}

        };
        /**
        * @function fnPopupCallback  <br>
        * description 팝업코르백
        */
        this.fnPopupCallback = function (sPopupId, sRtn)
        {
        	switch(sPopupId) {
        		case "docFormEdit":
        			this.fnRefreshMain();
        			break;
        		case "mgtTreePu":
        			if( !this.gfnIsNull(sRtn) ){
        				var aRtn= sRtn.split("|");

        				this.getOwnerFrame().pvMainUrl = "meet::mtgMyListFm.xfdl";
        				this.getOwnerFrame().pvDocId = null;
        				this.getOwnerFrame().pvSyscode = aRtn[3];
        				this.getOwnerFrame().pvBizcode = aRtn[4];

        				this.getOwnerFrame().form.divWork.set_url("meet::mtgNewFm.xfdl");
        			}
        			break;
        		default:break;
        	}
        };


        this.fnMsgCallback = function (sPopupId, sRtn)
        {
        	if( sPopupId == "deleteMsg"){
        		if(this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false){
        			return;
        		}
        		this.fnDocDetete();
        	} if( sPopupId == "deldoc"){
        		this.fnRefreshMain();
        	}
        };
        /**
        * @function fnInit  <br>
        * description docMain에서 생성 후 최초 호출
        */
        this.fnInit = function(sType, objDocDs, nDocIndex, sysCode, bizCode)
        {
        	this.fvSysCode = sysCode;
        	this.fvBizCode = bizCode;

        	if(objDocDs) {
        		this.fvIndex = nDocIndex;
        		this.dsDocInfo.copyData(objDocDs);
        		this.dsDocInfo.clearData();
        		this.dsDocInfo.addRow();
        		this.dsDocInfo.applyChange();
        		this.dsDocInfo.copyRow(0, objDocDs, nDocIndex);
        		this.dsCond.setColumn(0, "DOC_ID", this.dsDocInfo.getColumn(0, "DOC_ID"));
        		this.divItem.form.staUser.set_text("  " + this.dsDocInfo.getColumn(0, "USER_NAME") + "  ");
        		this.divItem.form.staHost.set_text("  " + this.dsDocInfo.getColumn(0, "HOST_NAME") + "  ");
        		this.divItem.form.staPlace.set_text("  " + this.dsDocInfo.getColumn(0, "PLACE_NAME") + "  ");

        // 		var inId = this.dsDocInfo.getColumn(0, "INPT_ID");
        // 		if(inId == this.gfnGetUserInfo("USER_ID")) {
        // 			this.fvAuth = true;
        // 			this.divItem.form.sta00_00_00.set_visible(true);
        // 		}
        		//this.fnReadUserSearch();
        		this.divItem.form.resetScroll();
        	}
        	this.fnSetVisible(sType);
        };

        /**
        * @function fnSetVisible  <br>
        * description visible 처리
        */
        this.fnSetVisible = function(v)
        {
        	if(v == "add") {
        		this.fvType = v;
        		this.btnAdd.set_visible(true);
        	} else {
        		var comps = this.components;
        		for(var i=0,len=comps.length;i<len;i++) {
        			if(comps[i].name != "btnAdd") {
        				comps[i].set_visible(true);
        			}
        		}
        		// title
        		if(this.gfnIsNull(this.dsDocInfo.getColumn(0, "DOC_TITLE")) == false) {
        			this.staTitle01.set_text(this.dsDocInfo.getColumn(0, "DOC_TITLE"));
        		}
        		var date = this.gfnGetDateFormat(this.dsDocInfo.getColumn(0, "MTG_DATE"),"-",false);
        		var sTime = this.dsDocInfo.getColumn(0, "MTG_BEGIN_TM").substr(8,2) + ":" +
        					this.dsDocInfo.getColumn(0, "MTG_BEGIN_TM").substr(10,2) + "~" +
        					this.dsDocInfo.getColumn(0, "MTG_END_TM").substr(8,2) + ":" +
        					this.dsDocInfo.getColumn(0, "MTG_END_TM").substr(10,2);
        		this.staTime.set_text(date + "  " + sTime);
        	}
        };

        /**
        * @function btnEdit_onclick  <br>
        * description 신규편집/수정
        */
        this.btnEdit_onclick = function(obj,e)
        {
        	// 회의 그룹선택
        	this.fnSelectGroup();

        };

        this.fnSelectGroup = function()
        {
        	var sTitle  = "회의그룹 선택";
        	var oArg    = {
        		pvSearchValue:""
        		,pvSearchScopeCd:""
        	};
        	var oOption = {title:sTitle
        				  ,titlebar:true};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("mgtTreePu", "meet::mtgTreePu.xfdl", oArg, sPopupCallBack, oOption);
        };

        /**
        * @function fnRefreshMain  <br>
        * description 부모창 재조회
        */
        this.fnRefreshMain = function() {
        	this.parent.parent.parent.parent.fnDocSearch(true);
        };

        /**
        * @function itemclick  <br>
        * description 부모창 상단 상세정보 보이기
        */
        this.itemclick = function(obj,e)
        {
        	if(this.fvType == "add") {
        		this.parent.parent.parent.parent.fnShowDetail(false);
        	} else {
        		var s = this.dsDocInfo.getColumn(0, "SYS_CODE");
        		var b = this.dsDocInfo.getColumn(0, "BIZ_CODE");
        		var d = this.dsDocInfo.getColumn(0, "DOC_ID");
        		this.parent.parent.parent.parent.fnShowDetail(true, s, b, d, this.fvAuth, this.fvIndex);
        	}
        };

        /**
        * @function divItem_onclick  <br>
        * description 부모창 상단 상세정보 보이기
        */
        this.divItem_onclick = function(obj,e)
        {
        	this.itemclick();
        };
        /**
        * @function docManagerItemSub_onmousemove  <br>
        * description Mouse move css process
        */
        this.docManagerItemSub_onmousemove = function(obj,e)
        {
        	if(this.fvType != "add") {
        		this.staBg.set_cssclass("sta_meet_item_O");
        		this.staTitle01.set_cssclass("sta_meet_itemtitle_O");
        		this.staTime.set_cssclass("sta_meet_itemdate_O");
        		this.set_cursor("pointer");
        	}
        };
        /**
        * @function docManagerItemSub_onmousemove  <br>
        * description Mouse move css process
        */
        this.docManagerItemSub_onmouseleave = function(obj,e)
        {
        	this.staBg.set_cssclass("sta_meet_item");
        	this.staTitle01.set_cssclass("sta_meet_itemtitle");
        	this.staTime.set_cssclass("sta_meet_itemdate");
        	this.set_cursor("none");
        };

        this.fnRefresh = function()
        {
        	this.parent.parent.parent.parent.fnRefresh();
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.docManagerItemSub_onload,this);
            this.addEventHandler("onmousemove",this.docManagerItemSub_onmousemove,this);
            this.addEventHandler("onmouseleave",this.docManagerItemSub_onmouseleave,this);
            this.staBg.addEventHandler("onclick",this.itemclick,this);
            this.staTitle01.addEventHandler("onclick",this.itemclick,this);
            this.divItem.addEventHandler("onclick",this.divItem_onclick,this);
            this.divItem.form.staUser.addEventHandler("onclick",this.itemclick,this);
            this.divItem.form.staHost.addEventHandler("onclick",this.itemclick,this);
            this.divItem.form.staPlace.addEventHandler("onclick",this.itemclick,this);
            this.staTime.addEventHandler("onclick",this.itemclick,this);
            this.btnAdd.addEventHandler("onclick",this.btnEdit_onclick,this);
        };
        this.loadIncludeScript("mtgListItemSub.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
