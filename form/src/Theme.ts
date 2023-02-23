interface Theme {

  colors: {
    header:string,
    body:string,
    nav:string,
    footer:string,
    white: string
  },
  mobile:string
}



const theme: Theme = {
  colors: {
    header: "#ebfbff",
    body: "#F5F5F5",
    footer: "#003333",
    nav: "black",
    white:"white"
  },
  mobile: "765px",
};

export default theme;
