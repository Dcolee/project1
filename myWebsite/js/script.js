//Created an array of objects for my five quotes
var quotes = [
 {quote: "Love all, trust a few, do wrong to none.",
  source: "William Shakespeare",
  year: "1602"
},

{ quote: "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
  source: "J.K. Rowling",
  citation:"Harry Potter and the Sorcerer's Stone"
},
 

 {quote: "Love is that condition in which the happiness of another person is essential to your own.",
  source: "Robert A. Heinlein",
  citation: "Stranger in a Strange Land",
  year: "1961"
},
  
{quote: "There is no greater agony than bearing an untold story inside you.",
 source: "Maya Angelou",
 citation: "I Know Why the Caged Bird Sings",
 year:"1969"
  },

{quote: "It's the possibilty of having a dream come true that makes life interesting.",
 source: "Paulo Coelho",
 citation:"The Alchemist",
 year: "1988"
    }
];



// Created a function that picks out a quote from my quotes array


function getRandomQuote() {
var objectNum = Math.floor(Math.random()*quotes.length);
return quotes[objectNum];
}





// This function takes the getRandomQuote function and prints the quote and it's other properties to the webpage 
function printQuote(){
  var ranQuote = getRandomQuote();
  var webpage = '';
  webpage += '<p class="quote">' + ranQuote.quote + '</p>';
  webpage += '<p class="source">' + ranQuote.source
   if (ranQuote.citation){
   webpage += '<span class="citation">' + ranQuote.citation + '</span>';
}
if(ranQuote.year){
  webpage += '<span class="year">' + ranQuote.year + '</span>';
}
webpage += '</p>';
  document.getElementById("quote-box").innerHTML = webpage;
  return webpage;
}




// this will call the printQuote function  when the "Show another quote" button is clicked

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


