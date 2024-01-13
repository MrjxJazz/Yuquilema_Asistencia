import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab2.css";
import {
  IonList,
  IonItem,
  IonInput,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonIcon,
  IonButton,
} from "@ionic/react";
import { save } from "ionicons/icons";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Registro De Usuario</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="dark" className="ion-padding">
        <IonList>
          <IonItem>
            <IonInput label="Cédula" maxlength={10}></IonInput>
          </IonItem>
        </IonList>
        <IonCard color={"dark"}>
          <IonCardHeader>
            <IonCardSubtitle>
              Registro de Asistencia Estudiantil
            </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem>
                <IonInput label="Cédula" maxlength={10}></IonInput>
              </IonItem>
              <IonItem>
                <IonInput label="Nombre" maxlength={50}></IonInput>
              </IonItem>
              <IonItem>
                <IonInput label="Apellido" maxlength={50}></IonInput>
              </IonItem>
              <IonItem>
                <IonInput label="Email" maxlength={100} type="email"></IonInput>
              </IonItem>
              <IonItem>
                <IonInput label="Celular" maxlength={10}></IonInput>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
        <IonButton color="primary" expand="block" shape="round">
          Registrar
          <IonIcon slot="start" icon={save}></IonIcon>
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
