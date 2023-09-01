import { Modal } from "@chakra-ui/react";
import { Router } from "next/router";
import React from "react";
import { useState } from "react";
import { GrClose } from "react-icons/gr";

type Props = {};

const BannerModal = (props: Props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    setTimeout(() => {
      handleOpen();
    }, 2000);
  }, []);

  return (
    <div className="">
      <Modal
        isOpen={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-[#EDA822] horizontal-gradient2 p-8 rounded-2xl w-[60%] ">
          <a href="/events" target="_blank" rel="norefferer">
            <img
              src="/banner/sevent.png"
              className="w-full  active:scale-95"
              onClick={handleClose}
            />
          </a>
          <div className="absolute top-2 right-2 cursor-pointer  ">
            <GrClose onClick={handleClose} />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default BannerModal;
