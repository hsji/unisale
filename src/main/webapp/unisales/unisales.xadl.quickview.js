(function()
{
    return function()
    {
        this.on_loadAppVariables = function()
        {		
            var obj = null;
            
			// global dataobject
		
            // global dataset
            obj = new Dataset("gdsMessage", this);
            obj._setContents("<ColumnInfo><Column id=\"MSGE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"KORN_MSGE\" type=\"STRING\" size=\"256\"/><Column id=\"MSGE_FLAG_CD\" type=\"STRING\" size=\"3\"/><Column id=\"msgTitle\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsOpenMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"WIN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ENGL_NM\" type=\"STRING\" size=\"32\"/><Column id=\"ENGL_DISPLAY_PATH\" type=\"STRING\" size=\"32\"/><Column id=\"MODULE_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CMMNBTNADD\" type=\"STRING\" size=\"32\"/><Column id=\"DISPLAY_PATH\" type=\"STRING\" size=\"32\"/><Column id=\"SYTM_FLAG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_ORDR\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PARM\" type=\"STRING\" size=\"256\"/><Column id=\"CMMNBTNSAVE\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_URL\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_FILE_NM\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LV\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"SEARCH_SCOPE_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_PATH\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_FLAG_CD\" type=\"STRING\" size=\"32\"/><Column id=\"CMMNBTNINIT\" type=\"STRING\" size=\"32\"/><Column id=\"CMMNBTNPRINT\" type=\"STRING\" size=\"32\"/><Column id=\"CMMNBTNEXCELDOWN\" type=\"STRING\" size=\"32\"/><Column id=\"CMMNBTNSEARCH\" type=\"STRING\" size=\"32\"/><Column id=\"CMMNBTNDEL\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"32\"/><Column id=\"REMK\" type=\"STRING\" size=\"256\"/><Column id=\"HIPO_MENU_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_PATH\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_HELP_FLAG\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_NM\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">10100000</Col><Col id=\"MENU_NM\">디자인</Col><Col id=\"MENU_LV\">0</Col><Col id=\"HIPO_MENU_ID\"/><Col id=\"PRGM_ID\">10100000</Col><Col id=\"USED_YN\">Y</Col><Col id=\"MENU_GRP_ID\">10100000</Col></Row><Row><Col id=\"MENU_ID\">10101000</Col><Col id=\"MENU_NM\">템플릿</Col><Col id=\"MENU_LV\">1</Col><Col id=\"HIPO_MENU_ID\">10100000</Col><Col id=\"PRGM_ID\">10100000</Col><Col id=\"USED_YN\">Y</Col><Col id=\"MENU_GRP_ID\">10100000</Col></Row><Row><Col id=\"MENU_ID\">10101001</Col><Col id=\"MENU_NM\">Single-Detail</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10101000</Col><Col id=\"PRGM_ID\">10101001</Col><Col id=\"USED_YN\">Y</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">design::Template/Temp01.xfdl</Col><Col id=\"cmmnBtnPrint\"/><Col id=\"cmmnBtnHelp\"/><Col id=\"cmmnBtnAdd\">Y</Col><Col id=\"cmmnBtnDel\">Y</Col><Col id=\"cmmnBtnSave\">Y</Col><Col id=\"MENU_GRP_ID\">10100000</Col></Row><Row><Col id=\"MENU_NM\">Multi-Detail</Col><Col id=\"MENU_ID\">10101010</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10101000</Col><Col id=\"PRGM_ID\">10101010</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">design::Template/Temp02.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnAdd\">Y</Col><Col id=\"cmmnBtnDel\">Y</Col><Col id=\"cmmnBtnSave\">Y</Col><Col id=\"cmmnBtnPrint\"/><Col id=\"cmmnBtnHelp\"/><Col id=\"cmmnBtnExcelUp\">Y</Col><Col id=\"cmmnBtnExcelDown\">Y</Col><Col id=\"MENU_GRP_ID\">10100000</Col></Row><Row><Col id=\"MENU_ID\">10101002</Col><Col id=\"MENU_NM\">List-Detail1</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10101000</Col><Col id=\"PRGM_ID\">10101002</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">design::Template/Temp03.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnAdd\">Y</Col><Col id=\"cmmnBtnDel\">Y</Col><Col id=\"cmmnBtnSave\">Y</Col><Col id=\"cmmnBtnPrint\"/><Col id=\"cmmnBtnHelp\"/><Col id=\"cmmnBtnExcelUp\">Y</Col><Col id=\"cmmnBtnExcelDown\">Y</Col><Col id=\"MENU_GRP_ID\">10100000</Col></Row><Row><Col id=\"MENU_ID\">10101003</Col><Col id=\"MENU_NM\">List-Detail2</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10101000</Col><Col id=\"PRGM_ID\">10101003</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">design::Template/Temp04.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnPrint\"/><Col id=\"cmmnBtnHelp\"/><Col id=\"cmmnBtnAdd\">Y</Col><Col id=\"cmmnBtnDel\">Y</Col><Col id=\"cmmnBtnSave\">Y</Col><Col id=\"MENU_GRP_ID\">10100000</Col></Row><Row><Col id=\"MENU_ID\">10101004</Col><Col id=\"MENU_NM\">Master-Detail</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10101000</Col><Col id=\"PRGM_ID\">10101004</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">design::Template/Temp05.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnPrint\"/><Col id=\"cmmnBtnHelp\"/><Col id=\"cmmnBtnAdd\">Y</Col><Col id=\"cmmnBtnDel\">Y</Col><Col id=\"cmmnBtnSave\">Y</Col><Col id=\"MENU_GRP_ID\">10100000</Col></Row><Row><Col id=\"MENU_ID\">10101005</Col><Col id=\"MENU_NM\">Master-Detail-V</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10101000</Col><Col id=\"PRGM_ID\">10101005</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">design::Template/Temp06.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnPrint\"/><Col id=\"cmmnBtnHelp\"/><Col id=\"cmmnBtnAdd\">Y</Col><Col id=\"cmmnBtnDel\">Y</Col><Col id=\"cmmnBtnSave\">Y</Col><Col id=\"MENU_GRP_ID\">10100000</Col></Row><Row><Col id=\"MENU_ID\">10101006</Col><Col id=\"MENU_NM\">Master-Detail-H</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10101000</Col><Col id=\"PRGM_ID\">10101006</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">design::Template/Temp07.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnAdd\">Y</Col><Col id=\"cmmnBtnDel\">Y</Col><Col id=\"cmmnBtnSave\">Y</Col><Col id=\"MENU_GRP_ID\">10100000</Col></Row><Row><Col id=\"MENU_ID\">10101007</Col><Col id=\"MENU_NM\">Master-Detail-VVV</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10101000</Col><Col id=\"PRGM_ID\">10101007</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">design::Template/Temp08.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnPrint\"/><Col id=\"cmmnBtnHelp\"/><Col id=\"cmmnBtnSave\">Y</Col><Col id=\"cmmnBtnAdd\">Y</Col><Col id=\"cmmnBtnDel\">Y</Col><Col id=\"MENU_GRP_ID\">10100000</Col></Row><Row><Col id=\"MENU_ID\">10101008</Col><Col id=\"MENU_NM\">Master-Detail-VHH</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10101000</Col><Col id=\"PRGM_ID\">10101008</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">design::Template/Temp09.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnPrint\"/><Col id=\"cmmnBtnHelp\"/><Col id=\"cmmnBtnSave\">Y</Col><Col id=\"cmmnBtnAdd\">Y</Col><Col id=\"cmmnBtnDel\">Y</Col><Col id=\"MENU_GRP_ID\">10100000</Col></Row><Row><Col id=\"MENU_ID\">10101009</Col><Col id=\"MENU_NM\">Master-Detail-HHH</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10101000</Col><Col id=\"PRGM_ID\">10101009</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">design::Template/Temp10.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnAdd\">Y</Col><Col id=\"cmmnBtnDel\">Y</Col><Col id=\"cmmnBtnSave\">Y</Col><Col id=\"MENU_GRP_ID\">10100000</Col></Row><Row><Col id=\"MENU_NM\">Master-Detail-VVV</Col><Col id=\"MENU_ID\">10101010</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10101000</Col><Col id=\"PRGM_ID\">10101010</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"USED_YN\">Y</Col><Col id=\"MENU_URL\">design::Template/Temp11.xfdl</Col><Col id=\"cmmnBtnSave\">Y</Col><Col id=\"cmmnBtnDel\">Y</Col><Col id=\"cmmnBtnAdd\">Y</Col><Col id=\"MENU_GRP_ID\">10100000</Col></Row><Row><Col id=\"MENU_NM\">Master-List-Detail-VHH</Col><Col id=\"MENU_ID\">10101011</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10101000</Col><Col id=\"PRGM_ID\">10101011</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"USED_YN\">Y</Col><Col id=\"MENU_URL\">design::Template/Temp12.xfdl</Col><Col id=\"cmmnBtnAdd\">Y</Col><Col id=\"cmmnBtnDel\">Y</Col><Col id=\"cmmnBtnSave\">Y</Col><Col id=\"MENU_GRP_ID\">10100000</Col></Row><Row><Col id=\"MENU_NM\">Master-List-Detail-HVV</Col><Col id=\"MENU_ID\">10101012</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10101000</Col><Col id=\"PRGM_ID\">10101012</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"USED_YN\">Y</Col><Col id=\"MENU_URL\">design::Template/Temp13.xfdl</Col><Col id=\"cmmnBtnSave\">Y</Col><Col id=\"cmmnBtnDel\">Y</Col><Col id=\"cmmnBtnAdd\">Y</Col><Col id=\"MENU_GRP_ID\">10100000</Col></Row><Row><Col id=\"MENU_NM\">Tree</Col><Col id=\"MENU_ID\">10101013</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10101000</Col><Col id=\"PRGM_ID\">10101013</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"USED_YN\">Y</Col><Col id=\"MENU_URL\">design::Template/Temp14.xfdl</Col><Col id=\"cmmnBtnAdd\">Y</Col><Col id=\"cmmnBtnDel\">Y</Col><Col id=\"cmmnBtnSave\">Y</Col><Col id=\"MENU_GRP_ID\">10100000</Col></Row><Row><Col id=\"MENU_NM\">Shuttle</Col><Col id=\"MENU_ID\">10101014</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10101000</Col><Col id=\"PRGM_ID\">10101014</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"USED_YN\">Y</Col><Col id=\"MENU_URL\">design::Template/Temp15.xfdl</Col><Col id=\"cmmnBtnSave\">Y</Col><Col id=\"cmmnBtnDel\">Y</Col><Col id=\"cmmnBtnAdd\">Y</Col><Col id=\"MENU_GRP_ID\">10100000</Col></Row><Row><Col id=\"MENU_NM\">Tab</Col><Col id=\"MENU_ID\">10101015</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10101000</Col><Col id=\"PRGM_ID\">10101015</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"USED_YN\">Y</Col><Col id=\"MENU_URL\">design::Template/Temp16.xfdl</Col><Col id=\"cmmnBtnAdd\">Y</Col><Col id=\"cmmnBtnDel\">Y</Col><Col id=\"cmmnBtnSave\">Y</Col><Col id=\"MENU_GRP_ID\">10100000</Col></Row><Row><Col id=\"MENU_NM\">Popup</Col><Col id=\"MENU_ID\">10101016</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10101000</Col><Col id=\"PRGM_ID\">10101016</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"USED_YN\">Y</Col><Col id=\"MENU_URL\">design::Template/Temp17.xfdl</Col><Col id=\"cmmnBtnAdd\">Y</Col><Col id=\"cmmnBtnDel\">Y</Col><Col id=\"cmmnBtnSave\">Y</Col><Col id=\"MENU_GRP_ID\">10100000</Col></Row><Row><Col id=\"MENU_ID\">10102000</Col><Col id=\"MENU_NM\">가이드</Col><Col id=\"MENU_LV\">1</Col><Col id=\"HIPO_MENU_ID\">10100000</Col><Col id=\"PRGM_ID\">10100000</Col><Col id=\"LEAF_YN\"/><Col id=\"MENU_URL\"/><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnPrint\"/><Col id=\"cmmnBtnHelp\"/><Col id=\"MENU_GRP_ID\">10100000</Col></Row><Row><Col id=\"MENU_ID\">10102001</Col><Col id=\"MENU_NM\">컴포넌트1</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10102000</Col><Col id=\"PRGM_ID\">10102001</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">design::Guide/Component01.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnPrint\"/><Col id=\"cmmnBtnHelp\"/><Col id=\"MENU_GRP_ID\">10100000</Col></Row><Row><Col id=\"MENU_ID\">10102002</Col><Col id=\"MENU_NM\">컴포넌트2</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10102000</Col><Col id=\"PRGM_ID\">10102002</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">design::Guide/Component02.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnPrint\"/><Col id=\"cmmnBtnHelp\"/><Col id=\"MENU_GRP_ID\">10100000</Col></Row><Row><Col id=\"MENU_ID\">10102003</Col><Col id=\"MENU_NM\">컴포넌트3</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10102000</Col><Col id=\"PRGM_ID\">10102003</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">design::Guide/Component03.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnPrint\"/><Col id=\"cmmnBtnHelp\"/><Col id=\"MENU_GRP_ID\">10100000</Col></Row><Row><Col id=\"MENU_ID\">10300000</Col><Col id=\"MENU_NM\">기능 샘플</Col><Col id=\"MENU_LV\">0</Col><Col id=\"PRGM_ID\">10300000</Col><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnPrint\"/><Col id=\"cmmnBtnHelp\"/><Col id=\"MENU_GRP_ID\">10300000</Col></Row><Row><Col id=\"MENU_ID\">10301000</Col><Col id=\"MENU_NM\">기본기능</Col><Col id=\"MENU_LV\">1</Col><Col id=\"HIPO_MENU_ID\">10300000</Col><Col id=\"PRGM_ID\">10300000</Col><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnPrint\"/><Col id=\"cmmnBtnHelp\"/><Col id=\"MENU_GRP_ID\">10300000</Col></Row><Row><Col id=\"MENU_ID\">10301001</Col><Col id=\"MENU_NM\">스크립트 샘플(기능X)</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10301000</Col><Col id=\"PRGM_ID\">10301001</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">sample::sampleScript.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnPrint\"/><Col id=\"cmmnBtnHelp\"/><Col id=\"MENU_GRP_ID\">10300000</Col></Row><Row><Col id=\"MENU_ID\">10301002</Col><Col id=\"MENU_NM\">트랜잭션 샘플</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10301000</Col><Col id=\"PRGM_ID\">10301002</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">sample::sampleTransaction.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnAdd\">Y</Col><Col id=\"cmmnBtnDel\">Y</Col><Col id=\"cmmnBtnSave\">Y</Col><Col id=\"cmmnBtnPrint\"/><Col id=\"cmmnBtnHelp\"/><Col id=\"MENU_GRP_ID\">10300000</Col></Row><Row><Col id=\"MENU_ID\">10301003</Col><Col id=\"MENU_NM\">팝업샘플</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10301000</Col><Col id=\"PRGM_ID\">10301003</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">sample::samplePopup.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnAdd\">Y</Col><Col id=\"cmmnBtnSave\">Y</Col><Col id=\"cmmnBtnHelp\"/><Col id=\"MENU_GRP_ID\">10300000</Col></Row><Row><Col id=\"MENU_ID\">10301004</Col><Col id=\"MENU_NM\">메세지 샘플</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10301000</Col><Col id=\"PRGM_ID\">10301004</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">sample::sampleMessage.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"MENU_GRP_ID\">10300000</Col></Row><Row><Col id=\"MENU_ID\">10301005</Col><Col id=\"MENU_NM\">엑셀 import/export</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10301000</Col><Col id=\"PRGM_ID\">10301005</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">sample::sampleExcel.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnExcelUp\">Y</Col><Col id=\"cmmnBtnExcelDown\">Y</Col><Col id=\"cmmnBtnSave\">Y</Col><Col id=\"cmmnBtnDel\">Y</Col><Col id=\"cmmnBtnAdd\">Y</Col><Col id=\"MENU_GRP_ID\">10300000</Col></Row><Row><Col id=\"MENU_ID\">10301006</Col><Col id=\"MENU_NM\">파일 upload/download</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10301000</Col><Col id=\"PRGM_ID\">10301006</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">sample::sampleFile.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"MENU_GRP_ID\">10300000</Col></Row><Row><Col id=\"MENU_ID\">10301007</Col><Col id=\"MENU_NM\">정합성 체크</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10301000</Col><Col id=\"PRGM_ID\">10301007</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">sample::sampleValidation.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"MENU_GRP_ID\">10300000</Col></Row><Row><Col id=\"MENU_ID\">10301011</Col><Col id=\"MENU_NM\">그리드기능 샘플</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10301000</Col><Col id=\"PRGM_ID\">10301011</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">sample::sampleGrid.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"MENU_GRP_ID\">10300000</Col></Row><Row><Col id=\"MENU_ID\">10301012</Col><Col id=\"MENU_NM\">그리드 페이징</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10301000</Col><Col id=\"PRGM_ID\">10301012</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">sample::samplePaging.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"MENU_GRP_ID\">10300000</Col></Row><Row><Col id=\"MENU_ID\">10301013</Col><Col id=\"MENU_NM\">다양한 그리드 표현</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10301000</Col><Col id=\"PRGM_ID\">10301013</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">sample::sampleGridType.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"MENU_GRP_ID\">10300000</Col></Row><Row><Col id=\"MENU_ID\">10301014</Col><Col id=\"MENU_NM\">그리드 그룹/Suppress</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10301000</Col><Col id=\"PRGM_ID\">10301014</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">sample::sampleGridGroup.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"MENU_GRP_ID\">10300000</Col></Row><Row><Col id=\"MENU_ID\">10301015</Col><Col id=\"MENU_NM\">Div동적생성</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10301000</Col><Col id=\"PRGM_ID\">10301015</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">sample::sampleDynamicDiv.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"MENU_GRP_ID\">10300000</Col></Row><Row><Col id=\"MENU_ID\">10301016</Col><Col id=\"MENU_NM\">Tabpage 동적생성</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10301000</Col><Col id=\"PRGM_ID\">10301016</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">sample::sampleDynamicTab.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"MENU_GRP_ID\">10300000</Col></Row><Row><Col id=\"MENU_ID\">10302000</Col><Col id=\"MENU_NM\">확장컴포넌트</Col><Col id=\"MENU_LV\">1</Col><Col id=\"HIPO_MENU_ID\">10300000</Col><Col id=\"PRGM_ID\">10300000</Col><Col id=\"USED_YN\">Y</Col><Col id=\"MENU_GRP_ID\">10300000</Col></Row><Row><Col id=\"MENU_ID\">10302002</Col><Col id=\"MENU_NM\">멀티콤보</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10302000</Col><Col id=\"PRGM_ID\">10302002</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">sample::sampleMultiComboModule.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"MENU_GRP_ID\">10300000</Col></Row><Row><Col id=\"MENU_ID\">10302004</Col><Col id=\"MENU_NM\">캘린더</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10302000</Col><Col id=\"PRGM_ID\">10302004</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">sample::sampleCalendarModule.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"MENU_GRP_ID\">10300000</Col></Row><Row><Col id=\"MENU_ID\">10303005</Col><Col id=\"MENU_NM\">주소찾기 샘플</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10303000</Col><Col id=\"PRGM_ID\">10303005</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">sample::samplePostModule.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"MENU_GRP_ID\">10300000</Col></Row><Row><Col id=\"MENU_ID\">10303000</Col><Col id=\"MENU_NM\">외부모듈연동</Col><Col id=\"MENU_LV\">1</Col><Col id=\"HIPO_MENU_ID\">10300000</Col><Col id=\"PRGM_ID\">10300000</Col><Col id=\"USED_YN\">Y</Col><Col id=\"MENU_GRP_ID\">10300000</Col></Row><Row><Col id=\"MENU_ID\">10303001</Col><Col id=\"MENU_NM\">웹브라우저 사용 샘플</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10303000</Col><Col id=\"PRGM_ID\">10303001</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">sample::sampleWebBrowser.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"MENU_GRP_ID\">10300000</Col></Row><Row><Col id=\"MENU_ID\">10303018</Col><Col id=\"MENU_NM\">웹뷰 사용 샘플</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10303000</Col><Col id=\"MENU_GRP_ID\">10300000</Col><Col id=\"PRGM_ID\">10303018</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">sample::sampleWebView.xfdl</Col><Col id=\"USED_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">10303002</Col><Col id=\"MENU_NM\">넥사크로 차트 샘플</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10303000</Col><Col id=\"PRGM_ID\">10303002</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">sample::sampleNexacroChart.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"MENU_GRP_ID\">10300000</Col></Row><Row><Col id=\"MENU_ID\">10303003</Col><Col id=\"MENU_NM\">웹에디터 샘플</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10303000</Col><Col id=\"PRGM_ID\">10303003</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">sample::sampleWebEditor.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"MENU_GRP_ID\">10300000</Col></Row><Row><Col id=\"MENU_ID\">10400000</Col><Col id=\"MENU_NM\">시스템관리</Col><Col id=\"MENU_LV\">0</Col><Col id=\"PRGM_ID\">10400000</Col><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnPrint\"/><Col id=\"cmmnBtnHelp\"/><Col id=\"MENU_GRP_ID\">10400000</Col></Row><Row><Col id=\"MENU_ID\">10401000</Col><Col id=\"MENU_NM\">기본기능</Col><Col id=\"MENU_LV\">1</Col><Col id=\"HIPO_MENU_ID\">10400000</Col><Col id=\"PRGM_ID\">10400000</Col><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnPrint\"/><Col id=\"cmmnBtnHelp\"/><Col id=\"MENU_GRP_ID\">10400000</Col></Row><Row><Col id=\"MENU_ID\">10401001</Col><Col id=\"MENU_NM\">공통코드관리</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10401000</Col><Col id=\"PRGM_ID\">10401001</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">biz.code::codeMgFm.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnPrint\"/><Col id=\"cmmnBtnHelp\"/><Col id=\"cmmnBtnAdd\">Y</Col><Col id=\"cmmnBtnDel\">Y</Col><Col id=\"cmmnBtnSave\">Y</Col><Col id=\"MENU_GRP_ID\">10400000</Col></Row><Row><Col id=\"MENU_ID\">10401002</Col><Col id=\"MENU_NM\">공통코드 통합 조회</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10401000</Col><Col id=\"PRGM_ID\">10401002</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">biz.code::codeListFm.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnExcelDown\">Y</Col><Col id=\"MENU_GRP_ID\">10400000</Col></Row><Row><Col id=\"MENU_ID\">10401003</Col><Col id=\"MENU_NM\">메세지 관리</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10401000</Col><Col id=\"PRGM_ID\">10401003</Col><Col id=\"MENU_URL\">biz.base::baseMsgMgFm.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnAdd\">Y</Col><Col id=\"cmmnBtnDel\">Y</Col><Col id=\"cmmnBtnSave\">Y</Col><Col id=\"cmmnBtnExcelDown\">Y</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_GRP_ID\">10400000</Col></Row><Row><Col id=\"MENU_ID\">10401007</Col><Col id=\"MENU_NM\">게시판관리</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10401000</Col><Col id=\"PRGM_ID\">10401007</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">biz.board::boardMagFm.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnAdd\">Y</Col><Col id=\"cmmnBtnDel\">Y</Col><Col id=\"cmmnBtnSave\">Y</Col><Col id=\"cmmnBtnExcelDown\">Y</Col><Col id=\"MENU_GRP_ID\">10400000</Col></Row><Row><Col id=\"MENU_ID\">10401004</Col><Col id=\"MENU_NM\">사용자 관리</Col><Col id=\"MENU_LV\">1</Col><Col id=\"HIPO_MENU_ID\">10400000</Col><Col id=\"PRGM_ID\">10400000</Col><Col id=\"MENU_URL\"/><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnAdd\"/><Col id=\"cmmnBtnDel\"/><Col id=\"cmmnBtnSave\"/><Col id=\"cmmnBtnExcelDown\"/><Col id=\"MENU_GRP_ID\">10400000</Col></Row><Row><Col id=\"MENU_ID\">10401005</Col><Col id=\"MENU_NM\">사용자 관리</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10401004</Col><Col id=\"PRGM_ID\">10401005</Col><Col id=\"MENU_URL\">biz.auth::authUserMgFm.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnAdd\">Y</Col><Col id=\"cmmnBtnDel\">Y</Col><Col id=\"cmmnBtnSave\">Y</Col><Col id=\"cmmnBtnExcelDown\">Y</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_GRP_ID\">10400000</Col></Row><Row><Col id=\"MENU_ID\">10401006</Col><Col id=\"MENU_NM\">부서관리</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10401004</Col><Col id=\"PRGM_ID\">10401006</Col><Col id=\"MENU_URL\">biz.auth::authDeptMgFm.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnAdd\">Y</Col><Col id=\"cmmnBtnDel\">Y</Col><Col id=\"cmmnBtnSave\">Y</Col><Col id=\"cmmnBtnExcelDown\">Y</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_GRP_ID\">10400000</Col></Row><Row><Col id=\"MENU_ID\">10401009</Col><Col id=\"MENU_NM\">권한관리</Col><Col id=\"MENU_LV\">1</Col><Col id=\"HIPO_MENU_ID\">10400000</Col><Col id=\"MENU_GRP_ID\">10400000</Col><Col id=\"PRGM_ID\">10400000</Col><Col id=\"USED_YN\">Y</Col></Row><Row><Col id=\"MENU_ID\">10401008</Col><Col id=\"MENU_NM\">프로그램관리</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10401004</Col><Col id=\"MENU_GRP_ID\">10400000</Col><Col id=\"PRGM_ID\">10401008</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">biz.auth::authProgramMgFm.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnAdd\">Y</Col><Col id=\"cmmnBtnDel\">Y</Col><Col id=\"cmmnBtnSave\">Y</Col><Col id=\"cmmnBtnExcelDown\">Y</Col></Row><Row><Col id=\"MENU_ID\">10401011</Col><Col id=\"MENU_NM\">메뉴관리</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10401004</Col><Col id=\"MENU_GRP_ID\">10400000</Col><Col id=\"PRGM_ID\">10401011</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">biz.auth::authMenuMgFm.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnSave\">Y</Col><Col id=\"cmmnBtnExcelDown\">Y</Col><Col id=\"cmmnBtnDel\">Y</Col></Row><Row><Col id=\"MENU_ID\">10401010</Col><Col id=\"MENU_NM\">데이터권한관리</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10401009</Col><Col id=\"MENU_GRP_ID\">10400000</Col><Col id=\"PRGM_ID\">10401010</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">biz.auth::authPermDataMgFm.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnAdd\"/><Col id=\"cmmnBtnDel\"/><Col id=\"cmmnBtnSave\"/><Col id=\"cmmnBtnExcelDown\"/></Row><Row><Col id=\"MENU_ID\">10401012</Col><Col id=\"MENU_NM\">권한별 사용자 관리</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10401009</Col><Col id=\"MENU_GRP_ID\">10400000</Col><Col id=\"PRGM_ID\">10401012</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">biz.auth::authPermUserMgFm.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnAdd\">Y</Col><Col id=\"cmmnBtnDel\">Y</Col><Col id=\"cmmnBtnSave\">Y</Col><Col id=\"cmmnBtnExcelDown\"/></Row><Row><Col id=\"MENU_ID\">10401013</Col><Col id=\"MENU_NM\">개인별 권한 관리</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10401009</Col><Col id=\"MENU_GRP_ID\">10400000</Col><Col id=\"PRGM_ID\">10401013</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">biz.auth::authPermPersonalMgFm.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnAdd\"/><Col id=\"cmmnBtnDel\"/><Col id=\"cmmnBtnSave\">Y</Col><Col id=\"cmmnBtnExcelDown\"/></Row><Row><Col id=\"MENU_ID\">10401014</Col><Col id=\"MENU_NM\">그룹권한 메뉴 관리</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10401009</Col><Col id=\"MENU_GRP_ID\">10400000</Col><Col id=\"PRGM_ID\">10401014</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">biz.auth::authPermMenuMgFm.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnAdd\">Y</Col><Col id=\"cmmnBtnDel\">Y</Col><Col id=\"cmmnBtnSave\">Y</Col><Col id=\"cmmnBtnExcelDown\"/></Row><Row><Col id=\"MENU_ID\">10500000</Col><Col id=\"MENU_NM\">게시판</Col><Col id=\"MENU_LV\">0</Col><Col id=\"USED_YN\">Y</Col><Col id=\"PRGM_ID\">10500000</Col><Col id=\"MENU_GRP_ID\">10500000</Col></Row><Row><Col id=\"MENU_ID\">10501000</Col><Col id=\"MENU_NM\">공지사항</Col><Col id=\"MENU_LV\">1</Col><Col id=\"USED_YN\">Y</Col><Col id=\"PRGM_ID\">10500000</Col><Col id=\"HIPO_MENU_ID\">10500000</Col><Col id=\"MENU_GRP_ID\">10500000</Col></Row><Row><Col id=\"MENU_ID\">10501001</Col><Col id=\"MENU_NM\">업무 공지사항</Col><Col id=\"MENU_LV\">2</Col><Col id=\"HIPO_MENU_ID\">10501000</Col><Col id=\"PRGM_ID\">10501001?0001</Col><Col id=\"USED_YN\">Y</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">biz.board::boardMainFm.xfdl</Col><Col id=\"MENU_GRP_ID\">10500000</Col><Col id=\"cmmnBtnAdd\"/></Row><Row><Col id=\"MENU_ID\">10502000</Col><Col id=\"MENU_NM\">업무게시판</Col><Col id=\"MENU_LV\">1</Col><Col id=\"USED_YN\">Y</Col><Col id=\"HIPO_MENU_ID\">10500000</Col><Col id=\"PRGM_ID\">10500000</Col><Col id=\"MENU_GRP_ID\">10500000</Col></Row><Row><Col id=\"HIPO_MENU_ID\">10502000</Col><Col id=\"MENU_LV\">2</Col><Col id=\"MENU_ID\">10502001</Col><Col id=\"MENU_NM\">사업컨설팅팀 업무게시판</Col><Col id=\"PRGM_ID\">10502001?0002</Col><Col id=\"USED_YN\">Y</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">biz.board::boardMainFm.xfdl</Col><Col id=\"MENU_GRP_ID\">10500000</Col><Col id=\"cmmnBtnAdd\"/></Row><Row><Col id=\"MENU_ID\">10503000</Col><Col id=\"MENU_NM\">자유게시판</Col><Col id=\"MENU_LV\">1</Col><Col id=\"USED_YN\">Y</Col><Col id=\"HIPO_MENU_ID\">10500000</Col><Col id=\"PRGM_ID\">10500000</Col><Col id=\"MENU_GRP_ID\">10500000</Col></Row><Row><Col id=\"MENU_ID\">10503001</Col><Col id=\"HIPO_MENU_ID\">10503000</Col><Col id=\"MENU_NM\">자유게시판 (ALL)</Col><Col id=\"MENU_LV\">2</Col><Col id=\"MENU_GRP_ID\">10500000</Col><Col id=\"PRGM_ID\">10503001?0003</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">biz.board::boardMainFm.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnAdd\"/></Row><Row><Col id=\"MENU_ID\">10503002</Col><Col id=\"HIPO_MENU_ID\">10503000</Col><Col id=\"MENU_NM\">자유게시판 (X)</Col><Col id=\"MENU_LV\">2</Col><Col id=\"MENU_GRP_ID\">10500000</Col><Col id=\"PRGM_ID\">10503002?0004</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">biz.board::boardMainFm.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnAdd\"/></Row><Row><Col id=\"MENU_ID\">10503003</Col><Col id=\"HIPO_MENU_ID\">10503000</Col><Col id=\"MENU_NM\">자유게시판 (파일)</Col><Col id=\"MENU_LV\">2</Col><Col id=\"MENU_GRP_ID\">10500000</Col><Col id=\"PRGM_ID\">10503003?0005</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">biz.board::boardMainFm.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnAdd\"/></Row><Row><Col id=\"MENU_ID\">10503004</Col><Col id=\"HIPO_MENU_ID\">10503000</Col><Col id=\"MENU_NM\">자유게시판 (답글)</Col><Col id=\"MENU_LV\">2</Col><Col id=\"MENU_GRP_ID\">10500000</Col><Col id=\"PRGM_ID\">10503004?0006</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">biz.board::boardMainFm.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnAdd\"/></Row><Row><Col id=\"MENU_ID\">10503005</Col><Col id=\"HIPO_MENU_ID\">10503000</Col><Col id=\"MENU_NM\">자유게시판 (댓글)</Col><Col id=\"MENU_LV\">2</Col><Col id=\"MENU_GRP_ID\">10500000</Col><Col id=\"PRGM_ID\">10503005?0007</Col><Col id=\"LEAF_YN\">Y</Col><Col id=\"MENU_URL\">biz.board::boardMainFm.xfdl</Col><Col id=\"USED_YN\">Y</Col><Col id=\"cmmnBtnAdd\"/></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsGridPopupMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"grp\" type=\"STRING\" size=\"256\"/><Column id=\"id\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"caption\" type=\"STRING\" size=\"256\"/><Column id=\"enable\" type=\"STRING\" size=\"256\"/><Column id=\"userData\" type=\"STRING\" size=\"256\"/><Column id=\"upmenu\" type=\"STRING\" size=\"256\"/><Column id=\"bandtype\" type=\"STRING\" size=\"256\"/><Column id=\"curselect\" type=\"STRING\" size=\"256\"/><Column id=\"enableMenu\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"grp\">sort</Col><Col id=\"id\">sort</Col><Col id=\"level\">0</Col><Col id=\"caption\">헤더정렬사용</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"bandtype\">head</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"grp\">sort</Col><Col id=\"id\">sortfree</Col><Col id=\"level\">0</Col><Col id=\"caption\">헤더정렬사용안함</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"bandtype\">head</Col><Col id=\"enableMenu\">false</Col></Row><Row><Col id=\"grp\">sort</Col><Col id=\"level\">0</Col><Col id=\"caption\">-</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"bandtype\">head</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"id\">colfix</Col><Col id=\"level\">0</Col><Col id=\"caption\">열고정</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"upmenu\"/><Col id=\"bandtype\">head</Col><Col id=\"grp\">colfix</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"id\">colfixfree</Col><Col id=\"level\">0</Col><Col id=\"caption\">열고정 해제</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"upmenu\"/><Col id=\"bandtype\">head</Col><Col id=\"grp\">colfix</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"caption\">-</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"level\">0</Col><Col id=\"grp\">colfix</Col><Col id=\"bandtype\">head</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"id\">rowfix</Col><Col id=\"level\">0</Col><Col id=\"caption\">행고정</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"upmenu\"/><Col id=\"bandtype\">body</Col><Col id=\"grp\">rowfix</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"id\">rowfixfree</Col><Col id=\"level\">0</Col><Col id=\"caption\">행고정 해제</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"upmenu\"/><Col id=\"bandtype\">body</Col><Col id=\"grp\">rowfix</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"caption\">-</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"level\">0</Col><Col id=\"grp\">rowfix</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"grp\">filter</Col><Col id=\"id\">filter</Col><Col id=\"level\">0</Col><Col id=\"caption\">그리드필터 팝업</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"enableMenu\">true</Col><Col id=\"bandtype\">head</Col></Row><Row><Col id=\"grp\">filter</Col><Col id=\"id\">filterfree</Col><Col id=\"level\">0</Col><Col id=\"caption\">그리트필터 팝업 해제</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"enableMenu\">true</Col><Col id=\"bandtype\">head</Col></Row><Row><Col id=\"grp\">filterNew</Col><Col id=\"id\">showcolfilter</Col><Col id=\"level\">0</Col><Col id=\"caption\">그리드필터 보이기</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"enableMenu\">true</Col><Col id=\"bandtype\">head</Col></Row><Row><Col id=\"grp\">filterNew</Col><Col id=\"id\">hidecolfilter</Col><Col id=\"level\">0</Col><Col id=\"caption\">그리드필터 숨기기</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"enableMenu\">false</Col><Col id=\"bandtype\">head</Col></Row><Row><Col id=\"grp\">filterNew</Col><Col id=\"id\">filterfreeNew</Col><Col id=\"level\">0</Col><Col id=\"caption\">그리드필터 해제</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"enableMenu\">true</Col><Col id=\"bandtype\">head</Col></Row><Row><Col id=\"level\">0</Col><Col id=\"caption\">-</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"grp\">filter</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"id\">find</Col><Col id=\"level\">0</Col><Col id=\"caption\">데이터  찾기</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"grp\">find</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"level\">0</Col><Col id=\"caption\">-</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"grp\">find</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"id\">colhide</Col><Col id=\"level\">0</Col><Col id=\"caption\">컬럼 숨기기/보이기</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"bandtype\">head</Col><Col id=\"grp\">colhide</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"grp\">colhideNew</Col><Col id=\"id\">colhideNew</Col><Col id=\"level\">0</Col><Col id=\"caption\">컬럼 숨기기</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"bandtype\">head</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"grp\">colhideNew</Col><Col id=\"id\">colhidefreeNew</Col><Col id=\"level\">0</Col><Col id=\"caption\">컬럼 보이기</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"bandtype\">head</Col><Col id=\"enableMenu\">false</Col></Row><Row><Col id=\"level\">0</Col><Col id=\"caption\">-</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"grp\">colhide</Col><Col id=\"bandtype\">head</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"id\">scroll</Col><Col id=\"level\">0</Col><Col id=\"caption\">스크롤옵션</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"bandtype\">body</Col><Col id=\"grp\">scroll</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"id\">scrolldefault</Col><Col id=\"level\">1</Col><Col id=\"caption\">기본</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"bandtype\">body</Col><Col id=\"grp\">scroll</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"id\">scrollmiddle</Col><Col id=\"level\">1</Col><Col id=\"caption\">중앙표시</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"bandtype\">body</Col><Col id=\"grp\">scroll</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"id\">scrollall</Col><Col id=\"level\">1</Col><Col id=\"caption\">상단,하단,중앙표시</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"bandtype\">body</Col><Col id=\"grp\">scroll</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"id\">scrollpos</Col><Col id=\"level\">1</Col><Col id=\"caption\">스크롤위치표시</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"bandtype\">body</Col><Col id=\"grp\">scroll</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"level\">0</Col><Col id=\"caption\">-</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"grp\">scroll</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"id\">select</Col><Col id=\"level\">0</Col><Col id=\"caption\">셀선택옵션</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"bandtype\">body</Col><Col id=\"grp\">select</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"id\">selectrow</Col><Col id=\"level\">1</Col><Col id=\"caption\">row</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"bandtype\">body</Col><Col id=\"grp\">select</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"id\">selectcell</Col><Col id=\"level\">1</Col><Col id=\"caption\">cell</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"bandtype\">body</Col><Col id=\"grp\">select</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"id\">selectmultirow</Col><Col id=\"level\">1</Col><Col id=\"caption\">다중 row</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"bandtype\">body</Col><Col id=\"grp\">select</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"id\">selectarea</Col><Col id=\"level\">1</Col><Col id=\"caption\">영역</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"bandtype\">body</Col><Col id=\"grp\">select</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"level\">0</Col><Col id=\"caption\">-</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"grp\">select</Col><Col id=\"enableMenu\">true</Col></Row><Row><Col id=\"id\">initial</Col><Col id=\"level\">0</Col><Col id=\"caption\">그리드 설정 초기화</Col><Col id=\"enable\">false</Col><Col id=\"userData\">0</Col><Col id=\"grp\">initial</Col><Col id=\"bandtype\">head</Col><Col id=\"enableMenu\">true</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsCmmnBtn", this);
            obj._setContents("<ColumnInfo><Column id=\"component\" type=\"STRING\" size=\"256\"/><Column id=\"right\" type=\"STRING\" size=\"256\"/><Column id=\"width\" type=\"STRING\" size=\"256\"/><Column id=\"visible\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsCommCode", this);
            obj._setContents("");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsUser", this);
            obj._setContents("");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsLog", this);
            obj._setContents("<ColumnInfo><Column id=\"LOG_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"PRGM_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsMyMenu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_GRP_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRGM_FULL_PATH\" type=\"STRING\" size=\"32\"/><Column id=\"ORDR\" type=\"BIGDECIMAL\" size=\"16\"/><Column id=\"PRGM_FILE_NM\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_NM_EN\" type=\"STRING\" size=\"32\"/><Column id=\"MENU_NM\" type=\"STRING\" size=\"32\"/><Column id=\"PRGM_ID\" type=\"STRING\" size=\"32\"/><Column id=\"PRGM_PATH\" type=\"STRING\" size=\"32\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsLoginLog", this);
            obj._setContents("<ColumnInfo><Column id=\"BROWSER_CD\" type=\"STRING\" size=\"256\"/><Column id=\"BROWSER_VERSION\" type=\"STRING\" size=\"256\"/><Column id=\"OS_CD\" type=\"STRING\" size=\"256\"/><Column id=\"OS_VERSION\" type=\"STRING\" size=\"256\"/><Column id=\"SCREEN_HEIGHT\" type=\"STRING\" size=\"256\"/><Column id=\"SCREEN_WIDTH\" type=\"STRING\" size=\"256\"/><Column id=\"MOB_YN\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsMenuTmp", this);
            obj._setContents("");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsAddBtn", this);
            obj._setContents("<ColumnInfo><Column id=\"SYTM_FLAG_CD\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"BTTN_ID\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"SORT_ORDR\" type=\"STRING\" size=\"256\"/><Column id=\"BTTN_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BTTN_ENGL_NM\" type=\"STRING\" size=\"256\"/><Column id=\"BTTN_STYLE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsKey", this);
            obj._setContents("");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsCode", this);
            obj._setContents("<ColumnInfo><Column id=\"DS_IN\" type=\"STRING\" size=\"256\"/><Column id=\"DS_OUT\" type=\"STRING\" size=\"256\"/><Column id=\"CM_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"ALL\" type=\"STRING\" size=\"256\"/><Column id=\"CHECK\" type=\"STRING\" size=\"256\"/><Column id=\"ACE\" type=\"STRING\" size=\"256\"/><Column id=\"LANGUAGE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsParameter", this);
            obj._setContents("");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsCompany", this);
            obj._setContents("<ColumnInfo><Column id=\"GRP_CD_4\" type=\"undefined\" size=\"0\"/><Column id=\"GRP_CD_5\" type=\"undefined\" size=\"0\"/><Column id=\"SSC_NUMB\" type=\"string\" size=\"32\"/><Column id=\"GRP_CD_6\" type=\"undefined\" size=\"0\"/><Column id=\"GRP_CD_7\" type=\"undefined\" size=\"0\"/><Column id=\"SSC_CD_ENGL_NM\" type=\"string\" size=\"32\"/><Column id=\"GRP_CD_8\" type=\"undefined\" size=\"0\"/><Column id=\"GRP_CD_9\" type=\"undefined\" size=\"0\"/><Column id=\"ABBR_ENGL_NM\" type=\"undefined\" size=\"0\"/><Column id=\"SSC_CD\" type=\"string\" size=\"32\"/><Column id=\"SORT_ORDR\" type=\"int\" size=\"4\"/><Column id=\"ABBR_KORN_NM\" type=\"undefined\" size=\"0\"/><Column id=\"USED_YN\" type=\"string\" size=\"32\"/><Column id=\"REMK\" type=\"undefined\" size=\"0\"/><Column id=\"SSC_CD_KORN_NM\" type=\"string\" size=\"32\"/><Column id=\"GRP_CD_1\" type=\"undefined\" size=\"0\"/><Column id=\"HCL_CD\" type=\"string\" size=\"32\"/><Column id=\"GRP_CD_2\" type=\"undefined\" size=\"0\"/><Column id=\"GRP_CD_3\" type=\"undefined\" size=\"0\"/></ColumnInfo><Rows><Row><Col id=\"SSC_NUMB\">00000640</Col><Col id=\"SSC_CD_ENGL_NM\">UNIDIA</Col><Col id=\"SSC_CD\">UNIDIA</Col><Col id=\"SORT_ORDR\">1</Col><Col id=\"USED_YN\">1</Col><Col id=\"SSC_CD_KORN_NM\">UNIDIA</Col><Col id=\"HCL_CD\">COMP</Col></Row><Row><Col id=\"SSC_NUMB\">00000642</Col><Col id=\"SSC_CD_ENGL_NM\">부뜰정보통신</Col><Col id=\"SSC_CD\">BUTTLE</Col><Col id=\"SORT_ORDR\">2</Col><Col id=\"USED_YN\">1</Col><Col id=\"SSC_CD_KORN_NM\">부뜰정보통신</Col><Col id=\"HCL_CD\">COMP</Col></Row><Row><Col id=\"SSC_NUMB\">00000641</Col><Col id=\"SSC_CD_ENGL_NM\">SUMMIT-TECH</Col><Col id=\"SSC_CD\">SUMMIT-TECH</Col><Col id=\"SORT_ORDR\">3</Col><Col id=\"USED_YN\">1</Col><Col id=\"SSC_CD_KORN_NM\">SUMMIT-TECH</Col><Col id=\"HCL_CD\">COMP</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gdsGlobal", this);
            obj._setContents("<ColumnInfo><Column id=\"LANGUAGE\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LANGUAGE\">KOR</Col></Row></Rows>");
            this._addDataset(obj.name, obj);
            
            // global variable
            this._addVariable("gvSytmFlagCd","PC");
            this._addVariable("gvIsDebug","Y");
            this._addVariable("gvSytmLogFlag","N");
            this._addVariable("gvCompany","UNIDIA");
            
            obj = null;
        };
        
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("application");
            this.set_screenid("desktop");
            this.set_licenseurl("./license/NexacroN_client_license.xml");

            if (this._is_attach_childframe)
            	return;
            
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1280","900",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("false");
            mainframe.set_titletext("SALESDOT");
            mainframe.set_showcascadetitletext("false");
            mainframe.set_openalign("center middle");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;
            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var obj = new ChildFrame("QuickViewFrame", null, null, null, null, null, null, "", this);
            
            obj.set_showtitlebar("false");
            obj.set_showstatusbar("false");
            obj.set_border("0px none");
			
            this.addChild(obj.name, obj);
            obj.set_formurl(nexacro._quickview_formurl);
            this.frame = obj;
            
            obj = null;
        };
        
        this.on_initEvent = function()
        {
        };
		// script Compiler
        this.registerScript("unisales.xadl", function() {
        /**
        *  devPack Library
        *  @FileName 	application
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2020.11.24
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        *  date          		Modifier                Description
        *******************************************************************************
        * 2020.11.24			TOBESOFT				application
        *******************************************************************************
        */

        /************************************************************************************************
         * application 변수 선언 영역
        ************************************************************************************************/
        this.gvRunMode  = "";					// 실행환경 S : Studio, L : local, D : 개발, R : 운영

        /* 각 프레임에 해당되는 객체 참조 변수 */
        this.gvVfrs;
        this.gvFrmLogin;
        this.gvFrmTop ;
        this.gvHfrs;
        this.gvFrmLeft;
        this.gvVfrsWork;
        this.gvFrmMdi;
        this.gvFrmMain;
        this.gvFrsWork;

        /* 프레임 관련 변수*/
        this.LOGIN_FORM_PATH = "frame::frmLogin.xfdl";
        this.TOP_FORM_PATH   = "frame::frmTop.xfdl";
        this.LEFT_FORM_PATH  = "frame::frmLeft.xfdl";
        this.WORK_FORM_PATH  = "frame::frmWork.xfdl";
        this.MDI_FORM_PATH   = "frame::frmMdi.xfdl";
        this.MAIN_FORM_PATH  = "frame::frmMain.xfdl";

        this.gvOpenMaxFrame = 10; 				// 열리는 프레임 최대 갯수
        this.gvMdiFramePos = "top"; 			// MDI Frame 위치 설정(top || bottom)
        this.gvFrameStat = "login";				// 프레임상태(login,main,sub)
        this.gvCloseCheck;						// 화면 닫을때 체크할지 여부
        this.gvIsComBtnUse = true;				// 공통 버튼 사용유무
        this.gvTitlebarHeight = 0;				// 차일드프레임 타이틀바 높이

        /* grid 관련 */
        this.gvUseGridContextMenu = true;		// 그리드 Context Menu 사용 여부

        /***********************************************************************************************
        * Application EVENT 영역(onload, onbeforeclose)
        /***********************************************************************************************/
        this.application_onload = function(obj,e)
        {
        	// QuikView 여부 설정
        	nexacro.setEnvironmentVariable("evQuikView", "N");

        	//trace ("======================== DevPack(PC) Start ==============================");

        	// 각 프레임에 해당되는 객체 참조 변수 설정
        	this.gvVfrs = this.mainframe.vfrs;
        	this.gvFrmLogin = this.mainframe.vfrs.frmLogin;
        	this.gvFrmTop = this.mainframe.vfrs.frmTop;
        	this.gvHfrs = this.mainframe.vfrs.hfrs;
        	this.gvFrmLeft 	= this.mainframe.vfrs.hfrs.frmLeft;
        	this.gvVfrsWork = this.mainframe.vfrs.hfrs.vfrsWork;
        	this.gvFrmMain = this.mainframe.vfrs.hfrs.vfrsWork.frmMain;
        	this.gvFrsWork = this.mainframe.vfrs.hfrs.vfrsWork.frsWork;

        	// Mdi Frame 위치 설정(top || bottom)
        	if (this.gvMdiFramePos == "top")
        	{
        		this.gvFrmMdi	= this.mainframe.vfrs.hfrs.vfrsWork.frmMdi;
        	} else if (this.gvMdiFramePos == "bottom")
        	{
        		this.gvFrmMdi = this.mainframe.vfrs.hfrs.vfrsWork.frmMdiBottom;
        	}

        	var sRunMode = "S";  // S : Studio, L : local, D : 개발, R : 운영
        	var objEnv	 = nexacro.getEnvironment();
        	var objSrv   = objEnv.services["svcUrl"];

        	// 런타임 접속
        	if (system.navigatorname == "nexacro") {
        		var sXadl = nexacro.getProjectPath();

        		// 로컬(Studio)
        		if (sXadl.indexOf("file://") != -1) {
        			sRunMode = "S";
        			this.mainframe.set_titletext("로컬(Studio) - " + this.mainframe.titletext);
        			objSrv.set_url("http://localhost:9093/");
        		} else if (sXadl.indexOf("tobesoft.com")>-1) {
        			sRunMode = "R";
        			objSrv.set_url("http://mobiletong.tobesoft.com:83/");
        		}

        		// Runtime 실행할때 TitleBar 크기(30px) 만큼 높이를 조정
        		this.mainframe.set_height(932);

        		// Runtime 실행할때 border 보이도록 설정
        		this.mainframe.set_border("1px solid #111111");
        	}
        	//WEB 접속
        	else {
        		var urlPath = window.location.protocol + "//" + window.location.host;

        		//서비스  URL 세팅
         		objSrv.set_url(urlPath+"/");

        		// 로컬(웹)
        	    if (objSrv.url.indexOf("localhost") > -1 || objSrv.url.indexOf("127.0.0.1") > -1 ) {
        			sRunMode = "L";
        			this.mainframe.set_titletext("로컬(웹)  - " + this.mainframe.titletext);
        		}
        		// 운영
        		else if (objSrv.url.indexOf("dxtobe.com")>-1) {
        			sRunMode = "R";
        		}
        		// 개발(웹)
        		else {
        			sRunMode = "D";
        			this.mainframe.set_titletext("개발(웹)  - " + this.mainframe.titletext);
        		}
        	}
        	this.gvRunMode = sRunMode;
        	trace("========== 접속경로 : " + nexacro.getProjectPath() + " / 실행환경(nRunMode) : " + this.gvRunMode + " / 서비스URL : " + objSrv.url + " ================");

        	// 로그인 화면 보여주기
        	this.gvFrmLogin.set_formurl(this.LOGIN_FORM_PATH);

        	// 런타임 아닐때만 EChart 엔진 로드
        	if(system.navigatorname != "nexacro")
        	{
        		//loading jquery libarary
        		nexacro.loadJSLibraries(["../thirdParty/js/jquery-3.2.1.min.js"]);
        	}
        };

        this.mainframe_onsize = function(obj,e)
        {
        	var objFrame = nexacro.getPopupFrames();
        	var nLeft = 0;
        	var nTop = 0;
        	for (var i = objFrame.length-1; i >= 0; i--)
        	{
        		if (objFrame[i]._modaltype == "center")
        		{
        			nLeft = (nexacro.getApplication().mainframe.width - objFrame[i].width)/2;
        			nTop = (nexacro.getApplication().mainframe.height - objFrame[i].height)/2;
        			objFrame[i].move(nLeft, nTop);
        		}
        	}
        };

        });
		this.checkLicense("./license/NexacroN_client_license.xml");
        
        this.loadPreloadList();
        this.loadCss("xcssrc::devPackModule.xcss");
        this.loadCss("xcssrc::lightMode.xcss");
        this.loadCss("xcssrc::mes.xcss");
        this.loadCss("xcssrc::UbiDocuMaker.xcss");
        this.loadIncludeScript("unisales.xadl");
    };
}
)();
