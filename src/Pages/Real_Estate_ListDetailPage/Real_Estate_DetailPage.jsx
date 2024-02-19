import { Chip, Stack, Typography } from "@mui/material";
import { FaBed } from "react-icons/fa";
import { MdBathtub } from "react-icons/md";
import { useSelector } from "react-redux";

const DetailPage = ({ data }) => {
  const language = useSelector((state) => state.language.defaultLanguage);
  // const [squareFeet, setSquareFeet] = useState(null);
  const estate_data = data?.data;
  // const calculateSquareFeet = () => {
  //   return estate_data?.width * estate_data?.height;
  // };
  // useEffect(() => {
  //   setSquareFeet(calculateSquareFeet());
  // }, [estate_data]);

  return (
    <div className="">
      <div className="mb-10">
        <Typography
          className="text-sm"
          variant="h5"
          sx={{ fontWeight: "semi-bold" }}
        >
          {estate_data?.parent_category}
        </Typography>
      </div>

      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6">
          {/* Id */}
          <div className="flex  w-96  mb-3">
            <div className="flex justify-between w-32 mr-5">
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", color: "#FECC39" }}
              >
                {language === "en" ? "ID" : "ID"}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: "semi-bold", color: "#FECC39" }}
              >
                :
              </Typography>
            </div>

            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              {estate_data?.lot_id}
            </Typography>
          </div>

          {/* category */}
          <div className="flex  w-96 mb-3">
            <div className="flex justify-between w-32 mr-5">
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", color: "#FECC39" }}
              >
                {language === "en" ? "Category" : "အမျိုးအစား"}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: "semi-bold", color: "#FECC39" }}
              >
                :
              </Typography>
            </div>

            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              {estate_data?.category}
            </Typography>
          </div>

          {/* price */}
          <div className="flex  w-96  mb-3">
            <div className="flex justify-between w-32 mr-5">
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", color: "#FECC39" }}
              >
                {language === "en" ? "Price" : "စျေးနှုန်း"}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: "semi-bold", color: "#FECC39" }}
              >
                :
              </Typography>
            </div>

            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              {estate_data?.is_usd
                ? estate_data?.price + "USD"
                : estate_data?.price + " သိန်း MMK"}
              <span className="line-through">
                {estate_data?.discount_price
                  ? `${estate_data?.discount_price}`
                  : " "}
              </span>
            </Typography>
          </div>

          {/* region */}
          <div className="flex  w-96  mb-3">
            <div className="flex justify-between w-32 mr-5">
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", color: "#FECC39" }}
              >
                {language === "en" ? "Division/State" : "ပြည်နယ်/တိုင်း"}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: "semi-bold", color: "#FECC39" }}
              >
                :
              </Typography>
            </div>

            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              {estate_data?.region}
            </Typography>
          </div>

          {/* township */}
          <div className="flex  w-96 mb-3">
            <div className="flex justify-between w-32 mr-5">
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", color: "#FECC39" }}
              >
                {language === "en" ? "City/Township" : "မြို့/မြို့နယ်"}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: "semi-bold", color: "#FECC39" }}
              >
                :
              </Typography>
            </div>

            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              {estate_data?.township}
            </Typography>
          </div>

          {/* address */}
          <div className="flex  w-96 mb-3">
            <div className="flex justify-between w-32 mr-5">
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", color: "#FECC39" }}
              >
                {language === "en" ? "Address" : "လိပ်စာ"}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: "semi-bold", color: "#FECC39" }}
              >
                :
              </Typography>
            </div>

            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", width: "150px" }}
            >
              {estate_data?.address}
            </Typography>
          </div>

          {/* square feet */}
          <div className="flex  w-96  mb-3">
            <div className="flex justify-between w-32 mr-5">
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", color: "#FECC39" }}
              >
                {language === "en" ? "Area" : "အကျယ်အ၀န်း"}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: "semi-bold", color: "#FECC39" }}
              >
                :
              </Typography>
            </div>

            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              {/* {`${squareFeet} sq.ft (${estate_data?.width} ft x ${estate_data?.height} ft)`} */}
              {`${estate_data?.square_feet} sq.ft`}
            </Typography>
          </div>

          {/* Land Size */}
          <div className="flex  w-96  mb-3">
            <div className="flex justify-between w-32 mr-5">
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", color: "#FECC39" }}
              >
                {language === "en" ? "Land Size" : "ခြံ၀င်း အကျယ်"}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: "semi-bold", color: "#FECC39" }}
              >
                :
              </Typography>
            </div>

            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              {/* {`${squareFeet} sq.ft (${estate_data?.width} ft x ${estate_data?.height} ft)`} */}
              {`${estate_data?.width} x ${estate_data?.height}`}
            </Typography>
          </div>

          {/* story */}
          <div className="flex  w-96 mb-3">
            <div className="flex justify-between w-32 mr-5">
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", color: "#FECC39" }}
              >
                {language === "en" ? "Storey" : "အဆောက်အဦး၏စုစုပေါင်းအလွှာ"}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: "semi-bold", color: "#FECC39" }}
              >
                :
              </Typography>
            </div>

            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              {`${estate_data?.storey ? estate_data?.storey : "None"}`}
            </Typography>
          </div>

          {/* floor */}
          <div className="flex  w-96 mb-3">
            <div className="flex justify-between w-32 mr-5">
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", color: "#FECC39" }}
              >
                {language === "en" ? "Floor" : "အလွှာ"}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: "semi-bold", color: "#FECC39" }}
              >
                :
              </Typography>
            </div>

            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              {estate_data?.floor}
            </Typography>
          </div>

          {/* total rooms */}
          <div className="flex  w-96 mb-3">
            <div className="flex justify-between w-32 mr-5">
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", color: "#FECC39" }}
              >
                {language === "en" ? "Number of Rooms" : "အခန်းဖွဲ့အရေအတွက်"}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: "semi-bold", color: "#FECC39" }}
              >
                :
              </Typography>
            </div>
            <div className="">
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                {estate_data?.total_rooms}
              </Typography>
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <FaBed />
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    {estate_data?.bed_rooms}
                  </Typography>
                </div>
                <div className="flex items-center gap-2">
                  <MdBathtub />
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    {estate_data?.bath_rooms}
                  </Typography>
                </div>
              </div>
            </div>
          </div>

          {/* master bed rooms */}
          <div className="flex  w-96 mb-3">
            <div className="flex justify-between w-32 mr-5">
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", color: "#FECC39" }}
              >
                {language === "en" ? "Master BedRooms" : "မာစတာအိပ်ခန်း"}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: "semi-bold", color: "#FECC39" }}
              >
                :
              </Typography>
            </div>

            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              {estate_data?.master_bedrooms}
            </Typography>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6">
          {/* ordinary bed rooms */}
          <div className="flex  w-96 mb-3">
            <div className="flex justify-between w-32 mr-5">
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", color: "#FECC39" }}
              >
                {language === "en" ? "BedRoom" : "ရိုးရိုးအိပ်ခန်း"}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: "semi-bold", color: "#FECC39" }}
              >
                :
              </Typography>
            </div>

            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              {estate_data?.bed_rooms}
            </Typography>
          </div>

          {/* ordinary bath rooms */}
          <div className="flex  w-96 mb-3">
            <div className="flex justify-between w-32 mr-5">
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", color: "#FECC39" }}
              >
                {language === "en" ? "BathRoom" : "ရေချိုးခန်း"}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: "semi-bold", color: "#FECC39" }}
              >
                :
              </Typography>
            </div>

            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              {estate_data?.bath_rooms}
            </Typography>
          </div>

          {/* available date */}
          <div className="flex  w-96 mb-3">
            <div className="flex justify-between w-32 mr-5">
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", color: "#FECC39" }}
              >
                {language === "en"
                  ? "Availabity"
                  : "စတင်အသုံးပြုနိုင်သည့်နေ့/အခြေအနေ"}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: "semi-bold", color: "#FECC39" }}
              >
                :
              </Typography>
            </div>

            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              {estate_data?.available_date}
            </Typography>
          </div>

          {/* building condition */}
          <div className="flex  w-96 mb-3">
            <div className="flex justify-between w-32 mr-5">
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", color: "#FECC39" }}
              >
                {language === "en" ? "Status" : "အိမ်ခြံမြေ၏အခြေအနေ"}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: "semi-bold", color: "#FECC39" }}
              >
                :
              </Typography>
            </div>

            <Stack direction="row" spacing={1}>
              <Chip label={estate_data?.is_new ? "New" : ""} color="warning" />
              <Chip label={estate_data?.current_condition} color="warning" />
            </Stack>
          </div>

          {/* finished build date */}
          <div className="flex  w-96 mb-3">
            <div className="flex justify-between w-32 mr-5">
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", color: "#FECC39" }}
              >
                {language === "en"
                  ? "Build on"
                  : "တည်ဆောက်ပြီးစီးခဲ့သည့်အချိန်"}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: "semi-bold", color: "#FECC39" }}
              >
                :
              </Typography>
            </div>

            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              {estate_data?.build_date}
            </Typography>
          </div>

          {/* Advertiser */}
          <div className="flex  w-96 mb-3">
            <div className="flex justify-between w-32 mr-5">
              <Typography
                variant="body2"
                sx={{ fontWeight: "bold", color: "#FECC39" }}
              >
                {language === "en" ? "Post By" : "ကြော်ငြာတင်သူ"}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontWeight: "semi-bold", color: "#FECC39" }}
              >
                :
              </Typography>
            </div>

            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              {estate_data?.name}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
