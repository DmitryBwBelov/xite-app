// Modules
import React, {useEffect, useMemo, useState} from 'react';
import {ConnectedComponent} from 'react-redux';
import {IndexPath, SelectItem} from '@ui-kitten/components';
// Types
import {FilterType} from './types/Filter.type';
import {PayloadSearchInterface} from '@interfaces/videosList/PayloadSearch.type';
// Styles
import {FilterWrap, IconWrap, FilterButton, SearchWrap} from './styles';
// Enhancer
import {enhance} from './enhance';
import {TagInput} from '@components/tagInput';

const FilterComponent = React.memo<FilterType>(
    ({items, genres, filterVideosList}) => {
        const [expanded, setExpanded] = useState(false);
        const [searchYear, setSearchYear] = useState(new IndexPath(-1));
        const [selectedYearValue, setSelectedYearValue] = useState('');
        const [selectedTags, setSelectedTags] = useState([]);

        useEffect(() => {
            if (
                searchYear &&
                searchYear?.row >= 0 &&
                searchYear?.row <= items.length
            ) {
                const currentYear = items[searchYear?.row].release_year;
                setSelectedYearValue(`${currentYear}`);
                filterVideosList({year: currentYear} as PayloadSearchInterface);
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [searchYear, items]);

        useEffect(() => {
            if (selectedTags && selectedTags.length >= 1) {
                filterVideosList({
                    tags: selectedTags,
                } as PayloadSearchInterface);
            }
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [selectedTags]);

        const renderFilter = useMemo(() => {
            return (
                <>
                    <SearchWrap
                        value={selectedYearValue || 'Select year'}
                        selectedIndex={searchYear}
                        onSelect={index => setSearchYear(index as IndexPath)}>
                        {items.map(({release_year}) => (
                            <SelectItem
                                key={release_year}
                                title={release_year}
                            />
                        ))}
                    </SearchWrap>
                    <TagInput
                        setSelectedValues={values =>
                            setSelectedTags(values as never[])
                        }
                        values={genres}
                    />
                </>
            );
        }, [items, genres, searchYear, selectedYearValue]);

        return (
            <FilterWrap>
                <FilterButton
                    onPress={() => setExpanded(!expanded)}
                    appearance="ghost"
                    accessoryLeft={() => (
                        <IconWrap name="options-2-outline" fill="#000" />
                    )}
                />
                {expanded && renderFilter}
            </FilterWrap>
        );
    },
);

export const Filter = enhance(
    FilterComponent as ConnectedComponent<React.FunctionComponent, {}>,
);
