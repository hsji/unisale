(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CA_Approval");
            this.set_titletext("전자결재");
            this.set_cssclass("frm_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(1365,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsApprovalDoc", this);
            obj._setContents("<ColumnInfo><Column id=\"AD_SEQ\" type=\"bigdecimal\" size=\"20\"/><Column id=\"DOC_NO\" type=\"string\" size=\"200\"/><Column id=\"DOC_KIND\" type=\"string\" size=\"20\"/><Column id=\"DOC_KIND_NAME\" type=\"string\" size=\"100\"/><Column id=\"SUBJECT\" type=\"string\" size=\"500\"/><Column id=\"DOC_STATUS\" type=\"string\" size=\"20\"/><Column id=\"DOC_STATUS_NAME\" type=\"string\" size=\"100\"/><Column id=\"CONTENTS\" type=\"string\" size=\"1073741823\"/><Column id=\"SOURCE_CD\" type=\"string\" size=\"30\"/><Column id=\"SOURCE_DATA\" type=\"string\" size=\"30\"/><Column id=\"INSERT_DATE\" type=\"datetime\" size=\"23\"/><Column id=\"INSERT_EMP_NO\" type=\"string\" size=\"60\"/><Column id=\"INSERT_EMP_NAME\" type=\"string\" size=\"255\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsApprovalLine", this);
            obj._setContents("<ColumnInfo><Column id=\"AD_SEQ\" type=\"bigdecimal\" size=\"20\"/><Column id=\"ORD\" type=\"int\" size=\"11\"/><Column id=\"LINE_KIND\" type=\"string\" size=\"20\"/><Column id=\"LINE_KIND_NAME\" type=\"string\" size=\"100\"/><Column id=\"EMP_NO\" type=\"string\" size=\"20\"/><Column id=\"EMP_NM\" type=\"string\" size=\"255\"/><Column id=\"GRADE_NAME\" type=\"string\" size=\"100\"/><Column id=\"DUTY_NAME\" type=\"string\" size=\"100\"/><Column id=\"DEPT_NAME\" type=\"string\" size=\"100\"/><Column id=\"APPROVAL_STATUS\" type=\"string\" size=\"20\"/><Column id=\"APPROVAL_STATUS_NAME\" type=\"string\" size=\"100\"/><Column id=\"APPROVAL_FLAG\" type=\"string\" size=\"1\"/><Column id=\"APPROVAL_DATE\" type=\"datetime\" size=\"23\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsApprovalCommnet", this);
            obj._setContents("<ColumnInfo><Column id=\"AC_SEQ\" type=\"bigdecimal\" size=\"20\"/><Column id=\"AD_SEQ\" type=\"bigdecimal\" size=\"20\"/><Column id=\"CONTENTS\" type=\"string\" size=\"1073741823\"/><Column id=\"APPLY_FLAG\" type=\"string\" size=\"1\"/><Column id=\"INSERT_DATE\" type=\"datetime\" size=\"23\"/><Column id=\"INSERT_EMP_NO\" type=\"string\" size=\"60\"/><Column id=\"INSERT_EMP_NM\" type=\"string\" size=\"255\"/><Column id=\"INSERT_DEPT_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsApprovalSeq", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsInsertApproval", this);
            obj._setContents("<ColumnInfo><Column id=\"DOC_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"SOURCE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SOURCE_DATA\" type=\"STRING\" size=\"256\"/><Column id=\"ARBITRARILY_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ARBITRARILY_DATA\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENTS\" type=\"STRING\" size=\"256\"/><Column id=\"SUBJECT\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPrtApprovalDoc", this);
            obj._setContents("<ColumnInfo><Column id=\"AD_SEQ\" type=\"bigdecimal\" size=\"20\"/><Column id=\"DOC_NO\" type=\"string\" size=\"200\"/><Column id=\"DOC_KIND\" type=\"string\" size=\"20\"/><Column id=\"DOC_KIND_NAME\" type=\"string\" size=\"100\"/><Column id=\"SUBJECT\" type=\"string\" size=\"500\"/><Column id=\"DOC_STATUS\" type=\"string\" size=\"20\"/><Column id=\"DOC_STATUS_NAME\" type=\"string\" size=\"100\"/><Column id=\"CONTENTS\" type=\"string\" size=\"1073741823\"/><Column id=\"SOURCE_CD\" type=\"string\" size=\"30\"/><Column id=\"SOURCE_DATA\" type=\"string\" size=\"30\"/><Column id=\"INSERT_DATE\" type=\"datetime\" size=\"23\"/><Column id=\"INSERT_EMP_NO\" type=\"string\" size=\"60\"/><Column id=\"INSERT_EMP_NAME\" type=\"string\" size=\"255\"/><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPrtApprovalLine", this);
            obj._setContents("<ColumnInfo><Column id=\"LINE_CNT\" type=\"STRING\" size=\"256\"/><Column id=\"DUTY_1\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO_1\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NM_1\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS_1\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_DT_1\" type=\"STRING\" size=\"256\"/><Column id=\"DUTY_2\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO_2\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NM_2\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS_2\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_DT_2\" type=\"STRING\" size=\"256\"/><Column id=\"DUTY_3\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO_3\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NM_3\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS_3\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_DT_3\" type=\"STRING\" size=\"256\"/><Column id=\"DUTY_4\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO_4\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NM_4\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS_4\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_DT_4\" type=\"STRING\" size=\"256\"/><Column id=\"DUTY_5\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO_5\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NM_5\" type=\"STRING\" size=\"256\"/><Column id=\"STATUS_5\" type=\"STRING\" size=\"256\"/><Column id=\"APPROVAL_DT_5\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPrtApprovalCommnet", this);
            obj._setContents("<ColumnInfo><Column id=\"INSERT_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENTS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ProjectPrt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ContractProdPrt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_PurchaseProdPrt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ContractSiPrt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_PurchaseSiPrt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsFileCnt", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCurOrd", this);
            obj._setContents("<ColumnInfo><Column id=\"CUR_ORD\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new UbiReport("UbiReport","518","39",null,null,"4","41",null,null,null,null,this);
            obj.getSetter("taborder").set("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close",null,"10","15","15","10",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_POP_Cls");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","0",null,null,"38","0","0",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("sta_POP_BtnBg");
            this.addChild(obj.name, obj);

            obj = new Div("div_Approval","4","73","510",null,null,"37",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("div_WF_detailBg");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","8","4","50","53",null,null,null,null,null,null,this.div_Approval.form);
            obj.set_taborder("5");
            obj.set_text("결재의견");
            obj.getSetter("TL_SEQ").set("378");
            this.div_Approval.addChild(obj.name, obj);

            obj = new TextArea("ta_Comment","65","4","321","53",null,null,null,null,null,null,this.div_Approval.form);
            obj.set_taborder("3");
            this.div_Approval.addChild(obj.name, obj);

            obj = new Static("Static01","65","ta_Comment:4",null,"28","4",null,null,null,null,null,this.div_Approval.form);
            obj.set_taborder("7");
            obj.set_text("※ 결재 진행전 의견입력 바랍니다.(선택사항) \r\n※ 상신자는 상신후에 결재의견이 등록가능합니다.");
            obj.getSetter("TL_SEQ").set("379");
            this.div_Approval.addChild(obj.name, obj);

            obj = new Grid("grdApprovalDoc","4","Static01:4",null,"123","4",null,null,null,null,null,this.div_Approval.form);
            obj.set_taborder("1");
            obj.set_binddataset("dsApprovalDoc");
            obj.set_autofittype("col");
            obj.set_selecttype("cell");
            obj.set_formatid("default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"140\"/></Columns><Rows><Row size=\"49\"/><Row size=\"24\"/><Row size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"body\"><Cell colspan=\"3\" text=\"bind:DOC_KIND_NAME\" font=\"bold 20px/normal &quot;Dotum&quot;\"/><Cell col=\"3\" text=\"bind:DOC_STATUS_NAME\"/><Cell row=\"1\" text=\"품의번호\" TL_SEQ=\"372\"/><Cell row=\"1\" col=\"1\" text=\"bind:DOC_NO\" textAlign=\"left\"/><Cell row=\"1\" col=\"2\" text=\"작성일자\" TL_SEQ=\"2185\"/><Cell row=\"1\" col=\"3\" text=\"bind:INSERT_DATE\" calendardateformat=\"yyyy-MM-dd hh:mm\" displaytype=\"normal\"/><Cell row=\"2\" text=\"기안부서\" TL_SEQ=\"373\"/><Cell row=\"2\" col=\"1\" textAlign=\"left\" text=\"bind:INSERT_DEPT_NM\"/><Cell row=\"2\" col=\"2\" text=\"기안자\" TL_SEQ=\"374\"/><Cell row=\"2\" col=\"3\" text=\"bind:INSERT_EMP_NAME\"/><Cell row=\"3\" text=\"제목\" TL_SEQ=\"370\"/><Cell row=\"3\" col=\"1\" colspan=\"3\" text=\"bind:SUBJECT\" textAlign=\"left\" font=\"bold 12px/normal &quot;Dotum&quot;\"/></Band></Format><Format id=\"mobile\"><Columns><Column size=\"80\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"140\"/></Columns><Rows><Row size=\"40\"/><Row size=\"30\"/><Row size=\"30\"/><Row size=\"30\"/></Rows><Band id=\"body\"><Cell colspan=\"3\" text=\"bind:DOC_KIND_NAME\" font=\"bold 20px/normal &quot;Dotum&quot;\"/><Cell col=\"3\" text=\"bind:DOC_STATUS_NAME\"/><Cell row=\"1\" text=\"품의번호\" TL_SEQ=\"372\"/><Cell row=\"1\" col=\"1\" text=\"bind:DOC_NO\" textAlign=\"left\"/><Cell row=\"1\" col=\"2\" text=\"작성일자\" TL_SEQ=\"2185\"/><Cell row=\"1\" col=\"3\" text=\"bind:INSERT_DATE\" calendardateformat=\"yyyy-MM-dd hh:mm\" displaytype=\"normal\"/><Cell row=\"2\" text=\"기안부서\" TL_SEQ=\"373\"/><Cell row=\"2\" col=\"1\" textAlign=\"left\" text=\"bind:INSERT_DEPT_NM\"/><Cell row=\"2\" col=\"2\" text=\"기안자\" TL_SEQ=\"374\"/><Cell row=\"2\" col=\"3\" text=\"bind:INSERT_EMP_NAME\"/><Cell row=\"3\" text=\"제목\" TL_SEQ=\"370\"/><Cell row=\"3\" col=\"1\" colspan=\"3\" text=\"bind:SUBJECT\" textAlign=\"left\" font=\"bold 12px/normal &quot;Dotum&quot;\"/></Band></Format></Formats>");
            this.div_Approval.addChild(obj.name, obj);

            obj = new Grid("grdApprovalLine","4","grdApprovalDoc:4","500","146",null,null,null,null,null,null,this.div_Approval.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsApprovalLine");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"순번\" TL_SEQ=\"333\"/><Cell col=\"1\" text=\"결재구분\" TL_SEQ=\"380\"/><Cell col=\"2\" text=\"사원\" TL_SEQ=\"381\"/><Cell col=\"3\" text=\"직책\" TL_SEQ=\"382\"/><Cell col=\"4\" text=\"결재상태\" TL_SEQ=\"375\"/><Cell col=\"5\" text=\"결재일시\" TL_SEQ=\"383\"/></Band><Band id=\"body\"><Cell text=\"bind:ORD\"/><Cell col=\"1\" text=\"bind:LINE_KIND_NAME\"/><Cell col=\"2\" text=\"bind:EMP_NM\"/><Cell col=\"3\" text=\"bind:DUTY_NAME\"/><Cell col=\"4\" text=\"bind:APPROVAL_STATUS_NAME\"/><Cell col=\"5\" text=\"bind:APPROVAL_DATE\" calendardateformat=\"yyyy-MM-dd HH:mm\" displaytype=\"expr:comp.parent.gfnIsEmpty(APPROVAL_DATE)?&apos;none&apos;:&apos;normal&apos;\"/></Band></Format><Format id=\"mobile\"><Columns><Column size=\"40\"/><Column size=\"60\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"60\"/><Column size=\"140\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"순번\" TL_SEQ=\"333\"/><Cell col=\"1\" text=\"결재\" TL_SEQ=\"389\"/><Cell col=\"2\" text=\"사원\" TL_SEQ=\"381\"/><Cell col=\"3\" text=\"직책\" TL_SEQ=\"382\"/><Cell col=\"4\" text=\"상태\" TL_SEQ=\"209\"/><Cell col=\"5\" text=\"결재일시\" TL_SEQ=\"383\"/></Band><Band id=\"body\"><Cell text=\"bind:ORD\"/><Cell col=\"1\" text=\"bind:LINE_KIND_NAME\"/><Cell col=\"2\" text=\"bind:EMP_NM\"/><Cell col=\"3\" text=\"bind:DUTY_NAME\"/><Cell col=\"4\" text=\"bind:APPROVAL_STATUS_NAME\"/><Cell col=\"5\" text=\"bind:APPROVAL_DATE\" calendardateformat=\"yyyy-MM-dd HH:mm\" displaytype=\"expr:comp.parent.gfnIsEmpty(APPROVAL_DATE)?&apos;none&apos;:&apos;normal&apos;\"/></Band></Format></Formats>");
            this.div_Approval.addChild(obj.name, obj);

            obj = new Grid("grdApprovalCommnet","4","grdApprovalLine:4",null,null,"4","4",null,null,null,null,this.div_Approval.form);
            obj.set_taborder("2");
            obj.set_binddataset("dsApprovalCommnet");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"40\"/></Rows><Band id=\"head\"><Cell text=\"등록자\" TL_SEQ=\"81\"/><Cell col=\"1\" text=\"부서\" TL_SEQ=\"74\"/><Cell col=\"2\" text=\"등록일시\" TL_SEQ=\"384\"/><Cell col=\"3\" text=\"반영여부\" TL_SEQ=\"385\"/><Cell row=\"1\" colspan=\"4\" text=\"결재의견\" TL_SEQ=\"378\"/></Band><Band id=\"body\"><Cell text=\"bind:INSERT_EMP_NM\"/><Cell col=\"1\" text=\"bind:INSERT_DEPT_NM\"/><Cell col=\"2\" text=\"bind:INSERT_DATE\" calendardateformat=\"yyyy-MM-dd HH:mm\"/><Cell col=\"3\" text=\"bind:APPLY_FLAG\" displaytype=\"checkboxcontrol\"/><Cell row=\"1\" colspan=\"4\" text=\"bind:CONTENTS\" edittype=\"textarea\" displaytype=\"text\" textAlign=\"left\" tooltiptext=\"bind:CONTENTS\"/></Band></Format><Format id=\"mobile\"><Columns><Column size=\"100\"/><Column size=\"100\"/><Column size=\"120\"/><Column size=\"80\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\" band=\"head\"/><Row size=\"30\"/><Row size=\"50\"/></Rows><Band id=\"head\"><Cell text=\"등록자\" TL_SEQ=\"81\"/><Cell col=\"1\" text=\"부서\" TL_SEQ=\"74\"/><Cell col=\"2\" text=\"등록일시\" TL_SEQ=\"384\"/><Cell col=\"3\" text=\"반영여부\" TL_SEQ=\"385\"/><Cell row=\"1\" colspan=\"4\" text=\"결재의견\" TL_SEQ=\"378\"/></Band><Band id=\"body\"><Cell text=\"bind:INSERT_EMP_NM\"/><Cell col=\"1\" text=\"bind:INSERT_DEPT_NM\"/><Cell col=\"2\" text=\"bind:INSERT_DATE\" calendardateformat=\"yyyy-MM-dd HH:mm\"/><Cell col=\"3\" text=\"bind:APPLY_FLAG\" displaytype=\"checkboxcontrol\"/><Cell row=\"1\" colspan=\"4\" text=\"bind:CONTENTS\" edittype=\"textarea\" displaytype=\"text\" textAlign=\"left\" tooltiptext=\"bind:CONTENTS\"/></Band></Format></Formats>");
            this.div_Approval.addChild(obj.name, obj);

            obj = new CheckBox("cb_Apply","390","4","114","20",null,null,null,null,null,null,this.div_Approval.form);
            obj.set_taborder("4");
            obj.set_text("사전원가표 반영");
            obj.set_falsevalue("0");
            obj.set_truevalue("1");
            obj.set_enable("false");
            obj.getSetter("TL_SEQ").set("386");
            this.div_Approval.addChild(obj.name, obj);

            obj = new Button("btn_Comment","390","33","114","24",null,null,null,null,null,null,this.div_Approval.form);
            obj.set_taborder("6");
            obj.set_text("결재의견등록");
            obj.set_cssclass("btn_WF_tran");
            obj.set_enable("false");
            obj.getSetter("TL_SEQ").set("387");
            this.div_Approval.addChild(obj.name, obj);

            obj = new Static("Static03","10","0","356","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("전자결재");
            obj.set_cssclass("sta_POP_Title");
            obj.getSetter("TL_SEQ").set("388");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close",null,null,"60","24","8","7",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_tran");
            obj.getSetter("TL_SEQ").set("59");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Gb_Sales_Prod00","4","39","510","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_POP_GroupBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Sales_Prod00","18","39","158","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("전자결재");
            obj.set_visible("true");
            obj.set_cssclass("sta_POP_GroupTit");
            obj.getSetter("TL_SEQ").set("388");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Return","443","45","65","24",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("반려");
            obj.set_cssclass("btn_WF_tran");
            obj.set_enable("false");
            obj.getSetter("TL_SEQ").set("23");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Approval",null,"45","65","24","btn_Return:4",null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("결재");
            obj.set_cssclass("btn_WF_tran");
            obj.set_enable("false");
            obj.getSetter("TL_SEQ").set("389");
            this.addChild(obj.name, obj);

            obj = new Button("btn_ReReport",null,"45","65","24","btn_Approval:4",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("내용수정");
            obj.set_cssclass("btn_WF_tran");
            obj.set_enable("false");
            obj.getSetter("TL_SEQ").set("390");
            this.addChild(obj.name, obj);

            obj = new Div("div_Attachment",null,"45","84","24","btn_ReReport:8",null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_async("false");
            obj.getSetter("SOURCE_CD").set("P");
            obj.getSetter("USE_NEXT_FILE_TYPE").set("true");
            obj.getSetter("USE_LINK_TYPE").set("true");
            obj.getSetter("USE_MULTI_FILE").set("true");
            obj.getSetter("USE_OPEN_ADD_DIALOG").set("false");
            obj.getSetter("USE_DELETE_ALL").set("false");
            obj.getSetter("USE_BUTTON_ONLY").set("true");
            obj.set_url("sales::comm/COM_Attachment.xfdl");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Preview",null,null,"60","24","76","7",null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("원가표확인");
            obj.set_cssclass("btn_WF_tran");
            obj.set_visible("false");
            obj.getSetter("TL_SEQ").set("391");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_Approval.form
            obj = new Layout("default","",0,0,this.div_Approval.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.Static00.set_taborder("5");
                p.Static00.set_text("결재의견");
                p.Static00.getSetter("TL_SEQ").set("378");
                p.Static00.move("8","4","50","53",null,null);

                p.ta_Comment.set_taborder("3");
                p.ta_Comment.move("65","4","321","53",null,null);

                p.Static01.set_taborder("7");
                p.Static01.set_text("※ 결재 진행전 의견입력 바랍니다.(선택사항) \r\n※ 상신자는 상신후에 결재의견이 등록가능합니다.");
                p.Static01.getSetter("TL_SEQ").set("379");
                p.Static01.move("65","ta_Comment:4",null,"28","4",null);

                p.grdApprovalDoc.set_taborder("1");
                p.grdApprovalDoc.set_binddataset("dsApprovalDoc");
                p.grdApprovalDoc.set_autofittype("col");
                p.grdApprovalDoc.set_selecttype("cell");
                p.grdApprovalDoc.set_formatid("default");
                p.grdApprovalDoc.move("4","Static01:4",null,"123","4",null);

                p.grdApprovalLine.set_taborder("0");
                p.grdApprovalLine.set_binddataset("dsApprovalLine");
                p.grdApprovalLine.set_autofittype("col");
                p.grdApprovalLine.move("4","grdApprovalDoc:4","500","146",null,null);

                p.grdApprovalCommnet.set_taborder("2");
                p.grdApprovalCommnet.set_binddataset("dsApprovalCommnet");
                p.grdApprovalCommnet.set_autofittype("col");
                p.grdApprovalCommnet.move("4","grdApprovalLine:4",null,null,"4","4");

                p.cb_Apply.set_taborder("4");
                p.cb_Apply.set_text("사전원가표 반영");
                p.cb_Apply.set_falsevalue("0");
                p.cb_Apply.set_truevalue("1");
                p.cb_Apply.set_enable("false");
                p.cb_Apply.getSetter("TL_SEQ").set("386");
                p.cb_Apply.move("390","4","114","20",null,null);

                p.btn_Comment.set_taborder("6");
                p.btn_Comment.set_text("결재의견등록");
                p.btn_Comment.set_cssclass("btn_WF_tran");
                p.btn_Comment.set_enable("false");
                p.btn_Comment.getSetter("TL_SEQ").set("387");
                p.btn_Comment.move("390","33","114","24",null,null);
            	}
            );
            this.div_Approval.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div_Approval.form
            obj = new Layout("portrait","",0,0,this.div_Approval.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdApprovalCommnet.set_formatid("mobile");
                p.grdApprovalCommnet.set_minheight("222");
                p.grdApprovalCommnet.set_maxheight("");
                p.grdApprovalCommnet.move("4","grdApprovalLine:4",null,null,"4","4");

                p.cb_Apply.move(null,"4","138","30","4",null);

                p.btn_Comment.move(null,"cb_Apply:4","138","30","4",null);

                p.ta_Comment.move("Static00:4","4",null,"64","146",null);

                p.grdApprovalLine.set_formatid("mobile");
                p.grdApprovalLine.move("4","grdApprovalDoc:4",null,"182","4",null);

                p.Static01.move("74","ta_Comment:4",null,"40","4",null);

                p.Static00.move("8","4","62","53",null,null);

                p.grdApprovalDoc.set_formatid("mobile");
                p.grdApprovalDoc.move("4","Static01:4",null,"132","4",null);
            	}
            );
            this.div_Approval.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div_Approval.form
            obj = new Layout("landscape","",0,0,this.div_Approval.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grdApprovalCommnet.set_formatid("mobile");
                p.grdApprovalCommnet.set_minheight("222");
                p.grdApprovalCommnet.set_maxheight("");
                p.grdApprovalCommnet.set_maxwidth("");
                p.grdApprovalCommnet.move("4","grdApprovalLine:4",null,null,"4","4");

                p.cb_Apply.move(null,"4","138","30","4",null);

                p.btn_Comment.move(null,"cb_Apply:4","138","30","4",null);

                p.ta_Comment.move("Static00:4","4",null,"64","146",null);

                p.grdApprovalLine.set_formatid("mobile");
                p.grdApprovalLine.move("4","grdApprovalDoc:4",null,"182","4",null);

                p.Static01.move("74","ta_Comment:4",null,"40","4",null);

                p.Static00.move("8","4","62","53",null,null);

                p.grdApprovalDoc.set_formatid("mobile");
                p.grdApprovalDoc.move("4","Static01:4",null,"132","4",null);
            	}
            );
            this.div_Approval.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div_Attachment
            obj = new Layout("default","",0,0,this.div_Attachment.form,function(p){});
            this.div_Attachment.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1365,670,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("전자결재");
                p.set_cssclass("frm_popBg");

                p.UbiReport.getSetter("taborder").set("1");
                p.UbiReport.move("518","39",null,null,"4","41");

                p.btn_close.set_taborder("0");
                p.btn_close.set_cssclass("btn_POP_Cls");
                p.btn_close.move(null,"10","15","15","10",null);

                p.Static00.set_taborder("3");
                p.Static00.set_cssclass("sta_POP_BtnBg");
                p.Static00.move("0",null,null,"38","0","0");

                p.div_Approval.set_taborder("7");
                p.div_Approval.set_cssclass("div_WF_detailBg");
                p.div_Approval.move("4","73","510",null,null,"37");

                p.Static03.set_taborder("2");
                p.Static03.set_text("전자결재");
                p.Static03.set_cssclass("sta_POP_Title");
                p.Static03.getSetter("TL_SEQ").set("388");
                p.Static03.move("10","0","356","35",null,null);

                p.btn_Close.set_taborder("4");
                p.btn_Close.set_text("닫기");
                p.btn_Close.set_cssclass("btn_WF_tran");
                p.btn_Close.getSetter("TL_SEQ").set("59");
                p.btn_Close.move(null,null,"60","24","8","7");

                p.stc_Gb_Sales_Prod00.set_taborder("5");
                p.stc_Gb_Sales_Prod00.set_cssclass("sta_POP_GroupBg");
                p.stc_Gb_Sales_Prod00.move("4","39","510","35",null,null);

                p.stc_Sales_Prod00.set_taborder("6");
                p.stc_Sales_Prod00.set_text("전자결재");
                p.stc_Sales_Prod00.set_visible("true");
                p.stc_Sales_Prod00.set_cssclass("sta_POP_GroupTit");
                p.stc_Sales_Prod00.getSetter("TL_SEQ").set("388");
                p.stc_Sales_Prod00.move("18","39","158","30",null,null);

                p.btn_Return.set_taborder("9");
                p.btn_Return.set_text("반려");
                p.btn_Return.set_cssclass("btn_WF_tran");
                p.btn_Return.set_enable("false");
                p.btn_Return.getSetter("TL_SEQ").set("23");
                p.btn_Return.move("443","45","65","24",null,null);

                p.btn_Approval.set_taborder("8");
                p.btn_Approval.set_text("결재");
                p.btn_Approval.set_cssclass("btn_WF_tran");
                p.btn_Approval.set_enable("false");
                p.btn_Approval.getSetter("TL_SEQ").set("389");
                p.btn_Approval.move(null,"45","65","24","btn_Return:4",null);

                p.btn_ReReport.set_taborder("10");
                p.btn_ReReport.set_text("내용수정");
                p.btn_ReReport.set_cssclass("btn_WF_tran");
                p.btn_ReReport.set_enable("false");
                p.btn_ReReport.getSetter("TL_SEQ").set("390");
                p.btn_ReReport.move(null,"45","65","24","btn_Approval:4",null);

                p.div_Attachment.set_taborder("11");
                p.div_Attachment.set_async("false");
                p.div_Attachment.getSetter("SOURCE_CD").set("P");
                p.div_Attachment.getSetter("USE_NEXT_FILE_TYPE").set("true");
                p.div_Attachment.getSetter("USE_LINK_TYPE").set("true");
                p.div_Attachment.getSetter("USE_MULTI_FILE").set("true");
                p.div_Attachment.getSetter("USE_OPEN_ADD_DIALOG").set("false");
                p.div_Attachment.getSetter("USE_DELETE_ALL").set("false");
                p.div_Attachment.getSetter("USE_BUTTON_ONLY").set("true");
                p.div_Attachment.set_url("sales::comm/COM_Attachment.xfdl");
                p.div_Attachment.move(null,"45","84","24","btn_ReReport:8",null);

                p.btn_Preview.set_taborder("12");
                p.btn_Preview.set_text("원가표확인");
                p.btn_Preview.set_cssclass("btn_WF_tran");
                p.btn_Preview.set_visible("false");
                p.btn_Preview.getSetter("TL_SEQ").set("391");
                p.btn_Preview.move(null,null,"60","24","76","7");
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("portrait","Mobile_screen",480,789,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.UbiReport.getSetter("text").set("");
                p.UbiReport.getSetter("visible").set("false");
                p.UbiReport.move("536","62",null,"644","-528",null);

                p.div_Approval.set_text("");
                p.div_Approval.set_formscrolltype("vertical");
                p.div_Approval.move("4","81",null,null,"4","Static00:4");

                p.stc_Gb_Sales_Prod00.move("4","39",null,"39","4",null);

                p.div_Attachment.move(null,"43","106","30","btn_ReReport:4",null);

                p.btn_ReReport.move(null,"43","75","30","btn_Approval:4",null);

                p.btn_Approval.move(null,"43","75","30","btn_Return:4",null);

                p.btn_Return.move(null,"43","85","30","8",null);

                p.stc_Sales_Prod00.move("10","43","94","30",null,null);

                p.Static00.move("0",null,null,"38","0","0");

                p.btn_Close.move(null,null,"70","30","4","4");

                p.btn_close.move(null,"4","30","30","4",null);

                p.Static03.set_text("전자결재");
                p.Static03.move("10","4","113","22",null,null);

                p.btn_Preview.set_visible("true");
                p.btn_Preview.move(null,null,"100","30","btn_Close:4","4");
            	}
            );
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("landscape","Mobile_screen",768,789,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.UbiReport.getSetter("visible").set("false");
                p.UbiReport.move("784","744",null,"644","-776",null);

                p.div_Approval.set_text("");
                p.div_Approval.set_formscrolltype("vertical");
                p.div_Approval.move("4","81",null,null,"4","Static00:4");

                p.stc_Gb_Sales_Prod00.move("4","39",null,"39","4",null);

                p.div_Attachment.move(null,"43","106","30","btn_ReReport:4",null);

                p.btn_ReReport.move(null,"43","75","30","btn_Approval:4",null);

                p.btn_Approval.move(null,"43","75","30","btn_Return:4",null);

                p.btn_Return.move(null,"43","85","30","8",null);

                p.stc_Sales_Prod00.move("10","43","94","30",null,null);

                p.Static00.move("0",null,null,"38","0","0");

                p.btn_Close.move(null,null,"70","30","4","4");

                p.btn_close.move(null,"4","30","30","4",null);

                p.Static03.set_text("전자결재");
                p.Static03.move("10","4","113","22",null,null);

                p.btn_Preview.set_visible("true");
                p.btn_Preview.move(null,null,"100","30","btn_Close:4","4");
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","sales::comm/COM_Attachment.xfdl");
        };
        
        // User Script
        this.addIncludeScript("CA_Approval.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("CA_Approval.xfdl","Script::CommGrid.xjs");
        this.addIncludeScript("CA_Approval.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("CA_Approval.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("CA_Approval.xfdl","Script::ext_CommEco.xjs");
        this.addIncludeScript("CA_Approval.xfdl","Script::ext_Report.xjs");
        this.registerScript("CA_Approval.xfdl", function() {
         /************************************************************************************************
         * 01. 업무구분	: 공통 - 공통
         * 02. 화면명		: Report 미리보기 (CA_Approval)
         * 03. 화면설명 	: Report 미리보기 한다.
         * 04. 작성일   	: 2018.07.30
         * 05. 작성자   	: 채종한
         * 06. 수정이력 	:
         ***********************************************************************************************
         *     수정일          이  름    사유
         ***********************************************************************************************
         *
         ************************************************************************************************/

        /************************************************************************************************
         * 공통 라이브러리 INCLUDE 영역
         ************************************************************************************************/
        this.executeIncludeScript("Script::CommTrans.xjs"); /*include "Script::CommTrans.xjs"*/
        this.executeIncludeScript("Script::CommGrid.xjs"); /*include "Script::CommGrid.xjs"*/;
        this.executeIncludeScript("Script::CommUtil.xjs"); /*include "Script::CommUtil.xjs"*/
        this.executeIncludeScript("Script::CommSystem.xjs"); /*include "Script::CommSystem.xjs"*/
        this.executeIncludeScript("Script::ext_CommEco.xjs"); /*include "Script::ext_CommEco.xjs"*/
        this.executeIncludeScript("Script::ext_Report.xjs"); /*include "Script::ext_Report.xjs"*/

        /************************************************************************************************
         * 전역 변수 영역
         ************************************************************************************************/
        this.fv_arrInDataSet = new Array();
        this.fv_arrParamData = new Array();
        this.fv_rptFileNm = "";
        this.fv_saveFileNm = "";
        this.AD_SEQ = "";
        this.fv_DOC_KIND = "";			//문서분류
        this.fv_SOURCE_CD = "";			//출처
        this.fv_SOURCE_DATA = "";		//출처코드
        this.fv_ARBITRARILY_CODE = "";	//전결구분
        this.fv_ARBITRARILY_DATA = "";	//전결코드
        this.fv_CONTENTS = "";			//내용
        this.fv_SALES_EMP_NO = "";		//담당영업
        this.fv_FILE_SOURCE_CD = "";	//파일 SOURCE_CD
        this.fv_FILE_SOURCE_SEQ = "";	//파일 SOURCE_SEQ
        this.fv_SUBJECT = "";			//제목
        this.fv_TITLE = "";				//레포트 타이틀

        this.fv_pv_inDs  = this.parent.pv_inDs;
        this.fv_pv_paramDt  = this.parent.pv_paramDt;
        /************************************************************************************************
         * FORM 영역
         ************************************************************************************************/
        this.CA_Approval_onload = function(obj,e)
        {
        	this.gfnCompInit(obj);  	// Grid 공통함수 호출
        	this.fv_rptFileNm = this.parent.pv_rptFileNm;
        	this.fv_saveFileNm = this.parent.pv_saveFileNm;
        	this.fv_arrInDataSet = this.parent.pv_inDs;
        	this.fv_arrParamData = this.parent.pv_paramDt;
        	this.AD_SEQ = this.parent.pv_arrParam.pv_AD_SEQ;
        	this.fv_DOC_KIND = this.parent.pv_arrParam.pv_DOC_KIND;
        	this.fv_SOURCE_CD = this.parent.pv_arrParam.pv_SOURCE_CD;
        	this.fv_SOURCE_DATA = this.parent.pv_arrParam.pv_SOURCE_DATA;
        	this.fv_ARBITRARILY_CODE = this.parent.pv_arrParam.pv_ARBITRARILY_CODE;
        	this.fv_ARBITRARILY_DATA = this.parent.pv_arrParam.pv_ARBITRARILY_DATA;
        	this.fv_CONTENTS = this.parent.pv_arrParam.pv_CONTENTS;
        	this.fv_SALES_EMP_NO = this.parent.pv_arrParam.pv_SALES_EMP_NO;
        	this.fv_FILE_SOURCE_CD = this.parent.pv_arrParam.pv_FILE_SOURCE_CD;
        	this.fv_FILE_SOURCE_SEQ = this.parent.pv_arrParam.pv_FILE_SOURCE_SEQ;
        	this.fv_SUBJECT = this.parent.pv_arrParam.pv_SUBJECT;
        	this.fv_TITLE = this.parent.pv_arrParam.pv_TITLE;

        	if(!this.gfnIsEmpty(this.AD_SEQ))
        		this.fn_SelecctApprovalDoc();	//전달받은 AD_SEQ가 있으면 해당 전자결재 조회
        	else// if(this.fv_DOC_KIND=="COSTSHEET_1")
        		this.fn_getAD_SEQ();			//전달받은 AD_SEQ가 없으면 최근 전자결재 AD_SEQ 조회

        	this.div_Attachment.set_url("");
        	this.div_Attachment.SOURCE_CD = this.fv_FILE_SOURCE_CD;
        	this.div_Attachment.SOURCE_SEQ = this.fv_FILE_SOURCE_SEQ;
        	//this.div_Attachment.USE_NEXT_FILE_TYPE = false;
        	this.div_Attachment.set_url("sales::comm/COM_Attachment.xfdl");

        	//사전원가표일경우만 내용수정이 가능
        	if(this.fv_DOC_KIND=="COSTSHEET_1")
        	{
        		this.btn_ReReport.set_visible(true);
        		this.div_Approval.form.cb_Apply.set_visible(true);
        	}
        	else
        	{
        		this.btn_ReReport.set_visible(false);
        		this.div_Approval.form.cb_Apply.set_visible(false);
        	}

        	if(this.fv_DOC_KIND=="ESTIMATE")
        	{
        		this.div_Attachment.set_visible(false); // 견적서일 경우 첨부파일 사용 X
        	}
        };

        this.fn_DeepCopyDs = function(copyArr)
        {
        	var sArrDs = this.fv_arrInDataSet;
        	for(var i = 0; i < sArrDs.length; i++) {
        		for(var j = 0; j < sArrDs[i].length; j++) {
        			if(this.gfnXCompTypeOf(sArrDs[i][j]) == "Dataset") {
        				var objDs = new nexacro.Dataset();
        				objDs = sArrDs[i][j];
        				copyArr.push([sArrDs[i][0], objDs]);
        			}
        		}
        	}
        };

        this.fn_ReporrtView =function ()
        {
        	if(this.commUtil.gfnGetMobile())
        		return;
        	this.dsPrtApprovalDoc.applyChange();
        	this.dsPrtApprovalLine.applyChange();
        	this.dsPrtApprovalCommnet.applyChange();

        	//this.arrInDataSet = this.parent.pv_inDs;
        	//this.arrInDataSet = this.fv_arrInDataSet;
        	this.fn_DeepCopyDs(this.arrInDataSet);

        	this.arrParamData = this.parent.pv_paramDt;
        	this.arrParamData = this.fv_arrParamData;

        	// 결재라인, 결재의견 추가 처리
        	this.arrInDataSet.push(["dsPrtApprovalDoc", this.dsPrtApprovalDoc]);
        	this.arrInDataSet.push(["dsPrtApprovalLine", this.dsPrtApprovalLine]);
        	this.arrInDataSet.push(["dsPrtApprovalCommnet", this.dsPrtApprovalCommnet]);

        	if(!this.gfnIsEmpty(this.fv_saveFileNm))
        		this.UbiReport.reporttitle = this.fv_saveFileNm;
        	this.gfnOpenReportViewer(this.UbiReport, this.fv_rptFileNm);
        }

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
         ************************************************************************************************/
        this.fnRptCallBack = function()
        {
        	// trace("Report Callback !!");
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
         ************************************************************************************************/
          // 조회
         this.fn_getAD_SEQ = function()
         {
        	// 조건값 셋팅
        	this.gfnAddSendParameter("DOC_KIND",	this.fv_DOC_KIND);
        	this.gfnAddSendParameter("SOURCE_CD",	this.fv_SOURCE_CD);
        	this.gfnAddSendParameter("SOURCE_DATA",	this.fv_SOURCE_DATA);

        	// 조회용 Output dataset 세팅
        	this.gfnAddOutputDataset("dsApprovalSeq",		"dsOutput");

        	this.gfnCommonTransaction("CA_Approval_S01", "CA_Approval_S01");
         };

         // 조회
         this.fn_SelecctApprovalDoc = function()
         {
        	if(this.gfnIsEmpty(this.AD_SEQ))
        		return;
        	// 조건값 셋팅
        	this.gfnAddSendParameter("AD_SEQ",	this.AD_SEQ);

        	// 조회용 Output dataset 세팅
        	this.gfnAddOutputDataset("dsApprovalDoc",		"dsOutput1");
        	this.gfnAddOutputDataset("dsApprovalLine",		"dsOutput2");
        	this.gfnAddOutputDataset("dsApprovalCommnet",	"dsOutput3");

        	this.gfnCommonTransaction("CA_Approval_S02", "CA_Approval_S02");
         };

         // 전자결재 신규등록
         this.fn_InsertApprovalDoc = function ()
         {
        	this.dsInsertApproval.clearData();
        	this.dsInsertApproval.addRow();
        	this.dsInsertApproval.setColumn(0, "DOC_KIND",			this.fv_DOC_KIND);			//문서분류
        	this.dsInsertApproval.setColumn(0, "SOURCE_CD",			this.fv_SOURCE_CD);			//출처
        	this.dsInsertApproval.setColumn(0, "SOURCE_DATA",		this.fv_SOURCE_DATA);		//출처코드
        	this.dsInsertApproval.setColumn(0, "ARBITRARILY_CODE",	this.fv_ARBITRARILY_CODE);	//전결구분
        	this.dsInsertApproval.setColumn(0, "ARBITRARILY_DATA",	this.fv_ARBITRARILY_DATA);	//전결코드
        	this.dsInsertApproval.setColumn(0, "SUBJECT",			this.fv_SUBJECT);			//제목

        	this.gfnAddOutputDataset("dsApprovalSeq",		"dsOutput");
        	this.gfnAddInputDataset("dsInsertApproval", 	"dsInput", "A");

        	this.gfnCommonTransaction("CA_Approval_R01", "CA_Approval_R01");
         }

         // 결재/반려
         this.fn_SaveApprovalLine = function (strAPPROVAL_STATUS)
         {
        	if(this.gfnIsEmpty(this.AD_SEQ))
        		return;
        	this.gfnAddSendParameter("AD_SEQ",	this.AD_SEQ);					//전자결제번호
        	this.gfnAddSendParameter("APPROVAL_STATUS",	strAPPROVAL_STATUS);	//결재상태
        	this.gfnCommonTransaction("CA_Approval_R02", "CA_Approval_R02");
         }

         // 결재의견등록
         this.fn_SaveApprovalComment = function ()
         {
        	if(this.gfnIsEmpty(this.AD_SEQ))
        		return;
        	if(this.gfnIsEmpty(this.div_Approval.form.ta_Comment.value))
        		return;
        	var nRow = this.dsApprovalCommnet.findRow("INSERT_EMP_NO", nexacro.getApplication().gdsUserInfo.getColumn(0,"EMP_NO"));
         	if(nRow<0)
        	{
        		nRow = this.dsApprovalCommnet.addRow();
        		this.dsApprovalCommnet.setColumn(nRow, "AD_SEQ", this.AD_SEQ);
        		this.dsApprovalCommnet.setColumn(nRow, "CONTENTS", this.div_Approval.form.ta_Comment.value);
        		this.dsApprovalCommnet.setColumn(nRow, "APPLY_FLAG", this.div_Approval.form.cb_Apply.value);
        		this.dsApprovalCommnet.setColumn(nRow, "INSERT_EMP_NO", nexacro.getApplication().gdsUserInfo.getColumn(0,"EMP_NO"));
        		this.dsApprovalCommnet.setColumn(nRow, "INSERT_EMP_NM", nexacro.getApplication().gdsUserInfo.getColumn(0,"EMP_NM"));
        		this.dsApprovalCommnet.setColumn(nRow, "INSERT_DEPT_NM", nexacro.getApplication().gdsUserInfo.getColumn(0,"DEPT_NM"));
        	}
        	else
        	{
        		this.dsApprovalCommnet.setColumn(nRow, "APPLY_FLAG", this.div_Approval.form.cb_Apply.value);
        		this.dsApprovalCommnet.setColumn(nRow, "CONTENTS", this.div_Approval.form.ta_Comment.value);
        	}
        	this.gfnAddInputDataset("dsApprovalCommnet", "dsInput", "A");
        	this.gfnCommonTransaction("CA_Approval_R03", "CA_Approval_R03");
         }

         // Report 결재라인 입력 데이터셋 처리
         this.fn_SetApprovalLineInput = function ()
         {
        	this.dsPrtApprovalLine.clearData();

        	var sDutyColNm = "DUTY";
        	var sEmpColNo = "EMP_NO";
        	var sEmpColNm = "EMP_NM";
        	var sStatusColNm = "STATUS";
        	var sApprovalDateColNm = "APPROVAL_DT";
        	var sColIndx = 0;

        	if (this.dsApprovalLine.rowcount>0) {
        		this.dsPrtApprovalLine.addRow();
        		this.dsPrtApprovalLine.setColumn(0, "LINE_CNT", this.dsApprovalLine.rowcount);

        		for (var i=0; i<this.dsApprovalLine.rowcount; i++) {
        			var sDuty = this.dsApprovalLine.getColumn(i, "DUTY_NAME");
        			var sLinkKindNm = this.dsApprovalLine.getColumn(i, "LINE_KIND_NAME");
        			var sAppDate = this.dsApprovalLine.getColumn(i, "APPROVAL_DATE");
        			var sAppDate2 = "";
        			var sEmpNo = this.dsApprovalLine.getColumn(i, "EMP_NO");
        			var sEmpName = this.dsApprovalLine.getColumn(i, "EMP_NM");
        			var sAppStat = this.dsApprovalLine.getColumn(i, "APPROVAL_STATUS");

        			sColIndx++;
        			if (sLinkKindNm == this.gfnGetTransTxt(2187,"합의")) {
        				this.dsPrtApprovalLine.setColumn(0, sDutyColNm+"_"+sColIndx, sLinkKindNm);
        			} else if (sDuty == this.gfnGetTransTxt(2188,"팀원")) {
        				this.dsPrtApprovalLine.setColumn(0, sDutyColNm+"_"+sColIndx, this.gfnGetTransTxt(66,"담당자"));
        			} else {
        				this.dsPrtApprovalLine.setColumn(0, sDutyColNm+"_"+sColIndx, sDuty);
        			}

        			this.dsPrtApprovalLine.setColumn(0, sStatusColNm+"_"+sColIndx, this.dsApprovalLine.getColumn(i, "APPROVAL_STATUS_NAME"));
        			if (this.gfnIsEmpty(sAppDate)) {
        				sAppDate = "";
        				sEmpName = "";
        			} else if (sAppStat=="RETURN") {
        				sAppDate = "";
        				sEmpName = "";
        			} else {
        				sAppDate = sAppDate.toString();
        				sAppDate2 = sAppDate.substr(2, 2)+"/"+sAppDate.substr(4, 2)+"/"+sAppDate.substr(6, 2);
        			}
        			this.dsPrtApprovalLine.setColumn(0, sApprovalDateColNm+"_"+sColIndx, sAppDate2);
        			this.dsPrtApprovalLine.setColumn(0, sEmpColNo+"_"+sColIndx, sEmpNo);
        			this.dsPrtApprovalLine.setColumn(0, sEmpColNm+"_"+sColIndx, sEmpName);
        		}
        	}

        	this.dsPrtApprovalCommnet.clearData();
        	for (var i=0; i<this.dsApprovalCommnet.rowcount; i++)
        	{
        		if (this.dsApprovalCommnet.getColumn(i, "APPLY_FLAG") == "1")
        		{
        			var nAddRow = this.dsPrtApprovalCommnet.addRow();
        			var sDt = this.dsApprovalCommnet.getColumn(i, "INSERT_DATE");
        			sDt = sDt.toString();
        			this.dsPrtApprovalCommnet.setColumn(nAddRow, "INSERT_DATE", sDt.substr(0,14));
        			this.dsPrtApprovalCommnet.setColumn(nAddRow, "EMP_NM", 		this.dsApprovalCommnet.getColumn(i, "INSERT_EMP_NM"));
        			this.dsPrtApprovalCommnet.setColumn(nAddRow, "CONTENTS", 	this.dsApprovalCommnet.getColumn(i, "CONTENTS"));
        		}
        	}

        	if (this.dsPrtApprovalCommnet.rowcount == 0) {
        		var nAddRow = this.dsPrtApprovalCommnet.addRow();
        	}

        	this.dsPrtApprovalDoc.clearData();
        	this.dsPrtApprovalDoc.copyData(this.dsApprovalDoc);
        	if(!this.gfnIsEmpty(this.fv_TITLE))
        	{
        		this.dsPrtApprovalDoc.addColumn("TITLE");
        		this.dsPrtApprovalDoc.setColumn(0, "TITLE", this.fv_TITLE);
        	}
         }

         // 화면 콜백
         this.fnCallBack = function (strSvcID, nErrorCode, strErrorMag)
         {
        	var EmpNo = nexacro.getApplication().gdsUserInfo.getColumn(0,"EMP_NO");
        	// 에러 예외처리
        	if(nErrorCode != 0) {
        		return;
        	}
        	else
        	{
        		switch (strSvcID)
        		{
        			case "gfnGetCode" :

        				break;
        			case "CA_Approval_S01" :
        				this.AD_SEQ = this.dsApprovalSeq.getColumn(0,"AD_SEQ");
        				if(this.gfnIsEmpty(this.AD_SEQ)) {
        					// 신규건인경우 작성자(담당영업)는 버튼생성
        					if (this.fv_SALES_EMP_NO==EmpNo) {
        						this.btn_Approval.set_text(this.gfnGetTransTxt(577,"상신"));
        						this.btn_Approval.set_enable(true);	//등록된 전자결재가 없을경우 상신 가능
        					}
        					this.fn_ReporrtView();
        				}
        				else
        					this.fn_SelecctApprovalDoc();
        				break;
        			case "CA_Approval_S02" :
        				this.fn_SetApprovalLineInput();

        				this.btn_Approval.set_enable(false);
        				this.btn_Approval.set_text(this.gfnGetTransTxt(389,"결재"));
        				this.btn_ReReport.set_enable(false);
        				this.btn_Return.set_enable(false);
        				this.btn_Return.set_text(this.gfnGetTransTxt(23,"반려"));
        				this.div_Approval.form.btn_Comment.set_enable(false);
        				this.div_Approval.form.cb_Apply.set_enable(false);

        				var nLineRow = this.dsApprovalLine.findRow("EMP_NO", EmpNo);
        				var nCommnetRow = this.dsApprovalCommnet.findRow("INSERT_EMP_NO", nexacro.getApplication().gdsUserInfo.getColumn(0,"EMP_NO"));

        				if(this.dsApprovalDoc.getColumn(0, "DOC_STATUS")=="RETURN"				//반려일경우 재상신 가능
        						&& this.fv_SALES_EMP_NO==EmpNo
        						&& this.gfnIsEmpty(this.dsApprovalDoc.getColumn(0, "NEXT_AD_SEQ")) )	//재상신건이 없을경우
        				{
        					this.btn_ReReport.set_enable(true);
        				}
        				else if(this.dsApprovalDoc.getRowCount()==0)
        				{
        					this.btn_Approval.set_enable(true);										//등록된 전자결재가 없을경우 상신 가능
        				}
        				else if(nLineRow>=0)														//본인이 결재라인에 있을경우
        				{
        					var ApprovalBtnText = this.dsApprovalLine.getColumn(nLineRow, "APPROVAL_BTN_TXT");
        					if(!this.gfnIsEmpty(ApprovalBtnText))
        					{
        						this.btn_Approval.set_enable(true);
        						this.btn_Approval.set_text(ApprovalBtnText);
        					}
        					var ReturnBtnText = this.dsApprovalLine.getColumn(nLineRow, "RETURN_BTN_TXT");
        					if(!this.gfnIsEmpty(ReturnBtnText))
        					{
        						this.btn_Return.set_enable(true);
        						this.btn_Return.set_text(ReturnBtnText);
        					}
        				}
        				if(nLineRow>=0)																	//결재라인이 있고
        				{
        					if(this.dsApprovalDoc.getColumn(0, "DOC_STATUS")=="RETURN"
        						|| this.dsApprovalDoc.getColumn(0, "DOC_STATUS")=="FINISH")
        					{
        						this.div_Approval.form.btn_Comment.set_enable(false);
        						this.div_Approval.form.cb_Apply.set_enable(false);
        					}
        					else if(this.dsApprovalLine.getColumn(nLineRow, "APPROVAL_STATUS")=="WAITING"	//대기상태일경우 결재의견등록 가능
        						|| this.dsApprovalLine.getColumn(nLineRow+1, "APPROVAL_STATUS")=="WAITING")	//상위결재가 안끝났을경우 등록 가능
        					{
        						this.div_Approval.form.btn_Comment.set_enable(true);
        						this.div_Approval.form.cb_Apply.set_enable(true);
        					}
        					else if(nCommnetRow<0														//결재의견이 없을경우 결재의견등록 가능
        						||this.dsApprovalCommnet.getColumn(nLineRow, "APPLY_FLAG")=="0")		//사전원가표 반영이 아닐경우 수정가능
        					{
        						this.div_Approval.form.btn_Comment.set_enable(true);
        					}
        				}

        				if(nCommnetRow>=0
        					&&(this.dsApprovalLine.getColumn(nLineRow, "APPROVAL_STATUS")=="WAITING"
        					||this.dsApprovalCommnet.getColumn(nLineRow, "APPLY_FLAG")=="0"))
        				{
        					this.div_Approval.form.cb_Apply.set_value(this.dsApprovalCommnet.getColumn(nCommnetRow, "APPLY_FLAG"));
        					this.div_Approval.form.ta_Comment.set_value(this.dsApprovalCommnet.getColumn(nCommnetRow, "CONTENTS"));
        				}

        				this.fn_ReporrtView();
        				break;
        			case "CA_Approval_R01" :
        				this.AD_SEQ = this.dsApprovalSeq.getColumn(0,"AD_SEQ");
        			case "CA_Approval_R02" :
        			case "CA_Approval_R03" :
        				this.fn_SelecctApprovalDoc();
        				break;
        		}
        	}
         };

         /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
         ************************************************************************************************/
        this.btn_Close_onclick = function(obj,e)
        {
        	var sDocStatus = this.dsApprovalDoc.getColumn(this.dsApprovalDoc.rowposition, "DOC_STATUS");
        	this.commUtil.popupClose(sDocStatus);
        };

        this.btn_Approval_onclick = function(obj,e)
        {
        	if(this.fv_DOC_KIND=="COSTSHEET_1")
        	{
        		//견적서 파일 유무 확인
        		this.gfnAddSendParameter("PROJECT_CODE", this.fv_FILE_SOURCE_SEQ);

        		// 조회용 Output dataset 세팅
        		this.gfnAddOutputDataset("dsFileCnt", "dsOutput");
        		this.gfnCommonTransaction("Get_FileCnt", "SS_Presales_S05", null, false);

        		if(this.dsFileCnt.getColumn(0, "CNT")==0)
        		{
        			alert(this.gfnGetTransTxt(1203,"견적서 파일이 첨부 되지 않았습니다."));// 견적서 첨부 후 진행 바랍니다.");
        			//return;
        		}
        	} else if(this.fv_DOC_KIND=="ESTIMATE") {
        		//견적서 파일 유무 확인
        		this.gfnAddSendParameter("AD_SEQ", this.AD_SEQ);

        		// 조회용 Output dataset 세팅
        		this.gfnAddOutputDataset("dsCurOrd", "dsOutput");
        		this.gfnCommonTransaction("Get_CurOrd", "CA_Approval_S03", null, false);

        		var EmpNo = nexacro.getApplication().gdsUserInfo.getColumn(0,"EMP_NO");
        		var nLineRow = this.dsApprovalLine.findRow("EMP_NO", EmpNo);
        		var sOrd = this.dsApprovalLine.getColumn(nLineRow, "ORD");

        		if(sOrd > this.dsCurOrd.getColumn(this.dsCurOrd.rowposition, "CUR_ORD")) {
        			return;
        		}
        	}

        	if(this.btn_Approval.text==this.gfnGetTransTxt(577,"상신") ||this.btn_Approval.text==this.gfnGetTransTxt(2189,"재상신"))	//상신
        		this.fn_InsertApprovalDoc();
        	else if(this.btn_Approval.text==this.gfnGetTransTxt(2186,"결재취소"))	//결재취소
        		 this.fn_SaveApprovalLine("CANCEL");
        	else											//결재
        	{
        		this.fn_SaveApprovalLine("APPROVAL");
        		//결재의견등록
        		this.fn_SaveApprovalComment();
        	}
        };

        this.btn_Return_onclick = function(obj,e)
        {
        	//반려
        	 this.fn_SaveApprovalLine("RETURN");
        };

        this.div_Approval_btn_Comment_onclick = function(obj,e)
        {
        	//결재의견등록
        	this.fn_SaveApprovalComment();
        };

        this.btn_ReReport_onclick = function(obj,e)
        {
        	if(this.commUtil.gfnGetMobile())
        	{
        		this.alert(this.gfnGetTransTxt(1204,"모바일에서는 사용할수 없는 기능읍니다."));
        	}
        	else if(this.fv_DOC_KIND=="COSTSHEET_1")
        	{
        		this.parent.FV_PROJECT_CODE = this.fv_FILE_SOURCE_SEQ;
        		this.parent.parent.set_height(665);
        		this.parent.parent.set_width(1350);
        		this.commUtil.popupClose("RE_REPORT");
        	}
        };

        this.btn_Preview_onclick = function(obj,e)
        {
        	this.dsPrtApprovalDoc.applyChange();
        	this.dsPrtApprovalLine.applyChange();
        	this.dsPrtApprovalCommnet.applyChange();

        	this.arrInDataSet = this.parent.pv_inDs;
        	this.arrParamData = this.parent.pv_paramDt;
        	this.arrParamData = this.fv_arrParamData;

        	// 결재라인, 결재의견 추가 처리
        	this.arrInDataSet.push(["dsPrtApprovalDoc", this.dsPrtApprovalDoc]);
        	this.arrInDataSet.push(["dsPrtApprovalLine", this.dsPrtApprovalLine]);
        	this.arrInDataSet.push(["dsPrtApprovalCommnet", this.dsPrtApprovalCommnet]);

        	this.gfnPopupReportViewer(this.fv_rptFileNm);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CA_Approval_onload,this);
            this.btn_close.addEventHandler("onclick",this.btn_Close_onclick,this);
            this.div_Approval.form.btn_Comment.addEventHandler("onclick",this.div_Approval_btn_Comment_onclick,this);
            this.btn_Close.addEventHandler("onclick",this.btn_Close_onclick,this);
            this.btn_Return.addEventHandler("onclick",this.btn_Return_onclick,this);
            this.btn_Approval.addEventHandler("onclick",this.btn_Approval_onclick,this);
            this.btn_ReReport.addEventHandler("onclick",this.btn_ReReport_onclick,this);
            this.btn_Preview.addEventHandler("onclick",this.btn_Preview_onclick,this);
        };
        this.loadIncludeScript("CA_Approval.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
