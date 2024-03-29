import React, { useContext } from "react";
import { Button } from "@material-ui/core";

import { SocketContext } from "../SocketContext";

export const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  return (
    <>
      {call.isReceivedCall && !callAccepted && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained" color="primary" onClick={answerCall}>
            Answer
          </Button>
        </div>
      )}
    </>
  );
};

export default Notifications;
