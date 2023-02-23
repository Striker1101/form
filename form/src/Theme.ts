interface Theme {

  colors: {
    header:string,
    body:string,
    nav:string,
    footer:string
  },
  mobile:string
}



const theme: Theme = {
  colors: {
    header: "#ebfbff",
    body: "#F5F5F5",
    footer: "#003333",
    nav: "black",
  },
  mobile: "765px",
};

export default theme;
