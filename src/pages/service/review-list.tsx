import React, {memo, useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {AppointmentRating} from '../../domain/entities/appointment';
import {ListProps} from '../../models/list';
import {IdType} from '../../shared/store/types';
import {CommonText} from '../../shared/components/general/texts';
import {CustomImage} from '../../shared/components/general/image';
import RatingView from '../../shared/components/rating/rating-view';
import styled from 'styled-components/native';
import {
    pageBackgroundColor,
    pagePaddingHorizontal,
} from '../../shared/components/general/page/styles';
import {colorLabel, robotoLight} from '../../shared/styles/global-styles';

function keyExtractor(item: AppointmentRating): IdType {
    return item.id;
}

const ReviewContainer = styled.View`
    background-color: white;
    border-radius: 10px;
    margin: 5px 0 10px;
    padding: 14px 14px 20px;
`;

const ReviewInfo = styled.View`
    flex: 1;
    margin-left: 15px;
`;

const ReviewInfoHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
`;

const SmallText = styled(CommonText)`
    font-size: 12px;
    color: ${colorLabel};
`;

const CommentText = styled(CommonText)`
    font-size: 14px;
    color: ${colorLabel};
    line-height: ${14 * 1.25}px;
    font-family: ${robotoLight};
    margin-bottom: 5px;
`;

const styles = StyleSheet.create({
    list: {
        backgroundColor: pageBackgroundColor,
    },
    item: {
        elevation: 10,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        flexDirection: 'row',
    },
    itemWrapper: {
        paddingHorizontal: pagePaddingHorizontal,
    },
    image: {
        marginTop: 7,
    },
});

function ReviewItem(props: {item: AppointmentRating}): JSX.Element {
    return (
        <View style={styles.itemWrapper}>
            <ReviewContainer style={styles.item}>
                <CustomImage
                    style={styles.image}
                    uri={props.item.user.imageUrl}
                    width={40}
                    circle
                />
                <ReviewInfo>
                    <ReviewInfoHeader>
                        <SmallText>{props.item.user.name}</SmallText>
                        <SmallText>30/12/21</SmallText>
                    </ReviewInfoHeader>
                    <CommentText>{props.item.comment}</CommentText>
                    <RatingView value={props.item.value} />
                </ReviewInfo>
            </ReviewContainer>
        </View>
    );
}

function ReviewList(props: ListProps<AppointmentRating>): JSX.Element {
    const renderItem = useCallback((info: {item: AppointmentRating}) => {
        return <ReviewItem item={info.item} />;
    }, []);
    return (
        <FlatList
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            data={props.items}
            refreshing={props.loading}
            onRefresh={props.onRefresh}
            onEndReached={props.onEndReached}
            onEndReachedThreshold={0.95}
            initialNumToRender={10}
            maxToRenderPerBatch={5}
            style={[props.style, styles.list]}
            ListHeaderComponent={props.header}
        />
    );
}

export default memo(ReviewList);
