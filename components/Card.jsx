"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import CatImage from "../public/images/cat-02.jpg";
import DehazeIcon from "@mui/icons-material/Dehaze";

export default function ImgMediaCard({ title, price, id }) {
  return (
    <Card sx={{ width: 300, backgroundColor: "#7595a8" }}>
      <Link href={`/products/${id}`}>
        <CardMedia component="img" alt="cat" height="140" image={CatImage} />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <DehazeIcon />
          TECH
        </div>
        <Typography>{price}</Typography>
      </CardActions>
    </Card>
  );
}
