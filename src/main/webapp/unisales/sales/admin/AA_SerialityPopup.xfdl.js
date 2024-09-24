(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AA_SerialityPopup");
            this.set_titletext("신규회차 불러오기");
            this.set_scrolltype("none");
            this.set_cssclass("frm_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(640,250);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Seriality", this);
            obj._setContents("<ColumnInfo><Column id=\"SM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SM_NM\" type=\"STRING\" size=\"256\"/><Column id=\"START_DT\" type=\"STRING\" size=\"256\"/><Column id=\"END_DT\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_AdminTran", this);
            obj._setContents("<ColumnInfo><Column id=\"SQL_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SQL_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tmp", this);
            obj._setContents("<ColumnInfo><Column id=\"RESULT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_OrgWriterDeptCount", this);
            obj._setContents("<ColumnInfo><Column id=\"ORG_DEPT_COUNT\" type=\"INT\" size=\"256\"/><Column id=\"SM_SEQ\" type=\"INT\" size=\"256\"/></ColumnInfo>");
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
            obj.set_text("신규회차등록");
            obj.set_cssclass("sta_POP_Title");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close",null,"10","15","15","8",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("btn_POP_Cls");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_Seriality","4","38",null,"172","4",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_enable("true");
            obj.set_cssclass("div_WF_detailBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Title01","8","8","50","22",null,null,null,null,null,null,this.div_Seriality.form);
            obj.set_taborder("0");
            obj.set_text("회차명");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_Seriality.addChild(obj.name, obj);

            obj = new Edit("edt_SmNm","stc_Title01:8","8",null,"22","8",null,null,null,null,null,this.div_Seriality.form);
            obj.set_taborder("1");
            obj.set_readonly("false");
            this.div_Seriality.addChild(obj.name, obj);

            obj = new Static("stc_Title02","8","38","50","22",null,null,null,null,null,null,this.div_Seriality.form);
            obj.set_taborder("2");
            obj.set_text("시작일");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_Seriality.addChild(obj.name, obj);

            obj = new Static("stc_Title03","318","38","50","22",null,null,null,null,null,null,this.div_Seriality.form);
            obj.set_taborder("3");
            obj.set_text("종료일");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_Seriality.addChild(obj.name, obj);

            obj = new Calendar("cal_StartDt","stc_Title02:8","38",null,"22","stc_Title03:8",null,null,null,null,null,this.div_Seriality.form);
            obj.set_taborder("4");
            this.div_Seriality.addChild(obj.name, obj);

            obj = new Calendar("cal_EndDt","stc_Title03:8","37",null,"22","8",null,null,null,null,null,this.div_Seriality.form);
            obj.set_taborder("5");
            this.div_Seriality.addChild(obj.name, obj);

            obj = new Static("stc_Title04","8","100","50","22",null,null,null,null,null,null,this.div_Seriality.form);
            obj.set_taborder("6");
            obj.set_text("설명");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_Seriality.addChild(obj.name, obj);

            obj = new TextArea("ta_Description","stc_Title04:8","stc_Title03:8",null,"90","8",null,null,null,null,null,this.div_Seriality.form);
            obj.set_taborder("7");
            this.div_Seriality.addChild(obj.name, obj);

            obj = new Static("Static01","1","div_Seriality:4",null,null,"1","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_POP_BtnBg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_OK","491","221","60","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("적용");
            obj.set_cssclass("btn_WF_tran");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Cancel","562","221","60","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_cancel");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_Seriality.form
            obj = new Layout("default","",0,0,this.div_Seriality.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.stc_Title01.set_taborder("0");
                p.stc_Title01.set_text("회차명");
                p.stc_Title01.set_textAlign("right");
                p.stc_Title01.set_cssclass("sta_WF_DetailTit");
                p.stc_Title01.move("8","8","50","22",null,null);

                p.edt_SmNm.set_taborder("1");
                p.edt_SmNm.set_readonly("false");
                p.edt_SmNm.move("stc_Title01:8","8",null,"22","8",null);

                p.stc_Title02.set_taborder("2");
                p.stc_Title02.set_text("시작일");
                p.stc_Title02.set_textAlign("right");
                p.stc_Title02.set_cssclass("sta_WF_DetailTit");
                p.stc_Title02.move("8","38","50","22",null,null);

                p.stc_Title03.set_taborder("3");
                p.stc_Title03.set_text("종료일");
                p.stc_Title03.set_textAlign("right");
                p.stc_Title03.set_cssclass("sta_WF_DetailTit");
                p.stc_Title03.move("318","38","50","22",null,null);

                p.cal_StartDt.set_taborder("4");
                p.cal_StartDt.move("stc_Title02:8","38",null,"22","stc_Title03:8",null);

                p.cal_EndDt.set_taborder("5");
                p.cal_EndDt.move("stc_Title03:8","37",null,"22","8",null);

                p.stc_Title04.set_taborder("6");
                p.stc_Title04.set_text("설명");
                p.stc_Title04.set_textAlign("right");
                p.stc_Title04.set_cssclass("sta_WF_DetailTit");
                p.stc_Title04.move("8","100","50","22",null,null);

                p.ta_Description.set_taborder("7");
                p.ta_Description.move("stc_Title04:8","stc_Title03:8",null,"90","8",null);
            	}
            );
            this.div_Seriality.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div_Seriality.form
            obj = new Layout("portrait","",0,0,this.div_Seriality.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.stc_Title02.move("8","72","64","30",null,null);

                p.div_Contract.move("80","72",null,"30","4",null);

                p.stc_Title03.move("8","38","64","30",null,null);

                p.edt_ProjectName.move("80","38",null,"30","4",null);

                p.edt_SmNm.move("80","4",null,"30","4",null);

                p.stc_Title01.move("8","4","64","30",null,null);
            	}
            );
            this.div_Seriality.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","",this._adjust_width,this._adjust_height,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_Seriality.form.edt_SmNm","value","ds_Seriality","SM_NM");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_Seriality.form.cal_StartDt","value","ds_Seriality","START_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_Seriality.form.cal_EndDt","value","ds_Seriality","END_DT");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_Seriality.form.ta_Description","value","ds_Seriality","REMARK");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("AA_SerialityPopup.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("AA_SerialityPopup.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("AA_SerialityPopup.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("AA_SerialityPopup.xfdl","Script::CommGrid.xjs");
        this.registerScript("AA_SerialityPopup.xfdl", function() {
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
         var strToday = "";
         /************************************************************************************************
         * FORM 영역
         ************************************************************************************************/
        this.AA_SerialityPopup_onload = function(obj,e)
        {
        	strToday = this.parent.STR_TODAY;
        	//strToday = "20200201";
        	this.fn_SerialityQuery();
        };

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
         ************************************************************************************************/

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        this.btn_Close_onclick = function(obj,e)
        {
        	this.opener.fn_Search(); // 메인 화면 리스트 조회
        	this.close();
        };

        //신규회차 적용
        this.btn_OK_onclick = function(obj,e)
        {
        	var strCalStartDt = this.div_Seriality.form.cal_StartDt.value;
        	var strCalEndDt = this.div_Seriality.form.cal_EndDt.value;

        	if (!this.fn_Validation()) return;

        	if (!confirm( "신규 회차 처리를 적용 하시겠습니까?"))	return;

        	// 입력용 Input Dataset 세팅 AM_SERIALITY_MASTER
        	this.gfnAddInputDataset("ds_Seriality",	"dsInput");

        	// Output 세팅
        	this.gfnAddOutputDataset("ds_OrgWriterDeptCount", "dsOrgWriterDeptCount");
        	// 공통 Transaction
        	this.gfnCommonTransaction("SerialityMasterInsert", "AA_Seriality_R01");
        };
         /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
         ************************************************************************************************/
        this.fn_SerialityQuery = function()
        {
        	//Parameter 셋팅
        	this.gfnAddSendParameter("TODAY", strToday);

        	// 조회용 Output dataset 세팅 CUR_SERIALITY_SEL
        	this.gfnAddOutputDataset("ds_Seriality", "dsOutput");
        	this.gfnCommonTransaction("GetCurSeriality", "AA_AuditMaster_S01");
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
        		if(strSvcID=="GetCurSeriality")
        		{
        			//trace("ds==>"+this.ds_tmp.saveXML());
        			if (this.ds_Seriality.rowcount<=0)
        			{
        				this.ds_Seriality.addRow();
        				this.div_Seriality.form.edt_SmNm.setFocus();
        				this.st_Title.set_text("신규회차등록");
        			}
        			else
        			{
        				this.div_Seriality.form.edt_SmNm.setFocus();
        				this.st_Title.set_text(this.ds_Seriality.getColumn(0, "SM_NM")+"("+this.ds_Seriality.getColumn(0, "SM_SEQ")+"회차)");
        			}
        		}
        		else if(strSvcID == "SerialityMasterInsert")
        		{
        			//trace("ds==>"+this.ds_OrgWriterDeptCount.saveXML());
        			if(this.ds_OrgWriterDeptCount.getColumn(this.ds_OrgWriterDeptCount.rowposition, "ORG_DEPT_COUNT") > 0)
        			{
        				// 등록한 회차 일련번호
        				var sSmSeq = this.ds_OrgWriterDeptCount.getColumn(this.ds_OrgWriterDeptCount.rowposition, "SM_SEQ");
        				// TP 작성부서 매칭 해주는 팝업 호출
        				var sArgument =
        				{
        					 STR_SM_SEQ 	 	: sSmSeq
        					 ,STR_EVT_POSITION	: "SerialityPopup"
        				}

        				this.commUtil.popup(this, "WriterDeptPopup", "Admin::AA_WriterDeptPopup.xfdl", -1, -1, null, null, true, true, false, sArgument, "fnPopupCallBack");
        			}
        			else
        			{
        				alert("정상적으로 처리 되었습니다.");
        				this.opener.fn_Search(); // 메인 화면 조회
        				this.commUtil.popupClose("");
        			}
        		}
        	}
        }

        //Validation 처리
        this.fn_Validation = function()
        {
        	var strCalStartDt = this.div_Seriality.form.cal_StartDt.value;
        	var strCalEndDt = this.div_Seriality.form.cal_EndDt.value;

        	if (this.gfnIsEmpty(this.div_Seriality.form.edt_SmNm.value))
        	{
        		alert("회차명을 입력 하세요");
        		return false;
        	}
        	else if (this.gfnIsEmpty(strCalStartDt))
        	{
        		alert("시작일을 입력 하세요");
        		return false;
        	}
        	else if (this.gfnIsEmpty(strCalEndDt))
        	{
        		alert("종료일을 입력 하세요");
        		return false;
        	}
        	else if(strCalStartDt.substring(0, 4) != strCalEndDt.substring(0, 4))
        	{
        		alert("시작일 년도와 종료일 년도가 다릅니다. \n\n회차 적용하기 위해서는 년도가 같아야 합니다.");
        		return false;
        	}
        	else if(strToday.substring(0, 4) < strCalStartDt.substring(0, 4))
        	{
        		alert("신규회차는 현재 년도에만 적용합니다.");
        		return false;
        	}
        	else return true;
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
        			case "WriterDeptPopup" :
        				var ds = new nexacro.Dataset();
        				ds.loadXML(popupArg);
        				//trace(ds.saveXML());

        				this.opener.fn_Search(); // 메인 화면 조회
        				this.commUtil.popupClose("");
        				break;
        		}
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.AA_SerialityPopup_onload,this);
            this.btn_Confirm.addEventHandler("onclick",this.div_InConfirm_btn_Confirm_onclick,this);
            this.btn_Close.addEventHandler("onclick",this.btn_Close_onclick,this);
            this.btn_OK.addEventHandler("onclick",this.btn_OK_onclick,this);
            this.btn_Cancel.addEventHandler("onclick",this.btn_Close_onclick,this);
        };
        this.loadIncludeScript("AA_SerialityPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
