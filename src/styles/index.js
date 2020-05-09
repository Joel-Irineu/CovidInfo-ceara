import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: 0,
    backgroundColor: '#f7f7f7',
  },
  boxContainer:{
    paddingHorizontal: 12,
  },
  header:{
    backgroundColor: '#eee',
    
    marginBottom: 4,
    paddingTop: Constants.statusBarHeight + 10
  },
  logo:{
    width: 150,
    height: 60,
    alignSelf: 'center',
    marginBottom: 10,
    
  },
  title:{
    fontSize: 30,
    marginBottom: 10,
    marginTop: 10,
    color: '#de4d60',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  itemText:{
    fontSize: 16,
    marginTop: 10,
    color: '#262626',
    fontWeight: 'bold',
  },
  box:{
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    padding: 20,
    marginHorizontal: 5,
    marginBottom: 7.5,
    marginTop: 7.5,
    borderRadius: 5,
  },
  boxTitle:{
    fontSize: 32,
    fontWeight: '700',
    color: '#de4d60'
  },
  boxText:{
    fontSize: 16,
    fontWeight: '700',
    color: '#757575'
  },
  aboutTitle:{
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3267ff'
  },
  aboutText:{
    fontSize: 14,
    fontWeight: '700',
    color: '#757575',
    textAlign: "justify"
  }
})