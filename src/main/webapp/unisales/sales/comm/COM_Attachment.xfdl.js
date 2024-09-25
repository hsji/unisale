(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("COM_Attachment");
            this.set_scrolltype("none");
            this.set_scrollbartype("none none");
            if (Form == this.constructor)
            {
                this._setFormPosition(496,310);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_CD_NEXT_FILE_TYPE", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_File", this);
            obj.getSetter("firefirstcount").set("0");
            obj.set_useclientlayout("false");
            obj.set_updatecontrol("true");
            obj.set_enableevent("true");
            obj.set_loadkeymode("keep");
            obj.set_loadfiltermode("keep");
            obj.set_reversesubsum("false");
            obj._setContents("<ColumnInfo><Column id=\"CHK\" type=\"string\" size=\"255\"/><Column id=\"SOURCE_CD\" type=\"string\" size=\"255\"/><Column id=\"SOURCE_SEQ\" type=\"string\" size=\"255\"/><Column id=\"STATUS_CD\" type=\"string\" size=\"255\"/><Column id=\"FM_SEQ\" type=\"string\" size=\"255\"/><Column id=\"FILE_TYPE\" type=\"string\" size=\"255\"/><Column id=\"FILE_NAME\" type=\"string\" size=\"255\"/><Column id=\"SAVE_FILE_NAME\" type=\"string\" size=\"255\"/><Column id=\"SAVE_PATH\" type=\"string\" size=\"255\"/><Column id=\"DEL_FLAG\" type=\"string\" size=\"255\"/><Column id=\"STATUS\" type=\"string\" size=\"255\"/><Column id=\"INSERT_EMP_NAME\" type=\"string\" size=\"255\"/><Column id=\"INSERT_DATE\" type=\"string\" size=\"255\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDownTransfer("fdtFile", this);
            obj.set_url("svcUrl::fileDownload.do");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_Multi","0","0","496","310",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_Files","0","0",null,null,"0","0",null,null,null,null,this.div_Multi.form);
            obj.set_taborder("1");
            obj.set_binddataset("ds_File");
            obj.set_autofittype("col");
            obj.set_border("1px solid #cfcfcf");
            obj.set_formatid("default");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"300\"/><Column size=\"114\"/></Columns><Rows><Row size=\"30\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"TYPE\"/><Cell col=\"1\" text=\"파일명\" TL_SEQ=\"330\"/><Cell col=\"2\" text=\"등록일\" textAlign=\"center\" TL_SEQ=\"77\"/></Band><Band id=\"body\"><Cell text=\"bind:STATUS_CD\" combodataset=\"ds_CD_NEXT_FILE_TYPE\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" displaytype=\"combotext\"/><Cell col=\"1\" text=\"bind:FILE_NAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:INSERT_DATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/></Band></Format><Format id=\"mobile\"><Columns><Column size=\"80\"/><Column size=\"300\"/></Columns><Rows><Row size=\"38\" band=\"head\"/><Row size=\"30\"/></Rows><Band id=\"head\"><Cell text=\"TYPE\"/><Cell col=\"1\" text=\"파일명\" TL_SEQ=\"330\"/></Band><Band id=\"body\"><Cell text=\"bind:STATUS_CD\" combodataset=\"ds_CD_NEXT_FILE_TYPE\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" displaytype=\"combotext\"/><Cell col=\"1\" text=\"bind:FILE_NAME\" textAlign=\"left\"/></Band></Format></Formats>");
            this.div_Multi.addChild(obj.name, obj);

            obj = new Button("btn_PopFileMM",null,"0","72","28","0",null,null,null,null,null,this.div_Multi.form);
            obj.set_taborder("0");
            obj.set_text("파일관리");
            obj.getSetter("TL_SEQ").set("328");
            this.div_Multi.addChild(obj.name, obj);

            obj = new Button("btn_PopFileMM","0","0",null,null,"0","0",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("파일등록");
            obj.set_visible("false");
            obj.getSetter("TL_SEQ").set("328");
            this.addChild(obj.name, obj);

            obj = new Div("div_Single","0","0",null,"58","0",null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_File","0","0",null,null,"0","0",null,null,null,null,this.div_Single.form);
            obj.set_taborder("0");
            obj.set_binddataset("ds_File");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"274\"/><Column size=\"99\"/></Columns><Rows><Row size=\"24\"/></Rows><Band id=\"body\"><Cell text=\"bind:FILE_NAME\" textAlign=\"left\"/><Cell col=\"1\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"expr:dataset.getRowType(currow) == 2 ? &apos;등록&apos;:&apos;삭제&apos;\"/></Band></Format></Formats>");
            this.div_Single.addChild(obj.name, obj);

            obj = new Static("Static00","519","27","186","80",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_expr("\"Single File Mode 권장사이즈\\n -width:310\\n -height:58\"");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","519","83","186","80",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_expr("\"Multi File Mode 권장사이즈\\n -width:310\\n -height:*\"");
            obj.set_visible("false");
            obj.set_text("");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_Multi.form
            obj = new Layout("default","",0,0,this.div_Multi.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grd_Files.set_taborder("1");
                p.grd_Files.set_binddataset("ds_File");
                p.grd_Files.set_autofittype("col");
                p.grd_Files.set_border("1px solid #cfcfcf");
                p.grd_Files.set_formatid("default");
                p.grd_Files.move("0","0",null,null,"0","0");

                p.btn_PopFileMM.set_taborder("0");
                p.btn_PopFileMM.set_text("파일관리");
                p.btn_PopFileMM.getSetter("TL_SEQ").set("328");
                p.btn_PopFileMM.move(null,"0","72","28","0",null);
            	}
            );
            this.div_Multi.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div_Multi.form
            obj = new Layout("portrait","",0,0,this.div_Multi.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.btn_PopFileMM.move(null,"4","80","30","4",null);

                p.grd_Files.set_formatid("mobile");
            	}
            );
            this.div_Multi.form.addLayout(obj.name, obj);
            //-- Default Layout : this.div_Single.form
            obj = new Layout("default","",0,0,this.div_Single.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.grd_File.set_taborder("0");
                p.grd_File.set_binddataset("ds_File");
                p.grd_File.set_autofittype("col");
                p.grd_File.move("0","0",null,null,"0","0");
            	}
            );
            this.div_Single.form.addLayout(obj.name, obj);

            //-- Normal Layout : this.div_Single.form
            obj = new Layout("portrait","",0,0,this.div_Single.form,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.div_Single.form.addLayout(obj.name, obj);
            //-- Default Layout : this
            obj = new Layout("default","",496,310,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_scrolltype("none");
                p.set_scrollbartype("none none");

                p.div_Multi.set_taborder("0");
                p.div_Multi.move("0","0","496","310",null,null);

                p.btn_PopFileMM.set_taborder("4");
                p.btn_PopFileMM.set_text("파일등록");
                p.btn_PopFileMM.set_visible("false");
                p.btn_PopFileMM.getSetter("TL_SEQ").set("328");
                p.btn_PopFileMM.move("0","0",null,null,"0","0");

                p.div_Single.set_taborder("1");
                p.div_Single.move("0","0",null,"58","0",null);

                p.Static00.set_taborder("2");
                p.Static00.set_expr("\"Single File Mode 권장사이즈\\n -width:310\\n -height:58\"");
                p.Static00.set_visible("false");
                p.Static00.move("519","27","186","80",null,null);

                p.Static01.set_taborder("3");
                p.Static01.set_expr("\"Multi File Mode 권장사이즈\\n -width:310\\n -height:*\"");
                p.Static01.set_visible("false");
                p.Static01.set_text("");
                p.Static01.move("519","83","186","80",null,null);
            	}
            );
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("portrait","Mobile_screen",480,310,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            obj.set_mobileorientation("portrait");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("COM_Attachment.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("COM_Attachment.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("COM_Attachment.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("COM_Attachment.xfdl","Script::CommGrid.xjs");
        this.registerScript("COM_Attachment.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분	 	: xxx
        * 02. 화면명		: xxx
        * 03. 화면설명 		: xxx
        * 04. 작성일   	: 2018.xx.xx
        * 05. 작성자   	: xxx
        * 06. 수정이력 	:
        ***********************************************************************************************
        *     수정일          이  름    사유
        ***********************************************************************************************
        *
        ************************************************************************************************/

        /************************************************************************************************
        * 공통 라이브러리 INCLUDE 영역
        ************************************************************************************************/
        this.executeIncludeScript("Script::CommSystem.xjs"); /*include "Script::CommSystem.xjs"*/;
        this.executeIncludeScript("Script::CommTrans.xjs"); /*include "Script::CommTrans.xjs"*/;
        this.executeIncludeScript("Script::CommUtil.xjs"); /*include "Script::CommUtil.xjs"*/;
        this.executeIncludeScript("Script::CommGrid.xjs"); /*include "Script::CommGrid.xjs"*/;


        /************************************************************************************************
        * 전역 변수 영역
        ************************************************************************************************/
        //옵션 기본값 정의
        this.opts = {								// 필수 / datatype / 설명
        				 BINDDATASET:null			// X / srting / 옵션값을 바인드할 데이터셋명
        				,PROJECT_CODE:null			// x / string / 링크 처리를 하기 위한 구분 값 (테이블별칭)
        				,SOURCE_CD:null				// O / string / 저장된 파일을 구분할 첫번째 키 값 (테이블별칭)
        				,SOURCE_SEQ:null			// O / string / 저장된 파일을 구분할 두번째 키 값 (테이블SEQ)
        				,SOURCE_SEQ_ORG:null		// X / string / 내부 변수
        				,STATUS_CD:null				// X / string / 저장된 파일을 구분할 세번째 키 값 (공통코드 NEXT_FILE_TYPE)

        				,USE_NEXT_FILE_TYPE:true	// X / bool / 공통코드 NEXT_FILE_TYPE을 사용할지 여부 (저장 시 사용, 조회는 STATUS_CD에 따라 다름)
        				,USE_LINK_TYPE:false		// X / bool / 링크 형태의 파일을 사용할지 여부 (구NEXT의 매출계약에서만 사용가능, 구현여부 고민필요)
        				,USE_MULTI_FILE:true		// X / bool / 다중파일 선택, 저장 가능여부
        				,USE_OPEN_ADD_DIALOG:false	// X / bool / 파일등록 팝업 시 파일선택 화면 즉시 출력여부 (동작안함)
        				,USE_DELETE_ALL:false		// X / bool / 파일등록 팝업 시 등록된 파일을 모두 삭제할지 여부 (삭제 후 저장까지 즉시처리)
        				,USE_BUTTON_ONLY:false		// X / bool / 버튼 형태로만 사용할 경우 (파일보기[n], 파일등록)
        				,USE_READONLY:false			// X / bool / 파일보기전용으로 등록버튼 안보이게 처리
        			}
        /************************************************************************************************
        * FORM 영역 EVENT 영역
        ************************************************************************************************/
        this.COM_Attachment_onload = function(obj,e)
        {
        	this.gfnCompInit(obj);  	// Grid 공통함수 호출
        	this.fnInitForm();
        };

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.grd_List_oncellclick = function(obj,e)
        {
        	var ds = obj.getBindDataset();
        	var btnNm = obj.getCellText(e.row, e.cell);

        	if(obj.name == "grd_File")
        	{
        		if(btnNm == this.gfnGetTransTxt(585,"등록"))		//등록
        		{
        			this.commUtil.popupFileMaster(this, this.opts, "fnPopupCallBack");
        		}
        		else if(btnNm == this.gfnGetTransTxt(117,"삭제"))	//단건 삭제
        		{
        			this.gfnAlert('confirm.before.filedelete',[''],"deletefile",
        			function(sPopupId, sRtn) {
        				if (this.gfnIsNull(sRtn)|| sRtn=="false"||sRtn == false) {
        					return;
        				}
        				this.opts.USE_DELETE_ALL = true;
        				this.commUtil.popupFileMaster(this, this.opts, "fnPopupCallBack");
        				delete this.opts.USE_DELETE_ALL;
        			});
        		}
        	}
        };

        this.grd_List_oncelldblclick = function(obj,e)
        {

        	this.fnFileDownload();
        };

        this.div_Multi_btn_PopFileMM_onclick = function(obj,e)
        {
        	this.commUtil.popupFileMaster(this, this.opts, "fnPopupCallBack");
        };

        /************************************************************************************************
        * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.fnInitForm = function()
        {
        	var pOpts = this.parent;

        	//팝업 기본 옵션을 파라미터로 덮어쓰기
        	for(var name in this.opts)
        	{
        		if(pOpts.hasOwnProperty(name) && !this.gfnIsEmpty(pOpts[name]))
        		{
        			var _v = pOpts[name];
        			if( _v.toLowerCase() == "true" || _v.toLowerCase() == "false" )
        			{
        				_v = nexacro._toBoolean(_v);
        			}

        			this.opts[name] = _v;
        		}
        	}

        	this.fnGetCode();
        	//스크롤바 제거
        	this.set_scrollbartype("none none");

        	//버튼 형태로만 사용할 경우
        	if(this.opts.USE_BUTTON_ONLY)
        	{
        		this.btn_PopFileMM.set_visible(true);
        		this.div_Single.set_visible(false);
        		this.div_Multi.set_visible(false);
        	}else{
        		//Multi or Single 첨부
        		if(this.opts.USE_MULTI_FILE)
        		{
        			this.div_Multi.move(0, 0, null, null, 0, 0);
        			this.div_Single.set_visible(false);
        			this.div_Multi.set_visible(true);

        			//NEXT_FILE_TYPE 미사용 시 처리
        			if(!this.opts.USE_NEXT_FILE_TYPE)
        			{
        				this.div_Multi.form.grd_Files.setFormatColProperty(0,"size",0);
        			}
        		}else{
        			this.div_Single.move(0, 0, null, null, 0, 0);
        			this.div_Multi.set_visible(false);
        			this.div_Single.set_visible(true);
        		}
        	}

        	//조회전용으로 등록버튼 안나오게
        	if(this.opts.USE_READONLY)
        		this.div_Multi.form.btn_PopFileMM.set_visible(false);

        	//var keyCols = ["SOURCE_CD","SOURCE_SEQ","STATUS_CD"];
        	var keyCols = new Array("SOURCE_SEQ", "PROJECT_CODE");
        	//DS Bind 사용 시 처리   ex) BINDDATASET : dsName ,  SOURCE_SEQ : columnName
        	if(
        		( this.opts.hasOwnProperty("BINDDATASET") && !this.gfnIsEmpty(this.opts.BINDDATASET) )//	&&
        		//( this.opts.hasOwnProperty("SOURCE_CD")   && !this.gfnIsEmpty(this.opts.SOURCE_CD)   )	&&
        		//( this.opts.hasOwnProperty("SOURCE_SEQ")  && !this.gfnIsEmpty(this.opts.SOURCE_SEQ)  )
        	 )
        	{
        		var ds = this._getDatasetObject(this.opts.BINDDATASET);
        		for(var i = 0, iL = keyCols.length; i < iL; i++)
        		{
        			if(	pOpts.hasOwnProperty(keyCols[i]) && !this.gfnIsEmpty(ds.getColumnInfo(pOpts[keyCols[i]])) )
        			{
        				if(ds.rowposition >= 0)
        				{
        					this.opts[keyCols[i]] = ds.getColumn(ds.rowposition, pOpts[keyCols[i]]);
        				}else{
        					this.opts[keyCols[i]] = "";
        				}
        			}
        		}

        		var _bindds_oncolumnchanged = function(obj, e)
        		{
        			for(var i = 0, iL = keyCols.length; i < iL; i++)
        			{
        				if(	pOpts.hasOwnProperty(keyCols[i]) && !this.gfnIsEmpty(ds.getColumnInfo(pOpts[keyCols[i]])) )
        				{
        					if(e.columnid == pOpts[keyCols[i]])
        					{
        						this.opts[keyCols[i]] = e.newvalue;
        					}
        				}else{
        					if(e.columnid == pOpts[keyCols[i]])
        					{
        						this.opts[keyCols[i]] = "";
        					}
        				}
        			}
        			if( obj.rowposition >= 0 )
        			{
        				this.fnSearch();//파일 조회
        			}
        		}
        		var _bindds_onload = function(obj, e)
        		{
        			this.ds_File.clearData();
        			for(var i = 0, iL = keyCols.length; i < iL; i++)
        			{
        				if(	pOpts.hasOwnProperty(keyCols[i]) && !this.gfnIsEmpty(ds.getColumnInfo(pOpts[keyCols[i]])) && ds.rowposition >= 0 )
        				{
        					var _val = obj.getColumn(obj.rowposition, pOpts[keyCols[i]]);
        					if(!this.gfnIsEmpty(_val))
        					{
        						this.opts[keyCols[i]] = _val;
        					}
        				}else{
        					this.opts[keyCols[i]] = "";
        				}
        			}
        			if( obj.rowposition >= 0 )
        			{
        				this.fnSearch();//파일 조회
        			}
        		}
        		var _bindds_onrowposchanged = function(obj, e)
        		{
        			for(var i = 0, iL = keyCols.length; i < iL; i++)
        			{
        				if(	!this.gfnIsEmpty(obj.getColumnInfo(pOpts[keyCols[i]])) )
        				{
        					this.opts[keyCols[i]] = obj.getColumn(e.newrow, pOpts[keyCols[i]]);
        				}
        			}
        			if( obj.rowposition >= 0 )
        			{
        				this.fnSearch();//파일 조회
        			}
        		}

        		ds.addEventHandler("oncolumnchanged", _bindds_oncolumnchanged	, this);
        		ds.addEventHandler("onload"			, _bindds_onload			, this);
        		ds.addEventHandler("onrowposchanged", _bindds_onrowposchanged	, this);

        		if( ds.rowposition >= 0 )
        		{
        			this.fnSearch();//파일 조회
        		}
        	}else{
        		this.fnSearch();
        	}
        	//컴포넌트 사이즈를 div에 맞춤
        	/*this.move(0, 0, null, null, 0, 0);
        	this.resetScroll();
        	*/
        }

        this.fnClearFile = function()
        {
        	this.ds_File.clearData();
        }

        this.fnPopupCallBack = function (sPopupId, Variant)
        {
        	console.log("COM_Attach=======",sPopupId, Variant);
        	//Variant = this.commUtil.popupReturn();
        	if (sPopupId == "popFileManager")
        	{
        		if( Variant == "DELETE ALL")
        		{
        			//삭제되었습니다
        			this.gfnAlert('msg.delete.success',[''],"delete",
        			function() {
        				this.fnSearch(true);
        			});
        			return;
        		}
        		this.fnSearch(true);
        	}
        	else if (Variant == "save")
        	{
        		this.fnSearch(true);
        	}
        };

        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fnGetCode = function()
        {
        	console.log("fnGetCode=== file", "FILE_"+this.opts.SOURCE_CD);
        	this.gfnAddCodeDataset("ds_CD_NEXT_FILE_TYPE", "FILE_"+this.opts.SOURCE_CD);
        	this.gfnCodeTransaction();
        }

        this.fnSearch = function(bForce)//bForce 키 변경여부 무시 재조회
        {
        	var args = this.opts;
        	args.DS_OUT_NAME	= "ds_File";
        	args.ARR_GRD		= null;//[this.grd_List]

        	if( this.gfnIsEmpty(args["SOURCE_CD"])
        	 || this.gfnIsEmpty(args["SOURCE_SEQ"]) )
        	{
        		this.fnClearFile();//클리어
        	}else{
        		if(bForce)
        		{
        			this.gfnGetFiles("Search",args);
        		}else{
        			if(	this.opts.SOURCE_SEQ_ORG != this.opts.SOURCE_SEQ)
        			{
        				this.gfnGetFiles("Search",args);
        			}
        		}
        	}
        }

        // 파일다운
        this.fnFileDownload = function()
        {
        	var row = this.ds_File.rowposition;
        	this.fdtFile.setPostData("FSEQ"	, this.ds_File.getColumn(row, "FILE_SEQ"));
        	this.fdtFile.setPostData("SEQ"	, this.ds_File.getColumn(row, "FM_SEQ"));
        	//this.fdtFile.set_downloadfilename(this.dsUpload.getColumn(row, "FILE_NAME"));
        	this.fdtFile.download("svcUrl::nextFileDownload.do");
        	return;

        	var nSeq = this.ds_File.getColumn(this.ds_File.rowposition, "FM_SEQ");
        	this.gfnFileDownload(nSeq);
        };

        this.fnCallBack = function(strSvcID, nErrorCode, strErrorMag)
        {
        	// 에러 예외처리
        	if(nErrorCode != 0)
        	{
        		return;
        	}
        	else
        	{
        		if(strSvcID=="Search")
        		{
        			this.opts.SOURCE_SEQ_ORG = this.opts.SOURCE_SEQ;

        			//그리드에 스크롤이 생길경우 파일등록버튼을 왼쪽으로 밀어줌
        			if(this.div_Multi.form.grd_Files.vscrollbar.trackbar.getOffsetHeight()>0)
        				this.div_Multi.form.btn_PopFileMM.set_right(20);
        			else
        				this.div_Multi.form.btn_PopFileMM.set_right(3);

        			var nFileCnt = this.ds_File.getRowCount();
        			if(this.opts.USE_BUTTON_ONLY)
        			{
        				if(nFileCnt > 0)
        				{
        					this.btn_PopFileMM.set_text(this.gfnGetTransTxt(1946,"파일보기 [@1@]",[nFileCnt]));
        				}else{
        					this.btn_PopFileMM.set_text(this.gfnGetTransTxt(328,"파일등록"));
        				}
        				this.btn_PopFileMM.set_fittocontents("none");
        				this.resetScroll();
        			}
        			if(!this.opts.USE_MULTI_FILE && nFileCnt == 0)
        			{
        				this.ds_File.addRow();
        			}
        		}
        		else if(strSvcID=="gfnGetCode")
        		{
        			//trace(this.ds_CD_NEXT_FILE_TYPE.saveXML());
        		}
        	}
        }


        this.fdtFile_onerror = function(obj,e)
        {
        	console.log("fdtFile_onerror", e);
        };

        this.fdtFile_onsuccess = function(obj,e)
        {
        	console.log("fdtFile_onsuccess", e);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.COM_Attachment_onload,this);
            this.div_Multi.form.grd_Files.addEventHandler("oncellclick",this.grd_List_oncellclick,this);
            this.div_Multi.form.grd_Files.addEventHandler("oncelldblclick",this.grd_List_oncelldblclick,this);
            this.div_Multi.form.btn_PopFileMM.addEventHandler("onclick",this.div_Multi_btn_PopFileMM_onclick,this);
            this.btn_PopFileMM.addEventHandler("onclick",this.div_Multi_btn_PopFileMM_onclick,this);
            this.div_Single.form.grd_File.addEventHandler("oncelldblclick",this.grd_List_oncelldblclick,this);
            this.div_Single.form.grd_File.addEventHandler("oncellclick",this.grd_List_oncellclick,this);
            this.ds_File.addEventHandler("onrowposchanged",this.ds_File_onrowposchanged,this);
            this.ds_File.addEventHandler("oncolumnchanged",this.ds_File_oncolumnchanged,this);
            this.ds_File.addEventHandler("onvaluechanged",this.ds_File_onvaluechanged,this);
            this.fdtFile.addEventHandler("onerror",this.fdtFile_onerror,this);
            this.fdtFile.addEventHandler("onsuccess",this.fdtFile_onsuccess,this);
        };
        this.loadIncludeScript("COM_Attachment.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
