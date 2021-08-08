import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    ImageBackground, 
    TouchableOpacity, 
    StatusBar,
 } from 'react-native'
import Colors from '../../res/Colors'
    const imageBackground = {
        uri: 'https://i.pinimg.com/originals/3d/d7/6c/3dd76cd650b0040498a7923d79c5e8c6.jpg',
    };

    class BadgeLanding extends React.Component{

        //Whwn activated it replaces the view with the tab navigator.
        handlePress = () => {
            this.props.navigation.replace('BadgesTabnavigator');
        };


        render(){
            return(
                <View style={styles.container}>
                    <StatusBar backgroundColor="transparent" translucent={true} />
                    <ImageBackground source={imageBackground} style={styles.image}>
                        <View style={styles.layerColor}>
                            <Text style={styles.title}>
                                Welcome {'\n'}to my{'\n'}App
                            </Text>
                            <TouchableOpacity style={styles.button} onPress={this.handlePress}>
                                <Text style={styles.buttonText}>Welcome</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
            );
        }
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
        },
        layerColor: {
            flex: 2,
            backgroundColor: '#04593A80',
            justifyContent: 'center',
            alignItems: 'center',
        },
        image: {
            flex: 1,
            resizeMode: 'cover',
            justifyContent: 'center',
        },
        title: {
            margin: 30,
            fontSize: 80,
            fontWeight: 'bold',
            color: Colors.white,
        },
        button: {
            padding: 15,
            marginTop: 50,
            borderRadius: 15,
            backgroundColor: '#121212cc',
            borderColor: Colors.white,
            borderWidth: 1,
        },
        buttonText: {
            textAlign: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            paddingHorizontal: 25,
            color: Colors.white,
        },
    });

    export default BadgeLanding;