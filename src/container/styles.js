import { isMobile } from '../utils';

const deviceWidth = window.screen.availWidth;

export default theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    },
    ul: {
      margin: 0,
      padding: 0
    },
    li: {
      listStyle: 'none'
    }
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: 'wrap'
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5)
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6)
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200]
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2)
  },
  icon: {
    marginRight: theme.spacing(2)
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
  }
});
