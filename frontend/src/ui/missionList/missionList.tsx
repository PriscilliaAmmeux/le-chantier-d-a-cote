import "./missionList.css";

interface Mission {
  title: string;
  subtitle?: string;
  desc: string | string[];
  summary?: string;
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
      <h4 className="mission-list-title">Les différents types de missions</h4>
      {children && <p className=" line-height">{children}</p>}
      <ul className="margin-list">
        {missions.map((mission, idx) => (
          <li className=" line-height" key={idx}>
            <span className="font-bold">{mission.title}</span>
            {mission.subtitle && (
              <div className="mission-subtitle">{mission.subtitle}</div>
            )}
            {Array.isArray(mission.desc) ? (
              <ul className="mission-desc">
                {mission.desc.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            ) : (
              <span className="mission-desc">
                {mission.desc.startsWith(mission.title)
                  ? ` ${mission.desc.slice(mission.title.length)}`
                  : ` ${mission.desc}`}
              </span>
            )}
            {mission.summary && (
              <div className="mission-summary">{mission.summary}</div>
            )}
          </li>
        ))}
      </ul>
      {summary && (
        <div className="margin-bottom mission-summary ">
          {summary.map((text, idx) => (
            <p
              className={
                " line-height" +
                (idx === summary.length - 1 ? " green-space-summary-large" : "")
              }
              key={idx}>
              {text}
            </p>
          ))}
        </div>
      )}
    </section>
  );
}
