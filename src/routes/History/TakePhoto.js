import {useRef, useState} from 'react'
import {PhotoCamera} from "@material-ui/icons";
import {Button, IconButton} from "@material-ui/core";
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: 'none',
    },
}));

const TakePhoto = () => {
    const inputRef = useRef(null)
    const [image, setImage] = useState('')
    const classes = useStyles();

    function handleClick() {
        inputRef.current.click()
    }
    const handleImageChange = (event) => {
        const file = event.target.files[0]
        const imgname = event.target.files[0].name
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            const img = new Image()
            img.src = reader.result;
            img.onload = () => {
                const canvas = document.createElement("canvas")
                const maxSize = Math.max(img.width, img.height)
                canvas.width = maxSize
                canvas.height = maxSize
                const ctx = canvas.getContext("2d")
                ctx.drawImage(
                    img,
                    (maxSize - img.width) / 2,
                    (maxSize  - img.height) / 2
                )
                canvas.toBlob(
                    (blob) => {
                        const file = new File([blob], imgname, {
                            type: 'image/png',
                            lastModified: Date.now()
                        })
                        console.log(file)
                        setImage(file)
                    },
                    'image/*',
                    0.8
                )
            }
        }
        // console.log(file)
        // setImage(file)
    }

    const handleUploadButtonClick = (file) => {
        let myHeaders = new Headers()
        const token = "TOKEN"
        myHeaders.append("Authorization", `Bearer ${token}`)

        let formdata = new FormData()
        formdata.append('file', file)
         let requestOptions = {
            method: 'POST',
             headers: myHeaders,
             body: formdata,
             redirect: 'follow',

         }

         fetch('url', requestOptions)
             .then((response) => response.text())
             .then((result) => {
                 console.log(JSON.parse(result))
                 // setImage('profileurl.img_url')
             }).catch((error) => console.log('error', error))
    }

    return (
     <div onClick={handleClick}>
         <Container maxWidth="sm">
         {
             image?
             <img
                 src={URL.createObjectURL(image)}
                 alt=""
                 width="200" height="300"
             />:
                 <label htmlFor="icon-button-file">
                     <IconButton size="large" color="primary" aria-label="upload picture" component="span">
                         <PhotoCamera fontSize="large" />
                     </IconButton>
                 </label>
             }
         </Container>
         <input
             // accept="image/*"
             onChange={handleImageChange}
             className={classes.input}
             id="icon-button-file"
             type="file"
             ref={inputRef}
         />

         <Button
             variant="contained"
             color="default"
             className={classes.button}
             startIcon={<CloudUploadIcon />}
             onClick={handleUploadButtonClick}
         >
             Upload
         </Button>
     </div>
 )
}

export default TakePhoto