(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CM_MemoMM");
            this.set_titletext("Memo");
            this.set_cssclass("frm_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(886,564);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_client", this);
            obj._setContents("<ColumnInfo><Column id=\"CAPTION\" type=\"string\" size=\"255\"/><Column id=\"CD_CODE\" type=\"STRING\" size=\"10\"/><Column id=\"MN_SEQ\" type=\"bigdecimal\" size=\"18\"/><Column id=\"EMP_NO\" type=\"string\" size=\"8\"/><Column id=\"SOURCE_CD\" type=\"string\" size=\"30\"/><Column id=\"SOURCE_SEQ\" type=\"bigdecimal\" size=\"18\"/><Column id=\"TITLE\" type=\"string\" size=\"255\"/><Column id=\"DESCRIPTION\" type=\"string\" size=\"32767\"/><Column id=\"ORD\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DATE\" type=\"datetime\" size=\"23\"/><Column id=\"INSERT_EMP_NO\" type=\"string\" size=\"60\"/><Column id=\"INSERT_DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"INSERT_MODEL\" type=\"string\" size=\"100\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInput", this);
            obj._setContents("<ColumnInfo><Column id=\"MN_SEQ\" type=\"int\" size=\"255\"/><Column id=\"SOURCE_CD\" type=\"string\" size=\"30\"/><Column id=\"SOURCE_SEQ\" type=\"int\" size=\"18\"/><Column id=\"DESCRIPTION\" type=\"string\" size=\"4000\"/></ColumnInfo><Rows/>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_memo","9","73","425",null,null,"46",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("ds_client");
            obj.set_cssclass("grd_POP_Memo");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"114\"/><Column size=\"80\"/><Column size=\"143\"/><Column size=\"81\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"출처\"/><Cell col=\"1\" text=\"일련번호\"/><Cell col=\"2\" text=\"타이틀\"/><Cell col=\"3\" text=\"최종수정일\"/></Band><Band id=\"body\"><Cell celltype=\"none\" displaytype=\"text\" edittype=\"readonly\" text=\"bind:CAPTION\" combodisplay=\"edit\"/><Cell col=\"1\" text=\"bind:SOURCE_SEQ\"/><Cell col=\"2\" style=\"align:left middle;\" text=\"bind:TITLE\" edittype=\"text\"/><Cell col=\"3\" style=\"align:right;\" text=\"bind:INSERT_DATE\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0",null,null,"38","0","1",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_POP_BtnBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","1","35",null,"31","1",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_POP_GroupBg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"10","15","15","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_POP_Cls");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","10","0","356","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("MEMO");
            obj.set_cssclass("sta_POP_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","440","35","1",null,null,"1",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Static00");
            obj.set_background("#bbbbbb");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","11","39","274","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("전체 메모 목록을 표시합니다.");
            obj.set_cssclass("sta_POP_info01");
            this.addChild(obj.name, obj);

            obj = new Div("div_sub","0","35",null,null,"0","1",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("#ffffff");
            obj.set_border("0px none");
            this.addChild(obj.name, obj);

            obj = new Static("Static18","0","0",null,"31","0",null,null,null,null,null,this.div_sub.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_POP_GroupBg");
            this.div_sub.addChild(obj.name, obj);

            obj = new Button("btn_lgCls","-1","0","15","31",null,null,null,null,null,null,this.div_sub.form);
            obj.set_taborder("0");
            obj.set_cssclass("btn_POP_RtCls");
            this.div_sub.addChild(obj.name, obj);

            obj = new Static("sta_title","16","5",null,"22","0",null,null,null,null,null,this.div_sub.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_Subject");
            this.div_sub.addChild(obj.name, obj);

            obj = new TextArea("txt_memo","8","38",null,null,"8","45",null,null,null,null,this.div_sub.form);
            obj.set_taborder("4");
            this.div_sub.addChild(obj.name, obj);

            obj = new Static("Static00","0",null,null,"38","0","0",null,null,null,null,this.div_sub.form);
            obj.set_taborder("3");
            obj.set_cssclass("sta_POP_BtnBg");
            this.div_sub.addChild(obj.name, obj);

            obj = new Button("btn_newMemo",null,null,"60","24","144","7",null,null,null,null,this.div_sub.form);
            obj.set_taborder("5");
            obj.set_text("신규");
            obj.set_cssclass("btn_WF_tran");
            this.div_sub.addChild(obj.name, obj);

            obj = new Button("btn_delete",null,null,"60","24","76","7",null,null,null,null,this.div_sub.form);
            obj.set_taborder("6");
            obj.set_text("삭제");
            obj.set_cssclass("btn_WF_tran");
            this.div_sub.addChild(obj.name, obj);

            obj = new Button("btn_save",null,null,"60","24","8","7",null,null,null,null,this.div_sub.form);
            obj.set_taborder("7");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_tran");
            this.div_sub.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_sub.form
            obj = new Layout("default","",0,0,this.div_sub.form,function(p){});
            this.div_sub.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",886,564,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_sub.form.txt_memo","value","ds_client","DESCRIPTION");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_sub.form.sta_title","text","ds_client","TITLE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CM_MemoMM.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("CM_MemoMM.xfdl","Script::CommGrid.xjs");
        this.addIncludeScript("CM_MemoMM.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("CM_MemoMM.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("CM_MemoMM.xfdl","Script::ext_CommEco.xjs");
        this.addIncludeScript("CM_MemoMM.xfdl","Script::ext_WebEditor.xjs");
        this.registerScript("CM_MemoMM.xfdl", function() {
        /************************************************************************************************
         * 01. 업무구분 : 공통
         * 02. 화면명   : 메모(MemoMM)
         * 03. 화면설명 : 업무관련 메모를 관리한다.
         * 04. 작성일   : 2018.08.07
         * 05. 작성자   : 채종한
         * 06. 수정이력 :
         ***********************************************************************************************
         *     수정일          이  름    사유
         ***********************************************************************************************
         *
        ************************************************************************************************/

        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        this.executeIncludeScript("Script::CommUtil.xjs"); /*include "Script::CommUtil.xjs"*/;
        this.executeIncludeScript("Script::CommGrid.xjs"); /*include "Script::CommGrid.xjs"*/;
        this.executeIncludeScript("Script::CommTrans.xjs"); /*include "Script::CommTrans.xjs"*/;
        this.executeIncludeScript("Script::CommSystem.xjs"); /*include "Script::CommSystem.xjs"*/;
        this.executeIncludeScript("Script::ext_CommEco.xjs"); /*include "Script::ext_CommEco.xjs"*/;
        this.executeIncludeScript("Script::ext_WebEditor.xjs"); /*include "Script::ext_WebEditor.xjs"*/;

        /************************************************************************************************
         * 전역 변수 영역
        ************************************************************************************************/

        this.wbContents;
        this.pvSourceCd;
        this.pvSourceSeq;
        this.ord;


        /************************************************************************************************
         * FORM 영역
        ************************************************************************************************/

        this.CM_MemoMM_onload = function(obj, e)
        {
        	//호출한 부모영역의 내용...
        	if (!this.gfnIsEmpty(this.parent.pvSourceCd))
        	{
        		this.pvSourceCd = this.parent.pvSourceCd;
        		this.pvSourceSeq = this.parent.pvSourceSeq;
        	}

        	this.fnInit();
        }

        this.fnInit = function()
        {
        	this.fnMemoSearch();
        }

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.fnPopupCallBack = function (popupId, popupArg)
        {
        	popupArg = this.commUtil.popupReturn();
        	if(!Eco.isEmpty(popupArg))
        	{
        		switch(popupId)
        		{
        			case "popStakeHolders":

        				break;
        			case "popFileManager":

        				break;
        			case "CommChangeReason":

        				break;

        		}
        	}
        }


        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        // 조회
        this.fnMemoSearch = function()
        {
        	return;

        	var strSvcID = "CM_MemoMM_S01";
        	var strModelNm = "CM_MemoMM_S01";
        	this.gfnAddOutputDataset("ds_client", "dsOutput");
        	this.gfnAddSendParameter("SOURCE_CD", this.pvSourceCd);
        	this.gfnAddSendParameter("SOURCE_SEQ", this.pvSourceSeq);
        	this.gfnCommonTransaction(strSvcID, strModelNm, this.grd_memo);
        }

        // 콜백함수
        this.fnCallBack = function(strSvcID, nErrorCode, strErrorMag)
        {
        	// 에러 예외처리
         	if(nErrorCode != 0)
         	{
         		return;
         	}
         	else
         	{
        		if(strSvcID=="CM_MemoMM_S01")
        		{
        			this.gfnCompInit(this);
        			this.wbContents = this.ds_client.getColumn(this.ds_client.rowposition, "DESCRIPTION");

        			// 메모 없으면 Row 추가
        			if (this.ds_client.rowcount <= 0)
        			{
        				this.ds_client.set_enableevent(false);
        				var aRow = this.ds_client.addRow();
        				this.ds_client.setColumn(aRow, "SOURCE_CD" , this.pvSourceCd);
        				this.ds_client.setColumn(aRow, "SOURCE_SEQ", this.pvSourceSeq);
        				this.ds_client.set_enableevent(true);
        				// this.div_sub.sta_title.set_text("");
        			}
        		}
         		else if(strSvcID=="CM_MemoMM_R01")
         		{
        			this.gfnCompInit(this);
        			this.fnMemoSearch();
         		}
        	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        // 영역확장 축소 버튼.
        this.div_sub_btn_lgCls_onclick = function(obj,e)
        {
        	if(obj.cssclass == "btn_POP_LfCls")
        	{
        		this.div_sub.set_left(0);
        		obj.set_cssclass("btn_POP_RtCls");
        	}
        	else
        	{
        		this.div_sub.set_left(441);
        		obj.set_cssclass("btn_POP_LfCls");
        	}
        }



        //row추가
        this.div_sub_btn_newMemo_onclick = function(obj,e)
        {
        	this.ds_client.set_enableevent(false);
        	var aRow = this.ds_client.addRow();
        	this.ds_client.setColumn(aRow, "SOURCE_CD" , this.pvSourceCd);
        	this.ds_client.setColumn(aRow, "SOURCE_SEQ", this.pvSourceSeq);
        	this.ds_client.set_enableevent(true);
        	// this.div_sub.sta_title.set_text("");
        }


        // 저장
        this.div_sub_btn_save_onclick = function(obj,  e)
        {
         	alert("서비스 준비중");
        	return;


        	if(confirm("저장하시겠습니까?"))
         	{
        		var strSvcID = "CM_MemoMM_R01";
        		var strModelNm = "CM_MemoMM_R01";
        		//메모리스트 그리드
        		this.gfnAddInputDataset("ds_client", "dsInput");
        		this.gfnCommonTransaction(strSvcID, strModelNm);
        	}
        }


        // 삭제
        this.div_sub_btn_delete_onclick = function(obj,  e)
        {
        	this.ds_client.deleteRow(this.ds_client.rowposition);
        	this.ds_client_onrowposchanged();
        }




        // 메모 그리드클릭시..
        this.ds_client_onrowposchanged = function(obj, e)
        {
         	var nRow = this.dsClient.rowposition;
         	// this.div_sub.sta_title.set_text(this.dsClient.getColumn(nRow, "TITLE"));
        }


        this.ds_client_canrowposchange = function(obj, e)
        {
         	if(this.ds_client.getRowType(e.oldrow)==2 || this.ds_client.getRowType(e.oldrow)==4)
         	{
        		var strDESCRIPTION = this.ds_client.getColumn(e.oldrow, "DESCRIPTION");
        		if(strDESCRIPTION==undefined || strDESCRIPTION.length == 0){
        			this.ds_client.deleteRow(e.oldrow);
        		}
        	}
        }


        // 취소, 닫기버튼
        this.btn_close_onclick = function(obj,e)
        {
        	this.commUtil.popupClose("");
        }

        this.grd_memo_onheadclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CM_MemoMM_onload,this);
            this.grd_memo.addEventHandler("onheadclick",this.grd_memo_onheadclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
            this.div_sub.form.btn_lgCls.addEventHandler("onclick",this.div_sub_btn_lgCls_onclick,this);
            this.div_sub.form.btn_newMemo.addEventHandler("onclick",this.div_sub_btn_newMemo_onclick,this);
            this.div_sub.form.btn_delete.addEventHandler("onclick",this.div_sub_btn_delete_onclick,this);
            this.div_sub.form.btn_save.addEventHandler("onclick",this.div_sub_btn_save_onclick,this);
            this.ds_client.addEventHandler("onrowposchanged",this.ds_client_onrowposchanged,this);
            this.ds_client.addEventHandler("canrowposchange",this.ds_client_canrowposchange,this);
        };
        this.loadIncludeScript("CM_MemoMM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
