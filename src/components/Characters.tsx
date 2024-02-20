import { LocationsData } from "@/app/lib/types";
import Image from "next/image";
import Link from "next/link";

export const CharacterList: React.FC<{locations: LocationsData}> = ({locations}) => {
  return(
    <>
      <div>
      <h4 className="mx-auto max-w-[90%] text-sm font-semibold italic">Total Location Results: {locations.results.length}</h4>
      {locations.results.map((location, index) => (
        <div key={index} className='flex flex-col md:flex-row space-x-2 space-y-3 mx-auto max-w-[90%] border-b border-gray-200 my-3'>
          <div className='flex flex-col'>
          <div className='flex flex-col md:flex-row justify-start space-x-3 space-y-2'>
            <h3 className='text-lg font-bold uppercase mb-2'>{location.name} - Type: {location.type}</h3>
          </div>
            <h3 className='text-lead font-semibold mb-2 uppercase'>Residents</h3>

            <div className='flex flex-col w-full space-y-2 my-2 mx-auto md:grid md:grid md:grid-cols-4 md:gap-6 md:my-auto md:h-full'>
            {location.residents.map((resident, residentIndex) => (
              <Link href={{
                pathname: `/locations/${residentIndex}`,
                query: {
                  name: resident.name,
                  status: resident.status,
                  image: resident.image,
                  episodes: resident.episode.map(episode => episode.name).join("|"),
                }
              }} key={residentIndex}>
              <div key={residentIndex} className='space-y-2 w-full my-3'>
                <Image
                src={resident.image}
                alt={resident.name}
                width={150}
                height={150}
                className='mt-2 w-full max-w-[95%] m'
                >
                </Image>
                <p className='font-semibold flex justify-between px-1'>Name: <span className='text-sm font-light'>{resident.name}</span></p>
                <p className='font-semibold flex justify-between px-1'>Status: <span className='text-sm font-light'>{resident.status}</span></p>
                <p className='font-semibold flex justify-between px-1'>Episodes: <span className='text-sm font-light'>{resident.episode.length}</span></p>
                <ul className='bg-gray-200 h-12 overflow-y-auto rounded-xl mb-2 p-1'>
                  {resident.episode.map((episode, episodeIndex) => (
                    <li key={episodeIndex} className='p-1 text-sm'>{episode.name}</li>
                  ))}
                </ul>
              </div>
              </Link>
            ))}
          </div>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}
