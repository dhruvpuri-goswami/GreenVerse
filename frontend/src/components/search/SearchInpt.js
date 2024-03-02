import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function SearchInpt() {
  return (
    <div className='m-auto w-[81vw] h-[10%] p-2 flex items-center justify-between'>
      <Input className="mr-5" id="searchInpt" placeholder="Search...."/>
      <Button variant="outline"><FontAwesomeIcon className='mr-3' width={15} icon={faMagnifyingGlass} /> Search</Button>
    </div>
  )
}
