import React from "react";
import { SafeAreaView, View} from 'react-native'

const ScreenTemplate = ({footer,children}) => {
  return (
    <SafeAreaView style={{padding:0,margin:0}}>
      {children}
      {footer}
    </SafeAreaView>
  )
}
export default ScreenTemplate