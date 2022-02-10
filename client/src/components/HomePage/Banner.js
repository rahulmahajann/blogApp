import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles({
    banner__image: {
        // background: `url(${'http://www.pixelstalk.net/wp-content/uploads/2016/07/Liverpool-Image-Free-Download.jpg'}) center/55% repeat-x #000`,
        // background: `url(${'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstadiumdb.com%2Fpictures%2Fstadiums%2Feng%2Fanfield%2Fanfield27.jpg&f=1&nofb=1'}) center/55% repeat-x #000`,
        // background: `url(${'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstadiumdb.com%2Fpictures%2Fstadiums%2Feng%2Fanfield%2Fanfield27.jpg&f=1&nofb=1'}) center/55% repeat-x #000`,
        // background: `url(${'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2018%2F03%2F19%2F587183-Anfield_Road-Liverpool_FC-Liverpool-stadium-soccer.jpg&f=1&nofb=1'}) center/55% repeat-x #000`,
        // background: `url(${'https://liverpoolcore.com/wp-content/uploads/2019/08/3-1.jpg'}) center/50% repeat-x #000`,
        background: `url(${'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.wallpaperbetter.com%2Fwallpaper%2F999%2F565%2F295%2Fliverpool-laptop-backgrounds-720P-wallpaper-middle-size.jpg&f=1&nofb=1'}) center/60% repeat-x #000`,
        width: '100%',
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    banner__itemHeading: {
        fontSize: [66, "!important"],
        color: 'rgb(236, 114, 1)',
        // color: 'rgb(1, 201, 236)',
        lineHeight: 1
    },
    banner__itemContent: {
        color: 'rgb(138, 126, 115)',
        // background: 'white',
        fontSize: [20, "!important"]
    }
});

function Banner(){

    const name = localStorage.getItem("name");

    const classes = useStyles();

    return(
        // <h1>This is from banner of home page</h1>
        <Box className = {classes.banner__image}>
            <Typography className = {classes.banner__itemHeading}>BLOG</Typography>
            <Typography className = {classes.banner__itemContent}>{name} aka Liverpool Fan</Typography>
        </Box>
    )
}

export default Banner;