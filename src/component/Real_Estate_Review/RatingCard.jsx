import { Avatar, Rating } from "@mui/material";
import React from "react";

const RatingCard = ({ data }) => {
  return (
    <div>
      {data.map((el, index) => {
        return (
          <div className="flex my-10" key={index}>
            <div className="mr-5 mt-3">
              <Avatar alt="Remy Sharp" src={el.customer.avatarMod} />
            </div>
            <div className="">
              <p className="font-bold text-sm md:text-sm">{el.customer.name}</p>
              <div className="flex my-3">
                <Rating name="read-only" value={el.rating} readOnly />
                <div className="text-gray-400 text-sm md:text-sm">( 0. 5)</div>
              </div>
              <div className="flex">
                <p className="text-gray-400 mr-3 text-sm md:text-sm">
                  {el.date}
                </p>
              </div>
              <p className="text-gray-400 text-sm md:text-sm">{el.review}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RatingCard;
