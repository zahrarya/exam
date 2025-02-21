import { Box, Button, Typography } from "@mui/material";

export default function HomeSection() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "300px",
          textAlign: "center",
          flexWrap: "wrap",
          marginBottom: "8",
        }}
      >
        <Typography variant="h3" sx={{ margin: 3 }}>
          All your digital products is one click away
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        </Typography>
        <div className="mt-5">
          <Button
            sx={{ backgroundColor: "#65b694", padding: "10px", color: "white" }}
          >
            Get Started
          </Button>
          <Button
            sx={{
              backgroundColor: "transparent",
              padding: "10px",
              color: "white",
              border: "1px #65b694 solid ",
              margin: 2,
            }}
          >
            Learn More
          </Button>
        </div>
      </Box>
    </>
  );
}
