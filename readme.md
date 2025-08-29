1. What is the difference between getElementById, getElementsByClassName, and querySelector /querySelectorAll?
Answer:
getElementById:- এটি দ্বারা শুধুমাত্র একটি HTML এর id কে সেলেক্ট করা যায় এবং এর উপরে কাজ করা যায়।

getElementsByClassName:- এটি দ্বারা একই নামের অনেকগুলো HTML এর class কে সিলেক্ট করা যায় তারপর এগুলোর একের পর এক নিয়ে নিয়ে যেকোনো কাজ করা যায়।

querySelector:- CSS এ যেরকমভাবে কোনো একটি class ধরে তার উপর কাজ করা হয়। ঠিক তেমনি ভাবে querySelector দিয়েও সেভাবে কোনো class কে ধরে তার উপর কাজ করা যায়।

querySelectorAll:- যদি কখন একই নামের একাধিক class কে আক্সেস করতে চাই তাহলে querySelectorAll সিলেক্টর ব্যবহার করতে হবে।


2. How do you create and insert a new element into the DOM?
Answer:
প্রথমে document.createElement("tagName") দিয়ে চাহিদা মতো একটি ট্যাগ বানাতে হয়। তারপর innerText ব্যবহার করে content নিতে হয়। তারপর যেখানে আমি নতুন ইলেমেন্টটি রাখতে চাই সেখানে appendChild() করে দিলেই হয়ে যাবে।
উদাহরণ:
let newDiv = document.createElement("div");





3. What is Event Bubbling and how does it work?
4. What is Event Delegation in JavaScript? Why is it useful?
5. What is the difference between preventDefault() and stopPropagation() methods?
