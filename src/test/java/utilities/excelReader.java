package utilities;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Calendar;


import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFCellStyle;
import org.apache.poi.xssf.usermodel.XSSFCreationHelper;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class excelReader {

	public String[][] returnCellValue(String sheetName, int rowNumber) throws IOException {
	
	String excelFilePath=System.getProperty("user.dir")+"/testSheet.xlsx";

	File f=new File(excelFilePath);
	FileInputStream fsm = new FileInputStream(f);
	XSSFWorkbook  excelWorkbook = new XSSFWorkbook(fsm);
	XSSFSheet excelSheet = excelWorkbook.getSheetAt(0);
    
	int rows = excelSheet.getPhysicalNumberOfRows();
	int cols = excelSheet.getRow(0).getPhysicalNumberOfCells();
	
	String data[][] = new String[rows][cols];
	
	XSSFCell cell;
	
	for(int i=0; i< rows;i++) {
			for(int j=0;j<cols;j++) {
				cell = excelSheet.getRow(i).getCell(j);
				String cellContents =cell.getStringCellValue();
				data[i][j] = cellContents;	
			}	
	}
	fsm.close();
	return data;

	}
}