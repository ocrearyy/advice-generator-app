// GET
const getAdviceNumber = document.querySelector('#adviceNumber');
const adviceResultsDiv = document.querySelector('#adviceResults');
const diceBtn = document.querySelector('#spinDice');
const staticText = document.querySelector('#static');



diceBtn.addEventListener('click', () => {
  const getAPI = async () => {
    // Call API
    const res = await axios.get('https://api.adviceslip.com/advice');

    //remove static text 
    staticText.remove();
    
    //Generate spin on btn 
    let element = document.querySelector('#spinDice');
    element.classList.add("rotateMe"); 
    setTimeout(() => 
    element.classList.remove("rotateMe"), 800);

    // generate unique id number
    const header = document.createElement('h1');
    header.className = 'title';
    header.append(` ADVICE # ${res.data.slip.id}`);
    while (getAdviceNumber.childElementCount > 0) {
      getAdviceNumber.firstChild.remove();
    }
    
    getAdviceNumber.append(header);

    // generate unique advice
    const para = document.createElement('p');
    para.className = 'para';
    para.append(`"${res.data.slip.advice}"`);
    while (adviceResultsDiv.childElementCount > 0) {
      adviceResultsDiv.firstChild.remove();
    }
    adviceResultsDiv.append(para);

    
  };
  getAPI();
  
  
});



//date and time
const getDate = new Date().toDateString();
let displayDateInBrowser = document.querySelector('#date');
displayDateInBrowser.innerHTML = getDate;
displayDateInBrowser.className = 'date';

let today = new Date(); 
const getTime = today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric',  hour12: true });
let displayTimeInBrowser = document.querySelector('#time');
displayTimeInBrowser.innerHTML = getTime;
displayTimeInBrowser.className = 'time';






