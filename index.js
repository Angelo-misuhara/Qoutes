let qoute = document.querySelector('.qoute-generator');
let btn = document.querySelector('#Btn');
let nameAuthor = document.querySelector('.name-author');

const arrayQuotes = [
  {
    quotes: "The love of money is the root of all evil.",
    person: "the Bible",
  },
  {
    quotes: "Be yourself; everyone else is already taken.",
    person: "Oscar Wilde",
  },
  {
    quotes: "The journey of a thousand miles begins with a single step.",
    person: "Lao Tzu",
  },
  {
    quotes: "The only way to do great work is to love what you do.",
    person: "Steve Jobs",
  },
  {
    quotes: "Imagination is more important than knowledge.",
    person: "Albert Einstein",
  },
  {
    quotes: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    person: "Helen Keller",
  },
  {
    quotes: "The only person you are destined to become is the person you decide to be.",
    person: "Ralph Waldo Emerson",
  },
  {
    quotes: "The future belongs to those who believe in the beauty of their dreams.",
    person: "Eleanor Roosevelt",
  },
  {
    quotes: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.",
    person: "Steve Jobs",
  },
  {
    quotes: "The best way to predict the future is to create it.",
    person: "Peter Drucker",
  },
  {
    quotes: "The mind is everything. What you think you become.",
    person: "Buddha",
  },
  {
    quotes: "The only thing that stands between you and your dream is the will to try and the belief that it is actually possible.",
    person: "Joel Brown",
  },
  {
    quotes: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    person: "Nelson Mandela",
  },
  {
    quotes: "Learn to love yourself first, because that's the only way you can truly love others.",
    person: "BTS",
  },
  {
    quotes: "Never give up on your dreams, no matter how far-fetched they may seem.",
    person: "Blackpink",
  },
  {
    quotes: "Be confident in who you are and what you do. Don't let anyone tell you otherwise.",
    person: "Red Velvet",
  },
  {
    quotes: "Never be afraid to express yourself, even if it means being different.",
    person: "Super Junior",
  },
  {
    quotes: "The best way to achieve your dreams is to work hard and never give up.",
    person: "Girls' Generation",
  },
];

btn.addEventListener('click', function () {

  let random = Math.floor(Math.random() * arrayQuotes.length);
  
  qoute.innerText = arrayQuotes[random].quotes;
  nameAuthor.innerText = arrayQuotes[random].person;
});
