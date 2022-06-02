package utilities;

import java.time.Duration;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class manageWait {
	
	public WebDriver driver;
	
	public manageWait(WebDriver driver) {
		this.driver = driver;
	}
	
	public void waitForElement(WebElement element,Duration timeoutInSeconds) {
		WebDriverWait wait = new WebDriverWait(driver,timeoutInSeconds);
		wait.until(ExpectedConditions.visibilityOf(element));
	}
}
