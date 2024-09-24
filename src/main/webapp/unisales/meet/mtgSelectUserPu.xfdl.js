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
            obj._setContents("<ColumnInfo><Column id=\"DEPT_KORN_NM\" type=\"string\" size=\"32\"/><Column id=\"KORN_NM\" type=\"string\" size=\"32\"/><Column id=\"DEPT_LVL\" type=\"bigdecimal\" size=\"8\"/><Column id=\"DEPT_NEW_NAME\" type=\"string\" size=\"32\"/><Column id=\"USER_ID\" type=\"string\" size=\"32\"/><Column id=\"CELL_NUMB\" type=\"string\" size=\"32\"/><Column id=\"TITLE\" type=\"string\" size=\"32\"/><Column id=\"EMAIL\" type=\"string\" size=\"32\"/><Column id=\"DEPT_CD\" type=\"string\" size=\"32\"/><Column id=\"CHK\" type=\"STRING\" size=\"256\"/><Column id=\"GRPTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"WORK_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFormerInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"FORMER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FORMER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FORMER_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"FORMER_NAME\">작성자</Col><Col id=\"FORMER_ID\">former</Col><Col id=\"FORMER_YN\">Y</Col></Row><Row><Col id=\"FORMER_NAME\">수신자</Col><Col id=\"FORMER_ID\">receiver</Col><Col id=\"FORMER_YN\">N</Col></Row><Row><Col id=\"FORMER_NAME\">결재자</Col><Col id=\"FORMER_ID\">singer</Col><Col id=\"FORMER_YN\">N</Col></Row></Rows>");
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
        this.registerScript("mtgSelectUserPu.xfdl", function() {
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
        this.fvFormerPrefix = "FMER_";	// 발신자,수신자동일함을 허용위해 이름 다르게
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.fvDocId = this.getOwnerFrame().pvDocId;
        	this.fvUserType = this.getOwnerFrame().pvUserType;
        	this.fvSelectType = this.getOwnerFrame().pvSelectType;

        	if(this.fvSelectType == "USER") {
        		if(this.fvUserType == "U") {	// 참석자
        			this.fvDs = this.opener.dsUser;
        		} else if(this.fvUserType == "M") {	// 메일수신자
        			this.fvDs = this.opener.dsReceiver;
        		} else {	// 열람자
        			this.fvDs = this.opener.dsReadUser;
        		}
        	}
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
        	this.gfnSetMap("meet", "CompanyDocMapList");

        	var strSvcId    = "selectCompanyMapList";
        	var strSvcUrl   = "searchCommonBaseService.do";
        	var inData      = "dsCond=dsCond dsMap=dsMap";
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
        	if(this.fvSelectType == "HOST") {
        		if(this.dsList.getColumn(e.row, "GRPTYPE") == "G") {	// group
        			this.opener.dsList.setColumn(0, "HOST_TYPE", "G");
        			this.opener.dsList.setColumn(0, "HOST_ID", this.dsList.getColumn(e.row, "DEPT_CD"));
        			this.opener.dsList.setColumn(0, "HOST_NAME", this.dsList.getColumn(e.row, "DEPT_KORN_NM"));
        		} else {
        			this.opener.dsList.setColumn(0, "HOST_TYPE", "U");
        			this.opener.dsList.setColumn(0, "HOST_ID", this.dsList.getColumn(e.row, "USER_ID"));
        			this.opener.dsList.setColumn(0, "HOST_NAME", this.dsList.getColumn(e.row, "KORN_NM"));
        			this.opener.dsList.setColumn(0, "HOST_WORK_NAME", this.dsList.getColumn(e.row, "WORK_NAME"));
        		}
        		this.close();
        	} else if(this.fvUserType == "M" && this.dsList.getColumn(e.row, "GRPTYPE") == "U") {	// 메일수신자
        		var targetDs = this.fvDs;
        		var sourceDs = this.dsList;
        		var row = targetDs.rowposition;
        		var srow = sourceDs.rowposition;
        		var userId = sourceDs.getColumn(srow, "USER_ID");
        		var userNm = sourceDs.getColumn(srow, "KORN_NM");
        		// former list 추가
        		if(this.fvUserType == "M") {
        			var dsFormerInfo = this.opener.dsFormerInfo;
        			var nRow = dsFormerInfo.findRow("FORMER_ID", this.fvFormerPrefix + userId);
        			if(nRow < 0) {
        				var nRow = dsFormerInfo.addRow();
        				dsFormerInfo.setColumn(nRow, "DOC_ID", this.opener.dsDocInfo.getColumn(0,"DOC_ID"));
        				dsFormerInfo.setColumn(nRow, "FORMER_ID", this.fvFormerPrefix + userId);
        				dsFormerInfo.setColumn(nRow, "FORMER_NAME", userNm);
        				dsFormerInfo.setColumn(nRow, "FORMER_YN", "N");
        			}
        		}
        		targetDs.set_enableevent(false);
        		targetDs.setColumn(row, "DOC_ID", this.fvDocId);
        		targetDs.setColumn(row, "USER_ID", userId);
        		targetDs.setColumn(row, "USER_NAME", userNm);
        		targetDs.setColumn(row, "USER_MAILADDR", sourceDs.getColumn(srow, "EMAIL"));
        		targetDs.setColumn(row, "USER_PHONE", sourceDs.getColumn(srow, "CELL_NUMB"));
        		targetDs.setColumn(row, "WORK_NAME", sourceDs.getColumn(srow, "WORK_NAME"));
        		targetDs.setColumn(row, "SEND_SEQ", 0);
        		targetDs.setColumn(row, "R_ORDER", 1);
        		targetDs.setColumn(row, "APRV_SEQ", 1);

        		targetDs.setColumn(row, "FORMER_ID", this.fvFormerPrefix + userId);
        		targetDs.setColumn(row, "FORMER_NAME", userNm);
        		targetDs.set_enableevent(true);

        		this.opener.resetFormerList();

        		this.close();
        	}
        };

        this.fnClearData = function(targetDs, targetRow)
        {
        	for(var z=0,lenz=targetDs.getColCount();z<lenz;z++) {
        		targetDs.setColumn(targetRow, z, "");
        	}
        };

        this.fnCopyData = function(sourceDs, sourceRow, targetDs, targetRow)
        {
        	var userId = sourceDs.getColumn(sourceRow, "USER_ID");
        	var userNm = sourceDs.getColumn(sourceRow, "KORN_NM");

        	// former list 추가
        	if(this.fvUserType == "M") {
        		var dsFormerInfo = this.opener.dsFormerInfo;
        		var nRow = dsFormerInfo.findRow("FORMER_ID", this.fvFormerPrefix + userId);
        		if(nRow < 0) {
        			var nRow = dsFormerInfo.addRow();
        			dsFormerInfo.setColumn(nRow, "DOC_ID", this.opener.dsDocInfo.getColumn(0,"DOC_ID"));
        			dsFormerInfo.setColumn(nRow, "FORMER_ID", this.fvFormerPrefix + userId);
        			dsFormerInfo.setColumn(nRow, "FORMER_NAME", userNm);
        			dsFormerInfo.setColumn(nRow, "FORMER_YN", "N");
        		}
        	}

        	targetDs.setColumn(targetRow, "DOC_ID", this.fvDocId);
        	targetDs.setColumn(targetRow, "USER_ID", userId);
        	targetDs.setColumn(targetRow, "USER_NAME", userNm);
        	targetDs.setColumn(targetRow, "USER_MAILADDR", sourceDs.getColumn(sourceRow, "EMAIL"));
        	targetDs.setColumn(targetRow, "USER_PHONE", sourceDs.getColumn(sourceRow, "CELL_NUMB"));
        	targetDs.setColumn(targetRow, "WORK_NAME", sourceDs.getColumn(sourceRow, "WORK_NAME"));
        	targetDs.setColumn(targetRow, "SEND_SEQ", 0);
        	targetDs.setColumn(targetRow, "R_ORDER", 1);

        	targetDs.setColumn(targetRow, "FORMER_ID", this.fvFormerPrefix + userId);
        	targetDs.setColumn(targetRow, "FORMER_NAME", userNm);

        };

        this.fnCopyDataDept = function(sourceDs, sourceRow, targetDs, targetRow)
        {
        	targetDs.setColumn(targetRow, "DOC_ID", this.fvDocId);
        	targetDs.setColumn(targetRow, "USER_ID", sourceDs.getColumn(sourceRow, "DEPT_CD"));
        	targetDs.setColumn(targetRow, "USER_NAME", sourceDs.getColumn(sourceRow, "DEPT_KORN_NM"));
        };
        /**
         * @function resetFormerList
         * @description 변경된 데이터 기준으로 부모의 formerlist 를 갱신
         * @Date : 2024. 3. 2
         */
        // this.resetFormerList = function()
        // {
        // 	var dsFormerInfo = this.opener.dsFormerInfo;
        // 	var dsReceiver = this.opener.dsReceiver;
        // 	for(var i=dsFormerInfo.rowcount-1;i>=0;i--) {
        // 		var nRow = dsReceiver.findRow("USER_ID", dsFormerInfo.getColumn(i, "FORMER_ID"));
        // 		if(nRow < 0) {
        // 			dsFormerInfo.deleteRow(i);
        // 		}
        // 	}
        // };

        this.btnConfirm_onclick = function(obj,e)
        {
        	if(this.fvSelectType == "HOST") {	// 주관자
        		var nRow = this.dsList.findRow("CHK", "1");
        		if(nRow >=0) {
        			if(this.dsList.getColumn(nRow, "GRPTYPE") == "G") {	// group
        				this.opener.dsList.setColumn(0, "HOST_TYPE", "G");
        				this.opener.dsList.setColumn(0, "HOST_ID", this.dsList.getColumn(nRow, "DEPT_CD"));
        				this.opener.dsList.setColumn(0, "HOST_NAME", this.dsList.getColumn(nRow, "DEPT_KORN_NM"));
        				this.opener.dsList.setColumn(0, "HOST_WORK_NAME", "");
        			} else {
        				this.opener.dsList.setColumn(0, "HOST_TYPE", "U");
        				this.opener.dsList.setColumn(0, "HOST_ID", this.dsList.getColumn(nRow, "USER_ID"));
        				this.opener.dsList.setColumn(0, "HOST_NAME", this.dsList.getColumn(nRow, "KORN_NM"));
        				this.opener.dsList.setColumn(0, "HOST_WORK_NAME", this.dsList.getColumn(nRow, "WORK_NAME"));
        			}
        		}
        	} else {
        		var targetDs;
        		if(this.fvUserType == "R") {	// 열람자	dsReadUser
        			targetDs = this.fvDs;
        			targetDs.set_enableevent(false);
        			targetDs.clearData();
        			targetDs.applyChange();
        			var chk, uId, nRow, nAddRow, nFindRow, gb, deptcd;
        // 			// 주체자 추가
        // 			if(this.opener.dsList.getColumn(0, "HOST_TYPE") != "G") {
        // 				nAddRow = targetDs.addRow();
        // 				targetDs.setColumn(nAddRow, "DEPT_GB", "U");
        // 				targetDs.setColumn(nAddRow, "DOC_ID", this.fvDocId);
        // 				targetDs.setColumn(nAddRow, "TYPE_NAME", "H");
        // 				targetDs.setColumn(nAddRow, "USER_ID", this.opener.dsList.getColumn(0, "HOST_ID"));
        // 				targetDs.setColumn(nAddRow, "USER_NAME", this.opener.dsList.getColumn(0, "HOST_NAME"));
        // 				targetDs.setColumn(nAddRow, "WORK_NAME", this.opener.dsList.getColumn(0, "HOST_WORK_NAME"));
        // 			}
        			for(var i=0,len=this.dsList.rowcount;i<len;i++) {
        				chk   = this.dsList.getColumn(i, "CHK");
        				uId = this.dsList.getColumn(i, "USER_ID");
        				deptcd = this.dsList.getColumn(i, "DEPT_CD");
        				if(chk == "1") {
        					if(this.dsList.getColumn(i, "GRPTYPE") == "G") {	// GROUP인 경우
        						nRow = targetDs.findRowExpr("USER_ID=='" + deptcd + "'");
        						if(nRow >= 0) {		// 기 존재 데이터
        							this.fnCopyDataDept(this.dsList, i, targetDs, nRow);
        							targetDs.setColumn(nRow, "DEPT_GB", "D");
        						} else {
        							nAddRow = targetDs.addRow();
        							this.fnCopyDataDept(this.dsList, i, targetDs, nAddRow);
        							targetDs.setColumn(nAddRow, "DEPT_GB", "D");
        						}
        						var nNextRow = this.grdList.getTreeSiblingRow( i ,1,true);
        						if(nNextRow < 0) i = len;
        						else i = nNextRow-1;
        					} else {
        						nRow = targetDs.findRowExpr("USER_ID=='" + uId + "'");
        						if(nRow >= 0) {		// 기 존재 데이터
        							this.fnCopyData(this.dsList, i, targetDs, nRow);
        							targetDs.setColumn(nRow, "DEPT_GB", "U");
        						} else {
        							nAddRow = targetDs.addRow();
        							this.fnCopyData(this.dsList, i, targetDs, nAddRow);
        							targetDs.setColumn(nAddRow, "DEPT_GB", "U");
        						}
        					}
        				}
        			}
        		} else {	// 참석자 dsUser
        			targetDs = this.fvDs;
        			targetDs.set_enableevent(false);
        			targetDs.clearData();
        			targetDs.applyChange();
        			var chk, uId, nRow, nAddRow, nFindRow, gb;
        			// 주체자 추가
        // 			if(this.opener.dsList.getColumn(0, "HOST_TYPE") != "G") {
        // 				nAddRow = targetDs.addRow();
        // 				targetDs.setColumn(nAddRow, "DEPT_GB", "U");
        // 				targetDs.setColumn(nAddRow, "DOC_ID", this.fvDocId);
        // 				targetDs.setColumn(nAddRow, "TYPE_NAME", "H");
        // 				targetDs.setColumn(nAddRow, "USER_ID", this.opener.dsList.getColumn(0, "HOST_ID"));
        // 				targetDs.setColumn(nAddRow, "USER_NAME", this.opener.dsList.getColumn(0, "HOST_NAME"));
        // 				targetDs.setColumn(nAddRow, "WORK_NAME", this.opener.dsList.getColumn(0, "HOST_WORK_NAME"));
        // 			}
        			var nSeq = 0;
        			for(var i=0,len=this.dsList.rowcount;i<len;i++) {
        				chk   = this.dsList.getColumn(i, "CHK");
        				uId = this.dsList.getColumn(i, "USER_ID");
        				if(this.dsList.getColumn(i, "GRPTYPE") == "G") continue;
        				if(chk == "1" && uId && uId.length > 0) {	// 사번은 반드시 존재해야함.
        					nSeq++;
        					nRow = targetDs.findRowExpr("USER_ID=='" + uId + "'");
        					if(nRow >= 0) {		// 기 존재 데이터
        						this.fnCopyData(this.dsList, i, targetDs, nRow);
        						targetDs.setColumn(nRow, "FORMER_YN", "N");
        						targetDs.setColumn(nRow, "FORMER_ORDER", nSeq);
        						targetDs.setColumn(nRow, "APRV_SEQ", 1);
        					} else {
        						nAddRow = targetDs.addRow();
        						this.fnCopyData(this.dsList, i, targetDs, nAddRow);
        						targetDs.setColumn(nAddRow, "FORMER_YN", "N");
        						targetDs.setColumn(nAddRow, "FORMER_ORDER", nSeq);
        						targetDs.setColumn(nAddRow, "APRV_SEQ", 1);
        					}
        				}
        			}

        		}
        		var v = "";
        		for(var i=0,len=targetDs.rowcount;i<len;i++) {
        			if(i>0) v += ",";
        			v += targetDs.getColumn(i, "USER_ID");
        		}

        		if(this.fvUserType == "U") {	// 참석자
        			this.opener.divContents.form.MultiComboUser.set_value(v);
        		} else {
        			if(this.fvUserType != "M") {
        				this.opener.divContents.form.MultiComboReadUser.set_value(v);
        			}
        		}

        		targetDs.set_enableevent(true);
        	}
        	if(this.fvUserType == "M") {
        		this.opener.resetFormerList();
        		this.opener._fnResetSize();
        	}
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
        		if(this.fvSelectType == "USER") {
        			this.fnCheckProc(e.row);
        		} else {
        			var nCnt = obj.getCaseCount("CHK=='1'");
        			if(nCnt > 1) {
        				obj.set_enableevent(false);
        				for(var i=0,len=obj.rowcount;i<len;i++) {
        					if(e.row != i && obj.getColumn(i, "CHK") == "1") {
        						obj.setColumn(i, "CHK", "0");
        					}
        				}
        				obj.set_enableevent(true);
        			}
        		}
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
        this.loadIncludeScript("mtgSelectUserPu.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
