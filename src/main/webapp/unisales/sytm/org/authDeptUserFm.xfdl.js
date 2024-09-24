(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("authDeptUserFm");
            this.set_titletext("조직도");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsDeptList", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HIPO_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"HIPO_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_KORN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ENGL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ABBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ENGL_ABBR_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_SHOW_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_YN\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_FLAG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_LVL\" type=\"STRING\" size=\"256\"/><Column id=\"BEFO_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_FRDT\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_TODT\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_ID\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"INPT_IP\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_ID\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_DTTM\" type=\"STRING\" size=\"256\"/><Column id=\"CHGE_IP\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUserList", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PASSWORD\" type=\"STRING\" size=\"256\"/><Column id=\"KORN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ENGL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"USER_FLAG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WKGD_CD\" type=\"STRING\" size=\"256\"/><Column id=\"WKDT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OCCU_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CHAG_WORK\" type=\"STRING\" size=\"256\"/><Column id=\"JOIN_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"RETR_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"HOOF_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"REGI_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"BIR_DT\" type=\"STRING\" size=\"256\"/><Column id=\"CELL_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE1\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE2\" type=\"STRING\" size=\"256\"/><Column id=\"PHONE3\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"ZIP_NUMB\" type=\"STRING\" size=\"256\"/><Column id=\"BASC_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"DTL_ADDR\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"HOOF_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"USER_FLAG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USED_YN\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCondDept", this);
            obj._setContents("<ColumnInfo><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"HOOF_STAT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USED_YN\" type=\"STRING\" size=\"256\"/><Column id=\"COMPANY_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"USED_YN\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"50","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10","48","28","25",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staCompany","0","12","87","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_text("회사구분");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboCompany","staCompany:0","12","139","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_innerdataset("gdsCompany");
            obj.set_codecolumn("SSC_CD");
            obj.set_datacolumn("SSC_CD_KORN_NM");
            obj.set_text("알림");
            obj.set_value("INF");
            obj.set_index("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle00","cboCompany:0","12","86","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("재직상태");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboHoofStat","staTitle00:0","12","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.getSetter("uUse").set("false");
            obj.set_text("재직");
            obj.set_value("HO");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staTitle03_00","cboHoofStat:0","12","86","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_text("직원구분");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("cboUserFlagCd","staTitle03_00:0","12","80","24",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_value("");
            obj.set_index("-1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static04_00",null,"0","20",null,"0","0",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W20");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00","0","50",null,"43","920",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("부서");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Static("sta10","400","50","179","43",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("부서별 사용자");
            obj.set_cssclass("sta_WF_SubTitle");
            this.addChild(obj.name, obj);

            obj = new Grid("grdUserList","400","sta10:0",null,null,"20","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("dsUserList");
            obj.getSetter("uFunction").set("filter,sort,!colfix,!initial,find");
            obj.set_autoenter("select");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"115\"/><Column size=\"127\"/><Column size=\"133\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"사용자 ID\"/><Cell col=\"1\" text=\"사번/ID\"/><Cell col=\"2\" text=\"사용자명\"/><Cell col=\"3\" text=\"직책\"/><Cell col=\"4\" text=\"직급\"/><Cell col=\"5\" text=\"재직상태\"/></Band><Band id=\"body\"><Cell text=\"bind:USER_ID\"/><Cell col=\"1\" text=\"bind:EMP_NO\"/><Cell col=\"2\" text=\"bind:KORN_NM\"/><Cell col=\"3\" text=\"bind:WKDT_CD\"/><Cell col=\"4\" text=\"bind:WKGD_CD\"/><Cell col=\"5\" text=\"bind:HOOF_STAT_CD\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grdDeptList","0","staTitle00:0",null,null,"grdUserList:20","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("dsDeptList");
            obj.set_autofittype("col");
            obj.getSetter("uFunction").set("!filter,!sort,!colfix,!initial");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"240\"/><Column size=\"90\"/><Column size=\"58\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"부서명\"/><Cell col=\"1\" text=\"부서코드\"/><Cell col=\"2\" text=\"부서구분\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_KORN_NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:DEPT_LVL\"/><Cell col=\"1\" text=\"bind:DEPT_CD\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:DEPT_FLAG_CD\" textAlign=\"right\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1050,736,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item3","divSearch.form.cboHoofStat","value","dsCond","HOOF_STAT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","divSearch.form.cboUserFlagCd","value","dsCond","USER_FLAG_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.cboCompany","value","dsCond","COMPANY_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("authDeptUserFm.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	authDeptUserFm.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2022/03/10
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2022/03/10			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/


        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj, e);

        	var param =
        	[
        		  {biztype : "Combo", code : "SM08", selecttype : "A", objid : this.divSearch.form.cboHoofStat}				// 재직상태
        		, {biztype : "Combo", code : "SM04", selecttype : "A", objid : this.divSearch.form.cboUserFlagCd}				// 재직상태
        		, {biztype : "Grid",  code : "SM03", objid : this.grdDeptList, bindcolumn : "DEPT_FLAG_CD", edit : "false"}	// grid 부서구분 - 03/15 추가
        		, {biztype : "Grid",  code : "SM05", objid : this.grdUserList, bindcolumn : "WKGD_CD", edit : "false"}		// grid 직급코드
        		, {biztype : "Grid",  code : "SM06", objid : this.grdUserList, bindcolumn : "WKDT_CD", edit : "false"}		// grid 직책코드
        		, {biztype : "Grid",  code : "SM08", objid : this.grdUserList, bindcolumn : "HOOF_STAT_CD", edit : "false"}	// grid 재직상태
        	];
        	this.gfnGetCommonCode(param);

        	this.divSearch.form.cboHoofStat.set_index(1);
        	this.divSearch.form.cboUserFlagCd.set_index(1);

        	var arrComp = [this.divSearch.form.cboCompany];
        	this.gfnSetAuthorityCompany(arrComp);
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 부서 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	this.dsCond.setColumn(0, "DEPT_CD", null);
        	this.dsCondDept.setColumn(0, "COMPANY_CD", this.divSearch.form.cboCompany.value);

        	var strSvcId    = "selectDeptList";
        	var strSvcUrl   = "selectDeptList.do";
        	var inData      = "dsCond=dsCondDept";
        	var outData     = "dsDeptList=dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/


        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        /**
         * @description Transaction CallBack 함수(선택)
        */
        this.fnCallback = function(svcID,errorCode,errorMsg)
        {
        	// 에러 시 화면 처리 내역
        	if(errorCode != 0){
        		return;
        	}

        	switch(svcID)
        	{
        		case "selectDeptList":
        			break;
        		case "searchUserInfo":
        			break;
        		default :
        			break;
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        // 사용자 조회
        this.fnSearchUser = function ()
        {
        	var strSvcId    = "searchUserInfo";
        	var strSvcUrl   = "searchUserInfo.do";
        	var inData      = "dsCond=dsCond";
        	var outData     = "dsUserList=dsList";
        	var strArg      = "";
        	var callBackFnc = "fnCallback";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.cfnSearch();
        };

        // 부서 변경 시 사용자 목록 조회
        this.dsDeptList_onrowposchanged = function(obj,e)
        {
        	var sDeptCode = this.dsDeptList.getColumn(e.newrow, "DEPT_CD"); // 부서별 사용자 조회를 위해 좌측 부서 그리드에서 부서코드 받아와
        	this.dsCond.setColumn(0, "DEPT_CD", sDeptCode);				 	// dsCond의 DEPT_CD 컬럼에 세팅.

        	this.fnSearchUser();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.dsDeptList.addEventHandler("onrowposchanged",this.dsDeptList_onrowposchanged,this);
        };
        this.loadIncludeScript("authDeptUserFm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
