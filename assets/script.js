var apiKey = "5c112f19c172b63b93c28d6e55350a6e";
var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + "city" +  "&appid=" + apiKey;
var city = "";
var cityInput = $("#city-input");
var searchBtn = $("#search-button");
var pastSearch = $("#past-search");
var currentCity;

