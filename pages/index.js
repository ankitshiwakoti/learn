import { Inter } from "next/font/google";
import Suscribe from "../Components/suscribe";
import Component2 from "../Components/component2";
import Component3 from "../Components/component3";
import Component4 from "../Components/component4";
import Accordions from "../Components/accordion";
import Test from "@/Components/test";
import Occupation from "@/Components/occupation";
import Member from "@/Components/member";
import Expert from "@/Components/expert";
import Testimonials from "@/Components/testimonials";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const data = [
    {
      id: 1,
      title: "ENGINEERING MANAGER",
      CODE: "332312",
    },
    {
      ID: 2,
      title: "CHEMICAL ENGINEER",
      CODE: "331765",
    },
    {
      id: 3,
      title: "INDUSTRIAL ENGINEER",
      CODE: "312312",
    },
    {
      ID: 4,
      title: "CIVIL ENGINEER",
      CODE: "551765",
    },
    {
      id: 5,
      title: "MATERIALS ENGINEER",
      CODE: "332312",
    },
    {
      ID: 6,
      title: "GEOTECHNICAL ENGINEER",
      CODE: "331765",
    },
    {
      id: 7,
      title: "STRUCTURAL ENGINEER",
      CODE: "998312",
    },
    {
      ID: 8,
      title: "TRANSPORT ENGINEER",
      CODE: "331765",
    },
    {
      ID: 9,
      title: "ELECTRICAL ENGINEER",
      CODE: "331765",
    },
  ];

  const list = [
    {
      id: 1,
      group: "UNIT GROUP 1332",
      title1: "civil engineer",
      code1: "233211",
      title2: "civil engineer",
      code2: "233211",
      title3: "civil engineer",
      code3: "233211",
      title4: "civil engineer",
      code4: "233211",
      title5: "civil engineer",
      code5: "233211",
      title6: "civil engineer",
      code6: "233211",
    },
    {
      id: 2,
      group: "UNIT GROUP 2331",
      title1: "software engineer",
      code1: "233211",
      title2: "geotechnical engineer",
      code2: "233211",
      title3: "reel engineer",
      code3: "233211",
      title4: "civil engineer",
      code4: "233211",
      title5: "civil engineer",
      code5: "233211",
      title6: "civil engineer",
      code6: "233211",
    },
    {
      id: 3,
      group: "UNIT GROUP 2432",
      title1: "mechinical engineer",
      code1: "233211",
      title2: "civil engineer",
      code2: "233211",
      title3: "facebook engineer",
      code3: "233211",
      title4: "civil engineer",
      code4: "233211",
      title5: "civil engineer",
      code5: "233211",
      title6: "civil engineer",
      code6: "233211",
    },
    {
      id: 4,
      group: "UNIT GROUP 6322",
      title1: "chemical engineer",
      code1: "233211",
      title2: "biological engineer",
      code2: "233211",
      title3: "civil engineer",
      code3: "233211",
      title4: "civil engineer",
      code4: "233211",
      title5: "civil engineer",
      code5: "233211",
      title6: "civil engineer",
      code6: "233211",
    },
    {
      id: 5,
      group: "UNIT GROUP 1092",
      title1: "test engineer",
      code1: "233211",
      title2: "west engineer",
      code2: "233211",
      title3: "civil engineer",
      code3: "233211",
      title4: "civil engineer",
      code4: "233211",
      title5: "civil engineer",
      code5: "233211",
      title6: "civil engineer",
      code6: "233211",
    },
    {
      id: 6,
      group: "UNIT GROUP 2932",
      title1: "hello engineer",
      code1: "233211",
      title2: "civil engineer",
      code2: "233211",
      title3: "civil engineer",
      code3: "233211",
      title4: "civil engineer",
      code4: "233211",
      title5: "civil engineer",
      code5: "233211",
      title6: "civil engineer",
      code6: "233211",
    },
    {
      id: 7,
      group: "UNIT GROUP 7733",
      title1: "civil engineer",
      code1: "233211",
      title2: "civil engineer",
      code2: "233211",
      title3: "civil engineer",
      code3: "233211",
      title4: "civil engineer",
      code4: "233211",
      title5: "civil engineer",
      code5: "233211",
      title6: "civil engineer",
      code6: "233211",
    },
    {
      id: 8,
      group: "UNIT GROUP 8382",
      title1: "civil engineer",
      code1: "233211",
      title2: "civil engineer",
      code2: "233211",
      title3: "civil engineer",
      code3: "233211",
      title4: "civil engineer",
      code4: "233211",
      title5: "civil engineer",
      code5: "233211",
      title6: "civil engineer",
      code6: "233211",
    },
    {
      id: 9,
      group: "UNIT GROUP 9332",
      title1: "civil engineer",
      code1: "233211",
      title2: "civil engineer",
      code2: "233211",
      title3: "civil engineer",
      code3: "233211",
      title4: "civil engineer",
      code4: "233211",
      title5: "civil engineer",
      code5: "233211",
      title6: "civil engineer",
      code6: "233211",
    },
    {
      id: 10,
      group: "UNIT GROUP 1032",
      title1: "civil engineer",
      code1: "233211",
      title2: "civil engineer",
      code2: "233211",
      title3: "civil engineer",
      code3: "233211",
      title4: "civil engineer",
      code4: "233211",
      title5: "civil engineer",
      code5: "233211",
      title6: "civil engineer",
      code6: "233211",
    },
  ];

  const member = [
    {
      id: 1,
      title:
        "  Be a member of Engineers Australia, Show your competency through  Stage 1 Assignment",
      body1:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet volutpat dui, sollicitudin dictum lacus finibus nec. Proin vulputate odio quam, sit amet aliquet urna rutrum ac.Pellentesque in ex nulla. Ut ultrices viverra efficitur. Phasellus elementum pellentesque metus vel porttitor. Aenean non maximus quam. Aenean posuere sodales tortor, at facilisis ex dapibus id. In viverra consectetur egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis a arcu ex. Aliquam non quam ac sem vehicula euismod.",

      body2:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet volutpat dui, sollicitudin dictum lacus finibus nec. Proin vulputate odio quam, sit amet aliquet urna rutrum ac.Pellentesque in ex nulla. Ut ultrices viverra efficitur. Phasellus elementum pellentesque metus vel porttitor. Aenean non maximus quam. Aenean posuere sodales tortor, at facilisis ex dapibus id. In viverra consectetur egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis a arcu ex. Aliquam non quam ac sem vehicula euismod.",
    },

    {
      id: 2,
      title:
        "  Be a member of Engineers Australia, Show your competency through  Stage 1 Assignment",
      body1:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet volutpat dui, sollicitudin dictum lacus finibus nec. Proin vulputate odio quam, sit amet aliquet urna rutrum ac.Pellentesque in ex nulla. Ut ultrices viverra efficitur. Phasellus elementum pellentesque metus vel porttitor. Aenean non maximus quam. Aenean posuere sodales tortor, at facilisis ex dapibus id. In viverra consectetur egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis a arcu ex. Aliquam non quam ac sem vehicula euismod.",

      body2:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet volutpat dui, sollicitudin dictum lacus finibus nec. Proin vulputate odio quam, sit amet aliquet urna rutrum ac.Pellentesque in ex nulla. Ut ultrices viverra efficitur. Phasellus elementum pellentesque metus vel porttitor. Aenean non maximus quam. Aenean posuere sodales tortor, at facilisis ex dapibus id. In viverra consectetur egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis a arcu ex. Aliquam non quam ac sem vehicula euismod.",
    },
  ];

  const expert = [
    {
      id: 1,
      name: "hazel sharma",
      role: "CDR Agent",
      button: "Hazel",
    },
    {
      id: 2,
      name: "atulya sharma",
      role: "CDR Agent",
      button: "Atulya",
    },
    {
      id: 3,
      name: "alina malla",
      role: "CDR Agent",
      button: "Alina",
    },
    {
      id: 4,
      name: "sofia sharma",
      role: "CDR Agent",
      button: "Sofia",
    },
    {
      id: 5,
      name: "saluja pandey",
      role: "CDR Agent",
      button: "Saluja",
    },
    {
      id: 1,
      name: "puspa Dahal",
      role: "CDR Agent",
      button: "Puspa",
    },
  ];

  const client = [
    {
      id: 1,
      name: "nischhita karki",
      country: "australia",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet volutpat dui, sollicitudin dictum lacus finibus nec. Proin vulputate odio quam",
    },
    {
      id: 2,
      name: "harka bahadur shampang",
      country: "Dharan",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet volutpat dui, sollicitudin dictum lacus finibus nec. Proin vulputate odio quam",
    },
    {
      id: 3,
      name: "nischal raj basnet ",
      country: "Budhabari",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin imperdiet volutpat dui, sollicitudin dictum lacus finibus nec. Proin vulputate odio quam",
    },
  ];
  return (
    <>
      <section>
        <Suscribe />

        <Component2 />

        <Component3 data={data} />

        <Component4 />

        {/* <Test /> */}

        <Accordions />
        <Occupation data={list} />
        <Member data={member} />
        <Expert data={expert} />
        <Testimonials data={client} />
      </section>
    </>
  );
}
