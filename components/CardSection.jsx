import React from "react";
import ImgMediaCard from "../components/Card";
import cardData from "../app/data";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

function CardSection() {
  return (
    <div style={{ backgroundColor: "#0c2535" }}>
      <Box
        sx={{ display: "flex", justifyContent: "space-between", padding: 5 }}
      >
        <Typography>Brand New</Typography>
        <Link href={"/products"}>View All Collection</Link>
      </Box>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "60px",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
          padding: 50,
        }}
      >
        {Object.keys(cardData).map((key) => {
          const { title, price } = cardData[key];
          return (
            <Link key={key} href={`/products/${key}`}>
              <ImgMediaCard title={title} price={price} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CardSection;
