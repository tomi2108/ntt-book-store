
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
      width: "120px",
      height: "155px",
      margin: "auto",

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
  link:{
    color: "inherit",
    textDecoration: "none",
  },
  bookDetails:{
    image:{
      border:"1px solid #656565",
      width: "350px",
      height: "550px",
      margin: "auto"
    },
  },
  login:{
    container:{ display:"flex",
      flexDirection:"column",
      width:"100%",
      color: "white",
      justifyContent:"center",
      alignItems:"center"
    },
    form:{
      backgroundColor:"#202124",
      padding:"30px",
      borderRadius:"10%",
      width:"50%",
      minWidth:"340px"
    }
  },
  notification:(notification) => {
    return {
      visibility:notification?"":"hidden",
      color:"rgb(245, 106, 106)",
      border:"2px rgb(245, 106, 106) solid",
      padding:"5px 10px",
      borderRadius:"5%",
      margin:"10px"
    };
  },
  input:{ backgroundColor:"#202124",color:"white" },
  search:{ marginBlock:"10%",
    width:"50%",
    height:"2.5rem",
    background:"inherit",
    color:"white",
    border:"none",
    borderBottom: "3px solid #747474", }
};

export default styles;