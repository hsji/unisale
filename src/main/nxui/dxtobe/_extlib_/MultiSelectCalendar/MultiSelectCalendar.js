if(!nexacro.MultiSelectCalendar){nexacro.MultiSelectCalendar=function(_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l){nexacro._CompositeComponent.call(this,_a,_b,_c,_d,_e,_f,_g,_h,_i,_j,_k,_l);};var _pMultiSelectCalendar=nexacro._createPrototype(nexacro._CompositeComponent,nexacro.MultiSelectCalendar);nexacro.MultiSelectCalendar.prototype=_pMultiSelectCalendar;_pMultiSelectCalendar._type_name="MultiSelectCalendar";_pMultiSelectCalendar.accessibilityrole="form";_pMultiSelectCalendar.fvLastDays=["31","28","31","30","31","30","31","31","30","31","30","31"];_pMultiSelectCalendar.fvIntThisStrYear="";_pMultiSelectCalendar.fvIntThisStrMonth="";_pMultiSelectCalendar.fvIntThisYear= -1;_pMultiSelectCalendar.fvIntThisMonth= -1;_pMultiSelectCalendar.fvIntPrevYear= -1;_pMultiSelectCalendar.fvIntPrevMonth= -1;_pMultiSelectCalendar.fvIntNextYear= -1;_pMultiSelectCalendar.fvIntNextMonth= -1;_pMultiSelectCalendar._selectedDateList=[];_pMultiSelectCalendar._defaultYYYYMM="";_pMultiSelectCalendar._callBackParam={form:null,comp:null,left:0,top:0,callback:null};_pMultiSelectCalendar._isNull=function(_a){if(new String(_a).valueOf()=="undefined"){return true;}if(_a==null){return true;}var _b=new String(_a);if(_b==null){return true;}if(_b.toString().length==0){return true;}return false;};_pMultiSelectCalendar._getDate=function(_a,_b){if(this._isNull(_a)){_a="date";}if(this._isNull(_b)){_b=false;var _c="";var _d="";var _e="";}else{_b=true;var _c="-";var _d=":";var _e=" ";}var _f;var _g=new Date();if(_a=="date"){_f=_g.getFullYear()+_c+((_g.getMonth()+1)+"").padLeft(2,'0')+_c+(_g.getDate()+"").padLeft(2,'0');}else if(_a=="day"){_f=_g.getFullYear()+_c+((_g.getMonth()+1)+"").padLeft(2,'0')+_c+(_g.getDate()+"").padLeft(2,'0')+_e+this._getDayKor(_g.getFullYear()+((_g.getMonth()+1)+"").padLeft(2,'0')+(_g.getDate()+"").padLeft(2,'0'));}else if(_a=="time"){_f=_g.getFullYear()+_c+((_g.getMonth()+1)+"").padLeft(2,'0')+_c+(_g.getDate()+"").padLeft(2,'0')+_e+(_g.getHours()+"").padLeft(2,'0')+_d+(_g.getMinutes()+"").padLeft(2,'0')+_d+(_g.getSeconds()+"").padLeft(2,'0');}else if(_a=="milli"){_f=_g.getFullYear()+_c+((_g.getMonth()+1)+"").padLeft(2,'0')+_c+(_g.getDate()+"").padLeft(2,'0')+_e+(_g.getHours()+"").padLeft(2,'0')+_d+(_g.getMinutes()+"").padLeft(2,'0')+_d+(_g.getSeconds()+"").padLeft(2,'0')+_d+(_g.getMilliseconds()+"").padLeft(3,'0');}return (_f);};_pMultiSelectCalendar._getDay=function(_a){var _b=new Date();var _c=parseInt(_a.substr(0,4));var _d=parseInt(_a.substr(4,2)-1);var _e=parseInt(_a.substr(6,2));_b.setFullYear(_c,_d,_e);return _b.getDay();};_pMultiSelectCalendar._getDayKor=function(_a){var _b= -1;var _c=["일","월","화","수","목","금","토"];_b=this._getDay(_a);if(_b<0){return "";}return _c[_b];};_pMultiSelectCalendar.setYearRange=function(_a,_b){if(this._isNull(_a)){_a=1900;}if(this._isNull(_b)){_b=2050;}for(var _c=_a;_c<=_b;_c++ ){nRow=this.form.dsYear.addRow();this.form.dsYear.setColumn(nRow,"year",_c);}};_pMultiSelectCalendar.setYearMonth=function(_a,_b){if(this._isNull(_a)||this._isNull(_b)){var _c=this._getDate();_a=_c.substr(0,4);_b=_c.substr(4,2);}_b=(_b+"").padLeft(2,"0");this.fvIntThisStrYear=_a;this.fvIntThisStrMonth=_b;this.fvIntThisYear=parseInt(_a);this.fvIntThisMonth=parseInt(_b);};_pMultiSelectCalendar.setSelectDates=function(_a){if(nexacro._isArray(_a)==false){trace("선택일자는 Array로 처리하여야 합니다.");return;}this._selectedDateList=_a;};_pMultiSelectCalendar.getSelectDates=function(){var _a=this._selectedDateList;_a.sort(function(_b,_c){return _b-_c;});return _a;};_pMultiSelectCalendar._resetSelectDate=function(_a,_b){var _c=this._selectedDateList;if(_b){if(_c.indexOf(_a)<0){_c.push(_a);}}else{var _d=_c.indexOf(_a);if(_d>=0){_c.splice(_d,1);}}};_pMultiSelectCalendar._getSelectDate=function(_a){var _b=this._selectedDateList;return (_b.indexOf(_a)>=0?true:false);};_pMultiSelectCalendar.openSelectCalendar=function(_a,_b,_c,_d,_e){if(_a&&_b){this._callBackParam.form=_a;this._callBackParam.comp=_b;this._callBackParam.left=_c||0;this._callBackParam.top=top||0;this._callBackParam.callback=_e;}this.form.pdivCal.trackPopupByComponent(this._callBackParam.comp,this._callBackParam.left,this._callBackParam.top);};_pMultiSelectCalendar.fnShowCalendarData=function(_a,_b,_c){this.form.dsCal.clearData();if(this.fvIntThisYear== -1){this.setYearMonth();}this.form.pdivCal.form.cboYear.set_value(this.fvIntThisYear);this.form.pdivCal.form.cboMonth.set_index(this.fvIntThisMonth-1);switch(this.fvIntThisMonth){case 1:this.fvIntPrevYear=this.fvIntThisYear-1;this.fvIntPrevMonth=12;this.fvIntNextYear=this.fvIntThisYear;this.fvIntNextMonth=2;break;case 12:this.fvIntPrevYear=this.fvIntThisYear;this.fvIntPrevMonth=11;this.fvIntNextYear=this.fvIntThisYear+1;this.fvIntNextMonth=1;break;default:this.fvIntPrevYear=this.fvIntThisYear;this.fvIntPrevMonth=parseInt(this.fvIntThisMonth)-1;this.fvIntNextYear=this.fvIntThisYear;this.fvIntNextMonth=parseInt(this.fvIntThisMonth)+1;break;}var _a=this.fvIntThisStrYear;var _b=this.fvIntThisMonth;var _d=new Date();_d.setFullYear(parseInt(_a),parseInt(_b)-1,1);_d.setHours(0,0,0);_d.setMilliseconds(0);var _e=_d.getDay();if((this.fvIntThisYear%4)==0){if((this.fvIntThisYear%100)==0){if((this.fvIntThisYear%400)==0){this.fvLastDays[intPrevMonth]="29";}else{this.fvLastDays[1]="28";}}else{this.fvLastDays[1]="29";}}else{this.fvLastDays[1]="28";}var _f=parseInt(this.fvLastDays[this.fvIntPrevMonth-1]);var _g,_h;var _i=1;var _j;var _k;var _l=0;var _m;var _n=this._getDate();var _o=parseInt(_n.substr(0,4));var _p=parseInt(_n.substr(4,2));var _q=parseInt(_n.substr(6,2));var _r=_a+_b;var _s="";var _t="";var _u="";var _v=false;this.form.dsCal.set_enableevent(false);for(_g=0;_g<6;_g++ ){if(parseInt(this.fvLastDays[this.fvIntThisMonth-1])<_i){break;}this.form.dsCal.addRow();for(_h=0;_h<7;_h++ ){if(_g==0&&_e>_h){continue;}_s=_r+(_i+"").padLeft(2,"0");_v=this._getSelectDate(_s);_t="css"+_h;_u=null;if(_h==0){_u="CalendarWeekSunColor";}else if(_h==6){_u="CalendarWeekSatColor";}else{_u="CalendarWeekDayColor";}if((_o==this.form.pdivCal.form.cboYear.value)&&(_p==this.form.pdivCal.form.cboMonth.value)&&_q==_i){_u="CalendarWeekToDayColor";}this.form.dsCal.setColumn(_g,"select"+(_h),(_v?"Y":"N"));this.form.dsCal.setColumn(_g,_t,"expr:select"+_h+"=='Y'?'"+_u+"':'"+_u+"_select'");this.form.dsCal.setColumn(_g,"d"+(_h),_i);this.form.dsCal.setColumn(_g,"date"+(_h),_s);_i++ ;if(parseInt(this.fvLastDays[this.fvIntThisMonth-1])<_i){break;}}}this.form.dsCal.set_enableevent(true);var _w=37+(this.form.dsCal.rowcount* 37)+2;var _x=_w+39+33;this.form.pdivCal.set_height(_x);};delete _pMultiSelectCalendar;}nexacro.MultiSelectCalendar.prototype._get_form_module=function(){return function(){if(!this._is_form){return;}var _a=null;this.on_create=function(){this.set_name("MultiSelectCalendar");this.set_titletext("MultiSelectCalendar");if(nexacro.Form==this.constructor){this._setFormPosition(50,30);}_a=new nexacro.NormalDataset("dsYear",this);_a._setContents("<ColumnInfo><Column id=\"year\" type=\"INT\" size=\"4\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new nexacro.NormalDataset("dsMonth",this);_a._setContents("<ColumnInfo><Column id=\"month\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"month\">01</Col></Row><Row><Col id=\"month\">02</Col></Row><Row><Col id=\"month\">03</Col></Row><Row><Col id=\"month\">04</Col></Row><Row><Col id=\"month\">05</Col></Row><Row><Col id=\"month\">06</Col></Row><Row><Col id=\"month\">07</Col></Row><Row><Col id=\"month\">08</Col></Row><Row><Col id=\"month\">09</Col></Row><Row><Col id=\"month\">10</Col></Row><Row><Col id=\"month\">11</Col></Row><Row><Col id=\"month\">12</Col></Row></Rows>");this.addChild(_a.name,_a);_a=new nexacro.NormalDataset("dsCal",this);_a._setContents("<ColumnInfo><Column id=\"d0\" type=\"STRING\" size=\"10\"/><Column id=\"d1\" type=\"STRING\" size=\"10\"/><Column id=\"d2\" type=\"STRING\" size=\"10\"/><Column id=\"d3\" type=\"STRING\" size=\"10\"/><Column id=\"d4\" type=\"STRING\" size=\"10\"/><Column id=\"d5\" type=\"STRING\" size=\"10\"/><Column id=\"d6\" type=\"STRING\" size=\"10\"/><Column id=\"css0\" type=\"STRING\" size=\"256\"/><Column id=\"css1\" type=\"STRING\" size=\"256\"/><Column id=\"css2\" type=\"STRING\" size=\"256\"/><Column id=\"css3\" type=\"STRING\" size=\"256\"/><Column id=\"css4\" type=\"STRING\" size=\"256\"/><Column id=\"css5\" type=\"STRING\" size=\"256\"/><Column id=\"css6\" type=\"STRING\" size=\"256\"/><Column id=\"css7\" type=\"STRING\" size=\"256\"/><Column id=\"date0\" type=\"STRING\" size=\"256\"/><Column id=\"date1\" type=\"STRING\" size=\"256\"/><Column id=\"date2\" type=\"STRING\" size=\"256\"/><Column id=\"date3\" type=\"STRING\" size=\"256\"/><Column id=\"date4\" type=\"STRING\" size=\"256\"/><Column id=\"date5\" type=\"STRING\" size=\"256\"/><Column id=\"date6\" type=\"STRING\" size=\"256\"/><Column id=\"select0\" type=\"STRING\" size=\"256\"/><Column id=\"select1\" type=\"STRING\" size=\"256\"/><Column id=\"select2\" type=\"STRING\" size=\"256\"/><Column id=\"select3\" type=\"STRING\" size=\"256\"/><Column id=\"select4\" type=\"STRING\" size=\"256\"/><Column id=\"select5\" type=\"STRING\" size=\"256\"/><Column id=\"select6\" type=\"STRING\" size=\"256\"/></ColumnInfo>");this.addChild(_a.name,_a);_a=new nexacro.PopupDiv("pdivCal","0","0","234","296",null,null,null,null,null,null,this);_a.set_text("pdiv00");_a.set_visible("false");_a.set_cssclass("pdiv_WF_Bg");this.addChild(_a.name,_a);_a=new nexacro.Button("btnPrev","7","5","25","25",null,null,null,null,null,null,this.pdivCal.form);_a.set_taborder("0");_a.set_cssclass("btn_WF_PreBtn");this.pdivCal.addChild(_a.name,_a);_a=new nexacro.Combo("cboYear","44","5","77","24",null,null,null,null,null,null,this.pdivCal.form);_a.set_taborder("1");_a.set_innerdataset("dsYear");_a.set_codecolumn("year");_a.set_datacolumn("year");_a.set_cssclass("cbo_WF_Cal");_a.set_text("2020");_a.set_value("");_a.set_index("-1");this.pdivCal.addChild(_a.name,_a);_a=new nexacro.Combo("cboMonth","129","5","60","24",null,null,null,null,null,null,this.pdivCal.form);_a.set_taborder("2");_a.set_innerdataset("dsMonth");_a.set_codecolumn("month");_a.set_datacolumn("month");_a.set_cssclass("cbo_WF_Cal");_a.set_text("01");_a.set_value("01");_a.set_index("0");this.pdivCal.addChild(_a.name,_a);_a=new nexacro.Button("btnNext",null,"5","25","25","7",null,null,null,null,null,this.pdivCal.form);_a.set_taborder("3");_a.set_cssclass("btn_WF_NxtBtn");this.pdivCal.addChild(_a.name,_a);_a=new nexacro.Grid("grdCal","5","cboYear:5",null,null,"5","33",null,null,null,null,this.pdivCal.form);_a.set_taborder("4");_a.set_autofittype("col");_a.set_binddataset("dsCal");_a.set_selecttype("cell");_a.set_cssclass("grd_WF_Cal");_a.set_border("1px solid #cccccc");_a._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"37\"/><Column size=\"37\"/><Column size=\"37\"/><Column size=\"37\"/><Column size=\"37\"/><Column size=\"37\"/><Column size=\"37\"/></Columns><Rows><Row size=\"37\" band=\"head\"/><Row size=\"37\"/></Rows><Band id=\"head\"><Cell text=\"일\" cssclass=\"sunday\"/><Cell col=\"1\" text=\"월\"/><Cell col=\"2\" text=\"화\"/><Cell col=\"3\" text=\"수\"/><Cell col=\"4\" text=\"목\"/><Cell col=\"5\" text=\"금\"/><Cell col=\"6\" text=\"토\" cssclass=\"saturday\"/></Band><Band id=\"body\"><Cell text=\"bind:d0\" cssclass=\"bind:css0\"/><Cell col=\"1\" text=\"bind:d1\" cssclass=\"bind:css1\"/><Cell col=\"2\" text=\"bind:d2\" cssclass=\"bind:css2\"/><Cell col=\"3\" text=\"bind:d3\" cssclass=\"bind:css3\"/><Cell col=\"4\" text=\"bind:d4\" cssclass=\"bind:css4\"/><Cell col=\"5\" text=\"bind:d5\" cssclass=\"bind:css5\"/><Cell col=\"6\" text=\"bind:d6\" cssclass=\"bind:css6\"/></Band></Format></Formats>");this.pdivCal.addChild(_a.name,_a);_a=new nexacro.Button("btnClose",null,null,"56","23","5","5",null,null,null,null,this.pdivCal.form);_a.set_taborder("6");_a.set_text("닫기");this.pdivCal.addChild(_a.name,_a);_a=new nexacro.Button("btnApply",null,null,"56","23","btnClose:5","5",null,null,null,null,this.pdivCal.form);_a.set_taborder("5");_a.set_text("적용");this.pdivCal.addChild(_a.name,_a);_a=new nexacro.Layout("default","",0,0,this.pdivCal.form,function(_b){});this.pdivCal.form.addLayout(_a.name,_a);_a=new nexacro.Layout("default","",50,30,this,function(_b){});this.addLayout(_a.name,_a);};this.loadPreloadList=function(){};this.registerScript("MultiSelectCalendar.xcdl",function(){this._onload=function(_a,_b){this.parent.setYearRange();};this.pdivCal_btnPrev_onclick=function(_a,_b){if(this.pdivCal.form.cboMonth.index==0){this.pdivCal.form.cboMonth.set_index(this.pdivCal.form.cboMonth.getCount()-1);if(this.pdivCal.form.cboYear.index>0){this.pdivCalr.form.cboYear.set_index(this.pdivCal.form.cboYear.index-1);}}else{this.pdivCal.form.cboMonth.set_index(this.pdivCal.form.cboMonth.index-1);}this.parent.setYearMonth(this.pdivCal.form.cboYear.value,this.pdivCal.form.cboMonth.value);this.parent.openSelectCalendar();};this.pdivCal_btnNext_onclick=function(_a,_b){if(this.pdivCal.form.cboMonth.index>=(this.pdivCal.form.cboMonth.getCount()-1)){this.pdivCal.form.cboMonth.set_index(0);if(this.pdivCal.form.cboYear.index<(this.pdivCal.form.cboYear.getCount()-1)){this.pdivCal.form.cboYear.set_index(this.pdivCal.form.cboYear.index+1);}}else{this.pdivCal.form.cboMonth.set_index(this.pdivCal.form.cboMonth.index+1);}this.parent.setYearMonth(this.pdivCal.form.cboYear.value,this.pdivCal.form.cboMonth.value);this.parent.openSelectCalendar();};this.pdivCal_cboYear_onitemchanged=function(_a,_b){this.parent.setYearMonth(_b.postvalue,this.pdivCal.form.cboMonth.value);this.parent.openSelectCalendar();};this.pdivCal_cboMonth_onitemchanged=function(_a,_b){this.parent.setYearMonth(this.pdivCal.form.cboYear.value,_b.postvalue);this.parent.openSelectCalendar();};this.pdivCal_grdCal_oncellclick=function(_a,_b){var _c="";var _d=this.dsCal.getColumn(_b.row,"select"+_b.cell);var _e=this.dsCal.getColumn(_b.row,"date"+_b.cell);if(_d=="Y"){this.dsCal.setColumn(_b.row,"select"+_b.cell,"N");this.parent._resetSelectDate(_e,false);}else{this.dsCal.setColumn(_b.row,"select"+_b.cell,"Y");this.parent._resetSelectDate(_e,true);}};this.pdivCal_btnClose_onclick=function(_a,_b){this.pdivCal.closePopup();};this.pdivCal_btnApply_onclick=function(_a,_b){var _c=this.parent.getSelectDates();if(this.parent._callBackParam.form&&this.parent._callBackParam.callback){this.parent._callBackParam.callback.call(this.parent._callBackParam.form,this.parent.getSelectDates());}this.pdivCal.closePopup(_c);};});this.on_initEvent=function(){this.addEventHandler("onload",this._onload,this);this.pdivCal.addEventHandler("onpopup",this.pdivCal_onpopup,this);this.pdivCal.form.btnPrev.addEventHandler("onclick",this.pdivCal_btnPrev_onclick,this);this.pdivCal.form.cboYear.addEventHandler("onitemchanged",this.pdivCal_cboYear_onitemchanged,this);this.pdivCal.form.cboMonth.addEventHandler("onitemchanged",this.pdivCal_cboMonth_onitemchanged,this);this.pdivCal.form.btnNext.addEventHandler("onclick",this.pdivCal_btnNext_onclick,this);this.pdivCal.form.grdCal.addEventHandler("oncellclick",this.pdivCal_grdCal_oncellclick,this);this.pdivCal.form.btnClose.addEventHandler("onclick",this.pdivCal_btnClose_onclick,this);this.pdivCal.form.btnApply.addEventHandler("onclick",this.pdivCal_btnApply_onclick,this);};this.loadIncludeScript("MultiSelectCalendar.xcdl");this.loadPreloadList();_a=null;};};
