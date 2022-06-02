
Feature: Login
  
Scenario: Successful login with Valid credentials
    Given User Launch Chrome Browser
    When User Opens URL "https://admin-demo.nopcommerce.com/login"
    And Users enters Email as "admin@yourstore.com" and Password as "admin"
    And Click on Login
    Then Page Title should be "Dashboard / nopCommerce administration"
    When User Logout
    And Close Browser
    
    