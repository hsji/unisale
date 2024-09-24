
//==============================================================================
//
//  TOBESOFT Co., Ltd.
//	RSA Crypto
//  ver 1.0
//
//==============================================================================
//----------------------------------------------------------------------------------------
//
// RSA Data Encrypt Utility
//
if (!nexacro.Form.prototype.getRSAKey)
{
	//----------------------------------------------------------------------------------------------------------------------
	// RSA 키취득 URL 호출 - 동기통신
	// 
	//	param 1 :	서비스명
	//	param 2 :	get key service url
	//	param 3 :	callback function
	//----------------------------------------------------------------------------------------------------------------------
    nexacro.Form.prototype.getRSAKey = function (id, sUrl, callbackFn)
    {
		this.ErrorCode = 0;
		this.ErrorMsg = "";
		
		if(!sUrl && sUrl == "") {
			if(callbackFn) {
				this[callbackFn].call(this,-1,"RSA Key Creation Error - CHECK URL INFO");
			}
			return false;
		}
		sUrl = "svcUrl::" + sUrl;
		this.transaction(id, sUrl, "", "", "", callbackFn, false, 2);
		if(this.publicKeyModulus != "") {
			return true;
		} else {
			return false;
		}
	};
	//----------------------------------------------------------------------------------------------------------------------
	// RSA 암호화
	// 
	//	param 1 :	암호화 DATA
	//----------------------------------------------------------------------------------------------------------------------
    nexacro.Form.prototype.encryptRSA = function (ds, data)
    {
    	var publicKeyModulus  = ds.getColumn(0, "publicKeyModulus");
    	var publicKeyExponent = ds.getColumn(0, "publicKeyExponent");
    	
		if(!publicKeyModulus || publicKeyModulus == "") {
			trace("************************************ KEY ERROR ***************************************");
			return;
		}
		
		var securedData;
		try {
			// RSA로 암호화한다.
			var rsa = new RSAKey();
			rsa.setPublic(publicKeyModulus, publicKeyExponent);
			securedData = rsa.encrypt(data);
			rsa = null;
		} catch(e) {
		}
		return securedData;
	};
}
