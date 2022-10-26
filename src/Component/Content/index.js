import "./Content.css"
import Card from "../Card/Card"

export default function Content() {
  return (
    <div className="Content">
      <Card
        titulo="High five, Hyperlink!"
        img="img/hyperlink.webp"
        alt="Hyperlink"
      />
      <Card
        titulo="Sorry, bro."
        img="img/sorry_bro.webp"
        alt="Sorry, bro."

      />
      
    </div>
  );
}