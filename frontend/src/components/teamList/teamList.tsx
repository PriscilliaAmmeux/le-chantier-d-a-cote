import "./teamList.css";

type TeamMember = {
  name: string;
  role: string;
  photo: string;
  presentation: string;
};

interface TeamListProps {
  members: TeamMember[];
}

export default function TeamList({ members }: TeamListProps) {
  return (
    <div className="team-supervisors-grid">
      {members.map((member) => (
        <div className="supervisor-card" key={member.name}>
          <img
            src={member.photo}
            alt={`Portrait de ${member.name}`}
            className="supervisor-photo"
            loading="lazy"
            width={120}
            height={120}
          />
          <div className="supervisor-info">
            <div className="supervisor-name font-bold">{member.name}</div>
            <div className="supervisor-role">{member.role}</div>
            <div className="supervisor-presentation">{member.presentation}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
