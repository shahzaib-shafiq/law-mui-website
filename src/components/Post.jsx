import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import img1 from '../img/p1.jpg'
import img2 from '../img/p2.jpg'
import img3 from '../img/p3.jpg'
import img4 from '../img/p4.jpg'
import img5 from '../img/p5.jpg'
import img6 from '../img/p6.jpg'

import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
const Post = () => {
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "green" }} aria-label="recipe">
            S
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Shelock Clark"
        subheader="September 14, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image={img1}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Our HonourAble Lawyer
          
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton  aria-label="add to favorites">
          <Checkbox
            icon={<PhoneAndroidIcon />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <EmailIcon />
        </IconButton>
        <IconButton aria-label="share">
          <AccountBalanceIcon />
        </IconButton>
        <IconButton aria-label="share">
          <MoreHorizIcon />
        </IconButton>
        
      </CardActions>








      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "blue" }} aria-label="recipe">
            L
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Liam	Olivia"
        subheader="September 14, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image={img2}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Our HonourAble Lawyer
          
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton  aria-label="add to favorites">
          <Checkbox
            icon={<PhoneAndroidIcon />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <EmailIcon />
        </IconButton>
        <IconButton aria-label="share">
          <AccountBalanceIcon />
        </IconButton>
        <IconButton aria-label="share">
          <MoreHorizIcon />
        </IconButton>
        
      </CardActions>







      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            N
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Noah	Emma"
        subheader="September 14, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image={img3}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Our HonourAble Lawyer
          
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton  aria-label="add to favorites">
          <Checkbox
            icon={<PhoneAndroidIcon />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <EmailIcon />
        </IconButton>
        <IconButton aria-label="share">
          <AccountBalanceIcon />
        </IconButton>
        <IconButton aria-label="share">
          <MoreHorizIcon />
        </IconButton>
        
      </CardActions>










      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "purple" }} aria-label="recipe">
            O
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Oliver	Charlotte"
        subheader="September 14, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image={img4}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Our HonourAble Lawyer
          
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton  aria-label="add to favorites">
          <Checkbox
            icon={<PhoneAndroidIcon />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <EmailIcon />
        </IconButton>
        <IconButton aria-label="share">
          <AccountBalanceIcon />
        </IconButton>
        <IconButton aria-label="share">
          <MoreHorizIcon />
        </IconButton>
        
      </CardActions>












      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "green" }} aria-label="recipe">
            E
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }

        title="Elijah	Amelia"
        subheader="September 14, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image={img5}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Our HonourAble Lawyer
          
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton  aria-label="add to favorites">
          <Checkbox
            icon={<PhoneAndroidIcon />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <EmailIcon />
        </IconButton>
        <IconButton aria-label="share">
          <AccountBalanceIcon />
        </IconButton>
        <IconButton aria-label="share">
          <MoreHorizIcon />
        </IconButton>
        
      </CardActions>














      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            T
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Theodore	Harper"
        subheader="September 14, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image={img6}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Our HonourAble Lawyer
          
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton  aria-label="add to favorites">
          <Checkbox
            icon={<PhoneAndroidIcon />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <EmailIcon />
        </IconButton>
        <IconButton aria-label="share">
          <AccountBalanceIcon />
        </IconButton>
        <IconButton aria-label="share">
          <MoreHorizIcon />
        </IconButton>
        
      </CardActions>






    </Card>
  );
};

export default Post;
