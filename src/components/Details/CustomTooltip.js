import { ClickAwayListener, Tooltip } from "@material-ui/core";
import React, { Fragment, useState } from "react";

export default function CustomTooltip(props) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <ClickAwayListener>
      <div>
        <Tooltip title="coming soon..." arrow onClose={handleClose} open={open}>
          <Fragment onClick={handleOpen} onHover={handleOpen}>{props.children }</Fragment>
        </Tooltip>
      </div>
    </ClickAwayListener>
  );
}
