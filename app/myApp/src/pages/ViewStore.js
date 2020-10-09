import React, { useState, useEffect } from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonList,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonCardSubtitle,
} from '@ionic/react';

const ViewStore = ({match}) => {

  const [name, setName] = useState("")
  const [store, setStore] = useState({store_name: "", stocks: {}})

  useEffect(() => {
      fetch(`https://dreamteam.uqcloud.net/api/store/${match.params.id}`, {
          headers: {
              'Access-Control-Allow-Origin': '*'
          }
      }).then(res => res.json())
        .then(res => setStore(res))
        .catch((e) => {
            console.log(e)
            setName("Unable to retrieve store namess")
        })
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{store.store_name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Stores</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
            {Object.keys(store.stocks).map((stock, i) => {
                let p = store.stocks[stock].product
                return (
                    <IonCard key={i} href='/home'>
                        <IonCardHeader>
                            <IonCardTitle>{p.product_name}</IonCardTitle>
                            <IonCardSubtitle>${p.list_price}</IonCardSubtitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <IonLabel>{p.product_size}</IonLabel>
                        </IonCardContent>
                    </IonCard>
                )
            })}
        </IonList>
      </IonContent>
    </IonPage>
  );


};

export default ViewStore;
