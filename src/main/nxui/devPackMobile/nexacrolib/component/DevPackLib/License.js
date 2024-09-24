/**
*  devPack Library
*  @FileName 	License.js 
*  @Creator 	TOBESOFT
*  @CreateDate 	2023.7.14
*  @Desction   
************** 소스 수정 이력 ***********************************************
*  date          		Modifier                Description
*******************************************************************************
* 2023.7.14				TOBESOFT				
*******************************************************************************
*/
nexacro.DpLicense="ee04388132de2aaba50ddff01b5f8e79628e76f045fdf06e0d53463f3d3dd78a";
nexacro.DpCustomer="컨설팅팀";
nexacro.DpDomain="mobiletong.tobesoft.com";
var pForm=nexacro.Form.prototype;pForm.licenseCheck=function(){if(system.navigatorname!="nexacro"){var _a=nexacro.DpDomain;var _b=window.location.hostname;var _c=_a.split(",");if(_c.indexOf(_b)>=0){var _d=new jsSHA("SHA-256","TEXT");_d.update(nexacro.DpCustomer+nexacro.DpDomain);if(nexacro.DpLicense==_d.getHash("HEX")){nexacro.DpLicense.Check=true;}}}};