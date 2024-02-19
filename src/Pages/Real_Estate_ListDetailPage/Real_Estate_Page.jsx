import { useParams } from "react-router-dom";
import { useGetListByIdQuery } from "../../api/real_estate_listApi";
import { useDispatch, useSelector } from "react-redux";
import SwiperPage from "./Real_Estate_SwiperPage";
import { Backdrop, Button, Skeleton } from "@mui/material";
import DetailPage from "./Real_Estate_DetailPage";
import { LiaClipboardListSolid } from "react-icons/lia";
import { toogleFormDialog } from "../../feature/bookingSlice";
import { toogleInqueryFormDialog } from "../../feature/inquerySlice";
import BookingCard from "../../component/Booking/Card";
import InqueryCard from "../../component/Real_Estate_Inquery/Card";
import { LiaQuestionSolid } from "react-icons/lia";
import RealEstateYoutube from "../../component/Real_Estate_Youtube/Card";
import RealEstateDescripton from "../../component/Real_Estate_Descripton/Card";
import RealEstateInformation from "../../component/Real_Estate_Near_Information/Card";
import RealEstateComment from "../../component/Real_Estate_Comment/Card";
import RealEstateReview from "../../component/Real_Estate_Review/Card";
import ReviewCard from "../../component/Real_Estate_Review/ReviewCard";
import { useGetRatingQuery } from "../../api/ratingApi";
import { useEffect } from "react";

const Page = () => {
  const params = useParams();
  const language = useSelector((state) => state.language.defaultLanguage);
  const booking = useSelector((state) => state.booking.openFormDialog);
  const inquery = useSelector((state) => state.inquery.openInqueryFormDialog);
  const isReview = useSelector((state) => state.review.isReview);
  const token = localStorage.getItem("real-estate-encrypted-key");
  const dispatch = useDispatch();
  const {
    data,
    isError,
    isLoading,
    isSuccess,
   
  } = useGetListByIdQuery({
    lang: language,
    id: params.id,
  });

  const {
    data: ratingData,
    isError: ratingError,
    isLoading: ratingLoading,
    isSuccess: ratingSuccess,
    refetch,
  } = useGetRatingQuery({ lang: language, id: params.id, token });
  console.log(isReview);

  useEffect(() => {
    console.log(isReview);
    console.log("hello min ga lar par");
    refetch();
    
  }, [isReview]);

  let ratingContent = null;

  if (ratingError) {
    ratingContent = <></>;
  }

  if (ratingLoading) {
    ratingContent = <>Rating Loading</>;
  }

  if (ratingSuccess) {
    const { data } = ratingData;
    console.log(data);
    ratingContent = (
      <>
        <ReviewCard data={data} />
      </>
    );
  }

  let content = null;

  if (isError) {
    content = (
      <>
        <div className="">Fetch By Id Error</div>
      </>
    );
  }

  if (isLoading) {
    content = (
      <>
        <div className="hidden md:block">
          <div className="flex justify-center">
            <Skeleton variant="rounded" width={500} height={500} />
          </div>
          <div className="flex justify-center gap-[0.5px] mt-[0.5px]">
            <Skeleton variant="rounded" width={80} height={80} />
            <Skeleton variant="rounded" width={80} height={80} />

            <Skeleton variant="rounded" width={80} height={80} />

            <Skeleton variant="rounded" width={80} height={80} />

            <Skeleton variant="rounded" width={80} height={80} />

            <Skeleton variant="rounded" width={80} height={80} />
          </div>
        </div>

        <div className="block md:hidden">
          <div className="flex justify-center">
            <Skeleton variant="rounded" width={500} height={350} />
          </div>
          <div className="flex justify-center gap-[0.5px] mt-[0.5px]">
            <Skeleton variant="rounded" width={80} height={60} />
            <Skeleton variant="rounded" width={80} height={60} />

            <Skeleton variant="rounded" width={80} height={60} />

            <Skeleton variant="rounded" width={80} height={60} />

            <Skeleton variant="rounded" width={80} height={60} />

            <Skeleton variant="rounded" width={80} height={60} />
          </div>
        </div>
      </>
    );
  }

  if (isSuccess) {
    const { data: single_list } = data;
    content = (
      <>
        <div className="">
          <SwiperPage data={single_list.images} />
        </div>
      </>
    );
  }
  console.log();
  return (
    <div className="w-[95%] md:w-[85%] mx-auto pb-16 pt-5">
      <div className="mb-10 bg-[#fff8e7] border-l-4 border-l-yellow-400 py-5 rounded-md">
        <p className="text-sm md:text-2xl ml-5">{`${data?.data.category} in ${data?.data.township} for ${data?.data.parent_category}`}</p>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6">
          <div className="">{content}</div>
        </div>
        <div className="col-span-12 md:col-span-6 ">
          <DetailPage data={data} />
          <div className="">
            {/* Booking UI */}
            <div className="">
              {/* Booking Button */}
              <Button
                onClick={() => dispatch(toogleFormDialog(true))}
                sx={{
                  borderColor: "#fecc39",
                  color: "#000000",
                  border: "1px solid #fecc39",
                  "&:hover": {
                    color: "#ffffff",
                    backgroundColor: "#fecc39",
                  },
                  marginBottom: "10px",
                  marginTop: "10px",
                  marginRight: "10px",
                }}
                startIcon={<LiaClipboardListSolid />}
              >
                {language == "en" ? "Book Now" : "ကြိုတင်စာရင်းတင်မယ်"}
              </Button>

              {/* Inquery Button */}
              <Button
                onClick={() => dispatch(toogleInqueryFormDialog(true))}
                sx={{
                  borderColor: "#fecc39",
                  color: "#000000",
                  border: "1px solid #fecc39",
                  "&:hover": {
                    color: "#ffffff",
                    backgroundColor: "#fecc39",
                  },
                  marginBottom: "10px",
                  marginTop: "10px",
                }}
                startIcon={<LiaQuestionSolid />}
              >
                {language == "en" ? "Inquery" : "စုံစမ်းရန်"}
              </Button>

              {/* Card for Inquery */}
              <Backdrop
                sx={{
                  color: "#fff",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={inquery}
              >
                {/* inquery card */}
                <InqueryCard id={data?.data.id} />
              </Backdrop>

              {/* Card for Booking */}
              <Backdrop
                sx={{
                  color: "#fff",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={booking}
              >
                <BookingCard id={data?.data.id} />
              </Backdrop>
            </div>
          </div>
        </div>
      </div>

      {/* to start here */}

      <div className="grid grid-cols-12 my-16">
        <div className="col-span-12 md:col-span-4">
          <RealEstateYoutube />
        </div>
        <div className="col-span-12 md:col-span-4">
          <RealEstateDescripton data={data} />
        </div>
        <div className="col-span-12 md:col-span-4">
          <RealEstateInformation data={data} />
        </div>
      </div>

      <div className="">
        <RealEstateComment />
      </div>

      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-4">
          <RealEstateReview />
        </div>
        <div className="col-span-12 md:col-span-4"></div>

        <div className="col-span-12 md:col-span-4">{ratingContent}</div>
      </div>
    </div>
  );
};

export default Page;
