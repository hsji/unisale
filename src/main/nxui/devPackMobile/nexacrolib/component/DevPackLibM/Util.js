/**
*  컨설팅 표준화 작업
*  @FileName 	Mobile.js 
*  @Creator 	mobile_consulting
*  @CreateDate 	2017.11.17
*  @Desction   		
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
*  2017.11.17     	mobile_consulting		 	최초 생성 

*******************************************************************************
*/

var pForm = nexacro.Form.prototype;


/**
* 화면내 value의 Function 유무 반환
* @param {*} value 확인할 value.
* @return {boolean} Function 유무.
* @example this.gfnExistFunction("fnInit")
*/ 
pForm.gfnExistFunction = function(sValue)
{	
	if (this[sValue] == undefined) 
	{
		return false;
	} 
	else 
	{
		if (typeof(this[sValue]) == "function")
		{
			return true;
		}
		else
		{
			return false;
		}
	}
}


/**
* value의 Function 여부 반환
* @param {*} value 확인할 value.
* @return {boolean} Function 여부.
* @example this.gfnIsFunction(obj)
*/
pForm.gfnIsFunction = function(value)
{
    return Object.prototype.toString.call(value) === '[object Function]';
};


/**
* 안드로이드에서 웹브라우저가 zorder 최상위라 숨김
* @param {Object} objForm - Form 객체
* @param {Boolean} sVisible - 숨김여부
* @return N/A
* @example this.webBrowserVisible(this.form, true);
*/
pForm.webBrowserVisible = function(objForm, sVisible)
{
	if (system.navigatorname == "nexacro" && system.osversion.indexOf("Android") > -1)
	{
		var arrComp = objForm.components;
		if (this.gfnIsNull(arrComp)) return;
		
		for (var i = 0 ; i < arrComp.length ; i++)
		{
			if (arrComp[i] instanceof nexacro.Div)
			{
				this.webBrowserVisible(arrComp[i].form ,sVisible);//재귀함수
			}
			else if (arrComp[i] instanceof nexacro.WebBrowser)
			{
				arrComp[i].set_visible(sVisible);
			}
			else if (arrComp[i] instanceof nexacro.WebView)
			{
				arrComp[i].set_visible(sVisible);
			}
		}
	}
};