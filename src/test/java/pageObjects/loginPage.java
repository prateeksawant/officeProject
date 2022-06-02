package pageObjects;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import utilities.manageWait;

public class loginPage {

	public WebDriver ldriver;
	manageWait wait ;
	
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
	wait = new manageWait(ldriver);
	}
	
	public void userName(String email) {
		wait.waitForElement(emailTextbox,30);
		emailTextbox.clear();
		emailTextbox.sendKeys(email);
	}
	public void userPassword(String password) {
		wait.waitForElement(passwordTextbox,30);
		passwordTextbox.clear();
		passwordTextbox.sendKeys(password);
	}
	
	public void clickLoginButton()  {
		wait.waitForElement(loginButton,30);
		loginButton.click();
	}
	public void clickLogoutButton() {
		wait.waitForElement(logoutButton,30);
		JavascriptExecutor js = ((JavascriptExecutor)ldriver);
		js.executeScript("arguments[0].click();", logoutButton);
	//	logoutButton.click();
	}
}
