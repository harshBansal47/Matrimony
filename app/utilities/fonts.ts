import { Roboto, Lato, Open_Sans, Montserrat, Poppins } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "700", "900"],
  style:["normal","italic"],
  subsets: ["latin"]
});

const lato = Lato({
  weight: ["300", "400", "700","900"],
  style:["normal","italic"],
  subsets: ["latin"]
});

const openSans = Open_Sans({
  weight: ["300", "400", "700","800"],
  style:["normal","italic"],
  subsets: ["latin"]
});

const montserrat = Montserrat({
  weight: ["300", "400", "700", "900"],
  style:["normal","italic"],
  subsets: ["latin"]
});

const poppins = Poppins({
  weight: ["300", "400", "700", "900"],
  style:["normal","italic"],
  subsets: ["latin"]
});


export {roboto,montserrat,lato,poppins,openSans}