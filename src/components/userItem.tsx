import React from "react";
import { IonItem, IonLabel } from "@ionic/react";

import { User } from "./models/user.models";

const UserItem: React.FC<{ user: User }> = ({ user }) => {
  return (
    <IonItem>
      <IonLabel>
        <h1>{user.id}</h1>
        <h1>{user.name}</h1>
        <h1>{user.username}</h1>
        <h1>{user.email}</h1>
      </IonLabel>
    </IonItem>
  );
};

export default UserItem;
