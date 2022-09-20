export default function Hello(props) {
  const name = props.name;

  return (
    <section className="hello">
      <h1>
        Bonjour <span>{name}</span>
      </h1>
      <p className="helloMessage">
        Félicitations ! Vous avez explosé vos objectifs hier 👏
      </p>
    </section>
  );
}
