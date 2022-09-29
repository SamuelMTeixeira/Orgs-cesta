import { SafeAreaView, StatusBar, View } from 'react-native';
import Cesta from './src/components/Cesta';
import {
  useFonts, Montserrat_400Regular,
  Montserrat_700Bold,
  Montserrat_400Regular_Italic
} from '@expo-google-fonts/montserrat';
import { itens } from './src/data/itensCesta'

export default function App() {
  const [fontsLoaded] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
    "MontserratItalico": Montserrat_400Regular_Italic,
  });

  if (!fontsLoaded) {
    return <View />;
  }

  return (
    <SafeAreaView>
      <Cesta title={'Itens da cesta'} itens={itens}/>
      <StatusBar />
    </SafeAreaView>
  );
}
