import React from "react";
import "aos/dist/aos.css";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import ModalImage from "react-modal-image";
import OnlineServices from "../../assets/services_icons/OnlineServices.jpg";
import OnlineServicesNoCrop from "../../assets/services_icons/OnlineServicesNoCrop.jpg";
import ForOnlineServices from "../../assets/services_icons/ForOnlineServices.jpg";
import CloseIcon from "../../assets/services_icons/closeIcon.png";

const customStyles = {
  content: {
    margin: "auto",
    width: "95%",
    position: "unset",
    inset: "unset",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    // height: "500px",
    // marginRight: "-50%",
    // transform: "translate(-50%, -50%)",
  },
};

// Modal.setAppElement("#yourAppElement");

export default function StepsWeFollow() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="m-auto mt-16">
      <p
        data-aos="fade-down"
        className="text-3xl sm:text-4xl text-center tracking-wider mb-3"
      >
        For Online Services
      </p>
      <div data-aos="fade-up">
        <img
          onClick={openModal}
          src={ForOnlineServices}
          alt="ONLINE-SERVICE-AROUND-INDIA"
          border="0"
          style={{ width: "75%", margin: "auto" }}
          className="cursor-pointer"
        />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img
          src={CloseIcon}
          alt="close"
          onClick={closeModal}
          style={{ width: "25px" }}
          className="cursor-pointer float-right"
        />
        <img
          onClick={openModal}
          src={ForOnlineServices}
          alt="ONLINE-SERVICE-AROUND-INDIA"
          border="0"
        />
      </Modal>
    </div>
  );
}

// <div className="m-auto  mt-16">
//   <p
//     data-aos="fade-down"
//     className="text-4xl text-center tracking-wider mb-6"
//   >
//     Steps We Follow
//   </p>
//   <div
//     style={{
//       width: "75%",
//       margin: "auto",
//       marginBottom: "50px",
//     }}
//     data-aos="fade-up"
//   >
//     <ModalImage
//       small={OnlineServices}
//       large={OnlineServicesNoCrop}
//       hideDownload="true"
//     />
//   </div>
// </div>
