(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frmMain");
            this.set_titletext("MainFrame");
            this.set_cssclass("frm_WF_Frame");
            if (Form == this.constructor)
            {
                this._setFormPosition(1400,940);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsParam1", this);
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"START_MM\" type=\"STRING\" size=\"256\"/><Column id=\"END_MM\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_YEAR2\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"CONTRACT_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRICE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput1", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput1_01", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput1_02", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput1_03", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput1_04", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsOutput1_05", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsParam2", this);
            obj._setContents("<ColumnInfo><Column id=\"YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_YEAR\" type=\"STRING\" size=\"256\"/><Column id=\"START_MM\" type=\"STRING\" size=\"256\"/><Column id=\"END_MM\" type=\"STRING\" size=\"256\"/><Column id=\"BUSINESS_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRE_YEAR2\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_LEVEL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_LEVEL\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsItem", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsItem2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsItemMon", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsItemMon2", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsPart", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsCustomer", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGlobal", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"string\" size=\"60\"/><Column id=\"EMP_NM\" type=\"string\" size=\"100\"/><Column id=\"DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"DEPT_NM\" type=\"string\" size=\"100\"/><Column id=\"EMAIL\" type=\"string\" size=\"268\"/><Column id=\"MOBILE\" type=\"string\" size=\"44\"/><Column id=\"OFFICE\" type=\"string\" size=\"20\"/><Column id=\"GRADE_CD\" type=\"string\" size=\"30\"/><Column id=\"GRADE_NM\" type=\"string\" size=\"100\"/><Column id=\"DUTY_CD\" type=\"string\" size=\"30\"/><Column id=\"DUTY_NM\" type=\"string\" size=\"100\"/><Column id=\"EMP_KIND\" type=\"string\" size=\"255\"/><Column id=\"CO_CD\" type=\"string\" size=\"30\"/><Column id=\"CO_NM\" type=\"string\" size=\"100\"/><Column id=\"LOGIN_SYS\" type=\"string\" size=\"10\"/><Column id=\"LANGUAGE\" type=\"string\" size=\"10\"/><Column id=\"MODEL_ID\" type=\"string\" size=\"50\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("divMachine","10","40","32.86%","264",null,null,"450",null,null,null,this);
            obj.set_taborder("0");
            obj.set_cssclass("div_MF_part");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS00","5.87%","47","41.74%","173",null,null,null,null,null,null,this.divMachine.form);
            obj.set_taborder("0");
            obj.set_text("ChartJS00");
            this.divMachine.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00_00_00_00_01","5.87%","8",null,"22","241",null,null,null,null,null,this.divMachine.form);
            obj.set_taborder("1");
            obj.set_textAlign("left");
            obj.set_text("목표 대비");
            obj.set_cssclass("sta_MF_bullet");
            this.divMachine.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00_00_00_00_01_00","51.74%","8",null,"22","29",null,null,null,null,null,this.divMachine.form);
            obj.set_taborder("2");
            obj.set_textAlign("left");
            obj.set_text("전년 실적 대비");
            obj.set_cssclass("sta_MF_bullet");
            this.divMachine.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS01","51.74%","47","41.74%","173",null,null,null,null,null,null,this.divMachine.form);
            obj.set_taborder("3");
            obj.set_text("ChartJS00");
            this.divMachine.addChild(obj.name, obj);

            obj = new Static("sta_act","5.87%","224","41.74%","27",null,null,null,null,null,null,this.divMachine.form);
            obj.set_taborder("4");
            obj.set_cssclass("sta_MF_fontB");
            obj.set_textAlign("center");
            this.divMachine.addChild(obj.name, obj);

            obj = new Static("sta_act00","51.74%","224","41.74%","27",null,null,null,null,null,null,this.divMachine.form);
            obj.set_taborder("5");
            obj.set_cssclass("sta_MF_fontB");
            obj.set_textAlign("center");
            this.divMachine.addChild(obj.name, obj);

            obj = new Static("sta00_01","10","divMachine:7","410","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("제품별 전년대비 현황");
            obj.set_cssclass("sta_WF_SchLabel");
            this.addChild(obj.name, obj);

            obj = new Div("divUsage","10","sta00_01:0","40.50%","338",null,null,"467",null,null,null,this);
            obj.set_taborder("1");
            obj.set_cssclass("div_MF_part");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS0","2.04%","17","30.3%","77",null,null,null,null,null,null,this.divUsage.form);
            obj.set_taborder("0");
            obj.set_text("ChartJS00");
            obj.set_border("0px none,0px none,2px solid black");
            this.divUsage.addChild(obj.name, obj);

            obj = new Static("sta00","2.04%","100","30.3%","22",null,null,null,null,null,null,this.divUsage.form);
            obj.set_taborder("1");
            obj.set_text("제품");
            obj.set_textAlign("center");
            this.divUsage.addChild(obj.name, obj);

            obj = new Static("sta00_00","2.04%","122","30.3%","22",null,null,null,null,null,null,this.divUsage.form);
            obj.set_taborder("2");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_MF_fontR");
            this.divUsage.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS1","35.01%","17","30.3%","77",null,null,null,null,null,null,this.divUsage.form);
            obj.set_taborder("3");
            obj.set_text("ChartJS00");
            obj.set_border("0px none,0px none,2px solid black");
            this.divUsage.addChild(obj.name, obj);

            obj = new Static("sta01","35.01%","100","30.3%","22",null,null,null,null,null,null,this.divUsage.form);
            obj.set_taborder("4");
            obj.set_text("제품");
            obj.set_textAlign("center");
            this.divUsage.addChild(obj.name, obj);

            obj = new Static("sta00_01","35.01%","122","30.3%","22",null,null,null,null,null,null,this.divUsage.form);
            obj.set_taborder("5");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_MF_fontR");
            this.divUsage.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS2","67.97%","17","30.3%","77",null,null,null,null,null,null,this.divUsage.form);
            obj.set_taborder("6");
            obj.set_text("ChartJS00");
            obj.set_border("0px none,0px none,2px solid black");
            this.divUsage.addChild(obj.name, obj);

            obj = new Static("sta02","67.97%","100","30.3%","22",null,null,null,null,null,null,this.divUsage.form);
            obj.set_taborder("7");
            obj.set_text("제품");
            obj.set_textAlign("center");
            this.divUsage.addChild(obj.name, obj);

            obj = new Static("sta00_02","67.97%","122","30.3%","22",null,null,null,null,null,null,this.divUsage.form);
            obj.set_taborder("8");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_MF_fontR");
            this.divUsage.addChild(obj.name, obj);

            obj = new Static("sta00_03","1.94%","287","30.16%","22",null,null,null,null,null,null,this.divUsage.form);
            obj.set_taborder("9");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_MF_fontR");
            this.divUsage.addChild(obj.name, obj);

            obj = new Static("sta03","1.94%","265","30.16%","22",null,null,null,null,null,null,this.divUsage.form);
            obj.set_taborder("10");
            obj.set_text("제품");
            obj.set_textAlign("center");
            this.divUsage.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS3","1.94%","182","30.16%","77",null,null,null,null,null,null,this.divUsage.form);
            obj.set_taborder("11");
            obj.set_text("ChartJS00");
            obj.set_border("0px none,0px none,2px solid black");
            this.divUsage.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS4","34.92%","182","30.16%","77",null,null,null,null,null,null,this.divUsage.form);
            obj.set_taborder("12");
            obj.set_text("ChartJS00");
            obj.set_border("0px none,0px none,2px solid black");
            this.divUsage.addChild(obj.name, obj);

            obj = new Static("sta04","34.92%","265","30.16%","22",null,null,null,null,null,null,this.divUsage.form);
            obj.set_taborder("13");
            obj.set_text("제품");
            obj.set_textAlign("center");
            this.divUsage.addChild(obj.name, obj);

            obj = new Static("sta00_04","34.92%","287","30.16%","22",null,null,null,null,null,null,this.divUsage.form);
            obj.set_taborder("14");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_MF_fontR");
            this.divUsage.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS5","67.90%","182","30.16%","77",null,null,null,null,null,null,this.divUsage.form);
            obj.set_taborder("15");
            obj.set_text("ChartJS00");
            obj.set_border("0px none,0px none,2px solid black");
            this.divUsage.addChild(obj.name, obj);

            obj = new Static("sta05","67.90%","265","30.16%","22",null,null,null,null,null,null,this.divUsage.form);
            obj.set_taborder("16");
            obj.set_text("제품");
            obj.set_textAlign("center");
            this.divUsage.addChild(obj.name, obj);

            obj = new Static("sta00_05","67.90%","287","30.16%","22",null,null,null,null,null,null,this.divUsage.form);
            obj.set_taborder("17");
            obj.set_textAlign("center");
            obj.set_cssclass("sta_MF_fontR");
            this.divUsage.addChild(obj.name, obj);

            obj = new Div("divStorage","divMachine:10","40",null,"264","10",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_cssclass("div_MF_part");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS_storage","0.77%","160","32.42%","76",null,null,null,null,null,null,this.divStorage.form);
            obj.set_taborder("0");
            obj.set_text("ChartJS00");
            this.divStorage.addChild(obj.name, obj);

            obj = new Static("sta00_01_01_00_00_00_00_01_00","15","8","192","22",null,null,null,null,null,null,this.divStorage.form);
            obj.set_taborder("1");
            obj.set_textAlign("left");
            obj.set_text("항목기준 월별현황");
            obj.set_cssclass("sta_MF_bullet");
            this.divStorage.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS_1","2.2%","33","17.47%","95",null,null,null,null,null,null,this.divStorage.form);
            obj.set_taborder("2");
            obj.set_text("");
            obj.set_border("1px solid #6E7074");
            obj.set_borderRadius("5px 5px");
            this.divStorage.addChild(obj.name, obj);

            obj = new Static("sta_1","2.2%","129","17.47%","22",null,null,null,null,null,null,this.divStorage.form);
            obj.set_taborder("3");
            obj.set_textAlign("center");
            obj.set_text("제품");
            this.divStorage.addChild(obj.name, obj);

            obj = new Static("sta_2","sta_1:18","129","17.47%","22",null,null,null,null,null,null,this.divStorage.form);
            obj.set_taborder("4");
            obj.set_textAlign("center");
            obj.set_text("용역");
            this.divStorage.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS_2","ChartJS_1:18","33","17.47%","95",null,null,null,null,null,null,this.divStorage.form);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_border("1px solid #6E7074");
            obj.set_borderRadius("5px 5px");
            this.divStorage.addChild(obj.name, obj);

            obj = new Static("sta_3","sta_2:18","129","17.47%","22",null,null,null,null,null,null,this.divStorage.form);
            obj.set_taborder("6");
            obj.set_textAlign("center");
            obj.set_text("서비스");
            this.divStorage.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS_3","ChartJS_2:18","33","17.47%","95",null,null,null,null,null,null,this.divStorage.form);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_border("1px solid #6E7074");
            obj.set_borderRadius("5px 5px");
            this.divStorage.addChild(obj.name, obj);

            obj = new Static("sta_4","sta_3:18","129","17.47%","22",null,null,null,null,null,null,this.divStorage.form);
            obj.set_taborder("8");
            obj.set_textAlign("center");
            obj.set_text("유지보수");
            this.divStorage.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS_4","ChartJS_3:18","33","17.47%","95",null,null,null,null,null,null,this.divStorage.form);
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_border("1px solid #6E7074");
            obj.set_borderRadius("5px 5px");
            this.divStorage.addChild(obj.name, obj);

            obj = new Static("sta_5","sta_4:18","129","17.47%","22",null,null,null,null,null,null,this.divStorage.form);
            obj.set_taborder("10");
            obj.set_textAlign("center");
            obj.set_text("상품");
            this.divStorage.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS_5","ChartJS_4:18","33","17.47%","95",null,null,null,null,null,null,this.divStorage.form);
            obj.set_taborder("11");
            obj.set_text("");
            obj.set_border("1px solid #6E7074");
            obj.set_borderRadius("5px 5px");
            this.divStorage.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS_storage00","ChartJS_storage:5","160","32.42%","76",null,null,null,null,null,null,this.divStorage.form);
            obj.set_taborder("12");
            obj.set_text("ChartJS00");
            this.divStorage.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS_storage00_00","ChartJS_storage00:5","160","32.42%","76",null,null,null,null,null,null,this.divStorage.form);
            obj.set_taborder("13");
            obj.set_text("ChartJS00");
            this.divStorage.addChild(obj.name, obj);

            obj = new Static("sta_1_01","0.77%","239","32.42%","22",null,null,null,null,null,null,this.divStorage.form);
            obj.set_taborder("14");
            obj.set_textAlign("center");
            obj.set_text("용역");
            this.divStorage.addChild(obj.name, obj);

            obj = new Static("sta_1_01_00","sta_1_01:5","239","32.42%","22",null,null,null,null,null,null,this.divStorage.form);
            obj.set_taborder("15");
            obj.set_textAlign("center");
            obj.set_text("서비스");
            this.divStorage.addChild(obj.name, obj);

            obj = new Static("sta_1_01_00_00","sta_1_01_00:5","239","32.42%","22",null,null,null,null,null,null,this.divStorage.form);
            obj.set_taborder("16");
            obj.set_textAlign("center");
            obj.set_text("유지보수");
            this.divStorage.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00","divUsage:10","divMachine:7","256","28",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("항목별 전년대비 현황");
            obj.set_cssclass("sta_WF_SchLabel");
            this.addChild(obj.name, obj);

            obj = new Div("divAlert","divUsage:10","sta00_01_00_00:2",null,"133","10",null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_cssclass("div_MF_part");
            obj.set_text("");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new Div("div_M1","1.25%","10","19.05%","116",null,null,null,null,null,null,this.divAlert.form);
            obj.set_taborder("0");
            this.divAlert.addChild(obj.name, obj);

            obj = new Static("sta00","0","81",null,"30","0",null,null,null,null,null,this.divAlert.form.div_M1.form);
            obj.set_taborder("0");
            obj.set_text("sta00");
            obj.set_textAlign("center");
            this.divAlert.form.div_M1.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS00","10.05%","0",null,"77","10.05%",null,null,null,null,null,this.divAlert.form.div_M1.form);
            obj.set_taborder("1");
            obj.set_text("ChartJS00");
            obj.set_border("0px none,0px none,2px solid black");
            this.divAlert.form.div_M1.addChild(obj.name, obj);

            obj = new Div("div_M2","20.8%","10","19.05%","116",null,null,null,null,null,null,this.divAlert.form);
            obj.set_taborder("1");
            this.divAlert.addChild(obj.name, obj);

            obj = new Static("sta00","0","81",null,"30","0",null,null,null,null,null,this.divAlert.form.div_M2.form);
            obj.set_taborder("0");
            obj.set_text("sta00");
            obj.set_textAlign("center");
            this.divAlert.form.div_M2.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS00","10.05%","0",null,"77","10.05%",null,null,null,null,null,this.divAlert.form.div_M2.form);
            obj.set_taborder("1");
            obj.set_text("ChartJS00");
            obj.set_border("0px none,0px none,2px solid black");
            this.divAlert.form.div_M2.addChild(obj.name, obj);

            obj = new Div("div_M3","40.35%","10","19.05%","116",null,null,null,null,null,null,this.divAlert.form);
            obj.set_taborder("2");
            this.divAlert.addChild(obj.name, obj);

            obj = new Static("sta00","0","81",null,"30","0",null,null,null,null,null,this.divAlert.form.div_M3.form);
            obj.set_taborder("0");
            obj.set_text("sta00");
            obj.set_textAlign("center");
            this.divAlert.form.div_M3.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS00","10.05%","0",null,"77","10.05%",null,null,null,null,null,this.divAlert.form.div_M3.form);
            obj.set_taborder("1");
            obj.set_text("ChartJS00");
            obj.set_border("0px none,0px none,2px solid black");
            this.divAlert.form.div_M3.addChild(obj.name, obj);

            obj = new Div("div_M4","59.9%","10","19.05%","116",null,null,null,null,null,null,this.divAlert.form);
            obj.set_taborder("3");
            this.divAlert.addChild(obj.name, obj);

            obj = new Static("sta00","0","81",null,"30","0",null,null,null,null,null,this.divAlert.form.div_M4.form);
            obj.set_taborder("0");
            obj.set_text("sta00");
            obj.set_textAlign("center");
            this.divAlert.form.div_M4.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS00","10.05%","0",null,"77","10.05%",null,null,null,null,null,this.divAlert.form.div_M4.form);
            obj.set_taborder("1");
            obj.set_text("ChartJS00");
            obj.set_border("0px none,0px none,2px solid black");
            this.divAlert.form.div_M4.addChild(obj.name, obj);

            obj = new Div("div_M5","79.45%","10","19.05%","116",null,null,null,null,null,null,this.divAlert.form);
            obj.set_taborder("4");
            this.divAlert.addChild(obj.name, obj);

            obj = new Static("sta00","0","81",null,"30","0",null,null,null,null,null,this.divAlert.form.div_M5.form);
            obj.set_taborder("0");
            obj.set_text("sta00");
            obj.set_textAlign("center");
            this.divAlert.form.div_M5.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS00","10.05%","0",null,"77","10.05%",null,null,null,null,null,this.divAlert.form.div_M5.form);
            obj.set_taborder("1");
            obj.set_text("ChartJS00");
            obj.set_border("0px none,0px none,2px solid black");
            this.divAlert.form.div_M5.addChild(obj.name, obj);

            obj = new Div("divVM","10","724",null,"181","10",null,"1000",null,null,null,this);
            obj.set_taborder("4");
            obj.set_cssclass("div_MF_part");
            this.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS_vmcpu","1.00%","13","23.71%","121",null,null,null,null,null,null,this.divVM.form);
            obj.set_taborder("0");
            obj.set_text("ChartJS00");
            this.divVM.addChild(obj.name, obj);

            obj = new ChartJS("ChartJSvmmem","25.52%","13","23.71%","121",null,null,null,null,null,null,this.divVM.form);
            obj.set_taborder("1");
            obj.set_text("ChartJS00");
            this.divVM.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS_vmcpuusage","50.23%","13","23.71%","121",null,null,null,null,null,null,this.divVM.form);
            obj.set_taborder("2");
            obj.set_text("ChartJS00");
            this.divVM.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS_vmmemusage","74.84%","13","23.71%","121",null,null,null,null,null,null,this.divVM.form);
            obj.set_taborder("3");
            obj.set_text("ChartJS00");
            this.divVM.addChild(obj.name, obj);

            obj = new Static("sta00","1%","146","23.62%","21",null,null,null,null,null,null,this.divVM.form);
            obj.set_taborder("4");
            obj.set_text("업종");
            obj.set_textAlign("center");
            this.divVM.addChild(obj.name, obj);

            obj = new Static("sta00_00","25.43%","146","23.62%","21",null,null,null,null,null,null,this.divVM.form);
            obj.set_taborder("5");
            obj.set_text("프로젝트");
            obj.set_textAlign("center");
            this.divVM.addChild(obj.name, obj);

            obj = new Static("sta00_00_00","50.23%","146","23.62%","21",null,null,null,null,null,null,this.divVM.form);
            obj.set_taborder("6");
            obj.set_text("제품");
            obj.set_textAlign("center");
            this.divVM.addChild(obj.name, obj);

            obj = new Static("sta00_00_00_00","74.75%","146","23.62%","21",null,null,null,null,null,null,this.divVM.form);
            obj.set_taborder("7");
            obj.set_text("항목");
            obj.set_textAlign("center");
            this.divVM.addChild(obj.name, obj);

            obj = new Static("sta00","10","7","256","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("매출 현황 (NEXT 연계)");
            obj.set_cssclass("sta_WF_SchLabel");
            this.addChild(obj.name, obj);

            obj = new Static("sta00_01_01","10","divUsage:10","256","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("비중 TOP LIST");
            obj.set_cssclass("sta_WF_SchLabel");
            this.addChild(obj.name, obj);

            obj = new Button("btnSearch",null,"10","48","28","10",null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("조회");
            obj.set_cssclass("btn_WF_Search");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Div("divAlert00","divUsage:10","515",null,"164","10",null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_cssclass("div_MF_part");
            obj.set_text("");
            obj.set_formscrolltype("none");
            obj.set_formscrollbartype("none none");
            this.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS_cpupct","10","10",null,null,"10","10",null,null,null,null,this.divAlert00.form);
            obj.set_taborder("0");
            obj.set_text("ChartJS00");
            this.divAlert00.addChild(obj.name, obj);

            obj = new Static("sta00_01_00_00_00","divUsage:10","486","256","28",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("업종별 매출 비중");
            obj.set_cssclass("sta_WF_SchLabel");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","172","917","25","1",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("sta01");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divMachine.form
            obj = new Layout("default","",0,0,this.divMachine.form,function(p){});
            this.divMachine.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divUsage.form
            obj = new Layout("default","",0,0,this.divUsage.form,function(p){});
            this.divUsage.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divStorage.form
            obj = new Layout("default","",0,0,this.divStorage.form,function(p){});
            this.divStorage.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAlert.form.div_M1.form
            obj = new Layout("default","",0,0,this.divAlert.form.div_M1.form,function(p){});
            this.divAlert.form.div_M1.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAlert.form.div_M2.form
            obj = new Layout("default","",0,0,this.divAlert.form.div_M2.form,function(p){});
            this.divAlert.form.div_M2.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAlert.form.div_M3.form
            obj = new Layout("default","",0,0,this.divAlert.form.div_M3.form,function(p){});
            this.divAlert.form.div_M3.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAlert.form.div_M4.form
            obj = new Layout("default","",0,0,this.divAlert.form.div_M4.form,function(p){});
            this.divAlert.form.div_M4.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAlert.form.div_M5.form
            obj = new Layout("default","",0,0,this.divAlert.form.div_M5.form,function(p){});
            this.divAlert.form.div_M5.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAlert.form
            obj = new Layout("default","",0,0,this.divAlert.form,function(p){});
            this.divAlert.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divVM.form
            obj = new Layout("default","",0,0,this.divVM.form,function(p){});
            this.divVM.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divAlert00.form
            obj = new Layout("default","",0,0,this.divAlert00.form,function(p){});
            this.divAlert00.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1400,940,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("statusMain.xfdl", function() {
        /**
        *  Main
        *  @FileName 	frmMain.xfdl
        *  @Creator
        *  @CreateDate
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************

        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/

        this.fvClusterChk = 0;
        this.fvIsFirstLoad = true;
        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.form_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	this.fnInit();
        	this.fnGetData();
        };

        // init
        this.fnInit = function()
        {
        // 	var bg = this.gfnChartColor("bgcolor");
        // 	this.divAlert.form.div_M1.set_background(bg);
        // 	this.divAlert.form.div_M2.set_background(bg);
        // 	this.divAlert.form.div_M3.set_background(bg);
        // 	this.divAlert.form.div_M4.set_background(bg);
        // 	this.divAlert.form.div_M5.set_background(bg);
        };

        // 전체 DATA 가져오기
        this.fnGetData = function()
        {
        	this.fnGetGoal();
        	this.fnGetProduct();
        	this.fnGetItem();
        	this.fnGetItemMonth();
        	this.fnGetPart();
        	this.fnGetCustomer();
        };

        //max size 변경
        this.form_onsize = function(obj,e)
        {
         	if(this.getOwnerFrame().fvIsActiveWindow == true) {
         		this.fnGetData();
         	}
        };
        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        // Goal 가져오기
        this.fnGetGoal = function()
        {
        	this.gfnInitNextGlobalDataset(this.dsGlobal);

        	var year = this.gfnGetDate("year");
        	var preyear = (parseInt(year) - 1) + "";
        	var preyear2 = (parseInt(year) - 2) + "";
        	this.dsParam1.setColumn(0, "YEAR", year);
        	this.dsParam1.setColumn(0, "PRE_YEAR", preyear);
        	this.dsParam1.setColumn(0, "START_MM", "01");
        	this.dsParam1.setColumn(0, "END_MM", "12");
        	//this.dsParam1.setColumn(0, "BUSINESS_TYPE", "U");
        	this.dsParam1.setColumn(0, "BUSINESS_TYPE", null);
        	this.dsParam1.setColumn(0, "PRE_YEAR2", preyear2);

        	var strSvcId 	= "goal";
        	var strSvcUrl 	= "nextService.do";
        	var inData 		= "dsGlobal=dsGlobal:A dsParam=dsParam1:A";
        	var outData 	= "dsOutput1=dsOutput";
        	var strArg 		= "jobCode=" + nexacro.wrapQuote("next");
        	strArg 			+= " trxCode=" + nexacro.wrapQuote("goal");
        	strArg 			+= " trxUrl=" + nexacro.wrapQuote("FrontControllerServlet.do?service=xupservice&domain=NEXTp&model=SR_SalesResultAnalysis_S01&format=xml&version=xplatform&compress=false");
        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, "fnCallback");
        };

        // 제품별 가져오기
        this.fnGetProduct = function()
        {
        	var strSvcId 	= "prduct";
        	var strSvcUrl 	= "nextService.do";
        	var inData 		= "dsGlobal=dsGlobal:A dsParam=dsParam1:A";
        	var outData 	= "dsOutput1_01=dsOutput1 dsOutput1_02=dsOutput2 dsOutput1_03=dsOutput3 dsOutput1_04=dsOutput4 dsOutput1_05=dsOutput5";
        	var strArg 		= "jobCode=" + nexacro.wrapQuote("next");
        	strArg 			+= " trxCode=" + nexacro.wrapQuote("prduct");
        	strArg 			+= " trxUrl=" + nexacro.wrapQuote("FrontControllerServlet.do?service=xupservice&domain=NEXTp&model=SR_SalesResultAnalysis_S05&format=xml&version=xplatform&compress=false");

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, "fnCallback");
        };

        // 항목별 가져오기
        this.itemcnt = 0;
        this.fnGetItem = function()
        {
        	this.dsParam1.setColumn(0, "DEPT_LEVEL", "1");
        	var strSvcId 	= "item";
        	var strSvcUrl 	= "nextService.do";
        	var inData 		= "dsGlobal=dsGlobal:A dsParam=dsParam1:A";
        	var outData 	= "dsItem=dsOutput";
        	var strArg 		= "jobCode=" + nexacro.wrapQuote("next");
        	strArg 			+= " trxCode=" + nexacro.wrapQuote("item");
        	strArg 			+= " trxUrl=" + nexacro.wrapQuote("FrontControllerServlet.do?service=xupservice&domain=NEXTp&model=SR_SalesResultAnalysis_S02&format=xml&version=xplatform&compress=false");

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, "fnCallback");

        	this.dsParam2.copyData(this.dsParam1);

        	var year = this.gfnGetDate("year");
        	var preyear = (parseInt(year) - 1) + "";
        	this.dsParam2.setColumn(0, "YEAR", preyear);

        	inData 		= "dsGlobal=dsGlobal:A dsParam=dsParam2:A";
        	outData 	= "dsItem2=dsOutput";
        	strArg 		= "jobCode=" + nexacro.wrapQuote("next");
        	strArg 		+= " trxCode=" + nexacro.wrapQuote("item");
        	strArg 		+= " trxUrl=" + nexacro.wrapQuote("FrontControllerServlet.do?service=xupservice&domain=NEXTp&model=SR_SalesResultAnalysis_S02&format=xml&version=xplatform&compress=false");

        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, "fnCallback");

        };

        // 항목 월별 가져오기
        this.itemmoncnt = 0;
        this.fnGetItemMonth = function()
        {
        	this.dsParam1.setColumn(0, "CONTRACT_TYPE", "S");
        	var strSvcId 	= "itemmon";
        	var strSvcUrl 	= "nextService.do";
        	var inData 		= "dsGlobal=dsGlobal:A dsParam=dsParam1:A";
        	var outData 	= "dsItemMon=dsOutput";
        	var strArg 		= "jobCode=" + nexacro.wrapQuote("next");
        	strArg 			+= " trxCode=" + nexacro.wrapQuote("itemmon");
        	strArg 			+= " trxUrl=" + nexacro.wrapQuote("FrontControllerServlet.do?service=xupservice&domain=NEXTp&model=SR_SalesResultAnalysis_S03&format=xml&version=xplatform&compress=false");
        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, "fnCallback");
        };

        // 업종별
        this.fnGetPart = function()
        {
        	var strSvcId 	= "part";
        	var strSvcUrl 	= "nextService.do";
        	var inData 		= "dsGlobal=dsGlobal:A dsParam=dsParam1:A";
        	var outData 	= "dsPart=dsOutput";
        	var strArg 		= "jobCode=" + nexacro.wrapQuote("next");
        	strArg 			+= " trxCode=" + nexacro.wrapQuote("part");
        	strArg 			+= " trxUrl=" + nexacro.wrapQuote("FrontControllerServlet.do?service=xupservice&domain=NEXTp&model=SR_SalesResultAnalysis_S04&format=xml&version=xplatform&compress=false");
        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, "fnCallback");

        };

        // 고객사별
        this.fnGetCustomer = function()
        {
        	this.dsParam1.setColumn(0, "PRICE", "10000000");
        	var strSvcId 	= "customer";
        	var strSvcUrl 	= "nextService.do";
        	var inData 		= "dsGlobal=dsGlobal:A dsParam=dsParam1:A";
        	var outData 	= "dsCustomer=dsOutput";
        	var strArg 		= "jobCode=" + nexacro.wrapQuote("next");
        	strArg 			+= " trxCode=" + nexacro.wrapQuote("customer");
        	strArg 			+= " trxUrl=" + nexacro.wrapQuote("FrontControllerServlet.do?service=xupservice&domain=NEXTp&model=SR_SalesResultAnalysis_S06&format=xml&version=xplatform&compress=false");
        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, "fnCallback");

        };
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        //transaction
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg)
        {
        	switch(sSvcId) {
        		case "goal":
        			if(this.dsOutput1.rowcount == 0) return;
        			var goal = this.dsOutput1.getSum("GOAL_Y").valueOf();
        			var result = this.dsOutput1.getSum("RESULT_Y").valueOf();
        			var preresult = this.dsOutput1.getSum("PRE_RESULT_Y").valueOf();
        			this.fnSetGoalChart(result, goal);
        			this.fnSetResultChart(result, preresult);
        			break;
        		case "prduct":
        			// dsOutput1_01 : 금년
        			// dsOutput1_02 : 전년
        			this.fnProductChart();
        			break;
        		case "item":
        			this.itemcnt++;
        			if(this.itemcnt>=2) {
        				this.itemcnt = 0;
        				this.fnItemChart();
        			}
        			break;
        		case "itemmon":
        			this.fnItemMonthChart();
        			break;
        		case "part":
        			this.fnPartChart();
        			break;
        		case "customer":
        			this.fnCustomerChart();
        			break;

        		default:
        			break;
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        /**
         * 목표 대비
         *
         */
        this.fnSetGoalChart = function (result, goal)
        {
        	this.divMachine.form.sta_act.set_text(result.formatWon() + "/" + goal.formatWon() + "억");
        	if(goal == 0) goal = result;
        	var nPct = nexacro.toNumber(((result / goal)*100).toFixed(2));

        	var oChart = this.divMachine.form.ChartJS00;
        	var canvas = oChart.getCanvas();
        	var cvs = canvas.id;
        	DxChart.reset(canvas);

        	var titleColor = this.gfnChartColor("titlecenter");
        	var param = {
        		donutWidth: 35
        	};
        	var option1 = this.gfnGetRChartOption("piesvg", "usage1", param);
        	var option2 = this.gfnGetRChartOption("piesvg", "usage2", param);
        	var  pie1 = new DxChartPie({
        			id: cvs,
        			elem : canvas,
        			data: [100,100],
        			options: option1
        		}).draw();
        	var nPctx = nPct;
        	if(nPctx>100) nPctx = 100;

        	var pie2 = new DxChartPie({
        			id: cvs,
        			elem : canvas,
        			data: [nPctx, (100-nPctx)],
        			options: option2
        		});
        		pie2._pct = nPct;

        	function callb(obj) {
        		var t = new DxChartText({
        			id: cvs,
        			elem : canvas,
        			text:   obj._pct + "%",
        			x:      obj.centerx,
        			y:      obj.centery,
        			options: {
        				halign: 'center',
        				valign: 'center',
        				textFontStyle :   'bold 18px noto',
        				color:  titleColor
        			}
        		}).draw();
        	}

        	var opt = { frames : 30 };

        	pie2.roundRobin(opt, callb);
        };

        /**
         * 전년실적 대비
         */
        this.fnSetResultChart = function (result, preresult)
        {
        	this.divMachine.form.sta_act00.set_text(result.formatWon() + "/" + preresult.formatWon() + "억");
        	if(preresult == 0) preresult = result;
        	var nPct = nexacro.toNumber(((result / preresult)*100).toFixed(2));
        	var oChart = this.divMachine.form.ChartJS01;
        	var canvas = oChart.getCanvas();
        	var cvs = canvas.id;
        	DxChart.reset(canvas);

        	var titleColor = this.gfnChartColor("titlecenter");
        	var param = {
        		donutWidth: 35
        	};
        	var option1 = this.gfnGetRChartOption("piesvg", "usage1", param);
        	var option2 = this.gfnGetRChartOption("piesvg", "usage2", param);
        	var  pie1 = new DxChartPie({
        			id: cvs,
        			elem : canvas,
        			data: [100,100],
        			options: option1
        		}).draw();
        	var nPctx = nPct;
        	if(nPctx>100) nPctx = 100;
        	var  pie2 = new DxChartPie({
        			id: cvs,
        			elem : canvas,
        			data: [nPctx, (100-nPctx)],
        			options: option2
        		});
        		pie2._pct = nPct;

        		function callb(obj) {
        			new DxChartText({
        					id: cvs,
        					elem : canvas,
        				text:   obj._pct + "%",
        				x:      obj.centerx,
        				y:      obj.centery,
        				options: {
        					halign: 'center',
        					valign: 'center',
        					textFontStyle :   'bold 18px noto',
        					color:  titleColor
        				}
        			}).draw();
        		}

        		var opt = { frames : 30 };

        		pie2.roundRobin(opt, callb);
        };

        /**
         * 제품별
         */
        this.fnProductChartDraw = function (nRow, prd, sum, presum)
        {
        	var oChart 		= this.divUsage.form["ChartJS" + nRow];
        	var oStName 	= this.divUsage.form["sta0" + nRow];
        	var oStValue 	= this.divUsage.form["sta00_0" + nRow];

        	var canvas = oChart.getCanvas();
        	var cvs = canvas.id;
        	DxChart.reset(canvas);

        	oStValue.set_text(sum.formatWon() + "/" + presum.formatWon() + "억");
        	oStName.set_text(prd);

        	var nPct = nexacro.toNumber(((sum / presum)*100).toFixed(2));

        	var	roundFill = null;
        	var colorrange;
        	var svPct = nPct;
        	if(nPct >= 100) {
        		colorrange = [[0, 100, 'radial-gradient(#1877c1:#2d8cd5:#45a4ed)']];
        		nPct = 100;
        	} else {
        		roundFill = null;
        		colorrange = [[0, nPct, 'radial-gradient(#1877c1:#2d8cd5:#45a4ed)'],[nPct, 100, '#505156']];
        	}
        	this.gfnSetDeviceChartOne(oChart, 100, nPct, nPct, colorrange, roundFill, true, svPct + "%");
        }

        this.fnProductChart = function ()
        {
        	var nCnt = this.dsOutput1_01.rowcount;
        	var arrProduct = ["MiPlatform","XPLATFORM","nexacro 14","nexacro 17","nexacro N","etc"];
        	var arrProductAmount = [0,0,0,0,0,0];
        	var arrProductPreAmount = [0,0,0,0,0,0];
        	var PRODUCT_CODE, AMOUNT_SUM;
        	for(var i=0;i<nCnt;i++) {
        		PRODUCT_CODE = this.dsOutput1_01.getColumn(i, "PRODUCT_CODE");
        		AMOUNT_SUM = this.dsOutput1_01.getColumn(i, "AMOUNT_SUM");

        		if(PRODUCT_CODE.indexOf("P01")>=0) arrProductAmount[0] += AMOUNT_SUM;
        		else if(PRODUCT_CODE.indexOf("P02")>=0) arrProductAmount[1] += AMOUNT_SUM;
        		else if(PRODUCT_CODE.indexOf("P0501")>=0) arrProductAmount[2] += AMOUNT_SUM;
        		else if(PRODUCT_CODE.indexOf("P0502")>=0) arrProductAmount[3] += AMOUNT_SUM;
        		else if(PRODUCT_CODE.indexOf("P0503")>=0) arrProductAmount[3] += AMOUNT_SUM;
        		else if(PRODUCT_CODE.indexOf("P0601")>=0) arrProductAmount[4] += AMOUNT_SUM;
        		else arrProductAmount[5] += AMOUNT_SUM;
        	}

        	nCnt = this.dsOutput1_02.rowcount;
        	for(var i=0;i<nCnt;i++) {
        		PRODUCT_CODE = this.dsOutput1_02.getColumn(i, "PRODUCT_CODE");
        		AMOUNT_SUM = this.dsOutput1_02.getColumn(i, "AMOUNT_SUM");

        		if(PRODUCT_CODE.indexOf("P01")>=0) arrProductPreAmount[0] += AMOUNT_SUM;
        		else if(PRODUCT_CODE.indexOf("P02")>=0) arrProductPreAmount[1] += AMOUNT_SUM;
        		else if(PRODUCT_CODE.indexOf("P0501")>=0) arrProductPreAmount[2] += AMOUNT_SUM;
        		else if(PRODUCT_CODE.indexOf("P0502")>=0) arrProductPreAmount[3] += AMOUNT_SUM;
        		else if(PRODUCT_CODE.indexOf("P0503")>=0) arrProductPreAmount[3] += AMOUNT_SUM;
        		else if(PRODUCT_CODE.indexOf("P0601")>=0) arrProductPreAmount[4] += AMOUNT_SUM;
        		else arrProductPreAmount[5] += AMOUNT_SUM;
        	}
        	nCnt = arrProduct.length;
        	for(var i=0;i<nCnt;i++) {
        		this.fnProductChartDraw(i, arrProduct[i], arrProductAmount[i], arrProductPreAmount[i]);
        	}

        	this.dsOutput1_01.set_keystring("S:-AMOUNT_SUM");
        	var ds = this.dsOutput1_01;
        	var oChart = this.divVM.form.ChartJS_vmcpuusage;
        	var namecol = "PRODUCT_NAME";
        	var valuecol = "AMOUNT_SUM";
        	this.fnTopListChart(oChart, ds, namecol, valuecol);
        };

        /**
         * 항목별
         */
        this.fnItemChart = function ()
        {
        	// this.dsItem : 금년
        	// this.dsItem2 : 전년

        // 				<Col id="DEPT_CD">W21</Col>
        // 				<Col id="DEPT_NAME">투비윈</Col>
        // 				<Col id="CD_CODE">P</Col>
        // 				<Col id="CAPTION">제품</Col>
        // 				<Col id="BUSINESS_TYPE">U</Col>
        // 				<Col id="GOAL">0</Col>
        // 				<Col id="GOAL_Y">0</Col>


        	var divMain = this.divAlert.form;
        	var divAct, chart, nFindRow;
        	var nSum, nStart, nPct, colorrange;
        	var roundFill = false;
        	var CD_CODE, GOAL_Y, ISTEXT;
        	this.dsItem.filter("DEPT_CD=='W21'");
        	console.log(this.dsItem.saveXML(), this.dsItem.rowcount);
        	this.dsItem.set_enableevent(false);
        	for(var i=0,nLen=this.dsItem.rowcount;i<nLen;i++) {
        		if(i>4) break;
        		console.log("<<<<", i);
        		CD_CODE = this.dsItem.getColumn(i, "CD_CODE");
        		console.log(i,CD_CODE);
        		GOAL_Y  = this.dsItem.getColumn(i, "RESULT_Y");
        		if(!GOAL_Y) {
        			GOAL_Y = 0;
        			this.dsItem.setColumn(i, "RESULT_Y", 0);
        		} else {
        			GOAL_Y = GOAL_Y.valueOf().formatWon();
        		}

        		ISTEXT = null;
        		nFindRow = this.dsItem2.findRow("CD_CODE", CD_CODE);
        		if(nFindRow>=0) {
        			nSum = this.dsItem2.getColumn(nFindRow, "RESULT_Y");
        			if(!nSum) nSum = 0;
        			nSum = nSum.valueOf().formatWon();
        		} else {
        			nSum = GOAL_Y;
        		}
        		divAct = divMain["div_M" + (i+1)].form;
        		chart = divAct.ChartJS00;
        		divAct.sta00.set_text(this.dsItem.getColumn(i, "CAPTION"));
        		nPct = nexacro.toNumber(((GOAL_Y / nSum)*100).toFixed(2)) || 0;
        		if(nPct>100) nPct = 100;

        		roundFill = null;

        		if(nSum == nStart || (nSum==0 && nStart>0)) {
        			colorrange = [[0, nSum, 'radial-gradient(#fbde15:#f6d910:#f1d30b)']];
        		} else {
        			roundFill = null;
        			if(GOAL_Y > nSum) {
        				colorrange = [[0, GOAL_Y, 'radial-gradient(#fbde15:#f6d910:#f1d30b)']];
        			} else {
        				colorrange = [[0, GOAL_Y, 'radial-gradient(#fbde15:#f6d910:#f1d30b)'],[GOAL_Y, nSum, '#505156']];
        			}
        		}
        		this.gfnSetDeviceChartOne(chart, nSum, GOAL_Y, nPct, colorrange, roundFill, null, null, null, null/*, "#c3c4ff"*/);
        	}
        	this.dsItem.set_enableevent(true);

        	this.dsItem.set_keystring("S:-RESULT_Y");
        	var ds = this.dsItem;
        	var oChart = this.divVM.form.ChartJS_vmmemusage;
        	var namecol = "CAPTION";
        	var valuecol = "RESULT_Y";

        	this.fnTopListChart(oChart, ds, namecol, valuecol);

        };


        /**
         * 항목 월별
         */
        this.fnItemMonthChartBar = function (cd, cddata)
        {
        	// 용역,서비스,유지보수
        	var frm = this.divStorage.form;
        	var oChart;
        	if(cd == "S") oChart = frm.ChartJS_storage;
        	else if(cd == "T") oChart = frm.ChartJS_storage00;
        	else if(cd == "M") oChart = frm.ChartJS_storage00_00;

        	var arrData = [];
        	var label = [];
        	for(var i=0,len=cddata.data.length;i<len;i++) {
        		arrData[i] = [cddata.data[i].formatWon(),cddata.predata[i].formatWon()];
        		label[i] = (i+1) + "월";
        	}

        	var arrColor2 = ["#fbdd15", "#4cabf4"];
        	var canvas = oChart.getCanvas();
        	var cvs = canvas.id;
        	DxChart.reset(canvas);

        	var nW = this.divStorage.getOffsetWidth() - 10;
        	var nChartLeft = oChart.getOffsetLeft();

            var options = {
                        backgroundGrid: false,
                        xaxisLabels: label,
                        colors: arrColor2,
                        shadow: true,
                        shadowBlur: 3,
                        shadowOffsetx: 0,
                        shadowOffsety: 0,
                        shadowColor: '#aaaaaa',
                        colorsStroke: 'rgba(0,0,0,0)',
        				marginTop:             5,
        				marginBottom:          20,
        				marginLeft:            30,
        				marginRight:           5,
        				yaxisLabelsCount : 1,
        				xaxisLabelsFontStyle : "8px noto",
        				yaxisLabelsFontStyle : "8px noto",
        				xaxisColor : this.gfnChartColor("axis"),
        				xaxisLabelsColor :this.gfnChartColor("axislabel"),
        				yaxisLabelsColor :this.gfnChartColor("axislabel"),
        				yaxis : true,
        				title : '',
                        marginInnerGrouped: 1,
        				tooltipsData: '',
        				tooltipsFormattedKeyLabels: ['올해 : ','작년 : '],
        				tooltipsFormattedKeyColors : arrColor2,
        				tooltipsFormattedDecimals : 1,
        				tooltipsEvent: 'mousemove'
                    };
        	var tooltips = [];
        	for(var i=0,len=arrData.length;i<len;i++) {
        		var a = arrData[i];
        		if(!a) a = [0,0];
        		tooltips.push('<span style="font-size: 9pt;">' + label[i] + '</span>%{key}');
        		tooltips.push('<span style="font-size: 9pt;">' + label[i] + '</span>%{key}');
        	}
        	if(arrData.length == 0) {
        		options.backgroundImageX = oChart.getOffsetWidth()/2 - 30;
        		options.backgroundImageY = oChart.getOffsetHeight()/2 - 10;
        		options.backgroundImage = './images/grd_NODATA.png';
        		options.backgroundImageStretch = false;
        	} else {
        		options.backgroundImage = null;
        	}
        	options.tooltipsData = tooltips;
            var nodechart = new DxChartBar({
                    id: cvs,
        			elem : canvas,
                    data: arrData,
                    options: options
                 }).draw();
        };

        this.fnItemMonthChart = function ()
        {
        	//var arrCode = ["P", "S", "T", "M", "G"];	// 제품,용역,서비스,유지보수,상품
        	console.log("fnItemMonthChart===");
        	var frm = this.divStorage.form;
        	var arrCode = {};

        	var nTm = 0, nCnt, nCnt2;
        	for(var i=0,len=this.dsItemMon.rowcount;i<len;i++) {
        		nTm = parseInt(this.dsItemMon.getColumn(i, "MM").substr(0,2)) - 1;
        		nCnt = this.dsItemMon.getColumn(i, "RESULT_AMOUNT").valueOf();
        		nCnt2 = this.dsItemMon.getColumn(i, "PRE_RESULT_AMOUNT").valueOf();
        		var cd = arrCode[this.dsItemMon.getColumn(i, "CD_CODE")];
        		if(!cd) cd = arrCode[this.dsItemMon.getColumn(i, "CD_CODE")] = { "desc" : this.dsItemMon.getColumn(i, "CAPTION"),
        																		 "code" : this.dsItemMon.getColumn(i, "CD_CODE"),
        																		 "data" : [], "predata" : []
        																		 };
        		if(!cd.data[nTm]) cd.data[nTm] = 0;
        		cd.data[nTm] += nCnt;
        		if(!cd.predata[nTm]) cd.predata[nTm] = 0;
        		cd.predata[nTm] += nCnt2;
        	}
        	var sDefaultBg = "#525359";
        	var arrBgColor = [];
        	arrBgColor[1] = "rgba(140,51,54,0.1)";
        	arrBgColor[2] = "rgba(255,167,51,0.1)";
        	arrBgColor[3] = "rgba(32,125,95,0.1)";
        	arrBgColor[4] = "rgba(36,151,202,0.1)";

        	// Gradient(rgba(255,0,0,0.3):rgba(255,0,0,1))
        	var arrColor = [];
        	arrColor[1] = "#D9A0EE40";
        	arrColor[2] = "#F9ACDA40";
        	arrColor[3] = "#B1F8FD40";
        	arrColor[4] = "#BBB6F740";

        	var arrHexColor = [];
        	arrHexColor[1] = "#e1a4f7a0";
        	arrHexColor[2] = "#f9abdaa0";
        	arrHexColor[3] = "#aff4f9a0";
        	arrHexColor[4] = "#bbb6f7a0";

        	var arrFillColor = [];
        	arrFillColor[1] = "linear-gradient(#ce69f180:#d888f480:#e1a4f780)";
        	arrFillColor[2] = "linear-gradient(#f67fc780:#f79ad380:#f9abda80)";
        	arrFillColor[3] = "linear-gradient(#63e7ee80:#8feff480:#aff4f980)";
        	arrFillColor[4] = "linear-gradient(#8176f380:#a39df680:#bbb6f780)";

        	var nCnt = 1;
        	for(var cd in arrCode) {
        		var cddata = arrCode[cd];
        		var oChart = frm["ChartJS_" + nCnt];
        		//oChart.set_border("1px solid #6E7074");
        		var canvas = oChart.getCanvas();
        		var cvs = canvas.id;
        		DxChart.reset(canvas);
        		var nMax = 0;
        		var cddatadata = cddata.data;
        		var cdleng = cddatadata.length;
        		var tooltips = [];
        		var nSum = this.dsItemMon.getCaseSum("CD_CODE=='" + cddata.code + "'", "RESULT_AMOUNT").valueOf();
        		if(!nSum) nSum = 0;
        		nSum = nSum.formatWon() + "억";
        		this.gfnAlertChart(oChart, nCnt, cddatadata, nSum);

        		var st = frm["sta_" + nCnt];
        		st.set_text(cddata.desc);

        		nCnt++;

        		// "S", "T", "M"
        		if(cd == "S" || cd == "T" || cd == "M") {
        			this.fnItemMonthChartBar(cd, cddata);
        		}
        	}


        };


        this.fnPartChart = function ()
        {

        	var arrData = [];
        	var tt_sum = [];
        	var labelsInbarSpecificSum = [];
        	var yaxisLabels = [];

        	var AMOUNT_SUM, name, pct;
        	var nMaxAmt = 0;
        	var nSum = this.dsPart.getSum("AMOUNT_SUM").valueOf();
        	for(var i=0,len=this.dsPart.rowcount;i<len;i++) {
        		name = this.dsPart.getColumn(i, "CAPTION");
        		AMOUNT_SUM = this.dsPart.getColumn(i, "AMOUNT_SUM").valueOf();

        		if(AMOUNT_SUM !== 0) pct = nexacro.toNumber(((AMOUNT_SUM / nSum)*100).toFixed(2));
        		else pct = 0;
        		AMOUNT_SUM = AMOUNT_SUM.formatWon();
        		arrData.push(AMOUNT_SUM);
        		labelsInbarSpecificSum.push(pct + "%");
        		nMaxAmt = Math.max(nMaxAmt, AMOUNT_SUM);

        		tt_sum.push('<span style="font-size: 9pt;">' + name + '</span>%{key}');
        		yaxisLabels.push(name);
        	}

        	var oChart = this.divAlert00.form.ChartJS_cpupct;
        	var canvas = oChart.getCanvas();
        	var cvs = canvas.id;
        	DxChart.reset(canvas);

        	var aLabelPct = [];
        	for(var i=0,len=yaxisLabels.length;i<len;i++) {
        		if(yaxisLabels[i].length>10) {
        			aLabelPct.push(yaxisLabels[i].substr(0,10) + "..");
        		} else {
        			aLabelPct.push(yaxisLabels[i]);
        		}
        	}

        	var colors = ["#f36299","#cc62f3","#6265f3","#62f388","#f3ad62", "#f36299","#cc62f3","#6265f3","#62f388","#f3ad62"];
        	var nMarginGap = (oChart.getOffsetWidth()/aLabelPct.length)*0.3;
        	var param = {
        				marginTop:            5,
        				marginLeft:            35,
        				marginBottom:            72,
        				xaxisLabelsFontStyle : '9px noto',
        				xaxisLabelsAngle : 45,
        				yaxis : true,
        				yaxisLabelsCount : 2,
        				yaxisColor : '#00000000',
        				backgroundGridHlinesCount : 2,
        				colorsSequential : true,
        				colors : colors,
        				yaxisScaleMax : nMaxAmt + 2,
        				//yaxisScaleMax : 100,
        				grouping : "grouped",
                        xaxisLabels: aLabelPct,
        				marginInner: nMarginGap,
        				tooltipsFormattedKeyLabels : ['매출 : '],
        				tooltipsFormattedUnitsPost : '억',
        				tooltipsFormattedKeyColors: colors	,
        				tooltipsData : tt_sum,
        				//corners : 'round',
                        key: '',
        				labelsIngraphLineColor : '#cccccc',
        				labelsIngraph : labelsInbarSpecificSum
        	};
        	var option = this.gfnGetRChartOption("bar", "", param);
            var activity =  new DxChartBar({
        			id: cvs,
        			elem : canvas,
                    data: arrData,
                    options: option
                }).draw();

        	this.dsPart.set_keystring("S:-AMOUNT_SUM");
        	var ds = this.dsPart;
        	var oChart = this.divVM.form.ChartJS_vmcpu;
        	var namecol = "CAPTION";
        	var valuecol = "AMOUNT_SUM";
        	this.fnTopListChart(oChart, ds, namecol, valuecol);
        }

        this.fnCustomerChart = function ()
        {
        	this.dsCustomer.set_keystring("S:-CONTRACT_PRICE");
        	trace(this.dsCustomer.saveXML());
        	var ds = this.dsCustomer;
        	var oChart = this.divVM.form.ChartJSvmmem;
        	var namecol = "CLIENT_NAME";
        	var prjcol = "PROJECT_NAME";
        	var valuecol = "CONTRACT_PRICE";
        	this.fnTopListChart(oChart, ds, namecol, valuecol, prjcol);
        };


        this.fnTopListChart = function (oChart, ds, namecol, valuecol, prjcol)
        {
        	var data1 = [];
        	var name1 = [];
        	var tooltip1 = [];

        	var name, value;
        	var nMax = 0;
        	for(var i=0;i<5;i++) {
        		if(ds.rowcount <= i) {
        			data1.push(0);
        			name1.push("");
        		} else {
        			value = ds.getColumn(i, valuecol);
        			if(!value) {
        				value = 0;
        			} else {
        				value = value.valueOf().formatWon();
        			}
        			if(prjcol) {
        				name = ds.getColumn(i, namecol) + " " + ds.getColumn(i, prjcol);
        			} else {
        				name = ds.getColumn(i, namecol);
        			}
        			if(name1.indexOf(name)>=0) continue;
        			data1.push(value);
        			name1.push(name);
        			tooltip1.push('<span style="font-size: 9pt;">' + name + '</span>%{key}');
        			nMax = Math.max(nMax, value);
        		}
        	}

        	nMax = nMax + 10;
        	var data1dummy = [];
         	for(var i=0;i<data1.length;i++) {
         		data1dummy.push(nMax);
         	}
        	this.gfnTop5Chart(oChart, data1, data1dummy, name1, tooltip1, nMax);
        };

        //main div 가운데정렬
        this.fnDivMainResize = function ()
        {
        // 	var nLeft = nexacro.round((this.getOffsetWidth() - this.divMain.getOffsetWidth() ) /2);
        // 	var nTop = nexacro.round((this.getOffsetHeight() - this.divMain.getOffsetHeight() ) /2);
        //
        // 	if( nLeft < this.nDivMainTerm ) nLeft = this.nDivMainTerm;
        // 	if( nTop < this.nDivMainTerm ) nTop = this.nDivMainTerm;
        //
        // 	this.divMain.move(nLeft, nTop);
        	this.resetScroll();
        };

        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/

        this.frmMain_onkeydown = function(obj,e)
        {

        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("onsize",this.form_onsize,this);
            this.divMachine.addEventHandler("ondrag",this.div_ondrag,this);
            this.btnSearch.addEventHandler("onclick",this.gfnRefresh,this);
        };
        this.loadIncludeScript("statusMain.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
