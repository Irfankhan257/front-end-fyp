import React, { useEffect, useState } from 'react'
import SideDrawer from '../Components/Drawer'
import InnovatorListItems from './InnovatorNavList'
import { FeedInnovator } from './FeedInnovator';

export const InnovatorPanel = () => {

    const [selectedItem, setSelectedItem] = useState("Feed");

    const [menu, setMenu] = useState(null);


    useEffect(() => {
        if(selectedItem === "Feed"){
          setMenu(<FeedInnovator />);
        }else{
            setMenu(`${selectedItem} Ponga`)
        }
      }, [selectedItem]); 

  return (
    <div>
        <SideDrawer render={ <InnovatorListItems setSelectedItem={setSelectedItem}/>} drawerProps={selectedItem} menu={menu}/>
    </div>
  )
}
