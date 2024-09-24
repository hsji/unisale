(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AA_WriterDeptPopup");
            this.set_titletext("신규회차 불러오기");
            this.set_scrolltype("none");
            this.set_cssclass("frm_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(640,270);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_WriterDeptList", this);
            obj._setContents("<ColumnInfo><Column id=\"SM_SEQ\" type=\"INT\" size=\"256\"/><Column id=\"ORG_WRITER_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"ORG_WRITER_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_WRITER_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_WRITER_DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRtn", this);
            obj._setContents("<ColumnInfo><Column id=\"ROWINDEX\" type=\"INT\" size=\"256\"/><Column id=\"STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"RESULT\" type=\"INT\" size=\"256\"/><Column id=\"ERROR\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_Confirm",null,null,"60","22","815","-310",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("선택");
            obj.set_cssclass("btn_WF_tran");
            obj.set_defaultbutton("true");
            this.addChild(obj.name, obj);

            obj = new Static("st_Title","8","0","356","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("TP작성부서등록");
            obj.set_cssclass("sta_POP_Title");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close",null,"10","15","15","8",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_POP_Cls");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_WriterDeptList","4","38","632","194",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("ds_WriterDeptList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"110\"/><Column size=\"200\"/><Column size=\"110\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"이전TP부서코드\"/><Cell col=\"1\" text=\"이전TP부서명\"/><Cell col=\"2\" text=\"신규TP부서코드\"/><Cell col=\"3\" text=\"신규TP부서명\"/></Band><Band id=\"body\"><Cell text=\"bind:ORG_WRITER_DEPT\"/><Cell col=\"1\" text=\"bind:ORG_WRITER_DEPT_NM\"/><Cell col=\"2\" text=\"bind:NEW_WRITER_DEPT\" expandimage=\"url(&apos;theme://images/btn_WF_Sch.png&apos;)\" expandshow=\"show\"/><Cell col=\"3\" text=\"bind:NEW_WRITER_DEPT_NM\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","1","grd_WriterDeptList:4",null,null,"1","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_POP_BtnBg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Save","491","242","60","22",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("적용");
            obj.set_cssclass("btn_WF_tran");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Cancel","562","242","60","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_cancel");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("AA_WriterDeptPopup.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("AA_WriterDeptPopup.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("AA_WriterDeptPopup.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("AA_WriterDeptPopup.xfdl","Script::CommGrid.xjs");
        this.registerScript("AA_WriterDeptPopup.xfdl", function() {
        /************************************************************************************************
         * 01. 업무구분 : Admin
         * 02. 화면명   : 신규회차등록 팝업(Popup)
         * 03. 화면설명 : 내부회계관리제도 신규회차등록 팝업
         * 04. 작성일   : 2021.06.04
         * 05. 작성자   : 박종언
         * 06. 수정이력 :
         ***********************************************************************************************
         *     수정일          이  름    사유
         ***********************************************************************************************
         *
         ************************************************************************************************/

        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
         ************************************************************************************************/
        this.executeIncludeScript("Script::CommUtil.xjs"); /*include "Script::CommUtil.xjs"*/
        this.executeIncludeScript("Script::CommSystem.xjs"); /*include "Script::CommSystem.xjs"*/;
        this.executeIncludeScript("Script::CommTrans.xjs"); /*include "Script::CommTrans.xjs"*/;
        this.executeIncludeScript("Script::CommGrid.xjs"); /*include "Script::CommGrid.xjs"*/;
        /************************************************************************************************
         * 전역 변수 영역
         ************************************************************************************************/
         var sSmSeq = 0;
         this.evtPosition = "";
         /************************************************************************************************
         * FORM 영역
         ************************************************************************************************/
        this.AA_WriterDeptPopup_onload = function(obj,e)
        {
        	this.fnInit();
        };


        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
         ************************************************************************************************/
        this.fnInit = function()
        {
        	this.evtPosition = this.parent.STR_EVT_POSITION; // 이벤트 발생한 곳

        	if(this.evtPosition != "SerialityPopup")
        	{
        		this.grd_WriterDeptList.setCellProperty("head", 0, "text", "TP부서코드");
        		this.grd_WriterDeptList.setCellProperty("head", 1, "text", "TP부서명");
        		this.grd_WriterDeptList.setCellProperty("head", 2, "text", "변경할 TP부서코드");
        		this.grd_WriterDeptList.setCellProperty("head", 3, "text", "변경할 TP부서명");
        	}
        	// TP작성부서 조회
        	this.fnGetWriterDeptList();
        }

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        this.btn_Close_onclick = function(obj,e)
        {
        	if(this.evtPosition == "SerialityPopup")
        	{
        		alert("TP부서가 작년도 부서로 되어 있습니다. \n 추후 등록시 TP부서일괄등록을 이용해주세요.");
        	}
        	this.commUtil.popupClose(this.dsRtn);
        };


        // 부서 찾기 버튼 클릭
        this.grd_WriterDeptList_onexpandup = function(obj,e)
        {
        	this.commUtil.popupOrganization(this, "popDept", "fnPopupCallBack", "DEPT", null, "1");
        };

        this.btn_Save_onclick = function(obj,e)
        {
        	this.fnSave();
        };
         /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
         ************************************************************************************************/
        // TP부서 조회
        this.fnGetWriterDeptList = function()
        {
        	// 회차 일련번호
        	sSmSeq = this.parent.STR_SM_SEQ;

        	//Parameter 셋팅
        	this.gfnAddSendParameter("SM_SEQ", sSmSeq);

        	// 조회용 Output dataset 세팅
        	this.gfnAddOutputDataset("ds_WriterDeptList", "dsWriterDeptList");
        	this.gfnCommonTransaction("GetWriterDeptList", "AA_WriterDept_S01");
        }

        this.fnCallBack = function(strSvcID, nErrorCode, strErrorMag)
        {
        	// 에러 예외처리
        	if(nErrorCode != 0)
        	{
        		alert("strSvcID : " + strSvcID + "\n" + "nErrorCode : " + nErrorCode + "\n" + "strErrorMag : " + strErrorMag);
        		return;
        	}
        	else
        	{
        		if(strSvcID == "GetWriterDeptList")
        		{

        		}
        		else if(strSvcID == "WriterDeptListInsert")
        		{
        			alert("TP작성부서 처리가 정상적으로 되었습니다.");
        			if(this.evtPosition != "SerialityPopup")
        			{
        				this.commUtil.popupClose(this.dsRtn);
        			}
        			else
        			{
        				this.commUtil.popupClose(this.dsRtn);
        			}
        		}
        	}
        }

        //팝업 콜백 함수
        this.fnPopupCallBack = function(popupId, popupArg)
        {
        	popupArg = this.commUtil.popupReturn();
        	if(this.gfnIsEmpty(popupArg))
        	{
        		return;
        	}
        	else
        	{
        		switch(popupId)
        		{
        			case "popDept" :
        				var ds = new nexacro.Dataset();
        				ds.loadXML(popupArg);
        				var nCurrow = this.ds_WriterDeptList.rowposition;

        				for(var i = 0; i < ds.rowcount; i++)
        				{
        					this.ds_WriterDeptList.setColumn(nCurrow, "NEW_WRITER_DEPT", ds.getColumn(i, "DEPT_CD"));
        					this.ds_WriterDeptList.setColumn(nCurrow, "NEW_WRITER_DEPT_NM", ds.getColumn(i, "DEPT_NM"));
        				}
        				break;
        		}
        	}
        }

        // 적용
        this.fnSave = function()
        {
        	if (!this.fn_Validation()) return;

        	if (!confirm( "TP작성부서 처리를 적용하시겠습니까?"))	return;

        	// 입력용 Input Dataset 세팅
        	this.gfnAddInputDataset("ds_WriterDeptList",	"dsInput");
        	// 입력용 Input Dataset 세팅
        	this.gfnAddOutputDataset("dsRtn",	"dsRtn");

        	// 공통 Transaction
        	this.gfnCommonTransaction("WriterDeptListInsert", "AA_WriterDept_R01");
        }

        this.fn_Validation = function()
        {
        	for(var i = 0; i < this.ds_WriterDeptList.rowcount; i++)
        	{
        		if(this.gfnIsEmpty(this.ds_WriterDeptList.getColumn(i, "NEW_WRITER_DEPT"))) { alert("TP작성부서는 필수 입력 항목입니다."); return false;}
        	}

        	return true;
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.AA_WriterDeptPopup_onload,this);
            this.btn_Confirm.addEventHandler("onclick",this.div_InConfirm_btn_Confirm_onclick,this);
            this.btn_Close.addEventHandler("onclick",this.btn_Close_onclick,this);
            this.grd_WriterDeptList.addEventHandler("onexpandup",this.grd_WriterDeptList_onexpandup,this);
            this.btn_Save.addEventHandler("onclick",this.btn_Save_onclick,this);
            this.btn_Cancel.addEventHandler("onclick",this.btn_Close_onclick,this);
        };
        this.loadIncludeScript("AA_WriterDeptPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
