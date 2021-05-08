import { Footer as ArwesFooter, Paragraph } from 'arwes';
import Centered from './Centered';

const Footer = () => {
  return (
    <ArwesFooter animate>
      <Centered>
        <Paragraph
          style={{ fontSize: 14, margin: '10px 0', textAlign: 'center' }}
        >
          This is not an official site nor it is affiliated with NASA or SpaceX
          and any of its subsidiaries in any way.
        </Paragraph>
      </Centered>
    </ArwesFooter>
  );
};

export default Footer;
