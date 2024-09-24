(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CS_SMS_EMail_Send");
            this.set_titletext("New Form");
            this.set_cssclass("frm_popBg");
            if (Form == this.constructor)
            {
                this._setFormPosition(990,568);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_selected", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"DUTY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"PHOTO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"H_PHONE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"O_PHONE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ENTER_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"FIRE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"HOLD_OFFICE\" type=\"STRING\" size=\"256\"/><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_to", this);
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cc", this);
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_bcc", this);
            obj._setContents("<ColumnInfo><Column id=\"NAME\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Contents", this);
            obj._setContents("<ColumnInfo><Column id=\"TITLE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENTS\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_cmm_AlimKind", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRecentSms", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRecentRcvList", this);
            obj._setContents("<ColumnInfo><Column id=\"PHN_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Edit", this);
            obj._setContents("<ColumnInfo><Column id=\"VAL1\" type=\"STRING\" size=\"256\"/><Column id=\"VAL2\" type=\"STRING\" size=\"256\"/><Column id=\"VAL3\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","8","5","77","22",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("SMS_EMail 발송");
            obj.set_color("white");
            obj.set_cssclass("sta_POP_Title");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close",null,"9","15","15","8",null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("btn_POP_Cls");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Static("stc_BottomFrame","0",null,null,"38","0","0",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_POP_BtnBg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Send",null,"538","72","22","8",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("보내기");
            obj.set_cssclass("btn_WF_tran");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Sales_List04","4","152","317","31",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("sta_WF_detailLbl01");
            obj.set_text("");
            obj.set_border("1px solid gray");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Sales_List03","4","122","317","31",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_cssclass("sta_WF_detailLbl01");
            obj.set_text("");
            obj.set_border("1px solid gray");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Sales_List05","4","182","317","42",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_cssclass("sta_WF_detailLbl01");
            obj.set_text("");
            obj.set_border("1px solid gray");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Sales_List02","4","92","317","31",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_cssclass("sta_WF_detailLbl01");
            obj.set_text("");
            obj.set_border("1px solid gray");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Sales_List01","4","38","317","55",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_cssclass("sta_WF_detailLbl01");
            obj.set_text("");
            obj.set_border("1px solid gray");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Sender","38","43","48","46",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("발신자");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("stc_SendReservation","30","98","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("예약발송");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Date","38","127","48","22",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("일자");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("stc_DueDate","38","156","48","22",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("일시");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Button("btn_EmployeesChoice","16","191","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("직원선택");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Sender","104","43","207","22",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_SendReservation","104","98","134","22",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_rowcount("1");
            var rdo_SendReservation_innerdataset = new nexacro.NormalDataset("rdo_SendReservation_innerdataset", obj);
            rdo_SendReservation_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">즉시</Col></Row><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">예약</Col></Row></Rows>");
            obj.set_innerdataset(rdo_SendReservation_innerdataset);
            obj.set_text("즉시");
            obj.set_value("N");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Calendar("cal_Date","104","127","207","22",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_DueDateHour","104","156","66","22",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_enable("false");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cmb_DueDateHour_innerdataset = new nexacro.NormalDataset("cmb_DueDateHour_innerdataset", obj);
            cmb_DueDateHour_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">00</Col><Col id=\"datacolumn\">00</Col></Row><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">01</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">02</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">03</Col></Row><Row><Col id=\"codecolumn\">04</Col><Col id=\"datacolumn\">04</Col></Row><Row><Col id=\"codecolumn\">05</Col><Col id=\"datacolumn\">05</Col></Row><Row><Col id=\"codecolumn\">06</Col><Col id=\"datacolumn\">06</Col></Row><Row><Col id=\"codecolumn\">07</Col><Col id=\"datacolumn\">07</Col></Row><Row><Col id=\"codecolumn\">08</Col><Col id=\"datacolumn\">08</Col></Row><Row><Col id=\"codecolumn\">09</Col><Col id=\"datacolumn\">09</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">11</Col><Col id=\"datacolumn\">11</Col></Row><Row><Col id=\"codecolumn\">12</Col><Col id=\"datacolumn\">12</Col></Row><Row><Col id=\"codecolumn\">13</Col><Col id=\"datacolumn\">13</Col></Row><Row><Col id=\"codecolumn\">14</Col><Col id=\"datacolumn\">14</Col></Row><Row><Col id=\"codecolumn\">15</Col><Col id=\"datacolumn\">15</Col></Row><Row><Col id=\"codecolumn\">16</Col><Col id=\"datacolumn\">16</Col></Row><Row><Col id=\"codecolumn\">17</Col><Col id=\"datacolumn\">17</Col></Row><Row><Col id=\"codecolumn\">18</Col><Col id=\"datacolumn\">18</Col></Row><Row><Col id=\"codecolumn\">19</Col><Col id=\"datacolumn\">19</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">21</Col><Col id=\"datacolumn\">21</Col></Row><Row><Col id=\"codecolumn\">22</Col><Col id=\"datacolumn\">22</Col></Row><Row><Col id=\"codecolumn\">23</Col><Col id=\"datacolumn\">23</Col></Row></Rows>");
            obj.set_innerdataset(cmb_DueDateHour_innerdataset);
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_DueDateHour","178","156","24","22",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("시");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_DueDateMinute","210","156","66","22",null,null,null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_enable("false");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cmb_DueDateMinute_innerdataset = new nexacro.NormalDataset("cmb_DueDateMinute_innerdataset", obj);
            cmb_DueDateMinute_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">00</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">01</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">02</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">03</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">04</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">05</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">06</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">07</Col></Row><Row><Col id=\"codecolumn\">8</Col><Col id=\"datacolumn\">08</Col></Row><Row><Col id=\"codecolumn\">9</Col><Col id=\"datacolumn\">09</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">11</Col><Col id=\"datacolumn\">11</Col></Row><Row><Col id=\"codecolumn\">12</Col><Col id=\"datacolumn\">12</Col></Row><Row><Col id=\"codecolumn\">13</Col><Col id=\"datacolumn\">13</Col></Row><Row><Col id=\"codecolumn\">14</Col><Col id=\"datacolumn\">14</Col></Row><Row><Col id=\"codecolumn\">15</Col><Col id=\"datacolumn\">15</Col></Row><Row><Col id=\"codecolumn\">16</Col><Col id=\"datacolumn\">16</Col></Row><Row><Col id=\"codecolumn\">17</Col><Col id=\"datacolumn\">17</Col></Row><Row><Col id=\"codecolumn\">18</Col><Col id=\"datacolumn\">18</Col></Row><Row><Col id=\"codecolumn\">19</Col><Col id=\"datacolumn\">19</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">21</Col><Col id=\"datacolumn\">21</Col></Row><Row><Col id=\"codecolumn\">22</Col><Col id=\"datacolumn\">22</Col></Row><Row><Col id=\"codecolumn\">23</Col><Col id=\"datacolumn\">23</Col></Row><Row><Col id=\"codecolumn\">24</Col><Col id=\"datacolumn\">24</Col></Row><Row><Col id=\"codecolumn\">25</Col><Col id=\"datacolumn\">25</Col></Row><Row><Col id=\"codecolumn\">26</Col><Col id=\"datacolumn\">26</Col></Row><Row><Col id=\"codecolumn\">27</Col><Col id=\"datacolumn\">27</Col></Row><Row><Col id=\"codecolumn\">28</Col><Col id=\"datacolumn\">28</Col></Row><Row><Col id=\"codecolumn\">29</Col><Col id=\"datacolumn\">29</Col></Row><Row><Col id=\"codecolumn\">30</Col><Col id=\"datacolumn\">30</Col></Row><Row><Col id=\"codecolumn\">31</Col><Col id=\"datacolumn\">31</Col></Row><Row><Col id=\"codecolumn\">32</Col><Col id=\"datacolumn\">32</Col></Row><Row><Col id=\"codecolumn\">33</Col><Col id=\"datacolumn\">33</Col></Row><Row><Col id=\"codecolumn\">34</Col><Col id=\"datacolumn\">34</Col></Row><Row><Col id=\"codecolumn\">35</Col><Col id=\"datacolumn\">35</Col></Row><Row><Col id=\"codecolumn\">36</Col><Col id=\"datacolumn\">36</Col></Row><Row><Col id=\"codecolumn\">37</Col><Col id=\"datacolumn\">37</Col></Row><Row><Col id=\"codecolumn\">38</Col><Col id=\"datacolumn\">38</Col></Row><Row><Col id=\"codecolumn\">39</Col><Col id=\"datacolumn\">39</Col></Row><Row><Col id=\"codecolumn\">40</Col><Col id=\"datacolumn\">40</Col></Row><Row><Col id=\"codecolumn\">41</Col><Col id=\"datacolumn\">41</Col></Row><Row><Col id=\"codecolumn\">42</Col><Col id=\"datacolumn\">42</Col></Row><Row><Col id=\"codecolumn\">43</Col><Col id=\"datacolumn\">43</Col></Row><Row><Col id=\"codecolumn\">44</Col><Col id=\"datacolumn\">44</Col></Row><Row><Col id=\"codecolumn\">45</Col><Col id=\"datacolumn\">45</Col></Row><Row><Col id=\"codecolumn\">46</Col><Col id=\"datacolumn\">46</Col></Row><Row><Col id=\"codecolumn\">47</Col><Col id=\"datacolumn\">47</Col></Row><Row><Col id=\"codecolumn\">48</Col><Col id=\"datacolumn\">48</Col></Row><Row><Col id=\"codecolumn\">49</Col><Col id=\"datacolumn\">49</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row><Row><Col id=\"codecolumn\">51</Col><Col id=\"datacolumn\">51</Col></Row><Row><Col id=\"codecolumn\">52</Col><Col id=\"datacolumn\">52</Col></Row><Row><Col id=\"codecolumn\">53</Col><Col id=\"datacolumn\">53</Col></Row><Row><Col id=\"codecolumn\">54</Col><Col id=\"datacolumn\">54</Col></Row><Row><Col id=\"codecolumn\">55</Col><Col id=\"datacolumn\">55</Col></Row><Row><Col id=\"codecolumn\">56</Col><Col id=\"datacolumn\">56</Col></Row><Row><Col id=\"codecolumn\">57</Col><Col id=\"datacolumn\">57</Col></Row><Row><Col id=\"codecolumn\">58</Col><Col id=\"datacolumn\">58</Col></Row><Row><Col id=\"codecolumn\">59</Col><Col id=\"datacolumn\">59</Col></Row><Row><Col id=\"codecolumn\">60</Col><Col id=\"datacolumn\">00</Col></Row></Rows>");
            obj.set_innerdataset(cmb_DueDateMinute_innerdataset);
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_DueDateMinute","284","156","24","22",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_text("분");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_EmployeesChoicePlus","272","195","16","16",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_cssclass("btn_POP_Add");
            this.addChild(obj.name, obj);

            obj = new Button("btn_EmployeesChoiceMinus","296","195","16","16",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("btn_POP_Del");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_EmployeesInfo","5",null,"316","297",null,"42",null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_binddataset("ds_selected");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"104\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"연락처\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:ISCHECKED\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:EMP_NM\"/><Cell col=\"2\" text=\"bind:H_PHONE_NO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_TelephoneNumber","104","192","155","22",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_displaynulltext("전화번호 입력");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_Kind","104","67","203","22",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("1");
            obj.set_visible("true");
            var rdo_Kind_innerdataset = new nexacro.NormalDataset("rdo_Kind_innerdataset", obj);
            rdo_Kind_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">핸드폰</Col><Col id=\"codecolumn\">M</Col></Row><Row><Col id=\"datacolumn\">내선번호</Col><Col id=\"codecolumn\">T</Col></Row><Row><Col id=\"datacolumn\">대표번호</Col><Col id=\"codecolumn\">MAIN</Col></Row></Rows>");
            obj.set_innerdataset(rdo_Kind_innerdataset);
            obj.set_text("핸드폰");
            obj.set_value("M");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","96","39","1","185",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_text("");
            obj.set_border("1px solid gray");
            this.addChild(obj.name, obj);

            obj = new Static("stc_GbReceiver","329","41","297","36",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_cssclass("sta_POP_GroupBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_GbReceiverText","340","51","65","15",null,null,null,null,null,null,this);
            obj.set_taborder("28");
            obj.set_text("받는 사람");
            obj.set_cssclass("sta_POP_GroupTit");
            this.addChild(obj.name, obj);

            obj = new Static("stc_GbReference","329","200","297","36",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_cssclass("sta_POP_GroupBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_GbReferenceText","340","209","72","15",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("참 조");
            obj.set_cssclass("sta_POP_GroupTit");
            this.addChild(obj.name, obj);

            obj = new Static("stc_GbHideReference","329","371","297","36",null,null,null,null,null,null,this);
            obj.set_taborder("31");
            obj.set_cssclass("sta_POP_GroupBg");
            this.addChild(obj.name, obj);

            obj = new Static("stc_GbHideReferenceText","340","381","71","14",null,null,null,null,null,null,this);
            obj.set_taborder("32");
            obj.set_text("숨은 참조 ");
            obj.set_cssclass("sta_POP_GroupTit");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_InputEmailByReceiver","329","81","239","22",null,null,null,null,null,null,this);
            obj.set_taborder("33");
            obj.set_displaynulltext("이메일 주소 직접 입력");
            obj.set_text("이메일 주소 직접 입력.");
            this.addChild(obj.name, obj);

            obj = new Button("btn_InputEmailByReceiverPlus","578","84","16","16",null,null,null,null,null,null,this);
            obj.set_taborder("34");
            obj.set_cssclass("btn_POP_Add");
            this.addChild(obj.name, obj);

            obj = new Button("btn_InputEmailByReceiverMinus","602","84","16","16",null,null,null,null,null,null,this);
            obj.set_taborder("35");
            obj.set_cssclass("btn_POP_Del");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_InputEmailByReceiver","329",null,"298","90",null,"371",null,null,null,null,this);
            obj.set_taborder("36");
            obj.set_binddataset("ds_to");
            obj.set_autofittype("col");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"이름\"/><Cell col=\"1\" text=\"이메일\"/></Band><Band id=\"body\"><Cell text=\"bind:NAME\"/><Cell col=\"1\" text=\"bind:EMAIL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_EmailReference","329","267","298","101",null,null,null,null,null,null,this);
            obj.set_taborder("37");
            obj.set_binddataset("ds_cc");
            obj.set_autofittype("col");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"이름\"/><Cell col=\"1\" text=\"이메일\"/></Band><Band id=\"body\"><Cell text=\"bind:NAME\"/><Cell col=\"1\" text=\"bind:EMAIL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_EmailReference","329","240","239","22",null,null,null,null,null,null,this);
            obj.set_taborder("38");
            obj.set_displaynulltext("이메일 주소 직접 입력");
            obj.set_text("이메일 주소 직접 입력.");
            this.addChild(obj.name, obj);

            obj = new Button("btn_EmailReferencePlus","578","243","16","16",null,null,null,null,null,null,this);
            obj.set_taborder("39");
            obj.set_cssclass("btn_POP_Add");
            this.addChild(obj.name, obj);

            obj = new Button("btn_EmailReferenceMinus","602","243","16","16",null,null,null,null,null,null,this);
            obj.set_taborder("40");
            obj.set_cssclass("btn_POP_Del");
            this.addChild(obj.name, obj);

            obj = new Button("btn_EmailHideReferenceMinus","602","413","16","16",null,null,null,null,null,null,this);
            obj.set_taborder("41");
            obj.set_cssclass("btn_POP_Del");
            this.addChild(obj.name, obj);

            obj = new Button("btn_EmailHideReferencePlus","578","413","16","16",null,null,null,null,null,null,this);
            obj.set_taborder("42");
            obj.set_cssclass("btn_POP_Add");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_EmailHideReference","329","410","239","22",null,null,null,null,null,null,this);
            obj.set_taborder("43");
            obj.set_displaynulltext("이메일 주소 직접 입력");
            obj.set_text("이메일 주소 직접 입력.");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_EmailHideReference","329","436","297",null,null,"42",null,null,null,null,this);
            obj.set_taborder("44");
            obj.set_binddataset("ds_bcc");
            obj.set_autofittype("col");
            obj.set_cellmovingtype("col");
            obj.set_cellsizingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"이름\"/><Cell col=\"1\" text=\"이메일\"/></Band><Band id=\"body\"><Cell text=\"bind:NAME\"/><Cell col=\"1\" text=\"bind:EMAIL\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_Content","638","75",null,null,"8","178",null,null,null,null,this);
            obj.set_taborder("45");
            obj.set_wordWrap("english");
            obj.set_maxlength("2000");
            obj.getSetter("validate").set("title:내용,required:true");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Title","638","46",null,"22","8",null,null,null,null,null,this);
            obj.set_taborder("46");
            obj.set_readonly("false");
            obj.set_displaynulltext("제목을 입력하세요. (최대 10자)");
            obj.set_enable("false");
            obj.set_text("제목을 입력하세요. (최대 10자)");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_AlimKind","8","538","212","22",null,null,null,null,null,null,this);
            obj.set_taborder("47");
            obj.set_innerdataset("ds_cmm_AlimKind");
            obj.set_codecolumn("CODE");
            obj.set_datacolumn("CAPTION");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Byte","867","357","95",null,null,"188",null,null,null,null,this);
            obj.set_taborder("48");
            obj.set_text("0/80 Byte");
            obj.set_cssclass("sta_WF_DetailTit");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_SmsType","116","7","148","21",null,null,null,null,null,null,this);
            obj.set_taborder("49");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cmb_SmsType_innerdataset = new nexacro.NormalDataset("cmb_SmsType_innerdataset", obj);
            cmb_SmsType_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">SMS</Col><Col id=\"datacolumn\">SMS</Col></Row><Row><Col id=\"codecolumn\">ALIMTALK</Col><Col id=\"datacolumn\">카카오 알림톡</Col></Row></Rows>");
            obj.set_innerdataset(cmb_SmsType_innerdataset);
            obj.set_text("SMS");
            obj.set_value("SMS");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Div("div_Input","638","txt_Content:8",null,null,"8","42",null,null,null,null,this);
            obj.set_taborder("50");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_InputBg","0","0",null,"36","0",null,null,null,null,null,this.div_Input.form);
            obj.set_taborder("0");
            obj.set_cssclass("sta_POP_GroupBg");
            this.div_Input.addChild(obj.name, obj);

            obj = new Static("stc_InputTit","12","10","71","14",null,null,null,null,null,null,this.div_Input.form);
            obj.set_taborder("1");
            obj.set_text("설정");
            obj.set_cssclass("sta_POP_GroupTit");
            this.div_Input.addChild(obj.name, obj);

            obj = new Static("stc_ZoomURL","13","44","68","22",null,null,null,null,null,null,this.div_Input.form);
            obj.set_taborder("2");
            obj.set_text("URL");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_Input.addChild(obj.name, obj);

            obj = new Edit("edt_URL","stc_ZoomURL:8","44",null,"22","8",null,null,null,null,null,this.div_Input.form);
            obj.set_taborder("3");
            this.div_Input.addChild(obj.name, obj);

            obj = new Static("stc_ZoomID","13","74","68","22",null,null,null,null,null,null,this.div_Input.form);
            obj.set_taborder("4");
            obj.set_text("ID");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_Input.addChild(obj.name, obj);

            obj = new Edit("edt_ID","stc_ZoomID:8","74",null,"22","8",null,null,null,null,null,this.div_Input.form);
            obj.set_taborder("5");
            this.div_Input.addChild(obj.name, obj);

            obj = new Static("stc_ZoomPW","13","104","68","22",null,null,null,null,null,null,this.div_Input.form);
            obj.set_taborder("6");
            obj.set_text("PASSWORD");
            obj.set_cssclass("sta_WF_DetailTit");
            this.div_Input.addChild(obj.name, obj);

            obj = new Edit("edt_PW","stc_ZoomPW:8","104",null,"22","8",null,null,null,null,null,this.div_Input.form);
            obj.set_taborder("7");
            this.div_Input.addChild(obj.name, obj);

            obj = new Button("btn_Reset",null,"7","78","22","8",null,null,null,null,null,this.div_Input.form);
            obj.set_taborder("8");
            obj.set_text("초기화");
            this.div_Input.addChild(obj.name, obj);

            obj = new PopupDiv("pdiv_RecentSendList","998","-1","363","565",null,null,null,null,null,null,this);
            obj.set_text("");
            obj.set_visible("false");
            obj.set_background("beige");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_RecentSendList","4","42",null,"239","4",null,null,null,null,null,this.pdiv_RecentSendList.form);
            obj.set_taborder("0");
            obj.set_autofittype("col");
            obj.set_binddataset("dsRecentSms");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"97\"/><Column size=\"97\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"발신일시\"/><Cell col=\"2\" text=\"수신번호\"/><Cell col=\"3\" text=\"전송결과\"/></Band><Band id=\"body\"><Cell text=\"bind:MSG_KIND\"/><Cell col=\"1\" maskeditformat=\"####-##-## ##:##:##\" maskedittype=\"string\" text=\"bind:INSERT_DATE\" displaytype=\"mask\"/><Cell col=\"2\" text=\"bind:RECV_NO\"/><Cell col=\"3\" text=\"bind:SMS_RESULT\"/></Band></Format><Format id=\"DEPT\"><Columns><Column size=\"80\"/><Column size=\"97\"/><Column size=\"60\"/><Column size=\"97\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"구분\"/><Cell col=\"1\" text=\"발신일시\"/><Cell col=\"2\" text=\"발신자\"/><Cell col=\"3\" text=\"수신번호\"/><Cell col=\"4\" text=\"전송결과\"/></Band><Band id=\"body\"><Cell text=\"bind:MSG_KIND\"/><Cell col=\"1\" maskeditformat=\"####-##-## ##:##:##\" maskedittype=\"string\" text=\"bind:INSERT_DATE\" displaytype=\"mask\"/><Cell col=\"2\" text=\"bind:EMP_NM\"/><Cell col=\"3\" text=\"bind:RECV_NO\"/><Cell col=\"4\" text=\"bind:SMS_RESULT\"/></Band></Format></Formats>");
            this.pdiv_RecentSendList.addChild(obj.name, obj);

            obj = new Grid("grd_RecentSendList2","219","288",null,"237","4",null,null,null,null,null,this.pdiv_RecentSendList.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsRecentRcvList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"108\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"수신자 그룹\"/></Band><Band id=\"body\"><Cell text=\"bind:PHN_NO\"/></Band></Format></Formats>");
            this.pdiv_RecentSendList.addChild(obj.name, obj);

            obj = new Static("stc_BottomFrame","0",null,null,"38","0","0",null,null,null,null,this.pdiv_RecentSendList.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_POP_BtnBg");
            this.pdiv_RecentSendList.addChild(obj.name, obj);

            obj = new Button("btn_Exit",null,null,"60","22","4","8",null,null,null,null,this.pdiv_RecentSendList.form);
            obj.set_taborder("3");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_tran");
            this.pdiv_RecentSendList.addChild(obj.name, obj);

            obj = new TextArea("txt_Content","69","316","142","209",null,null,null,null,null,null,this.pdiv_RecentSendList.form);
            obj.set_taborder("4");
            obj.getSetter("validate").set("title:내용,required:true");
            obj.set_wordWrap("english");
            this.pdiv_RecentSendList.addChild(obj.name, obj);

            obj = new Edit("edt_Title","69","289","142","22",null,null,null,null,null,null,this.pdiv_RecentSendList.form);
            obj.set_taborder("5");
            obj.set_enable("false");
            this.pdiv_RecentSendList.addChild(obj.name, obj);

            obj = new Static("stc_Title","6","288","56","22",null,null,null,null,null,null,this.pdiv_RecentSendList.form);
            obj.set_taborder("6");
            obj.set_text("제 목");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("center");
            this.pdiv_RecentSendList.addChild(obj.name, obj);

            obj = new Static("stc_Content","6","317","56","208",null,null,null,null,null,null,this.pdiv_RecentSendList.form);
            obj.set_taborder("7");
            obj.set_text("내 용");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("center");
            this.pdiv_RecentSendList.addChild(obj.name, obj);

            obj = new Static("stc_GbRecentSendListText","4","4",null,"30","4",null,null,null,null,null,this.pdiv_RecentSendList.form);
            obj.set_taborder("8");
            obj.set_cssclass("sta_POP_GroupBg");
            this.pdiv_RecentSendList.addChild(obj.name, obj);

            obj = new Static("Static05","14","11","128","15",null,null,null,null,null,null,this.pdiv_RecentSendList.form);
            obj.set_taborder("9");
            obj.set_text("최근 발송내역");
            obj.set_cssclass("sta_POP_GroupTit");
            this.pdiv_RecentSendList.addChild(obj.name, obj);

            obj = new Static("stc_Date",null,"7","162","22","36",null,null,null,null,null,this.pdiv_RecentSendList.form);
            obj.set_taborder("10");
            obj.set_text("최근2개월치만 이력조회가능");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.pdiv_RecentSendList.addChild(obj.name, obj);

            obj = new Button("btn_SmsResultApply","12","534","102","22",null,null,null,null,null,null,this.pdiv_RecentSendList.form);
            obj.set_taborder("11");
            obj.set_text("전송결과 적용");
            obj.set_cssclass("btn_WF_tran");
            this.pdiv_RecentSendList.addChild(obj.name, obj);

            obj = new Button("btn_RecentSendList","228",null,"106","24",null,"8",null,null,null,null,this);
            obj.set_taborder("52");
            obj.set_text("최근 발송내역");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.div_Input.form
            obj = new Layout("default","",0,0,this.div_Input.form,function(p){});
            this.div_Input.form.addLayout(obj.name, obj);

            //-- Default Layout : this.pdiv_RecentSendList.form
            obj = new Layout("default","",0,0,this.pdiv_RecentSendList.form,function(p){});
            this.pdiv_RecentSendList.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",990,568,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","div_Input.form.edt_URL","value","ds_Edit","VAL1");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","div_Input.form.edt_ID","value","ds_Edit","VAL2");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","div_Input.form.edt_PW","value","ds_Edit","VAL3");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CS_SMS_EMail_Send.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("CS_SMS_EMail_Send.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("CS_SMS_EMail_Send.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("CS_SMS_EMail_Send.xfdl","Script::CommGrid.xjs");
        this.registerScript("CS_SMS_EMail_Send.xfdl", function() {
        /************************************************************************************************
         * 01. 업무구분 : 공통 - 공통
         * 02. 화면명   : SMS_EMail 발송
         * 03. 화면설명 :
         * 04. 작성일   : 2023.07.11
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
        this.strChkFlag=0;
        this.FV_SENDER_NO;

        // "SELF" (login 접속자 번호), "EMP" (지정 사번의 번호), "MAIN" (대표번호), "APPOINT"(직접입력 전화번호)
        this.FV_SENDER_TYPE = "SELF";
        // "T" (내선), 	"M" (모바일)
        this.FV_TEL_KIND = "M";
        //  발신번호 또는 사번
        this.FV_SENDER;
        // 업무구분
        this.FV_TARGET;
        // EDU 전용
        this.FV_ES_SEQ;
        this.FV_PRODUCT_CODE;
        this.FV_EDU_METHOD; // 001(온라인) , 002(오프라인)
        var app;
        //전송 후 input값 변경시 본문 초기화를 위한 변수
        this.bSendHistory = false;

        /************************************************************************************************
         * FORM 영역
        ************************************************************************************************/
        this.CS_SMS_EMail_Send_onload = function(obj,e)
        {
        	this.gfnCompInit(obj); //헤더클릭 이벤트 없을 시 사용
        	this.fnGetCode();
        };

        /************************************************************************************************
         * FORM 공통 FUNCTION 영역
        ************************************************************************************************/
        this.fnFormInit = function()
        {
        	app = nexacro.getApplication();

        	this.FV_SENDER_TYPE = this.parent.pv_SenderType;
        	this.FV_TEL_KIND = this.parent.pv_TelKind;
        	this.FV_SENDER = this.parent.pv_Sender;
        	this.FV_SENDER_NAME = this.parent.pv_SenderName;
        	this.FV_TARGET = this.parent.pv_Target;

        	if (this.gfnIsEmpty(this.FV_SENDER_TYPE)) this.FV_SENDER_TYPE = "SELF";
        	if (this.gfnIsEmpty(this.FV_TEL_KIND)) this.FV_TEL_KIND = "M";
        	if (this.FV_SENDER_TYPE == "EMP" || this.FV_SENDER_TYPE == "APPOINT") {
        		if (this.gfnIsEmpty(this.FV_SENDER)) {
        			this.alert("발신자 정보가 없습니다. 확인하세요");
        		}
        	}

        	if (this.FV_SENDER_TYPE == "SELF") {
        		this.rdo_Kind.set_value(this.FV_TEL_KIND);
        		this.rdo_Kind.set_visible(true);
        		if(this.FV_TEL_KIND=="T")
        			this.edt_Sender.set_value(app.gdsUserInfo.getColumn(0, "EMP_NM")+"("+app.gdsUserInfo.getColumn(0, "OFFICE")+")");
        		else if(this.FV_TEL_KIND=="M")
        			this.edt_Sender.set_value(app.gdsUserInfo.getColumn(0, "EMP_NM")+"("+app.gdsUserInfo.getColumn(0, "MOBILE")+")");
        	} else if (this.FV_SENDER_TYPE == "EMP") {
        		// 직원 Email 검색
        		var _ds_Emp = this.objects["_ds_Emp"];
        		if (this.gfnIsEmpty(_ds_Emp)) {
        			_ds_Emp = new nexacro.Dataset();
        			this.addChild("_ds_Emp", _ds_Emp);
        		}
        		_ds_Emp.clearData();

        		// 조건값 셋팅
        		this.gfnAddSendParameter("EMP_NO",	this.FV_SENDER);
        		this.gfnAddOutputDataset("_ds_Emp",	"dsOutput");
        		this.gfnCommonTransaction("SelectEmpInfo", "CO_FindEmp_S01", null, false);

        		if(this.FV_TEL_KIND=="T")
        			this.edt_Sender.set_value(_ds_Emp.getColumn(0, "EMP_NAME")+"("+_ds_Emp.getColumn(0, "OFFICE_TEL_NO")+")");
        		else if(this.FV_TEL_KIND=="M")
        			this.edt_Sender.set_value(_ds_Emp.getColumn(0, "EMP_NAME")+"("+_ds_Emp.getColumn(0, "HP_TEL_NO")+")");

        	} else if (this.FV_SENDER_TYPE == "MAIN") {
        		this.edt_Sender.set_value("대표번호(02-2140-7700)");
        	} else if (this.FV_SENDER_TYPE == "APPOINT") {
        		if (this.gfnIsEmpty(this.FV_SENDER_NAME))
        			this.edt_Sender.set_value(this.FV_SENDER);
        		else
        			this.edt_Sender.set_value(this.FV_SENDER_NAME+"("+this.FV_SENDER+")");
        	}
        	if(this.gfnIsEmpty(this.parent.dsInput))
        		return;
        	/*발신목록, EMail목록 전달받아서 셋팅*/
        	for(var i = 0; i<this.parent.dsInput.rowcount; i++)
        	{
        		var nSmsRow = this.ds_selected.addRow();
        		var nEmailRow = this.ds_bcc.addRow();
        		this.ds_selected.setColumn(nSmsRow, "EMP_NM", this.parent.dsInput.getColumn(i, "EMP_NAME"));
        		this.ds_selected.setColumn(nSmsRow, "H_PHONE_NO", this.parent.dsInput.getColumn(i, "PHONE_NO"));

        		var targetDs = this.ds_to;

        		if(this.FV_TARGET == "EDU") {
        			targetDs = this.ds_bcc;
        		}

        		targetDs.setColumn(nEmailRow, "NAME", this.parent.dsInput.getColumn(i, "EMP_NAME"));
        		targetDs.setColumn(nEmailRow, "EMAIL", this.parent.dsInput.getColumn(i, "EMAIL"));
        	}

        	if(this.FV_TARGET == "EDU") {
        		this.FV_ES_SEQ = this.parent.pv_EsSeq;
        		this.FV_PRODUCT_CODE = this.parent.pv_ProductCode;
        		this.FV_EDU_METHOD = this.parent.pv_EduMethod;

        		this.ds_cmm_AlimKind.filter("VAL2=='EDU'");

        		if(this.FV_TARGET == "EDU" && this.FV_EDU_METHOD == "002") {
        			var nFindRow = this.ds_cmm_AlimKind.findRow("CODE", "EDU_NOTICE_OFFLINE");
        			this.cmb_AlimKind.set_index(nFindRow);
        		} else {
        			this.cmb_AlimKind.set_index(0);
        		}

        		this.cmb_SmsType.set_index(1); //ALIM TALK 셋팅

        		this.rdo_Kind.set_index(1);

        		// 교육 관리자 계정 정보 조회 ( EMP_NO : EDU )
        		var sDeptCd = app.gdsUserInfo.getColumn(0, "DEPT_CD");

        		this.gfnAddSendParameter("DEPT_CD",	sDeptCd);
        		this.gfnAddOutputDataset("ds_to",	"dsOutput");
        		this.gfnCommonTransaction("SelectAdminEmpInfo", "CS_SMS_EMail_Send_S02", null, false);

        		this.fnSetContentsInit();
        	}
        };

        this.fnSetTextArea = function()
        {
        	var sAlimKind = this.cmb_AlimKind.value;
        	if(sAlimKind == "EDU_NOTICE_ONLINE" || sAlimKind == "EDU_NOTICE_OFFLINE") {
        		// 입력 Div 숨김 처리
        		this.div_Input.set_visible(false);
        		this.txt_Content.set_bottom(42);
        		this.stc_Byte.set_bottom(52);
        	} else if(sAlimKind == "EDU_ATTENDANCE") {
        		// 입력 Div 숨김 처리
        		this.div_Input.set_visible(true);
        		this.txt_Content.set_bottom(178);
        		this.stc_Byte.set_bottom(188);
        	}
        };

        this.fnSetContents = function(sEsSeq, sProductCode)
        {
        	var sEmpNo = nexacro.getApplication().gdsUserInfo.getColumn(0, "EMP_NO");
        	var sAlimKind = this.cmb_AlimKind.value;

        	this.gfnAddSendParameter("ALIM_TALK_SERVICE",	sAlimKind);
        	this.gfnAddSendParameter("EMP_NO",	sEmpNo);
        	this.gfnAddSendParameter("EDU_PRODUCT_CODE",	sProductCode);
        	this.gfnAddSendParameter("ES_SEQ",	sEsSeq);
        	this.gfnAddOutputDataset("ds_Contents",	"dsOutput");
        	this.gfnCommonTransaction("SelectContents", "CS_SMS_EMail_Send_S03", null, false);
        };

        this.fnGetCode = function()
        {
        	this.gfnAddCodeDataset("ds_cmm_AlimKind" 	,"ALIM_TALK_SERVICE");

        	// 공통코드 조회
        	this.gfnCodeTransaction();
        };

        this.fnCheckTheValidation = function()
        {
        	// 예약발송 - 오늘날짜일 경우 보내는 시간 체크 (오늘이전 날짜는 선택불가능하게 이벤트 처리함)
        	if(this.rdo_SendReservation.value == "Y" && this.gfnIsEmpty(this.gfnGetDiffDay(this.gfnGetToday("S"), String(this.cal_Date.value))) == 0)
        	{
        		if(!this.fnCheckTime())
        			return false;
        	}
        	else if(this.ds_selected.rowcount < 1)
        	{
        		alert("받는 사람을 선택하십시오.");
        		return false;
        	}
        	else if(this.ds_to.rowcount < 1)
        	{
        		alert("받는 사람을 선택하십시오.");
        		return false;
        	}

        	if(this.cmb_AlimKind.value == "EDU_ATTENDANCE")
        	{
        		var sUrl = this.div_Input.form.edt_URL.value;// URL
                var sId = this.div_Input.form.edt_ID.value;// ID
                var sPw = this.div_Input.form.edt_PW.value;// PASSWORD
        		if(this.gfnIsEmpty(sUrl) == true)
        		{
        			alert("URL을 입력해주세요.");
        			return false;
        		}
        		else if(this.gfnIsEmpty(sId) == true)
        		{
        			alert("ID를 입력해주세요.");
        			return false;
        		}
        		else if(this.gfnIsEmpty(sPw) == true)
        		{
        			alert("PW를 입력해주세요.");
        			return false;
        		}
        	}
        	for(var i = 0; i < this.ds_to.rowcount; i++) {
        		if(this.gfnIsEmpty(this.ds_to.getColumn(i, "EMAIL"))) {
        			alert("받는 사람의 이메일을 기입해주세요.");
        			return false;
        		}
        	}

        	//alert("SMS를 발송합니다.");
        	return true;
        }

        this.fnCheckTime = function()
        {
        	var nTime = this.gfnGetToday("F", "").substr(8,4);
        	var sTime = this.cmb_DueDateHour.value + this.cmb_DueDateMinute.value;

        	if((parseInt(sTime) - parseInt(nTime)) > -1)
        		return true;

        	alert("보내는 시간을 확인하세요");
        	return false;
        }

        this.fnAddReceiverTelePhone = function(num)
        {
        	var nRow;
        	var nNum;

        	if(this.gfnIsEmpty(num))
        		return false;

        	if(this.fnIsDuplicate(num, this.ds_selected))
        		return false;

        	nNum = this.fnRemoveChar(num);

        	nRow = this.ds_selected.addRow();
        	this.ds_selected.setColumn(nRow, "EMP_NM", "-");
        	this.ds_selected.setColumn(nRow, "H_PHONE_NO", this.fnNumberFormat(num));
        }

        this.fnRemoveChar = function(num)
        {
        	return num.replace(/[^0-9]/g, "");
        }

        this.fnIsDuplicate = function(pNum, toDs)
        {
        	var nNum = this.fnRemoveChar(pNum);

        	if( (nNum.length < 9) || (nNum.length > 11) )
        	{
        		alert("전화번호 길이를 확인하세요.");
        		return true;
        	}

        	if(nNum.substr(0,1) != "0")
        	{
        		alert("전화번호 형식을 확인하세요.");
        		return true;
        	}

        	for(var i = 0 ; i < toDs.rowcount ; i++)
        	{
        		if(this.fnNumberFormat(toDs.getColumn(i, "H_PHONE_NO")) == this.fnNumberFormat(pNum))
        			return true;
        	}

        	return false;
        }

        this.fnNumberFormat = function(sNum)
        {
        	var nNum =  this.fnRemoveChar(sNum);

        	return nNum.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/g, "$1-$2-$3");
        }

        //중복체크후 추가
        this.fnAppendDs = function(fromDs)
        {
        	var nRow;

        	for(var i = 0; i < this.ds_selected.rowcount; i++)
        	{
        		if(this.fnIsDuplicate( fromDs.getColumn(i, "H_PHONE_NO"), this.ds_selected) )
        			fromDs.deleteRow(i);
        	}

        	var nRow;

        	for(var i = 0 ; i < fromDs.rowcount ; i++)
        	{
        		nRow = this.ds_selected.addRow();
        		this.ds_selected.copyRow(nRow, fromDs, i);
        		this.ds_selected.setColumn(nRow, "ISCHECKED", 0);
        	}
        }

        this.fnDeleteRow = function(dsObj)
        {
        	var nRow;

        	while(true)
        	{
        		nRow = dsObj.findRow("ISCHECKED", 1);

        		if(nRow < 0)
        			break;

        		dsObj.deleteRow(nRow);
        	}
        }

        /************************************************************************************************
         * TRANSACTION 및 추가 FUNCTION 영역
        ************************************************************************************************/
        this.fnPopupCallBack = function (popupId, popupArg)
        {
        	popupArg = this.commUtil.popupReturn();
        	if(!this.gfnIsEmpty(popupArg))
        	{
        		switch(popupId)
        		{
        			case "popOrganization":
        				var EmailValidation;

        				//popupArg의 데이터 기반 Dataset생성
        				var ds = new Dataset();
        				ds.loadXML(popupArg);

        				//중복체크
        				var fnChkValidation = function(dsTarget, row)
        				{
        					sEmailValidation = ds.getColumn(row, "EMAIL");
        					var nRow = dsTarget.findRow("EMAIL", sEmailValidation);

        					if(nRow == -1)
        					{
        						var nRow = dsTarget.addRow();
        						dsTarget.copyRow(nRow, ds, row);
        					}
        				}

        				for(var i = 0; i<ds.rowcount; i++)
        				{
        					fnChkValidation(this.ds_selected, i);
        				}

        				break;
        		}
        	}
        }

        this.fnSend = function()
        {
        	var strSvcID 	= "Send";
        	var	sMsg		= this.txt_Content.value;																							//  sMsg - 메세지 내용
        	var	sTitle 		= this.edt_Title.value;																								//  sTitle - 제목
        	var	bReverve 	= this.rdo_SendReservation.value == "Y" ? true : false;																//  bReverve - 예약여부 (true/false)
        	var	sReqSendDate, sReqSendTime;

        	if(bReverve) {
        		sReqSendDate = String(this.cal_Date.value);
        		sReqSendTime = String(this.cmb_DueDateHour.value) + String(this.cmb_DueDateMinute.value) + "00";
        	} else {
        		sReqSendDate = String(this.cal_Date.value) + String(this.cmb_DueDateHour.value) + String(this.cmb_DueDateMinute.value) + "00";	//  sSendDttm - 예약발송시간
        	}

        	if(this.FV_TARGET == "EDU") {
        		var sAlimKind = this.cmb_AlimKind.value;
        		if(sAlimKind == "EDU_ATTENDANCE") {
        			var sUrl = this.div_Input.form.edt_URL.value;
        			//trace(sMsg);
        			//trace("====================");
        			sMsg = sMsg.substring(0, sMsg.lastIndexOf(sUrl)) + "\n" + sUrl;
        			//trace(sUrl);
        			//trace(sMsg);
        		}
        	}

        	// var sMsgType	= (this.commUtil.getByteSize(this.txt_Content.value) > 80) ? "M" : "A";												//  sMsgType - 메세지 타입 (A:SMS, M:MMS)
        	if(this.ds_selected.rowcount == 0) 	this.alert("받는 사람을 선택해 주세요!");

        	var arrSmsInfo = new Array();

        	/* 설정 */
        	arrSmsInfo[0] = {};
        	arrSmsInfo[0].pvUserKind = "BASE";
        	arrSmsInfo[0].pvUserCode = this.ds_selected;

        	var sSmsType = this.cmb_SmsType.value;

        	if(sSmsType == "ALIMTALK") {
        		var sAlimKind = this.cmb_AlimKind.value;

        		this.gfnAddAlimTalkList(arrSmsInfo);
        		this.gfnSendAlimTalk(strSvcID, this.FV_SENDER_TYPE, this.FV_TEL_KIND, this.FV_SENDER, sMsg, sTitle, sAlimKind, bReverve, sReqSendDate, sReqSendTime);
        	} else {
        		this.gfnAddSmsList(arrSmsInfo);
        		this.gfnSendSms(strSvcID, this.FV_SENDER_TYPE, this.FV_TEL_KIND, this.FV_SENDER, sMsg, sTitle, bReverve, sReqSendDate);
        	}
        }

        this.fnCallBack = function(strSvcID, nErrorCode, strErrorMsg)
        {
        	if(nErrorCode != 0)
        	{
        		alert("strsvcID : " + strSvcID + "\n" + "nErrorCode : " + nErrorCode + "\n" + "strErrorMsg : " + strErrorMsg);
        		return;
        	}
        	else
        	{
        		switch(strSvcID)
        		{
        			case "gfnGetCode" :
        				this.fnFormInit();
        				break;
        			case "CS_SMSSend_S01" :
        				break;
        			case "Send" :
        				this.fnSendEmail();
        				break;
        			case "SendEmail" :
        				alert("SMS, EMail 발송 완료 되었습니다.");
        				this.bSendHistory = true;
        				break;
        			case "SelectContents" :
        				var sTitle = this.ds_Contents.getColumn(this.ds_Contents.rowposition, "TITLE");
        				var sContents = this.ds_Contents.getColumn(this.ds_Contents.rowposition, "CONTENTS");

        				this.edt_Title.set_value(sTitle);
        				this.txt_Content.set_value(sContents);
        				break;
        			case "SmsResultApply" :
        				alert("전송결과 적용 완료 했습니다.");
        				break;
        			default :
        				break;
        		}
        	}
        }

        this.fnAddReceiver = function(objDs,objEdit)
        {
        	var nRow;

        	if(this.fnCheckAddress(objEdit.value))
        	{
        		if(objDs.findRow("EMAIL", objEdit.value) == -1){
        			nRow = objDs.addRow();
        			objDs.setColumn(nRow, "NAME", "-");
        			objDs.setColumn(nRow, "EMAIL", objEdit.value);
        		}
        	}
        	objEdit.set_value("");
        }

        this.fnCheckAddress = function(eMail)
        {
        	var reg_email = new RegExp(/^[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[@]{1}[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[.]{1}[A-Za-z]{2,5}$/);

        	if(reg_email.test(eMail))
        		return true;
        	else
        		alert("올바른 이메일 주소를 입력하여 주십시오.");

        	return false;
        }

        this.fnSendEmail = function()
        {
        	var arrEmailInfo = new Array();

        	/* TO 설정 */
        	arrEmailInfo[0] = {};
        	arrEmailInfo[0].pvType = "TO";
        	arrEmailInfo[0].pvUserKind = "BASE";
        	arrEmailInfo[0].pvUserCode = this.ds_to;

        	/* CC 설정 */
        	arrEmailInfo[1] = {};
        	arrEmailInfo[1].pvType = "CC";
        	arrEmailInfo[1].pvUserKind = "BASE";
        	arrEmailInfo[1].pvUserCode = this.ds_cc;

        	/* BCC 설정 */
        	arrEmailInfo[2] = {};
        	arrEmailInfo[2].pvType = "BCC";
        	arrEmailInfo[2].pvUserKind = "BASE";
        	arrEmailInfo[2].pvUserCode = this.ds_bcc;

        	this.gfnAddEmailList(arrEmailInfo);

        	var app = nexacro.getApplication();
        	var sTitle = "";

        	var sContents = this.txt_Content.value;

        	sContents = "<div style='FONT-SIZE: 10pt;'><pre style='FONT-FAMILY: Malgun Gothic;'>"  + sContents + "</pre></div>";

        	if (!this.gfnIsEmpty(this.edt_Title.value)) sTitle=this.edt_Title.value;
        	this.gfnSendEmail ("SendEmail", "APPOINT", app.gdsUserInfo.getColumn(0, "EMAIL"), sTitle, sContents);
        }

        this.fnInputApply = function()
        {
        	var sUrl = this.div_Input.form.edt_URL.value;// URL
        	var sId = this.div_Input.form.edt_ID.value;// ID
        	var sPw = this.div_Input.form.edt_PW.value;// PASSWORD

        	var sContent = this.txt_Content;

        	sContent.replace("{URL}", sUrl);
        	sContent.replace("{ID}", sId);
        	sContent.replace("{PASSWORD}", sPw);
        };

        this.fnCheckByte = function()
        {
        	var nByte = this.commUtil.getByteSize(this.txt_Content.value);

        	if(nByte > 80)
        	{
        		this.edt_Title.set_enable(true);
        		this.stc_Byte.set_text(this.commUtil.getByteSize(this.txt_Content.value) + "/2000 Byte");
        	}
        	else
        	{
        		this.edt_Title.set_enable(false);
        		this.stc_Byte.set_text(this.commUtil.getByteSize(this.txt_Content.value) + "/80 Byte");
        	}
        };

        this.fnSmsResultApply = function()
        {
        	this.gfnCommonTransaction("SmsResultApply", "CS_SMS_EMail_Send_R03");
        };

        this.fnSetContentsInit = function ()
        {
        	this.fnSetContents(this.FV_ES_SEQ, this.FV_PRODUCT_CODE);

        	this.fnCheckByte();

        	this.fnSetTextArea();
        };
        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        //전체선택, 전체해제
        this.grd_EmployeesInfo_onheadclick = function(obj, e)
        {
        	var objDs = this.lookup(obj.binddataset);

        	if(e.col == 0)
        	{
        		if(this.gfnIsEmpty(obj.getCellProperty("head", e.cell, "text")) || obj.getCellProperty("head", e.cell, "text") == 0)
        		{
        			obj.setCellProperty("head", e.cell, "text", 1);
        		}
        		else
        		{
        			obj.setCellProperty("head", e.cell, "text", 0);
        		}

        		if(this.strChkFlag == 0)
        		{
        			for(var i =0; i<objDs.rowcount; i++)
        			{
        				objDs.setColumn(i, "ISCHECKED", 1);
        			}
        			this.strChkFlag = 1;
        		}
        		else if(this.strChkFlag == 1)
        		{
        			for(var i =0; i<objDs.rowcount; i++)
        			{
        				objDs.setColumn(i, "ISCHECKED", 0);
        			}
        			this.strChkFlag = 0;
        		}
        	}
        };


        this.comm_Click = function(obj,e)
        {
        	switch(obj.name)
        	{
        		case "btn_EmployeesChoicePlus" :
        			this.fnAddReceiverTelePhone(this.edt_TelephoneNumber.value);
        			break;
        		case "btn_EmployeesChoiceMinus" :
        			this.ds_selected.deleteRow(this.ds_selected.rowposition);
        			this.fnDeleteRow(this.ds_selected);
        			break;
        		case "btn_Send" :
        			if(this.fnCheckTheValidation() == true) {
        				if(this.cmb_AlimKind.value == "EDU_ATTENDANCE")
        				{
        					this.fnInputApply();
        				}
        				if(this.confirm("발송하시겠습니까?")) {
        					this.fnSend();
        				}
        			}
        			break;
        		case "btn_Close" :
        			this.close();
        			break;
        		case "btn_RecentSendList" :
        			var frms = nexacro.getPopupFrames();
        			var frm = frms["CS_SMS_EMail_Send"];		/* 현재 팝업의 프레임 가져오기 */
        			var nPopLeft	= frm.left+frm.width;		/* 현재 팝업 프레임의 우측 px 계산 */
        			var nPopTop		= frm.top;					/* 현재 팝업 프레임의 상단 PX 계산 */
        			this.pdiv_RecentSendList.trackPopup(nPopLeft, nPopTop);
        			break;
        		case "btn_EmployeesChoice" :
        			this.commUtil.popupOrganization(this, "popOrganization", "fnPopupCallBack", "SMS", null, "1");
        			break;
        		case "btn_ReSend" :
        			this.fnSetSmsData();
        			break;
        		case "btn_Exit" :
        			this.pdiv_RecentSendList.closePopup();
        			break;
        		case "btn_InputEmailByReceiverPlus" :
        			this.fnAddReceiver(this.ds_to, this.edt_InputEmailByReceiver);
        			break;
        		case "btn_EmailReferencePlus" :
        			this.fnAddReceiver(this.ds_cc, this.edt_EmailReference);
        			break;
        		case "btn_EmailHideReferencePlus" :
        			this.fnAddReceiver(this.ds_bcc, this.edt_EmailHideReference);
        			break;
        		case "btn_InputEmailByReceiverMinus" :
        			this.ds_to.deleteRow(this.ds_to.rowposition);
        			break;
        		case "btn_EmailReferenceMinus" :
        			this.ds_cc.deleteRow(this.ds_cc.rowposition);
        			break;
        		case "btn_EmailHideReferenceMinus" :
        			this.ds_bcc.deleteRow(this.ds_bcc.rowposition);
        			break;
        		case "btn_Reset" :
        			this.fnSetContentsInit();
        			this.ds_Edit.clearData();
        			this.ds_Edit.addRow();
        			break;
        		case "btn_SmsResultApply" :
        			this.fnSmsResultApply();
        			break;
        	}
        };

        this.grd_EmployeesInfo_oncelldblclick = function(obj, e)
        {
        	var objDs = this.lookup(obj.binddataset);
        	objDs.deleteRow(obj.getDatasetRow(e.row)); //인수로 전달된 Row에 해당하는 DataSet의 Row인덱스를 반환하여 objDs에서 삭제.
        };

        //예약발송
        this.rdo_SendReservation_onitemchanged = function(obj,e)
        {
        	switch(obj.index)
        	{
        		case 0 :
        			this.cal_Date.set_enable(false);
        			this.cmb_DueDateHour.set_enable(false);
        			this.cmb_DueDateMinute.set_enable(false);
        			break;

        		case 1 :
        			this.cal_Date.set_enable(true);
        			this.cmb_DueDateHour.set_enable(true);
        			this.cmb_DueDateMinute.set_enable(true);

        			//오늘 날짜와 시간으로 세팅해준다.
        			this.cal_Date.set_value(this.gfnGetToday("S"));
        			this.cmb_DueDateHour.set_index(this.gfnGetToday("F","").substr(8,2));
        			this.cmb_DueDateMinute.set_index(this.gfnGetToday("F","").substr(10,2));
        			break;
        	}
        };

        //내용이 80 Byte가 넘는지 실시간 체크
        this.txt_Content_onkeyup = function(obj,e)
        {
        	if(this.gfnIsEmpty(this.txt_Content.value))
        		return;

        	this.fnCheckByte();
        };

        this.rdo_Kind_onitemchanged = function(obj,e)
        {
        	if(e.postvalue=="T")
        	{
        		this.FV_SENDER_TYPE = "SELF";
        		this.FV_TEL_KIND = "T";
        		this.FV_SENDER = "";
        		this.edt_Sender.set_value(app.gdsUserInfo.getColumn(0, "EMP_NM")+"("+app.gdsUserInfo.getColumn(0, "OFFICE")+")");
        	}
        	else if(e.postvalue=="M")
        	{
        		this.FV_SENDER_TYPE = "SELF";
        		this.FV_TEL_KIND = "M";
        		this.FV_SENDER = "";
        		this.edt_Sender.set_value(app.gdsUserInfo.getColumn(0, "EMP_NM")+"("+app.gdsUserInfo.getColumn(0, "MOBILE")+")");
        	}
        	else if(e.postvalue=="MAIN")
        	{
        		this.FV_SENDER_TYPE = "MAIN";
        		this.FV_TEL_KIND = "";
        		this.FV_SENDER = "";
        		this.edt_Sender.set_value("대표번호(02-2140-7700)");
        	}
        };

        this.cmb_AlimKind_onitemchanged = function(obj,e)
        {
        	this.fnSetContentsInit();
        };

        this.div_Input_Button00_onclick = function(obj,e)
        {
        	var sContent = this.txt_Content.value;
        	var sUrl = this.div_Input.form.edt_URL.value;

        	sContent.lastIndexOf(sUrl);

        };
        this.pdiv_RecentSendList_onpopup = function(obj,e)
        {
        	var strSvcID = "CS_SMSSend_S01";
        	var strModelNm = "CS_SMSSend_S01";
        	var strDeptFlag = "0";
        	/*교육권한은 팀발송내역 전체 조회함*/
        	if (this.commUtil.getAuthority(172))
        	{
        		this.pdiv_RecentSendList.form.grd_RecentSendList.set_formatid("DEPT");
        		strDeptFlag = "1";
        	}
        	this.gfnAddSendParameter("DEPT_FLAG", strDeptFlag);
        	this.gfnAddOutputDataset("dsRecentSms", "dsOutput");
        	this.gfnCommonTransaction(strSvcID, strModelNm);
        };

        this.dsRecentSms_onrowposchanged = function(obj,e)
        {
        	this.pdiv_RecentSendList.form.edt_Title.set_value(this.dsRecentSms.getColumn(this.dsRecentSms.rowposition, "MSG_TITLE"));
        	this.pdiv_RecentSendList.form.txt_Content.set_value(this.dsRecentSms.getColumn(this.dsRecentSms.rowposition, "MSG_CONT"));

        	this.dsRecentRcvList.clearData();

        	var strPhnNos = this.dsRecentSms.getColumn(this.dsRecentSms.rowposition, "RECV_NO_LIST");
        	var arrPhnNo = strPhnNos.split(",");

        	for(var i = 0; i < arrPhnNo.length; i++)
        	{
        		var nRow = this.dsRecentRcvList.addRow();
        		this.dsRecentRcvList.setColumn(nRow, "PHN_NO", arrPhnNo[i]);
        	}
        };


        this.ds_Edit_cancolumnchange = function(obj,e)
        {
        	if(this.bSendHistory == true)
        	{
        		this.fnSetContentsInit();
        		this.bSendHistory = false;
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CS_SMS_EMail_Send_onload,this);
            this.btn_Close.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Send.addEventHandler("onclick",this.comm_Click,this);
            this.btn_EmployeesChoice.addEventHandler("onclick",this.comm_Click,this);
            this.rdo_SendReservation.addEventHandler("onitemchanged",this.rdo_SendReservation_onitemchanged,this);
            this.btn_EmployeesChoicePlus.addEventHandler("onclick",this.comm_Click,this);
            this.btn_EmployeesChoiceMinus.addEventHandler("onclick",this.comm_Click,this);
            this.grd_EmployeesInfo.addEventHandler("onheadclick",this.grd_EmployeesInfo_onheadclick,this);
            this.grd_EmployeesInfo.addEventHandler("oncelldblclick",this.grd_EmployeesInfo_oncelldblclick,this);
            this.rdo_Kind.addEventHandler("onitemchanged",this.rdo_Kind_onitemchanged,this);
            this.edt_InputEmailByReceiver.addEventHandler("onkeydown",this.comm_Keydown,this);
            this.btn_InputEmailByReceiverPlus.addEventHandler("onclick",this.comm_Click,this);
            this.btn_InputEmailByReceiverMinus.addEventHandler("onclick",this.comm_Click,this);
            this.edt_EmailReference.addEventHandler("onkeydown",this.comm_Keydown,this);
            this.btn_EmailReferencePlus.addEventHandler("onclick",this.comm_Click,this);
            this.btn_EmailReferenceMinus.addEventHandler("onclick",this.comm_Click,this);
            this.btn_EmailHideReferenceMinus.addEventHandler("onclick",this.comm_Click,this);
            this.btn_EmailHideReferencePlus.addEventHandler("onclick",this.comm_Click,this);
            this.edt_EmailHideReference.addEventHandler("onkeydown",this.comm_Keydown,this);
            this.txt_Content.addEventHandler("canchange",this.txt_Content_canchange,this);
            this.txt_Content.addEventHandler("onkeyup",this.txt_Content_onkeyup,this);
            this.cmb_AlimKind.addEventHandler("onitemchanged",this.cmb_AlimKind_onitemchanged,this);
            this.div_Input.form.edt_URL.addEventHandler("canchange",this.div_Input_edt_URL_canchange,this);
            this.div_Input.form.edt_ID.addEventHandler("canchange",this.div_Input_edt_ID_canchange,this);
            this.div_Input.form.edt_PW.addEventHandler("canchange",this.div_Input_edt_PW_canchange,this);
            this.div_Input.form.btn_Reset.addEventHandler("onclick",this.comm_Click,this);
            this.pdiv_RecentSendList.addEventHandler("onpopup",this.pdiv_RecentSendList_onpopup,this);
            this.pdiv_RecentSendList.form.grd_RecentSendList.addEventHandler("oncelldblclick",this.pdiv_RecentSendList_grd_RecentSendList_oncelldblclick,this);
            this.pdiv_RecentSendList.form.btn_Exit.addEventHandler("onclick",this.comm_Click,this);
            this.pdiv_RecentSendList.form.btn_SmsResultApply.addEventHandler("onclick",this.comm_Click,this);
            this.btn_RecentSendList.addEventHandler("onclick",this.comm_Click,this);
            this.dsRecentSms.addEventHandler("onrowposchanged",this.dsRecentSms_onrowposchanged,this);
            this.ds_Edit.addEventHandler("cancolumnchange",this.ds_Edit_cancolumnchange,this);
        };
        this.loadIncludeScript("CS_SMS_EMail_Send.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
