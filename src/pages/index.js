import React from "react";
import Project from "../components/Project";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const index = () => {
  return (
    <Layout>
      <header className="flex items-center mt-12 space-x-4 justify-between">
        <div className="flex-shrink">
          <h1 className="text-3xl sm:text-4xl font-bold whitespace-nowrap">
            Max Monciardini 👨‍💻
          </h1>
          <h3 className="text-sm sm:text-base text-gray-600 font-medium mt-2">
            Aspiring Full-Stack Web Developer focused on Typescript, React,
            Node.js & PostgreSQL
          </h3>
        </div>
        <div className="flex items-center justify-end">
          <StaticImage
            className="w-20 sm:w-24 rounded"
            src="../images/me.jpg"
            alt=""
          />
        </div>
      </header>
      <article>
        <section className="mt-8">
          <h2 className="title">Projects</h2>
          <div className="flex sm:flex-row flex-col mt-4 space-y-3 sm:space-y-0 space-x-0 sm:space-x-3">
            <Project
              backgroundColor="#353535"
              title="Central Valley Engineering & Asphalt, Inc."
              link="https://cenvalley.com"
              githubLink="https://github.com/maxmonciardini/cenvalley-client"
              logo={
                <StaticImage
                  className="w-1/3"
                  src="../images/CVEA.svg"
                  alt=""
                />
              }
              description="This website was designed to improve the online presence of
                    Central Valley Engineering & Asphalt, Inc. and give their
                    online clients a more optimized and user-friendly way to get
                    the information they need to make an informed decision about
                    their asphalt needs."
              badges={[
                {
                  title: "React",
                  color: "gray"
                },
                {
                  title: "Node.js",
                  color: "green"
                },
                {
                  title: "GatsbySSG",
                  color: "purple"
                },
                {
                  title: "TailwindCSS",
                  color: "yellow"
                },
                {
                  title: "Framer Motion",
                  color: "red"
                }
              ]}
            />
            <Project
              backgroundColor="#254D5C"
              title="Rocklin Performing Arts and Cultural Center"
              link="https://rocklinpacc.org"
              githubLink="https://github.com/maxmonciardini/rocklinpacc.org"
              logo={
                <StaticImage
                  className="w-1/2"
                  src="../images/RPACC.svg"
                  alt=""
                />
              }
              description="The Rocklin Performing Arts and Cultural Center is a project
                proposed by Roger S. Peterson to provide a relaxing venue
                for the citizens of Rocklin to enjoy all of their cultural
                interests. With the help of my team, I created this website
                to give Mr. Peterson a means of proposing his idea to the
                Rocklin city board and ultimately the people of the city of
                Rocklin."
              badges={[
                {
                  title: "Wordpress",
                  color: "blue"
                },
                {
                  title: "Divi Builder",
                  color: "pink"
                }
              ]}
            />
          </div>
        </section>
        <section className="mt-8">
          <h2 className="title">Contact Me</h2>
          <div className="text-lg text-gray-600">
            If you are interested in working with me please email me at{" "}
            <a className="text-black font-bold" href="mailto:max@mxmnci.com">
              max@mxmnci.com
            </a>
          </div>
        </section>
      </article>
    </Layout>
  );
};

export default index;
