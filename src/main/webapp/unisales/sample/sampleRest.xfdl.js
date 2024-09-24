(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleRest");
            this.set_titletext("sampleRest");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,736);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new DataObject("dataObjectRest", this);
            this.addChild(obj.name, obj);


            obj = new DataObject("dataObjectTR", this);
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSearch", this);
            obj._setContents("<ColumnInfo><Column id=\"ID\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList4", this);
            obj._setContents("<ColumnInfo><Column id=\"id\" datapath=\"@.id\" type=\"STRING\" size=\"256\"/><Column id=\"name\" datapath=\"@.name\" type=\"STRING\" size=\"256\"/><Column id=\"department\" datapath=\"@.department\" type=\"STRING\" size=\"256\"/><Column id=\"description\" datapath=\"@.description\" type=\"STRING\" size=\"256\"/><Column id=\"test0\" datapath=\"@.test\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsList", this);
            obj.set_binddataobject("dataObjectRest");
            obj.set_dataobjectbindmode("twoway");
            obj.set_dataobjectpath("$.data[*]");
            obj._setContents("<ColumnInfo><Column id=\"ID\" datapath=\"@.ID\" type=\"STRING\" size=\"256\"/><Column id=\"DESCRIPTION\" datapath=\"@.DESCRIPTION\" type=\"STRING\" size=\"256\"/><Column id=\"NAME\" datapath=\"@.NAME\" type=\"STRING\" size=\"256\"/><Column id=\"ROWTYPE\" datapath=\"@.ROWTYPE\" type=\"STRING\" size=\"256\"/><Column id=\"DEPARTMENT\" datapath=\"@.DEPARTMENT\" type=\"STRING\" size=\"256\"/><Column id=\"CHK\" datapath=\"@.CHK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divSearch","0","0",null,"54","20",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_WF_Search");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo01","56","-158","185","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("3");
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
            obj.set_taborder("4");
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
            obj.set_taborder("5");
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
            obj.set_taborder("6");
            obj.set_value("20190308");
            obj.set_dateformat("yyyy-MM-dd ddd");
            obj.set_readonly("false");
            this.divSearch.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"12","48","28","25",null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("2");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            obj.set_visible("true");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSearchTitle00","0","12","74","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("7");
            obj.set_text("아이디");
            obj.set_cssclass("sta_WF_SchLabel");
            obj.set_fittocontents("width");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtId","staSearchTitle00:0","12","140","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("0");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("staSearchTitle01","edtId:0","12","62","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("8");
            obj.set_text("성명");
            obj.set_cssclass("sta_WF_SchLabel");
            this.divSearch.addChild(obj.name, obj);

            obj = new Edit("edtName","staSearchTitle01:0","12","140","28",null,null,null,null,null,null,this.divSearch.form);
            obj.set_taborder("1");
            this.divSearch.addChild(obj.name, obj);

            obj = new Static("Static04_00",null,"0","20",null,"0","20",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("W20");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle","0","54","342","43",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("사용자 정보 조회");
            obj.set_cssclass("sta_WF_Title");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","140","54","30","43",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_GSize");
            obj.set_visible("false");
            obj.set_text("H43");
            this.addChild(obj.name, obj);

            obj = new Grid("grdList","0","97",null,null,"20","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_binddataset("dsList");
            obj.set_autoenter("select");
            obj.set_cellsizingtype("col");
            obj.getSetter("uFunction").set("filterNew,sort");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"84\"/><Column size=\"290\"/><Column size=\"217\"/><Column size=\"229\"/><Column size=\"414\"/></Columns><Rows><Row size=\"37\" band=\"head\"/><Row size=\"37\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"아이디\"/><Cell col=\"2\" text=\"성명\"/><Cell col=\"3\" text=\"부서\"/><Cell col=\"4\" text=\"비고\"/></Band><Band id=\"body\"><Cell edittype=\"checkbox\" displaytype=\"checkboxcontrol\" text=\"bind:CHK\"/><Cell col=\"1\" text=\"bind:ID\" displaytype=\"expr:dataset.getRowType(currow)==&apos;2&apos;?&apos;editcontrol&apos;:&apos;normal&apos;\" edittype=\"expr:dataset.getRowType(currow)==&apos;2&apos;?&apos;text&apos;:&apos;none&apos;\" editautoselect=\"true\"/><Cell col=\"2\" text=\"bind:NAME\" edittype=\"text\" displaytype=\"editcontrol\" editautoselect=\"true\"/><Cell col=\"3\" text=\"bind:DEPARTMENT\" edittype=\"text\" displaytype=\"editcontrol\" editautoselect=\"true\"/><Cell col=\"4\" text=\"bind:DESCRIPTION\" edittype=\"text\" displaytype=\"editcontrol\" editautoselect=\"true\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div00","0","400","487","320",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("div00");
            obj.set_background("pink");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Button("btnSelectTr","13","252","115","65",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("0");
            obj.set_text("select");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btnUpdate","243","253","112","31",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("1");
            obj.set_text("updateSave");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btnDelete","243","285","112","31",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("2");
            obj.set_text("deleteSave");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btnSaveAll","356","252","115","65",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("3");
            obj.set_text("save");
            this.div00.addChild(obj.name, obj);

            obj = new Grid("grdTr","12","49","459","199",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("4");
            obj.set_autofittype("col");
            obj.set_binddataset("dsList4");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"id\"/><Cell col=\"1\" text=\"name\"/><Cell col=\"2\" text=\"department\"/><Cell col=\"3\" text=\"description\"/><Cell col=\"4\" text=\"chk\"/><Cell col=\"5\"/></Band><Band id=\"body\"><Cell text=\"bind:id\" edittype=\"normal\"/><Cell col=\"1\" text=\"bind:name\" edittype=\"normal\"/><Cell col=\"2\" text=\"bind:department\" edittype=\"normal\"/><Cell col=\"3\" text=\"bind:description\" edittype=\"normal\"/><Cell col=\"4\" text=\"bind:chk\" edittype=\"normal\"/><Cell col=\"5\" text=\"expr:dataset.getRowType(currow)\"/></Band></Format></Formats>");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btnAddTr","129","253","112","31",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("5");
            obj.set_text("add");
            this.div00.addChild(obj.name, obj);

            obj = new Button("btnDelTr","129","285","112","31",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("6");
            obj.set_text("delete");
            this.div00.addChild(obj.name, obj);

            obj = new Static("sta00","20","4","202","39",null,null,null,null,null,null,this.div00.form);
            obj.set_taborder("7");
            obj.set_text(" Transaction 방식 TEST");
            this.div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divSearch.form
            obj = new Layout("default","",0,0,this.divSearch.form,function(p){});
            this.divSearch.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div00.form
            obj = new Layout("default","",0,0,this.div00.form,function(p){});
            this.div00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,736,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","divSearch.form.edtId","value","dsSearch","ID");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","divSearch.form.edtName","value","dsSearch","NAME");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleRest.xfdl", function() {
        /**
        *  DevPACK
        *  @FileName 	sampleRest.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2023/04/18
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2023/04/18			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvUrl = "";

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	this.fvUrl = nexacro.getEnvironment().services["svcUrl"].url;
        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/
        //조회
        this.cfnSearch = function()
        {
        	this.fnSearch();
        };

        //추가
        this.cfnAdd = function ()
        {
        	this.dsList.addRow();

        	this.grdList.setCellPos(0);
        	this.grdList.showEditor(true);
        };

        //삭제
        this.cfnDel = function ()
        {
        	var nRow = this.dsList.rowposition;
        	if( nRow<0 ) return;

        	this.dsList.deleteRow(nRow);
        };

        //저장
        this.cfnSave = function ()
        {
        	// 변경된 정보없으면 리턴
        	if (this.gfnDsIsUpdated(this.dsList) == false) {
        		// 저장할 데이터가 없습니다.
        		this.gfnAlert("msg.save.nochange");
        		return;
        	}

        	// validation 체크 후
        	if (this.fnValidation()) {
        		// 서버 중복 체크
        		this.gfnAlert("confirm.save", [""], "save", "fnMsgCallback");
        	}
        };

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        //조회
        this.fnSearch = function ()
        {
        	var objData = this.gfnDataset2JSON(this.dsSearch, 0);

        	var sParam = this.fnMakeParam(objData);

        	var param = {
        		'httpheader' : this.gfnGetHeaders(),
        	}

        	this.dataObjectRest.request("SEARCH", "GET", this.fvUrl + "rest/emp/select.do" + sParam, param);
        };

        //저장
        this.fnSave = function ()
        {
        	this.dsList.applyChange();	//dataObjectRest_ondatachanged 발생
        };

        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //message
        this.fnMsgCallback = function (sMsgId, sRtn)
        {
        	if (sMsgId == "save")
        	{
        		if (sRtn)
        		{
        			this.fnSave();
        		}
        	}
        	else if ( sMsgId=="validId")
        	{
        		this.dsList.setColumn(this.dsList.rowposition, "ID", "");
        		this.grdList.setCellPos(0);
        		this.grdList.showEditor(true);
        	}
        };

        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        //정합성체크
        this.fnValidation = function ()
        {
        	// 정합성 체크
        	this.gfnClearValidation(this.dsList);

        	this.gfnSetValidation(this.dsList, "ID"	   , "아이디"	, "required");
        	this.gfnSetValidation(this.dsList, "NAME"  , "이름"		, "required");

         	// Dataset의 변경된 Row Validation check
          	if (this.gfnValidation(this.grdList, "U") == false) return false;

        	return true;
        };

        //GET방식 파라미터 생성
        this.fnMakeParam = function(objData)
        {
        	var strParams = this.gfnToQueryString(objData);

        	if (!this.gfnIsNull(strParams))
        	{
        		return '?' + strParams;
        	}

        	return;
        }

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/

        this.divSearch_btnSearch_onclick = function(obj,e)
        {
        	this.cfnSearch();
        };

        //ID중복체크
        this.dsList_cancolumnchange = function(obj,e)
        {
        	if ( e.columnid=="ID")
        	{
        		if(this.gfnIsNull(e.newvalue)) return;

        		var nRow = this.dsList.findRow("ID", e.newvalue);
        		if( nRow > -1)
        		{
        			this.gfnAlert("msg.exist", ["입력하신 아이디"],"validId","fnMsgCallback");
        			return;
        		}
        	}
        };

        this.dataObjectRest_onload = function(obj,e)
        {
        //	trace("dataObjectRest_onload");
        };

        this.dataObjectRest_onsuccess = function(obj,e)
        {
        	if (e.statuscode == 200 && e.method == "GET")
        	{
             //   trace("dataObjectRest_onsuccess:"+ obj.getAllResponseHeaders())
        	}
            else
            {
                e.preventDefault();
        		trace("dataObjectRest_onsuccess " + e.serviceid + " : " + e.statuscode);
            }
        };

        this.dataObjectRest_onerror = function(obj,e)
        {
        	trace("dataObjectRest_onerror " + e.statuscode +":"+e.errormsg);
        };

        this.dataObjectRest_ondatachanged = function(obj,e)
        {
        	trace("dataObjectRest_ondatachanged >> ");

        	var updatelist = e.infoarray;
        	for (var i = 0; i < updatelist.length; i++)
        	{
        		var item = updatelist[i];
        		var uid = item.uid;
        		var method = (item.type == "add") ? "POST" : (item.type == "update") ? "PUT" : "DELETE";
        		var senddata = JSON.stringify(item.data);
        		var id = item.data.id;
        		var param = {
        			'httpheader' : this.gfnGetHeaders(),
        			'postdata' : senddata
        		}

        		// request
        		if (method == "POST")
        			this.dataObjectRest.request(uid, method, this.fvUrl + "rest/emp/create.do", param);
        		else if (method == "PUT")
        			this.dataObjectRest.request(uid, method, this.fvUrl + "rest/emp/update.do", param);
        		else
        			this.dataObjectRest.request(uid, method, this.fvUrl + "rest/emp/delete/"+id+".do");
        	}
        };

        this.dataObjectRest_onvaluechanged = function(obj,e)
        {
        	trace("dataObjectRest_onvaluechanged >> ");
        	/*
        	var uid = e.uid;
        	var method = "PUT";

        	var objddata = {};
        	objddata["id"] = obj.getObjectByPath(e.dataobjectpath)[e.index]["id"];
        	objddata["name"] = obj.getObjectByPath(e.dataobjectpath)[e.index]["name"];
        	objddata["department"] = obj.getObjectByPath(e.dataobjectpath)[e.index]["department"];
        	objddata["description"] = obj.getObjectByPath(e.dataobjectpath)[e.index]["description"];
        //	objddata[e.key] = e.value;	// changed column

        	var senddata = JSON.stringify(objddata);

            var param = {
        		'httpheader' : this.gfnGetHeaders(),
        		'postdata' : senddata
        	}

        	this.dataObjectRest.request(uid, method, this.fvUrl + "rest/emp/update", param);
        	*/
        };

        //////////////////////////////////////////////////////////////////////////////////////트랜잭션 스타일 시작

        this.btnSelectTr_onclick = function(obj,e)
        {
        	this.fnSearchRest();
        };

        this.btnUpdate_onclick = function(obj,e)
        {
        	var nRow = this.dsList4.rowposition;
        	var objData = this.gfnDataset2JSON(this.dsList4, nRow);

        	switch(this.dsList4.getRowType(nRow))
        	{
        		case Dataset.ROWTYPE_INSERT :
        			this.fnCreateList(objData);
        			break;
        		case Dataset.ROWTYPE_UPDATE :
        			this.fnUpdateList(objData);
        			break;
        	}
        };

        this.btnDelete_onclick = function(obj,e)
        {
        	this.fnDeleteList(this.dsList4);
        };

        this.btnSaveAll_onclick = function(obj,e)
        {
        	var objDs = this.dsList4;
        	// 리스트 생성
        	var arrData = new Array();
        	arrData = this.gfnDataset2JSONList(objDs, "U");

        	if (arrData.length == 0)
        	{
        		alert("수정된 데이터가 없습니다.");
        		return;
        	}

        	this.fn_save(arrData, objDs);
        };

        this.btnAddTr_onclick = function(obj,e)
        {
        	this.dsList4.addRow();
        };

        this.btnDelTr_onclick = function(obj,e)
        {
        	this.dsList4.deleteRow(this.dsList4.rowposition);
        };

        this.fnSearchRest = function ()
        {
        	var strUrl = 'rest/emp/select.do';
        	var objData = this.gfnDataset2JSON(this.dsSearch, 0);

        	var objReqData = {
        						"serviceid"	: "select",
        						"dataobject" : this.dataObjectTR,
        						"method"	: "GET",
        						"requesturl" : strUrl,
        						"postdata" : objData
        	}

        	this.gfnRequestDataObject(this, objReqData, function(strSvcId, nErrorCode, objResolveData) {
         		var strRequestUrl = objResolveData["url"];
         		var strStatusCode = objResolveData["status"];
         		var objResponseData = objResolveData["data"];

        		if (nErrorCode < 0)
        		{
        			return;
        		}

        		this.gfnObject2Dataset(objResolveData["data"].data, this.dsList4);
        	});
        }

        this.fnCreateList = function(objData)
        {
        	var strUrl = 'rest/emp/create.do';

        	var objReqData = {
        						"serviceid"	: "create",
        						"dataobject" : this.dataObjectTR,
        						"method"	: "POST",
        						"requesturl" : strUrl,
        						"postdata" : objData
        	}

        	this.gfnRequestDataObject(this, objReqData, "fnCallbackDataObject");
        }

        this.fnUpdateList = function(objData)
        {
        	var strUrl = 'rest/emp/update.do';

        	var objReqData = {
        						"serviceid"	: "update",
        						"dataobject" : this.dataObjectTR,
        						"method"	: "PUT",
        						"requesturl" : strUrl,
        						"postdata" : objData
        	}

        	this.gfnRequestDataObject(this, objReqData, "fnCallbackDataObject");
        }

        this.fnDeleteList = function(objDs)
        {
        	var sId = objDs.getColumn(objDs.rowposition, "id");
        	var strUrl = 'rest/emp/delete/'+ sId + '.do';

        	var objReqData = {
        						"serviceid"	: "delete",
        						"dataobject" : this.dataObjectTR,
        						"method"	: "DELETE",
        						"requesturl" : strUrl
        	}

        	this.gfnRequestDataObject(this, objReqData, function(strSvcId, nErrorCode, objResolveData) {
        		var strRequestUrl = objResolveData["url"];
        		var strStatusCode = objResolveData["status"];
        		var objResponseData = objResolveData["data"];

        		if (nErrorCode < 0)
        		{
        			return;
        		}
        		this.alert("저장완료");
        		objDs.deleteRow(objDs.rowposition);
        		objDs.applyChange();
        	});
        }

        this.fnSave = function(arrData, objDs)
        {
        	var strUrl = "rest/emp/save.do";
        	var objReqData = {
        						"serviceid"	: "save",
        						"dataobject" : this.dataObjectTR,
        						"method"	: "PUT",
        						"requesturl" : strUrl,
        						"postdata" : arrData
        	};

        	this.gfnRequestDataObject(this, objReqData, function(strSvcId, nErrorCode, objResolveData) {

        		if (nErrorCode < 0)
        		{
        			return;
        		}
        		else
        		{
        			this.alert("저장완료");
        			this.fnSearchRest();
        		}
        	});
        }


        this.fnCallbackDataObject = function(strSvcId, nErrorCode, objResolveData)
        {
        	trace(strSvcId + " , " + nErrorCode );
        //	trace(objResolveData);
        	this.fnSearchRest();
        }

        ////////////////////////////////////////////////////////////////////////////////////// 트랜잭션 스타일 끝

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.divSearch.form.btnSearch.addEventHandler("onclick",this.divSearch_btnSearch_onclick,this);
            this.div00.form.btnSelectTr.addEventHandler("onclick",this.btnSelectTr_onclick,this);
            this.div00.form.btnUpdate.addEventHandler("onclick",this.btnUpdate_onclick,this);
            this.div00.form.btnDelete.addEventHandler("onclick",this.btnDelete_onclick,this);
            this.div00.form.btnSaveAll.addEventHandler("onclick",this.btnSaveAll_onclick,this);
            this.div00.form.btnAddTr.addEventHandler("onclick",this.btnAddTr_onclick,this);
            this.div00.form.btnDelTr.addEventHandler("onclick",this.btnDelTr_onclick,this);
            this.dataObjectRest.addEventHandler("onload",this.dataObjectRest_onload,this);
            this.dataObjectRest.addEventHandler("onsuccess",this.dataObjectRest_onsuccess,this);
            this.dataObjectRest.addEventHandler("onerror",this.dataObjectRest_onerror,this);
            this.dataObjectRest.addEventHandler("ondatachanged",this.dataObjectRest_ondatachanged,this);
            this.dataObjectRest.addEventHandler("onvaluechanged",this.dataObjectRest_onvaluechanged,this);
            this.dsSearch.addEventHandler("oncolumnchanged",this.dsSearch_oncolumnchanged,this);
            this.dsList.addEventHandler("cancolumnchange",this.dsList_cancolumnchange,this);
        };
        this.loadIncludeScript("sampleRest.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
