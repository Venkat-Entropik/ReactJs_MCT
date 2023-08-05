import * as React from 'react';

import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { useCon } from '../context/CreateContext';
import { Avatar } from '@mui/material';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase';


export default function UserSidebar() {
    const{user}=useCon()
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const logout=()=>{
    signOut(auth)
    toggleDrawer()
}
  

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Avatar onClick={toggleDrawer(anchor, true)}
          style={{
            height:38,
            width:38,
            cursor:'pointer',
            backgroundColor:'#EEBCD'
          }}
          src={user?.photoURL}
          alt={user?.displayName || user?.email}
          />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <div style={{
                width:300,
                padding:25,
                height:'100%',
                display:'flex',
                flexDirection:'column',
                fontFamily:'monospace'
            }}>
                <div style={{
                    flex:1,
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center',
                    gap:'20px',
                    height:'92%'
                }}>
                    <Avatar 
                    style={{
                        width:200,
                        height:200,
                        cursor:'pointer',
                        backgroundColor:'#EEBC!D',
                        objectFit:'contain'
                    }}
                    src={user?.photoURL}
                    alt={user?.displayName || user?.email}
                    >
                        
                    </Avatar>
                    <span 
                    style={{
                        width:'100%',
                        fontSize:25,
                        textAlign:'center',
                        fontWeight:'bolder',
                        wordWrap:'break-word'
                    }}
                    >
                        {user?.displayName || user?.email}
                    </span>
                </div>

                <Button
                variant='contained'
                onClick={logout}
                style={{
                    height:'8%',
                    width:'100%',
                    backgroundColor:'#EEBC1D',
                    marginTop:20
                }}
                >
                    Log Out
                </Button>

            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}