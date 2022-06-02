Feature: login Using Excel

Scenario Outline: Successful login with credentials from excel 
    Given User Launch Chrome Browser
    When User Opens URL "https://admin-demo.nopcommerce.com/login"
    And Users fills login details from "<sheetName>" and rowNumber <RowNumber>
    And Click on Login
    Then Page Title should be "Dashboard / nopCommerce administration"
    When User Logout
    And Close Browser
    
    Examples:
    |sheetName|RowNumber|
    |contactus|2|
