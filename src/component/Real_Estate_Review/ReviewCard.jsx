import styled from "@emotion/styled";
import { LinearProgress, Rating, linearProgressClasses } from "@mui/material";
import React from "react";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 2,
    backgroundColor: "#e9b92b",
  },
}));

const ReviewCard = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className="">
        <h1 className="text-sm md:text-sm">
          <span className=" font-bold text-sm md:text-3xl">o.5</span> out of 5
        </h1>
        <div className="my-5">
          <div className="flex">
            <Rating
              name="read-only"
              defaultValue={data?.averageRating ? data?.averageRating : 1}
              precision={data?.averageRating ? data?.averageRating : 1}
              readOnly
            />
            <div className="text-gray-400">( {data?.averageRating})</div>
          </div>
          <p className="text-gray-400 text-sm md:text-sm">1 customer ratings</p>
        </div>
        <div className="w-96">
          {/* 5 start */}
          <div className="flex items-center">
            <span className="mr-1 text-sm md:text-sm">5 star</span>
            <div className="flex items-center">
              <div className="w-60">
                <BorderLinearProgress
                  variant="determinate"
                  value={data?.ratingFive}
                />
              </div>
            </div>
            <span className="ml-2 text-sm md:text-sm">{data?.ratingFive}%</span>
          </div>
          {/* 4 star */}
          <div className="flex items-center my-3">
            <span className="mr-1 text-sm md:text-sm">4 star</span>
            <div className="flex items-center">
              <div className="w-60">
                <BorderLinearProgress
                  variant="determinate"
                  value={data?.ratingFour}
                />
              </div>
            </div>
            <span className="ml-2 text-sm md:text-sm">{data?.ratingFour}%</span>
          </div>
          {/* 3 star */}
          <div className="flex items-center">
            <span className="mr-1 text-sm md:text-sm">3 star</span>
            <div className="flex items-center">
              <div className="w-60">
                <BorderLinearProgress
                  variant="determinate"
                  value={data?.ratingThree}
                />
              </div>
            </div>
            <span className="ml-2 text-sm md:text-sm">
              {data?.ratingThree}%
            </span>
          </div>
          {/* 2 star */}
          <div className="flex items-center my-3">
            <span className="mr-1 text-sm md:text-sm">2 star</span>
            <div className="flex items-center">
              <div className="w-60">
                <BorderLinearProgress
                  variant="determinate"
                  value={data?.ratingTwo}
                />
              </div>
            </div>
            <span className="ml-2 text-sm md:text-sm">{data?.ratingTwo}%</span>
          </div>
          {/* 1 star */}
          <div className="flex items-center mb-5">
            <span className="mr-1 text-sm md:text-sm">1 star</span>
            <div className="flex items-center">
              <div className="w-60">
                <BorderLinearProgress
                  variant="determinate"
                  value={data?.ratingOne}
                />
              </div>
            </div>
            <span className="ml-2 text-sm md:text-sm">{data?.ratingOne}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
