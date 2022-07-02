//GET 
const getAdviceNumber = document.querySelector('#adviceNumber');
const adviceResultsDiv = document.querySelector('#adviceResults');
const getDataBtn = document.querySelector('#getDataBtn')

const getAPI = async () => {
  const res = await axios.get('https://api.adviceslip.com/advice');
//  console.log(res.data.slip.advice);
 

//  generate unique id number
  const header = document.createElement('h1');
  header.className = 'title'
  header.append(` ADVICE # ${res.data.slip.id}`);
  getAdviceNumber.append(header);

//generate unique advice
  const para = document.createElement('p');
  para.className = 'para';
  para.append(`"${res.data.slip.advice}"`)
  adviceResultsDiv.append(para)


  //click button to get unique id and advice
}

getAPI();


