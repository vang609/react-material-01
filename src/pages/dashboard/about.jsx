import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Button,
} from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export function About() {
  // const [showAlerts, setShowAlerts] = React.useState({
  //   blue: true,
  //   green: true,
  //   orange: true,
  //   red: true,
  // });
  // const [showAlertsWithIcon, setShowAlertsWithIcon] = React.useState({
  //   blue: true,
  //   green: true,
  //   orange: true,
  //   red: true,
  // });
  // const alerts = ["gray", "green", "orange", "red"];

  return (
    <>
    {/* <div className="mx-auto my-20 flex max-w-screen-lg flex-col gap-8"> */}
    

      {/* <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl  bg-cover	bg-center">
        <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
      </div> */}
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl  bg-cover	bg-center">
        {/* <div className="absolute inset-0 h-full w-full bg-gray-900/75" /> */}
      </div>
      <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100 ">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="p-4">
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          startups
        </Typography>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Lyft launching cross-platform service this week
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          Like so many organizations these days, Autodesk is a company in
          transition. It was until recently a traditional boxed software company
          selling licenses. Yet its own business model disruption is only part
          of the story
        </Typography>
        <a href="#" className="inline-block">
          <Button variant="text" className="flex items-center gap-2">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardBody>
    </Card>

    
    {/* </div> */}
    </>
  );
}

export default About;


