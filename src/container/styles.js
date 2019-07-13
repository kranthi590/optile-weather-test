import { isMobile } from '../utils';

const deviceWidth = window.screen.availWidth;

export default (theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0
    },
    li: {
      listStyle: 'none'
    }
  },
  loader: {
    marginTop: isMobile(deviceWidth) ? '30%' : '20%',
    marginLeft: '40%'
  },
  content: {
    marginTop: '2%'
  },
  selectedCard: {
    borderStyle: 'solid',
    borderColor: '#33a0fc'
  },
  chart: {
    marginTop: '20px'
  },
  weatherCard: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2)
  }
});
