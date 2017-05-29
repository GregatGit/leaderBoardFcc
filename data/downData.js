const urlRecent = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent'
const urlAllTime = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime'
const dataDown = {}

fetch(urlRecent).then((response) => {
    if (response.status !== 200) {
      console.log('Looks like there was a problem. Status Code: ' + response.status)
      return
    }
    response
      .json()
      .then((data) => {
        dataDown.recent = data
      })
  })
  fetch(urlAllTime).then((response) => {
    if (response.status !== 200) {
      console.log('Looks like there was a problem. Status Code: ' + response.status)
      return
    }
    response
      .json()
      .then((data) => {
        dataDown.alltime = data
      })
  }).catch((err) => {
    console.log('Fetch Error :-S', err)
  })

export default dataDown