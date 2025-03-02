import { View, Text, TextProps } from 'react-native'
import React, { FC, useState } from 'react'
import  Animated, { FadeIn, SlideInDown }  from 'react-native-reanimated'

type TruncatedTextProps = {
    text: string
    lines: number
} & TextProps

const TruncatedText: FC<TruncatedTextProps> = ({ text, lines, ...props }) => {

    const [expanded, setExpanded] = useState(false)

  return (
    <View>
      <Animated.Text {...props}
          numberOfLines={expanded ? undefined : lines}
          ellipsizeMode='tail'
      >{text}</Animated.Text>
      <Text
       className="text-blue-500 "
       style={{textAlign: expanded ? 'left' : 'right'}}
       onPress={() => setExpanded(!expanded)}>
            {expanded ? 'Show less' : 'Show more'}
      </Text>
    </View>
  )
}

export default TruncatedText