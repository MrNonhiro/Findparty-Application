import {
    Modal,
    Dimensions,
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    ViewPropTypes,
    TouchableWithoutFeedback,
    FlatList
} from 'react-native'
import React from 'react'

const deviceHeight = Dimensions.get("window").height
export class ButtonPopup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }

    show = () => {
        this.setState({ show: true })
    }

    close = () => {
        this.setState({ show: false })
    }

    renderOutsideTouchable(onTouch) {
        const view = <View style={{ flex: 1, width: '100%' }} />
        if (!onTouch) return view
        return (
            <TouchableWithoutFeedback onPress={onTouch} style={{ flex: 1, width: '100%' }}>
                {view}
            </TouchableWithoutFeedback>
        )
    }

    renderContent = () => {
        const {data} = this.props
        return (
            <View>
                <FlatList
                    style={{ marginBottom: 20 }}
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={this.renderItem}
                    extraData={data}
                    keyExtractor={(item, index) => index.toString}
                    ItemSeparatorComponent={this.rednderSeparator}
                    contectContainerStyle={{
                        paddingBottom: 40
                    }}
                />
            </View>
        )
    }

    renderItem = ({item}) => {
        return (
            <View>
                <Text> {item.name} </Text>
            </View>
        )
    }

    renderTitle = () => {
        const { title } = this.props
        return (
            <View>
                <Text style={{
                    color: '#182E44',
                    fontSize: 20,
                    fontWeight: '500',
                    margin: 15
                }}>
                    {title}
                </Text>
            </View>
        )
    }

    rednderSeparator = ()=> {
        <View style={{
            opacity: 0.1,
            backgroundColor: '#182E44',
            height: 1
        }}>

        </View>
    }

    render() {
        let { show } = this.state
        const { onTouchOutside, title } = this.props

        return (
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={show}
                onRequestClose={this.close}
            >

                <View style={{
                    flex: 1,
                    backgroundColor: '#000000AA',
                    justifyContent: 'flex-end'
                }}>
                    {this.renderOutsideTouchable(onTouchOutside)}
                    <View style={{
                        backgroundColor: '#FFFFFF',
                        width: '100%',
                        borderTopRightRadius: 10,
                        borderTopLeftRadius: 10,
                        paddingHorizontal: 10,
                        maxHeight: deviceHeight * 0.4
                    }}>

                        {this.renderTitle()}
                        {this.renderContent()}
                    </View>

                </View>

            </Modal>
        )
    }
}