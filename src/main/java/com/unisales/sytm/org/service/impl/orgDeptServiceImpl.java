package com.unisales.sytm.org.service.impl;

import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.nexacro.uiadapter.spring.core.data.DataSetRowTypeAccessor;
import com.unisales.sytm.org.service.orgDeptService;
import com.nexacro.java.xapi.data.DataSet;

/**
 * <pre>
 * @title   AuthInfoService
 * @desc    System 정보 관리 service Implementation (권한정보)
 * -        
 * @package com.dxtobe.sytm.impl
 * <pre>
 * 
 * @author  TOBESOFT
 * @since   2019. 05. 09.
 * @version 1.0
 * @see
 * =================== 변경 내역 ==================
 * 날짜			변경자		내용
 * ------------------------------------------------
 * 2019. 05. 09.		TOBESOFT	최초작성
 */
@Repository
public class orgDeptServiceImpl implements orgDeptService {

	@Autowired
    private SqlSessionTemplate sqlSession;
	
    @Override
    public List<Map<String,Object>> selectCommonDeptList(Map<String,String> search) {  	
    	return sqlSession.selectList("orgDeptMapper.selectCommonDeptList", search);
    }

    @Override
    public List<Map<String,Object>> selectDeptList(Map<String,String> search) {  	
    	return sqlSession.selectList("orgDeptMapper.selectDeptList", search);
    }
    
    @Override
    public List<Map<String,Object>> checkDeptCd(List<Map<String,String>> search) { 
        return sqlSession.selectList("orgDeptMapper.checkDeptCd", search);
    }    
    
    @Override
    public void saveDeptInfo(List<Map<String,Object>> saveList, Map<String, Object> userInfo) {
        int size = saveList.size();
    	int rowType;
        for (int i=0; i<size; i++) {
            Map<String,Object> msgMap = saveList.get(i);
            
            msgMap.put("USER_ID_SRV", userInfo.get("USER_ID_SRV"));
            msgMap.put("USER_CON_IPADDR_SRV", userInfo.get("USER_CON_IPADDR_SRV"));
            
            rowType = Integer.parseInt(String.valueOf(msgMap.get(DataSetRowTypeAccessor.NAME)));
            
            if (rowType == DataSet.ROW_TYPE_INSERTED){
            	sqlSession.insert("orgDeptMapper.insertDeptInfo", msgMap);
            }else if (rowType == DataSet.ROW_TYPE_UPDATED){
            	sqlSession.update("orgDeptMapper.updateDeptInfo", msgMap);
            }else if (rowType == DataSet.ROW_TYPE_DELETED){
            	sqlSession.delete("orgDeptMapper.deleteDeptInfo", msgMap);
            }
        }	
    }
    
    @Override
    public void deleteDeptInfo(List<Map<String,Object>> delList) {

        int size = delList.size();
    	int rowType;
        for (int i=0; i<size; i++) {
            Map<String,Object> msgMap = delList.get(i);
            
            rowType = Integer.parseInt(String.valueOf(msgMap.get(DataSetRowTypeAccessor.NAME)));
            
            if (rowType == DataSet.ROW_TYPE_DELETED){
            	sqlSession.delete("orgDeptMapper.deleteDeptInfo", msgMap);
            }
        }
    }
    
    @Override
    public List<Map<String,Object>> selectCompanyMapList() { 
        return sqlSession.selectList("orgDeptMapper.selectCompanyMapList");
    }        
    
    @Override
    public List<Map<String,Object>> selectCompanyDocMapList() { 
        return sqlSession.selectList("orgDeptMapper.selectCompanyDocMapList");
    }               
}
