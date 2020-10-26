import React, {useState, useEffect} from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonAvatar,
  IonText, 
  IonCard,
  IonItem, 
  IonIcon,  
  IonLabel, 
  IonButton,
  IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonImg, IonAlert
} from '@ionic/react';
import '../app.css';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import { BrowserPluginWeb } from '@capacitor/core';
import BigW from "../assets/bigw.jpg";
import Coles from "../assets/coles.jpg";
import Woolworths from "../assets/woolworths.jpg";
import IGA from "../assets/iga.png";
import Kmart from "../assets/kmart.webp";
import ViewStore from '../pages/ViewStore';


const Home = () => {
  const [showAlert1, setShowAlert1] = useState(false);
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>COVID Shopper</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonButton onClick={() => setShowAlert2(true)} expand="block">Alert: COVID Update</IonButton>
      <IonAlert
          isOpen={showAlert1}
          onDidDismiss={() => setShowAlert1(false)}
          cssClass='my-custom-class'
          header={'Stay Safe Reminder'}
          subHeader={'Remember to keep 1.5m apart from others'}
          message={'Maintain social distancing when out and wear a mask when unable to.'}
          buttons={[
            {text: 'Go back',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                console.log('Confirm Cancel');
              }
            },
            {
              text: 'Go to Store Inventory',
              handler: () => {
                console.log('Confirm Ok');
              }
            }
          ]}/>
        <IonAlert
          isOpen={showAlert2}
          onDidDismiss={() => setShowAlert2(false)}
          cssClass='my-custom-class'
          header={'Current COVID Cases'}
          subHeader={'QLD: 0, NSW: 1, VIC: 2, WA: 5, NT: 0, TAS: 0, ACT: 0'}
          message={'Continue to follow local guidelines and stay safe'}
          buttons={[Ok]}/>

      <IonCard>
        <IonImg src="https://cdn.pixabay.com/photo/2020/03/27/17/03/shopping-4974313__480.jpg" class="img" />
          <IonItem>
          <IonCardHeader>
          <IonCardSubtitle>Tips for Shopping Safely</IonCardSubtitle>
          <IonCardTitle>Here's three things to do before you go shopping</IonCardTitle>
          </IonCardHeader>
          </IonItem>
      </IonCard>  
      <IonCard>
          <IonItem>
            <IonImg src ={Woolworths} class="StoreIcon" slot="start" />
            <IonLabel>Woolworths</IonLabel>
            <IonButton fill="outline" slot="end" onClick={() => setShowAlert1(true)} 
            expand="block">Open Store</IonButton>
          </IonItem>
      </IonCard>
      <IonCard>
          <IonItem>
            <IonImg src={Coles} class="StoreIcon" slot="start" />
            <IonLabel>Coles</IonLabel>
            <IonButton fill="outline" slot="end" onClick={() => setShowAlert1(true)} 
            expand="block">Open Store</IonButton>
          </IonItem>
      </IonCard>
      <IonCard>
          <IonItem>
            <IonImg src={Kmart} class="StoreIcon" slot="start" />
            <IonLabel>Kmart</IonLabel>
            <IonButton fill="outline" slot="end" onClick={() => setShowAlert1(true)} 
            expand="block">Open Store</IonButton>
          </IonItem>
      </IonCard>
      <IonCard>
          <IonItem>
            <IonImg src={BigW} class="StoreIcon" slot="start" />
            <IonLabel>Big W</IonLabel>
            <IonButton fill="outline" slot="end" onClick={() => setShowAlert1(true)} 
            expand="block">Open Store</IonButton>
          </IonItem>
      </IonCard>
      <IonCard >
          <IonItem>
            <IonImg src={IGA} class="StoreIcon" slot="start" />
            <IonLabel>IGA</IonLabel>
            <IonButton fill="outline" slot="end" onClick={() => setShowAlert1(true)} expand="block"
            >Open Store</IonButton>
          </IonItem>
      </IonCard>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
