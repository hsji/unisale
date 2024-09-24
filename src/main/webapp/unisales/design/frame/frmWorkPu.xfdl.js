(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmWorkPu");
            this.set_titletext("WorkFrame");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1070,808);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("divMainTitle","0","0",null,"40","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_POP_TitleBg");
            this.addChild(obj.name, obj);

            obj = new Button("btnImport","1000","6","28","28",null,null,null,null,null,null,this.divMainTitle.form);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_In");
            obj.set_tooltiptext("팝업결합");
            this.divMainTitle.addChild(obj.name, obj);

            obj = new Div("divTitle","13","-6",null,"40","btnImport:3",null,null,null,null,null,this.divMainTitle.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_url("frame::frmWorkTitleDv.xfdl");
            obj.set_formscrolltype("none");
            this.divMainTitle.addChild(obj.name, obj);

            obj = new Button("btnClose","btnImport:3","4","31","31",null,null,null,null,null,null,this.divMainTitle.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_POP_Close");
            obj.set_tooltiptext("창닫기");
            this.divMainTitle.addChild(obj.name, obj);

            obj = new Div("divWork","20","60",null,null,"0","20","1048",null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("div00");
            obj.set_cssclass("div_WF_Frame");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMainTitle.form.divTitle
            obj = new Layout("default","",0,0,this.divMainTitle.form.divTitle.form,function(p){});
            this.divMainTitle.form.divTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMainTitle.form
            obj = new Layout("default","",0,0,this.divMainTitle.form,function(p){});
            this.divMainTitle.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divWork.form
            obj = new Layout("default","",0,0,this.divWork.form,function(p){});
            this.divWork.form.addLayout(obj.name, obj);

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
        this.registerScript("frmWorkPu.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	frmWorkPu.xfdl
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
        	// 넘어온 아규먼트 셋팅
        	this.fnSetOwnFrameArgu(this);

        	// 권한 가져오기
        	this.fvButtonAuth    = this.gfnGetAuthButton(this.fvMenuId);	// 공통버튼 권한
        	this.fvSearchScopeCd = this.gfnGetSearchScope(this.fvMenuId);	// 조회범위

        	// 타이틀영역 셋팅
        	this.fnSetDivTitle();

        	// form 로딩시 화면에 표시할 page URL 설정
        	this.fvDivWork.set_url(this.fvMenuUrl);

        	// 프로그램 호출 현황
        	this.fnMenuOpenLog();
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
        		case "importButton":
        			if (sRtn)
        			{
        				var rtnValue = this.getOwnerFrame().arguments.MENU_ID;
        				this.gfnClosePopup(rtnValue);
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
        	// 타이틀 세팅
        	this.divMainTitle.form.divTitle.form.staNavi.set_cssclass("sta_WF_ExTitle");
        	this.divMainTitle.form.divTitle.form.staNavi.set_text(this.gfnTrim(this.fvMenuNavi)+ " ");
        	this.divMainTitle.form.resetScroll();

        	// 공통버튼 사용 여부
        	if(this.objApp.gvIsComBtnUse) {
        		// 공통버튼 권한 세팅
        		this.divMainTitle.form.divTitle.form.fnSetAuthBtn(this.fvButtonAuth);
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

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        /**
         * @description MDI 화면 결합 이벤트
         */
        this.btnImport_onclick = function(obj,e)
        {
        	this.gfnAlert("confirm.init",[""], "importButton", "fnMsgCallback");
        };

        /**
         * @description 창닫기
         */
        this.btnClose_onclick = function(obj,e)
        {
        	this.close();
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onclose",this.form_onclose,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.divMainTitle.form.btnImport.addEventHandler("onclick",this.btnImport_onclick,this);
            this.divMainTitle.form.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
        };
        this.loadIncludeScript("frmWorkPu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
