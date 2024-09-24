(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmSiteMapDiv");
            this.set_titletext("사이트맵");
            this.set_cssclass("frm_MF_MegaMenu");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSiteMap", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LV\" type=\"STRING\" size=\"256\"/><Column id=\"HIPO_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LEAF_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_STS\" type=\"STRING\" size=\"256\"/><Column id=\"SYTM_FLAG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGridMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LV\" type=\"STRING\" size=\"256\"/><Column id=\"HIPO_MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_GRP_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LEAF_YN\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_STS\" type=\"STRING\" size=\"256\"/><Column id=\"SYTM_FLAG_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("sta00","40","15","83","60",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("DXTOBE");
            obj.set_cssclass("sta_MF_Logo");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","133","15","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("전체메뉴보기");
            obj.set_cssclass("sta_MF_Title");
            this.addChild(obj.name, obj);

            obj = new Static("staBottom","0",null,"90","90",null,"0",null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,2350,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frmSiteMapDiv.xfdl", function() {
         /**
        *  SGI
        *  @FileName 	frmMegaMenuDiv.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023.03.28
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        * 2023.03.28			TOBESOFT				MegaMenu
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.objApp = nexacro.getApplication();

        // 동적생성 컴포넌트 ID 구분
        this.fvStaPrefix = "staMenu_";
        this.fvDsPrefix = "dsGrdMenu_";
        this.fvGrdPrefix = "grdMenu_";

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {

        };


        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/

        /**
         * @description 메뉴 LV 필터 적용하여 컴포넌트 세팅
         */
        this.fnGridSetMenu = function (nCnt)
        {
        	var nGrdMenuLeft = 100;			//grid lfet 첫번째 값
        	var nGrdMenuDyLeft = 180;		//grid left 증가용
        	var nGrdMenuTop = "";			//grid top 첫번째 값
        	var nGrdMenuWidth = 180;		//grid width
        	var nGrdMenuHeight = 0; 		//grid height
        	var nGrdMenuHeightTemp = 0; 	//그리드 높이 최댓값 확인용
        	var arrGrdMenuHeightTemp = [];	//그리드 높이 최댓값 확인용 배열
        	var sGrdMenuLine; 				//static top값 설정용

        	this.dsSiteMap.copyData(this.objApp.gdsMenu);

        	var sFilter = "MENU_LV" + " == " + "0";

        	// 대메뉴 필터 적용
        	this.dsSiteMap.filter(sFilter);

        	// 중메뉴, 소메뉴 데이터셋
        	this.dsGridMenu.copyData(this.objApp.gdsMenu);

        	var nTitleCnt = this.dsSiteMap.getRowCount();
        	// 대메뉴의 갯수만큼 반복문 적용
        	for (var i = 0; i < nTitleCnt; i++)
        	{
        		var sMenuGubun = this.dsSiteMap.getColumn(i, "MENU_ID"); // 대메뉴 ID 구분
        		var sStaMenu = this.fvStaPrefix + sMenuGubun
        		var objStaMenu = this[sStaMenu];
        		arrGrdMenuHeightTemp = [];	// 대메뉴 포문 탈 때 그리드 height 배열 초기화

        		// 스태틱 컴포넌트 동적 생성
        		if (!objStaMenu)
        		{
        			if (i == 0)
        			{
        				var objStaMenu = new Static(sStaMenu, 80, 140, null, 70, 80, null); // 처음 스태틱 생성 시 고정값 지정
        			}
        			else
        			{
        				var objStaMenu = new Static(sStaMenu, 80, sGrdMenuLine+":50", null, 70, 80, null);
        			}
        			this.addChild(sStaMenu, objStaMenu);
        		}

        		var sMenuName = this.dsSiteMap.getColumn(i, "MENU_NM");
        		objStaMenu.set_text(sMenuName);
        		objStaMenu.set_cssclass("sta_MF_Menu");
        		objStaMenu.show();

        		this.dsGridMenu.filter("");

        		// 대메뉴 > 중메뉴 보이게 필터
        		var sFilter = "MENU_LV" + " == '1' && "
        			+ "MENU_FLAG_CD" + " == 'M' && "
        			+ "HIPO_MENU_ID" + " == '" + sMenuGubun + "' ";

        		this.dsGridMenu.filter(sFilter);

        		var nRowCnt = this.dsGridMenu.getRowCount();
        		// 중메뉴 갯수만큼 이중 반복문 적용
        		for (var j = 0; j < nRowCnt; j++)
        		{
        			var sMenuGubun = this.dsGridMenu.getColumn(j, "MENU_ID"); // 중메뉴 id 구분
        			var sGrdDs = this.fvDsPrefix + sMenuGubun;
        			var objGrdDs = this[sGrdDs];

        			if (!objGrdDs)
        			{
        				objGrdDs = new Dataset(objGrdDs);
        				this.addChild(sGrdDs, objGrdDs);
        			}
        			objGrdDs.set_enableevent(false);

        			objGrdDs.filter("");
        			objGrdDs.copyData(this.objApp.gdsMenu);

        			// 중메뉴 > 소메뉴 필터
        			var sFilter = "MENU_LV" + " == '2' && "
        						+ "HIPO_MENU_ID" + " == '" + sMenuGubun + "' ";

        			objGrdDs.filter(sFilter);

        			var sGrdMenu = this.fvGrdPrefix + sMenuGubun; // 동적생성 그리드 ID 구분
        			var objGrdMenu = this[sGrdMenu];

        			// 그리드 동적 생성
        			if (!objGrdMenu)
        			{
        				// 해당 그리드 갯수만큼 최대값 동적 적용
        				nGrdMenuHeight = (objGrdDs.getRowCount() * 31) + 45 + 11; // (body 31px / head 45px / 여유 11px)

        				//  하나의 대메뉴 당 중메뉴 nCnt개까지 적용 및 동적으로 포지션 적용
        				if (j % nCnt == 0)
        				{
        					arrGrdMenuHeightTemp = [];	//새로 그리기 시작하므로 높이 리셋
        					if (j == 0)
        					{
        						nGrdMenuTop = sStaMenu+":10";
        					}
        					else
        					{
        						var sStaMenuLine = sStaMenu+j;
        						var objStaMenuLine = new Static(sStaMenuLine, 80, sGrdMenuLine+":20", null, 1, 80, null);
        						this.addChild(sStaMenuLine, objStaMenuLine);
        						objStaMenuLine.set_cssclass("sta_MF_MenuLine");
        						objStaMenuLine.show();

        						nGrdMenuTop = sStaMenuLine+":10";
        					}
        					objGrdMenu = new Grid(sGrdMenu,  nGrdMenuLeft, nGrdMenuTop, nGrdMenuWidth, nGrdMenuHeight, null, null);
        				}
        				else
        				{
        					// 이전 그리드 메뉴 id 호출
        					var objGrd = this.components[this.fvGrdPrefix + this.dsGridMenu.getColumn(j-1, "MENU_ID")];
        					// objGrd.getOffsetLeft() 이전 그리드 left 값 + nGrdMenuDyLeft(180) 씩 left 값 증가
        					objGrdMenu = new Grid(sGrdMenu, objGrd.getOffsetLeft() + nGrdMenuDyLeft ,nGrdMenuTop, nGrdMenuWidth, nGrdMenuHeight, null, null);
        				}

        				// 그리드 높이 설정
        				arrGrdMenuHeightTemp.push(nGrdMenuHeight);
        				nGrdMenuHeightTemp = Math.max.apply(null, arrGrdMenuHeightTemp);

         				//해당 nGrdMenuHeight 최댓값일 시
        				if (nGrdMenuHeight == nGrdMenuHeightTemp)
        				{
        					sGrdMenuLine = sGrdMenu;
        				}
        				this.addChild(sGrdMenu, objGrdMenu);
        			}

        			// 그리드 속성 및 데이터 셋 세팅
        			objGrdMenu.set_binddataset(objGrdDs);

        			objGrdMenu.appendContentsRow("head");
        			objGrdMenu.appendContentsRow("body");

        			objGrdMenu.setFormatRowProperty( 0,"size",45 );
        			objGrdMenu.setFormatRowProperty( 1,"size",31 );

        			var sHeadText = this.dsGridMenu.getColumn(j, "MENU_NM");
        			objGrdMenu.setCellProperty("head", 0, "text", sHeadText);

        			objGrdMenu.setCellProperty("body", 0, "text", "bind:MENU_NM");
        			objGrdMenu.set_autofittype("col");
        			objGrdMenu.set_cssclass("grd_MF_MegaMenu");
        			objGrdMenu.addEventHandler("oncellclick", this.fnGrdmenu_oncellclick, this);
        			objGrdMenu.show();
        			objGrdDs.set_enableevent(true);
        		}

        	}
        	//staBottom 하단여백용
        	this.staBottom.setOffsetTop(this.components[sGrdMenuLine].getOffsetBottom());
        	this.resetScroll();
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        /**
         * @description 메가메뉴 셀 클릭 이벤트
         */
        this.fnGrdmenu_oncellclick = function(obj,e)
        {
        	var objDs = obj.getBindDataset();
        	var rtnValue = objDs.getColumn(e.row, "MENU_ID");

        	this.gfnClosePopup(rtnValue);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
        };
        this.loadIncludeScript("frmSiteMapDiv.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
