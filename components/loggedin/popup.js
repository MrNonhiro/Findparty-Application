import {
    Modal,
    Dimensions,
    TouchableOpacity,
    StyleSheet,
    View,
    Text
} from 'react-native'
import React from 'react'

export class popup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false;
        }
    }

    show = () => {
        this.setState({ show: true })
    }

    close = () => {
        this.setState({ show: false })
    }

    render() {
        let { show } = this.state

        return (
            <Modal
                animationType={'fade'}
                transparent={true}
                visible={true}
                onRequestClose={this.close}
            >
            </Modal>
        )
    }
}