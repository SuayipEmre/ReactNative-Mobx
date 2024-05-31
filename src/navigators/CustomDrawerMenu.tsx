import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomSvgComponent from '../icons/TodosIcon'
import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer'
import PostsIcon from '../icons/PostsIcon'
import TodosIcon from '../icons/TodosIcon'
import CustomDrawerItem from './CustomDrawerItem'


type CustomDrawerMenuPropsTypes = {
  focused: string,
  props: DrawerContentComponentProps
}
const CustomDrawerMenu: React.FC<CustomDrawerMenuPropsTypes> = ({ focused, props }) => {
  return (
    <DrawerContentScrollView  {...props} contentContainerStyle={styles.container} >


      <View>
        <View style={styles.top_content}>
          <Image source={{ uri: 'https://s3-alpha-sig.figma.com/img/2aab/a56e/39455b09b07e0b2e14fdeb45a9224d4c?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lx-qxdo0-RVtDs7dVl92ptvecTxzuRWjZ-amT2xlJ4H3Kv7n5-1WCwbYD1E1PvYpGfVx-Q42XlJTzPp5y6DE7uVlVBa89VjjTac4pYM5qlkdKiJ2xCgI8rDLJdxaQfnmUr-l0DA7Wn6djjawhVcLfaNNEjkErV8~Zdmk8AKJ9Mdm55~DNoN3rYIdRhGdHEkCvKrEetqRYBz~8ubTcIYPp~~XQ7~RDOxEOb4Px8m~Ii22VUFciFTMTI6EJ6Wrlea50nL9VkydXszf0TFuG4WKYhWYWX4pvLsoSXUDgMEjz4c7m7PgCr3EOUxuN3xYAXR909he1iEH0KDUBmf2iDRQGg__' }} style={styles.user_photo} />
          <View>
            <Text>Jhon Doe</Text>
            <Text>jhon@lorem.com</Text>
          </View>
        </View>


        <CustomDrawerItem
          {...props}
          isFocused={focused === 'TodosScreen'}
          label='Görevler'
          icon={<TodosIcon />}
          onPress={() => props.navigation.navigate('TodosScreen')}
        />



        <CustomDrawerItem
          {...props}
          isFocused={focused === 'PostsScreen'}
          label='Gönderiler'
          icon={<PostsIcon />}
          onPress={() => props.navigation.navigate('PostsScreen')}
        />


        <CustomDrawerItem
          {...props}
          isFocused={focused === 'UsersScreen'}
          label='Kullanıcılar'
          icon={<CustomSvgComponent />}
          onPress={() => props.navigation.navigate('UsersScreen')}
        />


      </View>

      <View style={styles.logo_container}>
        <Image source={{ uri: 'https://s3-alpha-sig.figma.com/img/456d/7db5/e693290dc5d16a99329a298385ce5cc8?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iTHGXDudgn8p6d3IhHHgF22w1iH32A9YIp9f4piDd~b6FfOs6rCRXlMa17Vf8CaoZDIs-xrKOgAVmlJTW8nJTqnMGHfA0ng3LZtzuZFD9uQJBK55D1cKYGxr~fO~HBPheBAUscMoffHW42g84xw6CfF7qpeIMmmkBV8nHFPbFQEdfmBC7cQuVgpgqosDGQGnkz-C6~qwbH6jH8U0SnMfEZJgSjr7spnvTNE7m-3mBQaV-VjJr1tQN7o6c76C~o8g~cZXFUghkqiHtJSoeeGkugM5uaNFy-42UdK1~X3TTIlBoR7yE9ObqXx1xrP6oCtFup~ysScevVTTWWlJjRWgZQ__' }} style={styles.n2_logo} />
        <Text style={styles.company}>2024 All Right Reserved N2Mobil</Text>
      </View>


    </DrawerContentScrollView>
  )
}

export default CustomDrawerMenu


export const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'space-between', paddingBottom: 50, },
  top_content: {
    width: 228,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#D8D9DD',
    marginLeft: 36,
    paddingVertical: 12,
    marginBottom: 12,
  },
  user_photo: { borderRadius: 1000, width: 68, height: 68 },

  logo_container: { marginLeft: 20, gap: 8, },

  n2_logo: {
    width: 147,
    height: 40
  },
  company: {
    fontWeight: 500,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.5,
    color: '#485B69'


  },


})



