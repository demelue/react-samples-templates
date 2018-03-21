import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Alert = props => {

  const notify = () => {
    toast("Default Notification !");
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_CENTER
    });
    toast.error("Error Notification !", {
      position: toast.POSITION.TOP_LEFT
    });
    toast.warn("Warning Notification !", {
      position: toast.POSITION.BOTTOM_LEFT
    });
    toast.info("Info Notification !", {
      position: toast.POSITION.BOTTOM_CENTER
    });
  }

  return (
    <div align="center">
      <p> Click the button below to show notification </p>
      <button onClick={notify}> Click Me </button>
      <ToastContainer />
    </div>
    );
}

export default Alert;
