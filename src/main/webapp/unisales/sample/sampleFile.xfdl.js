(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleFile");
            this.set_titletext("파일 up/download");
            if (Form == this.constructor)
            {
                this._setFormPosition(1050,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsList", this);
            obj._setContents("<ColumnInfo><Column id=\"ATTC_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SERV_ATTC_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"ATTC_FILE_SIZE\" type=\"STRING\" size=\"256\"/><Column id=\"ATTC_FILE_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"ATTC_FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"ATTC_FILE_IDX\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsUpload", this);
            obj._setContents("<ColumnInfo><Column id=\"FileName\" type=\"STRING\" size=\"256\"/><Column id=\"Path\" type=\"STRING\" size=\"256\"/><Column id=\"FileSize\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsTest", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/><Column id=\"Column2\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">11</Col><Col id=\"Column1\">AA</Col><Col id=\"Column2\">가나다</Col></Row><Row><Col id=\"Column0\">22</Col><Col id=\"Column1\">BB</Col><Col id=\"Column2\">가A나B</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fdtFile", this);
            obj.set_url("svcUrl::fileDownload.do");
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("futFile", this);
            this.addChild(obj.name, obj);


            obj = new FileDialog("fdgFile", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"54","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            obj.set_visible("true");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","56","-158","185","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch_form_Combo01_innerdataset = new nexacro.NormalDataset("divSearch_form_Combo01_innerdataset", obj);
            divSearch_form_Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_Combo01_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo02","282","-158","185","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch_form_Combo02_innerdataset = new nexacro.NormalDataset("divSearch_form_Combo02_innerdataset", obj);
            divSearch_form_Combo02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_Combo02_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Combo("Combo03","521","-158","184","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_readonly("false");
            var divSearch_form_Combo03_innerdataset = new nexacro.NormalDataset("divSearch_form_Combo03_innerdataset", obj);
            divSearch_form_Combo03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">전체</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">사용</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">미사용</Col></Row></Rows>");
            obj.set_innerdataset(divSearch_form_Combo03_innerdataset);
            obj.set_text("전체");
            obj.set_value("1");
            obj.set_index("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","785","-158","184","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
            obj.set_value("20190308");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"12","48","28","25",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("4");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSearchTitle00","0","12","86","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("5");
            obj.set_text("파일명");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","staSearchTitle00:0","12","140","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("6");
            obj.set_visible("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static04_00",null,"0","20",null,"0","20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W20");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","divSearch:0","342","43",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("파일리스트");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","0","staTitle:0","38.91%",null,null,"0",null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("dsList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"48\"/><Column size=\"400\"/><Column size=\"80\"/></Columns><Rows><Row size=\"37\" band=\"head\"/><Row size=\"37\"/></Rows><Band id=\"head\"><Cell text=\"IDX\"/><Cell col=\"1\" text=\"파일명\"/><Cell col=\"2\" text=\"파일 사이즈\"/></Band><Band id=\"body\"><Cell text=\"bind:ATTC_FILE_IDX\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:ATTC_FILE_NM\"/><Cell col=\"2\" text=\"bind:ATTC_FILE_SIZE\" displaytype=\"number\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle00","grdList:20","divSearch:0",null,"43","200",null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("파일업로드");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Grid("grdUpload","grdList:20","staTitle00:0",null,null,"20","0",null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_binddataset("dsUpload");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"283\"/><Column size=\"48\"/><Column size=\"48\"/></Columns><Rows><Row size=\"37\" band=\"head\"/><Row size=\"37\"/></Rows><Band id=\"head\"><Cell text=\"FileName\"/><Cell col=\"1\" text=\"Size\"/><Cell col=\"2\"/></Band><Band id=\"body\"><Cell text=\"bind:FileName\"/><Cell col=\"1\" text=\"bind:FileSize\"/><Cell col=\"2\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"삭제\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("staHelpMessage","grdList:40","staTitle00:58",null,null,"40","20",null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("마우스로 파일을 끌어오세요");
            obj.set_visible("true");
            obj.set_cssclass("sta_WF_Mes");
            this.addChild(obj.name, obj);

            obj = new Button("btnFileSave",null,null,"95","28","20","grdUpload:5",null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("파일저장");
            obj.set_fittocontents("width");
            obj.set_cssclass("btn_WF_ExcelUp");
            this.addChild(obj.name, obj);

            obj = new Button("btnFileSelect",null,null,"74","28","btnFileSave:5","grdUpload:5",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("파일선택");
            obj.set_visible("true");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1050,736,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.Edit00_00","value","dsSearch","srchCond1");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleFile.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	sampleFile.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2020/11/30
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2020/11/30			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        this.cfnSearch = function ()
        {
        	this.fnSearch();
        };

        this.cfnRefresh = function ()
        {
        	//TODO
        };
        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.fnSearch = function()
        {
        	// DB 저장이 아닌 현재 저장경로에 있는  fileList를 불러옴
        	var strSvcId 	= "searchFileList";
        	var strSvcUrl 	= "searchFileList.do";
        	var inData 		= "inDs=dsSearch";
        	var outData 	= "dsList=outDs";
        	var strArg 		= "";
        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg);
        };


        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "searchFileList":
        			//TODO..
        			this.fnInit();
        			break;
        		default: break;
        	}
        };

        this.fnMsgCallback = function (sMsgId, sRtn)
        {
        	//TODO..
        };

        this.fnFileDialogCallback= function (objDs, objFileDialog, e)
        {
        	//TODO..
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        this.fnInit = function ()
        {
        	this.dsUpload.clearData();
        	this.futFile.clearFileList();

        	this.staHelpMessage.set_visible(true);
        };


        this.fnFileDownload = function (nRow)
        {
        	this.fdtFile.setPostData("filePath"		, this.dsList.getColumn(nRow, "ATTC_FILE_PATH"));
        	this.fdtFile.setPostData("saveFileName"	, this.dsList.getColumn(nRow, "SERV_ATTC_FILE_NM"));
        	this.fdtFile.setPostData("orgFileName"	, this.dsList.getColumn(nRow, "ATTC_FILE_NM"));

        	this.fdtFile.set_downloadfilename( this.dsList.getColumn(nRow, "ATTC_FILE_NM"))
        	this.fdtFile.download("svcUrl::fileDownload.do");
        };

        this.fnFileDialogOpen = function()
        {
        	this.fdgFile.open("file upload..", FileDialog.MULTILOAD);
        };

        this.fnFileUploadTran = function ()
        {
        	// 파일 업로드 시 Dataset 전달 샘플 코드
        	// PostData : Dataset 전달 --------------------------------------- Start
        	var listDs = [];
        		listDs.push(this.dsList);
        		listDs.push(this.dsTest);
        	var dsList = this.fnSerializeXML(listDs);
        	//var dsList = this.fnSerializeSSV(listDs);

        	dsList = encodeURIComponent(dsList);
        	this.futFile.setPostData("infoDatasets", dsList);

        	this.futFile.upload("svcUrl::fileUpload.do");
        };

        this.fnSetFile = function (aVFiles)
        {
        	if (system.navigatorname == "nexacro")
        	{
        		for (var i = 0; i < aVFiles.length; i++)
        		{
        			var vFile = new VirtualFile("vFile"+i);
        			vFile = aVFiles[i];
        			vFile.addEventHandler("onsuccess", function(obj, e) {
        				var nRow = -1;
        				switch (e.reason)
        				{
        					case 1 :	// open
        						obj.getFileSize();
        						break;
        					case 9 :	// getFileSize
        						if (e.filesize > 0)
        						{
        							var nRow = this.dsUpload.addRow();
        							this.dsUpload.setColumn(nRow, "FileName", obj.filename);
        							this.dsUpload.setColumn(nRow, "Path"	, e.fullpath);
        							this.dsUpload.setColumn(nRow, "FileSize", e.filesize);
        							this.futFile.addFile("VFile"+nRow, obj);
        						}
        						obj.close();
        						break;
        				}
        			}, this);

        			vFile.addEventHandler("onerror", function(obj, e) {
        				trace("errortype: "+e.errortype + " , "+ e.errormsg + " , "+  e.statuscode);
        			}, this);

        			vFile.open(null, VirtualFile.openRead);
        		}
        	}
        	else
        	{
        		for (var i = 0; i < aVFiles.length; i++)
        		{
        			this.futFile.addFile("VFile"+i, aVFiles[i]);
        			var nRow = this.dsUpload.addRow();
        			this.dsUpload.setColumn(nRow, "FileName", aVFiles[i].filename);
        			this.dsUpload.setColumn(nRow, "Path"	, aVFiles[i].fullpath);
        			this.dsUpload.setColumn(nRow, "FileSize", aVFiles[i]._handle.size);
        		}
        	}
        };

        // PlatformData 구성 : DataSet XML
        this.fnSerializeXML = function (arrDataset)
        {
        	var depth = 0;
        	var list = [];

        	if (system.navigatorname != "nexacro") {
        		//[START] xml 통신시 아래의 특수문자가 서버쪽 SAX parser 에러가 발생해서 임시 추가함.
        		this.fnWriteData(list, "<?xml version=\"1.0\" encoding=\"UTF-8\"?>", depth);
        		//this._writeData(list, "<!DOCTYPE p_nexacro [ <!ENTITY nbsp '&#160;'> <!ENTITY quot '&#34;'>" +
        		//		" <!ENTITY amp '&#38;'> <!ENTITY lt '&#60;'> <!ENTITY gt '&#62;'> ]>", depth);
        		//[END] xml 통신시 아래의 특수문자가 서버쪽 SAX parser 에러가 발생해서 임시 추가함.

        		this.fnWriteData(list, "<Root xmlns=\"http://www.nexacroplatform.com/platform/dataset\">", depth++);

        		for (var i = 0; i < arrDataset.length; i++) {
        			list.push(arrDataset[i].saveXML(arrDataset.name, "normal", depth, false));
        		}

        		this.fnWriteData(list, "</Root>", --depth);

        		var rtnList = list.join("\n");

        	} else {
        		// 런타임의 경우.......... ???????
        		//[START] xml 통신시 아래의 특수문자가 서버쪽 SAX parser 에러가 발생해서 임시 추가함.
        		this.fnWriteData(list, "<?xml version=\"1.0\" encoding=\"UTF-8\"?>", depth);
        		//this._writeData(list, "<!DOCTYPE p_nexacro [ <!ENTITY nbsp '&#160;'> <!ENTITY quot '&#34;'>" +
        		//		" <!ENTITY amp '&#38;'> <!ENTITY lt '&#60;'> <!ENTITY gt '&#62;'> ]>", depth);
        		//[END] xml 통신시 아래의 특수문자가 서버쪽 SAX parser 에러가 발생해서 임시 추가함.

        		this.fnWriteData(list, "<Root xmlns=\"http://www.nexacroplatform.com/platform/dataset\">", depth++);

        		for (var i = 0; i < arrDataset.length; i++) {
        			list.push(arrDataset[i].saveXML(arrDataset.name, "normal", depth, false));
        		}

        		this.fnWriteData(list, "</Root>", --depth);

        		var rtnList = list.join("\n");
        	}

        	return rtnList;
        };


        // PlatformData 구성 : DataSet
        this._TABS = ["", "\t", "\t\t", "\t\t\t", "\t\t\t\t", "\t\t\t\t\t", "\t\t\t\t\t\t"];
        this.fnWriteData = function (list, str, depth)
        {
        	list[list.length] = this._TABS[depth] + str;
        };

        // PlatformData 구성 : DataSet SSV
        this.fnSerializeSSV = function (arrDataset)
        {
        	var _rs_ = String.fromCharCode(30);
        	var _cs_ = String.fromCharCode(31);

        	var list = [];
        		list.push("SSV:utf-8" + _rs_);

        	// Dataset
        	for (var i = 0; i < arrDataset.length; i++) {
        		list.push(arrDataset[i].saveSSV(arrDataset[i].name, "normal"));
        	}

        	var rtnVal = list.join("");
        	return rtnVal;
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/
        this.grdList_oncelldblclick = function(obj,e)
        {
        	this.fnFileDownload(e.row);
        };

        this.fdtFile_onerror = function(obj,e)
        {
        	trace(e.errormsg + "}}"+ "fdtFile_onerror : " + e.requesturi +"__"+ e.locationuri);
        };

        this.fdtFile_onsuccess = function(obj,e)
        {
        	trace("fdtFile_onsuccess : " + e.targetfullpath);
        };

        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.cfnSearch();
        };

        this.btnFileupload_onclick = function(obj,e)
        {
        	this.fnFileDialogOpen();
        };

        this.btnFileSave_onclick = function(obj,e)
        {
        	this.fnFileUploadTran();
        };


        this.fdgFile_onclose = function(obj,e)
        {
        	if( e.reason == 3 ){
        		this.fnSetFile(e.virtualfiles);
        	}
        };

        this.grdUpload_oncellclick = function(obj,e)
        {
        	if(e.col == 1) {
        		this.futFile.removeFile("VFile"+e.row);
        		this.dsUpload.deleteRow(this.dsUpload.rowposition);
        	}
        };


        this.futFile_onsuccess = function(obj,e)
        {
        	this.futFile.clearFileList();
        	this.dsUpload.clearData();

        	this.cfnSearch();
        };

        this.futFile_onerror = function(obj,e)
        {
        	this.gfnAlert("msg.server.error.msg" ,[e.errormsg]);
        };

        this.grdUpload_ondrop = function(obj,e)
        {
        	if(!this.gfnIsNull(e.filelist)){
        		this.fnSetFile(e.filelist);
        	}
        };

        this.grdUpload_ondragenter = function(obj,e)
        {
        	this.staHelpMessage.set_visible(false);
        };

        this.grdUpload_ondragleave = function(obj,e)
        {
        	if(!this.staHelpMessage.visible && this.dsUpload.getRowCount()==0){
        		this.staHelpMessage.set_visible(true);
        	}else{
        		this.staHelpMessage.set_visible(false);
        	}
        };

        this.dsUpload_onrowsetchanged = function(obj,e)
        {
        	if( obj.rowcount > 0 ){
        		this.staHelpMessage.set_visible(false);
        	}else{
        		this.staHelpMessage.set_visible(true);
        	}
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.grdList.addEventHandler("oncelldblclick",this.grdList_oncelldblclick,this);
            this.grdUpload.addEventHandler("oncellclick",this.grdUpload_oncellclick,this);
            this.grdUpload.addEventHandler("ondrop",this.grdUpload_ondrop,this);
            this.grdUpload.addEventHandler("ondragenter",this.grdUpload_ondragenter,this);
            this.grdUpload.addEventHandler("ondragleave",this.grdUpload_ondragleave,this);
            this.staHelpMessage.addEventHandler("onmouseenter",this.staHelpMessage_onmouseenter,this);
            this.btnFileSave.addEventHandler("onclick",this.btnFileSave_onclick,this);
            this.btnFileSelect.addEventHandler("onclick",this.btnFileupload_onclick,this);
            this.fdtFile.addEventHandler("onerror",this.fdtFile_onerror,this);
            this.fdtFile.addEventHandler("onsuccess",this.fdtFile_onsuccess,this);
            this.futFile.addEventHandler("onsuccess",this.futFile_onsuccess,this);
            this.futFile.addEventHandler("onerror",this.futFile_onerror,this);
            this.fdgFile.addEventHandler("onclose",this.fdgFile_onclose,this);
            this.dsUpload.addEventHandler("onrowsetchanged",this.dsUpload_onrowsetchanged,this);
        };
        this.loadIncludeScript("sampleFile.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
