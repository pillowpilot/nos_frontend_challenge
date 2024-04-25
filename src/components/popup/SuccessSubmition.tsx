import { Modal, Paper, Stack, Typography } from "@mui/material";
import { FC } from "react";
import CheckIcon from "@mui/icons-material/Check";
import { AcceptBtn } from "../buttons/AcceptBtn";

interface SuccessSubmitionProps {
  open: boolean;
  onAccept: () => void;
}

export const SuccessSubmition: FC<SuccessSubmitionProps> = ({
  open,
  onAccept,
}) => {
  return (
    <Modal
      open={open}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        sx={{
          margin: 1,
          borderRadius: 2,
          py: 4,
          px: 5,
          maxWidth: "339px",
        }}
      >
        <Stack gap={4}>
          <Stack gap={2}>
            <CheckIcon
              sx={{
                mx: "auto",
                width: "92px",
                height: "92px",
                borderRadius: "50% 50%",
                backgroundColor: "#D9F4EC",
              }}
              htmlColor="#0EDFA1"
            />
            <Typography variant="h1" align="center">
              Tu postulación fue enviada con éxito
            </Typography>
          </Stack>
          <AcceptBtn onClick={onAccept} />
        </Stack>
      </Paper>
    </Modal>
  );
};
