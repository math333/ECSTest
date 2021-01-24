import { fade, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    $color: "#0cf",
    button: {
          display: "inline-block",
          padding: ".75rem 1.25rem",
          borderRadius: "10rem",
          color: "black",
          textTransform: "uppercase",
          fontSize: "1rem",
          letterSpacing: ".15rem",
          transition: "all .3s",
          position: "relative",
          overflow: "hidden",
          zIndex: 1,
          "&:after": {
            content: "''",
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgb(0, 141, 197)",
            borderRadius: "10rem",
            zIndex: -2
          },
          "&:before": {
            content: "''",
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "0%",
            height: "100%",
            backgroundColor: "darken(rgb(0, 141, 197), 15%)",
            transition: "all .3s",
            borderRadius: "10rem",
            zIndex: -1
          },
          "&:hover": { color: "blue", "&:before": { width: "100%" } }
        },
        "*": { fontFamily: "Arial", textDecoration: "none", fontSize: "20px" },
        ".container": {
          paddingTop: "50px",
          margin: "0 auto",
          width: "100%",
          textAlign: "center"
        },
        h1: {
          textTransform: "uppercase",
          fontSize: ".8rem",
          marginBottom: "2rem",
          color: "#777"
        },
        span: {
          display: "block",
          marginTop: "2rem",
          fontSize: ".7rem",
          color: "#777",
          a: { fontSize: ".7rem", color: "#999", textDecoration: "underline" }
        },
        checkoutArea:{
            display:'flex',
            flexDirection:'row',
        }
  }));