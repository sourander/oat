import { NumericalCriteria } from "../../types/oat-grade-types";

const unique_video_structure_quality: NumericalCriteria = {
  id: "video_structure_quality",
  title: "Video",
  description: `Videon vastaanotettavuus katsojan näkökulmasta - sekä tekniseltä 
  että sisällölliseltä kannalta.`,
  weight: 10,
  options: [
    {
      grade: 0,
      desc: `Video on huomattavan vaikea vastaanottaa joko teknisistä tai rakenteellisista syistä.`,
    },
    {
      grade: 1,
      desc: `Video on harjoittelematta improvisoitu, epäselkeä, hajavainen tai merkittävästi väärän mittainen.`,
    },
    {
      grade: 2,
      desc: `Video on osittain rakenteeton, epäselkeä tai hajanainen.`,
    },
    {
      grade: 3,
      desc: `Video on huomattavan vaikea vastaanottaa joko teknisistä tai rakenteellisista syistä.`,
    },
    {
      grade: 4,
      desc: `Videon sisältö on enimmäkseen vastaanotettavissa ja jäsenneltyä.`,
    },
    {
      grade: 5,
      desc: "Videon sisältö on selkeää ja jäsenneltyä niin teknisestä kuin sisällöllisesti.",
    },
  ],
};

export default unique_video_structure_quality;