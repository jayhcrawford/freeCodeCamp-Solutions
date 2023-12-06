/*
This will be pretty easy too--none of these challenges have high expectations. I am glad that I am doing them 
before finishing all of the course content. But it's obvious to me that I will need to get cracking at projects
as soon as possible. 

Here is the prompt for this one: 

Telephone Number Validator
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. 
The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. 
Your job is to validate or reject the US phone number based on any combination of the formats provided above.
The area code is required. If the country code is provided, you must confirm that the country code is 1. 
Return true if the string is a valid US phone number; otherwise return false.
(close prompt)



My instincts are telling me to use RegExp to take out any non-numeric characters, and then go through
a series of "If" statements.
*/

function telephoneCheck(str) {
    return true;
  }
  
  telephoneCheck("555-555-5555");