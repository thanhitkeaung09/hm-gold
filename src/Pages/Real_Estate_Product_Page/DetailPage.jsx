import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import React from "react";
import { IoLayersOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const DetailPage = ({ data }) => {
  console.log(data);
  return (
    <div>
      <Link to={`/real-estate/${data.id}`}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          <Card
            sx={{
              width: 345,
              padding: "10px",
              "&:hover": {
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
              },
            }}
          >
            <Box sx={{ position: "relative" }}>
              <CardMedia
                sx={{ height: 250, objectFit: "cover" }}
                image={data.images[0]}
                title="green iguana"
              />
              <Typography
                width={60}
                sx={{
                  backgroundColor: "#ffd700",
                  position: "absolute",
                  top: 0,
                  right: 0,
                  padding: "10px",
                  borderRadius: "0px 0px 0px 10px",
                  fontSize: "13px",
                  textAlign: "center",
                }}
              >
                {data.category}
              </Typography>
              <Box
                sx={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  padding: "5px",
                  backgroundColor: "#ffffff",
                  // width: "60px",
                  height: "30px",
                  margin: "2px",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "5px",
                }}
              >
                <IoLayersOutline />
                <Typography sx={{ fontSize: "12px", marginLeft: "5px" }}>
                  {data.floor}
                </Typography>
              </Box>
            </Box>

            <CardContent sx={{ paddingLeft: "0px" }}>
              <Box sx={{ marginBottom: "10px" }}>
                <Box>
                  <Typography
                    sx={{ fontSize: "13px" }}
                  >{`${data.category} in ${data.township} for ${data.parent_category}`}</Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "25px",
                      color: "#ffb300",
                      fontWeight: "bold",
                    }}
                  >{`${
                    data.is_usd ? data.price + "USD" : data.price + " Lakh"
                  }`}</Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Box sx={{ marginRight: "5px" }}>
                  <Chip sx={{ color: "#333333" }} label={data.region} />
                </Box>
                <Box>
                  <Chip label={data.township} />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Link>
    </div>
  );
};

export default DetailPage;
