import { Box, Typography } from "@mui/material";
import { NotificationType } from '../types/index';

export default function NotificationBox({ type, title, description }: NotificationType) {
  return (
    <Box className={`notification ${type}`}>
      <Typography variant={"subtitle1"}>{title}</Typography>
      <Typography variant={"caption"}>{description}</Typography>
    </Box>
  );
};
