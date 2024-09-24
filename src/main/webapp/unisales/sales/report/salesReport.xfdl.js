(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("testSalesReport");
            this.set_titletext("영업매출분석리포트");
            if (Form == this.constructor)
            {
                this._setFormPosition(1920,1380);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsSalesTargetStacked", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"string\" size=\"100\"/><Column id=\"EMP_NAME\" type=\"string\" size=\"255\"/><Column id=\"DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"DEPT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CONTRACT_TYPE\" type=\"string\" size=\"20\"/><Column id=\"CONTRACT_TYPE_NAME\" type=\"string\" size=\"100\"/><Column id=\"CL_01\" type=\"bigdecimal\" size=\"13\"/><Column id=\"CL_02\" type=\"bigdecimal\" size=\"13\"/><Column id=\"CL_03\" type=\"bigdecimal\" size=\"13\"/><Column id=\"CL_04\" type=\"bigdecimal\" size=\"13\"/><Column id=\"CL_05\" type=\"bigdecimal\" size=\"13\"/><Column id=\"CL_06\" type=\"bigdecimal\" size=\"13\"/><Column id=\"CL_07\" type=\"bigdecimal\" size=\"13\"/><Column id=\"CL_08\" type=\"bigdecimal\" size=\"13\"/><Column id=\"CL_09\" type=\"bigdecimal\" size=\"13\"/><Column id=\"CL_10\" type=\"bigdecimal\" size=\"13\"/><Column id=\"CL_11\" type=\"bigdecimal\" size=\"13\"/><Column id=\"CL_12\" type=\"bigdecimal\" size=\"13\"/><Column id=\"CL_Q01\" type=\"bigdecimal\" size=\"13\"/><Column id=\"CL_Q02\" type=\"bigdecimal\" size=\"13\"/><Column id=\"CL_Q03\" type=\"bigdecimal\" size=\"13\"/><Column id=\"CL_Q04\" type=\"bigdecimal\" size=\"13\"/><Column id=\"CL_H01\" type=\"bigdecimal\" size=\"13\"/><Column id=\"CL_H02\" type=\"bigdecimal\" size=\"13\"/><Column id=\"CL_Y\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_01\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_02\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_03\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_04\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_05\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_06\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_07\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_08\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_09\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_10\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_11\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_12\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_Q01\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_Q02\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_Q03\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_Q04\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_H01\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_H02\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_Y\" type=\"bigdecimal\" size=\"13\"/><Column id=\"ORD\" type=\"string\" size=\"10\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYearAll", this);
            obj._setContents("<ColumnInfo><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"total\" type=\"BIGDECIMAL\" size=\"256\"/><Column id=\"percent\" type=\"BIGDECIMAL\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"title\">년간목표</Col><Col id=\"total\">9102000000</Col><Col id=\"percent\">17.34</Col></Row><Row><Col id=\"title\">월간누적목표</Col><Col id=\"total\">3484000000</Col><Col id=\"percent\">45.31</Col></Row><Row><Col id=\"title\">월간누적실적</Col><Col id=\"total\">1578574595</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSalesTarget", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"string\" size=\"100\"/><Column id=\"EMP_NAME\" type=\"string\" size=\"255\"/><Column id=\"DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"DEPT_NAME\" type=\"string\" size=\"100\"/><Column id=\"CONTRACT_TYPE\" type=\"string\" size=\"20\"/><Column id=\"CONTRACT_TYPE_NAME\" type=\"string\" size=\"100\"/><Column id=\"CL_01\" type=\"bigdecimal\" size=\"13\"/><Column id=\"CL_02\" type=\"bigdecimal\" size=\"13\"/><Column id=\"CL_03\" type=\"bigdecimal\" size=\"13\"/><Column id=\"CL_04\" type=\"bigdecimal\" size=\"13\"/><Column id=\"CL_05\" type=\"bigdecimal\" size=\"13\"/><Column id=\"CL_06\" type=\"bigdecimal\" size=\"13\"/><Column id=\"CL_07\" type=\"bigdecimal\" size=\"13\"/><Column id=\"CL_08\" type=\"bigdecimal\" size=\"13\"/><Column id=\"CL_09\" type=\"bigdecimal\" size=\"13\"/><Column id=\"CL_10\" type=\"bigdecimal\" size=\"13\"/><Column id=\"CL_11\" type=\"bigdecimal\" size=\"13\"/><Column id=\"CL_12\" type=\"bigdecimal\" size=\"13\"/><Column id=\"CL_Q01\" type=\"bigdecimal\" size=\"13\"/><Column id=\"CL_Q02\" type=\"bigdecimal\" size=\"13\"/><Column id=\"CL_Q03\" type=\"bigdecimal\" size=\"13\"/><Column id=\"CL_Q04\" type=\"bigdecimal\" size=\"13\"/><Column id=\"CL_H01\" type=\"bigdecimal\" size=\"13\"/><Column id=\"CL_H02\" type=\"bigdecimal\" size=\"13\"/><Column id=\"CL_Y\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_01\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_02\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_03\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_04\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_05\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_06\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_07\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_08\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_09\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_10\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_11\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_12\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_Q01\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_Q02\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_Q03\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_Q04\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_H01\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_H02\" type=\"bigdecimal\" size=\"13\"/><Column id=\"SG_Y\" type=\"bigdecimal\" size=\"13\"/><Column id=\"ORD\" type=\"string\" size=\"10\"/></ColumnInfo><Rows><Row><Col id=\"EMP_NO\">W0609250</Col><Col id=\"EMP_NAME\">최영식</Col><Col id=\"DEPT_CD\">W21</Col><Col id=\"DEPT_NAME\">투비소프트씨엔에스</Col><Col id=\"CONTRACT_TYPE\">P</Col><Col id=\"CONTRACT_TYPE_NAME\">제품</Col><Col id=\"CL_01\">0.0</Col><Col id=\"CL_02\">0.0</Col><Col id=\"CL_03\">0.0</Col><Col id=\"CL_04\">0.0</Col><Col id=\"CL_05\">0.0</Col><Col id=\"CL_06\">0.0</Col><Col id=\"CL_07\">0.0</Col><Col id=\"CL_08\">0.0</Col><Col id=\"CL_09\">0.0</Col><Col id=\"CL_10\">0.0</Col><Col id=\"CL_11\">0.0</Col><Col id=\"CL_12\">0.0</Col><Col id=\"CL_Q01\">0.0</Col><Col id=\"CL_Q02\">0.0</Col><Col id=\"CL_Q03\">0.0</Col><Col id=\"CL_Q04\">0.0</Col><Col id=\"CL_H01\">0.0</Col><Col id=\"CL_H02\">0.0</Col><Col id=\"CL_Y\">0.0</Col><Col id=\"SG_01\">0.0</Col><Col id=\"SG_02\">0.0</Col><Col id=\"SG_03\">0.0</Col><Col id=\"SG_04\">0.0</Col><Col id=\"SG_05\">0.0</Col><Col id=\"SG_06\">0.0</Col><Col id=\"SG_07\">0.0</Col><Col id=\"SG_08\">0.0</Col><Col id=\"SG_09\">0.0</Col><Col id=\"SG_10\">0.0</Col><Col id=\"SG_11\">0.0</Col><Col id=\"SG_12\">0.0</Col><Col id=\"SG_Q01\">0.0</Col><Col id=\"SG_Q02\">0.0</Col><Col id=\"SG_Q03\">0.0</Col><Col id=\"SG_Q04\">0.0</Col><Col id=\"SG_H01\">0.0</Col><Col id=\"SG_H02\">0.0</Col><Col id=\"SG_Y\">0.0</Col><Col id=\"ORD\">1</Col></Row><Row><Col id=\"EMP_NO\">W0609250</Col><Col id=\"EMP_NAME\">최영식</Col><Col id=\"DEPT_CD\">W21</Col><Col id=\"DEPT_NAME\">투비소프트씨엔에스</Col><Col id=\"CONTRACT_TYPE\">S</Col><Col id=\"CONTRACT_TYPE_NAME\">용역</Col><Col id=\"CL_01\">401504.25</Col><Col id=\"CL_02\">395568.6</Col><Col id=\"CL_03\">266022.16</Col><Col id=\"CL_04\">246286.67</Col><Col id=\"CL_05\">195064.88</Col><Col id=\"CL_06\">157933.25</Col><Col id=\"CL_07\">144749.3</Col><Col id=\"CL_08\">134299.3</Col><Col id=\"CL_09\">134299.3</Col><Col id=\"CL_10\">134299.3</Col><Col id=\"CL_11\">134299.3</Col><Col id=\"CL_12\">134299.3</Col><Col id=\"CL_Q01\">1063095.0</Col><Col id=\"CL_Q02\">599284.8</Col><Col id=\"CL_Q03\">413347.9</Col><Col id=\"CL_Q04\">402897.9</Col><Col id=\"CL_H01\">1662379.8</Col><Col id=\"CL_H02\">816245.8</Col><Col id=\"CL_Y\">2478625.5</Col><Col id=\"SG_01\">650000.0</Col><Col id=\"SG_02\">650000.0</Col><Col id=\"SG_03\">650000.0</Col><Col id=\"SG_04\">650000.0</Col><Col id=\"SG_05\">650000.0</Col><Col id=\"SG_06\">650000.0</Col><Col id=\"SG_07\">650000.0</Col><Col id=\"SG_08\">650000.0</Col><Col id=\"SG_09\">650000.0</Col><Col id=\"SG_10\">650000.0</Col><Col id=\"SG_11\">650000.0</Col><Col id=\"SG_12\">650000.0</Col><Col id=\"SG_Q01\">1950000.0</Col><Col id=\"SG_Q02\">1950000.0</Col><Col id=\"SG_Q03\">1950000.0</Col><Col id=\"SG_Q04\">1950000.0</Col><Col id=\"SG_H01\">3900000.0</Col><Col id=\"SG_H02\">3900000.0</Col><Col id=\"SG_Y\">7800000.0</Col><Col id=\"ORD\">1</Col></Row><Row><Col id=\"EMP_NO\">W0609250</Col><Col id=\"EMP_NAME\">최영식</Col><Col id=\"DEPT_CD\">W21</Col><Col id=\"DEPT_NAME\">투비소프트씨엔에스</Col><Col id=\"CONTRACT_TYPE\">T</Col><Col id=\"CONTRACT_TYPE_NAME\">기술서비스</Col><Col id=\"CL_01\">0.0</Col><Col id=\"CL_02\">0.0</Col><Col id=\"CL_03\">0.0</Col><Col id=\"CL_04\">0.0</Col><Col id=\"CL_05\">0.0</Col><Col id=\"CL_06\">0.0</Col><Col id=\"CL_07\">0.0</Col><Col id=\"CL_08\">0.0</Col><Col id=\"CL_09\">0.0</Col><Col id=\"CL_10\">0.0</Col><Col id=\"CL_11\">0.0</Col><Col id=\"CL_12\">0.0</Col><Col id=\"CL_Q01\">0.0</Col><Col id=\"CL_Q02\">0.0</Col><Col id=\"CL_Q03\">0.0</Col><Col id=\"CL_Q04\">0.0</Col><Col id=\"CL_H01\">0.0</Col><Col id=\"CL_H02\">0.0</Col><Col id=\"CL_Y\">0.0</Col><Col id=\"SG_01\">0.0</Col><Col id=\"SG_02\">0.0</Col><Col id=\"SG_03\">0.0</Col><Col id=\"SG_04\">0.0</Col><Col id=\"SG_05\">0.0</Col><Col id=\"SG_06\">0.0</Col><Col id=\"SG_07\">0.0</Col><Col id=\"SG_08\">0.0</Col><Col id=\"SG_09\">0.0</Col><Col id=\"SG_10\">0.0</Col><Col id=\"SG_11\">0.0</Col><Col id=\"SG_12\">0.0</Col><Col id=\"SG_Q01\">0.0</Col><Col id=\"SG_Q02\">0.0</Col><Col id=\"SG_Q03\">0.0</Col><Col id=\"SG_Q04\">0.0</Col><Col id=\"SG_H01\">0.0</Col><Col id=\"SG_H02\">0.0</Col><Col id=\"SG_Y\">0.0</Col><Col id=\"ORD\">1</Col></Row><Row><Col id=\"EMP_NO\">W0609250</Col><Col id=\"EMP_NAME\">최영식</Col><Col id=\"DEPT_CD\">W21</Col><Col id=\"DEPT_NAME\">투비소프트씨엔에스</Col><Col id=\"CONTRACT_TYPE\">M</Col><Col id=\"CONTRACT_TYPE_NAME\">유지보수</Col><Col id=\"CL_01\">16796.35</Col><Col id=\"CL_02\">18963.018</Col><Col id=\"CL_03\">21314.684</Col><Col id=\"CL_04\">22076.816</Col><Col id=\"CL_05\">22076.816</Col><Col id=\"CL_06\">22076.816</Col><Col id=\"CL_07\">22076.816</Col><Col id=\"CL_08\">22076.816</Col><Col id=\"CL_09\">22076.816</Col><Col id=\"CL_10\">22076.816</Col><Col id=\"CL_11\">22076.816</Col><Col id=\"CL_12\">22076.816</Col><Col id=\"CL_Q01\">57074.05</Col><Col id=\"CL_Q02\">66230.445</Col><Col id=\"CL_Q03\">66230.445</Col><Col id=\"CL_Q04\">66230.445</Col><Col id=\"CL_H01\">123304.5</Col><Col id=\"CL_H02\">132460.89</Col><Col id=\"CL_Y\">255765.39</Col><Col id=\"SG_01\">21000.0</Col><Col id=\"SG_02\">21000.0</Col><Col id=\"SG_03\">21000.0</Col><Col id=\"SG_04\">21000.0</Col><Col id=\"SG_05\">21000.0</Col><Col id=\"SG_06\">21000.0</Col><Col id=\"SG_07\">21000.0</Col><Col id=\"SG_08\">21000.0</Col><Col id=\"SG_09\">21000.0</Col><Col id=\"SG_10\">21000.0</Col><Col id=\"SG_11\">21000.0</Col><Col id=\"SG_12\">21000.0</Col><Col id=\"SG_Q01\">63000.0</Col><Col id=\"SG_Q02\">63000.0</Col><Col id=\"SG_Q03\">63000.0</Col><Col id=\"SG_Q04\">63000.0</Col><Col id=\"SG_H01\">126000.0</Col><Col id=\"SG_H02\">126000.0</Col><Col id=\"SG_Y\">252000.0</Col><Col id=\"ORD\">1</Col></Row><Row><Col id=\"EMP_NO\">W0609250</Col><Col id=\"EMP_NAME\">최영식</Col><Col id=\"DEPT_CD\">W21</Col><Col id=\"DEPT_NAME\">투비소프트씨엔에스</Col><Col id=\"CONTRACT_TYPE\">G</Col><Col id=\"CONTRACT_TYPE_NAME\">상품</Col><Col id=\"CL_01\">0.0</Col><Col id=\"CL_02\">0.0</Col><Col id=\"CL_03\">0.0</Col><Col id=\"CL_04\">0.0</Col><Col id=\"CL_05\">0.0</Col><Col id=\"CL_06\">0.0</Col><Col id=\"CL_07\">0.0</Col><Col id=\"CL_08\">0.0</Col><Col id=\"CL_09\">0.0</Col><Col id=\"CL_10\">0.0</Col><Col id=\"CL_11\">0.0</Col><Col id=\"CL_12\">0.0</Col><Col id=\"CL_Q01\">0.0</Col><Col id=\"CL_Q02\">0.0</Col><Col id=\"CL_Q03\">0.0</Col><Col id=\"CL_Q04\">0.0</Col><Col id=\"CL_H01\">0.0</Col><Col id=\"CL_H02\">0.0</Col><Col id=\"CL_Y\">0.0</Col><Col id=\"SG_01\">0.0</Col><Col id=\"SG_02\">0.0</Col><Col id=\"SG_03\">0.0</Col><Col id=\"SG_04\">0.0</Col><Col id=\"SG_05\">0.0</Col><Col id=\"SG_06\">0.0</Col><Col id=\"SG_07\">0.0</Col><Col id=\"SG_08\">0.0</Col><Col id=\"SG_09\">0.0</Col><Col id=\"SG_10\">0.0</Col><Col id=\"SG_11\">0.0</Col><Col id=\"SG_12\">0.0</Col><Col id=\"SG_Q01\">0.0</Col><Col id=\"SG_Q02\">0.0</Col><Col id=\"SG_Q03\">0.0</Col><Col id=\"SG_Q04\">0.0</Col><Col id=\"SG_H01\">0.0</Col><Col id=\"SG_H02\">0.0</Col><Col id=\"SG_Y\">0.0</Col><Col id=\"ORD\">1</Col></Row><Row><Col id=\"EMP_NO\">W0609250</Col><Col id=\"EMP_NAME\">최영식</Col><Col id=\"DEPT_CD\">W21</Col><Col id=\"DEPT_NAME\">투비소프트씨엔에스</Col><Col id=\"CONTRACT_TYPE\">E</Col><Col id=\"CONTRACT_TYPE_NAME\">기타</Col><Col id=\"CL_01\">0.0</Col><Col id=\"CL_02\">0.0</Col><Col id=\"CL_03\">0.0</Col><Col id=\"CL_04\">0.0</Col><Col id=\"CL_05\">0.0</Col><Col id=\"CL_06\">0.0</Col><Col id=\"CL_07\">0.0</Col><Col id=\"CL_08\">0.0</Col><Col id=\"CL_09\">0.0</Col><Col id=\"CL_10\">0.0</Col><Col id=\"CL_11\">0.0</Col><Col id=\"CL_12\">0.0</Col><Col id=\"CL_Q01\">0.0</Col><Col id=\"CL_Q02\">0.0</Col><Col id=\"CL_Q03\">0.0</Col><Col id=\"CL_Q04\">0.0</Col><Col id=\"CL_H01\">0.0</Col><Col id=\"CL_H02\">0.0</Col><Col id=\"CL_Y\">0.0</Col><Col id=\"SG_01\">0.0</Col><Col id=\"SG_02\">0.0</Col><Col id=\"SG_03\">0.0</Col><Col id=\"SG_04\">0.0</Col><Col id=\"SG_05\">0.0</Col><Col id=\"SG_06\">0.0</Col><Col id=\"SG_07\">0.0</Col><Col id=\"SG_08\">0.0</Col><Col id=\"SG_09\">0.0</Col><Col id=\"SG_10\">0.0</Col><Col id=\"SG_11\">0.0</Col><Col id=\"SG_12\">0.0</Col><Col id=\"SG_Q01\">0.0</Col><Col id=\"SG_Q02\">0.0</Col><Col id=\"SG_Q03\">0.0</Col><Col id=\"SG_Q04\">0.0</Col><Col id=\"SG_H01\">0.0</Col><Col id=\"SG_H02\">0.0</Col><Col id=\"SG_Y\">0.0</Col><Col id=\"ORD\">1</Col></Row><Row><Col id=\"EMP_NO\">W12041801</Col><Col id=\"EMP_NAME\">홍형표</Col><Col id=\"DEPT_CD\">W210404</Col><Col id=\"DEPT_NAME\">사업기획팀</Col><Col id=\"CONTRACT_TYPE\">P</Col><Col id=\"CONTRACT_TYPE_NAME\">제품</Col><Col id=\"CL_01\">0.0</Col><Col id=\"CL_02\">0.0</Col><Col id=\"CL_03\">0.0</Col><Col id=\"CL_04\">0.0</Col><Col id=\"CL_05\">1400.0</Col><Col id=\"CL_06\">0.0</Col><Col id=\"CL_07\">0.0</Col><Col id=\"CL_08\">0.0</Col><Col id=\"CL_09\">0.0</Col><Col id=\"CL_10\">0.0</Col><Col id=\"CL_11\">0.0</Col><Col id=\"CL_12\">0.0</Col><Col id=\"CL_Q01\">0.0</Col><Col id=\"CL_Q02\">1400.0</Col><Col id=\"CL_Q03\">0.0</Col><Col id=\"CL_Q04\">0.0</Col><Col id=\"CL_H01\">1400.0</Col><Col id=\"CL_H02\">0.0</Col><Col id=\"CL_Y\">1400.0</Col><Col id=\"SG_01\">0.0</Col><Col id=\"SG_02\">0.0</Col><Col id=\"SG_03\">4000.0</Col><Col id=\"SG_04\">4000.0</Col><Col id=\"SG_05\">4000.0</Col><Col id=\"SG_06\">4000.0</Col><Col id=\"SG_07\">6000.0</Col><Col id=\"SG_08\">6000.0</Col><Col id=\"SG_09\">6000.0</Col><Col id=\"SG_10\">6000.0</Col><Col id=\"SG_11\">6000.0</Col><Col id=\"SG_12\">6000.0</Col><Col id=\"SG_Q01\">4000.0</Col><Col id=\"SG_Q02\">12000.0</Col><Col id=\"SG_Q03\">18000.0</Col><Col id=\"SG_Q04\">18000.0</Col><Col id=\"SG_H01\">16000.0</Col><Col id=\"SG_H02\">36000.0</Col><Col id=\"SG_Y\">52000.0</Col><Col id=\"ORD\">1</Col></Row><Row><Col id=\"EMP_NO\">W12041801</Col><Col id=\"EMP_NAME\">홍형표</Col><Col id=\"DEPT_CD\">W210404</Col><Col id=\"DEPT_NAME\">사업기획팀</Col><Col id=\"CONTRACT_TYPE\">S</Col><Col id=\"CONTRACT_TYPE_NAME\">용역</Col><Col id=\"CL_01\">9023.046</Col><Col id=\"CL_02\">7947.02</Col><Col id=\"CL_03\">1509.934</Col><Col id=\"CL_04\">0.0</Col><Col id=\"CL_05\">0.0</Col><Col id=\"CL_06\">0.0</Col><Col id=\"CL_07\">0.0</Col><Col id=\"CL_08\">0.0</Col><Col id=\"CL_09\">0.0</Col><Col id=\"CL_10\">0.0</Col><Col id=\"CL_11\">0.0</Col><Col id=\"CL_12\">0.0</Col><Col id=\"CL_Q01\">18480.0</Col><Col id=\"CL_Q02\">0.0</Col><Col id=\"CL_Q03\">0.0</Col><Col id=\"CL_Q04\">0.0</Col><Col id=\"CL_H01\">18480.0</Col><Col id=\"CL_H02\">0.0</Col><Col id=\"CL_Y\">18480.0</Col><Col id=\"SG_01\">0.0</Col><Col id=\"SG_02\">0.0</Col><Col id=\"SG_03\">20000.0</Col><Col id=\"SG_04\">20000.0</Col><Col id=\"SG_05\">20000.0</Col><Col id=\"SG_06\">30000.0</Col><Col id=\"SG_07\">40000.0</Col><Col id=\"SG_08\">50000.0</Col><Col id=\"SG_09\">60000.0</Col><Col id=\"SG_10\">70000.0</Col><Col id=\"SG_11\">80000.0</Col><Col id=\"SG_12\">90000.0</Col><Col id=\"SG_Q01\">20000.0</Col><Col id=\"SG_Q02\">70000.0</Col><Col id=\"SG_Q03\">150000.0</Col><Col id=\"SG_Q04\">240000.0</Col><Col id=\"SG_H01\">90000.0</Col><Col id=\"SG_H02\">390000.0</Col><Col id=\"SG_Y\">480000.0</Col><Col id=\"ORD\">1</Col></Row><Row><Col id=\"EMP_NO\">W12041801</Col><Col id=\"EMP_NAME\">홍형표</Col><Col id=\"DEPT_CD\">W210404</Col><Col id=\"DEPT_NAME\">사업기획팀</Col><Col id=\"CONTRACT_TYPE\">T</Col><Col id=\"CONTRACT_TYPE_NAME\">기술서비스</Col><Col id=\"CL_01\">0.0</Col><Col id=\"CL_02\">0.0</Col><Col id=\"CL_03\">0.0</Col><Col id=\"CL_04\">0.0</Col><Col id=\"CL_05\">0.0</Col><Col id=\"CL_06\">0.0</Col><Col id=\"CL_07\">0.0</Col><Col id=\"CL_08\">0.0</Col><Col id=\"CL_09\">0.0</Col><Col id=\"CL_10\">0.0</Col><Col id=\"CL_11\">0.0</Col><Col id=\"CL_12\">0.0</Col><Col id=\"CL_Q01\">0.0</Col><Col id=\"CL_Q02\">0.0</Col><Col id=\"CL_Q03\">0.0</Col><Col id=\"CL_Q04\">0.0</Col><Col id=\"CL_H01\">0.0</Col><Col id=\"CL_H02\">0.0</Col><Col id=\"CL_Y\">0.0</Col><Col id=\"SG_01\">0.0</Col><Col id=\"SG_02\">0.0</Col><Col id=\"SG_03\">0.0</Col><Col id=\"SG_04\">0.0</Col><Col id=\"SG_05\">0.0</Col><Col id=\"SG_06\">0.0</Col><Col id=\"SG_07\">0.0</Col><Col id=\"SG_08\">0.0</Col><Col id=\"SG_09\">0.0</Col><Col id=\"SG_10\">0.0</Col><Col id=\"SG_11\">0.0</Col><Col id=\"SG_12\">0.0</Col><Col id=\"SG_Q01\">0.0</Col><Col id=\"SG_Q02\">0.0</Col><Col id=\"SG_Q03\">0.0</Col><Col id=\"SG_Q04\">0.0</Col><Col id=\"SG_H01\">0.0</Col><Col id=\"SG_H02\">0.0</Col><Col id=\"SG_Y\">0.0</Col><Col id=\"ORD\">1</Col></Row><Row><Col id=\"EMP_NO\">W12041801</Col><Col id=\"EMP_NAME\">홍형표</Col><Col id=\"DEPT_CD\">W210404</Col><Col id=\"DEPT_NAME\">사업기획팀</Col><Col id=\"CONTRACT_TYPE\">M</Col><Col id=\"CONTRACT_TYPE_NAME\">유지보수</Col><Col id=\"CL_01\">0.0</Col><Col id=\"CL_02\">0.0</Col><Col id=\"CL_03\">0.0</Col><Col id=\"CL_04\">0.0</Col><Col id=\"CL_05\">0.0</Col><Col id=\"CL_06\">0.0</Col><Col id=\"CL_07\">0.0</Col><Col id=\"CL_08\">0.0</Col><Col id=\"CL_09\">0.0</Col><Col id=\"CL_10\">0.0</Col><Col id=\"CL_11\">0.0</Col><Col id=\"CL_12\">0.0</Col><Col id=\"CL_Q01\">0.0</Col><Col id=\"CL_Q02\">0.0</Col><Col id=\"CL_Q03\">0.0</Col><Col id=\"CL_Q04\">0.0</Col><Col id=\"CL_H01\">0.0</Col><Col id=\"CL_H02\">0.0</Col><Col id=\"CL_Y\">0.0</Col><Col id=\"SG_01\">0.0</Col><Col id=\"SG_02\">0.0</Col><Col id=\"SG_03\">4000.0</Col><Col id=\"SG_04\">4500.0</Col><Col id=\"SG_05\">5000.0</Col><Col id=\"SG_06\">5500.0</Col><Col id=\"SG_07\">6000.0</Col><Col id=\"SG_08\">6500.0</Col><Col id=\"SG_09\">7000.0</Col><Col id=\"SG_10\">7500.0</Col><Col id=\"SG_11\">8000.0</Col><Col id=\"SG_12\">9000.0</Col><Col id=\"SG_Q01\">4000.0</Col><Col id=\"SG_Q02\">15000.0</Col><Col id=\"SG_Q03\">19500.0</Col><Col id=\"SG_Q04\">24500.0</Col><Col id=\"SG_H01\">19000.0</Col><Col id=\"SG_H02\">44000.0</Col><Col id=\"SG_Y\">63000.0</Col><Col id=\"ORD\">1</Col></Row><Row><Col id=\"EMP_NO\">W12041801</Col><Col id=\"EMP_NAME\">홍형표</Col><Col id=\"DEPT_CD\">W210404</Col><Col id=\"DEPT_NAME\">사업기획팀</Col><Col id=\"CONTRACT_TYPE\">G</Col><Col id=\"CONTRACT_TYPE_NAME\">상품</Col><Col id=\"CL_01\">0.0</Col><Col id=\"CL_02\">0.0</Col><Col id=\"CL_03\">0.0</Col><Col id=\"CL_04\">0.0</Col><Col id=\"CL_05\">0.0</Col><Col id=\"CL_06\">0.0</Col><Col id=\"CL_07\">0.0</Col><Col id=\"CL_08\">0.0</Col><Col id=\"CL_09\">0.0</Col><Col id=\"CL_10\">0.0</Col><Col id=\"CL_11\">0.0</Col><Col id=\"CL_12\">0.0</Col><Col id=\"CL_Q01\">0.0</Col><Col id=\"CL_Q02\">0.0</Col><Col id=\"CL_Q03\">0.0</Col><Col id=\"CL_Q04\">0.0</Col><Col id=\"CL_H01\">0.0</Col><Col id=\"CL_H02\">0.0</Col><Col id=\"CL_Y\">0.0</Col><Col id=\"SG_01\">0.0</Col><Col id=\"SG_02\">0.0</Col><Col id=\"SG_03\">0.0</Col><Col id=\"SG_04\">0.0</Col><Col id=\"SG_05\">0.0</Col><Col id=\"SG_06\">0.0</Col><Col id=\"SG_07\">0.0</Col><Col id=\"SG_08\">0.0</Col><Col id=\"SG_09\">0.0</Col><Col id=\"SG_10\">0.0</Col><Col id=\"SG_11\">0.0</Col><Col id=\"SG_12\">0.0</Col><Col id=\"SG_Q01\">0.0</Col><Col id=\"SG_Q02\">0.0</Col><Col id=\"SG_Q03\">0.0</Col><Col id=\"SG_Q04\">0.0</Col><Col id=\"SG_H01\">0.0</Col><Col id=\"SG_H02\">0.0</Col><Col id=\"SG_Y\">0.0</Col><Col id=\"ORD\">1</Col></Row><Row><Col id=\"EMP_NO\">W12041801</Col><Col id=\"EMP_NAME\">홍형표</Col><Col id=\"DEPT_CD\">W210404</Col><Col id=\"DEPT_NAME\">사업기획팀</Col><Col id=\"CONTRACT_TYPE\">E</Col><Col id=\"CONTRACT_TYPE_NAME\">기타</Col><Col id=\"CL_01\">0.0</Col><Col id=\"CL_02\">0.0</Col><Col id=\"CL_03\">0.0</Col><Col id=\"CL_04\">0.0</Col><Col id=\"CL_05\">0.0</Col><Col id=\"CL_06\">0.0</Col><Col id=\"CL_07\">0.0</Col><Col id=\"CL_08\">0.0</Col><Col id=\"CL_09\">0.0</Col><Col id=\"CL_10\">0.0</Col><Col id=\"CL_11\">0.0</Col><Col id=\"CL_12\">0.0</Col><Col id=\"CL_Q01\">0.0</Col><Col id=\"CL_Q02\">0.0</Col><Col id=\"CL_Q03\">0.0</Col><Col id=\"CL_Q04\">0.0</Col><Col id=\"CL_H01\">0.0</Col><Col id=\"CL_H02\">0.0</Col><Col id=\"CL_Y\">0.0</Col><Col id=\"SG_01\">0.0</Col><Col id=\"SG_02\">0.0</Col><Col id=\"SG_03\">0.0</Col><Col id=\"SG_04\">0.0</Col><Col id=\"SG_05\">0.0</Col><Col id=\"SG_06\">0.0</Col><Col id=\"SG_07\">0.0</Col><Col id=\"SG_08\">0.0</Col><Col id=\"SG_09\">0.0</Col><Col id=\"SG_10\">0.0</Col><Col id=\"SG_11\">0.0</Col><Col id=\"SG_12\">0.0</Col><Col id=\"SG_Q01\">0.0</Col><Col id=\"SG_Q02\">0.0</Col><Col id=\"SG_Q03\">0.0</Col><Col id=\"SG_Q04\">0.0</Col><Col id=\"SG_H01\">0.0</Col><Col id=\"SG_H02\">0.0</Col><Col id=\"SG_Y\">0.0</Col><Col id=\"ORD\">1</Col></Row><Row><Col id=\"EMP_NO\">W23030601</Col><Col id=\"EMP_NAME\">최민준</Col><Col id=\"DEPT_CD\">W210404</Col><Col id=\"DEPT_NAME\">사업기획팀</Col><Col id=\"CONTRACT_TYPE\">P</Col><Col id=\"CONTRACT_TYPE_NAME\">제품</Col><Col id=\"CL_01\">0.0</Col><Col id=\"CL_02\">0.0</Col><Col id=\"CL_03\">5000.0</Col><Col id=\"CL_04\">0.0</Col><Col id=\"CL_05\">0.0</Col><Col id=\"CL_06\">0.0</Col><Col id=\"CL_07\">0.0</Col><Col id=\"CL_08\">0.0</Col><Col id=\"CL_09\">0.0</Col><Col id=\"CL_10\">0.0</Col><Col id=\"CL_11\">0.0</Col><Col id=\"CL_12\">0.0</Col><Col id=\"CL_Q01\">5000.0</Col><Col id=\"CL_Q02\">0.0</Col><Col id=\"CL_Q03\">0.0</Col><Col id=\"CL_Q04\">0.0</Col><Col id=\"CL_H01\">5000.0</Col><Col id=\"CL_H02\">0.0</Col><Col id=\"CL_Y\">5000.0</Col><Col id=\"SG_01\">0.0</Col><Col id=\"SG_02\">0.0</Col><Col id=\"SG_03\">2000.0</Col><Col id=\"SG_04\">2000.0</Col><Col id=\"SG_05\">2000.0</Col><Col id=\"SG_06\">2000.0</Col><Col id=\"SG_07\">4000.0</Col><Col id=\"SG_08\">4000.0</Col><Col id=\"SG_09\">4000.0</Col><Col id=\"SG_10\">4000.0</Col><Col id=\"SG_11\">4000.0</Col><Col id=\"SG_12\">4000.0</Col><Col id=\"SG_Q01\">2000.0</Col><Col id=\"SG_Q02\">6000.0</Col><Col id=\"SG_Q03\">12000.0</Col><Col id=\"SG_Q04\">12000.0</Col><Col id=\"SG_H01\">8000.0</Col><Col id=\"SG_H02\">24000.0</Col><Col id=\"SG_Y\">32000.0</Col><Col id=\"ORD\">1</Col></Row><Row><Col id=\"EMP_NO\">W23030601</Col><Col id=\"EMP_NAME\">최민준</Col><Col id=\"DEPT_CD\">W210404</Col><Col id=\"DEPT_NAME\">사업기획팀</Col><Col id=\"CONTRACT_TYPE\">S</Col><Col id=\"CONTRACT_TYPE_NAME\">용역</Col><Col id=\"CL_01\">8879.31</Col><Col id=\"CL_02\">3500.0</Col><Col id=\"CL_03\">3500.0</Col><Col id=\"CL_04\">3500.0</Col><Col id=\"CL_05\">10080.0</Col><Col id=\"CL_06\">3920.0</Col><Col id=\"CL_07\">0.0</Col><Col id=\"CL_08\">0.0</Col><Col id=\"CL_09\">0.0</Col><Col id=\"CL_10\">0.0</Col><Col id=\"CL_11\">0.0</Col><Col id=\"CL_12\">0.0</Col><Col id=\"CL_Q01\">15879.31</Col><Col id=\"CL_Q02\">17500.0</Col><Col id=\"CL_Q03\">0.0</Col><Col id=\"CL_Q04\">0.0</Col><Col id=\"CL_H01\">33379.31</Col><Col id=\"CL_H02\">0.0</Col><Col id=\"CL_Y\">33379.31</Col><Col id=\"SG_01\">0.0</Col><Col id=\"SG_02\">0.0</Col><Col id=\"SG_03\">10000.0</Col><Col id=\"SG_04\">10000.0</Col><Col id=\"SG_05\">10000.0</Col><Col id=\"SG_06\">20000.0</Col><Col id=\"SG_07\">30000.0</Col><Col id=\"SG_08\">40000.0</Col><Col id=\"SG_09\">50000.0</Col><Col id=\"SG_10\">60000.0</Col><Col id=\"SG_11\">70000.0</Col><Col id=\"SG_12\">80000.0</Col><Col id=\"SG_Q01\">10000.0</Col><Col id=\"SG_Q02\">40000.0</Col><Col id=\"SG_Q03\">120000.0</Col><Col id=\"SG_Q04\">210000.0</Col><Col id=\"SG_H01\">50000.0</Col><Col id=\"SG_H02\">330000.0</Col><Col id=\"SG_Y\">380000.0</Col><Col id=\"ORD\">1</Col></Row><Row><Col id=\"EMP_NO\">W23030601</Col><Col id=\"EMP_NAME\">최민준</Col><Col id=\"DEPT_CD\">W210404</Col><Col id=\"DEPT_NAME\">사업기획팀</Col><Col id=\"CONTRACT_TYPE\">T</Col><Col id=\"CONTRACT_TYPE_NAME\">기술서비스</Col><Col id=\"CL_01\">0.0</Col><Col id=\"CL_02\">0.0</Col><Col id=\"CL_03\">0.0</Col><Col id=\"CL_04\">0.0</Col><Col id=\"CL_05\">0.0</Col><Col id=\"CL_06\">0.0</Col><Col id=\"CL_07\">0.0</Col><Col id=\"CL_08\">0.0</Col><Col id=\"CL_09\">0.0</Col><Col id=\"CL_10\">0.0</Col><Col id=\"CL_11\">0.0</Col><Col id=\"CL_12\">0.0</Col><Col id=\"CL_Q01\">0.0</Col><Col id=\"CL_Q02\">0.0</Col><Col id=\"CL_Q03\">0.0</Col><Col id=\"CL_Q04\">0.0</Col><Col id=\"CL_H01\">0.0</Col><Col id=\"CL_H02\">0.0</Col><Col id=\"CL_Y\">0.0</Col><Col id=\"SG_01\">0.0</Col><Col id=\"SG_02\">0.0</Col><Col id=\"SG_03\">0.0</Col><Col id=\"SG_04\">0.0</Col><Col id=\"SG_05\">0.0</Col><Col id=\"SG_06\">0.0</Col><Col id=\"SG_07\">0.0</Col><Col id=\"SG_08\">0.0</Col><Col id=\"SG_09\">0.0</Col><Col id=\"SG_10\">0.0</Col><Col id=\"SG_11\">0.0</Col><Col id=\"SG_12\">0.0</Col><Col id=\"SG_Q01\">0.0</Col><Col id=\"SG_Q02\">0.0</Col><Col id=\"SG_Q03\">0.0</Col><Col id=\"SG_Q04\">0.0</Col><Col id=\"SG_H01\">0.0</Col><Col id=\"SG_H02\">0.0</Col><Col id=\"SG_Y\">0.0</Col><Col id=\"ORD\">1</Col></Row><Row><Col id=\"EMP_NO\">W23030601</Col><Col id=\"EMP_NAME\">최민준</Col><Col id=\"DEPT_CD\">W210404</Col><Col id=\"DEPT_NAME\">사업기획팀</Col><Col id=\"CONTRACT_TYPE\">M</Col><Col id=\"CONTRACT_TYPE_NAME\">유지보수</Col><Col id=\"CL_01\">0.0</Col><Col id=\"CL_02\">0.0</Col><Col id=\"CL_03\">0.0</Col><Col id=\"CL_04\">0.0</Col><Col id=\"CL_05\">0.0</Col><Col id=\"CL_06\">0.0</Col><Col id=\"CL_07\">0.0</Col><Col id=\"CL_08\">0.0</Col><Col id=\"CL_09\">0.0</Col><Col id=\"CL_10\">0.0</Col><Col id=\"CL_11\">0.0</Col><Col id=\"CL_12\">0.0</Col><Col id=\"CL_Q01\">0.0</Col><Col id=\"CL_Q02\">0.0</Col><Col id=\"CL_Q03\">0.0</Col><Col id=\"CL_Q04\">0.0</Col><Col id=\"CL_H01\">0.0</Col><Col id=\"CL_H02\">0.0</Col><Col id=\"CL_Y\">0.0</Col><Col id=\"SG_01\">0.0</Col><Col id=\"SG_02\">0.0</Col><Col id=\"SG_03\">2000.0</Col><Col id=\"SG_04\">2500.0</Col><Col id=\"SG_05\">3000.0</Col><Col id=\"SG_06\">3500.0</Col><Col id=\"SG_07\">4000.0</Col><Col id=\"SG_08\">4500.0</Col><Col id=\"SG_09\">5000.0</Col><Col id=\"SG_10\">5500.0</Col><Col id=\"SG_11\">6000.0</Col><Col id=\"SG_12\">7000.0</Col><Col id=\"SG_Q01\">2000.0</Col><Col id=\"SG_Q02\">9000.0</Col><Col id=\"SG_Q03\">13500.0</Col><Col id=\"SG_Q04\">18500.0</Col><Col id=\"SG_H01\">11000.0</Col><Col id=\"SG_H02\">32000.0</Col><Col id=\"SG_Y\">43000.0</Col><Col id=\"ORD\">1</Col></Row><Row><Col id=\"EMP_NO\">W23030601</Col><Col id=\"EMP_NAME\">최민준</Col><Col id=\"DEPT_CD\">W210404</Col><Col id=\"DEPT_NAME\">사업기획팀</Col><Col id=\"CONTRACT_TYPE\">G</Col><Col id=\"CONTRACT_TYPE_NAME\">상품</Col><Col id=\"CL_01\">0.0</Col><Col id=\"CL_02\">0.0</Col><Col id=\"CL_03\">0.0</Col><Col id=\"CL_04\">0.0</Col><Col id=\"CL_05\">0.0</Col><Col id=\"CL_06\">0.0</Col><Col id=\"CL_07\">0.0</Col><Col id=\"CL_08\">0.0</Col><Col id=\"CL_09\">0.0</Col><Col id=\"CL_10\">0.0</Col><Col id=\"CL_11\">0.0</Col><Col id=\"CL_12\">0.0</Col><Col id=\"CL_Q01\">0.0</Col><Col id=\"CL_Q02\">0.0</Col><Col id=\"CL_Q03\">0.0</Col><Col id=\"CL_Q04\">0.0</Col><Col id=\"CL_H01\">0.0</Col><Col id=\"CL_H02\">0.0</Col><Col id=\"CL_Y\">0.0</Col><Col id=\"SG_01\">0.0</Col><Col id=\"SG_02\">0.0</Col><Col id=\"SG_03\">0.0</Col><Col id=\"SG_04\">0.0</Col><Col id=\"SG_05\">0.0</Col><Col id=\"SG_06\">0.0</Col><Col id=\"SG_07\">0.0</Col><Col id=\"SG_08\">0.0</Col><Col id=\"SG_09\">0.0</Col><Col id=\"SG_10\">0.0</Col><Col id=\"SG_11\">0.0</Col><Col id=\"SG_12\">0.0</Col><Col id=\"SG_Q01\">0.0</Col><Col id=\"SG_Q02\">0.0</Col><Col id=\"SG_Q03\">0.0</Col><Col id=\"SG_Q04\">0.0</Col><Col id=\"SG_H01\">0.0</Col><Col id=\"SG_H02\">0.0</Col><Col id=\"SG_Y\">0.0</Col><Col id=\"ORD\">1</Col></Row><Row><Col id=\"EMP_NO\">W23030601</Col><Col id=\"EMP_NAME\">최민준</Col><Col id=\"DEPT_CD\">W210404</Col><Col id=\"DEPT_NAME\">사업기획팀</Col><Col id=\"CONTRACT_TYPE\">E</Col><Col id=\"CONTRACT_TYPE_NAME\">기타</Col><Col id=\"CL_01\">0.0</Col><Col id=\"CL_02\">0.0</Col><Col id=\"CL_03\">0.0</Col><Col id=\"CL_04\">0.0</Col><Col id=\"CL_05\">0.0</Col><Col id=\"CL_06\">0.0</Col><Col id=\"CL_07\">0.0</Col><Col id=\"CL_08\">0.0</Col><Col id=\"CL_09\">0.0</Col><Col id=\"CL_10\">0.0</Col><Col id=\"CL_11\">0.0</Col><Col id=\"CL_12\">0.0</Col><Col id=\"CL_Q01\">0.0</Col><Col id=\"CL_Q02\">0.0</Col><Col id=\"CL_Q03\">0.0</Col><Col id=\"CL_Q04\">0.0</Col><Col id=\"CL_H01\">0.0</Col><Col id=\"CL_H02\">0.0</Col><Col id=\"CL_Y\">0.0</Col><Col id=\"SG_01\">0.0</Col><Col id=\"SG_02\">0.0</Col><Col id=\"SG_03\">0.0</Col><Col id=\"SG_04\">0.0</Col><Col id=\"SG_05\">0.0</Col><Col id=\"SG_06\">0.0</Col><Col id=\"SG_07\">0.0</Col><Col id=\"SG_08\">0.0</Col><Col id=\"SG_09\">0.0</Col><Col id=\"SG_10\">0.0</Col><Col id=\"SG_11\">0.0</Col><Col id=\"SG_12\">0.0</Col><Col id=\"SG_Q01\">0.0</Col><Col id=\"SG_Q02\">0.0</Col><Col id=\"SG_Q03\">0.0</Col><Col id=\"SG_Q04\">0.0</Col><Col id=\"SG_H01\">0.0</Col><Col id=\"SG_H02\">0.0</Col><Col id=\"SG_Y\">0.0</Col><Col id=\"ORD\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYearType", this);
            obj._setContents("<ColumnInfo><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"target\" type=\"STRING\" size=\"256\"/><Column id=\"performance\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"title\">용역</Col><Col id=\"target\">8660000000</Col><Col id=\"performance\">1476747446</Col></Row><Row><Col id=\"title\">제품</Col><Col id=\"target\">84000000</Col><Col id=\"performance\">5000000</Col></Row><Row><Col id=\"title\">유지보수</Col><Col id=\"target\">358000000</Col><Col id=\"performance\">96827149</Col></Row><Row><Col id=\"title\">상품</Col><Col id=\"target\">0</Col><Col id=\"performance\">0</Col></Row><Row><Col id=\"title\">기타</Col><Col id=\"target\">0</Col><Col id=\"performance\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYearMonthly", this);
            obj._setContents("<ColumnInfo><Column id=\"month\" type=\"STRING\" size=\"256\"/><Column id=\"target\" type=\"STRING\" size=\"256\"/><Column id=\"performance\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"month\">1</Col><Col id=\"target\">671000000 </Col><Col id=\"performance\">383166773</Col></Row><Row><Col id=\"month\">2</Col><Col id=\"target\">671000000 </Col><Col id=\"performance\">417028326</Col></Row><Row><Col id=\"month\">3</Col><Col id=\"target\">713000000 </Col><Col id=\"performance\">344106915</Col></Row><Row><Col id=\"month\">4</Col><Col id=\"target\">714000000</Col><Col id=\"performance\">415474873</Col></Row><Row><Col id=\"month\">5</Col><Col id=\"target\">715000000</Col><Col id=\"performance\">18797708</Col></Row><Row><Col id=\"month\">6</Col><Col id=\"target\">736000000</Col><Col id=\"performance\">0</Col></Row><Row><Col id=\"month\">7</Col><Col id=\"target\">761000000</Col><Col id=\"performance\">0</Col></Row><Row><Col id=\"month\">8</Col><Col id=\"target\">782000000</Col><Col id=\"performance\">0</Col></Row><Row><Col id=\"month\">9</Col><Col id=\"target\">803000000</Col><Col id=\"performance\">0</Col></Row><Row><Col id=\"month\">10</Col><Col id=\"target\">824000000</Col><Col id=\"performance\">0</Col></Row><Row><Col id=\"month\">11</Col><Col id=\"target\">845000000</Col><Col id=\"performance\">0</Col></Row><Row><Col id=\"month\">12</Col><Col id=\"target\">867000000</Col><Col id=\"performance\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMonthAll", this);
            obj._setContents("<ColumnInfo><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"total\" type=\"STRING\" size=\"256\"/><Column id=\"percent\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"title\">2024.05 목표</Col><Col id=\"total\">3484000000</Col></Row><Row><Col id=\"title\">실적</Col><Col id=\"total\">16031708</Col></Row><Row><Col id=\"title\">2023.05 목표</Col><Col id=\"total\">3484000000</Col></Row><Row><Col id=\"title\">실적</Col><Col id=\"total\">16031708</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMonthType", this);
            obj._setContents("<ColumnInfo><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"target\" type=\"STRING\" size=\"256\"/><Column id=\"performance\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"title\">용역</Col><Col id=\"target\">680000000</Col><Col id=\"performance\">3500000</Col></Row><Row><Col id=\"title\">제품</Col><Col id=\"target\">6000000</Col><Col id=\"performance\">0</Col></Row><Row><Col id=\"title\">유지보수</Col><Col id=\"target\">29000000</Col><Col id=\"performance\">12531708</Col></Row><Row><Col id=\"title\">상품</Col><Col id=\"target\">0</Col><Col id=\"performance\">0</Col></Row><Row><Col id=\"title\">기타</Col><Col id=\"target\">0</Col><Col id=\"performance\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMonthly", this);
            obj._setContents("<ColumnInfo><Column id=\"month\" type=\"STRING\" size=\"256\"/><Column id=\"target\" type=\"STRING\" size=\"256\"/><Column id=\"performance\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"month\">1</Col><Col id=\"target\">671000000 </Col><Col id=\"performance\">383166773</Col></Row><Row><Col id=\"month\">2</Col><Col id=\"target\">671000000 </Col><Col id=\"performance\">417028326</Col></Row><Row><Col id=\"month\">3</Col><Col id=\"target\">713000000 </Col><Col id=\"performance\">344106915</Col></Row><Row><Col id=\"month\">4</Col><Col id=\"target\">714000000</Col><Col id=\"performance\">415474873</Col></Row><Row><Col id=\"month\">5</Col><Col id=\"target\">715000000</Col><Col id=\"performance\">18797708</Col></Row><Row><Col id=\"month\">6</Col><Col id=\"target\">736000000</Col><Col id=\"performance\">0</Col></Row><Row><Col id=\"month\">7</Col><Col id=\"target\">761000000</Col><Col id=\"performance\">0</Col></Row><Row><Col id=\"month\">8</Col><Col id=\"target\">782000000</Col><Col id=\"performance\">0</Col></Row><Row><Col id=\"month\">9</Col><Col id=\"target\">803000000</Col><Col id=\"performance\">0</Col></Row><Row><Col id=\"month\">10</Col><Col id=\"target\">824000000</Col><Col id=\"performance\">0</Col></Row><Row><Col id=\"month\">11</Col><Col id=\"target\">845000000</Col><Col id=\"performance\">0</Col></Row><Row><Col id=\"month\">12</Col><Col id=\"target\">867000000</Col><Col id=\"performance\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsYearSalesman", this);
            obj._setContents("<ColumnInfo><Column id=\"salesman\" type=\"STRING\" size=\"256\"/><Column id=\"target_type1\" type=\"STRING\" size=\"256\"/><Column id=\"target_type2\" type=\"STRING\" size=\"256\"/><Column id=\"target_type3\" type=\"STRING\" size=\"256\"/><Column id=\"target_type4\" type=\"STRING\" size=\"256\"/><Column id=\"target_type5\" type=\"STRING\" size=\"256\"/><Column id=\"performance_type1\" type=\"STRING\" size=\"256\"/><Column id=\"performance_type2\" type=\"STRING\" size=\"256\"/><Column id=\"performance_type3\" type=\"STRING\" size=\"256\"/><Column id=\"performance_type4\" type=\"STRING\" size=\"256\"/><Column id=\"performance_type5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"salesman\">최영식</Col><Col id=\"target_type1\">3250000000</Col><Col id=\"target_type2\">0</Col><Col id=\"target_type3\">105000000</Col><Col id=\"target_type4\">0</Col><Col id=\"target_type5\">0</Col><Col id=\"performance_type1\">1434047446</Col><Col id=\"performance_type2\">0</Col><Col id=\"performance_type3\">96827149</Col><Col id=\"performance_type4\">0</Col><Col id=\"performance_type5\">0</Col></Row><Row><Col id=\"salesman\">홍형표</Col><Col id=\"target_type1\">60000000</Col><Col id=\"target_type2\">12000000</Col><Col id=\"target_type3\">13500000</Col><Col id=\"target_type4\">0</Col><Col id=\"target_type5\">0</Col><Col id=\"performance_type1\">20000000</Col><Col id=\"performance_type2\">0</Col><Col id=\"performance_type3\">0</Col><Col id=\"performance_type4\">0</Col><Col id=\"performance_type5\">0</Col></Row><Row><Col id=\"salesman\">최민준</Col><Col id=\"target_type1\">30000000</Col><Col id=\"target_type2\">6000000</Col><Col id=\"target_type3\">7500000</Col><Col id=\"target_type4\">0</Col><Col id=\"target_type5\">0</Col><Col id=\"performance_type1\">22700000</Col><Col id=\"performance_type2\">5000000</Col><Col id=\"performance_type3\">0</Col><Col id=\"performance_type4\">0</Col><Col id=\"performance_type5\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsMonthSalesman", this);
            obj._setContents("<ColumnInfo><Column id=\"salesman\" type=\"STRING\" size=\"256\"/><Column id=\"target_type1\" type=\"STRING\" size=\"256\"/><Column id=\"target_type2\" type=\"STRING\" size=\"256\"/><Column id=\"target_type3\" type=\"STRING\" size=\"256\"/><Column id=\"target_type4\" type=\"STRING\" size=\"256\"/><Column id=\"target_type5\" type=\"STRING\" size=\"256\"/><Column id=\"performance_type1\" type=\"STRING\" size=\"256\"/><Column id=\"performance_type2\" type=\"STRING\" size=\"256\"/><Column id=\"performance_type3\" type=\"STRING\" size=\"256\"/><Column id=\"performance_type4\" type=\"STRING\" size=\"256\"/><Column id=\"performance_type5\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"salesman\">최영식</Col><Col id=\"target_type1\">650000000</Col><Col id=\"target_type2\"/><Col id=\"target_type3\">21000000</Col><Col id=\"target_type4\">0</Col><Col id=\"target_type5\">0</Col><Col id=\"performance_type1\">0</Col><Col id=\"performance_type2\">0</Col><Col id=\"performance_type3\">12531708</Col><Col id=\"performance_type4\">0</Col><Col id=\"performance_type5\">0</Col></Row><Row><Col id=\"salesman\">홍형표</Col><Col id=\"target_type1\">20000000</Col><Col id=\"target_type2\">4000000</Col><Col id=\"target_type3\">5000000</Col><Col id=\"target_type4\">0</Col><Col id=\"target_type5\">0</Col><Col id=\"performance_type1\">0</Col><Col id=\"performance_type2\">0</Col><Col id=\"performance_type3\">0</Col><Col id=\"performance_type4\">0</Col><Col id=\"performance_type5\">0</Col></Row><Row><Col id=\"salesman\">최민준</Col><Col id=\"target_type1\">10000000</Col><Col id=\"target_type2\">2000000</Col><Col id=\"target_type3\">3000000</Col><Col id=\"target_type4\">0</Col><Col id=\"target_type5\">0</Col><Col id=\"performance_type1\">3500000</Col><Col id=\"performance_type2\">0</Col><Col id=\"performance_type3\">0</Col><Col id=\"performance_type4\">0</Col><Col id=\"performance_type5\">0</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsParam1", this);
            obj._setContents("<ColumnInfo><Column id=\"TYPE\" type=\"string\" size=\"256\"/><Column id=\"FORMAT\" type=\"string\" size=\"256\"/><Column id=\"END_MONTH\" type=\"string\" size=\"256\"/><Column id=\"DEPT_LEVEL\" type=\"string\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"TYPE\">TAX</Col><Col id=\"FORMAT\">EMP</Col><Col id=\"DEPT_LEVEL\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsGlobal", this);
            obj._setContents("<ColumnInfo><Column id=\"EMP_NO\" type=\"string\" size=\"60\"/><Column id=\"EMP_NM\" type=\"string\" size=\"100\"/><Column id=\"DEPT_CD\" type=\"string\" size=\"60\"/><Column id=\"DEPT_NM\" type=\"string\" size=\"100\"/><Column id=\"EMAIL\" type=\"string\" size=\"268\"/><Column id=\"MOBILE\" type=\"string\" size=\"44\"/><Column id=\"OFFICE\" type=\"string\" size=\"20\"/><Column id=\"GRADE_CD\" type=\"string\" size=\"30\"/><Column id=\"GRADE_NM\" type=\"string\" size=\"100\"/><Column id=\"DUTY_CD\" type=\"string\" size=\"30\"/><Column id=\"DUTY_NM\" type=\"string\" size=\"100\"/><Column id=\"EMP_KIND\" type=\"string\" size=\"255\"/><Column id=\"CO_CD\" type=\"string\" size=\"30\"/><Column id=\"CO_NM\" type=\"string\" size=\"100\"/><Column id=\"LOGIN_SYS\" type=\"string\" size=\"10\"/><Column id=\"LANGUAGE\" type=\"string\" size=\"10\"/><Column id=\"MODEL_ID\" type=\"string\" size=\"50\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsParam2", this);
            obj._setContents("<ColumnInfo><Column id=\"KIND\" type=\"string\" size=\"256\"/><Column id=\"YEAR\" type=\"string\" size=\"256\"/><Column id=\"DEPT_LEVEL\" type=\"string\" size=\"256\"/><Column id=\"BUSINESS_TYPE\" type=\"string\" size=\"256\"/><Column id=\"UNIT\" type=\"string\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"KIND\">E</Col><Col id=\"YEAR\">2024</Col><Col id=\"DEPT_LEVEL\">1</Col><Col id=\"BUSINESS_TYPE\"/><Col id=\"UNIT\">1000</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new ChartJS("ChartJS00","40.00","45","370","115",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("ChartJS00");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle01","18.00","11","352","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("★ 연간 매출현황(2024년도)");
            obj.set_font("bold 25px/normal \"noto\",\"Malgun Gothic\",\"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("divYearPercent","206.00","165","200","70",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("staValue1","0","0","60%","50%",null,null,null,null,null,null,this.divYearPercent.form);
            obj.set_taborder("0");
            obj.set_text("연간목표대비");
            obj.set_textAlign("left");
            obj.set_font("16px/normal \"Malgun Gothic\"");
            this.divYearPercent.addChild(obj.name, obj);

            obj = new Static("staValue2","0","50%","60%",null,null,"0",null,null,null,null,this.divYearPercent.form);
            obj.set_taborder("1");
            obj.set_text("누적목표대비");
            obj.set_textAlign("left");
            obj.set_font("16px/normal \"Malgun Gothic\"");
            this.divYearPercent.addChild(obj.name, obj);

            obj = new Static("staPercent1","staValue1:10","0",null,"50%","0",null,null,null,null,null,this.divYearPercent.form);
            obj.set_taborder("2");
            obj.set_text("%");
            obj.set_textAlign("left");
            obj.set_font("bold 20px/normal \"Malgun Gothic\"");
            obj.set_color("red");
            this.divYearPercent.addChild(obj.name, obj);

            obj = new Static("staPercent2","staValue2:10","50%",null,null,"0","0",null,null,null,null,this.divYearPercent.form);
            obj.set_taborder("3");
            obj.set_text("%");
            obj.set_textAlign("left");
            obj.set_font("bold 20px/normal \"Malgun Gothic\"");
            obj.set_color("red");
            this.divYearPercent.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS01","440.00","45","380","195",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("ChartJS00");
            this.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS02","40.00","313","1211","217",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("ChartJS00");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle02","18.00","570","352","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("★ 월간 매출현황(2024년 5월)");
            obj.set_font("bold 25px/normal \"noto\",\"Malgun Gothic\",\"Arial\"");
            this.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS_Month_00","36.00","630","370","115",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("ChartJS00");
            this.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS_Month_01","440.00","630","380","195",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("ChartJS00");
            this.addChild(obj.name, obj);

            obj = new Static("staTitle03","18.00","896","352","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("★ 매출데이터 (2024년도)");
            obj.set_font("bold 25px/normal \"noto\",\"Malgun Gothic\",\"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Div("divMonthPercent","206.00","745","200","70",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);

            obj = new Static("staValue1","0","0","60%","50%",null,null,null,null,null,null,this.divMonthPercent.form);
            obj.set_taborder("0");
            obj.set_text("목표대비");
            obj.set_textAlign("left");
            obj.set_font("16px/normal \"Malgun Gothic\"");
            this.divMonthPercent.addChild(obj.name, obj);

            obj = new Static("staPercent1","staValue1:10","0",null,"50%","0",null,null,null,null,null,this.divMonthPercent.form);
            obj.set_taborder("1");
            obj.set_text("%");
            obj.set_textAlign("left");
            obj.set_font("bold 20px/normal \"Malgun Gothic\"");
            obj.set_color("red");
            this.divMonthPercent.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS03","850","45","400","200",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("ChartJS03");
            this.addChild(obj.name, obj);

            obj = new ChartJS("ChartJS_Month_03","850.00","630","400","200",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("ChartJS03");
            this.addChild(obj.name, obj);

            obj = new Static("sta00","1480.00","906","120","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("(단위:천원)");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Grid("grdData","36.00","940","1564","386",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_binddataset("dsSalesTarget");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"82\" band=\"left\"/><Column size=\"73\" band=\"left\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"90\"/><Column size=\"100\"/><Column size=\"120\" band=\"right\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"영업대표\"/><Cell col=\"1\" text=\"분류\"/><Cell col=\"2\" text=\"1월\"/><Cell col=\"3\" text=\"2월\"/><Cell col=\"4\" text=\"3월\"/><Cell col=\"5\" text=\"4월\"/><Cell col=\"6\" text=\"5월\"/><Cell col=\"7\" text=\"6월\"/><Cell col=\"8\" text=\"상반기\"/><Cell col=\"9\" text=\"7월\"/><Cell col=\"10\" text=\"8월\"/><Cell col=\"11\" text=\"9월\"/><Cell col=\"12\" text=\"10월\"/><Cell col=\"13\" text=\"11월\"/><Cell col=\"14\" text=\"12월\"/><Cell col=\"15\" text=\"하반기\"/><Cell col=\"16\" text=\"연간\"/></Band><Band id=\"body\"><Cell text=\"bind:EMP_NAME\" suppress=\"1\"/><Cell col=\"1\" text=\"bind:CONTRACT_TYPE_NAME\"/><Cell col=\"2\" text=\"bind:CL_01\" textAlign=\"right\"/><Cell col=\"3\" text=\"bind:CL_02\" textAlign=\"right\"/><Cell col=\"4\" text=\"bind:CL_03\" textAlign=\"right\"/><Cell col=\"5\" text=\"bind:CL_04\" textAlign=\"right\"/><Cell col=\"6\" text=\"bind:CL_05\" textAlign=\"right\"/><Cell col=\"7\" text=\"bind:CL_06\" textAlign=\"right\"/><Cell col=\"8\" text=\"bind:CL_H01\" textAlign=\"right\" background=\"lightgray\"/><Cell col=\"9\" text=\"bind:CL_07\" textAlign=\"right\"/><Cell col=\"10\" text=\"bind:CL_08\" textAlign=\"right\"/><Cell col=\"11\" text=\"bind:CL_09\" textAlign=\"right\"/><Cell col=\"12\" text=\"bind:CL_10\" textAlign=\"right\"/><Cell col=\"13\" text=\"bind:CL_11\" textAlign=\"right\"/><Cell col=\"14\" text=\"bind:CL_12\" textAlign=\"right\"/><Cell col=\"15\" text=\"bind:CL_H02\" textAlign=\"right\" background=\"lightgray\"/><Cell col=\"16\" text=\"bind:CL_Y\" textAlign=\"right\" background=\"lightgray\"/></Band><Band id=\"summary\"><Cell colspan=\"2\" text=\"용역\"/><Cell col=\"2\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;S&apos;&quot;,&apos;CL_01&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell col=\"3\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;S&apos;&quot;,&apos;CL_02&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell col=\"4\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;S&apos;&quot;,&apos;CL_03&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell col=\"5\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;S&apos;&quot;,&apos;CL_04&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell col=\"6\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;S&apos;&quot;,&apos;CL_05&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell col=\"7\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;S&apos;&quot;,&apos;CL_06&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell col=\"8\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;S&apos;&quot;,&apos;CL_H1&apos;)\" background=\"lightgray\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell col=\"9\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;S&apos;&quot;,&apos;CL_07&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell col=\"10\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;S&apos;&quot;,&apos;CL_08&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell col=\"11\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;S&apos;&quot;,&apos;CL_09&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell col=\"12\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;S&apos;&quot;,&apos;CL_10&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell col=\"13\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;S&apos;&quot;,&apos;CL_11&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell col=\"14\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;S&apos;&quot;,&apos;CL_12&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell col=\"15\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;S&apos;&quot;,&apos;CL_H2&apos;)\" background=\"lightgray\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell col=\"16\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;S&apos;&quot;,&apos;CL_Y&apos;)\" background=\"lightgray\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"1\" colspan=\"2\" text=\"제품\"/><Cell row=\"1\" col=\"2\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;P&apos;&quot;,&apos;CL_01&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"1\" col=\"3\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;P&apos;&quot;,&apos;CL_02&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"1\" col=\"4\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;P&apos;&quot;,&apos;CL_03&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"1\" col=\"5\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;P&apos;&quot;,&apos;CL_04&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"1\" col=\"6\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;P&apos;&quot;,&apos;CL_05&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"1\" col=\"7\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;P&apos;&quot;,&apos;CL_06&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"1\" col=\"8\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;P&apos;&quot;,&apos;CL_H1&apos;)\" background=\"lightgray\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"1\" col=\"9\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;P&apos;&quot;,&apos;CL_07&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"1\" col=\"10\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;P&apos;&quot;,&apos;CL_08&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"1\" col=\"11\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;P&apos;&quot;,&apos;CL_09&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"1\" col=\"12\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;P&apos;&quot;,&apos;CL_10&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"1\" col=\"13\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;P&apos;&quot;,&apos;CL_11&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"1\" col=\"14\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;P&apos;&quot;,&apos;CL_12&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"1\" col=\"15\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;P&apos;&quot;,&apos;CL_H2&apos;)\" background=\"lightgray\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"1\" col=\"16\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;P&apos;&quot;,&apos;CL_Y&apos;)\" background=\"lightgray\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"2\" colspan=\"2\" text=\"유지보수\"/><Cell row=\"2\" col=\"2\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;M&apos;&quot;,&apos;CL_01&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"2\" col=\"3\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;M&apos;&quot;,&apos;CL_02&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"2\" col=\"4\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;M&apos;&quot;,&apos;CL_03&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"2\" col=\"5\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;M&apos;&quot;,&apos;CL_04&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"2\" col=\"6\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;M&apos;&quot;,&apos;CL_05&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"2\" col=\"7\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;M&apos;&quot;,&apos;CL_06&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"2\" col=\"8\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;M&apos;&quot;,&apos;CL_H1&apos;)\" background=\"lightgray\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"2\" col=\"9\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;M&apos;&quot;,&apos;CL_07&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"2\" col=\"10\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;M&apos;&quot;,&apos;CL_08&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"2\" col=\"11\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;M&apos;&quot;,&apos;CL_09&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"2\" col=\"12\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;M&apos;&quot;,&apos;CL_10&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"2\" col=\"13\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;M&apos;&quot;,&apos;CL_11&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"2\" col=\"14\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;M&apos;&quot;,&apos;CL_12&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"2\" col=\"15\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;M&apos;&quot;,&apos;CL_H2&apos;)\" background=\"lightgray\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"2\" col=\"16\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;M&apos;&quot;,&apos;CL_Y&apos;)\" background=\"lightgray\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"3\" colspan=\"2\" text=\"상품\"/><Cell row=\"3\" col=\"2\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;G&apos;&quot;,&apos;CL_01&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"3\" col=\"3\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;G&apos;&quot;,&apos;CL_02&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"3\" col=\"4\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;G&apos;&quot;,&apos;CL_03&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"3\" col=\"5\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;G&apos;&quot;,&apos;CL_04&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"3\" col=\"6\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;G&apos;&quot;,&apos;CL_05&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"3\" col=\"7\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;G&apos;&quot;,&apos;CL_06&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"3\" col=\"8\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;G&apos;&quot;,&apos;CL_H1&apos;)\" background=\"lightgray\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"3\" col=\"9\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;G&apos;&quot;,&apos;CL_07&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"3\" col=\"10\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;G&apos;&quot;,&apos;CL_08&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"3\" col=\"11\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;G&apos;&quot;,&apos;CL_09&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"3\" col=\"12\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;G&apos;&quot;,&apos;CL_10&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"3\" col=\"13\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;G&apos;&quot;,&apos;CL_11&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"3\" col=\"14\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;G&apos;&quot;,&apos;CL_12&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"3\" col=\"15\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;G&apos;&quot;,&apos;CL_H2&apos;)\" background=\"lightgray\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"3\" col=\"16\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;G&apos;&quot;,&apos;CL_Y&apos;)\" background=\"lightgray\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"4\" colspan=\"2\" text=\"기타\"/><Cell row=\"4\" col=\"2\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;E&apos;&quot;,&apos;CL_01&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"4\" col=\"3\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;E&apos;&quot;,&apos;CL_02&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"4\" col=\"4\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;E&apos;&quot;,&apos;CL_03&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"4\" col=\"5\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;E&apos;&quot;,&apos;CL_04&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"4\" col=\"6\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;E&apos;&quot;,&apos;CL_05&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"4\" col=\"7\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;E&apos;&quot;,&apos;CL_06&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"4\" col=\"8\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;E&apos;&quot;,&apos;CL_H1&apos;)\" background=\"lightgray\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"4\" col=\"9\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;E&apos;&quot;,&apos;CL_07&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"4\" col=\"10\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;E&apos;&quot;,&apos;CL_08&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"4\" col=\"11\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;E&apos;&quot;,&apos;CL_09&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"4\" col=\"12\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;E&apos;&quot;,&apos;CL_10&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"4\" col=\"13\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;E&apos;&quot;,&apos;CL_11&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"4\" col=\"14\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;E&apos;&quot;,&apos;CL_12&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"4\" col=\"15\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;E&apos;&quot;,&apos;CL_H2&apos;)\" background=\"lightgray\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"4\" col=\"16\" expr=\"dataset.getCaseSum(&quot;CONTRACT_TYPE==&apos;E&apos;&quot;,&apos;CL_Y&apos;)\" background=\"lightgray\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"5\" colspan=\"2\" text=\"총계\"/><Cell row=\"5\" col=\"2\" expr=\"dataset.getSum(&apos;CL_01&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"5\" col=\"3\" expr=\"dataset.getSum(&apos;CL_02&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"5\" col=\"4\" expr=\"dataset.getSum(&apos;CL_03&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"5\" col=\"5\" expr=\"dataset.getSum(&apos;CL_04&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"5\" col=\"6\" expr=\"dataset.getSum(&apos;CL_05&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"5\" col=\"7\" expr=\"dataset.getSum(&apos;CL_06&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"5\" col=\"8\" expr=\"dataset.getSum(&apos;CL_H1&apos;)\" background=\"lightgray\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"5\" col=\"9\" expr=\"dataset.getSum(&apos;CL_07&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"5\" col=\"10\" expr=\"dataset.getSum(&apos;CL_08&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"5\" col=\"11\" expr=\"dataset.getSum(&apos;CL_09&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"5\" col=\"12\" expr=\"dataset.getSum(&apos;CL_10&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"5\" col=\"13\" expr=\"dataset.getSum(&apos;CL_11&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"5\" col=\"14\" expr=\"dataset.getSum(&apos;CL_12&apos;)\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"5\" col=\"15\" expr=\"dataset.getSum(&apos;CL_H2&apos;)\" background=\"lightgray\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/><Cell row=\"5\" col=\"16\" expr=\"dataset.getSum(&apos;CL_Y&apos;)\" background=\"lightgray\" displaytype=\"mask\" maskeditformat=\"#,#0.###\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("sta01","40","grdData:0","89","45",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this.divYearPercent.form
            obj = new Layout("default","",0,0,this.divYearPercent.form,function(p){});
            this.divYearPercent.form.addLayout(obj.name, obj);

            //-- Default Layout : this.divMonthPercent.form
            obj = new Layout("default","",0,0,this.divMonthPercent.form,function(p){});
            this.divMonthPercent.form.addLayout(obj.name, obj);

            //-- Default Layout : this
            obj = new Layout("default","",1920,1380,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("salesReport.xfdl", function() {
        /**
        *  DxChart - 파일설명
        *  @FileName 	testSalesReport.xfdl
        *  @Creator 	TOBESOFT
        *  @CreateDate 	2024/6/3
        *  @Desction
        ************** 소스 수정 이력 ***********************************************
        * Date					Modifier					Description
        *******************************************************************************
        * 2024/6/3			TOBESOFT					최초생성
        *******************************************************************************
        */

        /*******************************************************************************************************************************
         * FORM 변수 선언 영역
        *******************************************************************************************************************************/
        this.fvContractTypeList=[];  // 분류리스트를 가지고 있음

        /*******************************************************************************************************************************
         * FORM EVENT 영역(onload, onbeforeclose..)
        *******************************************************************************************************************************/
        this.testSalesReport_onload = function(obj,e)
        {
        	this.gfnFormOnload(obj,e); //필수함수

        	//
        	var dt = new Date();
        	var sYear = dt.getFullYear();
        	var sMonth = this.gfnLPad(dt.getMonth()+1,"0",2);
        	var sYearMonth = sYear + sMonth;

        	this.staTitle01.set_text("★ 연간 매출현황("+sYear+"년도)");
        	this.staTitle02.set_text("★ 월간 매출현황("+sYear+"년 "+sMonth+"월)");
        	this.staTitle03.set_text("★ 매출 데이터 ("+sYear+"년도)");


        	// 서버에서 데이터를 가져온다.
        	this.fnGetMan();

        };

        /*******************************************************************************************************************************
         * 공통함수영역 (cfnSearch : 조회 / cfnSave : 저장 / cfnAdd : 신규 / cfnDel : 삭제 / cfnPrint : 인쇄..)
        *******************************************************************************************************************************/

        /*******************************************************************************************************************************
         * Transaction 서비스호출 처리 영역
        *******************************************************************************************************************************/
        this.fnGetMan = function()
        {
        	this.gfnInitNextGlobalDataset(this.dsGlobal);

        	// POST http://next.tobesoft.com/FrontControllerServlet.do?service=xupservice&domain=NEXTp&model=SR_SalesResultAnalysis_S03&format=xml&version=xplatform&compress=false HTTP/1.1
        	var dt = new Date();
        	var sYear = dt.getFullYear();
        	var sMonth = this.gfnLPad(dt.getMonth()+1,"0",2);
        	var sYearMonth = sYear + sMonth;

        	var sModel = "MI_SalesMonthly_S01";     // NEXT - 월별매출현황
        	var sOutDataetId = "dsParam1";
        	this.dsParam1.setColumn(0, "END_MONTH", sYearMonth);

        	var sModel = "MI_TargetVsResults_S01";  // NEXT - 월별목표대비실적
        	var sOutDataetId = "dsParam2";
        	this.dsParam2.setColumn(0, "YEAR", sYear);

        	var strSvcId 	= "monTarget";
        	var strSvcUrl 	= "nextService.do";
        	var inData 		= "dsGlobal=dsGlobal dsParam="+sOutDataetId;
        	var outData 	= "dsSalesTarget=dsOutput";
        	var strArg 		= "jobCode=" + nexacro.wrapQuote("next");
        	strArg 			+= " trxCode=" + nexacro.wrapQuote("month");
        	strArg 			+= " trxUrl=" + nexacro.wrapQuote("FrontControllerServlet.do?service=xupservice&domain=NEXTp&model="+sModel+"&format=xml&version=xplatform&compress=false");
        	this.gfnTransaction(strSvcId, strSvcUrl, inData, outData, strArg, "fnCallback");
        };
        /*******************************************************************************************************************************
         * Callback 영역 (Transaction, popup, message..)
        *******************************************************************************************************************************/
        this.fnCallback = function (sSvcId, nErrCd, sErrMsg, oJson)
        {
        	switch(sSvcId) {
        		case "monTarget":
        			//console.log(this.dsSalesTarget.saveXML());

        			// 그리기 위한 데이터셋을 생성한다.
        			this.fnMakeStatData();

        			// 차트를 그린다.
        			this.fnDrawChart();

        			// 그리드의 높이를 조정한다.
        			var nGridHeight = this.grdData.getRealRowFullSize();
        			this.grdData.setOffsetHeight(nGridHeight+2); // Border 보정


        			break;
        		default:
        			break;
        	}
        };
        /*******************************************************************************************************************************
         * 사용자 Function 영역
        *******************************************************************************************************************************/
        // 챠트를 그린다.
        this.fnDrawChart = function()
        {
        	// 연간
        	this.fnYearDraw1();
        	this.fnYearDraw2();
        	this.fnYearDraw3();
        	this.fnYearDraw4();

        	// 월간
        	this.fnMonthDraw1();
        	this.fnMonthDraw2();
        	//this.fnMonthDraw3();
        	this.fnMonthDraw4();
        }

        // 차트용 데이터를 생성한다.
        this.fnMakeStatData = function()
        {
        	var dt = new Date();
        	var sYear = dt.getFullYear();
        	var nMonth = dt.getMonth()+1;
        	var sMonth = this.gfnLPad(nMonth,"0",2);
        	var sYearMonth = sYear + sMonth;
        	var sFormattedYearMonth = sYear + "." + sMonth;

        	// 작년도 정보
        	var dt_y = dt.addMonth(-12);
        	var sYearY = sYear-1;
        	var sYearMonthY = sYearY + sMonth;
        	var sFormattedYearMonthY = sYearY + "." + sMonth;

        	// 데이터셋 클리어
        	this.dsYearAll.clearData();
        	this.dsYearType.clearData();
        	this.dsYearMonthly.clearData();
        	this.dsYearSalesman.clearData();

        	this.dsMonthAll.clearData();
        	this.dsMonthType.clearData();
            this.dsMonthly.clearData();
        	this.dsMonthSalesman.clearData();

        	// 데이터 가공
        	var arrDeleteType = ["기술서비스","상품","기타"];
        	var arrUpdateType = ["최영식"];
        	for(var i=this.dsSalesTarget.rowcount-1;i>=0;i--)
        	{
        		// 영업대표명 변경()
        		var sEmpName= this.dsSalesTarget.getColumn(i,"EMP_NAME");

        		if(arrUpdateType.includes(sEmpName))
        		{
        			this.dsSalesTarget.setColumn(i,"EMP_NAME","투비소프트");
        		}

        		// 분류중에 필요없는 부분 삭제
        		var sContractType = this.dsSalesTarget.getColumn(i,"CONTRACT_TYPE_NAME");

        		if(arrDeleteType.includes(sContractType))
        		{
        			var nCLValue=0,nSGValue=0;
        			for(var j=1;j<=12;j++)
        			{
        				var sMonIdx     =  this.gfnLPad(j  ,"0",2);

        				nCLValue += this.dsSalesTarget.getColumn(i,"CL_" + sMonIdx);
        				nSGValue += this.dsSalesTarget.getColumn(i,"SG_" + sMonIdx);
        			}

        			if(nCLValue==0&&nSGValue==0)
        			{
        				//삭제한다.
        				this.dsSalesTarget.deleteRow(i);
        			}
        		}

        	}

        	// 데이터를 영업대표별+분류별로 리스트를 추출한다.
        	var arrEmpList = [];
        	var arrContractTypeList = [];
        	for(var i=0;i<this.dsSalesTarget.rowcount;i++)
        	{
        		var sEmp          = this.dsSalesTarget.getColumn(i,"EMP_NAME"          );
        		var sContractType = this.dsSalesTarget.getColumn(i,"CONTRACT_TYPE_NAME");

        		if(!arrEmpList.includes(sEmp))
        		{
        			arrEmpList.push(sEmp);
        		}
        		if(!arrContractTypeList.includes(sContractType))
        		{
        			arrContractTypeList.push(sContractType);
        		}
        	}
        	this.fvContractTypeList =  arrContractTypeList;


        	// 누적값들을 미리 계산해 놓음
        	this.dsSalesTargetStacked.copyData(this.dsSalesTarget);
        	for(var i=0;i<this.dsSalesTarget.rowcount;i++)
        	{
        		for(var j=1;j<=12;j++)
        		{
        			var sMonIdx     =  this.gfnLPad(j  ,"0",2);
        			var sPastMonIdx =  this.gfnLPad(j-1,"0",2);
        			var sCurValue    = this.dsSalesTargetStacked.getColumn(i,"CL_"+sMonIdx);
        			var sPastStacked = (j==1)?0:this.dsSalesTargetStacked.getColumn(i,"CL_"+sPastMonIdx) ;

        			this.dsSalesTargetStacked.setColumn(i,"CL_"+sMonIdx,(sCurValue+sPastStacked))

        			var sCurValue    = this.dsSalesTargetStacked.getColumn(i,"SG_"+sMonIdx);
        			var sPastStacked = (j==1)?0:this.dsSalesTargetStacked.getColumn(i,"SG_"+sPastMonIdx) ;

        			this.dsSalesTargetStacked.setColumn(i,"SG_"+sMonIdx,(sCurValue+sPastStacked))
        		}
        	}


        	// 데이터셋 dsYearAll의 데이터를 생성
        	var nYearTargetValue = this.dsSalesTarget.getSum("SG_Y");
        	var nStackedTargetValue = this.dsSalesTargetStacked.getSum("SG_"+sMonth);
        	var nStackedResultValue = this.dsSalesTargetStacked.getSum("CL_"+sMonth);

        	nRow = this.dsYearAll.addRow();
        	this.dsYearAll.setColumn(nRow,"title"  , "년간목표");
        	this.dsYearAll.setColumn(nRow,"total"  , nYearTargetValue);
        	this.dsYearAll.setColumn(nRow,"percent", (nStackedResultValue/nYearTargetValue*100).toFixed(2));

        	nRow = this.dsYearAll.addRow();
        	this.dsYearAll.setColumn(nRow,"title"  , "월간누적목표");
        	this.dsYearAll.setColumn(nRow,"total"  , nStackedTargetValue);
        	this.dsYearAll.setColumn(nRow,"percent", (nStackedResultValue/nStackedTargetValue*100).toFixed(2));

        	nRow = this.dsYearAll.addRow();
        	this.dsYearAll.setColumn(nRow,"title"  , "월간누적실적");
        	this.dsYearAll.setColumn(nRow,"total"  , nStackedResultValue);
        	this.dsYearAll.setColumn(nRow,"percent", 0);  // 사용안함

        	// dsYearType
        	// 데이터셋 dsYearAll의 데이터를 생성
        	for(var i=0;i<arrContractTypeList.length;i++)
        	{
        		var sContractTypeName = arrContractTypeList[i];

        		nCLValue = this.dsSalesTargetStacked.getCaseSum("CONTRACT_TYPE_NAME=='"+sContractTypeName+"'","CL_"+sMonth);
        		nSGValue = this.dsSalesTargetStacked.getCaseSum("CONTRACT_TYPE_NAME=='"+sContractTypeName+"'","SG_"+sMonth);

        		nRow = this.dsYearType.addRow();
        		this.dsYearType.setColumn(nRow,"title",sContractTypeName);
        		this.dsYearType.setColumn(nRow,"target",nSGValue);
        		this.dsYearType.setColumn(nRow,"performance",nCLValue);

        	}

        	// dsYearMonthly
        	// 데이터셋 dsYearAll의 데이터를 생성
        	for(var i=1;i<=12;i++)
        	{
        		var sMonthIdx = this.gfnLPad(i,"0",2);

        		nCLValue = this.dsSalesTarget.getSum("CL_"+sMonthIdx);
        		nSGValue = this.dsSalesTarget.getSum("SG_"+sMonthIdx);

        		nRow = this.dsYearMonthly.addRow();
        		this.dsYearMonthly.setColumn(nRow ,"month"       ,i        );
        		this.dsYearMonthly.setColumn(nRow ,"target"      ,nSGValue );
        		this.dsYearMonthly.setColumn(nRow ,"performance" ,nCLValue );

        	}
        	// dsYearSalesman
        	for(var i=0;i<arrEmpList.length;i++)
        	{
        		var sEmpName = arrEmpList[i];

        		var nAddRow  = this.dsYearSalesman.addRow();
        		this.dsYearSalesman.setColumn(i,"salesman",sEmpName);


        		for(var j=0;j<arrContractTypeList.length;j++)
        		{
        			var sContractTypeName = arrContractTypeList[j];

        			nCLValue = this.dsSalesTarget.getCaseSum("EMP_NAME=='"+sEmpName+"'&&CONTRACT_TYPE_NAME=='"+sContractTypeName+"'","CL_Y");
        			nSGValue = this.dsSalesTarget.getCaseSum("EMP_NAME=='"+sEmpName+"'&&CONTRACT_TYPE_NAME=='"+sContractTypeName+"'","SG_Y" );

        			this.dsYearSalesman.setColumn(i,"performance_type"+(j+1),nCLValue);
        			this.dsYearSalesman.setColumn(i,"target_type"     +(j+1),nSGValue);
        		}

        	}



        	// dsMonthAll
        	// 데이터셋 dsYearAll의 데이터를 생성
        	var nMonthTargetValue = this.dsSalesTarget.getSum("SG_"+sMonth);
        	var nMonthResultValue = this.dsSalesTarget.getSum("CL_"+sMonth);

        	nRow = this.dsMonthAll.addRow();
        	this.dsMonthAll.setColumn(nRow,"title"  , sFormattedYearMonth + "목표");
        	this.dsMonthAll.setColumn(nRow,"total"  , nMonthTargetValue);
        	this.dsMonthAll.setColumn(nRow,"percent", (nMonthResultValue/nMonthTargetValue*100).toFixed(2));

        	nRow = this.dsMonthAll.addRow();
        	this.dsMonthAll.setColumn(nRow,"title"  , "실적");
        	this.dsMonthAll.setColumn(nRow,"total"  , nMonthResultValue);
        	this.dsMonthAll.setColumn(nRow,"percent", 0);  // 사용안함

        // 	nRow = this.dsMonthAll.addRow();
        // 	this.dsMonthAll.setColumn(nRow,"title"  , sFormattedYearMonthY + "목표");
        // 	this.dsMonthAll.setColumn(nRow,"total"  , 0);
        // 	this.dsMonthAll.setColumn(nRow,"percent", 0);
        //
        // 	nRow = this.dsMonthAll.addRow();
        // 	this.dsMonthAll.setColumn(nRow,"title"  , "실적");
        // 	this.dsMonthAll.setColumn(nRow,"total"  , 0);
        // 	this.dsMonthAll.setColumn(nRow,"percent", 0);  // 사용안함
        	// dsMonthType
        	for(var i=0;i<arrContractTypeList.length;i++)
        	{
        		var sContractTypeName = arrContractTypeList[i];

        		nCLValue = this.dsSalesTarget.getCaseSum("CONTRACT_TYPE_NAME=='"+sContractTypeName+"'","CL_"+sMonth);
        		nSGValue = this.dsSalesTarget.getCaseSum("CONTRACT_TYPE_NAME=='"+sContractTypeName+"'","SG_"+sMonth);

        		nRow = this.dsMonthType.addRow();
        		this.dsMonthType.setColumn(nRow,"title",sContractTypeName);
        		this.dsMonthType.setColumn(nRow,"target",nSGValue);
        		this.dsMonthType.setColumn(nRow,"performance",nCLValue);

        	}
        	// 데이터셋 dsYearAll의 데이터를 생성
        	// dsMonthly
        	for(var i=1;i<=12;i++)
        	{
        		var sMonthIdx = this.gfnLPad(i,"0",2);

        		nCLValue = this.dsSalesTarget.getSum("CL_"+sMonthIdx);
        		nSGValue = this.dsSalesTarget.getSum("SG_"+sMonthIdx);

        		nRow = this.dsMonthly.addRow();
        		this.dsMonthly.setColumn(nRow,"month",i);
        		this.dsMonthly.setColumn(nRow,"target",nSGValue);
        		this.dsMonthly.setColumn(nRow,"performance",nCLValue);

        	}
        	// dsMonthSalesman
        	// 데이터셋 dsYearAll의 데이터를 생성
        	for(var i=0;i<arrEmpList.length;i++)
        	{
        		var sEmpName = arrEmpList[i];

        		var nAddRow  = this.dsMonthSalesman.addRow();
        		this.dsMonthSalesman.setColumn(i,"salesman",sEmpName);

        		for(var j=0;j<arrContractTypeList.length;j++)
        		{
        			var sContractTypeName = arrContractTypeList[j];

        			nCLValue = this.dsSalesTarget.getCaseSum("EMP_NAME=='"+sEmpName+"'&&CONTRACT_TYPE_NAME=='"+sContractTypeName+"'","CL_" + sMonth);
        			nSGValue = this.dsSalesTarget.getCaseSum("EMP_NAME=='"+sEmpName+"'&&CONTRACT_TYPE_NAME=='"+sContractTypeName+"'","SG_" + sMonth);

        			this.dsMonthSalesman.setColumn(i,"performance_type"+(j+1),nCLValue);
        			this.dsMonthSalesman.setColumn(i,"target_type"     +(j+1),nSGValue);
        		}

        	}

        }


        /*******************************************************************************************************************************
         * 각 COMPONENT 별 EVENT 영역
        *******************************************************************************************************************************/




        this.fnYearDraw1 = function()
        {
        	// 챠트를 그린다.
        	var chart = this.ChartJS00;
        	var canvas = chart.getCanvas();
        	var cvs = canvas.id;
        	DxChart.reset(canvas);
        	var hbar = new DxChartHBar({
        		id: cvs,
        		elem : canvas,
        		binddataset : this.dsYearAll,
        		data:["bind:total"],
        		options: {
        			margin: {LeftAuto : false,
        					Top: 10,
        					Right: 110,
        					Bottom: 10,
        					Left: 105,
        					Inner: 5, },
        			yaxis:{Color: '#E2E2E2',
        					LabelsOffsetX: -15,
        					Tickmarks: false,
        					Labels: ['bind:title']},
        			xaxis:{Use : false,Scale:false
        				},
        			background:{GridVlines: false,GridHlines: false,GridBorder:false},
        			labels:{
        					Above: true,
        					//AboveDecimals: 2,
        					AboveColor: '#333',
        					AboveBold: true,
        					AboveItalic: true,
        				}
        		}
        	}).draw();

        	// 실적Percent를 세팅

        	var sPercent1 = this.dsYearAll.getColumn(0,"percent") + "%";
        	var sPercent2 = this.dsYearAll.getColumn(1,"percent") + "%";

        	this.divYearPercent.form.staPercent1.set_text(sPercent1);
        	this.divYearPercent.form.staPercent2.set_text(sPercent2);
        };

        this.fnYearDraw2 = function()
        {
        	// 챠트를 그린다.
        	var chart = this.ChartJS01;
        	var canvas = chart.getCanvas();
        	var cvs = canvas.id;
        	DxChart.reset(canvas);

        	var bar = new DxChartBar({
        			id: cvs,
        			elem : canvas,
        			binddataset : this.dsYearType,
        			data:["bind:target","bind:performance"],
        			options: {
        				background:{GridVlines: false,GridBorder: true,},
        				title : {Text:"분류별 년간",Subtitle:"(단위:백만원)",OffsetY:12,FontStyle:"bold 14px Verdana"},
        				yaxis:{
        					Use: false
        					,LabelsOffsetX:-15
        					,Tickmarks:false
        					,Color:"#E2E2E2"
        					,Scale:false
        				},
        				xaxis:{
        					Labels:['bind:title']
        					,Color:"#E2E2E2"
        					,LabelsOffsetY:5
        					,Tickmarks:true
        				},
        				margin: {LeftAuto : false,
        						Left: 10,
        						Top: 40,
        						Right: 10,
        						Bottom: 50,
        						Inner: 5,
        				},
        				colorsStroke: 'white',
        				linewidth: 1,
        				shadow:{Color: '#ccc',Offsetx: 0,Offsety: 0, Blur: 10},
        				labels:{
        					Above: true,
        					//AboveDecimals: 2,
        					AboveColor: '#333',
        					AboveBold: true,
        					AboveItalic: true,
        				    AboveFormatter : function(e)
        				    {
        						var sValue = "";

        						if(e.number>0)
        						{
        							e.formatter = null
        							e.number = (e.number/1000).toFixed(2);
        							sValue = DxChart.numberFormat(e);
        						}

        						return sValue;
        					},
        				},
        				key: {
        						Data: ['목표','실적']
        						,Position :'margin'
        						,Valign :'bottom'
        						, PositionOffsetY : 20
        						,PositionMarginHSpace: 15
        					},
        			}
        		}).draw();

        };

        this.fnYearDraw3 = function()
        {
        	// 챠트를 그린다.
        	var chart = this.ChartJS02;
        	var canvas = chart.getCanvas();
        	var cvs = canvas.id;
        	DxChart.reset(canvas);

        	var bar = new DxChartBar({
        			id: cvs,
        			elem : canvas,
        			binddataset : this.dsYearMonthly,
        			data:["bind:target","bind:performance"],
        			options: {
        				background:{GridVlines: false,GridBorder: true,},
        				title : {Text:"월별 목표/실적",Subtitle:"(단위:백만원)",OffsetY:12,FontStyle:"bold 14px Verdana"},
        				yaxis:{
        					Use: false
        					,LabelsOffsetX:-15
        					,Tickmarks:false
        					,Color:"#E2E2E2"
        					,Scale:false
        				},
        				xaxis:{
        					Labels:'%{property:month[%{index}]} 월'
        					,Color:"#E2E2E2"
        					,LabelsOffsetY:5
        					,Tickmarks:true
        				},
        				month : DxChart.convertDataset(this.dsYearMonthly, ["bind:month"], null, "linear"),
        				margin: {LeftAuto : false,
        						Left: 10,
        						Top: 40,
        						Right: 10,
        						Bottom: 50,
        						Inner: 5,
        				},
        				colorsStroke: 'white',
        				linewidth: 1,
        				shadow:{Color: '#ccc',Offsetx: 0,Offsety: 0, Blur: 10},
        				labels:{
        					Above: true,
        					//AboveDecimals: 2,
        					AboveColor: '#333',
        					AboveBold: true,
        					AboveItalic: true,
        				    AboveFormatter : function(e)
        				    {
        						var sValue = "";

        						if(e.number>0)
        						{
        							e.formatter = null
        							e.number = (e.number/1000).toFixed(2);
        							sValue = DxChart.numberFormat(e);
        						}

        						return sValue;
        					},
        				},
        				key: {
        						Data: ['목표','실적']
        						,Position :'margin'
        						,Valign :'bottom'
        						, PositionOffsetY : 20
        						,PositionMarginHSpace: 15
        					},
        			}
        		}).draw();

        };

        this.fnYearDraw4 = function()
        {
        	// 챠트를 그린다.
        	var chart = this.ChartJS03;
        	var canvas = chart.getCanvas();
        	var cvs = canvas.id;
        	DxChart.reset(canvas);

        	var bar = new DxChartBar({
        			id: cvs,
        			elem : canvas,
        			binddataset : this.dsYearSalesman,
        			data:["bind:performance_type1","bind:performance_type2","bind:performance_type3","bind:performance_type4","bind:performance_type5"],
        			options: {
        				background:{GridVlines: false,GridBorder: true,},
        				title : {Text:"영업대표별 누적목표/실적",Subtitle:"(단위:백만원)",OffsetY:12,FontStyle:"bold 14px Verdana"},
        				yaxis:{
        					Use: false
        					,LabelsOffsetX:-15
        					,Tickmarks:false
        					,Color:"#E2E2E2"
        					,Scale:false
        				},
        				grouping: 'stacked',
        				xaxis:{
        					Labels:['bind:salesman']
        					,Color:"#E2E2E2"
        					,LabelsOffsetY:5
        					,Tickmarks:true
        				},
        				//month : DxChart.convertDataset(this.dsYearMonthly, ["bind:month"], null, "linear"),
        				margin: {LeftAuto : false,
        						Left: 10,
        						Top: 40,
        						Right: 10,
        						Bottom: 50,
        						Inner: 5,
        				},
        				colorsStroke: 'white',
        				linewidth: 1,
        				shadow:{Color: '#ccc',Offsetx: 0,Offsety: 0, Blur: 10},
        				labels:{
        					Above: true,
        					//AboveDecimals: 2,
        					AboveColor: '#333',
        					AboveBold: true,
        					AboveItalic: true,
        				    AboveFormatter : function(e)
        				    {
        						var sValue = "";

        						if(e.number>=0)
        						{
        							e.formatter = null
        							e.number = (e.number/1000).toFixed(2);
        							sValue = DxChart.numberFormat(e);
        						}

        						return sValue;
        					},
        				},
        				key: {
        						Data: this.fvContractTypeList
        						,Position :'margin'
        						,Valign :'bottom'
        						, PositionOffsetY : 20
        						,PositionMarginHSpace: 15
        					},
        			}
        		}).draw();

        };


        this.fnMonthDraw1 = function()
        {
        	// 챠트를 그린다.
        	var chart = this.ChartJS_Month_00;
        	var canvas = chart.getCanvas();
        	var cvs = canvas.id;
        	DxChart.reset(canvas);
        	var hbar = new DxChartHBar({
        		id: cvs,
        		elem : canvas,
        		binddataset : this.dsMonthAll,
        		data:["bind:total"],
        		options: {
        			margin: {LeftAuto : false,
        					Top: 10,
        					Right: 110,
        					Bottom: 10,
        					Left: 105,
        					Inner: 5, },
        			yaxis:{Color: '#E2E2E2',
        					LabelsOffsetX: -15,
        					Tickmarks: false,
        					Labels: ['bind:title']},
        			xaxis:{Use : false,Scale:false
        				},
        			background:{GridVlines: false,GridHlines: false,GridBorder:false},
        			labels:{
        					Above: true,
        					//AboveDecimals: 2,
        					AboveColor: '#333',
        					AboveBold: true,
        					AboveItalic: true,
        				}
        		}
        	}).draw();

        	// 실적Percent를 세팅

        	var sPercent1 = this.dsMonthAll.getColumn(0,"percent") + "%";

        	this.divMonthPercent.form.staPercent1.set_text(sPercent1);
        };


        this.fnMonthDraw2 = function()
        {
        	// 챠트를 그린다.
        	var chart = this.ChartJS_Month_01;
        	var canvas = chart.getCanvas();
        	var cvs = canvas.id;
        	DxChart.reset(canvas);

        	var bar = new DxChartBar({
        			id: cvs,
        			elem : canvas,
        			binddataset : this.dsMonthType,
        			data:["bind:target","bind:performance"],
        			options: {
        				background:{GridVlines: false,GridBorder: true,},
        				title : {Text:"분류별 월간",Subtitle:"(단위:백만원)",OffsetY:12,FontStyle:"bold 14px Verdana"},
        				yaxis:{
        					Use: false
        					,LabelsOffsetX:-15
        					,Tickmarks:false
        					,Color:"#E2E2E2"
        					,Scale:false
        				},
        				xaxis:{
        					Labels:['bind:title']
        					,Color:"#E2E2E2"
        					,LabelsOffsetY:5
        					,Tickmarks:true
        				},
        				margin: {LeftAuto : false,
        						Left: 10,
        						Top: 40,
        						Right: 10,
        						Bottom: 50,
        						Inner: 5,
        				},
        				colorsStroke: 'white',
        				linewidth: 1,
        				shadow:{Color: '#ccc',Offsetx: 0,Offsety: 0, Blur: 10},
        				labels:{
        					Above: true,
        					//AboveDecimals: 2,
        					AboveColor: '#333',
        					AboveBold: true,
        					AboveItalic: true,
        				    AboveFormatter : function(e)
        				    {
        						var sValue = "";

        						if(e.number>0)
        						{
        							e.formatter = null
        							e.number = (e.number/1000).toFixed(2);
        							sValue = DxChart.numberFormat(e);
        						}

        						return sValue;
        					},
        				},
        				key: {
        						Data: ['목표','실적']
        						,Position :'margin'
        						,Valign :'bottom'
        						, PositionOffsetY : 20
        						,PositionMarginHSpace: 15
        					},
        			}
        		}).draw();

        };

        this.fnMonthDraw3 = function()
        {
        	// 챠트를 그린다.
        	var chart = this.ChartJS_Month_02;
        	var canvas = chart.getCanvas();
        	var cvs = canvas.id;
        	DxChart.reset(canvas);

        	var bar = new DxChartBar({
        			id: cvs,
        			elem : canvas,
        			binddataset : this.dsMonthly,
        			data:["bind:target","bind:performance"],
        			options: {
        				background:{GridVlines: false,GridBorder: true,},
        				title : {Text:"월별 영업대표별 목표/실적",Subtitle:"(단위:백만원)",OffsetY:12,FontStyle:"bold 14px Verdana"},
        				yaxis:{
        					Use: false
        					,LabelsOffsetX:-15
        					,Tickmarks:false
        					,Color:"#E2E2E2"
        					,Scale:false
        				},
        				xaxis:{
        					Labels:'%{property:month[%{index}]} 월'
        					,Color:"#E2E2E2"
        					,LabelsOffsetY:5
        					,Tickmarks:true
        				},
        				month : DxChart.convertDataset(this.dsYearMonthly, ["bind:month"], null, "linear"),
        				margin: {LeftAuto : false,
        						Left: 10,
        						Top: 40,
        						Right: 10,
        						Bottom: 50,
        						Inner: 5,
        				},
        				colorsStroke: 'white',
        				linewidth: 1,
        				shadow:{Color: '#ccc',Offsetx: 0,Offsety: 0, Blur: 10},
        				labels:{
        					Above: true,
        					//AboveDecimals: 2,
        					AboveColor: '#333',
        					AboveBold: true,
        					AboveItalic: true,
        				    AboveFormatter : function(e)
        				    {
        						var sValue = "";

        						if(e.number>0)
        						{
        							e.formatter = null
        							e.number = (e.number/1000).toFixed(2);
        							sValue = DxChart.numberFormat(e);
        						}

        						return sValue;
        					},
        				},
        				key: {
        						Data: ['목표','실적']
        						,Position :'margin'
        						,Valign :'bottom'
        						, PositionOffsetY : 20
        						,PositionMarginHSpace: 15
        					},
        			}
        		}).draw();
        };

        this.fnMonthDraw4 = function()
        {
        	// 챠트를 그린다.
        	var chart = this.ChartJS_Month_03;
        	var canvas = chart.getCanvas();
        	var cvs = canvas.id;
        	DxChart.reset(canvas);

        	var bar = new DxChartBar({
        			id: cvs,
        			elem : canvas,
        			binddataset : this.dsMonthSalesman,
        			data:["bind:performance_type1","bind:performance_type2","bind:performance_type3","bind:performance_type4","bind:performance_type5"],
        			options: {
        				background:{GridVlines: false,GridBorder: false,},
        				title : {Text:"영업대표별 5월 목표/실적",Subtitle:"(단위:백만원)",OffsetY:12,FontStyle:"bold 14px Verdana"},
        				yaxis:{
        					Use: false
        					,LabelsOffsetX:-15
        					,Tickmarks:false
        					,Color:"#E2E2E2"
        					,Scale:false
        				},
        				grouping: 'stacked',
        				xaxis:{
        					Labels:['bind:salesman']
        					,Color:"#E2E2E2"
        					,LabelsOffsetY:5
        					,Tickmarks:true
        				},
        				//month : DxChart.convertDataset(this.dsYearMonthly, ["bind:month"], null, "linear"),
        				margin: {LeftAuto : false,
        						Left: 10,
        						Top: 40,
        						Right: 10,
        						Bottom: 50,
        						Inner: 35,
        				},
        				colorsStroke: 'white',
        				linewidth: 1,
        				shadow:{Color: '#ccc',Offsetx: 0,Offsety: 0, Blur: 10},
        				labels:{
        					Above: true,
        					//AboveDecimals: 2,
        					AboveColor: '#333',
        					AboveBold: true,
        					AboveItalic: true,
        				    AboveFormatter : function(e)
        				    {
        						var sValue = "";

        						if(e.number>=0)
        						{
        							e.formatter = null
        							e.number = (e.number/1000).toFixed(2);
        							sValue = DxChart.numberFormat(e);
        						}

        						return sValue;
        					},
        				},
        				key: {
        						Data: this.fvContractTypeList
        						,Position :'margin'
        						,Valign :'bottom'
        						, PositionOffsetY : 20
        						,PositionMarginHSpace: 15
        					},
        			}
        		}).draw();
        /*
        	var bar1 = new DxChartBar({
        			id: cvs,
        			elem : canvas,
        			binddataset : this.dsMonthSalesman,
        			data:["bind:performance_type1","bind:performance_type2","bind:performance_type3","bind:performance_type4","bind:performance_type5"],
        			options: {
        				background:{GridVlines: false,GridHlines: false,GridBorder: false,},
        				yaxis:{
        					Use: false
        					,LabelsOffsetX:-15
        					,Tickmarks:false
        					,Color:"#E2E2E2"
        					,Scale:false,
        				},
        				grouping: 'stacked',
        				xaxis:{
        				    Use : false
        					,Labels:['bind:salesman']
        					,Color:"#E2E2E2"
        					,LabelsOffsetY:5
        					,Tickmarks:false
        					, Scale:false
        				},
        				//month : DxChart.convertDataset(this.dsYearMonthly, ["bind:month"], null, "linear"),
        				margin: {LeftAuto : false,
        						Left: 70,
        						Top: 40,
        						Right: 10,
        						Bottom: 50,
        						Inner: 35,
        				},
        				colorsStroke: 'white',
        				linewidth: 1,
        				shadow:{Color: '#ccc',Offsetx: 0,Offsety: 0, Blur: 10},
        				labels:{
        					Above: true,
        					//AboveDecimals: 2,
        					AboveColor: '#333',
        					AboveBold: true,
        					AboveItalic: true,
        				    AboveFormatter : function(e)
        				    {
        						var sValue = "";

        						if(e.number>=0)
        						{
        							e.formatter = null
        							e.number = (e.number/1000).toFixed(2);
        							sValue = DxChart.numberFormat(e);
        						}

        						return sValue;
        					},
        				},

        			}
        		}).draw();
        */
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.testSalesReport_onload,this);
        };
        this.loadIncludeScript("salesReport.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
