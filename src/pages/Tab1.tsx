import {
  IonCard,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCardContent,
  IonAvatar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import Login from "./../components/login/login";
import { person, lockClosed, star, logIn, personAdd } from "ionicons/icons";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">LOGIN</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="primary" className="ion-padding">
        <IonCard color="dark" className="ion-text-center">
          <center>
            <IonAvatar>
              <img
                alt="Imagen"
                src="./assets/images/login.jpg"
                width={100}
                className="ion-margin-top ion-margin-bottom"
              />
            </IonAvatar>
          </center>
          <br />
          <IonCardContent>
            <center>
              <h1>BIENVENIDO</h1>
            </center>
            <br />
            <Login />
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
