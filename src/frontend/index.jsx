import React, { useEffect, useState } from "react";
import ForgeReconciler, {
  Text,
  SectionMessage,
  LinkButton,
  SectionMessageAction,
} from "@forge/react";
import { invoke } from "@forge/bridge";
const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    invoke("getText", { example: "my-invoke-variable" }).then(setData);
  }, []);
  return (
    <>
      <Text>Hello world!</Text>
      <SectionMessage
        appearance="warning"
        title="Warning Title"
        actions={[
          <SectionMessageAction
            key={`warning-acknowledge-action`}
            onClick={() => console.log("Action clicked")}
          >
            Acknowledge
          </SectionMessageAction>,
        ]}
      >
        <Text>Warning message</Text>
      </SectionMessage>
      <Text>{data ? data : "Loading..."}</Text>
      <LinkButton onClick={() => console.log("LinkButton clicked")}>
        Link Button
      </LinkButton>
    </>
  );
};
ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
