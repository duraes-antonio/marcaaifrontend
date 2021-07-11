import React, {memo, useCallback} from 'react';
import {FlatList, View} from 'react-native';
import {AppointmentRating} from '../../domain/entities/appointment';
import {ListProps} from '../../models/list';
import {IdType} from '../../shared/store/types';
import {CustomImage} from '../../shared/components/general/image';
import RatingView from '../../shared/components/rating/rating-view';
import {
    CommentText,
    ReviewContainer,
    ReviewInfo,
    ReviewInfoHeader,
    SmallText,
    styles,
} from './styles';

function keyExtractor(item: AppointmentRating): IdType {
    return item.id;
}

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
