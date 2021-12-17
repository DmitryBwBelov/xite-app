// Modules
import React, {useEffect, useState} from 'react';
import {ConnectedComponent} from 'react-redux';
import {Input} from '@ui-kitten/components';
// Types
import {FilterType} from './types/Filter.type';
// Enhancer
import {enhance} from './enhance';
import {PayloadSearchInterface} from '@interfaces/videosList/PayloadSearch.type';

const SearchComponent = React.memo<FilterType>(({filterVideosList}) => {
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        if (searchQuery && searchQuery?.length >= 1) {
            filterVideosList({query: searchQuery} as PayloadSearchInterface);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchQuery]);

    return (
        <Input
            placeholder="Start to type search"
            value={searchQuery}
            onChangeText={nextValue => setSearchQuery(nextValue)}
        />
    );
});

export const Search = enhance(
    SearchComponent as ConnectedComponent<React.FunctionComponent, {}>,
);
