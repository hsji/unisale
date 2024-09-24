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

if (!nexacro.ExcelImportObjectJS) {
	
	if (ArrayBuffer && !ArrayBuffer.prototype.slice) {
	  ArrayBuffer.prototype.slice = function (begin, end) {
		var len = this.byteLength;
		begin = (begin|0) || 0;
		end = end === (void 0) ? len : (end|0);

		if (begin < 0) begin = Math.max(begin + len, 0);
		if (end < 0) end = Math.max(end + len, 0);

		if (len === 0 || begin >= len || begin >= end) {
		  return new ArrayBuffer(0);
		}

		var length = Math.min(len - begin, end - begin);
		var target = new ArrayBuffer(length);
		var targetArray = new Uint8Array(target);
		targetArray.set(new Uint8Array(this, begin, length));
		return target;
	  };
	}
	if(!nexacro.ExcelImportEventInfo) {
		nexacro.ExcelImportEventInfo = function (obj, id, url, refferObj) {
			this.id = this.eventid = id || "onsuccess";
			this.fromobject = obj;
			this.fromreferenceobject = refferObj;
			this.url = url;
		};
		var _pExcelImportEventInfo = nexacro._createPrototype(nexacro.Event, nexacro.ExcelImportEventInfo, nexacro.ExcelImportEventInfo);
		nexacro.ExcelImportEventInfo.prototype = _pExcelImportEventInfo;
		_pExcelImportEventInfo._type_name = "ExcelImportEventInfo";

		delete _pExcelImportEventInfo;
		
		nexacro.ExcelImportErrorEventInfo = function (obj, id, errortype, errormsg, errorobj, statuscode) {
			this.id = this.eventid = id || "onerror";
			this.fromobject = obj;
			this.fromreferenceobject = errorobj;
			this.errortype = errortype;
			this.errormsg = errormsg;
			this.statuscode = statuscode;
		};
		var _pExcelImportErrorEventInfo = nexacro._createPrototype(nexacro.ErrorEventInfo, nexacro.ExcelImportErrorEventInfo);
		nexacro.ExcelImportErrorEventInfo.prototype = _pExcelImportErrorEventInfo;
		_pExcelImportErrorEventInfo._type_name = "ExcelImportErrorEventInfo";

		delete _pExcelImportErrorEventInfo;
		
		nexacro.ImportTypes = 
			{
			EXCEL : 0x0100, 
			EXCEL97 : 0x0110, 
			EXCEL2007 : 0x0120, 
			HANCELL2014 : 0x0410, 
			CSV : 0x0500
		};
	}

	nexacro.ExcelImportObjectJS = function (name, parent) {
		this.id = this.name = name;

		if (!parent) {
			var app = nexacro.getApplication();
			if (app) {
				parent = app.getActiveForm();
				if (!parent) {
					parent = app.mainframe.childframe.form;
				}
			}
		}
		this.parent = parent;
		this._hidden_frame_handle = null;

		var unique_id = this._unique_id = this.parent._unique_id + "_" + this.id;
		
		if (nexacro._get_hidden_frame(unique_id, this._hidden_frame_handle)) {
			nexacro._destroy_hidden_frame(unique_id, this._hidden_frame_handle);
			console.log("###11###############");
		}
		nexacro._create_hidden_frame(unique_id, this._uploadComplete, this, "import");
		nexacro._append_hidden_item(unique_id, "upfile", this._checkUploadFile, this, this._hidden_frame_handle);
		nexacro._append_hidden_textitem(unique_id, "ds_command");
		
		console.log("###0###############");
		/*
		if (!nexacro._get_hidden_frame(unique_id, this._hidden_frame_handle)) {
			var ranid = new Date().valueOf().toString();
			nexacro._create_hidden_frame(unique_id, this._uploadComplete, this, "import");
			nexacro._append_hidden_item(unique_id, "upfile", this._checkUploadFile, this, this._hidden_frame_handle);
			nexacro._append_hidden_textitem(unique_id, "ds_command");
			console.log("###1###############");
		
// 			nexacro._create_hidden_frame(unique_id, ranid, this._uploadComplete, this);
// 			nexacro._append_hidden_item(unique_id, "upfile", this._checkUploadFile, this, this._hidden_frame_handle);
// 			nexacro._append_hidden_textitem(unique_id, "ds_command");
		}
		*/

		this.onerror = new nexacro.EventListener("onerror");
		this.onsuccess = new nexacro.EventListener("onsuccess");

		this.rABS = typeof FileReader !== "undefined" && typeof FileReader.prototype !== "undefined" && typeof FileReader.prototype.readAsBinaryString !== "undefined";
		this.use_worker = typeof Worker !== 'undefined';
		if(nexacro._Browser == "IE" && nexacro._BrowserVersion == 10) {
			this.transferable = false;
		} else {
			this.transferable = this.use_worker;
		}
		

		this._coltype = null;
		this._skiprow = -1;
		this._command = null;
		this._sheet = null;
		this._importdataset = null;
		this._useclientcol = null;
		this.limitsizekbyte = 0;
		this.formatcell = true;
		this.nodatarecorddelete = false;
		
		this.importtype = nexacro.ImportTypes.EXCEL;

		this._range = "";
		this._rangeValue = 
								{
									sc : 0 , ec : 0 , sr : 0 , er : 0 
								};

		this.version = "2019.4.26.1";

		this._event_list = 
			{
			"onerror" : 1, 
			"onsuccess" : 1
		};		
	};

	var _pExcelImport = nexacro.ExcelImportObjectJS.prototype = nexacro._createPrototype(nexacro._EventSinkObject, nexacro.ExcelImportObjectJS);
	_pExcelImport._type_name = "ExcelImportObjectJS";


	
	_pExcelImport.on_created = nexacro._emptyFn;

	_pExcelImport.set_formatcell = function (v) {
		this.formatcell = v;
	};
	
	_pExcelImport.set_limitsizekbyte = function (v) {
		if(isNaN(v)) v = 0;
		this.limitsizekbyte = v;
	};
	
	_pExcelImport.set_nodatarecorddelete = function (v) {
		if(v !== true) v = false;
		this.nodatarecorddelete = v;
	};
	
	_pExcelImport.worker_s2ab = function(s) {
		if(typeof ArrayBuffer !== 'undefined') {
		  var b = new ArrayBuffer(s.length*2), v = new Uint16Array(b);
		  for (var i=0; i != s.length; ++i) v[i] = s.charCodeAt(i);
		  return b;
		  //return [v, b];
		} else {
			var buf = new Array(s.length);
			for (var i=0; i!=s.length; ++i) buf[i] = s.charCodeAt(i) & 0xFF;
			return buf;
		}
	};
	
	_pExcelImport.worker_ab2str = function(data) {
		if(this.rABS) {
			var o = "", l = 0, w = 10240;
			for(; l<data.byteLength/w; ++l) o+=String.fromCharCode.apply(null,new Uint16Array(data.slice(l*w,l*w+w)));
			o+=String.fromCharCode.apply(null, new Uint16Array(data.slice(l*w)));
			return o;
		} else {
			var o = "", l = 0, w = 10240;
			for(; l<data.byteLength/w; ++l) o+=String.fromCharCode.apply(null,new Uint8Array(data.slice(l*w,l*w+w)));
			o+=String.fromCharCode.apply(null, new Uint8Array(data.slice(l*w)));
			return o;
		}
	};

	_pExcelImport.set_importtype = function (v) {
		switch ((v + "").toUpperCase()) {
			case "EXCEL":
				v = 0x0100;
				break;
			case "EXCEL97":
				v = 0x0110;
				break;
			case "EXCEL2007":
				v = 0x0120;
				break;
			case "HANCELL2010":
				v = 0x0400;
				break;
			case "HANCELL2014":
				v = 0x0410;
				break;
			case "CSV":
				v = 0x0500;
				break;
		}
		if (v != this.importtype) {
			this.importtype = v;
		}
		return v;
	};

	_pExcelImport._excelCharToNum = function(alpha) {
		var index = 0
		for (var i = 0, j = 1; i < j; i++, j++) {
			if (alpha == this._excelNumToChar(i)) {
				index = i;
				j = i;
			}
		}
		return index;
	};

	_pExcelImport._excelNumToChar = function(number) {
		var numeric = (number - 1) % 26;
		var letter = this._excelChr(65 + numeric);
		var number2 = parseInt((number - 1) / 26);
		if (number2 > 0) {
			return this._excelNumToChar(number2) + letter;
		} else {
			return letter;
		}
	};	

	_pExcelImport._excelChr = function(codePt) {
		if (codePt > 0xFFFF) {
			codePt -= 0x10000;
			return String.fromCharCode(0xD800 + (codePt >> 10), 0xDC00 + (codePt & 0x3FF));
		}
		return String.fromCharCode(codePt);
	};	

	_pExcelImport.importData = function (command, sheet, range, oDataset, useClientCol, nSkipRow) {
		if(oDataset._type_name != "Dataset") return;
		
		if(command == "getsheetlist") {
			oDataset.clear();
			oDataset.addColumn("number","int",3);
			oDataset.addColumn("sheetname","string",255);			
		} else {
			if(useClientCol) {
				if(oDataset.getColCount() == 0) {
					var evt = new nexacro.ExcelImportErrorEventInfo(this, "onerror", "option error", "Column정보가 없습니다.", this, -1);
					this.on_fire_onerror(this, evt);
					return;
				}
			} else {
				oDataset.clear();
			}
		}
		if(!sheet || sheet == "") sheet = 0;
		this._command = command;
		this._sheet = sheet;
		this._importdataset = oDataset;
		this._useclientcol = useClientCol;

		if(!range || range == "") range = null;
		this._range = range;
		if (range) {
			var arrRange = range.split(":");
			var nPos = -1;
			var fromRange = arrRange[0];
			if(fromRange) {
				for (var i = 0; i < fromRange.length; i++) {
					if (nexacro.isNumeric(fromRange.substr(i, 1))) {
						nPos = i;
						break;
					}
				}
			}
			if (nPos > 0) {
				var alpha = fromRange.substr(0, nPos);
				this._rangeValue.sr = nexacro.toNumber(fromRange.substr(nPos)) - 1;
				this._rangeValue.sc = nexacro.toNumber(this._excelCharToNum(alpha)) - 1;
			} else {
				this._rangeValue.sr = 0;
				this._rangeValue.sc = 0;
			}
			nPos = -1;
			var toRange = arrRange[1];
			if(toRange) {
				for (var i = 0; i < toRange.length; i++) {
					if (nexacro.isNumeric(toRange.substr(i, 1))) {
						nPos = i;
						break;
					}
				}
			}
			if (nPos > 0) {
				var alpha = toRange.substr(0, nPos);
				this._rangeValue.er = nexacro.toNumber(toRange.substr(nPos)) - 1;
				this._rangeValue.ec = nexacro.toNumber(this._excelCharToNum(alpha)) - 1;
			} else {
				this._rangeValue.er = null;
				this._rangeValue.ec = null;
			}
			if(this._rangeValue.sc > this._rangeValue.ec) this._rangeValue.ec = null;
			if(this._rangeValue.sr > this._rangeValue.er) this._rangeValue.er = null;
		} else {
			if(nSkipRow > 0) this._skiprow = nSkipRow;
		}
		
		nexacro._change_inputnode_name(this._input_node, "upfile");
		if(nexacro._Browser != "Runtime") {
			this._input_node.setAttribute("accept",".xls,.xlsx,.ods");
		}
		nexacro._findclick(this._unique_id, "upfile", this, this._hidden_frame_handle);

		return true;
	};
	
	_pExcelImport.destroy = function () {
		var unique_id = this._unique_id;
		if (this._hidden_frame_handle) {
			nexacro._remove_hidden_item(unique_id, "upfile", this._hidden_frame_handle);
			nexacro._remove_hidden_item(unique_id, "ds_command", this._hidden_frame_handle);
			nexacro._destroy_hidden_frame(unique_id, this, this._hidden_frame_handle);
		}
		
		if (this.parent) {
			this.parent.removeChild(this.id);
		}
		delete this._sheet;
		delete this._importdataset;
		delete this._command;
		this._command = this._sheet = this._importdataset = this._useclientcol = null;
		
		delete this._hidden_frame_handle;
		this._hidden_frame_handle = null;
		this.parent = null;

		return true;
	};

	_pExcelImport.on_fire_onerror = function (obj, e) {
		delete this._sheet;
		delete this._importdataset;
		delete this._command;
		
		this._command = this._sheet = this._importdataset = this._useclientcol = null;
		this._setWaitCursor(false);
		var event = this.onerror;
		if (event && event._has_handlers) {
			event._fireEvent(this, e);
		}
	};

	_pExcelImport.on_fire_onsuccess = function (obj, e) {
		delete this._sheet;
		delete this._importdataset;
		delete this._command;		
		this._command = this._sheet = this._importdataset = this._useclientcol = null;
		this._setWaitCursor(false);
		var event = this.onsuccess;
		if (event && event._has_handlers) {
			event._fireEvent(this, e);
		}
	};

	_pExcelImport._getExcelRowCol = function (cell) {
		var strLen = cell.length;
		var arr = [];
		for (var i = 0; i < strLen; i++) {
			if (!isNaN(cell[i])) {
				arr.push(cell.substring(0, i));
				arr.push(cell.substring(i));
				break;
			}
		}
		return arr;
	};

	_pExcelImport._waitCursor = nexacro._emptyFn;
	_pExcelImport._setParamter = nexacro._emptyFn;

	_pExcelImport._getForm = function () {
		var app = nexacro.getApplication();
		var form;
		if (app) {
			form = app.getActiveForm();
			if (!form) {
				var mainframe = app.getActiveFrame();
				var pThis = this;
				while (pThis && mainframe != pThis) {
					if (!pThis._is_frame) {
						pThis = pThis.parent;
					}
					else if (pThis.form) {
						return pThis.form;
					}
				}
			}
		}
		return form;
	};

	_pExcelImport._isPopupFrame = function () {
		return false;
	};

	_pExcelImport._uploadComplete = function (status, data, url, errcode, httpcode, locationurl, extramsg) {
	};

	_pExcelImport._checkFileName = function (str) {
		if (str == null) {
			return false;
		}
		var checkExcel = false;
		var extension = "";
		var index = str.lastIndexOf("\\");
		var filename = str.substring(index + 1);
		var _split = filename.split(".");
		var len = _split.length;
		if (len > 1) {
			extension = _split[len - 1];
			switch (extension) {
				case "xls":
					checkExcel = true;
					this._importType = nexacro.ImportTypes.EXCEL97;
					break;
				case "ods":
				case "xlsx":
					checkExcel = true;
					this._importType = nexacro.ImportTypes.EXCEL2007;
					break;
			}
		}
		return checkExcel;
	};
	
	_pExcelImport._safe_decode_range = function (range) {
		var o = {s:{c:0,r:0},e:{c:0,r:0}};
		var idx = 0, i = 0, cc = 0;
		var len = range.length;
		for(idx = 0; i < len; ++i) {
			if((cc=range.charCodeAt(i)-64) < 1 || cc > 26) break;
			idx = 26*idx + cc;
		}
		o.s.c = --idx;

		for(idx = 0; i < len; ++i) {
			if((cc=range.charCodeAt(i)-48) < 0 || cc > 9) break;
			idx = 10*idx + cc;
		}
		o.s.r = --idx;

		if(i === len || range.charCodeAt(++i) === 58) { o.e.c=o.s.c; o.e.r=o.s.r; return o; }

		for(idx = 0; i != len; ++i) {
			if((cc=range.charCodeAt(i)-64) < 1 || cc > 26) break;
			idx = 26*idx + cc;
		}
		o.e.c = --idx;

		for(idx = 0; i != len; ++i) {
			if((cc=range.charCodeAt(i)-48) < 0 || cc > 9) break;
			idx = 10*idx + cc;
		}
		o.e.r = --idx;
		return o;
	};	
	
	_pExcelImport._sheet_to_csv = function (sheet, opts, name) {
		var out = "", txt = "", qreg = /"/g;
		var o = opts == null ? {} : opts;
		var ds = this._importdataset;
		if(!ds) ds = this._datadataset;
		if(sheet == null || sheet["!ref"] == null) {
			ds.clearData();
			this.importEnd(name);			
			return "";
		}
		var r = this._safe_decode_range(sheet["!ref"]);
		var FS = o.FS !== undefined ? o.FS : ",", fs = FS.charCodeAt(0);
		var RS = o.RS !== undefined ? o.RS : "\n", rs = RS.charCodeAt(0);
		var row = "", rr = "", cols = [];
		var i = 0, cc = 0, val;
		var R = 0, C = 0;
		ds.set_enableevent(false);
		ds.clearData();
		
		var nAdd = 0;
		var nRow = 0;
		var sCol = "";
		for(C = r.s.c; C <= r.e.c; ++C) cols[C] = XLSX.utils.encode_col(C);
		
		if(this._useclientcol == true) {
			var nGap = r.e.c - r.s.c + 1;
			var colCnt = ds.getColCount();
			if(colCnt < nGap) {
				r.e.c = r.s.c + colCnt - 1;;
			}
		}
		if(this._range) {
			var tr = this._rangeValue;
			if(tr.sc && r.s.c <= tr.sc && r.e.c > tr.sc) r.s.c = tr.sc;
			if(tr.ec && r.s.c < tr.ec && r.e.c >= tr.ec) r.e.c = tr.ec;
			if(tr.sr && r.s.r <= tr.sr && r.e.r > tr.sr) r.s.r = tr.sr;
			if(tr.er && r.s.r < tr.er && r.e.r >= tr.er) r.e.r = tr.er;
		} else {
			if(this._skiprow > 0) {
				var tr = r.s.r + this._skiprow;
				if(r.e.r > tr) r.s.r = tr;
			}
		}
		
		// 급여대장
		rr = XLSX.utils.encode_row(0);
		val = sheet[cols[1] + rr];
		this._tempdata = val.v;
		
		// TITLE
		rr = XLSX.utils.encode_row(3);
		this._salaryTitle1 = [];
		this._salaryTitle2 = [];
		for(C = r.s.c; C <= r.e.c; ++C) {
			val = sheet[cols[C] + rr];
			this._salaryTitle1[C] = val;
		}
		
		rr = XLSX.utils.encode_row(4);
		for(C = r.s.c; C <= r.e.c; ++C) {
			val = sheet[cols[C] + rr];
			this._salaryTitle2[C] = val;
		}
		console.log(this._salaryTitle1, this._salaryTitle2);

		var arrColType = [];
		var sType = "";
		var sTmpType = "";
		var nv,colInfo;
		var bNoDataRec = true;
		for(R = r.s.r; R <= r.e.r; ++R) {
			nAdd = 0;
			row = "";
			rr = XLSX.utils.encode_row(R);
			bNoDataRec = true;
			for(C = r.s.c; C <= r.e.c; ++C) {
				val = sheet[cols[C] + rr];
				if(val == undefined) {
					val = { t : "s" , v : null };
				} else {
					bNoDataRec = false;
				}
				if(this.formatcell == false) {
					if(!val || (val && !val.v)) txt = "";
					else txt = val !== undefined ? ''+val.v : "";
				} else {
					txt = val !== undefined ? ''+XLSX.utils.format_cell(val) : "";
				}

				//console.log(R, C , val);
				sType = val.t? val.t : "s";
				if(R == r.s.r) {
					if(this._useclientcol == false) {
						sCol = "COL"  + ("" + nAdd).padLeft(3,'0');
						if(sType == "n") {
							ds.addColumn(sCol,"BIGDECIMAL",255);
						} else if(sType == "d") {
							ds.addColumn(sCol,"DATETIME",255);
						} else {
							ds.addColumn(sCol,"STRING",255);
						}
						arrColType[nAdd] = sType;
					} else {
						colInfo = ds.getColumnInfo(nAdd);
						switch(colInfo.type.toUpperCase()) {
								case "STRING" : 
										sTmpType = "s";	
										break;
								case "INT" 	 : 
								case "FLOAT"  : 
								case "BIGDECIMAL" : 
										sTmpType = "n";	break;
								case "DATE" : 
								case "TIME" : 
								case "DATETIME" : 
										sTmpType = "d";	break;
								default : sTmpType = "s";	break;
						}
						arrColType[nAdd] = sTmpType;
					}
				}
				if(C == r.s.c) nRow = ds.addRow();
				if((ds.getColCount()-1) < nAdd) continue;
				switch(sType) {
					case "s" :
						if(val.f && val.f > " ") {
							var x = XLSX.utils.format_cell(val);
							x = nexacro.replaceAll(x, ",","");
							x = nexacro.replaceAll(x, ".","");
							x = nexacro.toNumber(x);
							ds.setColumn(nRow,nAdd, x);
						} else {
							if(txt) ds.setColumn(nRow,nAdd,txt);
						}
						break;
					case "n" :
						if(val.f && val.f > " ") {
							var x = XLSX.utils.format_cell(val);
							x = nexacro.replaceAll(x, ",","");
							x = nexacro.replaceAll(x, ".","");
							x = nexacro.toNumber(x);
							ds.setColumn(nRow,nAdd, x);
						} else {
							if(isNaN(val.v)) {
								if(val.v) {
									nv = nexacro.toNumber(val.v.split(",").join(""));
									if(!isNaN(nv)) ds.setColumn(nRow,nAdd,nv);
								}
							} else {
								ds.setColumn(nRow,nAdd,val.v);
							}
						}
						break;
					case "d" :
					if(val.v) {
						var dt;
						if(val.v instanceof Date) {
							dt = val.v;
						} else {
							dt = new Date(val.v);
						}
						var date = new nexacro.Date();
						date.setFullYear(dt.getUTCFullYear());
						date.setMonth(dt.getUTCMonth());
						date.setDate(dt.getUTCDate());
						//if(val.v.indexOf(":")>=0) {
							date.setHours(dt.getUTCHours());
							date.setMinutes(dt.getUTCMinutes());
							date.setSeconds(dt.getUTCSeconds());
							var milli = dt.getUTCMilliseconds();
							if(milli != 0) date.setMilliseconds(milli);
						//}
						//var dt = val.w.replace(/-/g, '').replace(/ /g, '').replace(/:/g, '');
						ds.setColumn(nRow,nAdd,date);
						if(arrColType[nAdd] == "s") {
							var dts = date.setFullYear() + "" + (date.getMonth()+1).toString().padLeft(2,'0') + "" + date.getDate().toString().padLeft(2,'0');
							dts += date.getHours().toString().padLeft(2,'0') + "" + date.getMinutes().toString().padLeft(2,'0') + "" + date.getSeconds().toString().padLeft(2,'0');
							ds.setColumn(nRow,nAdd,dts);
						} else {
							ds.setColumn(nRow,nAdd,date);
						}
						date = dt = null;
					}
					default	:
				}
				nAdd++;
				val = txt = null;
			}
			if(this.nodatarecorddelete === true && bNoDataRec == true) {
				ds.deleteRow(nRow);
			}
			//out += row + RS;
		}
		ds.set_enableevent(true);
		this.importEnd(name);
	};	
	
	_pExcelImport.importEnd = function (name) {
		var evt = new nexacro.ExcelImportEventInfo(this, "onsuccess", name, this);
		this.on_fire_onsuccess(this, evt);
	};
	
	_pExcelImport._workbookRead = function (workbook,name) {
		var nSheetCnt = -1;
		var bTarget = false;
		var bFind = false;
		var pThis = this;
		workbook.SheetNames.forEach(
			function(sheetName) {
				nSheetCnt++;
				if(pThis._command == "getsheetlist") {
					bFind = true;
					var nRow = pThis._importdataset.addRow();
					pThis._importdataset.setColumn(nRow,"number",nRow+1);
					pThis._importdataset.setColumn(nRow,"sheetname",sheetName);
				} else {
					bTarget = false;
					if(typeof(pThis._sheet) == "number") {
						if(nSheetCnt == pThis._sheet) bTarget = true;
					} else {
						if(sheetName == pThis._sheet) bTarget = true;
					}
					if(bTarget) {
						bFind = true;
						try {
							var opts = null;
							pThis._sheet_to_csv(workbook.Sheets[sheetName], opts, name);
						} catch(e) {
							var ds = pThis._importdataset;
							if(!ds) ds = pThis._datadataset;
							ds.set_enableevent(true);
							var evt = new nexacro.ExcelImportErrorEventInfo(pThis, "onerror", "dataset parse error", e.errormsg, pThis, -1);
							pThis.on_fire_onerror(pThis, evt);
							return;
						}
					}
				}
			}
		);
		if(bFind == false) {
			var ds = this._importdataset;
			ds.set_enableevent(true);
			var evt = new nexacro.ExcelImportErrorEventInfo(this, "onerror", "not found sheet", "not found sheet", this, -1);
			pThis.on_fire_onerror(pThis, evt);
			ds = null;
			return;
		}
		if(this._command == "getsheetlist") {
			this.importEnd(name);
		}
	};
	
	_pExcelImport._checkUploadFile_NEXACRO = function (excel, filelist, newvalue) {
		var vf = new nexacro.VirtualFile("vfimport");
		var pThis = this;
		vf.addEventHandler("onsuccess", 
							function(obj, e) {
								if(e.reason == 1) {
									obj.read();
								} else if(e.reason == 2) {
									obj.destroy();
									vf = obj = null;
								} else if(e.reason == 3) {
									var data = e.binarydata;
									if(data) {
										try {
											//data = data.replace(/_/g, "/").replace(/-/g, "+");
											var workbook = XLSX.read(data, {type: 'base64',cellDates:true});
											pThis._workbookRead(workbook,excel);
											workbook = null;
										} catch(e) {
											var evt = new nexacro.ExcelImportErrorEventInfo(pThis, "onerror", "read error", e.errormsg, pThis, -1);
											pThis.on_fire_onerror(pThis, evt);
										}
										data = null;
									}
									obj.close();
									obj.clearEventHandler("onsuccess");
									obj.clearEventHandler("onerror");
								}
							},this);
		vf.addEventHandler("onerror", 
							function(obj, e) {
								try { obj.close(); obj.clearEventHandler("onsuccess"); obj.clearEventHandler("onerror"); } catch(e) {};
								var evt = new nexacro.ExcelImportErrorEventInfo(pThis, "onerror", "open error", e.errormsg, pThis, -1);
								pThis.on_fire_onerror(pThis, evt);
							},this);

		vf.open(excel,VirtualFile.openRead | VirtualFile.openBinary);
	};
	
	_pExcelImport._checkUploadFile_HTML = function (excel, filelist, newvalue) {
		console.log(filelist);
		var pThis = this;
		var f = filelist[0];
		var reader = new FileReader();
		var name = f.name;

		reader.onload = function(e) {
			var data = e.target.result;
			if(!data) return false;
			
			var workbook;
			var errorMsg;
			if(pThis.use_worker) {
				if(pThis.transferable) {
					try {
						if(typeof(data) == "object") data = pThis.worker_ab2str(data);
						workbook = XLSX.read(data, {type: 'binary',cellDates:true});
					} catch(e) {
						errorMsg = "[READ 1] " + e.message;
					}
				} else {
					try {
						var arr = pThis.rABS ? data : btoa(pThis.worker_ab2str(data));
						workbook = XLSX.read(arr, {type: pThis.rABS ? 'binary' : 'base64', cellDates:true});
					} catch(e) {
						errorMsg = "[READ 2] " + e.message;
					}
				}
			} else {
				try {
					if(pThis.rABS) {
						workbook = XLSX.read(data, {type: 'binary',cellDates:true});
					} else {
						var arr = pThis.worker_ab2str(data);
						workbook = XLSX.read(btoa(arr), {type: 'base64',cellDates:true});
						arr = null;
					}
				} catch(e) {
					errorMsg = "[READ 3] " + e.message;
				}
			}
			if(errorMsg) {
				var evt = new nexacro.ExcelImportErrorEventInfo(pThis, "onerror", errorMsg, errorMsg, pThis, -1);
				pThis.on_fire_onerror(pThis, evt);
				return;
			}
			if(!workbook) {
				data = reader = null;
				return false;
			}
			
			pThis._workbookRead(workbook, name);
			if(workbook) {
				try {
					delete workbook.Sheets;
					delete workbook.SheetNames;
					delete workbook.SSF;
					delete workbook.Strings;
					delete workbook.Directory;
				} catch(e) {
				}
				workbook = null;
			}
			data = reader = filelist = f = null;
		};
		if(this.rABS) reader.readAsBinaryString(f);
		else reader.readAsArrayBuffer(f);		
	};

	_pExcelImport._checkUploadFile = function (excel, filelist, newvalue) {
		if(!filelist) {
			var unique_id = this._unique_id;		
			nexacro._remove_hidden_item(unique_id, "upfile", this._hidden_frame_handle);
			nexacro._append_hidden_item(unique_id, "upfile", this._checkUploadFile, this, this._hidden_frame_handle);
		
			return;
		}
		
		if(this.limitsizekbyte > 0) {
			var fsleng = filelist.length;
			for(var fs=0;fs<fsleng;fs++) {
				if(filelist[fs] && ("size" in filelist[fs])) {
					var sz = filelist[fs].size / 1024.0;
					if(sz > this.limitsizekbyte) {
						var evt = new nexacro.ExcelImportErrorEventInfo(this, "onerror", "LIMITSIZE", "limit File Size", this, -8);
						this.on_fire_onerror(this, evt);
						return;			
					}
				}
			}
		}
		this._setWaitCursor(true);
		
		if (this._checkFileName(excel)) {
			if(nexacro._Browser == "Runtime") {
				if(!excel || excel == "") {
					this._setWaitCursor(false);
					return;
				}
				this._checkUploadFile_NEXACRO(excel, filelist, newvalue);
			} else {
				if(filelist.length == 0) {
					this._setWaitCursor(false);
					return;
				}
				this._checkUploadFile_HTML(excel, filelist, newvalue);
			}
		} else {
			var errormsg = "the file extension is wrong";
			var evt = new nexacro.ExcelImportErrorEventInfo(this, "onerror", "ObjectError", errormsg, this, -1);
			this.on_fire_onerror(this, evt);
		}
	};

	_pExcelImport._setWaitCursor = function (wait_flag) {
		var form = this._getForm();
		if (form) {
			form.setWaitCursor(wait_flag, true);
		}
	};

	_pExcelImport._getWindow = function () {
		var form = this.parent;
		if (form._is_form) {
			return form._getWindow();
		}
		return null;
	};

	_pExcelImport._getWindowHandle = function () {
		var form = this.parent;
		if (form._is_form) {
			return form._getWindowHandle();
		}
		return null;
	};

	_pExcelImport._changeFiles = nexacro._emptyFn;

	delete _pExcelImport;
}
