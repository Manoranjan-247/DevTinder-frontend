import React, { useState } from 'react';
import {
    Avatar,
    Menu,
    MenuItem,
    IconButton,
    Tooltip,
    Typography,
    Box,
    Toolbar,
    AppBar
} from '@mui/material';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    DevTinder 👨‍💻
                </Typography>
                <ProfileDropdown />
            </Toolbar>
        </AppBar>
    )
}



export default Navbar


function ProfileDropdown() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
            <Tooltip title="Account settings">
                <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
                    <Avatar
                        sx={{ width: 40, height: 40 }}
                        src="https://i.pravatar.cc/300"
                        alt="Profile"
                    />
                </IconButton>
            </Tooltip>

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 4,
                    sx: {
                        mt: 1.5,
                        minWidth: 180,
                        borderRadius: 2,
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={() => alert('Go to profile')}>
                    <Typography variant="inherit">Profile</Typography>
                </MenuItem>
                <MenuItem onClick={() => alert('Go to settings')}>
                    <Typography variant="inherit">Settings</Typography>
                </MenuItem>
                <MenuItem onClick={() => alert('Logging out')}>
                    <Typography variant="inherit">Logout</Typography>
                </MenuItem>
            </Menu>
        </Box>
    );
}