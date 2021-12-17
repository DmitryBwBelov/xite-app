import styled from 'styled-components/native';
import {Button} from '@ui-kitten/components';

export const MainWrap = styled.View`
    margin: 10px;
`;

export const LoaderWrap = styled.View<{$height: number}>`
    align-items: center;
    justify-content: center;
    height: ${({$height}) => $height}px;
`;

export const ErrorText = styled.Text`
    font-weight: bold;
    font-size: 15px;
    text-align: center;
    color: red;
`;

export const ButtonWrap = styled(Button)``;

export const SeparatorWrap = styled.View`
    height: 10px;
`;

export const FlatListLastWrap = styled.View`
    height: 170px;
`;
