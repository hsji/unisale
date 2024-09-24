/**
*  컨설팅 표준화 작업
*  @FileName 	Resize2.js 
*  @Creator 	consulting
*  @CreateDate 	2017.03.08
*  @Desction   		
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
*  2017.03.08     	consulting 	                최초 생성 
*******************************************************************************
*/

var pForm  = nexacro.Form.prototype;


//----------------------- rezise 시작 --------------------------------------//
/**
* @class	폼내 가장 하단에 있는 Component위치 기준으로 최상위 프레임의 높이를 resize함.(praent resize포함)
* @param	{object} objForm : 리사이즈 적용할 form 
* @return	N/A
*/
pForm.gfnResizeComp2 = function(objForm)
{
	var nMaxBottom = 0;
	for (var i=0; i<objForm.components.length; i++) 
	{
		if (objForm.components[i].visible) 
		{
			if (nMaxBottom < objForm.components[i].getOffsetBottom())
			{
				nMaxBottom = objForm.components[i].getOffsetBottom();
			}	
		}
	}
	
	var oriHeight = objForm.getOffsetHeight();
	this.gfnSetFormHeight(objForm, nMaxBottom);
}

/**
* @class	폼 사이즈 재조정
* @param	{object} objForm : 리사이즈 적용할 form 
* @param	{Number} nHeight : 높이 
* @return	N/A
*/
pForm.gfnSetFormHeight = function(objForm, nHeight) 
{
	// QuikView 일때
	if (nexacro.getEnvironmentVariable("evQuikView") == "Y") 
	{
		objForm.set_height(objForm.parent.height);
		objForm.resetScroll();
	}
	// QuikView가 아닐때
	else {
		var objApp  = nexacro.getApplication();
		if (objForm == objApp.gvBase.divCenter.form.divWork.form)
		{
			objApp.gvBase.divCenter.form.divWork.set_height(nHeight);
		}

		objApp.gvBase.divCenter.form.resetScroll();
	}
}

/**
* @class 컴포넌트 사이즈 변경된것 만큼 부모를 찾아서 리사이즈 진행
* @param {obj} comp - 대상 컴포넌트
* @param {Number} nHeight - 변경된 Height
* @return N/A
*/
pForm.gfnParentResize = function(comp, nHeight)
{
	// QuikView 일때
	if (nexacro.getEnvironmentVariable("evQuikView") == "Y") 
	{
		while(true)
		{
			this.gfnParentResizeComp2(comp, nHeight);		

			if (comp.parent instanceof nexacro.ChildFrame) break; 
			comp = comp.parent;
		}
	}
	// QuikView가 아닐때
	else {
		var objApp  = nexacro.getApplication();
		while(true)
		{
			this.gfnParentResizeComp2(comp, nHeight);		

			if (comp.parent == objApp.gvBase.divCenter.form.divWork.form) break; 
			comp = comp.parent;
		}
	}
}


/**
* @class 화면 내 컴포넌트 위치 조정
* @param {obj} comp - 대상 컴포넌트
* @param {Number} nHeight - 변경된 Height
* @return N/A
*/
pForm.gfnParentResizeComp2 = function(objComp, nHeight)
{
	//trace("gfnParentResizeComp2 objComp : " + objComp.name);
	try
	{
		var objCompOriBottom = objComp.getOffsetBottom();
		var objCompOriHeight = objComp.getOffsetHeight();
		objComp.setOffsetHeight(objCompOriHeight+nHeight);
		var objCompHeight = objComp.getOffsetHeight()-objCompOriHeight;
		var objForm = objComp.parent;

		for (var i=0; i<objForm.components.length; i++) 
		{
			if (objForm.components[i].visible) 
			{
				//trace("gfnParentResizeComp2 objForm.components[i] : " + objForm.components[i].name);
				if (objForm.components[i] == objComp) continue;
				if (objForm.components[i].getOffsetTop() >= objCompOriBottom)
				{
					objForm.components[i].setOffsetTop(objForm.components[i].getOffsetTop()+objCompHeight);
				}
				else if (objForm.components[i].getOffsetTop() <= objCompOriBottom && objForm.components[i].getOffsetBottom() >= objCompOriBottom)
				{
					objForm.components[i].setOffsetHeight(objForm.components[i].getOffsetHeight()+objCompHeight);
				}	
			}
		}

 	}
	catch(e)
	{
 	}	
}

/**
* @class Grid 에 스크롤이 생기지 않도록 hegith조정
* @param {Grid} objGrd - 컬럼명	
* @param {Number} nSetRowCnt - 레코드수
* @return N/A
*/
pForm.gfnSetGrdResize2 = function(objGrd, nSetRowCnt)
{
	var nRowNum = nSetRowCnt;
	var nArgLen = arguments.length;

	if (nSetRowCnt < 1) 
	{
		nSetRowCnt = 1;
		if( nArgLen > 2 ) 
		{
			nSetRowCnt = parseInt(this.gfn_nvl(arguments[2],"10"));
		}
	}
	
	var nHeadCellCnt = objGrd.getCellCount("head");
	if (nHeadCellCnt == 0)
		var nHeadEndRow = 0;
	else
		var nHeadEndRow = objGrd.getCellProperty("head", nHeadCellCnt-1, "row")+1;
	
	var nBodyCellCnt = objGrd.getCellCount("body");
	var nBodyStaRow = objGrd.getCellProperty("body", 0, "row")+nHeadEndRow;
	var nBodyEndRow = objGrd.getCellProperty("body", nBodyCellCnt-1, "row")+nHeadEndRow;
	
	var nGrdBodyRow = 0;
	for (var i=nBodyStaRow; i<= nBodyEndRow; i++)
	{
		nGrdBodyRow += objGrd.getFormatRowSize(i);
	}

	var nGrdHeadRow = objGrd.getRealRowFullSize("head");
	var nGrdSummRow = objGrd.getRealRowFullSize("summary");
	var nGrdTotSize = nGrdHeadRow + (nGrdBodyRow * nSetRowCnt) + nGrdSummRow;
	var nCompBorderSize = 4; 	//해당 그리드 컴포넌트의 Border(TOP+BOTTOM) 값
 	var nScrollSize =  0;  		//가로 스크롤바의 Height size

	if (objGrd.scrollbars != undefined) 
	{
		if (objGrd.autofittype == "col")
		{
			nScrollSize = 0;
		}
		else if (objGrd.scrollbars == "fixedvert" || objGrd.scrollbars == "autovert" || objGrd.scrollbars == "none")
		{
			nScrollSize = 0;
		}
		else if(objGrd.hscrollbar.visible == false)
		{
			nScrollSize = 0;
		}
	}

	var nHeight = nGrdTotSize+nCompBorderSize+nScrollSize;
	var objOriHeight = objGrd.getOffsetHeight();

	this.gfnParentResize(objGrd, nHeight-objOriHeight);
}	

//----------------------- rezise  끝 --------------------------------------//

