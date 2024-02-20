'use client';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchLocations, locationSelector } from '../../redux/locationSlice';
import { useEffect, useState } from 'react';
import { CharacterList } from '@/components/Characters';
import { LocationsData } from '../lib/types';


const Page: React.FC = () => {
  const dispatch = useAppDispatch();
  const { locations, error, loading } = useAppSelector(locationSelector);
  const [query, setQuery] = useState<string>('');
  const [searchLoading, setLoading] = useState<boolean>(false);
  const [searchType, setSearchType] = useState<string>('');
  const [searchedLocations, setLocations] = useState<LocationsData>({ results: [] })

  let searchedCharacters: LocationsData = { results: [] };
  let searchedEpisodes: LocationsData = { results: [] };

  const handleSearchTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSearchType(selectedValue);
    console.log(selectedValue);
  };

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setQuery(value);
    console.log(query)
  }

  const handleSearch = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    console.log('searching');
    switch (searchType) {
      case 'location':
        searchedLocations.results = locations.results.filter(location =>
          location.name.toLowerCase().includes(query.toLowerCase())
        );
        console.log(searchedLocations);
        setLocations(searchedLocations)
        setLoading(false);
        break;

      case 'character':
        searchedLocations.results = locations.results.filter(location =>
          location.residents.some(resident =>
            resident.name.toLowerCase().includes(query.toLowerCase())
          )
        );
        console.log(searchedCharacters);
        setLocations(searchedLocations);
        setLoading(false);
        break;

      case 'episode':
        searchedLocations.results = locations.results.filter(location =>
          location.residents.some(resident =>
            resident.episode.some(episode =>
              episode.name.toLowerCase().includes(query.toLowerCase())
            )
          )
        );
        console.log(searchedEpisodes);
        setLocations(searchedLocations)
        setLoading(false);
        break;
      default:
        setLocations(locations);
    }
  };

  useEffect(() => {
    if (locations.results.length === 0){
      dispatch(fetchLocations());
    }
  }, [locations.results.length]);

  if (loading || searchLoading) {
    return <div className='w-full h-screen flex justify-center items-center'>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
     <form onSubmit={handleSearch} className='flex w-full max-w-[90%] mx-auto'>
      <input placeholder='Search...'
        onChange={handleChange}
        className='w-full border border-gray-300 rounded-full pl-2 max-w-[90%] mx-auto'/>
      <select onChange={handleSearchTypeChange}>
       <option value="">Unfiltered</option>
       <option value="episode">Episode</option>
       <option value="location">Location</option>
       <option value="character">Character</option>
      </select>
      <button type='submit' className='bg-emerald-200 rounded-lg p-1'>Search</button>
     </form>

    {(searchType && searchedLocations.results.length > 0) && (
      <CharacterList locations={searchedLocations} />
    )}

    {!searchType && (
      <CharacterList locations={locations} />
    )}
    </>
  );
};

export default Page;
