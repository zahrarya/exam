"use client";

import React from "react";
import cardData from "../../../app/data";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
} from "@mui/material";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CatImage from "@/public/images/cat-02.jpg";
import Link from "next/link";

const ProductDetail = ({ params }) => {
  const { id } = React.use(params);
  const product = cardData[id];

  if (!product) {
    return (
      <Box sx={{ padding: 5 }}>
        <Typography variant="h5">Product not found</Typography>
      </Box>
    );
  }

  return (
    <div>
      <div className="text-white p-6  flex flex-col md:flex-row items-center md:items-start max-w-4xl mb-32">
        <img
          src="#"
          alt="image"
          className="w-full md:w-1/2 rounded-lg mb-4 md:mb-0 md:mr-6"
          width="300"
          height="200"
        />
        <div className="flex flex-col justify-between h-full">
          <div>
            <h2 className="text-xl font-bold mb-2">{product.title}</h2>
            <p className="text-sm text-gray-400 mb-4">TECH</p>
            <p className="text-sm mb-4">
              Take your web development skills to the next level with our
              Mastering Next.js 14 course. Dive deep into the latest features
              and functionalities of Next.js, including server-side rendering,
              API routes, and dynamic routing.
            </p>
          </div>
          <div>
            <p className="text-2xl font-bold mb-4">{product.price}</p>
            <Button
              sx={{
                padding: "10px",
                color: "white",
                backgroundColor: " #65b694 ",
                margin: 2,
              }}
            >
              Add To Cart
            </Button>
          </div>
        </div>
      </div>

      <Box sx={{ m: 5 }}>
        <Typography variant="h6">Similar Products</Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
            marginTop: 2,
          }}
        >
          {Object.keys(cardData)
            .slice(0, 4)
            .map((key) => {
              const { title, price } = cardData[key];
              return (
                <Link key={key} href={`/products/${key}`}>
                  <Card sx={{ width: 300, backgroundColor: "#7595a8" }}>
                    <Link href={`/products/${id}`}>
                      <CardMedia
                        component="img"
                        alt="cat"
                        height="140"
                        image={CatImage}
                      />
                    </Link>
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        {title}
                      </Typography>
                    </CardContent>
                    <CardActions
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <div>
                        <DehazeIcon />
                        TECH
                      </div>
                      <Typography>{price}</Typography>
                    </CardActions>
                  </Card>
                </Link>
              );
            })}
        </Box>
      </Box>
    </div>
  );
};

export default ProductDetail;
