import React from 'react';
import MyHeader from '../MyHeader/MyHeader';
import { Container, Button, Text, View } from 'native-base';
export default class Counter extends React.Component {

    static navigationOptions = {
        header: null,
    };

    state = { counter: 0 };
    render() {
        return (
            <Container style={{ backgroundColor: 'lightgreen' }}>
                <MyHeader title="rosary" />
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ margin: 100, borderBottomWidth: 5, width: 200, textAlign: "center", fontSize: 50 }}>{this.state.counter}</Text>

                    <View style={{ flexDirection: 'row', margin: 25 }}>
                        <Button style={{ marginRight: 25 }} rounded onPress={() => this.setState({
                            counter: ++this.state.counter
                        })}>
                            <Text style={{ textAlign: "center", fontSize: 30 }}>Click</Text>
                        </Button>

                        <Button rounded onPress={() => this.setState({
                            counter: 0
                        })}>
                            <Text style={{ textAlign: "center", fontSize: 30 }}>Reset</Text>
                        </Button>
                    </View>
                    <Button rounded onPress={() => this.props.navigation.navigate('About')} ><Text>Go to About</Text></Button>
                </View>
            </Container>
        );
    }


}