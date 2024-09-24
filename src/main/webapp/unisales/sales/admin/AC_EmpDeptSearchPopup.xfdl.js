(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AC_EmpDeptSearchPopup");
            this.set_titletext("New Form");
            this.set_cssclass("frm_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(650,640);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_department", this);
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"255\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"30\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"100\"/><Column id=\"USE_YN\" type=\"STRING\" size=\"10\"/><Column id=\"LEV\" type=\"STRING\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_employee", this);
            obj._setContents("<ColumnInfo><Column id=\"ISCHECKED\" type=\"STRING\" size=\"255\"/><Column id=\"EMP_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"255\"/><Column id=\"GRADE_CD\" type=\"STRING\" size=\"255\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"255\"/><Column id=\"DUTY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"PHOTO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"H_PHONE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"O_PHONE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"FIRE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"HOLD_OFFICE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Selected", this);
            obj._setContents("<ColumnInfo><Column id=\"AU_SEQ\" type=\"bigdecimal\" size=\"20\"/><Column id=\"SAL_SEQ\" type=\"bigdecimal\" size=\"20\"/><Column id=\"AU_TYPE\" type=\"string\" size=\"1\"/><Column id=\"AU_CODE\" type=\"string\" size=\"200\"/><Column id=\"DEPT_CD\" type=\"string\" size=\"30\"/><Column id=\"DEPT_NM\" type=\"string\" size=\"100\"/><Column id=\"EMP_NO\" type=\"string\" size=\"100\"/><Column id=\"EMP_NM\" type=\"string\" size=\"255\"/><Column id=\"DELETE_FLAG\" type=\"string\" size=\"10\"/><Column id=\"USE_FLAG\" type=\"string\" size=\"1\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_type", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">1</Col><Col id=\"value\">DEPT</Col></Row><Row><Col id=\"value\">EMP</Col><Col id=\"code\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_close",null,"10","15","15","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_POP_Cls");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Static("st_Title","10","0","186","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("부서 (직원) 선택");
            obj.set_cssclass("sta_POP_Title");
            this.addChild(obj.name, obj);

            obj = new Div("div_Search","4","39",null,"40","4",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_cssclass("div_WF_SchList");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Name","116","8","44","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("2");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.div_Search.addChild(obj.name, obj);

            obj = new Edit("edt_Name","166","8","152","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("0");
            this.div_Search.addChild(obj.name, obj);

            obj = new Button("btn_Search",null,"7","60","24","8",null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("1");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_SchText");
            this.div_Search.addChild(obj.name, obj);

            obj = new Radio("rd_Kind","14","9","101","22",null,null,null,null,null,null,this.div_Search.form);
            obj.set_taborder("3");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("1");
            var div_Search_form_rd_Kind_innerdataset = new nexacro.NormalDataset("div_Search_form_rd_Kind_innerdataset", obj);
            div_Search_form_rd_Kind_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">DEPT</Col><Col id=\"datacolumn\">부서</Col></Row><Row><Col id=\"codecolumn\">EMP</Col><Col id=\"datacolumn\">직원</Col></Row></Rows>");
            obj.set_innerdataset(div_Search_form_rd_Kind_innerdataset);
            obj.set_text("직원");
            obj.set_value("EMP");
            obj.set_index("1");
            this.div_Search.addChild(obj.name, obj);

            obj = new Static("Static06","4","87",null,"31","4",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_POP_GroupBg");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_list","4","118","243",null,null,"44",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_department");
            obj.set_autofittype("col");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("true");
            obj._setContents("<Formats><Format id=\"EMP\"><Columns><Column size=\"242\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:DEPT_NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:LEV\" treecheck=\"bind:ISCHECKED\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/></Band></Format><Format id=\"DEPT\"><Columns><Column size=\"48\"/><Column size=\"195\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" text=\"bind:ISCHECKED\"/><Cell col=\"1\" text=\"bind:DEPT_NM\" displaytype=\"treeitemcontrol\" edittype=\"tree\" treelevel=\"bind:LEV\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Emp","250","118",null,"260","4",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_employee");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"80\"/><Column size=\"60\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"부서\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"직급\"/></Band><Band id=\"body\"><Cell text=\"bind:DEPT_NM\" textAlign=\"left\"/><Cell col=\"1\" text=\"bind:EMP_NM\"/><Cell col=\"2\" text=\"bind:CAPTION\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Selected","250","378",null,null,"4","44",null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_autofittype("col");
            obj.set_formatid("default");
            obj.set_binddataset("ds_Selected");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"180\"/><Column size=\"100\"/><Column size=\"53\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"타입\"/><Cell col=\"1\" text=\"부서\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"USE\"/></Band><Band id=\"body\"><Cell displaytype=\"combotext\" text=\"bind:AU_TYPE\" combodataset=\"ds_type\" combocodecol=\"code\" combodatacol=\"value\"/><Cell col=\"1\" text=\"bind:DEPT_NM\"/><Cell col=\"2\" text=\"bind:EMP_NM\"/><Cell col=\"3\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxtruevalue=\"1\" checkboxfalsevalue=\"0\" text=\"bind:USE_FLAG\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("stc_BottomFrame","1",null,null,"38","1","1",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_POP_BtnBg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Save",null,null,"60","22","74","11",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_tran");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Cancel",null,null,"60","22","6","11",null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_cancel");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_Search.form
            obj = new Layout("default","",0,0,this.div_Search.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.stc_Name.set_taborder("2");
                p.stc_Name.set_text("성명");
                p.stc_Name.set_cssclass("sta_WF_DetailTit");
                p.stc_Name.set_textAlign("right");
                p.stc_Name.move("116","8","44","22",null,null);

                p.edt_Name.set_taborder("0");
                p.edt_Name.move("166","8","152","22",null,null);

                p.btn_Search.set_taborder("1");
                p.btn_Search.set_text("조회");
                p.btn_Search.set_cssclass("btn_WF_SchText");
                p.btn_Search.move(null,"7","60","24","8",null);

                p.rd_Kind.set_taborder("3");
                p.rd_Kind.set_innerdataset(div_Search_form_rd_Kind_innerdataset);
                p.rd_Kind.set_codecolumn("codecolumn");
                p.rd_Kind.set_datacolumn("datacolumn");
                p.rd_Kind.set_rowcount("1");
                p.rd_Kind.set_value("EMP");
                p.rd_Kind.set_index("1");
                p.rd_Kind.move("14","9","101","22",null,null);
            	}
            );
            this.div_Search.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div_Search.form
            obj = new Layout("portrait","",0,0,this.div_Search.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.stc_Name.move("196","4","44","30",null,null);

                p.edt_Name.move("244","4","140","30",null,null);

                p.btn_Search.move(null,"3","70","30","4",null);

                p.edt_CompanyName.move("52","4","140","30",null,null);

                p.stc_Name00.move("4","4","44","30",null,null);
            	}
            );
            this.div_Search.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","",650,640,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("AC_EmpDeptSearchPopup.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("AC_EmpDeptSearchPopup.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("AC_EmpDeptSearchPopup.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("AC_EmpDeptSearchPopup.xfdl","Script::CommGrid.xjs");
        this.registerScript("AC_EmpDeptSearchPopup.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분	 	: xxx
        * 02. 화면명		: xxx
        * 03. 화면설명 		: xxx
        * 04. 작성일   	: 2018.xx.xx
        * 05. 작성자   	: xxx
        * 06. 수정이력 	:
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
        this.sEmpName = "";
        this.FV_TITLE;
        this.FV_SAL_SEQ;

        /************************************************************************************************
        * FORM 영역 EVENT 영역
        ************************************************************************************************/
        this.AC_EmpDeptSearchPopup_onload = function(obj,e)
        {
        	this.gfnCompInit(obj);	//	사용자 Grid
        	this.fn_InitDisplay();

        	this.fn_DeptQueryData();
        	this.fn_QueryData();
        };

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.fn_InitDisplay = function ()
        {
        	//this.grd_Emp.set_height(0);
        	//this.div_Search.form.stc_Name.set_text("부서명");

        	this.FV_TITLE =  this.parent.pvTitle;
        	this.FV_SAL_SEQ =  this.parent.pvSalseq;

        	if (this.gfnIsEmpty(this.FV_TITLE)) {
        		this.FV_TITLE = "부서 (직원) 선택";
        	}
        	this.st_Title.set_text(this.FV_TITLE);
        }

        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        // 조회
        this.fn_QueryData = function()
        {
        	this.gfnAddSendParameter("SAL_SEQ", this.FV_SAL_SEQ);
        	this.gfnAddOutputDataset("ds_Selected",  "ds_selected");
        	this.gfnCommonTransaction("AccountUser", "AC_EmpDeptSearchPopup_S01");
        }


        // 부서조회
        this.fn_DeptQueryData = function()
        {
        	this.gfnAddSendParameter("TYPE","1");
        	this.gfnAddSendParameter("EMP_KIND", "T");
        	this.gfnAddSendParameter("HOLD_OFFICE", "1");
        	this.gfnAddOutputDataset("ds_department",  "ds_department");
        	this.gfnCommonTransaction("DeptQuery", "CO_Organization_S01");
        }

        // 직원 조회
        this.fn_EmpQueryData = function()
        {
        	this.gfnAddSendParameter("TYPE", "2");
        	this.gfnAddSendParameter("EMP_KIND", "T");
        	this.gfnAddSendParameter("HOLD_OFFICE", "1");

        	this.gfnAddOutputDataset("ds_employee",  "ds_employee");
        	this.gfnCommonTransaction("EmpData", "CO_Organization_S01");
        };

        // 저장
        this.fn_SaveData = function()
        {
        	this.gfnAddInputDataset ("ds_Selected",	"ds_selected");
        	this.gfnCommonTransaction("SaveData", "AC_EmpDeptSearchPopup_R01");

        }

         // 화면 콜백
        this.fnCallBack = function (strSvcID, nErrorCode, strErrorMag)
        {
        	switch (strSvcID)
        	{
        		case "DeptQuery" :
        			this.fn_EmpQueryData();
        			break;
        		case "EmpData" :
        			var sDeptCd = this.ds_department.getColumn(this.ds_department.rowposition, "DEPT_CD");
        			this.fn_EmpFilter(sDeptCd);
        			break;
        		case "AccountUser" :
        			break;
        		case "SaveData" :
        			break;
        	}
        };

        this.fn_EmpFilter = function(dept_cd)
        {
        	this.ds_employee.set_enableevent(false);
        	this.ds_employee.filter("");
        	this.ds_employee.filter("DEPT_CD == '"+dept_cd+"'");
        	this.ds_employee.set_enableevent(true);
        }

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.common_onclick = function(obj,e)
        {
        	 	switch(obj.name) {
        			case "btn_Search" :
        				this.fn_DeptQueryData();
        				this.fn_QueryData();
        				break;
        			case "btn_Save" : // 저장
        				this.fn_SaveData();
        				break;
        			case "btn_close": case "btn_Cancel":
        				//this.close();
        				this.commUtil.popupClose("OK");
        				break;
        	 	}
        };

        this.div_Search_rd_Kind_onitemchanged = function(obj,e)
        {
        	if (e.postvalue == "DEPT") {
        		this.grd_Emp.set_height(0);
        		this.grd_Selected.set_top(118);
        		this.div_Search.form.stc_Name.set_text("부서명");
        		//this.fn_DeptQueryData();
        	} else {
        		this.grd_Emp.set_height(260);
        		this.grd_Selected.set_top(378);
        		this.div_Search.form.stc_Name.set_text("성명");
        		//this.fn_EmpQueryData();
        	}
        };

        this.ds_department_onrowposchanged = function(obj,e)
        {
        	if (this.div_Search.form.rd_Kind.value == "EMP") {
        		this.fn_EmpFilter(obj.getColumn(e.newrow, "DEPT_CD"));
        	}
        };

        this.grd_list_oncelldblclick = function(obj,e)
        {
        	if (this.div_Search.form.rd_Kind.value == "DEPT") {
        		var sDeptCd = this.ds_department.getColumn(e.row, "DEPT_CD");
        		var sDeptNm = this.ds_department.getColumn(e.row, "DEPT_NM");

        		if (this.fn_getDuplicat("1", sDeptCd)) {
        			var nAddRow = this.ds_Selected.addRow();

        			this.ds_Selected.setColumn(nAddRow, "SAL_SEQ", this.FV_SAL_SEQ);
        			this.ds_Selected.setColumn(nAddRow, "AU_TYPE", "1");
        			this.ds_Selected.setColumn(nAddRow, "AU_CODE", sDeptCd);
        			this.ds_Selected.setColumn(nAddRow, "DEPT_CD", sDeptCd);
        			this.ds_Selected.setColumn(nAddRow, "DEPT_NM", sDeptNm);
        			this.ds_Selected.setColumn(nAddRow, "USE_FLAG", "1");
        		}
        	}
        };

        this.grd_Emp_oncelldblclick = function(obj,e)
        {
        	var sEmpCd = this.ds_employee.getColumn(e.row, "EMP_NO");

        	if (this.fn_getDuplicat("2", sEmpCd)) {
        		var nAddRow = this.ds_Selected.addRow();
        		this.ds_Selected.setColumn(nAddRow, "SAL_SEQ", this.FV_SAL_SEQ);
        		this.ds_Selected.setColumn(nAddRow, "AU_TYPE", "2");
        		this.ds_Selected.setColumn(nAddRow, "AU_CODE", this.ds_employee.getColumn(e.row, "EMP_NO"));
        		this.ds_Selected.setColumn(nAddRow, "EMP_NO", this.ds_employee.getColumn(e.row, "EMP_NO"));
        		this.ds_Selected.setColumn(nAddRow, "EMP_NM", this.ds_employee.getColumn(e.row, "EMP_NM"));
        		this.ds_Selected.setColumn(nAddRow, "DEPT_CD", this.ds_employee.getColumn(e.row, "DEPT_CD"));
        		this.ds_Selected.setColumn(nAddRow, "DEPT_NM", this.ds_employee.getColumn(e.row, "DEPT_NM"));
        		this.ds_Selected.setColumn(nAddRow, "USE_FLAG", "1");
        	}
        };


        this.grd_Selected_oncelldblclick = function(obj,e)
        {
        	this.ds_Selected.deleteRow(this.ds_Selected.rowposition);
        };


        this.fn_getDuplicat = function(stype, code)
        {
        	var sColId = "";
        	var bRtnVal = false;
        	if (stype == "1")	sColId = "DEPT_CD";		//	Dept
        	else				sColId = "EMP_NO";		// Emp

        	var nFindRow = this.ds_Selected.findRow(sColId, code);

        	if (nFindRow >= 0)	bRtnVal = false;
        	else				bRtnVal = true;
        	return bRtnVal;
        }


        this.div_Search_edt_Name_onkeydown = function(obj,e)
        {
        	if(e.keycode == 13) {

        		//this.fnSearchEmp(this.div_Search.form.cmb_Condition.value, this.div_Search.form.edt_Search.value);
        		var objDs;
        		var sColId;
        		var sWord = obj.text;
        		if (this.div_Search.form.rd_Kind.value == "DEPT") {
        			objDs = this.ds_department;
        			sColId = "DEPT_NM";
        			var nFindRow = objDs.findRow(sColId, sWord);
        			objDs.set_rowposition(nFindRow);
        		} else {
        			objDs = this.ds_employee;
        			sColId = "EMP_NM";
        			objDs.filter(sColId + ".toString().toUpperCase().indexOf('" + (sWord).toUpperCase() + "') >=0");
        			objDs.set_rowposition(0);
        			this.fnTreeOpen(objDs.getColumn(0, "DEPT_CD"));
        		}
        	}
        };





        //사원정보를 받아와서 해당 Tree nod를 open해준다.
        this.fnTreeOpen = function(deptCD)
        {
        	var objGrid = this.grd_list;
        	var objDs 	= this.ds_department;
        	var nRow 	= this.ds_department.findRow("DEPT_CD", deptCD);
        	var nPos 	= 3; //DEPT_CD Index를 의미

        	objGrid.set_treeinitstatus("collapse,null");

        	for(var i = 1 ; i <= objDs.getColumn(nRow, "LEV"); i++)
        	{
        		objGrid.setTreeStatus(objGrid.getTreeRow(objDs.findRow("DEPT_CD", deptCD.substr(0, nPos))), true);
        		nPos += 2;
        		//처음에 0인덱스부터 3글자까지 자르고 계속해서 2인덱스씩 증가하면서 setTreeStatus를 탄다.
        		//ex) H02 -> (주)투비소프트 / H0202 -> 경영관리본부 /  H020206 -> 경영관리그룹
        	}

         	objDs.set_rowposition(nRow);
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.AC_EmpDeptSearchPopup_onload,this);
            this.btn_close.addEventHandler("onclick",this.common_onclick,this);
            this.div_Search.form.edt_Name.addEventHandler("onkeydown",this.div_Search_edt_Name_onkeydown,this);
            this.div_Search.form.btn_Search.addEventHandler("onclick",this.common_onclick,this);
            this.div_Search.form.rd_Kind.addEventHandler("onitemchanged",this.div_Search_rd_Kind_onitemchanged,this);
            this.grd_list.addEventHandler("oncelldblclick",this.grd_list_oncelldblclick,this);
            this.grd_Emp.addEventHandler("oncelldblclick",this.grd_Emp_oncelldblclick,this);
            this.grd_Selected.addEventHandler("oncelldblclick",this.grd_Selected_oncelldblclick,this);
            this.btn_Save.addEventHandler("onclick",this.common_onclick,this);
            this.btn_Cancel.addEventHandler("onclick",this.common_onclick,this);
            this.ds_department.addEventHandler("onrowposchanged",this.ds_department_onrowposchanged,this);
        };
        this.loadIncludeScript("AC_EmpDeptSearchPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
