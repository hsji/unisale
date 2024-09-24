(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("orgUserListPu");
            this.set_titletext("사용자전체조회");
            if (Form == this.constructor)
            {
                this._setFormPosition(500,630);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCond", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NM\" type=\"STRING\" size=\"256\"/><Column id=\"HOOF_STAT_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_KORN_NM\" type=\"string\" size=\"32\"/><Column id=\"KORN_NM\" type=\"string\" size=\"32\"/><Column id=\"DEPT_LVL\" type=\"bigdecimal\" size=\"8\"/><Column id=\"DEPT_NEW_NAME\" type=\"string\" size=\"32\"/><Column id=\"USER_ID\" type=\"string\" size=\"32\"/><Column id=\"CELL_NUMB\" type=\"string\" size=\"32\"/><Column id=\"TITLE\" type=\"string\" size=\"32\"/><Column id=\"EMAIL\" type=\"string\" size=\"32\"/><Column id=\"DEPT_CD\" type=\"string\" size=\"32\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"GRPTYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","25.00","8",null,"43","25",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("사용자 선택");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","25","Static00:0",null,null,"25","68",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeuseexpandkey("true");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"252\"/><Column size=\"201\"/></Columns><Rows><Row size=\"32\" band=\"head\"/><Row size=\"32\"/></Rows><Band id=\"head\"><Cell text=\"소속/이름\"/><Cell col=\"1\" text=\"E-Mail\"/></Band><Band id=\"body\"><Cell text=\"bind:TITLE\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:DEPT_LVL\" treecheck=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:EMAIL\" edittype=\"normal\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnConfirm",null,null,"50","28","78","20",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("선택");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_Crud");
            this.addChild(obj.name, obj);

            obj = new Button("btnClose",null,null,"50","28","25","20",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("취소");
            obj.set_fittocontents("width");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",500,630,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ubiCmmSelectUserPu.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	orgUserListPu.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2021/06/28
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2021/06/28			TOBESOFT					최초생성
        * 2022/10/18			TOBESOFT					재직상태추가
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
        	var targetDs     = this.opener.dsReceiver;
        	this.fvSelectRow = targetDs.rowposition;	// 선택 row

        	this.cfnSearch(); //자동조회
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *****************************************************************************************************************************/
        //조회
        this.cfnSearch = function ()
        {
        	var strSvcId    = "selectCompanyMapList";
        	var strSvcUrl   = "selectCompanyDocMapList.do";
        	var inData      = "";
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
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //transaction
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "selectCompanyMapList":
        			break;
        		default:break;
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnClose = function (nRow)
        {

        };
        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.grdList_oncelldblclick = function(obj,e)
        {

        };

        this.fnClearData = function(targetDs, targetRow)
        {
        	for(var z=0,lenz=targetDs.getColCount();z<lenz;z++) {
        		targetDs.setColumn(targetRow, z, "");
        	}
        };

        this.fnCopyData = function(sourceDs, sourceRow, targetDs, targetRow)
        {
        	targetDs.setColumn(targetRow, "USER_ID", sourceDs.getColumn(sourceRow, "USER_ID"));
        	targetDs.setColumn(targetRow, "USER_NAME", sourceDs.getColumn(sourceRow, "KORN_NM"));
        	targetDs.setColumn(targetRow, "USER_MAILADDR", sourceDs.getColumn(sourceRow, "EMAIL"));
        	targetDs.setColumn(targetRow, "USER_PHONE", sourceDs.getColumn(sourceRow, "CELL_NUMB"));
        	targetDs.setColumn(targetRow, "USER_REGNO", sourceDs.getColumn(sourceRow, "REGI_NUMB"));

        	targetDs.setColumn(targetRow, "FORMER_ID", this.opener.dsFormerInfoCopy.getColumn(0,"FORMER_ID"));
        };

        this.btnConfirm_onclick = function(obj,e)
        {
        	var targetDs = this.opener.dsReceiver;
        	targetDs.set_enableevent(false);
        	var chk, uId, nRow, nAddRow, nFindRow, gb;
        	for(var i=0,len=this.dsList.rowcount;i<len;i++) {
        		chk   = this.dsList.getColumn(i, "CHK");
        		uId = this.dsList.getColumn(i, "USER_ID");
        		if(this.dsList.getColumn(i, "GRPTYPE") == "G") continue;
        		if(chk == "1" && uId && uId.length > 0) {	// 사번은 반드시 존재해야함.
        			nRow = targetDs.findRowExpr("USER_ID=='" + uId + "'");
        			if(nRow >= 0) {		// 기 존재 데이터
        				this.fnCopyData(this.dsList, i, targetDs, nRow);
        				this.fvSelectRow = -1;
        			} else {
        				if(this.fvSelectRow>=0) {
        					//this.fnClearData(targetDs, this.fvSelectRow);
        					this.fnCopyData(this.dsList, i, targetDs, this.fvSelectRow);
        					this.fvSelectRow = -1;
        				} else {
        					nFindRow = targetDs.findRowExpr("!USER_ID || USER_ID == ''");
        					if(nFindRow>=0) {
        						this.fnCopyData(this.dsList, i, targetDs, nFindRow);
        					} else {
        						nAddRow = targetDs.addRow();
        						this.fnCopyData(this.dsList, i, targetDs, nAddRow);
        					}
        				}
        			}
        		}
        	}

        	targetDs.set_enableevent(true);

        	this.opener._fnResetSize();
        	this.close("COPY");
        };

        this.btnClose_onclick = function(obj,e)
        {
        	this.close("");
        };

        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.cfnSearch();
        };

        /**
         * @function dsDept_oncolumnchanged
         * @description dataset Column 변경 event
         * @Date : 2024. 3. 2
         */
        this.dsList_oncolumnchanged = function(obj,e)
        {
        	if(e.columnid == "CHK") {
        		this.fnCheckProc(e.row);
        	}
        };
        /**
         * @function fnCheckProc
         * @description 자식,부모 체크 처리
         * @Date : 2024. 3. 2
         */
        this.fnCheckProc = function(row) {

        	this.dsList.set_enableevent(false);
        	var uId = this.dsList.getColumn(row, "USER_ID");

        	var curLvl = this.dsList.getColumn(row, "DEPT_LVL");
        	var curChk = this.dsList.getColumn(row, "CHK");
        	var lvl;
        	// 자식들 CHECK 처리
        	for(var i=row+1,len=this.dsList.rowcount;i<len;i++) {
        		lvl = this.dsList.getColumn(i, "DEPT_LVL");
        		if(lvl <= curLvl) break;

        		this.dsList.setColumn(i, "CHK", curChk);
        	}

        	// 부모 체크 처리
        	this.fnRecursiveCheck(row);
        	this.dsList.set_enableevent(true);
        };
        /**
         * @function fnRecursiveCheck
         * @description 자식,부모 체크 처리
         * @Date : 2024. 3. 2
         */
        this.fnRecursiveCheck = function(row) {
        	var nRow = this.grdList.getTreeParentRow( row );
        	if(nRow < 0) return;

        	var curChk = this.dsList.getColumn(nRow, "CHK");
        	var curLvl = this.dsList.getColumn(nRow, "DEPT_LVL");
        	var lvl, chk, checkcnt = 0, uncheckcnt = 0;
        	for(var i=nRow+1,len=this.dsList.rowcount;i<len;i++) {
        		lvl = this.dsList.getColumn(i, "DEPT_LVL");
        		if(lvl <= curLvl) break;

        		chk = this.dsList.getColumn(i, "CHK");
        		if(chk == "1") checkcnt++;
        		else uncheckcnt++;

        		if(uncheckcnt > 0 && checkcnt > 0) {
        			break;
        		}
        	}
        	if(uncheckcnt == 0) {
        		this.dsList.setColumn(nRow, "CHK", "1");
        	} else {
        		this.dsList.setColumn(nRow, "CHK", "0");
        	}
        	return this.fnRecursiveCheck(nRow);
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grdList.addEventHandler("oncelldblclick",this.grdList_oncelldblclick,this);
            this.btnConfirm.addEventHandler("onclick",this.btnConfirm_onclick,this);
            this.btnClose.addEventHandler("onclick",this.btnClose_onclick,this);
            this.dsList.addEventHandler("oncolumnchanged",this.dsList_oncolumnchanged,this);
        };
        this.loadIncludeScript("ubiCmmSelectUserPu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
