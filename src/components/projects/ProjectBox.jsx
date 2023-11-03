// React Router Imports
import { Link as ReactRouterLink } from 'react-router-dom';
// Material UI Imports
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// Custom Imports
import projectsList from './projectsList';

const ProjectBox = () => {
  return (
    <Box
      as="section"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Typography variant="h2" sx={{ m: 5, textAlign: 'center' }}>
        Our Projects
      </Typography>
      {projectsList
        .slice(0, 2)
        .map(({ index, title, description, status, logo, links, techStack }) => (
          <Box
            key={title}
            sx={{
              mb: { xs: 5, sm: 15 },
              p: 5,
              background:
                index % 2 === 0
                  ? 'linear-gradient(270deg, rgba(217, 217, 217, 0) 38.54%, rgba(217, 217, 217, 0.4) 82.29%)'
                  : 'linear-gradient(90deg, rgba(217, 217, 217, 0) 38.54%, rgba(217, 217, 217, 0.4) 82.29%)',
              borderRadius: '25px',
              minWidth: { xs: '95vw', sm: '80vw' },
              maxWidth: { sm: '85vw' }
            }}
          >
            <Grid container spacing={{ xs: 1, md: 10 }}>
              <Grid item xs={12} md={6} order={{ xs: 0, md: index % 2 === 0 ? 2 : 1 }}>
                <CardMedia
                  component="img"
                  image={logo ?? null}
                  alt={`${title} logo`}
                  sx={{
                    p: 3
                  }}
                />
                <Stack
                  direction="row"
                  justifyContent="space-evenly"
                  spacing={{ xs: 0, md: 2 }}
                  sx={{ pt: '1rem' }}
                >
                  {links.map(({ href, icon }) => (
                    <Link
                      component={ReactRouterLink}
                      key={href}
                      href={href}
                      alt={`${title} logo`}
                      target="_blank"
                      rel="noopener"
                      sx={{
                        color: '#000',
                        display: 'flex',
                        '&:hover': {
                          color: 'primary.main'
                        }
                      }}
                    >
                      {/* TODO: Fix icons not rendering */}
                      {icon}
                    </Link>
                  ))}
                </Stack>
              </Grid>

              <Grid item xs={12} md={6} order={{ xs: 0, md: index % 2 === 0 ? 1 : 2 }}>
                <CardContent>
                  <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={1}
                    sx={{
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Typography
                      variant="h4"
                      component="h3"
                      sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                      {title ?? null}
                    </Typography>
                    <Chip
                      label={status ?? null}
                      color={'primary'}
                      variant="outlined"
                      sx={{ backgroundColor: ' #D9D9D9' }}
                    />
                  </Stack>
                  <Typography variant="body1" sx={{ fontWeight: 'bold', my: 2 }}>
                    Overview
                  </Typography>
                  <Typography variant="body2">{description ?? null}</Typography>
                  <Typography variant="body1" sx={{ fontWeight: 'bold', my: 2 }}>
                    Technology Used
                  </Typography>
                  <Typography variant="body2">Built with {techStack ?? null}</Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Box>
        ))}
    </Box>
  );
};

export default ProjectBox;
