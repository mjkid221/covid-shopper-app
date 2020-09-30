export const fetchList = (id, callback) => {
    fetch('https://dreamteam.uqcloud.net/api/list/' + id, {
        headers: {'Access-Control-Allow-Origin': '*'}
    }).then(res => res.json())
      .then(res => callback(res))
      .catch((e) => console.log(e))
}
