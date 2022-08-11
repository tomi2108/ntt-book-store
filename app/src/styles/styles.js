
const DARK_COLORS = {
  background: {
    primary: "rgb(36, 39, 43)",
    secondary: "#303134",
  },
  text: {
    primary: "#fff",
    secondary: "rgb(209, 209, 209)",
    red: "rgb(245, 106, 106)",
  },
  details: {
    primary: "#747474",
    secondary: "#656565",
  },
};

const LIGHT_COLORS = {
  background: {
    primary: "#FCFCFC",
    secondary: "#ddd",
  },
  text: {
    primary: "#000",
    secondary: "#050505",
    red: "rgb(245, 106, 106)",
  },
  details: {
    primary: "#343434",
    secondary: "#252525",
  },
};

export const styledtheme = (theme) => {
  const COLORS = theme === "light" ? LIGHT_COLORS : DARK_COLORS;
  return {
    iconColor: COLORS.text.primary,
    nav: {
      navbar:{
        marginBlock: "10px",
        position: "relative",
      },
      links: {
        justifyContent: "space-evenly",
        width: "25%",
      },
      loggedUser: {
        color: COLORS.text.primary,
        marginLeft: "40%",
        marginRight: "15px",
      },
    },
    main: {
      backgroundColor: COLORS.background.primary,
      minHeight: "100vh",
      color: COLORS.text.primary,
    },
    bookCard: {
      wrapper: {
        margin: 3,
        width: "20rem",
        height: "24rem",
        marginBottom: "1rem",
      },
      container: {
        height: "100%",
        backgroundColor: COLORS.background.primary,
        border: `1px solid ${COLORS.details.primary}`,
      },
      body: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      },
      image: {
        borderRadius: "10px",
        width: "150px",
        height: "210px",
        margin: "auto",
        marginBottom: "1rem",
      },
      title: {
        height: "45px",
        marginBottom: "15px",
      },
      outOfStock: {
        color: COLORS.text.red,
      },
    },
    shoppingCart: {
      dropdown: {
        backgroundColor: COLORS.background.secondary,
        color: COLORS.text.primary,
      },
      item: {
        color: COLORS.text.primary,
        fontSize: "small",
        borderBottom: `3px solid ${COLORS.details.primary}`,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      },
      menu: {
        width: "20rem",
      },
      checkOutButton: {
        fontSize: "1rem",
        padding: 0,
        width: "50%",
        height: "35px",
        marginLeft: "50%",
        marginTop: "1rem",
      },
    },
    link: {
      color: "inherit",
      textDecoration: "none",
    },
    bookDetails: {
      image: {
        border: `1px solid ${COLORS.details.secondary}`,
        width: "350px",
        height: "550px",
        margin: "auto",
      },
      subtitle:{
        color: COLORS.text.secondary,
      }
    },
    login: {
      container: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        color: COLORS.text.primary,
        justifyContent: "center",
        alignItems: "center",
      },
      form: {
        backgroundColor: COLORS.background.secondary,
        padding: "30px",
        borderRadius: "3%",
        width: "50%",
        minWidth: "340px",
      },
    },
    notification: (notification) => {
      return {
        visibility: notification ? "" : "hidden",
        color: COLORS.text.red,
        border: `2px solid ${COLORS.text.red}`,
        padding: "5px 10px",
        borderRadius: "5%",
        margin: "10px",
      };
    },
    input: {
      backgroundColor: COLORS.background.secondary,
      color: COLORS.text.primary,
      border: `1px solid ${COLORS.details.primary}`,
    },
    search: {
      marginBlock: "10%",
      width: "50%",
      height: "2.5rem",
      background: "inherit",
      color: COLORS.text.primary,
      border: "none",
      borderBottom: `3px solid ${COLORS.details.primary}`,
    },
    review:{
      container:{

        backgroundColor: COLORS.background.secondary,
        borderRadius:"10px",
        padding:"10px",
        marginBlock:"5px",
        display:"flex",
        flexDirection:"column",
        alignItems:"flex-start",
        justifyContent:"flex-start"
      },
      author:{
        color: COLORS.text.secondary,
        left: 0,

        marginBlock: "0.5rem",
        position:"relative",
        width:"100%"
      },
    },
    modal:{
      header:{ backgroundColor:COLORS.background.primary,borderBottom:`1px solid ${COLORS.details.primary}`,color:COLORS.text.primary },
      body:{ backgroundColor:COLORS.background.primary, color:COLORS.text.primary },
      footer:{ backgroundColor:COLORS.background.primary,borderTop:`1px solid ${COLORS.details.primary}`,color:COLORS.text.primary },
      textarea:{ height:"100px",resize:"none",backgroundColor:COLORS.background.primary,color:COLORS.text.primary,marginBlock:"10px"  }
    },
    recommendations:{
      heading:{
        marginBlock:"1rem",
      }
    },
    heartIcon:(isFavorite) => {
      return {
        bottom:"15px",
        border: `1px solid ${COLORS.details.primary}`,
        borderRadius: "30%",
        padding:"7px",
        right:"15px",
        position:"absolute",
        width: "2.5rem",
        height: "2.5rem",
        fill: isFavorite ? "red" : COLORS.background.secondary,
        enableBackground: "new 0 0 295.559 295.559",
      };
    }
  };
};
