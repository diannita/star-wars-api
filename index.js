// Get the API data for people
fetch("https://swapi.dev/api/people/")
  .then((response) => response.json())
  .then((data) => {
    // Access the results array
    console.log(data);
    let people = data.results;

    // Loop through the people and display their information
    people.forEach((person) => {
      let personName = person.name;
      let personHeight = person.height;
      let personMass = person.mass;
      let personGender = person.gender;

      // Display the information on the page
      let personData = `
              <div class="card">
                <p>Name: ${personName}</p>
                <p>Height: ${personHeight}</p>
                <p>Mass: ${personMass}</p>
                <p>Gender: ${personGender}</p>
              </div>
            `;
      document.querySelector("#people-data").innerHTML += personData;
    });
  })
  .catch((error) => console.error(error));

// Get the API data for films
fetch("https://swapi.dev/api/films/")
  .then((response) => response.json())
  .then((data) => {
    // Access the results array
    console.log(data);
    let films = data.results;

    // Loop through the films and display their information
    films.forEach((film) => {
      let filmTitle = film.title;
      let filmReleaseDate = film.release_date;
      let filmDirector = film.director;
      let filmProducer = film.producer;

      // Display the information on the page
      let filmData = `
            <div class="card">
                <p>Title: ${filmTitle}</p>
                <p>Release Date: ${filmReleaseDate}</p>
                <p>Director: ${filmDirector}</p>
                <p>Producer: ${filmProducer}</p>
            </div>
            `;
      document.querySelector("#films-data").innerHTML += filmData;
    });
  })
  .catch((error) => console.error(error));
