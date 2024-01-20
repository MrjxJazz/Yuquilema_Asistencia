import React, { useEffect, useState } from "react";
import { IonGrid, IonRow, IonCol } from "@ionic/react";
import axios from "axios";

export default function Report() {
  const [apiData, setApiData] = useState([]);
  const [record, setRecord] = useState("");

  const aux = "https://cors-anywhere.herokuapp.com/";
  const myip = "http://40.75.120.104/apiweb/index.php/2";

  useEffect(() => {
    setRecord(localStorage.getItem("RECORD"));
    axios
      .get(aux + myip, {
        params: {
          record: record,
        },
      })
      .then(function (getData) {
        console.log("informacion " + getData);
        setApiData(getData.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Registro de Asistencia</h2>
      <IonGrid>
        <IonRow style={{ color: "black", fontWeight: "bold" }}>
          <IonCol>FECHA</IonCol>
          <IonCol>HORA</IonCol>
        </IonRow>
        {apiData.map((data) => (
          <IonRow key={data.record} style={{ color: "black" }}>
            <IonCol>{data.date}</IonCol>
            <IonCol>{data.time}</IonCol>
          </IonRow>
        ))}
      </IonGrid>
    </div>
  );
}
