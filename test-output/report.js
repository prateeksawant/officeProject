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
  "duration": 31245020799,
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
  "duration": 5126946201,
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
  "duration": 6607173400,
  "status": "passed"
});
formatter.match({
  "location": "loginPageSteps.click_on_Login()"
});
formatter.result({
  "duration": 10382101600,
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
  "duration": 15618100,
  "status": "passed"
});
formatter.match({
  "location": "loginPageSteps.user_Logout()"
});
formatter.result({
  "duration": 12191663700,
  "status": "passed"
});
formatter.match({
  "location": "loginPageSteps.close_Browser()"
});
formatter.result({
  "duration": 1723961500,
  "status": "passed"
});
});