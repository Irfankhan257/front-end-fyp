import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

function InnovatorListItems({ setSelectedItem }) {
  const handleItemClick = (text) => {
    setSelectedItem(text);
  };

  return (
    <List>
      {['Feed', 'Profile', 'Marketplace', 'Blogs'].map((text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton onClick={() => handleItemClick(text)}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default InnovatorListItems;
