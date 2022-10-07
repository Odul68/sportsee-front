import PropTypes from "prop-types";

/**
 * Welcome message
 * @param {string} props - User name
 * @returns component with personalized welcoming message
 */
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

Hello.propTypes = {
  props: PropTypes.string,
};
