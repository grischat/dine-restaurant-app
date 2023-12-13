import { useState, useEffect } from "react";

const useWindowResize = ({
  initialBgImages,
  initialFeatureImages,
  initialHighlightsImages,
  initialBgFooterImages,
  initialBookingBgImages
}) => {
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
    highlightImg: {
      settledHighlightsOne: "",
      settledHighlightsTwo: "",
      settledHighlightsThree: "",
      ...initialHighlightsImages,
    },
    footerBgImg: {
      settledFooterBgImg: "",
      ...initialBgFooterImages,
    },
    bookingBgImg: {
      settledBookingBgImg: '',
      ...initialBookingBgImages
    }
  });

  useEffect(() => {
    const handleLoad = () => {
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
            highlightImg: {
              settledHighlightsOne:
                initialHighlightsImages.highlightsDishOneMobile,
              settledHighlightsTwo:
                initialHighlightsImages.highlightsDishTwoMobile,
              settledHighlightsThree:
                initialHighlightsImages.highlightsDishThreeMobile,
            },
            footerBgImg: {
              settledFooterBgImg: initialBgFooterImages.footerBgMobile,
            },
            bookingBgImg: {
              settledBookingBgImg: initialBookingBgImages.bookingBgImgMobile,
            }
          };
        } else if (window.innerWidth < 1440) {
          return {
            backgroundImg: {
              settledImg: initialBgImages.bgTablet,
            },
            featureImg: {
              settledPlaceImg: initialFeatureImages.place.featurePlaceTablet,
              settledLocallyImg:
                initialFeatureImages.locally.featureLocallyTablet,
            },
            highlightImg: {
              settledHighlightsOne:
                initialHighlightsImages.highlightsDishOneTablet,
              settledHighlightsTwo:
                initialHighlightsImages.highlightsDishTwoTablet,
              settledHighlightsThree:
                initialHighlightsImages.highlightsDishThreeTablet,
            },
            footerBgImg: {
              settledFooterBgImg: initialBgFooterImages.footerBgTablet,
            },
            bookingBgImg: {
              settledBookingBgImg: initialBookingBgImages.bookingBgImgTablet
            }
          };
        } else {
          return {
            backgroundImg: {
              settledImg: initialBgImages.bgDesktop,
            },
            featureImg: {
              settledPlaceImg: initialFeatureImages.place.featurePlaceDesktop,
              settledLocallyImg:
                initialFeatureImages.locally.featureLocallyDesktop,
            },
            highlightImg: {
              settledHighlightsOne:
                initialHighlightsImages.highlightsDishOneDesktop,
              settledHighlightsTwo:
                initialHighlightsImages.highlightsDishTwoDesktop,
              settledHighlightsThree:
                initialHighlightsImages.highlightsDishThreeDesktop,
            },
            footerBgImg: {
              settledFooterBgImg: initialBgFooterImages.footerBgDesktop,
            },
            bookingBgImg: {
              settledBookingBgImg: initialBookingBgImages.bookingBgImgDesktop
            }
          };
        }
      };
      const initialImages = getInitialImages();
      setImages(initialImages);
    };

    const handleResize = () => {
      setImages((prevImages) => {
        const windowWidth = window.innerWidth;

        let newSettledBgImg = "";
        let newSettledPlace = "";
        let newSettledLocally = "";
        let newSettledHighlightsOne = "";
        let newSettledHighlightsTwo = "";
        let newSettledHighlightsThree = "";
        let newSettledFooterBg = "";
        let newSettledBookingBg = "";
        if (windowWidth < 768) {
          newSettledBgImg = initialBgImages.bgMobile;
          newSettledPlace = initialFeatureImages.place.featurePlaceMobile;
          newSettledLocally = initialFeatureImages.locally.featureLocallyMobile;
          newSettledHighlightsOne =
            initialHighlightsImages.highlightsDishOneMobile;
          newSettledHighlightsTwo =
            initialHighlightsImages.highlightsDishTwoMobile;
          newSettledHighlightsThree =
            initialHighlightsImages.highlightsDishThreeMobile;
          newSettledFooterBg = initialBgFooterImages.footerBgMobile;
          newSettledBookingBg = initialBookingBgImages.bookingBgImgMobile
        } else if (windowWidth < 1440) {
          newSettledBgImg = initialBgImages.bgTablet;
          newSettledPlace = initialFeatureImages.place.featurePlaceTablet;
          newSettledLocally = initialFeatureImages.locally.featureLocallyTablet;
          newSettledHighlightsOne =
            initialHighlightsImages.highlightsDishOneTablet;
          newSettledHighlightsTwo =
            initialHighlightsImages.highlightsDishTwoTablet;
          newSettledHighlightsThree =
            initialHighlightsImages.highlightsDishThreeTablet;
          newSettledFooterBg = initialBgFooterImages.footerBgTablet;
          newSettledBookingBg = initialBookingBgImages.bookingBgImgTablet
        } else {
          newSettledBgImg = initialBgImages.bgDesktop;
          newSettledPlace = initialFeatureImages.place.featurePlaceDesktop;
          newSettledLocally =
            initialFeatureImages.locally.featureLocallyDesktop;
          newSettledHighlightsOne =
            initialHighlightsImages.highlightsDishOneDesktop;
          newSettledHighlightsTwo =
            initialHighlightsImages.highlightsDishTwoDesktop;
          newSettledHighlightsThree =
            initialHighlightsImages.highlightsDishThreeDesktop;
          newSettledFooterBg = initialBgFooterImages.footerBgDesktop;
          newSettledBookingBg = initialBookingBgImages.bookingBgImgDesktop
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
          highlightImg: {
            ...prevImages.highlightImg,
            settledHighlightsOne: newSettledHighlightsOne,
            settledHighlightsTwo: newSettledHighlightsTwo,
            settledHighlightsThree: newSettledHighlightsThree,
          },
          footerBgImg: {
            ...prevImages.backgroundImg.footerBgImg,
            settledFooterBgImg: newSettledFooterBg,
          },
          bookingBgImg: {
            ...prevImages.backgroundImg.bookingBgImg,
            settledBookingBgImg: newSettledBookingBg,
            
          }
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
