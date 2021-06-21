import React, {useRef, useState} from 'react';
import {StyleSheet} from 'react-native';
import {
    PageBodyContent,
    PageBodyScroll,
    PageContainer,
    PageHead,
    pagePaddingHorizontal,
} from './styles';

export interface PageProps {
    body: JSX.Element;
    header?: JSX.Element;
    applyPaddingBody?: boolean;
    headerFixed?: boolean;
    bodyScrollable?: boolean;
}

export const Page = (props: PageProps) => {
    const pageHeadRef = useRef(null);
    const [headerHeight, setHeaderHeight] = useState(0);
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
                        setHeaderHeight(e.nativeEvent.layout.height + 90);
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
