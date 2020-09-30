import React from 'react';
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

const ListItem = ({callback, index, product}) => {
    let pcount = product.product_quantity
    let pname = product.product_name
    let pid = product.product_id
    return (
        <IonItemSliding>
            <IonItem key={index}>
                <IonCheckbox slot='start'></IonCheckbox>
                <IonLabel style={{textAlign: "center"}}>{pcount + " x " + pname}</IonLabel>
            </IonItem>
            <IonItemOptions side='start'>
                <IonItemOption
                    color="primary"
                    onClick={() => callback(pid, index, pcount + 1)}
                >
                    Increase
                </IonItemOption>
            </IonItemOptions>
            <IonItemOptions side='end'>
                <IonItemOption
                    color="danger"
                    onClick={() => callback(pid, index, pcount - 1)}
                >
                    Decrease
                </IonItemOption>
            </IonItemOptions>
        </IonItemSliding>
    )
}

export default ListItem
