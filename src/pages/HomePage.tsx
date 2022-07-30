import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { Container, Box, Typography, Button, Slide } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../store/art-functions';

import NotificationBox from '../components/NotificationBox';

export default function HomePage() {
  const dispatch = useDispatch();
  const artState = useSelector(state => state.art);
  const artArray = artState.artList.artArray;
  const notification = artState.notification;
  const [sliderState, setSliderState] = useState({
    activeIndex: 0,
    elementIn: true
  });

  useEffect(() => {
    console.log('runs');
    if (artState.artList.artArray.length > 0) {
      return;
    } else {
      dispatch(getData());
    }

  }, [dispatch])

  function sliderChangeHandler(forward: boolean) {
    setSliderState({ ...sliderState, elementIn: false });

    if (forward) {
      setTimeout(() => {
        setSliderState({ elementIn: true, activeIndex: (sliderState.activeIndex + 1) % artArray.length })
      }, 500)
    } else {
      setTimeout(() => {
        setSliderState({ elementIn: true, activeIndex: (sliderState.activeIndex - 1) % artArray.length })
      }, 500)
    }

  }


  let imageData;

  if (artArray.length > 0) {
    imageData = {
      src: `${artState.artList.config}/${artArray[sliderState.activeIndex].image_id}/full/843,/0/default.jpg`,
      alt_text: artArray[sliderState.activeIndex].thumbnail.alt_text,
      credit_line: artArray[sliderState.activeIndex].credit_line,
      title: artArray[sliderState.activeIndex].title,
      artist_title: artArray[sliderState.activeIndex].artist_title,
    }
  }


  return (
    <Container>
      <Typography variant={"h1"}>Explore</Typography>
      <Typography variant={"h5"}>the largest art & photography collection in the United States</Typography>

      {/* { */}
      {/*   notification && <NotificationBox type={notification.type} title={notification.title} description={notification.description} /> */}
      {/* } */}
      {
        artArray.length > 0 &&
        <div className={"page__slider"}>
          <Button onClick={() => sliderChangeHandler(false)}><ArrowLeft /></Button>
          <Slide
            in={sliderState.elementIn}
            timeout={500}
            direction="right"
          >
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src={imageData.src} width={300} height={300} alt={imageData.alt_text} />
              <Typography variant={"caption"}>{imageData?.credit_line}</Typography>
              <Typography>{imageData?.title}</Typography>
              <Typography>{imageData?.artist_title}</Typography>
            </Box>
          </Slide>
          <Button onClick={() => sliderChangeHandler(true)}><ArrowRight /></Button>
        </div>

      }
    </Container>
  )
}
