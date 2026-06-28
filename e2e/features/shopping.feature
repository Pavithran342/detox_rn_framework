Feature: Shopping journey
  As a user
  I want to authenticate, manage my cart, and complete checkout

  @smoke
  Scenario: Valid login
    Given I launch the app
    When I log in with valid credentials
    Then I should see the products screen

  @regression
  Scenario: Invalid login
    Given I launch the app
    When I log in with invalid credentials
    Then I should see an authentication error

  @smoke
  Scenario: Add product to cart
    Given I launch the app
    When I log in with valid credentials
    And I add the first product to the cart
    Then I should see the product in the cart

  @regression
  Scenario: Remove product from cart
    Given I launch the app
    When I log in with valid credentials
    And I add the first product to the cart
    And I remove the product from the cart
    Then I should see an empty cart message

  @regression
  Scenario: Successful checkout
    Given I launch the app
    When I log in with valid credentials
    And I add the first product to the cart
    And I proceed to checkout
    Then I should see a success confirmation
