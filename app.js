// GET
const getAdviceNumber = document.querySelector('#adviceNumber');
const adviceResultsDiv = document.querySelector('#adviceResults');
const diceBtn = document.querySelector('#spinDice');
const staticText = document.querySelector('#static');
const favouriteSection = document.querySelector('.favouriteSection')


diceBtn.addEventListener('click', () => {
  const getAPI = async () => {
    // Call API
    /* eslint-disable */ 
    const res = await axios.get('https://api.adviceslip.com/advice');

    // remove static text
    staticText.remove();

    // Generate spin on btn
    const element = document.querySelector('#spinDice');
    element.classList.add('rotateMe');
    setTimeout(() => element.classList.remove('rotateMe'), 800);

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
    

    //generate add to favourites button 
    const addFavourite = document.createElement('p');
    addFavourite.className = 'fav';
    addFavourite.innerHTML = `<p>Add to Favourites<i class="fa-solid fa-folder-plus"></i></p>`;
    while (favouriteSection.childElementCount > 0) {
      favouriteSection.firstChild.remove();
    }
    favouriteSection.append(addFavourite)
  };
  getAPI();

  favouriteSection.addEventListener('click', () => {
    const favouriteItem = document.createElement('p');
    favouriteItem.className = 'favouriteItemBorder';
    favouriteSection.append(`${getAdviceNumber.textContent}: ${ adviceResultsDiv.textContent}`);
  })
});


