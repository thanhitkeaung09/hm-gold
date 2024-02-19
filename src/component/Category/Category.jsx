import { useGetCategoriesQuery } from "../../api/categoryApi";
import {
  useGetFeatureQuery,
  useGetListingQuery,
} from "../../api/real_estate_listApi";
import { Skeleton } from "@mui/material";
import Card from "../../component/Listing/Page";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Category = ({ selectedLanguage }) => {
  const language = useSelector((state) => state.language.defaultLanguage);


  const { data, isError, isSuccess, isLoading } = useGetFeatureQuery(language);

  console.log(data);
  let content = null;
  if (isError) {
    content = (
      <>
        <div className="">Category Fetch Error</div>
      </>
    );
  }

  if (isLoading) {
    content = (
      <>
        <div className="ml-1 hidden md:flex justify-center gap-2">
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={500}
            height={300}
          />
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={500}
            height={300}
          />
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={500}
            height={300}
          />
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={500}
            height={300}
          />
        </div>

        <div className="ml-1 flex justify-center md:hidden gap-2">
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={500}
            height={170}
          />
          <Skeleton
            variant="rectangular"
            animation="wave"
            width={500}
            height={170}
          />
        </div>
      </>
    );
  }

  if (isSuccess) {
    const { data: list_data } = data;
    console.log(list_data);
    content = (
      <>
        <div className="grid grid-cols-12 gap-3">
          {list_data.map((el, index) => {
            return (
              <div key={index} className="col-span-12 md:col-span-3">
                <Card data={el} />
              </div>
            );
          })}
        </div>
      
      </>
    );
  }

  return (
    <div className="w-[95%] md:w-[85%] mx-auto pb-16 pt-5">
      <div className="flex justify-between items-center pb-12 md:pb-16">
        <div className="relative flex items-center  ">
          <div className=" w-6 md:w-52 border border-primary-dark"></div>
          <h1 className="pl-1 w-[158px] md:w-[300px] text-lg md:text-3xl font-bold text-gray-800 me-3">
            {selectedLanguage === "en" ? "Featured Products " : "ထုတ်ကုန်ပစ္စည်းများ"}
          </h1>
        </div>
        <div className=" w-full border border-primary-dark me-3"></div>

        <NavLink
          to="/products"
          className="text-gray-600 text-sm hover:text-primary-dark w-[435px] md:w-[200px]"
        >
          {selectedLanguage === "en" ? "See All" : "ပိုမိုကြည့်ရှုရန်"}
        </NavLink>
      </div>
      {content}
    </div>
  );
};

export default Category;
