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
import {updateProductAmount} from '../api/product'
import ListItem from '../components/ListItem'
import { fetchList } from '../api/list'

const ViewShoppingList = ({match}) => {

    const [lid, setLid] = useState(null)
    const [name, setName] = useState("")
    const [products, setProducts] = useState([])

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
                    <IonTitle>{name}</IonTitle>
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
