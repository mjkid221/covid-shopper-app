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
import {getProductsLike, addProduct} from '../api/product'
import AddListItem from '../components/AddListItem'
import { fetchList } from '../api/list'


const SearchModal = ({showModal, setShowModal, lid}) => {

    const [searchText, setSearchText] = useState('');
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProductsLike(searchText, setProducts)
    }, [searchText])

    const callback = (pid) => {
        console.log(pid)
        addProduct(lid, pid)
    }

    return (
        <IonModal isOpen={showModal}>
            <IonContent>
                <IonSearchbar
                    value={searchText} onIonChange={e => setSearchText(e.detail.value)}
                >
                </IonSearchbar>
                <IonList>
                    {products !== null && Object.keys(products).map((product, i) => {
                        return <AddListItem key={i} callback={callback}
                            index={product} product={products[product]} />
                    })}
                </IonList>
            </IonContent>
            <IonButton onClick={() => setShowModal(false)}>Go back</IonButton>
        </IonModal>
    )

}

export default SearchModal
