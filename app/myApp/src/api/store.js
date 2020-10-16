export const getRecommended = (lid, callback) => {
    fetch(`https://dreamteam.uqcloud.net/api/filter/list/${lid}/covid/10`, {
        headers: {'Access-Control-Allow-Origin': '*'}
    }).then(res => res.json())
      .then(res => {
          callback(res.sort((a, b) => a.suburb.covid_case_numbers - b.suburb.covid_case_numbers))
          console.log(res)
      })
      .catch((e) => console.log(e))
}
