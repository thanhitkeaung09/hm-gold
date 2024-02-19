import { Avatar } from "@mui/material";
import React from "react";

const CommentCard = ({ data }) => {
  // console.log(data.data.comment);
  return (
    <div>
      {data.data.comment.map((el, index) => {
        console.log(el);
        return (
          <>
            <div className="flex my-10" key={index}>
              <div className="mr-5">
                <Avatar alt="Remy Sharp" src={el.avatar} />
              </div>
              <div className="">
                <p className="font-bold text-sm md:text-sm">{el.name}</p>

                {/* <div className="flex">
            <p className="text-gray-400 mr-3 text-sm md:text-sm">
              {el.date}
            </p>
          </div> */}
                <p className="text-gray-400 text-sm md:text-sm">{el.comment}</p>
              </div>
            </div>

            {/* <div className="">
            {el.replies &&
                el.replies.map((el, index) => {
                  return (
                    <ul
                      className="text-gray-400 text-sm list-disc ml-10 my-2"
                      key={index}
                    >
                      <li>{el.comment}</li>
                    </ul>
                  );
                })}
            </div> */}
          </>
        );
      })}
    </div>
  );
};

export default CommentCard;
