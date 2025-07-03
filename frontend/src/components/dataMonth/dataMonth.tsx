import Subtitle from "../../ui/subtitle/subtitle";
import "./dataMonth.css";

type Month = "mai" | "juin";

const dataByMonth: Record<Month, { subtitle: string; value: number }[]> = {
  mai: [
    { subtitle: "Salariés au chantier", value: 200 },
    { subtitle: "Missions", value: 400 },
    { subtitle: "Heures travaillées", value: 1000 },
  ],
  juin: [
    { subtitle: "Salariés au chantier", value: 220 },
    { subtitle: "Missions", value: 380 },
    { subtitle: "Heures travaillées", value: 950 },
  ],
};

interface DataMonthProps {
  month?: Month;
}

export default function DataMonth({ month = "juin" }: DataMonthProps) {
  const stats = dataByMonth[month];

  return (
    <section className="data-section">
      <h3 className="title-data-month font-bold">Au mois de {month}</h3>
      <div className="data-grid">
        {stats.map((item, index) => (
          <div className="data-block" key={index}>
            <Subtitle subtitle={item.subtitle} />
            <p className="data-value font-bold">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
