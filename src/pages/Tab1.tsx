import {
  IonButton,
  IonCard,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCardContent,
  IonGrid,
  IonCol,
  IonRow,
  IonIcon,
  IonInput,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import { person, lockClosed, star, logIn, personAdd } from "ionicons/icons";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Registro</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="primary" className="ion-padding">
        <IonCard color={"dark"} >
          <br />
          <center>
            <img alt="Imagen" src="./assets/images/login.jpg" width={100}></img>
            <br />
          </center>
          <br />
          <IonCardContent color="primary">
            <IonGrid fixed={true}>
              <IonRow>
                <IonCol>
                  <IonIcon aria-hidden="true" icon={person} size="small" />
                </IonCol>
                <IonCol size="auto">
                  <IonInput
                    placeholder="Ingrese Usuario"
                    maxlength={20}
                  ></IonInput>
                </IonCol>
              </IonRow>
            </IonGrid>
            <IonGrid fixed={true}>
              <IonRow>
                <IonCol>
                  <IonIcon aria-hidden="true" icon={lockClosed} size="large" />
                </IonCol>
                <IonCol size="auto">
                  <IonInput
                    placeholder="Ingrese Clave"
                    type="password"
                    value=""
                  ></IonInput>
                </IonCol>
              </IonRow>
            </IonGrid>
            <IonButton color="secondary" expand="block" shape="round">
              Ingresar
              <IonIcon slot="start" icon={logIn}></IonIcon>
            </IonButton>
            <br />
            <br />
            <br />
            <center>
              <h6>
                {" "}
                Por su seguridad NO comparta su usuario y clave con terceros
              </h6>
            </center>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
