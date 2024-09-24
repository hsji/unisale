//XJS=ext_Dataset.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /*******************************************************************************************
        	FILENAME	: ext_Dataset.xjs
        	TITLE		: nexacro.Dataset Object의 기능을 확장한다.
        ********************************************************************************************
        	COMMENT  	:
        	HISTORY  	: 2016/03/04
        	AUTHOR  	: 이인규
        *******************************************************************************************/


        var _Dataset = nexacro.Dataset.prototype;
        /*******************************************************************************************
        	FUNCTION	: isUpdated()
        	DESCRIPTION	: 데이타셋 변경유무 반환
        	PARAMETERS	:
        	RETURN		: true/false
        *******************************************************************************************/
        _Dataset.isUpdated = function()
        {
        	if(this.getDeletedRowCount() > 0) return true;
        	if(this.rowcount <= 0) return false;

        	var nRowType;
        	for(var i=0;i<this.rowcount;i++)
        	{
        		nRowType = this.getRowType(i);
        		if(nRowType == 2 || nRowType == 4 || nRowType == 8)
        		{
        			return true;
        		}
        	}

        	return false;
        }

        /*******************************************************************************************
        	FUNCTION	: setColumnExt()
        	DESCRIPTION	: setColumn 대상 Column이 Dataset에 존재하지 않을 경우 addColumn 후 setColumn한다.
        	PARAMETERS	:
        	RETURN		: return setColumn()
        *******************************************************************************************/
        _Dataset.setColumnExt = function(row, col, val)
        {
        	var colinfo = this.getColumnInfo(col);
        	if(nexacro._isNull(colinfo))
        	{
        		this.addColumn(col, "string");
        	}
        	return this.setColumn(row, col, val);
        }

        _Dataset.setColumnAll = function(col, val)
        {
        	for(var i = 0, iL = this.getRowCount(); i < iL; i++)
        	{
        		this.setColumn(i, col, val);
        	}
        }

        _Dataset.getDataByCode = function(data, code, val)
        {
        	var v;
        	for(var i = 0, iL = this.getRowCount(); i < iL; i++)
        	{
        		v = this.getColumn(i, code);
        		if(v == val)
        		{
        			return this.getColumn(i, data);
        		}
        	}
        	return val;
        }

        _Dataset.setSequence = function(col, bStart1)
        {
        	for(var i = 0, iL = this.getRowCount(); i < iL; i++)
        	{
        		this.setColumn(i, col, bStart1 ? i+1 : i);
        	}
        }

        _Dataset.hasRow = function()
        {
        	return ( this.getRowCount() > 0 );
        }

        _Dataset.addRowByKey = function(col, val)
        {
        	var v, row;
        	for(var i = 0, iL = this.getRowCount(); i < iL; i++)
        	{
        		v = this.getColumn(i, col);
        		if(v == val)
        		{
        			return {succ:false, row:i};
        		}
        	}

        	row = this.addRow();
        	this.setColumn(row, col, val);
        	return {succ:true, row:row};
        }

        _Dataset.deleteRowsByKey = function(col, val)
        {
        	var v, row, len = this.rowcount;
        	for(var i=0; i<len; i++)
        	{
        		row = len-(i+1);
        		v = this.getColumn(row);
        		if(v != -1)
        		{
        			this.deleteRow(row);
        		}
        	}
        }

        _Dataset.setChartInfo = function(info)
        {
        	this._chartInfoInit = true;
        	this._chartInfo = {};
        	if(info)
        	{
        		for(var k in info)
        		{
        			this._chartInfo[k] = info[k];
        		}
        	}
        	this._chartInfo["binddataset"] = this.name;
        	this._chartInfo["dataset"] = this;
        }

        _Dataset.getChartInfo = function()
        {
        	if(this._chartInfoInit)
        	{
        		return this._chartInfo;
        	}
        }

        _Dataset.sort = function(colKey, colOrd, bAsc)
        {
        	var ord = ( bAsc === true ? "+" : "-" );
        	this.set_enableevent(false);

        	this.set_keystring("S:"+ord+colKey);
        	this.setSequence(colOrd, true);
        	this.set_keystring("");

        	for(var i = 1, iL = this.getRowCount(); i <= iL; i++)
        	{
        		var row = this.findRow(colOrd, i);
        		this.moveRow(row, i-1);
        	}

        	this.set_enableevent(true);
        }

        _Dataset.getColumnToArray = function(col)
        {
        	var arr = [], v;
        	for(var i = 0, iL = this.getRowCount(); i < iL; i++)
        	{
        		v = this.getColumn(i, col);
        		if(!nexacro._isNull(v))
        		{
        			arr.push(v);
        		}
        	}
        	return arr;
        }

        _Dataset.getColumnsToArray = function(cols)
        {
        	var arr = [], v, col;
        	for(var i = 0, iL = this.getRowCount(); i < iL; i++)
        	{
        		v = {};
        		for(var c = 0, cL = cols.length; c < cL; c++)
        		{
        			col = cols[c];
        			v[col] = this.getColumn(i, col);
        		}
        		arr.push(v);
        	}
        	return arr;
        }

        _Dataset.setFilterHasDataCnt = function(filterCols)
        {
        	var filter, col;
        	var filterCnt = filterCols.length;
        	if(filterCnt > 0)
        	{
        		for(var i = 0, iL = filterCnt; i < iL; i++)
        		{
        			col = filterCols[i];
        			if(filter)
        			{
        				filter += " || " + col + " > 0";
        			}else{
        				filter = col + " > 0";
        			}
        		}
        	}
        	trace(filter);
        	this.filter(filter);
        }

        _Dataset.getGrid = function()
        {
        	var objGrd = new Grid("grd_Auto_"+nexacro.__getUniqueIdNo(), "absolute", 0, 0, 0, 0, null, null);
        	this.parent.addChild(objGrd.name, objGrd);
        	objGrd.show();
         	objGrd.set_binddataset(this.name);
         	objGrd.appendContentsRow("head");
         	objGrd.appendContentsRow("body");
         	objGrd.appendContentsRow("summ");
         	objGrd.createFormat();
         	objGrd.excelExport(this.parent, this.name);
         	return objGrd.name;
        }

        _Dataset.getColumnGroupBy = function(col)
        {
        	var arr = [], v;
        	for(var i = 0, iL = this.getRowCount(); i < iL; i++)
        	{
        		v = this.getColumn(i, col);
        		arr.push(v);
        	}
        	return arr.reduce(function(a,b){if(a.indexOf(b)<0)a.push(b);return a;},[]);
        }

        _Dataset.getColumnsGroupBy = function(cols)
        {
        	var arr = this.getColumnsToArray(cols);
        	var groups = [];
        	for(var i = 0, len = arr.length; i<len; i+=1)
        	{
        		var obj = arr[i];
        		obj._count = 1;
        		if(groups.length == 0)
        		{
        			groups.push([obj]);
        		}
        		else
        		{
        			var equalGroup = false;
        			for(var a = 0, glen = groups.length; a<glen;a+=1)
        			{
        				var group = groups[a];
        				var equal = true;
        				var firstElement = group[0];
        				cols.forEach(function(col)
        							{
        								if(firstElement[col] !== obj[col])
        								{
        									equal = false;
        								}
        							});
        				if(equal)
        				{
        					equalGroup = group;
        				}
        			}
        			if(equalGroup)
        			{
        				//equalGroup.push(obj);
        				equalGroup[0]._count++;
        			}else{
        				groups.push([obj]);
        			}
        		}
        	}
        	return groups;
        };
        /*******************************************************************************************
        	FUNCTION	: excelExport(objForm, sFileNm, callback)
        	DESCRIPTION	:
        	PARAMETERS	: Dataset.getColumn 함수와 동일
        		- objForm 	: 함수를 호출한 Form
        		- sFileNm	: 출력할 Excel 파일명
        		- callback	: Callback 함수
        	RETURN		:
        *******************************************************************************************/
        _Dataset.excelImport = function(objForm, callback)
        {
        	var strServiceURL = application.services["ServiceURL"].url;
        	var excelImportObj = new ExcelImportObject("ExcelImport",objForm);
        	excelImportObj.set_importurl(strServiceURL+"xeni/XImport");
        	excelImportObj.set_importtype(nexacro.ImportTypes.EXCEL);	//default

        	if(objForm && callback)
        	{
        		excelImportObj.addEventHandler("onsuccess", callback, objForm);
        		//excelImportObj.addEventHandler("onerror", callback, objForm);
        	}
        	excelImportObj.addEventHandler("onsuccess", function(){
        													this.parent.removeChild(this.name);
        													this.destroy();
        												}, excelImportObj);

        	var range = "Sheet1!A1:";//strSheetName+"!"+strSheetArea;//"Command=getsheetlist";
        	var	dsout = this.name+"=output1";
        	excelImportObj.set_importfilemode("local");	//default
        	excelImportObj.importData("", range, dsout);
        }
        _Dataset.getRowByData = function(col, data)
        {
        	var v;
        	for(var i = 0, iL = this.getRowCount(); i < iL; i++)
        	{
        		v = this.getColumn(i, col);
        		if(v == data)
        		{
        			return i;
        		}
        	}
        	return -1;
        }
        _Dataset.getLastRowPosition = function()
        {
        	return this.getRowCount()-1;
        }

        _Dataset.findEmptyRow = function(col)
        {
        	var v, row = -1;

        	for(var i = 0, iL = this.getRowCount(); i < iL; i++)
        	{
        		v = this.getColumn(i, col);
        		if( nexacro._isNull(v) )
        		{
        			return i;
        		}
        	}
        	return row;
        }

        delete _Dataset;
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
