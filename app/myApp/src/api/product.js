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
