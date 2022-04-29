import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import Badge from "@mui/material/Badge";
import MyDrawer from "./MyDrawer";
import Desktop from "../assets/images/Desktop.jpg";
import Laptop from "../assets/images/Laptop.jpg";
import Samsung from "../assets/images/Samsung.jpg";
import Ipad from "../assets/images/Ipad.jpg";
import Iphone from "../assets/images/Iphone.png";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
const useStyles = makeStyles((theme) => ({
  topMenuItem: {
    fontSize: "15px",
    fontFamily: "Inter",
    color: "white",
    "&:hover": {
      color: "#ff793f",
      cursor: "pointer",
    },
  },
  appbarMenuItem: {
    color: "white",
    fontSize: "15px",
    fontFamily: "Inter",
    "&:hover": {
      color: "#ff793f",
      cursor: "pointer",
    },
  },
  catMenu: {
    fontFamily: "Poppins !important",
  },
  card: {
    textAlign: "center",
    width: "95%",
    margin: "auto",
    background: "#fff",
    padding: "20px 10px",
    borderRadius: "10px",
    boxSizing: "border-box",
    transition: ".5s",
    "&:hover": {
      boxShadow:
        "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
      transform: "scale(1.05)",
    },
    [theme.breakpoints.down("sm")]: {
      width: "70%",
    },
  },
  cardButton: {
    textTransform: "none !important",
    borderRadius: "25px !important",
    padding: "5px 20px",
    // fontSize: "16px",
    // margin: "auto",
    // display: "block",
    // textAlign: "center",
  },
  cardTitle: {
    marginBottom: "5px",
    color: "#154360",
  },
}));

const Home = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const data = [
    {
      id: 1,
      title: "Hp Latop",
      price: 55000,
      quantity: 1,
      des: " There are many variations of items.",

      img: Laptop,
    },
    {
      id: 2,
      title: "Samsung Phone",
      price: 70000,
      quantity: 1,
      des: " There are many variations of items.",
      img: Samsung,
    },
    {
      id: 3,
      title: "Ipad Pro",
      price: 60000,
      quantity: 1,
      des: " There are many variations of items.",
      img: Ipad,
    },
    {
      id: 4,
      title: "Desktop Computer",
      price: 80000,
      quantity: 1,
      des: " There are many variations of items.",
      img: Desktop,
    },
    {
      id: 5,
      title: "Iphone 13 pro",
      price: 120000,
      quantity: 1,
      des: " There are many variations of items.",
      img: Iphone,
    },
    {
      id: 6,
      title: "Hp Latop",
      price: 55000,
      quantity: 1,
      des: " There are many variations of items.",
      img: Laptop,
    },
    {
      id: 7,
      title: "Samsung Phone",
      price: 70000,
      quantity: 1,
      des: " There are many variations of items.",
      img: Samsung,
    },
    {
      id: 8,
      title: "Ipad Pro",
      price: 60000,
      quantity: 1,
      des: " There are many variations of items.",
      img: Ipad,
    },
    {
      id: 9,
      title: "Desktop Computer",
      price: 80000,
      quantity: 1,
      des: " There are many variations of items.",
      img: Desktop,
    },
    {
      id: 10,
      title: "Iphone 13 pro",
      price: 120000,
      quantity: 1,
      des: " There are many variations of items.",
      img: Iphone,
    },
    {
      id: 11,
      title: "Hp Latop",
      price: 55000,
      quantity: 1,
      des: " There are many variations of items.",
      img: Laptop,
    },
    {
      id: 22,
      title: "Samsung Phone",
      price: 70000,
      quantity: 1,
      des: " There are many variations of items.",
      img: Samsung,
    },
    {
      id: 13,
      title: "Ipad Pro",
      price: 60000,
      quantity: 1,
      des: " There are many variations of items.",
      img: Ipad,
    },
    {
      id: 14,
      title: "Desktop Computer",
      price: 80000,
      quantity: 1,
      des: " There are many variations of items.",
      img: Desktop,
    },
    {
      id: 15,
      title: "Iphone 13 pro",
      price: 120000,
      quantity: 1,
      des: " There are many variations of items.",
      img: Iphone,
    },
    {
      id: 16,
      title: "Hp Latop",
      price: 55000,
      quantity: 1,
      des: " There are many variations of items.",
      img: Laptop,
    },
    {
      id: 17,
      title: "Samsung Phone",
      price: 70000,
      quantity: 1,
      des: " There are many variations of items.",
      img: Samsung,
    },
    {
      id: 18,
      title: "Ipad Pro",
      price: 60000,
      quantity: 1,
      des: " There are many variations of items.",
      img: Ipad,
    },
    {
      id: 19,
      title: "Desktop Computer",
      price: 80000,
      quantity: 1,
      des: " There are many variations of items.",
      img: Desktop,
    },
    {
      id: 20,
      title: "Iphone 13 pro",
      price: 120000,
      quantity: 1,
      des: " There are many variations of items.",
      img: Iphone,
    },
    {
      id: 21,
      title: "Hp Latop",
      price: 55000,
      quantity: 1,
      des: " There are many variations of items.",
      img: Laptop,
    },
    {
      id: 22,
      title: "Samsung Phone",
      price: 70000,
      quantity: 1,
      des: " There are many variations of items.",
      img: Samsung,
    },
    {
      id: 23,
      title: "Ipad Pro",
      price: 60000,
      quantity: 1,
      des: " There are many variations of items.",
      img: Ipad,
    },
    {
      id: 24,
      title: "Desktop Computer",
      price: 80000,
      quantity: 1,
      des: " There are many variations of items.",
      img: Desktop,
    },
    {
      id: 25,
      title: "Iphone 13 pro",
      price: 120000,
      quantity: 1,
      des: " There are many variations of items.",
      img: Iphone,
    },
  ];
  const menuCatrgory = [
    { title: "MEN'S CLOTHING", image: "/images/men.png" },
    { title: "WOMEN'S CLOTHING", image: "/images/women.png" },
    { title: "KID'S CLOTHING", image: "/images/kid.png" },
    { title: "Sports CLOTHING", image: "/images/sports.png" },
  ];
  return (
    <>
      <section
        style={{
          height: "650px",
          background:
            "radial-gradient(circle, rgba(228,199,105,1) 0%, rgba(230,183,91,1) 99%)",
          //  backgroundImage: `url(images/model1.png), radial-gradient(circle, rgba(228,199,105,1) 0%, rgba(230,183,91,1) 99%)`,
          // backgroundRepeat: " no-repeat",
          // backgroundPosition: "bottom",
        }}
      >
        <div
          style={{
            width: "960px",
            margin: "auto",
            backgroundColor: "#2b2a29",
            clipPath: "polygon(0 0, 100% 0, 96% 100%, 3% 100%)",
            height: "auto",
            padding: "20px 0px",
          }}
        >
          <Grid container spacing={2} justifyContent="center">
            <Grid item className={classes.topMenuItem}>
              Best Sellers
            </Grid>
            <Grid item className={classes.topMenuItem}>
              Gift Ideas
            </Grid>
            <Grid item className={classes.topMenuItem}>
              New Releases
            </Grid>
            <Grid item className={classes.topMenuItem}>
              Today's Deals
            </Grid>
            <Grid item className={classes.topMenuItem}>
              Customer Service
            </Grid>
          </Grid>
        </div>
        <br />
        <div
          style={{
            width: "960px",
            margin: "auto",
            // backgroundColor: "#2b2a29",
            height: "auto",
            padding: "20px 0px",
          }}
        >
          <Typography
            variant="h4"
            component="div"
            gutterBottom
            style={{
              color: "white",
              fontWeight: 600,
              textAlign: "center",
              fontFamily: "Updock",
            }}
          >
            Fashion House
          </Typography>
          <Grid container alignItems="center" spacing={3}>
            <Grid item>
              <MyDrawer />
            </Grid>

            <Grid item>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                variant="contained"
                style={{
                  background: "#2b2a29",
                  fontFamily: "Inter",
                  fontSize: "15px",
                }}
                endIcon={<KeyboardArrowDownIcon />}
                disableElevation
              >
                Category
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleClose} className={classes.catMenu}>
                  MEN'S CLOTHING
                </MenuItem>
                <MenuItem onClick={handleClose} className={classes.catMenu}>
                  WOMEN'S CLOTHING
                </MenuItem>
                <MenuItem onClick={handleClose} className={classes.catMenu}>
                  KID'S CLOTHING
                </MenuItem>
                <MenuItem onClick={handleClose} className={classes.catMenu}>
                  Sports
                </MenuItem>
              </Menu>
            </Grid>
            <Grid item>
              <FormControl
                sx={{ m: 1, width: "450px" }}
                variant="outlined"
                size="small"
              >
                <OutlinedInput
                  id="outlined-adornment-password"
                  style={{ background: "white" }}
                  // type={values.showPassword ? "text" : "password"}
                  // value={values.password}
                  // onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        style={{
                          background: "#ff793f",
                          borderRadius: "3px",
                          position: "relative",
                          left: "2px",
                        }}
                        aria-label="toggle password visibility"
                        // onClick={handleClickShowPassword}
                        // onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item>
              <Grid
                container
                spacing={1}
                alignItems="center"
                className={classes.appbarMenuItem}
              >
                <Grid item>
                  <Badge badgeContent={1} color="primary">
                    <ShoppingCartIcon />
                  </Badge>
                </Grid>
                <Grid item style={{ paddingTop: "5px" }}>
                  CART
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                spacing={1}
                alignItems="center"
                className={classes.appbarMenuItem}
              >
                <Grid item>
                  <PersonIcon />
                </Grid>
                <Grid item style={{ paddingTop: "5px" }}>
                  PROFILE
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <div
            style={{
              textAlign: "center",
            }}
          >
            <Typography
              variant="h2"
              component="div"
              gutterBottom
              style={{
                color: "white",
                fontWeight: 600,

                marginTop: "70px",
              }}
            >
              GET START
              <br /> YOUR FAVORITE SHOPING
            </Typography>
            <Button
              variant="contained"
              disableElevation
              style={{
                background: "#2b2a29",
                fontFamily: "Inter",
                fontSize: "16px",
                padding: "8px 40px",
              }}
              component={Link}
              to="/products"
            >
              Start Shoping
            </Button>
          </div>
        </div>
      </section>
      <section>
        <Typography
          variant="h3"
          component="div"
          gutterBottom
          style={{
            fontWeight: 600,
            textAlign: "center",
            marginTop: "50px",
          }}
        >
          CHOOSE YOUR FAVORITE THINGS
        </Typography>
        <Container maxWidth="lg">
          <br />
          <Grid container spacing={4}>
            {menuCatrgory.map((item, i) => (
              <Grid item xs={12} sm={4} md={3} key={i}>
                <div className={classes.card}>
                  <img
                    src={item.image}
                    alt=""
                    height="150px"
                    width="150px"
                    style={{ display: "block", margin: "auto" }}
                  />
                  <h4 className={classes.cardTitle}>{item.title}</h4>
                  {/* <p className={classes.productDetail}>{item.des}</p>

                  <p className={classes.priceStyle}>Tk {item.price}</p> */}
                  <br />
                  <Button
                    variant="contained"
                    // variant="outlined"
                    disableElevation
                    className={classes.cardButton}
                    // onClick={() => addNew(item)}
                  >
                    See More
                  </Button>
                </div>
              </Grid>
            ))}
          </Grid>
          <br />
          <br />
        </Container>
      </section>
    </>
  );
};

export default Home;