export const fetchList = (id, callback) => {
    fetch('https://dreamteam.uqcloud.net/api/list/' + id, {
        headers: {'Access-Control-Allow-Origin': '*'}
    }).then(res => res.json())
      .then(res => callback(res))
      .catch((e) => console.log(e))
}

export const updateList = (id, name) => {
    console.log('updating list')
    fetch(`https://dreamteam.uqcloud.net/api/list/${id}`, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Content-type": "application/json",
            "accept": "application/json"
        },
        method: 'PATCH',
        body: JSON.stringify({
            list_name: name
        })
    }).then(res => res.json())
      .then(res => {
          console.log(res)
      })
      .catch((e) => {
          console.log(e)
      })
}

export const newList = () => {
    console.log('creating list')
    fetch(`https://dreamteam.uqcloud.net/api/list`, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Content-type": "application/json",
            "accept": "application/json"
        },
        method: 'POST',
        body: JSON.stringify({
            list_name: 'DefaultListName' + Math.floor(Math.random() * 100000),
            c_id: 5000
        })
    }).then(res => res.json())
      .then(res => {
          console.log(res)
      })
      .catch((e) => {
          console.log(e)
      })
}

export const deleteList = (id) => {
    console.log('deleting list')
    fetch(`https://dreamteam.uqcloud.net/api/list/${id}`, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Content-type": "application/json",
            "accept": "application/json"
        },
        method: 'DELETE'
    }).then(res => res.json())
      .then(res => {
          console.log(res)
      })
      .catch((e) => {
          console.log(e)
      })
}
