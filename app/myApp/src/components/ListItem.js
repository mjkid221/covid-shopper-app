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
import { trash } from 'ionicons/icons';

const ListItem = ({callback, index, product}) => {
    let pcount = product.product_quantity
    let pname = product.product_name
    let pid = product.product_id

    const [showActions, setShowActions] = useState(false)

    return (
        <IonItemSliding>
            <IonItem key={index} onHold={() => setShowActions(true)}>
                <IonCheckbox slot='start'></IonCheckbox>
                <IonLabel
                    style={{textAlign: "center"}}
                >
                {pcount + " x " + pname}
                </IonLabel>
            </IonItem>
            <IonActionSheet
                isOpen={showActions}
                onDidDismiss={() => setShowActions(false)}
                cssClass='my-custom-class'
                buttons={[{
                  text: 'Delete',
                  role: 'destructive',
                  icon: trash,
                  handler: () => {
                    console.log('Delete clicked');
                  }
                }]}
            >
            </IonActionSheet>
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
