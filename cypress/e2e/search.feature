Feature: Search Feature
  As a user
  I want to search for content on the application

  Scenario: User searches for a keyword that exists on the website
    Given the user is on the homepage
    When the user enters "zero" in the search bar
    Then the search results page should be displayed
   

  # Scenario: User searches for a keyword that does not exist on the website
  #   Given the user is on the homepage
  #   When the user enters "abcd" in the search bar
  #   And the user clicks hit enter button
  #   Then the message "No results found" should be displayed
