import { withSounds } from 'arwes';

const Clickable = ({ children, sounds, onClick, ...rest }) => {
  const clickWithSound = (e) => {
    sounds.click && sounds.click.play();
    onClick && onClick(e);
  };

  return (
    <span {...rest} onClick={clickWithSound}>
      {children}
    </span>
  );
};

export default withSounds()(Clickable);
