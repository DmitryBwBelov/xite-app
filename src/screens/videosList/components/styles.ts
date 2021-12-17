import styled from 'styled-components/native';
import {Icon, Button, Select} from '@ui-kitten/components';

export const MainWrap = styled.View<{$isLandscape: boolean}>`
    background-color: #fff;
    border-color: #ccc;
    border-style: solid;
    border-width: 1px;
    margin-right: ${({$isLandscape}) => ($isLandscape ? 10 : 0)}px;
`;

export const ImageWrap = styled.Image<{$isLandscape: boolean; $width: number}>`
    width: ${({$isLandscape, $width}) =>
        ($isLandscape ? $width / 2 : $width) - 20}px;
    height: 150px;
`;

export const DescriptionWrap = styled.View`
    align-items: center;
    margin: 20px 5px;
`;

export const TitleWrapText = styled.Text`
    font-weight: bold;
`;

export const AuthorWrapText = styled.Text``;

export const FilterWrap = styled.View`
    background: #fff;
    padding: 10px;
    margin: 0 0 10px 0;
`;

export const IconWrap = styled(Icon)`
    width: 20px;
    height: 20px;
`;

export const FilterButton = styled(Button)`
    width: 30px;
    align-self: flex-end;
`;

export const SearchWrap = styled(Select)`
    margin: 5px 0;
`;

export const SearchInputWrap = styled.TextInput`
    background: #fff;
    padding: 10px 5px;
`;
