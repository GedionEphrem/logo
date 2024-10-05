import React, { useState } from "react";
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const Head = ({ dark, setMode }) => {
  // State for avatar and profile name
  const [profile, setProfile] = useState({
    avatar: '/IMG_0112.jpg',
    name: 'Gedion'
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Array of avatars with corresponding names
  const avatarOptions = [
    { avatar: '/IMG_0112.JPG', name: 'Bebishu' },
    { avatar: '/photo_2024-10-05_14-51-22.jpg', name: 'Mande' },
    { avatar: '/mos1.jpg', name: 'Mos' }
  ];

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Change avatar and name
  const changeProfile = (newAvatar, newName) => {
    setProfile({ avatar: newAvatar, name: newName });
    setDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <>
      <section className={`head ${dark ? "dark" : ""}`}>
        <div className='container flexSB'>
          <div className='left'>
            <div className='logo'>
              <img src='/image_2024-10-05_15-09-32.png' alt='Logo' />
            </div>
          </div>
          <div className='right flexCenter'>
            <div className='search flexCenter'>
              <input type='text' placeholder='Search...' />
              <SearchOutlinedIcon className='iconHead' />
            </div>
            <NotificationsNoneOutlinedIcon className='iconHead' />

            {/* Profile Section */}
            <div className='profile flexCenter'>
              <img className='imageCircle' src={profile.avatar} alt='Profile Avatar' />
              <span>{profile.name}</span>
              <button onClick={toggleDropdown} className='iconButton'>
                <KeyboardArrowDownOutlinedIcon className='iconHead' />
              </button>

              {dropdownOpen && (
                <div className='dropdown'>
                  {avatarOptions.map((option, index) => (
                    <img
                      key={index}
                      className='avatarOption'
                      src={option.avatar}
                      alt={`Avatar ${index + 1}`}
                      onClick={() => changeProfile(option.avatar, option.name)}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Dark Mode Toggle */}
            <button onClick={() => setMode(!dark)}>
              <NightlightIcon className='iconHead' />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Head;
