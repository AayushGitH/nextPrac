// Server component
import React from 'react'
import AddTask from './AddTask'


export const metadata = {
    title: 'Add page - ' + process.env.SITE_NAME
}

const page = () => {
  return (
    <AddTask />
  )
}

export default page
