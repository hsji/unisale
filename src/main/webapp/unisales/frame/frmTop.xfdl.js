(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmTop");
            this.set_titletext("TopFrame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,60);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LV\" type=\"STRING\" size=\"256\"/><Column id=\"HIPO_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MODULE_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("sta_TF_Bg");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("staLogo","0","0","210",null,null,"0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cursor("pointer");
            this.addChild(obj.name, obj);

            obj = new Button("btnPre","staLogo:24","15","20","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_tooltiptext("이전 화면목록으로");
            obj.set_cssclass("btn_TF_Prev");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnNext",null,"15","20","30","287",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_tooltiptext("다음 화면목록으로");
            obj.set_cssclass("btn_TF_Next");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSiteMap",null,"0","39",null,"49","0",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("btn_TF_MegaMenu");
            obj.set_text("");
            obj.set_tooltiptext("사이트맵");
            this.addChild(obj.name, obj);

            obj = new Button("btnUserSetting",null,"0","39",null,"btnSiteMap:0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_TF_User");
            obj.set_text("");
            obj.set_tooltiptext("설정");
            this.addChild(obj.name, obj);

            obj = new Button("btnLogout",null,"0","39",null,"10","0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_TF_Logout");
            obj.set_tooltiptext("로그아웃");
            this.addChild(obj.name, obj);

            obj = new Div("divTopBtn","btnPre:5","0",null,"60","btnNext:5",null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("staUserInfo",null,"20","142","22","130",null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("사업컨설팅팀 홍길동님");
            obj.set_cssclass("sta_TF_User");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("img00","12","9","168","38",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_image("url(\'theme://images/sta_LOG_bg2.png\')");
            obj.set_stretch("fixaspectratio");
            obj.set_background("transparent");
            obj.set_border("0px none");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdivUserInfo","943","120","360","200",null,null,null,null,null,null,this);
            obj.set_text("pdiv00");
            obj.set_visible("false");
            obj.set_cssclass("pdiv_POP_lev1");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","14","226","32",null,null,null,null,null,null,this.pdivUserInfo.form);
            obj.set_taborder("0");
            obj.set_text("Tuwaiq C&F Company");
            obj.set_cssclass("sta_POP_title");
            obj.set_padding("0px 10px 0px 24px");
            obj.set_font("normal 500 14px/normal \"Roboto Medium,RobotoWeb\"");
            obj.set_fittocontents("width");
            this.pdivUserInfo.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","0","312","24","86",null,null,null,null,null,null,this.pdivUserInfo.form);
            obj.set_taborder("1");
            obj.set_text("w\r\n24");
            obj.set_cssclass("guideTip");
            obj.set_visible("false");
            this.pdivUserInfo.addChild(obj.name, obj);

            obj = new Button("btnLogout",null,"16","73","28","24",null,null,null,null,null,this.pdivUserInfo.form);
            obj.set_taborder("2");
            obj.set_text("Logout");
            obj.set_cssclass("btn_POP_yes");
            this.pdivUserInfo.addChild(obj.name, obj);

            obj = new ImageViewer("imgv00","24","60","72","72",null,null,null,null,null,null,this.pdivUserInfo.form);
            obj.set_taborder("3");
            obj.set_text("NY");
            obj.set_cssclass("img_POP_user");
            this.pdivUserInfo.addChild(obj.name, obj);

            obj = new Static("staName","112","64","161","23",null,null,null,null,null,null,this.pdivUserInfo.form);
            obj.set_taborder("4");
            obj.set_text("Im Nayeon");
            obj.set_cssclass("font_18M,sta_font_black");
            obj.set_fittocontents("width");
            this.pdivUserInfo.addChild(obj.name, obj);

            obj = new Static("staEmail","112","86","205","23",null,null,null,null,null,null,this.pdivUserInfo.form);
            obj.set_taborder("5");
            obj.set_text("Nayeon1004@gmail.com");
            obj.set_cssclass("font_12,sta_font_gray2");
            obj.set_fittocontents("width");
            this.pdivUserInfo.addChild(obj.name, obj);

            obj = new Static("staPhone","112","110","120","23",null,null,null,null,null,null,this.pdivUserInfo.form);
            obj.set_taborder("6");
            obj.set_text("010-1234-1234");
            obj.set_cssclass("font_12,sta_font_gray2");
            obj.set_fittocontents("width");
            this.pdivUserInfo.addChild(obj.name, obj);

            obj = new Button("Button21_00_00_00","26","151","131","28",null,null,null,null,null,null,this.pdivUserInfo.form);
            obj.set_taborder("7");
            obj.set_text("비밀번호변경");
            obj.set_cssclass("btn_POP_edit");
            this.pdivUserInfo.addChild(obj.name, obj);

            obj = new Button("Button21_00_00_00_00","186","151","131","28",null,null,null,null,null,null,this.pdivUserInfo.form);
            obj.set_taborder("8");
            obj.set_text("사용자정보변경");
            obj.set_cssclass("btn_POP_edit");
            this.pdivUserInfo.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTopBtn.form
            obj = new Layout("default","",0,0,this.divTopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divTopBtn.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.divTopBtn.form
            obj = new Layout("Layout0","",0,0,this.divTopBtn.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.divTopBtn.form.addLayout(obj.name, obj);
            //-- Default Layout : this.pdivUserInfo.form
            obj = new Layout("default","",0,0,this.pdivUserInfo.form,function(p){});
            this.pdivUserInfo.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,60,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("TopFrame");

                p.Static00.set_taborder("0");
                p.Static00.set_cssclass("sta_TF_Bg");
                p.Static00.set_text("");
                p.Static00.move("0","0",null,null,"0","0");

                p.staLogo.set_taborder("1");
                p.staLogo.set_cursor("pointer");
                p.staLogo.move("0","0","210",null,null,"0");

                p.btnPre.set_taborder("2");
                p.btnPre.set_tooltiptext("이전 화면목록으로");
                p.btnPre.set_cssclass("btn_TF_Prev");
                p.btnPre.set_visible("false");
                p.btnPre.move("staLogo:24","15","20","30",null,null);

                p.btnNext.set_taborder("3");
                p.btnNext.set_tooltiptext("다음 화면목록으로");
                p.btnNext.set_cssclass("btn_TF_Next");
                p.btnNext.set_visible("false");
                p.btnNext.move(null,"15","20","30","287",null);

                p.btnSiteMap.set_taborder("8");
                p.btnSiteMap.set_cssclass("btn_TF_MegaMenu");
                p.btnSiteMap.set_text("");
                p.btnSiteMap.set_tooltiptext("사이트맵");
                p.btnSiteMap.move(null,"0","39",null,"49","0");

                p.btnUserSetting.set_taborder("4");
                p.btnUserSetting.set_cssclass("btn_TF_User");
                p.btnUserSetting.set_text("");
                p.btnUserSetting.set_tooltiptext("설정");
                p.btnUserSetting.move(null,"0","39",null,"btnSiteMap:0","0");

                p.btnLogout.set_taborder("5");
                p.btnLogout.set_cssclass("btn_TF_Logout");
                p.btnLogout.set_tooltiptext("로그아웃");
                p.btnLogout.move(null,"0","39",null,"10","0");

                p.divTopBtn.set_taborder("6");
                p.divTopBtn.move("btnPre:5","0",null,"60","btnNext:5",null);

                p.staUserInfo.set_taborder("7");
                p.staUserInfo.set_text("사업컨설팅팀 홍길동님");
                p.staUserInfo.set_cssclass("sta_TF_User");
                p.staUserInfo.move(null,"20","142","22","130",null);

                p.img00.set_taborder("9");
                p.img00.set_image("url(\'theme://images/sta_LOG_bg2.png\')");
                p.img00.set_stretch("fixaspectratio");
                p.img00.set_background("transparent");
                p.img00.set_border("0px none");
                p.img00.set_visible("false");
                p.img00.move("12","9","168","38",null,null);

                p.pdivUserInfo.set_text("pdiv00");
                p.pdivUserInfo.set_visible("false");
                p.pdivUserInfo.set_cssclass("pdiv_POP_lev1");
                p.pdivUserInfo.move("943","120","360","200",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Layout0","",500,50,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.staUserInfo.set_visible("false");
                p.staUserInfo.move(null,"102","142","22","89",null);

                p.btnUserSetting.set_visible("false");
                p.btnUserSetting.move(null,"88","39",null,"49","-88");

                p.staLogo.set_visible("false");
                p.staLogo.move("0","124","210",null,null,"-124");

                p.btnPre.move("14","10","20","30",null,null);

                p.divTopBtn.move("34","0",null,"50","btnNext:5",null);

                p.btnNext.move(null,"10","20","30","58",null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmTop.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	frmTop.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2020/11/24
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2020/11/24			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvFirstGap 		= 0;
        this.fvBtnGap 			= 0;
        this.fvBtnHeight 		= 60;
        this.fvTopBtnPrefix 	= "TOP_";

        this.objApp = nexacro.getApplication();
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        /**
         * @description 화면 오픈
         */
        this.form_onload = function(obj,e)
        {
        	this.divTopBtn.form.set_scrollbartype("none");

        	// 메뉴 데이터셋, 버튼 생성
        	this.fnLoad();
        	this.fnSetUserInfo();

        };

        this.fnSetUserInfo = function()
        {
        	//사용자 정보 static 세팅
        	var sUserNm = nexacro.getApplication().gdsUser.getColumn(0, "USER_NAME");
        	var sDeptNm = nexacro.getApplication().gdsUser.getColumn(0, "DEPT_KORN_NM");
        	var sEmail = nexacro.getApplication().gdsUser.getColumn(0, "EMAIL");
        	var sPhone = nexacro.getApplication().gdsUser.getColumn(0, "CELL_NUMB");
        	var sUserInfo = sDeptNm + " " + sUserNm + "님";
        	this.staUserInfo.set_text(sUserInfo);
        	this.pdivUserInfo.form.staTitle.set_text(sDeptNm);
        	this.pdivUserInfo.form.staName.set_text(sUserNm);
        	this.pdivUserInfo.form.staEmail.set_text(sEmail);
        	this.pdivUserInfo.form.staPhone.set_text(sPhone);
        	this.pdivUserInfo.form.imgv00.set_text(sUserNm.substr(0,1));
        };

        /**
         * @description 화면 리사이징
         */
        this.form_onsize = function(obj,e)
        {
        	// 메뉴버튼 Redraw
        	this.fnRedrawBtn();
        };
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //로그아웃로그
        this.fnLogoutLogTran = function ()
        {
        	var oDs = nexacro.getApplication().gdsLog;
        	oDs.clearData();
        	var nRow = oDs.addRow();
        	oDs.setColumn(nRow, "LOG_TYPE", "LOGOUT");

        	var strSvcId    = "saveLog";
        	var strSvcUrl   = "saveLog.do";
        	var inData      = "dsList=gdsLog:U";
        	var outData     = "";
        	var strArg      = "";				// System별 접속차단자 체크
        	var callBackFnc = "gfnStopCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc, true
        						, "Y"
        						);
        };
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //message
        this.fnMsgCallback = function (sMsgId, sRtn)
        {
        	switch(sMsgId) {
        		case "logout":
        			if(sRtn=="false"||sRtn==false||this.gfnIsNull(sRtn)){
        				return;
        			}
        			this.fnLogoutLogTran();
        			this.fnLogout();
        			break;
        	}
        };

        //transaction
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {

        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        //로그아웃
        this.fnLogout = function ()
        {
        	if(system.navigatorname == "nexacro")
        	{
        		nexacro.getApplication().exit();
        	}
        	else
        	{
        		window.top.location.reload(true);
        	}
        };

        /**
         * @description topmenu를 dsMenu로 copy
         */
        this.fnLoad = function ()
        {
        	var sFilter = this.FRAME_MENUCOLUMNS.menuLevel + " == '0' ";//&& " + this.FRAME_MENUCOLUMNS.useYn + " == 'Y'";
        	this.objApp.gdsMenu.filter(sFilter);

        	// Top 메뉴 복사
        	this.dsMenu.copyData(this.objApp.gdsMenu, true);
        	this.objApp.gdsMenu.filter("");
        	// Top 메뉴 셋팅
        	this.fnSetTopMenu();
        };

        /**
         * @description topmenu 셋팅
         */
        this.fnSetTopMenu = function ()
        {
        	for (var i = 0; i < this.dsMenu.getRowCount(); i++)
        	{
        		var sMenuId = this.dsMenu.getColumn(i, this.FRAME_MENUCOLUMNS.menuId);
        		var sMenuName = this.dsMenu.getColumn(i, this.FRAME_MENUCOLUMNS.menuNm);

        		this.fnCreateTopMenu(sMenuId, sMenuName, i);
        	}

        	// 메뉴버튼 Redraw
        	this.fnRedrawBtn();
        };

        /**
         * @description Top menu creation
         */
        this.fnCreateTopMenu = function (sTopId, sName, index)
        {
        	// Creating page button
        	var objBtn = new Button();
        	objBtn.init(this.fvTopBtnPrefix + sTopId, this.fnGetLeft(sTopId), 0, 130, this.fvBtnHeight, null, null);
        	this.divTopBtn.form.addChild(objBtn.name, objBtn);

        	objBtn.set_text(sName);
        	objBtn.set_cssclass("btn_TF_Menu");
        	objBtn.menuid = sTopId;
        	objBtn.show();

        	// 버튼 width 셋팅
        	objBtn.set_fittocontents("width");
        	var nWidth = objBtn.getOffsetWidth();
        	objBtn.set_fittocontents("none");
        	objBtn.set_width(nWidth + 20);

        	objBtn.setEventHandler("onclick", this.btnTopMenu_onclick, this);

        };

        /**
         * @description 이전 버튼을 기준으로 버튼위치 리턴
         */
        this.fnGetLeft = function (sTopId)
        {
        	var nCurRow = this.dsMenu.findRow(this.FRAME_MENUCOLUMNS.menuId, sTopId);
        	if (nCurRow == 0) return this.fvFirstGap;

        	var objPrevTab = this.fnFindObj(this.fvTopBtnPrefix + this.dsMenu.getColumn(nCurRow - 1, this.FRAME_MENUCOLUMNS.menuId));
        	return objPrevTab.getOffsetRight() + this.fvBtnGap;
        };

        /**
         * @description Top 메뉴 click
         */
        this.fnMenuClick = function(sMenuId)
        {
        	//this.objApp.gvFrmLeft.form.divLnb.form.grdMenu.set_enableevent(false);
        	//this.objApp.gvFrmLeft.form.divLnb.form.grdMenu.set_enableredraw(false);
        	this.objApp.gdsMenu.set_enableevent(false);
        	this.objApp.gvFrmLeft.form.dsMenu.set_enableevent(false);

        	this.objApp.gvFrmLeft.form.divLnb.form.grdMenu.set_binddataset("");
        	this.objApp.gvFrmLeft.form.divLnb.form.grdMenu.set_treeinitstatus("expand,all");

        	// 좌측 메뉴 만들기
        	this.objApp.gvFrmLeft.form.dsMenu.clearData();
        	var sModuleCd = this.dsMenu.lookup("MENU_ID", sMenuId, "MODULE_CD");
        	var sFilter = this.FRAME_MENUCOLUMNS.menuLevel + " != '0' && "
        				+ this.FRAME_MENUCOLUMNS.groupId + " == '" + sModuleCd + "' " ;
        				//+ this.FRAME_MENUCOLUMNS.useYn + " == 'Y'";
        	this.objApp.gdsMenu.filter(sFilter);
        	this.objApp.gvFrmLeft.form.dsMenu.copyData(this.objApp.gdsMenu, true);
        	this.objApp.gdsMenu.filter("");


        	// Left 메뉴 열린상태가 아닐 경우, 열어주기
        	if (this.objApp.gvFrmLeft.form.fnGetMenuOpenClose() != "open") {
        		this.objApp.gvFrmLeft.form.fnSetMenuOpenClose("open");
        	}
        	this.objApp.gvFrmLeft.form.divLnb.form.grdMenu.set_binddataset("dsMenu");
        	this.objApp.gvFrmLeft.form.dsMenu.set_enableevent(true);
        	this.objApp.gdsMenu.set_enableevent(true);

        	// 클릭한 Top 메뉴에 해당하는 SubMenu(Left) 셋팅
        	this.objApp.gvFrmLeft.form.fnChangeLeftMenu(sMenuId);

        	// My 메뉴 활성화 시 Left 메뉴 활성화
        	if (this.objApp.gvFrmLeft.form.divLnb.form.grdMyMenu.visible == true) {
        		this.objApp.gvFrmLeft.form.fnSetMenuType("menu");
        	}
        };

        /**
         * @description 버튼 redraw
         */
        this.fnRedrawBtn = function ()
        {
        	// 모든 버튼 체크
        	this.fnCheckShowBtnAll();

        	// spin 버튼 visible 처리
        	this.fnSetSpinBtnShow();
        };

        /**
         * @description 모든 버튼 체크
         */
        this.fnCheckShowBtnAll = function ()
        {
        	if (this.dsMenu.rowcount == 0) return;

        	var objTopFirst = this.fnFindObj(this.fvTopBtnPrefix + this.dsMenu.getColumn(0, this.FRAME_MENUCOLUMNS.menuId));
        	var objTopLast = this.fnFindObj(this.fvTopBtnPrefix + this.dsMenu.getColumn(this.dsMenu.rowcount - 1, this.FRAME_MENUCOLUMNS.menuId));

        	var nLeft = objTopFirst.getOffsetLeft();
        	var nRight = objTopLast.getOffsetRight();

        	if (this.divTopBtn.getOffsetWidth() >= (nRight - nLeft))
        	{
        		this.fnMoveFirst(0);
        		return;
        	}
        };

        /**
         * @description menu tab 버튼 첫번째 이동 함수
         */
        this.fnMoveFirst = function (nMoveIdx)
        {
        	var nIndex;
        	var sTopId;
        	var objTop;
        	var objTopFirst;

        	nIndex = this.fnGetFirstTopIndex();

        	if (nIndex < 0) return;

        	if (nMoveIdx < 0) return;

        	if (nMoveIdx >= this.dsMenu.rowcount) return;

        	sTopId = this.dsMenu.getColumn(nIndex, this.FRAME_MENUCOLUMNS.menuId);
        	objTopFirst = this.fnFindObj(this.fvTopBtnPrefix + sTopId);

        	sTopId = this.dsMenu.getColumn(nMoveIdx, this.FRAME_MENUCOLUMNS.menuId);
        	objTop = this.fnFindObj(this.fvTopBtnPrefix + sTopId);

        	var nShiftPos = objTop.getOffsetLeft() - objTopFirst.getOffsetLeft();
        	for (var i = 0; i < this.dsMenu.rowcount; i++)
        	{
        		sTopId = this.dsMenu.getColumn(i, this.FRAME_MENUCOLUMNS.menuId);
        		objTop = this.fnFindObj(this.fvTopBtnPrefix + sTopId);
        		objTop.move(objTop.getOffsetLeft() - nShiftPos, objTop.getOffsetTop());
        	}
        };

        /**
         * @description menu top 버튼 첫번째 index 가져오는 함수
         */
        this.fnGetFirstTopIndex = function ()
        {
        	for (var i=0; i < this.dsMenu.rowcount;i++)
        	{
        		var sTopID  = this.dsMenu.getColumn(i, this.FRAME_MENUCOLUMNS.menuId);
        		var objTop = this.fnFindObj(this.fvTopBtnPrefix + sTopID);
        		if (this.gfnIsNull(objTop) == false)
        		{
        			if (0 <= objTop.getOffsetLeft()) return i;
        		}
        	}
        	return -1;
        };

        /**
         * @description MDI spin 버튼 visible 처리
         */
        this.fnSetSpinBtnShow = function ()
        {
        	var objTop;

        	if (this.dsMenu.rowcount == 0) {
        		this.btnPre.set_visible(false);
        		this.btnNext.set_visible(false);
        		return;
        	}

        	objTop = this.fnFindObj(this.fvTopBtnPrefix + this.dsMenu.getColumn(this.dsMenu.rowcount - 1, this.FRAME_MENUCOLUMNS.menuId));
        	if (this.divTopBtn.getOffsetWidth() < objTop.getOffsetRight()) {
        		this.btnNext.set_visible(true);
        	} else {
        		this.btnNext.set_visible(false);
        	}

        	objTop = this.fnFindObj(this.fvTopBtnPrefix + this.dsMenu.getColumn(0, this.FRAME_MENUCOLUMNS.menuId));
        	if (objTop.getOffsetLeft() < 0) {
        		this.btnPre.set_visible(true);
        	} else {
        		this.btnPre.set_visible(false);
        	}
        };

        /**
         * @description menu tab 찾는 함수
         */
        this.fnFindObj = function (sId)
        {
        	return this.divTopBtn.form.components[sId];
        };

        /**
         * @description 메뉴버튼 활성화
         */
        this.fnSetActiveBtn = function (sMenuId)
        {
        	var objMenu;

        	for (var i = 0; i < this.dsMenu.getRowCount(); i++)
        	{
        		objMenu = this.fnFindObj(this.fvTopBtnPrefix + this.dsMenu.getColumn(i, this.FRAME_MENUCOLUMNS.menuId));
        		if (sMenuId == this.dsMenu.getColumn(i, this.FRAME_MENUCOLUMNS.menuId)) {
        			objMenu.set_cssclass("btn_TF_MenuS");
        		} else {
        			objMenu.set_cssclass("btn_TF_Menu");
        		}
        	}
        };

        /**
         * @description 메가메뉴 popupCallback 함수
         */
        this.fnsiteMapPopupCallback = function (sPopupId, sRtn)
        {
        	switch (sPopupId)
        	{
        		case "siteMap" :
        			if (!this.gfnIsNull(sRtn))
        			{
        				// 콜백된 메뉴 ID 따라서 Left, mdi, work 메뉴 호출
        				this.objApp.gvFrmMain.form.fnSetLinkMenu(sRtn);
        			}
        			break;
        		default:
        			break;
        	}
        };

        // /*******************************************************************************************************************************
        //  * 각 COMPONENT 별 EVENT 영역
        // *******************************************************************************************************************************/
        /**
         * @description Logo click
         */
        this.staLogo_onclick = function(obj,e)
        {
        	// 메인으로 이동
        	this.gfnSetMain();
        };

        /**
         * @description Top 메뉴 버튼 click
         */
        this.btnTopMenu_onclick = function(obj,e)
        {
        	var sMenuId = obj.menuid;

        	if (this.gfnIsNull(sMenuId)) return;

        	// 선택된 메뉴버튼 css 활성화
        	this.fnSetActiveBtn(sMenuId);

        	// Top 메뉴 click
        	this.fnMenuClick(sMenuId);
        }

        /**
         * @description 메뉴 ◀ 버튼 click
         */
        this.btnPre_onclick = function (obj, e)
        {
        	this.fnMoveFirst(this.fnGetFirstTopIndex() - 1);

        	// 메뉴버튼 Redraw
        	this.fnRedrawBtn();
        };

        /**
         * @description 메뉴 ▶ 버튼 click
         */
        this.btnNext_onclick = function (obj, e)
        {
        	this.fnMoveFirst(this.fnGetFirstTopIndex() + 1);

        	// 메뉴버튼 Redraw
        	this.fnRedrawBtn();
        };

        //로그아웃
        this.btnLogout_onclick = function(obj,e)
        {
        	this.gfnAlert("confirm.logout", "", "logout", "fnMsgCallback");
        };


        this.btnUserSetting_onclick = function(obj,e)
        {
        	this.pdivUserInfo.trackPopupByComponent(obj, -314, obj.getOffsetHeight());
        	return;

        	var sTitle = "사용자 환경 설정 팝업";
        	var objArg = {};

        	var objOption = {title:sTitle,
        					titlebar:true
        					};
        	var sPopupCallBack = "fnUserSettingCallback";
        	this.gfnOpenPopup( "frmUserSetting", "frame::frmUserSetting.xfdl", objArg, sPopupCallBack, objOption);
        };

        this.frmTop_onlayoutchanged = function(obj,e)
        {
        	//trace("frmTop_onlayoutchanged : " +  e.newlayout);
        	if(e.newlayout == "default"){
        		this.staLogo.set_visible(true);
        		this.staUserInfo.set_visible(true);
        		this.btnUserSetting.set_visible(true);
        	}
        	this.fnSetUserInfo();
        };

        /**
         * @description Mega Menu 클릭 이벤트
         */
        this.btnSiteMap_onclick = function(obj,e)
        {
        	var nCnt = 1;			//Grid 생성개수
        	var nPadding = 200;		//frmSiteMap.xfdl 좌우 여백
        	var nGridWidth = 180;	//frmSiteMap.xfdl 생성할 Grid 너비
        	var nWidth = this.objApp.mainframe.getOffsetWidth();

        	if (nWidth > (nGridWidth + nPadding))
        	{
        		nCnt = Math.floor((nWidth - nPadding) / nGridWidth);
        	}

        	var oArg   = {pvCnt: nCnt};
        	var nPopWidth = nGridWidth * nCnt + nPadding;
        	var nPopHeight = this.objApp.mainframe.getOffsetHeight();
        	if (nPopWidth > 1280)
        	{
        		nPopWidth = 1280;	//frmSiteMap.xfdl 최대 사이즈
        	}

        	var objOption = {
        				//	resize:true,
        					dragmovetype : "none",
        					width : nPopWidth,
        					height : nPopHeight};
        	var sPopupCallBack = "fnsiteMapPopupCallback";
        	this.gfnOpenPopup( "siteMap", "frame::frmSiteMap.xfdl", oArg, sPopupCallBack, objOption);
        };

        // 비번변경
        this.pdivUserInfo_Button21_00_00_00_onclick = function(obj,e)
        {
        	var sTitle = "비밀번호 변경";
        	var objArg = {};

        	var objOption = {title:sTitle,
        					titlebar:true
        					};
        	var sPopupCallBack = "fnUserSettingCallback";
        	this.gfnOpenPopup( "frmUserSetting", "frame::frmUserSetting.xfdl", objArg, sPopupCallBack, objOption);
        	this.pdivUserInfo.closePopup();
        };

        this.pdivUserInfo_Button21_00_00_00_00_onclick = function(obj,e)
        {
        	var sTitle = "사용자정보 변경";
        	var objArg   = {pvEmpNo : nexacro.getApplication().gdsUser.getColumn(0, "EMP_NO")};
        	var objOption = {title:sTitle,
        					titlebar:true
        					};
        	var sPopupCallBack = "fnUserSettingCallback";
        	this.gfnOpenPopup( "frmUserSetting", "sytm::org/orgUserDetailPu.xfdl", objArg, sPopupCallBack, objOption);
        	this.pdivUserInfo.closePopup();
        };
        // logout
        this.pdivUserInfo_btnLogout_onclick = function(obj,e)
        {
        	this.btnLogout.click();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.addEventHandler("onlayoutchanged",this.frmTop_onlayoutchanged,this);
            this.staLogo.addEventHandler("onclick",this.staLogo_onclick,this);
            this.btnPre.addEventHandler("onclick",this.btnPre_onclick,this);
            this.btnNext.addEventHandler("onclick",this.btnNext_onclick,this);
            this.btnSiteMap.addEventHandler("onclick",this.btnSiteMap_onclick,this);
            this.btnUserSetting.addEventHandler("onclick",this.btnUserSetting_onclick,this);
            this.btnLogout.addEventHandler("onclick",this.btnLogout_onclick,this);
            this.divTopBtn.addEventHandler("onclick",this.div_Tab_onclick,this);
            this.pdivUserInfo.form.btnLogout.addEventHandler("onclick",this.pdivUserInfo_btnLogout_onclick,this);
            this.pdivUserInfo.form.Button21_00_00_00.addEventHandler("onclick",this.pdivUserInfo_Button21_00_00_00_onclick,this);
            this.pdivUserInfo.form.Button21_00_00_00_00.addEventHandler("onclick",this.pdivUserInfo_Button21_00_00_00_00_onclick,this);
        };
        this.loadIncludeScript("frmTop.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
