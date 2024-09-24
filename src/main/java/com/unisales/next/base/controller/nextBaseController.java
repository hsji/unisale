package com.unisales.next.base.controller;

import java.io.File;
import java.io.IOException;
import java.io.Reader;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.parser.ParseException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.ibatis.common.resources.Resources;
import com.nexacro.java.xapi.data.ColumnHeader;
import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.DataTypes;
import com.nexacro.uiadapter.spring.core.NexacroException;
import com.nexacro.uiadapter.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter.spring.core.data.NexacroResult;
import com.unisales.next.base.service.nextBaseService;
import com.unisales.util.NexterUtil;

/**
 * <pre>
 * @title   AuthInfoController
 * @desc    System 정보 관리 Controller (권한정보)         
 * @package com.dxtobe.sytm.controller
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

@Controller
public class nextBaseController {
	private Logger log = LoggerFactory.getLogger(nextBaseController.class);
	
	@Autowired(required=true)
    private nextBaseService commBaseService;

	/**
	 * 단건 조회
	 * @param searchMap		: 조회할 Dataset
	 * @param queryMap		: 조회할 쿼리맵정보
	 * @return result		: 데이터 셋
	 */	
	@RequestMapping(value = "/selectNextList.do")
	public NexacroResult selectNextList(@ParamDataSet(name = "dsCond", required = false) Map<String,Object> searchMap 
		    , @ParamDataSet(name = "dsMap", required = false) Map<String,String> queryMap
			, HttpServletRequest request) throws NexacroException, IOException, SQLException{

    	// 공통코드 목록을 조회한다.
    	List<Map<String,Object>> contents = commBaseService.searchList(queryMap, searchMap);
    	
	    String outds = (String) queryMap.get("outds");
	    if(outds == null) outds = "dsList";
	    NexacroResult result = new NexacroResult();
		result.addDataSet(outds, contents);
		
		return result;
	} 
	
	/**
	 * 다건 조회
	 * @param searchMap		: 조회할 Dataset
	 * @param queryMap		: 조회할 쿼리맵정보
	 * @return result		: 데이터 셋
	 */	
	@RequestMapping(value = "/selectNextMultiList.do")
	public NexacroResult selectNextMultiList(@ParamDataSet(name = "dsCond", required = false) Map<String,Object> searchMap 
			, @ParamDataSet(name = "dsMap", required = false) List<Map<String,String>> queryList
			, HttpServletRequest request) throws NexacroException, IOException, SQLException{

	    NexacroResult result = new NexacroResult();
	    
    	int size = queryList.size();
    	for(int i=0;i<size;i++) {
    		Map<String, String> queryMap = queryList.get(i);
    	    List<Map<String,Object>> list  = commBaseService.searchList(queryMap, searchMap);	
    	    String outds = (String) queryMap.get("outds");
    	    result.addDataSet(outds, list);
    	}
		
		return result;
	} 	
	
	/**
	 * 공통 추가/수정
	 * @param saveMap		: 저장할 Dataset
	 * @return result		: 데이터 셋
	 * @throws ParseException 
	 * @throws IOException 
	 */
    @RequestMapping(value = "/saveNextCompanyList.do")
	public NexacroResult saveNextCompanyList(@ParamDataSet(name = "dsList1", required = false) List<Map<String,Object>> dsList1
										, @ParamDataSet(name = "dsList2", required = false) List<Map<String,Object>> dsList2
										, @ParamDataSet(name = "dsList3", required = false) List<Map<String,Object>> dsList3
										, @ParamDataSet(name = "dsList4", required = false) List<Map<String,Object>> dsList4
										, @ParamDataSet(name = "dsMap", required = false) Map<String,String> queryMap
										, @ParamDataSet(name = "dsCond", required = false) Map<String,Object> searchMap 
										, HttpServletRequest request) throws NexacroException, IOException, ParseException{
    	NexterUtil NexUtil = new NexterUtil();

    	// Login 사용자 정보를 받은 Map
    	Map<String, Object> loginUserInfo = NexUtil.getUserInfoMap(request);
    	
    	String compCd = queryMap.get("COMPANY_CODE");
    	String companyCd = "";
    	// 생성
    	if(compCd == null) {
    		Map<String,String> newMap = new HashMap<>();
    		newMap.put("map"	, "nextBaseMapper");
    		newMap.put("mapid"	, "selectNewCompanyCode");    		
    		Map<String,Object> codeMap  = commBaseService.searchMap(newMap, searchMap);
    		companyCd = (String) codeMap.get("NEW_COMPANY_CODE");
    	}
    	
    	for(int i=0;i<4;i++) {
        	// 추가/수정
    		List<Map<String,Object>> input = null;
    		if(i==0) input = dsList1;
    		else if(i==1) input = dsList2;
    		else if(i==2) input = dsList3;
    		else if(i==3) input = dsList4;
        	commBaseService.saveCompanyList(searchMap, queryMap, input, loginUserInfo, companyCd);
    		
    	}
    	
		NexacroResult result = new NexacroResult();
		return result;
	}  	
    
    /**
	 * 파일다운로드 후 다운로드된 서버 파일 삭제
	 * @param request		: N/A
	 * @return uuid : 서버에 저장하는 파일명 생성 후 return
	 */	    
	private static String getUuid() { 
		return UUID.randomUUID().toString().replaceAll("-", ""); 
	}
	
    /**
 	 * 파일Upload
 	 * @param request		: Http Request
 	 * @param response		: Http response
 	 * @return nexacroResult	: 데이터 셋
 	 */	    
     @RequestMapping("/saveNextFileUpload.do")
     public NexacroResult saveNextFileUpload(HttpServletRequest request, HttpServletResponse response) throws Exception {
 	    	
     	NexterUtil NexUtil = new NexterUtil();

     	// Login 사용자 정보를 받은 Map
     	Map<String, Object> loginUserInfo = NexUtil.getUserInfoMap(request);
     	
     	Properties properties = new Properties();
        Reader reader = Resources.getResourceAsReader("file.properties");
        properties.load(reader);
        String path = properties.getProperty("uploadPath");
        
     	
     	List<Map<String,Object>> inDs = new ArrayList<Map<String,Object>>();
     	
     	DataSet dsIsrtFiles = new DataSet("dsInsertFile");
     	DataSet dsDeltFiles = new DataSet("dsDeleteFile");
     	
     	MultipartHttpServletRequest mhsr = (MultipartHttpServletRequest) request;
     	Iterator<String> iter = mhsr.getFileNames();
     	
    	String sourceCd  = mhsr.getParameter("sourceCd");
    	String sourceSeq = mhsr.getParameter("sourceSeq");
    	String statusCd  = mhsr.getParameter("statusCd");
    	String insertDs  = mhsr.getParameter("insertDs");
    	String deleteDs  = mhsr.getParameter("deleteDs");
    	
    	dsIsrtFiles.loadXml(insertDs);
    	dsDeltFiles.loadXml(deleteDs);

     	MultipartFile mfile = null; 
     	String fieldName = ""; 
     	
     	File dir = new File(path); 
     	if (!dir.isDirectory()) { 
     		dir.mkdirs(); 
     	}
     	
     	int row = 0;
     	    	
 		// 값이 나올때까지 
 		while (iter.hasNext()) { 
 			fieldName = (String)iter.next();
 			
 			// 내용을 가져와서 
 			mfile = mhsr.getFile(fieldName); 
 			String origName; 
 			//origName = new String(mfile.getOriginalFilename().getBytes("8859_1"), "UTF-8");
 			origName = mfile.getOriginalFilename();

 			// 파일명이 없다면 
 			if ("".equals(origName)) {
 				continue; 
 			} 
 			// 파일 명 변경(uuid로 암호화) 
 			String ext = origName.substring(origName.lastIndexOf('.')); 
 			ext = ext.replace(".", "");
 			
 			String saveFileName = getUuid(); 
 			String sCd = dsIsrtFiles.getString(row, "SOURCE_CD");
 			String serverPath = path + File.separator + sCd + File.separator + saveFileName;
 			File serverFile = new File(serverPath); 
 			mfile.transferTo(serverFile); 
 			
 			Map<String,Object> inMap = new HashMap<>();
			
			inMap.put("SOURCE_CD"		, dsIsrtFiles.getString(row, "SOURCE_CD"));
			inMap.put("SOURCE_SEQ"		, dsIsrtFiles.getString(row, "SOURCE_SEQ"));
	    	inMap.put("STATUS_CD"		, dsIsrtFiles.getString(row, "STATUS_CD"));
	    	inMap.put("FM_SEQ"			, dsIsrtFiles.getString(row, "FM_SEQ"));
	    	
	    	inMap.put("FILE_NAME"		, origName);
	    	inMap.put("SAVE_FILE_NAME"	, saveFileName);
	    	inMap.put("FILE_SIZE"		, mfile.getSize());
	    	inMap.put("FILE_TYPE"		, ext);
	    	inMap.put("SAVE_PATH"		, serverPath);
	    	
	    	commBaseService.insertFileMapUserMap("MapFile", inMap, loginUserInfo);
	    	commBaseService.insertFileMapUserMap("MasterFile", inMap, loginUserInfo);
	    	
	    	row++;
 		}
 		
 		if(dsDeltFiles.getRowCount() > 0) {
 			Map<String,Object> inMap = new HashMap<>();
 			for(int i=0,len=dsDeltFiles.getRowCount();i<len;i++) {
 	 			String sCd 	= dsDeltFiles.getString(i, "SOURCE_CD");
 				String fileName = dsDeltFiles.getString(i, "SAVE_FILE_NAME");
 				inMap.put("SOURCE_CD"		, sCd);
 				inMap.put("SOURCE_SEQ"		, dsDeltFiles.getString(i, "SOURCE_SEQ"));
 		    	inMap.put("STATUS_CD"		, dsDeltFiles.getString(i, "STATUS_CD"));
 				inMap.put("FM_SEQ"			, dsDeltFiles.getString(i, "FM_SEQ"));
 				inMap.put("SOURCE_CD"		, dsDeltFiles.getString(i, "FILE_SEQ"));
 				inMap.put("SAVE_FILE_NAME"	, fileName);
 				
 				commBaseService.deleteFileMapUserMap("MasterFile", inMap, loginUserInfo);
 				
 	 			String serverPath = path + File.separator + sCd + File.separator + fileName;
 	 			
 		        File f = new File(serverPath);
 				if(f.exists()) {
 					f.delete();
 				}
 			}
 		}

         NexacroResult nexacroResult = new NexacroResult();
         return nexacroResult;    	
     }    
}
