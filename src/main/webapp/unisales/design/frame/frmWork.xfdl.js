(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmWork");
            this.set_titletext("WorkFrame");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1070,808);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divTitle","20","0",null,"52","119",null,"960",null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Div("divWork","20","52",null,null,"0","20","1048",null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_WF_Frame");
            this.addChild(obj.name, obj);

            obj = new Button("btnExport","divTitle:3","12","30","28",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_Ex");
            obj.set_visible("true");
            obj.set_tooltiptext("화면 분리");
            this.addChild(obj.name, obj);

            obj = new Button("btnFull","btnExport:3","12","30","28",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_Full");
            obj.set_visible("true");
            obj.set_tooltiptext("화면 분리");
            this.addChild(obj.name, obj);

            obj = new Button("btnInfo","btnFull:3","12","30","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.getSetter("uStatus").set("normal");
            obj.set_cssclass("btn_WF_Info");
            obj.set_tooltiptext("매뉴얼");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Static("staTerm","btnInfo:0","19","20","21",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Div("divSplitter","0","397","15","50",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("div_MF_H");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divTitle
            obj = new Layout("default","",0,0,this.divTitle.form,function(p){});
            this.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWork
            obj = new Layout("default","",0,0,this.divWork.form,function(p){});
            this.divWork.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divSplitter
            obj = new Layout("default","",0,0,this.divSplitter.form,function(p){});
            this.divSplitter.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","desktop",1070,808,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","frame::frmWorkTitleDv.xfdl");
        };
        
        // User Script
        this.registerScript("frmWork.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	frmWork.xfdl
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
        this.objApp = nexacro.getApplication();

        this.fvWinKey   = "";			// WinKey
        this.fvMenuId   = "";			// 메뉴 ID
        this.fvMenuNm   = "";			// 메뉴 Name
        this.fvMenuUrl  = "";			// 메뉴 URL
        this.fvPrgmId   = "";			// 프로그램 ID
        this.fvMenuArgs = "";			// gfnOpenMenu에서 전달한 Argument
        this.fvObjArgs = "";			// 메뉴에서 등록한 Argument

        this.fvButtonAuth = "";			// 공통 버튼 권한
        this.fvSearchScopeCd = "";		// 조회범위코드(SM13)
        this.fvDivWork = this.divWork;	// 업무 화면 DIV

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        /**
         * @description 화면 오픈
         */
        this.form_onload = function(obj,e)
        {
        	// QuickView 실행
        	if (nexacro._quickview_formurl)
        	{
        		this.btnFull.set_visible(false);
        		this.btnFull.set_width(0);
        		this.resetScroll();
        		this.fvDivWork.form.set_url(nexacro._quickview_formurl);
        		this.divTitle.form.fnSetAuthBtn("1111000");

        		// title 처리
        		var pThis = this
        		nexacro._OnceCallbackTimer.callonce(pThis, function () {
        			pThis.fnSetDivTitle("[QUICKVIEW]\t" + pThis.fvDivWork.form.titletext);
        		}, 2000);
        		return;
        	}

        	// 넘어온 아규먼트 셋팅
        	this.fnSetOwnFrameArgu(this);

        	// 권한 가져오기
        	this.fvButtonAuth    = this.gfnGetAuthButton(this.fvMenuId);	// 공통버튼 권한
        	this.fvSearchScopeCd = this.gfnGetSearchScope(this.fvMenuId);	// 조회범위

        	// 타이틀영역 셋팅
        	this.fnSetDivTitle();

        	// form 로딩시 화면에 표시할 page URL 설정
        	this.fvDivWork.form.set_url(this.fvMenuUrl);
        	//this.form_onsize();

        	// 프로그램 호출 현황
        	this.fnMenuOpenLog();

        	if (system.navigatorname != "nexacro")
        	{	//메뉴영역 드래그 이벤트
        		this.divSplitter.set_visible(true);
        		this.getJQueryId(this.divSplitter).on('mousedown', function(e) {
        				$(document).bind('mousemove', this.fnResize);
        				$(document).bind('mouseup'	, this.fnStopResize);
        			}.bind(this));
        	}
        };

        /**
         * @description 화면 닫기
         */
        this.form_onclose = function(obj, e)
        {
        	if(nexacro._quickview_formurl) return;
        	try
        	{
        		// WorkFrame 화면일때만 창 닫기
        		if (e.fromobject == "[object Form]" && e.fromobject.name == "frmWork")
        		{
        			var sWinId = this.getOwnerFrame().name;
        			if (this.objApp.gvFrmMdi.form.bClose)
        			{
        				this.objApp.gvFrmMdi.form.bClose = false;
        				this.objApp.gvFrmMdi.form.fnTabOnClose(sWinId);
        				this.fvDivWork.set_url("");
        			}
        		}
        	}
        	catch(e)
        	{

        	}
        }

        this.form_onsize = function(obj,e)
        {
        	this.divWork.set_right(0);
        	this.fnSetDivTitle(); //리사이즈 시 버튼위치 적용
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //메뉴오픈로그
        this.fnMenuOpenLog = function ()
        {
        	if(nexacro._quickview_formurl) return;
        	this.gfnSaveMenuOpenLog("MENU", this.fvPrgmId, this.fvMenuId);
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/

        this.fnMsgCallback = function (sMsgId, sRtn)
        {
        	switch (sMsgId)
        	{
        		case "exportButton":
        			if (sRtn)
        			{
        				this.objApp.gvFrmMdi.form.fnOpenPuGubun();
        			}
        			break;
        		default:
        			break;
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        /**
         * @description workFrame close 시 처리
         * @param N/A
         * @return N/A
        */
        this.fnWorkFrameClose = function()
        {
        	if(nexacro._quickview_formurl) return;
        	var bReturn = true;

        	// 마지막 컴포넌트 데이터셋  업데이트
        	this.gfnUpdateToDataset();

        	try
        	{
        		if (this.gfnIsNull(this.fvDivWork.form.lookup("cfnClose")))
        		{
        			// 로컬환경에서 fnClose 함수 없음 알림
        			if (this.gfnGetRunMode() == "L" || this.gfnGetRunMode() == "S")
        			{
        				this.gfnLog("해당화면에 cfnClose 함수가 없습니다. cfnClose 함수가 없으면 데이타 변경여부 체크를 하지 않습니다.");
        			}
        		} else
        		{
        			bReturn = this.fvDivWork.form.cfnClose();
        		}
        	} catch(e)
        	{
        		bReturn = true;
        		this.gfnLog("cfnClose() : " + e.message ,"error");
        	}

        	return bReturn;
        };

        /**
         * @description 넘어온 아규먼트 처리 설정
         * @param  {Object} objForm - this(현재form)
         * @return N/A
         * @example
         * this.fnSetOwnFrameArgu(this);
         */
        this.fnSetOwnFrameArgu = function(objForm)
        {
        	if(nexacro._quickview_formurl) return;
        	this.fvWinKey     		= this.gfnGetArgument(this.FRAME_MENUCOLUMNS.winId);
        	this.fvMenuId     		= this.gfnGetArgument(this.FRAME_MENUCOLUMNS.menuId);
        	this.fvMenuNm     		= this.gfnGetArgument(this.FRAME_MENUCOLUMNS.menuNm);
        	this.fvMenuUrl			= this.gfnGetArgument(this.FRAME_MENUCOLUMNS.menuUrl);
        	this.fvPrgmId			= this.gfnGetArgument(this.FRAME_MENUCOLUMNS.prgmId);
        	this.fvObjArgs   		= this.gfnGetArgument(this.FRAME_MENUCOLUMNS.param);
        	this.fvMenuArgs   		= this.gfnGetArgument("menuParam");
        	this.fvMenuNavi 		= this.gfnGetArgument("menuNavi");
        	this.fvSearchScopeCd	= this.gfnGetArgument("searchScopeCd");
        };

        /**
         * @description 타이틀영역의 타이틀텍스트, 공통버튼 셋팅
         * @param N/A
         * @return N/A
         * @example
         * this.fnSetOwnFrameArgu(this);
         */
        this.fnSetDivTitle = function(vTitle)
        {
        	// QucikView 실행
        	if(nexacro._quickview_formurl) {
        		this.divTitle.form.staNavi.set_text(vTitle);
        		return;
        	}

        	// 타이틀 세팅
        	this.divTitle.form.staNavi.set_text(this.gfnTrim(this.fvMenuNavi)+ " ");
        	this.divTitle.form.resetScroll();

        	// 공통버튼 사용 여부
        	if(this.objApp.gvIsComBtnUse) {
        		// 공통버튼 권한 세팅
        		this.divTitle.form.fnSetAuthBtn(this.fvButtonAuth);
        	}
        };

        this.fnSetStatus = function ()
        {
        	var sStatus = this.btnFull.uStatus;
        	if( this.gfnIsNull(sStatus)) sStatus = "normal";

        	var sGoStatus = (sStatus=="normal"?"max":"normal");
        	var sFullText = (sGoStatus=="normal"?"btn_WF_Full":"btn_WF_Normal");

        	this.btnFull.uStatus = sGoStatus;
        	this.btnFull.set_cssclass(sFullText);

        	return sGoStatus;
        };

        //메뉴영역 드래그시작
        this.fnResize = function(e)
        {
        	var objApp = nexacro.getApplication();
        	objApp.gvFrmMdi.form.btnLeftMenuShowHide.set_cssclass("btn_MDI_Close");
        	objApp.gvFrmLeft.form.fvMenuStatus = "open";

        	var presetWidth = e.clientX;
        	presetWidth = presetWidth < 50 ? 50 : presetWidth > 300 ? 300 : presetWidth;
        	objApp.gvHfrs.set_separatesize(presetWidth + ", *" );
        }

        //메뉴영역 드래그종료
        this.fnStopResize = function(e)
        {
        	$(document).unbind('mousemove', this.resize);
        	$(document).unbind('mouseup', this.stopResize);
        }
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/

        this.btnFull_onclick = function(obj,e)
        {
        	if (obj.tooltiptext == "전체화면 확대") {
        		obj.set_tooltiptext("표준화면 축소");
        	}
        	else {
        		obj.set_tooltiptext("전체화면 확대");
        	}

        	var sGoStatus = this.fnSetStatus();
        	this.gfnSetWorkMode(sGoStatus);

        	this.resetScroll();
        };

        /**
         * @description mdi 화면분리 클릭 이벤트
         */
        this.btnExport_onclick = function(obj,e)
        {
        	this.gfnAlert("confirm.init",[""], "exportButton", "fnMsgCallback");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.btnExport.addEventHandler("onclick",this.btnExport_onclick,this);
            this.btnFull.addEventHandler("onclick",this.btnExport_onclick,this);
            this.btnInfo.addEventHandler("onclick",this.btnFull_onclick,this);
        };
        this.loadIncludeScript("frmWork.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
