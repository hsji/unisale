//XJS=ext_CommEco.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        var _Form = nexacro.Form.prototype;

        /***********************************************************
        			Util
        ***********************************************************/
        	/**
        		 * value의 string 여부 반환
        		 * @param {*} value 확인할 value.
        		 * @return {boolean} string 여부.
        		 * @example
        		 * trace(this.gfnIsString("test string!!!"));	// output : true
        		 * trace(this.gfnIsString(1234));	// output : false
        		 * @ Eco.isString
        	 */
        	_Form.gfnIsString = function(value)
        	{
        		return typeof value === 'string';
        	}

        	/**
        		 * value의 Date 여부 반환.
        		 * @param {date} value 확인할 value.
        		 * @return {boolean} Date 여부.
        		 * @example
        		 * var a = new Date();
        		 * trace(this.gfnIsDate(a));	// output : true
        		 *
        		 * var a = "20130501";
        		 * trace(this.gfnIsDate(a));	// output : false
        		 * @ Eco.isDate
        	 */
        	_Form.gfnIsDate = function(value)
        	{
        		//*ingyu 20181114 동작안함, Date 관련함수 사용 위해 우회처리*
        		//return value.toString() === '[object Date]';
        		return value instanceof Date;
        	}

        	/**
        		 * value의 number 여부 반환.
        		 * @param {*} value 확인할 value.
        		 * @return {boolean} number 여부.
        		 * @example
        		 * trace(this.gfnIsNumber(1234));	// output : true
        		 * trace(this.gfnIsNumber("1234"));	// output : false
        		 * @ Eco.isNumber
        	 */
        	_Form.gfnIsNumber = function(value)
        	{
        		return typeof value === 'number' && isFinite(value);
        	}

        	/**
        		 * value의 boolean 여부 반환.
        		 * @param {*} value 확인할 value.
        		 * @return {boolean} boolean 여부.
        		 * @example
        		 * trace(this.gfnIsBoolean(true));	// output : true
        		 * trace(this.gfnIsBoolean("true"));	// output : false
        		 * @ Eco.isBoolean
        	 */
        	_Form.gfnIsBoolean =  function(value)
        	{
        		return typeof value == 'boolean';
        	}

        	/**
        		 * value의 Array 여부 반환.
        		 * @function isArray
        		 * @param {*} value 확인할 value.
        		 * @return {boolean} Array 여부.
        		 * @example
        		 * var a = new Array();
        		 * trace(this.gfnIsArray(a));	// output : true
        		 *
        		 * var a = [1,2,3];
        		 * trace(this.gfnIsArray(a));	// output : true
        		 * @ Eco.isArray
        	 */
        	_Form.gfnIsArray = function (value)
        	{
        		if(Array.isArray)
        		{
        			return Array.isArray(value);
        		}else{
        			return value.toString() === '[object Array]';
        		}
        	}

        	/**
        		 * value의 Object 여부 반환.
        		 * @param {*} value 확인할 value.
        		 * @return {boolean} Object 여부.
        		 * @example
        		 * var o = new Object();
        		 * trace(this.gfnIsObject(o));	// output : true
        		 *
        		 * var o = {};
        		 * trace(this.gfnIsObject(o));	// output : true
        		 *
        		 * var o = [1,2,3];
        		 * trace(gfnIsObject(o));	// output : false
        		 *
        		 * var o = new Button();
        		 * trace(this.gfnIsObject(o));	// output : false
        		 *
        		 * var o = new Rect();
        		 * trace(this.gfnIsObject(o));	// output : false
        		 * @ Eco.isObject
        	 */
        	_Form.gfnIsObject = function(value)
        	{
        		if ( value === null || value === undefined ) return false;

        		// nexacro Component
        		if ( this.gfnIsXComponent(value) ) return false;

        		// nexacro Object (e.g. Dataset)
        		if( value instanceof nexacro.Object ) return false;

        		return typeof value == "object" &&
        			   'constructor' in value &&
        			   value.constructor === Object;
        	}

        	/**
        		 * value의 nexacro component 여부 반환.
        		 * @param {*} value 확인할 value.
        		 * @return {boolean} nexacro component 여부.
        		 * @example
        		 * var a = new Button();
        		 * trace(this.gfnIsXComponent(a));	// output : true
        		 *
        		 * var a = new Dataset();
        		 * trace(this.gfnIsXComponent(a));	// output : false
        		 *
        		 * var a = new String();
        		 * trace(this.gfnIsXComponent(a));	// output : false
        		 * Eco.isXComponent
        	 */
        	_Form.gfnIsXComponent = function(value)
        	{
        		if ( value === null || value === undefined  ) return false;

        		return value instanceof nexacro.Component;
        	}

        	/**
        		 * value의 null 여부 반환.
        		 * @param {*} value 확인할 value.
        		 * @return {boolean} null 여부.
        		 * @example
        		 * trace(this.gfnIsNull(null));	// output : true
        		 * var a; // undefined
        		 * trace(this.gfnIsNull(a));	// output : false
        		 * trace(this.gfnIsNull(""));	// output : false
        		 * @ Eco.isNull
        	 */
        	_Form.gfnIsNull = function(sValue)
        	{
        		//return value === null;
        		if (new String(sValue).valueOf() == "undefined") return true;
        		if (sValue == null) return true;

        		var ChkStr = new String(sValue);

        		if (ChkStr == null) return true;
        		if (ChkStr.toString().length == 0 ) return true;
        		return false;
        	}

        	/**
        		 * value의 undefined 여부 반환.
        		 * @param {*} value 확인할 value.
        		 * @return {boolean} undefined 여부.
        		 * @example
        		 * var a;
        		 * trace(this.gfnIsUndefined(a));	// output : true
        		 *
        		 * var a = "";
        		 * trace(this.gfnIsUndefined(a));	// output : false
        		 * @ Eco.isUndefined
        	 */
        	_Form.gfnIsUndefined = function(value)
        	{
        		return value === undefined;
        	}


        	/**
        		 * 첫 값의 True/False를 검사해 그 결과에 따라 두번째 또는 세번째 값을 반환.
        		 * @param {*} expr 비교할 값. expr의 값으로 True/False 여부를 확인합니다.
        		 *                 expr이 Integer인경우 0이면 False아니면 True인식합니다.
        		 * @param {*} trueValue expr이 True에 해당하는 값일 경우 Return 되는 값.
        		 * @param {*} falseValue expr이 False에 해당하는 값일 경우 Return 되는 값.
        		 * @return {*} expr에 따라 Return 된 값.
        		 * @example
        		 *
        		 * trace(gfnIif(2-1=1, "True", "False")); // output : True
        		 *
        		 * var a = 98;
        		 * var b = this.gfnIif(a > 100, 100, a);
        		 * trace(b);	// output : 98
        		 *@ Eco.iif
        	 */
        	_Form.gfnIif = function(expr, trueValue, falseValue)
        	{
        		return expr ? trueValue : falseValue;
        	}

        	/**
        		* value의 Function 여부 반환.
        		* @param {*} value 확인할 value.
        		* @return {boolean} Function 여부.
        		* @example
        		* trace(this.gfnIsFunction(this.gfnIsFunction));	// output : true
        		*
        		* this.testFunction = function()
        		* {
        		* }
        		* trace(this.gfnIsFunction(this.testFunction));	// output : true
        		* @Eco.isFunction
        	*/
        	_Form.gfnIsFunction = function(value)
        	{
        		return value.toString() === '[object Function]';
        	}

        	/**
        		 * Form 내에서 지정된 접두문자열에 순번이 붙여진 ID 를 반환
        		 * @public
        		 * @param {form} prefix 순번 앞에 붙일 문자열
        		 * @param {string} prefix 순번 앞에 붙일 문자열
        		 * @return {string} id
        		 * @example
        		 *
        		 * // this = Form
        		 * trace(Eco.getSequenceId(this, "Button")); // output : Button0
        		 * trace(Eco.getSequenceId(this, "Button")); // output : Button1
        		 *
        		 * // this = Form
        		 * trace(Eco.getSequenceId(this, "chk_")); // output : chk_0
        		 * trace(Eco.getSequenceId(this, "chk_")); // output : chk_1
        		 *
        		 * @ Eco.getSequenceId
        	 */
        	_Form.gfnGetSequenceId = function(form, prefix)
        	{
        		if ( this.gfnIsEmpty(form) )
        		{
        			// Eco.Logger.error({message:"1st argument doesn't exist !!", stack:true});
        			this.trace("1st argument doesn't exist !!");
        			return null;
        		}

        		if ( this.gfnIsEmpty(prefix) )
        		{
        			//Eco.Logger.error({message:"2nd argument doesn't exist !!", stack:true});
        			this.trace("2nd argument doesn't exist !!");
        			return null;
        		}

        		if ( !(form instanceof Form) )
        		{
        			//Eco.Logger.error({message:"1st argument must be a Form !!", stack:true});
        			this.trace("1st argument must be a Form !!");
        			return null;
        		}

        		var cache = form._sequenceIdCache;
        		if ( this.gfnIsEmpty(cache) )
        		{
        			cache = form._sequenceIdCache = {};
        		}

        		var sequence = cache[prefix];
        		if ( this.gfnIsEmpty(sequence) )
        		{
        			sequence = -1;
        		}
        		sequence++;

        		cache[prefix] = sequence;

        		return prefix + sequence;
        	}




        /***********************************************************
        			문자열
        ***********************************************************/
        	/**
        		* 문자열 길이계산.
        		* @param {string} str 대상 문자열.
        		* @param {string=} unit 문자열의 길이를 검사하는 단위 .
        					   "utf16" - 한문자당 1의 값으로 합산함(default).
        					   "utf8"  - 한 문자당 영문1, 다국어 2~5의 값으로 합산함.
        					   "ascii" - 한문자당 영문 1, 한글 2의 값으로 합산함.
        		* @return {number} 문자열 길이.
        		* @example
        		* var str = "unit 문자열";
        		* var len = this.gfnGetLength(str);
        		* trace(len); // output : 8
        		* len = this.gfnGetLength(str, "ascii");
        		* trace(len); // output : 11
        		* len = this.gfnGetLength(str, "utf8");
        		* trace(len); // output : 14
        		*@ Eco.string.getLength
        	 */
        	_Form.gfnGetLength = function (str, unit)
        	{
        		if ( !str ) return 0;


        		if ( unit == "utf8" )
        		{
        			return this._utf8ByteCount(str);
        		}
        		else if ( unit == "ascii" )
        		{
        			return this._asciiByteCount(str);
        		}
        		else
        		{
        			return str.length;
        		}
        	}


        	/**
        		 * utf8을 기준으로 문자열 길이계산.
        		 * @private
        		 * @param {string} str 대상 문자열.
        		 * @return {number} 문자열 길이.
        		 * @ Eco.string._utf8ByteCount
        	 */
        	_Form._utf8ByteCount = function(str)
        	{
        		if (str === undefined) return 0;

        		var count = 0,
        			ch,
        			high,
        			low,
        			isHighSurrogate = this._isHighSurrogate,
        			utf8Len = this._utf8Len,
        			toCodepoint = this._toCodepoint;

        		for(var i=0, n = str.length; i< n; i++)
        		{
        			ch = str.charCodeAt(i);

        			if(isHighSurrogate(ch))
        			{
        				high = ch;
        				low = str.charCodeAt(++i);
        				count += utf8Len(toCodepoint(high, low));
        			}
        			else
        			{
        				count += utf8Len(ch);
        			}
        		}
        		return count;
        	}


        	/**
        		 * ascii를 기준으로 문자열 길이계산.
        		 * @private
        		 * @param {string} str 대상 문자열.
        		 * @return {number} 문자열 길이.
        		 * @ Eco.string._asciiByteCount
        	 */
        	_Form._asciiByteCount = function(str)
        	{
        		if (str === undefined) return 0;

        		var i, j=0, val;
        		for(i=0, n = str.length; i< n; i++)
        		{
        			val = str.charCodeAt(i);
        			if ( val > 255 ) j++;
        			j++;
        		}
        		return j;
        	}


        	/**
        		 * 유니코드 보충언어판(Supplementary Plane)의 상위 대행코드(High Surrogate) 여부.
        		 * @private
        		 * @param {string} codeUnit 대상 문자열.
        		 * @return {number} 문자열 길이.
        		 * @ Eco.string._isHighSurrogate
        	 */
        	_Form._isHighSurrogate = function(codeUnit)
        	{
        		return codeUnit >= 0xD800 && codeUnit <= 0xDBFF;
        	}

        	/**
        		 * [내부함수]uft8 문자열 길이계산.
        		 * @private
        		 * @param {string} codePoint 문자셋 수치보정값.
        		 * @return {number} 문자열 길이.
        		 * @ Eco.string._utf8Len
        	 */
        	_Form._utf8Len = function(codePoint)
        	{
        		/*
        		if(codePoint >= 0xD800 && codePoint <= 0xDFFF)
        		{
        			Eco.Logger.error({"message":"Illegal argument: "+codePoint, "stack":true});
        		}
        		if(codePoint < 0)
        		{
        			Eco.Logger.error({"message":"Illegal argument: "+codePoint, "stack":true});
        		}
        		*/
        		if(codePoint <= 0x7F) return 1;
        		if(codePoint <= 0x7FF) return 2;
        		if(codePoint <= 0xFFFF) return 3;
        		if(codePoint <= 0x1FFFFF) return 4;
        		if(codePoint <= 0x3FFFFFF) return 5;
        		if(codePoint <= 0x7FFFFFFF) return 6;

        		// Eco.Logger.error({"message":"Illegal argument: "+codePoint, "stack":true});
        		}

        		/**
        			 * 문자셋의 수치보정값 처리
        			 * @private
        			 * @param {number} highCodeUnit 상위 대행코드.
        			 * @param {number} lowCodeUnit 하위 대행코드.
        			 * @return {number} 문자열 길이.
        			 * @ Eco.string._toCodepoint
        		 */
        		_Form._toCodepoint = function(highCodeUnit, lowCodeUnit)
        		{
        			/*
        				var pThis = Eco.string;
        				if(!pThis._isHighSurrogate(highCodeUnit)) {
        					Eco.Logger.error({"message":"Illegal argument: "+highCodeUnit, "stack":true});
        				}
        				if(!pThis._isLowSurrogate(lowCodeUnit)) {
        					Eco.Logger.error({"message":"Illegal argument: "+lowCodeUnit, "stack":true});
        				}
        			*/
        			highCodeUnit = (0x3FF & highCodeUnit) << 10;
        			var u = highCodeUnit | (0x3FF & lowCodeUnit);
        			return u + 0x10000;
        		}


        /**
        	 * 문자열의 오른쪽에서 length만큼의 문자열을 가져온다.
        	 * @param {string} source 원래 문자열( 예 : "aaBBbbcc" )
        	 * @param {number} length 가져올문자열 길이 ( 예 : 2 )
        	 * @return {boolean} 오른쪽에서 length만큼의 문자열 ( 예 : "cc" )]
        	 * @example
        	 * var str = "myT1 and myT2 are the strings used for padding";
        	 * var res = this.gfnGetRightStr(str, 7);
        	 * trace(res); // output : padding
        	 * @ Eco.string.getRightStr
        */
        	_Form.gfnGetRightStr = function(source, length)
        	{
        		if( source.length < length )
        		{
        			return source;
        		}
        		else
        		{
        			return source.substr(source.length-length, length);
        		}
        	}

        /***********************************************************
        			숫자
        ***********************************************************/

        	/**
        		 * 숫자 단위 구분 표시자 (locale에 따라 정의)
        		 * @public
        		 * @type string
        		 * @example "," ==> "1,234"
        		 * @  Eco.number.separator
        	 */
        	var gvSeparator = ",";

        	/**
        		* 소수점 표시자 (locale에 따라 정의)
        		* @public
        		* @type string
        		* @example "." ==> "0.01"
        		* @memberOf Eco.number.point
        	*/
        	var gvPoint = ".";

        	/**
        		 * 통화 표시에서 separator 규칙 정의 (locale에 따라 정의)
        		 * @public
        		 * @type string
        		 * @example
        		 *  "\\3" ==> 10,000,000
        		 *  "\\1\\2\\3" ==> 1,000,00,0
        		 *  "\\3\\1" ==> 1,0,0,0,000
        		 * @memberOf Eco.number.separatorGrouping
        	 */
        	var gvSeparatorGrouping = "\\3";

        	/**
        		* mask format cache.
        		* @private
        		* @memberOf Eco.date._numberMaskCache
        	*/
        	var _gvNumberMaskCache = {};



        	/**
        		 * 주어진 숫자 형식값에 Mask Format 처리된 문자열을 반환합니다.
        		 * @param {string|number} value 숫자형식 값
        		 * @param {string} strMask mask할 format 문자열.
        		 * @return {string} 변환된 문자열.
        		 * @example
        		 * var val = 1234.567;
        		 * var result = this.gfnGetNumMaskFormatString(val, "99.99");
        		 * trace(result); // output : 1234.56
        		 * result = this.gfnGetNumMaskFormatString(val, "9900.0099");
        		 * trace(result); // output : 1234.567
        		 * result = this.gfnGetNumMaskFormatString(val, "9,999.9");
        		 * trace(result); // output : 1,234.5
        		 *
        		 * val = 1.2;
        		 * result = this.gfnGetNumMaskFormatString(val, "99.99");
        		 * trace(result); // output : 1.2
        		 * result = this.gfnGetNumMaskFormatString(val, "9900.0099");
        		 * trace(result); // output : 01.20
        		 * result = this.gfnGetNumMaskFormatString(val, "9,999.9");
        		 * trace(result); // output : 1.2
        		 * @  Eco.number.getMaskFormatString
        	 */
        	_Form.gfnGetNumMaskFormatString = function(value, strMask)
        	{
        		var strText = value + "";
        		strText = this._normalizeValue(strText, true);

        		var nDecimalLen = 0;		// 소수부 길이.
        		var nIntegerLen = 0;		// 정수부 길이.

        		// Split : value를 정수부, 소수부로 나누고 소수점 유무, 양음부호부 까지 판별한다.
        		var ret = this._numberSplit(strText),
        			nSign = ret[0],
        			bPoint = ret[1],
        			strNumber = ret[2],
        			strDecimal = ret[3];

        		// 각 부분의 길이구함.
        		nIntegerLen = strNumber.length;
        		nDecimalLen = strDecimal ? strDecimal.length : 0;

        		var maskInfo = this._parseNumberMask(strMask),
        			dispComma = maskInfo[0],
        			nMin = maskInfo[1],
        			nMax = maskInfo[2],
        			nDecimalMin = maskInfo[3],
        			nDecimalMax = maskInfo[4];

        		if (nMin > nIntegerLen)
        		{
        			var tmpStr = "";
        			for(var i=0, n =  nMin - nIntegerLen; i < n ; i++)
        			{
        				tmpStr += "0";
        			}
        			strNumber = tmpStr + strNumber;
        		}

        		if (nDecimalMin > nDecimalLen)
        		{
        			var tmpStr = "";
        			for(var i=0, n = nDecimalMin - nDecimalLen; i < n ; i++)
        			{
        				tmpStr += "0";
        			}
        			strDecimal = strDecimal + tmpStr;
        		}
        		else if ( nDecimalMax != -1 && nDecimalMax < nDecimalLen)
        		{
        			strDecimal = strDecimal.substring(0, nDecimalMax) + strDecimal.substr(nDecimalLen, strDecimal.length);
        		}
        		// 정수부분에 Comma적용.
        		if(  dispComma )
        			strNumber = this._applyComma(strNumber);

        		if( nSign < 0 ) strText = "-";
        		else if( nSign > 0) strText = "+";
        		else	strText = "";

        		// 정수부.
        		strText += strNumber;

        		// 소수부.
        		if( strDecimal.length > 0 )
        		{
        			strText += gvPoint;
        			strText += strDecimal;
        		}
        		return strText;
        	}

        	 /**
        		 * 숫자를 한글로 표기.
        		 * @param {number} val 숫자
        		 * @return {string} 문자열
        		 * @example
        		 * var val = 1200340500.01;
        		 * var str = this.gfnIntToHanGul(val);
        		 * trace(str); // output : 일십이억 삼십사만 오백  소수점 영일
        		 * var val = 1200340500;
        		 * var str = this.gfnIntToHanGul(val);
        		 * trace(str); // output : 일십이억 삼십사만 오백
        		 * @  Eco.number.intToHanGul
        	 */
        	_Form.gfnIntToHanGul = function(val)
        	{
        		var sLangCd = nexacro.getApplication().gdsGlobal.getColumn(0, "LANGUAGE");

        		if ( !this.gfnIsString(val) )
        		{
        			val = String(val);
        		}

        		var arrhn = sLangCd!="JAP"?["영","일","이","삼","사","오","육","칠","팔","구"]:["零","一","二","三","四","五","六","七","九"];
        		var arrhj = sLangCd!="JAP"?["","만","억","조","경","해"]:["","万","億","兆","景","海"];
        		var arrul = sLangCd!="JAP"?["영천","영백","영십","영"]:["零千","零百","零十","零"];
        		var arrtm = [];
        		var sRtn  = "";
        		var sTm2  = "";
        		if (val.charAt(0) == "-")
        		{
        			sRtn   = sLangCd!="JAP"?"마이너스 ":"マイナス ";
        			val = val.substr(1, val.length-1);
        		}
        		else if (val.charAt(0) == "+")
        		{
        			val = val.substr(1, val.length-1);
        		}

        		var nPoint = val.indexOf( '.' ),
        			strNumber = "", bPoint, strDecimal = "";

        		if( nPoint < 0 )
        		{
        			strNumber = val;
        			bPoint = false;
        		}
        		else
        		{
        			strNumber = val.substr( 0, nPoint);
        			strDecimal = val.substr( nPoint + 1);
        			bPoint = true;
        		}

        		var nSize = Math.ceil(strNumber.length/4);
        		sTmpPrice = "";

        		for (var i = strNumber.length; i >= 0; i--)
        		{
        			sTmpPrice += strNumber.substring(i, i-1);
        		}

        		strNumber = sTmpPrice;

        		for (var i = 0; i < nSize; i++)
        		{
        			sSum     = arrhj[i] + "";
        			arrtm[i] = strNumber.substr(i*4, 4);
        			sTm2     = "";

        			for (var j = arrtm[i].length; j >= 0; j--)
        			{
        				sTm2 += arrtm[i].substring(j, j-1);
        			}

        			arrtm[i] = sTm2;
        			sPart 	 = arrtm[i].length;

        			for (var j = 0; j < 10; j++)
        			{
        				for (var k = 0; k < 10; k++)
        				{
        					arrtm[i] = arrtm[i].replace(k, arrhn[k]);
        				}
        			}

        			if (sPart == 4)
        			{
        				arrtm[i] = arrtm[i].charAt(0) + (sLangCd!="JAP"?"천":"千") + arrtm[i].charAt(1) + (sLangCd!="JAP"?"백":"百") + arrtm[i].charAt(2) + (sLangCd!="JAP"?"십":"十") + arrtm[i].charAt(3);
        			}
        			else if (sPart == 3)
        			{
        				arrtm[i] = arrtm[i].charAt(0) + (sLangCd!="JAP"?"백":"百") + arrtm[i].charAt(1) + (sLangCd!="JAP"?"십":"十") + arrtm[i].charAt(2);
        			}
        			else if (sPart == 2)
        			{
        				arrtm[i] = arrtm[i].charAt(0) + (sLangCd!="JAP"?"십":"十") + arrtm[i].charAt(1);
        			}
        			else
        			{
        				arrtm[i] = arrtm[i].charAt(0);
        			}

        			for (var j = 0; j < 4; j++)
        			{
        				if (arrtm[i].match(arrul[j]))
        				{
        					sPart--;
        					arrtm[i] = arrtm[i].replace(arrul[j], "");
        				}
        			}

        			if (sPart != 0)
        			{
        				arrtm[i] += sSum;
        			}
        		}

        		for (nSize; nSize > -1; nSize--)
        		{
        			sRtn += arrtm[nSize];
        		}

        		sRtn = sRtn.replace("undefined","");
        		if ( bPoint )
        		{
        			sRtn += sLangCd!="JAP"?" 소수점 ":" 小数点 ";
        			for ( var i = 0, n = strDecimal.length ; i < n ; i++ )
        			{
        				sRtn += arrhn[parseInt(strDecimal.charAt(i))];
        			}
        		}
        		return sRtn;
        	}

        	/**
        		 * 숫자형 변환
        		 * @private
        		 * @param {string} strValue 숫자형 문자.
        		 * @param {boolean} bTrim 공백제거 여부.
        		 * @return {string} 변환된 문자열.
        		 * @  Eco.number._normalizeValue
        	 */
        	_Form._normalizeValue = function(strValue, bTrim)
        	{
        		// var pThis = Eco.number;

        		if (strValue.length<=0) return strValue;
        		if ( bTrim === undefined ) bTrim = true;

        		// 좌우 공백 제거, 마스크 제거.
        		strValue = this._removeMask(strValue);
        		// 정규형식으로 만듬.
        		if( strValue.charAt( strValue.length -1 ) == gvPoint )
        			strValue = strValue + "0";

        		if(bTrim)
        		{
        			// 0 Trim 하기 전에 부호 있는 경우 주의.
        			var bSign = ( strValue.charAt(0) == '-' ) ? 1 : 0;
        			var pointVal = gvPoint;

        			// 0000~~ 에 대해서 첫 자리 0을 삭제
        			// -0000~~ 에 대해서 부호 뒷 자리 0을 삭제.
        			while( strValue.charAt( 0+bSign ) == '0'
        					&& strValue.charAt( 1+bSign ) != pointVal
        					&& strValue.length != (1+bSign) )
        			{
        					strValue = strValue.substring(0, 0+bSign) + strValue.substr(0+bSign+1, strValue.length);
        			}
        			// .~~0000에 대해서 0을 Trim
        			var nPoint = strValue.indexOf(pointVal);
        			if( nPoint >= 0 )
        			{
        				var i;
        				for( i = strValue.length - 1 ; i > nPoint+1 ; i -- )
        				{
        					if( strValue.charAt( i ) != '0' )
        							break;
        				}
        				strValue = strValue.substring(0, i + 1 );
        			}
        		}

        		// 부호에 대해 정규형으로.
        		if( strValue.charAt(0) == '+' )
        		{
        			strValue = strValue.substr(1);
        		}
        		else if( strValue.length <= 0 || parseFloat(strValue) == 0.0 )
        		{
        			// 값이 0.0인경우 부호 제거.
        			if( strValue.charAt(0) == '-' )
        				strValue = strValue.substr(1);
        		}
        		return strValue;
        	}

        	/**
        		 * mask format 변환 정보 반환.
        		 * @private
        		 * @param {string} strMask mask할 format 문자열.
        		 * @return {array} mask format 변환 정보
        		 * @  Eco.number._parseNumberMask
        	 */
        	_Form._parseNumberMask = function(strMask)
        	{
        		var res =_gvNumberMaskCache[strMask];
        		if ( res ) return res;

        		var dispComma = false,
        			nMin = 0,
        			nMax = 0,
        			nDecimalMin = -1,
        			nDecimalMax = 0;

        		strMask = nexacro.trimLeft(strMask);

        		if (strMask.length <= 0 )
        		{
        			return [dispComma, nMin, nMax, nDecimalMin, nDecimalMax];
        		}

        		nDecimalMax = 0;
        		nDecimalMin = 0;
        		dispComma = (strMask.indexOf(",") >= 0);

        		var c,
        			bFindPoint = false;

        		for( var i = 0, n = strMask.length; i < n; i++ )
        		{
        			c = strMask.charAt(i);
        			if ( c == '.' )
        			{
        				bFindPoint = true;
        			}
        			else if ( c == '#' || c == '0' || c == '9' || c == ',' )
        			{
        				if ( bFindPoint )
        				{
        					if ( c == '0' )
        					{
        						nDecimalMax++;
        						nDecimalMin = nDecimalMax;
        					}
        					else
        					{
        						nDecimalMax++;
        					}
        				}
        				else
        				{
        					if ( c == '0' )
        					{
        						nMin++;
        					}
        					else if ( nMin > 0)
        					{
        						nMin++;
        					}
        					nMax++;
        				}
        			}
        		}// end of for.

        		res = [dispComma, nMin, nMax, nDecimalMin, nDecimalMax];
        		_gvNumberMaskCache[strMask] = res;
        		return res;
        	}

        	/**
        		 * 숫자 단위 적용.
        		 * @private
        		 * @param {string} strNumber 숫자형 문자.
        		 * @return {string} 변환된 문자열
        		 * @ Eco.number._applyComma
        	 */
        	_Form._applyComma = function(strNumber)
        	{
        		// 차후에 locale 처리 필요.
        		var grouping = gvSeparatorGrouping;
        		var thousands_sep = gvSeparator;
        		if( thousands_sep.length > 0 )
        		{
        			var	dec_buf = strNumber.split(""),
        				dec_size = strNumber.length,
        				out_size = (thousands_sep.length + 1) * strNumber.length,
        				out_buf = [],
        				cur_group = 0, d_size = dec_size,
        				endpos = out_size,
        				groupingIdx = 0,
        				g;

        			grouping = grouping.split("");

        			while (grouping[groupingIdx] && d_size > 0 )
        			{
        				g = grouping[groupingIdx];
        				if ( g == "\\" )
        				{
        					groupingIdx++;
        					g = parseInt(grouping[groupingIdx]);
        				}
        				if (g > 0 )
        				{
        					cur_group = g;
        					while (g-- > 0 && d_size > 0)
        						out_buf[--endpos] = dec_buf[--d_size];
        					if (d_size > 0)
        						out_buf[--endpos] = thousands_sep;
        				}
        				else if (g == 0 && d_size > cur_group)
        				{
        					g = cur_group;
        					while (g-- > 0)
        						out_buf[--endpos] = dec_buf[--d_size];
        					if (d_size > 0)
        						out_buf[--endpos] = thousands_sep;
        				}
        				else if (g == 0 && d_size <= cur_group && d_size > 0 )
        				{
        					g = d_size;
        					while (g-- > 0)
        						out_buf[--endpos] = dec_buf[--d_size];
        				}
        				else
        				{
        					break;
        				}
        			}
        			return out_buf.slice(endpos,out_size + endpos).join("");
        		}
        		return strNumber;
        	}

        	/**
        		 * 숫자형 문자에서 부호, 소수점, 정수부, 소수부 분리.
        		 * @private
        		 * @param {string} strText 숫자형 문자.
        		 * @return {array} 분리 정보
        		 * @  Eco.number._numberSplit
        	 */
        	_Form._numberSplit = function(strText)
        	{
        		// 부호 분리.
        		var nBegin = 0, nSign;
        		if( (nBegin = strText.indexOf('+')) >= 0 )
        		{
        			nSign = +1;
        			nBegin = 1;
        		}
        		else if( (nBegin = strText.indexOf('-')) >= 0 )
        		{
        			nSign = -1;
        			nBegin = 1;
        		}
        		else
        		{
        			nSign = 0;
        			nBegin = 0;
        		}

        		var nPoint = strText.indexOf( gvPoint ,nBegin ),
        			strNumber = "", bPoint, strDecimal = "";
        		if( nPoint < 0 )
        		{
        			strNumber = strText.substr( nBegin );
        			bPoint = false;
        		}
        		else
        		{
        			strNumber = strText.substr( nBegin, nPoint - nBegin);
        			strDecimal = strText.substr( nPoint + 1);
        			bPoint = true;
        		}
        		return [nSign, bPoint, strNumber, strDecimal];
        	}


        	/**
        		 * mask 제거.
        		 * @private
        		 * @param {string} strText 숫자형 문자.
        		 * @return {string} 변환된 문자열
        		 * @  Eco.number._removeMask
        	 */
        	_Form._removeMask = function(str)
        	{
        		str = str.trim();
        		var ntxtLen = str.length,
        			i,
        			pointVal = gvPoint,
        			separatorVal = gvSeparator;
        			bPoint = false, // 소숫점은 1개만 인정.
        			bInside = false, // 부호는 숫자가 나오기 전에만 인정.
        			buf = [];
        		for(i = 0 ; i < ntxtLen ; i++ )
        		{
        			var c = str.charAt(i);
        			if( ( c == '+' || c == '-') && ( bInside === false) )
        			{
        				// 부호는 숫자가 나오기 전에만 인정.
        				buf.push(c);
        				bInside = true;
        			}
        			else if( nexacro.isNumeric(c) )
        			{
        				// 숫자인경우 인정.
        				buf.push(c);
        				bInside = true;
        			}
        			else if( c == pointVal && bPoint === false )
        			{
        				// 소숫점은 1회만 인정.
        				buf.push(c);
        				bPoint = true;
        				bInside = true;
        			}
        			else if( c != separatorVal )
        			{
        				return "";
        			}
        		}
        		return buf.join("");
        	}


        /***********************************************************
        			날짜
        ***********************************************************/
        	/**
        		 * 요일명칭 정의<br>
        		 * gfnGetDateMaskFormatString 함수에서 masking 할때 사용하는 명칭이다.<br>
        		 * 필요에 따라 수정 하여 사용한다.(보통 locale에 따라 정의 될 것으로 예상됨.)
        		 * @example : ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
        		 * @public
        		 * @type array
        		 * @ Eco.date.weekName
        	 */
        	var gvWeekName =  ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];

        	/**
        		 * 축약 요일명칭 정의<br>
        		 * gfnGetDateMaskFormatString 함수에서 masking 할때 사용하는 명칭이다.<br>
        		 * 필요에 따라 수정 하여 사용한다.(보통 locale에 따라 정의 될 것으로 예상됨.)
        		 * @example
        		 * ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
        		 * @public
        		 * @type array
        		 * @ Eco.date.weekShortName
        	*/
        	var gvWeekShortName =  ["일", "월", "화", "수", "목", "금", "토"];
        		//weekShortName: ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],

        	/**
        		* 월명칭 정의<br>
        		* gfnGetDateMaskFormatString 함수에서 masking 할때 사용하는 명칭이다.<br>
        		* 필요에 따라 수정 하여 사용한다.(보통 locale에 따라 정의 될 것으로 예상됨.)
        		* @example
        		* ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        		* @public
        		* @type array
        		* @ Eco.date.monthName
        	 */
        	var gvMonthName = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
        		//monthName: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],

        	/**
        		 * 축약 월명칭 정의<br>
        		 * gfnGetDateMaskFormatString 함수에서 masking 할때 사용하는 명칭이다.<br>
        		 * 필요에 따라 수정 하여 사용한다.(보통 locale에 따라 정의 될 것으로 예상됨.)
        		 * @example
        		 * ["Jan ", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        		 * @public
        		 * @type array
        		 * @ Eco.date.monthShortName
        	 */
        	var gvMonthShortName = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
        	//monthShortName: ["Jan ", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],

        	/**
        		 * 오전/오후<br>
        		 * gfnGetDateMaskFormatString 함수에서 masking 할때 사용하는 명칭이다.<br>
        		 * 필요에 따라 수정 하여 사용한다.(보통 locale에 따라 정의 될 것으로 예상됨.)
        		 * @example
        		 * ["AM", "PM"]
        		 * @public
        		 * @type array
        		 * @ Eco.date.ttName
        	 */
        	var gvTtName = ["오전", "오후"];

        	/**
        		 * 달별 일자 Offset
        		 * @private
        		 * @ Eco.date._dayOfYearOffset
        	 */
        	var _dayOfYearOffset =	[0,
        										31,
        										31 + 28,
        										31 + 28 + 31,
        										31 + 28 + 31 + 30,
        										31 + 28 + 31 + 30 + 31,
        										31 + 28 + 31 + 30 + 31 + 30,
        										31 + 28 + 31 + 30 + 31 + 30 + 31,
        										31 + 28 + 31 + 30 + 31 + 30 + 31 + 31,
        										31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30,
        										31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31,
        										31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30];

        	/**
        		 * 입력된 날짜에 OffSet 으로 지정된 만큼의 날짜를 증감한다.
        		 * @param {string|date} value 'yyyyMMdd' 형태로 표현된 String 또는 Date.
        		 * @param {number} offset 날짜로부터 증가 감소값.
        		 * @return {string|date} 'yyyyMMdd' 형태로 표현된 String 또는 Date Value.
        		 * @example
        		 * // 2013/04/29 16:39:04 test함.
        		 * trace(this.gfnAddDate(new Date(), 3)); // output : Thu May 02 2013 16:39:04 GMT+0900
        		 * var val = this.gfnGetDateMaskFormatString(new Date(), "yyyyMMdd");
        		 * trace(this.gfnAddDate(val, 3)); // output : 20130502
        		 * @ Eco.date.addDate
        	 */
        	_Form.gfnAddDate = function(value, offset)
        	{
        		var dt;
        		if ( this.gfnIsDate(value) )
        		{
        			//var nTmpHour = value.getHours();
        			dt = new Date();
        			dt.setFullYear(value.getFullYear(), value.getMonth(), value.getDate() + offset);
        			dt.setHours(value.getHours(), value.getMinutes(), value.getSeconds());
        			dt.setMilliseconds(value.getMilliseconds());
        			//if ( dt.getHours() != nTmpHour )
        			//{
        			//	dt.setHours(dt.getHours() + 2);
        			//}
        			return dt;
        		}
        		else
        		{
        			dt = new Date();
        			dt.setFullYear(parseInt(value.substr(0, 4)), parseInt(value.substr(4, 2)-1), parseInt(value.substr(6, 2)) + offset);
        			dt.setHours(0, 0, 0);
        			dt.setMilliseconds(0);
        			return this.gfnGetDateMaskFormatString(dt, "yyyyMMdd");
        		}
        	}

        	/**
        		 * 입력된 날짜에 OffSet 으로 지정된만큼의 월을 증감한다.
        		 * @param {string | date} value 'yyyyMMdd' 형태로 표현된 String 또는 Date.
        		 * @param {number} offset 월 증감값 ( 예 : 1 또는 -1 )
        		 * @return {string | date} 'yyyyMMdd' 형태로 표현된 String 또는 Date Value.
        		 * @example
        		 * var dt = this.gfnStrToDate("20130331");
        		 * var dt0 = this.gfnAddMonth(dt, 1);
        		 * trace(dt0); // output : Tue Apr 30 2013 00:00:00 GMT+0900
        		 * var str1 = "20130331";
        		 * var str = this.gfnAddMonth(str1, 1);
        		 * trace(str); // output : 20130430
        		 * @ Eco.date.addMonth
        	 */
        	_Form.gfnAddMonth = function(value, offset)
        	{
        		var dt;
        		if ( this.gfnIsDate(value) )
        		{
        			var nTmpday = value.getDate();
        			dt = new Date();
        			dt.setFullYear(value.getFullYear(), value.getMonth() + offset, value.getDate());
        			dt.setHours(value.getHours(), value.getMinutes(), value.getSeconds());
        			dt.setMilliseconds(value.getMilliseconds());
        			if ( dt.getDate() != nTmpday )
        			{
        				dt.setMonth(dt.getMonth() - 1);
        				dt.setDate(this.gfnGetLastDayOfMonth(dt));
        			}
        			return dt;
        		}
        		else
        		{
        			var nTmpday = parseInt(value.substr(6, 2));
        			dt = new Date();
        			dt.setFullYear(parseInt(value.substr(0, 4)), parseInt(value.substr(4, 2)-1) + offset, nTmpday);
        			dt.setHours(0, 0, 0);
        			dt.setMilliseconds(0);
        			if ( dt.getDate() != nTmpday )
        			{
        				dt.setMonth(dt.getMonth() - 1);
        				dt.setDate(this.gfnGetLastDayOfMonth(dt));
        			}
        			return this.gfnGetDateMaskFormatString(dt, "yyyyMMdd");
        		}
        	}

        	/**
        		 * 주어진 날짜 개체의 Mask Format 처리된 문자열을 반환.<br>
        		 * 요일명칭, 달명칭, 오전오후 명칭 표시 처리는 Eco.date에 정의된 값으로 처리된다.<br><br>
        		 * gvweekName : 요일명칭(Array value), <br>
        		 * gvweekShortName : 요일축약명칭(Array value),<br>
        		 * gvmonthName : 월명칭(Array value),<br>
        		 * gvmonthShortName : 월축약 명칭(Array value),<br>
        		 * gvttName : 오전/오후 명칭(Array value)
        		 * @param {date} dt Date 개체.
        		 * @param {string} strMask mask할 format 문자열.
        		 * @return {string} 변환된 문자열.
        		 * @example
        		 * var dt = this.gfnStrToDate("20130430123412"); // convert Date type from "20130430123412".
        		 * trace(this.gfnGetDateMaskFormatString(dt, "yyyy년 MM월 dd일 tt hh시 mm분 ss초")); // output : 2013년 04월 30일 오후 12시 34분 12초
        		 * trace(this.gfnGetDateMaskFormatString(dt, "yyyy-MM-dd")); // output : 2013-04-30
        		 * trace(this.gfnGetDateMaskFormatString(dt, "yy MM.dd")); // output : 13 04.30
        		 * trace(this.gfnGetDateMaskFormatString(dt, "yyyy-MM-dd W \\Week")); // output : 2013-04-30 18 Week
        		 * trace(this.gfnGetDateMaskFormatString(dt, "MMMM dddd")); // output : 4월 화요일
        		 * @ Eco.date.getMaskFormatString
        	*/
        	_Form.gfnGetDateMaskFormatString = function(dt, strMask)
        	{
        		var arrMask = this._parseDateMask(strMask),
        			arrDt = [], mask, h;
        		for ( var i = 0, len = arrMask.length; i < len ; i++ )
        		{
        			mask = arrMask[i];
        			if ( mask > -1 )
        			{
        				arrDt[arrDt.length] = strMask.charAt(mask);
        			}
        			else
        			{
        				switch (mask)
        				{
        					case "yyyy": arrDt[arrDt.length] = new String(dt.getFullYear()); break;
        					case "MMMM": arrDt[arrDt.length] = gvMonthName[dt.getMonth()]; break;
        					case "dddd": arrDt[arrDt.length] = gvWeekName[dt.getDay()]; break;
        					case "MMM": arrDt[arrDt.length] = gvMonthShortName[dt.getMonth()]; break;
        					case "ddd": arrDt[arrDt.length] = gvWeekShortName[dt.getDay()]; break;
        					case "sss": arrDt[arrDt.length] = new String(dt.getMilliseconds()).padLeft(3,'0'); break;
        					case "yy": arrDt[arrDt.length] = new String(dt.getFullYear() % 1000).padLeft(2,'0'); break;
        					case "MM": arrDt[arrDt.length] = new String(dt.getMonth() + 1).padLeft(2,'0'); break;
        					case "WW": arrDt[arrDt.length] = new String(getWeekNumber(dt)).padLeft(2,'0'); break;
        					case "dd": arrDt[arrDt.length] = new String(dt.getDate()).padLeft(2,'0'); break;
        					case "HH": arrDt[arrDt.length] = new String(dt.getHours()).padLeft(2,'0'); break;
        					case "hh": arrDt[arrDt.length] = new String(((h = dt.getHours() % 12) ? h : 12)).padLeft(2,'0'); break;
        					case "mm": arrDt[arrDt.length] = new String(dt.getMinutes()).padLeft(2,'0'); break;
        					case "ss": arrDt[arrDt.length] = new String(dt.getSeconds()).padLeft(2,'0'); break;
        					case "tt": arrDt[arrDt.length] = dt.getHours() < 12 ? gvTtName[0] : gvTtName[1]; break;
        					case "M": arrDt[arrDt.length] = new String(dt.getMonth() + 1); break;
        					case "d": arrDt[arrDt.length] = new String(dt.getDate()); break;
        					case "H": arrDt[arrDt.length] = new String(dt.getHours()); break;
        					case "h": arrDt[arrDt.length] = new String(((h = dt.getHours() % 12) ? h : 12)); break;
        					case "m": arrDt[arrDt.length] = new String(dt.getMinutes()); break;
        					case "s": arrDt[arrDt.length] = new String(dt.getSeconds()); break;
        					case "W": arrDt[arrDt.length] = new String(gfnGetWeekOfYear(dt)); break;
        				}
        			}
        		}
        		return arrDt.join("");
        	}


        	/**
        		* yyyyMMdd형태의 날짜를 입력하면 해당연도의 날짜에 해당하는 주차반환.
        		* @param {date|string} date Date Object 또는 날짜형 스트링.
        		* @return {number} 주차에 해당하는 숫자  ( 예 : 10 ).
        		* @example
        		* var dt = this.gfnStrToDate("20130331"); // convert Date type from "20130331".
        		* var week = this.gfnGetWeekOfYear(dt);
        		* trace(week); // output : 14
        		* var dtstr = "20130331";
        		* var week = Eco.date.getWeekOfYear(dt);
        		* trace(week); // output : 14
        		* Eco.date.getWeekOfYear
        	*/
        	_Form.gfnGetWeekOfYear = function(date)
        	{
        		if ( this.gfnIsString(date) )
        		{
        			date = this.gfnStrToDate(date);
        		}
        		if ( !this.gfnIsDate(date) )
        		{
        			return -1;
        		}

        		var onejan = new Date();

        		onejan.setYear(date.getFullYear());
        		onejan.setMonth(0);
        		onejan.setDate(1);

        		return Math.ceil((((date - onejan) / 86400000) + onejan.getDay()+1)/7);
        	}

        	/**
        		 * 해당월의 마지막 날짜를 숫자로 구하기.
        		 * @param {number | string} value yyyyMMdd형태의 날짜 ( 예 : "20121122" ).
        		 * @return {number} 마지막 날짜 숫자값 ( 예 : 30 ).
        		 * @example
        		 * var dt = this.gfnStrToDate("20120302"); // convert Date type from "20120302".
        		 * var day = this.gfnGetLastDayOfMonth(dt);
        		 * trace(day); // output : 31
        		 * var dtstr = "20120302";
        		 * var day = this.gfnGetLastDayOfMonth(dtstr);
        		 * trace(day); // output : 31
        		 * @  Eco.date.getLastDayOfMonth
        	 */
        	_Form.gfnGetLastDayOfMonth = function(value)
        	{
        		var nMonth, nLastDate;

        		if ( this.gfnIsDate(value) )
        		{
        			nMonth = value.getMonth() + 1;
        		}
        		else
        		{
        			nMonth = parseInt(value.substr(4,2), 10);
        		}
        		if( nMonth == 1 || nMonth == 3 || nMonth == 5 || nMonth == 7  || nMonth == 8 || nMonth == 10 || nMonth == 12 )
        		{
        			nLastDate = 31;
        		}
        		else if( nMonth == 2 )
        		{
        			if( this.gfnIsLeapYear(value) == true )
        			{
        				nLastDate = 29;
        			}
        			else
        			{
        				nLastDate = 28;
        			}
        		}
        		else
        		{
        			nLastDate = 30;
        		}

        		return nLastDate;
        	}

        	/**
        		 * yyyy, yyyyMM, yyyyMMdd, yyyyMMddhh, yyyyMMddhhmm, yyyyMMddhhmmss 형태의 String을 Date객체로 만들기.
        		 * @param {string} value yyyy ~ yyyyMMddhhmmss형태의 날짜String ( 예 : "20121122" ).
        		 * @return {date} Date Object.
        		 * @example
        		 * var dt = this.gfnStrToDate("20120331"); // convert Date type from "20120331".
        		 * trace(dt); // output : Sat Mar 31 2012 00:00:00 GMT+0900
        		 * var dt = this.gfnStrToDate("20130320123022"); // convert Date type from "20130320123022".
        		 * trace(dt); // output : Wed Mar 20 2013 12:30:22 GMT+0900
        		 * Eco.date.strToDate
        	 */
        	_Form.gfnStrToDate = function(value)
        	{
        		var dt = new Date();
        		if ( value.length == 4 ) //yyyy
        		{
        			dt.setFullYear(parseInt(value), 0, 0);
        			dt.setHours(0, 0, 0);
        			dt.setMilliseconds(0);
        		}
        		else if ( value.length == 6 ) //yyyyMM
        		{
        			dt.setFullYear(parseInt(value.substr(0,4)), parseInt(value.substr(4,2))-1, 0);
        			dt.setHours(0, 0, 0);
        			dt.setMilliseconds(0);
        		}
        		else if ( value.length == 8 ) //yyyyMMdd
        		{
        			dt.setFullYear(parseInt(value.substr(0,4)), parseInt(value.substr(4,2))-1, parseInt(value.substr(6,2)));
        			dt.setHours(0, 0, 0);
        			dt.setMilliseconds(0);
        		}
        		else if ( value.length == 10 ) //yyyyMMddhh
        		{
        			dt.setFullYear(parseInt(value.substr(0,4)), parseInt(value.substr(4,2))-1, parseInt(value.substr(6,2)));
        			dt.setHours(parseInt(value.substr(8,2)), 0, 0);
        			dt.setMilliseconds(0);
        		}
        		else if ( value.length == 12 )//yyyyMMddhhmm
        		{
        			dt.setFullYear(parseInt(value.substr(0,4)), parseInt(value.substr(4,2))-1, parseInt(value.substr(6,2)));
        			dt.setHours(parseInt(value.substr(8,2)), parseInt(value.substr(10,2)), 0);
        			dt.setMilliseconds(0);
        		}
        		else if ( value.length == 14 ) //yyyyMMddhhmmss
        		{
        			dt.setFullYear(parseInt(value.substr(0,4)), parseInt(value.substr(4,2))-1, parseInt(value.substr(6,2)));
        			dt.setHours(parseInt(value.substr(8,2)), parseInt(value.substr(10,2)), parseInt(value.substr(12,2)));
        			dt.setMilliseconds(0);
        		}
        		return dt;
        	}

        	/**
        		 * 두 월간의 차이 월수 계산. (정확한 달수를 처리하려면 fromDate Day값을 1로 하고 toDate를 마지막일자로 처리하여야 한다.)<br>
        		 * 시작일자의 Day값이 1로 아니면 소수점((마지막일자 - 해당월의 일수)/마지막일자)으로 계산한다.<br>
        		 * 끝일자의 Day값이 마지막일자가 아니면 소수점(해당월의 일수/마지막일자)를 계산한다.
        		 * @param {date | string} fromDate Date Object 또는 yyyyMMdd형태의 From 일자 ( 예 : "20121122" ).
        		 * @param {date | string} toDate Date Object 또는 yyyyMMdd형태의 To 일자 ( 예 : "20121202" ).
        		 * @return {number} 숫자 형태의 차이월수  ( 예 : 10 ). 단, fromDate < toDate 음수가 return된다.
        		 * @example
        		 * var fromdt = this.gfnStrToDate("20130301");
        		 * var todt = this.gfnStrToDate("20130501");
        		 * var month = Math.ceil(this.gfnGetDiffMonth(fromdt, todt));
        		 * trace(month); // output : 3
        		 * var fromstr = "20120331";
        		 * var tostr = "20130420";
        		 * var month = this.gfnGetDiffMonth(fromstr, tostr);
        		 * trace(month); // output : 12.69
        		 * @ Eco.date.getDiffMonth
        	 */
        	_Form.gfnGetDiffMonth = function(fromDate, toDate)
        	{
        		//var pThis = Eco.date;

        		if(this.gfnIsString(fromDate) && this.gfnIsString(toDate))
        		{
        			fromDate = new Date(parseInt(fromDate.substring(0,4),  10), parseInt(fromDate.substring(4,6)-1,  10), parseInt(fromDate.substring(6,8), 10));
        			toDate   = new Date(parseInt(toDate.substring(0,4),  10), parseInt(toDate.substring(4,6)-1,  10), parseInt(toDate.substring(6,8), 10));
        		}

        		var flag = 1, nMonth, nDay;
        		if ( fromDate >  toDate )
        		{
        			flag = -1;
        			var tmpDt = toDate;
        			toDate = fromDate;
        			fromDate = tmpDt;
        		}

        		if ( fromDate.getDate() == 1 )
        		{
        			nMonth = 1;
        			nDay = 0;
        		}
        		else
        		{
        			nMonth = 0;
        			var lastday = this.gfnGetLastDayOfMonth(fromDate);
        			nDay = Math.floor(( lastday - fromDate.getDate() + 1)/lastday, 2);
        		}

        		if ( toDate.getDate() == this.gfnGetLastDayOfMonth(toDate) )
        		{
        			nMonth += 1;
        		}
        		else
        		{
        			nDay += Math.floor(toDate.getDate()/this.gfnGetLastDayOfMonth(toDate), 2);
        		}

        		if (fromDate.getFullYear() != toDate.getFullYear() )
        		{
        			nMonth += 12 - (fromDate.getMonth() + 1) + toDate.getMonth();
        			var nYear = fromDate.getFullYear();
        			while (nYear++ < toDate.getFullYear() - 1)
        			{
        				nMonth = nMonth + 12;
        			}
        		}
        		else
        		{
        			nMonth += toDate.getMonth() - (fromDate.getMonth() + 1);
        		}
        		return (nMonth + nDay)*flag;
        	}

        	/**
        		 * 두 일자간의 차이 일수 계산.
        		 * @param {date | string} fromDate Date Object 또는 yyyyMMdd형태의 From 일자 ( 예 : "20121122" ).
        		 * @param {date | string} toDate Date Object 또는 yyyyMMdd형태의 To 일자 ( 예 : "20121202" ).
        		 * @return {number} 숫자 형태의 차이일수  ( 예 : 10 ). 단, fromDate < toDate 음수가 return된다.
        		 * @example
        		 * var fromdt = this.gfnStrToDate("20120331");
        		 * var todt = this.gfnStrToDate("20130420");
        		 * var day = this.gfnGetDiffDay(fromdt, todt);
        		 * trace(day); // output : 385
        		 * var fromstr = "20120331";
        		 * var tostr = "20130420";
        		 * var day = this.gfnGetDiffDay(fromstr, tostr);
        		 * trace(day); // output : 385
        		 * @ Eco.date.getDiffDay
        	 */
        	_Form.gfnGetDiffDay = function(fromDate, toDate)
        	{
        		// var pThis = Eco.date;

        		if(this.gfnIsString(fromDate) && this.gfnIsString(toDate))
        		{
        			fromDate = new Date(parseInt(fromDate.substring(0,4),  10), parseInt(fromDate.substring(4,6)-1,  10), parseInt(fromDate.substring(6,8), 10));
        			toDate   = new Date(parseInt(toDate.substring(0,4),  10), parseInt(toDate.substring(4,6)-1,  10), parseInt(toDate.substring(6,8), 10));
        		}

        		var flag = 1, nDay;
        		if ( fromDate >  toDate )
        		{
        			flag = -1;
        			var tmpDt = toDate;
        			toDate = fromDate;
        			fromDate = tmpDt;
        		}

        		if (fromDate.getFullYear() != toDate.getFullYear() )
        		{
        			nDay = (this.gfnIsLeapYear(fromDate.getFullYear()) ? 366 : 365) - this.gfnGetDayOfYear(fromDate) + this.gfnGetDayOfYear(toDate);
        			var nYear = fromDate.getFullYear();
        			while (nYear++ < toDate.getFullYear() - 1)
        			{
        				nDay = nDay + (this.gfnIsLeapYear(nYear) ? 366 : 365);
        			}
        		}
        		else
        		{
        			nDay = this.gfnGetDayOfYear(toDate) - this.gfnGetDayOfYear(fromDate);
        		}
        		return nDay*flag;
        	}

        	/**
        		 * 날짜 차이 계산하기.
        		 * @param {string} date1 yyyyMMddHHMMSS형태의 일자.
        		 * @param {string} date2 yyyyMMddHHMMSS형태의 일자.
        		 * @return {array} 두 날짜의 기간.[일,시,분,초]
        		 * @example
        		 * var dt0 = this.gfnStrToDate("20130302113022");
        		 * var dt1 = this.gfnStrToDate("20130305145032");
        		 * var etime = this.gfnGetDiffTime(dt0, dt1); // return Array Type [일, 시, 분, 초]
        		 * trace(etime); // output : 3,3,20,10
        		 * var str0 = "20130302113022";
        		 * var str1 = "20130305145032";
        		 * var etime = this.gfnGetDiffTime(str0, str1); // return Array Type [일, 시, 분, 초]
        		 * trace(etime); // output : 3,3,20,10
        		 * Eco.date.getDiffTime
        	 */
        	_Form.gfnGetDiffTime = function(date1, date2)
        	{
        		var dFrom, dTo;
        		if ( this.gfnIsDate(date1) && this.gfnIsDate(date2) )
        		{
        			dFrom = date2;
        			dTo = date1;
        		}
        		else
        		{
        			dFrom = new Date(date2.substring(0,4),  date2.substring(4,6)-1, date2.substring(6,8)
        							,date2.substring(8,10), date2.substring(10,12), date2.substring(12,14));
        			dTo   = new Date(date1.substring(0,4),  date1.substring(4,6)-1, date1.substring(6,8)
        							,date1.substring(8,10), date1.substring(10,12), date1.substring(12,14));
        		}
        		var nGap  = (dFrom.getTime() - dTo.getTime()) / 1000;
        		var nSec  = nGap % 60;
        		var nMin  = Math.floor(nGap/(60)) % 60;
        		var nHour = Math.floor(nGap/(60 * 60)) % 24;
        		var nDay  = Math.floor(nGap/(60 * 60 * 24));

        		var sRtn = nDay + "" + nHour  + "" + nMin + "" + nSec+ "";
        		return [nDay, nHour, nMin, nSec];
        	}

        	/**
        		 * 윤년 여부.
        		 * @param {string} value yyyyMMdd형태의 날짜 ( 예 : "20121122" ).
        		 * @return {boolean} 윤년 여부.입력되지 않은 경우도 false
        		 * @example
        		 * var yyyy = 2013;
        		 * var flag = this.gfnIsLeapYear(yyyy);
        		 * trace(flag); // output : false
        		 * var ymd = "20120301";
        		 * var flag = this.gfnIsLeapYear(ymd);
        		 * trace(flag); // output : true
        		 * @  Eco.date.isLeapYear
        	 */
        	_Form.gfnIsLeapYear = function(value)
        	{
        		var result;
        		var year;
        		if ( this.gfnIsString(value) )
        		{
        			year = parseInt(value.substring(0,4), 10);
        		}

        		if ((year % 4) == 0)
        		{
        			if ((year % 100) != 0 || (year % 400) == 0){
        				result = true;
        			}
        			else
        			{
        				result = false;
        			}
        		}
        		else
        		{
        			result = false;
        		}

        		return result;
        	}

        	/**
        		* 해당연도의 1월 1일부터 날짜까지의 일 수 반환.
        		* @param {date|string} date Date Object 또는 날짜형 스트링.
        		* @return {number} 일수
        		* @example
        		* var dt = this.gfnStrToDate("20130420"); // convert Date type from "20130420".
        		* var days =this.gfnGetDayOfYear(dt);
        		* trace(days); // output : 110
        		* var dtstr = "20130420";
        		* var days = this.gfnGetDayOfYear(dtstr);
        		* trace(days); // output : 110
        		* @  Eco.date.getDayOfYear
        	*/
        	_Form.gfnGetDayOfYear = function(date)
        	{
        		if ( this.gfnIsString(date) )
        		{
        			date = this.gfnStrToDate(date);
        		}

        		/*
        		if ( !this.gfnIsDate(date) )
        		{
        			Eco.Logger.error({"message":"invalid date", "stack":true});
        		}
        		*/

        		var nDay = _dayOfYearOffset[date.getMonth()] + date.getDate();
        		if (this.gfnIsLeapYear(date.getFullYear()))
        		{
        			nDay = nDay + 1;
        		}
        		return nDay;
        	}

        	/**
        		 * mask format 변환 정보 반환.
        		 * @private
        		 * @param {string} strMask mask할 format 문자열.
        		 * @return {array} mask format 변환 정보
        		 * @ Eco.date._parseDateMask
        	 */
        	var _dateMaskCache = [];		// mask format cache.
        	_Form._parseDateMask = function(strMask)
        	{
        		var res = _dateMaskCache[strMask];
        		if ( res ) return res;

        		var arrMask = [], tokenStr, seq = 0,
        			bEscape = false, bQuote = false,
        			maskArr = strMask.split(""),
        			tmpStr;

        		for ( var i = 0, len = maskArr.length ; i < len ; )
        		{
        			tokenStr = maskArr[i];
        			//trace(i + "===>" + tokenStr);
        			if( bEscape == false && tokenStr == "'" )
        			{ // Mask가 Quotation이 시작될 경우.
        				if( bQuote == false )
        					bQuote = true;
        				else
        					bQuote = false;
        				i++;
        				continue;
        			}
        			if( bEscape == false && tokenStr == "\\" && !bQuote )
        			{ // Mask에서 Escape에 진입할 경우.
        				bEscape = true;
        				i++;
        				continue;
        			}
        			else if ( bEscape )
        			{ // Mask에서 Escape를 사용할 경우.
        				//trace(i + "(EEE)===>" + tokenStr);
        				arrMask[seq] = i;
        				seq++;
        				bEscape = false;
        			}
        			else if( bQuote == false )
        			{// Mask에서 Quotation 밖의 글자에 대해.
        				tmpStr = strMask.substr(i, 4);
        				if ( tmpStr == "yyyy" || tmpStr == "MMMM" || tmpStr == "dddd" ) //yyyy, MMMM, dddd
        				{
        					arrMask[seq] = tmpStr;
        					i += 4;
        					seq++;
        					continue;
        				}
        				tmpStr = strMask.substr(i, 3);
        				if ( tmpStr == "MMM" || tmpStr == "ddd" || tmpStr == "sss" ) //MMM, ddd, sss
        				{
        					arrMask[seq] = tmpStr;
        					i += 3;
        					seq++;
        					continue;
        				}
        				tmpStr = strMask.substr(i, 2);
        				if ( tmpStr == "yy" || tmpStr == "MM" || tmpStr == "dd" ||
        					 tmpStr == "HH" || tmpStr == "mm" || tmpStr == "ss" ||
        					 tmpStr == "hh" || tmpStr == "tt" || tmpStr == "tt" ) // yy, MM, dd, HH, mm , ss, tt, WW
        				{
        					arrMask[seq] = tmpStr;
        					i += 2;
        					seq++;
        					continue;
        				}

        				if ( tokenStr == "M" || tokenStr == "d" || tokenStr == "H" ||
        					 tokenStr == "h" || tokenStr == "m" || tokenStr == "s" || tokenStr == "W" ) // M, d, H, h, m, s, W
        				{
        					arrMask[seq] = tokenStr;
        					seq++;
        				}
        				else
        				{
        					arrMask[seq] = i;
        					seq++;
        				}
        			}
        			i++;
        		}

        		_dateMaskCache[strMask] = arrMask;

        		return arrMask;
        	}

        /***********************************************************
        			XComp
        ***********************************************************/
        	/**
        		 * 주어진 nexacro 개체의 type 을 반환
        		 * @public
        		 * @param {*} obj Object, Component, Frame, .. 등 nexacro 모든 개체
        		 * @return {string} 개체의 type
        		 * @example
        		 * trace(this.gfnXCompTypeOf(Button00));	// output : Button
        		 * trace(this.gfnXCompTypeOf(Tab00));	// output : Tab
        		 * trace(this.gfnXCompTypeOf(Tab00.tabpage1));	// output : Tabpage
        		 * trace(this.gfnXCompTypeOf(Dataset00));	// output : Dataset
        		 * trace(this.gfnXCompTypeOf(PropertyAnimation00));	// output : PropertyAnimation
        		 *
        		 * var o;
        		 * o = new Buffer;
        		 * trace(this.gfnXCompTypeOf(o));	// output : Buffer
        		 *
        		 * o = new DomDocument;
        		 * trace(this.gfnXCompTypeOf(o));	// output : DomDocument
        		 *
        		 * o = new Rect;
        		 * trace(this.gfnXCompTypeOf(o));	// output : Rect
        		 *
        		 * o = new FileDialog;
        		 * trace(this.gfnXCompTypeOf(o));	// output : FileDialog
        		 *
        		 * o = new UserEvent;
        		 * trace(this.gfnXCompTypeOf(o));	// output : UserEvent
        		 *
        		 * // non XP Component/Object return undefined.
        		 * o = {};
        		 * trace(this.gfnXCompTypeOf(o));	// output : undefined
        		 *
        		 * o = new Date();
        		 * trace(this.gfnXCompTypeOf(o));	// output : undefined
        		 *@Eco.XComp.typeOf
        	*/
        	_Form.gfnXCompTypeOf = function(obj)
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
        		 * showModal 호출 시 추가된 변수 목록값을 반환한다.
        		 * @public
        		 * @param {Form} scope 현재 form
        		 * @param {Array.<string>} variableNames 얻고자 하는 변수명 목록
        		 * @return {object} {변수명:값, 변수명:값, ...} 객체.
        		 * @example
        		 *
        		 * var frame = new ChildFrame();
        		 * frame.init("testFrame", "absolute", 10, 10, 400, 400, null, null, "Sample::XComp_sub2.xfdl");
        		 * frame.showModal(this.getOwnerFrame(), {'name':'James', 'address':"Seoul, Korea" });
        		 *
        		 * alert(this.gfnGetPopupArguments( this, ['name', 'address'] );	// output : {'name':'James', 'address':"Seoul, Korea" }
        		 *
        		 * @ Eco.XComp.getPopupArguments
        	 */
        	_Form.gfnGetPopupArguments = function(scope, varNameList)
        	{
        		var p = scope;
        		while (p && !(p instanceof ChildFrame))
        		{
        			p = p.parent;
        		}

        		var valueList = {};

        		for(var i=0, len = varNameList.length; i < len; i++)
        		{
        			valueList[varNameList[i]] = p[varNameList[i]];
        		}

        		return valueList;
        	}

        	/**
        		 * 주어진 Form 을 포함하는 최상위 Form을 찾는다.
        		 * @public
        		 * @param {Form} curForm 찾을 대상 이름
        		 * @return {Form} 최상위 Form
        		 * @example
        		 *
        		 * trace(this.getTopLevelForm(this));	// output : [object Form]
        		 *
        		 * @ Eco.XComp.getTopLevelForm
        	 */
        	_Form.getTopLevelForm = function(curForm)
        	{
        		var p = curForm;
        		while (p && !(p instanceof ChildFrame))
        		{
        			p = p.parent;
        		}
        		return p.form;
        	}






        	/**
        *  컨설팅 표준화 작업
        *  @FileName 	Util.js
        *  @Creator 	consulting
        *  @CreateDate 	2017.03.08
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        *  2017.03.08     	consulting 	                최초 생성
        *  2017.10.17     	consulting       	        주석 정비
        *******************************************************************************
        */

        	/**
        	 * @class 실행되는 서버 url 가져오기 <br>
        	 * @return String
        	 */
        // 	_Form.gfnGetServerUrl = function()
        // 	{
        // 		var urlPath = "";
        // 		if (system.navigatorname == "nexacro")
        // 		{
        // 			var objEnv = nexacro.getEnvironment();
        // 			urlPath = objEnv.services["svcUrl"].url;
        // 		}else{
        // 			urlPath = window.location.protocol + "//" + window.location.host+ "//";
        // 			//urlPath+="/Service/";
        // 		}
        // 		trace("urlPath : " + urlPath);
        // 		return urlPath;
        // 	};


        		/**
        	 * @class 정규식을 이용한 trim 구현 - 문자열 양 옆의 공백 제거 <br>
        	 * @param {String} sValue - 변경하려는 값
        	 * @return {String} 문자열
        	 */
        	_Form.gfnTrim = function(sValue)
        	{
        		if (this.gfnIsNull(sValue)) return "";
        		return nexacro.trim(sValue);
        	};

        	/**
        	 * @class  지정된 속성의 값이 처음으로 일치하는 객체의 배열 위치를 뒤에서부터 찾아 반환한다.<br>
        	 * 배열의 각 항목은 하나 이상의 속성을 가진 객체이다.<br>
        	 * @param {Array} array 대상 Array.
        	 * @param {String} prop 기준 속성.
        	 * @param {String} item 기준 값.
        	 * @param {Number} from 검색 시작 위치(default: 0).
        	 * @param {Boolean} strict true: 형변환 없이 비교('==='), false: 형변환 후 비교('==') (default: false).
        	 * @return {Number} 검색된 배열 위치. 없다면 -1 리턴.
        	 * @example
        	 * var users = [];
        	 * users[0] = {id:"milk", name:"park", age:33};
        	 * users[1] = {id:"apple", name:"kim"};
        	 * users[2] = {id:"oops", name:"joo", age:44};
        	 * users[3] = {id:"beans", name:"lee", age:50};
        	 * users[4] = {id:"zoo", age:65};
        	 * users[5] = {id:"milk", name:"", age:33};
        	 * users[6] = {id:"milk", name:"lee", age:33};
        	 * var index = this.gfnLastIndexOfProp(users, "name", "lee");
        	 * trace("index==>" + index);	// output : index==>6
        	 * var index = this.gfnLastIndexOfProp(users, "name", "lee", 5);
        	 * trace("index==>" + index);	// output : index==>3
        	*/
        	_Form.gfnLastIndexOfProp = function(array, prop, item, from, strict)
        	{
        		var i, obj,
        			propValue;

        		if (from == null)
        		{
        			from = array.length - 1;
        		}
        		else if (from < 0)
        		{
        			from = Math.max(0, array.length + from);
        		}

        		var strict = strict || false;

        		if (strict)
        		{
        			for (i=from; i>=0; i--)
        			{
        				if (i in array && array[i])
        				{
        					obj = array[i],
        					propValue = obj[prop];

        					if (propValue === item)
        					{
        						return i;
        					}
        				}
        			}
        		}
        		else
        		{
        			for (i=from; i>=0; i--)
        			{
        				if (i in array && array[i])
        				{
        					obj = array[i],
        					propValue = obj[prop];

        					if (propValue == item)
        					{
        						return i;
        					}
        				}
        			}
        		}

        		return -1;
        	};


        	/**
        	 * @class  원하는 위치의 항목을 배열에서 삭제 처리한다.
        	 * @param {Array} array remove 대상 Array.
        	 * @param {Number} index remove하고자 하는 item index.
        	 * @example
        	 * var mon = ["Jan","Feb","Mar","Apr"];
        	 * trace("mon==>" + mon);	// output : mon==>["Jan","Mar","Apr"]
        	*/
        	_Form.gfnRemoveAt = function(array, index)
        	{
        		array.splice(index, 1);
        	};

        	/**
        	 * @class  alphabet character code.
        	 * charvalue값 => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e, f]
        	*/
        	_Form._ALPHA_CHAR_CODES = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 97, 98, 99, 100, 101, 102]

        	/**
        	 * @class  유일한 ID 를 반환
        	 * @param {String} prefix id 앞에 붙일 문자열
        	 * @param {String} separator id 생성시 구분용 문자(default: '-' ).
        	 * @return {String} id
        	 * @example
        	 * trace(this.gfnGetUniqueI());
        	 * // output : 3e52d1f6-f0d2-4970-a590-ba7656b07859
        	 *
        	 * trace(this.gfnGetUniqueI("Button_"));
        	 * // output : Button_4e601da1-63f4-4cfa-849b-01b8a7f14d40
        	 *
        	 * trace(this.gfnGetUniqueI("", "_"));
        	 * // output : 4e601da1_63f4_4cfa_849b_01b8a7f14d40
        	 *
        	 * trace(this.gfnGetUniqueId("Button_", "_"));
        	 * // output : Button_4e601da1_63f4_4cfa_849b_01b8a7f14d40
        	*/
        	_Form.gfnGetUniqueId = function(prefix, separator)
        	{
        		if ( this.gfnIsNull(prefix) ) prefix = "";
        		if ( this.gfnIsNull(separator) ) {
        			separator = 45;
        		} else {
        			separator = separator.charCodeAt(0);
        		}

        		var pThis = this,
        			charcode = this._ALPHA_CHAR_CODES,
        			math = Math;
        		var seq = 0;
        		var seq0;
        		var tmpArray = new Array(36);
        		var idx = -1;

        		while (seq < 8)
        		{
        			tmpArray[++idx] = charcode[math.random() * 16 | 0];
        			seq++;
        		}
        		seq = 0;
        		while (seq < 3)
        		{
        			tmpArray[++idx] = separator;//45 => "-", 95=> "_"
        			seq0 = 0;
        			while (seq0 < 4)
        			{
        				tmpArray[++idx] = charcode[math.random() * 16  | 0];
        				seq0++;
        			}
        			seq++;
        		}
        		tmpArray[++idx] = separator; //45 => "-", 95=> "_"

        		var tmpStr = (new Date()).getTime();
        		tmpStr = ("0000000" + tmpStr.toString(16)).substr(-8);
        		seq = 0;
        		while (seq < 8)
        		{
        			tmpArray[++idx] = tmpStr.charCodeAt(seq);
        			seq++;
        		}
        		seq = 0;
        		while (seq < 4)
        		{
        			tmpArray[++idx] = charcode[math.random() * 16 | 0];
        			seq++;
        		}
        		return prefix + String.fromCharCode.apply(null, tmpArray);
        	};

        	/**
        	 * @class Component 기준의 XY좌표를 XCompA 기준의 XY좌표로 변환.
        	 * @param {Object} Component.
        	 * @param {Array} xy XCompB기준의 XY좌표.
        	 * @param {Object} XCompB XComponent.
        	 * @return {Array} XCompA기준의 좌표. [ x좌표, y좌표]
        	 * @example
        	 * Form에 아래와 같이 Button00이 존재 할 경우
        	 *
        	 * |---------------------------------------------------------|  ^
        	 * |  Form                                                   |  |
        	 * |                                                         |  |
        	 * |                                                         | 300
        	 * |                                                         |  |
        	 * |                                     //(0,0)             |  v
        	 * |                                       *-----------      |
        	 * |                                       | Button00 |      |
        	 * |                                       ------------      |
        	 * |                                                         |
        	 * |---------------------------------------------------------|
        	 * <--------------- 900 ------------------>
        	 *
        	 * trace(this.gfnConvertXY(this,[0,0], Button00)); //output: [900,300]
        	 * //Button00을 기준으로 한 0,0 좌표는
        	 * //form 기준으로 했을 때 900, 300이 된다.
        	*/
        	_Form.gfnConvertXY = function(XCompA, xy, XCompB)
        	{
        		var tempX, tempY;
        		var x, y;
        		if ( XCompB )
        		{
        			tempX = system.clientToScreenX(XCompB, xy[0]);
        			tempY = system.clientToScreenY(XCompB, xy[1]);
        			x = system.screenToClientX(XCompA, tempX) + this.gfnGetScrollLeft(XCompA);
        			y = system.screenToClientY(XCompA, tempY) + this.gfnGetScrollTop(XCompA);
        		}
        		else
        		{
        			x = xy[0];
        			y = xy[1];
        		}

        		return [x, y];
        	};

        	/**
        	 * @class  수평스크롤바의 trackbar 위치를 반환한다.
        	 * @param  {Object} Component.
        	 * @return {Number} 수평스크롤바의 trackbar 위치(수평스크롤바가 없을때는 0).
        	 * @example
        	 * trace(this.gfnGetScrollLeft(Div01)); //output: 10
        	 * trace(this.gfnGetScrollLeft(Div01)); //output: 0
        	*/
        	_Form.gfnGetScrollLeft = function(XComp)
        	{
        		if(XComp instanceof nexacro.Div){
        			XComp = XComp.form;
        		}
        		return (XComp.hscrollbar && XComp.hscrollbar.visible ? XComp.hscrollbar.pos : 0);
        	};

        	/**
        	 * @class  수직스크롤바의 trackbar 위치를 반환한다.
        	 * @param  {Object} Component.
        	 * @return {Number} 수직스크롤바의 trackbar 위치(수직스크롤바가 없을때는 0).
        	 * @example
        	 * trace(this.gfnGetScrollTop(Div01)); //output: 20
        	 * trace(this.gfnGetScrollTop(Div01)); //output: 0
        	 */
        	_Form.gfnGetScrollTop = function(XComp)
        	{
        		if(XComp instanceof nexacro.Div){
        			XComp = XComp.form;
        		}
        		return (XComp.vscrollbar && XComp.vscrollbar.visible ? XComp.vscrollbar.pos : 0);
        	};

        	/**
        	 * @class object에 argument로 주어진 object의 모든 속성값을 복사한다.<br>
        	 * object, function, date, array Type은 reference가 복사된다.
        	 * @param {Object} tarobject target 객체.
        	 * @param {Object} srcobject source 객체.
        	 * @example
        	 * var target = {};
        	 * this.gfnCopyProperties(target, {a: 1, b: "2", c: {"A": "3", "B": 4}});
        	 * for(var p in target)
        	 * {
        	 * 	trace(p + ":" + target[p]);
        	 *	// output : a:1
        	 *	// output : b:2
        	 *	// output : c:[object Object]
        	 * }
        	*/
        	_Form.gfnCopyProperties = function(tarobject, srcobject)
        	{
        		if (tarobject && srcobject)
        		{
        			var p, value;

        			for (p in srcobject)
        			{
        				if (srcobject.hasOwnProperty(p))
        				{
        					value = srcobject[p];
        					tarobject[p] = value;
        				}
        			}
        		}
        	};


        	/**
        	 * @class  Form 내에서 지정된 접두문자열에 순번이 붙여진 ID 를 반환
        	 * @param {Object} prefix 순번 앞에 붙일 문자열
        	 * @param {String} prefix 순번 앞에 붙일 문자열
        	 * @return {String} id
        	 * @example
        	 * // this = Form
        	 * trace(this.gfnGetSequenceId(this, "Button")); // output : Button0
        	 * trace(this.gfnGetSequenceId(this, "Button")); // output : Button1
        	 * // this = Form
        	 * trace(this.gfnGetSequenceId(this, "chk_")); // output : chk_0
        	 * trace(this.gfnGetSequenceId(this, "chk_")); // output : chk_1
        	*/
        	_Form.gfnGetSequenceId = function(form, prefix)
        	{
        		if ( this.gfnIsNull(form) )
        		{
        			trace("getSequenceId :: 1st argument doesn't exist !!");
        			return null;
        		}

        		if ( this.gfnIsNull(prefix) )
        		{
        			trace("getSequenceId :: 2nd argument doesn't exist !!");
        			return null;
        		}

        		if ( !(form instanceof Form) )
        		{
        			trace("getSequenceId :: 1st argument must be a Form !!");
        			return null;
        		}

        		var cache = form._sequenceIdCache;
        		if ( this.gfnIsNull(cache) )
        		{
        			cache = form._sequenceIdCache = {};
        		}

        		var sequence = cache[prefix];
        		if ( this.gfnIsNull(sequence) )
        		{
        			sequence = -1;
        		}
        		sequence++;

        		cache[prefix] = sequence;

        		return prefix + sequence;
        	};

        	/**
        	 * @class object 속성값들을 주어진 함수로 처리한다.<br>
        	 * 주어진 함수에서 return false를 하면 반복이 멈춘다.
        	 * @param {Object} object 대상 object.
        	 * @param {Function} func callback 함수.
        	 * @param {String} func.prop object property name.
        	 * @param {Object} func.val object property value.
        	 * @param {Object} func.object object 그 자체.
        	 * @param {Object} scope callback 함수에 대한 수행 scope.
        	 * @example
        	 * var datas = {code: "001", userId: "", name: "pete"};
        	 * this.gfnEach(datas, function(prop, val, object) {
        	 * 	var result = "";
        	 * 	if ( !val )
        	 * 	{
        	 * 		result = prop + " must have not a non-empty value!"
        	 * 		st_result03.text += result;
        	 * 		trace(result);	// output : userId must have not a non-empty value!
        	 * 		return false;
        	 * 	}
        	 * 	result = prop + ":" + val;
        	 * 	st_result03.text += result + "  ";
        	 * 	trace(result);	// output : code:001
        	 * }, this);
        	*/
        	_Form.gfnEach = function(object, func, scope)
        	{
        		var p,
        			scope = scope || object;
        		for (p in object)
        		{
        			if (object.hasOwnProperty(p))
        			{
        				if (func.call(scope, p, object[p], object) === false)
        				{
        					return;
        				}
        			}
        		}
        	};

        	/**
        	 * @class 주어진 Form 을 포함하는 최상위 Form을 찾는다.
        	 * @param  {Object} curForm 검색 시작 Form.
        	 * @return {Object} 최상위 Form.
        	 * @example
        	 * trace(this.gfnGetTopLevelForm(this));	// output : [object Form]
        	*/
        	_Form.gfnGetTopLevelForm = function(curForm)
        	{
        		var p = curForm;
        		while (p && !(p instanceof ChildFrame))
        		{
        			p = p.parent;
        		}
        		return p.form;
        	};

        	/**
        	 * @class 지정된 항목이 배열에 포함되어 있는지 확인한다.
        	 * @param {Array} array 검색 대상 Array.
        	 * @param {Object} item 찾고자 하는 Item.
        	 * @param {Boolean} strict true: 형변환 없이 비교('==='), false: 형변환 후 비교('==') (default: false).
        	 * @return {Boolean} 포함되어 있다면 true, 없다면 false를 리턴.
        	 * @example
        	 * var mon = ["Jan","Feb","Mar","Apr"];
        	 * var contain = this.gfnContains(mon, "Mar");
        	 * trace("contain==>" + contain);	// output : contain==>true
        	 * var contain = this.gfnContains(mon, "May");
        	 * trace("contain==>" + contain);	// output : contain==>false
        	*/
        	_Form.gfnContains = function(array, item, strict)
        	{
        		if (this.gfnIndexOf(array, item, null, strict) === -1)
        		{
        			return false;
        		}
        		else
        		{
        			return true;
        		}
        	};

        	/**
        	 * @class 지정된 항목이 처음 나오는 배열 위치를 반환한다.
        	 * @param {Array} array 검색 대상 Array.
        	 * @param {Object} item 찾고자 하는 Item.
        	 * @param {Number} from 검색의 시작 위치 (default: 0).
        	 * @param {Booleans} strict true: 형변환 없이 비교('==='), false: 형변환 후 비교('==') (default: false).
        	 * @return {Number} 검색된 배열 위치. 없다면 -1 리턴.
        	 * @example
        	 * var mon = ["Jan","Feb","Mar","Apr"];
        	 * var index = this.gfnIndexOf(mon, "Mar");
        	 * trace("index==>" + index);	// output : index==>2
        	 * var index = this.gfnIndexOf(mon, "May");
        	 * trace("index==>" + index);	// output : index==>-1
        	*/
        	_Form.gfnIndexOf = function(array, item, from, strict)
        	{
        		var len = array.length;
        		if ( from == null ) from = 0;;
        		strict == !!strict;
        		from = (from < 0) ? Math.ceil(from) : Math.floor(from);
        		if (from < 0)
        		{
        			from += len;
        		}

        		if (strict)
        		{
        			for (; from < len; from++)
        			{
        				if ( array[from] === item)
        				{
        					return from;
        				}
        			}
        		}
        		else
        		{
        			for (; from < len; from++)
        			{
        				if ( array[from] == item)
        				{
        					return from;
        				}
        			}
        		}

        		return -1;
        	};

        	_Form.gfnGetMenMonth = function(fromDate, toDate) // this.gfnGetMenMonth("20180101", "20181231")
        	{
        		if(this.gfnIsEmpty(fromDate) || this.gfnIsEmpty(toDate))
        		{
        			return 0;
        		}else{
        			var arrDayCnt = [];
        			var arrDayCntLog = [];
        			var yyyyMMdd = this.gfnStrToDate(fromDate);
        			var dt, st, ed, dayAllCnt, dayWorkCnt;
        			dt = this.gfnGetDateMaskFormatString(yyyyMMdd, "yyyyMMdd");
        			while( dt.substring(0,6) <= toDate.substring(0,6) )
        			{
        				st = dt.substring(0, 6) + "01";
        				ed = dt.substring(0, 6) + this.gfnGetLastDayOfMonth(dt);
        				dayAllCnt = this.gfnGetDiffDay(st, ed) + 1;
        				arrDayCntLog.push({st:st,ed:ed,dayAllCnt:dayAllCnt});

        				st = st > fromDate ? st : fromDate;
        				ed = ed < toDate ? ed : toDate;
        				dayWorkCnt = this.gfnGetDiffDay(st, ed) + 1;
        				arrDayCntLog.push({st:st,ed:ed,dayWorkCnt:dayWorkCnt});

        				arrDayCnt.push(	(dayWorkCnt/dayAllCnt) );

        				yyyyMMdd.addMonth(1);
        				dt = this.gfnGetDateMaskFormatString(yyyyMMdd, "yyyyMMdd");
        			}
        			if(arrDayCnt.length > 0)
        			{
        				return arrDayCnt.reduce( function(t, n) { return t + n; } );
        			}else{
        				return 0;
        			}
        		}
        	}

        	_Form.gfnGetMoblieValue = function(objForm, dsValue)
        	{
        		if(this.gfnIsEmpty(dsValue))
        		{
        			var dsValue = new Dataset;
        			dsValue.set_name("dsValue");
        			dsValue.addColumn("ID", "STRING");
        			dsValue.addColumn("VALUE", "STRING");
        		}

        		var objComp = objForm.components;
        		for(var i=0;i<objComp.length;i++)
        		{
        			if(objComp[i] instanceof Combo || objComp[i] instanceof ListBox || objComp[i] instanceof Radio || objComp[i] instanceof Calendar)
        			{
        				var nRow = dsValue.addRow();
        				dsValue.setColumn(nRow, "ID", objForm.parent.id +"."+ objComp[i].id);
        				dsValue.setColumn(nRow, "VALUE", objComp[i].value);
        			} else if (objComp[i] instanceof Div) {
        				this.gfnGetMoblieValue(objComp[i].form, dsValue);
        			}
        		}
        		return dsValue;
        	}

        	_Form.gfnSetMoblieValue = function(objForm, dsValue)
        	{
        		var objComp = objForm.components;
        		for(var i=0;i<objComp.length;i++)
        		{
        			if(objComp[i] instanceof Combo || objComp[i] instanceof ListBox || objComp[i] instanceof Radio || objComp[i] instanceof Calendar)
        			{
        				var nRow = dsValue.findRow("ID", objForm.parent.id +"."+ objComp[i].id);
        				if (nRow>=0)
        				{
        					objComp[i].set_value(dsValue.getColumn(nRow, "VALUE"));
        				}
        			} else if (objComp[i] instanceof Div) {
        				this.gfnSetMoblieValue(objComp[i].form, dsValue);
        			}
        		}
        	}
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
