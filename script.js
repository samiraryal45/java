const quote = document.querySelector(".quote");
const button = document.querySelector("button");
const person = document.querySelector(".name");

const quotes=[
    {
        quote : `"The you within you cannot be defined by other's opinion"`,
        person : `Samir Aryal`
    },
    {
        quote : `“Be yourself; everyone else is already taken.”`,
        person : `Oscar Wilde`
    },
    {
        quote : `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
        person : `Albert Einstein`
    }, {
        quote : `“You only live once, but if you do it right, once is enough.”`,
        person : `Mea West`
    },, {
        quote : `“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”`,
        person : `J.K. Rowling` 
    }, {
        quote : `“Without music, life would be a mistake.”`,
        person : `Freidrich Nichtze`
    }, {
        quote : `“It is better to be hated for what you are than to be loved for what you are not.”`,
        person : `Andie Gide`
    }
]

button.addEventListener("click",function(){
  let random = Math.floor(Math.random()* quotes.length);
  quote.innerText= quotes[random].quote;
  person.innerText= " - " + quotes[random].person;



})