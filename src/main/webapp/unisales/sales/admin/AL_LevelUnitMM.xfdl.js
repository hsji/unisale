(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AL_LevelUnitMM");
            this.set_titletext("레벨단가 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1290,570);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsOutput1", this);
            obj._setContents("<ColumnInfo><Column id=\"REGISTER\" type=\"STRING\" size=\"255\"/><Column id=\"YEAR\" type=\"STRING\" size=\"4\"/><Column id=\"LEVEL_TYPE\" type=\"STRING\" size=\"20\"/><Column id=\"LEVEL_CODE\" type=\"STRING\" size=\"20\"/><Column id=\"UNIT_COST\" type=\"FLOAT\" size=\"22\"/><Column id=\"REMARKS\" type=\"STRING\" size=\"1073741823\"/><Column id=\"INSERT_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"INSERT_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"INSERT_DEPT_CD\" type=\"STRING\" size=\"60\"/><Column id=\"INSERT_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"INSERT_MODEL\" type=\"STRING\" size=\"100\"/><Column id=\"UPDATE_DATE\" type=\"DATETIME\" size=\"23\"/><Column id=\"UPDATE_EMP_NO\" type=\"STRING\" size=\"60\"/><Column id=\"UPDATE_DEPT_CD\" type=\"STRING\" size=\"60\"/><Column id=\"UPDATE_DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"UPDATE_MODEL\" type=\"STRING\" size=\"100\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_LEVEL_CODE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CD_Staff_Class", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION_JAP\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">S</Col><Col id=\"CAPTION\">SI인력</Col><Col id=\"CAPTION_JAP\">SI人材</Col></Row><Row><Col id=\"CODE\">T</Col><Col id=\"CAPTION\">기술지원</Col><Col id=\"CAPTION_JAP\">技術サポート</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput2", this);
            obj._setContents("<ColumnInfo><Column id=\"LEVEL_TYPE\" type=\"STRING\" size=\"1\"/><Column id=\"CD_CODE\" type=\"STRING\" size=\"20\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"100\"/><Column id=\"ORD\" type=\"STRING\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Level_Type", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION_JAP\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION_ENG\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"CAPTION\">전체</Col><Col id=\"CAPTION_JAP\">全体</Col></Row><Row><Col id=\"CODE\">S</Col><Col id=\"CAPTION\">SI인력</Col><Col id=\"CAPTION_JAP\">SI人材</Col></Row><Row><Col id=\"CODE\">T</Col><Col id=\"CAPTION\">기술지원</Col><Col id=\"CAPTION_JAP\">技術サポート</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_Search","8","8",null,"40","8",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_cssclass("div_WF_SchList");
            obj.set_formscrollbartype("none none");
            obj.set_formscrolltype("none");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_Level_Year","46","9","86","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("0");
            obj.set_dateformat("yyyy");
            obj.set_editformat("yyyy");
            obj.set_showyearspin("true");
            obj.set_type("spin");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static00","8","9","30","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("1");
            obj.set_text("년도");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("352");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static01","140","9","30","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("2");
            obj.set_text("구분");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.getSetter("TL_SEQ").set("68");
            this.div_Search.addChild(obj.name, obj);

            obj = new Combo("cmb_Level_Type","178","9","86","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("3");
            obj.set_innerdataset("ds_Level_Type");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            obj.getSetter("TL_FLAG").set("1");
            obj.set_text("SI인력");
            obj.set_value("S");
            obj.set_index("0");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_Search",null,"7","60","22","76",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_SchText");
            obj.getSetter("TL_SEQ").set("118");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_Save",null,null,"60","22","8","9",null,null,null,null,this.div_Search.form);
            obj.set_taborder("5");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_tran");
            obj.getSetter("TL_SEQ").set("115");
            this.div_Search.addChild(obj.name, obj);

            obj = new Grid("grd_LevelCodeList","278","56",null,null,"8","6",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsOutput1");
            obj.set_autofittype("col");
            obj.set_selecttype("multirow");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"적용년도\" TL_SEQ=\"408\"/><Cell col=\"1\" text=\"구분\" TL_SEQ=\"68\"/><Cell col=\"2\" text=\"단가\" TL_SEQ=\"102\"/><Cell col=\"3\" text=\"등급명\" TL_SEQ=\"92\"/><Cell col=\"4\" text=\"등록일\" TL_SEQ=\"77\"/><Cell col=\"5\" text=\"등록자\" TL_SEQ=\"81\"/><Cell col=\"6\" text=\"비고\" TL_SEQ=\"45\"/></Band><Band id=\"body\"><Cell text=\"bind:YEAR\"/><Cell col=\"1\" text=\"bind:LEVEL_TYPE\" displaytype=\"combotext\" combodataset=\"ds_CD_Staff_Class\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" TL_FLAG=\"1\"/><Cell col=\"2\" text=\"bind:UNIT_COST\" edittype=\"text\"/><Cell col=\"3\" text=\"bind:LEVEL_CODE\" displaytype=\"combotext\" combodataset=\"ds_CD_LEVEL_CODE\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/><Cell col=\"4\" text=\"bind:INSERT_DATE\" calendardateformat=\"yyyy-MM-dd \"/><Cell col=\"5\" text=\"bind:REGISTER\"/><Cell col=\"6\" text=\"bind:REMARKS\" edittype=\"text\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Level_Code","8","56","214",null,null,"6",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsOutput2");
            obj.set_autofittype("col");
            obj.set_selecttype("multirow");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"98\"/><Column size=\"95\"/><Column size=\"106\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"구분\" TL_SEQ=\"68\"/><Cell col=\"1\" text=\"레벨\" TL_SEQ=\"12408\"/><Cell col=\"2\" text=\"등급명\" TL_SEQ=\"92\"/></Band><Band id=\"body\"><Cell text=\"bind:LEVEL_TYPE\" displaytype=\"combotext\" combodataset=\"ds_CD_Staff_Class\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" TL_FLAG=\"1\"/><Cell col=\"1\" text=\"bind:CD_CODE\"/><Cell col=\"2\" combodataset=\"ds_CD_LEVEL_CODE\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" text=\"bind:CAPTION\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_MultiOut","230","180","42","33",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("btn_WF_prev2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_SingleOut","230","btn_MultiOut:8","42","33",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("btn_WF_prev");
            this.addChild(obj.name, obj);

            obj = new Button("btn_MultiIns","230","btn_SingleOut:148","42","33",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("btn_WF_next2");
            this.addChild(obj.name, obj);

            obj = new Button("btn_SingleIns","230","btn_MultiIns:8","42","33",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("btn_WF_next");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_Search.form
            obj = new Layout("default","",0,0,this.div_Search.form,function(p){});
            this.div_Search.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1290,570,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("AL_LevelUnitMM.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("AL_LevelUnitMM.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("AL_LevelUnitMM.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("AL_LevelUnitMM.xfdl","Script::CommGrid.xjs");
        this.registerScript("AL_LevelUnitMM.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 : 공통 - 공통
        * 02. 화면명   : 레벨 단가 (AL_LevelUnitMM_S01)
        * 03. 화면설명 :
        * 04. 작성일   : 2018.09.10
        * 05. 작성자   : 안주환
        * 06. 수정이력 :
        ***********************************************************************************************
        *     수정일          이  름    사유
        ***********************************************************************************************
        *
        ************************************************************************************************/

        /************************************************************************************************
        * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        this.executeIncludeScript("Script::CommSystem.xjs"); /*include "Script::CommSystem.xjs"*/;
        this.executeIncludeScript("Script::CommTrans.xjs"); /*include "Script::CommTrans.xjs"*/;
        this.executeIncludeScript("Script::CommUtil.xjs"); /*include "Script::CommUtil.xjs"*/;
        this.executeIncludeScript("Script::CommGrid.xjs"); /*include "Script::CommGrid.xjs"*/;
        /************************************************************************************************
        * 전역 변수 영역
        ************************************************************************************************/


        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/
        this.AL_LevelUnitMM_onload = function(obj,e)
        {
        	this.gfnCompInit(obj); //헤더클릭 이벤트 없을 시 사용
        	this.fnFormInit();
        };

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.fnFormInit = function()
        {
        	var bEnable = false;
        	if(this.commUtil.getFormAuthority(285,1))	/*저장권한*/
        		bEnable = true;

        	this.div_Search.form.btn_Save.set_enable(bEnable);
        	this.btn_MultiOut.set_enable(bEnable);
        	this.btn_SingleOut.set_enable(bEnable);
        	this.btn_MultiIns.set_enable(bEnable);
        	this.btn_SingleIns.set_enable(bEnable);
        	this.grd_LevelCodeList.set_readonly(!bEnable);

        	this.div_Search.form.cal_Level_Year.set_value(this.getDate().split("-")[0]);
        	this.fnGetCode();
        	this.fnSearch();
        };

        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fnGetCode = function()
        {
        	this.gfnAddCodeDataset("ds_CD_LEVEL_CODE"		,"LEVEL_CODE");

        	// 공통코드 조회
        	this.gfnCodeTransaction();
        };

        this.fnSearch = function()
        {
        	// 조건값 셋팅
        	this.gfnAddSendParameter("YEAR", this.div_Search.form.cal_Level_Year.value.substr(0,4));
        	this.gfnAddSendParameter("LEVEL_TYPE", this.div_Search.form.cmb_Level_Type.value);

        	// 조회용 Output dataset 세팅
        	this.gfnAddOutputDataset("dsOutput1", "dsOutput1");
        	this.gfnAddOutputDataset("dsOutput2", "dsOutput2");

        	var grdArray = new Array();
        	grdArray[0] = this.grd_LevelCodeList;
        	grdArray[1] = this.grd_Level_Code;

        	this.gfnCommonTransaction("Select", "AL_LevelUnitMM_S01", grdArray);
        };

        this.fnSave = function()
        {
        	//저장용 Input Dataset 세팅
        	this.gfnAddInputDataset("dsOutput1", "dsInput");
        	this.gfnCommonTransaction("Save", "AL_LevelUnitMM_R01");
        };

        // 화면 콜백
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
        		if(strSvcID=="gfnGetCode")
        		{
        			this.fnSearch();
        		}
        		else if(strSvcID=="Select")
        		{

         		}
        		else if(strSvcID=="Save")
        		{
        			this.fnSearch();
        		}
        	}
        };


        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.comm_Click = function(obj, e)
        {
        	switch(obj.name)
        	{
        		case "btn_Search" :
        			this.fnSearch();
        			break;
        		case "btn_Save" :
        			this.fnSave();
        			break;
        		case "btn_MultiIns" :
        			for(var i=0; i<this.dsOutput2.rowcount; i++)
        			{
        				var nRow = this.dsOutput1.addRow();
        				this.dsOutput1.setColumn(nRow, "YEAR", this.div_Search.form.cal_Level_Year.value.substr(0,4));
        				this.dsOutput1.setColumn(nRow, "LEVEL_TYPE", this.dsOutput2.getColumn(i, "LEVEL_TYPE"));
        				this.dsOutput1.setColumn(nRow, "UNIT_COST", 0);
        				this.dsOutput1.setColumn(nRow, "LEVEL_CODE", this.dsOutput2.getColumn(i, "CD_CODE"));
        				this.dsOutput1.setColumn(nRow, "INSERT_DATE", this.getDate().split('-')[0] + this.getDate().split('-')[1] + this.getDate().split('-')[2]);
        				this.dsOutput1.setColumn(nRow, "REGISTER", nexacro.getApplication().gdsUserInfo.getColumn(0, "EMP_NM"));
        			}

        			this.dsOutput2.clearData();
        			break;

        		case "btn_SingleIns" :
        			var aRowidx = this.grd_Level_Code.getSelectedRows();

        			for(var i=0; i<aRowidx.length; i++)
        			{
        				var nRow = this.dsOutput1.addRow();
        				this.dsOutput1.setColumn(nRow, "YEAR", this.div_Search.form.cal_Level_Year.value.substr(0,4));
        				this.dsOutput1.setColumn(nRow, "LEVEL_TYPE", this.dsOutput2.getColumn(aRowidx[i], "LEVEL_TYPE"));
        				this.dsOutput1.setColumn(nRow, "UNIT_COST", 0);
        				this.dsOutput1.setColumn(nRow, "LEVEL_CODE", this.dsOutput2.getColumn(aRowidx[i], "CD_CODE"));
        				this.dsOutput1.setColumn(nRow, "INSERT_DATE", this.getDate().split('-')[0] + this.getDate().split('-')[1] + this.getDate().split('-')[2]);
        				this.dsOutput1.setColumn(nRow, "REGISTER", nexacro.getApplication().gdsUserInfo.getColumn(0, "EMP_NM"));
        			}

        			this.dsOutput2.deleteMultiRows(aRowidx);
        			this.dsOutput2.set_rowposition(-1);
        			break;

        		case "btn_MultiOut" :
        			for(var i=0; i<this.dsOutput1.rowcount; i++)
        			{
        				var nRow = this.dsOutput2.addRow();
        				this.dsOutput2.setColumn(nRow, "CD_CODE", this.dsOutput1.getColumn(i, "LEVEL_CODE"));
        				this.dsOutput2.setColumn(nRow, "CAPTION", this.dsOutput1.getColumn(i, "LEVEL_NAME"));
        			}

        			//this.dsOutput1.clearData();
        			//저장시에 dsOutput1에 대한 rowType이 변해야 하므로 위와는 다르게 clearData를 쓰지 않고 하나씩 지워준다.
        			//이유 : clearData()를 하게되면 rowType은 변하지 않는다. 하지만, 아래와 같이 for문을 돌려서 지워야( (this.dsOutput1.deleteMultiRows(this.dsOutput1)를 써도 무방하다.) )
        			//rowType이 delete로 되어 트랜잭션을 타고 들어가서 Invoke를 탈 때 삭제가 수행된다.

        			var length = this.dsOutput1.rowcount;

        			for(var i=0; i<length; i++)
        			{
        				this.dsOutput1.deleteRow(length-(i+1));
        			}

        			break;

        		case "btn_SingleOut" :
        			var aRowidx = this.grd_LevelCodeList.getSelectedRows();

        			for(var i=0; i<aRowidx.length; i++)
        			{
        				var nRow = this.dsOutput2.addRow();
        				this.dsOutput2.setColumn(nRow, "CD_CODE", this.dsOutput1.getColumn(aRowidx[i], "LEVEL_CODE"));
        				this.dsOutput2.setColumn(nRow, "CAPTION", this.dsOutput1.getColumn(aRowidx[i], "LEVEL_NAME"));
        			}

        			this.dsOutput1.deleteMultiRows(aRowidx);
        			this.dsOutput2.set_rowposition(-1);
        			break;
        	}
        };

        //현재날짜측정
        this.getDate = function()
        {
        	var objDate = new Date();
        	var strMonth = "", strDate = "", resMonth = "", resDate = "";

        	strMonth = parseInt(objDate.getMonth()) + 1;
        	strDate = parseInt(objDate.getDate());

        	resMonth = strMonth.toString().padLeft(2, "0");
        	resDate = strDate.toString().padLeft(2, "0");

        	return objDate.getYear() + "-" + resMonth + "-" + resDate;
        };

        this.div_Search_cmb_Level_Type_onitemchanged = function(obj,e)
        {
        	var strFilter = ""

        	if(e.postvalue == "0") //unfilter 처리함.
        	{
        		this.dsOutput1.filter("");
        		this.dsOutput2.filter("");
        	}
        	else if(e.postvalue == "S")
        	{
        		strFilter = "S";
        		this.dsOutput1.filter("LEVEL_TYPE == '" + strFilter + "'");
        		this.dsOutput2.filter("LEVEL_TYPE == '" + strFilter + "'");
        	}
        	else if(e.postvalue == "T")
        	{
        		strFilter = "T";
        		this.dsOutput1.filter("LEVEL_TYPE == '" + strFilter + "'");
        		this.dsOutput2.filter("LEVEL_TYPE == '" + strFilter + "'");
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.AL_LevelUnitMM_onload,this);
            this.div_Search.form.cmb_Level_Type.addEventHandler("onitemchanged",this.div_Search_cmb_Level_Type_onitemchanged,this);
            this.div_Search.form.btn_Search.addEventHandler("onclick",this.comm_Click,this);
            this.div_Search.form.btn_Save.addEventHandler("onclick",this.comm_Click,this);
            this.btn_MultiOut.addEventHandler("onclick",this.comm_Click,this);
            this.btn_SingleOut.addEventHandler("onclick",this.comm_Click,this);
            this.btn_MultiIns.addEventHandler("onclick",this.comm_Click,this);
            this.btn_SingleIns.addEventHandler("onclick",this.comm_Click,this);
        };
        this.loadIncludeScript("AL_LevelUnitMM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
