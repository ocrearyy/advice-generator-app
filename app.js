//GET 
const getAdviceNumber = document.querySelector('#adviceNumber');
const adviceResultsDiv = document.querySelector('#adviceResults');
const diceBtn = document.querySelector('#getDataBtn')


diceBtn.addEventListener('click', () => {
  const getAPI = async () => {
  // Call API  
    const res = await axios.get('https://api.adviceslip.com/advice');   
  
  // generate unique id number
    const header = document.createElement('h1');
    header.className = 'title'
    header.append(` ADVICE # ${res.data.slip.id}`);
    getAdviceNumber.append(header);
  
  // generate unique advice
    const para = document.createElement('p');
    para.className = 'para';
    para.append(`"${res.data.slip.advice}"`)
    adviceResultsDiv.append(para)
  }
})
// getAPI();


