
const DARK_COLORS = {
  background: {
    primary: "#212529",
    secondary: "#303134"
  },
  text: {
    primary: "#fff",
    secondary: "rgb(209, 209, 209)",
    red: "rgb(245, 106, 106)"
  },
  details: {
    primary: "#747474",
    secondary: "#656565"
  },
  hover: {
    primary: "#dddddd"
  }
};

const LIGHT_COLORS = {
  background: {
    primary: "#F8F9FA",
    secondary: "#ddd"
  },
  text: {
    primary: "#000",
    secondary: "#050505",
    red: "rgb(245, 106, 106)"
  },
  details: {
    primary: "#343434",
    secondary: "#252525"
  },
  hover: {
    primary: "#4b4b4b"
  }
};

export const styledtheme = (theme) => {
  const COLORS = theme === "light" ? LIGHT_COLORS : DARK_COLORS;
  return {
    bookCard: {
      body: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      },
      container: {
        backgroundColor: COLORS.background.primary,
        border: `1px solid ${COLORS.details.primary}`,
        height: "100%"
      },
      image: {
        borderRadius: "10px",
        height: "210px",
        margin: "auto",
        marginBottom: "1rem",
        width: "150px"
      },
      outOfStock: {
        color: COLORS.text.red
      },
      title: {
        height: "45px",
        marginBottom: "15px"
      },
      wrapper: {
        height: "24rem",
        margin: 3,
        marginBottom: "1rem",
        width: "20rem"
      }
    },
    bookDetails: {
      description:{
        lineHeight: "2rem",
        marginBlock: "10px"
      },
      image: {
        border: `1px solid ${COLORS.details.secondary}`,
        height: "550px",
        margin: "auto",
        width: "350px"
      },
      outOfStock:{ margin: "20px 0px" },
      price :{
        marginBlock: "10px",
        fontSize: "3rem"
      },
      subtitle:{
        color: COLORS.text.secondary
      }
    },
    displayIf : (condition) => {return { display:condition?"":"none" };},
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
        enableBackground: "new 0 0 295.559 295.559"
      };
    },
    iconColor: COLORS.text.primary,
    iconHoverColor: COLORS.hover.primary,
    input: {
      backgroundColor: COLORS.background.secondary,
      border: `1px solid ${COLORS.details.primary}`,
      color: COLORS.text.primary
    },
    link: {
      color: "inherit",
      textDecoration: "none"
    },
    login: {
      button:{ marginTop: "30px" },
      container: {
        alignItems: "center",
        color: COLORS.text.primary,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "100%"
      },
      form: {
        backgroundColor: COLORS.background.secondary,
        borderRadius: "3%",
        minWidth: "340px",
        padding: "30px",
        width: "50%"
      }
    },
    main: {
      backgroundColor: COLORS.background.primary,
      color: COLORS.text.primary,
      minHeight: "100vh"
    },
    modal:{
      body:{
        backgroundColor:COLORS.background.primary,
        color:COLORS.text.primary
      },
      footer:{
        backgroundColor:COLORS.background.primary,
        borderTop:`1px solid ${COLORS.details.primary}`,
        color:COLORS.text.primary
      },
      header:{
        backgroundColor:COLORS.background.primary,
        borderBottom:`1px solid ${COLORS.details.primary}`,
        color:COLORS.text.primary
      },
      textarea:{
        backgroundColor:COLORS.background.primary,
        color:COLORS.text.primary,marginBlock:"10px",
        height:"100px",
        resize:"none"
      }
    },
    nav: {
      buttons: {
        justifyContent: "space-evenly",
        width: "400px"
      },
      icon:{
        fill: COLORS.text.primary,
        height: "17px",
        width: "17px"
      },
      link:{ marginInline:"10px" },
      loggedUser: {
        alignItems: "center",
        color: COLORS.text.primary,
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        justifyContent: "flex-end",
        width: "40%"
      },
      navbar:{
        marginBlock: "10px",
        position: "relative"
      }
    },
    notification: (notification) => {
      return {
        visibility: notification ? "" : "hidden",
        color: COLORS.text.red,
        border: `2px solid ${COLORS.text.red}`,
        padding: "5px 10px",
        borderRadius: "5%",
        margin: "10px"
      };
    },
    pointer : { cursor: "pointer" },
    recommendations:{
      heading:{
        marginBlock:"1rem"
      }
    },
    review:{
      addButton:{ marginBlock:"10px" },
      author:{
        color: COLORS.text.secondary,
        left: 0,
        marginBlock: "0.5rem",
        position:"relative",
        width:"100%"
      },
      container:{
        alignItems:"flex-start",
        backgroundColor: COLORS.background.secondary,
        borderRadius:"10px",
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        marginBlock:"5px",
        padding:"10px"
      },
      rating:{ alignSelf:"flex-end" }
    },
    search: {
      container:{ justifyContent: "center" },
      input:{
        background: "inherit",
        border: "none",
        borderBottom: `3px solid ${COLORS.details.primary}`,
        color: COLORS.text.primary,
        height: "2.5rem",
        marginBlock: "10%",
        width: "50%"
      },
      table:{
        button:{ textAlign:"center" }
      }
    },
    shoppingCart: {
      checkOutButton: {
        fontSize: "1rem",
        height: "35px",
        marginLeft: "50%",
        marginTop: "1rem",
        padding: 0,
        width: "50%"
      },
      dropdown: {
        backgroundColor: COLORS.background.secondary,
        color: COLORS.text.primary
      },
      item: {
        borderBottom: `3px solid ${COLORS.details.primary}`,
        color: COLORS.text.primary,
        display: "flex",
        flexDirection: "row",
        fontSize: "small",
        justifyContent: "space-between"
      },
      itemDetails: { alignSelf: "center" },
      menu: {
        width: "20rem"
      }
    }
  };
};
