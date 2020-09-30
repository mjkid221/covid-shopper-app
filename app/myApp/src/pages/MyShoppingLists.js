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
    IonItemOption,
    IonItemDivider
} from '@ionic/react';

const MyShoppingLists = () => {

    const [name, setName] = useState("")
    const [lists, setLists] = useState({products: [], list_name: ""})

    useEffect(() => {
        fetch('https://dreamteam.uqcloud.net/api/customer/v2/5000', {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then(res => res.json())
          .then(res => setLists(res))
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
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonList lines="inset">
                    {Object.keys(lists).map((list, index) => {
                        let item = lists[list]
                        return (
                            <IonItem
                                key={index}
                                detail
                                color='white'
                                href={'/shopping-list/' + item.list_id}
                            >
                                <IonLabel>{item.list_name}</IonLabel>
                            </IonItem>
                        )
                    })}
                </IonList>


            </IonContent>

        </IonPage>
    )
}

export default MyShoppingLists;
