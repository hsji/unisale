if (nexacro.Environment)
{
    var env = nexacro._environment = new nexacro.Environment();
    env.on_init = function ()
    {
        this.set_themeid("theme::devPack");
        this.set_datatyperule("2.0");
        this.set_icon("url(\'theme::devPack/images/mobiletong.ico\')");
        this.set_userfontid("font::NotoSans.xfont");
        this.set_usehttpkeepalive("true");
        this.set_filesecurelevel("all");
        this.set_loadingimage("url(\'theme::devPack/images/loadingimage.gif\')");
        this.set_enableaccessibility("false");
        this.set_checkversion("true");
    };
    env.on_initEvent = function ()
    {
        // add event handler

    };
    env.loadTypeDefinition = function ()
    {
        nexacro._setTypeDefinitionURL("typedefinition.xml");
        nexacro._addService("theme", "file", "./_resource_/_theme_/", "session", null, "", "20240531", "");
        nexacro._addService("initvalue", "file", "./_resource_/_initvalue_/", "session", null, "", "20240531", "");
        nexacro._addService("xcssrc", "file", "./_resource_/_xcss_/", "session", null, "", "20240531", "");
        nexacro._addService("imagerc", "file", "./_resource_/_images_/", "session", null, "", "20240531", "");
        nexacro._addService("font", "file", "./_resource_/_font_/", "session", null, "", "20240531", "");
        nexacro._addService("license", "file", "./license/", "session", null, "", "0", "0");
        nexacro._addService("svcUrl", "JSP", "http://localhost:8080/", "none", null, "", "0", "0");
        nexacro._addService("devPackLib", "file", "./nexacrolib/component/DevPackLib/", "session", null, "", "20240531", "0");
        nexacro._addService("design", "form", "./design/", "session", null, "", "0", "0");
        nexacro._addService("sample", "form", "./sample/", "session", null, "", "20240531", "0");
        nexacro._addService("frame", "form", "./frame/", "session", null, "", "20240531", "0");
        nexacro._addService("common", "form", "./common/", "session", null, "", "20240531", "0");
        nexacro._addService("sytm", "form", "./sytm/", "session", null, "", "20240531", "0");
        nexacro._addService("hrd", "form", "./hrd/", "session", null, "", "20240531", "0");
        nexacro._addService("sales", "form", "./sales/", "session", null, "", "20240531", "0");
        nexacro._addService("comm", "form", "./comm/", "session", null, "", "20240531", "0");
        nexacro._addService("chart", "file", "./_extlib_/DxChart/", "session", null, "", "20240531", "0");
        nexacro._addService("manage", "form", "./manage/", "session", null, "", "20240531", "0");
        nexacro._addService("alasql", "file", "./nexacrolib/component/AlaSql/", "session", null, "", "20240531", "0");
        nexacro._addService("docForm", "form", "./docForm/", "session", null, "", "20240531", "0");
        nexacro._addService("ubiComm", "form", "./ubiComm/", "session", null, "", "20240531", "0");
        nexacro._addService("meet", "form", "./meet/", "session", null, "", "20240531", "0");
        nexacro._addService("Script", "js", "./Script/", "session", null, "", "0", "0");
    	nexacro._component_uri = (nexacro._arg_compurl ? nexacro._arg_compurl : "./nexacrolib/component/");
    	nexacro._theme_uri = "./_resource_/_theme_/";
    	// load components
        var registerclass = [
        		{"id":"Button", "classname":"nexacro.Button", "type":"JavaScript"},
        		{"id":"Combo", "classname":"nexacro.Combo", "type":"JavaScript"},
        		{"id":"Edit", "classname":"nexacro.Edit", "type":"JavaScript"},
        		{"id":"MaskEdit", "classname":"nexacro.MaskEdit", "type":"JavaScript"},
        		{"id":"TextArea", "classname":"nexacro.TextArea", "type":"JavaScript"},
        		{"id":"Static", "classname":"nexacro.Static", "type":"JavaScript"},
        		{"id":"Div", "classname":"nexacro.Div", "type":"JavaScript"},
        		{"id":"PopupDiv", "classname":"nexacro.PopupDiv", "type":"JavaScript"},
        		{"id":"Radio", "classname":"nexacro.Radio", "type":"JavaScript"},
        		{"id":"CheckBox", "classname":"nexacro.CheckBox", "type":"JavaScript"},
        		{"id":"ListBox", "classname":"nexacro.ListBox", "type":"JavaScript"},
        		{"id":"Grid", "classname":"nexacro.Grid", "type":"JavaScript"},
        		{"id":"Spin", "classname":"nexacro.Spin", "type":"JavaScript"},
        		{"id":"Menu", "classname":"nexacro.Menu", "type":"JavaScript"},
        		{"id":"PopupMenu", "classname":"nexacro.PopupMenu", "type":"JavaScript"},
        		{"id":"Tab", "classname":"nexacro.Tab", "type":"JavaScript"},
        		{"id":"GroupBox", "classname":"nexacro.GroupBox", "type":"JavaScript"},
        		{"id":"Calendar", "classname":"nexacro.Calendar", "type":"JavaScript"},
        		{"id":"ImageViewer", "classname":"nexacro.ImageViewer", "type":"JavaScript"},
        		{"id":"ProgressBar", "classname":"nexacro.ProgressBar", "type":"JavaScript"},
        		{"id":"Plugin", "classname":"nexacro.Plugin", "type":"JavaScript"},
        		{"id":"Dataset", "classname":"nexacro.NormalDataset", "type":"JavaScript"},
        		{"id":"ListView", "classname":"nexacro.ListView", "type":"JavaScript"},
        		{"id":"DataObject", "classname":"nexacro.DataObject", "type":"JavaScript"},
        		{"id":"FileDialog", "classname":"nexacro.FileDialog", "type":"JavaScript"},
        		{"id":"FileUpload", "classname":"nexacro.FileUpload", "type":"JavaScript"},
        		{"id":"FileUpTransfer", "classname":"nexacro.FileUpTransfer", "type":"JavaScript"},
        		{"id":"FileDownload", "classname":"nexacro.FileDownload", "type":"JavaScript"},
        		{"id":"FileDownTransfer", "classname":"nexacro.FileDownTransfer", "type":"JavaScript"},
        		{"id":"VirtualFile", "classname":"nexacro.VirtualFile", "type":"JavaScript"},
        		{"id":"WebBrowser", "classname":"nexacro.WebBrowser", "type":"JavaScript"},
        		{"id":"PeriodCalendar", "classname":"nexacro.PeriodCalendar", "type":"JavaScript"},
        		{"id":"MonthCalendar", "classname":"nexacro.MonthCalendar", "type":"JavaScript"},
        		{"id":"WeekCalendar", "classname":"nexacro.WeekCalendar", "type":"JavaScript"},
        		{"id":"DaumPostCode", "classname":"nexacro.DaumPostCode", "type":"JavaScript"},
        		{"id":"JusoPostCode", "classname":"nexacro.JusoPostCode", "type":"JavaScript"},
        		{"id":"MultiUserCombo", "classname":"nexacro.MultiUserCombo", "type":"JavaScript"},
        		{"id":"WebView", "classname":"nexacro.WebView", "type":"JavaScript"},
        		{"id":"FromToCalendar", "classname":"nexacro.FromToCalendar", "type":"JavaScript"},
        		{"id":"Splitter", "classname":"nexacro.Splitter", "type":"JavaScript"},
        		{"id":"CheckBoxSet", "classname":"nexacro.CheckBoxSet", "type":"JavaScript"},
        		{"id":"MultiCombo", "classname":"nexacro.MultiCombo", "type":"JavaScript"},
        		{"id":"ChartJS", "classname":"nexacro.ChartJS", "type":"JavaScript"},
        		{"id":"UbiDocuMaker", "classname":"nexacro.UbiDocuMaker", "type":"JavaScript"},
        		{"id":"WeekByMonthCalendar", "classname":"nexacro.WeekByMonthCalendar", "type":"JavaScript"}
        ];
    	nexacro._addClasses(registerclass);
    };
    env.on_loadVariables = function ()
    {
        // Variables
        nexacro.setEnvironmentVariable("evMessagePopup", "true");
        nexacro.setEnvironmentVariable("evQuickView", "Y");
        nexacro.setEnvironmentVariable("evSytmFlagCd", "PC");
        // Cookies

        // HTTP Header

    };
	env.on_loadDeviceAdaptors = function ()
	{
        // load device adatpor

	};
    // User Script

					
    env = null;
}
