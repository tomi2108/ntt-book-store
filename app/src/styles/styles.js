
const styles = {
  bookCard:{
    wrapper:{
      margin: 3,
      width: "20rem",
      height: "24rem",
      marginBottom: "1rem"
    },
    container:{
      height: "100%",
      backgroundColor: "#202124"
    },
    body:{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    },
    image:{
      backgroundSize: "cover",
      width: "120px",
      height: "155px",
      margin: "auto"
    },
    title:{
      height: "45px",
      marginBottom: "15px"
    },
    subtitle:{
      color: "rgb(209, 209, 209)",
      textAlign: "right",
      marginTop: "0.5rem"
    },
    outOfStock:{
      color: "rgb(245, 106, 106)"
    }
  },
  shoppingCart:{
    dropdown: {
      backgroundColor: "#212529",
      color: "#fff"
    },
    item:{
      fontSize: "small",
      borderBottom: "3px solid #747474",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    menu:{
      width: "20rem"
    },
    checkOutButton:{
      fontSize: "1rem",
      padding: 0,
      width: "50%",
      height: "35px",
      marginLeft: "50%",
      marginTop: "1rem"
    }
  },
};

export default styles;