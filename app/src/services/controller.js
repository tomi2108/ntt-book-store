let host = "";
if (process.env.NODE_ENV === "development") {
  host = "http://localhost:3001";
}

export default host;
