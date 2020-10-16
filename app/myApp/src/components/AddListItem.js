import React, { useState } from 'react';
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
    IonButton,
    IonButtons,
    IonNote,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonCheckbox,
    IonFabButton,
    IonFab,
    IonIcon,
    IonSelectOption,
    IonSelect,
    IonActionSheet
} from '@ionic/react';
import { trash, squareOutline, checkbox } from 'ionicons/icons';

const AddListItem = ({callback, index, product}) => {

    let pname = product.product_name
    let pid = product.product_id

    return (
        <IonItemSliding>
            <IonItem key={index}>
                <IonLabel style={{textAlign: "left"}}>
                    {pname}
                </IonLabel>
            </IonItem>
            <IonItemOptions side='start'>
                <IonItemOption
                    color="primary"
                    onClick={() => callback(pid)}
                >
                    Add Item
                </IonItemOption>
            </IonItemOptions>
        </IonItemSliding>
    )
}

export default AddListItem
