//==============================================================================
//
//  TOBESOFT Co., Ltd.
//  Copyright 2017 TOBESOFT Co., Ltd.
//  All Rights Reserved.
//
//  NOTICE: TOBESOFT permits you to use, modify, and distribute this file 
//          in accordance with the terms of the license agreement accompanying it.
//
//  Readme URL: http://www.nexacro.co.kr/legal/nexacro17-public-license-readme-1.0.html
//
//==============================================================================
if (!nexacro.ExcelExportObjectJS) {

    nexacro.ExportItemTypes.DATASET = 77;
    nexacro.ExportItemTypes.DATASETXML = 78;
	
	nexacro.ExportTypes = 
		{
		EXCEL : 0x0100, 
		EXCEL97 : 0x0110, 
		EXCEL2007 : 0x0120, 
		HANCELL2010 : 0x0400, 
		HANCELL2014 : 0x0410, 
		CSV : 0x0500
	};	
	
	nexacro.ExcelExportProgressEventInfoEx = function (obj, id, itemindex, itemtype, recordindex, errorobj) {
		this.id = this.eventid = id || "onprogress";
		this.fromobject = obj;
		this.fromreferenceobject = errorobj;

		this.itemindex = itemindex;
		this.itemtype = itemtype;
		this.recordindex = recordindex;
	};
	var _pExportEventInfo = nexacro._createPrototype(nexacro.Event, nexacro.ExcelExportProgressEventInfoEx);
	nexacro.ExcelExportProgressEventInfoEx.prototype = _pExportEventInfo;
	_pExportEventInfo._type_name = "ExcelExportProgressEventInfoEx";
	delete _pExportEventInfo;

	nexacro.ExcelExportEventInfoEx = function (obj, id, url, errorobj) {
		this.id = this.eventid = id || "onsuccess";
		this.fromobject = obj;
		this.fromreferenceobject = errorobj;

		this.url = url;
	};
	var _pExcelExportEventInfoEx = nexacro._createPrototype(nexacro.Event, nexacro.ExcelExportEventInfoEx);
	nexacro.ExcelExportEventInfoEx.prototype = _pExcelExportEventInfoEx;
	_pExcelExportEventInfoEx._type_name = "ExcelExportEventInfoEx";
	delete _pExcelExportEventInfoEx;

	nexacro.ExcelExportErrorEventInfoEx = function (obj, id, errortype, errormsg, errorobj, statuscode) {
		this.id = this.eventid = id || "onerror";
		this.fromobject = obj;
		this.fromreferenceobject = errorobj;

		this.errortype = errortype;
		this.errormsg = errormsg;
		this.statuscode = statuscode;
	};
	var _pExportErrorEventInfo = nexacro._createPrototype(nexacro.ErrorEventInfo, nexacro.ExcelExportErrorEventInfoEx);
	nexacro.ExcelExportErrorEventInfoEx.prototype = _pExportErrorEventInfo;
	_pExportErrorEventInfo._type_name = "ExcelExportErrorEventInfoEx";
	delete _pExportErrorEventInfo;

	nexacro.ExcelExportObjectJS = function (name, parent) {
		if (!parent) {
			var app = nexacro.getApplication();
			if (app) {
				parent = app.getActiveForm();
				if (!parent) {
					var currwin = app.mainframe._window;
					var cur_focus_paths = currwin.getCurrentFocusPaths();
					var cur_focus_paths_len = (cur_focus_paths ? cur_focus_paths.length : 0);
					for (var i = 0; i < cur_focus_paths_len; i++) {
						var _comp = cur_focus_paths[i];
						if (!_comp) {
							continue;
						}
						if (_comp._is_form) {
							parent = _comp;
							break;
						}
					}
				}
			}
		}
		this.parent = parent;
		if(!name) name = parent.name + "_ExportEx_"; 
		this.id = this.name = name;
		
		this._grids = [];
		this._dataset = [];
		this._xml = [];
		
		this.ODSInfo = {
								"NUMSTYLE" : [],
								"STYLE" : []
						};		
		this.JSExcel = 
		{
			exportBar 		: null,
			activeSheetName : null,
			progressvalue	: 0,
			dummyid		: null
		};						

		this.onsuccess = new nexacro.EventListener("onsuccess");
		this.onprogress = new nexacro.EventListener("onprogress");
		this.onerror = new nexacro.EventListener("onerror");
		
		this.deleteDatasetGrid();
	};

	var _pExcelExport = nexacro.ExcelExportObjectJS.prototype = nexacro._createPrototype(nexacro._EventSinkObject, nexacro.ExcelExportObjectJS);
	_pExcelExport._type_name = "ExportObjectJS";

	_pExcelExport.activepagename = "";
	_pExcelExport.exportactivemode = "active";
	_pExcelExport.exporteventtype = "itemrecord";
	_pExcelExport.exportfilepath = null;
	_pExcelExport.exportfilename = "";

	_pExcelExport.exportmessagealert = "";
	_pExcelExport.exportmessagecomplete = "";
	_pExcelExport.exportmessageprocess = "";
	_pExcelExport.exportmessageready = "";

	_pExcelExport.exportopenmode = "noopen";

	_pExcelExport._exporttype = nexacro.ExportTypes.EXCEL2007;
	_pExcelExport.exporttype = nexacro.ExportTypes.EXCEL2007;
	_pExcelExport.exportuitype = "none";

	_pExcelExport.templatefilename = "";
	_pExcelExport.commdataformat = "";

	_pExcelExport.commcompress = "none";
	_pExcelExport.exporturl = "";

	_pExcelExport._exportuitype = 0;
	_pExcelExport._exporturl = "";
	_pExcelExport._commcompress = false;
	_pExcelExport._commdataformat = 2;

	_pExcelExport._allRowCount = 0;
	_pExcelExport._progress_pos = 0;
	_pExcelExport._uniqueIndex = 0;
	_pExcelExport._fileURL = "";
	_pExcelExport._itemsIndex = 0;

	_pExcelExport._argsParam = null;
	_pExcelExport._argsDsParam = null;
	_pExcelExport._is_orgval = false;
	_pExcelExport._file_password = null;

	_pExcelExport._exportBar = null;
	_pExcelExport._tempSaveMethod = null;
	_pExcelExport.isodsformat = false;
	_pExcelExport.iscsvformat = false;
	_pExcelExport.version = "2019.6.30.1";


	_pExcelExport.excelTypeTable = 
		{
		EXCEL : 0x0100, 
		EXCEL97 : 0x0110, 
		EXCEL2007 : 0x0120, 
		HANCELL2010 : 0x0400, 
		HANCELL2014 : 0x0410, 
		CSV : 0x0500, 
		256 : 0x0100, 
		272 : 0x0110, 
		288 : 0x0120, 
		1024 : 0x0400, 
		1040 : 0x0410, 
		1280 : 0x0500
	};
	
	// LIB ---------------------------------------------

	
	_pExcelExport.destroy = function () {
		
		this.deleteDatasetGrid();
		
		var exportbar = this._exportBar;
		if (exportbar) {
			exportbar.destroy();
		}
		if(this._grids) {
			for (var i = 0, len = this._grids.length; i < len; i++) {
				var item = this._grids.pop();
				if (item) {
					if(item.WorkSheet) {
						item.WorkSheet.wInfo = null;
						item.WorkSheet.hInfo = null;
						item.WorkSheet.mInfo = null;
						item.WorkSheet.ws = null;
						item.WorkSheet.rangeobj = null;
						item.WorkSheet = null;
					}
					item._stylecache = null;
					item._clear();
					item = null;
				}
			}
		}
		this.clearEventHandler("onsuccess");
		this.clearEventHandler("onprogress");
		this.clearEventHandler("onerror");

		this._itemcount = this._curritemindex = null;
		if(this.Workbook) {
			this.Workbook.SheetNames = this.Workbook.Sheets = null;
			this.Workbook = null;
		}
		
		this._grids = null;
		this._dataset = null;
		this._grids = null;
		this._dataset = null;
		this.ODSInfo = null;

		this._excel_suppress_info = null;
		this._merge_datas = null;
		this._xml.length = 0;
		
		this.JSExcel = null;

		if (this.parent) {
			this.parent.removeChild(this.id);
		}
		nexacro._EventSinkObject.prototype.destroy.call(this);
		this.onprogress = this.onerror = this.onsuccess = null;
		
		return true;
	};

	_pExcelExport._event_list = 
		{
		"onsuccess" : 1, 
		"onerror" : 1, 
		"onprogress" : 1
	};
		
	_pExcelExport.on_created = nexacro._emptyFn;
	_pExcelExport.set_templatefilename = function (v) {
		if (v != this.templatefilename) {
			this.templatefilename = v;
		}
		return v;
	};

	_pExcelExport.set_commdataformat = function (v) {
		return false;
	};

	_pExcelExport.set_commcompress = function (v) {
		return false;
	};

	_pExcelExport.set_exporturl = function (v) {
		return false;
	};

	_pExcelExport.set_exporttype = function (v) {
		if (v != this.exporttype) {
			this.exporttype = v;
			var export_type = this.excelTypeTable[(v + "").toUpperCase()];
			if (!export_type) {
				export_type = 256;
			}
			this._exporttype = export_type;
		}
		return v;
	};

	_pExcelExport.set_activepagename = function (v) {
		if (v != this.activepagename) {
			this.activepagename = v;
		}
		return v;
	};

	_pExcelExport.set_exportactivemode = function (v) {
		if (v != this.exportactivemode) {
			this.exportactivemode = v;
		}
		return v;
	};

	_pExcelExport.set_exporteventtype = function (v) {
		if (v != this.exporteventtype) {
			this.exporteventtype = v;
		}
		return v;
	};

	_pExcelExport.set_exportopenmode = function (v) {
		if (v != this.exportopenmode) {
			this.exportopenmode = v;
		}
		return v;
	};
	_pExcelExport.set_exportfilepath = function (v) {
		if(nexacro._Browser != "Runtime") return;
		
		if (v != this.exportfilepath) {
			var special_xmlchar = /[&"'\<\>\r\n\t\\\/]/g;
			if (v) {
				v.match(special_xmlchar);
			}
			this.exportfilepath = v;
		}
		return v;
	};
	_pExcelExport.set_exportfilename = function (v) {
		if (v != this.exportfilename) {
			var special_xmlchar = /[&"'\<\>\r\n\t\\\/]/g;
			if (v) {
				v.match(special_xmlchar);
			}
			if(v.indexOf("\\")>=0) {
				var i = v.lastIndexOf("\\");
				this.exportfilepath = v.substring(0,i) + "\\";
				this.exportfilename = v.substring(i+1);
			} else {
				this.exportfilepath = null;
				this.exportfilename = v;
			}
			this.isodsformat = false;
			this.iscsvformat = false;
			var arrFileName = this.exportfilename.split(".");
			if(arrFileName[1] && arrFileName[1].toLowerCase() == "ods") 
			{
				this.isodsformat = true;
			} else if(arrFileName[1] && arrFileName[1].toLowerCase() == "csv") {
				this.iscsvformat = true;
			}
		}
		return v;
	};

	_pExcelExport.set_exportmessagealert = function (v) {
		if (v != this.exportmessagealert) {
			this.exportmessagealert = v;
		}
		return v;
	};

	_pExcelExport.set_exportuitype = function (v) {
		if (v != this.exportuitype) {
			this.exportuitype = v;
			switch (v) {
				case "exportprogress":
					this._exportuitype = 1;
					break;
				case "statusbar":
					this._exportuitype = 2;
					break;
				default:
					this._exportuitype = 0;
					break;
			}
		}
		return v;
	};

	_pExcelExport.set_exportmessageready = function (v) {
		if (v != this.exportmessageready) {
			this.exportmessageready = v;
		}

		return v;
	};

	_pExcelExport.set_exportmessageprocess = function (v) {
		if (v != this.exportmessageprocess) {
			this.exportmessageprocess = v;
		}

		return v;
	};

	_pExcelExport.set_exportmessagecomplete = function (v) {
		if (v != this.exportmessagecomplete) {
			this.exportmessagecomplete = v;
		}

		return v;
	};
    _pExcelExport.set_activeSheetName = function(v) {
        this.JSExcel.activeSheetName = v;
    };

    _pExcelExport.set_progressvalue = function(v) {
        this.JSExcel.progressvalue = v;
    };
	
   _pExcelExport.deleteDatasetGrid = function() {
	   if(!this.JSExcel) return;
	   var grd = this.JSExcel.dummyid;
		if (grd) {
			var form = this._getForm();
			for (var i = 0; i < grd.length; i++) {
				var id = "exportds" + grd[i];
				var comp = form.components[id];
				if (comp) {
					try {
						comp.clear();
						form.removeChild(comp);
						comp.destroy();
					} catch (e) {
					}
					comp = null
				}
				id = "exportgrd" + grd[i];
				comp = form.components[id];
				if (comp) {
					try {
						form.removeChild(comp);
						comp.destroy();
					} catch (e) {

					}
					comp = null;
				}
			}
			form = null;
		}
		grd = this.JSExcel.dummyid = null;
	};
	
    _pExcelExport.removeDatasetGrid = function(eitem, type) {
        var oDs = eitem.source._binddataset;
        var oGrd = eitem.source;
        var form = this._getForm();
        try {
            if (type == nexacro.ExportItemTypes.DATASETXML) {
                form.removeChild(oDs.name);
                oDs.destroy();
            }
            form.removeChild(oGrd.name);
            oGrd.destroy();
        } catch (e) {
        } finally {
			oGrd = oDs = form = null;
		}
    };

    _pExcelExport.makeDatasetGrid = function(type, item) {
        var form = this._getForm();
        var uid = 'xxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
        if (type == nexacro.ExportItemTypes.DATASETXML) {
            var ds = new Dataset;
            form.addChild("exportds" + uid, ds);
            ds.name = "exportds" + uid;
            ds.loadXML(item);
            item = ds;
        }
        var objGrid = new Grid();
        var sgrdid = "exportgrd" + uid;
        objGrid.init(sgrdid, 0, 0, 0, 0, null, null);
        objGrid.set_visible(false);
        form.addChild(sgrdid, objGrid);
        objGrid.show();
        objGrid.set_binddataset(item.name);
        objGrid.createFormat();
        if (!this.JSExcel.dummyid) this.JSExcel.dummyid = [];
        this.JSExcel.dummyid[this.JSExcel.dummyid.length] = uid;

        item = objGrid;
		/*
        for (var i = 0; i < objGrid.getCellCount("Body"); i++) {
            objGrid.setCellProperty("Body", i, "displaytype", "text");
        }
		*/
        return item;
    };

	_pExcelExport.addExportItem = function (type, item) {
		var size = -1;
		var eItem;
		if (arguments.length == 2) {
			if (type && item && item instanceof nexacro.ExportItemEx) {
				eItem = item;
				eItem.parent = this;
				eItem._setEventHandler("onprogress", this.on_notify_onprogress, this);
				eItem._setEventHandler("onsuccess", this.on_notify_onsuccess, this);
				eItem._setEventHandler("onerror", this.on_notify_onerror, this);
			} else {
				return -1;
			}
		} else {
            if (type == nexacro.ExportItemTypes.DATASET || type == nexacro.ExportItemTypes.DATASETXML) {
                if ((type == nexacro.ExportItemTypes.DATASET) && item._type_name != "Dataset") {
                    trace("Dataset not found : " + item);
                    this.deleteDatasetGrid();
                    return -1;
                }
                if ((type == nexacro.ExportItemTypes.DATASETXML) && typeof item != "string") {
                    trace("DATASETXML Error : " + item);
                    this.deleteDatasetGrid();
                    return -1;
                }
                item = this.makeDatasetGrid(type, item);
                type = nexacro.ExportItemTypes.GRID;
            }
			if (type && item && type == this._getItemType(item)) {
				eItem = new nexacro.ExportItemEx(this.id + "item" + this._uniqueIndex++, this);

				eItem._setEventHandler("onprogress", this.on_notify_onprogress, this);
				eItem._setEventHandler("onsuccess", this.on_notify_onsuccess, this);
				eItem._setEventHandler("onerror", this.on_notify_onerror, this);

				var len = arguments.length;
				switch (len) {
					case 11:
					case 10:
						arguments[9] && eItem.set_exportsize(arguments[9]);
					case 9:
						arguments[8] && eItem.set_exceptstyle(arguments[8]);
					case 8:
						arguments[7] && eItem.set_exportimage(arguments[7]);
					case 7:
						arguments[6] && eItem.set_exportvalue(arguments[6]);
					case 6:
						arguments[5] && eItem.set_exportmerge(arguments[5]);
					/*
					case 5:
						arguments[4] && eItem.set_exportselect(arguments[4]);
					*/	
					case 5:
						arguments[4] && eItem.set_exportfomular(arguments[4]);
					case 4:
						arguments[3] && eItem.set_exporthead(arguments[3]);
					case 3:
						arguments[2] && eItem.set_range(arguments[2]);
					case 2:
                        if ((type == nexacro.ExportItemTypes.DATASET) && item._type_name != "Dataset") {
                            arguments[1] && eItem["set_source"](item);
                        } else {
                            arguments[1] && eItem["set_source"](arguments[1]);
                        }						
						break;
				}
			} else {
				return -1;
			}
		}
		switch (type) {
			case nexacro.ExportItemTypes.GRID:
				eItem.set_type(type);
				size = this._grids.push(eItem) - 1;
				break;
			default :
		}
		return size;
	};

	_pExcelExport.clear = function () {
		
		this.deleteDatasetGrid();
		
		var count = 0;

		count += this._grids.length;
		count += this._dataset.length;
		count += this._xml.length;

		for (var i = 0, len = this._grids.length; i < len; i++) {
			var item = this._grids.pop();
			if (item) {
				item._clear();
				item = null;
			}
		}
		this._grids = [];
		this._dataset = [];
		this._xml = [];
		
		this.JSExcel.dummyid = null;

		return count;
	};

	_pExcelExport.count = function () {
		var count = 0;

		count += this._grids.length;
		count += this._dataset.length;
		count += this._xml.length;

		return count;
	};

	_pExcelExport.exportData = function (argsParam, argsDsParam, bOrgValue) {
		if(!this.onsuccess) this.onsuccess = new nexacro.EventListener("onsuccess");
		if(!this.onprogress) this.onprogress = new nexacro.EventListener("onprogress");
		if(!this.onerror) this.onerror = new nexacro.EventListener("onerror");
		
		//try {
			var exporttype = this.exporttype;
			if (exporttype != 0x0100 && exporttype != 0x0110 && exporttype != 0x0120) {
				return ret;
			}
			this._argsParam = argsParam;
			this._argsDsParam = argsDsParam;
			this._is_orgval = bOrgValue ? true : false;
			var i;
			if (argsParam) {
				this._file_password = null;
				var userDatas = argsParam.split(",");
				for (i = 0, u_len = userDatas.length; i < u_len; i++) {
					var dataArr = userDatas[i].split("=");
					if (dataArr[0] == "filepassword") {
						this._file_password = dataArr[1];
						userDatas.splice(i, 1);
						argsParam = userDatas.join(",");
						break;
					}
					else if (dataArr[0] == "wraptext") {
						this._wrap_text = nexacro._toBoolean(dataArr[1]);
						userDatas.splice(i, 1);
					}
					else if (dataArr[0] == "contenttype") {
						var datatype = dataArr[1].toLowerCase();
						if (datatype == "csv") {
							this._commdataformat = 3;
						}
						else {
							this._commdataformat = 2;
						}
					}
				}
				argsParam = userDatas.join(",");
				this._argsParam = argsParam;
			}

			var ret = -1;
			var grid_items = this._grids;
			this._itemcount = grid_items.length;
			if (this._itemcount > 0 && this.exportmessagealert != "") {
				alert(this.exportmessagealert);
			} else if(this._itemcount == 0) {
				this.on_fire_onerror(this, "SAVE", "Save Error[C]: Grid is null", -1);	
				if(this.Workbook) {
					this.Workbook.SheetNames = this.Workbook.Sheets = null;
					this.Workbook = null;
				}
				return;
			}
			this._curritemindex = 0;
			//this.Workbook = new Workbook();
			this.Workbook = {
								SheetNames: [],
								Sheets: {}
							};
			grid_items[this._curritemindex]._itemidx = this._curritemindex;
			grid_items[this._curritemindex]._gridItemExport(this, this._curritemindex);
// 		} catch (e) {
// 			this.on_fire_onerror(this, "SAVE", "Save Error[B]:" + e.message, -1);	
// 			if(this._exportBar) {
// 				this._exportBar._hide();
// 				this._exportBar._set_pos(0);
// 				this._exportBar._set_text("");
// 			}
// 			if(this.Workbook) {
// 				this.Workbook.SheetNames = this.Workbook.Sheets = null;
// 				this.Workbook = null;
// 			}
// 		}
	};

	_pExcelExport.exportSaveEnd = function (code,msg) {

		if(this._exportBar) {
			this._exportBar._hide();
			this._exportBar._set_pos(0);
			this._exportBar._set_text("");				
		}
		var grid_items = this._grids;
		for(var i=0;i<grid_items.length;i++) {
			grid_items[i].WorkSheet.wInfo = null;
			grid_items[i].WorkSheet.hInfo = null;
			grid_items[i].WorkSheet.mInfo = null;
			grid_items[i].WorkSheet.ws = null;
			grid_items[i].WorkSheet.rangeobj = null;
			grid_items[i].WorkSheet = null;
		}
		this._itemcount = this._curritemindex = null;
		this.Workbook.SheetNames = this.Workbook.Sheets = null;
		this.Workbook = null;			
		
		if(code == 0) {
			this.on_fire_onsuccess(this, this.exportfilename);
		} else {
			this.on_fire_onerror(this, "SAVE", "Save Error[C]:" + msg, -1);	
		}
	};
	
	_pExcelExport.exportDataContinue = function () {
		//try {
			var grid_items = this._grids;
			var item = grid_items[this._curritemindex];
			if(item) {
				var SheetIdx = this.Workbook.SheetNames.length;
				if(this.Workbook.SheetNames.length > 0) {
					for(var xx=0;xx<this.Workbook.SheetNames.length;xx++) {
						if(this.Workbook.SheetNames[xx] == item.WorkSheet.sheetName) {
							SheetIdx = xx;
							break;
						}
					}
				}
				//this.Workbook.SheetNames[this.Workbook.SheetNames.length] = item.WorkSheet.sheetName;
				this.Workbook.SheetNames[SheetIdx] = item.WorkSheet.sheetName;
				this.Workbook.Sheets[item.WorkSheet.sheetName] = item.WorkSheet.ws;
				
				if(this.iscsvformat)
				{
					//var ws = this.Workbook.Sheets[item.WorkSheet.sheetName];
					//var csv = XLSX.utils.sheet_to_csv(ws);
					//XLSX.utils.book_append_sheet(this.Workbook, ws, item.WorkSheet.sheetName);
				}
			}
			this._curritemindex++;
			if(this._itemcount > this._curritemindex) {
				grid_items[this._curritemindex]._itemidx = this._curritemindex;
				grid_items[this._curritemindex]._gridItemExport(this, this._curritemindex);
				return;
			}
			var xlsfilename = this.exportfilename.split(".")[0];
			var extentionname = this.exportfilename.split(".")[1];
			if(extentionname.toLowerCase() != "ods" && extentionname.toLowerCase() != "csv") extentionname = "xlsx";
			var	wbout;
			if(extentionname.toLowerCase() == "ods") {
				this.Workbook.ODSNUMSTYLE = this.ODSInfo.NUMSTYLE;
				this.Workbook.ODSSTYLE = this.ODSInfo.STYLE;
				wbout = XLSX.write(this.Workbook, {bookType:extentionname, bookSST:false, cellNF:true, cellStyles:true, type: 'binary', compression : true });
			} else {
				if(extentionname.toLowerCase() == "csv") {
					wbout = XLSX.writeFile(this.Workbook, this.exportfilename, { bookType: "csv" });
				} else {
					wbout = XLSX.write(this.Workbook, {bookType:extentionname, bookSST:false, cellNF:true, cellStyles:true, type: 'binary', compression : true });
				}
			}
			//return;
			var FilUtil = nexacro.FileUtil;
			
			if(nexacro._Browser == "Runtime") {
				FilUtil.save(wbout, extentionname, xlsfilename, this.exportfilepath, this, this.exportSaveEnd);
				return;
			} else {
				if(this.iscsvformat == false)
				{
					FilUtil.save(wbout, extentionname, xlsfilename);
				}
				this.on_fire_onsuccess(this, this.exportfilename);
			}
// 		} catch (e) {
// 			this.on_fire_onerror(this, "SAVE", "Save Error[A]:" + e.message, -1);	
// 		}
		if(this._exportBar) {
			this._exportBar._hide();
			this._exportBar._set_pos(0);
			this._exportBar._set_text("");				
		}

		var grid_items = this._grids;
		if(grid_items) {
			for(var i=0;i<grid_items.length;i++) {
				grid_items[i].WorkSheet.wInfo = null;
				grid_items[i].WorkSheet.hInfo = null;
				grid_items[i].WorkSheet.mInfo = null;
				grid_items[i].WorkSheet.ws = null;
				grid_items[i].WorkSheet.rangeobj = null;
				grid_items[i].WorkSheet = null;
			}
		}
		this._itemcount = this._curritemindex = null;
		if(this.Workbook) {
			this.Workbook.SheetNames = this.Workbook.Sheets = null;
			this.Workbook = null;
		}
	};
	
	_pExcelExport.on_fire_onprogress = function (obj, e) {
		var event = this.onprogress;

		if (event && event._has_handlers) {
			event._fireEvent(this, e);
		}
	};

	_pExcelExport.on_fire_onsuccess = function (obj, url) {
		var event = this.onsuccess;
		if (event && event._has_handlers) {
			var evt = new nexacro.ExcelExportEventInfo(obj, "onsuccess", url, this);
			event._fireEvent(this, evt);
		}		
	};

	_pExcelExport.on_fire_onerror = function (obj, type, msg, code) {
		var event = this.onerror;
		if (event && event._has_handlers) {
			var evt = new nexacro.ExcelExportErrorEventInfoEx(this, "onerror", type, msg, this, code);
			event._fireEvent(this, evt);
		}
	};

	_pExcelExport.on_notify_onprogress = function (obj, e) {
		this.on_fire_onprogress(obj, e);
		return false;
	};

	_pExcelExport.on_notify_onsuccess = function (obj, e) {
		this.on_fire_onsuccess(obj, e);
		return false;
	};

	_pExcelExport.on_notify_onerror = function (obj, e) {
		this.on_fire_onerror(obj, e);
		return false;
	};

	_pExcelExport._getItemType = function (item) {
		var rt;
		switch (item && item._type_name) {
			case "Grid":
				rt = nexacro.ExportItemTypes.GRID;
				break;
            case "Dataset":
                rt = nexacro.ExportItemTypes.DATASET;
                break;
            case "Xml":
                rt = nexacro.ExportItemTypes.DATASETXML;
                break;				
			default:
				if (item instanceof nexacro.Grid) {
					rt = nexacro.ExportItemTypes.GRID;
				}
				break;
		}
		return rt;
	};

	_pExcelExport._getProcessStr = function (item, itemrecord, totalrecord) {
		var str = "";
		str = this.exportmessageprocess.replace("%d", item);
		str = str.replace("%d", itemrecord);
		str = str.replace("%d", totalrecord);

		return str;
	};

	_pExcelExport._getForm = function () {
		if (this.parent instanceof nexacro.Form) {
			return this.parent;
		}
		return null;
	};

	_pExcelExport._getExportBar = function (uiType) {
		var form = this._getForm();
		var pbar_name = "_exportBar";
		var obj = form[pbar_name];
		if (obj) {
			obj.destroy();
		}
		obj = new nexacro.ExportProgress(pbar_name, 0, 0, 10, 10, null, null, null, null, null, null, form);
		form.addChild(obj.name, obj);
		obj._uitype = uiType;
		if (obj.createComponent(true)) {
			obj.on_created();
		}
		return obj;
	};

	_pExcelExport._excelCharToNum = function(alpha) {
		var index = 0
		for (var i = 0, j = 1; i < j; i++, j++) {
			if (alpha == this._excelNumToChar(i)) {
				index = i;
				j = i;
			}
		}
		return index;
	};

	_pExcelExport._excelNumToChar = function(number) {
		var numeric = (number - 1) % 26;
		var letter = this._excelChr(65 + numeric);
		var number2 = parseInt((number - 1) / 26);
		if (number2 > 0) {
			return this._excelNumToChar(number2) + letter;
		} else {
			return letter;
		}
	};

	_pExcelExport._excelChr = function(codePt) {
		if (codePt > 0xFFFF) {
			codePt -= 0x10000;
			return String.fromCharCode(0xD800 + (codePt >> 10), 0xDC00 + (codePt & 0x3FF));
		}
		return String.fromCharCode(codePt);
	};

	delete _pExcelExport;

	nexacro.ExportItemEx = function (name, parent) {
		this.id = this.name = name;
		this.parent = parent || null;
		
		this.exceptstyle = "";
		this.exporthead = "allband";
		this._exporthead = "";
		this.exportimage = "none";
		this.exportmerge = "suppress";
		this._exportmerge = 1;
		this.exportselect = "allrecord";
		this.exportvalue = "allstyle";
		this.exportsize = "width";

		this.range = "";
		this.source = "";
		this.type = "";
		this.rowIndex = -1;

		this._applyA = true;
		this._applyB = true;
		this._applyC = true;
		this._applyF = true;
		this._applyS = true;
		this._applyHead = true;
		this._applySumm = true;
		this._applyFomular = false;
		this._applyL = true;
		this._d_BLColor = "";

		this._seq = 1;
		this._preStartRow = 0;
		this._startRow = 0;
		this._eof = false;
		this._instanceId = "";
		this._stylecache = {
		};
		this._selectcount = 0;
		this._merge_datas = null;
		this._excel_suppress_info = {
		};

		this._gridTempInfo = null;

		this._tmpSuppressInfos = undefined;
		this._event_list = {
			"onsuccess" : 1, 
			"onprogress" : 1, 
			"onerror" : 1
		};
		this._suppress_align_table = {
			"first" : "top", 
			"first,over" : "top", 
			"middle" : "middle", 
			"middle,over" : "middle", 
			"last" : "bottom", 
			"last,over" : "bottom"
		};		
	};

	var _pExportItem = nexacro.ExportItemEx.prototype = nexacro._createPrototype(nexacro._EventSinkObject, nexacro.ExportItemEx);
	_pExportItem._type_name = "ExportItemEx";

	_pExportItem._clear = function () {
		if (this._merge_datas) {
			this._merge_datas = null;
		}
		this._stylecache = null;
		if (this.source) {
			this.source = null;
		}
		if (this._gridTempInfo) {
			this._gridTempInfo = null;
		}
		if (this._excel_suppress_info) {
			this._excel_suppress_info = null;
		}

		if (this._tmpSuppressInfos) {
			this._tmpSuppressInfos = null;
		}
	};

	_pExportItem.set_exceptstyle = function (v) {
		if (v != this.exceptstyle) {
			this.exceptstyle = v;
			var except = v.replace(/ /g, "").split(",");
			var eLen = except.length;
			for (var i = 0; i < eLen; i++) {
				switch (except[i].toLowerCase()) {
					case "align":
						this._applyA = false;
						break;
					case "background":
						this._applyB = false;
						break;
					case "color":
						this._applyC = false;
						break;
					case "font":
						this._applyF = false;
						break;
					case "border":
						this._applyL = false;
						break;
					case "suppress":
						this._applyS = false;
						break;						
					case "none":
						this._applyA = true;
						this._applyB = true;
						this._applyC = true;
						this._applyF = true;
						this._applyL = true;
				}
			}
		}

		return v;
	};

	_pExportItem.set_exporthead = function (v) {
		if (v != this.exporthead) {
			this.exporthead = v;
			var except = v.replace(/ /g, "").split(",");
			var eLen = except.length;
			for (var i = 0; i < eLen; i++) {
				switch (except[i].toLowerCase()) {
					case "nohead":
						this._applyHead = false;
						break;
					case "nosumm":
						this._applySumm = false;
						break;
					default:
						this._applySumm = true;
						this._applySumm = true;
						break;
				}
			}
		}
		if (!this._applyHead || !this._applySumm) {
			if (!this._applyHead && !this._applySumm) {
				this._exporthead = "nohead, nosumm";
			}
			else if (!this._applyHead) {
				this._exporthead = "nohead";
			}
			else {
				this._exporthead = "nosumm";
			}
		}
		else {
			this._exporthead = "allband";
		}

		return v;
	};

	_pExportItem.set_exportimage = function (v) {
		if (v != this.exportimage) {
			this.exportimage = v;
		}

		return v;
	};

	_pExportItem.set_exportmerge = function (v) {
		if (v != this.exportmerge) {
			this.exportmerge = v;
			switch (v) {
				case "nosuppress":
					this._exportmerge = 0;
					break;
				case "merge":
					this._exportmerge = 2;
					break;
				default:
					this._exportmerge = 1;
					break;
			}
		}
		return v;
	};

	_pExportItem.set_exportfomular = function (v) {
		if(v !== true) v = false;
		if (v != this._applyFomular) {
			this._applyFomular = v;
		}
		return v;
	};
	_pExportItem.set_exportselect = function (v) {
		if (v != this.exportselect) {
			this.exportselect = v;
		}
		return v;
	};
	_pExportItem.set_exportvalue = function (v) {
		if (v != this.exportvalue) {
			this.exportvalue = v;
		}
		return v;
	};

	_pExportItem.set_range = function (v) {
		if (v != this.range) {
			this.range = v;
		}

		return v;
	};

	_pExportItem.set_source = function (v) {
		if (v != this.source) {
			this.source = v;
		}

		return v;
	};

	_pExportItem.set_type = function (v) {
		if (v != this.type) {
			this.type = v;
		}

		return v;
	};

	_pExportItem.set_exportsize = function (v) {
		if (v != this.exportsize) {
			this.exportsize = v;
		}
		return v;
	};

	_pExportItem.on_fire_onprogress = function (obj, itemindex, itemtype, recordindex) {
		var event = this.parent.onprogress;

		if (event && event._has_handlers) {
			var evt = new nexacro.ExcelExportProgressEventInfoEx(obj, "onprogress", itemindex, itemtype, recordindex, this);
			event._fireEvent(this, evt);
		}
	};

	_pExportItem.on_fire_onsuccess = function (obj, referObj, url) {
		var event = this.parent.onsuccess;

		if (event && event._has_handlers) {
			var evt = new nexacro.ExcelExportEventInfoEx(obj, "onsuccess", url, this);
			event._fireEvent(this, evt);
		}
	};

	_pExportItem.on_fire_onerror = function (obj, errortype, errormsg, statuscode) {
		var event = this.parent.onerror;

		if (event && event._has_handlers) {
			var evt = new nexacro.ExcelExportErrorEventInfoEx(obj, "onerror", errortype, errormsg, this, statuscode);
			event._fireEvent(this, evt);
		}
	};

	_pExportItem._getWindow = function () {
		var excelexport = this.parent;
		if (excelexport) {
			var form = excelexport.parent;
			if (form._is_form) {
				return form._getWindow();
			}
		}
		return null;
	};

	_pExportItem._getWindowHandle = function () {
		var excelexport = this.parent;
		if (excelexport) {
			var form = excelexport.parent;
			if (form._is_form) {
				return form._getWindowHandle();
			}
		}
		return null;
	};
	
	_pExportItem._getFixedCellType = function (cell, rowidx) {
		var cell_type = cell._getDisplaytype(rowidx);
		var displaytype = "";
		switch (cell_type) {
			case "number":
				break;
			case "maskeditcontrol":
			case "mask":
				var format = cell._getAttrValue(cell.maskeditformat, rowidx);
				if (format != null && format.length != 0) {
					displaytype = format;
				}

				var masktype = cell._getAttrValue(cell.maskedittype, rowidx);
				if (masktype == "number") {
					cell_type = "number";
				}
				else {
					cell_type = "text";
				}

				break;
			case "calendarcontrol":
			case "date":
			case "time":
			case "datetime":
				cell_type = "date";
				var format = cell._getAttrValue(cell.calendardateformat, rowidx);
				if (format == null || format.length == 0 || !format.match(/LONGDATE|SHORTDATE|[yMdHhms]/)) {
					format = "yyyy-MM-dd";
				}
				else {
					var locale = cell._getAttrValue(cell.locale, rowidx);
					if (!locale) {
						locale = nexacro._BrowserLang;
					}

					if (format == "SHORTDATE") {
						format = nexacro.Locale._makeDateMaskString(locale, format);
						if (format == "") {
							format = nexacro.Locale._default_shortdate_format;
						}
					}
					else if (format == "LONGDATE") {
						format = nexacro.Locale._makeDateMaskString(locale, "SHORTDATE");
						if (format == "") {
							format = nexacro.Locale._default_longdate_format;
						}
					}
				}
				displaytype = format;
				break;
			case "imagecontrol":
				if (this.exportimage.toLowerCase() == "image") {
					displaytype += "image";
				}
				cell_type = "text";
				break;
			case "text":
				if (cell._getAttrValue(cell.displaytype, rowidx) == "normal") {
					cell_type = "normal";
				}
				else {
					cell_type = "text";
				}
				break;
			default:
				cell_type = "text";
				break;
		}
		return cell_type + (displaytype ? ":" + displaytype : "");
	};
	
	_pExportItem._getCellStyle = function (cell, rowIdx, odd, sn, status) {
		var cellStyleinfo;
		var userstatus = status == true ? "selected" : undefined;

		switch (sn) {
			case "align":
				cellStyleinfo = cell._query_status_align(rowIdx, cell.displaytype, userstatus);
				break;
			case "background":
				cellStyleinfo = cell._query_status_background(rowIdx, userstatus);
				break;
			case "border":
				cellStyleinfo = cell._query_status_border(rowIdx, userstatus);
				cellStyleinfo = nexacro.BorderObject(cellStyleinfo);
				break;
			case "color":
				cellStyleinfo = cell._query_status_color(rowIdx, userstatus);
				break;
			case "font":
				cellStyleinfo = cell._query_status_font(rowIdx, userstatus);
				break;
		}
		return cellStyleinfo;
	};
	
	_pExportItem._getCellStyleObject = function (cell, rowIdx, odd, sn, status) {
		var cellStyleinfo = {};
		var userstatus = status == true ? "selected" : undefined;

		cellStyleinfo.align = cell._query_status_align(rowIdx, cell.displaytype, userstatus);
		cellStyleinfo.background = cell._query_status_background(rowIdx, userstatus);
		var cellStyleinfo_border = cell._query_status_border(rowIdx, userstatus);
		cellStyleinfo.border = nexacro.BorderObject(cellStyleinfo_border);
		cellStyleinfo.color = cell._query_status_color(rowIdx, userstatus);
		cellStyleinfo.font = cell._query_status_font(rowIdx, userstatus);
		
		return cellStyleinfo;
	};	

	_pExportItem._getCellText = function (source, rowidx, cellidx) {
		var celltext;
		if (source && source instanceof nexacro.Grid) {
			var band;
			if (rowidx == -1) {
				band = "head";
			} else if (rowidx == -2) {
				band = "summ";
			} else {
				band = "body";
			}

			var export_obj = this.parent;
			if (source.getSubCellCount(band, cellidx)) {
				if (export_obj._is_orgval) {
					celltext = source.getSubCellValue(rowidx, cellidx, 0);
				}
				else {
					celltext = source.getSubCellText(rowidx, cellidx, 0);
				}
			}
			else {
				if (export_obj._is_orgval) {
					celltext = source.getCellValue(rowidx, cellidx);
				}
				else {
					celltext = source.getCellText(rowidx, cellidx);
				}
			}
		}
		return celltext;
	};

	_pExportItem._getFitValue = function (obj) {
		if (!obj) {
			return;
		}

		var str = this._fontParseInfo(obj._sysvalue);

		return str;
	};

	_pExportItem._getFitFontValue = function (fontval) {
		/*
		if(fontval.indexOf("/")>=0) {
			var fv = fontval.split(" ");
			fontval = "";
			if(fv.length == 4) {
				fontval += fv[0];
				var x = fv[2];
				if(fv[2].indexOf("/")>=0) {
					x = fv[2].split("/")[0];
				}
				fontval += "," + nexacro.replaceAll(x,'px',"");
				fontval += "," + nexacro.replaceAll(fv[3],'"',"");
				return fontval;
			}
		}
		*/
		var size = this._default_size, face = this._default_face, type;

		if (fontval) {
			var font = new nexacro._FontObject(fontval);
			font._parseInfo(fontval);

			size = font.size;
			type = font.type;
			face = font.face;
			//unit = font._unit;
		}
		
		return [type, size, face];

		//return type + "," + size + "," + face;
	};

	_pExportItem._checkExpr = function (obj, cssclass) {
		if (cssclass && cssclass._bindtype > 0) {
			return true;
		}

		if (obj && obj._bindtype > 0) {
			return true;
		}

		return false;
	};

	_pExportItem._checkGradation = function (background) {
		return false;
	};
	
	_pExportItem._rgbaToHex = function (orig) {
		var a, isPercent,
        rgb = orig.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
        alpha = (rgb && rgb[4] || "").trim(),
        hex = rgb ? 
        (rgb[1] | 1 << 8).toString(16).slice(1) +
        (rgb[2] | 1 << 8).toString(16).slice(1) +
        (rgb[3] | 1 << 8).toString(16).slice(1) : orig;
          if (alpha !== "") {
            a = alpha;
          } else {
            a = 01;
          }

          a = Math.round(a * 100) / 100;
            var alpha = Math.round(a * 255);
            var hexAlpha = (alpha + 0x10000).toString(16).substr(-2).toUpperCase();
            hex = hex + hexAlpha;

      return hex;		
	};
	
	_pExportItem._rgbToHex = function (orig) {
		var a, isPercent,
        rgb = orig.replace(/\s/g, '').match(/^rgb?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
        hex = rgb ? 
        (rgb[1] | 1 << 8).toString(16).slice(1) +
        (rgb[2] | 1 << 8).toString(16).slice(1) +
        (rgb[3] | 1 << 8).toString(16).slice(1) : orig;
      return hex;		
	};	
	
	_pExportItem._getHexColor = function (color) {
		if(!color) return "transparent";
		
		if(color && typeof(color) == "object") {
			if(color.value) {
				color = color.value.split(" ")[0];
			}
		}
		if ((color.indexOf("rgb(") >= 0) || (color.indexOf("RGB(") >= 0)) {
			color = color.toLowerCase();
			var start = color.indexOf("rgb(");
			var end = color.indexOf(")");
			return this._rgbToHex(color.substring(start, end));
		}
		else if ((color.indexOf("rgba(") >= 0) || (color.indexOf("RGBA(") >= 0)) {
			return "transparent";
			/*
			color = color.toLowerCase();
			var start = color.indexOf("rgba(");
			var end = color.indexOf(")");
			color = this._rgbaToHex(color.substring(start, end));
			*/
		}
		
		var v = nexacro._xreNamedColorList[color];
		if (v) {
			color = v;
		}

		var len = color.length;
		if (color.substring(0, 1) == '#') {
			return color.replace("#","");
		}
		if (color.substring(0, 2) == "0x") {
			if (len == 8) {
				return color.substring(2);
			}
			if (len == 10) {
				return color.substring(2, 8);
			}
		}
		return "";
	};

	_pExportItem._getGradationColor = function (gradation) {
		var gColor;
		var gColor2;
		var gArr = [];
		if (gradation) {
			gColor = gradation._value;
			if (gColor != "") {
				gColor = this._getHexColor(gradation.start_color);
				gColor2 = this._getHexColor(gradation.end_color);

				if (gColor.indexOf("#") > -1) {
					var name = gColor + gColor2;
					if (this._stylecache[name]) {
						return this._stylecache[name];
					}
					else {
						gArr.push(Math.round((parseInt(gColor.substring(1, 3), 16) + parseInt(gColor2.substring(1, 3), 16)) / 2));
						gArr.push(Math.round((parseInt(gColor.substring(3, 5), 16) + parseInt(gColor2.substring(3, 5), 16)) / 2));
						gArr.push(Math.round((parseInt(gColor.substring(5), 16) + parseInt(gColor2.substring(5), 16)) / 2));
						gColor = gArr.join(",");
						this._stylecache[name] = gColor;
					}
				}
				return gColor;
			}
		}
		return "";
	};
	
	_pExportItem._getCellBodyStyle2 = function (cell, idx, nDataType, sMask) {
		
		var align, background, background2, color, color2, font, line, gradation, gradation2, c_style, c_style2, _background2, _color2;

		var str = "";
		var viewType = cell.displaytype._value;
		var _linestyle = "empty:empty:empty:empty";
		var linecolor;

		align = cell._query_status_align(0, viewType);
		if(align == "undefined,undefined") align = ",";
		background = cell._query_status_background(0);
		color = cell._query_status_color(0);
		font = cell._query_status_font(0);

		if (this._applyL) {
			line = cell._query_status_border(0);
			line = nexacro.BorderObject(line);
		}

		background2 = cell._query_status_background(1);
		color2 = cell._query_status_color(1);

		if (this._checkGradation(background)) {
		} else {
			var _background = this._getHexColor(background);
		}

		var _color = this._getHexColor(color);
		var _font = this._getFitFontValue(font);

		if (this._applyL && line) {
			var line_color,line_style;
			if (line.right && line.right.style != "none" && line.right._width != 0) {
				line_color = this._getHexColor(line.right.color);
				line_style = line.right.style;
				if(line.right.style=="solid") {
					line_style = "thin";
					if(line.right._width == 2) line_style = "medium";
					if(line.right._width > 2) line_style = "thick";
				} else if(line.right.style=="dotted") {
					if(line.right._width > 1) line_style = "mediumDashed";
				}
				if(!line_color) {
					line_color = this._getHexColor(line.bottom.color);
				}
				linecolor = line_color + ":" + line_style;
			}
		}
		var _align = align;
		if (align == ",") {
			 align = "left,";
			if(nDataType > 1 && nDataType < 5) {
				align = "right,";
			}
			if(viewType == "normal") {
				if(nDataType>4) align = "center,";
			}
			if(viewType == "number") {
				align = "right,";
			}
			if(cell.textAlign == "right") align = "right,";
		}
		if (this._checkExpr(align, cell.cssclass)) {
			if(cell.textAlign == "right") {
				this._stylecache[idx + "align"] = _align;
			} else {
				_align = undefined;
			}			
		} else {
			this._stylecache[idx + "align"] = _align;
		}
		if (this._checkExpr(background, cell.cssclass)) {
			_background = undefined;
		} else {
			this._stylecache[idx + "background0"] = _background;
		}
		if (this._checkExpr(color, cell.cssclass)) {
			_color = undefined;
		}
		else {
			this._stylecache[idx + "color0"] = _color;
		}
		if (this._checkExpr(font, cell.cssclass)) {
			_font = undefined;
		} else {
			this._stylecache[idx + "font"] = _font;
		}
		if (this._checkExpr(line, cell.cssclass)) {
			_line = undefined;
		} else {
			this._stylecache[idx + "line"] = linecolor;
		}

		if (background2) {
			if (this._checkGradation(background2)) {
				gradation2 = cell._stylecache.gradationtruefalsenormal;
				if (!gradation2) {
					gradation2 = cell.style.gradation2;
					if (!gradation2) {
						gradation2 = cell._query_pseudo_gradation(0, true, false, "enabled");
					}
				}
				var _background2 = this._getGradationColor(gradation2);
			}
			else {
				var _background2 = this._getHexColor(background2);
			}
			if (this._checkExpr(background2, cell.cssclass)) {
				_background2 = undefined;
			}
			else {
				this._stylecache[idx + "background1"] = _background2;
			}
		} else {
			this._stylecache[idx + "background1"] = _background2 = _background;
		}
		if (color2) {
			var _color2 = this._getHexColor(color2);
			if (this._checkExpr(color2, cell.cssclass)) {
			} else {
				this._stylecache[idx + "color1"] = _color2;
			}
		}
		else {
			this._stylecache[idx + "color1"] = _color2 = _color;
		}
	};
	
	_pExportItem._getForm = function () {
		return this.parent.parent;
	};

	_pExportItem._eventExport = function (exportObj, type, row_index, selectCnt) {
		var eventtype = exportObj.exporteventtype;
		var itemIndex = exportObj._itemsIndex;
		var exportbar = exportObj._exportBar;
		if (eventtype != "none") {
			var row_num = row_index + 1;
			var processStr = "";
			var is_end = row_num == this._bodyRowCnt;
			var progress_pos = exportObj._progress_pos + row_num;

			if (eventtype == "item" && is_end) {
				this.on_fire_onprogress(exportObj, itemIndex, this.type, selectCnt == null ? row_index : selectCnt);
				if (exportbar) {
					processStr = exportObj._getProcessStr(itemIndex + 1, progress_pos, exportObj._allRowCount);
					exportbar._set_text(processStr);
					exportbar._set_pos((itemIndex + 1) / exportObj._allCount * 100);
				}
			}
			else if (eventtype == "itemrecord") {
				this.on_fire_onprogress(exportObj, itemIndex, this.type, selectCnt == null ? row_index : selectCnt);
				if (exportbar) {
					processStr = exportObj._getProcessStr(itemIndex + 1, row_num, this._bodyRowCnt);
					exportbar._set_text(processStr);
					exportbar._set_pos(row_num / this._bodyRowCnt * 100);
				}
			}
			else if (eventtype == "totalrecord") {
				this.on_fire_onprogress(exportObj, itemIndex, this.type, selectCnt == null ? row_index : selectCnt);
				if (exportbar) {
					processStr = exportObj._getProcessStr(itemIndex + 1, progress_pos, exportObj._allRowCount);
					exportbar._set_text(processStr);
					exportbar._set_pos(progress_pos / exportObj._allRowCount * 100);
				}
			}

			if (progress_pos == exportObj._allRowCount && exportObj.exportmessagecomplete != "") {
				if (exportbar) {
					exportbar._set_text(exportObj.exportmessagecomplete);
				}
			}
			if (is_end && exportbar) {
				exportObj._progress_pos = progress_pos;
			}
		}
	};

	_pExportItem._updateBarPos = function (exportObj, eventtype) {
		if (eventtype != "none" && exportObj._exportuitype) {
			var itemIndex = exportObj._itemsIndex;
			var exportbar = exportObj._exportBar;
			
			exportObj._progress_pos += this._startRow - this._preStartRow;
			var processStr = "";
			var is_end = this._startRow == this._bodyRowCnt;
			if (eventtype == "item" && is_end) {
				processStr = exportObj._getProcessStr(itemIndex + 1, exportObj._progress_pos, exportObj._allRowCount);
				exportbar._set_text(processStr);
				exportbar._set_pos((itemIndex + 1) / exportObj._allCount * 100);
			}
			else if (eventtype == "itemrecord") {
				processStr = exportObj._getProcessStr(itemIndex + 1, this._startRow, this._bodyRowCnt);
				exportbar._set_text(processStr);
				exportbar._set_pos(this._startRow / this._bodyRowCnt * 100);
			}
			else if (eventtype == "totalrecord") {
				processStr = exportObj._getProcessStr(itemIndex + 1, exportObj._progress_pos, exportObj._allRowCount);
				exportbar._set_text(processStr);
				exportbar._set_pos(exportObj._progress_pos / exportObj._allRowCount * 100);
			}
			if (exportObj._progress_pos == exportObj._allRowCount && exportObj.exportmessagecomplete != "") {
				exportbar._set_text(exportObj.exportmessagecomplete);
			}
		}
	};

	_pExportItem._rollbackSuppressInfo = function () {
		var cells = this.source._curFormat._bodycells;
		var supLen = this._tmpSuppressInfos && this._tmpSuppressInfos.length;
		for (var i = 0; i < supLen; i++) {
			cells[i]._suppress_infos = this._tmpSuppressInfos.shift();
		}
	};

	_pExportItem._gridSuppressUpdate = function (grid, rowcount) {
		var cells = grid._curFormat._bodycells;
		var cLen = cells.length;
		this._tmpSuppressInfos = [];
		for (var i = 0; i < cLen; i++) {
			this._tmpSuppressInfos.push(cells[i]._suppress_infos);
		}

		grid._analyzeSuppress(true);

		for (var i = 0; i < rowcount; i++) {
			grid._suppressUpdateRow(i, 0, rowcount - 1, true);
		}
	};

	_pExportItem._exportCallback = function () {
		var grid = this.source;
		var exportObj = this.parent;
		var exportbar = exportObj._exportBar;

		var completemessage = exportObj.exportmessagecomplete;
		if (completemessage) {
			exportbar._set_text(completemessage);
		}
		if (exportbar) {
			exportbar._hide();
			exportbar._set_pos(0);
			exportbar._set_text("");
		}
		this._tmpSuppressInfos = null;
		exportObj._fileURL = "";
		exportObj._allRowCount = 0;
		exportObj._progress_pos = 0;
		exportObj._itemsIndex = 0;

		var application = nexacro.getApplication();
		if (application) {
			application._endCommProgress();
		}

		this.on_fire_onsuccess(exportObj, this, excelURL);
	};

	_pExportItem._gridItemExport = function() {
		var exportObj = this.parent;
		var uiType = exportObj._exportuitype;
		var exportbar = exportObj._exportBar;
		if (exportObj.exporteventtype != "none" && uiType) {
			if (!exportbar || exportbar._uitype != uiType) {
				exportbar = exportObj._exportBar = exportObj._getExportBar(uiType);
				var str = exportObj._getProcessStr(exportObj.count(), exportObj._allRowCount, exportObj._allRowCount);
				str = nexacro._getLongerStr(str, exportObj.exportmessagecomplete, exportObj.exportmessageready);
				var font = exportbar.font || exportbar._getCurrentStyleInheritValue("font");
				var tSize = nexacro._getTextSize(str, font);
				exportbar._textWidth = tSize[0];
				exportbar._textHeight = tSize[1];
			}
			if (exportObj._itemsIndex == 0 && exportObj.exportmessageready != "") {
				exportbar._set_text(exportObj.exportmessageready);
			}
			exportbar._show();
		}

		var grid = this.source;
		if (false) {
        //if (grid.getCellCount("body") <= 0) {
            var event = this.parent.onerror;
            if (event && event._has_handlers) {
                var evt = new nexacro.ExcelExportErrorEventInfoEx(obj, "onerror", "Grid Not Column", grid.name, this, 101);
                event._fireEvent(this, evt);
            }
            return false;
        }
		if (grid._hasTree) {
			this._gridTempInfo = {
			};
			exportObj._tempSaveMethod = nexacro.Grid.prototype._recreate_contents_all;
			nexacro.Grid.prototype._recreate_contents_all = nexacro._emptyFn;
			this._gridTempInfo.enableevent = grid.enableevent;
			grid.enableevent = false;
			this._gridTempInfo.treeIndexes = grid._treeIndexes.slice(0);
			this._gridTempInfo.treeStates = grid._treeStates.slice(0);
			this._gridTempInfo.treeinitstatus = grid.treeinitstatus;
			grid.set_treeinitstatus("expand,all");
		}				
		var rowStart = 1;
		var colStart = 1;
		var strSheetName = this.range.split("!");

		var nPos = -1;
		var sRange = strSheetName[1];
		for (var i = 0; i < sRange.length; i++) {
			if (nexacro.isNumeric(sRange.substr(i, 1))) {
				nPos = i;
				break;
			}
		}
		if (nPos < 1) {
			rowStart = 1;
			colStart = 1;
		}
		var alpha = sRange.substr(0, nPos);
		rowStart = nexacro.toNumber(sRange.substr(nPos));
		colStart = nexacro.toNumber(exportObj._excelCharToNum(alpha));
		
		var grid_items = exportObj._grids;
		var ws_ = {};
		var wInfo_ = [];
		var hInfo_ = [];
		var mInfo_ = [];
		for(var i=(this._itemidx-1);i>=0;i--) {
			if(strSheetName[0] == grid_items[i].WorkSheet.sheetName) {
				ws_ = grid_items[i].WorkSheet.ws;
				wInfo_ = grid_items[i].WorkSheet.wInfo;
				hInfo_ = grid_items[i].WorkSheet.hInfo;
				mInfo_ = grid_items[i].WorkSheet.mInfo;
				break;
			}
		}
		
		this.WorkSheet = {
				"ws"		: ws_,
				"colIdx" 	: colStart - 1,
				"rowIdx" 	: rowStart - 1,
				"sRowIdx" 	: rowStart - 1,
				"wInfo" 	: wInfo_,
				"hInfo" 	: hInfo_,
				"mInfo" 	: mInfo_,
				"bodyrowcnt": grid._curFormat._bodyrows.length,
				"sheetName"	: strSheetName[0],
				"range"		: strSheetName[1],
				"rangeobj"	: null
		};
		
		this.progress_update = 500;
		if(exportObj.JSExcel.progressvalue > 0) {
			this.progress_update = exportObj.JSExcel.progressvalue;
		} else {
			this.progress_update = parseInt(grid._getGridRowCount(true)*0.08);
			if(this.progress_update == 0) this.progress_update = 1;
		}

		var nExcelRowIndex = 0;
		if (this._applyHead != false) {
			this._ExportGridHeader();
		}
		if (grid.summary != null) {
			if (grid.summarytype == "top") {
				if (this._applySumm) {
					this._ExportGridSummary();
				}
			}
		}
		if (grid._getGridRowCount(true) != 0) {
			this._ExportGridBody();
		}
	};
	
	_pExportItem._gridItemExportContinue = function() {
		var exportObj = this.parent;
		var uiType = exportObj._exportuitype;
		var exportbar = exportObj._exportBar;
		if (exportObj.exporteventtype != "none" && uiType) {
			if (!exportbar || exportbar._uitype != uiType) {
				exportbar = exportObj._exportBar = exportObj._getExportBar(uiType);
				var str = exportObj._getProcessStr(exportObj.count(), exportObj._allRowCount, exportObj._allRowCount);
				str = nexacro._getLongerStr(str, exportObj.exportmessagecomplete, exportObj.exportmessageready);
				var font = exportbar.font || exportbar._getCurrentStyleInheritValue("font");
				var tSize = nexacro._getTextSize(str, font);
				exportbar._textWidth = tSize[0];
				exportbar._textHeight = tSize[1];
			}
			if (exportObj._itemsIndex == 0 && exportObj.exportmessageready != "") {
				exportbar._set_text(exportObj.exportmessageready);
			}
			exportbar._show();
		}

		var grid = this.source;
		if (grid.summary != null) {
			if (grid.summarytype == "default") {
				if (this._applySumm) {
					this._ExportGridSummary();
				}
			}
		}

		if (grid._hasTree) {
			grid.set_treeinitstatus(this._gridTempInfo.treeinitstatus);
			nexacro.Grid.prototype._recreate_contents_all = exportObj._tempSaveMethod;
			exportObj._tempSaveMethod = null;
			grid._treeIndexes = this._gridTempInfo.treeIndexes;
			grid._treeStates = this._gridTempInfo.treeStates;
			grid.enableevent = this._gridTempInfo.enableevent;
			this._gridTempInfo = null;
		}	
		
		this._updateBarPos(exportObj, exportObj.exporteventtype);
		if (exportbar) {
			exportbar._hide();
			exportbar._set_pos(0);
			exportbar._set_text("");
		}
		
		var range = {	s: {c:this.WorkSheet.colIdx, r:this.WorkSheet.sRowIdx}, 
						e: {c:0, r:0 }
					};
		var nMaxCol = 0;
		if(grid instanceof nexacro.Grid) {
			var headcells = grid._curFormat._headcells;
			for( var i = 0; i < headcells.length; i ++) {
				var cell = headcells[i];
				nCol = cell._col;
				if(nCol > nMaxCol) nMaxCol = nCol;
			}
		} else {
			nMaxCol = grid.getColCount()-1;
		}
		range.e.c = this.WorkSheet.colIdx + nMaxCol;
		range.e.r = this.WorkSheet.rowIdx - 1;

		this.WorkSheet.rangeobj = range;
		
		// dup sheet
		var bFind = false;
		//var range_copy = range;
		var range_copy = JSON.parse(JSON.stringify(range));
		var grid_items = exportObj._grids;
		for(var ix=0;ix<this._itemidx;ix++) {
			var oth_ws = grid_items[ix].WorkSheet;
			var oth_ws_ = oth_ws.ws;
			var oth_range = oth_ws.rangeobj;
			if(this.WorkSheet.sheetName == oth_ws.sheetName) {
				bFind = true;
				if(oth_range.s.c < range_copy.s.c) range_copy.s.c = oth_range.s.c;
				if(oth_range.s.r < range_copy.s.r) range_copy.s.r = oth_range.s.r;
				if(oth_range.e.c > range_copy.e.c) range_copy.e.c = oth_range.e.c;
				if(oth_range.e.r > range_copy.e.r) range_copy.e.r = oth_range.e.r;
			}
		}
		
		var ws = this.WorkSheet.ws;
		ws['!cols'] = this.WorkSheet.wInfo;
		ws['!rows'] = this.WorkSheet.hInfo;
		ws['!merges'] = this.WorkSheet.mInfo;
			
		ws['!ref'] = XLSX.utils.encode_range(range_copy);

		this.WorkSheet.ws = ws;

		exportObj.exportDataContinue();
	};	
	
    _pExportItem._isDecValue = function(strText) {
		if(!strText || strText == "") return false;
		if(strText.toString().indexOf(".")>=0) return true;
		
		return false;
    };
	
    _pExportItem._getHexColor2 = function(color)
    {
        var v = nexacro._xreNamedColorList[color];
        if (v) {
            return v;
        }

        len = color.length;
        if(color.substring(0,1) == '#') {
            if (len == 7) {
                return color;
            }
            if (len == 9) {
                return color.substr(0, 7);
            }
        }
        if(color.substring(0,2) == "0x") {
            if (len == 8) {
                return "#" + color.substring(2);
            }
            if (len == 10) {
                return "#" + color.substring(2, 8);
            }
        }
        return "";
    };
	
	
    _pExportItem._getFormatMaskStyle = function(sType, is_suppress, bShowText, cellText, cellValue, nDataType, m_mask, cell_Displaytype) {
		var _write = {
					"type" 	: "S",
					"wrap" 	: false,
					"value"	: (!cellText?"":cellText),
					"format": null,
					"numformat"	: null,
					"dumm"	: null
		};
		var exportObj = this.parent;
		
		if(m_mask == "") m_mask = null;
        switch (nDataType) {
            case 1:
                if (cellText === null || cellText === undefined || cellText === "") {
					_write.type = "B";
				} else {
                    if (is_suppress >= 1 && bShowText == false) {
						_write.type = "B";
                    } else {
                        if (cellText.indexOf("\n") >= 0) {
							_write.type = "S";
							_write.wrap = true;
                        }
						if (cell_Displaytype == "mask" || cell_Displaytype == "maskeditcontrol") {
							if(m_mask) {
								if(!isNaN(cellValue)) {
									var currencyFormat = /^\$?(?!0.00)(([0-9]{1,3},([0-9]{3},)*)[0-9]{3}|[0-9]{1,3})(\.[0-9]{2})?$/;
									var rtn = currencyFormat.test(cellText);
									if(rtn == true) {
										var bValueType = this._isDecValue(cellText);
										if (bValueType) {
											_write.format = "#,##0.#########";
										} else {
											_write.format = "#,##0";
										}
										_write.type = "N";
										_write.value = cellValue;
									}
								} else {
									_write.type = "S";
								}
							} else {
								_write.type = "S";
								_write.value = cellText;
							}
						} else if(sType != "body" && cell_Displaytype == "number" && cellText == "0") {
							_write.type = "N";
							_write.format = "#,##0";
							_write.value = 0;
						} else if ((this._applyFomular === true) && (cell_Displaytype == "normal" || cell_Displaytype == "text") && (this._WriteFormula(cellText) == true)) {
                            var nlen = cellText.length;
                            var strFormula = cellText.substring(1, nlen).toUpperCase();
							_write.type = "F";
							_write.value = strFormula;
							//_write.numformat = "#,###.#########";
                        } else {
							_write.type = "S";
							if (cell_Displaytype == "text") {
								//_write.format = "#,###";
							}
                        }
                    }
                }
                break;
            case 2:
                if (is_suppress >= 1 && bShowText == false) {
					_write.type = "B";
                } else {
                    if (m_mask && m_mask.length > 0) {
                        _write.format = m_mask;
                    } else {
                        var bValueType = this._isDecValue(cellText);
                        if (bValueType) {
							_write.format = "#,##0.########";
                        } else {
							_write.format = "#,##0";
                        }
                    }
					_write.type = "N";
					_write.value = cellValue;
					_write.dumm = 1;
                }
                break;			
            case 3:
            case 4:
                if ((is_suppress >= 1 && bShowText == false) || cellText === null || cellText === undefined || cellText === "" || cellValue === null || cellValue === undefined || cellValue === "") {
					_write.type = "B";
                } else {
                    if (is_suppress >= 1 && bShowText == false) {
						_write.type = "B";
                    } else {
                        if (m_mask && m_mask.length > 0) {
                            _write.format = m_mask;
                        } else {
							var bValueType = this._isDecValue(cellText);
							if (bValueType) {
								_write.format = "#,##0.########";
							} else {
								_write.format = "#,##0";
							}
                        }
						_write.type = "N";
						_write.value = cellValue;
						_write.dumm = 1;
                    }
                }
                break;
            case 6:
            case 7:
            case 5:
				if(exportObj.isodsformat) {
					if (cellValue != null && cellValue != "" && cellValue != undefined) {
						_write.type = "D";
						_write.value = cellValue;
						_write.numformat = m_mask;						
					} else {
						_write.type = "B";
					}
				} else {
					if (cellValue != null && cellValue != "" && cellValue != undefined) {
						if (is_suppress >= 1 && bShowText == false) {
							_write.type = "B";
						} else {
							var year = 0;
							var month = 0;
							var date = 0;
							var hour = 0;
							var minuties = 0;
							var sec = 0;
							var msec = 0;
							var cellValueTmp = cellValue;
							if (typeof(cellValue) == "string" || cellValue.length > 7) {
								year 	= parseInt(cellValue.substring(0, 4));
								month 	= parseInt(cellValue.substring(4, 6)) - 1;
								date 	= parseInt(cellValue.substring(6, 8));
								hour 	= parseInt(cellValue.substring(8, 10) || "0");
								minuties = parseInt(cellValue.substring(10, 12) || "0");
								sec 	= parseInt(cellValue.substring(12, 14) || "0");
							} else {
								year = cellValue.getFullYear();
								month = cellValue.getMonth() + 1;
								date = cellValue.getDate();
								hour = cellValue.getHours();
								minuties = cellValue.getMinutes();
								sec = cellValue.getSeconds();
								msec = cellValue.getMilliseconds();
							}
							cellValueTmp = new Date(year,month,date,hour,minuties,sec,msec);							
							_write.type = "D";
							_write.value = cellValueTmp;
							_write.numformat = cellText;
							if(m_mask) {
								_write.z = m_mask;
							}
							
							/*
							var year = 0;
							var month = 0;
							var date = 0;
							var hour = 0;
							var minuties = 0;
							var sec = 0;
							var msec = 0;
							var cellValueTmp = cellValue;
							if (typeof(cellValue) == "string" || cellValue.length > 7) {
								year 	= parseInt(cellValue.substring(0, 4));
								month 	= parseInt(cellValue.substring(4, 6)) - 1;
								date 	= parseInt(cellValue.substring(6, 8));
								hour 	= parseInt(cellValue.substring(8, 10) || "0");
								minuties = parseInt(cellValue.substring(10, 12) || "0");
								sec 	= parseInt(cellValue.substring(12, 14) || "0");
							} else {
								year = cellValue.getFullYear();
								month = cellValue.getMonth() + 1;
								date = cellValue.getDate();
								hour = cellValue.getHours();
								minuties = cellValue.getMinutes();
								sec = cellValue.getSeconds();
								msec = cellValue.getMilliseconds();
							}

							cellValueTmp = new Date(year,month,date,hour,minuties,sec,msec);
							var dval = Date.parse(cellValueTmp.toString());
							dval = Math.round(25569 + (dval / (86400 * 1000)));
							dval += hour / 24.0;
							dval += minuties / 1440.0;
							dval += sec / 86400.0;
							dval += msec / 86400000.0;						
							
							_write.type = "N";
							_write.value = dval;
							_write.numformat = m_mask;
							*/
						}
					} else {
						_write.type = "B";
					}
				}
				
                break;
            default:
                break;
        }
		return _write;
	};
	
	// ODS
	_pExportItem._saveStyleInfo = function(s,n) {
		if(!n) n = "";
		var numstyle = this._saveNumberInfo(n);
		
		var style = this.parent.ODSInfo.STYLE;
		var findS = s + String.fromCharCode(29) + "NUMTYPE:" + numstyle;
		for(var fi=0;fi<style.length;fi++) {
			if(style[fi] == findS) {
				return "ce" + fi;
			}
		}
		style.push(findS);
		return "ce" + (style.length-1);
	};
	// ODS
	_pExportItem._saveNumberInfo = function(n) {
		var numstyle = this.parent.ODSInfo.NUMSTYLE;
		if(numstyle.length == 0) numstyle.push("");	// N0
		for(var fi=0;fi<numstyle.length;fi++) {
			if(numstyle[fi] == n) {
				return "N" + fi;
			}
		}
		numstyle.push(n);
		return "N" + (numstyle.length - 1);
	};
	
    _pExportItem._setFormatStyle = function(sType, nRow, nCol, cellInfo, nDataType, nLoopRow, nLoopCol,	cellText, cellValue, cell_Displaytype, 
										m_mask, border_value, nSubRow, nSubCol) {	
		
		var exportObj = this.parent;
		var isCSV = exportObj.iscsvformat;
		
		if(!nSubRow) nSubRow = 0;
		if(!nSubCol) nSubCol = 0;
		var oStyleInfo = {};
		var rowStart = this.WorkSheet.rowIdx;
		var colStart = this.WorkSheet.colIdx;
		
		var backgroundCell, alignCell, fontCell, colorCell, lineCell;
		var odd = nRow % 2;
		var cacheA, cacheB, cacheC, cacheF, cacheL;
		var iscssclassexpr,cssclasses,cacheindex,selectedcc;
		if(!isCSV)
		{
			if(sType == "body") {
				cacheA = this._stylecache[nLoopCol + "align"];
				cacheB = this._stylecache[nLoopCol + "background" + odd];
				cacheC = this._stylecache[nLoopCol + "color" + odd];
				cacheF = this._stylecache[nLoopCol + "font"];
				cacheL = this._stylecache[nLoopCol + "line"];
				
				if(cacheA == "") cacheA = null;
				if(cacheB == "") cacheB = null;
				if(cacheC == "") cacheC = null;
				if(cacheF == "") cacheF = null;
				if(cacheL == "") cacheL = null;
				
				iscssclassexpr = this._checkExpr(null, cellInfo.cssclass);
				if(iscssclassexpr) {
					cssclasses = cellInfo._getAttrValue(cellInfo.cssclass, nLoopRow);
					cacheindex = nLoopCol + cssclasses;
					selectedcc = "";

					cacheA = this._stylecache[cacheindex + "align" + selectedcc];
					cacheL = this._stylecache[cacheindex + "line" + selectedcc];
					cacheB = this._stylecache[cacheindex + "background" + odd + selectedcc];
					cacheC = this._stylecache[cacheindex + "color" + odd + selectedcc];
					cacheF = this._stylecache[cacheindex + "font" + selectedcc];
					
					if(!cacheA) cacheA = "";
					if(!cacheB) cacheB = "";
					if(!cacheC) cacheC = "";
					if(!cacheF) cacheF = "";
					if(!cacheL) cacheL = "";
				}
			}
			var nStyleRow = nLoopRow;
			if(sType != "body") {
				if(sType=="head") nStyleRow = -1;
				else if(sType=="summ") nStyleRow = -2;			
				odd = false;
			}

			if(this._applyA == true) {
				if (cacheA) {
					alignCell = cacheA;
				} else {
					alignCell = this._getCellStyle(cellInfo, nStyleRow, odd, "align", false);
					if(alignCell == "undefined,undefined") alignCell = "left,middle";
					if (iscssclassexpr) {
						this._stylecache[cacheindex + "align" + selectedcc] = alignCell;
					}
				}
				
				if (alignCell) {
					oStyleInfo.alignment = {};
					var spAlign = alignCell.split(",");
					if(spAlign.length == 2) {
						var halign = spAlign[0];
						var valign = spAlign[1];
						if(halign == "middle") halign = "center";
						if(valign == "middle") valign = "center";
						if(!valign || valign == "") valign = "center";					
						oStyleInfo.alignment.horizontal = halign;
						oStyleInfo.alignment.vertical = valign;				
					} else {
						oStyleInfo.alignment.horizontal = oStyleInfo.alignment.vertical = "center";
					}
				}
			}
			if(this._applyB == true) {
				if (cacheB) {
					backgroundCell = cacheB;
				} else {
					backgroundCell = this._getHexColor(this._getCellStyle(cellInfo, nStyleRow, odd, "background", false));
					if(nexacro._Browser == "Runtime" && sType != "body") {
						this.parent.parent.sleep(5);	// style 처리가 정상적으로 되지 않는다.
						backgroundCell = this._getHexColor(this._getCellStyle(cellInfo, nStyleRow, odd, "background", false));
					}
					if (iscssclassexpr) {
						this._stylecache[cacheindex + "background" + odd + selectedcc] = backgroundCell;
					}	
				}
				if(backgroundCell == "transparent") backgroundCell = "ffffff";
				if(backgroundCell) {
					oStyleInfo.fill = {};
					oStyleInfo.fill.patternType = "solid";
					oStyleInfo.fill.fgColor = {};
					oStyleInfo.fill.fgColor.rgb = backgroundCell;
				}
			}
			
			if(this._applyF == true) {
				if(this._applyC == true) {
					if (cacheC) {
						colorCell = cacheC;
					} else {
						colorCell = this._getHexColor(this._getCellStyle(cellInfo, nStyleRow, odd, "color", false));
						if (iscssclassexpr) {
							this._stylecache[cacheindex + "color" + odd + selectedcc] = colorCell;
						}					
					}
					if(!colorCell) colorCell = "000000";
				}
				if (cacheF) {
					fontCell = cacheF;
				} else {
					fontCell = this._getFitFontValue(this._getCellStyle(cellInfo, nStyleRow, odd, "font", false));
					if(fontCell[0] == undefined && fontCell[1] == undefined && fontCell[2] == undefined) {
						fontCell = null;
					}
					if (iscssclassexpr) {
						this._stylecache[cacheindex + "font" + selectedcc] = fontCell;
					}				
				}
				if(fontCell) {
					oStyleInfo.font = {};
					oStyleInfo.font.color = {};	
					if(fontCell[1]) {
						var fs = fontCell[1];
						var fy = fontCell[2];
						if(fy && fy.indexOf(",")>=0) {
							var fyarr = fy.split(",");
							fy = fyarr[0];
						}
						if(!fs || isNaN(fs)) fs = 12;
						fs = parseInt(fs * 72 / 96);
						oStyleInfo.font.name = fy;
						oStyleInfo.font.sz = fs;								
					} else {
						oStyleInfo.font.name = "Calibri";
						oStyleInfo.font.sz = parseInt(12 * 72 / 96);					
					}
					
					var UpperfontCell = fontCell.join("").toUpperCase();
					if(UpperfontCell.indexOf("BOLD")>=0) oStyleInfo.font.bold = true;
					if(UpperfontCell.indexOf("STRIKEOUT")>=0) oStyleInfo.font.strikeout = true;
					if(UpperfontCell.indexOf("ITALIC")>=0) oStyleInfo.font.italic = true;
					if(UpperfontCell.indexOf("UNDERLINE")>=0) oStyleInfo.font.underline = true;
					oStyleInfo.font.color.rgb = colorCell;
				}
			}
			
			var borderDefaultInfo;
			if(this._applyL == true) {
				oStyleInfo.border = {};
				if (cacheL) {
					lineCell = cacheL;
				} else {
					var line = this._getCellStyle(cellInfo, nStyleRow, odd, "border", false);
					if(line) {
						var line_color,line_style;
						if (line.right && line.right.style != "none" && line.right._width != 0) {
							line_color = this._getHexColor(line.right.color);
							if(line.right.style=="solid") line_style = "thin";
							if(line.right._width == 2) line_style = "medium";
							if(line.right._width > 2) line_style = "thick";
							if(!line_color) {
								line_color = this._getHexColor(line.bottom.color);
							}
							lineCell = line_color + ":" + line_style;
						}
					}
					if (iscssclassexpr) {
						this._stylecache[cacheindex + "line" + selectedcc] = lineCell;
					}
				}
				if(lineCell) {
					var srrA = lineCell.split(":");
					var col = { style: srrA[1], color: { rgb: srrA[0] } };
					borderDefaultInfo = oStyleInfo.border.left = oStyleInfo.border.top = oStyleInfo.border.right = oStyleInfo.border.bottom = col;
				}
			}
			
			var is_suppress = false;
			var bShowText = true;
			if(this._applyL == true && this._applyS == true) {
				if (sType == "body") {
					var supp = -1;
					var supp_top = true;
					var supp_btm = true;
					is_suppress = cellInfo.suppress;
					if (is_suppress && is_suppress._value >= 1) {
						var suppress_infos = cellInfo._suppress_infos;
						if (suppress_infos[nStyleRow].text_proc != 0) {
							bShowText = false;
						}
						supp = suppress_infos[nStyleRow].border_proc;
						supp_top = suppress_infos[nStyleRow].first;
						supp_btm = suppress_infos[nStyleRow].last;
						suppress_infos = null;
						is_suppress = true;
					} else {
						is_suppress = false;
					}
					if (supp != -1) {
						if (supp_top == true && supp_btm == false) {
							oStyleInfo.border.bottom = {};
						} else if (supp_top == false && supp_btm == true) {
							oStyleInfo.border.top = {};
						} else if (supp_top == false && supp_btm == false) {
							oStyleInfo.border.top = {};
							oStyleInfo.border.bottom = {};
						}
					} else if(border_value) {
						if(border_value.indexOf("L")>=0) oStyleInfo.border.left = {};
						if(border_value.indexOf("T")>=0) oStyleInfo.border.top = {};
						if(border_value.indexOf("B")>=0) oStyleInfo.border.bottom = {};
						if(border_value.indexOf("R")>=0) oStyleInfo.border.right = {};
					}
				}
			}
		}	// CSV가 아닌 경우

		var _write = this._getFormatMaskStyle(sType, is_suppress, bShowText, cellText, cellValue, nDataType, m_mask, cell_Displaytype);
		var nColPos = nCol + colStart + nSubCol;
		var nRowPos = 0;
		if(sType == "body") {
			nRowPos = (nLoopRow * this.WorkSheet.bodyrowcnt) + nRow + rowStart + nSubRow;
		} else {
			nRowPos = nRow + rowStart + nSubRow;
		}
		// ODS
		var sStyleNo = "";
		if(exportObj.isodsformat) {
			var aStyleInfo = [];
			var format = "";
			var numformat = "";
			var sp_gp = String.fromCharCode(29);
			var sp_re = String.fromCharCode(30);			
			if(oStyleInfo.alignment) {
				aStyleInfo.push("ALIGN:" + oStyleInfo.alignment.horizontal + sp_re + oStyleInfo.alignment.vertical);
			} else {
				aStyleInfo.push("ALIGN:center"+sp_re+"center");
			}
			if(oStyleInfo.fill) {
				aStyleInfo.push("FILL:" + oStyleInfo.fill.patternType + sp_re + oStyleInfo.fill.fgColor.rgb);
			} else {
				aStyleInfo.push("FILL:" + "solid" + sp_re + "ffffff");
			}
			if(oStyleInfo.font) {
				aStyleInfo.push("FONT:" + oStyleInfo.font.color.rgb + sp_re + oStyleInfo.font.name + sp_re + oStyleInfo.font.sz + sp_re + (oStyleInfo.font.bold?"T":"F") + sp_re + (oStyleInfo.font.strikeout?"T":"F") + sp_re + (oStyleInfo.font.italic?"T":"F") + sp_re + (oStyleInfo.font.underline?"T":"F"));
			} else {
				aStyleInfo.push("FONT:" + "000000" + sp_re + "Calibri" + sp_re + "11" + sp_re + "F" + sp_re + "F" + sp_re + "F" + sp_re + "F");
			}
			if(oStyleInfo.border) {
				if(borderDefaultInfo) {
					aStyleInfo.push("BORDER:" + oStyleInfo.border.left.style + sp_re +  oStyleInfo.border.left.color.rgb);
					
					if(!oStyleInfo.border.left.style) {
						aStyleInfo.push("BORDER-LEFT:" + "" + sp_re +  "");
					}
					if(!oStyleInfo.border.top.style) {
						aStyleInfo.push("BORDER-TOP:" + "" + sp_re +  "");
					}
					if(!oStyleInfo.border.bottom.style) {
						aStyleInfo.push("BORDER-BOTTOM:" + "" + sp_re +  "");
					}
					if(!oStyleInfo.border.right.style) {
						aStyleInfo.push("BORDER-RIGHT:" + "" + sp_re +  "");
					}
				} else {
					aStyleInfo.push("BORDER:" + "" + sp_re +  "");
				}
			} else {
				aStyleInfo.push("BORDER:" + "" + sp_re +  "");
			}
			if(cellText && cellText.indexOf("\n")>=0) {
				aStyleInfo.push("WORDWRAP:" + "T");
			} else {
				aStyleInfo.push("WORDWRAP:" + "F");
			}
			
			if(_write.type == "N" || _write.type == "D") {
				if(_write.format) {
					numformat = _write.format;
				} else if(_write.numformat) {
					numformat = _write.numformat;
				}
			}
			var sStyleInfo = aStyleInfo.join(sp_gp);
			sStyleNo = this._saveStyleInfo(sStyleInfo,numformat);
			aStyleInfo = null;
		}
		
		var ws = this.WorkSheet.ws;
		var cell_ref = XLSX.utils.encode_cell(	{	c 	: 	nColPos,
													r	:	nRowPos	}	);
		if(_write.type == "B" || _write.type == "S") {
			if(_write.type == "B") _write.value = "";
			if(cellText && cellText.indexOf("\n")>=0) {
				if(!oStyleInfo.alignment) oStyleInfo.alignment = {};
				cellText = cellText.replace("\r","");
				oStyleInfo.alignment.wrapText = true;						
			}
			ws[cell_ref] = 	{ 	v : _write.value ,
								t : "s" ,
								s : oStyleInfo,
								odss : sStyleNo
							};
			if(cellInfo._colspan > 1) {
				for(var cc=1;cc<cellInfo._colspan;cc++) {
					var cell_ref2 = XLSX.utils.encode_cell(	{	c 	: 	nColPos + cc,
																r	:	nRowPos	}	);					
					ws[cell_ref2] =	{ 	v : "" ,
										t : "s" ,
										s : oStyleInfo,
										odss : sStyleNo
									};
				}
			}
			if(cellInfo._rowspan > 1) {
				for(var cc=1;cc<cellInfo._rowspan;cc++) {
					var cell_ref2 = XLSX.utils.encode_cell(	{	c 	: 	nColPos,
																r	:	nRowPos + cc	}	);					
					ws[cell_ref2] =	{ 	v : "" ,
										t : "s" ,
										s : oStyleInfo,
										odss : sStyleNo
									};
				}
			}					
		} else if(_write.type == "F") {
			if(_write.numformat) {
				ws[cell_ref] = 	{ 	f : _write.value ,
									t : "n" ,
									z : _write.numformat,
									s : oStyleInfo,
									odss : sStyleNo
								};
			} else {
				ws[cell_ref] = 	{ 	f : _write.value ,
									t : "n" ,
									z : "@",
									s : oStyleInfo,
									odss : sStyleNo
								};
			}
		} else if(_write.type == "N") {
			if(_write.numformat) {
				ws[cell_ref] = 	{ 	v : _write.value ,
									t : "n" ,
									z : _write.numformat,
									s : oStyleInfo,
									odss : sStyleNo
								};
			} else if(_write.format) {
				oStyleInfo.numFmt = _write.format;
				ws[cell_ref] = 	{ 	v : _write.value ,
									t : "n",
									s : oStyleInfo,
									odss : sStyleNo
								};
			} else {
				ws[cell_ref] = 	{ 	v : _write.value ,
									t : "n",
									s : oStyleInfo,
									odss : sStyleNo
								};
			}
		} else if(_write.type == "D") {
			if(_write.z) {
				ws[cell_ref] = 	{ 	v : _write.value ,
									t : "d" ,
									w : _write.numformat,
									z : _write.z,
									s : oStyleInfo,
									odss : sStyleNo
								};
			} else {
				ws[cell_ref] = 	{ 	v : _write.value ,
									t : "d" ,
									w : _write.numformat,
									s : oStyleInfo,
									odss : sStyleNo
								};
			}
		}
		oStyleInfo = null;
		this.WorkSheet.ws = ws;
	};
		
    _pExportItem._WriteFormula = function(strCelldata) {
        var m_strData;
        m_strData = strCelldata;
        var m_bReturn = false;
        if (m_strData.indexOf("=") == 0) {
            m_bReturn = true;
        }
        return m_bReturn;
    };

	_pExportItem._getDataType = function(cell_Displaytype, nDataType, cellText, cellValue, mask, expr) {
		switch (cell_Displaytype) {
			case "text":
				nDataType = 1;
				break;					
			case "normal":
				if(nDataType == 5 || nDataType == 6 || nDataType == 7) {	// normal + dataset = date
					nDataType = 1;
				}
				break;
			case "mask":
			case "maskeditcontrol":
				if(cellValue == undefined || cellValue == null) {
					// 2019.5
					if(isNaN(cellText)) {
						nDataType = 1;
					} else {
						cellValue = cellText;
					}
				} else if(isNaN(cellValue)) {
					nDataType = 1;
				}
			
				break;
			case "number":
			case "exponent":
			case "currency":
				if(!cellValue || !cellText) {
					if(cellValue !== 0 && cellText !== "0") {
						nDataType = 1;
						cellText = "";
					}
				} else {
					if(typeof(cellValue) == "string") {
						cellValue = nexacro.toNumber(cellValue);
					}
				}
				if(isNaN(cellValue)) {
					cellValue = cellText;
				}				
				break;
			case "date":
			case "date2":
				nDataType = 5;
				break;
			case "time":
				nDataType = 6;
				break;
			case "datetime":
				nDataType = 7;
				break;
			case "decoratetext":
			case "image":
			default:
				nDataType = 1;
				break;
		}
		if(expr) {
			if(cellText) {
				if(!isNaN(cellValue)) {
					var currencyFormat = /^\$?(?!0.00)(([0-9]{1,3},([0-9]{3},)*)[0-9]{3}|[0-9]{1,3})(\.[0-9]{2})?$/;
					var rtn = currencyFormat.test(cellText);
					if(rtn) {
						nDataType = 4;
					}
				}
			}
		}
		//----------------------------------------------------------------------------------------------
		//	1 : STRING	2 : INT	3 : FLOAT	4 : BIGDECIMAL	5 : DATE	6 : TIME	7 : DATETIME	
		//----------------------------------------------------------------------------------------------
		var sType = "STRING";
		switch (nDataType) {
			case 1:
				sType = "STRING";
				break;
			case 2:
			case 3:
			case 4:
				if(!cellValue || !cellText) {
					if(cellValue !== 0 && cellText !== "0") {
						nDataType = 1;
						cellText = "";
					} else {
						sType = "NUMBER";
					}
				} else {
					var bDecValue = this._isDecValue(cellText); //소수점이 있으면, DECIMAL
					if (bDecValue) {
						sType = "DECIMAL";
					} else {
						sType = "NUMBER";
					}
					if(typeof(cellValue) == "string") {
						cellValue = nexacro.toNumber(cellValue);
					}					
				}
				break;
			case 5:
			case 6:
			case 7:
				sType = "DATE";
				/*
				if (typeof(cellValue) == "string") {
					cellValue = this._getDisplayText_To_Date(grid, bodyCells[i], j);
				}
				*/
				break;
			default:
				break;
		}
		if(nDataType == undefined) {
			nDataType = 1;
			sType = "STRING";
		}		
		return [nDataType,sType,cellText,cellValue];
	};
	
    _pExportItem._ExportGridHeader = function() {
		var ws = this.WorkSheet.ws;
		var oColWidthInfo = this.WorkSheet.wInfo;
		var oColHeightInfo = this.WorkSheet.hInfo;
		var oMergeInfo = this.WorkSheet.mInfo;
		var rowStart = this.WorkSheet.rowIdx;
		var colStart = this.WorkSheet.colIdx;
		var grid = this.source;
		
        var format = grid._curFormat;
        var headcells = grid._curFormat._headcells;

        var nCol, nRow;
        var rowHeight, colWidth;

        var HEAD_ROW = -1;
        var cellText,cellValue;
        //for merge
        var rowFirst = 0;
        var rowLast = 0;
        var colFirst = 0;
        var colLast = 0;
		var cell;

        if (headcells == null) {
			var f_hrows = format._headrows;
			var rtn = new Array();
			this.WorkSheet.rowIdx = f_hrows.length + rowStart;
            return;
		}
		
		if(colStart>0) {
			oColWidthInfo[colStart-1] = null;
		}
		/*
		if(headcells.length>0 && colStart > 0) {
			var owpx = { wpx : 72 };
			for( var i = 0; i < colStart; i ++) {
				oColWidthInfo[oColWidthInfo.length] = owpx;
			}
		}
		*/
		if(rowStart>0) {
			oColHeightInfo[rowStart-1] = null;
		}
		if(headcells.length>0 && rowStart > 0) {
			var owpx = { hpx : 22 };
			for( var i = 0; i < rowStart; i ++) {
				oColHeightInfo[oColHeightInfo.length] = owpx;
			}
		}
		var arrColInfo = [];
		var nOldRow = -1;
		
		var sType = "head";
		var nDataType = 1;
		var nLoopRow = 0;
		var cell_Displaytype = "normal";
		var displaytype = "";
		
        for (var i = 0; i < headcells.length; i++) {
            cell = headcells[i];

            nCol = cell._col;
            nRow = cell._row;

            colWidth = grid.getRealColSize(nCol);
            rowHeight = grid.getFormatRowSize(nRow);
            cellText = cellValue = grid.getCellText(HEAD_ROW, i);
			displaytype = grid.getCellProperty(sType,i,"displaytype");
			if("decoratetext" == displaytype) {
				cellText = nexacro._getDisplayTextfromDecorateText(cellText)
			}			
			
			arrColInfo[arrColInfo.length] = { "col" : nCol , "wd" : colWidth * 0.75 };
			
			if(nRow != nOldRow) {
				rowHeight = grid.getFormatRowSize(nRow);
				oColHeightInfo[oColHeightInfo.length] = { hpx : rowHeight * 0.75 };
				nOldRow = nRow;
			}			

            var cellsubcnt = grid.getSubCellCount(sType, i);
            if (cellText == undefined || cellText == null || cellText == "") {
                if (cellsubcnt >= 2) {
                    var cellsubText = "";
                    for (var j = 0; j < cellsubcnt; j++) {
                        cellsubText += grid.getSubCellText(HEAD_ROW, i, j);
                        if (cellsubcnt > j + 1) {
                            cellsubText += "\r\n";
                        }
                    }
                    cellText = cellValue = cellsubText;
                }
            }
			this._setFormatStyle(sType, nRow, nCol, cell, nDataType, nLoopRow, i, cellText, cellValue, cell_Displaytype	/*, m_mask, border_value */);
			
            rowFirst = rowLast = nRow;
            colFirst = colLast = nCol;

            colLast += cell._colspan - 1;
            rowLast += cell._rowspan - 1;

            if (rowFirst != rowLast || colFirst != colLast) {
				var oMerge = {s: {c: colFirst + colStart, r: rowFirst + rowStart}, e: {c: colLast + colStart, r: rowLast + rowStart}};
				oMergeInfo.push(oMerge);
            }
        }
		arrColInfo.sort(function(a,b) {
			if(a.col < b.col) return -1;
			if(a.col > b.col) return 1;
			return 0;
		});
		var sv_col = -1;
		for(var i=0;i<arrColInfo.length;i++) {
			var col = arrColInfo[i].col;
			if(col == sv_col) continue;
			
			var wd = arrColInfo[i].wd;
			var owpx = { wpx : wd };
			oColWidthInfo[oColWidthInfo.length] = owpx;
			sv_col = col;
		}
		arrColInfo = null;
		
		this.WorkSheet.rowIdx = format._headrows.length + rowStart;
    };	

   _pExportItem._ExportGridSummary = function() {
		var ws = this.WorkSheet.ws;
		var oColWidthInfo = this.WorkSheet.wInfo;
		var oColHeightInfo = this.WorkSheet.hInfo;
		var oMergeInfo = this.WorkSheet.mInfo;
		var rowStart = this.WorkSheet.rowIdx;

		var colStart = this.WorkSheet.colIdx;
		var grid = this.source;	   
		
        var format = grid._curFormat;
        var summcells = grid._curFormat._summcells;

        var nCol, nRow;
		var TmpHeight;
		var rowHeight = 0;
		var colWidth = 0;
		
		var nSummCols = grid.getFormatColCount();
        var nSummRows = grid.getFormatRowCount();
        var SUMM_ROW = -2;

        var cellText;
        var cellValue;
        //var beforeRows = -1;

        var rowFirst = 0;
        var rowLast = 0;
        var colFirst = 0;
        var colLast = 0;
		var cell,cell_DisplayFormatType,mask,m_mask,cell_Displaytype,expr;

		var sType = "summ";
		var nDataType = 1;
		var nLoopRow = 0;
		var cell_Displaytype = "normal";
		var nOldRow = -1;
		var displaytype = "";
		
        for (var i = 0; i < summcells.length; i++) {
            cell = summcells[i];

            nCol = cell._col;
            nRow = cell._row;

            colWidth = grid.getRealColSize(nCol);
			
			cell_Displaytype = grid.getCellProperty(sType,i,"displaytype");
			if(nRow != nOldRow) {
				TmpHeight = grid.getRealRowSize(nCol, nRow);
				if( rowHeight < TmpHeight){
					rowHeight = TmpHeight;
				}
				oColHeightInfo[oColHeightInfo.length] = { hpx : rowHeight * 0.75 };
				nOldRow = nRow;
			}				
			
            cellText = grid.getCellText(SUMM_ROW, i);
            cellValue = cell._getDisplayText_text(nRow);	//cellValue = grid.getCellValue(SUMM_ROW, i);
			mask = grid.getCellProperty(sType,i,"maskeditformat");
			expr = grid.getCellProperty(sType,i,"expr");
			displaytype = grid.getCellProperty(sType,i,"displaytype");
			if("decoratetext" == displaytype) {
				cellText = nexacro._getDisplayTextfromDecorateText(cellText)
			}					
			if(expr == "") expr = null;
			if(mask.indexOf("expr")>=0) {
				cell_DisplayFormatType = this._getFixedCellType(cell,nRow);
			} else {
				cell_DisplayFormatType = mask?mask:"";
				if(cell_Displaytype == "date") {
					mask = grid.getCellProperty(sType,i,"calendardateformat");
					if(mask.indexOf("expr")>=0) {
						cell_DisplayFormatType = "expr";
					} else {
						cell_DisplayFormatType = mask?mask.toLowerCase():"";
					}
				}				
			}
			m_mask = "";
			if (cell_Displaytype != "date" && cell_DisplayFormatType.indexOf(":")>=0) {
				var as = cell_DisplayFormatType.split(":");
				if(as.length>1) {
					m_mask = as[1];
					if(m_mask && m_mask.indexOf("9")>=0) {
						if(cellText == "" || cellText == undefined) {
							m_mask = nexacro._replaceAll(m_mask, "9", "#");
						} else {
							m_mask = nexacro._replaceAll(m_mask, "9", "0");
						}						
					}
				}
				as = null;
			}
            if (cellText == undefined || cellText == null || cellText == "") {
            } else {
                cell_Displaytype = cell._getDisplaytype(SUMM_ROW);
				switch (cell_Displaytype) {
					case "text":
						break;		
					case "normal":
						break;		
					case "number":
					case "exponent":
					case "currency":
						if(!cellValue || isNaN(cellValue)) {
							nDataType = 1;
						} else {
							nDataType = 4;
							cellValue = nexacro.toNumber(cellValue);
							if(cellValue == 0 && nexacro.toNumber(cellText) != 0) {
								cellValue = nexacro.toNumber(cellText);
							}
						}
						/*
						if(expr) {
							nDataType = 1;
						} else {
							if(!cellValue || !cellText || isNaN(cellValue)) {
								if(cellValue !== 0 && cellText !== "0") {
									nDataType = 1;
									cellText = "";
								}
							} else {
								cellValue = nexacro.toNumber(cellValue);
								nDataType = 1;
							}
						}
						*/
						break;
					case "date":
					case "date2":
						nDataType = 5;
						break;
					case "time":
						nDataType = 6;
						break;
					case "datetime":
						nDataType = 7;
						break;
					case "decoratetext":
					case "image":
					default:
						nDataType = 1;
						break;
				}
 			}
			this._setFormatStyle(sType, nRow, nCol, cell, nDataType, nRow, i, cellText, cellValue, cell_Displaytype	, m_mask);
            rowFirst = rowLast = nRow;
            colFirst = colLast = nCol;

            colLast += summcells[i]._colspan - 1;
            rowLast += summcells[i]._rowspan - 1;

            if( rowFirst != rowLast || colFirst != colLast )
            {
				var oMerge = {s: {c: colFirst + colStart, r: rowFirst + rowStart}, e: {c: colLast + colStart, r: rowLast + rowStart}};
				oMergeInfo.push(oMerge);
            }
            //beforeRows = nRow;
        }
		this.WorkSheet.rowIdx = format._summrows.length + rowStart;
    };

    _pExportItem._ExportGridBody = function() {
		var grid = this.source;
        var bodycntrow = this._bodyRowCnt = grid._getGridRowCount(true);
		var format = grid._curFormat;
		if(format._bodycells == null || format._bodycells == undefined) return;
		var bodycntcell = format._bodycells.length;
		var dataset = grid._binddataset;
		
        if (grid._is_use_suppress == true) {
            this._gridSuppressUpdate(grid, bodycntrow);
        }
		
		var arrBaseInfo = {
			arrDataType : [],
			arrDispType : [],
			arrMaskType : [],
			arrExprType : [],
			arrColSize 	: []
		};
		var bCells = format._bodycells;
		for (var i = 0; i < bodycntcell; i++) {
			var disptype = grid.getCellProperty("body",i,"displaytype");
			if(disptype.indexOf("expr")>=0) {
				arrBaseInfo.arrDispType[i] = null;
			} else {
				arrBaseInfo.arrDispType[i] = disptype;
			}
			t = bCells[i].text;
			arrBaseInfo.arrDataType[i] = 1;
			if(t && t._bindexpr) {
				arrBaseInfo.arrDataType[i] = dataset._getColumnType(t._bindexpr);
				if(disptype == "number" && arrBaseInfo.arrDataType[i] == 1) {
					arrBaseInfo.arrDataType[i] = 4;
				}
			}
			var mask = grid.getCellProperty("body",i,"maskeditformat");
			if(mask.indexOf("expr")>=0 || mask.indexOf("bind:")>=0) {
				arrBaseInfo.arrMaskType[i] = "expr";
			} else {
				arrBaseInfo.arrMaskType[i] = mask?mask:"";
				if(disptype == "date") {
					mask = grid.getCellProperty("body",i,"calendardateformat");
					if(mask.indexOf("expr")>=0) {
						arrBaseInfo.arrMaskType[i] = "expr";
					} else {
						arrBaseInfo.arrMaskType[i] = mask?mask.toLowerCase():"";
					}
				}				
			}
			var exprs = grid.getCellProperty("body",i,"expr");
			if(exprs && exprs.length > 5) {
				arrBaseInfo.arrExprType[i] = true;
			} else {
				arrBaseInfo.arrExprType[i] = false;
			}
			arrBaseInfo.arrColSize[i] = grid.getRealColSize(bCells[i]._col);
			
			this._getCellBodyStyle2(bCells[i], i, arrBaseInfo.arrDataType[i], arrBaseInfo.arrMaskType[i]);
		}
		this._colFormatInfo = arrBaseInfo;
		this._loopRowStart = 0;
		
		if(this._exportmerge == 0) {	// nosuppress
			this._applyS = false;
		}
		
		this._ExportGridBodyLoop();
	};

    _pExportItem._ExportGridBodyLoop = function() {
		var ws = this.WorkSheet.ws;
		var oColWidthInfo = this.WorkSheet.wInfo;
		var oColHeightInfo = this.WorkSheet.hInfo;
		var oMergeInfo = this.WorkSheet.mInfo;
		var rowStart = this.WorkSheet.rowIdx;
		var colStart = this.WorkSheet.colIdx;
		var grid = this.source;	   
		
		var bDecValue = false;
		
        var format = grid._curFormat;
        var bCells = format._bodycells;
		var bodycntcell = bCells.length;
        if (!bCells) return;
		
		var sMask;
		var rtn;		

        var nCol, nRow;
		var nRowSave = -1;
        var rowHeight, colWidth;

        var cellText, cellValue, dispType;

        var rowFirst = 0;
        var rowLast = -1;
        var colFirst = 0;
        var colLast = 0;

        var dataset = grid._binddataset;
        var nDataType = 1;
        var subcellcnt = 0;
		this._bodyRowCnt;
        for (var i = 0; i < bodycntcell; i++) {
            if (bCells[i]._subcells.length) {
                subcellcnt += bCells[i]._subcells.length;
            }
        }
        var bodyallcntcell = bodycntcell + subcellcnt;

        var nBeforeRow = 0;
        var bodyrows = grid._curFormat._bodyrows;
        var rowcnt = bodyrows.length;

        var scellText, scellValue;
        var nAddSubCell = 0;
        var sType = "";
        var oColorInfo = {};
        var t, rtnData, exprs;

		var arrDataType = this._colFormatInfo.arrDataType;
		var arrDispType = this._colFormatInfo.arrDispType;
		var arrMaskType = this._colFormatInfo.arrMaskType;
		var arrExprType = this._colFormatInfo.arrExprType;
		var arrColSize  = this._colFormatInfo.arrColSize;
		var sBandType = "body";
		var bShowText,is_suppress,subCell,subL,mask,nnCol,nnRow;
		
        for (var j = this._loopRowStart; j < this._bodyRowCnt; j++) {
            nAddSubCell = 0;
			nRowSave = -1;
            for (var i = 0; i < bodycntcell; i++) {
                cellText = grid.getCellText(j, i);
				cellValue = bCells[i]._getDisplayText_text(j);	//cellValue = grid.getCellValue(j, i);

                nCol = bCells[i]._col;
                nRow = bCells[i]._row;
				
				nDataType = arrDataType[i];
                var cell_Displaytype = arrDispType[i];
				if(!arrDispType[i]) cell_Displaytype = bCells[i]._getDisplaytype(j);
				
				var cell_DisplayFormatType = arrMaskType[i];
				if(arrMaskType[i] == "expr") cell_DisplayFormatType = this._getFixedCellType(bCells[i],j);

                var m_mask = cell_DisplayFormatType;
                if (cell_Displaytype != "date" && cell_DisplayFormatType.indexOf(":")>=0) {
					var as = cell_DisplayFormatType.split(":");
					if(as.length>1) {
						m_mask = as[1];
						if(m_mask && m_mask.indexOf("9")>=0) {
							m_mask = nexacro._replaceAll(m_mask, "9", "0");
						}
					}
					as = null;
				}
				if(!arrDispType[i] && cell_Displaytype == "date" && (!m_mask || m_mask == "") ) {
					var format = bCells[i]._getAttrValue(bCells[i].calendardateformat, j);
					if (format == null || format.length == 0 || !format.match(/[yMdHhms]/)) {
						format = "yyyy-mm-dd";
					}
					m_mask = format; //grid.getCellProperty("body",i,"calendardateformat");
				}
				rtnData = this._getDataType(cell_Displaytype, nDataType, cellText, cellValue, m_mask, arrExprType[i]);

				nDataType = rtnData[0];
				sType = rtnData[1];
				cellText = rtnData[2];
				cellValue = rtnData[3];
				
                colWidth = arrColSize[i];
				if(nRowSave != nRow) {
					rowHeight = grid.getRealRowSize(j, nRow);
					oColHeightInfo[oColHeightInfo.length] = { hpx : rowHeight * 0.75 };
					nRowSave = nRow;
				}
				/*
                bShowText = true;
                is_suppress = bCells[i].suppress;
                if (is_suppress && is_suppress._value >= 1) {
                    var psuppinfo = bCells[i]._getSuppressInfo(j);
                    if (psuppinfo.text_proc != 0) {
                        bShowText = false;
                    }
					is_suppress = true;
                } else {
					is_suppress = false;
				}
				*/
				if(m_mask && m_mask.indexOf("9")>=0) {
					if(cellText == "" || cellText == undefined) {
						m_mask = nexacro._replaceAll(m_mask, "9", "#");
					} else {
						m_mask = nexacro._replaceAll(m_mask, "9", "0");
					}
				}
				if(cell_Displaytype && (cell_Displaytype.indexOf("mask") < 0) && (cell_Displaytype.indexOf("date") < 0) && m_mask) {
					m_mask = "";
				}
				this._setFormatStyle(sBandType, nRow, nCol, bCells[i], nDataType, j, i, cellText, cellValue, cell_Displaytype, m_mask);
                if (bCells[i]._subcells.length > 0) {
                    subCell = bCells[i]._subcells;
                    subL = bCells[i]._subcells.length;

                    scellText = "";
                    for (var jj = 0; jj < subL; jj++) {
                        nAddSubCell++;
                        cellText = grid.getSubCellText(j, i, jj);
						cellValue = subCell[jj]._getDisplayText_text(j);	//grid.getSubCellValue(j, i, jj);

                        nnCol = subCell[jj]._col;
                        nnRow = subCell[jj]._row;

						t = subCell[jj].text;
						nDataType = 1;
						if(t && t._bindexpr) {
							nDataType = dataset._getColumnType(t._bindexpr);
						}
						var disptype = grid.getSubCellProperty(sBandType,i,jj,"displaytype");
						if(disptype.indexOf("expr")>=0) {
							cell_Displaytype = subCell[jj]._getDisplaytype(j);						
						} else {
							cell_Displaytype = disptype;
						}						
						var mask = grid.getSubCellProperty(sBandType,i,jj,"maskeditformat");
						if(mask && mask.indexOf("expr")>=0) {
							cell_DisplayFormatType = this._getFixedCellType(subCell[jj],j);
						} else {
							cell_DisplayFormatType = mask?mask:"";
						}
						var m_mask = cell_DisplayFormatType;
						if (cell_Displaytype != "date" && cell_DisplayFormatType.indexOf(":")>=0) {
							var as = cell_DisplayFormatType.split(":");
							if(as.length>1) {
								m_mask = as[1];
								if(m_mask && m_mask.indexOf("9")>=0) {
									if(cellText == "" || cellText == undefined) {
										m_mask = nexacro._replaceAll(m_mask, "9", "#");
									} else {
										m_mask = nexacro._replaceAll(m_mask, "9", "0");
									}
								}
							}
							as = null;
						}
						if(disptype == "date" && (!m_mask || m_mask == "")) {
							var format = subCell[jj]._getAttrValue(subCell[jj].calendardateformat, j);
							if (format == null || format.length == 0 || !format.match(/[yMdHhms]/)) {
								format = "yyyy-mm-dd";
							}
							m_mask = format; //grid.getCellProperty("body",i,"calendardateformat");							
						}						
						rtnData = this._getDataType(cell_Displaytype, nDataType, cellText, cellValue, m_mask, grid.getSubCellProperty(sBandType,i,jj,"expr"));
						nDataType = rtnData[0];
						sType = rtnData[1];
						cellText = rtnData[2];
						cellValue = rtnData[3];

						var border_value = "";
						if (bodyCells[i]._colspan > 1) {
							if ((bodyCells[i]._colspan - 1) == nnCol) {
								border_value += "L";
							} else {
								border_value += "L";
								border_value += "R";
							}
						}
						if (bCells[i]._rowspan > 1) {
							if ((bCells[i]._rowspan - 1) == nnRow) {
								border_value += "T";
							} else {
								border_value += "T";
								border_value += "B";
							}
						}
						this._setFormatStyle(sBandType, nRow, nCol, subCell[jj], nDataType, j, i, cellText, cellValue, cell_Displaytype, m_mask, nnRow, nnCol);
                    }
                }

                rowFirst = rowLast = j * rowcnt + nRow + rowStart;
                colFirst = colLast = nCol + colStart;

                colLast += bCells[i]._colspan - 1;
                rowLast += bCells[i]._rowspan - 1;

                if (rowFirst != rowLast || colFirst != colLast) {
                    if (bCells[i]._subcells.length > 0) {
					} else {
						oMergeInfo.push({s: {c: colFirst, r: rowFirst}, e: {c: colLast, r: rowLast}});
                    }
                }
            }
			rtnData = null;
            if ((j % this.progress_update) == 0) {
				var exportObj = this.parent;
                exportObj._itemsIndex = j;
                this._startRow = j + 1;
                this._preStartRow = this._startRow;

                this._updateBarPos(exportObj, exportObj.exporteventtype);
                if (exportObj.onprogress) {
                    exportObj.on_fire_onprogress(exportObj, exportObj, j, exportObj.exporteventtype, this._startRow);
                }
				this._loopRowStart = j+1;
				var context = exportObj.parent;
				var pThis = this;
                nexacro._OnceCallbackTimer.callonce(
												context, 
												function() {
													pThis._ExportGridBodyLoop();
												}, 
												1);
				return;
            }
        }
		
		if(rowLast < 0) rowLast = this._loopRowStart * rowcnt + rowStart - 1; //rowLast = this._loopRowStart;
		
		if(pThis) pThis = null;
		this.progress_update = this._colFormatInfo = arrDataType = arrMaskType = arrExprType = arrColSize = null;
		this._rollbackSuppressInfo();
		
		this.WorkSheet.rowIdx = rowLast + 1;
		
		this._gridItemExportContinue();
    };

	_pExportItem._waitCursor = nexacro._emptyFn;
	delete _pExportItem;
	
	if(!nexacro.ExportProgress) {
		nexacro.ExportProgress = function (id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent) {
			nexacro.PopupControl.call(this, id, left, top, width, height, right, bottom, minwidth, maxwidth, minheight, maxheight, parent);

			this._uitype = 0;
			this.visible = false;

			this.progressbar = null;
			this._textWidth = 0;
			this._textHeight = 0;
		};
		var _pExportProgress = nexacro.ExportProgress.prototype = nexacro._createPrototype(nexacro.PopupControl, nexacro.ExportProgress);

		_pExportProgress._type_name = "ExportProgress";


		_pExportProgress.on_apply_color = function (color) {
			var textbox = this._textbox;
			if (textbox) {
				if (color) {
					textbox.set_color(color);
				}
				else {
					textbox.set_color("");
				}
			}
		};

		_pExportProgress.on_apply_font = function (font) {
			var textbox = this._textbox;
			if (textbox) {
				textbox.set_font(font);
			}
		};

		_pExportProgress.on_create_contents = function () {
			var control_elem = this.getElement();
			if (control_elem) {
				switch (this._uitype) {
					case 1:
						var progressbar = new nexacro.ProgressBar("progressbar", 0, 0, 1, 1, null, null, null, null, null, null, this);
						progressbar.createComponent();
						this.progressbar = progressbar;
						var textbox = new nexacro.Static("progressbar:text", 0, 0, 1, 1, null, null, null, null, null, null, this);
						textbox.createComponent();
						this._textbox = textbox;
						break;
					case 2:
						var app = nexacro.getApplication();
						if (app) {
							this.progressbar = app.mainframe.statusbar;
						}
						break;
				}
			}
		};

		_pExportProgress.createCommand = function () {
			return "";
		};

		_pExportProgress.on_created_contents = function (_window) {
			nexacro.PopupControl.prototype.on_created_contents.call(this, _window);
			_window = _window || this._getWindow();
			switch (this._uitype) {
				case 1:
					var textbox = this._textbox;
					var progressbar = this.progressbar;
					if (progressbar) {
						progressbar.on_created();
					}
					if (textbox) {
						textbox.on_created();
					}
					break;
				case 2:
					break;
			}
		};

		_pExportProgress.on_change_containerRect = function (width, height) {
			switch (this._uitype) {
				case 1:
					var textbox = this._textbox;
					if (textbox) {
						textbox.move(0, 0, width, height);
						var textwidth = this._textWidth;
						var textheight = this._textHeight;
					}
					var progressbar = this.progressbar;
					if (progressbar) {
						progressbar.move(null, null, width, 20, 0, 0);
					}
					break;
				case 2:
					break;
			}
		};

		_pExportProgress.on_destroy_contents = function () {
			switch (this._uitype) {
				case 1:
					var textbox = this._textbox;
					if (textbox) {
						textbox.destroy();
					}
					this.progressbar.destroy();
					this.progressbar = null;
					break;
				case 2:
					this.textbox = null;
					this.progressbar = null;
					break;
			}
		};



		_pExportProgress._getWindow = function () {
			return nexacro.Component.prototype._getWindow.call(this);
		};

		_pExportProgress.on_fire_onlbuttondown = function (button, alt_key, ctrl_key, shift_key, screenX, screenY, canvasX, canvasY, clientX, clientY, from_comp, from_refer_comp) {
			return true;
		};

		_pExportProgress._on_keydown = function (elem, keycode, altKey, ctrlKey, shiftKey) {
			if (keycode == nexacro.Event.KEY_TAB) {
				elem._event_stop = true;
			}
			else if (keycode == nexacro.Event.KEY_ESC) {
				nexacro._stopTransaction(this, 2);
			}

			return true;
		};


		_pExportProgress._show = function () {
			if (!this._is_created || !this.parent) {
				return;
			}

			var _window = this._getWindow();
			if (_window) {
				var left, top, width, height;

				left = _window.getLeft();
				top = _window.getTop();

				if (_window.frame) {
					var frame = _window.frame;
					width = frame.getOffsetWidth();
					height = frame.getOffsetHeight();
				}
				else {
					width = _window.getClientWidth();
					height = _window.getClientHeight();
				}

				var capture_comp = _window._getCaptureComp(true, true, this);
				if (capture_comp != this) {
					_window._setCaptureLock(this, true, true);
				}

				var cpd = this._getCurrentStylePadding();
				var pWidth = 0;
				var pHeight = 0;
				var _left = 0;
				var _top = 0;

				if (this._uitype == 1) {
					pWidth = (this._textWidth < 100 ? 100 : this._textWidth);
					pHeight = this._textHeight;
					if (cpd) {
						pWidth += cpd.left + cpd.right;
						pHeight += cpd.top + cpd.bottom;
					}
					_left = Math.round((width - pWidth) / 2);
					_top = Math.round((height - pHeight) / 2);
				}

				this.move(_left, _top, pWidth, pHeight, null, null);
				this.set_visible(true);
			}
		};

		_pExportProgress._hide = function () {
			var excelexport = this.parent;
			if (excelexport) {
				var _window = excelexport._getWindow();
				if (_window) {
					_window._releaseCaptureLock(this);

					if (nexacro._resize_popup_inbound == true) {
						var control_elem = this._control_element;
						if (control_elem) {
							control_elem.setElementSize(1, 1);
						}
					}
				}
			}
			if (this._is_created && this._is_alive) {
				this.set_visible(false);
			}
		};

		nexacro._getLongerStr = function (str1, str2, str3) {
			var len = arguments.length;
			if (len < 2) {
				return;
			}

			var str = arguments[0];
			for (var i = 1; i < len; i++) {
				if (str.length < arguments[i].length) {
					str = arguments[i];
				}
			}
			return str;
		};

		_pExportProgress._set_text = function (v) {
			switch (this._uitype) {
				case 1:
					this._textbox.set_text(v);
					break;
				case 2:
					var form = this._getForm();
					form.set_statustext(v);
					break;
			}
		};
		_pExportProgress._set_pos = function (v) {
			switch (this._uitype) {
				case 1:
					if (this.progressbar) {
						this.progressbar.set_pos(v);
					}
					break;
				case 2:
					var comp = this;
					while (comp && !comp._is_top_frame) {
						if (comp._is_frame) {
							comp.statusbar && comp.statusbar.progressbar.set_pos(v);
						}
						comp = comp.parent;
					}
					break;
			}
		};

		delete _pExportProgress;	
	}
}
