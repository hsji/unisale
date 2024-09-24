//XJS=ext_WebEditor.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        /*******************************************************************************************
        	FILENAME	: commWebEditor.xjs
        	TITLE		: 공통 웹에디터용 Script
        ********************************************************************************************
        	COMMENT  	:
        	HISTORY  	: 2013/12/27
        	AUTHOR  	: 한상수

        *******************************************************************************************/
        commWebEditor = {
        	strWebEditorURL : nexacro.getEnvironment().services["ServiceURL"].url+"SmartEditor/SmartEditor.jsp",
        	/*******************************************************************************************
        		FUNCTION	: gfnCreateWebEditor(objWB[, strHtml[, strEditorKind]])
        		DESCRIPTION	: 웹에디더 생성
        		PARAMETERS	:
        			- objWB			: WebBrowser 컴퍼넌트
        			- strHtml		: 웹에디터에 표시할 내용 (Default : "")
        			- strEditorKind : 웹에디터 종류(Default : "N")
        							  A : 전체 툴바 사용
        							  U : 최소한 툴바만 사용
        							  N : 툴바없이 웹에디터 사용
        							  V : 읽기전용
        		RETURN		:
        	*******************************************************************************************/
        	gfnCreateWebEditor : function(objWB, strHtml, strEditorKind)
        	{
        		if(strEditorKind == undefined)
        		{
        			strEditorKind = "N";
        		}
        		var strParam = "";
        		strParam = this.fnAddUrlParameter(strParam, "strEditorKind="+strEditorKind);

        		if(strHtml == undefined)
        		{
        			strHtml = "";
        		} else {
        			strParam = this.fnAddUrlParameter(strParam, "strHtml="+encodeURIComponent(strHtml));
        		}

        		var strURL = this.strWebEditorURL+strParam;
        		objWB.set_url(strURL);
        		objWB.show();
        	},

        	/*******************************************************************************************
        		FUNCTION	: gfnSetContents(objWB, strHtml)
        		DESCRIPTION	: WebEditor에 HTML을 입력하기
        		PARAMETERS	:
        			- objWB		: WebBrowser 컴퍼넌트
        			- strHtml	: 웹에디터에 표시할 내용
        		RETURN		:
        	*******************************************************************************************/
        	gfnSetContents : function(objWB, strHtml)
        	{
        		//objWB.document.getElementById("htmlArea").value = strHtml;
        		objWB.callMethod("setContents", strHtml);
        		//objWB.document.parentWindow.execScript("setContents();", "JavaScript");
        	},

        	/*******************************************************************************************
        		FUNCTION	: gfnGetContents(objWB)
        		DESCRIPTION	: WebEditor의 HTML을 가져오기
        		PARAMETERS	:
        			- objWB		: WebBrowser 컴퍼넌트
        		RETURN		:
        	*******************************************************************************************/
        	gfnGetContents : function(objWB)
        	{
        		objWB.callMethod("getContents");
        		return objWB.document.getElementById("htmlArea").value;
        	},

        	/*******************************************************************************************
        		FUNCTION	: gfnGetText(objWB)
        		DESCRIPTION	: WebEditor의 HTML을 가져오기
        		PARAMETERS	:
        			- objWB		: WebBrowser 컴퍼넌트
        		RETURN		:
        	*******************************************************************************************/
        	gfnGetText : function(objWB)
        	{
        		objWB.callMethod("getText");
        		return objWB.document.getElementById("htmlArea").value;
        	},

        	/*******************************************************************************************
        		FUNCTION	: gfnSetEditMode(objWB)
        		DESCRIPTION	: EditMode 로 변경
        		PARAMETERS	:
        			- objWB		: WebBrowser 컴퍼넌트
        		RETURN		:
        	*******************************************************************************************/
        	gfnSetEditMode : function(objWB)
        	{
        		objWB.callMethod("setEditMode");
        	},

        	/*******************************************************************************************
        		FUNCTION	: gfnSetViewMode(objWB)
        		DESCRIPTION	: ViewMode 로 변경
        		PARAMETERS	:
        			- objWB		: WebBrowser 컴퍼넌트
        		RETURN		:
        	*******************************************************************************************/
        	gfnSetViewMode : function(objWB)
        	{
        		objWB.callMethod("setViewMode");
        	},

        	fnAddUrlParameter : function(strParam, addParam)
        	{
        		if(strParam.substr(0,1) != "?")
        			strParam += "?"+addParam;
        		else
        			strParam += "&"+addParam;
        		return strParam;
        	},

        	/*******************************************************************************************
        		FUNCTION	: gfnGetRpHtmlUrl(nRpSeq, nRpSeqIn, strHtmlKind)
        		DESCRIPTION	: ViewMode 로 변경
        		PARAMETERS	:
        			- nRpSeq		: 제품요구사항 Seq
        			- nRpSeqIn		: 이력Seq (RPH_SEQ_REGISTER, RPH_SEQ_ACCEPT, RPH_SEQ_ANALYSIS, RPH_SEQ_DESIGN, RPH_SEQ_DEVELOPMENT, RPH_SEQ_EXAMINATION, RPH_SEQ_DEPLOY
        			- strHtmlKind	: DESCRIPTION or REMARK
        		RETURN		: URL
        	*******************************************************************************************/
        	gfnGetRpHtmlUrl : function(nRpSeq, nRpSeqIn, strHtmlKind)
        	{
        		return application.services["ServiceURL"].url+"Service/getRPHtml.jsp?TYPE=RP&RP_SEQ="+nRpSeq+"&RP_SEQ_IN="+nRpSeqIn+"&HTML_KIND="+strHtmlKind;
        	},

        	/*******************************************************************************************
        		FUNCTION	: gfnGetRcHtmlUrl(nRcSeq)
        		DESCRIPTION	: ViewMode 로 변경
        		PARAMETERS	:
        			- nRpSeq		: 고객요구사항 Seq
        		RETURN		: URL
        	*******************************************************************************************/
        	gfnGetRcHtmlUrl : function(nRcSeq)
        	{
        		return application.services["ServiceURL"].url+"Service/getRPHtml.jsp?TYPE=RC&RP_SEQ="+nRcSeq;
        	},

        	/*******************************************************************************************
        		FUNCTION	: gfnSetFont(sFont,nSize)
        		DESCRIPTION	: WebEditor 에 Font변경
        		PARAMETERS	:
        			- sFont		: 글꼴
        			- nSize		: 폰트사이즈
        		RETURN		:
        	*******************************************************************************************/
        	gfnSetFont : function(objWB, sFont,nSize)
        	{
        		objWB.callMethod("setFont", sFont,nSize);
        	}
        }
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
