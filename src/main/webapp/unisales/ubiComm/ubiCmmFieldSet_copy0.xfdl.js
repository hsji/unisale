(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("ubiCmmFieldSet");
            if (Form == this.constructor)
            {
                this._setFormPosition(560,150);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsUserList", this);
            obj._setContents("<ColumnInfo><Column id=\"userUUID\" type=\"STRING\" size=\"256\"/><Column id=\"displayUserName\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"phone\" type=\"STRING\" size=\"256\"/><Column id=\"deptCode\" type=\"STRING\" size=\"256\"/><Column id=\"deptName\" type=\"STRING\" size=\"256\"/><Column id=\"userAddr\" type=\"STRING\" size=\"256\"/><Column id=\"isFormer\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFieldInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"FIELD_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FIELD_ID\" type=\"STRING\" size=\"256\"/><Column id=\"FIELD_MASK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grdFieldList","20.00","43",null,"47","20",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsFieldInfo");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_selecttype("cell");
            obj.set_cssclass("grd_TFDM_user");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"5\"/><Column size=\"193\"/><Column size=\"5\"/><Column size=\"379\"/><Column size=\"5\"/><Column size=\"142\"/><Column size=\"5\"/></Columns><Rows><Row size=\"35\" band=\"head\"/><Row size=\"5\"/><Row size=\"30\"/><Row size=\"5\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"필드ID\" color=\"#29292a\" border=\"0px none\"/><Cell col=\"2\"/><Cell col=\"3\" text=\"필드명\" color=\"#29292a\"/><Cell col=\"4\"/><Cell col=\"5\" text=\"MASK\" color=\"#29292a\"/><Cell col=\"6\"/></Band><Band id=\"body\"><Cell/><Cell col=\"1\" cssclass=\"grd_MF_bottom\"/><Cell col=\"2\"/><Cell col=\"3\" cssclass=\"grd_MF_bottom\"/><Cell col=\"4\"/><Cell col=\"5\" cssclass=\"grd_MF_bottom\"/><Cell col=\"6\"/><Cell row=\"1\" expandsize=\"25\" displaytype=\"normal\" padding=\"0px\" cssclass=\"grd_MF_right\"/><Cell row=\"1\" col=\"1\" text=\"bind:FIELD_ID\" displaynulltext=\"aaaaa\" expandshow=\"hide\" expandsize=\"25\" displaytype=\"normal\" edittype=\"normal\" padding=\"0px\" cssclass=\"grd_MF_edit\" expandimage=\"url(&apos;theme://images/btn_WF_DetailSearchN.png&apos;)\" editinputtype=\"alpha,english,digit,number,numberandenglish\"/><Cell row=\"1\" col=\"2\" expandsize=\"25\" displaytype=\"normal\" padding=\"0px 0px 0px 5px\" cssclass=\"grd_MF_right\"/><Cell row=\"1\" col=\"3\" text=\"bind:FIELD_NAME\" expandsize=\"25\" displaytype=\"normal\" edittype=\"normal\" padding=\"0px 0px 0px 5px\" cssclass=\"grd_MF_edit\"/><Cell row=\"1\" col=\"4\" cssclass=\"grd_MF_left\"/><Cell row=\"1\" col=\"5\" text=\"bind:FIELD_MASK\" expandshow=\"expr:currow==0?&apos;hide&apos;:&apos;show&apos;\" expandsize=\"30\" displaytype=\"normal\" edittype=\"normal\" expandimage=\"url(&apos;theme://images/btn_TF_Close_O.png&apos;)\" padding=\"0px 0px 0px 5px\" cssclass=\"grd_MF_edit\"/><Cell row=\"1\" col=\"6\" cssclass=\"grd_MF_left\"/><Cell row=\"2\"/><Cell row=\"2\" col=\"1\"/><Cell row=\"2\" col=\"2\"/><Cell row=\"2\" col=\"3\"/><Cell row=\"2\" col=\"4\"/><Cell row=\"2\" col=\"5\"/><Cell row=\"2\" col=\"6\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btnAddRow",null,"grdFieldList:10","100","25","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("필드추가");
            obj.set_cssclass("btn_TFDM_Add");
            this.addChild(obj.name, obj);

            obj = new Button("btnRefresh",null,"10","28","25","20",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_TFDM_Refresh");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",560,150,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("ubiCmmFieldSet_copy0.xfdl", function() {
        /**
        *  문서편집시 필드 정의 - docFormNewPu 에서 사용
        *  @FileName 	ubiCmmFieldSet.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2024/03/04
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/03/04			DXTOBE						최초생성
        *******************************************************************************
        */

        this.fvMaxRowCnt = 20;			// EDIT INDEX

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
        	try {
        		var mainForm = this.parent.parent.parent.parent;
        		mainForm._notify(value);
        	} catch(e) {
        		console.log(e);
        	}
        };


        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
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
        this._setData = function(objFieldList)
        {
        	this.dsFieldInfo.copyData(objFieldList);
        	if(this.dsFieldInfo.rowcount == 0) {
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
        	return this.dsFieldInfo;
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

        	this.grdFieldList.setCellPos(1);
        	this.grdFieldList.showEditor(true);
        };

        /**
         * @function _fnResetSize
         * @description 그리드 크기에 따른 사이즈 조정
         * @param N/A
         * @Date : 2024. 3. 2
         */
        this._fnResetSize = function()
        {
        	var nHeadSize = 35;
        	var nMaxSize  = (this.fvMaxRowCnt * 33) + nHeadSize;	// 최대 20개 그 이상은 스크롤처리
        	var nGridSize = (this.dsFieldInfo.rowcount * 40) + nHeadSize;
        	var nSize 	  = Math.min(nMaxSize,nGridSize);

        	this.grdFieldList.setOffsetHeight(nSize);

        	this.parent.set_height(this.grdFieldList.getOffsetBottom() + 50);

        	this.resetScroll();

        	this.parent.parent.resetScroll();

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
        	var pos = this.dsFieldInfo.rowposition;
        	if(pos>0) {	// 첫번째는 남겨준다
        		this.dsFieldInfo.deleteRow(pos)
        	}
        };

        /**
         * @function fnValidationDup
         * @description 중복체크
         */
        this.fnValidationDup = function()
        {
        	var nCnt = this.dsFieldInfo.rowcount;
        	var no, name, tno, tname;
        	for(var i=0;i<nCnt-1;i++) {
        		no = this.dsFieldInfo.getColumn(i, "FIELD_NAME");
        		name = this.dsFieldInfo.getColumn(i, "FIELD_ID");
        		for(var j=(i+1);j<nCnt;j++) {
        			tno = this.dsFieldInfo.getColumn(j, "FIELD_NAME");
        			tname = this.dsFieldInfo.getColumn(j, "FIELD_ID");
        			if(no == tno) {
        				this.dsFieldInfo.set_rowposition(i);
        				this.gfnAlert("msg.err.validator", ["중복데이터가 존재합니다."],"");
        				return false;
        			}
        			if(name == tname) {
        				this.dsFieldInfo.set_rowposition(i);
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
        	var no, name, email, checkval;
        	for(var i=0,len=this.dsFieldInfo.rowcount;i<len;i++) {
        		no = this.dsFieldInfo.getColumn(i, "FIELD_NAME");
        		name = this.dsFieldInfo.getColumn(i, "FIELD_ID");
        		if(this._isNull(no) || this._isNull(name)) {
        			this.dsFieldInfo.set_rowposition(i);
        			this.gfnAlert("msg.err.validator", ["값을 입력하세요."],"");
        			return false;
        		}
        	}
        	return this.fnValidationDup();
        };

        /**
         * @function grdFieldList_onexpandup
         * @description 그리드 버튼 클릭 처리
         * @param {Object} obj  그리드 object
         * @return {Object} e event
         * @Date : 2024. 3. 2
         */
        this.grdFieldList_onexpandup = function(obj,e)
        {
        	if(e.col == 5) { // 삭제
        		this.dsFieldInfo.deleteRow(e.row);
        		this._fnResetSize();
        	}
        };


        /**
        * @class Unique ID 생성. <br>
        * @param N/A
        * @return {String} v uid
        * @example this.createUID()
        */
        this.createUID = function ()
        {
        	return 'field_xxyx'.replace(/[xy]/g, function(c)
        	{
        		var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        		return v.toString(16);
        	});
        };

        /**
         * @function _fnAddRow
         * @description Row 추가
         * @Date : 2024. 3. 2
         */
        this._fnAddRow = function()
        {
        	var nRow = this.dsFieldInfo.addRow();
        	this.dsFieldInfo.setColumn(nRow, "FIELD_ID", this.createUID());
        	this.grdFieldList.setCellPos(3);
        	this.grdFieldList.showEditor(true);
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
        	this.dsFieldInfo.reset();
        	if(this.dsFieldInfo.rowcount == 0) {
        		this._fnAddRow();
        	}
        	this._fnResetSize();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.grdFieldList.addEventHandler("onexpandup",this.grdFieldList_onexpandup,this);
            this.btnAddRow.addEventHandler("onclick",this.btnAddRow_onclick,this);
            this.btnRefresh.addEventHandler("onclick",this.btnRefresh_onclick,this);
        };
        this.loadIncludeScript("ubiCmmFieldSet_copy0.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
