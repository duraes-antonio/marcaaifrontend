import React, {useRef, useState} from 'react';
import {StyleSheet} from 'react-native';
import {
    PageBodyContent,
    PageBodyScroll,
    PageContainer,
    PageHead,
    pagePaddingHorizontal,
} from './styles';
import {Nullable} from '../../../types/general';

export interface PageProps {
    body: JSX.Element;
    header?: Nullable<JSX.Element>;
    applyPaddingBody?: boolean;
    applyPaddingHeaderHeight?: boolean;
    headerFixed?: boolean;
    bodyScrollable?: boolean;
}

export const Page = (props: PageProps) => {
    const [headerHeight, setHeaderHeight] = useState(0);
    const pageHeadRef = useRef(null);
    const styles = StyleSheet.create({
        pageBody: {
            paddingBottom: headerHeight + 90,
            paddingLeft: props.applyPaddingBody ? pagePaddingHorizontal : 0,
            paddingRight: props.applyPaddingBody ? pagePaddingHorizontal : 0,
        },
    });
    return (
        <PageContainer>
            {props.header && (
                <PageHead
                    ref={pageHeadRef}
                    onLayout={e => {
                        if (!e?.nativeEvent?.layout) {
                            return;
                        }
                        const paddingHeight =
                            props.applyPaddingHeaderHeight === false
                                ? 0
                                : e.nativeEvent.layout.height;
                        setHeaderHeight(paddingHeight + 90);
                    }}>
                    {props.header}
                </PageHead>
            )}
            {props.bodyScrollable ? (
                <PageBodyScroll>
                    <PageBodyContent style={styles.pageBody}>
                        {props.body}
                    </PageBodyContent>
                </PageBodyScroll>
            ) : (
                <PageBodyContent
                    style={{
                        ...styles.pageBody,
                    }}>
                    {props.body}
                </PageBodyContent>
            )}
        </PageContainer>
        // TODO: Avaliar incluir tabs bottom no fim da página
    );
};

export default Page;
