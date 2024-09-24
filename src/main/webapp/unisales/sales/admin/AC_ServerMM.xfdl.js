(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("AC_ServerMM");
            this.set_titletext("서버점검관리");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_cmm_Server", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">ACE</Col><Col id=\"CAPTION\">ACE</Col></Row><Row><Col id=\"CODE\">GW</Col><Col id=\"CAPTION\">GROUPWARE-SUITE</Col></Row><Row><Col id=\"CODE\">PLAYNEXACRO</Col><Col id=\"CAPTION\">PLAY-NEXCRO</Col></Row><Row><Col id=\"CODE\">NEXTp</Col><Col id=\"CAPTION\">TOPS, NEXTp</Col></Row><Row><Col id=\"CODE\">DEV</Col><Col id=\"CAPTION\">DEV</Col></Row><Row><Col id=\"CODE\">DEV82</Col><Col id=\"CAPTION\">DEV82</Col></Row><Row><Col id=\"CODE\">DB</Col><Col id=\"CAPTION\">DB</Col></Row><Row><Col id=\"CODE\">CS</Col><Col id=\"CAPTION\">CS</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_CheckServerList", this);
            obj._setContents("<ColumnInfo><Column id=\"SERVER\" type=\"STRING\" size=\"256\"/><Column id=\"SYSTEM\" type=\"STRING\" size=\"256\"/><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"MONTH\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"FILE_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"OLD_PW\" type=\"STRING\" size=\"256\"/><Column id=\"NEW_PW\" type=\"STRING\" size=\"256\"/><Column id=\"REMARK\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"SERVER\">ACE</Col><Col id=\"SYSTEM\">ACE</Col><Col id=\"YEAR\">2022</Col><Col id=\"MONTH\">04</Col><Col id=\"FILE_NM\">conf.properties</Col><Col id=\"FILE_PATH\">E:\\Project\\ACE\\ACE\\WEB-INF\\conf.properties</Col><Col id=\"OLD_PW\">pwKut+qy5cC3</Col><Col id=\"NEW_PW\">E6HYNZmX10fU</Col><Col id=\"REMARK\">ace DB PW 변경</Col></Row><Row><Col id=\"SERVER\">ACE</Col><Col id=\"SYSTEM\">ACE</Col><Col id=\"YEAR\">2022</Col><Col id=\"MONTH\">04</Col><Col id=\"FILE_NM\">conf.properties</Col><Col id=\"FILE_PATH\">E:\\Project\\ACE\\ACE\\WEB-INF\\conf.properties</Col><Col id=\"OLD_PW\">wdh7zT0J+MbI</Col><Col id=\"NEW_PW\">jLCGDZEBxycX</Col><Col id=\"REMARK\">tops DB PW 변경</Col></Row><Row><Col id=\"SERVER\">ACE</Col><Col id=\"SYSTEM\">HOMPAGE</Col><Col id=\"YEAR\">2022</Col><Col id=\"MONTH\">04</Col><Col id=\"FILE_NM\">server.xml</Col><Col id=\"FILE_PATH\">E:\\HOMEPAGE_apache-tomcat-7.0.109\\conf\\server.xml</Col><Col id=\"OLD_PW\">ZuXDPjONExOw</Col><Col id=\"NEW_PW\">3om7y7OsSx33</Col><Col id=\"REMARK\">tobe_portal DB PW 변경</Col></Row><Row><Col id=\"SERVER\">ACE</Col><Col id=\"SYSTEM\">HOMPAGE</Col><Col id=\"YEAR\">2022</Col><Col id=\"MONTH\">04</Col><Col id=\"FILE_NM\">server.xml</Col><Col id=\"FILE_PATH\">E:\\HOMEPAGE_apache-tomcat-7.0.109\\conf\\server.xml</Col><Col id=\"NEW_PW\">yqW1buryULeY</Col><Col id=\"OLD_PW\">84gx9TyDtH0R</Col><Col id=\"REMARK\">NEXTp DB PW 변경</Col></Row><Row><Col id=\"SERVER\">ACE</Col><Col id=\"SYSTEM\">3rabbitz</Col><Col id=\"YEAR\">2022</Col><Col id=\"MONTH\">04</Col><Col id=\"FILE_NM\">server.xml</Col><Col id=\"FILE_PATH\">E:\\3rabbitz\\conf\\server.xml</Col><Col id=\"OLD_PW\">z7KQkSpafqLk</Col><Col id=\"NEW_PW\">OWGeg8XwkBoP</Col><Col id=\"REMARK\">3rabbitz DB PW 변경</Col></Row><Row><Col id=\"SERVER\">ACE</Col><Col id=\"SYSTEM\">3rabbitz</Col><Col id=\"YEAR\">2022</Col><Col id=\"MONTH\">04</Col><Col id=\"FILE_PATH\">E:\\3rabbitz\\tomcat\\conf\\server.xml</Col><Col id=\"FILE_NM\">server.xml</Col><Col id=\"OLD_PW\">z7KQkSpafqLk</Col><Col id=\"NEW_PW\">OWGeg8XwkBoP</Col><Col id=\"REMARK\">3rabbitz DB PW 변경</Col></Row><Row><Col id=\"SERVER\">GW</Col><Col id=\"SYSTEM\">GW</Col><Col id=\"YEAR\">2022</Col><Col id=\"MONTH\">04</Col><Col id=\"FILE_NM\">backup.bat</Col><Col id=\"FILE_PATH\">E:\\batch\\GW\\GW_backup.bat</Col><Col id=\"NEW_PW\">bGkvRm9DMXdFREsy</Col><Col id=\"OLD_PW\">eDduLzU5dTBJODRv</Col><Col id=\"REMARK\">tobeFile FTP PW 변경</Col></Row><Row><Col id=\"SYSTEM\">GW</Col><Col id=\"YEAR\">2022</Col><Col id=\"MONTH\">04</Col><Col id=\"FILE_NM\">GW_backup_used.bat</Col><Col id=\"FILE_PATH\">E:\\batch\\GW\\GW_backup_used.bat</Col><Col id=\"OLD_PW\">eDduLzU5dTBJODRv</Col><Col id=\"NEW_PW\">bGkvRm9DMXdFREsy</Col><Col id=\"REMARK\">tobeFile FTP PW 변경</Col><Col id=\"SERVER\">GW</Col></Row><Row><Col id=\"SERVER\">PLAYNEXACRO</Col><Col id=\"SYSTEM\">PLAYNEXACRO</Col><Col id=\"YEAR\">2022</Col><Col id=\"MONTH\">04</Col><Col id=\"FILE_NM\">context-datasource.xml</Col><Col id=\"FILE_PATH\">E:\\playnexacro\\apps\\webapps\\ecosys\\WEB-INF\\config\\context\\playnexacro\\context-datasource.xml</Col><Col id=\"REMARK\">X-UP PW 변경</Col></Row><Row><Col id=\"SERVER\">NEXTp</Col><Col id=\"SYSTEM\">ACEp</Col><Col id=\"YEAR\">2022</Col><Col id=\"MONTH\">04</Col><Col id=\"FILE_NM\">web.xml</Col><Col id=\"FILE_PATH\">E:\\PROJECT\\ACEp\\ROOT\\WEB-INF\\web.xml</Col><Col id=\"REMARK\">tops DB PW 변경</Col><Col id=\"OLD_PW\">wdh7zT0J+MbI</Col><Col id=\"NEW_PW\">jLCGDZEBxycX</Col></Row><Row><Col id=\"SERVER\">NEXTp</Col><Col id=\"SYSTEM\">ACEp</Col><Col id=\"YEAR\">2022</Col><Col id=\"MONTH\">04</Col><Col id=\"FILE_NM\">web.xml</Col><Col id=\"FILE_PATH\">E:\\PROJECT\\ACEp\\ROOT\\WEB-INF\\web.xml</Col><Col id=\"OLD_PW\">84gx9TyDtH0R</Col><Col id=\"NEW_PW\">yqW1buryULeY</Col><Col id=\"REMARK\">NEXTp DB PW 변경</Col></Row><Row><Col id=\"SERVER\">NEXTp</Col><Col id=\"SYSTEM\">ACEp</Col><Col id=\"YEAR\">2022</Col><Col id=\"MONTH\">04</Col><Col id=\"FILE_NM\">web.xml</Col><Col id=\"FILE_PATH\">E:\\PROJECT\\ACEp\\ROOT\\WEB-INF\\web.xml</Col><Col id=\"OLD_PW\">mgByTYktUzEH</Col><Col id=\"NEW_PW\">WcjgMdyxK1rs</Col><Col id=\"REMARK\">tmis DB PW 변경</Col></Row><Row><Col id=\"SERVER\">NEXTp</Col><Col id=\"SYSTEM\">ACEp</Col><Col id=\"YEAR\">2022</Col><Col id=\"MONTH\">04</Col><Col id=\"FILE_NM\">Next_EmailService.jsp</Col><Col id=\"FILE_PATH\">E:\\WAS\\TOPS_apache-tomcat-7.0.109\\webapps\\Module\\Next_EmailService.jsp</Col><Col id=\"REMARK\">NEXTp DB PW 변경</Col><Col id=\"OLD_PW\">84gx9TyDtH0R</Col><Col id=\"NEW_PW\">yqW1buryULeY</Col></Row><Row><Col id=\"SERVER\">NEXTp</Col><Col id=\"SYSTEM\">NEXT</Col><Col id=\"YEAR\">2022</Col><Col id=\"MONTH\">04</Col><Col id=\"FILE_NM\">web.xml</Col><Col id=\"FILE_PATH\">E:\\PROJECT\\NEXTp\\ROOT\\WEB-INF\\web.xml</Col><Col id=\"REMARK\">NEXTp DB PW 변경</Col><Col id=\"OLD_PW\">84gx9TyDtH0R</Col><Col id=\"NEW_PW\">yqW1buryULeY</Col></Row><Row><Col id=\"SERVER\">NEXTp</Col><Col id=\"SYSTEM\">NEXT</Col><Col id=\"YEAR\">2022</Col><Col id=\"MONTH\">04</Col><Col id=\"FILE_NM\">web.xml</Col><Col id=\"FILE_PATH\">E:\\PROJECT\\NEXTp\\ROOT\\WEB-INF\\web.xml</Col><Col id=\"REMARK\">tmis DB PW 변경</Col><Col id=\"OLD_PW\">mgByTYktUzEH</Col><Col id=\"NEW_PW\">WcjgMdyxK1rs</Col></Row><Row><Col id=\"SERVER\">NEXTp</Col><Col id=\"SYSTEM\">Arreo_Agent_MMS</Col><Col id=\"YEAR\">2022</Col><Col id=\"MONTH\">04</Col><Col id=\"FILE_NM\">arreo.conf</Col><Col id=\"FILE_PATH\">E:\\PROJECT\\Arreo_Agent_MMS\\conf\\arreo.conf</Col><Col id=\"OLD_PW\">JE9QDaGTPup8</Col><Col id=\"NEW_PW\">UwpBY4XotTio</Col><Col id=\"REMARK\">comm DB PW 변경</Col></Row><Row><Col id=\"SERVER\">NEXTp</Col><Col id=\"SYSTEM\">NEXT</Col><Col id=\"YEAR\">2022</Col><Col id=\"MONTH\">04</Col><Col id=\"FILE_NM\">NEXT_backup.bat</Col><Col id=\"FILE_PATH\">E:\\batch\\NEXT\\NEXT_backup.bat</Col><Col id=\"REMARK\">tobeFile FTP PW 변경</Col><Col id=\"OLD_PW\">eDduLzU5dTBJODRv</Col><Col id=\"NEW_PW\">bGkvRm9DMXdFREsy</Col></Row><Row><Col id=\"SERVER\">NEXTp</Col><Col id=\"SYSTEM\">TOPS</Col><Col id=\"YEAR\">2022</Col><Col id=\"MONTH\">04</Col><Col id=\"FILE_NM\">TOPS_backup.bat</Col><Col id=\"FILE_PATH\">E:\\batch\\TOPS\\TOPS_backup.bat</Col><Col id=\"OLD_PW\">eDduLzU5dTBJODRv</Col><Col id=\"NEW_PW\">bGkvRm9DMXdFREsy</Col><Col id=\"REMARK\">tobeFile FTP PW 변경</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Tab("tab_Server","8","8",null,null,"8","8",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("tpg_ServerList",this.tab_Server);
            obj.set_text("서버리스트");
            obj.set_url("Admin::AC_ServerInfoList.xfdl");
            this.tab_Server.addChild(obj.name, obj);

            obj = new Tabpage("tpg_PasswordList",this.tab_Server);
            obj.set_text("패스워드리스트");
            obj.set_url("Admin::AC_ServerPasswordList.xfdl");
            this.tab_Server.addChild(obj.name, obj);

            obj = new Tabpage("tpg_ServerCheckList",this.tab_Server);
            obj.set_text("서버체크리스트");
            obj.set_url("Admin::AC_ServerCheckList.xfdl");
            this.tab_Server.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.tab_Server.tpg_ServerList
            obj = new Layout("default","",0,0,this.tab_Server.tpg_ServerList.form,function(p){});
            this.tab_Server.tpg_ServerList.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_Server.tpg_PasswordList
            obj = new Layout("default","",0,0,this.tab_Server.tpg_PasswordList.form,function(p){});
            this.tab_Server.tpg_PasswordList.form.addLayout(obj.name, obj);

            //-- Default Layout : this.tab_Server.tpg_ServerCheckList
            obj = new Layout("default","",0,0,this.tab_Server.tpg_ServerCheckList.form,function(p){});
            this.tab_Server.tpg_ServerCheckList.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {
            this._addPreloadList("fdl","Admin::AC_ServerInfoList.xfdl");
            this._addPreloadList("fdl","Admin::AC_ServerPasswordList.xfdl");
            this._addPreloadList("fdl","Admin::AC_ServerCheckList.xfdl");
        };
        
        // User Script
        this.addIncludeScript("AC_ServerMM.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("AC_ServerMM.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("AC_ServerMM.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("AC_ServerMM.xfdl","Script::CommGrid.xjs");
        this.registerScript("AC_ServerMM.xfdl", function() {
        /************************************************************************************************
        * 01. 업무구분 : 서버점검관리
        * 02. 화면명   : 서버점검관리(AC_ServerMM)
        * 03. 화면설명 : 서버점검관리 화면
        * 04. 작성일   : 2022.04.25
        * 05. 작성자   : 박종언
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


        /************************************************************************************************
        * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fnComCellClick = function(obj, e)
        {
        	//그리드 원 클릭으로 edit 되도록
        	if(obj.getCurEditType() == "combo")
        	{
        		obj.setCellPos(e.cell);
        		obj.showEditor(true);
        		obj.dropdownCombo();
        	}
        	else if(obj.getCurEditType() == "date")
        	{
        		obj.setCellPos(e.cell);
        		obj.showEditor(true);
        		obj.dropdownCalendar();
        	}
        	else if(obj.getCurEditType() == "text")
        	{
        		obj.setCellPos(e.cell);
        		obj.showEditor(true);

        		//내용 있을 때 클릭 시 맨 오른쪽에 가도록
        		var sCellText = obj.getCellText(e.row, e.cell);
        		if(!this.gfnIsEmpty(sCellText)) obj.setEditSelect(sCellText.length, sCellText.length);
        	}
        };
        /************************************************************************************************
        * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/

        /************************************************************************************************
        * 팝업 TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/

        this.tab_CheckServer_onchanged = function(obj,e)
        {
        	if(e.postindex == 0) this.tab_Server.tpg_ServerList.form.fnServerList();
        	else if(e.postindex == 1)
        	{
        		if(!this.gfnIsEmpty(this.tab_Server.tpg_PasswordList.form.div_Search)) this.tab_Server.tpg_PasswordList.form.fnServerList();
        	}
        	else if(e.postindex == 2)
        	{
        		if(!this.gfnIsEmpty(this.tab_Server.tpg_ServerCheckList.form.div_Search)) this.tab_Server.tpg_ServerCheckList.form.fnServerList();
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.tab_Server.addEventHandler("onchanged",this.tab_CheckServer_onchanged,this);
        };
        this.loadIncludeScript("AC_ServerMM.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
