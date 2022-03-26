import { Modal } from "@mui/material";
import React from "react";
import {
  ModalContainer,
  TitleImage,
  ModalContent,
  ModalDescription,
  ModalTitle,
  ModalBtn,
} from "./Modal";

function EventModal({ data, open, close }) {
  return (
    <Modal open={open} onClose={close}>
      <ModalContainer>
        <TitleImage img={data?.image} />
        <ModalContent>
          <ModalTitle>{data?.title}</ModalTitle>
          <ModalDescription></ModalDescription>
          <ModalBtn href={data?.registrationLink} />
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
}

export default EventModal;
