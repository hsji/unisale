//XJS=CommGrid.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.addIncludeScript(path,"Script::ext_CommEco.xjs");
        this.registerScript(path, function() {
        /*******************************************************************************************
        	FILENAME	: CommGrid.xjs
        	TITLE		: 공통 Grid 용 Script
        ********************************************************************************************
        	COMMENT  	:
        	HISTORY  	: 2014/02/12
        	AUTHOR  	: 김명성
        *******************************************************************************************/
        this.executeIncludeScript("Script::ext_CommEco.xjs"); /*include "Script::ext_CommEco.xjs"*/;
        this.ASC_MARK  = "▲";
        this.DESC_MARK = "▼";
        var application = nexacro.getApplication();
        /*******************************************************************************************
        	FUNCTION	: gfnCompInit(objPar)
        	DESCRIPTION	: 컴포넌트 초기화
        	PARAMETERS	:
        		- objPar	: 컴포넌트를 초기화 할 부모 Component(Form,Div,TabPage)
        	RETURN		:
        *******************************************************************************************/
        this.gfnCompInit = function(objPar)
        {
        	// next code 무시 - 다국어처리등이 있음
        	this.gfnFormOnload(objPar);
        }


        /*******************************************************************************************
        	FUNCTION	: _gfnSetTransration(obj, TL_SEQ [, nCellIdx, sBand])
        	DESCRIPTION	: 화면별 번역 사용 user property 일련번호에 매칭되는 언어로 text 값 및 tooltip 치환
        	PARAMETERS	:
        		- obj	: 화면에서 사용하고 있는 모든 컴포넌트 Object
        		- TL_SEQ: 해당 컴포넌트의 번역일련번호(user property)
        				  TL_SEQ user property 값과 일치 언어별 text를 찾아 치환 처리
        		- nCellIdx	: 그리드 Cell Index (obj가 Grid인 경우만 사용)
        		- sBand		: 그리드 Cell에 속한 Band값
        	RETURN		: none
        *******************************************************************************************/
        this._gfnSetTransration = function(obj, TL_SEQ, nCellIdx, sBand)
        {
        	var sTlData = "";
        	//var sTlDataKor = "";
        	var nFindRow = nexacro.getApplication().gdsTransInfo.findRow("TL_SEQ", TL_SEQ);
        	if (nFindRow>=0)
        	{
        		sTlData = nexacro.getApplication().gdsTransInfo.getColumn(nFindRow, "TL_DATA");
        		if(this.gfnIsUndefined(sTlData) == false)
        		{
        			sTlData = sTlData.replaceAll("\\n", "\n");
        			sTlDataKor = nexacro.getApplication().gdsTransInfo.getColumn(nFindRow, "TL_DATA_KOR");

        			if (this._ds_TransInfo.findRow("TL_SEQ", TL_SEQ) < 0) {
        				var nRowIdx = this._ds_TransInfo.addRow();
        				this._ds_TransInfo.setColumn(nRowIdx, "TL_SEQ", TL_SEQ);
        				this._ds_TransInfo.setColumn(nRowIdx, "TL_DATA", sTlData);
        				this._ds_TransInfo.setColumn(nRowIdx, "TL_TYPE", nexacro.getApplication().gdsTransInfo.getColumn("TL_TYPE"));
        			}

        			if (obj instanceof Grid) {
        				obj.setCellProperty(sBand, nCellIdx, "text", sTlData);
        				//임시로 툴팁은 한글로 나오게 처리
        				obj.setCellProperty(sBand, nCellIdx, "tooltiptext", sTlDataKor);
        			} else {
        				obj.set_text(sTlData);
        				if (obj instanceof Tab || obj instanceof Tabpage) {

        				}
        				else
        				{
        					//임시로 툴팁은 한글로 나오게 처리
        					obj.set_tooltiptext(sTlDataKor);
        					// text에 맞추어서 component width 자동조절 (디자인시 width를 최소 사이즈로 맞춤)
        					if(this.gfnIsEmpty(obj.minwidth) && obj.fittocontents != "width")
        					{
        						var nWidth = obj.getOffsetWidth();
        						obj.set_minwidth(nWidth);
        						obj.set_fittocontents("width");
        					}
        				}
        			}
        		}
        	}
        }


        /*
        this.fnGetByteStr = function(strValue, nLen)
        {
        	if(this.gfnIsEmpty(strValue)) return "";
        	var strReturn = "";
        	var strCh;
        	var nChLen = 0;
        	for(var i=0; i<strValue.length; i++) {
        		strCh = strValue.charAt(i);

        		nChLen += this.gfnGetLength(strCh, "ascii");
        		if(nChLen <= nLen) {
        			strReturn += strCh;
        		} else {
        			break;
        		}
        	}
        	if(this.gfnGetLength(strValue, "ascii") > nLen) {
        		strReturn += "…";
        	}
        	return strReturn;
        }
        */


        /*******************************************************************************************
        	FUNCTION	: gfnUserGrid(objGrid)
        	DESCRIPTION	: 사용자 그리드 적용
        	PARAMETERS	:
        		- objGrid	: 사용자 그리드를 적용할 Grid Object
        	RETURN		:
        *******************************************************************************************/
        this.gfnUserGrid = function(objGrid)
        {
        	//if(Eco.isEmpty(objGrid.org_cont)) {

        	if(this.gfnIsEmpty(objGrid.org_cont)) {
        		objGrid.org_cont = objGrid.getCurFormatString();
        	}

        	var pUrl = "Common::CommUserGridPopup.xfdl";
        	var pArgs = {sFormid:this.name,oGrid:objGrid,sGridId:this.gfnGetCompFullId(objGrid)};
        	var pWidth  = 400;
        	var pHeight = 450;
        	var pCallback = "gfnUserGridBack";

        	this.commUtil.popup(this, "UserGrid", pUrl, -1, -1, 400, 450, true, true, false, pArgs, pCallback);
        }

        /*******************************************************************************************
        	FUNCTION	: gfnUserGridBack(strPopId, varRtn)
        	DESCRIPTION	: 사용자 그리드 팝업 CallBack
        	PARAMETERS	:
        		- strPopId	: 팝업 ID
        		- varRtn	: 팝업 리턴 값
        	RETURN		:
        *******************************************************************************************/
        this.gfnUserGridBack = function(strPopId, varRtn)
        {
        	varRtn = this.commUtil.popupReturn();
        	if(this.gfnIsEmpty(varRtn)) return;

        	var objGrid = eval(varRtn[0]);

        	objGrid.set_formats(varRtn[1]);
        }

        /*******************************************************************************************
        	FUNCTION	: gfnGetCompFullId(objComp)
        	DESCRIPTION	: id로 컴포넌트를 찾을수 있게 하기 위하여 Full Component id를 찾아서 리턴
        	PARAMETERS	:
        		- objComp	: 대상 Object
        	RETURN		: 컴포넌트의 해당화면의 Full Id
        *******************************************************************************************/
        this.gfnGetCompFullId = function(objComp)
        {
        	var sRtn = objComp.name;
        	var sPname = this.name;
        	if(sRtn == this.name) return sRtn;
        	var oPComp = objComp.parent;
        	for(var i=0; i<10; i++) {
        		if(oPComp.name == sPname) break;
        		else {
        			sRtn = oPComp.name + "." + sRtn;
        			oPComp = oPComp.parent;
        		}
        	}
        	return "this." + sRtn;
        }

        /*******************************************************************************************
        	FUNCTION	: gfnSortGrid(objGrid)
        	DESCRIPTION	: Grid 멀티 Sort
        	PARAMETERS	:
        		- objGrid	: 멀티 Sort를 적용할 Grid Object
        	RETURN		:
        *******************************************************************************************/
        this.gfnSortGrid = function(objGrid)
        {
        	if(this.gfnIsEmpty(objGrid.org_cont)) {
        		objGrid.org_cont = objGrid.getCurFormatString();
        	}

        	var pUrl = "Common::CommMultiSortGridPopup.xfdl";
        	var pArgs = {oGrid:objGrid,sGridId:this.gfnGetCompFullId(objGrid)};
        	var pWidth  = 400;
        	var pHeight = 450;
        	var pCallback ="gfnSortGridBack";

        	this.commUtil.popup(this, "SortGrid", pUrl, -1, -1, 400, 450, true, true, false, pArgs, pCallback);
        }

        /*******************************************************************************************
        	FUNCTION	: gfnSortGridBack(strPopId, varRtn)
        	DESCRIPTION	: Grid 멀티 Sort 팝업 CallBack
        	PARAMETERS	:
        		- strPopId	: 팝업 ID
        		- varRtn	: 팝업 리턴 값
        	RETURN		:
        *******************************************************************************************/
        this.gfnSortGridBack = function(strPopId, varRtn)
        {
        	if(this.gfnIsEmpty(varRtn)) return;

        	var objGrid = eval(varRtn[2]);
        	var objData = this.lookup(objGrid.binddataset);
        	var arrSort = varRtn[0].split("|");
        	var strSort = "S:";
        	for(var i=0; i<arrSort.length; i++) {
        		strSort += arrSort[i];
        	}
        	objData.set_keystring(strSort);

        	this.gfnSetGridSortMark(objGrid, varRtn[1], varRtn[0]);
        }

        /*******************************************************************************************
        	FUNCTION	: gfnSetGridSortMark(objGrid, strIdx, strSort)
        	DESCRIPTION	: Grid 멀티 Sort Mark 적용
        	PARAMETERS	:
        		- objGrid	: 멀티 Sort Mark를 적용할 Grid Object
        		- strIdx	: 멀티 Sort Mark를 적용할 Head Cell Index
        		- strSort	: 멀티 Sort Mark를 적용할 Sort 종류
        	RETURN		:
        *******************************************************************************************/
        this.gfnSetGridSortMark = function(objGrid, strIdx, strSort)
        {
        	this.gfnClearGridSortMark(objGrid);

        	var arrIdx = strIdx.split("|");
        	var arrSort = strSort.split("|");
        	var strText;
        	var nIdx;
        	for(var i=0; i<arrIdx.length; i++) {
        		nIdx = parseInt(arrIdx[i]);
        		strText = objGrid.getCellProperty("head", nIdx, "text");
        		if(arrSort[i].substr(0, 1) == "-") {
        			strText = strText + " " + this.DESC_MARK;
        		} else {
        			strText = strText + " " + this.ASC_MARK;
        		}

        		objGrid.setCellProperty("head", nIdx, "text", strText);
        	}
        }

        /*******************************************************************************************
        	FUNCTION	: gfnClearGridSortMark(objGrid, nCell)
        	DESCRIPTION	: Grid 멀티 Sort Mark Clear
        	PARAMETERS	:
        		- objGrid	: 멀티 Sort Mark를 Clear할 Grid Object
        		- nCell	: 처리할 Cell의 인덱스
        	RETURN		:
        *******************************************************************************************/
        this.gfnClearGridSortMark = function(objGrid, nCell)
        {
        	var strText;
        	for(var i=0; i<objGrid.getCellCount("head"); i++) {
        		if(nCell == i) continue;	// 선택한 Cell을 제외하고 처리
        		if(objGrid.getCellProperty("head",i,"edittype") == "checkbox") {
        			objGrid.setCellProperty("head",i,"text", "0");
        			continue;
        		}
        		strText = objGrid.getCellProperty("head", i, "text");
        		if(this.gfnIsEmpty(strText) || strText=="") continue;
        		strText = strText.replace(this.ASC_MARK, "").replace(this.DESC_MARK, "");
        		objGrid.setCellProperty("head", i, "text", strText.trim());
        	}
        }

        /*******************************************************************************************
        	FUNCTION	: gfnIsEvent(objComp, strEvent)
        	DESCRIPTION	: 컴포넌트의 해당 이벤트의 생성여부
        	PARAMETERS	:
        		- objComp	: 이벤트 생성여부를 확인할 컴포넌트
        		- strEvent	: 확인할 이벤트(ex: onkeyup, onheadclick 등등)
        	RETURN		: 생성(true) 미생성(false)
        *******************************************************************************************/
        this.gfnIsEvent = function(objComp, strEvent)
        {
        	if(this.gfnIsEmpty(objComp)) return false;
        	if(this.gfnIsEmpty(strEvent)) return false;
        	var blnRtn = false;
        	for(var i in objComp){
        		if(objComp[i] == "[object EventListener]") {
        			if(i.toLowerCase() == strEvent.toLowerCase()) {
        				blnRtn = true;
        				break;
        			}
        		}
        	}
        	return blnRtn;
        }

        /*******************************************************************************************
        	FUNCTION	: comp_onkeyup(obj, e)
        	DESCRIPTION	: 컴포넌트의 엔터키를 누를시 이동처리
        	PARAMETERS	:
        		- obj	: 이벤트가 발생한 컴포넌트
        		- e	: KeyEventInfo 이벤트 Object
        	RETURN		:
        *******************************************************************************************/
        this.comp_onkeyup = function(obj, e)
        {
        	if(e.keycode == 13) {
        		var objNComp = this.getNextComponent(obj, true);
        		if(objNComp != null) {
        			objNComp.setFocus();
        		}
        	}
        }

        /*******************************************************************************************
        	FUNCTION	: grid_onheadclick(obj, e)
        	DESCRIPTION	: Grid onheadclick event(sort기능)
        	PARAMETERS	:
        		- obj	: 이벤트가 발생한 컴포넌트
        		- e	: GridClickEventInfo 이벤트 Object
        	RETURN		:
        *******************************************************************************************/
        this.grid_onheadclick = function(obj, e)
        {
        	if(e.row == -2) return;
        	if(obj.getCellProperty("head",e.cell,"edittype") == "checkbox") {
        		this.gfnSetGridCheckAll(obj, e);
        	} else {
        		if(this.gfnIsEmpty(obj.sort) && obj.sort != "false") {
        			if(obj.getCellProperty("head",e.cell,"displaytype") == "checkbox") return; // 헤더의 display가 checkbox 이면 리턴
        			var nCol = obj.getCellProperty("head",e.cell, "col");
        			if(obj.getCellProperty("body",nCol,"text") == null) return; // 컬럼정보가 없으면 리턴
        			if(obj.getCellProperty("body",nCol,"text").indexOf("bind") < 0) return; // 바인드 정보가 아니면 리턴
        			this.gfnGridProcSort(obj, e.cell);
        		}
        	}
        }

        /*******************************************************************************************
        	FUNCTION	: grid_onenterdown(obj, e)
        	DESCRIPTION	: Grid onenterdown event(수정모드 Cell 안에서 Enter 키 입력시)
        	PARAMETERS	:
        		- obj	: 이벤트가 발생한 컴포넌트
        		- e	: GridEditEventInfo 이벤트 Object
        	RETURN		:
        *******************************************************************************************/
        this.grid_onenterdown = function(obj, e)
        {
            if(e.row < 0) return;
        	if(!obj.moveToNextCell()) return;

        	obj.showEditor(true);
        }

        /*******************************************************************************************
        	FUNCTION	: gfnSetGridCheckAll(obj, e)
        	DESCRIPTION	: 그리드 헤드 클릭시 전체체크 하는 함수
        	PARAMETERS	:
        		- obj	: 이벤트가 발생한 Grid 컴포넌트
        		- e	: GridClickEventInfo 이벤트 Object
        	RETURN		:
        *******************************************************************************************/
        this.gfnSetGridCheckAll = function(obj, e)
        {
        	if(obj.readonly == true) return;
        	var sType;
        	var sChk;
        	var sVal;
        	var sChkVal;
        	var oDsObj;
        	var nHeadCell  = e.cell;
        	var nBodyCell;
        	var nSubCnt = obj.getSubCellCount("head", nHeadCell);

        	oDsObj  = this.lookup(obj.binddataset);
        	if(oDsObj.getRowCount() < 1) return;

        	if(obj.getCellCount("body") != obj.getCellCount("head")) {
        		nBodyCell = parseInt(obj.getCellProperty("head", nHeadCell, "col"));
        	} else {
        		nBodyCell = e.cell;
        	}
        	sChkVal = obj.getCellProperty("body", nBodyCell, "text");
        	sChkVal = sChkVal.replace("bind:", "");
        	if(this.gfnIsEmpty(sChkVal)) {
        		trace("ERROR [setGridCheckAll] 컬럼정보가 없습니다.");
        		return;
        	}

        	if (nSubCnt > 0) {	// Merge한 셀이 있는 경우
        		var nChkIdx = -1;
        		for ( var i = 0; i < nSubCnt; i++) {
        			sType = obj.getSubCellProperty("head",nHeadCell,i,"displaytype");

        			if(sType == "checkbox") {
        				nChkIdx =  i;
        				break;
        			}
        		}
        		if (nChkIdx == -1) { return; }

        		// Head셋팅
        		sVal = obj.getSubCellProperty("head", nHeadCell, nChkIdx, "text");

        		if (sVal == "0") {
        			obj.setSubCellProperty("head",nHeadCell,nChkIdx,"text", '1');
        			sChk="1";
        		} else {
        			obj.setSubCellProperty("head",nHeadCell,nChkIdx,"text", '0');
        			sChk="0";
        		}
        	} else {			// Merge한 셀이 없는 경우
        		sType = obj.getCellProperty("head", nHeadCell, "displaytype");

        		if(sType != "checkbox") {
        			return;
        		}

        		// Head셋팅
        		sVal = obj.getCellProperty("head", nHeadCell, "text");

        		if (sVal == "0") {
        			obj.setCellProperty("head", nHeadCell, "text", '1');
        			sChk="1";
        		} else {
        			obj.setCellProperty("head", nHeadCell, "text", '0');
        			sChk="0";
        		}
        	}

        	//alert("start!!");

        	// Body셋팅
        	oDsObj.set_enableevent(false);
        	oDsObj.updatecontrol = false;
        	for(var i=0 ; i< oDsObj.rowcount ; i++) {
        		oDsObj.setColumn(i, sChkVal, sChk);
        	}
        	oDsObj.set_enableevent(true);
        	oDsObj.updatecontrol = true;
        }

        /*******************************************************************************************
        	FUNCTION	: gfnGridProcSort(objGrid, nCell, sResetCol, sDefaultCol)
        	DESCRIPTION	: 단일 Column Sort 처리 하는 함수
        	PARAMETERS	:
        		- objGrid	: 처리할 Grid 객체
        		- nCell	: 처리할 Cell의 인덱스
        		- sResetCol	: 리셋 할 컬럼
        		- sDefaultCol	: 기본 Sort 할 컬럼
        	RETURN		:
        *******************************************************************************************/
        this.gfnGridProcSort = function(objGrid, nCell, sResetCol, sDefaultCol)
        {
        	if(this.gfnIsEmpty(sResetCol)) sResetCol = "";
        	if(this.gfnIsEmpty(sDefaultCol)) sDefaultCol = "";

        	// Grid Bind Dataset 추출
        	var oDsObj = this.lookup(objGrid.binddataset);

        	if(oDsObj.getRowCount() < 1) return;

        	var sHeadText;		// Head Text + SortMark
            var nSortCol;           	// 선택된 Head의 Column Index
            var nSortSpan;          	// 선택된 Head의 ColSpan 정보
            var aSplitCol;			// Grid body Column의 text의 colid 추출 : ex)bind:Col1 - split처리(":")
            var sSortColumns = "";  	// Grid Sort 대상 Column
            var nRowDepth;

            var nHeadCnt = objGrid.getCellCount("head");    // Grid Head Cell Count
            var nBodyCnt = objGrid.getCellCount("body");    // Grid Body Cell Count

            var nSortRow = objGrid.getCellProperty("head",nCell,"row");

        	for (var nHead=0; nHead<nHeadCnt; nHead++) {
        		nRowDepth = objGrid.getCellProperty("head", nHead, "row");
        		if ( (nCell == nHead) && (nSortRow == nRowDepth) ) break;
        	}

        	nSortCol = objGrid.getCellProperty("head", nHead, "col");

        	var nBodyRow = this.gfnGridSortBodyDepth(objGrid);

        	for (var nBody=0; nBody<nBodyCnt; nBody++) {
        		if (nBodyRow > 0) {
        			if ( (nSortCol == objGrid.getCellProperty("body", nBody, "col")) &&
        				 (nSortRow == objGrid.getCellProperty("body", nBody, "row")) ) break;
        		} else {
        			if (nSortCol == objGrid.getCellProperty("body", nBody, "col")) break;
        		}
        	}

        	nSortSpan = objGrid.getCellProperty("head", nHead, "colspan");
        	if(nSortSpan > 1) return;

        	// Grid Head의 해당 Column이 Asc(▲) 인 경우
        	if (objGrid.getCellProperty("head", nCell, "text").indexOf(this.ASC_MARK) > -1) {
        		if (objGrid.getCellProperty("head", nCell, "colspan") > 1) {
        			nSortSpan = objGrid.getCellProperty("head", nHead, "colspan");

        			for (var i=0; i<nBodyCnt; i++) {
        				if ( (objGrid.getCellProperty("body", i, "col") >= nSortCol) &&
                            objGrid.getCellProperty("body", i, "col") < (Math.abs(nSortCol) + Math.abs(nSortSpan) ) ) {
                            if ((this.gfnIsEmpty(objGrid.getCellProperty("body", i, "text"))) &&
        						(objGrid.getCellProperty("body", i, "text").length > 0)) {
                                aSplitCol = objGrid.getCellProperty("body", i, "text").split(":");
                                sSortColumns += "-" + aSplitCol[1];
                            }
                        }
        			}
        		} else {
        			aSplitCol = objGrid.getCellProperty("body", nBody, "text").split(":");
        			sSortColumns += "-" + aSplitCol[1];
        		}

        		sHeadText = objGrid.getCellProperty("head",nCell,"text");
                sHeadText = sHeadText.replace(this.ASC_MARK, this.DESC_MARK);
        	} else if (objGrid.getCellProperty("head", nCell, "text").indexOf(this.DESC_MARK) > -1) { // Grid Head의 해당 Column이 Desc(▼) 인 경우
        		var nSortIdx = 0;

        		// Sort Mark 제거 시 해당 Grid의 Column Index에 대해서 Sort 처리(Max 3 Column)
        		if(!this.gfnIsEmpty(sResetCol) && sResetCol.length > 0) {
        			sSortColumns = this.gfnGridDefaultSortCols(sResetCol);	// Sort Column이 정의된 경우(매개변수)
        		}

        		sHeadText = objGrid.getCellProperty("head", nCell, "text");
                sHeadText = sHeadText.replace(this.DESC_MARK, "");

        	// 초기값인 경우(Sort 미 적용) 시
        	} else {
        		if (objGrid.getCellProperty("head",nCell,"colspan") > 1) {
        			nSortSpan = objGrid.getCellProperty("head", nHead, "colspan");

        			for (var i=0; i<nBodyCnt; i++) {
        				if((objGrid.getCellProperty("body", i, "col") >= nSortCol) && (objGrid.getCellProperty("body", i, "col") < (Math.abs(nSortCol) + Math.abs(nSortSpan)))) {
                            if ((this.gfnIsEmpty(objGrid.getCellProperty("body", i, "text"))) && (objGrid.getCellProperty("body", i, "text").length > 0)) {
        						aSplitCol = objGrid.getCellProperty("body", i, "text").split(":");
                                sSortColumns += "+" + aSplitCol[1];
                            }
                        }
        			}

        		} else {
        			aSplitCol = objGrid.getCellProperty("body", nBody, "text").split(":");
        			sSortColumns += "+" + aSplitCol[1];
        		}

        		sHeadText = objGrid.getCellProperty("head", nCell, "text");
                sHeadText = sHeadText + this.ASC_MARK;
        	}

        	//Default Column 확인
        	if (!this.gfnIsEmpty(sDefaultCol) && sDefaultCol.length > 0) {
        		sSortColumns = this.gfnGridDefaultSortCols(sDefaultCol) + sSortColumns;
        	}

        	//oDsObj.set_enableevent(false);

        	// 해당 Column에 대한 Sort 처리
        	if(sSortColumns.length > 0) { oDsObj.set_keystring("S:" + sSortColumns); }
        	else                        { oDsObj.set_keystring(""); }

        	// Grid의 Row Position 설정(Sort 처리 시 Row Position 변경)
        	//oDsObj.set_rowposition(0);

        	// 선택 Head의 Text 변경 (Sort Mark 적용)
        	objGrid.setCellProperty("head", nCell, "text", sHeadText);

        	//oDsObj.set_enableevent(true);

        	// Selected Column을 제외한 Sort Mark 제거
        	this.gfnClearGridSortMark(objGrid, nCell);
        }

        /*******************************************************************************************
        	FUNCTION	: gfnGridSortBodyDepth(objGrid)
        	DESCRIPTION	: Grid Head(band)의 Row Depth 계산 하는 함수
        	PARAMETERS	:
        		- objGrid	: 처리할 Grid 객체
        	RETURN		: Head(band) Row Depth(Number)
        *******************************************************************************************/
        this.gfnGridSortBodyDepth = function(objGrid)
        {
        	var nRtnVal = 0;
        	var nRowDepth = 0;

            var nBodyCnt = objGrid.getCellCount("body");    // Grid Body Cell Count

            for (var i=0; i<nBodyCnt; i++) {
                nRowDepth = objGrid.getCellProperty("body",i,"row");
                if (nRowDepth > nRtnVal) nRtnVal = nRowDepth;
            }

            return nRtnVal;
        }

        /*******************************************************************************************
        	FUNCTION	: gfnGridDefaultSortCols(sResetCol)
        	DESCRIPTION	: Sort Mark 제거 시 기본 Sort Column 정의(sResetColumn) 하는 함수
        	PARAMETERS	:
        		- sResetCol	: 리셋 할 컬럼
        	RETURN		:
        *******************************************************************************************/
        this.gfnGridDefaultSortCols = function(sResetCol)
        {
        	var sRtnVal = "";
        	var aSortCol = sResetCol.split(",");
            var nSortLen = aSortCol.length;

            for (i=0; i<nSortLen; i++) {
                if (aSortCol[i].length < 1) continue;
                sRtnVal += "+" + aSortCol[i];
            }

            return sRtnVal;
        }


        /*******************************************************************************************
        	FUNCTION	: gfn_excelExport(objForm, objGrid, sFileNm)
        	DESCRIPTION	:
        	PARAMETERS	:
        		- objForm	:
        		- objGrid	:
        		- sFileNm	:
        	RETURN		:
        *******************************************************************************************/
        this.gfn_excelExport = function(objForm, objGrid, sFileNm, callback)
        {
        	this.gfnExcelExport(objGrid, sFileNm, sFileNm, "EXCEL2007","", sFileNm, true, "");
        }

        /*******************************************************************************************
        	FUNCTION	: gfn_excelExport(objDs)
        	DESCRIPTION	:
        	PARAMETERS	:
        		- objDs	:
        	RETURN		:
        *******************************************************************************************/
        this.gfn_excelImport = function(objDs)
        {
        	application.apTopFrame.form.fn_excelImport(objDs);
        }


        this.gfnCompDisable = function(objPar, bLockFlag, arrExceptionComp)
        {
        	if(objPar == null) return;
        	var bDuplicateEvent = true;

        	var objComp = objPar.components;
        	for(var i=0;i<objComp.length;i++)
        	{
        		// 예외컴포넌트 확인
        		var bExcepFlag = false;
        		if (!this.gfnIsEmpty(arrExceptionComp)) {
        			for (var j=0; j<arrExceptionComp.length; j++) {


        				//var objExcep = this.components[arrExceptionComp[j].name];
        				if (objComp[i] == arrExceptionComp[j]) {
        					bExcepFlag = true;
        					break;
        				}
        			}
        		}

        		/*	readonly: Calendar, CheckBox, Combo, Edit, Grid, ListBox, ListView, MaskEdit, Radio, Sketch, Spin, TextArea	*/
        		/*	enable	: Button, FileDownload, FileUpload, Div*/
        		if(objComp[i] instanceof Calendar || objComp[i] instanceof CheckBox || objComp[i] instanceof Combo || objComp[i] instanceof Edit || objComp[i] instanceof Grid
        		 || objComp[i] instanceof MaskEdit || objComp[i] instanceof Radio || objComp[i] instanceof Spin || objComp[i] instanceof TextArea)
        		{

        			if (!bExcepFlag) {
        				objComp[i].set_readonly(bLockFlag);
        				///trace("readonly : "+objComp[i].name +" // "+objComp[i].readonly);
        			}
        		} else if (objComp[i] instanceof Div) {
        			if (!bExcepFlag)	this.gfnCompDisable (objComp[i].form, bLockFlag, arrExceptionComp);
        		} else if(objComp[i] instanceof Button || objComp[i] instanceof FileDownload || objComp[i] instanceof FileUpload )
        		{
        			if (!bExcepFlag) {
        				if (bLockFlag)	objComp[i].set_enable(false);
        				else			objComp[i].set_enable(true);
        				//trace("disable : "+objComp[i].name +" // "+ objComp[i].enable);
        			}
        		}
        	}
        }





        /***************************************************************
        		[계약금액 마스킹 처리] 1. grid display type (mask)
        ***************************************************************/
        this.gfn_getPriceDisplayType = function(edttype)
        {
        	var sRtnVal= "";
        	if (this.gfnIsEmpty(edttype)) edttype = "normal";

        	if (this.FV_AUTH_PRICE_MASK) {
        		sRtnVal = "mask";
        	} else {
        		sRtnVal = edttype;
        	}
        	return sRtnVal;
        }

        /***************************************************************
        		[계약금액 마스킹 처리] 2. grid MaskEdit type (string)
        ***************************************************************/
        this.gfn_getPriceMaskEdtType = function()
        {
        	var sRtnVal= "";
        	if (this.FV_AUTH_PRICE_MASK) {
        		sRtnVal = "string";
        	} else {
        		sRtnVal = "number";
        	}
        	return sRtnVal;
        }


        /***************************************************************
        		[계약금액 마스킹 처리] 3. grid Maskformat ({@...@})
        ***************************************************************/
        this.gfn_getPriceMaskformat = function(nVal)
        {
        	var sRtnVal= "";
        	if (this.FV_AUTH_PRICE_MASK) {
        		sRtnVal= "{";
        		var ntxtLen = nVal.toString().length;

        		if (ntxtLen>0) {
        			for (var i=0; i<ntxtLen; i++) {
        				sRtnVal = sRtnVal + "@";
        				if (i == ntxtLen-1) {
        					sRtnVal = sRtnVal + "}";
        				}
        			}
        		} else {
        			sRtnVal = sRtnVal + "}";
        		}
        	} else {
        		sRtnVal = "#,##0";
        	}
        	return sRtnVal;
        }
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
