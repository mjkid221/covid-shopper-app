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
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1 = () => {

  const [name, setName] = useState("")
  const [store, setStore] = useState({store_name: "", stocks: []})

  useEffect(() => {
      fetch('https://dreamteam.uqcloud.net/api/store/4000', {
          headers: {
              'Access-Control-Allow-Origin': '*'
          }
      }).then(res => res.json())
        .then(res => setStore(res))
        .catch((e) => {
            console.log(e)
            setName("Unable to retrieve store namess")
        })
  })

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">A</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={store.store_name} />
        <IonList>
            {Object.keys(store.stocks).map(stock => {
                let p = store.stocks[stock].product
                return (
                    <IonCard>
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

export default Tab1;
