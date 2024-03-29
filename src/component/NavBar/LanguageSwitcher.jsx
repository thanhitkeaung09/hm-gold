import { useState } from "react";
import { MenuItem, Menu, Button, Divider, Avatar } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import enFlag from "../../assets/img/united-states-flag-icon.svg";
import mmFlag from "../../assets/img/myanmar-flag-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { toogleLanguage } from "../../feature/languageSlice";
import AccountMenu from "./AccountMenu";

const LanguageSwitcher = ({ onLanguageChange }) => {
  const language = useSelector((state) => state.language.defaultLanguage);
  const auth = useSelector((state) => state.auth.value);
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("en"); // Default language is English

  const handleLanguageClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageSelect = (lang) => {
    dispatch(toogleLanguage(lang));
    setSelectedLanguage(lang);
    setAnchorEl(null);
    onLanguageChange(lang);
    // Additional logic for handling language change, if needed
  };

  const getFlagIcon = (lang) => {
    return lang === "en" ? enFlag : mmFlag;
  };

  return (
    <>
      <div className="bg-primary-soft relative">
        <div className="container flex items-center justify-end py-2 relative  p-3">
          <Button onClick={handleLanguageClick}>
            <img
              src={getFlagIcon(selectedLanguage)}
              alt={`${selectedLanguage} flag`}
              className="w-6 h-6"
            />
            <IoIosArrowDown className="text-white text-sm" />
          </Button>
          <Divider />
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleLanguageClose}
          >
            <MenuItem onClick={() => handleLanguageSelect("en")}>
              <img src={enFlag} alt="English flag" className="w-4 h-4 me-2" />
              English
            </MenuItem>
            <MenuItem onClick={() => handleLanguageSelect("mm")}>
              <img src={mmFlag} alt="Myanmar flag" className="w-4 h-4 me-2" />
              Myanmar
            </MenuItem>
          </Menu>

          <div className="block md:hidden">
            <AccountMenu />
          </div>
        </div>
      </div>
    </>
  );
};

export default LanguageSwitcher;
