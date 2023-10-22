// Material UI Imports
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
// Custom Imports
import rose_logo from '/assets/rose_logo.png';
// import projectsList from '../projects/projectsList';

const projectsList = [
  {
    title: 'RecordSponge',
    description:
      "RecordSponge is an app that helps community organizations quickly analyze an individual's criminal history to determine if they qualify to have their records expunged.",
    logo: { image: '/assets/logoPlaceholder.svg', alt: 'RecordSponge logo' }
  },
  {
    title: 'PASS',
    description:
      'PASS is an open source digital wallet for providing home insecure individuals a safe place to store documents within their control. PASS additionally assists caseworkers with processing and providing documents needed to complete the housing assistance application process.',
    logo: { image: '/assets/logoPlaceholder.svg', alt: 'PASS logo' }
  },
  {
    title: 'CODE PDX',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit repellat saepe vel unde animi nesciunt suscipit iure quas, delectus possimus officiis voluptatum provident voluptates dolores deserunt nemo cum. Quaerat, cupiditate ad eius vel voluptatem sapiente iure sunt magni alias repellat?',
    logo: { image: rose_logo, alt: 'CODE PDX logo' }
  }
];

const ProjectsBrief = () => {
  return (
    <Box
      as="section"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pb: 25,
        m: { xs: 1, sm: 4 }
      }}
    >
      <Typography variant="h3" component="h2" sx={{ mb: '40px' }}>
        Our Projects
      </Typography>
      <Grid container rowSpacing={3}>
        {projectsList.map(({ title, description, logo }) => (
          <Grid
            key={title}
            item
            xs={12}
            md={6}
            lg={4}
            sx={{
              textAlign: 'justify'
            }}
          >
            <Card
              sx={{
                mx: 2,
                p: 4,
                background: 'lightgrey',
                borderRadius: '10px',
                height: '100%'
              }}
            >
              <CardMedia
                component="div"
                sx={{
                  p: '25%'
                }}
                image={logo.image ?? null}
                alt={logo.alt ?? null}
              />
              <CardContent>
                <Typography variant="body1" sx={{ py: '1rem' }}>
                  {description ?? null}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" href="/projects" size="large">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectsBrief;
