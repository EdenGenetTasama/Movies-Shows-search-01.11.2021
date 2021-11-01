const basicAPI = "https://api.tvmaze.com/"; //! full info "/schedule/full";

//! /:id

// console.log(`${basicAPI}/schedule/full`);

async function getMovieInfoAll() {
  try {
    return await fetch(
      `${basicAPI}/search/${selectId.value}?q=${inputId.value}`
    ).then((response) => response.json());
  } catch (error) {
    return error;
  }
}

async function sortById(id) {
  try {
    return await fetch(`${basicAPI}/search/${id}`).then((response) =>
      response.json()
    );
  } catch (error) {
    return error;
  }
}

function runAllArrayOfObject(arrayOfObject) {
  for (const item of arrayOfObject) {
    console.log(item);
    DivOfShowInfo.innerHTML += `<article class="cardClass">
        <a href="${item.show.url}"><img src="${item.show.image.original}" id="imgOfInfo"></a>
        <h2>${item.show.name}</h2>
        <p>${item.show.summary}<br>
        rating : ${item.show.rating.average}
        </p>

        </article>
        `;
  }
}

function runAllArrayOfObjectPerson(arrayOfObject) {
  for (const item of arrayOfObject) {
    console.log(item);
    DivOfShowInfo.innerHTML += `<article class="cardClass">
          <h2>${item.show.name}</h2>
          <p>${item.show.summary}<br>
          rating : ${item.show.rating.average}
          </p>
  
          </article>
          `;
  }
}

inputId.oninput = () => {
  let valueOfSelect = selectId.value;
  switch (valueOfSelect) {
    case "shows":
      if (inputId.value.length > 2) {
        getMovieInfoAll()
          .then((res) => runAllArrayOfObject(res))
          .catch((rej) => console.log(rej));
      }
      break;
      case "people":
    default:
      break;
  }
};

btnIDById.onclick = () => {
  sortById(inputId.value)
    .then((res) => runAllArrayOfObject(res))
    .catch((rej) => console.log(rej));
};
