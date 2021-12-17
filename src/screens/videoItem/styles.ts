import styled from 'styled-components/native';

export const MainWrap = styled.View``;

export const ImageWrap = styled.Image<{
    $isLandscape: boolean;
    $width: number;
}>`
    width: ${({$width}) => $width}px;
    height: 300px;
`;

export const DescriptionWrap = styled.View`
    margin: 10px;
    align-items: center;
`;

export const TitleWrap = styled.Text`
    font-size: 20px
    font-weight: bold;
`;

export const YearWrap = styled.Text`
    background-color: #555;
    color: #fff;
    font-weight: bold;
    padding: 5px 10px;
    margin: 10px 0;
`;

export const GenreWrap = styled.Text`
    font-weight: bold;
`;

export const ArtistWrap = styled.Text`
    font-size: 17px;
`;
