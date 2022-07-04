// GET
const getAdviceNumber = document.querySelector('#adviceNumber');
const adviceResultsDiv = document.querySelector('#adviceResults');
const diceBtn = document.querySelector('#getDataBtn');
const staticText = document.querySelector('#static');



diceBtn.addEventListener('click', () => {
  const getAPI = async () => {
    // Call API
    const res = await axios.get('https://api.adviceslip.com/advice');

    //remove static text 
    staticText.remove();
    


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

    //Generate spin on btn 
    // let element = document.querySelector('#spinDice');
    // element.classList.add("rotateMe"); 

    
  };
  getAPI();
  
  
});

