(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("megamenu");
            this.set_titletext("메가메뉴");
            this.set_cssclass("frm_MF_MegaMenu");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,2350);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds00", this);
            obj._setContents("<ColumnInfo><Column id=\"커뮤니티관리\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"커뮤니티관리\">게시판 관리</Col></Row><Row><Col id=\"커뮤니티관리\">일정 관리</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds01", this);
            obj._setContents("<ColumnInfo><Column id=\"전사공지\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"전사공지\">전사 공지</Col></Row><Row><Col id=\"전사공지\">전사 공지(카드형)</Col></Row><Row><Col id=\"전사공지\">전사 일정</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds02", this);
            obj._setContents("<ColumnInfo><Column id=\"일정\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"일정\">일정 모아보기</Col></Row><Row><Col id=\"일정\">일정 검색</Col></Row><Row><Col id=\"일정\">컨설팅그룹 일정</Col></Row><Row><Col id=\"일정\">컨설팅팀 일정</Col></Row><Row><Col id=\"일정\">디자인팀 일정</Col></Row><Row><Col id=\"일정\">UX팀 일정</Col></Row><Row><Col id=\"일정\">씨엔에스-컨설팅1그룹 일정</Col></Row><Row><Col id=\"일정\">씨엔에스-컨설팅2그룹 일정</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds03", this);
            obj._setContents("<ColumnInfo><Column id=\"주간보고\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"주간보고\">컨설팅팀 주간보고</Col></Row><Row><Col id=\"주간보고\">UX팀 주간보고</Col></Row><Row><Col id=\"주간보고\">디자인팀 주간보고</Col></Row><Row><Col id=\"주간보고\">씨엔에스-컨설팅1그룹 주간보고</Col></Row><Row><Col id=\"주간보고\">씨엔에스-컨설팅2그룹 주간보고</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds04", this);
            obj._setContents("<ColumnInfo><Column id=\"고객의소리\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"고객의소리\">VOC</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds05", this);
            obj._setContents("<ColumnInfo><Column id=\"자유게시판\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"자유게시판\">아이디어 게시판</Col></Row><Row><Col id=\"자유게시판\">자유게시판 (추가기능O)</Col></Row><Row><Col id=\"자유게시판\">자유게시판 (추가기능X)</Col></Row><Row><Col id=\"자유게시판\">자유게시판 (파일)</Col></Row><Row><Col id=\"자유게시판\">자유게시판 (답글)</Col></Row><Row><Col id=\"자유게시판\">자유게시판 (댓글)</Col></Row><Row><Col id=\"자유게시판\">주간보고</Col></Row><Row><Col id=\"자유게시판\">주간보고(파일첨부x)</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds06", this);
            obj._setContents("<ColumnInfo><Column id=\"공통기능\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"공통기능\">스크립트 표준</Col></Row><Row><Col id=\"공통기능\">트랜잭션</Col></Row><Row><Col id=\"공통기능\">팝업</Col></Row><Row><Col id=\"공통기능\">메세지</Col></Row><Row><Col id=\"공통기능\">정합성 체크</Col></Row><Row><Col id=\"공통기능\">그리드 공통기능</Col></Row><Row><Col id=\"공통기능\">그리드 페이징</Col></Row><Row><Col id=\"공통기능\">액셀 import/export</Col></Row><Row><Col id=\"공통기능\">파일 upload/download</Col></Row><Row><Col id=\"공통기능\">파일 upload 미리보기</Col></Row><Row><Col id=\"공통기능\">권한 제어</Col></Row><Row><Col id=\"공통기능\">그리드 다양한 표현</Col></Row><Row><Col id=\"공통기능\">그리드 그룹/Suppress</Col></Row><Row><Col id=\"공통기능\">Div 동적생성</Col></Row><Row><Col id=\"공통기능\">Tabpage 동적생성</Col></Row><Row><Col id=\"공통기능\">테스트</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds07", this);
            obj._setContents("<ColumnInfo><Column id=\"가이드\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"가이드\">컴포넌트1</Col></Row><Row><Col id=\"가이드\">컴포넌트2</Col></Row><Row><Col id=\"가이드\">컴포넌트3</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds08", this);
            obj._setContents("<ColumnInfo><Column id=\"템플릿\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"템플릿\">Single-Detail</Col></Row><Row><Col id=\"템플릿\">List-Detail1</Col></Row><Row><Col id=\"템플릿\">List-Detail2</Col></Row><Row><Col id=\"템플릿\">Master-Detail</Col></Row><Row><Col id=\"템플릿\">Master-Detail-V</Col></Row><Row><Col id=\"템플릿\">Master-Detail-H</Col></Row><Row><Col id=\"템플릿\">Master-Detail-VVV</Col></Row><Row><Col id=\"템플릿\">Master-List-Detail-VHH</Col></Row><Row><Col id=\"템플릿\">Master-List-Detail-HVV</Col></Row><Row><Col id=\"템플릿\">Tree</Col></Row><Row><Col id=\"템플릿\">Shuttle</Col></Row><Row><Col id=\"템플릿\">Tab</Col></Row><Row><Col id=\"템플릿\">Popup</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds09", this);
            obj._setContents("<ColumnInfo><Column id=\"권한관리\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"권한관리\">프로그램 관리</Col></Row><Row><Col id=\"권한관리\">메뉴 관리</Col></Row><Row><Col id=\"권한관리\">권한그룹별 권한 관리</Col></Row><Row><Col id=\"권한관리\">권한그룹별 사용자 관리</Col></Row><Row><Col id=\"권한관리\">개인별 권한 관리</Col></Row><Row><Col id=\"권한관리\">사용자별 권한 조회</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div00","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_text("div00");
            obj.set_cssclass("div_MF_MegaMenu");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","40","15","83","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("DevPack N");
            obj.set_cssclass("sta_MF_Logo");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta01","133","15","120","60",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("전체메뉴보기");
            obj.set_cssclass("sta_MF_Title");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btn00",null,"25","40","40","30",null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_cssclass("btn_MF_Close");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta02","80","140",null,"70","80",null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("커뮤니티");
            obj.set_cssclass("sta_MF_Menu");
            this.div00.addChild(obj.name, obj);

            obj = new Grid("grd00","100","220","180","340",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_cssclass("grd_MF_MegaMenu");
            obj.set_binddataset("ds00");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell text=\"커뮤니티 관리\"/></Band><Band id=\"body\"><Cell text=\"bind:커뮤니티관리\"/></Band></Format></Formats>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta03","80","grd00:50",null,"70","80",null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("개발표준");
            obj.set_cssclass("sta_MF_Menu");
            this.div00.addChild(obj.name, obj);

            obj = new Grid("grd06","100","sta03:10","180","620",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_binddataset("ds06");
            obj.set_autofittype("col");
            obj.set_cssclass("grd_MF_MegaMenu");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell text=\"공통 기능\"/></Band><Band id=\"body\"><Cell text=\"bind:공통기능\"/></Band></Format></Formats>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta04","80","grd06:50",null,"70","80",null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text("디자인");
            obj.set_cssclass("sta_MF_Menu");
            this.div00.addChild(obj.name, obj);

            obj = new Grid("grd09","100","sta04:10","180","450",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("8");
            obj.set_cssclass("grd_MF_MegaMenu");
            obj.set_binddataset("ds07");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"가이드\"/></Band><Band id=\"body\"><Cell text=\"bind:가이드\"/></Band></Format></Formats>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta05","100","grd09:50",null,"70","100",null,null,null,null,null,this.div00.form);
            obj.set_taborder("9");
            obj.set_text("시스템관리");
            obj.set_cssclass("sta_MF_Menu");
            this.div00.addChild(obj.name, obj);

            obj = new Grid("grd01","280","220","180","340",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("10");
            obj.set_cssclass("grd_MF_MegaMenu");
            obj.set_binddataset("ds01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell text=\"전사 공지 및 일정\"/></Band><Band id=\"body\"><Cell text=\"bind:전사공지\"/></Band></Format></Formats>");
            this.div00.addChild(obj.name, obj);

            obj = new Grid("grd02","460","220","180","340",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("11");
            obj.set_cssclass("grd_MF_MegaMenu");
            obj.set_binddataset("ds02");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell text=\"일정\"/></Band><Band id=\"body\"><Cell text=\"bind:일정\"/></Band></Format></Formats>");
            this.div00.addChild(obj.name, obj);

            obj = new Grid("grd03","640","220","180","340",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("12");
            obj.set_cssclass("grd_MF_MegaMenu");
            obj.set_binddataset("ds03");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell text=\"주간보고\"/></Band><Band id=\"body\"><Cell text=\"bind:주간보고\"/></Band></Format></Formats>");
            this.div00.addChild(obj.name, obj);

            obj = new Grid("grd04","820","220","180","340",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("13");
            obj.set_cssclass("grd_MF_MegaMenu");
            obj.set_binddataset("ds04");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell text=\"고객의 소리\"/></Band><Band id=\"body\"><Cell text=\"bind:고객의소리\"/></Band></Format></Formats>");
            this.div00.addChild(obj.name, obj);

            obj = new Grid("grd05","1000","220","180","340",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("14");
            obj.set_cssclass("grd_MF_MegaMenu");
            obj.set_binddataset("ds05");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell text=\"자유게시판 유형별 테스트\" letterSpacing=\"-1px\"/></Band><Band id=\"body\"><Cell text=\"bind:자유게시판\"/></Band></Format></Formats>");
            this.div00.addChild(obj.name, obj);

            obj = new Grid("grd07","280","690","180","620",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("15");
            obj.set_cssclass("grd_MF_MegaMenu");
            obj.set_binddataset("ds01");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell text=\"전사 공지 및 일정\"/></Band><Band id=\"body\"><Cell text=\"bind:전사공지\"/></Band></Format></Formats>");
            this.div00.addChild(obj.name, obj);

            obj = new Grid("grd08","460","690","180","620",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("16");
            obj.set_cssclass("grd_MF_MegaMenu");
            obj.set_binddataset("ds02");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"35\"/></Rows><Band id=\"head\"><Cell text=\"일정\"/></Band><Band id=\"body\"><Cell text=\"bind:일정\"/></Band></Format></Formats>");
            this.div00.addChild(obj.name, obj);

            obj = new Grid("grd10","280","1440","180","450",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("17");
            obj.set_cssclass("grd_MF_MegaMenu");
            obj.set_binddataset("ds08");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"템플릿\"/></Band><Band id=\"body\"><Cell text=\"bind:템플릿\"/></Band></Format></Formats>");
            this.div00.addChild(obj.name, obj);

            obj = new Grid("grd11","100","sta05:10","180","240",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("18");
            obj.set_cssclass("grd_MF_MegaMenu");
            obj.set_binddataset("ds09");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"권한관리\"/></Band><Band id=\"body\"><Cell text=\"bind:권한관리\"/></Band></Format></Formats>");
            this.div00.addChild(obj.name, obj);

            obj = new Grid("grd12","280","2020","180","240",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("19");
            obj.set_cssclass("grd_MF_MegaMenu");
            obj.set_binddataset("ds09");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"권한관리\"/></Band><Band id=\"body\"><Cell text=\"bind:권한관리\"/></Band></Format></Formats>");
            this.div00.addChild(obj.name, obj);

            obj = new Grid("grd13","460","2020","180","240",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("20");
            obj.set_cssclass("grd_MF_MegaMenu");
            obj.set_binddataset("ds09");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"권한관리\"/></Band><Band id=\"body\"><Cell text=\"bind:권한관리\"/></Band></Format></Formats>");
            this.div00.addChild(obj.name, obj);

            obj = new Grid("grd14","640","2020","180","240",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("21");
            obj.set_cssclass("grd_MF_MegaMenu");
            obj.set_binddataset("ds09");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/></Columns><Rows><Row size=\"50\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"권한관리\"/></Band><Band id=\"body\"><Cell text=\"bind:권한관리\"/></Band></Format></Formats>");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta06","110","2310","157","40",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("22");
            this.div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
        };
        this.loadIncludeScript("MegaMenu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
