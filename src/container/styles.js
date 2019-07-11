import { isMobile } from '../utils';

const deviceWidth = window.screen.availWidth;

export default (theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  loader: {
    marginLeft: '40%',
    marginTop: isMobile(deviceWidth) ? '50%' : '30%'
  }
}));
