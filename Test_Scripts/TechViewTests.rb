#!/usr/bin/env ruby
require 'rubygems'
require "watir-webdriver"
browser = Watir::Browser.new :ff

# Checks for page redirection
browser.goto "techview.herokuapp.com"
if (browser.url == "http://ec2-107-20-111-184.compute-1.amazonaws.com/EECS-394---TechView/index.php")
	puts "Redirects to AWS page"
else
	puts "Redirect failed"
end

# Checks that Ground Floor Image loads on home page
if( browser.image(:src => 'tech_maps/1.png').exists?)
	 puts "Ground floor image loaded on home page"
else
	puts "Ground floor image NOT loaded"
end 

# Checks that Search Bar loads on home page
if( browser.input(:id => 'room_input').exists?)
	 puts "Search loaded on home page"
else
	puts "Search NOT loaded"
end 

# Checks that search for a known room shows up on the map
browser.text_field(:id => "room_input").set "LR2"

if (browser.div(:class => "room_label_divs").text == "LR2")
	puts "LR2 shows up on map after entering into search bar"
else
	puts "Did not find LR2 on map"
end

browser.close