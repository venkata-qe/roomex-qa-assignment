Feature: Login feature for roomex app

    Background: open roomex app
        Given I open the roomex login page

    Scenario: As an invalid user, I can not log into the roomex app
        When I click the login button
        Then I should see a invalid email error message
        And I should see a invalid password error message

# Add test for another language
