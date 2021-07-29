import React, { useState, useEffect, useRef } from 'react';
import { Children } from 'react';
import {
    View,
    Text,
    Animated,
    ScrollView,
    TouchableWithoutFeedback,
    Modal,
    Platform
} from 'react-native';

import {
    IconButton,
    TwoPointSlider,
    TextButton,
    TextIconButton
} from "../../components";
import { COLORS, FONTS, SIZES, constants, icons } from "../../constants";

// const Section = ({ containerStyle, title, children }) => {
//     return (
//         <View
//             style={{
//                 marginTop: SIZES.padding,
//                 ...containerStyle
//             }}
//         >
//             <Text style={{ ...FONTS.h3 }}>{title}</Text>

//             {children}
//         </View>
//     )
// }

const FilterModal = ({ isVisible, onClose }) => {

    const [showFilterModal, setShowFilterModal] = useState(isVisible)
    const modalAnimatedValue = useRef(new Animated.Value(0)).current

    const modalY = modalAnimatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [SIZES.height, SIZES.height > 700 ? SIZES.height - 680 : SIZES.height - 580]
    })

    useEffect(() => {
        if (showFilterModal) {
            Animated.timing(modalAnimatedValue, {
                toValue: 1,
                duration: 300,
                useNativeDriver: false
            }).start();
        } else {
            Animated.timing(modalAnimatedValue, {
                toValue: 0,
                duration: 300,
                useNativeDriver: false
            }).start(() => onClose());
        }
    }, [showFilterModal])

    return(
        <Modal
            animationType='fade'
            transparent={true}
            visible={isVisible}
        >
            <View style={{
                flex : 1,
                backgroundColor : COLORS.transparentBlack7
            }}>
                {/* Transparent Background */}

                <TouchableWithoutFeedback
                    onPress={() => setShowFilterModal(false)}
                >
                    <View style={{
                        position : 'absolute',
                        top : 0,
                        bottom : 0,
                        left : 0,
                        right : 0
                    }} />
                </TouchableWithoutFeedback>

                <Animated.View
                    style={{
                        position: 'absolute',
                        left: 0,
                        top: modalY,
                        width: "100%",
                        height: "100%",
                        padding: SIZES.padding,
                        borderTopRightRadius: SIZES.padding,
                        borderTopLeftRadius: SIZES.padding,
                        backgroundColor: COLORS.white
                    }}
                >
                   
                </Animated.View>
            </View>
        </Modal>
    )
}

export default FilterModal