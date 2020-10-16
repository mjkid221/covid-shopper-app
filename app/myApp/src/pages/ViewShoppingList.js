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
    IonFabList,
    IonIcon,
    IonInput,
    IonButton,
    IonModal,
    IonSearchbar
} from '@ionic/react';
import { add, create, barChart } from 'ionicons/icons';
import {updateProductAmount, deleteProduct} from '../api/product'
import ListItem from '../components/ListItem'
import { fetchList } from '../api/list'
import { getRecommended } from '../api/store'
import SearchModal from '../components/SearchModal'

const ViewShoppingList = ({match}) => {

    const [lid, setLid] = useState(match.params.id)
    const [name, setName] = useState("")
    const [products, setProducts] = useState([])

    const [editName, setEditName] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [trigger, setTrigger] = useState(false)

    const [showRecommend, setShowRecommend] = useState(false)
    const [recommended, setRecommended] = useState([])

    useEffect(() => {
        fetchList(match.params.id,(res) => {
            setProducts(res.products)
            setName(res.list_name)
            setLid(res.list_id)
        })
    }, [showModal, trigger])

    useEffect(() => {
        getRecommended(lid, setRecommended)
    }, [showRecommend])

    const updateProduct = (pid, index, amount) => {
        updateProductAmount(lid, pid, amount)
        var copy = {...products}
        copy[index].product_quantity = amount;
        setProducts(copy)
    }

    const deleteCallback = (lid, pid) => {
        deleteProduct(lid, pid)
        setTrigger(!trigger)
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
                <IonModal isOpen={showRecommend}>
                    <IonContent>
                        <IonHeader>
                          <IonToolbar>
                            <IonTitle>Your Recommended Stores</IonTitle>
                          </IonToolbar>
                        </IonHeader>
                        {Object.keys(recommended).map((a, i) => {
                            let s = recommended[a]
                            return (
                                <IonCard>
                                    <IonCardHeader>
                                        <IonCardTitle>{i + 1}. {s.store_name}</IonCardTitle>
                                        <IonCardSubtitle>Covid Cases: {s.suburb.covid_case_numbers}</IonCardSubtitle>
                                    </IonCardHeader>
                                    <IonCardContent>
                                        <IonLabel>{s.suburb.suburb_name}</IonLabel>
                                    </IonCardContent>
                                </IonCard>
                            )
                        })}
                    </IonContent>
                    <IonButton onClick={() => setShowModal(false)}>Back</IonButton>
                </IonModal>
                <SearchModal showModal={showModal} setShowModal={setShowModal} lid={lid}/>
                <IonFab vertical="bottom" horizontal="start" slot="fixed">
                    <IonFabButton>Options</IonFabButton>
                    <IonFabList side="end">
                        <IonFabButton onClick={() => setShowModal(true)}>
                          <IonIcon icon={add} />
                        </IonFabButton>
                        <IonFabButton onClick={() => setShowRecommend(true)}>
                          <IonIcon icon={barChart} />
                        </IonFabButton>
                      </IonFabList>
                </IonFab>
                <IonList>
                    {Object.keys(products).map((product, i) => {
                        return <ListItem key={i} callback={updateProduct}
                            index={product} product={products[product]} lid={lid}
                            deleteCallback={deleteCallback}/>
                    })}
                    <div style={{height: "200px"}}>
                    </div>
                </IonList>
            </IonContent>
        </IonPage>
    )
}

export default ViewShoppingList;
