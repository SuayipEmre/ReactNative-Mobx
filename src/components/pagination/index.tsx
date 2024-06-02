import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { scrollTopHandler } from '../../helpers/scrolltopHandler';
import styles from './styles';

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    listRef: React.RefObject<FlatList<any>>
}


const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange, listRef }) => {


    const handlePreviousPage = () => {
        currentPage > 1 && onPageChange(currentPage - 1)
        scrollTopHandler(listRef)
    }


    const handleNextPage = () => {
        currentPage < totalPages && onPageChange(currentPage + 1)
        scrollTopHandler(listRef)
    }


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handlePreviousPage} disabled={currentPage === 1}>
                <Text style={[styles.active_text, styles.button, currentPage === 1 && styles.inactive_text]}>Previous</Text>
            </TouchableOpacity>
            <Text style={styles.pageInfo}>
                Page {currentPage} of {totalPages}
            </Text>
            <TouchableOpacity onPress={handleNextPage} disabled={currentPage === totalPages}>
                <Text style={[styles.active_text, styles.button, currentPage === totalPages && styles.inactive_text]}>Next</Text>
            </TouchableOpacity>
        </View>
    );
};


export default Pagination;
