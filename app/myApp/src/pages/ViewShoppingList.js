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
    IonNote,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonCheckbox,
    IonFabButton,
    IonFab,
    IonIcon
} from '@ionic/react';
import { add } from 'ionicons/icons';

const ViewShoppingList = ({match}) => {

    const [name, setName] = useState("")
    const [list, setList] = useState({products: [], list_name: ""})

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
                  <IonTitle>{list.list_name}</IonTitle>
                  <IonButtons slot='start'>
                      <IonBackButton color='primary' defaultHref='/lists'/>
                  </IonButtons>
              </IonToolbar>

            </IonHeader>
            <IonContent fullscreen>
                <IonFab vertical="bottom" horizontal="start" slot="fixed">
                    <IonFabButton>
                        <IonIcon icon={add} />
                    </IonFabButton>
                </IonFab>
                <IonList>
                    {Object.keys(list.products).map((product, index) => {
                        let p = list.products[product]
                        return (
                            <div>

                                <IonItemSliding>
                                    <IonItem key={index}>
                                        <IonCheckbox slot='start'></IonCheckbox>
                                        <IonLabel>{p.product_name}</IonLabel>
                                        <IonNote slot='end'>{p.product_quantity}</IonNote>
                                    </IonItem>
                                    <IonItemOptions side='start'>
                                        <IonItemOption color="primary">Increase</IonItemOption>
                                    </IonItemOptions>
                                    <IonItemOptions side='end'>
                                        <IonItemOption color="danger">Delete</IonItemOption>
                                    </IonItemOptions>
                                </IonItemSliding>
                            </div>
                        )
                    })}
                </IonList>
            </IonContent>
        </IonPage>
    )
}

export default ViewShoppingList;
