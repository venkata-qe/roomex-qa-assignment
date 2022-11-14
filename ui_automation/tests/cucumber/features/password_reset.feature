Feature: Login feature for roomex app

  Background: open roomex app
    Given I open the roomex login page

  Scenario: Scenario Outline name: when invalid email is provided on password rest page, UI throws validation error
    When I navigate to password reset page
    And I enter the invalidUsername
      | invalidUsername |
      | bob@roomex.com  |
    And I click reset password button
    Then I should see email id does not exist error message