(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AA_FileUploadPopup");
            this.set_titletext("파일업로드");
            this.set_cssclass("frm_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(667,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_FileList", this);
            obj._setContents("<ColumnInfo><Column id=\"FM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SOURCE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SOURCE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"LIFECYCLE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_TestStep", this);
            obj._setContents("<ColumnInfo><Column id=\"SM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"AUDIT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TS_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"TEST_STEP_DESC\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_AttachMaster", this);
            obj._setContents("<ColumnInfo><Column id=\"AAM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"AUDIT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RT_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"RTS_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_NUMBER\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"SOURCE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SOURCE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"FM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_ID\" type=\"STRING\" size=\"256\"/><Column id=\"DOC_CD\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_AttachKind", this);
            obj._setContents("<ColumnInfo><Column id=\"CM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"ORD\" type=\"STRING\" size=\"256\"/><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/><Column id=\"VAL4\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_AttachMasterSeq", this);
            obj._setContents("<ColumnInfo><Column id=\"AAM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"ATTACH_NUMBER\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_FileDelete", this);
            obj._setContents("<ColumnInfo><Column id=\"FM_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SOURCE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"SOURCE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"USE_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"LIFECYCLE_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_EMPNO\" type=\"STRING\" size=\"256\"/><Column id=\"INSERT_DEPT\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"AUTH_GROUP\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_SIZE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("fd_FileDialog", this);
            obj.set_filter("All(*.*)|*.*|");
            obj.set_defaultextension("false");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Button("btn_Close",null,"8","15","15","8",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_POP_Cls");
            obj.set_text("");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Div("div_File","4","274",null,"182","4",null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_enable("true");
            obj.set_cssclass("div_WF_detailBg");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","0","0",null,"31","0",null,null,null,null,null,this.div_File.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_GroupBg");
            this.div_File.addChild(obj.name, obj);

            obj = new Static("stc_title04","13","8","122","15",null,null,null,null,null,null,this.div_File.form);
            obj.set_taborder("1");
            obj.set_text("첨부파일");
            obj.set_cssclass("sta_POP_GroupTit");
            this.div_File.addChild(obj.name, obj);

            obj = new Grid("grd_AttachList","0","29",null,null,"0","0",null,null,null,null,this.div_File.form);
            obj.set_taborder("2");
            obj.set_binddataset("ds_AttachMaster");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"108\"/><Column size=\"412\"/><Column size=\"48\"/><Column size=\"48\"/><Column size=\"120\"/><Column size=\"108\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"첨부구분\"/><Cell col=\"1\" colspan=\"3\" text=\"파일명\"/><Cell col=\"4\" text=\"등록일\"/><Cell col=\"5\" text=\"등록자\"/></Band><Band id=\"body\"><Cell text=\"bind:ATTACH_KIND\" displaytype=\"combotext\" combodataset=\"ds_AttachKind\" combodatacol=\"CAPTION\" combocodecol=\"CODE\" edittype=\"normal\"/><Cell col=\"1\" text=\"bind:FILE_NAME\" displaytype=\"text\" edittype=\"expr:dataset.getColumn(currow, &quot;ATTACH_KIND&quot;)==&apos;1&apos;?&apos;none&apos;:&apos;text&apos;\" textAlign=\"left\"/><Cell col=\"2\" displaytype=\"expr:dataset.getColumn(currow, &quot;ATTACH_KIND&quot;) == 1 ? &apos;buttoncontrol&apos; : &apos;none&apos;\" edittype=\"button\" text=\"수정\"/><Cell col=\"3\" displaytype=\"buttoncontrol\" background=\"#ffffff\" edittype=\"button\" text=\"다운\"/><Cell col=\"4\" text=\"bind:INSERT_DATE\"/><Cell col=\"5\" text=\"bind:INSERT_EMPNO\"/></Band></Format></Formats>");
            this.div_File.addChild(obj.name, obj);

            obj = new Static("stc_BottomFrame","2","div_File:8",null,"35","1",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_BtnBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","8","5","182","22",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_color("white");
            obj.set_cssclass("sta_POP_Title ");
            obj.set_text("내부회계관리제도 결과등록");
            this.addChild(obj.name, obj);

            obj = new Div("div_TestStep","4","38",null,"182","4",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_enable("true");
            obj.set_cssclass("div_WF_detailBg");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_List","0","30",null,null,"0","0",null,null,null,null,this.div_TestStep.form);
            obj.set_taborder("0");
            obj.set_treeinitstatus("expand,all");
            obj.set_treeusecheckbox("false");
            obj.set_cellsizingtype("col");
            obj.set_binddataset("ds_TestStep");
            obj.set_autofittype("col");
            obj.set_extendsizetype("row");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"571\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"57\"/></Rows><Band id=\"head\"><Cell text=\"일련번호\"/><Cell col=\"1\" text=\"테스트 절차\"/></Band><Band id=\"body\"><Cell text=\"expr:currow + 1\"/><Cell col=\"1\" text=\"bind:TEST_STEP_DESC\" textAlign=\"left\" wordWrap=\"char\"/></Band></Format></Formats>");
            this.div_TestStep.addChild(obj.name, obj);

            obj = new Static("Static01","0","0",null,"31","0",null,null,null,null,null,this.div_TestStep.form);
            obj.set_taborder("1");
            obj.set_cssclass("sta_POP_GroupBg");
            this.div_TestStep.addChild(obj.name, obj);

            obj = new Static("stc_title01","13","7","122","15",null,null,null,null,null,null,this.div_TestStep.form);
            obj.set_taborder("2");
            obj.set_text("테스트 절차");
            obj.set_cssclass("sta_POP_GroupTit");
            this.div_TestStep.addChild(obj.name, obj);

            obj = new Div("div_KindFile","4","228",null,"42","4",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_enable("true");
            obj.set_cssclass("div_WF_detailBg");
            obj.set_formscrollbartype("none");
            this.addChild(obj.name, obj);

            obj = new Static("stc_title03","290","8","84","22",null,null,null,null,null,null,this.div_KindFile.form);
            obj.set_taborder("0");
            obj.set_text("첨부구분");
            obj.set_textAlign("right");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_KindFile.addChild(obj.name, obj);

            obj = new Combo("cmb_AttachKind","stc_title03:8","8","185","22",null,null,null,null,null,null,this.div_KindFile.form);
            obj.set_taborder("1");
            obj.set_innerdataset("ds_AttachKind");
            obj.set_datacolumn("CAPTION");
            obj.set_codecolumn("CODE");
            this.div_KindFile.addChild(obj.name, obj);

            obj = new Static("stc_title02","8","8","84","22",null,null,null,null,null,null,this.div_KindFile.form);
            obj.set_taborder("2");
            obj.set_text("증빙고유번호");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_KindFile.addChild(obj.name, obj);

            obj = new Edit("edt_ProofSerialNum","stc_title02:8","8","185","22",null,null,null,null,null,null,this.div_KindFile.form);
            obj.set_taborder("3");
            obj.set_readonly("true");
            this.div_KindFile.addChild(obj.name, obj);

            obj = new Button("btn_FileDel","613","11","30","16",null,null,null,null,null,null,this.div_KindFile.form);
            obj.set_taborder("5");
            obj.set_cssclass("btn_POP_Del");
            obj.set_text("");
            this.div_KindFile.addChild(obj.name, obj);

            obj = new Button("btn_FileAdd","575","11",null,"16","btn_FileDel:8",null,null,null,null,null,this.div_KindFile.form);
            obj.set_taborder("4");
            obj.set_cssclass("btn_POP_Add");
            this.div_KindFile.addChild(obj.name, obj);

            obj = new Button("btn_Save","505","470","65","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("저장");
            obj.set_cssclass("btn_WF_tran");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Cancel","589","470","65","22",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_cancel");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_File.form
            obj = new Layout("default","",0,0,this.div_File.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static02.set_taborder("0");
                p.Static02.set_cssclass("sta_POP_GroupBg");
                p.Static02.move("0","0",null,"31","0",null);

                p.stc_title04.set_taborder("1");
                p.stc_title04.set_text("첨부파일");
                p.stc_title04.set_cssclass("sta_POP_GroupTit");
                p.stc_title04.move("13","8","122","15",null,null);

                p.grd_AttachList.set_taborder("2");
                p.grd_AttachList.set_binddataset("ds_AttachMaster");
                p.grd_AttachList.set_autofittype("col");
                p.grd_AttachList.move("0","29",null,null,"0","0");
            	}
            );
            this.div_File.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div_File.form
            obj = new Layout("portrait","",0,0,this.div_File.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.stc_Project_Name02.set_text("담당자");
                p.stc_Project_Name02.move("8","141","64","30",null,null);

                p.stc_Contract_Date00.set_text("요청일");
                p.stc_Contract_Date00.move(null,"39","60","30","100",null);

                p.msk_DtRequest.move(null,"39","92","30","4",null);

                p.stc_Project_Name03.move(null,"73","60","30","100",null);

                p.edt_EmpReg.move(null,"73","92","30","4",null);

                p.ta_ReqContents.move("81","175",null,null,"4","4");

                p.stc_Contract_Date04.move("8","244","64","22",null,null);

                p.cmb_EmpList.move("81","141",null,"30","30",null);

                p.stc_VoucherNo.set_text("바우처");
                p.stc_VoucherNo.move(null,"107","60","30","100",null);

                p.edt_VoucherNo.move(null,"107","66","30","30",null);

                p.div_EmpRequest.move("81","141",null,"30","4",null);

                p.btn_PopupVoucherNo.move(null,"107","26","30","4",null);

                p.Static05.set_textAlign("right");
                p.Static05.move("8","107","64","30",null,null);

                p.cmb_MinTo.move("253","107","42","30",null,null);

                p.cmb_HourTo.move("211","107","42","30",null,null);

                p.cal_DtTo.move("81","107","130","30",null,null);

                p.edt_ProductName.move("81","39","214","30",null,null);

                p.cal_DtFrom.move("81","73","130","30",null,null);

                p.cmb_MinFrom.move("253","73","42","30",null,null);

                p.cmb_HourFrom.move("211","73","42","30",null,null);

                p.stc_Contract_Date.move("8","73","64","30",null,null);

                p.stc_Contract_Date01.move("8","39","64","30",null,null);
            	}
            );
            this.div_File.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div_TestStep.form
            obj = new Layout("default","",0,0,this.div_TestStep.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grd_List.set_taborder("0");
                p.grd_List.set_treeinitstatus("expand,all");
                p.grd_List.set_treeusecheckbox("false");
                p.grd_List.set_cellsizingtype("col");
                p.grd_List.set_binddataset("ds_TestStep");
                p.grd_List.set_autofittype("col");
                p.grd_List.set_extendsizetype("row");
                p.grd_List.move("0","30",null,null,"0","0");

                p.Static01.set_taborder("1");
                p.Static01.set_cssclass("sta_POP_GroupBg");
                p.Static01.move("0","0",null,"31","0",null);

                p.stc_title01.set_taborder("2");
                p.stc_title01.set_text("테스트 절차");
                p.stc_title01.set_cssclass("sta_POP_GroupTit");
                p.stc_title01.move("13","7","122","15",null,null);
            	}
            );
            this.div_TestStep.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div_TestStep.form
            obj = new Layout("portrait","",0,0,this.div_TestStep.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.stc_Project_Name02.set_text("담당자");
                p.stc_Project_Name02.move("8","141","64","30",null,null);

                p.stc_Contract_Date00.set_text("요청일");
                p.stc_Contract_Date00.move(null,"39","60","30","100",null);

                p.msk_DtRequest.move(null,"39","92","30","4",null);

                p.stc_Project_Name03.move(null,"73","60","30","100",null);

                p.edt_EmpReg.move(null,"73","92","30","4",null);

                p.ta_ReqContents.move("81","175",null,null,"4","4");

                p.stc_Contract_Date04.move("8","244","64","22",null,null);

                p.cmb_EmpList.move("81","141",null,"30","30",null);

                p.stc_VoucherNo.set_text("바우처");
                p.stc_VoucherNo.move(null,"107","60","30","100",null);

                p.edt_VoucherNo.move(null,"107","66","30","30",null);

                p.div_EmpRequest.move("81","141",null,"30","4",null);

                p.btn_PopupVoucherNo.move(null,"107","26","30","4",null);

                p.Static05.set_textAlign("right");
                p.Static05.move("8","107","64","30",null,null);

                p.cmb_MinTo.move("253","107","42","30",null,null);

                p.cmb_HourTo.move("211","107","42","30",null,null);

                p.cal_DtTo.move("81","107","130","30",null,null);

                p.edt_ProductName.move("81","39","214","30",null,null);

                p.cal_DtFrom.move("81","73","130","30",null,null);

                p.cmb_MinFrom.move("253","73","42","30",null,null);

                p.cmb_HourFrom.move("211","73","42","30",null,null);

                p.stc_Contract_Date.move("8","73","64","30",null,null);

                p.stc_Contract_Date01.move("8","39","64","30",null,null);
            	}
            );
            this.div_TestStep.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div_KindFile.form
            obj = new Layout("default","",0,0,this.div_KindFile.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.stc_title03.set_taborder("0");
                p.stc_title03.set_text("첨부구분");
                p.stc_title03.set_textAlign("right");
                p.stc_title03.set_cssclass("sta_WF_DetailTit");
                p.stc_title03.move("290","8","84","22",null,null);

                p.cmb_AttachKind.set_taborder("1");
                p.cmb_AttachKind.set_innerdataset("ds_AttachKind");
                p.cmb_AttachKind.set_datacolumn("CAPTION");
                p.cmb_AttachKind.set_codecolumn("CODE");
                p.cmb_AttachKind.move("stc_title03:8","8","185","22",null,null);

                p.stc_title02.set_taborder("2");
                p.stc_title02.set_text("증빙고유번호");
                p.stc_title02.set_cssclass("sta_WF_DetailTit");
                p.stc_title02.move("8","8","84","22",null,null);

                p.edt_ProofSerialNum.set_taborder("3");
                p.edt_ProofSerialNum.set_readonly("true");
                p.edt_ProofSerialNum.move("stc_title02:8","8","185","22",null,null);

                p.btn_FileDel.set_taborder("5");
                p.btn_FileDel.set_cssclass("btn_POP_Del");
                p.btn_FileDel.set_text("");
                p.btn_FileDel.move("613","11","30","16",null,null);

                p.btn_FileAdd.set_taborder("4");
                p.btn_FileAdd.set_cssclass("btn_POP_Add");
                p.btn_FileAdd.move("575","11",null,"16","btn_FileDel:8",null);
            	}
            );
            this.div_KindFile.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div_KindFile.form
            obj = new Layout("portrait","",0,0,this.div_KindFile.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.stc_Project_Name02.set_text("담당자");
                p.stc_Project_Name02.move("8","141","64","30",null,null);

                p.stc_Contract_Date00.set_text("요청일");
                p.stc_Contract_Date00.move(null,"39","60","30","100",null);

                p.msk_DtRequest.move(null,"39","92","30","4",null);

                p.stc_Project_Name03.move(null,"73","60","30","100",null);

                p.edt_EmpReg.move(null,"73","92","30","4",null);

                p.ta_ReqContents.move("81","175",null,null,"4","4");

                p.stc_Contract_Date04.move("8","244","64","22",null,null);

                p.cmb_EmpList.move("81","141",null,"30","30",null);

                p.stc_VoucherNo.set_text("바우처");
                p.stc_VoucherNo.move(null,"107","60","30","100",null);

                p.edt_VoucherNo.move(null,"107","66","30","30",null);

                p.div_EmpRequest.move("81","141",null,"30","4",null);

                p.btn_PopupVoucherNo.move(null,"107","26","30","4",null);

                p.Static05.set_textAlign("right");
                p.Static05.move("8","107","64","30",null,null);

                p.cmb_MinTo.move("253","107","42","30",null,null);

                p.cmb_HourTo.move("211","107","42","30",null,null);

                p.cal_DtTo.move("81","107","130","30",null,null);

                p.edt_ProductName.move("81","39","214","30",null,null);

                p.cal_DtFrom.move("81","73","130","30",null,null);

                p.cmb_MinFrom.move("253","73","42","30",null,null);

                p.cmb_HourFrom.move("211","73","42","30",null,null);

                p.stc_Contract_Date.move("8","73","64","30",null,null);

                p.stc_Contract_Date01.move("8","39","64","30",null,null);
            	}
            );
            this.div_KindFile.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","",667,500,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("AA_FileUploadPopup.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("AA_FileUploadPopup.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("AA_FileUploadPopup.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("AA_FileUploadPopup.xfdl","Script::CommGrid.xjs");
        this.registerScript("AA_FileUploadPopup.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 : 내부회계관리제도 - 파일업로드
        * 02. 화면명   : 파일업로드(AA_FileUploadPopup)
        * 03. 화면설명 : 파일업로드
        * 04. 작성일   : 2021.06.17
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
        this.executeIncludeScript("Script::CommSystem.xjs"); /*include "Script::CommSystem.xjs"*/;
        this.executeIncludeScript("Script::CommTrans.xjs"); /*include "Script::CommTrans.xjs"*/;
        this.executeIncludeScript("Script::CommUtil.xjs"); /*include "Script::CommUtil.xjs"*/;
        this.executeIncludeScript("Script::CommGrid.xjs"); /*include "Script::CommGrid.xjs"*/;

        /************************************************************************************************
        * 전역 변수 영역
        ************************************************************************************************/
        var strSMSeq;			// 회차
        var strAuditSeq;		// 문서번호
        var nRTSeq;				// ds_Result 일련번호 RT_SEQ
        var strProofSerialNum;	// ds_Result 샘플명
        var strRTSSeq;			// ds_Test_Step RTS_SEQ

        //첨부파일 사용 변수
        var strSourceType = "AAM";
        var strDefaultCode;
        var objVFList = new Array();
        var bSaveFlag = false;
        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/
        this.AA_FileUploadPopup_onload = function(obj,e)
        {
        	strSMSeq = this.parent.strSMSeq;
        	strAuditSeq = this.parent.strAuditSeq;
        	nRTSeq = this.parent.nRTSeq
        	strProofSerialNum = this.parent.strProofSerialNum;

        	this.div_KindFile.form.edt_ProofSerialNum.set_value(strProofSerialNum);
        	this.fn_CodeData();
        };

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
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
        		if(strSvcID=="gfnGetCode") {
        			this.div_KindFile.form.cmb_AttachKind.set_index(0);
        			this.fn_QueryData();
        		}
        		else if(strSvcID=="Search") {
        			if (this.ds_TestStep.rowcount == 1)
        			{
        				this.fn_QueryDataDetail( this.ds_TestStep.getColumn(0, "TS_SEQ") );
        			}
        		}
        		else if(strSvcID=="Detail_Search") {
        			for ( var i = 0; i<this.ds_AttachMaster.rowcount; i++)
        			{
        				var strAttchKind = this.ds_AttachMaster.getColumn(i, "ATTACH_KIND");
        				if(strAttchKind == "2")
        				{
        					this.div_File.form.grd_AttachList.mergeCell(1, 2, i, i);

        				}
        			}
        		}
        		else if(strSvcID=="AM_ATTACH_MASTER_Save")
        		{
        			this.fn_QueryDataDetail( this.ds_TestStep.getColumn(this.ds_TestStep.rowposition, "TS_SEQ") );
        		}
        		else if(strSvcID == "AttachMasterSeq_Search")
        		{
        			var strAAMSseq = this.ds_AttachMasterSeq.getColumn(0, "AAM_SEQ");
        			this.fn_uploadEvt(strAAMSseq);
        		}
        	}
        };
        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        // 01 공통코드 조회
        this.fn_CodeData = function()
        {
        	// 조회용 Output Dataset 셋팅
        	this.gfnAddCodeDataset("ds_AttachKind", "ATTACH_KIND");   			// 첨부구분

        	// 공통 Transaction
        	this.gfnCodeTransaction(); // 공통 코드 조회
        };

        // 02 ds_TestStep 조회
        this.fn_QueryData = function()
        {
        	// Parameter 셋팅
         	this.gfnAddSendParameter("SM_SEQ",		strSMSeq);
         	this.gfnAddSendParameter("AUDIT_SEQ",	strAuditSeq);

        	/* 조회용 Output Dataset 셋팅
        		AM_TEST_STEP_SEL
        	*/
        	this.gfnAddOutputDataset("ds_TestStep"	, "dsTsOutput");

        	// 공통 Transaction
        	this.gfnCommonTransaction("Search", "AA_FileUpload_S01");
        };

        //03. Detail 조회
        this.fn_QueryDataDetail = function( strRTS_SEQ )
        {
        	//RTS_SEQ 저장
        	strRTSSeq = strRTS_SEQ;

        	// Parameter 셋팅
         	this.gfnAddSendParameter("SM_SEQ",		strSMSeq);
        	this.gfnAddSendParameter("AUDIT_SEQ",	strAuditSeq);
        	this.gfnAddSendParameter("RT_SEQ",		nRTSeq);
        	this.gfnAddSendParameter("RTS_SEQ",		strRTS_SEQ);

        	/*
        		조회용 Output Dataset 셋팅
        		1. AM_ATTACH_MASTER_SEL
        		2. AM_FILE_MASTER_SEL
        	*/
        	this.gfnAddOutputDataset("ds_AttachMaster", "dsAttachMasterOutput");
        	this.gfnAddOutputDataset("ds_FileList", 	"dsFileListOutput");

        	// 공통 Transaction
        	this.gfnCommonTransaction("Detail_Search", "AA_FileUpload_S02");
        };

        // 첨부파일인 겨우 SOURCE_CODE에 넣을 AAM_SEQ 값 가져오기
        this.fn_getAAMSseq = function()
        {
        	// 조회용 Output Dataset 셋팅 AM_ATTACH_MASTER_SEQ_SEL
        	this.gfnAddOutputDataset("ds_AttachMasterSeq", "dsAttachMasterOutput");

        	// 공통 Transaction
        	this.gfnCommonTransaction("AttachMasterSeq_Search", "AA_FileUpload_S05");
        };

        // 멀티 업로드 팝업 실행
        this.fn_uploadEvtMulti = function()
        {
        	var args = {
        					SOURCE_TYPE:"AAM"
        					,SOURCE_CODE:null		// SOURCE_CODE는 등록하는데 필수 값이지만 멀티 업로드이므로 추후 넣어 주기로 함
        					,USE_MULTI_FILE:true
        					,SM_SEQ:strSMSeq		// 회차
        					,AUDIT_SEQ:strAuditSeq	// 문서번호
        					,RT_SEQ:nRTSeq			// ds_Result 일련번호 RT_SEQ
        					,RTS_SEQ:this.ds_TestStep.getColumn(this.ds_TestStep.rowposition, "TS_SEQ") // ds_Test_Step 번호
        					,AAM_MULTI:true
        				}
        	this.commUtil.popupAceFileMaster(this, args, "fnPopupCallBack");
        };

        // 업로드 팝업 실행
        this.fn_uploadEvt = function(strAAMSseq)
        {
        	var args = {
        					SOURCE_TYPE:"AAM"
        					,SOURCE_CODE:strAAMSseq
        					,USE_MULTI_FILE:false
        					,AAM_MULTI:false
        				}
        	this.commUtil.popupAceFileMaster(this, args, "fnPopupCallBack");
        };

        // 전자결재 filter 해서 가져가는 거 해야 함
        this.fn_AttachMasterSave = function( strAttachKind )
        {
        	// 저장용 Input Dataset 셋팅 AM_ATTACH_MASTER
        	if( strAttachKind == "2" )
        	{
        		this.ds_AttachMaster.filter("ATTACH_KIND='2'");
        	}
        	this.gfnAddInputDataset("ds_AttachMaster", "dsAttachMasterInput");
        	this.ds_AttachMaster.filter("");

        	// 공통 Transaction
        	this.gfnCommonTransaction("AM_ATTACH_MASTER_Save", "AA_FileUpload_R03");
        };

        // CF_AceFileMM 저장 클릭 시 AM_Attach_Master 자동 저장
        this.fn_AttachMasterInsert = function( strAAMSeq, strFileName )
        {
        	var nRow2 = this.ds_AttachMaster.addRow();
        	this.ds_AttachMaster.setColumn(nRow2, "AAM_SEQ", 		strAAMSeq);
        	this.ds_AttachMaster.setColumn(nRow2, "SM_SEQ", 		strSMSeq);
        	this.ds_AttachMaster.setColumn(nRow2, "AUDIT_SEQ",	strAuditSeq);
        	this.ds_AttachMaster.setColumn(nRow2, "RT_SEQ",		nRTSeq);
        	this.ds_AttachMaster.setColumn(nRow2, "RTS_SEQ",		this.ds_TestStep.getColumn(this.ds_TestStep.rowposition, "TS_SEQ"));
        	this.ds_AttachMaster.setColumn(nRow2, "ATTACH_KIND",	"1");
        	this.ds_AttachMaster.setColumn(nRow2, "FILE_NAME",	strFileName);

        	//trace("ds_AttachMaster==>"+this.ds_AttachMaster.saveXML());
        	// AM_Attach_Master 저장
        	this.fn_AttachMasterSave( this.ds_AttachMaster.getColumn(nRow2, "ATTACH_KIND") );
        };
        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.comm_Click = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_Close" :
        			this.opener.fn_QueryData(); // 메인 화면 조회
        			this.commUtil.popupClose("");
        			break;
        		case "btn_Cancel" :
        			this.opener.fn_QueryData(); // 메인 화면 조회
        			this.commUtil.popupClose("");
        			break;
        	}
        };

        //ds_TestStep ROW 변경 시
        this.ds_TestStep_onrowposchanged = function(obj,e)
        {
        	this.fn_QueryDataDetail( this.ds_TestStep.getColumn( e.newrow, "TS_SEQ") );
        };

        //파일 추가
        this.div_KindFile_btn_FileAdd_onclick = function(obj,e)
        {
        	// ATTACH_KIND 1 : 첨부파일 , 2 : 전자결재
        	if (this.div_KindFile.form.cmb_AttachKind.value == "1")
            {
        		this.fn_uploadEvtMulti();
        	}
        	else
        	{
        		var nRow = this.ds_AttachMaster.addRow();
        		this.div_File.form.grd_AttachList.mergeCell(1, 2, nRow, nRow);
        		this.ds_AttachMaster.setColumn(nRow, "SM_SEQ", 		strSMSeq);
        		this.ds_AttachMaster.setColumn(nRow, "AUDIT_SEQ",	strAuditSeq);
        		this.ds_AttachMaster.setColumn(nRow, "RT_SEQ",		nRTSeq);
        		this.ds_AttachMaster.setColumn(nRow, "RTS_SEQ",		this.ds_TestStep.getColumn(this.ds_TestStep.rowposition, "TS_SEQ"));
        		this.ds_AttachMaster.setColumn(nRow, "ATTACH_KIND",	"2");
        	}
        };

        // 파일 삭제
        this.div_KindFile_btn_FileDel_onclick = function(obj,e)
        {
        	if(confirm("["+this.ds_AttachMaster.getColumn(this.ds_AttachMaster.rowposition, "FILE_NAME")+"] 파일을 삭제하시겠습니까?"))
        	{
        		var nRow = this.ds_AttachMaster.rowposition;
        		var strFileNm = this.ds_AttachMaster.getColumn(nRow, "FILE_NAME");
        		var nFindRow = this.ds_AttachMaster.findRow("FILE_NAME",  strFileNm);

        		//trace( "nRow:["+nRow+"] "+ ds_AttachMaster.getColumn(nRow, "FILE_NAME") +"///" +objVFList.length);


        		if (nFindRow>=0)
        		{
        			// 첨부파일
        			if(this.ds_AttachMaster.getColumn(nFindRow, "ATTACH_KIND") == 1)
        			{
        				this.ds_AttachMaster.deleteRow(this.ds_AttachMaster.rowposition);

        				var nAddRow = this.ds_FileDelete.addRow();
        				this.ds_FileDelete.copyRow(nAddRow, this.ds_FileList, nFindRow);
        				this.ds_FileList.deleteRow(nFindRow);

        				this.gfnAddInputDataset("ds_FileDelete", "ds_FileDelete", "A");
        				var strSvcID = "AM_ATTACH_MASTER_Save";
        				var strModelNm = "AA_FileUpload_R02";
        				this.gfnCommonTransaction(strSvcID, strModelNm, "");
        			}
        			else // 전자결재 문서
        			{
        				this.ds_AttachMaster.deleteRow(this.ds_AttachMaster.rowposition);
        				this.ds_FileList.deleteRow(nFindRow);
        			}
        		}
        	}
        };

        // 전자결재 시 ATTACH_NUMBER(전자결재 파일명)
        this.ds_AttachMaster_oncolumnchanged = function(obj,e)
        {
        	if (e.columnid == "FILE_NAME")
        	{
        		if (this.ds_AttachMaster.getColumn(e.row, "ATTACH_KIND") == "2")
        		{
        			this.ds_AttachMaster.setColumn(e.row, "ATTACH_NUMBER", e.newvalue);
        		}
        	}
        };

        // 저장
        this.btn_Save_onclick = function(obj,e)
        {
        	bSaveFlag = true;
        	this.fn_AttachMasterSave( "2" );
        };


        // 셀 버튼 등록, 다운 버튼 클릭 이벤트
        this.div_File_grd_AttachList_oncellclick = function(obj,e)
        {
        	var ds 	= obj.getBindDataset();
        	if(e.cell == 2)
        	{
        		var strCode	= ds.getColumn( obj.getDatasetRow(e.row), "SOURCE_CODE");
        		this.fn_uploadEvt(strCode);
        	}
        	else if(e.cell == 3)
        	{
        		// 첨부파일 다운 버튼 클릭
        		if(ds.getColumn(e.row, "ATTACH_KIND") == "1")
        		{
        			var nSeq = ds.getColumn( obj.getDatasetRow(e.row), "FM_SEQ");
        			this.gfnAceFileDownload(nSeq);
        		}
        		// 전자결재문서 다운 버튼 클릭
        		else
        		{
        			var strDocCd = this.ds_AttachMaster.getColumn(e.row, "DOC_CD");
        			var strDocId = this.ds_AttachMaster.getColumn(e.row, "DOC_ID");
        			var strFormId = this.ds_AttachMaster.getColumn(e.row, "FORM_ID");

        			if (this.gfnIsEmpty(strFormId))
        			{
        				// 구문서
        				system.execBrowser("http://gw.tobesoft.com/Ea/EADocPop/EAAppDocMigPop/?ace_auth=1&doc_id="+strDocId);
        			}
        			else
        			{
        				// 신문서
        				system.execBrowser("http://gw.tobesoft.com/Ea/EADocPop/EAAppDocViewPop/?doc_auth=0&doc_id="+strDocId+"&form_id="+strFormId);
        			}
        		}
        	}
        };

        /*
        	주석 처리 되어 있는 로직
        */
        function ds_AttachMaster_onrowposchanged(obj, e)
        {
        	/*
        	// 작성자만 삭제권한을 가짐
        	if(gds_UserInfo.getColumn(0, "EMP_NO")==obj.getColumn(e.newrow, "INSERT_EMPNO") ||
        		obj.getColumn(e.newrow, "INSERT_EMPNO")==undefined)
        	{
        		btn_FileDel.enable = true;
        		//btn_Auth.enable = true;
        	}
        	else
        	{
        		btn_FileDel.enable = false;
        		//btn_Auth.enable = false;
        	}
        	*/
        }


        this.fnPopupCallBack = function(sPopupId, Variant)
        {
        	Variant = this.commUtil.popupReturn();
        	if(this.gfnIsEmpty(Variant))
        	{
        		return;
        	}
        	else
        	{
        		//this.recentVariant = Variant;
        		switch(Variant)
        		{
        			case "close":
        				this.fn_QueryDataDetail( this.ds_TestStep.getColumn(this.ds_TestStep.rowposition, "TS_SEQ") );
        			break;
        			case "deleteAll":
        				this.fn_QueryDataDetail( this.ds_TestStep.getColumn(this.ds_TestStep.rowposition, "TS_SEQ") );
        			break;
        		}
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.AA_FileUploadPopup_onload,this);
            this.btn_Close.addEventHandler("onclick",this.comm_Click,this);
            this.div_File.form.grd_AttachList.addEventHandler("oncellclick",this.div_File_grd_AttachList_oncellclick,this);
            this.stc_BottomFrame.addEventHandler("onclick",this.stc_BottomFrame_onclick,this);
            this.div_TestStep.form.grd_List.addEventHandler("oncelldblclick",this.div_TestStep_grd_TestStep_oncelldblclick,this);
            this.div_KindFile.form.btn_FileDel.addEventHandler("onclick",this.div_KindFile_btn_FileDel_onclick,this);
            this.div_KindFile.form.btn_FileAdd.addEventHandler("onclick",this.div_KindFile_btn_FileAdd_onclick,this);
            this.btn_Save.addEventHandler("onclick",this.btn_Save_onclick,this);
            this.btn_Cancel.addEventHandler("onclick",this.comm_Click,this);
            this.ds_TestStep.addEventHandler("onrowposchanged",this.ds_TestStep_onrowposchanged,this);
            this.ds_AttachMaster.addEventHandler("oncolumnchanged",this.ds_AttachMaster_oncolumnchanged,this);
            this.fd_FileDialog.addEventHandler("onclose",this.fd_FileDialog_onclose,this);
        };
        this.loadIncludeScript("AA_FileUploadPopup.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
