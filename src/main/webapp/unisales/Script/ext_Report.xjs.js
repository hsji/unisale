//XJS=ext_Report.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.addIncludeScript(path,"Script::CommUtil.xjs");
        this.registerScript(path, function() {
        /*******************************************************************************************
        	FILENAME	: CommReport.xjs
        	TITLE		: 공통 Report Script
        ********************************************************************************************
        	COMMENT  	:
        	HISTORY  	: 2018/07/23
        	AUTHOR  	: 채종한
        *******************************************************************************************/
        this.executeIncludeScript("Script::CommUtil.xjs"); /*include "Script::CommUtil.xjs"*/


        this.objRtpViewer = null;
        this.arrInDataSet = new Array();
        this.arrParamData = new Array();

        var pUbiViewer = nexacro.UbiViewer.prototype;
        	pUbiViewer.resource 	= nexacro.getEnvironment().services["svcUrl"].url + "/ubi4/js";					//리포트 리소스를 담당할 URL

        this.srcUrl = nexacro.getEnvironment().services["svcUrl"].url;
        this.serverUrl = this.srcUrl + "/UbiServer";
        this.rptUrl = this.srcUrl + "/Service/Report/";
        this.rptFileName = "";

        this.gfn_SetAddInputDs = function (strSqlID, objDataset)
        {
        	/*21년 1월 패치후 스크립트로 생성한 데이터셋에 name이 없어서 공통처리*/
        	if(this.gfnIsEmpty(objDataset.name))
        		objDataset.set_name(strSqlID);
        	this.arrInDataSet.push([strSqlID, objDataset]);
        }

        this.gfn_SetAddParam = function (sDsNm, objDs)
        {
        	this.arrParamData.push([sDsNm, objDs]);
        }

        this.gfnOpenReportViewer = function (objComRptViewer, strRptFileNm, nScale)
        {
        	this.objRtpViewer = objComRptViewer;
        	var strParam = "";

        	//모바일은 툴바 제거
        	if(this.commUtil.gfnGetMobile())
        		objComRptViewer.toolbar = false;

        	if(	this.arrParamData != null)
        	{
        		for( var i = 0; i < this.arrParamData.length; i++ ) {
        			var data = this.arrParamData[i];
        			if (i == 0)	strParam = data[0] + "#" + data[1];
        			else		strParam += "#" + data[0] + "#" + data[1];
        		}
        	}
        	objComRptViewer.arg = strParam;


        	if(	this.arrInDataSet != null)
        	{
        		for( var i = 0; i < this.arrInDataSet.length; i++ ) {

        			var data = this.arrInDataSet[i];
        			objComRptViewer.setDataset(data[0], data[1]);
        		}
        	}

        	//설정 처리
        	this._setInitReport(objComRptViewer, nScale);

        	// 파일명 처리
        	objComRptViewer.jrffile = strRptFileNm;

        	// Report View 처리
        	objComRptViewer.retrieve(this, "UbiPreviewEnd");

        	/*레포트 전달 data 초기화*/
        	if(	this.arrParamData != null)
        	{
        		for( var i = 0; i < this.arrParamData.length; i++ ) {
        			this.arrParamData.pop();
        		}
        	}
        	if(	this.arrInDataSet != null)
        	{
        		var nCnt = this.arrInDataSet.length;
        		for( var i = 0; i < nCnt; i++ ) {

        			this.arrInDataSet.pop();
        		}
        	}
        }


        /**
        	* Report Viewer 처리
        	* @param {ComRpt} Report에 사용할 정보 객체
        	* @param {string} Report Viewer 종류 구분 (P:popup, W:webpage)
        	* @return N/A
        	* @example
        	* @memberOf CommReport
        **/
        this.gfnPopupReportViewer = function (strRptFileNm, strSaveFileNm, bApproval, arrParam)
        {
        	var sArgument = {pv_rptFileNm:strRptFileNm, pv_inDs:this.arrInDataSet, pv_paramDt:this.arrParamData, pv_saveFileNm:strSaveFileNm, pv_arrParam:arrParam};
        	var sPopupId = bApproval?"popApproval":"popRptViewer";
        	this.commUtil.popup(this, sPopupId, bApproval?"Common::CA_Approval.xfdl":"Common::CO_ReportViewer.xfdl", -1, -1, bApproval?1365:800, 670, true, bApproval?true:false, false, sArgument, "fnPopupCallBack");
        }

        this._setInitReport = function(objReportViewer, nScale)
        {
        	objReportViewer.ubiserverurl = this.serverUrl;	//리포트 통신을 담당할 URL
        	//objReportViewer.resource = this.resUrl;			//리포트 리소스를 담당할 URL
        	objReportViewer.reporturl = this.rptUrl;		//리포트 파일을 가져올 URL : 리포트 파일명을 제외한 디렉토리까지 정의

        	//result 디렉토리에 생성될 exportseq값
        	objReportViewer.key = this._getRandomKey();

        	//ubiservice.xml에 등록되어 있는 리소스ID
        	objReportViewer.resid = "UBIHTML";
        	if(!this.commUtil.gfnGetMobile())
        		objReportViewer.scale = "-9998";			// 쪽 맞춤 : -9999 or WholePage, 폭 맞춤 : -9998 or PageWidth
        	if(!this.gfnIsEmpty(nScale))
        		objReportViewer.scale = nScale;
        	objReportViewer.datasource = "tutorial";	// 런타임용
        }

        this._getRandomKey = function()
        {
        	var key = "";
        	var nowdate = new Date();
        	var year = nowdate.getFullYear();
        	var month = nowdate.getMonth() + 1;
        	var day = nowdate.getDate();
        	var hour = nowdate.getHours();
        	var min = nowdate.getMinutes();
        	var sec = nowdate.getSeconds();
        	var milsec = nowdate.getMilliseconds();

        	if (("" + month).length == 1) { month = "0" + month; }
        	if (("" + day).length == 1) { day = "0" + day; }
        	if (("" + hour).length == 1) { hour = "0" + hour; }
        	if (("" + min).length == 1) { min = "0" + min; }
        	if (("" + sec).length == 1) { sec = "0" + sec; }
        	key = ('' + year + month + day + hour + min + sec + milsec) + '_' + ((Math.random() *
        		   (1 << 30)).toString(16).replace('.', ''));

        	return key;
        }

        /************************************************************************************
        * 미리보기 완료 후 이벤트 처리
        ************************************************************************************/
        this.UbiPreviewEnd = function()
        {
        	// 전용뷰어 사용 기준 페이지 : 50페이지 이상이면 전용뷰어 인쇄만 활성화 됩니다.
        	var basePageNum = 50;
        	try {
        		if( basePageNum <= this.UbiViewer.getTotalPage() ) {

        			this.objRtpViewer.setEnableToolbar("PRINT_PDF", false);
        			this.objRtpViewer.setEnableToolbar("PRINT_HTML", false);
        			this.objRtpViewer.setEnableToolbar("PRINT_UBI", true);
        			this.objRtpViewer.setPluginProgress(true);
        		}
        		else {

        			this.objRtpViewer.setEnableToolbar("PRINT_PDF", true);
        			this.objRtpViewer.setEnableToolbar("PRINT_HTML", true);
        			this.objRtpViewer.setEnableToolbar("PRINT_UBI", true);
        			this.objRtpViewer.setPluginProgress(false);
        		}
        	}
        	catch (e) {}
        	if (nexacro.Browser == 'Runtime')
        		this.objRtpViewer.setPluginProgress(true);


        	this.fnRptCallBack();
        }








        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
