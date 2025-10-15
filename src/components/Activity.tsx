import { JSX } from "react";
import specialskill from "../assets/specialskill.jpg"
import logowisesa from "../assets/logo-wisesac.jpg"
import instagram from "../assets/instagramlogo.jfif"

interface ActivityItemProps {
  imageSrc: string;
  title: string;
  description: string | JSX.Element;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ imageSrc, title, description }) => (
  <li className="relative flex items-start gap-4 pb-10">
    <div className="relative flex flex-col items-center w-1/3">
      <img src={imageSrc} alt={title} className="w-16 h-16 object-cover rounded-full z-10" />
      <div className="w-px flex-1 mt-2" />
    </div>
    <div className="w-2/3 pl-3">
      <h3 className="text-md nunito-sans font-bold text-slate-100">{title}</h3>
      <p className="text-slate-300 mt-2 max-w-lg text-sm nunito-sans font-medium">{description}</p>
    </div>
  </li>
);

const Activity: React.FC = () => {
  const activities = [
    {
          imageSrc: instagram,
          title: "Design and Fotography",
          description: (
          <>
            Posting My Designs and Photography Results.{" "}
            <a
              href="https://www.instagram.com/dannyerfl/"
              className="text-blue-300 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Let's Check.
            </a>
          </>
        ),
    },
    {
      imageSrc: specialskill,
      title: "Intensive Camp Graphic Design",
      description: "Graphic Design: Basic Graphic Design, Coloring and Typography. Mentored directly with real projects.",
    },
    {
      imageSrc: specialskill,
      title: "Intensive Camp UI/UX Design",
      description: "UI/UX Design: Introduction to UI/UX Design, UX Writing, and Responsive Design. Hands-on mentoring with real projects.",
    },
    {
      imageSrc: specialskill,
      title: "Bootcamp Graphic Design With Figma",
      description: "Learn Graphic Design Fundamental, Layouting, Design System, Coloring, Typography, Plugin in Figma and real projects.",
    },
    {
      imageSrc: logowisesa,
      title: "Internship PT. Wisesa Consulting Indonesia",
      description: "As DCT Support, Assisting Users if There are Problems with the Software(DCT).",
    },
    {
      imageSrc: logowisesa,
      title: "Internship PT. Wisesa Consulting Indonesia",
      description: "As Business Development, Handle Bugs, Analyze Errors, and Ensure that Applications Run Normally.",
    },
  ];

  return (
    <section className="rounded-2xl shadow-lg pb-20">
      <h2 className="nunito-sans font-bold uppercase tracking-widest pb-10">Activity</h2>
      <ul className="relative">
        {activities.map((activity, index) => (
          <ActivityItem
            key={index}
            imageSrc={activity.imageSrc}
            title={activity.title}
            description={activity.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Activity;
