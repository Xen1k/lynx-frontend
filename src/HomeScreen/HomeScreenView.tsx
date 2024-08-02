import { Image, ScaledSize, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { commonStyles } from '../commonStyles'
import Icon from 'react-native-vector-icons/Ionicons'

interface IHomeScreenViewProps {
    screenDimensions: ScaledSize
}

const HomeScreenView: React.FC<IHomeScreenViewProps> = ({ screenDimensions }): React.JSX.Element => {
    return (
        <View style={commonStyles.pageContainer}>
            <View style={{ flex: 4, alignItems: 'center', width: '100%' }}>
                <Text style={commonStyles.pageHeader}>Мой дом</Text>
                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 3 }}>
                    <Image
                        style={{ width: screenDimensions.width / 2.8, height: screenDimensions.width / 2.8, marginBottom: 10 }}
                        source={require('../../images/lynx-850-transparent.png')}
                    />
                    <Text style={commonStyles.labelHeader}>Защита активирована</Text>
                </View>
                <View style={styles.modeSwitcher}>
                    <Icon name="lock-open-outline" size={23} color="#757575" />
                    <Icon name="home-outline" size={23} color="#757575" />
                    <Icon name="lock-closed-outline" size={23} color="#757575" />
                </View>
                <TouchableOpacity style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={commonStyles.labelLink}>Добавить новое устройство</Text>
                </TouchableOpacity>
            </View>
            <View style={[commonStyles.infoContainer, { flex: 3, width: '93%', marginBottom: '5%' }]}>
                <View style={[commonStyles.infoContainerHeaderView]}>
                    <Text style={commonStyles.labelHeader}>Последнее обнаружение</Text>
                    <TouchableOpacity>
                        <Text style={commonStyles.secondaryButtonText}>Смотреть все</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Icon name="person-outline" size={85} color="black" />
                </View>
                <View style={commonStyles.infoContainerFooterView}>
                    <Text style={commonStyles.defaultLabel}>Пока что лиц не обнаружено</Text>
                    <TouchableOpacity style={{ marginVertical: '4%' }}>
                        <Text style={[commonStyles.labelLink, { fontWeight: '500' }]}>Список камер</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    modeSwitcher: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: '3%',
        alignItems: 'center',
        backgroundColor: '#E1E1E1',
        height: 45,
        width: '80%',
        borderRadius: 100,
        marginTop: '5%',
    },
})

export default HomeScreenView
