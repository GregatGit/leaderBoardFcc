const urlRecent = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent'

//const urlAllTime = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime'

const getData = (url) => {
  fetch(url)
    .then((response) => {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status)
        return
      }
      // Examine the text in the response
      response
        .json()
        .then((data) => data)
    })
    .catch(function (err) {
      console.log('Fetch Error :-S', err)
    })
}

const dataRecent = getData(urlRecent)
//const dataAllTime = getData(urlAllTime)

export default dataRecent