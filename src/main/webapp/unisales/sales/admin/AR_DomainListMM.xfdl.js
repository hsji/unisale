(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AR_DomainListMM");
            this.set_titletext("서버 도메인 관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Domain", this);
            obj._setContents("<ColumnInfo><Column id=\"DL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DOMAIN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGE_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGE_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"USE_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SSL", this);
            obj._setContents("<ColumnInfo><Column id=\"SL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SSL_START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SSL_END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SERVER_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CERT_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_RequestStatus", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_ServerType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_CertType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SubDomain", this);
            obj._setContents("<ColumnInfo><Column id=\"SDL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SIL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SUB_DOMAIN\" type=\"STRING\" size=\"256\"/><Column id=\"USE_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"USE_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"SERVER_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"REQUEST_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_ServerList", this);
            obj._setContents("<ColumnInfo><Column id=\"SIL_SEQ\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"SERVER_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"SERVER_NAME_ALIAS\" type=\"STRING\" size=\"256\"/><Column id=\"PUBLIC_IP\" type=\"STRING\" size=\"256\"/><Column id=\"PRIVATE_IP\" type=\"STRING\" size=\"256\"/><Column id=\"USE_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"FILE_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"PLATFORM_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGE_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MAINTENANCE_FLAG\" type=\"STRING\" size=\"1\"/><Column id=\"SERVER_INFO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("div_DomainList","0","0","500","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("1px solid #c8c8c8");
            obj.set_background("linear-gradient(to bottom,#f3f3f3,#d9d9d9)");
            this.addChild(obj.name, obj);

            obj = new Static("stc_DomainList","8","4","120","20",null,null,null,null,null,null,this.div_DomainList.form);
            obj.set_taborder("0");
            obj.set_text("도메인 목록");
            obj.set_cssclass("sta_POP_GroupTit");
            this.div_DomainList.addChild(obj.name, obj);

            obj = new Button("btn_DomainAdd",null,"4","60","22","8",null,null,null,null,null,this.div_DomainList.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            this.div_DomainList.addChild(obj.name, obj);

            obj = new Grid("grd_DomainList","0","div_DomainList:0","500",null,null,"8",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_Domain");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"150\"/><Column size=\"60\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"도메인\"/><Cell col=\"1\" text=\"관리부서\"/><Cell col=\"2\" text=\"사용 여부\"/><Cell col=\"3\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:DOMAIN_NAME\" edittype=\"normal\" textAlign=\"left\" padding=\"0px 0px 0px 5px\"/><Cell col=\"1\" text=\"bind:MANAGE_DEPT_NM\" edittype=\"none\" displaytype=\"normal\" expandimage=\"url(&apos;theme://images/btn_WF_Grdexpand.png&apos;)\" expandshow=\"show\" expandsize=\"25\"/><Cell col=\"2\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\" checkboxfalsevalue=\"0\" checkboxtruevalue=\"1\" text=\"bind:USE_FLAG\"/><Cell col=\"3\" text=\"bind:REMARK\" edittype=\"normal\" textAlign=\"left\" padding=\"0px 0px 0px 5px\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_SubDomainList","div_DomainList:8","0",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("linear-gradient(to bottom,#f3f3f3,#d9d9d9)");
            obj.set_border("1px solid #c8c8c8");
            this.addChild(obj.name, obj);

            obj = new Static("stc_SubDomainList","8","4","120","20",null,null,null,null,null,null,this.div_SubDomainList.form);
            obj.set_taborder("0");
            obj.set_text("서브도메인 목록");
            obj.set_cssclass("sta_POP_GroupTit");
            this.div_SubDomainList.addChild(obj.name, obj);

            obj = new Button("btn_SubDomainAdd",null,"4","60","22","8",null,null,null,null,null,this.div_SubDomainList.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            this.div_SubDomainList.addChild(obj.name, obj);

            obj = new Grid("grd_SubDomain","grd_DomainList:8","div_SubDomainList:0",null,"48%","0",null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_SubDomain");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"150\"/><Column size=\"100\"/><Column size=\"80\"/><Column size=\"100\"/><Column size=\"100\"/><Column size=\"250\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"서버(IP)\"/><Cell col=\"1\" text=\"서브도메인\"/><Cell col=\"2\" text=\"서버 종류\"/><Cell col=\"3\" text=\"사용부서\"/><Cell col=\"4\" text=\"신청 현황\"/><Cell col=\"5\" text=\"비고\"/><Cell col=\"6\" text=\"상세정보\"/></Band><Band id=\"body\"><Cell text=\"bind:SIL_SEQ\" textAlign=\"left\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"ds_ServerList\" combocodecol=\"SIL_SEQ\" combodatacol=\"SERVER_INFO\" padding=\"0px 0px 0px 5px\"/><Cell col=\"1\" text=\"bind:SUB_DOMAIN\" textAlign=\"left\" edittype=\"none\" padding=\"0px 0px 0px 5px\"/><Cell col=\"2\" text=\"bind:SERVER_TYPE\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"ds_cmm_ServerType\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:USE_DEPT_NM\" textAlign=\"center\" displaytype=\"normal\" edittype=\"none\"/><Cell col=\"4\" text=\"bind:REQUEST_STATUS\" textAlign=\"center\" displaytype=\"combotext\" edittype=\"none\" combodataset=\"ds_cmm_RequestStatus\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/><Cell col=\"5\" text=\"bind:REMARK\" textAlign=\"left\" edittype=\"none\" padding=\"0px 0px 0px 5px\"/><Cell col=\"6\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"상세정보 수정\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_SSL_List","grd_DomainList:8","grd_SubDomain:8",null,"30","0",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_border("1px solid #c8c8c8");
            obj.set_background("linear-gradient(to bottom,#f3f3f3,#d9d9d9)");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_SSL_List","8","4","120","20",null,null,null,null,null,null,this.div_SSL_List.form);
            obj.set_taborder("0");
            obj.set_text("SSL 인증서");
            obj.set_cssclass("sta_POP_GroupTit");
            this.div_SSL_List.addChild(obj.name, obj);

            obj = new Button("btn_SSL_Add",null,"4","60","22","8",null,null,null,null,null,this.div_SSL_List.form);
            obj.set_taborder("1");
            obj.set_text("추가");
            this.div_SSL_List.addChild(obj.name, obj);

            obj = new Button("btn_SslMail",null,"4","120","22","btn_SSL_Add:8",null,null,null,null,null,this.div_SSL_List.form);
            obj.set_taborder("2");
            obj.set_text("SSL메일 일괄 전송");
            obj.set_cssclass("btn_WF_tran");
            this.div_SSL_List.addChild(obj.name, obj);

            obj = new Grid("grd_SSL_List","grd_DomainList:8","div_SSL_List:0",null,null,"0","8",null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_SSL");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"200\"/><Column size=\"200\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"서버 종류\"/><Cell col=\"1\" text=\"인증서 종류\"/><Cell col=\"2\" text=\"인증서 발급일\"/><Cell col=\"3\" text=\"인증서 만료일\"/><Cell col=\"4\" text=\"인증서\"/><Cell col=\"5\" text=\"매뉴얼\"/></Band><Band id=\"body\"><Cell text=\"bind:SERVER_TYPE\" displaytype=\"combotext\" edittype=\"combo\" combodataset=\"ds_cmm_ServerType\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/><Cell col=\"1\" text=\"bind:CERT_TYPE\" edittype=\"combo\" displaytype=\"combotext\" combodataset=\"ds_cmm_CertType\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/><Cell col=\"2\" text=\"bind:SSL_START_DATE\" displaytype=\"calendarcontrol\" edittype=\"date\"/><Cell col=\"3\" text=\"bind:SSL_END_DATE\" edittype=\"date\" displaytype=\"calendarcontrol\"/><Cell col=\"4\" displaytype=\"expr:dataset.parent.gfnIsEmpty(dataset.getColumn(currow,&quot;SL_SEQ&quot;)) == false ? &apos;buttoncontrol&apos;:&apos;normal&apos;\" edittype=\"expr:dataset.parent.gfnIsEmpty(dataset.getColumn(currow,&quot;SL_SEQ&quot;)) == false ? &apos;button&apos;:&apos;none&apos;\" text=\"expr:dataset.parent.gfnIsEmpty(dataset.getColumn(currow,&quot;SL_SEQ&quot;)) == false ? &apos;업로드&apos;:&apos;&apos;\"/><Cell col=\"5\" displaytype=\"expr:dataset.parent.gfnIsEmpty(dataset.getColumn(currow,&quot;SL_SEQ&quot;)) == false ? &apos;buttoncontrol&apos;:&apos;normal&apos;\" edittype=\"expr:dataset.parent.gfnIsEmpty(dataset.getColumn(currow,&quot;SL_SEQ&quot;)) == false ? &apos;button&apos;:&apos;none&apos;\" text=\"expr:dataset.parent.gfnIsEmpty(dataset.getColumn(currow,&quot;SL_SEQ&quot;)) == false ? &apos;업로드&apos;:&apos;&apos;\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_DomainList.form
            obj = new Layout("default","",0,0,this.div_DomainList.form,function(p){});
            this.div_DomainList.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_SubDomainList.form
            obj = new Layout("default","",0,0,this.div_SubDomainList.form,function(p){});
            this.div_SubDomainList.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_SSL_List.form
            obj = new Layout("default","",0,0,this.div_SSL_List.form,function(p){});
            this.div_SSL_List.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,560,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("AR_DomainListMM.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("AR_DomainListMM.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("AR_DomainListMM.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("AR_DomainListMM.xfdl","Script::CommGrid.xjs");
        this.registerScript("AR_DomainListMM.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 :
        * 02. 화면명   : 도메인 목록 관리(AR_DomainListMM)
        * 03. 화면설명 :
        * 04. 작성일   : 2023/12/26
        * 05. 작성자   : 이상원
        * 06. 수정이력 :
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

        /************************************************************************************************
        * FORM 영역
        ************************************************************************************************/
        this.AR_DomainMM_onload = function(obj,e)
        {
        	this.gfnAddCodeDataset("ds_cmm_ServerType", "SERVER_TYPE");
        	this.gfnAddCodeDataset("ds_cmm_CertType", "SERVER_CERT_TYPE");
        	this.gfnAddCodeDataset("ds_cmm_RequestStatus", "SERVER_REQUEST_STATUS");

        	this.gfnCodeTransaction();
        	this.fnSearchServerList();
        	this.gfnCompInit(obj);	//사용자 Grid
        };
        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fnSearch = function ()
        {
        	this.fnSearchDomainList();
        };
        //도메인 목록 조회
        this.fnSearchDomainList = function ()
        {
        	this.gfnAddOutputDataset("ds_Domain","ds_Domain");

        	this.gfnCommonTransaction("fnSearchDomainList", "AR_DomainListMM_S01");
        }
        //도메인 목록 저장
        this.fnSaveDomainList = function ()
        {
        	this.gfnAddInputDataset("ds_Domain","ds_Domain");

        	this.gfnCommonTransaction("fnSaveDomainList", "AR_DomainListMM_R01");
        };
        //서브도메인 목록 조회
        this.fnSearchSubDomainList = function ()
        {
        	this.gfnAddOutputDataset("ds_SubDomain","ds_SubDomain");

        	this.gfnCommonTransaction("fnSearchSubDomainList", "AR_SubDomainRequestPopup_S01");
        }
        //서버 목록 조회
        this.fnSearchServerList = function ()
        {
        	this.gfnAddOutputDataset("ds_ServerList","ds_ServerList");

        	this.gfnCommonTransaction("fnSearchServerList", "AR_ServerListMM_S01");
        };
        //SSL 인증서 목록 조회
        this.fnSearchSslList = function ()
        {
        	this.gfnAddOutputDataset("ds_SSL","ds_SSL");

        	this.gfnCommonTransaction("fnSearchSslList", "AR_DomainListMM_S02");
        }
        //SSL 인증서 목록 저장
        this.fnSaveSslList = function ()
        {
        	this.gfnAddInputDataset("ds_SSL","ds_SSL");

        	this.gfnCommonTransaction("fnSaveSslList", "AR_DomainListMM_R02");
        };

        this.fnGetDlSeq = function() {
        	var nDlSeq = this.ds_Domain.getColumn(this.ds_Domain.rowposition,"DL_SEQ");
        	var nRowCount = this.ds_Domain.rowcount;
        	if (nRowCount <= 0 ) {
        		this.alert("도메인을 먼저 추가해주세요.");
        		return false;
        	} else if (this.gfnIsEmpty(nDlSeq)) {
        		this.alert("도메인을 먼저 저장해주세요.");
        		return false;
        	}
        	return nDlSeq;
        }

        this.fnDomainValidation = function ()
        {
        	for(var i = 0; i < this.ds_Domain.rowcount; i++) {
        		var sDomainName = this.ds_Domain.getColumn(i,"DOMAIN_NAME");
        		var sManageDeptCd = this.ds_Domain.getColumn(i,"MANAGE_DEPT_CD");
        		var sManageDeptNm = this.ds_Domain.getColumn(i,"MANAGE_DEPT_NM");
        		var sRemark = this.ds_Domain.getColumn(i,"REMARK");
        		var sUseFlag = this.ds_Domain.getColumn(i,"USE_FLAG");

        		if(this.gfnIsEmpty(sDomainName) == true) {
        			this.alert("도메인 명을 입력해주세요.");
        			return;
        		} else if(this.gfnIsEmpty(sManageDeptCd) == true || this.gfnIsEmpty(sManageDeptNm) == true) {
        			this.alert("관리부서를 선택해주세요.");
        			return;
        		}

        		if(this.gfnIsEmpty(sRemark) == true) {
        			this.ds_Domain.setColumn(i,"REMARK","");
        		}
        		if(this.gfnIsEmpty(sUseFlag) == true) {
        			this.ds_Domain.setColumn(i,"USE_FLAG","0");
        		}
        	}
        	this.fnSaveDomainList();
        };

        this.fnCallBack = function(strSvcID, nErrorCode, strErrorMag)
        {
        	{
        		switch(strSvcID)
        		{
        			case "gfnGetCode" :
        				this.fnSearchDomainList();
        				break;
        			case "fnSearchDomainList" :
        				this.fnSearchSubDomainList();
        				this.fnSearchSslList();
        				break;
        			case "fnSearchSubDomainList" :
        				break;
        			case "fnSearchSslList" :
        				break;
        			case "fnSaveDomainList" :
        				this.fnSaveSslList();
        				break;
        			case "fnSaveSslList" :
        				this.fnSearchDomainList();
        				break;
        			default:
        				break;
        		}
        	}
        }

        this.fnPopupCallBack = function (popupId, popupArg)
        {
        	popupArg = this.commUtil.popupReturn();

        	switch(popupId)
        	{
        		case "AR_SubDomainRequestPopup" :
        			this.fnSearchDomainList();
        			break;
        		case "ManageDept_Popup":
        			var nRow = this.ds_Domain.rowposition;
        			var ds = new Dataset();
        			ds.loadXML(popupArg.toString(), true);
        			if(ds.rowcount > 0)
        			{
        				var nDeptCd = ds.getColumn(0,"DEPT_CD");
        				var nDeptName = ds.getColumn(0,"DEPT_NM");

        				this.ds_Domain.setColumn(nRow,"MANAGE_DEPT_CD",nDeptCd);
        				this.ds_Domain.setColumn(nRow,"MANAGE_DEPT_NM",nDeptName);
        			}
        		break;
        		default :
        			break;
        	}
        }

        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.ds_Domain_onrowposchanged = function(obj,e)
        {
        	this.ds_SSL.filter("DL_SEQ == '"+ this.ds_Domain.getColumn(e.newrow,"DL_SEQ")+"'");
        	this.ds_SubDomain.filter("DL_SEQ == '"+ this.ds_Domain.getColumn(e.newrow,"DL_SEQ")+"'");
        	this.ds_SubDomain.set_rowposition(0);
        };
        //서브도메인 상세정보 수정
        this.grd_SubDomain_oncellclick = function(obj,e)
        {
        	if(e.cell == 6)
        	{
        		var nSDL_SEQ = this.ds_SubDomain.getColumn(e.row,"SDL_SEQ");
        		var sArgument = {
        							SDL_SEQ : nSDL_SEQ
        						};
        		this.commUtil.popup(this, "AR_SubDomainRequestPopup", "Admin::AR_SubDomainRequestPopup.xfdl", -1, -1, 360, 520, true, false, false, sArgument, "fnPopupCallBack");

        	}
        };
        //서브 도메인 신청
        this.div_SubDomainList_btn_SubDomainAdd_onclick = function(obj,e)
        {
        	var sArgument = {};
        	this.commUtil.popup(this, "AR_SubDomainRequestPopup", "Admin::AR_SubDomainRequestPopup.xfdl", -1, -1, 360, 520, true, false, false, sArgument, "fnPopupCallBack");

        };
        //SSL목록 추가
        //기본값 : 발급일 - 오늘 / 만료일 - 1년 후
        this.div_SSL_List_btn_SSL_Add_onclick = function(obj,e)
        {
        	var nRow = this.ds_SSL.addRow();
        	var nDlSeq = this.fnGetDlSeq();
        	if(nDlSeq == false) {
        		this.ds_SSL.deleteRow(nRow);
        		return;
        	}

        	var sDate = new nexacro.Date();
        	var sStartDate = this.gfnGetDateMaskFormatString(sDate,"yyyyMMdd");
        	var sEndDate = this.gfnAddDate(this.gfnGetDateMaskFormatString(sDate,"yyyyMMdd"),365);
        	this.ds_SSL.setColumn(nRow,"DL_SEQ",nDlSeq);
        	this.ds_SSL.setColumn(nRow,"SERVER_TYPE","001");
        	this.ds_SSL.setColumn(nRow,"CERT_TYPE","001");
        	this.ds_SSL.setColumn(nRow,"SSL_START_DATE",sStartDate);
        	this.ds_SSL.setColumn(nRow,"SSL_END_DATE",sEndDate);
        };
        //도메인 목록 추가
        this.div_DomainList_btn_DomainAdd_onclick = function(obj,e)
        {
        	var nRow = this.ds_Domain.addRow();

        	this.ds_Domain.setColumn(nRow, "REMARK", "");
        	this.ds_Domain.setColumn(nRow, "USE_FLAG", 0);

        };

        this.grd_DomainList_oncellclick = function(obj,e)
        {
        	if(e.cell == 1) {
        		this.commUtil.popupOrganization(this, "ManageDept_Popup", "fnPopupCallBack", "DEPT", null, "1");
        	}
        };
        //SSL인증서 업로드
        //SLC = 인증서 / SLM = 메뉴얼
        this.grd_SSL_List_oncellclick = function(obj,e)
        {
        	var nRow = e.row;
        	var nSlSeq = this.ds_SSL.getColumn(nRow,"SL_SEQ");
        	if(this.gfnIsEmpty(nSlSeq) == true) {
        		return;
        	}

        	var sSourceCd = "";
        	var sStatusCd = "";
        	if(e.cell == 4) {
        		sSourceCd = "SLC";
        		sStatusCd = "SSL_CERT";
        	} else if(e.cell == 5) {
        		sSourceCd = "SLM"
        		sStatusCd = "SSL_MENU"
        	}
        	var args = {
        					SOURCE_CD : sSourceCd
        				   ,SOURCE_SEQ : nSlSeq
        				   ,STATUS_CD : sStatusCd
        				   ,USE_MULTI_FILE:false
        			   }
        	this.commUtil.popupFileMaster(this, args, "fnPopupCallBack");

        };
        /************************************************************************************************
        * 팝업 TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/

        /************************************************************************************************
        * 팝업 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.AR_DomainMM_onload,this);
            this.div_DomainList.form.btn_DomainAdd.addEventHandler("onclick",this.div_DomainList_btn_DomainAdd_onclick,this);
            this.grd_DomainList.addEventHandler("oncellclick",this.grd_DomainList_oncellclick,this);
            this.div_SubDomainList.form.btn_SubDomainAdd.addEventHandler("onclick",this.div_SubDomainList_btn_SubDomainAdd_onclick,this);
            this.grd_SubDomain.addEventHandler("oncellclick",this.grd_SubDomain_oncellclick,this);
            this.div_SSL_List.form.btn_SSL_Add.addEventHandler("onclick",this.div_SSL_List_btn_SSL_Add_onclick,this);
            this.grd_SSL_List.addEventHandler("oncellclick",this.grd_SSL_List_oncellclick,this);
            this.ds_Domain.addEventHandler("onrowposchanged",this.ds_Domain_onrowposchanged,this);
        };
        this.loadIncludeScript("AR_DomainListMM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
