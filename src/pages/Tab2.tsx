import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";
import Create from "../components/create/create";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">REGISTRO</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="primary" className="ion-padding">
        <IonCard color="dark">
          <IonCardHeader>
            <IonCardTitle className="ion-text-center">
              Registro de Usuario Nuevo
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <Create />
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
