package stepDefinitions;

import java.io.FileInputStream;
import java.io.IOException;

import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.loginPage;
import utilities.excelReader;

public class loginPageSteps {

	public WebDriver driver;
	public loginPage pg1;
	
@Given("^User Launch Chrome Browser$")
public void user_Launch_Chrome_Browser() {
    
	System.setProperty("webdriver.chrome.driver",System.getProperty("user.dir")+".//Drivers/chromedriver.exe");
	driver = new ChromeDriver();
	driver.manage().window().maximize();
	pg1 = new loginPage(driver);
	
}

@When("^User Opens URL \"([^\"]*)\"$")
public void user_Opens_URL(String url)  {
	driver.get(url);
}

@When("^Users enters Email as \"([^\"]*)\" and Password as \"([^\"]*)\"$")
public void users_enters_Email_as_and_Password_as(String email, String password) throws InterruptedException  {
   pg1.userName(email);
   pg1.userPassword(password);
}

@When("^Users fills login details from \"([^\"]*)\" and rowNumber (\\d+)$")
public void users_fills_login_details_from_and_rowNumber(String sheetName, int rowNumber) throws InterruptedException, IOException  {
	
	String UserName = null, Password = null;
	String excelFilePath="C:\\Users\\PC\\Desktop\\2022\\study3\\automation\\testSheet.xlsx";
	FileInputStream inputstream=new FileInputStream(excelFilePath);
	
	XSSFWorkbook workbook=new XSSFWorkbook(inputstream);
	XSSFSheet sheet=workbook.getSheetAt(0);	//XSSFSheet sheet=workbook.getSheet("Sheet1");
	
	int rows = sheet.getLastRowNum();
	
	for(int r = 2; r<=rows;r++) {
		XSSFRow row = sheet.getRow(r);
		 UserName = row.getCell(1).getStringCellValue();
		 Password = row.getCell(2).getStringCellValue();
	}
	
	pg1.userName(UserName);
	pg1.userName(Password);
	
	
	/* previous Code
	//String sheetName1 = "contactus";
	//int rowNumber1 = 2;
	loginPage lp3 = new loginPage(driver);
	
	excelReader reader = new excelReader("/testSheet.xlsx");
	//String sheetName1 = "contactus";
	
	String uName =reader.getCellData(sheetName, "UserName", rowNumber);
	String uPassword = reader.getCellData(sheetName, "Password", rowNumber);
	System.out.println("data in caell is:"+uName);
	System.out.println("data in caell is:"+uPassword);
	lp3.userName(uName);
	lp3.userPassword(uPassword);
    */
}

@When("^Click on Login$")
public void click_on_Login() throws InterruptedException {
  pg1.clickLoginButton();
}

@Then("^Page Title should be \"([^\"]*)\"$")
public void page_Title_should_be(String title) {
   Assert.assertEquals(title,driver.getTitle());
}

@When("^User Logout$")
public void user_Logout() throws InterruptedException  {
    pg1.clickLogoutButton();
}

@When("^Close Browser$")
public void close_Browser()  {
  driver.quit();
}

}
