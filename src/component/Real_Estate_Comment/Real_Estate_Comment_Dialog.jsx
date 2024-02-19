import { HiOutlineX } from "react-icons/hi";
import { Box, Button, TextField, useTheme } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { useBookingMutation } from "../../api/bookingApi";
import toast from "react-hot-toast";
import { toogleFormDialog } from "../../feature/askSlice";
import { useCommentMutation } from "../../api/commentApi";
import { tooggleIsComment } from "../../feature/commentSlice";

const Card = ({ id }) => {
  const token = localStorage.getItem("real-estate-encrypted-key");
  const isComment = useSelector((state) => state.comment.isComment);
  console.log(isComment);
  const [comment] = useCommentMutation();
  const theme = useTheme();
  const dispatch = useDispatch();
  // console.log(isComment);
  // const [automobileId , setAutomobileId] = useState(id);
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      name: "",
      comment: "",
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
    const response = await comment({ token, payload: data });
    if (response.data.status === true) {
      dispatch(isComment ? tooggleIsComment(false) : tooggleIsComment(true));
      toast.success("Asking Form has been submitted successfully");
      dispatch(toogleFormDialog(false));
      return;
    }
    toast.error("Something went wrong");
    dispatch(toogleFormDialog(false));
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="p-7 rounded-lg shadow  w-[300px] md:[w-500] lg:w-[600px] relative bg-white">
          <p className="text-xl mb-4 text-gray-600">Asking Form</p>

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
                        label="Name"
                        variant="outlined"
                        required
                      />
                    )}
                  />

                  <Controller
                    name="comment"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        id="outlined-multiline-static"
                        label="Comment"
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                      />
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
