import React from "react";
import Proptypes from "prop-types";
import GeneralModal from "../../../common/modal/generalModal";

export default function AcceptModal({
  metadata,
  handleCloseButton,
  handleDownloadFile,
}) {
  return (
    <GeneralModal
      title="[ file download ]"
      name={metadata.name}
      size={metadata.size}
      secondaryAction={handleDownloadFile}
      secondaryButtonText="Download"
      handleClose={handleCloseButton}
    />
  );
}

AcceptModal.propTypes = {
  metadata: Proptypes.object.isRequired,
  handleCloseButton: Proptypes.func.isRequired,
  handleDownloadFile: Proptypes.func.isRequired,
};
