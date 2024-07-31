import { Dimensions } from 'react-native'
import HomeScreenView from './HomeScreenView'

const HomeScreenController = (): React.JSX.Element => {
    const screenDimensions = Dimensions.get('screen')

    return <HomeScreenView screenDimensions={screenDimensions} />
}

export default HomeScreenController
