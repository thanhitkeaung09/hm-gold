import { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../../Pages/Real_Estate_Product_Page/DetailPage";
import { useGetListingQuery } from "../../api/real_estate_listApi";
import { Pagination, Skeleton } from "@mui/material";
import NoData from "../../Pages/NotFound/NoData";

const Page = () => {
  const [pageNumber, setPageNumber] = useState();
  const language = useSelector((state) => state.language.defaultLanguage);
  const { data, isError, isLoading, isSuccess, refetch } = useGetListingQuery({
    lang: language,
    page: pageNumber,
  });

  const handlePagination = (page) => {
    setPageNumber(page);
    refetch({ lang: language, page: pageNumber });
  };

  console.log(data);
  let content = null;
  if (isError) {
    content = <>Product Fetching Error</>;
  }

  if (isLoading) {
    content = (
      <>
        <div className="col-span-12 md:col-span-3">
          <div className="block md:hidden">
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={350}
              height={400}
            />
          </div>

          <div className="hidden md:block">
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={300}
              height={400}
            />
          </div>
        </div>

        <div className="col-span-12 md:col-span-3">
          <div className="block md:hidden">
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={350}
              height={400}
            />
          </div>

          <div className="hidden md:block">
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={300}
              height={400}
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-3">
          <div className="block md:hidden">
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={350}
              height={400}
            />
          </div>

          <div className="hidden md:block">
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={300}
              height={400}
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-3">
          <div className="block md:hidden">
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={350}
              height={400}
            />
          </div>

          <div className="hidden md:block">
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={300}
              height={400}
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-3">
          <div className="block md:hidden">
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={350}
              height={400}
            />
          </div>

          <div className="hidden md:block">
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={300}
              height={400}
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-3">
          <div className="block md:hidden">
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={350}
              height={400}
            />
          </div>

          <div className="hidden md:block">
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={300}
              height={400}
            />
          </div>
        </div>
      </>
    );
  }

  if (isSuccess) {
    const { data: productDatas } = data;
    console.log(productDatas);
    content = (
      <>
        {productDatas?.length > 0 ? (
          productDatas.map((el, index) => {
            return (
              <div className="col-span-12 md:col-span-3" key={index}>
                <Card data={el} />
              </div>
            );
          })
        ) : (
          <div className="col-span-12 ">
            <NoData />
          </div>
        )}
      </>
    );
  }
  return (
    <div className="w-[95%] md:w-[85%] mx-auto pb-16 pt-5">
      <div className="my-5">
        <h1 className="pl-1 w-[200px] md:w-[300px] text-lg md:text-3xl font-bold text-gray-800 me-3">
          {language === "en" ? "Our Listings" : "ကျွန်ုပ်တို့၏ပစ္စည်းများ"}
        </h1>
      </div>
      <div className="grid grid-cols-12 gap-3">{content}</div>
      <Pagination
        sx={{ marginTop: "10px" }}
        onChange={(ChangeEvent, page) => handlePagination(page)}
        count={data?.meta?.total_page}
      />
    </div>
  );
};

export default Page;
