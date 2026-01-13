import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import { IconButton } from '@mui/material';

const Logo = () => {
  return (
    <IconButton> {/* disableRipple = matiin efek “gelombang air” pas diklik */}
        <LocalLibraryIcon fontSize='large'/>
    </IconButton>
  )
}

export default Logo