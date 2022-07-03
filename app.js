// GET
const getAdviceNumber = document.querySelector("#adviceNumber");
const adviceResultsDiv = document.querySelector("#adviceResults");
const diceBtn = document.querySelector("#getDataBtn");

const URL = "https://api.adviceslip.com/advice";

diceBtn.addEventListener("click", () => {
  const getAPI = async () => {
    // Call API
    const res = fetchQoute();

    // generate unique id number
    const header = document.createElement("h1");
    header.className = "title";
    header.append(` ADVICE # ${res.data.slip.id}`);
    while (getAdviceNumber.childElementCount > 0) {
      getAdviceNumber.firstChild.remove();
    }
    getAdviceNumber.append(header);

    // generate unique advice
    const para = document.createElement("p");
    para.className = "para";
    para.append(`"${res.data.slip.advice}"`);
    while (adviceResultsDiv.childElementCount > 0) {
      adviceResultsDiv.firstChild.remove();
    }
    adviceResultsDiv.append(para);
  };
  getAPI();
});

function fetchQoute() {
  function httpGet(url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false);
    xmlHttp.send(null);
    return xmlHttp.responseText;
  }

  let response = httpGet(URL);
  return { data: JSON.parse(response) };
}
