import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
} from "@ionic/react";
import { person, lockClosed, star, logIn, personAdd } from "ionicons/icons";
import Report from "../components/read/report";
import Attendant from "../components/register/attendant";

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">
            REGISTRO DE ASISTENCIA
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="primary" className="ion-padding">
        <IonCard color="dark">
          <IonCardContent>
            <Attendant />
            <br />
            <Report />
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
