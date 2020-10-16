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
import SearchModal from '../components/SearchModal'

const ViewShoppingList = ({match}) => {

    const [lid, setLid] = useState(null)
    const [name, setName] = useState("")
    const [products, setProducts] = useState([])

    const [editName, setEditName] = useState(false)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        fetchList(match.params.id,(res) => {
            setProducts(res.products)
            setName(res.list_name)
            setLid(res.list_id)
        })
    }, [])

    const updateProduct = (pid, index, amount) => {
        updateProductAmount(lid, pid, amount)
        var copy = {...products}
        copy[index].product_quantity = amount;
        setProducts(copy)
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonInput
                        value={name}
                        readOnly={editName}
                        onClick={() => setEditName(!editName)}
                        onIonChange={(e) => setName(e.target.value)}
                        onIonBlur={() => console.log("blur")}
                    ></IonInput>
                    <IonButtons slot='start'>
                        <IonBackButton color='primary' defaultHref='/lists'/>
                    </IonButtons>
                </IonToolbar>

            </IonHeader>
            <IonContent fullscreen>
                <SearchModal showModal={showModal} setShowModal={setShowModal}/>
                <IonFab vertical="bottom" horizontal="start" slot="fixed">
                    <IonFabButton onClick={() => setShowModal(true)}>
                        <IonIcon icon={add} />
                    </IonFabButton>
                </IonFab>
                <IonList>
                    {Object.keys(products).map((product, i) => {
                        return <ListItem key={i} callback={updateProduct}
                            index={product} product={products[product]} />
                    })}
                </IonList>
            </IonContent>
        </IonPage>
    )
}

export default ViewShoppingList;
