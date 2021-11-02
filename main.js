const basicAPI = "https://api.tvmaze.com/"; //! full info "/schedule/full";

//! /bilding

async function getMovieInfoAll() {
  try { gifLoading()
    return await fetch(
     `${basicAPI}/search/${selectId.value}?q=${inputId.value}`
    ).then((response) => response.json());
  } catch (error) {
    return error;
  }
}

async function sortById(id) {
  try {
    gifLoading();
    return await fetch(`${basicAPI}people/${id}`).then((response) =>
      response.json()
    );
  } catch (error) {
    return error;
  }
}

async function sortByName(name) {
  try {
    gifLoading();
    return await fetch(`${basicAPI}/search/people?q=${name}`).then((response) =>
      response.json()
    );
  } catch (error) {
    return error;
  }
}

function gifLoading() {
  DivOfShowInfo.innerHTML = `<img src="./images/loading1 gif.gif" id="gifLoadingImg">`;
}

function stopGifLoading() {
  gifLoadingImg.style.display = "none";
}

function runAllArrayOfObject(arrayOfObject) {
  for (const item of arrayOfObject) {
    // console.log(item);
    DivOfShowInfo.innerHTML += `<article class="cardClass">
        <a href="${item.show.url}"><img src="${item.show.image.original}" id="imgOfInfo"></a>
        <h1 class="nameTitle">${item.show.name}</h1>
        <p>${item.show.summary}</p>
        

        </article>
        `;
  }
}

function runAllArrayOfObjectPerson(object) {
  console.log(object);
  DivOfShowInfo.innerHTML = `<article class="cardClass">
    <a href="${object.url}"><img src="${object.image.original}" id="imgOfInfoTwo"></a>
    <br> <h1 class="nameTitle">${object.name}</h1>
          </p>
          </article>
          `;
}

function runPerActorName(array) {
  for (const iterator of array) {
    console.log(iterator.person);
    DivOfShowInfo.innerHTML += `<article class="cardClass">
   <a href="${iterator.person.url}"><img src="${iterator.person.image.original}" id="imgOfInfoTwo"></a>
   <h1 class="nameTitle">${iterator.person.name}</h1>
          </p>
   </article>
   `;
  }
}

inputId.oninput = () => {
  if (inputId.value.length >= 3) {
    switch (selectId.value) {
      case "shows":
          getMovieInfoAll()
            .then((res) => runAllArrayOfObject(res))
            .catch((rej) => console.log(rej))
            .finally(() => {stopGifLoading()});
      default:
        break;
    }
  }
  if (inputId.value.length == 0) DivOfShowInfo.innerHTML = " ";
};

btnIDById.onclick = () => {
  sortById(inputId.value)
    .then((res) => runAllArrayOfObjectPerson(res))
    .catch((rej) => console.log(rej));
};

btnIDByName.onclick = () => {
  sortByName(inputId.value).then((res) => {
    runPerActorName(res)
  }).catch(()=>{}).finally(()=>{
    stopGifLoading()
  });
};
