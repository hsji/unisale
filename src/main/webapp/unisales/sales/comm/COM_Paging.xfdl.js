(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CommPaging");
            this.set_titletext("페이징");
            this.getSetter("classname").set("CommPaging");
            if (Form == this.constructor)
            {
                this._setFormPosition(969,24);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_pageListCnt", this);
            obj.getSetter("firefirstcount").set("0");
            obj.getSetter("firenextcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"cd\" type=\"STRING\" size=\"256\"/><Column id=\"nm\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"cd\">10</Col><Col id=\"nm\">10</Col></Row><Row><Col id=\"cd\">20</Col><Col id=\"nm\">20</Col></Row><Row><Col id=\"cd\">30</Col><Col id=\"nm\">30</Col></Row><Row><Col id=\"cd\">40</Col><Col id=\"nm\">40</Col></Row><Row><Col id=\"cd\">50</Col><Col id=\"nm\">50</Col></Row><Row><Col id=\"cd\">100</Col><Col id=\"nm\">100</Col></Row><Row><Col id=\"cd\">200</Col><Col id=\"nm\">200</Col></Row><Row><Col id=\"cd\">500</Col><Col id=\"nm\">500</Col></Row><Row><Col id=\"cd\">1000</Col><Col id=\"nm\">1000</Col></Row><Row><Col id=\"cd\">2000</Col><Col id=\"nm\">2000</Col></Row><Row><Col id=\"cd\">3000</Col><Col id=\"nm\">3000</Col></Row><Row><Col id=\"cd\">4000</Col><Col id=\"nm\">4000</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_goPre","26","0","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_WF_pagingPrev");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_goPreFirst","0","0","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_WF_pagingPrev2");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_goNext","406","0","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_WF_pagingNext");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_goNextEnd","432","0","24","24",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_pagingNext2");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_page_1","54","0","33","24",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("1");
            obj.set_cssclass("btn_WF_paging");
            obj.getSetter("pageidx").set("1");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_page_2","89","0","33","24",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("2");
            obj.set_cssclass("btn_WF_paging");
            obj.getSetter("pageidx").set("2");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_page_3","124","0","33","24",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("3");
            obj.set_cssclass("btn_WF_paging");
            obj.getSetter("pageidx").set("3");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_page_4","159","0","33","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("4");
            obj.set_cssclass("btn_WF_paging");
            obj.getSetter("pageidx").set("4");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_page_5","194","0","33","24",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("5");
            obj.set_cssclass("btn_WF_paging");
            obj.getSetter("pageidx").set("5");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_page_6","229","0","33","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("6");
            obj.set_cssclass("btn_WF_paging");
            obj.getSetter("pageidx").set("6");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_page_7","264","0","33","24",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("7");
            obj.set_cssclass("btn_WF_paging");
            obj.getSetter("pageidx").set("7");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_page_8","299","0","33","24",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("8");
            obj.set_cssclass("btn_WF_paging");
            obj.getSetter("pageidx").set("8");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_page_9","334","0","33","24",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("9");
            obj.set_cssclass("btn_WF_paging");
            obj.getSetter("pageidx").set("9");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btn_page_10","369","0","33","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("10");
            obj.set_cssclass("btn_WF_paging");
            obj.getSetter("pageidx").set("10");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_goPage","600","1","343","22",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_totPage","54","0","40","22",null,null,null,null,null,null,this.div_goPage.form);
            obj.set_taborder("0");
            obj.set_value("9,999");
            obj.set_readonly("true");
            this.div_goPage.addChild(obj.name, obj);

            obj = new Button("btn_goPage","96","0","74","22",null,null,null,null,null,null,this.div_goPage.form);
            obj.set_taborder("1");
            obj.set_text("페이지이동");
            obj.getSetter("TL_SEQ").set("22650");
            this.div_goPage.addChild(obj.name, obj);

            obj = new Edit("edt_curPage","0","0","40","22",null,null,null,null,null,null,this.div_goPage.form);
            obj.set_taborder("2");
            obj.set_value("9,999");
            obj.set_autoselect("true");
            obj.set_inputtype("number");
            this.div_goPage.addChild(obj.name, obj);

            obj = new Static("Static00","40","0","14","22",null,null,null,null,null,null,this.div_goPage.form);
            obj.set_taborder("3");
            obj.set_text("/");
            this.div_goPage.addChild(obj.name, obj);

            obj = new Combo("cbo_pageListCnt","172","0","57","22",null,null,null,null,null,null,this.div_goPage.form);
            obj.set_taborder("4");
            obj.set_innerdataset("ds_pageListCnt");
            obj.set_codecolumn("cd");
            obj.set_datacolumn("nm");
            obj.set_text("20");
            obj.set_value("20");
            obj.set_index("1");
            this.div_goPage.addChild(obj.name, obj);

            obj = new Static("Static01","232","4","95","16",null,null,null,null,null,null,this.div_goPage.form);
            obj.set_taborder("5");
            obj.set_text("개씩 보기");
            obj.getSetter("TL_SEQ").set("22651");
            this.div_goPage.addChild(obj.name, obj);

            obj = new Static("sta_totCnt","511","5","32","16",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("9,999");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("div_CntPreSt","460","0","50","24",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0","6","5","14",null,null,null,null,null,null,this.div_CntPreSt.form);
            obj.set_taborder("0");
            obj.set_text("(");
            this.div_CntPreSt.addChild(obj.name, obj);

            obj = new Static("Static02","6","6","30","14",null,null,null,null,null,null,this.div_CntPreSt.form);
            obj.set_taborder("1");
            obj.set_text("총");
            obj.getSetter("TL_SEQ").set("22649");
            this.div_CntPreSt.addChild(obj.name, obj);

            obj = new Static("Static03","36","6","12","14",null,null,null,null,null,null,this.div_CntPreSt.form);
            obj.set_taborder("2");
            obj.set_text(" :");
            this.div_CntPreSt.addChild(obj.name, obj);

            obj = new Div("div_CntEndSt","544","0","50","24",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("Div01");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","40","6","7","14",null,null,null,null,null,null,this.div_CntEndSt.form);
            obj.set_taborder("0");
            obj.set_text(")");
            this.div_CntEndSt.addChild(obj.name, obj);

            obj = new Static("Static04","2","6","38","14",null,null,null,null,null,null,this.div_CntEndSt.form);
            obj.set_taborder("1");
            obj.set_text("건");
            obj.getSetter("TL_SEQ").set("51");
            this.div_CntEndSt.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_goPage.form
            obj = new Layout("default","",0,0,this.div_goPage.form,function(p){});
            this.div_goPage.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_CntPreSt.form
            obj = new Layout("default","",0,0,this.div_CntPreSt.form,function(p){});
            this.div_CntPreSt.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_CntEndSt.form
            obj = new Layout("default","",0,0,this.div_CntEndSt.form,function(p){});
            this.div_CntEndSt.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","CommPaging","text","gdsLanguage","PageMove");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_goPage.btn_goPage","text","gdsLanguage","PageMove");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_goPage.Static01","text","gdsLanguage","QuantityOfView");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_CntPreSt.Static02","text","gdsLanguage","Total");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","div_CntEndSt.Static04","text","gdsLanguage","Count");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("COM_Paging.xfdl","Script::CommSystem.xjs");
        this.registerScript("COM_Paging.xfdl", function() {

        this.executeIncludeScript("Script::CommSystem.xjs"); /*include "Script::CommSystem.xjs"*/;

        this.fv_totCnt		= 0;			// 전체 로우 수
        this.fv_totPageCnt	= 30;			// 전체페이지 수
        this.fv_curPage		= 0;			// 현재페이지
        this.fv_startPage	= 1;			// 페이징버튼리스트 시작페이지
        this.fv_endPage		= 1;			// 페이징버튼리스트 마지막페이지
        this.fv_pageBtnCnt	= 10;			// 페이징버튼 갯수(최대갯수 10개)
        this.fv_pageListCnt = 20;			// 한페이지에 Display될 Row 개수

        this.fv_bVisibleGoPage = true;		// 페이지 이동영역 Visible 처리
        this.fv_parent;

        this.CommPaging_onload = function(obj, e)
        {
        	//this.fn_init();
        }

        this.fn_loadInit = function(nTotCnt, nPageBtnCnt, bVisibleGoPage, objForm)
        {
        	this.fv_parent = objForm;

        	if(this.gfnIsEmpty(nTotCnt)) {
        		this.fv_totCnt 		= 0;
        	} else {
        		this.fv_totCnt 		= nTotCnt;
        	}

        	if(!this.gfnIsEmpty(nPageBtnCnt)) {
        		this.fv_pageBtnCnt = nPageBtnCnt;
        	}

        	if(!this.gfnIsEmpty(bVisibleGoPage)) {
        		this.fv_bVisibleGoPage = bVisibleGoPage;
        	}

        	this.btn_goPreFirst.set_visible(true);
        	this.btn_goPre.set_visible(true);

        	this.fv_pageListCnt = this.div_goPage.form.cbo_pageListCnt.value;

        	var nMod = nexacro.toNumber(this.fv_totCnt)%this.fv_pageListCnt;
        	var nTotPageCnt;

        	if(nMod == 0) {
        		nTotPageCnt = nexacro.floor(nexacro.toNumber(this.fv_totCnt)/this.fv_pageListCnt);
        	} else {
        		nTotPageCnt = nexacro.floor(nexacro.toNumber(this.fv_totCnt)/this.fv_pageListCnt)+1;
        	}

        	this.fv_totPageCnt 	= nTotPageCnt;

        	//var sTotCnt = this.fv_totCnt;
        	var sTotCnt = this.fnFormatNumber(this.fv_totCnt, 3);

        	var nLen 	= String(sTotCnt).length;
        	var nWidth 	= 4 + (6*nLen);

        	this.sta_totCnt.set_width(nWidth);

        	this.sta_totCnt.set_visible(true);
        	this.sta_totCnt.set_text(sTotCnt);

        	for(var i=1;i<=10;i++)
        	{
        		var objBtn = eval("this.btn_page_"+i);

        		if(i < this.fv_pageBtnCnt) {
        			objBtn.set_visible(true);
        		} else if(i == this.fv_pageBtnCnt) {
        			var nR = objBtn.getOffsetRight();

        			this.btn_goNext.move(nR+4, 0);
        			this.btn_goNextEnd.move(this.btn_goNext.getOffsetRight()+2, 0);
        			this.div_CntPreSt.move(this.btn_goNextEnd.getOffsetRight()+10, 0);
        			this.sta_totCnt.move(this.div_CntPreSt.getOffsetRight()+2, 5);
        			this.div_CntEndSt.move(this.sta_totCnt.getOffsetRight()+2, 0);

        			//this.div_goPage.move(this.btn_goNextEnd.getOffsetRight()+10, 1);
        			this.div_goPage.move(this.div_CntEndSt.getOffsetRight()+10, 1);

        			objBtn.set_visible(true);
        			this.btn_goNext.set_visible(true);
        			this.btn_goNextEnd.set_visible(true);
        		}
        	}

        	this.div_goPage.set_visible(this.fv_bVisibleGoPage);

        	this.fn_setInit(1);
        	//this.fn_callParentSearch(this.btn_page_1.pageidx, this.btn_page_1.text);
        }

        this.fn_init = function(nTotCnt, nPageBtnCnt, bVisibleGoPage, objForm)
        {
        	if(this.gfnIsEmpty(nTotCnt)) {
        		this.fv_totCnt 		= 0;
        	} else {
        		this.fv_totCnt 		= nTotCnt;
        	}

        	// 삭제예정------------------------------
        	if(!this.gfnIsEmpty(objForm)) {
        		this.fv_parent = objForm;
        	}

        	if(!this.gfnIsEmpty(nPageBtnCnt)) {
        		this.fv_pageBtnCnt = nPageBtnCnt;
        	}

        	if(!this.gfnIsEmpty(bVisibleGoPage)) {
        		this.fv_bVisibleGoPage = bVisibleGoPage;
        	}
        	// 삭제예정------------------------------

        	this.btn_goPreFirst.set_visible(true);
        	this.btn_goPre.set_visible(true);

        	var nMod = nexacro.toNumber(this.fv_totCnt)%this.fv_pageListCnt;
        	var nTotPageCnt;

        	if(nMod == 0) {
        		nTotPageCnt = nexacro.floor(nexacro.toNumber(this.fv_totCnt)/this.fv_pageListCnt);
        	} else {
        		nTotPageCnt = nexacro.floor(nexacro.toNumber(this.fv_totCnt)/this.fv_pageListCnt)+1;
        	}

        	this.fv_totPageCnt 	= nTotPageCnt;

        	//var sTotCnt = this.fv_totCnt;
        	var sTotCnt = this.fnFormatNumber(this.fv_totCnt, 3);

        	var nLen 	= String(sTotCnt).length;
        	var nWidth 	= 4 + (6*nLen);

        	this.sta_totCnt.set_width(nWidth);

        	this.sta_totCnt.set_visible(true);
        	this.sta_totCnt.set_text(sTotCnt);

        	for(var i=1;i<=10;i++)
        	{
        		var objBtn = eval("this.btn_page_"+i);

        		if(i < this.fv_pageBtnCnt) {
        			objBtn.set_visible(true);
        		} else if(i == this.fv_pageBtnCnt) {
        			var nR = objBtn.getOffsetRight();

        			this.btn_goNext.move(nR+4, 0);
        			this.btn_goNextEnd.move(this.btn_goNext.getOffsetRight()+2, 0);
        			this.div_CntPreSt.move(this.btn_goNextEnd.getOffsetRight()+10, 0);
        			this.sta_totCnt.move(this.div_CntPreSt.getOffsetRight()+2, 5);
        			this.div_CntEndSt.move(this.sta_totCnt.getOffsetRight()+2, 0);

        			//this.div_goPage.move(this.btn_goNextEnd.getOffsetRight()+10, 1);
        			this.div_goPage.move(this.div_CntEndSt.getOffsetRight()+10, 1);

        			objBtn.set_visible(true);
        			this.btn_goNext.set_visible(true);
        			this.btn_goNextEnd.set_visible(true);
        		}
        	}

        	this.div_goPage.set_visible(this.fv_bVisibleGoPage);

        	this.fn_setInit(1);
        	//this.fn_callParentSearch(this.btn_page_1.pageidx, this.btn_page_1.text);
        }

        this.fn_goFirst = function()
        {
        	this.fv_startPage 	= 1;
        	this.fv_curPage 	= this.fv_startPage;
        	this.fn_setInit(1);
        	this.fv_parent.fnPagingInit();
        }

        // nCurPage : 현재 조회된 페이지(포커스 대상)
        this.fn_setInit = function(nCurPage)
        {
        	var nStartPage 	= this.fv_startPage;

        	this.div_goPage.form.edt_totPage.set_value(this.fv_totPageCnt);

        	for(var i=1;i<=this.fv_pageBtnCnt;i++)
        	{
        		var objBtn = eval("this.btn_page_"+i);
        		var nPageCnt = i + (nexacro.toNumber(this.fv_startPage) - 1);

        		if(nPageCnt < this.fv_totPageCnt) {
        			this.fv_endPage = nPageCnt;
        			objBtn.set_enable(true);
        		} else if(nPageCnt == this.fv_totPageCnt) {
        			this.fv_endPage = nPageCnt;
        			objBtn.set_enable(true);
        		} else {
        			objBtn.set_enable(false);
        		}

        		objBtn.set_text(nStartPage);
        		nStartPage++;
        	}

        	if(this.fv_endPage < this.fv_totPageCnt) {
        		this.btn_goNext.set_enable(true);
        		this.btn_goNextEnd.set_enable(true);

        	} else {
        		this.btn_goNext.set_enable(false);
        		this.btn_goNextEnd.set_enable(false);
        	}

        	if(this.fv_startPage > 1) {
        		this.btn_goPre.set_enable(true);
        		this.btn_goPreFirst.set_enable(true);
        	} else {
        		this.btn_goPre.set_enable(false);
        		this.btn_goPreFirst.set_enable(false);
        	}

        	this.setPageBtnStatus(nCurPage);
        }

        // 페이지버튼 현재페이지 선택표시
        this.setPageBtnStatus = function(nCurPage)
        {
        	for(var i=1;i<=this.fv_pageBtnCnt;i++)
        	{
        		var objBtn = eval("this.btn_page_"+i);

        		if(nCurPage == i) {
        			objBtn.set_cssclass("btn_WF_paging_S");
        			this.div_goPage.form.edt_curPage.set_value(objBtn.text);
        			//objBtn.setFocus();
        		} else {
        			objBtn.set_cssclass("btn_WF_paging");
        		}
        	}
        }

        this.btn_page_onclick = function(obj,  e)
        {
        	this.fn_callParentSearch(obj.pageidx, obj.text);
        }

        this.fn_callParentSearch = function(nPageIdx, nPageNum)
        {
        	this.fv_curPage = nexacro.toNumber(nPageNum);

        	this.setPageBtnStatus(nPageIdx);

        	var nStartNum 	= ((nexacro.toNumber(nPageNum)-1) * this.fv_pageListCnt)+1;
        	var nEndNum	= nexacro.toNumber(nPageNum) * this.fv_pageListCnt;

        // 	if(this.gfnGetIsWorkFrame(this)) {
        // 		this.getOwnerFrame().form.div_work.fnPagingSearch(nStartNum, nEndNum);
        // 	} else {
        // 		//this.getOwnerFrame().form.fnPagingSearch(nStartNum, nEndNum);
        // 		this.parent.fnPagingSearch(nStartNum, nEndNum);
        // 	}

        	this.fv_parent.fnPagingSearch(nStartNum, nEndNum);
        }

        // 앞으로
        this.btn_goPre_onclick = function(obj,  e)
        {
        	this.fv_startPage 	= this.fv_startPage - this.fv_pageBtnCnt;
        	this.fv_curPage 	= this.fv_startPage;
        	this.fn_setInit(1);
        	this.fn_callParentSearch(this.btn_page_1.pageidx, this.btn_page_1.text);
        }

        // 뒤로
        this.btn_goNext_onclick = function(obj,  e)
        {
        	this.fv_startPage 	= this.fv_startPage + this.fv_pageBtnCnt;
        	this.fv_curPage 	= this.fv_startPage;
        	this.fn_setInit(1);
        	this.fn_callParentSearch(this.btn_page_1.pageidx, this.btn_page_1.text);
        }

        this.btn_goPreFirst_onclick = function(obj,  e)
        {
        	this.fn_goFirst();
        }

        this.btn_goNextEnd_onclick = function(obj,  e)
        {
        	var nMod = this.fv_totPageCnt%this.fv_pageListCnt;

        	if(nMod == 0) {
        		this.fv_startPage 	= ((nexacro.floor(this.fv_totPageCnt/this.fv_pageBtnCnt)-1)*this.fv_pageBtnCnt) + 1;
        	} else {
        		this.fv_startPage 	= (nexacro.floor(this.fv_totPageCnt/this.fv_pageBtnCnt)*this.fv_pageBtnCnt) + 1;
        	}

        	this.fv_curPage 	= this.fv_startPage;
        	this.fn_setInit(1);
        	this.fn_callParentSearch(this.btn_page_1.pageidx, this.btn_page_1.text);
        }

        this.div_goPage_btn_goPage_onclick = function(obj,  e)
        {
        	this.fn_goPage();
        }

        this.fn_goPage = function()
        {
        	var nPageIdx;
        	var nPageNum;

        	if(this.gfnIsEmpty(this.div_goPage.form.edt_curPage.text)) {
        		this.div_goPage.form.edt_curPage.set_value(1);
        	}

        	nPageNum 	= this.div_goPage.form.edt_curPage.text;

        	if(this.fv_totPageCnt < nPageNum) {
        		alert("최대페이지 오버!!");
        		return;
        	} else if(nPageNum <= 0) {
        		this.div_goPage.form.edt_curPage.set_value(1);
        		nPageNum = 1;
        	}

        	nPageIdx 	= nPageNum%this.fv_pageBtnCnt;

        	var nMod = nPageNum%this.fv_pageBtnCnt;
        	if(nMod == 0) {
        		this.fv_startPage 	= ((nexacro.floor(nPageNum/this.fv_pageBtnCnt)-1)*this.fv_pageBtnCnt) + 1;
        		nPageIdx = this.fv_pageBtnCnt;
        	} else {
        		this.fv_startPage 	= (nexacro.floor(nPageNum/this.fv_pageBtnCnt)*this.fv_pageBtnCnt) + 1;
        	}

        	this.fv_curPage 	= nPageNum;
        	this.fn_setInit(nPageIdx);

        	this.fn_callParentSearch(nPageIdx, nPageNum);
        }

        this.div_goPage_edt_curPage_onkeyup = function(obj, e)
        {
        	if(e.keycode == 13) {
        		this.fn_goPage();
        	}
        }

        this.div_goPage_cbo_pageListCnt_onitemchanged = function(obj, e)
        {
        	this.fv_pageListCnt = obj.value;

        	if(this.fv_pageListCnt == "100000000"){
        		alert("전체조회는 검색조건에 저장되지 않습니다.");
        	}

        	var nMod = this.fv_totCnt%this.fv_pageListCnt;
        	var nTotPageCnt;

        	if(nMod == 0) {
        		nTotPageCnt = nexacro.floor(nexacro.toNumber(this.fv_totCnt)/this.fv_pageListCnt);
        	} else {
        		nTotPageCnt = nexacro.floor(nexacro.toNumber(this.fv_totCnt)/this.fv_pageListCnt)+1;
        	}

        	this.fv_totPageCnt 	= nTotPageCnt;

        	this.fn_goFirst();
        }

        //숫자와 콤마를 찍을자리수를 매개변수로 받음
        this.fnFormatNumber = function(v1,v2)
        {
        	var str = new Array(); //콤마스트링을 조합할 배열

        	v1 = String(v1); //숫자를 스트링으로 변환

        	for(var i=1;i<=v1.length;i++){ //숫자의 길이만큼 반복
        		if(i%v2) str[v1.length-i]=v1.charAt(v1.length-i); //자리수가 아니면 숫자만삽입
        		else  str[v1.length-i]=','+v1.charAt(v1.length-i); //자리수 이면 콤마까지 삽입
        	}

        	return str.join('').replace(/^,/,''); //스트링을 조합하여 반환
        }




        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CommPaging_onload,this);
            this.btn_goPre.addEventHandler("onclick",this.btn_goPre_onclick,this);
            this.btn_goPreFirst.addEventHandler("onclick",this.btn_goPreFirst_onclick,this);
            this.btn_goNext.addEventHandler("onclick",this.btn_goNext_onclick,this);
            this.btn_goNextEnd.addEventHandler("onclick",this.btn_goNextEnd_onclick,this);
            this.btn_page_1.addEventHandler("onclick",this.btn_page_onclick,this);
            this.btn_page_2.addEventHandler("onclick",this.btn_page_onclick,this);
            this.btn_page_3.addEventHandler("onclick",this.btn_page_onclick,this);
            this.btn_page_4.addEventHandler("onclick",this.btn_page_onclick,this);
            this.btn_page_5.addEventHandler("onclick",this.btn_page_onclick,this);
            this.btn_page_6.addEventHandler("onclick",this.btn_page_onclick,this);
            this.btn_page_7.addEventHandler("onclick",this.btn_page_onclick,this);
            this.btn_page_8.addEventHandler("onclick",this.btn_page_onclick,this);
            this.btn_page_9.addEventHandler("onclick",this.btn_page_onclick,this);
            this.btn_page_10.addEventHandler("onclick",this.btn_page_onclick,this);
            this.div_goPage.form.edt_totPage.addEventHandler("oneditclick",this.Edit00_oneditclick,this);
            this.div_goPage.form.btn_goPage.addEventHandler("onclick",this.div_goPage_btn_goPage_onclick,this);
            this.div_goPage.form.edt_curPage.addEventHandler("oneditclick",this.Edit00_oneditclick,this);
            this.div_goPage.form.edt_curPage.addEventHandler("onkeyup",this.div_goPage_edt_curPage_onkeyup,this);
            this.div_goPage.form.cbo_pageListCnt.addEventHandler("onitemchanged",this.div_goPage_cbo_pageListCnt_onitemchanged,this);
        };
        this.loadIncludeScript("COM_Paging.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
