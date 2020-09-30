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
    IonBackButton,
    IonButtons,
    IonItemSliding,
    IonItemOptions,
    IonItemOption
} from '@ionic/react';

const MyShoppingLists = () => {

    const [name, setName] = useState("")
    const [customer, setCustomer] = useState({products: [], list_name: ""})

    useEffect(() => {
        fetch('https://dreamteam.uqcloud.net/api/list/' + match.params.id, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then(res => res.json())
          .then(res => setList(res))
          .catch((e) => {
              console.log(e)
              setName("Unable to retrieve store namess")
          })
    }, [])

    return (
        <IonPage>

            <IonHeader>
                <IonToolbar>
                    <IonTitle> My Shopping Lists </IonTitle>
                    <IonButtons slot='start'>
                        <IonBackButton color='danger' defaultHref='/tab1'/>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonItem detail color='success' href='/shopping-list/6000'>
                  <IonLabel>
                    Standard Item with Detail Arrow
                  </IonLabel>
                </IonItem>
            </IonContent>

        </IonPage>
    )
}

export default MyShoppingLists;
