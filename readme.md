1. What is the difference between getElementById, getElementsByClassName, and querySelector /querySelectorAll?
Answer:
getElementById- এটি দ্বারা শুধুমাত্র একটি HTML এর id কে সেলেক্ট করা যায় এবং এর উপরে কাজ করা যায়।

getElementsByClassName- এটি দ্বারা একই নামের অনেকগুলো HTML এর class কে সিলেক্ট করা যায় তারপর এগুলোর একের পর এক নিয়ে নিয়ে যেকোনো কাজ করা যায়।

querySelector- CSS এ যেরকমভাবে কোনো একটি class ধরে তার উপর কাজ করা হয়। ঠিক তেমনি ভাবে querySelector দিয়েও সেভাবে কোনো class কে ধরে তার উপর কাজ করা যায়।

querySelectorAll- যদি কখন একই নামের একাধিক class কে আক্সেস করতে চাই তাহলে querySelectorAll সিলেক্টর ব্যবহার করতে হবে।


2. How do you create and insert a new element into the DOM?
Answer:
প্রথমে document.createElement("tagName") দিয়ে চাহিদা মতো একটি ট্যাগ বানাতে হয়। তারপর innerText ব্যবহার করে content নিতে হয়। তারপর যেখানে আমি নতুন ইলেমেন্টটি রাখতে চাই সেখানে appendChild() করে দিলেই হয়ে যাবে।
উদাহরণ-
let newDiv = document.createElement("div");
newDiv.innerText = "Hello, I am a new div!";
document.body.appendChild(newDiv);


3. What is Event Bubbling and how does it work?
Answer:
যখন ওয়েবপেজে কোনো ভেতরের element এ ক্লিক করা হয়, তখন সেটা একেরপর এক parent কে ধরতে থাকে এবং সর্বশেষ parent পর্যন্ত যেতে থাকে এ প্রক্রিয়াকেই Event Bubbling বলে।

কার্যপদ্ধতি-
আমি যদি একটি child element এর উপর ক্লিক করি তাহলে সেটা প্রথমে ওই child element এর event handler শুরু হয়।
তারপর সেই child এর ইভেন্টটা parent element যায়। তারপর সেটার কাজ শেষ হলে আবার তার parent element এ যায়। ততক্ষণ পর্যন্ত চলতে থাকে যতক্ষণ পর্যন্ত না document পর্যন্ত চলে না যায়।


4. What is Event Delegation in JavaScript? Why is it useful?
Answer:
একটা নিয়ম যেখানে আমি child element গুলোকে আলাদা আলাদা event listener না দিয়ে parent element এ একটা event listener দিয়ে child element গুলোকে হ্যান্ডল করা।

প্রয়োজনীয়তা-
এর মাধ্যমে কম কোড লিখতে হয়। কোড পরিষ্কার হয়। ফাইলের আকার ছোট হয় তাই খরচ কমে যায়।


5. What is the difference between preventDefault() and stopPropagation() methods?
Answer:
preventDefault() এর মাধ্যমে কোনো element এর স্বাভাবিক কার্যক্রম থামিয়ে দেয়। যেমন: form ব্যবহার করলে সাধারণত পেজ রিফ্রেশ হয় preventDefault() দিলে রিফ্রেশ হবে না।

stopPropagation() এর মাধ্যমে ইভেন্টকে parent element এ যেতে বাধা দেয় এককথায় বলা যায় event bubbling বন্ধ করে দেয়। যেমন: div এর ভিতরে যদি এক বাটন থাকে তাহলে বাটনে ক্লিক করলে প্রথমে বাটনের ইভেন্ট চলে তারপর event bubbling শুরু হয়। কিন্তু stopPropagation() ব্যবহার করলে event bubbling বন্ধ হয়ে যায় শুধুমাত্র ওই বাটনেই event চলে।