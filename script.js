// HEART ICON SECTION FEATURE
const heartIcons = document.getElementsByClassName('heart-icon')
const heartCountElement = document.getElementById('heart-icon-count')
let count = parseInt(document.getElementById('heart-icon-count').innerText)
for(const heartIcon of heartIcons) {
    heartIcon.addEventListener('click', function() {
        count++;
        heartCountElement.innerText = count
    });
}


// CALL BUTTON SECTION FEATURE
const availableCoins = document.getElementById('available-coins')
let availableCoinsNumber = parseInt(availableCoins.innerText)

const cards = document.querySelectorAll('.card')

const callHistory = []

for (const card of cards) {
        const btn = card.querySelector('.call-btn')
        btn.addEventListener('click', function () {
        const name = card.querySelector('h1').innerText
        const number = card.querySelector('.number').innerText

        if(availableCoinsNumber < 20){
            alert("You don't have enough coins to make a call.")
            return
        }
        alert(`📞 Calling ${name} ${number}...`)

        availableCoinsNumber -= 20
        availableCoins.innerText = availableCoinsNumber  
        
        const data = {
            name: name,
            number: number,
            date: new Date().toLocaleTimeString()
        }
        callHistory.push(data)
            const callHistoryContainer = document.getElementById('call-history-section')
        callHistoryContainer.innerText = ""
        for(const data of callHistory) {
            const div = document.createElement('div')
            div.innerHTML = `
                <div class="flex justify-between items-center mt-4">
                    <div>
                        <h1 class="text-[13px] font-semibold">${data.name}</h1>
                        <p class="text-[12px]">${data.number}</p>
                    </div>
                    <p class="text-[12px]">${data.date}</p>
                </div>
            `
            callHistoryContainer.appendChild(div)
        }
    })
}

document.getElementById('clear-btn').addEventListener('click', function(){
    callHistory.length = 0;
    const callHistoryContainer = document.getElementById('call-history-section')
    callHistoryContainer.innerHTML = '';
});