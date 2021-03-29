import { Button, Icon } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import Avatar from '@material-ui/core/Avatar'
import SearchIcon from '@material-ui/icons/Search'
import AccountCircle from '@material-ui/icons/AccountCircle'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';

const useStyles = makeStyles((theme) => ({
    offset: theme.mixins.toolbar,
    grow: {
        flexGrow: 1
    },
    root: {
        minHeight: 50,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%'
    },
    searchIcon: {
        padding: theme.spacing(0,2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'

    },
    inputRoot: {
        color: 'inherit'
    },
    inputInput: {
        padding: theme.spacing(1,1,1,0),
        paddingLeft: `calc(1em+ ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%'
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex'
        }
    },
    iconColor: {
        color: "black"
    },
}));
const Header = () => {
    const classes = useStyles()
    
    return (
        <div className={classes.grow}>
            <AppBar className={classes.root} color='default' position='fixed'>
                <Toolbar>Instagram
                    <div className={classes.search}>                
                        
                        <InputBase 
                            placeholder="Search..."
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput
                            }}
                            inputProps={{ 'aria-label': 'search'}}
                        ></InputBase>
                    </div>
                    <div className={classes.sectionDesktop}>
                            <IconButton>
                                <HomeOutlinedIcon className={classes.iconColor}/>
                            </IconButton>
                            <IconButton>
                                <Badge badgeContent={13} color="secondary">
                                    <ForumOutlinedIcon className={classes.iconColor}/>
                                </Badge>
                            </IconButton>
                            <IconButton>
                                <Badge badgeContent={5} color="secondary">
                                    <FavoriteBorderOutlinedIcon className={classes.iconColor}/>
                                </Badge>
                            </IconButton>
                            <IconButton>
                                <Avatar alt='Cindy Baker' src="/static/images/avatar/3.jpg"></Avatar>
                            </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <div className={classes.offset}></div>
        </div>
        
    )
}

// TODO: stick to top 
export default Header
