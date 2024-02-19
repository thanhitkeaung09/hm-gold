import { HiOutlineX } from "react-icons/hi";
import {
  Box,
  Button,
  Rating,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { toogleFormDialog, tooggleIsReview } from "../../feature/reviewSlice";

import { useCommentMutation } from "../../api/commentApi";
import { useRatingMutation } from "../../api/ratingApi";

const Card = ({ id }) => {
  console.log(id);
  const token = localStorage.getItem("real-estate-encrypted-key");
  const [comment] = useCommentMutation();
  const theme = useTheme();
  const dispatch = useDispatch();
  const [rate] = useRatingMutation();
  const isReview = useSelector((state) => state.review.isReview);

  // const [automobileId , setAutomobileId] = useState(id);
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      review: "",
      rating: "",
      real_estate_id: id,
    },
  });

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("real-estate-auth-info"));
    setValue("real_estate_id", id);

    if (auth) {
      setValue("name", auth.data.name);
    } else if (auth === null) {
      // navigate("/login");
    } else {
      setValue("name", "");
    }
  }, [id]);

  const handleCloseBookingForm = () => {
    dispatch(toogleFormDialog(false));
  };

  const onSubmit = async (data) => {
    let response = await rate({ token, payload: data });
    if (response.data.status === true) {
      toast.success("Your Review has been submitted successfully");
      dispatch(isReview ? tooggleIsReview(false) : tooggleIsReview(true));
      dispatch(toogleFormDialog(false));
      return;
    }
    toast.error("Something went wrong");
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="p-7 rounded-lg shadow  w-[300px] md:[w-500] lg:w-[600px] relative bg-white">
          <p className="text-xl mb-4 text-gray-600">Review Form</p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white shadow-sm rounded-sm"
          >
            <div className="absolute top-3 right-3">
              <HiOutlineX
                className="cursor-pointer text-black z-20 "
                onClick={handleCloseBookingForm}
              />
            </div>
            <div className="flex items-center"></div>

            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-12">
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="name"
                        variant="outlined"
                        required
                      />
                    )}
                  />

                  <Controller
                    name="review"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        multiline
                        label="Review"
                        variant="outlined"
                        required
                        rows={5}
                      />
                    )}
                  />

                  <Controller
                    name="rating"
                    control={control}
                    render={({ field }) => (
                      <Box>
                        <Typography
                          color={""}
                          sx={{ color: "#000000", marginBottom: "5px" }}
                        >
                          Rating
                        </Typography>
                        <Rating {...field} name="simple-controlled" />
                      </Box>
                    )}
                  />

                  <Button
                    // onClick={handleConfirmation}
                    type="submit"
                    className="bg-primary-soft"
                    sx={{
                      // backgroundColor: "#fecc39",
                      backgroundColor: theme.palette.primary.main,
                      "&:hover": { backgroundColor: "#333" },
                      color: "white",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                    }}
                    // disabled={loading}
                  >
                    Send
                    {/* {loading ? "Submitting" : "Register"} */}
                  </Button>
                </Box>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Card;
