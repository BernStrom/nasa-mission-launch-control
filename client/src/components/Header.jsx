import {
  Logo,
  Words,
  Header as ArwesHeader,
  Highlight,
  withStyles,
} from 'arwes';
import { Link } from 'react-router-dom';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    lineHeight: '80px',
  },
  logo: {
    display: 'inherit',
    marginTop: '15px',
  },
  nav: {
    display: 'inherit',
  },
  banner: {
    display: 'inherit',
    fontWeight: 'bold',
    marginLeft: '10px',
    marginRight: '15px',
    fontSize: 28,
  },
  clickable: {
    fontSize: 21,
    '& i': {
      marginRight: theme.padding / 2,
      fontSize: 24,
    },
  },
  link: {
    color: theme.color.content,
    textDecoration: 'none',
  },
  button: {
    padding: [0, theme.padding / 2],
  },
  '@media (max-width: 800px)': {
    logo: {
      display: 'none',
    },
    img: {
      display: 'none',
    },
    banner: {
      display: 'none',
    },
    button: {
      padding: [0, 8],
    },
    clickable: {
      fontSize: 16,
    },
  },
});

const Header = (props) => {
  return <ArwesHeader animate></ArwesHeader>
}

export default withStyles(styles)(Header);
