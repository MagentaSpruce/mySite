import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { RiGithubLine } from "react-icons/ri";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <>
      <h2 className="card-title">Featured Projects</h2>
      <div className="underline"></div>
      <div className="cards-container">
        <Card classes={{ root: "card-element" }} className={classes.root}>
          <CardActionArea classes={{ root: "card-element-background" }}>
            <CardMedia
              classes={{ root: "card-picture-1" }}
              className={classes.media}
              image="./nettlesLogo.png"
              title="Nettle's Herbs Logo"
            />

            <CardContent>
              <Typography
                classes={{ root: "card-header-text" }}
                gutterBottom
                variant="h5"
                component="h2"
              >
                Nettle's Herbs | 2021
              </Typography>
              <Typography
                classes={{ root: "card-body-text" }}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                A complete business website for a local company in Jacksonville,
                FL. Fully built out with a custom API built using NodeJS with
                Express. Front end Javascript with MongoDB and mongoose for data
                storage. Stripe for payments, nodemailer for emails.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions classes={{ root: "card-footer" }}>
            <Button
              classes={{ root: "card-footer-icon1" }}
              size="small"
              color="primary"
              href="https://github.com/MagentaSpruce/nettlesHerbs"
            >
              <RiGithubLine alt="view the source code" />
            </Button>
            <Button
              classes={{ root: "card-footer-icon" }}
              size="small"
              color="primary"
              href="https://nettles-herbs.herokuapp.com/home"
            >
              See for yourself! &rarr;
            </Button>
          </CardActions>
        </Card>
        <Card classes={{ root: "card-element" }} className={classes.root}>
          <CardActionArea classes={{ root: "card-element-background" }}>
            <CardMedia
              classes={{ root: "card-picture-2" }}
              className={classes.media}
              image="./bnLogo.png"
              title="Contemplative Reptile"
            />

            <CardContent>
              <Typography
                classes={{ root: "card-header-text" }}
                gutterBottom
                variant="h5"
                component="h2"
              >
                Hot in the Biscuit | 2021
              </Typography>
              <Typography
                classes={{ root: "card-body-text" }}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                A multi-page front-end business website for a local American
                breakfast & lunch cafe in Koh Samui, Thailand. Built with HTML,
                CSS and vanilla JavaScript only. This site utilizes a Custom
                design with multiple media embeddings and full media
                responsiveness. Connected to local food delivery services via
                API.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions classes={{ root: "card-footer" }}>
            <Button
              classes={{ root: "card-footer-icon1" }}
              size="small"
              color="primary"
              href="https://github.com/TrissNepps/hotinthebiscuitsamui"
            >
              <RiGithubLine alt="view the source code" />
            </Button>
            <Button
              classes={{ root: "card-footer-icon" }}
              size="small"
              color="primary"
              href="https://www.hotinthebiscuit.com/"
            >
              See for yourself! &rarr;
            </Button>
          </CardActions>
        </Card>
        <Card classes={{ root: "card-element" }} className={classes.root}>
          <CardActionArea classes={{ root: "card-element-background" }}>
            <CardMedia
              classes={{ root: "card-picture-3" }}
              className={classes.media}
              image="./nettlesLogo.png"
              title="Contemplative Reptile"
            />

            <CardContent>
              <Typography
                classes={{ root: "card-header-text" }}
                gutterBottom
                variant="h5"
                component="h2"
              >
                Forkify | 2021
              </Typography>
              <Typography
                classes={{ root: "card-body-text" }}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                A completely interactive desktop-only recipe application which
                utilizes a public API in order to access user recipe search
                request and render back the ingredients and cooking
                instructions. This webpage was built using HTML, SASS, and
                vanilla JavaScript but has not been made mobile responsive.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions classes={{ root: "card-footer" }}>
            <Button
              classes={{ root: "card-footer-icon1" }}
              size="small"
              color="primary"
              href="https://github.com/MagentaSpruce/forkifyApp"
            >
              <RiGithubLine alt="view the source code" />
            </Button>
            <Button
              classes={{ root: "card-footer-icon" }}
              size="small"
              color="primary"
              href="https://forkify-spruce.netlify.app/"
            >
              See for yourself! &rarr;
            </Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}
