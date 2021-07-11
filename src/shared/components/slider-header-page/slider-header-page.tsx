import React, {memo, ReactNode} from 'react';
import SwiperImages, {SwiperImagesProps} from '../swiper-images/swiper-images';
import {HeaderBottomBar, HeaderContainer} from './styles';

export interface SliderHeaderProps extends Omit<SwiperImagesProps, 'images'> {
    children: ReactNode;
    images?: string[];
}

function SliderHeaderPage(props: SliderHeaderProps): JSX.Element {
    return (
        <HeaderContainer>
            {props.images?.length && (
                <SwiperImages images={props.images} style={props.style} />
            )}
            <HeaderBottomBar>{props.children}</HeaderBottomBar>
        </HeaderContainer>
    );
}

export default memo(SliderHeaderPage);
