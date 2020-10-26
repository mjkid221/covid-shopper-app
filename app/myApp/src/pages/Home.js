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
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import { BrowserPluginWeb } from '@capacitor/core';


const Home = () => {
  const [showAlert1, setShowAlert1] = useState(false);
  const [myCustomIcon] = "https://is3-ssl.mzstatic.com/image/thumb/Purple118/v4/27/d3/df/27d3df28-6d3a-ed40-13d0-6c0ed276a285/source/256x256bb.jpg"
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>COVID Shopper</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonButton onClick={() => setShowAlert1(true)} expand="block">Show Alert 1</IonButton>
      <IonAlert
          isOpen={showAlert1}
          onDidDismiss={() => setShowAlert1(false)}
          cssClass='my-custom-class'
          header={'Stay Safe Reminder'}
          subHeader={'Remeber to keep 1.5m apart from others'}
          message={'Maintain social distancing when out and wear a mask when unable to.'}
          buttons={['OK']}
        />
      <IonCard>
        <IonImg src="https://cdn.pixabay.com/photo/2020/03/27/17/03/shopping-4974313__480.jpg" />
          <IonItem>
          <IonCardHeader>
          <IonCardSubtitle>Tips for Shopping Safely</IonCardSubtitle>
          <IonCardTitle>Here's three things to do before you go shopping</IonCardTitle>
          </IonCardHeader>
          </IonItem>
      </IonCard>  
      <IonCard>
          <IonItem>
            <IonIcon icon={myCustomIcon} slot="start" />
            <IonLabel>Woolworths</IonLabel>
            <IonButton fill="outline" slot="end">Open Store</IonButton>
          </IonItem>
      </IonCard>
      <IonCard>
          <IonItem>
            <IonIcon icon={pin} slot="start" />
            <IonLabel>Coles</IonLabel>
            <IonButton fill="outline" slot="end">Open Store</IonButton>
          </IonItem>
      </IonCard>
      <IonCard>
          <IonItem>
            <IonIcon icon={pin} slot="start" />
            <IonLabel>Kmart</IonLabel>
            <IonButton fill="outline" slot="end">Open Store</IonButton>
          </IonItem>
      </IonCard>
      <IonCard>
          <IonItem>
            <IonIcon icon={pin} slot="start" />
            <IonLabel>Big W</IonLabel>
            <IonButton fill="outline" slot="end">Open Store</IonButton>
          </IonItem>
      </IonCard>
      <IonCard>
          <IonItem>
            <IonIcon icon={pin} slot="start" />
            <IonLabel>IGA</IonLabel>
            <IonButton fill="outline" slot="end">Open Store</IonButton>
          </IonItem>
      </IonCard>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
