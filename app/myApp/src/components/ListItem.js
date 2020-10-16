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


const ListItem = ({callback, index, product, lid, deleteCallback}) => {
    let pcount = product.product_quantity
    let pname = product.product_name
    let pid = product.product_id

    const [showActions, setShowActions] = useState(false)
    const [done, setDone] = useState(false)

    return (
        <IonItemSliding>
            <IonItem key={index}>

                <IonIcon
                    icon={done ? checkbox : squareOutline}
                    color='primary'
                    onClick={() => setDone(!done)}></IonIcon>
                <IonLabel style={{textAlign: "center"}}>
                {pcount + " x " + pname}
                </IonLabel>
                <IonIcon icon={trash} onClick={() => setShowActions(true)}></IonIcon>
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
                    deleteCallback(lid, pid)
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
