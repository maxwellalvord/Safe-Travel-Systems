import React from 'react'

async function weatherApi(city) {
  await fetch(`http://api.openweathermap.org/data/2.5/weather?q=portland&appid=${process.env.NEXT_PUBLIC_KEY}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        } else {
          let jsonRepo = response.json()
          return console.log(jsonRepo.results)
        }
      })
      // .then((jsonifiedResponse) => {
      //   const apiResponse = jsonifiedResponse.results;
      //   console.log(apiResponse);
      // })
      .catch((error) => {
        return errorText = error;
      });
}

export default weatherApi