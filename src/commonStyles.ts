import { StyleSheet } from 'react-native'

export const shadow = {
    elevation: 4,
    shadowColor: 'rgba(0,0,0,0.5)',
}

export const commonStyles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F3F3F3',
    },
    labelHeader: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 21,
    },
    labelLink: {
        color: '#1935C9',
        fontWeight: '800',
        fontSize: 17,
    },
    pageHeader: {
        color: 'black',
        fontSize: 20,
        fontWeight: '500',
    },
    defaultLabel: {
        color: 'black',
        fontSize: 19,
        fontWeight: '500',
    },
    infoContainer: {
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
        borderRadius: 20,
        alignItems: 'center',
        ...shadow,
    },
    infoContainerHeaderView: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '91%',
        marginTop: '4%',
    },
    infoContainerFooterView: {
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '91%',
    },
    secondaryButtonText: {
        color: '#7D7D7D',
        fontSize: 17,
    },
})
