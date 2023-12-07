import { useState, useEffect } from "react";

const useWindowResize = (initialBgImages, initialFeatureImages) => {
  const [images, setImages] = useState({
    backgroundImg: {
      settledImg: "",
      ...initialBgImages,
    },
    featureImg: {
      settledPlaceImg: "",
      settledLocallyImg: "",
      ...initialFeatureImages,
    },
  });

  const getInitialImages = () => {
    if (window.innerWidth < 768) {
      return {
        backgroundImg: {
          settledImg: initialBgImages.bgMobile,
        },
        featureImg: {
          settledPlaceImg: initialFeatureImages.place.featurePlaceMobile,
          settledLocallyImg: initialFeatureImages.featureLocallyMobile,
        },
      };
    } else if (window.innerWidth < 1440) {
      return {
        backgroundImg: {
          settledImg: initialBgImages.bgTablet,
        },
        featureImg: {
          settledPlaceImg: initialFeatureImages.place.featurePlaceTablet,
          settledLocallyImg: initialFeatureImages.locally.featureLocallyTablet,
        },
      };
    } else {
      return {
        backgroundImg: {
          settledImg: initialBgImages.bgDesktop,
        },
        featureImg: {
          settledPlaceImg: initialFeatureImages.place.featurePlaceDesktop,
          settledLocallyImg: initialFeatureImages.locally.featureLocallyDesktop,
        },
      };
    }
  };

  useEffect(() => {
    const handleLoad = () => {
      const initialImages = getInitialImages();
      setImages(initialImages);
    };

    const handleResize = () => {
      setImages((prevImages) => {
        const windowWidth = window.innerWidth;

        let newSettledBgImg = "";
        let newSettledPlace = "";
        let newSettledLocally = "";

        if (windowWidth < 768) {
          newSettledBgImg = initialBgImages.bgMobile;
          newSettledPlace = initialFeatureImages.place.featurePlaceMobile;
          newSettledLocally = initialFeatureImages.locally.featureLocallyMobile;
        } else if (windowWidth < 1440) {
          newSettledBgImg = initialBgImages.bgTablet;
          newSettledPlace = initialFeatureImages.place.featurePlaceTablet;
          newSettledLocally = initialFeatureImages.locally.featureLocallyTablet;
        } else {
          newSettledBgImg = initialBgImages.bgDesktop;
          newSettledPlace = initialFeatureImages.place.featurePlaceDesktop;
          newSettledLocally = initialFeatureImages.locally.featureLocallyDesktop;
        }

        return {
          ...prevImages,
          backgroundImg: {
            ...prevImages.backgroundImg,
            settledImg: newSettledBgImg,
          },
          featureImg: {
            ...prevImages.featureImg,
            settledPlaceImg: newSettledPlace,
            settledLocallyImg: newSettledLocally,
          },
        };
      });
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleLoad);

    handleLoad();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return images;
};

export default useWindowResize;
