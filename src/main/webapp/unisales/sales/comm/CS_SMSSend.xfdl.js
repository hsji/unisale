(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("CS_SMSSend");
            this.set_titletext("SMS 발송");
            this.set_cssclass("frm_popBg");
            this.set_scrolltype("none");
            this.set_scrollbartype("none none");
            if (Form == this.constructor)
            {
                this._setFormPosition(830,568);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_selected", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_KIND\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NO\" type=\"STRING\" size=\"256\"/><Column id=\"EMP_NM\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NM\" type=\"STRING\" size=\"256\"/><Column id=\"GRADE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"CAPTION\" type=\"STRING\" size=\"256\"/><Column id=\"DUTY_CD\" type=\"STRING\" size=\"256\"/><Column id=\"EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"PHOTO_NM\" type=\"STRING\" size=\"256\"/><Column id=\"H_PHONE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"O_PHONE_NO\" type=\"STRING\" size=\"256\"/><Column id=\"ENTER_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"FIRE_DATE\" type=\"STRING\" size=\"256\"/><Column id=\"HOLD_OFFICE\" type=\"STRING\" size=\"256\"/><Column id=\"ISCHECKED\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSmsRtval", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">-100</Col><Col id=\"DATA\">전송성공</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"DATA\">FORMAT ERROR 데이터</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"DATA\">미가입자(폰번호자리오류, 문자 포함, 자리 오류)</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"DATA\">미가입자(이동통신사로 전송 후 ACK시)</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"DATA\">미가입자(이동통신사에서 REPORT 전송시)</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"DATA\">전송실패(아레오에 정의된 코드가 아닌경우)</Col></Row><Row><Col id=\"CODE\">10</Col><Col id=\"DATA\">PORTED OUT(번호이동 데이터)</Col></Row><Row><Col id=\"CODE\">11</Col><Col id=\"DATA\">PORTED OUT_SKT(SKT로 번호이동된 데이터)</Col></Row><Row><Col id=\"CODE\">12</Col><Col id=\"DATA\">PORTED OUT_KTF(KTF로 번호이동된 데이터)</Col></Row><Row><Col id=\"CODE\">13</Col><Col id=\"DATA\">PORTED OUT_LGT(LGT로 번호이동된 데이터)</Col></Row><Row><Col id=\"CODE\">15</Col><Col id=\"DATA\">NPDB_FAIL(이동통신사에서 NPDB조회실패)</Col></Row><Row><Col id=\"CODE\">60</Col><Col id=\"DATA\">060, 080, 030 스펨처리 =&gt; 결과코드는 미적용</Col></Row><Row><Col id=\"CODE\">61</Col><Col id=\"DATA\">스펨거부자 등록에의한 스펨처리</Col></Row><Row><Col id=\"CODE\">62</Col><Col id=\"DATA\">수신거부 미확인건 실패처리(수신거부 서버 조회시 TimeOut 등)</Col></Row><Row><Col id=\"CODE\">70</Col><Col id=\"DATA\">광고 스펨 처리(20:55~08:55) =&gt; 결과코드는 미적용</Col></Row><Row><Col id=\"CODE\">71</Col><Col id=\"DATA\">KTF URL 전송시 CALLBACK 에 null 값이 들어온 경우</Col></Row><Row><Col id=\"CODE\">72</Col><Col id=\"DATA\">번호도용문자차단서비스에 가입된 발신번호 사용</Col></Row><Row><Col id=\"DATA\">사전 미등록 발신번호 사용</Col><Col id=\"CODE\">74</Col></Row><Row><Col id=\"CODE\">89</Col><Col id=\"DATA\">전송실패(WAP PUSH 불가능한 폰)</Col></Row><Row><Col id=\"CODE\">90</Col><Col id=\"DATA\">전송실패(단말기 호처리 상태)</Col></Row><Row><Col id=\"CODE\">91</Col><Col id=\"DATA\">전송실패(이동 통신사 운영자의 메시지 삭제)</Col></Row><Row><Col id=\"CODE\">92</Col><Col id=\"DATA\">전송실패(단말기 메시지 FULL)</Col></Row><Row><Col id=\"CODE\">93</Col><Col id=\"DATA\">전송실패(단말기 전원 꺼짐)</Col></Row><Row><Col id=\"CODE\">94</Col><Col id=\"DATA\">전송실패(음영지역)</Col></Row><Row><Col id=\"CODE\">95</Col><Col id=\"DATA\">전송실패(착신거절)</Col></Row><Row><Col id=\"CODE\">96</Col><Col id=\"DATA\">전송실패(아레오에서 EXPIRE 처리)</Col></Row><Row><Col id=\"CODE\">97</Col><Col id=\"DATA\">전송실패(이동통신사에서 EXPIRE 및 실패)</Col></Row><Row><Col id=\"CODE\">99</Col><Col id=\"DATA\">전송중(이동통신사에 전송은 했으나 REPORT를 받지 못한 경우)</Col></Row><Row><Col id=\"CODE\">101</Col><Col id=\"DATA\">포멧에러의 확장코드</Col></Row><Row><Col id=\"CODE\">700</Col><Col id=\"DATA\">스팸처리 시간 제한의 확장코드</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRecentSms", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"date\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSmsStVal", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"DATA\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">0</Col><Col id=\"DATA\">전송이 요청되어 대기중인 메시지</Col></Row><Row><Col id=\"CODE\">1</Col><Col id=\"DATA\">ArreoNetworks로 전송된 메시지</Col></Row><Row><Col id=\"CODE\">2</Col><Col id=\"DATA\">메시지 포멧 에러</Col></Row><Row><Col id=\"CODE\">3</Col><Col id=\"DATA\">기타 미확정 에러</Col></Row><Row><Col id=\"CODE\">4</Col><Col id=\"DATA\">중복 전송된 메시지</Col></Row><Row><Col id=\"CODE\">5</Col><Col id=\"DATA\">설정 Timeout 값이 지나도록 ACK를 받지 못한 메시지</Col></Row><Row><Col id=\"CODE\">8</Col><Col id=\"DATA\">Null 값이 입력되거나 받는 폰번호 형식 문제로 무시된 메시지</Col></Row><Row><Col id=\"CODE\">9</Col><Col id=\"DATA\">데몬 재 가동시에 미 전송한 메시지 IGNORE_DATA_HOUR에 의해 무시된 메시지</Col></Row><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsRecentRcvList", this);
            obj._setContents("<ColumnInfo><Column id=\"PHN_NO\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutSmsEmpList_", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("stc_Sales_List04","4","152","317","31",null,null,null,null,null,null,this);
            obj.set_taborder("25");
            obj.set_cssclass("sta_WF_detailLbl01");
            obj.set_text("");
            obj.set_border("1px solid gray");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Sales_List03","4","122","317","31",null,null,null,null,null,null,this);
            obj.set_taborder("24");
            obj.set_cssclass("sta_WF_detailLbl01");
            obj.set_text("");
            obj.set_border("1px solid gray");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Sales_List05","4","182","317","42",null,null,null,null,null,null,this);
            obj.set_taborder("26");
            obj.set_cssclass("sta_WF_detailLbl01");
            obj.set_text("");
            obj.set_border("1px solid gray");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Sales_List02","4","92","317","31",null,null,null,null,null,null,this);
            obj.set_taborder("23");
            obj.set_cssclass("sta_WF_detailLbl01");
            obj.set_text("");
            obj.set_border("1px solid gray");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Sales_List01","4","38","317","55",null,null,null,null,null,null,this);
            obj.set_taborder("22");
            obj.set_cssclass("sta_WF_detailLbl01");
            obj.set_text("");
            obj.set_border("1px solid gray");
            this.addChild(obj.name, obj);

            obj = new Static("stc_BottomFrame","0",null,null,"38","1","1",null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("sta_POP_BtnBg");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Close",null,"9","15","15","12",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("btn_POP_Cls");
            obj.set_escapebutton("true");
            this.addChild(obj.name, obj);

            obj = new Button("btn_Send",null,null,"72","22","9","10",null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("보내기");
            obj.set_cssclass("btn_WF_tran");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Sender","38","43","48","46",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("발신자");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("stc_SendReservation","30","98","56","22",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("예약발송");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Date","38","127","48","22",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("일자");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Static("stc_DueDate","38","156","48","22",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("일시");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Button("btn_EmployeesChoice","16","191","70","24",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("직원선택");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Sender","104","43","207","22",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_readonly("true");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_SendReservation","104","98","134","22",null,null,null,null,null,null,this);
            obj.set_taborder("9");
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
            obj.set_taborder("10");
            obj.set_enable("false");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_DueDateHour","104","156","66","22",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_enable("false");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cmb_DueDateHour_innerdataset = new nexacro.NormalDataset("cmb_DueDateHour_innerdataset", obj);
            cmb_DueDateHour_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">00</Col><Col id=\"datacolumn\">00</Col></Row><Row><Col id=\"codecolumn\">01</Col><Col id=\"datacolumn\">01</Col></Row><Row><Col id=\"codecolumn\">02</Col><Col id=\"datacolumn\">02</Col></Row><Row><Col id=\"codecolumn\">03</Col><Col id=\"datacolumn\">03</Col></Row><Row><Col id=\"codecolumn\">04</Col><Col id=\"datacolumn\">04</Col></Row><Row><Col id=\"codecolumn\">05</Col><Col id=\"datacolumn\">05</Col></Row><Row><Col id=\"codecolumn\">06</Col><Col id=\"datacolumn\">06</Col></Row><Row><Col id=\"codecolumn\">07</Col><Col id=\"datacolumn\">07</Col></Row><Row><Col id=\"codecolumn\">08</Col><Col id=\"datacolumn\">08</Col></Row><Row><Col id=\"codecolumn\">09</Col><Col id=\"datacolumn\">09</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">11</Col><Col id=\"datacolumn\">11</Col></Row><Row><Col id=\"codecolumn\">12</Col><Col id=\"datacolumn\">12</Col></Row><Row><Col id=\"codecolumn\">13</Col><Col id=\"datacolumn\">13</Col></Row><Row><Col id=\"codecolumn\">14</Col><Col id=\"datacolumn\">14</Col></Row><Row><Col id=\"codecolumn\">15</Col><Col id=\"datacolumn\">15</Col></Row><Row><Col id=\"codecolumn\">16</Col><Col id=\"datacolumn\">16</Col></Row><Row><Col id=\"codecolumn\">17</Col><Col id=\"datacolumn\">17</Col></Row><Row><Col id=\"codecolumn\">18</Col><Col id=\"datacolumn\">18</Col></Row><Row><Col id=\"codecolumn\">19</Col><Col id=\"datacolumn\">19</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">21</Col><Col id=\"datacolumn\">21</Col></Row><Row><Col id=\"codecolumn\">22</Col><Col id=\"datacolumn\">22</Col></Row><Row><Col id=\"codecolumn\">23</Col><Col id=\"datacolumn\">23</Col></Row></Rows>");
            obj.set_innerdataset(cmb_DueDateHour_innerdataset);
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_DueDateHour","178","156","24","22",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("시");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("cmb_DueDateMinute","210","156","66","22",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_enable("false");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var cmb_DueDateMinute_innerdataset = new nexacro.NormalDataset("cmb_DueDateMinute_innerdataset", obj);
            cmb_DueDateMinute_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">00</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">01</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">02</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">03</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">04</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">05</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">06</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">07</Col></Row><Row><Col id=\"codecolumn\">8</Col><Col id=\"datacolumn\">08</Col></Row><Row><Col id=\"codecolumn\">9</Col><Col id=\"datacolumn\">09</Col></Row><Row><Col id=\"codecolumn\">10</Col><Col id=\"datacolumn\">10</Col></Row><Row><Col id=\"codecolumn\">11</Col><Col id=\"datacolumn\">11</Col></Row><Row><Col id=\"codecolumn\">12</Col><Col id=\"datacolumn\">12</Col></Row><Row><Col id=\"codecolumn\">13</Col><Col id=\"datacolumn\">13</Col></Row><Row><Col id=\"codecolumn\">14</Col><Col id=\"datacolumn\">14</Col></Row><Row><Col id=\"codecolumn\">15</Col><Col id=\"datacolumn\">15</Col></Row><Row><Col id=\"codecolumn\">16</Col><Col id=\"datacolumn\">16</Col></Row><Row><Col id=\"codecolumn\">17</Col><Col id=\"datacolumn\">17</Col></Row><Row><Col id=\"codecolumn\">18</Col><Col id=\"datacolumn\">18</Col></Row><Row><Col id=\"codecolumn\">19</Col><Col id=\"datacolumn\">19</Col></Row><Row><Col id=\"codecolumn\">20</Col><Col id=\"datacolumn\">20</Col></Row><Row><Col id=\"codecolumn\">21</Col><Col id=\"datacolumn\">21</Col></Row><Row><Col id=\"codecolumn\">22</Col><Col id=\"datacolumn\">22</Col></Row><Row><Col id=\"codecolumn\">23</Col><Col id=\"datacolumn\">23</Col></Row><Row><Col id=\"codecolumn\">24</Col><Col id=\"datacolumn\">24</Col></Row><Row><Col id=\"codecolumn\">25</Col><Col id=\"datacolumn\">25</Col></Row><Row><Col id=\"codecolumn\">26</Col><Col id=\"datacolumn\">26</Col></Row><Row><Col id=\"codecolumn\">27</Col><Col id=\"datacolumn\">27</Col></Row><Row><Col id=\"codecolumn\">28</Col><Col id=\"datacolumn\">28</Col></Row><Row><Col id=\"codecolumn\">29</Col><Col id=\"datacolumn\">29</Col></Row><Row><Col id=\"codecolumn\">30</Col><Col id=\"datacolumn\">30</Col></Row><Row><Col id=\"codecolumn\">31</Col><Col id=\"datacolumn\">31</Col></Row><Row><Col id=\"codecolumn\">32</Col><Col id=\"datacolumn\">32</Col></Row><Row><Col id=\"codecolumn\">33</Col><Col id=\"datacolumn\">33</Col></Row><Row><Col id=\"codecolumn\">34</Col><Col id=\"datacolumn\">34</Col></Row><Row><Col id=\"codecolumn\">35</Col><Col id=\"datacolumn\">35</Col></Row><Row><Col id=\"codecolumn\">36</Col><Col id=\"datacolumn\">36</Col></Row><Row><Col id=\"codecolumn\">37</Col><Col id=\"datacolumn\">37</Col></Row><Row><Col id=\"codecolumn\">38</Col><Col id=\"datacolumn\">38</Col></Row><Row><Col id=\"codecolumn\">39</Col><Col id=\"datacolumn\">39</Col></Row><Row><Col id=\"codecolumn\">40</Col><Col id=\"datacolumn\">40</Col></Row><Row><Col id=\"codecolumn\">41</Col><Col id=\"datacolumn\">41</Col></Row><Row><Col id=\"codecolumn\">42</Col><Col id=\"datacolumn\">42</Col></Row><Row><Col id=\"codecolumn\">43</Col><Col id=\"datacolumn\">43</Col></Row><Row><Col id=\"codecolumn\">44</Col><Col id=\"datacolumn\">44</Col></Row><Row><Col id=\"codecolumn\">45</Col><Col id=\"datacolumn\">45</Col></Row><Row><Col id=\"codecolumn\">46</Col><Col id=\"datacolumn\">46</Col></Row><Row><Col id=\"codecolumn\">47</Col><Col id=\"datacolumn\">47</Col></Row><Row><Col id=\"codecolumn\">48</Col><Col id=\"datacolumn\">48</Col></Row><Row><Col id=\"codecolumn\">49</Col><Col id=\"datacolumn\">49</Col></Row><Row><Col id=\"codecolumn\">50</Col><Col id=\"datacolumn\">50</Col></Row><Row><Col id=\"codecolumn\">51</Col><Col id=\"datacolumn\">51</Col></Row><Row><Col id=\"codecolumn\">52</Col><Col id=\"datacolumn\">52</Col></Row><Row><Col id=\"codecolumn\">53</Col><Col id=\"datacolumn\">53</Col></Row><Row><Col id=\"codecolumn\">54</Col><Col id=\"datacolumn\">54</Col></Row><Row><Col id=\"codecolumn\">55</Col><Col id=\"datacolumn\">55</Col></Row><Row><Col id=\"codecolumn\">56</Col><Col id=\"datacolumn\">56</Col></Row><Row><Col id=\"codecolumn\">57</Col><Col id=\"datacolumn\">57</Col></Row><Row><Col id=\"codecolumn\">58</Col><Col id=\"datacolumn\">58</Col></Row><Row><Col id=\"codecolumn\">59</Col><Col id=\"datacolumn\">59</Col></Row><Row><Col id=\"codecolumn\">60</Col><Col id=\"datacolumn\">00</Col></Row></Rows>");
            obj.set_innerdataset(cmb_DueDateMinute_innerdataset);
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("stc_DueDateMinute","284","156","24","22",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("분");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("btn_EmployeesChoicePlus","272","195","16","16",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_cssclass("btn_POP_Add");
            this.addChild(obj.name, obj);

            obj = new Button("btn_EmployeesChoiceMinus","296","195","16","16",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_cssclass("btn_POP_Del");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_EmployeesInfo","5","229","316","297",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_binddataset("ds_selected");
            obj.set_autofittype("col");
            obj.set_cellsizingtype("col");
            obj.set_cellmovingtype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"60\"/><Column size=\"104\"/><Column size=\"150\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"연락처\"/></Band><Band id=\"body\"><Cell displaytype=\"checkboxcontrol\" text=\"bind:ISCHECKED\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:EMP_NM\"/><Cell col=\"2\" text=\"bind:H_PHONE_NO\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_RecentSendList","8",null,"106","24",null,"8",null,null,null,null,this);
            obj.set_taborder("19");
            obj.set_text("최근 발송내역");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_Title","328","46","497","22",null,null,null,null,null,null,this);
            obj.set_taborder("20");
            obj.set_readonly("false");
            obj.set_displaynulltext("제목을 입력하세요. (최대 10자)");
            obj.set_enable("false");
            obj.set_text("제목을 입력하세요. (최대 10자)");
            this.addChild(obj.name, obj);

            obj = new TextArea("txt_Content","328","75","496","451",null,null,null,null,null,null,this);
            obj.set_taborder("21");
            obj.set_wordWrap("english");
            obj.set_maxlength("2000");
            obj.getSetter("validate").set("title:내용,required:true");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_TelephoneNumber","104","192","155","22",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_displaynulltext("전화번호 입력");
            this.addChild(obj.name, obj);

            obj = new Static("stc_Byte","721","495","95","22",null,null,null,null,null,null,this);
            obj.set_taborder("27");
            obj.set_text("0/80 Byte");
            obj.set_cssclass("sta_WF_DetailTit");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("pdiv_RecentSendList","838","-1","523","565",null,null,null,null,null,null,this);
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

            obj = new Grid("grd_RecentSendList2","319","288",null,"237","4",null,null,null,null,null,this.pdiv_RecentSendList.form);
            obj.set_taborder("1");
            obj.set_autofittype("col");
            obj.set_binddataset("dsRecentRcvList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"108\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"수신자 그룹\"/></Band><Band id=\"body\"><Cell text=\"bind:PHN_NO\"/></Band></Format></Formats>");
            this.pdiv_RecentSendList.addChild(obj.name, obj);

            obj = new Static("stc_BottomFrame","0",null,null,"38","0","0",null,null,null,null,this.pdiv_RecentSendList.form);
            obj.set_taborder("2");
            obj.set_cssclass("sta_POP_BtnBg");
            this.pdiv_RecentSendList.addChild(obj.name, obj);

            obj = new Button("btn_ReSend",null,null,"108","22","76","8",null,null,null,null,this.pdiv_RecentSendList.form);
            obj.set_taborder("3");
            obj.set_text("다시 보내기");
            obj.set_cssclass("btn_WF_tran");
            this.pdiv_RecentSendList.addChild(obj.name, obj);

            obj = new Button("btn_Exit",null,null,"60","22","8","8",null,null,null,null,this.pdiv_RecentSendList.form);
            obj.set_taborder("4");
            obj.set_text("닫기");
            obj.set_cssclass("btn_WF_tran");
            this.pdiv_RecentSendList.addChild(obj.name, obj);

            obj = new TextArea("txt_Content","69","316","242","209",null,null,null,null,null,null,this.pdiv_RecentSendList.form);
            obj.set_taborder("5");
            obj.getSetter("validate").set("title:내용,required:true");
            obj.set_wordWrap("english");
            this.pdiv_RecentSendList.addChild(obj.name, obj);

            obj = new Edit("edt_Title","69","289","242","22",null,null,null,null,null,null,this.pdiv_RecentSendList.form);
            obj.set_taborder("6");
            obj.set_enable("false");
            this.pdiv_RecentSendList.addChild(obj.name, obj);

            obj = new Static("stc_Title","6","288","56","22",null,null,null,null,null,null,this.pdiv_RecentSendList.form);
            obj.set_taborder("7");
            obj.set_text("제 목");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("center");
            this.pdiv_RecentSendList.addChild(obj.name, obj);

            obj = new Static("stc_Content","6","317","56","208",null,null,null,null,null,null,this.pdiv_RecentSendList.form);
            obj.set_taborder("8");
            obj.set_text("내 용");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("center");
            this.pdiv_RecentSendList.addChild(obj.name, obj);

            obj = new Static("stc_GbRecentSendListText","3","4","515","30",null,null,null,null,null,null,this.pdiv_RecentSendList.form);
            obj.set_taborder("9");
            obj.set_cssclass("sta_POP_GroupBg");
            this.pdiv_RecentSendList.addChild(obj.name, obj);

            obj = new Static("Static05","14","11","128","15",null,null,null,null,null,null,this.pdiv_RecentSendList.form);
            obj.set_taborder("10");
            obj.set_text("최근 발송내역");
            obj.set_cssclass("sta_POP_GroupTit");
            this.pdiv_RecentSendList.addChild(obj.name, obj);

            obj = new Static("stc_Date",null,"7","192","22","16",null,null,null,null,null,this.pdiv_RecentSendList.form);
            obj.set_taborder("11");
            obj.set_text("최근2개월치만 이력조회가능");
            obj.set_cssclass("sta_WF_DetailTit");
            obj.set_textAlign("right");
            this.pdiv_RecentSendList.addChild(obj.name, obj);

            obj = new Button("btn_SmsResultApply","12","535","102","22",null,null,null,null,null,null,this.pdiv_RecentSendList.form);
            obj.set_taborder("12");
            obj.set_text("전송결과 적용");
            obj.set_cssclass("btn_WF_tran");
            this.pdiv_RecentSendList.addChild(obj.name, obj);

            obj = new Static("Static00","8","5","77","22",null,null,null,null,null,null,this);
            obj.set_taborder("29");
            obj.set_text("SMS발송");
            obj.set_color("white");
            obj.set_cssclass("sta_POP_Title");
            this.addChild(obj.name, obj);

            obj = new Radio("rdo_Kind","104","67","203","22",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_rowcount("1");
            obj.set_visible("false");
            var rdo_Kind_innerdataset = new nexacro.NormalDataset("rdo_Kind_innerdataset", obj);
            rdo_Kind_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"datacolumn\">핸드폰</Col><Col id=\"codecolumn\">M</Col></Row><Row><Col id=\"datacolumn\">내선번호</Col><Col id=\"codecolumn\">T</Col></Row><Row><Col id=\"datacolumn\">대표번호</Col><Col id=\"codecolumn\">MAIN</Col></Row></Rows>");
            obj.set_innerdataset(rdo_Kind_innerdataset);
            obj.set_text("핸드폰");
            obj.set_value("M");
            obj.set_index("0");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","96","39","1","185",null,null,null,null,null,null,this);
            obj.set_taborder("30");
            obj.set_text("");
            obj.set_border("1px solid gray");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.pdiv_RecentSendList.form
            obj = new Layout("default","",0,0,this.pdiv_RecentSendList.form,function(p){});
            this.pdiv_RecentSendList.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",830,568,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.addIncludeScript("CS_SMSSend.xfdl","Script::CommSystem.xjs");
        this.addIncludeScript("CS_SMSSend.xfdl","Script::CommTrans.xjs");
        this.addIncludeScript("CS_SMSSend.xfdl","Script::CommUtil.xjs");
        this.addIncludeScript("CS_SMSSend.xfdl","Script::CommGrid.xjs");
        this.registerScript("CS_SMSSend.xfdl", function() {
        /************************************************************************************************
         * 01. 업무구분 : 공통 - 공통
         * 02. 화면명   : SMS 발송 (CS_SMSSend_R01, CS_SMSSend_S01)
         * 03. 화면설명 :
         * 04. 작성일   : 2018.08.08
         * 05. 작성자   : 안주환
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
        var app;

        /************************************************************************************************
         * FORM 영역
        ************************************************************************************************/
        this.CS_SMSSend_onload = function(obj,e)
        {
        	this.gfnCompInit(obj); //헤더클릭 이벤트 없을 시 사용
        	this.fnFormInit();
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
        	/*발신목록 전달받아서 셋팅*/
        	for(var i = 0; i<this.parent.dsInput.rowcount; i++)
        	{
        		var nRow = this.ds_selected.addRow();
        		this.ds_selected.setColumn(nRow, "EMP_NM", this.parent.dsInput.getColumn(i, "EMP_NAME"));
        		this.ds_selected.setColumn(nRow, "H_PHONE_NO", this.parent.dsInput.getColumn(i, "PHONE_NO"));
        	}
        }

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

        	alert("SMS를 발송합니다.");
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

        this.fnAddReceiver = function(num)
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

        this.fnSendSMS = function()
        {
        	var strSvcID 	= "SendSMS";
        	var	sMsg		= this.txt_Content.value;																							//  sMsg - 메세지 내용
        	var	sTitle 		= this.edt_Title.value;																								//  sTitle - 제목
        	var	bReverve 	= this.rdo_SendReservation.value == "Y" ? true : false;																//  bReverve - 예약여부 (true/false)
        	var	sReqSendDate 	= String(this.cal_Date.value) + String(this.cmb_DueDateHour.value) + String(this.cmb_DueDateMinute.value) + "00";	//  sSendDttm - 예약발송시간

        	// var sMsgType	= (this.commUtil.getByteSize(this.txt_Content.value) > 80) ? "M" : "A";												//  sMsgType - 메세지 타입 (A:SMS, M:MMS)
        	if(this.ds_selected.rowcount == 0) 	this.alert("받는 사람을 선택해 주세요!");

        	var arrSmsInfo = new Array();

        	/* 설정 */
        	arrSmsInfo[0] = {};
        	arrSmsInfo[0].pvUserKind = "BASE";
        	arrSmsInfo[0].pvUserCode = this.ds_selected;

        	this.gfnAddSmsList(arrSmsInfo);
        	this.gfnSendSms(strSvcID, this.FV_SENDER_TYPE, this.FV_TEL_KIND, this.FV_SENDER, sMsg, sTitle, bReverve, sReqSendDate);
        }

        this.fnSmsResultApply = function()
        {
        	this.gfnCommonTransaction("SmsResultApply", "CS_SMS_EMail_Send_R03");
        };

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
        			case "CS_SMSSend_S01" :
        				break;
        			case "SendSMS" :
        				this.alert("발송되었습니다.");
        				break;
        			default :
        				break;
        		}
        	}
        }

        /************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        ************************************************************************************************/
        this.pdiv_RecentSendList_grd_RecentSendList_oncelldblclick = function(obj,e)
        {
        	this.fnSetSmsData();
        };

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
        			this.fnAddReceiver(this.edt_TelephoneNumber.value);
        			break;
        		case "btn_EmployeesChoiceMinus" :
        			this.ds_selected.deleteRow(this.ds_selected.rowposition);
        			this.fnDeleteRow(this.ds_selected);
        			break;
        		case "btn_Send" :
        			if(this.fnCheckTheValidation()) {
        				if(this.confirm("SMS 발송하시겠습니까?")) {
        					this.fnSendSMS();
        				}
        			}
        			break;
        		case "btn_Close" :
        			this.close();
        			break;
        		case "btn_RecentSendList" :
        			var frms = nexacro.getPopupFrames();
        			var frm = frms["CS_SMSSend"];				/* 현재 팝업의 프레임 가져오기 */
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

        //오늘이후날짜 check
        this.ds_input_cancolumnchange = function(obj, e)
        {
        	if( this.gfnGetDiffDay(this.gfnGetToday("S"),String(e.newvalue)) < 0)
        	{
        		alert("오늘 이후의 날짜를 선택해주십시오.");
        		return false;
        	}
        }

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

        this.dsRecentSms_onrowposchanged = function(obj, e)
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

        this.fnSetSmsData = function()
        {
        	if(confirm("입력된 연락처와 메세지에 덮어쓰기 합니다.\n 선택된 최근 발송내역의 메세지와 수신자 그룹으로 메세지를 작성하시겠습니까?"))
        	{
        		this.edt_Title.set_value(this.dsRecentSms.getColumn(this.dsRecentSms.rowposition, "MSG_TITLE"));
        		this.txt_Content.set_value(this.dsRecentSms.getColumn(this.dsRecentSms.rowposition, "MSG_CONT"));

        		this.ds_selected.clearData();

        		for(var i = 0; i < this.dsRecentRcvList.getRowCount(); i++)
        		{
        			var nRow = this.ds_selected.addRow();
        			this.ds_selected.setColumn(nRow, "EMP_NM", "-");
        			this.ds_selected.setColumn(nRow, "H_PHONE_NO", this.dsRecentRcvList.getColumn(i, "PHN_NO"));
        		}
        	}
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

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.CS_SMSSend_onload,this);
            this.btn_Close.addEventHandler("onclick",this.comm_Click,this);
            this.btn_Send.addEventHandler("onclick",this.comm_Click,this);
            this.btn_EmployeesChoice.addEventHandler("onclick",this.comm_Click,this);
            this.rdo_SendReservation.addEventHandler("onitemchanged",this.rdo_SendReservation_onitemchanged,this);
            this.btn_EmployeesChoicePlus.addEventHandler("onclick",this.comm_Click,this);
            this.btn_EmployeesChoiceMinus.addEventHandler("onclick",this.comm_Click,this);
            this.grd_EmployeesInfo.addEventHandler("onheadclick",this.grd_EmployeesInfo_onheadclick,this);
            this.grd_EmployeesInfo.addEventHandler("oncelldblclick",this.grd_EmployeesInfo_oncelldblclick,this);
            this.btn_RecentSendList.addEventHandler("onclick",this.comm_Click,this);
            this.txt_Content.addEventHandler("canchange",this.txt_Content_canchange,this);
            this.txt_Content.addEventHandler("onkeyup",this.txt_Content_onkeyup,this);
            this.pdiv_RecentSendList.addEventHandler("onpopup",this.pdiv_RecentSendList_onpopup,this);
            this.pdiv_RecentSendList.form.grd_RecentSendList.addEventHandler("oncelldblclick",this.pdiv_RecentSendList_grd_RecentSendList_oncelldblclick,this);
            this.pdiv_RecentSendList.form.btn_ReSend.addEventHandler("onclick",this.comm_Click,this);
            this.pdiv_RecentSendList.form.btn_Exit.addEventHandler("onclick",this.comm_Click,this);
            this.pdiv_RecentSendList.form.btn_SmsResultApply.addEventHandler("onclick",this.comm_Click,this);
            this.rdo_Kind.addEventHandler("onitemchanged",this.rdo_Kind_onitemchanged,this);
            this.dsRecentSms.addEventHandler("onrowposchanged",this.dsRecentSms_onrowposchanged,this);
            this.ds_input.addEventHandler("cancolumnchange",this.ds_input_cancolumnchange,this);
        };
        this.loadIncludeScript("CS_SMSSend.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
