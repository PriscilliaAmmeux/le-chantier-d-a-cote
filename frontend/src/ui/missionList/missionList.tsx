import "./missionList.css";

interface Mission {
  title: string;
  desc: string;

}

interface MissionsListProps {
  missions: Mission[];
  summary?: string[];
  children?: React.ReactNode;
  
}

export default function MissionsList({
  missions,
  summary,
  children,
}: MissionsListProps) {
  return (
    <section>
      <h4>Les différents types de missions </h4>
      <p className="text-align-justify line-height">{children}</p>
      <ul className="margin-list">
        {missions.map((mission, idx) => (
          <li className="text-align-justify line-height" key={idx}>
            <span className="font-bold">{mission.title}</span>
            {mission.desc.startsWith(mission.title)
              ? ` ${mission.desc.slice(mission.title.length)}`
              : ` ${mission.desc}`}
          </li>
        ))}
      </ul>
      {summary && (
        <div className="margin-bottom">
          {summary.map((text, idx) => (
            <p
              className={
                "text-align-justify line-height" +
                (idx === summary.length - 1 ? " green-space-summary-large" : "")
              }
              key={idx}
              dangerouslySetInnerHTML={{ __html: text }}
            />
          ))}
        </div>
      )}
    </section>
  );
}
