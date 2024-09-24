(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AR_SslCertList");
            this.set_titletext("SSL 인증서 목록");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,620);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_Domain", this);
            obj._setContents("<ColumnInfo><Column id=\"DL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DOMAIN_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGE_DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MANAGE_DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/><Column id=\"USE_FLAG\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_SSL", this);
            obj._setContents("<ColumnInfo><Column id=\"SL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"DL_SEQ\" type=\"STRING\" size=\"256\"/><Column id=\"SSL_START_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SSL_END_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"SERVER_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"CERT_TYPE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_ServerType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_CertType", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_SslDomain","0","36","500",null,null,"5",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_Domain");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"200\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"일련번호\"/><Cell col=\"1\" text=\"도메인\"/><Cell col=\"2\" text=\"관리부서\"/><Cell col=\"3\" text=\"비고\"/></Band><Band id=\"body\"><Cell text=\"bind:DL_SEQ\"/><Cell col=\"1\" text=\"bind:DOMAIN_NAME\" textAlign=\"left\"/><Cell col=\"2\" text=\"bind:MANAGE_DEPT_NM\"/><Cell col=\"3\" text=\"bind:REMARK\" textAlign=\"left\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_SslCertList","grd_SslDomain:8","36",null,null,"0","5",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_SSL");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"120\"/><Column size=\"120\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"서버종류\"/><Cell col=\"1\" text=\"인증서 종류\"/><Cell col=\"2\" text=\"인증서 발급일\"/><Cell col=\"3\" text=\"인증서 만료일\"/><Cell col=\"4\" text=\"인증서\"/><Cell col=\"5\" text=\"설치 메뉴얼\"/></Band><Band id=\"body\"><Cell displaytype=\"combotext\" combodataset=\"ds_cmm_ServerType\" combocodecol=\"CODE\" combodatacol=\"CAPTION\" text=\"bind:SERVER_TYPE\"/><Cell col=\"1\" displaytype=\"combotext\" text=\"bind:CERT_TYPE\" combodataset=\"ds_cmm_CertType\" combocodecol=\"CODE\" combodatacol=\"CAPTION\"/><Cell col=\"2\" text=\"bind:SSL_START_DATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"3\" text=\"bind:SSL_END_DATE\" displaytype=\"date\" calendardateformat=\"yyyy-MM-dd\"/><Cell col=\"4\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"다운로드\"/><Cell col=\"5\" displaytype=\"buttoncontrol\" edittype=\"button\" text=\"다운로드\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("div_Domain","0","0","500","36",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("linear-gradient(to bottom,#f3f3f3,#d9d9d9)");
            obj.set_border("1px solid #c8c8c8");
            this.addChild(obj.name, obj);

            obj = new Static("stc_SslDomain","8","8","46","20",null,null,null,null,null,null,this.div_Domain.form);
            obj.set_taborder("0");
            obj.set_text("도메인");
            obj.set_cssclass("sta_POP_GroupTit");
            this.div_Domain.addChild(obj.name, obj);

            obj = new Div("div_SslCertList","div_Domain:8","0",null,"36","0",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_background("linear-gradient(to bottom,#f3f3f3,#d9d9d9)");
            obj.set_border("1px solid #c8c8c8");
            this.addChild(obj.name, obj);

            obj = new Static("stc_SslCertList","8","8","108","20",null,null,null,null,null,null,this.div_SslCertList.form);
            obj.set_taborder("0");
            obj.set_text("SSL 인증서 목록");
            obj.set_cssclass("sta_POP_GroupTit");
            this.div_SslCertList.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_Domain.form
            obj = new Layout("default","",0,0,this.div_Domain.form,function(p){});
            this.div_Domain.form.addLayout(obj.name, obj);

            //-- Default Layout : this.div_SslCertList.form
            obj = new Layout("default","",0,0,this.div_SslCertList.form,function(p){});
            this.div_SslCertList.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,620,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_Domain.form.cmb_ServerRequestStatus","value","ds_ServerRequestListSearch","REQUEST_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_Domain.form.cmb_ServerRequestDept","value","ds_ServerRequestListSearch","REQUEST_DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_SslCertList.form.cmb_ServerRequestStatus","value","ds_ServerRequestListSearch","REQUEST_STATUS");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","div_SslCertList.form.cmb_ServerRequestDept","value","ds_ServerRequestListSearch","REQUEST_DEPT_CD");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("AR_SslCertList.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("AR_SslCertList.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("AR_SslCertList.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("AR_SslCertList.xfdl","Script::CommGrid.xjs");
        this.registerScript("AR_SslCertList.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 :
        * 02. 화면명   : SSL 인증서 목록(AR_SslCertList)
        * 03. 화면설명 :
        * 04. 작성일   : 2024/01/22
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
        this.AR_SslCertList_onload = function(obj,e)
        {
        	this.gfnAddCodeDataset("ds_cmm_ServerType", "SERVER_TYPE");
        	this.gfnAddCodeDataset("ds_cmm_CertType", "SERVER_CERT_TYPE");

        	this.gfnCodeTransaction();
        	this.gfnCompInit(obj);	//사용자 Grid
        };
        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fnSearch = function ()
        {
        	this.fnSearchSslList();
        	this.fnSearchDomainList();
        };
        //도메인 목록 조회
        this.fnSearchDomainList = function ()
        {
        	this.gfnAddOutputDataset("ds_Domain","ds_Domain");

        	this.gfnCommonTransaction("fnSearchDomainList", "AR_DomainListMM_S01");
        }
        //SSL 목록 조회
        this.fnSearchSslList = function ()
        {
        	this.gfnAddOutputDataset("ds_SSL","ds_SSL");

        	this.gfnCommonTransaction("fnSearchSslList", "AR_DomainListMM_S02");
        }

        this.fnCallBack = function(strSvcID, nErrorCode, strErrorMag)
        {
        	{
        		switch(strSvcID)
        		{
        			case "gfnGetCode":
        				this.fnSearch();
        				break;
        			case "fnSearchSslList" :
        				break;
        			case "fnSearchDomainList" :
        				break;
        			default:
        				break;
        		}
        	}
        }
        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.ds_Domain_onrowposchanged = function(obj,e)
        {
        	var nDlSeq = this.ds_Domain.getColumn(e.newrow,"DL_SEQ");

        	this.ds_SSL.filter("DL_SEQ == '" + nDlSeq +"'");
        };

        //SSL 관련 파일 다운로드 팝업
        //SLC = 인증서, SLM = 메뉴얼
        this.grd_SslCertList_oncellclick = function(obj,e)
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
            this.addEventHandler("onload",this.AR_SslCertList_onload,this);
            this.grd_SslCertList.addEventHandler("oncellclick",this.grd_SslCertList_oncellclick,this);
            this.ds_Domain.addEventHandler("onrowposchanged",this.ds_Domain_onrowposchanged,this);
        };
        this.loadIncludeScript("AR_SslCertList.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
