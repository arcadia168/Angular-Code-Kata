'use strict';

describe('main app page', function() {
  it('should show the main app page and load hotels', function() {
    browser.get('http://localhost:9000');

    var firstHotel = element.all(by.repeater('hotel in hotelListings')).get(0);

    expect(firstHotel.isPresent()).toBeTruthy();
  });

  it('should show the sort hotels be descending', function() {
    browser.get('http://localhost:9000');

    //select sort button
    var sortButton = element(by.css('.sort-btn'));

    //click the button
    sortButton.click();

    //get the first hotel listed now
    var firstHotel = element.all(by.repeater('hotel in hotelListings')).get(0);

    //expect this hotel's rating to be 5 stars
    var rating = firstHotel.element(by.css('.ratingAsNum'));
    expect(rating.getText()).toEqual('(5)');
  });

  it('should show the sort hotels be ascending', function() {
    browser.get('http://localhost:9000');

    //select sort button
    var sortButton = element(by.css('.sort-btn'));

    //click the button
    sortButton.click();

    //click again to sort ascending
    sortButton.click();

    //get the first hotel listed now
    var firstHotel = element.all(by.repeater('hotel in hotelListings')).get(0);

    //expect this hotel's rating to be 5 stars
    var rating = firstHotel.element(by.css('.ratingAsNum'));
    expect(rating.getText()).toEqual('(3)');
  });

  it('should filter hotels with car parks', function() {
    browser.get('http://localhost:9000');

    //select search field
    var searchField = element(by.css('.search-query'));

    //enter 'car park' query into field
    searchField.sendKeys('car park');

    //get the first hotel listed now
    var resultsCount = element.all(by.repeater('hotel in hotelListings')).count();

    //expect 2 results to be returned
    expect(resultsCount).toEqual(2);
  });

  it('should filter hotels with a pool', function() {
    browser.get('http://localhost:9000');

    //select search field
    var searchField = element(by.css('.search-query'));

    //enter 'car park' query into field
    searchField.sendKeys('pool');

    //get the first hotel listed now
    var resultsCount = element.all(by.repeater('hotel in hotelListings')).count();

    //expect 2 results to be returned
    expect(resultsCount).toEqual(1);
  });

  it('should filter hotels with a gym', function() {
    browser.get('http://localhost:9000');

    //select search field
    var searchField = element(by.css('.search-query'));

    //enter 'car park' query into field
    searchField.sendKeys('gym');

    //get the first hotel listed now
    var resultsCount = element.all(by.repeater('hotel in hotelListings')).count();

    //expect 2 results to be returned
    expect(resultsCount).toEqual(1);
  });

});
