import { Box, Typography } from "@mui/material";
import FiberSmartRecordIcon from "@mui/icons-material/FiberSmartRecord";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: 5,
        backgroundColor: "#0c2535",
      }}
    >
      <FiberSmartRecordIcon sx={{ ml: 2 }} />
      <Typography sx={{ mr: 2 }}>
        Copyright © 2025 All rights reserved.
      </Typography>
    </Box>
  );
}
