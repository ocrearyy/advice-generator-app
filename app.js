//GET 
const getAdviceNumber = document.querySelector('#adviceNumber');
const adviceResultsDiv = document.querySelector('#adviceResults');
const getAPI = async () => {
    const res = await axios.get('https://api.adviceslip.com/advice');
 console.log(res.data.slip.advice);
 const para = document.createElement('p');
 para.append(res.data.slip.advice)
 adviceResultsDiv.append(para)


//  generate unique id number
const header = document.createElement('h1');
header.className = 'title'
header.append(` ADVICE # ${res.data.slip.id}`);
getAdviceNumber.append(header);

}


getAPI();





// const getDataBtnDiv = document.querySelector('#getDataBtn');


//