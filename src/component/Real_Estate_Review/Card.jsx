import { useDispatch, useSelector } from "react-redux";
import { useGetListByIdQuery } from "../../api/real_estate_listApi";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Backdrop, Avatar, Rating, Skeleton } from "@mui/material";
import RealEstateReviewCard from "../../component/Real_Estate_Review/Real_Estate_Review_Dialog";
import { toogleFormDialog } from "../../feature/reviewSlice";
import { useGetRatingQuery } from "../../api/ratingApi";
import RatingCard from "../../component/Real_Estate_Review/RatingCard";

const Card = () => {
  const { id } = useParams();
  const auth = localStorage.getItem("real-estate-encrypted-key");
  const profile = JSON.parse(localStorage.getItem("real-estate-auth-info"));
  const language = useSelector((state) => state.language.defaultLanguage);
  const { data, isError, isLoading, isSuccess } = useGetListByIdQuery({
    lang: language,
    id: id,
  });

  const {
    data: RatingData,
    isError: isRatingError,
    isLoading: isRatingLoading,
    isSuccess: isRatingSuccess,
  } = useGetRatingQuery({ lang: language, id, token: auth });

  // console.log(RatingData.data.ratingLists);

  const ask = useSelector((state) => state.ask.openFormDialog);
  const review = useSelector((state) => state.review.openFormDialog);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let content = null;
  let auth_content = null;
  console.log(data);
  if (auth) {
    auth_content = (
      <>
        <div className="">
          <p className="font-bold mb-5">
            {language === "en"
              ? "Customer Reviews"
              : "ဤကုန်ပစ္စည်းအကြောင်း သုံးသပ်ချက်များ"}
          </p>
          <div className="">
            <Button
              onClick={() => dispatch(toogleFormDialog(true))}
              variant="contained"
              className="bg-primary-soft"
              sx={{
                backgroundColor: "#fecc39",
                "&:hover": { backgroundColor: "#333" },
                color: "white",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
            >
              {language === "en" ? "Write Review" : "သုံးသပ်ချက် ရေးသားပါ"}
            </Button>

            <Backdrop
              sx={{
                color: "#fff",
                zIndex: (theme) => theme.zIndex.drawer + 1,
              }}
              open={review}
            >
              <RealEstateReviewCard id={id} />
            </Backdrop>
          </div>
        </div>
      </>
    );
  } else {
    auth_content = (
      <>
        <div className="">
          <div className="">
            <p className="font-bold mb-5">
              {language === "en"
                ? "Customer Reviews"
                : "ဤကုန်ပစ္စည်းအကြောင်း သုံးသပ်ချက်များ"}
            </p>
            <Button
              onClick={() => navigate("/login")}
              variant="contained"
              className="bg-primary-soft"
              sx={{
                backgroundColor: "#fecc39",
                "&:hover": { backgroundColor: "#333" },
                color: "white",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
            >
              {language === "en"
                ? "login to write review"
                : "စုံစမ်းရန် အကောင့်၀င်ပါ"}
            </Button>
          </div>
        </div>
      </>
    );
  }

  if (isError) {
    content = <>Comment Fetch Error</>;
  }

  if (isLoading) {
    content = (
      <>
        <div className="">
          <Skeleton width={250} height={200}></Skeleton>
        </div>
      </>
    );
  }
  if (isSuccess) {
    content = (
      <>
        <div className="my-10">
          <div className="flex my-10">
            <div className="mr-5 mt-3">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </div>
            <div className="">
              <p className="font-bold text-sm md:text-sm">Read Posts & Earn</p>
              <div className="flex my-3">
                <Rating
                  name="read-only"
                  defaultValue={0.5}
                  precision={0.5}
                  readOnly
                />
                <div className="text-gray-400 text-sm md:text-sm">( 0. 5)</div>
              </div>
              <div className="flex">
                <p className="text-gray-400 mr-3 text-sm md:text-sm">
                  03/11/2023
                </p>
                <span className="text-gray-400 text-sm md:text-sm">
                  01:11pm
                </span>
              </div>
              <p className="text-gray-400 text-sm md:text-sm">review text</p>
            </div>
          </div>
          {RatingData?.data?.ratingLists?.length > 0 ? (
            <div className="">
              <RatingCard data={RatingData?.data?.ratingLists} />
            </div>
          ) : (
            <div className="">there is no reviews</div>
          )}
        </div>
      </>
    );
  }
  return (
    <div>
      <div className="">{auth_content}</div>
      <div className="">{content}</div>
    </div>
  );
};

export default Card;
