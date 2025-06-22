import { JSX } from "react";
import logods from "../assets/LOGO BG BLACK.png"

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
      imageSrc: logods,
      title: "Dark Side",
      description: (
      <>
        Logo For my Discord Server.{" "}
        <a
          href="https://discord.gg/9PkTGkfVAf"
          className="text-blue-300 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's Join
        </a>
      </>
    ),
    },
  ];

  return (
    <section className="rounded-2xl shadow-lg pb-20">
      <h2 className="nunito-sans font-bold uppercase tracking-widest pb-10">LOGO PROJECT</h2>
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