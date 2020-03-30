import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ddd'
  },
  pickerContainer: {
    flex: 1,
    margin: 30
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: .5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10
  },
  picker: {
    color: '#000',
    textAlign: 'right'
  },
  headerText: {
    color: 'black',
    fontWeight: 'bold',
    alignSelf: "center",
    fontSize: 20,
    paddingBottom: 20
  },
  cardView: {
    padding: 5,
    margin: 3
  },
  ImageStyle: {
    margin: 2,
    fontSize: 30,
    color: 'black'
  },
  button: {
    justifyContent: "center",
    alignSelf: 'center',
    width: (width - 150),
    height: (height / 15),
    marginTop: (height / 40),
  },
  buttonText: {
    color: '#fff',
    alignSelf: "center",
    fontSize: 20
  },
  link: {
    marginTop: (height / 35),
    justifyContent: "center",
    width: (width - 80),
    height: (height / 12),
    borderWidth: 2,
    borderRadius: 1,
    borderColor: 'green',
  },
  linkText: {
    color: 'green',
    alignSelf: "center",
    fontSize: 20
  },
  linkTextButton: {
    padding: 10,
    color: 'green',
    alignSelf: "center",
    fontSize: 20
  },
});
