$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("loginUsingData.feature");
formatter.feature({
  "line": 1,
  "name": "login Using Excel",
  "description": "",
  "id": "login-using-excel",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Successful login with credentials from excel",
  "description": "",
  "id": "login-using-excel;successful-login-with-credentials-from-excel",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
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
  "name": "Users fills login details from \"\u003csheetName\u003e\" and rowNumber \u003cRowNumber\u003e",
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
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "login-using-excel;successful-login-with-credentials-from-excel;",
  "rows": [
    {
      "cells": [
        "sheetName",
        "RowNumber"
      ],
      "line": 14,
      "id": "login-using-excel;successful-login-with-credentials-from-excel;;1"
    },
    {
      "cells": [
        "contactus",
        "1"
      ],
      "line": 15,
      "id": "login-using-excel;successful-login-with-credentials-from-excel;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Successful login with credentials from excel",
  "description": "",
  "id": "login-using-excel;successful-login-with-credentials-from-excel;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
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
  "name": "Users fills login details from \"contactus\" and rowNumber 1",
  "matchedColumns": [
    0,
    1
  ],
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
  "duration": 13654571300,
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
  "duration": 2596758700,
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
  "duration": 2376000500,
  "status": "passed"
});
formatter.match({
  "location": "loginPageSteps.click_on_Login()"
});
formatter.result({
  "duration": 8067977900,
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
  "duration": 1141838600,
  "status": "passed"
});
formatter.match({
  "location": "loginPageSteps.user_Logout()"
});
formatter.result({
  "duration": 2084358800,
  "status": "passed"
});
formatter.match({
  "location": "loginPageSteps.close_Browser()"
});
formatter.result({
  "duration": 1404713800,
  "status": "passed"
});
});