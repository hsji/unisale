/**
*  devPack Library
*  @FileName 	Util.js 
*  @Creator 	TOBESOFT
*  @CreateDate 	2020.11.24
*  @Desction   
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
* 2020.11.24			TOBESOFT				Util Library
*******************************************************************************
*/

var pForm = nexacro.Form.prototype;

/**
* @class  디버거모드 여부
* @param  none
* @return {boolean} 디버거모드 여부
* @example this.gfnIsDebug();
*/ 
pForm.gfnIsDebug = function()
{
	if(nexacro.getApplication().gvRunMode == "R") return false;
	return (nexacro._quickview_formurl || nexacro.getApplication().gvIsDebug=="Y"?true:false);
};

/**
* @class  서비스호출url
* @param  none
* @return {string} 서비스호출url
* @example this.gfnGetServiceUrl();
*/ 
pForm.gfnGetServiceUrl = function()
{
	return nexacro.getEnvironment().services['svcUrl'].url;
};

/**
* @class 암호화. <br>
* @param {String} value
* @return {String} 암호화데이터
* @example this.gfnIsInprocess();
*/
pForm.gfnEncData = function(value)
{
	var gdsKey = nexacro.getApplication().gdsKey;
	if(gdsKey.rowcount == 0) {
		alert("========> 로그인화면으로 접속하세요.");
		return value;
	}
	//var shaObj = new jsSHA("SHA-256", "TEXT");
	//shaObj.update(value);
	//var hash = shaObj.getHash("HEX");
	var encdata = this.encryptRSA(nexacro.getApplication().gdsKey, value);
	
	return encdata;
};

/**
* @class 현재 오픈되어 있는 메뉴 ID를 가져온다. <br>
* @param N/A
* @return {String} sMenuId - 현재 오픈되어 있는 메뉴 ID
* @example this.gfnGetCurMenuId();
*/
pForm.gfnGetCurMenuId = function()
{
	var sMenuId;
	if(this.getOwnerFrame().form.name == "frameMain")
	{
		sMenuId = this.gfnGetUserInfo("userHomeMnuCd");		
	}
	else if(this.getOwnerFrame().form.name == "frameWork")
	{
		sMenuId = this.getOwnerFrame().arguments["menuId"];
	}	
	if(this.gfnIsNull(sMenuId)) sMenuId = "";
	
	return sMenuId;
};

/**
* @class dataSet의 Row 중에서 변경된 내용이 있는지 여부
* @param {Object} objDs - 확인 대상 Dataset
* @return {boolean} 
* @example this.gfnDsIsUpdated(this.dsList)
*/   
pForm.gfnDsIsUpdated = function (objDs)
{
	if (objDs.getDeletedRowCount() > 0) 
	{
		return true;
	}
	
	for(var i = 0 ; i < objDs.getRowCountNF() ; i++)
	{
		if(objDs.getRowTypeNF(i) == 2 || objDs.getRowTypeNF(i) == 4 || objDs.getRowTypeNF(i) == 8)
		{
			return true;
		}
	}
	return false;
};
/************************************************************************************************
* 문자/숫자 관련 Util
************************************************************************************************/
/**
* @class null값 확인
* @param {String} sValue - 확인 대상
* @return {boolean} Null이면 true
* @example this.gfnIsNull(sValue) 
*/   
pForm.gfnIsNull = function(sValue)
{
    if (new String(sValue).valueOf() == "undefined") return true;
    if (sValue == null) return true;
    
    var ChkStr = new String(sValue);

    if (ChkStr == null) return true;
    if (ChkStr.toString().length == 0 ) return true;
    return false;
};

/**
* @class null값 확인
* @param {String} sValue - 확인 대상
* @return {boolean} Null이 아니면 true
* @example this.gfnIsNotNull(sValue) 
*/  
pForm.gfnIsNotNull = function (sValue) 
{
	var chk = this.gfnIsNull(sValue);
	if (chk) {
		return false;
	}

	return true;
}

/**
* @class 입력값을 체크하여 Null인경우 지정한 값을 리턴
* @param {String} inVal
* @param {String} nullVal	- Null인경우 대치값
* @return {String} 입력값이 Null인경우 지정한값, Null이 아닌경우 입력값
* @example this.gfnNvl(nRow, 0);
*/
pForm.gfnNvl = function(inVal, nullVal)
{
	if(inVal == null) {
		inVal = nullVal;
	}
	return inVal;
};


/**
* @class 정규식을 이용한 trim 구현 - 문자열 양 옆의 공백 제거 <br>
* @param {String} sValue - 변경하려는 값
* @return {String} 문자열
* @example this.gfnTrim(sValue);
*/
pForm.gfnTrim = function(sValue)
{
    if (this.gfnIsNull(sValue)) return "";
	return nexacro.trim(sValue);
};

/**
* @class 주어진 nexacro 개체의 type 을 반환 <br>
* @param {*} obj Object, Component, Frame, .. 등 nexacro 모든 개체
* @return {String} 개체의 type
* @example
* trace(this.gfnTypeOf(Button00));	// output : Button
* trace(this.gfnTypeOf(Tab00));	// output : Tab
* trace(this.gfnTypeOf(Tab00.tabpage1));	// output : Tabpage
* trace(this.gfnTypeOf(Dataset00));	// output : Dataset
*/
pForm.gfnTypeOf = function(obj)
{
	var type;
	if ( obj && (typeof obj == "object"))
	{
		var s = obj.toString();
		if(s == "[object Object]") return type;
		
		type = s.substr(8, s.length-9);
	}
	else {
		type = typeof(obj)
	}
	return type;
};


/**
* @class 문자열 byte 길이를 조회
* @param {String} sVal - 문자열
* @return {Integer} 문자열 byte 길이
* @example this.gfnLengthByte(val);
*/
pForm.gfnLengthByte = function (val)
{
	var byteLength = 0;
	var chr;
	
	if( this.gfnIsNull(val) ) return 0;
	
 	for(var valIdx = 0; valIdx < val.length; valIdx++) {
 		chr = escape(val.charAt(valIdx));
		
		if (chr.length == 1) {
			byteLength ++;
		} else if (chr.indexOf("%u") != -1)  {
			byteLength += 3;
		} else if (chr.indexOf("%") != -1)  {
			byteLength += chr.length/3;
		}
 	}
 	return byteLength;
};

/**
* @class 입력 문자열중 숫자값만 남긴다.
* @param {String} strValue - 입력문자열
* @return {String} 숫자문자열
* @example this.gfnGetDigit(strDate);
*/
pForm.gfnGetDigit = function(strValue)
{
	var regExp = new RegExp("\\D","g");
	var strRet = strValue.replace(regExp,"");

	return strRet;
};


/**
* @class 왼쪽 문자 채우기
* @param {String} val - 문자열
* @param {String} pad - 채울 문자열(default : " "(공백) )
* @param {Number} len - 전체 문자 길이(default : 1 )
* @return {String}
* @example this.gfnLPad("1", 0, 2);
*/
pForm.gfnLPad = function(val, pad, len) 
{
	var sRet = "";
	var strVal = "";

	if (this.gfnIsNull(val)) return "";
	if (this.gfnIsNull(pad)) pad = " ";
	if (this.gfnIsNull(len)) len = 1;
	
	strVal = new String(val);
	
	if( strVal.length >= len ) return strVal;

	for(var valIdx = 0; valIdx < len - strVal.length; valIdx++) {
		sRet += pad;
	}

	sRet += strVal;
	
	return sRet;
};

/**
* @class 오른쪽 문자 채우기 <br>
* @param {String} val - 문자열
* @param {String} pad - 채울 문자열(default : " "(공백) )
* @param {Number} len - 전체 문자 길이(default : 1 )
* @return {String}
* @example this.gfnLPad("1", 0, 2);
*/
pForm.gfnRPad = function(val, pad, len) 
{
	var sRet = "";
	var strVal = val;

	if (this.gfnIsNull(val)) return "";
	if (this.gfnIsNull(pad)) pad = " ";
	if (this.gfnIsNull(len)) len = 1;
	
	if( strVal.length >= len ) return val;
	
	sRet = new String(val);

	for(var valIdx = 0; valIdx < len - strVal.length; valIdx++) {
		sRet += pad;
	}
	
	return sRet;
};

/**
* @class 소수점 반올림을 한다. <br>
* @param {Number} numVal - 숫자
* @param {Number} decimalPlaces - 반올림 자릿수
* @return {Number}
* @example
this.gfnRound("10.56", 1) ==> 10.6
this.gfnRound(10.56, 1)   ==> 10.6
*/
pForm.gfnRound = function(numVal, decimalPlaces) 
{
	var nNum;
	if( this.gfnIsNull(numVal) ) return 0;
	if( this.gfnIsNull(decimalPlaces) ) decimalPlaces = 0;
	
	nNum = Number(numVal);
	
	if( isNaN(nNum) ) return 0;
	
	return Number(nNum.toFixed(decimalPlaces));
};

/************************************************************************************************
* Date 관련 Util
************************************************************************************************/

/**
* @class 현재일자를 구한다. <br>
* @param {String} [sGubn] - date/null : 일자, time : 일자+시간, milli : Milliseconds
* @param {Boolean} [bFormat] - format 지정 여부
* @return {String} 날짜및시간 문자열
* @example this.gfnGetDate()
*/
pForm.gfnGetDate = function(sGubn, bFormat, orgDate, bNotime) 
{
	if (this.gfnIsNull(sGubn)) sGubn = "date";
	if (this.gfnIsNull(bFormat)) {
		bFormat = false;
		var sDFormat = "";
		var sTFormat = "";
		var sSplit = "";
	}
	else {
		bFormat = true;
		var sDFormat = "-";	
		var sTFormat = ":";
		var sSplit = " ";
	}	
	
	var s;	
	var d;	

	if(orgDate instanceof Date) {
		d = orgDate;
	} else if(orgDate instanceof nexacro.Date) {
		d = orgDate;
		d.setTime(orgDate.getTime());
	} else {
		d = new Date();
	}
	
	if (sGubn == "date") {
		s = d.getFullYear() + sDFormat
		  + ((d.getMonth() + 1) + "").padLeft(2, '0') + sDFormat
		  + (d.getDate() + "").padLeft(2, '0');
	}
	else if (sGubn == "year") {
		s = d.getFullYear();
	}
	else if (sGubn == "month") {
		s = ((d.getMonth() + 1) + "").padLeft(2, '0');
	}
	else if (sGubn == "day") {
		s = d.getFullYear() + sDFormat
		  + ((d.getMonth() + 1) + "").padLeft(2, '0') + sDFormat
		  + (d.getDate() + "").padLeft(2, '0') + sSplit
		  + this.gfnGetDayKor(d.getFullYear()+((d.getMonth() + 1) + "").padLeft(2, '0')+(d.getDate() + "").padLeft(2, '0'));
	}
	else if (sGubn == "timeform") {
		if(bNotime == 2) {
			s = d.getFullYear() + sDFormat
			  + ((d.getMonth() + 1) + "").padLeft(2, '0') + sDFormat
			  + (d.getDate() + "").padLeft(2, '0');
		} else {
			s = d.getFullYear() + sDFormat
			  + ((d.getMonth() + 1) + "").padLeft(2, '0') + sDFormat
			  + (d.getDate() + "").padLeft(2, '0') + sSplit
			  + (d.getHours() + "").padLeft(2, '0') + sTFormat
			  + (d.getMinutes() + "").padLeft(2, '0');
		}
	}
	else if (sGubn == "timeform2") {
		s = (d.getHours() + "").padLeft(2, '0') + sTFormat
	      + (d.getMinutes() + "").padLeft(2, '0');
	}
	else if (sGubn == "time") {
		s = d.getFullYear() + sDFormat
	      + ((d.getMonth() + 1) + "").padLeft(2, '0') + sDFormat
	      + (d.getDate() + "").padLeft(2, '0') + sSplit
	      + (d.getHours() + "").padLeft(2, '0') + sTFormat
	      + (d.getMinutes() + "").padLeft(2, '0') + sTFormat
	      + (d.getSeconds() + "").padLeft(2, '0');
	}
	else if (sGubn == "mins") {
		s = d.getFullYear() + sDFormat
	      + ((d.getMonth() + 1) + "").padLeft(2, '0') + sDFormat
	      + (d.getDate() + "").padLeft(2, '0') + sSplit
	      + (d.getHours() + "").padLeft(2, '0') + sTFormat + "0000000";
	}
	else if (sGubn == "mine") {
		s = d.getFullYear() + sDFormat
	      + ((d.getMonth() + 1) + "").padLeft(2, '0') + sDFormat
	      + (d.getDate() + "").padLeft(2, '0') + sSplit
	      + (d.getHours() + "").padLeft(2, '0') + sTFormat + "5959000";
	}
	else if (sGubn == "timeZ") {
		s = d.getFullYear() + sDFormat
	      + ((d.getMonth() + 1) + "").padLeft(2, '0') + sDFormat
	      + (d.getDate() + "").padLeft(2, '0') + "T"
	      + (d.getHours() + "").padLeft(2, '0') + sTFormat
	      + '59' + sTFormat
	      + "59.059Z";
	}
	else if (sGubn == "timeZZ") {
		s = d.toISOString();
	}
	else if (sGubn == "timeZZStart") {
		d.setHours(0);
		d.setMinutes(0);
		d.setSeconds(0);
		s = d.toISOString();
	}
	else if (sGubn == "timestart") {
		s = d.getFullYear() + sDFormat
	      + ((d.getMonth() + 1) + "").padLeft(2, '0') + sDFormat
	      + (d.getDate() + "").padLeft(2, '0') + sSplit
	      + '00' + sTFormat
	      + '00' + sTFormat
	      + '00';
	}	
	else if (sGubn == "minstart") {
		s = d.getFullYear() + sDFormat
	      + ((d.getMonth() + 1) + "").padLeft(2, '0') + sDFormat
	      + (d.getDate() + "").padLeft(2, '0') + sSplit
		  + (d.getHours() + "").padLeft(2, '0') + sTFormat
		  + (d.getMinutes() + "").padLeft(2, '0') + sTFormat
	      + '00';
	}	
	else if (sGubn == "timeend") {
		s = d.getFullYear() + sDFormat
	      + ((d.getMonth() + 1) + "").padLeft(2, '0') + sDFormat
	      + (d.getDate() + "").padLeft(2, '0') + sSplit
		  + (d.getHours() + "").padLeft(2, '0') + sTFormat
	      + (d.getMinutes() + "").padLeft(2, '0') + sTFormat
	      + '59';
	}	
	else if (sGubn == "timestartZ") {
		s = d.getFullYear() + sDFormat
	      + ((d.getMonth() + 1) + "").padLeft(2, '0') + sDFormat
	      + (d.getDate() + "").padLeft(2, '0') + "T"
	      + (d.getHours() + "").padLeft(2, '0') + sTFormat
	      + "00" + sTFormat
	      + '00.000Z';
	}
	else if (sGubn == "milli") {
		s = d.getFullYear() + sDFormat
	      + ((d.getMonth() + 1) + "").padLeft(2, '0') + sDFormat
	      + (d.getDate() + "").padLeft(2, '0') + sSplit
	      + (d.getHours() + "").padLeft(2, '0') + sTFormat
	      + (d.getMinutes() + "").padLeft(2, '0') + sTFormat
	      + (d.getSeconds() + "").padLeft(2, '0') + sTFormat
		  + (d.getMilliseconds() + "").padLeft(3, '0');
	}
	return (s);
};

/**
* @class 입력된 날짜에 OffSet 으로 지정된 만큼의 날짜를 더함 <br>
* @param {String} strDate - 'yyyyMMdd' 형태로 표현된 날짜.
* @param {Number} nOffSet - 날짜로부터 증가 감소값.
* @return {String} date의 문자열 (ex. 20080821)
* @example this.gfnAddDate(sToday,-7)
*/
pForm.gfnAddDate = function(strDate, nOffSet)
{
	var date = new Date();
	
    var iYear = parseInt(strDate.substr(0, 4));
    var iMonth = parseInt(strDate.substr(4, 2) - 1);
    var iDate = parseInt(strDate.substr(6, 2)-(nOffSet*-1));
    
	date.setFullYear(iYear,iMonth,iDate);	
	
	return this.gfnDateToStr(date);
};


/**
* @class 입력된 날짜에 OffSet 으로 지정된 만큼의 날짜를 더함 <br>
* @param {String} strDate - 'yyyyMMdd' 형태로 표현된 날짜.
* @param {Number} nOffSet - 날짜로부터 증가 감소값.
* @return {String} date의 문자열 (ex. 20080821)
* @example this.gfnAddDate(sToday,-7)
*/
pForm.gfnGetDateFormat = function(strDate, sDFormat, bLang)
{
	strDate = strDate + "";
	return strDate.substr(0,4) + (bLang?"년":"") + sDFormat + (bLang?" ":"")
	  + strDate.substr(4,2) + (bLang?"월":"") + sDFormat + (bLang?" ":"")
	  + strDate.substr(6,2) + (bLang?"일":"");
};
pForm.gfnGetTimeFormat = function(strTime)
{
	strTime = strTime + "";
	return strTime.substr(0,2) + ":" + strTime.substr(2,2);
};
/**
* @class 입력된 날짜에 OffSet 으로 지정된 만큼의 날짜를 더함 <br>
* @param {String} strDate - 'yyyyMMdd' 형태로 표현된 날짜.
* @param {Number} nOffSet - 날짜로부터 증가 감소값.
* @return {String} date의 문자열 (ex. 20080821)
* @example this.gfnAddDate(sToday,-7)
*/
pForm.gfnAddDate = function(strDate, nOffSet)
{
	var date = new Date();
	
    var iYear = parseInt(strDate.substr(0, 4));
    var iMonth = parseInt(strDate.substr(4, 2) - 1);
    var iDate = parseInt(strDate.substr(6, 2)-(nOffSet*-1));
    
	date.setFullYear(iYear,iMonth,iDate);	
	
	return this.gfnDateToStr(date);
};
/**
* @class 입력된 월에 OffSet 으로 지정된 만큼의 월을 더함
* @param {String} strDate - String Date Format
* @param {Number} OffSet - Integer Format
* @return {String} date
* @example this.gfnAddMonth(sToday, +1)
*/ 
pForm.gfnAddMonth = function(strDate, OffSet) 
{	
	var date, d, s, mon, val;

	/**
	 * @class 입력일자 해당월의 마지막 일 <br>
	 * @param {String} strMonth - 'yyyyMMdd' 형태로 표현된 날짜.
	 * @return {Number} 해당월의 마지막일자 2자리
	 */
	var gfnGetMonthLastDate = function(strMonth) {
		var iLastDay;
		var iYear  = parseInt(strMonth.substr(0, 4),10) ;
		var iMonth = parseInt(strMonth.substr(4, 2),10);
		switch(iMonth)
		{
			case 2 :
				if( ((iYear%4)==0) && ((iYear%100)!=0) || ((iYear%400)==0) )
					iLastDay = 29;
				else
					iLastDay = 28;			
				break;
			case 4 :
			case 6 :
			case 9 :
			case 11 :
				iLastDay = 30;
				break;
			default:
				iLastDay = 31;
				break;
		}
		
		return iLastDay;
	};

    if (strDate) {
        date = this.gfnStrToDate(strDate);
        d = (new Date(date)).addMonth(OffSet);
    } else {
    	date = this.gfnStrToDate(this.gfnGetDate());
		d = (new Date(date)).addMonth(OffSet);
    }
    
    if (gfnGetMonthLastDate(strDate) == date.getDate()) {
    	var sY = new Date(d).getFullYear();
    	var sM = new Date(d).getMonth();
    	var eY = date.getFullYear();
    	var eM = date.getMonth();
    	
    	mon = -((eY - sY)* 12 + (eM - sM));
    	
    	if (mon != OffSet) {
   			val = OffSet - mon;
    		d = (new Date(d)).addMonth(-1);
    	}
    	
    	var ld = new Date((new Date(d)).getFullYear() 
    			, (new Date(d)).getMonth()
    			, gfnGetMonthLastDate(this.gfnDateToStr(new Date(d))));
    	
    	s = (new Date(ld)).getFullYear()
		   + (((new Date(ld)).getMonth() + 1) + "").padLeft(2, '0')
		   + (((new Date(ld)).getDate()) + "").padLeft(2, '0');
    } else {
    	s = (new Date(d)).getFullYear()
		   + (((new Date(d)).getMonth() + 1) + "").padLeft(2, '0')
		   + (((new Date(d)).getDate()) + "").padLeft(2, '0');
    }
	
	return (s);
};

/**
* @class 법정공휴일 구하기 <br>
* @param {Number} nYear - yyyy
* @return {Array} 휴일정보
* @example this.gfnGetHolidays(2002) 
*/
pForm.gfnGetHolidays = function(nYear)
{
	var aHoliday = new Array();
	var bLeapYear = false;
	
	// 윤달 체크 
	bLeapYear = (nYear % 4 ==0 && nYear % 100 != 0 || nYear % 400 == 0) ? true : false;

	/////// 음력 체크
	// 구정
	aHoliday[0] = this.gfnLunarToSolar(nYear + "0101", bLeapYear) + "설날";		// 설 당일
	aHoliday[1] = this.gfnAddDate(aHoliday[0].substring(0, 8), -1) + "설날";	// 설 전일
	aHoliday[2] = this.gfnAddDate(aHoliday[0].substring(0, 8), 1) + "설날";		// 설 다음날
	// 석가탄신일
	aHoliday[3] = this.gfnLunarToSolar(nYear + "0408", bLeapYear) + "석가탄신일";
	// 추석
	aHoliday[4] = this.gfnLunarToSolar(nYear + "0815", bLeapYear) + "추석";		// 추석 당일
	aHoliday[5] = this.gfnAddDate(aHoliday[4].substring(0, 8), -1) + "추석";	// 추석 전일
	aHoliday[6] = this.gfnAddDate(aHoliday[4].substring(0, 8), 1) + "추석";		// 추석 다음날

	/////// 양력 체크
	aHoliday[7] = nYear+"0101" + "신정";
	aHoliday[8] = nYear+"0301" + "삼일절";
	aHoliday[9] = nYear+"0505" + "어린이날";	
	aHoliday[10] = nYear+"0606" + "현충일";		
	aHoliday[11] = nYear+"0815" + "광복절";	
	aHoliday[12] = nYear +"1003" + "개천절";
	aHoliday[13] = nYear +"1009" + "한글날";
	aHoliday[14] = nYear+"1225" + "성탄절";			
	return aHoliday.sort();
};
/**
* @class 양력을 음력으로 변환해주는 함수.<br>
* [주의사항]<br>
*  1. return값이 8자리가 아니고 9자리임에 주의<br>
*  2. 처리가능 기간  1841 - 2043년
* @param {String | Date} value - yyyyMMdd형태의 양력일자 ( 예 : "20121122" )
* @return {String} Flag(평달 = "0", 윤달 = "1") + 'yyyyMMdd'형태의 음력일자
* @example
* var dt = this.gfnStr2Date("20130331");
* var str = this.solarToLunar(dt);
* trace(str); // output : 020130220
* var str1 = "20130331";
* var str = this.solarToLunar(str1);
* trace(str); // output : 020130220
*/		
pForm.gfnSolarToLunar =  function(value) 
{
	var sMd         = "31,0,31,30,31,30,31,31,30,31,30,31";
	var arrMd       = [];
	var arrBaseInfo = [];
	var arrDt       = [];	// 매년의 음력일수를 저장할 배열 변수
	var nTd;		    			// 음력일을 계산하기 위해 양력일과의 차이를 저장할 변수
	var nTd1;			    		// 1840년까지의 날수
	var nTd2;				    	// 현재까지의 날수
	var nTemp;					    // 임시변수
	var nLy, nLm, nLd;			    // 계산된 음력 년, 월, 일을 저장할 변수
	var sLyoon;					    // 현재월이 윤달임을 표시

	var nY, nM, nD;

	nY = parseInt(value.substr(0,4), 10);
	nM = parseInt(value.substr(4,2), 10);
	nD = parseInt(value.substr(6,2), 10);
	
	
	if (nY < 1841 || nY > 2043)	
	{
		return null;
	}

	arrBaseInfo = this.gfnSolarBase();
	arrMd       = sMd.split(",");
	arrMd[1]    = 28;
		
	//윤년여부 확인
	if ((nY % 4) == 0) 
	{
		if ((nY % 100) != 0 || (nY % 400) == 0)
		{ 
			arrMd[1] = 29;
		}
	} 

	// 672069 = 1840 * 365 + 1840/4 - 1840/100 + 1840/400 + 23  //1840년까지 날수
	nTd1 = 672069; 	 
		
	// 1841년부터 작년까지의 날수
	nTd2 = (nY - 1) * 365 + parseInt((nY - 1)/4) - parseInt((nY - 1)/100) + parseInt((nY - 1)/400);
		
	// 전월까지의 날수를 더함
	for (var i = 0; i <= nM - 2; i++)
	{
		nTd2 = nTd2 + parseInt(arrMd[i]);
	}

	// 현재일까지의 날수를 더함
	nTd2 = nTd2 + nD;

	// 양력현재일과 음력 1840년까지의 날수의 차이
	nTd = nTd2 - nTd1 + 1;
	
	// 1841년부터 음력날수를 계산
	for (var i = 0; i <= nY - 1841; i++)
	{
		arrDt[i] = 0;
		for (var j = 0; j <= 11; j++)
		{
			switch (parseInt(arrBaseInfo[i * 12 + j]))
			{
				case 1 : nTemp = 29;
						 break;
				case 2 : nTemp = 30;
						 break;				
				case 3 : nTemp = 58;	// 29 + 29
						 break;				
				case 4 : nTemp = 59;	// 29 + 30
						 break;				
				case 5 : nTemp = 59;	// 30 + 29
						 break;				
				case 6 : nTemp = 60;	// 30 + 30
						 break;				
			}
			
			arrDt[i] = arrDt[i] + nTemp;
		}
	}
		
	// 1840년 이후의 년도를 계산 - 현재까지의 일수에서 위에서 계산된 1841년부터의 매년 음력일수를 빼가면수 년도를 계산
	nLy = 0;
	do
	{
		nTd = nTd - arrDt[nLy];
		nLy = nLy + 1;
	}
	while(nTd > arrDt[nLy]);
	
	nLm    = 0;
	sLyoon = "0";	// 현재월이 윤달임을 표시할 변수 - 기본값 평달
	do
	{

		if (parseInt(arrBaseInfo[nLy * 12 + nLm]) <= 2)
		{
			nTemp = parseInt(arrBaseInfo[nLy * 12 + nLm]) + 28;
			if (nTd > nTemp)
			{
				nTd = nTd - nTemp;
				nLm = nLm + 1;
			}
			else
			{
				break;
			}
		}
		else
		{
			switch (parseInt(arrBaseInfo[nLy * 12 + nLm]))
			{
				case 3 :
					m1 = 29;
					m2 = 29;
					break;
				case 4 : 
					m1 = 29;
					m2 = 30;
					break;					
				case 5 : 
					m1 = 30;
					m2 = 29;
					break;					
				case 6 : 
					m1 = 30;
					m2 = 30;
					break;					
			}

			if (nTd > m1)
			{
				nTd = nTd - m1;
				if (nTd > m2)
				{
					nTd = nTd - m2;
					nLm = nLm + 1;
				}
				else
				{
					sLyoon = "1";
				}
			}
			else
			{
				break;
			}
		}
	}
	while(1);
	
	nLy = nLy + 1841;
	nLm = nLm + 1;
	nLd = nTd;

	var sRtn = sLyoon + nLy; 
	sRtn = sRtn + nLm.toString().padLeft(2, "0"); 
	sRtn = sRtn + nLd.toString().padLeft(2, "0");    
	return sRtn;
};		

/**
* @class 음력을 양력으로 변환. <br>
* @param {String | Date} value - yyyyMMdd형태의 음력일자 ( 예 : "20121122" ).
* @param {Boolean} leapMonth - 윤달 여부.
* @return {String} 'yyyyMMdd'형태의 양력일자
* @example this.gfnLunarToSolar("20020815", true) 
*/
pForm.gfnLunarToSolar = function(value, leapMonth)
{

	var sMd         = "31,0,31,30,31,30,31,31,30,31,30,31";
	var arrMd       = [];	
	var arrBaseInfo = [];
	var nTd         = 0;
	var nSy, nSm, nSd;			    // 계산된 양력 년, 월, 일을 저장할 변수
	var nY1, nM1, nY2, nY3, nTemp;	// 임시변수	
	var nLeap;    
		
	var nLy, nLm, nLd;

	nLy = parseInt(value.substr(0,4), 10);
	nLm = parseInt(value.substr(4,2), 10);
	nLd = parseInt(value.substr(6,2), 10);
	

	if (nLy < 1841 || nLy > 2043)	
	{
		return null;
	}	

	arrBaseInfo = this.gfnSolarBase();
	arrMd       = sMd.split(",");
	arrMd[1]    = 28;
	
	//윤년여부 확인
	if ((nLy % 4) == 0) 
	{
		if ((nLy % 100) != 0 || (nLy % 400) == 0)
		{ 
			arrMd[1] = 29;
		}
	} 
		
	nY1   = nLy - 1841; //176
	nM1   = nLm - 1; //02
	nLeap = 0;
	
	if (parseInt(arrBaseInfo[nY1 * 12 + nM1]) > 2)
	{
		//윤년여부 확인
		if ((nLy % 4) == 0) 
		{
			if ((nLy % 100) != 0 || (nLy % 400) == 0)
			{ 
				nLeap = 1;
			}
		} 
	}
	if (nLeap == 1)
	{
		switch (parseInt(arrBaseInfo[nY1 * 12 + nM1]))
		{
			case 3 : nTemp = 29;
					 break;
			case 4 : nTemp = 30;
					 break;			
			case 5 : nTemp = 29;
					 break;			
			case 6 : nTemp = 30;
					 break;
		}
	}
	else
	{
		switch (parseInt(arrBaseInfo[nY1 * 12 + nM1]))
		{
			case 1 : nTemp = 29;
					 break;			
			case 2 : nTemp = 30;
					 break;			
			case 3 : nTemp = 29;
					 break;			
			case 4 : nTemp = 29;
					 break;			
			case 5 : nTemp = 30;
					 break;			
			case 6 : nTemp = 30;
					 break;			
		}
	}
	
	var tempY1 = nY1 - 1;
	for (var i = 0; i <= tempY1; i++)
	{
		for (var j = 0; j <= 11; j++)
		{
			switch (parseInt(arrBaseInfo[i * 12 + j]))
			{
				case 1 : nTd = nTd + 29;
						 break;
				case 2 : nTd = nTd + 30;
						 break;				
				case 3 : nTd = nTd + 58;
						 break;				
				case 4 : nTd = nTd + 59;
						 break;				
				case 5 : nTd = nTd + 59;
						 break;				
				case 6 : nTd = nTd + 60;
						 break;				
			}
		}
	}

	var tempM1 = nM1 - 1;
	for (var j = 0; j <= tempM1; j++)
	{
		switch (parseInt(arrBaseInfo[nY1 * 12 + j]))
		{
			case 1 : nTd = nTd + 29;
					 break;			
			case 2 : nTd = nTd + 30;
					 break;						
			case 3 : nTd = nTd + 58;
					 break;						
			case 4 : nTd = nTd + 59;
					 break;						
			case 5 : nTd = nTd + 59;
					 break;						
			case 6 : nTd = nTd + 60;
					 break;						
		}
	}

	if (nLeap == 1)
	{
		switch (parseInt(arrBaseInfo[nY1 * 12 + nM1]))
		{
			case 3 : nTemp = 29;
					 break;						
			case 4 : nTemp = 29;
					 break;						
			case 5 : nTemp = 30;
					 break;						
			case 6 : nTemp = 30;
					 break;						
		}
	}
	
	nTd = nTd + nLd + 22;
	
	if (leapMonth)
	{
		switch (parseInt(arrBaseInfo[nY1 * 12 + nM1]))
		{
			case 3 : nTd = nTd + 29;
					 break;						
			case 4 : nTd = nTd + 30;
					 break;						
			case 5 : nTd = nTd + 29;
					 break;						
			case 6 : nTd = nTd + 30;
					 break;						
		}
	}
	
	nY1 = 1840;
	do
	{
		nY1 = nY1 + 1;
		
		nLeap = 0;
		
		//윤년여부 확인
		if ((nY1 % 4) == 0) 
		{
			if ((nY1 % 100) != 0 || (nY1 % 400) == 0)
			{ 
				nLeap = 1;
			}
		} 

		if (nLeap == 1)
		{
			nY2 = 366;
		}
		else
		{
			nY2 = 365;
		}

		if( nTd <= nY2 )
		{
			break;
		}
			
		nTd = nTd - nY2;
	}
	while(1);

	nSy      = nY1;
	arrMd[1] = nY2 - 337;
	nM1      = 0;
	
	do
	{
		nM1 = nM1 + 1;
		if (nTd <= parseInt(arrMd[nM1-1]))
		{
			break;
		}
		nTd = nTd - parseInt(arrMd[nM1-1]);
	}
	while(1);
	
	nSm = nM1;
	nSd = nTd;
	nY3 = nSy;
	nTd = nY3 * 365 + parseInt(nY3/4) - parseInt(nY3/100) + parseInt(nY3/400);
	
	var tempSm = nSm - 1;
	for (var i = 0; i <= tempSm; i++)
	{
		nTd = nTd + parseInt(arrMd[i]);
	}

	nTd = nTd + nSd;

	var sRtn = nY3;
	sRtn = sRtn + nSm.toString().padLeft(2, "0"); 
	sRtn = sRtn + nSd.toString().padLeft(2, "0");    

	return sRtn;	
};

/**
* @class 각 월별 음력 기준 정보 (처리가능 기간  1841 - 2043년)
* @param  none
* @return {String}
* @example this.gfnSolarBase();
*/	 
pForm.gfnSolarBase = function ()
{
	var sBase;
			
	//1841
	sBase = "1,2,4,1,1,2,1,2,1,2,2,1,";
	sBase += "2,2,1,2,1,1,2,1,2,1,2,1,";
	sBase += "2,2,2,1,2,1,4,1,2,1,2,1,";
	sBase += "2,2,1,2,1,2,1,2,1,2,1,2,";
	sBase += "1,2,1,2,2,1,2,1,2,1,2,1,";
	sBase += "2,1,2,1,5,2,1,2,2,1,2,1,";
	sBase += "2,1,1,2,1,2,1,2,2,2,1,2,";
	sBase += "1,2,1,1,2,1,2,1,2,2,2,1,";
	sBase += "2,1,2,3,2,1,2,1,2,1,2,2,";
	sBase += "2,1,2,1,1,2,1,1,2,2,1,2,";
	//1851
	sBase += "2,2,1,2,1,1,2,1,2,1,5,2,";
	sBase += "2,1,2,2,1,1,2,1,2,1,1,2,";
	sBase += "2,1,2,2,1,2,1,2,1,2,1,2,";
	sBase += "1,2,1,2,1,2,5,2,1,2,1,2,";
	sBase += "1,1,2,1,2,2,1,2,2,1,2,1,";
	sBase += "2,1,1,2,1,2,1,2,2,2,1,2,";
	sBase += "1,2,1,1,5,2,1,2,1,2,2,2,";
	sBase += "1,2,1,1,2,1,1,2,2,1,2,2,";
	sBase += "2,1,2,1,1,2,1,1,2,1,2,2,";
	sBase += "2,1,6,1,1,2,1,1,2,1,2,2,";
	//1861
	sBase += "1,2,2,1,2,1,2,1,2,1,1,2,";
	sBase += "2,1,2,1,2,2,1,2,2,3,1,2,";
	sBase += "1,2,2,1,2,1,2,2,1,2,1,2,";
	sBase += "1,1,2,1,2,1,2,2,1,2,2,1,";
	sBase += "2,1,1,2,4,1,2,2,1,2,2,1,";
	sBase += "2,1,1,2,1,1,2,2,1,2,2,2,";
	sBase += "1,2,1,1,2,1,1,2,1,2,2,2,";
	sBase += "1,2,2,3,2,1,1,2,1,2,2,1,";
	sBase += "2,2,2,1,1,2,1,1,2,1,2,1,";
	sBase += "2,2,2,1,2,1,2,1,1,5,2,1,";
	//1871
	sBase += "2,2,1,2,2,1,2,1,2,1,1,2,";
	sBase += "1,2,1,2,2,1,2,1,2,2,1,2,";
	sBase += "1,1,2,1,2,4,2,1,2,2,1,2,";
	sBase += "1,1,2,1,2,1,2,1,2,2,2,1,";
	sBase += "2,1,1,2,1,1,2,1,2,2,2,1,";
	sBase += "2,2,1,1,5,1,2,1,2,2,1,2,";
	sBase += "2,2,1,1,2,1,1,2,1,2,1,2,";
	sBase += "2,2,1,2,1,2,1,1,2,1,2,1,";
	sBase += "2,2,4,2,1,2,1,1,2,1,2,1,";
	sBase += "2,1,2,2,1,2,2,1,2,1,1,2,";
	//1881
	sBase += "1,2,1,2,1,2,5,2,2,1,2,1,";
	sBase += "1,2,1,2,1,2,1,2,2,1,2,2,";
	sBase += "1,1,2,1,1,2,1,2,2,2,1,2,";
	sBase += "2,1,1,2,3,2,1,2,2,1,2,2,";
	sBase += "2,1,1,2,1,1,2,1,2,1,2,2,";
	sBase += "2,1,2,1,2,1,1,2,1,2,1,2,";
	sBase += "2,2,1,5,2,1,1,2,1,2,1,2,";
	sBase += "2,1,2,2,1,2,1,1,2,1,2,1,";
	sBase += "2,1,2,2,1,2,1,2,1,2,1,2,";
	sBase += "1,5,2,1,2,2,1,2,1,2,1,2,";
	//1891
	sBase += "1,2,1,2,1,2,1,2,2,1,2,2,";
	sBase += "1,1,2,1,1,5,2,2,1,2,2,2,";
	sBase += "1,1,2,1,1,2,1,2,1,2,2,2,";
	sBase += "1,2,1,2,1,1,2,1,2,1,2,2,";
	sBase += "2,1,2,1,5,1,2,1,2,1,2,1,";
	sBase += "2,2,2,1,2,1,1,2,1,2,1,2,";
	sBase += "1,2,2,1,2,1,2,1,2,1,2,1,";
	sBase += "2,1,5,2,2,1,2,1,2,1,2,1,";
	sBase += "2,1,2,1,2,1,2,2,1,2,1,2,";
	sBase += "1,2,1,1,2,1,2,5,2,2,1,2,";
	//1901
	sBase += "1,2,1,1,2,1,2,1,2,2,2,1,";
	sBase += "2,1,2,1,1,2,1,2,1,2,2,2,";
	sBase += "1,2,1,2,3,2,1,1,2,2,1,2,";
	sBase += "2,2,1,2,1,1,2,1,1,2,2,1,";
	sBase += "2,2,1,2,2,1,1,2,1,2,1,2,";
	sBase += "1,2,2,4,1,2,1,2,1,2,1,2,";
	sBase += "1,2,1,2,1,2,2,1,2,1,2,1,";
	sBase += "2,1,1,2,2,1,2,1,2,2,1,2,";
	sBase += "1,5,1,2,1,2,1,2,2,2,1,2,";
	sBase += "1,2,1,1,2,1,2,1,2,2,2,1,";
	//1911
	sBase += "2,1,2,1,1,5,1,2,2,1,2,2,";
	sBase += "2,1,2,1,1,2,1,1,2,2,1,2,";
	sBase += "2,2,1,2,1,1,2,1,1,2,1,2,";
	sBase += "2,2,1,2,5,1,2,1,2,1,1,2,";
	sBase += "2,1,2,2,1,2,1,2,1,2,1,2,";
	sBase += "1,2,1,2,1,2,2,1,2,1,2,1,";
	sBase += "2,3,2,1,2,2,1,2,2,1,2,1,";
	sBase += "2,1,1,2,1,2,1,2,2,2,1,2,";
	sBase += "1,2,1,1,2,1,5,2,2,1,2,2,";
	sBase += "1,2,1,1,2,1,1,2,2,1,2,2,";
	//1921
	sBase += "2,1,2,1,1,2,1,1,2,1,2,2,";
	sBase += "2,1,2,2,3,2,1,1,2,1,2,2,";
	sBase += "1,2,2,1,2,1,2,1,2,1,1,2,";
	sBase += "2,1,2,1,2,2,1,2,1,2,1,1,";
	sBase += "2,1,2,5,2,1,2,2,1,2,1,2,";
	sBase += "1,1,2,1,2,1,2,2,1,2,2,1,";
	sBase += "2,1,1,2,1,2,1,2,2,1,2,2,";
	sBase += "1,5,1,2,1,1,2,2,1,2,2,2,";
	sBase += "1,2,1,1,2,1,1,2,1,2,2,2,";
	sBase += "1,2,2,1,1,5,1,2,1,2,2,1,";
	//1931
	sBase += "2,2,2,1,1,2,1,1,2,1,2,1,";
	sBase += "2,2,2,1,2,1,2,1,1,2,1,2,";
	sBase += "1,2,2,1,6,1,2,1,2,1,1,2,";
	sBase += "1,2,1,2,2,1,2,2,1,2,1,2,";
	sBase += "1,1,2,1,2,1,2,2,1,2,2,1,";
	sBase += "2,1,4,1,2,1,2,1,2,2,2,1,";
	sBase += "2,1,1,2,1,1,2,1,2,2,2,1,";
	sBase += "2,2,1,1,2,1,4,1,2,2,1,2,";
	sBase += "2,2,1,1,2,1,1,2,1,2,1,2,";
	sBase += "2,2,1,2,1,2,1,1,2,1,2,1,";
	//1941
	sBase += "2,2,1,2,2,4,1,1,2,1,2,1,";
	sBase += "2,1,2,2,1,2,2,1,2,1,1,2,";
	sBase += "1,2,1,2,1,2,2,1,2,2,1,2,";
	sBase += "1,1,2,4,1,2,1,2,2,1,2,2,";
	sBase += "1,1,2,1,1,2,1,2,2,2,1,2,";
	sBase += "2,1,1,2,1,1,2,1,2,2,1,2,";
	sBase += "2,5,1,2,1,1,2,1,2,1,2,2,";
	sBase += "2,1,2,1,2,1,1,2,1,2,1,2,";
	sBase += "2,2,1,2,1,2,3,2,1,2,1,2,";
	sBase += "2,1,2,2,1,2,1,1,2,1,2,1,";
	//1951
	sBase += "2,1,2,2,1,2,1,2,1,2,1,2,";
	sBase += "1,2,1,2,4,2,1,2,1,2,1,2,";
	sBase += "1,2,1,1,2,2,1,2,2,1,2,2,";
	sBase += "1,1,2,1,1,2,1,2,2,1,2,2,";
	sBase += "2,1,4,1,1,2,1,2,1,2,2,2,";
	sBase += "1,2,1,2,1,1,2,1,2,1,2,2,";
	sBase += "2,1,2,1,2,1,1,5,2,1,2,2,";
	sBase += "1,2,2,1,2,1,1,2,1,2,1,2,";
	sBase += "1,2,2,1,2,1,2,1,2,1,2,1,";
	sBase += "2,1,2,1,2,5,2,1,2,1,2,1,";
	//1961
	sBase += "2,1,2,1,2,1,2,2,1,2,1,2,";
	sBase += "1,2,1,1,2,1,2,2,1,2,2,1,";
	sBase += "2,1,2,3,2,1,2,1,2,2,2,1,";
	sBase += "2,1,2,1,1,2,1,2,1,2,2,2,";
	sBase += "1,2,1,2,1,1,2,1,1,2,2,1,";
	sBase += "2,2,5,2,1,1,2,1,1,2,2,1,";
	sBase += "2,2,1,2,2,1,1,2,1,2,1,2,";
	sBase += "1,2,2,1,2,1,5,2,1,2,1,2,";
	sBase += "1,2,1,2,1,2,2,1,2,1,2,1,";
	sBase += "2,1,1,2,2,1,2,1,2,2,1,2,";
	//1971
	sBase += "1,2,1,1,5,2,1,2,2,2,1,2,";
	sBase += "1,2,1,1,2,1,2,1,2,2,2,1,";
	sBase += "2,1,2,1,1,2,1,1,2,2,2,1,";
	sBase += "2,2,1,5,1,2,1,1,2,2,1,2,";
	sBase += "2,2,1,2,1,1,2,1,1,2,1,2,";
	sBase += "2,2,1,2,1,2,1,5,2,1,1,2,";
	sBase += "2,1,2,2,1,2,1,2,1,2,1,1,";
	sBase += "2,2,1,2,1,2,2,1,2,1,2,1,";
	sBase += "2,1,1,2,1,6,1,2,2,1,2,1,";
	sBase += "2,1,1,2,1,2,1,2,2,1,2,2,";
	//1981
	sBase += "1,2,1,1,2,1,1,2,2,1,2,2,";
	sBase += "2,1,2,3,2,1,1,2,2,1,2,2,";
	sBase += "2,1,2,1,1,2,1,1,2,1,2,2,";
	sBase += "2,1,2,2,1,1,2,1,1,5,2,2,";
	sBase += "1,2,2,1,2,1,2,1,1,2,1,2,";
	sBase += "1,2,2,1,2,2,1,2,1,2,1,1,";
	sBase += "2,1,2,2,1,5,2,2,1,2,1,2,";
	sBase += "1,1,2,1,2,1,2,2,1,2,2,1,";
	sBase += "2,1,1,2,1,2,1,2,2,1,2,2,";
	sBase += "1,2,1,1,5,1,2,1,2,2,2,2,";
	//1991
	sBase += "1,2,1,1,2,1,1,2,1,2,2,2,";
	sBase += "1,2,2,1,1,2,1,1,2,1,2,2,";
	sBase += "1,2,5,2,1,2,1,1,2,1,2,1,";
	sBase += "2,2,2,1,2,1,2,1,1,2,1,2,";
	sBase += "1,2,2,1,2,2,1,5,2,1,1,2,";
	sBase += "1,2,1,2,2,1,2,1,2,2,1,2,";
	sBase += "1,1,2,1,2,1,2,2,1,2,2,1,";
	sBase += "2,1,1,2,3,2,2,1,2,2,2,1,";
	sBase += "2,1,1,2,1,1,2,1,2,2,2,1,";
	sBase += "2,2,1,1,2,1,1,2,1,2,2,1,";
	//2001
	sBase += "2,2,2,3,2,1,1,2,1,2,1,2,";
	sBase += "2,2,1,2,1,2,1,1,2,1,2,1,";
	sBase += "2,2,1,2,2,1,2,1,1,2,1,2,";
	sBase += "1,5,2,2,1,2,1,2,2,1,1,2,";
	sBase += "1,2,1,2,1,2,2,1,2,2,1,2,";
	sBase += "1,1,2,1,2,1,5,2,2,1,2,2,";
	sBase += "1,1,2,1,1,2,1,2,2,2,1,2,";
	sBase += "2,1,1,2,1,1,2,1,2,2,1,2,";
	sBase += "2,2,1,1,5,1,2,1,2,1,2,2,";
	sBase += "2,1,2,1,2,1,1,2,1,2,1,2,";
	//2011
	sBase += "2,1,2,2,1,2,1,1,2,1,2,1,";
	sBase += "2,1,6,2,1,2,1,1,2,1,2,1,";
	sBase += "2,1,2,2,1,2,1,2,1,2,1,2,";
	sBase += "1,2,1,2,1,2,1,2,5,2,1,2,";
	sBase += "1,2,1,1,2,1,2,2,2,1,2,2,";
	sBase += "1,1,2,1,1,2,1,2,2,1,2,2,";
	sBase += "2,1,1,2,3,2,1,2,1,2,2,2,";
	sBase += "1,2,1,2,1,1,2,1,2,1,2,2,";
	sBase += "2,1,2,1,2,1,1,2,1,2,1,2,";
	sBase += "2,1,2,5,2,1,1,2,1,2,1,2,";
	//2021
	sBase += "1,2,2,1,2,1,2,1,2,1,2,1,";
	sBase += "2,1,2,1,2,2,1,2,1,2,1,2,";
	sBase += "1,5,2,1,2,1,2,2,1,2,1,2,";
	sBase += "1,2,1,1,2,1,2,2,1,2,2,1,";
	sBase += "2,1,2,1,1,5,2,1,2,2,2,1,";
	sBase += "2,1,2,1,1,2,1,2,1,2,2,2,";
	sBase += "1,2,1,2,1,1,2,1,1,2,2,2,";
	sBase += "1,2,2,1,5,1,2,1,1,2,2,1,";
	sBase += "2,2,1,2,2,1,1,2,1,1,2,2,";
	sBase += "1,2,1,2,2,1,2,1,2,1,2,1,";
	//2031
	sBase += "2,1,5,2,1,2,2,1,2,1,2,1,";
	sBase += "2,1,1,2,1,2,2,1,2,2,1,2,";
	sBase += "1,2,1,1,2,1,5,2,2,2,1,2,";
	sBase += "1,2,1,1,2,1,2,1,2,2,2,1,";
	sBase += "2,1,2,1,1,2,1,1,2,2,1,2,";
	sBase += "2,2,1,2,1,4,1,1,2,1,2,2,";
	sBase += "2,2,1,2,1,1,2,1,1,2,1,2,";
	sBase += "2,2,1,2,1,2,1,2,1,1,2,1,";
	sBase += "2,2,1,2,5,2,1,2,1,2,1,1,";
	sBase += "2,1,2,2,1,2,2,1,2,1,2,1,";
	//2041
	sBase += "2,1,1,2,1,2,2,1,2,2,1,2,";
	sBase += "1,5,1,2,1,2,1,2,2,2,1,2,";
	sBase += "1,2,1,1,2,1,1,2,2,1,2,2";
	
	var arrBase = [];
	arrBase = sBase.split(",");
	
	return arrBase;
};

/**
* @class 문자를 날짜로 변환. <br>
* @param {String} strDate - String Date Format
* @return {Date} date
* @example gfnStrToDate("20020101");
*/
pForm.gfnStrToDate = function(inDate)
{
  var date =  new Date(parseInt(inDate.substr(0,4)),parseInt(inDate.substr(4,2))-1,parseInt(inDate.substr(6,2)));
  return date;
};

/**
* @class Date Type을 String으로 변환 <br>
* @param {Date} date
* @return {String} 'yyyyMMdd' 형태로 표현된 날짜
* @example this.gfnDateToStr(new Date);
*/
pForm.gfnDateToStr = function(date)
{
	var strYear = date.getYear().toString();
	var strMonth = (date.getMonth()+1).toString();
	var strDate = date.getDate().toString();
	
	if(strYear.length==2)
		strYear = '19'+strYear;
	else if(strYear.length==1)
		strYear = '190'+strYear;
		
	if(strMonth.length==1)
		strMonth = '0'+strMonth;
	if(strDate.length==1)
		strDate = '0'+strDate;
	
	return strYear+strMonth+strDate;
};

/**
* @class 입력된 날자로부터 요일을 구함 <br>
* @param {String} strDate - 'yyyyMMdd' 형태로 표현된 날짜.
* @return {Number} 0 = 일요일 ~ 6 = 토요일. 오류가 발생할 경우 -1 Return.
* @example this.gfnGetDay("20020101");
*/
pForm.gfnGetDay = function(strDate)
{
    var date = new Date();

    var iYear = parseInt(strDate.substr(0, 4));
    var iMonth = parseInt(strDate.substr(4, 2) - 1);
    var iDate = parseInt(strDate.substr(6, 2));
    
	date.setFullYear(iYear,iMonth,iDate);
    return date.getDay();
};

/**
* @class 입력된 날자로부터 한글 요일을 구함 <br>
* @param {String} dateVal - 'yyyyMMdd' 형태로 표현된 날짜.
* @return {String} 0 = 일요일 ~ 6 = 토요일. 오류가 발생할 경우 "" Return.
* @example this.gfnGetDayKor("20020101");
*/
pForm.gfnGetDayKor = function(dateVal) 
{
	var nDay = -1;
	var dayKorArray = ["일", "월", "화", "수", "목", "금", "토"];
	
	nDay = this.gfnGetDay(dateVal);
	
	if( nDay < 0 ) return "";
	
	return dayKorArray[nDay];
};

/**
* @class 날짜 여부를 확인한다.(년월 or 년월일)
* @param {String} strDate - 입력스트링(YYYYMM or YYYYMMDD)
* @return {Boolean}
* @example this.gfnIsDate("20020101"); 
*/
pForm.gfnIsDate = function(strDate)
{
	if (this.gfnIsNull(strDate)) return false;
	
	var retVal;
	switch(strDate.length)
	{
		case 6://년월
			retVal =  this.gfnIsYM(strDate);
			break;
		case 8://년월일
			retVal =  this.gfnIsYMD(strDate);
			break;
		default:
			retVal = false; 
			break;
	}

	return retVal;
};

/**
* @class 날짜 여부를 확인한다 -  gfnIsDate내부용
* @param {String} strDate - 8자리의 숫자로 된 날짜(YYYYMMDD)
* @return {Boolean}
* @example this.gfnIsYMD("20020101");  
*/
pForm.gfnIsYMD = function(strDate)
{
	var retVal = this.gfnGetDigit(strDate);
	
	if (retVal.length != 8) {
		return false;
	}

	var strYM = strDate.substr(0,6);	//년월
	if (!this.gfnIsYM(strYM)) {
		return false;
	}
	var nDay   = Number(strDate.substr(6,2));	// 일자
	var nLastDay = Number(this.gfnGetLastDate(strYM).substr(6,2));//gfnGetLastDay에서 전체 20170331값이 넘어와서 .substr(6,2)추가 20170313
	if (nDay < 1 || nDay > nLastDay) {
		return false;
	}
	return true;
};


/**
* @class 날짜 여부를 확인한다 -  gfnIsDate내부용
* @param {String} strDate - 6자리의 숫자로 된 날짜(YYYYMM)
* @return {Boolean}
* @example this.gfnIsYM("200201");  
*/
pForm.gfnIsYM = function(strDate)
{
	var retVal = this.gfnGetDigit(strDate);

	if (retVal.length != 6) {
		return false;
	}

	var nYear  = Number(strDate.substr(0,4));	//년도값을 숫자로
	var nMonth = Number(strDate.substr(4,2));	//월을 숫자로

	if((nMonth < 1) || (nMonth > 12)) {
		return false;
	}

	return true;
};


/**
* @class 년월을 입력받아 마지막 일를 반환한다(년월) <br>
* @param {String} strDate - 6 / 8 자리의 숫자로 된 날짜(YYYYMM)
* @return {String} 해당월의 마지막날 8자리
* @example this.gfnGetLastDate("20020101");  
*/
pForm.gfnGetLastDate = function(strDate)
{
	var s = "";
    if (strDate == null) {
	    var date = (new Date()).addMonth(1);
    }
    else {
	    var date = new Date(parseInt(strDate.substr(0,4)),parseInt(strDate.substr(4,2)),1);
    }

	date = (new Date(date)).addDate((new Date(date)).getDate()*-1);

	s = (new Date(date)).getFullYear()
	  + (((new Date(date)).getMonth() + 1) + "").padLeft(2, '0')
	  + ((new Date(date)).getDate() + "").padLeft(2, '0');

	return (s);
};

/**
* @class 주민번호 뒷 첫번째 자리로 년대를 return 한다. <br>
* @param {String} sJuminNo	생년 월일 또는 주민 번호
* @return {String} 주민번호 뒷 첫번째 자리로 년대를 return 한다.
* @example this.gfnGetBirthYear("70012251024657") 
*/
pForm.gfnGetBirthYear = function(sJuminNo)
{
	if (sJuminNo.toString().length != 13){
		return "N";
	}
	
	if (!(sJuminNo).match(/^\d{6}\d{7}$/)){
		return "N";
	}

	var vGb = sJuminNo.substr(6,1);

	if (vGb == '1' || vGb == '2' || vGb == '5' || vGb == '6') {
		return '19';
	} else if (vGb == '3' || vGb == '4' || vGb == '7' || vGb == '8') {
		return '20';
	}
};

/**
* @class 입력받은 date로 week(주차)를 리턴한다. <br>
* @param {String}  date
* @return {String} week
* @example this.gfnDateToWeek(value);
*/
pForm.gfnDateToWeek = function (v)
{
	var year  = nexacro.toNumber(v.substr(0, 4));
    var month = nexacro.toNumber(v.substr(4, 2));
    var day   = nexacro.toNumber(v.substr(6, 2));

    var week = this.gfnCalculateWeek(year, month, day);

    if ((month == 1) && (week > 50)){
      year--;
    }else if ((month == 12) && (week < 2)){
      year++;
    }

    return year.toString() + week.toString().padLeft(2, '0');	
};

/**
* @class 입력받은 date로 week(주차)를 리턴한다. <br>
* @param {String}  year
* @param {String}  month
* @param {String}  day
* @return {String} week
* @example this.gfnCalculateWeek("2002", "12", "25") 
*/
pForm.gfnCalculateWeek = function(year, month, day)
{
	var a = Math.floor((14 - month) / 12);
	var y = year + 4800 - a;
	var m = month + 12 * a - 3;
	var b = Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400);
	var J = day + Math.floor((153 * m + 2) / 5) + 365 * y + b - 32045;
	var d4 = (((J + 31741 - (J % 7)) % 146097) % 36524) % 1461;
	var L = Math.floor(parseInt(d4) / 1460);
	var d1 = ((d4 - L) % 365) + L;

	week = Math.floor(d1 / 7) + 1;

	return week;
};

/**
* @class 날짜(Date) 해당 월의 최대 주수(주차) 구하기
* @param {String} dateStr - 6 / 8 자리의 숫자로 된 날짜(YYYYMM)
* @return {String} week
* @example this.gfnGetWeekCountOfMonth("20020101") 
*/
pForm.gfnGetWeekCountOfMonth = function(dateStr)
{
	var year  = Number(dateStr.substring(0, 4));
	var month = Number(dateStr.substring(4, 6));
	
	var nowDate = new Date(year, month-1, 1);

	var lastDate = new Date(year, month, 0).getDate();
	var monthSWeek = nowDate.getDay();

	var weekSeq = parseInt((parseInt(lastDate) + monthSWeek - 1)/7) + 1;

	return weekSeq;
}

/**
* @class 두 일자간의 차이 일수 계산 <br>
* @param {String} sStartDate - yyyyMMdd형태의 From 일자 ( 예 : "20121122" )
* @param {String} sEndDate - yyyyMMdd형태의 To 일자   ( 예 : "20121202" )
* @return {Number} 숫자 형태의 차이일수( 예 : 10 ) 단, sEndDate < sStartDate이면 음수가 return된다.
* @example this.gfnGetDiffDate(sFrom, sTo)
*/
pForm.gfnGetDiffDate = function(sStartDate, sEndDate)
{
    var vFromDate = new Date(parseInt(sEndDate.substring(0,4),  10), parseInt(sEndDate.substring(4,6)-1,  10), parseInt(sEndDate.substring(6,8), 10));
    var vToDate = new Date(parseInt(sStartDate.substring(0,4),  10), parseInt(sStartDate.substring(4,6)-1,  10), parseInt(sStartDate.substring(6,8), 10));
    
    return parseInt((vFromDate - vToDate)/(1000*60*60*24));
};

/***************************************************************************************************************
validation check용
*****************************************************************************************************************/
/**
* @class 문자열 Byte 길이를 체크한다
* @param {String} val - 문자열
* @param {Number} len - 문자열 Byte 길이
* @return {Boolean}
* @example this.gfnChkByteLen(val, 1) 
*/
pForm.gfnChkByteLen = function (val, len ) 
{
	var nByteLen = this.gfnLengthByte(val);
	
	return nByteLen == len;
};

/**
* @class 문자형 여부 체크
* @param {String} val - 문자열
* @return {Boolean}
* @example this.gfnIsString(val) 
*/
pForm.gfnIsString = function(val) {
	return typeof val == "string";
}

/**
* @class 숫자체크
* @param {String} sValue
* @return {Boolean}
* @example this.gfnIsDigit("123")  
*/
pForm.gfnIsDigit = function(sNum)
{
	var c;
	var point_cnt=0;
	var ret=true;

	if ( this.gfnIsNull(sNum) )	return false;

	for (var i=0; i<sNum.length; i++)
	{
		c = sNum.charAt(i);
		if (i == 0 && (c == "+" || c == "-"));
		else if (c >= "0" && c <= "9");
		else if (c == ".")
		{
			point_cnt++;
			if ( point_cnt > 1 )
			{
				ret = false;
				break;
			}
		}
		else
		{
			ret = false;
			break;
		}
	}
	return ret;
};

/**
* @class 한글만으로 되어 있는지 Check한다. <br>
* @param {String} strValue
* @return {Boolean}
* @example this.gfnIsKoreanChar("테스트")   
*/
pForm.gfnIsKoreanChar = function(strValue)
{
	var retVal = true;
	
	for (i = 0; i < strValue.length; i++){
		if (!((strValue.charCodeAt(i) > 0x3130 && strValue.charCodeAt(i) < 0x318F) || (strValue.charCodeAt(i) >= 0xAC00 && strValue.charCodeAt(i) <= 0xD7A3))){
			retVal = false;
		}
	}
	
	return retVal;
};

/**
* @class 특수문자가 있는지 Check한다. <br>
* @param {String} strValue
* @return {Boolean}
* @example this.gfnIsSpecialChar("테스트")    
*/
pForm.gfnIsSpecialChar = function(val)
{
	var sCheckRegexp = /[\{\}\[\]\/\?.,;:\(\)*~`!^\-_+<>@\#$%&\\\=\'\"]/gi;
	return sCheckRegexp.test(val);
};

/**
* @class 문자열이 영문인지 Check한다. <br>
* @param {String} val - 문자열
* @return {Boolean}
* @example this.gfnIsEng("test")     
*/
pForm.gfnIsEng = function(val) {
	var sCheckRegexp = /^([A-Za-z]+)$/;
	return sCheckRegexp.test(val);
};

/**
* @class 문자열이 영문+숫자인지 Check한다. <br>
* @param {String} val - 문자열
* @return {Boolean}
* @example this.gfnIsEngNum("test123")      
*/
pForm.gfnIsEngNum = function(val) {
	var sCheckRegexp = /^([A-Za-z0-9]+)$/;
	return sCheckRegexp.test(val);
};

/**
* @class 문자열에 숫자가 포함되어 있는지 체크한다. <br>
* @param {String} val - 문자열
* @return {Boolean}
* @example this.gfnHasNumber("test123")       
*/
pForm.gfnHasNumber = function(val) 
{
	if(this.gfnIsNull(val)) return false;
	
	for(var valIdx=0;valIdx<val.length;valIdx++) {
		if( this.gfnIsDigit(val.charAt(valIdx)) ) {
			return true;
		}
	}
	
	return false;
};

/**
* @class 문자열에 한글이 포함되어 있는지 체크한다. <br>
* @param {String} val - 문자열
* @return {Boolean}
* @example this.gfnHasKor("테스트123")      
*/
pForm.gfnHasKor = function(val) 
{
	if(this.gfnIsNull(val)) return false;
	
	for(var valIdx=0;valIdx<val.length;valIdx++) {
		if( this.gfnIsKoreanChar(val.charAt(valIdx)) ) {
			return true;
		}
	}
	
	return false;
};

/**
* @class 문자열에 영문이 포함되어 있는지 체크한다. <br>
* @param {String} val - 문자열
* @return {Boolean}
* @example this.gfnHasEng("test123")       
*/
pForm.gfnHasEng = function(val) 
{
	if(this.gfnIsNull(val)) return false;
	
	for(var valIdx=0;valIdx<val.length;valIdx++) {
		if( this.gfnIsEng(val.charAt(valIdx)) ) {
			return true;
		}
	}
	
	return false;
};

/**
* @class 주민등록번호 여부를 확인한다. <br>
* @param {String} sJuminNo - 입력문자열(주민번호 13자리)
* @return {Boolean}
* @example this.gfnIsSSN("70012251024567")     
*/
pForm.gfnIsSSN = function(sJuminNo)
{
	var birthYear = this.gfnGetBirthYear(sJuminNo);
	
	birthYear += sJuminNo.substr(0, 2);
	var birthMonth = sJuminNo.substr(2, 2)-1;
	var birthDate = sJuminNo.substr(4, 2);
	var birth = new Date(birthYear, birthMonth, birthDate);

	if ( birth.getYear() % 100 != sJuminNo.substr(0, 2) ||
		birth.getMonth() != birthMonth ||
		birth.getDate() != birthDate) 
	{
		return false;
	}

	// Check Sum 코드의 유효성 검사
	buf = new Array(13);
	for (i = 0; i < 6; i++) buf[i] = parseInt(sJuminNo.charAt(i));
	for (i = 6; i < 13; i++) buf[i] = parseInt(sJuminNo.charAt(i));
	  
	multipliers = [2,3,4,5,6,7,8,9,2,3,4,5];
	for (i = 0, sum = 0; i < 12; i++) sum += (buf[i] *= multipliers[i]);

	if ((11 - (sum % 11)) % 10 != buf[12]) {
		return false;
	}else{
		return true;
	}
};

/**
* @class 외국인 등록번호 여부를 확인한다. <br>
* @param {String} strNo - 입력문자열(등록번호13자리)
* @return {Boolean}
* @example this.gfnIsFrnrIdNo("70012251024567")      
*/
pForm.gfnIsFrnrIdNo = function(strNo)
{
	if (strNo.length != 13 || !this.gfnIsDigit(strNo)) return false;
	
	var month = Number(strNo.substr(2, 2));
	var day	  = Number(strNo.substr(4, 2));
		
	if (month < 1 || month > 12) return false;
	if (day < 1 || day > 31) return false;
	
	var sum = 0;
	var odd = 0;
	var buf = array(13);
	var multipliers = [2,3,4,5,6,7,8,9,2,3,4,5];
	
	for (var i=0; i<13; i++) {
		buf[i] = Number(strNo.charAt(i));
	}
	
	if (buf[11] < 6) return false;
	
	odd = buf[7] * 10 + buf[8];
	if((odd%2) != 0) return false;
	
	for (var i=0; i<12; i++) {
		sum += (buf[i] * multipliers[i]);
	}
	
	sum = 11 - (sum % 11);
	
	if (sum >= 10) sum -= 10;
	sum += 2;
	if (sum >= 10) sum -= 10;
	
	if (buf[12] == sum) {
		return true;
	} else {
		return false;
	}
};

/**
* @class 사업자 등록번호 여부를 확인한다.
* @param {String} strCustNo - 입력문자열(등록번호10자리)
* @return {Boolean}
* @example this.gfnIsBzIdNo("2118661000")       
*/
pForm.gfnIsBzIdNo = function(strCustNo)
{
	if (strCustNo.length != 10) {
		return false;
	}
	else {		
		var checkID = new Array(1, 3, 7, 1, 3, 7, 1, 3, 5, 1);
		var tmpcustNo, i, chkSum=0, c2, remander;

		for (i=0; i<=7; i++) chkSum += checkID[i] * strCustNo.charAt(i);

		c2 = "0" + (checkID[8] * strCustNo.charAt(8));
		c2 = c2.substring(c2.length - 2, c2.length);

		chkSum += Math.floor(c2.charAt(0)) + Math.floor(c2.charAt(1));

		remander = (10 - (chkSum % 10)) % 10 ;

		if (Math.floor(strCustNo.charAt(9)) == remander) return true; // OK!
		return false;
	}

	return true;
};

/**
* @class 법인 등록번호 여부를 확인한다. <br>
* @param {String} strNo - 입력문자열(법인번호13자리)
* @return {Boolean}
* @example this.gfnIsFirmIdNo("1101117635243")     
*/
pForm.gfnIsFirmIdNo = function(strNo)
{
	if (strNo.length != 13 || !this.gfnIsDigit(strNo)) return false;

	var sum = 0;
	var buf = new Array(13);
	var multipliers = [1,2,1,2,1,2,1,2,1,2,1,2];
	
	for (var i=0; i<13; i++) {
		buf[i] = Number(strNo.charAt(i));
	}
	
	for (var i=0; i<12; i++) {
		sum += (buf[i] * multipliers[i]);
	}
	
	sum = (10 - (sum % 10)) % 10;
	
	if (buf[12] == sum) {
		return true;
	} else {
		return false;
	}
};

/**
* @class 신용카드번호 여부를 확인한다. <br>
* @param {String} strNo - 카드번호16자리
* @return {Boolean}
* @example this.gfnIsCardNo("1234567812345678")      
*/
pForm.gfnIsCardNo = function(strNo)
{
	if (strNo.length < 13 || strNo.length > 19 || !nexacro.isNumeric(strNo)) return false;
	
	var sum = 0;
	var buf = new Array();
	
	for (var i=0; i<strNo.length; i++) {
		buf[i] = Number(strNo.charAt(i));
	}
	
	var temp;
	for (var i=buf.length-1, j=0; i>=0; i--, j++) {
		temp = buf[i] * ((j%2) + 1);
		if (temp >= 10) {
			temp = temp - 9;
		}
		sum += temp;
	}
	
	if ((sum % 10) == 0) {
		return true;
	} else {
		return false;
	}
};

/**
* @class 이메일 형식에 맞는지 Check한다.
* @param {String} strValue
* @return {Boolean}
* @example this.gfnIsEmail("tobe@tobesoft.com")      
*/
pForm.gfnIsEmail = function(strValue)
{
	var retVal = false;
	var sTmp = "";
	var sRegExp = "[a-z0-9]+[a-z0-9.,]+@[a-z0-9]+[a-z0-9.,]+\\.[a-z0-9]+";

	var regexp = new RegExp(sRegExp,"ig");
	sTmp = regexp.exec(strValue);

	if (sTmp == null) {
		retVal = false;
	} 
	else {
		if (( sTmp.index == 0 ) && (sTmp[0].length == strValue.length )) {
			retVal = true;
		} else {
			retVal = false;
		}
	}
	return retVal;
};

/**
* @class 전화번호or핸드폰 번호를 체크한다. <br>
* @param {String} telNumVal - 전화번호
* @return {Boolean}
* @example this.gfnIsPhoneNum("01012345678")       
*/
pForm.gfnIsPhoneNum = function(telNumVal) 
{
	var rtn = true;
	if (!this.gfnIsTelNum(telNumVal) && !this.gfnIsMobileNum(telNumVal)) {
		rtn = false;
	}
	return rtn;
};

/**
* @class 전화번호를 체크한다. <br>
* @param {String} telNumVal - 전화번호
* @return {Boolean}
* @example this.gfnIsTelNum("0221407700")       
*/
pForm.gfnIsTelNum = function(telNumVal) 
{
	var sCheckRegexp = /^0(2|3[1-3]|4[1-4]|5[1-5]|6[1-4])-?\d{3,4}-?\d{4}$/
	return sCheckRegexp.test(telNumVal);
};

/**
* @class 핸드폰번호를 체크한다. <br>
* @param {String} telNumVal - 전화번호
* @return {Boolean}
* @example this.gfnIsMobileNum("01012345678")       
*/
pForm.gfnIsMobileNum = function(mobileVal) 
{
	var sCheckRegexp = /^(?:(010-?\d{4}|(01[1|6|7|8|9]-?\d{3,4})))-?\d{4}$/
	return sCheckRegexp.test(mobileVal);
};

/**
* @class 문자열 최소 및 최대 길이 범위를 체크한다. <br>
* @param {String} val - 문자열
* @param {Number} minLen - 문자열 최소 길이
* @param {Number} maxLen - 문자열 최대 길이
* @return {Boolean}
* @example this.gfnChkLenPeriod("test", 2, 5)    
*/
pForm.gfnChkLenPeriod = function(val, minLen, maxLen) 
{	
	if( minLen < 0 ) return false;	
	if( maxLen < 0 ) return false;	
	if( minLen > maxLen ) return false;
	
	if( this.gfnIsNull(val) ) {
		if( minLen == 0 && maxLen >= 0 ) {
			return true;
		} else {
			return false;
		}
	}
		
	return val.length >= minLen && val.length <= maxLen;
};

/**
* @class 문자열 Byte 최소 및 최대 길이 범위를 체크한다. <br>
* @param {String} val - 문자열
* @param {Number} minLen - 문자열 최소 Byte 길이
* @param {Number} maxLen - 문자열 최대 Byte 길이
* @return {Boolean}
* @example this.gfnChkByteLenPeriod("test", 2, 5)     
*/
pForm.gfnChkByteLenPeriod = function( val, minLen, maxLen ) 
{
	var nByteLen = this.gfnLengthByte(val);
	
	return nByteLen >= minLen && nByteLen <= maxLen;
};

/**
* @class  Grid에서 expression으로  표현할때 decode 문처럼 사용할 수 있는 기능
* @param  arguments - Decode 수행할 아규먼트(가변)
* @return {String} varRtnValue - 반환된 문자열
* @example this.gfnDecode(sortInfo.status, 1, this.MARKER[0], 2, this.MARKER[1], "");	
*/
pForm.gfnDecode = function ()
{
	var varRtnValue = null;

	var arrArgument = this.gfnDecode.arguments;
	var varValue = arrArgument[0];
	var bIsDefault = false;
	var nCount = 0;

	if ((arrArgument.length % 2) == 0) 
	{
		nCount = arrArgument.length - 1;
		bIsDefault = true;
	}
	else 
	{
		nCount = arrArgument.length;
		bIsDefault = false;
	}

	for (var i = 1; i < nCount; i += 2) 
	{
		if (varValue == arrArgument[i]) 
		{
			varRtnValue = arrArgument[i + 1];
			i = nCount;
		}
	}

	if (varRtnValue == null && bIsDefault) 
	{
		varRtnValue = arrArgument[arrArgument.length - 1];
	}

	return varRtnValue;
};

/**
* @class 컨트롤이 Dataset에 bind되어 있을 경우 즉시 value를 Dataset에 적용시킨다.
* @param N/A
* @return N/A
* @example this.gfnUpdateToDataset();
*/   
pForm.gfnUpdateToDataset = function()
{
	var objComp = this.getFocus();
	
	if (objComp != null) 
	{
		try 
		{
			objComp.updateToDataset();
		}
		catch (e) 
		{
		}
	}
};

/**
* @class 로그 출력(실행환경이 넥사크로스튜디오, 로컬, 개발일 경우만)
* @param  {String} sMsg - 로그 출력 문자열
* @param  {String} sType - 로그 타입
* @return N/A
* @example this.gfnLog(e.message ,"error");
*/
pForm.gfnLog = function(sMsg, sType)
{
	var objApp = nexacro.getApplication();
	
	var arrLogLevel = ["debug","info","warn","error"];
	
	if (objApp.gvRunMode == "R") 	
	{
		return;
	}
	
	if (this.gfnIsNull(sType)) 		
	{
		sType = "debug";
	}
	
	if (system.navigatorname == "nexacro") 
	{
		if (sMsg instanceof Object) 
		{
			for(var x in sMsg)
			{
				trace("[" + sType + "] " + x + " : " + sMsg[x]);
			}
		} else 
		{
			trace("[" + sType + "] " + sMsg);
		}
	} else 
	{
		console.log(sMsg);
	}
}

/**
* @class 문자열을 치환을 한다. <br>
* @param {String} val - 문자열
* @param {String} oldVal - 변경 대상 문자열
* @param {String} newVal - 변경할 문자열
* @return {String}
* @example this.gfnReplaceAll("가나다라","\n", "");
*/
pForm.gfnReplaceAll = function(val, oldVal, newVal) 
{
	if( this.gfnIsNull(val) ) return "";
	if( this.gfnIsNull(oldVal) ) return val;
	if( this.gfnIsNull(newVal) ) newVal = "";
	
	return val.split(oldVal).join(newVal);
};

/**
* @class HTML TAG 제거 함수
* @param {string}  제거할 문자열
* @return string
* @example this.gfnRemoveTag("정상적으로<BR>처리되었습니다.");
*/
pForm.gfnRemoveTag = function(html)
{
	var regExp = new RegExp("<(/)?([0-9a-zA-Z]*)(\\s[0-9a-zA-Z]*=[^>]*)?(\\s)*(/)?>","g"); 
	return html.replace(regExp, "");
}

/**
* @class Array 여부 반환
* @param {*} 확인할 값
* @return {Boolean}
* @example this.gfnIsArray(objData)
*/
pForm.gfnIsArray = function(value)
{
	if (Array.isArray)
	{
		return Array.isArray(value);
	}
	else
	{
		return Object.prototype.toString.call(value) === '[object Array]';
	}
}

/**
* @class 주어진 두개의 object들의 properties 가 동일한지 체크
* @param {object} o1 비교할 object
* @param {object} o2 비교할 object
* @return {boolean} 동일하면 true, 아니면 false
* @example this._checkKeys(obj1, obj2)
*/
pForm._checkKeys = function(o1, o2)
{
	for (var i in o1)
	{
		if (o1.hasOwnProperty(i) && typeof o2[i] === 'undefined')
		{
			return false;
		}
	}
	return true;
},

/**
* @class 주어진 두개의 인자에 대하여 동일한 값인지 확인한다.
* @param {*} obj1 비교하고자 하는 인자
* @param {*} obj2 비교하고자 하는 인자
* @return {boolean} 동일하면 true, 아니면 false
* @example
* // this = Form
* var a = {"id1": "apple","id": "kiwi",  "test": [1, 2], "a": Button00};
* var b = {"id": "kiwi", "id1": "apple", "test": [1, 2], "a": this};
* trace(this.gfnEequals(a, b)); // output : false
* var a = {"id1": "apple","id": "kiwi",  "test": [1, 2], "a": Button00};
* var b = {"id": "kiwi", "id1": "apple", "test": [1, 2], "a": Button00};
* trace(this.gfnEequals(a, b)); // output : true
*/	
pForm.gfnEequals = function(obj1, obj2)
{
	if (obj1 === obj2)
	{
		return true;
	}
	if ( this.gfnIsBoolean(obj1) && obj2 == null )
	{
		obj2 = !!obj2;
		return obj1 == obj2;
	}
	if ( this.gfnIsBoolean(obj2) && obj1 == null )
	{
		obj1 = !!obj1;
		return obj1 == obj2;
	}
	if ( obj1 && obj2 )
	{
		if ( obj1.equals )
		{
			return obj1.equals(obj2);
		}
		if ( obj2.equals )
		{
			return obj2.equals(obj1);
		}
	}
	if (this.gfnIsDate2(obj1) && this.gfnIsDate2(obj2))
	{
		if ( obj1.getTime() == obj2.getTime() )
		{
			return true;
		}
		return false;
	}
	if (this.gfnIsArray(obj1) && this.gfnIsArray(obj2))
	{
		if (obj1.length !== obj2.length)
		{
			return false;
		}
		for (var i = 0, l = obj1.length; i < l; i++)
		{
			if (!this.gfnEequals(obj1[i], obj2[i]))
				return false;
		}
		return true;
	}
	if (obj1 && (typeof obj1 === 'object') && obj1.hasOwnProperty
			&& obj2 && (typeof obj2 === 'object') && obj2.hasOwnProperty )
	{
		if (!this._checkKeys(obj1, obj2) || !this._checkKeys(obj2, obj1))
		{
			return false;
		}
		for (var i in obj1)
		{
			if (obj1.hasOwnProperty(i) && !this.gfnEequals(obj1[i], obj2[i]))
			{
				return false;
			}
		}
		return true;
	}
	return obj1 == obj2;
}

/**
* @class value의 boolean 여부 반환.
* @param {*} value 확인할 value.
* @return {boolean} boolean 여부.
* @example
* trace(this.gfnIsBoolean(true));	// output : true
* trace(this.gfnIsBoolean("true"));	// output : false	
*/
pForm.gfnIsBoolean = function(value) 
{
	return typeof value == 'boolean';
}

/**
* @class value의 Date 여부 반환.
* @param {date} value 확인할 value.
* @return {boolean} Date 여부.
* @example
* var a = new Date();
* trace(this.gfnIsDate2(a));	// output : true
* var a = "20130501";
* trace(this.gfnIsDate2(a));	// output : false 	 
*/
pForm.gfnIsDate2 = function(value) 
{
	return Object.prototype.toString.call(value) === '[object Date]';
}


/**
* @class value의 number 여부 반환.
* @param {*} value 확인할 value.
* @return {boolean} number 여부.
* @example
* trace(this.gfnIsNumber(1234));	// output : true
* trace(this.gfnIsNumber("1234"));	// output : false	
*/		
pForm.gfnIsNumber = function(value) {
	return typeof value === 'number' && isFinite(value);
}
 
/**
* @class value의 Object 여부 반환.
* @param {*} value 확인할 value.
* @return {boolean} Object 여부.
* @example
* var o = new Object();
* trace(this.gfnIsObject(o));	// output : true
* var o = {};
* trace(this.gfnIsObject(o));	// output : true
* var o = [1,2,3];
* trace(this.gfnIsObject(o));	// output : false
* var o = new Button();
* trace(this.gfnIsObject(o));	// output : false
* var o = new Rect();
* trace(this.gfnIsObject(o));	// output : false
*/
pForm.gfnIsObject = function(value)
{
	if ( value === null || value === undefined ) return false;
	
	// nexacro Component
	if (this.gfnIsXComponent(value)) return false;
	
	// nexacro Object (e.g. Dataset)
	if( value instanceof nexacro.Object ) return false;
	
	return typeof value == "object" && 
		   'constructor' in value &&
		   value.constructor === Object;
},		

/**
* @class value의 nexacro component 여부 반환.
* @param {*} value 확인할 value.
* @return {boolean} nexacro component 여부.
* @example
* var a = new Button();
* trace(this.gfnIsXComponent(a));	// output : true
* var a = new Dataset();
* trace(this.gfnIsXComponent(a));	// output : false
* var a = new String();
* trace(this.gfnIsXComponent(a));	// output : false
*/
pForm.gfnIsXComponent = function(value) 
{
	if ( value === null || value === undefined  ) return false;	
	return value instanceof nexacro.Component;
},

/**
* @class value의 Function 여부 반환.
* @param {*} value 확인할 value.
* @return {boolean} Function 여부.
* @example
* trace(this.gfnIsFunction(this.isFunction));	// output : true
* this.testFunction = function()
* {
* }
* trace(this.gfnIsFunction(this.testFunction));	// output : true
*/
pForm.gfnIsFunction = function(value)
{
	return Object.prototype.toString.call( value ) === '[object Function]';
}

/**
* @class value의 빈값 여부 반환.<br>
* 1. null, undefined type : true 반환<br>
* 2. string, array type : length 가 0인 경우 true 반환<br>
* 3. object type : 하위 속성이 존재할 경우 true 반환<br>
* 4. boolean, number, date type : false 반환
* @param {*} value 확인할 value.
* @return {boolean} empty 여부.
* @example
* var a;	// undefined
* trace(this.gfnIsEmpty(a));	// output : true
* var a = null;	// null
* trace(this.gfnIsEmpty(a));	// output : true
* var a = "";	// string
* trace(this.gfnIsEmpty(a));	// output : true
* var a = "abc";	// string
* trace(this.gfnIsEmpty(a));	// output : false
* var a = [];	// array
* trace(this.gfnIsEmpty(a));	// output : true
* var a = [1,2,3];	// array
* trace(this.gfnIsEmpty(a));	// output : false
* var a = new Array();	// array
* trace(this.gfnIsEmpty(a));	// output : true
* var a = new Array(3);	// array
* trace(this.gfnIsEmpty(a));	// output : false
* var a = {};	// object
* trace(this.gfnIsEmpty(a));	// output : true
* var a = {a:'1', b:'2'};	// object
* trace(this.gfnIsEmpty(a));	// output : false
* var a = new Object();	// object
* trace(this.gfnIsEmpty(a));	// output : true
* var a = new Object();	// object
* a.test = "abc";
* trace(this.gfnIsEmpty(a));	// output : false
* var a = true;	// boolean
* trace(this.gfnIsEmpty(a));	// output : false
* var a = 0;	// number
* trace(this.gfnIsEmpty(a));	// output : false
* var a = new Date();	// date
* trace(this.gfnIsEmpty(a));	// output : false
*/
pForm.gfnIsEmpty = function(value)
{
	// null, undefined ==> true
	if ( value == null ) return true;
	
	// String, Array ==> length == 0
	if ( this.gfnIsString(value) )
	{
		return value.trim().length == 0 ? true : false;
	}
	else if ( this.gfnIsArray(value) )
	{
		return value.length == 0 ? true : false;
	}
	else if ( this.gfnIsObject(value) )
	{
		for (var p in value) 
		{
			if ( value.hasOwnProperty(p) )
			{
				return false;
			}
		}
		return true;
	}
	
	return false;
},

/**
* @class 파라미터로 여러개의 Object 를 검사할 때 하나라도 empty 이면 true 리턴한다.
* @param {*} value 확인할 value.
* gfnIsEmpty(GRID) : binddataset 이 empty인지 검사
* gfnIsEmpty(DATASET) : rowcount 가 0 인지 검사
* gfnIsEmpty(String) : trim().length 가 0인지 검사
* gfnIsEmpty(ARRAY) : length 가 0 인지 검사
* gfnIsEmpty(object) : value 가 empty 인지 검사
* gfnIsEmpty(null) : true 리턴
* @return {boolean} empty 여부.
* @example this.gfnIsEmpty2(obj.value)
*/
pForm.gfnIsEmpty2 = function () 
{
	for (var i = 0; i < arguments.length; i++) 
	{
		var obj = arguments[i];
		if (this.gfnIsNull(obj)) 
		{
			return true;
		}
		var objType = this.gfnGetObjectType(obj);
		switch (objType) 
		{
			case "Array":
				if (obj.length <= 0) 
				{
					return true;
				}
				break;
			case "String":
				if (obj.trim().length <= 0) 
				{
					return true;
				}
				break;
			case "Dataset":
				if (obj.rowcount <= 0) 
				{
					return true;
				}
				break;
			case "Grid":
				if (obj.binddataset.rowcount <= 0) 
				{
					return true;
				}
				break;
			case "Function":
			case "Boolean":
			case "Number":
			case "Date":
				//Pass
				break;
			default:
				if (this.gfnIsObject(obj)) 
				{
					return this.gfnIsEmpty(obj);
				}                    

				if (this.gfnIsEmpty2(obj.value)) 
				{
					return true;
				}
		}
	}
	return false;
}

/**
* @class not empty 여부 확인.
* @param {*} value 확인할 value.
* @return {boolean} empty 여부.
* @example this.gfnIsNotEmpty2(obj.value)
*/
pForm.gfnIsNotEmpty2 = function () 
{
	for (var i=0; i<arguments.length; i++) 
	{
		var obj = arguments[i];
		var chk = this.gfnIsEmpty2(obj);
		if (chk) 
		{
			return false;
		}
	}
	return true;
}

/**
* @class 오브젝트 유형을 문자열로 리턴한다. 
* @param obj 오브젝트
* @return 오브젝트의 유형
* @example this.gfnGetObjectType(obj)
*/    
pForm.gfnGetObjectType = function(obj) 
{
	if (this.gfnIsNull(obj)) {
		return null;
	} else if(this.gfnIsArray(obj)) {
		return "Array";
	} else if(this.gfnIsString(obj)) {
		return "String";
	} else if(this.gfnIsFunction(obj)) {
		return "Function";
	} else if(this.gfnIsBoolean(obj)) {
		return "Boolean";
	} else if(this.gfnIsDate2(obj)) {
		return "Date";
	} else if(this.gfnIsNumber(obj) || (typeof(obj) == "object" && typeof(obj.valueOf()) == "number")) { //BigDecimal 인 경우 처리
		return "Number";
	} else if(obj instanceof nexacro.Date){
		return "nexacro.Date";
	} else if(obj instanceof nexacro.Decimal){
		return "nexacro.Decimal";
	} else if(this.gfnTypeOf(obj)) {
		return this.gfnTypeOf(obj);
	}
	return "Object";
}

/**
* @class nexacro 객체의 type 반환.
* @param {*} obj Object, Component, Frame, .. 등 nexacro platform 모든 개체.
* @return {string} 객체 type.
* @example
* trace(this.gfnTypeOf(Button00));	// output : Button
* trace(this.gfnTypeOf(Tab00));	// output : Tab
* trace(this.gfnTypeOf(Tab00.tabpage1));	// output : TabpageControl
* trace(this.gfnTypeOf(Dataset00));	// output : Dataset
*/
pForm.gfnTypeOf = function(obj)
{
	var type;
	if ( obj && (typeof obj == "object"))
	{
		var s = obj.toString();
		if(s == "[object Object]") return type;
		
		type = s.substr(8, s.length-9);
	}
	return type;
}

/**
* @class form의 object가 있으면 해당 object를 반환하는 함수
* @param {Object} form  form object 객체
* @param {String} findObjName  검색 대상 object name
* @return {Object}
* @example this.gfnGetFormFindObj(objGrid.parent, objGrid.makeCompList[i])
*/    
pForm.gfnGetFormFindObj = function (obj, findObjName)
{	
	var pObj = obj;
	do 
	{
		if (this.gfnIsNull(pObj.all) == false)
		{
			if (this.gfnIsNull(pObj.all[findObjName]) == false) 
			{
				return pObj.all[findObjName];			
			}
		}
		pObj = pObj.parent;
	} while (!this.gfnIsNull(pObj));
}

/**
* @class 제네레이트된 넥사크로 컴포넌트 id 반환
* @param {Object} 컴포넌트ID
* @return {String}
* @example this.getElementId(objID)
*/
pForm.getElementId = function(obj) 
{
	var generateID = "";
	var prtID = obj;
	var i = 0;
	while (prtID != nexacro.getApplication().mainframe && prtID != null)
	{
		if (prtID.toString() == "[object Form]") 
		{
		  generateID = "form\\." + generateID;
		} 
		else 
		{
		  generateID = prtID.name + ((generateID != "")?"\\.":"") + generateID;
		}
		i++;
		prtID = prtID.parent;   
	}
	// 특수문자 escape
	generateID = generateID.replace(/[ \s\!"#\$%&'\(\)\*\+,\/\:;<=>\?@\[\]\^`\{\|\}\~ ]/g, '\\$&')

	return "mainframe\\." + generateID;
};

/**
* @class JQuery ID  반환
* @param {String} 컴포넌트ID
* @return {String} $('#test')
* @example this.getJQueryId(objID)
*/
pForm.getJQueryId = function(objID) 
{
	if ( system.navigatorname == "nexacro" || (system.navigatorname == "IE" && system.navigatorversion < 9) ) return;
	return $("#" + this.getElementId(objID));
};

/**
* @class NEXT GLOBAL DATA CREATE
* @param {Object} Dataset
* @return N/A
* @example this.initNextGlobalDataset(objDs)
*/
pForm.gfnInitNextGlobalDataset = function(objDs) 
{
	objDs.clearData();
	objDs.addColumn("EMP_NO","string");
	objDs.addColumn("EMP_NM","string");
	objDs.addColumn("DEPT_CD","string");
	objDs.addColumn("DEPT_NM","string");
	objDs.addColumn("EMAIL","string");
	objDs.addColumn("MOBILE","string");
	objDs.addColumn("OFFICE","string");
	objDs.addColumn("GRADE_CD","string");
	objDs.addColumn("GRADE_NM","string");
	objDs.addColumn("DUTY_CD","string");
	objDs.addColumn("DUTY_NM","string");
	objDs.addColumn("EMP_KIND","string");
	objDs.addColumn("CO_CD","string");
	objDs.addColumn("CO_NM","string");
	objDs.addColumn("LOGIN_SYS","string");
	objDs.addColumn("LANGUAGE","string");
	objDs.addColumn("MODEL_ID","string");
	
	objDs.addRow();
	objDs.setColumn(0, "EMP_NO", "w22010301");
	objDs.setColumn(0, "EMP_NM", "지해식");
	objDs.setColumn(0, "DEPT_CD", "W210");
	objDs.setColumn(0, "DEPT_NM", "DXTOBE");
	objDs.setColumn(0, "EMAIL", "admin@dxtobe.com");
	objDs.setColumn(0, "MOBILE", "010-9667-5759");
	objDs.setColumn(0, "GRADE_CD", "104");
	objDs.setColumn(0, "GRADE_NM", "104");
	objDs.setColumn(0, "DUTY_CD", "");
	objDs.setColumn(0, "DUTY_NM", "");
	objDs.setColumn(0, "EMP_KIND", "");
	objDs.setColumn(0, "CO_CD", "W01");
	objDs.setColumn(0, "CO_NM", "");
	objDs.setColumn(0, "LOGIN_SYS", "NEXTp");
	objDs.setColumn(0, "LANGUAGE", "KOR");
	objDs.setColumn(0, "MODEL_ID", "");
	
	objDs.applyChange();
};


//--------------------------------------------------------------------------------------------
// COLOR DEFINE
//--------------------------------------------------------------------------------------------
nexacro.CHART_COLOR_INDEX = 0;
nexacro.CHART_COLORS = {
							"bgcolor" 	: ["#1e1f21", "", "linear-gradient(#1A2140:#262C4B:#373C5B:#454968:#4F5372)", ""],
							"bgcolorpie" 	: ["#666666", "", "linear-gradient(#E45B19:#E79C28:#EADD37:#EBF23C)", ""],
							"titlecolor" 	: ["#f1f1f1", ""],
							"titleaccentcolor" 	: ["yellow", ""],
							"title2color" 	: ["#C9CACB", ""],
							"axiscolor" 	: ["#5F6368", ""],
							"tickcolor" 	: ["#cccccc", ""],
							"axislabelcolor": ["#676570", ""],
							"labelabovecolor": ["#dddddd", ""],
							"keybgcolor": ["rgba(255,255,255,0)", ""],
							"keylabelcolor": ["#f1f1f1", ""],
							"stokecolor" 	: ["", ""],
							"desccolor" 	: ["", ""],
							"niddlecolor" 	: ["#ffd662", ""],
							"shadowcolor" 	: ["#dddddd", ""],
							"centertitle"   : ["#dddddd", ""],
							"bottomtitle"   : ["#dddddd", ""],
							"tooltipbg"   : ["rgba(255,255,255,0.75)", ""],
							"tooltiptext"   : ["rgba(0,0,0,0.8)", ""],
							"tooltipborder"   : ["1px solid blue", ""],
							"grid"   : ["#57585E", ""],
							"bordercolor" 	: ["", ""]
					   };
/**
 * @class chart color
 * @param 
 * @return {string}
 */   
pForm.gfnChartColor = function (gb, bGradient)
{
	var idx = nexacro.CHART_COLOR_INDEX;
	if(bGradient) idx = idx + 2;
	
	if(gb == "title") return nexacro.CHART_COLORS.titlecolor[idx];
	else if(gb == "titleaccent") return nexacro.CHART_COLORS.titleaccentcolor[idx];
	else if(gb == "bgcolor") return nexacro.CHART_COLORS.bgcolor[idx];
	else if(gb == "bgcolorpie") return nexacro.CHART_COLORS.bgcolorpie[idx];
	else if(gb == "title2") return nexacro.CHART_COLORS.title2color[idx];
	else if(gb == "axis") return nexacro.CHART_COLORS.axiscolor[idx];
	else if(gb == "tick") return nexacro.CHART_COLORS.tickcolor[idx];
	else if(gb == "axislabel") return nexacro.CHART_COLORS.axislabelcolor[idx];
	else if(gb == "labelabove") return nexacro.CHART_COLORS.labelabovecolor[idx];
	else if(gb == "keybg") return nexacro.CHART_COLORS.keybgcolor[idx];
	else if(gb == "keylabel") return nexacro.CHART_COLORS.keylabelcolor[idx];
	else if(gb == "stroke") return nexacro.CHART_COLORS.stokecolor[idx];
	else if(gb == "desc") return nexacro.CHART_COLORS.desccolor[idx];
	else if(gb == "niddle") return nexacro.CHART_COLORS.niddlecolor[idx];
	else if(gb == "shadow") return nexacro.CHART_COLORS.shadowcolor[idx];
	else if(gb == "border") return nexacro.CHART_COLORS.bordercolor[idx];
	else if(gb == "titlecenter") return nexacro.CHART_COLORS.centertitle[idx];
	else if(gb == "titlebottom") return nexacro.CHART_COLORS.bottomtitle[idx];
	else if(gb == "tooltipbg") return nexacro.CHART_COLORS.tooltipbg[idx];
	else if(gb == "tooltiptext") return nexacro.CHART_COLORS.tooltiptext[idx];
	else if(gb == "tooltipborder") return nexacro.CHART_COLORS.tooltipborder[idx];
	else if(gb == "grid") return nexacro.CHART_COLORS.grid[idx];
};


/**
 * @class chart color
 * @param 
 * @return {string}
 */   
pForm.gfnGetRChartOption = function (stype, gubun, param)
{
	var options = {};
	switch(stype) {
		case "bar" :
			   options = {
					marginLeft:            0,
					//marginLeftAuto:       true,
					marginRight:           0,
					marginTop:             30,
					marginBottom:          35,	
					backgroundGridBorder: false,				
					backgroundGridVlines : false,
					//backgroundGridDashed : true,
					grouping: 'stacked',
					backgroundGridColor : '#57585E',
					colors: ['#3594de', '#fbe815'],
					keyPosition: 'margin',
					keyLabelsColor : this.gfnChartColor("keylabel"),
					keyLabelsSize : 8,
					titleY: '',
					title: '',
					titleBold: true,
					textBold: true,
					titleSize: 10,
					titleColor : this.gfnChartColor("title"),
					xaxis: true,
					yaxisLabelsCount : 0,
					//xaxisLabelsCount : 3,
					xaxisLinewidth : 2,
					labelsIngraphColor : this.gfnChartColor("axislabel"),
					xaxisLabelsColor: this.gfnChartColor("axislabel"),
					xaxisLabelsSize : 8,
					yaxis : false,
					yaxisColor : '#476C19',
					yaxisLabelsSize : 8,
					labelsAboveColor : this.gfnChartColor("axislabel"),
					yaxisLabelsColor : this.gfnChartColor("axislabel"),
					tooltipsEvent: 'mousemove',
					tooltipsPointer: true,
					tooltipsPositionStatic: true
				};		
			break;	
		case "hbar" :
			switch(gubun) {
				case "dual" :
				   options = {
						textFontStyle : '9px noto',
						textColor : this.gfnChartColor("axis"),
						backgroundGridHlines: false,
						backgroundGridBorder: false,
						backgroundGridVlinesCount: 5,
						marginInnerGrouped : 0,
						yaxis: true,
						corners : 'round',
						yaxisTickmarks : false,
						backgroundGridColor : '#57585E',						
						yaxisLabelsCount: 5,
						xaxis: false,
						yaxis: true,
						xaxisLabelsCount: 5,
						xaxisTitle: '',
						xaxisTitleColor: '',
						keyTextSize : 10,
						keyPosition: 'margin',
						keyLabelsBold: true,
						tooltipsPointer: true,
						tooltipsEvent: 'mousemove',
						tooltipsPointer: true,
						//tooltipsPositionStatic: true
						tooltipsCss: {
							fontSize: '9pt'
// 							backgroundColor: this.gfnChartColor("tooltipbg"),
// 							color: this.gfnChartColor("tooltiptext")
						}
					};		
					break;
				case "top5" :
				   options = {
						corners : 'round',
						title : '',
						marginTop:             3,
						marginBottom:          3,
						marginLeft:            3,
						marginRight:           50,			
						backgroundGrid: false,
						xaxisUse: false,
						yaxisUse: true,
						yaxisLineWidth : 2,
						yaxisTickmarks : false,
						yaxisLabels : null,
						marginInner: 5,
						xaxisScale: false,
						labelsAbove: true,
						labelsAboveFontStyle : '9px noto',
						colorsSequential : true,
						labelsAboveColor : this.gfnChartColor("labelabove"),
						labelsAboveUnitsPost: '%',
						colors: ['linear-gradient(#c34f7b:#dd6995:#f581ad)',
								 'linear-gradient(#a34fc3:#bc67db:#d681f5)',
								 'linear-gradient(#4f51c3:#686bdc:#8184f5)',
								 'linear-gradient(#4fc36d:#6ade88:#81f5a0)',
								 'linear-gradient(#c38b4f:#e2aa6e:#f5bd81)'
								],
						shadowUse: false,
						tooltipsEvent: 'mousemove'
					};		
					break;					
				default :
					break;
			}
			break;
		case "line" :
			switch(gubun) {
				case "fill1" :
				   options = {
						//backgroundColor : arrBgColor[ordering], 
						backgroundGrid : false,
						backgroundGridVlines: false,
						backgroundGridBorder: false,
						backgroundGridColor : '#57585E',
						shadowUse: false,
						textColor: this.gfnChartColor("title"),
						textFontStyle : '8px noto',
						xaxisLabels: null ,
						xaxisUse: false,
						yaxisUse: false,
						xaxisColor : this.gfnChartColor("axis"),
						xaxisTickmarks : false,
						yaxisTickmarks : false,
						yaxisScaleUnitsPost: '',
						marginBottom: 0,
						marginLeft: 0,
						marginRight: 0,
						marginTop: 0,
						lineWidth: 1,
						filledUse: true,
						filledAccumulative: true,
						tickmarksStyle: ''
					};		
					break;
				case "fill2" :
				   options = {
						lineWidth: 2,
						shadowUse: false,
						shadowBlur: 5,
						shadowOffsetx: 0,
						shadowOffsety: 0,	
						filledUse : true,
						filledAccumulative: true,
						backgroundGridColor : '#57585E',
						backgroundGrid: true,
						backgroundGridVlines: false,
						backgroundGridHlines: true,
						backgroundGridBorder: false,
						backgroundGridHlinesCount: 3,
						//backgroundGridColor : this.gfnChartColor("grid"),
						yaxisUse: false,
						yaxisLabelsCount : 0,
						yaxisLabelsColor : 'rgba(0,0,0,0)',
						yaxisLabels : null,
						xaxisUse: true,
						marginLeft:   30,
						marginRight:  30,
						marginTop:    5,
						marginBottom: 25,
						marginInner: 3,
						//colors: [arrFillColor[0], arrFillColor[1]],
						title: '',
						textFontStyle : '10px noto',
						titleColor:  this.gfnChartColor("title"),						
// 						tooltipsCss: {
// 							textAlign: 'left',
// 							backgroundColor: this.gfnChartColor("tooltipbg"),
// 							border: this.gfnChartColor("tooltipborder"),
// 							color: this.gfnChartColor("tooltiptext"),
// 						},
						tooltipsPointer: true,
						yaxisLabelsColor : this.gfnChartColor("axislabel"),
						xaxisLabelsColor : this.gfnChartColor("axislabel"),
						xaxisLabelsFontStyle : '8px noto',
						xaxisTickmarks : false,
						keyLabelsBackground : 'rgba(0,0,0,0)',
						//keyColors : this.gfnChartColor("keybg"),
						keyLabelsColor : this.gfnChartColor("axis"),
						//yaxisColor : this.gfnChartColor("axis"),
						xaxisColor : this.gfnChartColor("axis")
					};
					break;			
				case "trend" :
				   options = {
						lineWidth: 2,
						shadowUse: false,
						shadowBlur: 5,
						shadowOffsetx: 0,
						shadowOffsety: 0,	
						filled : true,
						//backgroundColor: this.gfnChartColor("bgcolor", true),
						backgroundGrid: false,
						backgroundGridVlines: false,
						backgroundGridBorder: false,
						backgroundGridHlinesCount: 4,
						backgroundGridColor : this.gfnChartColor("grid"),
						yaxis: false,
						yaxisLabelsCount : 0,
						yaxisLabels : null,
						xaxis: true,
						yaxisColor : this.gfnChartColor("axis"),
						yaxisLabelsColor: this.gfnChartColor("axislabel"),
						//yaxisScaleMax: 110,
						//yaxisScaleMin: 70,
						//yaxisLabelsCount: 4,
						marginLeft:   30,
						marginRight:  30,
						marginTop:    10,
						marginBottom: 25,
						title: '',
						tooltipsPointer: true,
						xaxisLabelsColor : this.gfnChartColor("axislabel"),
						xaxisLabelsSize : 8,
						key : '',
						keyOffsety : 15,
						keyLabelsBackground : 'rgba(0,0,0,0)',
						//keyColors : this.gfnChartColor("keybg"),
						keyLabelsColor : this.gfnChartColor("keylabel"),
						//yaxisColor : this.gfnChartColor("axis"),
						xaxisColor : this.gfnChartColor("axis")
					};
					break;		
				case "yellow" :
				case "blue" :
					var arrFillColor = [];
					var arrFillColor2 = [];
					if(gubun == "yellow") {
						arrFillColor = ['linear-gradient(#fdc21ca1:#fdd51ca1:#fde51ca1)'];
						arrFillColor2 = ['#fdd51c'];
					} else {
						arrFillColor = ['linear-gradient(#4399fba1:#4aadf9a1:#53c3f9a1)'];
						arrFillColor2 = ['#4aadf9'];
					}
				   options = {
					backgroundColor : '#525359',
                    linewidth: 1,
					shadow: false,
					filled : true,
					//yaxisLabelsCount : 1,
					marginLeftAuto : true,
					filledColors : arrFillColor,
					backgroundGrid: false,
                    backgroundGridVlines: false,
                    backgroundGridBorder: false,
                    backgroundGridHlinesCount: 0,
					backgroundGridColor : this.gfnChartColor("grid"),
                    yaxisUse: true,
					yaxisLabelsCount : 1,
					//yaxisLabelsColor : 'rgba(0,0,0,0)',
					yaxisLabels : null,
                    xaxisUse: true,
                    //yaxisScaleMax: 110,
                    //yaxisScaleMin: 70,
                    //yaxisLabelsCount: 4,
					//marginLeft:   10,
					marginRight:  10,
					marginTop:    10,
					marginBottom: 28,
                    colors: arrFillColor2,
                    title: '',
                    tooltipsPointer: true,
					tooltipsFormattedKeyColors: arrFillColor2,					
					xaxisLabelsColor : this.gfnChartColor("axislabel"),
					yaxisLabelsColor : this.gfnChartColor("axislabel"),
					xaxisLabelsSize : 8,
					//xaxisTickmarks : false,
					xaxisLinewidth : 1,
					key : '',
					keyLabelsBackground : 'rgba(0,0,0,0)',
					keyLabelsColor : this.gfnChartColor("keylabel"),
					tickmarksSize : 1,
					tickmarksStyleDotLinewidth : 1
					//xaxisColor : '',
					};
					break;						
				default :
					break;
			}
			break;			
		case "piesvg" :
			var color1 = "radial-gradient(#db3de8:#e33de2:#ec3ddc)";
			var color2 = "#505156";
			switch(gubun) {
				case "usage1" :
				   options = {
						marginLeft:    10,
						marginRight:   10,
						marginTop:     10,
						marginBottom:  10,				
						colors: [color2, color2],
						variantValue: 'donut',
						variantDonutWidth: 27
					};		
					break;
				case "usage11" :
				   options = {
						marginLeft:    10,
						marginRight:   10,
						marginTop:     10,
						marginBottom:  10,				
						colors: ['#EAE5EA', '#EAE5EA'],
						variantValue: 'donut',
						variantDonutWidth: 27
					};		
					break;
				case "usage2" :
				   options = {
						marginLeft:    10,
						marginRight:   10,
						marginTop:     10,
						marginBottom:  10,				
						colors: [color1, color2],
						variantValue: 'donut',
						variantDonutWidth: 27
					};		
					break;					
				case "usage22" :
				   options = {
						marginLeft:    10,
						marginRight:   10,
						marginTop:     10,
						marginBottom:  10,				
						colors: [color1, '#EAE5EA'],
						variantValue: 'donut',
						variantDonutWidth: 27
					};		
					break;					
				default :
					break;
			}
			break;			
		case "pie" :
			var color1 = "#96d922";
			var color2 = "#f44c4c";
			switch(gubun) {
				case "case1" :
				   options = {
						colors: [ color1, color2 ],
						colorsStroke: 'rgba(0,0,0,0)'
					};		
					break;
				case "case2" :
				   options = {
						marginLeft:    10,
						marginRight:   10,
						marginTop:     10,
						marginBottom:  10,				
						colors: [color1, color2],
						variantValue: 'donut',
						variantDonutWidth: 27
					};		
					break;					
				default :
					break;
			}
			break;			
		case "meter" :
			   options = {
					needleColor : this.gfnChartColor("niddle"),
					tickmarksSmallCount : 0,
					tickmarksLargeCount : 0,
					marginLeft:  0,
					marginRight: 0,
					marginTop:   5,
					marginBottom:8,		
					needleMove : true,
					needleType: 'pointer',
					tickmarksLargeColor: 'transparent',
					tickmarksSmallColor: 'transparent',
					labelsValue: false,
					//labelsValueOffsety :  3,
					//labelsRadiusOffset : 6,
					//labelsCount : (nSum>6?6:nSum),
					//labelsColor : this.gfnChartColor("axislabel"),
					//labelsSize : 10,
					lineWidth: 0,
					borderUse :false, 
					lineWidthSegments: 0,
					colorsStroke: null,
					backgroundColor : "transparent"
				};		
			break;						
		default :
	}
	if(param) {
		for(var p in param) {
			options[p] = param[p];
		}
	}
	return options;
};


/**
 * 장비 현황
 * 
 * @function fnSetDeviceChartOne
 * @param {object} oChart Chart
 * @param {number} nSum total
 * @param {number} nStart active
 * @param {number} nPct percent
 * @param {object} colorrange color object
 * @param {boolean} roundFill stop이 있는 경우 round 처리
 * @return 없음
 */
pForm.gfnSetDeviceChartOne = function(oChart, nSum, nStart, nPct, colorrange, roundFill, isPercent, isText, meterHeight, nGap, color)
{
	// #fbde15 / Center : #f6d910 / Bottom : #f1d30b
	var canvas = oChart.getCanvas();
	var cvs = canvas.id;
	DxChart.reset(canvas);
	
	nGap = nGap || 5;
	var nHeight = Math.min(oChart.getOffsetWidth(), oChart.getOffsetHeight());
	var nRadius = nHeight - nGap;
	meterHeight = meterHeight || parseInt(nHeight/3);
	var param = {
				radius : nRadius,
                segmentsRadiusStart: nRadius - meterHeight,
				labelsCenterValue : false,
                needleRadius: nRadius - nGap,
				colorsRanges: colorrange,				
				roundFill : roundFill
	};
	
	var svStart = nStart;
	var svSum = nSum;
	if(nSum==0 && nStart>0) nSum = nStart;
	if(nSum==0 && nStart==0) nSum = 1;
	if(nStart>nSum) nStart = nSum;
	var option = this.gfnGetRChartOption("meter", "", param);
	console.log(nSum, nStart);
    var prog = new DxChartMeter({
            id: cvs,
			elem : canvas,
            min: 0,
            max: nSum,
            value: nStart,
            options: option
        }).draw();	
	
	var nCX = prog.centerx;
	var nCY;
	if(nRadius < (nHeight/2)) {
		nCY = 20;
	} else {
		nCY = prog.centery - 20;
	}
	nCY = 10;
	console.log("isText", isText);
	if(isText) {
		var textactive = new DxChartText({
				id: cvs,
				elem : canvas,
				x: nCX,
				y: 15,	//meterHeight - 2,
				text: isText,
				options: {
					colors : "black" ,
					textFontStyle : "bold 10px noto",
					shadow : false,
					halign: 'center',
					valign: 'center'
				}
			}).draw();	
	
	} else {
		var textactive = new DxChartText({
				id: cvs,
				elem : canvas,
				x: nCX,
				y: meterHeight - 2,
				text: (isPercent?svStart+'%':svStart + "/" + svSum + "억"),
				options: {
					colors : [(color || "black")] ,
					textFontStyle : "bold 10px noto",
					halign: 'center',
					valign: 'center'
				}
			}).draw();	
	}
	console.log("param2", param);
};


/**
 * Top5 Chart
 * 
 * @function fnTop5Chart
 */
pForm.gfnAlertChart = function (oChart, ordering, data, txt)
{
	var sDefaultBg = "#525359";
	var arrBgColor = [];
	arrBgColor[1] = "rgba(140,51,54,0.1)";
	arrBgColor[2] = "rgba(255,167,51,0.1)";
	arrBgColor[3] = "rgba(32,125,95,0.1)";
	arrBgColor[4] = "rgba(36,151,202,0.1)";
	
	// Gradient(rgba(255,0,0,0.3):rgba(255,0,0,1))
	var arrColor = [];
	arrColor[1] = "#D9A0EE40";
	arrColor[2] = "#F9ACDA40";
	arrColor[3] = "#B1F8FD40";
	arrColor[4] = "#BBB6F740";

	var arrHexColor = [];
	arrHexColor[1] = "#e1a4f7a0";
	arrHexColor[2] = "#f9abdaa0";
	arrHexColor[3] = "#aff4f9a0";
	arrHexColor[4] = "#bbb6f7a0";
	
	var arrFillColor = [];
	arrFillColor[1] = "linear-gradient(#ce69f1:#d888f4:#e1a4f7)";
	arrFillColor[2] = "linear-gradient(#f67fc7:#f79ad3:#f9abda)";
	arrFillColor[3] = "linear-gradient(#63e7ee:#8feff4:#aff4f9)";
	arrFillColor[4] = "linear-gradient(#8176f3:#a39df6:#bbb6f7)";
// 	arrFillColor[1] = "Gradient(#ce69f180:#d888f480:#e1a4f780)";
// 	arrFillColor[2] = "Gradient(#f67fc780:#f79ad380:#f9abda80)";
// 	arrFillColor[3] = "Gradient(#63e7ee80:#8feff480:#aff4f980)";
// 	arrFillColor[4] = "Gradient(#8176f380:#a39df680:#bbb6f780)";

	var canvas = oChart.getCanvas();
	var cvs = canvas.id;		
	DxChart.reset(canvas);
	
	var nMax = 0;
	var cdleng = data.length;
	var tooltips = [];
	for(var i=0,len=cdleng;i<len;i++) {
		if(!data[i]) data[i] = 0;
		if(nMax < data[i]) nMax = data[i];
		//tooltips[i] = '<span style="font-size: 10pt">'+ cddata.name + " " + "(" + i + ":00~" + i + ":59)" + '<p align="center"><b>Count:</b> ' + cddatadata[i] + '</p></span>';
	}
	nMax = nMax * 1.2;
	if(cdleng == 0) {
		data = [0,0];
		nMax = 10;
	}
	var line = new DxChartLine({
			id: cvs,
			elem : canvas,
			data: [	data ],
			options: {
				backgroundColor : (cdleng==0?arrFillColor[ordering]:sDefaultBg), 
				backgroundGrid : false,
				backgroundGridVlines: false,
				backgroundGridBorder: false,
				backgroundGridColor: '#999',
				shadow: false,
				textColor: '#420E59',
				textSize: 16,
				xaxisLabels: [
				],		
				xaxis: false,
				yaxis: false,
				yaxisScaleMax : nMax,
				xaxisTickmarks : false,
				yaxisTickmarks : false,
				yaxisScaleUnitsPost: '',
				marginBottom: 0,
				marginLeft: 0,
				marginRight: 0,
				marginTop: 0,
				linewidth: 1,
				spline : true,
				filled: true,
				filledAccumulative: true,
				filledColors: [
					arrFillColor[ordering]
				],
				colors: [arrColor[ordering],'transparent'],
				tickmarksStyle: null
			}
		}).draw();	
		
		var nCX = oChart.getOffsetWidth()/2;
		var nCY = oChart.getOffsetHeight()/2;
		var text2 = new DxChart.Drawing.Text({
				id: cvs,
				elem : canvas,
				x: nCX,
				y: nCY,
				text: txt,
				options: {
					colors : ['#0B092F'] ,
					textSize: 12,
					textBold : true,
					halign: 'center',
					valign: 'center'
				}
			}).draw();	
};


/**
 * Top5 Chart
 * 
 * @function fnTop5Chart
 */
pForm.gfnTop5Chart = function (chart, data1, data1dummy, label1, tooltip1, nMax, tooltipsFormattedUnitsPost)
{
	if(!tooltipsFormattedUnitsPost) tooltipsFormattedUnitsPost = "%";
	var canvas = chart.getCanvas();
	var cvs = canvas.id;
	DxChart.reset(canvas);

	var ldata = [];
	for(var x=0;x<data1.length;x++) {
		ldata.push(data1[x]+"");	// 0인 경우 이상하네..
	}
	// background
	var parambg = {
			labelsAbove : true,
			labelsAboveFontStyle : '8px noto',
			labelsAboveSpecific : ldata,
			marginInner: 8,
			tooltipsData : '',
			xaxisScaleMax : nMax,
			colorsSequential : false,
			labelsAboveColor : '#000000',
			colors: ['#505156']
	};
	var optionbg = this.gfnGetRChartOption("hbar", "top5", parambg);
	var hbarbg = new DxChartHBar({
			id: cvs,
			elem : canvas,
			data: data1dummy,
			options: optionbg
		// Use the draw event to add the labels on the left-hand-side
		}).draw();
		//console.log("label1", label1);
	// 원본
	var param = {
			labelsAbove : false,
			xaxisScaleMax : nMax,
			tooltipsData: tooltip1,	//'<i style="position: relative; top: -5px">CPU Used:</i> <span style="font-size: 9pt; ">%{value}%</span>',
			//tooltipsFormattedKeyLabels : label1,
			tooltipsFormattedUnitsPost : tooltipsFormattedUnitsPost,
			tooltipsFormattedKeyColors : ["#dd6995", "#bc67db", "#686bdc", "#6ade88", "#e2aa6e"],
			tooltipsCss: {
				fontSize: '10pt'
			}
	};
	var option = this.gfnGetRChartOption("hbar", "top5", param);
	var hbar1 = new DxChartHBar({
			id: cvs,
			elem : canvas,
			data: data1,
			options: option
		// Use the draw event to add the labels on the left-hand-side
		}).on('onenddraw', function (obj)
		{
			var coords = obj.coords;

			// Loop through the coordinates of the bars
			for (var i=0; i<coords.length; ++i) {
				// For each of the coordinates add a text label
				// on the left-hand-side of the bar
				new DxChartText({
					id: cvs,
					elem : canvas,				
					object: obj,
					text:   label1[i],
					x:      coords[i][0] + 10,
					y:      coords[i][1] + (coords[i][3] / 2) + 2,
					options : {
					valign: 'center',
					textFontStyle: '9px noto',
					colors:  ['#FBDD15']
					}
				}).draw();
			}
		}).draw();
		
};


/**
 * Top5 Chart
 * 
 * @function fnTop5Chart
 */
pForm.gfnAlertChart = function (oChart, ordering, data, txt)
{
	var sDefaultBg = "#ffffff";
	var arrBgColor = [];
	arrBgColor[1] = "rgba(140,51,54,0.1)";
	arrBgColor[2] = "rgba(255,167,51,0.1)";
	arrBgColor[3] = "rgba(32,125,95,0.1)";
	arrBgColor[4] = "rgba(36,151,202,0.1)";
	
	// Gradient(rgba(255,0,0,0.3):rgba(255,0,0,1))
	var arrColor = [];
	arrColor[1] = "#D9A0EE40";
	arrColor[2] = "#F9ACDA40";
	arrColor[3] = "#B1F8FD40";
	arrColor[4] = "#BBB6F740";

	var arrHexColor = [];
	arrHexColor[1] = "#e1a4f7a0";
	arrHexColor[2] = "#f9abdaa0";
	arrHexColor[3] = "#aff4f9a0";
	arrHexColor[4] = "#bbb6f7a0";
	
	var arrFillColor = [];
	arrFillColor[1] = "linear-gradient(#ce69f1:#d888f4:#e1a4f7)";
	arrFillColor[2] = "linear-gradient(#f67fc7:#f79ad3:#f9abda)";
	arrFillColor[3] = "linear-gradient(#63e7ee:#8feff4:#aff4f9)";
	arrFillColor[4] = "linear-gradient(#8176f3:#a39df6:#bbb6f7)";
// 	arrFillColor[1] = "Gradient(#ce69f180:#d888f480:#e1a4f780)";
// 	arrFillColor[2] = "Gradient(#f67fc780:#f79ad380:#f9abda80)";
// 	arrFillColor[3] = "Gradient(#63e7ee80:#8feff480:#aff4f980)";
// 	arrFillColor[4] = "Gradient(#8176f380:#a39df680:#bbb6f780)";

	var canvas = oChart.getCanvas();
	var cvs = canvas.id;		
	DxChart.reset(canvas);
	
	var nMax = 0;
	var cdleng = data.length;
	var tooltips = [];
	for(var i=0,len=cdleng;i<len;i++) {
		if(!data[i]) data[i] = 0;
		if(nMax < data[i]) nMax = data[i];
		//tooltips[i] = '<span style="font-size: 10pt">'+ cddata.name + " " + "(" + i + ":00~" + i + ":59)" + '<p align="center"><b>Count:</b> ' + cddatadata[i] + '</p></span>';
	}
	nMax = nMax * 1.2;
	if(cdleng == 0) {
		data = [0,0];
		nMax = 10;
	}

	var line = new DxChartLine({
			id: cvs,
			elem : canvas,
			data: [	data ],
			options: {
				backgroundColor : (cdleng==0?arrFillColor[ordering]:sDefaultBg), 
				backgroundGrid : false,
				backgroundGridVlines: false,
				backgroundGridBorder: false,
				backgroundGridColor: '#ffffff',
				shadow: false,
				textColor: '#420E59',
				textFontStyle: "16px noto",
				xaxisLabels: [
				],		
				xaxisUse: false,
				yaxisUse: false,
				yaxisScaleMax : nMax,
				xaxisTickmarks : false,
				yaxisTickmarks : false,
				yaxisScaleUnitsPost: '',
				marginBottom: 0,
				marginLeft: 0,
				marginRight: 0,
				marginTop: 0,
				lineWidth: 1,
				lineCurve : true,
				filledUse: true,
				filledAccumulative: true,
				filledColors: [
					arrFillColor[ordering]
				],
				colors: [arrColor[ordering],'transparent'],
				tickmarksStyle: null
			}
		}).draw();	
		
		var nCX = oChart.getOffsetWidth()/2;
		var nCY = oChart.getOffsetHeight()/2;
		var text2 = new DxChartText({
				id: cvs,
				elem : canvas,
				x: nCX,
				y: nCY,
				text: txt,
				options: {
					colors : ['#0B092F'] ,
					textFontStyle: "bold 12px noto",
					halign: 'center',
					valign: 'center'
				}
			}).draw();	
};


/**
 * @class chart color
 * @param 
 * @return {string}
 */   
pForm.gfnChartSeriesColorArray2 = function (idx)
{
	var arrFillColor = [];
// 	arrFillColor[0] = "#df6096";
// 	arrFillColor[1] = "#5e60de";
// 	arrFillColor[2] = "#c260e0";
// 	arrFillColor[3] = "#5bd480";
// 	arrFillColor[4] = "#daa460";
// 	arrFillColor[5] = "#4cabf4";
// 	arrFillColor[6] = "#fbdd15";
// 	arrFillColor[7] = "#96d922";
// 	arrFillColor[8] = "#f44c4c";
	
	arrFillColor[0] = "#ec4c7e";
	arrFillColor[1] = "#b643e0";
	arrFillColor[2] = "#3c4ae0";
	arrFillColor[3] = "#32ec66";
	arrFillColor[4] = "#e69733";
	arrFillColor[5] = "#e76630";
	arrFillColor[6] = "#86BC24";
	arrFillColor[7] = "#E5007D";
	arrFillColor[8] = "#2F8DCD";
	
	return arrFillColor;
};


/**
 * @class chart color
 * @param 
 * @return {string}
 */   
pForm.gfnChartSeriesColorArrayNew = function ()
{
	var colors =  ['linear-gradient(#c34f7b:#dd6995:#f581ad)',
			 'linear-gradient(#a34fc3:#bc67db:#d681f5)',
			 'linear-gradient(#4f51c3:#686bdc:#8184f5)',
			 'linear-gradient(#4fc36d:#6ade88:#81f5a0)',
			 'linear-gradient(#c38b4f:#e2aa6e:#f5bd81)',
			 'linear-gradient(#c34f7b:#dd6995:#f581ad)',
			 'linear-gradient(#a34fc3:#bc67db:#d681f5)',
			 'linear-gradient(#4f51c3:#686bdc:#8184f5)',
			 'linear-gradient(#4fc36d:#6ade88:#81f5a0)',
			 'linear-gradient(#c38b4f:#e2aa6e:#f5bd81)'			 
			];
	return colors;
};


/**
 * @class chart color
 * @param 
 * @return {string}
 */   
pForm.gfnChartSeriesColorArrayHexa = function ()
{
	var colors =  ['#dd6995',
			 '#bc67db',
			 '#686bdc',
			 '#6ade88',
			 '#e2aa6e'
			];
	return colors;
};

/**
 * @class chart color
 * @param 
 * @return {string}
 */   
pForm.gfnChartSeriesColorArray = function (alpha)
{
	var v_alpha = "0.9";
	if(alpha) v_alpha = alpha;
	var arrFillColor = [];
	arrFillColor[0] = "rgba(34,148,177," + v_alpha + ")";
	arrFillColor[1] = "rgba(201,43,95," + v_alpha + ")";
	arrFillColor[2] = "rgba(118,58,136," + v_alpha + ")";
	arrFillColor[3] = "rgba(222,99,99," + v_alpha + ")";
	arrFillColor[4] = "rgba(70,177,191," + v_alpha + ")";
	arrFillColor[5] = "rgba(243,90,67," + v_alpha + ")";
	arrFillColor[6] = "rgba(162,220,95," + v_alpha + ")";
	arrFillColor[7] = "rgba(233,203,160," + v_alpha + ")";
	arrFillColor[8] = "rgba(3,202,172," + v_alpha + ")";
	
	return arrFillColor;
};

pForm.gfnChartSeriesColorHexa = function ()
{
	var arrFillColor = [];
	arrFillColor[0] = "#2294B1";
	arrFillColor[1] = "#C92B5F";
	arrFillColor[2] = "#763A88";
	arrFillColor[3] = "#DE6363";
	arrFillColor[4] = "#46B1BF";
	arrFillColor[5] = "#F35A43";
	arrFillColor[6] = "#A2DC5F";
	arrFillColor[7] = "#E9CBA0";
	arrFillColor[8] = "#03CAAC";
	
	return arrFillColor;
};


/**
 * @class chart color
 * @param 
 * @return {string}
 */   
pForm.gfnChartSeriesGradientColorArray = function ()
{
	var arrFillColor = [];
	var alpha = "0.5";
	arrFillColor[0] = "linear-gradient(rgba(89,173,49,"+alpha+"):rgba(127,198,73,"+alpha+"):rgba(166,222,97,"+alpha+"))";	// green
	arrFillColor[1] = "linear-gradient(rgba(222,98,138,"+alpha+"):rgba(234,143,144,"+alpha+"):rgba(246,184,150,"+alpha+"))";	// pink
	arrFillColor[2] = "linear-gradient(rgba(92,76,137,"+alpha+"):rgba(86,89,144,"+alpha+"):rgba(81,98,149,"+alpha+"))";	// pink
	arrFillColor[3] = "linear-gradient(rgba(4,173,175,"+alpha+"):rgba(3,190,174,"+alpha+"):rgba(3,204,172,"+alpha+"))";	// pink
	arrFillColor[4] = "linear-gradient(rgba(239,160,170,"+alpha+"):rgba(247,192,199,"+alpha+"):rgba(254,217,222,"+alpha+"))";	// pink
	arrFillColor[5] = "linear-gradient(rgba(55,128,216,"+alpha+"):rgba(30,166,234,"+alpha+"):rgba(4,203,252,"+alpha+"))";	// pink
	arrFillColor[6] = "linear-gradient(rgba(203,47,0,"+alpha+"):rgba(227,117,0,"+alpha+"):rgba(253,191,0,"+alpha+"))";	// pink
	arrFillColor[7] = "linear-gradient(rgba(254,88,100,"+alpha+"):rgba(252,88,126,"+alpha+"):rgba(248,87,162,"+alpha+"))";	// pink
	arrFillColor[8] = "linear-gradient(rgba(247,147,24,"+alpha+"):rgba(247,170,18,"+alpha+"):rgba(246,188,14,"+alpha+"))";	// pink
	arrFillColor[9] = "linear-gradient(rgba(255,138,0,"+alpha+"):rgba(255,155,30,"+alpha+"):rgba(253,181,77,"+alpha+"))";	// pink
	
	return arrFillColor;
};

pForm.gfnChartHBarColor = function (idx)
{
	var sColor;
	if(idx == 0) sColor = ["#4cabf4", "#fbdd15"];
	else if(idx == 1) sColor = ["#96d922", "#f44c4c"];
	
	return sColor;
};
/**
 * Top5 Chart
 * 
 * @function fnTop5Chart
 */
pForm.gfnActiveStopChart = function (oChart, datas, labels, tooltips, keys, nKeyMargin,  nMax, corners, nLeft, labelsInbar)
{
	if(!corners) corners = 'round';
	if(!labelsInbar) labelsInbar = false;

	var canvas = oChart.getCanvas();
	var cvs = canvas.id;
	DxChart.reset(canvas);
	
	var nH = oChart.getOffsetHeight() - 60;
	var marginInnerGap = (nH / labels.length) * 0.2;
	
	var colors = this.gfnChartHBarColor(1);
	var param2 = {
					grouping: 'stacked',
					corners : corners,
					marginRight:           35,
					marginTop:             35,
					marginBottom:          35,	
					marginLeft : (nLeft?nLeft:35),
					marginLeftAuto: (nLeft?false:true),
					keyPositionX : oChart.getOffsetWidth() - nKeyMargin,
				    yaxisLabels: labels,
					xaxisScaleMax : nMax,	
					tooltipsData : tooltips,
					marginInner: marginInnerGap,
					keyData: keys,
					labelsInbar : labelsInbar,
					colors: [colors[0], colors[1]],
					keyColors : [colors[0], colors[1]],
					tooltipsFormattedKeyLabels: ['실적 : ', "목표 : "],
					tooltipsFormattedKeyColors: [colors[0], colors[1]]				
				};
	var options2 = this.gfnGetRChartOption("hbar", "dual", param2);
    var hbar = new DxChartHBar({
            id: cvs,
			elem : canvas,
            data: datas,
            options: options2
        });
	hbar.draw();	
};


pForm.gvObjTComp;

		
/**
 * @class Create Object PopupDiv
 * @param {String} 
 * @return {object} 
 */
pForm.gfnCreatePopupDiv = function(objComp, sPath, nCelIndex) 
{
	pForm = this;
	var pdName = objComp.name + "_calTime";
	var pDivComp = this.components[pdName];

	//팝업위치
    //var rect = [];
	var sColumn;
	//sColumn = this._gfnGridGetBindColumnNameByIndex(objGrid, nCelIndex);	//컬럼
	//rect = objGrid.getCellRect(-1, nCelIndex);


	//미존재시 pdiv 생성
	if(!pDivComp) {
		//PopupDiv 생성
		pDivComp = new PopupDiv(pdName);
		pDivComp.form.set_scrollbartype("none");
		pDivComp.form.set_scrolltype("none");
		pDivComp.set_async(false);
		//pDivComp.set_visible(false);
		var nIdx = pForm.addChild(pDivComp.name, pDivComp);
	}
	//pDivComp.set_url("");
	pDivComp.set_url(sPath);
	pDivComp.set_cssclass("pdiv_POP_lev3");
	pDivComp.show();

	return pDivComp;
};
//년월일시달력 팝업을 동적으로 생성
pForm.gfnCompTimeCalendar = function(obj, e)
{
	if(e.fromreferenceobject == "[object ButtonControl]")
	{
		this.gvObjTComp = obj;

		var pDivComp = this.gfnCreatePopupDiv(obj, "common::cmmCalMonthTime.xfdl");
			
		pDivComp.setEventHandler("onpopup", this.gfnCalTime_onpopup, this);
		//pDivComp.addEventHandler("oncloseup", this.pdivComp_oncloseup, this);

		pDivComp.trackPopupByComponent(this.gvObjTComp, 0, this.gvObjTComp.getOffsetHeight(), 238, 310, this.gvObjTComp.uCallback);
	}
};

pForm.gfnCalTime_onpopup = function(oPopupDiv, e)
{
	//선택된 년도로 세팅
	if(!this.gfnIsEmpty(this.gvObjTComp.value))	{
		oPopupDiv.form.fnInitComp(this.gvObjTComp.value, this.gvObjTComp.uFunction);
	}
	//현재년도로 세팅
	else {
		oPopupDiv.form.fnInitComp(this.gfnGetDate("time"), this.gvObjTComp.uFunction);
	}	
};
/**
* @class  map 정보 dataset 정보 추가
* @param  {string} map map 명
* @param  {string} mapid mapid
* @param  {string} outds 서비스에서 받을 dataset name
* @return N/A
* @example this.gfnSetMap();
*/ 
pForm.gfnSetMap = function(map, mapid, outds)
{
	var dsMap = this["dsMap"];
	if(!dsMap) {
		dsMap = new Dataset();
		dsMap.id = "dsMap";
		this.addChild("dsMap", dsMap);
		dsMap.addColumn("map","string",20);
		dsMap.addColumn("mapid","string",20);
		dsMap.addColumn("outds","string",20);
	}
	dsMap.set_enableevent(false);
	dsMap.clearData();
	
	if(nexacro._isArray(mapid)) {
		for(var i=0,len=mapid.length;i<len;i++) {
			var nRow = dsMap.addRow();
			
			dsMap.setColumn(nRow, "map",  nexacro._isArray(map)? map[i] : map);
			dsMap.setColumn(nRow, "mapid", mapid[i]);
			if(!outds || !outds[i] || outds[i] == "") {
				dsMap.setColumn(nRow, "outds", null);
			} else {
				dsMap.setColumn(nRow, "outds", outds[i]);
			}
		}
	} else {
		dsMap.addRow();
		
		dsMap.setColumn(0, "map",   map);
		dsMap.setColumn(0, "mapid", mapid);
		if(!outds || outds == "") {
			dsMap.setColumn(0, "outds", null);
		} else {
			dsMap.setColumn(0, "outds", outds);
		}
	}
	dsMap.set_enableevent(true);
	
};

// 숫자 타입에서 쓸 수 있도록 format() 함수 추가
Number.prototype.format = function(v){
    if(this==0) return 0;
	
	var value = this;
	var postText;
	if(v) {
		if(value > v) {
			value = parseFloat((value/v).toFixed(2));
			if(v == 1000) postText = "K";
			else if(v == 1000000) postText = "M";
		}
	}
 
    var reg = /(^[+-]?\d+)(\d{3})/;
    var n = (value + '');
 
    while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');
 
	if(postText) return n + postText;
    else return n;
};

Number.prototype.formatWon = function(){
    if(this==0) return 0;
	var v = 100000000.0;
	var value = this;
	value = parseFloat((value/v).toFixed(2));

	return value;
};

Number.prototype.format2 = function(v){
    if(this==0) return 0 + "GB";
	
	var value = this;
	var postText = "GB";
	if(v) {
		if(value >= v) {
			value = parseFloat((value/v).toFixed(1));
			if(v == 1024) postText = "GB";
			else if(v == 1024000) postText = "TB";
		} 
	}
 
    var reg = /(^[+-]?\d+)(\d{3})/;
    var n = (value + '');
 
    while (reg.test(n)) n = n.replace(reg, '$1' + ',' + '$2');
 
	if(postText) return n + postText;
    else return n;
};

 
// 문자열 타입에서 쓸 수 있도록 format() 함수 추가
String.prototype.format = function(){
    var num = parseFloat(this);
    if( isNaN(num) ) return "0";
 
    return num.format();
};



pForm = null;