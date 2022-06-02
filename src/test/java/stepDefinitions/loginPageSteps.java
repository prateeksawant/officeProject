package stepDefinitions;

import java.io.IOException;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
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
	
	excelReader reader = new excelReader()	;
	String[][] data1=  reader.returnCellValue(sheetName,rowNumber);
	 
	 pg1.userName(data1[1][0]);
	 pg1.userPassword(data1[1][1]);
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
