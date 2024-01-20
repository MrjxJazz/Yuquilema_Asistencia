import React, { useState, useEffect } from "react";
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import Read from "../components/read/read.jsx";
import "./Tab3.css";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="ion-text-center">LISTA DE USUARIOS</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="primary" className="ion-padding">
        <Read />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
