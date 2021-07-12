import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Nettlesherbs from "./nettlesLogo.png";

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
      <Card classes={{ root: "card-element" }} className={classes.root}>
        <CardActionArea classes={{ root: "card-element-background" }}>
          <CardMedia
            classes={{ root: "card-picture-1" }}
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
              Nettle's Herbs | 2021
            </Typography>
            <Typography
              classes={{ root: "card-body-text" }}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              A complete business website for a local company in Jacksonville,
              FL. Fully built out and custom API built using NodeJS with
              Express. Front end Javascript with MongoDB and mongoose for data
              storage along with Stripe for payments and nodemailer for emails.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions classes={{ root: "card-footer" }}>
          <Button
            classes={{ root: "card-footer-icon1" }}
            size="small"
            color="primary"
          >
            <RiGithubLine alt="view the source code" />
          </Button>
          <Button
            classes={{ root: "card-footer-icon" }}
            size="small"
            color="primary"
          >
            See for yourself! &rarr;
          </Button>
        </CardActions>
      </Card>
      <Card classes={{ root: "card-element" }} className={classes.root}>
        <CardActionArea classes={{ root: "card-element-background" }}>
          <CardMedia
            classes={{ root: "card-picture-1" }}
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
              Nettle's Herbs | 2021
            </Typography>
            <Typography
              classes={{ root: "card-body-text" }}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              A complete business website for a local company in Jacksonville,
              FL. Fully built out and custom API built using NodeJS with
              Express. Front end Javascript with MongoDB and mongoose for data
              storage along with Stripe for payments and nodemailer for emails.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions classes={{ root: "card-footer" }}>
          <Button
            classes={{ root: "card-footer-icon1" }}
            size="small"
            color="primary"
          >
            <RiGithubLine alt="view the source code" />
          </Button>
          <Button
            classes={{ root: "card-footer-icon" }}
            size="small"
            color="primary"
          >
            See for yourself! &rarr;
          </Button>
        </CardActions>
      </Card>
      <Card classes={{ root: "card-element" }} className={classes.root}>
        <CardActionArea classes={{ root: "card-element-background" }}>
          <CardMedia
            classes={{ root: "card-picture-1" }}
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
              Nettle's Herbs | 2021
            </Typography>
            <Typography
              classes={{ root: "card-body-text" }}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              A complete business website for a local company in Jacksonville,
              FL. Fully built out and custom API built using NodeJS with
              Express. Front end Javascript with MongoDB and mongoose for data
              storage along with Stripe for payments and nodemailer for emails.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions classes={{ root: "card-footer" }}>
          <Button
            classes={{ root: "card-footer-icon1" }}
            size="small"
            color="primary"
          >
            <RiGithubLine alt="view the source code" />
          </Button>
          <Button
            classes={{ root: "card-footer-icon" }}
            size="small"
            color="primary"
          >
            See for yourself! &rarr;
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
