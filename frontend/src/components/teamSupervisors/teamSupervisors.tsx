import "./teamSupervisors.css";

type Supervisor = {
  name: string;
  photo: string;
  presentation: string;
};

interface TeamSupervisorsProps {
  supervisors: Supervisor[];
}

export default function TeamSupervisors({ supervisors }: TeamSupervisorsProps) {
  return (
    <div className="team-supervisors-list">
      {supervisors.map((sup, idx) => (
        <div
          className={`supervisor-row ${
            idx % 2 === 0 ? "left-photo" : "right-photo"
          }`}
          key={sup.name}>
          {idx % 2 === 0 ? (
            <>
              <img
                src={`/images/team/${sup.photo}`}
                alt={`Portrait de ${sup.name}`}
                aria-label={`Portrait de ${sup.name}`}
                className="supervisor-photo"
                loading="lazy"
                width={120}
                height={120}
              />
              <div className="supervisor-info">
                <div className="supervisor-name font-bold">{sup.name}</div>
                <div className="supervisor-presentation">
                  {sup.presentation}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="supervisor-info">
                <div className="supervisor-name font-bold">{sup.name}</div>
                <div className="supervisor-presentation">
                  {sup.presentation}
                </div>
              </div>
              <img
                src={`/images/team/${sup.photo}`}
                alt={sup.name}
                className="supervisor-photo"
              />
            </>
          )}
        </div>
      ))}
    </div>
  );
}
