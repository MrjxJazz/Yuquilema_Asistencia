import React, { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Create() {
  let history = useHistory();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [login, setLogin] = useState([]);

  const aux = "https://cors-anywhere.herokuapp.com/";
  const myip = "http://40.75.120.104/apiweb/";

  const sendDataToApi = () => {
    axios
      .get(aux + myip, {
        params: {
          user: user,
          pass: pass,
        },
      })
      .then(function (response) {
        setLogin(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        history.push("/Tab5");
      });
  };

  login.map((data) => {
    localStorage.setItem("RECORD", data.record);
    localStorage.setItem("ID", data.id);
    localStorage.setItem("NAME", data.names);
    localStorage.setItem("LASTNAME", data.lastnames);
    if (data.record == 0) {
      alert("¡Valide Usuario!");
    }
  });

  return (
    <div>
      <Form>
        <Form.Field>
          <label>
            Usuario <span style={{ color: "red" }}>*</span>
          </label>
          <input
            name="user"
            onChange={(e) => setUser(e.target.value)}
            placeholder="Usuario"
          />
        </Form.Field>
        <Form.Field>
          <label>
            Contraseña <span style={{ color: "red" }}>*</span>
          </label>
          <input
            name="pass"
            type="password"
            onChange={(e) => setPass(e.target.value)}
            placeholder="Clave"
          />
        </Form.Field>
        <center>
          <Button type="submit" color="linkedin" onClick={sendDataToApi}>
            Ingresar
          </Button>
        </center>
      </Form>
    </div>
  );
}
