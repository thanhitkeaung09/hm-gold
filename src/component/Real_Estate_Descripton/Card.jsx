import React from "react";
import data from "../../api/data/description.json";
import { Typography } from "@mui/material";

const Card = ({ data }) => {
  console.log(data?.data?.description);
  return (
    <>
      <div className="flex  justify-normal md:justify-center items-center">
        <div className="m-5">
          <div className="">
            <h1 className="text-xl font-bold">Description</h1>
          </div>

          <div
            className=""
            dangerouslySetInnerHTML={{ __html: data?.data?.description }}
          ></div>
          {/* <div className="flex gap-2 my-3">
            <p>-</p>
            <Typography sx={{ fontSize: "13px" }}>
              Land Size 100 x 100
            </Typography>
          </div>

          <div className="flex gap-2 my-3">
            <p>-</p>
            <Typography sx={{ fontSize: "13px" }}>2 RC</Typography>
          </div>

          <div className="flex gap-2 my-3">
            <p>-</p>
            <Typography sx={{ fontSize: "13px" }}>
              4 master bed rooms , 2 single
            </Typography>
          </div>

          <div className="flex gap-2 my-3">
            <p>-</p>
            <Typography sx={{ fontSize: "13px" }}>Decorated</Typography>
          </div>

          <div className="flex gap-2 my-3">
            <p>-</p>
            <Typography sx={{ fontSize: "13px" }}>All decorated</Typography>
          </div>

          <div className="flex gap-2 my-3">
            <p>-</p>
            <Typography sx={{ fontSize: "13px" }}>
              Rental Fee - 5000$ per month (nego)
            </Typography>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Card;
