const Header = (props) => {
  return (
    <div className="header">
      <span>You: {props.counter.user} </span>
      <span>Computer: {props.counter.computer}</span>
      <span>Game:{props.counter.attempts}</span>
    </div>
  );
};
export default Header;
