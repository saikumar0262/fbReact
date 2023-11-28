import { Button, styled, Typography } from '@mui/material'
import { Settings, Add } from '@mui/icons-material'

export const Facebook = () => {
    const BlueBotton = styled(Button)({
        backgroundColor: 'skyblue',
        color: '#888',
        margin: 5,
        "&:hover": {
            backgroundColor: 'lightblue'
        },
        "&:disabled": {
            backgroundColor: 'gray',
            color: '#fff'
        }
    })
    return (
        <div>
            <Button variant="text">Text</Button>
            <Button
                startIcon={ <Settings /> }
                variant="contained"
                color="secondary"
                size="small">
                Settings
            </Button>
            <Button
                startIcon={ <Add /> }
                variant="contained"
                color="success"
                size="small">
                Add New Post
            </Button>
            <Button variant="outlined" disabled>Outlined</Button>
            <Typography variant="h1" component="p">
                It's uses h1 style but it's a p tag
            </Typography>
            <BlueBotton>My Button</BlueBotton>
            <BlueBotton >Another Button</BlueBotton>
        </div>
    )
}
