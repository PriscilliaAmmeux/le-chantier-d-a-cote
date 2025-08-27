import "./adress.css";

export default function Adress() {
  return (
    <section className="adress-section">
      <h2 className="adress-title">Où nous trouver&nbsp;?</h2>
      <div className="adress-block">
        <p className="adress-line">
          12 route de l'ancien séminaire 16370 Val-de-Cognac
        </p>
        <p className="adress-contact">
          <span>☎️ 05 45 32 06 09</span>
          <span>📱 06 23 42 64 70</span>
        </p>
        <p className="adress-hours-title">Nous sommes ouverts&nbsp;:</p>
        <ul className="adress-hours">
          <li>
            Lundi, mardi, jeudi, vendredi : <b>08:00 - 17:00</b>
          </li>
          <li>
            Mercredi : <b>08:00 - 16:00</b>
          </li>
          <li>
            Samedi et dimanche : <b>Fermé</b>
          </li>
        </ul>
      </div>
    </section>
  );
}
