import { Modal, Text, View } from 'react-native'
import React from 'react'
import { User } from '../../types/UsersTypes'
import LocationIcon from '../../icons/LocationIcon'
import UserInformationItem from './informationItem'
import CompanyIcon from '../../icons/CompanyIcon'
import WebsiteIcon from '../../icons/WebsiteIcon'
import styles from './styles'

type UserInformationModalProps = {
    modalVisible: boolean,
    user: User
}
const UserInformationModal: React.FC<UserInformationModalProps> = ({ modalVisible, user }) => {

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.modalView}>
                    <View style={styles.content}>
                        <Text style={styles.user_name}>{user.name}</Text>
                        <UserInformationItem icon={<LocationIcon />} title='Konum' subText={`${user.address.street} / ${user.address.city}`} />
                        <UserInformationItem icon={<CompanyIcon />} title='Firma' subText={user.company.name} />
                        <UserInformationItem icon={<WebsiteIcon />} title='Website' subText={`${user.website}`} />
                    </View>

                </View>
            </Modal>

        </View>
    );
}

export default UserInformationModal
