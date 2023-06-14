import React, { createContext, useContext, useState } from "react";

export const DataContext = createContext();

export const DataProviders = ({ children }) => {
  const [Facebook, setFacebook] = useState();
  const [Phone, setPhone] = useState();
  const [BrickSize, setBrickSize] = useState([]);
  const [BrickType, setBrickType] = useState([]);
  const [Adv, setAdv] = useState([]);
  const [Banner, setBanner] = useState([]);
  const [GoogleMap, setGoogleMap] = useState();
  const [Location, setLocation] = useState();
  const [Logo, setLogo] = useState();
  const [websiteName, setWebsiteName] = useState();
  const [Products, setProducts] = useState([]);

  return (
    <DataContext.Provider
      value={{
        Products,
        setProducts,
        Facebook,
        setFacebook,
        Phone,
        setPhone,
        BrickSize,
        setBrickSize,
        BrickType,
        setBrickType,
        Adv,
        setAdv,
        Banner,
        setBanner,
        GoogleMap,
        setGoogleMap,
        Location,
        setLocation,
        Logo,
        setLogo,
        websiteName,
        setWebsiteName,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
