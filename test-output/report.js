$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("./Features/login.feature");
formatter.feature({
  "line": 2,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Successful login with Valid credentials",
  "description": "",
  "id": "login;successful-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User Launch Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User Opens URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Users enters Email as \"admin@yourstore.com\" and Password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User Logout",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "loginPageSteps.user_Launch_Chrome_Browser()"
});
formatter.result({
  "duration": 6339924200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login",
      "offset": 16
    }
  ],
  "location": "loginPageSteps.user_Opens_URL(String)"
});
formatter.result({
  "duration": 3826452200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 23
    },
    {
      "val": "admin",
      "offset": 61
    }
  ],
  "location": "loginPageSteps.users_enters_Email_as_and_Password_as(String,String)"
});
formatter.result({
  "duration": 477632500,
  "status": "passed"
});
formatter.match({
  "location": "loginPageSteps.click_on_Login()"
});
formatter.result({
  "duration": 5272091900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "loginPageSteps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 50510400,
  "status": "passed"
});
formatter.match({
  "location": "loginPageSteps.user_Logout()"
});
formatter.result({
  "duration": 32483107400,
  "status": "passed"
});
formatter.match({
  "location": "loginPageSteps.close_Browser()"
});
formatter.result({
  "duration": 1690923800,
  "status": "passed"
});
formatter.uri("./Features/loginUsingData.feature");
formatter.feature({
  "line": 1,
  "name": "login Using Excel",
  "description": "",
  "id": "login-using-excel",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Successful login with credentials from excel",
  "description": "",
  "id": "login-using-excel;successful-login-with-credentials-from-excel",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User Launch Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Opens URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Users fills login details from \"\u003csheetName\u003e\" and rowNumber \u003cRowNumber\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User Logout",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Close Browser",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "login-using-excel;successful-login-with-credentials-from-excel;",
  "rows": [
    {
      "cells": [
        "sheetName",
        "RowNumber"
      ],
      "line": 13,
      "id": "login-using-excel;successful-login-with-credentials-from-excel;;1"
    },
    {
      "cells": [
        "contactus",
        "1"
      ],
      "line": 14,
      "id": "login-using-excel;successful-login-with-credentials-from-excel;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Successful login with credentials from excel",
  "description": "",
  "id": "login-using-excel;successful-login-with-credentials-from-excel;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User Launch Chrome Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User Opens URL \"https://admin-demo.nopcommerce.com/login\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Users fills login details from \"contactus\" and rowNumber 1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Page Title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User Logout",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Close Browser",
  "keyword": "And "
});
formatter.match({
  "location": "loginPageSteps.user_Launch_Chrome_Browser()"
});
formatter.result({
  "duration": 9050574700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login",
      "offset": 16
    }
  ],
  "location": "loginPageSteps.user_Opens_URL(String)"
});
formatter.result({
  "duration": 20391143400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "contactus",
      "offset": 32
    },
    {
      "val": "1",
      "offset": 57
    }
  ],
  "location": "loginPageSteps.users_fills_login_details_from_and_rowNumber(String,int)"
});
formatter.result({
  "duration": 4307584300,
  "status": "passed"
});
formatter.match({
  "location": "loginPageSteps.click_on_Login()"
});
formatter.result({
  "duration": 9280055300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "loginPageSteps.page_Title_should_be(String)"
});
formatter.result({
  "duration": 13121500,
  "status": "passed"
});
formatter.match({
  "location": "loginPageSteps.user_Logout()"
});
formatter.result({
  "duration": 2747510300,
  "status": "passed"
});
formatter.match({
  "location": "loginPageSteps.close_Browser()"
});
formatter.result({
  "duration": 905649500,
  "status": "passed"
});
});