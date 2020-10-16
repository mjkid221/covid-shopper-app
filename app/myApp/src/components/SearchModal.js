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
    IonIcon,
    IonInput,
    IonButton,
    IonModal,
    IonSearchbar
} from '@ionic/react';
import { add, create } from 'ionicons/icons';
import {updateProductAmount} from '../api/product'
import ListItem from '../components/ListItem'
import { fetchList } from '../api/list'


const SearchModal = ({showModal, setShowModal}) => {

    return (
        <IonModal isOpen={showModal}>
            <IonContent>
                <IonSearchbar showCancelButton="always"></IonSearchbar>
                <IonList>
                    <IonItem><IonLabel>TODO:</IonLabel></IonItem>
                    <IonItem><IonLabel>Add</IonLabel></IonItem>
                    <IonItem><IonLabel>Search</IonLabel></IonItem>
                </IonList>
            </IonContent>
            <IonButton onClick={() => setShowModal(false)}>Go back</IonButton>
        </IonModal>
    )

}

export default SearchModal
