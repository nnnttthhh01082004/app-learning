import * as React from 'react'

import styled from 'styled-components'
import { Text, View, Image, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
// import{createNatiStackNavigator}
import { faChevronLeft, faEllipsisVertical, faUserTie, faGear, faChevronRight, faCreditCard, faBell, faComment } from '@fortawesome/free-solid-svg-icons'
import LoginScreen from './Login'

const Page = styled(View)`
  padding: 40px 30px 0 30px;
`
const Heading = styled(Text)`
  text-align: center;
  font-size: 20px;
  margin-bottom: 16px;
  font-weight: bold;
`
const MyProfileScreen = ({navigation}: {navigation: any}) => {
    return (
        <>
            <Page style={{ height: 500 }}>
          
            
          title= {  <FontAwesomeIcon icon={faChevronLeft} style={{ position: 'absolute', top: 4 }} />}
          buttonStyle={{ backgroundColor: '#C0C0C0',width: 20, height: 30,padding: 20, borderRadius: 10,}}
          style={{ marginBottom: 30 }}
          onPress={() => navigation.navigate('LOGIN')}
        
          
      
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                   
                    <FontAwesomeIcon icon={faEllipsisVertical} style={{ position: 'absolute', top: 4, right: 1 }} />
                    <Text style={{ left: 122, fontWeight: '300', fontSize: 27, marginBottom: 140 }}>My Profile</Text>
                    
                </View>
                <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFeaukAHy9kPqCROJg9js4PrO3RJ8Bw8cegw&usqp=CAU' }} style={{ position: 'absolute', top: 110, padding: 55, left: 150, borderRadius: 50 }} />


                <View style={{ display: 'flex', flexDirection: 'column', top: 30 }}>
                    <Text style={{ textAlign: 'center', fontWeight: '800', fontSize: 35 }}>Thomas Newman</Text>
                    <Text style={{ textAlign: 'center', fontWeight: '100', fontSize: 18, marginBottom: 40 }}>Beginner</Text>
                </View>

                <View style={{ display: 'flex' ,  backgroundColor: 'white', margin: -30, top: 40, borderRadius: 35  }}>
                    <View style={{ display: 'flex', flexDirection: 'row', top: 40,  left: 30 }}>
                        <FontAwesomeIcon icon={faGear} style={{ position: 'absolute', top: 4 }} />
                        <FontAwesomeIcon icon={faChevronRight} style={{ position: 'absolute', top: 4, right: 65 }} />
                        <Text style={{ left: 35, fontWeight: '300', fontSize: 22, marginBottom: 140, bottom: 4 }}>Settings</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', top: -70, left: 30  }}>
                        <FontAwesomeIcon icon={faCreditCard} style={{ position: 'absolute', top: 4 }} />
                        <FontAwesomeIcon icon={faChevronRight} style={{ position: 'absolute', top: 4, right: 65 }} />
                        <Text style={{ left: 35, fontWeight: '300', fontSize: 22, marginBottom: 140, bottom: 4 }}>Payment</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', top: -180 , left: 30 }}>
                        <FontAwesomeIcon icon={faBell} style={{ position: 'absolute', top: 4 }} />
                        <FontAwesomeIcon icon={faChevronRight} style={{ position: 'absolute', top: 4, right: 65 }} />
                        <Text style={{ left: 35, fontWeight: '300', fontSize: 22, marginBottom: 140, bottom: 4 }}>Notifications</Text>
                    </View>

                    <View style={{ display: 'flex', flexDirection: 'row', top: -290, left: 30  }}>
                        <FontAwesomeIcon icon={faComment} style={{ position: 'absolute', top: 4 }} />
                        <FontAwesomeIcon icon={faChevronRight} style={{ position: 'absolute', top: 4, right: 65 }} />
                        <Text style={{ left: 35, fontWeight: '300', fontSize: 22, marginBottom: 140, bottom: 4 }}>Support</Text>
                    </View>


                    <Text style={{ color: 'green', top: -395, fontSize: 22, left: 60 }}> Sign out</Text>

                </View>
            </Page>
        </>
    )
}

export default MyProfileScreen
