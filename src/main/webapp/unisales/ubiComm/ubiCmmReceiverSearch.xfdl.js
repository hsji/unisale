(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("cmmUserSearch");
            if (Form == this.constructor)
            {
                this._setFormPosition(560,128);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsReceiver", this);
            obj._setContents("<ColumnInfo><Column id=\"receiveType\" type=\"STRING\" size=\"256\"/><Column id=\"USER_ID\" type=\"STRING\" size=\"256\"/><Column id=\"USER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"USER_MAILADDR\" type=\"STRING\" size=\"256\"/><Column id=\"USER_PHONE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"receiveType\"/></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdUserList","20","43",null,"33","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsReceiver");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_selecttype("cell");
            obj.set_cssclass("grd_TFDM_user");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"5\"/><Column size=\"164\"/><Column size=\"5\"/><Column size=\"453\"/><Column size=\"5\"/></Columns><Rows><Row size=\"1\"/><Row size=\"27\"/><Row size=\"5\"/></Rows><Band id=\"body\"><Cell/><Cell col=\"1\" cssclass=\"grd_MF_bottom\"/><Cell col=\"2\"/><Cell col=\"3\" cssclass=\"grd_MF_bottom\"/><Cell col=\"4\"/><Cell row=\"1\" expandsize=\"25\" displaytype=\"normal\" edittype=\"normal\" padding=\"0px\" cssclass=\"grd_MF_right\"/><Cell row=\"1\" col=\"1\" text=\"bind:USER_NAME\" displaynulltext=\"aaaaa\" expandshow=\"show\" expandsize=\"25\" displaytype=\"normal\" edittype=\"normal\" padding=\"0px\" cssclass=\"grd_MF_edit\" expandimage=\"url(&apos;theme://images/btn_WF_DetailSearchN.png&apos;)\"/><Cell row=\"1\" col=\"2\" expandsize=\"25\" displaytype=\"normal\" padding=\"0px 0px 0px 5px\" cssclass=\"grd_MF_right\"/><Cell row=\"1\" col=\"3\" text=\"bind:USER_MAILADDR\" expandshow=\"expr:currow==0?&apos;hide&apos;:&apos;show&apos;\" expandsize=\"30\" displaytype=\"normal\" edittype=\"normal\" expandimage=\"url(&apos;theme://images/btn_TF_Close_O.png&apos;)\" padding=\"0px 0px 0px 5px\" cssclass=\"grd_MF_edit\"/><Cell row=\"1\" col=\"4\" cssclass=\"grd_MF_left\"/><Cell row=\"2\"/><Cell row=\"2\" col=\"1\"/><Cell row=\"2\" col=\"2\"/><Cell row=\"2\" col=\"3\"/><Cell row=\"2\" col=\"4\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddRow",null,"grdUserList:10","100","25","19",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("수신자추가");
            obj.set_cssclass("btn_TFDM_Add");
            this.addChild(obj.name, obj);

            obj = new Button("btnRefresh",null,"10","28","25","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_TFDM_Refresh");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",560,128,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ubiCmmReceiverSearch.xfdl", function() {
        /**
        *  수신자 검색, 추가
        *  @FileName 	ubiCmmReceiverSearch.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2024/03/05
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/03/05			DXTOBE						최초생성
        *******************************************************************************
        */

        this.fvMaxRowCnt = 20;			// EDIT INDEX
        this.fvViewType = "EMAIL";		// CELL 3 - VIEW TYPE
        this.fvUserType = "RECEIVER";	// FORMER, RECEIVER

        /**
         * @function form_onload
         * @description form load.
         *
         * @param {Object} obj  FORM 컴퍼넌트
         * @param {Object} e	FORM 이벤트
         * @Date : 2024. 3. 2
         */
        this.form_onload = function(obj,e)
        {
        };

        /**
         * @function setViewType
         * @description DmEditor readonly 속성 처리
         *
         * @param {Boolean} value readonly
         * @Date : 2024. 3. 2
         */
        this.setMaxRowCount = function(value)
        {
        	if(!isNaN(value)) {
        		this.fvMaxRowCnt = value;
        	}
        };

        /**
         * @function setViewType
         * @description DmEditor readonly 속성 처리
         *
         * @param {Boolean} value readonly
         * @Date : 2024. 3. 2
         */
        this.setViewType = function(value)
        {
        	var arrValid = ["SMS", "EMAIL", "NONE"];
        	if(arrValid.indexOf(value) < 0) return;

        	if(value === "SMS") {
        		this.grdUserList.setCellProperty("body", 8, "text", "bind:USER_PHONE");
        	} else if(value === "EMAIL") {
        		this.grdUserList.setCellProperty("body", 8, "text", "bind:USER_MAILADDR");
        	}
        	this.fvViewType	= value;
        };

        /**
         * @function setReadOnly
         * @description DmEditor readonly 속성 처리
         *
         * @param {Boolean} value readonly
         * @Date : 2024. 3. 2
         */
        this.setReadOnly = function(value)
        {
        	if(value === true) {
        		this.grdUserList.setCellProperty("body", 1, "edittype", "none");
        		this.grdUserList.setCellProperty("body", 3, "edittype", "none");
        		this.btnAddRow.set_visible(false);
        	} else {
        		this.grdUserList.setCellProperty("body", 1, "edittype", "normal");
        		this.grdUserList.setCellProperty("body", 3, "edittype", "normal");
        		this.btnAddRow.set_visible(true);
        	}
        };

        /**
         * @function _notifyMain
         * @description DmEditor에 정보를 알려준다.
         *
         * @param {Object} obj  FORM 컴퍼넌트
         * @param {Object} e	FORM 이벤트
         * @Date : 2024. 3. 2
         */
        this._notifyMain = function(value)
        {
        	this.resetScroll();
        // 	try {
        // 		var mainForm = this.parent.parent.parent.parent;
        // 		mainForm._notify(value);
        // 	} catch(e) {
        // 		console.log(e);
        // 	}
        };


        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //popup
        this.fnPopupCallback = function (sPopupId, sRtn)
        {
        	switch(sPopupId) {
        		case "DMUserPopup":
        // 			if( !this._isNull(sRtn) ){
        // 				var aRtn= sRtn.split("|");
        // 				this.edtCode.set_value(aRtn[0]);
        // 				this.edtName.set_value(aRtn[1]);
        // 				this.edtUserId.set_value(aRtn[2]);
        // 			}
        			break;
        		default:break;
        	}
        };

        /**
         * @class null값 확인
         * @param {String} sValue - 확인 대상 value
         * @return {boolean}
         */
        this._isNull = function(sValue)
        {
        	if (new String(sValue).valueOf() == "undefined") return true;
        	if (sValue == null) return true;

        	var ChkStr = new String(sValue);

        	if (ChkStr == null) return true;
        	if (ChkStr.toString().length == 0 ) return true;
        	return false;
        };

        /**
         * @function _setData
         * @description 사용자 정보 데이터셋을 전달받는다 - dmEditor에서 호출.
         *
         * @param {Object} objUserList  User 개인별 정보 Dataset
         * @Date : 2024. 3. 2
         */
        this._setData = function(objReceiver)
        {
        	this.dsReceiver.copyData(objReceiver);
        	if(this.dsReceiver.rowcount == 0) {
        		this._fnAddRow();
        	}
        	this._fnResetSize();
        };

        /**
         * @function _getData
         * @description 사용자 정보 데이터셋을 가죠간다 - dmEditor에서 호출.
         *
         * @param {Object} objUserList  User 개인별 정보 Dataset
         * @Date : 2024. 3. 2
         */
        this._getData = function()
        {
        	return this.dsReceiver;
        };

        /**
         * @function btnAddRow_onclick
         * @description 사용자 추가.
         * @param {Object} obj  버튼 컴퍼넌트
         * @param {Object} e	버튼 이벤트
         * @Date : 2024. 3. 2
         */
        this.btnAddRow_onclick = function(obj,e)
        {
        	this._fnAddRow();
        	this._fnResetSize();

        	this.grdUserList.setCellPos(1);
        	this.grdUserList.showEditor(true);
        };

        /**
         * @function _fnResetSize
         * @description 그리드 크기에 따른 사이즈 조정
         * @param N/A
         * @Date : 2024. 3. 2
         */
        this._fnResetSize = function()
        {
        	var nMaxSize  = this.fvMaxRowCnt * 33;	// 최대 20개 그 이상은 스크롤처리
        	var nGridSize = this.dsReceiver.rowcount * 33;
        	var nSize 	  = Math.min(nMaxSize,nGridSize);

        	this.grdUserList.setOffsetHeight(nSize);
        	this.parent.set_height(this.grdUserList.getOffsetBottom() + 50);

        	this.resetScroll();

        	this._notifyMain("resetScroll");
        };

        /**
         * @function deleteUser_onclick
         * @description 사용자 삭제.
         * @param {Object} obj  버튼 컴퍼넌트
         * @param {Object} e	버튼 이벤트
         * @Date : 2024. 3. 2
         */
        this.deleteUser_onclick = function(obj,e)
        {
        	var pos = this.dsReceiver.rowposition;
        	if(pos>0) {	// 첫번째는 남겨준다
        		this.dsReceiver.deleteRow(pos)
        	}
        };

        /**
        * @class 이메일 형식에 맞는지 Check한다.
        * @param {String} strValue
        * @return {Boolean}
        * @example this._fnIsEmail("tobe@tobesoft.com")
        */
        this._fnIsEmail = function(strValue)
        {
        	var retVal = false;
        	var sTmp = "";
        	var sRegExp = "[a-z0-9]+[a-z0-9.,]+@[a-z0-9]+[a-z0-9.,]+\\.[a-z0-9]+";

        	var regexp = new RegExp(sRegExp,"ig");
        	sTmp = regexp.exec(strValue);

        	if (sTmp == null) {
        		retVal = false;
        	}
        	else {
        		if (( sTmp.index == 0 ) && (sTmp[0].length == strValue.length )) {
        			retVal = true;
        		} else {
        			retVal = false;
        		}
        	}
        	return retVal;
        };


        /**
        * @class 핸드폰번호를 체크한다. <br>
        * @param {String} telNumVal - 전화번호
        * @return {Boolean}
        * @example this._fnIsMobileNum("01012345678")
        */
        this._fnIsMobileNum = function(mobileVal)
        {
        	var sCheckRegexp = /^(?:(010-?\d{4}|(01[1|6|7|8|9]-?\d{3,4})))-?\d{4}$/
        	return sCheckRegexp.test(mobileVal);
        };

        /**
        * @class Unique ID 생성. <br>
        * @param N/A
        * @return {String} v uid
        * @example this.createUID()
        */
        this.createUID = function ()
        {
        	return 'xxxx_xyx4x'.replace(/[xy]/g, function(c)
        	{
        		var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        		return v.toString(16);
        	});
        };
        /**
         * @function fnValidationDup
         * @description 중복체크
         */
        this.fnValidationDup = function()
        {
        	var nCnt = this.dsReceiver.rowcount;
        	var email, temail;
        	for(var i=0;i<nCnt-1;i++) {
        		if(this.fvViewType == "EMAIL") {
        			email = this.dsReceiver.getColumn(i, "USER_MAILADDR");
        		} else {
        			email = this.dsReceiver.getColumn(i, "USER_PHONE");
        		}
        		for(var j=(i+1);j<nCnt;j++) {
        			if(this.fvViewType == "EMAIL") {
        				temail = this.dsReceiver.getColumn(j, "USER_MAILADDR");
        			} else {
        				temail = this.dsReceiver.getColumn(j, "USER_PHONE");
        			}
        			if(email == temail) {
        				this.dsReceiver.set_rowposition(i);
        				this.gfnAlert("msg.err.validator", ["중복데이터를 존재합니다."],"");
        				return false;
        			}
        		}
        	}
        	return true;
        };

        /**
         * @function fnValidation
         * @description 입력정보 Validation Check
         * @param {Number} index  버튼 index, dataset index
         * @return {String} checkval 입력오류정보
         * @Date : 2024. 3. 2
         */
        this.fnValidation = function()
        {
        	var no, name, email, checkval, trimvalue;
        	for(var i=0,len=this.dsReceiver.rowcount;i<len;i++) {
        		no = this.dsReceiver.getColumn(i, "USER_ID");
        		name = this.dsReceiver.getColumn(i, "USER_NAME");
        		if(this.fvViewType == "EMAIL") {
        			email = this.dsReceiver.getColumn(i, "USER_MAILADDR");
        		} else {
        			email = this.dsReceiver.getColumn(i, "USER_PHONE");
        			email = nexacro.trim(email);
        		}
        		checkval = null;

        		if(this._isNull(name)) {
        			checkval = "NAME";
        		} else if(this._isNull(email)) {
        			checkval = this.fvViewType;
        		} else {
        			trimvalue = nexacro.trim(email);
        			if(this.fvViewType == "EMAIL") {
        				// trim
        				if(trimvalue != email) {
        					this.dsReceiver.setColumn(i, "USER_MAILADDR", trimvalue);
        					email = trimvalue
        				}

        				if(this._fnIsEmail(email) == false) {
        					this.dsReceiver.set_rowposition(i);
        					checkval = this.fvViewType;
        				}
        			} else {
        				// trim
        				if(trimvalue != email) {
        					this.dsReceiver.setColumn(i, "USER_PHONE", trimvalue);
        					email = trimvalue
        				}

        				if(this._fnIsMobileNum(email) == false) {
        					this.dsReceiver.set_rowposition(i);
        					checkval = this.fvViewType;
        				}

        			}
        			// 사용자 id가 없는 경우는 생성
        			if(this._isNull(no)) {
        				this.dsReceiver.setColumn(i, "USER_ID", this.createUID());
        			}
        		}
        		if(checkval) {
        			this.gfnAlert("msg.err.validator", ["값을 입력하세요."],"");
        			this.dsReceiver.set_rowposition(i);
        			return false;
        		}
        	}
        	// 중복체크
        	return this.fnValidationDup();
        };

        /**
         * @function grdUserList_onexpandup
         * @description 그리드 버튼 클릭 처리
         * @param {Object} obj  그리드 object
         * @return {Object} e event
         * @Date : 2024. 3. 2
         */
        this.grdUserList_onexpandup = function(obj,e)
        {
        	if(e.col == 1) {	// 사용자 선택
        		this.fnOpenUserPopup(e.row);
        	} else if(e.col == 3) { // 삭제
        		this.dsReceiver.deleteRow(e.row);
        		this._fnResetSize();
        	}
        };
        /**
         * @function _fnAddRow
         * @description Row 추가
         * @Date : 2024. 3. 2
         */
        this._fnAddRow = function()
        {
        	var nRow = this.dsReceiver.addRow();
        // 	if(this.fvUserType == "FORMER") {
        // 		this.dsReceiver.setColumn(nRow, "isFormer", "Y");
        // 	} else {
        // 		this.dsReceiver.setColumn(nRow, "isFormer", "N");
        // 	}
        };
        /**
         * @function btnRefresh_onclick
         * @description 데이터 초기화
         * @param {Object} obj  버튼 object
         * @return {Object} e event
         * @Date : 2024. 3. 2
         */
        this.btnRefresh_onclick = function(obj,e)
        {
        	this.dsReceiver.reset();
        	if(this.dsReceiver.rowcount == 0) {
        		this._fnAddRow();
        	}
        	this._fnResetSize();
        };
        /**
         * @function fnOpenUserPopup
         * @description 사용자 선택창 오픈
         * @param N/A
         * @return {Object} e event
         * @Date : 2024. 3. 2
         */
        this.fnOpenUserPopup = function(nRow)
        {
        	var sTitle  = "사용자 선택";
        	var oArg    = { pvSearchValue: this.dsReceiver.getColumn(nRow, "USER_NAME"),
        					pvUserType: this.fvUserType};
        	var oOption = {title:sTitle
        				,titlebar:true};
        	var sPopupCallBack = "fnPopupCallback";
        	this.gfnOpenPopup("DMUserPopup", "ubiComm::ubiCmmSelectUserPu.xfdl", oArg, sPopupCallBack, oOption);
        };
        /**
         * @function grdUserList_onkeydown
         * @description 그리드 Enterkey
         * @Date : 2024. 3. 2
         */
        this.grdUserList_onkeydown = function(obj,e)
        {
        	if(obj.getCurEditType() == "normal" && obj.getCellPos() == 1 && e.keycode == 13) {
        		this.fnOpenUserPopup(this.USER_NAME.rowposition);
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grdUserList.addEventHandler("onexpandup",this.grdUserList_onexpandup,this);
            this.grdUserList.addEventHandler("onkeydown",this.grdUserList_onkeydown,this);
            this.btnAddRow.addEventHandler("onclick",this.btnAddRow_onclick,this);
            this.btnRefresh.addEventHandler("onclick",this.btnRefresh_onclick,this);
        };
        this.loadIncludeScript("ubiCmmReceiverSearch.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
