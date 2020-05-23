import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#ddd'
  },
  formContainer: {
    flex: 1,
    padding: '1rem'
  },
  headerText: {
    color: 'black',
    fontWeight: '700',
    alignSelf: "center",
    fontSize: '1.5rem',
    paddingBottom: '2rem'
  },
  cardView: {
    padding: '0.5rem',
    margin: '0.5rem'
  },
  icon: {
    margin: '0.5rem',
    fontSize: '1.7rem',
    color: 'black'
  },
  button: {
    justifyContent: "center",
    alignSelf: 'center',
    width: '8rem',
    height: '2.5rem',
    marginTop: '1rem',
  },
  buttonText: {
    color: '#fff',
    alignSelf: "center",
    fontSize:'1rem'
  },
  linkText: {
    color: 'green',
    alignSelf: "center",
    fontSize: '1.2rem'
  },
  linkTextButton: {
    padding: '0.7rem',
    color: 'green',
    alignSelf: "center",
    fontSize: '1.2rem'
  },
});

export default styles;