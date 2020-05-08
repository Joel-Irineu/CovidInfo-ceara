import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: Constants.statusBarHeight + 20,
    backgroundColor: '#f7f7f7',
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
  }
})