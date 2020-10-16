export const updateProductAmount = (lid, pid, amount) => {
    console.log(`Updating product:${pid} in list:${lid}. Amount:${amount}`)
    fetch('https://dreamteam.uqcloud.net/api/list/' + lid + '/product/' + pid, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Content-type": "application/json",
            "accept": "application/json"
        },
        method: 'PATCH',
        body: JSON.stringify({
            product_quantity : amount
        })
    }).then(res => res.json())
      .then(res => {
          console.log(res)
      })
      .catch((e) => {
          console.log(e)
      })
}


export const getProductsLike = (regex, setter) => {
    console.log(`Retrieving products like ${regex}`)
    fetch('https://dreamteam.uqcloud.net/api/product', {
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Content-type": "application/json",
            "accept": "application/json"
        },
        method: 'SEARCH',
        body: JSON.stringify({
            regex: `%${regex}%`
        })
    }).then(res => res.json())
      .then(res => {
          console.log(res)
          setter(res)
      })
      .catch((e) => {
          console.log(e)
      })
}


export const addProduct = (lid, pid) => {
    console.log(`Adding product`)
    fetch(`https://dreamteam.uqcloud.net/api/list/${lid}/product`, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Content-type": "application/json",
            "accept": "application/json"
        },
        method: 'POST',
        body: JSON.stringify({
            list_id: lid,
            product_id: pid,
            product_quantity: 1
        })
    }).then(res => res.json())
      .then(res => {
          console.log(res)
      })
      .catch((e) => {
          console.log(e)
      })
}
