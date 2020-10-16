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

const ViewStores = () => {

  const [name, setName] = useState("")
  const [stores, setStores] = useState({})

  useEffect(() => {
      fetch('https://dreamteam.uqcloud.net/api/store', {
          headers: {
              'Access-Control-Allow-Origin': '*'
          }
      }).then(res => res.json())
        .then(res => setStores(res))
        .catch((e) => {
            console.log(e)
            setName("Unable to retrieve store namess")
        })
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Stores</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Stores</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
            {Object.keys(stores).map((store, i) => {
                let s = stores[store]
                return (
                    <IonCard key={i} href={'/store/' + s.store_id}>
                        <IonCardHeader>
                            <IonCardTitle>{s.store_name}</IonCardTitle>
                            <IonCardSubtitle>{s.description}</IonCardSubtitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <IonLabel>Phone No.: {s.phone}</IonLabel>
                        </IonCardContent>
                    </IonCard>
                )
            })}
        </IonList>
      </IonContent>
    </IonPage>
  );


};

export default ViewStores;
