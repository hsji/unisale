//XJS=CommTrans.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.addIncludeScript(path,"Script::CommSystem.xjs");
        this.registerScript(path, function() {
        /*******************************************************************************************
        	FILENAME	: CommTrans.xjs
        	TITLE		: 공통 통신용 Script
        ********************************************************************************************
        	COMMENT  	:
        	HISTORY  	: 2013/12/19
        	AUTHOR  	: 한상수
        *******************************************************************************************/
        this.executeIncludeScript("Script::CommSystem.xjs"); /*include "Script::CommSystem.xjs"*/;

        this.fvCommInputList = "";// next 호환처리
        /*******************************************************************************************
        	FUNCTION	: gfnGridDataClear(objGrid)
        	DESCRIPTION	: Grid Sort를 없애줌
        	PARAMETERS	:
        		- objGrid	: 대상 Grid
        	RETURN		:
        *******************************************************************************************/
        this.gfnGridDataClear = function(objGrid)
        {
        	if(!this.gfnIsEmpty(objGrid))
        	{
        		var objDataset = this.objects[objGrid.binddataset];
        		objDataset.set_enableevent(false);
        		objDataset.clearData();
        		objDataset.set_enableevent(true);
        	}
        }
        /*******************************************************************************************
        	FUNCTION	: gfnGridSortClear(objGrid)
        	DESCRIPTION	: Grid Sort를 없애줌
        	PARAMETERS	:
        		- objGrid	: 대상 Grid
        	RETURN		:
        *******************************************************************************************/
        this.gfnGridSortClear = function(objGrid)
        {
        	if(!this.gfnIsEmpty(objGrid))
        	{
        		var nCellCnt = objGrid.getCellCount("head");
        		var objDataset = this.objects[objGrid.binddataset];
        		objDataset.set_keystring("");
        		for ( var i=0 ; i<nCellCnt ; i++ )
        		{
        			this.gfnClearGridSortMark(objGrid, i);
        			//objGrid.setCellProperty("head", i, "class", "");
        		}
        	}
        }

        /*******************************************************************************************
        	FUNCTION	: gfnAddOutputDataset(strOutDS, strServerOutDS)
        	DESCRIPTION	: 조회용 application.gdsDataset(통신용 dataset)에 필요정보 셋팅
        	PARAMETERS	:
        		- strOutDS		: transaction을 처리 결과를 받을 Form의 Dataset의 ID
        		- strServerOutDS: XUP 모델의 결과를 보내주는 Model의 Dataset의 ID
        	RETURN		:
        *******************************************************************************************/
        this.gfnAddOutputDataset = function (strOutDS, strServerOutDS)
        {
        	this.gfnAddSendDataset("", "", "", strOutDS, strServerOutDS);
        }

        /*******************************************************************************************
        	FUNCTION	: gfnAddInputDataset(strInDS, strServerInDS)
        	DESCRIPTION	: 저장용 gdsDataset(통신용 dataset)에 필요정보 셋팅
        				  저장후 조회를 바로 하기 위해서는 strOutDS, strServerOutDS을 사용
        	PARAMETERS	:
        		- strDataType	: (Default : U)
        						U : 갱신된 내용만을 InputDataset으로 보냄
        						A : 모든 정보를 보냄
        						N : Delete를 제외한 Data를 Normal 상태로 보냄
        		- strInDS		: transaction을 요청할 때 입력값으로 보낼 Form의 Dataset 의 ID
        		- strServerInDS	: XUP 모델에서 입력값으로 사용될 Server Dataset 의 ID
        	RETURN		:
        *******************************************************************************************/
        this.gfnAddInputDataset = function (strInDS, strServerInDS, strDataType)
        {
        	// next 호환처리
        	this.fvCommInputList += " " + strServerInDS + "=" + strInDS + (strDataType?":"+strDataType:":U");
        	return;
        	if(strDataType==undefined)
        		strDataType="U";
        	this.gfnAddSendDataset(strDataType, strInDS, strServerInDS, "", "");
        }

        /*******************************************************************************************
        	FUNCTION	: gfnAddSendDataset(strType, strInDS, strServerInDS, [strOutDS, strServerOutDS])
        	DESCRIPTION	: gdsDataset(통신용 dataset)에 필요정보 셋팅
        	PARAMETERS	:
        		- strType	: 통신 방법 (S : 조회, T : 저장)
        		- strInDS		: transaction을 요청할 때 입력값으로 보낼 Form의 Dataset 의 ID
        		- strServerInDS	: XUP 모델에서 입력값으로 사용될 Server Dataset 의 ID

        		- strOutDS		: transaction을 처리 결과를 받을 Form의 Dataset의 ID (Default : "")
        		- strServerOutDS: XUP 모델의 결과를 보내주는 Model의 Dataset의 ID (Default : "")
        	RETURN		:
        *******************************************************************************************/
        this.gfnAddSendDataset = function (strType, strInDS, strServerInDS, strOutDS, strServerOutDS)
        {
        	if(strOutDS==undefined)
        		strOutDS="";
        	if(strServerOutDS==undefined)
        		strServerOutDS="";

        	var nRow = nexacro.getApplication().gdsDataset.addRow();
        	nexacro.getApplication().gdsDataset.setColumn(nRow, "TYPE", 	strType);
        	nexacro.getApplication().gdsDataset.setColumn(nRow, "DS_IN", strInDS);
        	nexacro.getApplication().gdsDataset.setColumn(nRow, "DS_IN_SERVER", strServerInDS);
        	nexacro.getApplication().gdsDataset.setColumn(nRow, "DS_OUT",strOutDS);
        	nexacro.getApplication().gdsDataset.setColumn(nRow, "DS_OUT_SERVER",strServerOutDS);
        }

        /*******************************************************************************************
        	FUNCTION	: gfnGlobalDataSetClear()
        	DESCRIPTION	: gdsDataset(통신용 dataset), gdsParameter(통신용 parameter)을 초기화
        	PARAMETERS	:
        	RETURN		:
        *******************************************************************************************/
        this.gfnGlobalDataSetClear = function ()
        {
        	//nexacro.getApplication().gdsDataset.clearData();
        	nexacro.getApplication().gdsParameter.clearData();
        	if(this.dsMap) {
        		this.dsMap.clearData();
        	}
        //	nexacro.getApplication().gdsGlobal.clearData();
        }


        /*******************************************************************************************
        	FUNCTION	: gfnAddSendParameter(strKey, strValue)
        	DESCRIPTION	: gdsParameter(통신용 parameter)에 필요정보 셋팅
        	PARAMETERS	:
        		- strKey	: 키
        		- strValue	: 값
        	RETURN		:
        *******************************************************************************************/
        this.gfnAddSendParameter = function (strKey, strValue)
        {
        	var gdsParameter = nexacro.getApplication().gdsParameter;
        	if(gdsParameter.getColumnInfo( strKey ) == null) {
        		gdsParameter.addColumn(strKey);
        	}
        	if(gdsParameter.rowcount == 0) {
        		gdsParameter.addRow();
        	}
        	gdsParameter.setColumn(0, strKey, strValue);
        }

        /*******************************************************************************************
        	FUNCTION	: gfnCommonTransaction(strSvcID, strModelID[, objGrid[, bAsync[, nDataType[, bCompress[, bSearchCondition[, arrRelpaceSqlWild]]]]]])
        	DESCRIPTION	: 공통 통신용 Transaction
        	PARAMETERS	:
        		- strSvcID			: transaction을 구분하기 위한 ID 값
        		- strModelID		: XUP 모델명
        		- objGrid			: Transaction시 Data를 받을 Grid (Default : null)
        							  한개일 경우 Grid, 복수개일 경우 Grid 배열
        		- bAsync			: 비동기 여부를 지정 (Default : true)
        		- nDataType			: 전송할 형태를 지정 (Default : 1)
        							  0 : XML 타입
        							  1 : Binary 타입
        							  2 : SSV 타입
        		- bCompress			: 통신시 PostData를 압축할지 여부를 지정 (Default : false)
        		- bSearchCondition	: 검색시 검색조건 저장 여부 (Default : false)
        		- arrRelpaceSqlWild : 검색시 SQL WildCard 용 Text를 치환해야 할 컴퍼넌트 배열 (Default : null)
        	RETURN		:
        *******************************************************************************************/
        this.gfnCommonTransaction = function (strSvcId, strSvcUrl, objGrid, bAsync, nDataType, bCompress, bSearchCondition, arrRelpaceSqlWild, callBackFnc)
        {
        	// 조회 대상의 그리드의 Sort mark, Data Clear 처리
        	if(objGrid instanceof Array)
        	{
        		if (objGrid.length > 0)
        		{
        			for(var i=0; i<objGrid.length; i++)
        			{
        				this.gfnGridSortClear(objGrid[i]);
        				this.gfnGridDataClear(objGrid[i]);
        			}
        		}
        	}
        	else if(objGrid instanceof Grid)
        	{
        		this.gfnGridSortClear(objGrid);
        		this.gfnGridDataClear(objGrid);
        	}

        	var outData = "";
        	if(this.dsMap) {
        		for(var i=0,len=this.dsMap.rowcount;i<len;i++)
        		{
        			if(i>0) outData += " ";
        			var dsn = this.dsMap.getColumn(i,"outds");
        			if(this.gfnIsNull(dsn)==false) {
        				outData += this.dsMap.getColumn(i,"outds") + "=" + this.dsMap.getColumn(i,"outds");
        			}
        		}
        	}

        	var inData      = "dsCond=gdsParameter dsMap=dsMap";
        	var strArg      = "";

        	// next 호환처리
        	inData = inData + this.fvCommInputList;
        	this.fvCommInputList = "";

        	if(!callBackFnc || callBackFnc == "") callBackFnc = "fnCallBack";

        	this.gfnTransaction( strSvcId , 	// transaction을 구분하기 위한 svc id값
        						strSvcUrl , 	// trabsaction을 요청할 주소
        						inData , 		// 입력값으로 보낼 dataset id , a=b형태로 실제이름과 입력이름을 매칭
        						outData , 		// 처리결과값으로 받을 dataset id, a=b형태로 실제이름과 입력이름을 매칭
        						strArg, 		// 입력갑스로 보낼 arguments, strFormData="20120607"
        						callBackFnc); 	// 통신방법 정의 [생략가능]
        	this.gfnGlobalDataSetClear();
        }

        /*******************************************************************************************
        	FUNCTION	: gfnCallBack(strSvcID, nErrorCode, strErrorMag)
        	DESCRIPTION	: 통신 CallBack 함수
        				  화면의 fnCallBack으로 넘겨준다.
        				  화면에 fnCallBack(strSvcID, nErrorCode, strErrorMag)이 있어야 한다.
        				  fnCallBack에서는 에러처리를 할 필요가 없음.
        	PARAMETERS	:
        		- strSvcID		: transaction을 구분하기 위한 ID 값
        		- nErrorCode	: 에러코드
        		- strErrorMag	: 에러메세지
        	RETURN		:
        *******************************************************************************************/
        this.gfnCallBack = function (strSvcID, nErrorCode, strErrorMsg)
        {
        	if (nErrorCode != 0)
        	{
        		this.alert(strSvcID + " 에러 \n" + nErrorCode + " : " + strErrorMsg);
        		//return;
        	}

        	/*
        	if (strSvcID == "ReceiveNo") {
        		trace("strSvcID:"+strSvcID);
        		trace(this.dsOutSmsEmpList.saveXML());
        	}
        	*/

        	// 트랜젝션 후 저장인경우 하단 Status에 트랜젝션 결과 호출
        	if(nexacro.getApplication().gstrLogin != "N")	this._gfnSetStatusMsg(strSvcID);

        	this.fnCallBack(strSvcID, nErrorCode, strErrorMsg);
        }

        this._gfnSetStatusMsg = function(strSvcID)
        {
        	if(nexacro.getApplication().apStatusFrame==undefined)
        		return;

        	var arrSvcID = String(strSvcID).split("_");

        	if(arrSvcID[arrSvcID.length-1].toString().indexOf("Save") != -1) {
        		nexacro.getApplication().apStatusFrame.form.stcMsg.set_text("정상적으로 처리 되었습니다.");
        		nexacro.getApplication().apStatusFrame.form.setTimer(0, 1000);
        	} else {
        		nexacro.getApplication().apStatusFrame.form.stcMsg.set_text("");
        		nexacro.getApplication().apStatusFrame.form.killTimer(0);
        	}
        }

        /*******************************************************************************************
        	FUNCTION	: gfnAddCodeDataset(strDataset, strCmCode[, bAll[, bCheck]])
        	DESCRIPTION	: 통신 CallBack 함수
        				  화면의 fnCallBack으로 넘겨준다.
        				  화면에 fnCallBack(strSvcID, nErrorCode, strErrorMag)이 있어야 한다.
        				  fnCallBack에서는 에러처리를 할 필요가 없음.
        	PARAMETERS	:
        		- strDataset: code 를 넣을 dataset
        		- strCmCode	: 조회할 code master
        		- bAll		: 전체 삽입여부 (Default : false)
        		- bCheck	: 체크박스용 컬럼 사용여부(Default : false)
        		- bAce		: Ace코드 조회여부(Default : false)
        		- strLanguage : 가져올 공통코드 언어 설정
        	RETURN		:
        *******************************************************************************************/
        this.gfnAddCodeDataset = function(strDataset, strCmCode, bAll, bCheck, bAce, strLanguage)
        {
        	if(bAll==undefined)
        		bAll=false;
        	if(bCheck==undefined)
        		bCheck=false;
        	if(bAce==undefined)
        		bAce=false;

        	var nRow = nexacro.getApplication().gdsCode.addRow();
        	nexacro.getApplication().gdsCode.setColumn(nRow, "DS_IN"	, strDataset);
        	nexacro.getApplication().gdsCode.setColumn(nRow, "DS_OUT", "dsOutput"+nRow);
        	nexacro.getApplication().gdsCode.setColumn(nRow, "CM_CODE", strCmCode);
        	nexacro.getApplication().gdsCode.setColumn(nRow, "ALL", bAll===true?"A":(bAll=="S"?"S":null));
        	nexacro.getApplication().gdsCode.setColumn(nRow, "CHECK", bCheck);
        	nexacro.getApplication().gdsCode.setColumn(nRow, "ACE", bAce);
        	nexacro.getApplication().gdsCode.setColumn(nRow, "LANGUAGE", "");
        	//nexacro.getApplication().gdsLanguage.getColumn(1, "strLanguageCD") //2018.12.10일 공통코드 조회문제로 수정. by ingyu
        }
        //ACE용 코드 조회
        this.gfnAddCodeDatasetACE = function(strDataset, strCmCode, bAll, bCheck)
        {
        	this.gfnAddCodeDataset(strDataset, strCmCode, bAll, bCheck, true);
        }

        /*******************************************************************************************
        	FUNCTION	: gfnCodeTransaction()
        	DESCRIPTION	: 코드조회용
        	PARAMETERS	:
        	RETURN		:
        *******************************************************************************************/
        this.gfnCodeTransaction = function()
        {
        	// devpro로 변경 8.23 hsji
        	var param = [];
        	var gdsCode = nexacro.getApplication().gdsCode;
        	for(var i=0, len=gdsCode.rowcount; i<len; i++)
        	{
        		var obj = {
        			biztype : 'Dataset',
        			code : gdsCode.getColumn(i, "CM_CODE"),
        			selecttype : gdsCode.getColumn(i, "ALL"),
        			dsname : gdsCode.getColumn(i, "DS_IN")
        		};
        		param.push(obj);
        	}
        	gdsCode.clearData();
        	this.gfnGetCommonCode(param);
        }

        /*******************************************************************************************
        	FUNCTION	: gfnGetFiles(strSvcID, dsNm, strSourceCd, strSourceSeq[, arrObj])
        	DESCRIPTION	: 파일조회
        	PARAMETERS	:
        	RETURN		:
        *******************************************************************************************/
        /*
        this.gfnGetFiles = function(strSvcID, dsNm, strSourceCd, strSourceSeq, arrObj, state)
        {
        	if(this.gfnIsEmpty(strSvcID))		return trace("서비스 ID를 지정하십시오.");
        	if(this.gfnIsEmpty(dsNm))			return trace("RETURN받을 DataSet을 지정하십시오.");
        	if(this.gfnIsEmpty(strSourceCd))	return trace("SOURCE_CD를 지정하십시오.");
        	if(this.gfnIsEmpty(strSourceSeq))	return trace("SOURCE_SEQ를 지정하십시오.");
        	if(this.gfnIsEmpty(arrObj))		arrObj = null;
        	if(this.gfnIsEmpty(state))		state = '';

        	// 조건값(Parameter) 셋팅
        	this.gfnAddSendParameter("SOURCE_CD", strSourceCd);
        	this.gfnAddSendParameter("SOURCE_SEQ", strSourceSeq);
        	this.gfnAddSendParameter("STATE_CD", state);

        	// 조회용 Output dataset 세팅
        	this.gfnAddOutputDataset(dsNm, "ds_File");
        	this.gfnCommonTransaction(strSvcID, "CF_FileMM_S02", arrObj);
        }
        */

        /*******************************************************************************************
        	FUNCTION	: gfnGetFiles(strSvcID, args)
        	DESCRIPTION	: 파일조회
        	PARAMETERS	:
        	RETURN		:
        *******************************************************************************************/
        this.gfnGetFiles = function(strSvcID, args)
        {
        	if(this.gfnIsEmpty(strSvcID))
        	{
        		return trace("서비스 ID를 지정하십시오.");
        	}

        	if(args.hasOwnProperty("DS_OUT_NAME"))
        	{
        		if(this.gfnIsEmpty(args.DS_OUT_NAME))
        		{
        			return trace("RETURN받을 DataSet을 지정하십시오.");
        		}
        	}

        	if(args.hasOwnProperty("SOURCE_CD"))
        	{
        		if(this.gfnIsEmpty(args.SOURCE_CD))
        		{
        			return trace("SOURCE_CD를 지정하십시오.");
        		}
        	}

        	if(args.hasOwnProperty("SOURCE_SEQ"))
        	{
        		if(this.gfnIsEmpty(args.SOURCE_SEQ))
        		{
        			return trace("SOURCE_SEQ를 지정하십시오.");
        		}
        	}

        	if(args.hasOwnProperty("STATUS_CD"))
        	{
        		if(this.gfnIsEmpty(args.STATUS_CD))
        		{
        			args.STATUS_CD = "";
        		}
        	}
        	if(args.hasOwnProperty("STATE"))
        	{
        		if(this.gfnIsEmpty(args.STATE))
        		{
        			args.STATE = "";
        		}
        	}

        	if(args.hasOwnProperty("ARR_GRD"))
        	{
        		if(this.gfnIsEmpty(args.ARR_GRD))
        		{
        			args.ARR_GRD = null;
        		}
        	}

        	// 조건값(Parameter) 셋팅
        	this.gfnAddSendParameter("SOURCE_CD"	, args.SOURCE_CD);
        	this.gfnAddSendParameter("SOURCE_SEQ"	, args.SOURCE_SEQ);
        	this.gfnAddSendParameter("STATUS_CD"	, args.STATUS_CD);
        	this.gfnAddSendParameter("STATE_CD"		, args.STATE);

        	// 조회용 Output dataset 세팅
        	//this.gfnAddOutputDataset(args.DS_OUT_NAME, "ds_File");
        	this.gfnSetMap("nextCommMapper", "FileList", args.DS_OUT_NAME);
        	this.gfnCommonTransaction(strSvcID, "selectNextList.do"/*"CF_NFileMM_S02"*/, args.ARR_GRD, false);
        }
        /*******************************************************************************************
        	FUNCTION	: gfnGetAceFiles(strSvcID, args)
        	DESCRIPTION	: 파일조회
        	PARAMETERS	:
        	RETURN		:
        *******************************************************************************************/
        this.gfnGetAceFiles = function(strSvcID, args)
        {
        	if(this.gfnIsEmpty(strSvcID))
        	{
        		return trace("서비스 ID를 지정하십시오.");
        	}

        	if(args.hasOwnProperty("DS_OUT_NAME"))
        	{
        		if(this.gfnIsEmpty(args.DS_OUT_NAME))
        		{
        			return trace("RETURN받을 DataSet을 지정하십시오.");
        		}
        	}

        	if(args.hasOwnProperty("SOURCE_TYPE"))
        	{
        		if(this.gfnIsEmpty(args.SOURCE_TYPE))
        		{
        			return trace("SOURCE_TYPE을 지정하십시오.");
        		}
        	}

        	if(args.hasOwnProperty("SOURCE_CODE"))
        	{
        		if(this.gfnIsEmpty(args.SOURCE_CODE))
        		{
        			return trace("SOURCE_CODE를 지정하십시오.");
        		}
        	}

        	if(args.hasOwnProperty("SOURCE_CODE1"))
        	{
        		if(this.gfnIsEmpty(args.SOURCE_CODE1))
        		{
        			args.SOURCE_CODE1 = "";
        		}
        	}

        	if(args.hasOwnProperty("RT_SEQ"))
        	{
        		if(this.gfnIsEmpty(args.RT_SEQ))
        		{
        			args.RT_SEQ = "";
        		}
        	}

        	if(args.hasOwnProperty("RTS_SEQ"))
        	{
        		if(this.gfnIsEmpty(args.RTS_SEQ))
        		{
        			args.RTS_SEQ = "";
        		}
        	}

        	if(args.hasOwnProperty("ARR_GRD"))
        	{
        		if(this.gfnIsEmpty(args.ARR_GRD))
        		{
        			args.ARR_GRD = null;
        		}
        	}

        	// 조건값(Parameter) 셋팅
        	this.gfnAddSendParameter("SOURCE_TYPE"	, args.SOURCE_TYPE);
        	this.gfnAddSendParameter("SOURCE_CODE"	, args.SOURCE_CODE);
        	this.gfnAddSendParameter("SOURCE_CODE1"	, args.SOURCE_CODE1);
        	this.gfnAddSendParameter("RTS_SEQ"		, args.RTS_SEQ);
        	this.gfnAddSendParameter("RT_SEQ"		, args.RT_SEQ);

        	// 조회용 Output dataset 세팅
        	this.gfnAddOutputDataset(args.DS_OUT_NAME, "ds_File");
        	this.gfnCommonTransaction(strSvcID, "AA_FileUpload_S03", args.ARR_GRD, false);
        }
        /*******************************************************************************************
        	FUNCTION	: gfnFileDownload(nSeq, objDown)
        	DESCRIPTION	: 파일다운로드
        	PARAMETERS	:
        	RETURN		:
        *******************************************************************************************/
        this.gfnFileDownload = function(nSeq, sAddName, sSouceCd)
        {
        	this.fdtFile.setPostData("SEQ"	, nSeq);

        	this.fdtFile.download("svcUrl::nextFileDownload.do");

        // 	if(this.gfnIsEmpty(nSeq))		return trace("파일 SEQ를 지정하십시오.");
        // 	if(this.gfnIsEmpty(sAddName))	sAddName = "";
        // 	if(this.gfnIsEmpty(sSouceCd))	sSouceCd = "";
        //
        // 	var strDownloadUrl	= "ServiceURL::FrontControllerServlet.do"
        // 						+ "?service=xupservice"
        // 						+ "&domain=NEXTp"
        // 						+ "&model=CF_NFileMM_S01"
        // 						+ "&format=xml"
        // 						+ "&version=xplatform"
        // 						+ "&param_fm_seq="+nSeq
        // 						+ "&param_request_file_name="+sAddName
        // 						+ "&param_SourceCd="+sSouceCd;
        // 	var fileDownload = new FileDownload();
        // 	fileDownload.download(strDownloadUrl);
        //
        // 	fileDownload.destroy();
        // 	fileDownload = null;
        }

        /*******************************************************************************************
        	FUNCTION	: gfnAceFileDownload(nSeq, objDown)
        	DESCRIPTION	: 파일다운로드
        	PARAMETERS	:
        	RETURN		:
        *******************************************************************************************/
        this.gfnAceFileDownload = function(nSeq, sAddName)
        {
        	if(this.gfnIsEmpty(nSeq))		return trace("파일 SEQ를 지정하십시오.");
        	if(this.gfnIsEmpty(sAddName))	sAddName = "";

        	var strDownloadUrl	= "ServiceURL::FrontControllerServlet.do"
        						+ "?service=xupservice"
        						+ "&domain=NEXTp"
        						+ "&model=AA_FileUpload_S04"
        						+ "&format=xml"
        						+ "&version=xplatform"
        						+ "&param_fm_seq="+nSeq
        						+ "&param_request_file_name="+sAddName;
        	var fileDownload = new FileDownload();
        	fileDownload.download(strDownloadUrl);

        	fileDownload.destroy();
        	fileDownload = null;
        }

        /*******************************************************************************************
        	FUNCTION	: gfnHomepageFileDownload(nSeq, objDown)
        	DESCRIPTION	: 파일다운로드
        	PARAMETERS	:
        	RETURN		:
        *******************************************************************************************/
        this.gfnHomepageFileDownload = function(nSeq, sAddName, sSouceCd)
        {
        	if(this.gfnIsEmpty(nSeq))		return trace("파일 SEQ를 지정하십시오.");
        	if(this.gfnIsEmpty(sAddName))	sAddName = "";
        	if(this.gfnIsEmpty(sSouceCd))	sSouceCd = "";

        	var strDownloadUrl	= "ServiceURL::FrontControllerServlet.do"
        						+ "?service=xupservice"
        						+ "&domain=NEXTp"
        						+ "&model=CF_HFileMM_S01"
        						+ "&format=xml"
        						+ "&version=xplatform"
        						+ "&param_fm_seq="+nSeq
        						+ "&param_request_file_name="+sAddName
        						+ "&param_SourceCd="+sSouceCd;
        	var fileDownload = new FileDownload();
        	fileDownload.download(strDownloadUrl);

        	fileDownload.destroy();
        	fileDownload = null;
        }

        /*******************************************************************************************
        	FUNCTION	: gfnFileUpload(objUpload, sSourceCd, sSourceSeq[, sStatusCd])
        	DESCRIPTION	: 파일업로드
        	PARAMETERS	:
        	RETURN		:
        *******************************************************************************************/
        this.gfnFileUpload = function(objUpload, sSourceCd, sSourceSeq, sStatusCd)
        {
        	alert("1111");
        	if(this.gfnIsEmpty(objUpload))		return trace("Upload Component를 지정하십시오.");
        	if(this.gfnIsEmpty(sSourceCd))		return trace("SOURCE_CD를 지정하십시오.");
        	if(this.gfnIsEmpty(sSourceSeq))	return trace("SOURCE_SEQ를 지정하십시오.");
        	if(this.gfnIsEmpty(sStatusCd))		sStatusCd="";

        	var strUploadUrl = 	"ServiceURL::FrontControllerServlet.do"
        					 +	"?service=xupservice"
        					 +	"&domain=NEXTp&model=CF_NFileMM_R01&format=xml&version=xplatform"
        					 +	"&param_SourceCd="			+sSourceCd
        					 +	"&param_SourceSeq="			+sSourceSeq
        					 +	"&param_StatusCd="			+sStatusCd
        					 +	"&param_LoginUserEmpNo="	+nexacro.getApplication().gdsUserInfo.getColumn(0,"EMP_NO")
        					 +	"&param_LoginUserDeptNo="	+nexacro.getApplication().gdsUserInfo.getColumn(0,"DEPT_CD");

        	return objUpload.upload(strUploadUrl);
        }

        this._getFrmSeq = function(sUserCode)
        {
        	var arrSeq = sUserCode.split(",");

        	if (arrSeq.length < 2)			{ this.alert("화면별 권한 정보를 확인 하세요(1) ["+sUserCode+"]"); return false; }
        	if (this.gfnIsEmpty(arrSeq[0]))	{ this.alert("화면별 권한 정보를 확인 하세요(2) ["+sUserCode+"]"); return false; }
        	if (this.gfnIsEmpty(arrSeq[1]))	{ this.alert("화면별 권한 정보를 확인 하세요(3) ["+sUserCode+"]"); return false; }

        	arrSeq[0] = arrSeq[0].trim();
        	arrSeq[1] = arrSeq[1].trim();
        	return arrSeq;
        }


        /*******************************************************************************************
        	FUNCTION	: gfnSendEmail(strSvcID, strSendType, strSender, strSubject, strContent[, btrHtmlFlag])
        	DESCRIPTION	: E-mail발송
        	PARAMETERS	: strSvcID (String) : 서비스ID
        				  strSendType (String) : 발신자 TYPE (SELF(login 접속자), EMP(사번에해당하는 Email주소)), APPOINT(주소 직접입력)
        				  strSender (String) :  발신자 정보
        										- strSendType("SELF"): NULL
        										- strSendType("EMP"): 사원번호
        										- strSendType("APPOINT"): Email주소


        				  strSubject (String) :  제목
        				  strContent (String) :  내용
        				  btrHtmlFlag (boolean) : HTML 사용 여부
        	RETURN		:
        	ex)	var strSvcID = "MailSend";
        		var strSubject = "메일 제목";
        		var strContent = "메일 내용";

        		this.gfnSendEmail (strSvcID, "SELF", "", strSubject, strContent);
        		this.gfnSendEmail (strSvcID, "EMP", "10020500", strSubject, strContent);
        		this.gfnSendEmail (strSvcID, "APPOINT", "aaa@tobesoft.com", strSubject, strContent);
        *******************************************************************************************/
        this.gfnSendEmail = function(strSvcID, strSendType, strSender, strSubject, strContent, btrHtmlFlag)
        {
        	var app = nexacro.getApplication();
        	if (this.gfnIsEmpty(strSendType))	{ strSendType = "SELF";	}
        	if (this.gfnIsEmpty(btrHtmlFlag))	{ btrHtmlFlag = true;	}
        	if (this.gfnIsEmpty(strSvcID))		{ this.alert("서비스 ID를 지정하십시오."); return;	}

        	// 수신 입력DS 설정
        	var _dsTo = this.objects["_dsTo"];
        	if (this.gfnIsEmpty(_dsTo)) {
        		_dsTo = new nexacro.Dataset();
        		this.addChild("_dsTo", _dsTo);
        		_dsTo.addColumn( "NAME", "string");
        		_dsTo.addColumn( "EMAIL", "string");
        	} else {
        		_dsTo.clearData();
        	}
        	this._setInputMailAddress(_dsTo, "TO");
        	if(this.gfnIsEmpty(_dsTo))	{ this.alert("수신자를 지정하십시오."); return;	}
        	if(_dsTo.getRowCount() < 1)	{ this.alert("수신자를 1명 이상 지정하십시오."); return;	}


        	// 참조 입력DS 설정
        	var _dsCc = this.objects["_dsCc"];
        	if (this.gfnIsEmpty(_dsCc)) {
        		_dsCc = new nexacro.Dataset();
        		this.addChild("_dsCc", _dsCc);
        		_dsCc.addColumn( "NAME", "string");
        		_dsCc.addColumn( "EMAIL", "string");
        	} else {
        		_dsCc.clearData();
        	}
        	this._setInputMailAddress(_dsCc, "CC");

        	// 숨은 참조 입력DS 설정
        	var _dsBcc = this.objects["_dsBcc"];
        	if (this.gfnIsEmpty(_dsBcc)) {
        		_dsBcc = new nexacro.Dataset();
        		this.addChild("_dsBcc", _dsBcc);
        		_dsBcc.addColumn( "NAME", "string");
        		_dsBcc.addColumn( "EMAIL", "string");
        	} else {
        		_dsBcc.clearData();
        	}
        	this._setInputMailAddress(_dsBcc, "BCC");


        	app.gdsEmailList.clearData(); // 설정 종료후 초기화



        	// 발신자 설정
        	var sFrom = app.gdsUserInfo.getColumn(0, "EMAIL");
        	var sFromNm = app.gdsUserInfo.getColumn(0, "EMP_NM");

        	if (strSendType == "APPOINT") {
        		sFrom = strSender;
        		sFromNm = "";
        	} else if (strSendType == "EMP") {

        		// 직원 Email 검색
        		var _dsOutFindEmp = this.objects["_dsOutFindEmp"];
        		if (this.gfnIsEmpty(_dsOutFindEmp)) {
        			_dsOutFindEmp = new nexacro.Dataset();
        			this.addChild("_dsOutFindEmp", _dsOutFindEmp);
        		}
        		_dsOutFindEmp.clearData();

        		// 조건값 셋팅
        		this.gfnAddSendParameter("EMP_NO",	strSender);

        		this.gfnAddOutputDataset("_dsOutFindEmp",	"dsOutput");
        		this.gfnCommonTransaction("FindEmpInfo", "CO_FindEmp_S01", null, false);

        		sFrom = _dsOutFindEmp.getColumn(0, "EMAIL");
        		sFromNm = _dsOutFindEmp.getColumn(0, "EMP_NAME");
        	}


        	// 메일 정보 입력 설정
        	app.gdsEmail.clearData();
        	app.gdsEmail.addRow();
        	app.gdsEmail.setColumn(0, "FROM",		sFrom);
        	app.gdsEmail.setColumn(0, "FROM_NM",	sFromNm);
        	app.gdsEmail.setColumn(0, "SUBJECT",	strSubject);
        	app.gdsEmail.setColumn(0, "CONTENT",	strContent);
        	app.gdsEmail.setColumn(0, "HTML_YN",	btrHtmlFlag);


        	// 입력용 Input Dataset 세팅
        	this.gfnAddInputDataset("_dsTo",	"dsTo","A");
        	this.gfnAddInputDataset("_dsCc",	"dsCc","A");
        	this.gfnAddInputDataset("_dsBcc", 	"dsBcc","A");
        	this.gfnAddInputDataset("gdsEmail",	"dsEmail","A");
        	this.gfnCommonTransaction(strSvcID,	"CE_EMailSend_R01");

        // trace("================================================");
        // trace("SvcID:["+strSvcID+"]   SendType:["+strSendType+"]  Sender:["+strSender+"]");
        // trace(_dsTo.saveXML());
        // trace(_dsCc.saveXML());
        // trace(_dsBcc.saveXML());
        // trace(app.gdsEmail.saveXML());
        // trace("================================================");
        }

        /*******************************************************************************************
        	FUNCTION	: _setInputMailAddress(objDs, strReceType)
        	DESCRIPTION	: E-mail발송 수신, 참조, 숨은참조 INPUT 처리용  내부함수
        	PARAMETERS	: objDs(Dataset) : INPUT용 dataset
        				  strReceType(String) : 수신(TO), 참조(CC), 숨은참조(BCC) Type
        	RETURN		:
        *******************************************************************************************/
        this._setInputMailAddress = function (objDs, strReceType)
        {
        	var app = nexacro.getApplication();
        	for (var i=0; i<app.gdsEmailList.rowcount; i++) {
        		var sType = app.gdsEmailList.getColumn(i, "TYPE");
        		if (sType == strReceType) {
        			var nAddRow = objDs.addRow();
        			objDs.setColumn(nAddRow, "NAME", app.gdsEmailList.getColumn(i, "NAME"));
        			objDs.setColumn(nAddRow, "EMAIL", app.gdsEmailList.getColumn(i, "EMAIL"));
        		}
        	}
        }


        /*******************************************************************************************
        	FUNCTION	: gfnAddEmailList(arrObjEmailInfo)
        	DESCRIPTION	: E-mail 입력 정보 추가
        	PARAMETERS	: arrayObj
        				  - arrayObj[].pvType : TO / CC / BCC
        				  - arrayObj[].pvUserKind : BASE / FORM_AUTH / GROUP / DEPT / DUTY / EMP
        				  - arrayObj[].pvUserCode : DATASET / STRING / STRING / STRING / STRING / STRING
        	RETURN		:
        	ex)
        		// BASE용 dataset
        		this.ds_selected.setColumn(0, "NAME", "홍길동");
        		this.ds_selected.setColumn(0, "EMAIL", "xxx@gamil.com");

        		var arrEmailInfo = new Array();

        		arrEmailInfo[0] = {};
        		arrEmailInfo[0].pvType = "TO";
        		arrEmailInfo[0].pvUserKind = "BASE";
        		arrEmailInfo[0].pvUserCode = this.ds_selected;

        		arrEmailInfo[1] = {};
        		arrEmailInfo[0].pvType = "TO";
        		arrEmailInfo[1].pvUserKind = "FORM_AUTH";
        		arrEmailInfo[1].pvUserCode = "261,1";

        		arrEmailInfo[2] = {};
        		arrEmailInfo[0].pvType = "CC";
        		arrEmailInfo[2].pvUserKind = "GROUP";
        		arrEmailInfo[2].pvUserCode = "166,175";

        		arrEmailInfo[3] = {};
        		arrEmailInfo[0].pvType = "CC";
        		arrEmailInfo[3].pvUserKind = "DEPT";
        		arrEmailInfo[3].pvUserCode = "I011402,I011506";

        		arrEmailInfo[4] = {};
        		arrEmailInfo[0].pvType = "BCC";
        		arrEmailInfo[4].pvUserKind = "DUTY";
        		arrEmailInfo[4].pvUserCode = "004,005";

        		arrEmailInfo[5] = {};
        		arrEmailInfo[0].pvType = "BCC";
        		arrEmailInfo[5].pvUserKind = "EMP";
        		arrEmailInfo[5].pvUserCode = "10070503,11050504";

        		gfnAddEmailList(arrEmailInfo);
        *******************************************************************************************/
        this.gfnAddEmailList = function(arrObjEmailInfo)
        {
        	if(this.gfnIsEmpty(arrObjEmailInfo)) { this.alert("메일 발수신 정보가 없습니다."); return; }

        	for (var i=0; i<arrObjEmailInfo.length; i++) {
        		// trace("==================================");
        		// trace(i+"번째");
        		// trace(arrObjEmailInfo[i].pvType);
        		// trace(arrObjEmailInfo[i].pvUserKind);
        		// trace(arrObjEmailInfo[i].pvUserCode);
        		this._setReceiveInfo("EMAIL", arrObjEmailInfo[i].pvType, arrObjEmailInfo[i].pvUserKind, arrObjEmailInfo[i].pvUserCode);
        		// trace("==================================");
        	}
        }


        this._setReceiveInfo = function (sKind, sAddrType, sUserKind, UserCode)
        {
        	var objDs;
        	if (sKind == "EMAIL") {
        		objDs = nexacro.getApplication().gdsEmailList;
        	} else if (sKind == "SMS") {
        		objDs = nexacro.getApplication().gdsSms;
        	} else if (sKind == "TALK") {
        		objDs = nexacro.getApplication().gdsAlimTalk;
        	}

        	var sInpFRM_SEQ, sInpFRMA_SEQ_IN;
        	var sOupDsId;
        	if (sUserKind == "FORM_AUTH") {
        		var arrSEQ = this._getFrmSeq(UserCode);
        		if (!arrSEQ) return

        		sInpFRM_SEQ = arrSEQ[0];
        		sInpFRMA_SEQ_IN = arrSEQ[1];
        		UserCode = "";
        		sOupDsId = "dsOutput1";
        	} else if (sUserKind == "GROUP") {
        		sOupDsId = "dsOutput2";
        	} else if (sUserKind == "DEPT") {
        		sOupDsId = "dsOutput3";
        	} else if (sUserKind == "DUTY") {
        		sOupDsId = "dsOutput4";
        	} else if (sUserKind == "EMP") {
        		sOupDsId = "dsOutput5";
        	}

        	if (sUserKind == "BASE") {
        		objParamDs = UserCode;

        		for (var i=0; i<objParamDs.rowcount; i++) {
        			var nAddRow = objDs.addRow();

        			if (sKind == "EMAIL") {
        				var sNm = objParamDs.getColumn(i, "NAME");
        				var sEmail = objParamDs.getColumn(i, "EMAIL");

        				objDs.setColumn(nAddRow, "TYPE",	sAddrType);
        				objDs.setColumn(nAddRow, "NAME",	sNm);
        				objDs.setColumn(nAddRow, "EMAIL",	sEmail);
        			} else if (sKind == "SMS") {
        				// trace("H_PHONE_NO:"+objParamDs.getColumn(i, "H_PHONE_NO"));
        				//objDs.setColumn(nAddRow, "RCV_PHN_ID",	objParamDs.getColumn(i, "H_PHONE_NO"));
        				objDs.setColumn(nAddRow, "RECV_NO",	objParamDs.getColumn(i, "H_PHONE_NO"));
        			} else if (sKind == "TALK") {
        				// trace("H_PHONE_NO:"+objParamDs.getColumn(i, "H_PHONE_NO"));
        				objDs.setColumn(nAddRow, "RECV_NO",	objParamDs.getColumn(i, "H_PHONE_NO"));
        			}
        		}
        	} else {
        		var _dsOutReceiveList = this.objects["_dsOutReceiveList"];
        		if (this.gfnIsEmpty(_dsOutReceiveList)) {
        			_dsOutReceiveList = new nexacro.Dataset();
        			this.addChild("_dsOutReceiveList", _dsOutReceiveList);
        		}

        		_dsOutReceiveList.clearData();
        		// 조건값 셋팅
        		this.gfnAddSendParameter("KIND",			sUserKind);
        		this.gfnAddSendParameter("FRM_SEQ",			sInpFRM_SEQ);
        		this.gfnAddSendParameter("FRMA_SEQ_IN", 	sInpFRMA_SEQ_IN);
        		this.gfnAddSendParameter("USER_CODE",		UserCode);

        		this.gfnAddOutputDataset("_dsOutReceiveList", sOupDsId);
        		this.gfnCommonTransaction("ToEmailAddress", "CO_FindSMSReceiveNo_S01", null, false);


        		var nRowCnt = this._dsOutReceiveList.rowcount;
        		// trace(nRowCnt+"건");
        		if (nRowCnt > 0) {
        			for (var i=0; i<nRowCnt; i++) {
        				var sEmpNm = _dsOutReceiveList.getColumn(i, "EMP_NAME");
        				var sEmail = _dsOutReceiveList.getColumn(i, "EMAIL");
        				var sHpTelNo = _dsOutReceiveList.getColumn(i, "HP_TEL_NO");

        				var nAddRow = objDs.addRow();
        				if (sKind == "EMAIL") {
        					objDs.setColumn(nAddRow, "TYPE", sAddrType);
        					objDs.setColumn(nAddRow, "NAME", sEmpNm);
        					objDs.setColumn(nAddRow, "EMAIL", sEmail);
        				} else if (sKind == "SMS") {
        					//objDs.setColumn(nAddRow, "RCV_PHN_ID",	sHpTelNo);
        					objDs.setColumn(nAddRow, "RECV_NO",	sHpTelNo);
        				} else if (sKind == "TALK") {
        					objDs.setColumn(nAddRow, "RECV_NO",	sHpTelNo);
        				}
        			}
        		}
        	}


        }





        /*******************************************************************************************
        	FUNCTION	: gfnSendMessage()
        	DESCRIPTION	: 메신저로 쪽지 발송
        	PARAMETERS	:
        	RETURN		:
        *******************************************************************************************/
        this.gfnSendMessage = function()
        {

        }

        /*******************************************************************************************
        	FUNCTION	: gfnAddSendSms(arrObjEmailInfo)
        	DESCRIPTION	: SMS 입력정보 추가
        	PARAMETERS	: 	PARAMETERS	: arrayObj
        				  - arrayObj[].pvUserKind : BASE / FORM_AUTH / GROUP / DEPT / DUTY / EMP
        				  - arrayObj[].pvUserCode : DATASET / STRING / STRING / STRING / STRING / STRING
        	RETURN
        	ex) // BASE용 dataset
        		this.ds_selected.setColumn(0, "H_PHONE_NO", "010-1111-0000");

        		var arrSmsInfo = new Array();

        		arrSmsInfo[0] = {};
        		arrSmsInfo[0].pvUserKind = "BASE";
        		arrSmsInfo[0].pvUserCode = this.ds_selected;

        		arrSmsInfo[1] = {};
        		arrSmsInfo[1].pvUserKind = "FORM_AUTH";
        		arrSmsInfo[1].pvUserCode = "261,1";

        		arrSmsInfo[2] = {};
        		arrSmsInfo[2].pvUserKind = "GROUP";
        		arrSmsInfo[2].pvUserCode = "166,175";

        		arrSmsInfo[3] = {};
        		arrSmsInfo[3].pvUserKind = "DEPT";
        		arrSmsInfo[3].pvUserCode = "I011402,I011506";

        		arrSmsInfo[4] = {};
        		arrSmsInfo[4].pvUserKind = "DUTY";
        		arrSmsInfo[4].pvUserCode = "004,005";

        		arrSmsInfo[5] = {};
        		arrSmsInfo[5].pvUserKind = "EMP";
        		arrSmsInfo[5].pvUserCode = "10070503,11050504";
        		this.gfnAddSmsList(arrSmsInfo);
        *******************************************************************************************/
        this.gfnAddSmsList = function(arrObjEmailInfo)
        {
        	for (var i=0; i<arrObjEmailInfo.length; i++) {
        		// trace("==================================");
        		// trace(i+"번째");
        		// trace(arrObjEmailInfo[i].pvType);
        		// trace(arrObjEmailInfo[i].pvUserKind);
        		// trace(arrObjEmailInfo[i].pvUserCode);
        		this._setReceiveInfo("SMS", "", arrObjEmailInfo[i].pvUserKind, arrObjEmailInfo[i].pvUserCode);
        		// trace("==================================");
        	}
        }

        /*******************************************************************************************
        	FUNCTION	: gfnAddAlimTalkList(arrObjEmailInfo)
        	DESCRIPTION	: AlimTalk 입력정보 추가
        	PARAMETERS	: 	PARAMETERS	: arrayObj
        				  - arrayObj[].pvUserKind : BASE / FORM_AUTH / GROUP / DEPT / DUTY / EMP
        				  - arrayObj[].pvUserCode : DATASET / STRING / STRING / STRING / STRING / STRING
        	RETURN
        	ex) // BASE용 dataset
        		this.ds_selected.setColumn(0, "H_PHONE_NO", "010-1111-0000");

        		var arrSmsInfo = new Array();

        		arrSmsInfo[0] = {};
        		arrSmsInfo[0].pvUserKind = "BASE";
        		arrSmsInfo[0].pvUserCode = this.ds_selected;

        		arrSmsInfo[1] = {};
        		arrSmsInfo[1].pvUserKind = "FORM_AUTH";
        		arrSmsInfo[1].pvUserCode = "261,1";

        		arrSmsInfo[2] = {};
        		arrSmsInfo[2].pvUserKind = "GROUP";
        		arrSmsInfo[2].pvUserCode = "166,175";

        		arrSmsInfo[3] = {};
        		arrSmsInfo[3].pvUserKind = "DEPT";
        		arrSmsInfo[3].pvUserCode = "I011402,I011506";

        		arrSmsInfo[4] = {};
        		arrSmsInfo[4].pvUserKind = "DUTY";
        		arrSmsInfo[4].pvUserCode = "004,005";

        		arrSmsInfo[5] = {};
        		arrSmsInfo[5].pvUserKind = "EMP";
        		arrSmsInfo[5].pvUserCode = "10070503,11050504";
        		this.gfnAddSmsList(arrSmsInfo);
        *******************************************************************************************/
        this.gfnAddAlimTalkList = function(arrObjEmailInfo)
        {
        	for (var i=0; i<arrObjEmailInfo.length; i++) {
        		// trace("==================================");
        		// trace(i+"번째");
        		// trace(arrObjEmailInfo[i].pvType);
        		// trace(arrObjEmailInfo[i].pvUserKind);
        		// trace(arrObjEmailInfo[i].pvUserCode);
        		this._setReceiveInfo("TALK", "", arrObjEmailInfo[i].pvUserKind, arrObjEmailInfo[i].pvUserCode);
        		// trace("==================================");
        	}
        }

        /*******************************************************************************************
        	FUNCTION	: gfnSendSms(strSvcID, strSendType, strTelNoKind, strSender, sMsg, sTitle[, bReverve, sReqSendDate])
        	DESCRIPTION	: SMS 발송
        	PARAMETERS	: strSvcID (String) : 서비스ID
        				  strSendType (String) : 발신자 TYPE (
        										- SELF (login 접속자 번호)
        										- EMP (지정 사번의 번호)
        										- MAIN (대표번호)
        										- APPOINT(전화번호 직접입력)
        				  strTelNoKind (String) :  전화번호 종류
        										- M: 모바일 번호
        										- T: 내선 번호
        				  strSender (String) : 발신자번호 및 사번
        				  sMsg : 메세지 내용
        				  sTitle : 제목
        				  bReverve : 예약여부 (true/false)
        				  sReqSendDate : 예약발송시간
        	RETURN		:
        	ex)	var sMsg = "메시지 내용";
        		var sTitle = "Title";			// Title (MMS만 사용)

        		this.gfnSendSms (strSvcID, "SELF", "T", "", sMsg, sTitle);
        		this.gfnSendSms (strSvcID, "EMP", "M", "10070201", sMsg, sTitle);
        		this.gfnSendSms (strSvcID, "MAIN", "", "", sMsg, sTitle);
        		this.gfnSendSms (strSvcID, "APPOINT", "", "02-2140-7191", sMsg, sTitle);


        *******************************************************************************************/
        this.gfnSendSms = function(strSvcID, strSendType, strTelNoKind, sSender, sMsg, sTitle, bReverve, sReqSendDate)
        {
        	var app = nexacro.getApplication();
        	var sMsgType = (this.commUtil.getByteSize(sMsg) > 90) ? "MS02" : "MS01";				//  sMsgType - 메세지 타입 (MS01:SMS, MS02:LMS)
        	var msgMaxSize = 4000;
        	var titleMaxSize = 200;


        	// Title 설정
        	if (sMsgType == "MS01") {sTitle 	= "";}			// LMS만 title 사용
        	if (this.gfnIsEmpty(sTitle)) { sTitle = ""; }

        	// 예약발송 설정
        	if (this.gfnIsEmpty(bReverve) || bReverve == false) { bReverve = false;	sReqSendDate = null; }
        	if (this.gfnIsEmpty(sReqSendDate)) { bReverve = false; }

        	if (app.gdsSms.rowcount <= 0)						{ this.alert("수신번호를 지정하십시오."); return false; }
        	if (this.gfnIsEmpty(sMsg))							{ this.alert("메세지를 입력하십시오."); return false; }
        	if (bReverve == true && sReqSendDate.length != 14)		{ this.alert("예약발송 시 발송시간 입력은 필수입니다. (yyyymmddhhmmss)"); return false; }


        	// 발신번호 설정
        	var nSendTelNo = "";
        	if (strSendType == "SELF") {
        		if (strTelNoKind == "T")	nSendTelNo = app.gdsUserInfo.getColumn(0, "OFFICE");
        		else						nSendTelNo = app.gdsUserInfo.getColumn(0, "MOBILE");
        	} else if (strSendType == "EMP") {
        		// 직원 Email 검색
        		var _dsOutFindEmp = this.objects["_dsOutFindEmp"];
        		if (this.gfnIsEmpty(_dsOutFindEmp)) {
        			_dsOutFindEmp = new nexacro.Dataset();
        			this.addChild("_dsOutFindEmp", _dsOutFindEmp);
        		}
        		_dsOutFindEmp.clearData();

        		// 조건값 셋팅
        		this.gfnAddSendParameter("EMP_NO",	sSender);
        		this.gfnAddOutputDataset("_dsOutFindEmp",	"dsOutput");
        		this.gfnCommonTransaction("FindEmpInfo", "CO_FindEmp_S01", null, false);

        		if (strTelNoKind == "T")	nSendTelNo = _dsOutFindEmp.getColumn(0, "OFFICE_TEL_NO");
        		else						nSendTelNo = _dsOutFindEmp.getColumn(0, "HP_TEL_NO");
        	} else if (strSendType == "MAIN") {
        		nSendTelNo = "02-2140-7700";
        	} else if (strSendType == "APPOINT") {
        		nSendTelNo = sSender;
        	} else {
        		if (strTelNoKind == "T")	nSendTelNo = app.gdsUserInfo.getColumn(0, "OFFICE");
        		else						nSendTelNo = app.gdsUserInfo.getColumn(0, "MOBILE");
        	}
        	if (this.gfnIsEmpty(nSendTelNo))	{ this.alert("발신번호를 지정하십시오."); return false; }


        	// MMS 설정
        	if (sMsgType == "MS02") {
        		if (this.gfnIsEmpty(sTitle)) sTitle = "제목없음";

        		if (this.commUtil.getByteSize(sTitle) > titleMaxSize)	{ this.alert("제목은 " + titleMaxSize + " byte를 초과할 수 없습니다."); return false; }
        		if (this.commUtil.getByteSize(sMsg) > msgMaxSize)		{ this.alert("LMS 타입의 메세지는 " + msgMaxSize + " byte를 초과할 수 없습니다."); return false; }
        	}

        	// SMS 발송 정보 설정 (수신번호는 gfnAddSms()를 통해 입력함)
        	for (var i=0; i<app.gdsSms.rowcount; i++) {
        		app.gdsSms.setColumn(i, "MSG_TITLE",	sTitle);						// 제목(LMS만)
        		app.gdsSms.setColumn(i, "MSG_CONT",		sMsg);							// 메시지
        		app.gdsSms.setColumn(i, "MSG_TYPE",		sMsgType);						// 메세지 타입 (MS01:SMS, MS02:LMS)
        		app.gdsSms.setColumn(i, "CALL_NO",		nSendTelNo);					// 발신자
        		app.gdsSms.setColumn(i, "REQ_SEND_DATE",sReqSendDate);					// 발송시각( 미래시간인 경우 예약발송)
        		app.gdsSms.setColumn(i, "REGR_ID",		app.gdsUserInfo.getColumn(0, "EMP_NO"));// 등록자

        // 		app.gdsSms.setColumn(i, "CMP_USR_ID",	sMsgType=="A"?"00000":"LMS01");
        // 		app.gdsSms.setColumn(i, "MSG_GB",		sMsgType);						// 메세지 타입 (A:SMS, M:MMS)
        // 		app.gdsSms.setColumn(i, "SND_DTTM",		sSendDttm);						// 예약발송시간
        // 		app.gdsSms.setColumn(i, "SND_PHN_ID",	nSendTelNo);					// 발신자
        // 		app.gdsSms.setColumn(i, "CALLBACK",		nSendTelNo);					// Callback ?
        // 		app.gdsSms.setColumn(i, "SND_MSG",		sMsg);							// 메시지
        // 		app.gdsSms.setColumn(i, "SUBJECT",		sTitle);						// 제목(MMS만)
        // 		app.gdsSms.setColumn(i, "RESERVE_YN",	bReverve==true?"Y":"N");		// 예약문자 여부
        	}

        // 	trace("================================================");
        //  	trace(nexacro.getApplication().gdsSms.saveXML());
        //  	trace("================================================");

        	if(nexacro.getApplication().gdsSms.getRowCount() > 0)
        	{
        		this.gfnAddInputDataset("gdsSms", "gdsSms");
        		this.gfnCommonTransaction(strSvcID, "CS_SMSSend_R01", null, false);
        		nexacro.getApplication().gdsSms.clearData();
        	} else {
        		trace("발송할 메세지가 없습니다.");
        	}
        }

        /*******************************************************************************************
        	FUNCTION	: gfnSendAlimTalk(strSvcID, strSendType, strTelNoKind, strSender, sMsg, sTitle, sAlimTalkService[, bReverve, reqSendDate, reqSendTime])
        	DESCRIPTION	: 알림톡 발송
        	PARAMETERS	: strSvcID (String) : 서비스ID
        				  strSendType (String) : 발신자 TYPE (
        										- SELF (login 접속자 번호)
        										- EMP (지정 사번의 번호)
        										- MAIN (대표번호)
        										- APPOINT(전화번호 직접입력)
        				  strTelNoKind (String) :  전화번호 종류
        										- M: 모바일 번호
        										- T: 내선 번호
        				  strSender (String) : 발신자번호 및 사번
        				  sMsg : 메세지 내용
        				  sTitle : 제목
        				  sAlimTalkService : 알림톡 서비스 코드(CM_CODE : ALIM_TALK_SERVICE)
        				  bReverve : 예약여부 (true/false)
        				  reqSendDate : 예약발송날짜
        				  reqSendTime : 예약발송시간
        	RETURN		:
        	ex)	var sMsg = "메시지 내용";
        		var sTitle = "Title";			// Title (MMS만 사용)

        		this.gfnSendAlimTalk (strSvcID, "SELF", "T", "", sMsg, sTitle, "알림톡 서비스 코드");
        		this.gfnSendAlimTalk (strSvcID, "EMP", "M", "10070201", sMsg, sTitle, "알림톡 서비스 코드");
        		this.gfnSendAlimTalk (strSvcID, "MAIN", "", "", sMsg, sTitle, "알림톡 서비스 코드");
        		this.gfnSendAlimTalk (strSvcID, "APPOINT", "", "02-2140-7191", sMsg, sTitle, "알림톡 서비스 코드");


        *******************************************************************************************/
        this.gfnSendAlimTalk = function(strSvcID, strSendType, strTelNoKind, sSender, sMsg, sTitle, sAlimTalkService, bReverve, reqSendDate, reqSendTime)
        {
        	var app = nexacro.getApplication();
        	var sMsgType = "KA01";				//  sMsgType - 메세지 타입 (KA01)

        	// 예약발송 설정
        	if (this.gfnIsEmpty(bReverve) || bReverve == false) { bReverve = false;	reqSendDate = null; reqSendTime = null; }
        	if (this.gfnIsEmpty(reqSendDate)) { bReverve = false; }

        	if (app.gdsAlimTalk.rowcount <= 0)						{ this.alert("수신번호를 지정하십시오."); return false; }
        	if (this.gfnIsEmpty(sMsg))							{ this.alert("메세지를 입력하십시오."); return false; }
        	if (this.gfnIsEmpty(sAlimTalkService))				{ this.alert("알림톡 서비스 코드를 입력하십시오."); return false; }
        	if (bReverve == true && reqSendDate.length != 8)		{ this.alert("예약발송 시 발송일자 입력은 필수입니다. (yyyymmdd)"); return false; }
        	if (bReverve == true && reqSendTime.length != 6)		{ this.alert("예약발송 시 발송시간 입력은 필수입니다. (hhmmss)"); return false; }


        	// 발신번호 설정
        	var nSendTelNo = "";
        	if (strSendType == "SELF") {
        		if (strTelNoKind == "T")	nSendTelNo = app.gdsUserInfo.getColumn(0, "OFFICE");
        		else						nSendTelNo = app.gdsUserInfo.getColumn(0, "MOBILE");
        	} else if (strSendType == "EMP") {
        		// 직원 Email 검색
        		var _dsOutFindEmp = this.objects["_dsOutFindEmp"];
        		if (this.gfnIsEmpty(_dsOutFindEmp)) {
        			_dsOutFindEmp = new nexacro.Dataset();
        			this.addChild("_dsOutFindEmp", _dsOutFindEmp);
        		}
        		_dsOutFindEmp.clearData();

        		// 조건값 셋팅
        		this.gfnAddSendParameter("EMP_NO",	sSender);
        		this.gfnAddOutputDataset("_dsOutFindEmp",	"dsOutput");
        		this.gfnCommonTransaction("FindEmpInfo", "CO_FindEmp_S01", null, false);

        		if (strTelNoKind == "T")	nSendTelNo = _dsOutFindEmp.getColumn(0, "OFFICE_TEL_NO");
        		else						nSendTelNo = _dsOutFindEmp.getColumn(0, "HP_TEL_NO");
        	} else if (strSendType == "MAIN") {
        		nSendTelNo = "02-2140-7700";
        	} else if (strSendType == "APPOINT") {
        		nSendTelNo = sSender;
        	} else {
        		if (strTelNoKind == "T")	nSendTelNo = app.gdsUserInfo.getColumn(0, "OFFICE");
        		else						nSendTelNo = app.gdsUserInfo.getColumn(0, "MOBILE");
        	}
        	if (this.gfnIsEmpty(nSendTelNo))	{ this.alert("발신번호를 지정하십시오."); return false; }

        	// SMS 발송 정보 설정 (수신번호는 gfnAddSms()를 통해 입력함)
        	for (var i=0; i<app.gdsAlimTalk.rowcount; i++) {
        		app.gdsAlimTalk.setColumn(i, "MSG_TYPE",			sMsgType);						//메세지타입(알림톡 : KA01)
        		app.gdsAlimTalk.setColumn(i, "TALK_MSG",			sMsg);							// 메시지
        		app.gdsAlimTalk.setColumn(i, "CALL_NO",				nSendTelNo);					// 발신자
        		if(bReverve) app.gdsAlimTalk.setColumn(i, "REQ_SEND_DATE",		reqSendDate+reqSendTime);		// 예약발송시간
        		app.gdsAlimTalk.setColumn(i, "ALIM_TALK_SERVICE",	sAlimTalkService);				// 알림톡서비스 코드
        		app.gdsAlimTalk.setColumn(i, "REGR_ID",				app.gdsUserInfo.getColumn(0, "EMP_NO"));// 등록자
        	}

        // 	trace("================================================");
        //  	trace(nexacro.getApplication().gdsAlimTalk.saveXML());
        //  	trace("================================================");

        	if(nexacro.getApplication().gdsAlimTalk.getRowCount() > 0)
        	{
        		this.gfnAddInputDataset("gdsAlimTalk", "gdsAlimTalk");
        		this.gfnCommonTransaction(strSvcID, "CS_SMSSend_R02", null, false);
        		nexacro.getApplication().gdsAlimTalk.clearData();
        	} else {
        		trace("발송할 메세지가 없습니다.");
        	}
        }

        // 검색조건 가져와서 설정 함수
        this.gfnGetCommSearchCodition = function(objForm)
        {
        	var objGDs = nexacro.getApplication().gdsSearchCondition;
        	var strDs;

        	// Runtime 분기처리
        	if(nexacro._Browser == "Runtime") {
        		//strDs = this.gfnReadFile("TOPS", "nSEARCHCONTION.xml");
        		strDs = nexacro.getApplication().getPrivateProfile("nSEARCHCONTION");
        	} else {
        		strDs = localStorage.getItem("nSEARCHCONTION");
        	}

        	if(this.gfnIsEmpty(strDs)) return;

        	objGDs.loadXML(strDs);

        	var empNo 	= nexacro.getApplication().gdsUserInfo.getColumn(0, "EMP_NO");
        	var menuId 	= objForm.getOwnerFrame().planner_bizMenuId;

        	objGDs.filter("EMP_NO=='"+empNo+"'&&FRM_SEQ=='"+menuId+"'");

        	for(var i=0;i<objGDs.rowcount;i++)
        	{
        		var objComp 	= eval(objGDs.getColumn(i, "COMP_FULLPATH"));

        		if(!this.gfnIsEmpty(objGDs.getColumn(i, "VALUE")) && !this.gfnIsUndefined(objComp)){
        			objComp.set_value(objGDs.getColumn(i, "VALUE"));
        		}
        	}
        }

        // 검색조건 저장 처리 함수
        this.gfnSetCommSearchCodition = function(objForm)
        {
        	var objGDs 	= nexacro.getApplication().gdsSearchCondition;
        	var objDs 	= objForm.objects["ds_searchCondition"];

        	if(!this.gfnIsEmpty(objDs)) {

        		// 이전에 등록된 내용 삭제
        		objGDs.filter("EMP_NO=='"+nexacro.getApplication().gdsUserInfo.getColumn(0, "EMP_NO")+"'&&FRM_SEQ=='"+objForm.getOwnerFrame().form.strMenuId+"'");
        		for(var i=objGDs.rowcount-1;i>=0;i--)
        		{
        			objGDs.deleteRow(i);
        		}
        		objGDs.filter("");

        		for(var i=0;i<objDs.rowcount;i++)
        		{
        			var objComp = eval(objDs.getColumn(i, "COMP_FULLPATH"));
        			if(!this.gfnIsEmpty(objComp)) {
        				var sVal 	= objComp.value;

        				objDs.setColumn(i, "EMP_NO", 	nexacro.getApplication().gdsUserInfo.getColumn(0, "EMP_NO"));
        				objDs.setColumn(i, "FRM_SEQ", 		objForm.getOwnerFrame().planner_bizMenuId);
        				//objDs.setColumn(i, "FRM_SEQ", 		objForm.getOwnerFrame().planner_bizMenuId);
        				objDs.setColumn(i, "VALUE", 	sVal);
        			}
        		}

        		for(var i=0;i<objDs.rowcount;i++)
        		{
        			var nRow = objGDs.addRow();
        			objGDs.setColumn(nRow, "COMP_FULLPATH", objDs.getColumn(i, "COMP_FULLPATH"));
        			objGDs.setColumn(nRow, "VALUE", 		objDs.getColumn(i, "VALUE"));
        			objGDs.setColumn(nRow, "EMP_NO", 		objDs.getColumn(i, "EMP_NO"));
        			objGDs.setColumn(nRow, "FRM_SEQ", 			objDs.getColumn(i, "FRM_SEQ"));
        		}

        		// Runtime 분기처리
        		if(nexacro._Browser == "Runtime") {
        			//this.gfnWriteFile("TOPS", "nSEARCHCONTION.xml", objGDs.saveXML());
        			nexacro.getApplication().setPrivateProfile("nSEARCHCONTION", objGDs.saveXML());
        		} else {
        			localStorage.setItem("nSEARCHCONTION", objGDs.saveXML());	//오류로 기능 보류
        		}
        	}
        }

        // 검색설정 가져와서 설정 함수
        this.gfnGetCommSearchSetting = function(objForm)
        {
        	var objGDs 		= nexacro.getApplication().gdsSearchSetting;
        	var objDs 		= objForm.objects["ds_searchSetting"];
        	var strDs;

        	// Runtime 분기처리
        	if(nexacro._Browser == "Runtime") {
        		//strDs 		= this.gfnReadFile("TOPS", "SEARCHSETTING.xml");
        		strDs 		= nexacro.getApplication().getPrivateProfile("SEARCHSETTING");
        	} else {
        		strDs 		= localStorage.getItem("SEARCHSETTING");
        	}

        	var sFormUrl 	= objForm.getOwnerFrame().formurl;
        	var sFormID 	= "";

        	if(sFormUrl == "Base::BF_BaseWorkFrame.xfdl") {
        		sFormID = objForm.getOwnerFrame().form.div_work.url;
        	} else if(sFormUrl == "Base::BF_WorkFrame.xfdl") {
        		sFormID = objForm.getOwnerFrame().form.div_work.url;
        	} else {
        		sFormID = sFormUrl;
        	}

        	if(this.gfnIsEmpty(strDs)) return;

        	objGDs.loadXML(strDs);

        	var empNo 	= nexacro.getApplication().gdsUserInfo.getColumn(0, "EMP_NO");

        	objGDs.filter("EMP_NO=='"+empNo+"'&&FORM_ID=='"+sFormID+"'");

        	for(var i=0;i<objGDs.rowcount;i++)
        	{
        		var nRow = objDs.findRow("COL_ID", objGDs.getColumn(i, "COL_ID"));
        		if(nRow != -1) {
        			objDs.setColumn(nRow, "VALUE", objGDs.getColumn(i, "VALUE"));
        		}
        	}

        	objGDs.filter("");
        }

        // 검색설정 저장 처리 함수
        this.gfnSetCommSearchSetting = function(objForm)
        {
        	var objGDs 	= nexacro.getApplication().gdsSearchSetting;
        	var objDs 	= objForm.objects["ds_searchSetting"];

        	var sFormUrl = objForm.getOwnerFrame().formurl;
        	var sFormID = "";

        	if(sFormUrl == "Base::BF_BaseWorkFrame.xfdl") {
        		sFormID = objForm.getOwnerFrame().form.div_work.url;
        	} else if(sFormUrl == "Base::BF_WorkFrame.xfdl") {
        		sFormID = objForm.getOwnerFrame().form.div_work.url;
        	} else {
        		sFormID = sFormUrl;
        	}

        	if(!this.gfnIsEmpty(objDs)) {

        		// 이전에 등록된 내용 삭제
        		objGDs.filter("EMP_NO=='"+nexacro.getApplication().gdsUserInfo.getColumn(0, "EMP_NO")+"'&&FORM_ID=='"+sFormID+"'");

        		for(var i=objGDs.rowcount-1;i>=0;i--)
        		{
        			objGDs.deleteRow(i);
        		}
        		objGDs.filter("");

        		for(var i=0;i<objDs.rowcount;i++)
        		{
        			var nRow = objGDs.addRow();
        			objGDs.setColumn(nRow, "COL_ID", 	objDs.getColumn(i, "COL_ID"));
        			objGDs.setColumn(nRow, "TITLE", 	objDs.getColumn(i, "TITLE"));
        			objGDs.setColumn(nRow, "VALUE", 	objDs.getColumn(i, "VALUE"));
        			objGDs.setColumn(nRow, "EMP_NO", 	nexacro.getApplication().gdsUserInfo.getColumn(0, "EMP_NO"));
        			objGDs.setColumn(nRow, "FORM_ID", 	sFormID);
        		}

        		// Runtime 분기처리
        		if(nexacro._Browser == "Runtime") {
        			//this.gfnWriteFile("TOPS", "SEARCHSETTING.xml", objGDs.saveXML());
        			nexacro.getApplication().setPrivateProfile("SEARCHSETTING", objGDs.saveXML());
        		} else {
        			localStorage.setItem("SEARCHSETTING", objGDs.saveXML());
        		}
        	}
        }

        // ExtCommApi 사용된 소스
        this.gfnWriteFile = function(strFilePath, strFileNm, strContents)
        {
        	var strPath = system.convertRealPath("%MYDOCUMENT%")+"\\"+strFilePath+"\\";

        	var ret;
        	ret = nexacro.getApplication().Extension._ext_getCheckDir(strPath);

        	if(ret == false)
        	{
        		ret = nexacro.getApplication().Extension._ext_getCheckDir(strPath, 1);
        	}
        	ret = nexacro.getApplication().Extension._ext_writeFile(strPath+strFileNm, strContents);

        	return ret;
        }

        // ExtCommApi 사용된 소스
        this.gfnReadFile = function(strFilePath, strFileNm)
        {
        	var strPath = system.convertRealPath("%MYDOCUMENT%")+"\\"+strFilePath+"\\";

        	var ret;
        	ret = nexacro.getApplication().Extension._ext_getCheckDir(strPath);

        	if(ret == false)
        	{
        		ret = nexacro.getApplication().Extension._ext_getCheckDir(strPath, 1);
        		ret = nexacro.getApplication().Extension._ext_writeFile(strPath+strFileNm, "");
        	}

        	var bExist = false;
        	var arrSettingRet = String(nexacro.getApplication().Extension._ext_getFileList(strPath, "F")).split(",");
        	for(var i=0;i<arrSettingRet.length;i++)
        	{
        		if(arrSettingRet[i] == strFileNm) {
        			bExist = true;
        			break;
        		}
        	}

        	if(bExist) {
        		ret = nexacro.getApplication().Extension._ext_readFile(strPath+strFileNm);
        	} else {
        		ret = nexacro.getApplication().Extension._ext_writeFile(strPath+strFileNm, "");
        	}

        	return ret;
        }

        //검색text sql wildcard 변경
        this.gfnRelpaceSqlWildcard = function(strValue)
        {
        	if(strValue != undefined){
        		if( strValue.indexOf("%") >= 0 ){
        			strValue = strValue.replace("%","[%]");
        		}
        		else if( strValue.indexOf("[") >= 0 ) {
        			strValue = strValue.replace("[","[[]");
        		}
        	}
        	return strValue;
        }

        /*
        지정된 사번의 사용자가 특정 권한을 가지고 있는지 판단
        1 권한 있음 return true;
        0 권한 없음 return false;
        */

        this.gfnGetAuthority = function(sEmpNo, sAtmSeq)
        {
        	nexacro.getApplication().gdsIsAllowed.clearData();

        	var strSvcID = "GET_IS_ALLOWED";
        	var strModelNm = "GET_IS_ALLOWED";

        	this.gfnAddSendParameter("EMPLOY_NO", sEmpNo);
        	this.gfnAddSendParameter("ATM_SEQ", sAtmSeq);
        	this.gfnAddOutputDataset("gdsIsAllowed", "dsOutput");

        	this.gfnCommonTransaction(strSvcID, strModelNm, "", false);

        	return (nexacro.getApplication().gdsIsAllowed.getColumn(0,"AUTH_VALUE") == 1?true:false);
        }

        /*******************************************************************************************
        	FUNCTION	: gfnSetGdsToday()
        	DESCRIPTION	: 2024-01-03 X-UP 오류 등의 이유로 gdsToday의 컬럼정보가 변경되었을때 gdsToday정보를 설정하는 함수
        *******************************************************************************************/
        this.gfnSetGdsToday = function ()
        {
        	nexacro.getApplication().gdsToday.set_enableevent(false);
        	var objDs = new Dataset;
        	var sDate = new nexacro.Date();
        	var sToday = this.gfnGetDateMaskFormatString(sDate, "yyyy-MM-dd");
        	var sStoday = sDate.toString().substr(0,8);
        	var sFtoday = sDate.toString().substr(0,14);

        	objDs.addColumn("TODAY", "string", 10 );
        	objDs.addColumn("STODAY", "string", 8 );
        	objDs.addColumn("FTODAY", "string", 20 );

        	objDs.clearData();
        	objDs.addRow();

        	objDs.setColumn(0,"TODAY",sToday);
        	objDs.setColumn(0,"STODAY",sStoday);
        	objDs.setColumn(0,"FTODAY",sFtoday);

        	nexacro.getApplication().gdsToday.assign(objDs);
        	nexacro.getApplication().gdsToday.set_enableevent(true);

        };










        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
