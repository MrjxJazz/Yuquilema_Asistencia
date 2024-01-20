import React, { useEffect, useState } from "react";
import { IonGrid, IonRow, IonCol } from "@ionic/react";
import axios from "axios";

export default function Read() {
  const aux = "https://cors-anywhere.herokuapp.com/";
  const myip = "http://40.75.120.104/apiweb/index.php/3";

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios.get(aux + myip).then((getData) => {
      setApiData(getData.data);
    });
  }, []);

  return (
    <IonGrid>
      <IonRow style={{ color: "light", fontWeight: "bold" }}>
        <IonCol>COD</IonCol>
        <IonCol>NOMBRES</IonCol>
        <IonCol>APELLIDOS</IonCol>
      </IonRow>
      {apiData.map((data) => (
        <IonRow key={data.record} style={{ color: "black" }}>
          <IonCol>{data.record}</IonCol>
          <IonCol>{data.names}</IonCol>
          <IonCol>{data.lastnames}</IonCol>
        </IonRow>
      ))}
    </IonGrid>
  );
}
