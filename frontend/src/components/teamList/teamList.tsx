import "./teamList.css";

type TeamMember = {
  name: string;
  photo: string;
  presentation: string;
};

interface TeamListProps {
  members: TeamMember[];
}

export default function TeamList({ members }: TeamListProps) {
  return (
    <div className="team-supervisors-list">
      {members.map((member, idx) => (
        <div
          className={`supervisor-row ${
            idx % 2 === 0 ? "left-photo" : "right-photo"
          }`}
          key={member.name}>
          {idx % 2 === 0 ? (
            <>
              <img
                src={member.photo}
                alt={`Portrait de ${member.name}`}
                aria-label={`Portrait de ${member.name}`}
                className="supervisor-photo"
                loading="lazy"
                width={120}
                height={120}
              />
              <div className="supervisor-info">
                <div className="supervisor-name font-bold">{member.name}</div>
                <div className="supervisor-presentation">
                  {member.presentation}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="supervisor-info">
                <div className="supervisor-name font-bold">{member.name}</div>
                <div className="supervisor-presentation">
                  {member.presentation}
                </div>
              </div>
              <img
                src={`${member.photo}`}
                alt={`Portrait de ${member.name}`}
                aria-label={`Portrait de ${member.name}`}
                className="supervisor-photo"
                loading="lazy"
                width={120}
                height={120}
              />
            </>
          )}
        </div>
      ))}
    </div>
  );
}
