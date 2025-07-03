type Asp = {
  name: string;
  photo: string;
  presentation: string;
};

interface TeamAspProps {
  teamASP: Asp[];
}

export default function TeamASP({ teamASP }: TeamAspProps) {
  return (
    <div className="team-supervisors-list">
      {teamASP.map((asp, idx) => (
        <div
          className={`supervisor-row ${
            idx % 2 === 0 ? "left-photo" : "right-photo"
          }`}
          key={asp.name}>
          {idx % 2 === 0 ? (
            <>
              <img
                src={`/images/team/${asp.photo}`}
                alt={`Portrait de ${asp.name}`}
                aria-label={`Portrait de ${asp.name}`}
                className="supervisor-photo"
                loading="lazy"
                width={120}
                height={120}
              />
              <div className="supervisor-info">
                <div className="supervisor-name font-bold">{asp.name}</div>
                <div className="supervisor-presentation">
                  {asp.presentation}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="supervisor-info">
                <div className="supervisor-name font-bold">{asp.name}</div>
                <div className="supervisor-presentation">
                  {asp.presentation}
                </div>
              </div>
              <img
                src={`/images/team/${asp.photo}`}
                alt={`Portrait de ${asp.name}`}
                aria-label={`Portrait de ${asp.name}`}
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
