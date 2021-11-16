Feature: Search and print results

    Scenario Outline: Search 'Pilas' on Ebay platform and print the number of items from the search results.   
        Given I am on Home page
        When I search for a <product> product
        Then I wait for the search result to be displayed
        Then I print on console the number of product <product> displayed as result of the search
        
        
        Examples:
            | product    | 
            | pilas      | 