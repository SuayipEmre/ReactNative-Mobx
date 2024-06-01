import { ActivityIndicator, Modal, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { User } from '../../types/UsersTypes'
import LocationIcon from '../../icons/LocationIcon'
import UserInformationItem from './informationItem'
import CompanyIcon from '../../icons/CompanyIcon'
import WebsiteIcon from '../../icons/WebsiteIcon'
import styles from './styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
import favoriteUsersStore from '../../store/FavoriteUsers'
import { observer } from 'mobx-react'
import HeartIcon from '../../icons/HeartIcon'

type UserInformationModalProps = {
    modalVisible: boolean,
    setModalVisible : (value : boolean) => void
    user: User
}
const UserInformationModal: React.FC<UserInformationModalProps> = observer(({ modalVisible, user, setModalVisible }) => {

    const [isAlreadyInFavorites, setIsAlreadyInFavorites] = useState(false)

    const handleAddUserToFavorites = async () => {
        await favoriteUsersStore.addFavoriteUser(user)
        setModalVisible
    }

    useEffect(() => {
        const isFavorites = favoriteUsersStore.favoriteUsers.some(item => item.id == user.id)
        setIsAlreadyInFavorites(isFavorites)
    }, [])
    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.modalView}>
                    <View style={styles.content}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <Text style={styles.user_name}>{user.name}</Text>
                            {
                                isAlreadyInFavorites ? <View style={{flexDirection:'row', alignItems:'center', gap:6,}}>
                                    <Text> Remove from </Text>
                                    <HeartIcon />
                                </View> : <TouchableOpacity onPress={handleAddUserToFavorites}>
                                   <HeartIcon />
                                </TouchableOpacity>
                            }

                            {
                                favoriteUsersStore.loading && <ActivityIndicator />
                            }

                        </View>
                        <UserInformationItem icon={<LocationIcon />} title='Konum' subText={`${user.address.street} / ${user.address.city}`} />
                        <UserInformationItem icon={<CompanyIcon />} title='Firma' subText={user.company.name} />
                        <UserInformationItem icon={<WebsiteIcon />} title='Website' subText={`${user.website}`} />
                    </View>

                </View>
            </Modal>

        </View>
    );
})

export default UserInformationModal
