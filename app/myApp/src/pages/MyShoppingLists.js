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
    IonItemDivider,
    IonFabButton,
    IonFab,
    IonFabList,
    IonModal,
    IonButton,
    IonIcon,
    IonInput
} from '@ionic/react';
import { add } from 'ionicons/icons';
import { newList } from '../api/list'

const MyShoppingLists = () => {

    const [name, setName] = useState("")
    const [lists, setLists] = useState({products: [], list_name: ""})
    const [reloadLists, setReloadLists] = useState(false)

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
    }, [reloadLists])

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

                <IonFab vertical="bottom" horizontal="start" slot="fixed">
                    <IonFabButton onClick={() => {
                            newList()
                            setReloadLists(!reloadLists)
                        }}>
                        <IonIcon icon={add} />
                    </IonFabButton>
                </IonFab>


            </IonContent>

        </IonPage>
    )
}

export default MyShoppingLists;
