import { useDispatch, useSelector } from "react-redux";
import { useGetListByIdQuery } from "../../api/real_estate_listApi";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Backdrop } from "@mui/material";
import RealEstateCommentCard from "../../component/Real_Estate_Comment/Real_Estate_Comment_Dialog";
import { toogleFormDialog } from "../../feature/askSlice";
import CommentCard from "../../component/Real_Estate_Comment/CommentCard";
import { useEffect } from "react";

const Card = () => {
  const { id } = useParams();
  const auth = localStorage.getItem("real-estate-encrypted-key");
  const profile = JSON.parse(localStorage.getItem("real-estate-auth-info"));
  const language = useSelector((state) => state.language.defaultLanguage);
  const isComment = useSelector((state) => state.comment.isComment);
  const { data, isError, isLoading, isSuccess, refetch } = useGetListByIdQuery({
    lang: language,
    id: id,
  });
  console.log(isComment);
  const ask = useSelector((state) => state.ask.openFormDialog);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let content = null;
  let auth_content = null;

  useEffect(() => {
    refetch();
  }, [isComment]);
  // console.log(data.data.comment);
  if (auth) {
    auth_content = (
      <>
        <div className="">
          <p className="font-bold mb-5">
            {language === "en"
              ? "Customer Queries"
              : "ဤကုန်ပစ္စည်းအကြောင်း မေးမြန်းချက်များ"}
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
              {language === "en" ? "Ask Question" : "သိလိုသမျှ မေးမြန်းပါ"}
            </Button>

            <Backdrop
              sx={{
                color: "#fff",
                zIndex: (theme) => theme.zIndex.drawer + 1,
              }}
              open={ask}
            >
              <RealEstateCommentCard id={id} />
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
                ? "Customer Queries"
                : "ဤကုန်ပစ္စည်းအကြောင်း မေးမြန်းချက်များ"}
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
                ? "login to ask question"
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
    content = <>Loading</>;
  }
  if (isSuccess) {
    content = (
      <>
        <div className="my-10">
          {data?.data?.comment?.length > 0 ? (
            <div className="">
              <CommentCard data={data} />
            </div>
          ) : (
            <div className="">there is no comments</div>
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
