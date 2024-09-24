(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmMdi");
            this.set_titletext("MdiFrame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1070,42);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsTab", this);
            obj._setContents("<ColumnInfo><Column id=\"tabId\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"winId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsContextMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"name\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"name\">Close All But This</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"name\">Close Tabs to the Right</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTabCopy", this);
            obj._setContents("<ColumnInfo><Column id=\"tabId\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"winId\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOpenMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"WIN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","0",null,null,"1","0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_MDI_Line");
            this.addChild(obj.name, obj);

            obj = new Button("btnLeftMenuShowHide","0","0","20","42",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_MDI_Open");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnHome","btnLeftMenuShowHide:0","0","42","41",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("btn_MDI_Home");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnVoc",null,"6","23","31","10",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_tooltiptext("VOC등록");
            obj.set_cssclass("btn_MDI_Voc");
            this.addChild(obj.name, obj);

            obj = new Static("sta00",null,"15","1","14","btnVoc:5",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_MDI_Line");
            this.addChild(obj.name, obj);

            obj = new Button("btnHorizontal",null,"6","23","31","sta00:5",null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_cssclass("btn_MDI_Horizontal");
            obj.set_tooltiptext("vertical");
            this.addChild(obj.name, obj);

            obj = new Button("btnVertical",null,"6","23","31","btnHorizontal:0",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_cssclass("btn_MDI_Vertical");
            obj.set_tooltiptext("horizontal");
            this.addChild(obj.name, obj);

            obj = new Button("btnCascade",null,"6","23","29","btnVertical:0",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("btn_MDI_Restore");
            obj.set_tooltiptext("cascade");
            this.addChild(obj.name, obj);

            obj = new Button("btnMaximize",null,"6","23","31","btnCascade:0",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_cssclass("btn_MDI_Max");
            obj.set_tooltiptext("최대화");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_00",null,"15","1","14","btnMaximize:5",null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_cssclass("sta_MDI_Line");
            this.addChild(obj.name, obj);

            obj = new Button("btnCloseAll",null,"6","23","31","sta00_00:5",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_tooltiptext("전체닫기");
            obj.set_cssclass("btn_MDI_CloseAll");
            this.addChild(obj.name, obj);

            obj = new Button("btnList",null,"6","23","31","btnCloseAll:0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_tooltiptext("열린메뉴");
            obj.set_cssclass("btn_MDI_List");
            this.addChild(obj.name, obj);

            obj = new Button("btnNexMdi",null,"6","18","31","btnList:0",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_tooltiptext("다음 화면목록으로");
            obj.set_cssclass("btn_MDI_Right");
            this.addChild(obj.name, obj);

            obj = new Button("btnPreMdi",null,"6","18","31","btnNexMdi:0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_tooltiptext("이전 화면목록으로");
            obj.set_cssclass("btn_MDI_Left");
            this.addChild(obj.name, obj);

            obj = new Div("divTab","btnHome:0","0",null,"41","btnPreMdi:5",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdvOpenMenu","790","42","245","200",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("pdiv_MDI_Bg");
            this.addChild(obj.name, obj);

            obj = new Grid("grdOpenMenu","0","0",null,null,"0","0",null,null,null,null,this.pdvOpenMenu.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("gdsOpenMenu");
            obj.set_cssclass("grd_MDI_List");
            obj.set_scrollbardecbuttonsize("0");
            obj.set_scrollbarincbuttonsize("0");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"28\"/></Rows><Band id=\"body\"><Cell text=\"bind:MENU_NM\" tooltiptext=\"bind:MENU_NM\"/></Band></Format></Formats>");
            this.pdvOpenMenu.addChild(obj.name, obj);

            obj = new PopupDiv("pdvContextMenu","140","42","180","48",null,null,null,null,null,null,this);
            obj.set_visible("false");
            obj.set_cssclass("grd_MDI_List");
            this.addChild(obj.name, obj);

            obj = new Grid("grdContextMenu","0","0",null,null,"0","0",null,null,null,null,this.pdvContextMenu.form);
            obj.set_taborder("0");
            obj.set_cssclass("grd_MDI_List");
            obj.set_binddataset("dsContextMenu");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:name\"/></Band></Format></Formats>");
            this.pdvContextMenu.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTab.form
            obj = new Layout("default","",0,0,this.divTab.form,function(p){});
            this.divTab.form.addLayout(obj.name, obj);

            //-- Default Layout : this.pdvOpenMenu.form
            obj = new Layout("default","",0,0,this.pdvOpenMenu.form,function(p){});
            this.pdvOpenMenu.form.addLayout(obj.name, obj);

            //-- Default Layout : this.pdvContextMenu.form
            obj = new Layout("default","",0,0,this.pdvContextMenu.form,function(p){});
            this.pdvContextMenu.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1070,42,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmMdi_copy0.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	frmMdi.xfdl
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
        this.fvFirstGap = 0;
        this.fvBtnGap = 0;
        this.fvTabHeight = 42;
        this.fvTabExtraRightGap = 25;
        this.fvExtraWidth = 25;
        this.fvExtraTop = 8;
        this.fvExtraHeight = 25;
        this.fvExtraBtnPrefix = "EXTRA_";
        this.fvTabBtnPrefix = "TAB_";
        this.bClose;
        this.fvContextMenuWinID = "";

        this.fvTargetObj = null;	//탭버튼 Drop 위치
        this.fvDragObj = null;		//드래그중인 탭버튼
        this.fvCurrentRow = -1;
        this.objApp = nexacro.getApplication();

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        /**
         * @description 화면 오픈
         */
        this.form_onload = function(obj,e)
        {
        	//20210609 VOC추가
        	if (system.navigatorname != "nexacro"){
        		var sServerUrl = nexacro.getEnvironment().services['svcUrl'].url + "thirdParty/js/";
        		var strIntegrity = "sha384-NaWTHo/8YCBYJ59830LTz/P4aQZK1sS0SneOgAvhsIl3zBu8r9RevNg5lHCHAuQ/";
        		var strCrossorigin = "anonymous";

        		//IE 브라우져 지원을 위한
        		if (system.navigatorname == "IE") {
        			this.fnJsInclude(sServerUrl+"bluebird.js");
        		}

        		//html2canvas - 0.5.0-beta4 버전이 그나마 Canvas 처리를 정상적으로 하네여
        		this.fnJsInclude(sServerUrl+"html2canvas.js");
        	}
        };

        //20210609 VOC추가
        //외부 js 선언
        this.fnJsInclude = function(FileDir, strIntegrity, strCrossorigin)
        {
            var includejs = document.createElement("script");
            includejs.src = FileDir;

            if (strIntegrity)includejs.integrity = strIntegrity;
            if (strCrossorigin)includejs.crossOrigin = strCrossorigin;

            document.head.appendChild(includejs);
        };

        /**
         * @description 화면 리사이징
         */
        this.form_onsize = function(obj,e)
        {
        	this.fnRedrawTab();
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        /**
         * @description 메세지 콜백
        */
        this.fnMsgCallback = function (sMsgId, sVal)
        {
        	var arrMsgId = sMsgId.split("^");

        	switch (arrMsgId[0])
        	{
        		case "confirm.before.removeallpage" :	// 변경된 데이터가 있습니다. 전체 화면을 닫겠습니까?
        			if (sVal)
        			{
        				this.fnCloseAll(false);
        			}
        			break;
        		case "confirm.before.movepage" :	// 변경된 데이터가 있습니다. 현재 화면을 닫겠습니까?
        			var sWinId = arrMsgId[1];
        			if (sVal)
        			{
        				this.fnTabOnClose(sWinId);
        			}
        			break;
        		case "confirm.removeallpage" :	// 전체 화면을 닫겠습니까?
        			if (sVal)
        			{
        				this.fnCloseAll(false);
        			}
        			break;
        		default :
        			break;
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        /**
         * @description MDI 버튼 재조정
         */
        this.fnRedrawTab = function (sGubn)
        {
        	if (this.gfnIsNull(sGubn)) sGubn = "move";

        	this.fnSetTabSpinBtnShow();

        	if (this.dsTab.rowcount < 1) return;

        	var objTabFirst = this.fnFindObj(this.dsTab.getColumn(0, "tabId"));
        	var nLeft = objTabFirst.getOffsetLeft();

        	var objTabLast  = this.fnFindObj(this.dsTab.getColumn(this.dsTab.rowcount - 1, "tabId"));
        	var nRight = objTabLast.getOffsetRight();

        	if (this.divTab.getOffsetWidth() >= (nRight - nLeft))
        	{
        		this.fnMoveFirst(0);
        	} else
        	{
        		// 메뉴 추가 시 버튼 잘림 방지
        		if (sGubn == "add")
        		{
        			this.fnMoveFirst(this.fnGetFirstTabIndex() + 1);
        		}
        	}

        }

        /**
         * @description MDI spin 버튼 활성/비활성화 처리
         */
        this.fnSetTabSpinBtnShow = function ()
        {
        	var objTab;

        	if (this.dsTab.rowcount == 0)
        	{
        		this.btnPreMdi.set_enable(false);
        		this.btnNexMdi.set_enable(false);
        		return;
        	}

        	objTab = this.fnFindObj(this.dsTab.getColumn(this.dsTab.rowcount - 1, "tabId"));

        	if (this.divTab.getOffsetWidth() < objTab.getOffsetRight())
        	{
        		this.btnNexMdi.set_enable(true);
        	} else
        	{
        		this.btnNexMdi.set_enable(false);
        	}

        	objTab = this.fnFindObj(this.dsTab.getColumn(0, "tabId"));

        	if (objTab.getOffsetLeft() < 0)
        	{
        		this.btnPreMdi.set_enable(true);
        	} else
        	{
        		this.btnPreMdi.set_enable(false);
        	}
        }

        /**
         * @description 메인/서브 디자인 적용
         */
        this.fnSetStyle = function(sType)
        {
        	if (sType == "sub")
        	{
        		// 서브일때 정렬 사용
        		//this.fnSetEnableArrange(true);

        		// 화면버튼 디자인 설정
        		var sCurWinId = this.objApp.gvFrsWork.getActiveFrame().name;
        		this.fnSetActive(this.fvTabBtnPrefix + sCurWinId.name);

        		// 메인버튼 디자인 설정
        		this.btnHome.set_cssclass("btn_MDI_Home");
        	} else
        	{
        		// 메인일때 정렬 사용못함
        		//this.fnSetEnableArrange(false);

        		// 메인버튼 디자인 설정
        		this.btnHome.set_cssclass("btn_MDI_HomeS");

        		// 화면버튼 디자인 설정
        		this.fnSetActiveBtn("btnHome");
        	}
        };

        /**
         * @description cascade 제어버튼 활성/비활성
         * @param {Boolean} bEnable - 활성화여부
         */
        this.fnSetEnableArrange = function(bEnable)
        {
        	this.btnCloseAll.set_enable(bEnable);
        };

        /**
         * @description menu tab 현재 버튼 이동
         * @param {String} sTabID - 이동할 탭 ID
         */
        this.fnSetActive = function (sTabID)
        {
        	var nRow = this.dsTab.findRow("tabId", sTabID);

        	if (nRow < 0)
        	{
        		return false;
        	}

        	this.dsTab.set_rowposition(nRow);
        	this.fnSetActiveBtn(sTabID);

        	return true;
        }

        /**
         * @description menu tab 현재 버튼 이동
         * @param {String} sTabId - 활성화할 탭 ID
         */
        this.fnSetActiveBtn = function (sTabId)
        {
        	var objTab;
        	var objExtraBtn;

        	for (var i = 0; i < this.dsTab.rowcount; i++)
        	{
        		objTab = this.fnFindObj(this.dsTab.getColumn(i, "tabId"));
        		objExtraBtn = this.fnFindObj(this.fvExtraBtnPrefix + this.dsTab.getColumn(i, "tabId"));

        		if (sTabId == this.dsTab.getColumn(i, "tabId"))
        		{
        			objTab.set_cssclass("btn_MDI_MenuS");
        			this.fnShowTabBtn(i);
        		}
        		else
        		{
        		   objTab.set_cssclass("btn_MDI_Menu");
        		}
        	}
        }

        /**
         * @description menu tab 현재 버튼 보여주는 함수
         * @param {String} nIdx - 탭버튼인덱스
         */
        this.fnShowTabBtn = function (nIdx)
        {
        	var n;
        	var nLeft;
        	var nRight;

        	var objTab = this.fnFindObj(this.dsTab.getColumn(nIdx, "tabId"));
        	nLeft = objTab.getOffsetLeft();
        	nRight = objTab.getOffsetRight();

        	if (0 <= nLeft && this.divTab.getOffsetWidth() >= nRight)
        	{
        		return;
        	}

        	if (nLeft < 0)
        	{
        		this.fnMoveFirst(nIdx);
        		return;
        	}

        	var nMoveIdx = nIdx;

        	for (var i = this.fnGetFirstTabIndex() + 1; i < this.dsTab.rowcount; i++)
        	{
        		objTab = this.fnFindObj(this.dsTab.getColumn(i, "tabId"));
        		if (nRight - objTab.getOffsetLeft() <= this.divTab.getOffsetWidth())
        		{
        			nMoveIdx = i;
        			break;
        		}
        	}

        	this.fnMoveFirst(nMoveIdx);
        }

        /**
         * @description menu tab 찾는 함수
         */
        this.fnFindObj = function (sId)
        {
        	return this.divTab.form.components[sId];
        }

        /**
         * @description menu tab 버튼 첫번째 이동 함수
         */
        this.fnMoveFirst = function (nMoveIdx)
        {
        	var nIndex;
        	var sTabId;
        	var objTab;
        	var objExtraBtn;
        	var objTabFirst;

        	nIndex = this.fnGetFirstTabIndex();
        	if (nIndex < 0)
        	{
        		return;
        	}

        	if (nMoveIdx < 0)
        	{
        		return;
        	}
        	if (nMoveIdx >= this.dsTab.rowcount)
        	{
        		return;
        	}

        	sTabId = this.dsTab.getColumn(nIndex, "tabId");
        	objTabFirst = this.fnFindObj(sTabId);

        	sTabId = this.dsTab.getColumn(nMoveIdx, "tabId");
        	objTab = this.fnFindObj(sTabId);

        	var nShiftPos = objTab.getOffsetLeft() - objTabFirst.getOffsetLeft();
        	for (var i = 0; i < this.dsTab.rowcount; i++)
        	{
        		sTabId = this.dsTab.getColumn(i, "tabId");
        		objTab = this.fnFindObj(sTabId);
        		objExtraBtn = this.fnFindObj(this.fvExtraBtnPrefix + sTabId);
        		objTab.move(objTab.getOffsetLeft() - nShiftPos, objTab.getOffsetTop());
        		if (this.gfnIsNull(objExtraBtn) == false )
        			objExtraBtn.move(objExtraBtn.getOffsetLeft() - nShiftPos, objExtraBtn.getOffsetTop());
        	}
        }

        /**
         * @description menu tab 버튼 첫번째 index 가져오는 함수
         */
        this.fnGetFirstTabIndex = function ()
        {
        	for (var i=0; i < this.dsTab.rowcount;i++)
        	{
        		var sTabID  = this.dsTab.getColumn(i, "tabId");
        		var objTab = this.fnFindObj(sTabID);
        		if (this.gfnIsNull(objTab) == false)
        		{
        			if (0 <= objTab.getOffsetLeft()) return i;
        		}
        	}
        	return -1;
        }

        /**
         * @description 윈도우 키를 기준으로 열려있는 화면 여부 확인
         * @param {string} sWinId : 윈도우 생성 키
         * @example
         */
        this.isActiveFrame = function (sWinId)
        {
        	var framesInfo = this.objApp.gvFrsWork.frames;

        	if (this.gfnIsNull(sWinId))
        	{
        		return true;
        	}

        	if (framesInfo[sWinId])
        	{
        	    this.gfnSetSub();
        		this.fnMoveTab(sWinId);   //tab이동
        		framesInfo[sWinId].setFocus();
        		return true;
        	}
        };

        /**
         * @description 메뉴 tab 이동
         * @param {string} sWindId - 메뉴키값
         */
        this.fnMoveTab = function (sWindId)
        {
        	var nRow = this.dsTab.findRow("winId", sWindId);
        	if (nRow < 0) return nRow;

        	var sTabId = this.fvTabBtnPrefix + sWindId;
        	this.fnSetActive(sTabId);
        	this.fnRedrawTab();
        }

        /**
         * @description 메뉴 tab Button 동적생성
         * @param {string} sWindId - 메뉴키값
         * @param {string} sName - 메뉴명
         */
        this.fnAddTab = function (sWindId, sName)
        {
        	var nRow = this.dsTab.findRow("winId", sWindId);

        	if (nRow > -1) return nRow;

        	var sTabID = this.fvTabBtnPrefix + sWindId;

        	nRow = this.dsTab.addRow();
        	this.dsTab.setColumn(nRow, "tabId", sTabID);
        	this.dsTab.setColumn(nRow, "winId", sWindId);
        	this.dsTab.setColumn(nRow, "title", sName);

        	this.fnAddTabBtn(sTabID, sName);
        	this.fnRedrawTab();

        	this.bClose = true;

        	return nRow;
        }

        /**
         * @description 메뉴 tab 신규 동적 생성
         * @param {string} sTabID - 메뉴키값
         * @param {string} sTabName - 메뉴명
         */
        this.fnAddTabBtn = function (sTabID, sTabName)
        {
        	var objTab;
        	var objBtn;
        	var sExBtnId = this.fvExtraBtnPrefix + sTabID;   //extra button id

        	var objTextWidth =  "";

        	if (this.gfnIsNull(this.fnFindObj(sTabID)))
        	{
        		objTab = new Button();
        		objTab.init(sTabID, this.fnGetLeft(sTabID), 0, 130, this.fvTabHeight, null, null);
        		this.divTab.addChild(objTab.name, objTab);
        	}

        	objTab.set_text(sTabName);
        	objTab.set_textAlign("left");
        	objTab.set_padding("0px 10px 0px 15px");
        	objTab.set_cssclass("btn_MDI_MenuS");
        	var nCompWidth = this.gfnGetTextSize(sTabName)[0]+ 45;
        	objTab.set_width(nCompWidth);
        	objTab.show();

        	objTab.setEventHandler("onclick", this.btnTab_onclick, this);
        	objTab.setEventHandler("oncontextmenu", this.btnTab_oncontextmenu, this);
        	objTab.setEventHandler("ondrag", this.btnTab_ondrag, this);

        	if (this.fnFindObj(sExBtnId) == null)
        	{
        		objBtn = new Button();
        		objBtn.init(sExBtnId, objTab.getOffsetRight() - this.fvTabExtraRightGap - 10, this.fvExtraTop, objTab.getOffsetRight() - this.fvTabExtraRightGap + this.fvExtraWidth - (objTab.getOffsetRight() - this.fvTabExtraRightGap), this.fvExtraTop + this.fvExtraHeight - this.fvExtraTop);

        		this.divTab.addChild(sExBtnId, objBtn);

        		objBtn.set_cssclass("btn_TF_extra");
        		objBtn.set_cursor("pointer");
        		objBtn.show();

        		objBtn.setEventHandler("onclick", this.btnExtra_onclick, this);
        	}
        }

        /**
         * @description 이전 버튼을 기준으로 버튼위치 리턴
         */
        this.fnGetLeft = function (sTabId)
        {
        	var nCurRow = this.dsTab.findRow("tabId", sTabId);
        	if (nCurRow == 0) return this.fvFirstGap;

        	var objPrevTab = this.fnFindObj(this.dsTab.getColumn(nCurRow - 1, "tabId"));
        	return objPrevTab.getOffsetRight() + this.fvBtnGap;
        }

        /**
         * @description 메뉴닫기(외부호출)
         * @param {String} sMenuId - 메뉴ID
         */
        this.fnCloseMenu = function(sMenuId, bCheck)
        {
        	if (this.gfnIsNull(sMenuId)) return;
        	if (this.gfnIsNull(bCheck)) bCheck	= this.objApp.gvCloseCheck;

        	var sWinId = this.gfnGetLookupData(this.objApp.gdsOpenMenu, this.FRAME_MENUCOLUMNS.menuId, sMenuId, this.FRAME_MENUCOLUMNS.winId);

        	var objFrame = this.objApp.gvFrsWork.frames;
        	var objForm =  objFrame[sWinId].form;

        	var rtn = objForm.fnWorkFrameClose(bCheck);

        	if (rtn == false)
        	{
        		// 변경된 데이터가 있습니다. 현재 화면을 닫겠습니까?
        		this.gfnAlert("confirm.before.movepage", "", "confirm.before.movepage^" + sWinId, "fnMsgCallback");
        	} else
        	{
        		this.fnTabOnClose(sWinId);
        	}
        };

        /**
         * @description 화면 전체 닫기
         * @param {Boolean} bCheck - 전체닫기 체크
         * @return	:   N/A
         */
        this.fnCloseAll = function(bCheck)
        {
        	if (this.objApp.gdsOpenMenu.getRowCount() < 1) return;

        	var iFramesCnt = this.objApp.gvFrsWork.frames.length;
        	var isCloseCheck = this.fnCheckCloseAll(bCheck);

        	if (isCloseCheck)
        	{
        		for (var i=iFramesCnt; i>0; i--)
        		{
        			this.fnTabOnClose(this.objApp.gvFrsWork.frames[i-1].name);
        		}
        	} else
        	{
        		// 변경된 데이터가 있습니다. 전체 화면을 닫겠습니까?
        		this.gfnAlert("confirm.before.removeallpage", "", "confirm.before.removeallpage", "fnMsgCallback");
        	}
        };

        /**
         * @description 화면 전체닫기 여부 체크
         * @param {Boolean} bCheck - 전체닫기 체크
         * @return	:   N/A
         */
        this.fnCheckCloseAll = function(bCheck)
        {
        	// workFrame영역에 open된 childFrame 갯수
        	var iFramesCnt = this.objApp.gvFrsWork.frames.length;
        	var isCloseCheck = true;

        	if (this.gfnIsNull(bCheck)) bCheck	= this.objApp.gvCloseCheck;

        	// 닫기할때 체크할지 여부(변경되도 강제로 닫을때 사용)
        	if (bCheck == true)
        	{
        		for (var i=0; i<iFramesCnt; i++)
        		{
        			if (this.gfnIsNull(this.objApp.gvFrsWork.frames[i].form.fvDivWork.form.lookup("cfnClose")))
        			{
        			} else
        			{
        				if (this.objApp.gvFrsWork.frames[i].form.fnWorkFrameClose() == false)
        				{
        					isCloseCheck =  false;
        					break;
        				}
        			}
        		}
        	}

        	return isCloseCheck;
        };

        /**
         * @description 메뉴 tab 닫기 실행 함수
         * @param {String} sWinId - 윈도우ID
         */
        this.fnTabOnClose = function (sWinId)
        {
            var objFrame = this.objApp.gvFrsWork.frames;

        	var sCurWinId = this.objApp.gvFrsWork.getActiveFrame().name;

        	var nRow = this.objApp.gdsOpenMenu.findRow(this.FRAME_MENUCOLUMNS.winId, sWinId);

        	// MDI 탭버튼 삭제
        	if (!this.gfnIsNull(objFrame[sWinId]) && nRow > -1)
        	{
        		this.bClose = false;
        		var objRemoveChildFrame = this.objApp.gvFrsWork.removeChild(sWinId);

        		objRemoveChildFrame.destroy();
        		objRemoveChildFrame = null;
        		this.fnDelTab(sWinId);
        	}

        	// 열린화면 제거
        	this.gfnRemoveOpenMenuDs(sWinId);

            if (objFrame.length > 0)
            {
        		if (sWinId != sCurWinId )
        		{
        			this.objApp.gvFrsWork[sCurWinId].setFocus();
        		} else
        		{
        			sCurWinId = this.objApp.gvFrsWork.getActiveFrame();

        			if (sCurWinId != null)
        			{
        				this.fnSetActive(this.fvTabBtnPrefix + sCurWinId.name);
        			}
        		}
        	} else
        	{
        		this.gfnSetMain();	//변경이후에 main에 포커스를 준다.
        	}
        };

        /**
         * @description메뉴 tab 삭제
         * @param {String} sWinId - 윈도우ID
         */
        this.fnDelTab = function (sWinId)
        {
        	var nRow = this.dsTab.findRow("winId", sWinId);
        	if (nRow < 0) return false;
        	var sTabId = this.fvTabBtnPrefix + sWinId;

        	// Removing Tab button.
        	this.fnDelTabBtn(sTabId);
        	this.dsTab.deleteRow(nRow);
        	this.fnRedrawTab();
        	return true;
        };

        /**
         * @description menu tab 삭제
         * @param {String} sTabId - 탭ID
         */
        this.fnDelTabBtn = function (sTabId)
        {
        	var sExtraBtnId = this.fvExtraBtnPrefix + sTabId;
        	var objTab = this.fnFindObj(sTabId);
        	var objExtraBtn = this.fnFindObj(sExtraBtnId);

        	var nShitLeft = objTab.getOffsetWidth() + this.fvBtnGap;
        	var nCurRow = this.dsTab.findRow("tabId", sTabId);

        	var nTabLeft = objTab.getOffsetLeft();

        	if (nTabLeft == 0)
        	{
        		if (this.dsTab.rowcount > 1)
        		{
        			this.btnPreMdi_onclick();
        		}
        	}

        	this.fnRemoveObj(sExtraBtnId);
        	this.fnRemoveObj(sTabId);

        	var sWinId = sTabId.replace(this.fvTabBtnPrefix, "");
        	var nRow = this.dsTab.findRow("winId", sWinId);

        	if (nTabLeft < 0)
        	{
        		for (var i = 0 ; i < nRow ; i++)
        		{
        			objTab = this.fnFindObj(this.dsTab.getColumn(i, "tabId"));
        			objExtraBtn = this.fnFindObj(this.fvExtraBtnPrefix + this.dsTab.getColumn(i, "tabId"));
        			objTab.move(objTab.getOffsetLeft() + nShitLeft, objTab.getOffsetTop());
        			objExtraBtn.move(objExtraBtn.getOffsetLeft() + nShitLeft, objExtraBtn.getOffsetTop());
        		}
        	} else
        	{
        		for (var i = nCurRow + 1; i < this.dsTab.rowcount; i++)
        		{
        			objTab = this.fnFindObj(this.dsTab.getColumn(i, "tabId"));
        			objExtraBtn = this.fnFindObj(this.fvExtraBtnPrefix + this.dsTab.getColumn(i, "tabId"));
        			objTab.move(objTab.getOffsetLeft() - nShitLeft, objTab.getOffsetTop());
        			objExtraBtn.move(objExtraBtn.getOffsetLeft() - nShitLeft, objExtraBtn.getOffsetTop());
        		}
        	 }

        	this.bClose = true;
        };

        /**
         * @description menu tab 삭제  함수
         * @param {String} sObjId - 삭제할 오브젝트 ID
         */
        this.fnRemoveObj = function (sObjId)
        {
        	if (this.fnFindObj(sObjId) == null)
        	{
        		return;
        	}
        	var objDelBtn = this.divTab.removeChild(sObjId);
        	if (objDelBtn != null)
        	{
        		objDelBtn.destroy();
        	}
        };

        /**
         * @description menu tab 다른 탭 삭제 함수
         */
        this.fnCloseOtherTabs = function()
        {
        	var dsTabLen = this.dsTab.getRowCount();
        	var isWindIdCheck = !this.gfnIsNull(this.fvContextMenuWinID);

        	if (isWindIdCheck)
        	{
        		for (var i = dsTabLen; i > 0; i--)
        		{
        			var btnName = this.dsTab.getColumn(i-1, "tabId");
        			if (btnName == this.fvContextMenuWinID) continue;
        			this.fnTabOnClose(this.dsTab.getColumn(i-1, "winId"));
        		}
        		this.pdvContextMenu.closePopup();
        	}
        };

        /**
         * @description menu tab 우측 탭 삭제 함수
         */
        this.fnCloseTabsToTheRight = function()
        {
        	var dsTabLen = this.dsTab.getRowCount();
        	var isWindIdCheck = this.fvContextMenuWinID.length > 0 ? true : false;

        	if (isWindIdCheck && dsTabLen > 0) {
        		for (var i = dsTabLen; i>0; i--) {
        			var btnName = this.dsTab.getColumn(i, "tabId");
        			if (btnName == this.fvContextMenuWinID) break;
        			this.fnTabOnClose(this.dsTab.getColumn(i, "winId"));
        		}
        		this.pdvContextMenu.closePopup();
        	}
        };


        /**
         * @description menu tab Drag & Drop용 재배치 함수
         */
        this.fnRelocationTab = function()
        {
        	var btnCnt = this.dsTab.getRowCount();

        	var nLeft = 0;
        	for (var i = 0; i < btnCnt; i++) {
        		var oBtn = this.fnFindObj(this.dsTab.getColumn(i, "tabId"));
        		var oExtraBtn = this.fnFindObj(this.fvExtraBtnPrefix + this.fvTabBtnPrefix + this.dsTab.getColumn(i, "winId"));

        		oBtn.setOffsetLeft(nLeft);
        		oExtraBtn.setOffsetLeft(oBtn.getOffsetRight() - this.fvTabExtraRightGap);
        		nLeft += oBtn.getOffsetWidth();
        	}
        };

        /**
         * @description MDI 모달리스 팝업으로 화면분리
         */
        this.fnOpenPuGubun = function ()
        {
        	//this.gfnAlert("confirm.init",[""]);
        	var arg = this.objApp.gvFrsWork.getActiveFrame().arguments;
        	var sPopId = arg.MENU_ID;
        	var sPopupCallback = "fnSetPopupCallback";
        	var arrPopFrame = nexacro.getPopupFrames();

        	// 기존 팝업이 띄어져 있을 때
        	if (arrPopFrame.length > 0)
        	{
        		var oPopup = arrPopFrame[sPopId];
        		if (this.gfnIsNull(oPopup))
        		{
        			for (var i = 0; i < arrPopFrame.length; i++)
        			{
        				if (arrPopFrame[i].formurl == "frame::frmWorkPu.xfdl")
        				{
        					this.fnCloseMenu(sPopId);	//기존창닫기
        					arrPopFrame[i].arguments = arg;
        					arrPopFrame[i].popupType = "modeless"
        					arrPopFrame[i].callback = sPopupCallback;
        					arrPopFrame[i].popupId 	= sPopId;
        					arrPopFrame[i].form.form_onload();
        				}
        			}
        		}
        		else
        		{
        			oPopup.setFocus();
        		}
        	}
        	else
        	{
        		this.fnCloseMenu(sPopId);	//기존창닫기
        		this.gfnSetOpenPopup(sPopId, sPopupCallback, arg);
        	}

        };

        /**
         * @description Mdi 창분리 버튼 클릭 시 콜백 받아옴
         */
        this.fnSetPopupCallback = function (sPopupId, sRtn)
        {
         	if (!this.gfnIsNull(sRtn))
        	{
        		// 메뉴 화면 호출
        		this.objApp.gvFrmLeft.form.fnFormOpen(sRtn);
        	}
        };

        /**
        * 열려있는 윈도우 화면을 정렬
        * @param	: 	strType: 정렬 타입
        * @return	:   N/A
        */
        this.fnArrangeWin = function(strType)
        {
        	strType = strType.toLowerCase();
        	// workFrame영역에 open된 childFrame 갯수
        	var iFramesCnt = this.objApp.gvFrsWork.frames.length;

        	if (this.dsTab.getRowCount() < 1) return;

        	if (strType != "maximize" ) {
        		var framesInfo = this.objApp.gvFrsWork.frames;
        		for ( var i = 0 ; i < framesInfo.length ; i++ ) {
        			framesInfo[i].set_visible(true);
        		}
        	}
        	this.fvArrangeType = strType;

        	switch (strType)
        	{
        		case "maximize" :
        			var curWinId = this.objApp.gvFrsWork.getActiveFrame().name;
        			for (var i=0; i<iFramesCnt; i++)
        			{
        				this.objApp.gvFrsWork.frames[i].set_openstatus("maximize");
        				this.objApp.gvFrsWork.frames[i].set_showtitlebar(false);
        				this.objApp.gvFrsWork.frames[i].set_border("0px solid #006666");
        				this.objApp.gvFrsWork.frames[i].set_resizable(false);
        			}

        			this.isActiveFrame(curWinId);
        			break;
        		default :
        			for (var i=0; i<iFramesCnt; i++)
        			{
        				this.objApp.gvFrsWork.frames[i].set_showtitlebar(true);
        				this.objApp.gvFrsWork.frames[i].set_border("1px solid #7f7f7b");
        				this.objApp.gvFrsWork.frames[i].set_borderRadius("3px 3px");
        				this.objApp.gvFrsWork.frames[i].set_openstatus("normal");
        				this.objApp.gvFrsWork.frames[i].set_resizable(true);
        				this.objApp.gvFrsWork.frames[i].set_titlebarheight(30);
        				this.objApp.gvFrsWork.frames[i].titlebar.closebutton.set_enable(false);
        				this.objApp.gvFrsWork.frames[i].titlebar.maxbutton.set_enable(true);
        			}
        			this.objApp.gvFrsWork.arrange(strType);
        			break;
        	}
        }

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        /**
         * @description 홈버튼 onclick event
         */
        this.btnHome_onclick = function(obj,e)
        {
        	// 메인으로 이동
        	this.gfnSetMain();
        };

        /**
         * @description 메뉴 tab onclick event
         */
        this.btnTab_onclick = function (obj, e)
        {
        	var sWinId = obj.name.split(this.fvTabBtnPrefix).join("");
        	this.isActiveFrame(sWinId);
        };

        /**
         * @description 메뉴 tab oncontextmenu event
         */
        this.btnTab_oncontextmenu = function(obj,e)
        {
        	this.fvContextMenuWinID = obj.name;
        	var nWidth = this.pdvContextMenu.width;
        	var nHeight = this.pdvContextMenu.height;

            if (this.objApp.gdsOpenMenu.rowcount > 0)
        	{
        		this.pdvContextMenu.trackPopupByComponent(obj, 0, obj.height);
        		this.dsContextMenu.set_rowposition(-1);
        	}
        };

        /**
         * @description 메뉴 tab extra버튼 클릭시 발생되는 event
         */
        this.btnExtra_onclick = function (obj, e)
        {
        	var sWinId = obj.name.split(this.fvTabBtnPrefix).join("").split(this.fvExtraBtnPrefix).join("");
        	var sMenuId = this.gfnGetLookupData(this.objApp.gdsOpenMenu, this.FRAME_MENUCOLUMNS.winId, sWinId, this.FRAME_MENUCOLUMNS.menuId)

        	this.fnCloseMenu(sMenuId);

        	this.bClose = true;
        };

        /**
         * @description 메뉴 Mdi 이전   split버튼
         */
        this.btnPreMdi_onclick = function (obj, e)
        {
        	this.fnMoveFirst(this.fnGetFirstTabIndex() - 1);
        	this.fnRedrawTab();
        };

        /**
         * @description 메뉴 Mdi 다음  split버튼
         */
        this.btnNexMdi_onclick = function (obj, e)
        {
        	this.fnMoveFirst(this.fnGetFirstTabIndex() + 1);
        	this.fnRedrawTab();
        };

        /**
         * @description 열린 메뉴리스트 버튼 click
         */
        this.btnList_onclick = function(obj,e)
        {
        	var nWidth = this.pdvOpenMenu.width;
        	var nHeight = this.pdvOpenMenu.height;

            if (this.objApp.gdsOpenMenu.rowcount > 0)
        	{
        		this.pdvOpenMenu.trackPopupByComponent(obj, 0, obj.height);

        		this.pdvOpenMenu.form.grdOpenMenu.setFocus();
        		this.pdvOpenMenu.form.grdOpenMenu.selectCell(0, 0, true);
        	}
        };

        /**
         * @description 메뉴 전체닫기 버튼 클릭
         */
        this.btnCloseAll_onclick = function(obj,e)
        {
        	if (this.objApp.gdsOpenMenu.getRowCount() > 0)
        	{
        		this.gfnAlert("confirm.removeallpage", "", "confirm.removeallpage", "fnMsgCallback");
        	}
        };

        /**
         * @description 접기/펼치기 버튼 click
         */
        this.btnLeftMenuShowHide_onclick = function(obj,e)
        {
        	if (obj.cssclass == "btn_MDI_Open")
        	{
        		this.gfnShowLeftFrame();
        	} else
        	{
        		this.gfnHideLeftFrame();
        	}
        };

        /**
         * @description 열린 메뉴리스트 그리드 cellclick
         */
        this.pdvOpenMenu_grdOpenMenu_oncellclick = function(obj,e)
        {
        	var objDs = obj.getBindDataset();

        	// 메뉴명 클릭 시
        	if (obj.getBindCellIndex("body", this.FRAME_MENUCOLUMNS.title) == e.cell)
        	{
        		var sMenuId = objDs.getColumn(e.row, this.FRAME_MENUCOLUMNS.menuId);

        		var objArgs = null;

        		this.objApp.gvFrmLeft.form.fnFormOpen(sMenuId, objArgs);
        	}

        	this.pdvOpenMenu.closePopup();
        };

        //20210609 VOC추가
        //게시판입력팝업오픈
        this.fnOpenBoardPopup = function (sImg)
        {
        	var sImgTag = "<p></p> <p></p>  <p></p> <img src="+nexacro.wrapQuote(sImg)+">";
        	//게시판추가
        	var popupId = "addBoard";
        	var popupUrl = "comm::board/boardPu.xfdl";
        	var oArg   = { pvApndYn		: "1"
        				  ,pvTitle 		: "VOC등록 "
        				  ,pvInputId	: nexacro.getApplication().gdsUser.getColumn(0, "USER_ID")
        				  ,pvInputEmpNo	: nexacro.getApplication().gdsUser.getColumn(0, "EMP_NO")
        				  ,pvContTitle	: ""
        				  ,pvBoardCd	: "VOC001"
        				  ,pvOpenType	: "add"
        				  ,pvHrank		: ""
        				  ,pvAnswLvl    : 0
        				  ,pvCont		: sImgTag };
        	var sPopupCallBack = "fnPopupCallback";
        	var sTitle = "게시글";
        	var oOption = {title:sTitle
        					,titlebar:true};
        	this.gfnOpenPopup(popupId, popupUrl, oArg, sPopupCallBack, oOption);
        };

        //웹일경우 해당컴포넌트 이미지 파일로 다운로드
        this.fnWebImageSave = function(objComp,strFileName){
        	var ele = document.getElementById(objComp.getElement().handle.id);
        	var oForm = this;
        	if (!ele){
        		trace('ele is not exist.')
        		return false;
        	}

        	html2canvas(ele, {
        		onrendered : function(canvas){
        			sImageData = canvas.toDataURL('image/png'); //Image 코드로 뽑아내기 // image 추가
        			oForm.fnOpenBoardPopup(sImageData);
        		}
        	});
        };

        //VOC버튼클릭
        this.btnVoc_onclick = function(obj,e)
        {
        	var sCur = nexacro.getApplication().gvVfrsWork.separatesize;
        	var sStatus = sCur=="42,*,0,0"?"main":"work";

        	var oTargetFrame = sStatus=="main"? nexacro.getApplication().gvFrmMain : nexacro.getApplication().gvFrsWork.getActiveFrame();
        	var oTarget = oTargetFrame.form;
        	var sFileName = oTarget.name+".png";
        	var sImg = "";

        	if (system.navigatorname != "nexacro"){
        		sImg = this.fnWebImageSave(oTarget,sFileName);
        	}else{
        		sImg = system.saveToImageBase64String(oTarget, false, "PNG");
        		this.fnOpenBoardPopup(sImg);
        	}
        };

        // Context Menu 클릭
        this.pdvContextMenu_grdContextMenu_oncellclick = function(obj,e)
        {
        	var code = e.row;

        	switch (code) {
        		case 0 :  // 다른 탭 닫기
        			this.fnCloseOtherTabs();
        			break;
        		case 1 : // 우측 탭 닫기
        			this.fnCloseTabsToTheRight();
        			break;
        	}
        };

        /**
         * @description Mdi 탭버튼 드래그 시작
         */
        this.btnTab_ondrag = function(obj,e)
        {
        	//탭영역 재배치를 위해 드래그중인 탭버튼을 dstab에서 제거
        	var nRow = this.dsTab.findRow("tabId", obj.name);
        	this.dsTabCopy.copyRow(0, this.dsTab, nRow);
        	this.dsTab.deleteRow(nRow);

        	var gdsOpenMenu = this.objApp.gdsOpenMenu;
        	this.dsOpenMenu.copyRow(0, gdsOpenMenu, nRow);
        	gdsOpenMenu.deleteRow(nRow);

        	this.fvCurrentRow = nRow;

        	obj.set_cssclass("btn_MDI_MenuS");

        	this.fnRelocationTab();
        	this.fnRedrawTab();

        	return true;
        };

        /**
         * @description 탭버튼 드래그중일때
         */
        this.divTab_ondragmove = function(obj,e)
        {
        	this.fvDragObj = e.sourceobject;	//드래그중인 탭버튼

        	if (this.fvDragObj.parent.parent.name != "divTab")
        	{	//탭버튼이 아닌 다른 컴포넌트를 drag하면
        		return;
        	}

        	//btnPreMdi, btnNexMdi이 활성화 상태일때 확인
        	if (this.fvDragObj.getOffsetLeft() < 10 && this.btnPreMdi.enable)
        	{
        		this.fnMoveFirst(this.fnGetFirstTabIndex() - 1);
        		this.fnRedrawTab();
        		return;
        	}
        	//62 = btnLeftMenuShowHide width + btnLeftMenuShowHide width
        	else if (this.fvDragObj.getOffsetLeft() > (this.divTab.getOffsetWidth() - this.fvDragObj.getOffsetWidth() - 62) && this.btnNexMdi.enable)
        	{
        		this.fnMoveFirst(this.fnGetFirstTabIndex() + 1);
        		this.fnRedrawTab();
        		return;
        	}

        	this.fvTargetObj = e.fromobject;	//드랍위치

        	//드래그중인 탭버튼의 위치 변경
        	var dragBtnName = this.fvDragObj.name.replace(this.fvTabBtnPrefix, "");
        	var oExtraBtn = this.fnFindObj(this.fvExtraBtnPrefix + this.fvTabBtnPrefix + dragBtnName);

        	this.fvDragObj.bringToFront();
         	oExtraBtn.bringToFront();
        	//드랍위치와 드래그중인 버튼을 구분하기 위해 5 옆으로 더함
        	this.fvDragObj.setOffsetLeft(e.canvasx + 5);
        	oExtraBtn.setOffsetLeft(this.fvDragObj.getOffsetRight() - this.fvTabExtraRightGap);
        };

        /**
         * @description divTab에서 드랍할때
         */
        this.divTab_onlbuttonup = function(obj,e)
        {
        	if (this.gfnIsNull(this.fvDragObj) || this.gfnIsNull(this.fvTargetObj))
        	{
        		return;
        	}

        	var gdsOpenMenu = this.objApp.gdsOpenMenu;

        	var dragBtnName = this.fvDragObj.name.replace(this.fvTabBtnPrefix, "");
        	this.fvDragObj = null;

         	var targetBtnName = this.fvTargetObj.name;
          	targetBtnName = targetBtnName.replace(this.fvExtraBtnPrefix, "");
          	targetBtnName = targetBtnName.replace(this.fvTabBtnPrefix, "");

        	var nRow = -1;
        	if (this.gfnGetObjectType(this.fvTargetObj) == "Form")	//드랍위치가 Form 이면 마지막으로 이동
        	{
        		targetBtnName = this.dsTabCopy.getColumn(0, "tabId");
        		nRow = this.dsTab.addRow();
        		this.dsTab.copyRow(nRow, this.dsTabCopy, 0);
        		nRow = gdsOpenMenu.addRow();
        		gdsOpenMenu.copyRow(nRow, this.dsOpenMenu, 0);
        	}
        	else if (targetBtnName == dragBtnName)	//드래그와 드랍이 같으면 원래 위치로
        	{
        		nRow = this.fvCurrentRow;
        		this.dsTab.insertRow(nRow);
        		this.dsTab.copyRow(nRow, this.dsTabCopy, 0);
        		gdsOpenMenu.insertRow(nRow);
        		gdsOpenMenu.copyRow(nRow, this.dsOpenMenu, 0);
        	}
        	else
        	{
        		nRow = this.dsTab.findRow("winId", targetBtnName);
        		this.dsTab.insertRow(nRow);
        		this.dsTab.copyRow(nRow, this.dsTabCopy, 0);
        		gdsOpenMenu.insertRow(nRow);
        		gdsOpenMenu.copyRow(nRow, this.dsOpenMenu, 0);
        	}
        	this.fvTargetObj = null;
        	this.isActiveFrame(this.dsTab.getColumn(nRow, "winId"));
        	this.fnRelocationTab();
        	this.fnSetActive(this.fvTabBtnPrefix + dragBtnName);
        	this.fnRedrawTab();
        };

        /**
        * MDI 영역 열려있는 윈도우 화면 정렬 버튼 이벤트
        * @param	: 	strType: 정렬 타입
        */
        this.btnArrange_onclick = function(obj,e)
        {
        	var strType = obj.name.replace("btn", "");
        	this.fnArrangeWin(strType);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onsize",this.form_onsize,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.btnLeftMenuShowHide.addEventHandler("onclick",this.btnLeftMenuShowHide_onclick,this);
            this.btnHome.addEventHandler("onclick",this.btnHome_onclick,this);
            this.btnVoc.addEventHandler("onclick",this.btnVoc_onclick,this);
            this.btnHorizontal.addEventHandler("onclick",this.btnArrange_onclick,this);
            this.btnVertical.addEventHandler("onclick",this.btnArrange_onclick,this);
            this.btnCascade.addEventHandler("onclick",this.btnArrange_onclick,this);
            this.btnMaximize.addEventHandler("onclick",this.btnArrange_onclick,this);
            this.btnCloseAll.addEventHandler("onclick",this.btnCloseAll_onclick,this);
            this.btnList.addEventHandler("onclick",this.btnList_onclick,this);
            this.btnNexMdi.addEventHandler("onclick",this.btnNexMdi_onclick,this);
            this.btnPreMdi.addEventHandler("onclick",this.btnPreMdi_onclick,this);
            this.divTab.addEventHandler("onlbuttonup",this.divTab_onlbuttonup,this);
            this.divTab.addEventHandler("ondragmove",this.divTab_ondragmove,this);
            this.pdvOpenMenu.form.grdOpenMenu.addEventHandler("oncellclick",this.pdvOpenMenu_grdOpenMenu_oncellclick,this);
            this.pdvContextMenu.addEventHandler("onpopup",this.pdvContextMenu_onpopup,this);
            this.pdvContextMenu.form.grdContextMenu.addEventHandler("oncellclick",this.pdvContextMenu_grdContextMenu_oncellclick,this);
            this.pdvContextMenu.form.grdContextMenu.addEventHandler("onsetfocus",this.pdvContextMenu_grdContextMenu_onsetfocus,this);
        };
        this.loadIncludeScript("frmMdi_copy0.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
