import React, { Component } from 'react'
import {useDidShow} from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { printCommon } from '../../common'
import { logRaw } from '@/utils/util'
import './index.scss'

// export default class Index extends Component {
//   componentDidShow() {
//     console.log('page show ===>')
//   }

//   componentDidMount () {
//     printCommon()
//     logRaw()
//   }

//   render () {
//     return (
//       <View className='index'>
//         {/* <title /> */}
//         <Text>Hello world!</Text>
//       </View>
//     )
//   }
// }

export default function Index () {
  useDidShow(() => {
    console.log('page show ====>')
  })

  return <Text>Hello world!</Text>
}
