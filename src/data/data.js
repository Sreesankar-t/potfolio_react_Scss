import { AiOutlineHome, AiOutlineCalculator, AiOutlineSetting, AiOutlineShareAlt } from "react-icons/ai"
import { RiToolsLine, RiUserLine } from "react-icons/ri"
import { FaRegLightbulb, FaFacebookF, FaTwitter, FaInstagram, FaDribbble, FaShippingFast, FaLinkedin, FaGithub } from "react-icons/fa"
import { CgCardClubs, CgDatabase } from "react-icons/cg"
import { TbMailOpened, TbTool } from "react-icons/tb"
import { GoMail } from "react-icons/go"
import { GiChart, GiPaper, GiPinballFlipper } from "react-icons/gi"
import { FiLayers } from "react-icons/fi"
import { BsPhone } from "react-icons/bs"
import { BsPhoneVibrate, BsVectorPen } from "react-icons/bs"
import { MdShareLocation, MdLocalShipping, MdOutlineLocalShipping, MdToll } from "react-icons/md"
import { BiLaptop, BiLibrary } from "react-icons/bi"

// export const menu = [
//   {
//     id: 1,
//     text: "home",
//     url: "/",
//     icon: <AiOutlineHome />,
//   },
//   {
//     id: 2,
//     text: "resume",
//     url: "/resume",
//     icon: <RiUserLine />,
//   },
//   {
//     id: 3,
//     text: "portfolio",
//     url: "/portfolio",
//     icon: <FaRegLightbulb />,
//   },
//   {
//     id: 4,
//     text: "blog",
//     url: "/blog",
//     icon: <CgCardClubs />,
//   },
//   {
//     id: 5,
//     text: "contact",
//     url: "/contact",
//     icon: <TbMailOpened />,
//   },
// ]

export const socialIcon = [
  {
    id: 1,
    icon: <FaFacebookF />,
    class: "facebook",
  },
  {
    id: 2,
    icon: <FaLinkedin />,
    class: "twitter",
  },
  {
    id: 3,
    icon: <FaGithub />,
    class: "dribbble",
  },
  {
    id: 4,
    icon: <FaInstagram/>,
    class: "instagram",
  },
]

export const side = [
  {
    id: 1,
    num: 85,
    text: "Backend Development",
    class: "skill1",
  },
  {
    id: 2,
    num: 92,
    text: "Frontend Development",
    class: "skill2",
  },
  {
    id: 3,
    num: 71,
    text: "Web Design",
    class: "skill3",
  },
]

export const about = [
  {
    deatils: [
      {
        text: "My Name",
        value: "Sreesankar t",
        icon: <RiUserLine />,
      },
      { text: "Date_of_birth", value: "31-12-2000", icon: <AiOutlineCalculator /> },
      { text: "Email Address", value: "sreeshankerthekkan@gmail.com", icon: <GoMail /> },
      { text: "Phone Number", value: "7356840708", icon: <BsPhoneVibrate /> },
      { text: "Address", value: "thekkan house puthiyatherumandapam ", icon: <MdShareLocation /> },
    ],
    bio: [
      {
        para1: "I am a self-taught MERN stack developer currently learning the MERN stack from Brototype, a self-learning platform.I have completed two main projects and more than one mini project. I am a quick learner; I learned the MERN stack in just six months. ",
        para2: "One of my projects is an e-commerce website for buying laptops. Another one is a hotel booking web application where users can easily find and book hotels, ensuring a comfortable stay. I also have more than one mini project.",
        para3: " I am daily thrilling to explore new technologies and apply my newly acquired skills to real-world projects. I enhance my problem-solving skills daily with LeetCode..",
        images: "./images/bio.png",
      },
    ],

    serives: [
      {
        id: 1,
        icon: <BiLaptop />,
        title: "Programming",
        
        text: "fundamental stack ",
        decs: "JavaScript, DSA, HTML, CSS+Sass, SQL",
      
      },
      {
        id: 2,
        icon: <TbTool />,
        title: "Tools",
        text: "collection of tools and technologies ",
        decs: "Git, Postman, AWS, Figma,Insomnia",
       
      },
      {
        id: 3,
        icon: <FiLayers />,
        title: "Frameworks ",
        text: "technology stack for web applications",
        decs: " Node.js, Express.js, REST API, NGINX",
        
      },
      {
        id: 4,
        icon: <BiLibrary />,
        title: "Libraries",
        text: "modern technology stack",
        decs: "React, JWT, Redux, ContextAPI, Material-UI, Axios, Bootstrap,React Router,Nodemailer",
      },
      {
        id: 5,
        icon: <CgDatabase />,
        title: "Database",
        text: "Data collection",
        decs: "MongoDB, PostgreSQL",
        
      },
      {
        id: 6,
        icon: <RiToolsLine />,
        title: "View Engines ",
        text: "generate dynamic HTML content",
        decs: " HBS, EJS",   
        
      },
      {
        id: 7,
        icon: <GiChart />,
        title: "Familiar  ",
        text: "Basic language",
        decs: " C, C++, Java  ",  
       
        
      },
    ],

    review: [
      {
        id: 1,
        desc: ` It's an online platform for purchasing a variety of laptops . The backend was built on   Express.js, Node.js, with MongoDB following the MVC architecture.
        Handlebars (hbs) is used in front-end development for dynamically generating HTML on the server side.
        Payment platforms like Razorpay have been seamlessly integrated.   
        Nodemailer is utilized for OTP-based authentication.
        The platform is hosted on Amazon Web Services (AWS) with NGINX`,
        name: "CartWise",
        link: "Online platform",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0OpsCLto4sXJMMRg3o_x4Gfe3lwYQ5lwx1A&usqp=CAU",
        sourceCode:"https://github.com/Sreesankar-t/CartWase-ecommerce.git",
      },
      {
        id: 2,
        desc: `This platform is designed to streamline the process of finding and booking accommodations, saving you time and ensuring a comfortable stay.
        By utilizing the MVC architecture, this was  developed with React.js with ContextAPI for the frontend and Node.js for the backend. 
        Mongoose is employed for defining the schema. 
        Payment platforms like Stripe  have been seamlessly integrated.`,
        name: "WONDERINN",
        link: "Hotel booking web application",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3g5SfVO9v7LbzxWA_ym6crhwLQrGFqKZpKNnJrEAwqvFSIL_Dvo8R2b-2568Ss_rz19Y&usqp=CAU",
        sourceCode:"https://github.com/Sreesankar-t/BOOKING_app-MERN.git",
      },
      // {
      //   id: 3,
      //   desc: "They'll have to make the best of things its an uphill climb. Californ'y is the place you oughtto be So they loaded up the truck and moved to Beverly. Hills thatSwimmin' pools movie stars.Maybe you and me were never meant to be.",
      //   name: "Edward Johnson",
      //   link: "gorkcoder.com",
      //   cover: "./images/aut3.jpg",
      // },
    ],

    price: [
      {
        id: 1,
        icon: <MdOutlineLocalShipping />,
        title: "STARTER PACKAGE",
        desc: "Suitable for small business or Organizations.",
        pri: "27.00",
      },
      {
        id: 2,
        icon: <MdLocalShipping />,
        title: "BUSINESS PACKAGE",
        desc: "Suitable for small business or Organizations.",
        pri: "47.00",
      },
      {
        id: 3,
        icon: <FaShippingFast />,
        title: "PRO PACKAGE",
        desc: "Suitable for small business or Organizations.",
        pri: "97.00s",
      },
    ],
  },
]
