let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
    "I find myself extremely lucky to have a friend like you who is much more than a friend to me, who is my life…. Warm wishes on Friendship Day.",
    "Happy friendship day to you. I’m happy to have you as my friend.",
"No matter how old we grow, no matter how much distance we have between us, you will always stay in my heart…. Wishing you a very Happy Friendship Day 2021.",
"Happy friendship day to you all. Sending love and best wishes to you on this friendship day. Love you all.",
"Dear friend, ever since you came into my life, you have filled my life with utter joy and happiness! Happy Friendship Day to you!.",
"There is no distance in this world that can part our because we are strongly connected with our hearts and our friendship is eternal, On the occasion of Friendship Day, let us raise a toast to the best relationship of our lives…. Love you dear!!!",
"Happy Friendship Day, my buddy! You are someone I can count on in every step of my life. May our beautiful friendship lasts forever!.",
"The most invaluable thing I have is your friendship. I will forever cherish it. Happy Friendship Day Bestie.",
"You are everything that a true friend can be. You are the most precious gift from God. I wish that we remain best friends for the rest of our life. Wishing you a very happy friendship day!",
"You came into my life, you won my heart and you stayed….. This is the short and sweet story of our friendship which is out of this world….. Thanks for being such a good friend…. Warm wishes on Friendship Day."
];

btn.addEventListener('click',function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;

})
