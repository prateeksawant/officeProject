package pageObjects;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class loginPage {

	public WebDriver ldriver;
	
	@FindBy(xpath="//input[@id='Email']")
	@CacheLookup
	WebElement emailTextbox;
	
	@FindBy(xpath="//input[@id='Password']")
	@CacheLookup
	WebElement passwordTextbox;
	
	@FindBy(xpath="//a[@href='/logout']")
	@CacheLookup
	WebElement logoutButton;
	
	@FindBy(xpath="//button[@type='submit']")
	@CacheLookup
	WebElement loginButton;
	
	public loginPage(WebDriver driver) {
	this.ldriver = driver;
	PageFactory.initElements(driver, this);
	}
	
	public void userName(String email) throws InterruptedException {
		Thread.sleep(3000);
		emailTextbox.clear();
		emailTextbox.sendKeys(email);
	}
	public void userPassword(String password) throws InterruptedException{
		Thread.sleep(3000);
		passwordTextbox.clear();
		passwordTextbox.sendKeys(password);
	}
	
	public void clickLoginButton() throws InterruptedException {
		Thread.sleep(3000);
		loginButton.click();
	}
	public void clickLogoutButton() throws InterruptedException {
		Thread.sleep(10000);
		JavascriptExecutor js = ((JavascriptExecutor)ldriver);
		js.executeScript("arguments[0].click();", logoutButton);
	//	logoutButton.click();
	}
}
