// PropTypes Imports
import PropTypes from 'prop-types';
// React Router Imports
import { Link as ReactRouterLink } from 'react-router-dom';
// Material UI Imports
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from '@mui/material';
// React Icons Import
import { IconContext } from 'react-icons';
// Component Imports
import Hero from '../components/global/Hero/Hero';
import projectsList from '../components/projects/projectsList';

const linkStyle = {
  color: '#000',
  textDecoration: 'none',
  display: 'flex',
  '&:hover': {
    color: 'primary.main'
  }
};

const boxStyle = (index) => ({
  mb: { xs: 5, sm: 10 },
  p: 2,
  borderRadius: '25px',
  background: {
    md:
      index % 2 === 0
        ? 'linear-gradient(270deg, rgba(217, 217, 217, 0) 25.54%, rgba(217, 217, 217, 0.4) 54.29%)'
        : 'linear-gradient(90deg, rgba(217, 217, 217, 0) 25.54%, rgba(217, 217, 217, 0.4) 54.29%)',
    xs: 'linear-gradient(0deg, rgba(217, 217, 217, 0) 18.54%, rgba(217, 217, 217, 0.4) 82.29%)'
  },
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' }
});

const ProjectTitle = ({ index, title, logo, links }) => {
  const isSmallScreen = useMediaQuery('(max-width:500px)');
  const iconSize = isSmallScreen ? '30' : '45';

  return (
    <Stack minWidth={{ xs: '100%', md: '50%' }} order={{ xs: 0, md: index % 2 === 0 ? 2 : 1 }}>
      {logo && (
        <CardMedia
          component="img"
          image={logo}
          alt={title ? `${title} logo` : 'project logo'}
          sx={{
            mx: 'auto',
            objectFit: logo === '/assets/pass_logo.svg' ? 'cover' : 'fill',
            maxWidth: '90%',
            height: '150px'
          }}
        />
      )}
      {links && (
        <Stack direction="row" justifyContent="space-evenly" pt={{ xs: 0, sm: '1rem' }}>
          <IconContext.Provider value={{ size: iconSize }}>
            {links.map(({ href, icon }) => (
              <Link
                component={ReactRouterLink}
                key={href}
                to={href}
                target="_blank"
                rel="noopener noreferrer"
                sx={linkStyle}
              >
                {icon}
              </Link>
            ))}
          </IconContext.Provider>
        </Stack>
      )}
    </Stack>
  );
};

ProjectTitle.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      icon: PropTypes.element.isRequired
    })
  )
};

const ProjectInfo = ({ index, title, description, status, techStack }) => (
  <Stack maxWidth={{ xs: '100%', md: '50%' }} order={{ xs: 0, md: index % 2 === 0 ? 1 : 2 }}>
    <CardContent>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: '2rem'
        }}
      >
        {title && (
          <Typography variant="h4" component="h3" sx={{ display: { xs: 'none', sm: 'block' } }}>
            {title}
          </Typography>
        )}
        {status && (
          <Chip
            label={status}
            variant="outlined"
            sx={{ backgroundColor: '#DEDEDEB2', fontWeight: 'bold', minWidth: '120px' }}
          />
        )}
      </Stack>

      <Divider />

      {description && (
        <Stack textAlign={{ xs: 'center', sm: 'left' }} my={2} spacing={2}>
          <Typography variant="h6" component="h4" sx={{ fontWeight: 'bold' }}>
            Overview
          </Typography>
          <Typography variant="body1">{description}</Typography>
        </Stack>
      )}
      {techStack && (
        <Stack textAlign={{ xs: 'center', sm: 'left' }} my={2} spacing={2}>
          <Typography variant="h6" component="h4" sx={{ fontWeight: 'bold' }}>
            Technology Used
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            justifyContent={{ xs: 'center', sm: 'flex-start' }}
            useFlexGap
            flexWrap="wrap"
          >
            {techStack.map((tech) => (
              <Typography
                key={tech}
                variant="body1"
                sx={{
                  backgroundColor: 'primary.main',
                  borderRadius: '15px',
                  px: '10px',
                  color: 'white'
                }}
              >
                {tech}
              </Typography>
            ))}
          </Stack>
        </Stack>
      )}
    </CardContent>
  </Stack>
);

ProjectInfo.propTypes = {
  index: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  status: PropTypes.string,
  techStack: PropTypes.arrayOf(PropTypes.string)
};

const Projects = () => (
  <>
    <Hero
      pageName={'projects'}
      heroImage={`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/assets/projectsHeroImage.png)`}
      heroText={`Our products blend innovation, quality, and user-centric design to meet today's needs and anticipate tomorrow's challenges`}
    />
    <Stack
      as="section"
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
        maxWidth: 'xl',
        mx: 'auto'
      }}
    >
      <Typography variant="h2" sx={{ m: 5, textAlign: 'center' }}>
        Our Projects
      </Typography>
      {projectsList.map(({ index, title, description, status, logo, links, techStack }) => (
        <Box key={title} sx={boxStyle(index)}>
          <ProjectTitle index={index} title={title} logo={logo} links={links} />
          <ProjectInfo
            index={index}
            title={title}
            description={description}
            status={status}
            techStack={techStack}
          />
        </Box>
      ))}
    </Stack>
  </>
);

export default Projects;
