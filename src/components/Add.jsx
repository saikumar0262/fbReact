import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import { useState } from "react";
import { v4 } from "uuid";

const StyleModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});
export const Add = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    list: "",
    message: "",
    
  });

  const [image, setImage] = useState("");

  const uploadFile = () => {
    document.getElementById("imagefile").click();
  };

  const handleClick = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
    
  };
  console.log(image.name, "image");

  const submitButton = (e) => {
    e.preventDefault();
    const newList = {
      id: v4(),
      messages: data.message,
      image: image,
    };

    setData((prevState) => ({
      list: [...prevState.list, newList],
      message: "",
      image:''
    }));

    setOpen(false);
  };
  console.log(data.message, "list");
  console.log( data.list, "list" );
  

  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title='add'
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}>
        <Fab color='primary' aria-label='add'>
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyleModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box
          bgcolor={"background.default"}
          color={"text.primary"}
          width={400}
          minHeight={280}
          borderRadius={5}
          p={3}>
          <Typography variant='h6' color='gray' textAlign='center'>
            Create a post
          </Typography>
          <form onSubmit={submitButton}>
            <UserBox>
              <Avatar
                src='https://pps.whatsapp.net/v/t61.24694-24/312283434_940297870269136_7988867842789756209_n.jpg?ccb=11-4&oh=01_AdRlH-6SGs3xmhywUrf8BZxyZADkyhzW2LyIWOq26FrMqQ&oe=63B8F624'
                sx={{ widows: 30, height: 40 }}
              />
              <Typography fontWeight={500} variant='span'>
                saikumar
              </Typography>
            </UserBox>
            <TextField
              sx={{ width: "100%" }}
              id='standard-multiline-static'
              multiline
              rows={4}
              placeholder="What's on your mind?"
              variant='standard'
              value={data.message}
              onChange={(e) =>
                setData((prevState) => {
                  return { ...prevState, message: e.target.value };
                })
              }
            />
            <Stack direction='row' gap={1} p={2} mb={3}>
              <EmojiEmotions color='primary' />
              <input
                type='file'
                id='imagefile'
                onChange={handleClick}
                style={{ display: "none" }}
              />
              <Image color='secondary' onClick={uploadFile} />
              <VideoCameraBack color='success' onClick={uploadFile} />
              <PersonAdd color='error' />
            </Stack>
            <ButtonGroup
              fullWidth
              variant='contained'
              aria-label='outlined primary button group'>
              <Button type='submit'>Post</Button>
              <Button sx={{ width: "100px" }}>
                <DateRange />
              </Button>
            </ButtonGroup>
          </form>
        </Box>
      </StyleModal>
    </>
  );
};
