import React from "react";
import Proptypes from "prop-types";
import GeneralModal from "../../../common/modal/generalModal";

export default function FileMetadataModal({
  filemetadata,
  handleCloseFileModal,
  handleSendFile,
}) {
  return (
    <GeneralModal
      title="[ File Selected ]"
      name={filemetadata.name}
      size={filemetadata.size}
      primaryAction={handleSendFile}
      primaryButtonText="Yes"
      secondaryAction={handleCloseFileModal}
      secondaryButtonText="No"
      handleClose={handleCloseFileModal}
    />
  );
}

FileMetadataModal.propTypes = {
  filemetadata: Proptypes.object.isRequired,
};
