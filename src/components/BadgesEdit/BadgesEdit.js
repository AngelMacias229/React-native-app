import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Image,
    ActivityIndicator,
} from 'react-native'
import Colors from '../../res/Colors'
import Http from '../../libs/http'

class BadgesEdit extends React.Component{
    state={
        loading: false,
        badge: {},
        form: {},
    };

    //It makes a component out of the information of the badges.
    componentDidMount(){
        this.getBadge();
    }

    //This makes a request on the badges information.
    getBadge = () => {
        const {item} = this.props.route.params;
        this.setState({badge: item});
        this.props.navigation.setOptions({title: `${item.name}`});
    };

    //It uses the put method to send any change in the badge.
    handleSubmit = async () => {
        await Http.instance.put(this.state.badge._id, this.state.form);
        this.props.navigation.replace('Badges');
    };

    render(){

        const {badge, loading} = this.state;

        if(loading == true){
            return(
            <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator 
                    styles={styles.loader} 
                    color="#5C2389" 
                    size="large" 
                />
            </View>
            );
        }

        return(
            <ScrollView style={styles.container}>
                <View style={styles.content}>
                <Image 
                    style={styles.header} 
                    source={{uri: `${badge.header_img_url}`}} 
                /> 
                <Image 
                    style={styles.profileImage} 
                    source={{uri: `${badge.profile_picture_url}`}}
                />
                <View style={styles.form}>
                <Text style={styles.inputText}>Name</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder={`${badge.name}`} 
                    onChangeText={text =>{
                        this.setState(prevState => {
                            let form = Object.assign({},prevState.form);
                            form.name = text;
                            return {form};
                        } );
                    }} />
                <Text style={styles.inputText}>Age</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder={`${badge.age}`} 
                    onChangeText={text =>{
                        this.setState(prevState => {
                            let form = Object.assign({},prevState.form);
                            form.age = text;
                            return {form};
                        } );
                    }} />
                <Text style={styles.inputText}>City</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder={`${badge.city}`} 
                    onChangeText={text =>{
                        this.setState(prevState => {
                            let form = Object.assign({},prevState.form);
                            form.city = text;
                            return {form};
                        } );
                    }} />
                <Text style={styles.inputText}>Followers</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder={`${badge.followers}`} 
                    onChangeText={text =>{
                        this.setState(prevState => {
                            let form = Object.assign({},prevState.form);
                            form.followers = text;
                            return {form};
                        } );
                    }} />
                <Text style={styles.inputText}>Likes</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder={`${badge.likes}`} 
                    onChangeText={text =>{
                        this.setState(prevState => {
                            let form = Object.assign({},prevState.form);
                            form.likes = text;
                            return {form};
                        } );
                    }} />
                <Text style={styles.inputText}>Posts</Text>
                <TextInput 
                    style={styles.input} 
                    placeholder={`${badge.post}`} 
                    onChangeText={text =>{
                        this.setState(prevState => {
                            let form = Object.assign({},prevState.form);
                            form.post = text;
                            return {form};
                        } );
                    }} 
                    />
                    <TouchableOpacity style={styles.submit} onPress={this.handleSubmit}>
                        <Text style={styles.submitText}>Save</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.charade,
    },
    horizontal:{
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    content:{
        flex: 1,
        margin: 20,
        marginTop: 45,
        width:'90%',
        height:'auto',
        backgroundColor: Colors.white,
        borderRadius: 25,
    },
    form:{
        paddingHorizontal: 20,
    },
    header:{
        width: '100%',
        height: 200,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    profileImage:{
        width: 150,
        height: 150,
        resizeMode: 'cover',
        borderRadius: 75,
        borderWidth: 3,
        borderColor: Colors.white,
        position: 'absolute',
        top: 25,
        left: '28%',
    },
    input:{
        paddingVertical: 5,
        paddingHorizontal: 12,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: Colors.zircon,
    },
    inputText:{
        fontSize: 18,
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 10,
    },
    submit:{
        marginVertical: 30,
        width: '30%',
        borderWidth: 1,
        borderColor: Colors.zircon,
        borderRadius: 10,
        backgroundColor: Colors.charade,
    },
    submitText:{
        fontSize: 16,
        margin: 5,
        color: Colors.white,
        textAlign: 'center',
    },
});

export default BadgesEdit;