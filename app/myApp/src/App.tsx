import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle, cart, reader, home, scan } from 'ionicons/icons';
import ViewStores from './pages/ViewStores';
import Home from './pages/Home';
import ViewShoppingList from './pages/ViewShoppingList'
import MyShoppingLists from './pages/MyShoppingLists'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/scan" component={Home} exact={true} />
          <Route path="/home" component={Home} exact={true} />
          <Route path="/stores" component={ViewStores} exact={true} />
          <Route path="/lists" component={MyShoppingLists} />
          <Route path="/shopping-list/:id" component={ViewShoppingList} />
          <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
            <IonTabButton tab="scan" href="/scan">
              <IonIcon icon={scan} />
              <IonLabel>Scan</IonLabel>
            </IonTabButton>
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="stores" href="/stores">
            <IonIcon icon={cart} />
            <IonLabel>Stores</IonLabel>
          </IonTabButton>
          <IonTabButton tab="lists" href="/lists">
            <IonIcon icon={reader} />
            <IonLabel>Lists</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
