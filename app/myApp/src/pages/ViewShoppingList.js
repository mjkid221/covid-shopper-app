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
    IonButtons
} from '@ionic/react';

const ViewShoppingList = ({match}) => {

    const [name, setName] = useState("")
    const [list, setList] = useState({products: [], list_name: ""})

    useEffect(() => {
        fetch('https://dreamteam.uqcloud.net/api/list/' + match.param.id, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then(res => res.json())
          .then(res => setList(res))
          .catch((e) => {
              console.log(e)
              setName("Unable to retrieve store namess")
          })
    })

    return (
        <IonPage>
            <IonHeader>
              <IonToolbar>
                <IonButtons slot='start'>
                    <IonBackButton color='danger' defaultHref='/tab1'/>
                </IonButtons>
              </IonToolbar>

            </IonHeader>
            <IonContent fullscreen>
                <IonList>
                    {Object.keys(list.products).map(product => {
                        let p = list.products[product]
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
    )
}

export default ViewShoppingList;
