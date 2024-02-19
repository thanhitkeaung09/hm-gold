import { HiOutlineX } from "react-icons/hi";
import { Box, Button, TextField } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { toogleInqueryFormDialog } from "../../feature/inquerySlice";
import { useInQueryMutation } from "../../api/inqueryApi";

const Card = ({ id }) => {
  const [inquire] = useInQueryMutation();
  const dispatch = useDispatch();

  // const [automobileId , setAutomobileId] = useState(id);
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      payment_method: "",
      real_estate_id: id,
    },
  });

  const token = localStorage.getItem("real-estate-encrypted-key");
  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("real-estate-auth-info"));
    setValue("real_estate_id", id);

    if (auth) {
      setValue("name", auth.data.name);
      setValue("email", auth.data.email);
    } else if (auth === null) {
      // navigate("/login");
    } else {
      setValue("name", "");
      setValue("email", "");
    }
  }, [id]);

  const handleCloseBookingForm = () => {
    dispatch(toogleInqueryFormDialog(false));
  };

  const onSubmit = async (data) => {
    const response = await inquire({ token, payload: data });
    if (response.data.status === true) {
      toast.success("Inquery has been successfully submitted");
      dispatch(toogleInqueryFormDialog(false));
      return;
    }
    toast.error("Something went wrong");
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="p-7 rounded-lg shadow  w-[300px] md:[w-500] lg:w-[600px] relative bg-white">
          <p className="text-xl mb-4 text-gray-600">InQuery Now</p>

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
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Email"
                        type="email"
                        variant="outlined"
                        required
                      />
                    )}
                  />

                  <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Phone"
                        type="number"
                        variant="outlined"
                        required
                      />
                    )}
                  />

                  <Controller
                    name="address"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        id="outlined-multiline-static"
                        label="Address"
                        multiline
                        rows={2}
                      />
                    )}
                  />

                  <Controller
                    name="question"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Payment"
                        type="text"
                        variant="outlined"
                        required
                      />
                    )}
                  />

                  <Button
                    // onClick={handleConfirmation}
                    type="submit"
                    className="bg-primary-soft"
                    sx={{
                      backgroundColor: "#fecc39",
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
