import { isMobile } from '../utils';

const deviceWidth = window.screen.availWidth;

export default (theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    marginTop: isMobile(deviceWidth) ? '50%' : '10%'
  },
  loader: {
    marginLeft: '40%'
  }
}));
