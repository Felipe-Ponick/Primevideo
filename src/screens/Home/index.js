import { Image, StyleSheet, View } from "react-native";

import PrimeVideoLogo from "../../assets/prime_video.png";

export const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={PrimeVideoLogo} />
                <Image />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
    },
});